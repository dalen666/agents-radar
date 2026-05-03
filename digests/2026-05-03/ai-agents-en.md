# OpenClaw Ecosystem Digest 2026-05-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-03 04:43 UTC

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

# OpenClaw Project Digest — 2026-05-03

## Today's Overview
OpenClaw shows **extremely high activity** today with 500 issues and 500 PRs updated in the last 24 hours. Of those, 386 issues were closed and 60 PRs were merged/closed, indicating a **major stabilization push** following the v2026.5.2 release. Three new releases shipped today — one stable (v2026.5.2) and two betas — all centered on **external plugin installation infrastructure** and the **npm-first cutover**. However, the high volume of open PRs (440) and new regression reports suggests the project is in a **post-release firefighting phase**, with several critical bugs already reported against v2026.5.2. Community engagement remains strong, with multiple issues attracting 5–12 comments each.

## Releases
Three releases were published today:

### v2026.5.2 (stable)
- **Highlights:** External plugin installation now supports diagnostics, onboarding, doctor repair, channel setup, install/update records, and artifact metadata, with bare package installs remaining on npm for the first cutover phase. Gateway and agent hot paths were optimized for lower latency (noted as "leaner acr" — likely a typo for "across the board"). Thanks to @vincentkoc.
- **Migration notes:** Users should be aware that plugin installation behavior changes significantly. Stale configured installs, missing package payloads, and beta-channel plugin fallback are now covered. Users relying on non-npm plugin sources may need to update their configuration.
- **No documented breaking changes or data migrations.**

### v2026.5.2-beta.3 and v2026.5.2-beta.2
- Both betas share the same changelog as the stable release, suggesting they were **release candidates** that passed validation to become the stable v2026.5.2.
- **No breaking changes** beyond the plugin installation changes noted above.

## Project Progress
Today saw **60 closed/merged PRs**, reflecting significant resolution velocity. Key advances include:

- **Plugin resolution:** PR [#76447](https://github.com/openclaw/openclaw/pull/76447) (open) resolves official plugin install aliases for external plugins, fixing bare IDs through the official catalog.
- **Telegram channel fixes:** Multiple Telegram-related bugs closed today, including context reset errors ([#73803](https://github.com/openclaw/openclaw/issues/73803), [#73789](https://github.com/openclaw/openclaw/issues/73789)), blank message injection ([#74137](https://github.com/openclaw/openclaw/issues/74137)), and the runtime-deps reinstall loop milestone fix ([#75275](https://github.com/openclaw/openclaw/issues/75275), [#75259](https://github.com/openclaw/openclaw/issues/75259)).
- **Gateway reliability:** The gateway CPU/runtime-deps fix from the beta cycle was promoted to stable.
- **Channel fixes:** Signal SSE timeout ([#74741](https://github.com/openclaw/openclaw/issues/74741)), Slack reaction behavior ([#69005](https://github.com/openclaw/openclaw/issues/69005)), and Discord compatibilities ([#70623](https://github.com/openclaw/openclaw/issues/70623)) were all addressed.

## Community Hot Topics
Two issues dominate community discussion (most comments today):

### 1. Agent refuses to invoke write/action tools ([#41304](https://github.com/openclaw/openclaw/issues/41304) — 12 comments)
**Closed.** User upgraded to latest OpenClaw with agentmail plugin. The agent **hallucinates success** (reports a fake message ID) but never sends the email. A curl test works directly, indicating the bug is in OpenClaw's tool invocation layer, not the agentmail server. **Underlying need:** Trustworthy tool execution with proper feedback/error handling — a fundamental trust requirement for productivity agents.

### 2. Expose clientPingTimeout for Slack Socket Mode ([#14248](https://github.com/openclaw/openclaw/issues/14248) — 7 comments)
**Closed.** Long-standing issue (opened Feb 11) finally resolved. Slack's WebSocket servers frequently exceed the default 5000ms clientPingTimeout, generating **70+ pong timeout warnings/hour** in production. **Underlying need:** Operational stability for production deployments — users need to tune connectivity parameters without modifying source code.

### Emerging hot topics (both opened today):
- **[@openclaw/discord 2026.5.2 startup crash](https://github.com/openclaw/openclaw/issues/76371)** (5 comments, 1 👍) — SecretRef-backed token resolution broken in new externalized plugin.
- **[5.2 brave plugin install fails](https://github.com/openclaw/openclaw/issues/76373)** (5 comments, 1 👍) — Missing `openclaw.extensions` in stable package, no beta available. **Direct regression from the npm cutover.**

## Bugs & Stability
Several regressions and critical bugs were reported today, ranked by severity:

### Critical (crash or complete feature loss)
1. **@openclaw/discord 2026.5.2 startup crash** ([#76371](https://github.com/openclaw/openclaw/issues/76371)) — SecretRef-backed token (`env:default:DISCORD_BOT_TOKEN`) fails to resolve, crashing channel startup. **Regression from 2026.4.29.**
2. **Brave plugin install fails on v2026.5.2** ([#76373](https://github.com/openclaw/openclaw/issues/76373)) — Missing `openclaw.extensions` in stable package (`0.0.9`), no `@beta` available. **Users cannot install Brave search.**
3. **core-plugin-tools stage ~8.3s constant latency** ([#76295](https://github.com/openclaw/openclaw/issues/76295) — open, 6 comments, 2 👍) — Regression from v2026.4.24; previously ~1.5s. Delay is identical across all sessions. **Suspected sequential initialization bottleneck.**

### High (functional impairment)
4. **Multi-tool turn replay produces orphan tool_use blocks** ([#74907](https://github.com/openclaw/openclaw/issues/74907) — open) — After session compaction, Anthropic returns 400 errors on long-running sessions with multi-tool turns. **Blocks long-running workflows.**
5. **Cron agent jobs silently time out on LLM API outages** ([#45494](https://github.com/openclaw/openclaw/issues/45494) — open, 6 comments) — Jobs exhaust full timeout window on definitive 500 errors instead of fast-failing.
6. **Installer hangs on `curl | bash`** ([#73814](https://github.com/openclaw/openclaw/issues/73814) — open) — `warn_shell_path_missing_di` function truncation from stdin consumption. **Blocks new installations.**

### Medium
- **Fresh-session `[object Object]` hallucination persists** ([#70734](https://github.com/openclaw/openclaw/issues/70734) — open) — Even after session/database wipe on intended fix branch.
- **openclaw status crashes on channel setup** ([#74693](https://github.com/openclaw/openclaw/issues/74693) — closed) — Packaged/bundled path issue in read-only loader.
- **Webchat Control UI duplicate WebSocket connections** ([#72753](https://github.com/openclaw/openclaw/issues/72753) — closed) — Regression of earlier fix, now resolved.

**Note:** The two critical regression bugs (#76371, #76373) were both **opened today (May 3)** against the newly stable v2026.5.2, suggesting the npm cutover introduced unanticipated edge cases. No fix PRs are yet linked.

## Feature Requests & Roadmap Signals
Several active feature proposals signal where the project is heading:

1. **[Distributed Agent Runtime](https://github.com/openclaw/openclaw/issues/42026)** (4 comments, 3 👍) — RFC to split monolithic gateway into control plane + per-agent compute pods. **Status:** Open since March 10. Could be a major v2026.6 architectural shift.
2. **[Security scanning for skill installation](https://github.com/openclaw/openclaw/issues/45031)** (6 comments) — Proposal to integrate AgentShield or similar for automated skill vulnerability scanning. **Status:** Open since March 13. Covers a real gap given 36% skill flaw rate reported by Snyk.
3. **[Dynamic Context Window Token Budget](https://github.com/openclaw/openclaw/issues/42999)** (4 comments) — Suggests adaptive token thresholds per model instead of static 16K/32K defaults. **Status:** Closed, likely deferred.

**Prediction for next release (v2026.5.3):** Given the flurry of regression fixes needed, the next release will likely be a **stabilization patch** addressing the Discord/brave plugin regressions, core-plugin-tools latency, and the installer hang.

## User Feedback Summary
Common pain points expressed across today's issues:

- **"Upgrade broke my setup"** — Multiple users report regressions after upgrading to v2026.4.27–5.2, particularly around plugins and channel startup. Token resolution for Discord and Brave search being unavailable are prime examples.
- **"Agent says it did it, but it didn't"** — The hallucinated success in issue #41304 (agent claims to send email but never does) represents a **core trust issue** for AI agent adoption. Users need verifiable tool execution.
- **"Performance regressions are frustrating"** — The core-plugin-tools stage going from 1.5s to 8.3s (5.5× slower, #76295) without obvious cause is eroding confidence in the release process.
- **"Cron jobs are unreliable"** — Silent timeouts during API outages (#45494) and timeout-including-queue-time (#41783) undermine the cron feature for production automation.

Positive signals: Users are actively upgrading and testing — many of today's bugs were filed as "upgrade reports," indicating active adoption. The community also shows strong collaborative debugging (multiple users testing and confirming findings).

## Backlog Watch
Several important items need maintainer attention:

1. **Fresh-session `[object Object]` hallucination** ([#70734](https://github.com/openclaw/openclaw/issues/70734) — opened Apr 23, 0 comments from maintainers) — Persists on intended fix branch. **Longest-standing unresolved hallucination bug.**
2. **Dynamic Context Window Budget** ([#42999](https://github.com/openclaw/openclaw/issues/42999) — closed but feature never implemented) — Would resolve usability pain for users with varying model context windows.
3. **browser tool: include current page URL in before_tool_call** ([#47834](https://github.com/openclaw/openclaw/issues/47834) — opened Mar 16, no maintainer response) — Needed for domain-pinning security checks; **blocks security plugin development.**
4. **Distributed Agent Runtime RFC** ([#42026](https://github.com/openclaw/openclaw/issues/42026) — opened Mar 10, 3 👍) — No maintainer response. While ambitious, the current stabilization issues might make this a lower priority.

**Most concerning:** The two critical regressions from today (#76371, #76373) have no linked fix PRs or assignees yet, despite being filed against the freshly released v2026.5.2. This suggests the team may be stretched thin between the release cadence and post-release bug fixing.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem

## Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **phase of rapid maturation**, characterized by a split between projects focused on **post-release stabilization** (OpenClaw) and those pushing toward **major architectural rewrites** (NullClaw, ZeroClaw). A cluster of projects—NanoBot, Hermes Agent, and IronClaw—demonstrate healthy, incremental feature development with active community contribution pipelines. The landscape reveals converging pressures: all major projects are grappling with **reasoning-model compatibility** (DeepSeek, Gemini thought-signature handling), **plugin/sandbox security hardening**, and **multi-channel reliability** (Telegram, Discord, Matrix). A notable trend is the emergence of **agent-to-agent protocol support** (A2A) across multiple codebases, signaling industry alignment toward interoperable agent networks.

---

## Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|---------|-------------|-----------|----------------|--------------|
| **OpenClaw** | 500 (386 closed) | 500 (60 merged) | v2026.5.2 stable + 2 betas | ⚠️ **Firefighting** — critical regressions from npm cutover |
| **NanoBot** | 4 open | 19 (8 merged) | v0.1.5.post3 (stable) | ✅ **Healthy** — active triage, rapid PR turnaround |
| **Hermes Agent** | 50 (4 closed) | 50 (5 merged) | No release today | ⚠️ **Growing pains** — high bug volume, 45 open PRs |
| **PicoClaw** | 6 open | 8 (2 merged) | Nightly v0.2.8 | ✅ **Steady** — moderate, clean pipeline |
| **NanoClaw** | 13 updated | 17 (7 merged) | No release today | ✅ **High velocity** — rapid fix turnaround (24h on critical bugs) |
| **NullClaw** | 5 open | 15 (14 merged) | No release today | ✅ **Exceptional** — aggressive backlog clearing, 14/15 PRs merged |
| **IronClaw** | 20 (5 closed) | 47 (6 merged) | No release today | ⚠️ **Reborn heavy** — massive design churn, new contributors |
| **LobsterAI** | 0 | 1 open | No release today | ⚠️ **Low activity** — single PR, no community engagement |
| **TinyClaw** | 0 | 0 | N/A | 🟡 **Inactive** — zero activity |
| **Moltis** | 4 new (today) | 3 (1 merged) | No release today | ✅ **Moderate** — fresh issues, active PRs |
| **CoPaw** | 13 | 15 (5 merged) | v1.1.6b1 imminent | ✅ **Steady growth** — first-time contributors, structured bugs |
| **ZeptoClaw** | 0 | 17 (all merged, Dependabot) | No release today | ✅ **Maintenance mode** — automated dependency bumps only |
| **ZeroClaw** | 50 | 33 (6 merged) | v0.8.0 integration branch | ⚠️ **Pre-release crunch** — high bug count, config schema overhaul |

**Health Score Key:** ✅ Healthy / ⚠️ Needs Attention / 🟡 Inactive

---

## OpenClaw's Position

**Advantages vs. Peers:**

- **Scale & Community**: OpenClaw's 500 issues/PRs daily dwarfs every other project. Its community engagement (12-comment threads, active upgrade testing) indicates the largest user base and most mature ecosystem.
- **Release Cadence**: Three releases in a single day (stable + two betas) demonstrates industrial-grade CI/CD and validation pipelines. Only NullClaw matches this velocity in raw PR throughput.
- **Plugin Infrastructure**: The npm-first cutover and external plugin installation system is more sophisticated than any peer's skill/plugin model. NanoBot and ZeroClaw are building toward this capability but are 1-2 major versions behind.

**Technical Approach Differences:**

- **Monolithic reference implementation**: OpenClaw is the "kernel" that others fork or derive from (PicoClaw, NanoClaw, TinyClaw are explicit derivatives). This concentration of development creates a **bottleneck effect**—regressions in OpenClaw cascade downstream.
- **Plugin isolation model**: OpenClaw's external plugin architecture (npm packages with diagnostics, doctor repair, channel setup) is ahead of peers. Hermes Agent and ZeroClaw still embed most functionality in the core binary.
- **Gateway optimization**: OpenClaw's "leaner acr" latency optimization for gateway/agent hot paths shows an operations-focused mindset, whereas IronClaw is still designing its turn coordination model from scratch.

**Community Size Comparison:**

| Metric | OpenClaw | Nearest Peer | Ratio |
|--------|----------|--------------|-------|
| Daily issues | 500 | 50 (Hermes/ZeroClaw) | **10x** |
| Daily PRs | 500 | 50 (Hermes) | **10x** |
| Active contributors | High (multiple named) | Moderate (fewer named) | ~5-10x |
| Release frequency | 3/day (peak) | ~1-2/week | **20x** |

OpenClaw's position as the **ecosystem's reference implementation** is unassailable in scale, but its **post-release firefighting** and critical regressions (#76371 Discord crash, #76373 Brave plugin) erode trust that smaller, more stable projects (NullClaw, NanoBot) are currently building.

---

## Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Need |
|------------|------------------|---------------|
| **Reasoning Model Compatibility** | OpenClaw (#41304), IronClaw (#3214, #3201), ZeroClaw (#6233, #6269), Moltis (#959), CoPaw (#4006) | DeepSeek `reasoning_content` round-trip, Gemini thoughtSignature preservation, tool call formatting for thinking models |
| **Plugin/Skill Isolation & Security** | OpenClaw (#76373, #76371), NanoBot (#3599 safety guard regression), NullClaw (#882 Landlock sandbox), ZeroClaw (#5722 Python sandbox), Hermes (#2743 command injection) | Sandbox defaults that don't break legitimate use cases; env-var-based secrets; plugin install verification |
| **Channel Reliability** | OpenClaw (Telegram context reset, Discord compatibility), NanoClaw (WhatsApp LID mapping loss, CLI channel broken), Hermes (Feishu card rendering), PicoClaw (Telegram duplicate retries), ZeroClaw (Telegram mention_only, Slack env vars) | WebSocket reconnection, token persistence, multi-platform state management, channel-specific timeout configuration |
| **Cron / Scheduled Task Resilience** | OpenClaw (#45494 silent timeouts), Hermes (#19066 null next_run_at), ZeroClaw (#5862 agent doesn't know it can cron) | Fast-fail on API outages, reliable job recovery, agent self-awareness of scheduling capabilities |
| **Agent-to-Agent (A2A) Protocol** | Hermes (#514 A2A support), IronClaw (#686 A2A multi-modal), NullClaw (implied via REST admin API) | Cross-framework agent discovery, multi-modal forwarding, task delegation across ecosystems |
| **Configuration Security** | OpenClaw (env var token resolution), ZeroClaw (#6237 Slack env vars, #5654 config encryption), Hermes (#2293 config loss on update), NanoBot (#2218 `{env:VAR}` syntax) | Secrets out of config files, config file integrity across upgrades, environment variable interpolation |

---

## Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw/ZeroClaw | NullClaw |
|-----------|----------|---------|-------------|-------------------|----------|
| **Target User** | Production operators, plugin developers | CLI power users, channel integrators | Multi-agent orchestrators, enterprise | Blockchain/crypto developers, traders | Embedded/IoT developers, Zig ecosystem |
| **Primary Language** | TypeScript/Node.js | Python | Python | Rust (IronClaw), Rust (ZeroClaw) | Zig |
| **Architecture** | Monolithic reference, external plugins | Modular skills, channel adapters | Agent hierarchy (orchestrator→workers) | Reborn (turn coordination rewrite) | Minimal, sandbox-first |
| **Deployment Model** | npm packages, gateway + agents | pip packages, single binary | Docker, multi-backend terminals | WASM plugins, CLI + daemon | Systemd, SysVinit, RTC-less hardware |
| **Community Maturity** | **Established** (10x peers) | **Growing** (first-time contributors) | **Maturing** (high bug volume) | **Pre-release** (Reborn churn) | **Niche** (Zig enthusiasts) |
| **Key Differentiator** | Ecosystem scale, plugin infra | CLI UX, Discord/WhatsApp channels | Multi-agent orchestration, A2A | Trading/intents, WASM isolation | Zig performance, anti-spoofing security |

**Key Insight**: The ecosystem is **balkanizing along language lines** (TS/Node → Python → Rust → Zig) and **deployment philosophy** (monolithic vs. micro-services vs. embedded). OpenClaw's dominance is in the TypeScript/Node.js "heavy" segment, while NullClaw and ZeptoClaw are carving out lightweight/edge niches.

---

## Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Activity, >10 PRs/day)**
- **NullClaw**: Exceptional PR merge rate (14/15 merged), aggressive backlog clearing. Project is stabilizing after Zig 0.16 migration. Highest signal-to-noise ratio.
- **ZeroClaw**: Intense pre-release crunch (50 issues, 33 PRs). v0.8.0 config schema overhaul suggests major architectural shift. Risk of regressions from rapid change.
- **IronClaw**: Reborn rewrite driving massive PR volume (47 open). New contributor (abbyshekit, 14 PRs) signals growing ecosystem. Design-phase churn may delay shipping.
- **OpenClaw**: Volume leader but **firefighting** mode. High bug fix velocity (60 merged PRs) offset by critical regressions in every release.

**Tier 2: Steady Growth (Moderate Activity, 5-15 PRs/day)**
- **NanoBot**: Healthy pipeline (8 merged PRs today), rapid issue-to-fix turnaround (hours). Safety guard regression (#3599) is a concern but isolated.
- **NanoClaw**: Strong 24-hour fix cycle (7 merged PRs). OpenRC compatibility gap is the main risk for platform expansion.
- **CoPaw**: Steady first-time contributor onboarding. v1.1.6b1 imminent. Model fallback chain (#1327, 52 days open) is the longest-standing user demand.
- **Hermes Agent**: Growing pains visible—high bug volume (50 issues) against moderate fix rate (5 merged PRs). Security bugs (#2743) unaddressed for >30 days.

**Tier 3: Stabilizing / Maintenance (Low Activity, <5 PRs/day)**
- **PicoClaw**: Moderate, predictable cadence. Stale PRs (30+ days) need maintainer attention.
- **Moltis**: Fresh issues filed today indicate active community but low development velocity.
- **ZeptoClaw**: Effectively in **maintenance mode**—all activity is Dependabot automation. Liquid AI provider is the only feature signal.

**Tier 4: Stalled (Zero Activity)**
- **LobsterAI**: Single open PR (#1879, configuration persistence bug). Zero community engagement.
- **TinyClaw**: No activity in 24 hours. Unclear if project is dormant or paused.

---

## Trend Signals

1. **Reasoning Models Are Breaking Every Project**: DeepSeek V4 and Gemini 3.x introduced `reasoning_content`/`thoughtSignature` fields that current agent frameworks don't properly round-trip. **Impact**: Multi-turn conversations with thinking models are silently broken across OpenClaw, IronClaw, ZeroClaw, Moltis, and CoPaw. **Urgency**: High—this is a core functionality requirement for 2026 LLM usage.

2. **Plugin/Sandbox Security Is the #1 Production Concern**: Every project with a sandbox (NullClaw, ZeroClaw, NanoBot, OpenClaw) faces the **default-vs-real-world** tension: overly restrictive defaults block legitimate use cases, permissive settings enable injection attacks. **Signal**: Three projects (NullClaw #882, ZeroClaw #5722, NanoBot #3599) are actively redesigning their security models.

3. **Users Want Agents That Know Their Own Capabilities**: The ZeroClaw issue "agent doesn't know it can cron" (#5862) and OpenClaw "agent hallucinates success" (#41304) reveal a **meta-cognition gap**: agents lack introspection into their own toolset and execution status. **Value**: Building agent self-awareness (capability discovery, execution verification) is a high-differentiation opportunity.

4. **Agent-to-Agent Protocols Are Becoming Infrastructure**: Hermes (#514), IronClaw (#686 A2A multi-modal), and NullClaw (REST admin API) are investing in inter-agent communication. **Industry alignment**: Google's A2A spec is gaining traction. **Risk**: Fragmentation—if projects adopt incompatible protocols, the ecosystem fragments rather than converges.

5. **Edge/IoT Deployment Is Accelerating**: PicoClaw (Android/Termux), NullClaw (RTC-less hardware, SysVinit), ZeptoClaw (Liquid AI LFM for LEAP SDK on iOS/Android), and ZeroClaw (air-gapped mode via Unix socket) all target resource-constrained or offline environments. **Signal**: The market is demanding agents that run on phones, single-board computers, and air-gapped servers—not just cloud GPUs.

6. **Token Efficiency Is Becoming a Purchase Criterion**: NanoClaw (#2189, 20+ specific token optimization issues) and NanoBot (long exec timeout discussions) surface **production cost sensitivity**. **Implication**: Projects that optimize prompt construction, memory compaction, and redundant tool calls will have a competitive advantage for cost-conscious deployments.

7. **Platform-Specific Pain Points Drive Adoption**: WhatsApp stability (NanoClaw #2193, #2194), Telegram + Signal reliability (multiple projects), and WeChat/DingTalk support (CoPaw) are the **gateway to Asian and enterprise markets**. The projects that nail multi-channel persistence will win global deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-03

## 1. Today's Overview

NanoBot shows an active and healthy development cycle, with **19 PRs updated** and **4 open issues** in the last 24 hours. The project merged **8 PRs** today, including several significant bug fixes and features that have been in development for weeks. Community engagement remains steady, with contributions spanning bug triage, CLI user experience, Discord integration, and audio transcription improvements. No new releases were published today, but the volume of closed PRs suggests a potential release candidate may be forming.

---

## 2. Releases

No new releases today. The latest published version remains **v0.1.5.post3**, which introduced the safety guard regression reported in Issue #3599. Given the volume of merged PRs (8 today), a minor or patch release may be imminent.

---

## 3. Project Progress — Merged/Closed PRs (8 total)

Several long-running PRs were finally merged today, indicating active maintenance and feature completion:

| PR | Title | Type | Significance |
|----|-------|------|--------------|
| [#3594](HKUDS/nanobot/pull/3594) | fix: allow_patterns take priority over deny_patterns in ExecTool | Bug fix | **High** — Resolves a critical sandbox bypass/blocking logic inversion (merged today) |
| [#3456](HKUDS/nanobot/pull/3456) | feat(skills): add create-instance built-in skill + webui remote backend | Feature | **High** — Enables agents to create new bot instances autonomously, plus WebUI remote deployment |
| [#2218](HKUDS/nanobot/pull/2218) | feat(security): support `{env:VAR}` syntax for env var references | Feature | **Medium** — Allows API keys/secrets in config via environment variables |
| [#3419](HKUDS/nanobot/pull/3419) | fix(provider): preserve reasoning_content when merging messages | Bug fix | **Medium** — Fixes DeepSeek thinking mode errors |
| [#3414](HKUDS/nanobot/pull/3414) | fix(agent): cap recent history section in system prompt | Bug fix | **Medium** — Prevents system prompt bloat from accumulated history |
| [#3176](HKUDS/nanobot/pull/3176) | feat(feishu): thread-scoped sessions, reply_in_thread, non-blocking reaction | Feature | **Medium** — Improves Feishu channel session management |
| [#3247](HKUDS/nanobot/pull/3247) | fix(memory): fall back to raw_archive on LLM error response | Bug fix | **Low-Medium** — Resilience improvement for /new command |
| [#2010](HKUDS/nanobot/pull/2010) | feat(whatsapp): add media send/receive support | Feature | **Medium** — Closes a long-standing WhatsApp channel enhancement |

**Key takeaway**: The `create-instance` skill (PR #3456) is a notable architectural addition — it allows an agent to create new NanoBot instances via a helper script, essentially enabling **agent-driven self-replication** for multi-instance deployments.

---

## 4. Community Hot Topics

**Most Active PRs (by comments/engagement):**

1. **PR #3596** — `feat(exec): add activity-aware timeout controls` by boogieLing  
   Addresses Issue #3595 requesting removal of the 600-second hard cap on `exec` timeouts. The PR introduces two-layer timeout control (hard + activity-aware).  
   *Link: [PR #3596](HKUDS/nanobot/pull/3596)*

2. **PR #3589** — `feat(discord): interactive components (buttons, select menus, modals)` by torbbang  
   Adds Discord UI components via the existing `message` tool's `buttons` parameter. Enables richer agent-user interactions on Discord.  
   *Link: [PR #3589](HKUDS/nanobot/pull/3589)*

3. **PR #3592** — `feat(cli): Ctrl+C clears input instead of exiting` by Zeknes  
   Implements bash-like Ctrl+C behavior for the CLI channel, preventing accidental agent session termination.  
   *Link: [PR #3592](HKUDS/nanobot/pull/3592)*

**Analysis**: The community is heavily focused on **CLI/terminal UX** (three PRs open today — #3592, #3593, #3600) and **channel extensibility** (Discord, WhatsApp, Feishu). The exec timeout issue (#3595) received immediate action with a corresponding PR (#3596), suggesting strong maintainer responsiveness to user pain points.

---

## 5. Bugs & Stability

**High Severity**

- **#3600** — `fix: CLI渠道缺少retry_wait消息拦截` (CLI channel missing retry_wait message interception)  
  *Issue*: API retry messages containing ANSI escape codes leak into terminal output, causing visible corruption especially on SSH.  
  *Status*: Open, no fix PR yet | *Link: [Issue #3600](HKUDS/nanobot/issues/3600)*

**Medium Severity**

- **#3599** — `[bug] 升级v0.1.5.post3后经常提示 Command blocked by safety guard`  
  *Issue*: A regression introduced in v0.1.5.post3 causes legitimate commands operating within the workspace directory to be wrongly blocked by the safety guard. The user reports `rm` commands on workspace files are rejected.  
  *Status*: Open, no fix PR yet | *Link: [Issue #3599](HKUDS/nanobot/issues/3599)*

- **#3597** — `[bug] NanoBot confused and couldn't access workspace root`  
  *Issue*: Agent fails to access workspace root when asked to save files, leading to inability to complete assigned tasks.  
  *Status*: Open (since May 2) | *Link: [Issue #3597](HKUDS/nanobot/issues/3597)*

**Low/Non-severity**

- **#3595** — Enhancement request: Remove 600-second exec timeout cap (resolved by PR #3596, still open for tracking)

**Regression alert**: Issue #3599 is a **patch-level regression** (introduced in v0.1.5.post3). The safety guard logic appears too restrictive post-update. Notably, PR #3594 (merged today) fixed a related deny/allow preference inversion in the same subsystem, but did not address the workspace path detection issue.

---

## 6. Feature Requests & Roadmap Signals

**Likely to land in next release:**
- **Activity-aware exec timeout** (PR #3596) — Already under review; replaces the 600-second hard cap with flexible two-layer controls
- **Discord interactive components** (PR #3589) — Major UX enhancement for the Discord channel
- **CLI UX improvements** (PRs #3592, #3593) — Ctrl+C behavior and help text fixes for subcommands

**On the horizon:**
- **Unified transcription providers + local Whisper** (PR #3513) — A significant refactor of voice transcription, adding local Whisper.cpp support
- **Non-WAV audio conversion** (PR #3588) — Prerequisite for self-hosted Whisper backends; addresses a blocking issue for local deployments
- **Dream update scope controls** (PR #3591) — Let users restrict automatic Dream consolidation to prevent unwanted skill drift
- **Manual heartbeat trigger** (PR #3590) — Developer tooling for testing Phase 1 decisions
- **WebUI streaming UX** (PR #3583) — Improved turn completion signaling to prevent chat isolation bugs

**Trending direction**: The project is evolving toward **multi-instance management** (create-instance skill), **self-hosted infrastructure** (local Whisper, env-based secrets), and **richer channel interactions**.

---

## 7. User Feedback Summary

**Pain points (from Issues):**
1. **Terminal corruption** (#3600): SSH users experience ANSI escape code pollution from API retry messages — a production UX blocker for CLI users
2. **Regression anxiety** (#3599): Users report the v0.1.5.post3 update broke previously working workflows, eroding trust in patch stability
3. **Workspace access confusion** (#3597): New users struggle with fundamental agent capabilities (saving files) — indicates documentation or error messaging gaps
4. **Timeout limitations** (#3595): Power users running long downloads/scripts hit the 600-second exec cap — addressed by PR #3596

**Satisfaction signals:**
- Quick turnaround on #3595 (Issue → PR within hours) shows maintainer responsiveness
- Multiple PRs merged today suggest active development and issue prioritization
- Community contributors (torbbang, Zeknes, boogieLing) are engaged and submitting high-quality PRs

**Use cases visible:**
- Daily content drafting (#3597 — X/Twitter article posting)
- Long-running scripts (#3595 — time-lapse/scripted tasks)
- SSH-based remote operation (#3600)
- Multi-instance deployment (#3456)

---

## 8. Backlog Watch

**Issues needing maintainer attention:**
- **#3597** (May 2): User reports inability to access workspace root — could be a configuration issue or a genuine code bug. Unresolved for 1 day, no assignee.
- **#3599** (May 3): Regression from latest patch. No fix PR yet despite being a live issue affecting daily use.

**Stale PRs worth attention:**
- **PR #3513** (Apr 28): `feat(audio): unify transcription providers and add local Whisper support` — No update since May 2; dependency on #3588 may be blocking
- **PR #3583** (May 1): `[WIP] Improve beta WebUI turn completion` — Work-in-progress status unclear; maintainer guidance may be needed

**No critical unresolved items** in the backlog were found. The project maintains a healthy issue-to-PR pipeline, with most bugs receiving prompt PRs.

---

*Generated on 2026-05-03 from public GitHub data at [HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-05-03  
**Source:** github.com/nousresearch/hermes-agent

---

## 1. Today's Overview

Hermes Agent is experiencing **very high activity** today, with 50 issues and 50 PRs updated in the last 24 hours. The open/active issue count (46) significantly outpaces closed items (4), indicating a heavy triage and development load. Maintainers merged or closed 5 PRs, while 45 remain open. No new releases were published. The project shows signs of a maturing codebase facing growing pains: several critical bugs (P1-P2) were reported around gateway latency, cron reliability, and platform-specific integrations, alongside substantial feature work around A2A protocol support, ACP slash commands, and multi-backend terminals.

---

## 2. Releases

**No new releases today.** The latest release remains the previous version (no date available). Users relying on recent bug fixes or features will need to build from `main`.

---

## 3. Project Progress

Today's merged/closed PRs (5 total) include:

- **[PR #19061] fix(feishu): parse marker-wrapped interactive cards on send** – Closed. Fixes Feishu platform card rendering.
- **[PR #19067] feat(gateway): support `[[as_document]]` directive for skill media routing (Telegram)** – Closed as duplicate.
- **[PR #19068] feat(gateway): support `[[as_document]]` directive for skill media routing (Telegram)** – Closed as duplicate.
- **[PR #19045] [CLOSED] Gateway adds ~5s of fixed latency** – Issue closed, likely resolved (PR not explicitly linked but status implies fix merged).

**Notable open PRs advancing major features:**
- **[PR #18956] feat(acp): add `/effort` and `/show_thinking` slash commands + streaming** – Second day of activity, nearing completion.
- **[PR #19072] fix(model_switch): live model discovery for custom_providers** – Direct fix for [#19071], submitted by same reporter.
- **[PR #19074] feat(gateway): add `video_processing` config with size limit and ffmpeg path** – New video processing capability.
- **[PR #17819] delegate_task: default to slim results with detailed opt-in** – Continuing refinement of delegation orchestration.

---

## 4. Community Hot Topics

The community is most engaged around infrastructure and interoperability:

1. **[Issue #514] A2A (Agent-to-Agent) Protocol Support**  
   *11 comments, 3 👍*  
   https://github.com/NousResearch/hermes-agent/issues/514  
   **Analysis:** This long-running (since March) feature request for Google's A2A protocol has the highest engagement. Users want Hermes to discover, communicate, and interoperate with remote agents built on other frameworks. The underlying need: Hermes is seen as a central orchestrator that should be able to coordinate with external agent ecosystems, not just manage its own children.

2. **[Issue #16077] RFC: Curator — background skill maintenance**  
   *5 comments, 3 👍*  
   https://github.com/NousResearch/hermes-agent/issues/16077  
   **Analysis:** Now closed, this RFC proposed an automated background task that reviews agent-created skills for usage and quality. Users are signaling they want self-maintaining agent behaviors without manual intervention.

3. **[Issue #1855] Multi-backend terminal — local + N named remotes**  
   *4 comments, 3 👍*  
   https://github.com/NousResearch/hermes-agent/issues/1855  
   **Analysis:** Users want to run multiple terminal environments simultaneously (local + SSH + Docker + Modal) rather than picking one globally. This speaks to advanced users running heterogeneous infrastructure.

4. **[Issue #2704] Cron job execution results should be written back to conversational memory**  
   *4 comments, 2 👍*  
   https://github.com/NousResearch/hermes-agent/issues/2704  
   **Analysis:** Scheduled tasks currently execute in isolation; users want agents to remember and report what they did autonomously. This is a core "long-term memory" usability request.

---

## 5. Bugs & Stability

**Critical (P1):**

- **[Issue #19066] fix(cron): recover null `next_run_at` jobs and tolerate non-dict origin** — PR [#19066] open. Cron subsystem has robustness gaps where jobs can be silently skipped or crash on malformed data. High severity because cron powers autonomous agent behavior.  
  https://github.com/NousResearch/hermes-agent/issues/19066

**High (P2):**

- **[Issue #19045] Gateway adds ~5s of fixed latency per message** — Closed. A fix appears to be in place for non-streaming mode latency.  
  https://github.com/NousResearch/hermes-agent/issues/19045

- **[Issue #19073] AttributeError in `bundle_content_hash` when checking skill updates** — Open, no fix PR yet. CLI command `hermes skills check` crashes.  
  https://github.com/NousResearch/hermes-agent/issues/19073

- **[Issue #19036] Kanban database is profile-aware, breaking multi-agent orchestrator→worker workflows** — Open. Profile isolation causes database fragmentation in multi-agent setups.  
  https://github.com/NousResearch/hermes-agent/issues/19036

- **[Issue #17199] DeepSeek provider: model normalization and `base_url` override break custom endpoints** — Open, 3 comments. Users on Volcengine ARK and other custom endpoints cannot use the `deepseek` provider.  
  https://github.com/NousResearch/hermes-agent/issues/17199

- **[Issue #19043] `pyproject.toml exclude-newer = "7 days"` blocks dependency resolution** — Open. Build/install failures for stable packages.  
  https://github.com/NousResearch/hermes-agent/issues/19043

- **[Issue #19071] Custom providers: `/model` picker ignores live `/v1/models` endpoint** — Open, fix PR [#19072] submitted by same reporter.  
  https://github.com/NousResearch/hermes-agent/issues/19071

- **[PR #19070] fix: drop malformed image data URLs before provider calls** — Open. Malformed base64 images crash provider calls.  
  https://github.com/NousResearch/hermes-agent/pull/19070

**Medium (P3):**

- **[Issue #19039] CLI terminal interface hard to read on light background** — Open. TUI update broke light-theme readability.  
  https://github.com/NousResearch/hermes-agent/issues/19039

- **[Issue #19046] EXCESSIVE BRANDING DETECTED BY ANTHROPIC** — Open, marked `wontfix`. Anthropic flagged Hermes' system prompt branding as excessive third-party harness detection.  
  https://github.com/NousResearch/hermes-agent/issues/19046

**Long-standing unaddressed bugs (P2-P3, reported March):**
- [#2743] Command injection risk via `shell=True` (security)
- [#2744] `asyncio.gather` without `return_exceptions=True` discards results
- [#2745] Unchecked `str.split()[0]` access can raise `IndexError`
- [#2747] Swallowed exception hides local model auto-detection failures

---

## 6. Feature Requests & Roadmap Signals

**Likely to land in next release (based on active PRs):**

1. **Video processing support** – PR [#19074] adds `video_processing` config block. Inbound video via ffmpeg extraction is moving fast.
2. **Custom provider live model discovery** – PR [#19072] directly addresses [#19071], likely to merge quickly.
3. **ACP slash commands** – PR [#18956] adds `/effort` and `/show_thinking` for reasoning control in child agents.

**Strong community demand (not yet implemented):**

4. **A2A Protocol Support** ([#514]) – The single most-requested feature since March. Enables inter-agent communication across frameworks. High strategic value for Hermes as an "agent hub."
5. **Parallel task execution** ([#1468]) – Users want concurrent request handling instead of interrupt-or-queue.
6. **Multiple provider presets in YAML** ([#1891]) – Configuration ergonomics; users want switchable provider profiles.
7. **Richer local memory with semantic search** ([#2184]) – Beyond flat files, users want vector-based retrieval.

**Predictions:** A2A support may appear in a v0.8 or v0.9 release given sustained community interest (11 comments, 3 months old). The "Curator" background skill maintenance ([#16077], now closed) could also be merged soon as a stealth feature.

---

## 7. User Feedback Summary

**Pain Points:**

- **Configuration loss on update** ([#2293]) – Custom `config.yaml` values vanish after `hermes update`. User frustration: "I re-add them each time but it's annoying."
- **Anthropic excessive branding warning** ([#19046]) – User posted screenshot showing Anthropic API flagging Hermes' heavy system prompt branding. Marked `wontfix`, but indicates tension with API providers.
- **Light theme blind spot** ([#19039]) – TUI update broke usability for users on light backgrounds: "the default theme font is difficult to read."
- **Docker root access friction** ([#1947]) – User frustrated with `apt install` not working in Docker mode, deleted Discord over privacy concerns: "sorry if I don't ask in the Discord server but I deleted that spyware."

**Positive Signals:**

- Community is actively contributing skills (API testing, marketplace detail pages, Endless Terminals integration).
- Users are running Hermes in production-style multi-agent setups (orchestrator→worker, multi-backend terminals).

**Satisfaction Indicators:**
- Users filing detailed, well-structured bug reports and working directly on fixes.
- PRs being opened by the same users who reported bugs (e.g., [#19072] by 0oAstro).
- Feature requests are specific, well-argued, and aligned with project trajectory.

---

## 8. Backlog Watch

**Issues needing maintainer attention (long stale, high impact):**

1. **[Issue #1947] [Setup]: How do I run as root in Docker to get apt working?**  
   *Created Mar 18, last updated May 3*  
   *Comments: 4, No fix PR*  
   *The user is frustrated and explicitly anti-Discord. This is a documentation/setup gap that could alienate new users.*  
   https://github.com/NousResearch/hermes-agent/issues/1947

2. **[Issue #2293] Custom config.yaml values lost after `hermes update`**  
   *Created Mar 21, last updated May 3*  
   *Comments: 1, No fix PR*  
   *User reports reproducible loss of custom config on update. This is a core reliability issue for upgrades.*  
   https://github.com/NousResearch/hermes-agent/issues/2293

3. **[Issue #2743] Command injection risk via `shell=True`**  
   *Created Mar 24, last updated May 3*  
   *Comments: 2, No fix PR*  
   *Security vulnerability (P2) with multiple affected files. Has not been touched since filing.*  
   https://github.com/NousResearch/hermes-agent/issues/2743

4. **[Issue #2744] `asyncio.gather` without `return_exceptions=True`**  
   *Created Mar 24, last updated May 3*  
   *Comments: 2, No fix PR*  
   *Data-loss bug where one failing summarization task silently destroys all parallel results.*  
   https://github.com/NousResearch/hermes-agent/issues/2744

5. **[Issue #2184] Richer local memory — structured retrieval**  
   *Created Mar 20, last updated May 3*  
   *Comments: 1, No fix PR*  
   *Long-standing feature request for semantic search. No roadmap commitment visible.*  
   https://github.com/NousResearch/hermes-agent/issues/2184

---

**Overall assessment:** Hermes Agent is in a period of **high-velocity development** with significant community involvement. The project has healthy contributor diversity (many first-time and repeat contributors filing well-scoped PRs). However, the **backlog of unaddressed bugs** (especially security issues from March) and the **absence of a release** to bundle fixes are risk factors. The maintainers appear focused on gateway reliability, platform integration (Feishu, Telegram), and ACP/agent-to-agent features. A v0.7 or v0.8 release that consolidates the past two months of changes would significantly improve user trust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-05-03

## 1. Today's Overview
PicoClaw shows moderate development activity today with **6 open issues** and **8 pull requests** updated in the last 24 hours. A new **nightly build v0.2.8-nightly.20260503.a94ba821** was released, though labeled potentially unstable. The project is actively processing contributions with **2 PRs merged/closed** today, and several critical bug fixes are in the pipeline. Community engagement remains steady, with fresh issues and PRs arriving alongside long-standing items needing attention.

## 2. Releases
- **Nightly Build v0.2.8-nightly.20260503.a94ba821** (2026-05-03)
  - Automated nightly build from the `main` branch.
  - **Status:** Unstable – use with caution.
  - **Full Changelog:** [v0.2.8 → main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  - No breaking changes or migration notes documented.

## 3. Project Progress
**Merged/Closed PRs today (2):**
- **[#2747] chore: update WeChat group QR code** — Merged. Routine community maintenance; new QR code valid until May 9.
- **[#2746] fix(openrouter): document reasoning suppression preset** — Merged. Adds documentation and an example preset for suppressing reasoning output from OpenRouter reasoning models (e.g., `nvidia/nemotron-3-super-120b-a12b:free`).

**Open PRs newly updated today (6):**
- **[#2740] fix(deepseek): capture reasoning_content from streaming** — Fixes DeepSeek thinking-mode compatibility; streaming parser now captures `reasoning_content` tokens.
- **[#2750] fix(tools): exec guard must not treat relative paths as root-absolute** — Fixes path sanitization bug where relative paths like `archive/SKILL.md` were incorrectly resolved as filesystem root paths.
- **[#2462] fix codex streaming output and telegram duplicate retries** — Long-running PR addressing Android TV Termux compatibility, Telegram duplicate retries, and streaming fixes.
- **[#2630] fix(web): show full reply datetime and preserve it in chat history** — UI improvement for web chat timestamps.
- **[#2260] feat(providers): add xAI compat support** — Adds xAI provider via existing OpenAI-compatible path with routing, defaults, and tests.
- **[#2163] fix: maintain OAuth scopes during Google Antigravity token refresh** — Fixes PERMISSION_DENIED errors after token refresh for Google Antigravity.

## 4. Community Hot Topics
- **[#2421] [Feature]: Add email as native channel** (4 comments, since Apr 8)
  - Proposal to add email as a communication channel. Community discussion suggests demand from corporate/scientific users who cannot use chat platforms.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2421)

- **[#2546] [Feature] Support OAuth 2.1 + PKCE for MCP servers** (3 comments, since Apr 16)
  - Non-technical users want to add OAuth-protected MCP servers via dashboard URL paste (like Claude.ai). Signals demand for simplified connector management.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2546)

- **[#2720] [BUG] Singleton PID check doesn't verify process identity** (1 comment, high priority)
  - Stale PID from unrelated processes (e.g., `systemd-resolved`) causes gateway crash loops. A production stability concern affecting server deployments.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2720)

**Underlying needs:** Users increasingly demand enterprise-friendly features (email channel, OAuth for MCP, robust PID management) and improved cross-platform support (Android, Termux).

## 5. Bugs & Stability
**New Bug (2026-05-03):**
- **[#2749] [BUG] Bash evaluates relative path as absolute path** — **Medium severity.** When adding a shell tool with a relative path (e.g., `./archive/SKILL.md`), the bash tool evaluates it as absolute, causing workspace guard failures. **Fix PR #2750 already submitted.**
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2749) | [Fix PR](https://github.com/sipeed/picoclaw/pull/2750)

**Updated Existing Bugs:**
- **[#2720] Singleton PID check — High severity.** Stale PID from unrelated processes causes crash loop. No fix PR yet.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2720)
- **[#2668] Gemini API HTTP 400 on complex MCP JSON schemas** — ~~Stale~~. Blocks users using Gemini with Notion-like tools. No fix PR.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2668)
- **[#2665] Wrong Anthropic model IDs on Android** — ~~Stale~~. Dropdown uses dots instead of dashes (e.g., `claude-sonnet-4.6` vs `claude-sonnet-4-6`). Breaks model selection.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2665)

**Stability Note:** The nightly build is marked unstable; production users should pin to a stable release.

## 6. Feature Requests & Roadmap Signals
**Likely candidates for next release (v0.3.0 or later):**
- **Email as native channel** ([#2421]) — High community interest, enterprise use case. Could be targeted if maintainers prioritize channel expansion.
- **OAuth 2.1 + PKCE for MCP servers** ([#2546]) — Aligns with industry trend toward secure, user-friendly MCP integration; strong demand from non-technical users.
- **xAI provider support** ([#2260]) — Open PR, adding provider diversity. Likely to merge if reviews pass.

**Longer-term signals:**
- DeepSeek thinking-mode streaming fixes ([#2740]) suggest deeper provider compatibility work.
- Android/Termux stability improvements ([#2462]) indicate growing mobile deployment interest.

## 7. User Feedback Summary
**Pain points:**
- **Mobile/constrained environments:** User reported Telegram duplicate retries and Codex streaming issues on Android TV (Termux) — the "real-world" edge case highlights fragility under low-resource conditions.
- **Provider compatibility:** Gemini users blocked by complex JSON Schema validation; Anthropic model IDs broken on mobile; DeepSeek thinking tokens silently dropped.
- **Path handling:** Relative path evaluation as absolute breaks shell tool workflows — a surprising UX bug that undermines user trust in tool execution.
- **PID management:** Stale PID crashes are particularly painful for server operators and Docker users.

**Satisfaction indicators:**
- Active community contributions (8 PRs in 24h) suggest engaged developer base.
- Users are reporting bugs constructively with reproduction steps and environment details.

## 8. Backlog Watch
**Stale Critical Issues (no recent maintainer updates):**
- **[#2668] Gemini + MCP complex JSON schemas** (since Apr 25, 1 👍) — Blocks users on Gemini. No maintainer activity.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2668)
- **[#2665] Wrong Anthropic model IDs** (since Apr 24) — Simple fix but unattended. Affects all Anthropic users on Android.
  - [Issue Link](https://github.com/sipeed/picoclaw/issues/2665)

**Stale Open PRs needing maintainer review:**
- **[#2462] fix codex streaming output and telegram duplicate retries** (since Apr 9) — Large PR with multiple fixes; could unblock Android users.
  - [PR Link](https://github.com/sipeed/picoclaw/pull/2462)
- **[#2260] feat(providers): add xAI compat support** (since Apr 2) — Clean enhancement with tests; awaiting review.
  - [PR Link](https://github.com/sipeed/picoclaw/pull/2260)
- **[#2630] fix(web): show full reply datetime** (since Apr 23) — Simple UI improvement; no maintainer comment.
  - [PR Link](https://github.com/sipeed/picoclaw/pull/2630)
- **[#2163] fix: maintain OAuth scopes during Google Antigravity token refresh** (since Mar 29) — Longest-stale fix; impacts Google Cloud users.
  - [PR Link](https://github.com/sipeed/picoclaw/pull/2163)

**Recommendation:** Maintainers should prioritize [#2720] (PID crash, high priority) and [#2668] (Gemini block, popular) to stabilize the project. Stale PRs around 30+ days risk merge conflicts and contributor burnout.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-05-03

---

## Today's Overview

NanoClaw is experiencing a high-velocity development day with 13 issues updated and 17 pull requests active in the last 24 hours, signaling strong community and maintainer engagement. The project is processing a significant maintenance wave, with multiple critical bugs around database write permissions, CLI routing, and platform identifier consistency being actively resolved through merged fixes. A cluster of infrastructure issues—particularly around OpenRC compatibility and Docker startup failures—indicates the project is broadening its Linux distribution support but encountering edge cases in non-systemd environments. Community contributions remain robust, with feature work spanning Signal reactions, voice transcription V2, and a new DeltaChat channel adapter, while the maintainer team appears responsive, having merged or closed 7 PRs today.

---

## Releases

No new releases were published today. The project remains between releases, with the latest version being the current development trunk.

---

## Project Progress

**7 PRs were merged or closed today**, reflecting strong forward momentum:

- **Critical Infrastructure Fixes:**
  - [#2183] [CLOSED] **fix(host-sweep): reopen outbound DB as writable for orphan claim cleanup** — Resolves the `attempt to write a readonly database` crash that caused every host-sweep tick to fail. Direct fix for Issue [#2188] and [#2196].
  - [#2179] [CLOSED] **fix: sanitize OneCLI agent identifiers** — Fixes the 400 error where underscores in agent group IDs were rejected by OneCLI, replacing them with hyphens in `container-runner.ts`. Closes Issue [#2046].
  - [#2181] [CLOSED] **fix(poll-loop): slash commands silently broken on warm containers** — Fixes `/clear` and other slash commands being filtered out without acknowledgment on warm containers.
  - [#2190] [CLOSED] **fix: Atom feed (YouTube etc.) link element parsing** — Resolves `TypeError` crash in poller when `fast-xml-parser` returns link elements as objects instead of strings.

- **Feature & Migration:**
  - [#1931] [CLOSED] **feat: v1 → v2 migration to setup flow (experimental)** — Automated migration path for v1 installations detected by `bash nanoclaw.sh`.
  - [#2192] [CLOSED] **Add DeltaChat channel adapter** — New feature skill adding DeltaChat integration as a messaging channel.

- **Operational:**
  - [#2178] [CLOSED] **Andy ops fixes: 10 issues** — Batch fix addressing agent-browser failures, Maps 403 errors, Twitter token gaps, container timeouts, LinkedIn daily limits, email sending issues, stuck leads, complaint handling, Facebook queue posting, and CLI restart instability.

---

## Community Hot Topics

The most active discussions and high-interest items today:

### Issue Activity Leaders
- **[#2200] Telegram connection initialisation with OpenRC is failing** (new today, 0 comments) — Freshly reported blocking issue for non-systemd users. The Telegram pairing step hangs indefinitely because the service setup script expects systemd/launchd behavior but OpenRC never writes the pairing code to `data/telegram-pairings.json`.

- **[#2199] installation script - Docker failed to start in OpenRC** (new today, 0 comments) — Companion issue to #2200; the install script aborts when `tryStartDocker()` fails on OpenRC systems.

- **[#2189] NanoClaw Token/Perf Optimization Opportunities** (0 comments, high signal) — A detailed performance analysis from user `mnolet` calling out token inefficiency in non-coding agent scenarios. The author offers to submit PRs, suggesting this could lead to significant cost/throttling improvements.

### PR Activity Leaders
- **[#2203] feat(signal): inbound + outbound reaction support** (new today) — Adds full Signal reaction capabilities mirroring the chat-sdk-bridge pattern, enabling agents to add_reaction via MCP tool.
- **[#2201] feat: add opencode provider and custom model support** (new today) — Extends provider flexibility with OpenCode integration and custom model environment variable configuration.
- **[#1624] feat: Matrix E2EE channel + per-group model/effort configuration** (last updated today, open since April 4) — A long-running feature branch adding Matrix E2EE alongside per-group model/effort settings and MCP skill integrations.

### Underlying Needs Analysis
The concentration of OpenRC issues (#2199, #2200) reveals a **platform compatibility gap** as NanoClaw grows beyond systemd-based distributions. Users on Alpine Linux, Gentoo, and other OpenRC distros face complete installation failure. The token efficiency discussion (#2189) indicates **production cost concerns** as users deploy agents at scale, suggesting the project needs to optimize prompt construction and memory management. The cluster of WhatsApp/Signal routing bugs (#2193, #2194) points to **integration maturity challenges**—the adapter layer needs more thorough state persistence and identifier normalization.

---

## Bugs & Stability

### High Severity (Active or Unresolved)

| ID | Bug | Severity | Status | Fix PR |
|----|-----|----------|--------|--------|
| [#2200] | Telegram pairing hangs on OpenRC systems | **Blocker** — service never starts | Open, new today | None |
| [#2199] | Docker startup fails on OpenRC during install | **Blocker** — installation aborts | Open, new today | None |
| [#2193] | WhatsApp platform_id stored with channel prefix causes silent routing failure | **High** — messages silently fail to route | Open | None |
| [#2194] | WhatsApp LID→phone JID mapping lost on restart | **High** — routing failures after restart | Open | None |
| [#2196] | host-sweep: deleteOrphanProcessingClaims crashes on readonly DB | **High** — sweep failures block message delivery | Open | [#2183] merged (same root cause) |
| [#2186] | CLI channel: `namespacedPlatformId` produces `cli:local` breaks lookup | **High** — CLI chat times out completely | Open | [#2187] open |
| [#2202] | Signal V2 transcription dead-on-arrival without adapter attachment emission | **Medium** — feature not functional | Open | [#2202] open |

### Medium/Low Severity

| ID | Bug | Severity | Status |
|----|-----|----------|--------|
| [#2191] | `migrate-v2.sh` shows misleading error when sqlite3 CLI missing | **Medium** — poor error message, not data loss | Open |
| [#2195] | add-gmail-tool: no multi-account Gmail support | **Medium** — feature limitation, documented workaround possible | Open |
| [#2185] | CLAUDE.md never imports CLAUDE.local.md — per-group memory broken | **Medium** — memory fragments not loaded by SDK | Open |
| [#2184] | Poll-loop delivers error message before retry on stale session | **Low** — user-visible errors, not data loss | Open (PR [#2184]) |
| [#2182] | openInboundDb doesn't honor in-memory test DB | **Low** — test infra only | Open (PR [#2182]) |
| [#1017] | Add percentage to badge in repo-tokens | **Low** — enhancement, good first issue | Open (PR [#2198] open) |
| [#2189] | Token/perf optimization (20+ specific issues) | **Low-Medium** — cost/performance, not correctness | Open, offers to PR |

### Notable Regressions
No regressions from merged PRs were reported today. The [#2183] fix for orphan claim cleanup is expected to resolve the high-severity sweep crash without introducing new issues.

---

## Feature Requests & Roadmap Signals

### Most Likely for Next Release
1. **Signal Reaction Support** ([#2203]) — Inbound + outbound reactions nearly ready; aligns with existing chat-sdk-bridge contour.
2. **Signal V2 Voice Transcription** ([#2202], [#2003]) — Container-side transcription sovereignty model; follow-up to enable Signal in V2 path.
3. **OpenCode Provider + Custom Models** ([#2201]) — Provider extensibility via env-configurable custom models; straightforward addition.
4. **DeltaChat Channel** ([#2192]) — Already merged; new messaging channel live in trunk.
5. **CLI Platform ID Fix** ([#2187]) — Direct fix for the broken CLI channel; high priority for maintainers.

### Moderate Probability
6. **Per-group model/effort configuration** ([#1624]) — Long-running Matrix E2EE PR includes this; may land separately if Matrix stalls.
7. **Automated v1→v2 Migration** ([#1931]) — Already merged experimentally; may see refinement in upcoming release.
8. **Multi-account Gmail Support** ([#2195]) — Requested feature; need to design OneCLI stub pattern for multiple OAuth connections.

### Lower Probability / Longer Horizon
9. **Token/Performance Optimization** ([#2189]) — Community-driven optimization effort; likely multiple PRs over time rather than single release.
10. **Matrix E2EE Channel** ([#1624]) — 30 days open; complex E2EE integration may need more review.

---

## User Feedback Summary

### Positive Signals
- **"Really enjoying playing with it"** — `mnolet` (#2189) expresses enthusiasm despite token efficiency concerns, indicative of strong product-market fit for power users.
- **DeltaChat integration merged** — Community demand for additional messaging channels is being actively met.
- **Prompt maintainer response** — Multiple bugs from yesterday (#2188, #2196) already have merged fixes today (#2183), demonstrating 24-hour turnaround on critical issues.

### Pain Points & Dissatisfaction
- **OpenRC users blocked entirely** — `markhawrylak` (#2199, #2200) cannot install or pair Telegram on OpenRC systems. The systemd-centric design currently excludes significant Linux user base.
- **WhatsApp integration fragile** — `mshirel` reports two distinct bugs (#2193, #2194) that cause silent message routing failures. The lack of persistence for LID mappings and platform_id prefix issues suggests the WhatsApp adapter needs a reliability pass.
- **Token costs at scale** — `mnolet` (#2189) provides detailed analysis showing NanoClaw is "very token inefficient" in non-coding agent contexts, with cost/throttling implications for production deployments.
- **Misleading error messages** — `Omee11` (#2191) wasted debugging time on missing `sqlite3` CLI dependency because the error message pointed at database corruption instead.
- **Per-group memory not working** — `tianglim` (#2185) reports that the documented CLAUDE.local.md import pattern doesn't function, breaking the intended memory customization workflow.

### Real-World Use Cases Emerging
- **Multi-account enterprise setups** (#2195) — Users running personal + work Gmail simultaneously need documented multi-account patterns.
- **Non-US infrastructure** — The Atom feed parsing fix (#2190) was reported by a Japanese contributor (`openclaw-shi`), indicating international adoption.
- **Large-scale operations** — The Andy ops batch fix (#2178) references 10 distinct operational failures in production, including CRM, lead scoring, social media scheduling, and customer complaint handling.

---

## Backlog Watch

### High Priority / Needs Maintainer Attention

| Item | Days Open | Last Updated | Risk | Notes |
|------|-----------|--------------|------|-------|
| [#1624] **Matrix E2EE + per-group config** | 29 days | Today | Medium | Large PR; maintainer review stalled; community interested in per-group config feature even without Matrix integration |
| [#2193] **WhatsApp platform_id prefix routing** | 1 day | Today | High | Silent routing failures; fix affects core adapter reliability |
| [#2194] **WhatsApp LID mapping persistence** | 1 day | Today | High | Data loss on restart; needs in-memory cache rebuild mechanism |
| [#2185] **CLAUDE.local.md never imported** | 1 day | Today | Medium | Breaks documented per-group memory customization; fundamental UX feature |
| [#2195] **Multi-account Gmail support** | 1 day | Today | Low-Med | Feature request; no workaround documented; growing need for enterprise users |
| [#2186] **CLI channel broken** | 1 day | Today | High | Core channel non-functional; fix PR [#2187] open and ready |
| [#2189] **Token/perf optimization** | 1 day | Today | Medium | Community contributor offering PRs; maintainer should respond to maintain engagement |

### At-Risk Items for Maintainer Burnout
- **OpenRC support cluster** (#2199, #2200) — Two blocking bugs for non-systemd users; no fix PRs yet. These could create negative word-of-mouth in Alpine/Gentoo communities.
- **Token efficiency** (#2189) — The author explicitly offers to "submit PRs"; delayed response risks losing motivated contributor.

### Items Requiring Design Decision
- **WhatsApp adapter architecture** (#2193, #2194) — The root causes (platform_id prefix handling, LID cache persistence) suggest need for broader design discussion on adapter state management rather than point fixes.
- **Multi-auth patterns** (#2195, #2201) — Both Gmail multi-account and custom model provider support point to a need for more flexible credential and configuration management in the framework layer.
- **Service manager abstraction** (#2199, #2200) — The OpenRC issues reveal the service setup code is tightly coupled to systemd; a platform-agnostic service manager abstraction would prevent recurring issues with launchd, runit, s6, etc.

---

*Generated from GitHub data at github.com/qwibitai/nanoclaw. All links are to issues and pull requests on that repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-03

## Today's Overview

Project activity is **high**, with 15 pull requests updated in the last 24 hours, the majority (14) merged or closed. Five issues remain open, all actively discussed. While no new release was cut, the merged PRs represent significant progress across security hardening, compatibility fixes, and HTTP/1.1 keep-alive support. The maintainers appear to be aggressively clearing a PR backlog, with several old feature PRs (e.g., #770, #771, #780) being finalized and merged. Community engagement is moderate, with issues seeing light but targeted discussion.

## Releases

No new releases were published.

## Project Progress

The following 14 pull requests were **merged or closed** in the last 24 hours, advancing the project substantially:

- **[#880 - feat(security): wrap web_fetch and web_search output with anti-spoofing boundaries](https://github.com/nullclaw/nullclaw/pull/880)** — Merged. Adds external content wrapping with random hex boundary IDs (16 chars), Unicode homoglyph folding, and marker sanitization to prevent injection attacks through tool output.
- **[#856 - fix(service): harden SysVinit script for RTC-less hardware](https://github.com/nullclaw/nullclaw/pull/856)** — Merged. Improves boot ordering, adds `Should-Start: ntp ntpsec` to LSB headers, and other reliability fixes for devices without a real-time clock.
- **[#876 - fix(compat): replace readSliceShort with readVec in Stream.read](https://github.com/nullclaw/nullclaw/pull/876)** — Merged. Fixes a blocking bug where HTTP/1.1 keep-alive clients (curl) would cause the stream to hang indefinitely.
- **[#873 - fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin](https://github.com/nullclaw/nullclaw/pull/873)** — Merged. Critical regression fix: 100% CPU utilisation on the gateway thread (busy-spin on EAGAIN) and silent Mattermost messaging failure.
- **[#872 - fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin](https://github.com/nullclaw/nullclaw/pull/872)** — Closed (likely superseded by #873).
- **[#780 - feat(api): REST Admin API — config mutation, MCP servers, agent sessions, memory, history, and capabilities](https://github.com/nullclaw/nullclaw/pull/780)** — Merged. Completes the REST Admin API surface with config mutation, MCP server inspection, session management, memory CRUD, and conversation history.
- **[#771 - feat(api): REST Admin API — channel status and skill management endpoints](https://github.com/nullclaw/nullclaw/pull/771)** — Merged. Adds endpoints for listing all channel accounts with health status and enabling/disabling skills.
- **[#770 - feat(api): REST Admin API — runtime status, config read, model listing, and cron job management](https://github.com/nullclaw/nullclaw/pull/770)** — Merged. Adds opt-in REST Admin API under `/api/` with zero new dependencies.
- **[#877 - fix(channels/mattermost): finalize allocating writer body before curlPost](https://github.com/nullclaw/nullclaw/pull/877)** — Merged. Fixes an issue where POST requests to Mattermost were always sending empty bodies after Zig 0.16 migration.
- **[#761 - fix(cli): filter streamed tool-call markup](https://github.com/nullclaw/nullclaw/pull/761)** — Merged. Wraps CLI streaming output with `streaming.TagFilter` so raw `<tool_call>` blocks don't leak into terminal output.
- **[#685 - fix(error_classify): handle msg field and image+not-supported pattern](https://github.com/nullclaw/nullclaw/pull/685)** — Merged. Improves error classification for providers that deviate from the OpenAI error schema.
- **[#875 - security: add 3-tier risk classification and exec-prefix stripping](https://github.com/nullclaw/nullclaw/pull/875)** — Merged. Introduces a medium-risk tier for network-accessible commands (curl, wget, nc, scp, etc.), making them usable in supervised mode.
- **[#687 - feat(gateway): make HTTP body size limit and request timeout configurable](https://github.com/nullclaw/nullclaw/pull/687)** — Merged. Adds `gateway.max_body_size_bytes` and `gateway.request_timeout_ms` configuration options.
- **[#686 - feat(a2a): multi-modal support — agent card capability, inlineData forwarding, vision probe](https://github.com/nullclaw/nullclaw/pull/686)** — Merged. Adds end-to-end multi-modal (image) support over the A2A protocol.

**Notable:** One PR remains open:
- **[#878 - fix(compat): use nanosleep on POSIX in thread.sleep to actually suspend OS thread](https://github.com/nullclaw/nullclaw/pull/878)** — Open. Addresses a blocking regression where the gateway's accept loop wastes CPU instead of suspending.

## Community Hot Topics

- **[#882 - sandbox: default to Landlock on Linux, stop probing external tools at startup](https://github.com/nullclaw/nullclaw/issue/882)** — **Most recently created (today)**. Proposes replacing the current sandbox backend auto-detection (which spawns child processes for firejail, bwrap, and docker at every startup) with a Landlock-on-Linux default. The issue references recurring problems (#...) with the probing approach. Maintainer attention evident — likely to be fast-tracked.

- **[#820 - How to install Zig on Debian?](https://github.com/nullclaw/nullclaw/issue/820)** — 4 comments. A documentation issue from a user confused about installation requirements, specifically whether Docker is mandatory. Suggests onboarding friction for non-Zig-savvy users.

- **[#871 - web_search impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issue/871)** — 2 comments. Reports that the current web_search implementation is unusable for the intended "weak, cheap, low-resource device" use case due to requiring Brave Search API keys or DuckDuckGo's rate-limited approach.

## Bugs & Stability

| Issue | Severity | Summary | Fix PR exists? |
|-------|----------|---------|----------------|
| [#882](https://github.com/nullclaw/nullclaw/issue/882) | **High** | Sandbox backend probing spawns child processes at every startup, causing repeated failures (refs #...) | No, but proposed as feature |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | **Medium-High** | `thread.sleep()` does not suspend OS thread on POSIX, causing gateway accept loop CPU waste | **Open PR exists** (#878) |
| [#865](https://github.com/nullclaw/nullclaw/issue/865) | **Medium** | CLI shows raw control characters instead of handling arrow keys for history/cursor movement | No |
| [#866](https://github.com/nullclaw/nullclaw/issue/866) | **Medium** | `curl post` fails even when curl is on the allowlist — regression | No |
| [#871](https://github.com/nullclaw/nullclaw/issue/871) | **Medium** | web_search unusable on low-resource devices without direct DuckDuckGo support | No |

**Critical retrospectives:** The two #873/#872 Mattermost/HPCU regressions (100% CPU, silent message failure) were **resolved today**, but their impact was severe. Operators on Zig 0.16 should ensure they are on the latest `main`.

## Feature Requests & Roadmap Signals

- **Sandbox default to Landlock** (#882) — This is likely to land in the next release. The issue was filed today and references existing probe-related problems, suggesting high maintainer receptivity.
- **Direct DuckDuckGo support in web_search** (#871) — Would make the tool viable on resource-constrained devices without requiring third-party API keys. High alignment with the project's stated use case.
- **Documentation: Zig installation on Debian** (#820) — A quick-win documentation fix. Clarifying whether Docker is required could significantly reduce onboarding friction.
- **CLI keybinding support** (#865) — A usability enhancement for the interactive CLI. Not critical but would improve developer experience.
- **curl allowlist regression** (#866) — Must be fixed; breaks a fundamental allowed-command use case.

**Prediction for next version (likely v0.x):** Landlock sandbox default + DuckDuckGo fallback for web_search + CLI keybinding fix + curl allowlist regression fix.

## User Feedback Summary

- **Pain point: high barrier to entry.** User @eabase (issues #820, #865, #866) is encountering multiple documentation and usability bugs after install, suggesting the first-time experience is rough.
- **Pain point: resource-constrained performance.** User @uMendex (#871) explicitly describes the project's intended use case (weak, cheap, low-resource devices) and finds the web_search tool unusable for that purpose. This is a gap between vision and implementation.
- **Satisfaction: security improvements welcome.** The rapid merging of security-focused PRs (anti-spoofing, risk classification, sandbox defaults) suggests maintainers are responsive to security concerns.
- **Frustration: regressions from Zig 0.16 migration.** Multiple PRs (#873, #877) describe serious regressions affecting all Mattermost-connected agents in production. While fixed, the frequency of post-migration issues may erode confidence.

## Backlog Watch

- **[#820 - "How to install Zig on Debian?"](https://github.com/nullclaw/nullclaw/issue/820)** — Open since 2026-04-14 (19 days). A simple documentation question, but unanswered by maintainers. User confusion about Docker requirements should be resolved.
- **[#866 - "curl post fails, even if curl is on allowlist"](https://github.com/nullclaw/nullclaw/issue/866)** — Open since 2026-04-23 (10 days). Marked with a 👍 reaction (only issue with a reaction). A functional regression affecting command execution, yet no maintainer response.
- **[#865 - "CLI shows ctrl characters"](https://github.com/nullclaw/nullclaw/issue/865)** — Open since 2026-04-23 (10 days). Maintainer has not engaged.
- **[#871 - "web_search impractical on low-resource devices"](https://github.com/nullclaw/nullclaw/issue/871)** — Open since 2026-04-25 (8 days). Maintainer has not engaged.

**Verdict:** While the PR merge rate is exceptional, the issue response time is concerning. Three user-reported bugs (#865, #866, #871) have been unanswered by maintainers for over a week. #820 (documentation) has gone unanswered for 19 days. This suggests that either (a) maintainers are fully occupied with the PR backlog, or (b) the project lacks a triage process for incoming issues. Either way, this is a **moderate project-health risk** — unanswered issues erode contributor and user trust.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-03

## Today's Overview

IronClaw is in an extremely high-activity phase, driven primarily by the "Reborn" architecture rewrite — a fundamental re-architecting of the agent runtime's turn coordination, persistence, and execution model. The project saw 20 issues updated in the last 24 hours (15 open, 5 closed) and 47 pull requests updated (41 open, 6 merged/closed), indicating sustained engineering velocity. A wave of 10 closely related Reborn design issues was filed on 2026-05-02, signaling that the team is actively defining the next set of service contracts before implementation. Additionally, a significant burst of PRs from a new contributor (abbyshekit) landed a comprehensive NEAR Intents trading agent feature stack, suggesting growing community engagement with the platform's financial use cases. No new releases were published today.

## Releases

No new releases were published in the last 24 hours. The latest release remains `ironclaw-v0.27.0-8-g749fe9da` (referenced in bug #3214). No migration notes or breaking changes to report.

## Project Progress

**Closed/merged items today:**
- **#3214** (bug, closed) — `thoughtSignature dropped in Cloud Code SSE handler` — prior fixes #1565 and #1752 were incomplete. A fix PR exists (#3215).
- **#2818** (bug, closed) — `installer for v0.26.0 fails on x86_64-unknown-linux-gnu` — installer regression resolved.
- **#3144** (enhancement, closed) — `Wire EnforceResourceCeiling into runtime and sandbox enforcement` — Reborn resource ceiling enforcement hooked in.
- **#3147** (enhancement, closed) — `Wire built-in obligation audit records to production event sinks` — Reborn audit recording infrastructure connected.
- **#3145** (enhancement, closed) — `Define background process obligation reconciliation lifecycle` — Reborn obligation lifecycle for background execution defined.

**Key features advanced:**
- **Reborn architecture (10 new issues filed 2026-05-02):** The team is systematically decomposing the next major Reborn subsystem — turn coordination and persistence. Issues #3193, #3195, #3198, #3199, #3202, #3204 define contracts for conversation binding, crate boundaries, public APIs, execution models, and storage schemas. This follows the recent closure of obligation-wiring items (#3144, #3147, #3145), suggesting the Reborn initiative is moving from obligation/infrastructure into the core turn-loop design phase.
- **NEAR Intents Trading Agent (7 PRs from abbyshekit):** A comprehensive financial toolchain was contributed — DCA backtesting (#3220), strategy validation (#3222), natural-language prompt compilation (#3221), basket DCA (#3224), mission scaffold generation (#3223), trial mode (#3218), and paid research layer (#3211). These are pure-deterministic, zero-LLM-call tools that form an autonomous trading skill on the NEAR Intents protocol.
- **CLI tooling:** New `ironclaw backup --quick` (#3178) and `ironclaw import backup` (#3186) for portable state snapshots/migration. New `ironclaw insights` (#3177) for usage analytics. New `ironclaw verify` (#3189) for layered project verification.
- **Event projections:** PR #3212 (zmanian) adds an `ironclaw_event_projections` service with `EventProjectionService`, replay support, and thread/run status projections — a Reborn dependency.
- **Chat UX:** PR #2700 (zmanian) fixes descriptive chat titles (#2237) instead of hex hash IDs, working after gateway/web handler refactors.

## Community Hot Topics

**Most active issues:**

1. **#3016 — "[Reborn] Reborn cutover blocker: add reference AgentLoopHost facade"** (3 comments, 0 👍)
   *Author: serrrfirat | Created: 2026-04-28 | Updated: 2026-05-02*
   The most-commented issue this period. This is a parent blocker for the Reborn cutover, linking to eight child tracking issues covering turn coordination, persistence, and loop contracts. The underlying need is to create a facade that decouples agent loop execution from the kernel, enabling multiple loop models (chat, coding, batch).
   *Link: https://github.com/nearai/ironclaw/issues/3016*

2. **#90 — "feat: Audio pipeline (speech-to-text, text-to-speech, voice note handling)"** (2 comments, 0 👍)
   *Author: ilblackdragon | Created: 2026-02-14 | Updated: 2026-05-02*
   A long-running feature request (since February) for audio infrastructure. Comments suggest it's being revisited. STT is P1-P2 (prerequisite for WhatsApp voice notes); TTS is P3. The underlying need is cross-cutting audio support that multiple channels and automation features depend on.
   *Link: https://github.com/nearai/ironclaw/issues/90*

3. **#2344 — "[QA] Staging Web UI shows console errors on page load"** (1 comment, 0 👍)
   *Author: joe-rlo | Created: 2026-04-11 | Updated: 2026-05-02*
   Persistent staging web UI issues (TypeError, ReferenceError, CSP violations) on `agent-stg.near.ai`. Still open after three weeks. Low engagement despite being tagged with `bug_bash`.
   *Link: https://github.com/nearai/ironclaw/issues/2344*

**Most active PRs (highest comments):**
All top-20 PRs by comment count show zero comments in the data, indicating minimal community discussion on PRs today. The PRs are dominated by abbyshekit's new contributor work (14 of the top 20) and zmanian's core contributions (2 of top 20). This suggests code review may be happening offline or via other channels.

## Bugs & Stability

**New/updated bugs today (ranked by severity):**

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | #3214 (CLOSED) | `thoughtSignature dropped` causing HTTP 400 `INVALID_ARGUMENT` on Gemini 3.x tool calls. Prior fixes #1565 and #1752 were incomplete — the upstream cause (SSE handler dropping `thought_signature`) was never fixed. Affects all Gemini 3.x models. | ✅ #3215 (open) |
| **High** | #3201 (OPEN) | Tool use for Deepseek (`deepseek-v4-flash`) not working. Agent returns error after "ask recent news" prompt. LLM provider integration breakage. | ❌ None yet |
| **Medium** | #2344 (OPEN) | Web UI console errors (TypeError, ReferenceError, CSP violations) on staging. Open since 2026-04-11. | ❌ None yet |
| **Medium** | #3083 (referenced) | Duplicate user creates on admin UI — fast triple-click fires three POSTs. | ✅ #3209 (open, debounce fix) |

**Other reliability issues:**
- #3132 (referenced in PR #3206): LLMs (DeepSeek, Kimi, some Gemini revisions) serialize numeric tool params as strings, causing `strict_u64` rejection. Fix coerces numeric strings gracefully.
- #3011 (referenced in PR #3216): `ironclaw run` produces zero bytes on stderr at any `RUST_LOG` level, breaking systemd/journald/CloudWatch integration.
- #2963 (referenced in PR #3217): Docker Hub image name is `nearaidev/ironclaw`, but docs reference `nearai/ironclaw` leading to pull access denied.

**Notable closed bugs:**
- #2818 (installer failure on x86_64 Linux) — resolved.
- #3214 (Gemini thought-signature) — closed, fix in review (#3215).

## Feature Requests & Roadmap Signals

**Likely for next release:**
1. **Reborn Turn Coordination** — The 10+ issues filed on 2026-05-02 define core contracts (conversation binding, crate boundaries, public API, execution model, persistence schema). Given the team is closing obligation-wiring items (#3144, #3147, #3145) and filing turn contracts, this subsystem is likely targeting the next major release.
2. **NEAR Intents Trading Agent** — Seven PRs from abbyshekit were all filed 2026-05-02/03 and open. These form a complete financial toolchain that, if merged, would be the flagship autonomous trading capability for the platform.
3. **ARM64 Docker support** — Issue #3168 requests `linux/arm64` Docker images since Cranelift already supports aarch64. Relatively straightforward change (toolchain + CI).
4. **CLI migration/insights** — New `backup`/`import`/`insights`/`verify` commands (#3177, #3178, #3186, #3189) are all open for review — likely candidates for the next minor release.

**Longer-term signals:**
- #90 (Audio pipeline) — last updated 2026-05-02 after being dormant since February. The renewed attention on STT suggests WhatsApp voice-note support may be in the product roadmap.
- #3169 (Process-owned runtime handoff ids for concurrent background fan-out) — an advanced Reborn feature that depends on the current substrate PRs landing first.

## User Feedback Summary

**Pain points (real incidents):**
1. **Gemini 3.x tool calls broken** (#3214) — prior "fixes" didn't actually fix the problem. User (thomasmaerz) experienced persistent HTTP 400 errors on valid tool calls.
2. **DeepSeek tool use non-functional** (#3201) — user (CaveNightingale) reported complete inability to use tools with DeepSeek models on latest commit.
3. **Docker install instructions wrong** (#2963) — user (magnusviri) hit "pull access denied" because docs reference the wrong Docker Hub repo name.
4. **No ARM64 Docker support** (#3168) — user (gcaguilar) cannot run official image on Apple Silicon / ARM64 Linux hardware.
5. **Staging web UI broken** (#2344) — QA user (joe-rlo) reports console errors on every page load that haven't been fixed in three weeks.

**User satisfaction signals:**
- High engagement from new contributor abbyshekit (14 PRs in 2-3 days) suggests the platform's financial/portfolio tooling is attracting developers.
- zmanian's continued core contributions (PR #2700, #3212) indicate active maintainer commitment to UI polish and event infrastructure.

**Notable:**
- No negative sentiment in comments or reactions — most issues have 0 👍 reactions, suggesting low community visibility or that users aren't upvoting.

## Backlog Watch

**Issues needing maintainer attention:**

| Issue | Age | Status | Why Watching |
|-------|-----|--------|--------------|
| #2344 (WEB UI console errors) | 22 days (2026-04-11) | OPEN, 1 comment | Three weeks without resolution. Tagged `bug_bash` but no fix PR exists. Regression on staging deployment affecting all web users. |
| #90 (Audio pipeline) | 78 days (2026-02-14) | OPEN, 2 comments | Cross-cutting feature request that blocks WhatsApp voice notes. Recently updated (2026-05-02) but no committed implementation. Stale risk if team doesn't prioritize. |
| #3201 (DeepSeek tool use) | 1 day (2026-05-02) | OPEN, 0 comments | Fresh high-severity bug with no fix PR. LLM provider integration issues are urgent for multi-provider users. |
| #3169 (Concurrent handoff ids) | 2 days (2026-05-01) | OPEN, 0 comments | Advanced Reborn design item with no PR or assignee. Could become a bottleneck for background fan-out use cases. |

**PRs needing attention:**
- #2700 (chat titles fix) — open since 2026-04-20, still not merged despite being a re-creation after gateway refactors. Core UX issue that affects all web users.
- All 14 abbyshekit PRs filed 2026-05-02/03 — massive new contributor contribution that needs review bandwidth. Risk of community contributor attrition if review is slow.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-03

## Today's Overview
LobsterAI is in a low-activity period with no new issues or releases in the last 24 hours. The project shows one open pull request addressing a critical configuration persistence bug, which has drawn no community engagement yet. No open issues exist, indicating either a well-triaged backlog or a temporary lull in bug reporting. The single active PR suggests maintainers are focused on stability improvements rather than new features. Overall project health appears stable, though the lack of recent releases or issues may signal a slowdown in development velocity.

## Releases
No new releases were published in the last 24 hours. The last release remains unavailable in this data window.

## Project Progress
No pull requests were merged or closed today. The only active PR (#1879 by gvaiis) is open and under review, targeting both the main and openclaw code areas. It addresses a functional regression where LobsterAI's configuration sync operation overwrites manually-added plugin load paths in `openclaw.json`, effectively discarding community plugin installations performed via `pm install`. The fix aims to preserve user-manually-added paths during `OpenClawConfigSync.sync()`.

## Community Hot Topics
No issues or PRs generated community discussion today. The lone PR (#1879) has zero comments and reactions, suggesting it is newly created or awaiting maintainer review. This absence of community engagement may indicate low awareness of the bug or that users have not yet encountered the issue in production.

## Bugs & Stability
**Critical:** PR #1879 describes a data-loss bug where `OpenClawConfigSync.sync()` silently replaces all `plugins.load.paths` entries with only LobsterAI-managed third-party extension directories. User-added paths (e.g., for community plugins like `memory-lancedb-pro`) are permanently discarded on each sync operation. This is a configuration corruption issue that can break existing plugin setups without warning. A fix PR (#1879) exists but has not been merged.

No other bugs, crashes, or regressions were reported today.

## Feature Requests & Roadmap Signals
No feature requests were submitted today. The active bug fix PR indirectly signals that configuration stability and preservation of user customizations is an area of focus. Future releases may include improved configuration merge logic or validation warnings when sync operations are about to overwrite non-managed paths. No roadmap or version target was indicated.

## User Feedback Summary
No direct user feedback was captured in the last 24 hours. The lone PR (#1879) represents a reported user pain point: the silent destruction of manually-configured plugin paths during automated syncs. This suggests users value the ability to install and maintain community plugins outside of LobsterAI's managed ecosystem, and expect configuration tooling to respect manual overrides.

## Backlog Watch
No issues are outstanding with maintainer attention required. PR #1879 is newly opened (May 2) and has not yet received any maintainer comments or reviews. If it remains unattended for an extended period, it could represent a growing risk for users relying on community plugins. No other long-unanswered items exist in this data window.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-03

## 1. Today's Overview
Moltis shows **moderate activity** over the past 24 hours, with **4 open issues** and **3 pull requests** updated. All issues were created today (2026-05-02), indicating an active community filing bugs, feature requests, and documentation corrections. No new releases were published. The project is processing a promising multi-backend sandbox PR (#942) and a Matrix OIDC debug logging fix (#957), but faces attention demands from several fresh reports, including a critical DeepSeek reasoning bug and an outdated documentation reference.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
- **PR #339** — [CLOSED] feat(i18n): add zh-TW Traditional Chinese locale support  
  Merged today (updated 2026-05-02). This long-running PR (opened March 5) adds full Traditional Chinese (Taiwan) translation for both macOS and web apps, including locale detection and language selection UI. This completes a significant i18n milestone.  
  [GitHub](https://github.com/moltis-org/moltis/pull/339)

- **PR #957** — [OPEN] fix(matrix): add debug logging for OIDC registration and deduplicate redirect normalization  
  Author: penso | Updated: 2026-05-02  
  Adds debug logging to help operators diagnose `invalid_redirect_uri` failures in the Matrix OIDC registration flow and cleans up loopback redirect normalization. Not yet merged.  
  [GitHub](https://github.com/moltis-org/moltis/pull/957)

- **PR #942** — [OPEN] feat(sandbox): remote & multi-backend sandbox support (Vercel, Daytona, Firecracker)  
  Author: penso | Updated: 2026-05-02 | 0 comments  
  Adds support for cloud sandbox backends where Docker-in-Docker is unavailable. Inspired by sandcastle's provider architecture. Still open after 3 days — may benefit from reviewer attention.  
  [GitHub](https://github.com/moltis-org/moltis/pull/942)

## 4. Community Hot Topics
- **Issue #959** — [bug] DeepSeek - Error: The reasoning_content in the thinking mode must be passed back to the API  
  Author: krokozha | Comments: 1 | 👍: 0 | Created: 2026-05-02  
  **Likely highest-urgency issue.** The user reports that DeepSeek's thinking mode requires `reasoning_content` to be echoed back to the API, and Moltis is failing to do so. This could break core reasoning functionality for all DeepSeek-integrated users. Needs immediate attention.  
  [GitHub](https://github.com/moltis-org/moltis/issues/959)

- **Issue #960** — Add SwarmScore — Portable Trust Rating for AI Agents  
  Author: bkauto3 | Comments: 0 | 👍: 0 | Created: 2026-05-02  
  External proposal to integrate SwarmScore—a portable trust/reputation system based on verified execution history. Indicates community interest in agent-to-agent trust mechanisms. No maintainer response yet.  
  [GitHub](https://github.com/moltis-org/moltis/issues/960)

- **Issue #958** — [docs] Voice Services > Local TTS Provider Setup - links to unmaintained/archived repos  
  Author: Thndr | Comments: 0 | 👍: 0 | Created: 2026-05-02  
  Documentation points to abandoned Coqui TTS repository. Potential user friction for anyone trying local TTS.  
  [GitHub](https://github.com/moltis-org/moltis/issues/958)

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **Critical** | #959 | DeepSeek `reasoning_content` must be passed back to API — broken thinking mode | No |
| **Medium** | #958 | Docs link to archived/unmaintained repos for local TTS setup | No |

**Ranking rationale:** #959 breaks core agent reasoning capabilities for DeepSeek users. #958 is a documentation issue causing dead ends but not runtime failure.

## 6. Feature Requests & Roadmap Signals
- **Issue #956** — [Feature]: Add image generation support (gpt-image-2) via OpenAI Codex OAuth  
  Author: bashrusakh | Created: 2026-05-02  
  User requests integration of OpenAI's `gpt-image-2` model via Codex OAuth. Signals demand for multimodal capabilities. Could align with the ongoing sandbox infrastructure PR (#942) to provide a secure environment for image generation.  
  [GitHub](https://github.com/moltis-org/moltis/issues/956)

- **Issue #960** — SwarmScore portable trust rating  
  Suggests the community is looking toward agent-to-agent reputation systems. While not yet prioritized, it reflects a broader trend in multi-agent frameworks.

**Prediction for next release:** If #942 (multi-backend sandbox) merges, image generation and other resource-intensive features become more feasible. The DeepSeek fix (#959) is likely to block shipping before resolution.

## 7. User Feedback Summary
- **Pain point (high):** DeepSeek thinking mode broken (#959) — user had to file a bug after presumably encountering runtime errors in production chats.
- **Pain point (medium):** Outdated documentation for TTS setup (#958) — user frustrated by links leading to archived repositories with no active development.
- **Use case signal:** Request for SwarmScore (#960) suggests users are building agent swarms and need reputation systems for trust.
- **Use case signal:** Image generation request (#956) indicates a desire for multimodal output within the assistant.

## 8. Backlog Watch
- **PR #942** — feat(sandbox): remote & multi-backend sandbox support  
  Opened 2026-04-30, updated 2026-05-02, 0 comments, not yet merged. A significant architectural change that could unblock several feature requests. Needs maintainer review and testing feedback.  
  [GitHub](https://github.com/moltis-org/moltis/pull/942)

- **PR #957** — fix(matrix): add debug logging for OIDC registration  
  Opened yesterday, no comments yet. Small but useful debugging improvement for Matrix OIDC. Should not require much review time.  
  [GitHub](https://github.com/moltis-org/moltis/pull/957)

**No long-unanswered issues identified** — all open issues are from May 2, indicating the maintainers are keeping pace with incoming reports.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-03

## 1. Today's Overview
CoPaw shows moderate activity with 13 issues and 15 PRs updated in the last 24 hours, indicating a steady development pace. The project has no new releases today, but the community is highly engaged—many open issues focus on quality-of-life improvements (model fallback, conversation management) and bug reports. There are 10 open PRs under review, including several first-time contributor submissions, signaling healthy community growth. One critical bug report about MCP client TaskGroup causing agent freezes remains open and unassigned.

## 2. Releases
No new releases today.

## 3. Project Progress
**Merged/Closed PRs Today (5 total):**

- **[#4013] docs(website): update documentation to v1.1.5** — Merged; documentation updated to match version 1.1.5.
- **[#1642] feat(error code): add error code** — Closed; adds structured error codes for better debugging.
- **[#1055] feat: add MiniMax as a built-in provider** — Merged (first-time contributor); adds MiniMax M2.5 and M2.5-highspeed as built-in OpenAI-compatible providers. Adds comprehensive unit tests.
- **[#559] fix: remove failed user messages from memory to prevent session poisoning** — Merged; prevents corrupted memory persistence when user messages cause exceptions (e.g., malformed image URIs).
- **[#4012] chore(version): bumping version to 1.1.6b1** — Closed; version bumped to 1.1.6 beta 1, suggesting a new release may be imminent.

## 4. Community Hot Topics
Most active discussions based on comments and reactions:

- **[#3640] [Bug]: MCP client TaskGroup异常导致Agent假死** — 6 comments. User reports total unresponsiveness on DingTalk/WeChat after running a task; program doesn't crash but stops responding. No fix PR exists yet. **Severity: High** — this blocks core communication channels.
- **[#1327] [Feature]: Model fallback chain for automatic rate limit handling** — 5 comments. Long-standing request (since March) for automatic model fallback when primary model hits rate limits or disruptions. Directly related to two newer issues: **#4011** (fallback model option) and **#3789** (model rollback). Strong signal for roadmap priority.
- **[#4010] [Feature]: 渠道端可打断/终止功能** — 2 comments. User requests ability to interrupt/stop agent execution from WeChat/Feishu channels. Closed as resolved, suggesting a fix is in place.
- **[#3991] [Question]: Ollama无法携带对话历史** — 2 comments. User reports session memory loss when using Ollama local models; online models work fine. Points to a provider-specific issue.

## 5. Bugs & Stability
**New/Updated Bug Reports (ranked by severity):**

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3640] | MCP client TaskGroup causes agent freeze (unresponsive but no crash) on WeChat/DingTalk | No |
| **Medium** | [#4006] | Reasoning content not filtered in MiniMax (OpenAI-compatible) provider | No |
| **Medium** | [#3991] | Ollama channel loses conversation memory / context | No |
| **Low** | [#4004] | `max_input_length` static default (128K) incompatible with smaller local models (e.g., 32K) | No — but discussion ongoing |
| **Low** | [#559] (fixed) | Failed user messages poisoning session memory | ✅ Merged |

- **#4004** is notable: it identifies a design flaw where `max_input_length` is hardcoded, causing compression/truncation mismatches when switching between local and cloud models.
- **#4003** reports a Rosetta architecture mismatch on Apple M5 Pro (arm64 Python spawns i386 subprocesses), breaking native ARM tools like Ollama.

## 6. Feature Requests & Roadmap Signals
**User-requested features with strong community demand:**

- **Model fallback / rollback chain** (Issues #1327, #4011, #3789) — Multiple users independently request the same feature: when the primary model fails (rate limit, timeout), automatically switch to a secondary model. This is the **#1 most-requested feature** in the current batch.
- **Manually delete single messages in conversation** (Issue #4001) — User wants per-message deletion (like WeChat) to fix mistakes, protect privacy, and clean up context.
- **Visual shared workspace with annotations** (Issue #4002) — User proposes a canvas where humans and AI can draw, box-select, and annotate together, reducing ambiguity in design/UI tasks.
- **Full chat history export & agent evaluation** (Issue #4008) — Enterprise user requests a evaluation/benchmarking feature to compare QwenPaw against other agent platforms for leadership reporting.
- **Voice input for web console** (Issue #4000) — User reports confusion from UI hinting at voice input that doesn't exist.
- **Ollama / local model memory support** (Issue #3991) — Fixing context memory for Ollama channels.

**Roadmap signal:** The bump to **v1.1.6b1** (#4012) suggests a minor release is coming. Given the volume of fallback-fall-through requests, this functionality may appear in 1.1.6.

## 7. User Feedback Summary
Real user pain points observed from issues:

| Theme | Signal | Source |
|-------|--------|--------|
| **Agent freezes silently** | User: "程序并没退出，还在正常运行" / "钉钉、微信发消息等没响应了" — Agent appears alive but ignores channel messages | [#3640] |
| **Model fallback needed** | Multiple users: "希望能增加fallback模型选项" / "能不能做一个可选备用模型的界面" — Recurrent failure when primary model is unavailable | [#1327, #4011, #3789] |
| **Conversation management friction** | User: "不是纯文字描述…指代不清" (can't point at UI elements) / "只能整体清除或新建对话" (can't delete single messages) | [#4002, #4001] |
| **Enterprise evaluation gap** | User: "没有测评功能无法对比出优势" — Cannot demonstrate QwenPaw's advantages over competitors for leadership approval | [#4008] |
| **Channel sync issues** | User: "微信对话和浏览器操作不同步" — User sees mismatch between WeChat chatbot and browser agent behavior | [#4000] |
| **Configuration complexity** | User: "max_input_length 是一个跟模型无关的静态值" — Manual configuration per model causes incorrect compression/truncation | [#4004] |

User satisfaction appears mixed: the community is actively requesting improvements, but the presence of multiple first-time contributor PRs suggests the project is welcoming and documentation is accessible.

## 8. Backlog Watch
Long-unanswered or important issues/PRs needing maintainer attention:

| Item | Days Open | Status | Reason for Concern |
|------|-----------|--------|-------------------|
| [#1327] Model fallback chain | **52 days** | Open | 5 comments, no PR, multiple duplicate requests (#4011, #3789). Could be a roadmap feature but needs communication. |
| [#3640] MCP client freeze | **12 days** | Open | High-severity bug with no assigned fix. Affects core communication channels (DingTalk, WeChat). |
| [#4006] MiniMax reasoning content leak | **1 day** | Open | New bug; no fix yet. Medium severity. |
| [#4004] `max_input_length` static value | **1 day** | Open | Good design catch; small models are penalized unnecessarily. |
| [#3525] Discord thread isolation for cron | **16 days** | Open (Under Review) | Review has been pending for over two weeks. |

**Recommendation:** Maintainers should consider prioritizing **#3640** (freeze bug) and **#1327** (fallback chain) given the volume of community demand and operational impact. The merge of **#4007** (MemoryHook) and close of **#4010** (interrupt functionality) show the team is responsive—clearer communication on roadmap items could reduce duplicate issue creation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-03

## Today's Overview
The ZeptoClaw project shows **moderate maintainer activity** today, characterized almost entirely by dependency housekeeping. A batch of **17 pull requests** were all merged/closed, but every single one originates from Dependabot automation for updating dependencies across JavaScript (Astro, Starlight, Vite), Rust (Tokio, Lettre, libc, webpki-roots, zip), GitHub Actions (cargo-deny, install-action, upload-artifact, action-gh-release), and Docker (Debian base image). One feature issue (#541) was closed, corresponding to the already-merged Liquid AI provider PR (#543). No new releases were published. There are **no open issues or open PRs** at present, indicating maintainers have fully cleared the queue for the day.

## Releases
**None** — no new releases were published in the last 24 hours.

## Project Progress
All **17 merged/closed PRs** were dependency bumps (Dependabot). The one substantive merged feature is **PR #543** (closed 2026-05-03), which adds **Liquid AI (LFM2)** as an OpenAI-compatible provider — a pure registry change aligning with ZeptoClaw's edge/IoT thesis. Additionally, **PR #548** merged CI matrix expansion for optional integration features (memory-embedding, screenshot, etc.) to prevent silent drift behind default builds. One feature issue (#541) was closed alongside its implementation.

## Community Hot Topics
The **only issue updated today** is:
- **#541** [CLOSED] *feat(providers): Liquid AI (LFM) provider integration — edge-native models* — Created by qhkm, 2 comments. This was the implementation issue, now closed. The underlying need: developers want ZeptoClaw to support Liquid AI's LFM models specifically for on-device deployment via LEAP SDK (iOS/Android), leveraging non-transformer architecture for lower memory at inference.  
  [GitHub Issue](https://github.com/qhkm/zeptoclaw/issues/541)

No other issues or PRs attracted comments or reactions today.

## Bugs & Stability
**No new bugs, crashes, or regressions** were reported in the last 24 hours. The 17 dependency bumps (including tokio 1.50→1.51.1, zip 8.4→8.5.1, webpki-roots 1.0.6→1.0.7) represent routine maintenance that improves supply-chain stability rather than addressing user-facing bugs.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The **Liquid AI provider** (#541/#543) and **CI matrix expansion** (#548) represent the most recent roadmap signals. The Liquid AI integration is the most significant forward-looking move: it positions ZeptoClaw for edge/IoT deployments with LFM models. Expect the next version to formally release this provider support.

## User Feedback Summary
**No user feedback or pain points** were recorded today. The only activity was maintainer-driven dependency updates and a completed feature merge.

## Backlog Watch
**No stale issues or PRs** currently require maintainer attention. All previously open items were closed today. The backlog is effectively empty, indicating maintainers are keeping pace with both automated and manual work.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-03

## Today's Overview

ZeroClaw shows **very high development activity** with 50 issues and 33 pull requests updated in the last 24 hours, concentrated across bug fixes, config schema migrations, and skill system improvements. The project is in an **intense pre-release phase** with a coordinated batch of v0.8.0 breaking-change PRs targeting an `integration/v0.8.0` branch. Two issues were closed and 6 PRs were merged/closed, but no new releases were published today. The maintainer team appears to be resolving a queue of bugs from the April release cycle while advancing toward the next major version.

## Releases

**No new releases today.** The previous tracked milestone is v0.7.5 (tracking issue [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)), which is a release automation milestone. A v0.7.6 tracker exists at [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) focused on skills UX, but no tags were cut.

---

## Project Progress

**Merged/Closed PRs today:**

- [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) — ✅ **Merged**: Environment variable overrides for Slack, Discord, and Telegram channel tokens (`SLACK_BOT_TOKEN`, `DISCORD_BOT_TOKEN`, `TELEGRAM_BOT_TOKEN`). Fixes the long-standing config security pattern reported in #5183. Author: `theonlyhennygod`
- [#5206](https://github.com/zeroclaw-labs/zeroclaw/pull/5206) — ✅ **Merged**: Removed stale `main.py` dependency from CI, upgraded `rumqttc`, suppressed a RustSec advisory. Unblocked all waiting PRs. Author: `ninenox`
- [#6259](https://github.com/zeroclaw-labs/zeroclaw/issues/6259) — **Closed** (bug): Gemini 3 thoughtSignature round-trip was breaking due to dropped `tool_call extra_content` in the OpenAI-compat provider. Closed as fixed.
- [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) — **Filing today** but no fix merged yet: Empty `tool_calls` array sent to providers that strictly validate this field (DeepSeek, NVIDIA NIM). Author: `Svtter`. **No fix PR exists yet.**

**Notable new open PRs advancing features:**

- [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) — Exposes poll-vote/interactive-reply events across all channels; adds `Channel::send_choice` trait extension. Author: `bglusman`
- [#6296](https://github.com/zeroclaw-labs/zeroclaw/pull/6296) — Fixes `memory_recall` with bare wildcard `"*"` to return recent memories instead of searching for a literal asterisk. Author: `Audacity88`
- [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) — **v0.8.0 integration branch PR**: Schema v3 migration, channel aliasing, model-provider aliasing, profile lifting. Marked "DO NOT MERGE YET" — intended as coordinated batch merge. Author: `singlerider`

---

## Community Hot Topics

Most active discussions in the last 24 hours:

1. **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** "ZeroClaw does not know it can add cron" (9 comments, updated May 3) — User could not schedule recurring tasks because the agent did not surface the `zeroclaw cron` CLI tool. Needs repro from maintainers. Labeled `r:needs-repro`.

2. **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)** "Dream Mode — Periodic Memory Consolidation & Reflective Learning" (9 comments, updated May 2) — A full feature proposal for background memory consolidation during idle periods. Strong community engagement. Approved, labeled `priority:p1`.

3. **[#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233)** "chat_messages_to_native() drops reasoning_content for plain-text assistant messages" (6 comments, updated May 3) — Multi-turn DeepSeek V4 conversations break after first turn because `reasoning_content` is dropped on non-tool-call assistant messages. Author: `Svtter`. **Fix PR [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) filed today.**

4. **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)** "Default shell sandbox blocks all realistic Python skill patterns" (6 comments, updated May 2) — InvestorClaw developer reports default sandbox blocks every real-world Python skill use case. Labeled `priority:p1`, `status:in-progress`.

**Underlying needs**: Users want ZeroClaw to *know its own capabilities* (cron scheduling), to handle *thinking/reasoning models* properly (DeepSeek V4, Gemini 3), and for the *sandbox defaults to match real skill use cases* rather than being overly restrictive.

---

## Bugs & Stability

**High-severity bugs filed or active today:**

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) Empty `tool_calls` array → 400 on strict validators | S1-blocked | provider | Open | ❌ None |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) Context compressor drops `reasoning_content` | S2 | runtime/compression | Open | ✅ [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285) |
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) DeepSeek V4 multi-turn failure | S2 | provider | Open | ✅ [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) |
| [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) WASM plugin install/scan path mismatch | S2 | runtime | Open | ❌ None |
| [#6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280) Windows full build fails in hardware crate | S3 | runtime | Open | ❌ None |
| [#6245](https://github.com/zeroclaw-labs/zeroclaw/issues/6245) Tavily search provider is a TODO stub | S2 | tool | Open | ❌ None |

**Regressions noted today**: None explicitly called out, but the DeepSeek reasoning_content issue [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) was introduced by a recent PR (#6107). The fix PRs filed today by `theonlyhennygod` ([#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284), [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285)) suggest maintainers are actively triaging this thinking-model gap.

---

## Feature Requests & Roadmap Signals

**Today's highest-signal feature requests:**

- **[#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** "Air-gapped execution mode with companion daemon over Unix socket" — Proposed by `singlerider`. Splits ZeroClaw into offline agent + online proxy daemon. Targets air-gap compliance and enclave deployments. Filed today.

- **[#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260)** "Configurable LM Studio server URL" — User `vexxuh` wants to point chat, embeddings, and config surfaces at a non-localhost LM Studio instance. Labeled `priority:p2`.

- **[#6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270)** — Configurable macro + onboarding for v3 nested config shapes. Filed by `singlerider` as part of the v3 schema migration batch.

- **[#6271](https://github.com/zeroclaw-labs/zeroclaw/issues/6271)** — V3 `SwarmConfig` schema + runtime implementation. Filed by `singlerider`.

- **[#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272)** — Agent filesystem layout: `agents/<alias>/AGENTS.md` for system prompts. Filed by `singlerider`.

**Roadmap prediction**: The v0.8.0 integration branch ([#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)) bundles a major config schema overhaul (v3 nested shapes, channel aliasing, model-provider aliasing, profile lifting). This is likely the **next major release candidate** after milestones v0.7.5 and v0.7.6. The "Dream Mode" feature [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) is approved and `priority:p1` — expect it in v0.8.x or v0.9.x. Skill consolidation PR [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) (first-party skills into repo, compact mode) also targets v0.7.6 or later.

---

## User Feedback Summary

**Real pain points expressed today:**

- **"I ask ZeroClaw to let me do something every 8:00 PM — it says it doesn't have the tools"** ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)) — A core discoverability gap: the agent doesn't know its own CLI capabilities.
- **"Telegram `mention_only=true` does not suppress responses to photos/documents"** ([#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229)) — Bot responds to media messages even when configured to only reply on @mention. Fix PR [#6286](https://github.com/zeroclaw-labs/zeroclaw/pull/6286) filed.
- **"Slack bot_token must be stored in config file instead of env var"** ([#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237)) — Security concern: tokens should come from environment. Fix PR [#6287](https://github.com/zeroclaw-labs/zeroclaw/pull/6287) filed.
- **"ZeroClaw hangs after streaming decode error from custom HTTP provider"** ([#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243)) — Produce-no-output hang for many minutes with GPU at 50%.
- **"`status` and `service status` hardcode `zeroclaw.service` — named instances report stopped"** ([#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227)) — Multi-instance deployment broken by hardcoded unit name. Fix PR [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) filed.
- **"Windows full build fails in hardware crate"** ([#6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280)) — Cross-platform parity gap for Windows users.

**Satisfaction signals**: Multiple contributors actively filing PRs (`theonlyhennygod` filed 5 fix PRs today alone). Community building skill registries ([#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143)), Matrix attachment support ([#6200](https://github.com/zeroclaw-labs/zeroclaw/pull/6200)), and i18n translations ([#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170)).

---

## Backlog Watch

Items requiring maintainer attention:

1. **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)** "Default shell sandbox blocks all realistic Python skill patterns" — Filed April 14, `priority:p1`, `status:in-progress`, 6 comments, no fix PR in flight. This is a release-blocking issue affecting v0.6.9 that has been open for 19 days.

2. **[#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628)** "Daemon service auto-starts on boot, causes port conflict for manual runs" — Filed April 11, `priority:p2`, `status:in-progress`, 3 comments. Affects all systemd users running manual daemon after service installation.

3. **[#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654)** "Encryption for config.json breaks Telegram token" — Filed April 12, `priority:p1`, `status:in-progress`. User cannot use Telegram after enabling config encryption. No fix PR.

4. **[#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674)** "Make `classify_channel_reply_intent` configurable" — Filed April 12, `priority:p2`, `status:in-progress`. This is a recurring frustration: in 1:1 private chats the assistant sometimes ignores the user because of the group-chat-appropriate reply-intent gate.

5. **[#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143)** "Universal skill registry support" — Open since April 26, large PR (4KB+), needs review. Important for the skill ecosystem vision.

**Key observation**: Several `status:in-progress` bugs from early/mid April (days 19-22 old) still lack a merged fix. Today's flurry of PRs from `theonlyhennygod` addresses related concerns (Slack env vars, Telegram mention_only, reasoning_content preservation) — suggesting maintainers are working through the backlog, but the `r:needs-repro` label on [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) and [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) indicates some bugs remain unconfirmed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*