# OpenClaw Ecosystem Digest 2026-04-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-26 15:21 UTC

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

# OpenClaw Project Digest — 2026-04-26

## 1. Today's Overview

OpenClaw shows **high activity** with 500 issues and 500 PRs updated in the last 24 hours, though only 41 issues (8.2%) were closed, indicating a **widening backlog**. Five beta releases dropped today (v2026.4.25-beta.1 through beta.4), all sharing identical changelogs — suggesting rapid iteration to stabilize the major TTS overhaul. Two critical regressions were reported today: missing npm dependencies after the v2026.4.24 upgrade and a Telegram channel crash on Windows 11. The project continues to expand provider coverage and plugin integrations at a pace that may be outpacing its bugfix capacity.

---

## 2. Releases

**Five versions released today**, all with identical changelogs:

| Version | Notes |
|---------|-------|
| v2026.4.25-beta.4 | Latest |
| v2026.4.25-beta.3 | Same changelog |
| v2026.4.25-beta.2 | Same changelog |
| v2026.4.25-beta.1 | Same changelog |
| v2026.4.24 | Previous stable |

### v2026.4.25 Highlights (all betas)

**Text-to-Speech overhaul:**
- New `/tts latest` command
- Chat-scoped auto-TTS controls
- Persona support for voice replies
- Per-agent and per-account TTS overrides
- **New providers:** Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, ElevenLabs v3
- Contributors: @leonchui, @zoujiejun, @solar2ain

### v2026.4.24 Highlights

- **Google Meet as a bundled participant plugin** — personal Google auth, Chrome/Twilio realtime sessions, paired-node Chrome support, artifact/attendance exports, recovery tooling for already-open Meet tabs
- DeepSeek V4 Flash and V4 Pro support

**Migration notes:** The five betas in a single day with no changelog differentiation suggest urgent hotfixes. Users pinning to the previous stable (v2026.4.24) may want to wait for a non-beta release.

---

## 3. Project Progress

**Today's merged/closed PRs:** 175 out of 500 updated (35%). Notable merges include:

| PR | Description | Impact |
|----|-------------|--------|
| [#72038](https://github.com/openclaw/openclaw/pull/72038) | fix(telegram): send fresh finals for stale previews | UX improvement — users now see accurate task duration |
| [#72189](https://github.com/openclaw/openclaw/pull/72189) | fix Google Live tool responses | Preserves function call names, adds `NON_BLOCKING` support |
| [#71257](https://github.com/openclaw/openclaw/pull/71257) | sanitize model artifacts before session reuse | Fixes conversation contamination from leaked tokens |

**Features advanced in open PRs** (not yet merged):
- [#38160](https://github.com/openclaw/openclaw/pull/38160) — Local model fallback + semantic cache store (XL)
- [#36630](https://github.com/openclaw/openclaw/pull/36630) — Complete Signal bidirectional quote-reply (XL)
- [#35735](https://github.com/openclaw/openclaw/pull/35735) — `sessions rm` and `sessions clear` CLI commands (L)

---

## 4. Community Hot Topics

### Most Discussed (by comment count)

| Issue | Comments | Reactions | Summary |
|-------|----------|-----------|---------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 26 | 17 👍 | `brew not installed` in Docker — skill installs fail on Linux containers |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | 24 | 6 👍 | **Closed** — LLM request regression on github-copilot/gpt-5-mini after v2026.4.15 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 22 | 0 | Tool-call internal text leaks to messaging channels — major UX problem |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 20 | 1 | Request for prebuilt Android APK releases |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | 18 | 0 | `memoryFlush` fires only every other cycle — dedup logic bug |

### Most Upvoted (by reactions)

| Issue | 👍 | Topic |
|-------|----|-------|
| [#8081](https://github.com/openclaw/openclaw/issues/8081) | 28 | Multi-user RBAC permission management |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 17 | Docker `brew not installed` |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | 4 | Control UI HTTPS requirement regression |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 4 | Bootstrap files in agentDir silently ignored |

### Underlying Needs Analysis

1. **Docker deployment reliability** (#14593, #31331, #72058) — the top pain point. Users running OpenClaw in containers face multiple breakages: Homebrew dependency, sandbox workspace mounting, npm dependency regression.
2. **Context/tool hygiene** (#25592, #12590) — agents leaking internal processing text or failing memory flushes erodes trust in session state management.
3. **Access control** (#8081, #10659) — strong demand for multi-user RBAC and secret masking for production deployments.

---

## 5. Bugs & Stability

### Critical Regressions (reported today)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#72058](https://github.com/openclaw/openclaw/issues/72058) | **Critical** | npm deps missing after v2026.4.22→24 update — Telegram silent, TUI won't start | No |
| [#72040](https://github.com/openclaw/openclaw/issues/72040) | **High** | Telegram channel crashes on Windows 11 — `ERR_UNSUPPORTED_ESM_URL_SCHEME` | No |
| [#71938](https://github.com/openclaw/openclaw/issues/71938) | **Medium** | `openclaw onboard` takes 5-10 minutes per step after v2026.4.24 | No |

### Active Regressions (ongoing)

| Issue | Days Open | Description |
|-------|-----------|-------------|
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | 7 | **Closed** — provider rejected schema/tool payload (regression from v2026.4.15) |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | 54 | Control UI HTTPS requirement regression |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 55 | `exec` tool doesn't inherit skill env vars (regression) |

### Infrastructure Issues

- **Per-hour spending ceiling** [#38248](https://github.com/openclaw/openclaw/issues/38248) — no cost kill switch, failover can drain balance
- **Docker sandbox workspace** [#31331](https://github.com/openclaw/openclaw/issues/31331) — internal paths instead of host paths
- **macOS node** [#37591](https://github.com/openclaw/openclaw/issues/37591) — `system.run.prepare` missing, prevents execution

---

## 6. Feature Requests & Roadmap Signals

### Likely for Next Version

| Request | Votes | Rationale |
|---------|-------|-----------|
| Prebuilt Android APK [#9443](https://github.com/openclaw/openclaw/issues/9443) | 1 👍 | 20 comments, iOS app getting heavy investment (PRs #40874, #40877, #40878) — parity likely |
| Backup/restore utility [#13616](https://github.com/openclaw/openclaw/issues/13616) | 0 👍 | 7 comments, needed for production adoption |
| Secret management [#13610](https://github.com/openclaw/openclaw/issues/13610) | 1 👍 | PR #16663 already closed with AWS/GCP/Azure/Vault providers — likely to land |
| Per-hour spending ceiling [#38248](https://github.com/openclaw/openclaw/issues/38248) | 0 | Growing concern as failover chains become complex |

### Long-Term Signals

- **Multi-user RBAC** [#8081](https://github.com/openclaw/openclaw/issues/8081) — 28 👍, most upvoted — used for family/organization sharing
- **Slack Block Kit support** [#12602](https://github.com/openclaw/openclaw/issues/12602) — richer interactive responses
- **Telegram Business Bot** [#20786](https://github.com/openclaw/openclaw/issues/20786) — business_message subscriptions
- **Multi-agent collaboration** [#35203](https://github.com/openclaw/openclaw/issues/35203) — capability profiling, shared blackboard, governance

### Predictions

The **SecretsProvider** work (PR #16663 closed, issue [#17311](https://github.com/openclaw/openclaw/issues/17311) open) is the most mature feature request — it has 130+ tests and multi-provider support. Expect it in the next minor release. The **Android APK** request is gaining steam alongside iOS investment. **RBAC** is the top-voted feature but requires architectural changes to auth middleware.

---

## 7. User Feedback Summary

### Pain Points

- **Docker frustration:** "Skill install fails in Docker: brew not installed" — pavelkudrna83
- **Context corruption:** "Agent replies to previous message instead of current message" — survivor998 — indicates session context confusion
- **Missing deps after upgrade:** "openclaw onboard take too long" — nolunxzxc22 — post-upgrade degradation
- **Windows Telegram broken:** "Telegram channel crash on Windows 11" — centralpc — Windows support gap

### Satisfaction Signals

- **TTS overhaul** is shipping rapidly — 5 betas in one day
- **Google Meet plugin** praised as "bundled participant plugin" — indicates demand for real-time collaboration
- **iOS Liquid Glass UI** PR [#40874](https://github.com/openclaw/openclaw/pull/40874) adds modern platform-native features

### Sentiment Trend

Users are **enthusiastic about new features** (TTS, Google Meet, iOS) but **frustrated by regressions**. The pattern of shipping many betas suggests a tight release cycle where polish suffers. The Docker and npm dependency issues specifically affect production/CI deployments, which may limit enterprise adoption.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Comments | Status |
|-------|-----|----------|--------|
| [#2597](https://github.com/openclaw/openclaw/issues/2597) | 89 days | 7 | Context usage percentage in Runtime line — no response in 3 months |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | 84 days | 11 | Rust rewrite proposal — no maintainer response |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 74 days | 26 | Docker brew install — top commented, no fix in 2.5 months |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 62 days | 22 | Leaking tool-call text to channels — serious UX bug |

### Stale PRs

| PR | Age | Size | Description |
|----|-----|------|-------------|
| [#15591](https://github.com/openclaw/openclaw/pull/15591) | 73 days | XS | Fix repo name in docs — still open |
| [#34581](https://github.com/openclaw/openclaw/pull/34581) | 53 days | M | MS Teams invalid JSON escapes — stale |
| [#30142](https://github.com/openclaw/openclaw/pull/30142) | 58 days | L | `sendPayload` batch implementation — stale |

### Warning Signal

**500 open issues** with only 41 closed today (8.2% closure rate) and **325 open PRs** indicates a **growing triage debt**. The project is shipping new features faster than it's closing bugs. The long-untouched issues (#2597 at 89 days, #14593 at 74 days) suggest community maintenance capacity is strained. Maintainers may need to declare a stabilization sprint or increase contributor bandwidth.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the April 26, 2026 community digest summaries.

---

## Cross-Project Ecosystem Report: Personal AI Assistant Agents
**Date:** 2026-04-26

### 1. Ecosystem Overview
The open-source personal AI agent ecosystem is maturing rapidly, characterized by a "release fast, fix later" cadence that prioritizes new provider integrations and channel support over stability. Projects are converging on a core set of capabilities (multi-provider LLM backends, MCP tooling, TTS, and chat platform integration) while differentiating through architectural choices and target user segments. The landscape shows a bifurcation between large, ambitious monolithic frameworks (e.g., OpenClaw, ZeroClaw) and leaner, more specialized agents (e.g., NanoBot, PicoClaw). A dominant theme across all active projects is the tension between feature velocity and technical debt, with several projects reporting widening backlogs and critical regressions.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged (24h) | Release Status | Health Score & Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ~175 | 5x Betas today | **Warning**: High activity, but 8.2% closure rate, widening backlog |
| **NanoBot** | - | 119 | 20 | No release | **High**: Massive contributor surge, responsive maintainers |
| **Hermes Agent** | 50 | 50 | 4 | No release | **Moderate**: High user volume, platform-specific integration friction |
| **PicoClaw** | 8 | 8 | 1 | Nightly build | **Stable**: Moderate activity, community engaged in contributions |
| **NanoClaw** | 4 | 19 | 3 | No release | **High**: Intensive v2 dev & security push, good contributor flow |
| **NullClaw** | 2 | - | 1 | No release | **Low**: Moderate bug triage, low feature velocity |
| **IronClaw** | 8 | 13 | 2 | No release | **High**: Strong dev velocity, critical canary failures need attention |
| **LobsterAI** | 4 (stale) | 1 | 1 | No release | **Low**: Signs of maintainer neglect; stale bugs, low engagement |
| **Moltis** | 4 | 12 | 5 | **New release** | **High**: Responsive team, security issues fixed same-day |
| **CoPaw** | 11 | 7 | 0 | No release | **Moderate/Strained**: High bug volume, zero merges suggesting bottleneck |
| **TinyClaw** | 0 | 0 | - | - | **Inactive**: No activity |
| **ZeptoClaw** | 0 | 0 | - | - | **Inactive**: No activity |
| **ZeroClaw** | 50 | 40 | 8 | No release | **Moderate**: Strong contributor throughput, schema migration complexity |

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Community:** OpenClaw's 500 issues/PRs updated in 24 hours dwarfs all peers (ZeroClaw is next at 50/40). It has the largest user and contributor base by a significant margin.
- **Feature Breadth:** The TTS overhaul and Google Meet plugin demonstrate a capability set (5 new TTS providers, real-time collaboration) that smaller projects like PicoClaw or NullClaw lack.
- **Platform Native Features:** iOS Liquid Glass UI (PR #40874) and bundled plugins (Google Meet) show investment in polished, platform-native UX that contrasts with NanoBot’s web-first approach.

**Technical Approach Differences:**
- OpenClaw leans toward a **monolithic, all-in-one architecture** with built-in plugins and providers, similar to ZeroClaw. In contrast, NanoBot and PicoClaw favor lighter, more modular approaches.
- OpenClaw’s release strategy (5 betas in one day) reflects a **high-velocity, risk-tolerant** approach, whereas IronClaw and Moltis prioritize stability and breaking changes through structured schema migrations.
- **Community Size:** OpenClaw’s community is 10x larger than the next busiest project (ZeroClaw). This provides a large testing surface but creates a **triage bottleneck** (500 issues, 325 open PRs).

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, signaling industry-wide priorities:

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Multi-Provider LLM Reliability** | OpenClaw, NanoBot, Hermes, IronClaw, ZeroClaw | Automatic failover on errors (NanoBot #3376), timeout hardening, OAuth fixes (PicoClaw #2674, IronClaw #2923) |
| **MCP (Model Context Protocol) Support** | IronClaw, Moltis, Hermes, ZeroClaw | Native transport support beyond HTTP (stdio/OAuth), prompt discovery, tool call audit trails |
| **Channel Expansion & Friction** | OpenClaw, Hermes, NanoClaw, CoPaw, ZeroClaw | Non-US platforms (Feishu/Lark, WeChat, QQ, Xiaoyi), end-to-end encryption (Matrix), platform-specific formatting (Block Kit) |
| **Configuration & Setup Pain** | OpenClaw, NanoClaw, LobsterAI, Moltis, ZeroClaw | Windows pathing bugs, Docker setup reliability, upstream dependency failures (NanoClaw #2026), missing prebuilt binaries (ARM64) |
| **Security & Access Control** | OpenClaw, NanoClaw, IronClaw, ZeroClaw | Multi-user RBAC, per-sender permissions (ZeroClaw #5982), secret management, OAuth credential storage |
| **Observability & Debugging** | OpenClaw, LobsterAI, Moltis, ZeroClaw | Token usage dashboards (LobsterAI #88), better error logging, runtime event infrastructure (PicoClaw #2677) |

### 5. Differentiation Analysis

| Dimension | OpenClaw / ZeroClaw | NanoBot / PicoClaw | IronClaw | Moltis |
|---|---|---|---|---|
| **Target User** | Power users, developers, enterprise | Hobbyists, lightweight deployments | Enterprise / platform devs | Security & privacy-conscious users |
| **Architecture** | Monolithic, feature-heavy | Modular, web/CLI-focused | Microservice / container-native | Plugin/sandbox isolated |
| **Key Feature Focus** | TTS, collaboration, iOS native | Web UI, real-time task management, wecom | MCP, process isolation, crypto audit | Local-first, MCP tooling, skill trust |
| **Community Model** | Large, crowded, slow triage | Contributor-driven, rapid iteration | Core contributor + community | Responsive maintainer, small but engaged |
| **Area of Differentiation** | "Everything agent" – broadest feature set | "Fast, reliable task agent" – lean and resilient | "Enterprise agent" – sandboxed, auditable | "Trustworthy agent" – secure import, local privacy |

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Risk, High Reward)**
- **OpenClaw**: Extreme velocity, but critical regressions and 500-issue backlog suggest instability. The 5x daily beta releases indicate urgent hotfixing.
- **NanoBot**: 119 PRs in 24 hours is a massive spike. The contributor base is energized, but maintainers must manage burnout.
- **ZeroClaw**: Strong throughput (8 PRs merged) but navigating a painful schema v3 migration with significant user friction.

**Tier 2: Healthy & Growing**
- **Moltis**: Responsive maintainers, same-day bug fixes, and a new release today. Low backlog.
- **NanoClaw**: Intensive v2 development, security hardening, strong contributor quality. Risk from upstream dependency failure.
- **IronClaw**: Solid foundational work (runtime authority boundaries) but canary failures need immediate resolution.

**Tier 3: Moderate / Stabilizing**
- **PicoClaw**: Steady contributor engagement, nightly build. No critical issues, but roadmap features are stalling.
- **Hermes Agent**: High user activity but straining under platform-specific integration issues and a growing backlog of stale PRs.

**Tier 4: Low Activity / At Risk**
- **LobsterAI**: Maintainer silence on key bugs for 2+ months. Community engagement is low.
- **NullClaw**: Small team, moderate bugs, low feature velocity.
- **TinyClaw / ZeptoClaw**: Effectively inactive.

### 7. Trend Signals

1. **The Maturation of MCP**: Multi-project investment in Model Context Protocol (IronClaw, Moltis, Hermes, ZeroClaw) signals that standardizing agent-to-tool communication is an industry priority. Look for MCP to become a baseline expectation for new agents.

2. **Security is Shifting Left**: Projects are embedding security earlier in the stack—Cryptographic audit trails (IronClaw), skill import trust controls (Moltis #881), and credential vaulting (NanoClaw #2022). This is a direct response to real-world supply chain risks.

3. **"Ubiquity over Depth" on Channels**: The frenzy of Chinese platform integrations (Feishu, WeChat, QQ, Xiaoyi) from Hermes, CoPaw, and ZeroClaw suggests a market race to be everywhere at once, even at the cost of quality. Western-only projects like NullClaw risk being left behind.

4. **Failure Tolerance is the New Feature**: Users are pushing for **graceful degradation**—automatic failover (NanoBot #3376), retry with backoff (PicoClaw #2669), and cost kill-switches (OpenClaw #38248). The era of "one provider, always working" is over.

5. **The ARM64/Embedded Gap**: ZeroClaw’s Raspberry Pi binary issue (#4842) and PicoClaw’s Pi Zero request (#2675) highlight a growing use case for on-device or low-resource deployment that few projects are actively supporting. This will be a differentiator in 2027.

6. **Windows is Still Second-Class**: ZeroClaw's broken `setup.bat` (integer overflow), OpenClaw's Telegram crash on Win11, and LobsterAI's hardcoded C: drive all point to a systemic gap in platform quality assurance.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for **NanoBot** for **2026-04-26**.

---

## NanoBot Project Digest – April 26, 2026

### 1. Today's Overview
NanoBot is showing **extremely high development velocity**, with **119 PRs** updated in the last 24 hours—a massive surge suggesting a coordinated merge window or a spike in contributor activity. Community focus is split between **infrastructure improvements** (memory systems, provider reliability) and **channel integrations** (WeCom, Telegram, WhatsApp, Web UI). A single bug fix was merged, but **6 issues remain open**, including one critical provider hang bug and one closed bug regarding model reasoning data leaking to users. The maintainers appear responsive, though the sheer volume of PRs may strain review bandwidth.

### 2. Releases
**None.** No new versions were published in the last 24 hours.

### 3. Project Progress
**20 PRs were merged or closed** today. Key advances:
- **Web UI enhancement** (PR [#3454](https://github.com/HKUDS/nanobot/pull/3454)): Added `ask_user` choice cards and model settings page. *Merged.*
- **WeCom WS fix** (PR [#3331](https://github.com/HKUDS/nanobot/pull/3331)): Fixed WebSocket client initialization for WeCom channel. *Closed.*
- **Agent prompt improvements** (PR [#1148](https://github.com/HKUDS/nanobot/pull/1148)): Agent now executes confirmed actions immediately instead of re-analyzing. *Closed.*
- **Reasoning content preservation** (PR [#410](https://github.com/HKUDS/nanobot/pull/410)): Fixed multi-turn failures with reasoning models (Kimi, DeepSeek-R1). *Closed.*
- **Web chat channel** (PR [#2871](https://github.com/HKUDS/nanobot/pull/2871)): Added SSE streaming, markdown rendering, and full UI—zero core changes. *Closed.*

### 4. Community Hot Topics
| Issue/PR | Type | Comments | Summary |
|---|---|---|---|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Enhancement | **8 comments, 1 👍** | **Automatic failover** between providers/models on error (429, 5xx, timeout). The most active topic. |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Feature | 2 comments | **Session-level focus tool**: persistent task awareness across interruptions. |
| [#3455](https://github.com/HKUDS/nanobot/issues/3455) | Bug (Open) | 0 comments | **Missing timeout** on `AsyncOpenAI` client causes 10-minute hangs. |

**Analysis:** The community’s loudest demand is for **production-grade reliability**—automatic failover (#3376) and timeout hardening (#3455) reflect users running real workloads with multiple backends. The session focus request (#3292) suggests users want agents that handle real-world *task switching* better.

### 5. Bugs & Stability
| Issue | Severity | Description | Fix Status |
|---|---|---|---|
| [#3455](https://github.com/HKUDS/nanobot/issues/3455) | **Critical** | `AsyncOpenAI` client has no timeout; blocks agent loop for **up to 600s** on hung requests. | New (no fix PR yet) |
| [#3443](https://github.com/HKUDS/nanobot/issues/3443) | **Medium** | Reasoning field (`chain-of-thought`) leaks into user-visible content in non-streaming fallback. | **Closed** (fix merged) |
| [#3435](https://github.com/HKUDS/nanobot/issues/3435) | **Medium** | WeCom channel fails to send media files; returns `file upload failed`. | Open, no fix PR |

**Ranking:** The 10-minute hang (#3455) is the most urgent—it can silently kill any long-running agent session. The reasoning leak (#3443) was fixed today, which is good. The WeCom media issue (#3435) affects a specific channel but blocks a core feature.

### 6. Feature Requests & Roadmap Signals
- **Automatic provider failover** (#3376) – Highly requested. Likely to land in next minor release given the volume of multi-provider discussion.
- **Session-level focus tool** (#3292) – More speculative; could ship as a new tool or system prompt extension.
- **Channel-specific `sendProgress`/`sendToolHints` config** (#3452) – A **good first issue** ripe for community contribution.
- **External agent support** (#3436) – User asks if NanoBot can rely on OpenCode/Codex instead of its own agent. Indicates interest in composable agent frameworks.

**Prediction:** The **failover** feature has the highest probability of inclusion in v0.2.0, as it directly addresses stability pain points from both the community and the new timeout bug (#3455).

### 7. User Feedback Summary
- **Pain Points:**
  - **Reliability:** "Task would still be interrupted by single-point failure even with multiple providers configured" (#3376).
  - **Provider hangs:** "Hung LLM request can block the agent loop for up to 10 minutes" (#3455).
  - **Channel-specific limitations:** WeCom media upload fails (#3435); no per-channel config for progress/tool hints (#3452).
- **Use Cases:**
  - **Multi-provider production deployments:** Users pre-configure several providers for resilience.
  - **Real-world task management:** Users want agents to *remember and return* to a primary goal after interruption (#3292).
- **Satisfaction:** Silent on satisfaction, but the volume of PRs (119) suggests an active and engaged contributor base.

### 8. Backlog Watch
| Item | Age | Issue | Reason for Attention |
|---|---|---|---|
| Memory index suite | ~28 days | [#2618](https://github.com/HKUDS/nanobot/pull/2618), [#2619](https://github.com/HKUDS/nanobot/pull/2619), [#2620](https://github.com/HKUDS/nanobot/pull/2620), [#2636](https://github.com/HKUDS/nanobot/pull/2636) | Four related PRs from the same contributor (Mihir-Null) offering hybrid BM25+vector search, file watchers, and Graphiti KG backend. **All open**, no maintainer merge decision. |
| Provider logout CLI | 25 days | [#2727](https://github.com/HKUDS/nanobot/pull/2727) | Adds `provider logout` command for OAuth credentials. No review activity since creation. |
| Telegram forum topics | 28 days | [#2628](https://github.com/HKUDS/nanobot/pull/2628) | Adds `message_thread_id` routing for forum threads. A clean, well-scoped feature—stale. |

**Recommendation:** The memory index PRs (#2618–#2636) represent a **major architectural decision** (semantic search vs. flat file). Maintainers should flag these for review to avoid drift.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-04-26

---

## 1. Today's Overview

The Hermes Agent project is experiencing an exceptionally high level of community activity, with **50 issues** and **50 pull requests** updated in the last 24 hours. The project maintains a healthy balance of new feature development, bug fixes, and community support, though the volume suggests a significant surge in both usage and reported issues. Most recent activity centers around platform-specific integrations (Feishu/Lark, WeChat), provider compatibility (DeepSeek V4, Ollama, Copilot), and infrastructure improvements to the CLI's diagnostic tool (`hermes doctor`). While there were no new releases today, the sheer number of open items indicates a rapidly growing user base encountering both edge cases and integration challenges.

---

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

**Merged/Closed PRs (4 items):**

- [#2931](https://github.com/NousResearch/hermes-agent/pull/2931) **fix: support Ollama Cloud and remote Ollama endpoints** — Merged. Allows Hermes to query `/api/show` and `/api/tags` on remote/Ollama Cloud servers instead of assuming localhost, fixing context-length detection and server-type detection for non-local deployments.

- [#16083](https://github.com/NousResearch/hermes-agent/pull/16083) **fix(doctor): accept aliased providers** — Fixed `hermes doctor` false-positive for `copilot` provider by resolving canonical provider IDs properly.

- [#16015](https://github.com/NousResearch/hermes-agent/pull/16015) **fix: MCP OAuth strips /mcp from server_url** — Fixed a regression where Notion MCP OAuth resource validation failed because the path component was stripped from server_url.

- [#16019](https://github.com/NousResearch/hermes-agent/pull/16019) **fix: Clipboard copy shows "copied N chars" but nothing is actually copied** — Closed fix for TUI/Dashboard clipboard functionality.

**Highlighted Open PRs advancing features:**

- [#16071](https://github.com/NousResearch/hermes-agent/pull/16071) adds dual-identity Feishu/Lark support with OAuth 2.0 Device Flow, 28 OAPI tools, and streaming card format
- [#16093](https://github.com/NousResearch/hermes-agent/pull/16093) introduces a wake-word listener plugin using Vosk offline speech recognition
- [#13267](https://github.com/NousResearch/hermes-agent/pull/13267) adds `copilot_remote` tool launching GitHub Copilot CLI as a persistent background job
- [#16089](https://github.com/NousResearch/hermes-agent/pull/16089) fixes memory provider lazy tool schema registration, preserving tools populated during `initialize()`

---

## 4. Community Hot Topics

### Most Active Discussions

1. **[#346 – Structured Memory System](https://github.com/NousResearch/hermes-agent/issues/346)** (7 comments, 2 👍)
   *Long-standing feature request for typed memory nodes, graph edges, and hybrid search.*
   *The community's sustained interest signals that the current flat-file memory system is becoming a bottleneck for advanced use cases.*

2. **[#7494 – Remote Ollama endpoint bug](https://github.com/NousResearch/hermes-agent/issues/7494)** (5 comments)
   *Users cannot connect to remote Ollama instances despite working curl tests.*
   *Despite PR #2931 being merged, this issue still has activity—possibly indicating the fix hasn't been released or doesn't cover all cases.*

3. **[#10023 – "Hermes slacks off" / requires manual `continue`](https://github.com/NousResearch/hermes-agent/issues/10023)** (3 comments)
   *Agent halts mid-task requiring manual intervention.*
   *This is a major UX pain point indicating the autonomous execution loop may be too conservative or misunderstanding task completion.*

4. **[#15916 – Auxiliary memory flushes unsupported temperature to ChatGPT Codex](https://github.com/NousResearch/hermes-agent/issues/15916)** (2 comments, filed today)
   *Codex backend rejects auxiliary tasks due to unsupported sampling parameters.*
   *Reveals a gap in parameter validation for non-standard backend APIs.*

5. **[#9407 – Session switching command](https://github.com/NousResearch/hermes-agent/issues/9407)** (1 comment, 2 👍)
   *Users want to switch between active conversations on messaging platforms.*
   *Moderate traction suggests multi-session management is a growing need as users deploy Hermes across multiple platforms simultaneously.*

---

## 5. Bugs & Stability

### Critical (P1):

- **[#16087 – Token count underestimation for multimodal messages](https://github.com/NousResearch/hermes-agent/issues/16087)** — `len(content)` on multimodal lists returns the number of blocks (2-3) instead of actual character count, causing ineffective context compression and oversized tail protection. **No fix PR yet.**

### High (P2):

- **[#15916 – Auxiliary memory flush sends unsupported temperature to ChatGPT Codex](https://github.com/NousResearch/hermes-agent/issues/15916)** — HTTP 400 errors during auxiliary side tasks. **No fix PR yet.**

- **[#10020 – Telegram group chat history 403 error](https://github.com/NousResearch/hermes-agent/issues/10020)** — Agent cannot read `t.me/c/` URLs despite being a group member. **No fix PR yet.**

- **[#15715 – MiniMax VLM wrong API endpoint](https://github.com/NousResearch/hermes-agent/issues/15715)** — Vision model uses incorrect endpoint URL. **No fix PR yet.**

- **[#9980 – Feishu invalid receive_id](https://github.com/NousResearch/hermes-agent/issues/9980)** — Always uses `receive_id_type=open_id` when `chat_id` format is needed. **No fix PR yet.**

- **[#16067 – ContextCompressor cooldown state leak between sessions](https://github.com/NousResearch/hermes-agent/issues/16067)** — `_summary_failure_cooldown_until` isn't reset on session reset, silently skipping compression in new sessions. **No fix PR yet.**

- **[#16050 – Auxiliary compression false-positive at Gateway startup](https://github.com/NousResearch/hermes-agent/issues/16050)** — Custom providers trigger incorrect warning about missing auxiliary LLM. **No fix PR yet.**

- **[#16027 – image_generate permanently excluded due to plugin discovery timing](https://github.com/NousResearch/hermes-agent/issues/16027)** — Tool `check_fn` returns False at session init and tool is permanently hidden. **No fix PR yet.**

- **[#16076 / #16085 – `hermes doctor` false-positive for multiple providers](https://github.com/NousResearch/hermes-agent/issues/16076)** — Self-contradictory errors for copilot, opencode-zen, ai-gateway, others. **Fix PRs [#16086](https://github.com/NousResearch/hermes-agent/pull/16086) and [#15778](https://github.com/NousResearch/hermes-agent/pull/15778) open.**

- **[#10047 – iCloud Drive context file reads block 40+ seconds](https://github.com/NousResearch/hermes-agent/issues/10047)** — macOS file faulting causes extreme latency. **No fix PR yet.**

- **[#16007 – Gateway auto-TTS ignores voice.auto_tts config](https://github.com/NousResearch/hermes-agent/issues/16007)** — Always generates TTS response regardless of user setting. **Closed but may need re-verification.**

### Medium (P3):

- **[#14368 – Cognee memory-provider RLIMIT_NOFILE on macOS](https://github.com/NousResearch/hermes-agent/issues/14368)** — Lance-backed recall fails under default macOS file descriptor limits.
- **[#15915 – Dashboard sidebar navigation refreshes page, loses chat state](https://github.com/NousResearch/hermes-agent/issues/15915)** — Single-page app navigation breaks session continuity.
- **[#9971 – WeChat TTS audio not delivered as voice bubbles](https://github.com/NousResearch/hermes-agent/issues/9971)** — OGG→SILK transcoding needed for native voice message delivery.

---

## 6. Feature Requests & Roadmap Signals

### High Likelihood for Next Release:

1. **Feishu/Lark streaming cards** (Issues [#9978](https://github.com/NousResearch/hermes-agent/issues/9978), [#16084](https://github.com/NousResearch/hermes-agent/issues/16084); PR [#16071](https://github.com/NousResearch/hermes-agent/pull/16071)) — Multiple contributions target interactive card format and CardKit streaming, indicating strong Chinese enterprise user adoption.

2. **`hermes doctor` provider validation overhaul** (Issues [#16085](https://github.com/NousResearch/hermes-agent/issues/16085), [#16076](https://github.com/NousResearch/hermes-agent/issues/16076); PRs [#16086](https://github.com/NousResearch/hermes-agent/pull/16086), [#15778](https://github.com/NousResearch/hermes-agent/pull/15778)) — Two concurrent fix PRs demonstrate immediate community-driven resolution for the false-positive provider errors.

3. **Configurable auto-continue** (Issue [#16068](https://github.com/NousResearch/hermes-agent/issues/16068)) — Addresses the "slacks off" problem with a configurable auto-continue when tool-call iteration budget is exhausted, enabling longer autonomous runs.

### Medium-Likelihood for Next Two Releases:

4. **Memory system overhaul** (Issue [#346](https://github.com/NousResearch/hermes-agent/issues/346)) — Long-standing feature request for structured graph-based memory with typed nodes, despite only 7 comments, has 2 reactions and remains open for 7 weeks.

5. **ACP Registry integration** (Issue [#16028](https://github.com/NousResearch/hermes-agent/issues/16028)) — Adding Zed editor discovery would expand Hermes's IDE integration footprint.

6. **Auto-scale context configuration** (Issue [#15962](https://github.com/NousResearch/hermes-agent/issues/15962)) — Automatically tuning tool-output truncation limits based on active model context size would dramatically improve out-of-box experience.

7. **Auto-discover models from custom endpoints** (Issue [#10011](https://github.com/NousResearch/hermes-agent/issues/10011)) — `/model` picker currently only shows manually listed models, failing for dynamic API gateways.

---

## 7. User Feedback Summary

### Pain Points:

- **"Hermes slacks off"** — Users report the agent stops mid-task and requires manual `continue` input, breaking autonomous workflows. This is the most visible UX complaint.

- **Provider integration friction** — Multiple issues (Ollama remote, MiniMax VLM, DeepSeek V4 reasoning_content, ChatGPT Codex temperature) show users struggle with non-OpenAI provider compatibility.

- **Platform-specific limitations** — WeChat voice bubbles not delivered, Feishu streaming UX has "edited" badge, Telegram group history inaccessible — each platform integration has notable gaps.

- **Configuration confusion** — `hermes doctor` false-positives mislead users about valid providers. Configuration for large-context models requires manual tuning.

- **Session state management** — Dashboard refreshes lose chat state, no way to switch sessions on messaging platforms, session reset doesn't fully clear compressor state.

### Satisfaction Signals:

- High community engagement with multiple contributors submitting PRs (Feishu dual-identity, wake-word plugin, Copilot remote tool, email skill documentation fix)
- Users successfully deploying Hermes with custom providers, API gateways, and MCP servers (Notion, SMS, Feishu)
- Strong interest in advanced features like structured memory and autonomous agent marketplaces (elisym skill on Nostr)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

1. **[#346 – Structured Memory System](https://github.com/NousResearch/hermes-agent/issues/346)** (7 comments, opened 2026-03-04)
   *Open for 53 days. The oldest high-comment-count feature request. Would benefit from a maintainer prioritization signal (milestone, labels, or acknowledgment).*

2. **[#9971 – WeChat TTS audio not delivered as voice bubbles](https://github.com/NousResearch/hermes-agent/issues/9971)** (1 comment, no assigned milestone)
   *Technical blocker for WeChat users. Requires OGG→SILK transcoding support.*

3. **[#10047 – iCloud Drive context file reads block 40+ seconds](https://github.com/NousResearch/hermes-agent/issues/10047)** (2 comments, opened 2026-04-15)
   *Apple Silicon users hit extreme latency. No acknowledgment from maintainers.*

4. **[#9976 – Memory prefetch cache lost on AIAgent recreation in gateway](https://github.com/NousResearch/hermes-agent/pull/9976)** (Open PR since 2026-04-15)
   *Fix for memory cache invalidation in gateway mode. No reviewer activity for 11 days.*

5. **[#9967 – SMS platform missing from PLATFORMS registry](https://github.com/NousResearch/hermes-agent/pull/9967)** (Open PR since 2026-04-15)
   *Blocks SMS gateway functionality entirely. No reviewer activity for 11 days.*

6. **[#10011 – Auto-discover models from custom endpoints](https://github.com/NousResearch/hermes-agent/issues/10011)** (1 comment, no maintainer response)
   *Essential for users behind LiteLLM/one-api proxies. No roadmap signal.*

7. **[#9977 – ACP session snapshot missing provider routing metadata](https://github.com/NousResearch/hermes-agent/pull/9977)** (Open PR since 2026-04-15)
   *ACP session restore loses provider configuration. No reviewer activity for 11 days.*

**Risk Note:** Multiple PRs and issues from 2026-04-14 to 2026-04-15 (the "mid-April surge") have not received maintainer attention in 11+ days. This cluster includes SMS gateway fix, memory cache fix, ACP session fix, and model auto-discovery — all of which are blocking functionality for specific user segments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-26

## 1. Today's Overview

PicoClaw shows **moderate-to-high activity** today, with **8 issues** and **8 pull requests** updated in the last 24 hours, plus a new **nightly release (v0.2.7-nightly)**. The project is processing a significant volume of community contributions — 7 open PRs were touched today, spanning runtime events, serial hardware support, OAuth fixes, and network error retry logic. One bug was closed (OpenRouter free tier fix), while a previously-closed PR for an Exa search provider is being reconsidered. Overall health is positive, though the nightly designation warns of instability.

## 2. Releases

**New: `v0.2.7-nightly.20260426.77be169d`** (Nightly Build)
- Automated build tracking `main` branch
- Marked as potentially unstable
- No explicit migration notes or changelog beyond the git compare link
- **Full Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.7...main

**Recommendation:** Production users should stay on stable `v0.2.7` unless testing new features from this nightly.

## 3. Project Progress

**Merged/Closed PRs today (1):**
- **#2672** — `feat(pico): add structured tool call support to web chat` (merged) — Adds structured `tool_calls` to agent, Pico channel, session API, and Web frontend. Tool-call details are now preserved as collapsible assistant blocks instead of flattened text. Significant UX improvement for agent tool interaction.

**Notable open PRs with recent activity (advancing toward merge):**
- **#2679** — Fix for ChatGPT subscription (OAuth) with Codex backend streaming — submitted today
- **#2677** — New runtime event infrastructure (`pkg/events`) for agent observability — submitted today
- **#2673** — Cross-platform serial tool support (Linux/macOS/Windows) — submitted today
- **#2670** — `pretty_print` and `disable_escape_html` options for tool feedback — submitted yesterday, updated today
- **#2669** — Network error retry with configurable backoff for LLM calls — submitted yesterday, updated today
- **#2663** — Improved config save/restart feedback UI and duplicate `showThoughtsAtom` fix — updated today

## 4. Community Hot Topics

1. **#295 — Intelligent Model Routing (Roadmap Feature)**  
   *10 comments, 0 reactions*  
   https://github.com/sipeed/picoclaw/issues/295  
   Core architectural proposal for routing simple queries to cheaper/smaller models vs. expensive ones (GPT-4o, Claude 3.5 Sonnet). Long-running discussion (since Feb 2026) — the community is actively debating cost optimization strategies. **Underlying need:** Users want to reduce API costs without sacrificing quality for complex tasks.

2. **#1042 — exec tool `guardCommand` false positives**  
   *5 comments*  
   https://github.com/sipeed/picoclaw/issues/1042  
   Command guard regex incorrectly flags legitimate commands like `curl wttr.in/Beijing` as path violations. Affects any tool using `restrict_to_workspace=true`. **Underlying need:** The path-safety heuristics are too aggressive and hurt legitimate tool usage.

3. **#2676 — Request to re-open Exa search provider (PR #997)**  
   *1 comment, submitted today*  
   https://github.com/sipeed/picoclaw/issues/2676  
   User is asking why the previously-closed Exa search PR was rejected and requesting reconsideration. Indicates community appetite for more search provider options.

## 5. Bugs & Stability

**High Severity:**
- **#2674 — Codex OAuth: empty assistant responses** (NEW, 0 comments, 1 👍)  
  https://github.com/sipeed/picoclaw/issues/2674  
  ChatGPT Plus subscription users get empty responses from the Codex backend. The model returns content but PicoClaw sees it as empty.  
  **Fix PR exists:** #2679 (submitted same day) — adds `response.output_text.delta` streaming support.

**Medium Severity:**
- **#1790 — OpenRouter free tier broken** (CLOSED, resolved)  
  https://github.com/sipeed/picoclaw/issues/1790  
  Fixed invalid model ID `minimax-m2.5:free` causing 400 errors.

**Low Severity:**
- **#2628 — v0.2.7: Cannot disable "Think"/"Reasoning" response display** (CLOSED, resolved)  
  https://github.com/sipeed/picoclaw/issues/2628  
  User asked how to hide tool/reasoning messages — likely a configuration question that was answered.

## 6. Feature Requests & Roadmap Signals

**Likely to land in next stable release:**
- **Structured tool call support** (#2672, already merged) — major UX improvement for agent tools
- **Network error retry** (#2669) — requested for weeks, PR is close to ready
- **Cross-platform serial tool** (#2673) — hardware/IoT community demand
- **Runtime events/observability** (#2677) — significant infrastructure for debugging

**Emerging requests:**
- **Exa search provider** (#2676) — user wants to revive a closed PR
- **Raspberry Pi / Pi Zero 2W support** (#2675) — embedded device support request
- **OpenCode provider support** (#2671, Chinese community) — requests for "zen" and "go" subscriptions from an alternative model provider

**Roadmap signals:**
- Issue #295 (Model Routing) remains the highest-level architectural discussion. It's a "priority: medium" roadmap item but hasn't moved to implementation. Given the community engagement, this could be a **v0.3.0 headline feature**.

## 7. User Feedback Summary

**Pain Points:**
- **Configuration complexity:** Users want clearer feedback when saving/restarting (#2663 attempts to fix this)
- **API cost concerns:** Multiple discussions (Model Routing #295, OpenRouter free #1790) indicate cost is a top concern
- **Tool limitations:** exec tool guard too restrictive (#1042), no serial hardware support (#2673 requested)
- **OAuth/backend confusion:** ChatGPT Plus users struggle with Codex endpoint configuration (#2674)
- **Model-specific display issues:** Cannot hide reasoning/thinking messages (#2628)

**Satisfaction Signals:**
- Community is actively contributing PRs (8 PRs today) — indicates strong developer engagement
- Users are requesting re-opening of promising but closed PRs (#2676 asking about #997) — shows investment in the project

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

1. **#295 — Intelligent Model Routing** *(opened 2026-02-16, 10 comments, no activity in days)*  
   https://github.com/sipeed/picoclaw/issues/295  
   High-impact roadmap feature with substantial discussion. No assignee, no milestone. Risk of stalling.

2. **#1042 — exec guardCommand false positives** *(opened 2026-03-04, 5 comments)*  
   https://github.com/sipeed/picoclaw/issues/1042  
   Medium-severity tool bug affecting real workflows. No PR linked. Could degrade user trust in tool safety.

3. **#2239 — Docker compose with privileged mode** *(opened 2026-04-01, no comments from maintainers)*  
   https://github.com/sipeed/picoclaw/pull/2239  
   Open PR for 25 days without maintainer feedback. Security implications (privileged mode) may require careful review.

4. **#2676 — Request to re-open Exa search PR** *(new today, needs maintainer explanation)*  
   https://github.com/sipeed/picoclaw/issues/2676  
   Community wants clarity on why PR #997 was closed and whether it can be revived.

5. **#2671 — OpenCode provider support** *(opened 2026-04-25, 0 comments)*  
   https://github.com/sipeed/picoclaw/issues/2671  
   Chinese-language feature request with no English translation or response. Needs triage to avoid language-based neglect.

---

**Overall Assessment:** PicoClaw is in a healthy development cycle with strong community contribution activity. The nightly build signals active `main` branch work. Key risks are the growing backlog of feature requests without roadmap commitment and the exec tool false-positive bug (a user-facing regression in reliability). The OAuth/Codex fix (#2679) should be prioritized as it affects paid subscribers directly.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-04-26**

**Generated by:** AI agent analyst  
**Data source:** github.com/qwibitai/nanoclaw

---

## 1. Today's Overview

NanoClaw shows **high activity** today with 19 pull requests updated in the last 24 hours — a significant surge — and 4 issues reported, 3 still open. The project is in an intensive development phase, with major v2 features (migration tooling, container skill architecture) moving forward alongside a security hardening push. Several long-standing PRs from March are finally seeing renewed attention, suggesting maintainer bandwidth is increasing. The community is producing a steady stream of both user-reported bugs and high-quality feature contributions, indicating healthy contributor engagement.

---

## 2. Releases

**No new releases today.** The last published release remains unchanged. Notable: the project is accumulating substantial unreleased changes in v2 features, security fixes, and channel expansions that may warrant a release candidate soon.

---

## 3. Project Progress

**Merged/Closed PRs today (3 items):**

- **[#2024 — Merged]** `feat: allow specific bot IDs to bypass Discord bot filter` — by openclaw-shi. Adds `DISCORD_ALLOWED_BOT_IDS` env var so federated bots (e.g., RSS Feedcord) can participate in `thread_per_message` channels. Backward-compatible.

- **[#2015 — Closed]** `ci(review): add jbaruch/coding-policy PR review workflows` — by jbaruch. Scaffolds dual-model (OpenAI + Anthropic) automated PR review using published coding policy rules.

- **[#1863 — Merged]** `feat: add web channel — browser portal for NanoClaw` — by VivianBalakrishnan. A self-contained browser chat UI served directly by NanoClaw with zero external dependencies (no Redis, no separate app). Includes a `/history` polling endpoint.

**Key v2 feature progress visible in open PRs:** The `v2` branch is receiving foundational additions — host-actions container skill routing (#2027), v1→v2 migration flow (#1931), and wiki contradiction detection (#2019) — all being actively refined.

---

## 4. Community Hot Topics

Most items today have zero comments, indicating conversations are happening directly on PR reviews rather than in issues. The most notable threads:

- **[#2026 — OneCLI install fails (521 error)]** — Critical upstream dependency issue where `onecli.dev` returns HTTP 521. Blocking all new installs. No conversation yet, but high urgency.

- **[#2025 — Install hangs on "Installing the basics…" when sudo needs password]** — Fresh Debian 13 user blocked immediately. No comments, but the symptom indicates poor UX in non-root environments.

- **[#2027 — v2: add host-actions container skill]** — This PR is architecturally significant, defining how agents route host-side actions (channel management, mounts, credentials) to correct host skills. Represents a core v2 design decision.

**Underlying need:** The community is pushing for two things simultaneously: (1) smoother first-time setup especially on fresh Linux VMs, and (2) richer agent capabilities in the v2 architecture that go beyond chat — into infrastructure management, wiki curation, and multi-channel orchestration.

---

## 5. Bugs & Stability

**Severity: HIGH**

1. **[#2026 — OneCLI install returns 521]** — Blocks all new installations completely. No PR fix yet. Root cause is upstream (`onecli.dev`), not NanoClaw code, but the project may need a fallback or retry mechanism.

2. **[#2025 — Hangs on sudo password prompt (Debian 13)]** — Blocks installation on non-root Linux. No PR fix yet.

3. **[#2014 — install-node.sh hangs on Ubuntu with needrestart prompt]** — Blocks setup on Ubuntu with pending kernel upgrades. **Fix PR exists:** [#2021] `fix(setup): prevent apt-get from hanging on Linux installs` by suboss87 adds `DEBIAN_FRONTEND=noninteractive` and `NEEDRESTART_MODE=a`.

**Severity: MEDIUM**

4. **[#2018 — DM-context approvals: interaction.user vs interaction.member.user]** — Discord approval buttons fail silently in DM contexts where `interaction.member` is null. PR #2018 provides a fix reading `interaction.user` directly.

5. **[#2022 — Channel installer security: remote code fetched from git branches]** — By default, `setup/install-discord.sh` fetches and runs code from unchecked branches. PR #2022 adds pinning to release tags and hashed remote URLs.

**Severity: LOW**

6. **[#1290 — Missing credential validation in docker-entrypoint.sh]** — Stale state on restart when credentials are missing. Fix PR exists and is ready for review.

---

## 6. Feature Requests & Roadmap Signals

**Features actively in PRs (likely in next release):**

- **[#1624 — Matrix E2EE channel + per-group model/effort config]** — Nearly a month old, still open. This is a massive feature adding a full Matrix E2EE channel with per-group model selection. A strong candidate for next minor release.

- **[#2027 — Host-actions container skill (v2)]** — Enables agents to manage channels, mounts, credentials, and ACLs as "host actions" rather than chat commands. Core v2 architecture.

- **[#1931 — v1 → v2 migration flow]** — Automated port of agents, groups, wiring, channel adapters, and scheduled tasks. Essential for existing v1 users to adopt v2.

- **[#2023 — Custom Anthropic endpoint support]** — Allows `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN` to be passed into agent containers, fixing 401 errors for users with self-hosted or proxy Anthropic-compatible endpoints.

- **[#2019 — Wiki contradiction detection]** — Pre-ingest detection of conflicting claims when adding new sources to the project wiki.

**Opt-in tool skills being contributed:**

- [#2016] YNAB (budgeting) integration via curl + OneCLI secrets
- [#2012] Usage logging (tokens, cost, duration) into `usage_log` table for observability/billing

**Prediction:** The next release will likely bundle Matrix E2EE, the web channel (#1863, just merged), the security hardening PRs (#2022, #2021), and at least the first few v2 migration tools. Custom endpoint support (#2023) and usage logging (#2012) may also land if reviews move quickly.

---

## 7. User Feedback Summary

**Pain points (from issues today):**

- **Installation friction is the #1 user problem.** Three of four issues filed today are setup failures — upstream dependency down (521), sudo password handling, and needrestart prompts. New users are hitting a wall before they ever run the agent.
- **DM-context Discord failures** (#2018) — users with bot DMs cannot use approval buttons, but the failure is silent, making debugging difficult.
- **Custom LLM endpoint users** (#2023) — users with proxy/sandbox Anthropic endpoints get 401 errors because OneCLI hardcodes `api.anthropic.com`.

**Satisfaction signals:**

- [#2017] "keep it going sir this is awesome!" — a closed issue (retracted by author) expresses strong enthusiasm, suggesting an excited user who may have mis-filed.
- The volume and quality of community PRs (YNAB tool, usage logging, security fixes, v2 contributions) suggests the contributor community is engaged, motivated, and building real features.

**Ecosystem observation:** The project is evolving beyond chat bots into an agent orchestration platform — users are asking for infrastructure management (YNAB, wiki curation, host actions) and observability (usage logging).

---

## 8. Backlog Watch

**Long-unanswered PRs needing maintainer attention (all from March 11):**

- **[#967 — Improve reliability for stuck sessions and runner turns]** — SebTardif. Fixes agent-runner IPC draining issue where resumed sessions get stuck. Labels: `Fix`, `Needs Review`. No activity since April 1 review ping.

- **[#956 — Fast LLM credential sanity checks in setup]** — SebTardif. Would prevent the most common silent failure scenario (wrong API keys) immediately. Labels: `Fix`, `Needs Review`.

- **[#954 — Fix OpenRouter non-Anthropic model routing in Anthropic SDK proxy flow]** — SebTardif. Would unblock users running non-Anthropic models through OpenRouter. Labels: `Fix`, `Needs Review`.

**Risk:** All three PRs from @SebTardif are 46 days old, marked `Needs Review`, and are blocking improvements to reliability, setup UX, and model compatibility. If these rot further, they may become merge conflicts or lose contributor momentum.

**Recommendation:** These three PRs together would significantly improve the new user experience and runtime reliability. A maintainer review triage session would have high impact.

---

**Project Health Summary:** ⬆️ High activity, strong community contributions, active security and v2 development. **Risk area:** upstream dependency `onecli.dev` is down (blocking all new installs), and three critical reliability PRs have been stalled for 6+ weeks awaiting review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-04-26**.

---

## NullClaw Project Digest – 2026-04-26

### 1. Today's Overview
Project activity is moderate, with a focus on bug triage and a recently merged documentation fix. Two open issues were reported in the last 24 hours, both related to significant user experience problems: a performance-critical busy loop on WSL2 and a usability blocker for low-resource devices. A pull request addressing missing search provider guidance was merged, but no new releases were cut. The project appears stable but is facing practical barriers for specific deployment scenarios.

### 2. Releases
**None.** No new releases were published today.

### 3. Project Progress
One pull request was merged/closed:

- **[PR #815] fix(web_search): add setup guidance for missing providers** ([Link](https://github.com/nullclaw/nullclaw/pull/815))
  - **Author:** manelsen
  - **Summary:** Improves error reporting when no reliable search provider is configured. Adds setup guidance pointing users to `http_request.search_base_url` for SearXNG and the expected API key environment variables for hosted providers. This fix should reduce user confusion during initial configuration.

### 4. Community Hot Topics
Two issues are currently receiving attention:

- **Issue #870 – Gateway accept4 busy loop (100% CPU) on WSL2** ([Link](https://github.com/nullclaw/nullclaw/issues/870))
  - **Status:** Open | **Comments:** 1 | **Reactions:** 0
  - **Analysis:** This is a critical performance regression for Windows + WSL2 users. The gateway remains functional (Telegram bot responds), but the 100% CPU usage makes it impractical for long-running sessions. The underlying need is a fix in the polling/accept loop logic to avoid busy-waiting under the WSL2 kernel.

- **Issue #871 – web_search is impractical on low-resource devices without direct DuckDuckGo support** ([Link](https://github.com/nullclaw/nullclaw/issues/871))
  - **Status:** Open | **Comments:** 0 | **Reactions:** 0
  - **Analysis:** Filed by user `uMendex`, this issue highlights a core usability gap. The only current practical search options (Brave Search API) require external API keys, which conflicts with the project’s intended use on cheap, low-resource devices. The community need is clear: a free, zero-configuration search provider (like DuckDuckGo) or improved offline/fallback search capabilities.

### 5. Bugs & Stability
Two new bugs were reported, both ranked **High** severity:

| Issue | Severity | Summary | Fix PR Exists? |
|---|---|---|---|
| [#870](https://github.com/nullclaw/nullclaw/issues/870) | **Critical** | Gateway `accept4` busy loop causes 100% CPU on WSL2 | No |
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | **High** | `web_search` is impractical without an API-key-free provider | No (related PR #815 improves guidance but does not add a provider) |

**Assessment:** Issue #870 is the most actionable and serious—it represents a clear performance regression that will block all WSL2 users. Issue #871 is a broader design concern that requires architectural consideration.

### 6. Feature Requests & Roadmap Signals
The following feature demand emerged from today’s activity:

- **Direct DuckDuckGo support for web_search** (from Issue #871): The user explicitly requests a free, API-key-free search provider to enable NullClaw on very low-resource devices. This could become a high-priority roadmap item if the maintainer wants to preserve the project’s “any device” value proposition.

**Prediction:** A DuckDuckGo search integration (via `lxml` scraping or an official API) is a strong candidate for the next minor release (e.g., `2026.5.x`), possibly combined with the WSL2 CPU fix.

### 7. User Feedback Summary
- **Pain Point (Performance):** WSL2 users experience 100% CPU idling on the gateway, making it unusable for continuous deployment on Windows.
- **Pain Point (Configuration):** New users find `web_search` confusing—PR #815 aims to fix guidance, but the underlying dependency on external API keys remains a friction point.
- **Use Case:** Users want NullClaw to run on cheap, low-power hardware (e.g., Raspberry Pi, old laptops) without external API subscriptions.
- **Satisfaction:** No explicit positive feedback in the last 24 hours; the mood is problem-reporting oriented.

### 8. Backlog Watch
No long-unanswered issues or PRs were identified in today’s data. The two open items are very recent (1-2 days old) and have not yet been triaged by the maintainer. **No action required** from the maintainer on stale items today.

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-26

## 1. Today's Overview

Project activity is **high** with 8 active issues and 13 PRs updated in the last 24 hours, indicating strong development velocity. Two PRs were merged/closed today, while the majority of activity centers on bug fixes and feature work across MCP, LLM configuration, and cryptographic auditing. Three automated canary failures (provider-matrix and private-oauth) signal potential regressions in the latest commit `7404e7d`. A core contributor landed a significant refactor of runtime authority boundaries (PR #2969), and multiple community contributors are advancing long-running feature branches for new channels and MCP prompt support.

## 2. Releases

**No new releases** today. The latest version remains **v0.25.0**, referenced in recent issues and PRs.

## 3. Project Progress

Two PRs were merged/closed today:

- **PR #2969** (closed) — **Feat(reborn): clean up runtime authority boundaries** by core contributor `serrrfirat`. This XL-sized, low-risk refactor seals process resource reservations against caller-supplied IDs, moves dispatch port contracts into `ironclaw_host_api`, removes a production dependency from `ironclaw_capabilities → ironclaw_dispatcher`, and makes dispatcher lifecycle explicit. This is a foundational architectural improvement for sandboxing and process isolation.

- **PR #2964** (closed) — **Merge upstream changes from 0.26.0** by new contributor `chriscmfee`. This large-scope merge touches agent, channel, DB, extensions, sandbox, and docs — it includes a database migration and pulls in numerous upstream fixes and features from the v0.26.0 line.

Key advances in open PRs today include:
- **MCP OAuth fix** (#2960) — skips OAuth discovery for stdio/unix transports, directly addressing the activation bug in #2923
- **LLM backend configuration fix** (#2961) — honors `api_key_required` to prevent silent provider overwriting
- **Signet-core integration** (#2684) — cryptographic tool call audit trail continues active development
- **User secrets & binding approvals** (#2754) — self-service secrets UI and durable binding approvals advancing
- **Native Matrix channel** (#2019) — full event loop with E2EE support being prepared for merge

## 4. Community Hot Topics

**Most Active Issue:**
- **#2923 — stdio MCP activation fails** (2 comments, 1 👍) — Re-filed by `rajulbhatnagar` after being incorrectly closed. Highlights that stdio transport is wired end-to-end in v0.25.0, but the activation pre-flight check fails because OAuth discovery runs unconditionally. A fix PR (#2960) already exists.

**Most Active PRs (by breadth of scope):**
- **PR #2964** — Merge of 0.26.0 upstream changes touches 16 scope areas, indicating major synchronization effort
- **PR #2019** — Native Matrix channel, 24 days open, continues to accumulate updates

**Underlying Needs:**
- Users want MCP to work reliably across all transport types (stdio, Unix socket, HTTP) without OAuth assumptions
- Self-hosters need stable LLM provider configuration that persists across restarts
- Developers are pushing for cryptographic audit trails and user-facing permission controls as security/compliance features

## 5. Bugs & Stability

**High Severity:**
- **#2968/#2967/#2966 — Three live canary failures on same commit** — `provider-matrix openai-compatible`, `provider-matrix anthropic`, and `private-oauth` lanes all failed on commit `7404e7d`. This is a **critical signal** — suggests a systemic regression in provider authentication or OAuth flow that needs immediate investigation.

**Medium Severity:**
- **#2923 — stdio MCP activation fails** — "Failed to discover authorization endpoints" when using stdio transport. Fix exists in PR #2960 (review pending).
- **#2946 — LLM backend overwritten on every startup** — DB value resets to `nearai` regardless of config.toml or env vars. Fix exists in PR #2961 (review pending).
- **#2963 — Docker Hub image missing** — Official docs reference `nearai/ironclaw:latest` which does not exist, preventing Docker-based installation.

**Low Severity:**
- None reported today

*Note:* Three canary failures and two confirmed bugs all have associated fix PRs, suggesting the team is responsive but needs to prioritize merging these fixes.

## 6. Feature Requests & Roadmap Signals

**New Feature Request (today):**
- **#2965 — Split core and vector DB; add Aurora DSQL support** — `jousby` requests ability to run agents on Aurora DSQL (Postgres, scale-to-zero, pay-per-usage) to reduce costs. Since Aurora DSQL doesn't support pgvector, this requests making vector DB optional and swappable.

**Long-running Feature PRs likely for next release:**
- **MCP Prompts support** (#2958) — `/prompts` command, HTTP API, server mentions — likely v0.26.0 candidate
- **Web fetch tool with secondary-model summaries** (#2959) — Built-in `web_fetch` tool with summarization — fits agent capability roadmap
- **Secrets & binding approvals** (#2754) — Self-service secrets UI, durable approvals — security/compliance priority
- **Signet-core cryptographic audit** (#2684) — Tool call signing and tamper-evident logs — enterprise audit requirement
- **Native Matrix channel** (#2019) — Multi-platform messaging expansion

**Next version prediction:** v0.26.0 appears imminent (PR #2964 merged upstream changes). Likely features: MCP prompt support, web fetch tool, Secrets UI, and possibly Matrix channel.

## 7. User Feedback Summary

**Pain Points:**
- **Configuration instability** (#2946) — Users who self-host with custom LLM providers (vLLM, LiteLLM) find their settings silently overwritten on every restart. This is a significant trust issue for self-hosted deployments.
- **Activation friction** (#2923) — MCP server activation fails with confusing OAuth errors even when using local transports that need no authentication.
- **Docker deployment blocked** (#2963) — Missing Docker Hub image prevents container-based adoption, a common deployment pattern.
- **Cost concerns** (#2965) — User wants Aurora DSQL support to reduce monthly operating costs, suggesting current database requirements (pgvector) lock users into more expensive options.

**Satisfaction Signals:**
- Community contributors are actively filing bugs with reproduction details and re-filing issues that were incorrectly closed, indicating engaged and technically sophisticated users.
- Multiple regular contributors (`willamhou`, `serrrfirat`) are advancing complex features, suggesting good maintainer-contributor relationships.

## 8. Backlog Watch

**Issues & PRs needing attention:**

- **PR #1120 — Prismer Cloud IM WASM channel** (44 days open) — XL-sized PR adding a new chat channel, last updated today but with no maintainer comments. Risk of merge conflicts growing.

- **PR #1941 — MCP server name allowlist validation** (23 days open) — Security fix preventing injection attacks. Low risk, small scope, but stalled despite addressing a reported security issue (#1882).

- **PR #2019 — Native Matrix channel** (22 days open) — XL-sized, high risk, comprehensive new channel implementation. Needs architectural review and testing.

- **PR #2341 — File history memory bounding** (15 days open) — Fixes three high-severity findings from prior review. Core contributor PR but no recent comments from maintainers.

- **Issue #2962 — Surface ACP agent request_permission to web UI** (1 day old, no comments) — Features `request_permission` RPC deferral from sandboxed agents to the web UI. No maintainer response yet.

**Maintainer attention needed:** The triplet of canary failures (#2966-#2968) should be the highest priority triage item given the automated nature and the shared commit hash — these suggest a regression landed in commit `7404e7d` that needs immediate investigation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the GitHub data from **LobsterAI (netease-youdao/LobsterAI)**, here is the project digest for **2026-04-26**.

---

## LobsterAI Project Digest – 2026-04-26

### 1. Today's Overview
The project shows low activity, with **4 open issues** updated in the last 24 hours (all stale) and **1 merged Pull Request**. No new releases were published. The community is currently struggling with configuration pathing on Windows, context length limits for DeepSeek models, and a lack of debugging tools. The single merged PR addresses a compatibility fix for DeepSeek V4's thinking mode, indicating ongoing maintenance for LLM backend support.

### 2. Releases
**No new releases today.** The latest release remains from a previous date.

### 3. Project Progress
- **Merged/Closed PRs (1):**
  - **[#1827 [CLOSED] fix(patch): extend DeepSeek V4 thinking mode wrapper to cover anthropic-messages API format**](https://github.com/netease-youdao/LobsterAI/pull/1827)
    - *Author:* liuzhq1986
    - *Summary:* This patch fixes a compatibility issue where the DeepSeek V4 thinking mode wrapper did not correctly handle the Anthropic Messages API format. This likely resolves errors for users running DeepSeek models through Anthropic-like endpoints.

### 4. Community Hot Topics
- **#60 [OPEN] [stale] 超出了context length** – [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/60)
  - *Comments:* 3 | *Reactions:* 0
  - *Analysis:* A user hitting DeepSeek's 131k token limit (requesting 141k). This indicates the agent is accumulating too much conversation history or context, causing API errors. No fix PR is currently associated.
- **#40 [OPEN] [stale] window版本-SKILLs读取问题** – [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/40)
  - *Comments:* 2 | *Reactions:* 0
  - *Analysis:* A persistent Windows installation bug where the agent looks for SKILLs in the C drive despite the user installing on the D drive. This suggests a hardcoded path or missing environment variable for the working directory.
- **#88 [OPEN] [stale] 建议加入使用token统计和日志输出** – [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/88)
  - *Comments:* 1 | *Reactions:* 3 (👍)
  - *Analysis:* The most "liked" open issue. Users are asking for a dashboard with token usage statistics and better error logs for custom API debugging. This reflects a strong community desire for observability tools.

### 5. Bugs & Stability
- **High Severity:**
  - **[#60] Context Length Error (DeepSeek)** – Users are hitting hard API limits. The agent lacks logic to truncate or summarize conversation history before sending requests.
- **Medium Severity:**
  - **[#40] Windows SKILLs Path Mismatch** – The agent fails to find SKILLs on the correct drive after installation, causing core functionality errors on Windows.
- **Low Severity:**
  - **[#52] 无法访问微信公众号文章** – Users report inability to access WeChat public articles, though details are sparse (likely a scraping or authentication issue).

### 6. Feature Requests & Roadmap Signals
- **Token Statistics Dashboard (Issue #88)** – The strongest signal for a future feature. Users want a built-in dashboard to track token usage across sessions. This is likely to be prioritized due to high community demand (3 👍).
- **Custom API Debug Logging (Issue #88)** – Related to the above, users need better error logs for debugging custom API integrations.
- **Working Directory Configuration (Issue #40)** – Users on Windows need a configurable work directory or environment variable to prevent default C drive pathing.

### 7. User Feedback Summary
- **Pain Points:**
  - Windows installation is broken regarding file paths (Skill directory).
  - Debugging custom APIs is nearly impossible without logs.
  - Context management for large models (DeepSeek) causes frequent crashes.
- **Use Cases:**
  - Most users appear to be power users running custom API endpoints (DeepSeek, Anthropic) rather than the default models.
  - Windows deployment is a primary use case, but it has stability issues.
- **Satisfaction/Dissatisfaction:**
  - Users are engaged but frustrated by the lack of basic debugging tools and pathing bugs on Windows. The silence from maintainers on these stale issues (last update 2 months ago on some) is a growing concern.

### 8. Backlog Watch
The following **stale issues** have not received a maintainer response or fix in over 2 months and require immediate attention:
- **[#60] 超出了context length** (Created 2026-02-23) – No roadmap acknowledgment.
- **[#40] window版本-SKILLs读取问题** (Created 2026-02-22) – Critical Windows bug affecting new users.
- **[#88] 建议加入使用token统计和日志输出** (Created 2026-02-24) – Highest community demand, no reply yet.
- **[#52] 无法访问微信公众号文章** (Created 2026-02-23) – Minor but unanswered.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-04-26

## Today's Overview
Moltis had a high-activity day with 12 pull requests updated and 4 issues raised, indicating strong development momentum. Five PRs were merged or closed, and two bugs were resolved, though two new security-sensitive issues emerged around skill import behavior. A new release (20260426.04) was cut, signaling a quick release cadence to address recent fixes. Overall, project health appears robust, with the team reacting promptly to bug reports and advancing several user-facing features in web UI and local LLM management.

## Releases
**New Release: 20260426.04** (cut today)

This release bundles fixes from today's merged PRs, including:
- Fix for bundled skill disable/enable via config (PRs #877, #878)
- Fix for code snippet background rendering (dark mode) after streaming (PR #879)
- Preference for native MCP tools over the `mcporter` compatibility layer (PR #874)

No explicit breaking changes or migration notes were provided. Users should update to resolve the bundled skill toggle bug and the code highlight rendering issue.

## Project Progress
Five PRs were merged/closed today, demonstrating steady forward motion:

- **Merged: Code highlight fix** (PR #879) – Resolved a regression where code block backgrounds switched to white after streaming completed in dark mode, caused by `applyShikiStylesToPre` copying raw `cssText`.
- **Merged: Bundled skill enable/disable via config** (PRs #877, #878) – Corrected the backend logic so `skill_disable` and `skill_enable` handle bundled skills (managed by category) instead of assuming they exist in the manifest. The detail view now reflects the actual enabled state.
- **Merged: Web UI chat status badges visible in toolbar** (PR #886) – Moved sandbox, MCP, debug, and context badges from a hidden modal to a dedicated visible toolbar row, improving UX for power users.
- **Merged: Prefer native MCP tools** (PR #874) – Removed the bundled `mcporter` skill to prevent routing native MCP requests through the compatibility CLI path, added prompt guidance for direct `mcp__<server>__<tool>` invocation.

## Community Hot Topics
Most active discussions today centered on skill import reliability and security:

- **Issue #880** – [Bug] Skill import from repository is broken. Reported by bsarkisov with 1 comment. The bug causes `read_skill` to fail with "No such file or directory" when importing marketplace repos (e.g., Anthropic's `document-skills`). A fix PR (#883) was opened within hours, showing strong maintainer responsiveness. [Link](https://github.com/moltis-org/moltis/issues/880)

- **Issue #881** – [Bug] (security) Skill import via repository enables all skills without user review. Also filed by bsarkisov, this highlights a trust bypass: importing a repo auto-enabled all skills before the user could review them. PR #882 addresses this by removing the `autoTrust` parameter. [Link](https://github.com/moltis-org/moltis/issues/881)

The underlying need from both issues is **safe, granular control over imported skills** – users want to review, quarantine, and selectively enable skills from repositories, not have the system automatically trust them.

## Bugs & Stability
Four bug-related issues were active today. Ranked by severity:

1. **HIGH – Security: Skill import auto-enables all skills (Issue #881)** – A malicious skill repository could be imported and automatically trusted. **Fix PR #882 exists** – removes auto-trust behavior.
2. **HIGH – Skill import broken for marketplace repos (Issue #880)** – Hard failure when importing non-skill-format repos; skills get incorrect `relative_path`. **Fix PR #883 exists** – stores per-skill relative paths correctly.
3. **MEDIUM – Bundled skill toggle via Web UI broken (Issue #875, CLOSED)** – Users couldn't disable bundled skills from the web interface. **Fixed** in PRs #877 and #878 (merged today).
4. **LOW – Qwen3.6-35B-A3B MCP server issues (Issue #873, CLOSED)** – Reported by Tanguille, model-specific compatibility problem with MCP servers. No comments or resolution details available.

No crashes or regressions beyond skill import were reported.

## Feature Requests & Roadmap Signals
Several notable feature PRs are in the open pipeline:

- **File upload button for web chat** (PR #876) – Adds UI for attaching files to session messages, matching major LLM provider UX. Likely to land in next release.
- **On-demand local LLM model loading with idle timeout** (PR #884) – Automatically unloads local models from memory when idle, with manual load/unload RPC methods. Addresses RAM management concerns for local-first users.
- **Voice API keys in credential store** (PR #885) – Moves voice API keys from plaintext `moltis.toml` into encrypted `provider_keys.json`, addressing security concerns (linked to Issue #867). High priority.
- **Obscura sidecar browser backend** (PR #869, open since Apr 24) – Add lightweight browser backend via `obscura serve` sidecar with zero new Rust dependencies. Early-stage but promising for headless browser automation.
- **zh-TW Traditional Chinese locale** (PR #339, open since Mar 5) – Still pending review, may need community champion to push forward.

Predictions for next version: File upload (PR #876) and voice API key migration (PR #885) are likely to merge soon, given their security/UX impact. On-demand model loading (PR #884) may follow.

## User Feedback Summary
Real user pain points captured today:

- **bsarkisov** (Issues #880, #881) – Demonstrates power-user frustration with broken skill marketplace imports and the security risk of auto-enabling imported skills. The user is testing edge cases with third-party skill repositories.
- **faevourite** (Issue #875) – Reported inability to disable bundled skills via the web UI, a clear UX gap resolved in today's fixes.
- **Tanguille** (Issue #873) – Experienced model-specific MCP compatibility problems with Qwen3.6-35B-A3B, indicating need for better multi-model compatibility documentation or configuration.
- **maop** (PR #879) – Noticed code block rendering issues in dark mode after streaming, reflecting a subtle UX regression with Shiki-based highlighting.

Overall sentiment: Users are actively testing advanced features (skill import, bundled skills, MCP servers, local models) and reporting issues promptly. The team's quick turnaround on fixes (same-day PRs for most bugs) suggests high satisfaction with response times.

## Backlog Watch
Two items merit maintainer attention:

- **PR #339 – zh-TW Traditional Chinese locale** (opened Mar 5, last updated Apr 26) – This i18n contribution has been open for 52 days with no review. The author has kept it updated, but maintainer review is needed to land the feature.
- **PR #869 – Obscura browser backend** (opened Apr 24, last updated Apr 25) – A non-trivial feature PR that adds a new browser backend; it has no comments from maintainers yet. If the project wants to ship this, it needs architectural review.

No long-abandoned high-severity issues were identified in the current window.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured digest for the CoPaw project on 2026-04-26.

---

## CoPaw Project Digest: 2026-04-26

### 1. Today's Overview
The CoPaw project experienced a high level of activity today, with 11 open issues and 7 open pull requests updated. While no new releases were published, the community is actively reporting critical bugs related to stability and configuration, alongside several high-quality first-time contributor PRs targeting channel and platform support. The project appears to be in a rapid iteration phase, balancing urgent bug fixes with significant feature expansions. Maintainer bandwidth appears stretched, as there is a high volume of open issues requiring attention.

### 2. Releases
- **New Releases:** None this period.

### 3. Project Progress
No pull requests were merged today. All 7 updated PRs remain open, indicating a backlog in review and merge activity. Notable open PRs that represent significant progress include:
- **#3848** (feat): Hardens context compaction fallback handling to prevent accidental history deletion when LLM summarization fails. ([PR #3848](https://github.com/agentscope-ai/CoPaw/pull/3848))
- **#3846** (feat): Adds support for GitHub Copilot as an LLM provider, addressing a long-standing feature request. ([PR #3846](https://github.com/agentscope-ai/CoPaw/pull/3846))
- **#3845** (feat/fix): Fixes the audio message type in the QQ channel and implements automatic Speech-to-Text (STT). ([PR #3845](https://github.com/agentscope-ai/CoPaw/pull/3845))
- **#3839** (fix): Refactored the XiaoYi (Huawei) channel to use correct dual WebSocket connections and A2A protocol handling. ([PR #3839](https://github.com/agentscope-ai/CoPaw/pull/3839))
- **#3813** (feat): Adds a Tauri 2.x desktop application, replacing the previous Electrobun-based build. ([PR #3813](https://github.com/agentscope-ai/CoPaw/pull/3813))

### 4. Community Hot Topics
The community is focused on high-severity bugs, particularly around message delivery and agent execution control.
- **#3849 - Agent Replies Disappear Mid-Sentence (Console):** This bug describes a critical UX failure where the agent’s output is silently truncated without an error, causing session freezes. This is the most concerning stability issue reported today. ([Issue #3849](https://github.com/agentscope-ai/CoPaw/issues/3849))
- **#3851 - MODEL_EXECUTION_FAILED with DeepSeek Thinking Mode:** A high-activity issue involving a protocol mismatch when using DeepSeek models. The `reasoning_content` field causes errors in multi-turn conversations, affecting a popular model provider. ([Issue #3851](https://github.com/agentscope-ai/CoPaw/issues/3851))
- **#3850 - Web UI Pause Button is Ineffective:** A community member identified that the "Pause" button in the WebUI is purely cosmetic and does not actually stop the backend agent, rendering the feature useless. ([Issue #3850](https://github.com/agentscope-ai/CoPaw/issues/3850))

### 5. Bugs & Stability
Bug reports dominate today's activity. Severity ranking is high, as several issues break core functionality.

- **Critical:**
    - **#3849 (Console):** Replies disappear mid-sentence without error. No fix PR exists. ([Issue #3849](https://github.com/agentscope-ai/CoPaw/issues/3849))
    - **#3851 (API):** `MODEL_EXECUTION_FAILED` with DeepSeek thinking mode, breaking multi-turn conversations. No fix PR exists. ([Issue #3851](https://github.com/agentscope-ai/CoPaw/issues/3851))
    - **#3850 (WebUI):** Pause button is non-functional, causing wasted compute. No fix PR exists. ([Issue #3850](https://github.com/agentscope-ai/CoPaw/issues/3850))

- **High:**
    - **#3843 (Session):** Session history disappears mid-conversation and new messages route to a new session. No fix PR exists. ([Issue #3843](https://github.com/agentscope-ai/CoPaw/issues/3843))
    - **#3837 (WeChat):** Continuous messages from the agent are truncated after ~10 messages. No fix PR exists. ([Issue #3837](https://github.com/agentscope-ai/CoPaw/issues/3837))

- **Medium:**
    - **#3847 (CLI):** `qwenpaw mission` commands fail with a 405 error due to a double `/api` prefix. A fix is likely needed in `mission_cmd.py`. No fix PR exists. ([Issue #3847](https://github.com/agentscope-ai/CoPaw/issues/3847))
    - **#3840 (XiaoYi Channel):** Agent fails to send replies back to the Huawei XiaoYi client. A fix PR (**#3839**) is currently open. ([Issue #3840](https://github.com/agentscope-ai/CoPaw/issues/3840))

- **Low:**
    - **#3836 (Browser Tool):** `browser_use` tool reports `ERR_INTERNET_DISCONNECTED` even when the network is online. No fix PR exists. ([Issue #3836](https://github.com/agentscope-ai/CoPaw/issues/3836))
    - **#3835 (WebUI):** Cannot rename or delete custom ACP agents in the WebUI. No fix PR exists. ([Issue #3835](https://github.com/agentscope-ai/CoPaw/issues/3835))

### 6. Feature Requests & Roadmap Signals
Several feature requests from the community point towards future improvements in user experience and platform support.

- **Automatic Model Discovery (#3844):** A user requested that after adding a new provider (e.g., a self-hosted OpenAI-compatible API), models should be auto-listed rather than requiring manual registration. This is a strong candidate for the next release to improve onboarding. ([Issue #3844](https://github.com/agentscope-ai/CoPaw/issues/3844))
- **WeChat Message Merging & Delays (#3837):** Users explicitly request a `message_delay_interval` config option for the WeChat channel to prevent message truncation. This is a clear roadmapping signal for the WeChat channel maintainer. ([Issue #3837](https://github.com/agentscope-ai/CoPaw/pull/3837))
- **GitHub Copilot Provider (#3846):** The PR is already open, suggesting this is a planned feature. ([PR #3846](https://github.com/agentscope-ai/CoPaw/pull/3846))
- **Tauri Desktop App (#3813):** The shift from Electrobun to Tauri 2.x shows a strategic choice for a lighter, more performant desktop client. ([PR #3813](https://github.com/agentscope-ai/CoPaw/pull/3813))

### 7. User Feedback Summary
User feedback today is overwhelmingly focused on **pain points**, reflecting the instability of cutting-edge builds.

- **Dissatisfaction:** Users are frustrated by silent failures (replies disappearing, pausing not working) and configuration resets. Comments on issues like #3849 and #3850 imply a loss of trust in the system’s reliability.
- **Specific Needs:** The community requires robust handling for non-standard API providers (DeepSeek thinking mode), real-time controls (pause/resume), and reliable multi-turn conversations. The requests for auto-model-discovery and configurable send intervals show a desire for mature, configurable infrastructure.
- **Positive Signals:** The high quality of first-time-contributor PRs (#3848, #3846, #3845) indicates a healthy ecosystem of developers who are invested enough to fix the bugs they encounter.

### 8. Backlog Watch
The following issue has been open for an extended period and represents a clear gap in maintainer attention:

- **#1426 - Matrix Channel Not Working**: This issue has been open since March 13, 2026, and was recently closed but remains unfixed. It reports that receiving messages from Matrix rooms does not work. Despite being tagged as a "bug" and "channel" issue, it has received no commits. **This suggests the Matrix channel may be unmaintained or a low priority.** ([Issue #1426](https://github.com/agentscope-ai/CoPaw/issues/1426))

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-26

## Today's Overview

ZeroClaw is in a period of **moderately high activity**, with 50 issues and 40 PRs updated in the last 24 hours. The project maintains strong contributor momentum, though a significant portion of activity is concentrated on bug fixes and the ongoing schema v3 migration rather than new feature development. Community participation remains healthy, with diverse contributors addressing both critical S1 blockers (workflow blocked) and long-standing technical debt, particularly in the provider configuration layer and the Matrix channel implementation. The project closed 12 issues and 8 PRs today, indicating solid throughput, though 38 open issues and 32 open PRs suggest the maintainer queue remains substantial.

## Releases

**No new releases today.** The previous release (v0.7.4) is still the latest, with its milestone tracking issue (#5877) noting that tags for v0.7.3 had to be skipped after a "broken tags blowout" emergency situation.

## Project Progress

Eight PRs were merged or closed today:

- **#5511** and **#5512** (closed) — `feat(channel): add InboxAPI channel (email via MCP)` — Two PRs from contributor `vish-dini` adding zero-config agent-native email as an inbound channel, enabling agents to send/receive email without IMAP/SMTP setup.

- **#6106** (merged) — `fix(infra): add SQLite FTS UPDATE trigger for sessions_fts` — Fixes a data integrity issue where full-text search indexes went stale during incremental streaming persistence, potentially causing search results to return phantom entries.

- **#5787** (closed) — RFC to replace TOML i18n with Mozilla Fluent and remove in-repo translated docs — This RFC was accepted and closed, signaling a significant architectural decision for localization infrastructure.

- **#4657** (closed) — Matrix channel friction tracker umbrella issue — The tracking issue for Matrix channel improvements was closed, suggesting completion of the associated friction items.

- **#5951** (closed) — Clean-slate rewrite of `zeroclaw onboard` — A high-risk, large-scale refactoring of the 8,500+ line onboarding wizard monolith was merged, replacing it with a schema-driven orchestrator.

Key features that advanced through open PRs include:
- **Google Gemini OAuth improvements** (#6049, #6121, #6122) — Multiple PRs are in flight to fix Gemini CLI OAuth credential extraction and rate-limit error handling.
- **Jira API v2/v3 dual-mode support** (#6116) — New PR adds support for Jira Server/Data Center alongside existing Jira Cloud support.
- **OpenAI Codex Responses API** (#6117) — Adds native support for OpenAI's Responses API tool calls within the codex provider.

## Community Hot Topics

The most active discussions this period reveal structural tensions in the project:

1. **[#4866]** — *"Web dashboard is still not available"* (25 comments, closed) — A recurring, long-standing issue affecting users attempting to use both the web UI and Tauri desktop app. Despite multiple version updates, the dashboard build process (`cd web && npm ci && npm run build`) continues to fail for users. This issue's persistence across "many versions" signals a potential maintainer blind spot or CI gap in the web frontend build pipeline.

2. **[#4657]** — *"Matrix channel: friction tracker"* (12 comments, 2 👍, closed) — An umbrella issue tracking multiple Matrix channel pain points that has now been closed. The high engagement reflects the importance of Matrix as a communication channel for the community.

3. **[#5815]** — *"Provider ignores llamacpp object"* (9 comments, 2 👍, closed) — A configuration regression where `[providers.models.llamacpp]` settings are silently ignored since schema version 2. Users report this "worked fine before" the schema migration, indicating schema version changes introduced regressions.

4. **[#5982]** — *"Per-sender RBAC for multi-tenant agent deployments"* (7 comments, open) — A feature request for role-based access control to support multi-tenant deployments. This signals growing production deployment ambitions among users.

5. **[#6059]** — *"Incompatible with DeepSeek-V4 API format"* (6 comments, 1 👍) — The DeepSeek provider integration is broken with the latest V4 API, particularly around "thinking mode" responses. This affects users who rely on DeepSeek as a primary model provider.

## Bugs & Stability

**Critical (S1 - Workflow Blocked):**

- **[#6118]** — *"Multiple failures in setup.bat on Windows"* (new today) — The Windows installation script contains 32-bit integer overflows, improper character escaping, and other bugs that prevent installation from completing. No fix PR exists yet. **Severity: High** for the Windows user base.

- **[#6123]** — *"default_model issue on fresh install"* (new today) — A fresh installation with Ollama on a separate server fails to recognize the configured provider. User must manually edit `config.toml` as workaround. No fix PR exists.

- **[#6120]** — *"Onboarding: choosing OpenAI Codex prompts for OpenAI API key instead"* (new today) — The new onboarding wizard incorrectly redirects Codex subscription users to the OpenAI API key flow. No fix PR exists.

- **[#5941]** — *"No tool call found for function call output"* (5 comments, open) — A confusing error where the agent fails to process tool call results, returning a generic "All providers/models failed" error. No fix PR identified.

**Major (S2 - Workflow Degraded):**

- **[#6059]** — *"Incompatible with DeepSeek-V4 API format"* — Thinking mode responses break compatibility. No fix PR exists yet.

- **[#6097]** — *"Local image reading failed"* — Skill-generated images using local paths cannot be read by API-based models. No fix PR exists.

- **[#4842]** — *"update command downloads wrong architecture binary on aarch64 (Raspberry Pi)"* (6 comments, open) — A long-standing issue (since March 27) where `zeroclaw update` downloads x86_64 binaries on ARM64 systems. This is particularly impactful for the Raspberry Pi user community.

**Fix PRs in flight:**

- **[#6092]** — Fix for fallback providers ignoring `api_key`, `base_url`, and `name` from config (open)
- **[#6124]** — Fix for deployed docs pointing to a contributor's fork instead of upstream (new today, size: XS)
- **[#5905]** — Fix for DockerSandbox missing workspace bind-mount support (open, risk: high)
- **[#5985]** — Fix for SQLite FTS update trigger (open, needs author action)
- **[#6122]** — Fix for Gemini 429 rate-limit parsing (new today)

## Feature Requests & Roadmap Signals

**High-probability for v0.7.5 or near-term:**

- **Schema v3 migration** (#5947) — A "merge blocker" batch migration that will ship all pending breaking config field changes simultaneously. This is actively being coordinated and will likely land in the next release.

- **Matrix channel rewrite** (#6112, new today) — A clean-room rewrite of the Matrix channel implementation on matrix-rust-sdk 0.16. The existing implementation was described as broken ("would not connect on a typical install"), suggesting this is a high-priority fix.

- **Google Gemini OAuth fixes** (#6049, #6121, #6122) — Multiple PRs targeting Gemini CLI credential extraction and rate-limit handling. The superseded status of #6049 indicates the team is iterating rapidly on this.

- **OpenAI Codex Responses API** (#6117) — Adds native tool-call support for the new OpenAI Responses API within the codex provider.

**Medium-probability:**

- **Per-sender RBAC for multi-tenant deployments** (#5982) — Growing user interest in production multi-tenant deployments, but this is a substantial architectural change.

- **I18n prompt support** (#5930) — User request for localized system prompts, likely deferred until the Mozilla Fluent migration (#5787) lands.

- **Free model indication in selection UI** (#6070) — User feedback requesting visual indicators for which models are free/no-cost in the model selection dropdown.

**Long-term signals:**

- **Multi-agent UX flow design** (#5890) — An RFC for multi-agent orchestration that is still in the discussion phase. This represents a major architectural direction for future ZeroClaw releases.

## User Feedback Summary

**Pain Points (most frequently reported):**

1. **Configuration persistence and schema migration fatigue** — Multiple issues (#5815, #6123, #6099, #5947) highlight frustration with configuration changes breaking between versions. Users report settings that "worked fine before" silently failing after schema version bumps.

2. **Onboarding wizard unreliability** — Despite the massive rewrite (#5951), new issues continue to surface: Codex users redirected to wrong API key flow (#6120), Ollama provider not recognized on fresh installs (#6123), and GitHub Copilot not appearing as an option (#4851). The new wizard may be introducing its own bugs.

3. **Windows support gaps** — The `setup.bat` script (#6118) failing with basic issues like integer overflows suggests Windows is not a primary development target, frustrating for Windows users trying to evaluate the project.

4. **Long-standing aarch64/ARM64 support** — Issue #4842 (Raspberry Pi binary download) has been open since March 27 with no fix, impacting a significant segment of the self-hosting community.

**Satisfaction Signals:**

- The Matrix channel friction tracker (#4657) was closed, suggesting improvements in that area.
- Multiple contributors are actively submitting fix PRs, indicating confidence in the project's direction.
- Feature requests for multi-tenant RBAC (#5982) suggest users are deploying ZeroClaw in production environments.

## Backlog Watch

**Critical items needing maintainer attention:**

1. **[#4842]** — *"update command downloads wrong architecture binary on aarch64 (Raspberry Pi)"* — Open since March 27 (30 days), with 6 comments and no fix PR. High-impact for ARM64 users. **Status: Unanswered.**

2. **[#5862]** — *"zeroclaw does not know it can add cron"* — Users report the agent lacks self-awareness of its own `cron` subsystem. This is a usability/self-discovery issue that affects user perception of capability. **Status: Needs repro.**

3. **[#5873]** — *"release binary size — is 35MB expected?"* — A question about the 35MB binary size advisory target (15MB advisory, 50MB hard limit). No maintainer response recorded. **Status: Unanswered.**

4. **[#5985]** — *"fix(infra): add SQLite FTS UPDATE trigger for sessions_fts"* — Labeled `needs-author-action`; the contributor may need guidance to move this forward. The merged alternative (#6106) may supersede this.

5. **[#5998]** — *"feat(config): add mention-only option for IRC channels"* — Labeled `needs-author-action`; an IRC channel feature that appears to need maintainer engagement to progress.

6. **[#6030]** — *"scope TOOL_LOOP_SESSION_KEY in channel orchestrator"* — A channel-level feature that is **blocked** (labeled `status:blocked`). No path to unblocking is documented.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*