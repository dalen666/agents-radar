# AI CLI Tools Community Digest 2026-05-08

> Generated: 2026-05-08 04:19 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Comparison Report — 2026-05-08

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing a maturation phase where foundational features (multi-model support, plugin architectures, session persistence) are now table stakes, and differentiation is moving toward reliability, cross-platform parity, and enterprise readiness. The major tools—Claude Code, OpenAI Codex, Gemini CLI, and GitHub Copilot CLI—continue to dominate mindshare, while smaller players like OpenCode, Pi, and Qwen Code are innovating rapidly in specific niches. All seven tools analyzed today shipped releases or significant PRs, indicating a high-velocity development cadence. However, recurring themes of **Windows instability**, **context window reliability**, and **plugin ecosystem maturity** suggest the industry is still working through growing pains.

## 2. Activity Comparison

| Tool | Open Issues (Hot) | Open PRs | Release Today | Notable Event |
|------|------------------|----------|---------------|----------------|
| **Claude Code** | 10 (top 10) | 3 | ✅ v2.1.133 | Worktree base-branch fix, multi-account feature dominates |
| **OpenAI Codex** | 10 (top 10) | 10 | ✅ rust-v0.129.0 | Vim mode in TUI, compaction failures at 220k tokens |
| **Gemini CLI** | 10 (top 10) | 10 | ✅ v0.42.0-nightly | Shell safety evals, memory tool regression |
| **Copilot CLI** | 10 (top 10) | 0 | ✅ 3 patches (v1.0.44-0/1/2) | Windows whitespace/piping regression |
| **Kimi Code** | 7 (hot) | 7 | ❌ None | Thinking trace visibility #1 request |
| **OpenCode** | 10 (top 10) | 10 | ✅ v1.14.41 | Formatter fix, Cursor CLI support #1 (168 👍) |
| **Pi** | 10 (top 10) | 10 | ✅ v0.74.0 | Repo migration, local LLM support #1 (23 👍) |
| **Qwen Code** | 10 (top 10) | 10 | ✅ v0.15.8 | Remote-control foundation, `qwen serve` daemon |

**Key observation**: Copilot CLI has zero PRs open despite shipping 3 patches—a concerning signal for maintenance velocity. The other major tools maintain a healthy 10-open-PR pipeline.

## 3. Shared Feature Directions

### Windows as a First-Class Platform
- **Claude Code** (#50559): Subprocess init timeout regression, segfaults
- **OpenAI Codex** (#13993, 93 👍): Standalone `.exe` installer demanded
- **Copilot CLI** (#3188): Pipe failures in v1.0.44, PowerShell path issues
- **Gemini CLI** (#25932): Force PowerShell 5.1 instead of pwsh.exe
- **Kimi Code** (#2178): Blank Windows binary metadata
- **OpenCode** (#26123): Plugin regression on Windows Desktop

### Multi-Account / Multi-Identity Management
- **Claude Code** (#27302, 221 👍, 169 comments): The #1 overall requested feature across all tools
- **OpenAI Codex**: Phone verification after SSO (#20161, 100 comments)
- **Copilot CLI**: No explicit request, but persistent auth issues suggest similar pain

### Plugin/MCP Ecosystem Maturity
- **Claude Code** (#14200, 68 👍): Plugins need ability to define rules
- **OpenAI Codex** (#21654): MCP servers deliver only subset of tools
- **Gemini CLI**: No strong plugin signals
- **Copilot CLI** (#3162): False policy blocks for custom MCP servers
- **Kimi Code** (#1715): Claude-compatible local plugin support (closed but significant)
- **OpenCode** (#26123): Plugin breakage on upgrade
- **Pi**: Extension-based architecture, tool override PR merged

### Local / Self-Hosted LLM Support
- **Pi** (#3357, 23 👍, 9 comments): Official local LLM provider extension (most-upvoted request)
- **Qwen Code** (#3881): Local Qwen3.6-27b produces infinite tokens—first-party model issues
- **Gemini CLI**: No strong signals
- **OpenCode**: Custom provider support exists but image passthrough broken (#20802)

### Sub-Agent / Agent Orchestration Visibility
- **Claude Code**: Agent isolation worktrees
- **Gemini CLI** (#22323): Subagent false success on MAX_TURNS
- **OpenAI Codex**: No explicit sub-agent feature
- **Qwen Code** (#3758, #2886): Sub-agent detail requests, parallel coordination

## 4. Differentiation Analysis

### Claude Code—The Enterprise Workhorse
- **Focus**: Git workflow integration (worktrees, base branches), plugin systems, Connector accounts
- **Target**: Professional developers in Git-centric organizations
- **Technical approach**: Deep VS Code integration, worktree-isolated agent sessions
- **Key differentiator**: Most mature git-aware orchestration; multi-account support #1 demand

### OpenAI Codex—The TUI Innovator
- **Focus**: Terminal UX (vim mode, resume/fork picker), sandbox environments, IDE integration
- **Target**: Power users who live in the terminal
- **Technical approach**: Rust-based core, SQLite state, extensive hook ecosystem
- **Key differentiator**: Best TUI polish but context reliability (220k vs 400k) erodes trust

### Gemini CLI—The System Integrator
- **Focus**: Agent safety, auto-routing, voice/audio interactions, skill-based workflows
- **Target**: ML/AI developers needing multi-model backends
- **Technical approach**: Aggressive auto-routing (Pro→Flash fallback), eval-driven safety
- **Key differentiator**: Uniquely focused on agent reliability and safety; weakest plugin ecosystem

### GitHub Copilot CLI—The Lightweight Orchestrator
- **Focus**: Simple automation, sub-agent ("rubber-duck"), BYOK, quota management
- **Target**: GitHub-centric developers needing quick script automation
- **Technical approach**: Minimalist CLI, GitHub ecosystem integration
- **Key differentiator**: Simpler than competitors but Windows breakage and zero PR activity are concerns

### OpenCode—The Universal Agent Bridge
- **Focus**: Multi-provider support, Cursor/Copilot compatibility, workspace warping
- **Target**: Developers switching between multiple AI coding tools
- **Technical approach**: Provider abstraction layer, opentui TUI, experimental v2 event system
- **Key differentiator**: Most aggressive multi-provider support (Databricks merged, Gemini 3 aligned); #1 request is Cursor CLI support

### Pi—The Local-First Perfectionist
- **Focus**: Terminal rendering quality, local LLMs, extension-based tools, image handling
- **Target**: Terminal purists and self-hosters
- **Technical approach**: Kitty terminal protocol, Pi TUI framework, rollback architecture
- **Key differentiator**: Strongest focus on local LLMs and terminal aesthetics; small but passionate community

### Qwen Code—The Server-Mode Pioneer
- **Focus**: Remote control, HTTP daemon, background tasks, sub-agent coordination
- **Target**: Power users needing headless/CI-CD agent execution
- **Technical approach**: Three-PR remote-control stack, `qwen serve` daemon, ACP protocol
- **Key differentiator**: Only tool building server-mode operation; weakest TUI and internationalization

## 5. Community Momentum & Maturity

| Tool | Community Size (Estimated) | Velocity | Stability Signal |
|------|---------------------------|----------|-----------------|
| **Claude Code** | Very large | High (daily releases) | Moderate—% Windows regression, auth loops |
| **OpenAI Codex** | Large | High (stable + alpha tracks) | Concerning—compaction failures, slow performance |
| **Gemini CLI** | Medium | Moderate (nightly track) | Improving—safety evals, auto-routing |
| **Copilot CLI** | Medium | Low (3 patches, 0 PRs) | Concerning—Windows regression, no engineering activity |
| **Kimi Code** | Small | High (7 PRs in 24h) | Growing—active bugfixing, thinking trace demand |
| **OpenCode** | Large | Very high (50 issues, 50 PRs) | Good—rapid provider alignment, Databricks merger |
| **Pi** | Small | High (repo migration, 10 PRs) | Good—bigrefactor indicates architectural maturity |
| **Qwen Code** | Medium | Very high (10 PRs, remote-control stack) | Improving—architecture evolving, TUI needs work |

**Momentum leaders**: **OpenCode** and **Qwen Code** show the highest raw activity with 50+ issues/PRs each. **Claude Code** maintains the largest community but faces stability challenges.

## 6. Trend Signals

### Security & Data Leakage Concerns (Rising)
- **Claude Code** (#56739): `find` sent personal files to 3rd-party API
- **Gemini CLI** (#26525): Auto Memory sends unredacted content before secret removal
- **OpenAI Codex** (#21601): Privacy-preserving code attribution (hash-only analytics)
- **Copilot CLI**: No explicit incidents but **0 PR activity on security** is notable

**Signal**: Developers are increasingly aware of data exfiltration risks. Expect stronger permission gating and redaction to become table stakes.

### Context Window Reliability Crisis (Critical)
- **OpenAI Codex** (#19386): GPT-5.5 fails at 220k vs 400k advertised
- **Claude Code**: No direct equivalent, but worktree isolation provides alternative
- **Pi** (#4290): Length-aborted turns show no indicator

**Signal**: The industry is hitting physical limits of context window advertising. **Compaction/reliability** will be a major differentiator in 2026.

### Terminal Rendering Fragmentation (Persistent)
- Multiple tools report Kitty keyboard protocol issues (Pi #4253, #3780)
- TUI scroll/refresh loops (Qwen Code #3838)
- Markdown rendering regression (OpenCode #21299)
- Terminal state corruption (OpenCode #26198)

**Signal**: As TUI becomes the primary interface, cross-terminal compatibility remains unsolved. Kitty keyboard protocol is a particular pain point.

### The Rise of "Agent Orchestration"
- **Qwen Code**: Parallel sub-agents (#2886), background tasks (#3634)
- **Gemini CLI**: Sub-agent routing, continuation auto-recovery (#26159)
- **Claude Code**: Agent-isolation worktrees
- **OpenAI Codex**: Multi-environment apply_patch (#21617)

**Signal**: The next frontier is **not bigger context windows but better multi-agent coordination**. Expect more tools to ship parallel agent architectures.

### Windows as a Second-Class Platform (Urgent)
- Every tool except Pi has at least one critical Windows issue
- **Copilot CLI**: Pipe failures break CI/CD entirely
- **Claude Code**: Subprocess timeout segfault on install
- **Gemini CLI**: Forced legacy PowerShell

**Signal**: The AI CLI ecosystem has a Windows gap that will become a competitive differentiator. The first tool to fix this will capture enterprise Windows shops.

---

*Report generated from community digest data as of 2026-05-08. For detailed per-tool analysis, refer to individual digests.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-05-08 | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skills have attracted the most community discussion and attention via pull requests:

### #1 — Document Typography Skill (`document-typography`)
- **PR:** [#514](https://github.com/anthropics/skills/pull/514) | **Status:** Open
- **Functionality:** Prevents common typographic problems in AI-generated documents: orphan word wrap (1–6 words spilling onto next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.
- **Discussion Highlights:** Widely recognized as addressing a universal pain point in Claude-generated content. Community interest centers on the breadth of edge cases covered and the potential for integration with document-focused skills like DOCX and PDF. Current status is open with ongoing refinement.
- **Significance:** The top-discussed PR overall, reflecting strong demand for output quality control.

### #2 — Skill Quality & Security Analyzers (`skill-quality-analyzer`, `skill-security-analyzer`)
- **PR:** [#83](https://github.com/anthropics/skills/pull/83) | **Status:** Open
- **Functionality:** Two meta-skills for the marketplace: quality analysis across five dimensions (structure, documentation, examples, resources) and security analysis for community skills.
- **Discussion Highlights:** The community is actively debating evaluation criteria granularity and whether security analysis should be mandatory before skill publication. This PR has been open since November 2025 with sustained commentary.
- **Significance:** Represents the community's desire for quality infrastructure around the Skills ecosystem itself.

### #3 — Frontend Design Skill Improvement (`frontend-design`)
- **PR:** [#210](https://github.com/anthropics/skills/pull/210) | **Status:** Open
- **Functionality:** Major revision to the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is executable within a single conversation.
- **Discussion Highlights:** Contributors are focused on specificity of guidance and behavioral steering without over-prescription. The PR exemplifies community-driven refinement of existing official skills.
- **Significance:** Demonstrates community investment in improving official skill quality through collaborative iteration.

### #4 — ODT Skill (`odt`)
- **PR:** [#486](https://github.com/anthropics/skills/pull/486) | **Status:** Open
- **Functionality:** OpenDocument text creation, template filling, and ODT-to-HTML conversion — covering `.odt`, `.ods`, and ISO-standard document formats.
- **Discussion Highlights:** Interest from LibreOffice ecosystem users. Conversations center on format coverage scope and integration with existing document skills. Active since March 2026.
- **Significance:** Fills a notable gap in document format support within the official collection.

### #5 — PDF Fix PRs (Case Sensitivity + DOCX Tracked Changes)
- **PRs:** [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) | **Status:** Open
- **Functionality:** #538 fixes 8 case-sensitivity mismatches in PDF skill file references (breaks on case-sensitive filesystems). #541 prevents document corruption from `w:id` collisions between tracked changes and existing bookmarks in DOCX files.
- **Discussion Highlights:** These fix PRs have generated sustained technical discussion around OOXML internals and cross-platform compatibility. The author (Lubrsy706) has multiple active fix PRs, indicating deep ecosystem expertise.
- **Significance:** Highlights community investment in robustness and cross-platform correctness of official skills.

### #6 — Testing Patterns Skill (`testing-patterns`)
- **PR:** [#723](https://github.com/anthropics/skills/pull/723) | **Status:** Open
- **Functionality:** Comprehensive testing skill covering: testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), integration testing, E2E testing, and test data management.
- **Discussion Highlights:** Active discussion on scope boundaries — whether to include specific framework guides or remain framework-agnostic. Community interest in practical edge case handling.
- **Significance:** Addresses a major gap: no official testing-patterns skill existed in the collection.

### #7 — CONTRIBUTING.md Addition
- **PR:** [#509](https://github.com/anthropics/skills/pull/509) | **Status:** Open
- **Functionality:** Adds a CONTRIBUTING.md to address the repository's 25% community health metrics score — covering contribution workflow, skill requirements, and review expectations.
- **Discussion Highlights:** Broad community support (closes Issue #452). Discussion focuses on clarity of contribution guidelines and lowering barriers for first-time skill authors.
- **Significance:** Infrastructure PR that directly impacts the health and growth of the entire community skill ecosystem.

---
## 2. Community Demand Trends

Analysis of the most-commented Issues reveals five clear demand clusters:

| Trend | Key Issue | Demand Signal |
|-------|-----------|---------------|
| **Skill Sharing & Org Management** | [#228](https://github.com/anthropics/skills/issues/228) — "Enable org-wide skill sharing" (9 comments, 7 👍) | Enterprise users迫切需要 org-level skill distribution without manual file sharing |
| **Ecosystem Quality Infrastructure** | [#202](https://github.com/anthropics/skills/issues/202) — "skill-creator should be updated to best practice" (8 comments) | Community wants the skill-creator itself to be a model of skill quality |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) — "run_eval.py: claude -p never triggers skills" (6 comments, 6 👍) | Core tooling defect preventing skill validation |
| **Duplicate Skills & Plugin Architecture** | [#189](https://github.com/anthropics/skills/issues/189) — "document-skills and example-skills install identical content" (6 comments, 8 👍) | Plugin deduplication is a top community concern |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — "Community skills under anthropic/ namespace enable trust abuse" (4 comments) | Growing awareness of supply-chain security for skills |

**Emerging directions from issues:** Agent governance patterns ([#412](https://github.com/anthropics/skills/issues/412)), MCP integration for skills ([#16](https://github.com/anthropics/skills/issues/16)), and Bedrock compatibility ([#29](https://github.com/anthropics/skills/issues/29)).

---
## 3. High-Potential Pending Skills

These PRs have active community discussion and appear close to landing:

1. **[#360 — AppDeploy Skill](https://github.com/anthropics/skills/pull/360)** (Updated May 4): Full-stack web app deployment from Claude via [AppDeploy](https://appdeploy.ai/). Mature discussion; covers app lifecycle management (deploy, status, versioning). **Likely to merge soon given sustained updates.**

2. **[#444 — AURELION Skill Suite](https://github.com/anthropics/skills/pull/444)** (Updated May 6): Four skills — kernel, advisor, agent, memory — forming a structured cognitive framework. Last updated this week, indicating active maintenance. **High momentum.**

3. **[#568 — ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)** (Updated April 23): Broad ServiceNow assistant covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, and IntegrationHub. Enterprise-focused. **Steady discussion trajectory.**

4. **[#723 — Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** (Updated April 21): Comprehensive testing skill (see Section 1). **Active boundary-scoping discussion.**

5. **[#806 — macOS Sensory Skill](https://github.com/anthropics/skills/pull/806)** (Updated April 2): Native macOS automation via AppleScript — two-tier permission system. **Novel capability with clear community interest.**

---
## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *quality infrastructure and governance* — meta-skills for skill evaluation, security analysis, and contribution standards — rather than any single domain-specific skill, signaling a mature ecosystem transitioning from quantity to quality.**

---

# Claude Code Community Digest — 2026-05-08

**Generated by:** Technical Analysis Bot  
**Data Source:** `github.com/anthropics/claude-code`

---

## 1. Today's Highlights

Claude Code shipped **v2.1.133** today with a notable change to worktree base-branch behavior, introducing a new `worktree.baseRef` setting that reverts `EnterWorktree` back to branching from `origin/<default>` by default. On the community side, the most-requested feature—**multi-account Connector support**—continues to dominate with 169 comments and 221 upvotes, showing no signs of cooling. Meanwhile, bug reports surfaced around Windows installation segfaults, stale `.git/index.lock` files in worktrees, and a security concern about tools sending personal files to third-party APIs without confirmation.

---

## 2. Releases

**v2.1.133** — [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.133)

**What's Changed:**
- Added `worktree.baseRef` setting (`fresh` | `head`) to control whether `--worktree`, `EnterWorktree`, and agent-isolation worktrees branch from `origin/<default>` or local `HEAD`.
- **Notable:** The default `fresh` restores previous behavior where `EnterWorktree` bases off `origin/<default>` (reverting a prior change).

---

## 3. Hot Issues (Top 10 by Community Activity)

### #27302 — [FEATURE] Support multiple Connector accounts (same connector, different accounts)  
**Why it matters:** This is the single most active feature request in the repo. Users with multiple GitHub/GitLab accounts want to switch between them without constant re-authentication. At **169 comments and 221 👍**, it's clearly a top priority for Anthropic's roadmap.  
📎 [Issue #27302](https://github.com/anthropics/claude-code/issues/27302)

### #2805 — [BUG] Files created with Windows line endings on Linux  
**Why it matters:** A long-standing bug (open since July 2025) that continues to plague Linux users, breaking shell scripts and causing `"No such file or directory"` errors even with explicit CLAUDE.md instructions. At **33 comments**, frustration is high.  
📎 [Issue #2805](https://github.com/anthropics/claude-code/issues/2805)

### #14200 — [FEATURE] Add rules support to Plugins  
**Why it matters:** Plugin authors want to enforce custom rules (e.g., code style, file structure) inside plugin-provided skills. With **68 👍**, this is the second most vocal feature request for improving the plugin ecosystem.  
📎 [Issue #14200](https://github.com/anthropics/claude-code/issues/14200)

### #23622 — [FEATURE] Support selecting base branch when creating git worktree  
**Why it matters:** Users want the same base-branch selection UX that Codex app provides. The **73 👍** reflects strong demand for worktree flexibility, which today's v2.1.133 release partially addresses with `worktree.baseRef`.  
📎 [Issue #23622](https://github.com/anthropics/claude-code/issues/23622)

### #50559 — [BUG] Subprocess init timeout (60s) regression on Windows  
**Why it matters:** A regression in v2.1.114 causes subprocess initialization to hang for >60 seconds on Windows. This is a critical blocker for Windows developers using the latest versions.  
📎 [Issue #50559](https://github.com/anthropics/claude-code/issues/50559)

### #36797 — [BUG] Authentication redirect loops to onboarding for existing accounts  
**Why it matters:** Paying subscribers are being locked out of their accounts and redirected to onboarding. The **"invalid" label** suggests Anthropic sees it as a transient issue, but 11 commenters remain stuck.  
📎 [Issue #36797](https://github.com/anthropics/claude-code/issues/36797)

### #48945 — [BUG] Plan-file inline comments lost on session resume  
**Why it matters:** Users leave inline comments in plan files (`"Leave a comment for Claude"`) to guide the model, but these are silently dropped when resuming a session. This breaks collaborative editing workflows.  
📎 [Issue #48945](https://github.com/anthropics/claude-code/issues/48945)

### #49282 — [BUG] macOS Privacy & Security re-prompt on every update  
**Why it matters:** Each release re-registers the `claude` binary as a new app, forcing users to re-approve permissions. At **9 comments**, this is a persistent UX annoyance on macOS.  
📎 [Issue #49282](https://github.com/anthropics/claude-code/issues/49282)

### #57102 — [BUG] Stale `.git/index.lock` left behind in worktrees (macOS)  
**Why it matters:** New issue from yesterday (May 7) with a reproducible test case. Stale lock files block git operations and force manual deletion. Could affect any worktree-heavy workflow.  
📎 [Issue #57102](https://github.com/anthropics/claude-code/issues/57102)

### #56739 — [BUG] `find` ran across entire Desktop, sent personal files to 3rd-party API  
**Why it matters:** A significant security concern: the model executed `find` recursively over `~/Desktop` and sent file contents to a 3rd-party API without user confirmation. This highlights gaps in permission gating for file-system tools.  
📎 [Issue #56739](https://github.com/anthropics/claude-code/issues/56739)

---

## 4. Key PR Progress

### #57108 — Fix hookify enabled boolean parsing (OPEN)  
**What it does:** Strictly parses Hookify `enabled` frontmatter as a boolean, rejecting truthy strings that previously allowed unintended rule activation. Includes focused unit tests.  
📎 [PR #57108](https://github.com/anthropics/claude-code/pull/57108)

### #57046 — docs: clarify hook blocking exit code (OPEN)  
**What it does:** Documents that only exit code `2` blocks hook execution (exit code `1` and others are non-blocking). Fixes confusion in the Bash hook example. Fixes #44707.  
📎 [PR #57046](https://github.com/anthropics/claude-code/pull/57046)

### #53949 — Update HackerOne links in SECURITY.md (CLOSED)  
**What it does:** Updates the HackerOne submission form and program page URLs. Merged May 7.  
📎 [PR #53949](https://github.com/anthropics/claude-code/pull/53949)

*(Only 3 PRs updated in the last 24h)*

---

## 5. Feature Request Trends

The community's loudest demands fall into three clear categories:

1. **Multi-Account / Multi-Identity Support (#27302, 221 👍)**  
   Users need to switch between multiple accounts (GitHub, GitLab, etc.) within the same Claude Code session without logging out. This is the #1 requested feature across the entire repo.

2. **Plugin & Skills Ecosystem Improvements (#14200, #47747)**  
   - **#14200 (68 👍):** Allow plugins to define rules (analogous to `CLAUDE.md`).  
   - **#47747 (4 👍):** Granular skill enable/disable within plugins to reduce startup overhead.  
   The plugin ecosystem is maturing, and users want more control over what loads and what rules apply.

3. **Worktree & Git Workflow Enhancements (#23622, 73 👍)**  
   Selecting the base branch when creating a worktree remains highly desired. The new `worktree.baseRef` setting partially addresses this, but the UX for choosing a branch interactively is still missing.

4. **Accessibility & Ergonomics (#57172, #57162, #57171)**  
   A cluster of new feature requests today focuses on non-streaming output mode (for motion sensitivity), RTL text support, and hiding the PR bar in non-PR workflows. These suggest a growing diversity of use cases beyond pure development.

---

## 6. Developer Pain Points

**Recurring frustrations flagged by the community:**

- **Windows stability (#50559, #57159, #57137):** Subprocess timeouts, segfaults during install, and PowerShell hook pattern-matching bugs make Windows the least reliable platform. Three distinct Windows issues surfaced in the last 24 hours alone.

- **Worktree lock-file corruption (#57102):** Stale `.git/index.lock` files in worktrees block git operations and require manual cleanup. This is a new but quickly noticed bug on macOS.

- **CRLF line endings on Linux (#2805):** Despite being open for 10 months, this bug still forces Linux users to manually `dos2unix` every script. The community is losing patience.

- **Authentication loops (#36797, #51423):** Paying users being redirected to onboarding pages is breaking trust. Multiple "invalid" labels suggest Anthropic is treating these as edge cases, but the commenters disagree.

- **Security concerns (#56739, #57176, #57173):** Three issues today touch on the model reading `.env` secrets, scraping the Desktop, or system-reminder text leaking into tool results. The community is increasingly concerned about data exfiltration risks.

- **macOS update friction (#49282, #50456):** Every update re-registers the binary in Privacy & Security settings, and Big Sur users are being silently broken by the auto-updater. Platform-specific packaging continues to be a weak spot.

---

*Digest generated from data available as of 2026-05-08. For full details, visit [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-08

## Today's Highlights
The Codex team shipped **rust-v0.129.0** with significant TUI improvements including modal Vim editing and a redesigned resume/fork picker. Community sentiment remains mixed: while the new Goals feature is praised as "genuinely life changing," users are frustrated by persistent compaction failures at ~220k tokens on GPT-5.5 (far below the advertised 400k context), and phone verification bugs continue to dominate discussion with 100 comments. On the engineering side, the team is progressively moving SQLite to be load-bearing for Codex state, adding telemetry to evaluate reliability before removing filesystem fallbacks.

## Releases

**rust-v0.129.0** — Stable release
- TUI now supports modal Vim editing in the composer, including `/vim` command, default-mode config, and Vim-specific keymap contexts (#18595)
- Redesigned resume/fork picker for easier workflow continuation and copying
- Raw scrollback mode added
- `/ide` context injection for improved IDE integration

**Pre-release builds** (`rust-v0.130.0-alpha.1`, `rust-v0.130.0-alpha.3`, `rust-v0.129.0-alpha.15`) — no detailed changelogs provided beyond version bumps.

---

## Hot Issues (Top 10 by Community Engagement)

**#20161 — [CLOSED] Phone number verification doesn't work**  
*100 comments | 74 👍*  
[Link](https://github.com/openai/codex/issues/20161)  
The single most-engaged issue today. Users report being forced into phone verification after SSO login on new devices, even when no phone was originally added. This broke workflows for many, triggered a firestorm of complaints, and was eventually closed — though the resolution is unclear from the summary.

**#12564 — [OPEN] Allow renaming task/thread titles**  
*41 comments | 82 👍*  
[Link](https://github.com/openai/codex/issues/12564)  
A long-standing UX request (filed Feb 2026) that remains open. Users want to rename threads for better history navigation in VS Code on Linux. High upvote count signals strong demand for basic organizational features.

**#13993 — [OPEN] Standalone Windows installer (codex-setup.exe)**  
*37 comments | 93 👍*  
[Link](https://github.com/openai/codex/issues/13993)  
Windows users blocked by Microsoft Store restrictions, corporate policies, or offline environments are demanding a traditional `.exe` installer. With the highest upvote count on this list, this is clearly a pain point for enterprise deployments.

**#3141 — [OPEN] GPU access inside sandbox**  
*36 comments | 43 👍*  
[Link](https://github.com/openai/codex/issues/3141)  
Linux users need NVIDIA GPU passthrough for ML workflows inside Codex's sandbox environment. Currently `nvidia-smi` is broken inside the sandbox, blocking GPU-accelerated development.

**#2952 — [OPEN] Search @ cannot find files excluded by .gitignore**  
*29 comments | 72 👍*  
[Link](https://github.com/openai/codex/issues/2952)  
VS Code extension's `@` file search only indexes git-tracked files. Users with `.gitignore`-d directories (e.g., build artifacts, generated code) cannot find those files — a significant limitation for code navigation.

**#20552 — [OPEN] "Toggle File Tree" unreliable on macOS**  
*23 comments | 5 👍*  
[Link](https://github.com/openai/codex/issues/20552)  
The View > Toggle File Tree menu item in the desktop app is enabled but does not reliably show the file tree. A basic UX regression affecting navigation.

**#19386 — [OPEN] GPT-5.5 compaction failure at ~220k tokens**  
*7 comments | 3 👍*  
[Link](https://github.com/openai/codex/issues/19386)  
Despite GPT-5.5's advertised 400k context, sessions hit an unrecoverable compaction failure around 220k tokens because it does not support `/responses/compact/native`. This effectively limits usable context to half the marketed capacity — a serious reliability concern for long-running sessions.

**#19450 — [OPEN] Browser Use fails to start on Windows 10**  
*5 comments | 13 👍*  
[Link](https://github.com/openai/codex/issues/19450)  
The in-app browser feature consistently fails on Windows 10 with "os error 3" (system cannot find the path). Blocks a key feature for Windows users.

**#20569 — [OPEN] Branch detail panel blocks scrollbar**  
*7 comments | 18 👍*  
[Link](https://github.com/openai/codex/issues/20569)  
The branch detail panel overlay in the desktop app (Windows/macOS) makes the scrollbar area unusable — the popover intercepts mouse events intended for scrolling.

**#21343 — [OPEN] Context compact error**  
*5 comments | 7 👍*  
[Link](https://github.com/openai/codex/issues/21343)  
Users report context compaction errors in the desktop app (v26.429.61741) and CLI (v0.128.0). The error message is not shown in the summary, but this ties into the broader stability concerns around compaction infrastructure.

---

## Key PR Progress (Top 10 by Engineering Significance)

**#21601 — [OPEN] Emit accepted line fingerprint analytics**  
[Link](https://github.com/openai/codex/pull/21601)  
Adds hash-only analytics for code attribution without uploading raw code. By parsing the turn diff, downstream systems can compare accepted Codex lines against commit/PR diffs — a privacy-preserving move toward code provenance tracking.

**#21617 — [OPEN] Support multi-environment apply_patch selection**  
[Link](https://github.com/openai/codex/pull/21617)  
Enables routing `apply_patch` to specific environments (both freeform and function-call flows). Adds environment selector parsing and carries `environment_id` through runtime and approval. Important for multi-environment development workflows.

**#20527 — [OPEN] Support PreToolUse updatedInput rewrites**  
[Link](https://github.com/openai/codex/pull/20527)  
Fixes a gap where `PreToolUse` hooks exposed `updatedInput` in their schema but Codex ignored it. Now hook authors can modify tool call inputs before execution — enabling pre-execution validation, enrichment, or redaction.

**#20619 — [OPEN] Request desktop attestation from app**  
[Link](https://github.com/openai/codex/pull/20619)  
Teaches `codex-rs` and app-server to request DeviceCheck attestation tokens and attach them as HTTP headers on API requests. A security hardening step that ties desktop identity to server-side request paths.

**#21656 — [OPEN] Regenerate Python SDK artifacts**  
[Link](https://github.com/openai/codex/pull/21656)  
Syncs the Python SDK with current app-server schema: removes stale `ServiceTier` export, adds `thread_source` parameter support, and updates handwritten surface to match generated types. Keeps SDK consumers on supported APIs.

**#21623 — [CLOSED] Enable AWS login credentials for Bedrock auth**  
[Link](https://github.com/openai/codex/pull/21623)  
Fixes Amazon Bedrock provider authentication for users who use `aws login` CLI console profiles. Previously only worked with static profiles or environment variables; now enables SigV4 signing with `credentials-login` feature.

**#21392 — [OPEN] Fix escaped shell args in safety checks**  
[Link](https://github.com/openai/codex/pull/21392)  
Security fix: the report path's safety checks inspected raw shell text instead of parsed `argv`. A backslash-escaped ripgrep preprocessor option could bypass security. Now inspects actual arguments passed to ripgrep.

**#21652 — [OPEN] Reapply "Move skills watcher to app-server"**  
[Link](https://github.com/openai/codex/pull/21652)  
Moves skills change watching from `codex-core` into app-server, so app-server owns client-facing `skills/changed` notifications. This cleanup consolidates responsibility and removes a dependency from core.

**#21651 — [OPEN] Delete function-style apply_patch**  
[Link](https://github.com/openai/codex/pull/21651)  
Removes legacy JSON/function-style `apply_patch` registration, leaving only the freeform/custom tool variant. Eliminates redundant code paths that confused models and tests about the tool surface.

**#21649 — [OPEN] State: avoid startup writes for ready dbs**  
[Link](https://github.com/openai/codex/pull/21649)  
Optimizes app-server restart: if SQLite `state_db` is already initialized, skips the mutating startup path. Reduces startup contention and unnecessary I/O — important as SQLite becomes more load-bearing.

---

## Feature Request Trends

The most requested feature directions, distilled from today's issues:

1. **Windows first-class support** — Two major requests dominate: a standalone `.exe` installer (#13993, 93 👍) and reliable Browser Use functionality (#19450, 13 👍). Windows remains a second-class platform despite being widely used.

2. **Context window reliability** — Users want the advertised 400k context (especially on GPT-5.5) to actually work without compaction failures (#19386, #21343). This is the most impactful performance issue for long sessions.

3. **Session and history management** — Thread renaming (#12564, 82 👍), conversation archiving/resuming (#20317), and better history navigation are consistently requested. Users need organization tools for long-term work.

4. **Sandbox improvements** — GPU access (#3141, 43 👍) and better `.gitignore` awareness (#2952, 72 👍) would unlock more serious development workflows inside Codex.

5. **Mobile companion app** — Though low engagement today (#10816, 2 comments), the request for a mobile app to control desktop Codex sessions suggests interest in remote access patterns.

6. **UI/UX polish** — Toggle File Tree reliability (#20552), scrollbar blocking popovers (#20569, #20886), and font rendering (#21511) collectively show desktop polish is still maturing.

---

## Developer Pain Points

- **Compaction instability**: Repeated failures at ~220k tokens on GPT-5.5 (supposedly 400k) erode trust in long-running sessions (#19386, #21343, #19547). This is the top technical concern.

- **Windows ecosystem gaps**: No standalone installer, broken Browser Use, and MCP tool subsetting (#13993, #19450, #21654) make Windows a frustrating platform for Codex.

- **Authentication friction**: Phone verification forced after SSO login (#20161, 100 comments) is the highest-engagement issue, suggesting systemic auth flow problems.

- **Session state fragility**: Archived threads that can't be restored (#20317), hidden local conversations after updates (#18364, #21581), and hooks that stop working after updates (#21639) indicate state management is brittle.

- **Plugin/MCP tool incompleteness**: MCP servers show as enabled but only deliver a subset of tools (#21654), and plugins side panels conflict with scrollbars (#20569, #20886) — integration with the broader tool ecosystem needs work.

- **Performance degradation**: Users report "codex is really too slow" (#21527) across both the app and VS Code extension, suggesting systemic latency or resource issues.

- **Font rendering on macOS**: Incorrect font fallback in UI and code text (#21511) is a minor but visible polish issue affecting developer experience.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-08

## Today's Highlights

Today's release introduces shell command safety evaluations and fixes JSON output for agent termination in non-interactive mode. The community is actively discussing memory system bugs and subagent reliability, with five critical issues around Auto Memory and tool resolution. A new terminal scroll hijacking bug on Termux also surfaced, highlighting cross-platform rendering concerns.

## Releases

**v0.42.0-nightly.20260507.ga809bc7c5** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260507.ga809bc7c5)
- `fix(cli)`: Provide JSON output for `AgentExecutionStopped` in non-interactive mode ([#26504](https://github.com/google-gemini/gemini-cli/pull/26504))
- `feat(evals)`: Add shell command safety evaluations ([#26528](https://github.com/google-gemini/gemini-cli/pull/26528))

## Hot Issues

1. **[#26563 — Tool "save_memory" not found](https://github.com/google-gemini/gemini-cli/issues/26563)** — Users running `/memory add` get a "Tool not found" error suggesting `ask_user` instead. High visibility with 5 comments; suggests a regression in memory tool registration.

2. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — A critical logic bug where subagents report success after hitting turn limits, masking failures. 5 comments, 2 👍, potentially eroding trust in subagent results.

3. **[#25932 — PowerShell 5.1 forced over pwsh.exe](https://github.com/google-gemini/gemini-cli/issues/25932)** — Windows users are stuck with legacy PowerShell for shell commands. 4 comments, 1 👍; impacts modern Windows development workflows. (Related PR #25900 recently closed.)

4. **[#24916 — Repeated permission prompts for same file](https://github.com/google-gemini/gemini-cli/issues/24916)** — "Allow for all future sessions" doesn’t persist, causing friction. 3 comments; a UX regression likely tied to session state management.

5. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory sends unredacted content to the model before secret removal. 2 comments; a privacy/security concern for local transcript processing.

6. **[#26522 — Auto Memory retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — Sessions deemed low-signal are never marked as processed, leading to infinite re-extraction attempts. Impacts efficiency and resource usage.

7. **[#25166 — Shell command hangs after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — Commands show "Awaiting user input" after finishing. 2 comments, 3 👍; a common and disruptive bug for interactive workflows.

8. **[#26685 — Terminal Scroll Hijacking on Termux (Android)](https://github.com/google-gemini/gemini-cli/issues/26685)** — Redraw flickering and scroll hijacking on Android terminal. 1 comment; emerging platform-specific issue for mobile developers.

9. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** — Agent crashes when too many tools are enabled. 1 comment; fundamental scaling limitation for complex setups.

10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — Users report subagents activating despite disabled settings. 1 comment; security/control concern for configuration management.

## Key PR Progress

1. **[#26256 — fix(shell): stop foreground commands after excessive output](https://github.com/google-gemini/gemini-cli/pull/26256) — CLOSED** — Adds a 10 MiB output guard for foreground commands with an `outputLimitExceeded` result. Mitigates runaway process issues.

2. **[#26259 — fix(cli): continue task after skill slash activation](https://github.com/google-gemini/gemini-cli/pull/26259) — CLOSED** — Skill slash commands now continue the active task instead of sending a weak default prompt. Directly addresses a long-standing UX complaint.

3. **[#25900 — fix(core): prefer pwsh.exe over Windows PowerShell 5.1](https://github.com/google-gemini/gemini-cli/pull/25900) — CLOSED** — Fixes embedded double-quote failures on Windows by defaulting to PowerShell 7. Addresses the core complaint in #25932.

4. **[#25885 — fix(core): prevent ENOENT crash due to proper-lockfile race condition](https://github.com/google-gemini/gemini-cli/pull/25885) — CLOSED** — Fixes a critical startup crash when multiple commands compete for `projects.json.lock`. Priority P0 fix.

5. **[#25886 — feat(routing): availability-aware auto-routing with best-effort Pro](https://github.com/google-gemini/gemini-cli/pull/25886) — CLOSED** — Detects slow Pro models and falls back to Flash, adding "Best Effort Pro" setting. Improves reliability during backend congestion.

6. **[#26306 — fix(core): prevent infinite retry loop on persistent backend errors](https://github.com/google-gemini/gemini-cli/pull/26306) — OPEN** — Prevents CLI from hanging during service outages or quota exhaustion. Critical for robustness.

7. **[#26286 — fix stale state in /rewind](https://github.com/google-gemini/gemini-cli/pull/26286) — OPEN** — Fixes #25646; ensures `/rewind` clears stale agent state properly.

8. **[#26278 — feat(voice): add dynamic audio wave animation for recording feedback](https://github.com/google-gemini/gemini-cli/pull/26278) — OPEN** — Replaces static "Listening..." text with animated wave indicator. Addresses #25493 for better voice UX.

9. **[#26675 — feat(acp): allow ask_user tool in ACP mode for Xcode-compliant IDEs](https://github.com/google-gemini/gemini-cli/pull/26675) — OPEN** — Re-enables `ask_user` for ACP integrations that support interactive prompts, specifically Xcode. Targeted at human-in-the-loop workflows.

10. **[#26159 — feat(core): implement continuation auto-recovery](https://github.com/google-gemini/gemini-cli/pull/26159) — OPEN** — Adds automatic recovery for interrupted agent continuations. Fixes #26157; strengthens long-running task reliability.

## Feature Request Trends

- **AST-aware codebase tools**: Multiple EPICs (#22745, #22746, #24353) advocate for AST-based file reads, search, and codebase mapping to reduce token noise and improve the precision of codebase investigation.
- **Memory system maturity**: Issues #26523, #26525, #26522, #26516 collectively request deterministic redaction, invalid patch quarantine, low-signal deduplication, and overall quality improvements for Auto Memory. This is the most actively discussed feature area.
- **Agent self-awareness and safety**: #22672 calls for discouraging destructive git/DB operations. #24037 and #23925 push for a real-time "tracker" to improve execution transparency and replanning visibility.
- **Cross-platform parity**: #25932 (pwsh), #26685 (Termux), and #25216 (A:\ drive) highlight a growing expectation for robust support on non-standard Windows and Linux mobile/terminal environments.

## Developer Pain Points

- **Subagent reliability crisis**: Issues #22323 (false success on MAX_TURNS), #21968 (underutilization of skills), and #22093 (unauthorized activation) indicate systemic trust issues with subagent behavior and control.
- **Memory tool instability**: #26563 shows a regression in memory tool resolution. Combined with #26522 (infinite retries) and #26525 (privacy), the memory subsystem is a top developer frustration.
- **Terminal rendering regressions**: #25218 (broken table streaming), #24935 (corruption after external editor), #26685 (Termux flickering), and #25166 (command hangs) point to a cluster of UI/streaming bugs affecting day-to-day usability.
- **Permission and configuration scattering**: #24916 (repeated permissions), #22267 (browser agent ignoring settings.json), and #22093 (agents ignoring disabled flags) suggest a fragmented and non-deterministic configuration layer.
- **Lock contention on startup**: #25885's quick closure highlights persistent race conditions; users hitting ENOENT crashes on launch signals fragility in project-level state management.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-08

## Today's Highlights
Three rapid patch releases (v1.0.44-0 through v1.0.44-2) rolled out today, fixing critical bugs including a Free-tier quota display issue and preserving tool permissions across session clears. However, the v1.0.44-0 release introduced a **severe regression on Windows** where multi-word `--prompt` arguments are tokenized on whitespace and piped stdout triggers `ERROR_INVALID_FUNCTION`, breaking all non-PowerShell automation scenarios. The community also remains vocal about three long-standing pain points: the absence of vi-mode input, bloated system prompt overhead, and a co-author tagging controversy.

## Releases
Three releases in the last 24 hours, all on the v1.0.44 branch:

- **[v1.0.44-2](https://github.com/github/copilot-cli/releases/tag/v1.0.44-2)**: Added optional `prerelease` argument to `copilot update` and `/update` for fetching latest prerelease builds. Fixed `!` prefix shell commands to work correctly across all shell configurations.
- **[v1.0.44-1](https://github.com/github/copilot-cli/releases/tag/v1.0.44-1)**: Improved shell alias and rc file compatibility in `!` commands.
- **[v1.0.44-0](https://github.com/github/copilot-cli/releases/tag/v1.0.44-0)**: Timeline now shows resolved model names for rubber-duck sub-agents (e.g., `Rubber-duck(claude-opus-4.7)`). Fixed Free users seeing "100% used" quota display. Fixed tool permissions being lost after `/clear` in autopilot mode.

## Hot Issues (Top 10 by Community Engagement)

1. **[#2082 — `ctrl+shift+c` no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082)** (18 comments, 7👍)  
   A fundamental keyboard shortcut broken since v1.0.4 on Ubuntu 24.04. High severity for Linux users because it breaks the standard terminal copy workflow. Still open after 7 weeks.

2. **[#196 — CLI not able to run any commands on Windows](https://github.com/github/copilot-cli/issues/196)** (15 comments, 4👍)  
   Old but active: PowerShell and CMD both fail to execute any command. Recently updated, suggesting ongoing debugging despite being closed.

3. **[#2282 — Unable to connect to MCP servers on Windows](https://github.com/github/copilot-cli/issues/2282)** (9 comments, 1👍)  
   WinGet installation fails to connect to `github-mcp-server`. New Windows users hitting this immediately after install.

4. **[#13 — Request: vi/vim input mode for CLI](https://github.com/github/copilot-cli/issues/13)** (6 comments, 58👍)  
   The highest-voted feature request by far. Developers using modal editors cannot efficiently navigate/edit within interactive sessions. Open since September 2025.

5. **[#2355 — Internal PowerShell tool fails to spawn `pwsh.exe` on Windows (ENOENT)](https://github.com/github/copilot-cli/issues/2355)** (4 comments, 4👍)  
   Interactive prompts work, but internal tool execution fails to find PowerShell 7 even when it's on `PATH`. A confusing partial failure.

6. **[#3162 — v1.0.42 falsely reports registry-listed custom MCP servers as "blocked by policy"](https://github.com/github/copilot-cli/issues/3162)** (4 comments)  
   A false-positive in registry validation that breaks custom MCP server usage. Reported just 2 days ago, already gaining traction.

7. **[#2543 — Concurrent sub-agent events corrupt session state permanently](https://github.com/github/copilot-cli/issues/2543)** (2 comments, 2👍)  
   A particularly nasty bug: concurrent tool calls from sub-agents produce orphan `tool_use` IDs that corrupt the entire session, requiring a restart. The error message (`tool_use ids were found without tool_result blocks`) is now appearing in multiple reports.

8. **[#3181 — Remove automatic co-author to Copilot CLI commits (or make optional)](https://github.com/github/copilot-cli/issues/3181)** (2 comments)  
   A contentious feature debate: some users want AI co-author attribution, others see it as "personifying a tool." Closed as "not planned" but the community pushback is notable.

9. **[#3135 — BYOK statusline shows wrong effort level despite correct reasoning_effort](https://github.com/github/copilot-cli/issues/3135)** (2 comments)  
   `--effort high` sends the correct API parameter but the status line shows `medium`. Works correctly in v1.0.41, regressed in a later patch. Undermines trust in BYOK configurations.

10. **[#3188 — Windows `copilot.exe` exits code 1 with empty streams when stdout is piped](https://github.com/github/copilot-cli/issues/3188)** (0 comments, 3👍)  
    A v1.0.44-0 regression that breaks all CI/CD and automation piping on Windows. `FlushFileBuffers ERROR_INVALID_FUNCTION` on non-console stdout handles. Very high blast radius.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Three dominant themes emerged from the issue tracker this week:

1. **Input modality flexibility**: The vi-mode request (#13) remains the top-voted feature with 58 👍. Users want keyboard-driven navigation compatible with modal editors.
2. **Configurable system prompt overhead**: Users are pushing back against the ~20,500 token baseline system prompt (#2627, 4👍), requesting the ability to slim down fixed overhead for faster responses and lower costs.
3. **Custom co-author attribution**: Two conflicting requests (#3177, #3181) debate whether Copilot should auto-add co-author tags. No consensus yet — some want tracking, some see it as misleading.

## Developer Pain Points
Several recurring frustrations are visible across today's issues:

- **Windows ecosystem fragility**: Multiple severe regressions in v1.0.44-0 (#3186, #3188, #2355) break core Windows workflows — tokenization of quoted arguments, pipe failures, and PowerShell path resolution issues. Windows users are disproportionately affected this cycle.
- **Session corruption from concurrency**: Issues #2543 and #3183 both report permanent session state corruption from orphaned `tool_use` blocks during concurrent sub-agent operations. The SDK-level nature of this bug makes it hard to work around.
- **MCP server reliability**: Multiple reports (#2282, #3162) show MCP integration issues — from installation failures to false policy blocks. As MCP adoption grows, these "first mile" problems frustrate new users.
- **Non-interactive mode instability**: Issues #3189 (macOS silent exit) and #3186/#3188 (Windows) show that `-p` / `--prompt` non-interactive mode is particularly buggy in v1.0.44, undermining automation and scripting use cases.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-08

## Today's Highlights
A productive day for the Kimi CLI team with seven pull requests opened in the last 24 hours, focusing on macOS image attachment fixes, Windows binary versioning, and backend display name accuracy. The community continues to pressure for full thinking trace visibility (Issue #1864, 10 👍), while the team is actively shipping targeted fixes for cross-platform issues. No new releases today.

## Releases
No new releases in the last 24 hours. Latest stable remains unknown; last mentioned version is v1.41.0 in recent bug reports.

## Hot Issues
1. **#1864 – [bug] Please display the full thinking traces in Kimi CLI**  
   *Author: YunfanZhang42 | Updated: today | 12 comments, 10 👍*  
   User requests that Kimi CLI expose the complete "thinking" chain (reasoning traces) during model inference, rather than just the final answer. High community consensus — this is a top-priority UX improvement.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1864)

2. **#2182 – Bug: macOS screenshot thumbnails dropped into terminal fail to attach**  
   *Author: abm9111 | Updated: yesterday | 1 comment*  
   Dragging a macOS temporary screenshot thumbnail into the terminal results in attachment failure because the file path goes stale before Kimi CLI reads it. Common macOS workflow impact.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2182)

3. **#2010 – Feature Request: Shift+Enter to insert newline in prompt input**  
   *Author: wowlegend | Updated: yesterday | 1 comment, 1 👍*  
   Users want Shift+Enter to insert a newline (standard across ChatGPT, Claude, Slack) instead of current Ctrl-J or Alt-Enter. Low effort, high ergonomic value.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2010)

4. **#2178 – [bug] Windows: kimi.exe v1.41.0 has blank FileVersionInfo**  
   *Author: Kafshi3239sty | Updated: yesterday | 1 comment*  
   Windows binary lacks proper version metadata in PE headers, causing VS Code extension to reject it as incompatible. Critical for Windows developer onboarding.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2178)

5. **#2180 – [enhancement] kimi cli web need /task command**  
   *Author: scially | Updated: yesterday | 0 comments*  
   Web interface lacks a `/task` command; user provides a screenshot showing a terminal with incomplete functionality.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2180)

6. **#2179 – Feature Request: incremental token deltas in --print --output-format stream-json**  
   *Author: FlamingoPg | Updated: yesterday | 0 comments*  
   Current stream-json mode buffers full assistant turns instead of emitting per-token deltas, breaking downstream tooling that needs token-level streaming (e.g., real-time dashboards).  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2179)

7. **#2175 – fix: model_display_name ignores display_name for kimi-for-coding**  
   *Author: tears-mysthrala | Updated: yesterday | 0 comments*  
   Backend returns correct display name (e.g., "Kimi-k2.6") but a hardcoded override in `llm.py` forces it to always show "kimi-for-coding". Confuses users about which model version they are using.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2175)

## Key PR Progress
1. **#2183 – fix(shell): attach dropped image paths eagerly**  
   *Author: he-yefeng | Updated: yesterday | OPEN*  
   Direct fix for Issue #2182: scans user text for local image paths, reads them immediately, and sends as `ImageURLPart` — prevents race condition with short-lived macOS thumbnail paths.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2183)

2. **#2174 – fix: respect model display_name for kimi-for-coding**  
   *Author: tears-mysthrala | Updated: yesterday | OPEN*  
   Removes hardcoded display name override so users see the actual model version (e.g., "Kimi-k2.6") instead of generic "kimi-for-coding".  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2174)

3. **#2176 – fix(hooks): extract text from ContentPart for UserPromptSubmit hook**  
   *Author: tears-mysthrala | Updated: yesterday | OPEN*  
   Fixes empty `prompt`/`matcher_value` when `user_input` is a list of `ContentPart` objects. Enables regex-based hooks to work correctly with modern message formats.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2176)

4. **#2177 – fix(soul): clear partial UI output when LLM step is retried**  
   *Author: 7Sageer | Updated: yesterday | OPEN*  
   When streaming fails mid-response and tenacity retries, previously output partial text remains visible, causing concatenated garbage. This PR clears aborted output before retry.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2177)

5. **#2181 – fix: add Windows binary version info**  
   *Author: he-yefeng | Updated: yesterday | OPEN*  
   Generates PyInstaller Windows version-info from `pyproject.toml`, embeds it into both one-file and one-dir builds, and adds CI assertion to prevent future blank metadata. Fixes #2178.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2181)

6. **#1127 – style(web): tweak some web ui details**  
   *Author: anxndsgn | Updated: yesterday | CLOSED (merged)*  
   Minor web UI polish. Merged after ~3 months — likely accumulated small styling improvements.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1127)

7. **#1715 – feat(plugin): add Claude-compatible local plugin support**  
   *Author: GTC2080 | Updated: yesterday | CLOSED*  
   Added `--plugin-dir` flag and auto-discovery of local Claude Plugins. Despite being closed, represents significant community interest in plugin ecosystem compatibility.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1715)

## Feature Request Trends
- **Ergonomics & keyboard conventions**: Shift+Enter for newlines (#2010), marking community expectation that CLI should match web chat norms.
- **Streaming granularity**: Request for per-token deltas in JSON output (#2179) indicates growing use of Kimi CLI as a backend for custom pipelines and real-time dashboards.
- **Web command parity**: `/task` command missing from web interface (#2180) suggests users expect feature parity between terminal and web modes.
- **Plugin ecosystem**: Although closed, the Claude-compatible plugin PR (#1715) signals desire for extensible tool integration beyond built-in behaviors.

## Developer Pain Points
- **Thinking trace invisibility** (#1864): The top-voted issue. Developers want visibility into the model's reasoning process — likely for debugging, auditing, or trust reasons.
- **macOS screenshot attachment fragility** (#2182, #2183): Reliance on short-lived temporary file paths causes recurring breakage for an intuitive workflow.
- **Windows binary metadata gaps** (#2178, #2181): Blank `FileVersionInfo` blocks VS Code extension compatibility and creates trust issues with security scanners.
- **Hardcoded model names** (#2175, #2174): Users cannot see which exact model version (e.g., Kimi-k2.6) they are using, eroding trust and making regression reporting harder.
- **Retry UI artifacts** (#2177): Partial output from failed streaming calls persists on retry, producing visual garbage — particularly disruptive in interactive use.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-08

## Today's Highlights
A dense day for the OpenCode ecosystem: **v1.14.41** shipped with a critical formatter output fix and session-warping for uncommitted changes, while a wave of provider alignment PRs (Anthropic Opus 4.5, OpenAI GPT-5, Gemini 3) locked down reasoning variant support. On the community side, the long-standing **"Support for Cursor CLI"** (#2072) request continues to dominate discussion with 168 👍 reactions, and a new Windows plugin regression is generating reports across multiple issues.

---

## Releases
### v1.14.41
**Core**
- **Bugfix:** Restored formatter output handling – formatting now works correctly when formatters write to stdout or stderr (@ferdinandyb)
- **Improvement:** Workspace warping (moving a session to another workspace) now carries over uncommitted file changes

**TUI**
- **Bugfix:** Restored custom provider dialog attachment toggle (fixes silent image-paste failures for custom providers)

[View release →](https://github.com/anomalyco/opencode/releases/tag/v1.14.41)

---

## Hot Issues (Top 10 of 50 total)

### 🏆 #2072 – Support for Cursor CLI
- **Author:** ThallesP | **Comments:** 67 | **👍:** 168
- **Summary:** Request to support Cursor's recently released CLI. Community acknowledges the API is likely undocumented but interest is very high.
- **Why it matters:** The #1 most-upvoted open issue – signals strong user desire for multi-platform agent interoperability.
- [GitHub](https://github.com/anomalyco/opencode/issues/2072)

### 🔥 #8601 – Error: unknown certificate verification error
- **Author:** jsshwqz | **Comments:** 23 | **👍:** 2
- **Summary:** Persistent TLS/certificate error across multiple AI providers; Gemini 3 login also fails.
- **Why it matters:** Blocks usage for users behind corporate proxies or with custom CA certificates. High frustration due to reproducibility.
- [GitHub](https://github.com/anomalyco/opencode/issues/8601)

### 🔁 #4704 – /undo and /timeline undo does not revert file edits
- **Author:** Salloxy | **Comments:** 16 | **👍:** 14
- **Summary:** Undo commands fail to revert file changes even in git-tracked projects. Attached debug logs.
- **Why it matters:** Core undo functionality is broken – a fundamental developer workflow expectation.
- [GitHub](https://github.com/anomalyco/opencode/issues/4704)

### 🐚 #25873 – Bash tool fails with "Attempted to assign to readonly property" in v1.14.34+
- **Author:** stephanschielke | **Comments:** 8 | **👍:** 1
- **Summary:** Crash on every tool call when `OPENCODE_EXPERIMENTAL=true` and v2 event system is active. Conditions clearly identified.
- **Why it matters:** A PR (#25867) is already open – shows rapid community triage of a v2-API regression.
- [GitHub](https://github.com/anomalyco/opencode/issues/25873)

### 🖼️ #20802 – Custom OpenAI-compatible providers: image attachments don't reach models
- **Author:** GravityPoet | **Comments:** 7 | **👍:** 0
- **Summary:** Image attachments fail to send as vision input for custom OpenAI-compatible endpoints. Same provider works outside OpenCode.
- **Why it matters:** Vision models are a key differentiator – broken image passthrough limits utility of custom providers.
- [GitHub](https://github.com/anomalyco/opencode/issues/20802)

### 🖥️ #26123 – Windows Desktop doesn't show oh-my-openagent after upgrade to v1.14.40
- **Author:** lijiecong | **Comments:** 7 | **👍:** 0
- **Summary:** Plugin (oh-my-openagent) disappeared on Windows Desktop after upgrading from 1.14.29 to 1.14.40.
- **Why it matters:** New Windows-specific regression hitting multiple users (#26209 is a duplicate).
- [GitHub](https://github.com/anomalyco/opencode/issues/26123)

### ⏳ #20902 – bash tool hangs when command spawns background child processes
- **Author:** tidyinfo | **Comments:** 7 | **👍:** 5
- **Summary:** Commands with `&`, `nohup`, or `sleep &` hang indefinitely until the 2-minute timeout.
- **Why it matters:** Breaks common patterns (e.g., dev servers, background builds). High-impact for integration workflows.
- [GitHub](https://github.com/anomalyco/opencode/issues/20902)

### 📝 #21299 – Markdown rendering broken since opentui upgrade (0.1.79 → 0.1.88+)
- **Author:** ars-ppi | **Comments:** 6 | **👍:** 1
- **Summary:** Headings, bold, code blocks all display as raw text in assistant responses across macOS, iTerm2, and WSL2.
- **Why it matters:** Makes TUI nearly unusable for reviewing LLM output – affects all users on the latest opentui.
- [GitHub](https://github.com/anomalyco/opencode/issues/21299)

### 🌀 #26198 – Terminal flooded with raw mouse escape sequences
- **Author:** toi500 | **Comments:** 4 | **👍:** 0
- **Summary:** CLI's mouse tracking fails to disable after interrupted processes, leaving terminal stuck in raw SGR report mode.
- **Why it matters:** Terminal state corruption is highly disruptive – forces manual reset on every occurrence.
- [GitHub](https://github.com/anomalyco/opencode/issues/26198)

### 📋 #26277 – new update breaks app (v1.14.41)
- **Author:** Wolf-G88 | **Comments:** 2 | **👍:** 0
- **Summary:** "Ask anything" placeholder persists and input is not accepted after typing.
- **Why it matters:** Fresh regression in today's release – immediate attention needed for basic interaction.
- [GitHub](https://github.com/anomalyco/opencode/issues/26277)

---

## Key PR Progress (Top 10 of 50 total)

### 🔧 #26276 – fix: tweaks to transform logic for Anthropic and Bedrock
- **Author:** rekram1-node | **Status:** ✅ Merged
- **Summary:** Fixes reasoning handling bugs and resolves a Bedrock PDF issue. Closes #26087.
- **Why it matters:** Unblocks PDF support on Bedrock and stabilizes Anthropic reasoning.
- [GitHub](https://github.com/anomalyco/opencode/pull/26276)

### 🤖 #26279 – fix(provider): align Gemini thinking controls
- **Author:** kitlangton | **Status:** Open
- **Summary:** Aligns Gemini reasoning variants with model-family-specific `thinkingConfig` for Gemini 2.5 and 3, including Pro/Flash/Flash-Lite variants.
- **Why it matters:** Ensures correct reasoning behavior across the expanding Gemini model family.
- [GitHub](https://github.com/anomalyco/opencode/pull/26279)

### 🩹 #25867 – fix(session): clone tool input before passing to EventV2
- **Author:** stephanschielke | **Status:** Open
- **Summary:** Fixes "Attempted to assign to readonly property" crash on every tool call with EXPERIMENTAL mode. Closes #25873.
- **Why it matters:** Critical fix for experimental v2 event system users – top-priority merge candidate.
- [GitHub](https://github.com/anomalyco/opencode/pull/25867)

### 🎯 #26275 – fix(provider): align Anthropic Opus 4.5 efforts
- **Author:** kitlangton | **Status:** ✅ Merged
- **Summary:** Adds valid `low`/`medium` reasoning effort values for Opus 4.5; removes unsupported `max`.
- **Why it matters:** Prevents silent failures when users select invalid effort levels on the latest Anthropic model.
- [GitHub](https://github.com/anomalyco/opencode/pull/26275)

### 🧠 #26273 – fix(provider): constrain OpenAI deep research efforts
- **Author:** kitlangton | **Status:** ✅ Merged
- **Summary:** Restricts deep research models to `medium` only (their sole supported effort). Documents verified o-series efforts.
- **Why it matters:** Eliminates confusing "invalid effort" errors on OpenAI's research-tier models.
- [GitHub](https://github.com/anomalyco/opencode/pull/26273)

### 🖥️ #26223 – feat(desktop): working indicator on project sidebar
- **Author:** edemaine | **Status:** ✅ Merged
- **Summary:** Adds "AI is working" spinner to project sidebar icons. Fixes #14430 and #12077.
- **Why it matters:** Long-requested visual feedback for agent activity – improves UX for multi-project users.
- [GitHub](https://github.com/anomalyco/opencode/pull/26223)

### 📦 #26262 – feat(desktop): Add Export Logs
- **Author:** Hona | **Status:** Open
- **Summary:** Archives last 24h of desktop/server/network/crashpad logs with per-run scoped logging. VS Code-style crash dialogs.
- **Why it matters:** Vastly improves debuggability – a boon for both users and maintainers when filing bug reports.
- [GitHub](https://github.com/anomalyco/opencode/pull/26262)

### 🚦 #26259 – fix(cli): forward signals from npm shim
- **Author:** chubes4 | **Status:** Open
- **Summary:** Properly forwards SIGTERM/SIGINT through `spawnSync()` wrapper. Closes #20899 and #17978.
- **Why it matters:** Fixes orphan processes and incorrect exit codes when Node wrapper terminates child processes.
- [GitHub](https://github.com/anomalyco/opencode/pull/26259)

### 🧩 #26268 – fix(provider): align GPT-5 reasoning variants
- **Author:** kitlangton | **Status:** ✅ Merged
- **Summary:** Version-aware mapping for GPT-5.1+/5.2+/5.5 reasoning efforts. Removes unsupported `minimal` from newer variants.
- **Why it matters:** Keeps pace with OpenAI's rapidly evolving GPT-5 model line – prevents silent config errors.
- [GitHub](https://github.com/anomalyco/opencode/pull/26268)

### 🏗️ #26255 – feat(databricks): add Databricks Model Serving + AI Gateway provider
- **Author:** dgokeeffe | **Status:** ✅ Merged
- **Summary:** Fresh implementation of Databricks as a custom provider with auto-discovery for both Model Serving and AI Gateway.
- **Why it matters:** Opens OpenCode to enterprise Databricks users – significant for ML/AI teams on Databricks infrastructure.
- [GitHub](https://github.com/anomalyco/opencode/pull/26255)

---

## Feature Request Trends

1. **Multi-Provider & CLI Interoperability** – #2072 (Cursor CLI support) leads the pack at 168 👍. Users increasingly want OpenCode to act as a universal agent bridge, not just a standalone tool.

2. **Semantic / Vector Code Search** – #6265 (mgrep integration) and #3184 (semantic indexing) both resurfaced recently. Developers want "ask questions about code" capabilities similar to Kilo or Cursor.

3. **Plugin Ecosystem Stability** – Multiple issues (#26123, #26209, #25999) report plugin breakage after upgrades. Users are requesting plugin API stability guarantees and better upgrade testing.

4. **UI/UX Quality of Life** – #12077 (status indicators on agent avatars) and #1515 (shell tab completions) continue to accumulate votes. Small friction-reducing features.

5. **Enterprise & Custom Provider Support** – #26255 (Databricks) was merged, but #20802 (custom provider image passthrough) and #25112 (TUI provider setup) show enterprise demand isn't fully met.

---

## Developer Pain Points

- **Terminal State Corruption (#26198):** Mouse tracking sequences leaking into shell output is a recurring annoyance; users want clean terminal handoff.
- **Plugin Breakage on Upgrade (#26123, #26209, #25999):** A pattern is emerging where Windows Desktop users lose plugin functionality after minor version bumps. This erodes trust in the update process.
- **Undo/Redo Reliability (#4704):** The fact that `/undo` doesn't revert file edits is a fundamental workflow blocker that has received 16 comments but no resolution.
- **Certificate/TLS Issues (#8601):** Corporate proxy users face a hard blocker with no clear workaround – this affects adoption in enterprise environments.
- **Command Timeout Rigidity (#3950 – closed but recurring):** While #3950 was closed, the "1-minute timeout too short for integration tests" sentiment echoes through #20902 (background process hangs) and other bash tool issues.
- **V2 Event System Pain (#25873):** The experimental v2 event system introduces subtle bugs (readonly property errors, streaming truncation) that discourage users from opting in.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-08

## Today's Highlights
The repository has completed its migration from `badlogic/pi-mono` to `earendil-works/pi` with release v0.74.0 updating all package scopes to `@earendil-works/*`. A major "bigrefactor" wave has swept through the issue tracker, closing 20+ issues as part of a large-scale code reorganization. Notable community attention remains on local LLM provider support (23 👍) and a flurry of terminal rendering fixes, including a critical Kitty image corruption fix from core contributor mitsuhiko.

## Releases
- **v0.74.0** — Updated all repository links and package references for the move to `earendil-works/pi-mono` and `@earendil-works/*` package scopes.
- **v0.73.1** — Added self-update support for npm scope migration (`pi update --self` now handles the rename from `@mariozechner/pi-coding-agent` to `@earendil-works/pi-coding-agent`).

## Hot Issues

1. **#3357 — Official local LLM provider extension** (OPEN, 23 👍, 9 comments)  
   *Why it matters:* Users want to hook Pi into llama.cpp, Ollama, and LM Studio by dynamically fetching model lists from `{baseUrl}/models`. This is the most-upvoted open feature request, reflecting strong demand for offline/self-hosted AI workflows.  
   [Link](https://github.com/earendil-works/pi/issues/3357)

2. **#4228 — OpenAI-completions provider mishandles mixed-content deltas** (CLOSED, 18 comments)  
   *Why it matters:* Streaming deltas containing both content and tool calls were processed incorrectly. This was a blocking bug for users relying on OpenAI's chat completions API. Fixed via PR #4247 by mitsuhiko.  
   [Link](https://github.com/earendil-works/pi/issues/4228)

3. **#4208 — Inline image previews corrupt terminal in cmux/Ghostty** (CLOSED, 14 comments)  
   *Why it matters:* Pi's Kitty graphics path breaks inside multiplexers like cmux. This is a rendering reliability issue affecting users who work in tmux-like environments.  
   [Link](https://github.com/earendil-works/pi/issues/4208)

4. **#3780 — Duplicate characters on Italian keyboard with Kitty Keyboard Protocol** (CLOSED, 7 comments)  
   *Why it matters:* A specific keyboard layout regression affecting European users. The root cause was in `pi-tui`'s editor handling of certain key sequences.  
   [Link](https://github.com/earendil-works/pi/issues/3780)

5. **#2451 — Add support for Cursor's models (Composer 1.5/2)** (CLOSED, 6 comments)  
   *Why it matters:* Community interest in using Cursor subscription models within Pi. Though closed, it signals demand for more provider integrations beyond the standard OpenAI/Anthropic offerings.  
   [Link](https://github.com/earendil-works/pi/issues/2451)

6. **#2144 — Cannot paste images into Pi** (CLOSED, 6 comments)  
   *Why it matters:* Image clipboard paste (Ctrl+V) from tools like Warp Terminal is a table-stakes feature for AI coding agents. The request was closed as part of the bigrefactor, suggesting a rework is planned.  
   [Link](https://github.com/earendil-works/pi/issues/2144)

7. **#4253 — Chinese IME input causes doubled/lost characters with Kitty keyboard protocol** (OPEN, 3 comments)  
   *Why it matters:* A language-specific IME regression that makes Pi unusable for Chinese-speaking users in Kitty-enabled terminals (VS Code, etc.). Still open and unresolved.  
   [Link](https://github.com/earendil-works/pi/issues/4253)

8. **#4273 — Incorrect Pi update notice in TUI** (CLOSED, 4 comments)  
   *Why it matters:* Users were shown v0.74.0 available immediately after updating to v0.73.1 — a false positive. Highlights a bug in the update-check logic.  
   [Link](https://github.com/earendil-works/pi/issues/4273)

9. **#4257 — WebSocket transport error stops coding-agent loop** (CLOSED, 3 comments)  
   *Why it matters:* Transient WebSocket errors cause the agent loop to abort rather than retry. This degrades reliability for users with unstable network connections.  
   [Link](https://github.com/earendil-works/pi/issues/4257)

10. **#4290 — Messages aborted for length treated as regular stops** (CLOSED, 1 comment)  
    *Why it matters:* Users weren't notified when long-thinking turns were silently aborted. A usability issue that undermines trust in the agent's progress feedback.  
    [Link](https://github.com/earendil-works/pi/issues/4290)

## Key PR Progress

1. **#4247 — fix(ai): handle mixed chat completion deltas** (CLOSED, by mitsuhiko)  
   Switched to separate accumulators for content and tool calls in OpenAI streaming. Fixes #4228. A critical fix for streaming stability.  
   [Link](https://github.com/earendil-works/pi/pull/4247)

2. **#4261 — fix(tui): keep kitty image redraws inside TUI** (CLOSED, by mitsuhiko)  
   Prevents Kitty image corruption when TUI lines are cleared inside reduced scroll regions.  
   [Link](https://github.com/earendil-works/pi/pull/4261)

3. **#4281 — feat(tui): show/hide cursor on terminal focus change** (CLOSED, by dukejeffrie)  
   Implements DECSET 1004 focus reporting so Pi hides the cursor when the terminal loses focus — a nice polish improvement.  
   [Link](https://github.com/earendil-works/pi/pull/4281)

4. **#4277 — feat(ai): add gpt-5.5-chat-latest** (CLOSED, by webdevtodayjason)  
   Adds OpenAI's new GPT-5.5 Instant model (announced 2026-05-05) to the provider catalog.  
   [Link](https://github.com/earendil-works/pi/pull/4277)

5. **#4259 — feat: complete rollback architecture with 1300+ tests** (CLOSED, by dyyz1993)  
   A massive PR implementing file snapshot rollback, with FileSnapshotManager wired into AgentSession. Includes 10 core rollback test cases.  
   [Link](https://github.com/earendil-works/pi/pull/4259)

6. **#4264 — fix(extensions): expose label/execute in ToolInfo and allow tool override** (CLOSED, by nantas)  
   Fixes extension conflict resolution so tool-display extensions can override MCP Direct Tools' rendering via last-write-wins.  
   [Link](https://github.com/earendil-works/pi/pull/4264)

7. **#3737 — fix(ai): correct GPT-5.5 context metadata** (CLOSED, by suntp)  
   Corrects context window sizes for GPT-5.5 on OpenAI/Azure and the Copilot Codex route.  
   [Link](https://github.com/earendil-works/pi/pull/3737)

8. **#4244 — chore(coding-agent): switch back from fork to upstream jiti 2.7** (CLOSED, by pi0)  
   Updates jiti to v2.7 from upstream, incorporating virtual module and static bundling fixes.  
   [Link](https://github.com/earendil-works/pi/pull/4244)

9. **#3887 — feat: image content** (OPEN, by cristinaponcela)  
   Adds a new API for image blocks and image model output (via Google/OpenRouter). Allows agents to generate images. In progress.  
   [Link](https://github.com/earendil-works/pi/pull/3887)

10. **#3624 — feat(ai): add Together AI as a provider** (OPEN, by Nutlope)  
    Native support for Together AI via its OpenAI-compatible Chat Completions API. Sources models dynamically. Still open for review.  
    [Link](https://github.com/earendil-works/pi/pull/3624)

## Feature Request Trends

The community is pushing three clear directions:

1. **Local/self-hosted LLM support** (#3357, 23 👍): Users want to connect Pi to llama.cpp, Ollama, LM Studio, and other local inference engines. This is the single most-requested feature.

2. **Provider model extensibility** (#2451, #4293): Requests for Cursor and Copilot internal models highlight a desire to use Pi with any API-compatible service, not just the big three providers.

3. **Image/file content support** (#4287, #3887, #2144): Multiple issues request native PDF/image input to the AI pipeline and image output from agents. This is a "re-filed" feature that has been auto-closed multiple times, indicating sustained demand.

## Developer Pain Points

- **Terminal rendering fragility**: The Kitty keyboard protocol causes keyboard layout issues (Italian keyboard duplicates, Chinese IME corruption) and image rendering breaks inside multiplexers (cmux/Ghostty). These are platform-specific but affect core usability.

- **Provider reliability gaps**: WebSocket transport errors (#4257) and Bedrock empty termination (#4210) show that provider transport resilience is inconsistent. Users report silent failures and aborting loops.

- **Update mechanism issues**: The scope migration (`@mariozechner/*` → `@earendil-works/*`) caused multiple update failures, including stale bin shims (#4284) and false-positive update notices (#4273). This created confusion during what should be a transparent migration.

- **Sync I/O bottleneck**: Issue #2616 remains open: `SessionManager` uses blocking `*Sync` methods, preventing async/database-backed persistence. This architectural limitation blocks performance improvements for large session files.

- **Silent error modes**: Issues #4279 (Pi doesn't exit after `-p` flag) and #4290 (length-aborted turns show no indicator) reveal a pattern of missing user feedback for execution states, reducing trust in agent behavior.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-08

## Today's Highlights

The team shipped **v0.15.8** featuring a new telemetry opt-in for sensitive span attributes, alongside a **critical fix for the Monitor tool** that now correctly routes notifications to sub-agents instead of the parent session. Additionally, a massive stacked PR series for **remote-control foundation** (3 PRs) and the first stage of a **`qwen serve` HTTP daemon** landed, signaling a push toward server-mode and headless operation.

## Releases

- **[v0.15.8-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.8-nightly.20260508.0491252b2)** — Adds `feat(telemetry): add sensitive span attribute opt-in` by @doudouOUC, allowing users to control which telemetry spans carry potentially sensitive data.
- **[v0.15.8](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.8)** — Stable release including tool-control E2E test alignment with prior-read enforcement (`#3898`) and a fix for skills allowing symlinks pointing outside the skills directory.
- **v0.15.7 / v0.15.7-preview.x** — Introduced `FileReadCache` with short-circuit for unchanged file reads (`#3717`) and CLI proxy setting honor fix (`#3717`).

## Hot Issues (Top 10)

1. **[#3740](https://github.com/QwenLM/qwen-code/issues/3740) — Custom OpenAI models overwritten by Coding Plan** `[CLOSED]`  
   Users configuring non-Coding-Plan OpenAI-compatible models in `settings.json` report the CLI overrides them on every launch. High community frustration (8 comments). The team needs to respect user config over default discovery.

2. **[#3901](https://github.com/QwenLM/qwen-code/issues/3901) — Multi-line paste triggers automatic submission** `[CLOSED]`  
   Pasting code or logs into the TUI splits content into multiple prompts on every newline. A critical UX regression for developers copying terminal output.

3. **[#3881](https://github.com/QwenLM/qwen-code/issues/3881) — Local Qwen3.6-27b produces infinite `/` tokens on first query** `[OPEN]`  
   Model hallucinates a stream of `/` until hitting token limit. Users suspect prompt formatting or model-specific interaction issue.

4. **[#3838](https://github.com/QwenLM/qwen-code/issues/3838) — Terminal UI infinite scroll/refresh loop** `[OPEN]`  
   During code analysis, the TUI enters a rendering loop with flickering and infinite scrollbar growth. Likely a rendering layer bug.

5. **[#3877](https://github.com/QwenLM/qwen-code/issues/3877) — `.env` file API key not respected** `[OPEN]`  
   Despite setting `OPENCODE_GO_API_KEY` in `~/.qwen/.env`, the CLI forces interactive auth selection. Environment variable loading order issue.

6. **[#3940](https://github.com/QwenLM/qwen-code/issues/3940) — 401 invalid access token / token expired** `[OPEN]`  
   Two duplicate reports (`#3939`, `#3940`) of complete service outage. Users cannot start any conversation. Possibly a token refresh or backend deployment issue.

7. **[#3936](https://github.com/QwenLM/qwen-code/issues/3936) — Russian text rendering broken** `[OPEN]`  
   Unicode encoding issue: Russian characters display as `��������`. Affects any non-Latin script in TUI rendering.

8. **[#3758](https://github.com/QwenLM/qwen-code/issues/3758) — Sub-agent detail visibility request** `[OPEN]`  
   Users want full thinking/processing logs from sub-agents (similar to main session) to debug sub-agent reasoning errors. 2 upvotes.

9. **[#3829](https://github.com/QwenLM/qwen-code/issues/3829) — Cannot paste images on Wayland** `[OPEN]`  
   Regression of `#2885` — image paste fails despite installed `xdg-utils` and `wl-clipboard`. Fish shell user.

10. **[#3634](https://github.com/QwenLM/qwen-code/issues/3634) — Background task management roadmap** `[OPEN]`  
    Core maintainer @wenshao details Phase A-D roadmap for background tasks. Phase C (Monitor tool) just landed. Community watching for Phase D (background ↔ foreground promotion).

## Key PR Progress (Top 10)

1. **[#3864](https://github.com/QwenLM/qwen-code/pull/3864) — Provider-first auth registry** `[OPEN]`  
   Unified authentication pipeline: API key, OAuth, Coding Plan, Token Plan all produce a single provider config. Reduces auth logic duplication.

2. **[#2886](https://github.com/QwenLM/qwen-code/pull/2886) — Agent Team: parallel sub-agent coordination** `[OPEN]`  
   Experimental feature for spawning multiple sub-agents working in parallel on different parts of a task. Gated behind env var.

3. **[#3932](https://github.com/QwenLM/qwen-code/pull/3932) — Accept partial reads in prior-read enforcement** `[OPEN]`  
   Fixes over-constraint introduced in `#3774` where in-place edits required full-file read. Critical for large-file editing workflows.

4. **[#3933](https://github.com/QwenLM/qwen-code/pull/3933) — Fix monitor notifications for sub-agents** `[OPEN]`  
   Routes Monitor tool notifications to the originating agent, fixing the bug where sub-agent events polluted parent context.

5. **[#3871](https://github.com/QwenLM/qwen-code/pull/3871) — Core built-in i18n coverage** `[OPEN]`  
   Expands UI language coverage for built-in slash-command descriptions. Prevents silent fallback to English.

6. **[#3589](https://github.com/QwenLM/qwen-code/pull/3589) — ToolSearch for deferred tool schemas** `[OPEN]`  
   Reduces default tool-declaration list by moving MCP and low-frequency built-ins to on-demand loading. Improves session startup latency.

7. **[#3684](https://github.com/QwenLM/qwen-code/pull/3684) — Event Monitor tool with throttled stdout streaming** `[CLOSED]`  
   Phase C of background task roadmap. New Monitor tool with token-bucket throttling, idle/max-event self-stop.

8. **[#3767](https://github.com/QwenLM/qwen-code/pull/3767) — Log actual OpenAI request sent** `[OPEN]`  
   Fixes `--openai-logging` to record the exact request (including provider-injected fields like `extra_body`), fixing debugging gaps.

9. **[#3889](https://github.com/QwenLM/qwen-code/pull/3889) — `qwen serve` HTTP daemon (Stage 1)** `[OPEN]`  
   Implements ACP NDJSON over HTTP+SSE with SDK-side `DaemonClient`. Covers health, capabilities, session lifecycle, prompt, cancel, delete.

10. **[#3929/#3930/#3931](https://github.com/QwenLM/qwen-code/pulls?q=is%3Apr+remote-control+created%3A2026-05-07) — Remote-control foundation (3-PR stack)** `[OPEN]`  
     Foundation + worker server + TUI attach. Enables external control of running sessions via HTTP/WebSocket with pairing/auth. Major architectural addition.

## Feature Request Trends

- **Sub-agent observability**: Multiple requests (`#3758`, `#3924`) for full reasoning logs, TODO lists, and monitor routing from sub-agents. Community wants parity with main session visibility.
- **Desktop/IDE integration**: PR `#3778` adds a desktop app package; issue `#3511` requests JetBrains IDE integration. Growing demand for non-CLI interfaces.
- **Remote control & server mode**: 3-PR stacked remote-control feature plus `qwen serve` daemon indicate a push toward headless/server operation. Likely driven by CI/CD and team workflows.
- **Telemetry & observability**: PR `#3847` injects trace/span IDs into debug logs; issue `#3917` requests OpenInference-compliant tracing for Phoenix visualization. Enterprise monitoring is a clear theme.
- **Internationalization**: PR `#3871` focuses on core i18n; issue `#3936` (broken Russian) underscores the need for comprehensive Unicode support.

## Developer Pain Points

1. **Model configuration overrides** (`#3740`): The CLI aggressively replaces user-configured models with its own discovered list, breaking custom setups.
2. **TUI rendering bugs** (`#3838`, `#3901`): Infinite scroll loops, multi-line paste triggering auto-submit — the TUI layer needs stability work.
3. **Authentication/credential confusion** (`#3877`, `#3940`): `.env` files not respected, tokens expiring without clear recovery path. Multiple users completely blocked.
4. **Local model issues** (`#3881`): Infinite `/` token generation with self-hosted models suggests compatibility gaps between upstream model behavior and Qwen Code's prompt formatting.
5. **Unicode/L10n failures** (`#3936`): Non-Latin scripts break rendering entirely — a showstopper for international users.
6. **SDK version breakage** (`#3823`): Upgrading SDK from 0.1.5 to 0.1.6/0.1.7 causes intermittent `CLI process exited with code 1` errors, eroding trust in semantic versioning.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*