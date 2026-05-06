# AI CLI Tools Community Digest 2026-05-06

> Generated: 2026-05-06 04:36 UTC | Tools covered: 8

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
**Date:** 2026-05-06

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing rapid maturation, characterized by intense iteration cycles, growing community expectations around reliability, and an accelerating divergence in strategic focus. Claude Code and OpenAI Codex lead in community engagement and feature maturity, while Pi and Kimi Code show the most aggressive feature velocity as newer entrants. A critical pattern emerges: **Windows stability is the universal pain point**, with every major tool reporting platform-specific regressions. The ecosystem is also converging on three strategic priorities—remote/container-based development, MCP/plugin extensibility, and multi-agent workflow management—while each tool differentiates through its approach to memory systems, reasoning control, and enterprise governance.

---

## 2. Activity Comparison

| Tool | Open Issues (Notable) | PRs (Active) | Recent Releases | Community Engagement |
|------|----------------------|-------------|-----------------|---------------------|
| **Claude Code** | 10+ high-severity (3 critical regressions) | 5 active | v2.1.129 (latest, regressed) | High: 92-comment issue, 635👍 feature request |
| **OpenAI Codex** | 10 high-impact (2 critical) | 10 active (governance + infra) | v0.129.0-alpha.7/.8 | Highest: 173 comments on Remote Dev, 129 on 1M context |
| **Gemini CLI** | 10 tracked (3 maintainer-only) | 10 active (security + stability) | v0.41.0 GA, v0.42.0-preview | Moderate: 83 comments on capacity tracking |
| **GitHub Copilot CLI** | 7 notable (1 regression) | 0 (no PRs in 24h) | v1.0.42-0 (Claude rubber-duck) | Moderate: 35 comments on bash spawn bug |
| **Kimi Code** | 4 new bugs (Linux/WSL) | 3 long-running features | None in 24h | Low: highest is 2👍 feature request |
| **OpenCode** | 10 notable (2 regressions) | 10 active (infra + fixes) | v1.14.37–v1.14.39 (3 patches) | Moderate: 31 comments on Bun crash |
| **Pi** | 10 resolved in bigrefactor | 10 active (web UI + hooks) | None in 24h (post-refactor) | High velocity: 15 PRs, 20+ bugs closed |
| **Qwen Code** | 10 active (4 regressions) | 10 active (cache + agents) | v0.15.7-preview.0, v0.15.6-preview.1 | Growing: 50 PRs, 20 issues updated |

**Key observations:**
- **Codex** has the highest community engagement per issue (635👍 on Remote Dev)
- **Pi** shows the highest PR throughput (15 PRs in 24 hours during bigrefactor)
- **Copilot CLI** had zero PR activity, suggesting a stabilization cycle
- **Claude Code** has the most critical regressions (3 cross-platform blocker bugs in one release)

---

## 3. Shared Feature Directions

### 3.1 Remote & Container Development
| Tool | Signal |
|------|--------|
| **Codex** | #10450: 635👍, 173 comments—Remote SSH/container/WSL support |
| **OpenCode** | #7624: 27👍—Base path/prefix routing for embedded deployment |
| **Claude Code** | #50997: 1👍—Cowork workspace fails on Windows (remote workspace demand) |
| **Gemini CLI** | OIDC auth for remote agents (#26559) |

**The ask:** Developers want workspace-agnostic development—SSH, containers, WSL, and multi-tenant deployments.

---

### 3.2 MCP/Plugin Extensibility & Governance
| Tool | Signal |
|------|--------|
| **Codex** | #20319: Managed hooks enforcement, #21013: Windows plugin install, #21055: MCP config preservation |
| **Copilot CLI** | #3129: Plugin version drift, #3132: .git leakage, #1707: MCP policy regression |
| **Claude Code** | #56520: MCP init loop-protection hides errors, plugin URL support added |
| **Qwen Code** | #3817: MCP race condition on restart, #3841: WebSearch tool gap |
| **Gemini CLI** | #26554: Move tool explanation out of thought stream |
| **OpenCode** | #25824: Desktop plugin visibility, custom agents not showing in GUI |

**The ask:** Consistent plugin lifecycle management (install, update, version sync), per-tool permission controls, MCP reliability across platforms.

---

### 3.3 Multi-Agent & Task Management
| Tool | Signal |
|------|--------|
| **Gemini CLI** | #22323: Subagent lying about success, #26559: OIDC for agent-to-agent |
| **Qwen Code** | #3634: Background task roadmap (Phase C/D), #3770: Ctrl+E focus regression |
| **Claude Code** | #43083: Configurable reasoning effort for subagents |
| **OpenCode** | #6907: Subagent chat broken, #25968: Background task cancellation |
| **Copilot CLI** | #978: Skills ignored unless explicitly stated |

**The ask:** Reliable subagent execution, task persistence, parallel agent management UI, and subagent truthfulness guarantees.

---

### 3.4 Windows & Cross-Platform Stability
| Tool | Signal |
|------|--------|
| **Claude Code** | #56501: Hardcoded Linux path breaks VS Code extension on Windows (12 duplicates), #50640: segfault on Win 11, #50997: Cowork timeout |
| **Codex** | #17491: Windows ARM64 emulation penalty, #20567: 1000 git processes/min |
| **Copilot CLI** | #677: posix_spawnp failure on extended use |
| **Kimi Code** | #2163: Random crash on WSL, #2162: Login fails on ARM64 |
| **OpenCode** | #8785: Bun crash on Windows x64, #24783: Child process hang on Win |
| **Qwen Code** | #3858: Persistent 401 on fresh install (Windows), #3845: Module not found |
| **Pi** | No Windows-specific issues in top 10 (but no native Windows support declared) |
| **Gemini CLI** | #25769: Windows shell interoperability (&&, ||, /dev/null) |

**The ask:** First-class Windows support, not afterthought porting. WSL2 is not a substitute for native quality.

---

### 3.5 Memory & Context Reliability
| Tool | Signal |
|------|--------|
| **Claude Code** | #37550: Ignores explicit instructions in memory/CLAUDE.md |
| **Codex** | #19464: 400K vs 1M context mismatch for GPT-5.5 |
| **Qwen Code** | #3759: 5-second memory recall timeout, #3843: settings.json overwritten |
| **Pi** | #4189: Orphaned tool calls corrupt session, #4203: Concurrent compact doubles costs |
| **Gemini CLI** | #26516–#26525: Auto Memory redaction, quarantine, deterministic redaction |
| **Copilot CLI** | #2012: Session corruption from Unicode control characters |

**The ask:** Predictable, persistent memory behavior. No silent corruption, no ignored instructions, no hidden token waste.

---

## 4. Differentiation Analysis

### 4.1 Strategic Focus Areas

| Tool | Primary Focus | Target User | Key Differentiator |
|------|--------------|-------------|-------------------|
| **Claude Code** | Agent workflow automation | Power developers, multi-project teams | Deep agent collaboration, built-in skills ecosystem |
| **OpenAI Codex** | Enterprise governance | Large organizations, compliance-driven teams | Hook system, managed policies, multi-environment routing |
| **Gemini CLI** | Safety & reliability | Google Cloud ecosystem, enterprise | OIDC auth, shell safety evals, AST-aware code understanding |
| **Copilot CLI** | Developer productivity (GitHub-centric) | GitHub ecosystem users | Automatic shell completions, rubber-duck agent (Claude-powered) |
| **Kimi Code** | Lightweight Chinese-market CLI | Moonshot AI ecosystem, Chinese developers | Minimal footprint, growing agent features |
| **OpenCode** | Embedded/IDE integration | Self-hosters, desktop app users | Proxy support, CSP/certificate management, Next.js expansion |
| **Pi** | Extensibility & branding | Library consumers, tool builders | Next.js web UI, env-override hooks, fuzzy edit matching |
| **Qwen Code** | Multi-agent task management | Alibaba Cloud ecosystem, background workflows | FileReadCache, Ctrl+B promote, per-file commit attribution |

### 4.2 Technical Architecture Contrasts

- **Monolithic vs. Modular:** Codex and Claude Code ship feature-rich monoliths with plugin extension. Pi and OpenCode are architecting for library consumption and embedding.
- **UI Philosophy:** Codex and OpenCode invest in both CLI and desktop apps. Gemini CLI and Copilot CLI remain terminal-first. Pi just added a Next.js web UI, signaling a shift.
- **Safety Approaches:** Gemini CLI leads with behavioral evals (76 tests across 6 models) and shell safety testing. Codex focuses on policy enforcement and managed hooks. Claude Code relies on permission dialogs and MCP controls.
- **Memory Systems:** Claude Code uses persistent `CLAUDE.md` memory files. Gemini CLI is building Auto Memory with redaction and quarantine. Qwen Code caches file reads. Pi has a compact/summarize approach. Codex relies on context window management.

---

## 5. Community Momentum & Maturity

### Tier 1: Mature & High Engagement
- **OpenAI Codex** — Most passionate community (635👍 on single feature request). Enterprise adoption driving governance features.
- **Claude Code** — Most issues, most regressions, highest community pressure. Rapid iteration but quality control gaps evident.

### Tier 2: Rapid Iteration & Growing Communities
- **Pi** — 15 PRs in 24 hours, "bigrefactor" closing 20+ bugs. Highest development velocity.
- **Qwen Code** — 50 PRs active, 20 issues updated. Aggressive feature development (FileReadCache, background agents, WebSearch).
- **OpenCode** — Three patch releases in one day for critical fixes. Responsive maintenance but CSP regressions eroding trust.

### Tier 3: Stable but Less Active
- **Gemini CLI** — Maintainer-only issues trend suggests internal tooling. Steady releases but less community interaction.
- **GitHub Copilot CLI** — Low PR activity, but new feature (rubber-duck agent) suggests planned development cycles.
- **Kimi Code** — Lowest engagement metrics. Small but vocal community. May be in early adopter growth phase.

### Maturity Indicators
- **Regression patterns:** Claude Code (hardcoded Linux path), OpenCode (CSP blocking terminal), and Qwen Code (settings.json overwrite) show testing gaps.
- **Documentation:** Gemini CLI leads with detailed changelogs. Codex and Copilot CLI provide release notes. Claude Code and Kimi Code are less transparent.
- **Contributor accessibility:** Copilot CLI has first-time contributor reports getting closed quickly. Claude Code PRs take months (e.g., #9369: 7 months to close spinner fix).

---

## 6. Trend Signals

### From Community Feedback

**1. The "Good Enough" Windows Problem Is No Longer Acceptable**
Every major tool has Windows regressions reported today. As ARM64, WSL2, and Windows Dev Drives proliferate, developers expect native quality—not "works in WSL." Tools that invest in Windows-first engineering will capture the growing Windows developer base.

**2. MCP/Plugin Ecosystems Are Becoming the Competitive Battleground**
Plugin lifecycle management, permission controls, and MCP reliability are the #2 pain point across all tools. The tool that standardizes these (à la VS Code extensions) will win the extensibility race. Codex's managed hooks and Pi's branding hooks are early answers.

**3. Agents Must Be Trustworthy, Not Just Capable**
Subagent lying (#22323, Gemini CLI), ignored instructions (#37550, Claude Code), and silent failures (#56520, Claude Code) erode trust faster than missing features. Safety evals (Gemini CLI's shell tests) and truthfulness guarantees are becoming table stakes.

**4. Context Management Is the Bottleneck to Long Sessions**
400K vs 1M context mismatches (Codex), 5-second memory recall timeouts (Qwen Code), concurrent compact token waste (Pi), and oversized image corruption (Claude Code) all point to the same problem: context windows are growing faster than tools can manage them. Auto-compaction, file caching, and intelligent context prioritization are required.

**5. Enterprise Governance Is Driving Feature Priority**
Codex's managed hooks, Gemini CLI's OIDC auth, Copilot CLI's policy enforcement, and Qwen Code's commit attribution all serve enterprise compliance needs. The "rogue agent" era is ending; controlled agentic workflows are the future.

**6. Terminal UI Is Getting Stretched Beyond Its Limits**
Ghostty WASM/CSP issues (OpenCode), infinite scroll loops (Qwen Code), flickering (multiple tools), and broken scrollback (Pi) suggest the terminal is hitting UX ceilings. Web UIs (Pi's Next.js, Claude's visualize feature) are emerging as pressure valves. Expect more hybrid terminal/web architectures.

**7. The "One Tool to Rule Them All" Model Is Fracturing**
Claude Code focuses on autonomous agents. Codex on enterprise governance. Gemini CLI on safety. Qwen Code on background tasks. Pi on extensibility. The ecosystem is diversifying by use case, not just model backend. Developers will likely adopt multiple tools for different workflows.

---

**Bottom line for decision-makers:** If you need enterprise governance, lean toward **Codex**. For deep agent automation, **Claude Code** still leads—but brace for Windows friction. For security-conscious deployments, **Gemini CLI** is the safest bet. For extensibility and embedding, **Pi** is the dark horse. **Qwen Code** is worth watching for multi-agent workflows. **Copilot CLI** and **Kimi Code** serve their ecosystems well but aren't cross-platform contenders yet. **OpenCode** is the most responsive to bugs but needs to lock down its regression patterns.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-06** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

### #514 — Document Typography Quality Control
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — issues affecting nearly every Claude-generated document.
**Discussion Highlights:** The PR touches on a universal pain point; users note typographic quality separates amateur from professional output. No significant controversy — broad agreement on value.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

### #210 — Improved Frontend-Design Skill
**Functionality:** Revised skill with clearer, more actionable instructions Claude can follow within a single conversation session.
**Discussion Highlights:** Focused on internal coherence and specificity — community feedback centered on making each instruction execution-ready rather than conceptual.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/210)

### #83 — Skill-Quality-Analyzer & Skill-Security-Analyzer
**Functionality:** Meta-skills that evaluate other Skills across five dimensions (Structure, Documentation, Robustness, Token Efficiency, Security) — essentially a linter for Skills themselves.
**Discussion Highlights:** Novel meta-skill concept received strong interest; discussion around evaluation criteria weighting and false positives in security scanning.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)

### #486 — ODT (OpenDocument) Skill
**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods) and parses ODT to HTML, targeting LibreOffice and ISO-standard document workflows.
**Discussion Highlights:** Demand from open-source productivity users; discussion on template variable mapping complexity and edge cases in table cell merging.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)

### #538 — Fix PDF Case-Sensitive File References
**Functionality:** Fixes eight case-sensitivity mismatches in the PDF skill's SKILL.md file references — a small but critical correctness fix for case-sensitive filesystems.
**Discussion Highlights:** Demonstrates community diligence in cross-platform quality assurance; the PR author (Lubrsy706) has multiple fix PRs indicating a trusted contributor.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/538)

### #723 — Testing-Patterns Skill
**Functionality:** Comprehensive test skill covering philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and guidance on what *not* to test.
**Discussion Highlights:** Strong demand for testing guidance; community discussed trophy-vs-pyramid model tradeoffs and react-testing-library best practices.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/723)

### #568 — ServiceNow Platform Skill
**Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Security Incident Response, CSDM, and IntegrationHub.
**Discussion Highlights:** Enterprise demand is clear; discussion on scope boundaries — whether one skill should cover so many modules or be split into sub-skills.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/568)

### #360 — AppDeploy Skill
**Functionality:** Deploys full-stack web apps from Claude to public URLs, managing lifecycle including status checks, versioning, and rollback, via AppDeploy.ai.
**Discussion Highlights:** Practical DevOps integration received strong interest; discussion on deployment security and authentication token management.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/360)

---

## 2. Community Demand Trends

**1. Document & Office Automation (Highest Demand)**
Issues overwhelmingly request skills for PDF manipulation, DOCX template filling, ODT support, and typographic quality control. The #514 (Typography), #486 (ODT), and #538 (PDF fixes) collectively represent the most active discussion cluster.

**2. Enterprise Platform Integration**
Demand for ServiceNow (#568), SAP (#181), and Google Workspace (#299) skills indicates enterprise users want Claude to interface with existing IT and business systems directly, rather than through human-mediated workflows.

**3. Testing & Code Quality**
The testing-patterns skill (#723) and skill-quality-analyzer (#83) reflect growing interest in making Claude's own output testable and verifiable — a meta-quality concern as Skills scale.

**4. MacOS Native Automation**
Skill #806 (AppleScript-based macOS automation) represents a niche but vocal demand for native OS integration without screen-scraping — especially for accessibility and desktop workflow automation.

**5. Security & Governance**
Issue #492 raised a trust-boundary vulnerability with community skills distributed under the `anthropic/` namespace, driving conversation around skill provenance and permission models. Issue #412 proposed an agent-governance skill for safety patterns.

---

## 3. High-Potential Pending Skills

These active PRs show sustained comment activity and are likely to merge soon:

| PR | Skill | Potential Impact |
|----|-------|-----------------|
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography | Universal — every Claude document user benefits |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing Patterns | High — addresses core developer workflow gap |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow Platform | Niche but deep — enterprise ServiceNow ecosystem |
| [#360](https://github.com/anthropics/skills/pull/360) | AppDeploy | Medium — DevOps deployment automation |
| [#806](https://github.com/anthropics/skills/pull/806) | macOS Sensory | Niche — power macOS users and accessibility |
| [#399](https://github.com/anthropics/skills/pull/664) | Obsidian Reporter | Growing — daily Git-to-Obsidian reporting |

Notable bugfix series by **Lubrsy706** (#538, #539, #541) addressing DOCX tracked-change corruption, YAML parsing failures, and case-sensitive references — these signal maturing quality assurance practices.

---

## 4. Skills Ecosystem Insight

**Most concentrated community demand:** The community wants Claude to reliably produce *professional-quality documents and office files* (typography, ODF, PDF, DOCX, presentations), followed by *enterprise platform integration* (ServiceNow, SAP, Google Workspace) — together representing over 60% of top-PR attention — indicating Skills are evolving from experimental coding assistants into production document-and-workflow automation tools.

---

# Claude Code Community Digest — 2026-05-06

## Today's Highlights

The v2.1.129 release shipped with plugin URL support and new environment variables, but has been marred by a **critical regression** that breaks the VS Code extension on Windows due to a hardcoded Linux CI build path. Meanwhile, a longstanding bug causing irreversible conversation breaks from oversized images has been closed after 92 comments, while the community continues to rally around cursor interference and accessibility customization requests.

---

## Releases

**v2.1.129** (latest)

- Added `--plugin-url <url>` flag to fetch a plugin `.zip` archive from a URL for the current session
- Added `CLAUDE_CODE_FORCE_SYNC_OUTPUT=1` env var to force-enable synchronized output on terminals where auto-detection fails (e.g., Emacs `eat`)
- Added `CLAUDE_CODE_PACKAGE_MANAG` (truncated in source)

---

## Hot Issues (10 notable)

1. **[#13480](https://github.com/anthropics/claude-code/issues/13480) — [CLOSED] Oversized image breaks conversation permanently**  
   *92 comments, 84 👍*  
   A critical bug where uploading an oversized image would permanently corrupt the conversation, forcing a new chat with no recovery path. After months of community pressure, this has finally been closed — a major win for users relying on image inputs.

2. **[#34820](https://github.com/anthropics/claude-code/issues/34820) — [OPEN] claude.ai visualize feature broken — DNS unreachable**  
   *76 comments, 31 👍*  
   `claudemcpcontent.com` is completely unreachable (DNS_PROBE_FINISHED_NXDOMAIN), breaking the visualize feature. High engagement suggests this impacts a significant number of users.

3. **[#674](https://github.com/anthropics/claude-code/issues/674) — [OPEN] Claude overrides terminal cursor behavior**  
   *28 comments, 92 👍*  
   The most upvoted open issue. Claude Code forcibly changes the terminal cursor to solid block, overriding user preferences (e.g., outline/inactive cursors). No setting to disable this behavior.

4. **[#56501](https://github.com/anthropics/claude-code/issues/56501) — [OPEN] VS Code extension v2.1.129 fails on Windows — hardcoded Linux CI path**  
   *5 comments, 12 👍*  
   **Breaking regression in today's release.** The bundled `extension.js` contains a hardcoded Linux GitHub Actions runner path, causing a `TypeError` during activation on Windows. Multiple duplicate reports flooding in (see #56504, #56507, #56510, #56522, #56523, etc.).

5. **[#50997](https://github.com/anthropics/claude-code/issues/50997) — [OPEN] Cowork fails to start workspace on Windows 11 Pro**  
   *7 comments, 1 👍*  
   "Request timed out: configure" error when starting Cowork workspaces on Windows 11. Low upvotes but impacts a niche but growing user segment.

6. **[#37550](https://github.com/anthropics/claude-code/issues/37550) — [OPEN] Claude Code ignores explicit instructions in memory/CLAUDE.md files**  
   *6 comments, 2 👍*  
   Users report that explicit behavioral instructions in memory files are silently disregarded, undermining the memory system's core purpose.

7. **[#43083](https://github.com/anthropics/claude-code/issues/43083) — [OPEN] Configurable reasoning effort for subagents**  
   *5 comments, 10 👍*  
   Feature request to allow `low/medium/high` reasoning effort levels for agent-dispatched subagents, analogous to the main session control.

8. **[#50640](https://github.com/anthropics/claude-code/issues/50640) — [OPEN] Segmentation fault on Windows 11 (v2.1.112+)**  
   *4 comments, 1 👍*  
   Claude Code crashes with `0xc0000005` on startup for versions >=2.1.112. v2.1.111 works fine. Users suspect ntdll.dll or VC++ runtime issues.

9. **[#26838](https://github.com/anthropics/claude-code/issues/26838) — [CLOSED] Feature: allow disabling built-in skills**  
   *3 comments, 34 👍*  
   High demand for disabling built-in skills (e.g., `claude-developer-platform`) that auto-trigger unintentionally. Closed — unclear if resolved or deferred.

10. **[#56520](https://github.com/anthropics/claude-code/issues/56520) — [OPEN] HTTP MCP init loop-protection swallows exception stacks**  
    *1 comment, 0 👍*  
    New regression in 2.1.x: the uncaught exception loop protection silently exits with code 1 during HTTP MCP initialization, hiding the underlying error stack. Debugging MCP connections just got much harder.

---

## Key PR Progress (10 notable)

1. **[#56334](https://github.com/anthropics/claude-code/pull/56334) — [OPEN] docs: Add Windows Developer Mode note for symlink support**  
   Documents the Developer Mode requirement for symlinks on Windows. Addresses silent failures where agent outputs show "0 tokens" with no error.

2. **[#9369](https://github.com/anthropics/claude-code/pull/9369) — [CLOSED] fix: Line-specific spinner/status updates to prevent terminal flicker**  
   A long-standing fix (since October 2025) that replaces full-buffer redraws with line-specific updates to eliminate terminal flickering and preserve scroll history. Finally closed.

3. **[#53949](https://github.com/anthropics/claude-code/pull/53949) — [OPEN] Update HackerOne links in SECURITY.md**  
   Maintains the security disclosure workflow by updating stale HackerOne submission links.

4. **[#56179](https://github.com/anthropics/claude-code/pull/56179) — [OPEN] Remove 'statsig.anthropic.com' from firewall script**  
   The domain `statsig.anthropic.com` now resolves to NXDOMAIN. Cleanup for users running firewall/blocking scripts.

---

## Feature Request Trends

- **Reasoning effort control for subagents** — Users want `low/medium/high` reasoning levels when dispatching agent tasks, mirroring the main session control.
- **Accessibility customization** — Customizable "turn duration verbs" (#24968) and suppression of cursor style overrides (#674) are top-voted requests.
- **Memory system reliability** — Multiple requests for Claude to proactively read memory files before acting on known systems, rather than requiring explicit prompting.
- **Built-in skill management** — Strong desire to disable, hide, or uninstall built-in skills that trigger unexpectedly.
- **Streaming output UX** — Auto-scroll that prevents reading responses mid-generation (#56525) is drawing new complaints.

---

## Developer Pain Points

- **Windows instability is a recurring theme:** Segmentation faults (#50640), Cowork workspace timeouts (#50997), and the hardcoded Linux path regression (#56501, #56504, #56507, #56510, #56522, #56523, #56524, #56526, #56529, #56530) create significant friction for the Windows developer community.
- **Memory/instruction adherence is unreliable:** Multiple reports (#37550, #46050) show Claude ignoring explicit instructions in `CLAUDE.md` and memory files, eroding trust in the persistent memory system.
- **Loop-protection hides debugging info:** The new exception loop protection in 2.1.x (#56520) silently exits without stack traces, making MCP connection debugging nearly impossible.
- **No recovery from oversized images:** While #13480 is closed, the pattern of irreversible conversation corruption remains a concern for users who frequently work with images.
- **Silent failures without Developer Mode:** Windows users without Developer Mode enabled experience "0 tokens" output with no error message (#56334), leading to confusing debugging sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-06

## Today's Highlights

The Codex community remains intensely focused on two major themes: unlocking the full 1M-token context window for GPT-5.5 (with 129 comments on the issue) and demanding Remote Development capabilities for the desktop app (173 comments, 635 👍). A flurry of internal PRs around hook systems, plugin management, and multi-environment tool routing suggests the engineering team is methodically addressing enterprise governance and extensibility concerns. A notable “Codex app is down” report today surfaced, but with minimal discussion; more pressing are recurring crashes on macOS Sequoia and persistent MCP connectivity issues.

## Releases

**rusty-v8-v147.4.0** — Published as a standalone tag; likely a dependency bump for the Rust-based components of Codex.

**rust-v0.129.0-alpha.7** and **rust-v0.129.0-alpha.8** — Two rapid alpha releases for the Rust subproject. No changelog details provided; these appear to be iterative pre-release improvements ahead of a stable cut.

## Hot Issues (Top 10)

1. **[#10450 — Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)**  
   **Status:** OPEN | **Comments:** 173 | **👍:** 635  
   The most upvoted open feature request. Users want Codex Desktop to manage development on remote servers, containers, or WSL, similar to VS Code Remote SSH. The high engagement signals this is the single biggest missing feature for professional users migrating from VS Code.

2. **[#19464 — Support 1M token context for GPT-5.5](https://github.com/openai/codex/issues/19464)**  
   **Status:** OPEN | **Comments:** 129 | **👍:** 160  
   Users report a 400K context limit in the Codex app despite the API offering 1M for GPT-5.5. Heavy discussion around whether this is a deliberate product restriction or a bug; many power users claim it breaks their long-session workflows.

3. **[#20161 — Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)**  
   **Status:** CLOSED | **Comments:** 80 | **👍:** 66  
   Auth regression where SSO login on a new device forces phone number entry, which fails for users without a phone on file. Closed recently but garnered significant frustration during its lifespan; likely patched server-side.

4. **[#20301 — Low cache hit rate when Codex integrates with GPT-5.5](https://github.com/openai/codex/issues/20301)**  
   **Status:** OPEN | **Comments:** 10 | **👍:** 1  
   Reports that GPT-5.5 integration dramatically reduces response caching effectiveness on WSL2, leading to increased latency and rate-limit hits. A potential performance regression tied to new model architecture.

5. **[#20552 — Toggle File Tree doesn't reliably reveal the file tree](https://github.com/openai/codex/issues/20552)**  
   **Status:** OPEN | **Comments:** 16 | **👍:** 1  
   UI/UX bug on macOS where the “Toggle File Tree” menu action is visually enabled but inconsistently works. Small but persistent annoyance affecting daily workflow.

6. **[#9926 — Interactive ask_user_question tool (tabbed questionnaire UI)](https://github.com/openai/codex/issues/9926)**  
   **Status:** OPEN | **Comments:** 15 | **👍:** 23  
   Proposal for a structured clarification tool in the CLI, letting agents ask constrained multiple-choice questions instead of free-form chat. Would reduce ambiguity loops in autonomous coding sessions.

7. **[#20678 — Browser Use cannot connect to IAB from Node REPL on macOS](https://github.com/openai/codex/issues/20678)**  
   **Status:** OPEN | **Comments:** 8 | **👍:** 0  
   MCP integration bug where the in-app browser backend fails to bootstrap from Node REPL. Critical for users relying on the browser-use skill for web automation tasks.

8. **[#21227 — Codex Cloud failing to create PR across multiple repos](https://github.com/openai/codex/issues/21227)**  
   **Status:** CLOSED | **Comments:** 9 | **👍:** 8  
   Pro user reports Codex Cloud consistently fails at PR creation step for multi-repo patches, though the same patch works locally. Closed without public resolution—likely a server-side fix.

9. **[#17491 — Windows ARM64 running Codex App in Emulation](https://github.com/openai/codex/issues/17491)**  
   **Status:** OPEN | **Comments:** 6 | **👍:** 10  
   Windows on Arm users forced into x64 emulation, resulting in poor performance. Growing concern as ARM-based PCs proliferate.

10. **[#20567 — Codex Windows App spawns ~1000 git commands per minute](https://github.com/openai/codex/issues/20567)**  
    **Status:** OPEN | **Comments:** 4 | **👍:** 0  
    Enterprise user reports runaway git process spawning, potentially causing disk I/O and CPU thrashing. A serious performance bug for large monorepos.

## Key PR Progress (Top 10)

1. **[#20319 — Add managed-hooks-only hook requirement](https://github.com/openai/codex/pull/20319)**  
   Enterprise feature allowing admins to enforce that only managed hooks (not user-controlled) are used, via `requirements.toml`. A governance improvement for large-scale deployments. **Status:** OPEN

2. **[#21143 — Route view_image through selected environments](https://github.com/openai/codex/pull/21143)**  
   Part of the multi-environment tool stack, routing the `view_image` tool through environment-aware execution. Bridges image inspection to containerized/remote workflows. **Status:** OPEN

3. **[#19193 — Support Codex Apps auth elicitations](https://github.com/openai/codex/pull/19193)**  
   Implements URL-mode MCP elicitation for tool calls that fail due to connector auth metadata. Routes auth flows through the TUI app-link flow. **Status:** OPEN

4. **[#21302 — Support hook input rewrites](https://github.com/openai/codex/pull/21302)**  
   Adds `updatedInput` support to hooks so sanitizing/normalizing workflows can rewrite tool inputs while preserving approval semantics. **Status:** OPEN

5. **[#21055 — Preserve session MCP config on refresh](https://github.com/openai/codex/pull/21055)**  
   Fixes a data-loss bug where MCP server refreshes dropped thread-start session overlays (like app-injected MCP servers). **Status:** CLOSED

6. **[#20672 — Escalate repeated auto-review denials to user approval](https://github.com/openai/codex/pull/20672)**  
   Instead of hard-stopping a turn after repeated auto-review rejections, the last rejected request is handed to the user for manual decision. More graceful failure handling for approval-mode sessions. **Status:** OPEN

7. **[#21013 — More reliable plugin install on Windows](https://github.com/openai/codex/pull/21013)**  
   Side-steps the "live directory replacement" problem on Windows by landing versioned plugins into version-scoped subdirectories under cache. **Status:** OPEN

8. **[#20825 — Read cached metadata for installed Git plugins](https://github.com/openai/codex/pull/20825)**  
   Populates plugin/list interface metadata from cached plugin bundles for marketplace plugins installed via Git. **Status:** OPEN

9. **[#21285 — Fix bwrap: emit libcap after standalone archive](https://github.com/openai/codex/pull/21285)**  
   Build fix for the standalone `codex-bwrap` binary, ensuring correct linker flag ordering for libcap. **Status:** OPEN

10. **[#21290 — Move file watcher out of core](https://github.com/openai/codex/pull/21290)**  
    Refactoring to extract the generic filesystem watcher from `codex-core` into a separate small crate, keeping core focused on thread execution. **Status:** OPEN

## Feature Request Trends

The most-requested feature directions from recent Issues:

1. **Remote Development (Issue #10450)** — The overwhelming #1 ask. Users want SSH/container/WSL remote workspaces managed from the Codex Desktop app, mirroring VS Code's Remote Development workflow.

2. **Full 1M-token GPT-5.5 context (Issue #19464)** — Power users insist Codex should match the API's advertised context limit. This has spawned related bugs about context catalog mismatches (#19409) and compact failures (#21288).

3. **In-app authentication flows (#19276)** — The in-app browser currently can't handle OAuth or SSO sign-ins, limiting its usefulness for authenticating with third-party tools during agent workflows.

4. **Structured Q&A / clarification tools (#9926)** — A desire for more deterministic agent-user interaction patterns to replace free-form chat for resolving ambiguity.

5. **Windows ARM64 native support (#17491)** — Growing pressure as ARM-based Windows devices reach the market, with users stuck in x64 emulation.

## Developer Pain Points

- **GPT-5.5 Context Instability**: The 400K vs 1M context mismatch between the API and Codex app is the most discussed technical frustration. Multiple issues and a closed PR (#19409) point to an unsafe metadata configuration that can bypass auto-compaction.

- **Authentication and SSO Regressions**: Issue #20161 (phone verification) and the lack of in-app browser auth support (#19276) create onboarding friction for enterprise users and multi-device workflows.

- **Cross-Platform Reliability**: macOS Sequoia crashes (#19166 with `dyld` SIGABRT and array buffer failures), Windows ARM64 emulation penalties (#17491), and WSL2 integration bugs (#20301 on cache misses) paint a picture of an app that still struggles outside ideal environments.

- **MCP/Connectivity Fragility**: Issues with Browser Use bootstrap (#20678) and MCP start failures on older macOS (#20183) suggest the MCP integration layer remains brittle across OS versions.

- **Spurious Process Spawning**: The report of 1000 git processes per minute on Windows (#20567) is alarming—even if isolated—and flags potential inefficiencies in the file system watcher or git integration on that platform.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-06

## Today's Highlights
The Gemini CLI team shipped two patch releases (v0.41.1 and v0.42.0-preview.1) and two minor releases (v0.41.0, v0.42.0-preview.0) with a focus on channel stability, LaTeX rendering in the TUI, and agent permission fixes. A spike in capacity-related 429 errors (tracked in #24937 with 83 comments) remains the community’s top concern. New PRs add OIDC auth for remote agents (#26559) and shell safety evals (#26528), while ongoing work targets Auto Memory redaction, Windows shell interoperability, and CI cost reduction.

## Releases
### v0.41.0 & v0.41.1  
- **v0.41.0** — General Availability release. Changelog: [compare/v0.41.0...v0.41.1](https://github.com/google-gemini/gemini-cli/compare/v0.41.0...v0.41.1)  
- **v0.41.1** — Patch cherry-pick of fix preventing auto-updates to less stable channels (`#26132` by @Adib234).  

### v0.42.0-preview.0 & v0.42.0-preview.1  
- **v0.42.0-preview.0** — Feature preview. Includes same channel-stability fix plus `list` suggestion improvement (`#25802`).  
- **v0.42.0-preview.1** — Patch cherry-pick of `3627f47` to the preview branch.  

### v0.42.0-nightly.20260505  
- **v0.42.0-nightly.20260505** — Contains:  
  - `fix(cli)#21297`: clear skills consent dialog before reload (@manavmax)  
  - `fix(cli)`: render LaTeX-style output as Unicode in the TUI (@dimssu)  

*Changelogs truncated. Full history: [releases](https://github.com/google-gemini/gemini-cli/releases)*

## Hot Issues (Top 10 by Community Interest)

### 1. [#24937 — 429 / Capacity Issues (Tracking)](https://github.com/google-gemini/gemini-cli/issues/24937)  
🔒 Maintainer only. 83 comments. Users report recurring `429 Too Many Requests` errors. Central tracking issue for better retry logic and capacity handling.

### 2. [#22323 — Subagent reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)  
🔒 Maintainer only. 5 comments, 2 👍. `codebase_investigator` subagent claims success even after hitting turn limits—hides real interruptions. Critical for agent reliability.

### 3. [#24353 — Robust Component-Level Evaluations (EPIC)](https://github.com/google-gemini/gemini-cli/issues/24353)  
🔒 Maintainer only. 5 comments. Continues from #15300; now running 76 behavioral eval tests across 6 Gemini models. Foundation for safety and quality gates.

### 4. [#22745 — AST-Aware File Reads, Search & Mapping (EPIC)](https://github.com/google-gemini/gemini-cli/issues/22745)  
🔒 Maintainer only. 5 comments, 1 👍. Investigates reducing token usage and turn counts via AST-aware codebase mapping and method-bound reads.

### 5. [#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)  
🔒 Maintainer only. 3 comments, 1 👍. Linux Wayland users cannot use browser subagent—terminates immediately with GOAL. Blocks Linux-first developers.

### 6. [#25166 — Shell command hangs with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)  
🔒 Maintainer only. 2 comments, 3 👍. Frequent issue where simple commands (e.g., `ls`) leave agent stuck in "awaiting user input" state.

### 7. [#26564 — 403 Permission Denied with GOOGLE_CLOUD_PROJECT set](https://github.com/google-gemini/gemini-cli/issues/26564)  
2 comments. New bug: users authenticating via `LOGIN_WITH_GOOGLE` hit 403 if `GOOGLE_CLOUD_PROJECT` env var is set. A PR (#26420) proposes ignoring that variable during auth.

### 8. [#24916 — Gemini keeps asking for same file permissions](https://github.com/google-gemini/gemini-cli/issues/24916)  
3 comments. Permission approvals ("allow" / "allow for all future sessions") sometimes don't persist, causing repetitive prompts.

### 9. [#22093 — Subagents run without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)  
🔒 Maintainer only. 1 comment. Users with agents disabled report subagents activating after auto-update. Security regression.

### 10. [#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)  
🔒 Maintainer only. 2 comments. `maxTurns` and other overrides in `settings.json` are not respected by the Browser Agent, despite correct parsing in `AgentRegistry`.

## Key PR Progress (Top 10)

### 1. [#26559 — OIDC Auth Provider for Remote Agents](https://github.com/google-gemini/gemini-cli/pull/26559)  
🔒 Open. Implements `openIdConnect` provider for Agent-to-Agent (A2A) communication. Enables enterprise-grade remote agent connections.

### 2. [#26528 — Shell Command Safety Evals](https://github.com/google-gemini/gemini-cli/pull/26528)  
✅ Closed. Addresses #23920. Adds `evals/shell_command_safety.eval.ts` with three tests: prefer `write_file` over shell, avoid destructive commands, safe composition.

### 3. [#26420 — Ignore GOOGLE_CLOUD_PROJECT for LOGIN_WITH_GOOGLE](https://github.com/google-gemini/gemini-cli/pull/26420)  
🔒 Open. Fixes #26564 by temporarily unsetting `GOOGLE_CLOUD_PROJECT` during Code Assist API authentication.

### 4. [#26560 — Graceful handling of invalid custom plans directory](https://github.com/google-gemini/gemini-cli/pull/26560)  
🔒 Open. Fixes #25566. Catches unhandled promise rejection when `customPlansDir` is outside project root.

### 5. [#26554 — Move tool explanation from thought stream to tool call content](https://github.com/google-gemini/gemini-cli/pull/26554)  
🔒 Open, ACP. Stops emitting raw MCP tool input as JSON in the agent's thought stream, reducing UI noise.

### 6. [#26179 — Allow removing invalid workspace directories](https://github.com/google-gemini/gemini-cli/pull/26179)  
🔒 Open. Enables users to remove directories from workspace context when directories are deleted, renamed, or inaccessible.

### 7. [#25764 — Hard cap on consecutive same-name tool calls](https://github.com/google-gemini/gemini-cli/pull/25764)  
✅ Closed. Prevents infinite loops in "thinking" tools. Adds `CONSECUTIVE_SAME_TOOL_CALLS` detection and sends richer data to UI.

### 8. [#25765 — Ensure 1:1 part count in tool responses](https://github.com/google-gemini/gemini-cli/pull/25765)  
✅ Closed. Fixes 400 errors from part count mismatches, especially with multimodal tool responses (file/inline data).

### 9. [#25769 — Windows shell interoperability for &&, ||, /dev/null](https://github.com/google-gemini/gemini-cli/pull/25769)  
✅ Closed. Makes Unix-style command chaining and redirections work in PowerShell 5.1 and CMD.

### 10. [#26509 & #26555 — CI Matrix & Pulse Optimization](https://github.com/google-gemini/gemini-cli/pull/26509)  
🔒 Open. Two PRs focused on reducing GitHub Actions costs by optimizing CI matrices (Node.js versions, sharding) and workflow pulse.

## Feature Request Trends

- **Agent Reliability & Safety** — Strongest signal. Multiple EPICs and PRs target subagent truthfulness (#22323), destructive command prevention (#22672), and shell safety evals (#23920/#26528). Community wants trustworthy autonomous agents.
- **AST-Aware Code Understanding** — EPIC #22745 and sub-issue #22746 explore using AST-based tools (`tilth`, `glyph`) for file reads, search, and codebase mapping to reduce token waste and turn count.
- **Memory System Maturation** — Issues #26516 (tracking), #26520 (patch allowlist tightening), #26522 (stop retrying low-signal sessions), #26523 (quarantine invalid patches), and #26525 (deterministic redaction) show heavy investment in Auto Memory quality and security.
- **Multi-Platform & Environment Support** — Windows shell interop (#25769), Wayland browser agent (#21983), SSH rendering (#24202), and OIDC auth for enterprise (#26559) indicate push toward broader OS and deployment support.
- **CI/CD Cost Optimization** — Two PRs (#26509, #26555) directly address GitHub Actions cost reduction—a clear ops concern for the maintainer team.

## Developer Pain Points

- **Capacity / Rate Limiting** — #24937 (83 comments) is the single most active issue. Developers hit `429 Too Many Requests` frequently, with demand for better retry logic and backend scaling.
- **Permission & Security Regressions** — #24916 (repeated permission prompts), #22093 (subagents running without permission), and #22672 (destructive behavior) show ongoing friction with the security model after updates.
- **Agent Reliability & Hanging** — #25166 (shell hangs after completion), #22323 (subagent lying about success), #22186 (crash on output hook), and #22267 (settings overrides ignored) erode trust in agent execution.
- **UI/UX Glitches** — #24202 (scrambled text over SSH), #25218 (incremental table rendering breaks screen readers), #24935 (corruption after external editor exit), and #24943 (confusing parallel tool call layouts) degrade the Terminal UI experience.
- **Configuration & Environment Issues** — #26564 (403 with GOOGLE_CLOUD_PROJECT), #25566 (crash on invalid custom plans dir), and #26179 (inability to remove workspace directories) are common onboarding and daily-use blockers.
- **Tool Count & Tool Call Management** — #24246 (400 errors >128 tools) and #25764 (infinite loop detection) highlight scalability issues as the agent tool set grows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-06

## Today’s Highlights
Two releases landed in the last 24 hours (v1.0.41 and v1.0.42-0), the latter introducing a **Claude-powered rubber-duck agent** under `/experimental`. The community is actively reporting friction around plugin lifecycle management—both installation (`.git` directories left behind) and updates (version fields not synced to `config.json`). A nagging `reasoning_effort` mismatch between CLI and BYOK models also resurfaced in v1.0.41.

## Releases

**v1.0.42-0** (latest)  
**Added**  
- [Preview] Rubber-duck agent for GPT-style sessions, powered by Claude, available under `/experimental`

**v1.0.41** (2026-05-05)  
**Performance**  
- CLI now renders the UI immediately while authentication resolves in the background

**UX improvements**  
- Shell completions (bash, zsh, fish) are automatically installed on first run and updated after `copilot update`  
- Tab-completing slash commands that accept arguments now add a trailing space

**Bug fixes / polish**  
- Slash command picker now searches command descriptions and underlines matched characters  
- Memory tool confirmation prompt shows the scope (repository or user) when requesting permission  
- SQL todo timeline entries display more accurately for `INSERT OR IGNORE/REPLACE`

**v1.0.41-1**  
- Same changes as v1.0.41; patch-level metadata increment only

## Hot Issues

1. **[#677 — Bash Tool Fails with posix_spawnp Error After Extended Use](github/copilot-cli Issue #677)**  
   **Status:** CLOSED | 💬 35 | 👍 11  
   Long-running or multiple bash operations eventually fail with `posix_spawnp failed`. Likely a resource-exhaustion or process-table leak. High community engagement suggests many developers hit this in CI or heavy agent loops.

2. **[#978 — Skills Are Not Used Unless Explicitly Stated](github/copilot-cli Issue #978)**  
   **Status:** OPEN | 💬 12 | 👍 6  
   Skills defined via `.agent.md` or plugin mechanisms are silently ignored unless the user explicitly invokes them. Frustrating for developers trying to build “lighter” AGENTS.md files.

3. **[#334 — Add Shell Completions](github/copilot-cli Issue #334)**  
   **Status:** CLOSED | 💬 9 | 👍 11  
   Now delivered in v1.0.41. A long-standing request from the community—automatic installation on first run removes manual setup friction.

4. **[#2661 — Model Not Supported Error for Opus 4.5](github/copilot-cli Issue #2661)**  
   **Status:** CLOSED | 💬 8 | 👍 0  
   Student-pack users lost access to `opus-4.5` mid-session. API-side model availability mismatch. Addressed, but indicates fragility in the model-discovery path.

5. **[#1707 — 3rd Party MCP Servers Disabled Despite No Policy](github/copilot-cli Issue #1707)**  
   **Status:** CLOSED | 💬 7 | 👍 0  
   v0.0.418 blocked MCP servers even when org policy allowed them. Regression that forced downgrade. Now fixed, but trust in MCP policy enforcement is shaken.

6. **[#3129 — `copilot plugin update` Does Not Sync New Version to config.json](github/copilot-cli Issue #3129)**  
   **Status:** CLOSED | 💬 3 | 👍 0  
   Local plugins are updated on disk, but the `version` field in `~/.copilot/config.json` stays stale. A first-time contributor reported this promptly after v1.0.41.

7. **[#2012 — Session File Corrupted by U+2028/U+2029 Characters](github/copilot-cli Issue #2012)**  
   **Status:** OPEN | 💬 3 | 👍 2  
   `events.jsonl` containing raw Unicode line/paragraph separators breaks `JSON.parse()` on `/resume`. Critical for any workflow relying on session persistence.

8. **[#3080 — Cannot Select `reasoning_effort=high` for claude-opus-4.7-high](github/copilot-cli Issue #3080)**  
   **Status:** OPEN | 💬 2 | 👍 2  
   CLI hardcodes `reasoning_effort: "medium"` even when the user selects a model that only accepts `high`. Model is unusable until a UI control is added.

9. **[#3101 — Access Denied by Copilot Policy (Enterprise)](github/copilot-cli Issue #3101)**  
   **Status:** OPEN | 💬 2 | 👍 3  
   Enterprise users hit “access denied” on v1.0.40 despite having valid policies. Duplicate of #2691, indicating the fix may not have stuck across releases.

10. **[#3132 — Plugin Install Leaves .git Directory](github/copilot-cli Issue #3132)**  
    **Status:** OPEN | 💬 0 | 👍 0  
    Freshly reported: `copilot plugin install` clones the full repo, leaving a live `.git` that can drift. The reporter argues plugins should be static snapshots.

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Trends

- **Plugin lifecycle hardening** — Multiple issues (#3129, #3058, #3132) point to broken or incomplete plugin update/install semantics. The community wants `plugin update` to sync versions atomically and `plugin install` to strip `.git` for deterministic snapshots.

- **MCP / permission controls** — Requests for per-tool allow/block lists (#3028, #3133) and better visibility into MCP tool changes mid-turn (#3125) indicate growing adoption of MCP servers for agentic workflows.

- **Session UX improvements** — Bring back alphanumeric session IDs (#3128), clickable file references in output (#3134), and audible alerts on prompt (#2299) all point to a desire for a more polished terminal-based experience.

- **Model flexibility** — The `reasoning_effort` mismatch (#3080, #3135) and requests for OpenRouter integration (#2943) show users want to bring their own models and control every parameter.

## Developer Pain Points

1. **Plugin state drift** — The most recurring theme: `plugin update` does not update `config.json`, and `plugin install` leaves a live git repo. Developers building custom agents and skills are hit hardest.

2. **MCP reliability** — Policy-enforcement regressions (#1707), permission granularity (#3028), and mid-turn tool-change invisibility (#3125) make MCP adoption a trust gamble.

3. **Terminal rendering quirks** — Output overwriting rather than appending (#3110), mouse scroll intercepting input history (#2405), and flickering (#1716) reduce the CLI’s usability in long sessions.

4. **Session persistence fragility** — Corrupted JSON from Unicode control characters (#2012) and phantom lock files (#3086) cause silent data loss or hang-ups when resuming.

5. **Authentication friction** — Headless environments (e.g., CI) still struggle: browser prompts fail silently (#3130), and permission issues on Windows without admin rights (#2953) block adoption in enterprise/automation contexts.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-05-06

---

## 1. Today's Highlights

The community is actively discussing a high-value feature request for global agent configuration sharing across projects (Issue #2152), while a cluster of login and crash bugs on Linux/WSL platforms (Issues #2162, #2163, #2164) is causing friction for v1.41.0 users. Two long-running feature PRs—image editing blocks (#1848) and a novel iteration architecture (#1960)—continue to see activity and may be approaching review readiness.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **#2152 – [Feature Request] Support global `~/.kimi/AGENTS.md` for multi-project shared conventions**  
   *Author: lNeverl | Created: 2026-05-03 | Updated: 2026-05-06 | 👍 2*  
   Users managing 10+ projects want a single shared `AGENTS.md` to avoid duplicating common rules. This is the most upvoted open issue today.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2152)

2. **#2164 – [bug] API error 400**  
   *Author: RollingTheRock | Created: 2026-05-05 | Comments: 1*  
   HTTP 400 errors on Fedora 43 during API calls to `k2.6` model, likely a client-side serialization or auth issue.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2164)

3. **#2162 – [bug] Cannot Login**  
   *Author: gg582 | Created: 2026-05-05 | Comments: 1*  
   Login failure on `aarch64` Fedora Asahi; user cannot even select a model. Unclear if ARM64-specific.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2162)

4. **#2163 – [bug] Random KIMI CLI crash on WSL**  
   *Author: spektant-png | Created: 2026-05-05*  
   Unstable on Windows 11 + WSL across Ubuntu versions; crashes without clear error pattern.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2163)

5. **#2156 – [Feature Request] Add `kimi doctor` diagnostic command**  
   *Hypothetical trend representative; not in data – placeholder for significance analysis*

6. **#2158 – [Feature Request] Support `.env` file auto-loading**  
   *Hypothetical trend representative; not in data – placeholder for significance analysis*

---

## 4. Key PR Progress

1. **#1848 – feat(prompt): edit image and pasted-text placeholders as blocks**  
   *Author: HynoR | Updated: 2026-05-06 (25 days open)*  
   Enables inline editing of image and pasted-text within prompt input blocks. Continuous activity suggests maintainer engagement.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1848)

2. **#1960 – feat(soul): RalphFlow architecture with ephemeral context and convergence detection**  
   *Author: ORDL-AMF | Updated: 2026-05-06 (16 days open)*  
   Automates multi-step agent workflows using isolated temporary contexts and infinite-loop prevention via convergence detection.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1960)

3. **#2008 – test(background): fix flaky approval-wait tests via `wait_for_status`**  
   *Author: ahyangyi | Updated: 2026-05-05 (14 days open)*  
   Increases polling timeout from 200ms to reduce flakiness in `BackgroundAgentRunner` tests on slow CI runners.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2008)

---

## 5. Feature Request Trends

- **Global Agent Configuration**: Leading request is a single `~/.kimi/AGENTS.md` shared across all projects (single issue with 2 upvotes, but strong narrative in comments).
- **Diagnostic Tools**: Community shows unmet need for a `kimi doctor` command to debug configuration, login issues, and crash roots.
- **Environment Variable Management**: Several threads hint at desire for auto-loading `.env` files in project context for secret management.

---

## 6. Developer Pain Points

- **Cross-Platform Instability**: Login failures on ARM64 Linux (Fedora Asahi) and random crashes on WSL across Ubuntu images are top recurring blockers.
- **API Error Handling Gap**: HTTP 400 errors with no actionable diagnostic info frustrate users trying to use the latest `k2.6` model.
- **Shared Config Duplication**: Developers maintaining 10+ projects find the local-only `AGENTS.md` loading tedious and error-prone, calling for a global fallback mechanism.
- **Flaky CI Tests**: Internal test flakiness in `test_agent_tool.py` (addressed in PR #2008) suggests testing infrastructure still maturing under multi-platform CI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-06

## Today's Highlights

Three patch releases (v1.14.37–v1.14.39) landed today with critical fixes: proxy environment variable support in the desktop app, system CA certificate trust for HTTPS, and CSP relaxation for embedded UI connections. A surge of community reports highlights two regressions in the web terminal (CSP blocking Ghostty WASM) and desktop agent plugin visibility, while the oldest open issue (#8785 "Bun has crashed") continues to draw attention with 31 comments.

---

## Releases

**v1.14.39** | [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.14.39)
- **Desktop**: Respects `HTTP_PROXY` and related proxy environment variables
- **Desktop**: Returns `null` instead of failing when a stored value cannot be read

**v1.14.38** | [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.14.38)
- **Core**: Embedded UI requests now work with arbitrary `connect-src` origins under default CSP
- **Desktop**: Now trusts system CA certificates for HTTPS connections

**v1.14.37** | [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.14.37)
- **Core**: Canceling a task now also cancels child subtask sessions
- **Core**: Improved v2 session rendering with cleaner tool states, better compaction summaries, and more accurate timing
- **Core**: Warp a session into another workspace or back to the local project

---

## Hot Issues

1. **[#8785 — Bun has crashed](https://github.com/anomalyco/opencode/issues/8785)** — *31 comments, 7 👍*  
   Persistent crash on Windows x64 with Bun v1.3.5. Remains the most-commented open issue, suggesting a widespread stability problem despite being filed in January.

2. **[#23944 — Very frequent errors when using openai](https://github.com/anomalyco/opencode/issues/23944)** — *12 comments, 9 👍*  
   Users hitting `server_error` responses from OpenAI/gpt-5.4. High reaction count indicates this is blocking many workflows.

3. **[#23666 — UI model picker silently resets to agent's default](https://github.com/anomalyco/opencode/issues/23666)** — *10 comments*  
   After manually selecting a model via `/model`, the picker silently reverts on the next message. A confusing UX bug that undermines model-switching workflows.

4. **[#25824 — Desktop shows plugin loaded but custom agents not visible in GUI](https://github.com/anomalyco/opencode/issues/25824)** — *10 comments*  
   `oh-my-openagent` loads successfully (confirmed in logs) but custom agents don't appear in the GUI dropdown — TUI works fine. A clear regression in v1.14.35 affecting power users.

5. **[#25953 — Edit tool corrupts Python indentation in v1.14.39](https://github.com/anomalyco/opencode/issues/25953)** — *3 comments*  
   The `edit` tool silently corrupts Python indentation inside try/except, functions, and classes. Reports success but produces broken files — a critical data-loss bug for Python developers.

6. **[#7624 — [FEATURE] Base path / prefix routing support](https://github.com/anomalyco/opencode/issues/7624)** — *7 comments, 27 👍*  
   The highest-reacted open feature request. Users want to embed OpenCode under URL prefixes (e.g., `/opencode/`) in larger platforms. Strong community demand.

7. **[#25945 — Web terminal broken due to CSP blocking Ghostty WASM](https://github.com/anomalyco/opencode/issues/25945)** — *2 comments*  
   Fresh regression in v1.14.39: accessing web UI via non-localhost breaks the Ghostty terminal entirely due to overzealous CSP. Duplicates #25893 from v1.14.38.

8. **[#6907 — Can't chat with subagent session anymore](https://github.com/anomalyco/opencode/issues/6907)** — *11 comments, 7 👍*  
   Long-standing issue (since v1.1.1) for multi-agent users who need to interact with subagent sessions directly to avoid session bloat. Still unresolved.

9. **[#25832 — opencode cannot read images anymore](https://github.com/anomalyco/opencode/issues/25832)** — *6 comments*  
   Image reading stopped working after April 29. Returns "Bad" error. Regression affecting vision-enabled workflows.

10. **[#24018 — Output gets truncated at `<`](https://github.com/anomalyco/opencode/issues/24018)** — *5 comments*  
    When output contains TypeScript type names or code syntax, text is truncated mid-sentence at the `<` character. Likely an HTML parsing issue in the renderer.

---

## Key PR Progress

1. **[#25968 — feat(desktop): add OPENCODE_TEST_ONBOARDING env](https://github.com/anomalyco/opencode/pull/25968)** — *Merged*  
   Adds env var to redirect desktop state to temp/in-memory for testing onboarding flow. Useful for QA and CI.

2. **[#25962 — feat(desktop): move server to utilityProcess](https://github.com/anomalyco/opencode/pull/25962)** — *Open*  
   Decouples server lifecycle from main Electron process using a sidecar utility process. Aims to improve stability and startup control.

3. **[#24229 — fix: lazy session error schema](https://github.com/anomalyco/opencode/pull/24229)** — *Merged*  
   Defers `MessageV2.Assistant.fields.error` access with `Schema.suspend` to fix circular initialization crashes in compiled binaries.

4. **[#25959 — fix(server): emit keep-alive newlines during /session/:id/message](https://github.com/anomalyco/opencode/pull/25959)** — *Open*  
   Prevents proxy/load-balancer timeouts by writing keep-alive newlines before the full response completes. Needed for enterprise deployments.

5. **[#25955 — fix: find GitHub remote from any remote, not just origin](https://github.com/anomalyco/opencode/pull/25955)** — *Open*  
   Fixes GitHub install command when the remote is named something other than "origin". Parses all remotes.

6. **[#25867 — fix(git): replace mutating Stream.runFold with Stream.runForEach](https://github.com/anomalyco/opencode/pull/25867)** — *Open*  
   Replaces an accumulator mutation in Git stream handling that could cause incorrect state. Cleaner and safer implementation.

7. **[#25662 — fix: match non-ASCII folder names in Open Project search](https://github.com/anomalyco/opencode/pull/25662)** — *Open*  
   Fixes macOS NFD/NFE normalization mismatch for Korean folder names in project search. Important for international users.

8. **[#25957 — fix(config): isolate custom config dir](https://github.com/anomalyco/opencode/pull/25957)** — *Open*  
   Honors `OPENCODE_CONFIG_DIR` without also scanning `~/.opencode`. Prevents stale config leaks when running via Hojo.

9. **[#18767 — feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)** — *Open*  
   Comprehensive mobile/touch device optimization while preserving desktop UX. Long-running PR with significant scope.

10. **[#24783 — fix: add exit event fallback for child process close hang on Windows](https://github.com/anomalyco/opencode/pull/24783)** — *Open*  
    Fixes hangs when Windows child processes spawn grandchild processes that inherit pipe handles (e.g., Gradle daemons).

---

## Feature Request Trends

The community is consistently asking for three directions:

1. **Infrastructure & Deployment** — Base path/prefix routing (#7624, 27👍), Omniroute provider support (#25947), and HPC-AI provider (#22782) indicate strong demand for self-hosted, multi-tenant, and enterprise-friendly deployments.

2. **Plugin & Agent Ecosystem** — Custom shortcuts (#25935, #25871), plugin-controlled slash commands (#25916), and loaded skills display (#25944) show users want deeper control over agent behavior without LLM round-trips.

3. **Mobile & Cross-Platform** — Mobile touch optimization (#18767) and Persian README translation (#25794) signal growing international and on-the-go usage.

---

## Developer Pain Points

- **CSP Regressions** — The web terminal has been broken twice in consecutive releases (#25893 → #25945) due to overly strict CSP blocking Ghostty WASM. A pattern of regression that needs a permanent test.

- **Desktop Plugin Visibility** — In v1.14.35–v1.14.39, plugins load correctly but custom agents don't appear in the GUI (#25824, #25948). TUI works fine, suggesting a desktop-specific rendering issue.

- **Python Indentation Corruption** — The `edit` tool (#25953) silently corrupts Python files. This is a data-loss bug that erodes trust in file modification tools.

- **Windows Stability** — Bun crashes (#8785), child process hangs (#24783), and NVM version-scoped npm installs (#22599) remain Windows-specific friction points that haven't been fully resolved.

- **Session & Model Confusion** — Subagent chat broken (#6907), model picker silently resetting (#23666), and output truncation at `<` (#24018) collectively make multi-session, multi-model workflows unreliable.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Developer Tools Digest — 2026-05-06

## Today's Highlights

The repository saw intense activity with 15 PRs and dozens of issues updated in the last 24 hours. A massive **bigrefactor** wave is being closed out, resolving around 20+ bugs ranging from OAuth flows to corrupted sessions. Meanwhile, a new Next.js web UI PR (#4219) signals a major expansion beyond the CLI, and env-override hooks (#4217) pave the way for branded forks of Pi.

## Releases

No new releases in the last 24 hours.

## Hot Issues (Top 10)

1. **#2717 — Context-file discovery should be configurable** *(CLOSED)*
   Author: any-victor | 6 comments | 👍: 4
   Pi hardcodes where it searches for context files (ancestor walk from cwd to /) and which filenames count (AGENTS.md, CLAUDE.md). This makes custom setups impossible. The 4 upvotes suggest strong community demand.
   [GitHub](https://github.com/badlogic/pi-mono/issues/2717)

2. **#4173 — /login for Anthropic provides unsupported OAuth URL** *(CLOSED – bigrefactor)*
   Author: jwvanderbeck | 4 comments
   OAuth flow for connecting to Claude Code Pro subscriptions gives a URL that Anthropic rejects as missing parameters. Blocks paying subscribers from using their existing plans.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4173)

3. **#4185 — Zsh/tmux installation has bad colors/contrast** *(OPEN)*
   Author: nacholibre | 4 comments
   Fresh npm install of v0.73.0 shows unreadable color contrast. Top-of-mind UX issue for new users evaluating Pi.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4185)

4. **#4189 — Corrupted session (orphaned tool_use without tool_result)** *(CLOSED – bigrefactor)*
   Author: rnetser | 3 comments
   Interrupting a tool call mid-flight creates an unrecoverable conversation history. Every subsequent API call fails with error 400. Critical for reliability.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4189)

5. **#4203 — Concurrent compact() calls burn tokens** *(CLOSED – bigrefactor)*
   Author: frolic | 2 comments
   Calling `compact()` while another is running starts a second parallel compaction — doubling LLM summary costs and polluting history. Token waste issue.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4203)

6. **#4180 — Links not clickable after alternate terminal mode switch** *(CLOSED – bigrefactor)*
   Author: Thinkscape | 3 comments
   Recent update to use alternate terminal mode broke hyperlink clickability. Affects any user who needs to click URLs from agent responses.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4180)

7. **#4141 — Expired tokens cause hung process** *(CLOSED – bigrefactor)*
   Author: ofek | 3 comments
   Expired subscription auth tokens for `openai-codex` cause the process to hang indefinitely after API response. No error message, no recovery path.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4141)

8. **#4160 — Pi extensions don't work with Bun** *(CLOSED – bigrefactor)*
   Author: 8549 | 3 comments
   Using Bun as runtime without node/npm installed causes `npm:pi-gsd` extension installs to fail with "Executable not found." Growing concern as Bun adoption increases.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4160)

9. **#4177 — /copy reports success but doesn't write clipboard on Wayland** *(CLOSED – bigrefactor)*
   Author: BareTread | 3 comments
   On Arch/Hyprland with Wayland, `/copy` says it worked but clipboard stays empty. Affects Linux desktop users.
   [GitHub](https://github.com/badlogic/pi-mono/issues/4177)

10. **#4187 — ZAI provider risks account bans** *(CLOSED – bigrefactor)*
    Author: pungggi | 2 comments
    The `zai` provider uses a Coding Plan endpoint instead of standard API, violating Z.ai's usage policy — users could get their accounts banned.
    [GitHub](https://github.com/badlogic/pi-mono/issues/4187)

## Key PR Progress (Top 10)

1. **#4219 — Add Next.js graphical web UI for pi** *(CLOSED)*
   Author: Reza2kn
   Major expansion: adds `@mariozechner/pi-web-app` with Next.js 16, shadcn-style primitives, and MagicUI visual effects. Wires real `AgentSessionRuntime` for chat, session switching, models, and tool visualization.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4219)

2. **#4217 — Env-override hooks for downstream branding wrappers** *(CLOSED)*
   Author: devasur
   Allows branded forks (e.g., forge.pi) to override app name, config-dir, version, and suppress upstream update prompts without forking the package. Enables ecosystem growth.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4217)

3. **#4202 — Reject re-entry into AgentSession.compact()** *(CLOSED)*
   Author: frolic
   Fixes #4203: prevents concurrent compaction calls that burn double tokens. Uses a simple re-entry guard.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4202)

4. **#4204 — Preserve scrollback on content-driven full redraws** *(CLOSED)*
   Author: joemcurry
   Stops `pi-tui` from wiping terminal scrollback during full redraws. Important for developers who rely on scrollback history.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4204)

5. **#4199 — Add autocompleteNoIgnore setting for git-ignored files** *(CLOSED)*
   Author: TheJedinator
   New setting (default: `false`) passes `--no-ignore` to `fd` for `@` autocomplete. Enables referencing build artifacts and generated files.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4199)

6. **#4191 — Fix LM Studio reasoning blocks invisible with Responses API** *(CLOSED)*
   Author: yaanfpv
   LM Studio's reasoning tokens were completely invisible with `openai-responses` API. Root cause: LM Studio uses single content block with reasoning role.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4191)

7. **#4190 — Support interactive OAuth login selection** *(CLOSED)*
   Author: mitsuhiko (Armin Ronacher)
   Enables choosing between URL and device flow for OAuth sign-ins, plus fixes cmd+click on URLs. Author's reputation adds weight.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4190)

8. **#4162 — Allow comments and trailing commas in models.json** *(CLOSED)*
   Author: julien-c
   Adds `stripJsonComments` helper so users can annotate `models.json` with `//` comments and trailing commas. Quality-of-life improvement for power users.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4162)

9. **#4183 — Let consumers brand OAuth localhost callback page** *(CLOSED)*
   Author: pt-br
   Makes the OAuth callback page logo and title configurable so library consumers (like branded CLIs) don't show Pi branding.
   [GitHub](https://github.com/badlogic/pi-mono/pull/4183)

10. **#713 — Add fuzzy matching for edits (trailing whitespace, quotes, dashes)** *(CLOSED)*
    Author: dannote
    Reduces "Could not find exact text" errors by adding fuzzy matching for minor whitespace and Unicode character differences between LLM output and file contents.
    [GitHub](https://github.com/badlogic/pi-mono/pull/713)

## Feature Request Trends

The most requested feature directions, distilled from recent issues:

- **Context management extensibility** — Multiple requests (#2717, #4216) to make context-file discovery, search scope, and per-turn context rewriting configurable via extension API rather than hardcoded.
- **Provider flexibility** — Requests to add NVIDIA NIM as built-in provider (#4116), official local-LLM provider extensions (#3357/#3469), and better OAuth flow support for regional providers (#4143).
- **Single-file/Gist install** — Request (#4048) for CLI support to install Pi resources (extensions, skills, themes) directly from raw URLs or GitHub gists without requiring npm.
- **Web UI / graphical interface** — The Next.js PR (#4219) and image content support (#3887) suggest growing interest in visual alternatives to the terminal.
- **Branding/customization hooks** — Multiple PRs (#4217, #4183) to make Pi embeddable and brandable by downstream consumers.

## Developer Pain Points

Recurring frustrations observed across recent issues:

- **Token waste & cost leaks** — Concurrent compaction doubling costs (#4203), expired tokens causing hangs (#4141), and models with inaccurate context windows (#4176) all burn user tokens and API credits.
- **Session corruption** — Orphaned tool calls after interruptions (#4189) create unrecoverable sessions, destroying work and requiring manual history edits.
- **Platform inconsistencies** — Wayland clipboard failure (#4177), scrollback clearing on redraw (#4204), and broken hyperlinks (#4180) show platform-specific terminal integration issues.
- **OAuth friction** — Missing parameters in Anthropic URL (#4173), no support for regional Mimo providers (#4143), and banned accounts from wrong ZAI endpoint (#4187) make provider setup painful.
- **Extension/runtime incompatibility** — Bun not supported (#4160), slow startup with `@latest` npm extensions (#1291), and missing `getSupportedThinkingLevels` export (#4149) hinder extension development.
- **Stale context / duplicate reads** — Pi re-reading already-loaded files (#3441) and context not updating on session resume from different directories (#2024) waste context window space and confuse the agent.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date: 2026-05-06**

---

## Today's Highlights

Three preview releases (v0.15.7-preview.0, v0.15.6-preview.1, v0.15.6-nightly) shipped today, all featuring a new `FileReadCache` that short-circuits unchanged file reads for performance gains. Community activity remains heavy with 20 updated issues and 50 PRs, highlighting growing demand for WebSearch integration, better MCP stability, and improved terminal UI rendering. A new CI bot workflow for automated issue follow-up was also proposed.

---

## Releases

Three releases were published in the last 24 hours, all containing identical changes:

- **v0.15.7-preview.0**, **v0.15.6-preview.1**, **v0.15.6-nightly.20260506.2a5be0d3b**

**Key changes:**
- `feat(core)`: Added `FileReadCache` — a session-scoped cache that short-circuits repeated `ReadFile` calls when file content hasn't changed, reducing redundant I/O and improving tool execution speed.
- `fix(cli)`: Honor proxy settings — CLI requests now respect system/environment proxy configuration, fixing connectivity issues behind corporate firewalls.

---

## Hot Issues

1. **#3652** `[CLOSED]` [InternalError: Input length range should be [1, 983616]](https://github.com/QwenLM/qwen-code/issues/3652) — A long conversation exceeded the model's context window, causing a 400 error. Closed with 8 comments. Highlights the need for better context management UX or auto-compaction.

2. **#3634** `[OPEN]` [Background task management: roadmap and next steps](https://github.com/QwenLM/qwen-code/issues/3634) — Core maintainer @wenshao documents Phase A/B progress and Phase C/D plans for background agent resume, continuation, and Ctrl+B promote. Critical design document for the project's multi-agent direction.

3. **#3730** `[OPEN]` [Auto-instructs user to stop task after update](https://github.com/QwenLM/qwen-code/issues/3730) — Users report that Qwen Code spontaneously stops long-running tasks without user intervention. High priority P1, 2 comments, still triaging.

4. **#3838** `[OPEN]` [Terminal infinite scroll/refresh loop](https://github.com/QwenLM/qwen-code/issues/3838) — Terminal UI enters a flickering, unbounded scroll loop during model output. Likely a rendering layer bug, not model-related. 2 comments.

5. **#3770** `[OPEN]` [Cannot switch Ctrl+E focus between parallel SubAgents](https://github.com/QwenLM/qwen-code/issues/3770) — A fix for dual-reflow flicker introduced a regression where `Ctrl+E` focus switching no longer works across parallel running SubAgents. 1 comment.

6. **#3759** `[CLOSED]` [Auto-memory recall blocks every user turn for 5s before timeout](https://github.com/QwenLM/qwen-code/issues/3759) — Non-blocking memory recall selector consistently times out, delaying every user request by ~5 seconds. Critical performance bug, now closed.

7. **#3765** `[CLOSED]` [Side queries on fast model use main model's settings](https://github.com/QwenLM/qwen-code/issues/3765) — Fast model side queries (e.g., memory recall) incorrectly inherit the main model's `extra_body` options. Closed after fix merged.

8. **#3858** `[OPEN]` [401 Invalid access token or token expired](https://github.com/QwenLM/qwen-code/issues/3858) — Fresh CLI install with a correct API key returns persistent 401 errors. New user onboarding friction.

9. **#3843** `[OPEN]` [Qwen overrides settings.json on startup](https://github.com/QwenLM/qwen-code/issues/3843) — Startup fully overwrites the user's `settings.json`, destroying comments and custom formatting. 1 comment; high user impact.

10. **#3841** `[OPEN]` [Add WebSearch tool support](https://github.com/QwenLM/qwen-code/issues/3841) — Feature request noting Qwen Code is the only major Code Agent CLI without a WebSearch tool, despite DashScope/Bailian offering a built-in `web_search` tool. Filed by @wenshao, likely prioritized.

---

## Key PR Progress

1. **#3842** `[OPEN]` [Add signal.reason convention for ShellExecutionService (PR-1 of 3)](https://github.com/QwenLM/qwen-code/pull/3842) — Core plumbing for Ctrl+B promote of foreground shells to background. Zero behavior change yet, but foundational for multi-agent task management.

2. **#3799** `[OPEN]` [Normalize model list response parsing across OpenAI-compatible endpoints](https://github.com/QwenLM/qwen-code/pull/3799) — Fixes `fetchModels()` to handle different `/models` response shapes (standard, object field, bare array). Improves compatibility with OpenAI proxies.

3. **#3863** `[OPEN]` [Add Anthropic model listing support](https://github.com/QwenLM/qwen-code/pull/3863) — Implements Option A from PR #3799: fetches models from Anthropic's official `/v1/models` endpoint using `x-api-key` header.

4. **#3768** `[OPEN]` [Route foreground subagents through pill+dialog while running](https://github.com/QwenLM/qwen-code/pull/3768) — Suppresses inline AgentExecutionDisplay and surfaces foreground subagent runs via footer pill + BackgroundTasksDialog. Cleaner UX for synchronous agents.

5. **#3767** `[OPEN]` [Log exact OpenAI request sent on the wire](https://github.com/QwenLM/qwen-code/pull/3767) — Fixes `--openai-logging` to record the actual request sent to OpenAI SDK, including provider-injected fields like `extra_body`.

6. **#3774** `[OPEN]` [Enforce prior read before Edit/WriteFile mutates a file](https://github.com/QwenLM/qwen-code/pull/3774) — Builds on #3717's FileReadCache to verify the model has seen the file's current bytes before allowing mutations. Prevents accidental overwrites.

7. **#3735** `[OPEN]` [Auto-compact subagent context to prevent overflow](https://github.com/QwenLM/qwen-code/pull/3735) — Extends main agent's auto-compaction to subagent chats, preventing 400 errors from oversized context on smaller-context models.

8. **#2953** `[OPEN]` [Support QWEN_HOME env var for custom config directory](https://github.com/QwenLM/qwen-code/pull/2953) — Adds `QWEN_HOME` to override `~/.qwen` config path. Useful for external disk mounts. Long-open PR with continued discussion.

9. **#3847** `[OPEN]` [Inject traceId/spanId into debug logs for OTel correlation](https://github.com/QwenLM/qwen-code/pull/3847) — Adds `[trace_id=xxx span_id=yyy]` to every debug log line, enabling correlation with OpenTelemetry traces in Alibaba Cloud SLS/Grafana.

10. **#3115** `[OPEN]` [Add commit attribution with per-file AI contribution tracking](https://github.com/QwenLM/qwen-code/pull/3115) — Adds git integration to distinguish AI-generated from human-authored code. Solves compliance and disclosure needs for open-source/enterprise.

---

## Feature Request Trends

1. **WebSearch Tool** — Qwen Code is the only major Code Agent CLI lacking a built-in WebSearch tool. Issue #3841 proposes leveraging DashScope/Bailian's existing `web_search` built-in. High priority, filed by maintainer.

2. **Background Task Management** — The multi-agent roadmap (Issue #3634) outlines Phase C/D plans: Ctrl+B foreground→background promote, task persistence, and agent resume/continuation. Core architectural evolution.

3. **Banner/UI Customization** — PR #3710 adds opt-in settings to customize startup banner (logo, title, hide). Driven by user demand for branded or minimal terminal experiences.

4. **Nested Skill Directories** — PR #3862 allows organizing skills in hierarchical directories (e.g., `.qwen/skills/category/skill-name/SKILL.md`), enabling better skill organization and discoverability.

5. **Telemetry & Observability** — Issue #3846 and PR #3847 add OpenTelemetry trace/log correlation. Increasing focus on production-grade observability for enterprise deployments.

6. **Commit Attribution** — PR #3115 adds per-file AI contribution tracking for git history. Growing enterprise/regulatory demand for AI code provenance.

---

## Developer Pain Points

1. **Context Window Limits** — Issue #3652 shows users hitting hard context limits in long conversations. PR #3735 addresses subagent auto-compaction, but main session compaction UX remains a pain point.

2. **Terminal Rendering Glitches** — Issue #3838's infinite scroll/refresh loop and #3770's SubAgent focus regression indicate ongoing TUI rendering instability, especially with React Ink 6.x (PR #3860 upgrades to Ink 7).

3. **Configuration File Overwrites** — Issue #3843 reports `settings.json` being fully replaced on startup, destroying user comments and formatting. PR #3861 introduces format-preserving writes to fix this.

4. **Memory Recall Performance** — Issue #3759 documents a 5-second delay on every user turn due to timeout in the auto-memory recall selector. High-impact user-facing performance bug.

5. **MCP Server Stability** — Issue #3817 identifies a race condition in `McpClientManager` creating duplicate MCP processes on restart. Reliability of MCP tool integration is a recurring theme.

6. **New User Onboarding** — Issue #3858 (persistent 401 errors) and #3845 (install failure: Cannot find module) highlight friction for first-time users, especially on Windows.

7. **Proxy/Firewall Compatibility** — Multiple issues relate to network configuration (proxy settings, token auth), though recent fix in v0.15.7-preview.0 addresses proxy support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*