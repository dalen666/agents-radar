# AI CLI Tools Community Digest 2026-05-10

> Generated: 2026-05-10 04:49 UTC | Tools covered: 8

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

# AI CLI Developer Tools: Cross-Tool Ecosystem Comparison Report
**Analysis Date:** 2026-05-10

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape continues to mature rapidly, with seven major tools now competing across overlapping but distinct use cases. This week's data reveals an ecosystem in active transition: **Claude Code** and **OpenCode** lead in release velocity, **Qwen Code** and **Kimi Code** are shipping significant platform-specific fixes, while **Gemini CLI** and **Copilot CLI** face mounting stability and reliability concerns from their communities. A clear pattern emerges of the "big three" pain points—**session/resume reliability**, **MCP/tool integration fragility**, and **Windows platform parity**—affecting every tool in the ecosystem. Meanwhile, a wave of feature requests around **cross-tool configuration portability**, **multi-agent orchestration**, and **cost governance** signals that power users are treating these tools as part of a broader AI development platform, not isolated utilities.

---

## 2. Activity Comparison

| Tool | New Issues (24h) | Open PRs | Releases (24h) | Community Engagement Signal |
|------|------------------|----------|----------------|-----------------------------|
| **Claude Code** | ~10 notable | 0 updated | v2.1.138 (internal fixes) | High: 52👍 on permissions issue, 43 comments on payment bug |
| **Codex CLI** | ~10 notable | 10 active | rust-v0.131.0-alpha.4 | Moderate: steady PR pipeline, alpha release |
| **Gemini CLI** | ~10 notable | 10 active | None | Very High: #22141 has 199 comments, 159👍 |
| **Copilot CLI** | ~6 notable | 0 active | None | Moderate: focused issues, silent mode is critical |
| **Kimi Code** | ~6 notable | 10 active | None | High: rapid PR→merge cycle from community |
| **OpenCode** | ~10 notable | 10 active | **5 patch releases** (v1.14.42–46) | Very High: 110👍 on Agent Teams feature, active contributor base |
| **Qwen Code** | ~11 new (Maddock-DR cluster) | 10 active | **3 releases** (nightly+preview+Python SDK) | Moderate: developer-driven feature push |
| **Pi** | ~10 notable | 10 active | None | High: org migration friction, active refactor wave |

**Key observations:**
- **OpenCode** leads in release frequency with 5 patches in 24 hours, indicating either high agility or emergent bug hotfixing.
- **Qwen Code** shipped a Python SDK (first SDK entry in this ecosystem), signaling platform expansion beyond CLI.
- **Gemini CLI**'s #22141 (199 comments) is the single highest-engagement issue across all tools this week.
- **Copilot CLI** and **Claude Code** have zero open PR movement, suggesting either maintainer bandwidth constraints or stabilization phases.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities:

### Multi-Agent Orchestration & Agent Teams
- **Tools requesting:** Claude Code, OpenCode, Qwen Code, Gemini CLI (subagent patterns)
- **Specific needs:** Coordinated parallel task execution, sub-agent routing, reusable workflow templates, spend caps for headless orchestration
- **Top ask:** OpenCode #12661 (110👍) for "Agent Teams Equivalent" to Claude Code

### Session Lifecycle & Reliability
- **Tools affected:** Claude Code, Copilot CLI, Pi, Gemini CLI, OpenCode
- **Common pain points:** Compaction data loss (Claude #57636), infinite compaction loops (Copilot #3216), resume crashes (Pi #4355), orphaned tool states after hard kills (Copilot #3183, OpenCode #26177)
- **Emerging standard:** Users expect "crash-resilient sessions" as table stakes

### MCP Integration Fragility
- **Tools affected:** OpenCode, Gemini CLI, Qwen Code, Kimi Code
- **Recurring issues:** JSON Schema parsing failures with `$ref` and `$defs` (OpenCode #26529, #26260), hyphen/underscore name mismatches (Gemini #25989), env var expansion gaps (Gemini #25963), header persistence (Qwen #3973)
- **Industry signal:** MCP tool schema parsing is a systemic weakness across the ecosystem

### Windows Platform Parity
- **Tools affected:** Claude Code, Codex CLI, Gemini CLI, Copilot CLI, Kimi Code, OpenCode
- **Recurring issues:** Installer corruption (Claude #49917), PowerShell→bash shell gaps (Codex #16717, Kimi #1618→#2186), process hangs (Gemini #26392), terminal column detection (Claude #22115)
- **Notable positive:** Kimi Code switched default Windows shell from PowerShell to Git Bash (PR #2186)

### Cost Visibility & Governance
- **Tools affected:** Claude Code, Qwen Code, OpenCode, Codex CLI
- **Specific asks:** Spend alerts, per-session budgets, retry circuit-breakers, `/usage` commands
- **Warning signal:** Claude Code community reported $313 burned in 8.5h on a single retry loop (#57719)

### Cross-Tool Configuration Portability
- **Tools affected:** Qwen Code, Pi, Kimi Code
- **Specific asks:** Import/export settings between tools, unified SOUL.md/memory sync across devices, encrypted profile storage
- **Emerging pattern:** Power users run multiple tools and want unified configuration management

### Configurable Agent Shells (Windows-centric)
- **Tools requesting:** Codex CLI, Kimi Code, Gemini CLI
- **Specific need:** `[windows].agent_shell` config key to choose PowerShell, Git Bash, or WSL
- **Status:** Kimi Code resolved via Git Bash migration; Codex CLI issue #16717 remains open

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex CLI | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code | Pi |
|-----------|-------------|-----------|------------|-------------|-----------|----------|-----------|-----|
| **Primary User** | Power user, macOS-first | Developer, multi-platform | Enterprise, Google ecosystem | GitHub-native, CI/CD | Rapid iteration, WebUI focus | Plugin/extensibility focus | Cross-tool, SDK builder | Terminal purist, cross-platform |
| **Release Cadence** | Weekly patches | Alpha track, steady PRs | Infrequent releases | Slow, stable | Frequent community PRs | **Fastest** (5 patches/day) | Nightly + SDK previews | Refactor wave, infrequent releases |
| **Key Weakness** | Payment flow, macOS-only feel | Alpha stability, Windows gaps | **Performance** (#22141 is top pain) | Silent failures, session fragility | Custom endpoint fragility | Silent API removal, MCP Schema | Binary detection, edit tool deadlock | Org migration chaos, memory crashes |
| **Differentiator** | Cowork, Dispatch, Skills ecosystem | Rust rewrite, TUI ergonomics | Google AI models, enterprise auth | GitHub integration, non-interactive mode | WebUI, rapid community PR merge | Scout agent, plugin API, ACP | `qwen serve` daemon, Python SDK | NVIDIA NIM, Ollama auto-detect, Dart provider |
| **Platform Maturity** | macOS (strong), Windows (weak) | Rust alpha (promising) | Linux/macOS (ok), Windows (improving) | macOS/CI (fragile), Windows (unknown) | Windows (improving via Git Bash) | macOS (good), Windows (enterprise fixes) | Cross-platform (improving) | Cross-platform (strong) |

**Strategic differentiation insights:**

- **OpenCode** is positioning as the "plugin ecosystem" tool, with its Scout agent, ACP protocol, and community-driven features (Agent Teams request). The silent API removal (#26557) is a risk to this narrative.
- **Gemini CLI** has the highest trust deficit this week: #22141 (1+ hour stalls) with 199 comments dwarfs any single issue at other tools. Enterprise users are vocal but frustrated.
- **Qwen Code** is uniquely expanding outward (Python SDK, daemon mode, cross-tool sync proposals) while its core editing pipeline has regressions. Ambitious scope may stretch maintainers thin.
- **Codex CLI**'s Rust rewrite is the most architecturally ambitious move in the ecosystem, but being in alpha limits production adoption. The managed worktrees PR (#21435) shows desktop→CLI feature parity as a priority.
- **Kimi Code** has the healthiest community contributor dynamic: morphishk and 7Sageer each filed bugs AND shipped fixes within hours. This is a model for community-driven development.
- **Pi** is in an awkward transition: the org migration broke trust and update workflows, but the codebase is seeing substantive improvements (NVIDIA NIM, Ollama auto-detect). Needs a stabilization phase.

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, Growing Communities)

| Tool | Evidence |
|------|----------|
| **OpenCode** | 5 releases/day, 110👍 top feature, active contributor PRs (thdxr, kitlangton, jianlins) |
| **Qwen Code** | SDK release, 11-issue feature cluster from single contributor, nightly cadence |
| **Kimi Code** | Fast issue→PR cycle (morphishk: bug→fix in hours), Windows shell refactor merged |

### Established, Stable (Managed Pace, Core Focus)

| Tool | Evidence |
|------|----------|
| **Claude Code** | Weekly patch release, high issue quality, Security/permissions focus |
| **Pi** | Refactor wave indicates internal architecture work, org migration distraction |

### Needing Attention (Stability/Trust Issues)

| Tool | Evidence |
|------|----------|
| **Gemini CLI** | #22141 (199 comments) is highest-engagement issue across ALL tools. Performance trust is damaged. |
| **Copilot CLI** | Silent failures in non-interactive mode (#3189) are CI-blockers. Zero PR movement suggests maintainer bandwidth is a concern. |
| **Codex CLI** | Alpha status is appropriate, but Chrome plugin inconsistency (#21791) and startup hangs (#21704) need resolution before wide adoption. |

### Community Maturity Indicators

- **Most responsive maintainers:** Kimi Code (7Sageer + morphishk cycle), OpenCode (thdxr, kitlangton multi-PR days)
- **Most organized feature requests:** Qwen Code (Maddock-DR's 8-issue structured proposal suite)
- **Best documentation/transparency:** Pi (refactor tags, clear issue closing rationale) — though org migration communication failed
- **Worst communication:** Claude Code (payment regression #55982 unacknowledged, Dispatch bug #45937 open 29 days with no Anthropic response)

---

## 6. Trend Signals

### Strong Signals (Appearing across 4+ tools, high confidence)

1. **Reliability is the new moat.** Users are no longer impressed by model quality alone; they demand crash-resilient sessions, idempotent tool execution, and transparent error handling. The tool that solves infinite compaction loops and orphaned tool states first will win power users.

2. **Multi-agent orchestration is the next frontier.** Every tool community is asking for coordinated agent teams, sub-agent routing, and reusable workflow templates. This is the feature that will differentiate "toy CLI tools" from "development platforms."

3. **Cost governance is an urgent gap.** With reports of $313 in 8.5 hours (Claude Code) and unbounded retry loops (multiple tools), spend visibility and caps are no longer "nice to have"—they are adoption blockers for production/CI usage.

4. **MCP interoperability is broken.** Every tool that implements MCP has issues with JSON Schema parsing, name normalization, env var expansion, and header persistence. Standardization is needed at the MCP protocol level.

5. **Windows parity is a competitive differentiator.** Kimi Code's Git Bash migration and Qwen Code's installer archives show that tools investing in Windows are winning enterprise users. Tools ignoring Windows (Claude Code's installer failures, Codex CLI's PowerShell lock-in) are leaving money on the table.

### Weak Signals (Emerging, 1-2 tools, worth monitoring)

6. **Cross-tool configuration portability** — Qwen Code's proposal suite (#4011-#4018) for SOUL.md/skill sync across tools signals that power users want a unified "AI developer profile" that works across Claude Code, Qwen Code, and others. This could become a de facto standard if adopted.

7. **Plugin ecosystem as competitive advantage** — OpenCode's plugin API (despite the #26557 regression) and Claude Code's Skills system are the two strongest plugin ecosystems. Kimi Code's rapid community contributor cycle suggests community plugin stores could emerge.

8. **Terminal compatibility as UX battleground** — Wezterm keyboard issues (Pi), tmux Shift+Enter preservation (Codex CLI), and bracketed paste on Windows (multiple tools) indicate that terminal fidelity is becoming a UX differentiator as tools push TUI complexity.

9. **Daemon/server modes enable new use cases** — Qwen Code's `qwen serve` Stage 1, Pi's genai-bridge mode, and Kimi Code's OpenAI compatibility ask (#2208) all point to tools becoming "AI agent servers" that other tools integrate with, not just standalone CLIs.

10. **OAuth/free-tier tension is a market signal** — Qwen Code's 123-comment thread on free-tier cuts (#3203) shows that pricing sensitivity is high. Tools that communicate pricing clearly and provide predictable costs will have an advantage.

### Recommendation for Developers

**Short-term priorities:** Evaluate tools based on your platform (Windows users should watch Kimi Code and Qwen Code; macOS power users should monitor Claude Code's payment and Dispatch fixes). For CI/CD pipelines, avoid Copilot CLI until silent failure (#3189) is resolved. For multi-agent workloads, OpenCode's Agent Teams feature request (#12661) suggests the roadmap is promising.

**Medium-term watch items:** The cross-tool configuration portability trend (Qwen Code's proposals) could reduce switching costs between tools. MCP standardization efforts will affect every tool's interoperability. Cost governance features will determine production readiness.

**Bet on tools that ship reliability fixes.** The 2026-05-10 data is clear: users will forgive missing features before they forgive session crashes, silent failures, or unbounded costs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository as of 2026-05-10.

---

## Claude Code Skills Community Highlights Report

### 1. Top Skills Ranking

The following Pull Requests represent the most-discussed Skill submissions, ranked by community engagement (comments).

1.  **Document Typography Quality Control** ([PR #514](https://github.com/anthropics/skills/pull/514))
    - **Functionality:** A skill designed to enforce professional typographic standards in AI-generated documents. It targets orphan word wrap, widow paragraphs, and numbering misalignment.
    - **Status:** Open. The high engagement suggests a strong, unmet need for "finishing" polish on Claude's output.

2.  **Meta-Skills: Quality & Security Analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
    - **Functionality:** Introduces two meta-skills for evaluating and auditing other Skills. `skill-quality-analyzer` scores skills across five dimensions (structure, documentation, etc.), while `skill-security-analyzer` checks for security vulnerabilities.
    - **Status:** Open. This PR taps into the community's growing concern for quality assurance and trust boundaries within the ecosystem.

3.  **Frontend Design Skill Clarity** ([PR #210](https://github.com/anthropics/skills/pull/210))
    - **Functionality:** A significant revision to the existing `frontend-design` skill to make instructions more actionable and specific for Claude to execute in a single conversation.
    - **Status:** Open. The discussion indicates a desire for skills that are less "educational" and more "operational."

4.  **ODT / OpenDocument Skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
    - **Functionality:** Adds a skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods), a key requirement for LibreOffice and open-source workflows.
    - **Status:** Open. This highlights demand for skills that bridge Claude with specific, non-proprietary file formats.

5.  **Skill-Creator Bug Fixes (Lubrsy706 Series)** ([PR #538](https://github.com/anthropics/skills/pull/538), [PR #539](https://github.com/anthropics/skills/pull/539), [PR #541](https://github.com/anthropics/skills/pull/541))
    - **Functionality:** A series of critical fixes: resolving case-sensitive file references (breaking Linux/Mac), preventing DOCX corruption from ID collisions, and catching YAML parsing failures in the skill-creator tool.
    - **Status:** Open. The high level of technical discussion reflects a core developer base focused on the reliability and portability of the toolchain itself.

6.  **Testing Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
    - **Functionality:** A comprehensive skill covering the full testing stack, including philosophy (Testing Trophy), unit testing (AAA pattern), and React component testing.
    - **Status:** Open. This signals strong demand for skills that standardize and automate software engineering best practices.

7.  **ServiceNow Platform Skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
    - **Functionality:** A broad assistant skill for the ServiceNow platform, covering ITSM, ITOM, SecOps, and ITAM/SAM, rather than a narrow scripting helper.
    - **Status:** Open. This demonstrates demand for deep, enterprise-grade platform integrations as Skills.

### 2. Community Demand Trends

Analysis of the most active Issues reveals three major demand vectors:

- **Enterprise Governance & Scalability:** The most heavily commented issue, [#228](https://github.com/anthropics/skills/issues/228) ("Enable org-wide skill sharing"), combined with [#492](https://github.com/anthropics/skills/issues/492) ("Trust boundary abuse") and [#532](https://github.com/anthropics/skills/issues/532) ("API key requirement for enterprises"), show a clear demand for **managed, secure, and shareable skill distribution** within organizations.

- **Tooling Reliability & UX:** Issues like [#62](https://github.com/anthropics/skills/issues/62) ("All skills disappeared"), [#61](https://github.com/anthropics/skills/issues/61) ("Not found error"), and [#406](https://github.com/anthropics/skills/issues/406) ("Cannot upload skills") indicate that users are experiencing friction with basic skill lifecycle management. The community needs more robust error handling and clear feedback loops.

- **Skill Architecture Quality:** Issue [#202](https://github.com/anthropics/skills/issues/202) ("skill-creator should be updated to best practice") and [#189](https://github.com/anthropics/skills/issues/189) ("Duplicate skills from plugins") highlight a growing sophistication: the community is moving from just *submitting* skills to *demanding* better authoring patterns and plugin architecture to prevent bloat.

### 3. High-Potential Pending Skills

These PRs are active, have generated significant discussion, and are likely candidates for merging soon.

- **[Add CONTRIBUTING.md (#509)](https://github.com/anthropics/skills/pull/509):** Directly addresses a community health gap (25% GitHub health score). Strong consensus that this is required for scaling the ecosystem.
- **[Add shodh-memory skill (#154)](https://github.com/anthropics/skills/pull/154):** Introduces persistent context/memory for AI agents, a highly requested feature for long-running conversations.
- **[Add AURELION skill suite (#444)](https://github.com/anthropics/skills/pull/444):** A structured cognitive framework (kernel, advisor, agent, memory) for professional knowledge management, representing a shift from "tools" to "frameworks."
- **[Add sensory skill for macOS (#806)](https://github.com/anthropics/skills/pull/806):** Native macOS automation via AppleScript (osascript), offering an alternative to screenshot-based computer use for desktop automation.

### 4. Skills Ecosystem Insight

The community's most concentrated demand is shifting from "what can a skill *do*" to "how can we ensure skills are **reliable, secure, and manageable** at scale," with a clear priority on toolchain stability and enterprise governance over pure feature breadth.

---

# Claude Code Community Digest
**2026-05-10**

## Today's Highlights
A quiet day on the release front (v2.1.138 ships only internal fixes), but the community is abuzz with two urgent clusters: a **payment processing regression** (#55982) blocking plan upgrades, and a **Dispatch desktop offline bug** (#45937) that's been open for over a month. Meanwhile, a wave of new issues around **permission glob regression**, **session compaction data loss**, and **Korean output regressions in Opus 4.7** suggest the team's attention is stretched across critical UX and model-quality concerns.

## Releases
- **v2.1.138** — Internal fixes only. No user-facing changes documented.

## Hot Issues
1. **[#55982 — PaymentIntent voided immediately on plan upgrade](https://github.com/anthropics/claude-code/issues/55982)** 🏷️ *bug, invalid?*  
   Payment flow fails because `void_invoice` fires before `confirm` completes. **43 comments**, 10 👍. Not yet acknowledged by Anthropic — blocked upgrade path for Pro→Max users.

2. **[#45937 — Dispatch main conversation permanently offline](https://github.com/anthropics/claude-code/issues/45937)** 🏷️ *bug, macos, cowork, desktop*  
   Main Dispatch thread shows offline even when Cowork tasks work. **28 comments**, 12 👍, open since April 9. High frustration from mobile-first users; desktop reconnection logic suspected.

3. **[#18950 — Skills/subagents don't inherit user-level permissions](https://github.com/anthropics/claude-code/issues/18950)** 🏷️ *bug, security, macos*  
   Bash commands inside skills always prompt, ignoring `permissions.allow`. **22 comments**, 52 👍 (highest 👍 count). Core security workflow blocker for power users.

4. **[#57746 — Glob `**` pattern fails in Edit permission rules](https://github.com/anthropics/claude-code/issues/57746)** 🏷️ *bug, regression, macos*  
   Recursive glob matching broken in `Edit()` permission rules. Filed today, 4 comments. Suspected regression — same config worked previously.

5. **[#57636 — Compaction discards context when summary API fails](https://github.com/anthropics/claude-code/issues/57636)** 🏷️ *bug, data-loss, macos*  
   `/compact` deletes original conversation *before* verifying the summary write succeeds. Error messages replace context irreversibly. **Data loss** flagged as critical by community.

6. **[#22115 — `statusLine` can't detect terminal columns](https://github.com/anthropics/claude-code/issues/22115)** 🏷️ *bug, windows, tui*  
   Custom status line scripts run via pipe (not TTY) — no `COLUMNS`, `stdout.columns`, or `tput`. **14 comments**, 14 👍. Blocks status bar customization on Windows.

7. **[#54339 — Opus 4.7 Korean lexical fixation: "영역" repetition](https://github.com/anthropics/claude-code/issues/54339)** 🏷️ *bug, linux, anthropic*  
   Repeatedirredundant insertion of "영역" in unrelated output. **7 comments**. Companion issue [#57748](https://github.com/anthropics/claude-code/issues/57748) adds model self-diagnosis. Serious output quality concern.

8. **[#49917 — Windows installer fails with 0x80073CF6](https://github.com/anthropics/claude-code/issues/49917)** 🏷️ *bug, windows, installation*  
   First successful install leaves package in inconsistent state; retry fails. **14 comments**. Blocks Windows adoption for new users.

9. **[#57755 — Silent failure on large input](https://github.com/anthropics/claude-code/issues/57755)** 🏷️ *bug, core*  
   ~290 lines input → zero output, no error, no warning. Filed today, 1 comment. Suggests input size limit or truncation bug without user notification.

10. **[#57706 — Cowork freezes on session switch (macOS deadlock)](https://github.com/anthropics/claude-code/issues/57706)** 🏷️ *bug, cowork, desktop*  
    Synchronous XPC notification causes app lockup. App becomes "Not Responding" — force-quit only recovery. Filed yesterday, 2 comments.

## Key PR Progress
*(No pull requests were updated in the last 24 hours.)*

## Feature Request Trends
- **Per-session model selection** (#57742, #57738): Users want model choice per tab/session, not global. Includes requests for worktree root outside project dir.
- **Dispatch↔local session sync** (#57754): Desire to surface existing CLI sessions in Desktop/iPhone Dispatch views.
- **Multi-agent orchestration** (#57752, #57719): Need reusable workflows for parallel tasks, model routing, spend caps for headless orchestration.
- **Cost visibility & caps** (#57719): $313 burned in 8.5h on a single retry loop — users want spend alerts, per-workflow budgets, and retry-circuit-breakers.
- **Plugin slash commands** (#57737): Skills from plugins don't register as `/commands` when loaded via `extraKnownMarketplaces`.

## Developer Pain Points
- **Permission model fragmentation**: Skills don't inherit settings.json permissions (#18950), glob matching regressed (#57746). *Affects security-critical workflows.*
- **Session management glitches**: CLI vs Desktop path mismatch (#57345), Dispatch offline despite working Cowork (#45937), compaction data loss (#57636). *Cross-platform session fidelity is fragile.*
- **Cost control vacuum**: No spend visibility, no retry limits, no headless drift detection (#57719, #57699). *Unbounded cost risk for automated pipelines.*
- **Windows ecosystem gaps**: Installer state corruption (#49917), orphaned MCP processes (#57740), terminal column detection (#22115). *Windows remains a second-class platform.*
- **Model output regressions**: Korean fixation (#54339), silent large-input failures (#57755). *Output quality and robustness concerns undermine trust in agentic workflows.*
- **Payment flow blockages**: Plan upgrade payment fails with `void_invoice` (#55982), Pro→Max card rejection despite same card working for usage (#57122). *Revenue-critical, user-facing friction.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-05-10

## Today's Highlights

The Codex team shipped a **rust-v0.131.0-alpha.4** release while tackling a persistent **Chrome plugin visibility bug** where the agent can't call `chrome@openai-bundled` despite the UI allowing it. Two **fast service tier persistence PRs** landed to fix config normalization, and a major **managed worktrees PR** brings Git worktree management to the CLI/TUI. The community continues to push for **configurable agent shells on Windows**, **sticky prompt textboxes**, and **conversation branching** in the TUI.

## Releases

- **[rust-v0.131.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.4)** — Alpha release of the Rust-based CLI. No detailed changelog was provided, but the tag indicates continued progress on the new CLI architecture.

## Hot Issues (Top 10 Notable)

1. **[#21704 — Chrome/browser-use setupAtlasRuntime can hang when ambient /backend-api/me probe does not complete](https://github.com/openai/codex/issues/21704)**
   - Desktop app + Chrome plugin combination hangs on startup when a connectivity probe fails to return. 5 comments. **Why it matters:** Blocks all browser-use features on startup; platform: macOS + Chrome 148.

2. **[#21791 — Chrome plugin mention is selectable but chrome@openai-bundled is not exposed in active tools](https://github.com/openai/codex/issues/21791)**
   - UI lets users `@chrome` but the runtime refuses to call the tool. 5 comments, 1 👍. **Community reaction:** A fundamental UX/runtime mismatch that forces users to guess which tools their agent can actually use.

3. **[#16717 — Configurable Windows agent shell (powershell/git-bash)](https://github.com/openai/codex/issues/16717)**
   - Requests `[windows].agent_shell` config key. 4 comments. **Why it matters:** PowerShell's unfamiliar syntax degrades agent command quality; Git Bash users have no workaround.

4. **[#17101 — TUI-usable session-control primitive in Codex CLI](https://github.com/openai/codex/issues/17101)**
   - Wants a lightweight `codex inject` or session-control command. 3 comments, 1 👍. **Why it matters:** Power users need to send follow-up instructions to a running session without restarting.

5. **[#14024 — Branch conversation from a previous message](https://github.com/openai/codex/issues/14024)**
   - Feature request for conversation forking. 3 comments, 1 👍. **Trend:** Repeatedly requested; users want to experiment with multiple prompt directions.

6. **[#15882 — Make Cmd +/- affect font size rather than zooming](https://github.com/openai/codex/issues/15882)**
   - macOS desktop: Cmd+/- zoom the whole window instead of scaling text. 4 comments. **Why it matters:** Zooming breaks layout; font scaling is the expected behavior in code editors.

7. **[#11481 — Domain Whitelist for Codex App](https://github.com/openai/codex/issues/11481)**
   - Enterprise feature request: allowlist domains for sandboxed browsing. 2 comments, 5 👍. **Community reaction:** Strong enterprise demand; Teams users need parity with the cloud version.

8. **[#15896 — Parallel session set up to a currently running codex session](https://github.com/openai/codex/issues/15896)**
   - Users want a "sidecar" session to ask questions about an active session's work. 3 comments, 1 👍. **Use case:** Debugging without interrupting the main workflow.

9. **[#14895 — Codex can't use provided images or generate new ones](https://github.com/openai/codex/issues/14895)**
   - Desktop/CLI lacks image generation/consumption support. 2 comments. **Impact:** Plus subscribers on Mac can't leverage multimodal or imagegen capabilities.

10. **[#15902 — On which project am I?](https://github.com/openai/codex/issues/15902)**
    - Desktop app doesn't show current project context when switching threads/windows. 2 comments. **Pain point:** Disorientation in multi-project workflows.

## Key PR Progress (Top 10)

1. **[#21991 — Persist 'priority' service tier as fast in config](https://github.com/openai/codex/pull/21991)**
   - Normalizes `service_tier` storage: `priority` (API) → `fast` (config). Merged today. **Impact:** Fixes a confusing discrepancy where settings appeared different after restart.

2. **[#21992 — Store fast service tier in config](https://github.com/openai/codex/pull/21992)**
   - Companion PR ensuring config stores user-facing `fast` while API sends `priority`. Merged today. **Impact:** Clean config persistence for the fast mode toggle.

3. **[#21435 — feat(tui): managed worktrees](https://github.com/openai/codex/pull/21435)**
   - New TUI command for creating/managing Git worktrees under `$CODEX_HOME/worktrees`. Open, no comments yet. **Feature:** First-class worktree support in CLI, matching desktop app capabilities.

4. **[#21866 — Split ChatWidget state into focused modules](https://github.com/openai/codex/pull/21866)**
   - Large refactor: breaks monolithic ChatWidget into focused modules. Merged. **Why it matters:** Makes future TUI changes easier to reason about.

5. **[#21870 — Avoid blocking TUI on agent metadata hydration](https://github.com/openai/codex/pull/21870)**
   - Fixes #16688: subagent fan-outs no longer block rendering on synchronous metadata reads. Merged. **Impact:** Eliminates TUI freezes during multi-agent operations.

6. **[#21755 — Improve hooks trust flow in TUI](https://github.com/openai/codex/pull/21755)**
   - Adds startup review prompt for new/changed hooks + `t` shortcut. Merged. **Why it matters:** Previously hooks were easy to miss; now users get proactive review.

7. **[#21762 — Share project hook trust across worktrees](https://github.com/openai/codex/pull/21762)**
   - Hook trust keys now use shared worktree identity. Merged. **Impact:** Consistent hook trust decisions across all worktrees of the same repo.

8. **[#21972 — Add hook visibility hints](https://github.com/openai/codex/pull/21972)**
   - Addresses 3 issues (#19383, #20766, #21696): separates consequential hook behavior from background noise. Open. **Community demand:** Hooks rendering is a top pain point.

9. **[#21943 — fix(tui): preserve Shift+Enter in tmux csi-u panes](https://github.com/openai/codex/pull/21943)**
   - Requests `modifyOtherKeys` mode 2 from tmux to preserve Shift modifier. Open. **Impact:** Fixes a frustrating keyboard shortcut bug for tmux users.

10. **[#21844 — Ignore stale /tmp git markers in project discovery](https://github.com/openai/codex/pull/21844)**
    - Skips `.git` markers on world-writable sticky dirs like `/tmp`. Open. **Why it matters:** Prevents false project root detection in shared/temp directories.

## Feature Request Trends

1. **Conversation Branching & Forking** — Multiple requests (e.g., #14024, #15896) for the ability to fork a conversation from a previous message or parallelize sessions.

2. **Context Management & Compaction** — Users want hierarchical archived contexts (#15425), autonomous compaction after task phases (#15848), and plan preservation during compaction (#13932).

3. **Shell Customization (Windows)** — Persistent demand for configurable agent shells (#16717) due to PowerShell compatibility issues.

4. **TUI Ergonomics** — Sticky prompt textbox (#14045), configurable notification preview lengths (#15913), and a `/usage` command (#17190) to mirror Claude Code's discoverability.

5. **Session & Project Awareness** — Project-based chat isolation (#17185), "which project am I on?" (#15902), and custom session IDs for embedding (#15767).

## Developer Pain Points

- **Chrome plugin inconsistency** (#21791, #21704): UI and runtime disagree on which tools are available; startup hangs when network probes fail. This blocks browser-automation workflows entirely.
- **Poor TUI notification visibility** (#16802, #15913): Agent permission prompts and hook lifecycle notifications are visually indistinguishable from other grey UI elements; no way to control preview length.
- **Windows agent shell lock-in** (#16717): PowerShell forced even when Git Bash is available; model generates worse commands due to syntax differences.
- **No image support** (#14895): Desktop/CLI lacks image generation and consumption, limiting multimodal use cases.
- **Inability to edit/interrupt agent workflow** (#13444): No "take over" feature to edit commands or enter passwords mid-session; no parallel session support (#15896) for debugging.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-10

## Today's Highlights
Performance and reliability issues dominate the conversation today. The most critical thread involves the CLI becoming stuck for hours on small code edits (Issue #22141, 199 comments, 159 👍), reflecting a top user pain point. Meanwhile, active PRs tackle Windows process hangs, proxy support, and MCP tool dispatch bugs, indicating the team is actively addressing infrastructure reliability. No new releases were published in the last 24 hours.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[[#22141] Gemini CLI becomes extremely slow (1+ HOURS) / stuck during small code-edit tasks](https://github.com/google-gemini/gemini-cli/issues/22141)** — The highest-signal issue today, with 199 comments and 159 reactions. Users report the CLI stalls for 13–14 minutes even on trivial tasks, with the agent loop and model response delays creating a "1+ hour" experience. This is prioritized as P2 (bug) and triaged for agent area. Community frustration is high.

2. **[[#22107] "You have exhausted your capacity on this model" despite quotas not being exceeded](https://github.com/google-gemini/gemini-cli/issues/22107)** — A P1 bug affecting enterprise users receiving false quota exhaustion errors. The retry logic triggers unnecessarily, wasting time and tokens. Community has 6 👍.

3. **[[#20356] CTRL+O expansion causes black screen for seconds in terminal](https://github.com/google-gemini/gemini-cli/issues/20356)** — A persistent UI bug where pressing CTRL+O in the changes visualization turns the screen black, then crashes back with flickering. Related to a Terminator-specific issue (#20814). 8 comments, 3 👍.

4. **[[#22149] `npm run preflight` fails natively on Windows](https://github.com/google-gemini/gemini-cli/issues/22149)** — A P2 bug where Unix-specific shell pipelines in `lint.js` prevent Windows (PowerShell/CMD) development setup. Highlights a platform parity gap.

5. **[[#22225] API Key Leakage — agent prints sensitive keys in plain text](https://github.com/google-gemini/gemini-cli/issues/22225)** — A P1 security issue where the agent exposed `MISTRAL_API_KEY` and `OPENAI_API_KEY` from environment variables and systemd files. Community concern is significant given the P1 priority and security label.

6. **[[#22146] Inconsistent Error Sanitization in KeychainService](https://github.com/google-gemini/gemini-cli/issues/22146)** — A security bug in credential storage where error messages may leak sensitive information via the `keytar` library. Help-wanted label signals community contribution opportunity.

7. **[[#22159] Input blocker not restored after Chrome fatal error in browser agent](https://github.com/google-gemini/gemini-cli/issues/22159)** — A P2 bug where a fatal Chrome connection error leaves the browser agent's input blocker permanently suspended, breaking interactive sessions. Detailed stack trace provided.

8. **[[#26563] Tool "save_memory" not found](https://github.com/google-gemini/gemini-cli/issues/26563)** — A P2 bug on v0.41.1 where `/memory add` fails because the model is looking for `save_memory` while only `ask_user`, `list_...` exist. Indicates tool registration or name mismatch.

9. **[[#22183] API Error: 400 Invalid JSON Prevents File Read](https://github.com/google-gemini/gemini-cli/issues/22183)** — Enterprise users who set `GOOGLE_GENAI_API_VERSION=v1` (instead of default `v1beta`) cannot read files due to a 400 error. Affects enterprise migration paths.

10. **[[#21851] `/privacy` command fails to persist Data Collection Opt-In setting](https://github.com/google-gemini/gemini-cli/issues/21851)** — A P1 regression where the user's privacy choice (opt-out of data collection) reverts to default ("Yes") on subsequent sessions. Stale label suggests low activity, but priority remains P1.

## Key PR Progress

1. **[/#26392, fix(windows): Resolve hangs, zombie processes, and improve subagent reliability](https://github.com/google-gemini/gemini-cli/pull/26392)** — (OPEN, P1) Consolidates Windows-specific fixes for process management, log persistence, and subagent stability. Directly addresses several community-reported Windows hang issues.

2. **[/#26761, fix(routing): prevent orphaned tool responses during numerical classifier history slicing](https://github.com/google-gemini/gemini-cli/pull/26761)** — (OPEN, new today) Fixes `400 Bad Request: function response turn` errors by correcting session history slicing in `NumericalClassifierStrategy`. Prevents orphaned tool responses.

3. **[/#26361, fix(core): externalize https-proxy-agent to fix proxy support](https://github.com/google-gemini/gemini-cli/pull/26361)** — (OPEN, P1) Resolves `TypeError: HttpsProxyAgent is not a constructor` by externalizing the proxy agent from the esbuild bundle. Critical for enterprise proxy environments.

4. **[/#25989, fix(mcp): handle hyphenated server names consistently in tool dispatch](https://github.com/google-gemini/gemini-cli/pull/25989)** — (CLOSED, P1) Fixes MCP tool dispatch where models emitted underscores instead of hyphens (e.g., `mcp_hyphen_server` vs `mcp_hyphen-server`). Closes #25952.

5. **[/#25426, feat(ci): performance explorations](https://github.com/google-gemini/gemini-cli/pull/25426)** — (OPEN, P2) Introduces artifact-centric CI with `setup-gemini` action, modernized test infrastructure, and 16-core performance unlocks for CI shards.

6. **[/#25963, fix(mcp): expand env vars in stdio args](https://github.com/google-gemini/gemini-cli/pull/25963)** — (CLOSED, P2) Ensures environment variable placeholders like `${DISCORD_TOKEN}` in MCP stdio args are expanded before spawn. Fixes a gap where only explicit `env` entries were expanded.

7. **[/#25974, fix(cli): resolve file-loaded custom theme lookup by internal name](https://github.com/google-gemini/gemini-cli/pull/25974)** — (CLOSED, P2) Fixes bug preventing custom themes from being selected via `/theme` menu when using file-loaded themes.

8. **[/#26387, fix(core): implement system ripgrep fallback when bundled binary is missing](https://github.com/google-gemini/gemini-cli/pull/26387)** — (OPEN, P3) Adds fallback to system-installed `ripgrep` when bundled vendor binaries are unavailable. Follows from PR #25841 that removed architecture-specific binaries.

9. **[/#26366, fix(sea): run forked helper scripts directly instead of spawning a new session](https://github.com/google-gemini/gemini-cli/pull/26366)** — (OPEN, P1) In SEA builds, avoids launching a second `gemini.exe` session when `child_process.fork()` is called. Fixes infinite recursion and crashes in single-executable builds.

10. **[/#25957, feat(cli): implement event-driven hook system messages](https://github.com/google-gemini/gemini-cli/pull/25957)** — (CLOSED, P2) Refactors hook system message handling to be event-driven via `CoreEventEmitter`, preventing message loss when UI hasn't subscribed yet. Closes #25861.

## Feature Request Trends
The most-requested feature directions from recent issues include:

- **Configurable file search limits** — PR #20738 proposes making `maxFileCount` user-configurable to avoid silent truncation of large workspace scans.
- **External editor support for open-ended user questions** — Issue #20181 requests ability to open an external editor (like regular chat) when answering open questions, especially for long-form responses.
- **Refined nested scrolling UX in shell toolboxes** — Issue #20741 requests focus-based scrolling behavior: inner scroll only when shell toolbox has explicit focus, otherwise global scroll.
- **Workspace terminology migration** — PR #21877 renames `/directory` to `/workspace` with compatibility aliases, reflecting a shift toward workspace-centric terminology.
- **Component-level behavioral evaluations** — Issue #24353 proposes expanding from 76 eval tests to robust component-level evaluations across 6 Gemini models, indicating a push toward systematic quality measurement.

## Developer Pain Points
Recurring frustrations from this digest's data:

1. **Severe slow/stuck/hang behavior** — Issue #22141 (199 comments) and #25166 ("stuck with Waiting input after command completes") indicate that agent-loop blocking and model response delays are the #1 user frustration, especially for small edits.
2. **CTRL+O expansion and terminal rendering bugs** — Multiple reports (#20356, #20814) of black screens, flickering, and scroll-jumping when expanding changes, particularly in Terminator terminal.
3. **Windows platform friction** — Native Windows development is broken (issue #22149, `preflight` fails), and Windows process hangs are a recurring theme (PR #26392).
4. **Security concerns** — API key leakage (issue #22225) and inconsistent credential sanitization (issue #22146) cause trust issues, especially after agent reads and prints sensitive keys.
5. **API version and quota surprises** — False quota exhaustion errors (issue #22107) and 400 errors when using `v1` API instead of `v1beta` (issue #22183) create friction for enterprise migrations.
6. **MCP integration fragility** — Hyphenated server names (#25989), env var non-expansion (#25963), and "malformed function call" errors (#22179) make MCP toolchains unreliable.
7. **Privacy persistence regression** — The `/privacy` command not persisting opt-out choices (issue #21851) is a P1 regression that erodes user trust.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-10

## Today's Highlights
No new releases or pull requests landed in the last 24 hours, but the issue tracker is active. A critical bug in non-interactive (`-p`) mode leaves the CLI exiting silently with no output or logs, blocking headless/CI workflows entirely. Meanwhile, session lifecycle complexity continues to dominate: infinite compaction loops, orphaned tool uses after hard kills, and broken automatic model fallback are generating the most community frustration.

## Releases
None in the last 24 hours. The latest stable release remains v1.0.44, with v1.0.24 still in wide use per version-specific bugs.

## Hot Issues (10 noteworthy)

1. **[#3189 – `copilot -p` exits 1 silently with no output/log (macOS)](https://github.com/github/copilot-cli/issues/3189)**
   - `[area:non-interactive]` Non-interactive mode produces zero bytes on stdout/stderr and no log file. Interactive mode works fine. This is a **blocker for CI/CD pipelines** and headless automation. 4 comments, no workaround confirmed.

2. **[#2643 – `preToolUse` hook with `permissionDecision: allow` still shows confirmation dialog](https://github.com/github/copilot-cli/issues/2643)**
   - `[area:plugins]` Hooks that silently rewrite commands cannot bypass the interactive confirmation dialog. **Plugin authors need a true "silent rewrite" path.** 7 comments, the longest thread this week.

3. **[#3216 – Agent enters infinite compaction/directory-list loop on long sessions](https://github.com/github/copilot-cli/issues/3216)**
   - `[area:sessions, area:context-memory]` After ~136 turns near context limit, the agent loops indefinitely between listing a directory tree and compacting memory. User reports it ran overnight and is requesting a refund. **High-severity session defect.**

4. **[#3183 – Orphan `tool_use` after hard kill + resume causes 400 error](https://github.com/github/copilot-cli/issues/3183)**
   - `[area:sessions, area:tools]` SDK user reports that killing and resuming a session leaves orphan tool_use IDs, causing persistent "tool_use ids were found without tool_result blocks" errors. **Breaks all SDK-based agents on session resume.**

5. **[#3215 – DeepSeek-V4 tool call fails with 400](https://github.com/github/copilot-cli/issues/3215)**
   - `[area:models, area:tools]` Same symptom as #3183 but triggered on DeepSeek-V4 models. Suggests a broader tool-call validation issue affecting non-OpenAI models.

6. **[#3217 – Auto model fallback shows new model in status line but does not resume](https://github.com/github/copilot-cli/issues/3217)**
   - `[area:sessions, area:models]` On quota exhaustion, Auto fallback detects the switch but requires a full restart to actually continue. **Wastes premium-quota users' time and breaks flow.**

7. **[#3072 – No way to delete remote agent sessions from /resume menu](https://github.com/github/copilot-cli/issues/3072)**
   - `[area:sessions, area:agents]` Local sessions can be deleted, remote ones cannot. Users have no remedy for clutter or broken remote sessions. 👍 1, feature gap.

8. **[#3214 – Go toolchain bump to 1.26.3 (CLOSED)](https://github.com/github/copilot-cli/issues/3214)**
   - `[triage]` Routine dependency bump. Closed without merge discussion — likely low-priority or automated triage reject.

9. **[#2643 duplicate pattern — permission hooks still shown](https://github.com/github/copilot-cli/issues/2643)**
   - Already covered above, but deserves re-emphasis: **plugin reliability is a top community concern.**

10. **[#3183 tangential – SDK session state corruption](https://github.com/github/copilot-cli/issues/3183)**
    - The orphan-tool-use bug is now confirmed **not** caused by subagent interleaving but by raw session state. SDK maintainers need to fix state persistence after forceful termination.

## Key PR Progress
No pull requests were updated in the last 24 hours. There are zero open PRs to report progress on.

## Feature Request Trends
Based on all open issues, the most-requested feature directions are:

1. **Silent/tree-write hooks** – Multiple threads (especially #2643) ask for `preToolUse` hooks to suppress confirmation dialogs when `permissionDecision: allow` is set.
2. **Session lifecycle management** – #3072, #3183, #3216 collectively demand: deletion of remote sessions, resilient resume after hard kills, and prevention of infinite loops during context compaction.
3. **Model fallback reliability** – #3217 highlights that "Auto" fallback is cosmetic only; users want **transparent, resumable fallback** without requiring a restart.
4. **Non-interactive mode maturity** – #3189 shows CI/CD use cases are broken on macOS. Users expect production-grade headless operation with proper error reporting.
5. **Multi-model validation parity** – #3215 suggests tool-call validation logic differs per model provider, causing regressions for DeepSeek users.

## Developer Pain Points
Recurring frustrations from the community:

- **Silent failures in non-interactive mode** (#3189) — no error messages, no logs, just exit code 1. **Top pain point** for anyone automating CLI workflows.
- **Session corruption on forceful termination** (#3183) — hard kills are common in development and CI, but the SDK leaves orphan state that requires manual cleanup.
- **Plugin hook limitations** (#2643) — hooks that rewrite commands are pointless if they still trigger confirmation dialogs. Plugin authors cannot build transparent assistants.
- **Model fallback is "hollow"** (#3217) — the status line changes, but execution does not continue. Users feel misled by the UI signal.
- **No remote session cleanup** (#3072) — stale remote sessions accumulate with no management tooling. Minor but persistent annoyance.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date**: 2026-05-10  
**Data Source**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## Today's Highlights

The community saw a flurry of WebUI usability fixes and feature implementations, led by contributor **morphishk**, who both reported and submitted PRs addressing long-filename clipping and adding an editable path bar with autocomplete. Meanwhile, **7Sageer** landed two critical Windows shell refactors: switching the default Shell backend from PowerShell to Git Bash, and fixing partial UI output corruption on LLM retries. A persistent `429 engine_overloaded` error on remote servers and a login failure on Linux ARM64 remain open concerns.

---

## Releases

No new releases in the last 24 hours. (Current version: v1.41.0)

---

## Hot Issues

### 1. [Bug] Kimi CLI stuck in reading one file repeatedly causing a loop
- **Issue**: [#640](https://github.com/MoonshotAI/kimi-cli/issues/640)
- **Why it matters**: A critical bug causing infinite loops, affecting users with custom Anthropic endpoints. Has been open since January with 6 comments and 1 thumbs-up, indicating an unresolved core stability issue.

### 2. [Bug] Cannot Login
- **Issue**: [#2162](https://github.com/MoonshotAI/kimi-cli/issues/2162)
- **Why it matters**: Blocks all usage. Reported on Linux ARM64 with v1.41.0. Minimal community response yet, but a login blocker is a top-priority UX issue.

### 3. [RFC] User-customizable color skins via YAML
- **Issue**: [#2171](https://github.com/MoonshotAI/kimi-cli/issues/2171)
- **Why it matters**: Power users want to define custom color schemes without patching source. Currently only two built-in themes (`dark`/`light`). One positive reaction, suggesting niche but passionate interest.

### 4. [Enhancement] Support Shift+Enter for line breaks
- **Issue**: [#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121)
- **Why it matters**: Usability complaint that `Ctrl+J` is unintuitive; Shift+Enter is the CLI industry standard. 1 thumbs-up, indicating mild but consistent demand.

### 5. [WebUI] Workspace files sidebar action buttons hidden by long filenames
- **Issue**: [#2206](https://github.com/MoonshotAI/kimi-cli/issues/2206)
- **Why it matters**: Critical UI bug rendering expand/download buttons unclickable. Contributor **morphishk** filed this and immediately submitted a PR (#2207), driving rapid iteration.

### 6. [Feature Request] Editable path bar with autocomplete in Workspace files sidebar
- **Issue**: [#2216](https://github.com/MoonshotAI/kimi-cli/issues/2216)
- **Why it matters**: Follow-up enhancement to #2206. Also submitted by **morphishk** alongside a PR (#2215), showing strong momentum in WebUI UX improvements.

### 7. [Bug] Shell executor configuration on Windows (closed)
- **Issue**: [#1618](https://github.com/MoonshotAI/kimi-cli/issues/1618) (CLOSED)
- **Why it matters**: Resolved by PR #2186 switching from PowerShell to Git Bash. Long-standing Windows pain point finally addressed — a major win for Windows users.

### 8. [Bug] Persistent `429 engine_overloaded` on remote server for 48+ hours
- **Issue**: [#2209](https://github.com/MoonshotAI/kimi-cli/issues/2209)
- **Why it matters**: Server-side rate limiting makes CLI unusable in production deployments. User tried upgrading from v1.24.0 to v1.41.0 with no relief. Critical for cloud/CI/CD use cases.

### 9. [Enhancement] Make Kimi Code API OpenAI-compatible
- **Issue**: [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208)
- **Why it matters**: User wants to use Kimi K2.6 directly in Cursor IDE via OpenAI-compatible base URL. Reflects growing demand for interoperability with existing toolchains.

### 10. [Bug] WebUI missing clickable expand/download buttons for long filenames
- **Issue**: [#2206](https://github.com/MoonshotAI/kimi-cli/issues/2206) (duplicate mention due to rapid fix cycle)
- **Community reaction**: Very high — a PR was opened within hours of the issue being filed.

---

## Key PR Progress

### 1. [PR #2215] feat(webui): editable path bar with autocomplete in Workspace files sidebar
- **Link**: [#2215](https://github.com/MoonshotAI/kimi-cli/pull/2215)
- **Description**: Adds intelligent path autocomplete for deep directory navigation. Author: **morphishk**.

### 2. [PR #2207] fix(webui): prevent long filenames from hiding action buttons
- **Link**: [#2207](https://github.com/MoonshotAI/kimi-cli/pull/2207)
- **Description**: Fixes viewport clipping caused by Radix UI ScrollArea's overflow hidden. Also a **morphishk** contribution.

### 3. [PR #2214] fix(soul): show rotated backup hint after /clear
- **Link**: [#2214](https://github.com/MoonshotAI/kimi-cli/pull/2214)
- **Description**: Returns rotated backup path from `Context.clear()` and shows it to the user. Includes regression tests. Author: **zbl1998-sdjn**.

### 4. [PR #2212] fix(shell): tighten Windows PowerShell guidance (CLOSED)
- **Link**: [#2212](https://github.com/MoonshotAI/kimi-cli/pull/2212)
- **Description**: Clarifies that Unix tools like `grep`/`sed` are unavailable in PowerShell. Closed after merge.

### 5. [PR #2177] fix(soul): clear partial UI output when LLM step is retried (CLOSED)
- **Link**: [#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177)
- **Description**: Prevents concatenation of failed streamed output with retry attempt. **7Sageer** — clean UX fix.

### 6. [PR #2186] refactor(windows): switch Shell backend from PowerShell to git-bash (CLOSED)
- **Link**: [#2186](https://github.com/MoonshotAI/kimi-cli/pull/2186)
- **Description**: Major Windows UX win: replaces PowerShell with Git Bash for POSIX semantics. Resolves #1618. **7Sageer**.

### 7. [PR #2205] fix(shell): register /btw slash command (CLOSED)
- **Link**: [#2205](https://github.com/MoonshotAI/kimi-cli/pull/2205)
- **Description**: `/btw` was missing from slash completion and `/help`. Now registered. **7Sageer**.

### 8. [PR #2190] feat(telemetry): add app_name and build_sha with remote provenance (CLOSED)
- **Link**: [#2190](https://github.com/MoonshotAI/kimi-cli/pull/2190)
- **Description**: Improves telemetry observability with compaction trigger attribution and build SHA. **jackfish212**.

### 9. [PR #2213] fix(tests): unbreak main CI after #2177 (CLOSED)
- **Link**: [#2213](https://github.com/MoonshotAI/kimi-cli/pull/2213)
- **Description**: Hotfix for test infrastructure: initialized retry tracker and bumped protocol version from `1.9` to `1.10`. **7Sageer**.

### 10. [PR #2113] fix(acp): wrap shell command in `bash -c` for `terminal/create` (OPEN)
- **Link**: [#2113](https://github.com/MoonshotAI/kimi-cli/pull/2113)
- **Description**: When Kimi ACP is connected to a client, shell-tool calls must be wrapped in `bash -c` to execute correctly. Still open.

---

## Feature Request Trends

1. **OpenAI-compatible API** — Users want to use Kimi models (especially K2.6) in third-party IDEs via OpenAI-compatible endpoints. (#2208)
2. **Shell/Terminal flexibility on Windows** — Shift from PowerShell to bash/zsh is now resolving, but requests continue for configurable shell executors. (#2186, #1618)
3. **WebUI Workspace navigation** — High demand for keyboard-based path navigation and autocomplete, not just mouse clicks. (#2216, #2206)
4. **Custom theming** — Power users want YAML-based color customization beyond the two built-in palettes. (#2171)
5. **Keyboard shortcut ergonomics** — Users want Shift+Enter for line breaks instead of Ctrl+J. (#2121)

---

## Developer Pain Points

- **Infinite read loop on custom endpoints** — Issue #640 has been open since January 2026 with no resolution, suggesting edge-case handling for non-standard models is fragile.
- **429 engine_overloaded for 48+ hours** — Remote server deployments are blocked by sustained rate limiting; workarounds are nonexistent. (#2209)
- **Login failures on Linux ARM64** — A new version-specific login blocker (#2162) may prevent adoption on Apple Silicon Macs and ARM servers.
- **WebUI sidebar clipping** — Action buttons hidden by long filenames (#2206) demonstrates insufficient testing for edge-case UI states.
- **Partial output corruption on LLM retries** — While PR #2177 fixes it, the underlying fragility in streaming error handling was evidently a long-standing annoyance.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-10

## Today's Highlights
Five patch releases (v1.14.42–v1.14.46) shipped today, bringing a new Scout agent, HTTP response compression, workspace auto-sync, and a `customize-opencode` safety skill. The community is buzzing about a major TUI plugin API removal and ongoing MCP tool-loading failures with Google Stitch, while the most-upvoted feature request (110 👍) remains for an Agent Teams alternative.

---

## Releases

**v1.14.42–v1.14.46** shipped in the last 24 hours.

**Key improvements:**
- **Scout agent** — new agent purpose-built for repo research, docs lookup, and dependency-source inspection
- **HTTP API response compression** — reduces bandwidth for large non-streaming responses
- **Workspace auto-sync** — adapter-backed workspaces are now discovered and registered automatically
- **`customize-opencode` built-in skill** — config edits are less likely to break startup
- **Tool image attachments** — now included in ACP updates and session replays (thanks @SteffenDE)

**Key bugfixes:**
- Provider configs and API responses now accept models marked as `active`
- Read tool permission rules correctly match worktree-relative paths
- Workspace-routed HTTP API endpoints no longer reject valid `directory`/`workspace` query params
- Upgrades no longer fail when adding the `time_used` field
- Numeric HTTP API query parameters fixed in generated OpenAPI spec and SDK

---

## Hot Issues

### 1. TUI plugin API silently removed — `api.command.*` gone in v1.14.42  
**#26557** — `api.command.register`, `api.command.trigger`, and `api.command.show` were removed with no deprecation cycle or changelog entry. Plugin authors are blindsided, and the community is demanding a migration path.

### 2. Cannot copy/paste in OpenCode CLI  
**#13984** (35 comments, 13 👍) — A long-standing issue where `ctrl+v` fails to paste despite "copied to clipboard" confirmation. Still unresolved after 3 months.

### 3. [FEATURE] Agent Teams Equivalent  
**#12661** (32 comments, 110 👍) — The most-upvoted open feature request. Users want Claude Code-style Agent Teams for coordinated multi-agent workflows.

### 4. Google Stitch MCP fails repeatedly  
Three issues surfaced today on Stitch MCP: **#26529** (unresolved `$ref` in `outputSchema`), **#26382** (works via curl but OpenCode says "Failed to get tools"), and **#26260** (can't resolve `#/$defs/ScreenInstance`). The MCP tool schema parser is hitting a hard wall with complex JSON Schema.

### 5. `/exit` and `/quit` slash commands missing from autocomplete  
**#26549** (12 👍) — Commands exist in the command palette but won't autocomplete when typing `/` in the prompt. UX regression.

### 6. TUI config schema mismatch + leader `none` crash  
**#26628** — Schema says use `keymap`, but v1.14.46 rejects it. Using `keybinds` with `"leader": "none"` crashes to blank screen. Config is in a broken state.

### 7. Desktop shell tool uses minimal PATH vs CLI preserves zsh PATH  
**#26321** — macOS Desktop app sees only `/usr/bin:/bin:/usr/sbin:/sbin` while CLI sees full Homebrew PATH. Shell tools break silently in Desktop mode.

### 8. OpenRouter credit/`max_tokens` mismatch  
**#12219** — Users get "can only afford 0" errors when requesting high `max_tokens`. Confusing UX for free-tier model users.

### 9. Run loop continues on orphaned interrupted tools, causing 400 errors  
**#26177** — Aborting mid-tool leaves orphaned `tool_use` states. The run loop fires another LLM call, hitting "model does not support assistant message prefill" errors.

### 10. Desktop hits 5-minute Headers Timeout with slow local providers  
**#26602** — Custom timeout settings are ignored; OpenCode aborts slow local providers after exactly 5 minutes with "Headers Timeout Error".

---

## Key PR Progress

### 1. Add none thinking mode in DeepSeek v4  
**#26653** by `martinmr` — Adds a non-thinking variant for DeepSeek v4 models. Addresses the "overthinking" problem many users report.

### 2. Background code migration service  
**#26652** by `thdxr` — Adds a non-blocking post-startup migration service with JSON marker tracking. No SQL migration files, startup stays fast.

### 3. Fix Windows mapped network drive paths  
**#26649** by `jianlins` — Fixes `Z:\ → \\server\share\` path resolution. Critical for enterprise Windows users.

### 4. Track session usage totals  
**#26644** by `thdxr` — Stores session cost/token totals directly on the session row with backfill migration. Enables accurate billing and usage analytics.

### 5. Fix TUI session switch flicker  
**#26647** by `thdxr` — Preserves Solid store identities during workspace transition. Fixes the jarring flash when switching sessions.

### 6. Accept `keymap` alias, guard leader `none`, graceful unknown keys  
**#26641** by `kagura-agent` — Resolves the TUI config schema mismatch (#26628). Accepts both `keymap`/`keybinds`, prevents crash on `"leader": "none"`, gracefully warns on unknown keys.

### 7. Emit native LLM events from session stream  
**#26639** by `kitlangton` — Maps AI SDK `fullStream` events to native `LLMEvent` types. Moves session usage accounting to native structures. Architecture improvement.

### 8. Fix server: return diagnosable body for schema rejections  
**#26631** by `kitlangton` — Empty body 400 errors are now actionable. Triggered by a real Windows issue (corrupted DB row causing opaque failure).

### 9. Add super paste binding  
**#26634** by `swalker326` — Adds `super+v` (Cmd+V) as default paste binding alongside `ctrl+v` for macOS users.

### 10. Mobile Touch Optimization  
**#18767** by `noahbentusi` — Long-running PR optimizing the app for mobile/touch devices while preserving desktop experience. Still open since March.

---

## Feature Request Trends

The dominant feature requests cluster around four themes:

1. **Multi-agent orchestration** — The Agent Teams equivalent (#12661, 110 👍) is the top ask. Users want coordinated sub-agent workflows similar to Claude Code.

2. **Broader DBMS support** — Migration to Drizzle opens the door for PostgreSQL and other backends (#14212, 14 👍). Users want enterprise-grade state storage.

3. **Crash resilience & auto-recovery** — Session error storms, orphaned tool states, and server crashes (#26177, #26646) highlight demand for better error handling and automatic recovery mechanisms.

4. **Improved MCP UX** — Multiple issues (#26598, #25802) call for a simpler MCP server configuration UI, similar to Goose's approach. Configuring MCP is described as "so confusing."

---

## Developer Pain Points

- **Silent API removals** (#26557): The `api.command.*` removal with zero deprecation cycle eroded trust. Plugin developers want stable APIs and migration guides.
- **Config fragmentation**: The `keymap` vs `keybinds` schema mismatch (#26628, #26040) and undocumented config behaviors are wasting developer time.
- **MCP tool-loading fragility**: The JSON Schema parser chokes on `$ref` and `$defs` (#26529, #26260), breaking tools that work via `curl`. Pain point for Stitch integrations.
- **Path inconsistencies**: Desktop vs CLI PATH differences (#26321) and Windows mapped drive issues (#26649, PR) cause silent failures.
- **Timeout/retry gaps**: Custom timeout settings are ignored (#26602), and orphaned tool states trigger cascade errors (#26177)—core reliability concerns.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-10

## Today's Highlights
A major refactor wave is sweeping through the Pi codebase this week, with dozens of issues and PRs closed under `closed-because-refactor` tags. The org migration from `@mariozechner/pi-coding-agent` to `@earendil-works/pi-coding-agent` continues to cause friction, including breaking `pi update --self` and extension compatibility. Meanwhile, the community shipped notable infrastructure improvements, including NVIDIA NIM support, Fireworks prompt caching fixes, and Ollama context window auto-discovery.

## Releases
**No new releases in the last 24 hours.** The latest stable release remains v0.74.0 under the `@earendil-works/pi-coding-agent` package.

## Hot Issues

1. **[#4288](https://github.com/earendil-works/pi/issues/4288) — `npm install` and `pi update` fail to update Pi** (CLOSED)
   Users on v0.73.0 cannot update to v0.74.0 via either method, with the update notice incorrectly pointing to a stale changelog. The org package rename from `@mariozechner` to `@earendil-works` is likely the root cause.

2. **[#4290](https://github.com/earendil-works/pi/issues/4290) — Messages aborted for length treated as regular stops** (OPEN)
   A UX regression where users wait indefinitely for "Thinking..." without realizing the turn was silently stopped. Community discussion suggests the abort indicator needs better visibility.

3. **[#4251](https://github.com/earendil-works/pi/issues/4251) — Kimi K2.6 on OpenCode fails with "reasoning_content is missing"** (OPEN)
   Multi-provider reasoning support still has gaps. The error occurs after the first agent message, blocking any chain with reasoning enabled.

4. **[#4355](https://github.com/earendil-works/pi/issues/4355) — Core dump on `/resume`** (CLOSED)
   Memory pressure crash reaching ~4GB on resume, triggering Node.js mark-compact GC failures. A serious stability issue for long-running sessions.

5. **[#4344](https://github.com/earendil-works/pi/issues/4344) — 'xhigh' thinking effort level cannot be toggled via keyboard shortcuts** (CLOSED)
   The new 'xhigh' effort level appears in the UI but lacks keyboard shortcut support in the coding agent, breaking consistency for keyboard-first users.

6. **[#4362](https://github.com/earendil-works/pi/issues/4362) — `pi update --self` still uses old repo** (CLOSED)
   Despite the org migration, update commands resolve to the deprecated `@mariozechner` namespace. This breaks automated update workflows.

7. **[#4349](https://github.com/earendil-works/pi/issues/4349) — No explanation for org change** (CLOSED)
   Community frustration over the unannounced package namespace migration from `@mariozechner` to `@earendil-works`. Forces invasive extension changes with zero communication.

8. **[#4323](https://github.com/earendil-works/pi/issues/4323) — Wezterm with `enable_kitty_keyboard` breaks Esc key** (OPEN)
   Terminal compatibility issue where keyboard protocol extensions cause raw escape sequences to be printed instead of interpreted. Affects Wezterm users with modern keyboard config.

9. **[#4342](https://github.com/earendil-works/pi/issues/4342) — `ANTHROPIC_AUTH_TOKEN` env var leaks to non-Anthropic providers** (CLOSED)
   The Anthropic SDK auto-reads `ANTHROPIC_AUTH_TOKEN` and sends it alongside `x-api-key`, causing 401 errors for providers like Xiaomi MiMo that use the Anthropic API format.

10. **[#4346](https://github.com/earendil-works/pi/issues/4346) — OpenAI Codex provider stops respecting `https_proxy` since v0.72.0** (CLOSED)
    A regression in the `auto` transport selection breaks proxy compliance for corporate/restricted-network users. Bisected to the v0.72.0 release.

## Key PR Progress

1. **[#4363](https://github.com/earendil-works/pi/pull/4363) — Resolve slash commands by unambiguous prefix** (CLOSED)
   Allows `/ed` to match `/editor` as long as the prefix is unique. Closes issue #4364 and improves CLI ergonomics for custom commands with arguments.

2. **[#4360](https://github.com/earendil-works/pi/pull/4360) — Add NVIDIA NIM as built-in OpenAI-compatible provider** (CLOSED)
   Adds `"nvidia"` to `KnownProvider`, pointing to `https://integrate.api.nvidia.com/v1` with 67 tool-capable models. Expands first-class provider support significantly.

3. **[#4358](https://github.com/earendil-works/pi/pull/4358) — Fireworks session affinity for prompt caching** (CLOSED)
   Fixes cache misses on Fireworks serverless by adding `x-session-affinity` header. Reduces latency and costs for heavy users of cached prompts.

4. **[#4354](https://github.com/earendil-works/pi/pull/4354) — Respect proxy env vars in Bun's WebSocket** (OPEN)
   Workaround for Bun's `WebSocket` not respecting `https_proxy`/`http_proxy`. Manually sets proxy argument. Fixes issue #4346 for Bun users.

5. **[#4352](https://github.com/earendil-works/pi/pull/4352) — Fix turn-boundary compaction resume flow** (CLOSED)
   Critical fix for session persistence: compacts only when pending tool-result work is expected to continue, preventing premature compaction that leads to lost state on resume.

6. **[#4351](https://github.com/earendil-works/pi/pull/4351) — Auto-discover Ollama context windows from `/api/show`** (CLOSED)
   Replaces the hardcoded 128K default with per-model context detection via Ollama's API. Fixes wrong token budgets for models like `rnj-1:8b` (32K) and `deepseek-v4-pro` (1M+).

7. **[#4348](https://github.com/earendil-works/pi/pull/4348) — Add retries to Google Vertex AI** (CLOSED)
   Passes the `retry.provider.maxRetries` argument to the Vertex provider, addressing frequent random 429 errors with Gemini models.

8. **[#4347](https://github.com/earendil-works/pi/pull/4347) — Fix CJK text extraction and double-width cell handling** (CLOSED)
   Fixes cursor positioning and text selection for CJK characters in the terminal UI. Also reverts broken paste detection on Windows.

9. **[#4356](https://github.com/earendil-works/pi/pull/4356) — Pi Dart** (CLOSED)
   A new Dart language provider for Pi. Expands Pi's language ecosystem beyond its existing codebase.

10. **[#4341](https://github.com/earendil-works/pi/pull/4341) — Support X-Floodgate-Project-Token in genai-bridge mode** (CLOSED)
    Extends the Floodgate project token header support to Tier 1 (genai-bridge) routing, completing the Phase 72 project token rollout.

## Feature Request Trends

- **Enhanced parameter controls**: Users continue requesting finer-grained LLM generation parameters (temperature, top_p, top_k, max_tokens) beyond what custom providers can offer natively ([#1837](https://github.com/earendil-works/pi/issues/1837), revived after months).
- **Smart slash command matching**: Multiple issues and a merged PR indicate strong desire for prefix-based command matching, reducing keystrokes for power users.
- **Context window auto-detection**: The Ollama PR signals growing demand for dynamic model capability discovery rather than hardcoded defaults.
- **Extended proxy and network resilience**: Two PRs in one week address proxy support gaps, reflecting enterprise/restricted-network adoption.
- **Session persistence robustness**: Several issues and PRs target session compaction, resume crashes, and state management — a clear reliability focus from heavy users.

## Developer Pain Points

1. **Org migration chaos**: The silent `@mariozechner` → `@earendil-works` transition broke update workflows, extension paths, and user trust — with zero communication from maintainers.
2. **Memory-related crashes**: `/resume` core dumps at 4GB+ and GC-related failures are recurring pain points for users with long-running sessions.
3. **Proxy/network inconsistencies**: Proxy support degrades across versions and differs between Node.js and Bun runtimes, frustrating corporate users.
4. **Terminal compatibility regressions**: Keyboard protocol issues with Wezterm and bracketed paste on Windows indicate TUI testing gaps with modern terminals.
5. **Hidden aborts and silent failures**: Turns terminated for length, incomplete streams, and missing `toolResult` records all degrade user trust without clear error feedback.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-10

## Today’s Highlights
A flurry of 11 new issues from contributor **Maddock-DR** signals a strong community push toward multi-device profile sync, Skill packaging (`.skill.tar.gz`), and cross-tool configuration management. Meanwhile, two linked bug fixes PR #4002 aims to resolve the **long-standing “binary payload” false-positive** on `.cpp`/`.kt`/`.py` source files (issues #3964, #3945, #4004), and the new `qwen serve` daemon lands its Stage 1 HTTP+SSE endpoint.

---

## Releases
Three releases published in the last 24h:

- **`v0.15.9-nightly.20260510`** / **`v0.15.10-preview.0`** — Both include:
  - `fix(cli): validate /model command arguments` (@yiliang114)
  - `fix(core): log the OpenAI request actually sent on the wire` (@tanzhenxin)
- **`sdk-python-v0.1.0-preview.0`** — First Python SDK package published to PyPI as `qwen-code-sdk` (v0.1.0rc0). No detailed changelog.

---

## Hot Issues (10 selected)

1. **#4003** — `write_file` often misidentifies Markdown files as binary payload, forcing agent to fall back to shell. *2 comments, user frustration visible.*
2. **#4004** — `write_file` misidentifies UTF-8 Chinese+Markdown text as binary; `file` command confirms Unicode. *Community suspects overly conservative encoding detection.*
3. **#3964** — Encrypted `.c/.cpp/.h` files rejected as binary in v0.15.7+. *6 comments, reproduction steps confirm regression from 0.15.6.*
4. **#3945** — Deadlock between `edit` and `read_file`: `read_file` truncates large files, `edit` requires full read. *4 comments, a blocking usability bug for codebases >800 lines.*
5. **#4010** — `read_file` marks truncated large files (transiently) as binary, blocking subsequent `edit`. *Closed quickly but highlights systemic truncation problem.*
6. **#3914** — API connection succeeds but `fetch failed` on OpenRouter. *4 comments, Node.js v26 + win32.*
7. **#3730** — Agent auto-sends stop command without user input. *3 comments, users report regression from 0.15.7.*
8. **#3203** — **Top drama**: proposed OAuth free-tier cut from 1,000 to 100 requests/day. *123 comments — the most active thread, with heated community debate.*
9. **#4000** — Redesign `/commit` slash command using AI commit-message drafting. *2 comments, re-opened after PR #3935 was closed.*
10. **#4011-4018 (cluster)** — 8 issues by Maddock-DR proposing anti-sycophancy protocol, profile sync, MCP/HTTP server modes, encrypted storage, and export/import commands. *First visible community-driven feature suite.*

---

## Key PR Progress (10 selected)

1. **#4002** — `fix(core): unify Edit/WriteFile prior-read` — Fixes binary-payload false positives across `.cpp`, `.kt`, `.py`, `.ts` for issues #3964 + #3945. *Direct fix for top pain point.*
2. **#3981** — `fix(search): make empty-query exit synchronous and normalize Windows Backspace` — Fixes CI test failure on Windows for search mode.
3. **#3997** — `fix(core): improve runtime fetch options error handling` — Adds debugLogger warnings for silent proxy bypass; improves docs.
4. **#3889** — `feat(cli,sdk): qwen serve daemon (Stage 1)` — Implements HTTP+SSE daemon with health, capabilities, session CRUD, and SDK `DaemonClient`.
5. **#3980** — `fix(core): merge IDE context into user prompt` — Wraps editor context in `<system-reminder>` instead of separate `addHistory()` entry.
6. **#3974** — `fix(core): retry API request on model-unloaded errors` — Auto-retries with 2s delay when LM Studio unloads models due to inactivity.
7. **#3973** — `fix(cli): MCP add/remove now correctly persists headers and server deletions` — Critical persistence fix for SSE/HTTP servers.
8. **#3776** — `feat(installer): add standalone archive installation` — Code-server-style archives with checksum, rollback, and npm fallback.
9. **#3860** — `chore(deps): upgrade ink 6→7 + bump Node engine to 22` — No source changes, but paves way for React 19 & modern rendering.
10. **#3491** — `feat: add /diff command and git diff statistics utility` — Implements structured `git diff --numstat` parsing (closes #2997). *Merged.*

---

## Feature Request Trends

- **Cross-tool / multi-device profile sync** is the dominant theme this week (Issues #4011-#4018). Users want SOUL.md, Skills, and memory synchronized across machines, ideally with Git + encrypted storage.
- **Standardized Skill packaging format** (`.skill.tar.gz`) proposed as a distribution mechanism (#4014).
- **MCP Server mode** and **HTTP API Server mode** for exposing Qwen Code tools to external agents (Claude Desktop, Alibaba Bailian, etc.) — #4007, #4008.
- **Enhanced `web_fetch` resilience**: retry, timeout separation, proxy support (#4006).
- **JSON Schema-driven config validation** for `settings.json` (#4005).
- **`/commit` slash command redesign** using AI-generated commit messages (#4000).
- **Anti-sycophancy protocol** as core personality definition, based on Marc Andreessen’s prompt decompilation (#4011).
- **Daemon mode** (`qwen serve`) continues to attract interest — 24-chapter design series linked from #3803.

---

## Developer Pain Points

- **🔴 Binary-payload false positives** dominate bug reports: `.cpp`, `.kt`, `.md` (Chinese+Markdown), encrypted files, and truncated large files all trigger the same misleading error. *Issues #3964, #4003, #4004, #4010.*
- **Edit tool deadlock**: `read_file` truncation prevents `edit` from working on large files (#3945). Users forced to shell fallback.
- **API reliability**: “fetch failed” errors on OpenRouter (#3914), “Model stream ended without finish reason” (#3888), and model-unloaded retry gaps (#3974).
- **MCP persistence** — headers and server deletions not saved properly (#3973, now fixed).
- **Agent auto-stop regression** (#3730): agent sending stop command unprompted, blocking long-running tasks.
- **OAuth free-tier uncertainty** (#3203): 123 comments show community anxiety over pricing changes.
- **Cross-tool configuration isolation**: users maintain separate settings for Qwen Code, Claude Code, DeepSeek-TUI — lack of unified import/export (#4013, #4017).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*