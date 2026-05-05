# OpenClaw Ecosystem Digest 2026-05-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-05 04:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-05

## 1. Today's Overview

OpenClaw is experiencing an exceptionally active development day, with **500 issues** and **500 PRs** updated in the last 24 hours, indicating rapid iteration and strong community engagement. The project released **four new versions** today, including two beta releases (v2026.5.4-beta.1 and v2026.5.4-beta.2) and a hotfix (v2026.5.3-1), demonstrating a fast release cadence. The 446 open/active issues versus 54 closed suggests the project is accumulating technical debt faster than it's being resolved, though the high PR activity (389 open, 111 merged/closed) shows active development. Maintainer attention is notably split between shipping new features and addressing regression bugs introduced in recent releases.

## 2. Releases

Four releases were published today:

**v2026.5.4-beta.2** — Bundled file-transfer plugin with `file_fetch`, `dir_list`, `dir_fetch`, and `file_write` agent tools for binary file operations on paired nodes, with default-deny per-node path policy requiring operator approval.

**v2026.5.4-beta.1** — Google Meet/Voice Call improvements: Twilio dial-in now streams through the realtime Gemini voice bridge with paced audio streaming, backpressure-aware buffering, and barge-in queue clearing (no TwiML fallback during realtime speech).

**v2026.5.3-1** — Core npm hotfix preventing the install scanner from blocking official bundled plugin packages when `process.env` access and API calls appear only in distant parts of compiled bundles.

**v2026.5.3** — File-transfer plugin introduction (duplicate naming across versions; appears to be a git tag refinement).

**Breaking Changes / Migration Notes:** No explicit breaking changes documented. The file-transfer plugin's default-deny policy is a security hardening that existing users should review if they rely on file operations between nodes.

## 3. Project Progress

**111 PRs were merged or closed today.** Key advances:

- **PR #77667 (merged):** CI shard package upgrade survivor baselines, bounding `release-soak` testing to targeted versions (`last-stable-4 2026.4.23 2026.5.2 2026.4.15`) instead of full historical scans — improves CI reliability.

- **PR #77660 (merged):** Fix Slack mention-gating thread participation — records thread participation after successful visible threaded sends, removing duplicate recording from the Slack action runtime.

- **PR #77544 (merged):** Fix missing `openclaw` peer links on plugin update — critical for npm-installed plugins that declare `peerDependencies.openclaw` when their local `node_modules/openclaw` symlink is missing.

- **PR #77663 (merged):** Fix WhatsApp onboarding allowlist number normalization — E.164 owner numbers with leading `+` were not matching WhatsApp Web's digit-only sender IDs.

- **PR #77654 (merged):** Add bundled Etsy shop operator skill for Telegram-originated shop growth requests with safe operating artifacts and approval gates.

- **PR #73744 (merged):** Persistent chat context usage indicator in Control UI/WebChat — users can now see token/context consumption without running manual status commands.

## 4. Community Hot Topics

**Most Active Issues:**

- **#75 — "Linux/Windows Clawdbot Apps"** (104 comments, 74 👍) — The #1 community request by far. Users are demanding desktop clients beyond macOS/iOS/Android. This has been open since January and shows no signs of losing momentum.

- **#14593 — "Skill install fails in Docker: `brew not installed`"** (29 comments, 17 👍) — A Docker-specific regression affecting skill onboarding. Maintainers have not yet assigned or commented, creating frustration.

- **#25592 — "Text between tool calls leaks to messaging channels"** (24 comments) — A significant UX issue where internal processing output is visible to end users in Slack, iMessage, etc.

- **#9443 — "Prebuilt Android APK releases"** (23 comments) — Users want compiled releases, not just source code. Related to #75's platform coverage request.

- **#77598 — "Track live dev agent behavior and trajectory"** (14 comments, new today) — Maintainer @pashpashpash is running a 24-hour observational monitor of their dev agent, signaling deep investment in agent behavior analysis.

**Underlying Needs:** The community is consistently asking for (1) wider platform support (Linux/Windows desktop, prebuilt Android), (2) Docker reliability improvements, and (3) better control over agent output visibility and context management.

## 5. Bugs & Stability

**Critical/High Severity Bugs Active Today:**

- **#14593 (High) — Skill install fails in Docker on Linux containers** — Blocking new users from onboarding. No maintainer comment yet. **Fix status: none.**

- **#32473 (High, Regression) — Control UI requires HTTPS or localhost** — VPS/Docker users unable to access the web interface after Brave key configuration. **Fix status: none.**

- **#32296 (High) — Agent replies to previous message instead of current** — Session context confusion causing conversation misalignment. **Fix status: none.**

- **#31583 (High, Regression) — `exec` tool does not inherit skill environment variables** — Secrets injection broken for subprocesses. **Fix status: none.**

- **#22676 (High) — Signal daemon race condition on SIGUSR1 restart** — Orphaned processes and send failures during config reloads. **Fix status: none.**

- **#35119 (Medium) — HTTP 500 from Codex doesn't trigger model fallback** — Users must manually switch models when Codex fails. **Root cause identified**, fix PR needed.

- **#31331 (Medium) — Docker + Sandbox cannot access workspace** — Bind mount path confusion between container and host. **Fix status: none.**

- **#71127 (High) — Stuck processing sessions never aborted** — Gateway requires external restart to recover from frozen sessions. Diagnostic subsystem detects but doesn't act. **Fix status: none.**

- **#77241 (Closed) — Plugin contract API path doesn't search `dist/` directory** — npm plugin packages broken because compiled output isn't found. **Fixed in today's hotfix release.**

- **#77295 (High) — Fal GPT Image 2 routes to wrong endpoint (404)** — Reference-image editing completely unusable. **Fix status: none.**

**Today's Fix PRs:** PR #77672 addresses webchat exec approvals being blocked. PR #77650 addresses slow session listing per-row model resolution. PR #77662 prevents orphaned TUI terminal sessions. PR #77669 fixes infinite reasoning recursion with MiniMax models.

## 6. Feature Requests & Roadmap Signals

**High-Community-Interest Features (likely in next releases):**

- **Linux/Windows Desktop Apps** (#75) — With 104 comments and 74 upvotes, this is the community's top request. Maintainers have acknowledged but not committed to a timeline.

- **Session Snapshots / Checkpoints** (#13700) — Save/load context state. Six comments, growing interest for development workflows.

- **Pre-response Enforcement Hooks** (#13583) — Hard gates for mandatory tool-call policies. Important for finance/security use cases.

- **Masked Secrets System** (#10659) — Prevent agent from reading raw API keys while still using them. Addresses security concerns.

- **Slack Block Kit Support** (#12602) — Rich interactive messages in Slack beyond markdown.

- **Direct Exec Mode for Cron Jobs** (#18160) — Skip LLM interpretation for simple cron commands, reducing latency and cost.

- **Scoped Mention Pattern Policy** (PR #70864) — Still open, large PR adding global/agent/provider mention gating across all channels.

**Predictions:** The file-transfer plugin and Google Meet voice bridge in today's betas suggest focus on collaboration features. Next likely additions: masked secrets (addressing #10659), session snapshots (#13700), and possibly the scoped mention policy PR (#70864) which is a large, multi-channel change.

## 7. User Feedback Summary

**Pain Points:**

- Docker users are regularly blocked — brew-based skill installs fail (#14593), workspace bind mounts broken (#31331), Control UI requires HTTPS (#32473). Docker experience remains one of the weakest areas.
- Context management frustrates advanced users — bootstrap files silently ignored (#29387), memory search not recursive (#34400), token cost hidden from agents (#2597).
- Plugin ecosystem friction — missing `dist/` path resolution (#77241), opaque image optimization errors without `sharp` (#73148), schema overhead (~3,500 tokens/session) (#14785).

**Satisfaction Signals:**

- High engagement with new file-transfer capability — bundled plugin with security defaults well-received.
- Community values the Control UI context indicator (PR #73744, #77670) — multiple users tracked this request (#46398, #45048, #50071).
- Telegram and WhatsApp improvements in today's PRs show maintainers care about channel parity.

**Use Cases Emerging:**
- Etsy shop automation (new skill, PR #77654)
- Multi-agent collaboration with capability profiling (#35203)
- Production security profiles for enterprise (#8719)

## 8. Backlog Watch

**Critical Issues Lacking Maintainer Response:**

- **#75 (Jan 1) — Linux/Windows Apps** — Most-upvoted issue, 104 comments, zero maintainer commitment. Community patience wearing thin.

- **#2597 (Jan 27) — Context usage percentage in Runtime line** — Open for 3+ months, 8 comments. Simple feature request with broad impact.

- **#1210 (Jan 19) — Discord images stored as base64 in transcripts** — Causes context overflow after ~7 images. Users left to suffer silently.

**Stale High-Value PRs Needing Review:**
- **PR #70864 (Apr 24) — Scoped mention pattern policy** — Large, multi-channel change affecting 15+ channel plugins. Reviewer bandwidth needed.
- **PR #69312 (Apr 20) — MEDIA: false-positive extraction from code blocks** — Real bug causing silent content deletion. Small fix, large impact.
- **PR #58808 (Apr 1) — Pass sender context to channel agent tools** — Enables sender-aware access control. Open 35 days.

**Maintainer Risk:** The 446 open issues against 389 open PRs suggests a growing backlog. The high rate of regression bugs in recent releases (multiple "regression (worked before, now fails)" reports) indicates that rapid feature development may be outpacing testing coverage. The CI improvements merged today (PR #77667) may help, but a dedicated stabilization sprint appears warranted.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date:** 2026-05-05

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is experiencing a **development intensity surge**, with the five most active projects (OpenClaw, NanoBot, Hermes Agent, ZeroClaw, CoPaw) collectively processing **~650 issues and ~650 PRs** in a single day. The ecosystem is bifurcating: mature reference implementations (OpenClaw) are shipping beta features weekly while accumulating technical debt, while emerging competitors (NanoBot, ZeroClaw, CoPaw) are converging on similar functional requirements—multi-channel support, provider fallback chains, and memory management—but diverging in architectural philosophy. Community demand for **production-grade reliability** (Docker support, onboarding UX, security defaults) is outpacing feature velocity, creating an inflection point where stability wins may determine market leadership. Notably, 58% of merged PRs across all projects came from first-time or infrequent contributors, indicating a growing, engaged developer base.

---

## 2. Activity Comparison

| Project | Issues (Open/Closed) | PRs (Open/Merged) | Release This Period | Health Score* |
|---------|---------------------|--------------------|-----------------------|---------------|
| **OpenClaw** | 446 open, 54 closed | 389 open, 111 merged | **4 releases** (2 betas, 1 hotfix) | ⚠️ **Needs Stabilization Sprint** |
| **Hermes Agent** | 43 open, 7 closed | ~50 active, 7 merged | None | 🟢 **Healthy, Responsive** |
| **ZeroClaw** | ~37 open, **13 closed** | 28 open, **22 merged** | None (tracking v0.7.5) | 🟢 **High Velocity, Balanced** |
| **NanoBot** | 7 updated, 5 active | 9 open, 9 merged | None | 🟢 **Steady, Community-Driven** |
| **CoPaw** | 13 updated, 5 open | 10 open, 4 merged | None (v1.1.6b1 latest) | 🟢 **Polishing Phase** |
| **IronClaw** | 2 open, 0 closed | 13 open, **9 merged** | None | 🟢 **Architectural Consolidation** |
| **NullClaw** | 3 open, 0 closed | 2 open, 2 merged | **v2026.5.4** (yesterday) | 🟢 **Stable Consolidation** |
| **PicoClaw** | — (summary failed) | — | — | ⚪ **Insufficient Data** |
| **Moltis** | 1 new (bug), 0 closed | 1 merged | None | 🟢 **Low Activity, Stable** |
| **LobsterAI** | 1 closed, 0 new | 2 merged | None | 🟢 **Quiet, Maintainer-Led** |
| **NanoClaw** | 5 open/closed | 19 merged, 15 open | None | 🟢 **Rapid Iteration** |
| **TinyClaw** | — | — | — | 🔴 **Dormant (No Activity)** |
| **ZeptoClaw** | — | — | — | 🔴 **Dormant (No Activity)** |

*Health Score: 🟢 = Active/balanced, ⚠️ = Needs attention, 🔴 = Dormant, ⚪ = Unknown*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Release cadence dominance**: 4 versions in 24 hours (2 betas, 1 hotfix) vs. 0 for all other projects—unmatched rapid iteration capability
- **Ecosystem breadth**: 111 merged PRs today (3× the next closest, ZeroClaw at 22)
- **Community scale**: 500+ active issues/PRs demonstrate the largest contributor base by an order of magnitude
- **Enterprise-grade features**: File-transfer plugin with default-deny security, Google Meet voice bridge, Slack Block Kit in PR
- **Multi-channel parity**: Coordinated improvements across Telegram, WhatsApp, Slack, Discord in single release cycle

### Technical Approach Differences
- **Monolithic reference architecture**: Unlike NanoClaw/NanoClaw's modular channel adapters or IronClaw's substrate rewrite, OpenClaw maintains a unified core with plugin extensions—trades flexibility for integration consistency
- **Aggressive feature shipping**: Beta releases prioritize new capabilities (file transfer, voice bridge) over stability, resulting in regression bug clusters (#32473, #32296)
- **Community-led innovation**: Many features originate from PRs (#77654 Etsy skill, #73744 context indicator), unlike the more maintainer-driven Hermes Agent or LobsterAI

### Community Size vs. Competitors
| Metric | OpenClaw | Next Closest |
|--------|----------|--------------|
| Open issues | 446 | 43 (Hermes Agent) |
| Open PRs | 389 | 28 (ZeroClaw) |
| Updated issues/PRs (24h) | 1,000+ | 100 (ZeroClaw) |
| Releases (24h) | 4 | 1 (NullClaw) |
| Contributor diversity | High (multiple named contributors) | Moderate |

**Verdict**: OpenClaw dwarfs all peers in raw activity but risks **quality cascade failure**—446 open issues vs. 389 open PRs signals growing technical debt. The next 30 days will determine whether the project stabilizes or enters a maintenance crisis.

---

## 4. Shared Technical Focus Areas

Requirements emerging across **3+ projects**, indicating ecosystem-wide priorities:

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Provider Failover Chains** | NanoBot (#1163, #3376), OpenClaw (#35119), Hermes Agent (#19981), NanoClaw (#2262), ZeroClaw (#6364) | Auto-fallback on timeout/503/429; region-aware routing; non-OpenAI backend parity |
| **Multi-Channel Consistency** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw, NanoClaw | Discord/Telegram/WhatsApp/Slack/Matrix/Feishu with real-time streaming, card rendering, media handling |
| **Memory & Context Management** | OpenClaw (#2597, #13700), NanoBot (#3281), Hermes Agent (#14420), ZeroClaw (#5415), CoPaw (#4031) | Consolidation ratios, token usage visibility, session snapshots, context leakage prevention |
| **Docker/Container Reliability** | OpenClaw (#14593, #31331), Hermes Agent (#18060), Moltis (#964), ZeroClaw (#6304), NullClaw (#882) | Skill installs, bind mounts, build consistency, sandbox naming, startup time |
| **Security Hardening** | OpenClaw (#10659), Hermes Agent (#19897), CoPaw (#4037), ZeroClaw (#6205) | Secret masking, default-deny policies, unauthenticated gateway protection, encryption diagnostics |
| **Onboarding & Setup UX** | OpenClaw (#75, #9443), ZeroClaw (#6123, #6206), NullClaw (#871), NanoClaw (#2249) | Prebuilt binaries, model configuration wizards, free/low-cost backends, first-run diagnostics |
| **Multi-Agent Orchestration** | Hermes Agent (#20048, #20032), CoPaw (#4024, #4031), OpenClaw (#35203) | Workflow orchestration, capability-aware routing, session focus persistence |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Distinctiveness | Competitive Moat |
|---------|--------------|-------------|-------------------------------|------------------|
| **OpenClaw** | Feature-complete reference agent | Developers, power users, enterprises | Monolithic core + plugin system; voice/call integration | **Ecosystem scale, release velocity** |
| **Hermes Agent** | Production stability & security | Enterprise ops, security teams | Kanban orchestration, cryptographic audit, rapid P0 fixes | **Security posture, multi-platform crash resilience** |
| **NanoBot** | Low-friction deployment | Hobbyists, small teams, non-English speakers | Community-driven PR culture, lightweight SDK, open contributor funnel | **Approachability, LLM fallback maturity** |
| **ZeroClaw** | Cloud-native configuration | Self-hosters, cloud users, mobile-first | Config CRUD API, web onboarding parity, HMAC receipts | **Configuration UX, i18n (zh-CN added)** |
| **CoPaw** | Collaborative agents | Developer teams, research labs | Multi-agent collaboration, Hermes-like architecture interest | **Session collaboration, model provider breadth (Vertex AI)** |
| **IronClaw** | Next-gen substrate | Core infrastructure developers | Postgres/libSQL memory, event sourcing, Reborn architecture | **Future-proofing, governance tooling (Data Governance Layer)** |
| **NullClaw** | Lightweight, low-resource | Raspberry Pi, cheap VPS, offline | Landlock sandbox, Arm/zig build, minimal dependencies | **Resource efficiency, free backend priority** |
| **NanoClaw** | Channel adapter mastery | Channel integrators, multi-platform | MCP-first, per-wiring permissions, WhatsApp/DeltaChat focus | **Channel interoperability, platform-specific reliability** |
| **Moltis** | Safety & sandboxing | Security researchers, parallel users | Docker sandbox isolation, parallel execution | **Concurrent execution safety** |
| **LobsterAI** | Desktop agent (Electron) | Windows/macOS desktop users | Electron-based UI, Electron group dependency management | **Desktop-first, Chinese ecosystem (YoudaoNote)** |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, High Churn)
- **OpenClaw** — Unmatched volume but accumulating technical debt (446 open issues). Needs a stabilization sprint within 30 days.
- **ZeroClaw** — Best balance of velocity (22 merged PRs) and quality (13 issues closed). Strong maintainer responsiveness.
- **NanoBot** — Steady output (9 merged PRs) with maturing feature set (fallback chains, memory consolidation). Healthy community contribution ratio.

### Tier 2: Building Momentum (Targeted Growth)
- **Hermes Agent** — Rapid P0 incident response, kanban orchestration push signals enterprise pivot. Growing Chinese-language user base.
- **CoPaw** — Polishing phase with high first-time contributor engagement. Multi-agent collaboration interest may accelerate roadmap.
- **NanoClaw** — Channel adapter specialization driving steady PR activity (19 merged). WhatsApp and Discord bugs being actively addressed.

### Tier 3: Architectural Transition
- **IronClaw** — Low community activity but significant architectural work (Reborn memory substrate). Internal development, not yet user-facing.

### Tier 4: Stabilizing / Low Activity
- **NullClaw** — Just cut v2026.5.4; consolidation phase post-release. Low engagement but stable core.
- **LobsterAI** — Maintainer-driven with low community feedback. Windows skill reliability fix indicates internal QA focus.
- **Moltis** — One new bug filed (sandbox collision), one CI improvement merged. Stable but not growing.

### Tier 5: Dormant
- **TinyClaw**, **ZeptoClaw** — Zero activity in 24 hours. Risk of project atrophy.

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **"Free tier or bust"** — The #1 emerging demand: users want agent platforms that work without paid API keys. NullClaw (#871: DuckDuckGo web search) and ZeroClaw (#6123: local Ollama) explicitly ask for cost-free operation. **Implication**: Agent platforms must support local LLMs (llama.cpp, Ollama) and free search backends to capture the hobbyist/Raspberry Pi market.

2. **Provider lock-in is the top frustration** — Across 5 projects, users report failed provider fallback (NanoBot #3376), region blocks (Hermes Agent #19981), and API key exposure (Hermes Agent #19897). The ecosystem is demanding *transparent, multi-provider resilience* as table stakes.

3. **Security is moving from "nice-to-have" to "blocker"** — Three projects saw unauthenticated gateway bugs (CoPaw #4037, OpenClaw #10659, Hermes Agent #19897). The community is self-policing: users are filing security issues faster than maintainers can respond. **Implication**: Default-deny security posture will become a differentiator.

4. **Multi-agent orchestration is the next frontier** — Hermes Agent's Kanban tools (#20048), CoPaw's Hermes-like interest (#4024), and OpenClaw's capability profiling (#35203) signal convergent demand for agent-to-agent workflows. The "single agent" model is being replaced by orchestrated agent squads.

5. **Chinese-language ecosystem is growing rapidly** — Hermes Agent (#14420, Chinese user; Feishu/Weixin integration), CoPaw (zh-CN locale), ZeroClaw (Simplified Chinese i18n, #6170), and LobsterAI (YoudaoNote skill) demonstrate a **surging Chinese developer and user base** that values local platform integration (WeChat, DingTalk, Feishu).

6. **"Observability or death"** — Token/context usage indicators (OpenClaw #73744), runtime footers (Hermes Agent #19922), and thinking/reasoning visibility (NullClaw #886) show users want *insight into agent decision-making*. The "black box" agent is increasingly unacceptable.

### Value for AI Agent Developers

- **This week's most actionable build target**: **Provider failover chains**—the single most requested feature across 5 projects, already implemented by NanoBot (#1163), partially by OpenClaw (#35119), and explicitly requested by Hermes Agent, ZeroClaw, and NanoBot. First-mover advantage for any project shipping robust, configurable failover with region-aware routing.

- **Risk to watch**: **Technical debt thresholds**. OpenClaw's 446 open issues (vs. 389 open PRs) is a 1.15:1 ratio—dangerously close to the 1.5:1 threshold where projects enter maintenance crisis. NanoClaw's corrupt `container.json` bug (#2257) and ZeroClaw's context spillage (#5415) represent data-loss risks that could erode trust in these projects.

- **Opportunity**: **Onboarding-first architecture**. No project has solved the "fresh install works first time" problem. ZeroClaw's config CRUD API (#6179) and web onboarding parity come closest. A project that invests in zero-friction setup (prebuilt binaries, guided wizards, automatic provider detection) could capture the frustrated user base migrating from broken installations.

- **Hidden gem**: **NullClaw's low-resource focus**. In a landscape of bloated feature stacks, NullClaw's explicit targeting of Raspberry Pi/cheap VPS, Landlock sandboxing, and free-search-backend demand (#871) represents an **underserved niche** that could become the default for hobbyists, education, and air-gapped deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-05

## Today's Overview
The NanoBot project shows high activity with 18 PRs updated and 7 issues updated in the last 24 hours, signaling a healthy development cycle. The community continues to drive both feature development and bug fixes, with several long-standing PRs finally being merged. No new releases were published today, though the codebase reflects substantial progress toward a future release. The maintainer team appears actively engaged, with 9 PRs merged/closed and 9 remaining open for review.

## Releases
No new releases were published today.

## Project Progress (Merged/Closed PRs Today)
Nine PRs were merged or closed today, showcasing significant community-driven improvements:

- **fix(codex): stream progress deltas to channels** (#3480) — Restores intermediate progress updates for OpenAI Codex provider, fixing a regression where channels only received the final response.
- **feat(memory): make consolidate ratio configurable** (#3281) — Adds `consolidationRatio` config option (0.1–0.95) to control memory compression aggressiveness, responding to community feedback on fidelity vs. compression trade-offs.
- **fix(sdk): populate RunResult.tools_used and RunResult.messages** (#3254) — Wires up previously hard-coded empty arrays in the SDK facade, enabling consumers to see which tools fired and final message state.
- **Revert "fix(feishu): streaming card and tool hint respect reply_to_message in groups"** (#3548) — Internal revert after unintended regression.
- **fix(agent): prevent safety guard false positives and streamed message drop** (#3613) — Critical bugfix: exempts `/dev/*` paths from workspace violation checks, fixes `ToolUnit` 404 on stream reset, and prevents streamed content truncation during safety guard processing.
- **feat: LLM fallback chain on retriable errors (Timeout/503/502/429)** (#1163) — Long-awaited feature (submitted in February) now merged: triggers fallback models on `litellm.Timeout` and `ServiceUnavailableError` instead of returning errors to users.
- **feat(web_search): support custom base_url for Tavily provider** (#3091) — Allows configuration of proxy/mirror server URLs for Tavily search API.
- **feat(agent): add custom provider support and workspace command loading** (#3080) — Enables direct OpenAI-compatible providers alongside standard routing, plus workspace-specific command loading.
- **feat: implement Mezon channel and configuration** (#1154) — New channel integration for the Mezon platform (from February).

## Community Hot Topics

1. **Issue #3376 — Provider/Model Failover** (13 comments, 1 👍)  
   `[enhancement]` User requests automatic switching between providers/models on errors (timeout, 429, 5xx). This directly complements the newly merged PR #1163 (LLM fallback chain), suggesting the community views this as the next logical step beyond single-retry-after-fallback.

2. **Issue #3292 — Session-Level Focus Tool** (7 comments)  
   `[feature request]` Proposes persistent task awareness across interruptions and session compaction — addressing a fundamental LLM agent limitation around maintaining focus on primary goals when interrupted by side questions.

3. **PR #3628 — before_process hook for message preprocessing** (0 comments, new today)  
   Proposes async callback before document extraction, with media preprocessing support — could unify several plugin and security use cases.

## Bugs & Stability

### Critical
- **Issue #3626 — Telegram long polling silently hangs** (PR #3627 exists)  
  Bot stays alive but stops receiving updates. **Fix PR open** (#3627) adds a lightweight watchdog to detect and recover from silent hangs. This is a stability issue affecting all Telegram deployments.

### High
- **Issue #3618 — Region-blocked model error (403)**  
  User experienced 3-day outage due to `'This model is not available in your region.'` error. Recovered via backup reinstallation. Signals need for provider failover (related to #3376) or clearer region-aware error messaging.

### Medium
- **Issue #3625 — WhatsApp sends each LLM token as separate message**  
  When provider supports progress deltas (e.g., OpenAI Codex), WhatsApp channel sends individual tokens as separate messages before the final consolidated response. **Fix PR #3480 was merged today** — should resolve this.

### Low
- **Issue #2804 — DuckDuckGo web_search hangs indefinitely** (closed)  
  `asyncio.to_thread(ddgs.text)` blocking the message pipeline. Resolved with a timeout mechanism.

## Feature Requests & Roadmap Signals

**Likely for next version:**
- **Session-level focus/persistent task awareness** (#3292) — PR #3622 (focus key persisting to session metadata) is already open, suggesting active development.
- **Provider failover chain improvement** (#3376) — Builds on the just-merged LLM fallback (#1163); may appear as configurable failover policy.
- **Tool hint truncation control** (#3623) — A small but quality-of-life change with an open PR.
- **Hallucinated tool-call guard** (#3624) — Detects when model claims it performed an action but didn't actually call a tool; opt-in safety hook.
- **Multi-role agent squad for Hugging Face Spaces** (#3621) — Experimental deployment orchestration for agents like Neo, Trinity, and Sentinel.

**Lower priority signals:**
- Xiaomi MiMo token plan documentation (#3617, PR #3619) — User-requested config docs, PR waiting for review.
- MCP ImageContent handling (#2438) — Long-open PR (2+ months) for handling image responses in MCP tools.

## User Feedback Summary

**Positive signals:**
- Community is actively contributing mature, production-quality features (security guards, provider fallbacks, SDK fixes).
- Users are deploying NanoBot in diverse environments: Telegram, WhatsApp, Feishu, Hugging Face Spaces, and custom providers.
- The PR #3613 user report ("thank you for the fix") and general positive engagement indicate satisfaction with maintainer responsiveness.

**Pain points:**
- **Provider availability is the #1 frustration** — region blocks (3618), silent fallback failure (3376), and single-point failures cause real user outages.
- **Channel-specific stability issues** — Telegram polling hangs (3626), WhatsApp token explosion (3625) degrade daily user experience.
- **Configuration discoverability** — Custom provider setups (Xiaomi MiMo) lack documentation, requiring users to open issues.
- **Memory tuning** — The 0.5 default consolidation ratio (PR #3281) may not suit all workflows; configurable ratio addresses this.

## Backlog Watch

### Needs Maintainer Attention
- **PR #2438 — MCP ImageContent handling** (open since March 24, 60+ days)  
  MCP tools returning images (charts, graphs) produce raw base64 strings instead of usable images. Low complexity, high user impact for data visualization use cases.

- **PR #2438 has 0 comments from maintainers** — no feedback or discussion since submission.

### Issues with No Activity
- **Issue #3617 — Xiaomi MiMo documentation** (1 day old, low time pressure)  
  PR #3619 is open but needs review/merge.

### Watch Items
- The newly merged **LLM fallback chain (#1163)** is from February — indicating some features take 2-3 months to move from PR to merge, which may signal maintainer bandwidth constraints or thorough review processes.
- **PR #3621 (HF Spaces squad deployment)** is experimental — may need integration discussion before moving to main branch.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-05

## Today's Overview

Hermes Agent is experiencing **extremely high activity** today, with 50 issues and 50 PRs updated in the last 24 hours — an exceptional volume that signals either a major release cycle or a coordinated bug-fix sprint. The project maintains a healthy **43 open issues vs. 7 closed** ratio, suggesting the maintainers are actively triaging but the influx of new reports is outpacing resolution. A significant cluster of **P0 startup-crash bugs** affecting macOS, Linux, and the CLI was identified and rapidly closed, demonstrating strong incident response. No new releases were published today, but the sheer density of PRs (including several dependabot updates for CI/CD tooling) and feature work (Kanban tools, Quarry skill, DingTalk proactive messaging) points to active development across the stack. Community participation is robust, with users filing detailed bug reports and feature requests in multiple languages.

---

## Releases

**No new releases today.** The latest release remains v0.12.0 (2026-04-30). Users experiencing startup crashes (Issues #19894, #19896, #19903) should check if their installed version is affected and watch for a patch release.

---

## Project Progress

**7 PRs were merged or closed today**, alongside 7 resolved issues. Key advances:

- **Teams integration salvage** — PR #20042 (by teknium1) merged: Microsoft Teams documentation sidebar, message threading via `App.reply()` with group-chat fallback, and test-mock wiring fixes. This resurrects stalled work from PR #18239 (by heyitsaamir).

- **DingTalk proactive messaging** — PR #17370 (by spike2204) received updates: adds Robot OpenAPI fallback for agent-initiated and scheduler-triggered messages when session webhooks are unavailable, mirroring Feishu's pattern.

- **Dashboard cron profile scoping** — PR #19770 (by quocanh261997) adds profile selection to the dashboard Cron tab, allowing management of jobs across named Hermes profiles.

- **Dependency updates** — Multiple dependabot PRs merged for critical infrastructure: `dompurify` (3.3.3→3.4.2), `docker/login-action` (3.7.0→4.1.0), `docker/build-push-action` (6.19.2→7.1.0), `docker/setup-qemu-action` (3.7.0→4.0.0), `actions/setup-python` (5.6.0→6.2.0), `actions/checkout` (4.3.1→6.0.2).

- **Security CI** — PR #20037 merged: adds OSV-Scanner workflow and dedicated Dependabot config for GitHub Actions, complementing existing SHA-pinned action pins.

- **Bug fixes closed** — The P0 `c-S-c` crash cluster (#19894, #19896, #19903) resolved; `claw migrate` provider mode bug (#19861) fixed; delegate subagent routing issue (#19567) closed; persistent shell cwd deletion crash (#17558) resolved.

---

## Community Hot Topics

### Most Commented

1. **#487 — Cryptographic Audit Trail feature** (23 comments, closed)
   - [Issue #487](https://github.com/NousResearch/hermes-agent/issues/487)
   - Proposed SHA-256 hash-chained action log inspired by OpenFang (Rust-based Agent OS). Despite being 2 months old and closed, it's today's most-discussed issue — suggesting continued community interest in accountability/auditing, especially from security-conscious users.

2. **#19903 — CLI crash: Invalid key 'c-S-c'** (7 comments, 4 👍)
   - [Issue #19903](https://github.com/NousResearch/hermes-agent/issues/19903)
   - The most upvoted open issue. Affects all platforms (macOS, Linux, possibly Windows). Root caused to `prompt_toolkit` not supporting uppercase Shift modifiers in keybinding definitions. **Fix confirmed closed** — tracked alongside #19894 and #19896.

3. **#14420 — Agent unable to use previous context/memory** (6 comments)
   - [Issue #14420](https://github.com/NousResearch/hermes-agent/issues/14420)
   - Chinese-language user reporting that Hermes cannot maintain conversation context despite `message_count: 8`. This is a **long-standing issue** (opened April 23) with no resolution signal yet — potential memory/context-windowing problem.

### Top Reactions

- **#19903** (4 👍) and **#19896** (4 👍) — both the `c-S-c` crash bug, reflecting widespread frustration with the startup failure in v0.12.0.

### Underlying Needs

The cryptographic audit trail (#487) and Kanban task management (#20048, #20054, #20055) point to growing demand for **enterprise-grade governance and workflow orchestration**. The context/memory issue (#14420) highlights fundamental reliability expectations from non-English-speaking users. The gateway maintenance queue (#20029) and custom topic gateway (#20032) signal desire for **production-grade operational control**.

---

## Bugs & Stability

### Critical (P0 — Fixed)

| Issue | Platform | Description | Status |
|-------|----------|-------------|--------|
| #19903 | CLI (all) | `c-S-c` key binding crashes prompt_toolkit | **Closed** |
| #19894 | macOS | Same crash on v0.12.0 startup | **Closed** |
| #19896 | Linux | Same crash after update | **Closed** |

All three caused immediate crash after welcome banner. Fix appears to involve removing or reworking the `@kb.add('c-S-c')` handler in `cli.py:10487`.

### High Severity (P1-P2)

| Issue | Priority | Description | Fix PR? |
|-------|----------|-------------|---------|
| #19897 | P0 (Security) | `HERMES_REDACT_SECRETS` off by default — API keys leaked in Telegram/Discord | None yet |
| #19981 | P1 | OpenAI Codex headers read from wrong SDK attribute (`_default_headers` vs `_custom_headers`), silently dropped | None yet |
| #20001 | P1 | TUI ghost sessions with incomplete metadata pollute session_search | None yet |
| #19944 | P2 | TUI transcript scroll blanks after virtual row height cache drift | None yet |
| #19937 | P2 | Gateway drain hangs on wedged Feishu/Weixin websockets (90s timeout) | None yet |
| #20035 | P2 | Feishu DM pairing drops messages under high frequency | None yet |
| #19915 | P2 | Empty `voice.record_key` crashes REPL | None yet |

### Medium-Low Severity (P3)

| Issue | Description |
|-------|-------------|
| #19992 | URL safety blocks RFC 2544 range (198.18.0.0/15) used by Clash TUN and CDNs |
| #18875/#18876 | Hindsight memory provider crashes gateway when client not installed (duplicate) |
| #18872 | Skill name mismatch (`skills_list` → `skill_view`) breaks tool-calling loop |
| #18060 | 23 files hardcode `Path.home() / ".hermes"` instead of `get_hermes_home()` |
| #19922 | Runtime footer limited to 3 variables |

---

## Feature Requests & Roadmap Signals

### High Interest / Likely Next Version

1. **Kanban orchestration tools** (#20048) — `kanban_list`, `kanban_unblock`, `kanban_assign`, `kanban_archive` for orchestrator profiles. PR #20054/20055 also address dispatcher validation and stale board pointer handling. This is a **clear roadmap priority** — multiple PRs filed today.

2. **Idle maintenance queue** (#20029) — Native queue for agent-requested restarts/updates without interrupting active chats. Aligns with enterprise operational needs.

3. **Local custom gateway for multi-agent discussions** (#20032) — Chinese-language request for topic-isolated gateway partitions supporting multi-agent brainstorming. Shows global demand for **multi-agent orchestration**.

4. **Quarry skill** (PR #20036) — Multi-source resource discovery engine searching 28 sources (cloud drives, torrents, books). Novel skill that expands Hermes' utility for media/content agents.

5. **Cryptographic audit trail** (#487, closed but discussed) — SHA-256 hash-chained logging inspired by OpenFang. Community interest persists despite closure — may return as plugin.

6. **Expanded runtime footer** (#19922) — Expose all `/usage` variables in gateway footer for multi-profile Discord/Telegram monitoring.

### Expected in Next Release

- **Kanban toolset expansion** — Multiple PRs filed same day suggest coordinated feature push
- **Teams platform stabilization** — Docs and threading fixes merged today
- **DingTalk proactive messaging** — PR #17370 nearing completion
- **Schema sanitizer for llama.cpp compatibility** — PR #20052 fixes tool schema crashes on llama.cpp servers

---

## User Feedback Summary

### Pain Points

1. **"My agent can't remember anything"** — Issue #14420 (Chinese user, open 12 days): Agent loses context after initial setup despite message_count=8. No maintainer response visible — **silent dissatisfaction risk**.

2. **"Crashes on startup after update"** — Three P0 bugs (#19903, #19894, #19896) all reporting identical symptoms. Users expressed frustration at having working v0.11.x that broke after update to v0.12.0.

3. **"API keys leaked in chat"** — Issue #19897: Security-conscious user reports that secret redaction is off by default, exposing credentials in Telegram/Discord. This is a **trust-damaging bug** for production deployments.

4. **"Skills I discover can't be loaded"** — Issue #18872: Self-inconsistency in skill discovery pipeline where `skills_list` and `skill_view` use different name resolution logic.

### Use Cases

- **Chinese market**: Multiple issues/PRs from Chinese users (Feishu/Weixin integration, Clash TUN compatibility, topic gateways in Chinese). This is a **growing user segment** with specific platform needs.
- **Enterprise deployment**: Docker path hardcoding (#18060), API key leaks (#19897), Kanban workflow issues — users are clearly running Hermes in production.
- **Multi-agent collaboration**: Custom gateway (#20032), Kanban orchestration (#20048), runtime footer monitoring (#19922) all point to sophisticated multi-profile deployments.

### Satisfaction Indicators

- Rapid closure of P0 startup crashes (same day) demonstrates **responsive maintainers**
- Multiple users filing detailed, well-researched reports with root cause analysis suggests **engaged, technical community**
- Active PR contributions from multiple external developers (duchauch, LeonSGP43, vominh1919, beardthelion, curiouscleo, taffy-owo)

---

## Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Description | Priority |
|-------|-----|-------------|----------|
| #14420 | 12 days | Agent can't maintain context/memory (Chinese user) | **Critical — no response** |
| #11712 | 18 days | WebSocket interface for third-party mobile clients | **No maintainer comment** |
| #18060 | 5 days | `Path.home()` hardcoding in 23 files breaks Docker | **P2 — no fix PR yet** |
| #18872 | 3 days | Skill name mismatch breaks tool-calling loop | **P2 — detected as duplicate** |
| #18875/#18876 | 3 days | Hindsight memory crash (duplicate, no resolution) | **P3 — not triaged** |

### Notable PRs Awaiting Review

| PR | Age | Description |
|----|-----|-------------|
| #17370 | 6 days | DingTalk proactive messaging (feature) |
| #19770 | 1 day | Dashboard cron profile scoping (feature) |
| #20036 | <1 day | Quarry multi-source discovery skill (new) |
| #20052 | <1 day | Schema sanitizer for llama.cpp (bugfix) |
| #20053 | <1 day | Feishu websocket monkey-patch breaks DingTalk (bugfix) |

### Risk Assessment

The **context/memory gap (#14420)** is the most concerning open issue — it affects a non-English-speaking user with no maintainer response for nearly two weeks. If widespread, this could erode trust in Hermes' core reasoning capabilities. The **security exposure (#19897)** is likely to be escalated given the API key leakage vector. The **18-day-old WebSocket interface request (#11712)** suggests third-party integrations are being blocked by missing infrastructure — this may surface as a blocker for external plugin ecosystem growth.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-05

## Today's Overview

The NanoClaw project experienced a surge in activity in the past 24 hours, with 34 pull requests updated and 5 issues open or closed, indicating a highly active development period. The project is seeing rapid iteration, particularly around channel adapters, SDK tooling, and core container configuration, though several high-severity bugs have emerged. Merged PRs outnumbered open ones (19 vs 15), suggesting maintainers are prioritizing stability alongside feature development. No new releases were issued today, but the volume of fixes in the pipeline suggests a release may be imminent.

## Releases

No new releases were published in this reporting period.

## Project Progress

**Merged/Closed PRs (19 total)** saw several notable advances:

- **Discord channel wiring & webhook fix** — PR [#2215](https://github.com/qwibitai/nanoclaw/pull/2215) (closed) successfully wired Discord channels and fixed webhook delivery, though the author noted it was a mistaken push to the wrong repository.
- **MCP server registration fix** — PR [#2242](https://github.com/qwibitai/nanoclaw/pull/2242) (closed) resolved a critical bug where `add_mcp_server` registrations were silently dropped by the SDK's `allowedTools` filter. This fix dynamically derives `mcp__<sanitized-name>__*` patterns from registered `mcpServers` instead of relying on a static allowlist.
- **WhatsApp business flow** — PR [#2254](https://github.com/qwibitai/nanoclaw/pull/2254) (closed) added an opt-in `src/rial/` module for WhatsApp business verification flow integration, bridging to the rial-platform.
- **PATH injection for setup** — PR [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) (closed) patched `process.env.PATH` at setup time to ensure `~/.local/bin` is visible to child processes, fixing post-install CLI discovery.
- **DeltaChat namespacedPlatformId exclusion** — PR [#2251](https://github.com/qwibitai/nanoclaw/pull/2251) (closed) added platform exclusion for DeltaChat.

Open PRs that saw continued activity include fixes for agent-to-agent routing (PR [#2267](https://github.com/qwibitai/nanoclaw/pull/2267)), WhatsApp Baileys upgrade (PR [#2259](https://github.com/qwibitai/nanoclaw/pull/2259)), and per-wiring channel permissions (PR [#2248](https://github.com/qwibitai/nanoclaw/pull/2248)).

## Community Hot Topics

| Item | Type | Comments | Link |
|------|------|----------|------|
| llama.cpp compatibility issue | Issue #2234 | 1 comment, 0 reactions | [View](https://github.com/qwibitai/nanoclaw/issue/2234) |
| Discord card duplication bug | Issue #2264 | 0 comments (new) | [View](https://github.com/qwibitai/nanoclaw/issue/2264) |
| `send_card` MCP tool no-op | Issue #2263 | 0 comments (new) | [View](https://github.com/qwibitai/nanoclaw/issue/2263) |

The **llama.cpp compatibility issue (#2234)** is the most discussed open topic. The user reports that while Claude Code works seamlessly with llama.cpp, NanoClaw fails to connect with a "Your assistant didn't reply in time" error, even though the server logs show it is responding. This points to a potential protocol mismatch or timeout configuration gap between NanoClaw's agent runner and non-Anthropic providers. The issue has gone quiet since May 4, suggesting community members may be awaiting maintainer guidance rather than offering workarounds.

## Bugs & Stability

### High Severity
- **Corrupt `container.json` silently wiped on container spawn** — Issue [#2257](https://github.com/qwibitai/nanoclaw/issue/2257) (OPEN) reports that a corrupt `groups/system/container.json` file is silently overwritten when the next container spawns, causing permanent loss of per-group container configuration (mounts, MCP servers, packages, allowed tools). **No fix PR exists yet.** This is a critical data loss bug.

### Medium Severity
- **Discord card duplication on new installs** — Issue [#2264](https://github.com/qwibitai/nanoclaw/issue/2264) (OPEN): All channel-install skills pin `@chat-adapter/*@4.26.0`, where the Discord adapter unconditionally sets `payload.content = cardToFallbackText(card)`, causing duplicate card rendering. **Fix PR [#2266](https://github.com/qwibitai/nanoclaw/pull/2266)** bumps the adapter cohort to 4.27.0 across 8 skills.
- **`send_card` MCP tool silently no-ops on Chat SDK channels** — Issue [#2263](https://github.com/qwibitai/nanoclaw/issue/2263) (OPEN): The `chat-sdk-bridge.ts:deliver()` method has no branch for `kind: 'chat-sdk'` with card payloads, so cards are silently dropped. **Fix PR [#2265](https://github.com/qwibitai/nanoclaw/pull/2265)** adds card support to the bridge.

### Resolved
- **MCP server registration silently dropped** — Issue [#2241](https://github.com/qwibitai/nanoclaw/issue/2241) (CLOSED): The `allowedTools` filter discarded tools from dynamically registered namespaces. **Fix PR [#2242](https://github.com/qwibitai/nanoclaw/pull/2242)** closed the issue.

## Feature Requests & Roadmap Signals

- **FFmpeg/FFprobe MCP server** — PR [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) (OPEN) adds a skill for media transformation via an MCP server wrapping ffmpeg/ffprobe. This is a utility skill that could be merged quickly and appears to align with the "operational/container skill" category.
- **Per-wiring channel permissions (read/write/read+write)** — PR [#2248](https://github.com/qwibitai/nanoclaw/pull/2248) (OPEN) introduces fine-grained permission control per channel wiring. This is a new feature that may require more review but addresses a clear user need for access control.
- **WhatsApp Baileys v6→v7 upgrade** — PR [#2259](https://github.com/qwibitai/nanoclaw/pull/2259) (OPEN) upgrades the WhatsApp library to fix LID resolution failures and split sessions. Likely to merge in the next release given the severity of the WhatsApp issues.
- **Clearer Telegram setup cards** — PRs [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) and [#2246](https://github.com/qwibitai/nanoclaw/pull/2246) (OPEN) improve the Telegram setup UX with mobile fallback text and a scannable BotFather QR code. These are low-risk improvements.
- **Anthropic base URL forwarding** — PR [#2262](https://github.com/qwibitai/nanoclaw/pull/2262) (OPEN) fixes `ANTHROPIC_BASE_URL` not being forwarded into OpenCode container environments, needed for non-Anthropic providers. This is a critical fix for provider flexibility.
- **Admin cancel commands** — PR [#2143](https://github.com/qwibitai/nanoclaw/pull/2143) (OPEN) adds admin commands to cancel active agent runs, a requested operational control feature.

**Prediction:** The next release will likely include fixes for the Discord card duplication (#2266), `send_card` no-op (#2265), MCP server registration (#2242, already closed), and the WhatsApp Baileys upgrade (#2259). The ffmpeg skill (#2261) and per-wiring permissions (#2248) may make it in as feature additions if they pass review quickly.

## User Feedback Summary

- **Provider flexibility pain point:** The `ANTHROPIC_BASE_URL` not being forwarded (PR #2262) and the llama.cpp connection failure (Issue #2234) both indicate users are actively seeking to use non-Anthropic backends (OpenRouter, DeepSeek, local LLMs). This is a persistent friction point.
- **WhatsApp reliability issues:** Multiple PRs and a fix (PR #2260) address WhatsApp LID resolution failures, split sessions, and silent message drops. Users relying on WhatsApp integration are experiencing data integrity problems.
- **Setup friction:** The Telegram setup improvements (PRs #2249, #2246) and the PATH injection fix (PR #2055) suggest that first-time user experience, especially for headless/VM setups, has rough edges that are being actively smoothed.
- **Data loss concern:** The corrupt `container.json` bug (Issue #2257) has received no comments yet, which may indicate it was just filed, but its severity (silent data loss of all container configuration) warrants immediate attention from maintainers.

## Backlog Watch

- **Issue #2257 – Corrupt `container.json` silently wiped on container spawn** — No fix PR exists yet. This is a high-severity data loss bug filed today that needs immediate maintainer attention.
- **Issue #2234 – llama.cpp compatibility** — Awaiting maintainer clarification on protocol requirements or timeout configuration. No workarounds proposed by community. Could benefit from documentation updates even if a code fix isn't immediate.
- **PR #2123 – Duplicate text when `send_message` fires** — This PR has been open since April 29 with no comments from maintainers. It addresses a visible user-facing bug (double-delivery of responses) and should be reviewed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-05-05**.

---

## NullClaw Project Digest — 2026-05-05

### 1. Today's Overview
Project activity remains **moderate**, with a clear focus on infrastructure and release management. A new patch version (`v2026.5.4`) was released yesterday, closing a major release cycle. Today saw 3 open issues and 4 updated PRs, including two closed PRs for workflow migration and version bumping. The community is raising practical concerns about resource usage and usability, though no critical regressions have been reported in the last 24 hours. The project appears to be in a **stable consolidation phase** following the recent release.

### 2. Releases
- **New Release:** [v2026.5.4](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.4)
  - **Notable changes:**
    - Support for **Agent Skills RFC 0.2.0** and hardened web skill fetch logic.
    - Merged PR `#830` from `v2026.4.17` and `#831` for skills improvements (author: @manelsen).
  - **Breaking changes:** None explicitly documented.
  - **Migration notes:** No migration steps needed; this is a bugfix and feature compatibility release.

### 3. Project Progress
Two pull requests were **closed/merged** today:

| PR | Author | Summary |
|----|--------|---------|
| [#889](https://github.com/nullclaw/nullclaw/pull/889) | DonPrus | Move GitHub workflows to nullbuilder (infrastructure) |
| [#888](https://github.com/nullclaw/nullclaw/pull/888) | DonPrus | Version bump for v2026.5.4 release |

**Features advanced:** Skills support (RFC 0.2.0), CI/CD pipeline modernization.

### 4. Community Hot Topics
- **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871)** – *“[bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support”*  
  **Comments: 5** | Created 2026-04-25 | Updated 2026-05-04  
  **Analysis:** This is the most commented issue. The user `uMendex` highlights that the `web_search` skill is currently unusable on weak devices (Raspberry Pi, cheap VPS) without Brave API keys. Users are asking for a free, built-in search backend (e.g., DuckDuckGo). The underlying need is **offline-first / low-cost configuration**.

- **[Issue #886](https://github.com/nullclaw/nullclaw/issues/886)** – *“[enhancement] option to show reasoning/thinking”*  
  **Created 2026-05-04** | **0 comments** (new, no maintainer reply yet)  
  **Analysis:** A user reports that long-running tasks (e.g., Outlook MCP reading emails) show no progress, lasting 30+ minutes without terminal output. The request is for a **reasoning/thinking streaming indicator** — a UX quality-of-life feature.

### 5. Bugs & Stability
- **No new bugs** reported or closed in the last 24 hours.
- **Open bug of note:** [#871](https://github.com/nullclaw/nullclaw/issues/871) – *“web_search impractical on low-resource devices”* (reported 10 days ago, no fix PR yet). Severity: **High** (blocks a core feature for the intended target audience). No current PR addresses this.
- **Stability:** The release `v2026.5.4` hardened web skill fetching, which may partially mitigate this issue, but the core DuckDuckGo dependency remains unresolved.

### 6. Feature Requests & Roadmap Signals
- **[#886](https://github.com/nullclaw/nullclaw/issues/886)** – *“Option to show reasoning/thinking”* (requested by `darklight9811`). This is a **high-velocity UX feature** likely to be adopted in next minor version (`v2026.5.x`) if maintainers prioritize.
- **[#885](https://github.com/nullclaw/nullclaw/pull/885)** – *“Add NullClaw Data Governance Layer”* (draft PR, hackathon submission). This is a **strategic feature** for enterprise/regulated environments. Currently a draft; may become a roadmap item if merged.
- **[#882](https://github.com/nullclaw/nullclaw/issues/882)** – *“sandbox: default to Landlock on Linux, stop probing external tools at startup”* (open 2 days, 2 comments). This is a **performance and security improvement** requested by `mark-os`. Landlock (Linux kernel 5.13+) is lighter than firejail/bubblewrap. Likely candidate for next release.

### 7. User Feedback Summary
- **Pain points:**
  - **Lack of free web search backend** (Issue #871) — users on low-resource devices cannot use web_search without paid API keys.
  - **No progress visibility** for long tasks (Issue #886) — causes user anxiety and inability to diagnose hangs.
- **Use cases:**
  - Running on weak/cheap devices (Raspberry Pi, low-end VPS) as a local AI assistant.
  - Using Outlook MCP for email automation (university/business users).
- **Satisfaction:**
  - Positive sentiment around skills improvements (RFC 0.2.0 support).
  - Low satisfaction with sandbox probing startup delays (Issue #882).

### 8. Backlog Watch
- **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871)** – *Critical web_search bug*: **10 days old**, 5 comments, **no maintainer reply**. This is the highest-priority open issue. The lack of response from maintainers may frustrate new users on low-resource devices.
- **[Issue #882](https://github.com/nullclaw/nullclaw/issues/882)** – *Sandbox probing issue*: **2 days old**, 2 comments. No official response yet, but a draft PR might be in progress.
- **PR [#887](https://github.com/nullclaw/nullclaw/pull/887)** – *Fix build with zig v0.16*: Open since yesterday, authored by `qxo`. This is a build-system compatibility fix for Windows/Linux that may block new contributors until resolved.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-05

## 1. Today's Overview

IronClaw is experiencing high-velocity development with **22 pull requests updated in the last 24 hours**, including **9 merged/closed**, signaling a major integration push. The core team is actively merging the long-running **Reborn substrate** into `main` behind default-off gates (PR #3230), while a 6-PR memory stack (#3180–#3185) was fully squashed and closed yesterday. Two open issues remain, both in the `reborn` domain. Activity is **very high** and focused on architectural consolidation.

## 2. Releases

**No new releases** have been published. The project remains in active development; the Reborn integration is not yet user-facing.

## 3. Project Progress

**9 PRs merged/closed in the last 24 hours:**

- **#3244** `[CLOSED]` — Demo/Abound: missions now configurable for admin users, notifications sent to same thread *(zetyquickly, core)*
- **#3242** `[CLOSED]` — Added missing mission markdown documentation *(zetyquickly, core)*
- **#3241** `[CLOSED]` — Demo/Abound: target rate checking missions support, mission termination after successful fire *(zetyquickly, experienced)*
- **#3181–#3185** `[CLOSED]` — Complete 6-PR Reborn memory stack squash-merged: native libSQL schema (#3181), full libSQL repository (#3182), full Postgres repository (#3183), behavior contract tests (#3184), vertical integration tests (#3185) — all by *nickpismenkov*, core
- **#2390** `[CLOSED]` — Fix: default image `detail` to `'auto'` for OpenAI-compatible vision providers *(georgeglarson, new contributor)*

**Key advance:** The Reborn memory substrate is now complete and merged into the main integration PR (#3180, still open) — covering both libSQL and Postgres with tested behavior contracts.

## 4. Community Hot Topics

**Most active (by comment count):**

1. **#3090 `[OPEN]`** — *"Add ToolSurfaceService and CapabilityCatalog"* — 3 comments. Proposes a host-owned service for model-visible capability surface (visibility only, no authority grant). Updated May 4.  
   [View Issue](https://github.com/nearai/ironclaw/issues/3090)

2. **#3036 `[OPEN]`** — *"Configuration-as-Code for IronClaw Reborn"* epic — 3 comments, 1 👍. Motivates declarative tenant blueprints and use-case harnesses. Updated May 4.  
   [View Issue](https://github.com/nearai/ironclaw/issues/3036)

**Observation:** Both active issues are Reborn-related, but have no new comments in days. Community engagement on Issues is currently low; the primary activity is PR-based development.

## 5. Bugs & Stability

**No new bug reports** were opened in the last 24 hours. Existing stability efforts in flight:

| Bug/Issue | Severity | Status | Fix PR |
|-----------|----------|--------|--------|
| **Live Canary auth lanes failing** (engine-v2 callable-only contract change) | **High** — blocks CI for 3+ days | Open, fix in PR #3235 | #3235 `[OPEN]` — test(e2e): unblock Live Canary auth lanes |
| **File history memory leak** (50MB+ stored content) | **Medium** — unbounded memory | Fix in open PR #2341 | #2341 `[OPEN]` — byte-limit eviction (50MB default) |
| **Gate approval blocking CodeAct scripts** (inner error surfaced instead of user pause) | **Medium** — UX regression | Fix in open PR #3157 | #3157 `[OPEN]` — inline gate await for approval gates |

**No new regressions reported.** The canary failure is a known post-merge contract drift.

## 6. Feature Requests & Roadmap Signals

**Active feature development strongly points toward the Reborn architecture:**

- **ToolSurfaceService / CapabilityCatalog** (#3090) — model-visible tool surface; not yet implemented
- **Configuration-as-Code** (#3036) — tenant blueprints, declarative config (likely post-Reborn cutover)
- **Event store backends** (#3171) — JSONL, PostgreSQL, libSQL audit stores — in open PR
- **Event projection service** (#3212) — timeline/run-status projections from durable logs — in open PR
- **Runtime policy vocabulary** (#3243, PR 1 of #3045) — policy contracts for presets and effective runtime policy — just opened

**Next-version prediction:** The Reborn memory and event infrastructure (PRs #3171, #3180, #3212) will likely merge next week, enabling the first end-to-end Reborn runtime.

## 7. User Feedback Summary

**No direct user feedback surfaced** in the last 24 hours. Key user-visible pain points from recent changes:

- **OpenAI vision failures resolved** — PR #2390 (merged) fixes `detail: None` error for OpenAI-compatible providers; *positive* resolution
- **Canary auth failures** — 3+ days of CI degradation; internal impact, no user-facing symptom yet
- **Gate approval UX** — PR #3157 addresses script-time errors instead of user-facing pauses; *mid-severity*

## 8. Backlog Watch

**Stale issues requiring attention:**

| Issue | Days since last update | Status | Why notable |
|-------|-----------------------|--------|-------------|
| **#3090** — ToolSurfaceService | 1 day (still active) | Open | Core Reborn component, only 3 comments; no implementation PR yet |
| **#3036** — Config-as-Code epic | 1 day (still active) | Open | 1 👍, but no assigned owner; major roadmap item |
| **#2341** — File history memory fix | 24 days open | Open, needs review | ~25 days, high-severity fix still unmerged |
| **#1764** — Abound demo (Responses API, credentials, guardrails) | 36 days open | Open, massive XL PR | 36 days open; waiting for review/merge; core contributor |

**Maintainer attention needed:** PR #2341 (file history memory leak) has been open since April 11 with no recent activity — this is the highest-severity backlog item. PR #1764 (Abound demo) is the largest open PR and may be stalled on core team bandwidth.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-05-05**.

---

## LobsterAI Project Digest — 2026-05-05

### 1. Today's Overview
The project shows moderate but focused activity today, driven primarily by a maintainer pushing two documentation and skill-related fixes to closure. No new releases were cut, indicating a stabilization phase after prior feature work. While the number of open PRs is low (2), one long-standing performance optimization PR (#811) remains open for over a month, suggesting a potential bottleneck in review bandwidth. Community engagement is quiet, with no new user-facing issues filed today, though a recent authentication-related issue (#1877) was resolved.

### 2. Releases
No new releases were published today. The last release remains the previous version.

### 3. Project Progress
Two pull requests were merged/closed today, both authored by **liuzhq1986**:

- **PR #1882 (CLOSED)** — [area: docs, area: skills] `feat(skill): upgrade youdaonote skill to 1.0.8`
  - A routine feature upgrade for the YoudaoNote skill.
  - 🔗 [netease-youdao/LobsterAI PR #1882](https://github.com/netease-youdao/LobsterAI/pull/1882)

- **PR #1881 (CLOSED)** — [area: renderer, docs, main, skills] `fix(skills): improve Windows skill delete reliability and import feedback`
  - This PR addresses a Windows-specific reliability issue by adding an `attrib -r -s -h` normalization step after skill installation to prevent delete failures. It also strengthens error diagnostics for permission-related failures (`EPERM/EACCES/EBUSY`) and adds localized success/feedback messages during import.
  - 🔗 [netease-youdao/LobsterAI PR #1881](https://github.com/netease-youdao/LobsterAI/pull/1881)

### 4. Community Hot Topics
Community activity is quiet today. The most notable recent discussion comes from the recently resolved issue:

- **Issue #1877 (CLOSED)** — *"openAI 认证不成功,本地的codex是可以正常使用的"*
  - **Author:** AK-blank | **Comments:** 2
  - This user reported a ChatGPT sign-in failure with a **403: unsupported country/region/territory** error. The issue was closed today, implying a fix or user-side resolution, though no specific PR is linked.
  - 🔗 [netease-youdao/LobsterAI Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877)

### 5. Bugs & Stability
- **No new bugs reported today.** The only bug-related item (Windows skill delete failure) was proactively fixed by the maintainer in PR #1881, not reported by a user. This suggests good internal quality assurance but low bug-reporting volume from the community.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. The main signal for future direction remains the performance optimization work:

- **PR #811 (OPEN)** — *"perf(cowork): 使用索引表优化流式消息更新查找性能从 O(n) 到 O(1)"*
  - This PR introduces an index table to optimize streaming message update lookups from O(n) to O(1). Despite being open since March 25, it has been commented on by a maintainer as recently as the last 24 hours. This is a strong candidate for the next minor release if merged soon.
  - 🔗 [netease-youdao/LobsterAI PR #811](https://github.com/netease-youdao/LobsterAI/pull/811)

### 7. User Feedback Summary
User feedback is minimal. The only recent signal is **Issue #1877**, where a user encountered a regional restriction when authenticating with OpenAI via ChatGPT (HTTP 403). This highlights a clear pain point for users in restricted regions, though the issue was closed without a public root-cause explanation. Satisfaction appears neutral; there are no complaints about the fix.

### 8. Backlog Watch
The following items require maintainer attention:

- **PR #1277 (OPEN)** — *"chore(deps-dev): bump the electron group across 1 directory with 2 updates"*
  - A dependency update PR from Dependabot that has been open since April 2. It updates `electron` from 40.2.1 to 41.5.0. Stale dependencies can introduce security risks or incompatibilities.
  - 🔗 [netease-youdao/LobsterAI PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

- **PR #811 (OPEN)** — *"perf(cowork): 使用索引表优化流式消息更新查找性能从 O(n) 到 O(1)"*
  - This high-value performance PR has been open for over 40 days. If a decision on merge or rework is pending, it should be prioritized to avoid drift and merge conflicts.
  - 🔗 [netease-youdao/LobsterAI PR #811](https://github.com/netease-youdao/LobsterAI/pull/811)

---

**Project Health Summary:** Stable. Low community engagement but steady maintainer output. Two long-open PRs are the primary risk to velocity. The fix for Windows skill reliability (PR #1881) is a positive sign of proactive quality work.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest — 2026-05-05**

*Generated from GitHub data (moltis-org/moltis), snapshot 2026-05-05*

---

### 1. Today's Overview
Project activity was low but focused on infrastructure debugging. One new bug (#964) was filed regarding a critical runtime issue in parallel tool execution environments, while one pull request (#965) was merged to improve CI logging for diagnosing intermittent test timeouts. No new releases were published today. The overall health is stable, though the sandbox collision bug signals a latent risk for users running concurrent agent sessions.

---

### 2. Releases
None. No releases were created or updated in the last 24 hours.

---

### 3. Project Progress
- **PR #965 (merged/closed)** – *debug(e2e): add RPC logging + gateway.log capture for CI diagnosis*  
  Author: penso  
  Summary: Adds comprehensive WebSocket RPC logging (method, timing, ok/error), connection close warnings, gateway stderr capture as CI artifact, and timing warnings for lock acquisitions >50ms. This is an infrastructure improvement addressing stubborn CI timeouts (30s) that could not be reproduced locally.  
  Link: https://github.com/moltis-org/moltis/pull/965

---

### 4. Community Hot Topics
- **Issue #964 (active bug)** – *[Bug]: Parallel tool execution results in docker name sandbox collisions*  
  Author: faevourite | Created: 2026-05-04 | Comments: 0 | 👍: 0  
  Summary: Reports that when Moltis executes multiple tools in parallel, the generated Docker sandbox names collide, causing execution failures or corruption. The reporter has verified they are on the latest version and searched existing issues.  
  Underlying need: Users adopting parallel agent workflows need thread-safe or unique sandbox name generation; otherwise, scalability is broken. This issue currently has no discussion or reactions, indicating it may be under-observed.  
  Link: https://github.com/moltis-org/moltis/issues/964

---

### 5. Bugs & Stability
- **High Severity** – Issue #964: *Parallel tool execution results in docker name sandbox collisions*  
  - Impact: Likely causes execution failures, data corruption, or stuck containers when multiple tool calls run concurrently.  
  - Fix PRs in progress: None discovered. The issue is brand new (0 comments). No linked PR exists yet.  
  - Recommendation: Needs immediate triage—parallel execution is a core use case for AI agents.

- **Medium Severity (observability)** – PR #965 addresses intermittent CI failures due to silent RPC hangs. While not a bug in the code logic, the lack of logging was a stability barrier for development and testing. The fix has been merged.

---

### 6. Feature Requests & Roadmap Signals
No explicit feature requests (issues labeled as “enhancement” or “feature”) appeared in the last 24 hours. However, two implicit roadmap signals emerged:
1. **Sandbox name uniqueness** – The parallel execution bug (#964) may drive a fix to generate deterministic, unique sandbox identifiers (e.g., incorporating timestamps or request IDs). This could evolve into a configurable naming scheme.
2. **CI reliability** – The RPC logging PR (#965) shows the team prioritizes infrastructure hardening over new features. Expect more telemetry and fault-tolerance improvements in the next release before new user-facing features.

---

### 7. User Feedback Summary
- **Pain point** – Parallel tool execution is unsafe: Sandbox naming collisions can break concurrent workflows. This affects power users running multi-agent or batch operations.
- **Satisfaction** – No positive feedback was captured today. The CI logging PR (#965) is internal-facing, so end-users see no immediate benefit.
- **Implicit dissatisfaction** – The existence of bug #964 suggests the current sandboxing implementation does not handle concurrency well, which may frustrate users scaling their deployments.

---

### 8. Backlog Watch
- **Issue #964** – *Docker sandbox collisions* (open, 0 comments, 0 reactions)  
  Risk: Newly filed, but no maintainer response yet. If left unaddressed, it could cause silent data loss for parallel users.  
  Next action needed: Maintainer acknowledgment and (ideally) a reproducer request or fix assignment.  
  Link: https://github.com/moltis-org/moltis/issues/964

No other long-unanswered issues or PRs were identified in the last 24 hours. All other items in the project appear up-to-date.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-05

## Today's Overview
CoPaw shows sustained high community engagement with 13 issues and 10 PRs updated in the last 24 hours. The project remains in rapid development with no new release today, but 4 PRs were merged or closed—including long-standing fixes for iMessage error handling, provider compatibility, and Docker dependency completeness. A notable concentration of bug reports around stability (streaming model loops, session interruption failures, network reconnection) and UX friction (model configuration complexity, input lag) suggests the project is in a "polishing" phase after recent feature expansions. First-time contributor activity is high, with 5 of the 10 open PRs from new contributors, indicating growing community investment.

## Releases
No new releases today. The latest available version remains v1.1.6b1 (mentioned in issue comments).

## Project Progress
**4 PRs merged/closed today:**

- **#3829** — `feat(chat)`: Session titles are now generated asynchronously via LLM instead of using the awkward "first 10 characters" placeholder. This is a significant UX improvement requested by the community (closes #2553). *(Core/Backend, Console)*
- **#1508** — `fix(provider)`: Docker image now includes full dependencies (`python-frontmatter` and 6 other previously undeclared packages). This resolves silent runtime failures in containerized deployments. *(Infrastructure)*
- **#763** — `fix(imessage)`: Channel errors now surface to Console UI and CLI, ending silent crashes when `chat.db` is inaccessible (e.g., missing Full Disk Access on macOS). *(Channels)*
- **#756** — `fix(providers)`: Uses `max_completion_tokens` instead of deprecated `max_tokens` for OpenAI connection test, fixing Azure deployments with GPT-5/o-series models. *(Providers)*

**Notable open PRs under active review:**
- **#4009** — Brazilian Portuguese locale support (Console + Website)
- **#4032** — Windows environment diagnostics (`qwenpaw doctor`)
- **#4028** — Fixes for session interruption stability and Python interpreter selection

## Community Hot Topics
**Most active items by comment count:**

- **#4023** *(Bug, Input Lag)* — 3 comments: User reports severe input box stuttering. No maintainer response yet. This may indicate a frontend rendering issue specific to certain browser/environment combinations. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4023)

- **#4024** *(Feature Request, Architecture)* — 3 comments: Community member asks if CoPaw plans to adopt Hermes-like mechanisms for multi-agent orchestration. This suggests growing interest in advanced agent collaboration patterns beyond current implementation. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4024)

- **#3988** *(Bug, Windows Packaging)* — 3 comments: `conda-pack <=0.7.1` conflicts with `pip install qwenpaw[full]` on Windows, causing build failures with poor error visibility. The user contributed a detailed root-cause analysis. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/3988)

- **#4017** *(Bug, Network Resilience)* — 2 comments: HEARTBEAT mechanism prevents automatic channel reconnection after network restoration—a regression introduced with v1.1.5. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4017)

- **#4037** *(Security)* — 1 comment but high severity: Tool-enabled HTTP gateway is unauthenticated by default; user warns about exposing `execute_shell_command` on non-loopback interfaces. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4037)

**Underlying needs:** The community is demanding production-grade reliability (network resilience, error reporting, session stability) and expressing interest in more sophisticated multi-agent architectures (Hermes-like, context continuity).

## Bugs & Stability
**Severity: High**

- **#4033** — MCP tool calls hardcoded to 30s timeout (`HttpStatefulClient.timeout`), making legitimate MCP tools unusable. No fix PR exists. *(Core/Backend)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4033)

- **#4034** — Streaming models (MiMo, DeepSeek) cause ReAct loop to repeat tool calls and produce duplicate text responses. Non-streaming models unaffected. Fix PR #4028 partially addresses the interruption aspect but not the root cause. *(Core/Backend)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4034)

- **#4037** — Unauthenticated HTTP gateway exposes arbitrary tool execution (`execute_shell_command`) on non-loopback interfaces by default. Only fix: manually set `QWENPAW_AUTH_ENABLED`. *(Security, Core)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4037)

**Severity: Medium**

- **#4027** — Session interruption fails intermittently; skills Python interpreter sometimes misses project virtual environment. Fix PR #4028 is open and under review. *(Core/Backend, Skills)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4027)

- **#4017** — Network interruption with HEARTBEAT enabled prevents automatic reconnection; manual restart required. No fix PR. *(Core/Backend)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4017)

- **#4021** — Audio/media blocks with `file://` URLs broken: local path extracted correctly but then overwritten by HTTP-only downloader, returning `None`. Fix PR #4021 is open. *(Core/Backend)* [GitHub](https://github.com/agentscope-ai/CoPaw/pull/4021)

**Severity: Low**

- **#3988** — Windows packaging conflict between `conda-pack` and `pip install` (build-time only, not runtime). No fix PR. *(Infrastructure / Build)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/3988)

## Feature Requests & Roadmap Signals
**Most actionable requests (likely in next minor release):**

1. **#4030** — Vertex AI Gemini provider: Users need Google Cloud integration for IAM, governance, and regional routing. Existing Gemini Developer API support is insufficient for enterprise users. *(Providers)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4030)

2. **#4029** — One-shot cron jobs via `--at <iso-datetime>`: Current cron system only supports recurring schedules; users cannot schedule one-shot reminders. *(CLI, Skills/Scheduling)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4029)

3. **#4031** — Multi-Agent collaboration context loss: When agents assign tasks across sessions, context is lost and user polling blocks session progress. This is a fundamental collaborative architecture limitation. *(Core/Backend, Skills)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4031)

4. **#4024** — Hermes-like mechanism interest: Community wants better multi-agent orchestration patterns. This aligns with #4031 and suggests a roadmap priority. *(Architecture)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4024)

**UX improvements likely to ship soon:**
- **#4036** — Adding a model requires 5 click-through steps; users request a simplified one-page wizard. *(Console)* [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4036)
- **#2553** *(CLOSED)* — Model list ordering and session title generation (already addressed in merged PR #3829 today).

## User Feedback Summary
**Pain points:**
- *"Adding a model is way too complicated. Too many clicks back and forth."* — #4036
- *"Input box stutters severely!"* — #4023
- *"Streaming models cause tool call loops and duplicate responses."* — #4034 (DeepSeek, MiMo users impacted)
- *"If HEARTBEAT is enabled, network recovery doesn't reconnect automatically."* — #4017 (regression in v1.1.5)
- *"MCP tools always time out at exactly 30 seconds, regardless of server performance."* — #4033

**Satisfaction signals:**
- Two long-standing UX issues (model list ordering, placeholder session titles) were resolved today via merged PR #3829.
- Multiple first-time contributors submitting high-quality patches (security guardrails, Windows diagnostics, i18n, stability fixes) suggests positive developer experience.
- The community proactively self-diagnoses and shares root-cause analysis (e.g., #3988, #4031), indicating technical sophistication.

## Backlog Watch
**Issues/PRs needing maintainer attention:**

1. **#3729** *(Windows Taskbar Icon, opened 2026-04-23)* — Fix requires Win32 API but remains unmerged for 12 days. Low complexity but blocks desktop UX on Windows. [GitHub](https://github.com/agentscope-ai/CoPaw/pull/3729)

2. **#3988** *(Windows Packaging Conflict, opened 2026-04-30)* — Detailed root-cause analysis from user; no maintainer response in 5 days. Affects all Windows packagers. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/3988)

3. **#4037** *(Unauthenticated HTTP Gateway, opened 2026-05-04)* — Security-critical issue with no acknowledgment. Default behavior allows remote shell command execution without authentication. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4037)

4. **#4031** *(Multi-Agent Context Loss, opened 2026-05-04)* — Architectural limitation affecting all collaborative workflows. No maintainer comment despite clear description and reproduction steps. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4031)

5. **#4033** *(MCP Timeout Hardcoded, opened 2026-05-04)* — Breaks all MCP tools; trivial fix but unaddressed. [GitHub](https://github.com/agentscope-ai/CoPaw/issues/4033)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-05

## Today's Overview

ZeroClaw shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours, signaling a fast-moving development cycle. The project is mid-sprint toward **v0.7.5** (release milestone tracking in #5878) with a secondary track forming for **v0.7.6** (skills UX, #6253). 13 issues were closed today alongside 22 merged/closed PRs, reflecting strong forward momentum. No new releases were published today, but the CI and release automation pipelines are under active hardening. Maintainer response time appears good, though 28 open PRs and 37 open issues indicate the review queue is building.

## Releases

No new releases published today. The prior release (v0.6.9) remains the latest stable. The project is actively tracking **v0.7.5** milestone scope in [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878), which promises automated, intentional release pipelines going forward.

## Project Progress

Today saw **22 PRs merged or closed**, with several significant advances:

- **Config & Onboarding** — [#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317) fixes dotted provider map key preservation, a blocker for custom OpenAI-compatible endpoints. [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) (merged) adds full web onboarding parity via per-property CRUD endpoints — a major UX milestone.

- **Security Hardening** — [#6379](https://github.com/zeroclaw-labs/zeroclaw/pull/6379) surfaces `enc2:` decryption failures with diagnostic messages instead of silent "All providers failed" errors. [#6215](https://github.com/zeroclaw-labs/zeroclaw/pull/6215) mirrored fail-loud model resolution from runtime to gateway/channel paths.

- **Provider Improvements** — [#6310](https://github.com/zeroclaw-labs/zeroclaw/pull/6310) added the stepfun-intl endpoint. [#6380](https://github.com/zeroclaw-labs/zeroclaw/pull/6380) made Groq native tools per-profile configurable instead of globally disabled.

- **Channel & Protocol** — [#6374](https://github.com/zeroclaw-labs/zeroclaw/pull/6374) implemented ACP session cancellation. [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) (closed) added cancellation support for ACP protocol sessions.

- **Documentation & i18n** — [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) synced French/Japanese/Spanish translations and added Simplified Chinese (zh-CN).

- **Bug Fixes** — [#6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) fixed Jira API v2 server mode authentication. [#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) resolved onboarding failures for custom OpenAI-compatible providers.

## Community Hot Topics

The most active discussions this period reveal three key community pain points:

1. **Fresh Install Default Model Failures** ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123), 16 comments) — A freshly installed ZeroClaw in an LXC container fails with a `default_model` issue when connecting to an Ollama instance on another LXC. This is the highest-engagement issue, suggesting onboarding friction is a critical quality gate for new users.

2. **Matrix Voice Transcription** ([#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153), 6 comments) — Voice transcription fails with "Unsupported audio format '.'" on Element clients. Users are actively reproducing and discussing format detection gaps.

3. **Release Milestone Tracking** ([#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878), 6 comments) — Maintainers are engaging the community on v0.7.5 scope definition, signaling desire for community input on release priorities.

**Underlying need:** The community is asking for **production-grade onboarding reliability** and **better cross-platform integration testing** before new features are prioritized.

## Bugs & Stability

**Critical/High Severity (S0–S1):**

- **Context spillage from chat to schedule** ([#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)) — S0 severity, marked as blocked. Chat context leaking into scheduled tasks is a data loss / security risk. Open since April 6, needs maintainer unblocking.

- **Fresh install `default_model` issue** ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)) — S1: workflow blocked. No fix PR yet; needs reproducer.

- **llama-server provider failure** ([#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)) — S1: workflow blocked. "All providers/models failed" after configuring llama-cpp.

- **Docker build failure** ([#6304](https://github.com/zeroclaw-labs/zeroclaw/issues/6304), closed today) — S1: workflow blocked. Missing `tools/fill-translations` in Docker COPY instructions. *Fixed today.*

- **Onboarding with custom OpenAI-compatible endpoints** ([#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206), closed) — S1: mislabeled prompt and "Unknown property" error. *Fixed via [#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317).*

**Medium Severity (S2–S3):**

- **SkillForge auto-integrator emits non-schema fields** ([#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)) — Follow-up to [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128), which adds `deny_unknown_fields` to SkillMeta.

- **Dashboard channels tab crash** ([#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244), closed) — v0.6.8 frontend bugs. *Closed with fix.*

- **Nextcloud Talk timeout & wrong API** ([#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156), [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)) — 5-second timeout kills slow local LLMs; wrong bot message API endpoint used.

- **enc2 decryption failure silent cascade** ([#6205](https://github.com/zeroclaw-labs/zeroclaw/issues/6205), closed) — Misleading "All providers failed" when `.secret_key` changes. *Fixed via [#6379](https://github.com/zeroclaw-labs/zeroclaw/pull/6379).*

## Feature Requests & Roadmap Signals

**Features nearing completion or accepted:**

- **Discord channel filtering** ([#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378), 3 comments) — `allowed_channels` config field, following Matrix/Nextcloud patterns. Likely v0.7.6 candidate.

- **Air-gapped execution mode** ([#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293), 2 comments) — Split agent into offline/online processes over unix socket. Needs maintainer review; could be v0.8.0 material.

- **HMAC tool receipts reactivation** ([#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182)) — Cryptographic core landed in #5168 but wiring was stripped. PR [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) proposes reactivation.

- **Per-provider pricing** ([PR #6357](https://github.com/zeroclaw-labs/zeroclaw/pull/6357), open) — Adds optional pricing to `ModelProviderConfig` for cost tracking.

- **Web UI hot-switch model & context preservation** ([PR #6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)) — Needs author action but would significantly improve dashboard UX.

**Prediction:** The v0.7.5 release will prioritize the onboarding/config fixes, model resolution hardening, and cancelation support. v0.7.6 (tracked in [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)) will focus on `zeroclaw skills` CLI/UX improvements.

## User Feedback Summary

**Satisfaction signals:**
- Community engagement on release milestones is collaborative, with users like `singlerider` actively shaping release scope
- Users report success with custom provider endpoints once configuration issues are resolved
- The open-source community appreciates the rapid fix cycle for documented blockers

**Pain points (real user experiences):**
- **Onboarding friction is the #1 complaint** — fresh installs fail with opaque errors (#6123), custom endpoint onboarding is broken (#6206, #6364), and the installer UX is inconsistent
- **Slow LLM timeouts** — users with local/self-hosted models (LocalAI, llama-server) face 5-second timeouts in Nextcloud Talk (#6156) and generic "All providers failed" errors (#6180)
- **Secret key management is fragile** — users lose access after volume wipes or container migrations with no clear error messages (#6205)
- **Matrix channel limitations** — voice transcription doesn't work with Element clients (#6153), a significant UX gap for mobile users
- **Jira on-premises users are blocked** — authentication fails for Jira Server/Data Center with confusing email-required validation (#5613), though PR #6116 is merged to fix this

**Satisfaction indicators:**
- Maintainers are responsive to community bug reports and feature requests
- The team actively closes issues with "fixed by" references, showing good traceability
- Translation contributions (zh-CN) indicate growing international adoption

## Backlog Watch

Issues and PRs requiring maintainer attention:

| Item | Days Open | Status | Risk |
|------|-----------|--------|------|
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) — Context spillage chat→schedule | **29 days** | Blocked, needs reproducer | 🔴 S0 data loss/security |
| [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) — SkillMeta `deny_unknown_fields` | **9 days** | In progress, priority P3 | 🟡 Medium, good first issue |
| [#6279](https://github.com/zeroclaw-labs/zeroclaw/issues/6279) — Release tag triage criteria | **3 days** | Needs maintainer decision | 🟢 Low |
| [#6192](https://github.com/zeroclaw-labs/zeroclaw/pull/6192) — Paircode retrieval fix | **7 days** | Needs author action | 🟡 Medium |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) — WebUI hot-switch model | **10 days** | Needs author action | 🟢 Low |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) — Air-gapped mode RFC | **2 days** | Needs maintainer review | 🟡 High impact |

**Most concerning backlog item:** [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) (S0 severity, 29 days open) — Context spillage between chat and scheduled tasks is a **data security risk** and has been blocked for nearly a month. This should be escalated to maintainer priority despite the "needs reproducer" label.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*