# OpenClaw Ecosystem Digest 2026-04-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-28 04:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the project digest for **OpenClaw** on **2026-04-28**.

---

# OpenClaw Project Digest — 2026-04-28

## 1. Today's Overview
OpenClaw shows extremely high activity today, with **500 issues** and **500 pull requests** updated in the last 24 hours. While the volume is massive, the sentiment is mixed: **73% (367) of issues are closed**, suggesting a strong bug-fix cadence, but **86% (430) of PRs remain open**, indicating a significant review and merge bottleneck. Two new patch releases went out (v2026.4.25 and v2026.4.26), addressing Voice/TTS upgrades and real-time transport contracts. Despite rapid iteration, the project is dealing with several regressions and duplicate-injection bugs that are frustrating users.

## 2. Releases
**Two releases published today:**
- **v2026.4.26** (`2026_04_26`): Adds a generic browser realtime transport contract, Google Live browser Talk sessions with constrained ephemeral tokens, and a Gateway relay for backend-only realtime voice plugins.
- **v2026.4.25** (`2026_04_25`): Major TTS upgrade — new `/tts latest` command, chat-scoped auto-TTS controls, persona support, per-agent/per-account overrides, and expanded provider coverage (Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, ElevenLabs v3).

No explicit breaking changes or migration notes were included in the release bodies.

## 3. Project Progress
Today's merged/closed activity focused on squashing regressions and stabilizing core channels. Notable closed PRs (from issue backlinks) include fixes for:
- **Subagent thread routing** in Slack and Discord (fixes for #64454, #62736)
- **API key configuration issues** for web_search (#53857)
- **Provider config defaults** — Kimi now correctly defaults to `openai-completions` (#61379)
- **Session compaction display bugs** in the Control UI (#52463)
- **Plugin init log leakage** to stdout (#51496)

Several PRs improved **security posture**, including workspace PATH injection prevention (PR #73264) and agent-to-agent announce delivery fixes (#51626).

## 4. Community Hot Topics
| Issue/PR | Comments | Reactions | Key Theme |
|---|---|---|---|
| [#53959: GPT-5.3 Codex tool execution regression](https://github.com/openclaw/openclaw/issues/53959) | 20 | 👍4 | **Critical integration regression** — tools (exec, MCP, web search) silently break after update. Users must roll back. |
| [#64454: Slack subagent thread routing broken](https://github.com/openclaw/openclaw/issues/64454) | 14 | 👍1 | **Channel delivery bug** — subagent responses bypass thread routing, disrupting multi-agent workflows in Slack. |
| [#51130: Gateway restart notification missing](https://github.com/openclaw/openclaw/issues/51130) | 10 | 👍1 | **Operator UX** — users want interruptible, restart-aware task completion notification. |
| [#71761: Duplicate message injection after v2026.4.24](https://github.com/openclaw/openclaw/issues/71761) | 6 | 👍2 | **Recent regression** — all inbound messages injected twice, consuming 2x tokens. Affects WebChat and QQ plugin users. |
| [#43015: Schema overexposure causing GPT auto-population errors](https://github.com/openclaw/openclaw/issues/43015) | 5 | 👍3 | **Model interaction** — overly broad tool schema causes GPT to fill fields incorrectly, breaking simple send actions. |

**Underlying need**: Users are demanding **reliable tool execution, correct multi-channel routing, and zero-token-waste** as OpenClaw scales to production multi-agent setups.

## 5. Bugs & Stability
**High severity regressions active today:**
1. **Duplicate message injection** (#71761, closed) — All channel messages injected twice into agent context after v2026.4.24 update. **Fix delivered in v2026.4.25-v2026.4.26**.
2. **GPT-5.3 Codex zero tool execution** (#53959, closed) — Tools silently do nothing. Users stuck on pre-2026.3.23-2.
3. **Gemini reasoning leak** (#41494, open) — Chain-of-thought still visible to users on Telegram despite earlier fixes. Active for 7 weeks.
4. **Agent hallucinates success on write tools** (#41304, open) — Agent claims email sent but no delivery. Active for 7 weeks.

**Stability concerns**: The `plugins.allow` false warning (#66856, #64933) persists across multiple releases, undermining trust in gateway status output. The context counter showing `0/200k` with LiteLLM proxies (#52235) prevents compaction from ever triggering — a silent performance drain.

## 6. Feature Requests & Roadmap Signals
- **Filesystem Access Control** (#52621, closed): `allowedPaths`/`denyPaths` — expected to land soon given community demand and security sensitivity.
- **Per-agent cost budget enforcement** (#42475, open): Daily/monthly caps at gateway level — likely in next major release as operators request spend governance.
- **MathJax/LaTeX rendering** (#42840, open): High upvote count (4) — strong candidate for a Control UI refresh.
- **Android APK release** (#35515, closed): Pairing Android as sensor node — could be a stretch goal for Q3.
- **Durable natural-language rules** (#41366, open): Multi-agent group chat stability — expected patch in v2026.5.x.

## 7. User Feedback Summary
**Satisfaction drivers**:
- Rapid bug fix turnaround — many regressions closed within 24-48 hours.
- Voice/TTS upgrades well received (ElevenLabs, Azure integrations).
- Community contributors acknowledged (12+ named in today's releases).

**Pain points**:
- **Regression fatigue**: Users report "worked before, now fails" multiple times across versions.
- **Configuration complexity**: `plugins.allow`, `appPrincipal`, and undocumented fields create friction.
- **Token waste**: Duplicate message injection and false context-count calls erode cost efficiency.
- **Missing async notification**: Users have no visibility into work completed during gateway restarts (#51130).

## 8. Backlog Watch
These items remain open for an extended period and need maintainer attention:
- **[#41494 — Gemini reasoning leak](https://github.com/openclaw/openclaw/issues/41494)** (open 50 days, 10 comments): A recurring regression that has been "fixed" twice. Needs a permanent solution.
- **[#41304 — Agent hallucinates tool success](https://github.com/openclaw/openclaw/issues/41304)** (open 50 days, 10 comments): Blocks critical write workflows (email, GitHub). No fix PR linked.
- **[#41619 — Google Gemini CLI auth broken](https://github.com/openclaw/openclaw/issues/41619)** (open 49 days, 7 comments): Authentication regression for Gemini users.
- **[#41355 — Discord thread echo contamination](https://github.com/openclaw/openclaw/issues/41355)** (open 50 days, 6 comments): ThreadStarterBody re-injected on every turn — disruptive for long Discord conversations.
- **[#42840 — LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840)** (open 48 days, 6 comments, 👍4): Popular request with no PR activity.

---

*Generated from OpenClaw GitHub data on 2026-04-28.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem

**Date:** 2026-04-28

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of **intense, production-focused iteration**. Nearly all major projects are shipping fixes within 24-48 hours of bug reports, indicating a maturing developer operations cadence. The community is shifting from building basic chat interfaces toward solving **enterprise-grade concerns**: multi-agent orchestration, cost governance, secure channel integration, and persistent memory. A clear bifurcation is emerging between projects focused on core agent loop reliability (OpenClaw, Hermes Agent) and those prioritizing rapid feature expansion and channel parity (NanoBot, Moltis). The overwhelming demand signal is for **reliable tool execution, zero-token-waste context management, and platform-grade security**—the foundational prerequisites for production deployment of AI agents.

### 2. Activity Comparison (Last 24 Hours)

| Project | Issues Updated | PRs Updated | Release Today? | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | Yes (2 patches) | **High** – Rapid bug fix cadence but significant review bottleneck (86% of PRs open) |
| **PicoClaw** | 108 | 120 | No | **High** – Strong merge rate (53%), likely pre-release accumulation |
| **Hermes Agent** | 50 | 50 | No | **High** – High-velocity integration phase, imminent patch release |
| **CoPaw (QwenPaw)** | 50 | 49 | No | **High** – Healthy closed rate (50% issues, 55% PRs), responsive team |
| **ZeroClaw** | 43 | 47 | No | **Moderate** – Very high activity but low throughput (4 issues, 6 PRs closed) |
| **NanoBot** | 11 | 31 | No | **High** – Strong commit velocity, responsive maintainers |
| **NanoClaw** | 12 | 23 | No | **High** – Healthy contribution pipeline, targeted fix chains |
| **Moltis** | 0 (est.) | 17 | No | **High** – Feature-heavy delivery phase, 12/17 PRs merged |
| **LobsterAI** | 0 (est.) | 32 (18 merged) | Yes (2026.4.25) | **High** – Strong stability push, Windows-specific fixes |
| **IronClaw** | 0 (est.) | 7 | No | **High** – Architectural progress (Reborn), canary stability a concern |
| **NullClaw** | 0 | 0 | No | **Inactive** |
| **TinyClaw** | 0 | 0 | No | **Inactive** |
| **ZeptoClaw** | 0 | 0 | No | **Inactive** |

### 3. OpenClaw's Position

**Advantages:**
- **Scale of community:** With 500 issues and 500 PRs in a day, OpenClaw has the largest reactive contributor base by a wide margin. This volume enables rapid bug discovery (73% issue closure rate).
- **Release velocity:** Two patch releases in a single day addressing high-priority regressions (duplicate message injection, TTS upgrades) demonstrates a mature CI/CD pipeline.
- **Production-grade stability focus:** The community is explicitly demanding reliable tool execution (#53959), correct multi-channel routing (#64454), and token-waste elimination (#71761) – the hallmarks of a project being used in real-world multi-agent production setups.

**Technical Approach Differences:**
- **Core reference implementation:** OpenClaw positions itself as the reference architecture for the broader "Claw" ecosystem (PicoClaw, NanoClaw, ZeroClaw). This creates a centralization pattern where core fixes flow downstream.
- **Context compaction & security posture:** OpenClaw has a more mature approach to context window management (compaction display, `0/200k` counter fix) and workspace security (PATH injection prevention) compared to project-specific solutions in PicoClaw or NanoClaw.

**Community Size Comparison:**
- OpenClaw's issue/PR volume (500 each) is approximately **5-10x higher** than the next most active projects (PicoClaw at ~100-120, Hermes at 50). This reflects both a larger user base and a lower bar for filing issues.
- However, the 86% open-PR rate suggests a **review bottleneck** that smaller projects (NanoBot at 50% merge rate) manage more efficiently. The `#53959` regression (GPT-5.3 Codex) remaining open despite 20 comments indicates critical fixes can stall.

### 4. Shared Technical Focus Areas

The following requirements are emerging across **multiple projects**, indicating high-value areas for any AI agent developer:

1.  **Context Window & Token Management (All active projects)**
    - **Need:** Reliable compaction, accurate token counting, session size rotation, and context loss prevention.
    - **Specifics:** OpenClaw (#52235 context counter bug), PicoClaw (PR #2333 structured compaction, #629 no retry), NanoClaw (#987 session rotation), Hermes (#8742 memory search mismatch).

2.  **Multi-Channel & Multi-Platform Routing (All active projects)**
    - **Need:** Correct thread routing, channel-agnostic message handling, and parity across IM platforms.
    - **Specifics:** OpenClaw (#64454 Slack subagent routing), Hermes (Matrix adapter parity), PicoClaw (PR #2551 channel decoupling), CoPaw (#3901 WeCom approval fix), ZeroClaw (#6166 WeChat recovery).

3.  **Persistent Cross-Session Memory (OpenClaw, Hermes, PicoClaw, CoPaw)**
    - **Need:** Long-horizon task persistence, memory search reliability, and "mempalace"-style external memory.
    - **Specifics:** Hermes (#6323 "mempalace", #8742 memory search), PicoClaw (#1919 Seahorse memory), CoPaw (#3902 memory parse fix), OpenClaw (multiple memory-related issues).

4.  **Security & Access Control (OpenClaw, NanoBot, PicoClaw, IronClaw, CoPaw)**
    - **Need:** PATH injection prevention, filesystem access control, log redaction, and secure public deployment.
    - **Specifics:** OpenClaw (#52621 `allowedPaths`), NanoBot (PR #3492 public-deploy hardening), PicoClaw (#2327 security hardening), IronClaw (#2092 memory poisoning), CoPaw (#3869 channel-side approval).

5.  **Tool & Provider Reliability (OpenClaw, NanoBot, PicoClaw, ZeroClaw, CoPaw)**
    - **Need:** No silent tool failures, graceful provider degradation, MCP integration stability.
    - **Specifics:** OpenClaw (#53959 Codex regression), NanoBot (#3478 provider timeout), PicoClaw (#2578 API key dropped), ZeroClaw (#5600 Kimi streaming error), CoPaw (#3822 MCP hanging).

### 5. Differentiation Analysis

| Feature / Focus | OpenClaw | Hermes Agent | PicoClaw | NanoClaw | CoPaw | IronClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Target User** | Production operators, multi-agent setups | Multi-platform enterprise users | Edge/Android & local-first users | Container-first & automated agent ops | Chinese enterprise & IM users | Trusted Execution (TEE) & secure compute |
| **Primary Channel** | Slack, Discord, WebChat | Matrix, WeChat, Feishu | Mobile (Android), WebChat | Containerized (Docker/LXC) | WeCom, DingTalk, Feishu | WASM channels, custom protocol |
| **Architecture** | Reference monolith | Adapter-heavy, modular | Compact, embeddable | Session-scoped containers | Provider-agnostic plugin | Component-based (Reborn) |
| **Memory Strategy** | Database + compaction | External provider ("mempalace") | Bio-inspired (Seahorse) | Session rotation + flush | LLM-titled sessions | Contract-based |
| **Release Maturity** | High (2 patches/day) | High (imminent v0.11.1) | Medium (v0.2.6, rapid) | High (steady PR cadence) | Medium (v1.1.4.post2) | Medium (v0.26.0, Reborn) |
| **Unique Strength** | Ecosystem reference | Platform parity (Matrix) | Embeddability | Container isolation | Chinese IM localization | TEE/secure compute |
| **Unique Weakness** | Review bottleneck | Backend regressions (OpenViking) | Long-standing UX issues | Setup fragility | Config persistence | Canary stability |

**Key Takeaway:** No project dominates all areas. The "Claw" ecosystem (OpenClaw → PicoClaw, NanoClaw, ZeroClaw) creates a **specialization tree** where the core reference buries into edge and mobile targets. Hermes Agent differentiates on platform parity (Matrix), while CoPaw owns the Chinese enterprise IM niche.

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (Hardening for Production)**
- **OpenClaw:** Highest absolute activity, but review bottleneck is a risk. The regression fatigue (#53959, #71761) suggests moving from feature-add to stability-first.
- **Hermes Agent:** High-velocity integration with imminent patch. The Matrix adapter parity push closes a major competitive gap.
- **NanoBot:** Excellent maintainer responsiveness (50% PR merge rate). Strong contributor-base growth.

**Tier 2: Feature-Heavy Delivery (Building Market Fit)**
- **PicoClaw:** Pre-release accumulation phase. The Seahorse memory system (#1919) and web chat streaming (PR #2587) are significant features.
- **Moltis:** Feature-heavy delivery phase. Agent architecture simplification (PR #898) and auto code indexing (PR #903) are architecturally significant.
- **LobsterAI:** Stability-driven iteration. Windows-specific fixes indicate expanding platform support.

**Tier 3: Stabilizing / Architectural Transition**
- **NanoClaw:** v2 migration surfacing regressions (attachments, sessions), but targeted fix chains are effective.
- **IronClaw:** "Reborn" architecture landing is the primary narrative. Canary stability is a short-term concern.
- **ZeroClaw:** High contributor velocity but low throughput. The bulk revert recovery (#6074) suggests a need for process improvement.

**Tier 4: Inactive**
- **NullClaw, TinyClaw, ZeptoClaw:** No activity in the last 24 hours. Likely inactive or mature stable projects with no daily churn. (Note: This is a snapshot; previously active projects may have periodic releases.)

### 7. Trend Signals

1.  **From Chat Tool to Agent OS:** The community demand for persistent memory ("mempalace" in Hermes, Seahorse in PicoClaw), lifecycle webhooks (#3373 in NanoBot), and cost governance (#42475 in OpenClaw) signals a shift from treating agents as "chatbots with plugins" to **full-fledged operating systems for autonomous workflows**. Developers should architect for long-running, stateful, and auditable agent lifecycles.

2.  **Security is No Longer Optional:** Across NanoBot (PR #3492 public-deploy hardening), OpenClaw (#52621 filesystem access control), and CoPaw (#3869 channel-side approval), security is the most commonly emerging requirement. The era of "expose a WebSocket, hope for the best" is ending. **Developers must prioritize permission models, secret redaction (LobsterAI PR #1844), and secure reverse proxy configuration** as core features, not afterthoughts.

3.  **The Rise of Specialized Channels:** While Telegram and Discord remain universal, the most **intense integration work** is happening for enterprise and regional IM platforms: WeCom/WeChat (CoPaw, ZeroClaw), DingTalk/Feishu (CoPaw), Mattermost (NanoBot PR #2592), and SimpleX (NanoBot). Developers targeting B2B or specific geographic markets must **invest heavily in channel adapter parity**—users cannot tolerate "/approval approve" being broken on their primary work chat.

4.  **MCP as a Standard, But with Growing Pains:** MCP (Model Context Protocol) integration is becoming a standard expectation (OpenClaw, CoPaw, ZeroClaw). However, the ecosystem is still dealing with **fragile implementations**: MCP circuit breakers that wedge permanently (Hermes #16788) and JSON schema incompatibilities with specific providers (PicoClaw PR #2681, CoPaw #3822). Expect a wave of MCP-specific stability fixes in the next 2-4 weeks.

5.  **Local/Edge Inference Demands First-Class Support:** The frustration with remote Ollama (ZeroClaw #6123), LM Studio "easy connect" (PicoClaw #28), and missing timeouts for local servers (NanoBot #3455) reveals a **strong and underserved user base running inference on-premise**. Projects that invest in graceful degradation for local providers, configurable `extra_body` parameters (NanoBot PR #3491), and edge-optimized builds (PicoClaw Android APK #35515) will capture this growing segment.

6.  **Observability is the Next Frontier:** Users are demanding cost tracking (ZeroClaw #6001, OpenClaw #42475), real-time token display (CoPaw #3366), progress feedback during tool execution (PicoClaw #571), and OTel GenAI integration (PicoClaw #1731, IronClaw). The next "must-have" feature for production agents is **transparent, queryable telemetry** that allows operators to understand exactly where tokens, time, and money are being spent.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot, generated from the provided GitHub data for **2026-04-28**.

---

## NanoBot Project Digest: 2026-04-28

### 1. Today's Overview

The NanoBot project is experiencing **very high activity**, with 31 Pull Requests and 11 Issues updated in the last 24 hours. This burst of activity signals a rapid development cycle, likely preparing for a new release. The maintainers have been highly responsive, merging or closing 15 PRs and resolving 7 Issues. The community is actively contributing features like new channel integrations (SimpleX, Mattermost) and providers (Hugging Face), while also reporting critical bugs around security, WebSocket connections, and provider timeouts. Overall, the project remains in a healthy, fast-paced state with strong community engagement.

### 2. Releases

No new releases were published today. The latest version remains at **v0.1.5.post2**, based on issue history. Given the volume of merged fixes and features today, a new patch release is expected imminently.

### 3. Project Progress

Fifteen PRs were merged or closed today, indicating significant progress across several areas:

- **Provider Stability & Refinement:**
    - **#3478** & **#3455**: Fixed a critical bug where the `AsyncOpenAI` client had no timeout, causing agents to hang for up to 600 seconds on large context requests. A bounded request timeout has been applied.
    - **#3480** & **#3479**: Fixed a regression in the OpenAI Codex provider where streaming progress deltas (`_progress`) were no longer sent to channels. This has been restored.
    - **#3389**: Fixed three failure modes in the heartbeat system, preventing instruction leaks and ensuring clean delivery of heartbeat outputs.
- **New Features & Commands:**
    - **#3466**: Added a new `/history` slash command, allowing users to review the last N messages in their current session.
- **Documentation:**
    - **#3483**: Updated configuration docs to include entries for the `opencode_go` and `opencode_go_anthropic` providers.

### 4. Community Hot Topics

The following issues and PRs drew the most attention, revealing core user needs:

- **Security Concerns (PR #3492):** PR #3492, *"fix(security): harden public-deploy footguns"*, addresses silent security risks when deploying NanoBot publicly via reverse proxies. The community is crucial here, as this directly impacts operators who want to expose the WebUI or API safely.
- **Channel Extension (PR #2592):** The ongoing PR #2592 to add **Mattermost channel support** is a significant feature request. It highlights the demand for enterprise-grade, self-hosted chat integrations beyond Slack and Telegram, showing the project is expanding its B2B appeal.
- **Session Persistence (Issue #3292):** Issue #3292, *"Session-Level Focus Tool: Persistent Task Awareness"*, is a sophisticated feature request. Users want the agent to maintain a "mental task board" across interruptions. This is a deeper request for agentic memory and task management, going beyond simple history.
- **Provider Flexibility (PR #3490):** PR #3490, *"feat(providers): add Hugging Face inference provider"*, was directly contributed by a Hugging Face employee. This signals strong interest from major AI ecosystem players in making NanoBot a universal agent interface, connecting to a wide variety of models.

### 5. Bugs & Stability

Several bugs were reported and fixed today, with severity ranging from critical to moderate.

- **[CRITICAL] Security: Deployed WebUI (Issue #3473 / PR #3492):** Binding to `0.0.0.0` for remote access revealed exposed WebSocket and API surfaces. **Fix PR #3492** directly addresses this, which is critical for any user deploying NanoBot on a public server.
- **[HIGH] Provider Hang: AsyncOpenAI Timeout (Issue #3455 / PR #3478):** The agent loop could hang for up to 10 minutes due to a missing timeout on the OpenAI-compatible client. This was a major stability issue for users with slow or overloaded local inference servers. **Fix PR #3478** resolves this.
- **[MODERATE] Streaming Regression: Codex Provider (Issue #3426 / PR #3480):** A regression removed real-time streaming progress for the Codex provider. This degraded the user experience but didn't prevent the final output. **Fix PR #3480** resolves this.
- **[LOW] Thread Routing (Issue #3464):** Subagent announcements from threaded conversations were misrouted to the parent channel instead of the thread. This is a UX bug for users of threaded chats (e.g., Slack).
- **[LOW] Telegram File Types (Issue #3488 / PR #3489):** Attachments were sent with an incorrect MIME type. **Fix PR #3489** is open.

### 6. Feature Requests & Roadmap Signals

Several user requests provide strong signals for the project's short-term roadmap.

- **High-Probability for Next Release:**
    - **Configurable Request Parameters (PR #3491):** Adding `extra_body` config for OpenAI-compatible endpoints. This is a "must-have" for power users running local servers (vLLM, Ollama), and the PR is well-designed.
    - **Session-Scoped History (PR #3481):** Moving from a single `history.jsonl` file to session-scoped histories. This directly resolves a major cross-contamination bug for users with multiple concurrent sessions.
    - **Lifecycle Webhook Notifications (PR #3373):** Sending notifications on gateway start/stop. This is a highly requested ops feature for monitoring.

- **Medium-Term Candidates:**
    - **LongTaskTool (PR #3460):** A meta-ReAct loop for multi-step tasks. This is a significant architectural addition that would make the agent much more capable of handling complex, long-running workflows.
    - **Per-Channel Progress Controls (PR #3487):** Customizing `sendProgress` and `sendToolHints` per channel. This is a natural extension for better user experience in diverse channel environments.

### 7. User Feedback Summary

- **Pain Points:**
    - **Security anxiety (Issue #3473, PR #3492):** Users deploying publicly are uncomfortable with the default security posture and are actively seeking hardening.
    - **Instability with local LLMs (Issue #3455, PR #3491):** Users running local servers experience hangups and lack the ability to fine-tune API parameters, indicating a gap in support for non-OpenAI endpoints.
    - **Feature gaps in automation (Issue #3484, #3292):** Users want more robust "always-on" agent behaviors, like automation that respects full session context and persistent task goals, not just simple HEARTBEAT.md files.
- **Satisfaction:**
    - The rapid merging of community PRs (e.g., Hugging Face provider, file extension fix) shows that the maintainers are responsive, which is a strong positive signal.
    - Users are still reporting new bugs, but they are using the project in advanced ways (remote deployment, enterprise channels), implying high trust and deep engagement.

### 8. Backlog Watch

The following are notable issues/PRs that require maintainer attention due to their age, complexity, or community impact.

- **#2592 - Mattermost Channel Support (Open since 2026-03-28):** A month-old PR with a feature that has been repeatedly requested. It is likely a large review and requires significant maintainer time to merge.
- **#3292 - Session-Level Focus Tool (Open since 2026-04-19):** This is a highly complex feature request. It has not been labeled or directly addressed. If the core team is considering this for the roadmap, they should acknowledge it and provide a timeline or request for design input.
- **#3494 - History Loading Bug (Open since 2026-04-28):** This is a brand-new issue reporting a critical bug where the agent’s context window is being filled with the entire `history.jsonl` file ("Context: 162k/65k"). This is a potentially severe bug that will cause all user sessions to fail or become incredibly expensive if not addressed immediately.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the **Hermes Agent project digest** for **2026-04-28**.

---

## 1. Today's Overview
Activity remains very high, with 50 Issues and 50 PRs updated in the last 24 hours (44 open/active issues, 18 merged/closed PRs). The project is in a **high-velocity integration phase**, driven by a large batch of community contributions for the Matrix adapter and several high-priority stability fixes (P1/P2 bugs). No new releases were cut today, but the volume of merged fixes suggests a patch release (v0.11.1) is imminent. The community is heavily focused on platform parity (Matrix/WeChat), memory provider reliability, and MCP tool normalization.

## 2. Releases
- **None** today. No new releases or release candidates were published.

## 3. Project Progress
**18 PRs were merged or closed today**, signaling strong maintainer throughput. Key advances include:
- **Matrix Adapter Parity (PR #16821):** A "salvage batch" cherry-picked 10 community PRs for Matrix stability (outbound mentions, cross-signing bootstrap, reaction approval, echo-loop prevention). This closes a significant gap between Hermes and other Matrix bots.
- **Security Hardening (PR #16794):** `security.redact_secrets` now defaults to `false`. This is a UX-driven change; new users get pass-through tool output, and existing users with explicit config retain the masking behavior.
- **Auxiliary Compression Fix (PR #16819):** Fixes custom provider URL rewriting for auxiliary clients and uses the main runtime model for title generation.
- **Gateway/Matrix Bug Fixes:** PRs #5830, #8464, #11162, and #14871—covering sync timeouts, mention formatting, echo-loop prevention, and cross-signing auto-bootstrap—were all closed today.

## 4. Community Hot Topics
- **External Memory — "mempalace" (Issue #6323):** The most active issue with 16 comments and 24 reactions. The community is pushing for persistent, queryable memory to enable long-horizon tasks. The strong upvote count makes this a likely candidate for the next minor release.
- **Kanban Collaboration Board RFC (Issue #16102):** A design for a multi-profile collaboration board is under active review (9 comments). This could evolve into a planned feature for enterprise or team-use scenarios.
- **Memory Search Mismatch Bug (Issue #8742 / #8739):** Duplicate reports highlighting a critical root cause in the OpenViking memory backend: a hardcoded `account_id` conflict between write and read paths. Users are frustrated by 0-result searches despite existing memories.
- **CLI Lock-up / Dummy Status (Issue #16803):** A high-urgency issue where the CLI enters a non-responsive state and ignores input (including Ctrl-C). One user has already upvoted it, indicating shared pain.

## 5. Bugs & Stability
**P1 (Critical) Bugs Reported Today:**
- **Cron Telegram Thread Drop (Issue #16795):** Explicit topic IDs are being stripped, causing scheduled notifications to land in the General topic instead of the intended forum thread. No fix PR yet.
- **CLI Dummy Status Lock (Issue #16803):** Hermes enters a state where it ignores all input and requires a kill signal. No PR.
- **OpenRouter HTTP 400 (Issue #16804):** All OpenRouter requests return empty 400 responses on v0.9.0 (curl works). This suggests a regression in the provider adapter. No fix PR.
- **MCP Circuit Breaker Wedge (Issue #16788):** When a stdio MCP subprocess dies, the gateway’s circuit breaker never respawns it, permanently wedging the session. This is critical for long-running gateways. No fix PR.

**P2 (High) Bugs Reported Today:**
- **DeepSeek/Anthropic Thinking Block 400 (Issue #16748):** Stripped thinking blocks cause HTTP 400 on replay. A fix is in progress via PR #16820 (normalization).
- **Atomic Write Breaks Symlinks (Issue #16743):** Hermes replaces symlinked config files with regular files during atomic writes.
- **WeChat Media Signature Mismatch (Issue #8783):** Outdated method signatures cause file uploads to fail.
- **Stale Provider Model Lists (Issue #16699):** Hardcoded model lists (e.g., xAI) are outdated and structurally fragile.

**P3 (Low) Bugs Reported Today:**
- **Provider Validator Missing Keys (Issue #16779):** Warns on valid config keys (`request_timeout_seconds`, `stale_timeout_seconds`).

**Existing Bugs with New Activity:**
- **Memory Search 0 Results (Issue #8742 / #8739):** Root cause identified (account_id mismatch) but no fix merged yet.

## 6. Feature Requests & Roadmap Signals
- **External Persistent Memory (mempalace):** High demand (24 reactions). Likely to be incubated for v0.12.0.
- **ActivityWatch Integration (PR #8726):** A new skill for productivity tracking is available for review.
- **HKTMemory Provider (PR #16822):** Enterprise memory recall plugin added as a memory provider.
- **Web Search Limit Parameter (PR #16808):** Community requested flexibility in search result limits.
- **Termux pip-cache reuse (Issue #16826):** A quality-of-life request for mobile/constrained installations.
- **Windows Native Support (Issue #8806):** Users found a working install.ps1 but the README still says Windows is not supported. Expect a documentation fix soon.

## 7. User Feedback Summary
- **Satisfaction:** The Matrix adapter improvements (outbound mentions, E2EE, reaction approval) are well-received. The Kanban collaboration board RFC indicates growing interest in multi-agent or multi-user workflows.
- **Frustration:** The OpenViking memory backend is causing zero-result searches due to a trivial ID mismatch—users are losing work. The CLI lock-up (Issue #16803) is causing significant workflow disruption. OpenRouter users on v0.9.0 are completely blocked.
- **Use Cases:** Users are running Hermes in diverse environments: Docker-out-of-Docker, Termux (mobile), corporate networks (proxy issues), and WeChat/Feishu enterprise messaging. The need for persistent cross-session memory is the single strongest signal.

## 8. Backlog Watch
- **Matrix Proxy Support (Issue #7770):** Closed today. A fix for proxy-configuration support in the Matrix adapter was merged, resolving a long-standing bottleneck for corporate users.
- **MCP Tool Schema Normalization (Issue #16764):** A detailed bug report on nullable schema rejection by Anthropic. A fix is actively being drafted in PR #16766.
- **`skills` CLI Command Missing (Issue #10221):** Still open since April 15. Users expect `/skills` to work. No maintainer action yet.
- **Named Custom Provider Model Discovery (Issue #8758):** Open since April 13; no maintainer response. Community workaround needed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-28

## 1. Today's Overview
PicoClaw shows **very high activity** in the last 24 hours, with **108 issues and 120 PRs updated**. The project continues to mature rapidly, with roughly 70% of issues closed (75 closed, 33 open) and a healthy 53% PR merge rate (57 merged/closed vs 63 open). No new official releases were cut today, but the volume of merged PRs and closed issues indicates substantial code churn and progress across agent loop, provider, channel, and configuration domains. The project appears to be in a stabilization and feature-completion phase ahead of a likely upcoming release.

## 2. Releases
**No new releases today.** The last notable version mentioned in issues is v0.2.6. Given the high volume of merged fixes (especially around API key handling, cron, and session management), a patch release is likely imminent.

## 3. Project Progress
Several significant PRs were merged or advanced toward integration:
- **[PR #2680 (merged)](https://github.com/sipeed/picoclaw/pull/2680)** — Unified message kind handling for `tool_calls` and `thought` across the protocol, a **breaking frontend change** (intentional) that standardizes on `payload.kind = "thought"` instead of the legacy `payload.thought = true`.
- **[PR #2551 (open)](https://github.com/sipeed/picoclaw/pull/2551)** — Major refactor decoupling channel names from provider types, allowing multiple instances of the same channel provider with robust identification across the message bus.
- **[PR #2681 (open)](https://github.com/sipeed/picoclaw/pull/2681)** — Fixes MCP tool schema sanitization for Gemini function calling (fixes crash with complex JSON schemas).
- **[PR #2491 (open)](https://github.com/sipeed/picoclaw/pull/2491)** — Adds `/status`, `/compact`, and `/new` session management commands for manual context control.
- **[PR #2603 (open)](https://github.com/sipeed/picoclaw/pull/2603)** — Introduces "FreeRide" tool for automated OpenRouter free model rotation and fallback management.
- **[PR #2587 (open)](https://github.com/sipeed/picoclaw/pull/2587)** — Adds end-to-end streaming support for the Pico web chat frontend with improved scroll UX.

## 4. Community Hot Topics

| Issue | Comments | Topic | Analysis |
|-------|----------|-------|----------|
| [#1648 (open)](https://github.com/sipeed/picoclaw/issues/1648) | 23 | TTS/ASR audio support | **Hottest thread.** User wants voice I/O integration via PR #1642, proposing a full architecture for text-to-speech and automatic speech recognition. Underscores demand for multimodal agent capabilities. |
| [#28 (open)](https://github.com/sipeed/picoclaw/issues/28) | 16 | LM Studio easy connect | Persistent request for simplified local model provider integration, especially for Android deployment. Signals need for better local-first UX. |
| [#2578 (open)](https://github.com/sipeed/picoclaw/issues/2578) | 12 | OpenAI Compat API key dropped | **Critical bug** — Authorization header silently omitted in v0.2.6. High urgency as it breaks all HTTP-based models. |
| [#629 (open)](https://github.com/sipeed/picoclaw/issues/629) | 11 | No retry on LLM call failure | Tasks hang forever on HTTP 500 responses without retry logic. User frustration evident — "tasks hang without retry, logs output nothing." |
| [#618 (open)](https://github.com/sipeed/picoclaw/issues/618) | 10 | Self-upgrade support | Strong demand (2 👍) for `picoclaw self-upgrade` command across package managers (deb, winget, opkg). |
| [#1919 (closed)](https://github.com/sipeed/picoclaw/issues/1919) | 10 | Seahorse memory system | **Recently closed.** Biologically-inspired memory (hippocampus model) with short-term compaction and long-term consolidation. Major feature completed. |

## 5. Bugs & Stability

**Critical (breaking all HTTP models):**
- **#2578 (open)** — `openai_compat` provider silently drops `Authorization` header in v0.2.6. Affects every HTTP-based provider. **Fix PR #2372** (open) addresses API key lookup and fallback issues across multiple related bugs (#2371, #2286, #2334).

**High (agent experience broken):**
- **#629 (open)** — No retry on LLM HTTP 500 errors; tasks hang indefinitely. No fix PR referenced — needs maintainer attention.
- **#2046 (open)** — PicoClaw fails to call tools with LongCat API provider, blocking agent tool use.
- **#2368 (open)** — Android app shows "Model is not configured" even after configuration, blocking model selection entirely.

**Medium:**
- **#1708 (open)** — REST API endpoints (`/chat`, `/a2a`) not available on Gateway in v0.2.3 Docker image — only health endpoints work.
- **#2370 (open)** — LLMs sometimes generate split markers with spaces (`<| [SPLIT] |>`) that fail parsing. Fix PR exists.
- **#2364 (open)** — Restoring stale sessions with dangling tool calls causes stuck sessions after restart.
- **#2520 (open)** — Cron task creation and execution failures; fix PR in progress.

**Recently Fixed:**
- [#2371 (closed)](https://github.com/sipeed/picoclaw/issues/2371) — Agent loop crash at `loop.go:2171` (fixed).
- [#2236 (closed)](https://github.com/sipeed/picoclaw/issues/2236) — Web UI input disabled after Docker port remapping (fixed).
- [#748 (closed)](https://github.com/sipeed/picoclaw/issues/748) — Groq API tool call format error (fixed).
- [#1058 (closed)](https://github.com/sipeed/picoclaw/issues/1058) — Cron `deliver=false` tasks silently discarding LLM responses (fixed).
- [#2080 (closed)](https://github.com/sipeed/picoclaw/issues/2080) — QQ channel broken on Windows (fixed).

## 6. Feature Requests & Roadmap Signals

**Likely next-release candidates:**
1. **Web chat streaming** — PR #2587 adds end-to-end streaming for web UI, a highly requested UX improvement.
2. **Session management commands** — PR #2491 adds `/status`, `/compact`, `/new` for agent context control.
3. **FreeRide tool** — PR #2603 automates free model rotation on OpenRouter, lowering cost barriers.
4. **Structured context compression** — PR #2333 implements a 6-phase algorithm for token-budget management.
5. **SkillManager** — PR #2332 enables dynamic skill creation by agents detecting repetitive patterns.

**On the roadmap:**
- **TTS/ASR audio** (#1648) — Architecture designed, awaiting integration into gateway.
- **OTel GenAI observability** (#1731) — Enterprise monitoring support.
- **LangSmith tracing** (#2173) — Debugging multi-step agent loops.
- **OpenAI Responses API migration** (#2171) — Already assessed, implementation pending.
- **Capability discovery endpoint** (#1474, closed) — For orchestration layers; design complete.

**Lower priority but notable:**
- **Authula integration** (#1067) — Authentication/authorization for VPS deployments.
- **Progress feedback during tool execution** (#571) — Users demand visibility into long-running tasks.
- **Mattermost channel** (#1587) — Team chat integration (2 👍).
- **Self-upgrade** (#618) — Cross-platform auto-update (2 👍).

## 7. User Feedback Summary

**Pain points:**
- API keys silently dropped (#2578) — "No Authorization header regardless of config source" → trust eroding.
- No progress visibility during tool execution (#571) — "Long-running tasks leave users staring at a blank screen."
- Android app configuration broken (#2368) — "Model is not configured" even after filling all fields.
- No retry on transient failures (#629) — "Tasks hang without retry, logs output nothing."
- Multi-instance channel configuration impossible (#2551 PR motivation) — Single provider type forced single instance.

**Satisfaction signals:**
- Active community around features like Seahorse memory (#1919, 10 comments) and web chat streaming (#2587).
- Users contributing PRs for translation (#2330 — pt-BR locale), security hardening (#2327), and monitoring tools (#2369 — PicoWatch macOS app).
- High engagement on feature discussions (16+ comments on LM Studio, TTS/ASR).

**Use cases expressed:**
- Android/edge deployment with local LLMs (#28).
- Enterprise observability and auth (#1731, #1067).
- Team collaboration via Mattermost (#1587).
- Automated model cost management via FreeRide (#2603).

## 8. Backlog Watch

**Issues needing maintainer attention (by priority):**

| Issue | Age | Wait | Why Critical |
|-------|-----|------|-------------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) — No retry on LLM failure | ~65 days | No fix PR | Tasks hang forever; no workaround. |
| [#618](https://github.com/sipeed/picoclaw/issues/618) — Self-upgrade | ~65 days | No fix PR | Blocks continuous delivery. 2 👍. |
| [#28](https://github.com/sipeed/picoclaw/issues/28) — LM Studio Easy Connect | ~76 days | No fix PR | Oldest open feature request; Android deployment blocker. |
| [#571](https://github.com/sipeed/picoclaw/issues/571) — Progress feedback | ~66 days | No fix PR | Core UX deficiency. |
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) — TTS/ASR | ~43 days | Blocked on PR #1642 integration | High community interest (23 comments). |
| [#1708](https://github.com/sipeed/picoclaw/issues/1708) — Gateway REST API unavailable | ~42 days | No fix PR | Docker deployment blocker. |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) — OTel GenAI | ~41 days | No fix PR | Enterprise adoption blocker. |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) — Auth integration | ~55 days | No fix PR | Security risk for public deployments. 1 👍. |

**PRs needing review:**
- [#2603 (open, 8 days old)](https://github.com/sipeed/picoclaw/pull/2603) — FreeRide tool (large feature, no comments yet).
- [#2369 (open, 23 days old)](https://github.com/sipeed/picoclaw/pull/2369) — PicoWatch monitoring app (community contribution).
- [#2336 (open, 24 days old)](https://github.com/sipeed/picoclaw/pull/2336) — Fix thinking_level lookup from model refs (blocks reasoning model support).

**Bottom line:** The project is highly active with good momentum, but several long-standing UX, stability, and deployment issues remain unaddressed. The upcoming release should prioritize the API key fix (#2578) and the retry mechanism (#629) to maintain user trust.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-04-28

---

## 1. Today's Overview

NanoClaw saw **high activity** in the last 24 hours, with **12 issues updated** (7 open, 5 closed) and **23 PRs updated** (17 open, 6 merged/closed). The project maintains a strong contribution pipeline, with multiple fix chains converging around setup reliability, sandbox compatibility, and session management. No new releases were published today. The community is actively contributing both bug fixes and feature enhancements, with particular focus on container hardening, channel adapter completeness, and scheduler lifecycle management. The v2 migration continues to surface edge cases around session-scoped data visibility and attachment handling.

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

Six PRs were merged or closed today:

- **[#1326] feat: add channel-agnostic voice transcription skill** (by kky) — Merged. Adds `src/transcription.ts` supporting two backends (local whisper.cpp and OpenAI Whisper API), enabling any channel adapter to transcribe voice messages via a single `transcribe(buffer)` function.

- **[#1997] fix: parse SQLite datetime() values as UTC in host sweep** (by dim0627) — Merged. Fixes a critical bug where non-UTC hosts would kill fresh containers within ~60 seconds due to timestamp misalignment, causing message delivery loops until `MAX_TRIES`.

- **[#2050] fix(v2/roosync-inbox): restore TS source + accept in-container bot identity** (by jsboige) — Merged. Fixes two bugs in the RooSync inbox watcher that silently dropped dashboard `@-mention` wake signals.

- **[#2049] feat(channels): add Telegram channel adapter** (by mrakimide) — Merged. Adds a production-grade Telegram adapter with a pairing flow that prevents unsolicited message routing.

- **[#987] feat: session size rotation and pre-death memory flush** (by daniil-lyalko) — Merged. Prevents silent session loss when transcripts grow past 55MB/16K lines by rotating sessions and flushing memory before container death.

- **[#2059] Claude/modest mahavira a18170** (by underscorerootword) — Closed (likely non-substantive or skill submission).

**Key Fixes Advanced:** Container resource caps (#2068), agent-to-agent routing limits (#2063), setup reliability across LXC and OneCLI environments (#2052-#2057 chain), and Docker Sandbox proxy support (#2060).

---

## 4. Community Hot Topics

### Most Active Discussions

1. **[[#2029] Add configurable container resource limits](https://github.com/qwibitai/nanoclaw/issues/2029)** (3 comments, 0 👍)
   - **Analysis:** A persistent pain point where runaway LLM loops or recursive tool calls can OOM the host. The community wants production-grade isolation that prevents one agent from taking down unrelated containers. **PR #2068** (dim0627) directly addresses this, suggesting a solution is imminent.

2. **[[#2048] Bug: `install_packages` approval triggers infinite a2a self-routing loop](https://github.com/qwibitai/nanoclaw/issues/2048)** (0 comments, 1 👍)
   - **Analysis:** This exposes a subtle flaw in agent-to-agent routing — normal LLM behavior can create self-messaging loops that block all Telegram delivery. The user (luis-agm) reported the fix but couldn't upstream it, indicating a gap between downstream fixes and core project merging. **PR #2063** (ajensenwaud) caps routing volume to prevent this exact scenario.

3. **[[#2067] v2: scheduled tasks are session-bound, making tools blind across threads](https://github.com/qwibitai/nanoclaw/issues/2067)** (0 comments)
   - **Analysis:** A structural v2 regression where scheduled tasks live in per-session databases, so `list_tasks`/`cancel_task` can't see tasks registered in other threads. This breaks multi-thread agent coordination. Filed today (2026-04-28), no PR exists yet — likely a high-priority v2 bug.

4. **[[#2047] Attachments not visible to agent post-migration](https://github.com/qwibitai/nanoclaw/issues/2047)** (1 comment)
   - **Analysis:** A migration regression where `data/attachments/` wasn't mounted into containers. The user fixed it locally, but the core issue around attachment path-binding remains. Paired with **PRs #2070, #2071** (ddaniels) which extend attachment handling for host-file paths.

### Underlying Needs
The community is demanding **better isolation** (resource caps, routing limits), **attachment reliability** (host paths, inbox routing), and **scheduler consistency** (cross-thread visibility, garbage collection). The v2 migration is the primary source of regressions, suggesting users are actively upgrading.

---

## 5. Bugs & Stability

### High Severity

1. **Infinite a2a self-routing loop** ([#2048](https://github.com/qwibitai/nanoclaw/issues/2048))
   - Blocks Telegram delivery when `install_packages` approval triggers self-messaging
   - **Fix PR:** [#2063](https://github.com/qwibitai/nanoclaw/pull/2063) (cap routing volume) — Open, under review
   - **Impact:** Complete delivery failure in affected groups

2. **add_mcp_server stringifies args array** ([#2051](https://github.com/qwibitai/nanoclaw/issues/2051))
   - Writes `args` as string instead of array to `container.json`, breaking every subsequent agent start with `Error: Claude Code process exited with code 1`
   - **No fix PR yet**
   - **Impact:** Permanent agent failure until manual fix

3. **OneCLI identifier rejected (400 error)** ([#2046](https://github.com/qwibitai/nanoclaw/issues/2046))
   - Agent group IDs with underscores (`ag_f835cf929923`) cause container spawn failures
   - User found fix (`.replace(/_/g, '-')`) but not upstreamed
   - **Impact:** Complete credential failure on affected identifiers

### Medium Severity

4. **Scheduler: completed one-shot tasks linger forever** ([#2061](https://github.com/qwibitai/nanoclaw/issues/2061), closed)
   - No garbage collection for `completed` tasks; filed then closed — likely fixed in another PR or deemed non-critical
   - **Risk:** Gradual task list bloat in unattended systems

5. **Plain text output routes to wrong destination** ([#2062](https://github.com/qwibitai/nanoclaw/issues/2062), closed)
   - Non-`send_message` outputs go to default destination instead of the triggering channel
   - Closed without resolution — may require architectural change

6. **Google Chat missing from setup/auto.ts channel picker** ([#2058](https://github.com/qwibitai/nanoclaw/issues/2058))
   - Seven options offered but Google Chat adapter exists — likely an oversight in the setup UI
   - **No fix PR**

7. **v2 scheduled tasks session-bound across threads** ([#2067](https://github.com/qwibitai/nanoclaw/issues/2067))
   - Registered today; no fix yet
   - **Impact:** Breaks multi-thread agent coordination for scheduled tasks

### Low Severity

8. **v2: auto-generated timestamps not ISO 8601** ([PR #1845](https://github.com/qwibitai/nanoclaw/pull/1845), open)
   - SQLite `datetime('now')` produces space-separated timestamps without T/Z
   - Open since 2026-04-18; fix PR exists but not merged

---

## 6. Feature Requests & Roadmap Signals

### Likely Next Release Features

| Feature | Issue/PR | Status | Predict |
|---------|----------|--------|---------|
| **Container resource limits** | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029), [#2068](https://github.com/qwibitai/nanoclaw/pull/2068) | PR open, active | **Very likely** — high community demand, straightforward implementation |
| **Multimodal Ollama support** | [#2072](https://github.com/qwibitai/nanoclaw/pull/2072) | PR open, fresh | **Likely** — extends existing Ollama integration with images |
| **Host-path attachment support** | [#2070](https://github.com/qwibitai/nanoclaw/pull/2070), [#2071](https://github.com/qwibitai/nanoclaw/pull/2071) | PRs open, paired | **Likely** — fixes reported attachment bugs, improves Signal adapter |
| **Agent-to-agent routing limits** | [#2063](https://github.com/qwibitai/nanoclaw/pull/2063) | PR open | **Very likely** — directly fixes a production bug (infinite loops) |
| **Docker Sandbox readiness** | [#2060](https://github.com/qwibitai/nanoclaw/pull/2060) | PR open | **Likely for enterprise users** — proxy/CA support gated on `HTTPS_PROXY` |

### Longer-Term Signals

- **Setup reliability chain** (#2052-#2057): Six stacked PRs from dooha333 improving LXC detection, OneCLI auto-bootstrap, sudo handling, and PATH injection — signals a push toward **zero-friction first install**.
- **Session size management** (#987, merged): Suggests the project is investing in long-running session resilience, a prerequisite for production deployments.
- **Telegram reply-to context** (#2065, closed): User request filed and closed quickly — may be planned or implemented elsewhere.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| Migration breaks attachments | [#2047](https://github.com/qwibitai/nanoclaw/issues/2047): "directory was never mounted into the container" | High — blocks v2 migration |
| Runaway agents OOM host | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029): "single runaway agent can allocate until the host OOM-killer" | High — production risk |
| Self-modification breaks container | [#2051](https://github.com/qwibitai/nanoclaw/issues/2051): "every subsequent agent wake fails" | High — permanent breakage |
| Identifier format incompatibility | [#2046](https://github.com/qwibitai/nanoclaw/issues/2046): "OneCLI only accepts hyphens" | Medium — blocks specific envs |
| v2 task visibility across threads | [#2067](https://github.com/qwibitai/nanoclaw/issues/2067): "blind to tasks registered in other threads" | Medium — breaks multi-thread coordination |
| Google Chat not in setup picker | [#2058](https://github.com/qwibitai/nanoclaw/issues/2058): "missing from setup/auto.ts channel picker" | Low — UX inconsistency |

### User Satisfaction Signals

- **Positive:** Multiple contributors are filing detailed bug reports with root-cause analysis and local fixes (dr-pabs, luis-agm, Vervo7) — indicates a technically engaged community.
- **Caution:** Several closed issues note "filed in wrong repository" (#2064, #2066) or downstream-fork confusion — suggests some governance friction around where bugs should be reported.
- **Actively contributing:** 23 PRs in 24 hours, with contributors from at least 10 distinct authors (dim0627, ddaniels, dooha333, ajensenwaud, javexed, ealeyner, mrakimide, jsboige, evenisse, kky) — healthy contributor-base growth.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| **[#2051] add_mcp_server stringifies args array** | 1 day (2026-04-27) | **Critical bug** — permanent agent breakage after self-modification. No fix PR yet. |
| **[#1845] v2: normalize timestamps to ISO 8601** | 10 days (2026-04-18) | Open PR with fix exists. Low complexity. Blocked on review. |
| **[#2046] OneCLI identifier rejected (400 error)** | 1 day (2026-04-27) | User identified fix but not upstreamed. Simple `.replace()` patch. |
| **[#2048] Infinite a2a self-routing loop** | 1 day (2026-04-27) | User reported but "couldn't upstream it." Fix PR #2063 exists. |
| **[#2058] Google Chat missing from setup picker** | 1 day (2026-04-27) | Low complexity UX fix — likely just missing an entry in the options array. |

### PRs Awaiting Review

| PR | Age | Priority |
|----|-----|----------|
| [#2052-#2057](https://github.com/qwibitai/nanoclaw/pull/2052) (setup reliability chain) | 1 day | **High** — stacked PRs, affects first-install experience |
| [#2063](https://github.com/qwibitai/nanoclaw/pull/2063) (routing limits) | 1 day | **High** — fixes production blocking issue |
| [#2060](https://github.com/qwibitai/nanoclaw/pull/2060) (Docker Sandbox) | 1 day | **Medium** — enabling enterprise deployments |
| [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) (timestamp normalization) | 10 days | **Low** — cosmetic/consistency |

---

**Summary:** NanoClaw is in a **high-velocity development phase** with strong community contribution. The v2 migration is surfacing regressions (attachments, sessions, task visibility) but the core team and contributors are responding with targeted fixes. The most critical gaps are the `add_mcp_server` args bug (#2051) and the OneCLI identifier compatibility (#2046), both of which have known local solutions but no upstreamed fixes. The container resource caps (#2068) and routing limits (#2063) PRs, if merged, will significantly improve production stability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-04-27 to 2026-04-28**.

---

## IronClaw Project Digest
**Date:** 2026-04-28

### 1. Today's Overview
Project activity remains **very high**, driven primarily by the staged landing of the "Reborn" architecture. The core team carved multiple foundation crates (auth, filesystem, events) into reviewable pull requests and merged a contract-freeze review packet. The **canary and CI systems** continue to be a significant focus, with a large PR (#2874) adding a new `workflow-canary` lane and an active live canary failure (#3005) on the `private-oauth` lane. While the project is in a healthy state with substantial architectural progress, operational stability remains a key area of ongoing work.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress (Merged/Closed)
Seven pull requests were merged or closed:

- **[CLOSED] #2983** — **Reborn Contract Freeze Review Packet.** A self-contained review packet for the Reborn contract freeze was merged. This serves as the documentation and architectural anchor for the new contracts. `[docs]` `[core]`
- **[CLOSED] #2989** — **Mission Threads Reset Fix.** Fixed a critical timezone bug where the daily mission budget would not reset for missions configured with non-UTC timezones, causing them to remain "exhausted" for hours. `[fix]` `[engine]`
- **[CLOSED] #2994** — **V2 Tool Info Lookup Fix.** Fixed `tool_info` to resolve against the current `ActionInventory` rather than the global `ToolRegistry`, enabling correct schema details for engine-native actions. `[fix]` `[v2]`
- **[CLOSED] #2978** — **Bridge Restart Approval Floor.** Distinguishes explicit tool permission policies from fallback rules in the v2 bridge, requiring approval for `restart` calls when the static default policy is `AskEachTime`. `[fix]` `[security]`
- **[CLOSED] #3002** — General dependency/doc merge.
- **[CLOSED] Two CI promotion chore PRs** (#3001, #3000) promoting staging builds.

### 4. Community Hot Topics
- **#2987 [High Risk, Enhancement]** — **Track Reborn architecture landing strategy and grouped PR plan.** This is the central coordination issue for the Reborn architecture. Author `serrrfirat` has set up a structured plan to break a massive stack into reviewable slices. With **7 comments**, this is the highest-engagement item, reflecting the team's focus on maintainable large-scale changes. `[URL](https://github.com/nearai/ironclaw/issues/2987)`

- **#2874 [XL, Core]** — **feat: canary report.** This massive PR introduces a new `workflow-canary` lane with 21 E2E probes and a new `canary-report` lane for Slack/PR comment output. This is the primary workstream aiming to solve the project's canary stability and visibility problems. `[URL](https://github.com/nearai/ironclaw/pull/2874)`

- **#2394 [XL, Experienced]** — **feat: wecom channel.** A large PR adding a standalone WeCom (Enterprise WeChat) WASM channel. It has been open for over two weeks and has high risk due to its scope. It continues to receive updates, suggesting active development. `[URL](https://github.com/nearai/ironclaw/pull/2394)`

### 5. Bugs & Stability
| Ranking | Issue # | Summary | Status | Fix PR? |
| :--- | :--- | :--- | :--- | :--- |
| **HIGH** | [#3005](https://github.com/nearai/ironclaw/issues/3005) | **Live canary `private-oauth` failed on dedicated runner** — indicates a regression in the auth/OAuth flow on the production CI infrastructure. | Open | Not yet. |
| **HIGH** | [#2887](https://github.com/nearai/ironclaw/issues/2887) | **Auth Browser Consent canary fails — Google bot detection** — Google blocks headless Chromium on CI runner IPs. The error is masked by a `try/except: pass` block. | Open | No. Analysis ongoing. |
| **MEDIUM** | [#2991](https://github.com/nearai/ironclaw/issues/2991) | **V2 approval flow is broken** — unclear prompts, wrong routing, forcing sequential execution. Rooted in V2 engine updates. | Open | No. |
| **MEDIUM** | [#2982](https://github.com/nearai/ironclaw/issues/2982) | **Routine/Mission migration issue** — after upgrade to `0.26.0`, existing Routine chats are misclassified as Missions. | Open | No. |
| **LOW (Closed)** | [#1945](https://github.com/nearai/ironclaw/issues/1945) | **Mission daily budget permanently exhausted** — The `threads_today` counter never resets. | **Closed** | **YES** (#2989) |

### 6. Feature Requests & Roadmap Signals
- **Reborn Architecture (Core):** The team is methodically carving up the massive Reborn changes. Recent PRs cover **auth control substrate** (#2999), **filesystem substrate** (#2996), **event/audit substrate** (#2993), and a **foundation fail-closed fix** (#2997). Expect these to land in the next 1-2 weeks.
- **Harness Testing Epic (#2828):** A formal tracker for unifying replay, E2E, live canary, and evaluation coverage. This indicates a strategic move to consolidate testing tools.
- **WeCom Channel (External Contributor):** The WeCom WASM channel (#2394) is nearing completion. It is a high-value feature for users in the Chinese enterprise market.
- **Aliyun (Alibaba Cloud) Support (#1446):** A PR adding support for Aliyun's "Coding Plan" and DashScope API. This will likely be included in the next release to broaden cloud provider support.

### 7. User Feedback Summary
- **Pain Point (Upgrades):** User `sunglow666` reported a regression after upgrading to `0.26.0`, where existing chats are misclassified (**#2982**). This highlights a gap in migration testing for non-TEE (Trusted Execution Environment) instances.
- **Pain Point (V2 UX):** User `joe-rlo` describes the V2 approval flow as broken with "unclear prompts" and "wrong routing" (**#2991**), indicating the new engine is not yet production-ready from a UX perspective.
- **Satisfaction (Bug Fix):** The closure of **#1945** (permanent mission budget exhaustion) will directly resolve a long-standing issue for users running cron-based missions.

### 8. Backlog Watch
- **[#1446](https://github.com/nearai/ironclaw/pull/1446) — feat: add Aliyun Coding Plan support (Open since March 20, 2026).** This is a large, new-contributor PR that has been open for over a month. While recent commits show activity, the massive diff (XL size) covering nearly every subsystem makes it a high-risk review. It requires a core maintainer to dedicate significant time to shepherd it through.
- **[#2092](https://github.com/nearai/ironclaw/pull/2092) — fix(security): indirect prompt injection via memory poisoning (Open since April 7, 2026).** This is a security fix with **high impact** (memory poisoning). While labeled "MEDIUM" risk, its security nature warrants a faster review cycle. It appears to be stalled despite being critical.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI, generated from the provided GitHub data for **2026-04-28**.

---

## LobsterAI Project Digest: 2026-04-28

### 1. Today's Overview
The project shows **very high activity** with a significant push towards stability and quality-of-life improvements. A new patch release (2026.4.25) was published, and **32 PRs** were updated, with **18** being merged or closed. The core team is heavily focused on fixing the Cowork session model selection and persistence logic, addressing Windows-specific bugs, and improving error handling. While community issues reveal onboarding struggles and configuration friction, the development velocity is strong, indicating a healthy and responsive project.

### 2. Releases
- **New Release:** `LobsterAI 2026.4.25`
- **Link:** [GitHub Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.25)
- **Key Changes:**
    - **Fix:** Restored the `DiffView` for the edit tool's input format (`btc69m979y-dotcom`).
    - **Feat:** Added configuration for embedding models specifically for the memory search feature (`btc69m979y-dotcom`).
- **Migration Notes:** No breaking changes are indicated in this release.

### 3. Project Progress (Merged/Closed PRs Today)
The **18 closed/merged PRs** today show a major focus on fixing regressions and improving the robustness of the Cowork feature and the OpenClaw integration layer.

- **Core Stability (Cowork & Session Management):**
    - **PR #1850:** Decoupled the home-page model selector from agent config sync, preventing running sessions from being affected by model changes.
    - **PR #1845:** Prevented session model overrides from being incorrectly rewritten during model normalization.
    - **PR #1843:** Persisted the selected model to the backend SQLite row at session creation time, ensuring each session holds its own model.
    - **PR #1842:** Handled stale model references gracefully (silent fallback for agent-level, error with name display for session-level).
- **Platform-Specific Fixes (Windows):**
    - **PR #1848:** Fixed a bug where `file://` URLs for images from DingTalk on Windows were incorrectly formatted, causing the SDK to reject them.
    - **PR #1841:** Fixed the NSIS installer exit code check on Windows using `IntCmp` instead of `StrCmp`.
    - **PR #1851:** Fixed file watcher release order on Windows before deleting skill directories, preventing permission errors.
- **Security & Logging:**
    - **PR #1844:** Implemented log redaction for sensitive keys (e.g., `x-api-key`, `authorization`).
- **Dependencies & Config:**
    - **PR #1852:** Optimization of Agent-related copywriting and UX.
    - **PR #1840:** Prevented config updates (e.g., model switching) from overwriting stored providers with stale default configs.
    - **PR #1834:** Upgraded the `openclaw-weixin` plugin to v2.1.10 to fix a prompt deadloop.

### 4. Community Hot Topics
- **Issue #73: "根本用不了" (Cannot use at all)**
    - **Link:** [Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73)
    - **Comments:** 10
    - **Analysis:** This is the most commented issue, reporting a fatal `404 Not Found` error from the Anthropic SDK. The user is unable to launch the application. This suggests a potential issue with API key configuration, network connectivity, or a fundamental integration problem that is blocking new users.

- **Issue #1813: DeepSeek V4 "provider rejected the request schema or tool payload"**
    - **Link:** [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)
    - **Comments:** 5
    - **Analysis:** This is a high-priority bug for users leveraging the newly popular DeepSeek V4 model. The error indicates a formatting or schema mismatch between LobsterAI's tool calls and what the DeepSeek V4 API expects. A fix PR (#1847) was already merged today, suggesting the team is actively responding.

### 5. Bugs & Stability
**High Severity:**
- **Issue #1813 - DeepSeek V4 Incompatibility:** Models from DeepSeek V4 fail with a schema rejection.
    - **Status:** **Fixed** in PR #1847.
- **Issue #1849 - Infinite "NO_REPLY" or Partial Output on Follow-up:** Tasks complete prematurely, leaving the UI with no or incomplete responses.
    - **Status:** **Open**. This is a newly reported bug today (#1849) with no comments and no linked fix PR yet. It is a critical user-facing issue.
- **Issue #73 - Fatal Startup 404 Error:** The app fails to start for some users due to a network/API key error.
    - **Status:** **Stale**. Despite 10 comments, the issue has been open since Feb 24. This is a major onboarding blocker that needs attention.

**Medium Severity:**
- **Issue #955 - Private Models Fail Skill Calls:** Locally deployed models (e.g., Qwen3) cannot use skills, even though they work with other clients.
    - **Status:** **Closed**. The fix appears to be in the pipeline.

**Stale Bugs (Low Activity):**
- **Issue #17 - Start Dead Loop:** The app enters an infinite loop on startup.
- **Issue #100 - DMG Build Error:** Fails to package the macOS DMG due to a missing entry file.
- **Issue #106 - Custom Model Uncallable:** Users cannot call their custom models.

### 6. Feature Requests & Roadmap Signals
- **Issue #1836 - UI/UX Redesign:** A user explicitly requested a professional UI redesign, stating the current interface is "too ugly" compared to competitors.
    - **Prediction:** While highly requested, this is a large undertaking. The team is currently focused on stability and functionality. This is unlikely to be in the next patch but could be a theme for a major future release (e.g., v2026.5 or v2027).
- **PR #1527 - AI Diagnosis for Email Connection Failure:** This open PR (from April 7) proposes a "✨ AI Diagnosis" button that sends connection test failure logs to an AI for analysis.
    - **Prediction:** This is a user-centric "smart diagnosis" feature that aligns with the project's AI-first branding. It is likely to be merged in the next minor release if the review process finishes.

### 7. User Feedback Summary
- **Dissatisfaction:**
    - **Onboarding is painful:** New users encountering fatal 404 errors (Issue #73) and infinite startup loops (Issue #17) suggests the setup and configuration process is fragile.
    - **Brittle model integration:** Users are frustrated with model-specific failures, especially with popular models like DeepSeek V4 (Issue #1813) and custom/private deployments (Issues #106, #955).
    - **Poor User Experience:** The UI is criticized as "ugly" (Issue #1836), and the Cowork session model switching creates confusing behavior (evidenced by the many fix PRs today).
- **Satisfaction (Implied):**
    - The development team's **high responsiveness** (fixing DeepSeek V4 on the same day it was reported) is a positive signal for power users.
    - The ability to integrate with IM platforms (DingTalk, WeChat) is a key differentiator that users are actively using and reporting bugs for, indicating strong engagement.

### 8. Backlog Watch
- **Issue #73 - Fatal 404 Error:** Despite being the most commented issue, it is **stale** with no recent activity from maintainers. This represents the largest risk to new user acquisition.
    - **Link:** [Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73)
- **Issue #17 - Startup Dead Loop:** Another critical startup bug that has been hanging for over two months.
    - **Link:** [Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17)
- **PR #1277 - Electron Dependencies Bump:** A Dependabot PR to bump Electron from 40.2.1 to 41.3.0 has been open for 26 days. This is a potential security and compatibility risk.
    - **Link:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-04-28

## Today's Overview
The Moltis project is experiencing **high development velocity** with 17 PRs updated in the last 24 hours, of which 12 were merged or closed. The core team (led by contributors `penso` and `Cstewart-HC`) is executing on multiple fronts simultaneously: agent architecture simplification, code indexing automation, and web UI feature enhancements. Two new bugs were opened today (Docker build failure and Telegram integration issue) but both are isolated. The project remains in a **feature-heavy delivery phase** with no new releases cut, indicating the team is accumulating changes before a versioned release.

## Releases
**No new releases.** The latest release remains the previous version. Given the volume of merged features (agent simplification, code indexing, UI improvements), a release is likely imminent within the next 1–2 weeks.

## Project Progress
12 PRs were merged/closed today, representing significant architectural and quality-of-life improvements:

- **Agent Architecture Simplification** ([PR #898](https://github.com/moltis-org/moltis/pull/898)) — Implements the proposal from Issue #774, removing the "primary identity" concept. The "main" agent becomes a regular database row, and agent routing is available wherever model/provider can be specified.
- **Code Indexing Automation** ([PR #902](https://github.com/moltis-org/moltis/pull/902), [#901](https://github.com/moltis-org/moltis/pull/901), [#900](https://github.com/moltis-org/moltis/pull/900)) — Implements auto-triggered code indexing with deduplication and file watchers, eliminating manual index operations. Extended `CodeIndexConfig` with startup/periodic/creation triggers.
- **Telegram Channel Optional** ([PR #891](https://github.com/moltis-org/moltis/pull/891), [#890](https://github.com/moltis-org/moltis/pull/890), [#889](https://github.com/moltis-org/moltis/pull/889)) — Telegram integration gated behind optional feature flag to reduce binary size and build time.
- **Web UI Session Name Fix** ([PR #892](https://github.com/moltis-org/moltis/pull/892)) — Fixes regression from PR #886 where session names and rename functionality were lost.
- **Skills UI Fix** ([PR #897](https://github.com/moltis-org/moltis/pull/897)) — Fixes RPC error display showing "[object Object]" and adds auto-trust on skill enable.
- **Built Asset Cleanup** ([PR #895](https://github.com/moltis-org/moltis/pull/895)) — Removed 92K lines of generated JS/CSS from repository; assets now built at compile time.
- **Matrix OIDC Fix** ([PR #893](https://github.com/moltis-org/moltis/pull/893)) — Fixes `invalid_redirect_uri` when Matrix OIDC is behind a reverse proxy.
- **Circuit Breaker Regression Test** ([PR #894](https://github.com/moltis-org/moltis/pull/894)) — Adds test proving security hooks using `Block` actions never trigger the hook circuit breaker.

## Community Hot Topics

1. **[Issue #774: Simplify primary agent/agents](https://github.com/moltis-org/moltis/issues/774)** — Closed today, but was the most significant community-driven feature request. The underlying need: users found the primary agent concept confusing and cumbersome, especially when routing conversations across different models/providers. The solution (merged PR #898) collapses this complexity.

2. **[PR #876: File upload button for web chat](https://github.com/moltis-org/moltis/pull/876)** — Open with continued updates. This is a highly anticipated UX feature, matching patterns users expect from commercial LLM providers. The PR has received sustained attention from the maintainer `Cstewart-HC`.

3. **[PR #903: Code Indexing Automation](https://github.com/moltis-org/moltis/pull/903)** — The follow-up open PR after the earlier iterations were closed. This feature is clearly a high priority for the team, representing significant engineering effort with multiple iterations submitted in a single day.

## Bugs & Stability

### High Severity
- **[Issue #905: Problem with Telegram](https://github.com/moltis-org/moltis/issues/905)** — New today, opened by `RokkuCode`. No comments or PR yet. The title is vague, but Telegram channel functionality has been heavily modified this week (feature gating PRs), so this may be a regression. **No fix PR exists yet.**

### Medium Severity
- **[Issue #896: Docker build fails](https://github.com/moltis-org/moltis/issues/896)** — Opened yesterday, DNS resolution failure during `apt-get update` in Docker builds. This is an infrastructure/environment issue, not a code bug. A workaround may be needed for CI environments.

### Low Severity (Recently Fixed)
- **[Issue #888: Session name removed in web UI](https://github.com/moltis-org/moltis/issues/888)** — **Fixed** in PR #892 (merged today).
- **[Issue #547: Hook circuit breaker security bypass](https://github.com/moltis-org/moltis/issues/547)** — **Fixed** with regression test in PR #894 (merged today).
- **[Issue #317: Jinja template error](https://github.com/moltis-org/moltis/issues/317)** — Closed without detailed resolution, but likely fixed by related templating changes.

## Feature Requests & Roadmap Signals

Based on recently merged and open PRs, the next version will likely include:

1. **Agent Architecture Simplification** (PR #898) — Most impactful change, removes the clunky primary agent concept
2. **Auto Code Indexing** (PR #903) — Eliminates manual index operations with file watchers and deduplication
3. **Web UI File Upload** (PR #876) — File attachment in chat sessions
4. **Command Palette** (PR #904) — `Cmd+K` / `Ctrl+K` overlay for navigation and actions
5. **Optional Channel Builds** (PR #899) — Make Discord and MS Teams optional at compile time (extending the Telegram pattern)
6. **Compaction Summary Model Configuration** (PR #826) — Wiring summary model config to the auxiliary provider

These features suggest Moltis is maturing toward a **production-ready personal AI assistant** with streamlined UX and a more intuitive agent model.

## User Feedback Summary

### Pain Points (from Issues)
- **Docker build reliability** (#896) — Users expect `docker build` to work out of the box
- **Telegram integration issues** (#905) — Recent changes may have introduced breakage
- **Session management UX** (#888, recently fixed) — Users were frustrated by losing session rename after UI changes
- **SKill UI error messages** (PR #897 fix) — Users seeing "[object Object]" instead of meaningful error text

### Use Cases
- **Multi-agent workflows** — The simplification of agent architecture addresses power users who want to route conversations across different models
- **Self-hosted deployment** — Optional channel features and Docker support suggest a user base running private instances
- **Developer productivity** — Code indexing automation directly supports users using Moltis for codebase navigation

### Satisfaction Signals
- The team is **highly responsive** — 4 bugs were fixed within 48 hours of reporting
- Community contributors are actively submitting PRs and issues with detailed reproduction steps

## Backlog Watch

1. **[PR #826: Compaction summary_model config](https://github.com/moltis-org/moltis/pull/826)** — Open since 2026-04-22, now 6 days old. Blocked or awaiting review? This wiring change is needed for compaction functionality to work with non-primary providers.

2. **[Issue #905: Problem with Telegram](https://github.com/moltis-org/moltis/issues/905)** — New with zero responses. Needs triage to determine severity and whether it's a regression from the Telegram feature gating.

3. **[PR #876: File upload button](https://github.com/moltis-org/moltis/pull/876)** — Open since 2026-04-25. While actively updated, it has not been merged. This is a high-demand feature that users are likely waiting for.

No long-standing (30+ day) issues appear to be ignored. The team maintains good responsiveness to community-reported concerns.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-28

## Today's Overview

CoPaw (QwenPaw) shows very high activity today with 50 issues and 49 PRs updated in the last 24 hours, indicating a project in rapid development. The closed/merged rate is healthy at 50% for issues and 55% for PRs, suggesting the team is actively resolving community-reported problems alongside feature work. No new releases were published today. The community is heavily engaged in discussions around security, channel integrations, and multi-agent coordination, with several long-standing bugs finally receiving targeted fix PRs. Overall project health appears strong, though a backlog of unresolved configuration persistence and performance issues remains.

## Releases

No new releases were published today. The latest stable version remains **v1.1.4.post2**.

---

## Project Progress

**27 PRs merged/closed today**, reflecting significant forward momentum:

- **WeCom channel fix** (#3903, by hongxicheng): Fixes #3901 by stripping `@mention` prefix in group chat for correct command detection — a critical fix for enterprise users relying on `/approval approve` workflows.

- **Memory system resilience** (#3902, by zhijianma): Resolves triple-quote parse error in memory prompts, a blocker for long-term memory users.

- **QQ voice message support** (#3845, #3887, by bxy3045134656): Properly distinguishes voice messages (`.amr/.silk/.slk`) from regular audio files, and adds SILK format support for transcription — improving the QQ channel experience.

- **A2A protocol implementation** (#3839, by joeyhacker): Refactors XiaoYi channel to use dual WebSocket connections, fixes A2A message handling with reasoningText/text separation — enabling inter-agent communication.

- **Context compaction fallback** (#3882, by jinliyl): Adds light context manager with compaction fallback to prevent agent crashes when context compression fails.

- **Performance optimization** (#3897, by bowenliang123): Deduplicates repeated model API requests when opening `/chat` page (was triggering 3x `GET /api/models` + 3x `GET /api/models/active`).

- **Chat UI enhancement** (#3876, by bowenliang123): Replaces two-level hover dropdown with searchable flat model selector grouped by provider — inspired by mainstream agent products like Cherry Studio and OpenCode.

- **Vite upgrade** (#3727, by bowenliang123): Upgrades website build tooling from Vite 6 to Vite 8 for ~3x faster build performance.

---

## Community Hot Topics

### Most Active Issues

1. **#3901** [OPEN] **WeCom group chat `/approval approve` still broken** (2 comments, created today)
   - *Link*: [Issue #3901](https://github.com/agentscope-ai/QwenPaw/issues/3901)
   - Root cause analysis reveals two bugs: `@bot` prefix preventing command detection, and control command parsing failure. **Immediately addressed** by PR #3903.

2. **#3843** [OPEN] **Session history disappears** (6 comments)
   - *Link*: [Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)
   - User reports chat history suddenly vanishing while session title remains visible. Appears to be a frontend state management issue — one of the most critical UX bugs this week.

3. **#3437** [OPEN] **Kimi Code API support request** (6 comments)
   - *Link*: [Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437)
   - Multiple users requesting native Kimi Code integration; manual configuration keeps failing. Signals growing demand for more code-specific API providers.

4. **#3869** [CLOSED] **Channel-side high-risk command approval** (6 comments)
   - *Link*: [Issue #3869](https://github.com/agentscope-ai/QwenPaw/issues/3869)
   - User argues that requiring web console for tool approval makes channel integrations (DingTalk, Feishu, WeCom) unusable — a critical architectural feedback.

5. **#3871** [OPEN] **Agent infinite 'Thinking' state after completing response** (4 comments)
   - *Link*: [Issue #3871](https://github.com/agentscope-ai/QwenPaw/issues/3871)
   - SSE stream not closing properly, leaving UI stuck with phantom "Thinking" bubble. A frustrating UX regression.

6. **#3850** [OPEN] **Web UI pause button only stops rendering, not execution** (3 comments, 1 👍)
   - *Link*: [Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850)
   - Backend continues executing after pause press; user demands proper suspend/resume mechanism.

### Most Active PRs

1. **#3903** [OPEN] Fix WeCom `@mention` prefix problem (by hongxicheng) — directly addresses the critical #3901 bug.
2. **#3839** [OPEN] XiaoYi A2A protocol fix (by joeyhacker) — major integration work under review.
3. **#3882** [OPEN] Context compaction fallback (by jinliyl) — important for memory reliability.

---

## Bugs & Stability

### Critical/High Severity

| Issue | Description | Severity | Fix Status |
|-------|-------------|----------|------------|
| [#3901](https://github.com/agentscope-ai/QwenPaw/issues/3901) | WeCom `/approval approve` broken (regression from #1933) | **Critical** | Fix PR #3903 submitted |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | chromadb Rust binding SIGSEGV kills entire process (45+ times/session) | **Critical** | No fix PR yet |
| [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) | MCP causes infinite chat hanging | **High** | Unresolved |
| [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | Pause button frontend-only, backend continues | **High** | Unresolved |
| [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Infinite "Thinking" state after completion | **High** | Unresolved |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | Session history disappears | **High** | Unresolved |

### Medium/Low Severity

| Issue | Description | Severity | Fix Status |
|-------|-------------|----------|------------|
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Debian 12 freezes on saving model settings (root user works around) | **Medium** | Workaround identified |
| [#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837) | WeChat channel message truncation after ~10 messages | **Medium** | Feature request |
| [#3862](https://github.com/agentscope-ai/QwenPaw/issues/3862) | Feishu stuttering output (word-by-word) in v1.1.4 | **Medium** | Closed without solution? |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Vector model config resets on container restart | **Medium** | Closed |
| [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | Agent config loss on page refresh/restart | **High (data loss)** | Closed |
| [#3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) | Console GUI performance degradation | **Medium** | Unresolved |

### Notable Fixed Bugs Today

- **Memory prompt triple-quote parse error** (#3902): Fixed by zhijianma
- **Context loss on tool result overflow** (#3895, by CA-mambo): First-time contributor fix for infinite loop bug
- **Feishu reaction event spam logs** (#3890, by CA-mambo): Silences noisy `processor not found` errors

---

## Feature Requests & Roadmap Signals

### High-Community-Interest Features

| Feature | Issue | Support | Signal |
|---------|-------|---------|--------|
| **Kimi Code API support** | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 6 comments | Growing demand for code-specific providers |
| **Token consumption display** | [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) | 1 👍, 2 comments | Cost transparency for long tasks |
| **Volcano Coding Plan support** | [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) | 7 comments | Chinese enterprise SaaS integration |
| **Channel-side approval** | [#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869) | 6 comments | Critical for production channel use |
| **Proactive message to custom channels** | [#3804](https://github.com/agentscope-ai/QwenPaw/issues/3804) | 2 comments | Feishu/DingTalk push support |

### Predictions for Next Release (v1.1.5)

Based on PR activity, the following are likely:
1. **Async session title generation** (PR #3829) — replaced placeholder titles with LLM-generated names
2. **Live inter-agent task progress tracking** (PR #3889) — `ProgressObservingHook` for multi-agent visibility
3. **WeCom approval fix** (PR #3903) — critical bug blocker for enterprise adoption
4. **Combined MCP timeout fix** (PR #3904) — addresses hanging MCP calls
5. **Backend config partial update** (PR #3896) — enables saving partial config without full overrides

---

## User Feedback Summary

### Pain Points
1. **Enterprise channel integration broken**: Multiple users report that `/approval approve` in WeCom group chats is non-functional (#3901, #1933), making critical workflows impossible.
2. **Config persistence failures**: Users report losing agent configuration on page refresh (#3824) and container restart (#3817) — a high-frustration issue.
3. **Performance degradation in console GUI**: Windows desktop users report unresponsiveness with long chat sessions (#3830).
4. **Unreliable pause mechanism**: The pause button is described as "useless" (#3850) since the backend continues executing.
5. **Context and memory fragility**: Users report context loss (#3895), infinite thinking loops (#3871), and memory parse errors (#3902).

### Use Cases Expressed
- **Multi-agent orchestration**: Users want transparent progress tracking between orchestrator and sub-agents (#3705, PR #3889).
- **Enterprise IM integration**: Deep need for functional approval workflows on WeCom / DingTalk / Feishu without requiring web console access.
- **Cost-aware development**: Users want real-time token tracking to manage API costs during long tasks (#3366).
- **Code-specific agent backends**: Demand for Kimi Code, Volcano Coding Plan, and OpenCode integration (#3437, #3753, #3716).

### Satisfaction Signals
- **Helpful first-time contributors**: Multiple first-time PRs accepted today (#3895, #3890, #3887), indicating welcoming community.
- **Responsive maintainers**: Critical bugs like #3901 received a fix PR within hours of being reported.
- **Active Chinese-language community**: Significant portion of issues are in Chinese, with maintainers responding in-kind — strong localization support.

---

## Backlog Watch

### Long-Unanswered Important Issues (Need Maintainer Attention)

| Issue | Created | Age | Description | Risk |
|-------|---------|-----|-------------|------|
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 2026-04-15 | **13 days** | Kimi Code API support (6 comments, multiple upvotes) | Medium — competitive gap |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | 2026-04-16 | **12 days** | Slow page loading (5 comments) | Medium — UX degrades |
| [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) | 2026-04-14 | **14 days** | Token consumption real-time display (1 👍) | Low — enhancement |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | 2026-04-27 | **1 day** | chromadb SIGSEGV kills process | **HIGH** — process crash |
| [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | 2026-04-27 | **1 day** | Infinite "Thinking" state | **HIGH** — broken UX |
| [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | 2026-04-26 | **2 days** | Pause button useless | **HIGH** — broken core feature |

### Long-Standing PRs Without Merge

| PR | Created | Age | Status | Risk |
|----|---------|-----|--------|------|
| [#1988](https://github.com/agentscope-ai/QwenPaw/pull/1988) | 2026-03-20 | **39 days** | Closed (merged today?) | Low |
| [#2412](https://github.com/agentscope-ai/QwenPaw/pull/2412) | 2026-03-27 | **32 days** | Closed | - |

### Recommendations for Maintainers
1. **Prioritize #3854** (chromadb segfault) — Rust binding crashes kill the entire process, making the agent unusable for vector-dependent features.
2. **Address #3850** (pause button) — users explicitly call this "useless"; core UX expectation violated.
3. **Re-open or announce timeline for #3437** (Kimi Code) — user left hanging for 13 days; competitor integration risk.
4. **Consider merging #3829** (async session title) — already under review; would improve initial UX significantly.
5. **Add regression test for WeCom approvals** — #1933 was closed but regressed; the fix in #3903 should be validated with a test suite.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-28

## Today's Overview

ZeroClaw is showing extremely high activity with **43 issues** and **47 PRs** updated in the last 24 hours, signaling a major development push. The project has **39 open issues** and **41 open PRs**, with only 4 issues and 6 PRs closed/merged — indicating significant work-in-progress but a moderate throughput bottleneck. A notable **bulk revert recovery audit** (#6074) is ongoing, tracking 153 commits lost in a single revert, which explains the high volume of re-implementation PRs (e.g., WeChat channel recovery from #4221). No new releases were published today. The community is highly engaged, with fresh install issues (#6123), configuration documentation gaps, and provider compatibility problems dominating discussion. Overall, this is a **very active but slightly strained** project state — heavy contributor velocity with growing issue backlog.

## Releases

*None.* No new releases were published in the last 24 hours. The last release was v0.7.3 (emergency ship after broken tags blowout, per tracking issue #5877).

## Project Progress — Merged/Closed PRs Today

6 PRs were closed/merged today:

- **#6077 [CLOSED]** — *feat: Ability to clear the agent chat window in Web UI* (enhancement, gateway) — Adds chat-window clearing functionality, addressing user complaint about error message clutter.
- **#6146 [CLOSED]** — *Bug: anthropic.rs temperature f64 shape — duplicate of #6147* (provider: anthropic) — Closed as duplicate; the real investigation continues in #6147.
- **#6160 [CLOSED]** — *Bug: Kimi 2.6 lack of reasoning_context* — Closed as duplicate; related to ongoing Kimi provider issues (#5600).
- **#4878 [CLOSED]** — *Bug: E2EE recovery never downloads room keys from backup* — Old bug (filed 2026-03-28) finally closed; encrypted Matrix rooms were completely non-functional.
- **#6074 [CLOSED]** — *Audit: track 153 commits lost in bulk revert c3ff635 for recovery* — Audit tracking issue completed; this was a meta-issue for recovery planning.
- **#6169** — *(unknown, not in top 30)*

**Key takeaway:** Most closed items today were duplicates or housekeeping. The actual feature/repair work remains in open PRs.

## Community Hot Topics

1. **#6123** — `[Bug]: default_model issue on fresh install` (14 comments)  
   *Author: rgnyldz* | [Link](zeroclaw-labs/zeroclaw Issue #6123)  
   **Analysis:** The most commented issue today. A fresh install on LXC with remote Ollama fails during onboarding with a `default_model` error. This is **S1 (workflow blocked)** — users cannot even complete initial setup. The high engagement suggests many users hit this, and the maintainers are actively diagnosing provider config initialization order. **Underlying need:** Provider auto-detection/discovery that gracefully handles remote Ollama instances.

2. **#5877** — `release: v0.7.4 milestone tracking` (6 comments)  
   *Author: WareWolf-MoonWall* | [Link](zeroclaw-labs/zeroclaw Issue #5877)  
   **Analysis:** The release tracking issue for v0.7.4 — still in progress after renumbering from v0.7.2 due to the emergency v0.7.3 ship. Lists still-open skills features (#6023) and other pre-release blockers. **Underlying need:** Release management transparency; community eagerly awaiting next stable version.

3. **#5600** — `[Bug]: Use kimi-code provider in streaming chat call tools, provider API reports an error` (6 comments)  
   *Author: hvvvvvvv* | [Link](zeroclaw-labs/zeroclaw Issue #5600)  
   **Analysis:** Kimi provider streaming error involving `reasoning_content` missing when thinking is enabled. Duplicates closed #6160. This has been open since April 10 and is **S1 blocked**. **Underlying need:** Better provider API error handling and graceful degradation when models don't support expected features.

4. **#6149** — `[Bug]: config.toml examples for YOLO / local testing do not match current config keys` (4 comments)  
   *Author: ryanznie* | [Link](zeroclaw-labs/zeroclaw Issue #6149)  
   **Analysis:** Documentation mismatch — config examples haven't kept pace with binary changes. **S1 blocked** because users following official docs hit non-working setups. This is tagged **good first issue**, suggesting maintainers want community help fixing this.

## Bugs & Stability

### Critical Regressions / S0 (data loss / security risk)

- **#5125** — *CPU spikes when typing into agent chat* (S0 — 4 comments, opened 2026-03-29) — Firefox browser causes multi-core spikes on Ubuntu. Still open with no fix PR. **Unsettled — needs escalation.** [Link](zeroclaw-labs/zeroclaw Issue #5125)

### S1 — Workflow Blocked

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| #6123 | default_model issue on fresh install | OPEN, 14 comments | No fix PR linked |
| #5600 | Kimi streaming error (reasoning_content missing) | OPEN, 6 comments | No fix PR linked |
| #6149 | config.toml examples out of date | OPEN, 4 comments | No fix PR linked |
| #6051 | Self-test reports 127.0.0.1 despite config | OPEN, 3 comments | No fix PR linked |
| #6156 | Nextcloud Talk model request canceled after ~5 sec | OPEN, 2 comments | No fix PR linked |

### S2 — Degraded Behavior

| Issue | Title | Status |
|-------|-------|--------|
| #5244 | Dashboard Channels tab crash on v0.6.8 | OPEN, in-progress |
| #6147 | Anthropic temperature f64 shape — verify native API rejects | OPEN |
| #6096 | install.sh missing web dashboard extraction | OPEN (fix PR #6154 exists) |
| #6153 | Matrix voice transcription: unsupported audio format | OPEN |
| #6136 | Deferred MCP tools not inherited by delegate sub-sessions | OPEN |
| #6073 | Web UI config editor: cursor misalignment | OPEN |

### Notable Fix PRs in Flight

- **#6154** — *fix(install): restore web dashboard extraction in prebuilt install path* — Addresses #6096 (dashboard missing after install).
- **#6159** — *fix(gateway): record cost and token usage on every gateway turn* — Addresses #6001 (/api/cost returning zero).
- **#6080** — *fix(gateway): enable tool support in webhook endpoint* — Addresses #4893 (MCP tools via webhook).

## Feature Requests & Roadmap Signals

### High-Probability for Next Release (v0.7.4)

1. **#6165** — *Prefer lighter ZeroClaw: remove dedicated integrations for Jira, GitHub, etc. in favor of skills/MCP tools*  
   *Author: ilteoood* | [Link](zeroclaw-labs/zeroclaw Issue #6165) — **Architecture shift** — This is a significant proposal that could reduce codebase bloat. Likely to be deferred to post-v0.7.4.

2. **#6140** — *Skill capability: hybrid skills + WASM tools*  
   *Author: JordanTheJet* | [Link](zeroclaw-labs/zeroclaw Issue #6140) — **Next-gen plugins** — Follow-on after markdown-only skill plugins land. Part of the skill platform roadmap.

3. **#6170 (PR)** — *feat: zh-CN translations added*  
   *Author: JordanTheJet* | [Link](zeroclaw-labs/zeroclaw PR #6170) — Translates documentation to Simplified Chinese, French, Japanese, Spanish. Likely to merge soon.

### Medium-Probability for Next Release

- **#6145** — *Recover agent chat from memory location in Web UI* (gateway enhancement) — Click memories to restore old conversations.
- **#6150** — *Add fast channel-native memory clear command for Telegram/Discord — `/clear`* — Tagged **good first issue**.
- **#6070** — *Improve default model selection with free model indicators* — **Real UX pain** — users can't distinguish free vs paid models in dropdown.

### Long-Term / "Maybe"

- **#6164 (PR)** — *Manually trigger cron from Web UI* — Full stack feature (`POST /api/cron/{id}/run` + Web UI button). Large PR (size: L, risk: high).
- **#6166 (PR)** — *WeChat personal account via iLink Bot* — Wide-reaching channel addition. This is a **recovery of lost PR #4221** (lost in bulk revert).
- **#6167 (PR)** — *Implement ACP protocol v1 with tool-call permission and back-channel* — XL PR, high risk, core protocol change.

## User Feedback Summary

### Pain Points (High Frequency)

1. **Fresh install UX is broken** (#6123, #6149) — Multiple users report new installs fail immediately due to default_model config issues and mismatched documentation. This is the **#1 onboarding friction** and likely the most impactful bug.

2. **Configuration documentation is stale** (#6149, #6051) — Users following official docs for YOLO/local testing and self-testing hit mismatches. The config surface changed faster than docs.

3. **Cost tracking is invisible** (#6001, #6159) — `/api/cost` returns zero even after successful chat. Users have no way to verify token usage or billing. A fix PR (#6159) is in flight.

4. **Slow model timeouts** (#6156, #5125) — Nextcloud Talk users with local models hit 5-second timeouts. Web UI causes CPU spikes. These are **performance/scale frustrations**.

5. **Encrypted Matrix broken for weeks** (#4878) — E2EE recovery never downloaded room keys. Only closed today — affected users for a full month.

### Use Cases Evidenced

- **Self-hosted on LXC containers** with remote Ollama (#6123)
- **Local AI experimentation** with LocalAI (#6156)
- **Multi-language support** — zh-CN translation PR (#6170) suggests growing Chinese user base
- **Team communication via Matrix** (#4878, #6153) — voice messages and E2EE are critical

### Satisfaction Signals

- Two **good first issue** tags on minor bugs (#6149, #6150) — active triage and grooming
- Community members filing **ready-to-file upstream issue writeups** (#6001) — high contributor quality
- Translation PRs from community (#6170) — **healthy international contributor base**

## Backlog Watch

### Long-Open Issues Needing Maintainer Attention

| Issue | Age | Title | Priority | Last Update | Risk |
|-------|-----|-------|----------|-------------|------|
| #5125 | 30 days | CPU spikes when typing into agent chat | S0 - data loss/security | 2026-04-27 | **CRITICAL** — tagged S0 but no maintainer comment since filing |
| #5266 | 25 days | No pairing code on alternate port | P1 | 2026-04-27 | Moderate — blocks non-default port setups |
| #5356 | 23 days | Canvas tool from channel servers never reaches WebSocket clients | P2 | 2026-04-27 | Moderate — silent failure for channel users |
| #5835 | 11 days | Cancel tokens not evicted for abandoned sessions | P1, risk: high | 2026-04-27 | **High** — memory leak + potential resource exhaustion |
| #5837 | 11 days | ACP sessions missing cancellation support | Blocked | 2026-04-28 | Moderate — gateway-ACP parity gap |

### PRs Needing Review

- **#5886** — *fix(telegram): accept group replies to bot messages* — Tagged `needs-author-action` — author hasn't responded since April 18. **Simple fix, stalled.**
- **#6167** — *fix(channels/acp): implement ACP protocol v1* — **Size XL, risk: high** — needs careful review; addresses core protocol compatibility with Nori.
- **#6164** — *feat(cron): manually trigger cron from webui* — Size L, risk: high — another large PR competing for reviewer bandwidth.

### Deprecation / Architecture Risk

- **#6165** suggests removing dedicated integration code (Jira, GitHub, gws-cli) in favor of MCP tools and skills. If adopted, this could **invalidate existing user configurations** and require migration tooling. Significant breaking change potential for v0.8+.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*