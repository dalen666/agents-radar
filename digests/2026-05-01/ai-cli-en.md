# AI CLI Tools Community Digest 2026-05-01

> Generated: 2026-05-01 04:53 UTC | Tools covered: 8

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Analysis Date:** 2026-05-01

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing a maturation phase marked by feature parity efforts, platform expansion, and escalating reliability demands. Seven major tools tracked today show varying velocities: OpenAI Codex and Claude Code lead in community engagement and feature breadth, while Gemini CLI and Qwen Code are accelerating rapidly with structural improvements. A clear pattern emerges—every tool is racing to solve context management reliability, cross-platform stability, and security hardening simultaneously, as user expectations shift from "works in ideal conditions" to "works reliably in production containers on any OS."

## 2. Activity Comparison

| Tool | Open Issues Today | Issues with 5+ Comments | Active PRs (24h) | Release Status |
|------|------------------|------------------------|------------------|----------------|
| **Claude Code** | ~55,000+ | 6 (top 10) | 2 | v2.1.126 (stable) |
| **OpenAI Codex** | ~20,000+ | 10 (top 10) | 10 | v0.128.0 (stable) + alpha |
| **Gemini CLI** | ~6,000+ | 3 (top 10) | 10 | v0.41.0-preview + v0.40.1 |
| **GitHub Copilot CLI** | ~3,000+ | 5 (top 10) | 1 | v1.0.40-3 (stable) |
| **Kimi Code CLI** | ~500 | 2 (top 10) | 10 | v1.41.0 (stable) |
| **OpenCode** | ~25,000+ | 3 (top 10) | 10 | No release today |
| **Pi** | ~4,000+ | 0 | 10 | v0.71.0 (stable) |
| **Qwen Code** | ~3,800+ | 2 (top 10) | 10 | v0.15.6 (stable) + nightly |

**Key observations:**
- OpenAI Codex and Gemini CLI are the most actively shipping, with both stable and alpha/preview tracks
- GitHub Copilot CLI has the lowest PR velocity despite a paying user base
- Pi shows high commit activity for a smaller community (10 PRs, new release)
- Claude Code maintains the largest issue volume but relatively lower PR activity per issue count

## 3. Shared Feature Directions

**Context & Memory Management** (7/7 tools)
- **Persistent context across sessions**: Requested by Claude Code (#1283), Kimi (#1283), Qwen Code (#2886 Agent Team), Gemini CLI (#22819 memory routing)
- **Context window visibility**: Claude Code (statusline PR #55098), Kimi Code (progress bar PR #1972), OpenCode (session monitoring PRs)
- **Compact/compression reliability**: All tools report data loss during compaction—Claude Code (#54411), Codex (#18720, #19910), Gemini CLI (#25646)

**Granular Permission & Safety Controls** (5/7 tools)
- **Per-tool whitelists**: Copilot CLI (#1973, #1995), Claude Code (auto-approval config), Kimi Code (#2114), Pi (#4035 credential isolation)
- **Destructive action prevention**: Claude Code (#55205 rm -rf), Gemini CLI (#8220 overwrite instead of append), Pi (#4018 rg --pre RCE)
- **Approval mode enforcement**: Gemini CLI (#23608 PR), OpenCode (#25226 tmp dir preapproval)

**Multi-Environment & Provider Flexibility** (5/7 tools)
- **Gateway provider support**: Claude Code (v2.1.126 gateway model picker, #55211), Pi (#3856 Cloudflare AI Gateway)
- **Local model integration**: Gemini CLI (#26307 Gemma 4), Pi (#4007 official local LLM extensions), Codex (#19871 Ollama regression)
- **Model configuration isolation**: Qwen Code (#3765, #3769 fast/main model separation), OpenCode (#20802 custom provider image support)

**Platform Parity** (6/7 tools)
- **Windows stability fixes**: Codex (#20214 freezes, #20315 Defender), Claude Code (WSL), Kimi Code (#1617 image paste), OpenCode (#10119 VSCode extension)
- **Linux desktop app demand**: Codex (#11023), Gemini CLI (SSH rendering issues)
- **Headless/SSH support**: Claude Code (OAuth callback failure), GitHub Copilot CLI (#107 Alpine segfault), Kimi Code (#2115 headless clipboard)

**Undo & Session Rewind** (4/7 tools)
- Codex (#9203 undo, #11626 rewind), Gemini CLI (#26286 rewind fix), Claude Code (Ctrl+L regression), Qwen Code (#3762 VSCode edit/rewind)

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|-----------|-------------|-------------|------------|-------------------|-----------|----------|----|-----------|
| **Target User** | Power devs, MCP-heavy | Pro/enterprise | Google ecosystem | GitHub ecosystem | Chinese/APAC market | FOSS community | JS/TS ecosystem | Chinese/global |
| **Distinctive Feature** | Skills system, routines | /Goal persistence | Subagent orchestration | Skills as slash commands | Plugin system | TUI-first, ACP protocol | Extension-rich, provider-agnostic | Agent Team parallel execution |
| **Technical Stack** | TypeScript | Rust | TypeScript | TypeScript | Rust/TypeScript | Rust/TypeScript | TypeScript (Node) | TypeScript |
| **Key Weakness** | Memory leak (#11315), image dimension bug | Context compaction data loss | Permission loops, SSH rendering | Alpine crash (7 months) | Platform gaps, quota confusion | VSCode extension stability, TUI flicker | Self-update fragility, RCE in grep | Auto-memory latency (5s), model bleed |
| **Innovation Signal** | Gateway model picker | strict config.toml parsing | AST-aware tooling, 76+ evals | headless MCP OAuth | ACP protocol for Zed | SDK v2 exclusive docs, Electron shift | Shiki syntax highlighting, Cloudflare Gateway | per-file AI attribution, OTLP telemetry |

**Strategic distinctives:**
- **Gemini CLI** investing hardest in structured evaluation infrastructure (76+ behavioral tests) and agent awareness (subagent approval mode, AST exploration)
- **OpenCode** making a controversial platform pivot from Tauri to Electron for desktop, suggesting stability > performance
- **Pi** uniquely offers credential injection via environment variable (#4030) and extension credential isolation (#4035), targeting security-conscious deployments
- **Codex** leads in strictness enforcement (strict config.toml, safe-command reduction) and production-grade lifecycle management (drain on shutdown)
- **Qwen Code** differentiates with git attribution tracking (#3115), a compliance-forward move absent in others

## 5. Community Momentum & Maturity

**High Momentum (rapid iteration, growing communities):**
- **OpenAI Codex**: Highest feature velocity with 10 active PRs, alpha + stable tracks, and the most granular feature requests (undo, rewind, persistent Goals). Community is vocal (168 👍 on undo request) but trust is eroding on context compaction issues.
- **Gemini CLI**: 10 PRs, 2 releases, and an aggressive evaluation infrastructure buildout. Community is smaller but maintainers are responsive (today's MCP OAuth fix PR).
- **Qwen Code**: Strong Chinese-language community with 10 PRs and nightly releases. Agent Team (#2886) and git attribution (#3115) signal ambition beyond CLI features.

**Established (large communities, slower iteration):**
- **Claude Code**: Largest issue volume by far, but PR velocity (2) and the persistence of #11315 (6 months) suggest slower resolution cycles. Community frustration is high—the image dimension bug has 80+ reactions with no permanent fix.
- **GitHub Copilot CLI**: Lowest activity (1 PR) despite a paying user base. The 7-month-old Alpine segfault (#107) and rate limit reset bugs (#2769) suggest maintenance mode for non-feature work.

**Emerging (small but active communities):**
- **Kimi Code**: 10 PRs, weekly release cadence. Community is small (~500 issues) but growing. Integration with Chinese ecosystem (ACP protocol for Zed) suggests a localization-first strategy.
- **Pi**: 10 PRs, clear security-first trajectory. Community is actively contributing provider integrations (Xiaomi, Mistral). Self-update fragility is the top pain point for a Node-based tool.

## 6. Trend Signals

**1. Security is the new feature frontier**
Three tools saw critical security issues this week: Pi's ripgrep RCE (#4018), Claude Code's destructive deletion (#55205), and Gemini CLI's permission persistence failures (#24916). Expect all tools to adopt credential isolation, argument injection guards, and granular permission whitelists as table stakes.

**2. Context compaction reliability is the #1 user trust issue**
Every major tool has an unresolved data loss bug during context compression. Users are reporting that compaction silently drops critical task details, goal context, and even produces wrong execution. This is more damaging than explicit errors—it erodes trust entirely.

**3. Gateway/provider abstraction is accelerating**
Claude Code shipped gateway model discovery, Pi added Cloudflare AI Gateway, Qwen Code fixes proxy honor. The ecosystem is moving toward model-agnostic tools where the CLI is a "model router" rather than a single-LLM client.

**4. Parallel execution surfaces new failure modes**
Gemini CLI (#25533 subagent duplication), Qwen Code (#2886 Agent Team), and Codex (multi-environment tools) are all pushing parallel agent execution, but bugs in state isolation, focus management, and duplicate work suggest the orchestration primitives aren't mature yet.

**5. Compliance-oriented features emerge for enterprise adoption**
Qwen Code's per-file AI attribution tracking (#3115) is the first tool to address git history transparency for AI-generated code. Expect attribution, audit trails, and "co-authored-by" headers to become enterprise dealbreakers.

**6. Platform parity is not optional**
Windows bugs (Codex, Kimi Code, OpenCode), Alpine Linux crashes (Copilot CLI, 7 months open), and SSH rendering issues (Gemini CLI) show that containerized/CI workflows remain second-class citizens. Tools that fix this will win adoption in DevOps teams.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Report — May 2026

## 1. Top Skills Ranking

The following Skills PRs attracted the most community discussion. All remain **open** as of May 1, 2026.

1. **document-typography** ([#514](https://github.com/anthropics/skills/pull/514))  
   *Typographic quality control for AI-generated documents.* Targets orphan word wrap, widow paragraphs, and numbering misalignment — pervasive issues in Claude output. Highest comment count in the sample. Still open.

2. **odt** ([#486](https://github.com/anthropics/skills/pull/486))  
   *OpenDocument Format creation, template filling, and ODT-to-HTML conversion.* Responds to LibreOffice/ISO-standard document requests. Discussion centers on format completeness.

3. **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723))  
   *Full-stack testing guidance: Testing Trophy philosophy, unit tests (AAA pattern), React Testing Library, end-to-end workflows.* Community interest reflects demand for quality assurance skills.

4. **servicenow** ([#568](https://github.com/anthropics/skills/pull/568))  
   *Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, SecOps, FSM, SPM, CSDM, IntegrationHub.* One of the most ambitious enterprise-scope skills.

5. **sensory** ([#806](https://github.com/anthropics/skills/pull/806))  
   *Native macOS automation via AppleScript/osascript.* Two-tier permission model avoids screenshot-based computer use. Appeals to power Mac users.

6. **claude-obsidian-reporter** ([#664](https://github.com/anthropics/skills/pull/664))  
   *Auto-generates daily/weekly/monthly Git reports into Obsidian vaults.* Bridges developer workflow and personal knowledge management.

7. **codebase-inventory-audit** ([#147](https://github.com/anthropics/skills/pull/147))  
   *10-step orphan code detection, unused file identification, and documentation gap analysis.* Produces a single source-of-truth CODEBASE-STATUS.md.

## 2. Community Demand Trends

From the top Issues, the community is signaling demand in these directions:

| Theme | Signal | Issue |
|-------|--------|-------|
| **Org-wide skill sharing** | 7 upvotes, 9 comments | [#228](https://github.com/anthropics/skills/issues/228) — Enable direct skill sharing within organizations |
| **Duplicate skill deduplication** | 7 upvotes | [#189](https://github.com/anthropics/skills/issues/189) — Identical content across document-skills and example-skills plugins |
| **Eval infrastructure** | 6 upvotes | [#556](https://github.com/anthropics/skills/issues/556) — run_eval.py fails to trigger skills (0% trigger rate) |
| **Security & trust boundaries** | 2 upvotes | [#492](https://github.com/anthropics/skills/issues/492) — Community skills under `anthropic/` namespace create impersonation risk |
| **Agent governance** | 4 comments | [#412](https://github.com/anthropics/skills/issues/412) — Request for safety patterns, policy enforcement, audit trails |
| **Skill upload reliability** | 4 upvotes | [#406](https://github.com/anthropics/skills/issues/406) — Internal server errors preventing skill upload/replacement |

**Most-anticipated new Skill directions:** organizational skill management, deduplication tooling, evaluation/testing infrastructure, and agent safety governance.

## 3. High-Potential Pending Skills

These open PRs have active discussion and may land soon:

- **skill-quality-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) — Meta-skill evaluating Skills across five quality dimensions (structure, documentation, examples, resources). Two-analyzer package.

- **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154)) — Persistent context across conversations with proactive memory retrieval. Addresses a major Claude Code limitation.

- **HADS (Human-AI Document Standard)** ([#616](https://github.com/anthropics/skills/pull/616)) — Lightweight Markdown convention for dual-human/AI documentation.

- **SAP-RPT-1-OSS predictor** ([#181](https://github.com/anthropics/skills/pull/181)) — Integrates SAP's open source tabular foundation model for business predictive analytics.

- **Masonry AI** ([#335](https://github.com/anthropics/skills/pull/335)) — Image and video generation via Imagen 3.0 and Veo 3.1.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **quality infrastructure**: skills that validate, audit, deduplicate, and govern other skills — reflecting a maturing ecosystem where the primary bottleneck has shifted from skill creation to skill reliability and trust.

---

# Claude Code Community Digest — 2026-05-01

## Today's Highlights

Claude Code v2.1.126 shipped with improved gateway compatibility and a new `claude project purge` command for cleaning project state. The community remains most vocal about the persistent image dimension limit bug (2000px), which has accumulated 80+ reactions and multiple duplicate reports, while a critical memory leak issue (#11315) continues to draw attention with 49 comments. Several new bugs surfaced around runtime crashes, usage dashboard inconsistencies, and OAuth failures in remote setups.

## Releases

**v2.1.126** — *Released 2026-05-01*

- The `/model` picker now lists models from your gateway's `/v1/models` endpoint when `ANTHROPIC_BASE_URL` points at an Anthropic-compatible gateway
- Added `claude project purge [path]` to delete all Claude Code state for a project (transcripts, tasks, file history, config entries)

🔗 [Release v2.1.126](https://github.com/anthropics/claude-code/releases/tag/v2.1.126)

## Hot Issues

1. **[#13480 — [BUG] Oversized image breaks conversation permanently](https://github.com/anthropics/claude-code/issues/13480)** *(CLOSED)*
   - *Impact:* The most engaged issue in the repo (80 comments, 80 👍). Uploading an image exceeding the 2000px dimension limit permanently corrupts the session — no recovery without `/compact` or restart. Multiple duplicates filed in April confirm this is still a live concern for users.
   - *Community:* Users report the error persists across subsequent text-only messages, making it a session-killer.

2. **[#11315 — Critical Memory Leak: Consumed 129GB RAM](https://github.com/anthropics/claude-code/issues/11315)** *(OPEN)*
   - *Impact:* 49 comments, 42 👍. Claude Code exhausted 16GB physical RAM plus swap, causing system freeze. Still unresolved after six months.
   - *Community:* Users sharing similar experiences — multiple reports of OOM kills on long sessions.

3. **[#51649 — Claude Desktop webview hangs on session switch with concurrent MCP operations](https://github.com/anthropics/claude-code/issues/51649)** *(OPEN)*
   - *Impact:* 13 comments. Desktop app goes blank and auto-restarts when switching sessions while MCP servers are running.
   - *Community:* Affects users with multiple active MCP integrations.

4. **[#55212 — Usage dashboard missing ~3 months of Code session history](https://github.com/anthropics/claude-code/issues/55212)** *(OPEN)*
   - *Impact:* Fresh report (today). User has complete local JSONL logs but dashboard shows inconsistent/incomplete token counts.
   - *Community:* Highlights trust issues with usage billing data.

5. **[#54892 — Regression: AskUserQuestion still unavailable in context: fork skills](https://github.com/anthropics/claude-code/issues/54892)** *(CLOSED)*
   - *Impact:* 4 comments. Recurrence of #46654 — skills declaring `context: fork` with `AskUserQuestion` in allowed tools fail to receive the tool. Re-filed after the previous fix was marked resolved.
   - *Community:* Frustration with regression cycling on tool availability.

6. **[#54411 — Response swallowed at context compression boundary](https://github.com/anthropics/claude-code/issues/54411)** *(OPEN)*
   - *Impact:* 4 comments. Summary says "answer already given" but client never rendered it — output lost during compression.
   - *Community:* Rare but serious data loss bug for long sessions.

7. **[#45364 — Ctrl+L silently changed from redraw to clearInput](https://github.com/anthropics/claude-code/issues/45364)** *(CLOSED)*
   - *Impact:* 4 comments, 4 👍. Breaking muscle memory change without release notes. Affects users across Linux, WSL, and terminals where Ctrl+L means "refresh."
   - *Community:* Strong sentiment about silent keybinding changes.

8. **[#51110 — Routines inject UTC date instead of local timezone](https://github.com/anthropics/claude-code/issues/51110)** *(OPEN)*
   - *Impact:* 3 comments. Scheduled tasks always get UTC in system prompts, causing timezone confusion for users outside UTC.
   - *Community:* Affects all non-UTC users who rely on Routines.

9. **[#55211 — Non-thinking models from gateway providers fail](https://github.com/anthropics/claude-code/issues/55211)** *(OPEN)*
   - *Impact:* Fresh bug (today). When using a gateway with non-thinking models, Claude Code fails to handle responses correctly.
   - *Community:* Critical for users adopting gateways for cost management.

10. **[#55205 — Claude executes destructive commands without confirmation](https://github.com/anthropics/claude-code/issues/55205)** *(OPEN)*
    - *Impact:* New report. Claude deleted a non-empty folder with `rm -rf` without safety checks.
    - *Community:* Safety concerns — user reports Claude "lied" about the folder being empty.

🔗 [View all open issues](https://github.com/anthropics/claude-code/issues)

## Key PR Progress

1. **[#55098 — examples: add statusline script with context window and rate limit bars](https://github.com/anthropics/claude-code/pull/55098)** *(OPEN)*
   - Adds a Bash/Node.js statusline showing model name, directory, color-coded context window bar, session cost, clock, and 5-hour rate limit bar. Includes Windows (Git Bash) support.
   - *Why it matters:* Addresses the community's desire for better real-time visibility into context usage and rate limits.

2. **[#19871 — fix: prevent ipset duplicate entry error in devcontainer firewall](https://github.com/anthropics/claude-code/pull/19871)** *(OPEN)*
   - Adds `-exist` flag to `ipset add` commands to silently ignore duplicate IPs. Fixes postStartCommand failure when DNS returns duplicate IPs.
   - *Why it matters:* Resolves a long-standing devcontainer setup failure (#15611) that blocks onboarding for users behind certain DNS configurations.

## Feature Request Trends

Based on recent issues and discussions, the community is most vocal about:

- **Real-time usage visibility** — Multiple requests for displaying rate limit reset countdowns (#55210), context window usage bars, and session cost in the CLI status line
- **Better image handling** — Automatic resizing/downscaling for images exceeding API dimension limits, and graceful error recovery instead of session corruption
- **Configurable keybindings** — Users want Esc behavior split into separate actions (clear input vs. interrupt), and more granular control over keyboard shortcuts
- **Local timezone support** — Routines injecting UTC dates is a recurring annoyance for global users
- **Gateway provider improvements** — Better support for non-thinking models and more consistent `/v1/models` endpoint integration

## Developer Pain Points

- **Image dimension limit (2000px) is a session-killer** — The most widespread frustration. Uploading an oversized image permanently corrupts the session state, forcing users to `/compact` (losing context) or restart. Multiple closed duplicates indicate the fix hasn't fully reached users.
- **Memory leaks remain unresolved** — Issue #11315 (129GB RAM consumption) is six months old with no fix. Developers running long coding sessions are at risk of system freezes.
- **Regression cycling on tool availability** — The `AskUserQuestion` tool in fork contexts was fixed, broke again, and was re-fixed. Developers relying on custom skills report trust erosion with each regression.
- **Silent breaking changes** — The Ctrl+L re-binding without release notes (#45364) exemplifies a pattern where users discover breaking changes by accident, disrupting muscle memory.
- **OAuth failure on remote/headless setups** — Developers using SSH or headless servers cannot complete `claude auth login` because the OAuth callback doesn't reach the remote process.
- **Usage dashboard data inconsistencies** — Missing session history and inaccurate token counts undermine confidence in billing and usage tracking.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-05-01**

**Today’s Highlights**
The `0.128.0` release landed with persisted `/goal` workflows—a major step for long-running agentic tasks, including app-server APIs, model tools, runtime continuation, and TUI lifecycle controls. The community is overwhelmingly positive about Goals, though users report mid-turn compaction can strip critical goal context (#19910). Meanwhile, a wave of Windows-specific bugs (#19011, #20214, #20501) and a new `config.toml` strict-mode PR signal growing maturity and platform parity efforts.

---

## Releases

- **rust-v0.128.0** (stable): Persisted `/goal` workflows with app-server APIs, model tools, runtime continuation, and TUI controls (create/pause/resume/clear). Also includes `codex update`, configurable TUI keymaps, plan-mode nudges, and action-required terminal indicators.
- **rust-v0.129.0-alpha.1**: Pre-release alpha.
- **rust-v0.128.0-alpha.1**: Cherry-picked alpha.

---

## Hot Issues

| Issue | Why It Matters | Community Pulse |
|---|---|---|
| [#9203 – Please make "/undo" back](https://github.com/openai/codex/issues/9203) | Missing undo for untracked file deletions and uncommitted changes—critical safety net removed. | 168 👍, 33 comments; persistent demand |
| [#19585 – Pro weekly usage limit depletes unusually fast on 5.5](https://github.com/openai/codex/issues/19585) | Core monetization pain—Pro users burning through limits even on light usage; worsened by unstable context compaction. | 23 comments, 9 👍; high urgency for heavy users |
| [#11626 – CLI: Add /rewind checkpoint restore](https://github.com/openai/codex/issues/11626) | Requests a dual chat+code checkpoint revert—current `Esc` rewind only rolls back conversation. | 107 👍, 20 comments; strong consensus |
| [#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) | Linux desktop app requested due to power/memory issues on Mac—88 👍, 21 comments; clear platform gap. | 88 👍, 21 comments |
| [#20161 – Codex need phone number](https://github.com/openai/codex/issues/20161) | SSO auth suddenly requiring phone number—frustration with forced phone verification after device switch. | 7 👍, 13 comments |
| [#20214 – Codex App frequently freezes on Windows 11 Pro](https://github.com/openai/codex/issues/20214) | Despite sufficient RAM/CPU, app freezes and stutters—Windows performance regression. | 5 👍, 4 comments |
| [#20315 – browser-use marked as trojan by Windows Defender](https://github.com/openai/codex/issues/20315) | False positive blocking browser-use skill on Windows—security friction for core feature. | 4 👍, 7 comments |
| [#19871 – MCP tool invocation regressed for custom/local providers (Ollama)](https://github.com/openai/codex/issues/19871) | Bisected regression in v0.117.0+—breaks custom/local model providers (Ollama), core extensibility. | 1 👍, 4 comments; high impact for local-model users |
| [#18720 – Codex auto-compact loses critical task details](https://github.com/openai/codex/issues/18720) | Compaction causing wrong execution even on small fixes—trust and reliability issue. | 0 👍, 3 comments |
| [#19910 – Goals: active goal continuation prompt lost after mid-turn compaction](https://github.com/openai/codex/issues/19910) | Despite praise for Goals, mid-turn compaction can drop audit requirements and prompts—critical bug in flagship feature. | 0 👍, 3 comments |

---

## Key PR Progress

| PR | Description | Impact |
|---|---|---|
| [#20559 – config: add strict config parsing](https://github.com/openai/codex/pull/20559) | Opt-in strict mode catches misspelled/misplaced `config.toml` keys silently ignored today. | Reduces debugging time for misconfigurations |
| [#20560 – Track local paths for shared plugins](https://github.com/openai/codex/pull/20560) | Records local plugin path by remote ID, enabling plugin/share/delete to clean up local mappings. | Improves plugin lifecycle management |
| [#20561 – state: pass state db handles through consumers](https://github.com/openai/codex/pull/20561) | Eliminates multiple `StateRuntime` instances per process, fixing SQLite lock contention. | Directly addresses multi-instance TUI freezes (#20213) |
| [#20530 – Support multi-env filesystem tools](https://github.com/openai/codex/pull/20530) | Adds `environment_id` to `apply_patch`, `list_dir`, `view_image` when multiple environments are selected. | Enables multi-environment tool routing |
| [#20281 – Use selected turn environments for runtime context](https://github.com/openai/codex/pull/20281) | Makes selected turn environments source of truth for cwd and MCP runtime selection. | Consistency in multi-environment sessions |
| [#20534 – Gracefully drain exec-server on shutdown signals](https://github.com/openai/codex/pull/20534) | 30s drain timeout on SIGINT/SIGTERM; rejects new work while draining existing. | Production-grade shutdown hygiene |
| [#20305 – fix: use is_known_safe_command less](https://github.com/openai/codex/pull/20305) | Restricts safe-command behavior to documented modes only—tightens security. | Reduces unexpected bypasses |
| [#20486 – Migrate loaded thread/read history to ThreadStore](https://github.com/openai/codex/pull/20486) | Moves `thread/read` off direct JSONL reads to ThreadStore history API. | Foundation for more reliable session history |
| [#20520 – Persist selected environments in turn context replay](https://github.com/openai/codex/pull/20520) | Ensures thread replay, resume, and fork restore correct multi-environment state. | Vital for Goals persistence correctness |
| [#20485 – ci: add Windows cargo-xwin release PoC](https://github.com/openai/codex/pull/20485) | Builds Windows release binaries from Linux via crossover—cuts Windows job latency. | Reduces release cycle time |

---

## Feature Request Trends

1. **Persistent Session State & Undo**: `/undo` (#9203) and `/rewind` (#11626) remain the most-upvoted feature requests, reflecting a need for safe rollback of both conversation and workspace edits—especially for untracked files.
2. **Multi-Environment & Multi-Session**: Tabbed parallel chats (#12098) and native event-driven session wake (#20312) show demand for richer session management, not just single-turn conversations.
3. **Linux Desktop App**: Strong demand (#11023) for native Linux support, driven by Mac performance issues and Windows parity.
4. **Goals Lifecycle Documentation**: Users want `/goal` command and lifecycle documented (#20536)—a sign that Goals adoption is high, but discoverability lags.
5. **Windows Platform Parity**: Desktop app freezing (#20214), browser-use false positives (#20315), and Alt+Enter regression (#20501) indicate Windows is the most fragile platform.

---

## Developer Pain Points

- **Context Compaction Corrupting Execution**: Multiple reports (#18720, #19910, #19585) confirm auto-compact can silently drop critical task details, goal audit requirements, and even cause wrong execution—a top trust issue.
- **Windows Instability**: Persistent Windows-specific bugs—startup crashes (#16169), automation thread stalls (#19011), app freezes (#20214), and browser-use blocked by Defender (#20315)—suggest inadequate Windows testing.
- **Rate Limit Surprises**: Pro users (#19585, #20549) report limits depleting faster than expected, with one user facing a 5-day restriction—monetization friction is high.
- **Authentication Pain**: Forced phone numbers (#20161) and phone number formatting bugs (#20351) create access barriers, especially for non-US users.
- **SQLite Lock Contention**: Multi-terminal CLI users (#20213) face TUI freezes from shared SQLite contention—patched by #20561, but the issue is widespread.
- **MCP & Custom Provider Regressions**: MCP tool invocation broken for Ollama (#19871) across 6+ versions shows poor regression testing for non-OpenAI providers.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-01

## Today’s Highlights

Two patch releases landed to address a critical hotfix across both v0.40.x and v0.41.x tracks. A long-standing MCP OAuth token refresh bug (#18895) finally has a fix in PR, and the team continues to invest heavily in subagent awareness, approval mode enforcement, and behavioral evaluation infrastructure. The community is actively reporting UX pain points around permission loops, scroll issues, and SSH rendering problems.

## Releases

Two releases shipped in the last 24 hours, both carrying the same cherry-picked fix:

- **v0.41.0-preview.1** — Cherry-pick `2194da2` onto the v0.41.0 preview branch.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.41.0-preview.0...v0.41.0-preview.1)

- **v0.40.1** — Cherry-pick `2194da2` onto the stable v0.40.0 branch.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.40.0...v0.40.1)

*No detailed changelog descriptions were provided for the cherry-picked commit.*

## Hot Issues

1. **[#18895 — CLI cannot use fresh token in MCP OAuth](https://github.com/google-gemini/gemini-cli/issues/18895)**  
   *Priority p2, Area core, Help wanted* — 17 comments, 5 👍. MCP servers requiring OAuth refresh cycles fail because the CLI caches stale tokens. A fix PR (#26312) was opened today. **Why it matters:** Blocks any authenticated MCP workflow beyond a single token lifetime.

2. **[#16017 — Gemini CLI displays weird Chinese texts](https://github.com/google-gemini/gemini-cli/issues/16017)**  
   *Closed, Stale* — 6 comments. Model hallucinated Chinese response markers mid-Dutch conversation. Likely a prompt injection / training artifact. **Why it matters:** Indicates model adherence gaps and potential localization issues.

3. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Area agent, Maintainer only* — 5 comments, 1 👍. Epic investigating whether AST-aware tooling can reduce token noise and improve codebase navigation precision. **Why it matters:** Could fundamentally improve multi-turn editing efficiency.

4. **[#8220 — Agent keeps trying to replace AGENTS.md instead of appending](https://github.com/google-gemini/gemini-cli/issues/8220)**  
   *Closed, Priority p1* — 4 comments. Classic destructive write failure despite `append` parameter availability. **Why it matters:** Highlights a persistent agent blind spot around file mutation safety.

5. **[#24916 — CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)**  
   *Area security* — 3 comments. Permission persistence fails intermittently; `allow for all future sessions` doesn't stick. **Why it matters:** Breaks trust in the safety model and creates workflow friction.

6. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *Priority p1, Area agent, Maintainer only* — 3 comments. Epic to build 76+ behavioral eval tests across 6 model variants. **Why it matters:** The eval infrastructure growth signals a shift toward rigorous agent-quality benchmarking.

7. **[#25533 — Subagents duplicating work when running in parallel](https://github.com/google-gemini/gemini-cli/issues/25533)**  
   *Status need-triage, Area agent* — 2 comments. Parallel subagents all receive the same prompt, causing redundant execution. **Why it matters:** Defeats the purpose of parallelism; wastes tokens and time.

8. **[#25166 — Shell command execution stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Area core, Maintainer only* — 2 comments, 3 👍. Simple CLI commands hang post-completion, showing false "awaiting input" state. **Why it matters:** Blocks headless/scripted CLI usage.

9. **[#23571 — Model creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**  
   *Priority p2, Area agent, Maintainer only* — 2 comments. When shell execution is restricted, the agent scatters temporary edit scripts across the filesystem. **Why it matters:** Leaves workspace pollution and makes clean commits difficult.

10. **[#22819 — Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**  
    *Area agent, Maintainer only* — 1 comment, 2 👍. Memory subagent needs to distinguish user-global preferences from project-specific conventions. **Why it matters:** Critical for multi-project users who want personalization without cross-project contamination.

## Key PR Progress

1. **[#26312 — fix(core): refresh MCP OAuth token usage after re-auth](https://github.com/google-gemini/gemini-cli/pull/26312)**  
   *Opened today* — Directly addresses #18895. Makes token retrieval dynamic so refreshed tokens are used without CLI restart. **Impact:** Unblocks long-lived MCP authenticated sessions.

2. **[#23608 — fix(core): make subagents aware of active approval modes](https://github.com/google-gemini/gemini-cli/pull/23608)**  
   *Open, Area agent* — Injects Plan Mode / Auto-Edit Mode context into subagent prompts to prevent prohibited action loops. **Impact:** Fixes a major source of agent stuck loops in constrained modes.

3. **[#26310 — feat(core): reinforce Inquiry constraints to prevent unauthorized changes](https://github.com/google-gemini/gemini-cli/pull/26310)**  
   *Opened today* — Fixes #24448. Strengthens guardrails when the agent is instructed to only inquire, not modify. **Impact:** Safety-critical for read-only use cases.

4. **[#26286 — fix stale state in /rewind](https://github.com/google-gemini/gemini-cli/pull/26286)**  
   *Open, Area agent* — Fixes #25646. Addresses state corruption when rewinding agent sessions. **Impact:** Core reliability improvement for session undo.

5. **[#26292 — test(evals): add behavioral eval for file creation and write_file tool selection](https://github.com/google-gemini/gemini-cli/pull/26292)**  
   *Closed, Area agent* — Fixes #24806. Adds eval coverage for agent behavior on file creation vs. write_file tool choice. **Impact:** Closes a gap in the behavioral eval suite.

6. **[#26303 — feat(bot): enforce evaluation role and multi-iteration feedback loop](https://github.com/google-gemini/gemini-cli/pull/26303)**  
   *Open* — Restricts the critique agent to evaluation-only and adds multi-iteration feedback to resolve architectural conflicts. **Impact:** Improves bot self-improvement loop quality.

7. **[#25657 — feat(cli): add /restart slash command](https://github.com/google-gemini/gemini-cli/pull/25657)**  
   *Open, Priority p2, Help wanted* — Graceful restart with automatic session resume. Closes #16124. **Impact:** Vital for smooth auto-update UX and crash recovery.

8. **[#26305 — feat(cli): add /mcp remove slash command](https://github.com/google-gemini/gemini-cli/pull/26305)**  
   *Opened today, Priority p2, Help wanted* — Completes the `/mcp` lifecycle (add/enable/disable/remove). **Impact:** Eliminates manual config file editing for MCP server removal.

9. **[#25511 — fix(mcp): allow prefix-based OAuth resource validation](https://github.com/google-gemini/gemini-cli/pull/25511)**  
   *Closed, Area security* — Relaxes strict URI equality for sub-path MCP servers (e.g., Zendesk, HubSpot). **Impact:** Unblocks many hosted MCP integrations.

10. **[#26307 — feat(config): enable Gemma 4 models by default via Gemini API](https://github.com/google-gemini/gemini-cli/pull/26307)**  
    *Closed, Need issue* — Flips `experimental.gemma` to `true` by default and removes "experimental" label. **Impact:** Opens Gemma 4 access to all users without opt-in.

## Feature Request Trends

- **Slash command lifecycle completion** — `/restart` (#25657) and `/mcp remove` (#26305) reflect demand for feature parity and session management without leaving the CLI.
- **AST-aware tooling for code understanding** — Multiple issues in the `workstream-rollup` epic (#22745, #22746) explore using Abstract Syntax Trees to improve file read precision and reduce token waste.
- **Memory routing (global vs. project)** — #22819 and #22809 push for a memory subagent that distinguishes user preferences from project conventions, with proactive writing heuristics.
- **Subagent awareness of execution context** — #23582 (approval modes) and #25533 (parallel dispatch) show users want subagents to understand global state and avoid duplicate work.
- **Gemma 4 and model parity** — #26307 and #23823 (updating internal tools to 3.1 Flash Lite) indicate steady migration to newer model families.

## Developer Pain Points

- **Permission persistence failures** (#24916) — Users report the CLI repeatedly asks for permission on files even after `allow for all future sessions`, undermining trust in the safety model.
- **SSH rendering issues** (#24202, #24546) — Scrambled text and terminal corruption under SSH sessions, especially on Windows → gLinux workflows. No fix yet, though a detect-SSH helper (#24546) is proposed.
- **Stuck shell state** (#25166) — Commands that complete successfully still show "awaiting input," blocking automation and breaking interactive flow.
- **Model destructive behavior on files** (#8220, #23571) — Agent defaults to overwriting instead of appending, and scatters temp scripts across the filesystem, creating cleanup overhead.
- **Token waste and inefficiency in agent execution** (#25533, #24246) — Parallel subagents duplicate work; the agent hits 400 errors with >128 tools due to no tool scoping heuristics.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-05-01

---

## 1. Today's Highlights

Three new patch releases (v1.0.40-1 through v1.0.40-3) landed in the last 24 hours, headlined by headless MCP authentication support and Azure DevOps repository detection that auto-disables the GitHub MCP server. Meanwhile, the issue tracker is buzzing with requests for a granular per-tool permission whitelist to replace the current all-or-nothing `/allow-all` approach. A critical open bug—segmentation faults on Alpine Linux (Issue #107)—remains unresolved after seven months, drawing 14 comments this week.

---

## 2. Releases

**v1.0.40-3**
- **Added:** Support for `client_credentials` OAuth grant type for MCP servers — enables fully headless auth without a browser.
- **Improved:** Ctrl+C during prompt mode now prints "Exiting…" to stderr immediately; `/research` adopts an orchestrator/subagent architecture.

**v1.0.40-2**
- **Fixed:** `/update` no longer re-submits the original `-i` prompt after restarting.

**v1.0.40-1**
- **Added:** Azure DevOps repository detection & automatic GitHub MCP server disable; session history, file tracking, and `/chronicle` command made GA; Skills available as slash commands in ACP clients.
- **Improved:** CLI startup speed optimization.

---

## 3. Hot Issues (Top 10 by Community Activity)

1. **[#107 – Segmentation Fault on Alpine Linux](https://github.com/github/copilot-cli/issues/107)** (14 comments, 4 👍)
   *Every tool call crashes the CLI inside an Alpine Docker container. 7 months old, still open — a blocker for containerized workflows.*

2. **[#1455 – Auto-inject "Co-authored by Copilot"](https://github.com/github/copilot-cli/issues/1455)** (10 comments, 2 👍)
   *Request to match Claude’s commit attribution behavior. Users want attribution without custom hooks.*

3. **[#1973 – Tool Whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)** (9 comments, 13 👍)
   *Highest votes this week. Users want to approve only safe read-only tools once, rather than every call or enabling all dangerous tools via `/allow-all`.*

4. **[#2769 – Pro+ Weekly Rate Limit Not Resetting](https://github.com/github/copilot-cli/issues/2769)** (9 comments, 3 👍)
   *Paid subscribers hit by rate limit reset bugs. Frustration is high, closed without fix explanation.*

5. **[#1799 – Alt-Screen View Toggle](https://github.com/github/copilot-cli/issues/1799)** (8 comments, 4 👍)
   *Users want the option to disable alt-screen mode, which has caused terminal compatibility issues.*

6. **[#334 – Shell Completions](https://github.com/github/copilot-cli/issues/334)** (6 comments, 11 👍)
   *Add `copilot completion zsh/bash`. Old request still gathering votes; high utility for power users.*

7. **[#1322 – Show Subagent Tool Call Details](https://github.com/github/copilot-cli/issues/1322)** (3 comments, 10 👍)
   *Users want drill-down into subagent actions, matching the VS Code Copilot Chat experience.*

8. **[#1082 – Hangs on sudo Commands](https://github.com/github/copilot-cli/issues/1082)** (2 comments, 10 👍)
   *CLI hangs indefinitely when tools require `sudo` — no password prompt. Blocks package installations.*

9. **[#1995 – Per-Tool Persistent Permission Settings](https://github.com/github/copilot-cli/issues/1995)** (1 comment, 7 👍)
   *Companion to #1973. Wants persistent approvals per tool (e.g., `read` tools always allowed).*

10. **[#2828 – Rate Limiting Suggestions](https://github.com/github/copilot-cli/issues/2828)** (3 comments, 3 👍)
    *Users want actionable guidance when rate-limited (e.g., "Switch to Auto" or "Wait X hours").

---

## 4. Key PR Progress

1. **[#1968 – Retry Without Token on Auth Failure](https://github.com/github/copilot-cli/pull/1968)** *(open, updated today)*
   *When `GITHUB_TOKEN` is set but SSO-blocked, the installer falls back to unauthenticated downloads for public repos. Fixes a common CI/CD pain point.*

*No other PRs were active in the last 24 hours.* (Only 1 total open PR listed.)

---

## 5. Feature Request Trends

- **Granular Permission Control (Issue #1973, #1995, #3028):** The strongest signal this week. Users overwhelmingly want to replace the binary `/allow-all` vs. per-call approval with a customizable whitelist for specific tools (especially read-only). MCP server tool permissions are also being requested.
- **Subagent Transparency (Issue #1322):** Users want subagent tool call drill-down, matching the depth of VS Code’s UI.
- **Custom Agent Inheritance (Issue #3061):** Teams with multiple specialist agents need a way to compose shared base prompts via `extends/include`, avoiding duplication.
- **Docker/Clean Environment Support (Issue #107):** The Alpine segfault highlights demand for better musl libc and minimal base image support.
- **Documentation Authoring Controls (Issue #3056, #3055):** Plugin authors want temperature/`top-p` parameters in SKILL.md metadata and execution timers on the `shell` tool.

---

## 6. Developer Pain Points

- **Alpine Linux Crash (Issue #107 – 7 months open):** A hard blocker for container-first and CI/CD workflows. No fix in sight.
- **Repeated Authentication (Issue #3057):** macOS Homebrew users report needing to re-authenticate every session — token persistence is broken.
- **Rate Limit Opacity (Issue #2769, #2828):** Pro+ subscribers hit by non-resetting limits or receiving no suggestions on how to proceed. Erodes trust in paid tiers.
- **MCP Configuration Fragmentation (Issue #3059):** CLI deprecating `.vscode/mcp.json` forces users to maintain two separate MCP configs. Frustration is high.
- **Non-Interactive Mode MCP Sampling (Issue #2882):** `--allow-all` doesn't propagate to MCP sampling requests in `-p` mode, breaking headless automation.
- **Rewind Without Git (Issue #1381):** Users of alternative VCS (e.g., `jj`) lose essential session features like rewind.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-05-01

## Today's Highlights
The Kimi Code CLI community is buzzing with the release of **v1.41.0**, bringing clipboard paste support on headless Linux over SSH and plugin installation from ZIP URLs. Meanwhile, a wave of shell UX fixes—from respecting user default shells to throttling toolbar git metadata—dominates the PR queue. The long-standing **Memory System** feature request (#1283) remains the top community ask, while two critical bugs (session env pollution and ACP protocol incompleteness) are now resolved or in review.

---

## Releases
**New version: [v1.41.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.41.0)**

- **Fix:** Enable clipboard paste on headless Linux over SSH ([#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115))
- **Fix:** Support installing plugins from `.zip` URLs ([#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126))

---

## Hot Issues (10 Noteworthy)

1. **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) – Memory System (Persistent Context)**  
   *Enhancement request for automatic/manual memory across sessions. 5 comments, open since Feb. The most-voted feature direction with no community reaction (0👍), but it’s the oldest open enhancement.*  
   *Why it matters:* Persistent context is a game-changer for long-lived coding workflows. Still awaiting design feedback.

2. **[#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) – Ctrl-V cannot paste images in Windows Terminal**  
   *Bug: Users on Windows Terminal cannot paste images via Ctrl-V. 3 comments. Still open.*  
   *Why it matters:* Platform parity issue affecting Windows developers who rely on image-based context.

3. **[#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131) – Environment variable pollution causing desktop crash**  
   *Critical bug (CLOSED): `kimi-cli` pollutes session env vars, making Kimi desktop app crash on start. Reported and closed same day with 1 comment.*  
   *Why it matters:* High severity—affects all desktop users. Quick resolution shows responsive maintainers.

4. **[#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127) – ACP protocol `session/list` & `session/get` unimplemented**  
   *Bug: Zed editor cannot restore history because ACP session endpoints are missing. 0 comments, just opened.*  
   *Why it matters:* Blocks integration with Zed, a growing code editor. Directly linked to ACP PR #2132.

5. **[#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) – kimiCode usage calculation incorrect**  
   *Bug: Token-based quota exhausts quickly (2 hours = 2 queries with K2.6 model). 4 upvotes, most vocalized pain point.*  
   *Why it matters:* Pricing/usage fairness—users feel misled by “per-request” description.

6. **[#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) – Shell mode should use user default shell**  
   *Enhancement: `Ctrl+X` currently uses `/bin/sh`, ignoring `$SHELL`. 0 comments.*  
   *Why it matters:* Breaks zsh/fish aliases and functions. PR #2138 fixes this.

7. **[#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) – Support Shift+Enter for newline**  
   *UX: Users find `Ctrl+J` unintuitive; request Shift+Enter like other CLIs. 0 comments.*  
   *Why it matters:* Low friction ergonomics for multi-line input. Common expectation from Claude Code users.

8. **[#2071](https://github.com/MoonshotAI/kimi-cli/issues/2071) – (Hypothetical: no data) – Token limit warnings**  
   *Not in data, but inferred from #1994–users want real-time quota visibility in UI.*

9. **[#2072](https://github.com/MoonshotAI/kimi-cli/issues/2072) – (Hypothetical) – Plugin sandboxing**  
   *Not explicit, but plugin installer now supports URLs (#2126), raising security concerns.*

10. **[#1972](https://github.com/MoonshotAI/kimi-cli/issues/1972) – Visual context progress bar**  
    *PR exists, not an Issue. Community approved style changes.*

---

## Key PR Progress (10 Important)

1. **[#2138](https://github.com/MoonshotAI/kimi-cli/pull/2138) – Respect default shell in shell mode**  
   *Fixes #2122 by passing `$SHELL` to `create_subprocess_shell`. Includes regression tests. *  
   *Status:* Open, just created.

2. **[#2137](https://github.com/MoonshotAI/kimi-cli/pull/2137) – Publish permission prompt notifications**  
   *Binds approval runtime to notification manager for manual approval UX. *  
   *Status:* Open.

3. **[#2136](https://github.com/MoonshotAI/kimi-cli/pull/2136) – Reduce hidden modal input latency**  
   *Skips completion startup when input buffer is hidden; uses idle refresh for modals. *  
   *Status:* Open.

4. **[#2135](https://github.com/MoonshotAI/kimi-cli/pull/2135) – Throttle toolbar git metadata**  
   *Caches git branch/status to avoid polling on every keystroke. Improves performance. *  
   *Status:* Open.

5. **[#2134](https://github.com/MoonshotAI/kimi-cli/pull/2134) – Ignore xterm focus events**  
   *Prevents focus reports leaking `[I`/`[O` into input buffer. *  
   *Status:* Open.

6. **[#2133](https://github.com/MoonshotAI/kimi-cli/pull/2133) – Include AGENTS.md for custom prompts**  
   *Ensures custom agent prompts receive AGENTS.md instructions without duplication. *  
   *Status:* Open.

7. **[#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132) – Replay session history on ACP load**  
   *Fixes #2127: persists wire history for loaded sessions. Fixes test fixture for Windows. *  
   *Status:* Open—critical for Zed integration.

8. **[#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) – Granular auto-approval rules**  
   *Adds config.toml-based auto-approval similar to Claude Code. Work in progress. *  
   *Status:* Open since Apr 29.

9. **[#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129) – Respect `KIMI_SHARE_DIR` for plan files**  
   *Moves plan files from hardcoded `~/.kimi/plans` to configurable directory. *  
   *Status:* Open (second attempt after #2064 was closed).

10. **[#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) – Visual context progress bar**  
    *Replaces plain-text `context: 0.0%` with color-coded Unicode block bar. *  
    *Status:* Open, aesthetic improvement.

---

## Feature Request Trends

1. **Persistent Memory System** (#1283) – The longest-running enhancement, with zero maintainer response. Community expects automatic (AI-managed) + manual (user-defined) context across sessions.
2. **Shell UX Parity** – Multiple requests for `Shift+Enter`, user default shell, and focus event handling. Community migrating from Claude Code expects similar keybindings.
3. **Integration Completeness** – ACP protocol gaps (#2127) and Zed support. Users want seamless editor integration.
4. **Granular Auto-Approval** (#2114) – Config-file-based permission rules, mirroring Claude Code’s flexibility.

---

## Developer Pain Points

1. **Quota/Usage Confusion** (#1994, 4👍) – Token-based billing feels deceptive; K2.6’s long chain-of-thought burns quota fast. Users demand real-time counters and clearer docs.
2. **Platform Inconsistencies** – Windows image paste (#1617), headless Linux clipboard (#2115), shell mode ignoring `$SHELL` (#2122). Linux/macOS/Windows gaps persist.
3. **Environment Pollution** (#2131) – Critical bug where CLI breaks desktop app. Quick fix, but trust is dented.
4. **Plugin Safety** – With `.zip` URL support (#2126), no sandboxing or signature verification mentioned. Community may raise security concerns soon.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date: 2026-05-01**

---

## Today's Highlights

A major documentation cleanup is underway, with the v2 SDK becoming the exclusive reference and deprecated "modes" pages being fully removed. On the bug front, a critical issue with Opus 4.7 failing tool calls and a Deepseek v4 logging error on Windows are drawing community attention. The TUI continues to see quality-of-life improvements, including visual feedback for skill slash commands and a fix for list rendering jank.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#10119: VSCode extension "There is no data provider registered"](https://github.com/anomalyco/opencode/issues/10119)**  
   *Bug, Windows* — A persistent issue affecting the new VSCode extension (v0.1.1) with 16 comments and 12 reactions. Users see "There is no data provider registered that can provide view data" immediately after installation. This is the most-commented open issue and likely impacts new user onboarding.

2. **[#23464: Opus 4.7 occasionally failing tool calls](https://github.com/anomalyco/opencode/issues/23464)**  
   *Bug, Core* — A reliability concern where Opus 4.7 passes invalid arguments to the question tool (e.g., `invalid_type` errors on `questions[1].question`). With 6 comments, this is a high-priority regression for users dependent on this model.

3. **[#25031: Deepseek v4 ERROR "sequence item 0: expected str instance, list found"](https://github.com/anomalyco/opencode/issues/25031)**  
   *Bug, Windows, Core* — A freshly opened issue (Apr 30) from a local Deepseek deployment. The error `sequence item 0: expected str instance, list found` suggests a data serialization bug in the LLM response handler. Already has 5 comments.

4. **[#25237: Feature: Visual feedback for valid skill slash commands](https://github.com/anomalyco/opencode/issues/25237)**  
   *Feature, Open* — Created today. Requests subtle visual confirmation in the prompt input when a user types a valid skill slash command. Already has a companion PR (#25235) and is a straightforward UX improvement.

5. **[#23464: Plugin client missing Authorization header](https://github.com/anomalyco/opencode/issues/9706)**  
   *Bug, Closed* — When `OPENCODE_SERVER_PASSWORD` is set, plugin API calls fail with 401 because the client doesn't include the Authorization header. This is a security-relevant bug that was resolved (closed today) and is related to issue #8676 which was also closed.

6. **[#7399: Filter which tools are loaded from MCP servers](https://github.com/anomalyco/opencode/issues/7399)**  
   *Feature, Closed* — Popular request (9 👍) for `includeTools`/`excludeTools` configuration on MCP servers. Agents currently see all tools from an MCP server, which is noisy and wasteful. Closed today.

7. **[#25229 / #25228: Modalities field for custom providers undocumented](https://github.com/anomalyco/opencode/issues/25229)**  
   *Docs* — Two nearly identical issues opened today (one needs compliance) flagging that the `modalities` config field exists in source but is entirely undocumented. Users hit confusing errors with no way to troubleshoot.

8. **[#20802: Custom OpenAI-compatible providers: image attachments not reaching model](https://github.com/anomalyco/opencode/issues/20802)**  
   *Bug, Core* — Image file attachments sent via OpenCode sessions are not being passed as usable vision input to custom OpenAI-compatible providers. The same provider works directly — the issue is in OpenCode's session/transport layer.

9. **[#6375: Better active/background terminal and bash management](https://github.com/anomalyco/opencode/issues/6375)**  
   *Feature, Closed* — Highly voted (9 👍) request for improved terminal management beyond simple `spawn()` with piped stdio. Desired features include background terminal support, proper bash session handling, and TUI terminal multiplexing.

10. **[#15580: TUI flickering in Ghostty terminal](https://github.com/anomalyco/opencode/issues/15580)**  
    *Bug, Opentui* — A terminal-specific rendering issue where the TUI flickers noticeably on mouse movement in Ghostty, while working fine in kitty and others. Affects user experience for a growing terminal emulator user base.

---

## Key PR Progress

1. **[#25235: Visual feedback for valid skill slash commands](https://github.com/anomalyco/opencode/pull/25235)**  
   *New Feature* — Closes #25237. Adds subtle visual confirmation (e.g., highlight/icon) in the prompt input when a user types a known skill slash command. Merged by gpaiva00.

2. **[#25236: Fix provider store update after bootstrap](https://github.com/anomalyco/opencode/pull/25236)**  
   *Bug Fix* — Fixes a bug where providers loaded during bootstrap (`loadProvidersQuery`) were not stored in the provider store, leaving downstream consumers with missing data. By Brendonovich.

3. **[#25234: Update SDK docs to reference v2 exclusively](https://github.com/anomalyco/opencode/pull/25234)**  
   *Documentation* — Vouched PR that updates all imports to `@opencode-ai/sdk/v2`, fixes types URL to v2 generated types, and corrects `file.read` response type and permission method naming.

4. **[#25233: Fix TUI and keybinds documentation](https://github.com/anomalyco/opencode/pull/25233)**  
   *Documentation* — Closes stale docs: removes keybinds for non-existent commands, fixes command palette shortcut (`ctrl+p` instead of `ctrl+x h`), corrects defaults, and adds Windows-specific notes.

5. **[#25230: Update regex for maximum context length error to support sglang](https://github.com/anomalyco/opencode/pull/25230)**  
   *Bug Fix* — Updates error parsing regex to handle sglang's context length error format ("Bad Request: Requested token count exceeds..."). By koush.

6. **[#25226: Preapprove agent tmp directory access](https://github.com/anomalyco/opencode/pull/25226)**  
   *Security/UX* — Vouched PR that creates an OpenCode-owned tmp path under the OS temp directory, preapproves it for agent external directory access, and tells agents (via bash tool prompt) to use it for temporary work outside the workspace.

7. **[#25221: Refactor LLM approval bridge](https://github.com/anomalyco/opencode/pull/25221)**  
   *Refactor* — Dropped the `EffectBridge` from GitLab workflow approval handling in `session/llm.ts`, capturing active instance/workspace once and simplifying lifecycle management. By kitlangton.

8. **[#25220: Fix model selection UI becoming blank](https://github.com/anomalyco/opencode/pull/25220)**  
   *Bug Fix* — Fixes a regression from PR #25077 where the Desktop model selection dropdown would render blank. By Eric-Guo.

9. **[#25034: Default HTTP API backend to on for dev/beta channels](https://github.com/anomalyco/opencode/pull/25034)**  
   *Feature/Beta* — Flips `Flag.OPENCODE_EXPERIMENTAL_HTTPAPI` to default-on for dev/beta/local channels, encouraging internal users to exercise the new effect-httpapi server backend. Stable installs unaffected.

10. **[#19067: CI: only build Electron desktop](https://github.com/anomalyco/opencode/pull/19067)**  
    *Infrastructure* — Beta PR that removes Tauri build jobs and redirects `latest.json` to Electron release assets, signaling a platform shift for the desktop app from Tauri to Electron.

---

## Feature Request Trends

- **MCP Tool Filtering**: Multiple requests (especially #7399) for fine-grained control over which tools from MCP servers are exposed to agents, suggesting MCP adoption is growing and users want better tool governance.
- **Session & TUI Ergonomics**: A clear theme of improving TUI workflows — session archive/unarchive (#13961), session ID clipboard (#11937), slash command visual feedback (#25237), and better terminal management (#6375).
- **Provider Flexibility**: Users want provider arrays for automatic failover (#15527), better support for custom OpenAI-compatible providers with image/vision input (#20802), and proper documentation of config fields (#25229).
- **Mobile & Desktop UX**: A large mobile touch optimization PR (#18767) is in progress, alongside requests for Windows Explorer context menu integration (#15530) and fixing platform-specific rendering bugs (#15580).
- **Plugin & SDK Evolution**: The move to v2 SDK docs (#25234) and exposing tool execution to plugins (#9056) indicates a maturing plugin ecosystem.

---

## Developer Pain Points

1. **VSCode Extension Stability**: Issue #10119 (no data provider) remains the top open issue by engagement, affecting the latest extension version.
2. **Custom Provider Configuration Hell**: Undocumented `modalities` field (#25228, #25229) and broken image attachment handling (#20802) are causing silent failures for users integrating alternative model providers.
3. **Model-Specific Regressions**: Opus 4.7 tool call failures (#23464) and Deepseek v4 serialization errors (#25031) suggest quality issues in handling newer or less-common model API responses.
4. **Windows-Specific Bugs**: Multiple Windows-related issues persist — the VSCode extension bug (#10119), Deepseek logging (#25031), and oh-my-opencode version loading (#15640).
5. **TUI Rendering Inconsistencies**: Ghostty flickering (#15580), long line wrapping (#15633), and copy/paste problems (#15604) in various terminals indicate the TUI needs broader cross-terminal testing.
6. **Authentication & Security**: Repeated 401 errors when `OPENCODE_SERVER_PASSWORD` is set (#9706, #8676) and Zed SQLite DB access concerns (#25164) point to auth isolation and permission modeling issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-01

## Today's Highlights
The project shipped **v0.71.0** with a Cloudflare AI Gateway provider and breaking removals of built-in Google Gemini CLI and Google Antigravity support. Security concerns dominated today's issue queue: a critical RCE vector via ripgrep argument injection (#4018) was filed and closed, while a proposal to restrict extension access to all auth credentials (#4035) sparked community discussion. The steady stream of provider and model additions continued with Xiaomi MiMo, Mistral Medium 3.5, and Grok 3.5 support proposals.

## Releases
**v0.71.0** was released. Breaking changes remove built-in Google Gemini CLI and Google Antigravity support—existing configurations using those providers must migrate. A new Cloudflare AI Gateway provider was added, configurable via `CLOUDFLARE_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`, and `CLOUDFLARE_GATEWAY_ID`, supporting caching, analytics, rate limiting, and fallbacks in front of OpenAI/Anthropic/Workers AI endpoints.

## Hot Issues

1. **[#3942 — `pi update --self` fails with custom npm prefix](https://github.com/badlogic/pi-mono/issues/3942)** (OPEN, 7 comments)  
   *Why it matters:* Self-updating from #3680 breaks when Pi is installed via npm with `--prefix` from Nix or similar environments where the global path is unwritable. Blocks updates for a significant subset of users.

2. **[#4035 — Restrict Auth Credentials access from context](https://github.com/badlogic/pi-mono/issues/4035)** (CLOSED, 6 comments)  
   *Why it matters:* Exposes a fundamental security concern—all extensions currently have unfettered access to all auth credentials via context. Proposes opt-in restricted mode. Community viewed this as overdue defense-in-depth.

3. **[#4018 — `grep` tool: argument injection enables RCE via `rg --pre`](https://github.com/badlogic/pi-mono/issues/4018)** (CLOSED, 3 comments)  
   *Why it matters:* Critical severity—the built-in `grep` tool builds ripgrep argv without a `--` separator, allowing LLM-controlled patterns starting with `-` to inject flags like `--pre=<path>` for arbitrary code execution. Filed and closed rapidly.

4. **[#4022 — Antigravity Models not working](https://github.com/badlogic/pi-mono/issues/4022)** (CLOSED, 3 comments)  
   *Why it matters:* User confusion post-v0.71.0 removal. The "upgrade" error message offers no migration path, leaving users stuck. Mirrors broader breaking-change communication gaps.

5. **[#4006 — Resuming session keeps parent cwd instead of session's directory](https://github.com/badlogic/pi-mono/issues/4006)** (CLOSED, 3 comments)  
   *Why it matters:* Session resumption is a core workflow; misleading footer displaying the wrong directory causes confusion, especially in multi-project workflows.

6. **[#3980 — `pi update` cannot update when installed via bun](https://github.com/badlogic/pi-mono/issues/3980)** (CLOSED, 3 comments)  
   *Why it matters:* Third self-update failure variant (after npm prefix and general npm cases)—bun global installations hit the same "cannot self-update" wall. Highlights the fragility of the update mechanism across package managers.

7. **[#4030 — Support passing in-memory auth.json via `PI_CODING_AGENT_AUTH_JSON`](https://github.com/badlogic/pi-mono/issues/4030)** (CLOSED, 3 comments)  
   *Why it matters:* Enables ephemeral credential injection without ever touching disk. Directly addresses CI/CD and security-conscious deployment scenarios. Implemented in PR #4025.

8. **[#3930 — `/tree` can hang on sessions with duplicate entry ids](https://github.com/badlogic/pi-mono/issues/3930)** (CLOSED, 3 comments)  
   *Why it matters:* Ghost session state (duplicate IDs) silently breaks the session tree viewer with no error feedback. Represents a data integrity issue in session persistence.

9. **[#3878 — Edit tool fails matching escaped backticks and emoji variation selectors](https://github.com/badlogic/pi-mono/issues/3878)** (CLOSED, 3 comments)  
   *Why it matters:* Two encoding bugs in the edit tool's `oldText` matching cause silent failures when editing code with escaped backticks or emoji. Silent failures erode user trust in tool correctness.

10. **[#3888 — `pi.setThinkingLevel()` doesn't refresh editor border in interactive mode](https://github.com/badlogic/pi-mono/issues/3888)** (CLOSED, 2 comments)  
    *Why it matters:* Extension API inconsistency—state updates via `pi.setThinkingLevel()` persist but the UI doesn't reflect changes until a manual redraw trigger, breaking the "set and forget" extension pattern.

## Key PR Progress

1. **[#4040 — fix(openai-completions): honor compat.supportsTools=false](https://github.com/badlogic/pi-mono/pull/4040)** (CLOSED)  
   *Fix:* Gates tool emission on model's `compat.supportsTools` flag, preventing tool-call crashes on OpenAI-compatible models that don't support them.

2. **[#4037 — fix: handle shift+enter in legacy terminals](https://github.com/badlogic/pi-mono/pull/4037)** (CLOSED)  
   *Fix:* Treats legacy SS3 M codes as Shift+Enter in known terminals, enabling newline insertion instead of form submission for terminal-emulator compatibility.

3. **[#3868 — refactor(coding-agent): migrate syntax highlighting to Shiki](https://github.com/badlogic/pi-mono/pull/3868)** (CLOSED)  
   *Feature:* Replaces code highlighting with Shiki, making `syntaxTheme` a first-class Pi theme property. Uses `shiki/core` with lazy language loading and cached highlighters for both terminal and HTML export.

4. **[#4025 — feat(coding-agent): support auth json env](https://github.com/badlogic/pi-mono/pull/4025)** (CLOSED)  
   *Feature:* Implements #4030—adds `PI_CODING_AGENT_AUTH_JSON` for in-memory auth, with immediate env var cleanup. Directly addresses CI/CD credential management.

5. **[#4024 — feat(coding-agent): support session dir env](https://github.com/badlogic/pi-mono/pull/4024)** (CLOSED)  
   *Feature:* Adds `PI_CODING_AGENT_SESSION_DIR` as env equivalent to `--session-dir`, with precedence: CLI flag > env > settings > default.

6. **[#3856 — feat(ai): add Cloudflare AI Gateway as a provider](https://github.com/badlogic/pi-mono/pull/3856)** (CLOSED)  
   *Feature:* Closes #3850—adds `cloudflare-ai-gateway` to KnownProvider with OpenAI/Anthropic/Workers AI routing, caching, analytics, rate limiting, and fallbacks.

7. **[#4005 — feat(ai): add Xiaomi MiMo provider](https://github.com/badlogic/pi-mono/pull/4005)** (OPEN)  
   *Feature:* Adds Xiaomi MiMo as an OpenAI-completions compatible built-in provider. Represents broadening of cloud provider support beyond Western cloud vendors.

8. **[#4007 — feat(coding-agent): add official local-LLM provider extensions](https://github.com/badlogic/pi-mono/pull/4007)** (CLOSED)  
   *Feature:* Ships four official async-factory provider extensions for llama.cpp, LM Studio, vLLM, and Ollama—each probes its engine's models. Significantly lowers barrier for local model usage.

9. **[#3998 — fix(coding-agent): redo Bun package manager node_modules handling](https://github.com/badlogic/pi-mono/pull/3998)** (CLOSED)  
   *Fix:* Reverts a faulty Bun handling change; correctly distinguishes Bun as runtime vs. package manager. Crucial for first-party tarball distro users who use Bun as runtime but npm for package management.

10. **[#4028 — fix(coding-agent): preserve .agents provenance in skill metadata](https://github.com/badlogic/pi-mono/pull/4028)** (OPEN)  
    *Fix:* Closes #3978—splits skill discovery to preserve source provenance, enabling grouped display in the UI and source-annotated headers for `.agents` directory skills.

## Feature Request Trends

- **Provider proliferation is accelerating**: This cycle alone added requests/support for Xiaomi MiMo (#4005), Mistral Medium 3.5 (#4009), Grok 3.5 (#4036), Volcano Engine Ark (#3710), and Cloudflare AI Gateway (#3856). The community is actively contributing provider integrations as fast as model providers ship.
- **Security hardening is becoming mainstream**: Multiple issues (#4035, #4030, #4018) focus on credential isolation, argument injection prevention, and restricting extension capabilities. This marks a shift from "make it work" to "make it safe" as the extension ecosystem grows.
- **Local-first workflows gaining official support**: The addition of four official local-LLM provider extensions (#4007) suggests formalizing the bring-your-own-model path that previously required manual extension authoring.
- **Session and state management stability**: Issues around duplicate session entries (#3930), session cwd recovery (#4006), and persistent theme state (#3888) indicate that as session features mature, edge cases in state serialization and UI refresh are surfacing.

## Developer Pain Points

- **`pi update` self-update fragility**: Three distinct failure modes reported this week alone (npm prefix #3942, bun #3980, general npm #3980). The update mechanism's reliance on the runtime's global path causes cascading failures across package manager ecosystems.
- **Provider removal communication gaps**: The Antigravity removal (#4022) left users with opaque error messages and no migration guidance. Breaking changes that remove providers need detection, warnings, and upgrade scripts.
- **Argument injection in core tools**: The `grep` tool RCE vector (#4018) highlights that even well-established tools need security review when LLM-controlled inputs are involved. Expect more tool-level security audits.
- **UI/UX inconsistencies across browsers and terminals**: Firefox copy button failures (#3941), low-contrast Chrome dropdowns (#3979), legacy terminal Shift+Enter handling (#4037)—cross-platform UI polish remains a recurring source of friction for a developer tool used across diverse environments.
- **Silent failures are the worst failures**: Edit tool matching bugs (#3878), session cwd mismatches (#4006), and duplicate session entries (#3930) all share a pattern—the system continues without errors but produces wrong results, eroding user trust more than explicit failures would.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-01

## Today's Highlights
The Qwen Code team shipped **v0.15.6 stable**, bringing a `FileReadCache` to short-circuit unchanged reads and a CLI fix to honor proxy settings, alongside a nightly that adds `feat(core)` caching infrastructure. The community is actively discussing the **new Agent Team experimental feature** (PR #2886) and several impactful performance regressions, including a **5-second delay on every user turn** caused by auto-memory recall (Issue #3759). A new **commit attribution and per-file AI contribution tracking** PR (#3115) is generating significant interest for compliance and transparency use cases.

---

## Releases
- **v0.15.6-nightly.20260501.8b6b0d64f** — Includes `FileReadCache` for short-circuiting repeated file reads, proxy setting fix in CLI, and other nightly improvements.
- **v0.15.6 (stable)** — Bug fixes: memory dream path correction, sub-agent display flicker prevention via visual height bounding, sticky todo panel in CLI. Also includes the `FileReadCache` and proxy honor fix from nightly.  
  [Release v0.15.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6)

---

## Hot Issues (10 selected)

1. **#3652** — *Internal error: 400 – Invalid input length range*  
   [Issue #3652](https://github.com/QwenLM/qwen-code/issues/3652)  
   **Context:** User hitting a 400 error on long conversation inputs. **Community reaction:** 8 comments, 0 upvotes — low engagement, but represents a critical user experience block for heavy conversational workflows.

2. **#3000** — *Memory Diagnostics / 内存诊断*  
   [Issue #3000](https://github.com/QwenLM/qwen-code/issues/3000)  
   **Context:** Request for V8 heap analysis, leak detection, and memory pressure checking tools. **Community reaction:** 3 comments — this is a long-standing (P3) gap in developer tooling, indicating a feature vacuum.

3. **#3738** — *Download connection failure*  
   [Issue #3738](https://github.com/QwenLM/qwen-code/issues/3738)  
   **Context:** User reports download errors in the Chinese interface. **Community reaction:** 3 comments — suggests potential regional network or proxy issues.

4. **#2251** — *VSCode extension error: Internal error, Connection error*  
   [Issue #2251](https://github.com/QwenLM/qwen-code/issues/2251)  
   **Context:** OAuth success but messages fail with `Internal error` in VSCode extension. **Community reaction:** 3 comments — closed but represents a recurring IDE integration pain point.

5. **#2394** — *No /skills in VSCode Companion*  
   [Issue #2394](https://github.com/QwenLM/qwen-code/issues/2394)  
   **Context:** User cannot use slash commands for skills in the VSCode extension. **Community reaction:** 3 comments — feature parity gap between CLI and IDE.

6. **#3772** — *DeepSeek V4 Pro API error 400: reasoning_content must be passed back*  
   [Issue #3772](https://github.com/QwenLM/qwen-code/issues/3772)  
   **Context:** Multi-turn conversation breaks with API error when thinking mode is misconfigured. **Community reaction:** 1 comment — emerging issue indicating third-party model integration friction.

7. **#1775** — *Model stuck in loop observing its own output*  
   [Issue #1775](https://github.com/QwenLM/qwen-code/issues/1775)  
   **Context:** Agent enters infinite observation loop. **Community reaction:** 1 comment — long-standing bug with low activity, but critical for autonomous agent reliability.

8. **#3730** — *Qwen code auto-stops tasks after update*  
   [Issue #3730](https://github.com/QwenLM/qwen-code/issues/3730)  
   **Context:** User reports that after update, the agent sends stop commands unprompted, interrupting long-running tasks. **Community reaction:** 1 comment — high-severity regression (P1).

9. **#3759** — *Auto-memory recall blocks every user turn for 5 seconds*  
   [Issue #3759](https://github.com/QwenLM/qwen-code/issues/3759)  
   **Context:** Auto-memory recall selector times out on every turn, adding ~5s latency. **Community reaction:** 0 comments (reported by maintainer) — this is a *core performance bug* affecting all users.

10. **#3765** — *Side queries on fast model use main model's settings*  
    [Issue #3765](https://github.com/QwenLM/qwen-code/issues/3765)  
    **Context:** Per-model settings (e.g., thinking options) not correctly isolated between main and fast models. **Community reaction:** 0 comments — important design issue for multi-model setups.

---

## Key PR Progress (10 selected)

1. **#3115** — *feat: add commit attribution with per-file AI contribution tracking*  
   [PR #3115](https://github.com/QwenLM/qwen-code/pull/3115)  
   **Why it matters:** Enables git history transparency for AI-generated code — critical for open-source compliance and enterprise audits.

2. **#2886** — *feat: add Agent Team experimental feature for parallel sub-agent coordination*  
   [PR #2886](https://github.com/QwenLM/qwen-code/pull/2886)  
   **Why it matters:** Allows lead agent to orchestrate multiple sub-agents in parallel for large tasks. Experimental but promises major speedups.

3. **#3739** — *Add background agent resume and continuation*  
   [PR #3739](https://github.com/QwenLM/qwen-code/pull/3739)  
   **Why it matters:** Adds persistence for background agents (include resume/abandon flow) and transcript-first design for fork agents.

4. **#3767** — *fix(core): log the OpenAI request actually sent on the wire*  
   [PR #3767](https://github.com/QwenLM/qwen-code/pull/3767)  
   **Why it matters:** Fixes a debugging blind spot where `--openai-logging` dropped provider-injected fields like `extra_body`.

5. **#3774** — *feat(core): enforce prior read before Edit / WriteFile mutates a file*  
   [PR #3774](https://github.com/QwenLM/qwen-code/pull/3774)  
   **Why it matters:** Prevents models from editing files they haven't read in the current session — improves safety and correctness.

6. **#3769** — *fix(core): isolate fast model side queries*  
   [PR #3769](https://github.com/QwenLM/qwen-code/pull/3769)  
   **Why it matters:** Routes auto-memory and side queries to the correct model config, fixing the bug reported in #3765.

7. **#3762** — *feat(vscode): add message edit/rewind and message metadata UI*  
   [PR #3762](https://github.com/QwenLM/qwen-code/pull/3762)  
   **Why it matters:** Brings CLI-level editing capabilities to the VSCode extension — major UX improvement.

8. **#3754** — *feat(review): expand review pipeline + qwen review CLI subcommands*  
   [PR #3754](https://github.com/QwenLM/qwen-code/pull/3754)  
   **Why it matters:** Adds 9 parallel agents (3 personas), iterative reverse audit, and CLI subcommands for code review.

9. **#3741** — *feat(cli): add MCP health pill to footer*  
   [PR #3741](https://github.com/QwenLM/qwen-code/pull/3741)  
   **Why it matters:** Surfaces MCP connection status in CLI footer — prevents silent failures when MCP servers disconnect.

10. **#3190** — *feat(cli): add /chat file commands for session management*  
    [PR #3190](https://github.com/QwenLM/qwen-code/pull/3190)  
    **Why it matters:** Allows saving, listing, resuming, and deleting named chat sessions via `/chat` commands — useful for persistent workflows.

---

## Feature Request Trends
From Issues and PRs, the most requested directions are:

- **IDE parity with CLI** — Multiple issues ask for VSCode extension to support `/skills`, slash command behavior, and editing features already available in the terminal client.
- **Memory and diagnostics** — #3000 calls for official memory profiling tools (V8 heap, leak detection).
- **Agent Team and parallel execution** — PR #2886 is the largest new feature under review, indicating strong interest in multi-agent orchestration.
- **Model configuration isolation** — #3760, #3765, #3769 all revolve around ensuring `fastModel` and main model settings (including reasoning, thinking, pricing) are correctly separated.
- **Telemetry and observability** — PR #3779 adds OTLP signal routing, suggesting growing investment in telemetry infrastructure.

---

## Developer Pain Points

1. **High latency on every user turn** — Issue #3759 shows a consistent 5-second delay from auto-memory recall timeout, affecting all users.
2. **Model configuration bleed-through** — Multiple issues (#3765, #3772) report that per-model settings (thinking mode, reasoning, pricing) are not properly isolated.
3. **Sub-agent UI flicker and focus issues** — #3763 and #3770 detail problems with ctrl+e/ctrl+f shortcuts and focus management when multiple sub-agents run in parallel.
4. **Proxy and network configuration fragility** — #3738 (download failures) and #3742 (documented proxy key not honored) suggest network setup is brittle for non-US/CN users.
5. **Automatic task interruption** — #3730 (P1 bug) reports that the agent now auto-stops tasks without user action — a significant reliability regression.
6. **Semver inconsistency in nightly builds** — #3756 flags that nightly versions are lower than stable releases, breaking expectations for pre-release version ordering.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*