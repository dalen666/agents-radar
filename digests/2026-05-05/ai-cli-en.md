# AI CLI Tools Community Digest 2026-05-05

> Generated: 2026-05-05 04:19 UTC | Tools covered: 8

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
**Date:** 2026-05-05

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is maturing rapidly, with six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, and Qwen Code—competing across reliability, model integration, and workflow automation. The dominant cross-cutting themes this week are **session persistence crises** (data loss, resume failures), **model quality volatility** following major model launches (Opus 4.7, GPT-5.5), and **infrastructure reliability** (Linux sandbox, Windows crashes, proxy/auth issues). While Claude Code and Codex lead in community size and feature surface, smaller tools like Pi and Qwen Code are iterating aggressively on niche differentiators (local LLM support, background task management). The ecosystem shows clear signs of commoditizing core agent capabilities while racing to differentiate on safety, cross-platform stability, and enterprise-grade session management.

---

## 2. Activity Comparison

| Tool | Open Issues | PRs (last 24h) | Release Cadence | Top Issue Engagement |
|---|---|---|---|---|
| **Claude Code** | ~30 tracked (high-severity) | 6 (2 spam) | v2.1.128 (recent) | #26452: 43 comments, 21 👍 (session loss) |
| **OpenAI Codex** | ~20 tracked | 10 active | 3 alpha releases today | #19464: 153 👍 (1M context window) |
| **Gemini CLI** | ~10 tracked | 10 active | nightly v0.42.0 | #24517: 163 comments (403 permission denied) |
| **GitHub Copilot CLI** | ~10 tracked | 0 | v1.0.41-0 (recent) | #2591: 31 comments (premium request looping) |
| **Kimi Code CLI** | 3 active | 0 | v1.41.0 (stable) | #2160: 3 comments (Windows crashes) |
| **OpenCode** | ~40 tracked | 10 active | v1.14.35 (today) | #24418: 23 comments (Windows startup hang) |
| **Qwen Code** | ~15 tracked | 10 active | nightly v0.15.6 (today) | #3634: roadmap issue (background tasks) |
| **Pi** | ~20 tracked | 10+ active | v0.73.0 (today) | #3357: 22 👍 (local LLM support) |

**Key Takeaways:**
- **Codex** leads in PR throughput (10 active, 3 releases today)
- **Claude Code** has the most severe open issues (session/data loss dominate)
- **Kimi Code** is quietest (3 issues, no PRs today)
- **Copilot CLI** has zero PR activity in 24h—lowest development velocity this week
- **Pi** and **Qwen Code** show aggressive nightly release cycles

---

## 3. Shared Feature Directions

### 3.1 Session Persistence & Recovery (ALL tools)
- **Claude Code**: #26452, #48782 — sessions vanish on restart, JSONL files deleted
- **OpenCode**: #25803 — retry loops with no escape; #25768 — session warping PR
- **Qwen Code**: #3606 — `/resume` claims "no session found" despite valid files
- **Copilot CLI**: No direct issue, but premium request loops indicate state management gaps
- **Community demand**: Zero data loss as baseline; client-side session preservation stopgaps (Claude Code PR #55864)

### 3.2 Multi-Agent Collaboration Protocols (Claude Code, Copilot CLI)
- **Claude Code**: #28300 — cross-machine agent-to-agent protocol
- **Copilot CLI**: #1665 — project-scoped plugins for team sharing
- **Gemini CLI**: subagent recovery (#22323) and memory routing (#22819)
- **Trend**: Agents must interoperate beyond single-machine, single-session boundaries

### 3.3 Configurable Subagent/Model Effort (Claude Code, Pi, Qwen Code)
- **Claude Code**: #43083, #50502 — independent `effortLevel` per subagent
- **Pi**: #3208 — custom thinking levels per model
- **Qwen Code**: #3815 — per-model settings for fast side queries
- **Common need**: Fine-grained control over reasoning costs and latency per agent role

### 3.4 Linux Sandbox & Cross-Platform Stability (Codex, Copilot CLI, OpenCode, Pi)
- **Codex**: #15057 — bwrap/AppArmor failures on Ubuntu; PR #21127 addresses
- **Copilot CLI**: #2421 — HTTP/2 GOAWAY race conditions
- **OpenCode**: #24418 — Windows stuck on "Loading plugins"
- **Pi**: #4157 — Windows `pi-update` TLS warnings
- **Pattern**: macOS leads in stability; Windows and Linux lag significantly

### 3.5 Non-Interactive/Headless Mode Parity (Copilot CLI, Pi, Qwen Code)
- **Copilot CLI**: #2795 — `--agent` flag broken with `-p` / non-interactive
- **Pi**: #4134 — `pi -p` hangs after completion; #4163 — silent no-op with `---`
- **Qwen Code**: general pipeline integration challenges
- **Need**: CI/CD-grade reliability for automated workflows

### 3.6 Cost Controls & Token Visibility (Claude Code, Copilot CLI, Gemini CLI)
- **Claude Code**: #56075 — entire 5-hour Max plan consumed in 9 minutes
- **Copilot CLI**: #2591 — infinite premium request loops; #2421 — silent quota consumption
- **Gemini CLI**: #26485 — no visible feedback on steering hints
- **Demand**: Configurable spending caps, per-session budgets, real-time usage indicators

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code | Pi |
|---|---|---|---|---|---|---|---|
| **Primary User** | Power developers, multi-agent workflows | Large-codebase enterprise teams | Google ecosystem developers | GitHub-native developers | Generalists, multi-provider | Open-source ML community | Tinkerers, local-first devs |
| **Strengths** | Plugin ecosystem, multi-agent, Opus model | 1M context (requested), rapid alpha iteration | AST-aware tooling, memory routing | GitHub integration, plugin hooks | Multi-provider support, session warping | Background tasks, FileReadCache | Local LLM support, provider extensibility |
| **Weaknesses** | Data loss crisis, Opus quality volatility | Linux sandbox broken, TUI input gaps | Auth failures (403), MCP friction | Premium request waste, agent looping | Windows stability, plan mode regression | Terminal rendering glitches, session bloat | Cross-platform gaps, high bug sweep |
| **Technical Approach** | Heavy plugin system (hookify) | Rust-based CLI, ThreadStore persistence | Agent bot automation, nightly releases | Plugin hooks, permission profiles | Hono/HttpApi dual backend, Electron | Nightly builds, Python SDK, OpenRouter | NPM ecosystem, extension providers |
| **Model Strategy** | Anthropic Opus (proprietary) | GPT-5.5 (API-gated) | Gemini (Google ecosystem) | Copilot models (enterprise-gated) | Multi-provider (bring your own) | Qwen (open) + OpenAI-compatible | Multi-provider + local LLM |

**Key Differentiator Signals:**
- **Claude Code**: Most sophisticated plugin architecture but plagued by trust issues
- **Codex**: Most aggressive release cadence (3 alpha/day); highest feature-demand (1M context at 153 👍)
- **Gemini CLI**: Most systematic approach to agent evaluation (76→comprehensive behavioral tests)
- **Copilot CLI**: Tightest GitHub integration but slowest iteration speed
- **OpenCode**: Most comprehensive session management (warping, cancellation propagation)
- **Qwen Code**: Strongest open-source alignment (Python SDK, OpenRouter, nightly builds)
- **Pi**: Unique local-first niche (llama.cpp, ollama extensions) with highest bug density

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
- **OpenAI Codex**: 10 active PRs, 3 releases today, top feature request at 153 👍 — strongest signal of enterprise demand
- **Qwen Code**: Nightly release cadence, 10 PRs, roadmap-driven development (#3634 background tasks) — open-source community growing
- **Pi**: v0.73.0 today, 10+ PRs, local LLM extension merged — small but highly engaged community
- **OpenCode**: v1.14.35 today, 10 PRs, session warping merged — maturing rapidly

### Mature but Stressed
- **Claude Code**: Largest feature surface but **data loss crisis** eroding trust; 3-month-old session loss issue (#26452) still open — highest severity pain point across all tools
- **Gemini CLI**: Steady nightly releases, systematic eval improvements, but auth issues (#24517, 163 comments) dominate

### Low Velocity / Stable
- **Kimi Code**: 3 issues, 0 PRs, no new release — may indicate maintenance mode or internal restructuring
- **Copilot CLI**: v1.0.41-0 shipped but 0 PRs in 24h — lowest activity; premium request bugs (#2591, 31 comments) suggest resource constraints

### Community Size Indicators
| Tool | Top Issue Comments | Top Issue Reactions | PRs/24h |
|---|---|---|---|
| Claude Code | 43 | 61 (dark mode) | 6 |
| OpenAI Codex | 121 | 153 (1M context) | 10 |
| Gemini CLI | 163 | 63 (403 error) | 10 |
| Copilot CLI | 31 | 16 (GOAWAY) | 0 |
| OpenCode | 23 | 23 (copy-on-select) | 10 |
| Qwen Code | ~10 | Roadmap (lower visibility) | 10 |
| Pi | 14 | 22 (local LLM) | 10+ |

---

## 6. Trend Signals

### 6.1 The Session Persistence Crisis is Existential
Every major tool except Copilot CLI has open issues about **data loss, state corruption, or session disappearance**. Users are losing hours or months of work. This is the #1 risk to adoption—developers cannot trust AI CLI tools with significant work without reliable persistence.

### 6.2 Model Quality Volatility is Undermining Trust
Claude Code's Opus 4.7 pattern (high quality at launch, degraded within a week, #53459) mirrors the 4.6 cycle. Codex's GPT-5.5 context window cap (#19464) frustrates power users. The **lack of transparency** about server-side model changes erodes developer confidence.

### 6.3 "Write-Once, Run-Anywhere" Agent Protocols are Emerging
Cross-machine multi-agent protocols (#28300 in Claude Code), project-scoped plugins (#1665 in Copilot CLI), and standard agent identity env vars (#4169 in Pi) signal industry movement toward **interoperable agent ecosystems**—a potential "HTTP of agents" standard.

### 6.4 Safety-Critical File Operations Need Guardrails
Three tools (Claude Code #50952, Qwen Code #3839/#3840, Copilot CLI #2643) have issues about **destructive operations without verification**. The community expects: mandatory confirmation for irreversible operations, stale-file detection before write, and "defense-in-depth" for file mutation.

### 6.5 the Local LLM Renaissance is Real
Pi's local LLM extensions (#3357 at 22 👍, PR #4154 merged today) and Qwen Code's open-weight model strategy signal growing demand for **privacy-preserving, offline-capable** AI coding assistants. Expect more tools to offer local inference as GPU hardware improves.

### 6.6 Enterprise Requirements are Driving Feature Backlogs
Cross-cutting enterprise needs include: **per-project configuration** (Claude Code, Copilot CLI, Gemini CLI), **cost controls and budgets** (Claude Code #56075, Copilot CLI #2591), **SSO/auth stability** (Codex #20161, Gemini CLI #24517), and **support SLAs** (OpenCode #25373). The consumer-to-enterprise transition requires reliability over novelty.

### 6.7 The Tools are Commoditizing the Core Agent Loop
All tools now offer: file editing, shell execution, multi-turn conversation, and basic memory. Differentiation is shifting to **reliability, safety, and ecosystem integration**—not raw capabilities. The next competitive frontier is: how well does your tool *not lose my work*?

---

*Report generated 2026-05-05 from community digest data for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code, and Pi.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-05 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills have generated the most discussion and community engagement via pull requests:

**1. document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
*Status: Open | Author: PGTBoos*
Prevents common typographic defects in AI-generated documents—orphan word wrap, widow paragraphs, and numbering misalignment. Discussion centers on the pervasive nature of these formatting issues in Claude outputs. The PR has substantial review activity addressing edge cases in PDF and DOCX documents.

**2. frontend-design skill** ([PR #210](https://github.com/anthropics/skills/pull/210))
*Status: Open | Author: justinwetch*
Revises the frontend-design skill for clarity and actionability, ensuring every instruction is executable within a single conversation. The discussion highlights community frustration with overly abstract skill instructions that Claude cannot reliably follow.

**3. skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
*Status: Open | Author: eovidiu*
Two meta-skills for evaluating other skills across five quality dimensions (structure, documentation, examples, etc.) and security. The discussion covers the need for standardized quality gates before community skills enter the marketplace.

**4. ODT skill — OpenDocument text creation** ([PR #486](https://github.com/anthropics/skills/pull/486))
*Status: Open | Author: GitHubNewbie0*
Enables creation, filling, reading, and conversion of OpenDocument files (.odt, .ods). Discussion reveals strong demand from LibreOffice users and open-source document workflows.

**5. CONTRIBUTING.md** ([PR #509](https://github.com/anthropics/skills/pull/509))
*Status: Open | Author: narenkatakam*
Adds a CONTRIBUTING.md to address the repository's 25% community health score. While not a skill itself, this PR has generated significant discussion around lowering the barrier for new contributors and establishing clear submission standards.

**6. SAP-RPT-1-OSS predictor skill** ([PR #181](https://github.com/anthropics/skills/pull/181))
*Status: Open | Author: amitlals*
Integrates SAP's open-source tabular foundation model for enterprise predictive analytics. Discussion focuses on enterprise use cases and the complexity of integrating external ML models within the Skills framework.

**7. testing-patterns skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
*Status: Open | Author: 4444J99*
Comprehensive testing stack coverage: Testing Trophy philosophy, unit testing (AAA pattern), React component testing, and what-not-to-test guidance. High engagement from developers seeking structured testing guidance for Claude-assisted development.

**8. ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
*Status: Open | Author: Vanka07*
Broad ServiceNow platform coverage including ITSM, ITOM, SecOps, ITAM/SAM, and IntegrationHub. Discussion underscores enterprise demand for platform-specific assistant skills.

---

## 2. Community Demand Trends

Analysis of the most-discussed Issues reveals five key demand directions:

| Trend | Signal | Key Issue |
|---|---|---|
| **Org-wide skill sharing & management** | #228 (9 comments, 7 👍) requests direct sharing links and shared skill libraries within organizations. Users currently resort to Slack/Teams file sharing. | [Issue #228](https://github.com/anthropics/skills/issues/228) |
| **Skill reliability & persistence** | #62 (10 comments) reports skills disappearing after file renames; #61 (3 comments) reports 404 errors loading skills. Core platform stability concerns. | [Issue #62](https://github.com/anthropics/skills/issues/62) |
| **Skill evaluation & validation infrastructure** | #556 (6 comments, 6 👍) documents that `run_eval.py` has 0% skill triggering rate—the evaluation framework itself is broken. | [Issue #556](https://github.com/anthropics/skills/issues/556) |
| **Trust & namespace security** | #492 (4 comments, 2 👍) reveals that community skills under `anthropic/` namespace impersonate official skills, creating trust-boundary vulnerabilities. | [Issue #492](https://github.com/anthropics/skills/issues/492) |
| **Duplicate skill resolution** | #189 (5 comments, 7 👍) finds `document-skills` and `example-skills` plugins contain identical content, wasting context window space. | [Issue #189](https://github.com/anthropics/skills/issues/189) |

**Enterprise integration** (AWS Bedrock via #29), **MCP exposure** (#16), and **agent governance safety patterns** (#412) also show sustained interest but with fewer comments.

---

## 3. High-Potential Pending Skills

These open PRs show active development and community engagement, suggesting imminent merging:

**appdeploy skill** ([PR #360](https://github.com/anthropics/skills/pull/360))
*Author: avimak | Updated 2026-05-04*
Deploys full-stack web apps directly from Claude via AppDeploy.ai. Freshly updated, suggests active work toward final review.

**sensory skill — macOS automation** ([PR #806](https://github.com/anthropics/skills/pull/806))
*Author: AdelElo13 | Updated 2026-04-02*
AppleScript-based native macOS automation with two-tier permission system. Addresses demand for computer-use alternatives beyond screenshot-based approaches.

**claude-obsidian-reporter** ([PR #664](https://github.com/anthropics/skills/pull/664))
*Author: sinaayyy | Updated 2026-03-22*
Auto-generates structured daily/weekly/monthly Git reports into Obsidian vaults. Popular among developer journaling workflows.

**Fix batch: PDF, DOCX, skill-creator** ([PR #538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541))
*Author: Lubrsy706 | Various updates through April 2026*
A concentrated bug-fix series addressing case-sensitive file references, YAML parsing failures, and document corruption in DOCX tracked changes. The precision of these fixes suggests a contributor with deep file-format expertise—these are likely to merge together.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for quality infrastructure—reliable skill evaluation frameworks, namespace trust mechanisms, and deduplication tooling—rather than new skill functionality, indicating the ecosystem is maturing from "add more skills" to "trust and manage the skills we have."**

---

# Claude Code Community Digest — 2026-05-05

## Today's Highlights

The community conversation this week is dominated by two interrelated themes: **data loss and session reliability** concerns, and **model quality volatility** following the Opus 4.7 launch. Multiple high-severity bugs around session disappearance, memory system failures, and aggressive task state misclassification have eroded trust in Claude Code's persistence layer. Meanwhile, Opus 4.7 is under scrutiny for a perceived quality degradation pattern that mirrors the 4.6 launch cycle, alongside reports of destructive Docker operations and excessive quota consumption. On the positive side, v2.1.128 shipped quality-of-life improvements to `/color` and `/mcp` commands, and the community continues to push for multi-agent collaboration protocols and configurable subagent reasoning.

---

## Releases

**v2.1.128** — Released within the last 24 hours.
- Bare `/color` (no args) now picks a random session color — a small but welcome usability touch.
- `/mcp` now displays the tool count for connected MCP servers and flags servers that connected with zero tools, improving debuggability.
- `--plugin-dir` now accepts `.zip` plugin archives in addition to directories.
- `--channels` now works with console (AP) — likely addressing a prior gap in channel-based output routing.

*No other releases in the last 24 hours.*  
[View full release](https://github.com/anthropics/claude-code/releases)

---

## Hot Issues

### 🔥 1. [#26452 — Session Disappeared After Logout/Restart](https://github.com/anthropics/claude-code/issues/26452)
**Opened Feb 18 — 43 comments, 21 👍** — Still open after nearly 3 months.
The longest-running cry for help in the top 30. Users report that closing and reopening Claude Code Desktop causes all prior sessions to vanish from the UI. No restore mechanism exists. The community is frustrated by the lack of progress on a foundational reliability feature.

### 🔥 2. [#48158 — Dark Mode Redesign Regression](https://github.com/anthropics/claude-code/issues/48158)
**61 👍, 25 comments** — The most-upvoted open issue.
A cosmetic but highly visible change on `claude.ai/code` has polarized the community. Users find the new dark theme harder to read and navigate, calling it a step backward from the previous design.

### 🔥 3. [#53459 — Opus 4.7 Quality Regression Pattern](https://github.com/anthropics/claude-code/issues/53459)
**10 👍, 6 comments** — Flags a deeply concerning pattern.
Reports that Opus 4.7 launched with noticeably higher reasoning quality, then silently degraded within ~1 week — exactly mirroring the Opus 4.6 launch cycle. If true, this suggests either throttled inference compute post-launch or model-weight rollbacks. High trust impact.

### 🔥 4. [#50952 — Opus 4.7 Destructive Docker rm Without Verification](https://github.com/anthropics/claude-code/issues/50952)
**1 👍, 5 comments** — Low upvote count but high severity.
A user lost production n8n workflow data when Claude Code ran `docker stop && docker rm` without first checking if volumes were mounted. Raises questions about the model's operational safety when executing destructive commands.

### 🔥 5. [#48782 — Claude Code Deletes 160 Session JSONL Files](https://github.com/anthropics/claude-code/issues/48782)
**0 👍, 4 comments** — Forensic evidence of massive data loss.
A user lost 60,702 messages across 160 JSONL files. Critically, the auto-memory system captured *nothing* about months of work. This is linked to several related issues (#48334, #46621, etc.) forming a pattern of session data deletion.

### 🔥 6. [#48312 — Tasks Sidebar Shows Completed Tasks as "Running"](https://github.com/anthropics/claude-code/issues/48312)
**1 👍, 8 comments** — Reproducible UI bug.
Background bash tasks that have already exited remain stuck in "Running" state in the Tasks sidebar. The dismiss button is unresponsive, causing accumulation of stale entries. Minor individually, but blocks workflow hygiene for power users.

### 🔥 7. [#28300 — Multi-agent Collaboration Across Machines](https://github.com/anthropics/claude-code/issues/28300)
**0 👍, 9 comments** — Agent-to-Agent protocol request.
A feature request for enabling agents running on different machines to communicate directly. The community sees this as the logical next step after single-machine multi-agent support. Low visibility but strategically important.

### 🔥 8. [#55488 — Subagent Misidentifies as Team-Lead, Exposes Parent History](https://github.com/anthropics/claude-code/issues/55488)
**0 👍, 6 comments** — Agent identity/security bug.
When DM'd directly, a spawned subagent claims to be the "team-lead" and exposes the parent's full conversation history. This is a regression that breaks the isolation contract between parent and child agents.

### 🔥 9. [#56075 — Single README Edit Burns Entire 5-Hour Max Window in 9m 39s](https://github.com/anthropics/claude-code/issues/56075)
**2 👍, 4 comments** — Cost/token accounting issue.
A user on Opus 4.7 with a 1M token window had their entire 5-hour Max plan consumed in under 10 minutes for a trivial edit. Suggests either extreme context inflation, runaway tool loops, or a billing meter bug.

### 🔥 10. [#54200 — Memory Leak Since v2.1.118 (Linux)](https://github.com/anthropics/claude-code/issues/54200)
**0 👍, 6 comments** — Per-project memory explosion.
One specific project causes RAM usage to hit 10GB within 30 seconds of starting a session (idle). Does not affect other projects. Points to a per-project state corruption or runaway recursive processing bug introduced in the last few releases.

---

## Key PR Progress

### ✅ 1. [#56179 — Remove 'statsig.anthropic.com' from firewall script](https://github.com/anthropics/claude-code/pull/56179)
Open. Cleanup PR removing a stale statsig domain that now returns NXDOMAIN. Minor but signals cleanup of internal telemetry infrastructure.

### ✅ 2. [#55864 — Add session-persist plugin for client-side session state preservation](https://github.com/anthropics/claude-code/pull/55864)
Open. A community-contributed stopgap that preserves session state client-side when the window is closed mid-task. Directly addresses the widespread session-loss complaints while waiting for a proper server-side fix.

### ✅ 3. [#33007 — Fix hookify field mapping for stop and prompt events](https://github.com/anthropics/claude-code/pull/33007)
Closed (merged). Fixes a bug where `Rule.from_dict()` mis-mapped field patterns for `stop` and `prompt` events. Low-level fix to the hookify plugin configuration system.

### ✅ 4. [#33006 — Fix code-review README to match actual workflow](https://github.com/anthropics/claude-code/pull/33006)
Closed (merged). Updates outdated documentation for the code-review plugin that still referenced an old confidence-scoring architecture. Now correctly describes the validation-based approach.

### ✅ 5. [#55832 — Fix stray content in plugin-validator.md](https://github.com/anthropics/claude-code/pull/55832)
Open. Cleanup PR removing accidental dialogue text ("Excellent work! The agent-development skill is now complete...") from the end of an agent documentation file. Points to possible template injection or copy-paste errors in docs generation.

### ❌ 6. [#56176 — Claude/book outline bootstrap toolkit 011 c ur cgx bch aj ag l pb gu4 dw](https://github.com/anthropics/claude-code/pull/56176)
Open. A spam/nonsensical PR with a garbled title and no description. Unlikely to be merged.

- *(No additional significant PRs found in the top 6)*

*Note: Only 6 PRs were updated in the last 24 hours, and 2 of those are closed/old PRs that received recent comments. The PR pipeline appears quiet, with most activity concentrated in issue reports.*

---

## Feature Request Trends

The following feature directions are consistently requested across the top 30 issues:

### 1. **Session Persistence & Recovery** (Highest priority)
Multiple issues (#26452, #48782, #54066, #56187) demand that sessions survive app restarts, that `/resume` works reliably across directory renames, and that auto-memory actually captures meaningful state. The community wants **zero data loss** as a baseline feature.

### 2. **Multi-Agent & Cross-Machine Protocols**
Issue #28300 and related discussions call for an **Agent-to-Agent protocol** enabling agents on different machines to collaborate. This is seen as the natural evolution from single-machine multi-agent setups.

### 3. **Configurable Subagent Reasoning Effort**
Issues #43083 and #50502 request the ability to set `effortLevel` independently for subagents and advisor models, rather than having a single global setting.

### 4. **Native Advisor Strategy Support**
Issue #56178 proposes first-class support for the [advisor strategy pattern](https://claude.com/blog/the-advisor-strategy), pairing a fast executor with a capable advisor model.

### 5. **Desktop Recents Should Enumerate Filesystem Directly**
Issues #54911 and #56187 request that the Desktop app's "Recents" panel read from `~/.claude/projects/` directly, rather than relying on an internal index that goes stale.

### 6. **Scheduled Tasks That Run Without the App Open**
Issue #56194 (very new) proposes that scheduled tasks should execute reliably even when Claude Desktop is closed. Currently, tasks are tied to the app's process lifecycle.

---

## Developer Pain Points

Recurring frustrations and high-frequency complaints visible in this week's data:

### 1. **Data Loss Crisis — Trust Erosion**
The most visceral pain point. Users are losing months of work (#48782), entire session lists (#26452), and memory content. The community is treating this as **the** existential problem: "Can I trust Claude Code not to delete my work?" Multiple related issues suggest a systemic persistence-layer problem, not isolated bugs.

### 2. **Model Quality Volatility**
Opus 4.7's apparent degradation within a week (#53459) mirrors the 4.6 pattern exactly. Developers feel they cannot rely on consistent model quality, and the lack of transparency about what changes server-side erodes trust in the product.

### 3. **Destructive Model Behavior**
Issue #50952 (Docker rm without verification) exemplifies a broader concern: models are executing destructive commands without sufficient guardrails. The community wants mandatory confirmation for irreversible operations.

### 4. **Cost Leaks / Token Waste**
Issues like #56075 (entire Max plan consumed in 9 minutes) and #49354 (ultrareview crashed and used up quota) suggest that the system lacks cost controls or runaway-loop detection. Users want configurable spending caps and per-session budget alerts.

### 5. **Windows-Specific Instability**
Multiple Windows issues (#48114, #54066, #50640, #56075, #56187, #56182) point to a pattern of crashes (segfaults), broken path handling (underscores causing state split), and proxy/egress issues. The Windows experience lags significantly behind macOS.

### 6. **Auto-Update Nuisance with No Suppression**
Issue #56189 reports that a persistent "Auto-update failed" banner cannot be dismissed or disabled. A minor UI irritation, but the lack of a settings toggle for auto-update behavior frustrates users on constrained or air-gapped systems.

### 7. **Agent Identity Leakage**
Issue #55488 (subagent exposes parent history) is a security regression. In multi-agent workflows, users rely on agent isolation; leaking parent context to a direct DM breaks the trust model for delegated work.

---

*Digest generated 2026-05-05 from GitHub data on `anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-05

## Today's Highlights
Three consecutive alpha releases hit `rust-v0.129.0-alpha` overnight, signaling rapid iteration on the Rust-based Codex CLI. The community is most energized by Issue #19464, which demands GPT-5.5's full 1M token context window in Codex—already the top-voted open feature request at 👍153. Bug reports around sandbox `bwrap` failures on Linux (AppArmor) and a regression in `Shift+Enter` multi-line input continue to frustrate users, but PRs landing this week directly target both sandbox resiliency and TUI input fixes.

## Releases
Three new pre-releases were published in the last 24 hours, all from the rust-v0.129.0-alpha branch:
- **rust-v0.129.0-alpha.4**, **rust-v0.129.0-alpha.5**, **rust-v0.129.0-alpha.6** — Release notes are minimal ("Release 0.129.0-alpha.x"), but the rapid cadence suggests hotfixes or refinements to `PermissionProfile` and sandbox migrations.

## Hot Issues (Top 10)

1. **[#19464 — Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)** — The most-upvoted open feature request (👍153, 121 comments). Users are frustrated that GPT-5.5 in Codex is capped at 400K tokens while the API supports 1M. Key blocker for large-codebase work. *Trending: feature request.*

2. **[#20161 — Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)** — SSO login on a second device forces phone verification even for users without a phone on their account. 64 comments, 54 upvotes. Community anger is high; some call it a "login loop."

3. **[#16857 — High GPU usage while the app is “thinking” due to tiny useless animation](https://github.com/openai/codex/issues/16857)** — macOS users report constant GPU draw from a trivial animation during model inference. 20 comments. Many users are switching to CLI to avoid battery drain.

4. **[#9936 — Azure: stream disconnected before completion: response.failed event received](https://github.com/openai/codex/issues/9936)** — Persistent bug on Windows Azure/VS Enterprise subscriptions. 14 comments. Affects enterprise customers running via Azure OpenAI.

5. **[#19196 — 'Full Access' permissions broken — network calls still sandboxed](https://github.com/openai/codex/issues/19196)** — Closed as fixed, but had high engagement (11 comments, 21 👍). Users reported granting "Full Access" didn't pass network calls through. *Trending: sandbox regression.*

6. **[#15057 — Linux sandbox fails on Ubuntu with AppArmor userns restrictions](https://github.com/openai/codex/issues/15057)** — `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted` on default Ubuntu. 11 comments, closed. This is a blocker for many Linux developers.

7. **[#8673 — Codex TUI prompt Feature: Shift+Enter to support newline](https://github.com/openai/codex/issues/8673)** — Long-standing request for multi-line input in TUI (10 comments). Still open after months. *Trending: TUI ergonomics.*

8. **[#19891 — Regression: “For coding” view hides edited file names behind aggregate summaries](https://github.com/openai/codex/issues/19891)** — UX regression in Desktop app. Users can no longer see individual file edits. 6 comments, 6 upvotes. *Trending: UI regression.*

9. **[#20579 — Browser Use broken after today update: no node_repl/js or Codex IAB backend discovered](https://github.com/openai/codex/issues/20579)** — macOS Desktop update broke browser automation for localhost dev. 6 comments. Affects power users of the `@Browser` skill.

10. **[#21121 — Codex CLI tends to add and remove blank lines when patching files](https://github.com/openai/codex/issues/21121)** — New bug affecting editing workflows. GPT-5.5 patching churns whitespace. 4 comments. *Trending: tool-call quality.*

## Key PR Progress (Top 10)

1. **[#20575 — Migrate app-server thread history reads to ThreadStore](https://github.com/openai/codex/pull/20575)** — Closed. Migrates token replay, rollback, and detached reviews to ThreadStore. A foundational refactor for session persistence.

2. **[#20577 — Use ThreadStore history for core review forks](https://github.com/openai/codex/pull/20577)** — Open. Continues the ThreadStore migration for the model's fork/review paths. Removes dependency on rollout file paths.

3. **[#20658 — Enforce add-dir for macOS sandbox](https://github.com/openai/codex/pull/20658)** — Open. Fixes a regression in `codex exec --sandbox workspace-write --add-dir` on macOS. Part of the `PermissionProfile` migration.

4. **[#21122 — Add turn_id to Codex skill invocation analytics](https://github.com/openai/codex/pull/21122)** — Closed. Small analytics improvement for tracking skill usage per turn. Helps debugging skill regressions.

5. **[#20647 — Route process tools to selected environments](https://github.com/openai/codex/pull/20647)** — Open. Enables model-facing environment targeting for shell and process tools. Multi-environment sessions are a new architecture push.

6. **[#20530 — Support multi-env filesystem tools](https://github.com/openai/codex/pull/20530)** — Open. Extends environment routing to `apply_patch`, `list_dir`, `view_image`. Stacks on #20647.

7. **[#20939 — Render backend-selected near-limit prompts in TUI](https://github.com/openai/codex/pull/20939)** — Open. New UX: TUI will now show rate-limit warnings at 75%/90% thresholds, sourced from backend live updates.

8. **[#21127 — fix(linux-sandbox): avoid panic on bwrap build failures](https://github.com/openai/codex/pull/21127)** — Open. Replaces panics with ordinary sandbox build failure reporting. Also handles protected `.codex` symlinks. Directly addresses AppArmor issues (#15057, #19235).

9. **[#21069 — Spill large hook outputs from context](https://github.com/openai/codex/pull/21069)** — Open. Caps large hook outputs to prevent context pollution. Prevents one hook from bloating conversation history.

10. **[#21059 — Rename agent identity login surface to access token](https://github.com/openai/codex/pull/21059)** — Closed. UX polish: changes `CODEX_AGENT_IDENTITY_TOKEN` to `CODEX_ACCESS_TOKEN`. Improves discoverability for CI/CD pipelines.

## Feature Request Trends
- **Extended Context Window** — Demand for 1M tokens for GPT-5.5 in Codex (#19464) is the single hottest request. Users want parity with the API.
- **Multi-Environment Sessions** — Several PRs (#20647, #20530) are laying groundwork for staging/production separation. No direct FR yet, but architectural interest is clear.
- **MCP Custom Notifications** — Request (#17543) to inject custom MCP notifications into active sessions. Enables richer tool integrations.
- **Goal Lifecycle Tracking** — PR #20799 adds metrics for goal creation/completion/stopped-by-budget. Community has asked for budget-aware workflows.

## Developer Pain Points
1. **Linux Sandbox / AppArmor** — Multiple unresolved issues (#15057, #19235) block Ubuntu users. PR #21127 directly addresses this but is not yet merged.
2. **TUI Multi-Line Input** — `Shift+Enter` to insert newlines has been requested since January (#8673). Two regressions reported this week (#20580, #20607) show it's still fragile.
3. **Login / Auth Loops** — Phone verification (#20161) and stuck SSO (#8692) continue to plague users switching devices. High comment volume indicates frustration.
4. **App UI Regressions** — "For coding" view hiding file names (#19891), blank expandable rows (#20090), and thread summary auto-open (#21140) suggest quality control is slipping on Desktop.
5. **Context Compaction Failures** — Timeouts on remote compact (#19979) and compaction failures (#20931) disrupt long sessions. A pattern of connectivity + context issues.

---

*Generated from GitHub Issues and PRs data for `openai/codex` up to 2026-05-05.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-05

## Today's Highlights

The Gemini CLI community continues to focus on agent reliability and lifecycle management, with several PRs addressing automation and scaling of issue/PR triage. A critical permission-denied bug remains active with 163 comments, while the team pushes forward on AST-aware code navigation and memory routing features. The nightly v0.42.0 build brings documentation workflow improvements and ACP client modularization.

## Releases

**v0.42.0-nightly.20260504.g37edd1d4d** — [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260504.g37edd1d4d)

- Documentation workflows updated with workspace trust support
- ACP client refactored into modular, specialized files
- Test fixes included

## Hot Issues

1. **#24517 — 403 PERMISSION_DENIED for Google One AI Premium subscribers**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/24517)* — 163 comments, 63 👍  
   **CLOSED**. The top-voted issue: subscribers correctly identified as "Gemini Code Assist in Google One AI Pro" but all API requests blocked. No tokens consumed. High frustration from paying users.

2. **#24353 — Robust component-level evaluations**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/24353)* — Maintainer-only, 5 comments  
   EPIC tracking expansion of behavioral eval tests from 76 to comprehensive coverage across 6 Gemini models. Critical for quality assurance.

3. **#22745 — AST-aware file reads, search, and mapping**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/22745)* — Maintainer-only, 5 comments, 1 👍  
   Investigates whether AST-aware tools (e.g., tilth, glyph) can reduce tool call turns and token noise by reading precise method bounds.

4. **#22323 — Subagent recovery after MAX_TURNS falsely reports GOAL success**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/22323)* — Maintainer-only, 4 comments, 2 👍  
   `codebase_investigator` subagent lies about success after hitting turn limits, masking real failures. Agent trust issue.

5. **#2015 — MCP without instructions causes connection refusal**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/2015)* — 4 comments, 5 👍 (Stale)  
   MCP server instructions are optional per spec, but Gemini CLI refuses to connect without them. Community pain point for MCP developers.

6. **#26478 — `/resume` hangs for ~15 seconds**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/26478)* — 2 comments (new today)  
   Fresh report: both `--resume` and `/resume` commands introduce significant startup delay. Affects daily workflow.

7. **#25166 — Shell command execution hangs with "Waiting input"**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/25166)* — Maintainer-only, 2 comments, 3 👍  
   Simple completed shell commands remain stuck in "Awaiting user input" state. High-impact reliability bug.

8. **#26485 — No visible acknowledgment of steering hints**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/26485)* — 1 comment (new today)  
   UX concern: users get no UI feedback that a steering hint was received until the model replies, which may be slow or absent.

9. **#24916 — CLI keeps asking for permissions on same file**  
   *[Issue](https://github.com/google-gemini/gemini-cli/issues/24916)* — 3 comments  
   "Allow for all future sessions" doesn't persist. Repetitive permission prompts degrade UX.

10. **#22819 — Implement memory routing: global vs. project**  
    *[Issue](https://github.com/google-gemini/gemini-cli/issues/22819)* — Maintainer-only, 1 comment, 2 👍  
    Memory subagent needs to distinguish global preferences (`~/.gemini/`) from project-specific context (`.gemini/`). Key for memory system quality.

## Key PR Progress

1. **#26432 — Improve error messages for authentication failures**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26432)* — OPEN, priority/p2  
   Addresses #3074: replaces vague exceptions and stack traces with clear auth error messages for missing env vars, invalid keys, and 401 errors.

2. **#26525 (implied) — feat(bot): enforce evaluation role and multi-iteration feedback loop**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26303)* — OPEN  
   Improves bot system prompts to resolve architectural conflicts, restrict critique agent to evaluation-only, and add multi-iteration feedback loops.

3. **#26484 — Prevent unhandled promise rejection on IDE MCP fetch failure**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26484)* — OPEN  
   Registers MCP transport error handlers before `client.connect()`, preventing unhandled rejections from SSE fetch failures.

4. **#26480 — Steer model to surgical edits and prevent accidental deletions**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26480)* — OPEN, area/agent  
   Updates tool descriptions for `write_file` and `replace` to encourage surgical edits and minimize token waste. Safety improvement.

5. **#25900 — Prefer pwsh.exe over Windows PowerShell 5.1**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/25900)* — OPEN, priority/p2  
   Fixes shell command failures with embedded double quotes on Windows by preferring PowerShell Core.

6. **#26483 — Productivity & Lifecycle Optimizations**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26483)* — OPEN (bot-authored)  
   Reduces stale issue threshold, improves triage efficiency, and implements automatic PR closure policies.

7. **#24736 — Union-find context compaction for AgentHistoryProvider**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/24736)* — OPEN, area/agent, help wanted  
   Novel context compression using union-find clustering: semantically similar messages graduate from hot buffer to cold forest, improving token management.

8. **#26473 — Custom auth/status endpoint for Xcode ACP client**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26473)* — OPEN, status/need-issue  
   Adds `extMethod` for quiet auth state probing, enabling login triggers without disruptive browser popups in Xcode.

9. **#26312 — Refresh MCP OAuth token usage after re-auth**  
   *[PR](https://github.com/google-gemini/gemini-cli/pull/26312)* — OPEN, priority/p2, help wanted  
   Fixes MCP OAuth token reuse after refresh — stale tokens no longer require CLI restart to take effect.

10. **#25723 — Fallback to system ripgrep if bundled binary missing**  
    *[PR](https://github.com/google-gemini/gemini-cli/pull/25723)* — CLOSED  
    Graceful fallback to system `rg` for unsupported architectures — practical fix for edge-platform users.

## Feature Request Trends

- **AST-aware tooling** — Multiple EPICs (#22745, #22746) explore AST-based file reads, search, and codebase mapping to reduce token waste and tool call turns.
- **Memory routing** — Clear demand for global vs. project memory separation (#22819), with proactive memory write prompts (#22809) to make preferences persist intelligently.
- **Behavioral evaluations** — Expanding from 76 tests to comprehensive component-level evals (#24353), including subagent rejection behavior (#23897) and compression quality checks (#23556).
- **Accessibility & rendering** — Incremental table rendering breaks screen reader mode (#25218); scrolling in long chats causes flashes and jumpy scrollbars (#24470).
- **Agent safety** — Strong community interest in preventing destructive operations (#22672), surgical edit steering (#26480), and better subagent recovery from failures (#22323).

## Developer Pain Points

- **Authentication failures** — #24517 (163 comments) dominates: paying Google One AI Premium subscribers hit 403 permission denied despite correct account identification. PR #26432 aims to improve error messages.
- **Shell execution reliability** — Hanging after command completion (#25166, 3 👍), trailing newline stripping (#23705), and Windows PowerShell double-quote issues (#25900) persist.
- **MCP ecosystem friction** — Refusal to connect to MCP servers without optional `instructions` field (#2015, 5 👍) frustrates server developers; OAuth token refresh requires restart (#26312).
- **Performance regressions** — 15-second hang on `/resume` (#26478), MCP connection delays, and tool approval race conditions (#26479, #26469).
- **Permission annoyance** — Repeated permissions on same file (#24916) despite "allow for all future sessions," plus SSH terminal text scrambling (#24202) for remote developers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-05

## Today's Highlights

A new patch release (v1.0.41-0) ships with file attachment support for non-interactive mode and improved edit reliability. The community remains focused on premium request consumption bugs, with the top issue (#2591) accumulating 31 comments around infinite request loops. Three new triage issues today highlight agent looping, transient API errors during peak hours, and overly restrictive system prompts for markdown-heavy repos.

---

## Releases

**v1.0.41-0** — [View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.41-0)

- **Added**  
  - `--attachment` flag now works in non-interactive (`-p`/`--prompt`) mode to attach images or native documents to the initial prompt
- **Improved**  
  - File edit reliability improved via better recovery from fuzzy or misaligned edit blocks
- **Fixed**  
  - `@-mention` completion now correctly resolves `./` paths

---

## Hot Issues (Top 10 by Community Engagement)

1. **[#2591 — Single session request → infinite premium requests consumed per tool invocation](https://github.com/github/copilot-cli/issues/2591)**  
   *CLOSED* | 31 comments | 👍 13  
   A single user request spawns 80–100 premium requests because each agent "thinking step" counts as a new session request. This is the most commented issue by a wide margin — critical for anyone with usage-based billing.

2. **[#2421 — HTTP/2 GOAWAY race condition causes cascading retry failures](https://github.com/github/copilot-cli/issues/2421)**  
   *OPEN* | 7 comments | 👍 16  
   Consolidates five related bugs (#1743, #1754, #2050, #2101, #2189). The undici HTTP/2 connection pool has a race condition on server-sent GOAWAY frames, triggering silent premium request waste. Highest 👍 count among open issues — clearly affecting many users.

3. **[#1941 — "The requested model is not supported" errors](https://github.com/github/copilot-cli/issues/1941)**  
   *CLOSED* | 10 comments | 👍 0  
   Sudden influx of `CAPIError: 400` errors. While closed, the pattern suggests a server-side model availability issue that may recur.

4. **[#1799 — How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)**  
   *OPEN* | 9 comments | 👍 4  
   Users want to opt out of the alt-screen rendering mode, which breaks terminal scrollback and workflow automation. No toggle exists yet.

5. **[#953 — Over-excessive permissions request](https://github.com/github/copilot-cli/issues/953)**  
   *OPEN* | 7 comments | 👍 3  
   Authentication requests read/write access to *every* repository. Users want granular repo-level permission scoping, especially for enterprise environments.

6. **[#2643 — preToolUse silent rewrite still shows confirmation dialog](https://github.com/github/copilot-cli/issues/2643)**  
   *OPEN* | 6 comments | 👍 0  
   Even with `permissionDecision: allow`, plugin hooks that rewrite commands via `updatedInput` still trigger interactive confirmation. Plugin authors cannot achieve truly silent command execution.

7. **[#1665 — Support project/repo-scoped plugins](https://github.com/github/copilot-cli/issues/1665)**  
   *OPEN* | 5 comments | 👍 11  
   Plugins are currently per-user/global only. Teams need `.copilot-plugins/` or similar project-level configuration to share agent customizations.

8. **[#2795 — `--agent` flag broken with `--plugin-dir` + `-p`](https://github.com/github/copilot-cli/issues/2795)**  
   *OPEN* | 4 comments | 👍 8  
   Combining `--agent` with `--plugin-dir` and `-p` causes the CLI to scan wrong directories for agent definitions. Non-interactive pipeline users are particularly affected.

9. **[#3101 — "access denied by Copilot policy" model load failure](https://github.com/github/copilot-cli/issues/3101)**  
   *OPEN* | 1 comment | 👍 2  
   Enterprise users hit `Failed to load models: access denied by Copilot policy` on v1.0.40. Affects `/model get` commands in enterprise-managed accounts.

10. **[#3117 — Transient API errors during evening hours](https://github.com/github/copilot-cli/issues/3117)**  
    *OPEN (triage)* | 0 comments | 👍 0  
    User reports recurring transient API errors during evening peak usage, with infinite retry loops. New today — may indicate server-side capacity issues.

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

The community's top requested directions, distilled from all issues:

1. **Per-Project/Repository Configurations** — Multiple issues (#1665, #2528, #953) ask for project-scoped plugins, MCP servers, and permission configurations instead of only global/user-level settings.

2. **Granular Permissions & Security Controls** — Issues #953, #1607, #2693 seek repo-level scoping, session-level tool permission primitives, and the ability to authorize safe commands (e.g., `2>/dev/null`) without interactive prompts.

3. **Non-Interactive/Headless Mode Parity** — #2795, #2665, #3109 highlight gaps where features (plugin loading, agent listing, `--attachment`) don't work in `-p`/non-interactive mode, breaking CI/CD and automation workflows.

4. **Context & Token Visibility** — #2052 requests a persistent token/context usage indicator. #3111 asks for an agent thinking timer. Users want insight into what the agent is doing and how much context is left.

5. **MCP & Plugin Ecosystem** — Requests include per-repo MCP config (#2528), silent command rewriting (#2643), LSP initialization order hooks (#3112), and VSCode MCP.json support (#3019). The plugin system is gaining adoption but has growing pains.

---

## Developer Pain Points

| Pain Point | Count | Key Issues |
|---|---|---|
| **Premium request waste / billing concerns** | High | #2591, #2421 — infinite loops, GOAWAY retries silently consuming quota |
| **Model availability & switching bugs** | Medium | #1941, #2524, #3079, #3099, #3101 — errors, forced model changes, access denied |
| **Terminal rendering issues** | Medium | #1799, #3110, #3105 — alt-screen, scrollback loss, macOS token deletion UX |
| **Plugin/hook limitations** | Medium | #2643, #2795, #2665, #3112 — confirmation dialogs, scoping, loading order |
| **Non-interactive mode gaps** | Medium | #2795, #2665, #3109 — missing features in headless/scripted use |
| **Transient/network errors** | Low | #2421, #3117 — GOAWAY race conditions, evening API failures |
| **Conversation looping** | Low | #3114 — agent re-processes full history on each turn, losing context |

---

*Digest generated 2026-05-05 from `github.com/github/copilot-cli` activity (last 24h).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-05-05

## Today's Highlights
The community saw a quiet day with no new releases but three active issues. A promising community plugin, **kimi-mneme**, was showcased to solve the "blank slate" problem by adding persistent cross-session memory. A critical bug report (#2160) regarding unexplained crashes on Windows during runtime remains a top concern.

## Releases
No new releases in the last 24 hours. The current stable version is **1.41.0**.

## Hot Issues (3 noteworthy)

1. **#2160: [bug] Inexplicable crash during operation**  
   *Author: elcky | Comments: 3 | 👍: 0*  
   **Why it matters:** A user reports repeated crashes on Windows (NT 10.0.26200.0 x64) while using Kimi 2.6. The issue lacks detailed reproduction steps but has community engagement. *Priority: High*  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2160)

2. **#2161: [Plugin Showcase] kimi-mneme — Persistent Memory for Kimi Code CLI**  
   *Author: barrelc | Comments: 1 | 👍: 0*  
   **Why it matters:** This community plugin addresses a major workflow gap: losing context between sessions. Uses Greek mythology naming (Mneme) and claims to capture, compress, and retrieve context. Could become a standard add-on. *Priority: Medium*  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2161)

3. **#2159: [Feature Request] Show yolo & afk mode status in Web UI**  
   *Author: QuantumLiu | Comments: 0 | 👍: 0*  
   **Why it matters:** Simple UX improvement request. Users want visual indicators in the Web UI for "yolo" (auto-approve mode) and "afk" (away-from-keyboard) modes to avoid unintended behaviors. *Priority: Low*  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2159)

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Currently, the strongest signal is **session persistence and memory management**. The plugin showcase (#2161) highlights a clear demand for cross-session context retention, which is not yet handled natively. Additionally, there is interest in **better UI feedback** for operational modes like yolo and afk (#2159).

## Developer Pain Points
- **Unexplained crashes on Windows (#2160):** The most critical pain point this week. Users cannot rely on the tool for stable long-running operations without crash recovery or reproduction guidance from maintainers.
- **Lack of built-in memory/context continuity:** The community is actively seeking ways to avoid re-entering context every session, indicating the CLI's current behavior creates friction for daily workflows.
- **Manual mode awareness:** Absence of visual cues for dangerous modes (yolo/afk) could lead to unintended file changes or automation mishaps.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-05

## Today's Highlights
The team shipped **v1.14.35** with a targeted fix for session diff rendering when file contents contain `diff --git` text, along with v1.14.34’s PTY connection tickets and v2 session failure events. Community activity remains high around **Windows stability** (stuck-on-load, blank desktop, Wayland breaks) and the long-running **copy-on-select debate** (two related issues, 23+ total reactions). The “LifetimeVip” user filed a dozen issues today alone — many closed as `needs:compliance` — covering Chinese i18n, AI-powered GitHub automation, and factory-reset features.

## Releases

### v1.14.35 (latest)
**Core Bugfixes**
- Fixed diff patch boundary preservation so sessions with file contents containing `diff --git` text render correctly.

### v1.14.34
**Core Improvements**
- Added PTY connection tickets for more reliable authenticated terminal websockets across clients.
- Added v2 session failure events so clients can detect and show failed runs.
- Improved shell command handling for Bash, PowerShell, and cmd sessions.

**Core Bugfixes**
- (Patch notes truncated in source data — likely minor stability fixes.)

---

## Hot Issues (10 noteworthy)

1. **#24418** [BUG]: CLI stuck on "Loading plugins…" on Windows startup  
   *Author: Zohair-coder | Comments: 23*  
   Affects ~50% of launches after v1.14.25; no plugins installed. No Ctrl+C escape — users must kill terminal.  
   [🔗](https://github.com/anomalyco/opencode/issues/24418)

2. **#10490** [Feature Request]: Config option to disable copy-on-select  
   *Author: cbrunnkvist | Comments: 13 | 👍: 23*  
   Long-standing request (since Jan). Copy-on-select is default with no toggle. High community support.  
   [🔗](https://github.com/anomalyco/opencode/issues/10490)

3. **#25373** [CLOSED]: No customer service?  
   *Author: zillionare | Comments: 10*  
   Paid user reports payment method error loop with zero email replies. Raises concerns about paid-tier support SLAs.  
   [🔗](https://github.com/anomalyco/opencode/issues/25373)

4. **#19081** [OPEN]: `reasoning_content` stripped from assistant messages on replay, causing KV cache invalidation  
   *Author: michal-zurkowski | Comments: 8 | 👍: 15*  
   Thinking tokens lost on conversation replay — silently invalidates local inference KV caches. Impacts local LLM users.  
   [🔗](https://github.com/anomalyco/opencode/issues/19081)

5. **#25799** [OPEN]: v1.14.35 unable to load OMO (plugin) normally  
   *Author: woodynew | Comments: 2 | 👍: 2*  
   Regression in latest release; reverting to v1.14.33 works. Only “Build” and “Plan” modes appear.  
   [🔗](https://github.com/anomalyco/opencode/issues/25799)

6. **#23011** [OPEN]: Windows Desktop shows no models, providers, or chat history after update  
   *Author: Lazarus-glhf | Comments: 4*  
   Affects v1.4.5–1.4.7. Startup blank — cannot start conversations.  
   [🔗](https://github.com/anomalyco/opencode/issues/23011)

7. **#25711** [OPEN]: Plan mode “useless now” — only 4 lines of output  
   *Author: tom-thompson | Comments: 4*  
   Plan mode output truncated to 4 lines; user frustrated, says “need jailbreak to plan.”  
   [🔗](https://github.com/anomalyco/opencode/issues/25711)

8. **#25803** [OPEN]: Retry state cannot be explicitly stopped — revert/reset ineffective after quota recovery  
   *Author: sch246 | Comments: 3*  
   Session stuck in retry loop even after quota restored. No way to clean failed retries from conversation.  
   [🔗](https://github.com/anomalyco/opencode/issues/25803)

9. **#17548** [CLOSED]: [opentui] Copy/paste support for text and images in terminal  
   *Author: zohebk | Comments: 5*  
   Feature request for terminal copy/paste of code, output, and images. Closed — likely delivered.  
   [🔗](https://github.com/anomalyco/opencode/issues/17548)

10. **#9875** [OPEN]: Unable to locate program entry point `GetThreadDescription`  
    *Author: MobiusV | Comments: 3*  
    Fresh Windows install fails to launch. Version 1.1.29 — may affect older binary compatibility.  
    [🔗](https://github.com/anomalyco/opencode/issues/9875)

---

## Key PR Progress (10 important)

1. **#25813** [OPEN] — `fix(desktop): stabilize Windows titlebar zoom`  
   Keeps Windows titlebar layout stable while zooming Electron webview. Prevents visual jank.  
   [🔗](https://github.com/anomalyco/opencode/pull/25813)

2. **#25810** [OPEN] — `fix(tui): label custom agents in dialog selector`  
   Closes #4825. Differentiates custom vs native agents in the TUI selector.  
   [🔗](https://github.com/anomalyco/opencode/pull/25810)

3. **#25800** [CLOSED] — `chore(i18n): complete Chinese translation for zh.ts files`  
   Closes #25604. Adds 30+ new translation keys across app, ui, and desktop modules.  
   [🔗](https://github.com/anomalyco/opencode/pull/25800)

4. **#25805** [OPEN] — `fix(opencode): add max_retries config to cap session retry attempts`  
   Closes #25733. Adds `experimental.max_retries` to stop infinite retry loops. Addresses #25803 pain point.  
   [🔗](https://github.com/anomalyco/opencode/pull/25805)

5. **#25798** [CLOSED] — `fix(session): cancel subtask child sessions`  
   Propagates cancellation to child sessions when parent slash-command subtasks are interrupted.  
   [🔗](https://github.com/anomalyco/opencode/pull/25798)

6. **#25667** [OPEN] — `research: delete Hono backend (do not merge)`  
   Research draft showing ~9,042 deletions across 70 files. Spike to make HttpApi the only backend.  
   [🔗](https://github.com/anomalyco/opencode/pull/25667)

7. **#25768** [CLOSED] — `feat(core): session warping`  
   Adds workspace session warp support — move sessions between workspaces, detach with `workspaceID: null`.  
   [🔗](https://github.com/anomalyco/opencode/pull/25768)

8. **#25579** [OPEN] — `feat: add minimal CLI mode with readline REPL and slash commands`  
   Lightweight text-only interface (`--mode minimal`) for users who prefer pure terminal.  
   [🔗](https://github.com/anomalyco/opencode/pull/25579)

9. **#25362** [CLOSED] — `feat(provider): support model system prompts`  
   Adds per-model system prompt config (`provider.<id>.models.<model>.prompt`) with precedence rules.  
   [🔗](https://github.com/anomalyco/opencode/pull/25362)

10. **#25634** [CLOSED] — `Improve v2 session message rendering`  
    Fixes ordering for realtime updates, assistant durations, inline tool spacing, and denied-action error states.  
    [🔗](https://github.com/anomalyco/opencode/pull/25634)

---

## Feature Request Trends

The community is pushing in three clear directions:

**1. UI Customizability & Privacy**  
- Several users request **toggle for copy-on-select** (#10490, #15941 — 28 total 👍).  
- **Factory reset / incognito mode** (#25653) — wipe all config, caches, sessions in one action.  
- **Hide context/cost display** — now with a PR (#25622) addressing it.

**2. Internationalization & Accessibility**  
- **Chinese translations** — incomplete on Settings pages (#25604), now fixed by PR #25800.  
- **Non-English AI responses** — users want models to auto-translate English terms (e.g., PR→合并请求) when chatting in Chinese (#25785, #25782, #25783). Multiple closed as `needs:compliance`.

**3. Session & Model Management**  
- **Session warping** — moving sessions between workspaces (PR #25768 now merged).  
- **Factory reset** (#25653) — also covers batch session deletion and cache cleanup.  
- **Preset instructions per chat** (#25616) — AI loses user context on new sessions.  
- **Model-specific system prompts** — delivered in PR #25362.

---

## Developer Pain Points

- **Windows Stability** — CLI stuck on “Loading plugins” (#24418, 23 comments), Desktop blank on startup (#23011), entry-point errors (#9875), Wayland broken on Fedora (#25807). Windows remains the most fragile platform.
- **Infinite Retry Loops** — Sessions stuck in retry after quota exhaustion with no escape (#25803, #25733). PR #25805 proposes a fix with `max_retries` config.
- **Plan Mode Broken** — Output truncated to 4 lines (#25711, strong language from user). Functional regression that blocks planning workflows.
- **Plugin Regressions** — v1.14.35 breaks OMO plugin loading (#25799). “Worked after reverting to v1.14.33” — suggests insufficient regression testing.
- **Payment/Support Gaps** — Paid users unable to complete payment with no customer service response (#25373). Trust issue for monetization.
- **Reasoning Token Loss** — `reasoning_content` stripped on replay (#19081, 👍: 15). Silent KV cache invalidation frustrates local inference users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-05

## Today's Highlights

Pi v0.73.0 shipped with Xiaomi MiMo API billing and regional token plan providers, marking a significant provider infrastructure expansion. The project saw an unusually high volume of bug reports and PRs, many tagged `closed-because-bigrefactor`, suggesting an internal refactor sweep is in progress. Community demand for official local LLM support remains the hottest topic, now with a merged PR delivering four local-LLM extension providers.

## Releases

**v0.73.0** — [[release](https://github.com/badlogic/pi-mono/releases/tag/v0.73.0)]

- **Xiaomi MiMo API billing and regional Token Plan providers**: The `xiaomi` provider now uses API billing with separate `xiaomi-token-plan-{cn,ams,sgp}` regional providers. See [docs/providers.md#api-keys](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md#api-keys) and [README.md#providers--models](https://github.com/badlogic/pi-mono/blob/main/README.md#providers--models).

## Hot Issues

1. **#3357 — Official local LLM provider extension** (OPEN, 👍22)  
   Request to fetch model lists dynamically from `{baseUrl}/models` for llama.cpp/ollama/LM Studio. **Most upvoted open issue** — now resolved via PR #4154, but the discussion momentum reflects massive community demand.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/3357)

2. **#3208 — Custom Thinking Levels per Model** (CLOSED, 👍13)  
   Proposal for models to define their own thinking levels in `models.json`, with extension API support via `pi.registerProvider()`. 14 comments, high engagement — signals desire for model-specific configuration granularity.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/3208)

3. **#4157 — `pi-update` error/warning on Windows** (OPEN)  
   `NODE_TLS_REJECT_UNAUTHORIZED` warning when running updates on Windows. Cross-platform reliability concern affecting Windows users.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4157)

4. **#4173 — Anthropic OAuth login URL missing parameters** (CLOSED)  
   `/login` flow gives URL that Anthropic rejects as invalid. Blocks users from connecting Claude Code Pro subscriptions — critical UX regression.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4173)

5. **#4158 — TUI markdown nested-list double indent** (OPEN)  
   Bullet lists render at wrong indent under both `light` and `dark` shipped themes. Core rendering fidelity issue for the TUI.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4158)

6. **#4134 — `pi -p` hangs after completing response** (CLOSED)  
   Non-interactive mode process doesn't exit after agent outputs. Breaks scripting/automation workflows.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4134)

7. **#4163 — `pi -p` silently no-ops when prompt starts with `---`** (CLOSED)  
   Silent exit code 0 with no agent run — dangerous for CI/CD pipelines where false positives are invisible.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4163)

8. **#4142 — macOS: image paste hard-aborts Pi in sandbox** (OPEN)  
   Unwrapped pasteboard access panic crashes the process. Poor graceful degradation on restricted environments.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4142)

9. **#4160 — Pi extensions not compatible with Bun runtime** (CLOSED)  
   Hard dependency on `npm` PATH binary prevents Bun-only environments from installing extensions. Runtime diversity gap.  
   [GitHub](https://github.com/badlogic/pi-mono/issues/4160)

10. **#4141 — Expired tokens cause hung process** (OPEN)  
    Expired subscription tokens for `openai-codex` leave process hanging after API response. Silent failure mode with no user feedback.  
    [GitHub](https://github.com/badlogic/pi-mono/issues/4141)

## Key PR Progress

1. **#4154 — Add official local-LLM provider extensions** (CLOSED)  
   **Most impactful PR today.** Delivers four async-factory custom providers for llama.cpp, ollama, LM Studio, and oMLX under `examples/extensions/`. Closes #3357 and #3469.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4154)

2. **#4165 — Stream bash output incrementally** (CLOSED)  
   Fixes TUI lag/freeze during chatty commands. Batch updates instead of per-chunk rendering — significant UX improvement for long-running tools.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4165)

3. **#4162 — Allow comments and trailing commas in models.json** (CLOSED)  
   Tiny `stripJsonComments` helper lets users annotate `models.json`. Low-risk quality-of-life improvement for config management.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4162)

4. **#4178 — Non-empty reasoning_content placeholder for Moonshot K2.6** (CLOSED)  
   Fixes multi-turn tool-call replay failures with Moonshot thinking mode. Provider-specific compatibility patch.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4178)

5. **#4170/#4171 — Preserve OpenRouter reasoning with Responses API** (CLOSED)  
   Handles out-of-order output item events in OpenAI Responses stream for providers like OpenRouter. Duplicate PRs suggest urgency.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4170) · [GitHub](https://github.com/badlogic/pi-mono/pull/4171)

6. **#4126/#4159 — Retry on transient HTTP 404/408** (CLOSED)  
   Extends retry logic beyond 429/5xx to include 404 and 408 from provider edge/CDN. Specifically motivated by Cerebras streaming failures.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4126) · [GitHub](https://github.com/badlogic/pi-mono/pull/4159)

7. **#3887 — Image content support** (OPEN)  
   New API for image blocks and image models via Google/OpenRouter. Still open — represents ongoing work toward multimodal agent output.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/3887)

8. **#3737 — Correct GPT-5.5 context metadata** (CLOSED)  
   Sets accurate context windows for GPT-5.5 across OpenAI/Azure (1,050,000) and Codex routes (400,000 vs 272,000 legacy).  
   [GitHub](https://github.com/badlogic/pi-mono/pull/3737)

9. **#4161 — Unset HF_TOKEN in pi-test.sh --no-env** (CLOSED)  
   Cleans Hugging Face token from test environment alongside other API keys. Small but important testing hygiene fix.  
   [GitHub](https://github.com/badlogic/pi-mono/pull/4161)

10. **#4156 — Fix wrong branch compaction diagram** (CLOSED)  
    Corrects an inaccurate documentation diagram. Minor but reflects attention to documentation quality.  
    [GitHub](https://github.com/badlogic/pi-mono/pull/4156)

## Feature Request Trends

- **Local/first-party LLM providers dominate**: #3357 (official local LLM extension) and #3567 (llama.cpp provider) are the most-upvoted open feature requests. The community strongly wants integrated local inference rather than external workarounds.
- **Provider-level configuration granularity**: #3208 (custom thinking levels per model) and #4179 (configurable reasoning_content placeholder per provider) indicate demand for fine-grained, model-specific provider settings.
- **Python SDK and broader language support**: #4174 (Python SDK for pi-agent-core and pi-ai) signals interest in embedding Pi capabilities outside TypeScript ecosystems.
- **Standard agent identity**: #4169 (standardize `AGENT=pi` env var) reflects desire for cross-tool interoperability standards.

## Developer Pain Points

- **Windows and cross-platform pain**: `pi-update` TLS warnings (#4157), missing npm on Bun (#4160) — non-Linux environments are clearly second-class.
- **Process lifecycle bugs**: `pi -p` hanging (#4134), silent no-ops on `---` prompts (#4163), expired tokens hanging (#4141) — critical for automation/CI use cases.
- **TUI rendering regressions**: Nested list indentation (#4158), links not clickable (#4180), thinking toggle breaking tool render (#4167), model selector not updating (#4164) — the TUI is accumulating visual bugs.
- **Clipboard and OS integration gaps**: Wayland clipboard silent failure (#4177), macOS sandbox paste crash (#4142) — cross-desktop clipboard handling is fragile.
- **High-volume bug sweep**: Multiple issues tagged `closed-because-bigrefactor` (9+ items) suggest a major internal refactor is producing collateral bugs; the `possibly-openclaw-clanker` tag appears frequently, indicating automated or experimental changes may be introducing regressions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-05-05

## Today's Highlights
Today’s update brings a new nightly release (v0.15.6-nightly.20260505) featuring a session-scoped `FileReadCache` that short-circuits redundant reads and a fix for proxy settings. The community is heavily focused on background task management and auto-memory improvements, with two new PRs surfacing and canceling dream consolidation tasks and preventing memory recall from blocking main requests. Several terminal rendering bugs and a critical issue where `Edit`/`WriteFile` silently clobber externally modified files are drawing active attention.

## Releases
- **[v0.15.6-nightly.20260505.2e69d641d](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260505.2e69d641d)**  
  **What's Changed:**
  - `feat(core): add FileReadCache and short-circuit unchanged Reads` — Reduces redundant filesystem reads by caching file contents per session.
  - `fix(cli): honor proxy setting` — Ensures CLI respects configured HTTP proxies.
  - Release automation bump.

## Hot Issues (10 selected)
1. **[#3669](https://github.com/QwenLM/qwen-code/issues/3669) – Custom model `think` field rendering broken (CLOSED)**  
   When using MiniMax M2.7 as a custom model, the `<think>` data tags are not parsed, causing thought content to appear in visible output instead of the dedicated thoughts UI. Community comments confirm this is a parsing gap for non-Anthropic endpoints. Driven by OpenRouter integration feedback.

2. **[#3606](https://github.com/QwenLM/qwen-code/issues/3606) – Session not found on `/resume` (CLOSED)**  
   User exited a session normally but `qwen --resume` claims no session exists, despite valid JSONL files in `.qwen/projects/…/chats`. Reports from several users suggest this is a session resurrection race condition; discussions point to missing session index updates.

3. **[#3634](https://github.com/QwenLM/qwen-code/issues/3634) – Background task management roadmap (OPEN)**  
   Core maintainer @wenshao outlines a multi-phase plan for background agents: Phase A (merged) enables background agent resume; Phase B (merged) adds UI/reporting; Phase C (in-flight) adds cancellation. This is the central roadmap driving much of today’s PR activity.

4. **[#3805](https://github.com/QwenLM/qwen-code/issues/3805) – `read`/`glob` tools fail or don’t feed content to LLM after long sessions (CLOSED)**  
   User reports that after extended use, tools like `read` and `glob` either cannot read files or the content is never sent to the LLM. Suspected session state corruption or context window overflow.

5. **[#3838](https://github.com/QwenLM/qwen-code/issues/3838) – Terminal infinite scroll/refresh loop (OPEN)**  
   When the model writes/analyzes code, the terminal enters a flickering, infinite-scroll loop. Believed to be a rendering layer bug (Ink/react) rather than a model issue. Multiple users confirm with `0.15.6`.

6. **[#3822](https://github.com/QwenLM/qwen-code/issues/3822) – Large file `edit`/`write` causes session JSONL bloat and `/resume` freeze (OPEN)**  
   Root-cause identified: `toolCallResult.resultDisplay` stores `originalContent`, `newContent`, and `fileDiff` without size caps, ballooning session files. `/resume` then blocks on parsing. Detailed analysis provided by community member RunMintOn.

7. **[#3825](https://github.com/QwenLM/qwen-code/issues/3825) – Zed integration returns 401 despite correct config (CLOSED)**  
   User configured Qwen Code in Zed and logged in via browser, but still gets `401 invalid access token`. Discussion points to token caching mismatch between client and server or stale OAuth cookies.

8. **[#3839](https://github.com/QwenLM/qwen-code/issues/3839) – `Edit`/`WriteFile` silently clobbers externally modified files (OPEN)**  
   `FileReadCache.check()` already detects stale files, but the write path does not use it. Two parallel agent calls can overwrite files that changed between Read and Write. Critical for safety in collaborative or concurrent workflows.

9. **[#3387](https://github.com/QwenLM/qwen-code/issues/3387) – OpenAI-compatible MiniMax `<think>` leak (CLOSED)**  
   Similar to #3669 but specific to the OpenAI compatibility mode. Anthropic endpoint works correctly. PR #3677 fixes this for MiniMax endpoints.

10. **[#3824](https://github.com/QwenLM/qwen-code/issues/3824) – Terminal resize leaves blue border residue in input area (OPEN)**  
    Each terminal resize accumulates old frame artifacts (blue lines) in the composer area. User RunMintOn suspects Ink 6.2.3’s erasure logic doesn’t match reflow, causing frame accumulation.

## Key PR Progress (10 selected)
1. **[#3836](https://github.com/QwenLM/qwen-code/pull/3836) – Surface and cancel auto-memory dream tasks (OPEN)**  
   Adds background auto-memory dream consolidation tasks to the unified Background tasks UI and makes them cancellable. Follows the roadmap laid out in #3634.

2. **[#3840](https://github.com/QwenLM/qwen-code/pull/3840) – Refuse Edit/WriteFile when file changed since last read (OPEN)**  
   Directly addresses #3839: before mutating a file, checks `FileReadCache` for staleness. If the file was modified externally, the operation is rejected with a clear error. Critical safety fix.

3. **[#3813](https://github.com/QwenLM/qwen-code/pull/3813) – Bounded shutdown timeout for telemetry + fix service.version (CLOSED)**  
   Adds a 10-second timeout to `shutdownTelemetry()` so unreachable OTLP endpoints don’t hang CLI exit. Also fixes the `service.version` resource attribute.

4. **[#3814](https://github.com/QwenLM/qwen-code/pull/3814) – Prevent auto-memory recall from blocking main request (OPEN)**  
   Reduces the auto-memory recall side-query timeout from 5 seconds to prevent every user turn from being delayed. Fixes #3759.

5. **[#3815](https://github.com/QwenLM/qwen-code/pull/3815) – Use per-model settings for fast model side queries (OPEN)**  
   Side queries (session recap, title generation) previously leaked main model `samplingParams` and `reasoning` settings into fast model requests. Now uses correct config per model.

6. **[#3819](https://github.com/QwenLM/qwen-code/pull/3819) – Prevent duplicate MCP processes from concurrent discovery (OPEN)**  
   Adds an in-flight discovery guard to `McpClientManager` to stop the same MCP server being re-discovered concurrently, which spawned duplicate child processes. Fixes #3817.

7. **[#3832](https://github.com/QwenLM/qwen-code/pull/3832) – Standardize Python SDK TAG_PREFIX to include `v` suffix (OPEN)**  
   Aligns Python SDK `TAG_PREFIX` with TypeScript convention (`sdk-python-` → `sdk-python-v`), eliminating asymmetry that caused doubled or missing `v` in git tags.

8. **[#3834](https://github.com/QwenLM/qwen-code/pull/3834) – Extract shared release helper utilities (CLOSED)**  
   Consolidates four duplicated functions across three `get-release-version.js` scripts into a shared module. Also fixes a pre-existing `getArgs` bug.

9. **[#3774](https://github.com/QwenLM/qwen-code/pull/3774) – Enforce prior read before Edit/WriteFile mutation (OPEN)**  
   Building on the `FileReadCache` from #3717, this PR enforces that a file must have been read in the current conversation before it can be written. Prevents blind overwrites.

10. **[#3677](https://github.com/QwenLM/qwen-code/pull/3677) – Parse MiniMax `<think>` tags in OpenAI-compatible provider (CLOSED)**  
    Adds MiniMax OpenAI-compatible provider with tagged thinking parsing, splitting `<think>` / `<thinking>` content into thought parts. Fixes #3387 and #3669.

## Feature Request Trends
- **Background task orchestration** – The most active feature area this week. #3634’s phased roadmap (background agent resume, UI, cancellation) has spawned multiple PRs (#3836, #3814) and design discussions (#3831 for Ctrl+B promotion).
- **Safety-constrained file writing** – Two PRs (#3774, #3840) and one issue (#3839) tackle the same pain point: preventing `Edit`/`WriteFile` from overwriting files the model hasn’t read or that changed externally. Community demand is high for “defense-in-depth” file mutation.
- **Terminal rendering robustness** – Multiple issues (#3838, #3824, #3213) report Ink/react rendering glitches on resize and during heavy output. Users want stable terminal UI, especially in long-running sessions.
- **Session management improvements** – Issue #3822 (JSONL bloat from large files) and #3606 (missing session resume) point to a need for session file size governance and more robust session indexing.

## Developer Pain Points
1. **Terminal UI instability** – Three separate issues (#3838, #3824, #3213) describe flickering, scroll loops, and artifact accumulation on resize. This is the top frustration by frequency.
2. **Silent file overwrites** – #3839 highlights that `Edit`/`WriteFile` can clobber files that changed between Read and Write. Developers working in shared or version-controlled repos are particularly affected.
3. **Session file bloat** – #3822 shows that large file edits cause session JSONL to balloon, making `/resume` unusably slow. The community self-identified the root cause (unbounded `resultDisplay` fields) and is pushing for a fix.
4. **Third-party model compatibility** – Multiple issues (#3669, #3387) show that `think` tag parsing fails for OpenAI-compatible MiniMax endpoints, frustrating users who rely on OpenRouter or custom providers.
5. **Authentication/resume friction** – #3825 (Zed 401 errors) and #3606 (missing session on resume) show that configuration state is fragile across restarts and client integrations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*