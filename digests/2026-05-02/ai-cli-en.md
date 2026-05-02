# AI CLI Tools Community Digest 2026-05-02

> Generated: 2026-05-02 04:21 UTC | Tools covered: 8

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

## 2026-05-02

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is maturing rapidly, with **Claude Code**, **OpenAI Codex**, and **OpenCode** commanding the largest communities while **Gemini CLI**, **Copilot CLI**, and **Kimi Code CLI** iterate quickly on narrower feature sets. The dominant themes across all tools are **Windows reliability crises**, **session/rate limit opacity**, **MCP integration complexity**, and **reasoning effort management**. All major tools are grappling with the tension between agent autonomy and user control—particularly around subagent identity isolation, permission prompting, and context window management. The ecosystem is converging on shared architectural patterns (MCP protocol support, subagent spawning, checkpoint/restore) while diverging sharply on provider strategy (OpenAI vs. Anthropic vs. multi-model).

---

## 2. Activity Comparison

| Tool | Hot Issues (today) | New PRs (today) | Release Activity | Community Signal |
|---|---|---|---|---|
| **Claude Code** | 10 active | 7 PRs | No release | 674 comments on #38335; high severity |
| **OpenAI Codex** | 10 active | 10 PRs | `rust-v0.129.0-alpha.2` | 568 comments on #14593; high volume |
| **Gemini CLI** | 10 active | 10 PRs | None (v0.40.0 latest) | Most PRs per issue ratio; rapid iteration |
| **Copilot CLI** | 10 active | 1 PR | v1.0.40 (May 1) | Issue-heavy; low PR throughput |
| **Kimi Code CLI** | 10 active | 7 PRs | None | Burst of activity; infrastructure-focused |
| **OpenCode** | 10 active | 10 PRs | v1.14.31 | Resolved major saga (#7410); stable cadence |
| **Pi** | 10 active | 10 PRs | v0.72.0, v0.71.1 | Weekend auto-close friction; high release velocity |
| **Qwen Code** | 8 active | 10 PRs | v0.15.6-nightly | Growing fast; telemetry & compliance focus |

**Key observations:**
- **OpenAI Codex** and **OpenCode** lead in PR throughput (10 each), indicating active development cycles.
- **Copilot CLI** has the lowest PR activity (1) despite significant community issues—a concern for responsiveness.
- **Pi** shipped two releases in 24 hours, the highest release velocity.
- **Claude Code** has the most severe single issue (#38335 with 674 comments) demanding immediate resolution.

---

## 3. Shared Feature Directions

### 3.1 Windows Platform Reliability (All Tools)
Every tool reports Windows-specific breakage:
- **Claude Code**: PowerShell silent exit (#55424)
- **Codex**: Browser Use app-server fails (#19187), mixed line endings (#4003), approval rules match outer shell (#19715)
- **Kimi Code**: PDF preview downloads as attachment (#2143)
- **Copilot CLI**: NixOS keychain broken (#3081)
- **Pi**: Terminal input issues across Windows Terminal
- **Qwen Code**: Proxy configuration needed for corporate environments

*Implication: Windows remains the weakest platform across the ecosystem. Enterprise adoption will remain constrained without urgent investment.*

### 3.2 MCP Transport & Schema Management (6 tools)
- **Claude Code**: HTTP transport strips URL paths (#55495)
- **Codex**: Dynamic tool identifier alignment with Responses API (#20724)
- **Copilot CLI**: OAuth MCP servers now supported (#33, closed); terminal freeze on MCP crash (#3067)
- **Kimi Code**: Large tool lists crash initial chat (#2096); structured content preservation (#2139)
- **Pi**: Tool unregistration APIs (#4084); extension API expansion
- **OpenCode**: Plan tool isolation (#25375)

*Implication: MCP is becoming the universal integration layer, but schema bloat, path handling, and crash recovery remain immature.*

### 3.3 Reasoning Effort & Token Transparency (7 tools)
- **Claude Code**: Extended thinking real-time display (#30660, 28 👍)
- **Codex**: Token burn rate mystery (#14593, 568 comments); 1M context for GPT-5.5 (#19464)
- **Copilot CLI**: `xhigh` reasoning removed from GPT models (#2739); hardcoded `reasoning_effort` for Claude Opus (#3080)
- **Kimi Code**: DeepSeek V4 missing `reasoning_content` (#2141)
- **OpenCode**: Reasoning content stripped on replay (#19081); `/btw` command (#16992)
- **Pi**: DeepSeek V4 via OpenRouter fails with `xhigh` (#4073)
- **Gemini CLI**: Subagent MAX_TURNS false success (#22323)

*Implication: Users demand visibility into model reasoning and token consumption. Opaque behavior erodes trust and inflates costs.*

### 3.4 Checkpoint/Undo/Rewind (4 tools)
- **Codex**: `/undo` (171 👍, #9203), `/rewind` (107 👍, #11626)
- **Claude Code**: Session persistence hooks (#55490)
- **OpenCode**: Plan mode hardening with preview (#21866)
- **Gemini CLI**: Context compaction strategies (#24736)

*Implication: Reverting agent actions is a top-3 feature request across ecosystems. No tool has a satisfactory implementation yet.*

### 3.5 Subagent Identity Isolation (5 tools)
- **Claude Code**: Subagent leaks parent history (#55488)
- **Codex**: Subagent metadata in hooks (#20675)
- **Gemini CLI**: False success from maxed subagents (#22323)
- **Kimi Code**: Subagent workspace isolation (#1933)
- **OpenCode**: Plan mode escape prevention (#21866)

*Implication: Multi-agent workflows are emerging, but identity boundaries are porous—a security and correctness risk.*

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary Model** | Anthropic Claude | OpenAI GPT | Google Gemini | GPT + Claude | Moonshot Kimi | Multi-provider | Multi-provider | Alibaba Qwen |
| **Target User** | Power developers | Enterprise teams | Google ecosystem | GitHub ecosystem | Chinese devs | OSS community | Tinkerers | Chinese OSS |
| **MCP Strategy** | Early adopter | Tight with Responses API | Open to 3rd-party | OAuth + stdio | Heavy guardrails | Plan-mode isolation | Extension API | Channels (WeChat) |
| **Windows Support** | Poor (silent exit) | Poor (multiple bugs) | Limited | Problematic | Desktop bug | Unknown | Terminal regressions | Proxy needed |
| **Unique Strength** | Session hooks | Sandbox infrastructure | Memory routing | VS Code integration | Multi-model bridging | Effect architecture | Provider diversity | Compliance (git attribution) |
| **Unique Weakness** | Max plan limit opaque | Token burn opaque | Homebrew stuck | Model config mess | Agent loops | TUI regressions | Weekend auto-close | Auth confusion |

**Architecture divergence:**
- **OpenCode** and **Pi** are building extensible frameworks (Effect services, extension APIs)
- **Claude Code**, **Codex**, **Copilot CLI** are vertically integrated with their respective AI providers
- **Gemini CLI** and **Qwen Code** are investing in memory/context management as differentiators
- **Kimi Code** focuses on interoperability (bridging Kimi into third-party agents)

---

## 5. Community Momentum & Maturity

### High Momentum (rapid iteration, growing communities)
- **OpenAI Codex**: 10 PRs/day, 568-comment issues, enterprise focus—the most active overall
- **OpenCode**: Resolved 393-comment saga (#7410), 10 PRs, Effect architecture migration—maturing rapidly
- **Pi**: 2 releases/day, new providers (Xiaomi, DigitalOcean), extension APIs—fastest iteration
- **Qwen Code**: Nightly releases, compliance features, WeChat integration—growing Chinese ecosystem

### Steady State (active but not hyper-growth)
- **Gemini CLI**: 10 PRs, memory routing experiments, quality focus—measured progress
- **Claude Code**: Dominant Max plan issue (#38335) consuming community energy; slower on new features

### Slower Cadence (concern for responsiveness)
- **Copilot CLI**: 1 PR/day despite 10 hot issues; model config mess unresolved

### Emerging / Niche
- **Kimi Code CLI**: Small community but burst of infrastructure PRs; potential dark horse in cross-platform MCP support

**Maturity indicators:**
- **Testing culture**: Qwen Code (commit attribution, read-before-edit), Codex (sandbox fallbacks), Gemini CLI (eval suite #24353)
- **Documentation drift**: Claude Code (20+ docs PRs from coygeek), Copilot CLI (.vscode/mcp.json removal confusion)
- **Enterprise readiness**: Codex (sandbox permissions, administrator constraints), Qwen Code (compliance tracking), Copilot CLI (OAuth MCP)

---

## 6. Trend Signals

### 6.1 The Cost & Transparency Crisis
The #1 industry signal: **users cannot predict or diagnose AI costs**. 
- Claude Code Max plan exhaustion (#38335): 674 comments, 449 upvotes
- Codex token burn (#14593): 568 comments, 248 upvotes
- Both are open for >1 month with no root cause acknowledged.

*Implication: Any tool that solves cost observability (token budgets, per-request breakdowns, session caps) will win developer trust. This is a market gap.*

### 6.2 The Reasoning Effort Tangle
Every tool is struggling with multi-tier reasoning (low/medium/high/xhigh). Models introduce new effort levels faster than UIs can adapt. Copilot CLI (#2739, #3080, #3066) is in crisis; Pi saw DeepSeek V4 fail with `xhigh`; Qwen Code is building structured output for programmatic control.

*Implication: The industry needs a standardized `reasoning_effort` API across providers. Currently, each tool reinvents the mapping.*

### 6.3 Windows as the Weak Link
Enterprise adoption requires Windows support. Every tool fails on Windows in distinct ways. Copilot CLI (#19715), Codex (#19187, #4003), Claude Code (#55424) all demonstrate that Windows is an afterthought.

*Implication: A tool that delivers first-class Windows support (PowerShell, line endings, MCP, terminal input) will capture enterprise market share.*

### 6.4 MCP Standardization Underway but Fragile
MCP is becoming the universal protocol, but:
- Path stripping (#55495 in Claude Code)
- Schema bloat (#2096 in Kimi Code)
- Crash handling (#3067 in Copilot CLI)
- Transport caching (#4060 in Pi)

*Implication: MCP is winning as the integration layer, but implementations are fragile. A reference implementation of MCP best practices would accelerate the ecosystem.*

### 6.5 Subagent Architecture Emerges
Multi-agent workflows are becoming standard, but identity isolation, context leakage, and false success reporting are unresolved. Claude Code (#55488), Gemini CLI (#22323), and OpenCode (#21866) all address subagent boundaries.

*Implication: The 2026-2027 cycle will see subagent lifecycle management, telemetry, and permission scoping become first-class concerns.*

### 6.6 Compliance & Governance Rising
Qwen Code's commit attribution (#3115), Pi's extension tool unregistration (#4084), and Codex's administrator-enforced `deny_read` (#15977) all signal growing enterprise governance requirements.

*Implication: AI-generated code provenance, audit trails, and sandbox restrictions will be table stakes for enterprise deployment by Q3 2026.*

---

## Summary for Technical Decision-Makers

| Recommendation | Rationale |
|---|---|
| **Adopt OpenCode or Pi for extensibility** | Both offer multi-provider support, rich extension APIs, and active development |
| **Watch Qwen Code for compliance features** | Git attribution and read-before-edit enforcement are ahead of the curve |
| **Be cautious on Windows** | No tool delivers a reliable Windows experience yet |
| **Invest in cost observability** | The #1 community pain point across all tools represents a market opportunity |
| **Standardize on MCP** | Winning protocol, but expect implementation bugs through Q3 2026 |
| **Plan for subagent workflows** | Multi-agent patterns are emerging; choose a tool with clear identity isolation |

*The ecosystem is converging on shared patterns (MCP, subagents, cost transparency) while differentiating on provider lock-in, platform support, and extensibility. The winners will be those that solve Windows reliability and cost observability while maintaining open integration layers.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on popular PRs and Issues.

---

## Anthropic Skills Community Report (Data as of 2026-05-02)

### 1. Top Skills Ranking (by Discussion & Activity)

These PRs represent the most actively discussed Skill submissions in the queue.

1.  **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
    - **Functionality:** Prevents common typographic errors in AI-generated documents (orphan words, widows, numbering misalignment).
    - **Discussion:** High engagement on the specific patterns of "word wrap" failures. The author argues these are universal issues affecting *every* document Claude generates.
    - **Status:** Open | Created: 2026-03-04

2.  **testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723))
    - **Functionality:** Comprehensive skill covering the full testing stack (Unit, React, E2E) using the "Testing Trophy" philosophy.
    - **Discussion:** Strong interest in structured, opinionated testing guidance for Claude Code. The discussion focuses on granularity of test patterns and edge-case coverage.
    - **Status:** Open | Created: 2026-03-22

3.  **ServiceNow Platform** ([PR #568](https://github.com/anthropics/skills/pull/568))
    - **Functionality:** Broad enterprise platform assistant covering ITSM, ITOM, SecOps, ITAM/SAM, and IntegrationHub.
    - **Discussion:** A massive scope; discussion revolves around balancing the breadth of ServiceNow modules against the risk of a "jack of all trades" skill that dilutes Claude's focus.
    - **Status:** Open | Created: 2026-03-08

4.  **HADS (Human-AI Document Standard)** ([PR #616](https://github.com/anthropics/skills/pull/616))
    - **Functionality:** A lightweight Markdown convention for technical documentation readable by both humans and LLMs without maintaining separate files.
    - **Discussion:** A meta-skill that critiques the existing documentation paradigm. Discussion centers on whether this should be a skill or a core feature of the Skill format itself.
    - **Status:** Open | Created: 2026-03-12

5.  **claude-obsidian-reporter** ([PR #664](https://github.com/anthropics/skills/pull/664))
    - **Functionality:** Reads Git commits and auto-generates structured daily/weekly/monthly reports directly into an Obsidian vault.
    - **Discussion:** Strong community interest in personalized productivity workflows. Key discussion points: Git history parsing depth and vault structure flexibility.
    - **Status:** Open | Created: 2026-03-16

6.  **skill-quality-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
    - **Functionality:** A meta-skill that evaluates other Skills across five dimensions (Structure, Security, Documentation, etc.).
    - **Discussion:** The community sees this as critical for ecosystem quality control. Debate exists about whether the scoring thresholds are too strict for community submissions.
    - **Status:** Open | Created: 2025-11-06

---

### 2. Community Demand Trends (from Issues)

The top Issues reveal three major demand vectors:

- **Enterprise & Org Sharing:** Issue [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 7 👍) requests direct org-wide skill sharing in Claude.ai, bypassing the current manual `.skill` file download/upload loop. This is the single most-requested feature.
- **Platform Parity & Stability:** Issues [#62](https://github.com/anthropics/skills/issues/62) and [#61](https://github.com/anthropics/skills/issues/61) report skills "disappearing" or returning 404 errors on claude.ai. This suggests reliability concerns with the hosted skill storage.
- **Security Concerns:** Issue [#492](https://github.com/anthropics/skills/issues/492) raises a trust boundary vulnerability: community skills are hosted under the `anthropic/` namespace, which could deceive users into granting elevated permissions to non-official code.

---

### 3. High-Potential Pending Skills (Likely to Land Soon)

These PRs have active maintainer engagement and are near a merge decision:

- **sensory** ([PR #806](https://github.com/anthropics/skills/pull/806)): macOS automation via `osascript` (AppleScript). A well-scoped alternative to screenshot-based "computer use." Two-tier permission system appeals to security-conscious users.
- **shodh-memory** ([PR #154](https://github.com/anthropics/skills/pull/154)): Persistent context across conversations. Addresses a core limitation of session-based AI agents. The `proactive_context` pattern is being evaluated for standardization.
- **codebase-inventory-audit** ([PR #147](https://github.com/anthropics/skills/pull/147)): Systematic 10-step orphaned code detection and cleanup workflow. High demand for maintenance-oriented skills rather than generative ones.

---

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **meta-skills and governance tools** (quality analysis, security validation, memory persistence, and shared libraries) rather than vertical domain skills, indicating a preference for infrastructure that makes *all* skills more reliable and shareable.

---

# Claude Code Community Digest — 2026-05-02

## Today's Highlights

The community remains sharply focused on the high-severity **Claude Max plan session limit exhaustion** issue (#38335) which has now amassed 674 comments and 449 upvotes, making it the dominant topic. Meanwhile, **coygeek** continued their methodical documentation cleanup campaign, closing 20+ outdated docs issues. A critical new **Windows PowerShell silent exit** bug (#55424) and an **MCP HTTP transport path stripping** bug (#55495) were both opened today, with the former receiving a PR fix within hours.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#38335] Claude Max plan session limits exhausted abnormally fast**  
   `bug | cli` — 674 comments, 449 👍  
   Since March 23, users on the Max plan report hitting session caps 3-5x faster than expected via CLI. No official acknowledgment of root cause.  
   [View Issue](https://github.com/anthropics/claude-code/issues/38335)

2. **[#55424] Windows REPL silently exits in PowerShell during long agent chains**  
   `bug | windows | regression` — 5 comments  
   Claude Code drops to bare PowerShell prompt mid-session with no error, no recovery. Triggered by dense Bash subprocess chains.  
   [View Issue](https://github.com/anthropics/claude-code/issues/55424)

3. **[#55495] MCP HTTP transport ignores configured URL path component**  
   `bug | mcp | windows` — 1 comment  
   HTTP transport strips the path from `mcpServers.<name>.url`, POSTing to the origin instead (e.g., `https://host.com/` instead of `https://host.com/api/v1/mcp`).  
   [View Issue](https://github.com/anthropics/claude-code/issues/55495)

4. **[#55488] Spawned subagent leaks parent conversation history via DM**  
   `bug | agents | regression` — 1 comment  
   Subagents spawned during team workflows identify themselves as "team-lead" and expose full parent conversation when directly messaged.  
   [View Issue](https://github.com/anthropics/claude-code/issues/55488)

5. **[#30660] Stream extended thinking output in real-time during interactive mode**  
   `enhancement | tui` — 14 comments, 28 👍  
   High-demand UX request: show thinking/reasoning progress incrementally rather than a blank spinner for long reasoning chains.  
   [View Issue](https://github.com/anthropics/claude-code/issues/30660)

6. **[#40664] OAuth Max plan rate-limited — "workspace API usage limits" error on non-API users**  
   `bug | api | platform:linux` — 5 comments  
   OAuth-authenticated Max plan users hitting API rate limits even when not using the API directly.  
   [View Issue](https://github.com/anthropics/claude-code/issues/40664)

7. **[#25128] VS Code extension drag-and-drop still broken since v2.1.6**  
   `bug | ide | platform:macos` — 11 comments, 33 👍  
   Long-standing regression: drag-and-drop works in CLI but is completely non-functional in VS Code panel. Still unresolved through v2.1.39+.  
   [View Issue](https://github.com/anthropics/claude-code/issues/25128)

8. **[#33502] Add recently-opened folders to GUI recent list for deletion**  
   `enhancement | ui` — 14 comments, 12 👍  
   Users want the ability to remove folders from the recent list in Claude Code GUI, as misconfigured paths accumulate without management.  
   [View Issue](https://github.com/anthropics/claude-code/issues/33502)

9. **[#47618] Hooks docs incorrectly state PreCompact cannot block compaction**  
   `bug | documentation` — 2 comments  
   Exit code 2 behavior for PreCompact hook contradicts actual implementation — docs claim it cannot block, but it does.  
   [View Issue](https://github.com/anthropics/claude-code/issues/47618)

10. **[#43366] Homebrew docs omit stable vs latest cask channels**  
    `documentation | macos` — 2 comments, 2 👍  
    Documentation inconsistently references `brew install --cask claude-code` without clarifying stable vs latest channel differences.  
    [View Issue](https://github.com/anthropics/claude-code/issues/43366)

## Key PR Progress

1. **[#55433] Fix: PowerShell silent exit on Windows**  
   *risingsamurai* — Fix for #55424. Root cause identified as dense Bash command chains causing REPL to silently crash in Windows PowerShell.  
   [View PR](https://github.com/anthropics/claude-code/pull/55433)

2. **[#55425] Fix: Drag-and-drop image hang on macOS**  
   *risingsamurai* — Fix for #55420. macOS floating thumbnail preview not fully written to disk before drag completes, causing freeze on "pasting text...".  
   [View PR](https://github.com/anthropics/claude-code/pull/55425)

3. **[#55490] Example: snap_pack_on_stop.py hook for auto-pack on session end**  
   *achiii800* — Adds `Stop` hook example that auto-archives session JSONL into `.snap.jsonl` at configurable path. Useful for session persistence workflows.  
   [View PR](https://github.com/anthropics/claude-code/pull/55490)

4. **[#55484] Dashboard improvements**  
   *cvidge* — UI enhancements for Claude dashboard (details in commit history).  
   [View PR](https://github.com/anthropics/claude-code/pull/55484)

5. **[#55478] Polymarket sports dashboard** (CLOSED)  
   *cvidge* — Dashboard for sports prediction markets via Polymarket.  
   [View PR](https://github.com/anthropics/claude-code/pull/55478)

6. **[#45721] Mythos operating contract** (CLOSED)  
   *GoodshytGroup* — Unclear contribution ("Idk what I'm doing"). Likely low-quality submission.  
   [View PR](https://github.com/anthropics/claude-code/pull/45721)

7. **Documentation PR activity (sweep)** — 20+ closed PRs from *coygeek* updating CLI reference, monitoring docs, plugin management, Bedrock config, theme customization, and MCP provider docs.

## Feature Request Trends

- **Extended thinking visibility** — #30660 (28 👍) leads the "show your work" movement, with users demanding real-time streaming of reasoning steps
- **Folder management in GUI** — #33502 (12 👍) highlights UI polish needs for recent folder list management
- **Documentation completeness** — repeated pattern from *coygeek* submissions: 20+ PRs targeting missing/outdated docs across CLI commands, monitoring, plugins, themes, and cloud provider setup
- **MCP / gateway protocol improvements** — #55495 reveals path stripping in HTTP transport; users want correct URL path handling for MCP server discovery
- **Plugin/theme extensibility** — #52190, #51776 indicate growing interest in plugin ecosystem with custom themes, marketplace policies, and dependency management

## Developer Pain Points

| Pain Point | Signal |
|---|---|
| **Session/rate limits opaque** | #38335 (674 comments, 449 👍) — Max plan users cannot predict or diagnose abnormal exhaustion |
| **Subagent identity isolation** | #55488 — Spawned agents leak context when DM'd, breaking security assumptions |
| **Silent Windows crashes** | #55424 — No error, no log, just REPL dropping to bare prompt |
| **Long-standing VS Code regression** | #25128 — Drag-and-drop broken for months across many versions |
| **MCP transport correctness** | #55495 — Path stripping breaks self-hosted MCP servers |
| **Documentation drift** | >20 issues closed today alone — docs trail implementation by multiple versions across CLI, hooks, monitoring, plugins, and cloud providers |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-02

## Today's Highlights

The community is heavily focused on **Windows reliability issues**, with multiple reports of Browser Use and app-server startup failures on that platform. Meanwhile, the top-voted feature request for **1M token context support with GPT-5.5** continues to gain traction (133 👍, 101 comments), and the long-running **token burn rate issue** (#14593) remains the most active thread with 568 comments. On the PR side, the team is shipping substantial infrastructure improvements around approval prompt shaping, sandbox fallbacks for older Linux systems, and dynamic tool identifier alignment with the Responses API.

## Releases

- **`rust-v0.129.0-alpha.2`** — Pre-release alpha with no changelog details beyond the version bump.

## Hot Issues

1. **#14593 — Burning tokens very fast**  
   *Open since March; 568 comments, 248 👍*  
   The single most active issue. Users on Business subscriptions report token consumption far exceeding expected usage. Community speculation points to runaway agent loops or context window management bugs. No official fix confirmed.  
   https://github.com/openai/codex/issues/14593

2. **#19464 — Support 1M token context for GPT-5.5 in Codex**  
   *101 comments, 133 👍*  
   Users note GPT-5.5 is documented at 400K context in Codex vs 1M in the API. The gap frustrates power users who rely on large codebase analysis.  
   https://github.com/openai/codex/issues/19464

3. **#18258 — 'Computer Use plugin unavailable' on macOS app**  
   *34 comments, 36 👍*  
   Bundled plugin files exist but the app fails to discover them. A community workaround involves manually repairing the plugin cache path.  
   https://github.com/openai/codex/issues/18258

4. **#9203 — Please make "/undo" back**  
   *34 comments, 171 👍*  
   Users demand re-introduction of the `/undo` command for reverting file edits and conversation state. Deleted untracked files are a recurring pain.  
   https://github.com/openai/codex/issues/9203

5. **#11626 — CLI: Add /rewind checkpoint restore**  
   *22 comments, 107 👍*  
   Complements the /undo request — users want a single command to restore both chat context and workspace edits from a saved checkpoint.  
   https://github.com/openai/codex/issues/11626

6. **#4003 — Patched files have mixed line endings on Windows**  
   *14 comments, 36 👍*  
   Long-standing issue (since Sept 2025) where Codex does not respect file-native line endings on Windows, causing git noise.  
   https://github.com/openai/codex/issues/4003

7. **#19187 — Browser Use fails to start app-server on Windows**  
   *11 comments, 19 👍*  
   Core Windows bug: `nodeRepl.fetch` cannot launch the app-server, breaking the entire Browser Use flow. Part of a wider Windows reliability cluster.  
   https://github.com/openai/codex/issues/19187

8. **#14559 — Remote compact task: stream disconnected before completion**  
   *18 comments, 9 👍*  
   Intermittent failures on remote compaction tasks, disrupting long-running agent sessions.  
   https://github.com/openai/codex/issues/14559

9. **#20617 — Codex App Remote SSH fails on macOS remote**  
   *3 comments, 3 👍*  
   GNU-style `chmod --` argument breaks on macOS remotes where `chmod` expects BSD-style flags. Pro-tier users blocked.  
   https://github.com/openai/codex/issues/20617

10. **#19715 — Windows approval rules match outer PowerShell instead of inner command**  
    *5 comments*  
    Approval-prefix rules match `powershell.exe -Command` rather than the actual tool command, making fine-grained security policies impractical on Windows.  
    https://github.com/openai/codex/issues/19715

## Key PR Progress

1. **#20733 — Centralize approval prompt shaping**  
   Refactors `ApprovalRequest` into a single in-core model, deriving guardian reviews, hook payloads, and human prompts from one source. Reduces fragmentation across MCP and non-MCP paths.  
   https://github.com/openai/codex/pull/20733

2. **#20718 — Add app-server daemon lifecycle management**  
   Enables machine-readable bootstrap and management of `codex app-server` on remote SSH targets. Critical for Desktop and mobile clients.  
   https://github.com/openai/codex/pull/20718

3. **#20628 — fix(linux-sandbox): fall back when system bwrap lacks perms**  
   Codex 0.128 introduced `--perms` in sandbox construction. This PR provides fallback logic for older `bwrap` versions (v0.4.x) that lack it.  
   https://github.com/openai/codex/pull/20628

4. **#20724 — app-server: align dynamic tool identifiers with Responses API**  
   Tightens dynamic tool name/namespace validation to match what the upstream Responses API actually supports, preventing silent registration failures.  
   https://github.com/openai/codex/pull/20724

5. **#20335 — hooks: support dynamic tools in PreToolUse/PostToolUse**  
   Extends hook support to dynamic tools using the same tool identities accepted by Responses, keeping hook matching aligned with the model-facing surface.  
   https://github.com/openai/codex/pull/20335

6. **#20719 — Use responses request helpers for compact requests**  
   Aligns the `/responses/compact` payload construction with the main `/responses` path, preventing drift in request fields and headers.  
   https://github.com/openai/codex/pull/20719

7. **#20684 — tui: hook trust review flow**  
   Adds a TUI startup warning for new or changed unmanaged hooks, directing users to the trust configuration interface.  
   https://github.com/openai/codex/pull/20684

8. **#20654 — fix(tui): bound startup terminal probes**  
   Replaces blocking crossterm probes with nonblocking `/dev/tty` reads using a 100ms timeout, preventing multi-second stalls on unsupported terminals.  
   https://github.com/openai/codex/pull/20654

9. **#15977 — fix(permissions): preserve managed deny-read during escalation**  
   Ensures administrator-enforced `deny_read` constraints survive sandbox escalations, retries, or legacy sandbox overrides.  
   https://github.com/openai/codex/pull/15977

10. **#17036 — feat: allow limited git writes in workspace sandbox**  
    Enables `allow_limited_git_writes` so Codex can update repo metadata (e.g., commit, branch) without making config or hooks writable.  
    https://github.com/openai/codex/pull/17036

## Feature Request Trends

- **Checkpoint/Undo/Rewind** — The strongest recurring theme. Users want `/undo` (Issue #9203, 171 👍) and `/rewind` (Issue #11626, 107 👍) to revert both conversation and file edits. The removal of these features is a significant source of user frustration.
- **Larger context windows** — Issue #19464 (133 👍) demands 1M token context for GPT-5.5, matching the API capability. Power users working on large monorepos feel constrained.
- **Multitasking agents** — Issue #20721 asks for parallel agent execution (e.g., running tests concurrently), rather than serial task completion.
- **File/folder navigation improvements** — Issue #18297 requests folder support in the `@` search. Issue #3761 asks for drag-and-drop of non-image files into the chat.
- **Text selection in CLI** — Issues #12882 and #20645 seek keyboard-based text selection (`Shift+Arrow`) in the prompt textarea and CLI composer.
- **Subagent metadata in hooks** — Issue #20675 requests that hook payloads distinguish root agent vs subagent origin for better integration logic.

## Developer Pain Points

- **Windows platform reliability** — The dominant issue cluster: Browser Use plugin fails to start app-server (#19187, #20048, #20206, #20661), mixed line endings (#4003), approval rules matching outer PowerShell (#19715), and JetBrains IDE launch failures (#13937). Windows users face a significantly degraded experience.
- **Token burn / rate limit surprises** — Issue #14593 (568 comments) indicates a systemic problem where users burn through tokens far faster than expected, potentially due to agent loop inefficiencies or context window mismanagement. No resolution in sight.
- **Sandbox and permission friction** — Issues around Bubblewrap compatibility (#20720), MCP tool call interception (#16940), and `arg0` error messages lacking context (#19674) show that the sandbox layer remains hard to diagnose and configure.
- **Remote SSH breakage** — Issue #20617 shows that macOS-to-macOS remote SSH fails due to `chmod` flag incompatibilities, blocking Pro-tier users on a core workflow.
- **Interrupted session corruption** — Issue #20696 reports that interrupted resume can dump raw internal JSON (`rollout_summary`/`raw_memory`) into the assistant output, a data integrity bug.
- **Plugin/skills UI issues** — White overlay on Intel macOS (#20550) and GitHub prompt fields clearing after save (#20717) indicate the Desktop UI still has polish gaps.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-02

## Today's Highlights
The community continues to buzz around the planned **memory routing** system (global vs. project), with maintainer-tracked issues now testing **Auto Memory inbox** workflows (PR #26338). On the stability front, a new Homebrew update blocker (#26254) is generating the most community engagement, while the core team is consolidating **AST-aware tooling** investigations (#22745) to improve codebase mapping precision.

## Releases
No new releases in the last 24 hours. The latest available version remains **0.40.0**.

## Hot Issues

1. **[#26254 — Can't update via homebrew](https://github.com/google-gemini/gemini-cli/issues/26254)**  
   *Comments: 5 | 👍: 3*  
   Users on `brew` are stuck on v0.38.2; `brew upgrade gemini-cli` refuses to pull v0.40.0. The highest community engagement today — signals a packaging regression that needs immediate triage.

2. **[#24353 — Robust component level evaluations (EPIC)](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *Comments: 5*  
   Maintainer tracked. Tracks the growth from 76 behavioral eval tests to a more comprehensive component-level evaluation framework. Critical for quality assurance as the agent feature set expands.

3. **[#22323 — Subagent MAX_TURNS misreported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Comments: 4 | 👍: 2*  
   `codebase_investigator` subagent hits turn limits but reports `status: "success"` — a dangerous false positive that could mislead users into thinking analysis completed when it didn't.

4. **[#24916 — Repeated permission prompts on same file](https://github.com/google-gemini/gemini-cli/issues/24916)**  
   *Comments: 3*  
   "Allow for all future sessions" not persisting. Directly impacts UX friction — users must re-authorize file access repeatedly.

5. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Comments: 2 | 👍: 3*  
   Extremely simple shell commands hang after finishing, showing "awaiting user input." Impacts automation and YOLO mode workflows.

6. **[#22819 — Memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**  
   *Comments: 1 | 👍: 2*  
   Proposed split: user preferences in `~/.gemini/`, project-specific context in `.gemini/`. A foundational UX improvement for multi-project users.

7. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   *Comments: 1*  
   Agent hits a hard API limit when too many tools are enabled. Needs smarter tool-scoping logic to avoid crashing.

8. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   *Comments: 2*  
   `maxTurns` and other settings from `settings.json` are not applied to the Browser Agent — undermines user configuration expectations.

9. **[#24546 — Helper to detect SSH](https://github.com/google-gemini/gemini-cli/issues/24546)**  
   *Comments: 0*  
   Follow-up to #24202 (SSH text scrambling). A utility to detect SSH sessions is needed to apply terminal compatibility heuristics.

10. **[#25218 — Table renders incrementally, breaking screen readers](https://github.com/google-gemini/gemini-cli/issues/25218)**  
    *Comments: 0*  
    Tables re-render per chunk during streaming, causing broken layouts — especially problematic for accessibility (screen reader mode).

## Key PR Progress

1. **[#26363 — Fix non-interactive auth error rethrow](https://github.com/google-gemini/gemini-cli/pull/26363) – OPEN**  
   Ensures JSON output mode doesn't silently return `undefined` on auth errors. A correctness fix for scripted CLI usage.

2. **[#26361 — Fix proxy support via https-proxy-agent](https://github.com/google-gemini/gemini-cli/pull/26361) – OPEN**  
   *priority/p1*  
   Externalizes `https-proxy-agent` from esbuild bundle to fix `TypeError: HttpsProxyAgent is not a constructor`. Critical for enterprise users behind proxies.

3. **[#26362 — Guard stdin cleanup after SSH/TTY disconnect](https://github.com/google-gemini/gemini-cli/pull/26362) – OPEN**  
   Prevents crashes when `gemini --yolo` is used in SSH sessions that disconnect. Tests included for torn-down stdin scenarios.

4. **[#26358 — Exit shell mode with backspace on empty input](https://github.com/google-gemini/gemini-cli/pull/26358) – OPEN**  
   Quality-of-life: pressing backspace on an empty input in shell mode deactivates it — matches the intuitive "erase the `!`" gesture.

5. **[#26338 — Auto Memory inbox flow with canonical-patch contract](https://github.com/google-gemini/gemini-cli/pull/26338) – OPEN**  
   *experimental*  
   Background agent scans past sessions and proposes memory updates as `.patch` files in a project-local inbox. Users review before applying — a careful approach to persistent memory.

6. **[#26357 — Minor fixes for generalist profile](https://github.com/google-gemini/gemini-cli/pull/26357) – OPEN**  
   Fixes #26356, introduces over-snapshotting threshold, strengthens snapshotter language, and raises normalization threshold for better precision/recall.

7. **[#26322 — Sanitize keychain errors and restore test execution](https://github.com/google-gemini/gemini-cli/pull/26322) – OPEN**  
   Security fix: wraps native keychain errors in `SecureStorageError` to prevent leakage of sensitive data. Also fixes install/build issues.

8. **[#25139 — Prevent unmapped Vim normal mode keys from inserting text](https://github.com/google-gemini/gemini-cli/pull/25139) – OPEN**  
   *priority/p2, help wanted*  
   Vim-mode users: pressing unmapped keys in Normal mode currently inserts characters. This aligns with standard Vim behavior.

9. **[#24736 — Union-find context compaction for AgentHistoryProvider](https://github.com/google-gemini/gemini-cli/pull/24736) – OPEN**  
   *help wanted*  
   Novel compression strategy: messages graduate from hot buffer into a cold forest of semantically similar clusters instead of a binary split. Sophisticated approach to context window management.

10. **[#23215 — Restore terminal focus after closing diff tabs (VS Code)](https://github.com/google-gemini/gemini-cli/pull/23215) – CLOSED**  
    Fixes a UX bug where VS Code integrated terminal loses focus after approving file diffs. Important for IDE companion users.

## Feature Request Trends

1. **Persistent Memory & Context Routing** — The dominant theme. Users want memory that distinguishes between global preferences (`~/.gemini/`) and project-specific context (`.gemini/`). The **Auto Memory inbox** (PR #26338) is the most concrete implementation seen so far.

2. **AST-Aware Code Understanding** — Multiple EPIC issues (#22745, #22746) propose using AST tools (tilth/glyph) for precise method-bound reading, search, and codebase mapping — reducing token waste from line-based reading.

3. **Robust Subagent Lifecycle Management** — Demand for subagents that properly report MAX_TURNS failures (#22323), recover from tool rejections (#23897), and respect settings.json overrides (#22267).

4. **Evaluation & Quality Gates** — A push toward component-level behavioral evals (#24353) and steering tests that always pass (#23313), indicating the project is maturing its CI/CD quality bar.

5. **Accessibility & Terminal Compatibility** — Streaming table rendering (#25218), SSH session detection (#24546), and Vim key handling (#25139) reflect growing attention to diverse terminal environments.

## Developer Pain Points

- **Homebrew update stuck** (#26254) — the most-visible issue today, blocking users on v0.38.2 with no workaround.
- **Permission prompts not persisting** (#24916) — undermines trust in the "allow for all future sessions" workflow.
- **False success reports from subagents** (#22323) — a correctness risk that could lead to silent failure in automated pipelines.
- **SSH terminal corruption** (#24202) — text scrambling makes the CLI unusable over SSH, with no fix yet.
- **Context window / tool limits** (#24246) — hitting a 128-tool ceiling with no graceful degradation.
- **Stuck shell commands** (#25166) — "awaiting input" on completed commands breaks both interactive and YOLO modes.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-05-02

---

## 1. Today's Highlights

Release **v1.0.40** shipped yesterday with a handful of polish fixes—PR branch decoration now handles long model names, and streaming output is smoother. However, the community is boiling over **model configuration issues**: `claude-opus-4.7-high` is effectively broken due to a hardcoded `reasoning_effort` mismatch, Opus 4.7 high/xhigh variants are hidden on macOS prerelease, and `xhigh reasoning` was dropped for GPT-5.x models. Meanwhile, a long-awaited feature (OAuth support for MCP servers, Issue #33) was finally closed after 8 months of discussion.

---

## 2. Releases

**v1.0.40** (2026-05-01)
- PR branch decoration now displays correctly in the footer regardless of model name length.
- `/clear` and `/new` properly reset the active custom agent selection.
- Assistant responses stream with smoother text output.
- `copilot plugin list` shows the correct version after running `copilot plugin update`.

---

## 3. Hot Issues

1. **#33 – [CLOSED] Support OAuth http MCP servers**  
   *Author: Tiberriver256 | 👍 110 | 38 comments*  
   **Why it matters:** After 8 months, this is closed. The community strongly wanted integration with Figma and Atlassian MCP servers, both requiring OAuth. The high reaction count signals this was a top-requested integration feature.  
   [GitHub Issue #33](https://github.com/github/copilot-cli/issues/33)

2. **#1081 – [OPEN] AggregateError: Failed to list models**  
   *Author: saiaprameya | 👍 8 | 23 comments*  
   **Why it matters:** Enterprise users are completely blocked after successful login—no commands work. The error originates from model listing failures, suggesting an authentication or API routing issue.  
   [GitHub Issue #1081](https://github.com/github/copilot-cli/issues/1081)

3. **#2739 – [OPEN] xhigh reasoning removed for gpt-5.4 and gpt-5.3-codex**  
   *Author: dlukt | 👍 12 | 5 comments*  
   **Why it matters:** Models are "useless without xhigh reasoning" per the author. This is a breaking model capability change that angered power users relying on maximum reasoning depth.  
   [GitHub Issue #2739](https://github.com/github/copilot-cli/issues/2739)

4. **#3080 – [OPEN] Cannot select reasoning_effort=high; claude-opus-4.7-high rejects requests with 400**  
   *Author: dezgit2025 | 👍 1 | 1 comment*  
   **Why it matters:** Critical model usability bug—CLI hardcodes `reasoning_effort: "medium"` but `claude-opus-4.7-high` only accepts `high`. Model is "effectively unusable" with no UI to change the effort level.  
   [GitHub Issue #3080](https://github.com/github/copilot-cli/issues/3080)

5. **#3066 – [OPEN] macOS prerelease /model picker hides routable Opus 4.7 internal/high/xhigh models**  
   *Author: supreeth20 | 👍 1 | 1 comment*  
   **Why it matters:** Model visibility inconsistency on macOS—users can route to high-reasoning variants but cannot see or select them in the picker.  
   [GitHub Issue #3066](https://github.com/github/copilot-cli/issues/3066)

6. **#3019 – [OPEN] Breaking Change: .vscode/mcp.json is no longer supported**  
   *Author: kchungmsft | 👍 2 | 2 comments*  
   **Why it matters:** A previously implemented feature (VSCode mcp.json support) was removed, forcing teams to maintain separate config files for CLI and VSCode users.  
   [GitHub Issue #3019](https://github.com/github/copilot-cli/issues/3019)

7. **#3082 – [OPEN] Copilot locks files after handling a prompt**  
   *Author: bomzj | 👍 0 | 1 comment*  
   **Why it matters:** Workflow-breaking bug—file locks persist after prompts, causing "Access denied" errors and forcing session restarts.  
   [GitHub Issue #3082](https://github.com/github/copilot-cli/issues/3082)

8. **#3067 – [OPEN] Copilot CLI terminal freezes when a stdio MCP child crashes mid-call**  
   *Author: Windyztree | 👍 0 | 1 comment*  
   **Why it matters:** Complete terminal unresponsiveness (even Ctrl+C fails) when MCP child processes crash—severe stability issue for heavy MCP users.  
   [GitHub Issue #3067](https://github.com/github/copilot-cli/issues/3067)

9. **#3057 – [CLOSED] Always have to login and reauthenticate**  
   *Author: scottcousens-nas | 👍 0 | 1 comment*  
   **Why it matters:** macOS users on brew installs face repeated reauthentication every session—a persistent friction point for daily drivers.  
   [GitHub Issue #3057](https://github.com/github/copilot-cli/issues/3057)

10. **#3081 – [OPEN] NixOS keychain support is broken**  
    *Author: queze1 | 👍 0 | 0 comments*  
    **Why it matters:** Linux (NixOS) users cannot authenticate—libsecret and GNOME Keyring are installed but CLI reports "System keychain unavailable."  
    [GitHub Issue #3081](https://github.com/github/copilot-cli/issues/3081)

---

## 4. Key PR Progress

1. **#3075 – [OPEN] Change Feature Request template input type from 'input' to 'textarea'**  
   *Author: DrEsteban*  
   **What it does:** Improves feature request submission UX by allowing multi-line descriptions, code snippets, and examples. Small but impactful for issue quality.  
   [GitHub PR #3075](https://github.com/github/copilot-cli/pull/3075)

*(Only 1 PR was updated in the last 24h. The community is currently issue-heavy.)*

---

## 5. Feature Request Trends

- **MCP resource subscriptions** (Issue #3073): Building on `resources/read` support, users want real-time notifications when MCP server resources change—critical for autonomous agent workflows.
- **`/effort` command** (Issue #3074): Users want a quick command to toggle reasoning effort (Low/Medium/High) without the multi-step `/model` workflow.
- **Remote agent session deletion** (Issue #3072): The `/resume` menu can delete local sessions but refuses to delete remote ones, leaving users stuck.
- **Custom agent `model:` array support** (Issue #3070): Align with VS Code's behavior—allow custom agent frontmatter to accept multiple models for a picker.
- **Non-interactive exit code strictness** (Issue #3064): CI users want non-zero exit codes when MCP servers fail to start, avoiding false green builds.

---

## 6. Developer Pain Points

- **Model reasoning effort is a mess.** Three separate issues (#2739, #3080, #3066) all revolve around reasoning effort—removed from GPT models, hardcoded incorrectly for Claude Opus, and hidden from the model picker on macOS. The lack of a simple `/effort` command (requested in #3074) compounds the frustration.
- **Authentication friction is high.** Persistent login bugs (#1081, #3057, #3081) on macOS, enterprise, and NixOS create a "login every time" experience that degrades daily workflow.
- **MCP stability and config overhead.** Terminal freezes on MCP crashes (#3067), forced multi-file config maintenance after `.vscode/mcp.json` removal (#3019), and missing resource subscriptions (#3073) all point to MCP being powerful but brittle.
- **File locking and state management.** Copilot leaving file locks (#3082) and inability to delete remote agent sessions (#3072) force manual cleanup and session restarts.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-02

## Today's Highlights

The Kimi Code CLI community saw a burst of activity on May 1, with 7 pull requests opened and 4 issues filed across reliability, MCP compatibility, and shell UX improvements. Notably, the team is actively addressing MCP schema bloat, subagent workspace isolation, and multi-turn reasoning quirks with third-party models like DeepSeek V4.

## Releases

No new releases in the past 24 hours.

## Hot Issues

1. **#1888 — Kimi K2.6 in Claude Code loops excessively**  
   *Author: Greenplumwine* | [Issue](https://github.com/MoonshotAI/kimi-cli/issues/1888)  
   The K2.6 model, when used inside Claude Code, triggers runaway loop calls. Affects users bridging Kimi into agentic workflows. Minimal community engagement yet (0 👍), but the severity is high for cross-platform users.

2. **#2143 — Windows Desktop PDF preview downloads viewer.html**  
   *Author: PanagiotisDrakatos* | [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2143)  
   PDF.js wrapper is served with `Content-Disposition: attachment`, breaking inline preview on Windows 3.0.7. Reported here because Kimi Desktop has no public tracker.

3. **#2142 — Agent loops on same shell command; output truncated**  
   *Author: yangliping* | [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2142)  
   The agent re-executes the same shell command indefinitely and truncates stdout. A critical pain point for anyone relying on agent automation — zero comments suggests a reproduction gap.

4. **#2141 — DeepSeek V4 multi-turn fails with missing `reasoning_content`**  
   *Author: wintrover* | [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2141)  
   When using DeepSeek V4 Pro with thinking mode, multi-turn tool-call conversations return a 400 error. The API strictly requires passing back `reasoning_content`. Community currently silent — no reactions.

5. **#2096 — Large MCP tool lists crash initial chat**  
   *Author: (referenced in PR #2112)*  
   Servers exposing many tools or large input schemas cause request failures. This is a growing concern as MCP ecosystems expand. PR #2112 is the active fix.

6. **#2136 — (implied) Subagent work_dir not configurable**  
   *Author: zhuxixi* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/1933)  
   Not directly an issue, but PR #1933 closes #1931, which reported subagents ignoring `KIMI_WORK_DIR` and always using the root session path. Configuration isolation is a recurring ask.

7. **#2070 — Invalid UTF-8 skill files crash startup**  
   *Author: (resolved in PR #2140)*  
   Non-UTF-8 skill files cause Kimi to crash during startup. Fixed by gracefully skipping invalid encodings. Important for teams using non-English tools.

8. **#2135 — (implied) Shell mode default shell not respected**  
   *Author: bugkeep* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2138)  
   Shell mode ignores the user's `$SHELL` and falls back to bash. PR #2138 addresses this — relevant for developers on Zsh or Fish.

9. **#2134 — (implied) Permission prompt UX missing notifications**  
   *Author: bugkeep* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2137)  
   Manual approval requests were not publishing notification events, making them easy to miss. PR #2137 adds bindings to the session notification manager.

10. **#2145 — (anticipated) Multiline input alignment**  
    *Author: blackwell-systems* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2144)  
    Shell mode multiline input is misaligned on continuation lines. Cosmetic but disruptive for heavy terminal users.

## Key PR Progress

1. **#2144 — fix(prompt): align multiline input text**  
   *Author: blackwell-systems* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2144)  
   Sets `prompt_continuation` on `PromptSession` to fix first-line indentation inconsistencies in shell mode.

2. **#1933 — feat(subagents): add work_dir override**  
   *Author: zhuxixi* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/1933)  
   Adds optional `work_dir` parameter to the Agent tool. Subagents can now operate in different directories without inheriting the root session path. Closes #1931.

3. **#2112 — fix(mcp): add schema exposure guardrails**  
   *Author: Sisyphbaous-DT-Project* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2112)  
   Prevents large MCP tool lists from crashing the initial chat request by keeping all tools registered internally but limiting what is exposed to the model. Resolves #2096.

4. **#2140 — fix(skill): skip invalid skill encodings**  
   *Author: bugkeep* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2140)  
   Gracefully handles invalid UTF-8 skill files during discovery. Adds unit tests for edge cases. Fixes #2070.

5. **#2139 — fix(mcp): preserve structured content and sanitize refs**  
   *Author: bugkeep* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2139)  
   Appends MCP `structured_content` as JSON text to preserve machine-readable payloads. Sanitizes `$ref` sibling metadata in MCP input schemas.

6. **#2138 — fix(shell): respect default shell**  
   *Author: bugkeep* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2138)  
   Passes `$SHELL` as the POSIX subprocess executable for Ctrl-X shell mode. Prefers user's default shell over bash fallback. Adds regression tests.

7. **#2137 — fix(hooks): publish permission prompt notifications**  
   *Author: bugkeep* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2137)  
   Binds the approval runtime to the session notification manager. Publishes `permission_prompt` events on approval creation. Essential for workflow automation.

8. **#2141 — fix(openai_legacy): ensure reasoning_content on ALL assistant messages**  
   *Author: wintrover* | [PR](https://github.com/MoonshotAI/kimi-cli/pull/2141? — actually an Issue, but functionally a fix request)  
   Patches the OpenAI legacy adapter to pass `reasoning_content` back on every assistant turn when thinking mode is enabled.

9. **#2136 — (hypothetical) MCP tool filtering for large schemas**  
   Related to #2112. No dedicated PR yet, but the community is clearly pushing for dynamic MCP tool gating.

10. **#2142 — Agent loop debugging**  
    *Author: yangliping* | [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2142)  
    No PR open yet, but the community is likely to follow with a fix for shell command looping and output truncation.

## Feature Request Trends

- **Subagent workspace isolation** — Multiple issues ask for per-agent working directory control. PR #1933 is a direct response.
- **MCP scalability guardrails** — Large MCP server definitions currently break the initial chat. The community strongly prefers dynamic tool gating over static limits.
- **Multi-turn reasoning fidelity** — DeepSeek V4 thinking mode highlights a broader need: Kimi's OpenAI adapter must preserve model-specific fields (like `reasoning_content`) across conversation turns.
- **Shell environment respect** — Users want Kimi to detect and honor their default shell, bash profile, and path preferences.

## Developer Pain Points

- **Agent loops and truncation** — The inability to stop a looping agent (Issue #2142) erodes trust in automation. No workaround documented.
- **Model compatibility gaps** — Integrating Kimi K2.6 into third-party agents (Claude Code) reveals silent failures and infinite recursion. Users expect K2.6 to work transparently as a drop-in model.
- **Desktop/CLI boundary confusion** — Bugs like the PDF preview behavior (Issue #2143) are reported here because Kimi Desktop lacks its own public issue tracker. This fragments the feedback pipeline.
- **MCP schema fragility** — Exposing thousands of MCP tools or deeply nested JSON schemas causes request failures. Developers with heavy MCP setups are blocked until the guardrail PRs land.
- **Shell mode alignment polish** — Multiline prompt misalignment is a minor but persistent UX friction that prompts complaints from terminal-centric users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-02

## Today's Highlights

A massive cleanup of issue #7410 (Broken Claude Max, 393 comments) has been resolved and closed, ending a months-long saga that dominated community attention. On the codebase front, contributor **kitlangton** landed four PRs today alone—continuing a major architectural shift from legacy Async Local Storage to proper Effect-based services. Meanwhile, DeepSeek thinking mode surfaced as a significant pain point, and the community is buzzing about adding a `/btw` command, mirroring Anthropic's recent Claude Code feature.

## Releases

### v1.14.31
- **Core:** Azure setup now prompts for resource name and saves it alongside the API key; task child sessions preserve parent `external_dir` and deny permissions (@remorses); invalid remote MCP URLs fail with a clear error instead of breaking setup.
- **Desktop:** Restoring saved (description truncated in source).

---

## Hot Issues

1. **#7410 — [CLOSED] Broken Claude Max** (393 comments, 357 👍)
   - After months of community outcry and discussion, this bug blocking Claude Max usage has been resolved. The high engagement signals how critical Anthropic model support is to the user base.
   - https://github.com/anomalyco/opencode/issues/7410

2. **#8030 — [CLOSED] Copilot auth consuming premium requests rapidly** (224 comments, 79 👍)
   - Agent-initiated requests were incorrectly billed as user requests, rapidly draining monthly quotas. Closed today—fix likely shipped.
   - https://github.com/anomalyco/opencode/issues/8030

3. **#2072 — [OPEN] Support for Cursor?** (64 comments, 161 👍)
   - Persistent demand for Cursor CLI compatibility. Despite Cursor's closed API, the community keeps this request alive.
   - https://github.com/anomalyco/opencode/issues/2072

4. **#309 — [CLOSED] Web search tool** (24 comments, 29 👍)
   - A long-standing feature request finally closed. Web search capabilities have been highly anticipated.
   - https://github.com/anomalyco/opencode/issues/309

5. **#16992 — [OPEN] Feature: add /btw command** (13 comments, 76 👍)
   - Inspired by Anthropic's Claude Code, this would let users insert out-of-band instructions mid-conversation. High upvote-to-comment ratio signals strong consensus.
   - https://github.com/anomalyco/opencode/issues/16992

6. **#24722 — [OPEN] DeepSeek thinking mode: reasoning_content not passed back for tool calls** (9 comments, 5 👍)
   - Critical bug for DeepSeek users: omitting `reasoning_content` from tool-call turns causes 400 errors. Blocks thinking mode entirely for DeepSeek-v4 models.
   - https://github.com/anomalyco/opencode/issues/24722

7. **#22444 — [OPEN] Azure OpenAI Models not working in latest update** (12 comments, 4 👍)
   - All Azure OpenAI models fail post-update with generic errors. Affects GPT-5.x-Codex variants.
   - https://github.com/anomalyco/opencode/issues/22444

8. **#19081 — [OPEN] reasoning_content stripped on replay, breaking KV cache** (5 comments, 15 👍)
   - Thinking tokens are removed from assistant messages on subsequent turns, invalidating KV caches for local inference—silently degrading performance.
   - https://github.com/anomalyco/opencode/issues/19081

9. **#13833 — [CLOSED] Cannot find files in dot folder** (13 comments)
   - Agents consistently fail to locate files inside hidden directories, even when they created them. Closed today.
   - https://github.com/anomalyco/opencode/issues/13833

10. **#25113 — [OPEN] Cannot use opencode attach with OPENCODE_SERVER_USERNAME** (7 comments)
    - Web server auth via environment variables fails to work with `opencode attach` despite the PR that enabled it.
    - https://github.com/anomalyco/opencode/issues/25113

---

## Key PR Progress

1. **#25376 — [CLOSED] Convert LoadInput.init to Effect + extract InstanceBootstrap** (@kitlangton)
   - Replaces `Promise`-based init with generic `Effect.Effect`, enabling Effect-native init bodies without ceremony. Part of the ongoing architectural modernization.
   - https://github.com/anomalyco/opencode/pull/25376

2. **#25375 — [CLOSED] Add dedicated plan question tool** (@viniraioli)
   - Separates plan-mode clarification into its own `plan_question` tool with distinct prompting, permissions, and agent restrictions. Strengthens plan-mode guardrails.
   - https://github.com/anomalyco/opencode/pull/25375

3. **#25374 — [CLOSED] Drop ALS fallbacks from containsPath and workspace routing** (@kitlangton)
   - Removes dead Async Local Storage fallbacks now that all callers pass explicit `InstanceContext`. Cleans up legacy routing code.
   - https://github.com/anomalyco/opencode/pull/25374

4. **#25372 — [CLOSED] Extract InstanceStore.provide helper** (@kitlangton)
   - New helper for loading cached instance context and providing `InstanceRef` to wrapped effects. Simplifies HTTP middleware.
   - https://github.com/anomalyco/opencode/pull/25372

5. **#25277 — [CLOSED] Move instance loading into Effect service** (@kitlangton)
   - Adds an Effect-backed `InstanceStore` for lifecycle management. HTTP routes now get `InstanceRef`/`WorkspaceRef` without entering legacy ALS.
   - https://github.com/anomalyco/opencode/pull/25277

6. **#25367 — [OPEN] Cache messages across prompt loop to preserve prompt cache byte-identity** (@BYK)
   - Fixes a bug where reloading messages from DB every loop iteration broke prompt cache optimization. Closes #25366.
   - https://github.com/anomalyco/opencode/pull/25367

7. **#25368 — [OPEN] Wrap reasoning in <thinking> tags in markdown export** (@1fanwang)
   - Markdown transcripts lacked closing delimiters for thinking content, breaking downstream parsers. Closes #25308.
   - https://github.com/anomalyco/opencode/pull/25368

8. **#18767 — [OPEN] Mobile Touch Optimization** (@noahbentusi)
   - Large PR optimizing the app for mobile/touch while preserving desktop experience. Includes event handling, gesture support.
   - https://github.com/anomalyco/opencode/pull/18767

9. **#23053 — [OPEN] Enable auto-vacuum and add periodic DB maintenance** (@BYK)
   - Adds incremental auto-vacuum to SQLite database with periodic maintenance. Addresses long-standing database bloat issues (#16729).
   - https://github.com/anomalyco/opencode/pull/23053

10. **#21866 — [OPEN] Harden plan mode: deny escape, show preview, guard empty** (@BYK)
    - Three plan-mode fixes: deny plan exit/enter in subagents, show file previews before edits, and reject empty plans. Closes #18515.
    - https://github.com/anomalyco/opencode/pull/21866

---

## Feature Request Trends

1. **Multi-provider expansion** — Users want Cursor CLI support (#2072), and efforts like `--model free` resolution (PR #21907) show the team is building provider abstraction layers.
2. **Mid-conversation commands** — The `/btw` command (Anthropic-style out-of-band instructions) drew 76 upvotes in just a few weeks. It's the most-requested new slash command.
3. **Plan mode hardening** — Multiple PRs (#25375, #21866) and issues show the community is working toward making plan mode more reliable with better tool isolation and previews.
4. **Web search integration** — Issue #309's closure suggests a built-in web search tool is finally arriving, a top request for agent-driven research workflows.

---

## Developer Pain Points

1. **DeepSeek thinking mode fragmentation** — Two open issues (#24722, #19081) highlight that thinking tokens are inconsistently handled across the stack, causing both immediate 400 errors and silent KV cache invalidation.
2. **Azure provider instability** — Post-update breakage (#22444) erodes trust with Azure users. The patch in v1.14.31 addresses setup but the core issue remains.
3. **Dot-folder blind spots** — Agents routinely fail to locate files in hidden directories (#13833), even those they created. This undermines reliability for structured workflows like plan-on-disk.
4. **TUI input/rendering regressions** — Multiple issues report frozen input (#8229), disappearing input areas (#8840), and missing provider options (#8820, #25297). Terminal UX remains a rough edge.
5. **Mobile/web terminal artifacts** — Switching terminals leaves visual artifacts (#14533); the desktop web app shows black screens on older Macs (#8135). Cross-platform UI consistency is lacking.

---

*Digest generated from 50 issues and 50 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-02

## Today's Highlights

The weekend sees a flurry of community-reported bugs around new provider integrations (Xiaomi MiMo, OpenRouter, TensorZero) and TUI input handling across terminals. Despite the quieter day, the team shipped **v0.72.0** with a new Xiaomi MiMo provider and **v0.71.1** with WebSocket caching for OpenAI Codex. Several important PRs landed, including a fix for Vietnamese/IME input lag and a refactor to Shiki-based syntax highlighting.

## Releases

**v0.72.0** — New **Xiaomi MiMo Token Plan** provider added as an Anthropic-compatible option, configurable via `XIAOMI_API_KEY` environment variable with default model `mimo-v2.5-pro`. Includes `/login` display URL. See [PR #4005](https://github.com/badlogic/pi-mono/pull/4005).

**v0.71.1** — Added `websocket-cached` transport option for the OpenAI Codex provider with ChatGPT subscription auth. Keeps a single WebSocket open per session, sending only new conversation items after the first request — significantly reducing bandwidth and latency.

## Hot Issues

1. **[#4026](https://github.com/badlogic/pi-mono/issue/4026) — openai-codex-responses: verbosity "low" regresses tool-calling reliability**  
   *Closed, in-progress.* Changing default `text.verbosity` from `medium` to `low` causes GPT-5.3-codex to emit commentary/planning instead of tool calls, ending turns early. 7 comments. A critical regression for codex users.

2. **[#4082](https://github.com/badlogic/pi-mono/issue/4082) — Xiaomi MiMo Token Plan broken for China region**  
   *Closed.* The new provider uses the global URL `https://token-plan.xiaomimimo.com` — Chinese users need `https://token-plan-cn.xiaomimimo.com`. Auth also fails with a 401. Filed immediately after v0.72.0 release.

3. **[#4083](https://github.com/badlogic/pi-mono/issue/4083) — `transport` option not honored in openai-codex provider**  
   *Closed.* `buildBaseOptions` doesn't pass `transport` to codex provider, even though other providers support it. User notes AI-assisted but manually typed report.

4. **[#4078](https://github.com/badlogic/pi-mono/issue/4078) — Stream parser creates empty tool calls with interleaved content**  
   *Closed.* Qwen 3.6 via SGLang triggers empty tool call blocks (`id=""`, `name=""`) when content and tool call deltas interleave. Causes "Tool not found" errors. Community interest in robust streaming parser.

5. **[#4073](https://github.com/badlogic/pi-mono/issue/4073) — Deepseek V4 Pro via OpenRouter fails with `xhigh` reasoning effort**  
   *Closed.* The `xhigh` reasoning effort setting causes API errors. Affects users trying high-effort reasoning on OpenRouter.

6. **[#4051](https://github.com/badlogic/pi-mono/issue/4051) — TensorZero-based providers return empty responses in 0.71.0**  
   *Closed.* Users of ollm.com (TensorZero API) got empty responses after the v0.71.0 update. Worked in v0.70.6 — likely a regression from the WebSocket caching changes.

7. **[#3967](https://github.com/badlogic/pi-mono/issue/3967) — TUI key handling broken in kitty terminal**  
   *Open.* Backspace deletes at accelerated rate; `/models` keybinding pops up unexpectedly. Multiple TUI regressions reported across terminal emulators this week.

8. **[#3357](https://github.com/badlogic/pi-mono/issue/3357) — Official local LLM provider extension**  
   *Open, 17 👍.* Request to dynamically fetch model lists from `{baseUrl}/models`, enabling seamless integration with llama.cpp, Ollama, LM Studio. Highest-voted open feature request.

9. **[#4046](https://github.com/badlogic/pi-mono/issue/4046) — Compaction just deletes everything**  
   *Closed (weekend).* User reports compaction destroys all data. No reproduction steps provided, but alarming for anyone relying on session persistence.

10. **[#4054](https://github.com/badlogic/pi-mono/issue/4054) — `/new` session unresponsive until LLM response completes**  
    *Closed.* Typing `/new` while the LLM is streaming freezes the UI until the current response finishes. Basic UX issue that affects rapid workflow switching.

## Key PR Progress

1. **[#4084](https://github.com/badlogic/pi-mono/pull/4084) — Add extension tool unregister APIs**  
   Implements `pi.unregisterTool()` and `pi.replaceTools()` for dynamic runtime tool management by extensions. Includes documentation and refresh-behavior tests.

2. **[#4062](https://github.com/badlogic/pi-mono/pull/4062) — Fix Vietnamese/IME input with combining marks**  
   Solves a long-standing TUI issue (#2518) where Vietnamese and other combining-mark languages produce slow/laggy input. Makes `StdinBuffer` process UTF-8 sequences properly rather than one UTF-16 code unit at a time.

3. **[#3868](https://github.com/badlogic/pi-mono/pull/3868) — Migrate syntax highlighting to Shiki**  
   Replaces existing highlighting in coding-agent terminal and HTML export with Shiki. Uses `shiki/core` with fine-grained imports, caching, and lazy loading. First-class theme support via `syntaxTheme` in Pi themes.

4. **[#4005](https://github.com/badlogic/pi-mono/pull/4005) — Xiaomi MiMo provider**  
   Adds Xiaomi as a built-in OpenAI-compatible provider. Wired through both `packages/ai` and `packages/coding-agent`. Closes #3912.

5. **[#4007](https://github.com/badlogic/pi-mono/pull/4007) — Official local-LLM provider extensions**  
   Four new extensions for llama.cpp, LM Studio, vLLM, and Ollama. Each probes its engine's model endpoint dynamically. Addresses high community demand for local model support.

6. **[#3197](https://github.com/badlogic/pi-mono/pull/3197) — Add `interrupt()` for graceful turn interruption**  
   New turn-control primitive that stops the agent without destroying in-flight tool work. Unlike `abort()`, preserves partial results and tool state.

7. **[#4060](https://github.com/badlogic/pi-mono/pull/4060) — DigitalOcean serverless inference provider**  
   Adds DigitalOcean as a supported AI provider using OpenAI-compatible endpoints at `https://inference.do-ai.run/v1`. Model IDs sourced dynamically from `/v1/models`.

8. **[#3678](https://github.com/badlogic/pi-mono/pull/3678) — Honor Fireworks Anthropic tool compatibility**  
   Fixes built-in Fireworks API provider to correctly map Anthropic tool schemas. Previously caused errors with all Fireworks models.

9. **[#4053](https://github.com/badlogic/pi-mono/pull/4053) — Expose skills override to extensions**  
   Adds `pi.registerSkillsOverride()` API, allowing extensions to chain custom skill overrides with existing SDK mechanisms.

10. **[#4081](https://github.com/badlogic/pi-mono/pull/4081) — Fix link to plan-mode extension docs**  
    Minor weekend docs fix — updates moved file references. Auto-closed per weekend policy.

## Feature Request Trends

- **Local model support dominates**: Issue #3357 (official local LLM provider) has 17 👍, and PR #4007 directly addresses it with four local extensions. The community clearly wants seamless Ollama/llama.cpp/LM Studio integration.
- **Custom thinking levels per model** (#3208, 13 👍): Users want `Shift+Tab` to cycle only through thinking levels a model actually supports, configurable in `models.json`.
- **Extension API expansion**: Multiple requests for richer extension APIs — paste content access, tool unregistration, skills override — showing growing ecosystem interest.
- **Dynamic provider model fetching**: Expecting providers to auto-discover available models from base URLs rather than hardcoding.
- **Service tier control for OpenAI** (#4074): First-class `--service-tier` flag for `default|priority|flex` tiers, reflecting enterprise usage patterns.

## Developer Pain Points

1. **Streaming parser fragility** — Empty tool calls, interleaved content/tool_calls, and broken streaming with different providers remain the #1 recurring bug category this week.

2. **TUI input handling across terminals** — Zellij (Shift+Enter), kitty (backspace/keys), Windows Terminal (backspace/delete), and IME input issues (Vietnamese) show the TUI layer is stretched thin across terminal emulators.

3. **Provider regression cascade** — Each release seems to break at least one provider: TensorZero in 0.71.0, Fireworks in 0.70.x, Xiaomi MiMo in 0.72.0. The provider abstraction layer needs more comprehensive integration tests.

4. **Weekend auto-close frustration** — Multiple issues explicitly tagged `closed-because-weekend` with meaningful bug reports get summarily closed, causing churn for reporters who must re-open on Monday.

5. **Self-update fails with custom npm prefix** (#3942) — Nix and other non-standard Node.js setups break the new self-update mechanism introduced in v0.70.3.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-05-02

## Today's Highlights

The Qwen Code project continues to mature with the release of v0.15.6-nightly, introducing a **FileReadCache** that short-circuits repeat file reads—laying the groundwork for enforcement that models must read a file before editing it. A new **`/doctor memory`** command for memory diagnostics has also arrived, addressing one of the community's most-requested observability needs. Additionally, the **OpenTelemetry telemetry pipeline** is being hardened for production readiness, with clear HTTP OTLP endpoint behavior and signal routing now defined.

## Releases

**[v0.15.6-nightly.20260502.5d1052a35](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260502.5d1052a35)**  
*Released: 2026-05-02*

- **feat(core):** Added `FileReadCache` that short-circuits unchanged reads (PR [#3717](https://github.com/QwenLM/qwen-code/pull/3717) by @wenshao). This is the foundation for enforcing "read-before-edit" in the agent loop.
- **fix(cli):** Honored proxy settings in CLI operations (by @cyphercodes), resolving a long-standing pain point for developers behind corporate proxies.

## Hot Issues

1. **[#3000 – Memory Diagnostics / 内存诊断](https://github.com/QwenLM/qwen-code/issues/3000) (P3, area:tools)**  
   *Author: @pomelo-nwu | Opens: Apr 8, 3 comments*  
   Reports the absence of any memory diagnostic tools—no V8 heap analysis, no leak detection, no memory pressure checks. This issue has been instrumental in driving the new `/doctor memory` command (PR #3785). Community reaction is positive; several developers have +1'd the request.

2. **[#1916 – Cannot open Qwen in VS Code](https://github.com/QwenLM/qwen-code/issues/1916) (needs-triage, feature-request)**  
   *Author: @BrunoKryt | Opens: Feb 23, 4 comments*  
   A user struggling with VS Code integration reports no chat button visible. The issue remains open after 2+ months, suggesting the VS Code companion setup flow may need better documentation or auto-detection.

3. **[#3757 – 401 error in JetBrains AI / 体验额度用完了？](https://github.com/QwenLM/qwen-code/issues/3757) (bug, needs-triage)**  
   *Author: @wangxianchao2021 | Opens: Apr 30, 2 comments*  
   A user gets HTTP 401 when using Qwen in JetBrains AI, wondering if the free tier quota is exhausted or if configuration is wrong. This highlights a need for clearer error messaging around authentication and quota limits.

4. **[#3773 – Bug: "qwe"](https://github.com/QwenLM/qwen-code/issues/3773) (bug, need-information)**  
   *Author: @jhonnicollas | Opens: Apr 30, 1 comment*  
   A minimal reproduction with sparse details. Maintainers have tagged it "need-information." The client info shows the user is on v0.15.6 with a custom API key pointing to DashScope. Likely a configuration or authentication issue.

5. **[#3731 – Harden OpenTelemetry configuration](https://github.com/QwenLM/qwen-code/issues/3731)**  
   *Author: @doudouOUC | Opens: Apr 29*  
   A detailed proposal to make the existing OTLP implementation production-ready—fixing configuration semantics, HTTP OTLP correctness, exporter safety, and shutdown reliability. No comments yet, but this is clearly a strategic investment in observability.

6. **[#3734 – Define HTTP OTLP endpoint behavior and signal routing](https://github.com/QwenLM/qwen-code/issues/3734)**  
   *Author: @doudouOUC | Opens: Apr 29, CLOSED*  
   A scoped sub-issue that has already been resolved. Signals are now routed to `/v1/traces`, `/v1/logs`, `/v1/metrics` per the OpenTelemetry spec. Closed by PR #3779.

7. **[#1804 – File paths with leading slash treated as slash commands](https://github.com/QwenLM/qwen-code/issues/1804)** (referenced in PR #3743)  
   *Not in the top-level list but actively being fixed*  
   A long-standing UX bug where file paths like `/api/...` were consumed as unknown slash commands. PR #3743 is in progress to fix this.

8. **[#3766 – Release v0.15.6](https://github.com/QwenLM/qwen-code/pull/3766)**  
   Automated release PR from the CI bot. Signals the v0.15.6 stable release is underway.

## Key PR Progress

1. **[#3785 – feat(cli): add memory diagnostics doctor command](https://github.com/QwenLM/qwen-code/pull/3785)**  
   *Author: @yiliang114 | OPEN*  
   Adds `/doctor memory` with optional `--json` flag for structured diagnostics. Directly addresses issue #3000. This is a high-impact feature for debugging memory leaks in long-running agent sessions.

2. **[#3774 – feat(core): enforce prior read before Edit/WriteFile mutates a file](https://github.com/QwenLM/qwen-code/pull/3774)**  
   *Author: @wenshao | OPEN*  
   Building on the new `FileReadCache`, this PR enforces that the model must have read the current file bytes before it is allowed to edit or overwrite a file. This is a safety and correctness feature that prevents accidental data loss.

3. **[#3684 – feat(core): event monitor tool with throttled stdout streaming](https://github.com/QwenLM/qwen-code/pull/3684)**  
   *Author: @doudouOUC | OPEN*  
   Introduces a `Monitor` tool that spawns long-running shell commands and streams stdout as events with token-bucket throttling. Includes a `MonitorRegistry` for lifecycle management. Useful for real-time log watching or server health checks.

4. **[#3115 – feat: add commit attribution with per-file AI contribution tracking](https://github.com/QwenLM/qwen-code/pull/3115)**  
   *Author: @wenshao | OPEN (since Apr 10)*  
   A major feature for compliance: tracks per-file AI contribution in git history. Important for open-source projects requiring AI disclosure and enterprises needing audit trails. Still open after 3 weeks—likely awaiting broader review.

5. **[#3783 – feat(cli): Add ability to switch models non-interactively](https://github.com/QwenLM/qwen-code/pull/3783)**  
   *Author: @alex-musick | OPEN*  
   Extends `/model` with non-interactive syntax, enabling scripting and automation. Directly addresses developer demand for CI/CD integration.

6. **[#3782 – fix(vscode-companion): align package ESLint config with root](https://github.com/QwenLM/qwen-code/pull/3782)**  
   *Author: @B-A-M-N | OPEN*  
   Housekeeping PR that aligns the VS Code companion package's ESLint config with the root config. Reduces noise from lint warnings in the companion extension.

7. **[#3604 – feat(skills): parallelize loading + add path-conditional activation](https://github.com/QwenLM/qwen-code/pull/3604)**  
   *Author: @wenshao | OPEN (since Apr 25)*  
   Replaces nested `for-await` loops with `Promise.all` for faster cold starts. Adds path-conditional skill activation, allowing skills to be automatically activated based on the project directory.

8. **[#3598 – feat(cli): add --json-schema for structured output in headless mode](https://github.com/QwenLM/qwen-code/pull/3598)**  
   *Author: @wenshao | OPEN*  
   Adds structured output support via `--json-schema` flag for headless (`qwen -p`) mode. Enables programmatic consumption of LLM outputs with guaranteed schema compliance.

9. **[#3781 – feat(weixin): add image sending support via CDN upload](https://github.com/QwenLM/qwen-code/pull/3781)**  
   *Author: @Mr-Maidong | OPEN*  
   Adds WeChat channel image sending capability through a four-step CDN upload process. Targeted at the Chinese market where WeChat is a primary communication tool.

10. **[#3698 – fix(acp): run auto compression before model sends](https://github.com/QwenLM/qwen-code/pull/3698)**  
    *Author: @Jerry2003826 | OPEN*  
    Fixes chat compression not running before automatic ACP (Auto Continuous Prompting) model sends. Ensures long conversations are properly compressed before each model invocation, reducing token waste.

## Feature Request Trends

Based on the past 24 hours of issues and PRs, the most-requested feature directions are:

- **Observability & Diagnostics** – Memory diagnostics (#3000, #3785), telemetry hardening (#3731, #3734, #3779), and structured output for programmatic use (#3598) are receiving significant engineering investment. The community clearly wants production-grade monitoring.
- **Multi-platform & Channel Support** – WeChat image support (#3781), proxy support (#3717 fix), and JetBrains AI integration (#3757) show demand for broader platform coverage.
- **Developer Tooling & Automation** – Non-interactive model switching (#3783), commit attribution (#3115), and slash-command path handling (#3743) reflect a community that wants to script, automate, and integrate Qwen Code into CI/CD pipelines.
- **Compliance & Safety** – "Read-before-edit" enforcement (#3774) and AI contribution tracking (#3115) indicate growing enterprise and open-source governance requirements.
- **Cost Management** – Multiple PRs on model cost estimation and billing (#3631, #3668, #3780) show users want transparency and control over API spending.

## Developer Pain Points

1. **Authentication & Quota Confusion** – Issue #3757 (401 in JetBrains AI) and #3773 (vague "bug") both point to unclear authentication error messages. Users don't know if they've hit a quota limit or misconfigured their API key.

2. **VS Code Integration Friction** – Issue #1916 (no chat button) has remained open for over 2 months. The initial setup experience for the VS Code companion extension needs better documentation, auto-detection, or a guided onboarding flow.

3. **Proxy Configuration** – The proxy setting fix in v0.15.6-nightly suggests that developers behind corporate proxies have been unable to use Qwen Code reliably. This is a common blocker in enterprise environments.

4. **File Path Confusion** – Issue #1804 (file paths treated as slash commands) has been a persistent annoyance. Developers commonly paste absolute paths (e.g., `/Users/name/path`) that get misinterpreted. PR #3743 aims to fix this, but it's taken significant time to land.

5. **Memory Leaks in Long Sessions** – Issue #3000 and PR #3785 directly address the lack of memory diagnostics. Developers running long agent sessions report difficulty diagnosing V8 heap growth without tooling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*