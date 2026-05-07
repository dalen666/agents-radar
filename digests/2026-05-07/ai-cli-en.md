# AI CLI Tools Community Digest 2026-05-07

> Generated: 2026-05-07 04:37 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Comparison Report
**Generated:** 2026-05-07

---

## 1. Ecosystem Overview

The AI CLI tool landscape continues to mature rapidly, with seven major projects shipping patches, feature work, and infrastructure improvements within a single 24-hour window. A clear pattern emerges: **MCP (Model Context Protocol) integration is now table stakes**, but each tool struggles with lifecycle management, OAuth compatibility, and error resilience. **Session state corruption and context compaction loops** are the most painful cross-cutting issues, affecting every tool in this report. Meanwhile, **daemon/background execution modes and multi-agent orchestration** are emerging as the next competitive frontier, with Qwen Code and OpenCode leading infrastructure pushes while Claude Code and Gemini CLI focus on agent integrity and permission scoping. The ecosystem is bifurcating between **workspace-first tools** (Copilot CLI, Claude Code) and **provider-agnostic platforms** (OpenCode, Qwen Code, Kimi), with Copilot's enterprise policy enforcement creating a third "controlled deployment" axis.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Open Issues | Key PRs | Releases | Community Engagement |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues | 10 PRs | 2 patches (v2.1.131, v2.1.132) | High — 99-comment thread closed, 86 👍 on fixed bug |
| **OpenAI Codex** | 10 hot issues | 10 PRs | 5 alpha releases (Rust) | Moderate — 139 👍 top feature, 127 👍 second |
| **Gemini CLI** | 10 hot issues | 10 PRs | 3 releases (preview, nightly, stable patch) | Moderate — critical bugs (subagent integrity) |
| **Copilot CLI** | 10 hot issues | 2 PRs | 3 releases (v1.0.42, .43, .43-0) | Moderate — 3 infinite-loop reports filed today |
| **Kimi Code** | 10 hot issues | 4 PRs | 0 new releases | Low-moderate — 1 high-engagement issue |
| **OpenCode** | 10 hot issues | 10 PRs | 1 release (v1.14.40) | Moderate — 54 👍 on top feature (tab completion) |
| **Pi** | 10 hot issues | 10+ PRs (8 merged) | 0 new releases | Moderate — 16 👍 on top issue (XDG compliance) |
| **Qwen Code** | 10 hot issues | 10 PRs | 2 previews (v0.15.7-preview.1, nightly) | Moderate — config overwrite issue active |

**Key observations:**
- **Pi** has the highest PR throughput this cycle (8+ merged, all performance/quality fixes)
- **Claude Code** shows the most intense community debate (99-comment issue closed)
- **OpenCode** has the broadest PR surface (config, MCP, TUI, task delegation)
- **Copilot CLI** has the fewest PRs but highest regression signal (3 infinite-loop reports)

---

## 3. Shared Feature Directions

### MCP Ecosystem Maturation (All 8 tools)
- **Lifecycle fixes**: Claude Code (#56860 — session hangs with MCP), Copilot CLI (#2282 — Windows connection failure), Kimi (#769 — graceful degradation), OpenCode (#25670 — auto-reconnect)
- **OAuth/Policy blocks**: Kimi (#2172 — `client_secret_basic` unsupported), Copilot CLI (#3162 — false-positive policy blocks)
- **Visibility**: Multiple tools working to surface MCP tool results (Claude Code fixed #41361, Pi fixed tool context sync)

### Session State Fragility (All 8 tools)
- **Corruption patterns**: Gemini CLI (#25166 — shell hangs), Claude Code (#56860 — infinite spinner), Kimi (#2165 — invalid tool call crashes), Copilot CLI (#2543 — concurrent sub-agent corruption), OpenAI Codex (#19558 — GPT-5.5 compaction failure)
- **Context compaction regressions**: Copilot CLI (#3158, #3154 — 217-cycle loops), Claude Code (long-standing `/compact` issues)
- **Demand for session portability**: Claude Code (cross-client handoff), OpenAI Codex (provider-independent sessions), Pi (session unrecoverable from malformed tool calls)

### Multi-Agent / Sub-Agent Orchestration (7 of 8 tools)
- **Permission leaks**: Claude Code (#56854 — subagent Write denied), Gemini CLI (#22093 — subagents running without permission)
- **Integrity failures**: Gemini CLI (#22323 — false success reports after MAX_TURNS), OpenCode (#23533 — subagents ignoring plan/build mode)
- **Configuration scoping**: Qwen Code (#3707 — per-agent ContentGenerator), OpenCode (#18013 — TUI variant state per agent)

### Daemon / Background Execution (4 tools actively building)
- **Qwen Code**: Stage 1 of `qwen serve` daemon PR (#3889) landed today
- **OpenCode**: Background task management discussed (#3634)
- **Gemini CLI**: Stream output after spawning turn ends (#25834)
- **Pi**: Mouse reporting and rendered-lines API for extensions (#4231)

### Terminal/TUI Polish and Accessibility (7 of 8 tools)
- **Tab/Shift+Enter**: OpenCode (#7755, delivered), OpenAI Codex (#8673 — newline), Copilot CLI (#13 — Vim mode)
- **Color/Theme customization**: Kimi Code (#2170 — YAML skins PR), Pi (#4185 — bad colors in tmux)
- **Keyboard protocol compatibility**: Pi (#4253 — IME with Kitty protocol, fixed)
- **Wayland/Linux-specific**: Qwen Code (#3829 — image paste on Wayland), OpenAI Codex (#11023 — Linux desktop app)

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary use case** | Agentic coding + research | Multi-provider agent | Google ecosystem | GitHub enterprise | Lightweight CLI | Plugin-first platform | Performance-first TUI | Local model + daemon |
| **Target user** | Power users, CLI-native | Pro users, BYOK | Google Cloud devs | Enterprise orgs | Lightweight users | Plugin devs, extensibility seekers | Terminal enthusiasts | Local/China market |
| **Maturity** | Mature, stable patches | Heavy alpha churn | Rapid iteration | Enterprise-stable | Early, growing | Mature, broad features | New, fast optimization | Early, infrastructure focus |
| **Community culture** | Vocal, demanding | Feature request heavy | Google-process driven | GitHub ecosystem | Small but growing | Plugin ecosystem | Performance-focused | ACP/daemon-focused |
| **Key differentiator** | Cowork, advisor patterns | Rust alpha, cloud exec | Auto Memory system | Enterprise policy | Customizable UI | TUI plugin API | Startup perf (200ms) | `qwen serve` daemon |
| **Weakest link** | CPU idle burn (100%) | Linux app missing | Subagent integrity | Compaction loops | Session fragility | Tool crashes | Terminal compat | Config overwrite bugs |

**Emerging strategic patterns:**
- **OpenCode** and **Qwen Code** are racing to define the **headless agent daemon** category
- **Claude Code** and **Gemini CLI** are investing in **agent integrity and trust** (permissions, subagent correctness)
- **Copilot CLI** is unique in **enterprise policy enforcement** — no other tool has this constraint
- **Pi** is the only tool prioritizing **startup performance** as a headline metric (200ms vs ~1100ms)

---

## 5. Community Momentum & Maturity

### Most Active / Rapidly Iterating
1. **Pi** — 8+ PRs merged today, all performance/quality focused. Highest merge velocity.
2. **Gemini CLI** — 3 releases, critical security fixes (SSRF, unsafe `exec()`), nightly pipeline active.
3. **OpenCode** — 10 PRs active, broad surface area (config, MCP, TUI, task delegation).
4. **Qwen Code** — 10 PRs, two preview releases, daemon infrastructure landing.

### Most Stable / Mature
- **Claude Code** — Patches on stable v2.1.x line. Community engaged but issues are residual (CPU burn, MCP hangs).
- **Copilot CLI** — Enterprise-stable with security focus. PR cadence is low but deliberate.

### Community Engagement Quality
- **Highest signal-to-noise**: Pi — technical, focused issues with clear reproduction.
- **Most feature request volume**: OpenAI Codex — 139 👍 on Linux app, 127 👍 on ChatGPT integration.
- **Most vocal community**: Claude Code — 99-comment threads, strong reaction to regressions.

### Warning Signs
- **Copilot CLI**: 3 reports of infinite plan→compact→re-plan loops filed *today* — signals a serious regression.
- **Kimi Code**: New OAuth bug (#2172) blocks standard MCP integration; session corruption (#2165) is growing.
- **OpenAI Codex**: 5 alpha releases with no changelogs — opaque development process.

---

## 6. Trend Signals for Technical Decision-Makers

### What Developers Are Telling Us

1. **"Don't corrupt my session."** — Every tool has at least one way to permanently break a conversation. This is the #1 trust killer. Tools that fix session resilience (safety checks, rollback, graceful degradation) will win long-term loyalty.

2. **"I need my config to stick."** — Claude Code (Cowork revert #40175), Qwen Code (settings.json overwrite #3843), Kimi Code (system prompt removal #2168). Overwriting user configuration is seen as a betrayal of trust.

3. **"Let me use my MCP servers without pain."** — OAuth gaps, false policy blocks, silent failures, missing reconnect logic. MCP integration is still not "just works" for any tool.

4. **"I want multi-agent, but safely."** — Subagents ignoring permissions, false success reports, race conditions — the multi-agent vision is ahead of the engineering reality. Expect consolidation on permission models and lifecycle guarantees.

5. **"Performance matters on my laptop."** — CPU idle burn (Claude Code #19393), startup time (Pi, now 200ms), log bloat (OpenAI Codex #16886). Developers notice every watt.

### Investment Signals

| Trend | Implication | Tools to Watch |
|---|---|---|
| **Daemon/Background mode** | Next competitive battleground — enables web UI, remote access, CI integration | Qwen Code (Stage 1 shipped), OpenCode |
| **Enterprise policy enforcement** | Copilot CLI is alone here — opportunity for competitors to match for org adoption | Copilot CLI, then Claude Code |
| **Local/fine-tuned model support** | Growing demand for BYOM (bring your own model) | Qwen Code (#3878), Kimi Code (#2165) |
| **Cross-platform parity** | Linux and Windows users are vocal and underserved | OpenAI Codex (Linux app #11023), Copilot CLI (Windows MCP #2282) |
| **Plugin/TUI extensibility** | Ecosystem lock-in potential — first to ship stable plugin API wins | OpenCode (TUI plugins), Pi (mouse API) |
| **Session management** | JSONL bloat, compaction loops, cross-client handoff — infrastructure not scaling | Claude Code, Copilot CLI, Gemini CLI |

### Bottom Line for Developers

- **If you need enterprise policy control today**: Copilot CLI is your only option — but brace for compaction loop regressions.
- **If you want the most stable agentic coding**: Claude Code, despite CPU burn, is the most battle-tested.
- **If you value startup speed and terminal polish**: Pi's <200ms startup is unmatched; monitoring its MCP story.
- **If you want a headless daemon for remote/CI use**: Qwen Code's `qwen serve` is the first mover — evaluate by next month.
- **If you're building plugin ecosystems**: OpenCode's TUI plugin API is the most advanced; Pi's mouse API is the most novel.
- **If you're on Windows**: Every tool has issues. Claude Code, Copilot CLI, and Pi have the most active Windows fixes landing.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-07 | Source: github.com/anthropics/skills**

## 1. Top Skills Ranking

The following PRs have attracted the most community discussion. All remain **open**:

1. **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** — PGTBoos (Mar 2026)
   - **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
   - **Context:** Addresses a universal pain point in Claude-generated output. No negative feedback; community interest centers on extending coverage to more document formats.

2. **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** — GitHubNewbie0 (Mar 2026)
   - **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods, .odf). Includes ODT-to-HTML parsing.
   - **Context:** Fills a clear gap in office format support beyond DOCX. Discussions focus on template-filling edge cases and LibreOffice compatibility.

3. **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** — justinwetch (Jan 2026)
   - **Functionality:** Refines the existing frontend-design skill for clarity and actionability — ensuring every instruction is executable within a single conversation.
   - **Context:** A meta-improvement PR that sparked debate on how prescriptive Skills should be versus leaving creative freedom to Claude.

4. **[Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — 4444J99 (Mar 2026)
   - **Functionality:** Covers the full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, mocking (MSW, Vitest), E2E with Playwright, and accessibility testing.
   - **Context:** One of the most broadly scoped Skills submitted. Community feedback requested clearer version pinning for testing libraries.

5. **[Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)** — amitlals (Dec 2025)
   - **Functionality:** Enables Claude to use SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data.
   - **Context:** The only enterprise-ML integration in the top tier. Discussions centered on API key management and data privacy when running predictions.

6. **[Add AURELION skill suite](https://github.com/anthropics/skills/pull/444)** — Chase-Key (Feb 2026)
   - **Functionality:** Four Skills: kernel (5-floor cognitive framework), advisor (prompt chaining), agent (autonomous tool use), memory (persistent context).
   - **Context:** The largest skill suite submitted. Community enthusiasm was high, but concerns were raised about skill interdependence and token overhead.

7. **[Add AppDeploy skill](https://github.com/anthropics/skills/pull/360)** — avimak (Feb 2026)
   - **Functionality:** Deploys and manages full-stack web apps to public URLs via AppDeploy.ai, including lifecycle management and versioning.
   - **Context:** The highest-velocity PR (updated 2026-05-04). Strong interest in CI/CD integration and environment variable handling.

8. **[Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** — Vanka07 (Mar 2026)
   - **Functionality:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM, FSM, HRSD, SecOps, CSDM, and IntegrationHub.
   - **Context:** The most enterprise-focused submission. Discussions revolved around scope boundaries — is it too broad to be practical?

---

## 2. Community Demand Trends

From the most commented Issues, the community is signaling five clear priorities:

| Demand Area | Signal | Key Issues |
|---|---|---|
| **Org-wide skill distribution** | Highest demand (9 comments, 7 👍) | [#228](https://github.com/anthropics/skills/issues/228): Enable org-wide skill sharing — users want direct sharing links, not manual .skill file transfers |
| **Evaluation & testing infrastructure** | Second strongest signal (6 comments, 6 👍) | [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` has 0% trigger rate — the testing harness is broken |
| **Deduplication & plugin hygiene** | Persistent frustration (6 comments, 8 👍) | [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` plugins install identical content, duplicating skills |
| **Trust & security boundaries** | Emerging concern (4 comments, 2 👍) | [#492](https://github.com/anthropics/skills/issues/492): Community skills under `anthropic/` namespace enable trust boundary abuse |
| **Enterprise SSO compatibility** | Recurring blocker (2 comments, 1 👍) | [#532](https://github.com/anthropics/skills/issues/532): `skill-creator` requires `ANTHROPIC_API_KEY`, unusable for enterprise/SSO users |

**Notable:** [#556](https://github.com/anthropics/skills/issues/556) (broken eval harness) is a red flag — the community cannot reliably test whether Skills actually trigger. This suppresses contributions.

---

## 3. High-Potential Pending Skills

These PRs are actively discussed, not yet merged, and show strong completion signals:

1. **[Add sensory skill — macOS automation via AppleScript](https://github.com/anthropics/skills/pull/806)** — AdelElo13 (Mar 2026)
   - Native macOS automation bypassing screenshot-based computer use. Two-tier permission system. Updated Apr 2.

2. **[Add codebase-inventory-audit skill](https://github.com/anthropics/skills/pull/147)** — p19dixon (Dec 2025)
   - Systematic 10-step orphan code detection, documentation gap analysis, and infrastructure bloat audit. Produces CODEBASE-STATUS.md.

3. **[Add shodh-memory skill](https://github.com/anthropics/skills/pull/154)** — varun29ankuS (Dec 2025)
   - Persistent memory system for cross-conversation context. Teaches Claude structured memory creation and proactive context retrieval.

4. **[Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — eovidiu (Nov 2025)
   - Meta-Skills that evaluate other Skills across 5 dimensions including documentation quality and security posture. Updated Jan 2026.

5. **Fix PRs by Lubrsy706** ([#538](https://github.com/anthropics/skills/pull/538) PDF case-sensitivity, [#539](https://github.com/anthropics/skills/pull/539) YAML validation, [#541](https://github.com/anthropics/skills/pull/541) DOCX bookmark collision) — These are bugfix-only, low controversy, high probability of merge.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for Skills that operationalize existing tools and platforms (ServiceNow, SAP, macOS, deployment pipelines, testing frameworks) rather than novel AI capabilities — the emphasis is on making Claude *useful within established workflows*, with the strongest pain point being the inability to share and manage those Skills across teams.**

---

# Claude Code Community Digest — 2026-05-07

## Today’s Highlights
Two patch releases rolled out yesterday, fixing a VS Code extension crash on Windows and adding opt-out for the alternate-screen renderer. Meanwhile, three newly filed issues document a Windows-wide session hang affecting MCP-heavy workflows—an urgent signal for multi-server users—and the first reported bug for *Claude Code on the Web* reveals that its task-agent system prompt hard-codes commit/push instructions, overriding user-configured `CLAUDE.md` policies.

---

## Releases
**v2.1.132** and **v2.1.131** shipped in the last 24 hours:

- **v2.1.132** — Adds `CLAUDE_CODE_SESSION_ID` env var to the Bash tool subprocess, aligning it with hooks. Also introduces `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` to opt out of the fullscreen alternate-screen renderer.
- **v2.1.131** — Fixes a VS Code extension activation failure on Windows caused by a hardcoded build path in the bundled SDK (`createRequire` polyfill). Fixes Mantle endpoint authentication missing the `x-api-key` header.

---

## Hot Issues (10 items)

1. **[#13480 — Oversized image breaks conversation permanently](https://github.com/anthropics/claude-code/issues/13480)**  
   *Closed* · 99 comments · 86 👍 · The longest-running open bug (filed Dec 2025) finally closed. Pasting an oversized image into a session leaves the conversation unrecoverable—no `/compact`, no reset. Community frustration was high; the fix was likely a size pre-check or sanitization at input time.

2. **[#19393 — High CPU usage (100%+) when idle](https://github.com/anthropics/claude-code/issues/19393)**  
   *Open* · 22 comments · 18 👍 · A persistent pain point since v2.1.12. Idle instances pin a full CPU core, making the tool nearly unusable on laptops. Duplicate reports (#22275, 10 comments, 24 👍) suggest this is the #1 performance complaint.

3. **[#41361 — MCP tool results invisible in 2.1.88](https://github.com/anthropics/claude-code/issues/41361)**  
   *Closed* · 17 comments · 14 👍 · A `safeParse` guard returned `null` on schema mismatch, silently swallowing MCP tool output from the transcript. The regression rattled MCP-heavy users; the fix restored visibility.

4. **[#40175 — Cowork: Global instructions silently revert after saving](https://github.com/anthropics/claude-code/issues/40175)**  
   *Open* · 14 comments · 5 👍 · A subtle data-loss bug in the Cowork feature—users save global instructions only to find an older version restored later. Hard to detect without careful diffing.

5. **[#56860 — Session hangs indefinitely with spinning thinking indicator](https://github.com/anthropics/claude-code/issues/56860)**  
   *Open* · 5 comments · Filed today · Three confirmed variants on Windows 11, all involving MCP servers (crucible, claude-toolkit, desktop-copilot). The spinner never resolves, and Ctrl+C doesn't always recover. Critical for Windows+MCP users.

6. **[#56865 — Claude Code on the Web auto-commits and pushes](https://github.com/anthropics/claude-code/issues/56865)**  
   *Open* · 3 comments · Filed today · The task-agent system prompt for the new web interface hard-codes `git add/commit/push`, overriding any `CLAUDE.md` instructions to the contrary. A governance and safety concern for CI-integrated workflows.

7. **[#52151 — Opus 4.7 via Bedrock: VSCode stream ends with 0 events](https://github.com/anthropics/claude-code/issues/52151)**  
   *Open* · 9 comments · 9 👍 · CLI works fine, but the VSCode extension renders "Unhandled case: [object Object]" after a few turns with the 1M-context model. Bedrock users report this as a showstopper for extended sessions.

8. **[#56811 — Compact command hangs remote client](https://github.com/anthropics/claude-code/issues/56811)**  
   *Open* · 3 comments · Filed yesterday · Running `/compact` from a remote client (e.g., Claude iOS) shows partial results then stops updating until input is received on the desktop. Breaks the "away from desk" workflow.

9. **[#53470 — CCR trigger stuck in ‘setting up container’ for 2+ days](https://github.com/anthropics/claude-code/issues/53470)**  
   *Open* · 3 comments · A containerized routine trigger enters a permanent provisioning state with no cancel button. The user had to kill the process externally. Suggests missing timeout/abort logic in the container orchestrator.

10. **[#56854 — Subagent Write/Edit denied despite `acceptEdits` mode](https://github.com/anthropics/claude-code/issues/56854)**  
    *Open* · 1 comment · Filed yesterday · Spawned subagents hit "Permission denied" for Write/Edit even when the parent explicitly passes `mode: "acceptEdits"` and `settings.local.json` has allow rules. A permissions-scoping bug that blocks multi-agent workflows.

---

## Key PR Progress (10 items)

1. **[#56334 — docs: Add Windows Developer Mode note for symlink support](https://github.com/anthropics/claude-code/pull/56334)**  
   *Open* · Addresses #55263 where Windows users without Developer Mode saw silent "0 tokens" errors. Documents a prerequisite that was previously undocumented.

2. **[#49596 — refactor: Extract shared GitHub API client into github-api.ts](https://github.com/anthropics/claude-code/pull/49596)**  
   *Open* · Extracts a shared client with tests. Clean-up PR that reduces duplication across the codebase—benefits plugin authors and internal tooling.

3. **[#56784 — Pin GitHub Actions to commit SHAs](https://github.com/anthropics/claude-code/pull/56784)**  
   *Open* · A security hardening PR that pins third-party Actions to immutable SHAs instead of version tags. Protects against supply-chain attacks on CI pipelines.

4. **[#56621 — Fix duplicate rules on init firewall](https://github.com/anthropics/claude-code/pull/56621)**  
   *Open* · Prevents `init-firewall.sh` from failing when duplicate iptables rules are created. A reliability fix for self-hosted or containerized deployments.

5. **[#20824 — Add CLAUDE.md with comprehensive AI assistant guidelines](https://github.com/anthropics/claude-code/pull/20824)**  
   *Closed* · Adds a `CLAUDE.md` to the Claude Code repo itself, documenting project structure, plugin system, dev workflows, and best practices for AI assistants working with the codebase.

6. **[#42162 — fix(hookify): Use relative imports for plugin cache](https://github.com/anthropics/claude-code/pull/42162)**  
   *Closed* · Fixes the hookify plugin when installed via the plugin cache (non-standard directory layout). Absolute imports broke; relative imports now resolve correctly.

---

## Feature Request Trends

- **Conversation portability** — Two issues today demand better handoff: "Open Claude Code" from claude.ai drops all context (#56903), and `/compact` on remote clients loses state (#56812, #56811). Users want seamless cross-session and cross-client continuity.
- **Web/IDE parity** — Claude Code on the Web (#56865) and the VSCode Bedrock stream bug (#52151) highlight a widening gap between CLI and non-CLI surfaces. Expect growing pressure for feature parity.
- **Cancellable long-running operations** — Stuck container setup (#53470), indefinite thinking spinners (#56860), and non-dismissable `/status` modals (#56309) all point to missing timeouts and abort buttons for background tasks.

---

## Developer Pain Points

1. **CPU burn when idle** — Issues #19393 and #22275 (combined 32 comments, 42 👍) dominate the performance category. Idle instances consuming 100% CPU are the top-reported quality-of-life defect across all platforms.
2. **MCP server lifecycle bugs** — Duplicate server spawns on Windows (#53134), invisible tool output (#41361, #56670), and session hangs with multiple MCP servers (#56860) suggest the MCP integration layer lacks robust state management and error handling.
3. **Permission/model scoping confusion** — Subagents ignoring `acceptEdits` (#56854), VSCode vs. CLI model behavior differences (#52151), and Cowork instructions silently reverting (#40175) erode trust in declarative configuration. Developers want a single source of truth for permissions, not per-surface heuristics.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-07

## Today's Highlights

A substantial wave of Rust alpha releases (v0.129.0-alpha.9 through .14) landed in the last 24 hours, though no release notes detail specific changes. The community continues to rally around long-standing requests for a native Linux desktop app (#11023, 139 👍) and ChatGPT session interoperability (#2153, 127 👍). On the engineering side, a coordinated stack of PRs from the Codex runtime team is building out environment configuration, stdio exec-server transport, and cloud-backed environment providers — signaling a major infrastructure push for multi-environment and remote-execution support.

## Releases

Five Rust alpha releases were published in the last 24 hours, all under the v0.129.0-alpha line: .9, .10, .12, .13, and .14. No changelogs or release notes accompany these tags beyond the boilerplate "Release 0.129.0-alpha.X" messages. Given the volume of PR activity around environment providers and Windows sandbox ACLs, these likely contain incremental fixes and plumbing for the ongoing infrastructure stack.

No stable releases were observed.

## Hot Issues

1. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** · 46 comments · 139 👍  
   The top-voted open feature request. The author cannot use the macOS app due to a power-consumption bug and wants a native Linux build. Community enthusiasm is high; this is the single most-requested platform gap.

2. **[#2153 — ChatGPT integration](https://github.com/openai/codex/issues/2153)** · 33 comments · 127 👍  
   Request to move Codex sessions to ChatGPT for brainstorming with web search, then bring results back to Codex CLI. A bidirectional workflow desire that speaks to how developers want to combine agentic coding with conversational research.

3. **[#3550 — Scope Codex chats to VS Code projects/workspaces](https://github.com/openai/codex/issues/3550)** · 22 comments · 59 👍  
   Global chat list is a persistent source of friction for multi-project developers. Scoping to workspace is a clean DX improvement with broad support.

4. **[#19558 — GPT-5.5 remote compaction fails on Desktop](https://github.com/openai/codex/issues/19558)** · 17 comments · 10 👍  
   Switching to GPT-5.5 triggers automatic context compaction that leaves threads entirely unusable. A critical reliability issue for Pro users on the latest model.

5. **[#13937 — Codex App can't open JetBrains IDEA on Windows](https://github.com/openai/codex/issues/13937)** · 12 comments · 8 👍  
   IDE launching from the Windows app is broken for JetBrains users. Frustration is compounded by multiple broken entry points.

6. **[#8673 — Shift+Enter for newline in TUI prompt](https://github.com/openai/codex/issues/8673)** · 11 comments · 4 👍  
   A quality-of-life issue for the TUI: multi-line input currently requires workarounds. Simple ergonomic gap with vocal support.

7. **[#20845 — `/mcp` prints `taskkill` process termination logs on Windows](https://github.com/openai/codex/issues/20845)** · 11 comments · 1 👍  
   Running `/mcp` in the Windows CLI leaks internal process-management output to the user. Minor but jarring for Windows devs.

8. **[#20886 — Artifact/source popover blocks scrollbar on Desktop](https://github.com/openai/codex/issues/20886)** · 7 comments · 10 👍  
   UI regression on Windows: the hover popover for artifacts overlaps the scrollbar, making dragging impossible. Annoying interaction bug.

9. **[#16886 — TUI logs grow unbounded without rotation](https://github.com/openai/codex/issues/16886)** · 5 comments · 2 👍  
   Log files in the TUI have no rotation policy, consuming disk space over long sessions. A reliability concern for power users.

10. **[#20493 — Chats disappear after update/import on Desktop](https://github.com/openai/codex/issues/20493)** · 3 comments · 3 👍  
    Updating Codex Desktop can cause local chats to vanish from the sidebar even though JSONL files remain on disk. A data-durability scare that erodes trust in the desktop app.

## Key PR Progress

1. **[#21481 — Revert state DB injection and agent graph store](https://github.com/openai/codex/pull/21481)**  
   Rolls back mandatory state DB and agent graph store from ThreadManager construction while preserving newer installation ID and session identity changes. Stabilization after a contentious dependency change.

2. **[#21479 — Scope Windows sandbox write-root capability SIDs](https://github.com/openai/codex/pull/21479)**  
   Per-write-root capability SIDs for Windows workspace sandboxing, fixing a bug where stale ACLs could allow writes to unintended directories. Critical for Windows sandbox security.

3. **[#21466 — Durable app-server queued turns](https://github.com/openai/codex/pull/21466)**  
   Moves follow-up turn queuing from client to app-server so queued commands survive renderer reloads. An important reliability improvement for the Desktop app's statefulness.

4. **[#21441 — Parallelize skills list cwd loading](https://github.com/openai/codex/pull/21441)** (closed)  
   Bounded concurrency (5) for `skills/list` directory scanning, which was a cold-start bottleneck on the shared config queue. Targeted performance fix.

5. **[#20978 — Dynamic model service tier slash commands](https://github.com/openai/codex/pull/20978)**  
   Replaces hard-coded `/fast` with dynamic service-tier slash commands pulled from model metadata. More flexible model selection in the TUI.

6. **[#21340 — Allow shared config reads in app-server queue](https://github.com/openai/codex/pull/21340)** (closed)  
   Enables concurrent shared reads for `skills/list`, `config/read`, and `plugin/list` while keeping exclusive requests serialized. Reduces latency on fast-path config lookups.

7. **[#20664 — Add stdio exec-server client transport](https://github.com/openai/codex/pull/20664)**  
   First step in a multi-PR stack: allows Codex to start an exec-server process over stdio JSON-RPC instead of requiring a pre-existing websocket URL. Foundation for configured environments.

8. **[#20666 — Add CODEX_HOME environments TOML provider](https://github.com/openai/codex/pull/20666)**  
   Config-backed provider that reads `environments.toml` from `CODEX_HOME`. Not yet activated in entrypoints but completes the provider abstraction for multi-environment support.

9. **[#21429 — Add cloud environment provider](https://github.com/openai/codex/pull/21429)**  
   Fetches exec-server websocket URLs from `/cloud/executor/{executor_id}/register`. Enables cloud-hosted execution environments managed via `environments.toml`.

10. **[#21476 — Fix remote TUI cwd decoding across OSes](https://github.com/openai/codex/pull/21476)**  
    Fixes thread lifecycle bootstrap failures when a Windows TUI connects to a Linux remote app-server. Path decoding mismatch between `AbsolutePathBuf` representations. References issue #21357.

## Feature Request Trends

- **Multi-platform Desktop parity**: Linux app support (#11023) and Windows-specific bugs dominate. The community wants feature-complete desktop apps on all three major platforms.
- **Chat/IDE integration depth**: ChatGPT session bridging (#2153) and VS Code workspace-scoped chats (#3550) reflect demand for tighter integration between coding agents and collaborative/research tools.
- **TUI ergonomics**: Shift+Enter for newlines (#8673), Vim text objects (#21383), and usage/context status lines (#21324) show that CLI/TUI users are pushing for a polished terminal experience.
- **Session portability and durability**: Provider-independent sessions (#21464), chat persistence after updates (#20493), and worktree CWD correctness (#21432) point to anxiety about state loss across version upgrades and provider switches.
- **Visual usage feedback**: Usage-limit rings in the pet avatar (#21480) and context/token progress bars (#21324) signal a desire for transparent metering, especially among heavy Pro users.

## Developer Pain Points

- **Windows-specific breakage**: Multiple Windows issues appear daily — sandbox blocks child processes (#21470), popover/scrollbar UI conflicts (#20886), WSL path normalization for pets (#20730, #21471), JetBrains IDE launch failure (#13937), and internal paths leaked to users (#21463). Windows parity remains a high-friction area.
- **Context compaction fragility**: GPT-5.5 compaction failures (#19558) render threads unusable. For users relying on long-running sessions, this is a show-stopper.
- **Missing Linux desktop app**: Issue #11023 has been open since February 2026 and is now the most-upvoted feature request. The macOS power bug (#10432) that drove the request remains unresolved.
- **Unbounded log growth**: TUI logs with no rotation (#16886) pose real problems for extended sessions and CI-like usage patterns.
- **Config validation fragility**: A single invalid enum value in `config.toml` can make the entire config unusable (addressed by PR #21111, still open). Users expect partial config resilience.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-07

## Today's Highlights

Multiple patch releases address an unspecified fix across v0.41.2 and v0.42.0-preview.2, while the nightly build resolves a critical tool approval race condition in the A2A server. The community is actively contributing security hardening (SSRF fix, unsafe `exec()` removal) and UX improvements (interactive hunk review, session forking), while maintainers focus on stabilizing the Auto Memory system and fixing subagent integrity issues.

## Releases

- **[v0.42.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-preview.2)** — Cherry-pick of a fix into the v0.42.0-preview.1 branch. No details on the patched issue.
- **[v0.42.0-nightly.20260506.g80d269054](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260506.g80d269054)** — Fixes a **tool approval race condition** in the A2A server (`#26479`) and prevents **settings dialog border clipping** via `maxHeight` (`#26484`).
- **[v0.41.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.2)** — Cherry-pick of the same fix as v0.42.0-preview.2, applied to the stable v0.41.x line.

## Hot Issues

1. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, agent)  
   Epic to expand behavioral eval coverage (76 tests across 6 supported Gemini versions). Community interest is limited, but this is foundational for release confidence.

2. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (agent)  
   Investigating whether AST-aware tools can reduce token noise by reading precise method bounds. Could significantly reduce turn count. 1 👍.

3. **[#22323 — Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, agent)  
   🔥 **Critical bug**: `codebase_investigator` subagent reports `status: "success"` even when hitting max turns before any analysis. Users lose visibility into failures. 2 👍.

4. **[#21968 — Gemini does not use custom skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, agent)  
   Anecdotal but widespread: users must explicitly instruct the model to use custom skills. Undermines the value of skill authoring.

5. **[#26563 — `save_memory` tool not found](https://github.com/google-gemini/gemini-cli/issues/26563)** (P2)  
   `/memory add` fails entirely on v0.41.1 — the backing tool is missing. Points to a possible configuration or migration regression.

6. **[#24916 — Gemini CLI keeps re-asking permissions on same file](https://github.com/google-gemini/gemini-cli/issues/24916)** (security)  
   Permission caching broken — "allow for all future sessions" does not persist. High impact for workflow friction.

7. **[#25166 — Shell command hangs with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (core)  
   Repeated hang after trivial commands. 3 👍 — high community frustration.

8. **[#26623 — Display token reset countdown in `/stats model`](https://github.com/google-gemini/gemini-cli/issues/26623)** (P3, enhancement, good first issue)  
   Japanese-language request to show token reset timer. Signals desire for better rate-limit transparency.

9. **[#26516 — Memory system bugs and quality improvements](https://github.com/google-gemini/gemini-cli/issues/26516)** (agent)  
   Tracking issue for three Auto Memory sub-bugs: indefinite retry of low-signal sessions, silent invalid patch skipping, and content sent to model before redaction.

10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P1, agent)  
    Subagents activate despite being disabled in all configs. Permission boundary violation — undermines trust in the agent system.

## Key PR Progress

1. **[#26625 — Interactive hunk review for file edits](https://github.com/google-gemini/gemini-cli/pull/26625)** (new)  
   Selectively accept/reject individual code hunks instead of all-or-nothing file modifications. Massive UX improvement for code review workflows. *(Note: duplicate PR #26624 was closed.)*

2. **[#26618 — `/fork` session branching command](https://github.com/google-gemini/gemini-cli/pull/26618)** (help wanted)  
   Snapshots session state under a new ID, enabling two terminals to resume independently — solves "last-write-wins" corruption in concurrent sessions.

3. **[#26594 — Loose boundary policy for GC backstop](https://github.com/google-gemini/gemini-cli/pull/26594)**  
   Fixes a rare feedback loop in the context manager (#26593). Adds logging for token calculation accuracy tracking.

4. **[#26615 — Prevent SSRF via open redirect in web-fetch](https://github.com/google-gemini/gemini-cli/pull/26615)** (security)  
   `web-fetch` was vulnerable to SSRF: Node.js follows redirects automatically, bypassing the private-IP blocklist. Critical fix for users relying on the web-fetch tool.

5. **[#26169 — Remove unsafe `exec()` in app.ts](https://github.com/google-gemini/gemini-cli/pull/26169)** (security, critical)  
   Replaces a CRITICAL-severity `exec()` call in the A2A server HTTP layer. Highlights ongoing security review of the codebase.

6. **[#26529 — Formalize first-class tool lifecycle states](https://github.com/google-gemini/gemini-cli/pull/26529)** (agent)  
   Refactors agent protocol events to include top-level tool status properties, decoupling terminal UI from legacy metadata. Cleans up the rendering pipeline.

7. **[#26548 — Cache model routing decision in LocalAgentExecutor](https://github.com/google-gemini/gemini-cli/pull/26548)**  
   Fixes #25156 by avoiding redundant `ModelRouterService.route()` calls on every turn when model is set to `auto`. Performance improvement for subagents.

8. **[#26241 — Fix tmux scroll issue using ink's useStdout](https://github.com/google-gemini/gemini-cli/pull/26241)** (P2, core)  
   Resolves long-standing bug (#11560) where scroll buffer only used top 20% of screen under tmux.

9. **[#26605 — Hide `/memory add` when memoryV2 is enabled](https://github.com/google-gemini/gemini-cli/pull/26605)**  
   Prevents confusing "tool not found" errors — dead command is now hidden under the v2 memory system.

10. **[#25834 — Stream output out-of-turn (PR 2/2)](https://github.com/google-gemini/gemini-cli/pull/25834)**  
    Enables `stream_output` events to continue flowing after the spawning turn ends. Enables background file-watcher sidecars — key for real-time tool feedback.

## Feature Request Trends

- **Session management**: Strong demand for `/fork` (session branching) and fixes to `--resume` concurrency issues. Users want safe multi-terminal workflows.
- **Granular change control**: Interactive hunk review is the top UX request — the "all-or-nothing" edit model is a pain point.
- **Agent autonomy tuning**: Requests for better subagent usage heuristics (#21968) and configurable permissions per agent (#22093, #22267).
- **Rate-limit transparency**: Token reset countdown display (#26623) reflects growing user concern about quotas.
- **Accessibility**: Incremental table rendering breaks screen readers (#25218) — streaming output needs to be layout-complete before rendering.

## Developer Pain Points

1. **Agent integrity failures**: Subagents reporting GOAL success after MAX_TURNS (#22323), running without permissions (#22093), and ignoring config overrides (#22267) — trust in agent orchestration is eroding.
2. **Broken permission caching**: Repeated "allow" prompts (#24916) and orphaned processes locking browser profiles (#22232) create constant friction.
3. **Shell hang after simple commands**: "Waiting input" stuck state (#25166) with 3 👍 indicates a widespread and highly disruptive issue.
4. **Memory system instability**: Dead `/memory add` command (#26563), low-signal retry loops (#26522), and secret exposure before redaction (#26525) make the Auto Memory feature unreliable.
5. **Tool overload errors**: 400 errors with >128 tools (#24246) and messy cleanup from script generation (#23571) show the agent struggles with large tool sets and side effects.
6. **Security and hygiene**: Two critical-security PRs (SSRF via redirect, unsafe `exec()`) in one day highlight the need for a comprehensive security audit.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-07

## Today's Highlights

Three releases landed today — two containing critical bug fixes for MCP server lifecycle management and one introducing server-side model routing for Auto mode. Community attention is centered on a cluster of open issues describing infinite plan→compact→re-plan loops after auto-compaction, which appears to be a significant regression in agentic workflows. Multiple issues also surfaced around false-positive MCP policy blocks and session state corruption from concurrent sub-agent events.

---

## Releases

Three releases published on 2026-05-06:

**v1.0.43**
- Added username toggle to `/statusline` picker for displaying the active account in the footer
- Auto mode now uses server-side model routing for improved real-time model selection
- Resume prompt now shows correct session name when multiple sessions are active
- **Security fix**: Protection against RCE from malicious input
- [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.43)

**v1.0.43-0**
- Shows download progress when running the update command
- **Fixed**: MCP server child processes (e.g. started via `npx` or `uvx`) are now fully terminated when a session ends — addresses long-standing resource leak concerns
- [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.43-0)

**v1.0.42**
- MCP server failure warnings now suggest a directly runnable `/mcp show` command when the server name contains whitespace
- MCP server failure warnings include stderr output to help diagnose connection errors
- Added `-C <directory>` flag to change working directory before starting
- [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.42)

---

## Hot Issues

1. **#2591 — Single session consuming 80–100 premium requests** [CLOSED]  
   Each tool invocation or thinking step triggers a new premium request, causing massive over-consumption. 32 comments, 13 upvotes.  
   [Issue #2591](https://github.com/github/copilot-cli/issues/2591)

2. **#2101 — Transient API errors leading to rate limiting** [OPEN]  
   Users hitting recurring `Request failed due to a transient API error. Retrying...` until locked out. 24 comments, 16 upvotes.  
   [Issue #2101](https://github.com/github/copilot-cli/issues/2101)

3. **#2282 — Inability to connect to MCP servers on Windows** [OPEN]  
   `Failed to connect to MCP server` errors persist even after executing `/mcp show`. Community reporting broken MCP workflows on Windows. 8 comments.  
   [Issue #2282](https://github.com/github/copilot-cli/issues/2282)

4. **#3101 — Copilot policy access denied with enterprise accounts** [OPEN]  
   `Failed to load models: access denied by Copilot policy` — enterprise users blocked from model selection. 5 comments.  
   [Issue #3101](https://github.com/github/copilot-cli/issues/3101)

5. **#3162 — v1.0.42 falsely reports custom MCP servers as blocked by policy** [OPEN]  
   Regression in registry validation: servers present in the MCP registry are incorrectly labeled "blocked by policy." 2 comments.  
   [Issue #3162](https://github.com/github/copilot-cli/issues/3162)

6. **#2543 — Concurrent sub-agent events corrupt session state permanently** [OPEN]  
   Bug causes `tool_use ids were found without tool_result blocks` on every subsequent message after a race condition with sub-agents. Requires full session restart. 1 comment, 2 upvotes.  
   [Issue #2543](https://github.com/github/copilot-cli/issues/2543)

7. **#3158 — Plan→Compact→Re-Plan infinite loop (217 cycles, zero execution)** [OPEN]  
   Auto-compaction triggers an infinite loop where the agent replans instead of executing. 0 comments (filed today).  
   [Issue #3158](https://github.com/github/copilot-cli/issues/3158)

8. **#3154 — Same infinite loop pattern, 217 cycles** [OPEN]  
   Duplicate report confirming the severity of the compaction loop regression.  
   [Issue #3154](https://github.com/github/copilot-cli/issues/3154)

9. **#1944 — Mouse wheel scroll captured by input box on Windows** [CLOSED]  
   Regression where scrolling conversation history is impossible on Windows — scroll events go to the text input instead. 8 comments.  
   [Issue #1944](https://github.com/github/copilot-cli/issues/1944)

10. **#3165 — `allowed-tools: shell` does not auto-approve compound commands** [OPEN]  
    `allowed-tools` in SKILL.md fails on `;`, `&&`, `|` and unlisted binaries, negating the auto-approval feature. Filed today.  
    [Issue #3165](https://github.com/github/copilot-cli/issues/3165)

---

## Key PR Progress

1. **#3137 — Add initial devcontainer configuration** [CLOSED]  
   Minimal devcontainer setup for contributors — foundation for reproducible development environments.  
   [PR #3137](https://github.com/github/copilot-cli/pull/3137)

2. **#3163 — ViewSonic monitor** [OPEN]  
   Initiated GitHub Action runners; references three issues (#2591, #3561, #3559) — appears to be CI infrastructure work. Low community engagement.  
   [PR #3163](https://github.com/github/copilot-cli/pull/3163)

---

## Feature Request Trends

The most demanded feature directions from recent issues:

- **Vi/Vim input mode** ([#13](https://github.com/github/copilot-cli/issues/13)): 57 upvotes, oldest open feature request. Modal editing for CLI input remains the single most-requested UI feature.
- **Subagent tool call transparency** ([#1322](https://github.com/github/copilot-cli/issues/1322)): Users want drill-down visibility into subagent tool calls, matching VS Code Copilot Chat capabilities.
- **Custom provider support in ACP mode** ([#3048](https://github.com/github/copilot-cli/issues/3048)): `COPILOT_PROVIDER_*` environment variables ignored during `--acp` mode — blocks BYOK workflows.
- **Clickable file references in output** ([#3134](https://github.com/github/copilot-cli/issues/3134)): Make highlighted file paths into clickable links to open directly in editor.
- **Multi-account user selection** ([#3169](https://github.com/github/copilot-cli/issues/3169)): `--user` flag to switch between work/personal accounts without re-login.

---

## Developer Pain Points

- **Infinite plan→compact→re-plan loops** ([#3154](https://github.com/github/copilot-cli/issues/3154), [#3157](https://github.com/github/copilot-cli/issues/3157), [#3158](https://github.com/github/copilot-cli/issues/3158)): Three separate reports filed today of sessions stuck in planning loops after auto-compaction — a critical regression for agentic coding.
- **MCP server connectivity issues** ([#2282](https://github.com/github/copilot-cli/issues/2282), [#3162](https://github.com/github/copilot-cli/issues/3162)): Both Windows connection failures and false-positive policy blocks on known MCP servers are actively harming plugin-based workflows.
- **Session state corruption from concurrent sub-agents** ([#2543](https://github.com/github/copilot-cli/issues/2543)): Race conditions leave sessions permanently broken with non-recoverable tool_use/tool_result mismatches.
- **Premium request over-consumption** ([#2591](https://github.com/github/copilot-cli/issues/2591)): Single user requests generating 80–100 premium API calls due to per-tool-step billing — a serious cost concern for heavy users.
- **Enterprise access denied** ([#3101](https://github.com/github/copilot-cli/issues/3101)): Copilot policy blocking model loading for enterprise accounts persists across versions, affecting organizational adoption.
- **`allowed-tools: shell` limitations** ([#3165](https://github.com/github/copilot-cli/issues/3165)): Auto-approval feature fails on compound commands and unlisted binaries, undermining productivity gains from plugin tool permissions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-05-07**

## Today's Highlights
The community is actively converging around two major themes: MCP reliability improvements and user interface customization. A critical MCP OAuth bug (#2172) was reported, while a well-received PR (#2170) implementing user-customizable color skins via YAML is now open for review. Additionally, the RalphFlow architecture PR (#1960) continues to mature, promising automated iteration with convergence detection for complex agent workflows.

## Releases
No new releases in the last 24 hours. Latest stable version referenced in issues is **v1.41.0**.

## Hot Issues

1. **[#2172] MCP OAuth fails with `client_secret_basic`** — Newly opened, this bug blocks integration with MCP servers that use `client_secret_basic` authentication. The CLI's OAuth validation only accepts `'none'` or `'client_secret_post'`, limiting compatibility with standard OAuth setups. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2172)

2. **[#769] MCP connection failure should not exit CLI** — Long-standing enhancement request (6 👍) urging graceful degradation when MCP servers fail. Community consensus aligns with Codex/Claude Code behavior where a single faulty MCP server shouldn't prevent use of other tools. [Link](https://github.com/MoonshotAI/kimi-cli/issues/769)

3. **[#2017] Session corruption with long context** — User reports conversations with substantial history become unrecoverable, receiving "Service temporarily unavailable" on Windows 10. Indicates potential context window management bugs in v1.37.0. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2017)

4. **[#2165] Invalid tool call corrupts entire session** — When using locally deployed Kimi-K2.6 models via vLLM, malformed tool calls irreversibly break the session. Highlights fragility in model/tool interaction handling. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2165)

5. **[#2168] System prompt removal backlash** — User reports "Kimi code completely" removed the system prompt in v1.41.0, with 1 👍 showing community concern. This affects users relying on custom system prompt configurations for specialized workflows. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2168)

6. **[#2166] SIGSEGV crash on Python 3.14.0a6** — PyYAML C extension ABI incompatibility causes segmentation faults on newer Python builds. Blocks `kimi term`/Toad functionality for early adopters of Python 3.14. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2166)

7. **[#2169] Non-interactive quota checking** — Request for `kimi usage --print` flag to enable programmatic quota monitoring from scripts and CI pipelines. Currently only available via interactive `/usage` slash command. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2169)

8. **[#2167] Web UI tab notifications for approvals** — User requests browser tab title changes or blink effects when tool approval is pending, preventing missed actions when multitasking. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2167)

9. **[#2171] RFC: User-customizable color skins via YAML** — Proposes `~/.kimi/skins/` directory for defining custom color palettes, complementing the existing `/theme` command's limited `dark`/`light` options. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2171)

10. **[#2173] Crow-cli integration request** — User requests support for `crow-cli` as an agent framework with Kimi API, noting current coding plan no longer allows direct API key insertion for third-party agents. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2173)

## Key PR Progress

1. **[#2138] Fix shell mode default shell** — Passes `$SHELL` environment variable as the POSIX subprocess executable for Ctrl-X shell mode. Includes regression tests for subprocess kwargs and shell detection. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2138)

2. **[#2139] Fix MCP structured content and sanitize refs** — Preserves MCP `structured_content` as JSON text to avoid dropping machine-readable payloads, and sanitizes `$ref` nodes with metadata siblings before model exposure. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2139)

3. **[#2170] Feat: user-customizable color skins via YAML** — Closes #2171 with a new `/skin` slash command, YAML skin loader for `~/.kimi/skins/`, and Hermes-compatible palette format with fallback tokens. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2170)

4. **[#1960] RalphFlow architecture** — Introduces automated iteration framework with ephemeral context in isolated temporary files, convergence detection, and loop prevention. Still open, indicating ongoing refinement for complex multi-step workflows. [Link](https://github.com/MoonshotAI/kimi-cli/pull/1960)

## Feature Request Trends

1. **MCP resilience** — Strong demand for graceful degradation when MCP servers fail, rather than CLI exit (#769). Users want partial functionality preserved.
2. **Customizable UI** — Multiple requests for theme/skin customization (#2171), with a submitted PR (#2170) addressing this via YAML configuration.
3. **Programmatic access** — Growing need for non-interactive commands (#2169) for CI/CD integration and automated quota monitoring.
4. **Third-party agent compatibility** — Users want Kimi API access restored for external agent frameworks like `crow-cli` (#2173), signaling ecosystem expansion pressure.
5. **Better notification UX** — Web UI tab notifications (#2167) and visibility improvements for pending approvals.

## Developer Pain Points

- **Session fragility** — Invalid tool calls (#2165) and long context sessions (#2017) can corrupt entire conversations, requiring full restarts.
- **MCP OAuth limitations** — Incomplete OAuth flow support (#2172) blocks integration with standard MCP servers.
- **System prompt removal** — Backlash over system prompt disappearance (#2168) indicates strong dependency on custom configuration.
- **Python version compatibility** — Crashes on Python 3.14 (#2166) highlight dependency management challenges for bleeding-edge users.
- **Quota visibility** — No programmatic way to check remaining usage (#2169) hampers automated workflows and monitoring setups.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-07

## Today's Highlights

The OpenCode team shipped **v1.14.40** with support for `.well-known/opencode` remote configs and critical CORS ordering fixes. Community attention is focused on a **regression in plugin `provider.models()` hooks** (post-#25167), continued **edit tool crashes on file modifications**, and a **surge of feature requests around TUI plugin APIs, session management, and agent-team orchestration**. Three PRs addressing long-standing issues—shell Tab completion, MCP auto-reconnect, and malformed SSE JSON repair—are nearing merge.

## Releases

### [v1.14.40](https://github.com/anomalyco/opencode/releases/tag/v1.14.40)
- **Core improvements**: Support `.well-known/opencode` configs that point to a separate remote config file.
- **Bugfixes**:
  - Preserve assistant text when replaying signed reasoning blocks (@edevil).
  - Return consistent not-found errors for missing sessions.
  - Apply CORS headers before authentication to fix preflight failures in browser-based clients.

## Hot Issues (10 selected)

1. **[FEATURE: view archived sessions on desktop](https://github.com/anomalyco/opencode/issues/6680)**  
   *🗓️ Jan 2 → May 6 | 32 comments, 6 👍*  
   A long-standing request for a UI entry point to browse archived sessions via the sidebar `...` menu. High engagement suggests many users rely on session archiving but lack a discoverable way to revisit history.

2. **[about agent-teams](https://github.com/anomalyco/opencode/issues/15035)**  
   *🗓️ Feb 25 → May 7 | 23 comments, 4 👍*  
   A recurring ask for native multi-agent team orchestration. Community eagerly awaiting roadmap details; some users are building workarounds with Task tool delegation.

3. **[bug: edit tool crashes with 'undefined is not an object (evaluating output.args.filePath)'](https://github.com/anomalyco/opencode/issues/24529)**  
   *🗓️ Apr 26 → May 7 | 20 comments*  
   **Critical**: edit tool crashes immediately when modifying existing files with non-empty `oldString`. Blocks daily workflows for many users. Investigated but no fix merged yet.

4. **[Very frequent errors when using openai](https://github.com/anomalyco/opencode/issues/23944)**  
   *🗓️ Apr 23 → May 7 | 15 comments, 9 👍*  
   Users of `openai/gpt-5.4` reporting recurring `server_error` responses. High reaction count indicates widespread impact; likely related to rate-limiting or provider-side instability.

5. **[FEATURE: slash command for reload](https://github.com/anomalyco/opencode/issues/6719)**  
   *🗓️ Jan 3 → May 7 | 14 comments, 54 👍*  
   **Most-upvoted open feature request.** A `/reload` command to reload config files without restarting the process. Popularity shows config iteration as a major friction point.

6. **[Regression: plugin provider.models() hook no longer populates custom providers](https://github.com/anomalyco/opencode/issues/25630)**  
   *🗓️ May 3 → May 7 | 7 comments, 2 👍*  
   Post-#25167 regression breaks custom provider discovery for plugin authors. Affects users with non-catalog providers; being actively investigated.

7. **[Sub Agents Do Not Obey Plan / Build mode](https://github.com/anomalyco/opencode/issues/23533)**  
   *🗓️ Apr 20 → May 6 | 6 comments*  
   Sub-agents executing build actions while parent agent is in plan mode, causing unintended modifications. Raises trust concerns for multi-step workflows.

8. **[FEATURE: Tab completion support in shell mode](https://github.com/anomalyco/opencode/issues/7755)**  
   *🗓️ Jan 11 → May 7 | 5 comments, 8 👍*  
   Bash-like path completion for `!` commands in TUI. Now addressed by PR #26065. Community expectation is high given the prevalence of shell-mode usage.

9. **[Bash tool fails with 'Attempted to assign to readonly property'](https://github.com/anomalyco/opencode/issues/25873)**  
   *🗓️ May 5 → May 7 | 4 comments, 1 👍*  
   **Confirmed root cause**: compiled/minified binary in v1.14.34+ breaks tool execution due to `Object.freeze()` interactions. Effects all compiled deployments.

10. **[Free Models Thinking/Reasoning level causing crashes](https://github.com/anomalyco/opencode/issues/26107)**  
    *🗓️ May 7 | 2 comments*  
    Fresh report: multiple free-tier models (Nemotron 3 Super, GPT-5 Nano) fail during generation with “Provider did not respond.” Possible provider-side throttling tied to reasoning parameters.

## Key PR Progress (10 important)

1. **[fix(task): preserve command-selected models for command-triggered subtasks](https://github.com/anomalyco/opencode/pull/26117)** 🆕  
   Ensures model selection made via commands persists through task tool delegation. Closes #18615. *Just opened today.*

2. **[fix: add Task tool delegation instructions to gemini.txt system prompt](https://github.com/anomalyco/opencode/pull/22245)**  
   Adds missing sub-agent delegation instructions for Gemini models, aligning with Anthropic and Claude prompts. Addresses cross-model consistency gap.

3. **[fix(tui): avoid opentui-spinner color type conflicts](https://github.com/anomalyco/opencode/pull/26116)** 🆕  
   Fixes package type-check failure in TUI spinner component. Small but unblocks CI for downstream PRs.

4. **[fix: match non-ASCII folder names in Open Project search](https://github.com/anomalyco/opencode/pull/25662)**  
   Fixes Unicode NFC/NFD normalization issue causing Korean folder names to be invisible in search on macOS.

5. **[feat(provider): repair malformed SSE JSON via jsonrepair](https://github.com/anomalyco/opencode/pull/25385)**  
   Resolves #25247, #23442: gracefully handles malformed SSE data from OpenAI-compatible providers (Z.AI, Qwen). High-value for reliability.

6. **[fix(mcp): auto-reconnect on transport errors](https://github.com/anomalyco/opencode/pull/25670)**  
   Closes #25287: MCP sessions now survive remote server restarts and transport swaps. Essential for long-running agent workflows.

7. **[fix(web): enable file watcher in web/serve mode](https://github.com/anomalyco/opencode/pull/24951)**  
   Enables native file watcher in web mode for branch change detection (previously only watched `.git/HEAD`). Closes #19182.

8. **[feat: bash-like Tab completion for shell mode](https://github.com/anomalyco/opencode/pull/26065)**  
   Delivers the most-upvoted feature request (#7755): Tab-triggered path completion for `!` commands in TUI.

9. **[fix(task): scope TUI variant state per agent](https://github.com/anomalyco/opencode/pull/18013)**  
   Fixes shared-model variant pollution between agents in TUI. Long-open (Mar 18) but critical for multi-agent setups.

10. **[feat(todo): auto-cleanup stale todos + /clear-tasks commands](https://github.com/anomalyco/opencode/pull/25856)**  
    Adds `/clear-tasks` and `/清除任务` commands plus automatic stale-todo cleanup. Community-driven feature to reduce UI clutter.

## Feature Request Trends

- **Session & workspace management** (#6680, #19433): Viewing archived sessions, branch-aware Git integration, and workspace-scoped operations dominate desktop UI requests.
- **Agent team orchestration** (#15035, #23058): Users want native multi-agent and advisor strategies (à la Claude Code’s advisor pattern) with explicit plan/build mode enforcement.
- **TUI plugin extensibility** (#26097, #7755): Request for TUI plugin hooks for session projections, list adapters, and shell-mode completion—indicating growing ecosystem ambition.
- **Config hot-reload** (#6719): `/reload` remains the #1 voted request, reflecting frustration with session restarts to pick up configuration changes.

## Developer Pain Points

- **Provider reliability & error handling** (#23944, #26107): Recurring `server_error` and unhelpful “Provider did not respond” errors degrade user trust. Minimal diagnostic context in error output.
- **Tool crashes blocking core workflows** (#24529, #25873): Edit tool and Bash tool crashes in recent releases cause immediate work stoppage. Compilation-specific bugs are especially hard to diagnose.
- **Plugin & custom provider regressions** (#25630, #7792): Post-merge regressions in plugin hooks and custom provider initialization erode confidence in the extension API. Need better test coverage for provider plugins.
- **Cross-platform terminal issues** (#23720, #26038): `/exit` freezing or force-closing terminals on Windows (Hyper, PowerShell, Alacritty) persists across versions, with inconsistent behavior between TUI hosts.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-07

## Today's Highlights
Performance-focused changes dominate today's digest: extension loading sees two complementary optimizations (parallel loading and shared jiti caching) that together cut startup time from ~1100ms to under 200ms. A severe Azure OpenAI multi-turn reasoning bug is fixed, and the community continues to push for XDG compliance and better TTY compatibility across terminals, with Chinese IME input corruption now resolved.

## Releases
No new releases in the last 24 hours.

## Hot Issues

**#4228 — Fix openai-completions provider incorrectly handling deltas with both content and tool calls** (17 💬)
When streaming responses, deltas containing both `content` and `tool_calls` were processed incorrectly, breaking multi-step agent interactions. A fix PR (#4247) is already open.
[Issue](https://github.com/badlogic/pi-mono/issues/4228)

**#4208 — Inline image previews corrupt terminal rendering in cmux/Ghostty** (12 💬)
Kitty graphics protocol support breaks when running inside cmux, with Ghostty detection causing display corruption. Works fine in iTerm2, indicating fragile protocol negotiation.
[Issue](https://github.com/badlogic/pi-mono/issues/4208)

**#2870 — Follow XDG Base Directory** (12 💬, 👍16)
Top-voted issue: Pi still clutters `$HOME` on Linux. Despite being closed, the 16 upvotes signal strong community demand for respecting `$XDG_CONFIG_HOME` and `$XDG_DATA_HOME`.
[Issue](https://github.com/badlogic/pi-mono/issues/2870)

**#3108 — Session becomes unrecoverable when model returns tool call with empty name** (8 💬)
Malformed tool calls with empty `name` fields are persisted in session history, poisoning all subsequent API requests. Every provider rejects with 400, permanently locking the session.
[Issue](https://github.com/badlogic/pi-mono/issues/3108)

**#2717 — Make context-file discovery configurable** (7 💬, 👍4)
Users want control over where Pi searches for `AGENTS.md`/`CLAUDE.md` files, including search scope and exclusion patterns. Current hardcoded ancestor walk is inflexible.
[Issue](https://github.com/badlogic/pi-mono/issues/2717)

**#4185 — Zsh/tmux installation: bad colors/contrast** (5 💬)
Fresh npm install of v0.73.0 produces unreadable terminal colors. Likely theme detection failing under tmux/zsh combination.
[Issue](https://github.com/badlogic/pi-mono/issues/4185)

**#4210 — Bedrock converse-stream: empty end_turn treated as successful stop** (4 💬)
Bedrock occasionally returns null/empty responses instead of errors, causing Pi to treat silent failures as successful completions. A local extension workaround exists but core fix needed.
[Issue](https://github.com/badlogic/pi-mono/issues/4210)

**#4141 — Expired tokens cause hung process** (4 💬)
When OpenAI Codex auth tokens expire mid-session, Pi displays the API error then hangs instead of surfacing a clear message or prompting re-auth.
[Issue](https://github.com/badlogic/pi-mono/issues/4141)

**#2909 — Find and Grep tools referenced in default prompt but not enabled** (4 💬)
Default system prompt mentions `find` and `grep` tools, but they require manual `--tools` flag per session with no persistent enable mechanism.
[Issue](https://github.com/badlogic/pi-mono/issues/2909)

**#4253 — Chinese IME input causes doubled/lost characters with Kitty keyboard protocol** (1 💬)
Fresh bug: Kitty keyboard protocol conflicts with IME, inserting characters twice or dropping them. PR #4252 already submitted with fix.
[Issue](https://github.com/badlogic/pi-mono/issues/4253)

## Key PR Progress

**#4255 — shared jiti instance with moduleCache** (merged)
Hoists jiti creation to a singleton and enables `moduleCache: true`. Complements #4242 to slash extension loading time further.
[PR](https://github.com/badlogic/pi-mono/pull/4255)

**#4256 — fix Azure OpenAI multi-turn reasoning with `store:false`** (merged)
Critical: Azure OpenAI Responses API doesn't persist items when `store` is false, causing 404 on turn 2. Now uses `store:true` for intermediate items.
[PR](https://github.com/badlogic/pi-mono/pull/4256)

**#4242 — parallel extension loading via Promise.all** (merged)
Replaces sequential `for...await` loading with concurrent `Promise.all`. Reduces load time from ~1100ms to ~300ms with 64 extensions.
[PR](https://github.com/badlogic/pi-mono/pull/4242)

**#4247 — fix mixed chat completion deltas** (open)
Implements separate accumulators for `reasoning_content`, `content`, and `tool_calls` in streaming responses, fixing #4228.
[PR](https://github.com/badlogic/pi-mono/pull/4247)

**#4252 — fix Chinese IME input dedup and Windows UTF-8** (merged)
Three fixes: handles Kitty keyboard protocol IME double-emission, adds CSI-u deduplication for multi-codepoint sequences, and enables Windows UTF-8 codepage.
[PR](https://github.com/badlogic/pi-mono/pull/4252)

**#4244 — switch back from fork to upstream jiti 2.7** (merged)
Returns to upstream jiti after backporting fixes, reducing maintenance burden and gaining official support.
[PR](https://github.com/badlogic/pi-mono/pull/4244)

**#4243 — config selector scales maxVisible to terminal height** (merged)
Dynamic `maxVisible` sizing for `pi config` resource list: full-screen terminal no longer scrolls 15 items at a time.
[PR](https://github.com/badlogic/pi-mono/pull/4243)

**#4231 — mouse reporting + rendered-lines API for extensions** (merged)
Primitives for mouse-driven extensions: `setMouseReporting()` and `getRenderedLines()` enable copy-on-select and click-to-action features.
[PR](https://github.com/badlogic/pi-mono/pull/4231)

**#4221 — fix spread operator causing stack overflow on large content** (merged)
`Array.push(...largeArray)` caused stack overflow during markdown rendering of big files. Replaced with iterative approach.
[PR](https://github.com/badlogic/pi-mono/pull/4221)

**#4224 — sync dynamically registered tools into agent loop context** (merged)
After MCP tool registration, the running agent loop now updates its tool context mid-session, enabling dynamic tool addition.
[PR](https://github.com/badlogic/pi-mono/pull/4224)

## Feature Request Trends

- **Startup performance**: Two PRs (#4242, #4255) targeting extension loading time reduction show this is a top priority. The ~1100ms baseline for 64 extensions is a clear pain point.
- **Terminal compatibility**: Multiple issues (#4208, #4185, #4253) highlight fragility across terminal emulators, particularly Kitty protocol, tmux/Ghostty, and Windows terminals.
- **Configurability**: Demand for configurable context-file discovery (#2717), persistent model selection (#3254), and always-visible provider info (#4233) indicates users want more control without editing config files.
- **MCP ecosystem**: Issues #4226 (string coercion) and #4227 (short session IDs) show the MCP tool integration surface is still maturing.
- **Cross-platform polish**: Windows Git Bash support (#1), cmd.exe avoidance (#2462), and XDG compliance (#2870) remain long-standing pain points.

## Developer Pain Points

1. **Provider fragility**: Malformed tool calls (#3108), empty responses (#4210), expired tokens (#4141), and payload limits (#2068) cause unrecoverable session states — each requiring manual session clearing.
2. **Terminal rendering chaos**: Image preview corruption (#4208), bad colors (#4185), IME input corruption (#4253), stack overflow on large content (#4221) — TUI stability across environments is the single largest source of bugs.
3. **Missing defaults**: Tools referenced in prompts but disabled (#2909), reasoning levels advertised but unsupported (#4249), persistent defaults being silently overwritten (#3254).
4. **Feature discovery friction**: Complex `/compact` behavior (#4246), ambiguous session ID formats (#4227), no way to permanently enable features referenced in documentation.
5. **Upgrade/breaking changes**: Jump from jiti fork to upstream (#4244), skill wrapper XML bleeding into exports (#4234), changed behavior for `store:false` (#4256) — all shipped rapidly without deprecation cycles.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-07

**Generated from:** github.com/QwenLM/qwen-code

---

## Today's Highlights

Two preview releases landed today: **v0.15.7-preview.1** brings a file read cache for faster unchanged reads and proxy support fixes. On the roadmap front, the long-awaited **daemon mode (`qwen serve`) Stage 1** PR was opened by maintainer **wenshao**, alongside a major **auth provider registry refactor** from **pomelo-nwu**. Community feedback continues to focus on context window handling, session performance issues, and extension tooling.

---

## Releases

- **v0.15.7-preview.1** — New feature: `FileReadCache` short-circuits reads for unchanged files, improving repeated read performance. Fix: CLI now honors proxy settings (`fix(cli): honor proxy setting` by @cyphercodes).
- **v0.15.6-nightly.20260507.15342b893** — Same changes as above, nightly variant.

**Changelog links:**
- [v0.15.7-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.7-preview.1)
- [v0.15.6-nightly.20260507.15342b893](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260507.15342b893)

---

## Hot Issues (Top 10 by relevance)

1. **[#3878 — Incorrect context window size (ignored settings.json value)](https://github.com/QwenLM/qwen-code/issues/3878)**  
   👤 fantasyz | 💬 4 | 🔁 Open  
   A local model user reports that `contextWindowSize: 192000` set in `settings.json` is ignored, causing the agent to operate with a smaller window. **Why it matters:** Directly affects power users running local models; incorrect context limits degrade agent reasoning quality.

2. **[#3837 — ACP mode does not support slash command /](https://github.com/QwenLM/qwen-code/issues/3837)**  
   👤 sunyitao | 💬 2 | ✅ Closed  
   In Zed ACP mode, the `/` slash command does nothing, blocking skill selection. Closed after fix. **Why it matters:** ACP mode is growing as an alternative IDE integration; missing slash support breaks skill-based workflows.

3. **[#3822 — Large file edit/write session JSONL bloat](https://github.com/QwenLM/qwen-code/issues/3822)**  
   👤 RunMintOn | 💬 2 | ✅ Closed  
   Editing large files causes `session JSONL` to balloon with `originalContent`/`newContent`/`fileDiff`, making `/resume` extremely slow. **Community reaction:** Root cause identified — no size boundary control on tool call results. Fix is in.

4. **[#3843 — Qwen overrides settings.json on startup](https://github.com/QwenLM/qwen-code/issues/3843)**  
   👤 master-vsv | 💬 2 | 🔁 Open  
   Starting Qwen Code completely replaces the user's `settings.json`. **Why it matters:** Destructive config overwrite is a serious UX issue; users lose custom provider and model configurations.

5. **[#3634 — Background task management: roadmap and next steps](https://github.com/QwenLM/qwen-code/issues/3634)**  
   👤 wenshao | 💬 2 | 🔁 Open  
   Detailed phased plan for background tasks (Phases A–D). Phase A and B merged; Phase C/D under design. **Why it matters:** The canonical tracking issue for one of the most requested features (parallel shell management).

6. **[#3787 — Thinking process language inconsistent with user language (ACP)](https://github.com/QwenLM/qwen-code/issues/3787)**  
   👤 sunyitao | 💬 1 | 🔁 Open  
   In ACP mode, the thinking process always uses English even when the user prompts in another language. **Community reaction:** A common pain point for non-English speakers; affects trust and readability.

7. **[#3823 — SDK 0.1.6/0.1.7 causes CLI exit code 1](https://github.com/QwenLM/qwen-code/issues/3823)**  
   👤 flyshadowhan | 💬 1 | 🔁 Open  
   Upgrading `@qwen-code/sdk` from 0.1.5 → 0.1.6/0.1.7 introduces intermittent `CLI process exited with code 1` errors. **Why it matters:** SDK consumers (CI/CD, integrations) face silent failures; root cause unknown.

8. **[#3881 — Local Qwen3.6-27b loops returning `/` until token limit](https://github.com/QwenLM/qwen-code/issues/3881)**  
   👤 chn126943 | 💬 1 | 🔁 Open  
   First query to a locally deployed `qwen3.6-27b` can cause the model to repeatedly output `/` chars until the token limit. **Why it matters:** Wastes tokens and breaks the first interaction; likely a chat template or special token mismatch.

9. **[#3877 — Missing API key error despite .env file](https://github.com/QwenLM/qwen-code/issues/3877)**  
   👤 shilkazx | 💬 1 | 🔁 Open  
   `OPENCODE_GO_API_KEY` set in `~/.qwen/.env` is not respected; Qwen forces authentication method selection. **Community reaction:** Environment variable handling is a basic expectation; fix is needed for headless/automated setups.

10. **[#3829 — Cannot paste images on Wayland](https://github.com/QwenLM/qwen-code/issues/3829)**  
    👤 EriDeLee | 💬 1 | 🔁 Open  
    Image paste broken on Wayland (Linux). User has `xdg-utils` and `wl-clipboard` installed. **Why it matters:** Linux Wayland users are a growing segment; clipboard integration gaps affect multimodal workflows.

---

## Key PR Progress (Top 10 by impact)

1. **[#3889 — feat(cli,sdk): qwen serve daemon (Stage 1)](https://github.com/QwenLM/qwen-code/pull/3889)**  
   👤 wenshao | 📅 2026-05-07  
   Implements `qwen serve` HTTP daemon bridging ACP NDJSON over HTTP/SSE. Includes SDK `DaemonClient`. Closes Stage 1 routes: health, capabilities, session CRUD, prompt, cancel. **Why it matters:** First step toward a persistent background agent server — unlocks web UI, remote access, and IDE-backend decoupling.

2. **[#3864 — feat(cli): refactor auth around provider registry](https://github.com/QwenLM/qwen-code/pull/3864)**  
   👤 pomelo-nwu | 📅 2026-05-06  
   Replaces hard-coded auth setup with a provider registry and install plans. Splits Alibaba flows into ModelStudio, Token Plan, Coding Plan. Adds reusable custom provider definitions. **Why it matters:** Makes adding new auth providers (OpenAI, Anthropic, etc.) a plug-in rather than a code change.

3. **[#3707 — fix(core): per-agent ContentGenerator view via AsyncLocalStorage](https://github.com/QwenLM/qwen-code/pull/3707)**  
   👤 tanzhenxin | 📅 2026-04-28 (updated)  
   Ensures sub-agents using a different model than the parent consistently apply their own `ContentGenerator` config (e.g., modality table for inline images/PDFs). **Why it matters:** Fixes modality misconfiguration in multi-model agent teams.

4. **[#3879 — feat(core): add reactive compression on context overflow](https://github.com/QwenLM/qwen-code/pull/3879)**  
   👤 doudouOUC | 📅 2026-05-06  
   When a provider returns a context-window overflow error, automatically compresses the conversation and retries once. **Why it matters:** Graceful recovery from context limit errors — reduces manual retries and wasted sessions.

5. **[#3847 — feat(telemetry): inject traceId/spanId into debug logs](https://github.com/QwenLM/qwen-code/pull/3847)**  
   👤 doudouOUC | 📅 2026-05-05  
   Adds `[trace_id=xxx span_id=yyy]` to every `~/.qwen/debug/{sessionId}.txt` line, enabling OTel correlation in backends like Alibaba Cloud SLS. **Why it matters:** Enterprise debugging — trace log lines back to API calls and tool executions.

6. **[#3883 — fix(cli): warn on ignored provider generation config](https://github.com/QwenLM/qwen-code/pull/3883)**  
   👤 doudouOUC | 📅 2026-05-06  
   Adds a startup warning when provider-backed models have top-level generation settings that will be ignored. Clarifies local model config examples. **Why it matters:** Reduces confusion around #3878 — users now know when their `contextWindowSize` won't apply.

7. **[#3868 — fix(core): use debugLogger for skipped directory warnings](https://github.com/QwenLM/qwen-code/pull/3868)**  
   👤 B-A-M-N | 📅 2026-05-06  
   Replaces raw stderr writes with `debugLogger.warn` for skipped directory messages. Switches to `Set<string>` for tracking. **Why it matters:** Cleans up terminal noise; warnings go to debug logs instead of cluttering user-facing output.

8. **[#3828 — feat(installer): publish release installer assets](https://github.com/QwenLM/qwen-code/pull/3828)**  
   👤 yiliang114 | 📅 2026-05-04  
   Publishes `install-qwen.sh` and `install-qwen.bat` as GitHub Release assets, including SHA256SUMS and version stamping. **Why it matters:** Enables `curl ... | bash` install flow (like OpenCode/Cursor) — improves onboarding and CI setup.

9. **[#3115 — feat: add commit attribution with per-file AI contribution tracking](https://github.com/QwenLM/qwen-code/pull/3115)**  
   👤 wenshao | 📅 2026-04-10 (updated)  
   Adds git commit metadata to distinguish AI-generated from human-authored changes. Supports open-source disclosure and enterprise compliance. **Why it matters:** Critical for adoption in regulated environments and OSS projects requiring AI attribution.

10. **[#3680 — feat(cli): expand TUI markdown rendering](https://github.com/QwenLM/qwen-code/pull/3680)**  
    👤 chiga0 | 📅 2026-04-27 (updated)  
    Adds Mermaid diagrams, math, task lists, blockquotes to terminal Markdown rendering. **Why it matters:** Richer model responses (diagrams, checklists) are now readable without an IDE — improves CLI user experience.

---

## Feature Request Trends

The following **recurring themes** emerged from recent issues and PRs:

1. **Daemon / Background Agent Mode** — Multiple issues (#2271, #3634, #3803, #3889) and active PRs converge on a persistent `qwen serve` daemon with a web interface, background task management, and remote control. **Trend:** High priority; Stage 1 is landing now.

2. **IDE Integration & Context Awareness** — Features like cursor position auto-detection (#597), merging IDE context into user messages (#3712), and auto-complete of workspace files (#1540) aim to reduce manual context setup. **Trend:** Users want "zero-friction" IDE-agnostic workflows.

3. **Installer & Distribution Improvements** — OpenCode-style `curl ... | bash` installer (#3728), standalone executables, and release asset verification (#3828, #3855, #3853) are being actively built. **Trend:** Lowering barriers to entry is a clear focus.

4. **Extension & Plugin System** — First-class native tool registration for extensions (#3870) beyond just MCP servers, plus session-aware runtime context. **Trend:** The plugin ecosystem is maturing but still early; MCP-only is seen as limiting.

5. **Session & Performance Optimizations** — Search in session picker, session JSONL size control (#3822), context compression (#3017, #3879). **Trend:** As sessions grow longer, performance and UX of session management become pain points.

---

## Developer Pain Points

Recurring frustrations and frequently reported bugs from the last 24h:

- **Configuration Ignored or Overwritten** — `contextWindowSize` not respected (#3878), `settings.json` replaced on startup (#3843), `.env` API keys ignored (#3877). **Frequency:** 3+ issues in 24h. **Impact:** High — breaks local/headless setups.

- **Model Behavior Anomalies** — Local models looping on `/` (#3881), stream ending without finish reason (#3888), model reading outside project directory (#3884). **Frequency:** Multiple reports suggest chat template or provider compatibility issues.

- **ACP Mode Gaps** — Slash command unsupported (#3837), thinking language mismatch (#3787). **Frequency:** Growing as ACP adoption increases. **Impact:** Blocks skill selection and non-English UX.

- **SDK/Plugin Instability** — SDK upgrade causes `exit code 1` (#3823), extension tool registration limited to MCP (#3870). **Frequency:** Early SDK adopters hitting regressions.

- **Linux/Wayland Specifics** — Image paste broken on Wayland (#3829). **Frequency:** Recurring (#2885 related). **Impact:** Prevents multimodal image input on modern Linux desktops.

---

*Digest generated from 31 issues and 50 PRs updated in the last 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*