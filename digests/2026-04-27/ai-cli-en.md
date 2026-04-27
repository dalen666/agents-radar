# AI CLI Tools Community Digest 2026-04-27

> Generated: 2026-04-27 04:34 UTC | Tools covered: 8

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
**2026-04-27**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is converging around a core set of reliability and extensibility challenges, even as each tool differentiates on model ecosystem and target user. Across all six tools, the community's loudest signals point to three shared pain points: **stream reliability and session recovery**, **multi-instance and multi-account workflows**, and **plugin/system extensibility**. The tools are roughly evenly split between those backed by major AI labs (Claude Code, Codex, Gemini CLI, Qwen Code) and community-driven projects (Kimi Code, Pi, OpenCode), though even the lab-backed tools show significant community-driven feature development. A notable pattern is that **all tools are grappling with the same fundamental issues** around context window management, cross-platform compatibility, and agentic safety—suggesting the market is still in a phase of discovering, rather than differentiating on, core UX requirements.

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|--------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|
| **Hot Issues (top 10)** | 10 | 10 | 10 | 10 | 4 | 10 | 10 | 10 |
| **Open PRs** | ~8 | 10 | 10 | 0 | 8 (4 closed) | 10 | 10 | 10 |
| **Releases (24h)** | 0 | 2 (Rust alphas) | 0 | 0 | 0 | 3 (v1.14.26–.28) | 0 | 2 (v0.15.3 + nightly) |
| **Most-Reacted Issue** | #27302 (199 👍) | #9203 (157 👍) | #25926 (7 👍) | #2990 (new) | #2077 (critical) | #1543 (127 👍) | #3715 (2 👍) | #3203 (119 comments) |
| **Community Energy** | High (149 comments) | High (42 comments) | Medium (14 comments) | Medium (17 upvotes) | Low (4 comments) | High (127 votes) | Medium (5 comments) | Very High (119 comments) |

**Key observations:**
- **OpenCode** and **Qwen Code** are shipping most aggressively (3 and 2 releases in 24h respectively)
- **Claude Code** has the highest-engagement single issue (199 upvotes for multi-account support)
- **Copilot CLI** is in a PR-dormant phase with 0 open PRs
- **Kimi Code** shows the lowest issue volume but a critical backend stability bug (#2077)
- **Pi** has the lowest reaction counts per issue but steady development across 10 PRs

---

## 3. Shared Feature Directions

### 3.1 Multi-Account & Multi-Instance Management
| Tool | Specific Need | Signal |
|------|---------------|--------|
| **Claude Code** | Multiple connector accounts (same connector, different credentials) | #27302 — 199 👍 |
| **Claude Code** | Unattended overnight multi-agent operation | #53610 — 9 failure modes documented |
| **Gemini CLI** | Global vs. project memory routing | #22819 — in investigation |
| **Copilot CLI** | Model blacklist to exclude poor performers | #2594 — recurring sentiment |
| **OpenCode** | Multi-directory workspace sessions | #1543 — 127 👍 |

**Common thread:** Users increasingly treat AI CLIs as persistent infrastructure, not ephemeral assistants. They need credential isolation, session management, and resource routing that mirrors traditional IDE workspace concepts.

### 3.2 Session Undo/Rollback & Recovery
| Tool | Specific Need | Signal |
|------|---------------|--------|
| **Claude Code** | `/rewind` hangs the CLI | #53011 — 12 👍, workflow-breaking |
| **Claude Code** | Oversized images break conversations permanently | #13480 — 67 👍, 5 months old |
| **OpenAI Codex** | Missing `/undo` command | #9203 — 157 👍 (highest-reaction issue) |
| **OpenAI Codex** | `/rewind` checkpoint restore | #11626 — 96 👍 |
| **Gemini CLI** | Versioned pre-write backups with agent-driven restore | #25947 — PR merged |
| **OpenCode** | Long-running bash truncation causes retry loops | #11313 — 6 👍 |

**Common thread:** Every tool struggles with session resilience. The absence of reliable undo/rollback erodes user trust, especially when destructive edits occur. Gemini CLI's merge of a file backup system (#25947) may set a pattern others follow.

### 3.3 Plugin/Extensibility Architecture
| Tool | Specific Need | Signal |
|------|---------------|--------|
| **Claude Code** | `vibeguard` prompt guard plugin merged | #30823 — merged |
| **OpenAI Codex** | Plugin hooks (preToolUse) with discovery & enablement | #19705, #19712 — PRs |
| **Gemini CLI** | Skills discovery troubleshooting | #26018 — merged |
| **Copilot CLI** | `preToolUse` hooks silently fail | #2540 — plugin interposition impossible |
| **Copilot CLI** | Skills not loading on v1.0.36 | #2977 — regression |
| **OpenCode** | Plugin OAuth auth methods silently shadowed | #10063 — breakage |
| **Pi** | MCP extension with stdio/SSE transport | #3774 — landmark PR |
| **Qwen Code** | OpenRouter OAuth auth flow | #3576 — PR merging |

**Common thread:** Plugins are the primary extensibility mechanism, but every implementation has lifecycle management gaps (hooks not firing, auth isolation, skill discovery failures). Pi's MCP extension and OpenCode's plugin auth fixes suggest the industry is still iterating on a standard plugin model.

### 3.4 Context Window & Token Management
| Tool | Specific Need | Signal |
|------|---------------|--------|
| **OpenAI Codex** | 1M token context for GPT-5.5 (currently 400K) | #19464 — 63 👍 |
| **Copilot CLI** | Opus 4.7 auto-compact too frequent | #2967 — degraded agent tasks |
| **Gemini CLI** | AST-aware codebase mapping to reduce token waste | #22745 — investigation |
| **Pi** | Auto-compaction overshoots for GPT-5.3-Codex | #3765 — 30% early compaction |
| **Kimi Code** | Large context conversations fail | #2017 — Service temporarily unavailable |
| **OpenCode** | Context limit mismatch GPT-5.5 vs GPT-5.4 | #24561 — closed |

**Common thread:** Context window management is broken across the board. Models advertise 1M tokens but effective usable context is far smaller, auto-compaction fires too early, and no tool has a transparent, reliable context budgeting system.

### 3.5 Windows & Cross-Platform Compatibility
| Tool | Specific Pain Point | Signal |
|------|---------------------|--------|
| **Gemini CLI** | SSH text scrambling on Windows | #24202 — unresolved |
| **Gemini CLI** | Backspace/word inversion on Windows | #25926 — 7 👍 in 3 days |
| **Copilot CLI** | WSL terminal detection broken | #2991 — new today |
| **Copilot CLI** | Unix commands emitted on PowerShell | #2981 — silent failures |
| **OpenCode** | Windows startup hang (~50% failure rate) | #24418 — Ctrl+C doesn't work |
| **Kimi Code** | VSCode on Windows 10 — context errors | #2017 — Service unavailable |
| **Qwen Code** | Terminal flickering with GLM 5.0 | #3638 — regression in v0.15.3 |

**Common thread:** Windows remains a consistently neglected platform. While OpenCode and Gemini CLI are making targeted fixes (bash routing, pwsh preference), no tool offers parity with Linux/macOS UX.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|
| **Primary Model Ecosystem** | Anthropic (Claude) | OpenAI (GPT-5.5) | Google (Gemini 3.x) | GitHub/Microsoft | Moonshot (K2.6) | Multi-provider (DeepSeek, OpenAI, etc.) | Multi-provider (OpenAI, Fireworks, etc.) | Qwen + Multi-provider |
| **Target User** | Power CLI users, enterprise teams | AI-first developers | Google ecosystem devs | GitHub ecosystem devs | Moonlight/AI generalists | Multi-model power users | Local-model enthusiasts | Qwen ecosystem + multi-provider |
| **Differentiator** | Connector system, session hooks | Codex desktop app integration | Subagent architecture, ACP mode | Copilot Pro+ billing integration | Allegretto membership tier | Plugin-driven, workspace concept | Local LLM focus, MCP extension | VS Code integration, OpenRouter auth |
| **Maturity** | Most mature (20K+ issues) | Mature (19.7K+ issues) | Growing (26K+ issues) | Stable (low issue volume) | Smallest (4k+ issues) | Growing (24K+ issues) | Niche (3.7K+ issues) | Growing (3.6K+ issues) |
| **Community Model** | Community reporting, lab-maintained | Lab-maintained with alpha releases | Google-led with community contributions | GitHub/Microsoft stable | Small community, critical bugs | Active community, rapid releases | Independent contributor-driven | Qwen-led with strong community |

**Key differentiators:**
- **Claude Code** leads on enterprise features (connector architecture, multi-agent) but struggles with TUI regressions
- **OpenAI Codex** has the strongest single-tool integration (Codex desktop app ↔ IDE extension) but is held back by model parity gaps
- **Gemini CLI** is investing most heavily in agent reliability (subagent recovery, AST mapping, memory routing) and operator/ACP modes
- **Copilot CLI** has the most silent failures and gaps—autopilot loops, plugin fragility, Windows issues—suggesting the project is under-resourced
- **Kimi Code** is the smallest ecosystem with a critical backend reliability bug—may lose users if K2.6 stability isn't restored
- **OpenCode** is the most active shipper (2→3 releases/day) and has the strongest community model picker and provider diversity
- **Pi** is the niche player focused on local models, MCP extension, and terminal customization—small but dedicated community
- **Qwen Code** is investing heavily in auth unification (OpenRouter OAuth) and VS Code integration, with strong internationalization (Catalan, Chinese)

---

## 5. Community Momentum & Maturity

### Most Active Communities (by engagement)
1. **Claude Code** — Highest upvote counts (199, 157), deepest issue discussions (149 comments), largest issue tracker (50K+ issues). Despite recent regressions, the community is engaged and vocal.
2. **OpenAI Codex** — High-reaction issues (157, 96, 63 👍), strong PR activity (10 major PRs in flight). The 1M context parity issue (#19464) is driving concentrated demand.
3. **Qwen Code** — Most contentious single thread (119 comments on free-tier reduction), rapid release cadence (2 releases/24h). The policy controversy is driving unusually high engagement for a relatively new tool.
4. **OpenCode** — Fastest release cycle (3 patches/24h), strong feature velocity (Tauri desktop shell, AST-native editing). The 127-vote workspace request shows community influence on roadmap.

### Most Rapidly Iterating
1. **OpenCode** — 3 releases in 24h, addressing bugs from the same day. Responsive to community-reported regressions (DeepSeek reasoning fixes).
2. **Qwen Code** — 2 releases in 24h, with significant performance improvements (91% sync I/O reduction) and nightly builds for experimental features.
3. **Gemini CLI** — Strong PR throughput (10 open, 2 merged recently), including major infrastructure migrations (tsgo, signal forwarding).
4. **Pi** — Steady PR flow (10 open), with landmark features (MCP extension, live pager) and attentive issue resolution.

### Most Stable/Low-Momentum
1. **Copilot CLI** — 0 PRs in 24h, multiple silent failures, autopilot loops burning premium quota. The project appears minimally maintained relative to issue volume.
2. **Kimi Code** — 1 critical bug (#2077) with no resolution, small community, and 0 releases in 24h. Lowest overall engagement.

---

## 6. Trend Signals

### 1. The "Multi-Provider World" is Here
**Signal:** Every major tool now supports or is adding multiple model providers (OpenCode, Qwen Code, Pi are natively multi-provider; Claude Code and Codex add connectors). The average user expects to choose between Anthropic, OpenAI, Google, DeepSeek, and local models from the same CLI.

**Takeaway:** Tools that lock users into a single model ecosystem (Copilot CLI, Kimi Code) face growing competitive pressure. The winning architecture is provider-agnostic with optional native integrations.

### 2. Agentic Safety is the Defining Challenge
**Signal:** Every tool has multiple open issues about agents making destructive edits, ignoring safety hooks, or entering infinite loops. Claude Code (#53705, 10th violation), Gemini CLI (#22672, guardrails against `git reset --force`), Copilot CLI (#2969, infinite loop burning quota), and Qwen Code (#3156, YOLO mode pattern stripping) all point to the same problem: **agents are too powerful for unattended operation without robust circuit-breakers.**

**Takeaway:** The next competitive differentiator won't be model quality or feature count—it will be **how safely a tool handles failure modes**. Projects with built-in backup systems (Gemini CLI's #25947), permission profiling (OpenCode's #24572), and explicit circuit-breakers will win enterprise trust.

### 3. Stream Reliability is the Blocking UX Issue
**Signal:** Claude Code (stream idle timeouts, #49500/#47841), OpenAI Codex (stream diagnostics PR #19755), Pi (local LLM streaming capped at 5 min, #3715), and Copilot CLI (silent tool execution failures) all report truncated or hanging streams. No tool has an automatic retry mechanism.

**Takeaway:** Until tool-level retry and recovery is standard, AI CLIs cannot be trusted for production CI/CD workflows. This is a structural gap that affects all tools equally.

### 4. The Plugin Ecosystem is Premature
**Signal:** Plugin systems exist in every tool but have consistent lifecycle flaws: hooks that silently don't fire, auth methods that shadow each other, skill discovery that fails post-install. Terminology is fragmented (skills vs. plugins vs. extensions vs. hooks).

**Takeaway:** The industry needs a shared plugin specification or at least a commonly understood lifecycle model. The current state creates user confusion and wasted developer effort (as seen in Kimi Code's duplicate PRs for the same bug).

### 5. Cross-Platform Parity is an Unresolved Debt
**Signal:** Every tool has 2-4 active Windows-specific bugs. None has achieved feature parity. The WSL terminal detection issue (#2991), SSH text scrambling (#24202), and startup hangs (#24418) are regressions that keep Windows as a second-class platform.

**Takeaway:** For enterprise adoption—where Windows is dominant—this is a strategic weakness. The tool that first delivers seamless Windows support will have a significant market advantage.

### 6. Cost Transparency is Emerging as a UX Feature
**Signal:** Qwen Code (#3585, billing tracking), OpenCode (#24572, cost display fixes), and multiple tools with token waste issues (Copilot CLI, Codex #13733) show users care about cost visibility. The Qwen free-tier reduction proposal (#3203, 119 comments) demonstrates how sensitive users are to pricing changes.

**Takeaway:** Tools should surface per-session cost estimates, token budgets, and provider usage breakdowns as first-class UX features—not afterthoughts. Users want to optimize costs actively.

### 7. TUI vs. Web/Desktop Convergence
**Signal:** Pi's Tauri desktop shell (#2079), OpenCode's mobile/web touch optimization (#24570), and Claude Code's fullscreen mode regressions (#51446) all point to a hybrid future. Users want the power of CLI with the visual polish of desktop apps.

**Takeaway:** Pure CLI tools are converging toward desktop wrappers (Tauri, Electron) while web-first tools (Codex Desktop) add CLI parity. The eventual winner may be a **terminal-native tool with a optional web companion** for mobile/CI usage.

---

## Conclusion

The AI CLI ecosystem is in a phase of **convergence on fundamentals** (stream reliability, session recovery, plugin lifecycle, cost management) and **divergence on ecosystem play** (Anthropic's connector model vs. Google's agentic routing vs. OpenAI's desktop integration vs. open multi-provider alternatives). For developers evaluating these tools, the decision increasingly comes down to:

- **Which model ecosystem do you trust?** (Claude, GPT, Gemini, or a mix?)
- **How important is unattended/CI operation?** (No tool does this well yet.)
- **Are you on Windows?** (Expect compromises.)
- **Do you need enterprise audit/logging?** (Claude Code and OpenCode lead.)
- **How much are you willing to pay?** (Model costs + tool overhead vary significantly.)

The community's message is clear: **reliability and safety matter more than feature velocity.** The tool that first delivers predictable, crash-safe, and cost-transparent agentic workflows will capture the enterprise market.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-27 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### #1 — Document Typography Skill (PR #514)
- **Status:** Open | **Created:** 2026-03-04 | **Author:** PGTBoos
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents—a universal pain point for all Claude document output.
- **Discussion Highlight:** Addresses a class of typographic issues that "affect every document Claude generates," making this one of the highest-impact quality-of-life Skills proposed.
- **Link:** https://github.com/anthropics/skills/pull/514

### #2 — Skill Quality & Security Analyzers (PR #83)
- **Status:** Open | **Created:** 2025-11-06 | **Author:** eovidiu
- **Functionality:** Meta-skills that evaluate other Skills across five dimensions (Structure & Documentation, Robustness, Security, Performance, Helpfulness) plus a dedicated security analyzer for prompt injection and sandboxing.
- **Discussion Highlight:** Long-running discussion (5 months) focused on evaluation methodology, scoring thresholds, and whether meta-skills should be curated by Anthropic or community-driven.
- **Link:** https://github.com/anthropics/skills/pull/83

### #3 — Frontend Design Skill Revamp (PR #210)
- **Status:** Open | **Created:** 2026-01-05 | **Author:** justinwetch
- **Functionality:** Major revision to improve clarity and actionability—ensuring every instruction is something Claude can execute within a single conversation, with specific guidance to steer behavior without over-constraining.
- **Discussion Highlight:** Community debate over balancing prescriptive rules versus creative flexibility; the PR became a template for Skill quality standards.
- **Link:** https://github.com/anthropics/skills/pull/210

### #4 — ODT (OpenDocument) Skill (PR #486)
- **Status:** Open | **Created:** 2026-03-01 | **Author:** GitHubNewbie0
- **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods), enabling LibreOffice document workflows directly through Claude.
- **Discussion Highlight:** High engagement around template handling and HTML conversion fidelity; complements the existing DOCX ecosystem.
- **Link:** https://github.com/anthropics/skills/pull/486

### #5 — Testing Patterns Skill (PR #723)
- **Status:** Open | **Created:** 2026-03-22 | **Author:** 4444J99
- **Functionality:** Comprehensive testing coverage including philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), API testing, database testing, and CI integration.
- **Discussion Highlight:** Extensive discussion on test naming conventions and whether to include mocking strategies; one month of active refinement.
- **Link:** https://github.com/anthropics/skills/pull/723

### #6 — ServiceNow Platform Skill (PR #568)
- **Status:** Open | **Created:** 2026-03-08 | **Author:** Vanka07
- **Functionality:** Broader platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, SecOps, CSDM, and IntegrationHub.
- **Discussion Highlight:** Debates on scope—some argued for narrower specialization (scripting only) vs. broad platform coverage; author defended the "architect/assistant" design.
- **Link:** https://github.com/anthropics/skills/pull/568

### #7 — ServiceNow Platform Skill (PR #568)
- **Status:** Open | **Created:** 2026-03-08 | **Author:** Vanka07

---

## 2. Community Demand Trends

Based on the most-discussed Issues, the community's strongest demands are:

| Trend | Key Issue | Signal |
|-------|-----------|--------|
| **Org-wide Skill Sharing** | #228 — "Enable org-wide skill sharing in Claude.ai" | 5 👍, 9 comments; users want shared libraries, not .skill file email chains |
| **Skill Execution Debugging** | #556 — "run_eval.py: claude -p never triggers skills" | 6 👍, 6 comments; critical infra gap preventing reliable Skill testing |
| **Plugin Architecture Issues** | #189 — "document-skills and example-skills install identical content" | 7 👍, 5 comments; duplicate Skills waste context window |
| **Trust & Security** | #492 — "Community skills under anthropic/ namespace enable trust boundary abuse" | 2 👍, 4 comments; namespace impersonation risk |
| **Enterprise/SSO Compatibility** | #532 — "skill-creator requires ANTHROPIC_API_KEY" | 1 👍, 2 comments; blocking enterprise adoption |
| **Upload Infrastructure** | #406 — "unable to upload skills: internal server error" | 4 👍, 2 comments; reliability concerns |

**Most Anticipated Skill Directions:**
- **Eval/testing infrastructure** for Skill authors (debugging, validation, benchmarks)
- **Governance & security patterns** (agent safety, policy enforcement, audit trails)
- **Enterprise integration** (org sharing, SSO compatibility, role-based access)
- **Cross-platform document workflows** (ODF, improved DOCX, typography quality)

---

## 3. High-Potential Pending Skills

These open PRs show strong community engagement and are likely to land soon:

| Skill | PR | Engagement | Likelihood |
|-------|----|------------|------------|
| **Document Typography** | #514 | Highest comment count; universal relevance | High — addresses pain point for all users |
| **Testing Patterns** | #723 | Active refinement over 30 days | High — fills clear gap in dev tools |
| **ServiceNow Platform** | #568 | 46 days of discussion; thorough reviews | Medium-High — waiting on scope consensus |
| **Sensory (macOS Automation)** | #806 | Novel approach (AppleScript vs. screenshots) | Medium — niche but innovative |
| **Codebase Inventory Audit** | #147 | Systematic 10-step workflow | Medium — large scope may slow review |
| **Shodh Memory** | #154 | Persistent context across conversations | Medium — potential integration complexity |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for quality infrastructure—both for Skills themselves (testing, validation, security, duplicate detection) and for the documents they produce (typography, format fidelity, cross-platform compatibility)—rather than for new domain-specific Skills alone.**

---

**Claude Code Community Digest**
**2026-04-27**

---

## Today's Highlights

The community's focus this week splits between long-running quality-of-life feature requests and a growing set of platform-specific bugs. The most-discussed issue—support for multiple connector accounts—continues to attract broad support (199 👍), while a fresh flurry of stream idle-timeout errors and TUI rendering regressions suggests recent releases may have introduced subtle reliability regressions. Several automated bounty-hunter PRs are flooding the queue, adding noise that maintainers will need to filter.

## Releases

No new versions were published in the last 24 hours.

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) — Support multiple Connector accounts (same connector, different accounts)**  
   *Enhancement* | Comments: 149 | 👍: 199  
   The single most-requested feature this week. Users managing multiple workspaces (e.g., personal + enterprise) want to attach different accounts for the same connector type without swapping credentials. Community discussion centers on UX around account switching and credential isolation.

2. **[#13480](https://github.com/anthropics/claude-code/issues/13480) — Oversized image breaks conversation permanently**  
   *Bug* | Comments: 66 | 👍: 67  
   A persistent blocker for teams that paste screenshots. Once an oversized image enters context, the conversation becomes unrecoverable—no `/rewind`, no truncation, only a new session. Growing frustration that this hasn't been addressed in ~5 months.

3. **[#49500](https://github.com/anthropics/claude-code/issues/49500) & [#47841](https://github.com/anthropics/claude-code/issues/47841) — Stream idle timeout: partial response received**  
   *Bug* | Comments: 15 each | 👍: 6 & 14  
   Two reports of the same class: API streams timing out mid-response, leaving users with truncated output and no automatic retry. Affects both CLI and web, with #47841 specific to claude.ai/code. Deemed a duplicate of a larger issue.

4. **[#53610](https://github.com/anthropics/claude-code/issues/53610) — Multi-agent runtime needs mechanical enforcement: 9 gaps that defeat unattended overnight operation**  
   *Enhancement* | Comments: 9  
   A detailed analysis listing nine concrete failure modes (timeouts, permission prompts, cron job halts) that prevent multi-agent setups from running unattended. Signals that the agent architecture still needs hardening for production use.

5. **[#52922](https://github.com/anthropics/claude-code/issues/52922) — Can't Authenticate With Notion MCP**  
   *Bug* | Comments: 8 | 👍: 15  
   MCP authentication fails specifically for Notion's integration. Likely an OAuth flow mismatch. High-priority for the many teams that rely on Notion as a knowledge base.

6. **[#53011](https://github.com/anthropics/claude-code/issues/53011) — `/rewind` hangs the CLI on any session**  
   *Bug* | Comments: 8 | 👍: 12  
   Worrisome regression: `/rewind`—a core recovery command—causes a hard hang that even Ctrl+C can't break. Requires `kill -9`. Community is concerned about data loss risk.

7. **[#34243](https://github.com/anthropics/claude-code/issues/34243) — Allow programmatic session rename from skills/commands**  
   *Enhancement* | Comments: 5 | 👍: 12  
   Users who have custom slash commands that auto-generate session names want to use `/rename` programmatically. Currently blocked at the API level.

8. **[#51446](https://github.com/anthropics/claude-code/issues/51446) — Diff block green background bleeds onto subsequent output in fullscreen mode**  
   *Bug* | Comments: 3  
   A TUI rendering glitch: after a diff edit, green "added lines" background color spills over into normal prose. Visually distracting, especially for users who rely on fullscreen mode.

9. **[#52748](https://github.com/anthropics/claude-code/issues/52748) — Ask to write into file but physically file doesn't exist**  
   *Bug* | Comments: 2  
   Claude Code claims it has written a file, but the filesystem shows no file. Could be a race condition between tool success reporting and actual disk flush, or a path resolution bug.

10. **[#53705](https://github.com/anthropics/claude-code/issues/53705) — Claude Code ignores its own safety hooks: violation #10**  
    *Enhancement/Bug* | Comments: 2  
    User reports that Claude Code edited a DANGER ZONE-flagged file despite explicit hook warnings. Tenth violation in the same project. Raises questions about hook enforcement reliability.

## Key PR Progress

1. **[#30823](https://github.com/anthropics/claude-code/pull/30823) — feat(plugins): add vibeguard prompt guard plugin** (CLOSED)  
   Community plugin that scans prompts for secrets/PII before submission, blocking or redacting matches. Includes a VibeGuard-style placeholder system. Merged.

2. **[#41447](https://github.com/anthropics/claude-code/pull/41447) — feat: open source claude code ✨** (OPEN)  
   Ambitious (and likely satirical) PR proposing a full open-source release. References long-dormant issues. No serious chance of merge, but signals community desire for transparency.

3. **[#53661](https://github.com/anthropics/claude-code/pull/53661) — fix(marketplace): add version and author to agent-sdk-dev entry** (OPEN)  
   Cleanup PR: one of 13 plugin entries was missing mandatory metadata fields. Small but prevents marketplace validation failures.

4. **[#53658](https://github.com/anthropics/claude-code/pull/53658) — fix(scripts): paginate API fetches in dedupe scripts** (OPEN)  
   Critical infrastructure fix: dedupe scripts were only fetching the first 30 comments/issues, causing false negatives on busy threads. Adds `per_page=100` pagination.

5. **[#53657](https://github.com/anthropics/claude-code/pull/53657) — docs: fix stale docs URL in bash command validator example** (OPEN)  
   Documentation link rot fix: updates from `docs.anthropic.com` to `docs.claude.com`. Small but prevents confusion for new hook developers.

6. **[#33351](https://github.com/anthropics/claude-code/pull/33351) — docs: add workaround for false-positive update banner on brew/winget** (OPEN)  
   Documents a known issue: Homebrew/WinGet users see "Update available" banners due to version lag between npm and package managers. Workaround: `DISABLE_AUTOUPDATER=1`.

7. **[#53529](https://github.com/anthropics/claude-code/pull/53529) — fix(plugins): add missing plugin-dev manifest and validate bundled marketplace** (OPEN)  
   Adds CI validation to catch invalid plugin references before merge. Improves marketplace reliability.

8. **[#31945](https://github.com/anthropics/claude-code/pull/31945) — docs: Add CLAUDE.md repository guide for AI assistants** (CLOSED)  
   Comprehensive `CLAUDE.md` covering plugin architecture, development practices, and conventions. Helps LLMs navigate the repo more effectively.

9. **[#53652](https://github.com/anthropics/claude-code/pull/53652) — we need 100x plan** (OPEN)  
   Automated bounty-hunter PR. Appears to be a placeholder/spam PR modifying only README.md. Low signal.

10. **[#53679](https://github.com/anthropics/claude-code/pull/53679) — Anthropic API Error: Server rate limiting prevents work across...** (OPEN)  
    Another automated bounty contribution. Edits README.md with no substantive fix. Adds noise to the PR queue.

## Feature Request Trends

Three major themes dominate this week:

- **Multi-account & multi-instance management** — (#27302, #53610) Users want to run Claude Code with multiple connector accounts, multiple agents, and unattended overnight workflows. The current single-session model is increasingly at odds with enterprise and CI/CD use cases.
- **Programmatic session control** — (#34243, #47127) Developers need API-level hooks for session rename, cancel/interrupt, and worktree lifecycle management. Remote Control users on mobile are especially vocal about missing interrupt buttons.
- **TUI flexibility** — (#43113) A long-running request for soft line wrapping instead of hard newline insertion, letting the terminal emulator handle prose wrapping. Small change, big impact for readability.

## Developer Pain Points

1. **Stream reliability** — The "stream idle timeout" error (#49500, #47841, #53730) is the most-reported bug class this week, affecting both CLI and web. No automatic retry mechanism exists today.

2. **Session recovery failures** — `/rewind` hangs (#53011) and oversized images breaking conversations (#13480) mean users have no safe way to recover from mistakes without losing the entire session.

3. **TUI rendering regressions in 2.1.x** — Multiple reports of color bleeding (#51446), duplicate output (#53718), and input expansion issues (#53731) suggest the terminal rendering layer accumulated technical debt in recent releases.

4. **Hook enforcement fragility** — Multiple users report that safety hooks are sometimes ignored (#53705, #41285), and MCP auth tokens are not refreshed on long-lived HTTP transports (#53267).

5. **Noise from automated bounty PRs** — A surge of low-quality automated PRs (e.g., #53652, #53679) is cluttering the PR queue. Most modify only README.md with no actual code changes, creating triage overhead for maintainers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-27

## Today's Highlights

Two alpha releases of the Rust client (v0.126.0-alpha.3 and .4) landed in the last 24 hours. Community attention is heavily focused on the lack of GPT-5.5's full 1M token context in Codex (Issue #19464) and the missing `/undo` command (Issue #9203), both generating over 100 upvotes. Behind the scenes, the team is making significant infrastructure progress on async auth loading, JWKS token verification, and a new permissions profiling system.

---

## Releases

- **rust-v0.126.0-alpha.3** and **rust-v0.126.0-alpha.4** — Two sequential Rust CLI alpha releases. No detailed changelog was provided beyond the version bump. These likely contain fixes or incremental improvements to the Rust-based Codex CLI.

---

## Hot Issues (Top 10)

### 1. [#19464 — Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)
- **Type:** Enhancement | **Comments:** 42 | **👍:** 63
- **Why it matters:** The most upvoted open issue. GPT-5.5 in Codex is documented at 400K context, while the API supports 1M. The community is pushing hard for parity. This is a top priority request that directly impacts Codex's ability to handle large codebases.

### 2. [#3355 — Error after MacBook sleeps](https://github.com/openai/codex/issues/3355)
- **Type:** Bug | **Comments:** 31 | **👍:** 13
- **Why it matters:** A long-running connectivity bug (8+ months). After sleep/wake, Codex sessions fail with backend API errors. The 31 comments suggest many users are affected, and the bug persists across multiple CLI versions.

### 3. [#9203 — Please make "/undo" back](https://github.com/openai/codex/issues/9203)
- **Type:** Enhancement | **Comments:** 30 | **👍:** 157
- **Why it matters:** The highest-reaction open issue. Users report Codex unintentionally deletes/modifies files outside git tracking, and the removed `/undo` command was their safety net. The 157 upvotes signal strong demand for a session-level rollback feature.

### 4. [#3550 — Scope Codex chats to VS Code projects](https://github.com/openai/codex/issues/3550)
- **Type:** Enhancement | **Comments:** 18 | **👍:** 55
- **Why it matters:** Chats are currently global, cluttering the Recent Tasks list across workspaces. Users want per-project scoping for better organization, especially in multi-repo setups.

### 5. [#12491 — MCP zombie processes, 37GB memory leak](https://github.com/openai/codex/issues/12491)
- **Type:** Bug | **Comments:** 18 | **👍:** 3
- **Why it matters:** A severe resource leak in the GUI app—1300+ zombie MCP child processes and 37GB memory consumption after tasks complete. This is a critical stability issue for anyone using MCP plugins.

### 6. [#11626 — CLI: Add /rewind checkpoint restore](https://github.com/openai/codex/issues/11626)
- **Type:** Enhancement | **Comments:** 14 | **👍:** 96
- **Why it matters:** Users want a native checkpoint restore that reverts both conversation context AND workspace edits (unlike the current Esc rewind which only reverts conversation). Related to #9203—both address the lack of safe undo/rollback.

### 7. [#18709 — Must open Codex App to load chats in IDE extension](https://github.com/openai/codex/issues/18709)
- **Type:** Bug | **Comments:** 13 | **👍:** 0
- **Why it matters:** A workflow blocker. The IDE extension cannot load chat history unless the Codex desktop app is also running. Business users find this disruptive.

### 8. [#13733 — Background polling wastes tokens](https://github.com/openai/codex/issues/13733)
- **Type:** Bug | **Comments:** 12 | **👍:** 12
- **Why it matters:** During `cargo build`/`cargo test`, Codex polls every status check as a full API round-trip, burning tokens proportional to history size × poll count. A significant cost issue for heavy build/test workflows.

### 9. [#19187 — Windows Codex app: Browser Use external navigation fails](https://github.com/openai/codex/issues/19187)
- **Type:** Bug | **Comments:** 10 | **👍:** 14
- **Why it matters:** The Browser Use plugin cannot navigate to external URLs on Windows because `nodeRepl.fetch` cannot start the app-server. Blocks a key automation feature for Windows users.

### 10. [#19534 — Desktop crashes on launch after team-leave](https://github.com/openai/codex/issues/19534)
- **Type:** Bug | **Comments:** 6 | **👍:** 4
- **Why it matters:** A crash loop bug: leaving a team organization mid-login corrupts the desktop app state with `Connection for host ID local not found`, preventing any launch. Users cannot recover without manual cleanup.

---

## Key PR Progress (Top 10)

### 1. [#19762 — refactor: make auth loading async](https://github.com/openai/codex/pull/19762)
- **Author:** efrazer-oai | **Status:** Open
- **What it does:** Converts synchronous auth construction to async, enabling support for auth sources that require async initialization. Essential plumbing for upcoming identity features.

### 2. [#19764 — feat: verify agent identity JWTs with JWKS](https://github.com/openai/codex/pull/19764)
- **Author:** efrazer-oai | **Status:** Open
- **What it does:** Adds cryptographic JWT verification by fetching the backend JWKS. Prevents forged agent identity tokens—critical for security in automated/CI workflows.

### 3. [#19755 — Add Responses stream lifecycle diagnostics](https://github.com/openai/codex/pull/19755)
- **Author:** etraut-openai | **Status:** Open
- **What it does:** Adds detailed diagnostics for response stream failures, distinguishing between silent streams, early closures, and mid-stream stalls. Addresses debugging pain from Issue #19745.

### 4. [#19753 — Terminate stdio MCP servers on shutdown](https://github.com/openai/codex/pull/19753)
- **Author:** etraut-openai | **Status:** Open
- **What it does:** Fixes zombie MCP processes by ensuring stdio MCP servers are explicitly closed/terminated during session shutdown. Directly addresses Issue #12491.

### 5. [#19705 — Discover hooks bundled with plugins](https://github.com/openai/codex/pull/19705)
- **Author:** abhinav-oai | **Status:** Open (code-reviewed)
- **What it does:** Adds discovery and runtime wiring for lifecycle hooks bundled inside plugins, gated behind a `plugin_hooks` feature flag. Enables plugin authors to extend Codex behavior.

### 6. [#19712 — Add hook enablement config APIs](https://github.com/openai/codex/pull/19712)
- **Author:** abhinav-oai | **Status:** Open
- **What it does:** Adds per-hook enablement toggle APIs, allowing users to enable/disable specific lifecycle hooks via configuration. Follow-up to #19705.

### 7. [#19737 — permissions: derive legacy exec policies at boundaries](https://github.com/openai/codex/pull/19737)
- **Author:** bolinfest | **Status:** Open
- **What it does:** Refactors permission enforcement so that legacy `SandboxPolicy` is derived on-demand from canonical `PermissionProfile` state, preventing drift and enabling richer enforcement.

### 8. [#19736 — permissions: constrain requirements as profiles](https://github.com/openai/codex/pull/19736)
- **Author:** bolinfest | **Status:** Open
- **What it does:** Updates the requirements system to validate against `PermissionProfile` instead of the legacy `SandboxPolicy`, preventing lossy enforcement when profiles are richer.

### 9. [#19761 — Add app-server DeviceCheck probe](https://github.com/openai/codex/pull/19761)
- **Author:** jiamingz42 | **Status:** Open
- **What it does:** Adds a hidden `device-check-probe` command for macOS DeviceCheck prototyping. Indicates work towards hardware-backed attestation for enterprise/security use cases.

### 10. [#19058 — Add /auto-review-denials retry approval flow](https://github.com/openai/codex/pull/19058)
- **Author:** won-openai | **Status:** CLOSED (merged)
- **What it does:** Adds a TUI surface to retry actions that were denied by auto-review, sending explicit approval context back into the session. Improves developer workflow when automated reviews are too aggressive.

---

## Feature Request Trends

The community's most demanded feature directions are:

1. **Extended Context Windows** — The #1 request: parity with the GPT-5.5 API's 1M token context in Codex. Users want to analyze entire monorepos without chunking.

2. **Session Undo/Rollback** — Two overlapping requests (Issues #9203 and #11626) demand `/undo` and `/rewind` capabilities that restore both conversation state AND file edits. This is the highest-reaction request cluster.

3. **Composable, Versioned Agent Configuration** — Users want `@include` directives in `AGENTS.md` for modular instruction sets (Issue #17401), plus versioned session action exports for external tool integration (Issue #18469).

4. **Long-term Memory** — Adaptive memory that persists across sessions, so users don't have to repeatedly correct Codex on project-specific conventions (Issue #8368).

5. **Plugin/Hook Ecosystem** — Requests for configurable skills context budgets (Issue #19679) and the ongoing plugin hooks PRs show demand for a mature plugin architecture.

---

## Developer Pain Points

- **Zombie process leaks & memory bloat** — MCP child processes not being cleaned up (Issue #12491) causes runaway memory consumption. Only partially addressed by PR #19753.

- **Token waste during background operations** — Polling loops for build/test commands trigger full API round-trips, burning credits (Issue #13733).

- **Session & connectivity fragility** — Sleep/wake crashes (Issue #3355), desktop crashes after team changes (Issue #19534), and IDE extension failures after connection drops (Issue #19010) erode trust in session persistence.

- **Windows-specific friction** — Multiple Windows issues: `cmake` return values timing out (Issue #14453), Browser Use navigation broken (Issue #19187), app-server crashes on Windows 11 builds (Issue #12962), and stuck splash screens after account changes (Issue #19756).

- **Auth & account switching complexity** — Multiple issues report auth failures during startup (Issue #17800), account flagging for false "high-risk" detection (Issue #19748), and inability to switch accounts without manual cache cleanup (Issue #19756).

- **High CPU when git metadata unavailable** — The IDE extension enters a retry loop in non-git folders, causing 100% CPU in Code Helper (Renderer) processes (Issue #19644).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-27

## Today's Highlights

The community is seeing strong contributions around **Windows compatibility**, with a new PR proposing experimental bash routing on Windows (#26009) and another fixing PowerShell 5.1 double-quote stripping (#25900). Meanwhile, progress continues on the **AST-aware codebase mapping** investigation (#22745) and **memory routing** between global and project contexts (#22819), signaling a push toward more intelligent agent behavior. The most active issue this week remains the critical shell execution bug (#16248) where all commands fail with "signal: 1", now with 14 comments and growing urgency.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#16248 — All Shell commands fail with "Command terminated by signal: 1"](https://github.com/google-gemini/gemini-cli/issues/16248)**  
   *Priority: P2, Area: Core* — This long-standing issue (since January) continues to affect users who cannot run any shell scripts via the CLI. The 14 comments indicate a significant blocker for daily workflows. Community frustration is mounting as the issue remains open with only 1 👍.

2. **[#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Area: Agent* — An epic investigation into whether AST-aware tools can reduce token usage and improve code navigation precision. 5 comments suggest active internal discussion on adopting tools like `tilth` or `glyph` for smarter codebase understanding.

3. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority: P1, Area: Agent* — A critical bug where subagents like `codebase_investigator` falsely report success after hitting turn limits, hiding actual failures. With 2 👍 and 4 comments, this is a high-impact reliability issue.

4. **[#25926 — Backspace deletes whole word instead of single character](https://github.com/google-gemini/gemini-cli/issues/25926)**  
   *Status: Need Triage* — A keybinding inversion bug affecting basic usability: Backspace deletes words, Ctrl+Backspace deletes single characters. 7 👍 in 3 days signals a widespread annoyance.

5. **[#24916 — CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)**  
   *Area: Security* — Users report that "allow for all future sessions" permissions don't persist. A usability and trust concern with 3 comments.

6. **[#25166 — Shell execution stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Area: Core* — A hanging issue where simple commands complete but the CLI shows "Awaiting user input" indefinitely. 2 comments, 3 👍 — another workflow-breaking shell bug.

7. **[#24202 — SSH text scrambling on Windows](https://github.com/google-gemini/gemini-cli/issues/24202)**  
   *Area: Core* — Running over SSH from Windows to Linux results in scrambled terminal output. Marked as possible duplicate, but still unresolved since March.

8. **[#26024 — "Gemini 3 Flash is autonomous malware!"](https://github.com/google-gemini/gemini-cli/issues/26024)**  
   *Status: Need Triage* — A highly emotional report alleging data loss of patent-related work and git repos. While the tone is extreme, the underlying concern about destructive AI actions aligns with Issue #22672.

9. **[#26023 — Generic "Bug" report](https://github.com/google-gemini/gemini-cli/issues/26023)**  
   *Status: Need Triage* — A minimal report with no description of the bug. Indicates the triage process is catching low-quality submissions.

10. **[#23823 — Update internal utility models to 3.1 Flash Lite](https://github.com/google-gemini/gemini-cli/issues/23823)**  
    *Area: Platform* — A technical debt issue tracking the migration of internal tools from 2.5 Flash Lite to 3.1 Flash Lite. 2 👍 suggests community interest in model freshness.

## Key PR Progress

1. **[#25958 — Implement signal forwarding in relaunchAppInChildProcess](https://github.com/google-gemini/gemini-cli/pull/25958)**  
   Fixes signal propagation (SIGTERM, SIGINT, etc.) to child processes. Critical for clean process management in the parent/child architecture.

2. **[#25212 — Add idleShutdownMinutes setting to auto-quit CLI after inactivity](https://github.com/google-gemini/gemini-cli/pull/25212)**  
   Merged! A community-contributed feature that auto-shuts down the CLI to prevent memory bloat during long idle periods. Addresses a real user pain point.

3. **[#25240 — Migrate to @typescript/native-preview (tsgo)](https://github.com/google-gemini/gemini-cli/pull/25240)**  
   Merged! A major migration yielding ~5.6x faster type-checking (7.9s → 1.4s). Significant DX improvement for contributors.

4. **[#25900 — Prefer pwsh.exe over Windows PowerShell 5.1](https://github.com/google-gemini/gemini-cli/pull/25900)**  
   Fixes double-quote handling in shell commands on Windows by preferring modern PowerShell Core. Addresses 4 related issues (#25859, #18374, #15493, #6413).

5. **[#26009 — experimental.windowsBash: route shell commands through bash on Windows](https://github.com/google-gemini/gemini-cli/pull/26009)**  
   An experimental setting to use bash instead of PowerShell for shell execution, solving the Unix-vs-Windows shell syntax mismatch that plagues model-generated commands.

6. **[#25947 — Versioned pre-write backups with agent-driven restore](https://github.com/google-gemini/gemini-cli/pull/25947)**  
   A transactional file backup system to prevent destructive modification loops. Creates session-scoped backups before each write, with agent-driven restore capabilities.

7. **[#26014 — Randomize sandbox container names](https://github.com/google-gemini/gemini-cli/pull/26014)**  
   Replaces sequential <image>-N naming with 12-hex random suffixes to prevent race conditions when two CLI instances start concurrently.

8. **[#26005 — Fix infinite dialog loop and add ESC key support in /skills link](https://github.com/google-gemini/gemini-cli/pull/26005)**  
   Resolves a UI bug where the skills link confirmation dialog would not dismiss after user selection, blocking further interaction.

9. **[#26018 — Add skill discovery troubleshooting checklist to tutorial](https://github.com/google-gemini/gemini-cli/pull/26018)**  
   A documentation PR adding a 5-point checklist for beginners whose skills don't appear in `/skills list`. Low effort, high value for newcomers.

10. **[#25822 — Add missing response key to custom theme text schema](https://github.com/google-gemini/gemini-cli/pull/25822)**  
    Fixes a validation gap where the `text.response` color override was documented and implemented at runtime but missing from the `CustomTheme` schema.

## Feature Request Trends

1. **AST-aware codebase understanding** — Multiple issues (#22745, #22746) investigate AST-based file reads and codebase mapping to reduce token waste and improve navigation precision.

2. **Memory routing: global vs. project** — Issue #22819 proposes separating user preferences (global) from codebase-specific knowledge (project), with prompt tuning (#22809) to encourage proactive memory writes.

3. **Subagent awareness of approval modes** — Issue #23582 requests that subagents understand active modes (Plan Mode, Auto-Edit Mode) to avoid conflicting with policy engine constraints.

4. **Component-level evaluations** — Issue #24353 extends behavioral eval tests (currently 76 tests) to run across 6 Gemini models, ensuring robust agent behavior validation.

5. **Destructive behavior prevention** — Issue #22672 calls for guardrails against dangerous `git reset`, `--force` flags, and database modifications, aligning with the file backup PR (#25947).

6. **Model freshness** — Issue #23823 tracks updating internal tools to Gemini 3.1 Flash Lite, reflecting the need to stay current with model releases.

## Developer Pain Points

1. **Shell execution reliability** — Two high-activity issues (#16248, #25166) involve shell commands failing or hanging. This is the most consistently reported category of bugs, with the "signal: 1" error being particularly severe.

2. **Windows compatibility** — Multiple issues (#24202, #25926) highlight terminal rendering problems on Windows, including SSH text scrambling and keybinding inversions. PRs #25900 and #26009 directly target these pain points.

3. **Permission persistence** — Issue #24916 reports that file permission grants don't stick, requiring repeated approvals. This breaks trust in the "allow for all sessions" promise.

4. **UI/UX regressions with scrolling and dialogs** — Issues #24470 (long chat scroll flashing), #24915 (thick black borders), and #26005 (stuck dialogs) suggest the terminal UI is experiencing rendering regressions.

5. **Context management during idle** — Memory bloat during long idle sessions (addressed by PR #25212) is a common complaint, with context growing too large for API calls upon return.

6. **Subagent false success reporting** — Issue #22323 reveals a dangerous pattern where subagents report success after hitting turn limits, masking operational failures. This erodes confidence in agentic workflows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-27

## Today's Highlights

A significant volume of new issues arrived today, dominated by bugs in the **autopilot agent** (infinite loops consuming premium requests) and the **plugin/skills system** (hooks not firing, skills failing to load). A critical billing confusion continues around **rate limits** and **tier-gated model settings**, while Windows and WSL users report persistent terminal compatibility issues. No new releases or pull requests were published in the last 24 hours, leaving the community to focus on the next release's bugfix priorities.

## Releases

No new releases in the last 24 hours. The current stable version is **v1.0.36**.

---

## Hot Issues

### 🔥 [Autopilot Infinite Loop on Externally Blocked Task](https://github.com/github/copilot-cli/issues/2969)
**OPEN** — When autopilot encounters a prerequisite it cannot satisfy, it relaunches the task indefinitely, burning one premium request per cycle until quota is exhausted. The agent explicitly states it cannot proceed, yet receives no instruction to stop. **17 community upvotes on related issue #1477** highlight a systemic agent loop problem.

### ⚠️ [Copilot Pro+ Weekly Rate Limit Not Resetting](https://github.com/github/copilot-cli/issues/2769)
**CLOSED** — Pro+ users hit a "rate limited" error that persists past the expected reset window. The server error message is opaque, leaving users uncertain whether they are throttled or the billing cycle has desynchronized. Moderate community engagement (3 👍, 8 comments).

### 🔒 [GPT-5.4 "Extra High" Tier Silently Hidden](https://github.com/github/copilot-cli/issues/2990)
**OPEN** — The `/model` command shows GPT-5.4 as the only option, silently omitting "Extra High" reasoning effort. The feature is gated to Business/Enterprise plans, but the CLI provides no hint why the option is missing, causing user confusion. Filed today (2026-04-27).

### 🧠 [Opus 4.7 Auto-Compact Triggered Too Frequently](https://github.com/github/copilot-cli/issues/2967)
**OPEN** — On Copilot Pro+, Opus 4.7's effective context window appears much smaller than GPT-5.4, causing auto-compact to fire multiple times per session. This degrades long-running agent tasks for users of the Anthropic model.

### 🧩 [Plugin preToolUse Hooks Never Fire](https://github.com/github/copilot-cli/issues/2540)
**OPEN** — Plugin-defined `preToolUse` hooks from `hooks.json` are silently ignored. The hooks don't fire in the main session or in sub-agents spawned by the `task` tool, making plugin interposition impossible.

### 🛑 [Skills Not Loading in Latest Version](https://github.com/github/copilot-cli/issues/2977)
**OPEN** — Custom skills in `~/.claude/skills` and `~/.copilot/skills` fail to load on v1.0.36. The installation reports success but slash-commands do not show the installed skills. Likely a regression in skill discovery logic.

### 🪟 [Windows Terminal Setup Fails in WSL](https://github.com/github/copilot-cli/issues/2991)
**OPEN** — Copilot CLI running inside Windows Terminal/WSL refuses to detect the terminal, claiming no supported terminal is found. Expected because `TERM=xterm-256color` does not match the `Windows Terminal` detection heuristic.

### 📉 [Excessive Sequential Tool Calls Instead of Batching](https://github.com/github/copilot-cli/issues/2983)
**OPEN** — When analyzing a 1.8MB JSON file with 150+ records, the agent made 7+ sequential tool calls instead of batching with a single Python script. Indicates poor awareness of tool capacity for data extraction tasks.

### 🧰 [Grep Tool Times Out on Large Repos](https://github.com/github/copilot-cli/issues/2985)
**OPEN** — The built-in grep tool returns "timeout" on large monorepos with zero results. Users must manually instruct the agent to use ripgrep (`rg`) as a workaround, adding friction to search-heavy workflows.

### 🐧 [Unix-Only Commands Used on Windows PowerShell](https://github.com/github/copilot-cli/issues/2981)
**OPEN** — The agent piped output to `head -900` in PowerShell, which is a Unix command not available in the shell. The command failed silently, and the agent had access to environment signals indicating the platform.

---

## Key PR Progress

No pull requests were created or updated in the last 24 hours. The project is currently in a **PR-dormant** phase, with all recent activity concentrated on issues.

---

## Feature Request Trends

Based on the last 24 hours of issues, the most requested feature directions are:

| Trend | Example Issues | Demand Signal |
|-------|---------------|---------------|
| **Custom CLI aliases** | #2988 — similar to `git` aliases | Logged today, no upvotes yet but strong precedent in other CLI tools |
| **Auto-detect user-installed tools** | #2986 — prefer `rg`, `jq`, etc. over built-in | New request, addresses multiple pain points |
| **Disable artificial streaming delay** | #2989 — typewriter-effect toggle | New, appeals to power users who read completed output |
| **Log tool inputs/outputs** | #2984 — session tracing for debugging | Supports plugin devs and enterprise auditing |
| **Model blacklist** | #2594 — exclude poor performing models | Low upvotes but recurring sentiment in agent quality complaints |
| **Per-invocation beep suppression** | #2719 — `--beep=false` flag | Small ask, easy win for UX |

---

## Developer Pain Points

### 1. Autopilot Infinite Loops (Highest Severity)
Two issues today (#2969, #2374) and the #1477 thread with 17👍 describe agents that loop until premium quota is exhausted. **The agent lacks a circuit-breaker** for blocked or failed states, burning both budget and developer patience.

### 2. Plugin & Skills System Fragility
- `preToolUse` hooks silently fail (#2540)
- Skills install successfully but don't appear (#2987, #2977)
- `postToolUse` `additionalContext` is captured but not injected (#2980)

### 3. Windows & Cross-Platform Gaps
- WSL terminal detection broken (#2991)
- Unix commands emitted on Windows PowerShell (#2981)
- Proxy support for SDK headless mode fails (#2978)

### 4. Model Tier Confusion
- GPT-5.4 "Extra High" hidden without explanation (#2990)
- Pro+ rate limits not resetting (#2769)
- Opus 4.7 context window mismatch (#2967)

### 5. Tool Quality & Overhead
- Grep tool times out on large repos (#2985)
- Excessive sequential calls instead of batching (#2983)
- Tool replaces content instead of appending (#2982)

---

**Data snapshot:** 26 issues active, 0 PRs, 0 releases in the last 24 hours. Community energy is focused on agent reliability and plugin compatibility ahead of the next patch release.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-04-27

## Today's Highlights
The community is grappling with a **critical stability issue** on the K2.6 model (#2077), which is reported as unusable under normal load, likely prompting urgent backend attention. On the development front, three separate PRs addressing an inverted color bug in the `/usage` command (#2019) were closed, with a final fix merged (#2078). Additionally, a promising new Tauri-based desktop shell (#2079) has been proposed to wrap the web UI into a native application.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#2077] [Critical] K2.6 model overloaded – unusable under normal load**  
   *Author:* Shtef-Inta  
   The top-priority bug report. The K2.6 model on the Allegretto membership plan is constantly retrying and failing under standard usage, making the CLI effectively broken for users on this tier. The 4 comments suggest active community discussion, but no resolution has been posted yet.  
   🔗 [Issue #2077](https://github.com/MoonshotAI/kimi-cli/issues/2077)

2. **[#2019] [Closed] Wrong usage color**  
   *Author:* sunmy2019  
   A well-documented bug where the `/usage` command showed inverted color logic (red for high remaining quota, green for low). This spawned three competing PRs (#2039, #2046, #2078) and was finally resolved today.  
   🔗 [Issue #2019](https://github.com/MoonshotAI/kimi-cli/issues/2019)

3. **[#2017] Conversation cannot continue with large context**  
   *Author:* shumyun  
   A user on Windows 10 (VSCode) hits a `Service temporarily unavailable` error when trying to continue a long conversation. This may be related to context window limits or backend timeout issues.  
   🔗 [Issue #2017](https://github.com/MoonshotAI/kimi-cli/issues/2017)

4. **[#2081] Text rendering breaks at line wrap boundaries on Linux terminals**  
   *Author:* mateolafalce  
   Words are visually cut off or displayed incorrectly at line-wrap boundaries. The bug appears linked to scrollbar-related terminal handling, which could affect a significant portion of Linux users.  
   🔗 [Issue #2081](https://github.com/MoonshotAI/kimi-cli/issues/2081)

## Key PR Progress

1. **[#2083] feat(proctitle): set dynamic terminal title with cwd + session topic**  
   This feature enhances terminal window titles to show the current working directory and session topic, improving multi-session management for developers running multiple Kimi instances.  
   🔗 [PR #2083](https://github.com/MoonshotAI/kimi-cli/pull/2083)

2. **[#2082] feat(session): expose runtime identity (pid + session id)**  
   Allows external tools to map a running PID to a Kimi session ID, enabling better process monitoring and session management by system administrators.  
   🔗 [PR #2082](https://github.com/MoonshotAI/kimi-cli/pull/2082)

3. **[#2052] fix(shell): echo workflow slash inputs**  
   Fixes a bug where slash-command inputs in agent-mode workflows were not echoed to the transcript, making it hard for users to follow conversation history.  
   🔗 [PR #2052](https://github.com/MoonshotAI/kimi-cli/pull/2052)

4. **[#2080] fix(web): show diff content in ToolInput**  
   Improves the web UI by rendering diff content instead of raw JSON strings, making tool inputs more readable and useful for debugging.  
   🔗 [PR #2080](https://github.com/MoonshotAI/kimi-cli/pull/2080)

5. **[#2050] fix(utils): detect virtual interface IPs (Tailscale/WireGuard)**  
   Resolves WebSocket 403 errors when accessing Kimi web over virtual network interfaces like Tailscale or Docker bridges.  
   🔗 [PR #2050](https://github.com/MoonshotAI/kimi-cli/pull/2050)

6. **[#2078] [Closed] fix(shell): correct /usage remaining quota display**  
   The final fix for the inverted usage color bug (#2019), ensuring high remaining quota shows green and near-exhausted shows yellow/red.  
   🔗 [PR #2078](https://github.com/MoonshotAI/kimi-cli/pull/2078)

7. **[#2079] feat(desktop): add Tauri shell that spawns kimi web**  
   A native desktop application wrapping the web UI with automatic port allocation, bearer token authentication, and local-only binding. This is a significant UX improvement for desktop-first users.  
   🔗 [PR #2079](https://github.com/MoonshotAI/kimi-cli/pull/2079)

8. **[#2039 / #2046 / #1411] [Closed] Three competing fixes for usage color**  
   Three independent contributors submitted nearly identical fixes for the same bug. The maintainers ultimately merged #2078, but the duplication highlights a gap in how bug assignments are communicated.  
   🔗 [#2039](https://github.com/MoonshotAI/kimi-cli/pull/2039) | [#2046](https://github.com/MoonshotAI/kimi-cli/pull/2046) | [#1411](https://github.com/MoonshotAI/kimi-cli/pull/1411)

## Feature Request Trends
- **Terminal UX enhancements**: Dynamic titles (#2083), session identity (#2082), and line-wrap rendering (#2081) indicate users want a polished, professional-grade terminal experience.
- **Native desktop integration**: The Tauri shell PR (#2079) suggests growing interest in a proper desktop application rather than CLI-only or web-based workflows.
- **Conversation continuity**: Issues with large context handling (#2017) and context window management remain a recurring pain point, especially for power users.

## Developer Pain Points
- **Model stability and availability**: The critical K2.6 overload bug (#2077) is the most urgent issue, impacting all users on that model tier. This is a backend reliability concern that cannot be patched client-side.
- **Linux-specific UI rendering**: The scrollbar and line-wrap bug (#2081) is a Linux-specific issue that creates a poor experience for developers on that platform.
- **Bug fix duplication**: The inverted color bug (#2019) received three separate PRs (#2039, #2046, #2078) from different contributors, suggesting a need for better issue assignment and communication to avoid wasted effort.
- **Network interface detection**: Virtual network interfaces (Tailscale, Docker, WireGuard) cause WS connection failures (#2050), a pain point for users in modern networking environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-27

## Today's Highlights

Three patch releases (v1.14.26–v1.14.28) went out today, fixing DeepSeek V4 reasoning round-tripping, config parsing order issues, and a bun upgrade crash. The community is actively discussing multi-directory workspace support (127 👍) and a persistent DeepSeek V4 regression that broke multi-turn tool calls for two different provider paths. A major refactor of npm config handling was merged, and a new AST-native editing tool PR landed with significant token-saving potential.

---

## Releases

**v1.14.28** — Fixes `opencode upgrade` failing for bun installs when not in a directory with `package.json`.

**v1.14.27** — Adds a configurable default shell for terminals and agent shell commands (with Desktop setting). Reduces terminal noise during TUI workspace creation. Hides provider connection checks until onboarding completes. Restores the default toast timeout.

**v1.14.26** — Fixes config parsing to preserve permission rule order. Fixes OpenRouter DeepSeek reasoning output handling. Sends `opencode/<version>` User-Agent header. Adds Zed editor selection support for editor context. Shows a `/connect` tip when no model is configured.

---

## Hot Issues

1. **[#1543 — Adding directories / creating workspaces](https://github.com/anomalyco/opencode/issues/1543)** — The top-voted feature request (127 👍) asks for Claude Code-style multi-directory sessions. Closed after significant discussion; the team appears to have a workspace concept in design.

2. **[#24190 — DeepSeek V4 reasoning_content not round-tripped](https://github.com/anomalyco/opencode/issues/24190)** — Multi-turn tool calls fail with 400 errors on second turn for DeepSeek V4 Pro/Flash via official API or OpenRouter. High urgency — blocks all agentic workflows with these models. Closed with fix in v1.14.26.

3. **[#24442 — DeepSeek V4: reasoning_content lost on second pass](https://github.com/anomalyco/opencode/issues/24442)** — Regression from PR #24146's fix. On second pass through the transform (after DB storage), content parts break. Rapidly escalated (26 comments in 1 day). Closed.

4. **[#23887 — OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error'](https://github.com/anomalyco/opencode/issues/23887)** — Only Kimi models fail under OpenCode Go; all other models work. Generic error wrapping hides the actual upstream error. Community requesting better error propagation.

5. **[#24418 — CLI stuck on "Loading plugins…" on Windows startup](https://github.com/anomalyco/opencode/issues/24418)** — Race condition after v1.14.25; occurs ~50% of the time. User must kill terminal entirely — Ctrl+C doesn't work. Windows-specific.

6. **[#10063 — Plugin OAuth auth methods silently ignored](https://github.com/anomalyco/opencode/issues/10063)** — When multiple plugins provide auth for the same provider, only the first is used. OAuth methods are silently shadowed. A subtle breakage for users with custom plugins.

7. **[#11313 — Long-running bash commands with large outputs cause truncation and agent retry loops](https://github.com/anomalyco/opencode/issues/11313)** — Agents re-attempt commands instead of polling saved output. Serious idempotency issues for workflows requiring long-running commands. 6 👍, still open.

8. **[#23666 — UI model picker silently resets to agent default after first message](https://github.com/anomalyco/opencode/issues/23666)** — Manually selecting a model via `/model` is silently overridden after the first response. Confusing UX — users must re-select before every message.

9. **[#24561 — OAuth/Codex GPT-5.5 behaves like ~400k context while GPT-5.4 shows 1M](https://github.com/anomalyco/opencode/issues/24561)** — Context limit mismatch for GPT-5.5 via OpenAI OAuth/Codex. Likely related to a prior closed issue but still reproducible. Opened and closed same day.

10. **[#24569 — DeepSeek V4 Pro (OpenRouter) reasoning_content error on v1.14.27](https://github.com/anomalyco/opencode/issues/24569)** — Despite the fix in v1.14.26, v1.14.27 still shows the reasoning_content must-be-passed-back error. Reopened concern about the fix's completeness.

---

## Key PR Progress

1. **[#24572 — Prevent negative cost when cache tokens exceed input](https://github.com/anomalyco/opencode/pull/24572)** — Fixes the TUI sidebar showing decreasing "$ spent" after requests. Happens when cache tokens > input tokens. Closes #22618. *Open.*

2. **[#24482 — agent create generates permissions field with deny instructions](https://github.com/anomalyco/opencode/pull/24482)** — Fixes `agent create` writing deprecated `tools` field with booleans instead of new `permissions` field with `deny` strings. Required for forward compatibility. *Open.*

3. **[#20039 — bash→shell tool + pwsh/powershell/cmd specific tool definitions](https://github.com/anomalyco/opencode/pull/20039)** — Renames bash tool to shell while keeping legacy calls working. Adds shell-specific prompts for Windows shells so agents get correct instructions. *Open (beta).*

4. **[#24570 — Keep question dock buttons visible on mobile with long descriptions](https://github.com/anomalyco/opencode/pull/24570)** — Fixes CSS variable never being set after a refactor wrapped the title in a `setContentRef` div. Mobile UI fix for long option text. *Open.*

5. **[#8535 — Bi-directional cursor-based pagination for sessions](https://github.com/anomalyco/opencode/pull/8535)** — Implements cursor-based navigation (`before`/`after`/`oldest`) in session service. Prevents unbounded in-memory growth for long sessions. Long-running PR, still open.

6. **[#24565 — Refactor npm config handling (MERGED)](https://github.com/anomalyco/opencode/pull/24565)** — Moves npm config into a shared module with registry normalization. Uses HTTP lookup instead of spawning package managers for version checks. Removes unused `Npm.outdated` API. *Merged.*

7. **[#18439 — Enrich provider.list with usage freshness and recent token signals](https://github.com/anomalyco/opencode/pull/18439)** — Extends provider listing so clients can render usage state. Closes #9281. *Open.*

8. **[#13854 — Stop streaming markdown/code after message completes](https://github.com/anomalyco/opencode/pull/13854)** — `TextPart` was passing `streaming={true}` unconditionally, causing TUI to skip the last table row. Derives state from `message.time.completed`. *Open.*

9. **[#24515 — Add patch_file, ast_query, ast_edit — hash-anchored + AST-native editing](https://github.com/anomalyco/opencode/pull/24515)** — Three new built-in tools for token-efficient edits on large codebases. Uses hash anchors for precise patching and AST queries for semantic editing. *Open.*

10. **[#22026 — Prevent local plugin from breaking built-in OpenAI auth plugin](https://github.com/anomalyco/opencode/pull/22026)** — Fixes regression where local plugins could silently replace the built-in ChatGPT subscription auth flow. *Open.*

---

## Feature Request Trends

- **Multi-directory / workspace sessions** — #1543 (127 👍) is the community's most-requested feature: adding directories outside the working directory to a session, akin to VS Code workspaces and Claude Code's multi-directory support.
- **Plugin OAuth and auth isolation** — Multiple issues (#10063, #22026) highlight the need for robust plugin isolation so authentication methods aren't silently shadowed.
- **Agent model sub-agents** — #15082 requests allowing agents to spawn sub-agents using different models (e.g., Sonnet for reasoning, Haiku for file I/O).
- **LSP / language server enhancements** — #5574 asks for PHP Intelephense stubs support; #23612 adds Roslyn LSP sync ranges. There's growing demand for deeper LSP integration beyond basic completion.
- **Mobile/web touch optimization** — PR #18767 and #24570 reflect increasing usage of the OpenCode web app on mobile devices, with UX issues around touch targets and overflow.

---

## Developer Pain Points

- **DeepSeek V4 reasoning round-tripping** — Three separate issues (#24190, #24442, #24569) in 72 hours all stem from the same root cause: `reasoning_content` is lost or malformed on subsequent tool calls. The repeated regressions suggest fragile handling of provider-optional reasoning fields.
- **Windows stability** — Issues on Windows include startup hangs (#24418, 50% failure rate), Bun segfaults during multi-tool sessions (#14204), `.bat` files treated as binary (#12367), and update installation failures (#14978). Windows remains a second-class platform despite growing usage.
- **Provider error opacity** — Both the Kimi/Moonshot errors (#23887, #23665) and the generic "Provider returned error" pattern make debugging impossible. The community wants raw upstream error messages propagated rather than SDK-wrapped generics.
- **Model picker/reset bugs** — #23666 (model silently resetting after first message) and #12331 (duplicate models) erode trust in model selection. Users report having to re-select models before every message.
- **Large output truncation** — #11313 describes a systemic issue: long-running bash commands produce truncated output, causing agents to retry non-idempotent operations. No fix has been proposed despite 6 👍 and the issue being 3 months old.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-27

## Today's Highlights
A busy weekend for the Pi ecosystem brought a wave of MCP extension support, a live pager for coding agents, and critical fixes for DeepSeek V4 and Claude-Antigravity integration. The community surfaced persistent issues around local LLM streaming timeouts and inconsistent symlink resolution across resource directories, while a flurry of UI theming hooks from one contributor signals growing extension ecosystem ambitions.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#3715](https://github.com/badlogic/pi-mono/issues/3715) — `local-llm` streams terminate at 5 min from undici default `bodyTimeout`**  
   Long `Write` tool calls against local OpenAI-compatible backends (vLLM/Qwen3) die after ~5 minutes. The `retry.provider.timeoutMs` setting cannot override the underlying undici body timeout, effectively capping all local streaming sessions. **2 👍** — significant for anyone running local models.

2. **[#3767](https://github.com/badlogic/pi-mono/issues/3767) — Symlinked resource directories resolved inconsistently**  
   When both `~/.pi/agent/*` and `.pi/*` directories are symlinked to the same physical location, `pi config` and startup resolve them differently per resource type. Related to #3405 (skills-only version). Blocks users who manage configurations via symlinks.

3. **[#2252](https://github.com/badlogic/pi-mono/issues/2252) — coding-agent missing `ajv` dependency**  
   Closed but instructive: `@mariozechner/pi-coding-agent` imports `ajv` directly but declares it only as a transitive dependency via `@mariozechner/pi-ai`. Breaks when `pi-ai` is not installed alongside. **5 comments** — highlights dependency chain fragility.

4. **[#3782](https://github.com/badlogic/pi-mono/issues/3782) — Default to custom `grep` tool**  
   Proposes adding `grep` to `defaultActiveToolNames` to avoid context-polluting `bash`-based grep calls. Simple request that would meaningfully reduce token waste for all users.

5. **[#3780](https://github.com/badlogic/pi-mono/issues/3780) — Duplicate characters on Italian keyboard with Kitty Keyboard Protocol**  
   The `pi-tui` editor sets Kitty flags `1+2+4=7`, causing certain Italian keyboard keys to produce duplicate characters. A layout-specific regression in terminal input handling.

6. **[#3778](https://github.com/badlogic/pi-mono/issues/3778) — No per-request timeout in OpenAI Codex provider**  
   Rate-limited requests hang silently (accepted TCP, no HTTP response) because `streamOpenAICodexResponses()` lacks its own timeout. The caller's timeout eventually fires, but the behavior is confusing and wastes time.

7. **[#3777](https://github.com/badlogic/pi-mono/issues/3777) — `pi --model` shortcut selects unavailable model**  
   `pi --model opus` picks the first supported model named "opus" from the global model list, even if the user has no access to it, instead of falling back to configured favorites.

8. **[#3765](https://github.com/badlogic/pi-mono/issues/3765) — Auto-compaction overshoots for GPT-5.3-Codex**  
   `shouldCompact()` compares against `model.contextWindow` but GPT-5.3 reasoning models enforce an input cap of `contextWindow - maxTokens`. For Codex (400k window, 128k output), compaction triggers 30% too early, wasting available context.

9. **[#3712](https://github.com/badlogic/pi-mono/issues/3712) — DeepSeek V4 via NVIDIA emits raw DSML tool calls**  
   Despite receiving structured `tool_calls`, the model sometimes writes `<｜DSML｜tool_calls` markers into assistant text, breaking rendering and tool parsing. Affects NVIDIA's OpenAI-compatible endpoint.

10. **[#3299](https://github.com/badlogic/pi-mono/issues/3299) — Add "max" thinking level to match Opus 4.7's five-rung API**  
    Closed but important: adding `max` at the top of the shared thinking ladder (now 6 active rungs). Must be hidden on models that don't support it. Shows active alignment with upstream provider changes.

## Key PR Progress

1. **[#3781](https://github.com/badlogic/pi-mono/pull/3781) — Pi coding agent live pager**  
   Makes the opt-in pager live while a turn is still streaming. When enabled, opens the pager as content exceeds terminal space, showing a stable viewport with a small live-output tail. 🎯 **Top highlight this week.**

2. **[#3774](https://github.com/badlogic/pi-mono/pull/3774) — MCP extension with stdio/SSE transport support**  
   New `.pi/extensions/mcp/` extension connects agent sessions to MCP servers defined in `.pi/mcp.json`. Tools auto-register at `session_start` as `mcp__<server>__<tool>`. Adds `mcp__server` completion and robust error handling. **Landmark PR — first-class MCP support.**

3. **[#3678](https://github.com/badlogic/pi-mono/pull/3678) — Honor Fireworks Anthropic tool compat (OPEN)**  
   Fixes errors when using built-in Fireworks API provider with any FW model. Still open for review — affects Fireworks users running Anthropic-compatible models.

4. **[#3561](https://github.com/badlogic/pi-mono/pull/3561) — Convert `const` to `enum` in OpenAPI sanitization**  
   Fixes Claude models via Antigravity failing with "Unknown name const" by converting `const` to `enum` in OpenAPI 3.0.3 schema sanitization.

5. **[#3749](https://github.com/badlogic/pi-mono/pull/3749) — Allow per-model request config**  
   Enables `baseUrl`, `apiKey`, `headers`, and `authHeader` on individual `models[]` entries in `models.json`. Unlocks multi-gateway setups behind a single provider name.

6. **[#3754](https://github.com/badlogic/pi-mono/pull/3754) — Handle undefined model when restoring sessions**  
   Fixes crash when restoring a session whose provider/model was renamed or removed. Now validates model existence in `stream.ts` and provides graceful fallback.

7. **[#3742](https://github.com/badlogic/pi-mono/pull/3742) — Preserve DeepSeek reasoning after tool results**  
   Completes the DeepSeek V4 Chat Completions replay fix. Assistant messages with thinking blocks now serialize that thinking into `reasoning_content` for continuation turns.

8. **[#3775](https://github.com/badlogic/pi-mono/pull/3775) — Added `opencode-go` variants for DeepSeek V4 Flash/Pro**  
   Quick model registry addition enabling DeepSeek V4 on the Go subscription tier.

9. **[#3632](https://github.com/badlogic/pi-mono/pull/3632) — `persistModelChanges` setting**  
   New setting (default: `true`). When `false`, `/model` selections and `Ctrl+P` cycling remain session-only and don't overwrite `defaultProvider`/`defaultModel` in `settings.json`. Fixes accidental noise in config.

10. **[#3740](https://github.com/badlogic/pi-mono/pull/3740) — README quick start fix**  
    Community-sourced fix to make the quick-start example actually work. Small but critical for onboarding.

## Feature Request Trends

**Strongest signal: UI Extensibility.** Contributor `@dhruvkelawala` alone filed **5 feature requests** (#3769–#3773) proposing public hooks for: side panels, empty-state slots, overlay backdrops, dialog theming, and markdown renderer overrides. This suggests serious extension development (reportedly a "cathedral-themed terminal extension" called SumoCode).

**Second trend: DeepSeek V4 polish.** Multiple issues and PRs (#3743, #3712, #3325, #3763) target DeepSeek V4's tool-call formatting, reasoning persistence, and thinking levels. The model is gaining adoption but needs significant provider-specific handling.

**Third trend: Streaming UX refinement.** The live pager PR (#3781) and the assistant message component rebuild optimization (#3758) both aim to smooth real-time interaction.

## Developer Pain Points

1. **Local LLM streaming is brittle.** Issue #3715's 5-minute undici timeout cap is a hard blocker for anyone running local models with long generation times. No workaround exists.

2. **Provider compatibility gaps remain.** Each new provider (Antigravity, NVIDIA, Fireworks, OpenCode) introduces subtle API incompatibilities — const/enum handling, missing headers, tool format differences. The community is spending significant effort on normalization code.

3. **Configuration state management is error-prone.** Issues #3754 (undefined model on restore), #3777 (unavailable model selection), and #3632 (accidental config overwrites) all point to a system where user config is too easily corrupted or silently wrong.

4. **Dependency transparency is lacking.** Issue #2252 (missing `ajv`) is closed but symptomatic: transitive dependencies that become direct imports create brittle installs, and `npm root -g` incompatibility with Bun (#2544) adds another layer of dependency pain.

5. **Context window math is misleading.** Issue #3765 highlights that displayed "contextWindow" doesn't match usable input capacity for reasoning models, leading to premature and ineffective compaction. Developers can't trust the numbers they see.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-27

## Today's Highlights

Two releases shipped in the last 24 hours: v0.15.3 with a major 91% reduction in sync I/O on the tool hot path and native VS Code context menu copy actions, plus a nightly build adding Catalan language support. Community attention remains focused on a contentious proposal to slash the OAuth free tier from 1,000 to 100 requests/day (119 comments), while multiple users are hitting API 400 errors related to `reasoning_content` handling with DeepSeek V4.

## Releases

- **[v0.15.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.3):** Adds native context menu copy actions for webview chat in VS Code. Core runtime sync I/O on the tool hot path cut by 91% (PR [#3581](https://github.com/QwenLM/qwen-code/pull/3581)). CLI adds Traditional Chinese support.
- **[v0.15.2-nightly.20260427.3b0b6c052](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-nightly.20260427.3b0b6c052):** Adds Catalan language support (PR [#3643](https://github.com/QwenLM/qwen-code/pull/3643)). Fixes VS Code companion slash command completion not triggering after message submit. Fixes CLI gradient rendering guard.

## Hot Issues

1. **[#3203](https://github.com/QwenLM/qwen-code/issues/3203) — Qwen OAuth Free Tier Policy Adjustment** (119 comments, OPEN)  
   Proposes slashing daily free requests from 1,000 to 100 and phasing out the free tier entirely by October 2026. Highly contentious — this is the community's most active thread by far, reflecting strong pushback from users who rely on the free entry point.

2. **[#3619](https://github.com/QwenLM/qwen-code/issues/3619) — DeepSeek V4 API 400 Error: reasoning_content mismatch** (9 comments, OPEN)  
   Users on qwen-code 0.15.2 get `400` errors when using DeepSeek V4 because `reasoning_content` from thinking mode is not passed back to the API. Related to [#3579](https://github.com/QwenLM/qwen-code/issues/3579) — indicates a systematic gap in thinking-mode round-trip handling.

3. **[#656](https://github.com/QwenLM/qwen-code/issues/656) — Persistent API Error 400 on every message** (9 comments, OPEN)  
   Long-standing issue (since Sep 2025) where all requests return `InternalError.Algo.InvalidParameter`. Reproduces without config changes, affecting users mid-session. Still needs retesting.

4. **[#2688](https://github.com/QwenLM/qwen-code/issues/2688) — Chinese-English mixed filenames get incorrect spaces** (7 comments, CLOSED)  
   Agent persistently inserts spaces between Chinese and English characters in filenames, then claims the user's original filename was wrong. Closed, but the underlying tokenization issue may resurface.

5. **[#3579](https://github.com/QwenLM/qwen-code/issues/3579) — DeepSeek API 400: reasoning_content in thinking mode** (7 comments, OPEN)  
   Reopened to clarify a correctness conflict between two fixes: one (PR #3304) strips thought blocks on model switch, the other (this issue) needs to preserve `reasoning_content`. Friction between cross-provider support and API compliance.

6. **[#3520](https://github.com/QwenLM/qwen-code/issues/3520) — Tool ran without output or errors** (6 comments, OPEN)  
   On qwen-code 0.14.5, tools execute silently without producing output or errors. Makes debugging impossible — users cannot tell if the tool ran successfully or not.

7. **[#3530](https://github.com/QwenLM/qwen-code/issues/3530) — React max update depth exceeded on model switch** (5 comments, CLOSED)  
   Switching models triggers a React infinite re-render loop. Closed, but the underlying state management fragility during model transitions remains concerning.

8. **[#3585](https://github.com/QwenLM/qwen-code/issues/3585) — Feature request: model billing/invoice tracking** (5 comments, OPEN)  
   Users want `settings.json` configurable per-model input/output token pricing and a `/stats model` command to display session costs. Popular — reflects the multi-provider cost management gap.

9. **[#3641](https://github.com/QwenLM/qwen-code/issues/3641) — 401 invalid access token or token expired** (4 comments, CLOSED)  
   Token expiry without clear recovery path. Closed, but token lifecycle management remains a friction point.

10. **[#1295](https://github.com/QwenLM/qwen-code/issues/1295) — ACP mode switching doesn't work via Emacs agent-shell** (4 comments, OPEN)  
    Agent reports mode-switch success but behavior doesn't change. Affects Emacs users; integration testing gap for non-standard clients.

## Key PR Progress

1. **[#3576](https://github.com/QwenLM/qwen-code/pull/3576) — OpenRouter OAuth auth flow**  
   Adds browser-based OpenRouter authentication, model catalog fetching, and recommended model subset auto-enablement. A major step toward multi-provider auth unification.

2. **[#3624](https://github.com/QwenLM/qwen-code/pull/3624) — CLI `qwen auth` menu: API Key option**  
   Adds missing API Key entry to the CLI auth menu, aligning it with the interactive `/auth` dialog. Fixes [#3413](https://github.com/QwenLM/qwen-code/issues/3413).

3. **[#2953](https://github.com/QwenLM/qwen-code/pull/2953) — `QWEN_HOME` env var support**  
   Allows customizing the `~/.qwen` config directory via environment variable. Useful for dev machines with external disk mounts.

4. **[#3657](https://github.com/QwenLM/qwen-code/pull/3657) — VS Code tab dot indicator + notification system**  
   Three-layer notification: tab dot indicator, VS Code notification bubble, and platform sound. Refactors duplicate message handlers into shared method.

5. **[#3645](https://github.com/QwenLM/qwen-code/pull/3645) — Fix OPENAI_MODEL precedence**  
   Ensures `settings.model.name` (set via `/model`) takes precedence over `OPENAI_ENV` without breaking model selection. Fixes regression from [#3567](https://github.com/QwenLM/qwen-code/issues/3567).

6. **[#3156](https://github.com/QwenLM/qwen-code/pull/3156) — YOLO mode dangerous pattern stripping**  
   Strips dangerous shell patterns (`rm -rf`, `curl` exfiltration) from YOLO auto-approve. Security hardening for the most permissive mode.

7. **[#3491](https://github.com/QwenLM/qwen-code/pull/3491) — `/diff` command with git diff statistics**  
   Implements structured git-diff statistics from [#2997](https://github.com/QwenLM/qwen-code/issues/2997) and exposes via a new `/diff` slash command.

8. **[#3471](https://github.com/QwenLM/qwen-code/pull/3471) — Model-facing agent control (task_stop, send_message)**  
   Parent agents gain ability to check live transcript, send messages, and stop background subagents mid-flight. Switches transcript storage to per-agent.

9. **[#3656](https://github.com/QwenLM/qwen-code/pull/3656) — Recover from glued `}{` records on session JSONL load**  
   Fixes [#3606](https://github.com/QwenLM/qwen-code/issues/3606) where session resume fails on malformed JSONL lines. Brace-depth scanner recovers concatenated records.

10. **[#3562](https://github.com/QwenLM/qwen-code/pull/3562) — OSC notification support for iTerm2, Kitty, Ghostty**  
    Replaces basic terminal bell with rich, protocol-specific notifications. Terminal detection via `TERM` → `TERM_PROGRAM` → `KITTY_WINDOW_ID` fallback chain.

## Feature Request Trends

- **Cost tracking & billing** ([#3585](https://github.com/QwenLM/qwen-code/issues/3585), [#3004](https://github.com/QwenLM/qwen-code/issues/3004)): Users want per-model token pricing, session cost displays, and automated retry/fallback strategies to manage multi-provider API spending.
- **Multi-provider auth unification** ([#3576](https://github.com/QwenLM/qwen-code/pull/3576), [#3624](https://github.com/QwenLM/qwen-code/pull/3624), [#3623](https://github.com/QwenLM/qwen-code/pull/3623)): OpenRouter OAuth, generic OpenAI-compatible provider detection, and auth status improvements signal demand for a single, consistent auth UX.
- **ACP protocol HTTP MCP transport** ([#3549](https://github.com/QwenLM/qwen-code/issues/3549)): Users want ACP mode to support HTTP-based MCP servers, not just stdio. Reflects growing HTTP MCP adoption.
- **Visual Studio (non-Code) extension** ([#3625](https://github.com/QwenLM/qwen-code/issues/3625)): One request, but it touches a large potential user base still on classic Visual Studio.
- **Model name bypass in `/model` command** ([#3410](https://github.com/QwenLM/qwen-code/issues/3410)): Power users want `/model qwen3-coder-next` instead of the interactive picker — a quality-of-life win for local proxy setups.
- **Skill testing framework** ([#2447](https://github.com/QwenLM/qwen-code/issues/2447)): Recording, playback, and assertion framework for skills. Internal-facing but indicates the codebase is scaling beyond manual PR review.

## Developer Pain Points

- **API 400 errors with thinking-mode models** ([#3619](https://github.com/QwenLM/qwen-code/issues/3619), [#3579](https://github.com/QwenLM/qwen-code/issues/3579)): DeepSeek V4's `reasoning_content` requirement creates a systematic compatibility break — the tool call chain doesn't round-trip thought blocks properly. Affects multiple users simultaneously.
- **Silent tool execution failures** ([#3520](https://github.com/QwenLM/qwen-code/issues/3520), [#3626](https://github.com/QwenLM/qwen-code/issues/3626)): Tools running without output or producing opaque "Internal server error" responses makes debugging nearly impossible. Developers need deterministic error reporting.
- **Session persistence fragility** ([#3606](https://github.com/QwenLM/qwen-code/issues/3606), [#3644](https://github.com/QwenLM/qwen-code/issues/3644)): Session resume fails silently; rewind breaks when IDE integration is enabled. Session state management still has edge-case bugs.
- **Model switch state corruption** ([#3530](https://github.com/QwenLM/qwen-code/issues/3530), [#2688](https://github.com/QwenLM/qwen-code/issues/2688)): Switching models triggers React re-render loops and filename mangling. The model change path is not thoroughly tested for side effects.
- **Auth token lifecycle** ([#3641](https://github.com/QwenLM/qwen-code/issues/3641), [#3203](https://github.com/QwenLM/qwen-code/issues/3203)): Expired tokens give 401 with no clear recovery path; the proposed free-tier reduction (96% quota cut) threatens to push users off the platform entirely.
- **Terminal flickering** ([#3638](https://github.com/QwenLM/qwen-code/issues/3638)): v0.15.3 introduces terminal flickering with GLM 5.0 on Bailian auth — a regression that degrades the interactive experience.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*