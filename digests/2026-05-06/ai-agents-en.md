# OpenClaw Ecosystem Digest 2026-05-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-06 04:36 UTC

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

# OpenClaw Project Digest
**Date:** 2026-05-06

---

## 1. Today's Overview

OpenClaw is experiencing **extreme activity levels**, with 500 issues and 500 PRs updated in the last 24 hours, signaling either a major release cycle or a significant community response to recent regressions. The project has released two versions today (v2026.5.4 and v2026.5.4-beta.3), both focused on improving Google Meet/Twilio voice bridge performance. However, the **high volume of closed issues (338) and merged/closed PRs (148)** suggests a substantial cleanup and stabilization effort is underway. Community engagement is intense, driven largely by **regression bugs** in the v2026.5.x series, particularly around gateway performance (CPU pinning), message delivery failures (Telegram, Discord), and UI/UX regressions (messages disappearing). The project remains healthy but is clearly in a **stabilization-focused sprint** following a period of rapid feature development.

---

## 2. Releases

### v2026.5.4 (Stable) & v2026.5.4-beta.3
- **Tag:** `v2026.5.4`
- **Release notes:** OpenClaw 2026.5.4

**Changes:**
- **Google Meet/Voice Call:** Twilio dial-in joins now speak through the realtime Gemini voice bridge with paced audio streaming, backpressure-aware buffering, barge-in queue clearing, and no TwiML fallback during realtime speech, giving Meet participants a much snappier experience.

**Breaking Changes/Removals:** None noted.

**Migration Notes:** Upgrade recommended for all Google Meet/Twilio voice users. No configuration changes required.

---

## 3. Project Progress

### Merged/Closed PRs Today (overview)
- **Total merged/closed PRs in last 24h:** 148
- Notable closed PRs (from top 30 list):

| PR | Title | Analysis |
|----|-------|----------|
| [#78266](https://github.com/openclaw/openclaw/pull/78266) | fix(shell-env): hide Windows login shell probe | 🛠️ Platform compatibility fix for Windows |
| [#78265](https://github.com/openclaw/openclaw/pull/78265) | fix(plugins): clear hidden npm lock during peer repair | 🛠️ Plugin installation reliability |
| [#78158](https://github.com/openclaw/openclaw/pull/78158) | fix(slack): enable native socket reconnect | 🛠️ Slack channel stability fix |
| [#77016](https://github.com/openclaw/openclaw/pull/77016) | (various) | Active maintainer PRs in agents/plugins |

### Features That Advanced
- **Slack channel reliability:** Native socket reconnect enabled ([#78158](https://github.com/openclaw/openclaw/pull/78158))
- **Plugin installation reliability:** npm lock cleanup during peer repair ([#78265](https://github.com/openclaw/openclaw/pull/78265))
- **Agent config concurrency:** Retry logic for concurrent agent config modifications ([#76601](https://github.com/openclaw/openclaw/pull/76601))
- **Signal channel improvements:** Reply context, reaction wake, quoted replies ([#49145](https://github.com/openclaw/openclaw/pull/49145))

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | 🔥 | Summary |
|-------|-------|----------|-----|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 104 | 74 👍 | Long-standing request for desktop clients beyond macOS/iOS. High community interest. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | 25 | — | Critical UX bug: internal agent processing text visible to users. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK releases | 24 | 1 👍 | Community wants precompiled Android builds, not just source code. |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | Track live dev agent behavior and trajectory | 22 | 1 👍 | Maintainer-run observation of agent behavior in production. |
| [#77668](https://github.com/openclaw/openclaw/issues/77668) | Discord gateway hang (macOS) | 21 | 2 👍 | Regression: Discord gateway silently hangs on macOS after restart. |

### Underlying Needs Analysis
- **Cross-platform gaps:** Issue #75 (104 comments) shows a persistent need for **desktop parity across Windows/Linux**. This is the single most-commented issue in the project.
- **Message delivery reliability:** Multiple issues about messages being lost, dropped, or silently failing (#25592, #77668, #76763) suggest **core message routing needs hardening**.
- **Build distribution:** Issue #9443 reflects frustration that Android users must build from source. Community wants **prebuilt APKs** for easier adoption.

---

## 5. Bugs & Stability

### Critical/High Severity Regressions

| Bug | Severity | Impact | Fix Status |
|-----|----------|--------|------------|
| **Discord gateway hang on macOS** ([#77668](https://github.com/openclaw/openclaw/issues/77668)) | **HIGH** - Gateway never reaches READY state | Complete Discord channel failure on macOS | No PR linked |
| **Messages disappearing from UI** ([#76763](https://github.com/openclaw/openclaw/issues/76763), [#77374](https://github.com/openclaw/openclaw/issues/77374)) | **HIGH** - Assistant replies silently deleted | Data loss, user confusion | No PR linked |
| **Long-output agent truncation** ([#76307](https://github.com/openclaw/openclaw/issues/76307)) | **HIGH** - Replies truncated at ~25-80 chars | Complete usability failure for long responses | ✅ Closed |
| **CPU pinned at 100%** ([#75707](https://github.com/openclaw/openclaw/issues/75707), [#76382](https://github.com/openclaw/openclaw/issues/76382)) | **HIGH** - Gateway consumes 100% CPU at idle | System resource exhaustion, unusable | No PR linked |
| **Telegram forum topic replies not delivered** ([#76554](https://github.com/openclaw/openclaw/issues/76554)) | **HIGH** - Replies in transcript but not sent | Telegram channel broken | ✅ Closed |
| **Command replies silently dropped** ([#77260](https://github.com/openclaw/openclaw/issues/77260)) | **HIGH** - Channel config dependent | Group chat regression | No PR linked |
| **Agent replies to wrong message** ([#32296](https://github.com/openclaw/openclaw/issues/32296)) | **MEDIUM** - Session context confusion | Conversation misalignment | No PR linked |

### Regression Pattern
The v2026.5.x series has introduced a cluster of regressions:
- **Gateway performance:** Multiple reports of 100% CPU (issues #75707, #76382, #76552) after v2026.4.24+ upgrades
- **Channel-specific failures:** Discord hang (macOS), Telegram replies not delivered, Google Chat auth broken — each fails differently
- **UI/UX regressions:** Messages disappearing from WebChat/Control UI, text truncation

---

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release
1. **Cross-platform desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) — Linux/Windows Clawdbot apps. Long-standing (since Jan 2026), 104 comments, maintainer labels "help wanted". High community and maintainer priority.
2. **Prebuilt Android APK** ([#9443](https://github.com/openclaw/openclaw/issues/9443)) — Easier Android distribution. 24 comments, actively discussed.
3. **Command-content deny patterns** ([#41140](https://github.com/openclaw/openclaw/issues/41140)) — Security improvement: allow binary path + command content matching. Closed and likely merged.

### Emerging Signals
- **Security profile v1.1** ([#8719](https://github.com/openclaw/openclaw/issues/8719)) — Data-centric security model proposal gaining traction (6 comments, 3 👍)
- **Auto-update workflow** ([#12855](https://github.com/openclaw/openclaw/issues/12855)) — Configurable scheduled updates. Community requested, addresses pain points.
- **Dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) — Real-time OpenRouter model catalog sync. Important for rapidly changing provider offerings.

### Prediction
The **cross-platform desktop apps** issue (#75) is the oldest and most-commented open feature request. Its "help wanted" label and 74 reactions suggest it may be the next major project initiative. Expect a roadmap item or RFC in the coming weeks.

---

## 7. User Feedback Summary

### Pain Points (Real User Reports)
- **"Messages disappear"** ([#76763](https://github.com/openclaw/openclaw/issues/76763)) — User reports AI-generated messages "often hidden" when trying to reread them. Frustration with data loss.
- **"Your Updates Are Killing Your Product"** ([#65302](https://github.com/openclaw/openclaw/issues/65302)) — A passionate (Chinese-language) essay by user "邵小红 (Scarlet)" criticizing the pace and quality of updates, comparing OpenClaw to "a product in self-destruct mode." 10 comments, 6 👍. Significant community resonance.
- **"Slash commands silently dropped"** ([#77260](https://github.com/openclaw/openclaw/issues/77260)) — User reports `/new`, `/status` commands fail silently in group chats when `visibleReplies` is `message_tool`. "Worked previously."
- **"Session prep phase 48s every turn"** ([#76186](https://github.com/openclaw/openclaw/issues/76186)) — Every message triggers full rebuild, costing 48-50 seconds before generation starts. This is a **major UX degradation** for interactive use.

### Satisfaction Signals
- **Releases are frequent** (two today) — Shows responsiveness, but also suggests churn.
- **Community engagement is high** — 500+ issues/PRs updated in 24h indicates an active and invested user base.
- **Maintainer responsiveness** — Many critical bugs (Discord hang, Telegram delivery, CPU issues) are being actively triaged with high-speed release cadence.

---

## 8. Backlog Watch

### Long-Unanswered Issues Requiring Attention

| Issue | Age | Last Updated | Status | Reason for Concern |
|-------|-----|--------------|--------|---------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Desktop) | ~126 days (Jan 1) | 2026-05-06 | OPEN, `help wanted` | Most-commented open issue (104). Community waiting for maintainer commitment. |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) (Suppress sub-agent announce) | ~93 days (Feb 3) | 2026-05-06 | OPEN | 6 comments, 1 👍. Simple config change requested, no action taken. |
| [#9637](https://github.com/openclaw/openclaw/issues/9637) (Accessibility: disable emojis in TUI) | ~91 days (Feb 5) | 2026-05-06 | OPEN | Screenreader users blocked by unicode symbols. Accessibility issue. |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) (Webhook multi-turn support) | ~88 days (Feb 8) | 2026-05-05 | OPEN | Documented feature doesn't work — `sessionKey` always generates new session. |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) (`memoryFlush` unreliable) | ~87 days (Feb 9) | 2026-05-05 | OPEN | Memory compaction fires every **other** cycle. Affects long-running agents. |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) (Auto-update workflow) | ~87 days (Feb 9) | 2026-05-05 | OPEN | Feature request with no maintainer response. |

### Stale PRs Needing Review
- **29 PRs** by user `Alix-007` (issues `#56847`, `#57635`, `#54606`, `#54641`, `#52157`, `#50256`, `#48971`, `#50304`, `#50163`, `#48989`) — All marked `stale` and `needs-real-behavior-proof`. These represent a **significant backlog of fixes** (MIME sanitization, Discord audio, Mattermost config, command fixes) that remain unmerged since March 2026.

### Recommendations
1. **Address the `Alix-007` PR backlog** — 29 small, targeted fixes stalled for 6-7 weeks. Clean them up or close them.
2. **Respond to issue #75** — The community's most-demanded feature needs a maintainer roadmap commitment.
3. **Triage the `needs-real-behavior-proof` PRs** — Many pending PRs lack the "real behavior proof" label requirement. Either accept with existing proofs or ask for more.

---

## Summary Assessment

| Metric | Status |
|--------|--------|
| **Activity Level** | 🔥 Extremely high (500 issues + 500 PRs updated in 24h) |
| **Release Cadence** | ✅ Healthy (2 releases today) |
| **Regression Severity** | ⚠️ Elevated (multiple channel-breaking bugs in 5.x series) |
| **Community Sentiment** | 🟡 Mixed — active engagement but frustration with regressions |
| **Backlog Health** | 🔴 Concerning (stale PRs, unanswered feature requests) |
| **Core Stability** | 🟡 Stable but fragile (periodic CPU, memory, delivery issues) |

**Bottom line:** OpenClaw is in a **stabilization phase** after rapid feature velocity. The community is vocal and engaged, but the v2026.5.x regression cluster is causing real pain. The project would benefit from a **focused stabilization sprint** before moving to the next feature milestone.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries for **2026-05-06**.

---

## Cross-Project Ecosystem Report: Personal AI Agents & Assistants
**Date:** 2026-05-06

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is currently defined by a bi-modal phase: rapid feature iteration and aggressive stabilization. While projects like OpenClaw, ZeroClaw, and IronClaw show signs of deep architectural refactoring—leading to significant regression clusters—smaller projects like Moltis and ZeptoClaw are in quiet maintenance phases. A strong community demand for cross-platform parity (Windows/Linux/macOS), reliable message delivery, and enhanced security (sandboxing, credential management) is emerging as a universal theme. The ecosystem is maturing from experimental integrations toward production-grade reliability, with **NanoBot** and **CoPaw** showing the highest ratio of community-contributed fixes relative to their issue volume, signaling a healthy contributor pipeline.

### 2. Activity Comparison

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Today | Health Score | Key Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ✅ v2026.5.4 & beta | ⚠️ Elevated | High regression cluster; stabilization sprint |
| **NanoBot** | 10 | 15 | ❌ | ✅ Healthy | Responsive bug fixes; good throughput |
| **Hermes Agent** | 50 | 50 | ❌ | ✅ Healthy | Very high activity; compressors maturing |
| **NullClaw** | 1 | 4 | ❌ | 🟢 Stable | Focused on critical Windows DNS blocker |
| **IronClaw** | 17 | 39 | ❌ | 🟡 Refactoring | Deep "Reborn" architecture re-write |
| **LobsterAI** | 1 | 16 | ❌ | ✅ Healthy | Focused cleanup, path traversal vulnerability |
| **CoPaw** | 23 | 10 | ❌ | 🟡 Moderate | Streaming bugs; active CI/CD work |
| **ZeroClaw** | 50 | 49 | ❌ | 🟡 Pre-release | High bug count, pre-v0.7.5 crunch |
| **PicoClaw** | 16 | 35 | ✅ Nightly | ✅ Healthy | Security sandbox issue, strong PR activity |
| **NanoClaw** | 9 | 49 | ❌ | ✅ Healthy | Setup UX overhaul; container flexibility |
| **Moltis** | 1 | 1 | ❌ | 🟢 Quiet | Single login bug; no feature work |
| **TinyClaw** | 0 | 0 | ❌ | Immune | No activity in 24h |
| **ZeptoClaw** | 0 | 11 (Dependabot) | ❌ | 🟢 Stable | Only dependency bumps |

**Aggregate:** ~680 Issues and ~770 PRs were updated across the ecosystem in the last 24 hours, indicating intense activity concentrated in 5 major projects.

### 3. OpenClaw’s Position

**Advantages:**
- **Dominant Community Size:** With 500 issues/PRs in 24h, OpenClaw’s community is an order of magnitude larger than its nearest competitor (ZeroClaw, 50 issues/PRs). This gives it unparalleled contributor velocity and rapid bug reporting.
- **High Release Cadence:** Two releases in one day demonstrates a responsive maintainer team that can ship fixes quickly, a critical advantage over slower-moving projects like IronClaw (no release on crates.io for months).
- **Core Reference Status:** As the “core reference” project, it sets the standard for architecture and features that plugins like PicoClaw and NanoClaw emulate.

**Technical Approach Differences:**
- **Monolithic Core + Plugin Architecture:** OpenClaw uses a large, integrated core with a plugin engine (agents/plugins). This contrasts with **NanoBot’s** modular “SDK Capture Hook” approach and **NullClaw’s** minimalist, shim-based cross-platform layer.
- **Gateway-Centric Design:** The heavy focus on gateway performance (CPU pinning, regression #75707) and voice bridges (Google Meet/Twilio) is unique. No other project in the ecosystem is deeply addressing Twilio / realtime speech integration at this scale.

**Comparison to Peers:**
- **Community Size:** OpenClaw > ZeroClaw > Hermes Agent > NanoBot > CoPaw. OpenClaw’s community engagement is roughly 10x that of the second-largest project.
- **Stability vs. Pace:** OpenClaw’s rapid release cycle comes at the cost of stability (multiple P1 regressions in the v2026.5.x series). In contrast, **NanoBot** and **LobsterAI** have a lower bug-to-feature ratio but slower velocity.
- **Memory & Context:** OpenClaw lacks the "Holographic Memory" or "Caveman compression" seen in Hermes Agent, and has no custom memory layers in active development.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating universal pain points:

1. **Cross-Platform Desktop Parity (Windows/Linux)**
   - *Projects:* OpenClaw (#75, 104 comments), NullClaw (Windows DNS bug #890), ZeroClaw (#6327 desktop improvements), PicoClaw (ARM64 testing)
   - *Need:* Users on macOS have a native app; Windows/Linux users are either blocked or forced to use CLI only.

2. **Message Delivery Reliability & UI Consistency**
   - *Projects:* OpenClaw (Discord hang, Telegram delivery, message disappearance), NanoBot (Telegram silent hang #3626), ZeroClaw (WhatsApp Web message flow), CoPaw (network reconnection)
   - *Need:* Core routing infrastructure is fragile across channels; silent failures erode user trust.

3. **Security Hardening & Sandbox Escape Prevention**
   - *Projects:* PicoClaw (`find /` sandbox escape #2688), LobsterAI (email path traversal #1885), NanoClaw (secret wipe #2286), ZeroClaw (MCP auto-approve wildcards #5273)
   - *Need:* A growing number of security advisories point to the need for workspace isolation and credential protection.

4. **Provider Flexibility & Error Transparency**
   - *Projects:* NanoBot (regional 403, DeepSeek API error), ZeroClaw (remote vLLM file paths), CoPaw (streaming model crashes), Hermes Agent (multi-model MCP credentials)
   - *Need:* Users are deploying on heterogeneous hardware (Raspberry Pi, remote LLMs, custom providers) and hitting opaque errors that require better logging and fallback mechanisms.

5. **Context/Memory Management**
   - *Projects:* Hermes Agent (Caveman compression, Holographic Memory), CoPaw (hierarchical subagents #4044), ZeroClaw (memory recall #5550), PicoClaw (infinite context #2774)
   - *Need:* Long-running sessions suffer from context inflation, dropped tool calls, and memory corruption.

### 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | ZeroClaw |
|---|---|---|---|---|---|
| **Core Architecture** | Monolithic + Plugin | Modular SDK | Compression-centric | Reborn (micro-kernel) | Typed-provider split (v0.8) |
| **Target User** | End-users (GUI, desktop) | Developers (SDK, hooks) | CLI/Power users | Rust ecosystem developers | Tauri desktop + Docker fleet mgmnt |
| **Key Feature Focus** | Voice bridges, cross-platform apps | Agent reliability, safety guards | Token cost reduction | Data governance, turn coordination | Developer tools, CI/CD automation |
| **Community Contribution Style** | High volume, many first-timers | Structured, well-reported bugs | Targeted, compression-focused | Core team heavy | Node dashboard, WhatsApp fixes |
| **Release Maturity** | Stable with regressions | Stable, responsive | Pre-release | Blocked on CVE (no crates.io) | Pre-release (v0.7.5) |

**Key Insight:** OpenClaw is the only project targeting the full consumer desktop experience with voice integration. Hermes Agent and IronClaw are the most architecturally ambitious, focusing on foundational runtime changes (compression, turn coordinator). ZeroClaw leads in developer tooling (CI/CD, dashboard). NanoBot is the best fit for developers who want a modular, reliable SDK with minimal overhead.

### 6. Community Momentum & Maturity

**Tier 1 - Rapidly Iterating (High Activity, High Risk):**
- **OpenClaw** — Extreme activity, but regression cluster risks alienating users. Must stabilize v2026.5.x.
- **ZeroClaw** — Pre-release crunch (v0.7.5). High bug volume; needs to close the loop on WhatsApp and default_model issues.
- **Hermes Agent** — Very high activity with 11 merged PRs. Compression pipeline is a strong differentiator.

**Tier 2 - Stabilizing (Moderate Activity, Low Regression):**
- **NanoBot** — Healthy throughput, good bug closure rate. Should be approaching a minor release.
- **LobsterAI** — Focused cleanup after a release. Security vulnerability (#1885) needs fast patching.
- **PicoClaw** — Steady growth; security sandbox issue is a blocking risk for embedded deployments.
- **NanoClaw** — Setup UX overhaul is a positive signal for onboarding. Container flexibility trend is strong.

**Tier 3 - Quiet / Maintenance:**
- **Moltis** — Low activity, single login bug. Project may be between maintainer cycles.
- **ZeptoClaw** — Only dependency updates. Healthy but dormant for feature work.
- **TinyClaw** — No activity. Candidate for archival or community handover.

**Tier 4 - Foundational (Architectural Focus):**
- **IronClaw** — Massive "Reborn" rewrite. The ecosystem should watch this as it will define Rust-based agent runtime patterns.

### 7. Trend Signals

1. **Voice & Realtime is the New Frontier:** OpenClaw’s Twilio/Google Meet integration is a leading indicator. Users expect agents to participate in meetings, not just chat.

2. **Self-Hosted LLM Proliferation:** The popularity of Ollama (mentioned across OpenClaw, ZeroClaw, CoPaw, NanoBot) combined with remote vLLM issues indicates users are aggressively deploying their own inference infrastructure.

3. **Production Reliability at Stake:** The emergence of Docker-specific bugs (ZeroClaw #6400, Hermes Agent #20500, NanoClaw #2286) and network-disconnect issues (CoPaw #4017, NanoBot #3626) shows that users are deploying agents in production 24/7 environments, not just for experimental use.

4. **Security is Becoming Non-Negotiable:** The simultaneous emergence of sandbox escapes (PicoClaw), path traversal (LobsterAI), and secret-wipe vulnerabilities (NanoClaw) suggests the ecosystem has outgrown its “early adopter” phase. Expect security audits and hardening to be a top priority for the next quarter.

5. **The “AI Agent Developer” is a Real Persona:** The presence of dedicated developer features (NanoBot’s SDK, ZeroClaw’s typed-provider split, Hermes Agent’s token optimization API) points to a new user category: developers building on top of these agents, not just using them.

---

**Bottom Line for Decision-Makers:**
- **For production reliability:** Choose **NanoBot** (stable, responsive) or **OpenClaw** (if you can tolerate regressions for feature velocity).
- **For experimentation:** **Hermes Agent** and **PicoClaw** offer the most creative feature sets (compression, embedded support).
- **To bet on the future:** Watch **IronClaw’s** Reborn architecture and **ZeroClaw’s** v0.8 typed-provider model for architectural innovation.

The ecosystem is healthy but fragmented. The winner will be the project that solves cross-platform reliability first—that is the single most common pain point across every active project.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-06

## Today's Overview
The NanoBot project shows **elevated activity** with 10 issues and 15 PRs updated in the last 24 hours, indicating a healthy development cadence. The team closed 9 PRs and 5 issues, suggesting good throughput on bug fixes and enhancements. No new releases were cut today, but the **v0.1.5.post3** version remains the current stable release with several fix PRs targeting known issues. The project continues to attract community contributions across agent reliability, channel integrations, and configuration improvements. Overall, the repository is in a **responsive maintenance phase** with active triage of both critical bugs and user-requested features.

## Releases
No new releases published today.

## Project Progress (Merged/Closed PRs — 9 total)
- **[PR #3620](https://github.com/HKUDS/nanobot/pull/3620)** — Fixed `RunResult.tools_used` and `RunResult.messages` being hard-coded to `[]` in the SDK facade. Now SDK consumers can see tool calls and final message lists via `SDKCaptureHook`. *(merged)*
- **[PR #3624](https://github.com/HKUDS/nanobot/pull/3624)** — Added opt-in `HallucinatedToolCallGuard` to detect when models claim to have performed actions without actual tool calls — improves honesty in agent responses. *(merged)*
- **[PR #3629](https://github.com/HKUDS/nanobot/pull/3629)** — Fixed Telegram allowlist enforcement so unauthorized users are silently ignored on `/start`, `/help`, and before typing/reaction side effects. *(merged)*
- **[PR #3631](https://github.com/HKUDS/nanobot/pull/3631)** — Fixed Dream cursor advancement bug: now only advances on completed batches, preventing silent memory entry loss (closes #3630). *(merged)*
- **[PR #3632](https://github.com/HKUDS/nanobot/pull/3632)** — Feishu channel now returns absolute paths for downloaded media files instead of just filenames, fixing transcription placeholders. *(merged)*
- **[PR #3634](https://github.com/HKUDS/nanobot/pull/3634)** — Added `agents.defaults.maxConcurrentSubagents` config option (default: 1) to prevent OOM on local LLM servers. *(merged)*
- **[PR #3635](https://github.com/HKUDS/nanobot/pull/3635)** — Softened SSRF guard recovery: blocks return a strong non-retryable tool error instead of aborting the entire runtime turn. *(merged)*
- **[PR #3552](https://github.com/HKUDS/nanobot/pull/3552)** — Feishu channel now prepends sender identity (`[FEISHU-CONTEXT]` with display name, open_id, user_id) to group chat messages so models can distinguish users. *(merged)*
- **[PR #3615](https://github.com/HKUDS/nanobot/pull/3615)** — Alternative implementation of subagent concurrency limiting using asyncio semaphore with regression tests. *(merged)*

## Community Hot Topics
1. **[#3618 — Regional Model Access 403 Error](https://github.com/HKUDS/nanobot/issues/3618)** *(10 comments)* — **HIGH-IMPACT BUG.** User reports persistent 403 `"This model is not available in your region"` for GLM-5.1. Solved by user via backup reinstall; community discussion around geographic API restrictions. Underlying need: transparent model fallback / region checks.

2. **[#3292 — Session-Level Focus Tool](https://github.com/HKUDS/nanobot/issues/3292)** *(9 comments, open since 2026-04-19)* — Persistent feature request for a "task board" mechanism that maintains primary goal awareness across interruptions. Community user piliplaker proposes extending the `my` tool with persistent task anchoring. Strong design discussion underway.

3. **[#3584 — DeepSeek API `reasoning_content` Error](https://github.com/HKUDS/nanobot/issues/3584)** *(2 comments)* — Root cause identified and patch provided for DeepSeek model validation failures after v0.1.5.post3. Closed as fixed.

## Bugs & Stability
**Critical (active, no fix PR):**
- **#3618** — Regional model access 403 on GLM-5.1; workaround exists but root cause unaddressed.
- **#3626** — Telegram long polling silently hangs on network disruptions; bot appears alive but stops receiving updates. Only 2 comments suggesting early investigation.
- **#3633** — GPT-5.5 `"Duplicate item found with id"` error crashes agent loop; no fix PR yet.

**Medium (fix PR exists or closed):**
- **#3584** ✅ — DeepSeek `reasoning_content` API error — **fixed and closed**.
- **#3597** ✅ — Agent unable to access workspace root — **closed**.
- **#3605** ✅ — Safety guard abort silently drops turn with no user notification — **closed**.
- **#3630** ✅ — Dream cursor advances on errors, dropping memory — **closed via PR #3631**.

**Low (open, good first issue):**
- **#3637** — Transcription provider configuration not transparent; Groq setup easily misconfigured.

## Feature Requests & Roadmap Signals
- **Concurrent Subagent Limiting (PR #3634 / #3615)** — Both merged today, now configurable via `maxConcurrentSubagents` (default: 1). Expected in next release.
- **Hallucinated Tool-Call Guard (PR #3624)** — Merged, opt-in guard against false action claims. Likely to be documented in next release notes.
- **Session-Level Focus Tool (#3292)** — Still open with active discussion; could become a major v0.2 feature if design solidifies.
- **LangSmith Full Integration (PR #3140, open since 2026-04-14)** — Restoring observability dropped in v0.1.5; actively updated.
- **SimpleX Channel (PR #3486, open since 2026-04-27)** — New messaging channel; awaiting maintainer review.
- **HF Spaces Multi-Agent Squad (PR #3621)** — Production deployment for HuggingFace; open for review.

## User Feedback Summary
- **Satisfaction**: User in #3618 expressed relief at recovering their bot ("还好我有备份的习惯"), indicating strong retention despite bugs.
- **Pain points**:
  - Regional model access restrictions cause silent 403 errors with no graceful fallback.
  - Telegram bot appears healthy but silently stops receiving updates — frustrating for production users.
  - Safety guard and Dream cursor bugs silently drop actions/memories without user notification (cited as trust-eroding in #3605).
  - Transcription provider config is opaque; users accidentally set invalid combinations.
- **Use cases**: Daily article drafting (#3597), subagent-based local LLM deployment (#3611), Feishu group chat identity (#3552).

## Backlog Watch
- **PR #3140 (LangSmith integration)** — Open since 2026-04-14, important for observability; needs maintainer review and merging.
- **PR #3486 (SimpleX channel)** — Open since 2026-04-27; large PR adding new channel type; requires careful security and configuration review.
- **Issue #3292 (Session-Level Focus Tool)** — Open since 2026-04-19 with 9 comments; high user demand but no assigned maintainer. Risk of stagnation.
- **PR #3621 (HF Spaces squad)** — Open since 2026-05-04; production deployment pattern; may benefit from earlier maintainer guidance to avoid duplicate effort with concurrent subagent changes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-05-06  
**Repository:** [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## Today's Overview

Hermes Agent shows **very high** activity today with **50 issues** and **50 PRs** updated in the last 24 hours, signaling a project undergoing rapid development and active community engagement. The open-to-closed ratio (46 open issues, 39 open PRs) suggests the maintainer team is processing contributions faster than new reports arrive, a healthy sign. No new releases were published today, but the volume of merged PRs (11) indicates significant code churn across core components including the agent runtime, gateway, CLI, and memory systems. The project is clearly in an intensive development phase with strong contributor momentum.

---

## Releases

**No new releases published today.** The latest tagged version remains v0.11.0 (2026.4.23), referenced in some issue reports. No migration notes or breaking changes to report.

---

## Project Progress

**11 PRs were merged or closed today**, reflecting substantial feature advancement and bug fixing:

- **[PR #19616]** `feat(circuit-breaker): add use_auxiliary_judgment option` — Adds a config option to skip compression model calls in tool-loop detection, going directly to self-reflection fallback for latency-sensitive deployments.
- **[PR #18780]** `Phase 1 token optimization: skill_view detail param + session token accounting` — Reduces token consumption by ~97% for skill_view operations via a `summary` parameter, plus adds session-level token tracking.
- **[PR #17058]** `feat(compression): integrate caveman-llm with encrypted backup` — Integrates the experimental Caveman compression pipeline with encrypted backup support for session data.
- **[PR #15650]** `feat(compression_pipeline): Caveman Layer 0 NL compression` — Extends command output compressors with a lightweight natural-language prose compression layer for log dumps and text output.
- **[PR #15646]** `fix(delegate_tool): isinstance dict guard + no_result exit_reason` — Fixes an `AttributeError` when `run_conversation()` returns non-dict types; adds proper `no_result` exit reason handling.
- **[PR #15550]** `fix(tools): prevent lock poisoning in MCP server discovery` — Fixes a race condition in async MCP server discovery that poisoned async locks on timeout.
- **[PR #15331]** `feat(tools): command output compressors + TTY detection` — Adds 20+ built-in command output compressors, a compression pipeline registry, and terminal type detection.
- **[PR #20547]** `Add H2/H3 project context boundaries for durable writes` — Adds project-context primitives for long-running sessions, including gateway `/project` session controls.

**Key takeaway:** The compression pipeline (Caveman layers) and token optimization efforts are maturing rapidly, with multiple PRs landing that reduce operational costs for heavy CLI/terminal users.

---

## Community Hot Topics

### Most Active Issues

1. **[Issue #8118]** `[Feature Request]: WebUI Dashboard — Can't Wait for This!` (6 comments)  
   👤 Author: Stalinh | [Link](https://github.com/nousresearch/hermes-agent/issues/8118)  
   **Analysis:** This feature request has been open since April 12 and remains the most-commented open issue. The user expresses strong enthusiasm ("absolutely amazing") but explicitly requests a web-based dashboard. Given the project's TUI focus, this signals unmet demand for browser-based management interfaces. A likely candidate for v0.12.0.

2. **[Issue #17244]** `MCP Servers amap (http) — SSE discovery mechanism not supported` (4 comments)  
   👤 Author: HerryOS | [Link](https://github.com/nousresearch/hermes-agent/issues/17244)  
   **Analysis:** A concrete integration failure with the Amap (高德地图) MCP server, which uses SSE-based discovery instead of the standard HTTP endpoint. This highlights a cross-platform MCP compatibility gap.

3. **[Issue #13484]** `Feature: native Google Cloud Vertex AI provider support` (3 comments, 👍 2)  
   👤 Author: prasadus92 | [Link](https://github.com/nousresearch/hermes-agent/issues/13484)  
   **Analysis:** A well-documented request for proper GCP Vertex AI auth integration. The current `google-vertex` overlay exists but lacks OAuth machinery. This is a enterprise-critical gap for GCP-native users.

4. **[Issue #18080]** `[Feature]: Improved Themes for Dashboard - currently hard to read` (3 comments, 👍 9)  
   👤 Author: ogermer | [Link](https://github.com/nousresearch/hermes-agent/issues/18080)  
   **Analysis:** The highest-reacted issue today (9 👍). Users find the existing themes (Midnight, Ember, Cyberpunk) hard to read due to poor font choices and low contrast. This is a UX quality-of-life issue that likely appears in the dashboard, not the CLI.

### Most Active PRs

- **[PR #20096]** `feat: channel-based profile routing` (Burgunthy, updated today) — Enables single-instance profile routing across Discord channels by model/tools/memory. High interest for multi-persona deployments.
- **[PR #20505]** `feat: add claude-memory-layer prefetch provider` (justinbuzzni, updated today) — Adds a read-only MemoryProvider plugin integrating with Claude's MCP context-pack tool.

**Trend:** The community is heavily focused on **multi-platform integration** (Feishu, Telegram, Discord), **memory optimization**, and **UI/UX improvements** for the Web dashboard. The Caveman compression work has been a major source of merged PRs, indicating strong maintainer investment in token-cost reduction.

---

## Bugs & Stability

### Critical / P1 Bugs (reported or updated today)

| Issue | Severity | Summary | Fix PR Exists? |
|-------|----------|---------|----------------|
| [#20273](https://github.com/nousresearch/hermes-agent/issues/20273) | **P1** | Background review agent/curator can overwrite bundled/hub skills via `skill_manage` — no write guard exists | ❌ No |
| [#20293](https://github.com/nousresearch/hermes-agent/issues/20293) | **P1** | Context Compaction + Session Split incorrectly injects compressed summary as valid history into new session | ❌ No |
| [#20202](https://github.com/nousresearch/hermes-agent/issues/20202) | **P1** | `cli.py` crashes on WSL terminals that don't support `Ctrl+Shift+C` keybinding | ❌ No |
| [#20250](https://github.com/nousresearch/hermes-agent/issues/20250) | **P1** | VS Code ACP prompt can remain in-flight indefinitely after repeated compression timeout | ❌ No |
| [#20470](https://github.com/nousresearch/hermes-agent/issues/20470) | **P1** | Telegram DM topic binding not refreshed after compression-induced session split — causes preflight compression loop | ❌ No |
| [#20465](https://github.com/nousresearch/hermes-agent/issues/20465) | **P1** | Interactive CLI session does not auto-fallback on Codex 429 `usage_limit_reached`, while cron jobs do | ❌ No |

### High / P2 Bugs

| Issue | Severity | Summary |
|-------|----------|---------|
| [#20360](https://github.com/nousresearch/hermes-agent/issues/20360) | **P2** | Anthropic adapter fast mode predicate incorrectly matches non-4.6 models (fails test suite) |
| [#20531](https://github.com/nousresearch/hermes-agent/issues/20531) | **P2** | QQBot WebSocket disconnects every 60-90 seconds — needs transport-level heartbeat |
| [#20500](https://github.com/nousresearch/hermes-agent/issues/20500) | **P2** | Dashboard Chat tab fails with `EACCES` in Docker image due to root-owned `/opt/hermes/ui-tui` |
| [#20501](https://github.com/nousresearch/hermes-agent/issues/20501) | **P2** | `platforms.api_server` config values silently ignored when not nested under `extra` key |

### Notable P3 Issues

- [#20514](https://github.com/nousresearch/hermes-agent/issues/20514) — `auxiliary.vision.provider: auto` causes HTTP 404 with `minimax-cn` base_url inheritance  
- [#19691](https://github.com/nousresearch/hermes-agent/issues/19691) — Fallback provider docs show stale/incorrect config paths  
- [#20558](https://github.com/nousresearch/hermes-agent/issues/20558) — Delegation subagents fail to resolve credentials on mixed-model providers (OpenCode)  

**Stability Assessment:** The P1 bugs cluster around **session management** (compaction, splitting, credential resolution) and **platform-specific crashes** (WSL, QQBot, Docker). These are systemic rather than superficial — the session lifecycle code appears stressed by edge cases in multi-turn conversations. The number of P1/P2 issues (10+) combined with the absence of a fix PR for any P1 is concerning and warrants priority attention.

---

## Feature Requests & Roadmap Signals

### High-Probability Features for Next Release

1. **WebUI Dashboard** ([#8118](https://github.com/nousresearch/hermes-agent/issues/8118)) — The most-commented feature request. A web-based management interface would significantly reduce the barrier to entry for non-CLI users.

2. **Improved Dashboard Themes** ([#18080](https://github.com/nousresearch/hermes-agent/issues/18080)) — 9 👍 and explicit readability complaints make this a low-effort, high-impact UX fix.

3. **Native Google Cloud Vertex AI Support** ([#13484](https://github.com/nousresearch/hermes-agent/issues/13484)) — 3 comments, 2 👍, enterprise-critical. The existing but non-functional `google-vertex` overlay suggests this is already on the roadmap.

4. **Chinese (Simplified/Traditional) Localization** ([#12954](https://github.com/nousresearch/hermes-agent/issues/12954)) — Closed but 3 comments, indicating interest from the Chinese-speaking community. The Feishu/QQBot platform issues further support this.

5. **Channel-Based Profile Routing** ([PR #20096](https://github.com/nousresearch/hermes-agent/pull/20096)) — Already a pending PR, this would allow single-instance multi-persona deployments via Discord channels.

### Low-Probability / Long-Term Signals

- **Cross-platform session sharing via identity links** ([#20458](https://github.com/nousresearch/hermes-agent/issues/20458)) — Asked for unified sessions across Feishu, WebUI, Telegram. Complex to implement.
- **Multi Telegram bots** ([#10452](https://github.com/nousresearch/hermes-agent/issues/10452)) — Running multiple bots side-by-side; niche but requested.
- **Feishu interactive card model picker** ([#20520](https://github.com/nousresearch/hermes-agent/issues/20520)) — Parity with Telegram/Discord model pickers.

---

## User Feedback Summary

### Pain Points

- **MCP compatibility gaps:** The Amap SSE discovery issue ([#17244](https://github.com/nousresearch/hermes-agent/issues/17244)) and credentials resolution failures ([#20558](https://github.com/nousresearch/hermes-agent/issues/20558)) indicate that MCP server integration, especially for non-OpenAI providers, is fragile.
- **Windows/WSL limitations:** Terminal not supporting `Ctrl+Shift+C` crashes the CLI entirely ([#20202](https://github.com/nousresearch/hermes-agent/issues/20202)). File-system isolation on Windows host prevents accessing local files ([#20436](https://github.com/nousresearch/hermes-agent/issues/20436)).
- **Session management instability:** Multiple P1 bugs around compaction, splitting, and binding suggest users experiencing lost context and loops in long conversations.
- **Docker permissions:** Root-owned directories causing EACCES in Docker images ([#20500](https://github.com/nousresearch/hermes-agent/issues/20500)) affects containerized deployments.

### Use Case Signals

- **Enterprise deployment:** GCP Vertex AI, multi-bot routing, profile-based channel routing → indicates production workloads.
- **Multi-language support:** Feishu, QQBot, Chinese localization requests → strong Asian market interest.
- **Cost optimization:** The Caveman compression pipeline and token optimization PRs suggest users are hitting token limits and seeking cheaper operation.
- **Team/collaboration workflows:** Background review agent, curator, session sharing → users want multi-agent collaboration.

### Sentiment

- **Positive:** "absolutely amazing" (#8118), substantial community contribution (11 merged PRs from external contributors).
- **Frustrated:** "Can't Wait for This!" (#8118), "currently hard to read" (#18080), "silently ignored" (#20501).
- **Blocked:** Several users reporting specific crashes or broken workflows (WSL, Docker, QQBot) with no immediate fix.

---

## Backlog Watch

### Issues Needing Maintainer Attention

1. **[#5358](https://github.com/nousresearch/hermes-agent/issues/5358)** (P2, opened 2026-04-06) — Gateway and CLI ignore `model.provider` config when `OPENROUTER_API_KEY` exists. **1 comment, no assignee.** This has been open for **one month** and affects a core configuration behavior.

2. **[#10452](https://github.com/nousresearch/hermes-agent/issues/10452)** (P3, opened 2026-04-15) — Support multi Telegram bots for gateway routing. **2 comments, no assignee.** Awaiting triage for three weeks.

3. **[#20316](https://github.com/nousresearch/hermes-agent/issues/20316)** (P3, opened 2026-05-05) — `should_compress_preflight()` never called — LCM deferred maintenance is dead code. **1 comment, no assignee.** This suggests a feature that was implemented but never integrated; needs verification.

4. **[#20552](https://github.com/nousresearch/hermes-agent/issues/20552)** (No severity, opened today) — Holographic Memory `get_relevant_memories()` fails to retrieve entity-bound facts on common terms. **0 comments.** This is a subtle but important memory retrieval bug that could degrade long-term conversation coherence.

### PRs Needing Review

- **[PR #18425](https://github.com/nousresearch/hermes-agent/pull/18425)** (P3, opened 2026-05-01) — Google Chat platform adapter as bundled plugin. **0 reviews, no comments.** A significant new platform integration pending maintainer review for 5 days.
- **[PR #20096](https://github.com/nousresearch/hermes-agent/pull/20096)** (P3, updated today) — Channel-based profile routing. **0 reviews, no comments.** High-value feature, submitted 2026-05-05, needs evaluation.

**Backlog Health:** The project maintains a manageable backlog, but the month-old issue #5358 is concerning for a P2 severity configuration bug. The lack of reviews on high-quality PRs like profile routing (#20096) and Google Chat (#18425) suggests maintainer bandwidth may be stretched, possibly focused on the Caveman compression work that dominated recent merges.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-06

## Today's Overview

PicoClaw is in an **intense development phase**, with 16 issues updated and 35 pull requests active in the last 24 hours. The project released its **v0.2.8-nightly.20260506** nightly build, indicating rapid iteration. Activity is concentrated on **Telegram channel fixes**, **provider enhancements** (Gemini, OpenAI OAuth, image generation), and **security hardening**. The project shows healthy community engagement with multiple contributors submitting fixes, though a backlog of stale issues (marked `stale` on 8 items) suggests some features may need prioritization. Overall, the project is **highly active and advancing steadily**, with strong maintainer responsiveness.

## Releases

**New: [v0.2.8-nightly.20260506](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** (nightly build)

- This is an automated nightly build and may be unstable.
- No breaking changes or migration notes documented.
- Use with caution in production environments.

## Project Progress

**11 pull requests merged or closed** in the last 24 hours. Notable advancements:

- **Portuguese (Brazil) locale** added — [#2037](https://github.com/sipeed/picoclaw/pull/2037) (merged) — Full translation of 534 UI strings, auto-detect for Portuguese-speaking users.
- **WebSocket authentication fix** — [#2363](https://github.com/sipeed/picoclaw/pull/2363) (closed) — Fixes header casing and auth flow.
- **Cron task fix** — [#2520](https://github.com/sipeed/picoclaw/pull/2520) (closed) — Resolves cron creation and execution failures.
- **SVG Telegram bug** — [#2716](https://github.com/sipeed/picoclaw/issues/2716) (closed) — `inferMediaType` now properly handles `image/svg+xml`.

**Open PRs** continue to advance:
- [#2752](https://github.com/sipeed/picoclaw/pull/2752) — Model configuration workflow improvements in Web UI.
- [#2778](https://github.com/sipeed/picoclaw/pull/2778) — `working_summary` tool feedback for chat channels.
- [#2551](https://github.com/sipeed/picoclaw/pull/2551) — Channel identification refactoring (decoupling name from provider type).
- [#2765](https://github.com/sipeed/picoclaw/pull/2765) — Port of `update_plan` tool from OpenClaw.

## Community Hot Topics

**Most active issues (by comments & reactions):**

1. **[#2404](https://github.com/sipeed/picoclaw/issues/2404)** — "Add streaming HTTP request config"  
   - 4 comments, 1 👍. Users want configurable streaming for LLM backends to reduce latency. This is a **moderate interest** feature aligned with performance improvements.

2. **[#2688](https://github.com/sipeed/picoclaw/issues/2688)** — "Security: `find /` can enumerate paths outside workspace sandbox"  
   - 2 comments, critical security concern. Community is watching closely; this is a **high-priority** sandbox escape vector.

3. **[#2646](https://github.com/sipeed/picoclaw/issues/2646)** — "Tested PicoClaw on NXP i.MX93 EVK"  
   - 2 comments, positive community contribution confirming headless mode works on ARM64 embedded hardware.

**Underlying needs**: Users are demanding better security isolation (sandbox bypass), lower latency (streaming config), and broader platform support (embedded ARM64). The streaming config feature (#2404) suggests growing adoption in latency-sensitive environments.

## Bugs & Stability

**High severity:**
- **[#2688](https://github.com/sipeed/picoclaw/issues/2688)** — **Security sandbox escape via `find /`**  
  - **Severity: Critical** — Path enumeration outside workspace. No fix PR yet; likely requires filesystem interception or `find` command blocking.
- **[#2775](https://github.com/sipeed/picoclaw/issues/2775)** — **Sub-agents inherit root AGENT.md, causing role confusion**  
  - **Severity: High** — Multi-agent architecture broken for spawned child agents. Filed 2026-05-05, no fix yet.

**Medium severity:**
- **[#2513](https://github.com/sipeed/picoclaw/issues/2513)** — **Gateway start abnormal**  
  - 8 comments, stale since 2026-04-14 but still open. Launcher fails under specific conditions.
- **[#2702](https://github.com/sipeed/picoclaw/issues/2702)** — **Multi-user group channels: missing sender attribution in history**  
  - Stale, but impacts Discord/Telegram group usability.
- **[#2694](https://github.com/sipeed/picoclaw/issues/2694)** — **x509 certificate error in ADB shell**  
  - Reported for Android ADB; likely TLS root CA issue in container.

**Fix PRs in progress:**
- [#2759](https://github.com/sipeed/picoclaw/pull/2759) — Scopes Seahorse retrieval tools to current session.
- [#2776](https://github.com/sipeed/picoclaw/pull/2776) — Fix Telegram topic reply typing cleanup.
- [#2777](https://github.com/sipeed/picoclaw/pull/2777) — Suppress cron feedback for scheduled turns.

## Feature Requests & Roadmap Signals

**Likely next-version candidates (v0.2.9):**

1. **Streaming HTTP request config** ([#2404](https://github.com/sipeed/picoclaw/issues/2404)) — Requested with 1 👍, aligns with performance roadmap.
2. **Image generation tool** ([#2760](https://github.com/sipeed/picoclaw/pull/2760)) — Already in PR, provider-backed image generation through MediaStore pipeline.
3. **Mission Control integration** ([#2698](https://github.com/sipeed/picoclaw/issues/2698)) — Users want PicoClaw to support Mission Control (currently OpenClaw-only).
4. **Context/memory management** ([#2774](https://github.com/sipeed/picoclaw/issues/2774)) — Inspired by `magic-context` plugin; wants cache-aware infinite context and cross-session memory.
5. **Session management commands** ([#2491](https://github.com/sipeed/picoclaw/pull/2491)) — `/status`, `/compact`, `/new` slash commands for manual context management.
6. **MQTT channel support** ([#2705](https://github.com/sipeed/picoclaw/pull/2705)) — New communication protocol integration.

**Predictions**: The **streaming config** and **Mission Control integration** have strong roadmap alignment. The **image generation tool** (#2760) is already in a PR and likely to land soon. Sub-agent role isolation (#2775) will need urgent attention.

## User Feedback Summary

**Pain points:**
- **Security concerns**: Sandbox escape via `find /` (#2688) — users want guaranteed workspace isolation.
- **Multi-user confusion**: Group channels lack sender attribution in history (#2702), making conversations unintelligible.
- **Certificate issues**: ADB shell x509 errors (#2694) blocking Android deployments.
- **Role confusion**: Sub-agents not respecting their own identity (#2775).
- **Missing documentation**: Android `.so` library lacks usage examples (#2695).

**Positive signals:**
- PicoClaw successfully tested on **NXP i.MX93 EVK** ARM64 board (#2646) — confirms embedded/edge viability.
- Community contributing **full locale translations** (#2037, Portuguese-Brazil).
- **High PR activity** (35 open/updated) indicates strong developer engagement.

**Satisfaction factors:** Headless/CLI mode works well on ARM64; Telegram channel improvements are being actively addressed; language support expanding.

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

1. **[#1757](https://github.com/sipeed/picoclaw/issues/1757)** — "Cron agent channel error" (OPEN since 2026-03-18, 7 comments)  
   - User reports cron tasks failing with channel errors; no resolution or PR linked. Stale since May 5.
2. **[#1950](https://github.com/sipeed/picoclaw/issues/1950)** — "Streaming Output for Web Chat" (OPEN since 2026-03-24, 6 comments)  
   - Enhancement request, labeled roadmap-aligned. No PR yet despite being open 6 weeks.
3. **[#2505](https://github.com/sipeed/picoclaw/pull/2505)** — "CLI: Improve embedding process of workspace files" (OPEN since 2026-04-13)  
   - Fixes an important build issue (vestigial workspace files), but tagged `stale` and has no recent maintainer activity.
4. **[#2695](https://github.com/sipeed/picoclaw/issues/2695)** — "Documentation of libpicolaw.so in Android release" (OPEN since 2026-04-28)  
   - User request for Android library docs; no response from maintainers yet.
5. **[#2698](https://github.com/sipeed/picoclaw/issues/2698)** — "Mission Control support for PicoClaw" (OPEN since 2026-04-28)  
   - Feature request with clear use case; no maintainer reply or roadmap signal.

**Notable:** The `stale` label appears on 8 of 16 updated issues, suggesting the team uses a stale bot. However, several critical items (#2688, #2775) lack any fix in progress and should be prioritized.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-06

## Today's Overview
NanoClaw is in a period of high maintenance activity, with 49 pull requests updated in the last 24 hours (31 merged/closed) and 9 issues updated (5 closed). The project shows strong community engagement, with multiple contributors submitting bug fixes, setup improvements, and new skill features. Activity is concentrated on resolving regressions from recent infrastructure changes, improving the setup experience across multiple messaging channels, and addressing container runtime compatibility issues. The high PR throughput suggests a maintainer team actively reviewing and merging contributions, though 18 open PRs indicate a healthy backlog under active development.

## Releases
No new releases were published in the last 24 hours. The project appears to be between release cycles, with head commits incorporating fixes that may be batched for a future version. Users should track PR merge activity on `main` for the next release candidate.

## Project Progress
In the last 24 hours, **31 pull requests were merged or closed**. Key advances include:

**Setup UX improvements:**
- PR #2269 — Added `← Back` navigation option to Discord, WhatsApp, and iMessage channel flows (merged)
- PR #2271 — Added `← Back` option to Telegram channel flow (merged)
- PR #2272 — Added `← Back` option to Slack channel flow (merged)
- PR #2273 — Added `← Back` option to Teams channel flow (merged)
- PR #2274 — Added `← Back` option to Signal channel flow (merged)
- PR #2275 — Updated WhatsApp link instructions to accommodate both iOS ("You") and Android ("Settings") UI (merged)
- PR #2281 — Auto-install `signal-cli` when missing during setup (merged)

**Migration and infrastructure fixes:**
- PR #2287 — Fixed `migrate-v2.sh` to probe correct OneCLI health endpoint `/api/health` instead of `/health` (merged)
- PR #2284 — Pinned Baileys to `7.0.0-rc.9` in WhatsApp install scripts to fix TypeScript build errors in migration (merged)
- PR #2288 — Fixed host-sweep to parse SQLite timestamps as UTC instead of local time (merged)
- PR #2290 — Fixed `manage-channels` skill documentation to include canonical SQL column names (merged)

**Bug fixes:**
- PR #2209 — Fixed orphan-claim delete missed in tests (regression from #2183) (merged)
- PR #2249 — Clearer "Open Telegram" card with mobile fallback messaging (merged)

## Community Hot Topics

**Most active discussion:** **Issue #1906** (Open) — "Ollama MCP stdio server fails behind OneCLI gateway". Created April 21, still active with 1 comment and 1 reaction. This is a long-running issue that affects users who want to use Ollama models behind the OneCLI proxy, particularly when the agent's LLM provider is not Ollama itself. The complexity likely involves the interplay between MCP transport, proxy authentication, and credential injection.

**Issue #2048** (Open) — "`install_packages` approval triggers infinite a2a self-routing loop, blocking all Telegram delivery". This issue has 1 reaction and a detailed diagnostic from the reporter who actually fixed the issue themselves. The underlying need is for approval workflows that do not interfere with agent-to-agent routing, which is critical for production multi-agent setups.

**PR #2292** (Open) — "feat(skills): add /convert-to-podman skill (macOS)". This new skill is a counterpart to the existing `/convert-to-apple-container` skill, indicating strong community demand for container runtime flexibility on macOS, particularly as Docker Desktop licensing changes push users toward alternatives.

**PR #2261** (Open) — "feat(mcp): /add-ffmpeg - ffmpeg/ffprobe MCP server for media transformation". A feature skill that adds media transformation capabilities, reflecting growing use of NanoClaw agents for multimedia processing tasks.

## Bugs & Stability
**High Priority:**
- **Issue #2286** (Open, High) — `onecli_app-data` wipe silently invalidates Postgres secrets. When the Docker volume is destroyed, the secret-encryption-key and MITM CA are lost without any warning or documentation. This is a data-loss risk for production deployments. **No fix PR yet** — requires documentation and protection mechanism.
- **Issue #2285** (Closed, High) — `migrate-v2.sh` probed wrong health endpoint, causing the installation check to always fail. **Fixed in PR #2287**.
- **Issue #2283** (Closed, High) — `migrate-v2.sh` failed on WhatsApp install step due to Baileys pin not updated. **Fixed in PR #2284**.

**Medium Priority:**
- **Issue #2263** (Closed, Medium) — `send_card` MCP tool silently no-ops on Chat SDK channels. **Fixed**.
- **Issue #2264** (Closed, Medium) — New installs shipping Discord card duplication due to pinned `@chat-adapter` version. **Fixed**.

**Low Priority:**
- **Issue #2289** (Closed, Low) — `manage-channels` skill documentation links wrong SQL column name. **Fixed in PR #2290**.

**Open bugs requiring attention:**
- **Issue #1906** (Open) — Ollama MCP behind OneCLI gateway — no fix PR yet, but 1 reaction suggesting community interest.
- **Issue #2048** (Open) — Infinite a2a routing loop on package approval — reporter claims to have fixed it locally but no PR linked.

## Feature Requests & Roadmap Signals
Several feature signals point to areas of growth:

1. **Container runtime flexibility** — PR #2292 (`/convert-to-podman`) and PR #2291 (trusting OneCLI CA in containers) suggest the community is actively moving beyond Docker Desktop. Expect native Podman support and Docker socket compatibility in the next release.

2. **MCP transport diversity** — PR #2208 (support HTTP and SSE MCP server transports) is still open and would enable agents to connect to remote MCP servers without stdio. This is likely foundational for multi-host agent deployments.

3. **Setup experience overhaul** — The six merged PRs adding back-navigation and auto-install point to a major UX clean-up. Maintainers appear committed to making setup non-technical-user friendly.

4. **Media processing** — PR #2261 (`/add-ffmpeg`) signals demand for agents that can transcode, analyze, and generate media. This could become a bundled skill in future releases.

5. **Agent-to-agent communication** — Issues around routing loops (Issue #2048) and scheduled IPC delivery tracking (Issue #2279) indicate maturing multi-agent orchestration patterns.

## User Feedback Summary
**Pain points:**
- Setup remains a friction point — users frequently select the wrong channel and have no way to go back (now being addressed across all channels).
- WhatsApp setup is confusing on iOS because captions reference Android UI conventions (fixed in PR #2275).
- Signal setup requires manual Java CLI installation that confuses non-technical users (fixed in PR #2281).
- Migration from v1 to v2 is fragile — multiple regression bugs encountered this week alone.
- Discord card duplication and missing card support on Chat SDK channels frustrate users expecting rich content delivery.
- Container secrets can be silently destroyed — production operators need clear documentation and protection mechanisms.

**Satisfaction signals:**
- Community contributors are actively filing well-structured bug reports with diagnostic details and offering fixes.
- Multiple contributors are submitting setup improvements and new skills, indicating a healthy and engaged developer community.
- The approval process for PRs appears responsive, with many fixes merged within 24 hours of filing.

## Backlog Watch
- **Issue #1906** (Open, 15 days old) — Ollama MCP behind OneCLI gateway. No fix PR yet. This affects users who want to use Ollama models with the OneCLI proxy, which is a core integration path. **Needs maintainer triage** to determine if this is a bug or a configuration limitation.
- **Issue #2048** (Open, 9 days old) — Infinite a2a routing loop. Reporter claims local fix but no formal PR. This is a systemic issue that could affect all approval workflows in multi-agent setups. **Needs maintainer to request/facilitate a PR from the reporter.**
- **PR #2184** (Open, 4 days old) — Fix poll-loop to retry immediately on stale session instead of delivering error. Still awaiting review. This is a stability improvement that prevents visible error messages to users during session expiry — would improve perceived reliability.
- **PR #2208** (Open, 3 days old) — HTTP and SSE MCP transport support. This is a significant feature that unblocks remote MCP server usage. **Should be prioritized for review** as it affects architecture for distributed deployments.
- **PR #2230** (Open, 3 days old) — Rootless Podman user mapping fix. Important for security-conscious users running containers without root. Needs review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-05-06**.

---

## NullClaw Project Digest: 2026-05-06

### 1. Today's Overview

The NullClaw project is experiencing a **high-activity, stability-focused day** with four open Pull Requests and one open Issue updated in the last 24 hours. Activity is concentrated on critical cross-platform compatibility, specifically resolving a **major Windows networking blocker** (Issue #890) and improving the reliability of the provider transport layer (PR #891). While there are no new releases today, the volume of targeted fixes suggests the maintainers are in a **core stability phase**. The single open Issue is actively being addressed by a corresponding fix PR (#892), indicating a swift response to user-reported regressions.

### 2. Releases

**No new releases were published today.**

### 3. Project Progress

No Pull Requests were merged or closed in the last 24 hours. However, significant progress has been made on several open PRs:

- **Windows DNS Resolution Fix (PR #892):** A critical fix for the Windows `HostResolutionFailed` bug (Issue #890) was submitted by author `fatihaziz`. It replaces the broken DNS pre-resolution shim in `src/compat/` with a real Win32 API call.
- **Curl Transport Failure Preservation (PR #891):** This PR improves error reporting for provider health probes by preserving specific `CurlDnsError`, `CurlConnectError`, etc., rather than collapsing them into generic errors, improving diagnostic capability.
- **POSIX Thread Sleep (PR #878):** A long-running fix (submitted April 30) has been updated, switching `thread.sleep()` to `nanosleep` on POSIX systems to ensure proper OS thread suspension rather than just cooperative yielding.
- **Data Governance Layer (PR #885):** A draft hackathon contribution remains open, proposing a new memory governance layer for user data control.

### 4. Community Hot Topics

**Issue #890 (Windows: agent provider HTTP fails with `HostResolutionFailed`):**
- **Link:** [Issue #890](https://github.com/nullclaw/nullclaw/issues/890)
- **Activity:** 1 comment, raised by `fatihaziz`.
- **Analysis:** This is the **single most active item** as it represents a complete blocking failure for Windows users trying to use the `nullclaw agent`. The underlying need is for **functional cross-platform network support**. Curl works, but NullClaw's own DNS shim fails, creating a confusing "works outside, fails inside" experience. The existence of a fix PR (#892) already linked to this issue shows the community is actively solving this.

**PR #892 (fix(compat/net): real DNS resolution on Windows):**
- **Link:** [PR #892](https://github.com/nullclaw/nullclaw/pull/892)
- **Activity:** Raised by `fatihaziz`.
- **Analysis:** This PR is the direct community-driven solution to the #890 blocker. It demonstrates a strong user desire for **reliable, out-of-the-box Windows support** for agent connectivity. If merged, this will unblock a significant portion of the Windows user base.

### 5. Bugs & Stability

**High Severity - Windows Host Resolution Failure:**
- **Issue:** #890 – [Link](https://github.com/nullclaw/nullclaw/issues/890)
- **Description:** On Windows, any `nullclaw agent` call to a provider chat-completion endpoint fails with `HostResolutionFailed`. This is a **complete blocking bug** for Windows agent functionality.
- **Status:** Fix PR (#892) is open and requires review/merge.

**Medium Severity - Curl Transport Error Collapsing:**
- **Issue:** PR #891 – [Link](https://github.com/nullclaw/nullclaw/pull/891)
- **Description:** Provider health probes were collapsing distinct transport failures (DNS, Connect, TLS) into a generic error, making debugging difficult. This is a **diagnostic reliability issue** rather than a crash.
- **Status:** Fix PR open, awaiting review.

**Low Severity - POSIX Thread Sleep Behavior:**
- **Issue:** PR #878 – [Link](https://github.com/nullclaw/nullclaw/pull/878)
- **Description:** `thread.sleep()` was using a cooperative yield instead of suspending the OS thread on POSIX, which could impact scheduling in managed-thread environments.
- **Status:** Fix PR open, pending merge.

### 6. Feature Requests & Roadmap Signals

- **Data Governance Layer (PR #885):** While still a draft hackathon submission, PR #885 signals a growing **community interest in data privacy and user control** over memory. This could be a strong candidate for a future release if the hackathon team continues development and the core maintainers adopt the concept.
- **Windows Native Networking (PR #892):** Although a bug fix, this PR signals a roadmap need for **proper Win32 API integration** over shim-based cross-platform abstractions in the networking layer. Expect this to be a core part of the next patch release.

### 7. User Feedback Summary

- **Pain Point (Windows Users):** The most vocal pain point is the **Windows `HostResolutionFailed` bug**. Users expect the agent tool to work identically to the bundled `curl.exe`, which does not fail.
- **Pain Point (Debugging):** The collapse of curl transport errors (PR #891) suggests users have been frustrated by opaque "AllProvidersFailed" errors that lack granularity, making it hard to know if the problem is DNS, a timeout, or a TLS issue.
- **Satisfaction Signal:** The rapid creation of PR #892 by the same user who reported the bug indicates a **self-reliant and technically capable community** willing to contribute fixes, which is a positive health signal.

### 8. Backlog Watch

- **PR #878 (fix(compat): use nanosleep on POSIX):**
    - **Link:** [PR #878](https://github.com/nullclaw/nullclaw/pull/878)
    - **Status:** Open since **2026-04-30**. Last updated 2026-05-05.
    - **Watch reason:** This is a **7-day-old PR** that addresses a fundamental system behavior issue (thread suspension). Its long open status suggests it may be low priority for the maintainers or requires more review. If left unattended, it could lead to subtle scheduling bugs in production environments.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-05-06**, based on the provided GitHub data.

---

### IronClaw Project Digest — 2026-05-06

---

### 1. Today's Overview

The IronClaw project is in a period of **high architectural intensity**, driven primarily by the "Reborn" architecture initiative. Activity is extremely high, with 39 PRs and 17 Issues updated in the last 24 hours, indicating a major push from the core team. The work is highly organized, with a clear focus on defining and building core Reborn components like the `TurnCoordinator`, `AgentLoopDriver`, and persistence layers. The bulk of the activity involves planning, documentation, and contract definition rather than user-facing features, suggesting the project is in a deep refactoring and foundation-building phase. While the repo lacks new formal releases, the pace of merged PRs and detailed issue tracking signals significant progress toward a major architectural milestone.

### 2. Releases

**None.** No new releases were tagged or published in the last 24 hours.

### 3. Project Progress

In the last 24 hours, **20 PRs were merged or closed**, indicating strong forward momentum. Key areas of progress include:

- **Reborn Architecture Foundation:** The core team merged several critical PRs that advance the Reborn cutover. Notably, #3257 added turn persistence contracts, defining the schema for runs, locks, and idempotency. PR #3180 landed the "native-isolated guardrails" memory substrate.
- **CI/CD & Testing Investment:** A significant number of merged PRs focused on CI infrastructure. PRs #3260, #3265, #3267, and #3258 were "salvage" PRs that cherry-picked valuable fixes and tests from older, stale branches (e.g., #2174 for E2E Admin/Responses API tests) onto the current main branch. PR #3263 streamlined merge queue checks, and #3262 and #3261 added nightly "deep check" and full browser E2E suites.
- **Documentation & Onboarding:** Two documentation PRs were salvaged and merged. #3258 promotes Database and Configuration docs to live navigation, and #3260 fixes the Docker Hub image name from `nearai/ironclaw` to `nearaidev/ironclaw`, resolving a critical onboarding blocker.
- **Skills Fixes:** A critical fix for the Linear skill was salvaged (#3265), correcting a credential injection issue that was silently breaking all authenticated Linear API requests.

### 4. Community Hot Topics

There is very little non-core-team activity, but the most significant discussions are around the Reborn architecture itself.

- **[Issue #3016] Reborn cutover blocker: add reference AgentLoopHost facade** — **4 comments.** This issue, authored by a core maintainer, is a key tracking point for the entire Reborn architecture. It links to a complex dependency graph of other issues (`#2987`, `#3031`, `#3013`, etc.). The underlying need is to define the architectural boundary for the new agent execution model.
- **[Issue #3013] Reborn cutover blocker: add kernel TurnCoordinator** — **4 comments.** Another core-architectural issue defining the service that will own thread/turn admission and one-active-run enforcement. This is a foundational piece for the new system.
- __[Issue #3031] [EPIC] Reborn product surface migration__ — **3 comments.** The master epic for the migration. The discussion reveals a major architectural rewrite that has moved beyond its initial design phase in early May.

**Analysis:** All active discussions are driven by core maintainers (`serrrfirat`) and are focused on internal architecture. There is a clear, structured need to decompose the complex Reborn system into manageable, trackable pieces. The community is largely absent from these technical planning discussions.

### 5. Bugs & Stability

Two bugs were reported today, one with medium and one with low apparent impact.

- **[HIGH] Bug: Uploaded Attachments Lose Preview After Refresh** — **Issue #3272** (reported by `sunglow666`). This is a substantial bug report covering three related issues: previews disappearing on refresh, duplicate images appearing in the message input box, and excessively large previews for pasted images. This is a clear user-facing regression in the chat UI. **No fix PR is linked yet.**
- **[LOW] Docker Hub image missing** — **Issue #2963** (reported by `magnusviri`, **closed**). This was a documentation bug where the Docker install guide pointed to the wrong image name (`nearai/ironclaw` instead of `nearaidev/ironclaw`). This has been **resolved** via the merged PRs #3260 and #3217.

### 6. Feature Requests & Roadmap Signals

There are no user-generated feature requests in this batch. All roadmap signals are from the core team's planned work.

- **[ROADMAP] The "Reborn" Architecture is the project's roadmap.** The sheer volume of issues (e.g., #3266, #3264, #3269, #3236) defining policies for multi-tenancy, outbound egress, same-thread steering, and product adapter replacements makes it clear that the next major version will be a near-total rewrite of the agent runtime and persistence layer.
- **[Next Release Predictions]:** The next release will almost certainly **not** be v0.25.0+. The `ironclaw` crate is currently pinned to v0.24.0 on crates.io due to a wasmtime CVE (#3259). Until the publishing pipeline is fixed or the CVE is resolved, no new crates.io releases will be available. Internal tags (v0.27.0) exist but are not publicly consumable.

### 7. User Feedback Summary

User feedback is minimal but indicates **two key pain points**:

- **Onboarding/Documentation:** The Docker Hub image name issue (#2963) is a clear example of documentation failing to match reality, creating a frustrating first-impression barrier. The fix has been merged, which should improve this.
- **UI Stability:** The new bug report regarding image uploads and previews (#3272) suggests that even for users who get past the install hurdle, the core chat UI has regressions that degrade the user experience.

Overall, the lack of broad community discussion suggests that external users are either (a) waiting for the Reborn architecture to stabilize before engaging deeply or (b) are blocked by the documented issues (like the Docker problem).

### 8. Backlog Watch

- **[CRITICAL] Publishing Block: Publish 0.25.0 – 0.27.0 to crates.io** — **Issue #3259** (by `dacoldest`). This is a critical blocker for downstream consumers. The crates.io release is pinned at `0.24.0` even though the repo has tags up to `0.27.0`. The issue is linked to a `wasmtime` CVE, but has zero comments from maintainers, suggesting the fix is not trivial or is not prioritized. This needs a response to the community.
- **[LARGE] feat(routing): per-channel MCP and built-in tool filtering** — **PR #1378** (by `nick-stebbings`, open since March 18). This massive, long-running PR is an important feature for multi-channel deployments. It has been open for nearly 50 days with no recent comments from maintainers. This may be waiting for the Reborn architecture to be finalized, as the new routing model might invalidate this approach.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-06

## 1. Today's Overview

Project activity is **moderate**, with 16 PRs merged/closed in the last 24 hours, indicating a focused cleanup and stabilization phase following the recent `2026.04.27` release merge. No new releases were published today. One new security issue (#1885) was opened, highlighting a path traversal vulnerability in the email skill. The majority of merged PRs are bug fixes and refactoring efforts, particularly around the OpenClaw engine, IM integration (DingTalk, WeChat, POPO), and UI component fixes. Maintainers are actively responding to known issues, with several long-running PRs from the past week finally closed today.

## 2. Releases

**None.** No new releases were published today.

*Previous release milestone:* `release/2026.04.27` was merged into main (PR #1876) on April 29, 2026, containing features such as ChatGPT OAuth login, Xiaomi Mimo / Baidu Qianfan coding plan support, and YoudaoNote skill upgrades.

## 3. Project Progress — Merged/Closed PRs Today

16 PRs were merged or closed today. Key advancements:

### Features
- **[POPO Multi-Bot Instance Support](https://github.com/netease-youdao/LobsterAI/pull/1883)** — Upgraded `moltbot-popo` plugin to 2.1.1, adding multi-instance configuration management (PR #1883).
- **[Embedding Configuration for Memory Search](https://github.com/netease-youdao/LobsterAI/pull/1810)** — Added remote embedding providers (OpenAI, Gemini) for memory search; memory search remains available when embedding is disabled (PR #1810, closed today).

### Bug Fixes
- **[Windows DingTalk Image Inbound Fix](https://github.com/netease-youdao/LobsterAI/pull/1848)** — Fixed malformed `file://` URLs for image transmission on Windows (PR #1848).
- **[OpenClaw Config Snapshot Clobbering Fix](https://github.com/netease-youdao/LobsterAI/pull/1838)** — Prevented accumulation of `.clobbered` snapshot files by adding `meta` fields to `openclaw.json` (PR #1838).
- **[Per-Agent Model Selection in Header](https://github.com/netease-youdao/LobsterAI/pull/1865)** — Fixed the header ModelSelector not updating when switching agents (PR #1865).
- **[Homepage `supportsImage` Mismatch](https://github.com/netease-youdao/LobsterAI/pull/1860)** — Fixed CoworkPromptInput using agent-level model instead of header-selected model (PR #1860).
- **[DiffView Restored for Edits Array](https://github.com/netease-youdao/LobsterAI/pull/1814)** — Fixed DiffView component for edit tool's `edits` array input (PR #1814).
- **[Skill Discovery Path Mismatch](https://github.com/netease-youdao/LobsterAI/pull/1815)** — Removed `~/.claude/skills` from discovery roots to match runtime path (PR #1815).

### Refactoring
- **[Remove Dead Engine-Branching Code](https://github.com/netease-youdao/LobsterAI/pull/1884)** — Removed deprecated `yd_cowork` engine branch, unified to `openclaw` single engine; net reduction of 65 lines across 11 files (PR #1884).

### Security & Logging
- **[Redact Sensitive Keys in Logs](https://github.com/netease-youdao/LobsterAI/pull/1844)** — Extracted `sanitizeForLog` utility; keys now show only `first3***last2` pattern; headers auto-redact `x-api-key` and `authorization` (PR #1844).

## 4. Community Hot Topics

### Most Active Issue:
- **[#1885 — Email Skill Path Traversal Vulnerability](https://github.com/netease-youdao/LobsterAI/issues/1885)**
  - **Status:** Open / Active
  - **Author:** Arashimu
  - **Comments:** 0 | **Reactions:** 0
  - **Analysis:** This security report describes a critical path traversal vulnerability in the IMAP/SMTP email skill's `downloadAttachments` function. Filenames from email attachments are not sanitized before being concatenated into file paths, potentially allowing an attacker to write files outside the intended directory. Although no comments or reactions exist yet, this is a **high-priority security concern** that demands immediate maintainer attention.

### Most Active PRs (by recency, all closed today):
- **PR #1884** (Engine cleanup) — significant architectural simplification.
- **PR #1883** (POPO multi-instance) — adds notable enterprise-grade scalability.
- **PR #1876** (Release merge) — the most comprehensive PR covering multiple areas.

No issues or PRs received comments or reactions today beyond the author/maintainers.

## 5. Bugs & Stability

| Severity | Issue / PR | Type | Status | Summary |
|----------|------------|------|--------|---------|
| **Critical** | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | Security Bug | Open | Path traversal in email `downloadAttachments`; no fix PR yet |
| High | None reported today | — | — | — |
| Medium | [PR #1848](https://github.com/netease-youdao/LobsterAI/pull/1848) | Bug Fix | Merged | Windows DingTalk image `file://` URL malformed |
| Medium | [PR #1838](https://github.com/netease-youdao/LobsterAI/pull/1838) | Bug Fix | Merged | OpenClaw snapshot clobbering due to missing meta fields |
| Low | [PR #1865](https://github.com/netease-youdao/LobsterAI/pull/1865) | Bug Fix | Merged | Header ModelSelector not updating per agent |
| Low | [PR #1860](https://github.com/netease-youdao/LobsterAI/pull/1860) | Bug Fix | Merged | `supportsImage` mismatch on home page |

**Note:** No crashes or regressions were reported in the last 24 hours. The primary concern is the unpatched path traversal vulnerability (#1885) in the email skill.

## 6. Feature Requests & Roadmap Signals

Today's merged PRs reveal clear roadmap signals:

| Feature | PR | Likely Release Target | Reasoning |
|---------|----|----------------------|-----------|
| POPO multi-bot instances | [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | **Next release (2026.05.x)** | Fully implemented and merged |
| Remote embedding providers (memory search) | [#1810](https://github.com/netease-youdao/LobsterAI/pull/1810) | Already in `release/2026.04.27` | Merged to main |
| Per-agent model selection in UI | [#1865](https://github.com/netease-youdao/LobsterAI/pull/1865) | **Next release** | Fixed and merged |
| Engine unification (remove `yd_cowork`) | [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) | **Next release** | Merged, reduces maintenance burden |

**Prediction for next version (2026.05.x):** Expect a release focused on IM integration stability (POPO multi-instance, DingTalk Windows fixes), security hardening (log redaction), and UI polish (per-agent model selection, DiffView restoration). The email path traversal vulnerability (#1885) will likely be patched before the next release.

## 7. User Feedback Summary

No direct user feedback was captured in today's data (no issues with comments from end users, no feature requests). However, the issues and PRs reveal inferred user pain points:

- **Windows users** were affected by broken image uploads in DingTalk (PR #1848) — now fixed.
- **Users with multiple agents** experienced confusion when the header model selector didn't reflect per-agent settings (PR #1865) — now fixed.
- **Users with non-default models** saw images incorrectly disabled on the home page (PR #1860) — now fixed.
- **Security-conscious users** (or security researchers) identified a path traversal vulnerability in email skills (Issue #1885) — pending fix.

Overall satisfaction signals are positive: no open user issues/complaints, and bugs from previous releases are being systematically resolved.

## 8. Backlog Watch

No long-unanswered or stale issues/PRs were identified in today's data. All 16 PRs were either merged or closed. The only open item is the security issue #1885 filed earlier today.

| Issue / PR | Age | Last Update | Maintainer Action Required |
|------------|-----|-------------|---------------------------|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) — Email skill path traversal | 0 days | 2026-05-06 | **Urgent:** Review & patch. Likely needs filename sanitization in `imap.js` `downloadAttachments` |

**Status:** Backlog is clean. Maintainers are keeping pace with incoming issues and PRs effectively.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-06

## Today's Overview
Moltis has low activity today, with **1 open issue** and **1 open pull request** updated in the last 24 hours, and **no new releases**. The issue is a newly filed bug report concerning login failures, while the sole open PR is an automated dependency update from Dependabot (Cargo group). No merged or closed activity occurred today, indicating maintainers may be focused on review or preparation for upcoming work. Overall project momentum appears moderate but steady.

## Releases
No new releases were published today.

## Project Progress
No pull requests were merged or closed in the last 24 hours. No feature-level advances were identified from today's data.

## Community Hot Topics
- **#968 [Bug]: Login failure** *(open, 0 comments)* — Raised today by BrandonStudio, this is a new issue with the user confirming they searched existing reports and are using the latest version. While it has no comments yet, login failures can be a critical blocker for users. [View Issue](https://github.com/moltis-org/moltis/issues/968)

No other issues or PRs received multiple comments or reactions.

## Bugs & Stability
| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| #968 Login failure | **High** (blocker for core functionality) | Open, no fix PR attached | Reported by user with preflight checks completed; suggests a possible authentication regression in latest version. No reproduction steps or stack trace available yet. |

No crashes or regressions beyond this report.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The only issue is a bug report, which may prompt maintainers to investigate authentication paths and potentially fast-track a fix in the next patch release.

## User Feedback Summary
- **Pain point**: One user experiencing login failure despite using the latest version and confirming no existing reports — indicates either a new regression or edge case not covered by previous tests.
- **Positive signals**: User followed preflight checklist and appears experienced, suggesting the project’s issue template and triage process are effective for capturing structured feedback.

## Backlog Watch
**No long-unanswered issues or PRs** were identified. The only open item (#968) was filed today, and the open PR (#967) is an automated dependency update that has been open for 1 day, requiring maintainer review. No items currently appear to be neglected.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** (github.com/agentscope-ai/CoPaw) for **2026-05-06**.

---

## CoPaw Project Digest — 2026-05-06

### 1. Today’s Overview
The project is in a **high-velocity maintenance and refinement phase**, with 23 issues and 10 PRs updated in the last 24 hours. While there are no new releases, the community is actively contributing fixes and features across the stack, including network resilience, security hardening, and internationalization. The issue tracker shows a healthy balance of bug reports, feature requests, and questions, though several high-severity bugs (e.g., streaming crashes, token expiry, network reconnection failures) remain open and require maintainer attention. The project’s stability appears solid for common use cases, but edge cases around streaming models and channel connectivity continue to surface.

### 2. Releases
**None.** No new releases were published on this date.

### 3. Project Progress
**Merged/Closed PRs (2):**
- **[PR #4021 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/pull/4021)** — *fix(message_processing):* First-time contributor karls0r fixed a bug where audio blocks delivered via `file://` URLs were incorrectly processed by an HTTP-only download function. This unblocks local-file media in the UI.
- **[PR #3922 (CLOSED)](https://github.com/agentscope-ai/QwenPaw/pull/3922)** — *Add plan mode docs:* Documentation update providing guidance on the agent planning/mode feature.

**Notable Open PRs (matured/updated today):**
- **[PR #4046 (OPEN)](https://github.com/agentscope-ai/QwenPaw/pull/4046)** — *feat(security):* Adds rule-level auto-deny to Tool Guard, allowing operators to block specific tool calls (by rule ID) without manual approval.
- **[PR #4048 (OPEN)](https://github.com/agentscope-ai/QwenPaw/pull/4048)** — *fix(utils):* Removes redundant code in `download_file_from_url` (code quality improvement).
- **[PR #3999 (OPEN)](https://github.com/agentscope-ai/QwenPaw/pull/3999)** — *feat(skills):* Adds a CLI command `qwenpaw skills test <skill>` for validating skills before assignment.

### 4. Community Hot Topics
- **[[Feature] CoPaw Agent Teams — Natural language-driven self-evolving multi-agent teams (Issue #3224)](https://github.com/agentscope-ai/QwenPaw/issues/3224)** — **5 comments.** This proposal has been open since April 10 and remains the most ambitious feature request. It calls for a shift from manual agent creation to a "team" abstraction where agents evolve and collaborate via natural language. This signals strong community desire for **higher-level orchestration abstractions** beyond the current workspace model.

- **[[Bug] Input box severe lag (Issue #4023)](https://github.com/agentscope-ai/QwenPaw/issues/4023)** — **4 comments.** The user reports significant input lag in the console UI. This is a **top-priority UX issue** that likely affects many users but has low reproduction detail. No fix PR exists yet.

- **[[Bug] Network disconnect causes channel not to auto-reconnect (Issue #4017)](https://github.com/agentscope-ai/QwenPaw/issues/4017)** — **3 comments.** User reports that enabling `HEARTBEAT.md` *prevents* automatic reconnection after network recovery. This is a critical bug for long-running production agents.

### 5. Bugs & Stability
**High Severity (active or unfixed):**
- **[Issue #4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) — Streaming models (MiMo/DeepSeek) cause ReAct loop to repeat tool calls & duplicate responses.** Affects v1.1.5. Root cause is likely in streaming response handling. No fix PR yet. **Severity: Critical** — breaks core agent logic for popular models.
- **[Issue #4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) — MCP tool timeout hardcoded at 30s.** The `execution_timeout` is bound to an internal 30-second default, making long-running MCP tools unusable. **Severity: High** — blocks integration with real-world APIs.
- **[Issue #3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) — DeepSeek `reasoning_content` not passed back, causing HTTP 500.** Multi-turn tool calls fail after ~5 rounds. **Severity: High** — breaks production use of DeepSeek reasoning models.
- **[Issue #4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) — File/image attachment links expire after 1 day.** Links become invalid with no UI feedback. **Severity: Medium-High** — degrades the core chat experience for document-heavy workflows.

**Medium/Lower Severity (with fix PRs progressing):**
- **[Issue #4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) — HEARTBEAT.md blocks reconnection.** A fix PR for Telegram channel retry ([PR #4039](https://github.com/agentscope-ai/QwenPaw/pull/4039)) is open and may address this.
- **[Issue #4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) — AnthropicChatModel hardcodes `max_tokens=2048`.** Responses from custom Anthropic providers are truncated. No fix PR yet.

### 6. Feature Requests & Roadmap Signals
- **Hierarchical Subagents with Context Inheritance (Issue #4044):** User proposes a parent-child agent hierarchy where subagents inherit state and preferences at runtime. This complements the existing peer-to-peer model and could be a **strong candidate for the next minor release** as it builds on the existing multi-agent foundation.
- **Semantic Skill Routing (Issue #3091, PR #3117):** A long-standing feature by contributor hellogxp to use embeddings for skill selection in large skill pools. Still under review but actively discussed. Likely to land in v1.2.x.
- **Adaptive Shell Execution (Issue #4045):** Feature request for `execute_shell_command` to auto-switch between sync/async based on command duration. Low complexity, high impact for developer users.
- **Skill Pool UI Diff (Issue #3089):** User wants the skill pool UI to only show the diff when importing/exporting, avoiding duplicates. Simple UX win.

### 7. User Feedback Summary
- **Pain Points:**
    - **Windows performance:** Multiple reports ([Issue #4043](https://github.com/agentscope-ai/QwenPaw/issues/4043)) about slow startup and unregistered skills after installation.
    - **Complex model setup:** A user ([Issue #4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)) explicitly calls out the multi-step, multi-click process for adding a new model as “way too complicated,” suggesting a simplified "Quick Add" flow.
    - **Network resilience:** Users running agents in production (e.g., Telegram bots, Docker) are hitting hard reconnection bugs. This is a **trust and reliability issue** for autonomous deployments.
- **Satisfaction Signals:**
    - Positive engagement with first-time contributor PRs (4 open "first-time-contributor" PRs) suggests the project is welcoming and well-documented for new developers.
    - Feature requests like "Agent Teams" and "Hierarchical Subagents" indicate users are already building on CoPaw's multi-agent strengths and want to go deeper.

### 8. Backlog Watch
Items requiring maintainer attention due to age, importance, or lack of response:

- **[Issue #2865 (Apr 3)](https://github.com/agentscope-ai/QwenPaw/issues/2865) — Support custom agent names and avatars via URL.** Over a month old with 3 comments but no PR. A simple UI/backend feature that would significantly improve user identity management.
- **[PR #3117 (Apr 8)](https://github.com/agentscope-ai/QwenPaw/pull/3417) — Semantic Skill Routing (hellogxp).** Still labelled "need discussions" after nearly a month. This is a high-value feature that could unblock users with 50+ skills.
- **[Issue #3224 (Apr 10)](https://github.com/agentscope-ai/QwenPaw/issues/3224) — CoPaw Agent Teams.** The most upvoted (by comments) feature request. It has no assignee and no PR. This could define the next major release (v1.2 or v2.0) and needs a roadmap decision.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-06

## 1. Today's Overview
ZeptoClaw is in a low-activity maintenance phase today. No new issues or releases were recorded in the last 24 hours, and no PRs were merged or closed. However, 11 open dependency update pull requests (all authored by Dependabot) have been filed, covering Rust, JavaScript, and GitHub Actions dependencies across the core runtime, admin panel, and documentation sites. This signals an ongoing effort to keep the project's supply chain up to date, but no feature development or bug fixes were committed. The project appears stable with no urgent community concerns.

## 2. Releases
**No new releases** were published today. The latest available releases remain unchanged.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. All 11 open pull requests are Dependabot-driven dependency bumps waiting for review and merge. No feature work or bug fixes advanced today.

## 4. Community Hot Topics
No issues or PRs have generated significant discussion or reactions. All 11 open PRs have zero comments and zero reactions (👍). The most notable items from an activity standpoint are:

- **#582** — Bump `globals` from 17.3.0 to 17.5.0 in `/panel`  
  [qhkm/zeptoclaw PR #582](https://github.com/qhkm/zeptoclaw/pull/582)
- **#581** — Bump `rustyline` from 17.0.2 to 18.0.0 (major version bump)  
  [qhkm/zeptoclaw PR #581](https://github.com/qhkm/zeptoclaw/pull/581)
- **#575** — Bump `axum` from 0.8.8 to 0.8.9  
  [qhkm/zeptoclaw PR #575](https://github.com/qhkm/zeptoclaw/pull/575)

The lack of comments suggests these are routine maintenance PRs that have not yet been reviewed. The maintainer should prioritize #581 (rustyline v18) as it involves a major version change that may require code adjustments.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. No stability-related issues are open. The project's current state appears stable.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted today. Based on the dependency updates, there is no visible signal pointing toward new features in the next version. The project is currently in a maintenance-only cadence.

## 7. User Feedback Summary
No user feedback was recorded in issues or PR comments today. There are no indications of satisfaction or dissatisfaction from the community.

## 8. Backlog Watch
No issues or PRs have been left unanswered for extended periods. The 11 open Dependabot PRs were all created on 2026-05-05 and are less than 24 hours old. No long-unanswered items require maintainer attention at this time.

---

**Project Health Summary:** ZeptoClaw is in a quiet maintenance phase with no feature development, bug reports, or community discussion. The immediate action needed is review and merge of the 11 pending dependency updates to keep the supply chain current.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-06

## Today's Overview

ZeroClaw's development velocity remains high, with 50 issues and 49 PRs updated in the last 24 hours, reflecting a project deep in active iteration. The majority of issues remain open (46 of 50), and 11 of 49 PRs were closed or merged today, signaling steady throughput. No new releases were published; the project is clearly in a pre-release build-up phase, with the v0.7.5 milestone tracking issue (#5878) remaining active and a large `integration/v0.8.0` PR (#6398) now in flight. The board shows a heavy concentration of P1 and P2 bugs, particularly across WhatsApp Web, provider compatibility, and gateway observability, suggesting the team is prioritizing stabilization alongside new features like the nodes dashboard and desktop app enhancements.

---

## Releases

No new releases were published in the last 24 hours. The most recent release target is **v0.7.5**, tracked in issue #5878, which is described as a release automation and pipeline overhaul. A larger **v0.8.0** integration branch is active (PR #6398), containing the typed-family provider split and other breaking config changes. Users should expect no stable release today, but significant changes are accumulating.

---

## Project Progress

**Merged/Closed PRs today (11 total):**
- [#5280](https://github.com/zeroclaw-labs/zeroclaw/pull/5280) — **fix(channel): prevent panic on non-UTF-8 boundary in MultiMessage streaming** — Resolves a crash in Discord/Matrix channels when processing CJK multi-byte characters. This is a significant stability fix for international users.
- [#5273](https://github.com/zeroclaw-labs/zeroclaw/pull/5273) — **feat(security): support prefix wildcards in auto_approve** — Allows MCP tool whitelisting at the server namespace level (e.g., `server__*`), improving autonomy configuration flexibility.
- [#5317](https://github.com/zeroclaw-labs/zeroclaw/pull/5317) — **feat: add SearXNG configuration fields to WebSearchConfig** — Adds authentication, language, engine filtering, and retry config for self-hosted SearXNG search.

**Notable open PRs advancing features:**
- [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) — New `/nodes` dashboard page for fleet health and device identification.
- [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) — Typed-family provider split, targeting `integration/v0.8.0`.
- [#6411](https://github.com/zeroclaw-labs/zeroclaw/pull/6411) — Restoring MUSL static binary builds for Linux, addressing a CI regression.
- [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) — Preserving chat context across page navigation in the web UI and hot-switching models.

---

## Community Hot Topics

1. **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — [Bug]: default_model issue on fresh install** (17 comments, P1)
   - **User pain:** Fresh installs on LXC containers with remote Ollama fail to find a default model, blocking the entire onboarding workflow. The error is cryptic and stops the agent from starting.
   - **Analysis:** This is the highest-traffic issue and likely the most impactful user-facing bug. It suggests the provider auto-detection or default model resolution logic is fragile in containerized or multi-host setups. The number of comments without a fix indicates this is a stubborn config-resolution problem.

2. **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — [Feature]: A better LOGO of Zeroclaw** (9 comments, 2 👍)
   - **User need:** The community is actively discussing a branding refresh. The proposer has already shared design mockups and is soliciting feedback. This signals growing community investment in project identity.

3. **[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) — release: v0.7.5 milestone tracking** (6 comments)
   - **Project signal:** This is the authoritative scope definition for the next release. The theme states "Every release from here is intentional and automated," indicating a major CI/CD overhaul is underway. Community members are watching this for when the next stable drop arrives.

4. **[#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) — bug(memory): autosaved Conversation memories invisible to recall** (CLOSED, 6 comments)
   - **Impact:** A critical memory bug where auto-saved conversation context was silently lost due to `session_id` mismatch between store and recall paths. The closure today is a positive signal for memory reliability.

5. **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) — [Feature]: Discord Bot respond only in specific Discord channels** (3 comments)
   - **User need:** Community members want fine-grained channel access control for Discord, mirroring the `allowed_rooms` pattern already present in Matrix and Nextcloud Talk. This is a consistent request pattern across channel implementations.

---

## Bugs & Stability

**High-severity bugs (P1, S1/S2) reported or updated today:**

- **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — default_model issue on fresh install** (P1, S1, 17 comments) — Workflow blocked on fresh installs with remote Ollama. No fix PR identified yet.

- **[#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) — /api/cost stays zero, no usage artifacts written** (P1, S2, in-progress) — Gateway chat succeeds but observability/cost tracking is completely silent. No trace files generated. Fix is in-progress.

- **[#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) — context_compression drops tool_call/tool result for OpenAI-compatible providers** (P1, S1, in-progress) — Multi-turn tool conversations with MiniMax and similar providers are completely broken. The context compressor strips essential assistant tool_call messages. Fix is in-progress, needs maintainer review.

- **[#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) — Docker bind mount shadows pre-built web dashboard** (P1, S2) — Running `docker run -v` with a bind mount at `/zeroclaw-data` overwrites the built dashboard assets, breaking the web UI. Needs maintainer review.

- **[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) — WhatsApp Web: pair succeeds but messages don't flow** (P1, S1) — Server-side protocol bump around April 24 has broken message delivery entirely. No fix PR identified.

- **[#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) — WhatsApp Web self-chat-mode triggers on all fromMe messages** (P1, S2) — Agent replies to operator's own contacts under the operator's identity in personal mode. Fix in progress via PR [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) — "drop own-account outbound in non-self chats."

- **[#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp Web allowed-numbers bypassed for LID-based contacts** (P1, S2) — Messages from LID-based contacts bypass the `allowed_numbers` filter and are silently dropped. Needs maintainer review.

- **[#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) — bash completion infinite recursion** (P1, S2) — Tab-completing any `zeroclaw` subcommand crashes the SSH session due to recursive function calls. No fix PR identified.

- **[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) — Onboarding: choosing OpenAI Codex prompts for OpenAI API key** (P1, S1) — The onboarding tool confuses Codex subscriptions with standard OpenAI API key flows.

- **[#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) — Custom remote provider sends local image file paths instead of data URLs** (P1, S1) — Multimodal requests to remote vLLM servers are broken on Raspberry Pi/arm64 because file paths are sent literally instead of data URLs. Needs maintainer review.

- **[#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) — Desktop menu-bar chat surfaces every tool_call inline** (P2, blocked) — Tool errors like `tool not found` appear as chat bubbles in the desktop panel. This is a parity bug with dashboard issue #6348.

**Medium-severity bugs:**
- [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Prompt caching fails on Telegram but works on CLI (S2)
- [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) — Docker installation documentation contains errors (S3, docs)

---

## Feature Requests & Roadmap Signals

**High-signal feature requests today:**

- **[#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) — GitHub action that checks PR title format** — With a corresponding PR already open ([#6396](https://github.com/zeroclaw-labs/zeroclaw/pull/6396)), this is nearly landed. Expected in v0.7.5.

- **[#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) — Real heartbeat tracking for daemon nodes** — Replace static "Online" status with live WebSocket liveness detection. Accepted and in planning, likely part of the fleet management push (v0.8.x).

- **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) — Discord channel-restricted bot responses** — Consistent with Matrix/Nextcloud Talk patterns. Expected soon as the PR/approval pattern from #6075 (closed as duplicate) indicates consensus.

- **[#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327) / [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) / [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339)** — Desktop app improvements: channels overview parity, tray menu items, universal binary. These are accepted and target the desktop track, likely for v0.8.x.

- **[#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) — Per-channel reply-min-interval-secs (throttle)** — Accepted, in progress. PR [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) already adds this for Telegram. Expected in v0.7.5.

- **[#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) — Typed-family split for model & TTS providers** — A major config restructuring. Implemented in PR [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) targeting v0.8.0. Breaking change for config files.

- **[#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) — V3 env-var override mechanism** — Operators want to set credentials via environment variables without ambiguity. This restores a capability that was removed during the V3 config migration.

**Prediction for next version (v0.7.5):** PR title linting CI, reply-min-interval-secs on Telegram, SearXNG config, Discord channel restrictions. **For v0.8.0:** Typed-family provider split, nodes dashboard, real heartbeat tracking, universal macOS binary.

---

## User Feedback Summary

**Pain points (multiple reports):**
1. **Onboarding is fragile** — Issue #6123 (fresh installs with remote Ollama) and #6120 (Codex vs OpenAI key confusion) both block first-time setup. Onboarding is the highest-traffic complaint area.
2. **WhatsApp Web is unreliable** — Issues #6246 (protocol bump breakage), #6351 (self-chat-mode false positives), and #6350 (LID contact bypass) represent three distinct, serious bugs. WhatsApp users are experiencing silent failures and unwanted replies.
3. **Provider compatibility gaps** — Issue #6361 (MiniMax tool loops), #6399 (local file paths on remote vLLM), and #6360 (Telegram prompt caching) show that provider-specific edge cases are surfacing as users deploy on diverse hardware and LLM backends.
4. **Documentation errors** — Issue #6393 reports the Chinese-language docs and Docker Compose guide have factual errors, which erodes trust in non-English documentation.

**Satisfaction signals:**
- The community is actively contributing PRs for new features (SearXNG, MCP timeout alignment, ACP prompt rejection, skill tier banners), indicating engaged and technically capable users.
- Multiple contributors are advancing desktop app and gateway features, showing that the Tauri-based desktop initiative has attracted developer interest.

---

## Backlog Watch

**Issues needing maintainer attention (no updates, high severity):**

- **[#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) — Docker bind mount shadows web dashboard** (P1, S2, `needs-maintainer-review`) — Freshly filed, no maintainer response yet. A common Docker workflow is broken.

- **[#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) — Custom remote provider sends local file paths** (P1, S1, `needs-maintainer-review`) — Blocks multimodal on Raspberry Pi + remote vLLM. No maintainer response.

- **[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Prompt caching fails on Telegram** (P2, `needs-maintainer-review`) — Filed two days ago, no maintainer acknowledgment. A medium-severity performance regression.

- **[#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) — Desktop tool_call inline rendering** (P2, blocked, `needs-maintainer-review`) — Blocked on web issue #6348. No path to unblock defined.

**Long-unanswered items:**
- **[#6030](https://github.com/zeroclaw-labs/zeroclaw/issues/6030) — Scope TOOL_LOOP_SESSION_KEY in channel orchestrator** (P2, accepted, no-stale) — Filed April 23. This blocks tool loop functionality in channel contexts (Telegram, Discord, etc.). The feature is accepted but no PR is assigned.

**Watch:**
- **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — default_model on fresh install** — With 17 comments and counting, this is the community's most urgent unresolved issue. No assignee, no fix PR. If a maintainer does not engage soon, this risks becoming a reputation problem for new-user onboarding.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*