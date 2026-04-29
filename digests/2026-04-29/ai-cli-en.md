# AI CLI Tools Community Digest 2026-04-29

> Generated: 2026-04-29 04:33 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-04-29

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing rapid maturation across all major vendors, with **six active tools** shipping releases within a single 24-hour window. The ecosystem is converging on common architectural patterns—background task management, granular permission systems, and MCP protocol support—while each vendor differentiates through provider strategy (Anthropic's Bedrock push, Google's Gemini API, OpenAI's sandbox profiles) and target workflow (enterprise compliance vs. individual developer productivity). A notable shift is the **emergence of community-driven feature parity demands**, where users of each tool explicitly reference competitors' capabilities (Claude Code's granular auto-approval, Copilot's session management) as baseline expectations. Platform stability remains the dominant cross-cutting pain point, with Windows, WSL2, and terminal compatibility issues appearing across all six projects.

---

## 2. Activity Comparison

| Tool | Issues (Active/Prominent) | PRs (Active Today) | Release Status | Key Metric |
|------|--------------------------|-------------------|----------------|------------|
| **Claude Code** | 10 hot issues (226 👍 top issue) | 7 | **v2.1.123** (2 patches today) | Highest engagement; ongoing auth/regression battles |
| **OpenAI Codex** | 10 hot issues (141 👍 top issue, closed) | 10 | **v0.126.0-alpha.9–.13** (5 alpha releases) | Most rapid iteration; alpha churn |
| **Gemini CLI** | 10 hot issues (10 👍 top issue) | 10 | **v0.41.0-preview.0** + nightly | Balanced throughput; stable release cadence |
| **GitHub Copilot CLI** | 10 hot issues (12 👍 top issue) | 2 (both closed) | **v1.0.39** | Low PR throughput; feature-complete veneer |
| **Kimi Code CLI** | 10 hot issues (no upvotes on top issue) | 10 | **v1.40.0** | High external contributor engagement (21 open PRs) |
| **OpenCode** | 10 hot issues (24 👍 top issue) | 10 | **v1.14.29** | Growing community; UI/accessibility focus |
| **Pi** | 10 hot issues (12 👍 top issue) | 10 | **v0.70.6** | Steady polish; extension API maturation |
| **Qwen Code** | 10 hot issues (community upvotes not tracked) | 10 | **v0.15.4** (stable) + nightlies | Strong feature velocity; language-agnostic ambitions |

**Observation:** Claude Code dominates raw engagement (226 upvotes on top issue vs. single digits for most others), but OpenAI Codex leads in release frequency (5 alpha builds in 24 hours). Copilot CLI shows the lowest PR activity—likely reflecting a more stable, or less transparent, development cycle.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating strong ecosystem consensus:

| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **Granular Permission/Auto-Approval** | Copilot CLI (#1973, 12👍), Kimi (#2114, PR open), Claude Code (implied by OAuth/API key bugs), OpenCode (AFK mode request) | Per-tool, per-directory whitelists; read-only modes; avoid all-or-nothing `allow-all` |
| **Background Task Execution** | Claude Code (Ctrl+B), OpenCode (#1970, 21👍), Qwen Code (#3634, roadmap), Copilot CLI (ctrl+x → b in v1.0.39) | Non-blocking shell execution; unified background dialog; long-running monitor tools |
| **Project-Scoped Configuration** | Claude Code (plugin hooks per project), OpenAI Codex (#2628, **closed** — project MCP servers), Gemini CLI (`.gemini/` local memory), Copilot CLI (implied by plugin-dir issues) | Per-project MCP servers, skills, hooks, memory routing |
| **Automatic Response Continuation** | Gemini CLI (#26159, PR open), Claude Code (implied by truncation complaints), Qwen Code (#3652, auto-compression PR), OpenAI Codex (#20132, context cap regression) | Transparently handle `MAX_TOKENS`/truncated responses; auto-compact before send |
| **IDE/Desktop Backend Parity** | Claude Code (#32668, 226👍 — Bedrock for Desktop), OpenAI Codex (#10867 — custom models in desktop), Kimi (#2040 — VS Code notifications) | Feature parity between CLI, Desktop, and IDE extension surfaces |

**Implication:** The industry is converging on a **permission-first, background-capable, project-aware** architecture. Any tool missing these features risks being perceived as incomplete.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | Pi | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|-----|-----------|
| **Primary Audience** | Enterprise/power users | Pro developers | Google ecosystem | GitHub ecosystem | Chinese-market devs | Tinkerers/extension devs | Multi-language/self-hosters |
| **Provider Strategy** | Anthropic + Bedrock (BYO) | OpenAI (GPT-5.5) + API keys | Google Gemini only | GitHub Copilot models | Kimi (Moonshot) + limited BYO | Multi-provider (Cloudflare, OpenRouter, etc.) | Multi-provider (DeepSeek, Qwen, Gemini) |
| **Key Differentiator** | Agent depth, skills ecosystem | Sandbox profiles, security focus | Google integration, AST mapping | GitHub DevOps integration | IDE-first (VS Code focus) | Extension API, TUI polish | Self-hosted/local model support |
| **Current Pain Point** | Auth regressions, Windows reliability | Context compaction failures, token burn | WSL2 second-class, 403 errors | Skills silent truncation, scroll regressions | File descriptor leaks, sub-agent timeouts | Terminal compatibility, provider lock-in | DeepSeek API issues, vision gaps |
| **Release Cadence** | Daily patches + features | Multiple alphas daily | Weekly previews + stable | Monthly stable | Weekly stable | Weekly stable | Daily nightlies + weekly stable |
| **Community Engines**| Bugs/regressions (defensive) | Alpha testers (tolerant) | Google ecosystem (patient) | GitHub integration (expectant) | Feature requests (eager) | Extension creators (engaged) | Chinese devs + self-hosters (demanding) |

**Key Insight:** Claude Code and OpenAI Codex compete directly on **power-user flexibility** but differ in security philosophy—Codex is pushing sandbox profiles and removing `--full-auto`, while Claude Code focuses on tool-chain integration. Gemini and Copilot CLI are **ecosystem-anchored** tools whose primary value is Google/GitHub integration, not standalone CLI excellence. Pi and Qwen Code are the **most provider-agnostic**, positioning themselves as universal shells.

---

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Signal |
|------|----------------|-----------------|
| **Claude Code** | 🔥 **Highest engagement** (226👍 on single issue, 110 comments on auth bug) | 🟢 **Stable release** (v2.1.123); feature-complete; but regression-prone |
| **OpenAI Codex** | 🔥 **Fastest iteration** (5 alpha releases/day); 141👍 feature closed | 🟡 **Alpha churn**; context compaction failures indicate unstable core |
| **Gemini CLI** | 📈 **Steady growth**; 10 PRs/day; signal forwarding fix is user-visible | 🟢 **Stable v0.40.0**; Google-backing provides reliability floor |
| **Copilot CLI** | 📉 **Lowest PR velocity** (2 closed PRs); feature requests are "nice-to-haves" | 🟢 **v1.0.39**; mature but slow-moving; closed-source concerns |
| **Kimi Code** | 🔥 **External contributor surge** (21 open PRs); granular approval PR from community | 🟡 **v1.40.0**; rapid but Windows/ACP issues linger |
| **OpenCode** | 📈 **Growing community**; background execution (21👍) and base path routing (24👍) | 🟡 **Rapid iteration** (jump from 0.3.x to 1.14.x); regression-prone |
| **Pi** | 📈 **Extension ecosystem building**; `ctx.executeTool()` top request | 🟢 **v0.70.6**; polished for daily use; documentation quality high |
| **Qwen Code** | 🔥 **Highest feature velocity** (Mermaid, hot-reload, monitor tools in same week) | 🟡 **Stable + nightly**; DeepSeek API issues suggest provider fragility |

**Ranking by momentum:** Qwen Code ≈ Claude Code ≈ Kimi Code > OpenAI Codex > Gemini CLI > Pi > OpenCode > Copilot CLI  
**Ranking by maturity:** Copilot CLI ≈ Gemini CLI > Claude Code > Pi > Qwen Code > Kimi Code > OpenCode > OpenAI Codex

---

## 6. Trend Signals

### For Developers

1. **Self-hosting is becoming viable.** Qwen Code's local model support and Pi's provider-agnostic architecture signal that developers no longer need to accept vendor lock-in for AI CLI. The gap between cloud-hosted and local model experience is narrowing.

2. **Windows and WSL2 remain second-class.** Despite 12+ months of investment, every tool reports significant Windows/WSL2 bugs. If your team is Windows-first, budget 20-30% more time for tool evaluation and troubleshooting.

3. **Permission systems are the new UX frontier.** The cross-tool demand for granular auto-approval mirrors 2020's shift from `sudo` to `doas`—developers want fine-grained control, not all-or-nothing trust. Tools that ship this first (Kimi's PR #2114, Copilot's #1973) will win power users.

4. **Context window management is the unsolved problem.** Every tool has issues around token limits, compaction failures, and silent truncation. The tool that makes 1M+ context windows *reliably usable* (not just advertised) will have a significant competitive advantage.

### For Technical Decision-Makers

5. **The ecosystem is still pre-standardization.** MCP protocol adoption is growing (Qwen Code, Pi, OpenAI Codex), but each tool implements it differently. Expect 6-12 months of convergence before plugin/hook/skill ecosystems become portable.

6. **Claude Code's regression cycles are a red flag.** The "fixed-then-broken-again" pattern on malware-reminder (#49363) and OAuth bugs (#8327) suggests testing debt. For mission-critical workflows, consider Gemini CLI (Google SRE-backed) or Copilot CLI (Microsoft's slower but more stable cadence).

7. **OpenAI Codex is the riskiest bet.** Five alpha releases per day and a context-compaction regression affecting GPT-5.4/5.5 users indicate the team is prioritizing speed over stability. Alpha testers get new features; production users get instability.

8. **Qwen Code is the dark horse.** With the fastest feature velocity, strongest hot-reload/runtime reload roadmap, and genuine multi-language support (Catalan in v0.15.4), Qwen Code is investing in developer experience fundamentals that other tools are neglecting. Watch for enterprise adoption as self-hosting matures.

---

**Bottom Line:** There is no single "best" AI CLI tool—the choice depends on your ecosystem (GitHub vs. Google vs. self-hosted), risk tolerance (stable vs. cutting-edge), and platform (Linux vs. macOS vs. Windows). The convergence on permission systems, background tasks, and MCP protocol suggests the tools are consolidating around a common architecture; the next 12 months will likely see fewer new entrants and more feature parity battles among the incumbents.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date**: 2026-04-29 | **Source**: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion and attention via pull requests:

### 1.1 Add document-typography skill
**PR #514** | [GitHub](https://github.com/anthropics/skills/pull/514) | **Status**: Open | **Created**: 2026-03-04
**Functionality**: Prevents common typographic issues in AI-generated documents—orphan word wrap, widow paragraphs, and numbering misalignment. Targets a universal pain point across all Claude-generated documents.
**Discussion highlights**: High engagement around the universality of the problem; multiple commenters noted these issues affect "every document Claude generates." The PR sparked discussion on how to balance typographic strictness with output flexibility.

### 1.2 Add skill-quality-analyzer and skill-security-analyzer
**PR #83** | [GitHub](https://github.com/anthropics/skills/pull/83) | **Status**: Open | **Created**: 2025-11-06
**Functionality**: Meta-skills for evaluating other Skills across five quality dimensions (structure, documentation, examples, resources) plus a security analysis companion. Both target CI pipeline integration.
**Discussion highlights**: The longest-running active PR. Debate centered on whether meta-skills belong in the main repository or a separate tooling namespace. Contributors requested clearer scoring rubrics.

### 1.3 Improve frontend-design skill
**PR #210** | [GitHub](https://github.com/anthropics/skills/pull/210) | **Status**: Open | **Created**: 2026-01-05
**Functionality**: Major revision of the frontend-design skill for clarity and actionability. Ensures every instruction is executable within a single Claude conversation session.
**Discussion highlights**: Significant conversation on skill design philosophy—balancing specificity (steering behavior) against generality (allowing Claude's judgment). Became a reference example for skill-writing best practices.

### 1.4 Add ODT skill
**PR #486** | [GitHub](https://github.com/anthropics/skills/pull/486) | **Status**: Open | **Created**: 2026-03-01
**Functionality**: OpenDocument Format (.odt, .ods) creation, template filling, and conversion to HTML. Targets LibreOffice and ISO standard document workflows.
**Discussion highlights**: Community feedback pushed for broader format coverage (odt→html→pdf pipeline). Some concern about scope creep into a full office suite skill.

### 1.5 fix(docx): prevent tracked change w:id collision
**PR #541** | [GitHub](https://github.com/anthropics/skills/pull/541) | **Status**: Open | **Created**: 2026-03-06
**Functionality**: Fixes document corruption when DOCX skills add tracked changes to documents with existing bookmarks. Root cause traced to shared `w:id` ID space in OOXML.
**Discussion highlights**: Drew attention to the complexity of OOXML manipulation and the need for robust testing. Commenters appreciated the detailed root cause analysis in the PR.

### 1.6 Add testing-patterns skill
**PR #723** | [GitHub](https://github.com/anthropics/skills/pull/723) | **Status**: Open | **Created**: 2026-03-22
**Functionality**: Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), and E2E/visual testing strategies.
**Discussion highlights**: One of the most recently active PRs. Debate focused on which testing frameworks to prioritize and how to handle framework-specific vs. framework-agnostic guidance.

### 1.7 Add ServiceNow platform skill
**PR #568** | [GitHub](https://github.com/anthropics/skills/pull/568) | **Status**: Open | **Created**: 2026-03-08
**Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, SecOps, HRSD, CSDM, and IntegrationHub. Goes beyond scripting into full platform architecture.
**Discussion highlights**: Enterprise interest was strong. Commenters requested modularization to avoid a monolithic skill; some argued for breaking into multiple focused skills by domain.

---

## 2. Community Demand Trends

From Issue activity, the community's most-anticipated directions are:

| Trend | Key Issue | Demand Signal |
|-------|-----------|---------------|
| **Org-wide skill sharing** | Issue #228 (9 comments, 6 👍) | Direct sharing links and shared skill libraries for enterprise teams. Currently requires manual .skill file distribution. |
| **Skill developer experience** | Issue #202 (8 comments) | skill-creator overhaul: move from educational tone to operational instructions; fix token inefficiency; resolve enterprise/SSO auth issues (Issue #532). |
| **Evaluation & quality tooling** | Issue #556 (6 comments, 6 👍) | run_eval.py has 0% trigger rate for skills—community wants reliable eval infrastructure to validate skill effectiveness. |
| **Deduplication & namespace trust** | Issue #189 (5 comments, 7 👍) & Issue #492 (4 comments, 2 👍) | Duplicate skills across plugins waste context window; community skills under `anthropic/` namespace create trust boundary vulnerabilities. |
| **Platform integration (Bedrock, MCP)** | Issue #29 & Issue #16 (4 comments each) | Demand for Skills to work with AWS Bedrock and to be exposed as MCP tools for broader agent compatibility. |
| **Bug fixes & reliability** | Issue #62, #61, #406, #403 | Skills disappearing (404 errors), upload failures (500 errors), version deletion bugs—undermining confidence in the ecosystem. |

---

## 3. High-Potential Pending Skills

These PRs are under active discussion and are likely to merge soon:

| PR | Skill | Key Strength | Maturity Signal |
|----|-------|-------------|-----------------|
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Covers full testing stack with practical patterns | Recent updates (Apr 21); addressing framework scoping feedback |
| [#806](https://github.com/anthropics/skills/pull/806) | sensory (macOS AppleScript) | Native macOS automation without screenshot CU | Two-tier permission system; clear security model |
| [#664](https://github.com/anthropics/skills/pull/664) | claude-obsidian-reporter | Auto Git→Obsidian daily reports | Working prototype; niche but clear use case |
| [#616](https://github.com/anthropics/skills/pull/616) | HADS (Human-AI Doc Standard) | Dual-reader documentation convention | Lightweight; solves real dual-maintenance problem |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform | Broad enterprise coverage | Continued updates through Apr 23; modularization feedback being addressed |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *reliability and quality tooling*—specifically, skills that validate other skills (quality analysis, security analysis), fix infrastructure issues (OOXML corruption, case-sensitive file references), and restore user trust (org sharing, deduplication, eval framework repair)—over any single application-domain skill.**

---

# Claude Code Community Digest — 2026-04-29

## Today's Highlights

Two patch releases shipped today: **v2.1.122** introduces Bedrock service tier selection and PR-URL-based session resume, while **v2.1.123** fixes a critical OAuth 401 retry loop. Community attention remains focused on authentication regressions, Windows desktop reliability, and the long-running Bedrock backend feature request (226 👍). Several data-loss bugs surfaced, including a Codex plugin conflict that auto-deletes project `config/` directories.

## Releases

**v2.1.123** — Hotfix: Resolves an OAuth 401 retry loop that occurred when `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` was set, restoring authentication for users on experimental-free configurations.

**v2.1.122** — Feature release:
- Added `ANTHROPIC_BEDROCK_SERVICE_TIER` env var (`default`, `flex`, `priority`) for Bedrock users, mapped to the `X-Amzn-Bedrock-Service-Tier` header
- Improved `/resume` workflow: pasting a PR URL now finds the session that created that PR

## Hot Issues

1. **[#8327 — "Organization has been disabled" error with API key override](https://github.com/anthropics/claude-code/issues/8327)** (110 comments, 14 👍)
   - Valid Max/Pro subscribers hit this error when `ANTHROPIC_API_KEY` overrides their subscription auth. Long-running, high-engagement bug affecting subscription-tier users.

2. **[#32668 — Support Amazon Bedrock for Desktop/Cowork](https://github.com/anthropics/claude-code/issues/32668)** (61 comments, 226 👍)
   - The most-upvoted open feature request. Enterprise users want the CLI's Bedrock support extended to Desktop and Cowork modes. No official response yet.

3. **[#42776 — Desktop fails to relaunch on Windows (orphaned file lock)](https://github.com/anthropics/claude-code/issues/42776)** (59 comments, 16 👍)
   - Orphaned process holds file lock after crash/close, preventing relaunch. Significant Windows UX blocker.

4. **[#49363 — Malware reminder regression: subagent refusals on every Read](https://github.com/anthropics/claude-code/issues/49363)** (21 comments, 25 👍)
   - Fix from v2.1.92 regressed by v2.1.111. The system reminder injected on every `Read`/`Grep` still triggers false-positive refusals. Community frustrated by recurring fix/resurface cycle.

5. **[#53872 — Opus 4.7 context capped at 500K on Max x20 plan](https://github.com/anthropics/claude-code/issues/53872)** (8 comments, 2 👍)
   - Server-side enforcement persists across fresh installs; stale `org_level_disabled` flag not clearing. Affects high-tier subscribers expecting 1M context.

6. **[#54525 — Edit tool results include full originalFile, causing context pollution](https://github.com/anthropics/claude-code/issues/54525)** (4 comments, 1 👍)
   - Multiple edits on the same file bloat conversation history with full `originalFile` content each time. Token waste and model confusion.

7. **[#54521 — Codex plugin auto-deletes project `config/` directory (data loss)](https://github.com/anthropics/claude-code/issues/54521)** (2 comments)
   - Installing the `codex@openai-codex` plugin causes silent deletion of any project `config/` directory. Critical data-loss bug for affected users.

8. **[#54509 — All Claude Code Web sessions destroyed during April 28 outage](https://github.com/anthropics/claude-code/issues/54509)** (2 comments)
   - Account-level server-side corruption during yesterday's outage; all sessions lost. No recovery path described.

9. **[#54528 — Remote agent stuck on "Setting up a cloud container" — cannot cancel](https://github.com/anthropics/claude-code/issues/54528)** (3 comments)
   - Regression: remote agent runs hang permanently; cancel button has no effect. Blocks all remote workflows.

10. **[#54530 — Claude Code crashed with embedded Bun segfault](https://github.com/anthropics/claude-code/issues/54530)** (1 comment)
    - Native runtime crash in long-running sessions. Print of `bun.report` URL suggests upstream Bun issue surfacing through Claude Code.

## Key PR Progress

1. **[#54531 — Security fix: GitHub API automation scripts](https://github.com/anthropics/claude-code/pull/54531)** — Fixes high-severity auth vulnerability in `backfill-duplicate-comments.ts`. Scanner-identified issue.

2. **[#54429 — Hookify import prefix fix](https://github.com/anthropics/claude-code/pull/54429)** — Removes `hookify.*` import prefix that broke hook resolution in versioned caches. Affects four hook scripts and `rule_engine.py`.

3. **[#54424 — Plugin manifest: `repository` field docs correction](https://github.com/anthropics/claude-code/pull/54424)** — Documents `repository` as string-only in manifest reference; the runtime rejects object format.

4. **[#54103 — Commit-push-pr: fix all bash invocations in allowed-tools](https://github.com/anthropics/claude-code/pull/54103)** — Adds `git diff HEAD`, `git branch`, branch creation commands, and `Bash(git commit)` to the skill's allowed-tools list. Required under strict permissions.

5. **[#54094 — Quote `$CLAUDE_PLUGIN_ROOT` in hook commands](https://github.com/anthropics/claude-code/pull/54094)** — Fixes shell word-splitting when plugin root path contains spaces. Affects five in-tree plugins.

6. **[#54391 — Bug report docs: calculation assumptions](https://github.com/anthropics/claude-code/pull/54391)** — Adds guidance for reporting calculation bugs (fees, slippage, rounding). Submitter: BillionClaw.

7. **[#54134 — Fix "MacOS" → "macOS" in README](https://github.com/anthropics/claude-code/pull/54134)** — Corrects Apple's product name casing in two installation references.

## Feature Request Trends

- **Unified backend flexibility** — The top-voted request (#32668, 226 👍) demands Bedrock support for Desktop/Cowork. A growing theme: users want backend selection consistency across all Claude Code surfaces.
- **Multi-account and session portability** — #36151 (157 👍) requests multi-account switching in mobile; #44063 asks for resuming any session from CLI. Users expect Claude Code to work across devices and accounts seamlessly.
- **Skill-level model selection** — #23462 proposes declaring a preferred model in skill frontmatter, letting lightweight tasks run on Haiku while complex work uses Opus.
- **Pinnable scheduled routines** — Multiple issues (#54517, #54524) request better UI for scheduled agent runs: sidebar sections, pinning, and recents integration for Routine sessions.

## Developer Pain Points

1. **Regressions eroding trust** — Issue #49363 documents a second regression of the malware-reminder fix. Multiple commenters express frustration with "fixed then broken again" cycles.
2. **Authentication friction** — Three active authentication bugs this week (#8327, #54235, #53872) with 122+ total comments. OAuth retry loops, stale org flags, and API key conflicts form a recurring pain cluster.
3. **Silent data loss** — #54521 (Codex plugin deleting `config/`), #54509 (Web sessions destroyed), and #54525 (context pollution) all involve permanent or wasteful data loss with no recovery mechanism.
4. **Context window confusion** — Users on Max plans expect full 1M context but hit server-side caps (#53872); repeated edit operations silently bloat history (#54525). The gap between advertised capacity and actual behavior causes frustration for power users.
5. **Windows and WSL instability** — #42776 (orphaned file lock preventing relaunch), #36751 (auto-compact not triggering), and #54528 (stuck cloud containers) show Windows and remote workflows remain disproportionately affected by reliability issues.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-29

## Today's Highlights

Significant sandbox and permissions work landed across today's PR stack, including explicit sandbox profile controls and a deprecation path for `--full-auto`. On the bug front, a high-severity context-window regression is affecting GPT-5.4/5.5 users on the IDE extension, while a longstanding MCP feature request for project-specific servers finally closed after months of community engagement. Five Rust alpha releases (0.126.0-alpha.9 through .13) were cut in the last 24 hours.

## Releases

Five Rust alpha releases were published in the last 24 hours, all from the `rust-v0.126.0-alpha` series:
- **v0.126.0-alpha.9** through **v0.126.0-alpha.13**

No individual changelogs were provided in the release notes; these appear to be part of ongoing nightly builds.

- Releases: https://github.com/openai/codex/releases

## Hot Issues

1. **#16088 — Empty `.codex` file left behind when starting thread in project without `.codex`** (75 👍)
   A regression affecting WSL users. Starting a thread creates an empty `.codex` file, which can interfere with project detection and tooling. High community engagement with 32 comments.
   https://github.com/openai/codex/issues/16088

2. **#18258 — 'Computer Use plugin unavailable' on macOS despite bundled plugin files** (35 👍)
   The Codex desktop app fails to load its bundled `computer-use` plugin, with a known workaround involving cache path repair. 31 comments suggest this is a widespread macOS issue affecting GPT-5.5 workflows.
   https://github.com/openai/codex/issues/18258

3. **#2628 — [CLOSED] Project-specific MCP servers** (141 👍)
   The most-upvoted closed issue in recent history. Users wanted MCP server configs scoped per project rather than globally. It was closed today after months of discussion and 30 comments. This is a major win for the community.
   https://github.com/openai/codex/issues/2628

4. **#19585 — Pro weekly limit depletes fast on GPT-5.5, worsened by unstable compaction** (7 👍)
   Pro $200 users report unusually fast token depletion with GPT-5.5, compounding when context compaction fails. 19 comments reflect community concern about cost predictability.
   https://github.com/openai/codex/issues/19585

5. **#20132 — [CLOSED] Regression: GPT-5.4/5.5 1M context cap stuck at ~258k in IDE extension** (2 👍)
   A critical regression where the IDE extension ignores the model's 1M context window, reverting to ~258k. Filed and closed today—impact on long coding sessions is severe.
   https://github.com/openai/codex/issues/20132

6. **#18450 — 'stream disconnected before completion' on remote compact** (6 👍)
   Compact tasks fail with HTTP disconnections under load. Users on macOS M5 report this breaks long-running sessions. 7 comments suggest this is not an isolated issue.
   https://github.com/openai/codex/issues/18450

7. **#12496 — PowerShell error when running shell commands in sandbox (Windows)** (4 👍)
   Windows CLI users hit PowerShell-specific errors in the sandbox. This has been open since February, making it a persistent platform gap.
   https://github.com/openai/codex/issues/12496

8. **#20129 — [CLOSED] False positive 'cybersecurity risk' after crawling public surface behind Cloudflare** (3 👍)
   A safety-check false positive flagged a Cloudflare-protected surface as a risk. Closed today; users are wary of over-sensitive security scanning disrupting legitimate workflows.
   https://github.com/openai/codex/issues/20129

9. **#10867 — Support custom model providers in the desktop app** (11 👍)
   CLI users can switch models via `/model`, but the app lacks this capability. With 9 comments, this remains a blocker for power users who BYO API keys.
   https://github.com/openai/codex/issues/10867

10. **#19979 — Remote compact consistently times out on author login, works with API-compatible provider** (2 👍)
    Users on ChatGPT author login (vs. API keys) face repeated timeouts on context compaction. This suggests a backend routing or authentication issue.
    https://github.com/openai/codex/issues/19979

## Key PR Progress

1. **#20117 — Add explicit sandbox permission profiles to CLI**
   Introduces named permission profiles for `codex sandbox`, allowing direct sandbox behavior testing without ambient config. Foundation for removing `--full-auto`.
   https://github.com/openai/codex/pull/20117

2. **#20133 — Deprecate `--full-auto` flag**
   Removes `--full-auto` from TUI and marks it deprecated in CLI. Users are directed to one-time trust flow or explicit profiles. This is a security-oriented change.
   https://github.com/openai/codex/pull/20133

3. **#20120 — Remove sandbox full-auto shortcut**
   Follow-up to #20117. Eliminates the `--full-auto` shortcut from sandbox subcommands now that explicit profiles cover the same need.
   https://github.com/openai/codex/pull/20120

4. **#20137 — Route tools through selected environments**
   Core process/filesystem tools now respect multi-environment IDs (e.g., `oai_env`). Affects shell, exec, `apply_patch`, `list_dir`, skills, and MCP tooling. Significant architectural change for multi-environment support.
   https://github.com/openai/codex/pull/20137

5. **#20095 — Expose active permission profile metadata**
   Adds stable labels (`:workspace`, user-defined names) to permission profiles, making it easier for clients to display which config is active.
   https://github.com/openai/codex/pull/20095

6. **#19852 — Enforce workspace metadata protections in Linux sandbox**
   Protects `.git`, `.agents`, and `.codex` as read-only inside writable workspace roots in the bubblewrap sandbox adapter. Critical for sandbox integrity.
   https://github.com/openai/codex/pull/19852

7. **#19965 — Sync remote plugin config toggles**
   Remote plugin enable/disable writes now trigger install/uninstall calls instead of persisting backend IDs locally. Improves plugin state consistency.
   https://github.com/openai/codex/pull/19965

8. **#20113 — Fix heredoc parsing `file_redirect` regression**
   Prevents heredocs from bypassing file redirect approval rules. Introduced by PR #10941, this fix adds scenario test coverage.
   https://github.com/openai/codex/pull/20113

9. **#19859 — Show plugin hooks in plugin details**
   After hooks were discovered (#19705), this makes them visible in the `/plugins` detail view alongside skills, apps, and MCP servers. Improves plugin transparency.
   https://github.com/openai/codex/pull/19859

10. **#20134 — Sync installed remote plugin cache**
    Replaces legacy startup marker sync with actual reconciliation from the remote installed API. Downloads missing remote plugins to local cache at startup.
    https://github.com/openai/codex/pull/20134

## Feature Request Trends

- **Project-scoped configuration**: After #2628 (project-specific MCPs) closed, the community is pushing for scoped skills, agents, and hooks per project—mirroring `.codex` directory patterns.
- **Custom model providers**: #10867 remains open; users want the desktop app to support arbitrary API providers the way CLI does.
- **Dynamic reasoning effort**: #8649 (auto-reasoning tiers) reflects demand for cost-aware model behavior, especially with GPT-5.5 token burn concerns.
- **Mobile companion**: #14164 garnered 8 👍 for a mobile session viewer/controller, suggesting interest in remote Codex monitoring.
- **Agent creator**: #20127 proposes a `$agent-creator` command analogous to the skill creator, for building custom subagents per project.

## Developer Pain Points

- **Context compaction failures**: Multiple reports (#18450, #19390, #19979) of remote compaction timing out or disconnecting, especially on author-login accounts. This breaks long sessions and wastes tokens.
- **GPT-5.5 token depletion**: #19585 and related issues indicate Pro users are burning through weekly limits faster than expected, compounded by compaction failures.
- **Windows sandbox gaps**: PowerShell errors (#12496) and app-server failures (#20048) make Windows the least reliable platform for sandboxed workflows.
- **UI/UX regressions**: The Computer Use plugin issue (#18258), sidebar missing threads (#18640), and locale override not applying (#19239) suggest testing gaps in the desktop app's 5.5 update.
- **Inconsistent flag behavior**: The `--full-auto` deprecation (#20133) and missing `--worktree`/`--tmux` flags (#12862) highlight a desire for more ergonomic CLI session management.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-29

## Today's Highlights

A significant batch of reliability and UX fixes landed today, including signal forwarding for orphaned child processes and automatic response continuation for truncated model outputs. The community continues to flag persistent WSL2 rendering issues and 403 permission errors, while internally the team is making progress on AST-aware codebase mapping and extension plan directory resolution.

## Releases

**v0.41.0-preview.0** — Fixes the CLI suggestion logic to only show `list` when partial input is empty, preventing noisy autocomplete.

**v0.41.0-nightly.20260428.gc17400b83** — Adds a missing response key to custom theme text schema and provides a manual update command when automatic update fails.

**v0.40.0** — Stable release including retry logic for OpenSSL 3.x SSL errors during streaming and various core fixes.

**v0.40.0-preview.5** — Cherry-pick patch from the nightly branch into the preview release.

[Full changelog →](https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.4...v0.40.0-preview.5)

## Hot Issues

1. **#25306 — "The caller does not have permission" (403)**  
   High-engagement (24 comments, 10 👍). Users consistently hit a 403 permission error, especially with free Google accounts. The issue remains open and under triage.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/25306)

2. **#14104 — Cannot opt out of training data via `/privacy` command**  
   A long-standing P1 security concern (11 comments, 10 👍) that was recently closed. Users report the privacy command links to a generic notice page rather than providing an opt-out mechanism.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/14104)

3. **#25590 — `relaunchAppInChildProcess` orphans child on parent kill**  
   Spawned child processes do not receive `SIGTERM`/`SIGHUP` from the parent. A fix PR (#26160) was submitted today.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/25590)

4. **#26164 — Gemini 3.1 Pro can't self-diagnose WSL configuration failures**  
   Frustrating report: after nearly a month of failed diagnostics, Claude Sonnet 4.6 fixed the same WSL issue in minutes. Highlights a critical UX gap for Windows/WSL users.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/26164)

5. **#26114 — Large paste input causes premature line-break execution in WSL2**  
   Pasted content triggers execution before Enter is pressed, a WSL2-specific terminal behavior defect.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/26114)

6. **#24916 — Gemini CLI keeps asking for permissions on the same file**  
   Persistent permission prompt bug where "allow for all future sessions" does not stick.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/24916)

7. **#25961 — Custom theme loaded from file can't be selected by name**  
   A theme appears in the picker but selecting by name fails with `Theme "<name>" not found`. Affects Windows users on v0.39.1.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/25961)

8. **#25166 — Shell command hangs with "Waiting input" after completion**  
   Simple CLI commands appear active despite having finished. Multiple users report this as a frequent blocker.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **#25621 — AI Ultra subscriber blocked by "high traffic" errors**  
   Paying subscriber reports persistent rate-limiting under very light usage.  
   [→ Issue](https://github.com/google-gemini/gemini-cli/issues/25621)

10. **#23571 — Model frequently creates tmp scripts in random spots**  
    When shell execution is restricted, the model writes edit scripts across many directories, creating cleanup overhead.  
    [→ Issue](https://github.com/google-gemini/gemini-cli/issues/23571)

## Key PR Progress

1. **#26161 — Fix shell configuration executable and args not taking effect** (OPEN)  
   Fixes a critical bug where `tools.shell.executable` and `tools.shell.args` in `settings.json` were ignored, locking users into a hardcoded shell.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/26161)

2. **#26159 — Implement continuation auto-recovery** (OPEN)  
   Automatically detects truncated responses (`finishReason: MAX_TOKENS`) and prompts the model to continue with full context.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/26159)

3. **#26158 — Implement tool repair** (OPEN)  
   New scheduler uses fuzzy matching and normalization to repair slightly misspelled or incorrectly formatted tool names from the model.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/26158)

4. **#26160 — Implement signal forwarding in relaunch** (OPEN)  
   Fixes the orphan child process bug (#25590) by installing signal handlers on the bootstrap parent.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/26160)

5. **#26163 — Distinguish fallback chains for auto vs explicit model selection** (OPEN)  
   Fixes `maxAttempts` fall-through bug when users explicitly select a Gemini 3 model vs. using auto-routing.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/26163)

6. **#26073 — Fix remaining issues with generalist profile** (OPEN)  
   Targeted fixes for the generalist agent profile, addressing #26072 and related workflow issues.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/26073)

7. **#25957 — Event-driven hook system messages** (OPEN)  
   Refactors hook message handling to use `_emitOrQueue`, preventing message loss when the UI hasn't subscribed yet.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/25957)

8. **#25578 — Fix API key validation for keys containing periods** (OPEN, P1)  
   API keys with periods (e.g., `AQ.*`) were rejected with "API key not valid." Fixes RFC 3986 compliance in key pasting.  
   [→ PR](https://github.com/google-gemini/gemini-cli/pull/25578)

9. **#25383/#25384/#25396 — Extension plan directory resolution (Phases 2–4)** (CLOSED)  
   Securely resolves workspace-relative paths, provisions plan directories on-demand, and isolates sub-agent context via `AsyncLocalStorage`.  
   [→ PR #25383](https://github.com/google-gemini/gemini-cli/pull/25383) | [#25384](https://github.com/google-gemini/gemini-cli/pull/25384) | [#25396](https://github.com/google-gemini/gemini-cli/pull/25396)

10. **#25360 — Handle `ERR_STREAM_PREMATURE_CLOSE` as retryable** (CLOSED)  
    Adds premature stream closure to `RETRYABLE_NETWORK_CODES`, recovering from mid-generation stream drops without user intervention.  
    [→ PR](https://github.com/google-gemini/gemini-cli/pull/25360)

## Feature Request Trends

- **Automatic response continuation** — Multiple issues and PRs (#26157, #26159, #25959) point to strong demand for the CLI to transparently handle truncated model responses by prompting continuation.
- **Memory routing: global vs. project scopes** — Users want long-term preferences (e.g., "I prefer tabs") stored globally, while codebase-specific rules (e.g., "use the project's lint config") go into `.gemini/` local memory.
- **AST-aware codebase mapping** — A tracked EPIC (#22745) explores using AST tools to read method bounds precisely, reducing token waste and improving code navigation accuracy.
- **Destructive operation guardrails** — Repeated requests (#22672) for the agent to prefer safe alternatives over `git reset --force` or destructive database operations.
- **Better signal handling for subprocesses** — The orphaned-child bug (#25590) and associated PR (#26160) reflect a need for robust lifecycle management during agent-triggered shell commands.

## Developer Pain Points

- **WSL2 is a second-class citizen** — Multiple open issues (#26164, #26114, #24202) describe rendering artifacts, paste bugs, and self-diagnosis failures that don't occur on native Linux. The team is adding SSH detection helpers (#24546) but the WSL2 experience remains fragile.
- **403 permission errors are pervasive and inscrutable** — Issue #25306 (24 comments) and #25607 show that both free and paying users hit silent "caller does not have permission" errors without actionable diagnostics. The stale open status suggests this is a systemic API-level issue.
- **Theme and UI customization gaps** — Custom themes can't be selected by name (#25961), thick black borders appear on prompt bars (#24915), and table rendering breaks during streaming (#25218). These cosmetic bugs reduce trust in the CLI's polish.
- **"Waiting input" ghost states** — Shell commands that have completed continue to show as active and awaiting input (#25166), blocking the chat loop until manually resolved.
- **Model writes temporaries unpredictably** — When restricted from arbitrary shell execution, the model scatters `tmp` scripts across the workspace (#23571), creating cleanup overhead for users trying to maintain clean commits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-04-29**

---

## 1. Today's Highlights

Version 1.0.39 dropped today, introducing critical new slash commands for ACP sessions (`/compact`, `/context`, `/usage`, `/env`) and the ability to background tasks via `ctrl+x → b`. Community discourse remains heavily focused on better tool-whitelisting controls, context window visibility, and fixing scroll behavior in terminals. A new triage issue (#3025) proposes a “run-now” command to force mid-reasoning execution.

---

## 2. Releases

**v1.0.39** (2026-04-28) – [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.39)
- Allow ACP clients to toggle allow-all permission mode via session configuration
- Add `/compact`, `/context`, `/usage`, and `/env` slash commands for ACP sessions
- Press `ctrl+x → b` to move the current running task or shell command to the background
- Fix transient pipe errors on child process std

**v1.0.39-0** (2026-04-28) – [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.39-0)
- Added `ctrl+x → b` backgrounding support
- Improved `/remote` status output with actionable hints per connection state
- Better `--resume` session picker (tab layout, status display, progressive loading)

---

## 3. Hot Issues (Top 10 Noteworthy)

1. **#2205** – **Mouse scroll usability regression in Terminator**  
   *Updated: 2026-04-28 | Comments: 9 | 👍: 7*  
   Scroll no longer moves through agent output history; instead navigates input history. Users report this as a critical regression after the last update.  
   [Issue #2205](https://github.com/github/copilot-cli/issues/2205)

2. **#1973** – **Tool whitelist for Interactive Mode**  
   *Opened: 2026-03-11 | Comments: 8 | 👍: 12*  
   Highly requested feature to allow read-only tools (grep, cat, git log) without requiring `allow-all` which also permits destructive ops.  
   [Issue #1973](https://github.com/github/copilot-cli/issues/1973)

3. **#1455 (CLOSED)** – **Auto-inject "Co-authored by Copilot"**  
   *Updated: 2026-04-28 | Comments: 9 | 👍: 2*  
   Similar to Claude's auto-attribute feature. Now closed, indicating a potential implementation.  
   [Issue #1455](https://github.com/github/copilot-cli/issues/1455)

4. **#2643** – **preToolUse hook: silent rewrite still prompts confirmation**  
   *Updated: 2026-04-29 | Comments: 4*  
   Even with `permissionDecision: allow`, hooks using `updatedInput` trigger confirmation dialogs — defeating silent rewrites.  
   [Issue #2643](https://github.com/github/copilot-cli/issues/2643)

5. **#1464** – **Skills beyond alphabetical position ~32 unreachable**  
   *Updated: 2026-04-28 | Comments: 4 | 👍: 5*  
   With 63+ skills installed, only 32 are shown to the model due to token limits. Alphabetically later skills are never selected.  
   [Issue #1464](https://github.com/github/copilot-cli/issues/1464)

6. **#2314** – **Skills prompt injection silently truncates with no prioritization**  
   *Updated: 2026-04-28 | Comments: 3 | 👍: 2*  
   Fixed character budget drops skills silently — no warning or prioritization mechanism exists.  
   [Issue #2314](https://github.com/github/copilot-cli/issues/2314)

7. **#3025 (NEW)** – **Introduce command to steer agent mid-reasoning**  
   *Created: 2026-04-29 | Comments: 1*  
   Proposes `/run-now` or `!execute` to force immediate execution of a reasoning step instead of queuing.  
   [Issue #3025](https://github.com/github/copilot-cli/issues/3025)

8. **#2967** – **Opus 4.7 small context window triggers auto-compact too frequently**  
   *Updated: 2026-04-28 | Comments: 2 | 👍: 1*  
   Opus 4.7's effective context is much smaller than GPT 5.4, causing multiple compaction cycles per session.  
   [Issue #2967](https://github.com/github/copilot-cli/issues/2967)

9. **#2408** – **Auto-update CLI fails across sessions**  
   *Updated: 2026-04-28 | Comments: 6 | 👍: 3*  
   Took three sessions to get the latest version; users report unreliable auto-update mechanism.  
   [Issue #2408](https://github.com/github/copilot-cli/issues/2408)

10. **#2795** – **--agent flag broken with --plugin-dir and -p**  
    *Updated: 2026-04-28 | Comments: 2 | 👍: 4*  
    When using `--agent <name>` with both `--plugin-dir` and `-p <prompt>`, the agent is not found in the plugin directory.  
    [Issue #2795](https://github.com/github/copilot-cli/issues/2795)

---

## 4. Key PR Progress (Top 10)

1. **#3018 (CLOSED)** – **Update README.md**  
   Contributor added a CCPA compliance checklist document.  
   [PR #3018](https://github.com/github/copilot-cli/pull/3018)

2. **#2970 (CLOSED)** – **Create devcontainer.json**  
   Adds a Dev Container configuration for easier development setup.  
   [PR #2970](https://github.com/github/copilot-cli/pull/2970)

*(Only 2 PRs were active in the last 24h; both are closed.)*

---

## 5. Feature Request Trends

- **Tool Whitelisting & Permission Tiers** (#1973, #2174): Users want safe-read-only whitelists (grep, find, git log) without allowing full `bash` execution. Highly demanded (12 👍 on #1973).
- **Context Window Transparency** (#2052, #1851, #1688): Persistent token usage indicator and configurable compaction thresholds are repeatedly requested. #2052 has 10 👍.
- **Agent Steering & Pausing** (#3025, #1928): Users want to intervene mid-reasoning or pause ongoing work to give new instructions.
- **External Model Integration** (#2943): OpenRouter integration to use third-party models remains a niche but consistent request (3 👍).
- **MCP Server Management** (#1091): Adding MCP servers from CLI without entering interactive mode.

---

## 6. Developer Pain Points

- **Horizontal Scroll Regression in Terminals** (#2205, #2997): Mouse scroll behavior changed to navigate input history instead of output history, and multi-line paste is broken in Git Bash. Highly upvoted frustration (7 👍).
- **Skills System Drops Items Silently** (#1464, #2314): Skills beyond position ~32 are never available to the model, with no user notification or prioritization mechanism. Users with many skills are effectively crippled.
- **Auto-Update Unreliability** (#2408): Users report needing multiple sessions to get new versions. Blocks access to critical fixes.
- **LSP Server Timeouts on Large Projects** (#1392): Default `initializeTimeout` too short for OmniSharp on large C# solutions — no configuration available.
- **Opus Model Context Window Mismatch** (#2967): Auto-compaction fires multiple times per session due to perceived small effective context, degrading workflow.

---

*Generated from GitHub data for github.com/github/copilot-cli. Latest data: 2026-04-29.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-29

## Today's Highlights
Kimi Code CLI v1.40.0 shipped today with critical fixes to shell prompt status, OAuth recovery, and command parsing. The community is actively pushing for granular auto-approval rules and a unified auto mode, while several reports highlight stability concerns around file descriptor limits and sub-agent timeouts. A notable surge in PR activity—21 open PRs—reflects growing external contributor engagement.

## Releases
**v1.40.0** — [Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.40.0)
- **fix(shell):** Active agent task count now shown in prompt status bar ([PR #2041](https://github.com/MoonshotAI/kimi-cli/pull/2041)) — improves real-time awareness during multi-step workflows.
- **fix(auth):** OAuth flows recover gracefully after transient failures ([PR #2060](https://github.com/MoonshotAI/kimi-cli/pull/2060)) — addresses a common frustration for users with unstable network connections.
- **fix(shell):** `/usage` command parsing corrected (related PR details incomplete in source).

## Hot Issues (10 selected)

1. **[#2040] Send VS Code notification when approval required** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2040)  
   *Enhancement*: When VS Code is minimized, approval dialogs inside the Kimi webview go unseen. User `taitoopj` requests `showInformationMessage` notifications. 4 comments, no upvotes yet — but addresses a critical UX gap for IDE-integrated workflows.

2. **[#1745] Plan mode can't write file in Zed ACP** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/1745)  
   *Bug*: `WriteFile` operation fails under Zed editor integration. One comment, one upvote. Highlights the ongoing challenge of ACP compatibility across editors.

3. **[#2111] Too many open files system error crashes agent** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2111)  
   *Critical Bug*: CLI crashes with `EMFILE` error on macOS even when no other agent is running. No workaround reported yet. Zero comments suggests it may be freshly discovered.

4. **[#2107] Focus event info leaks into CLI input** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2107)  
   *Bug*: On Ubuntu 24.04 / i3wm, window switching events print into the kimi CLI input buffer, corrupting user prompts. Affects terminal multiplexer users.

5. **[#2101] Web: support busy session metadata edits safely** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2101)  
   *Bug/Web*: Renaming or archiving sessions while a worker is busy can lose data due to unsafe `state.json` read-modify-write. Filed by core contributor `wbxl2000`.

6. **[#2106] Windows 11 startup takes >1 minute via uv** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2106)  
   *Performance Bug*: CLI installed via `uv` on Windows 11 Enterprise starts extremely slowly. Impacting Windows developer adoption.

7. **[#2105] Unified Auto Mode as first-class feature** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2105)  
   *Feature Request*: Proposes unifying `--yolo`, `--auto-approve`, `--print` under a single coherent "Auto Mode" concept. One upvote — aligns with multiple other requests.

8. **[#2103] Sub-agent timeout too short** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2103)  
   *Bug*: `kimi-k2.6` sub-agents time out before completing delegated tasks on Windows. Users report workflows breaking mid-execution.

9. **[#1971] 401 Authentication Error with TUN Mode** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/1971)  
   *Bug (Closed)*: Authentication fails under TUN mode on Linux/WSL2. Closed but no resolution details in source — may warrant re-examination.

10. **[#2074] Web UI JavaScript assets served as text/plain on Windows** — [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2074)  
    *Bug*: Windows Python MIME detection serves `.js` files as `text/plain`, breaking the Web UI entirely. Directly tied to [PR #2100](#).

## Key PR Progress (10 important)

1. **[#2114] Granular Auto-Approval Rules in config** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2114)  
   *feat*: External contribution from `suJayhh` — adds per-tool auto-approval rules to `config.toml`, similar to Claude Code. This is the top community-requested feature.

2. **[#2097] `/reload-skills` command** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2097)  
   *feat*: Discover new slash commands without restarting the session. Improves developer velocity for skill authors.

3. **[#2113] Wrap shell commands in `bash -c` for ACP terminal** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2113)  
   *fix*: ACP `terminal/create` calls break when client shells don't support direct command execution. Critical for Zed/VS Code ACP interoperability.

4. **[#2112] MCP schema exposure guardrails** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2112)  
   *fix*: Prevents chat failures when MCP servers expose large tool lists. Solves [#2096](#) — important for heavy MCP users.

5. **[#2080] Show diff content in Web ToolInput** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2080)  
   *fix(web)*: Replaces raw JSON diff strings with rendered diff UI. Improves readability during approval workflows.

6. **[#2082] Expose runtime identity (PID + session ID)** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2082)  
   *feat*: Enables external monitoring tools to map processes to session IDs. Useful for CI/CD integration.

7. **[#1960] RalphFlow architecture** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/1960)  
   *feat(soul)*: Automated iteration framework with ephemeral context and convergence detection — prevents infinite loops in multi-step workflows. Long-running PR (since Apr 20) under active review.

8. **[#2110] `/prompt-color` command** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2110)  
   *feat(ui)*: Customizable user input echo color. Small UX win that addresses visual scanning fatigue in long sessions.

9. **[#2100] Fix JS asset MIME type on Windows** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2100)  
   *fix(web)*: Resolves Web UI startup failure on Windows by enforcing correct MIME types. Directly addresses [#2074](#).

10. **[#2099] UTF-8 encoding for git file listing** — [PR](https://github.com/MoonshotAI/kimi-cli/pull/2099)  
    *fix*: Prevents crashes on Windows GBK locales when using `@file` syntax. Essential for Chinese Windows users.

## Feature Request Trends

1. **Granular Auto-Approval** — Dominant theme. Users want per-tool, per-directory auto-approval rules (like Claude Code), configurable in `config.toml`. Both [#2105](#) (unified auto mode) and [#2114](#) (granular rules) address this.

2. **IDE Notification Integration** — [#2040](#) highlights the need for out-of-band notifications (VS Code `showInformationMessage`) when approvals are pending. Suggests users want Kimi to integrate deeper into the IDE host, not just the webview.

3. **Session Lifecycle Improvements** — [#2097](#) (hot-reload skills), [#2082](#) (PID exposure), and [#2101](#) (safe metadata edits) indicate a desire for more robust session management without restarts.

4. **Read-Only / Safety Modes** — [#2109](#) (read-only mode PR) and [#2045](#) (AFK mode) show growing interest in sandboxed browsing and guardrails for automated execution.

## Developer Pain Points

- **File descriptor limits** ([#2111](#)) — Agent crashes on macOS with no clear cause. Likely related to file watcher or tool spawn behavior.
- **Sub-agent timeouts** ([#2103](#)) — Hardcoded short timeout for sub-agents breaks complex workflows, especially on Windows.
- **Windows startup performance** ([#2106](#)) — >1 minute startup via `uv` on Windows 11 is a serious adoption blocker.
- **ACP editor compatibility** ([#1745](#), [#2113](#)) — WriteFile and shell execution failures across different editors (Zed, VS Code) remain unresolved.
- **Terminal focus / input corruption** ([#2107](#)) — Focus events bleeding into CLI input on Linux tiling WMs is a niche but jarring bug.
- **Cross-platform encoding** ([#2099](#)) — GBK locale crashes on Windows continue to affect international users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the **OpenCode community digest** for **2026-04-29**.

***

## OpenCode Community Digest — 2026-04-29

### 1. Today's Highlights
Today marks a significant day for developer tooling, with a new patch release (v1.14.29) that tightens provider compatibility for Moonshot and Kimi users. The community continues to push for background task execution and better Windows/Kitty terminal support, while the maintainers are actively merging beta features like a new `opentui` (v0.2.0) and a full Effect HttpApi backend parity.

### 2. Releases
**v1.14.29** — The team shipped a targeted patch focusing on core stability and provider compatibility.
- **Sessions** now track a relative workspace path.
- **Provider Fixes:** Moonshot and Kimi tool schemas are sanitized to prevent rejected tool calls.
- **Error Handling:** MCP and Provider OAuth errors now better match the native API.
- **Shell:** Cancellation handling has been finalized.
- *Note:* The version jump from the previous stable (0.3.x) to 1.14.x suggests rapid iteration.

### 3. Hot Issues
*10 noteworthy issues driving the discussion today.*

1. **[#1220 — Crash on Startup (CLOSED)](https://github.com/anomalyco/opencode/issues/1220)** — User reports OpenCode crashes the entire terminal session (Kitty + tmux) on launch. 18 comments, high engagement. *Why it matters:* Core functionality failure is a critical blocker for adoption on non-standard terminals.

2. **[#1970 — Background Bash Execution (OPEN)](https://github.com/anomalyco/opencode/issues/1970)** — Request for `Ctrl+b` style non-blocking bash execution (21 👍). *Why it matters:* This is the most-upvoted open feature request; users need long-running builds/servers without blocking the chat.

3. **[#21010 — Provider Error (Kimi) (OPEN)](https://github.com/anomalyco/opencode/issues/21010)** — Persistent errors with the Kimi provider after upgrading to v1.3.13. 14 comments. *Why it matters:* Regression in provider reliability erodes trust.

4. **[#14337 — Windows: "Just a moment..." Loop (CLOSED)](https://github.com/anomalyco/opencode/issues/14337)** — Windows 10 upgrade leads to frozen loading screen. 12 comments, 5 👍. *Why it matters:* Windows viability is a recurring pain point.

5. **[#5641 — Copy-to-Clipboard for TUI (CLOSED)](https://github.com/anomalyco/opencode/issues/5641)** — Request for copy functionality on code snippets in the TUI. *Why it matters:* A basic UX gap that makes the TUI feel incomplete for interactive use.

6. **[#8565 — Screen Reader Accessibility (CLOSED)](https://github.com/anomalyco/opencode/issues/8565)** — Reports that the TUI is "actively hostile" to screen readers due to emojis and animations. *Why it matters:* Accessibility compliance is becoming a blocker for enterprise adoption.

7. **[#7624 — Base Path / Prefix Routing (OPEN)](https://github.com/anomalyco/opencode/issues/7624)** — 24 👍, highest-upvoted open issue. Need to run OpenCode under a URL prefix for platform integration. *Why it matters:* Critical for embedding OpenCode into larger SaaS platforms.

8. **[#9292 — Expose Session Context to Child Processes (CLOSED)](https://github.com/anomalyco/opencode/issues/9292)** — Request for env vars to identify the parent session. *Why it matters:* Essential for scripting and automation workflows.

9. **[#9575 — Model Fallback in Agents (CLOSED)](https://github.com/anomalyco/opencode/issues/9575)** — 14 👍. Wants YAML-based fallback for specific agent configurations. *Why it matters:* Production reliability requires failover between models.

10. **[#15185 — Blank Screen on Apple Silicon (CLOSED)](https://github.com/anomalyco/opencode/issues/15185)** — Crash on M1 Pro via Rosetta 2 due to unsupported AVX-512 instructions. *Why it matters:* A hard crash on the most popular developer laptop silicon is a showstopper.

### 4. Key PR Progress
*10 important pull requests shaping the next release.*

1. **[#24898 — Fix session fork compaction (OPEN)](https://github.com/anomalyco/opencode/pull/24898)** — Fixes forked sessions including old pre-compaction messages. *Impact:* Stops data leakage in forked conversation branches.

2. **[#24869 — Toggle Paste Summary in TUI (OPEN)](https://github.com/anomalyco/opencode/pull/24869)** — Adds an easy toggle for collapsing large pasted text. *Impact:* Directly addresses #15405 UX friction.

3. **[#12679 — Vim Motions in Prompt Input (OPEN)](https://github.com/anomalyco/opencode/pull/12679)** — Adds optional Vim mode (enable with `tui.vim: true`). *Impact:* Massive quality-of-life for the Vim-heavy developer demographic.

4. **[#24895 — Generalized Reasoning Content Injection (OPEN)](https://github.com/anomalyco/opencode/pull/24895)** — Replaces hardcoded DeepSeek logic with a provider-agnostic approach. *Impact:* Fixes #15197 (Kimi K2.5 reasoning errors) and future-proofs the SDK.

5. **[#20039 — Bash→Shell Tool + PowerShell Support (OPEN)](https://github.com/anomalyco/opencode/pull/20039)** — Renames `bash` tool to `shell`, adds native cmd/pwsh/powershell prompts. *Impact:* Huge for Windows and cross-platform agent interoperability.

6. **[#24884 — Desktop: Recover from White Screen (CLOSED)](https://github.com/anomalyco/opencode/pull/24884)** — Fixes a desktop white-screen crash after renderer reload. *Impact:* Stops the "blank screen" issue (#15185, #14337) on Desktop.

7. **[#24891 — New `open` Tool (OPEN)](https://github.com/anomalyco/opencode/pull/24891)** — Built-in tool to open local files/URLs via the OS default handler. *Impact:* Agents can now surface results directly.

8. **[#24887 — New `hash` Tool (OPEN)](https://github.com/anomalyco/opencode/pull/24887)** — Built-in checksum verification tool. *Impact:* Essential for CI/CD and artifact verification workflows.

9. **[#24889 — New `wait` Tool (OPEN)](https://github.com/anomalyco/opencode/pull/24889)** — Bounded async wait inside assistant turns. *Impact:* Enables agents to handle timed operations gracefully.

10. **[#24853 — Effect HttpApi Backend Parity (OPEN)](https://github.com/anomalyco/opencode/pull/24853)** — Major refactor adding an Effect-ts backend path alongside Hono. *Impact:* Signals a strategic architecture shift toward functional programming and type-safe APIs.

### 5. Feature Request Trends
*The community is clearly voting with their thumbs and comments. The most-requested directions are:*

- **Background Execution:** Non-blocking bash/shell commands (similar to Claude Code’s `Ctrl+b`) is the single highest-demand feature.
- **Enterprise Self-Hosting:** Base path routing (#7624, 24 👍) and managed config files (#11338) indicate a strong push for embedding OpenCode into larger platforms.
- **Cross-Platform Parity:** The volume of Windows/Apple Silicon bugs shows users are desperate for native compatibility (not just Rosetta or Wine).
- **UI/UX Polish:** Automated paste collapsibility, copy-to-clipboard, and Vim motions are tactical but high-ROI improvements for daily users.
- **Provider Resilience:** Model fallback in agents (#9575) and generalized reasoning content injection are treating provider failures as a primary failure mode.

### 6. Developer Pain Points
*Recurring frustrations dominating the bug tracker:*

- **Terminal Ecosystem Fragmentation:** Crashing on Kitty + tmux, Warp, and VSCode integrated terminal is a top-friction source. The app is strongly tied to modern terminal emulators.
- **Windows Hell:** Issues #14337, #15176, #7417, #12937 highlight a pattern of crashes, missing GLIBC, and silent failures on Windows. This remains the weakest platform.
- **Update Breakage:** Multiple users blame upgrades (e.g., v0.3.28 → v0.3.51) for introducing crashes and blank screens—indicating a regression-prone release pipeline.
- **UI Glitch Echo:** Duplicated assistant responses (#14935, #14623) and broken keybindings (#14899) suggest the recent TUI overhaul introduced regressions that are yet to be fully squashed.
- **Provider Lock-in:** Hardcoded provider logic (DeepSeek, OpenAI) is causing failures for users on Kimi, ZenMux, and other alternative providers. The community is demanding a generic API layer.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-29

## Today's Highlights
Pi v0.70.6 ships with first-class Cloudflare Workers AI provider support, resolving a key integration gap. The community is actively converging on extension API improvements, particularly around tool execution (`ctx.executeTool()`) and editor composability. Antigravity (Google Cloud Code Assist) API breakage has been fixed after users hit 503 errors.

## Releases
- **[v0.70.6](https://github.com/badlogic/pi-mono/releases/tag/v0.70.6)**: New provider – Cloudflare Workers AI, configured via `CLOUDFLARE_API_KEY`/`CLOUDFLARE_ACCOUNT_ID`. See [docs/providers.md#api-keys](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md#api-keys). Also includes update-check infrastructure hitting `pi.dev` endpoints.

## Hot Issues

1. **[#3208 – Custom Thinking Levels per Model](https://github.com/badlogic/pi-mono/issues/3208)** (OPEN, 12 👍)  
   *Community demand for model-specific thinking level definitions in `models.json` so `Shift+Tab` only cycles supported levels. High engagement suggests this is a UX priority for power users.*

2. **[#3357 – Official Local LLM Provider Extension](https://github.com/badlogic/pi-mono/issues/3357)** (OPEN, 12 👍)  
   *Request for dynamic model list fetching from `{baseUrl}/models` to support llama.cpp/Ollama/LM Studio. One of the highest-voted open feature requests.*

3. **[#2870 – Follow XDG Base Directory](https://github.com/badlogic/pi-mono/issues/2870)** (CLOSED, 10 👍)  
   *Linux users finally get relief from home-directory clutter as Pi adopts `$XDG_CONFIG_HOME` standard. Community closely watched this resolution.*

4. **[#2815 – Antigravity "no longer supported" error](https://github.com/badlogic/pi-mono/issues/2815)** (CLOSED)  
   *Google's Cloud Code Assist API began rejecting Pi's hardcoded older user-agent. Fixed today via UA bump to 1.107.0. Critical for all Antigravity users.*

5. **[#3884 – Shift+Enter sends instead of newline](https://github.com/badlogic/pi-mono/issues/3884)** (CLOSED)  
   *Regression in v0.70.5 on macOS. Basic UX issue that disrupted core editing workflow. Quickly fixed in follow-up PRs.*

6. **[#3786 – `EBADF` on bash executor tools](https://github.com/badlogic/pi-mono/issues/3786)** (CLOSED)  
   *Intermittent file descriptor exhaustion (`EBADF`) after extended sessions. Affected `git`, `pwd`, `python` commands. Multiple reports suggest systemic FD management issue.*

7. **[#3931 – Missing latest OpenRouter models](https://github.com/badlogic/pi-mono/issues/3931)** (CLOSED)  
   *Users unable to load recent model versions (e.g., gpt-5.5). Community prompting for faster model catalog updates from OpenRouter.*

8. **[#3878 – Edit tool fails on escaped backticks/emoji](https://github.com/badlogic/pi-mono/issues/3878)** (OPEN)  
   *Two encoding bugs in `oldText` parameter causing silent match failures. Affects code with literal backtick sequences and emoji variation selectors.*

9. **[#3929 – Bun startup crash on `bun pm bin -g` failure](https://github.com/badlogic/pi-mono/issues/3929)** (CLOSED)  
   *Crash when `~/.bun/install/global/package.json` missing. Follow-up bug from earlier global path fixes. Quick community response.*

10. **[#3922 – Self-update fails system-wide installs](https://github.com/badlogic/pi-mono/issues/3922)** (CLOSED)  
    *`pi update` permissions error when Pi is installed into `/usr/…`. Common pain for npm global install users.*

## Key PR Progress

1. **[#3877 – Update check against pi.dev](https://github.com/badlogic/pi-mono/pull/3877)** (CLOSED)  
   *New version-check endpoint on `pi.dev` with platform/user-agent telemetry. Foundation for automatic update notifications.*

2. **[#3897 – Fix Antigravity UA to 1.107.0](https://github.com/badlogic/pi-mono/pull/3897)** (CLOSED)  
   *Critical fix for Google Cloud Code Assist API's 503 rejection. Unblocks all Antigravity model requests. Duplicate PRs (#3897, #3899) indicate urgency.*

3. **[#3861 – Alternate Bun node_modules resolution](https://github.com/badlogic/pi-mono/pull/3861)** (CLOSED)  
   *Fixes startup crash when `npmCommand: ["bun"]` is configured. Uses existing Bun detection logic instead of non-existent `bun root -g`.*

4. **[#3917 – Restore terminal state on unexpected exit](https://github.com/badlogic/pi-mono/pull/3917)** (CLOSED)  
   *Prevents terminal corruption (Kitty keyboard protocol mode) when Ctrl+C is pressed during startup. Important for Ghostty/Kitty users.*

5. **[#3932 – Horizontal UI padding setting](https://github.com/badlogic/pi-mono/pull/3932)** (CLOSED)  
   *New `paddingX` setting (0-10 chars) adds breathing room. Addresses visual comfort requested by users migrating from other TUIs.*

6. **[#3928 – Disable `eager_input_streaming` for minimax-m2.5-free](https://github.com/badlogic/pi-mono/pull/3928)** (CLOSED)  
   *Fixes HTTP 400 on MiniMax backend — rejects per-tool streaming fields. Targeted fix for OpenCode provider proxy.*

7. **[#3909 – Correct DeepSeek pricing](https://github.com/badlogic/pi-mono/pull/3909)** (CLOSED)  
   *DeepSeek v4 Flash cache read price was 10x too high. Also applies current 75% discount for v4 Pro until May end. Community-sourced correction.*

8. **[#3887 – Image content support](https://github.com/badlogic/pi-mono/pull/3887)** (OPEN)  
   *Adds `ImageContent` type and support for image models via Google/OpenRouter. Enables Flux and other non-tool-call image models. Significant capability expansion.*

9. **[#3915 – Slash commands from inline autocomplete](https://github.com/badlogic/pi-mono/pull/3915)** (OPEN)  
   *Enables `/model`, `/memory`, etc. execution mid-text via autocomplete. Non-destructive commands keep surrounding text. Cursor CLI parity feature.*

10. **[#3868 – Migrate syntax highlighting to Shiki](https://github.com/badlogic/pi-mono/pull/3868)** (OPEN)  
    *Replaces `cli-highlight` with Shiki for bash, read, write, edit diffs, and Markdown. Theme-aware highlighting. Significant rendering quality improvement.*

## Feature Request Trends

- **Extension API expansion**: Dominant theme. Top requests include `ctx.executeTool()` for programmatic tool invocation (#3893), composable `setEditorComponent` for multi-extension editor layouts (#3935), and viewport state exposure (`ctx.ui.getViewportState()`, #3925).
- **Session flexibility**: Multiple requests for mid-session `cwd` switching (#3921), extensible model thinking levels (#3208), and dynamic model list fetching from local providers (#3357).
- **UI polish**: Horizontal padding setting (#3933), input editor background theming (#3768), and horizontal padding (#3932) signal maturing UX expectations.
- **Observability**: Compact JSON log mode for finalized messages (#3905) indicates enterprise/production usage patterns emerging.

## Developer Pain Points

- **Tool execution fragility**: `EBADF` file descriptor exhaustion (#3786, #3706) and SDK agent tool execution regression (#3867) suggest systemic issues in tool runtime lifecycle management under extended sessions.
- **Provider integration friction**: Multiple provider-specific bugs — Fireworks 400 on tool-enabled requests (#3854, #3834), MiniMax `eager_input_streaming` rejection (#3928), Antigravity UA deprecation (#2815) — indicate lack of standardized provider validation during onboarding.
- **Terminal corruption risks**: Ctrl+C during startup leaving Kitty keyboard protocol mode active (#3919, #3918, PR #3917) is a recurring issue that can break terminal state for non-Pi sessions.
- **Startup crashes on unusual runtimes**: Bun global install path issues (#3929) and system-wide npm permissions (#3922) highlight edge cases in Pi's runtime detection that cause hard crashes on startup rather than graceful fallbacks.
- **Documentation and link rot**: Broken links on new pi.dev docs site (#3838, #3920) with doubled `/latest/` paths are eroding trust in the refreshed documentation platform.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-29

## Today's Highlights
Multiple releases landed today including a stable v0.15.4 with Catalan language support and a fix for VS Code slash command completions. The team shipped MCP CLI configuration support in nightlies and previews, while making significant progress on background task management — the unified background shells dialog (Phase B, PR #3720) and hot-reload system (#3696) are now open for review. A flurry of DeepSeek API compatibility issues continues to dominate issue traffic.

## Releases
- **[v0.15.3-nightly.20260429.2ee014e34](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.3-nightly.20260429.2ee014e34)** — MCP config as CLI (first contribution from @eliird) + model switch header refresh fix.
- **[v0.15.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-preview.0)** — Same MCP/header changes as nightly.
- **[v0.15.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.4)** — **Adds Catalan language support** (PR #3643 by @jordimas) + VS Code slash command completion fix (#3609) + gradient rendering fix.
- **[sdk-typescript-v0.1.7](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.7)** — Bundles CLI 0.15.3 (stable); backfilled release for 0.1.5.

## Hot Issues (Top 10 by Community Impact)

1. **[#3579](https://github.com/QwenLM/qwen-code/issues/3579) — [CLOSED] DeepSeek API 400: `reasoning_content` must be passed back**  
   *Why it matters*: Critical bug affecting DeepSeek thinking mode users — the API rejects responses that fail to echo the `reasoning_content` field. 9 comments indicate widespread impact. Community strongly upvoted.

2. **[#3652](https://github.com/QwenLM/qwen-code/issues/3652) — [OPEN] InternalError: input length out of range [1, 983616]**  
   *Why it matters*: Long-session users hit a provider-imposed token limit on a non-obvious boundary. The author reports being forced to restart conversations, losing context. PR #3698 now proposes auto-compression before sends.

3. **[#3644](https://github.com/QwenLM/qwen-code/issues/3644) — [OPEN] Rewind broken when IDE integration enabled**  
   *Why it matters*: `/rewind` silently fails when `ide.enabled: true` — a regression for IDE users relying on conversation rollback. Already has 3 comments debating root cause.

4. **[#2401](https://github.com/QwenLM/qwen-code/issues/2401) — [CLOSED] Caps Lock key freezes terminal in VS Code**  
   *Why it matters*: Long-standing accessibility bug (opened March 15); finally closed. Pressing Caps Lock makes the terminal completely unresponsive. Resurfaced interest yesterday as users tested the latest VS Code companion.

5. **[#2786](https://github.com/QwenLM/qwen-code/issues/2786) — [CLOSED] Agent chain-of-thought blocks urgent user interrupts**  
   *Why it matters*: Non-technical Chinese user reported the agent ignores mid-chain corrections until the full thought process completes. Closed now, but 3 comments + 1 👍 show this is a UX priority for agent users.

6. **[#3595](https://github.com/QwenLM/qwen-code/issues/3595) — [OPEN] Qwen Code CLI cannot recognize images with local Qwen3.6-35B-A3B**  
   *Why it matters*: Vision support gap when using self-hosted models. User provides configuration screenshots; other self-hosters watching this issue.

7. **[#3634](https://github.com/QwenLM/qwen-code/issues/3634) — [OPEN] Background task management: roadmap**  
   *Why it matters*: Architect-level tracking issue for the entire background tasks feature. Phase B (#3642) merged, follow-ups in active PRs. Essential reading for anyone extending the task system.

8. **[#2924](https://github.com/QwenLM/qwen-code/issues/2924) — [OPEN] Screen flickers when expanding agents (Ctrl+E/Ctrl+F)**  
   *Why it matters*: Terminal UI stability bug — reproduction is reliable. Linked PR #3663 claims to fix this; community awaiting merge.

9. **[#3304](https://github.com/QwenLM/qwen-code/issues/3304) — [OPEN] Switching models mid-session causes API failures**  
   *Why it matters*: Regression for users who switch between thinking/non-thinking providers mid-chat (e.g., Gemini → Qwen). The header refresh fix in v0.15.4 may partially address this.

10. **[#3696](https://github.com/QwenLM/qwen-code/issues/3696) — [OPEN] Comprehensive hot-reload system**  
    *Why it matters*: Tracking issue for runtime reload of skills, extensions, MCP, and config — without session restart. This is the most requested developer UX improvement. Sub-tasks now listed with dependency order.

## Key PR Progress (Top 10)

1. **[#3680](https://github.com/QwenLM/qwen-code/pull/3680) — [OPEN] Expand TUI markdown rendering**  
   Adds Mermaid diagrams, math, task lists, blockquotes to terminal output. Major leap for rich-content readability in the CLI.

2. **[#3723](https://github.com/QwenLM/qwen-code/pull/3723) — [OPEN] Shared permission flow for tool execution**  
   Addresses #3247 — unifies tool permission prompts across all tool types. Simplifies the security UX for multi-tool agents.

3. **[#3721](https://github.com/QwenLM/qwen-code/pull/3721) — [OPEN] Fix SubAgent display flicker via visual height bounding**  
   Replaces hard-coded line limits with dynamic height calculation. Directly addresses issue #2924.

4. **[#3717](https://github.com/QwenLM/qwen-code/pull/3717) — [OPEN] FileReadCache for unchanged reads**  
   Short-circuits redundant file reads in long sessions. Big performance win for iterative development workflows.

5. **[#3720](https://github.com/QwenLM/qwen-code/pull/3720) — [OPEN] Wire background shells into combined dialog**  
   Phase B follow-up: merges managed shell pool (#3642) with subagent display into one unified `Background tasks` overlay.

6. **[#3684](https://github.com/QwenLM/qwen-code/pull/3684) — [OPEN] Event monitor tool with throttled stdout streaming (Phase C)**  
   New `Monitor` tool spawns long-running commands and streams stdout back to the agent with token-bucket rate limiting. Expands autonomous agent capabilities.

7. **[#3722](https://github.com/QwenLM/qwen-code/pull/3722) — [OPEN] Fix memory dream transcript path**  
   Bug fix: `/dream` command now correctly uses project-level transcript path instead of global config.

8. **[#3645](https://github.com/QwenLM/qwen-code/pull/3645) — [OPEN] Correct model precedence: argv > settings > env vars**  
   Fixes long-standing confusion about which model configuration wins. Now explicit: CLI flags override settings, which override environment variables.

9. **[#3570](https://github.com/QwenLM/qwen-code/pull/3570) — [OPEN] Add `simplify` bundled skill**  
   New bundled `/simplify` skill for structured cleanup of recent git changes. Combined with skill discovery and slash-command loading.

10. **[#3663](https://github.com/QwenLM/qwen-code/pull/3663) — [OPEN] Harden TUI flicker and streaming stability**  
    Consolidated fix for multiple TUI bugs: flicker (#3279), narrow-output truncation, streaming blank-tail, and OpenAI-compatible delta handling.

## Feature Request Trends
- **Background task unification**: Phase C (event monitoring, PR #3684) and combined dialog (#3720) are the strongest signals — users want agents that can run long-lived monitors and manage shells alongside subagents.
- **Hot-reload everything (#3696)**: The most requested developer experience improvement — skills, extensions, MCP servers, and config changes without restarting the session.
- **Extended /rewind (#3697)**: Multiple issues (#3644, #3058) ask for file-level rollback alongside conversation rollback. The team is actively designing this.
- **Rich terminal rendering (#3680)**: Mermaid diagrams and math rendering in the CLI surfaced as a strong theme from markdown-heavy model responses.
- **Batch session management (#3706)**: Users want multi-select delete and batch operations in the session picker.

## Developer Pain Points
1. **DeepSeek API compatibility (#3579, #3679, #3715)**: Three separate issues report 400 errors with DeepSeek thinking mode — `reasoning_content` field handling and context window misconfiguration are the main culprits. The community is vocal about provider-agnostic support.
2. **Long-session memory pressure (#3164, #3652)**: Heap OOM crashes and provider token limits plague users who maintain long conversations. PR #3698 (auto-compression before sends) is a direct response.
3. **Sub-agent model isolation (#3400)**: TypeScript SDK ignores sub-agent model configurations — agents use the main conversation's model instead of the user-specified model.
4. **Image/vision support gaps (#3595, #3674)**: Self-hosted model users (llama.cpp, local Qwen) cannot use image inputs with Qwen Code, even when the underlying model supports vision.
5. **MCP CLI configuration friction (#3718, #1278)**: New `qwen mcp add/remove` commands cannot handle headers or proper removal. The underlying request for CLI-based MCP config (dating to December 2025) is now merged but still buggy.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*