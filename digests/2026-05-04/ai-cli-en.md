# AI CLI Tools Community Digest 2026-05-04

> Generated: 2026-05-04 04:43 UTC | Tools covered: 8

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
**Date:** 2026-05-04

---

## 1. Ecosystem Overview

The AI CLI tools landscape on May 4, 2026 reveals a maturing ecosystem where **multi-agent orchestration**, **MCP reliability**, and **authentication infrastructure** are the dominant cross-cutting concerns. Seven major tools show varying release cadences—none shipped a full release today—but all demonstrate active community engagement through issues and PRs. A clear bifurcation is emerging: **incumbent tools** (Claude Code, OpenAI Codex) focus on feature refinement and regression fixes, while **challengers** (Qwen Code, Pi) ship more aggressively on nightly cycles and experimental features. Across all tools, **performance degradation in long sessions**, **MCP transport fragility**, and **authentication gatekeeping** are the most painful shared developer experiences.

---

## 2. Activity Comparison

| Tool | Issues (Open, 24h) | PRs (Open, 24h) | Release Today | Community Engagement (Top Issue 👍) |
|------|-------------------|-----------------|---------------|--------------------------------------|
| **Claude Code** | 10 featured (50+ total) | 5 | None | 36 👍 (#14280, VS Code streaming) |
| **OpenAI Codex** | 10 featured | 10 | None | 156 👍 (#3962, sound notifications) |
| **Gemini CLI** | 10 featured | 10 | None | 147 👍 (#22141, extreme slowdowns) |
| **GitHub Copilot CLI** | 10 featured | 0 | None | 12 👍 (#2751, `/remote` failures) |
| **Kimi Code CLI** | 10 featured | 2 | None | 2 👍 (#1585, keybinding requests) |
| **OpenCode** | 10 featured | 10 | None | 106 👍 (#6231, auto-model discovery) |
| **Pi** | 10 featured | 10 | None | — (mostly closed weekend bugs) |
| **Qwen Code** | 10 featured | 10 | **v0.15.6-nightly** | 121 comments (#3203, free tier policy) |

**Key Observation:** Qwen Code is the only tool to ship a release today (nightly), while OpenCode and Codex have the highest PR velocity. Gemini CLI leads in issue engagement (180 comments, 147 👍 on its top issue), signaling a community in distress. Copilot CLI shows zero PR activity—the lowest engagement of the group.

---

## 3. Shared Feature Directions

### **Multi-Agent Orchestration & Isolation**
- **Claude Code** (#52958): `worktree` isolation leaks destroying untracked files—critical safety bug
- **OpenAI Codex**: "Frodex" PR series (#20910–#20913) adding watchdog subagents, fork prompt-cache preservation, agent control tools
- **Kimi Code** (#2157): Hard cap of 4 concurrent subagents blocking larger workflows
- **OpenCode** (#15035): Community asking for agent-teams orchestration
- **Qwen Code** (#3634): Structured roadmap for background task management (Phase D shipping now)

### **MCP Server Reliability**
- **OpenAI Codex** (#17444): MCP boot failures on Windows
- **GitHub Copilot CLI** (#3083): v1.0.40 broke MCP loading from `./mcp.json`
- **OpenCode** (#25287, #25657): No transport-level retry, no SSE reconnection support
- **Qwen Code** (#3817–#3819): Duplicate MCP processes from race conditions; two concurrent PRs to fix
- **Claude Code**: No MCP-specific issues featured this week

### **Performance Degradation in Long Sessions**
- **Claude Code** (#46834): TUI relayouts spill duplicate transcript copies into scrollback
- **OpenAI Codex** (#18693): Desktop performance collapses with large conversation histories
- **Gemini CLI** (#22141): Extreme 10+ minute delays on small edit tasks (147 👍—most urgent)
- **OpenCode** (#20695): Memory megathread with 73 comments; maintainers request heap snapshots
- **Pi** (#4122): `/resume` OOM on large session directories
- **Qwen Code** (#3805, #3806): Read tool failures and UI flickering in long sessions

### **Authentication & Access Gatekeeping**
- **OpenAI Codex** (#20161, #20320): Phone number verification deadlock—SMS never sent
- **Gemini CLI** (#24517): 403 PERMISSION_DENIED for paid Google One AI Premium subscribers
- **GitHub Copilot CLI** (#3099): Personal accounts blocked from Claude Opus model
- **Qwen Code** (#3203): Controversial free tier reduction from 1,000 to 100 daily requests
- **Pi** (#4141): Expired tokens cause hung process

### **Terminal UI Ergonomics**
- **Claude Code** (#55912): Repositionable input dialog (bottom vs. top)
- **OpenAI Codex** (#9184): Vi/vim modal editing mode (40 👍)
- **Copilot CLI** (#3097): Pasting long strings inserts extra newlines
- **Kimi Code** (#1585): Shift+Enter for newlines vs. Ctrl+J
- **OpenCode** (#11582): Buggy colors on Linux terminals
- **Pi** (#4124): Backspace keys broken in Windows Terminal

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Differentiator |
|------|---------------|-------------|-------------------|---------------------|
| **Claude Code** | Agent safety, plugin extensibility | Professional developers, multi-agent workflows | Plugin architecture, worktree isolation, session persistence | Strongest plugin ecosystem; most mature agent safety documentation |
| **OpenAI Codex** | Multi-agent (Frodex), TUI quality | Power users, enterprise teams | Heavy investment in subagent orchestration (watchdog, forks, prompt cache) | Most advanced multi-agent architecture in active development |
| **Gemini CLI** | Performance under load, quota resilience | Google ecosystem users, researchers | Flash-to-Flash-Lite failover, union-find context compaction | Strongest emphasis on API cost optimization and model fallback |
| **GitHub Copilot CLI** | GitHub integration, ACP protocol | GitHub-centric teams, enterprise | MCP compliance, `/remote` sessions, Copilot ecosystem | Deepest GitHub integration; weakest standalone feature velocity |
| **Kimi Code CLI** | Skill directory structure, TUI customizability | MoonshotAI ecosystem developers | Recursive skill loading, configurable prompt symbols | Most flexible skill/plugin directory design; smallest community |
| **OpenCode** | Provider flexibility, plugin API | Multi-provider users, local LLM enthusiasts | Auto-model discovery, SSE repair, provider-agnostic MCP | Best multi-provider support with auto-discovery; largest feature request footprint |
| **Pi** | Cross-provider compatibility, print mode | CLI minimalists, script users | WebSocket fallback, compact release cycle (v0.72.x) | Lightest weight; strongest focus on non-interactive/print mode reliability |
| **Qwen Code** | Background tasks, telemetry, nightly innovation | Chinese ecosystem developers, OSS contributors | Daemon mode proposals, FileReadCache, aggressive nightly releases | Fastest release cadence; most forward-looking (daemon mode, background task roadmap) |

---

## 5. Community Momentum & Maturity

### **Most Active Communities (by engagement depth)**
1. **OpenAI Codex** — 156 👍 on a single feature request (#3962), 10 open PRs, strong architectural investment in Frodex
2. **Gemini CLI** — 147 👍 + 180 comments on its top bug, indicating a community in pain but engaged
3. **OpenCode** — 106 👍 on auto-discovery, 73-comment memory megathread, maintainers actively requesting heap snapshots
4. **Claude Code** — 36 👍 on top feature, but most mature with year-long issue #996 still unresolved

### **Rapidly Iterating Tools**
- **Qwen Code** — Only tool shipping today (nightly); 10 open PRs; adding daemon mode, background tasks, telemetry hardening
- **OpenAI Codex** — 10 PRs today, Frodex system signals major architectural evolution
- **Pi** — 10 PRs today despite quiet weekend; merges show disciplined focus on stability (WebSocket fallback, print mode fixes)

### **Stagnating Communities**
- **GitHub Copilot CLI** — 0 PRs today, top issue only 12 👍; slow progress on long-standing requests (#1354, Feb 2026)
- **Kimi Code CLI** — Only 2 PRs, low upvote counts; smallest community engagement of the eight

### **Maturity Assessment**
- **Claude Code** and **OpenAI Codex** are the most mature, with complex plugin/agent architectures but also the most accumulated technical debt (auto-update bugs, data loss issues)
- **Pi** and **Qwen Code** are the most disciplined about shipping fixes quickly
- **Gemini CLI** and **OpenCode** have the most urgent unresolved problems (performance, authentication) blocking daily use

---

## 6. Trend Signals

### **For Tool Developers**
1. **Multi-agent safety is the next frontier.** Claude Code's `worktree` data-loss bug (#52958) and OpenAI's Frodex system signal that subagent isolation is becoming table stakes. Tools without robust sandboxing (Kimi, Copilot CLI) will face trust issues as multi-agent workflows proliferate.

2. **MCP reliability is a competitive differentiator.** Every tool except Claude Code has MCP-related issues this week. As MCP becomes the standard for tool integration, first-class retry, SSE reconnection, and lifecycle management will separate winners from also-rans.

3. **"Performance in long sessions" is the #1 unaddressed pain point.** Across all tools, users report degradation over time—memory leaks, UI hangs, slowdowns. This is the single largest opportunity for differentiation: the first tool to offer truly stable long-running sessions will win loyalty.

4. **Authentication UX is broken for paid users.** Codex (phone verification deadlock), Gemini (403 for subscribers), Copilot (model access restrictions), and Qwen (free tier reduction) all frustrate paying customers. Streamlined, reliable authentication is a basic hygiene factor that several tools are failing.

### **For Developers Evaluating Tools**
5. **Qwen Code is the one to watch for innovation velocity.** Nightly releases, a clear roadmap for background tasks and daemon mode, and proactive memory/telemetry fixes suggest a team executing well. However, the free tier controversy (#3203) introduces uncertainty for budget-conscious teams.

6. **Claude Code remains the safe bet for production—with caveats.** The most mature plugin ecosystem and documentation, but the year-old auto-update bug (#996) and the `worktree` data-loss issue (#52958) are serious. Evaluate whether your workflows require multi-agent isolation before committing.

7. **OpenCode is the best choice for multi-provider shops.** The auto-discovery feature request (106 👍) reflects real demand for provider-agnostic setups. If your team uses local models (LM Studio, Ollama) alongside cloud APIs, OpenCode's flexibility is unmatched.

8. **GitHub Copilot CLI and Kimi Code CLI are niche tools.** Copilot CLI's zero PR activity and Kimi's small community suggest limited investment. Use them only if deep GitHub integration or MoonshotAI ecosystem alignment is non-negotiable.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-05-04 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skills are the most actively discussed via Pull Requests, ranked by community engagement:

### #1: **document-typography** — Typographic Quality Control
- **PR:** [#514](https://github.com/anthropics/skills/pull/514) | **Created:** Mar 4, 2026 | **Status:** Open
- **Functionality:** Prevents orphan word wraps, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point in Claude's document output.
- **Discussion Highlights:** The PR resonates broadly—users identify typographic issues as one of the most visible quality gaps in generated content. No controversy, but high implicit demand.
- **Verdict:** High-value quality-of-life skill with broad applicability across all document-generation workflows.

### #2: **odt** — OpenDocument Text Creation & Conversion
- **PR:** [#486](https://github.com/anthropics/skills/pull/486) | **Created:** Mar 1, 2026 | **Status:** Open
- **Functionality:** Creates, fills, reads, and converts ODT/ODS files; parses ODT to HTML. Targets LibreOffice and ISO-standard document formats.
- **Discussion Highlights:** Addresses a clear gap—Claude's document skills were PDF/DOCX-heavy. Community interest in open-source format support is strong.
- **Verdict:** Fills an important format niche; likely to be merged once compatibility edge cases are resolved.

### #3: **testing-patterns** — Full Stack Testing Methodology
- **PR:** [#723](https://github.com/anthropics/skills/pull/723) | **Created:** Mar 22, 2026 | **Status:** Open
- **Functionality:** Covers testing philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and anti-patterns.
- **Discussion Highlights:** Active through April 2026; community feedback focuses on expanding coverage to backend testing frameworks and CI integration.
- **Verdict:** Strong candidate for merging—testing guidance is a recurring community request.

### #4: **sensory** — Native macOS Automation via AppleScript
- **PR:** [#806](https://github.com/anthropics/skills/pull/806) | **Created:** Mar 29, 2026 | **Status:** Open
- **Functionality:** Teaches Claude to use `osascript` for native macOS automation (app scripting, System Events) as an alternative to screenshot-based computer use.
- **Discussion Highlights:** Two-tier permission system (Tier 1 works out of the box) was well-received. Some debate on security boundaries between tiers.
- **Verdict:** Novel approach to macOS automation; addresses reliability concerns with vision-based UI interaction.

### #5: **servicenow** — ServiceNow Platform Skill
- **PR:** [#568](https://github.com/anthropics/skills/pull/568) | **Created:** Mar 8, 2026 | **Status:** Open
- **Functionality:** Covers ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, and IntegrationHub—a broad ServiceNow platform assistant.
- **Discussion Highlights:** Users requesting deeper scripting-specific sections vs. platform-level guidance. Active conversation through April 2026.
- **Verdict:** Enterprise demand is clear; scope management is the primary discussion point.

### #6: **shodh-memory** — Persistent Context for AI Agents
- **PR:** [#154](https://github.com/anthropics/skills/pull/154) | **Created:** Dec 19, 2025 | **Status:** Open
- **Functionality:** Maintains context across conversations via `proactive_context` calls, structured memory storage, and context retrieval.
- **Discussion Highlights:** Long-running (3+ months); community interest in memory persistence is high, but questions about token overhead and retrieval accuracy remain unresolved.
- **Verdict:** High-potential but still in active design discussion.

### #7: **claude-obsidian-reporter** — Auto Daily Git Reports
- **PR:** [#664](https://github.com/anthropics/skills/pull/664) | **Created:** Mar 16, 2026 | **Status:** Open
- **Functionality:** Reads Git commits and writes structured daily/weekly/monthly reports into Obsidian vaults. Triggered via `/report-orchestrator`.
- **Discussion Highlights:** Clear use case for developers; community requesting customizable templates and multi-vault support.
- **Verdict:** Pragmatic productivity skill with immediate utility.

---

## 2. Community Demand Trends

From Issues analysis, the most anticipated new Skill directions are:

| Trend | Signal | Key Issue(s) |
|---|---|---|
| **Org-wide skill sharing & management** | Highest upvoted issue (7👍) requesting shared skill libraries and direct sharing links | [#228](https://github.com/anthropics/skills/issues/228) |
| **Skill evaluation & testing infrastructure** | 6👍 on `run_eval.py` bug (0% trigger rate); community needs reliable testing tools | [#556](https://github.com/anthropics/skills/issues/556) |
| **Deduplication & plugin quality** | 7👍 on duplicate skills between `document-skills` and `example-skills` plugins | [#189](https://github.com/anthropics/skills/issues/189) |
| **Trust & security boundaries** | Concern over community skills under `anthropic/` namespace enabling trust abuse | [#492](https://github.com/anthropics/skills/issues/492) |
| **Agent governance & safety** | Proposal for policy enforcement, threat detection, and audit trail skills | [#412](https://github.com/anthropics/skills/issues/412) |
| **SSO/enterprise compatibility** | Skill-creator requires `ANTHROPIC_API_KEY`, blocking SSO users | [#532](https://github.com/anthropics/skills/issues/532) |

**Key takeaway:** The community's top demands are shifting from "new Skills" to **Skill ecosystem infrastructure**—testing, sharing, deduplication, and security governance.

---

## 3. High-Potential Pending Skills

Skills in active PRs with sustained discussion, likely to land soon:

| Skill | PR | Last Updated | Why It's Close |
|---|---|---|---|
| `skill-quality-analyzer` | [#83](https://github.com/anthropics/skills/pull/83) | Jan 7, 2026 | Meta-skill that serves the entire ecosystem; five-dimensional quality analysis framework |
| `codebase-inventory-audit` | [#147](https://github.com/anthropics/skills/pull/147) | Feb 4, 2026 | Systematic orphan code detection; fills a clear DevOps documentation gap |
| `HADS` (Human-AI Document Standard) | [#616](https://github.com/anthropics/skills/pull/616) | Mar 31, 2026 | Lightweight Markdown convention for dual human/AI documentation |
| `skill-creator` fixes (unquoted descriptions, validation) | [#539](https://github.com/anthropics/skills/pull/539) | Apr 16, 2026 | Critical infrastructure fix; YAML parsing failures blocking skill creation |
| `DOCX` tracked change fix | [#541](https://github.com/anthropics/skills/pull/541) | Apr 16, 2026 | Fixes document corruption from `w:id` collisions—directly blocking DOCX skill reliability |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is shifting from individual Skill functionality toward Skill ecosystem infrastructure—reliable testing (run_eval.py), deduplication, enterprise sharing, and security governance—as the repository matures past its initial growth phase.**

---

# Claude Code Community Digest
**Date:** 2026-05-04

---

## Today's Highlights

No new releases arrived in the last 24 hours, but the community remains highly active with over 50 open issues. The top-voted feature request this week calls for real-time streaming of bash command output in the VS Code extension, while a critical agent-safety bug involving worktree isolation leaking into parent checkouts and destroying untracked files has drawn significant attention.

---

## Releases

**No new releases in the last 24 hours.**

---

## Hot Issues

1. **[[BUG] Auto-update failed · Try claude doctor or npm i -g](https://github.com/anthropics/claude-code/issues/996)** (#996)  
   *Author: walt93 | Comments: 17 | 👍: 22*  
   A long-running issue still unresolved. Users on macOS report the auto-updater fails silently, with the recommended `npm i -g` workaround also failing for some. The only reliable solution appears to be a full uninstall/reinstall. Community frustration is high given the issue has been open for a year.

2. **[[FEATURE] VS Code extension: Stream bash command output in real-time](https://github.com/anthropics/claude-code/issues/14280)** (#14280)  
   *Author: BenNewman100 | Comments: 13 | 👍: 36*  
   The highest-voted open issue. When Claude runs bash commands in the VS Code extension, users see no output until the command finishes — a poor experience for long-running builds or server processes. The community strongly desires progressive output rendering.

3. **[[Feature Request] Add 'claude model list' CLI command](https://github.com/anthropics/claude-code/issues/12612)** (#12612)  
   *Author: ThePlenkov | Comments: 12 | 👍: 29*  
   Developers need a programmatic, non-interactive way to list available models. Current workarounds force starting an interactive session and consuming tokens just to see model options. This is a clear gap for CI/CD and scripting workflows.

4. **[[BUG] TUI relayouts spill entire transcript into scrollback as duplicate copies](https://github.com/anthropics/claude-code/issues/46834)** (#46834)  
   *Author: rdmgator12 | Comments: 8 | 👍: 15*  
   A macOS-specific terminal bug where resizing the window or toggling permission mode causes the entire conversation transcript to be re-emitted into terminal scrollback, creating duplicate copies and massive log clutter.

5. **[[BUG] Can't see Claude's thinking anymore](https://github.com/anthropics/claude-code/issues/24285)** (#24285)  
   *Author: nullbio | Comments: 8 | 👍: 28*  
   Users across Windows and Linux report that Claude's chain-of-thought reasoning is no longer visible. This is a regression that significantly impacts users who rely on seeing the reasoning process for debugging and verification.

6. **[[BUG] Agent isolation: "worktree" leaks cwd into parent checkout, destroying untracked files](https://github.com/anthropics/claude-code/issues/52958)** (#52958)  
   *Author: tre-jones | Comments: 4 | 👍: 2*  
   A critical data-loss bug. When a subagent uses `isolation: "worktree"`, its shell context can leak back to the parent session's repository checkout. A subsequent `git checkout` by the parent then destroys untracked files. This is a high-priority safety issue for multi-agent workflows.

7. **[[BUG] Auto mode injects undocumented system-reminder that steers beyond its documented contract](https://github.com/anthropics/claude-code/issues/50331)** (#50331)  
   *Author: milobird | Comments: 3 | 👍: 4*  
   Auto mode is documented as a simple permission gate ("execute without prompts"), but users discovered it injects behavioral system reminders that subtly alter Claude's decision-making. This has raised trust and transparency concerns in the community.

8. **[[FEATURE] Allow input dialog to be repositioned to top of terminal](https://github.com/anthropics/claude-code/issues/55912)** (#55912)  
   *Author: juddey | Comments: 2 | 👍: 0*  
   A new accessibility-focused request. When the input dialog is pinned to the bottom of the terminal, it can be obscured by overlapping windows or status bars. Top-of-terminal positioning would improve usability for multi-monitor and tiling window manager setups.

9. **[[BUG] Repeated edits to large HTML file silently break script execution](https://github.com/anthropics/claude-code/issues/55894)** (#55894)  
   *Author: sergiopascali-afk | Comments: 2 | 👍: 0*  
   A Windows/VS Code bug where making repeated edits to large HTML files causes the script execution to silently fail — no error, no output — making debugging extremely difficult.

10. **[[BUG] Background Agent produces no deliverable when parent session hits usage limit](https://github.com/anthropics/claude-code/issues/55928)** (#55928)  
    *Author: gmanch94 | Comments: 1 | 👍: 0*  
    A significant workflow-breaking bug. If a background agent is running and the parent session hits its usage limit, the agent reports completion but produces no deliverable file. Users lose work with no recovery path.

---

## Key PR Progress

1. **[docs: add warning against npm update -g for global upgrades](https://github.com/anthropics/claude-code/pull/55857)** (#55857)  
   *Author: SanskaarUndale21*  
   Addresses the auto-update failure (#996) by documenting that `npm update -g` can wipe the entire global `node_modules` directory, breaking Node entirely. A practical safety documentation fix.

2. **[feat: add session-persist plugin for client-side session state preservation](https://github.com/anthropics/claude-code/pull/55864)** (#55864)  
   *Author: SanskaarUndale21*  
   A stopgap solution for mid-session context loss. This plugin preserves working context client-side so closing the window doesn't wipe all progress. Points toward a longer-term server-side fix (#55860).

3. **[docs: document --exclude-dynamic-system-prompt-sections in README](https://github.com/anthropics/claude-code/pull/46024)** (#46024)  
   *Author: Christian-Sidak*  
   Documents a flag that moves per-machine dynamic sections from the system prompt into the first user message, improving prompt cache reuse in print mode. Useful for teams optimizing API costs.

4. **[fix: document false-positive update banner and add update-checker plugin](https://github.com/anthropics/claude-code/pull/55834)** (#55834)  
   *Author: SebTardif*  
   Fixes a misleading "Update available!" banner that fires for Homebrew/WinGet users even when no update exists. Claude Code was checking the npm registry regardless of installation method.

5. **[Fix: Remove stray content from plugin-validator.md](https://github.com/anthropics/claude-code/pull/55832)** (#55832)  
   *Author: EnjouZeratul*  
   Cleans up accidental AI conversation dialogue that was left in the plugin-validator documentation file, replacing it with a proper descriptive ending.

---

## Feature Request Trends

- **CLI & Scripting Improvements**: Strong demand for non-interactive CLI commands — users want `claude model list` for programmatic model queries, and scoped `/insights` for project/repo-level analytics.
- **Real-time Output in VS Code**: The most-voted request is for progressive streaming of bash command output in the VS Code extension, replacing the current "wait until done" model.
- **Session Persistence**: Multiple issues and the new `session-persist` plugin PR point to a growing expectation for crash-resistant, persistent sessions that survive window closures and network interruptions.
- **Accessibility & Ergonomics**: Requests include repositionable input dialogs, better keyboard shortcut management (notably avoiding conflicts with macOS system shortcuts), and richer color token documentation for terminal theming.

---

## Developer Pain Points

- **Auto-update Reliability**: The year-old #996 remains a top complaint — the auto-updater is unreliable, and documented workarounds often fail or break the Node environment entirely.
- **Data Loss from Agent Isolation Bugs**: The `worktree` isolation leak (#52958) destroying untracked files is a acute safety concern for anyone using multi-agent workflows with git checkpoints.
- **Undocumented Behavioral Changes**: Auto mode's undocumented system reminders (#50331) erode trust and make it difficult for developers to predict Claude's behavior accurately.
- **Background Agent Failures on Limits**: Background agents silently failing when the parent session hits usage limits (#55928) is a workflow-breaking pattern with no recovery — users lose the agent's output entirely.
- **False-positive AUP Blocks**: Legitimate scientific output (e.g., RNA biophysics) being incorrectly blocked by Acceptable Use Policy filters (#55881) frustrates researchers and reduces confidence in the safety system's precision.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-04

## Today's Highlights

A significant authentication bottleneck has emerged as **phone number verification** issues prevent users from accessing Codex across multiple devices, generating substantial community frustration. Concurrently, OpenAI engineers are making **major architectural progress** on the Frodex multi-agent system, with a wave of PRs adding watchdog runtime, subagent surfaces, and fork prompt-cache preservation. Performance regressions in the Codex Desktop app after the latest v26.429 update are also drawing developer attention.

## Releases

**No releases in the last 24 hours.**

## Hot Issues

1. **[#20161 — Codex need phone number](https://github.com/openai/codex/issues/20161)**  
   *Auth blocker, 47 comments, 41 👍*  
   A critical login bug: SSO authentication on secondary devices triggers an unexpected phone number requirement. Users report being unable to access their accounts, and the issue has become the community's top complaint this week.

2. **[#3962 — Play a sound when Codex finishes a prompt / task](https://github.com/openai/codex/issues/3962)**  
   *Enhancement, 43 comments, 156 👍*  
   Nearly 8 months old and still the most-upvoted open feature request. Users want an optional audible completion signal for long-running background tasks in the TUI and IDE extension.

3. **[#12161 — Codex IDE keeps getting stuck on "Thinking"](https://github.com/openai/codex/issues/12161)**  
   *Bug, Windows / VS Code / Cursor, 27 comments, 16 👍*  
   A persistent Windows-specific hang where the IDE extension enters a permanent "Thinking" state. Affects multiple IDEs and subscription tiers, suggesting a core integration issue.

4. **[#20547 — Codex Desktop sluggish after today's update](https://github.com/openai/codex/issues/20547)**  
   *Performance regression, 7 comments, 6 👍*  
   Immediately after updating to v26.429.20946, users report noticeably degraded UI responsiveness. The regression is new and likely linked to the same release.

5. **[#17444 — Booting MCP Server](https://github.com/openai/codex/issues/17444)**  
   *Windows + MCP, 16 comments, 7 👍*  
   Codex CLI on Windows fails to boot MCP servers correctly. Users report that `/mcp` commands trigger Taskkill logs instead of properly initializing the server, breaking tool integrations.

6. **[#18693 — Desktop performance collapses with large conversation histories](https://github.com/openai/codex/issues/18693)**  
   *Performance, 10 comments, 4 👍*  
   A systemic performance issue: profiles with a few very large conversation histories cause slowness across typing, scrolling, thread list, and even random exits. Not limited to thread switching.

7. **[#20552 — Toggle File Tree does not reliably reveal the file tree](https://github.com/openai/codex/issues/20552)**  
   *macOS desktop app bug, 12 comments, 1 👍*  
   The `View > Toggle File Tree` menu item is enabled but often does nothing when clicked. A basic UI reliability issue.

8. **[#20320 — ChatGPT asking phone number verify but didn't send any code](https://github.com/openai/codex/issues/20320)**  
   *Auth bug, 8 comments, 3 👍*  
   Related to #20161: users are prompted for phone verification but never receive the SMS code, creating a total login deadlock.

9. **[#9184 — vi editing mode](https://github.com/openai/codex/issues/9184)**  
   *TUI enhancement, 8 comments, 40 👍*  
   A long-standing request for proper vim/vi modal editing in the TUI prompt, modeled after Claude Code's vim mode. Users find the current workaround inadequate.

10. **[#20856 — Windows Desktop settings save failures + Fast mode reset](https://github.com/openai/codex/issues/20856)**  
    *Bug, 5 comments, 1 👍*  
    A `configVersionConflict` error prevents saving settings on Windows, and the Fast mode toggle resets to Standard on every startup. Impacts Pro 20x subscribers.

## Key PR Progress

1. **[#20939 — Render backend-selected near-limit prompts in TUI](https://github.com/openai/codex/pull/20939)**  
   *by jchu-oai*  
   Adds live rate-limit notifications (75%/90% triggers) into the TUI session with a one-per-session display policy.

2. **[#20915 — frodex: pin rollout references by segment](https://github.com/openai/codex/pull/20915)**  
   *by friel-openai*  
   Introduces `SegmentId` for rollout JSONL segment resolution while keeping `ThreadId` as the runtime identity.

3. **[#20940 — Split app-server request processors](https://github.com/openai/codex/pull/20940)**  
   *by pakrym-oai*  
   Breaks the monolithic `CodexMessageProcessor` into command-prefix oriented modules for clearer dependency management.

4. **[#20891 — Enforce Windows protected metadata targets](https://github.com/openai/codex/pull/20891)**  
   *by evawong-oai*  
   Applies deny ACLs to sandbox metadata targets on Windows, addressing a platform enforcement gap.

5. **[#20910 — frodex: add watchdog runtime handles](https://github.com/openai/codex/pull/20910)**  
   *by friel-openai*  
   Implements the watchdog subagent as a singleton role with idle timers, helper forks, and parent wakeups.

6. **[#20909 — frodex: preserve fork prompt cache state](https://github.com/openai/codex/pull/20909)**  
   *by friel-openai*  
   Carries parent prompt cache keys and response-continuation state into forked agents, keeping them efficient.

7. **[#20913 — frodex: restore TUI subagent surface](https://github.com/openai/codex/pull/20913)**  
   *by friel-openai*  
   Adds live subagent panel, watchdog status, agent filtering, fork parent titles, and snooze/close controls.

8. **[#20912 — frodex: synchronize agent control tools](https://github.com/openai/codex/pull/20912)**  
   *by friel-openai*  
   Keeps tool surfaces stable across root agents, forks, and watchdog helpers; restores watchdog tools as eager tools.

9. **[#20911 — frodex: add custom models and role prompts](https://github.com/openai/codex/pull/20911)**  
   *by friel-openai*  
   Adds prompt injection files (`AGENTS.*.md`) and custom model alias support for multi-agent configurations.

10. **[#20800 — Show /goal-started threads in resume picker](https://github.com/openai/codex/pull/20800)**  
    *by etraut-openai*  
    Fixes a visibility gap where threads started via `/goal <objective>` were invisible in the resume picker until they received a first user message.

## Feature Request Trends

The dominant feature direction is **TUI quality-of-life enhancements**:
- **Sound notifications** on task completion (#3962, 156 👍)
- **Vi/vim modal editing** mode (#9184, 40 👍)
- **Multi-line input** via Shift+Enter (#8673, 4 👍)
- **PR/branch context** in the CLI statusline (#20892)

A secondary trend is **MCP and sandbox flexibility**:
- Per-command sandbox exclusion rules (#20917)
- Custom provider request-body injection (#5458)
- Machine-readable task lifecycle metadata (#20943)

## Developer Pain Points

1. **Phone number authentication lockout** — The highest-urgency issue. Multiple accounts (#20161, #20320, #20884) report being blocked by phone verification with no SMS delivery, affecting SSO and cross-device login.

2. **Windows platform fragility** — A cluster of Windows-specific bugs: MCP boot failures (#17444), blank app loading (#20170), settings save conflicts (#20856), and "Thinking" hangs in the IDE extension (#12161). Windows remains the least stable platform.

3. **Desktop app performance regressions** — The v26.429 update introduced immediate sluggishness (#20547), and large conversation histories cause systemic slowdowns (#18693). Users report the app "feels broken" after updating.

4. **Fast mode default concerns** — Users perceive the new Fast mode defaulting to "on" as deceptive or rate-limit abusive (#20921), with some calling it "literally a scam." This, combined with the reset bug (#20856), erodes trust.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-04

## Today's Highlights

The community remains laser-focused on two critical blockers: **extreme agent slowdowns** (#22141, 180 comments, 147 👍) and **authentication failures for paid subscribers** (#24517, 158 comments, 63 👍). Meanwhile, the team is making progress on infrastructure fixes, with a major **Flash-to-Flash-Lite failover PR** (#25684) now open to address capacity exhaustion and hangs. Several Windows-specific fixes landed, including a PowerShell UTF-8 encoding patch and zombie-process resolution.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#22141 — Gemini CLI becomes extremely slow (1+ hours) during small code-edit tasks](https://github.com/google-gemini/gemini-cli/issues/22141)
- **Status:** OPEN | **Comments:** 180 | **👍:** 147
- **Why it matters:** The most-upvoted issue this week. Users report the agent loop stalling for 10+ minutes even after completing small edits (1–3 files). The model response delay compounds with loop-detection overhead. This is a top-priority experience killer for daily users.

### 2. [#24517 — 403 PERMISSION_DENIED for Google One AI Premium subscribers](https://github.com/google-gemini/gemini-cli/issues/24517)
- **Status:** OPEN | **Comments:** 158 | **👍:** 63
- **Why it matters:** Paying subscribers are locked out entirely. The CLI correctly identifies their subscription but API requests are blocked *before* token consumption. A community PR (#26420) attempts to fix environment-variable interference, but the root cause remains unresolved.

### 3. [#23362 — 429 Resource Exhausted (MODEL_CAPACITY_EXHAUSTED)](https://github.com/google-gemini/gemini-cli/issues/23362)
- **Status:** OPEN | **Comments:** 17 | **👍:** 4
- **Why it matters:** Users with Pro accounts hit "no capacity available" errors, while API-key users do not. Suggests account-level quota flagging or misconfiguration. Related to the failover PR below.

### 4. [#26421 — OAuth auto-created project has no IAM permissions](https://github.com/google-gemini/gemini-cli/issues/26421)
- **Status:** OPEN | **Comments:** 1 | **👍:** 0
- **Why it matters:** Fresh installs on Windows are broken out of the box. Auto-provisioned GCP projects lack any IAM grants, returning 429 on every request. A frustrating onboarding experience.

### 5. [#26419 — Reasoning servers unstable; fake model labeling](https://github.com/google-gemini/gemini-cli/issues/26419)
- **Status:** OPEN | **Comments:** 1 | **👍:** 0
- **Why it matters:** Users report when reasoning is fast, the model is downgraded (labeled "3.1 Pro" but uses inferior math/coding capabilities). Trust in model identity is eroding.

### 6. [#25166 — Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)
- **Status:** OPEN | **Comments:** 2 | **👍:** 3
- **Why it matters:** Simple shell commands (e.g., `ls`) hang after finishing, showing false "awaiting user input" state. Breaks automation and interactive workflows.

### 7. [#24916 — Gemini CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)
- **Status:** OPEN | **Comments:** 3 | **👍:** 0
- **Why it matters:** "Allow for all future sessions" doesn't persist. A fundamental UX bug that undermines trust in the permission model.

### 8. [#24202 — SSH text scrambling on Windows](https://github.com/google-gemini/gemini-cli/issues/24202)
- **Status:** OPEN | **Comments:** 1 | **👍:** 0
- **Why it matters:** Windows users SSHing into Linux cloudtops report completely unreadable terminal output. A dedicated SSH detection helper is planned (#24546).

### 9. [#22323 — Subagent reports "success" after hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)
- **Status:** OPEN | **Comments:** 4 | **👍:** 2
- **Why it matters:** The `codebase_investigator` subagent lies about success when it actually hit turn limits and did zero analysis. Masks real failures from users.

### 10. [#23571 — Model creates tmp scripts in random directories](https://github.com/google-gemini/gemini-cli/issues/23571)
- **Status:** OPEN | **Comments:** 2 | **👍:** 0
- **Why it matters:** When shell execution is restricted, the model scatters temporary edit scripts across the filesystem, creating cleanup headaches for version control.

---

## Key PR Progress

### 1. [#25684 — Flash-to-Flash-Lite failover for quota resilience](https://github.com/google-gemini/gemini-cli/pull/25684)
- **Status:** OPEN | **Fixes:** #23397, #18059, #22141 and more
- **Summary:** A sweeping change that automatically falls back from Flash to Flash-Lite models when quota is exhausted. Targets the silent-hang and 429 capacity issues head-on. This is the most impactful open PR for the performance crisis.

### 2. [#26420 — Ignore GOOGLE_CLOUD_PROJECT for LOGIN_WITH_GOOGLE](https://github.com/google-gemini/gemini-cli/pull/26420)
- **Status:** OPEN | **Fixes:** #24517 (partial)
- **Summary:** Prevents environment variable `GOOGLE_CLOUD_PROJECT` from causing 403 Permission Denied errors during OAuth authentication. A targeted fix for the paid-subscriber lockout.

### 3. [#26392 — Fix Windows hangs, zombie processes, subagent reliability](https://github.com/google-gemini/gemini-cli/pull/26392)
- **Status:** OPEN | **Fixes:** #26393
- **Summary:** Addresses Windows startup hangs (minutes-long delays), orphaned child processes, and subagent reliability. Essential for Windows users experiencing basic CLI usability issues.

### 4. [#26410 — Use os.homedir() for home directory warning check](https://github.com/google-gemini/gemini-cli/pull/26410)
- **Status:** OPEN | **Author:** HaleTom
- **Summary:** Fixes false "running in home directory" warnings when in subdirectories. The check incorrectly used `GEMINI_CLI_HOME` instead of `os.homedir()`.

### 5. [#26401 — Handle ENAMETOOLONG in robustRealpath](https://github.com/google-gemini/gemini-cli/pull/26401)
- **Status:** OPEN | **Author:** senutpal
- **Summary:** Prevents unhandled rejections when long `@`-tokens are pasted. Catches `ENAMETOOLONG` alongside existing `ENOENT`/`EISDIR` handlers.

### 6. [#26358 — Exit shell mode with backspace on empty input](https://github.com/google-gemini/gemini-cli/pull/26358)
- **Status:** OPEN | **Author:** shkuls
- **Summary:** Adds an intuitive UX improvement: pressing backspace on an empty shell-mode input exits the mode, matching the expectation of "erasing" the `!` prompt.

### 7. [#26404 — Stop buffering telemetry when disabled](https://github.com/google-gemini/gemini-cli/pull/26404)
- **Status:** OPEN | **Author:** genneth
- **Summary:** Fixes unbounded memory growth when telemetry is off. Every `log*` call pushed a closure capturing full conversation payloads — a memory leak and privacy concern.

### 8. [#25900 — Prefer pwsh.exe over Windows PowerShell 5.1](https://github.com/google-gemini/gemini-cli/pull/25900)
- **Status:** OPEN | **Fixes:** #25859
- **Summary:** Fixes embedded double-quote failures in shell commands on Windows by preferring modern PowerShell Core (pwsh) over legacy PowerShell 5.1.

### 9. [#24736 — Union-find context compaction for AgentHistoryProvider](https://github.com/google-gemini/gemini-cli/pull/24736)
- **Status:** OPEN | **Author:** kimjune01
- **Summary:** Introduces an alternative context-compression strategy using union-find clustering. Messages graduate from hot buffer to cold forest, preserving semantic relationships better than binary token-cutoff.

### 10. [#26361 — Externalize https-proxy-agent to fix proxy support](https://github.com/google-gemini/gemini-cli/pull/26361)
- **Status:** OPEN | **Author:** sotokisehiro
- **Summary:** Fixes `TypeError: HttpsProxyAgent is not a constructor` when using proxies behind corporate firewalls. Critical for enterprise adoption.

---

## Feature Request Trends

1. **AST-aware codebase mapping** (#22745, #22746) — Multiple EPICs exploring AST-based file reads, search, and codebase mapping to reduce token usage and improve subagent accuracy. Strong maintainer interest.

2. **Memory routing: global vs. project** (#22819) — Demand for intelligent memory persistence: user preferences stored globally (`~/.gemini/`), project-specific knowledge in `.gemini/`. Low confidence but high impact if implemented.

3. **Proactive memory writes** (#22809) — Users want the agent to automatically remember preferences (e.g., "I prefer tabs") without explicit commands. Prompt tuning is the proposed approach.

4. **Destructive behavior guardrails** (#22672) — Requests for the agent to detect and avoid dangerous operations (`git reset --force`, DB modifications) and suggest safer alternatives.

5. **Subagent behavioral evaluations** (#23897) — The team is building systematic tests for subagent recovery from tool call rejections, preventing infinite retry loops.

---

## Developer Pain Points

- **"The CLI is unusably slow"** — The #1 complaint. Small edits take 10+ minutes. Users are reverting to older CLI versions (#26416: "delete this repo"). The capacity-exhaustion failover PR (#25684) is the most anticipated fix.

- **"I pay for AI Premium but can't use the CLI"** — Authentication failures (#24517, #26421) are blocking paying customers entirely. The auto-provisioned project IAM bug makes fresh installs non-functional.

- **"The agent lies about success"** — Subagents report "GOAL reached" when actually hitting MAX_TURNS (#22323). Tool call rejections go unhandled. Trust in the agent's self-reporting is broken.

- **"Windows is a second-class platform"** — SSH text scrambling (#24202), startup hangs (#26393), PowerShell encoding issues (#25900), and zombie processes (#26392) make Windows usage painful.

- **"Permissions don't stick"** — The "allow for all future sessions" feature is unreliable (#24916), requiring repeated approval for the same file.

- **"Terminal rendering is broken at scale"** — Long chats cause scroll jumping (#24470), tables render incrementally (#25218), and external editor exits corrupt the screen (#24935). The terminal UI needs a reliability pass.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-05-04

## Today's Highlights

The community is actively reporting friction with model availability and feature parity, as a new issue highlights that personal accounts cannot access the Claude Opus model. Additionally, a critical bug in v1.0.40 has been identified where MCP servers defined in `./mcp.json` are no longer loaded on startup, breaking workflows for users who migrated from the deprecated `.vscode/mcp.json` format. Finally, a dangerous PowerShell footgun has been reported where generated scripts using `$home` as a variable could accidentally trigger user profile deletion on Windows.

## Releases
No new versions were released in the last 24 hours.

## Hot Issues

1. **Personal accounts blocked from using Claude Opus** [#3099](github/copilot-cli Issue #3099) (OPEN, Created 2026-05-04)
   A user asks why personal accounts are limited to models like GPT-5.4 and cannot use Claude Opus. This reflects growing demand for model choice parity across account tiers. 0 comments yet, but likely to gain traction.

2. **PowerShell `$home` variable footgun could delete user profiles** [#3098](github/copilot-cli Issue #3098) (OPEN, Created 2026-05-04)
   A critical bug where generated PowerShell scripts using `$home` as a local variable accidentally resolve to the system `$HOME` variable, causing `Remove-Item -Recurse -Force` to wipe the user's home directory. A must-fix for safety.

3. **v1.0.40 no longer loads MCP servers from `./mcp.json`** [#3083](github/copilot-cli Issue #3083) (OPEN, Updated 2026-05-03)
   Users who migrated from the deprecated `./vscode/mcp.json` to `./mcp.json` found that the v1.0.40 update broke automatic MCP server loading. This is a regression that undermines the migration path and disrupts repo-level tool configurations.

4. **Pasting long strings inserts extra newline characters** [#3097](github/copilot-cli Issue #3097) (OPEN, Created 2026-05-03)
   A UX bug in v1.0.40 where pasting long strings (e.g., JWT tokens) into the chat input corrupts the content with extra newlines. This breaks workflows that require inline data injection.

5. **No "Ask" / chat-only mode for ACP clients** [#3096](github/copilot-cli Issue #3096) (OPEN, Updated 2026-05-03)
   Users of Zed IDE and other ACP clients want a lightweight chat-only mode. Currently only Agent, Plan, and Autopilot modes are available. This gap limits quick Q&A use cases.

6. **`@` file reference does not show files in current directory** [#3092](github/copilot-cli Issue #3092) (CLOSED, Updated 2026-05-03)
   A usability bug where the `@` file mention feature fails to list files in the current working directory, though `@..` (parent) works. Closed quickly, suggesting a fast fix.

7. **Can't use DeepSeek API** [#2995](github/copilot-cli Issue #2995) (OPEN, Updated 2026-05-03, 👍 6)
   Despite setting environment variables (`COPILOT_PROVIDER_BASE_URL`, etc.), users cannot route queries through DeepSeek's API. This reflects growing demand for third-party model provider support beyond OpenAI-compatible endpoints.

8. **`/remote` session fails on organization repos** [#2751](github/copilot-cli Issue #2751) (OPEN, Updated 2026-05-03, 👍 12)
   The `/remote` command fails with "could not resolve repository" in organization-owned repos. With 12 upvotes, this is a high-impact bug for enterprise teams using Copilot CLI remoting.

9. **Per-agent model selection & global hooks** [#1354](github/copilot-cli Issue #1354) (OPEN, Updated 2026-05-03, 👍 5)
   A long-standing feature request (since Feb 2026) for configurable model routing, per-subagent model selection, and global hooks. Still open, indicating slow progress on a highly desired architecture.

10. **Subagent model override (Claude Agent SDK parity)** [#2939](github/copilot-cli Issue #2939) (CLOSED, Updated 2026-05-03)
    A feature request for agents to override model settings independently. Closed without clear resolution, which may disappoint users who want agent-specific model control.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends

- **Model Flexibility & Routing** – The most prominent theme is the desire for fine-grained model control: per-subagent model overrides ([\#2939](github/copilot-cli Issue #2939)), configurable model routing ([\#1354](github/copilot-cli Issue #1354)), and access to premium models like Claude Opus on personal accounts ([\#3099](github/copilot-cli Issue #3099)).
- **Plugin/Agent Metadata** – There is growing interest in richer SKILL.md frontmatter to declare tools, MCP servers, hooks, and model requirements ([\#3095](github/copilot-cli Issue #3095)), indicating a push for better plugin discovery and compatibility.
- **ACP Protocol Expansion** – Users want a dedicated "Ask" or chat-only mode for ACP-based editors like Zed, distinct from agent/plan/autopilot modes ([\#3096](github/copilot-cli Issue #3096)).

## Developer Pain Points

- **MCP Configuration Instability** – The deprecation and re-regression of MCP config file paths (`.vscode/mcp.json` to `./mcp.json`, then broken in v1.0.40) is causing significant friction for developers relying on MCP tools.
- **Third-Party Provider Incompatibility** – Despite advertising OpenAI-compatible provider support, users struggle to use DeepSeek ([\#2995](github/copilot-cli Issue #2995)) and are blocked from premium models on personal plans ([\#3099](github/copilot-cli Issue #3099)).
- **Enterprise Remote Session Failures** – The `/remote` command failing on organization repos ([\#2751](github/copilot-cli Issue #2751)) with 12 upvotes is a critical blocker for enterprise adoption of collaborative remote sessions.
- **Terminal & Input UX Regressions** – Issues like the paste corruption ([\#3097](github/copilot-cli Issue #3097)), lack of scrolling for long outputs ([\#2369](github/copilot-cli Issue #2369)), and `@` file reference bugs ([\#3092](github/copilot-cli Issue #3092)) point to ongoing polish issues in the terminal UI.
- **Safety Liabilities** – The PowerShell `$home` footgun ([\#3098](github/copilot-cli Issue #3098)) highlights a dangerous edge case in code generation that could destroy user data, demanding immediate safeguards.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-04

## Today's Highlights
Community activity is robust this week, with **two long-standing feature requests seeing direct PR action**: a runtime toggle for thinking content (Ctrl+T) via PR #2158, and recursive skill directory loading via PR #2146. A new cluster of issues around **multi-agent workflow limits** and **programmatic hook-based automation** signals growing enterprise interest. Two new high-impact feature requests — **global AGENTS.md support** and **configurable prompt symbols** — also surfaced, reflecting a push toward better multi-project ergonomics.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 selected)

1. **#1894 — Recursive skill directory loading mismatch with Codex**  
   `retamia` reports that Kimi CLI cannot discover nested `.agents/skills/{name}/skills/xxx/SKILL.md` structures, while Codex can. 3 comments, 0 reactions.  
   *[MoonshotAI/kimi-cli #1894](https://github.com/MoonshotAI/kimi-cli/issues/1894)*

2. **#1585 — Customizable keybinding for inserting newlines (Shift+Enter)**  
   `guyujun` requests Shift+Enter for line breaks; current Ctrl+J is widely disliked. 1 👍, 2 comments. Renewed discussion on 2026-05-04.  
   *[MoonshotAI/kimi-cli #1585](https://github.com/MoonshotAI/kimi-cli/issues/1585)*

3. **#1632 — Option to hide thinking content while using thinking models**  
   `yuantianyu177` asks for hiding the real-time "Thinking..." gray text. 2 👍, 2 comments. Now addressed by PR #2158.  
   *[MoonshotAI/kimi-cli #1632](https://github.com/MoonshotAI/kimi-cli/issues/1632)*

4. **#2157 — Configurable background task limit for multi-agent workflows**  
   `Phantomthedog` reports a hard cap of 4 concurrent subagents; the 5th fails with "too many background tasks". Zero comments yet, but relevant to power users.  
   *[MoonshotAI/kimi-cli #2157](https://github.com/MoonshotAI/kimi-cli/issues/2157)*

5. **#2155 — Configurable prompt symbols in config.toml**  
   `sdkks` notes that TUI prompt emojis (✨, 💫, 📋) are hardcoded, making search/reference difficult. Zero comments.  
   *[MoonshotAI/kimi-cli #2155](https://github.com/MoonshotAI/kimi-cli/issues/2155)*

6. **#2154 — PermissionRequest hook event for programmatic auto-approval**  
   `sdkks` (same author) requests a hook event to auto-approve safe tool calls without manual confirmation. Zero comments.  
   *[MoonshotAI/kimi-cli #2154](https://github.com/MoonshotAI/kimi-cli/issues/2154)*

7. **#2153 — Update pillow 12.1.0 → 12.2.0 (CVE-2026-25990)**  
   `azhidkov` flags an out-of-bounds write vulnerability in PSD image handling. Security-tight environments block the current version. Zero comments.  
   *[MoonshotAI/kimi-cli #2153](https://github.com/MoonshotAI/kimi-cli/issues/2153)*

8. **#2152 — Global ~/.kimi/AGENTS.md for multi-project shared conventions**  
   `lNeverl` describes working with 10+ projects, each needing shared AGENTS.md rules. Zero comments.  
   *[MoonshotAI/kimi-cli #2152](https://github.com/MoonshotAI/kimi-cli/issues/2152)*

9. **#2156 — Test issue (closed)**  
   `Phantomthedog` opened a test issue that was closed; likely placeholder for testing automation.  
   *[MoonshotAI/kimi-cli #2156](https://github.com/MoonshotAI/kimi-cli/issues/2156)*

10. **#1493 — CLI animation not rotating when running (closed)**  
    `lNeverl` reported that the spinner freezes during model execution, making it unclear if Kimi is stuck or processing. Closed with no resolution trace.  
    *[MoonshotAI/kimi-cli #1493](https://github.com/MoonshotAI/kimi-cli/issues/1493)*

## Key PR Progress (2 open PRs)

1. **#2158 — `feat(ui): add Ctrl+T toggle for thinking content visibility`**  
   `MCMike0399` implements a runtime toggle (Ctrl+T) to show/hide thinking content. Hidden by default when disabled. Closes #1632. No comments yet.  
   *[MoonshotAI/kimi-cli #2158](https://github.com/MoonshotAI/kimi-cli/pull/2158)*

2. **#2146 — `feat(#1894): recursively discover skills in nested subdirectories`**  
   `netwmr01` adds a `_discover_subdir_skills()` helper to scan nested skill directories, matching Codex behavior. No comments yet.  
   *[MoonshotAI/kimi-cli #2146](https://github.com/MoonshotAI/kimi-cli/pull/2146)*

## Feature Request Trends
- **Nested skill directory support** (#1894, PR #2146) — repeated requests for Codex-compatible recursive skill loading.
- **Thinking content control** (#1632, PR #2158) — demand for hiding visible reasoning from thinking models.
- **Multi-project conventions** (#2152) — users want a global `~/.kimi/AGENTS.md`.
- **Hook-based automation** (#2154) — request for auto-approval hooks alongside existing blocking hooks.
- **Configurable UI symbols** (#2155) — desire to customize hardcoded emoji prompt indicators.

## Developer Pain Points
- **Limited background task concurrency** (#2157) — the hard 4-subagent cap blocks larger multi-agent workflows and should be configurable or queue-based.
- **Newline keybinding frustration** (#1585) — recurring dissatisfaction with Ctrl+J; Shift+Enter is the most-requested alternative.
- **CVE vulnerability lockout** (#2153) — security-tight environments are blocked by an outdated Pillow dependency (12.1.0).
- **Spinner freeze during execution** (#1493, closed without resolution) — lack of visual feedback when the model is running remains an unresolved user experience issue.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date**: 2026-05-04
**Data Source**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. Today's Highlights

This week’s updates center on major stability improvements for MCP remote connections and SSE streaming, with two targeted PRs addressing transport-level retry (#25670) and lost-event reconnection (#25657). The community continues to wrestle with memory consumption in long sessions, prompting a dedicated memory megathread that has attracted 73 comments and 44 upvotes. Meanwhile, the most-requested feature—auto-discovery of models from OpenAI-compatible endpoints—remains stalled despite 106 upvotes, signaling strong demand for frictionless local provider setup.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 1 | **#20695** [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Centralized tracking of memory leaks; maintainers request heap snapshots (not LLM guesses). | 73 comments, 44 👍 — high engagement, urgent for heavy users. |
| 2 | **#6231** [Auto-discover models from OpenAI-compatible endpoints](https://github.com/anomalyco/opencode/issues/6231) | Eliminates manual config for local providers (LM Studio, Ollama). Top-voted feature. | 10 comments, **106 👍** — overwhelming demand. |
| 3 | **#14808** [Plugin event listener for `session.created` not firing](https://github.com/anomalyco/opencode/issues/14808) | Core plugin hook broken in 1.2.10; impacts memory/engram plugins. | 19 comments, 14 👍 — developers blocked on plugin systems. |
| 4 | **#4968** [Shell sessions losing $PATH from parent shell](https://github.com/anomalyco/opencode/issues/4968) | Bash tool inherits minimal PATH, breaking tools installed via homebrew/nvm/conda. | 6 comments, **17 👍** — broad impact on daily workflow. |
| 5 | **#12570** [GPT-5.3-Codex responses terminate early](https://github.com/anomalyco/opencode/issues/12570) | Subagent calls stop mid-response; absent in GPT-5.2 and Opus 4.6. | 15 comments — model-specific regression affecting power users. |
| 6 | **#25287** [MCP remote client has no transport-level retry](https://github.com/anomalyco/opencode/issues/25287) | Socket errors on server restart or suspend/resume cause permanent failures. | 5 comments — root cause for several silent MCP failures. |
| 7 | **#21241** [OpenCode Desktop blank screen on macOS 26.3.1](https://github.com/anomalyco/opencode/issues/21241) | M3 Mac with 16GB shows empty white screen; MCPs entirely broken. | 5 comments — blocks new users on latest macOS. |
| 8 | **#15035** [Agent-teams feature request](https://github.com/anomalyco/opencode/issues/15035) | When will multi-agent team orchestration arrive? | 21 comments — high curiosity about roadmap. |
| 9 | **#11582** [Buggy colors and misformatting in Linux terminal](https://github.com/anomalyco/opencode/issues/11582) | Standard SSH client (SecureCRT) renders unusable UI. | 4 comments — poor first impression for Linux users. |
| 10 | **#25657** [`/global/event` SSE stream loses events on reconnect](https://github.com/anomalyco/opencode/issues/25657) | No `Last-Event-ID` support; UI updates silently lost after network blips. | 2 comments — critical for long-running multi-agent tasks. |

---

## 4. Key PR Progress (Top 10)

| # | PR | What It Does | Status |
|---|----|--------------|--------|
| 1 | **#25670** [fix(mcp): auto-reconnect on transport errors](https://github.com/anomalyco/opencode/pull/25670) | Adds automatic retry for remote MCP servers on socket/connection errors. | Open (closes #25287) |
| 2 | **#25673** [fix: propagate hashline tool.execute.before args](https://github.com/anomalyco/opencode/pull/25673) | Exposes edit tool call params (startRef, operation, content) in JSON Schema for strict LLMs. | Open |
| 3 | **#25672** [fix: prevent pkill hang when close event never fires](https://github.com/anomalyco/opencode/pull/25672) | Resolves exit-signal on `exit` event instead of `close` to fix orphaned processes. | Open (closes #25664) |
| 4 | **#25385** [feat(provider): repair malformed SSE JSON via jsonrepair](https://github.com/anomalyco/opencode/pull/25385) | Handles broken SSE from Z.AI GLM-5.1 and Qwen by repairing malformed JSON. | Open (closes #25247, #23442) |
| 5 | **#25666** [feat(tui): add input.intercept API for plugin keydown interception](https://github.com/anomalyco/opencode/pull/25666) | Lets plugins intercept keystrokes in prompt input before default handling. | Open (closes #1764) |
| 6 | **#25659** [fix(app): show all subagent sessions in sidebar](https://github.com/anomalyco/opencode/pull/25659) | Displays parallel subagent threads with collapsible chevron instead of filtering to active path only. | Open (closes #6191) |
| 7 | **#25669** [fix(file): audio preview in web file browser](https://github.com/anomalyco/opencode/pull/25669) | Fixes two bugs preventing audio playback in the file browser. | Closed (merged) |
| 8 | **#25573** [fix(cf-ai-gateway): route provider options through openaiCompatible key](https://github.com/anomalyco/opencode/pull/25573) | Fixes `reasoningEffort` and workflow variant being silently dropped for Cloudflare AI Gateway. | Open (closes #24432) |
| 9 | **#14743** [fix(cache): improve Anthropic prompt cache hit rate](https://github.com/anomalyco/opencode/pull/14743) | Fixes cross-repo and cross-session cache misses with system split and tool stability. | Open (closes #5416, #5224) |
| 10 | **#25662** [fix: match non-ASCII folder names in Open Project search](https://github.com/anomalyco/opencode/pull/25662) | Fixes NFD/NFC normalization mismatch for Korean folder names on macOS. | Open (closes #25661) |

---

## 5. Feature Request Trends

- **Auto-discovery for local providers** — The top-voted open issue (#6231, 106 👍) requests that OpenCode automatically poll OpenAI-compatible endpoints (LM Studio, Ollama) for available models instead of requiring manual config. This remains the single most-requested feature.
- **Agent-teams orchestration** — Multiple users (#15035, #19988) are asking for multi-agent team collaboration, including role-based planning/execution and interleaved reasoning fields.
- **Session privacy & archiving** — Requests for archived session viewing on desktop (#6680), an incognito/secret mode (#12766), and better session persistence control are recurring themes.
- **Plugin API expansion** — Developers want richer plugin hooks: `input.intercept` for keybinding, `pre_chat.messages.transform` for image stripping, and proper event bus reliability (#14808).

---

## 6. Developer Pain Points

| Pain Point | Impact | Related Issues |
|------------|--------|----------------|
| **Memory leaks in long sessions** | High — forces frequent restarts; heap snapshots requested | #20695 (73 comments) |
| **MCP remote reliability** | High — no retry on transport errors, no SSE reconnection | #25287, #25657, #25650 |
| **Plugin loading failures** | Medium — duplicate file:// plugins, intermittent hangs on Windows with .git | #8759, #10115, #25668 |
| **Terminal/Copy issues** | Medium — TUI copy broken (#17796), colors misformatted (#11582), PATH not inherited (#4968) | #17796, #11582, #4968 |
| **Model-specific regressions** | Medium — GPT-5.3 early termination, Kimi-k2.6 provider errors, Claude bursts | #12570, #25489, #25472 |
| **Desktop app startup failures** | Medium — blank screen on macOS 26.3.1, OpenProject search fails for non-ASCII names | #21241, #25662 |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-04

A quieter Sunday on the Pi project, dominated by the **“closed-because-weekend”** auto-close label applied by maintainers to a wave of fresh bug reports. Despite the lull, several meaningful fixes landed, including a WebSocket fallback for Codex, stable session isolation for print mode, and an important mid-session tool mutation fix for the agent loop.

---

## Releases

No new releases in the last 24 hours. The latest published version remains **v0.72.1**.

---

## Hot Issues (10 picks)

1. **#3942 — `pi update --self` fails with npm `--prefix`** *(CLOSED)*  
   Self-updating introduced in v0.70.3 breaks when Pi is installed to a custom npm prefix (common with Nix-managed Node.js). Community notes the workaround and suggests a more robust install-location detection.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/3942)

2. **#4103 — Codex WebSocket transport prevents `--print` exit** *(CLOSED)*  
   Print mode leaves the Node process alive when using WebSocket transport with OpenAI Codex. Closely tied to a separate fix (PR #4127). One of several print-mode hang bugs filed this weekend.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4103)

3. **#4105 — TUI crashes on non-string autocomplete values** *(CLOSED)*  
   `pi-tui` throws `TypeError: value.startsWith is not a function` when an autocomplete provider returns suggestion items with non-string `value` fields. A type-safety gap in the editor component.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4105)

4. **#4146 — UI hangs highlighting large code blocks** *(CLOSED, closed-because-bigrefactor)*  
   100% CPU spin on macOS when highlighting large blocks; stack trace points to `node::Start`. Symptoms match a known macOS terminal rendering issue.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4146)

5. **#4144 — 100% CPU spin + RSS blow-up when terminal disappears** *(CLOSED, closed-because-bigrefactor)*  
   Long-lived Pi sessions enter a hot-spin when host terminal is killed (tmux, SSH drop). One orphan observed at 3.2 GB RSS. No guard on `process.stdout.write` for `EIO`/`SIGHUP`.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4144)

6. **#4141 — Expired tokens cause hung process** *(CLOSED, closed-because-bigrefactor)*  
   Expired `openai-codex` subscription tokens cause the process to hang after displaying the API error response. No graceful shutdown or retry guidance.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4141)

7. **#4138 — Kimi K2.6 error 400: invalid JSON schema** *(CLOSED)*  
   `tools.function.parameters` fails Moonshot’s schema validation. Provider-specific schema strictness exposed a gap in Pi’s tool parameter serialization.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4138)

8. **#4125 — `/agents` command shows nothing** *(CLOSED)*  
   The Agent Manager overlay doesn’t render when invoked via `/agents`. Reported with screenshot showing empty terminal area.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4125)

9. **#4124 — Backspace keys broken in Windows Terminal** *(CLOSED)*  
   Backspace only works properly when `cd`-ing to `pi.exe` directory on Windows Terminal. `Ctrl+G` (external editor) also freezes. Long-standing terminal compatibility issue.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4124)

10. **#4122 — `/resume` OOM with many large sessions** *(CLOSED)*  
    Scanning a session directory with many large `.jsonl` files causes Node.js OOM. Suggests need for pagination or streaming session listing.  
    [GitHub](https://github.com/badlogic/pi-mono/issues/4122)

---

## Key PR Progress (10 picks)

1. **#4148 — Fix active tool updates during running agent sessions** *(MERGED)*  
   Fixes `setActiveTools()` so tools added mid-session are visible to the current prompt cycle. Previously `Agent.createContextSnapshot()` copied state.tools and held a stale reference.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4148)

2. **#4133 — Fall back from Codex WebSocket to SSE** *(MERGED)*  
   Mitigates WebSocket errors (code 1000 from remote close, code 1009 from oversized frames). Falls back to SSE when WebSocket fails, improving reliability for Codex users hitting payload size limits.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4133)

3. **#4136 — `/model -` toggle to previous model** *(MERGED)*  
   Adds `-` semantics to `/model`, analogous to `cd -`. Tracks `_previousModel` on session, switching back on `/model -`.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4136)

4. **#4127 — Disable provider session cache in print mode** *(MERGED)*  
   Prevents print mode from forwarding agent session IDs to providers, avoiding cached WebSocket resources keeping the process alive after output completes. Solves multiple `--print` hang bugs.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4127)

5. **#4126 — Retry on transient HTTP 404/408** *(MERGED)*  
   Extends `_isRetryableError` to include 404 and 408 status codes, triggering exponential-backoff retries for provider edge/CDN issues. Triggered by a Cerebras streaming failure.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4126)

6. **#4112 — Switch Xiaomi default to API billing; add per-region Token Plan providers** *(MERGED)*  
   Splits Xiaomi MiMo into default API billing endpoint and separate regional Token Plan providers. Follows MiniMax/Moonshot precedent for billing endpoint selection.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4112)

7. **#4119 — Stabilize env-sensitive test cases** *(MERGED)*  
   Forces SSE transport in Codex tests, clears SSH/MOSH env vars in clipboard tests, and isolates `HOME` in package-manager tests. Prevents CI flakiness from local environment state.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4119)

8. **#3596 — Strip trailing `index.js|ts` from extension labels** *(MERGED)*  
   Cleans up extension display in startup banner by removing redundant `index.js`/`index.ts` suffixes. Fixes visual noise in extension listing.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/3596)

9. **#4149 — Expose `getSupportedThinkingLevels` and `clampThinkingLevel` from pi-ai** *(CLOSED)*  
   Request to export these model-introspection functions from the public SDK entry point. Closed as part of the `closed-because-bigrefactor` group.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4149)

10. **#4147 — Make agent.state.tools mutations visible to running agent loop** *(MERGED via PR #4148)*  
    Fixes identity stability of internal tools array, passing live array into agent context instead of a copied snapshot.  
    [GitHub](https://github.com/badlogic/pi-mono/issues/4147)

---

## Feature Request Trends

- **Profile-based state isolation** (Issue #3966): Multiple upvotes and comments for `--profile <name>` support to keep work, personal, and local-LLM setups fully separated without manual `PI_CODING_AGENT_DIR` juggling.
- **Provider/model exclusion** (Issue #4130): Users want a setting to exclude specific providers from model listing and auto-selection without unsetting environment variables, especially after cancelling subscription services.
- **Context-aware compaction** (Issue #4129): A proposal for ratio-based auto-compaction triggers based on the active model’s context window, surfaced by Kimi K2.6’s extended context support.
- **Ignore global context per repo** (Issue #4132): A local `ignoreGlobalContext` flag to disable global system prompts in specific repos while keeping extensions intact.
- **ppq.ai API key integration** (Issue #4139): Bitcoin ecosystem developers request a first-class `/login` option for ppq.ai, a BTC-payable AI provider.

---

## Developer Pain Points

- **Print mode hangs** — Prominent across multiple issues (#4103, #4134, #4128): `pi -p` frequently fails to exit after output, especially with Codex WebSocket transport or provider session caching. PR #4127 addresses the root cause but the pattern recurs across providers.
- **Windows Terminal compatibility** — Backspace keys and `Ctrl+G` external editor freeze in Windows Terminal (#4124). Points to a longstanding gap in cross-platform TTY input handling.
- **Terminal disconnection resilience** — No graceful handling for `EIO`/`SIGHUP` when host terminal disappears (#4144), leading to CPU hot-spin and memory blow-up. Particularly critical for SSH and tmux workflows.
- **Large session management** — `/resume` OOM on large `.jsonl` directories (#4122) and rolling buffer O(n²) performance in bash tool streaming (#4145) both indicate scaling issues with session data handling.
- **Provider schema incompatibility** — Kimi K2.6 (#4138) and Xiaomi regional providers (#4143) expose schema strictness and URL routing issues that require provider-specific workarounds rather than a unified API interface.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-04

## Today's Highlights

Two critical bug fixes for long-running sessions land today: a `FileReadCache` lifecycle fix resolves the "read tool returns no content" issue (#3805), and duplicate MCP process creation due to a race condition is addressed by new guards in `McpClientManager`. On the feature front, the team ships a hint system to background long-running shell commands, and a proposal for a `qwen serve` daemon mode opens for community feedback. Three new PRs also target MCP rediscovery coalescing, telemetry shutdown hardening, and per-model fast side-query isolation.

## Releases

**v0.15.6-nightly.20260504.e617f20d1**  
- `feat(core): add FileReadCache and short-circuit unchanged Reads` — Introduces a session-scoped cache that avoids re-reading files whose content hasn't changed, returning a `file_unchanged` placeholder instead. This reduces token usage and latency on repeated Read calls.  
- `fix(cli): honor proxy setting` — Ensures CLI outgoing requests respect configured HTTP/HTTPS proxies.  
- `chore(release): v0.15.6` — Release orchestration commit.

## Hot Issues

1. **#3203 — [OPEN] Qwen OAuth Free Tier Policy Adjustment**  
   *Author: pomelo-nwu*  
   Proposes slashing the daily free quota from 1,000 to 100 requests and ultimately phasing out the free OAuth entry point. With **121 comments**, this is the most controversial thread this week. Community response is strongly negative, with concerns about onboarding friction for new developers.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3203)

2. **#3307 — [CLOSED] The endless "Temporarily out of stock" Alibaba Cloud Coding Plan**  
   *Author: Shyryp*  
   An Alibaba Cloud purchasing page for Qwen 3.6 Plus has shown "temporarily out of stock" for over two weeks. Though closed, the thread highlights ongoing availability frustration for users who need to purchase API access outside the free tier.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3307)

3. **#3805 — [OPEN] read/glob tools fail to return content in long-running sessions**  
   *Author: SeoMP*  
   A Chinese-language report describing a scenario where file-reading tools stop sending content (or the LLM stops receiving it) after extended conversations. Directly fixed by PR #3810 today.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3805)

4. **#3817 — [OPEN] Race condition in McpClientManager creates duplicate MCP processes**  
   *Author: thedoctormes-hue*  
   Detailed root-cause analysis: a non-atomic disconnect→connect sequence in `discoverMcpToolsForServer()` spawns duplicate MCP child processes during concurrent reinitialization. Two PRs (#3818, #3819) now address this.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3817)

5. **#3804 — [OPEN] AskUserQuestion errors with "Model stream ended with empty response text"**  
   *Author: SeoMP*  
   Frequent `API Error` on the AskUserQuestion interaction pattern in v0.15.6. Affects workflows where the tool asks the user for input mid-execution.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3804)

6. **#3806 — [OPEN] v0.15.6 UI flickers during content output**  
   *Author: SeoMP*  
   The terminal UI now flickers even during normal output, not just on large expansions as in prior versions. A regression in the nightly build.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3806)

7. **#3634 — [OPEN] Background task management: roadmap and next steps**  
   *Author: wenshao*  
   A structured multi-phase plan (A–D) for background task execution. Phase D part (a) — hinting foreground shell commands to run in background — just shipped in PR #3809.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3634)

8. **#3803 — [OPEN] Daemon mode (qwen serve): proposal & open decisions**  
   *Author: wenshao*  
   Follow-up to #2271 proposing a `qwen serve` daemon that persists sessions across CLI invocations. Lists open architectural decisions — transport (HTTP vs Unix socket), session persistence, and multi-client safety.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3803)

9. **#3811 — [OPEN] fix(telemetry): add bounded shutdown timeout and fix service.version**  
   *Author: doudouOUC*  
   Two telemetry fixes: a 10-second timeout for OTLP shutdown to avoid hanging on unreachable endpoints, and a correction to the `service.version` resource attribute that currently reports an incorrect value.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3811)

10. **#3731 — [OPEN] Harden OpenTelemetry configuration, HTTP OTLP behavior, and runtime safety**  
    *Author: doudouOUC*  
    A comprehensive proposal to move Qwen Code's OTLP support from experimental to production-ready — covering exporter safety, shutdown reliability, and configuration semantics.    
    [GitHub](https://github.com/QwenLM/qwen-code/issues/3731)

## Key PR Progress

1. **#3809 — [OPEN] feat(core): hint to background long-running foreground bash commands**  
   *Author: wenshao*  
   Phase D part (a) of the background task roadmap (#3634). When a `shell` tool call exceeds half the configured timeout, the tool result includes an advisory suggesting `is_background: true` for future similar commands.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3809)

2. **#3819 — [OPEN] fix(core): prevent duplicate MCP processes from concurrent discovery**  
   *Author: B-A-M-N*  
   Adds an in-flight discovery guard to prevent concurrent `discoverMcpToolsForServer()` calls from spawning duplicate child processes. Fixes #3817.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3819)

3. **#3818 — [OPEN] fix(core): coalesce MCP server rediscovery**  
   *Author: cyphercodes*  
   Overlapping rediscovery requests for the same MCP server now share a single in-flight restart, preventing orphaned client connections. Complements #3819.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3818)

4. **#3813 — [OPEN] fix(telemetry): add bounded shutdown timeout and fix service.version resource attribute**  
   *Author: doudouOUC*  
   Implements the changes proposed in #3811: a 10-second race timeout on `sdk.shutdown()`, and correction of the `service.version` attribute from an incorrect template variable.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3813)

5. **#3814 — [OPEN] fix(core): prevent auto-memory recall from blocking main request**  
   *Author: B-A-M-N*  
   Fixes #3759 — the auto-memory recall query had a 5-second timeout that delayed every user turn. Reduces the timeout, avoids blocking the main request path, and uses abort signals more aggressively.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3814)

6. **#3810 — [OPEN] fix(core): clear FileReadCache on every history rewrite path**  
   *Author: wenshao*  
   Fixes #3805. The new `FileReadCache` (#3717) was not cleared on history rewrites (e.g., editing a previous message), causing stale `file_unchanged` pointers in long sessions. Now cleared on every rewrite path.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3810)

7. **#3798 — [OPEN] feat(core): classify retryable transport/provider failures vs deterministic request errors**  
   *Author: B-A-M-N*  
   Introduces `classifyError()` to avoid retrying deterministic errors (400, 401, 403, 404, 422) while still retrying transient failures (429, 408, 409, 5xx, network errors). Important for API cost savings and latency.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3798)

8. **#3799 — [OPEN] feat(cli): normalize model list response parsing across OpenAI-compatible endpoints**  
   *Author: B-A-M-N*  
   Makes `fetchModels()` handle multiple response shapes (standard, bare array, wrapped in `{ object: "list", data: [...] }`). Also adds `/model list` subcommand for dynamic discovery (#3797).  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3799)

9. **#3815 — [OPEN] fix(core): use per-model settings for fast model side queries**  
   *Author: B-A-M-N*  
   Fixes #3765 — session recap, title generation, and tool-use summary queries were leaking `extra_body`, `samplingParams`, and `reasoning` settings from the main model into fast model requests. Now uses independent config.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3815)

10. **#3785 — [OPEN] feat(cli): add memory diagnostics doctor command**  
    *Author: yiliang114*  
    Adds `/doctor memory` subcommand with JSON output (`--json`) for point-in-time memory diagnostics. Designed for attaching structured data to bug reports.  
    [GitHub](https://github.com/QwenLM/qwen-code/pull/3785)

## Feature Request Trends

- **Daemon / Server Mode**: Issue #3803 proposes a `qwen serve` daemon that persists sessions across CLI invocations. This is the clearest expression of demand for a persistent agent background process.
- **Background Task Management**: Issue #3634 maps a full roadmap (Phases A–D) for running long-lived tasks in the background, with Phase D just starting to land (#3809). Community interest is high, particularly around async shell command execution.
- **Non-Interactive Model Switching**: PR #3783 adds `/model` CLI syntax to switch models without an interactive prompt, responding to demand for scriptable/CI usage.
- **Telemetry Hardening**: Issues #3731 and #3811, plus PR #3813, collectively push for production-grade OpenTelemetry support—bounded shutdowns, correct attributes, exporter safety.
- **File Read-Before-Write Enforcement**: PR #3774 enforces a policy that the model must `Read` a file before it can `Edit` or `WriteFile`, preventing blind mutations. This touches on safety and auditability.

## Developer Pain Points

- **MCP Process Duplication**: Issue #3817 documents a clear race condition where restarting Qwen Code creates duplicate MCP child processes. Two PRs address this today, but the fragility of MCP lifecycle is a recurring theme.
- **Long-Session Degradation**: Issues #3805 (read tool failures) and #3806 (UI flickering) both point to memory/state leaks or cache mismanagement in sessions running for hours. The `FileReadCache` fix (#3810) addresses one dimension, but the UI flicker remains open.
- **API Availability and Stockouts**: Issue #3307 (closed) reflects a longer-running pain point: Alibaba Cloud Coding Plan stockouts made Qwen 3.6 Plus inaccessible for purchase. Combined with the controversial free-tier reduction in #3203, developer access to premium models is a sensitive topic.
- **Stream Termination Errors**: Issue #3804 reports a specific `API Error: Model stream ended with empty response text` when using `AskUserQuestion`. Likely a race condition in stream handling during interactive tool calls.
- **Telemetry Shutdown Hangs**: Issues #3731 and #3811 both highlight that an unreachable OTLP endpoint can hang the CLI exit indefinitely—a classic pain point for observability tooling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*