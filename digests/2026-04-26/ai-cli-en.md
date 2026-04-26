# AI CLI Tools Community Digest 2026-04-26

> Generated: 2026-04-26 09:06 UTC | Tools covered: 8

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Analysis Date: 2026-04-26**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a period of rapid maturation, with seven major projects all actively shipping fixes and features while contending with a shared set of reliability and integration challenges. **Model quality degradation** and **API compatibility fragmentation** are the two most pervasive cross-cutting issues, affecting Claude Code (Opus 4.7 regression), Kimi Code (K2.6 overload), and multiple tools' DeepSeek V4 handling. Meanwhile, the ecosystem is converging on shared architectural patterns: **session isolation via git worktrees**, **per-provider concurrency management**, and **event-driven hook systems** are emerging as consensus solutions to developer workflow pain points. The competitive differentiation is increasingly defined not by model access alone, but by **how each tool handles agent lifecycle, permission models, and third-party integration reliability**—areas where no tool has yet established clear leadership.

---

## 2. Activity Comparison

| Tool | Open Issues (notable) | PRs (24h) | Release Status | Community Engagement Signal |
|------|----------------------|-----------|----------------|---------------------------|
| **Claude Code** | ~839k total; 10 hot issues tracked | 5 PRs (1 merged) | No release today | Highest raw issue volume; 725-comment thread on phone verification |
| **OpenAI Codex** | 10 hot issues tracked | 10+ PRs (multiple merged) | 2 alpha releases (v0.126.0) | Active permissions rearchitecture PR stack |
| **Gemini CLI** | 10 hot issues tracked | 10 PRs (multiple merged) | No release today | Strong PR throughput; rapid bug fixes |
| **GitHub Copilot CLI** | 10 hot issues tracked | 1 PR (open) | No release (v1.0.12 latest) | Lowest observed activity; autopilot loops dominant |
| **Kimi Code CLI** | 3 critical issues | 6 PRs (1 merged) | No release today | Smallest tracker but focused; worktree feature push |
| **OpenCode** | 10 hot issues tracked | 10 PRs (multiple merged) | v1.14.25 this week | High severity: DeepSeek reasoning bugs driving intense fix cycles |
| **Qwen Code** | 10 hot issues tracked | 10 PRs (multiple active) | v0.15.3 today | Fast release cadence; strong PR throughput |
| **Pi** | 10 hot issues tracked | 20+ PRs (multiple merged) | No release today | Highest 24h PR volume; rapid iteration on provider support |

**Key observation**: Claude Code dominates raw issue volume (1000x+ more total issues than any other tool), reflecting both its larger user base and a possible over-reliance on the issue tracker as a support channel. Qwen Code and Pi show the strongest release cadence and PR throughput.

---

## 3. Shared Feature Directions

Several feature requirements appear across **three or more** tool communities, indicating genuine developer demand:

| Requirement | Tools Affected | Specific Needs |
|------------|---------------|----------------|
| **Session isolation via git worktrees** | Kimi Code (#2073, #2076), Claude Code (#12513), Gemini CLI | Per-session file sandboxing; parallel work without branch conflicts or file corruption |
| **Session lifecycle visibility** | OpenCode (#23549), Kimi Code (#2075), Qwen Code (#3471, #3488) | Active/idle indicators for sessions; subagent runtime state; project-level "running" cues |
| **MCP/extension ecosystem maturity** | Qwen Code (#3277, #2466), Copilot CLI (#2528, #2892), Claude Code (plugin hooks), Gemini CLI (#25989) | Per-repo MCP config; multi-node connections; connection stability; stdio transport reliability |
| **Cost & billing transparency** | Qwen Code (#3585), OpenCode, Claude Code (#45572), OpenAI Codex (#19585) | Per-model pricing in settings; session cost tracking; rate limit accounting; quota fairness |
| **Agent checkpoint/rewind** | OpenAI Codex (#11626 — 94 votes), Gemini CLI (#22323), Claude Code | Single command to restore both conversation and file state; subagent recovery |
| **Model quality degradation monitoring** | Claude Code (#53324, #53459), Kimi Code (#2077), OpenAI Codex (#19585, #19215) | Trust-eroding pattern: strong launch, silent degradation; capacity to detect and report regression |

**Emerging consensus**: The "yolo mode" concept is fragmenting. Claude Code, Gemini CLI, and Kimi Code all have auto-approval modes with inconsistent semantics—users want a clear, auditable contract for autonomous operation.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code | Pi |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----------|-----|
| **Primary model strategy** | Exclusive (Claude) | Exclusive (GPT-5.5) | Exclusive (Gemini) | Multi-model (Copilot/Claude) | Exclusive (Moonshot K2.x) | Multi-provider | Hybrid (Qwen + third-party) | Multi-provider |
| **Target user** | Power users, automation-heavy | Pro developers, agent workflows | Google ecosystem developers | GitHub ecosystem, enterprise | Chinese dev market, Allegretto subscribers | Provider-agnostic developers | Qwen ecosystem + OSS community | Hackers, tinkerers, multi-model |
| **Architectural approach** | Plugin-based, TUI-first | Rust CLI, profile-backed permissions | Event-driven hooks, subagents | GitHub-integrated, ACP protocol | Web + CLI, worktree isolation | Desktop + TUI, SDK-based | VS Code + CLI, per-provider | TUI-first, extension API |
| **Key technical strength** | Rich plugin ecosystem | Permissions rearchitecture | Subagent orchestration | GitHub/Azure integration | Git worktree sessions | Multi-provider depth | Fast release cadence | Provider breadth (20+ PRs) |
| **Key vulnerability** | Model degradation reports; issue tracker noise | GPT-5.5 quota/context gaps | Yolo mode semantic issues | Low evolution velocity; autopilot loops | K2.6 reliability crisis | DeepSeek reasoning bugs | Third-party model degradation | Regression sensitivity |
| **Open source** | Proprietary (symbolic PR open) | Proprietary | Proprietary | Proprietary | Proprietary | Open source | Open source | Open source |

**Insight**: The ecosystem is splitting into two tiers. **Claude Code, Codex, and Gemini CLI** are the "big three," driven by major AI labs, with larger user bases but slower iteration cycles and more institutional overhead. **Qwen Code, Pi, and OpenCode** are the open-source fast-movers, shipping more frequently and responding faster to community feedback. **Kimi Code** is an interesting mid-point: smaller community but ambitious architectural moves (worktrees, RalphFlow). **Copilot CLI** appears to be the most stagnant, with minimal PR activity and critical autopilot bugs unaddressed.

---

## 5. Community Momentum & Maturity

**Most active communities:**
- **Pi** — Highest PR throughput (20+ in 24h), rapid provider integration, strong contributor diversity (Together AI, CrofAI, Ark/Volcano Engine PRs). The open-source "glue" tool is benefiting from ecosystem fragmentation.
- **Qwen Code** — v0.15.3 shipped today, strong PR pipeline (10 PRs tracked), fast response to critical bugs (reasoning_content hotfix PR #3637). Shows disciplined release engineering.

**Most mature/highest-velocity:**
- **Claude Code** — Largest ecosystem (840k+ issues), richest plugin/extension infrastructure, but the sheer volume is becoming noise. The community is frustrated but engaged. Model degradation concerns are threatening trust.
- **OpenAI Codex** — Systematic rearchitecture (permissions, profiles, JWT auth) suggests deep investment in architectural quality, even if user-facing bugs persist. The Pro quota issue (#19585) is a developing reputational risk.

**Tools needing attention:**
- **GitHub Copilot CLI** — Only 1 PR in 24h, no releases, critical autopilot loops unpatched. If this trajectory continues, developers will migrate to alternatives.
- **Kimi Code** — Critical model failures (#2077) with no public response yet. The worktree innovation is promising but the foundation is shaky.

**Maturity assessment**: The ecosystem is in **late adolescence**—tools are powerful but brittle. No tool has achieved "it just works" reliability. The leading indicators (release cadence, PR velocity, critical bug response time) suggest open-source tools (Pi, Qwen Code) are currently best positioned to capture escaping users from proprietary tools experiencing trust erosion.

---

## 6. Trend Signals

1. **"Reasoning_content" is the new "200 OK"** — DeepSeek V4's thinking-mode API has broken consistency across the ecosystem (OpenCode 4+ issues, Qwen Code 2+ issues, Pi 2+ issues). The industry standard for reasoning token serialization is not yet settled, and every tool is paying the cost. **Signal**: API-level standardization for thinking/chain-of-thought tokens is urgently needed.

2. **Model degradation is eroding trust more than bugs** — Claude Code (Opus 4.7), OpenAI Codex (GPT-5.5 quota), and Kimi Code (K2.6 overload) all face "model got worse" narratives. Whether real or perceived, the pattern of strong launch → silent degradation → community backlash is becoming predictable. **Signal**: Developers will increasingly demand model version pinning, diff-based regression detection, and transparent release notes.

3. **Yolo/auto-approve semantics are fragmenting dangerously** — Each tool defines "autonomous mode" differently: Claude Code has permission bypass flags, Gemini CLI has `--yolo` with known gaps, Kimi Code conflates auto-approve with non-interactive. The same concept has different failure modes in each tool. **Signal**: The community needs a shared taxonomy for agent autonomy levels (e.g., "observe only" vs. "auto-approve known tools" vs. "fully autonomous").

4. **Git worktrees as the new standard for session isolation** — Kimi Code and Claude Code both working on worktree-based isolation, and OpenCode's SSH remote connections (#7790) address similar isolation needs. Filesystem-level sandboxing is replacing conversation-history-only session management. **Signal**: Tools that don't support file-level session isolation within 3-6 months will be seen as "not production-grade."

5. **MCP is becoming the plug-in system by default** — Despite implementation inconsistencies (connection limits, transport stability, per-repo config gaps), MCP adoption is accelerating. Copilot CLI, Claude Code, Gemini CLI, and Qwen Code all have active MCP issues. **Signal**: The Model Context Protocol is on track to be the dominant integration standard, but each tool's implementation quality varies significantly.

6. **Cost transparency is the new dealbreaker** — From Codex's double-counting allegations to Qwen Code's billing tracking feature (#3585) to Claude Code's Max/API billing confusion, developers want to understand where their tokens go. **Signal**: Tools that implement transparent per-session accounting will have a competitive advantage; those that opaque about billing will face backlash.

7. **Windows and SSH users are second-class citizens** — Across every tool, Windows-specific regressions (Kimi Code MIME types, Qwen Code system folder scanning, Claude Code TUI scroll issues) and SSH terminal problems (Gemini CLI scrambled text) persist. **Signal**: Cross-platform reliability is still a differentiator; the first tool to deliver "works identically on Windows/macOS/Linux/SSH" will capture the enterprise remote/cloudtop developer market.

---

*Analysis generated from GitHub community data as of 2026-04-26. Issue counts reflect hot issues tracked, not total repository issue counts.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-04-26 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests garnered the most community discussion and attention:

### #514 — Document Typography Skill *(Open)*
**Functionality:** Prevents common AI-generated document typography issues: orphan word wrap, widow paragraphs (stranded section headers), and numbering misalignment.
**Discussion Highlights:** The proposal resonated broadly—typographic quality is a universal pain point in Claude-generated documents. Community feedback centered on edge cases for multi-column layouts and CJK text support.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/514)

### #83 — Skill Quality Analyzer + Skill Security Analyzer *(Open)*
**Functionality:** Two meta-skills for evaluating other Skills across five quality dimensions (structure, documentation, examples, resources, and more) plus security audit capabilities.
**Discussion Highlights:** Significant interest in the meta-skill concept—community members debated evaluation criteria weighting and whether security analysis should remain a separate skill or merge into quality.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/83)

### #210 — Frontend-Design Skill Clarity & Actionability *(Open)*
**Functionality:** Major revision of the frontend-design skill to ensure Claude can follow every instruction within a single conversation, improving specificity and behavioral steering.
**Discussion Highlights:** The PR sparked a broader conversation about skill design principles—what makes an instruction "actionable" for Claude versus merely informative for human readers.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/210)

### #486 — OpenDocument (ODT) Skill *(Open)*
**Functionality:** Full OpenDocument format support: create, fill, read, and convert `.odt`/`.ods` files; parse ODT to HTML; template filling for LibreOffice/ISO standard workflows.
**Discussion Highlights:** Demand driven by enterprise users requiring ODF compliance. Questions focused on format fidelity and table/cell merge handling.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/486)

### #539 / #541 / #538 — Fix Series (Document Skills) *(Open)*
**Functionality:** Three tightly-scoped fixes from the same contributor: YAML parsing validation for skill-creator, DOCX tracked change ID collision prevention with bookmarks, and PDF case-sensitive file reference corrections.
**Discussion Highlights:** The DOCX fix (#541) received particular attention for diagnosing a root cause (shared `w:id` namespace in OOXML) that had caused recurring document corruption.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/539) / [PR #541](https://github.com/anthropics/skills/pull/541) / [PR #538](https://github.com/anthropics/skills/pull/538)

### #723 — Testing Patterns Skill *(Open)*
**Functionality:** Comprehensive testing stack coverage: Testing Trophy philosophy, AAA pattern, unit testing best practices, React Testing Library queries, mocking strategies, E2E with Playwright, and CI integration patterns.
**Discussion Highlights:** Strong demand from teams adopting Claude for code generation—testing was identified as a critical gap in the official skills collection.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/723)

### #568 — ServiceNow Platform Skill *(Open)*
**Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.
**Discussion Highlights:** The most comprehensive enterprise-platform skill proposed. Community discussion focused on scope management—whether a single skill can effectively cover all ServiceNow modules.
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/568)

---

## 2. Community Demand Trends

Analysis of the top Issues reveals five concentrated demand directions:

| Demand Theme | Signal | Key Issue |
|---|---|---|
| **Org-Wide Skill Sharing & Management** | Highest-voted feature request (#228, 👍5) — users want shared skill libraries and direct sharing links instead of manual `.skill` file distribution | [Issue #228](https://github.com/anthropics/skills/issues/228) |
| **Skills Reliability & Bug Fixes** | Skills disappearing (#62), 404 errors (#61), upload failures (#406), version deletion errors (#403) — foundational platform stability is the top pain point | [Issue #62](https://github.com/anthropics/skills/issues/62) |
| **Evaluation & Testing Infrastructure** | `run_eval.py` zero-trigger-rate bug (#556, 👍6) — the community is actively trying to test skill effectiveness but hitting tooling gaps | [Issue #556](https://github.com/anthropics/skills/issues/556) |
| **Duplicate Skill Ecosystem** | Document and example plugins installing identical content (#189, 👍7) — namespace confusion and wasted context window | [Issue #189](https://github.com/anthropics/skills/issues/189) |
| **Trust & Security Boundaries** | Community skills distributed under `anthropic/` namespace (#492) — impersonation risk and permission grants | [Issue #492](https://github.com/anthropics/skills/issues/492) |

**Latent Demand Signals:** MCP exposure for Skills ([#16](https://github.com/anthropics/skills/issues/16)), Bedrock compatibility ([#29](https://github.com/anthropics/skills/issues/29)), and agent governance safety patterns ([#412](https://github.com/anthropics/skills/issues/412)).

---

## 3. High-Potential Pending Skills

These active PRs show strong community engagement and are likely to merge soon:

| PR | Skill | Value Proposition | Status Signal |
|---|---|---|---|
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills a critical gap — no official testing skill exists | Updated 2026-04-21, active iteration |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Unblocks community contributions; solves Issue #452 (community health gap) | Updated 2026-03-19, low controversy |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory (macOS AppleScript)** | Native automation alternative to screenshot-based computer use | Updated 2026-04-02 |
| [#997](https://github.com/anthropics/skills/pull/997) | **xiao (Xiaomi Vacuum)** | Novel hardware-control skill using CLI-triggered subprocess | Freshly opened 2026-04-21 |
| [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | Highest enterprise value; broadest platform coverage | Updated 2026-04-23 |
| [#335](https://github.com/anthropics/skills/pull/335) | **masonry (Image/Video Gen)** | Multi-modal generation via CLI | Updated 2026-03-14 |
| [#147](https://github.com/anthropics/skills/pull/147) | **codebase-inventory-audit** | Systematic orphan code/documentation cleanup | Updated 2026-02-04 |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **foundational reliability and infrastructure**—fixing buggy tooling (eval harness, upload, deletion), establishing trust boundaries, and enabling organizational sharing—rather than expanding skill surface area, indicating the ecosystem has outgrown its experimental phase and now requires production-grade platform maturity.

---

# Claude Code Community Digest
**2026-04-26**

---

## Today's Highlights

No new releases landed in the last 24 hours, but the community remains highly engaged around a persistent phone verification bug (#34229) that has accumulated 725 comments and nearly 800 upvotes. Several new performance and quality regressions have been reported this week, including a concerning Opus 4.7 degradation pattern that mirrors the 4.6 launch-week trajectory. A critical security finding was also filed today involving unescaped control characters in hook stdin that can silently bypass security hooks.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#34229 — Phone verification bug](https://github.com/anthropics/claude-code/issues/34229)** — 725 comments, 799 👍. The most active issue by far, this `[invalid]`-tagged bug report about phone verification has drawn massive community attention. Despite the label, users continue to pile on with related verification frustration.

2. **[#13480 — Oversized image breaks conversation permanently](https://github.com/anthropics/claude-code/issues/13480)** — 65 comments, 64 👍. A long-standing bug (filed Dec 2025) that still has no fix: uploading an oversized image corrupts the session with no recovery path short of starting a new chat. Core stability issue.

3. **[#36168 — Bypass/dangerously skip permissions broken in v2.1.77+](https://github.com/anthropics/claude-code/issues/36168)** — 47 comments, 57 👍. A critical permissions workflow regression affecting macOS and VSCode users. The `bypass` flag that power users relied on for automation is broken in all versions newer than 2.1.77.

4. **[#5674 — Persistent ECONNRESET errors on macOS](https://github.com/anthropics/claude-code/issues/5674)** — 31 comments, 23 👍. Network connectivity issues specific to macOS that have been open since August 2025. Users report it's a macOS-only phenomenon; Windows and Linux on the same network work fine.

5. **[#47841 — Stream idle timeout on Claude Code Web](https://github.com/anthropics/claude-code/issues/47841)** — 12 comments, 13 👍. A newer issue receiving duplicate reports (#53390) where the web platform returns partial responses with "Stream idle timeout" errors, suggesting a server-side timeout configuration issue.

6. **[#53324 — Claude model performance regression](https://github.com/anthropics/claude-code/issues/53324)** — 6 comments, 1 👍. Filed yesterday, this user reports the "same pattern as before" — instruction following degradation, poor memory recall, requiring 5-7 iterations per task. Early signal of a wider trend.

7. **[#53459 — Opus 4.7 quality regression](https://github.com/anthropics/claude-code/issues/53459)** — 2 comments, 2 👍. Filed today. Explicitly draws parallels to the 4.6 degradation pattern: strong launch week, then silent degradation within days. The community is watching this closely.

8. **[#12513 — Disable automatic worktree creation](https://github.com/anthropics/claude-code/issues/12513)** — 29 comments, 57 👍. Solo developers are frustrated by the forced worktree creation behavior in the standalone macOS interface. This has been open since November 2025 with high community demand.

9. **[#33464 — Native token compression for CLAUDE.md](https://github.com/anthropics/claude-code/issues/33464)** — 20 comments. Users want built-in compression for CLAUDE.md and instruction files that consume context space on every session start. Hits a core pain point for heavy configuration users.

10. **[#53463 — Hook stdin contains unescaped control characters](https://github.com/anthropics/claude-code/issues/53463)** — 2 comments. Filed today. A **security-critical** finding: unescaped U+0000–U+001F control characters in JSON string fields passed to hooks causes `jq` parse errors, leading to **silent bypass of security hooks**. This should be prioritized.

---

## Key PR Progress

1. **[#31945 — docs: Add CLAUDE.md repository guide for AI assistants](https://github.com/anthropics/claude-code/pull/31945)** — CLOSED. Adds a comprehensive CLAUDE.md guide covering codebase structure, plugin architecture, and development conventions. Though closed, this represents a pattern for repository onboarding.

2. **[#41447 — feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)** — OPEN. A symbolic PR that would open-source the entire codebase. Closes multiple long-standing community requests (#59, #456, #2846, #22002, #41434). Unlikely to merge but reflects community desire for transparency.

3. **[#53204 — feat: add sql_injection and hardcoded_secret patterns to security-guidance](https://github.com/anthropics/claude-code/pull/53204)** — OPEN. Adds two commonly requested security detection patterns to the `security-guidance` plugin, expanding coverage from 9 to 11 patterns. A practical incremental improvement.

4. **[#53472 — Chrome extension never initiates native messaging on Windows](https://github.com/anthropics/claude-code/issues/53472)** — CLOSED (as issue, but relevant). The fix path is unclear. The extension connects to the cloud bridge but never establishes native messaging to the local CLI.

5. **[#53354 — Add files via upload](https://github.com/anthropics/claude-code/pull/53354)** — OPEN. A minor scaffold upload. Low signal but indicates external contribution activity.

---

## Feature Request Trends

- **Context compression for CLAUDE.md and instructions** — Multiple requests (#33464, #14882) for token-efficient loading of configuration files. Users want progressive disclosure where only metadata loads initially, with full content fetched on demand. This is the #1 structural request.

- **Persistent permission management** — Users want managed-settings.json to honor permission selections across sessions (#30953). Currently, every new session requires re-approving MCP tools, bash execution, and file access.

- **Plugin lifecycle hooks** — Community requesting install/update/uninstall events for plugins (#48986) to enable migration checks and upgrade workflows.

- **Open source the client** — PR #41447 and associated issues show ongoing demand for transparency. The community wants to self-host, audit, and contribute.

- **Security hook improvements** — Beyond the control character bug (#53463), users want richer hook APIs, including stdin with properly escaped JSON and better error propagation.

---

## Developer Pain Points

1. **Model quality degradation** — Two separate reports this week (#53324, #53459) describing a "same pattern as before" regression. Opus 4.7 followings the 4.6 trajectory: launch strong, degrade silently within a week. This is eroding trust in model releases.

2. **TUI scroll instability** — Multiple issues (#36816, #52924, #52436, #36621, #53092) about terminal rendering problems: scroll jumping to top during streaming, duplicated content, gap artifacts in scrollback. Heavily concentrated on Windows Terminal + macOS iTerm2.

3. **Stream timeouts on web platform** — Cluster of issues (#47841, #53390) about "Stream idle timeout - partial response received" errors. Users report consistency issues between CLI and web platforms.

4. **Billing classification confusion** — Issue #45572 reports that CLI usage on Max subscriptions is incorrectly billed as API usage since April 4. Financial impact makes this high-priority.

5. **Chrome extension connectivity** — Multiple issues (#53472, #46658) where the "Claude in Chrome" MCP tools return "Browser extension is not connected" despite correct flags and remote debugging enabled. Platform fragmentation between macOS, Windows, and Linux.

6. **Temporary file cleanup** — Issue #17609 (still open) about `tmpclaude-*-cwd` files not being cleaned up. Minor individually, but accumulates over time for active users.

---

*Generated from GitHub data for `anthropics/claude-code` as of 2026-04-26*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-26

## Today's Highlights
Two alpha CLI releases (v0.126.0-alpha.2/3) landed this week. GPT-5.5 context and rate-limit complaints dominate the issue tracker, with users reporting that Pro weekly quotas deplete unusually fast on the new model. Meanwhile, a major permissions rearchitecture is progressing through the PR queue, moving runtime enforcement to profile-backed models to fix long-standing sandbox projection bugs.

---

## Releases
**Two Rust-based CLI alpha releases published in the last 24 hours:**
- [rust-v0.126.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.2)  
- [rust-v0.126.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.3)  

No changelog details were included in the release tags; these appear to be early internal testing builds.

---

## Hot Issues (Top 10 by Community Attention)

### 1. [11981](https://github.com/openai/codex/issues/11981) — Codex App 100% CPU even with one agent running
**Status:** OPEN · 44 comments · 11 👍  
A two-month-old issue about sustained CPU saturation on macOS persists. Users report fans spinning up and battery drain even when no agent is actively generating. This remains the most-commented open bug.

### 2. [19464](https://github.com/openai/codex/issues/19464) — Support 1M token context for GPT-5.5 in Codex
**Status:** OPEN · 35 comments · 39 👍  
Users are unhappy that GPT-5.5 is capped at 400K in Codex when the API supports 1M. This is the second-hottest request this week, reflecting frustration that the app lags behind the API offering.

### 3. [16088](https://github.com/openai/codex/issues/16088) — Empty .codex file left behind when starting thread in project without .codex
**Status:** OPEN · 29 comments · 69 👍  
A regression affecting WSL users. Starting a thread in a zero-config project creates an empty `.codex` artifact that then causes confusion and cascading issues. High community sympathy (69 reactions).

### 4. [11626](https://github.com/openai/codex/issues/11626) — CLI: Add `/rewind` checkpoint that restores both chat and code edits
**Status:** OPEN · 13 comments · 94 👍  
The most-voted feature request this cycle (94 👍). Users want a single command that rolls back both conversation state *and* workspace file changes to a checkpoint, instead of having to manually undo edits after a `/rewind`.

### 5. [18960](https://github.com/openai/codex/issues/18960) — Frequent WebSocket reconnect loop in Codex App
**Status:** OPEN · 12 comments · 5 👍  
Streaming failures caused by server-side WebSocket closures before response completion. Still affecting Pro users on macOS as of this week, making long sessions unreliable.

### 6. [19585](https://github.com/openai/codex/issues/19585) — Pro weekly usage depletes unusually fast on GPT-5.5
**Status:** OPEN · 9 comments · 0 👍  
New report (yesterday). Users on the $200 Pro plan claim the weekly limit drains ~2x faster than expected when using 5.5, possibly exacerbated by unstable context compaction. This is a developing concern.

### 7. [19215](https://github.com/openai/codex/issues/19215) — Business tier hitting rate limits very early on GPT-5.5
**Status:** OPEN · 9 comments · 1 👍  
Business subscribers are hitting the GPT-5.5 limit after only a handful of turns, suggesting the per-model quota for 5.5 may be misconfigured for higher-tier plans.

### 8. [15046](https://github.com/openai/codex/issues/15046) — Remote compaction fails with stream disconnected before completion
**Status:** OPEN · 7 comments · 20 👍  
Recurring failure when Codex tries to compact context remotely. The error originates from `chatgpt.com/backend-api/codex/responses/compact`, making this an infrastructure-level reliability issue.

### 9. [17318](https://github.com/openai/codex/issues/17318) — Can't change model and reasoning efforts sometimes
**Status:** OPEN · 8 comments · 16 👍  
UI bug: model selector and reasoning effort dropdowns intermittently become non-interactive, forcing users to restart the app. Occurs on both macOS and Windows.

### 10. [19300](https://github.com/openai/codex/issues/19300) — Remote SSH Desktop masks `model_not_found` as "Reconnecting"
**Status:** OPEN · 7 comments · 5 👍  
Remote SSH users see a misleading "Reconnecting..." spinner when the underlying error is actually `model_not_found` from a stale app-server process. Poor error UX is the core complaint.

---

## Key PR Progress (Top 10)

### Permissions Rearchitecture Stack
A multi-PR effort by **bolinfest** is overhauling how Codex handles sandbox permissions:

- **[#19393](https://github.com/openai/codex/pull/19393)** — Migrates approval and sandbox consumers to `PermissionProfile`, preventing the loss of `Disabled` vs `External` semantics.  
- **[#19394](https://github.com/openai/codex/pull/19394)** — Removes legacy `SandboxPolicy` round-trips that could drop split-filesystem rules.  
- **[#19395](https://github.com/openai/codex/pull/19395)** — Wires profile-backed permissions into app UI surfaces, replacing the legacy sandbox projection.  
- **[#19606](https://github.com/openai/codex/pull/19606)** — Makes runtime config itself profile-backed (supersedes a prior PR lost in merge chaos).  
- **[#19392](https://github.com/openai/codex/pull/19392)** — Derives compatibility policies from profiles to avoid parallel state drift.

### Agent Identity & Auth
- **[#19650](https://github.com/openai/codex/pull/19650)** (feat) — Adds JWT verification for agent identity tokens, pulling JWKS from the ChatGPC backend.  
- **[#19635](https://github.com/openai/codex/pull/19635)** (fix) — Decodes unsigned agent identity JWTs from web UI format and registers through the AuthAPI internal gateway.

### CLI & TUI
- **[#19058](https://github.com/openai/codex/pull/19058)** (feat) — Adds `/auto-review-denials` retry flow, letting users select a recent auto-deny and explicitly approve it without re-typing intent.  
- **[#19591](https://github.com/openai/codex/pull/19591)** (fix) — Fixes a filtered thread-list resume regression introduced by a recent `thread/list` scan change that made the TUI picker slow or broken.  
- **[#19631](https://github.com/openai/codex/pull/19631)** (feat) — Colors the TUI status line from the active theme, making visual customization more noticeable.

### MCP & Tooling
- **[#19537](https://github.com/openai/codex/pull/19537)** (fix) — Fixes plugin MCP approval policy by storing tool preferences through the owning plugin config, fixing "Always allow" writes that were previously ignored.

---

## Feature Request Trends
1. **Increased GPT-5.5 context window** — The most upvoted request (39 👍 on #19464), asking for parity with the API’s 1M token limit.
2. **Checkpoint / rewind for both conversation and code edits** — #11626 at 94 👍; users want a single atomic restore that undoes both chat history and workspace file changes.
3. **MCP resource subscriptions** — Multiple requests (#16159, #17543, #18056) for MCP `resources/subscribe`, `notifications/message` forwarding to the model, and custom notification injection. The community is actively building MCP server ecosystems and wants richer client-side support.
4. **Rate limit transparency and fairness** — Across 4+ open issues, users want per-model accounting, visible quotas, and fixes for what appears to be double-counting on GPT-5.5.

---

## Developer Pain Points
- **GPT-5.5 quota depletion** is the dominant frustration this week. Both Pro and Business tier users report hitting limits far earlier than expected, with suspicion falling on unstable context compaction consuming excessive tokens (#19585, #19215, #18653).
- **Context compaction reliability** remains poor. Remote compaction frequently fails with "stream disconnected" errors (#15046, #17392), and unstable compaction appears to worsen token usage (#19585).
- **Session resume fragility** is a recurring theme: VS Code extension fails to load histories (#19137, #19478), CLI resume picker slowed from 2s to 60s (#19483), and threads can be poisoned by inline base64 images (#18629).
- **Misleading error UX** confuses users: "Reconnecting" for `model_not_found` errors (#19300), and permission UI showing "Full Access" when runtime is restricted (#19356).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-26

## Today's Highlights

No new releases hit today, but the community is buzzing with breaking issues around browser agent tool approval in `yolo` mode and subagent failure masking. Several high-impact PRs landed in the last 24 hours, including an MCP hyphen handling fix and an event-driven hook system refactor. Over a dozen long-running maintainer-only issues received updates on memory routing, AST-aware codebase mapping, and subagent recovery behavior.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[Browser agent requires constant approval in yolo mode](https://github.com/google-gemini/gemini-cli/issues/25872)** — #25872 (5 comments)  
   A user reports that the browser agent still prompts for approval despite running in `--yolo` with `sessionMode: "existing"`. The core expectation violation here undermines trust in the yolo mode contract. No activity from maintainers yet.

2. **[Subagent reports GOAL success after MAX_TURNS interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** — #22323 (4 comments, 👍2)  
   A `codebase_investigator` subagent that hits its turn limit still reports `status: "success"` with `Termination Reason: "GOAL"`. This masks real failures and could cause cascading downstream issues in multi-agent workflows. Marked P1.

3. **[Gemini keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)** — #24916 (3 comments)  
   The "allow for all future sessions" instruction sometimes doesn't persist. This is a critical UX distraction for users running long sessions.

4. **[Quota not resetting](https://github.com/google-gemini/gemini-cli/issues/25997)** — #25997 (2 comments)  
   User reports quota stuck above 30% and preventing work. Closed as need-triage, but indicative of broader billing/quota frustration.

5. **[Shell command hangs on "Awaiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** — #25166 (2 comments, 👍3)  
   Simple shell commands (e.g., `ls`, `git status`) leave the CLI stuck showing "Waiting input" after completion. High community engagement.

6. **[Model creates temp scripts in random directories](https://github.com/google-gemini/gemini-cli/issues/23571)** — #23571 (2 comments)  
   When restricted to shell execution, the model scatters edit scripts across the workspace. Makes clean commits and workspace hygiene painful.

7. **[Browser Agent ignores settings.json maxTurns override](https://github.com/google-gemini/gemini-cli/issues/22267)** — #22267 (2 comments)  
   Despite correct `AgentRegistry` merging, the browser agent completely bypasses `settings.json` overrides. Long-standing bug with no fix yet.

8. **[Thick black border on prompt bar](https://github.com/google-gemini/gemini-cli/issues/24915)** — #24915 (1 comment)  
   Visual regression where a thick black border appears around the input prompt bar. Minor but frequently cited in UI feedback.

9. **[Scrambled text over SSH](https://github.com/google-gemini/gemini-cli/issues/24202)** — #24202 (1 comment)  
   Windows → gLinux SSH session renders scrambled terminal text. Blocking for remote devs.

10. **[Subagents lack awareness of active approval mode](https://github.com/google-gemini/gemini-cli/issues/23582)** — #23582 (1 comment, 👍1)  
    Subagents don't know if they're in Plan Mode or Auto-Edit Mode, leading to tool calls that get rejected by the Policy Engine. Architectural gap.

## Key PR Progress

1. **[feat: bypass browser auth in yolo mode for headless envs](https://github.com/google-gemini/gemini-cli/pull/25999)** — #25999  
   Adds a conditional bypass for browser-less environments (Termux, remote servers). Directly addresses #25872's root cause.

2. **[fix(mcp): expand env vars in stdio args](https://github.com/google-gemini/gemini-cli/pull/25963)** — #25963  
   Expands `${VARIABLE}` placeholders in MCP server args before spawning child processes. Fixes Discord token injection in Docker MCP bridges.

3. **[feat(core): implement tool repair and continuation auto-recovery](https://github.com/google-gemini/gemini-cli/pull/25959)** — #25959  
   Fuzzy-matches misspelled tool names from the model, and auto-recovers legacy agent sessions. Reliability boost for long-running agents.

4. **[feat(cli): implement event-driven hook system messages](https://github.com/google-gemini/gemini-cli/pull/25957)** — #25957  
   Refactors hook messages to use `CoreEventEmitter._emitOrQueue` so they survive UI subscription races. Fixes #25861.

5. **[fix(core): record response's modelVersion in session transcript](https://github.com/google-gemini/gemini-cli/pull/25633)** — #25633  
   Captures `chunk.modelVersion` from the server instead of the pre-request alias. Fixes telemetry hydration when A/B routing is active.

6. **[fix(mcp): handle hyphenated server names in tool dispatch](https://github.com/google-gemini/gemini-cli/pull/25989)** — #25989  
   Models emit `mcp_hyphen_server` but tools register as `mcp_hyphen-server`. Normalizes both sides. Closes #25952.

7. **[feat(tools): versioned pre-write backups with agent-driven restore](https://github.com/google-gemini/gemini-cli/pull/25947)** — #25947  
   Adds a transactional file backup layer. If a write_file corrupts a file, the agent can revert. Mitigates destructive modification loops.

8. **[fix: pass session UUID to deleteSession](https://github.com/google-gemini/gemini-cli/pull/25067)** — #25067  
   Orphaned `tool-outputs/session-*` directories no longer accumulate after manual session deletion. Works even if the session JSONL is corrupted.

9. **[fix: prevent restart loop on initial IDE trust mismatch](https://github.com/google-gemini/gemini-cli/pull/25163)** — #25163 (CLOSED)  
   Stops the CLI from infinitely restarting when workspace trust differs between IDE and local settings. Closed as P1 fix.

10. **[refactor(cli): migrate core tools to native ToolDisplay property](https://github.com/google-gemini/gemini-cli/pull/25186)** — #25186 (CLOSED)  
    Moves display control from the `returnDisplay` adapter to a native `ToolDisplay` property on each tool. Improves rendering predictability.

## Feature Request Trends

- **AST-aware codebase understanding** — Multiple issues (#22745, #22746) call for Abstract Syntax Tree awareness to improve method-level reads, codebase mapping, and search. The goal is fewer turns and less noise vs. line-based reads.
- **Memory routing (global vs. project)** — Issue #22819 tracks a desire for the memory subagent to store preferences in `~/.gemini/` (global) vs. `.gemini/` (project) automatically.
- **Proactive memory writes** — Users want the agent to autonomously save preferences and corrections without manual prompting (#22809).
- **Behavioral evaluations at component level** — Issue #24353 proposes expanding the 76 existing behavioral evals with component-level tests for subagent rejections and recovery paths.
- **Update internal models to 3.1 flash lite** — Multiple contributors (#23823) request upgrading internal utility models to the latest flash lite tier.

## Developer Pain Points

1. **Yolo mode is not actually yolo** — The browser agent (#25872) and permission persistence (#24916) both undermine the trust that `--yolo` should provide. Developers expect zero interruption but get constant approval prompts.

2. **Agent failures are silently masked** — Subagents reporting `GOAL` success after hitting `MAX_TURNS` (#22323) erodes confidence in multi-agent pipelines. The "everything is fine" response hides real bugs.

3. **Shell command execution is flaky** — Commands that finish successfully still leave the CLI waiting for input (#25166). This is a core interaction blocker.

4. **Configuration overrides are ignored** — The browser agent ignores `settings.json` overrides (#22267) and permission persistence doesn't stick (#24916). Developers expect configuration to be authoritative.

5. **Workspace pollution from temp files** — The model scattering edit scripts and temp files in random directories (#23571) makes git hygiene painful and is a recurring complaint.

6. **SSH / remote rendering broken** — Scrambled text over SSH (#24202) blocks teams that develop on cloudtop or headless environments. A dedicated SSH detection helper (#24546) is being discussed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-26

## 1. Today's Highlights
A cluster of **autopilot infinite loop bugs** dominates the issue tracker this week, with three separate reports (including one from today) describing premium request drain and no graceful recovery. **Model entitlement mismatches** continue to frustrate Pro+ subscribers who cannot access Claude models in Copilot CLI despite having them in VS Code. Meanwhile, the community is pushing hard for **per-repository MCP configuration** and a fix for **MCP transport instability** in sub-agent workflows.

## 2. Releases
No new releases in the last 24 hours. The latest version remains **GitHub Copilot CLI 1.0.12** (as referenced in issue #2393). No patch notes or RC tags to report.

## 3. Hot Issues (10 Noteworthy)

1. **#2393 – Model entitlement mismatch in CLI** [OPEN]  
   *[area:enterprise, area:models]* — User with a paid subscription can use Claude models in VS Code and GitHub.com but sees them only under “Upgrade” in CLI. Suggests a fundamental auth/entitlement check bug between CLI and the rest of the Copilot ecosystem.  
   👤 Author: LiShiPeng-666 | 👍 0 | Comments: 10  
   🔗 [Issue #2393](https://github.com/github/copilot-cli/issues/2393)

2. **#2881 – Autopilot infinite loop draining premium requests** [OPEN]  
   *[area:agents]* — After enabling autopilot, the assistant loops printing `● Continuing autonomously (1 premium request)` without progress. Only manual cancel stops it. Confirmed duplication of #2374.  
   👤 Author: mohamed-ammara | 👍 0 | Comments: 1  
   🔗 [Issue #2881](https://github.com/github/copilot-cli/issues/2881)

3. **#2374 – Autopilot enters infinite loop after plan approval** [OPEN]  
   *[area:agents]* — Original loop report: agent creates a plan, user approves, then it loops without actionable output. Mentions no self-interrupt mechanism.  
   👤 Author: Jorge-Torselli | 👍 0 | Comments: 6  
   🔗 [Issue #2374](https://github.com/github/copilot-cli/issues/2374)

4. **#2969 – Autopilot loop on externally blocked task** [OPEN]  
   *[area:agents]* — Agent states it cannot proceed due to unmet prerequisites, yet autopilot restarts the task indefinitely, burning quota. No exit condition for blocked state.  
   👤 Author: RomainROCH | 👍 0 | Comments: 1  
   🔗 [Issue #2969](https://github.com/github/copilot-cli/issues/2969)

5. **#2528 – Per-repository MCP server configuration** [OPEN]  
   *[area:mcp]* — Feature request to support `.github/mcp.json` for repo-scoped MCP servers, analogous to existing per-repo LSP and custom instructions configs. Highly upvoted (👍 5).  
   👤 Author: nunocorreiavargas | 👍 5 | Comments: 2  
   🔗 [Issue #2528](https://github.com/github/copilot-cli/issues/2528)

6. **#2892 – MCP stdio transport closes after ~4s for sub-agents** [OPEN]  
   *[area:agents, area:mcp]* — When a sub-agent is launched via the `task` tool, MCP stdio transport closes prematurely (~4s) while the LLM is still generating. Tool calls after that window fail.  
   👤 Author: dsotelo-hiberuscom | 👍 0 | Comments: 1  
   🔗 [Issue #2892](https://github.com/github/copilot-cli/issues/2892)

7. **#2719 – Support suppressing beep via CLI flag** [OPEN]  
   *[area:configuration]* — Request for `copilot --beep=false` flag per invocation, not just persistent config. Low complexity, high developer-QoL impact.  
   👤 Author: DamianEdwards | 👍 1 | Comments: 1  
   🔗 [Issue #2719](https://github.com/github/copilot-cli/issues/2719)

8. **#2555 – Support all slash commands in ACP** [OPEN]  
   *[area:non-interactive]* — Copilot CLI does not advertise slash commands via the Agent Communication Protocol (ACP), limiting non-interactive integrations.  
   👤 Author: sebasmonia | 👍 3 | Comments: 1  
   🔗 [Issue #2555](https://github.com/github/copilot-cli/issues/2555)

9. **#2974 – No access to Pro+ models** [OPEN]  
   *[area:models]* — Paid Pro+ subscriber reports missing premium model access in CLI, echoing #2393. Likely entitlement sync issue.  
   👤 Author: gw0ods | 👍 0 | Comments: 0  
   🔗 [Issue #2974](https://github.com/github/copilot-cli/issues/2974)

10. **#2977 – Skills not loaded in latest version** [OPEN]  
    *[triage]* — Custom skills from `~/.claude/skills` and `~/.copilot/skills` fail to load. No reproduction steps yet. Could be a regression.  
    👤 Author: gkorland | 👍 0 | Comments: 0  
    🔗 [Issue #2977](https://github.com/github/copilot-cli/issues/2977)

## 4. Key PR Progress (1 item of note)

1. **#2970 – Create devcontainer.json** [OPEN]  
   A single new pull request adds a development container configuration for the repo itself. No comments or reviews yet. Trivial in scope but may improve contributor onboarding.  
   👤 Author: Huynhthuongg | 👍 0  
   🔗 [PR #2970](https://github.com/github/copilot-cli/pull/2970)

## 5. Feature Request Trends
The dominant theme is **agent lifecycle control and observability**:
- **Per-repo MCP configuration** (#2528) – users want team-level MCP server definitions checked into `.github/`.
- **ACP protocol completeness** (#2555) – exposing all slash commands for non-interactive tooling integration.
- **Per-invocation beep control** (#2719) – small UX win for users running CI or long tasks.
- **Master instruction file** (#2976, closed) – desire for system-wide Copilot rules that apply to all sessions, not just per-project.

A secondary trend is **model selection and entitlement clarity** – multiple reports of CLI not reflecting subscription-level model access.

## 6. Developer Pain Points
- **Autopilot infinite loops (critical)** – Issues #2881, #2374, #2969 describe premium request burning with no automatic timeout, recovery, or blocked-task detection. This is the top pain point this week.
- **MCP transport instability for sub-agents** (#2892) – stdio transport dies prematurely, breaking tool calls in multi-step agent workflows.
- **Model entitlement mismatch** (#2393, #2974) – paying customers cannot use models they explicitly subscribe to, creating distrust.
- **Skills loading regression** (#2977) – potential breakage in custom skill support without clear diagnostic messaging.
- **UX: Esc interrupt clears input buffer** (#2972, closed) – minor but irritating: mid-run interruption discards queued follow-up text, forcing re-typing.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-26

## Today's Highlights
A critical bug with the K2.6 model rendering it unusable under normal load (Issue #2077) demands immediate attention. Meanwhile, the community is advancing major feature work with stacked PRs for git worktree-based session isolation (#2073, #2076), plus a running indicator for active sessions (#2075). The `http_proxy` env var fix (#1896) was merged, addressing a long-standing networking issue.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#2077] [Critical] K2.6 model overloaded – unusable under normal load**  
   *Reported by Shtef-Inta, macOS Apple Silicon, Kimi Code Allegretto membership*  
   The latest K2.6 model constantly retries and fails under normal usage, making the CLI effectively broken for paying users. No comments yet, but this is the most urgent open issue.  
   👉 https://github.com/MoonshotAI/kimi-cli/issues/2077

2. **[#2074] v1.39.0 /web mode JavaScript MIME type error**  
   *Reported by edision, Windows 10 (AMD64)*  
   The local web server fails to serve JS files with correct MIME types, blocking page load before any model selection. Blocks all /web users on v1.39.0.  
   👉 https://github.com/MoonshotAI/kimi-cli/issues/2074

3. **[#2072] Yolo mode conflates auto-approve with non-interactive, blocking AskUserQuestion**  
   *Reported by junvon843*  
   Yolo mode incorrectly assumes auto-approve implies fully non-interactive, preventing the agent from asking the user questions when needed. Breaks workflows that require mixed autonomy and user input.  
   👉 https://github.com/MoonshotAI/kimi-cli/issues/2072

## Key PR Progress

1. **[#2076] feat(web): worktree UI for isolated sessions (stacked on #2073)**  
   *Author: cal-gooo*  
   Exposes git-worktree support through the web UI, with session creation, visibility markers, and automatic cleanup.  
   👉 https://github.com/MoonshotAI/kimi-cli/pull/2076

2. **[#2073] feat(cli): add git worktree support for isolated sessions**  
   *Author: cal-gooo*  
   New `--worktree` / `-W` flag to create temporary git worktrees per session, enabling parallel work on the same repo without file conflicts or branch-switching overhead.  
   👉 https://github.com/MoonshotAI/kimi-cli/pull/2073

3. **[#2075] feat(web): show running indicator for active sessions in sidebar**  
   *Author: cal-gooo*  
   Adds a subtle "alive" marker next to running sessions in both list and grouped sidebar views, giving at-a-glance insight into session activity.  
   👉 https://github.com/MoonshotAI/kimi-cli/pull/2075

4. **[#1960] feat(soul): RalphFlow architecture with ephemeral context and convergence detection**  
   *Author: ORDL-AMF*  
   Automated iteration framework using isolated temporary contexts per flow step, plus convergence detection to prevent infinite loops — critical for robust multi-step agent workflows.  
   👉 https://github.com/MoonshotAI/kimi-cli/pull/1960

5. **[#2047] fix(acp): load ~/.kimi/mcp.json in ACP server sessions**  
   *Author: natrollus*  
   Fixes missing MCP tools when using `kimi acp` (e.g., from Zed editor). Previously, only built-in tools were available; now locally configured MCP servers are properly loaded.  
   👉 https://github.com/MoonshotAI/kimi-cli/pull/2047

6. **[#1896] [CLOSED] fix(core): honor http_proxy env vars via aiohttp trust_env=True**  
   *Author: hao-cyber*  
   **Merged.** All outbound requests now respect `http_proxy`/`https_proxy`/`NO_PROXY` environment variables, fixing direct-connection failures in proxied or NAT environments.  
   👉 https://github.com/MoonshotAI/kimi-cli/pull/1896

## Feature Request Trends
- **Git worktree isolation for sessions** — a strong push for per-session sandboxing at the filesystem level (#2073, #2076), indicating demand for safe parallel work on the same repo.
- **Session lifecycle visibility** — users want real-time indicators for active vs. idle sessions (#2075), suggesting deeper workflow management expectations.
- **Automated iteration frameworks** — the RalphFlow proposal (#1960) points to growing interest in structured, self-terminating multi-step execution loops.

## Developer Pain Points
- **K2.6 model reliability crisis** — the model is reported as "constantly retrying" and unusable under normal load (#2077). Paying users are blocked. This is the top frustration.
- **/web mode broken on Windows** — MIME type misconfiguration in v1.39.0 blocks web UI entirely on Windows 10 (#2074), a regression affecting a significant user segment.
- **Yolo mode semantic confusion** — conflating auto-approval with fully non-interactive behavior breaks agent-user interactions (#2072), highlighting unclear semantics in the autonomy model.
- **Proxy environment variable missing** — the long-standing `http_proxy` hole (#1896) has finally been fixed, reflecting chronic difficulty for users behind corporate proxies or internal networks.
- **ACP session MCP tool gaps** — third-party editor integrations (Zed, etc.) lacked custom MCP tools (#2047), limiting agent capabilities in editor-hosted scenarios.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-26

## Today's Highlights
DeepSeek V4 `reasoning_content` round-tripping continues to dominate the bug tracker after v1.14.25's partial fix introduced a regression on second-turn tool calls. Community demand for SSH-based remote server connections and a visual active-session indicator remain the most upvoted feature requests this week.

## Releases
**v1.14.25** — Core fixes:
- Fixed permission config preserving rule order, with full IntelliSense for tool permission keys.
- LSP permission prompts now include request details (operation, file, cursor position).
- Shell commands now maintain correct working directory after login shell startup files.

## Hot Issues

1. **`#24190` — [CLOSED] DeepSeek V4 `reasoning_content` not round-tripped — 400 error on multi-turn tool calls**  
   The most critical bug of the past 48 hours. First turn works, but subsequent turns fail with DeepSeek V4 Pro/Flash via official API or OpenRouter. 25 comments, 9 👍.  
   [Link](https://github.com/anomalyco/opencode/issues/24190)

2. **`#7790` — [FEATURE] SSH-based remote server connections to OpenCode Desktop**  
   Long-running top feature request. Would allow connecting to a remote `opencode server` from the desktop app. 49 👍, 11 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/7790)

3. **`#24442` — [OPEN] DeepSeek V4: `reasoning_content` lost on second interleaved pass (regression from #24146)**  
   A new regression: the fix that addressed empty `reasoning_content` now breaks on the second pass through the transform after DB storage. 6 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/24442)

4. **`#24083` — [CLOSED] `reasoning_content` must be passed back to the API**  
   DeepSeek API now enforces that thinking mode `reasoning_content` is included in follow-up requests. Closed but related to the ongoing V4 saga. 10 👍.  
   [Link](https://github.com/anomalyco/opencode/issues/24083)

5. **`#24261` — [CLOSED] DeepSeek `reasoning_content` not passed back in multi-turn conversations**  
   Confirmed duplicate/related bug: multi-turn DeepSeek V4 conversations fail after the first turn. 7 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/24261)

6. **`#23549` — [FEATURE] Green indicator on project icons when a session is active**  
   Simple but highly demanded UX improvement: visual cue showing which projects are running. 6 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/23549)

7. **`#22528` — How to turn off sound effects and animations in 1.4.4**  
   Unannounced sound/animation on first launch in terminal mode is frustrating users. 20 👍 suggests this should be documented or configurable.  
   [Link](https://github.com/anomalyco/opencode/issues/22528)

8. **`#24093` — [FEATURE] Support DeepSeek-V4 models**  
   Request to update the DeepSeek provider for new V4 model identifiers and API changes. 7 👍.  
   [Link](https://github.com/anomalyco/opencode/issues/24093)

9. **`#22187` — [CLOSED] OpenCode Desktop scans random system folders**  
   High-severity performance bug: OpenCode was consuming 100% CPU scanning unrelated system directories on Linux/Windows. 4 👍.  
   [Link](https://github.com/anomalyco/opencode/issues/22187)

10. **`#24410` — [CLOSED] Kilo Kimi K2.6 requests send invalid `reasoning_details`**  
    Another reasoning-token bug: Kilo Gateway rejects requests where `reasoning_details` is a plain string instead of structured data.  
    [Link](https://github.com/anomalyco/opencode/issues/24410)

## Key PR Progress

1. **`#24250` — fix(provider): complete DeepSeek `reasoning_content` round-trip for multi-turn conversations**  
   Closes `#24104`. Fixes the two-layer bug where `reasoning_content` is dropped on conversation replay for DeepSeek thinking mode. This is the likely solution to the V4 crisis.  
   [Link](https://github.com/anomalyco/opencode/pull/24250)

2. **`#24374` — fix(sdk): load `cross-spawn` through `require`**  
   Closes `#22281`. Fixes plugin loading failure when plugins bundle their own SDK copy and Bun's raw ESM handling breaks on `cross-spawn`.  
   [Link](https://github.com/anomalyco/opencode/pull/24374)

3. **`#24386` — [CLOSED] fix(provider): preserve Azure API version**  
   Closes `#13999`. Azure Cognitive Services endpoints require `?api-version=` on Responses API requests — now preserved correctly.  
   [Link](https://github.com/anomalyco/opencode/pull/24386)

4. **`#24289` — fix: repair truncated JSON tool inputs in LLM session**  
   Closes `#24177`. Adds helpers to fix tool call errors on Kimi K2.6 running on vLLM.  
   [Link](https://github.com/anomalyco/opencode/pull/24289)

5. **`#24382` — feat(llm): auto-describe images via vision fallback when active model lacks vision support**  
   New feature: when a user pastes a screenshot but the coding model doesn't support images, it uses a vision-capable model to describe the image first.  
   [Link](https://github.com/anomalyco/opencode/pull/24382)

6. **`#24364` — [CLOSED] fix(provider): reject unsupported image mime types**  
   Closes `#23990`. Filters out invalid image attachments before sending to providers, preventing 400 errors.  
   [Link](https://github.com/anomalyco/opencode/pull/24364)

7. **`#24384` — [CLOSED] fix(provider): respect configured output limit**  
   Closes `#20078`. `ProviderTransform.maxOutputTokens()` was capping every configured model output at 32,000 — now respects user settings.  
   [Link](https://github.com/anomalyco/opencode/pull/24384)

8. **`#23360` — feat(tui): add `/cd` command for runtime working directory switching**  
   Closes `#23358`. Users can now switch between projects/monorepo packages during a session without restarting.  
   [Link](https://github.com/anomalyco/opencode/pull/23360)

9. **`#24311` — feat(app): support message annotations**  
   Closes `#23677`. Adds in-message annotations: select text in assistant replies and add a small floating annotation.  
   [Link](https://github.com/anomalyco/opencode/pull/24311)

10. **`#23841` — fix: retry streamed provider error envelopes**  
    Closes `#16214`. OpenAI can stream JSON error envelopes — this PR adds retry logic for those cases instead of failing immediately.  
    [Link](https://github.com/anomalyco/opencode/pull/23841)

## Feature Request Trends
- **Session visibility**: Multiple issues (`#23549`, `#15509`, `#23784`, `#22233`) request better visual indicators for active sessions, busy projects, and subagent runtime state.
- **Remote connectivity**: `#7790` (SSH remote connections) is the most upvoted open feature request at 49 👍, indicating strong demand for server-based workflows.
- **Plugin & UI polish**: `#23879` (dismissible toasts), `#23842` (desktop popup notifications), `#20921` (TUI color change on task completion) show community interest in non-blocking notification systems.
- **Session recovery**: `#24421` (restoring previous session) and `#15789` (portable wrapper scripts) point to demand for better session persistence and deployment flexibility.

## Developer Pain Points
- **DeepSeek V4 `reasoning_content` bugs** remain the #1 recurring issue: the fix (PR `#24146`) introduced a second regression (`#24442`), and the core problem has spawned 4+ issues and 3+ PRs in just two days. Community frustration is high.
- **Windows-specific regressions** continue to plague updates: `/exit` freezing terminals (`#23720`), shell permission bypass (`#23907`), and system folder scanning (`#22187`).
- **Plugin loading fragility**: Issues with `cross-spawn` ESM imports (`#22281`), inconsistent cache directory structure (`#23502`), and `@latest` upgrade failures (`#21609`) suggest the plugin system needs hardening.
- **Azure OpenAI compatibility**: The missing `api-version` query parameter on Responses API (`#13999`) and blocked GPT-5.x models highlight ongoing friction with Microsoft's Azure offering.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-26

## Today's Highlights

The project saw a burst of weekend activity with 30+ issues and 20 PRs in the last 24h, driven largely by newly merged fixes for DeepSeek V4 reasoning preservation and a GPT-5.5 context window correction. A notable trend is the rapid community addition of new provider integrations (Together AI, CrofAI, Ark/Volcano Engine) alongside several Anthropic compatibility patches, highlighting the ecosystem's expansion beyond the default provider set.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#3208 — Custom Thinking Levels per Model** (11 comments, 8 👍)
   Feature request to allow models to define their own thinking levels in `models.json`, so `Shift+Tab` only cycles through supported levels. The community strongly supports this, and the author has offered to implement it.
   Link: https://github.com/badlogic/pi-mono/issues/3208

2. **#2023 — Add `pi.runWhenIdle()` for post-agent scheduling** (8 comments, in-progress)
   Proposes an API to schedule work after the agent has fully settled, based on a `sendUserMessage` pattern in the reload-runtime example. This would solve a long-standing gap in extension control flow.
   Link: https://github.com/badlogic/pi-mono/issues/2023

3. **#3177 — Dynamic model discovery via `/v1/models` API** (3 comments, closed)
   Suggests replacing hardcoded `models.generated.js` with live API discovery. Closed, but the core idea is likely to resurface as the provider ecosystem grows.
   Link: https://github.com/badlogic/pi-mono/issues/3177

4. **#3712 — DeepSeek V4 via NVIDIA emits raw DSML tool calls** (2 comments, closed-because-weekend)
   Raw `<｜DSML｜tool_calls` DSML markers leak into assistant text during tool-use turns. Highlights cross-provider compatibility issues with DeepSeek's non-standard streaming format.
   Link: https://github.com/badlogic/pi-mono/issues/3712

5. **#3728 — AnthropicMessagesCompat: Fireworks rejects `cache_control` on tools** (2 comments)
   Fireworks' Anthropic-compatible API explicitly rejects `cache_control` in tool schemas. Requires a flag to omit this field for compatible proxies.
   Link: https://github.com/badlogic/pi-mono/issues/3728

6. **#3665 — Anthropic normalizeToolCallId returns empty string, 400s on cross-provider replay** (2 comments, in-progress)
   Switching providers mid-session produces empty `tool_use.id`, which Anthropic's API rejects. A fix was merged (PR #3664) using a placeholder fallback.
   Link: https://github.com/badlogic/pi-mono/issues/3665

7. **#3686 — `pi.setSessionName()` doesn't refresh terminal title** (2 comments, in-progress)
   Extension API asymmetry: the built-in `/name` command updates the terminal title, but the extension method `setSessionName()` does not. Simple fix pending.
   Link: https://github.com/badlogic/pi-mono/issues/3686

8. **#3560 — `/reload` gets stuck in a loop** (2 comments, closed)
   Agent attempts `/reload` at session end and loops until escape. Possibly related to race conditions in the command handler; closed but unresolved.
   Link: https://github.com/badlogic/pi-mono/issues/3560

9. **#3730 — `displayName` for providers registered by extensions** (2 comments)
   Extensions registering providers via `pi.registerProvider()` cannot set a human-friendly name, showing only the raw `providerId` in `/login`. A small API gap.
   Link: https://github.com/badlogic/pi-mono/issues/3730

10. **#3706 — Intermittent `spawn EBADF` for bash/custom tools** (2 comments)
    After upgrading from 0.70.0 to 0.70.2, `bash`, `subagent`, and `process` tools fail intermittently with `spawn EBADF`. Rolling back resolves it — regression suspected.
    Link: https://github.com/badlogic/pi-mono/issues/3706

## Key PR Progress

1. **#3742 — fix(ai): preserve DeepSeek reasoning after tool results**
   Completes the DeepSeek V4 Chat Completions replay fix by serializing thinking blocks into `reasoning_content` and caching it across tool-result turns. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3742

2. **#3740 — doc(README): update "quick start"**
   Fixes three issues in the pi-tui README: input capture, Ctrl+C exit, and undefined `editorTheme`. Tested locally. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3740

3. **#3632 — feat(coding-agent): add `persistModelChanges` setting**
   New setting (default `true`) to keep `/model` and `Ctrl+P` selections session-only instead of overwriting `settings.json`. Useful for task-specific model switching. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3632

4. **#3737 — fix(ai): correct GPT-5.5 context metadata**
   Sets OpenAI GPT-5.5 contextWindow to 1,050,000 (native) and Codex route to 400,000. Fixes confusion between prompt limit and contextWindow. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3737

5. **#3731 — package-manager: query bun global modules path at runtime**
   Replaces hardcoded `~/.bun/install/global` with dynamic `bun pm ls -g` lookup. Fixes plugin/extension installation with Bun. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3731

6. **#3624 — feat(ai): add Together AI provider (supports DeepSeek V4)**
   Native Together AI support via OpenAI-compatible API, with model sourcing from `models.dev`. Open, awaiting review.
   Link: https://github.com/badlogic/pi-mono/pull/3624

7. **#3716 — feat(ai): add CrofAI provider**
   Adds CrofAI, an OpenAI-compatible platform hosting DeepSeek, MoonshotAI, GLM, Gemma, MiniMax, and Qwen models. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3716

8. **#3709 — feat(ai): add Ark (Volcano Engine) provider via Responses API**
   Support for Volcano Engine's LLM platform with streaming, tool calling, and reasoning. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3709

9. **#3680 — Add built-in update command**
   Makes `pi update` now also update Pi itself. Merged.
   Link: https://github.com/badlogic/pi-mono/pull/3680

10. **#3664 — fix(ai): fall back to placeholder for empty Anthropic tool_use.id**
    Guarantees `normalizeToolCallId` always returns a value matching Anthropic's regex, including the empty-input case. Merged.
    Link: https://github.com/badlogic/pi-mono/pull/3664

## Feature Request Trends

- **Dynamic model management**: Multiple requests (#3208, #3177) for moving from hardcoded model lists to dynamic discovery and per-model configuration. The community clearly wants more flexibility as providers proliferate.
- **Extension API completeness**: Issues like #3730 (`displayName` for providers), #3686 (terminal title refresh), and #3726 (exit code for `ctx.shutdown`) show demand for fuller extension API coverage with parity to built-in features.
- **Deeplinks and shareability**: #3744 proposes `pi://` deeplinks for sharing prompts and CI integration, mirroring features in Cursor and other tools.
- **Dynamic branch summaries**: #3695 suggests `/tree` should support dynamic, use-case-driven branch-summary prompts rather than static options.

## Developer Pain Points

- **Provider compatibility fragmentation**: The cluster of issues around DeepSeek (#3712, #3743, #3727), Anthropic adapter quirks (#3665, #3728), and Bedrock inference profiles (#3738, #3739) indicates that cross-provider consistency is a major headache, especially with non-standard streaming markers and differing API semantics.
- **Regression sensitivity**: The intermittent `spawn EBADF` error (#3706) after a minor version bump and the `/reload` loop (#3560) suggest insufficient regression testing around tool execution and command handling.
- **Package manager assumptions**: The Bun global path issue (#3734) reveals that Pi is still npm-centric — a pain point for developers using alternative package managers.
- **Documentation drift**: The pi-tui README quick-start being broken (#3741) and the documentation on system prompts being outdated (#3702) show that documentation maintenance lags behind feature development.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-26

## 1. Today's Highlights

Today's release v0.15.3 ships two major performance wins: a 91% reduction in synchronous I/O on the tool hot path and new native context menu copy actions for the VS Code webview chat. The community is urgently tracking a **critical bug family** around `reasoning_content` handling for DeepSeek and other thinking-mode APIs (Issues #3579, #3619), which has already triggered a targeted hotfix PR (#3637). Additionally, two high-impact feature PRs landed — a per-provider concurrency cap and TLS insecure mode — directly addressing production-scale deployment pain points.

---

## 2. Releases

### v0.15.3
- **feat(vscode):** added native context menu copy actions for webview chat — streamlines code copying from AI responses in VS Code.
- **perf(core):** cut runtime sync I/O on tool hot path by 91% — major latency reduction for tool-calling workflows.
- **feat(cli):** added Traditional Chinese (zh-TW) locale support.
- **Link:** [v0.15.3 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.3)

---

## 3. Hot Issues (Top 10 by Community Activity)

1. **[#3579] BUG: DeepSeek API 400 error — reasoning_content in thinking mode must be passed back**  
   *Reopened due to conflict between two fixes: one strips thought blocks on model switch (#3304), the other must preserve `reasoning_content`. Directly blocks DeepSeek V4 users.*  
   [Issue #3579](https://github.com/QwenLM/qwen-code/issues/3579)

2. **[#3277] Qwen Code MCP Client Limited to 2 Connections — Breaking Production Multi-Node Infrastructure**  
   *Critical severity — artificial limit prevents multi-node MCP deployments. Users report "data loss risk" and "wasted engineering time."*  
   [Issue #3277](https://github.com/QwenLM/qwen-code/issues/3277)

3. **[#3619] Deepseek V4 API Error: 400 — reasoning_content related**  
   *Newest instance of the `reasoning_content` bug family on v0.15.2. Community reporting identical failure pattern with DeepSeek V4.*  
   [Issue #3619](https://github.com/QwenLM/qwen-code/issues/3619)

4. **[#3520] Tool ran without output or errors**  
   *Silent tool failure — tool calls appear to execute but return no output and no error. Difficult to debug, affecting v0.14.5.*  
   [Issue #3520](https://github.com/QwenLM/qwen-code/issues/3520)

5. **[#2466] Adding branching for MCP**  
   *Feature request for MCP branching support on Arch Linux + LM Studio setup. Highlights demand for MCP ecosystem flexibility.*  
   [Issue #2466](https://github.com/QwenLM/qwen-code/issues/2466)

6. **[#3585] Model cost/billing tracking**  
   *Request to add per‑million‑token pricing in `settings.json` and a `/stats model` cost command. Growing need for API cost transparency.*  
   [Issue #3585](https://github.com/QwenLM/qwen-code/issues/3585)

7. **[#3464] Third-party models (GLM, etc.) suffer severe intelligence degradation**  
   *User reports that switching from Qwen 3.6-plus to GLM-5/5.1 causes tool‑call failures and "severe intelligence degradation." Suspects system prompt manipulation.*  
   [Issue #3464](https://github.com/QwenLM/qwen-code/issues/3464)

8. **[#1281] Qwen Code model (via Ollama) returns JSON-format responses**  
   *Persistent bug (since Dec 2025) — local models deployed via Ollama return raw JSON instead of natural language. Long‑standing community frustration.*  
   [Issue #1281](https://github.com/QwenLM/qwen-code/issues/1281)

9. **[#1105] VS Code missing Accept Diff / Close Diff Editor commands**  
   *Missing Command Palette entries — blocks diff‑based code review workflow in VS Code.*  
   [Issue #1105](https://github.com/QwenLM/qwen-code/issues/1105)

10. **[#3326] High memory usage detected: 7.17 GB**  
    *Memory pressure warning — users encountering potential OOM crashes under normal workloads.*  
    [Issue #3326](https://github.com/QwenLM/qwen-code/issues/3326)

---

## 4. Key PR Progress (Top 10 by Impact)

1. **[#3637] fix(core): preserve reasoning_content when merging consecutive assistant messages**  
   *Hotfix for the DeepSeek reasoning_content bug — `mergeConsecutiveAssistantMessages` was silently dropping `reasoning_content`.*  
   [PR #3637](https://github.com/QwenLM/qwen-code/pull/3637)

2. **[#3636] feat(core): cap concurrent in-flight requests per provider**  
   *Adds per-provider concurrency limit — translates `429 Too Many Requests` into client‑side backpressure. Directly addresses production rate‑limiting.*  
   [PR #3636](https://github.com/QwenLM/qwen-code/pull/3636)

3. **[#3635] feat(core): --insecure flag and QWEN_TLS_INSECURE env var**  
   *Enables TLS certificate skipping for self‑signed dev/lab endpoints (Node undici ignores `NODE_TLS_REJECT_UNAUTHORIZED`).*  
   [PR #3635](https://github.com/QwenLM/qwen-code/pull/3635)

4. **[#3631] Feat/stats model cost estimation**  
   *Implementation of the `/stats model` cost feature from #3585 — adds `modelPricing` settings and per‑session cost calculation.*  
   [PR #3631](https://github.com/QwenLM/qwen-code/pull/3631)

5. **[#3617] fix(core): split tool-result media into follow-up user message for strict OpenAI compat**  
   *Fixes #3616 — OpenAI spec only allows string/text parts in tool‑role messages; moves image/audio/video parts to a separate user message.*  
   [PR #3617](https://github.com/QwenLM/qwen-code/pull/3617)

6. **[#3471] feat(core): model-facing agent control (task_stop, send_message, per-agent transcript)**  
   *Adds three missing sub‑agent affordances — read live transcript, send message mid‑flight, and stop running background agents.*  
   [PR #3471](https://github.com/QwenLM/qwen-code/pull/3471)

7. **[#3488] feat(cli): background-agent UI — pill, combined dialog, detail view**  
   *Companion UI for the agent control PR — adds status‑line pill, combined task dialog, and detail view for running background agents.*  
   [PR #3488](https://github.com/QwenLM/qwen-code/pull/3488)

8. **[#3620] fix(core): match DeepSeek provider by model name for sglang/vllm**  
   *Fixes #3613 — sglang's deepseek‑v4 jinja template crashes on array‑form content; switches to string form for compatibility.*  
   [PR #3620](https://github.com/QwenLM/qwen-code/pull/3620)

9. **[#3629] feat(config): support API timeout env override**  
   *Adds `QWEN_CODE_API_TIMEOUT_MS` env var for users running slow local/OpenAI‑compatible endpoints.*  
   [PR #3629](https://github.com/QwenLM/qwen-code/pull/3629)

10. **[#3627] feat: add macOS desktop app installer**  
    *Creates `Qwen Code.app` for Spotlight/Launchpad launch — addresses macOS user experience demand.*  
    [PR #3627](https://github.com/QwenLM/qwen-code/pull/3627)

---

## 5. Feature Request Trends

The most‑requested feature directions from today's issue data:

- **MCP ecosystem improvements** — branching, multi‑node support, connection indicators, and expanded MCP server types (#2466, #3277, #3147).
- **Cost/billing transparency** — API pricing per model, session cost tracking, and usage statistics (#3585).
- **Third‑party model compatibility** — improved handling for non‑Qwen models (DeepSeek, GLM, Gemini) with proper reasoned‑content support (#3579, #3619, #3464, #1078).
- **Agent control & visibility** — background agent steering, live transcript access, and task status UI (#3471, #3488, #2987).
- **Production reliability** — connection pooling, concurrency control, TLS flexibility, and memory management (#3277, #3326, #3409, #3535).

---

## 6. Developer Pain Points

Recurring frustrations and high‑frequency issues observed across today's data:

- **Thinking‑mode API breakage** — DeepSeek `reasoning_content` handling is the single most critical pain point, blocking users from DeepSeek V4 and sglang deployments. Two open issues (#3579, #3619) with overlapping fixes causing regression.
- **MCP connection limits & stability** — the artificial 2‑connection MCP limit (#3277) and silent MCP disconnection indicators (#3147) are breaking production setups.
- **Third‑party model degradation** — users report "severe intelligence degradation" with non‑Qwen models, raising concerns about system prompt manipulation (#3464).
- **High memory usage** — 7.17 GB memory pressure warning (#3326) suggests potential memory leak under extended sessions.
- **File restoration / data safety** — lack of undo/restore endpoints for accidental file modifications (#3180) causes anxiety during AI‑assisted code editing.
- **Slow code context refresh** — outdated context when files change, requiring new conversation to clear (#3182).
- **Authentication persistence** — API keys failing to persist across restarts (#3417), requiring re‑entry on every launch.

---

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*