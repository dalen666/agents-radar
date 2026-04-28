# AI CLI Tools Community Digest 2026-04-28

> Generated: 2026-04-28 04:37 UTC | Tools covered: 8

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
**Date: 2026-04-28**

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues to mature rapidly, with six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, and Qwen Code—all showing active daily development cycles. The ecosystem is converging around MCP (Model Context Protocol) server integration, configurable approval workflows, and cross-platform parity, while each tool maintains distinct emphases: proprietary API ecosystems (Claude, OpenAI, Gemini, Copilot) versus multi-provider gateways (Pi, OpenCode, Kimi). A clear tension exists between rapid feature iteration and release quality, as several tools shipped regressions alongside improvements this week. The community is increasingly vocal about reliability, documentation completeness, and transparent permission models.

---

## 2. Activity Comparison (2026-04-28)

| Tool | Hot Issues Tracked | Key PRs Tracked | Release Status |
|------|-------------------|-----------------|----------------|
| **Claude Code** | 10 | 10 | **Released** v2.1.121 |
| **OpenAI Codex** | 10 | 10 | **3 alpha releases** (rust-v0.126.0-alpha.6-.8) |
| **Gemini CLI** | 10 | 10 | **2 nightly releases** |
| **GitHub Copilot CLI** | 10 | 0 | **Released** v1.0.37 |
| **Kimi Code CLI** | 10 | 10 | No new release (latest v1.39.0) |
| **OpenCode** | 10 | 10 | No new release |
| **Pi** | 10 | 10 | **3 patch releases** (v0.70.3-.5) |
| **Qwen Code** | 10 | 10 | **2 nightly releases** + SDK preview |

**Key observation:** Pi shipped the most releases today (3 patches), signaling rapid bug-fix cycling. OpenAI Codex shipped only alpha releases, suggesting ongoing internal iteration. Copilot CLI shipped one release with noted regressions. Claude Code, Gemini CLI, and Qwen Code shipped stable or nightly releases with clear changelogs.

---

## 3. Shared Feature Directions

### Cross-Tool Requirements (3+ tools)

| Requirement | Tools | Details |
|-------------|-------|---------|
| **MCP/OAuth callback support** | Claude Code, OpenCode, Copilot CLI | Codepsaces, WSL2, and Docker containers cannot reach localhost OAuth callbacks; demand for explicit host binding or manual token fallback |
| **Plugin/skill ecosystem maturity** | Claude Code, Copilot CLI, Kimi Code | Granular auto-approval, dependency pruning, organization-level force-disable, config isolation |
| **Multi-line editing & keybinding** | Claude Code, Gemini CLI, Copilot CLI | Huge demand for Vim keybindings, `chat:newline` actions, Numpad Enter support, configurable keymaps |
| **Session lifecycle management** | Claude Code, OpenCode, Kimi Code | Session move/detach, chronological sorting, resumption reliability, orphan recovery |
| **WSL/Windows parity** | Claude Code, Gemini CLI, Kimi CLI, OpenCode, Copilot CLI | Path crawling crashes, binary detection failures, terminal emulation gaps, UNC path leaks |
| **Approval workflow configurability** | Claude Code, Kimi Code, Copilot CLI | Auto-approve with glob patterns, configurable timeouts, indefinite wait, scope to turn lifecycle |
| **Documentation completeness** | Claude Code, Gemini CLI, Copilot CLI | Missing docs for MCP "Queried" display, keybinding actions, hook behavior, bash login shell defaults |
| **100% CPU / resource leaks** | OpenAI Codex, OpenCode, Gemini CLI | Background memory generation, infinite reconnects, idle CPU drain |

### Notable Pairwise Convergence

- **Pi + OpenCode**: Expanding provider ecosystem aggressively (Cloudflare, Together AI, AWS Bedrock via Kiro)
- **Claude Code + Kimi Code**: Both shipping granular auto-approval rules with glob patterns
- **OpenAI Codex + Copilot CLI**: Both migrating permission models (Codex: SandboxPolicy → PermissionProfile; Copilot: location-based persistence)
- **Gemini CLI + Qwen Code**: Both adding background task management and memory optimization

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|
| **Primary model** | Claude (Anthropic) | GPT-5.x (OpenAI) | Gemini (Google) | GPT + Gemini + Claude | Kimi/K2 | Multi-provider | Multi-provider | Qwen + Multi-provider |
| **Key strength** | Deep MCP integration, plugin system | Streaming performance, TUI keymap system | Memory routing, context compaction | GitHub ecosystem lock-in | Approval workflow control | Session lifecycle management | Provider expansion speed | Background tasks, multi-language |
| **Target user** | Power developers, plugin authors | Enterprise, large-codebase users | GCP/Google ecosystem | GitHub/Copilot users | Approval-conscious teams | Multi-provider power users | Extensibility hackers | Qwen/AliCloud ecosystem |
| **Technical approach** | Proprietary CLI + VS Code plugin | Rust-native CLI | Go-based CLI | Node.js CLI | Go-based CLI | Rust+Go hybrid | Node.js CLI | TypeScript CLI |
| **Release cadence** | Stable ~weekly | Alpha daily; stable periodic | Nightly + stable | Stable weekly + hotfixes | ~Bi-weekly stable | PR-driven, no fixed cadence | Multiple patches/day | Nightly + stable |
| **Maturity** | High (most mature) | High | Medium-High | Medium-High | Medium | Medium | Medium | Medium |
| **Security posture** | Plugin sandbox, workspace trust | PermissionProfile migration | Workspace trust, secure .env | GitHub auth, location-based permissions | Configurable approval scopes | MCP OAuth support | Sandbox env fallbacks | Auth multi-provider awareness |

**Key Differentiators:**

- **Pi** is the fastest-moving provider aggregator, adding Cloudflare Workers AI, Together AI, and Azure Cognitive Services in a single digest period.
- **Claude Code** has the most sophisticated plugin/MCP ecosystem with `alwaysLoad` and `plugin prune`.
- **OpenAI Codex** leads in streaming performance (10-15x faster apply_patch parser via #19160).
- **Gemini CLI** is pioneering memory optimization with union-find context compaction (#24736) and Squeeze 2B model for tool output pruning (#25247).
- **Kimi Code** is the most thoughtful about approval workflow autonomy with configurable timeouts and granular rules.
- **Qwen Code** is investing heavily in background task management (Phase A/B/C rollout) and multi-format TUI rendering.

---

## 5. Community Momentum & Maturity

### Highest Community Engagement
- **Claude Code**: Most active documentation-filing community (26 open docs issues from one contributor). Plugin ecosystem driving engagement.
- **OpenAI Codex**: #2847 (`.codexignore`) at 347 👍, #19464 (1M context) at 88 👍 — high volume of passionate users.
- **Qwen Code**: #3203 (free tier adjustment) at 120 comments — policy change driving massive engagement.
- **Copilot CLI**: #1703 (model parity) at 40 👍, #2725 (effort-level picker) at 33 comments — enterprise users demanding parity.

### Most Rapidly Iterating
- **Pi**: 3 patch releases in 24 hours. Fast bug-fix cycle, but regressions suggest CI gaps.
- **Gemini CLI**: 2 nightly releases with measurable features (custom theme schema, secure .env, WSL fixes).
- **OpenAI Codex**: 3 alpha releases signal active development, but lack of stable releases may frustrate users.
- **Claude Code**: Steady stable releases with feature additions (alwaysLoad, plugin prune).

### Maturity by Reliability Signals
| Tool | Release Quality | Regression Frequency | Documentation Level |
|------|----------------|---------------------|-------------------|
| Claude Code | High | Low | Medium (gaps noted) |
| OpenAI Codex | Medium (alpha-heavy) | Medium | Medium |
| Gemini CLI | Medium-High | Medium | Low (multiple undocumented behaviors) |
| Copilot CLI | Medium | High (1.0.37 broke plugins) | Low |
| Kimi Code | Medium | Medium | Low |
| OpenCode | Medium | Medium | Low |
| Pi | Low-Medium | High (3 patches for packaging bugs) | Low |
| Qwen Code | Medium | Medium | Medium |

---

## 6. Trend Signals

### Industry Trends (from community feedback)

1. **Provider agnosticism is the new baseline**: Users expect CLI tools to support multiple LLM providers (OpenAI, Anthropic, Google, DeepSeek, Qwen, local models). Pi, OpenCode, and Qwen Code are racing to be universal gateways. Even proprietary-first tools (Copilot CLI, Claude Code) face pressure to support alternative models.

2. **MCP ecosystem creates new reliability vectors**: As MCP server adoption grows, issues emerge around OAuth callbacks in containers (#OpenCode, #CopilotCLI), image-returning tools against strict API servers (#QwenCode, #Pi), and tool list overflow at initialization (#KimiCode). The MCP ecosystem is still immature but accelerating.

3. **Security boundaries become explicit**: `.codexignore` (#2847, 347👍), permission profiles (#Codex), location-based persistence (#CopilotCLI), granular auto-approval (#KimiCode, #ClaudeCode) — the era of implicit trust is ending. Users want configurable, transparent permission models.

4. **Session lifecycle management is the new frontier**: Users running parallel CI/CD pipelines, long-running agent sessions, and multi-session workflows demand proper session move/detach, chronological sorting, orphan recovery, and context compaction. Claude Code, OpenCode, and Gemini CLI are leading here.

5. **Cross-platform is still a struggle**: WSL and Windows remain second-class citizens across every tool. Path crawling crashes, binary detection failures, terminal emulation gaps, UNC path leaks — the gap between macOS and other platforms is the top recurring pain point.

6. **Streaming and rendering performance matter more**: As models output longer chains of thought, per-token rendering cost becomes visible. Pi and OpenAI Codex are both working on incremental streaming (#2067, #19160). The 10-15x faster patch parser from Codex sets a performance benchmark others will need to match.

7. **Background task management is becoming a differentiator**: Qwen Code's Phase A/B/C rollout (managed shell pools, event monitors with throttled streaming) represents the most structured investment in long-running asynchronous agent tasks. Other tools are being pulled in this direction by user demand.

### Reference Value for Developers

- **If you need a battle-tested MCP/plugin ecosystem**: Claude Code is the clear leader with `alwaysLoad` and `plugin prune`.
- **If you need maximum provider flexibility**: Pi (Cloudflare, Together AI, Azure) or OpenCode (multi-provider with session management).
- **If you're an enterprise GitHub shop**: Copilot CLI, but test 1.0.37 carefully (plugin loading regression).
- **If you need approval workflow control**: Kimi Code offers the most granular configuration.
- **If you work with large codebases**: OpenAI Codex (performance leader) or Claude Code (proven stability).
- **If you're on GCP or need memory optimization**: Gemini CLI is investing heavily in novel compression strategies.
- **If you need background task management**: Qwen Code is the most sophisticated in this area.
- **If you're on Windows/WSL**: Every tool has gaps — Claude Code and Pi currently have the most active fixes in progress.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# 📊 Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-04-28 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

### 🥇 Add document-typography skill
- **Author:** PGTBoos | **Created:** 2026-03-04 | **Status:** Open
- **GitHub:** [PR #514](https://github.com/anthropics/skills/pull/514)
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment—common typographic defects in AI-generated documents.
- **Discussion:** This PR resonated broadly because typographic quality is a universal pain point. Contributors noted that every Claude-generated document suffers from these issues, making this a high-impact, low-hanging-fruit skill.

### 🥈 Add ODT skill
- **Author:** GitHubNewbie0 | **Created:** 2026-03-01 | **Status:** Open
- **GitHub:** [PR #486](https://github.com/anthropics/skills/pull/486)
- **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) to HTML.
- **Discussion:** Community interest reflects demand for LibreOffice/OpenOffice compatibility. Comments focused on edge-case handling for template filling and format fidelity.

### 🥉 Add testing-patterns skill
- **Author:** 4444J99 | **Created:** 2026-03-22 | **Status:** Open
- **GitHub:** [PR #723](https://github.com/anthropics/skills/pull/723)
- **Functionality:** Covers the full testing stack—Testing Trophy philosophy, unit testing (AAA pattern), React component testing (Testing Library), edge cases, and the "what NOT to test" heuristic.
- **Discussion:** High engagement from developers who want Claude to internalize modern testing best practices. The "what not to test" section generated the most debate around threshold definitions.

### 4. Add ServiceNow platform skill
- **Author:** Vanka07 | **Created:** 2026-03-08 | **Status:** Open
- **GitHub:** [PR #568](https://github.com/anthropics/skills/pull/568)
- **Functionality:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, CSDM, and IntegrationHub.
- **Discussion:** Enterprise users praised the breadth. Several contributors requested splitting into sub-skills to prevent context overload, indicating a tension between comprehensiveness and usability.

### 5. Fix/docx: prevent tracked change w:id collision
- **Author:** Lubrsy706 | **Created:** 2026-03-06 | **Status:** Open
- **GitHub:** [PR #541](https://github.com/anthropics/skills/pull/541)
- **Functionality:** Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks (shared `w:id` ID space in OOXML).
- **Discussion:** Low comment volume but high signal—this bugfix PR was part of a 3-PR series by the same author (also `#538`, `#539`), demonstrating the community self-healing the ecosystem through precise technical patches.

### 6. Add shodh-memory skill
- **Author:** varun29ankuS | **Created:** 2025-12-19 | **Status:** Open
- **GitHub:** [PR #154](https://github.com/anthropics/skills/pull/154)
- **Functionality:** Persistent memory system for AI agents—teaches Claude to call `proactive_context` on every user message to surface relevant memories from structured content.
- **Discussion:** Long-running PR with sustained interest around memory architecture decisions. Key debate: whether this should be a Skill or an MCP tool, given persistence implications.

---

## 2. Community Demand Trends

From top Issues and PR commentary, five clear demand vectors emerge:

| Trend | Signal | Key Issue/PR References |
|---|---|---|
| **Org/team skill sharing** | Strongest demand signal; users want central provisioning, not manual `.skill` file Slack-sharing | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 6 👍) |
| **Skill evaluation & quality tooling** | Users want to measure whether skills actually trigger and perform; bug reports on `run_eval.py` show 0% trigger rate | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍) |
| **Security & trust boundaries** | Concern that community skills under `anthropic/` namespace impersonate official skills | [#492](https://github.com/anthropics/skills/issues/492) (4 comments) |
| **SSO/enterprise compatibility** | Tooling assumes `ANTHROPIC_API_KEY`, breaking enterprise SSO workflows | [#532](https://github.com/anthropics/skills/issues/532) |
| **Duplicate skill deduplication** | Plugin overlap wastes context window; users want a single canonical source | [#189](https://github.com/anthropics/skills/issues/189) (5 comments, 7 👍) |

**Notable:** PR [#509](https://github.com/anthropics/skills/pull/509) (Add CONTRIBUTING.md) directly addresses community health—the repo scored 25% on GitHub's health metrics, and this was the most impactful single fix.

---

## 3. High-Potential Pending Skills

These active PRs show strong development momentum and are likely to merge soon:

| Skill | PR | Author | Last Updated | Why Watch |
|---|---|---|---|---|
| **sensory** (macOS AppleScript automation) | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | 2026-04-02 | Two-tier permission model; native automation alternative to screenshot-based computer use |
| **claude-obsidian-reporter** | [#664](https://github.com/anthropics/skills/pull/664) | sinaayyy | 2026-03-22 | Auto daily Git→Obsidian reports; strong productivity niche appeal |
| **HADS** (Human-AI Document Standard) | [#616](https://github.com/anthropics/skills/pull/616) | catcam | 2026-03-31 | Lightweight Markdown convention for dual human/AI docs; addresses an emerging need |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | 2026-04-21 | Most comprehensive testing skill; finalizing edge case definitions |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | p19dixon | 2026-02-04 | 10-step orphaned code/cleanup workflow; long-tail discussion indicates pending polish |

**Also notable:** PR [#666](https://github.com/anthropics/skills/pull/666) (Remove duplicate skill-creator) is not a new Skill but an important cleanup PR—the community is actively consolidating, not just creating.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand at the Skills level is for *quality infrastructure*—typography correctness, testing discipline, document format fidelity, and skill evaluation tooling—rather than new domain-specific skills, reflecting a shift from "what can Claude do" to "how well does Claude do it."**

---

# Claude Code Community Digest — 2026-04-28

## Today's Highlights

Claude Code v2.1.121 shipped with a significant `alwaysLoad` option for MCP servers, enabling persistent tool availability without search deferral, plus new plugin pruning capabilities. The community remains highly engaged around documentation completeness (26 open documentation issues from contributor `coygeek`), while critical bugs around Windows `redacted_thinking` content types and Bedrock API compatibility continue to draw attention.

---

## Releases

**v2.1.121** — [Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.121)

Three key additions:
- **`alwaysLoad` MCP config option**: When set to `true` on an MCP server config, all tools from that server skip tool-search deferral and remain always available in the prompt — critical for servers providing essential utilities that should never be hidden.
- **`claude plugin prune` command**: Removes orphaned auto-installed plugin dependencies. `plugin uninstall --prune` provides cascading cleanup for cleaner dependency management.
- **Type-to-...** (release notes truncated)

---

## Hot Issues

1. **[#36179 — Unsupported content type: redacted_thinking (Windows, VS Code)](https://github.com/anthropics/claude-code/issues/36179)**
   - 16 comments, 9 👍. Frequent errors when using the VS Code plugin on Windows. High-urgency bug affecting a major platform; community is actively reproducing and sharing logs.

2. **[#35954 — Add option to disable 'Contains backslash-escaped whitespace' warning (WSL/bash)](https://github.com/anthropics/claude-code/issues/35954)**
   - 9 comments, 15 👍. WSL users encounter this warning constantly; the 15 upvotes signal strong demand for a configurable suppression flag.

3. **[#46553 — /resume session list incomplete and not chronologically sorted (macOS/CLI)](https://github.com/anthropics/claude-code/issues/46553)**
   - 4 comments. Sessions created via Agent SDK and CLI share identical metadata but don't appear in `/resume`. Core workflow regression for session management.

4. **[#49548 — Bedrock API Error: "Extra inputs are not permitted" (macOS)](https://github.com/anthropics/claude-code/issues/49548)**
   - 4 comments, 1 👍. `context_management: Extra inputs are not permitted` error when using Bedrock model groups. Blocking for AWS Bedrock users on Sonnet 4.5.

5. **[#37780 — IS_DEMO env var suppresses trust prompt, breaks hooks + statusline (macOS)](https://github.com/anthropics/claude-code/issues/37780)**
   - 3 comments, 4 👍. `IS_DEMO` environment variable bypasses workspace trust without granting it, silently breaking hooks and statusline features. Tricky debugging experience.

6. **[#25434 — Nested Claude launch guard behavior undocumented](https://github.com/anthropics/claude-code/issues/25434)**
   - 7 comments, 1 👍. Last updated today. Session docs missing recovery guidance for nested Claude instances — critical for CI/CD and parallel session users.

7. **[#18061 — WSL Chrome integration contradiction between docs and changelog](https://github.com/anthropics/claude-code/issues/18061)**
   - 6 comments, 1 👍. Opened January 2026, still unresolved. Documentation explicitly says one thing, CHANGELOG says another — creates trust issues for new users.

8. **[#26708 — Keybindings missing `chat:newline` action for multi-line input](https://github.com/anthropics/claude-code/issues/26708)**
   - 7 comments. Closed as fixed. Configurable multi-line input binding was missing from docs; now documented. Quick turnaround for a frequent ergonomic pain point.

9. **[#36857 — MCP "Queried {server}" collapsed display undocumented](https://github.com/anthropics/claude-code/issues/36857)**
   - 3 comments. MCP tool calls show a collapsed "Queried" display read/search calls — behavior exists but has zero documentation. Community discovering features by accident.

10. **[#28043 — Bash tool login-shell default change undocumented](https://github.com/anthropics/claude-code/issues/28043)**
    - 3 comments, 3 👍. The bash tool's default shell mode changed, but `CLAUDE_BASH_NO_LOGIN` and migration notes are absent from docs. Silent behavior change that can break scripts.

---

## Key PR Progress

1. **[#54134 — Fix "MacOS" → "macOS" in README.md](https://github.com/anthropics/claude-code/pull/54134)**
   - 🆕 Opened today. Simple but important branding correction across installation docs. Shows active community attention to detail.

2. **[#54103 — Cover all bash invocations in commit-push-pr allowed-tools](https://github.com/anthropics/claude-code/pull/54103)**
   - 🆕 Fixes `/commit-push-pr` skill that fails under strict permissions — missing `git diff HEAD`, `git branch`, `git checkout -b` from its allowed-tools list. Critical for enterprise security configurations.

3. **[#54094 — Quote `$CLAUDE_PLUGIN_ROOT` in hook commands](https://github.com/anthropics/claude-code/pull/54094)**
   - 🆕 Five in-tree plugins fail when `CLAUDE_PLUGIN_ROOT` contains spaces (e.g., `/Users/me/Work/Company Name/`). Unquoted variable expansion causes silent hook failures.

4. **[#33070 — Add reframe plugin for debugging and design problem-solving](https://github.com/anthropics/claude-code/pull/33070)**
   - New plugin with `/reframe` slash command applying cognitive frameworks (first principles, inversion, analogy) grounded in codebase context. Auto-gathers git diff, recent commits. Potentially powerful new workflow.

5. **[#53949 — Update HackerOne links in SECURITY.md](https://github.com/anthropics/claude-code/pull/53949)**
   - Security disclosure process update. Ensures vulnerability reporters reach the correct submission forms.

6. **[#43824 — Fix shell injection vulnerability in claude-dedupe-issues workflow](https://github.com/anthropics/claude-code/pull/43824)**
   - HIGH severity fixed. Variable interpolation in GitHub Actions workflow could allow shell injection — caught by Semgrep scanning. Good hygiene signal.

7. **[#41447 — Open source Claude Code](https://github.com/anthropics/claude-code/pull/41447)**
   - Still open. Ambitious PR claiming to close 5 issues including #59, #456, #2846, #22002, #41434. Would be a massive community contribution if merged.

8. **[#33224 — Make Node.js version configurable; default to Node 24](https://github.com/anthropics/claude-code/pull/33224)**
   - Updates DevContainer Dockerfile: Node 20 → Node 24 LTS. Node.js 20 reaches EOL April 2026. Environment variable `NODE_VERSION` for flexibility.

9. **[#33234 — Handle initial commit case in commit-commands](https://github.com/anthropics/claude-code/pull/33234)**
   - Fixes `fatal: your current branch does not have any commits yet` when using `/commit-commands:commit` on fresh repos. Falls back to `git diff --cached`.

10. **[#5609 — DevContainer firewall: hybrid static/dynamic IP management](https://github.com/anthropics/claude-code/pull/5609)**
    - Modernizes firewall for CDN/load-balanced services. GitHub uses Meta API for CIDRs (static IPSet), hybrid approach for dynamic services. Still open after 8 months.

---

## Feature Request Trends

1. **Documentation completeness** (dominant trend): 26 of 30 top issues are documentation gaps. One contributor (`coygeek`) has filed most — covering hooks, MCP, keybindings, statusline, CLI reference, model config, worktrees, plugins, and bash tool behavior.

2. **Plugin ecosystem maturity**: Requests for organization-level plugin force-disable, better dependency pruning (`plugin prune` now shipped), and clear documentation of `claude plugins` as alias. Community pushing for enterprise-grade plugin management.

3. **MCP server configuration flexibility**: The new `alwaysLoad` option directly addresses requests for persistent tool availability. Community wants more granular control over MCP tool discovery and visibility.

4. **Session management improvements**: `/resume` sorting/filtering gaps, worktree session behavior documentation, and nested Claude instance guards. Users running parallel sessions need better tooling.

5. **Cross-platform parity**: Windows (redacted_thinking, VS Code plugin errors) and WSL (whitespace warnings, Chrome integration confusion) lag behind macOS in stability and documentation.

---

## Developer Pain Points

- **Windows/VS Code stability**: Issue #36179 (`redacted_thinking` content type errors) is the most-commented bug — Windows users still face reliability gaps.
- **AWS Bedrock compatibility**: Issue #49548 shows integration with Bedrock model groups is fragile, with opaque "Extra inputs not permitted" errors blocking workflows.
- **Undocumented behavior**: Multiple features exist but are invisible (MCP "Queried" display, `chat:newline` keybinding, `workspace.added_dirs` statusline field, nested Claude guards). Developers discover by accident.
- **Silent configuration changes**: Bash login-shell behavior change (#28043) without documentation — breaks scripts without warning.
- **Plugin path handling with spaces**: PR #54094 highlights that in-tree plugins themselves fail on macOS paths with spaces, undermining reliability on common setups.
- **Environment variable footguns**: `IS_DEMO` silently breaking workspace trust (#37780) — a single env var disabling critical security infrastructure without clear indication.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-04-28

## Today's Highlights
Three rapid-fire Rust CLI alphas (`v0.126.0-alpha.6` through `.8`) landed today, signaling active iteration on the Rust-native Codex agent. The community is intensely focused on three fronts: a long-standing request for sensitive-file exclusion (Issue #2847) has reached **347 👍** and 70 comments, while a new debate over GPT-5.5's 400K token context window vs. the API's 1M limit (Issue #19464) is drawing heavy attention. Meanwhile, a major permissions model migration is underway across several PRs, replacing legacy `SandboxPolicy` with a new `PermissionProfile` system.

---

## Releases
**Rust CLI** — Three sequential alpha releases in the last 24 hours:
- `rust-v0.126.0-alpha.6`, `.7`, `.8` — No changelog details provided beyond version bumps, but the rapid cadence suggests active fixes or integrations in the Rust agent pipeline.

---

## Hot Issues (Top 10)

1. **#2847 – Exclude sensitive files from agent read/send**  
   *Author: mkusaka · 👍 347 · 70 comments*  
   The community's most-voted open issue. Requests a `.codexignore` mechanism (repo-local and global) to prevent the agent from reading or uploading sensitive paths like `.env` or `secrets/`. A clear signal that security-conscious developers want agent boundaries without disabling sandbox.  
   [GitHub](https://github.com/openai/codex/issues/2847)

2. **#19464 – 1M token context support for GPT-5.5 in Codex**  
   *Author: umikato · 👍 88 · 66 comments*  
   GPT-5.5 is documented at 400K in Codex but the API supports 1M. Users want parity for large-codebase analysis. High engagement suggests wide demand for full-context reasoning in agents.  
   [GitHub](https://github.com/openai/codex/issues/19464)

3. **#11981 – 100% CPU with single agent**  
   *Author: beladiyaraj · 👍 13 · 45 comments*  
   Persistent resource leak affecting macOS Plus users. Community is frustrated by high CPU even when idle. Likely tied to background memory generation or polling.  
   [GitHub](https://github.com/openai/codex/issues/11981)

4. **#13245 – Stream disconnected before completion (CLI)**  
   *Author: joe5saia · 👍 15 · 17 comments*  
   Frequent `Reconnecting` failures in CLI. Users lose agent state after 5 retries. A reliability blocker for long-running tasks.  
   [GitHub](https://github.com/openai/codex/issues/13245)

5. **#11356 – Native Commit button ignores custom Git instructions**  
   *Author: coygeek · 👍 18 · 11 comments*  
   Discrepancy between Commit button and Chat command: button generates empty commit bodies despite custom `.codexrules`. Breaks commit standardization workflows.  
   [GitHub](https://github.com/openai/codex/issues/11356)

6. **#17318 – Can't change model/reasoning efforts**  
   *Author: sairion · 👍 18 · 10 comments*  
   Intermittent UI bug on macOS where model selector and reasoning effort controls become unresponsive. Blocks users from tailoring agent cost/quality.  
   [GitHub](https://github.com/openai/codex/issues/17318)

7. **#17832 – Playwright MCP stdio process leak (regression)**  
   *Author: RedesignedRobot · 👍 0 · 8 comments*  
   213 orphaned processes consuming 13.6 GB RSS. A regression after #16895 fix. Critical for developers using Playwright MCP for browser automation.  
   [GitHub](https://github.com/openai/codex/issues/17832)

8. **#19732 – Idle usage drain from background memory generation**  
   *Author: Allmight97 · 👍 0 · 3 comments*  
   Desktop consumes ~5 hours/week of usage while idle due to GPT-5.4 memory generation processes. Users found `generate_memories=false` as a workaround.  
   [GitHub](https://github.com/openai/codex/issues/19732)

9. **#18506 – Windows + WSL UNC path terminal/config leaks**  
   *Author: blockedby · 👍 8 · 6 comments*  
   Triple bug: terminal fails in UNC/WSL paths, Windows configs leak into WSL, and worktrees need WSL-native `CODEX_HOME`. Affects the growing Windows+WSL developer segment.  
   [GitHub](https://github.com/openai/codex/issues/18506)

10. **#15679 – `/loop` recurring prompt command in TUI**  
    *Author: cruzlauroiii · 👍 7 · 5 comments*  
    Feature request for a `/loop 3m continue` slash command. Would enable automated recurring tasks in the TUI — a power-user workflow enabler.  
    [GitHub](https://github.com/openai/codex/issues/15679)

---

## Key PR Progress (Top 10)

1. **#19456 – Remote plugin uninstall API**  
   *Author: xli-oai*  
   Adds `plugin/uninstall` request form with optional `remoteMarketplaceName`. Enables uninstalling ChatGPT-hosted plugins remotely while preserving local plugin support.  
   [GitHub](https://github.com/openai/codex/pull/19456)

2. **#19907 – Clarify network approval auto-review prompts**  
   *Author: maja-openai*  
   Fixes network approval prompts that showed generic retry reasons; now directs reviewers to evaluate the command that triggered the blocked connection.  
   [GitHub](https://github.com/openai/codex/pull/19907)

3. **#19900 – Built-in default permission profiles**  
   *Author: bolinfest*  
   New default profiles to replace legacy `SandboxPolicy`. Handle empty `config.toml` gracefully without rewriting user-owned configs. Migration milestone.  
   [GitHub](https://github.com/openai/codex/pull/19900)

4. **#19775 – Derive snapshot sandbox projections**  
   *Author: bolinfest*  
   Removes duplicate permission state in `ThreadConfigSnapshot` by deriving `sandbox_policy` from canonical `permission_profile`, preventing drift.  
   [GitHub](https://github.com/openai/codex/pull/19775)

5. **#19776 – Store thread sessions as profiles**  
   *Author: bolinfest*  
   Makes `PermissionProfile` required in thread sessions; removes legacy `SandboxPolicy` from session cache. Enables simpler replay/switching logic.  
   [GitHub](https://github.com/openai/codex/pull/19776)

6. **#19899 – Mark permission profiles experimental in app-server protocol**  
   *Author: bolinfest*  
   Marks `PermissionProfile` fields as `#[experimental]` in wire protocol to prevent stable clients from depending on the unstable shape.  
   [GitHub](https://github.com/openai/codex/pull/19899)

7. **#19774 – Make SessionConfigured profile-only**  
   *Author: bolinfest*  
   Removes dual `sandbox_policy`/`permission_profile` emission in `SessionConfiguredEvent`. Forces all consumers to use the canonical profile.  
   [GitHub](https://github.com/openai/codex/pull/19774)

8. **#19708 – Load cloud requirements for agent identity**  
   *Author: shijie-oai*  
   Ensures Business/Enterprise workspace-managed requirements are fetched during Agent Identity sessions, fixing a gap where JWT identity didn't trigger cloud requirement loading.  
   [GitHub](https://github.com/openai/codex/pull/19708)

9. **#19160 – Streaming parser for apply_patch**  
   *Author: akshaynathan*  
   Incremental patch parser that processes patches line-by-line instead of re-parsing the whole file. Benchmarked 10-15x faster on reasonably sized patches.  
   [GitHub](https://github.com/openai/codex/pull/19160)

10. **#18594 / #18595 – TUI keymap system + Vim composer mode**  
    *Author: fcoury-oai*  
    Two PRs in a keymap stack: adds `/keymap` slash command for guided keybinding configuration, and introduces Vim composer mode with presets (`v2`), operator bindings, and frozen snapshot protection.  
    [PR #18594](https://github.com/openai/codex/pull/18594) | [PR #18595](https://github.com/openai/codex/pull/18595)

---

## Feature Request Trends

1. **Agent memory & state management** — Users want configurable memory retention, persistent agent state across sessions, and subagent resume support (#19140).
2. **Security boundaries** — `.codexignore` for sensitive files (#2847), fine-grained network approval (#19907), and built-in permission profiles (#19900) all point to growing demand for explicit permission control.
3. **Large context support** — Requests for 1M token GPT-5.5 context (#19464) and better token/byte estimation (#19806) indicate users pushing Codex into larger codebase workflows.
4. **TUI power features** — Recurring `/loop` prompts (#15679), Vim keybindings (#18595), and bash-mode history (#19613) show a sophisticated CLI user base wanting IDE-like efficiency.
5. **Cross-platform configuration** — Windows + WSL fixes (#18506, #15314), configurable chat storage paths (#19909), and Azure auth support (#19893) reflect a diverse deployment environment.

---

## Developer Pain Points

- **Resource leaks plague Desktop and CLI users** — 100% CPU on idle (#11981), orphaned MCP processes (#17832), idle memory generation draining quota (#19732), and reconnection failures (#13245). These are top-of-mind reliability issues.
- **Commit and Git workflow friction** — Native Commit button ignores custom instructions (#11356), submodule undo failures (#12792), and worktree merge problems on Windows (#15314) erode developer trust in the Git integration.
- **Thread and session reliability** — Stuck reconnection loops (#19690), failed turn restore with `markedStreaming=true`, and inability to exit after workspace expiration (#19915) suggest fragility in the state persistence layer.
- **Model and configuration instability** — Inability to change models (#17318), hidden file names behind aggregate summaries (#19891), and intrusive tray icons on Windows (#17442) create UX friction for power users.
- **Permission model migration turbulence** — While the `PermissionProfile` transition is necessary, the community is feeling the pain of dual authority and wire-format instability across multiple PRs and related issues.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-28

## Today's Highlights
Two nightly releases landed today, fixing response key schema gaps for custom themes and improving automatic update error handling. Meanwhile, critical bugs are mounting: a WSL crash due to PATH crawling on `/mnt/c/` and a fatal keystroke crash at 100% API quota are drawing urgent attention from the community.

## Releases
- **[v0.41.0-nightly.20260428.gc17400b83](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-nightly.20260428.gc17400b83)**
  - Fix: Added missing response key to custom theme text schema (@gaurav0107)
  - Fix: Provide manual update command when automatic update fails (@cocosheng-gem)
- **[v0.41.0-nightly.20260427.g42587de73](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-nightly.20260427.g42587de73)**
  - Fix: Only show `list` suggestion when partial input is empty (@cynthialong0-0)
  - Feat: Secure .env loading and enforce workspace trust in headless mode (@ehedlund)

## Hot Issues (Top 10 by Activity)

1. **[#23800 – Show full command with Ctrl+O](https://github.com/google-gemini/gemini-cli/issues/23800)**  
   Users want transparency: hitting Ctrl+O to see full shell output should also reveal the exact command run. 6 comments, community strongly supports this for security verification.

2. **[#23675 – Gemini CLI is Clumsy](https://github.com/google-gemini/gemini-cli/issues/23675)**  
   A candid UX complaint comparing CLI editing experience unfavorably to vim. 6 comments signal broader dissatisfaction with terminal editing ergonomics.

3. **[#22323 – Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   Critical P1 bug: `codebase_investigator` subagent reports success even when it hits turn limits before doing any work. Maintainer-only, 4 comments, 2 👍.

4. **[#24916 – Repeated permission prompts on same file](https://github.com/google-gemini/gemini-cli/issues/24916)**  
   "Allow for all future sessions" doesn't stick. 3 comments, high frustration from users who expect persistent permissions.

5. **[#25166 – Shell command hangs with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   Simple commands get stuck post-execution, showing "Awaiting user input" despite completion. 2 comments, 3 👍 — a workflow blocker.

6. **[#26086 – Quota flapping 9%→Limit Reached](https://github.com/google-gemini/gemini-cli/issues/26086)**  
   Gemini Code Assist Standard quota oscillates wildly without usage changes. Opened today, likely an API counting bug.

7. **[#26089 – Fatal crash on keystroke at 100% quota](https://github.com/google-gemini/gemini-cli/issues/26089)**  
   CLI crashes immediately when typing if Model Usage quota is exhausted. Opened today, urgent for heavy users.

8. **[#26091 – WSL crash due to 9P PATH crawling](https://github.com/google-gemini/gemini-cli/issues/26091)**  
   v0.39.1 autocomplete breaks on WSL: scanning `/mnt/c/` Windows paths yields EACCES crashes. Opened today, 0 comments but critical for WSL users.

9. **[#24246 – 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   The agent hits a 400 error when more than 128 tools are enabled. Needs smarter tool scoping.

10. **[#22819 – Memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**  
    Proposal to separate user preferences (global) from project-specific memory. Workstream-rollup, 2 👍 — a well-received architectural improvement.

## Key PR Progress

1. **[#26092 – Fix DECKPAM keypad Enter in VS Code Linux terminal](https://github.com/google-gemini/gemini-cli/pull/26092)**  
   Maps Numpad Enter (`\eOM`) for Application Keypad Mode — fixes a common Linux IDE pain point.

2. **[#26087 – Fix global config persistence and OAuth URL display](https://github.com/google-gemini/gemini-cli/pull/26087)**  
   Clean replacement for a prior PR. Implements resilient JSON writing and fixes OAuth URL visibility.

3. **[#26088 – Add F10 fallback for approval mode cycling](https://github.com/google-gemini/gemini-cli/pull/26088)**  
   F10 as alternative to Shift+Tab for Windows/WezTerm users whose terminal mangles key sequences.

4. **[#26063 – Restrict permissions on project temp dir tree](https://github.com/google-gemini/gemini-cli/pull/26063)**  
   Tightens security on `~/.gemini/` sensitive state (conversations, logs, checkpoints). Closes #24743.

5. **[#26090 – Support Vietnamese IME input on Windows](https://github.com/google-gemini/gemini-cli/pull/26090)**  
   Fixes two underlying causes of diacritic character loss in interactive prompt. Merged (CLOSED).

6. **[#25809 – Add 'Esc to close' hint to AuthDialog](https://github.com/google-gemini/gemini-cli/pull/25809)**  
   Simple UX improvement: informs users they can dismiss authentication dialog with Escape key.

7. **[#26073 – Fix remaining issues with generalist profile](https://github.com/google-gemini/gemini-cli/pull/26073)**  
   Sweeping bugfix for the generalist agent profile. Closes #26072.

8. **[#24736 – Union-find context compaction for AgentHistoryProvider](https://github.com/google-gemini/gemini-cli/pull/24736)**  
   Novel compression strategy: graduates messages from hot buffer to cold forest via semantic similarity clustering. Merged.

9. **[#25247 – Integrate Squeeze for task-conditioned tool output pruning](https://github.com/google-gemini/gemini-cli/pull/25247)**  
   Replaces LLM-based summarizer with a 2B parameter model that preserves verbatim output. Merged.

10. **[#25274 – Replace NPM `open` with internal browser function](https://github.com/google-gemini/gemini-cli/pull/25274)**  
    Removes vulnerability from bundled xdg-open. Uses system xdg-open instead. Merged, security-focused.

## Feature Request Trends

1. **Transparency & Trust** – Users demand visibility into exact commands executed (Ctrl+O enhancement), permission tracking, and audit trails.
2. **Memory & Personalization** – Strong requests for global vs. project memory routing (#22819), proactive memory writes (#22809), and persistent preference learning.
3. **Terminal Compatibility** – Consistent asks for better Windows/WSL/SSH support, improved keybinding fallbacks, and screen reader accessibility (#25218).
4. **Agent Safety** – Requests for destructive action prevention (#22672), subagent awareness of approval modes (#23582), and graceful turn-limit handling.
5. **AST-Aware Tooling** – Epic #22745 tracking AST-aware file reads, search, and codebase mapping for more precise agent actions.

## Developer Pain Points

1. **Terminal Rendering Bugs** – Scrambled text over SSH (#24202), thick UI borders (#24915), corrupt screen after external editors (#24935), scroll flickering in long chats (#24470) — terminals are the top UX friction.
2. **Permission & Quota Instability** – Repeated permission prompts (#24916), quota flapping (#26086), and crashes at quota exhaustion (#26089) erode user trust.
3. **CLI Editing Ergonomics** – Issue #23675 ("CLI is Clumsy") captures deep frustration with terminal editing, echoed by the Ctrl+O gap (#23800) and keypad support gaps.
4. **Agent Reliability** – Subagent success misreporting (#22323), hanging after commands (#25166), and 400 errors with large tool sets (#24246) undermine the core agentic value proposition.
5. **WSL/Cross-Platform Breakage** – The new autocomplete in v0.39.1 crashing on WSL (#26091) demonstrates how quickly platform-specific regressions can block a large user segment.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-28

## Today's Highlights
Version **1.0.37** shipped yesterday with location-based permission persistence and shell completion generation, though it appears to have introduced regressions in plugin loading and custom agent resolution. The community is sounding alarms over infinite loops in autopilot mode that burn premium requests, with **three new reports** surfacing in the last 24 hours alone — making this the single most concerning reliability trend. Model parity between CLI and VS Code remains a top frustration, with GPT-5.4 effort-level inconsistency generating 33 comments and counting.

## Releases
### [v1.0.37](https://github.com/github/copilot-cli/releases/tag/v1.0.37) — 2026-04-27
- **Location-based permission persistence** is now enabled by default — approvals carry over across sessions for the same directory, reducing repetitive approval prompts.
- New `copilot completion <bash|zsh|fish>` subcommand generates static shell completion scripts for subcommands, flags, and known choice values.
- Press `s` (feature snippet not fully disclosed in changelog).

> ⚠️ **Note:** Multiple users report that skills/plugins fail to load on 1.0.37 (see [#2977](https://github.com/github/copilot-cli/issues/2977)), and custom agent resolution appears broken ([#3006](https://github.com/github/copilot-cli/issues/3006)). Consider testing before upgrading.

## Hot Issues (10 of Note)

### 1. [GPT-5.4 model picker hides "Extra High" effort despite runtime support](https://github.com/github/copilot-cli/issues/2725)
- **Comments:** 33 | **👍:** 21 | *Status: CLOSED*
- The `/model` picker shows only Low/Medium/High for GPT-5.4, but `xhigh` still works if set manually. This UX inconsistency misleads users into thinking higher effort levels are unavailable. Community reaction is strong — likely the most-voted bug this week.

### 2. [Single request → 80-100 premium requests consumed per session](https://github.com/github/copilot-cli/issues/2591)
- **Comments:** 32 | **👍:** 13 | *Status: CLOSED*
- Each tool invocation and thinking step triggers a new premium request, causing catastrophic quota burn from a single user prompt. Closed but the underlying architecture concern remains unresolved.

### 3. [Copilot CLI doesn't list all org-enabled models (e.g., Gemini 3.1 Pro)](https://github.com/github/copilot-cli/issues/1703)
- **Comments:** 25 | **👍:** 40 | *Status: OPEN*
- Persistent disparity between CLI and VS Code model availability. 40 reactions suggest this is a systemic blocker for enterprise teams standardizing on CLI. **Highest 👍 count of any open issue.**

### 4. [Autopilot infinite loop on externally blocked tasks](https://github.com/github/copilot-cli/issues/2969)
- **Comments:** 3 | **👍:** 0 | *Status: OPEN*
- Autopilot mode relaunches tasks indefinitely when blocked, consuming premium requests until quota exhaustion. No user-side kill-switch exists.

### 5. [Compaction strips `<agent_instructions>` from custom agent profiles](https://github.com/github/copilot-cli/issues/2895)
- **Comments:** 2 | **👍:** 1 | *Status: OPEN*
- After `/compact`, custom agent instructions disappear — this breaks the entire custom agent workflow, making context compaction effectively destructive for agent users.

### 6. [One prompt triggered autopilot infinite loop](https://github.com/github/copilot-cli/issues/3010)
- **Comments:** 0 | **👍:** 0 | *Status: OPEN*
- **New today.** Third infinite-loop report in 72 hours, with screenshots showing the agent spinning without completion. Pattern suggests a systemic tool-calling recursion issue.

### 7. [MCP OAuth callback unreachable in Codespaces](https://github.com/github/copilot-cli/issues/3009)
- **Comments:** 0 | **👍:** 0 | *Status: OPEN*
- **New today.** Localhost callback URLs are unreachable from remote containers, and there's no manual token paste fallback. Breaks MCP setup in the most common remote dev environment.

### 8. [Output exceeds its own read limits](https://github.com/github/copilot-cli/issues/3008)
- **Comments:** 0 | **👍:** 0 | *Status: OPEN*
- **New today.** Copilot generates output that requires 5+ additional read calls to consume, creating a self-defeating loop where analysis tooling fails on its own outputs.

### 9. [Custom agent shown in status line but not actually loaded](https://github.com/github/copilot-cli/issues/3006)
- **Comments:** 0 | **👍:** 0 | *Status: OPEN*
- **New today.** UI indicates a custom agent is active, but the agent responds as "Copilot CLI agent" and ignores its own skills. Detachment between UI state and runtime state undermines trust in the agent switcher.

### 10. [`--config-dir` doesn't isolate plugins](https://github.com/github/copilot-cli/issues/3000)
- **Comments:** 3 | **👍:** 0 | *Status: OPEN*
- Plugins are always read from `~/.copilot/config.json` regardless of `--config-dir`, breaking configuration isolation. This affects CI/CD pipelines and multi-tenant setups.

## Key PR Progress
*No pull requests were updated or created in the last 24 hours.* Development activity appears focused on bug-fix releases rather than new feature branches.

## Feature Request Trends
1. **Agent mode switching & lifecycle control** — Multiple requests for automatic model switching between planning/execution ([#2792](https://github.com/github/copilot-cli/issues/2792)), ACP mode transitions ([#2942](https://github.com/github/copilot-cli/issues/2942]), and ability to alt-tab into agent-spawned shells ([#3001](https://github.com/github/copilot-cli/issues/3001)).
2. **Terminal rendering UX improvements** — Recurring requests for collapsible output sections ([#1787](https://github.com/github/copilot-cli/issues/1787)), auto-scroll disable ([#2372](https://github.com/github/copilot-cli/issues/2372)), Nerd Font glyph rendering ([#3004](https://github.com/github/copilot-cli/issues/3004)), and screen reader feedback ([#3005](https://github.com/github/copilot-cli/issues/3005)).
3. **MCP & plugin configurability** — "Disable MCP" in interactive menus ([#2956](https://github.com/github/copilot-cli/issues/2956)), proper config-dir isolation ([#3000](https://github.com/github/copilot-cli/issues/3000)), and temp file cleanup controls ([#3007](https://github.com/github/copilot-cli/issues/3007)).
4. **Attribution & compliance** — Auto-injecting "Co-authored-by: Copilot" in commits ([#1455](https://github.com/github/copilot-cli/issues/1455)) remains a long-standing feature request with low activity but consistent demand.

## Developer Pain Points
- **Premium request burn from infinite loops** — The #1 reliability complaint. Multiple reports of autopilot mode or tool-calling recursion consuming 80-100+ requests per session with no kill switch. Three new reports in 24 hours suggest a regression.
- **Model availability fragmentation** — CLI users cannot access models their org has enabled (Gemini 3.1 Pro, GPT-5.4 xhigh). This is a dealbreaker for organizations standardizing on CLI.
- **Plugin/agent loading broken in 1.0.37** — Skills fail to load ([#2977](https://github.com/github/copilot-cli/issues/2977)), custom agents display but don't execute ([#3006](https://github.com/github/copilot-cli/issues/3006)), and config-dir isolation is broken ([#3000](https://github.com/github/copilot-cli/issues/3000)). The latest release introduced a cluster of configuration-layer regressions.
- **Remote container/MCP friction** — No OAuth fallback for Codespaces, terminal detection fails in WSL, and the GitHub Android app blocks remote sessions after quota limits — all making remote workflows fragile.
- **Context compaction breaks custom agents** — The `/compact` feature strips custom agent instructions, making it destructive for users who rely on agent profiles. This is a fundamental design tension between memory optimization and agent configuration persistence.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-04-28**

---

## Today's Highlights

The community is buzzing with approval workflow improvements: three PRs landed on auto-approval and configurable timeouts, addressing a long-standing pain point (Issue #1823). Meanwhile, a **critical bug in v1.39.0** blocking `/web` mode on Windows was reported, and new concerns emerged around session data integrity and MCP tool scalability. The team also raised the default agent steps limit from 500 to 1000 to reduce aborted runs.

---

## Releases

No new releases in the last 24 hours. Latest version remains **v1.39.0**.

---

## Hot Issues *(10 notable items)*

| Issue | Status | Summary & Why It Matters |
|-------|--------|--------------------------|
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | ❌ Closed | **Configurable Approval Request Timeout** — The 5-minute hard-coded timeout has frustrated users with long-running workflows. 2 👍, 5 comments. |
| [#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074) | 🔴 Open | **v1.39.0 /web mode broken on Windows** — JavaScript MIME type error prevents page loading. Affects users relying on local web server. |
| [#2096](https://github.com/MoonshotAI/kimi-cli/issues/2096) | 🔴 Open | **MCP tool list too long → init error** — When many MCP tools are configured, the CLI fails to initialize. A growing concern as MCP ecosystems expand. |
| [#2093](https://github.com/MoonshotAI/kimi-cli/issues/2093) | 🔴 Open | **Session persistence lacks `fsync`** — Data loss risk on abnormal exit. Critical for long-running sessions. No comments yet. |
| [#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091) | 🔴 Open | **Extreme session slowdown after MATLAB work (v1.37.0)** — Several seconds per token. Windows 10, possible memory or context leak. |
| [#2090](https://github.com/MoonshotAI/kimi-cli/issues/2090) | 🔴 Open | **First-line character indent bug** — Display glitch on WSL2 Ubuntu. Low severity but annoying. |
| [#2089](https://github.com/MoonshotAI/kimi-cli/issues/2089) | 🔴 Open | **Feature request: remove session execution without file search** — UX polish request for session management. |
| [#2051](https://github.com/MoonshotAI/kimi-cli/issues/2051) | ❌ Closed | **Shell transcript hides `skill` and `flow` slash prompts** — Fixed in PR #2052. |
| [#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091) (dup) | 🔴 Open | See above — user concern over performance regression. |

---

## Key PR Progress *(10 important PRs)*

| PR | Status | Description |
|----|--------|-------------|
| [#2095](https://github.com/MoonshotAI/kimi-cli/pull/2095) | 🔴 Open | **feat: auto approval w/ config granularity** — Closely related to Issue #1631. Config-driven auto-approval with glob patterns. |
| [#1837](https://github.com/MoonshotAI/kimi-cli/pull/1837) | ❌ Closed | **feat(config): make approval timeout configurable** — Supports `timeout_s=0` for unlimited wait. Addresses #1823 directly. |
| [#2088](https://github.com/MoonshotAI/kimi-cli/pull/2088) | ❌ Closed | **chore(config): raise default max_steps_per_turn from 500 to 1000** — Reduces `MaxStepsReached` aborts for long agent runs. |
| [#2087](https://github.com/MoonshotAI/kimi-cli/pull/2087) | ❌ Closed | **fix(approval): scope pending requests to turn lifecycle** — Indefinite approval wait by default, cancel on Soul exit. |
| [#2094](https://github.com/MoonshotAI/kimi-cli/pull/2094) | ❌ Closed | **feat: auto-approval w/ configuration** — Duplicate of #2095 (superseded). |
| [#2092](https://github.com/MoonshotAI/kimi-cli/pull/2092) | ❌ Closed | **feat(config): Add Granular Auto-Approval Rules** — Similar to Claude Code. Glob patterns + MCP tool approval. |
| [#2082](https://github.com/MoonshotAI/kimi-cli/pull/2082) | 🔴 Open | **feat(session): expose runtime identity (pid + session id)** — Useful for external monitoring and process management. |
| [#2083](https://github.com/MoonshotAI/kimi-cli/pull/2083) | 🔴 Open | **feat(proctitle): dynamic terminal title with cwd + topic** — Solves regression where tab titles lost session context. |
| [#2003](https://github.com/MoonshotAI/kimi-cli/pull/2003) | ❌ Closed | **fix(soul): re-inject yolo reminder after context compaction** — Ensures non-interactive mode reminder persists across compaction. |
| [#2085](https://github.com/MoonshotAI/kimi-cli/pull/2085) | 🔴 Open | **test(ai): add e2e accuracy** — Evaluation framework using Terminal Bench 2. Wants to track feature impact on rollout success rate. |

---

## Feature Request Trends

1. **Approval Workflow Autonomy** — The #1 trend: configurable timeouts, granular auto-approval rules (glob patterns, MCP tools), and indefinite wait. Users want to reduce manual intervention for trusted actions. *(Issues #1823, #1631 linked)*
2. **Session/Execution Management** — Users ask for easier way to delete session executions without navigating file system (#2089).
3. **Observability & Identity** — PRs expose PID-to-session mapping and dynamic terminal titles (#2082, #2083). Community wants to integrate kimi-cli into broader tooling.
4. **Accuracy Evaluation** — PR #2085 proposes a formal accuracy benchmark suite to track feature impact.

---

## Developer Pain Points

- **Windows / WSL2 Experience** — Frequent cross-platform bugs (#2074, #2090). MIME type issues and layout glitches suggest insufficient testing on Windows environments.
- **Data Loss Risk** — The `fsync` omission (#2093) is a silent data loss vector. Highly critical for production use.
- **Performance Regression** — Slow sessions after heavy MATLAB usage (#2091). Need for memory/context profiling tools.
- **MCP Scalability** — MCP tool list overflow breaks initialization (#2096). As the MCP ecosystem grows, this will affect more users.
- **Inconsistent Session Persistence** — Data only "saved" on normal exit, not on crash/kill (#2093). Reliability concern for long-running use cases.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-28

## Today's Highlights

The community is seeing progress on session lifecycle management with multiple PRs adding session move/detach capabilities, alongside continued attention to onboarding issues like the Black Screen bug (still unresolved for some). A significant discussion around DeepSeek v4 Pro tool format compatibility is driving fixes across Go, proxy, and core codebases. Several developer pain points around WSL/Windows compatibility, C shell support, and image input for vision models remain active.

---

## Releases

**No new releases in the last 24 hours.**

---

## Hot Issues

1. **#8829 — "The requested model is not supported" with gemini3pro in GitHub Copilot**  
   *Author: fly-potato-100 | 31 comments | 👍 8*  
   Business Copilot users with all models enabled can use sonnet/gpt/gemini flash but hit an unsupported model error specifically for gemini3pro. Likely a model name mapping or capability detection issue.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/8829)

2. **#10221 — Black screen on just installed opencode**  
   *Author: akopichin | 26 comments | 👍 16*  
   Fresh install shows only a black screen. High community engagement — this has been the top-voted issue in the last 24h and impacts first-time user experience significantly.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/10221)

3. **#10531 — Feature: Native Multimodal Context Support (Video/Audio)**  
   *Author: AimAmit | 10 comments | 👍 10*  
   User migrating from Claude Code wants native video/audio input support. Highlights a feature gap for media-rich workflows.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/10531)

4. **#24224 — deepseek-v4-pro Anthropic proxy tool format broken**  
   *Author: superheroYu | 8 comments | 👍 7*  
   OpenCode Go as Anthropic-compatible proxy fails with 400 error because `tools[0].function.name` is missing. High-priority for DeepSeek users on the proxy path.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/24224)

5. **#15728 — Read tool cannot pass image data to vision-capable models**  
   *Author: differs | 7 comments | 👍 4*  
   The Read tool doesn't convert images into visual input format for models like qwen3.5-plus. Still open — blocking image analysis workflows.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/15728)

6. **#9165 — Feat: Add Kiro provider for AWS Bedrock Claude models**  
   *Author: ikeda-tomoya-swx | 7 comments | 👍 37*  
   Very popular feature request (37 upvotes) to add Kiro CLI authentication for AWS Bedrock access without direct AWS credentials.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/9165)

7. **#11963 — No way to quickly go back to a previous prompt**  
   *Author: nostitos | 7 comments | 👍 0*  
   After a crash or API stall, there's no resend/re-prompt functionality. Pure workflow friction.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/11963)

8. **#9081 — WSL2/devcontainer: MCP OAuth callback unreachable from host browser**  
   *Author: chrisolszewski | 6 comments | 👍 0*  
   OAuth callback bound to localhost inside WSL2/Docker can't be reached by host browsers. Fixed in PR #9078.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/9081)

9. **#8826 — bunx opencode-ai installs incorrect musl binary on WSL**  
   *Author: qqlzfmn | 5 comments | 👍 1*  
   WSL (glibc) gets musl binary from bunx, causing binary incompatibility. Indicates platform detection issue in installer.  
   [Issue Link](https://github.com/anomalyco/opencode/issues/8826)

10. **#23637 — Agent repeatedly uses bash-style 2>&1 redirection in csh/tcsh**  
    *Author: Fu-Xiaotian | 3 comments | 👍 0*  
    csh/tcsh users get stray `1` files as the agent incorrectly uses bash redirection syntax. Shell detection bug.  
    [Issue Link](https://github.com/anomalyco/opencode/issues/23637)

---

## Key PR Progress

1. **#24728 — feat: `opencode session move` / `session detached`**  
   *Author: rektide | Open*  
   Adds session move and detached commands, closing #24708. Enables session lifecycle management.  
   [PR Link](https://github.com/anomalyco/opencode/pull/24728)

2. **#24726 — feat(session): add methods to migrate session**  
   *Author: Alchuang22-dev | Open*  
   First-class session migration and orphan recovery, building on session move work.  
   [PR Link](https://github.com/anomalyco/opencode/pull/24726)

3. **#24730 — fix: sanitize tools for moonshot**  
   *Author: rekram1-node | Open*  
   Fixes Stitch MCP tool formatting issues (related to #23887). Will help moonshot provider compatibility.  
   [PR Link](https://github.com/anomalyco/opencode/pull/24730)

4. **#24720 — fix(desktop): prevent 100% CPU usage caused by infinite reconnects**  
   *Author: isac322 | Open*  
   Fixes #24719 — resolves infinite reconnects and recursive directory traversals causing 100% CPU on Linux/WSL.  
   [PR Link](https://github.com/anomalyco/opencode/pull/24720)

5. **#24725 — fix(tui): sort session picker by full updated timestamp**  
   *Author: Sleepful | Open*  
   Fixes #24727 — TUI session picker now sorts by updated timestamp instead of creation time, preventing session jump-around.  
   [PR Link](https://github.com/anomalyco/opencode/pull/24725)

6. **#19067 — ci: only build electron desktop**  
   *Author: Brendonovich | Open*  
   Removes Tauri build jobs, pointing latest.json to Electron release assets. Architecture migration signal.  
   [PR Link](https://github.com/anomalyco/opencode/pull/19067)

7. **#9078 — feat(mcp): support explicit OAuth callback host binding**  
   *Author: chrisolszewski | Closed*  
   Adds `oauth.callbackHost` for MCP OAuth to fix WSL2/Docker callback reachability. Merged.  
   [PR Link](https://github.com/anomalyco/opencode/pull/9078)

8. **#14326 — fix: switch SQLite from WAL to DELETE journal mode**  
   *Author: theabecaster | Closed*  
   Docker/macOS bind mounts corrupt SQLite `-shm` files. Switching to DELETE mode prevents corruption. Merged.  
   [PR Link](https://github.com/anomalyco/opencode/pull/14326)

9. **#23108 — feat: add cache_point_ttl option for Bedrock provider**  
   *Author: bainos | Open*  
   Adds `cache_point_ttl` (5m/1h) to Bedrock provider config for prompt caching via AWS Bedrock.  
   [PR Link](https://github.com/anomalyco/opencode/pull/23108)

10. **#18767 — feat(app): Mobile Touch Optimization**  
    *Author: noahbentusi | Open*  
    Optimizes the OpenCode app for mobile/touch devices while preserving desktop experience. Broad platform work.  
    [PR Link](https://github.com/anomalyco/opencode/pull/18767)

---

## Feature Request Trends

The most demanded feature directions from recent issues:

- **Multimodal input**: Video/audio support (#10531) and image input for vision models (#15728, #22469) — users increasingly expect rich media workflows.
- **Provider expansion**: AWS Bedrock via Kiro CLI (#9165, +37👍) and DeepSeek v4 Pro proxy compatibility (#24224) indicate demand for enterprise and alternative model providers.
- **Session lifecycle management**: Session move, detach, migration, and orphan recovery (#24708, #23250) — power users need session portability.
- **Better UX for failures**: Quick re-prompt after crash/stall (#11963), background task visibility in sidebar (#8322), and session picker usability (#16733).
- **Cross-platform parity**: WSL2/Docker networking fixes (#9081), shell detection for csh/tcsh (#23637), and platform-specific binary detection (#8826).

---

## Developer Pain Points

**Windows & WSL issues remain the largest recurring pain point**, with 7+ issues tagged `[windows]` or `[wsl]` — including OAuth callbacks, binary detection, mapped drives causing hangs, and permission path breakage in non-git projects.

**Onboarding friction** is the second most common pattern: black screen on install (#10221), invisible text in TUI (#14056), and missing image input support (#15728) create immediate barriers to adoption.

**Model/provider compatibility** is an emerging pain cluster: DeepSeek v4 Pro tool format breaks (#24224), moonshot sanitization needed (#24730), and reasoning_content being dropped (#24714) indicate the proxy/provider architecture is under strain from model diversity.

**SQLite corruption** in Docker via WAL mode (#14326) and the broader SQLite durability question show data safety concerns for production users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-28

## Today's Highlights
Three patch releases in 24h fix critical startup and packaging bugs across the pi ecosystem — including a session selector import issue that broke the `pi` command itself. Community energy remains high around provider expansion (Cloudflare Workers AI, AI Gateway, Together AI) and fixing Bun/npm compatibility quirks that plague sandboxed environments. A batch of "closed-because-weekend" issues cleared out with fixes merged, suggesting a productive Monday triage session.

## Releases
**v0.70.3, v0.70.4, v0.70.5** (shipped 2026-04-27/28)
- **v0.70.3**: `pi update` now self-updates pi itself (not just packages) ([#3680](https://github.com/badlogic/pi-mono/pull/3680) by @mitsuhiko). Added Azure Cognitive Services endpoint support for Azure OpenAI.
- **v0.70.4**: Fixed packaged `pi` startup crash — the session selector was importing a source-only utility path.
- **v0.70.5**: Fixed HTML export preserving ANSI-renderer trailing padding as extra blank wrapped lines.

**Note**: v0.70.3 had a bundling regression (missing `paths.js` module) that caused startup failures for some installs — v0.70.4 is the recommended update.

## Hot Issues

1. **[#3715](https://github.com/badlogic/pi-mono/issues/3715) — `local-llm` streams killed at 5 min by undici `bodyTimeout`** (8 comments, 👍2)  
   Long `Write` tool calls against vLLM die silently after 5 minutes. The `retry.provider.timeoutMs` setting is ignored because undici’s internal timeout runs on a different code path. Community calling for a configurable `bodyTimeout` passthrough.

2. **[#1155](https://github.com/badlogic/pi-mono/issues/1155) — Missing Vertex AI provider for Anthropic Claude** (9 comments, closed)  
   Users on GCP who want Claude models via Vertex AI are stuck — the `google-vertex` provider only supports Gemini paths. Long-standing request (Feb 2026) finally closed, likely awaiting the new provider slot.

3. **[#3828](https://github.com/badlogic/pi-mono/issues/3828) — Qwen3.5/3.6 Plus models fail from OpenCode Go provider** (4 comments)  
   Selecting the model works, but prompting returns a 404 HTML error page. Community suspects the provider endpoint configuration doesn't route these specific model IDs correctly.

4. **[#3846](https://github.com/badlogic/pi-mono/issues/3846) — `pi-coding-agent` v0.70.3 fails with `ERR_MODULE_NOT_FOUND`** (4 comments)  
   A missing `paths.js` module in the packaged agent breaks startup for both npm and Bun installs. Quick patch released in v0.70.4.

5. **[#3823](https://github.com/badlogic/pi-mono/issues/3823) — `pi install` uses wrong package manager** (4 comments)  
   `pi install` always calls `npm install -g`, even when pi itself was installed via pnpm. Fails on minimal Node.js setups (e.g., Nix with nodejs-slim). High-priority for multi-pm environments.

6. **[#3779](https://github.com/badlogic/pi-mono/issues/3779) — 400 error from opencode/minimax-m2.5-free** (4 comments, 👍2)  
   Pi sends `eager_input_streaming: true` on every tool, which the OpenCode Zen backend rejects. Root cause is missing model compat flags. Fixed in [#3802](https://github.com/badlogic/pi-mono/pull/3802).

7. **[#3787](https://github.com/badlogic/pi-mono/issues/3787) — DeepSeek V4 Flash: xhigh reasoning silently clamped to high** (4 comments, 👍1)  
   `supportsXhigh()` doesn't recognize `deepseek-v4-flash`, so `xhigh` falls back to `high`. Empirical testing shows Flash supports the higher tier. Mirrors a previously fixed issue with the Pro variant.

8. **[#3826](https://github.com/badlogic/pi-mono/issues/3826) — Markdown renderer stack-overflows on long leading `>` lines** (2 comments, 👍1)  
   Pi v0.70.2 crashes when resuming sessions with pasted terminal output starting with many `>` characters (e.g., pytest/PDB separators). `RangeError: Maximum call stack size exceeded` in `renderToken()`. High visibility due to crash-on-open severity.

9. **[#3671](https://github.com/badlogic/pi-mono/issues/3671) — Copilot provider hangs on long Retry-After waits** (2 comments)  
   When GitHub Copilot returns 429 rate limit responses, the OpenAI SDK retries with unbounded `retry-after` waits, freezing pi on "Working..." with no user feedback. Needs a user-facing timeout or cancel mechanism.

10. **[#3864](https://github.com/badlogic/pi-mono/issues/3864) — Expose selector display entry point for extensions** (2 comments)  
    Building Amp-like command palettes requires an API to invoke built-in selectors (model, settings, tree) from extension code. Currently no public hook exists, limiting extension creativity.

## Key PR Progress

1. **[#3624](https://github.com/badlogic/pi-mono/pull/3624) — feat(ai): add Together AI as a provider** (OPEN)  
   Native Together AI support via OpenAI-compatible Chat Completions API. Sources models from `models.dev`, filters for tool-capable non-deprecated models. A major new provider for the ecosystem.

2. **[#3861](https://github.com/badlogic/pi-mono/pull/3861) — fix(coding-agent): use alternate logic to find Bun's node_modules** (OPEN, @thirtythreeforty)  
   When `"npmCommand": ["bun"]` is configured, `bun root -g` fails — Bun doesn't support that subcommand. This PR detects Bun and uses the correct path resolution strategy.

3. **[#3856](https://github.com/badlogic/pi-mono/pull/3856) — feat(ai): add Cloudflare AI Gateway as a provider** (OPEN, @mchenco)  
   Builds on the Workers AI PR. Adds gateway in front of OpenAI/Anthropic/Workers AI with caching, analytics, and rate limiting. Auth via `CLOUDFLARE_API_KEY` + `CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_GATEWAY_ID`.

4. **[#3851](https://github.com/badlogic/pi-mono/pull/3851) — feat(ai): add Cloudflare Workers AI as a provider** (CLOSED, @mchenco)  
   Adds `cloudflare-workers-ai` to `KnownProvider`. Uses the existing `openai-completions` protocol with a per-account URL template containing `{CLOUDFLARE_ACCOUNT_ID}`.

5. **[#3680](https://github.com/badlogic/pi-mono/pull/3680) — Add built-in update command** (CLOSED, @mitsuhiko)  
   `pi update` now updates pi itself. Currently always updates if a newer version exists; intentional until a proper update check is wired up. Already shipped in v0.70.3.

6. **[#3799](https://github.com/badlogic/pi-mono/pull/3799) — add azure cognitive services as provider** (CLOSED, @marcbloech)  
   Support for `*.cognitiveservices.azure.com` base URLs alongside existing `*.openai.azure.com` endpoints. Auto-normalizes root and `/openai`-only paths to `/openai/v1`. Addresses [#3638](https://github.com/badlogic/pi-mono/issues/3638).

7. **[#3807](https://github.com/badlogic/pi-mono/pull/3807) — fix(coding-agent): work around Bun empty process.env inside sandbox** (CLOSED, @mdsjip)  
   Bun bug `oven-sh/bun#27802` causes `process.env` to be empty in Linux sandboxes (Landlock/seccomp). This PR adds `getSandboxSafeEnv()` to fall back to `/proc/self/environ`.

8. **[#3832](https://github.com/badlogic/pi-mono/pull/3832) — Remove Qwen CLI OAuth provider extension** (OPEN, @4h9fbZ)  
   The Qwen OAuth free tier was discontinued April 15, 2026. This removes the `custom-provider-qwen-cli` extension added in [#940](https://github.com/badlogic/pi-mono/issues/940). Retains `thinkingFormat: "qwen"` support.

9. **[#3818](https://github.com/badlogic/pi-mono/pull/3818) — fix(coding-agent): dedupe symlinked resources** (CLOSED, @aliou)  
   Symlinked resources (e.g., `node_modules` linked from a monorepo) were counted multiple times. This PR canonicalizes paths before dedup. Fixes [#3767](https://github.com/badlogic/pi-mono/issues/3767).

10. **[#3795](https://github.com/badlogic/pi-mono/pull/3795) — Properly track fromId in branch_summary events** (OPEN, @CGamesPlay)  
    Fixes a documentation/reality mismatch: the `BranchSummaryEntry` docs say `parentId` should differ from `fromId`, but the implementation was setting them equal. Adds proper tracking of the branching commit point.

## Feature Request Trends

**Provider expansion** dominates — three PRs this week alone add Together AI, Cloudflare Workers AI, and Cloudflare AI Gateway. The community clearly wants pi to serve as a universal LLM gateway, not just an Anthropic/OpenAI client.

**Extension API surface growth** is accelerating: issue [#3864](https://github.com/badlogic/pi-mono/issues/3864) (expose selector display), [#3822](https://github.com/badlogic/pi-mono/issues/3822) (window focus/blur events), [#3817](https://github.com/badlogic/pi-mono/issues/3817) (image generation as output) — developers are building rich overlays, command palettes, and splash sections on top of pi.

**Streaming performance** is an emerging concern: issue [#2067](https://github.com/badlogic/pi-mono/issues/2067) (incremental markdown streaming to avoid full re-parse on every token) has 3 comments but zero activity since March. As models output longer chains of thought, the per-token cost of re-rendering the full markdown buffer becomes noticeable.

## Developer Pain Points

**Package manager assumptions** continue to cause headaches. Three distinct issues this week ([#3823](https://github.com/badlogic/pi-mono/issues/3823), [#3809](https://github.com/badlogic/pi-mono/issues/3809), [#3861](https://github.com/badlogic/pi-mono/issues/3861)) all stem from pi assuming `npm` is available or using `npm root -g` — while users increasingly run under pnpm, Bun, or minimal Nix environments. The Bun sandbox bug ([#3807](https://github.com/badlogic/pi-mono/pull/3807)) adds another layer: even `process.env` can be empty.

**Release quality regression** is a repeating pattern this week: v0.70.3 shipped with at least two separate packaging bugs (missing session selector import, missing `paths.js` module) that required v0.70.4 within hours. Issue [#3846](https://github.com/badlogic/pi-mono/issues/3846), [#3840](https://github.com/badlogic/pi-mono/issues/3840), and [#3842](https://github.com/badlogic/pi-mono/issues/3842) all report the same startup crash. Community sentiment is patient but notes the need for better CI packaging checks.

**Provider model compatibility** is a persistent friction point: DeepSeek V4 Flash doesn't expose `xhigh` thinking ([#3849](https://github.com/badlogic/pi-mono/issues/3849)), minimax-m2.5-free rejects tool-level fields ([#3779](https://github.com/badlogic/pi-mono/issues/3779)), and Qwen3.5/3.6 returns 404 ([#3828](https://github.com/badlogic/pi-mono/issues/3828)). Each model has unique quirks that require manual compat blocks — the community would benefit from a standardized model capability discovery mechanism.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-28

## Today's Highlights
Two nightly releases ship today, headlined by **Catalan language support** (#3643) and a critical fix for slash command completion in the VS Code companion. A **major bug cluster** around DeepSeek V4 `reasoning_content` errors continues to dominate issue reports (6+ related threads), while the team pushes forward with **background task management** (Phase C PR #3684) and a new **Python SDK release workflow** (#3685). Community buzz is also strong around a **free tier policy adjustment** that has drawn 120 comments of discussion.

## Releases
**v0.15.2-nightly.20260428.1befabe58** — Includes **Catalan language support** (PR #3643 by @jordimas) and fixes a bug in **VS Code slash command completion** where commands would not trigger after submitting a message (#3609). Also includes a guard fix for gradient rendering in the CLI.

**sdk-typescript-v0.1.7-preview.0** — Bundles CLI version 0.15.3 (stable). Backfilled release for previously failed workflow on version 0.1.5.

## Hot Issues (10 selected)

1. **#3203 — Qwen OAuth Free Tier Policy Adjustment** *(OPEN, 120 comments)*  
   Proposes reducing daily free quota from 1,000 to 100 requests/day and phasing out the free entry point. High community engagement suggests significant reliance on the free tier.  
   → https://github.com/QwenLM/qwen-code/issues/3203

2. **#3579 — DeepSeek API 400: `reasoning_content` must be passed back** *(CLOSED, 9 comments)*  
   A reopened bug highlighting a conflict between two bugfixes: #3304 strips thought blocks on model switch, #3579 needs to preserve `reasoning_content`. Core issue for all DeepSeek-reliant users.  
   → https://github.com/QwenLM/qwen-code/issues/3579

3. **#3619 — DeepSeek V4: API Error 400 related to `reasoning_content`** *(OPEN, 9 comments)*  
   Similar `reasoning_content` issue in the latest nightly. Tool-call thought chains not forwarded correctly.  
   → https://github.com/QwenLM/qwen-code/issues/3619

4. **#1902 — CLI: deleting chat history** *(CLOSED, 5 comments)*  
   Community request for a command to clean up accumulated sessions. Closed — likely addressed in background task UI (#3488).  
   → https://github.com/QwenLM/qwen-code/issues/1902

5. **#3669 — Custom model thinking tags not parsed (MiniMax M2.7)** *(OPEN, 5 comments)*  
   Custom models with non-standard thinking tags produce garbled output. Affects users of MiniMax and similar providers.  
   → https://github.com/QwenLM/qwen-code/issues/3669

6. **#3634 — Background task management: roadmap and next steps** *(OPEN, 2 comments)*  
   Internal alignment doc from @wenshao and @tanzhenxin. Phase A (#3471/#3488) and Phase B (#3642) merged; Phase C PR (#3684) in review.  
   → https://github.com/QwenLM/qwen-code/issues/3634

7. **#3652 — Input length error (range [1, 983616])** *(OPEN, 2 comments)*  
   Long conversations hitting provider-imposed context limits without transparent truncation. Underlying user frustration with session reuse.  
   → https://github.com/QwenLM/qwen-code/issues/3652

8. **#3612 — `qwen auth status` doesn't recognize OpenAI-compatible providers** *(CLOSED, 0 comments)*  
   Bug: `auth status` only checks Bailian and OAuth, ignoring providers configured in `settings.json`. Fixed in PR #3623.  
   → https://github.com/QwenLM/qwen-code/issues/3612

9. **#3616 — MCP tools returning images cause 400 against strict OpenAI servers** *(CLOSED, 0 comments)*  
   `playwright` screenshots and other image-returning MCP tools fail against LM Studio and similar strict APIs.  
   → https://github.com/QwenLM/qwen-code/issues/3616

10. **#3678 — Feature: light theme for `/export` HTML output** *(OPEN, 3 👍)*  
    Request for a light theme toggle on exported HTML pages. Dark-only output is reported as eye-straining.  
    → https://github.com/QwenLM/qwen-code/issues/3678

## Key PR Progress (10 selected)

1. **#3685 — feat(sdk-python): add PyPI release workflow** *(OPEN)*  
   Adds a dedicated GitHub Actions workflow to build and publish `qwen-code-sdk` to PyPI, with version computation for stable, preview, and nightly channels.  
   → https://github.com/QwenLM/qwen-code/pull/3685

2. **#3491 — feat: add `/diff` command and git diff statistics utility** *(OPEN)*  
   Implements structured `git diff --numstat` parsing and exposes it via a new slash command. Addresses #2997.  
   → https://github.com/QwenLM/qwen-code/pull/3491

3. **#3680 — feat(cli): expand TUI markdown rendering** *(OPEN)*  
   Adds Mermaid diagrams, math, task lists, and blockquotes to terminal output. Makes model responses with rich Markdown more readable.  
   → https://github.com/QwenLM/qwen-code/pull/3680

4. **#3684 — feat(core): event monitor tool with throttled stdout streaming (Phase C)** *(OPEN)*  
   New Monitor tool for long-running shell commands with token-bucket throttling (burst=5, sustain=1/sec) and lifecycle management.  
   → https://github.com/QwenLM/qwen-code/pull/3684

5. **#3642 — feat(core): managed background shell pool with `/tasks` command** *(CLOSED, merged)*  
   Replaces detached `&` backgrounding with a pool that captures output, tracks status, and supports termination.  
   → https://github.com/QwenLM/qwen-code/pull/3642

6. **#3673 — feat(memory): add autoSkill background project skill extraction** *(OPEN)*  
   Automatically extracts reusable workflows into project-level `.qwen/skills/` files after N tool calls (default 20). Off by default.  
   → https://github.com/QwenLM/qwen-code/pull/3673

7. **#3682 — fix(core,cli): stop stripping reasoning on model switch/history load** *(CLOSED, merged)*  
   Resolves the `reasoning_content` conflict between #3579 and #3304. Thought content is now preserved across model switches.  
   → https://github.com/QwenLM/qwen-code/pull/3682

8. **#3623 — fix(cli): recognize OpenAI-compatible providers in `qwen auth status`** *(CLOSED, merged)*  
   Distinguishes Coding Plan from generic OpenAI providers. Fixes misleading "Incomplete" status for DeepSeek/Ollama users.  
   → https://github.com/QwenLM/qwen-code/pull/3623

9. **#3677 — fix(openai): parse MiniMax thinking tags** *(OPEN)*  
   Adds MiniMax-specific parsing of `<think>`/`<thinking>` tags. Prevents blank stream chunks and renders reasoning content properly.  
   → https://github.com/QwenLM/qwen-code/pull/3677

10. **#3645 — fix(cli): correct OPENAI_MODEL precedence without breaking `/model` selection** *(OPEN)*  
    Ensures `/model` command takes precedence over the `OPENAI_MODEL` env var while keeping the env var as fallback.  
    → https://github.com/QwenLM/qwen-code/pull/3645

## Feature Request Trends

- **Background task management** — Multiple PRs (#3642, #3684, #3488) and issues (#3634) signal heavy investment in long-running shell execution, task pools, and monitoring. This is the most active feature area.
- **Multi-model and provider flexibility** — Requests for custom model thinking tag parsing (#3669, #3677), provider-aware auth status (#3612), and model switch robustness (#3304, #3682) point to a diverse model ecosystem being used.
- **Export and UI polish** — Light theme for HTML exports (#3678), OSC notification support (#2528), and richer TUI Markdown rendering (#3680) reflect maturing UX demands.
- **Local/first-party LLM integration** — Issues with local llama.cpp servers (#3674), MiniMax (#3669), and DeepSeek indicate strong adoption of non-Alibaba providers.
- **Session management** — Deleting chat history (#1902), context cleanup (#2621), and billing estimates (#3631, #3668) show operational needs beyond core coding assistance.

## Developer Pain Points

1. **DeepSeek V4 `reasoning_content` errors** — At least 6 distinct issue threads (#3579, #3619, #3658, #3670, #3304, #3589) report 400 errors when `reasoning_content` is not preserved between turns or after model switches. The fix in #3682 is merged, but users on older nightlies or custom configurations remain affected.

2. **Context window and session size confusion** — Multiple reports of `Input length should be [1, 983616]` (#3652), context window misreported for DeepSeek V4 (#3679), and subagent context exceeding configured limits (#3664). Users struggle with opaque truncation and session resumption.

3. **Custom/thinking model compatibility** — Non-standard thinking tags (MiniMax, local llama.cpp, DeepSeek V4) break output rendering or cause silent failures (#3669, #3674, #3677). The project is clearly broadening provider support but legacy assumptions about thought-block format cause friction.

4. **Auth and provider confusion** — `qwen auth status` not recognizing OpenAI-compatible providers (#3612), Fireworks provider missing from auth list (#3413), and misleading Coding Plan status ("Incomplete") for non-Coding-Plan users all degrade first-run experience.

5. **Long-running task UX gaps** — No sound notification on completion (#3106), session resume failures (#3606), and opaque context usage during long sessions (#2621) point to remaining workflow friction for power users who rely on persistent agent sessions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*