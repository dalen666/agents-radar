# AI CLI Tools Community Digest 2026-04-30

> Generated: 2026-04-30 04:36 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
**Date:** 2026-04-30

---

## 1. Ecosystem Overview

The AI CLI tools landscape is entering a maturation phase where basic functionality is largely table stakes, and communities are pivoting toward **enterprise readiness**, **IDE integration**, and **multi-agent orchestration**. All major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, and Qwen Code—are shipping multiple releases per week, but stability regressions are eroding developer trust. A clear divide is emerging between tools with plugin/extension ecosystems (Claude Code, OpenCode, Pi) and those still building core reliability. Billing transparency, permission granularity, and cross-platform parity remain universal pain points across the entire ecosystem.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Open Issues (Hot) | New PRs (24h) | Community Engagement Signal |
|---|---|---|---|---|
| Claude Code | 0 | 10 (top 1: 116 👍) | 9 | High upvote volume on critical bugs; low PR velocity |
| OpenAI Codex | 4 (alpha) | 10 (top 1: 116 👍) | 10 | Rapid alpha cycle; strong architectural refactoring |
| Gemini CLI | 1 (nightly) | 10 (top 1: 1 👍) | 10 | Stable cadence; security-focused PRs |
| GitHub Copilot CLI | 1 (pre-release) | 10 (top 1: 12 comments) | 1 | Low PR activity; MCP/permission issues dominant |
| Kimi Code | 0 | 6 | 6 | Quiet release day; heavy on IDE integration PRs |
| OpenCode | 1 (stable) | 10 (top 1: 41 comments) | 10 (multiple authors) | Highest community contribution diversity |
| Pi | 0 | 10 (top 1: 7 comments) | 10 | Bun & terminal compat issues; robust extension PRs |
| Qwen Code | 3 (stable + 2 preview) | 10 (top 1: 11 comments) | 10 | DeepSeek thinking mode dominated; strong community patches |

**Key observations:**
- **OpenAI Codex** leads in release velocity (4 alphas in 24h), followed by **Qwen Code** (3 releases).
- **Claude Code** and **Kimi Code** had zero releases today, but Claude Code's issue tracker shows high-severity unresolved bugs.
- **Pi** and **Qwen Code** show the highest ratio of community-contributed PRs relative to team-driven work.
- **GitHub Copilot CLI** is notably quiet on PR activity (only 1), despite significant issue volume.

---

## 3. Shared Feature Directions

| Feature Direction | Tools Demanding It | Specific Needs |
|---|---|---|
| **Granular Tool Permissions** | Copilot CLI (#1973, #3028), Kimi Code (#2120), OpenCode (#6527 fixed) | Pre-approved read-only tools, per-tool allow/deny lists, directory-scoped file access |
| **Session Observability & Runtime Identity** | Kimi Code (#2116, #2082), Gemini CLI (#26149), Claude Code (#8477) | PID-to-session mapping, terminal titles with cwd/topic, persistent "thinking" display |
| **MCP Ecosystem Hardening** | Copilot CLI (#2282, #3030, #3039), Claude Code (#39125), Gemini CLI (#26247) | Headless OAuth, sub-agent array responses, env var injection, template variable expansion |
| **IDE/Editor Integration** | Kimi Code (#1956, #2119), Codex (#20294), Qwen Code (#3762) | ACP session history replay, multi-session VS Code, `/ide` context from CLI |
| **Context Window Management** | Codex (#19464), Qwen Code (#3652), Claude Code (#8477) | 1M token support, auto-compact, long-context graceful degradation |
| **Multi-Agent & Sub-Agent Reliability** | Claude Code (#54879), OpenCode (#6527), Gemini CLI (#22323), Kimo Code (#1933) | Permission inheritance, true status reporting, working directory propagation |
| **Billing Transparency & Cost Controls** | Claude Code (#53262, #49599), Pi (#3910, #3971) | Avoid silent extra usage routing, cached pricing updates, cost tracking hooks |
| **Cross-Platform Parity** | Claude Code (Windows/ARM), Copilot CLI (#2282 Windows MCP), Pi (#3929 Bun), OpenCode (#24081 WSL1) | Non-ASCII usernames, WSL1 binary compat, terminal emulator consistency |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary Focus** | Stability & plugin ecosystem | Model capability & TUI architecture | Security & MCP config | Enterprise permission controls | IDE integration | Azure ecosystem & test migration | Model compatibility & DX | DeepSeek/thinking mode & review |
| **Target User** | Power developers, plugin builders | API-first, large-codebase | Google Cloud / enterprise | Enterprise CI/CD | VS Code / JetBrains users | Azure / Microsoft ecosystem | Multi-model tinkerers | Chinese market & DeepSeek users |
| **Release Cadence** | Conservative (0/24h) | Aggressive alpha (4/24h) | Nightly stable (1/24h) | Pre-release only (1/24h) | Quiet (0/24h) | Stable + preview (1/24h) | No release (0/24h) | Multiple track (3/24h) |
| **Community Contribution** | Medium (PRs from team) | Low (mostly internal) | Low (mostly internal) | Low (1 PR, likely infra) | High (external PRs) | Highest (multiple authors) | High (external PRs) | High (community patches) |
| **Key Technical Approach** | Hookify plugins, agent pipelines | Rust CLI, protocol decoupling | TypeScript, MCP-first | ACP protocol, GitHub ecosystem | ACP, RalphFlow architecture | Effect framework migration | Shiki syntax, extension providers | Sub-agent teams, review pipelines |

**Notable differentiators:**
- **OpenCode** leads in community contribution diversity with 6 PRs from a single contributor (kitlangton) migrating tests to the Effect framework.
- **Pi** is the only tool with a dedicated **extension/provider system** being actively refined (displayName, custom fetch hooks).
- **Codex** is the only tool aggressively refactoring core architecture (removing core protocol from TUI in a 7-PR series).
- **Copilot CLI** is uniquely focused on **enterprise permission policies** (managed hooks, tool whitelists) — none of the other tools match this depth.
- **Qwen Code** is the sole tool with a **standalone native binary request** (#1276) — all others assume Node.js runtime.

---

## 5. Community Momentum & Maturity

| Tool | Maturity Level | Momentum Signal | Risk Factors |
|---|---|---|---|
| **Claude Code** | Mature | Highest issue engagement (116 👍 on critical bugs); plugin ecosystem growing | Unresolved freezing bug (#26224, 92 comments since Feb); billing trust damaged |
| **OpenAI Codex** | Early maturity | Aggressive alpha releases; strong architectural vision | 1M context gap (#19464) is single largest feature demand; Windows fragile |
| **Gemini CLI** | Steady | Security-hardening focus; stable nightly cadence | Low engagement (top issue: 1 👍); feature discovery slow |
| **Copilot CLI** | Mature (enterprise) | Permission/security focus aligns with enterprise needs | Low PR velocity (1/24h); ACP slash command gap since Jan 2026 |
| **Kimi Code** | Growing | IDE integration push; headless clipboard fix | Performance incident (#2118) unresolved; quiet release day |
| **OpenCode** | Mature (community-driven) | Highest contributor diversity; Azure ecosystem strong | Terminal fragmentation (Ghostty, WSL1); scrollbar/copy UX broken |
| **Pi** | Growing (extension ecosystem) | Heavy PR activity (10/24h); Shiki migration | Bun compatibility issues dominate; no release today |
| **Qwen Code** | Early maturity | DeepSeek thinking mode bugs drove strong community patches | Model capacity issues (#3307); small user base outside China |

**Ranking by overall momentum:**
1. **OpenCode** — highest contributor diversity, rapid fix cycles, growing Azure adoption
2. **Pi** — most PRs per day, extension ecosystem maturing
3. **Qwen Code** — strong community patches, multi-track releases
4. **OpenAI Codex** — aggressive alpha cycle but low external contributions
5. **Kimi Code** — focused IDE push but quiet release day
6. **Gemini CLI** — stable but low engagement
7. **Claude Code** — high engagement but crippling unresolved bugs
8. **Copilot CLI** — enterprise-fit but stagnating PR velocity

---

## 6. Trend Signals

### 1. Enterprise Permission Models Are The #1 Demand
Across **Copilot CLI**, **Claude Code**, and **Kimi Code**, the community is rejecting binary "allow all vs. approve every" models. Expect **tool-level whitelists**, **directory-scoped access**, and **managed hook policies** to become table stakes within 6 months.

### 2. IDE Integration Is The Next Frontier
**Kimi Code** (#1956, #2119), **Codex** (#20294), and **Qwen Code** (#3762) are all racing to deliver full ACP protocol support, multi-session VS Code plugins, and `/ide` context awareness. The CLI-only AI assistant is becoming an **agent for editors**, not just terminals.

### 3. Sub-Agent Reliability Is Creaking
**Claude Code** (#54879), **OpenCode** (#6527 fixed), **Gemini CLI** (#22323), and **Kimi Code** (#1933) all report sub-agent permission inheritance bugs, false success reporting, and working directory confusion. Multi-agent orchestration is being adopted faster than the security model supports it.

### 4. Billing Transparency Is Fraying Trust
The **Claude Code "HERMES.md" bug** (#53262) and **Qwen Code capacity exhaustion** (#3307) highlight that cost management is a fragile afterthought. Expect **real-time cost dashboards**, **usage alerts**, and **pricing cache invalidation** to become mandatory features.

### 5. Windows & ARM Users Remain Second-Class
Every tool except **Kimi Code** has open Windows-specific bugs (non-ASCII usernames, PowerShell sandbox failures, WSL1 binary errors, MCP connectivity, winGet installation). The ecosystem is prioritizing macOS/Linux parity over Windows.

### 6. Plugin/Extension Ecosystems Are Differentiating
**Claude Code** (hookify, export-session), **Pi** (extension providers, custom fetch hooks), and **OpenCode** (Effect migration) are building platform layers that enable community extensibility. **Codex**, **Copilot CLI**, and **Gemini CLI** remain walled gardens — a growing competitive disadvantage.

### 7. Model-Specific Bugs Are Increasing
**DeepSeek thinking mode** (Qwen Code, Pi), **Opus 4.7** (Claude Code), **GPT-5.4 reasoning** (OpenCode), and **GPT-5.5 context** (Codex) all generated dedicated issues. The rapid model release cadence is outpacing CLI tool testing — **model version pinning** (Claude Code #54888) is emerging as a demand.

### 8. Accessibility Is A Blind Spot
**Gemini CLI** (#25218), **OpenCode** (#2500, #2114), and **Pi** (#3904) have open issues about screen reader modes, scrollbar functionality, text selection, and Unicode rendering. The community is small but growing.

---

**Bottom line for technical decision-makers:** The AI CLI tools market is splitting into **platform builders** (Claude Code, OpenCode, Pi) with extensible architectures and **model-focused tools** (Codex, Qwen Code) chasing the latest capabilities. **Copilot CLI** occupies a unique enterprise niche but risks stagnation. The biggest opportunity gap: a tool that combines deep IDE integration with enterprise-grade permission controls and transparent billing — no single tool delivers all three today.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-30 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (by Discussion Activity)

### #1 — [PR #514: Add document-typography skill](https://github.com/anthropics/skills/pull/514)
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04  
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — issues the author notes affect *every* document Claude generates.  
**Why it's discussed:** Addresses a universal pain point for all Claude users producing long-form output. The skill targets a quality gap users encounter daily but rarely think to codify.

### #2 — [PR #538: fix(pdf): correct case-sensitive file references](https://github.com/anthropics/skills/pull/538)
**Status:** Open | **Author:** Lubrsy706 | **Created:** 2026-03-06  
**Functionality:** Fixes 8 case-sensitivity mismatches in `SKILL.md` where `REFERENCE.md` and `FORMS.md` were referenced in uppercase but saved as lowercase — breaking on case-sensitive file systems (Linux, macOS).  
**Why it's discussed:** A maintenance PR that highlights a systemic portability issue across the skills repository.

### #3 — [PR #83: Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)
**Status:** Open | **Author:** eovidiu | **Created:** 2025-11-06  
**Functionality:** Meta-skills that evaluate other skills across five dimensions (Structure & Documentation, Security, etc.) and perform security audits.  
**Why it's discussed:** One of the earliest meta-skills proposals, reflecting the community's desire for quality assurance tooling *within* the skills ecosystem.

### #4 — [PR #210: Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)
**Status:** Open | **Author:** justinwetch | **Created:** 2026-01-05  
**Functionality:** Comprehensive revision of the frontend-design skill to ensure every instruction is actionable within a single conversation, with specific behavioral guidance.  
**Why it's discussed:** Represents a community-driven quality improvement cycle where existing skills get refined through PR discussion.

### #5 — [PR #486: Add ODT skill](https://github.com/anthropics/skills/pull/486)
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01  
**Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) — covering LibreOffice document workflows.  
**Why it's discussed:** Fills a significant gap in document format coverage, complementing the existing DOCX/PDF skills.

### #6 — [PR #723: Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)
**Status:** Open | **Author:** 4444J99 | **Created:** 2026-03-22  
**Functionality:** Covers the full testing stack — Testing Trophy model, AAA pattern, React Testing Library, Cypress/E2E, API testing, and continuous testing strategies.  
**Why it's discussed:** One of the most comprehensive testing-focused skill submissions, addressing a high-demand area for developer workflows.

### #7 — [PR #509: docs: add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)
**Status:** Open | **Author:** narenkatakam | **Created:** 2026-03-03  
**Functionality:** Adds community health documentation (CONTRIBUTING.md) to address the repository's 25% GitHub community health metrics score.  
**Why it's discussed:** Directly responds to community feedback about the lack of contribution guidelines, signaling maturation of the ecosystem.

---

## 2. Community Demand Trends (from Issues)

| Demand Direction | Key Issues | Signal Strength |
|---|---|---|
| **Org-wide skill sharing & management** | [#228](https://github.com/anthropics/skills/issues/228) — "Enable org-wide skill sharing" (9 comments, 6 👍) | **Highest** — Teams need centralized distribution |
| **Skill reliability & debugging** | [#62](https://github.com/anthropics/skills/issues/62) — "All my skills have disappeared" (10 comments), [#61](https://github.com/anthropics/skills/issues/61) — "Not found error" (3 comments) | **High** — Users losing skills or hitting API errors undermines trust |
| **Skill quality & best practices** | [#202](https://github.com/anthropics/skills/issues/202) — "skill-creator should be updated" (8 comments), [#556](https://github.com/anthropics/skills/issues/556) — "run_eval.py never triggers skills" (6 comments) | **High** — The meta-skill tooling itself has flaws |
| **Duplicate skill deduplication** | [#189](https://github.com/anthropics/skills/issues/189) — "document-skills and example-skills plugins install identical content" (5 comments, 7 👍) | **High** — Wasteful context window usage |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — "Community skills distributed under anthropic/ namespace" (4 comments) | **Medium** — Namespace impersonation risk |
| **Platform compatibility** | [#29](https://github.com/anthropics/skills/issues/29) — "Usage with Bedrock" (4 comments), [#16](https://github.com/anthropics/skills/issues/16) — "Expose Skills as MCPs" (4 comments) | **Medium** — Users want multi-platform reach |

**Emerging themes:** The most vocal demand is for **organizational infrastructure** (sharing, version management, deduplication) rather than novel skill content. Users are hitting scale limits with the current flat-file, per-user model.

---

## 3. High-Potential Pending Skills (Active-Comment PRs)

These PRs have sustained discussion and appear likely to merge:

| PR | Skill | Why It May Land Soon |
|---|---|---|
| [#538](https://github.com/anthropics/skills/pull/538) | PDF case-sensitivity fix | Targeted bugfix, small diff, clear acceptance criteria |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML validation | Fixes a known pain point in skill creation workflow |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked change ID collision | Prevents document corruption — critical quality fix |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Infrastructure request (#452) has strong community backing |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform skill | Enterprise-relevant, covers multiple domains |
| [#806](https://github.com/anthropics/skills/pull/806) | macOS Automation (AppleScript) | Niche but high-value for Mac-native workflows |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *meta-infrastructure* — tools for skill management, quality assurance, deduplication, and organizational distribution — rather than for new domain-specific skills, indicating the ecosystem has entered a scaling phase where governance and reliability outweigh raw content expansion.**

---

# Claude Code Community Digest
**Date:** 2026-04-30

## Today's Highlights

No new releases dropped in the last 24 hours, but the community is buzzing around two high-severity issues: a **billing bug** caused by the string "HERMES.md" appearing in git commit messages, which silently routed API requests to costly extra usage instead of plan quota, and a **persistent freezing bug** (#26224) that has been open since February with 116 upvotes and 92 comments. Additionally, a new **tool dispatch stall regression** in versions 2.1.121–2.1.123 is drawing attention for silently breaking local tool execution.

## Releases

No new releases in the last 24 hours.

## Hot Issues (Top 10)

1. **[#26224 – Claude Code hanging/freezing for 5-20+ minutes](https://github.com/anthropics/claude-code/issues/26224)**  
   *Opened Feb 17, 116 👍, 92 comments*  
   A months-old critical bug that still plagues many users, causing extended freezes on prompt processing. The high engagement and 116 upvotes signal this is a top-priority stability concern with no resolution in sight.

2. **[#53262 – "HERMES.md" in commit messages causes extra usage billing instead of plan quota](https://github.com/anthropics/claude-code/issues/53262)**  
   *Opened Apr 25, CLOSED, 114 👍, 67 comments*  
   **URGENT:** A case-sensitive string match against "HERMES.md" in git commit history silently routed API requests to expensive "extra usage" billing, bypassing Max plan quotas. One user reported $200 in unexpected charges. This was quickly closed, likely with a hotfix.

3. **[#8477 – Feature: Always Show Claude's Thinking](https://github.com/anthropics/claude-code/issues/8477)**  
   *Opened Sep 30, 244 👍, 79 comments*  
   The most-upvoted open feature request. Users want persistent visibility into Claude's reasoning (thinking tokens), especially after v2.0.0 changed how "thinking" is displayed. This remains a top community ask.

4. **[#54847 – Tool dispatch stalls silently in 2.1.121–2.1.123](https://github.com/anthropics/claude-code/issues/54847)**  
   *Opened Apr 29, 0 👍, 4 comments*  
   A fresh regression: local tool calls (Write, Bash, Edit, Read) intermittently produce no results after the model emits a `tool_use` — no disk side-effects, no errors, just silence. Critical for anyone relying on tool execution.

5. **[#54863 – "Claude will return soon" outage](https://github.com/anthropics/claude-code/issues/54863)**  
   *Opened Apr 30, CLOSED, 7 👍, 7 comments*  
   A transient service disruption reported today. Quickly closed, suggesting a brief outage that was resolved.

6. **[#29316 – /sandbox creates empty stub files in git worktrees](https://github.com/anthropics/claude-code/issues/29316)**  
   *Opened Feb 27, 19 👍, 9 comments*  
   When using git worktrees, the `/sandbox` command creates 0-byte read-only stub files in the project root, polluting `git status` with untracked files. Niche but frustrating for users with complex git setups.

7. **[#39125 – Cowork sessions don't inject user_config env vars into MCP server processes](https://github.com/anthropics/claude-code/issues/39125)**  
   *Opened Mar 26, 6 👍, 6 comments*  
   MCP extensions that rely on `user_config` environment variables for credentials fail silently in Cowork sessions — the env vars are completely absent. Blocks credential-dependent MCP tool usage in Cowork.

8. **[#54879 – Auto-mode yields to user after Agent tool returns instead of continuing pipeline](https://github.com/anthropics/claude-code/issues/54879)**  
   *Opened Apr 30, 0 👍, 3 comments*  
   In auto-mode with sub-agent pipelines, the system yields control to the user after a tool return instead of continuing the deterministic pipeline. Breaks multi-agent orchestration workflows.

9. **[#54890 – Opus 4.7 model behavior issue](https://github.com/anthropics/claude-code/issues/54890)**  
   *Opened Apr 30, 0 👍, 4 comments*  
   A model-specific behavior report for Opus 4.7. No details in the summary, but the fact a dedicated model issue was filed suggests users are testing the latest model iteration and encountering quirks.

10. **[#49599 – Unexpected usage limit reset cycle change from Monday to Friday](https://github.com/anthropics/claude-code/issues/49599)**  
    *Opened Apr 16, 2 👍, 6 comments*  
    A Pro subscriber's weekly usage limit reset unilaterally shifted from Monday to Friday, causing loss of unused tokens. Raises concerns about billing cycle transparency and fairness.

## Key PR Progress (Top 10)

1. **[#54873 – Fix hookify: replace hand-rolled YAML parser + fix new_text field on Write](https://github.com/anthropics/claude-code/pull/54873)**  
   A thorough fix for two silent bugs found via a 39-test regression harness: double-escaped backslashes in a custom YAML parser and a missing `new_text` field on Write operations. Essential for hook reliability.

2. **[#54749 – Load hookify rules from ~/.claude global location](https://github.com/anthropics/claude-code/pull/54749)**  
   Allows `hookify` rules to be defined once globally in `~/.claude/hookify.*.local.md` instead of per-project, with project-local rules overriding globals. Reduces boilerplate for power users.

3. **[#54777 – Add export-session plugin (md/json/txt/docx/pdf export)](https://github.com/anthropics/claude-code/pull/54777)**  
   A new plugin that exports session outputs to multiple formats by reading the JSONL transcript directly (zero extra model tokens), with `--last N` selective export. Highly practical for documentation workflows.

4. **[#54551 – Proposal: inline image rendering in terminal UI](https://github.com/anthropics/claude-code/pull/54551)**  
   A feature proposal adding inline image rendering to the Claude Code TUI, complementing tracking issue #54546. Currently, CC is the only first-party Claude client without this capability — a notable gap.

5. **[#20448 – Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)**  
   A plugin adding T3 trust tensors, entity witnessing, and R6 audit trails for cryptographic provenance and verifiable accountability in AI agent operations. Niche but forward-looking for compliance use cases.

6. **[#54741 – Clarify claude command purpose in README](https://github.com/anthropics/claude-code/pull/54741)**  
   A documentation improvement that explicitly states running `claude` opens Claude Code, reducing ambiguity for first-time users.

7. **[#52666 – Fix README brand casing](https://github.com/anthropics/claude-code/pull/52666)**  
   Corrects "Github" to "GitHub" and "MacOS" to "macOS" in the README. Small but shows attention to branding consistency.

8. **[#41611 – Add missing source to Claude Code](https://github.com/anthropics/claude-code/pull/41611)**  
   Title is vague, but this PR appears to add a missing data source reference. Minimal detail available.

9. **[#1 – Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)**  
   The very first PR on the repo, now closed. A foundational security policy document.

10. *(Only 9 PRs updated in 24h — slot intentionally left to note low PR activity)*

## Feature Request Trends

- **Persistent "Thinking" Display (#8477, 244 👍):** Users overwhelmingly want to always see Claude's reasoning process, not just during thinking-heavy tasks. This is the single most-requested feature.
- **Cowork Configuration Flexibility (#54859, #39125):** Multiple requests to make Cowork storage paths configurable and ensure environment variable injection into MCP servers. Users want Cowork to integrate seamlessly with their existing credential management.
- **Session Management (#33502, #34243):** Users want programmatic session renaming from skills/commands and better recent-folder management in the GUI. Suggests growing adoption of session-based workflows.
- **Model Version Pinning (#54888):** Request to pin specific model versions (e.g., `claude-opus-4-5-20251101`) in the Agent tool instead of generic names like "opus." Points to demand for deterministic, repeatable agent behavior.
- **Plugin Ecosystem Growth (#54777, #20448):** Community is actively building and contributing plugins for export, governance, and other extensions. The plugin API appears to be gaining traction.

## Developer Pain Points

1. **Stability Regressions in Recent Versions:** The tool dispatch stall regression (#54847) in 2.1.121–2.1.123 and the recurring freezing bug (#26224) suggest quality assurance gaps in recent releases. Developers are losing faith in rapid release cycles without adequate testing.

2. **Silent Billing Surprises:** The "HERMES.md" billing bug (#53262) and the unexpected usage limit reset (#49599) highlight a lack of transparency and safeguards around API usage costs. Developers on paid plans are wary of bill shock.

3. **Cowork + MCP Integration Issues:** Multiple bugs (#39125, #54744, #47829) show that Cowork sessions have integration problems with MCP extensions, environment variables, and macOS updates. This undermines trust in Cowork for production workflows.

4. **Platform Gaps Continue on Windows & ARM:** Issues #50318, #51898, #54772, and #54887 all report platform-specific bugs on Windows (including ARM) — from access violations to silent hook skipping. Windows and ARM users remain second-class citizens.

5. **Auto-mode / Multi-Agent Pipeline Breaks (#54879):** Auto-mode yielding to user after Agent tool returns breaks deterministic multi-agent orchestration. This is a critical pain point for developers building complex automation pipelines with Claude Code.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-30

## Today's Highlights

The Codex team shipped four alpha releases of the Rust CLI (v0.126.0-alpha.14 through .17) in rapid succession. Community attention is overwhelmingly focused on a single issue: support for the full 1M token context window of GPT-5.5, which has exploded with 87 comments and 116 upvotes in less than a week. On the engineering side, a substantial multi-PR effort to remove core protocol dependencies from the TUI is nearing completion, and new analytics instrumentation for tool execution is moving through review.

## Releases

**Rust CLI (codex-cli) — v0.126.0-alpha.14 through v0.126.0-alpha.17**  
Four alpha increments published within the last 24 hours. No detailed changelog provided in the release notes. These are likely hotfix or stabilization releases aimed at the v0.126 track.

## Hot Issues

*Top 10 issues selected by community impact, signal, and discussion volume.*

### 1. [#19464 — Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)
**Status:** OPEN | **Comments:** 87 | **Reactions:** 👍 116  
The community is demanding parity with the API version of GPT-5.5, which supports a 1M context window, whereas Codex is capped at 400K. The high engagement suggests this is the single most requested model feature. Users report that the 400K limit is a bottleneck for large-codebase work.

### 2. [#16857 — High GPU usage while the app is “thinking” due to tiny useless animation](https://github.com/openai/codex/issues/16857)
**Status:** OPEN | **Comments:** 19 | **Reactions:** 👍 21  
A macOS user reports excessive GPU draw (~30W) during the "thinking" animation, which persists even on Pro-tier subscriptions. The animation is observed to be a simple gradient, leading many to question the rendering pipeline's efficiency.

### 3. [#11626 — CLI: Add /rewind checkpoint restore that reverts both chat context and code edits](https://github.com/openai/codex/issues/11626)
**Status:** OPEN | **Comments:** 17 | **Reactions:** 👍 106  
One of the most upvoted CLI feature requests. Users want a single `/rewind` command that restores both conversation state and workspace file edits from a previous checkpoint. Currently, escape-based rewind only restores conversation context, leaving applied code changes in place.

### 4. [#13018 — Allow to delete threads in the Codex app](https://github.com/openai/codex/issues/13018)
**Status:** OPEN | **Comments:** 11 | **Reactions:** 👍 65  
Users are frustrated that threads can only be archived, not deleted. The workaround requires manually removing files from `~/.codex/archived_sessions/`. This is a quality-of-life issue that continues to accumulate +1s.

### 5. [#8732 — Add Azure DefaultAzureCredential authentication for CLI](https://github.com/openai/codex/issues/8732)
**Status:** OPEN | **Comments:** 13 | **Reactions:** 👍 18  
Enterprise users need support for Azure Managed Identity and DefaultAzureCredential flows. Many organizations disable API keys for security, and Codex CLI currently only supports key-based or ChatGPT OAuth, blocking internal adoption.

### 6. [#10969 — Codex App blank commit message autofill creates subject-only commits](https://github.com/openai/codex/issues/10969)
**Status:** OPEN | **Comments:** 9 | **Reactions:** 👍 12  
When the commit message field is left blank, Codex auto-fills a one-line subject but ignores the user's configured Git commit message format (e.g., multiline templates). Enterprise users rely on consistent commit structure for compliance.

### 7. [#13553 — Windows app fails for usernames with non-ASCII characters](https://github.com/openai/codex/issues/13553)
**Status:** OPEN | **Comments:** 10 | **Reactions:** 👍 9  
Codex Desktop on Windows crashes on startup for users whose Windows username contains non-ASCII characters (e.g., accented letters). This affects a broad international user base on Windows.

### 8. [#18299 — Display dot files and folders in file viewer](https://github.com/openai/codex/issues/18299)
**Status:** OPEN | **Comments:** 9 | **Reactions:** 👍 13  
The App's file viewer hides dot-files (`.agents/`, `.codex/`, etc.). Power users need visibility into these directories for agent configuration and debugging.

### 9. [#20161 — Codex suddenly requires phone number for SSO login](https://github.com/openai/codex/issues/20161)
**Status:** OPEN | **Comments:** 11 | **Reactions:** 👍 3  
A user reports that after logging in on a different device, Codex now demands a phone number despite not having one configured in their account. This is a potential authentication UX regression.

### 10. [#17517 — Apply Patch Bug on Linux](https://github.com/openai/codex/issues/17517)
**Status:** OPEN | **Comments:** 5 | **Reactions:** 👍 4  
Codex CLI v0.120.0 fails to apply patches correctly on Ubuntu when using the GPT-5.3 model. No reproduction steps are confirmed, but several users report inconsistent patch application behavior.

## Key PR Progress

*Top 10 pull requests selected by architectural significance and feature impact.*

### 1. [#20319 — Add managed-hooks-only hook requirement](https://github.com/openai/codex/pull/20319)
**Author:** eternal-openai  
Introduces an enterprise policy to enforce that only managed (server-side) lifecycle hooks are honored, ignoring user-controlled hooks. Critical for compliance-conscious organizations.

### 2. [#20278 — feat: Add workspace plugin sharing APIs](https://github.com/openai/codex/pull/20278)
**Author:** xl-openai  
Adds v2 RPCs (`plugin/share/save`, `plugin/share/list`, `plugin/share/delete`) enabling users to archive, upload, and share plugins across workspaces. Enforces size limits and supports updates via remote IDs.

### 3. [#20309 — Move plugin manager out of core](https://github.com/openai/codex/pull/20309)
**Author:** xli-oai  
Refactors the plugin manager and discoverable plugin listing from `codex-core` into a new `codex-core-plugins` crate. Reduces core coupling and simplifies future plugin evolution.

### 4. [#20294 — Add /ide context support to the TUI](https://github.com/openai/codex/pull/20294)
**Author:** etraut-openai  
Brings `/ide` command functionality to the CLI TUI, allowing Codex to read active IDE context (open files, tabs, selections). Addresses a long-standing gap between Desktop and CLI feature parity.

### 5. [#20280 — Use PowerShell AST parser for exec-policy prefix-rule matching](https://github.com/openai/codex/pull/20280)
**Author:** iceweasel-oai  
Improves Windows exec-policy by parsing one-layer PowerShell inner commands for prefix-rule matching, enabling safer handling of wrapped commands like `git` inside PowerShell invocations.

### 6. [#20179 — TUI: Remove core protocol dependency (7/7)](https://github.com/openai/codex/pull/20179)
**Author:** etraut-openai  
Final PR in a 7-part series to decouple `codex-tui` from `codex_protocol::protocol`. Adds enforcement boundary to prevent dependency creep. Significant for codebase maintainability.

### 7. [#20239 — Add protocol-native item timestamps](https://github.com/openai/codex/pull/20239)
**Author:** rhan-oai  
Adds millisecond-precision timestamps (`started_at_ms`, `completed_at_ms`, `duration_ms`) to tool event payloads. Enables accurate measurement of short-lived tool calls in analytics.

### 8. [#19840 — Add persisted hook enablement state](https://github.com/openai/codex/pull/19840)
**Author:** abhinav-oai  
Allows clients to persist user preferences for lifecycle hooks (enable/disable) and propagate changes to active sessions without additional server APIs. Builds on the hooks inventory endpoint.

### 9. [#19761 — Forward macOS DeviceCheck attestation from Codex CLI](https://github.com/openai/codex/pull/19761)
**Author:** jiamingz42  
Forwards macOS DeviceCheck attestation evidence in `/responses` requests. Packages a signed helper binary for Apple Silicon standalone CLI releases. Marked as DO NOT SUBMIT pending final bundle ID selection.

### 10. [#20300 — Centralize thread analytics state](https://github.com/openai/codex/pull/20300)
**Author:** rhan-oai  
Centralizes thread metadata (client info, runtime) into a single reducer state, reducing duplication across analytics event families. Enables efficient context capture for lifecycle events.

## Feature Request Trends

The strongest signal this week is **GPT-5.5 context window expansion** from 400K to 1M tokens, currently the most active and upvoted issue. Relatedly, **context management improvements** (auto-compact, checkpoint restore, and `/rewind` functionality) form a second strong cluster.

On the **CLI/TUI** front, the community wants:
- Native `/rewind` that reverts both chat and code edits ([#11626](https://github.com/openai/codex/issues/11626)).
- `/ide` context integration for CLI ([#20294](https://github.com/openai/codex/pull/20294)).
- Ability to delete threads (not just archive) ([#13018](https://github.com/openai/codex/issues/13018)).

**Enterprise & security** requests center on:
- Azure DefaultAzureCredential authentication ([#8732](https://github.com/openai/codex/issues/8732)).
- Separate read vs. write approval policies ([#3710](https://github.com/openai/codex/issues/3710)).
- Native event-driven session wake for real-time agent patterns ([#20312](https://github.com/openai/codex/issues/20312)).

Windows users continue to push for **full Computer Use support** on Codex Desktop ([#19305](https://github.com/openai/codex/issues/19305)).

## Developer Pain Points

1. **Context window limits (400K) block large-codebase workflows** — The top-voted issue (#19464) highlights that users cannot work effectively with large projects when the model runs out of context. Auto-compact is also reported as broken (#20272).

2. **Windows usability is fragile** — Non-ASCII username crashes (#13553), PowerShell sandbox failures with cryptographic errors (#14057, #20152), and app launch failures after updates (#19659) create a frustrating experience for Windows users, especially international ones.

3. **GPU/performance overhead** — The "thinking" animation on macOS consumes disproportionate GPU resources (#16857), impacting battery life and workflow for laptop users.

4. **UI/UX inconsistencies** — Model selector disappears with custom LLM providers (#15138), commit messages ignore configured format (#10969), dot files are hidden (#18299), and the "Do you want to make these changes?" prompt is widely regarded as useless (#13561).

5. **Chat history instability** — Sentences vanish randomly from sessions (#20303), context compaction is broken (#20272), and threads cannot be deleted—only archived (#13018).

6. **Authentication friction** — Phone number requirements for SSO (#20161), stuck Azure credentials, and non-ASCII path issues in WebSocket headers (#16432) create barriers for enterprise and international users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-04-30

---

## Today's Highlights

A new nightly release (`v0.42.0-nightly`) shipped with improved error handling for transient API failures and the introduction of a bot for time-series metric analysis. The community continues to report friction around confusing subagent success reporting (Issue #22323), persistent permission-request loops (Issue #24916), and streaming rendering issues affecting accessibility (Issue #25218). Meanwhile, the team is making progress on security hardening, MCP configuration enhancements, and preparing changelogs for v0.40.0 and v0.41.0-preview.0 releases.

---

## Releases

### v0.42.0-nightly.20260429.g6d9911393
- **Change:** Updated policy so transient errors are no longer marked as terminal, improving retry resilience during API calls.
- **Change:** Implemented a bot that performs time-series metric analysis and suggests repo management improvements.

_No stable releases in the last 24 hours._

---

## Hot Issues

1. **#22745 – AST-aware file reads, search, and mapping (EPIC)**  
   _Opened Mar 16, 5 comments, 1 👍_  
   Tracks investigations into whether AST-aware tools can reduce token usage, improve method-boundary precision, and enhance codebase navigation. High impact for complex codebases.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

2. **#22107 – "Capacity exhausted" despite quotas not exceeded**  
   _Opened Mar 12, 4 comments, 4 👍_  
   Users report false capacity errors with misleading retry timers. The 4 upvotes indicate this is a widespread frustration affecting productivity.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22107)

3. **#22323 – Subagent MAX_TURNS falsely reported as GOAL success**  
   _Opened Mar 13, 4 comments, 2 👍_  
   A subagent (`codebase_investigator`) reports `status: "success"` even after hitting turn limits — hiding failures from users. This undermines trust in agent progress reporting.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **#24916 – CLI keeps asking permissions on the same file**  
   _Opened Apr 8, 3 comments_  
   The "allow for all future sessions" setting fails to persist, forcing repetitive approval prompts. Affects workflow fluidity.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24916)

5. **#25166 – Shell execution hangs with "Waiting input" after command completes**  
   _Opened Apr 11, 2 comments, 3 👍_  
   Simple CLI commands cause the agent to hang indefinitely. 3 upvotes signal significant user impact.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

6. **#25692 – ENAMETOOLONG crash with Next.js compiler errors**  
   _Opened Apr 20, 1 comment_  
   Unhandled promise rejection when a Next.js error is present in the environment — a brittle failure path that blocks development.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/25692)

7. **#26248 – Skill conflict detected: "android-cli"**  
   _Opened today, 0 comments_  
   Fresh report of skill conflict after installing the official Android CLI skill. New users hitting onboarding friction.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26248)

8. **#23571 – Model creates tmp scripts in random spots**  
   _Opened Mar 23, 2 comments_  
   When restricted to shell execution, the model scatters temporary scripts across the workspace, creating cleanup overhead.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/23571)

9. **#24246 – 400 error with >128 tools**  
   _Opened Mar 30, 1 comment_  
   Agent fails when more than ~128 tools are available. Limits scalability of tool-ecosystem integrations.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

10. **#25218 – Table renders incrementally, breaking screen reader mode**  
    _Opened Apr 12, 0 comments_  
    Streaming table rendering re-renders on each chunk, causing broken layouts in accessibility mode. Important for inclusive design.  
    [View Issue](https://github.com/google-gemini/gemini-cli/issues/25218)

---

## Key PR Progress

1. **#26247 – Expand template vars in MCP stdio config**  
   Enables `{{VAR}}` expansion in MCP command, args, cwd, and env fields, plus coverage for `{{HOME}}`. Strengthens MCP integration flexibility.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26247)

2. **#26241 – Fix tmux scroll issue using ink's useStdout**  
   Resolves a long-standing bug where scroll buffers only used 20% of screen height under tmux (fixes #11560).  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26241)

3. **#26169 – Remove unsafe exec() in app.ts**  
   Critical severity security fix in A2A server — removes dangerous `exec()` usage flagged by multi-agent AI scanner.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26169)

4. **#25980 – Fix crash on @-mention capturing non-path blobs**  
   Prevents `ENAMETOOLONG` crash when pasted JSON or hallucinated tool calls produce invalid paths.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25980)

5. **#25802 – Render LaTeX-style output as Unicode in TUI**  
   Converts raw LaTeX tokens (e.g., `$\to$`) to Unicode equivalents, improving readability of math/CS content.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25802)

6. **#26149 – Expose runtime identity for external observers**  
   Adds a JSON sidecar (`runtime.json`) during active sessions so external tools can detect running CLI processes by session ID.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/26149)

7. **#25450 – Prevent automatic cloud project hijacking for personal users**  
   Security fix: stops automatic adoption of `cloudaicompanionProject` IDs for Google One subscribers (fixes #25189, #24517).  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25450)

8. **#25464 – Preserve refresh tokens on access_token rotation**  
   Fixes OAuth credential wipe on token refresh — prevents users from being logged out unexpectedly.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/25464)

9. **#21523 – Allow Enter to select session in /resume search mode**  
   Fixes UX gap where Enter appended to search string instead of selecting the session. Simple quality-of-life improvement.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/21523)

10. **#26244 / #26245 – Auto-generated changelogs for v0.40.0 and v0.41.0-preview.0**  
    Community-facing release documentation in progress; signals impending stable and preview releases.  
    [PR #26244](https://github.com/google-gemini/gemini-cli/pull/26244) | [PR #26245](https://github.com/google-gemini/gemini-cli/pull/26245)

---

## Feature Request Trends

- **AST-aware codebase mapping (#22745, #22746):** Strong push toward semantic file reads and navigation using Abstract Syntax Trees to reduce token waste and improve tool-call precision.
- **Memory routing: global vs. project (#22819, #22809):** Demand for structured memory persistence — user preferences stored globally, project-specific knowledge locally.
- **Component-level evaluation infrastructure (#24353):** Scaling behavioral evals (from 76 tests) to systematically test subagent reliability and tool-call rejection handling.
- **Subagent awareness of approval modes (#23582):** Subagents need to understand active constraints (Plan Mode, Auto-Edit Mode) to avoid blocked tool calls.
- **Tracker improvements (#24037, #23925):** Real-time progress tracking during replanning and mid-execution; enabling by default for teams.

---

## Developer Pain Points

- **False success reporting (#22323):** Subagents masking failures as "GOAL reached" erodes trust in autonomous workflows.
- **Permission persistence failures (#24916):** "Allow for all future sessions" doesn't stick, causing repetitive interruptions.
- **Streaming rendering glitches (#25218, #24935):** Tables and terminal buffer corruption degrade UX, especially for accessibility users and those with long chats.
- **Capacity/exhaustion mismatches (#22107):** Users are rate-limited despite having available quota — confusing and blocking.
- **Unhandled crash paths (#25692, #25980):** Environment-specific errors (Next.js, long paths, JSON pastes) cause unhandled rejections instead of graceful degradation.
- **Tool count limits (#24246):** Soft cap of ~128 tools creates a scalability ceiling for rich agent ecosystems.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-30

## Today's Highlights
A new pre-release (`v1.0.40-0`) landed with experimental multi-agent switching and UX improvements for signal handling and slash command ranking. The issue tracker saw a surge of reports around MCP connectivity, self-termination vulnerabilities, and granular permission controls—reflecting growing enterprise adoption pressures. The most commented issue (#1044) remains unresolved: ACP clients still lack slash command support, blocking non-interactive workflows.

---

## Releases
**v1.0.40-0** (pre-release) — [View on GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.40-0)
- **Added:** ACP clients can now list and switch custom agents via the agent config option.
- **Improved:** Ctrl+C and double-Esc now remove pending queued messages one at a time (instead of all at once).
- **Improved:** Slash command suggestions rank prefix matches above fuzzy matches for faster discovery.
- **Improved:** Prompt mode (`-p`) now gates repo ho… (description truncated).

---

## Hot Issues (10 Noteworthy)

1. **#1044 — [OPEN] ACP slash command support blocked**  
   *[area:non-interactive]* Copilot ACP frontend (e.g., Zed) cannot use slash commands because the ACP protocol doesn't emit `available_commands_update`. 12 comments, no resolution since Jan 2026.  
   **[Issue #1044](https://github.com/github/copilot-cli/issues/1044)**

2. **#1973 — [OPEN] Tool whitelist for Interactive Mode**  
   *[area:permissions, area:configuration]* Users want to pre-approve safe read-only tools (`grep`, `cat`, `git log`) without resorting to `allow-all`. 8 comments, 12 upvotes — strong demand for granularity.  
   **[Issue #1973](https://github.com/github/copilot-cli/issues/1973)**

3. **#2282 — [OPEN] MCP server connection failures on Windows**  
   *[area:mcp]* After installing via WinGet, users cannot connect to MCP servers (e.g., `github-mcp-server`), with `Failed to connect` errors. 7 comments.  
   **[Issue #2282](https://github.com/github/copilot-cli/issues/2282)**

4. **#2643 — [OPEN] PreToolUse silent rewrite still triggers confirmation**  
   *[area:plugins]* Even when a `preToolUse` hook sets `permissionDecision: allow` with `updatedInput`, Copilot shows a confirmation dialog on every rewritten command. 5 comments.  
   **[Issue #2643](https://github.com/github/copilot-cli/issues/2643)**

5. **#2881 — [OPEN] Autopilot infinite loop draining premium requests**  
   *[area:agents]* Enabling autopilot causes the agent to repeatedly print "Continuing autonomously (1 premium request)" without progress, consuming requests until manually cancelled. 2 comments.  
   **[Issue #2881](https://github.com/github/copilot-cli/issues/2881)**

6. **#3028 — [OPEN] MCP permissions**  
   *[area:permissions, area:mcp]* Request to configure per-tool allow/deny for MCP servers, analogous to the existing `trustedFolders` mechanism. 2 comments.  
   **[Issue #3028](https://github.com/github/copilot-cli/issues/3028)**

7. **#3033 — [OPEN] Agent self-terminates via broad process-kill pipelines**  
   *[area:permissions, area:platform-windows]* The agent can accidentally kill its own `node`/`dotnet` process when running broad kill commands, silently destroying the session. 0 comments (new).  
   **[Issue #3033](https://github.com/github/copilot-cli/issues/3033)**

8. **#3030 — [OPEN] Sub-agent MCP tool calls fail on JSON array responses**  
   *[area:agents, area:mcp]* When a sub-agent calls an MCP tool that returns a JSON array, the call fails with `expected record, received array` Zod validation error—works fine from the primary agent. 0 comments (new).  
   **[Issue #3030](https://github.com/github/copilot-cli/issues/3030)**

9. **#3039 — [OPEN] MCP OAuth times out on headless sessions**  
   *[area:authentication, area:mcp]* On machines without a browser (e.g., Docker containers), `copilot` spins waiting for browser-based OAuth flow and eventually times out. 0 comments (new).  
   **[Issue #3039](https://github.com/github/copilot-cli/issues/3039)**

10. **#2071 — [OPEN] `pass` credential backend for headless servers**  
    *[area:non-interactive]* On headless Linux servers, `copilot login` stores OAuth tokens in plaintext under `~/.copilot/`. Request to support GPG-based `pass` store. 1 comment, 8 upvotes.  
    **[Issue #2071](https://github.com/github/copilot-cli/issues/2071)**

---

## Key PR Progress

Only **1 PR** was updated in the last 24 hours:

- **#3036 — [CLOSED] Create CI workflow with GitHub Actions for main branch**  
  Adds a CI pipeline that triggers on pushes/PRs to `main` and supports manual runs. Likely a first-time contributor or infrastructural change.  
  **[PR #3036](https://github.com/github/copilot-cli/pull/3036)**

*(No other PRs were updated in the reporting window.)*

---

## Feature Request Trends

The community is clustering around four major themes:

1. **Granular Permission Controls** — Multiple requests (#1973, #1971, #3028, #3032) for tool-level allowlists/denylists, pre-approved command patterns, and organizational policies. Users want safe defaults for read-only operations without disabling all safeguards.

2. **MCP Ecosystem Maturation** — Issues around MCP server connectivity (#2282), OAuth for headless environments (#3039), sub-agent compatibility (#3030), and the removal of `.vscode/mcp.json` support (#3019) signal that MCP integration is still rough for production use.

3. **Session Steering & Persistence** — Requests for mid-session intervention (#3025, #1928), quick reorientation (#1932), prompt stashing (#3034), and `/clear` preserving agent context (#3038) highlight a desire for more interactive control without losing state.

4. **Custom Agent & Model Flexibility** — Users want sub-agents to honor model specifications from frontmatter (#2758) and the ability to switch agents in ACP mode (#1044). DeepSeek API compatibility issues (#2995) show demand for third-party model support.

---

## Developer Pain Points

- **Permission model is too binary** — The only choices are "approve every tool call" or `allow-all` which opens the door to destructive actions. This is the #1 friction point for enterprise users.
- **MCP is unreliable for headless/Windows** — OAuth flow assumes a browser is available, connections fail on Windows, and sub-agents break on structured array responses. Each deployment scenario has a different failure mode.
- **Self-termination vulnerability** — The agent can kill its own session when running process-killing pipelines, which is both a UX and security concern.
- **Premium request drain in autopilot** — Infinite loops silently consume billed requests, eroding trust in autonomous mode.
- **Session state fragility** — `/clear` drops custom agent system prompts, remote session URLs are malformed (#2994), and session state isn't preserved across updates (#3040). Users lose context frequently.
- **Missing non-interactive parity** — ACP (non-interactive mode) still lacks slash commands and proper credential backends, limiting CI/CD adoption.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-30

## Today's Highlights
A quiet release day gave way to a surge in feature requests and PRs focused on IDE integration, session observability, and tool safety. The community is clearly pushing kimi-cli beyond basic terminal use toward a first-class agent for editor and CI environments. Notable progress includes a headless clipboard fix and two PRs exposing runtime identity to external tools.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#1956 — ACP integration: Session history not replayed to clients**  
   *Author: victorhqc | Updated: 2026-04-29 | Comments: 1*  
   A core blocker for IDE integrations (Zed, JetBrains). Without session replay, every new editor session starts blank, defeating continuity. The ACP spec expects history, but kimi-cli isn't delivering it.  
   [🔗 Issue #1956](https://github.com/MoonshotAI/kimi-cli/issues/1956)

2. **#2120 — Tool call safety configuration/parameters**  
   *Author: iaindooley | Updated: 2026-04-29 | Comments: 0*  
   Users want granular control over bash commands and file read/write scoping. The current all-or-nothing (`afk`/`yolo`) model is too risky for production use. This echoes the config-file auto-approval trend (see PR #2114).  
   [🔗 Issue #2120](https://github.com/MoonshotAI/kimi-cli/issues/2120)

3. **#2119 — VSCode plugin: support multiple active sessions**  
   *Author: thsun6 | Updated: 2026-04-29 | Comments: 0*  
   Comparing to Cursor's multi-tab parallelism. The request is clear: let users run concurrent, independent conversations for different tasks in the same project.  
   [🔗 Issue #2119](https://github.com/MoonshotAI/kimi-cli/issues/2119)

4. **#2118 — Severe performance degradation today**  
   *Author: 1260924056 | Updated: 2026-04-29 | Comments: 0*  
   "Completely unable to converse" — likely a server-side incident. No resolution or acknowledgment yet.  
   [🔗 Issue #2118](https://github.com/MoonshotAI/kimi-cli/issues/2118)

5. **#2116 — Expose runtime identity (pid + session id) for external observers**  
   *Author: yeelam-gordon | Updated: 2026-04-29 | Comments: 0*  
   Third-party tools can't link a running `kimi-cli` process to its session. This blocks session management, monitoring, and IDE integration. A PR (#2082) is already open.  
   [🔗 Issue #2116](https://github.com/MoonshotAI/kimi-cli/issues/2116)

6. **#2083 — Dynamic terminal title with cwd + session topic**  
   *Author: yeelam-gordon | Updated: 2026-04-29 | PR linked*  
   Regression since v1.15.0. Multiple tabs in the same project are indistinguishable.  
   [🔗 Issue #2083](https://github.com/MoonshotAI/kimi-cli/issues/2083) (see also PR #2083)

7. **#1931 — Subagents ignore working directory**  
   *Author: (not listed) | Fixed by PR #1933*  
   Subagents always operated in the root session's `KIMI_WORK_DIR` instead of the parent's cwd, causing confusion in multi-agent workflows.  
   [🔗 Issue #1931](https://github.com/MoonshotAI/kimi-cli/issues/1931)

8. **#1475 — Terminal title regression**  
   *Author: (not listed) | Addressed by PR #2083*  
   The original bug report for lost terminal title behavior.  
   [🔗 Issue #1475](https://github.com/MoonshotAI/kimi-cli/issues/1475)

9. **#1519 — Previous attempt at terminal title fix (closed)**  
   *Author: (not listed) | Closed without merge*  
   The first attempt couldn't surface the session topic. PR #2083 solves this.  
   [🔗 Issue #1519](https://github.com/MoonshotAI/kimi-cli/issues/1519)

10. **#1956 (ACP history) + #2116 (runtime identity) — Combined impact**  
    Together these form a critical path for IDE integration maturity. Solving both would make kimi-cli a much more viable agent for Zed, JetBrains, and VS Code.

## Key PR Progress

1. **#2115 — [CLOSED] fix(clipboard): enable paste on headless Linux over SSH**  
   *Author: ZichenWen1 | Merged: 2026-04-30*  
   `pyperclip.paste()` fails when `DISPLAY` is unset. This patch provides a fallback for headless setups — a common pain point for remote dev servers.  
   [🔗 PR #2115](https://github.com/MoonshotAI/kimi-cli/pull/2115)

2. **#2114 — feat(config): Add Granular Auto-Approval Rules**  
   *Author: suJayhh | Updated: 2026-04-29*  
   Similar to Claude Code's auto-approval model. Integrates into `config.toml`. A direct response to the community's demand for safer tool execution.  
   [🔗 PR #2114](https://github.com/MoonshotAI/kimi-cli/pull/2114)

3. **#2082 — feat(session): expose runtime identity (pid + session id)**  
   *Author: yeelam-gordon | Updated: 2026-04-29*  
   Resolves #2116. Creates a lightweight IPC mechanism so external tools can map session IDs to running processes. Critical for IDE plugin development.  
   [🔗 PR #2082](https://github.com/MoonshotAI/kimi-cli/pull/2082)

4. **#2083 — feat(proctitle): set dynamic terminal title with cwd + session topic**  
   *Author: yeelam-gordon | Updated: 2026-04-29*  
   Fixes #1475 with a better approach than #1519. Surfaces both working directory and session topic in terminal title bar.  
   [🔗 PR #2083](https://github.com/MoonshotAI/kimi-cli/pull/2083)

5. **#1960 — feat(soul): RalphFlow architecture**  
   *Author: ORDL-AMF | Updated: 2026-04-29*  
   A framework for automated multi-step agent workflows with infinite-loop prevention. Uses ephemeral context files and convergence detection.  
   [🔗 PR #1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)

6. **#1933 — feat(subagents): add work_dir override for subagent dispatch**  
   *Author: zhuxixi | Updated: 2026-04-29*  
   Fixes #1931. Subagents can now inherit or override the working directory via an optional `work_dir` parameter in the Agent tool.  
   [🔗 PR #1933](https://github.com/MoonshotAI/kimi-cli/pull/1933)

7. **#2120 — Enhancement: Tool call safety config**  
   *No PR yet, but issue #2120 is gaining traction.*  
   The request for permissive/restrictive lists for bash and file I/O is closely related to PR #2114.

8. **#2119 — VSCode multi-session support**  
   *No PR yet, but the demand is clear from the issue alone.*

9. **#1956 — ACP session history replay**  
   *No PR yet. This is a gap in the ACP integration, likely requiring changes to the session management layer.*

10. **#2118 — Performance incident**  
    *No PR yet. Awaiting root cause analysis from the team.*

## Feature Request Trends

1. **IDE/Editor Integration** (most requested)  
   - ACP session history replay for Zed, JetBrains, VS Code (#1956)
   - Multiple active sessions in VS Code plugin (#2119)
   - Exposed runtime identity for external tooling (#2116)

2. **Granular Tool Safety**  
   - Block/allow lists for bash commands (#2120)
   - Directory-scoped file read/write (#2120)
   - Configurable auto-approval rules (#2114)

3. **Session & Workflow Management**  
   - Concurrent sessions with independent contexts (#2119)
   - Subagent working directory control (#1933)
   - Infinite-loop prevention (RalphFlow, #1960)

4. **Observability**  
   - Terminal title with cwd + topic (#2083)
   - PID-to-session mapping (#2116)

## Developer Pain Points

- **Blank-slate IDE sessions**: Every ACP integration starts with zero history, making them useless for ongoing work (#1956).
- **All-or-nothing safety model**: Users want fine-grained tool permissions, not just `afk`/`yolo` (#2120, #2114).
- **Headless Linux clipboard**: Pasting in SSH sessions was completely broken until today's fix (#2115).
- **Tab disambiguation**: Multiple sessions in the same project are indistinguishable in terminal tabs (#2083).
- **Performance instability**: One user reports complete service outage, with no official response yet (#2118).
- **No runtime observability**: IDE plugins can't tell which kimi sessions are still alive, blocking session management GUIs (#2116).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-04-30

---

## Today's Highlights

The OpenCode team shipped **v1.14.30** with critical fixes for Azure Responses reasoning errors and DeepSeek compatibility improvements, alongside recovery logic for lost Desktop sessions. A major security vulnerability — **Plan mode restrictions bypassed by sub-agents** — has been addressed through merged PRs, while community contributors are systematically migrating the test suite to the Effect testing framework. The Azure ecosystem continues to dominate community attention, with high-engagement issues around GPT-5.4 failures and Anthropic model support.

---

## Releases

### [v1.14.30](https://github.com/anomalyco/opencode/releases/tag/v1.14.30)
- **Core:** Fixed missing sessions in Desktop caused by path mismatches, including recovery for existing stored data.
- **Core:** Fixed Azure Responses defaults to avoid reasoning item ordering errors.
- **Core:** Improved DeepSeek compatibility with providers that vary model naming.
- **Core:** Added Mistral Medium 3.5 with reasoning support.

---

## Hot Issues (10 Notable)

### 1. [Azure GPT-5.4 reasoning failure](https://github.com/anomalyco/opencode/issues/20698) — **CLOSED**
*41 comments, 3 👍*
The most active issue this cycle. GPT-5.4 via Azure Cognitive Services repeatedly fails after 1-2 tool calls with "Item of type 'reasoning' was provided without its required following item." Affects both web UI and TUI; even "continue" doesn't help. The v1.14.30 release specifically targets this fix.

### 2. [Anthropic models in Azure AI Foundry](https://github.com/anomalyco/opencode/issues/4474) — **CLOSED**
*26 comments, 10 👍*
Long-standing feature request (Nov 2025) finally gaining traction. Anthropic models are now available in Azure AI Foundry, and the community strongly wants OpenCode to support this native integration rather than forcing custom provider workarounds.

### 3. [CRITICAL: Plan mode sub-agent bypass](https://github.com/anomalyco/opencode/issues/6527) — **CLOSED**
*15 comments, 7 👍*
Security vulnerability where Plan mode agents spawn sub-agents without inheriting parent restrictions — sub-agents can edit files even when the parent is read-only. The model's reasoning explicitly acknowledges this loophole. Addressed in PR #23290.

### 4. [Slow startup on Ghostty](https://github.com/anomalyco/opencode/issues/14965) — **OPEN**
*15 comments, 9 👍*
Users report OpenCode takes very long to start on Ghostty terminal, while Terminal.app, Alacritty, and Kitty work fine. Issue persists since v1.2.1, suggesting a terminal-specific rendering or initialization bottleneck.

### 5. [WSL1 binary compatibility broken](https://github.com/anomalyco/opencode/issues/24081) — **OPEN**
*13 comments, 1 👍*
Versions 1.14.21 and 1.14.22 produce "Exec format error" on WSL1. The last usable version is 1.14.20. This affects users who rely on WSL1 for legacy or constrained environments.

### 6. [No text selection/copy in Ghostty](https://github.com/anomalyco/opencode/issues/2114) — **CLOSED**
*19 comments, 3 👍*
Long-standing UX issue (Aug 2025): users cannot select or copy text in input or output fields when running OpenCode in Ghostty on macOS. This breaks basic workflow for reviewing and reusing AI-generated code.

### 7. [Scrollbars missing / broken](https://github.com/anomalyco/opencode/issues/2500) — **CLOSED**
*18 comments, 9 👍*
Scrollbars render as solid bars, making it impossible to navigate long outputs. High reaction count (9 👍) suggests this impacts a broad user base across terminals.

### 8. [reasoningEffort setting ignored](https://github.com/anomalyco/opencode/issues/25026) — **OPEN**
*6 comments, 0 👍*
Users report that `reasoningEffort` in `opencode.json` has no effect — OpenCode always defaults to HIGH regardless of configuration. Important for cost-conscious users who want to cap reasoning levels.

### 9. [Copy shows success but doesn't copy](https://github.com/anomalyco/opencode/issues/24713) — **OPEN**
*4 comments, 0 👍*
On Linux terminals, copy feedback toast appears but clipboard remains unchanged. This is particularly frustrating as the UI provides false positive feedback.

### 10. [Custom provider "fn3 is not a function"](https://github.com/anomalyco/opencode/issues/7792) — **OPEN**
*6 comments, 0 👍*
Custom provider initialization fails with a cryptic `fn3 is not a function` error. The feature appears incomplete or has compatibility issues, blocking users with non-standard AI backends.

---

## Key PR Progress (10 Important)

### 1. [Fix sub-agent permission inheritance](https://github.com/anomalyco/opencode/pull/23290) — **MERGED**
*By remoses*
Closes the critical security vulnerability (issues #20549, #6527) where task-created child sessions didn't carry over parent `external_dir` and `deny` permissions. Now sub-agents properly inherit Plan mode restrictions.

### 2. [TUI session archive/unarchive](https://github.com/anomalyco/opencode/pull/22372) — **MERGED**
*By B67687*
Adds `/archive` slash command and archived session toggle (Tab) to the TUI. Addresses long-requested session management improvements for users who need to organize old conversations.

### 3. [Mobile touch optimization](https://github.com/anomalyco/opencode/pull/18767) — **OPEN**
*By noahbentusi*
Large PR optimizing the OpenCode App for mobile/touch devices while preserving desktop experience. Includes touch-friendly controls, responsive layouts, and gesture support.

### 4. [Better Azure onboarding UX](https://github.com/anomalyco/opencode/pull/25057) — **MERGED**
*By rekram1-node*
Improves Azure setup flow, likely addressing the high-volume Azure-related issues. Part of a broader push to stabilize Azure integrations.

### 5. [Tighter skill loading guidance](https://github.com/anomalyco/opencode/pull/25044) — **OPEN**
*By rubencu*
Prevents repo- or domain-specific skills from loading unless the task is actually about that repo/domain. Reduces unnecessary context overhead and improves agent focus.

### 6. [Control-plane workspace → Effect migration](https://github.com/anomalyco/opencode/pull/25018) — **OPEN**
*By jlongster*
Major refactor converting workspace lifecycle, sync, restore, and status handling to the Effect framework. Includes inline HTTP servers for tests and expanded parity coverage.

### 7-10. [Effect test migration series](https://github.com/anomalyco/opencode/pulls?q=is%3Apr+author%3Akitlangton+created%3A2026-04-30) — **VARIOUS**
*By kitlangton (6 PRs: #25036, #25050, #25051, #25052, #25053, #25045)*
Coordinated effort to port legacy test patterns to `it.live` and Effect testing helpers. Covers plugin triggers, retry policy, agent colors, workspace adaptors, system prompts, and runner deadlock cases. Significantly improves test reliability and reduces boilerplate.

---

## Feature Request Trends

1. **Azure/Microsoft ecosystem expansion** — Multiple requests for Anthropic models in Azure AI Foundry, better Azure onboarding, and stabilization of Azure Responses integration. The corporate developer segment is a growing constituency.

2. **Mobile and touch optimization** — PR #18767 and related discussions show increasing demand for mobile-first workflows, likely driven by iPad and tablet usage in development.

3. **UI/UX customization** — Requests to hide skill content in conversations, disable console view by default, and stop frequent design changes (with strong negative sentiment). Users want stability and configurability over churn.

4. **Session management improvements** — Archive/unarchive support, better scroll navigation, and text selection/copy capabilities are recurring themes. Basic "readability" infrastructure remains a pain point.

5. **Fast Mode** — A new request for a lightweight, lower-latency mode (Issue #25059) suggests users want an escape from heavy reasoning for simple tasks.

---

## Developer Pain Points

1. **Azure reliability** — GPT-5.4 reasoning errors and general Azure Responses instability are the dominant pain point, causing sessions to crash mid-workflow with no graceful recovery.

2. **Terminal-specific bugs** — OpenCode behaves differently across terminals (Ghostty slow startup, WSL1 binary errors, missing scrollbars, clipboard failures). This fragmentation creates unpredictable user experiences.

3. **Configuration inconsistencies** — Settings like `reasoningEffort` being silently ignored undermines trust in the configuration system. Users expect `opencode.json` to be authoritative.

4. **False positive feedback** — The copy function showing "copied" without actually copying is particularly damaging to UX trust. Similar issues exist with scrollbar indicators that don't function.

5. **Security loopholes** — The Plan mode sub-agent bypass (now fixed) highlights ongoing challenges with permission propagation in agent hierarchies. Users in secure environments need stronger guarantees.

6. **Custom provider fragility** — The "fn3 is not a function" error and general custom provider instability blocks users who need non-standard AI backends, forcing them into limited provider options.

---

*Data collected from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode). Generated 2026-04-30.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-30

## Today's Highlights

A burst of activity across the project: **DeepSeek-V4-Flash** thinking levels, **Bun compatibility**, and **self-update reliability** dominate this week's issues and PRs. The community is actively refining tool-call recovery, session compaction, and terminal emulator compatibility. A notable influx of extension-related feature requests signals growing ecosystem maturity.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#3929 — Bun startup crash when `bun pm bin -g` fails](https://github.com/badlogic/pi-mono/issues/3929)** (Closed, 7 comments, 3 👍)  
   Pi crashes on startup under Bun with a "No package.json found" error. A follow-up to earlier fixes for `bun root -g`. High impact for Bun users.

2. **[#3984 — DeepSeek 4pro on fireworks provider broken](https://github.com/badlogic/pi-mono/issues/3984)** (Closed, 6 comments)  
   Only this model fails on Fireworks, despite working in other tools. Community suspects a provider mapping issue.

3. **[#3879 — deepseek-v4-flash xhigh thinking level missing](https://github.com/badlogic/pi-mono/issues/3879)** (Closed, 4 comments, 6 👍)  
   `max` reasoning effort not exposed for Flash model. High-demand feature with strong community backing.

4. **[#3942 — `pi update --self` fails with npm --prefix](https://github.com/badlogic/pi-mono/issues/3942)** (Open, 4 comments)  
   Self-update mechanism from v0.70.3 breaks for non-standard npm prefixes (e.g., Nix-managed Node.js).

5. **[#3944 — deepseek-v4-flash missing xhigh in `supportsXhigh()`](https://github.com/badlogic/pi-mono/issues/3944)** (Closed, 3 comments)  
   Root cause identified: the support function only lists `deepseek-v4-pro`. Simple fix with big impact.

6. **[#3978 — `pi config` hardcodes path in group label](https://github.com/badlogic/pi-mono/issues/3978)** (Open, 3 comments)  
   Skills from custom paths mislabeled under `~/.pi/agent/`. A UI/UX accuracy issue for power users.

7. **[#3931 — Missing latest OpenRouter models](https://github.com/badlogic/pi-mono/issues/3931)** (Closed, 3 comments)  
   Models like `gpt-5.5` unavailable despite being on OpenRouter. Suggests stale model catalog.

8. **[#3904 — Thai Sara Am character causes duplicate lines](https://github.com/badlogic/pi-mono/issues/3904)** (Closed, 3 comments)  
   Unicode `U+0E33` triggers rendering bugs in the TUI. An important fix for international users.

9. **[#3910 — DeepSeek model pricing mismatch](https://github.com/badlogic/pi-mono/issues/3910)** (Closed, 3 comments)  
   Cached prices for `deepseek-v4-flash` are incorrect vs official pricing. Impacts cost tracking.

10. **[#3989 — Mistral Medium 3.5 support request](https://github.com/badlogic/pi-mono/issues/3989)** (Closed, 3 comments)  
    User tested locally and requests upstream support. SDK doesn't expose reasoning config yet.

## Key PR Progress

1. **[#4000 — Compress skill blocks during compaction](https://github.com/badlogic/pi-mono/pull/4000)** (Closed)  
   Reduces token waste by compressing `<skill>` XML blocks during conversation compaction while preserving critical rules.

2. **[#3998 — Fix Bun package manager node_modules handling](https://github.com/badlogic/pi-mono/pull/3998)** (Open)  
   Reverts a faulty change; correctly discriminates Bun as package manager vs runtime.

3. **[#3996 — Isolate $HOME in package-manager symlink test](https://github.com/badlogic/pi-mono/pull/3996)** (Closed)  
   Test fix wrapping existing pattern to avoid test pollution.

4. **[#3991 — Handle duplicate session entries](https://github.com/badlogic/pi-mono/pull/3991)** (Open)  
   Fixes unresponsive `/tree` commands by skipping duplicate entry IDs in session tree building.

5. **[#3973 — Auto-recover stale tool-call text responses](https://github.com/badlogic/pi-mono/pull/3973)** (Closed)  
   Detects XML tool calls emitted as text (e.g., DeepSeek-V4-Flash DSML) and auto-recovers.

6. **[#3915 — Run slash commands from inline autocomplete](https://github.com/badlogic/pi-mono/pull/3915)** (Closed)  
   Mid-text slash command execution (cursor-like). Non-destructive commands preserve surrounding text.

7. **[#3868 — Migrate syntax highlighting to Shiki](https://github.com/badlogic/pi-mono/pull/3868)** (Open)  
   Major refactor: replaces terminal/HTML highlighting with Shiki, adding `syntaxTheme` support.

8. **[#3986 — Add Gloo AI as first-class provider](https://github.com/badlogic/pi-mono/pull/3986)** (Closed)  
   Full provider integration with OAuth2, 22-model catalog, and OpenAI-compatible path.

9. **[#3963 — Add `--profile` and `PI_PROFILE` for isolated state](https://github.com/badlogic/pi-mono/pull/3963)** (Closed)  
   DX enhancement: profile-based state isolation (`~/.pi/profiles/<name>/agent`) without breaking existing config.

10. **[#3961 — Treat inline `<br>` HTML as newline](https://github.com/badlogic/pi-mono/pull/3961)** (Closed)  
    Fixes raw `<br>` leakage in GFM table cells and other contexts where LLMs use inline HTML.

## Feature Request Trends

- **Extension & Provider Customization**: Multiple requests for `displayName` in extension providers ([#3956](https://github.com/badlogic/pi-mono/issues/3956)), custom fetch hooks ([#3987](https://github.com/badlogic/pi-mono/issues/3987)), and extension-based cost override ([#3982](https://github.com/badlogic/pi-mono/issues/3982)).
- **Model Availability**: Repeated requests for DeepSeek-V4-Flash thinking levels ([#3879](https://github.com/badlogic/pi-mono/issues/3879), [#3944](https://github.com/badlogic/pi-mono/issues/3944)) and missing OpenRouter models ([#3931](https://github.com/badlogic/pi-mono/issues/3931)).
- **Self-update Reliability**: Multiple installation methods (npm --prefix, system-wide, bun) break self-update ([#3942](https://github.com/badlogic/pi-mono/issues/3942), [#3922](https://github.com/badlogic/pi-mono/issues/3922), [#3980](https://github.com/badlogic/pi-mono/issues/3980)).
- **New Model Support**: Mistral Medium 3.5 ([#3989](https://github.com/badlogic/pi-mono/issues/3989)) and Gloo AI as a first-class provider ([#3986](https://github.com/badlogic/pi-mono/pull/3986)).
- **Short-lived Credentials**: `!!` syntax for apiKey to prevent caching of short-lived tokens ([#3872](https://github.com/badlogic/pi-mono/issues/3872)).

## Developer Pain Points

1. **Bun Compatibility (High Frequency)**: Multiple issues (startup crash, self-update, node_modules, `bun root -g` failures) indicate Bun is a second-class citizen despite being a common runtime/package manager.
2. **Self-Update Fragility**: Three distinct failure modes for `pi update` (npm --prefix, system-wide, bun) suggest the self-update mechanism lacks proper installation detection.
3. **Terminal Emulator Inconsistencies**: Key handling bugs in Alacritty ([#3974](https://github.com/badlogic/pi-mono/issues/3974)) and Kitty ([#3967](https://github.com/badlogic/pi-mono/issues/3967)) suggest insufficient terminal emulator testing.
4. **Cost & Pricing Mismatch**: Both DeepSeek pricing ([#3910](https://github.com/badlogic/pi-mono/issues/3910)) and proxy-reported costs ([#3971](https://github.com/badlogic/pi-mono/issues/3971)) show the cost tracking system needs more robust hooks.
5. **Stale Model Catalogs**: Missing models from OpenRouter, Fireworks, and DeepSeek indicate manual catalog maintenance isn't keeping pace with provider releases.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-30

## Today's Highlights
The v0.15.5 stable release shipped with MCP configuration as CLI and background shell wiring into `task_stop`. A persistent `reasoning_content` bug affecting DeepSeek API thinking mode users saw multiple fix PRs merged, including a root-cause patch from the community. A fresh batch of feature PRs landed for file read caching, proxy support, and a shared permission flow across all interaction modes.

## Releases
- **v0.15.5** (stable): MCP config as CLI (`#1279`), refresh static header on model switch (`#3667`), wire background shells into `task_stop` tool (`#3687`).
- **v0.15.5-preview.0**: Same changeset as v0.15.5.
- **v0.15.6-preview.0**: Fix memory dream path (`#3722`), bound SubAgent display by visual height to prevent flicker (`#3721`), keep sticky todo panel.
- **v0.15.3-nightly.20260430**: Same fixes as preview.0.

## Hot Issues

1. **#3579 – DeepSeek API 400 error: `reasoning_content` must be passed back** *(Closed)*  
   Community-reported bug where DeepSeek's thinking mode demands `reasoning_content` relayed from prior assistant turns. Generated 11 comments and several duplicates. Root cause traced to three code paths in `converter.ts`.  
   [Issue](QwenLM/qwen-code Issue #3579)

2. **#3619 – DeepSeek V4 API Error 400 – reasoning_content (Chinese report)** *(Closed)*  
   Duplicate of #3579 with identical symptoms. Community member provided detailed reproduction steps.  
   [Issue](QwenLM/qwen-code Issue #3619)

3. **#3740 – v0.15.5 overwrites user-configured non-Coding Plan models** *(Open)*  
   Regression in v0.15.5: CLI forces Coding Plan model list on every startup, overwriting user-configured OpenAI-compatible models. 8 comments, strong user frustration.  
   [Issue](QwenLM/qwen-code Issue #3740)

4. **#3652 – Internal error: input length exceeds 983,616 tokens** *(Open)*  
   Long-context sessions hit provider-imposed input length limits without graceful compression. 7 comments; user forced to create new chats and lose context.  
   [Issue](QwenLM/qwen-code Issue #3652)

5. **#3307 – Alibaba Cloud Coding Plan "Temporarily out of stock" for a week** *(Closed)*  
   Users unable to purchase Qwen 3.6 Plus access. No official ETA provided; community expressed frustration over capacity issues.  
   [Issue](QwenLM/qwen-code Issue #3307)

6. **#1276 – Request: standalone native binary (Node-free)** *(Closed)*  
   Enterprise users request a self-contained binary to avoid Node.js TLS/CA trust issues in proxy-restricted environments. 4 comments, 3 👍.  
   [Issue](QwenLM/qwen-code Issue #1276)

7. **#2657 – Ralph loop persists across sessions** *(Closed)*  
   Persistent state file causes agent loops to survive session boundaries. Fix merged — now session-scoped.  
   [Issue](QwenLM/qwen-code Issue #2657)

8. **#3724 – Root-cause analysis of `reasoning_content` bug with patch code** *(Closed)*  
   Community member `enochday` identified two missing `reasoning_content` relay points in `converter.ts` and contributed a fix. Highly actionable community contribution.  
   [Issue](QwenLM/qwen-code Issue #3724)

9. **#3638 – Terminal flickering with GLM model** *(Closed)*  
   User reported blinding terminal flicker. Already fixed in v0.15.6-preview.0 via visual height bounding.  
   [Issue](QwenLM/qwen-code Issue #3638)

10. **#3716 – Infinite loop on ReadLines** *(Closed)*  
    Agent enters infinite loop repeating the same line numbers. Community suggested replacing ReadLines with `sed`/`Get-Content`.  
    [Issue](QwenLM/qwen-code Issue #3716)

## Key PR Progress

1. **#3737 – Fix `reasoning_content` in rewind, compression, and merge paths** *(Closed)*  
   Completes the fix for #3579 by patching three remaining code paths. Merged quickly — community contributor `fyc09`.  
   [PR](QwenLM/qwen-code PR #3737)

2. **#3717 – FileReadCache + short-circuit unchanged Reads** *(Open)*  
   Prevents re-emission of unchanged file content in long sessions, reducing token waste. Significant UX improvement for large repos.  
   [PR](QwenLM/qwen-code PR #3717)

3. **#3723 – Shared permission flow for tool execution unification** *(Open)*  
   Unifies L3→L4 permission decisions across Interactive, Non-Interactive, and ACP modes — a foundational refactor for consistent tool behavior.  
   [PR](QwenLM/qwen-code PR #3723)

4. **#3754 – Expanded review pipeline + `qwen review` CLI subcommands** *(Open)*  
   9 parallel reviewer agents, iterative reverse audit, and six new CLI helpers. Major expansion of the code review skill.  
   [PR](QwenLM/qwen-code PR #3754)

5. **#3753 – Honor proxy setting in CLI** *(Open)*  
   Implements documented `proxy` key in `settings.json` with proper precedence (CLI flag > settings > env vars). Addresses connectivity issues in enterprise networks.  
   [PR](QwenLM/qwen-code PR #3753)

6. **#3684 – Event monitor tool with throttled stdout streaming (Phase C)** *(Open)*  
   Adds long-running shell monitoring with token-bucket throttling, registry lifecycle management, and idle timeout — part of the background task roadmap.  
   [PR](QwenLM/qwen-code PR #3684)

7. **#3739 – Background agent resume and continuation** *(Open)*  
   Persists interrupted background agents for explicit resume/abandon flows. Transcript-first fork-agent resume preserves worker context.  
   [PR](QwenLM/qwen-code PR #3739)

8. **#2886 – Agent Team: parallel sub-agent coordination** *(Open)*  
   Experimental feature allowing lead agent to spawn and coordinate parallel sub-agents on separate task parts. Off by default; gated behind env var.  
   [PR](QwenLM/qwen-code PR #2886)

9. **#3752 – Persist `/directory add` entries** *(Closed)*  
   Fixes in-memory-only directory persistence — added directories now survive session restarts.  
   [PR](QwenLM/qwen-code PR #3752)

10. **#3762 – VSCode: message edit/rewind + metadata UI** *(Open)*  
    Adds full message editing, rewind capability, and rich metadata display in the VSCode extension.  
    [PR](QwenLM/qwen-code PR #3762)

## Feature Request Trends
- **Standalone native binary**: Enterprise users continue requesting a Node.js-free distribution to bypass TLS/CA proxy issues (`#1276`).
- **Configurable plans directory**: Multiple users want Gemini/Claude-style custom plan storage paths (`#3548`).
- **Light theme for `/export` HTML**: Accessibility request from users experiencing eye strain with the dark-only export (`#3678`, 3 👍).
- **MCP tools in Plan mode**: Users want to use web search/scraping tools during planning without "blocked non-read-only" errors (`#740`).

## Developer Pain Points
- **DeepSeek thinking mode**: The `reasoning_content` bug dominated the issue tracker this week (5+ duplicates). Community contributed the root-cause analysis and fix patches — a strong sign of engaged power users.
- **Model configuration overrides**: v0.15.5 introduced a regression where user-configured non-Coding Plan models are overwritten on startup (`#3740`). High frustration, 8 comments in 24 hours.
- **Long-context compression not honored**: `contextPercentageThreshold` and `contextWindowSize` settings are silently ignored, causing hard failures at provider token limits (`#3426`).
- **Non-interactive error handling**: `-p` mode prints API errors three times with double-wrapped messages and a stack trace — poor DX for automation pipelines (`#3748`).
- **Proxy support gap**: The documented `proxy` key in settings.json was never actually read by the CLI (`#3742`), forcing users to rely on environment variables or CLI flags.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*