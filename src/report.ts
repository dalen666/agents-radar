/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import fs from "node:fs";
import path from "node:path";
import { type Lang, FOOTER } from "./i18n.ts";
import { sleep } from "./date.ts";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

export const LLM_TOKENS_DEFAULT = 4096;
export const LLM_TOKENS_TRENDING = 6144;
export const LLM_TOKENS_WEB = 8192;
export const LLM_TOKENS_ROLLUP = 8192;
import { type LlmProvider, createProvider } from "./providers/index.ts";

const NO_LLM = process.env["NO_LLM"] === "1";

let _provider: LlmProvider | null = null;
let _llmDisabled = false; // 自动降级标记：余额不足时设为 true

function getProvider(): LlmProvider | null {
  if (NO_LLM || _llmDisabled) return null;
  if (!_provider) {
    try {
      _provider = createProvider();
    } catch (err) {
      console.error(`[llm] Provider creation failed: ${err}`);
      return null;
    }
  }
  return _provider;
}

/** 检测是否为余额不足 / 无效凭证等不可恢复错误 */
function isInsufficientFunds(err: unknown): boolean {
  const msg = String(err instanceof Error ? err.message : err);
  return (
    (err as { status?: number })?.status === 402 ||
    msg.includes("Insufficient") ||
    msg.includes("insufficient") ||
    msg.includes("402") ||
    msg.includes("payment") ||
    msg.includes("billing") ||
    msg.includes("quota") ||
    msg.includes("credits") ||
    msg.includes("Invalid API Key") ||
    msg.includes("authentication")
  );
}

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  const provider = getProvider();
  if (!provider) {
    console.log("[llm] NO_LLM mode — skipping LLM call");
    return "";
  }
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      return await provider.call(prompt, maxTokens);
    } catch (err) {
      // 余额不足 / 认证失败 → 自动降级到 NO_LLM 模式
      if (isInsufficientFunds(err)) {
        releaseSlot();
        released = true;
        _llmDisabled = true;
        console.error(`[llm] ⚠️ Insufficient funds / auth error — auto-switching to NO_LLM mode`);
        console.error(`[llm]   Error: ${err instanceof Error ? err.message : err}`);
        return "";
      }
      if (attempt < MAX_RETRIES && is429(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] 429 — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: Lang = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return `\n\n---\n*${FOOTER.autoGen[lang]} [agents-radar](https://github.com/${digestRepo})${lang === "en" ? "." : " 自动生成。"}*`;
}
