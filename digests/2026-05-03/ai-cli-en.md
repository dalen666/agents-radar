# AI CLI Tools Community Digest 2026-05-03

> Generated: 2026-05-03 04:43 UTC | Tools covered: 8

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-05-03

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing simultaneous maturation and instability. Across six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, and Qwen Code—communities report server-side regressions, cost unpredictability, and platform-specific breakages alongside aggressive feature development. The dominant narrative is one of **scaling pains**: as these tools become integral to developer workflows, users demand enterprise-grade reliability (session persistence, predictable billing, cross-platform parity) while vendors race to ship agent orchestration, MCP integration, and context window expansion. Notably, **Windows support** remains a universal weak point, and **sub-agent spawning** is breaking across multiple tools concurrently. The ecosystem is converging on shared architectural patterns—session branching, AST-aware tooling, lazy MCP injection—while vendors differentiate on model ecosystem breadth, extension hooks, and cost models.

---

## 2. Activity Comparison

| Tool | New Issues | Active PRs | Release Today | Notable Severity |
|---|---|---|---|---|
| **Claude Code** | 10+ high-severity | 7 open/merged | None | Session cost bug (5–10×), sub-agent regression, data leak |
| **OpenAI Codex** | 10 hot issues | 10 open PRs | None | 1M context demand, Windows desktop broken, auth regression |
| **Gemini CLI** | 10 tracked | 10 open PRs | None | Windows hangs/loops, subagent false success, proxy broken |
| **Copilot CLI** | 10 new (May 2) | 0 new PRs | None | Session deadlock, MCP regression, file locking |
| **Kimi Code CLI** | 9 new | 3 PRs (1 open, 2 closed) | None | Windows crash (v1.41.0), hook truncation, token waste |
| **OpenCode** | 10+ active | 10+ PRs (8 from one contributor) | **v1.14.32 + v1.14.33** | TUI crashes, permissions bypass, China connectivity |
| **Pi** | 10 tracked | 10 PRs (7 closed, 3 open) | **v0.72.1** | Keyboard regressions, compaction data loss, installation failures |
| **Qwen Code** | 10 tracked | 10 open PRs | **v0.15.6-nightly** | Remote desktop read failure, DeepSeek reasoning gap, local model JIT |

**Observation:** Claude Code attracts the highest-severity bug reports. OpenCode and Pi are shipping most aggressively. Qwen Code's nightly release signals rapid iteration. Only Copilot CLI had zero PR activity today—potentially concerning for a Microsoft-backed tool.

---

## 3. Shared Feature Directions

### Session Management & Branching
- **Claude Code** (#55053), **Copilot CLI** (#3091), **Kimi Code CLI**: Forking, branching, and tree-view navigation of sessions.
- **Qwen Code** (#3733): Batch session deletion with multi-select.
- **Demand:** Users want non-linear conversation histories, session persistence across restarts, and undo/redo workflows.

### Session Cost & Quota Transparency
- **Claude Code** (#55053, #14362), **Codex** (#19585), **Kimi Code CLI** (#2149, #2150), **Copilot CLI** (#3085 misleading timestamps).
- **Demand:** Real-time token/cost status bars, predictable billing, accurate quota accounting. Users across tools feel blindsided by silent pricing changes.

### MCP Integration & Optimization
- **Claude Code** (#36024 multi-account), **Copilot CLI** (#3083 MCP loading regression, #3090 MCP UX), **Kimi Code CLI** (#2147 lazy-load MCP schemas), **Gemini CLI** (no specific MCP mention but proxy support essential).
- **Demand:** Lazy loading of MCP tool schemas to conserve tokens, multi-account support, interactive enable/disable menus, and cross-tool portability of MCP configs.

### Agent/Sub-Agent Reliability
- **Claude Code** (#55712 “Prompt is too long” at 0 tokens, #55488 data leak), **Gemini CLI** (#22323 false success on MAX_TURNS, #26393 execution loops), **Copilot CLI** (#3084 postToolUse deadlock), **OpenCode** (#25515 permissions bypass).
- **Demand:** Sub-agent failure transparency, true filesystem isolation, consistent permissions enforcement, graceful handoffs.

### Windows Platform Parity
- **Claude Code** (#53281, #52958, #51620), **Codex** (#10090, #20048, numerous others), **Gemini CLI** (#26393 hang/zombie processes), **Kimi Code CLI** (#2151 NoneType crash), **OpenCode** (Zed DB path fix), **Pi** (no Windows-specific this week, but keyboard issues affect all platforms), **Qwen Code** (#3789 remote desktop).
- **Demand:** Full feature parity, no app-server crashes, working sandbox, PowerShell 5.1 support, reliable startup.

### Cross-Tool Skill/Config Portability
- **Kimi Code CLI** (#1894 recursive skill loading for Codex compatibility), **OpenCode** (importing settings from other tools), **Pi** (provider-agnostic model definitions).
- **Demand:** The community uses multiple tools. They want skills, MCP servers, and agent configs to be portable rather than vendor-locked.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary User** | Professional devs, enterprises | Power users, agent-heavy workflows | Google ecosystem, GCP users | GitHub ecosystem, VS Code users | Codex migrants, cost-conscious devs | Hackers, plugin developers | Multi-provider, experimentalists | QwenLM ecosystem, multi-model users |
| **Key Strength** | Agent orchestration, Cowork mode | 400K context, GPT-5.5 performance | Google infrastructure, | GitHub integration, | Ease of use, low learning curve | Plugin architecture, Effect-native refactoring | Provider breadth (Xiaomi, NVIDIA, Together) | File caching, background tasks, SDK maturity |
| **Key Weakness** | Cost unpredictability, sub-agent regressions | Windows desktop instability, context cap | Windows reliability, subagent transparency | Session deadlocks, MCP regressions | Token waste, dual quota confusion | Stability regressions, permissions confusion | Keyboard input, compaction data loss | Local model pre-flight, reasoning protocol gaps |
| **Architectural Approach** | Server-side cost control, opinionated agent model | Proprietary models, Codex-specific API | Vertex AI integration, strong CLI tooling | GitHub Copilot backend, extension-focused | Lightweight, Codex-compatible | Effect-native functional core, plugin-driven | Provider-abstracted, schema-driven | Open-source nightly, community-driven SDK |
| **Community Character** | Vocal about regressions, high expectations | Feature-demanding, LSP/IDE focused | Maintainer-heavy, quieter community | Feature-request driven, session branching focus | Friendly, migration-focused | Active contributor base (e.g., @kitlangton) | Internationalization-aware, provider-contributing | SDK-focused, reliability-conscious |

**Key Takeaway:** Claude Code and Codex lead in user expectations but attract the most vocal criticism for regressions. OpenCode is architecturally the most innovative (Effect-native). Pi is the most provider-agnostic. Gemini CLI feels the most internal/Google-focused. Copilot CLI and Kimi Code CLI are playing catch-up on features their competitors already have.

---

## 5. Community Momentum & Maturity

### Most Active Communities
1. **Claude Code**: High engagement despite (or because of) severity. 29+ comments on #55053 alone. The open-source PR (#41447) signals strong community desire for transparency.
2. **OpenCode**: 8 PRs from a single contributor (@kitlangton) in one day for the Effect-native refactoring. Two patch releases in 24 hours. Highest code velocity.
3. **Codex**: 112 comments on #19464 (1M context), 294 upvotes on #8745 (LSP). Strong opinionated demand for specific features.

### Rapidly Iterating
- **OpenCode**: Shipping daily patches, aggressive architectural overhaul (Effect-native).
- **Pi**: Two releases this week (v0.72.x series), 10 PRs in 24 hours.
- **Qwen Code**: Nightly releases, 10 open PRs, clear roadmap (background tasks Phase C).

### Maturing (Stable but Slower)
- **Copilot CLI**: Zero PRs today, but consistent issue triage. Session management focus suggests stabilization over new features.
- **Gemini CLI**: Maintainer-only issues dominate. Community contribution on Windows (#26392) is the outlier. Feels like a Google-internal tool with external users.
- **Kimi Code CLI**: Smaller community but growing. Cross-tool compatibility demands (Codex skills) suggest it's positioning as a lighter alternative.

### Warning Signs
- **Claude Code**: No releases in 24 hours despite 5+ critical/high-severity bugs. Server-side silent changes eroding trust.
- **Codex**: Windows desktop remains broken for months (#10090, #20048). Chat history loss (#20741) undermines confidence in local state management.

---

## 6. Trend Signals

### 1. The Cost Predictability Crisis
Across Claude Code (#55053), Codex (#19585), and Kimi Code CLI (#2150), users report sudden, unexplained increases in token/cost consumption. **Signal:** Developers are treating AI CLI tools as utilities and demanding utility-grade billing transparency. Tools that fail to provide real-time cost telemetry risk losing trust. Expect a wave of self-hosted or OSS alternatives (OpenCode, Pi) that offer flat-rate or transparent usage models.

### 2. Agentic Workflows Hitting Reliability Ceilings
Sub-agent spawning is simultaneously breaking in Claude Code (#55712), Gemini CLI (#22323, #26393), and Copilot CLI (#3084). **Signal:** The industry rushed agent orchestration without robust failure modes, state isolation, or deadlock prevention. The next 6 months will see a "quality over quantity" pivot—vendors will invest in sub-agent recovery, transparent failure reporting, and deterministic permissions rather than adding more agent types.

### 3. MCP as the Universal Integration Layer
Every tool except Gemini CLI has significant MCP-related activity: lazy loading (#2147), multi-account support (#36024), loading regressions (#3083), UX improvements (#3090). **Signal:** MCP is becoming the standard protocol for tool extensibility. The winners will be tools that make MCP management seamless (auto-discovery, lazy injection, cross-session persistence) rather than just supporting it.

### 4. Windows as the Battleground Platform
Every Windows-specific issue this week causes complete workflow breaks (app-server crashes, sandbox failures, startup hangs). **Signal:** The consumer market is primarily macOS, but enterprise deployment is Windows-heavy. Tools that ignore Windows parity will fail in enterprise procurement. The vendor that ships a truly stable Windows experience first gains significant competitive advantage.

### 5. From Single-Model to Multi-Model Orchestration
Pi, OpenCode, and Qwen Code all show users toggling between local (LM Studio), cloud (DeepSeek, Qwen, GPT), and specialized providers. **Signal:** The era of the single-model CLI is ending. Users want to route tasks to the best model for the job (cost, speed, capability). Tools with native multi-model routing, lazy loading, and model-specific error handling (Qwen's `classifyError()` in #3798) will win power users.

### 6. SDK and API Reliability as Competitive Moats
Qwen Code's four issues on release infrastructure (#3793-#3796) from one contributor signal maturing concern about CI/CD stability. **Signal:** As developer tools become platforms, SDK reliability and release automation become differentiators. Vendors with flaky CI or broken SDK publish workflows will lose ecosystem contributors to more reliable alternatives.

---

## Recommendations for Technical Decision-Makers

- **If you need reliability today:** OpenCode (patching daily, active community fixes) or Pi (multi-provider fallback, frequent releases) are safest bets. Avoid Claude Code and Codex for Windows deployments.
- **If you need advanced agent orchestration:** Claude Code's Cowork mode is the most capable—but wait until #55712 and #55053 are resolved before relying on it.
- **If you manage costs:** Use Kimi Code CLI (cheapest per token) but add manual quota tracking. Pi and OpenCode offer the most provider flexibility for cost optimization.
- **If you're building a multi-tool workflow:** Prioritize tools that support portable MCP configs (OpenCode, Kimi Code CLI) and session branching (Copilot CLI, Claude Code). Avoid dependency on any single vendor's skill format.
- **If you develop plugins/extensions:** OpenCode's plugin architecture and Pi's extensible provider framework offer the most hook surface. Claude Code and Codex remain black boxes.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the data from `github.com/anthropics/skills` (as of 2026-05-03).

---

### 1. Top Skills Ranking

The following Skills (Pull Requests) have attracted the most community discussion and attention. They represent the most active areas of contribution and review.

1.  **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
    - **Functionality:** A quality-control skill that prevents common typographic errors in AI-generated documents, such as orphaned words, widowed paragraphs, and misaligned numbering.
    - **Discussion Highlights:** The highest-commented PR, indicating strong community interest in improving the polish of AI-generated output. The discussion likely centers on the universal nature of these issues in LLM outputs.
    - **Status:** Open

2.  **[Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**
    - **Functionality:** Meta-skills for evaluating other Skills. The quality analyzer scores skills across five dimensions (structure, documentation, etc.), while the security analyzer checks for safety and injection risks.
    - **Discussion Highlights:** As one of the earliest "meta-skills," this PR has likely generated significant discussion around quality standards, security best practices, and the need for objective evaluation tools within the ecosystem.
    - **Status:** Open

3.  **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)**
    - **Functionality:** A revision of the existing frontend-design skill to make instructions more clear, actionable, and coherent for Claude to follow within a single conversation.
    - **Discussion Highlights:** Reflects a strong community focus on skill *quality* over quantity. The discussion likely focuses on the writing style and specificity required for effective agent instructions.
    - **Status:** Open

4.  **[Add ODT skill](https://github.com/anthropics/skills/pull/486)**
    - **Functionality:** A skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods), essential for interacting with LibreOffice and other open-source tools.
    - **Discussion Highlights:** Highlights demand for the open-source and cross-platform document ecosystem, bridging a gap often left by proprietary formats.
    - **Status:** Open

5.  **[Add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**
    - **Functionality:** Proposes a `CONTRIBUTING.md` file to address the repository's low community health score and standardize the process for submitting new Skills.
    - **Discussion Highlights:** A very high-profile PR addressing a fundamental governance gap. The discussion is likely about establishing clear rules, guidelines, and expectations for community contributions.
    - **Status:** Open

6.  **[Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**
    - **Functionality:** A comprehensive skill covering the full testing stack, from philosophy (Testing Trophy) to specific patterns for unit testing, React components, and edge cases.
    - **Discussion Highlights:** Demonstrates a clear demand for software engineering best practices. This is a broad and technically detailed skill, indicating the community wants Claude to be a more competent developer.
    - **Status:** Open

7.  **[Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)**
    - **Functionality:** A broad skill designed to assist with the entire ServiceNow platform, including ITSM, ITOM, SecOps, and IntegrationHub, rather than just scripting.
    - **Discussion Highlights:** A strong indicator of enterprise adoption. The discussion likely revolves around the scope of the skill and how to cover such a vast platform effectively.
    - **Status:** Open

### 2. Community Demand Trends

Analysis of top-voted and discussed Issues reveals several clear demand themes for new Skill development:

- **Enterprise Sharing & Management:** The highest-upvoted issue is a request for **org-wide skill sharing** (#228). This points to enterprises wanting to distribute Skills to teams without manual file-sharing and uploads. This is closely followed by requests for **API stability and reliability** (#403, #406) regarding skill version deletion and uploads.

- **Ecosystem Governance & Security:** A critical topic is **trust boundary abuse** (#492), where community skills distributed under the `anthropic/` namespace could be mistaken for official ones. This indicates a need for better attribution, curation, and security scanning. There is also clear demand for a **governance and safety skill** (#412).

- **Tooling & Infrastructure Improvements:** There is a strong push to improve the developer experience. The **`run_eval.py` trigger rate bug** (#556) is a major blocker for automated testing. Users also want **MCP integration** (#16) to expose skill capabilities as programmatic APIs, and require a **`CONTRIBUTING.md`** (#509) for clear contribution guidelines.

- **Cross-Platform & Adoption:** Users are actively requesting support for **AWS Bedrock** (#29) to use these Skills outside of Claude's hosted environment, and have flagged **duplicate skill content** (#189) from the official installation process, which hurts user trust and clarity.

### 3. High-Potential Pending Skills

These are actively discussed PRs that are not yet merged and represent significant new capabilities likely to land soon.

- **[Add shodh-memory skill](https://github.com/anthropics/skills/pull/154):** A persistent memory system for maintaining context across conversations. If accepted, this would be a foundational capability for many agent workflows.
- **[Add codebase-inventory-audit skill](https://github.com/anthropics/skills/pull/147):** A 10-step workflow for identifying orphaned code, unused files, and documentation gaps. This is a highly practical tool for maintenance and refactoring.
- **[Add sensory skill (macOS automation)](https://github.com/anthropics/skills/pull/806):** A skill for native macOS automation via AppleScript, moving away from screenshot-based "computer use" to direct app scripting. This could set a new standard for local agent automation.
- **[Add HADS skill](https://github.com/anthropics/skills/pull/616):** Implements the "Human-AI Document Standard," a Markdown convention for writing technical docs that serve both human and AI readers. This addresses a growing need for AI-native documentation.
- **[Add claude-obsidian-reporter](https://github.com/anthropics/skills/pull/664):** An end-of-day reporting tool that reads Git commits and writes structured reports to an Obsidian vault. This is a niche but highly specific use case demonstrating skill integration with local tools.

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **improving the reliability, governance, and enterprise readiness of the Skills ecosystem itself**, rather than for any single new application skill.

---

# Claude Code Community Digest
**Date:** 2026-05-03

---

## Today's Highlights

A significant cost-related bug is dominating community attention: users report the 5-hour session window is depleting 5–10× faster since April 29, with no changes to their workflow. Concurrently, a new Cowork mode regression is breaking sub-agent spawning entirely with a "Prompt is too long" error at zero tokens, while a security/privacy issue has emerged where spawned subagents can expose parent conversation history when directly messaged.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [🔴 #55053 – Sudden 5-hour session window squeeze starting Apr 29](https://github.com/anthropics/claude-code/issues/55053)
**Impact:** High. Users report their session window depleting 5–10× faster for identical workloads since late April 29. Light editing (scp, Read, small Edit patches) burns 20–25% of the window in under an hour. 29 comments, 11 upvotes. Community suspects either a silent pricing change or a token-counting bug introduced server-side.

### 2. [#36024 – Support multiple Gmail accounts in MCP integration](https://github.com/anthropics/claude-code/issues/36024)
**Impact:** Medium. 42 upvotes (highest in this batch). Many users juggle personal + work Google accounts and cannot use the Gmail MCP for both simultaneously. A longstanding request with no official update.

### 3. [#14362 – Sonnet model consuming both "All models" AND "Sonnet only" limits](https://github.com/anthropics/claude-code/issues/14362)
**Impact:** High. Sonnet usage is double-counting against two separate quota buckets simultaneously, causing premature throttling. Windows users are especially affected. 15 upvotes.

### 4. [🔴 #55488 – Spawned subagent identifies as team-lead and exposes parent conversation history](https://github.com/anthropics/claude-code/issues/55488)
**Impact:** Security-critical. When a subagent is spawned and then messaged directly, it misidentifies itself as the "team-lead" and surfaces the parent's conversation history. Likely a data-leak vector. Filed May 2, 5 comments.

### 5. [🔴 #55712 – Cowork mode: sub-agent spawning completely broken ("Prompt is too long" at 0 tokens)](https://github.com/anthropics/claude-code/issues/55712)
**Impact:** Critical. Cowork mode's sub-agent feature is entirely non-functional. The system claims "Prompt is too long" even when the token count shows 0. Filed today, 3 comments.

### 6. [#52908 – "You've hit your org's monthly usage limit"](https://github.com/anthropics/claude-code/issues/52908)
**Impact:** Medium. Users hitting org-level caps unexpectedly, possibly related to the same server-side changes causing the session-window issue in #55053. 6 upvotes.

### 7. [#52958 – Agent `isolation: "worktree"` leaks cwd, destroys untracked files](https://github.com/anthropics/claude-code/issues/52958)
**Impact:** Data-loss risk. Subagent worktree isolation leaks its working directory back into the parent checkout mid-session, causing `git checkout` in the parent to destroy untracked files. Reported April 24.

### 8. [#53281 – Code tab: local sessions crash immediately (IPC failure)](https://github.com/anthropics/claude-code/issues/53281)
**Impact:** High. Desktop app's "Code" tab fails to start sessions on macOS due to a `ccd_session/ccd_directory` IPC failure. Likely a regression. 3 upvotes.

### 9. [#54186 – Local session history disappears after VS Code restart](https://github.com/anthropics/claude-code/issues/54186)
**Impact:** Medium. VS Code extension loses all local session history upon restart. No persistence mechanism in place. Users losing hours of context.

### 10. [#55348 – /feedback returns 403 – cannot submit bug reports for 3 days](https://github.com/anthropics/claude-code/issues/55348)
**Impact:** Low-to-medium. Built-in feedback channel is broken server-side, forcing users to file on GitHub instead. Reported May 1, still unresolved.

---

## Key PR Progress

### 1. [#41447 – feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)
**Status:** Open. A community-driven PR attempting to open-source Claude Code. Links to several closed issues (#59, #456, #2846, #22002, #41434). No official Anthropic response visible.

### 2. [#46025 – docs: add Linux subprocess isolation and CLAUDE_CODE_SCRIPT_CAPS docs](https://github.com/anthropics/claude-code/pull/46025)
**Status:** Closed (merged). Adds documentation for Linux PID namespace isolation and the `CLAUDE_CODE_SCRIPT_CAPS` environment variable. Positive step for enterprise security hardening.

### 3. [#36562 – Add CLAUDE_CODE_GIT_BASH_PATH environment variable for Windows](https://github.com/anthropics/claude-code/pull/36562)
**Status:** Closed. Enables Windows users with non-standard Git Bash installations to configure the path via environment variable. Low-risk quality-of-life fix.

### 4. [#20448 – Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)
**Status:** Open. Proposes a governance plugin using T3 trust tensors and R6 audit trails. Novel concept but no Anthropic engagement visible.

### 5. [#36592 – Add comprehensive skill library across three new plugins](https://github.com/anthropics/claude-code/pull/36592)
**Status:** Closed. Adds 20+ skills across API development, document processing, and example implementations. Contributed by a ghost account.

### 6. [#36594 – feat(plugins): add remote-control plugin for guided setup and launch](https://github.com/anthropics/claude-code/pull/36594)
**Status:** Closed. Helps users configure remote-control sessions with diagnostics, naming, and connection guidance.

### 7. [#55484 – Claude/dashboard improvements se h7a](https://github.com/anthropics/claude-code/pull/55484)
**Status:** Closed. Unclear scope from summary, appears to be dashboard improvements. Merged May 2.

---

## Feature Request Trends

The following feature themes emerge from the recent issues:

- **Multi-account MCP support** (#36024, #47975, #52730): Persistent demand for connecting multiple Gmail and Microsoft 365 accounts simultaneously, and fixing OAuth flow issues for corporate Entra tenants.
- **Session persistence & reliability** (#54186, #44772, #55700): Users want local session history that survives restarts, and proper rewind/scrollback functionality for large sessions (>5 MB).
- **Agent/worktree isolation hardening** (#52958, #53065): Requests for true filesystem isolation when spawning subagents, and preventing token inflation from advisor() calls.
- **Cost transparency & budgeting** (#55053, #14362, #52908): Growing demand for predictable session costs, accurate token counting, and clear quota accounting.

---

## Developer Pain Points

1. **Session cost unpredictability (#55053, #14362):** The dominant pain point this week. Developers feel blindsided by a sudden 5–10× increase in session consumption with no changelog or announcement. Trust in cost predictability is eroding.

2. **Cowork/Agent breaking regressions (#55712, #55488, #54513):** Multiple regressions in the Cowork and agent-spawning subsystems are making advanced workflows unreliable. The "Prompt is too long at 0 tokens" bug (#55712) is a showstopper for anyone relying on sub-agents.

3. **Windows-specific friction (#51620, #55718, #48493):** Silent CLI exits, failure to initialize on Windows 11 25H2, and broken panel drag behavior persist. Windows remains a second-class platform despite growing adoption.

4. **OAuth and MCP integration fragility (#52730, #47975):** Microsoft 365 MCP authentication remains broken for corporate Entra tenants due to redirect URI mismatches and duplicate query parameters. Requires manual workarounds.

5. **Communication gaps:** No releases in 24 hours despite multiple high-severity bugs. The #55348 feedback endpoint being down for 3 days symbolizes a broader concern about developer<->team communication around regressions and server-side changes.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-03

## Today's Highlights

The community is heavily focused on two fronts: the rollout of GPT-5.5 with its 400K context window and the growing pains of Windows desktop support. The most-discussed issue demands pushing that limit to 1M tokens, while Windows users continue to face persistent failures with the Browser Use plugin and app-server startup. On the development side, a notable PR stack is restructuring how service tiers are modeled and surfaced in both the app-server and TUI, while another set of PRs introduces structured analytics event schemas for tool items and lifecycle timing.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#19464 — Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)** — 112 comments, 141 👍  
   The top-voted issue this week. Authors note that the API already supports 1M tokens, but Codex caps at 400K. Community sentiment is that for long-running agent sessions and large codebase maintenance, the lower limit is a hard blocker. Expect this to stay active.

2. **[#8745 — LSP integration (auto-detect + auto-install) for Codex CLI](https://github.com/openai/codex/issues/8745)** — 46 comments, 294 👍  
   The most upvoted issue in the repository. Users want Codex CLI to leverage Language Server Protocol for diagnostics, symbol intelligence, and more accurate code generation. The massive 👍 count signals a core missing feature.

3. **[#20161 — Codex need phone number](https://github.com/openai/codex/issues/20161)** — 36 comments, 32 👍  
   An authentication regression: SSO login on a new device now forces phone number entry even for accounts that never added one. A UX blocker for multi-device workflows.

4. **[#8259 — Format Markdown tables so that they are readable by humans](https://github.com/openai/codex/issues/8259)** — 26 comments, 98 👍  
   Output formatting quality: Codex-generated Markdown tables have misaligned whitespace. A quality-of-life issue that degrades terminal readability in CLI and TUI.

5. **[#19585 — Pro weekly usage limit depletes unusually fast on 5.5](https://github.com/openai/codex/issues/19585)** — 25 comments, 13 👍  
   A billing/usage concern: Pro ($200) tier users report the weekly limit draining faster than expected on GPT-5.5, especially when context compaction is unstable. Likely driving conversations about billing fairness.

6. **[#10090 — `elevated_windows_sandbox` causing all agent commands to fail](https://github.com/openai/codex/issues/10090)** — 16 comments, 6 👍  
   A long-standing Windows sandbox issue where `CreateProcessAsUserW` fails with error 5, blocking all agent output. Still unresolved after months.

7. **[#17827 — Customizable status line](https://github.com/openai/codex/issues/17827)** — 12 comments, 17 👍  
   Users want a TUI status bar showing token usage, model name, rate limits, and git branch — similar to Claude Code. A competitive parity request.

8. **[#20048 — Windows Codex Desktop Browser Use fails to start app-server](https://github.com/openai/codex/issues/20048)** — 9 comments, 3 👍  
   The Browser Use plugin on Windows cannot start the required `app-server` despite npm CLI working. Part of a broader pattern of Windows app-server instability.

9. **[#20741 — Codex Desktop project chat histories disappeared after recent update](https://github.com/openai/codex/issues/20741)** — 6 comments, 0 👍  
   A data-loss bug: after updating to 26.429.30905, project chat histories are gone. Urgent and concerning for users relying on long-lived threads.

10. **[#20552 — Toggle File Tree enabled but does not reliably reveal the file tree](https://github.com/openai/codex/issues/20552)** — 8 comments, 0 👍  
    A UI regression on macOS: the "View > Toggle File Tree" menu action shows as enabled but fails to actually show the file tree. Small but annoying UX break.

## Key PR Progress

1. **[#20824 — Drive TUI service-tier commands from model metadata](https://github.com/openai/codex/pull/20824)** — Open  
   Replaces hardcoded `/fast` etc. with dynamic slash commands derived from model `serviceTiers` metadata. Enables future model-tier flexibility.

2. **[#20822 — Use structured service tiers across core and app-server](https://github.com/openai/codex/pull/20822)** — Open  
   Introduces structured `ModelServiceTier` metadata, shared across config, session state, and protocol ops. Cleaner architecture for tier selection.

3. **[#20252 — feat(tui): render responsive Markdown tables in TUI](https://github.com/openai/codex/pull/20252)** — Open  
   Adds width-responsive Markdown table rendering that reflows on terminal resize. Directly addresses the formatting pain from issue #8259.

4. **[#20514 — [codex-analytics] add item lifecycle timing](https://github.com/openai/codex/pull/20514)** — Open  
   Adds timing envelopes to shared item lifecycle events (started/completed) so analytics pipelines get consistent duration fields.

5. **[#17089 — [codex-analytics] add tool item event schemas](https://github.com/openai/codex/pull/17089)** — Open  
   Establishes typed schemas for tool item events (execution, output, error), decoupling schema definition from emission logic.

6. **[#20838 — Pause goals while in Plan mode](https://github.com/openai/codex/pull/20838)** — Open  
   Fixes #20656: prevents `/goal` from appearing active when Plan mode blocks autonomous continuation. Clean UX fix.

7. **[#20837 — Add hook auto review](https://github.com/openai/codex/pull/20837)** — Open  
   Auto-review mode can now mark hooks as safe or malicious, with persisted trust decisions that eliminate startup manual review prompts.

8. **[#20702 — Support PreToolUse permissionDecision allow/ask](https://github.com/openai/codex/pull/20702)** — Open  
   Extends `PreToolUse` hooks to steer permission boundaries: either waive a prompt or require explicit human confirmation before a tool call.

9. **[#20065 — feat(tui): redesign session picker](https://github.com/openai/codex/pull/20065)** — Open  
   Redesigns the resume/fork picker from a table into responsive session cards with richer search across thread names, IDs, branches, and directories.

10. **[#20819 — feat(tui): add raw scrollback mode](https://github.com/openai/codex/pull/20819)** — Open  
    Solves granular copy problems by adding a raw scrollback mode that preserves line structure and eliminates the "separate lines" copy issue.

## Feature Request Trends

The community is clearly prioritizing three directions:

1. **Agent intelligence & IDE integration** — LSP auto-detection (#8745), `/ide` commands to attach CLI to active sessions (#13834), and better context awareness for code generation.
2. **Context window expansion** — The demand for 1M tokens in GPT-5.5 (#19464) signals that power users are hitting the ceiling of the current 400K limit, especially for large codebase maintenance.
3. **Terminal UI polish** — Custom status lines (#17827), readable Markdown tables (#8259), improved session pickers, and raw scrollback mode all point to a maturing user base demanding professional-grade terminal ergonomics.

## Developer Pain Points

- **Windows desktop instability** dominates — multiple issues (#10090, #20048, #19365, #20661, #19450) report the same root cause: `app-server` fails to start on Windows, breaking Browser Use and other sandbox features. This is a systemic platform gap.
- **Context compaction bugs** — Issues #19585 and #17508 both call out unstable or failing context compaction, which in turn depletes usage limits faster and wastes tokens.
- **Authentication friction** — Phone number forcing (#20161) and unresponsive logout (#18638) are minor but frequent complaints that break multi-device workflows.
- **Data loss after updates** — The chat history disappearance (#20741) is alarming; users expect local state to be safe across app updates.
- **False positive security flags** — Issue #19738 highlights that routine sysadmin work triggers cybersecurity risk flags, escalating to account-level blocks. This undermines trust in the safety review system.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-03

## Today's Highlights

The Gemini CLI team continues aggressive work on agent reliability and Windows support, with a major community PR landing to fix Windows startup hangs, zombie processes, and subagent execution loops. On the platform side, attention is focused on AST-aware tooling investigations, memory routing between global and project contexts, and a critical bug where subagents falsely report success after hitting their maximum turn limit.

## Releases

No releases published in the last 24 hours.

---

## Hot Issues

### 1. [#24353 – Robust Component Level Evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)
*Priority/P1 • Agent • Maintainer Only*
A follow-up EPIC tracking 76 behavioral eval tests across 6 Gemini CLI agent types. The push is toward automated, systematic quality gates for every component. Community attention is zero, but this is foundational for stability.

### 2. [#22745 – AST-Aware File Reads, Search, and Mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
*Area/Agent • Maintainer Only*
Investigates whether AST-aware tools (like tilth or glyph) can improve codebase mapping, reduce token noise from misaligned reads, and lower turn counts. One 👍 signals quiet community interest.

### 3. [#22323 – Subagent Recovery After MAX_TURNS Reported as GOAL Success](https://github.com/google-gemini/gemini-cli/issues/22323)
*Priority/P1 • Agent • Maintainer Only*
Critical behavioral bug: `codebase_investigator` subagent reports `status: "success"` even when it hit max turns before doing any analysis. 2 👍 indicate developers have hit this — it silently hides agent failure.

### 4. [#26393 – Multiple Reliability Issues on Windows and Subagent Execution Loops](https://github.com/google-gemini/gemini-cli/issues/26393)
*Status/Need-Triage*
Filed today. Details: minutes-long startup due to slow WMI scanning, zombie processes on Ctrl+C, and subagents entering infinite loops on rate limits. A community member stepped up and submitted a companion PR (#26392) immediately — strong signal of frustration.

### 5. [#25166 – Shell Command Execution Stuck with "Waiting Input" After Completion](https://github.com/google-gemini/gemini-cli/issues/25166)
*Area/Core • Maintainer Only*
3 👍. Simple shell commands (e.g., `ls`) sometimes leave Gemini stuck in "Awaiting user input" even after the command finishes. Intermittent but disruptive; likely a pipe/buffer issue in the shell execution agent.

### 6. [#24916 – CLI Keeps Asking for Permissions on the Same File](https://github.com/google-gemini/gemini-cli/issues/24916)
*Area/Security • Workstream-Rollup*
Users report that "allow for all future sessions" is ignored, causing repeated permission prompts on the same file. Security friction that undermines the "it just works" promise.

### 7. [#22819 – Implement Memory Routing: Global vs. Project](https://github.com/google-gemini/gemini-cli/issues/22819)
*Area/Agent • Maintainer Only*
Proposes splitting memory stores: global (`~/.gemini/`) for user preferences, project (`.gemini/`) for codebase-specific knowledge. 2 👍. This is a key UX improvement — without it, shared CI contexts pollute personal preferences.

### 8. [#23571 – Model Frequently Creates Temp Scripts in Random Spots](https://github.com/google-gemini/gemini-cli/issues/23571)
*Priority/P2 • Agent • Maintainer Only*
When restricted from shell execution, the model scatters edit scripts across directories, creating messy workspace cleanup. Highlights a need for disciplined temp file management by the agent.

### 9. [#22267 – Browser Agent Ignores settings.json Overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
*Priority/P2 • Agent • Maintainer Only*
Browser Agent reads config correctly during initialization but then hardcodes defaults (e.g., `maxTurns`). Configuration override is broken, which limits enterprise deployments that need strict turn limits.

### 10. [#22672 – Agent Should Stop/Discourage Destructive Behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
*Area/Agent • Maintainer Only*
The model occasionally uses `git reset` or `--force` flags when safer alternatives exist. 1 👍. This is a safety/guardrails concern — agents need better understanding of destructive operations, especially around databases and git.

---

## Key PR Progress

### 1. [#26392 – fix(windows): Resolve Hangs, Zombie Processes, and Improve Subagent Reliability](https://github.com/google-gemini/gemini-cli/pull/26392)
*Opened 2026-05-03*
Community-driven fix for the Windows issues (#26393). Addresses WMI scanning, Ctrl+C cleanup, and subagent loop detection. High urgency — directly impacts Windows Developer experience.

### 2. [#26361 – fix(core): externalize https-proxy-agent to fix proxy support](https://github.com/google-gemini/gemini-cli/pull/26361)
*Priority/P1 • Platform*
Fixes `HttpsProxyAgent is not a constructor` by externalizing the proxy agent from the esbuild bundle. Corporate users behind proxies are currently blocked — this is a high-impact fix.

### 3. [#25684 – fix(config): use flash-lite for utility model configs to preserve quota](https://github.com/google-gemini/gemini-cli/pull/25684)
*Area/Platform*
Switches utility model configs (internal tooling) from flash-preview to flash-lite to conserve rate-limit quota. Fixes 6+ linked issues about 429 errors. Acknowledged as mitigation for the wider quota management problem (#24937).

### 4. [#25947 – feat(tools): versioned pre-write backups with agent-driven restore](https://github.com/google-gemini/gemini-cli/pull/25947)
*Priority/P2 • Core/Agent*
Introduces session-scoped file backups to recover from "destructive modification loops." If the agent botches a `write_file`, users can roll back. Directly addresses the #22672 safety concerns.

### 5. [#26387 – fix(core): implement system ripgrep fallback when bundled binary is missing](https://github.com/google-gemini/gemini-cli/pull/26387)
*Community PR*
Falls back to system-installed `ripgrep` when bundled binaries aren't available. Follows PR #25841 that removed arch-specific binaries from NPM tarballs. Keeps the CLI functional on exotic architectures.

### 6. [#25362 – feat(vertex): add vertexLocation config setting for Vertex AI region override](https://github.com/google-gemini/gemini-cli/pull/25362)
*Area/Core/Platform • Help Wanted*
Adds `vertexLocation` setting to allow users to target `global` endpoint for preview models that aren't yet available in `us-central1`. Currently users get 404 errors with no explanation.

### 7. [#26324 – fix(cli): prevent ghost text wrapping infinite loop](https://github.com/google-gemini/gemini-cli/pull/26324)
*Priority/P2 • Core • Help Wanted*
Fixes a hang when wrapping long ghost-text completions (e.g., `@getskill.sh:3`). Terminal width edge case that could lock the CLI entirely.

### 8. [#26367 – fix(cli): print --version on real stdout before patchStdio](https://github.com/google-gemini/gemini-cli/pull/26367)
*Priority/P0*
Critical release-blocker: `gemini --version` produced no output because yargs' stdout was redirected by `patchStdio`. Broke nightly smoke tests. Filed/fixed same day.

### 9. [#26366 – fix(sea): run forked helper scripts directly instead of spawning a new session](https://github.com/google-gemini/gemini-cli/pull/26366)
*Open*
When running as a single executable (SEA), `child_process.fork()` spawned a second `gemini.exe` session instead of running a helper script. Breaks any transitive dependency that uses `fork()`.

### 10. [#25072 – feat(cli): implement favorite models and model cycling](https://github.com/google-gemini/gemini-cli/pull/25072)
*Priority/P3 • Core • Help Wanted*
Allow users to mark models as favorites and cycle with keyboard shortcuts. Low urgency but addresses a long-standing UX gap (#20227). Community effort.

---

## Feature Request Trends

The dominant feature threads this week center on **agent intelligence and safety**:

- **Memory Routing** – Split memory into global (user preferences) vs. project (codebase context). This is a recurring theme across 3+ issues. Expect it to land soon.
- **AST-Aware Tooling** – Using abstract syntax trees for smarter codebase mapping, file reads, and search. The team is actively investigating tilth and glyph as starting points.
- **Versioned File Backups** – Agent-driven rollback for botched edits. PR #25947 is the flagship implementation, but the underlying need appears in multiple issues.
- **Model Upgrades** – Updating internal utility models from 2.5 flash-lite to 3.1 flash-lite (#23823). The community also wants clearer model versioning in session transcripts (#25633).
- **Browser Agent Resilience** – Ignoring settings overrides (#22267) and failing hard on locked profiles (#22232). Multiple requests for better recovery and configuration handling.

---

## Developer Pain Points

Several high-friction themes emerge from the past week's activity:

- **Windows Reliability** – The biggest pain point. Startup hangs, zombie processes, scrambled SSH output, and subagent infinite loops. A dedicated PR (#26392) is in flight.
- **Subagent Failure Transparency** – Subagents reporting `success` after hitting MAX_TURNS (#22323). This wastes developer time debugging phantom successes. The community is pushing for clearer failure signals.
- **Permission/Configuration Drift** – "Allow for all future sessions" ignored (#24916), Browser Agent ignoring `settings.json` (#22267). Configuration that users set is silently discarded.
- **Rate Limit & Quota Management** – Utility models consuming quota meant for user requests, leading to 429 errors (#25684, #24937). The flash-lite migration is a mitigation, but the underlying quota architecture needs rework.
- **Destructive Agent Behavior** – Unwanted `git reset`, `--force` flags, temp scripts scattered in random directories. Developers want guardrails, not just after-the-fact recovery.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date: 2026-05-03**

## Today's Highlights

Today's digest surfaces a surge in session management issues, including a new proposal for conversation-tree navigation to support forking and branching (#3091). A critical deadlock bug in the `postToolUse` hook (#3084) and a regression in MCP server loading for v1.0.40 (#3083) are actively affecting users. The community is heavily pushing for session branching, fork/redo commands, and better MCP UX.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#3091 — Conversation-tree navigation: keybindings + TUI overview for forked/branched sessions**  
   *Published 2026-05-02, 0 comments*  
   Proposes a tree-view UI and keybindings to navigate parent/child sessions once forking is implemented. Directly depends on #2058 and #1313.  
   [github/copilot-cli Issue #3091](https://github.com/github/copilot-cli/issues/3091)

2. **#3089 — Add a /redo command after /undo or /rewind**  
   *Published 2026-05-02, 0 comments*  
   Users who accidentally undo too many steps have no way to redo. Suggests `/redo` to complement the existing `/undo` and `/rewind`.  
   [github/copilot-cli Issue #3089](https://github.com/github/copilot-cli/issues/3089)

3. **#3084 — postToolUse hook deadlocks after write-permission request, process spins at 99% CPU and ignores SIGTERM**  
   *Published 2026-05-02, 0 comments*  
   A resumed session deadlocked for 10 days after a `PermissionService` write request, burning 99% CPU and unresponsive to SIGTERM. Critical stability concern.  
   [github/copilot-cli Issue #3084](https://github.com/github/copilot-cli/issues/3084)

4. **#3083 — v1.0.40 no longer loads mcp servers from ./.mcp.json on start up**  
   *Published 2026-05-02, 0 comments*  
   Regression: users migrated from the deprecated `.vscode/mcp.json` to `.mcp.json`, but v1.0.40 ignores it entirely.  
   [github/copilot-cli Issue #3083](https://github.com/github/copilot-cli/issues/3083)

5. **#3082 — Copilot locks files after handling a prompt**  
   *Published 2026-05-02, 1 comment*  
   Files remain locked after a prompt, causing subsequent prompts to fail with "Access denied." Forces users to exit and restart sessions.  
   [github/copilot-cli Issue #3082](https://github.com/github/copilot-cli/issues/3082)

6. **#3086 — 'Go back' from 'session in use' warning leaves a phantom lock on the abandoned session's folder**  
   *Published 2026-05-02, 0 comments*  
   Choosing "Go back" when a session lock is detected leaves an orphan `.lock` file, preventing future use of that session.  
   [github/copilot-cli Issue #3086](https://github.com/github/copilot-cli/issues/3086)

7. **#3085 — 'Session in use' warning shows misleading 'last active' timestamp**  
   *Published 2026-05-02, 0 comments*  
   The "last active" duration uses lock file mtime instead of actual session activity, causing confusing messages like "last active 2 seconds ago" for stale sessions.  
   [github/copilot-cli Issue #3085](https://github.com/github/copilot-cli/issues/3085)

8. **#3088 — `copilot plugin marketplace list` does not respect repository-level overrides**  
   *Published 2026-05-02, 0 comments*  
   The CLI subcommand ignores `extraKnownMarketplaces` from `.github/copilot/settings.json`, while the interactive session command respects it — inconsistency bug.  
   [github/copilot-cli Issue #3088](https://github.com/github/copilot-cli/issues/3088)

9. **#2995 — Can't use DeepSeek API**  
   *Published 2026-04-27, 3 comments, 👍 5*  
   Configuring the CLI to use DeepSeek via env vars fails silently. Users have tried varying the provider type and model name without success.  
   [github/copilot-cli Issue #2995](https://github.com/github/copilot-cli/issues/2995)

10. **#3090 — Improve MCP enable/disable UX in /mcp and /mcp show**  
    *Closed 2026-05-02, 1 comment*  
    Request to add enable/disable directly in the interactive `/mcp` and `/mcp show` menus instead of requiring typed commands.  
    [github/copilot-cli Issue #3090](https://github.com/github/copilot-cli/issues/3090)

## Key PR Progress

No pull requests were opened or updated in the last 24 hours.

## Feature Request Trends

- **Session Branching/Forking:** Multiple issues (#1313, #2058, #3091) ask for a way to branch the current session into independent forks, allowing side questions without derailing the main objective. This is the most upvoted feature direction.
- **Redo/Undo Workflow:** Following the addition of `/undo` and `/rewind`, the community now expects a complementary `/redo` command (#3089) to recover from over-undoing.
- **Conversation-tree Navigation:** A natural extension of branching: a TUI that visualizes the session tree and supports jumping between forks (#3091).
- **Improved MCP Management:** Users want enable/disable actions directly in the interactive menus (#3090, #2956) rather than memorizing slash commands.

## Developer Pain Points

- **Session Lifecycle Bugs:** Lock files persisting after abandonment (#3086), misleading timestamps (#3085), and indefinite process hangs (#2364, #3084) are eroding trust in session management.
- **File Locking:** Files remain locked after prompts, forcing hard restarts (#3082). This breaks automated workflows.
- **Windows Compatibility:** PowerShell 5.1 users are entirely blocked because `pwsh.exe` is hardcoded in six places (#1680). Despite a previous issue being closed "not_planned," the bug persists and is worsening.
- **Configuration Regressions:** v1.0.40 broke `.mcp.json` loading (#3083), and repository-level marketplace overrides are ignored by the CLI subcommand (#3088) — inconsistency between interactive and non-interactive modes.
- **DeepSeek / Third-party Models:** Users are struggling to configure non-GitHub-hosted models like DeepSeek (#2995), often hitting silent failures or provider compatibility issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date**: 2026-05-03

## Today's Highlights
Community activity remains strong with 9 new issues and 3 PRs today. A critical **Windows crash bug** in v1.41.0 (Issue #2151) demands immediate attention, while a long-standing **nested skill directory compatibility gap** with Codex (Issue #1894) finally has an open PR for resolution. Multiple feature requests surface a clear demand for better **MCP resource management** and a **Claude Code-style statusline** for runtime visibility.

## Releases
No new releases in the last 24 hours. Latest stable version remains **v1.41.0**, though it carries a known Windows `NoneType` crash bug (see Hot Issues).

## Hot Issues

1. **[#2151] Bug: v1.41.0 Windows terminal: `NoneType` crash on path completion + broken image attachment**
   *Author: weiq0482-dev* | ⭐ Urgent, newly filed today. Users on Windows 10 hit a crash during tab-completion, and image attachments fail entirely. No comments yet—expect hotfix demand. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2151)

2. **[#2150] UX: API usage display confusing—two quota systems, inverted semantics**
   *Author: fishtvlvoe* | Highlights deep confusion between subscription and API-key quotas in `/usage`. Migrants from Claude Code are particularly affected by unclear semantics and poor discoverability. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2150)

3. **[#2149] Feature: Configurable statusline with usage/cost metadata (Claude Code-style)**
   *Author: fishtvlvoe* | Requests a custom status bar with per-interaction model, cost, and token telemetry. Gaining traction as power users want real-time budget tracking without manual `/usage` calls. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2149)

4. **[#2148] Bug: UserPromptSubmit hook receives empty prompt when `user_input` is list[ContentPart]**
   *Author: barrelc* | Critical for hook developers—the hook loses the user's full input when content includes multiple parts (e.g., text + image), breaking automation workflows. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2148)

5. **[#2147] Feature: Lazy-load MCP tool schemas—only inject when tools are needed**
   *Author: Evan-Kim2028* | Identifies a major token waste: all MCP tool schemas load into context at session start. For multi-server setups, this consumes thousands of tokens before any work begins. Lazy injection would dramatically improve context efficiency. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2147)

6. **[#2145] Enhancement: Hooks for agent file permissions**
   *Author: divakaran5005* | Proposes agent-level directory permission hooks (Read/Write/Edit) to restrict file access per agent. Reflects enterprise security concerns in multi-agent projects. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2145)

7. **[#2091] Bug: Session extremely slow in v1.37.0 after extensive MATLAB work**
   *Author: proccl* | A specific session degrades to seconds-per-token after heavy MATLAB interaction, while other sessions remain fast. No resolution yet—likely a session state corruption issue. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2091)

8. **[#2040] Enhancement: VS Code notification when approval is required**
   *Author: taitoojp* | When VS Code is minimized, approval dialogs inside the Kimi webview are invisible. Requests `showInformationMessage` to surface approvals natively—a UX pain point for extension users. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2040)

9. **[#1894] Enhancement: Recursive loading of nested skill directories**
   *Author: retamia* | Codex supports `./agents/skills/{name}/skills/xxx` but Kimi does not. Blocking cross-tool compatibility for multi-skill repositories. PR #2146 now addresses this. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1894)

10. **[#768] PR: Add pseudo-cwd for shell mode** (closed)
    *Author: JessyTsui* | Merged post-hoc; tracked via issue for reference. Makes `cd` in shell mode update a tracked directory without affecting the agent's workdir—improving shell UX consistency. [View PR](https://github.com/MoonshotAI/kimi-cli/pull/768)

## Key PR Progress

1. **[#2146] feat: Recursively discover skills in nested subdirectories** [OPEN]
   *Author: netwmr01* | Direct fix for Issue #1894. Adds `_discover_subdir_skills()` helper to scan deep directory structures. Critical for Codex migration parity. [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2146)

2. **[#768] feat(shell): add pseudo-cwd for shell mode** [CLOSED]
   *Author: JessyTsui* | Implements tracked current directory in shell mode. Keeps agent workdir unchanged while making `cd` feel natural. Resolves #766. [View PR](https://github.com/MoonshotAI/kimi-cli/pull/768)

3. **[#767] feat(approval): persist approve_for_session per session** [CLOSED]
   *Author: JessyTsui* | Saves auto-approve state in session-scoped `approval_state.json`, restoring it on session resume. Fixes #765 for persistent approval workflows. [View PR](https://github.com/MoonshotAI/kimi-cli/pull/767)

## Feature Request Trends
- **MCP Optimization**: Strong demand to lazy-load tool schemas (Issue #2147) to conserve context tokens—a key differentiator for users with many MCP servers.
- **Enterprise-Grade Permissions**: Multi-agent project security via file access hooks (Issue #2145) and per-agent directory restrictions.
- **Real-Time Visibility**: Repeated calls (Issues #2149, #2150) for a configurable statusline with live cost/token data, mirroring Claude Code's UX pattern.
- **Deep Skill Discovery**: Recursive skill loading (Issue #1894) for compatibility with established Codex project structures.
- **Native OS Notifications**: VS Code alerts for pending approvals (Issue #2040) when the IDE is backgrounded.

## Developer Pain Points
- **Windows Stability**: v1.41.0 introduces a blocker crash on path completion (Issue #2151), eroding trust in the latest release for Windows users.
- **Session Performance Degradation**: Unexplained slowdowns in specific sessions (Issue #2091) point to potential memory/state leaks under heavy language-specific workloads (MATLAB).
- **Quota Confusion**: Dual quota systems with inverted semantics (Issue #2150) frustrate new adopters, especially those migrating from simpler CLI tools.
- **Hook Reliability**: The `UserPromptSubmit` hook silently truncating multi-part inputs (Issue #2148) breaks critical extension pipelines and automation scripts.
- **Token Waste**: Eager MCP schema injection (Issue #2147) reduces effective context budget, worsening costs and limiting complex multi-tool sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-03

## Today's Highlights

Two patch releases (v1.14.32 and v1.14.33) shipped today fixing critical shell mode editing, HTTP API workspace adapters, and custom agent loading issues. Meanwhile, the community is buzzing around an ambitious refactoring wave led by core contributor @kitlangton, who submitted eight PRs today targeting the transition from the legacy Hono backend to a native Effect-based server stack. The all-time most-commented issue — Claude Max being broken (#7410) — finally closed after 393 comments and months of discussion.

## Releases

- **[v1.14.33](https://github.com/anomalyco/opencode/releases/tag/v1.14.33)** — Fixes custom agents in plugins not loading. Includes community fixes from @jerome-benoit (nix packaging cleanup), @OpeOginni (CLI documentation), and @HyeokjaeLee (instance fix).
- **[v1.14.32](https://github.com/anomalyco/opencode/releases/tag/v1.14.32)** — Shell mode prompt is now editable again (backspace, cursor movement work). Fixes HTTP API workspace adapters losing instance context, which could break workspace create/sync/routing. Also fixes experimental workspace creation when omitting required fields.

## Hot Issues

1. **[#7410 [CLOSED] Broken Claude Max](https://github.com/anomalyco/opencode/issues/7410)** — 393 comments, 357 👍. **Finally closed** after four months. The highest-engagement issue in OpenCode history, this blocked all Claude Max users. The closure signals the underlying provider integration issue is resolved.

2. **[#2072 Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)** — 66 comments, 161 👍. Still open since August 2025. Users want native support for Cursor's CLI API. High demand, but the API remains undocumented — a persistent ask.

3. **[#22683 [bug, opentui, perf] 1.4.6 constantly crashing](https://github.com/anomalyco/opencode/issues/22683)** — 17 comments. Users report the TUI crashes aggressively after the 1.4.6 update. Memory leak errors replaced by hard crashes. No fix yet; high priority for stability.

4. **[#25515 Opencode ignoring deny permissions?](https://github.com/anomalyco/opencode/issues/25515)** — New today, 4 comments. A user's "Plan-Expensive" agent wrote a file during planning despite the mode's supposed deny-permissions. Could be a serious security/permissions model bug.

5. **[#25526 Can't connect to local server (China region)](https://github.com/anomalyco/opencode/issues/25526)** — New today, 4 comments. User reports the app worked on May 2 but stuck on "unable to connect to local server" on May 3. Possible network or regional outage affecting Asian users.

6. **[#10238 [FEATURE] Safer default for build agent: prompt on destructive bash commands](https://github.com/anomalyco/opencode/issues/10238)** — Closed, 9 comments. Feature request asking for confirmation prompts on destructive shell commands. Widely supported — suggests community values safety guards.

7. **[#18793 [FEATURE] chat.model plugin hook for pre-call model routing](https://github.com/anomalyco/opencode/issues/18793)** — 6 comments, 6 👍. Users want a plugin hook to intercept and swap provider/model before LLM calls. Clear demand for more extensible model routing.

8. **[#6286 [bug] Compaction Failing to Run on Time](https://github.com/anomalyco/opencode/issues/6286)** — 15 comments. Context compaction not triggering correctly, causing ballooning context windows. Performance issue affecting long sessions.

9. **[#24559 Context window percentage shows 0% with 9Router](https://github.com/anomalyco/opencode/issues/24559)** — 6 comments. Using 9Router as a provider breaks the context usage indicator. Small but annoying UX gap for router users.

10. **[#25536 [FEATURE] Sort top-level docs sidebar entries by visual width](https://github.com/anomalyco/opencode/issues/25536)** — New today. Cosmetic documentation fix, but includes a fun note: "must be corrected before the real CEO comes back from India." Community has some personality.

## Key PR Progress

1. **[#25548 Fix: Windows support for Zed database path resolution](https://github.com/anomalyco/opencode/pull/25548)** — Fixes Zed DB detection on Windows (%LOCALAPPDATA%). Unblocks Windows users relying on Zed integration.

2. **[#25538 Sort docs sidebar entries by visual width](https://github.com/anomalyco/opencode/pull/25538)** — Docs cleanup PR, closes #25536. Cosmetic but needed.

3. **[#25547 Native HttpApi listener with Bun.serve + WS upgrade](https://github.com/anomalyco/opencode/pull/25547)** — Proof-of-concept removing Hono middleware for a direct Bun.serve implementation. Prepares for Hono deletion.

4. **[#25546 Fix Instance.current ALS bridge regression from #25522](https://github.com/anomalyco/opencode/pull/25546)** — Fixes a breakage where Effect promise wrappers lost InstanceRef context. Critical correctness fix for the ongoing Effect-native migration.

5. **[#24712 Add native LLM core foundation](https://github.com/anomalyco/opencode/pull/24712)** — New `packages/llm` with Effect-based typed request/event schemas, provider adapters, and tool runtime. Gated behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE`. Major architectural investment.

6. **[#25544 Sketch: typed SessionNotFound design validation](https://github.com/anomalyco/opencode/pull/25544)** — Design sketch (not for merge) proposing typed error handling at service boundaries to replace `mapNotFound` wrappers. Important for error consistency.

7. **[#25540 feat(tui): add logo.animate and logo.sound config options](https://github.com/anomalyco/opencode/pull/25540)** — Community feature adding TUI configuration for animated logo and sound effects. Closes #22528.

8. **[#25534 fix: respect retryCount in json_schema structured output](https://github.com/anomalyco/opencode/pull/25534)** — Fixes `format.json_schema.retryCount` being defined but never read. Structured output would always use default retries. Closes #25430.

9. **[#25529 fix: auth login regression — stderr ignored instead of inherited](https://github.com/anomalyco/opencode/pull/25529)** — Fixes a regression where cloudflared login URLs were hidden because stderr was silently ignored. Restores inherited stderr behavior.

10. **[#25539 Refactor(cli/github+run): Stage 4 — drop AppRuntime.runPromise bridges](https://github.com/anomalyco/opencode/pull/25539)** — Continues the Effect-native cleanup arc. Drops remaining `runPromise` bridges in github.ts and run.ts. Part of a multi-PR effort to flatten and modernize the CLI command layer.

## Feature Request Trends

- **Plugin system expansion**: Multiple requests for deeper plugin hooks — model routing (`chat.model`), pre-call interception, and custom agent behavior. The community wants OpenCode to be a composable platform.
- **Provider flexibility**: Persistent demand for Cursor CLI, PPQ.ai, and other third-party provider support. Users want to bring their own backend without friction.
- **Safety and permissions**: Requests for destructive command confirmation prompts, deny-list enforcement fixes, and safer defaults for build agents. Trust-but-verify is a recurring theme.
- **Cross-tool compatibility**: Feature requests for importing settings/agents/MCP servers from other tools (Cursor, Claude Code). Users are multi-tool and want portability.
- **TUI polish**: Logo animation, sound effects, textbox performance, sidebar sorting — the community cares about the terminal experience as a first-class UI.

## Developer Pain Points

- **Stability regressions**: The 1.4.6 crashing issue (#22683) and the sudden "can't connect to local server" for Chinese users (#25526) highlight ongoing reliability concerns.
- **Permissions model confusion**: #25515 shows that deny-permissions may not actually prevent writing — a potentially serious trust issue for users who configure restrictive agent modes.
- **Context window management**: Compaction failing (#6286), zero usage percentage with routers (#24559), and session persistence loss (#12310) all point to weak feedback about LLM context state.
- **Cross-platform gaps**: Windows issues continue — IntelliJ terminal rendering (#10629), Zed DB path resolution (#25548 PR), and the overall Web/Desktop UX on non-macOS platforms.
- **Migration churn**: The Effect-native refactoring (8+ PRs today) introduces temporary breakages — like the Instance.current ALS regression (#25546) and `runPromise` bridge removals. Short-term pain for long-term architecture gains.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-03

## Today's Highlights
A packed 24 hours: the team cut **v0.72.1** while resolving over a dozen keyboard-layout and internationalization bugs. Several provider integrations landed or were refined — Xiaomi MiMo now supports both API billing and regional token plans, and a PR for NVIDIA NIM as a first-class provider was proposed. The TypeBox v1 migration reached completion, marking a significant internal dependency upgrade.

## Releases
- **[v0.72.1](https://github.com/badlogic/pi-mono/releases/tag/v0.72.1)** — Patch release (no detailed changelog in the data).

## Hot Issues
*Top 10 noteworthy issues by community engagement or impact.*

1. **[#3259 — Shift+Enter regression in Zellij](https://github.com/badlogic/pi-mono/issues/3259)** — `Shift+Enter` stopped inserting newlines inside Zellij after an upgrade. The investigation points to terminal passthrough handling. 16 comments, 1 👍. **Why it matters:** Core editing shortcut broken for a popular terminal multiplexer.

2. **[#4026 — Codex verbosity=“low” regresses tool-calling](https://github.com/badlogic/pi-mono/issues/4026)** — Switching the default `text.verbosity` from `medium` to `low` causes Codex models to emit commentary instead of tool calls, ending turns prematurely. 8 comments. **Why it matters:** Directly impacts reliability for the primary coding-agent flow.

3. **[#1436 — Auto-detect light/dark mode](https://github.com/badlogic/pi-mono/issues/1436)** — Request for Pi to switch color themes when the system changes, without restart. 7 comments, 2 👍. **Why it matters:** High-request UX quality-of-life improvement; has lingered since February.

4. **[#4046 — Compaction deletes everything](https://github.com/badlogic/pi-mono/issues/4046)** — A compaction run appears to wipe all data. The reporter was unable to provide full logs before the issue was closed for the weekend. 7 comments. **Why it matters:** Data-loss severity, though currently unresolved due to process.

5. **[#4082 — Xiaomi MiMo Token Plan (China) fails](https://github.com/badlogic/pi-mono/issues/4082)** — The Chinese URL for Xiaomi's token plan returns `401 Invalid API Key`. The community identified the endpoint mismatch in 6 comments. **Why it matters:** Blocks Chinese-market users who pre-pay for tokens.

6. **[#3780 — Italian keyboard duplicate characters with Kitty protocol](https://github.com/badlogic/pi-mono/issues/3780)** — Kitty Keyboard Protocol flag 4 causes doubled characters for Italian layout. 5 comments. **Why it matters:** International keyboard regression affecting a non-trivial user base.

7. **[#4086 — Can't install pi on machine](https://github.com/badlogic/pi-mono/issues/4086)** — Install commands fail with missing internal pieces. 5 comments, 1 👍. **Why it matters:** First-impression blocker for new users; recurring frustration.

8. **[#4104 — Override file ops at foundational level](https://github.com/badlogic/pi-mono/issues/4104)** — Extensions need a function table for filesystem operations so all extensions can share overrides. 3 comments, 3 👍. **Why it matters:** Architecture request that would unlock “remote-first” extensions.

9. **[#4109 — Ukrainian Cyrillic Ctrl-key combinations](https://github.com/badlogic/pi-mono/issues/4109)** — Ctrl+C/V/W don't register on Ukrainian layout. 3 comments. **Why it matters:** Another layout-specific input bug; part of a pattern this week.

10. **[#4102 — `pi update` breaks mise tool versioning](https://github.com/badlogic/pi-mono/issues/4102)** — Running `pi update` overwrites the versioned install directory managed by mise, breaking version tracking. 1 comment, 1 👍. **Why it matters:** Tool-manager integration regression.

## Key PR Progress
*Top 10 PRs merged or opened in the last 24 hours.*

1. **[#4119 — Stabilize env-sensitive tests](https://github.com/badlogic/pi-mono/pull/4119)** (OPEN) — Forces `transport: "sse"` in Codex tests, clears SSH/MOSH env vars, and isolates `HOME` for package-manager tests. **Why it matters:** Reduces CI flakiness.

2. **[#4117 — Add stopAfterTurn handoff control](https://github.com/badlogic/pi-mono/pull/4117)** (CLOSED) — Adds `agent.stopAfterTurn()` for graceful turn-boundary stops, exposed as `session.stopAfterTurn()` in the coding-agent SDK. **Why it matters:** Enables extensions to interrupt runs without mid-turn corruption.

3. **[#3474 — Migrate to TypeBox v1](https://github.com/badlogic/pi-mono/pull/3474)** (CLOSED) — Replaces AJV-based validation with TypeBox 1.x, preserving legacy extension imports and coercion. **Why it matters:** Major internal dependency upgrade that touches all schema validation.

4. **[#4110 — Fix Qwen3.5/3.6 and MiniMax M2.7 model definitions](https://github.com/badlogic/pi-mono/pull/4110)** (CLOSED) — Corrects API type and endpoint for three models served through OpenCode Go. **Why it matters:** Unblocks these models for users who hit 404 errors.

5. **[#4005 — Add Xiaomi MiMo provider](https://github.com/badlogic/pi-mono/pull/4005)** (CLOSED) — Adds Xiaomi as a built-in provider using the OpenAI-compatible interface. **Why it matters:** Brings Chinese cloud provider into the ecosystem.

6. **[#4112 — Split Xiaomi into API billing + per-region token plans](https://github.com/badlogic/pi-mono/pull/4112)** (OPEN) — Follow-up that separates API billing (default) from regional token-plan endpoints. **Why it matters:** Resolves #4082 and follows provider precedent (MiniMax/Moonshot).

7. **[#4090 — Honor transport field in buildBaseOptions](https://github.com/badlogic/pi-mono/pull/4090)** (CLOSED) — Fixes the `openai-codex` provider ignoring the user-specified `transport` option. **Why it matters:** Bug fix for WebSocket/SSE selection.

8. **[#4094 — OpenAI image generation in TUI](https://github.com/badlogic/pi-mono/pull/4094)** (CLOSED) — Wires `image_generation` tool for OpenAI Responses/Codex and renders results in the interactive TUI. **Why it matters:** Feature parity with Codex; enables image-generation use cases from the terminal.

9. **[#3624 — Add Together AI provider](https://github.com/badlogic/pi-mono/pull/3624)** (OPEN) — Native Together AI support with `TOGETHER_API_KEY` detection and model sourcing. **Why it matters:** Popular inference provider for open models; broad community interest.

10. **[#4116 — Add NVIDIA NIM provider](https://github.com/badlogic/pi-mono/pull/4116)** (CLOSED) — Adds NVIDIA NIM as a built-in provider with 50+ free model endpoints. **Why it matters:** Zero-cost barrier for evaluating Pi with strong coding models.

## Feature Request Trends
- **International keyboard support** is the dominant theme: Italian duplicates (#3780), Ukrainian Cyrillic (#4109), Hangul/Kana layouts (#4099), BÉPO AltGr issues (#4067). Users want input normalization hooks.
- **Provider expansion** continues: Xiaomi MiMo (China), NVIDIA NIM, Together AI, Nebius Token Factory. The community is actively contributing provider code.
- **Extension architecture** requests are growing: deep filesystem overrides (#4104), path text replacement (#4100), and graceful stop controls (#4118).
- **System theme integration** (#1436) and **`/goal` command exposure** (#4120) show demand for parity with Codex features.

## Developer Pain Points
1. **Non-Latin keyboard layouts break Ctrl shortcuts** — Recurring this week across Cyrillic, Hangul, Italian, and French-BÉPO layouts. Input normalization is an open architectural gap.
2. **Installation failures** (#4086) and **broken update flows** (#4102 with mise) create onboarding friction that wastes developer time with each release.
3. **Closed-because-weekend pattern** — Multiple bugs were labeled `closed-because-weekend` without resolution (#4046, #4082, #4086). While process-driven, this frustrates users who cannot use critical features.
4. **Provider configuration brittleness** — Model definitions drift from upstream APIs (Qwen, MiniMax, Kimi K2.5), and transport options silently ignored (#4083). Each requires community investigation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-05-03

---

## Today's Highlights

The v0.15.6 nightly ships a major performance optimization—session-scoped file read caching that short-circuits unchanged reads—alongside a critical proxy configuration fix. The background task management project reaches Phase C closure as monitors are wired into the combined tasks dialog, while a new `classifyError()` mechanism promises to eliminate noisy retries on deterministic API errors like 400 and 401.

---

## Releases

**v0.15.6-nightly.20260503.5037fa762**
- **File Read Cache (#3717):** Introduces `FileReadCache` that caches file reads within a session, enabling the system to skip re-reading files whose content hasn't changed. This is a prerequisite for enforcing prior-read-before-write safety checks.
- **Proxy Fix (#3767):** The CLI now correctly honors HTTP proxy settings in all networking paths, resolving connectivity issues for users behind corporate proxies.

[View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260503.5037fa762)

---

## Hot Issues

### 1. **Background Task Management Roadmap (#3634)**
*Status: Open | Author: wenshao | Updated: 2026-05-03*
The core design document for background tasks (agents, shells, monitors). Phase A (basic foundation) and Phase B (shell integration) are merged; Phase C (monitor UI wiring) is now landing. This is the authoritative reference for anyone contributing to task orchestration.

[Issue #3634](https://github.com/QwenLM/qwen-code/issues/3634)

### 2. **Non-interactive Mode Triple-Prints API Errors (#3748)**
*Status: Closed | Author: umut-polat | Updated: 2026-05-03*
When using `-p` mode against OpenAI-compatible endpoints, 4xx errors printed three times on stderr, with the second line double-wrapped. Fixed in PR #3749—a clean single line with non-zero exit code.

[Issue #3748](https://github.com/QwenLM/qwen-code/issues/3748)

### 3. **Cannot Read Files Under Remote Desktop (Windows) (#3789)**
*Status: Open | Author: mywand | Updated: 2026-05-02*
Users on Windows running via Sunflower Remote Desktop report the tool cannot read any files. This appears to be a file-system sandboxing or path permission issue specific to remote desktop sessions. Community is awaiting triage.

[Issue #3789](https://github.com/QwenLM/qwen-code/issues/3789)

### 4. **DeepSeek v4 Pro: `reasoning_content` Must Be Passed Back (#3772)**
*Status: Open | Author: coco515alt | Updated: 2026-05-02*
Multi-turn conversations with DeepSeek v4 Pro fail with `400 reasoning_content in the thinking mode must be passed back`, even when using correct settings. User's config shows a custom provider `mimo-v2.5-pro`. Indicates a protocol-compatibility gap in thinking-mode state management.

[Issue #3772](https://github.com/QwenLM/qwen-code/issues/3772)

### 5. **`/model` Switch to Local LM Studio Fails with "Model is Unloaded" (#3802)**
*Status: Open | Author: T-Phuong-Nguyen | Updated: 2026-05-03*
Switching to a local LM Studio model via `/model` command triggers a pre-flight check that blocks JIT loading, despite LM Studio confirming the model loads on demand via direct API calls. Windows 11, Qwen3.6 models. The pre-flight logic needs to tolerate LM Studio's lazy-loading behavior.

[Issue #3802](https://github.com/QwenLM/qwen-code/issues/3802)

### 6. **ACP Mode: Thinking Process Language Mismatch (#3787)**
*Status: Open | Author: sunyitao | Updated: 2026-05-02*
In ACP (Agent-Client Protocol) mode, the thinking process always outputs in English regardless of the user's target language. Response text respects the target language, but reasoning remains English-only. Users need `reasoning_language` or similar per-request parameter support.

[Issue #3787](https://github.com/QwenLM/qwen-code/issues/3787)

### 7. **SDK Python: Verbatim Release Notes Inheritance (#3796)**
*Status: Open | Author: doudouOUC | Updated: 2026-05-02*
The Python SDK release workflow copies the previous release's body verbatim, creating a growing linear chain of release notes. Any content planted in one release persists forever. Proposed fix: generate notes from git-log instead.

[Issue #3796](https://github.com/QwenLM/qwen-code/issues/3796)

### 8. **Shared Release Helper Duplication (#3795)**
*Status: Open | Author: doudouOUC | Updated: 2026-05-02*
The `isExpectedMissingGitHubRelease` function exists identically in three files (Python SDK, TypeScript SDK, and root scripts). Any `gh` error handling change requires triple edits. Proposal to extract into shared utilities.

[Issue #3795](https://github.com/QwenLM/qwen-code/issues/3795)

### 9. **SDK Python: Missing Network Timeouts (#3794)**
*Status: Open | Author: doudouOUC | Updated: 2026-05-02*
`get-release-version.js` calls `fetch()` to PyPI and `execSync('gh release view ...')` without any timeouts. A dead connection hangs the entire CI workflow until GitHub Actions' 360-minute job timeout. Obvious reliability gap.

[Issue #3794](https://github.com/QwenLM/qwen-code/issues/3794)

### 10. **Tag Prefix Inconsistency Across SDKs (#3793)**
*Status: Open | Author: doudouOUC | Updated: 2026-05-02*
Python SDK uses `TAG_PREFIX = 'sdk-python-'` (no `v`), TypeScript uses `'sdk-typescript-v'` (with `v`). Callers in Python manually inject `v`; TypeScript concatenates prefixes. Standardization needed to prevent tag-generation bugs.

[Issue #3793](https://github.com/QwenLM/qwen-code/issues/3793)

---

## Key PR Progress

### 1. **Enforce Prior Read Before File Mutation (#3774)**
*Status: Open | Author: wenshao | PR #3774*
Building on the new `FileReadCache` (#3717), this enforces that the model must have read a file in the current conversation before being allowed to edit or write to it. This prevents accidental overwrites when the model's context is stale. **Security + data-integrity win.**

[PR #3774](https://github.com/QwenLM/qwen-code/pull/3774)

### 2. **Wire Monitors into `/tasks` Dialog (#3801)**
*Status: Open | Author: wenshao | PR #3801*
Phase B closure for Issue #3634. Fixes a regression where monitors silently disappeared from the combined tasks dialog. Also adds interactive-mode hints so users know they can click to interact. **Major UX improvement for background task management.**

[PR #3801](https://github.com/QwenLM/qwen-code/pull/3801)

### 3. **`/model list` Subcommand for Dynamic Discovery (#3797)**
*Status: Open | Author: B-A-M-N | PR #3797*
Queries the configured OpenAI-compatible `/models` endpoint and prints available model IDs in a scriptable format. Handles trailing-slash normalization and API key injection. **Enables headless model exploration.**

[PR #3797](https://github.com/QwenLM/qwen-code/pull/3797)

### 4. **Retryable Error Classification (#3798)**
*Status: Open | Author: B-A-M-N | PR #3798*
Introduces `classifyError()`: deterministic errors (400, 401, 403, 404, 422) are never retried; transport failures (429, 408, 409, 500-599, network errors) are retried. This eliminates wasteful retries on bad requests. **Significant reliability improvement.**

[PR #3798](https://github.com/QwenLM/qwen-code/pull/3798)

### 5. **Subagent Context Auto-Compaction (#3735)**
*Status: Open | Author: tanzhenxin | PR #3735*
Subagent chats now auto-compact at the configured threshold, mirroring main-agent behavior. Fixes `max_tokens` errors on long multi-turn subagent runs with smaller-context models (e.g., Explore subagent). **Prevents context overflow crashes.**

[PR #3735](https://github.com/QwenLM/qwen-code/pull/3735)

### 6. **DeepSeek `reasoning_effort: max` Support (#3800)**
*Status: Open | Author: wenshao | PR #3800*
Plumbs DeepSeek's new `max` reasoning tier end-to-end. Users can opt in via `reasoning.effort: 'max'` in settings. **Enables strongest reasoning mode for DeepSeek users.**

[PR #3800](https://github.com/QwenLM/qwen-code/pull/3800)

### 7. **Batch Session Deletion in `/delete` (#3733)**
*Status: Open | Author: qqqys | PR #3733*
`/delete` now supports multi-select: space toggles checkboxes, Enter commits deletion. Active session is disabled with a "cannot delete" note. Unchecked rows fall back to original single-delete UX. **Polished session management UX.**

[PR #3733](https://github.com/QwenLM/qwen-code/pull/3733)

### 8. **Normalize Model List Parsing (#3799)**
*Status: Open | Author: B-A-M-N | PR #3799*
`fetchModels()` now handles three response shapes: standard `data` array, object-wrapped `data` with `owned_by`, and bare array formats. Ensures `/model list` works across providers. **Improved provider compatibility.**

[PR #3799](https://github.com/QwenLM/qwen-code/pull/3799)

### 9. **Rate-Limit Retry Diagnostics (#3790)**
*Status: Open | Author: yiliang114 | PR #3790*
Adds structured rate-limit diagnostics for stream-side retry failures: transport type, HTTP status, provider error code/message, request ID, retry decision, attempt count, and delay. Also changes SSE-side retry from fixed 60s to a calculated delay. **Debuggability improvement.**

[PR #3790](https://github.com/QwenLM/qwen-code/pull/3790)

### 10. **Per-Agent ContentGenerator via AsyncLocalStorage (#3707)**
*Status: Open | Author: tanzhenxin | PR #3707*
Sub-agents using a different model than the parent now consistently use their own `ContentGenerator` config—including modality tables for image/PDF inlining—across both sync tool paths and user-approval continuations. **Fixes modality inconsistencies in multi-model setups.**

[PR #3707](https://github.com/QwenLM/qwen-code/pull/3707)

---

## Feature Request Trends

1. **Background Task Ecosystem (Phase B→C):** Completion of the background task roadmap—agents, shells, and now monitors—is the dominant theme. Users want full visibility and control over all running tasks via `/tasks`, plus proper lifecycle management.

2. **Multi-Session & Session Management:** Batch deletion (#3733), runtime.json sidecars for external tooling (#3714), and export format improvements (#3701) all point to users managing more concurrent sessions and wanting better tooling interoperability.

3. **Model Switching & Discovery:** PRs for `/model list` (#3797) and non-interactive model switching (#3783) indicate growing demand for dynamic, scriptable model management—especially for users who toggle between local (LM Studio) and cloud models.

4. **Provider Protocol Compatibility:** Multiple issues target specific provider quirks: MiniMax thinking tags (#3677), DeepSeek reasoning effort (#3800 / #3772 / #3786), and general OpenAI-compatible response normalization (#3799). The trend is toward "write once, run on any provider."

5. **SDK Release Infrastructure Reliability:** Issues #3796, #3795, #3794, #3793 (all from one contributor) reveal a concerted effort to harden the release automation—network timeouts, tag conventions, deduplication, and clean release notes. Shows maturing engineering practices beyond core feature work.

---

## Developer Pain Points

1. **Local Model Integration (LM Studio):** Issue #3802 highlights a recurring friction: pre-flight checks block JIT loading of local models. Users with capable local setups cannot switch models without manual workarounds. The pre-flight logic needs to become async or accept a "lazy load" mode.

2. **Thinking/Reasoning Protocol Gaps:** Issues #3772 (DeepSeek v4 Pro) and #3787 (ACP language mismatch) expose a cluster of problems around reasoning content lifecycle. The model expects `reasoning_content` to be passed back verbatim across turns, but the client may not preserve it correctly. Language control for reasoning is also absent.

3. **Error Message Quality in Non-Interactive Mode:** Despite the fix in #3749, the pattern of noisy, double-wrapped, and stack-trace-dumping error output in `-p` mode signals a systemic issue—error formatting needs to be unified across interactive vs non-interactive codepaths.

4. **File System Access Under Restricted Environments:** Issue #3789 (remote desktop) reveals that file read permissions may fail in sandboxed or remote environments. The caching layer (#3717) may need a fallback path or better error messaging when FS operations fail silently.

5. **SDK Release Workflow Fragility:** The four issues from `doudouOUC` paint a picture of release infrastructure that works by coincidence rather than design—missing timeouts, hardcoded tag formats, duplicated logic, and compounding release notes. This is a maintenance burden for any contributor touching CI/CD.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*