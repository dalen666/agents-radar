# AI CLI Tools Community Digest 2026-05-09

> Generated: 2026-05-09 04:28 UTC | Tools covered: 8

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

**Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem — 2026-05-09**

**1. Ecosystem Overview**

The AI CLI tools landscape is characterized by rapid iteration cycles and maturing community expectations, with quality-of-life features and platform reliability increasingly overtaking raw model capabilities as the primary differentiator. Windows and cross-platform support remains a major pain point across all tools, and MCP (Model Context Protocol) integration—while widely adopted—is generating significant reliability and authentication friction. There is a clear convergence around session management, configurable agent behavior, and multi-agent orchestration as the next frontier of competition, while each tool maintains distinct strengths in its provider ecosystem and target workflow patterns.

**2. Activity Comparison**

| Tool | Open Issues (notable) | Key PRs | Release Status |
|---|---|---|---|
| **Claude Code** | ~10 high-severity (MCP auth, billing bug #41581) | 8 active PRs (supply-chain, pagination, docs) | **2 patch releases** today (v2.1.136 → v2.1.137) |
| **OpenAI Codex** | ~10 active (GPU sandbox #3141, WSL paths #13762) | 10 active PRs (metadata handling, TUI perf, SDK) | **1 stable, 1 alpha** (rust-v0.130.0 → v0.131.0-alpha.1) |
| **Gemini CLI** | ~10 active (retry loops #23762, OAuth failures #23688) | 10 active PRs (telemetry, TTY fixes, tool limits) | **No release** in last 24h (latest: v0.34.0) |
| **GitHub Copilot CLI** | ~10 active (MCP in sub-agents #2630, NFS paths #1433) | 2 active PRs (devcontainer, Homebrew docs) | **1 stable, 1 pre-release** today (v1.0.44, v1.0.44-3) |
| **Kimi Code CLI** | ~10 active (Windows crashes, session corruption) | 10 active PRs (shell backend, timeout, auth) | **No release** in last 24h (latest: v1.41.0) |
| **OpenCode** | ~10 active (free-tier limits #15585, marketplace #7467) | 10 active PRs (wire-format, i18n, iOS PWA fix) | **No release** in last 24h (latest: v1.2.15) |
| **Pi** | ~10 auto-closed (big-refactor lockout) | 10 active PRs (env leak fix, worker-loop mode, image paste) | **No release** in last 24h (latest: v0.73.0) |
| **Qwen Code** | ~10 active (OAuth free-tier policy #3203, rendering bugs) | 10 active PRs (IDE context, file-change detection, daemon) | **1 nightly, 1 stable** today (v0.15.9) |

**3. Shared Feature Directions**

The following requirements appear across multiple tool communities, indicating broad industry demand:

| Common Requirement | Tools Involved | Specific Need |
|---|---|---|
| **WSL/Native Windows integration** | Claude Code (#12506, 112👍), OpenAI Codex (#13762, 26👍), Kimi Code (#2186, git-bash backend PR) | Native shell execution in WSL, avoiding POSIX-API crashes on Windows |
| **Session management & forking** | Gemini CLI (#26618, `/fork` PR), OpenAI Codex (#19910, goals lost on compaction), Kimi Code (#2204, context restore), OpenCode (#13877, 30-day limit) | Persistent, restorable sessions with branching and history search |
| **Configurable agent instructions** | Claude Code (CLAUDE.md drift), OpenAI Codex (#12115, dynamic AGENTS.md), Copilot CLI (#1433, NFS paths), Kimi Code (#2152, global AGENTS.md) | Hierarchical, per-project, and global instruction files with proper resolution and caching |
| **MCP authentication & reliability** | Claude Code (#42359, #45551, #57365), Copilot CLI (#2630), Pi (#4266, local provider incompat) | Robust OAuth flows, credential store integrity, sub-agent MCP connectivity |
| **Multi-agent orchestration** | OpenAI Codex (#20721, multitasking), Copilot CLI (#2543, session corruption), Claude Code (Cowork mode) | Concurrent sub-agents without state corruption, deterministic delegation |
| **Local model / BYOK support** | Pi (#4266, LM Studio), Copilot CLI (#3195, BYOK reasoning), Qwen Code (Alibaba internal endpoint) | Custom model hosting, provider-agnostic API compatibility |
| **Plan mode vs. build mode separation** | OpenCode (#10741, 6👍), Qwen Code (#3548, plansDirectory), Claude Code (auto mode classifier) | Hard guards against unintended writes during planning phases |
| **Session history search & navigation** | Gemini CLI (#20142, Ctrl+R), OpenCode (#13877), Pi (#4313, virtual scrollback) | Context search, timeline jumping, non-destructive navigation |

**4. Differentiation Analysis**

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary strength** | Mature agent ecosystem, enterprise features | Cross-platform (IDE + CLI + web) | Google Cloud integration, GCP-native | GitHub ecosystem, BYOK flexibility | Lightweight, fast iteration | Open-source, i18n (Chinese) | Highly extensible, provider-agnostic | Alibaba/China ecosystem, cost optimization |
| **Target user** | Enterprise developers, team workflows | Cloud-native, multi-platform | GCP/Code Assist users | GitHub-centric teams | Individual devs, Windows users | Chinese-speaking devs, open-source community | Plugin developers, multi-provider setups | Alibaba cloud, budget-conscious teams |
| **Release cadence** | Multiple patches/week | Weekly stable + alpha | Slower (last stable v0.34.0) | Weekly stable + pre-release | Moderate (v1.41.0) | Moderate (v1.2.15) | Slow (v0.73.0, major refactor) | Daily nightly + weekly stable |
| **Community engagement** | High (billing bug #41581: 36 comments) | High (GPU sandbox #3141: 35 comments) | Moderate (retry loops: 8-10 comments) | Moderate (sub-agent issue: 6 comments) | Low (1-3 comments per issue) | Moderate (free-tier: 20 comments) | Low (<10 comments, auto-closing) | Very high (OAuth policy #3203: 122 comments) |
| **Platform parity** | Windows second-class | Windows weak (WSL confusion) | Unknown | Windows weak (PowerShell alerts) | Windows focus (CRITICAL bugs) | Cross-platform (iOS PWA) | Cross-platform (narrow terminal crashes) | Windows fragile (resize issues) |

**5. Community Momentum & Maturity**

- **Claude Code** remains the most mature and feature-complete, with the broadest adoption, but faces community trust erosion from persistent billing bugs (#41581) and brittle MCP auth. Its patch release cadence is the fastest among peers.

- **OpenAI Codex** is aggressively iterating with weekly alphas and a clear roadmap (GPU sandbox, dynamic AGENTS.md), but Windows/WSL friction and generic slowness complaints (#21527) suggest scaling challenges.

- **Qwen Code** has explosive community engagement on controversial decisions (OAuth free-tier reduction #3203: 122 comments), indicating a vocal user base that is highly sensitive to pricing changes.

- **Pi** is in a major codebase restructuring ("big refactor"), which is auto-closing community contributions and generating developer frustration. This suggests a potential pivot or breaking change is imminent.

- **Kimi Code CLI** is the least mature by platform stability metrics—4 critical Windows bugs in a single day—but its community is clearly invested in making it work cross-platform. Active PRs targeting shell backend (#2186) and timeout handling (#2200) show responsiveness.

- **Copilot CLI** and **Gemini CLI** show moderate engagement, with the former benefiting from GitHub's existing user base and the latter struggling with fundamental reliability issues (retry loops, silent hangs).

**6. Trend Signals**

1. **Windows is the new frontier.** Every tool except Pi has significant Windows-specific issues, and the ones that solve it (Kimi's git-bash pivot, Claude Code's WSL integration request) will capture significant market share from Microsoft-ecosystem developers.

2. **BYOK and self-hosting are becoming table stakes.** Users increasingly demand the ability to run their own models (OpenAI-compatible APIs, vLLM, Ollama) without feature degradation. Tools that lock users into their provider chain (Claude Code, Gemini) face growing demand for escape hatches.

3. **MCP is here, but fragile.** Every tool that supports MCP has at least one critical auth or connectivity bug open. The ecosystem has reached the "trough of disillusionment" on MCP—the concept is validated, but implementation maturity is catching up.

4. **Session and state management is the next UX battleground.** Long-running sessions are the norm, and users expect persistence, searchability, branching (`/fork`), and non-destructive navigation. Tools that ship robust session management (Gemini's `/fork` PR, Claude Code's compaction improvements) will differentiate.

5. **Billing and quota transparency is eroding trust.** Claude Code's silent downgrade (#41581), Qwen Code's proposed free-tier reduction (#3203), and OpenAI Codex's GPU access premiumization all signal that monetization is tightening. Users who feel manipulated are vocal and organized.

6. **Safety classifiers are overreaching.** AGPL-3.0 license generation blocked (#12705 in Claude Code), filenames like "report.md" rejected (#44657)—developers increasingly see AI safety as a workflow blocker, not a protection. Expect growing demand for user-configurable safety thresholds.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-09** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

### #1 — Document Typography Quality Control
**PR #514** | [GitHub](https://github.com/anthropics/skills/pull/514) | *Open* | Author: PGTBoos

A precision-oriented Skill addressing orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The author argues these issues affect *every* document Claude generates, and that users rarely request good typography explicitly — making this a "silent quality gap." The discussion centers on whether this should be a standalone Skill or folded into the existing document skills. **Status:** Open, active discussion.

### #2 — Meta Skills: Skill Quality & Security Analyzers
**PR #83** | [GitHub](https://github.com/anthropics/skills/pull/83) | *Open* | Author: eovidiu

Introduces two meta-skills for evaluating other Skills across five quality dimensions (Structure, Documentation, Security, Reliability, Clarity). The **skill-security-analyzer** component addresses a growing community concern about trust boundaries. Discussion highlights the chicken-and-egg problem: who validates the validators? **Status:** Open, awaiting maintainer review.

### #3 — Frontend Design Skill Overhaul
**PR #210** | [GitHub](https://github.com/anthropics/skills/pull/210) | *Open* | Author: justinwetch

A comprehensive revision of the frontend-design Skill focused on actionability — ensuring every instruction is something Claude can execute within a single conversation. The discussion reveals frustration with existing Skills that read more like reference documentation than operational instructions. **Status:** Open, iterative improvements ongoing.

### #4 — ODT (OpenDocument) Skill
**PR #486** | [GitHub](https://github.com/anthropics/skills/pull/486) | *Open* | Author: GitHubNewbie0

Adds support for .odt, .ods, and .odf file creation, filling, and conversion to HTML. Directly addresses the LibreOffice/open-source ecosystem gap. Discussion focuses on template-filling edge cases and ISO standard compliance. **Status:** Open, active development.

### #5 — Case-Sensitivity Fixes (PDF Skill)
**PR #538** | [GitHub](https://github.com/anthropics/skills/pull/538) | *Open* | Author: Lubrsy706

A deceptively critical bug fix: SKILL.md references file names in uppercase (REFERENCE.md, FORMS.md) while actual files are lowercase. This causes silent failures on case-sensitive filesystems (Linux/macOS). The discussion reveals this is a systemic issue across the repository, not isolated to PDF. **Status:** Open, expected to merge.

### #6 — Tracked Change ID Collision (DOCX Skill)
**PR #541** | [GitHub](https://github.com/anthropics/skills/pull/541) | *Open* | Author: Lubrsy706

Fixes document corruption when the DOCX Skill adds tracked changes to documents with existing bookmarks. Root cause: `w:id` in OOXML is a *shared* ID space across bookmarks, comments, and tracked changes. Hardcoded low IDs (1, 2, 3) inevitably collide. The fix proposes dynamic ID generation. **Status:** Open, technically reviewed.

### #7 — Testing Patterns Skill
**PR #723** | [GitHub](https://github.com/anthropics/skills/pull/723) | *Open* | Author: 4444J99

A comprehensive testing Skill covering the Testing Trophy model, AAA pattern, React Testing Library, Playwright e2e, and contract testing. Discussion indicates this fills a notable gap — the repository had testing-adjacent Skills but no dedicated testing-patterns Skill. **Status:** Open, positive community reception.

### #8 — ServiceNow Platform Skill
**PR #568** | [GitHub](https://github.com/anthropics/skills/pull/568) | *Open* | Author: Vanka07

A broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, HRSD, CSM, SPM, Vulnerability Response, and IntegrationHub. This is the most enterprise-focused Skill in the current pipeline. Discussion centers on scope management — whether a single Skill should cover so many sub-domains. **Status:** Open, under evaluation.

---

## 2. Community Demand Trends

### Most-Anticipated Skill Directions (from Issues)

| Demand Area | Signal Strength | Representative Issue |
|---|---|---|
| **Org-wide Skill Sharing & Distribution** | 🔥🔥🔥🔥🔥 | Issue #228 (9 comments, 7 👍) — Users want shared Skill libraries, not manual .skill file sharing via Slack |
| **Skills Ecosystem Security** | 🔥🔥🔥🔥 | Issue #492 (4 comments) — Trust boundary abuse: community Skills distributed under `anthropic/` namespace impersonate official Skills |
| **Evaluation & Testing Infrastructure** | 🔥🔥🔥🔥 | Issue #556 (6 comments, 6 👍) — `run_eval.py` has 0% trigger rate; the entire evaluation pipeline is broken |
| **Plugin/Skill Boundaries** | 🔥🔥🔥 | Issue #189 (6 comments, 8 👍) — `document-skills` and `example-skills` plugins load identical content, causing duplicates |
| **Enterprise/SSO Authentication** | 🔥🔥🔥 | Issue #532 (2 comments) — Skill tools requiring `ANTHROPIC_API_KEY` exclude enterprise SSO users entirely |
| **MCP/API Exposure** | 🔥🔥 | Issue #16 (4 comments) — Demand for exposing Skills as MCP tools for programmatic use |

**Key insight:** The community's loudest demand is *not* for new Skills — it's for **infrastructure**: sharing, security, evaluation, and authentication. The ecosystem is maturing past content creation into distribution and governance.

---

## 3. High-Potential Pending Skills

These active-comment PRs are likely to land in the near future:

| Skill | PR | Lead Author | Why It'll Land Soon |
|---|---|---|---|
| **AURELION Skill Suite** (kernel, advisor, agent, memory) | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | Sophisticated cognitive framework; maintainer interest in structured thinking |
| **AppDeploy** (full-stack deployment) | [#360](https://github.com/anthropics/skills/pull/360) | avimak | Hands-off web app deployment is a clear value-add; low barrier to validation |
| **shodh-memory** (persistent context) | [#154](https://github.com/anthropics/skills/pull/154) | varun29ankuS | Addresses a core Claude Code limitation: no cross-conversation memory |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | amitlals | Enterprise tabular model integration; strong use case for business data |
| **Sensory (macOS AppleScript Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Native macOS automation without screenshot-based computer use — novel approach |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is shifting from "what Skills can do" to "how Skills are governed" — with infrastructure, security, evaluation, and distribution surfacing as the binding constraints limiting Skill adoption at scale.**

---

# Claude Code Community Digest — 2026-05-09

## Today's Highlights
Two patch releases (v2.1.136 and v2.1.137) landed, with the latter fixing a VSCode extension activation failure on Windows. Community attention remains focused on MCP authentication issues across platforms, with several new bugs around OAuth flows and persistent connection problems. A long-running subscription downgrade bug (#41581) continues to generate significant community heat with 36 comments.

## Releases
**v2.1.137** (latest)
- Fixed VSCode extension failing to activate on Windows

**v2.1.136**
- Added `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` environment variable to re-enable session quality surveys for enterprise customers using OpenTelemetry
- Added `settings.autoMode.hard_deny` — auto mode classifier rules that block unconditionally regardless of user intent or allowance

## Hot Issues

1. **[#41581 — Max subscription downgraded to Free plan without action](https://github.com/anthropics/claude-code/issues/41581)** (36 comments, 8 👍)
   High-severity billing bug where users on Max plans find themselves silently downgraded to Free. Community frustration is high; no root cause confirmed yet after 5 weeks open.

2. **[#12506 — Feature Request: Execute commands in WSL instead of Windows](https://github.com/anthropics/claude-code/issues/12506)** (29 comments, 112 👍)
   The most-upvoted open feature request. Windows developers overwhelming want native WSL integration for shell commands, suggesting this is a major onboarding blocker for the platform.

3. **[#12705 — AGPLv3 license blocked by content filtering policy](https://github.com/anthropics/claude-code/issues/12705)** (16 comments, 8 👍)
   Ongoing controversy about overzealous content filtering. Community finds it ironic that generating a standard open source license triggers safety policies — persists since November 2025.

4. **[#52924 — TUI duplicates rendered text in scrollback](https://github.com/anthropics/claude-code/issues/52924)** (9 comments, 6 👍)
   Usability regression affecting long sessions (300k+ tokens). Text duplication makes output unreadable; affects both Windows and Linux.

5. **[#50466 — SIGILL crash on older Intel Macs (Ivy Bridge)](https://github.com/anthropics/claude-code/issues/50466)** (16 comments, 3 👍 — closed)
   Regression in 2.1.113 introduced AVX2 instruction dependency, crashing users on pre-2013 hardware. Fixed in a subsequent release.

6. **[#42359 — VSCode MCP Authenticate button doesn't open browser on macOS](https://github.com/anthropics/claude-code/issues/42359)** (7 comments, 6 👍)
   MCP OAuth flow is broken in the VSCode extension on macOS, blocking authentication for remote MCP servers. Affects enterprise workflows.

7. **[#51462 — ESC+ESC rewind breaks input handler](https://github.com/anthropics/claude-code/issues/51462)** (6 comments, 7 👍)
   Keyboard input completely stops responding after entering/leaving rewind mode. Requires full restart to recover.

8. **[#44657 — Subagent Write tool rejects certain .md filenames](https://github.com/anthropics/claude-code/issues/44657)** (5 comments, 8 👍)
   Subagents cannot write files named "report.md", "summary.md", etc. Overly aggressive heuristic with no opt-out — annoying for documentation workflows.

9. **[#45551 — MCP OAuth corrupts credential store, logs out of Team plan](https://github.com/anthropics/claude-code/issues/45551)** (3 comments)
   Critical auth bug: authenticating an MCP server can corrupt the shared credential store, logging the user out of all sessions. Brutal for team deployments.

10. **[#57365 — Claude in Chrome infinite OAuth retry loop](https://github.com/anthropics/claude-code/issues/57365)** (5 comments)
    Persistent 403 triggers infinite re-authentication, causing side panel flicker and forced logout. Impairs browser automation workflows.

## Key PR Progress

1. **[#56784 — Pin GitHub Actions to commit SHAs](https://github.com/anthropics/claude-code/pull/56784)** (closed)
   Supply-chain hardening by pinning third-party actions to immutable commit hashes. A security best practice for CI.

2. **[#57267 — Fix pagination in stale issue auto-close sweep](https://github.com/anthropics/claude-code/pull/57267)** (open)
   Adds paginated GitHub API helper so stale issue bot processes all open issues, not just the first page. Fixes incomplete auto-closure.

3. **[#57199 — Use --body-file to preserve newlines in code review summary](https://github.com/anthropics/claude-code/pull/57199)** (open)
   Fixes shell escaping bug in the code-review skill where multi-line `gh pr comment` payloads would break due to unescaped newlines.

4. **[#57190 — Remove 'statsig.anthropic.com' from firewall script](https://github.com/anthropics/claude-code/pull/57190)** (open)
   Removes a now-unresolvable DNS entry from the firewall configuration. Minor cleanup for enterprise network setups.

5. **[#57223 — Add Superpowers Process Gate to frontend-design skill](https://github.com/anthropics/claude-code/pull/57223)** (closed)
   Adds a structured methodology (brainstorm → plan → visual TDD → review) before implementation begins in the frontend design skill.

6. **[#57333 — Update README.md](https://github.com/anthropics/claude-code/pull/57333)** (open)
   Documentation update; details not specified in PR description.

7. **[#34735 — Update CI actions](https://github.com/anthropics/claude-code/pull/34735)** (open)
   Ongoing CI infrastructure maintenance. Open since March 2026.

8. **[#14842 — Update documentation links to new Claude Code site](https://github.com/anthropics/claude-code/pull/14842)** (open)
   Documentation housekeeping — redirects old links to the current documentation site. Open since December 2025.

## Feature Request Trends

1. **WSL/Native Windows integration** (#12506, 112 👍) — The top-requested feature. Windows developers want Claude Code to execute shell commands inside WSL rather than CMD/PowerShell by default.

2. **Message queue mode** (#50246, 18 👍) — Users want the ability to queue follow-up messages while Claude is working, instead of being forced to interrupt active tasks.

3. **Configurable memory/CLAUDE.md paths in Cowork mode** (#44098) — Power users want to customize where memory and rules files live when using multi-agent Cowork sessions.

4. **Hooks for assistant text output** (#37243) — Developers want PreResponse/PostResponse hooks to enforce style constraints (e.g., "no filler messages") that can't be enforced with existing tool-call-only hooks.

5. **Bedrock AWS profile isolation** (#39826) — Teams using Amazon Bedrock want a dedicated env variable to specify which AWS profile to use, separate from the default credential chain.

## Developer Pain Points

1. **MCP auth fragility** — Multiple high-severity bugs (#42359, #45551, #45875, #57365) point to a brittle MCP authentication system. The credential store corruption bug (#45551) is especially concerning for team/enterprise users.

2. **Windows ecosystem gaps** — Beyond the WSL request, Windows users face VSCode extension failures (#41581), TUI rendering issues (#52924), and Chrome extension connectivity problems (#57351). The platform still feels second-class.

3. **Content filtering overreach** — Being unable to generate AGPLv3 licenses (#12705) or block filenames like "report.md" (#44657) indicates safety classifiers are too aggressive and lack escape hatches.

4. **CLAUDE.md drift after compaction** — Issue #48959 proposes an interesting hypothesis: the problem isn't content loss but positioning — CLAUDE.md is reloaded correctly but the model's attention shifts after context is compacted. This suggests a model-level fix, not a product bug.

5. **Subscription/billing transparency** — The silent Max→Free downgrade (#41581) and API usage calculation complaints (#57521, reporting 1% quota consumed for a "hi" message) erode trust in billing logic.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-09

## Today's Highlights
The Codex team shipped a new `rust-v0.130.0` release with enhanced plugin sharing (link metadata, discoverability controls) and a new `codex remote-control` headless server mode. The community is heavily discussing a long-standing GPU access feature request in the sandbox (#3141, 35 comments), while developers report increasing friction with Windows sandbox and WSL worktree path mismatches. Several internal PRs are re-architecting metadata handling and TUI startup to address performance and subagent reliability.

---

## Releases
- **rust-v0.130.0** — Production release: Plugin details now show bundled hooks; plugin sharing exposes link metadata and discoverability controls. Added `codex remote-control` as a simpler entrypoint for starting a headless, remotely controllable app-server. App-server clients can now leverage these capabilities.
- **rust-v0.131.0-alpha.1** — Alpha pre-release, changelog not detailed.
- **rust-v0.130.0-alpha.4 / .5 / .7 / .10** — Various alpha iterations, no detailed change logs provided.

---

## Hot Issues (Top 10)

1. **[#3141 — Allow GPU access inside sandbox](https://github.com/openai/codex/issues/3141)**  
   *35 comments, 43 👍* — Long-running request (since Sep 2025) to enable NVIDIA GPU passthrough in the Linux sandbox. High community engagement signals strong demand for ML workflows. Still open with no official response milestone.

2. **[#20552 — View > Toggle File Tree unreliable on macOS](https://github.com/openai/codex/issues/20552)**  
   *28 comments, 7 👍* — Users report the menu action does not reliably reveal the file tree in the desktop app. Persistent UI regression affecting common navigation workflows.

3. **[#10726 — Codex CLI scroll issue on Windows/WSL](https://github.com/openai/codex/issues/10726)**  
   *27 comments, 12 👍* — Terminal scrolling broken in CLI on Windows using WSL with gpt-5.2. Affects Pro subscribers, suggests platform-specific TUI rendering bugs.

4. **[#13762 — WSL mode uses Windows CODEX_HOME path for worktrees](https://github.com/openai/codex/issues/13762)**  
   *21 comments, 26 👍* — Critical cross-filesystem bug: Windows desktop in WSL mode stores worktrees on `/mnt/c` instead of the native Linux filesystem, causing performance and permission issues. High community anger.

5. **[#6498 — Refresh token was already used](https://github.com/openai/codex/issues/6498)**  
   *19 comments, 6 👍* — Closed bug: idle sessions fail after a few days due to stale refresh tokens. Impact on long-running development sessions. Already resolved but frequently referenced.

6. **[#12115 — Dynamically loading nested AGENTS.md](https://github.com/openai/codex/issues/12115)**  
   *15 comments, 46 👍* — Feature request for on-demand AGENTS.md loading (like Claude Code's CLAUDE.md). Very high upvotes relative to comment count — strong silent demand. Assigned to internal engineers.

7. **[#19910 — Goals: continuation prompt lost after mid-turn compaction](https://github.com/openai/codex/issues/19910)**  
   *13 comments, 0 👍* — New goals feature (loved by users) has a critical bug: active goal continuation prompts and audit requirements vanish during context compaction. Filed by a power user with detailed reproduction.

8. **[#21671 — /compact fails with unknown service_tier parameter](https://github.com/openai/codex/issues/21671)**  
   *10 comments, 3 👍* — Regression in 0.129.0: `/compact` command broken due to API parameter mismatch. Closed quickly but affects all users on latest stable.

9. **[#21527 — Codex is really too slow](https://github.com/openai/codex/issues/21527)**  
   *7 comments, 3 👍* — Broad performance complaint covering both VS Code extension and desktop app. Model response latency and UI sluggishness impacting daily use on Windows.

10. **[#14356 — Dedicated reasoning-depth hotkeys](https://github.com/openai/codex/issues/14356)**  
    *6 comments, 9 👍* — Request for fast reasoning-depth switching without `/models` menu. Includes detailed UI/UX proposal for non-semantic depth meter and turn-safe switching.

---

## Key PR Progress (Top 10)

1. **[#21853 — daemon: refresh updater after validated binary rollout](https://github.com/openai/codex/pull/21853)**  
   Fixes updater running stale binary after self-update. Ensures the background updater process restarts with the newly installed version. Prevents version drift.

2. **[#21778 — Route Python SDK turn notifications by ID](https://github.com/openai/codex/pull/21778)**  
   (Closed) Removes single-turn guard in Python SDK transport, enabling concurrent streaming of multiple active turns. Critical for subagent fan-out scenarios from Python clients.

3. **[#21844 — Ignore stale /tmp git markers in project discovery](https://github.com/openai/codex/pull/21844)**  
   Fixes false detection of git repos in world-writable directories like `/tmp`. Real repos beneath `/tmp/repo` still honored. Includes regression test coverage.

4. **[#21874 — Move live thread metadata handling above recorder](https://github.com/openai/codex/pull/21874)**  
   Architectural change: wires `LiveThread` to own metadata handler, simplifies `LocalThreadStore` live writer paths. Removes recorder-owned SQLite metadata sync — important for thread reliability.

5. **[#21875 — compact network context rendering](https://github.com/openai/codex/pull/21875)**  
   (Closed) Optimizes prompt budget by compressing domain allow/deny lists into compact format instead of verbose repeated XML tags. Improves prompt efficiency for large domain policy sets.

6. **[#21867 — Add role-aware plugin share context APIs](https://github.com/openai/codex/pull/21867)**  
   (Closed) Exposes discoverability controls and share principals in plugin sharing. Carries roles through save/update flows. Enables fine-grained plugin permissions.

7. **[#21870 — Avoid blocking TUI on agent metadata hydration](https://github.com/openai/codex/pull/21870)**  
   Fixes [#16688](https://github.com/openai/codex/issues/16688): TUI no longer blocks on synchronous metadata reads during subagent fan-out. Improves responsiveness in multi-agent workflows.

8. **[#21854 — Preserve empty JSON schemas for tool parameters](https://github.com/openai/codex/pull/21854)**  
   Fixes sanitizer bug that converted empty schema `{}` into `{ "type": "string" }`. Affected MCP and dynamic tools with unconstrained parameters. Prevents false parameter validation errors.

9. **[#21860 — Persist /goal commands in history](https://github.com/openai/codex/pull/21860)**  
   Simple UX fix: `/goal` slash-command now saved to TUI history, allowing recall. Addressed user complaint about missing previous goal commands.

10. **[#18202 — feat(sandbox): add Windows deny-read parity](https://github.com/openai/codex/pull/18202)**  
    Long-running PR (since April) to enforce filesystem deny-read policies on Windows using subprocess ACL targets. Completes cross-platform sandbox parity. Still open, significant Windows security improvement.

---

## Feature Request Trends

- **Sandbox GPU access** (#3141, 43 👍) remains the single most-demanded sandbox enhancement, with no official commitment.
- **Dynamic AGENTS.md loading** (#12115, 46 👍) — on-demand configuration file loading to avoid polluting context, mirroring competitive tools.
- **Dedicated reasoning-depth UI** (#14356, 9 👍) — hotkeys, visual depth meter, safe mid-turn switching for power users.
- **Multitasking agents** (#20721) — agents should launch concurrent tests/tasks instead of sequential blocking.
- **Outlook personal account linking** (#20633, 9 👍) — blocked authentication for Microsoft personal accounts.
- **Writable gitdir in sandboxed workspace-write mode** (#14338, 9 👍) — `.git` directory writability for sandboxed Git operations.

---

## Developer Pain Points

1. **Windows/WSL filesystem confusion** — Multiple bugs (#13762, #10726, #21872) around path resolution, WSL worktree storage on `/mnt/c`, and npm `EPERM` errors during self-update. WSL users face persistent integration friction.

2. **Performance degradation** — Generic slowness complaints (#21527) across app and extension, plus specific latency from agent metadata hydration (#21870). Users report degraded daily experience.

3. **Session and state loss** — Token refresh failures (#6498), archived thread deep links failing silently (#18216), and goal continuation prompts lost during compaction (#19910). Core reliability issues affecting long sessions.

4. **Chrome extension & browser automation instability** — Multiple Windows reports (#21670, #21876, #21705, #21700) of Chrome plugin handshake timeouts, wrong backend routing, and missing offline installers. Browser automation remains Windows weak spot.

5. **MCP integration gaps** — Tools not exposed despite successful server start (#21881), inconsistent PreToolUse hook coverage across tool handlers (#20204). Plugin/MCP ecosystem still maturing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-05-09

## Today's Highlights
No new releases were published in the last 24 hours, but the community remains highly engaged with 50 open issues and 50 pull requests updated. A significant cluster of reports centers on persistent "still on it" hangs and model retry loops, suggesting a critical reliability concern in the agentic core. Meanwhile, contributions continue to address telemetry configuration, terminal UX, and tool governance.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues
1. **#23838 – Gemini 3.1 Pro model unavailable for Google AI Plus subscribers**  
   *10 comments, 9 👍*  
   A paying subscriber reports that the advertised 3.1 Pro model is inaccessible despite a valid subscription. This undermines trust in tier promises and has drawn significant community attention.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23838)

2. **#20142 – Ctrl+R chat history search missing in AskUser**  
   *9 comments*  
   Users accustomed to shell-like history search (Ctrl+R) find the absence a major workflow friction. The request has been open since February, with no fix landed.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/20142)

3. **#23540 – Indefinite "This is taking a bit longer, we're still on it."**  
   *9 comments, 1 👍*  
   A vague hang message that provides no diagnostic cues. Multiple duplicates suggest this is a systemic issue rather than a one-off.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23540)

4. **#23762 – Gemini 3.1 Pro model keeps retrying and is unusable**  
   *8 comments, 3 👍*  
   The model enters an infinite retry loop, rendering the CLI unusable. Users suspect a backend regression.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23762)

5. **#23698 – Indefinite hang without API/Rate-Limit errors**  
   *6 comments, 1 👍*  
   User reports hangs lasting over an hour with no visible bottleneck—no API errors, no rate-limit warnings. Suggests a stalling agent loop.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23698)

6. **#23837 – Agent deleted project directory contents in YOLO mode**  
   *4 comments*  
   A YOLO-mode incident where an autonomous cleanup script erased the entire project. Highlights the real risk of unconstrained agent execution and the need for safer rollback guarantees.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23837)

7. **#23688 – Google login fails with "Could not find operation..."**  
   *3 comments*  
   Fresh install of CLI 0.34.0 on multiple machines fails to complete OAuth login. Blocks all new users from getting started.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23688)

8. **#23535 – CLI exits silently on wrong API key**  
   *4 comments*  
   First-time users receive a raw error and process termination with no guidance. Considered a poor onboarding experience.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23535)

9. **#23721 – Annoying Gemini 3 Preview auto-selection for Code Assist users**  
   *3 comments*  
   Enterprise users on Code Assist plans are forced into preview channels they explicitly don't want, causing model mismatch surprises.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23721)

10. **#23846 – Browser agent triggers Google anti-bot page**  
    *2 comments, 1 👍*  
    The built-in browser agent hits Google's own CAPTCHA when performing web searches, creating a paradox where the tool becomes self-blocking.  
    [View Issue](https://github.com/google-gemini/gemini-cli/issues/23846)

---

## Key PR Progress
1. **#26698 – Fix telemetry quota_project_id injection**  
   Prevents fallback to default OAuth client when exporting traces. Critical for enterprise deployments using GCP quotas.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26698)

2. **#25920 – Debounce TTY loss check on Windows**  
   Fixes false-positive exits on Windows terminals where `isTTY` momentarily flickers. Now closed and merged.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25920)

3. **#26179 – Allow removal of invalid workspace directories**  
   Adds the ability to remove directories from workspace context at runtime—previously an irreversible operation.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26179)

4. **#26358 – Exit shell mode with backspace on empty input**  
   Intuitive UX improvement: pressing Backspace on an empty shell-mode input exits the mode, matching user expectation.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26358)

5. **#25947 – Versioned pre-write backups with agent-driven restore**  
   Introduces a transactional file backup system to protect against destructive modification loops—a direct response to YOLO-mode risks.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25947)

6. **#25915 – Route /compress through local Ollama model**  
   Offloads chat-compression summarization to a local model (e.g., Gemma3:4b), reducing API cost and latency for long sessions.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25915)

7. **#26084 – Limit enabled tools to 128 (fix 400 error)**  
   Implements `smartLimitTools` to cap function declarations at 128, prioritizing built-in tools and the most recently used custom ones. A hard fix for a common 400 Bad Request error.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26084)

8. **#23946 – Prevent compression endless loop in agentic sessions**  
   Fixes the "Ralph loop" where repeated `processTurn` calls triggered infinite auto-compression. Now closed and merged.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/23946)

9. **#26618 – Add `/fork` session branching command**  
   Enables forking a session into a new ID, allowing parallel exploration without last-write-wins corruption.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26618)

10. **#26322 – Sanitize keychain error messages**  
    Wraps native keychain calls to prevent leakage of sensitive data in error logs. Security hardening for enterprise environments.  
    [View PR](https://github.com/google-gemini/gemini-cli/pull/26322)

---

## Feature Request Trends
- **Session management & history** – High demand for session forking (`/fork`), persistent chat history search (Ctrl+R), and per-project context that survives restarts.
- **Git and VCS integration** – Multiple proposals for a native GitTool with structured JSON output, plus better agent reasoning about commit/diff operations.
- **Agent steering & persona hot-swapping** – Users want to dynamically adopt agent definitions (personas, tool sets) mid-session rather than restarting.
- **Multi-model evaluation** – GSoC proposals for comparative eval runners and log-to-eval conversion tools to systematically test model behavior.
- **Local model support** – Growing interest in routing sub-tasks (compression, summarization) to local LLMs for reduced cost and latency.
- **Cloud-native MCP auth** – Enterprise users request native GCP Cloud Run and Cloud Workstation OAuth support for MCP server connections.

---

## Developer Pain Points
- **Persistent "still on it" hangs** – The most common and recurring complaint; multiple issues (#23540, #23698, #23627) describe agents stalling indefinitely without any error output, often for 30+ minutes.
- **Model retry loops** – Gemini 3.1 Pro (#23762) and other models enter infinite retry cycles, consuming quota and blocking sessions.
- **YOLO-mode safety** – Several users report destructive actions (deleted directories, rogue scripts) in YOLO mode, with no easy rollback path.
- **Silent failures & poor onboarding** – Wrong API keys cause bare error exits (#23535); OAuth login fails without actionable guidance (#23688); bad prompts produce opaque "badRequest" errors (#23670).
- **Tool limit errors** – 128-tool ceiling cause 400 errors (#26084), forcing users to disable extensions arbitrarily.
- **Anti-bot self-blocking** – The browser agent triggers Google's own CAPTCHA (#23846), creating an ironic dead end for legitimate users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-09

## Today's Highlights
A new stable release (v1.0.44) dropped yesterday with improved slash command handling and hook flexibility, while pre-release build installation issues and a silent CLI crash on macOS have caught the community's attention. MCP agent connectivity in non-interactive contexts and BYOK provider compatibility continue to dominate bug reports.

---

## Releases

### [v1.0.44](https://github.com/github/copilot-cli/releases/tag/v1.0.44) — 2026-05-08
- **Path completion** in `/add-dir` no longer flickers or conflicts with `@` and `#` pickers
- **Slash commands** can now appear mid-input; multiple skills can be invoked in a single message
- **`userPromptSubmitted` hooks** can now bypass the LLM entirely, returning a custom response directly

### [v1.0.44-3](https://github.com/github/copilot-cli/releases/tag/v1.0.44-3) — 2026-05-08
- Faster `/user list` and `/user switch` for multi-account users
- Additional `userPromptSubmitted` hook improvements (same as above)

---

## Hot Issues (Top 10)

### #2630 — [OPEN] [area:non-interactive, area:agents, area:mcp] Custom agent `mcp-servers` not connected in CLI sub-agent or `--prompt` contexts
**Summary:** Custom agents with `mcp-servers` in YAML frontmatter lose MCP tool connections when used as sub-agents via `task` tool or in `--prompt` mode. Only basic tools (`view`, `sk`) remain available.
**Why it matters:** Blocks multi-agent workflows that depend on MCP-provided capabilities — a core use case for enterprise agent orchestration.
**Community reaction:** 6 comments, 0 👍 — author is actively discussing with maintainers.
**Link:** [github/copilot-cli#2630](https://github.com/github/copilot-cli/issues/2630)

### #3202 — [CLOSED] [invalid] `https://<subdomain>.githubusercontent.com/`
**Summary:** An invalid/spam issue reporting a generic GitHubusercontent URL. Quickly closed.
**Why it matters:** Illustrates the ongoing noise-to-signal ratio maintainers must manage.
**Community reaction:** 6 comments (mostly triage discussion), 1 👍.
**Link:** [github/copilot-cli#3202](https://github.com/github/copilot-cli/issues/3202)

### #2543 — [OPEN] [area:sessions, area:agents] Concurrent sub-agent events corrupt session state — `"tool_use ids were found without tool_result blocks"`
**Summary:** When multiple sub-agents fire events concurrently, session state becomes permanently corrupted, producing a 400 error on every subsequent message.
**Why it matters:** A critical reliability bug for anyone building multi-agent pipelines — once corrupted, sessions are unrecoverable.
**Community reaction:** 4 comments, 2 👍 — high signal from power users.
**Link:** [github/copilot-cli#2543](https://github.com/github/copilot-cli/issues/2543)

### #1412 — [OPEN] [area:platform-windows] PowerShell tools trigger security alerts
**Summary:** Elastic's built-in security rule catches Copilot CLI's PowerShell tool usage, causing false-positive security alerts that Security Operations teams escalate to users.
**Why it matters:** Creates friction for enterprise adoption on Windows — users waste time justifying AI tool usage to secops.
**Community reaction:** 3 comments, 3 👍 — consistent community interest.
**Link:** [github/copilot-cli#1412](https://github.com/github/copilot-cli/issues/1412)

### #1433 — [OPEN] [area:context-memory, area:configuration] `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` not working with NFS paths
**Summary:** Custom AGENTS.md files placed on NFS drives outside the project hierarchy are ignored when `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` points to them — works only with local filesystem paths.
**Why it matters:** Breaks shared/centralized agent instruction workflows common in enterprise teams.
**Community reaction:** 3 comments, 6 👍 — highest 👍 count among open issues.
**Link:** [github/copilot-cli#1433](https://github.com/github/copilot-cli/issues/1433)

### #3189 — [OPEN] [area:non-interactive] `copilot -p` exits 1 silently with no output on macOS (v1.0.44-1)
**Summary:** Non-interactive mode `copilot -p` immediately exits with code 1, producing zero stdout/stderr and no log file. Interactive mode works fine.
**Why it matters:** A regression that breaks CI/CD or automated scripting uses of the CLI.
**Community reaction:** 3 comments, 0 👍 — recently opened, still under investigation.
**Link:** [github/copilot-cli#3189](https://github.com/github/copilot-cli/issues/3189)

### #3200 — [OPEN] [area:agents] Feature: `/delegate` without committing and pushing local changes
**Summary:** Current `/delegate` workflow forces a commit+push before delegation. User wants an `uncommitted` subcommand to delegate without version control interaction.
**Why it matters:** Delegating in-progress work is a common developer pattern — forcing commits pollutes history.
**Community reaction:** 3 comments, 0 👍 — clean request with clear use case.
**Link:** [github/copilot-cli#3200](https://github.com/github/copilot-cli/issues/3200)

### #3195 — [OPEN] [area:models] `AssistantReasoningEvent` not triggered with BYOK providers due to `reasoning` vs `reasoning_content` field mismatch
**Summary:** When using BYOK with vLLM, reasoning content is returned in the `reasoning` field, but Copilot CLI only checks `reasoning_content`, causing no events to fire.
**Why it matters:** Blocks reasoning-aware features for BYOK users on certain OSS model providers.
**Community reaction:** 2 comments, 1 👍 — affects an increasing number of custom model deployments.
**Link:** [github/copilot-cli#3195](https://github.com/github/copilot-cli/issues/3195)

### #3049 — [OPEN] [area:permissions, area:tools] Failure to write to file when asking for a plan only
**Summary:** Consistent write/edit failures when users ask Copilot to "create a plan but don't make changes yet" — permission flow breaks for read-only planning.
**Why it matters:** A core workflow pattern (plan-first, apply-later) is broken, reducing trust in the agent.
**Community reaction:** 2 comments, 1 👍.
**Link:** [github/copilot-cli#3049](https://github.com/github/copilot-cli/issues/3049)

### #3208 — [OPEN] [area:models, area:configuration] BYOK Azure: `wire_api: completions` ignored; hardcoded `api-version` rejected
**Summary:** When configured to use Azure completions API, CLI ignores `wire_api` and sends to Responses API endpoint instead. Also sends a stale `api-version` parameter.
**Why it matters:** Breaks Azure BYOK entirely for customers whose deployments don't support the Responses API schema.
**Community reaction:** 1 comment, 0 👍 — just opened, but high impact.
**Link:** [github/copilot-cli#3208](https://github.com/github/copilot-cli/issues/3208)

---

## Key PR Progress

### #2800 — [OPEN] Add initial devcontainer configuration
**Summary:** Proposes a `.devcontainer` setup for contributor development environments.
**Why it matters:** Lowers the barrier for community contributions by standardizing the dev environment.
**Link:** [github/copilot-cli#2800](https://github.com/github/copilot-cli/pull/2800)

### #3199 — [OPEN] Update Homebrew installation commands for copilot-cli
**Summary:** Updates documentation to reflect the official Homebrew cask paths (`copilot-cli` and `copilot-cli@prerelease`) which were recently moved.
**Why it matters:** Corrects stale installation docs — important for macOS users.
**Link:** [github/copilot-cli#3199](https://github.com/github/copilot-cli/pull/3199)

---

## Feature Request Trends

1. **Delegation flexibility:** Multiple requests for `/delegate` to work without committing/pushing, plus more granular control over what is delegated (uncommitted changes, partial work areas).
2. **Session and timeline improvements:** Requests for searchable timeline history, session state persistence, and non-destructive navigation through past interactions (similar to tmux `ctrl-b [` mode).
3. **External model provider API surface:** Users want clearer configuration flags and env vars for BYOK and external model providers — currently confusing to distinguish from VS Code extension APIs.
4. **Custom status line and footer extensibility:** The ability to execute custom commands in the footer (`statusLine.command`) is broken when `footer.showCustom=true`, but the underlying demand for custom status display is clear.
5. **preAgentStop hook:** A deterministic hook to validate or finalize an agent's work before it returns control to the user — for ensuring cleanup, validation, or state consistency.

---

## Developer Pain Points

- **Security/compliance friction on Windows:** Elastic and other SIEM tools flag PowerShell tool invocations as suspicious, forcing developers into secops conversations. Needs official guidance or tool-level mitigation.
- **MCP connectivity in sub-agents is broken:** Custom agents lose MCP tool connections in non-interactive or sub-agent contexts, undermining the multi-agent architecture that MCP was designed to enable.
- **Session corruption under concurrency:** Multi-agent pipelines risk permanent session corruption from concurrent `tool_use` events — a hard-to-debug reliability issue.
- **BYOK provider inconsistency:** Reasoning field naming mismatches and Azure API version hard-coding create unpredictable failures for users running custom or self-hosted models.
- **Non-interactive mode silent failures:** `copilot -p` returning exit code 1 with zero diagnostic output on macOS v1.0.44-1 erodes trust in CI/CD use cases — users have no path to debug without verbose logging options.
- **Custom instructions path limitations:** NFS/network-mounted instruction directories are unsupported, forcing enterprise teams to duplicate instructions across machines or patch the tool.
- **Terminal rendering regressions:** Emoji table misalignment and markdown link rendering in tables were "fixed" in v1.0.32 but have regressed in v1.0.43 — a frustrating pattern for users who track these edge cases.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-05-09

---

## 1. Today's Highlights
Windows stability remains the dominant theme, with multiple critical bugs reported for v1.41.0 covering PowerShell incompatibility, missing `fcntl` module crashes, and blank FileVersionInfo. Several targeted fixes are now in PR—notably a proposed switch to git-bash as the default Shell backend and adaptive shell timeout handling. Additionally, a flurry of feature requests around persistent agent conventions and context file management signals growing demand for robust multi-project and history restoration workflows.

---

## 2. Releases
No new releases in the last 24 hours. Latest stable is **v1.41.0**.

---

## 3. Hot Issues
1. **#2152 – Support global `~/.kimi/AGENTS.md` for multi-project shared conventions**
   *Created by lNeverl | 👍 2 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2152)*
   Requests loading AGENTS.md from a global path alongside the project-local one. The pain of maintaining 10+ projects with shared rules was highlighted. Strong community support with 3 comments.

2. **#2165 – Invalid tool call corrupts the whole session**
   *Created by RightL | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2165)*
   Malformed JSON in historical tool calls causes cascading failures across subsequent turns. Affects users self-hosting vllm with Kimi-K2.6, as the provider replay mechanism rejects the session history entirely. Being addressed in PR #2196.

3. **#2178 – Windows: `kimi.exe` v1.41.0 has blank FileVersionInfo, rejected by VS Code**
   *Created by Kafshi3239sty | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2178)*
   Missing file metadata prevents VS Code extension activation. A simple build pipeline fix needed for the Windows binary.

4. **#2189 – Plan mode causes garbled text on next interaction**
   *Created by LambertXia | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2189)*
   Windows VSCode users report encoding issues after enabling Plan mode with Kimi 2.6 model. No workaround currently documented.

5. **#2204 – `/clear` rotates context file with no way to restore history**
   *Created by mzjsbql-web | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2204)*
   While context rotation preserves history on disk, there is no CLI command to reload a rotated context. This UX gap forces users to manually manipulate `.jsonl` files.

6. **#2203 – `AuthlibDeprecationWarning` on every startup with MCP servers**
   *Created by wufantj | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2203)*
   Deprecation warnings clutter logs for users with MCP servers. A minor but noisy defect affecting developer experience on macOS.

7. **#2202 – `kimi term` crashes on Windows due to missing `fcntl` module**
   *Created by LiPingFeel | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2202)*
   A Unix-only module causes a hard crash on Windows, followed by a secondary rendering error. High-impact for Windows users of the terminal mode.

8. **#2195 – Shell command timeout is rigid (60s) and not configurable**
   *Created by lNeverl | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2195)*
   Long-running commands (e.g., builds, git operations) hit the 60s hard limit. No adaptive timeout or user-configurable value exists. Being addressed in PR #2200.

9. **#2194 – Agent generates PowerShell 7.x syntax incompatible with default PowerShell 5.x**
   *Created by lNeverl | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2194)*
   The model frequently emits modern PowerShell constructs (`ForEach-Object -Parallel`, `Select-String -Raw`) that fail on Windows 10's default PS 5.x. A major friction source for Windows adoption.

10. **#2191 – StrReplaceFile silently converts CRLF to LF on Windows**
    *Created by lNeverl | 👍 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2191)*
    Related to unmerged PR #1953. File edits silently switch line endings, forcing agents to use Python workarounds. Blocks reliable file editing in Windows git repos with `autocrlf=true`.

---

## 4. Key PR Progress
1. **#2196 – `fix(kosong): sanitize malformed history tool calls`**
   *Creator: he-yufeng | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2196)*
   Directly fixes #2165. Adds validation to strip malformed `function.arguments` before replaying session history. Keeps fix at the provider layer to avoid disrupting other components.

2. **#2200 – `fix(shell): adapt timeouts for long commands`**
   *Creator: he-yufeng | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2200)*
   Automatically extends shell timeout for patterns like `git clone`, package installs, and builds. Normal commands retain the 60s default. Preserves explicit user-supplied timeouts.

3. **#2186 – `refactor(windows): switch Shell backend from PowerShell to git-bash`**
   *Creator: 7Sageer | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2186)*
   Radical fix for Windows cross-compatibility: replaces PowerShell with Git Bash as default backend. Resolves #1618 and #1855. If merged, may eliminate the PS 5.x vs 7.x issue entirely.

4. **#2199 – `fix(kaos): avoid console windows on Windows exec`**
   *Creator: he-yufeng | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2199)*
   Fixes #2197 by using `CREATE_NO_WINDOW` flag for Kaos subprocesses on Windows, preventing pop-up console windows. Includes targeted unit tests.

5. **#2198 – `fix(acp): defer available commands update to prevent race condition`**
   *Creator: nelsonBlack | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2198)*
   Fixes a v1.41.0 regression where slash commands don't appear in CLI because the ACP server sends `available_commands_update` before client setup completes.

6. **#2183 – `fix(shell): attach dropped image paths eagerly`**
   *Creator: he-yufeng | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2183)*
   Resolves #2182. Scans user input for local image paths and immediately reads them as `ImageURLPart`, preventing loss of temp-path references.

7. **#2177 – `fix(soul): clear partial UI output when LLM step is retried`**
   *Creator: 7Sageer | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2177)*
   After a failed streamed LLM call, partial content was concatenated with the retry output. This PR clears the aborted output before retrying.

8. **#2187 – `fix(deps): bump pillow to 12.2.0 for CVE-2026-25990`**
   *Creator: cryptobeijing | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2187)*
   Security patch for out-of-bounds write vulnerability when loading PSD images. Closes #2153. Blocks installations in security-tight environments.

9. **#2185 – `fix(acp): allow API-key based auth to bypass forced OAuth login`**
   *Creator: yogaxu | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2185)*
   ACP server (used by JetBrains IDE) forced OAuth even when API key was configured. This PR allows API key auth to bypass the login flow.

10. **#1972 – `feat(shell): visual context progress bar with color coding`**
    *Creator: xiaoye5200 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/1972)*
    Replaces plain-text `context: 0.0%` with a Unicode block progress bar with color coding (green → yellow → red). Still open; related issue #2188 consolidates feedback.

---

## 5. Feature Request Trends
1. **Global/Persistent Agent Conventions** – Multiple requests for `AGENTS.md` to be loadable from a global path (`~/.kimi/AGENTS.md`) or user home directory, enabling shared rules across projects without duplication.

2. **Context File History Management** – The `/clear` command provides no way to restore rotated history. Users want a restore/merge command for `.jsonl` backups to avoid data loss during long sessions.

3. **Configurable Shell Timeouts** – Rigid 60s timeouts fail for common long-running tasks (git operations, builds). Adaptive or user-configurable timeouts are needed.

4. **Windows Native Support** – From PowerShell syntax mismatches to CRLF handling, there is a clear push for first-class Windows experience. The git-bash backend proposal (#2186) is noteworthy here.

5. **Visual Feedback Improvements** – The context progress bar proposal (#1972, #2188) reflects a desire for better visual cues for token usage and system state.

---

## 6. Developer Pain Points
**Windows CLI reliability** is the most painful area. Four critical bugs (#2178, #2202, #2194, #2191) directly block or degrade Windows usage, especially for PowerShell 5.x users and those with standard git `autocrlf=true` configuration. The missing `fcntl` module crash on startup is a hard block.

**Session corruption from malformed tool calls** (#2165) causes cascading failures that force session restarts—extremely disruptive for users with long-running conversations.

**Missing history restoration** after `/clear` (#2204) means users cautiously avoid clearing context to preserve state, limiting their ability to manage large sessions.

**Noisy startup logs** with deprecation warnings (#2203) degrade developer trust, especially with the `AuthlibDeprecationWarning` appearing every session.

Overall, the community's energy is split between fixing Windows-specific crashes and adding quality-of-life features for power users managing multiple projects and long sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-05-09

---

## Today's Highlights

A burst of server-side cleanup PRs from contributor **kitlangton** dominated today, fixing wire-format parity gaps, structured error handling, and test infrastructure in the HTTP API. On the community side, a long-running issue (#15585) about free model usage limits continues to attract attention, alongside renewed discussion of a GitHub-based agent marketplace (#7467). No new releases were published in the past 24 hours.

---

## Releases

No new releases in the last 24 hours. Latest stable version remains at **v1.2.15** for desktop/server and **v1.14.40** for web/desktop channels.

---

## Hot Issues

### 1. [Free Model Usage Exceed Error (#15585)](https://github.com/anomalyco/opencode/issues/15585)
**Status:** OPEN | **Comments:** 20 | **👍:** 7  
**Why it matters:** All three free models return "free usage exceed" for a user who ran 6-hour sessions. This raises questions about whether OpenCode enforces invisible rate limits on its free tier, impacting new users onboarding with zero-cost models.

### 2. [GitHub-based Agent Marketplace for Sharing Agents (#7467)](https://github.com/anomalyco/opencode/issues/7467)
**Status:** OPEN | **Comments:** 14 | **👍:** 8  
**Why it matters:** A top-voted feature request proposing a marketplace for sharing agents via GitHub repos. Currently, agent sharing requires manual file copying—this would dramatically reduce friction for team collaboration.

### 3. [Relative vs Absolute Path Mismatch in edit Permission (#20045)](https://github.com/anomalyco/opencode/issues/20045)
**Status:** OPEN | **Comments:** 9 | **👍:** 0  
**Why it matters:** A subtle but dangerous bug: `edit` permissions use relative paths while `external_directory` uses absolute paths, causing agent-level path rules to silently fail. Could lead to unexpected permission bypasses.

### 4. [TUI Session Picker Only Shows Recent Sessions (#13877)](https://github.com/anomalyco/opencode/issues/13877)
**Status:** OPEN | **Comments:** 7 | **👍:** 1  
**Why it matters:** The `/sessions` picker hardcodes a 30-day window, hiding older sessions from users with extensive histories. Related duplicate (#16270) confirms the same root cause—a TUI bootstrap cutoff limit.

### 5. [Configuration Request: Session Picker Limit (#20754)](https://github.com/anomalyco/opencode/issues/20754)
**Status:** OPEN | **Comments:** 4 | **👍:** 2  
**Why it matters:** A proposed `session_list_limit` setting for the TUI picker to replace the hardcoded 30-day window. The community wants configurable caps (default 150) to balance performance and usability.

### 6. [OAuth Callback Server Not Stopped After Auth (#23563)](https://github.com/anomalyco/opencode/issues/23563)
**Status:** OPEN | **Comments:** 4 | **👍:** 0  
**Why it matters:** The OAuth callback server (port 19876) remains bound after authentication completes, causing cross-instance CSRF errors when multiple TUI instances run concurrently. A security-sensitive bug affecting multi-session workflows.

### 7. [Plan Mode Allows File Changes (#10741)](https://github.com/anomalyco/opencode/issues/10741)
**Status:** OPEN | **Comments:** 4 | **👍:** 6  
**Why it matters:** Plan mode lacks a hard guard against filesystem writes—model compliance depends on the model following instructions. Community suggests separate "plan" and "build" user accounts as a solution.

### 8. [session_list Returns Empty Despite Existing Sessions (#15108)](https://github.com/anomalyco/opencode/issues/15108)
**Status:** OPEN | **Comments:** 5 | **👍:** 1  
**Why it matters:** The `session_list` tool returns empty in certain workspaces despite confirmed sessions in the SQLite database. Impacts agent tooling that enumerates sessions programmatically.

### 9. [Windows: Sessions Missing from Sidebar Due to Path Separator Mismatch (#23864)](https://github.com/anomalyco/opencode/issues/23864)
**Status:** OPEN | **Comments:** 3 | **👍:** 0  
**Why it matters:** Sub-agent-created sessions don't appear in the web UI sidebar on Windows. Sessions remain accessible via direct URL, but discoverability is broken for Windows users—a platform-specific pain point.

### 10. [Kiro Provider Crashes with `Y.languageModel is not a function` (#26221)](https://github.com/anomalyco/opencode/issues/26221)
**Status:** OPEN | **Comments:** 3 | **👍:** 2  
**Why it matters:** The native Kiro provider fails on every request, blocking users who rely on API-key-based Kiro authentication. The error suggests a version mismatch or missing dependency in the provider chain.

---

## Key PR Progress

### 1. [fix(server): match Hono wire format for authorize undefined and share errors (#26474)](https://github.com/anomalyco/opencode/pull/26474)  
**Author:** kitlangton  
**Why it matters:** Fixes two wire-format parity gaps—returning `null` for undefined authorize responses and structured share error responses—ensuring HTTP API compatibility with the Hono-based server.

### 2. [chore(i18n): complete Chinese translation for zh.ts files (#25800)](https://github.com/anomalyco/opencode/pull/25800)  
**Author:** LifetimeVip  
**Why it matters:** Adds 24 new keys to the app module, plus 6 for UI and 12 for desktop, completing Simplified Chinese translation across three modules. Improves accessibility for Chinese-speaking users.

### 3. [feat(todo): auto-cleanup stale todos + /clear-tasks commands (#25856)](https://github.com/anomalyco/opencode/pull/25856)  
**Author:** LifetimeVip  
**Why it matters:** Addresses community-requested feature to auto-remove stale todos and adds `/clear-tasks` (`/清除任务`) slash commands. Improves chat UI hygiene across conversations.

### 4. [fix(app): resync session stream after iOS PWA returns from background (#26471)](https://github.com/anomalyco/opencode/pull/26471)  
**Author:** ysm-dev (closes #17769)  
**Why it matters:** Fixes a critical bug where iOS PWA sessions stop receiving SSE updates after phone backgrounding, because Safari suspends JS execution. Auto-resync on foreground return.

### 5. [fix(sidebar): fix logic and misleading message (#26470)](https://github.com/anomalyco/opencode/pull/26470)  
**Author:** Polo123456789 (closes #26469)  
**Why it matters:** Adjusts sidebar logic from `false` (disabled) to `undefined` (disabled) and corrects a misleading user message. A small UX fix with impact on on-screen guidance.

### 6. [fix(installation): detect install method from invoked CLI path (#26468)](https://github.com/anomalyco/opencode/pull/26468)  
**Author:** vsiegel (closes #26473)  
**Why it matters:** Fixes installation-method detection for auto-upgrade by using the CLI path (`process.argv[1]`) instead of `process.execPath`, which could be incorrect when invoked via package manager symlinks.

### 7. [test(server): expand workspace routing fixed-id coverage (#26458)](https://github.com/anomalyco/opencode/pull/26458)  
**Author:** kitlangton  
**Why it matters:** Adds thorough coverage for the `OPENCODE_WORKSPACE_ID` env override on workspace routing middleware, ensuring the `planRequest` function behaves correctly under various ID scenarios.

### 8. [fix(app): allow opening composer image previews from filename overlay (#26467)](https://github.com/anomalyco/opencode/pull/26467)  
**Author:** MrMushrooooom  
**Why it matters:** Previously the filename overlay blocked clicks on composer image thumbnails. This fix lets clicks pass through, enabling image preview opening from the full thumbnail area.

### 9. [feat(app): Mobile Touch Optimization (#18767)](https://github.com/anomalyco/opencode/pull/18767)  
**Author:** noahbentusi  
**Why it matters:** A long-standing PR implementing mobile touch optimizations—addressing gesture handling, responsive layouts, and touch event passthrough—while preserving the desktop experience.

### 10. [refactor(server): use JSON response for OpenAPI doc route (#26447)](https://github.com/anomalyco/opencode/pull/26447)  
**Author:** kitlangton  
**Why it matters:** Replaces manual content-type wiring with `HttpServerResponse.jsonUnsafe()` for the `/doc` route, simplifying the codebase and ensuring proper JSON serialization.

---

## Feature Request Trends

1. **Agent Marketplace & Sharing (#7467, #14292):** Two high-vote requests propose a GitHub-based marketplace for sharing agents and saving sessions to project folders instead of `~/.opencode`. Community wants portable, shareable agent configurations.

2. **Configurable Session Management (#20754, #13877, #16270):** Multiple requests ask for configurable session picker limits, removal of the 30-day hardcoded window, and better session discovery mechanisms.

3. **MCP Server Management (#26429, #11391, #4570):** Users want a GUI panel to configure MCP servers from the desktop app, plus dynamic MCP server add/delete/update workflows.

4. **Browser Automation via Playwright CLI (#26423):** A proposal to use Playwright CLI + SKILLS as a lighter alternative to Playwright MCP, which consumes excessive tokens loading accessibility trees.

5. **Plan Mode Hard Guards (#10741):** Community strongly supports separate "plan" and "build" user accounts to prevent unintended file changes in plan mode.

---

## Developer Pain Points

1. **Free Tier Reliability (#15585):** The "free usage exceed" error undermines trust in OpenCode's free offering. New users hitting this limit without clear documentation is a recurring onboarding friction point.

2. **Session Discovery & Management (#13877, #16270, #15108):** The 30-day session window, the empty `session_list` bug, and Windows path separator issues all point to session infrastructure as a major reliability area.

3. **Permission System Inconsistencies (#20045):** Silent failures due to path format mismatches between `edit` and `external_directory` are dangerous—they can cause unexpected permission bypasses without user awareness.

4. **Multi-Instance & Platform Issues (#23563, #23864):** OAuth port leaks on multi-instance setups and missing sessions on Windows indicate cross-platform compatibility is still maturing.

5. **Provider-Specific Crashes (#26221, #14920):** Native provider failures (Kiro, Claude Opus 4-6) and OpenAI-compatible proxy cache key bugs create blocking issues for users of specific LLM backends.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-09

## Today's Highlights
The past 24 hours saw an extraordinary burst of activity, with 50+ issues and 19 PRs updated, though nearly all are tagged `closed-because-bigrefactor`, `closed-because-weekend`, or `closed-because-refactor` — indicating a major ongoing codebase restructuring that has been auto-closing non-critical contributions. Despite that, several important fixes landed: a persistent skill provenance bug (#3978) was resolved, a TUI crash on narrow terminals was patched, and a new Unix-socket worker-loop mode was proposed for bus-driven task dispatch.

## Releases
No new releases in the last 24 hours. Current stable version remains `pi v0.73.0`.

---

## Hot Issues (10 of note)

### 1. [#3929 — Bun startup crash when `bun pm bin -g` fails](https://github.com/earendil-works/pi/issues/3929)
**Status:** CLOSED | **Comments:** 9 | **👍:** 3
Pi crashes on startup under Bun when `~/.bun/install/global/package.json` is missing. A follow-up to earlier fixes for `bun root -g`. High impact for Bun users — this blocks startup entirely.

### 2. [#4185 — Zsh/tmux installation: bad colors/contrast](https://github.com/earendil-works/pi/issues/4185)
**Status:** OPEN | **Comments:** 7 | **👍:** 1
User reports washed-out/incorrect colors on first install in tmux. No fix yet — likely a terminal detection issue in the new TUI rendering pipeline.

### 3. [#4233 — Setting to *always* show model provider in footer](https://github.com/earendil-works/pi/issues/4233)
**Status:** CLOSED | **Comments:** 5 | **👍:** 0
User wants a config flag to force footer provider display even with a single enabled model. Small UX request but tapped into broader footer extensibility discussions.

### 4. [#2616 — SessionManager is sync-only: blocks async persistence](https://github.com/earendil-works/pi/issues/2616)
**Status:** CLOSED | **Comments:** 5 | **👍:** 0
Deep architecture issue: all I/O in SessionManager is synchronous (`appendFileSync`, `readFileSync`), preventing database-backed persistence. Long-standing tech debt flagged for the big refactor.

### 5. [#3978 — `pi config` hardcodes path in group label](https://github.com/earendil-works/pi/issues/3978)
**Status:** CLOSED | **Comments:** 4 | **👍:** 0
Skills from `~/.agents/skills` show under `User (~/.pi/agent/)` in config UI — misleading UI label. **Now fixed** in PR #4299/#4028 by preserving provenance metadata.

### 6. [#4317 — Persist timing metadata for assistant message parts](https://github.com/earendil-works/pi/issues/4317)
**Status:** CLOSED | **Comments:** 3 | **👍:** 0
Feature request to add per-part timestamps (thinking, text, toolCall) instead of whole-message timestamps. Important for latency profiling and agent observability.

### 7. [#4302 — TUI crashes on over-wide changed line in narrow terminal](https://github.com/earendil-works/pi/issues/4302)
**Status:** CLOSED | **Comments:** 3 | **👍:** 0
Crash in 20-col tmux when rendering a line wider than terminal — closes Pi window. **Now fixed** in PR #4301 via truncation and diagnostic logging.

### 8. [#4313 — Limit rendered message history (virtual scrollback)](https://github.com/earendil-works/pi/issues/4313)
**Status:** CLOSED | **Comments:** 3 | **👍:** 0
Long sessions accumulate huge scrollback — no message jumping, memory heavy. Proposed virtual scrolling, though auto-closed during big refactor.

### 9. [#4292 — Configurable VCS status (jj/git)](https://github.com/earendil-works/pi/issues/4292)
**Status:** CLOSED | **Comments:** 3 | **👍:** 0
User wants jujutsu (jj) VCS support — Pi currently shows `(detached)` for jj-colocated git repos. Growing demand for alternative VCS support.

### 10. [#4266 — LM Studio fails with HTTP 400 on tool_choice](https://github.com/earendil-works/pi/issues/4266)
**Status:** CLOSED | **Comments:** 2 | **👍:** 0
Local OpenAI-compatible servers that accept only string `tool_choice` values reject Pi's object-style payload. Affects multiple local inference setups.

---

## Key PR Progress (10 important PRs)

### 1. [#4339 — Prevent ANTHROPIC_AUTH_TOKEN env leak](https://github.com/earendil-works/pi/pull/4339)
Fixes: Anthropic SDK sends `ANTHROPIC_AUTH_TOKEN` alongside explicit `apiKey`, causing 401s with proxy providers (Xiaomi MiMo). Critical for multi-provider setups.

### 2. [#4335 — Normalize Copilot API base URL](https://github.com/earendil-works/pi/pull/4335)
Removes `business` subdomain from GitHub Copilot proxy endpoints — ensures all Copilot tokens resolve to `api.githubcopilot.com`. 

### 3. [#4331 — Support Cmd+V image paste via empty bracketed paste](https://github.com/earendil-works/pi/pull/4331)
Detects empty bracketed paste sequences from terminal emulators when pasting image clipboard data. Enables image paste in Warp, iTerm2, Kitty.

### 4. [#4329 — Add `--mode worker-loop` for bus-driven task dispatch](https://github.com/earendil-works/pi/pull/4329)
New mode subscribes to Unix-socket message bus for agent task dispatch. Enables Pi as a worker in a task queue system — significant for automation/CI integration.

### 5. [#4327 — TUI: wrap list items with indent](https://github.com/earendil-works/pi/pull/4327)
Adds proper indentation and quote rendering for wrapped list items in narrow terminals. Addresses long-standing readability complaint.

### 6. [#4299 — Preserve `.agents` provenance in skill metadata](https://github.com/earendil-works/pi/pull/4299)
Re-opening of #4028 — fixes #3978 by splitting skill discovery to keep source provenance. Shows correct group labels in `pi config`.

### 7. [#3624 — Add Together AI as a provider](https://github.com/earendil-works/pi/pull/3624)
Still open/in-progress: adds native Together AI support via OpenAI-compatible API. Sources models from `models.dev` with tool capability filtering.

### 8. [#3887 — Image content API for agent output](https://github.com/earendil-works/pi/pull/3887)
Adds image block support and image models (Google/OpenRouter) to the stream API. Allows agents to output image content in TUI.

### 9. [#4312/#4310 — DeepSeek/Kimi tool schema fix + auto-detection](https://github.com/earendil-works/pi/pull/4312)
Fixes: null `parameters` in tool schemas rejected by DeepSeek/Kimi. Adds Kimi auto-detection. Two tickets, one fix.

### 10. [#4318 — Move changelog ack state out of settings.json](https://github.com/earendil-works/pi/pull/4318)
Introduces state.json for upgrade acknowledgment — keeps settings.json clean for dotfile sharing. Adds StateManager with locked JSON persistence.

---

## Feature Request Trends

1. **VCS Diversity**: Growing demand for jj (jujutsu) and alternative VCS support in footer/status display (e.g., #4292)

2. **Extensible Footer**: Pattern emerging for `addFooterProvider` API to replace hardcoded footer — users want plugin-driven footer customization (#4233, #4262)

3. **Document/PDF Input**: Recurring request for native PDF/file input support across major providers — re-filed multiple times (#4287, #2923, #2736)

4. **Model Routing/Scaling**: Hierarchical model usage (cheap→expensive gate) for cost optimization (#4306) — growing enterprise interest

5. **Virtual Scrollback**: Long sessions need virtual scrolling with message jumping (#4313) — TUI performance for power users

6. **Timing Observability**: Per-part timing for assistant message content — thinking/text/toolCall latency tracking (#4317)

7. **Cross-Platform Key Labels**: Platform-aware modifier key display (Option vs Alt) in `/hotkeys` (#4289)

---

## Developer Pain Points

- **Big Refactor Lockout**: Massive codebase restructuring is auto-closing legitimate bug reports and feature PRs — developers frustrated by `closed-because-bigrefactor` tag on non-trivial issues (#4287 re-filed 6 times)
- **Narrow Terminal Crashes**: TUI still crashes in small tmux panes — over-wide lines and scrollback issues persist (#4302, #4313)
- **Local/Proxy Provider Incompatibility**: LM Studio, DeepSeek, Kimi all hit JSON schema or header issues — local-first users are second-class (#4266, #4310, #4312)
- **Startup Reliability**: Bun users hit startup crashes, permissions errors on exit — cross-platform stability regression (#3929, #4267)
- **Session Management**: Sync-only I/O prevents async database persistence — blocking feature for production use (#2616)
- **Escaping Stuck Requests**: Windows users report requests stuck in "Working..." with no escape — input handling degrades over time (#4263)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-05-09

---

## Today's Highlights
The Qwen Code team shipped **v0.15.9** with CLI model validation fixes and telemetry enhancements amid intense community debate over the proposed OAuth free-tier reduction (122 comments). Multiple PRs landed to improve session persistence, context overflow recovery, and file-change conflict detection, while a new _autoSkill_ feature for background project skill extraction begins review.

---

## Releases
- **v0.15.9-nightly.20260509** / **v0.15.9** — [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.15.9...)
  - `fix(cli)`: validate `/model` command arguments — the `/model <id>` command now switches directly instead of opening the picker (PR [#3963](https://github.com/QwenLM/qwen-code/pull/3963))
  - `feat(telemetry)`: sensitive span attribute opt-in for OpenTelemetry instrumentation (PR [#3893](https://github.com/QwenLM/qwen-code/pull/3893))
  - `feat`: per-file AI contribution attribution for commits

- **v0.15.8-preview.0** — Preview of the above changes; same core patches.

---

## Hot Issues (top 10 by community activity)

1. **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)**  
   **122 comments** — A proposal to slash the daily free quota from 1,000 to 100 requests and eventually close the OAuth free entry point. Extremely active discussion; reflects tension between sustainability and developer access.

2. **[#3877 — Missing API key error despite `.env` config](https://github.com/QwenLM/qwen-code/issues/3877)**  
   User reports `OPENCODE_GO_API_KEY` in `~/.qwen/.env` is ignored, forcing an auth-method selection dialog on startup. Recurring config-discovery pain point.

3. **[#3914 — API connected, no errors but then fail to fetch](https://github.com/QwenLM/qwen-code/issues/3914)**  
   Connection error with `fetch failed` on OpenRouter base URL. Affects Node.js v26.0 and Windows — likely TLS or proxy mismatch.

4. **[#3936 — Russian text rendering broken (mojibake)](https://github.com/QwenLM/qwen-code/issues/3936)**  
   UI displays `"����������"` placeholders instead of Cyrillic characters. Terminal encoding or font-fallback issue in the interactive renderer.

5. **[#3548 — Configurable `plansDirectory` for Plan Mode](https://github.com/QwenLM/qwen-code/issues/3548)**  
   Feature request for custom plan storage directories (like Gemini CLI/Claude Code). 3 comments — moderate interest from power users.

6. **[#3954 — OSC 8 hyperlinks for markdown rendered output](https://github.com/QwenLM/qwen-code/issues/3954)**  
   Wrapping URLs in `OSC 8` escape sequences to keep links clickable in terminals. Directly improves UX for model responses containing references.

7. **[#3304 — Switching models mid-session causes API failures (CLOSED)](https://github.com/QwenLM/qwen-code/issues/3304)**  
   Fixed — model-switch logic now properly resets provider context. Resolved in the v0.15.9 release cycle.

8. **[#3823 — SDK 0.1.6/0.1.7 CLI process exit code 1 (Chinese report)](https://github.com/QwenLM/qwen-code/issues/3823)**  
   Regression: `@qwen-code/sdk` upgrades trigger `process exited with code 1` on Qwen3.5-397B-A17B. Intermittent, lacks detailed error logs.

9. **[#3945 — Edit tool deadlock on large files](https://github.com/QwenLM/qwen-code/issues/3945)**  
   `read_file` truncates large files, making the "fully read" precondition for `edit` impossible — a classic catch-22 for codebase-scale edits.

10. **[#3979 — Plan mode flash-loop in Ghostty terminal](https://github.com/QwenLM/qwen-code/issues/3979)**  
    After plan mode response, Ghostty (macOS) enters continuous screen flickering. Terminal-UI race condition under the new rendering pipeline.

---

## Key PR Progress (top 10 by significance)

1. **[#3980 — Merge IDE context into user prompt](https://github.com/QwenLM/qwen-code/pull/3980)**  
   Wraps IDE editor context in `<system-reminder>` block prepended to user request instead of adding separate history entries. Preserves API history structure for IDE mode.

2. **[#3840 — Refuse Edit/WriteFile when file changed since last read](https://github.com/QwenLM/qwen-code/pull/3840)** *(CLOSED)*  
   File-change staleness detection: rejects writes when `(mtime, size)` mismatches cached snapshot. Prevents silent overwrites from parallel agents — fixes [#3839](https://github.com/QwenLM/qwen-code/issues/3839).

3. **[#3935 — `/commit` slash command for git commits](https://github.com/QwenLM/qwen-code/pull/3935)** *(CLOSED)*  
   Adds `/commit` (alias `/ci`) that stages all changes and creates a git commit. Leverages `run_shell_command` with co-author attribution.

4. **[#3673 — `autoSkill` background project skill extraction](https://github.com/QwenLM/qwen-code/pull/3673)**  
   After 20 tool calls in a session, a background agent extracts reusable operations as project-level skills in `${projectRoot}/.qwen/skills/`. Off by default — a major memory/context enhancement.

5. **[#3879 — Reactive compression on context overflow](https://github.com/QwenLM/qwen-code/pull/3879)** *(CLOSED)*  
   On provider context-window overflow errors, compresses conversation history and retries the failed turn. Critical for long-running sessions hitting token limits.

6. **[#3897 — Bounded session-list metadata reads (perf)](https://github.com/QwenLM/qwen-code/pull/3897)**  
   `/resume` open time no longer scales linearly with total disk bytes. Reads only head/tail 64KB per file; lazy message counting. Improves large-project session browsing.

7. **[#3889 — `qwen serve` daemon (Stage 1)](https://github.com/QwenLM/qwen-code/pull/3889)**  
   Implements an HTTP daemon bridging ACP NDJSON over HTTP + SSE. Enables SDK `DaemonClient` for health, session CRUD, prompt, cancel — foundation for long-running background services.

8. **[#3865 — Persist channel sessions across restarts](https://github.com/QwenLM/qwen-code/pull/3865)**  
   Fixes `AcpBridge.loadSession()` always returning `undefined`. Channel sessions now survive `Ctrl+C` / restart without losing context.

9. **[#3982 — Collapse three task registries into one](https://github.com/QwenLM/qwen-code/pull/3982)**  
   Refactors background subagents, shells, and monitors into a single generic `TaskRegistry`. Simplifies lifecycle management — stacked on [#3970](https://github.com/QwenLM/qwen-code/pull/3970).

10. **[#3860 — Upgrade Ink 7.0.2, bump Node engine to 22](https://github.com/QwenLM/qwen-code/pull/3860)**  
    Drops Node 20 support. Ink 7 requires Node ≥22 and React ≥19.2. Pure dependency upgrade with no business logic changes — paves way for modern rendering capabilities.

---

## Feature Request Trends
- **Plan Mode customization** — Users want configurable `plansDirectory` and plan policies, mirroring Gemini CLI / Claude Code workflows.
- **Privacy-safe telemetry** — Opt-in sensitive span attributes (telemetry PRs) show growing enterprise compliance requirements.
- **Better text editing in CLI** — `Ctrl+Backspace`, text selection, copy/paste — the interactive prompt lags behind modern terminal editors.
- **Rust Token Killer integration** — Token optimization plugins for context-window efficiency.
- **Context overflow recovery** — Automatic compression and retry (now implemented in #3879) — addresses the #1 pain point for long sessions.
- **Idealab/Alibaba internal provider** — Built-in support for Alibaba's internal LLM endpoint; mirrors enterprise on-premises needs.

---

## Developer Pain Points
1. **API key configuration ignored** — `.env` files with `OPENCODE_GO_API_KEY` are not auto-detected, forcing manual auth selection on every startup ([#3877](https://github.com/QwenLM/qwen-code/issues/3877)).
2. **Large file deadlock** — `edit` tool requires full file read, but `read_file` truncates large files — makes codebase editing impossible for big source files ([#3945](https://github.com/QwenLM/qwen-code/issues/3945)).
3. **Windows terminal fragility** — Resize-induced display corruption ([#3213](https://github.com/QwenLM/qwen-code/issues/3213)) plus flaky CI tests on Windows runners ([#3977](https://github.com/QwenLM/qwen-code/issues/3977)).
4. **SDK version regressions** — v0.1.6/0.1.7 cause intermittent `exit code 1` failures with Qwen3.5-397B-A17B, without actionable error messages ([#3823](https://github.com/QwenLM/qwen-code/issues/3823)).
5. **Model picker vs. direct switch** — `/model <id>` opened picker instead of switching (fixed in v0.15.9 via PR [#3963](https://github.com/QwenLM/qwen-code/pull/3963)).
6. **File type misidentification** — Encrypted `.c`/`.cpp`/`.h` files treated as binary, blocking `edit`/`write_file` ([#3964](https://github.com/QwenLM/qwen-code/issues/3964)).
7. **Subagent approval lacks context** — Approval prompts show only agent name and generic "Do you want to proceed?" without the tool/command being requested ([#3960](https://github.com/QwenLM/qwen-code/issues/3960)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*