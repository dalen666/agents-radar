# AI CLI Tools Community Digest 2026-04-26

> Generated: 2026-04-26 15:21 UTC | Tools covered: 8

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

# AI CLI Developer Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-04-26 | **Prepared by:** Technical Analyst, AI Developer Tools

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing a phase of intense maturation characterized by frequent regressions in flagship tools (Claude Code, OpenAI Codex), rapid feature iteration in challenger tools (Pi, Qwen Code), and strong community demand for cross-cutting capabilities like MCP ecosystem expansion, context window management, and billing transparency. The four major incumbent tools—Claude Code, OpenAI Codex, Gemini CLI, and GitHub Copilot CLI—are all grappling with release quality issues, while newer entrants (Pi, OpenCode, Kimi Code, Qwen Code) are capitalizing on unmet user needs around multi-provider flexibility, HTTP API bridges, and desktop-native experiences. The ecosystem is also converging on a standard set of agent infrastructure primitives: permission profiles, worktree-based session isolation, background task management, and AST-aware codebase mapping.

---

## 2. Activity Comparison

| Tool | Open Issues | Open PRs | Releases (24h) | Last Stable Version | Dominant Activity Type |
|---|---|---|---|---|---|
| **Claude Code** | ~50 tracked | 6 active | None | v2.1.109 | Duplicate bug reporting (30+ closed as dup); feature requests closed to consolidate |
| **OpenAI Codex** | ~50 tracked | 10 active | 2 Rust alpha releases (v0.126.0-alpha.2, .3) | 26.422 | Critical regressions (CPU, memory, startup); permissions system refactor |
| **Gemini CLI** | 50 open | 31 open | None | Not listed | PR-heavy: permissions, memory routing, tool repair infrastructure |
| **GitHub Copilot CLI** | ~10 tracked | 0 updated | None | v1.0.12 | Bug triage: infinite loops, proxy issues, skills regression |
| **Kimi Code** | ~5 tracked | 10 active | None | Not listed | Feature work: git worktree isolation, Tauri desktop client |
| **OpenCode** | ~10 tracked | 10 active | None | Not listed | HTTP API bridge (5 stacked PRs); silent error audit |
| **Pi** | ~15 tracked | 10 active | None | v0.70.2 | Provider compatibility fixes; per-model config; TUI performance |
| **Qwen Code** | ~10 tracked | 10 active | v0.15.3 (yesterday) | v0.15.3 | Core optimization (91% I/O reduction); DeepSeek thinking mode fixes |

**Key observations:**
- **Pi** and **Gemini CLI** have the highest PR-to-issue ratio, indicating active development velocity.
- **Claude Code** and **OpenAI Codex** show signs of release cycle stress, with duplicate bug reports and unresolved regressions dominating community discourse.
- **Qwen Code** is the only tool with a shipping release in the last 24 hours, including significant performance improvements.

---

## 3. Shared Feature Directions

The following requirements appear across **multiple tool communities**, indicating converging user expectations:

| Theme | Tools | Specific Needs |
|---|---|---|
| **MCP Ecosystem Expansion** | Claude Code, OpenAI Codex, Copilot CLI, Qwen Code | Pagination fixes (#39586), richer tool surfaces (Gmail send), per-repo MCP config (#2528), branching/scoping (#2466), connection pool limits (#3277) |
| **Billing & Usage Transparency** | Claude Code, OpenAI Codex, Copilot CLI, Qwen Code, Kimi Code | In-status-line quota visibility (#15366), per-model cost tracking (#3585), rate limit accounting clarity (#19585), usage color inversion fix (#2019) |
| **Context Window Management** | OpenAI Codex, OpenCode, Pi, Qwen Code | 1M token support (#19464), configurable compaction thresholds (#11314), per-model context windows (#3737), DeepSeek reasoning preservation |
| **Session & Workflow Reliability** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI | Sub-agent recovery (#22323), session persistence (#19558), auto-reauth prevention (#48433), lock contention fixes (#24328) |
| **Permission & Approval UX** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode | "Allow for Session" buttons (#48479), YOLO/auto-approve modes (#11831), PermissionProfile refactors, approval mode awareness for subagents (#23582) |
| **Multi-Account & Auth Rotation** | Claude Code, OpenCode, Gemini CLI | Org switching (#48460), OAuth rotation (#11830), multi-account failover |
| **Desktop/Native Experience** | Kimi Code, OpenCode | Tauri desktop client (#2079), VS Code extension demand (#11176), cross-platform parity |

**Conclusion:** MCP reliability, billing transparency, and context window control are the three most urgent cross-cutting user needs. Any tool that solves these well will gain a significant adoption advantage.

---

## 4. Differentiation Analysis

| Tool | Differentiation Point | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Deepest Claude integration; status line extensibility; MCP-first architecture | Claude power users, agent workflow developers | Proprietary backend; JSON status line hooks; plugin ecosystem |
| **OpenAI Codex** | GPT-5.5 access; multi-platform (Rust alpha, VS Code, Desktop); permission profile system | OpenAI ecosystem users, enterprise | Stacked refactors (permissions); Rust-native CLI alphas; macOS/Windows fragility |
| **Gemini CLI** | AST-aware codebase tools (tilth/glyph); subagent reliability; memory routing | Google ecosystem developers, codebase mappers | Research-driven (EPIC #22745); subagent recovery infrastructure; settings.json overrides |
| **GitHub Copilot CLI** | Copilot subscription integration; ACP (Agent Communication Protocol); skills system | GitHub enterprise users, premium request subscribers | Low-merge velocity; high bug triage; enterprise proxy support gaps |
| **Kimi Code** | Git worktree isolation; Tauri desktop client; K2.6 model focus | Multi-branch developers, parallel session users | Worktree per session; web UI + Tauri wrapper; closed-source model dependency |
| **OpenCode** | HTTP API bridge; multi-provider support; silent error auditing | Provider-agnostic power users, CI/CD pipelines | 5 stacked HTTP API PRs; TypeScript focus; CLAUDE.md and .agents/skills/ compatibility |
| **Pi** | Provider flexibility (CrofAI, Fireworks, Antigravity); per-model config; TUI performance | Multi-provider users, local LLM enthusiasts | Per-model request config; OpenAPI schema sanitization; Promise.allSettled parallelism |
| **Qwen Code** | DeepSeek V4/Qwen optimization; cost tracking; structured background tasks | Qwen/DeepSeek users, cost-conscious developers | 91% I/O reduction; managed shell pool; Traditional Chinese localization |

**Key insight:** The market is bifurcating into **provider-locked tools** (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI) and **provider-agnostic tools** (Pi, OpenCode, Qwen Code). The latter group is gaining momentum by offering flexibility and faster iteration cycles.

---

## 5. Community Momentum & Maturity

### Highest Momentum (Rapid Iteration, Growing Communities)
- **Pi**: 31 open PRs, 10 active in 24h, per-model features shipping same day, strong contributor signal (4 PRs from one author). Emerging as the most agile provider-agnostic tool.
- **Qwen Code**: v0.15.3 released yesterday with 91% I/O optimization, 10 active PRs, DeepSeek fix fast-tracked. Shipping velocity is highest in ecosystem.
- **OpenCode**: 5 stacked HTTP API PRs from Kit Langton, CI pipeline migration, silent error audit underway. Strong infrastructure focus.

### Stable but Stressed (Large Userbases, Release Quality Concerns)
- **Claude Code**: Highest absolute issue volume (30+ duplicate closures/day), but the consolidation suggests centralized feature tracking. Community is large but frustrated.
- **OpenAI Codex**: Multiple critical regressions (CPU, memory, startup) across macOS/Windows. Two Rust alpha releases in 24h signal hotfixing but also instability.
- **Gemini CLI**: High PR activity (31 open) and EPIC-driven development. Subagent reliability is core focus. Community is smaller but engaged.

### Low Activity (Triage Mode / Infrequent Releases)
- **GitHub Copilot CLI**: Zero PR updates in 24h; focus is on bug triage and duplicate closure. Autopilot infinite loops are the #1 pain point. Community appears smaller.

### Platform-Specific Vulnerabilities
- **Windows**: All tools show weaker Windows support. Claude Code (#48414), OpenAI Codex (#19423, #19381), Gemini CLI (#25216, #24202), Copilot CLI (#2978), OpenCode (#23907) all have Windows-specific blockers.
- **macOS**: OpenAI Codex macOS is the most fragile (5 issues: CPU, rendering, startup, packaging, config schema). Claude Code and Gemini CLI fare better.
- **Intel Mac vs Apple Silicon**: OpenAI Codex shows regression gaps; Claude Code and Kimi Code claim Apple Silicon support as baseline.

---

## 6. Trend Signals

1. **MCP is Becoming the Universal Extension Point**: Every major tool (Claude Code, OpenAI Codex, Copilot CLI, Qwen Code) is investing in MCP reliability. Pagination, branching, connection pooling, and tool approval UX are all active pain points. Expect MCP to become a standard like LSP.

2. **Billing Transparency is Table Stakes**: Users are no longer willing to discover quota exhaustion through silent failure. In-status-line usage display, per-model cost tracking, and session cost estimates are emerging as entry requirements for any serious CLI tool.

3. **Context Window Flexibility is Competitive Ground**: The gap between API context windows (1M tokens) and CLI caps (200K–400K) is a major community grievance. Tools that solve configurable compaction and per-model window limits will win power users.

4. **Provider-Agnostic Tools Are Gaining**: Pi and OpenCode are attracting users frustrated with vendor lock-in and release instability from Claude Code and OpenAI Codex. Their ability to support multiple backends (OpenAI, Anthropic, DeepSeek, local LLMs) with per-model granularity is a growing differentiator.

5. **Desktop/Native Clients Are Back on the Roadmap**: Kimi Code's Tauri PR (#2079) and OpenCode's #1 feature request for VS Code extension signal a shift from pure terminal-only to hybrid desktop+terminal experiences. The ecosystem is converging on desktop wrappers (Tauri, Electron).

6. **AST-Aware Code Understanding is Emerging**: Gemini CLI's #22745 EPIC and related work on tilth/glyph suggest a move toward structured, AST-based codebase mapping to reduce token noise. This could be the next leap beyond regex-based context injection.

7. **Subagent/Session Reliability is the Quality Bar**: Claude Code's mid-session reauth, OpenAI Codex's compaction failures, Gemini CLI's false success reports, and Copilot CLI's infinite loops all undermine autonomous agent workflows. The tool that solves "sleep well at night" reliability for long-running agents will have a decisive advantage.

8. **Enterprise Proxy & Corporate Usability Remains Weak**: Copilot CLI (#2978), Pi (#3713), and Kimi Code (#1896) all have active proxy/NTLM/self-signed certificate issues. Enterprise adoption is gated on these plumbing fixes, yet they remain low-priority in community-facing issue tracking.

---

**Recommendation for Decision-Makers:**
- If you are **provider-committed** (Claude, GPT-5.5), stay with the ecosystem but monitor release quality carefully—both Claude Code and OpenAI Codex are in rough patches.
- If you value **flexibility and velocity**, evaluate Pi or Qwen Code for multi-provider support and faster iteration cycles.
- If you need **enterprise reliability**, be prepared to invest in workarounds for proxy/NTLM gaps regardless of tool choice.
- Watch **context window management** and **billing transparency** as the two features that will define the next generation of tooling leaderboard.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-26 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills PRs have attracted the most community discussion, based on comment activity and cross-referencing with related Issues.

### #514 – document-typography
**Functionality:** Prevents common typographic defects in AI-generated documents—orphan word wrap, widow paragraph headers, and numbering misalignment. Addresses a universal pain point in Claude-generated output.
**Discussion highlights:** Broad appreciation for solving an issue that "affects every document Claude generates." Minimal controversy; primarily refinement suggestions.
**Status:** Open | [View PR #514](https://github.com/anthropics/skills/pull/514)

### #83 – skill-quality-analyzer & skill-security-analyzer
**Functionality:** A meta-skill pair that evaluates other Skills across five quality dimensions (structure, documentation, correctness) and performs security analysis. Essentially a linter and security scanner for the Skills ecosystem itself.
**Discussion highlights:** Significant interest from skill authors; questions about integration with the CI pipeline and whether these should be mandatory before PR merge.
**Status:** Open | [View PR #83](https://github.com/anthropics/skills/pull/83)

### #723 – testing-patterns
**Functionality:** Comprehensive testing stack coverage—unit testing (AAA pattern), React component testing (Testing Library), E2E (Playwright), and testing philosophy (Testing Trophy model vs. pyramid).
**Discussion highlights:** Strong demand for testing automation in Skills. Community debated React-specific vs. framework-agnostic approach; author opted for inclusion of both.
**Status:** Open | [View PR #723](https://github.com/anthropics/skills/pull/723)

### #568 – servicenow
**Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Security Incident Response, CSDM, and IntegrationHub.
**Discussion highlights:** One of the most comprehensive enterprise-platform Skills submitted. Questions about scope management—whether it should be multiple narrower Skills.
**Status:** Open | [View PR #568](https://github.com/anthropics/skills/pull/568)

### #486 – odt (OpenDocument Text)
**Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods). Includes template filling and ODT-to-HTML conversion.
**Discussion highlights:** Fills a clear gap alongside the existing DOCX and PDF skills. Requests for LibreOffice-specific template handling.
**Status:** Open | [View PR #486](https://github.com/anthropics/skills/pull/486)

### #335 – masonry-generate-image-and-videos
**Functionality:** AI-powered image (Imagen 3.0) and video (Veo 3.1) generation via the Masonry CLI, plus job management (status, download, history).
**Discussion highlights:** Intersection of Skills with external generative AI tooling. Community interested in standardized media generation patterns.
**Status:** Open | [View PR #335](https://github.com/anthropics/skills/pull/335)

### #806 – sensory (macOS AppleScript automation)
**Functionality:** Native macOS automation via `osascript` (AppleScript), replacing screenshot-based computer use. Two-tier permission system.
**Discussion highlights:** High interest as an alternative to brittle visual automation. Permission security model (Tier 1 vs. Tier 2) was a focal point.
**Status:** Open | [View PR #806](https://github.com/anthropics/skills/pull/806)

---

## 2. Community Demand Trends

Distilled from Issues activity, the most-anticipated new Skill directions are:

| Demand Category | Signal | Key Issue |
|---|---|---|
| **Org-wide skill sharing** | 5 👍, 9 comments — highest engagement issue | [#228: Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228) |
| **Skill evaluation/testing framework** | 6 👍 — second highest | [#556: run_eval.py never triggers skills](https://github.com/anthropics/skills/issues/556) |
| **Skill deduplication & lifecycle management** | 7 👍 — third highest | [#189: duplicate skills across plugins](https://github.com/anthropics/skills/issues/189) |
| **Security/trust boundary for community skills** | Discussion across 2+ threads | [#492: namespace trust abuse](https://github.com/anthropics/skills/issues/492) |
| **MCP exposure of Skills** | Recurring theme across months | [#16: Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16) |
| **Enterprise/SSO compatibility** | Blocking issue for skill-creator tooling | [#532: ANTHROPIC_API_KEY requirement](https://github.com/anthropics/skills/issues/532) |

**Notable pattern:** The community is demanding *infrastructure and governance* features more than new domain-specific Skills. Skill evaluation, sharing, deduplication, security, and integration (MCP) consistently outrank individual Skill proposals in engagement.

---

## 3. High-Potential Pending Skills

These PRs have active discussion threads and are likely to land soon:

| PR | Skill | Last Activity | Maturity Signal |
|---|---|---|---|
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 2026-04-21 | Recent updates; comprehensive scope |
| [#568](https://github.com/anthropics/skills/pull/568) | servicenow | 2026-04-23 | Most recent update in top PRs; actively maintained |
| [#486](https://github.com/anthropics/skills/pull/486) | odt | 2026-04-14 | Recent; complements existing docx skill |
| [#539](https://github.com/anthropics/skills/pull/539) | fix: skill-creator validation | 2026-04-16 | Bugfix, likely fast-tracked |
| [#541](https://github.com/anthropics/skills/pull/541) | fix: docx w:id collision | 2026-04-16 | Critical bugfix for document corruption |
| [#806](https://github.com/anthropics/skills/pull/806) | sensory (AppleScript) | 2026-04-02 | Novel approach; strong niche demand |
| [#997](https://github.com/anthropics/skills/pull/997) | xiao (Xiaomi vacuum) | 2026-04-21 | Fresh submission; IoT/device control pattern |

**Prediction:** The three bugfix PRs (##539, 541, 538 by Lubrsy706) are likely to merge fastest as they address existing-skill defects. Among new Skills, `testing-patterns` (#723) and `servicenow` (#568) have the strongest momentum.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *Skill infrastructure*—evaluation frameworks, sharing mechanisms, deduplication tooling, and security governance—rather than for new domain-specific Skills themselves**, as evidenced by Issues #556 (evaluation), #228 (sharing), #189 (deduplication), and #492 (trust) consistently out-engaging individual Skill proposals in both votes and discussion depth.

---

# Claude Code Community Digest — 2026-04-26

## Today's Highlights

The community is experiencing a massive wave of duplicate bug reports (30+ closed as duplicates within 24 hours), suggesting a recent update may have introduced regressions affecting Windows desktop launch, token generation speed, and MCP connectivity. On the feature front, a long-running campaign to expose usage quota and rate limit data in the status line JSON continues to build momentum, with numerous enhancement requests being merged as duplicates, signaling Anthropic is likely working on a unified solution.

## Releases

No new releases in the last 24 hours. The latest available version remains **2.1.109** (referenced in recent bug reports).

## Hot Issues

1. **[BUG] Claude Code does not follow MCP tools/list pagination (nextCursor)** [#39586](https://github.com/anthropics/claude-code/issues/39586)
   - **Why it matters:** MCP servers with many tools (e.g., 50+) are silently truncated; Claude never requests subsequent pages. This breaks toolsets from popular MCP hubs. Open for a month with 8 comments and growing community interest.

2. **[Enhancement] Feature Request: Add weekly/daily usage limits to statusLine hook JSON** [#15366](https://github.com/anthropics/claude-code/issues/15366) *(CLOSED)*
   - **Why it matters:** 28 👍 — the most-liked issue in the last day. Users want real-time quota visibility in custom status lines without running `/usage`. The fact this (and similar issues) are being closed suggests a consolidated solution in the works.

3. **[Bug] Severe output throttling: extremely slow token generation rates** [#48412](https://github.com/anthropics/claude-code/issues/48412) *(CLOSED - duplicate)*
   - **Why it matters:** A Max subscriber reports 50 tokens in 15 minutes and $200 subscription rendered unusable. While closed as duplicate, it signals a systemic throttling issue affecting power users.

4. **[Bug] Login interruption on long sessions breaks Max subscribers** [#48433](https://github.com/anthropics/claude-code/issues/48433) *(CLOSED - duplicate)*
   - **Why it matters:** Mid-session login prompts kill long-running agent workflows. The author passionately argues for identity verification at account setup instead. This taps into a broader frustration around session reliability for autonomous agents.

5. **[Feature] Add gmail_send_draft / gmail_send_message tool to Gmail MCP connector** [#48459](https://github.com/anthropics/claude-code/issues/48459) *(CLOSED - duplicate)*
   - **Why it matters:** The Gmail MCP can read drafts but not send them, making email automation workflows incomplete. Community interest in richer MCP tool surfaces is evident.

6. **[Bug] Claude Code generates self-messages that appear as user (Human) messages** [#48443](https://github.com/anthropics/claude-code/issues/48443) *(CLOSED - duplicate)*
   - **Why it matters:** Claude responding in the user's voice, then treating it as user input creates a dangerous feedback loop. This hallucination/confusion pattern erodes trust in agentic workflows.

7. **[Bug] stream-json: background sub-agent events missing usage data** [#48439](https://github.com/anthropics/claude-code/issues/48439) *(CLOSED - duplicate)*
   - **Why it matters:** Breaking programmatic usage — `run_in_background: true` sub-agents produce asymmetric output compared to foreground ones. Critical for CI/CD pipelines and tooling that parse structured output.

8. **[Feature] Add "Allow for Session" permission to Desktop tool approval dialog** [#48479](https://github.com/anthropics/claude-code/issues/48479) *(CLOSED - duplicate)*
   - **Why it matters:** VSCode extension has this; Desktop doesn't. Users seeking efficient multi-tool workflows are constantly interrupted by "Allow Once" prompts. Simple parity request.

9. **[Bug] Claude Desktop fails to launch silently on Windows 11 25H2** [#48414](https://github.com/anthropics/claude-code/issues/48414) *(CLOSED - duplicate)*
   - **Why it matters:** `vmcompute.dll` sandbox access denied — a Windows-specific crash-on-launch with zero error feedback. Affects users on latest Windows update; no workaround documented.

10. **[Bug] Numeric feedback input conflicts with Claude's numbered response options** [#48484](https://github.com/anthropics/claude-code/issues/48484) *(CLOSED - duplicate)*
    - **Why it matters:** A UX footgun: pressing "1" to select Claude's first option instead triggers a "bad feedback" signal. This interaction design flaw can derail productive sessions.

## Key PR Progress

1. **[OPEN] feat: open source claude code** [#41447](https://github.com/anthropics/claude-code/pull/41447)
   - Ambitious PR claiming to close multiple issues (#59, #456, etc.) with an open-source release. Status unclear — it may be a symbolic/stunt PR or a real proposal. Worth watching.

2. **[OPEN] docs: add workaround for false-positive update banner on brew/winget** [#33351](https://github.com/anthropics/claude-code/pull/33351)
   - Documents `DISABLE_AUTOUPDATER=1` workaround for users on Homebrew/WinGet who see spurious "Update available" banners due to version-channel mismatch. Practical quality-of-life improvement.

3. **[CLOSED] docs: Add CLAUDE.md repository guide for AI assistants** [#31945](https://github.com/anthropics/claude-code/pull/31945)
   - Adds a comprehensive `CLAUDE.md` covering codebase structure, plugin architecture, and dev practices. Meta-documentation that helps Claude help itself.

4. **[OPEN] fix(plugins): add missing plugin-dev manifest and validate bundled marketplace** [#53529](https://github.com/anthropics/claude-code/pull/53529)
   - CI validation for local marketplace entries to catch invalid plugin references pre-merge. Strengthens the plugin ecosystem quality gate.

5. **[CLOSED] Chore/devcontainer aws volume** [#53482](https://github.com/anthropics/claude-code/pull/53482)
   - Devcontainer configuration improvements for AWS volume integration. Minor but useful for cloud-based development workflows.

6. **[OPEN] Add files via upload** [#53354](https://github.com/anthropics/claude-code/pull/53354)
   - Uploads a `knowledge_compiler_scaffold` ZIP. Context unclear — could be a new scaffolding tool or documentation asset for the plugin system.

## Feature Request Trends

- **Status Line Quota Visibility (DOMINANT THEME):** At least 5 separate enhancement requests (#15366, #15844, #20413, #25041, #30784) all seek the same thing: expose usage quotas, rate limits, and budget consumption in the status line JSON. All have been closed, likely merged into a single tracked feature. This is the #1 community ask.
- **MCP Tool Surface Expansion:** Users want richer MCP tools — Gmail send capability, better pagination support, and "Allow for Session" permissions in Desktop. MCP is becoming the primary extension point, and gaps are increasingly felt.
- **Multi-Org Account Support:** Users with Team + Personal orgs want CLI `/login` and `/usage` to respect org switching, mirroring Desktop app behavior (#48460).
- **Accessibility & Keyboard Customization:** Requests for visible/customizable keyboard shortcuts (#48482) and quieter startup banners (#48436) indicate growing demand for developer-ergonomic terminal UX.

## Developer Pain Points

- **Throttling & Rate Limit Opaqueness:** The top recurring frustration. Users (especially Max subscribers) discover they've hit limits only when requests fail. The demand for in-status-line quota data is a direct response to this pain.
- **Session Reliability for Long-Running Agents:** Mid-session re-authentication kills autonomous workflows. Combined with throttling, this makes Claude Code unreliable for unattended batch processing.
- **Duplicate Bug Reporting Fatigue:** Today's issue list is dominated by duplicate reports, suggesting either a major regression that hit many users simultaneously or insufficient communication about known issues. The closed-as-duplicate pattern (30+ issues from April 15 alone) points to a rough release cycle.
- **Windows Experience Disparity:** Multiple Windows-specific bugs (silent launch failure, DPI scaling issues, font problems, WSL banner spam) suggest Windows QA continues to lag behind macOS.
- **Structured Output Asymmetry:** `stream-json` output differences between foreground/background sub-agents (#48439) and self-messages misattributed to users (#48443) erode trust for programmatic/CI use cases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-26

## Today's Highlights

The Codex ecosystem is in a turbulent period following the **26.422 release**, with multiple critical regressions on macOS and Windows affecting startup, memory, and GPU usage. The community is actively demanding **1M token context support for GPT-5.5**, while the engineering team is pushing a major **permissions system refactor** across a stacked PR chain. Two Rust alpha releases (v0.126.0-alpha.2 and .3) landed in the last 24 hours.

---

## Releases

- **`rust-v0.126.0-alpha.2`** and **`rust-v0.126.0-alpha.3`**: Two successive Rust crate releases published within the same day — the `.3` tag supersedes `.2`. No changelog details are available beyond the version bump; likely hotfixes for earlier regressions or dependency updates.

---

## Hot Issues

1. **[#16231 — High CPU usage on macOS after updating Codex VS Code extension to 26.325.31654](https://github.com/openai/codex/issues/16231)**  
   *Community: 58 👍, 62 comments* — The top-voted open issue. User reports severe CPU and temperature spikes on Apple Silicon (M5 Pro, macOS Tahoe). Has been open for nearly a month, indicating no fix has shipped yet. A must-fix for macOS users.

2. **[#19464 — Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)**  
   *Community: 43 👍, 37 comments* — Users want parity with the API's 1M token window; Codex currently caps at 400K. This is the most-requested enhancement. High engagement suggests strong demand for large-context workflows.

3. **[#19585 — Pro weekly usage limit depletes unusually fast on GPT-5.5](https://github.com/openai/codex/issues/19585)**  
   *10 comments* — Several Pro ($200) subscribers report the weekly limit burning through faster than expected, linked to unstable context compaction. Could indicate a billing/accounting bug or aggressive re-compaction triggering extra token consumption.

4. **[#18755 — macOS packaging error: SkyComputerUseClient crashes on macOS 14.x](https://github.com/openai/codex/issues/18755)**  
   *Community: 28 👍, 11 comments* — The app is built against macOS 15.0 SDK but crashes on macOS 14.x systems. Blocks users on older macOS from using Computer Use features. A packaging CI gap.

5. **[#18341 — Mac app shows persistent blurred/translucent overlay on Intel Mac](https://github.com/openai/codex/issues/18341)**  
   *9 comments* — UI rendering bug in the Codex desktop app on Intel Macs (macOS 15.0.1). Likely a Metal/compositor regression in the version 0.122.0-alpha.1 release.

6. **[#19220 — Codex macOS startup failure: unsupported feature enablement `workspace_dependencies`](https://github.com/openai/codex/issues/19220)**  
   *17 comments* — App fails to start after update on macOS. The renderer pushes an unsupported feature flag in a tight retry loop. Related to #19682 (same root cause). Likely a config schema mismatch between app and server.

7. **[#19423 — Codex Desktop IAB cannot inspect external pages on Windows](https://github.com/openai/codex/issues/19423)**  
   *9 comments* — In-app browser backend fails because `app-server` won't start on Windows. Blocks web inspection workflows for Windows users entirely.

8. **[#19558 — Desktop GPT-5.5 remote compaction fails, thread becomes unusable](https://github.com/openai/codex/issues/19558)**  
   *8 comments* — After switching to GPT-5.5, remote context compaction fails permanently, requiring a new thread. No recovery path. Critical for heavy context users.

9. **[#19181 — Newest VS Code extension makes Codex flash and blink on Windows](https://github.com/openai/codex/issues/19181)**  
   *9 comments* — UI flickering/rendering loop after installing the latest VS Code extension update. Likely a rendering thread deadlock or layout invalidation race.

10. **[#19381 — Windows app/VS Code extension memory usage climbs above 10GB](https://github.com/openai/codex/issues/19381)**  
    *3 comments* — Post-26.422 update, memory climbs to >10GB on Windows. User reports v26.421 was fine. Potential memory leak in context compaction or thread state management.

---

## Key PR Progress

1. **[#19650 — Verify agent identity JWTs](https://github.com/openai/codex/pull/19650)**  
   *Author: efrazer-oai* — Adds signed JWT verification for agent identity auth. Reads `CODEX_AGENT_IDENTITY`, fetches JWKS from backend, and validates tokens at runtime. Hardens security for agent-to-agent authentication.

2. **[#19537 — Fix plugin MCP approval policy](https://github.com/openai/codex/pull/19537)**  
   *Author: mzeng-openai* — Plugin MCP servers now store tool approval preferences under the owning plugin config instead of top-level `[mcp_servers]`. Fixes "Always allow" writing to a non-authoritative location.

3. **[#19058 — Add /auto-review-denials retry approval flow](https://github.com/openai/codex/pull/19058)**  
   *Author: won-openai* — New TUI surface for retrying auto-review denials. Users can now select a recent denial and re-submit approval context without manually restating intent.

4. **[#19683 — Harden app-server integration tests](https://github.com/openai/codex/pull/19683)**  
   *Author: bolinfest* — Fixes Windows Bazel CI flakiness by preventing plugin warmup network calls (`/backend-api/plugins/featured`) in tests that don't exercise plugin startup. Reduces false CI failures.

5. **[#19395 — Finish profile-backed app surfaces](https://github.com/openai/codex/pull/19395)**  
   *Author: bolinfest* — Migrates remaining user-facing UI to use `PermissionProfile`, removing legacy `SandboxPolicy` projections. Ensures `External` and `Disabled` modes display correctly.

6. **[#19394 — Remove core legacy policy round trips](https://github.com/openai/codex/pull/19394)**  
   *Author: bolinfest* — Eliminates unnecessary conversions between `PermissionProfile` and `SandboxPolicy` in execution paths. Fixes potential loss of split-filesystem semantics.

7. **[#19393 — Migrate approval and sandbox consumers to profiles](https://github.com/openai/codex/pull/19393)**  
   *Author: bolinfest* — Core runtime decisions now use `PermissionProfile` directly. Prevents `Disabled` vs `External` collapse before approval dialogs.

8. **[#19392 — Derive compatibility policies from profiles](https://github.com/openai/codex/pull/19392)**  
   *Author: bolinfest* — Ensures profile-driven policies (deny globs, external enforcement, split filesystem) cannot drift from cached legacy projections. Eliminates parallel storage risk.

9. **[#19610 — Support end_turn in response.completed](https://github.com/openai/codex/pull/19610)**  
   *Author: andmis* — Respects model-defined `end_turn` boolean from Responses API providers. Lets the model explicitly signal turn completion vs. requesting re-inference. Improves turn management accuracy.

10. **[#17362 — Add waypoints: multi-host remote execution](https://github.com/openai/codex/pull/17362)**  
    *Author: nlieb-oai* — Adds a shared multi-host execution registry for Codex sessions, with an SSH-backed host backend. Allows per-invocation `host_id` selection. Merged — major infrastructure addition.

---

## Feature Request Trends

1. **GPT-5.5 1M token context** — The single most-requested feature across issues and comments. Users want parity with the API's 1M window (currently 400K in Codex). [#19464](https://github.com/openai/codex/issues/19464)

2. **Reasoning summary visibility** — Multiple users want thinking/reasoning block display in the macOS app, similar to the CLI and IDE. [#10723](https://github.com/openai/codex/issues/10723)

3. **Customizable `.codex` config location** — CLI users request the ability to configure where project-scoped settings are stored, for monorepo and multi-root workspace support. [#18334](https://github.com/openai/codex/issues/18334)

4. **Fairer rate limit accounting** — Recurring requests for rate limits to be more competitive with Claude Code, and for the weekly/5-hour gap to be meaningful rather than near-identical. [#4217](https://github.com/openai/codex/issues/4217)

5. **MCP tool injection reliability** — Users want MCP servers that register correctly to have tools reliably injected into all threads, not just the first session. [#19649](https://github.com/openai/codex/issues/19649)

---

## Developer Pain Points

- **Release quality regressions are frequent** — Every recent major update (26.325, 26.422) introduces blocking issues: high CPU, memory leaks, startup failures, UI flickering. The community is frustrated by the lack of pre-release validation, especially on Windows and Intel Mac.

- **macOS is the most fragile platform** — Issues #16231, #18341, #18755, #19220, #19682 all affect macOS. Problems range from rendering bugs to startup failures to CPU thermal throttling. The platform-specific packaging/build system appears under-tested.

- **Context compaction is unreliable** — Multiple reports (#19558, #19585) of compaction failing or causing thread corruption, particularly after switching to GPT-5.5. No recovery path exists; users must abandon threads.

- **Pro tier billing concerns** — Issue #19585 signals growing unease that Pro subscribers are burning through limits faster than expected. If this is not a bug, the community expects clearer documentation on usage accounting for GPT-5.5.

- **Windows remains a second-class citizen** — Windows-specific issues (#19423, #19381, #19181, #15975) block core workflows (IAB, memory stability, extension loading). The gap between macOS and Windows support quality is widening.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-26

## Today's Highlights
The repository saw no new releases but maintained steady activity across **50 open issues** and **31 open PRs**. Key themes emerging include **AST-aware codebase mapping**, **subagent reliability and recovery**, and **permission/approval mode hygiene**. Several maintainer-only issues focused on memory routing, evaluation stability, and tool repair infrastructure continue to progress.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   A major EPIC exploring whether AST-aware tools (e.g., tilth/glyph) can reduce token noise, improve method-bound precision, and enhance codebase_investigator. Community interest is moderate (👍1).

2. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   Critical bug where `codebase_investigator` reports success after hitting max turns, hiding interruptions. This directly undermines trust in agent status reporting. (👍2, 4 comments)

3. **[#24916 — CLI repeatedly asks for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)**  
   Persistent permission prompt bug where "allow for all future sessions" doesn't stick. High UX friction for Windows users. (3 comments)

4. **[#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   CLI hangs after simple shell commands finish, falsely showing "awaiting user input." Reproducible with trivial commands. (👍3, 2 comments)

5. **[#23571 — Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**  
   When restricted to shell execution, the model scatters edit scripts across directories, creating cleanup overhead. (2 comments)

6. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   Global/project-level `settings.json` values like `maxTurns` are completely ignored by the Browser Agent despite correct AgentRegistry merging. (2 comments)

7. **[#25216 — Gemini failed to open in a temporary path A:\](https://github.com/google-gemini/gemini-cli/issues/25216)**  
   Windows-specific crash: `EISDIR` error on `realpath 'A:\a'` when using `--yolo` in PowerShell. Path resolution issue.

8. **[#24202 — Running SSH causes scrambled text display](https://github.com/google-gemini/gemini-cli/issues/24202)**  
   Windows SSH to gLinux cloudtop produces garbled terminal output; CLI becomes unusable. No fix yet. (1 comment)

9. **[#23582 — Subagents lack awareness of active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582)**  
   Subagents try actions blocked by Plan Mode or Auto-Edit Mode. Policy Engine blocks them, but subagent instructions/tools don't reflect constraints. (👍1)

10. **[#22819 — Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)**  
    Proposal for the memory subagent to route preferences (`~/.gemini/`) vs. project-specific data (`.gemini/`). High demand (👍2).

## Key PR Progress

1. **[#26005 — Fix infinite dialog loop and add ESC key support in /skills link command](https://github.com/google-gemini/gemini-cli/pull/26005)**  
    Fixes a blocking dialog that doesn't dismiss after "Yes"/"No" selection. Adds ESC key support for dismissal. (Submitted today)

2. **[#25072 — Implement favorite models and model cycling](https://github.com/google-gemini/gemini-cli/pull/25072)**  
    Adds `model.favorites` setting and keyboard shortcuts to cycle through starred models. Addresses #20227.

3. **[#25060 — Add shortcuts to open @ mentions in editor or file browser](https://github.com/google-gemini/gemini-cli/pull/25060)**  
    `Ctrl+X` to open file in editor, `Ctrl+Shift+X` to open in file browser from the `@` mention list.

4. **[#25947 — Versioned pre-write backups with agent-driven restore](https://github.com/google-gemini/gemini-cli/pull/25947)**  
    Robust transactional file backup system to recover from destructive modification loops. Session-scoped rollback support.

5. **[#25190 — Defense techniques fix for RAG injection](https://github.com/google-gemini/gemini-cli/pull/25190)**  
    Adds a validation sandbox to filter retrieved context before LLM processing, blocking prompt injection in RAG workflows.

6. **[#24277 — Self-contained Dockerfile with multi-stage build](https://github.com/google-gemini/gemini-cli/pull/24277)**  
    Fixes Docker build on clean `git clone` without requiring pre-built host artifacts. Multi-stage build compiles inside container.

7. **[#25999 — Bypass browser authentication in yolo mode](https://github.com/google-gemini/gemini-cli/pull/25999)**  
    Handles browser-less environments (Termux, remote servers) by skipping browser-based OAuth when in yolo mode.

8. **[#25963 — Expand env vars in MCP stdio args](https://github.com/google-gemini/gemini-cli/pull/25963)**  
    Fixes `${DISCORD_TOKEN}`-style placeholders in MCP server stdio args not being expanded; now consistent with explicit env entries.

9. **[#25958 — Implement signal forwarding in relaunchAppInChildProcess](https://github.com/google-gemini/gemini-cli/pull/25958)**  
    Ensures `SIGTERM`, `SIGINT`, `SIGHUP`, `SIGUSR2` reach the child CLI process, fixing orphan process issues. Fixes #25590.

10. **[#25959 — Tool repair and continuation auto-recovery](https://github.com/google-gemini/gemini-cli/pull/25959)**  
    Fuzzy matching for misspelled tool names and auto-recovery for legacy agent sessions. Improves reliability without user intervention.

## Feature Request Trends
- **AST-aware codebase tools**: Growing demand for AST-based file reading, method extraction, and codebase mapping to reduce context noise and improve precision (#22745, #22746).
- **Memory routing (global vs. project)**: Users want the memory subagent to distinguish personal preferences from project-specific conventions (#22819, #22809).
- **Favorite/cycling models**: Users frequently request the ability to mark models as favorites and quickly switch between them, indicating mature workflow needs (#25072, #20227).
- **Approval mode awareness**: Multiple issues call for subagents to understand and respect active modes (Plan Mode, Auto-Edit) rather than relying solely on the Policy Engine to block invalid actions (#23582).

## Developer Pain Points
- **Permission and trust prompts are sticky**: Repeated permission requests and trust-mismatch restart loops remain common friction points (#24916, #25163).
- **SSH and terminal rendering breakage**: Scrambled text under SSH, thick black borders, and corrupted terminal buffers after external editor exit affect Windows/remote developers (#24202, #24915, #24935).
- **Subagent reliability gaps**: False "success" reports after max turns, ignoring settings overrides, and lack of mode awareness undermine trust in autonomous agents (#22323, #22267, #23582).
- **Workspace cleanup overhead**: The model's tendency to scatter temp scripts and edit files across random directories creates manual cleanup burden for clean commits (#23571).
- **Platform-specific crashes**: Windows `A:\` path resolution errors and Docker builds failing on clean clones point to cross-platform testing gaps (#25216, #24277).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-26

---

## Today's Highlights

The community is experiencing significant friction with **Autopilot infinite loops** that drain premium requests, with two fresh reports surfacing today alone (#2881, #2374). On the feature front, demand is heating up for **per-repository MCP server configuration** (#2528) and **full slash command support in ACP** (#2555). A new triage issue (#2978) flags a corporate proxy bug in the SDK headless mode, and a skills loading regression (#2977) was reported just hours ago.

## Releases

No new releases in the last 24 hours. The latest available version remains **v1.0.12** (noted in recent bug reports).

---

## Hot Issues

1. **#2393 – Model entitlement mismatch (Claude in Copilot CLI)**  
   *Opened by LiShiPeng-666*  
   Users with access to Claude models in VS Code and GitHub.com see them only as "Upgrade" in CLI. Long-running thread (10 comments) exposes a persistent enterprise licensing gap.  
   [Link](https://github.com/github/copilot-cli/issues/2393)

2. **#2374 – Autopilot infinite loop (agentic tasks)**  
   *Opened by Jorge-Torselli*  
   After approving a plan, the agent loops indefinitely printing "Thinking…" without completion. High priority for anyone relying on autonomous mode.  
   [Link](https://github.com/github/copilot-cli/issues/2374)

3. **#2881 (DUPLICATE) – Autopilot infinite loop draining premium requests**  
   *Opened by mohamed-ammara*  
   Each iteration consumes a premium request. Only manual cancellation stops it. This is the second report of the same class of bug in days.  
   ✅ Upvoted by community.  
   [Link](https://github.com/github/copilot-cli/issues/2881)

4. **#1281 (CLOSED) – Focus stealing during multi-step agent tasks**  
   *Opened by rbroggi*  
   Terminal forcibly takes window focus during long-running tasks. Closed with 9 upvotes—community was vocal about UX disruption.  
   [Link](https://github.com/github/copilot-cli/issues/1281)

5. **#2528 – Per-repository MCP server configuration**  
   *Opened by nunocorreiavargas*  
   Currently MCP servers are user-level only. Feature request for `.github/mcp.json` by analogy with `.github/copilot-instructions.md`. Strong demand (5 upvotes).  
   [Link](https://github.com/github/copilot-cli/issues/2528)

6. **#2977 – Skills not loading in latest version**  
   *Opened by gkorland*  
   Fresh bug: `~/.claude/skills` and `~/.copilot/skills` ignored entirely after update. Regressive behavior, 1 upvote within hours.  
   [Link](https://github.com/github/copilot-cli/issues/2977)

7. **#2978 (TRIAGE) – `session.create` fails behind corporate proxy**  
   *Opened by mohan3006*  
   Using SDK v0.3.0 / CLI v1.0.36 in headless mode behind proxy. `undici` standalone works; CLI subprocess does not. Enterprise blocker.  
   [Link](https://github.com/github/copilot-cli/issues/2978)

8. **#2719 – Suppress terminal beep via CLI option**  
   *Opened by DamianEdwards*  
   Currently beep control is config-only. Requesting `--beep=false` flag for per-invocation suppression. Minor but ergonomic.  
   [Link](https://github.com/github/copilot-cli/issues/2719)

9. **#1909 (CLOSED) – GPT-5.4 confused by SQL todo list**  
   *Opened by GryBsh*  
   LLM falsely believes completed tasks are done. Community note: self-consistency issue with the model, not CLI internals.  
   [Link](https://github.com/github/copilot-cli/issues/1909)

10. **#2974 – No access to Pro+ models despite subscription**  
    *Opened by gw0ods*  
    Paid users cannot see Pro+ models in CLI. Related to broader model availability issues (#2393).  
    [Link](https://github.com/github/copilot-cli/issues/2974)

---

## Key PR Progress

No pull requests were updated in the last 24 hours. The repository remains in a low-merge window. Community focus is on issue triage and bug reporting.

---

## Feature Request Trends

- **Per-repository MCP server configuration** (#2528) — Strong demand (5 upvotes) to match existing `.github` conventions for instructions and LSP.
- **Full slash command support in ACP** (#2555) — CLI currently advertises incomplete commands via the Agent Communication Protocol. 3 upvotes.
- **Master instructions file** (#2976, CLOSED) — Request for system-level instructions enforced across all sessions. Direct user request to combat prompt drift.
- **Beep suppression CLI flag** (#2719) — Per-invocation control over terminal beep for automation/focus-sensitive workflows.

---

## Developer Pain Points

- **Infinite loops in Autopilot** — Two reports (#2374, #2881) with identical pattern: plan approved → infinite thinking/draining premium requests. Critical stability concern for agentic workflows.
- **Model entitlement confusion** — Multiple issues (#2393, #2974) where paid Copilot subscriptions fail to surface available models in CLI, despite working in VS Code/web. Enterprise licensing clarity needed.
- **Skills loading regression** — #2977 suggests a recent update broke loading from standard skill directories. No version noted, but high impact.
- **Corporate proxy incompatibility** — #2978 shows SDK headless mode fails where standalone `undici` succeeds. Enterprise adoption blocker.
- **MPC transport for sub-agents** — #2892: agent-launched MCP servers close after ~4 seconds while LLM is still generating. Broken for multi-turn tool use.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-26

## Today's Highlights
The community is experiencing a **critical K2.6 model overload issue** (#2077) that renders the latest CLI unusable under normal load, triggering widespread concern. On the codebase side, a major **git worktree isolation feature** (#2073, #2076) is nearing completion, alongside a **new Tauri-based desktop client** (#2079). Additionally, the long-running **`/usage` color inversion bug** (#2019) has finally been fixed and closed after multiple independent PRs.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#2077] [OPEN] K2.6 model overloaded – unusable under normal load**  
   `Critical` `bug`  
   *Author: Shtef-Inta* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2077)  
   The latest CLI with K2.6 model constantly retries and fails under normal usage. The user is on an Allegretto membership (paid tier) and Apple Silicon. With 4 comments already, this is the highest-severity issue today — if reproduction is widespread, it blocks all users dependent on K2.6.

2. **[#2019] [CLOSED] Wrong usage color**  
   `bug`  
   *Author: sunmy2019* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2019)  
   The `/usage` command displayed inverted colors — green when near quota exhaustion, red when plenty left. This cosmetic but confusing bug attracted 3 separate pull requests (#1411, #2039, #2046) before being resolved. Good demonstration of community QA polish.

3. **[#2017] [OPEN] Conversation cannot continue with large context**  
   `bug`  
   *Author: shumyun* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2017)  
   On Windows 10 x64, long conversations hit "Service temporarily unavailable" errors with JSON response bodies. Likely a context window management or backend timeout issue. Only 1 comment so far — may need more reproduction details.

---

## Key PR Progress

1. **[#2080] [OPEN] fix(web): ToolInput show diff content, not raw JSON string**  
   *Author: 21paradox* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2080)  
   Improves the web UI by rendering tool inputs as readable diffs instead of raw JSON. A UX refinement for developers reviewing tool output inline.

2. **[#1411] [CLOSED] fix(ui): correct usage bar color logic**  
   *Author: xbotter* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1411)  
   First fix for the inverted `/usage` colors — passed usage ratio instead of remaining ratio to the color helper. Resolves the long-standing color logic inversion.

3. **[#2046] [CLOSED] fix(ui): flip /usage gauge color thresholds**  
   *Author: he-yufeng* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2046)  
   Alternative approach to fix #2019 — flipped the threshold logic in the remaining-fraction calculation. Merged along with other fixes.

4. **[#2039] [CLOSED] fix(shell): correct /usage remaining quota colors**  
   *Author: binichallein* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2039)  
   Third concurrent fix for #2019, also adjusting thresholds for remaining ratio. Demonstrates the community's parallel debugging energy.

5. **[#2078] [CLOSED] fix(shell): correct /usage remaining quota display**  
   *Author: wbxl2000* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2078)  
   A comprehensive fix ensuring progress bar fill, label, and colors all use remaining ratio consistently. Acknowledges prior PRs — clean closure of the saga.

6. **[#2079] [OPEN] feat(desktop): add Tauri shell that spawns kimi web**  
   *Author: cal-gooo* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2079)  
   A native Tauri 2 desktop wrapper that spawns the web UI on an ephemeral port with auth tokens. Major step toward a standalone desktop app, leveraging Rust for process management and security.

7. **[#2076] [OPEN] feat(web): worktree UI for isolated sessions**  
   *Author: cal-gooo* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2076)  
   Exposes the git worktree feature (#2073) in the web UI — allows creating, viewing, and auto-reaping worktree-backed sessions. Stacked on #2073.

8. **[#2073] [OPEN] feat(cli): add git worktree support for isolated sessions**  
   *Author: cal-gooo* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2073)  
   Adds `--worktree` / `-W` flag to create a new git worktree per session. Enables parallel sessions on the same repo without file conflicts — a highly requested capability for multi-branch developers.

9. **[#2075] [OPEN] feat(web): show running indicator for active sessions**  
   *Author: cal-gooo* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2075)  
   Adds a subtle "alive" indicator in the sidebar for currently running sessions. Small UX improvement that helps users avoid opening idle or completed sessions.

10. **[#1960] [OPEN] feat(soul): RalphFlow architecture with ephemeral context**  
    *Author: ORDL-AMF* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1960)  
    A sophisticated iteration framework to prevent infinite loops in the agent. Introduces ephemeral context files and convergence detection — significant for reliability of multi-step workflows.

---

## Feature Request Trends

- **Worktree-based parallel sessions** (#2073, #2076): The community strongly wants to run multiple Kimi sessions on the same repo without file conflicts. The worktree feature directly addresses this.
- **Desktop native client** (#2079): A clear push toward a standalone desktop application using Tauri, replacing the current terminal+web hybrid experience.
- **Agent iteration control** (#1960): Users want safeguards against infinite agent loops. The RalphFlow architecture aims to provide convergence detection and ephemeral contexts.
- **Web UI polish** (#2080, #2075): Ongoing demand for better visual feedback — readable diffs, session status indicators — as users shift more work to the web interface.

---

## Developer Pain Points

- **K2.6 model reliability** (#2077): The paid Allegretto membership does not guarantee stable access under normal load. This is a **critical trust issue** — if the flagship model is flaky, users will switch to other tools.
- **Context window size/length limitations** (#2017): Long conversations hit silent service errors with opaque JSON responses. No clear error messages or recovery paths.
- **Color inversion confusion** (#2019): The `/usage` bar showing green when near exhaustion was a minor but recurring source of confusion. Ironically, the community embraced this as a collaborative debugging exercise.
- **Proxy/vpn environment friction** (#1896 closed): HTTP proxy support required a manual `trust_env=True` fix. While resolved, it highlights that enterprise/corporate users remain underserved in the default configuration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-26

## Today's Highlights
A major infrastructure push is underway with Kit Langton contributing a stack of five HTTP API bridge PRs, signaling official HTTP API stabilization. Bug-fixing momentum is strong, with Alfredo Cristofano landing fixes for silent error swallowing (30+ catch blocks) and lock concurrency issues. The most active feature requests continue to center on multi-account OAuth support, VS Code extension, and configurable context compaction.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#11830 — Multi-Account OAuth Support with Auto-Relogin**  
   *Author: mguttmann | Comments: 19 | 👍 16*  
   The top-voted feature request this month. As single-account rate limits block workflows, the community strongly supports automatic credential rotation and browser-based session management.  
   [GitHub](https://github.com/anomalyco/opencode/issues/11830)

2. **#11176 — Official OpenCode VS Code Extension**  
   *Author: c2b247 | Comments: 15 | 👍 56*  
   With 56 upvotes, this is the single most popular request. Users want native editor integration rather than TUI or terminal-only workflows.  
   [GitHub](https://github.com/anomalyco/opencode/issues/11176)

3. **#11314 — Configurable Context Compaction Threshold**  
   *Author: WietRob | Comments: 14 | 👍 19*  
   The hardcoded 75% compaction trigger is causing frustration as different models degrade differently. Users want per-model thresholds and alternative compaction models.  
   [GitHub](https://github.com/anomalyco/opencode/issues/11314)

4. **#12472 — Native Claude Code Hooks Compatibility**  
   *Author: ArtyMcLabin | Comments: 12 | 👍 19*  
   After supporting Claude Code rules and skills, the community demands `PreToolUse`, `PostToolUse`, and `Stop` hooks. This would unlock sophisticated agent workflows.  
   [GitHub](https://github.com/anomalyco/opencode/issues/12472)

5. **#10986 — Standard Skills Location at `.agents/skills/`**  
   *Author: samal-rasmussen | Comments: 13 | 👍 12*  
   Alignment with the agent skills standard. The community is pushing for interoperability with the broader agent ecosystem rather than proprietary paths.  
   [GitHub](https://github.com/anomalyco/opencode/issues/10986)

6. **#11439 — Parse `<think>` Tags as Reasoning Blocks**  
   *Author: DevSissi | Comments: 12 | 👍 15*  
   Regression in v1.1.57 broke support for `<think>` tag parsing. Users running custom providers need this for models without native extended thinking.  
   [GitHub](https://github.com/anomalyco/opencode/issues/11439)

7. **#23907 — Model Executed `.cmd` Script Despite `Ask` Permission**  
   *Author: BoringBoredom | Comments: 6 | 👍 0*  
   Critical security bug: shell execution bypasses the `Ask` permission setting on Windows. A serious trust-breaker for security-conscious users.  
   [GitHub](https://github.com/anomalyco/opencode/issues/23907)

8. **#11831 — YOLO Mode: Auto-Approve All Permissions**  
   *Author: mguttmann | Comments: 6 | 👍 20*  
   Power users want to skip every permission prompt while still respecting explicit deny rules. Tension between security and workflow speed is a recurring theme.  
   [GitHub](https://github.com/anomalyco/opencode/issues/11831)

9. **#12438 — Claude Opus 4.6 Context Window Still Limited to 200k**  
   *Author: Davincible | Comments: 5 | 👍 15*  
   Manually updating config doesn't fix context window limits. Users expect native support for the expanded 500k+ context window of newer Claude models.  
   [GitHub](https://github.com/anomalyco/opencode/issues/12438)

10. **#24334 — DeepSeek Reasoning Content Must Be Passed Back**  
    *Author: agarwalbikram | Comments: 4 | 👍 1*  
    Fresh bug: thinking mode breaks with DeepSeek because `reasoning_content` isn't preserved across API calls. Affects users relying on DeepSeek's reasoning.  
    [GitHub](https://github.com/anomalyco/opencode/issues/24334)

## Key PR Progress

1. **#24487–#24478 (x5) — HTTP API Bridge Stack**  
   *Author: kitlangton*  
   A stacked PR series bridging session lifecycle, read, sync, workspace mutations, and experimental session listing through the HTTP API. This is the clearest signal yet that the HTTP API is moving toward production readiness.  
   [PR #24487](https://github.com/anomalyco/opencode/pull/24487)

2. **#23738 — TUI Mouse-Drag Sidebar Resize**  
   *Author: eggfriedrice24*  
   Finally makes the right sidebar resizable via mouse drag instead of hardcoded to 42 chars. Closes long-standing UI flexibility request #6087.  
   [PR #23738](https://github.com/anomalyco/opencode/pull/23738)

3. **#24471 — Queued Message Editing, Cancellation, and Wrap-Up**  
   *Author: mortenfc*  
   Closes four issues. Users can now edit/cancel queued messages and define end-of-queue behavior. Major quality-of-life improvement for long-running sessions.  
   [PR #24471](https://github.com/anomalyco/opencode/pull/24471)

4. **#24330 — CI Workflow Fixes and Infra Migration**  
   *Author: alfredocristofano*  
   Fixes broken CI: non-existent `actions/checkout@v6`, repo rename (`sst/opencode` → `anomalyco/opencode`), and infrastructure tag deduplication. Keeps the build pipeline green.  
   [PR #24330](https://github.com/anomalyco/opencode/pull/24330)

5. **#24502 — Add Logging to Silent Catch Block**  
   *Author: alfredocristofano*  
   First fix from the silent error swallowing audit (see bug #24327). Adds `log.warn()` to a previously silent catch in workspace restore bootstrap.  
   [PR #24502](https://github.com/anomalyco/opencode/pull/24502)

6. **#24504 — Remove `any` Type from Catch Clause**  
   *Author: alfredocristofano*  
   Part of the code quality sweep: replaces `catch (e: any)` with proper `unknown` handling in `github.ts`. Aligns with project style guides.  
   [PR #24504](https://github.com/anomalyco/opencode/pull/24504)

7. **#21559 — Keep Wrapped Markdown Links Clickable**  
   *Author: HaleTom*  
   Fixes TUI rendering where wrapped markdown links lose hover/click capability. Closes #14966.  
   [PR #21559](https://github.com/anomalyco/opencode/pull/21559)

8. **#21033 — Deterministic Config/Resource Loading**  
   *Author: HaleTom*  
   Makes project command loading from `command/` and `commands/` deterministic with clear precedence rules. Closes #18987.  
   [PR #21033](https://github.com/anomalyco/opencode/pull/21033)

9. **#12822 — Proxy Directly to `process.env` Instead of Snapshotting**  
   *Author: jerome-benoit*  
   Fixes env staleness bugs by proxying to live `process.env` instead of snapshotting at init. Closes #22451.  
   [PR #12822](https://github.com/anomalyco/opencode/pull/12822)

10. **#24499 — Save Cloudflare Account/Gateway ID During Auth Login**  
    *Author: JoaquinGimenez1*  
    Fixes #24498: `opencode auth login` with cloudflare-ai-gateway now actually prompts for and saves Account ID and Gateway ID instead of just showing an info message.  
    [PR #24499](https://github.com/anomalyco/opencode/pull/24499)

## Feature Request Trends

- **Editor Integration** (most upvoted: 56 👍): Official VS Code and JetBrains extensions remain the single biggest unmet demand. The community sees OpenCode as a daily-driver tool that needs native editor integration.
- **Multi-Account & Rotation** (19 comments, 16 👍): Single OAuth account bottlenecks are a top frustration. Users want auto-credential rotation, failover, and provider-specific rate-limit management.
- **Context Awareness** (14–19 👍 per issue): Configurable compaction thresholds, per-model compaction models, and tool description token reduction are all variants of the same pain: context windows fill too fast without user control.
- **Platform Parity** (12–15 👍 per issue): Claude Code hooks, `.agents/skills/` standards, and Jupyter notebook support all point to a desire for OpenCode to match or exceed competitive tools' feature sets.
- **Power User Speed** (20 👍): YOLO mode for auto-approving permissions reflects a split community—new users need safety rails, but experienced users want zero interruptions.

## Developer Pain Points

- **Silent Error Swallowing**: Issue #24327 reveals ~30 empty `catch` blocks across the codebase. This was reported just yesterday and already has two fix PRs (#24502, #24504). Expect more cleanup PRs in coming days.
- **Windows Permissions Bypass**: Issue #23907 (no upvotes, but high severity) shows the `Ask` shell permission setting is not enforced on Windows `.cmd` scripts. Security-critical.
- **Session Persistence Confusion**: Multiple issues (#11680, #10592) show users struggling with CLI session syntax (`--continue --session`). Documentation and error messages need improvement.
- **Lock Contention Without Timeout**: Issue #24328 identifies that lock operations lack timeouts and have no eviction mechanism for stale locks. Production reliability concern.
- **DeepSeek Thinking Mode Broken**: Fresh issue #24334 shows `reasoning_content` not passed back to DeepSeek API, breaking the reasoning loop entirely. Affects all DeepSeek users on thinking mode.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-26

## Today's Highlights

A major provider compatibility push dominated the last 24 hours, with fixes landing for Fireworks Anthropic tool schema issues, DeepSeek V4 DSML reasoning preservation, and Claude model failures via Antigravity. The `closed-because-weekend` label was heavily applied as maintainers cleared a backlog of low-signal reports and pre-implemented feature requests, while a significant new feature—per-model request config—was proposed and merged in the same day. Community contributor `bhaskarmelkani` submitted four targeted TUI performance and cursor-handling PRs in a single batch.

## Releases

No new releases in the last 24 hours. The last tagged release remains v0.70.2, synced in PR #3718.

## Hot Issues

1. **[[#3208](https://github.com/badlogic/pi-mono/issues/3208)] Custom Thinking Levels per Model** (11 comments, 8 👍)
   High engagement feature request: allow models to declare their own thinking levels in `models.json` and expose via the extension API. Author wants to implement it themselves, suggesting strong community interest in model-specific UX.

2. **[[#2023](https://github.com/badlogic/pi-mono/issues/2023)] `pi.runWhenIdle()` scheduling** (8 comments)
   Long-running issue for agent tool developers: no official API to schedule work after the agent's action loop fully settles. The runtime reload example workaround is fragile. Marked `inprogress`.

3. **[[#3715](https://github.com/badlogic/pi-mono/issues/3715)] Local LLM streams terminate at 5 min—`bodyTimeout` ignored** (5 comments, 2 👍)
   Fresh bug affecting users of local backends like vLLM. The undici `bodyTimeout` cap at 5 minutes cannot be raised via `retry.provider.timeoutMs`. Impacts long `Write` tool calls; `local-llm` users are hitting a hard wall.

4. **[[#3563](https://github.com/badlogic/pi-mono/issues/3563)] Claude models fail via Antigravity: `const` unsupported in OpenAPI schema** (3 comments)
   Closed by PR #3561. Schema sanitization didn't handle `const` (OpenAPI 3.1 feature), which Claude passes in tool schemas. Blocked all Antigravity Claude usage; now resolved.

5. **[[#3325](https://github.com/badlogic/pi-mono/issues/3325)] Qwen3.6 tool calls loop with empty arguments** (3 comments)
   Caused by `qwen-chat-template` missing `preserve_thinking`. After 2-3 turns, tool calls arrive with empty `{}` args despite the model reasoning correctly. Closed as fixed.

6. **[[#3712](https://github.com/badlogic/pi-mono/issues/3712)] DeepSeek V4 via NVIDIA emits raw DSML tool calls as assistant text** (2 comments)
   DeepSeek V4 Flash through NVIDIA's endpoint leaks DSML markers into visible assistant text. Pi sometimes still parses structured calls afterward; community report suggests partial handling.

7. **[[#3730](https://github.com/badlogic/pi-mono/issues/3730)] `displayName` for extension-registered providers** (2 comments)
   Quality-of-life request: extension providers show raw `providerId` in `/login` instead of a friendly name. Built-in providers have `displayName`; the extension API lacks this field.

8. **[[#3728](https://github.com/badlogic/pi-mono/issues/3728)] Fireworks rejects `cache_control` on Anthropic tools** (2 comments)
   Fireworks' Anthropic-compatible API rejects `cache_control` in tool schemas. Addressed in PR #3678; `supportsCacheControl` flag proposal would let providers opt out of sending unsupported fields.

9. **[[#3713](https://github.com/badlogic/pi-mono/issues/3713)] Missing NTLM support** (2 comments)
   Enterprise network blocker: Pi logs "No Proxy-Authenticate, NTLM not supported?" while OpenCode works fine. Affects users behind corporate proxy authentication.

10. **[[#3763](https://github.com/badlogic/pi-mono/issues/3763)] deepseek-v4-pro Thinking Level xhigh(max) missing** (1 comment)
    Fresh regression: the highest thinking level for DeepSeek V4 Pro is absent from the available options, while GPT-5.4 shows it. Closed quickly, likely a model config gap.

## Key PR Progress

1. **[[#3561](https://github.com/badlogic/pi-mono/pull/3561)] fix(ai): convert `const` to `enum` in OpenAPI schema for Claude via Antigravity** (merged)
   Critical fix unblocking all Claude models on Antigravity/Cloud Code Assist. `const` is unsupported by OpenAPI 3.0.3; converted to `enum` for compatibility.

2. **[[#3678](https://github.com/badlogic/pi-mono/pull/3678)] fix(ai): honor Fireworks Anthropic tool compat** (open)
   Removes `cache_control` and other unsupported fields from Anthropic tool schemas when talking to Fireworks. Tackles the root cause of 400 errors for FW Anthropic-compatible endpoints.

3. **[[#3742](https://github.com/badlogic/pi-mono/pull/3742)] fix(ai): preserve DeepSeek reasoning after tool results** (merged)
   Completes the DeepSeek V4 Chat Completions replay fix: thinking blocks are now serialized into `reasoning_content` and cached across tool-result continuations. Essential for multi-turn agentic workflows.

4. **[[#3632](https://github.com/badlogic/pi-mono/pull/3632)] feat(coding-agent): add `persistModelChanges` setting** (merged)
   New setting (default: true) to prevent `/model` selections from overwriting `defaultProvider`/`defaultModel` in settings. Lets users experiment with models session-only.

5. **[[#3737](https://github.com/badlogic/pi-mono/pull/3737)] fix(ai): correct GPT-5.5 context metadata** (merged)
   Sets proper context windows for GPT-5.5 variants: 1,050,000 native, 400,000 Copilot route, 272,000 legacy Codex. Prevents overfilling context for newly discovered models.

6. **[[#3749](https://github.com/badlogic/pi-mono/pull/3749)] Allow per-model request config** (merged)
   Proposed and merged same day: `baseUrl`, `apiKey`, `headers`, `authHeader` now allowed on individual `models[]` entries. Enables gateway setups where different models route to different endpoints.

7. **[[#3716](https://github.com/badlogic/pi-mono/pull/3716)] feat(ai): add CrofAI provider** (merged)
   New built-in provider for CrofAI inference platform. Supports DeepSeek, MoonshotAI, GLM, Gemma, MiniMax, Qwen models with streaming, tool use, and vision.

8. **[[#3719](https://github.com/badlogic/pi-mono/pull/3719)] chore(models): regenerate models.generated.ts (adds github-copilot/gpt-5.5)** (merged)
   Model registry update: GitHub Copilot now serves `gpt-5.5`; picked up into the generated model list via `generate-models` script.

9. **[[#3714](https://github.com/badlogic/pi-mono/pull/3714)] perf(mom): parallelize thread message deletion** (merged)
   Replaces sequential loop with `Promise.allSettled` for thread cleanup. Benchmarked: 10 messages reduced from ~9s to ~1s with concurrent I/O.

10. **[[#3731](https://github.com/badlogic/pi-mono/pull/3731)] package-manager: query bun global modules path at runtime** (merged)
    Replaces hardcoded `~/.bun/install/global` with dynamic resolution via `bun pm ls -g`. Fixes module resolution on systems with custom bun install paths.

## Feature Request Trends

- **Per-model flexibility** dominates: custom thinking levels per model (#3208), per-model request config (#3750 → merged as #3749), and display names for extension providers (#3730) all aim to make models first-class, individually configurable entities rather than provider-level properties.
- **Session-scoped state management** is emerging: `persistModelChanges` (#3632) and exit code control for `ctx.shutdown` (#3726) show demand for better lifecycle control—users want temporary model switches and agent-controlled restarts without side effects.
- **Dynamic model discovery** (#3177) continues to receive support: fetching models from `/v1/models` APIs would replace the generated model list, a pattern already working for OpenCode/Zen.

## Developer Pain Points

- **Provider schema incompatibilities** are the #1 friction point: Anthropic tool schemas failing on Fireworks (#3728), Claude `const` rejected by Antigravity (#3563), and Qwen thinking templates breaking tool calls (#3325) all share the same root. The Fireworks Anthropic compat PR (#3678) is a template for the fix pattern needed across providers.
- **Network timeout and proxy gaps** frustrate enterprise users: undici's hard 5-minute `bodyTimeout` (#3715) cannot be configured and breaks long local inference; NTLM proxy support (#3713) is missing entirely, blocking corporate environments.
- **Streaming and TUI rendering noise** continues: issues #3756–#3759 (contributed by one developer) target redundant renders, viewport jumps (Kitty protocol, #3753), and scroll state loss during interactive sessions. The terminal UX still needs polish for production comfort.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-26

## Today's Highlights

v0.15.3 shipped yesterday with a significant runtime I/O optimization and new VS Code context menu actions for webview chat. The community is actively discussing two related DeepSeek V4 `reasoning_content` bugs that cause API 400 errors, while a new structured `/tasks` shell background pool PR landed that promises much-needed process lifecycle management.

## Releases

**v0.15.3** — [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.3)
- **feat(vscode):** Add native context menu copy actions for webview chat ([#3477](https://github.com/QwenLM/qwen-code/pull/3477))
- **perf(core):** Cut runtime sync I/O on tool hot path by 91% ([#3581](https://github.com/QwenLM/qwen-code/pull/3581))
- **feat(cli):** Add Traditional Chinese localization (truncated in data)

## Hot Issues (Top 10 by Activity)

1. **#3619 — DeepSeek V4 400 error: `reasoning_content` not passed back**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3619) | 7 comments  
   *Status: needs-triage* — Users hitting `reasoning_content must be passed back` when using DeepSeek V4 thinking mode. A companion PR (#3637) now fixes the assistant message merger that drops `reasoning_content`. High urgency for DeepSeek users.

2. **#3579 — DeepSeek API 400 conflict with previous fix for model-switch stripping**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3579) | 7 comments  
   *Status: OPEN* — Reopened because the fix for #3579 (preserving `reasoning_content`) conflicts with #3304 (stripping thought blocks on model switch). Community calling for a unified strategy.

3. **#3277 — MCP Client limited to 2 connections; breaks production multi-node**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3277) | 7 comments  
   *Severity: CRITICAL* — Production-blocking limitation: the MCP client hard-caps at 2 concurrent connections. Users report data loss risk and wasted engineering time. No triage response yet.

4. **#3520 — Tool ran without output or errors**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3520) | 6 comments  
   *Status: needs-triage* — Silent tool failures with no diagnostic output, making debugging impossible. Affects v0.14.5. Community frustrated by lack of error propagation.

5. **#2466 — Adding branching support for MCP**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/2466) | 6 comments  
   *Feature request* — User wants to organize MCP servers by project branch (e.g., different `localShell` configs per repo). Currently no branching mechanism exists.

6. **#3585 — Model pricing / cost tracking**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3585) | 5 comments  
   *Feature request* — Users want configurable per-model token pricing so `/stats model` can display estimated session costs. PR #3631 already implements this.

7. **#1105 — VS Code: Missing Accept Diff / Close Diff Editor commands**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/1105) | 5 comments  
   *Status: need-information* — Long-standing usability gap: these commands are invisible in the VS Code command palette, blocking standard diff workflows.

8. **#643 — Xcode integration fails: "[] is too short - 'tools'"**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/643) | 7 comments  
   *Priority: P1* — Year-old bug still open. Xcode users cannot use `qwen3-coder-plus` because the tools array validation rejects empty arrays.

9. **#3638 — Severe terminal flickering with sticky todo panel**  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3638) | 2 comments (new)  
   *Status: needs-triage* — v0.15.3 introduces a sticky "Current tasks" panel that causes blinding flicker during streaming, especially with long todo lists. Two fix PRs already submitted (#3646, #3647).

10. **#3641 — 401 invalid access token / token expired**  
    [GitHub](https://github.com/QwenLM/qwen-code/issues/3641) | 3 comments (new)  
    *Status: needs-triage* — Internal 401 errors despite valid credentials. May relate to token refresh logic.

## Key PR Progress (Top 10)

1. **#3642 — Managed background shell pool with `/tasks` command**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3642) | Author: @wenshao  
   Replaces the raw `&` backgrounding with a registry: list, query status, get output, terminate. Game-changer for long-running processes like `npm run dev`. Currently open for review.

2. **#3637 — Preserve `reasoning_content` in assistant message merger**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3637) | Author: @wenshao  
   Direct fix for #3619. Stops dropping `reasoning_content` when merging consecutive assistant messages. Critical for DeepSeek thinking mode.

3. **#3631 — Add model cost estimation to `/stats model`**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3631) | Author: @B-A-M-N  
   Implements #3585: configurable per-model pricing with `modelPricing` setting. Shows estimated session cost. No breaking changes.

4. **#3629 — API timeout env override (`QWEN_CODE_API_TIMEOUT_MS`)**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3629) | Author: @B-A-M-N  
   Adds env-based timeout override for slow local/OpenAI-compatible endpoints. Useful for self-hosted models.

5. **#3645 — Fix OPENAI_MODEL precedence without breaking `/model`**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3645) | Author: @B-A-M-N  
   Fixes a regression where `OPENAI_MODEL` env var incorrectly overrode `settings.model.name` set via `/model`.

6. **#3646 — Stabilize sticky todo redraws**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3646) | Author: @yiliang114  
   Fixes the flicker from #3638 by stabilizing the "Current tasks" panel during streaming updates.

7. **#3647 — Keep sticky todo panel compact**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3647) | Author: @shenyankm  
   Companion to #3646: limits visible todo items, renders single-line rows, adds overflow summary. Hides panel during inline `TodoWriter`.

8. **#3624 — Add API Key option to `qwen auth` interactive menu**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3624) | Author: @doudouOUC  
   Aligns CLI `qwen auth` with the interactive `/auth` command. Adds Alibaba Cloud ModelStudio and Custom API Key flows.

9. **#3618 — Fill slash commands on Enter instead of auto-submitting**  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/3618) | Author: @yiliang114  
   VS Code companion: skill/custom commands that accept arguments now fill into input box on Enter. No-arg builtins still auto-submit. Better UX for discovery.

10. **#3643 — Add Catalan language support**  
    [GitHub](https://github.com/QwenLM/qwen-code/pull/3643) | Author: @jordimas  
    Complete Catalan translation of CLI interface. Configurable via `/settings` or `/language`.

## Feature Request Trends

- **Cost transparency & billing:** #3585, PR #3631 — Users want per-model token pricing with `/stats model` cost display. Strong community interest.
- **MCP branching & lifecycle:** #2466, #3277 — Users want project-scoped MCP server configurations and removal of the 2-connection hard cap.
- **Session management:** PR #3190 — Add `/chat` commands for saving, listing, resuming, and deleting named sessions.
- **Concurrency control:** PR #3636 — Per-provider request concurrency caps to handle 429 rate limits gracefully.
- **TLS flexibility:** PR #3635 — `--insecure` flag and `QWEN_TLS_INSECURE` env var for self-signed endpoints in dev/lab environments.
- **Sub-agent control:** PR #3471 — Allow parent agents to query live transcripts, send messages, and stop sub-agents mid-flight.

## Developer Pain Points

- **DeepSeek V4 thinking mode incompatibility** (#3619, #3579) — Dual bugs causing 400 errors on `reasoning_content`. The conflict between model-switch stripping and thinking mode preservation remains unresolved.
- **MCP production limitations** (#3277) — 2-connection hard cap is a showstopper for multi-node deployments with no workaround.
- **Silent tool failures** (#3520) — Tools execute without output or error, making debugging nearly impossible.
- **High memory usage** (#3326) — Users reporting 7 GB+ usage without clear diagnostics. Related to #3000 (memory diagnostics feature request).
- **Token persistence issues** (#3417, #3641) — API keys and tokens not reliably persisted across restarts, requiring re-entry.
- **Non-Qwen model degradation** (#3464) — Third-party models (GLM-5, etc.) perform significantly worse with Qwen Code's system prompt, with users suspecting prompt injection or tool-call optimization bias.
- **Xcode integration broken** (#643) — Year-old P1 bug with no resolution, blocking entire Apple ecosystem users.
- **Code review lag** (#3182) — AI reads stale code context even after file modifications, requiring new conversations to refresh.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*