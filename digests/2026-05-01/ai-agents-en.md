# OpenClaw Ecosystem Digest 2026-05-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-01 04:53 UTC

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

# OpenClaw Project Digest — 2026-05-01

## 1. Today's Overview

OpenClaw is in an **intense release stabilization cycle** following the **v2026.4.29** stable release and four beta iterations (beta.1 through beta.4) published in the last 48 hours. Activity is extremely high: **500 issues and 500 PRs were updated in the last 24 hours**, with **406 issues closed** and only **27 PRs merged/closed** — indicating heavy bug-fix triage and QA. The project has cleared **four regressions** reported on April 28 (Ollama thinking, Telegram CPU spin, Discord double-processing, and local status false-negatives), all now closed with fixes confirmed in the v2026.4.29 line. The backlog of open PRs remains large (473 open), suggesting maintainers are focused on critical patches rather than feature intake. Overall project health is robust but strained by high-volume regression management.

---

## 2. Releases

**Latest Release: v2026.4.29** (stable) — published 2026-04-29

**Release Notes:**
- **Messaging & automation improvements (default-on):**
  - Active-run steering by default
  - Visible-reply enforcement
  - Spawned subagent routing metadata
  - Opt-in follow-up commitments for heartbeat-delivered reminders
- **Memory improvements** (description truncated in raw data)

**Beta Releases (4 total):** v2026.4.29-beta.1 through beta.4 — identical feature set; iterative bug fixes.

**Migration Notes:** None documented for this release. Users upgrading from v2026.4.26 should be aware of fixes for:
- Ollama `think` parameter forced to `false` ([#73366](https://github.com/openclaw/openclaw/issues/73366))
- Telegram-only gateway CPU spin ([#73647](https://github.com/openclaw/openclaw/issues/73647))
- Discord DM double-processing ([#73441](https://github.com/openclaw/openclaw/issues/73441))
- Local status false-negative regression ([#73535](https://github.com/openclaw/openclaw/issues/73535))

No major **breaking changes** listed.

---

## 3. Project Progress

**Merged/Closed PRs Today:** 27

**Notable Merged/Fixed Features:**

| PR # | Description | Status |
|------|-------------|--------|
| [#75183](https://github.com/openclaw/openclaw/pull/75183) | Simplify bundled runtime dependency repair (unified package-level plan) | OPEN |
| [#71820](https://github.com/openclaw/openclaw/pull/71820) | BlueBubbles reply-context API fallback for cache misses | OPEN |
| [#75173](https://github.com/openclaw/openclaw/pull/75173) | Discord mention formatting guidance documentation | OPEN |
| [#75363](https://github.com/openclaw/openclaw/pull/75363) | Discord: Carbon parity — REST lanes, payload validation, jitter | OPEN |
| [#75424](https://github.com/openclaw/openclaw/pull/75424) | Discord: avoid token resolution during action discovery (SecretRef fix) | OPEN |
| [#75317](https://github.com/openclaw/openclaw/pull/75317) | Memory: retry transient embedding failures | OPEN |
| [#74592](https://github.com/openclaw/openclaw/pull/74592) | Expose memory tools to recall runs (Active Memory fix) | CLOSED |
| [#73632](https://github.com/openclaw/openclaw/pull/73632) | Voice-call SecretRef auth token support | OPEN |

**Key Advances:**
- **SecretRef support** extended to Discord actions and voice-call plugin
- **Memory Core** tools now accessible in Active Memory lightweight recall runs
- **Proxy validation** CLI command (`openclaw proxy validate`) under development
- **Codex** workspace tools now prefer native integrations over generic MCP

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#45474](https://github.com/openclaw/openclaw/issues/45474) | WhatsApp channel linked/OK but inbound not delivered (440/401 loop) | 14 | CLOSED |
| [#53639](https://github.com/openclaw/openclaw/issues/53639) | model-pricing-cache TimeoutError on OpenRouter models | 11 | CLOSED |
| [#45271](https://github.com/openclaw/openclaw/issues/45271) | Model does "tool calling narrations" since v2026.3.7 | 10 | CLOSED |
| [#58443](https://github.com/openclaw/openclaw/issues/58443) | Gateway duplicates inbound messages into session | 8 | **OPEN** |
| [#73366](https://github.com/openclaw/openclaw/issues/73366) | Ollama thinking always forced to false (regression) | 8 | CLOSED |
| [#73647](https://github.com/openclaw/openclaw/issues/73647) | Telegram-only gateway CPU spin | 7 | CLOSED |

### Underlying Needs Analysis

1. **WhatsApp reliability crisis** ([#45474](https://github.com/openclaw/openclaw/issues/45474), [#48390](https://github.com/openclaw/openclaw/issues/48390), [#58481](https://github.com/openclaw/openclaw/issues/58481), [#49317](https://github.com/openclaw/openclaw/issues/49317)): Four distinct WhatsApp bugs — session conflicts, mention detection, WebSocket drops on WSL2, and reconnect loops — indicate a **systemic fragility in the WhatsApp integration**. Users are experiencing silent delivery failures and persistent disconnection storms. This is the highest-impact pain point.

2. **Gateway message duplication** ([#58443](https://github.com/openclaw/openclaw/issues/58443) — **still open**): A core routing issue where the same message is injected multiple times, causing duplicate responses. Remains unaddressed with 8 comments.

3. **Model provider compatibility churn** ([#53639](https://github.com/openclaw/openclaw/issues/53639), [#73366](https://github.com/openclaw/openclaw/issues/73366), [#73417](https://github.com/openclaw/openclaw/issues/73417)): New model providers (OpenRouter, DeepSeek V4, Ollama reasoning) are being adopted rapidly but each introduces regressions — pricing cache timeouts, forced parameter values, and tool-call reasoning content issues.

4. **Plugin ecosystem friction** ([#64025](https://github.com/openclaw/openclaw/issues/64025), [#53497](https://github.com/openclaw/openclaw/issues/53497), [#68279](https://github.com/openclaw/openclaw/issues/68279)): ClawHub CLI cannot find plugins that exist on the website; plugin SDK missing exports break external plugins. The plugin marketplace is fragmented.

---

## 5. Bugs & Stability

### Critical Regressions (Fixed in v2026.4.29)

| Bug | Severity | Fix Status |
|-----|----------|------------|
| [#73366](https://github.com/openclaw/openclaw/issues/73366) — Ollama `think` parameter always `false` | **High** — breaks reasoning for all Ollama users | CLOSED |
| [#73647](https://github.com/openclaw/openclaw/issues/73647) — Telegram-only gateway CPU spin | **High** — 100% CPU, service unusable | CLOSED |
| [#73441](https://github.com/openclaw/openclaw/issues/73441) — Discord DM double-processing | **Medium** — duplicate responses | CLOSED |
| [#73535](https://github.com/openclaw/openclaw/issues/73535) — Local status false-negative regression | **Medium** — false "not running" reports | CLOSED |
| [#73515](https://github.com/openclaw/openclaw/issues/73515) — Ollama `/think` menu shows only 'off' | **Medium** — reasoning controls broken | CLOSED |

### Open Active Bugs (Not Yet Fixed)

| Bug | Severity | Comments | Last Updated |
|-----|----------|----------|--------------|
| [#58443](https://github.com/openclaw/openclaw/issues/58443) — Gateway duplicates inbound messages | **High** — duplicates cause flood responses | 8 | 2026-05-01 |
| [#58890](https://github.com/openclaw/openclaw/issues/58890) — Auto-update subprocess crashes macOS gateway | **High** — leaves service unloaded | 5 | 2026-05-01 |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) — Google Chat groups silently ignored | **Medium** — DMs work, groups don't | 5 | 2026-05-01 |
| [#58737](https://github.com/openclaw/openclaw/issues/58737) — Slack agent name/avatar reverts on edit | **Medium** — display regression | 4 | 2026-05-01 |
| [#58702](https://github.com/openclaw/openclaw/issues/58702) — WebChat text covered by action icons | **Low** — UI layout bug | 4 | 2026-05-01 |
| [#58523](https://github.com/openclaw/openclaw/issues/58523) — Slack multi-workspace inbound DM failure | **Medium** — second workspace broken | 4 | 2026-05-01 |

### New Bugs Reported Today (May 1)

- [#75403](https://github.com/openclaw/openclaw/pull/75403) — Typing indicator start/stop race condition (PR fix in progress)
- [#75388](https://github.com/openclaw/openclaw/pull/75388) — Runtime warning removal regression for group private-reply behavior (PR fix in progress)

---

## 6. Feature Requests & Roadmap Signals

### Most Upvoted Open Requests

| Issue | Title | 👍 | Status |
|-------|-------|----|--------|
| [#11747](https://github.com/openclaw/openclaw/issues/11747) | Auto-Response for Discord Reaction Events | 3 | CLOSED |
| [#49957](https://github.com/openclaw/openclaw/issues/49957) | Session export HTML fix (high impact) | 1 | CLOSED |

### Roadmap Signals from PRs

1. **Proxy validation** ([#73438](https://github.com/openclaw/openclaw/pull/73438)) — `openclaw proxy validate` command — likely in next minor release
2. **Multi-layer compaction** ([#58398](https://github.com/openclaw/openclaw/issues/58398)) — Adopting Claude Code's compaction architecture (open discussion, 4 comments)
3. **Per-agent compaction** ([#57174](https://github.com/openclaw/openclaw/issues/57174)) — Configurable per-agent retention policies
4. **Pre-upgrade risk assessment** ([#61973](https://github.com/openclaw/openclaw/pull/61973)) — `openclaw update review` command
5. **Shared memory store** ([#46542](https://github.com/openclaw/openclaw/pull/46542)) — Cross-agent document sharing
6. **Bitwarden secret provider** ([#23096](https://github.com/openclaw/openclaw/pull/23096)) — Among oldest open PRs (2+ months)

### Predictions for Next Release (v2026.5.x)

- **Proxy validation** command will ship (PR [#73438](https://github.com/openclaw/openclaw/pull/73438) is nearly complete)
- **Claude Code multilayer compaction** may be adopted (significant user demand, reference implementation available)
- **Bugfix focus**: Gateway deduplication ([#58443](https://github.com/openclaw/openclaw/issues/58443)) and auto-update crash ([#58890](https://github.com/openclaw/openclaw/issues/58890)) are highest-severity open bugs

---

## 7. User Feedback Summary

### Pain Points (Real User Reports)

1. **WhatsApp unreliability**: "WhatsApp channel appears as linked and OK, but inbound messages are not actually delivered... channel repeatedly enters reconnect/auth loops" ([#45474](https://github.com/openclaw/openclaw/issues/45474)) — affected multiple users across 14 comments.

2. **Regression fatigue**: "I just updated OpenClaw from 2026.3.2 to 2026.3.8. I found out that my agent now always sends text before calling a tool" ([#45271](https://github.com/openclaw/openclaw/issues/45271)) — multiple "regression" labels suggest users are experiencing churn.

3. **Plugin marketplace disconnect**: "ClawHub website has a dedicated Plugins tab... but the ClawHub CLI cannot find any of them" ([#64025](https://github.com/openclaw/openclaw/issues/64025)) — frustrates discovery.

4. **Chat platform gaps**: Google Chat groups silently ignored ([#58514](https://github.com/openclaw/openclaw/issues/58514)), Slack multi-workspace broken ([#58523](https://github.com/openclaw/openclaw/issues/58523)), Mattermost threading issues ([#45134](https://github.com/openclaw/openclaw/issues/45134)).

5. **Windows/Cross-platform issues**: Gateway won't start automatically on Windows ([#60490](https://github.com/openclaw/openclaw/issues/60490)), WSL2 WhatsApp drops ([#58481](https://github.com/openclaw/openclaw/issues/58481)).

### Use Cases (Inferred from Bugs)

- **Production multi-channel bots**: WhatsApp + Telegram + Discord + Slack setups
- **Multi-agent orchestrations**: Spawning subagents via ACP/`sessions_spawn`
- **Local model users**: Ollama, DeepSeek, OpenRouter
- **Enterprise deployments**: Secret management (Bitwarden), proxy configuration

### Satisfaction Signals

- **High responsiveness**: 4 regressions from April 28 all closed within 3 days
- **Active community**: 500 issues updated in 24 hours, regular contributor thanks in release notes
- **Bot-assisted fixes**: ClawSweeper bot is actively filing fix PRs for regressions ([#75397](https://github.com/openclaw/openclaw/pull/75397), [#75403](https://github.com/openclaw/openclaw/pull/75403))

---

## 8. Backlog Watch

### Critical Unanswered Issues (Needing Maintainer Attention)

| Issue | Age | Last Updated | Why It Matters |
|-------|-----|--------------|----------------|
| [#58443](https://github.com/openclaw/openclaw/issues/58443) | 31 days | 2026-05-01 | Gateway message duplication — core routing bug, 8 comments, no fix PR filed |
| [#58890](https://github.com/openclaw/openclaw/issues/58890) | 30 days | 2026-05-01 | Auto-update kills macOS gateway — leaves service unloaded permanently |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | 31 days | 2026-05-01 | Google Chat groups completely broken — DM-only functionality |
| [#58737](https://github.com/openclaw/openclaw/issues/58737) | 30 days | 2026-05-01 | Slack display regression — affects brand/customization |
| [#58702](https://github.com/openclaw/openclaw/issues/58702) | 30 days | 2026-05-01 | WebChat UI layout regression — affects all WebChat users |

### Stale But Important PRs Needing Action

| PR | Age | Description | Blockers |
|----|-----|-------------|----------|
| [#23096](https://github.com/openclaw/openclaw/pull/23096) | 69 days | Bitwarden secret provider | Triage? Needs review |
| [#25295](https://github.com/openclaw/openclaw/pull/25295) | 67 days | Mattermost edit/delete actions | Needs review |
| [#41624](https://github.com/openclaw/openclaw/pull/41624) | 52 days | Docker cache ownership fix | Labeled "risky-infra" |
| [#57524](https://github.com/openclaw/openclaw/pull/57524) | 32 days | systemd sudo install fix | Cli + daemon, moderate risk |
| [#55473](https://github.com/openclaw/openclaw/pull/55473) | 35 days | Gateway degraded secret failures | Gateway, medium risk |

**Recommendation**: The **Bitwarden secret provider** ([#23096](https://github.com/openclaw/openclaw/pull/23096)) has been open for 69 days and addresses #58 and #24875 — it's the oldest open feature PR and deserves a maintainers' review decision. The **gateway deduplication bug** ([#58443](https://github.com/openclaw/openclaw/issues/58443)) is the highest-severity open issue with no fix in progress.

---

*Digest generated from OpenClaw GitHub data, 2026-05-01. Data reflects issues and PRs updated in the last 24 hours.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the open-source personal AI assistant ecosystem, based on the digest data for 2026-05-01.

---

## Cross-Project Comparison Report: 2026-05-01

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a phase of intense stabilization and architectural maturation. Projects are moving beyond basic chat interfaces to tackle complex production requirements: multi-channel reliability, autonomous operation, and secure deployment. The dominant trend is a bifurcation between projects focusing on field-hardening existing integrations (OpenClaw, NanoBot, CoPaw) and those executing major internal rewrites to support next-generation multi-agent and extended reasoning workflows (Hermes Agent, IronClaw, Moltis). Community feedback consistently highlights regression fatigue and channel instability as primary pain points, while enthusiasm is highest for features enabling self-maintenance and multi-agent orchestration.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release (Last 14d) | Health Score | Health Summary |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **Yes** (v2026.4.29) | 8/10 | High-velocity stabilization, 4 regressions closed in 3 days |
| **Hermes Agent** | 50 | 50 | **Yes** (v0.12.0) | 7/10 | "The Curator" shipped; 3 P1 bugs open, CI red for 7 days |
| **PicoClaw** | 36 | 35 | **Yes** (v0.2.8) | 6/10 | Strong features, severe PR merge bottleneck (6+ weeks) |
| **NanoClaw** | 8 | 47 | No | 7/10 | Exceptional throughput (37 PRs merged), 5 open high-severity bugs |
| **NullClaw** | 0* | 13 | No | 9/10 | High merge success, rapid feature delivery, low bug count |
| **IronClaw** | 26 | 34 | No | 6/10 | 3 live canary failures vs. high-risk "Reborn" architecture rewrite |
| **LobsterAI** | 0 | 9 | No | 8/10 | Zero open issues but reports likely internal; strong bug-fix cadence |
| **Moltis** | 11 | 21 | **Yes** (20260430.01) | 7/10 | 3 new critical UI bugs indicate a regression in new release |
| **CoPaw** | 28 | 12 | **Yes** (v1.1.5.post1) | 7/10 | High community engagement; 16 open bugs, channel reliability focus |
| **NanoBot** | 10 | 8 | No | 7/10 | Healthy pipeline (17 open PRs), 2 long-unanswered foundational issues |
| **TinyClaw** | 0 | 0 | No | - | No activity in 24h |
| **ZeptoClaw** | 0 | 0 | No | - | No activity in 24h |
| **ZeroClaw** | 50 | 50 | **Yes** (v0.7.4) | 7/10 | Major release shipped; 12 open high-severity bugs with fix PRs pending |

*Note: Health Score is a qualitative assessment based on bug velocity, release cadence, and community responsiveness. No activity from TinyClaw and ZeptoClaw.*

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale:** With 500 issues and PRs updated in 24 hours, OpenClaw's community engagement is an order of magnitude larger than any other project tracked. Its user base is broadest across WhatsApp, Telegram, Discord, Slack, and Google Chat.
- **Regression Management:** The project demonstrated industry-leading response time, closing four critical regressions (Ollama thinking, Telegram CPU spin, Discord double-processing) within 72 hours. No other project has shown this level of response efficiency.
- **Ecosystem Breadth:** OpenClaw’s plugin marketplace (ClawHub) and multi-provider support (Ollama, OpenRouter, DeepSeek) are more mature than competitors like PicoClaw or NanoBot, which have smaller or less integrated ecosystems.

**Technical Approach Differences:**
- OpenClaw uses a **monolithic core reference** model, where the primary repository is the canonical implementation. In contrast, NullClaw and ZeroClaw adopt a **modular, containerized** architecture, and IronClaw is executing a **full Rust rewrite** ("Reborn"). OpenClaw's strength lies in its **battle-tested integration surface**—it supports more channels, has a richer plugin system, and has more extensive documentation than most peers.
- Its weakness is **regression churn**: every new release (especially v2026.4.29) introduces new bugs, causing user fatigue. This is a direct consequence of its high feature velocity and large surface area.

**Community Size Comparison:**
- OpenClaw (500 issues/PRs) is the clear hub. Hermes Agent (100 total) and ZeroClaw (100 total) are the next largest. NanoClaw, despite high commit velocity, has a smaller user base (8 issues). OpenClaw’s community creates the most user-generated content, which drives both innovation and noise.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating industry-wide bottlenecks or desired capabilities:

| Requirement | Projects Involved | Specific User Needs / Pain Points |
| :--- | :--- | :--- |
| **Multi-channel reliability** | OpenClaw, PicoClaw, CoPaw, ZeroClaw | WhatsApp session conflicts (OpenClaw, #45474), WeCom disconnections (CoPaw, #2757), Google Chat silent drops (OpenClaw, #58514), Matrix import errors (Hermes Agent, #17648) |
| **Provider fallback & key rotation** | OpenClaw, PicoClaw, Hermes Agent | Automatic API key rotation on rate limits (PicoClaw, #2408), fallback provider failing when primary fails (Hermes Agent, #5392), model pricing cache timeouts (OpenClaw, #53639) |
| **Self-maintenance & autonomy** | Hermes Agent, ZeroClaw, NullClaw | Agent updating itself (Hermes Agent v0.12.0), pre-upgrade risk assessment (OpenClaw, #61973), background maintenance loops (Hermes Agent, #17609) |
| **Multi-agent orchestration** | OpenClaw, Hermes Agent, Moltis, NullClaw | Subagent spawning via ACP (OpenClaw, #75183), thread-bound runtimes per agent (Hermes Agent, #5394), multi-agent UX flow design (ZeroClaw, #5890) |
| **TUI / chat UX polish** | Hermes Agent, ZeroClaw, Moltis | Chronological thinking display (Hermes Agent, #18241), chat input lock + stop button (ZeroClaw, #6220), auto-scroll regression (Moltis, #946) |
| **Security hardening** | NanoClaw, CoPaw, PicoClaw, ZeroClaw | Container escape prevention (NanoClaw, #457/#458), path traversal fix (CoPaw, #3955), SSRF prevention (NanoBot, #3569), shell policy argument confusion (ZeroClaw, #5809) |
| **OpenAI Responses API migration** | PicoClaw, IronClaw | Moving from deprecated Chat Completions API (PicoClaw, #2171), new provider support for Zen/OpenRouter (IronClaw, #1446) |

### 5. Differentiation Analysis

| Project | Key Feature Focus | Target User | Technical Architecture | Core Differentiator |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | Multi-channel reliability, plugin marketplace | Power users, production multi-channel bots | Monolithic Python, reference implementation | Largest ecosystem & community |
| **Hermes Agent** | Autonomous background maintenance, TUI | Developer, single-user power user | Python, skill-based agent loop | Self-healing, "The Curator" autonomy |
| **PicoClaw** | Channel diversity (WeChat, Feishu, QQ), MCP | Chinese-language users, enterprise WeChat | Go, lightweight, MCP-first | Go performance, strong Chinese community |
| **NanoClaw** | Containerized security, v1→v2 migration | Security-conscious developers | TypeScript, container-first | Most aggressive on container hardening |
| **NullClaw** | Skill management, multi-workspace | Advanced developers, multi-project operators | Rust-like (async, typed) | Feature breadth per release (13 PRs/day) |
| **IronClaw** | WASM runtime, enterprise-grade architecture | Enterprise operators, NEAR ecosystem | Rust, WASM runtime, "Reborn" architecture | Most ambitious re-architecture |
| **LobsterAI** | Youdao ecosystem integration, Windows stability | Youdao/Netease users, enterprise China | Electron/Node.js (inferred) | Tight integration with Youdao products |
| **Moltis** | Code indexing, SDKs, UX polish | Mid-project AI agents, developer tools | Full-stack TypeScript, GraphQL SDKs | SDK-first (TS, Python, Go), code indexing |
| **NanoBot** | Multi-channel, security, lightweight deployment | Developers needing minimal agents | Python, Docker, plugin hooks | "Ultra-lightweight" claim vs. actual Node.js dependency (controversial) |
| **CoPaw** | Enterprise Chinese channels (WeCom, Feishu) | Large Chinese enterprises | Python, AgentScope framework | Dedicated enterprise-grade channel support |
| **ZeroClaw** | Web dashboard, workspace foundations, i18n | Developers who want a web UI for their agents | TypeScript, workspace architecture | Strongest web dashboard UX |
| **TinyClaw** / **ZeptoClaw** | Inactive / unknown | Unknown | Unknown | No data available |

### 6. Community Momentum & Maturity

| Activity Tier | Projects | Characteristics |
| :--- | :--- | :--- |
| **Rapidly Iterating & Building** | **OpenClaw**, **NanoClaw**, **ZeroClaw** | High issue/PR throughput, daily releases, large feature velocity. These projects are prioritized for new feature discovery and user base growth. |
| **Stabilizing & Polishing** | **Hermes Agent**, **NullClaw**, **LobsterAI**, **Moltis** | Focused on closing bug clusters, resolving long-standing issues, and shipping incremental improvements. Excellent for production reliability. |
| **Architecture Refactoring** | **IronClaw** | Major internal rewrite ("Reborn") while maintaining production service. High risk, high reward. Watch for regressions. |
| **Mature & Niche** | **CoPaw**, **PicoClaw** | Strong in specific geographies (China) or verticals (enterprise WeChat). Stable but with distinct community dynamics. |
| **Low Activity / Dormant** | **TinyClaw**, **ZeptoClaw**, **NanoBot** (moderate) | No activity or low throughput. May represent stable/complete projects or abandoned experiments. |

**Maturity Assessment:**
- **OpenClaw** is the most mature but also the most volatile due to its broad surface area.
- **NullClaw** and **LobsterAI** are the most stable, with low bug counts and high fix velocity.
- **IronClaw** is the most ambitious but highest-risk project, with live canary failures against a major provider (Anthropic).
- **Moltis** and **ZeroClaw** show a pattern of shipping features that introduce new UI regressions—indicating a focus on speed over pre-release QA.

### 7. Trend Signals

1.  **Autonomous Agents Are the Next Frontier:** Hermes Agent’s "The Curator" (self-healing) and IronClaw’s "Reborn" (self-hosting) signal a clear shift from reactive tools to proactive, self-maintaining systems. This is the strongest trend signal for AI agent developers: agents that can update themselves, manage config, and run background loops will be table stakes within 6 months.

2.  **Multi-User & Multi-Agent Orchestration is Demanded, Not Implemented:** Across Hermes Agent (#5394), ZeroClaw (#5890), and Moltis (new SDKs), the community is requesting multi-agent UX flows. Developers should invest in agent-identity-aware routing and session lifecycle management, as this will be the core architectural differentiator.

3.  **Security is Now a Primary Feature Vector:** The simultaneous security hardening in NanoClaw (container escape), CoPaw (path traversal), and NanoBot (SSRF) shows that self-hosted AI agents are being deployed in production environments where security is a blocker. Expect new compliance features (audit logs, role-based access, secret rotation) to become standard.

4.  **Channel Reliability is the #1 User Pain Point:** Every major project lists at least one broken or unreliable channel. WhatsApp, WeChat, Matrix, Google Chat, and Slack are all reported as fragile. Developers should prioritize a "uniform channel abstraction" with robust reconnection, deduplication, and timeout handling.

5.  **Local Model Support is Regression-Prone:** OpenClaw (Ollama thinking forced false), Hermes Agent (OpenCode context loss), and CoPaw (DeepSeek reasoning not passed) all have active bugs around local/reasoning models. The rapid iteration of model APIs (OpenAI Responses, DeepSeek V4, Ollama reasoning) is outstripping the integration code—suggesting a need for a model-provider abstraction layer.

6.  **Chinese-Language Ecosystem is a Distinct Parallel Universe:** PicoClaw, CoPaw, and LobsterAI are deeply integrated with Chinese enterprise channels (WeCom, Feishu, QQ, Youdao). Features like interactive approval cards in Feishu (CoPaw) and MCP server management (PicoClaw) are advanced beyond what Western-focused projects offer for Telegram/Discord. Developers targeting the global market should study these integrations for best practices.

7.  **Developer Experience (DX) is the Next Battleground:** NullClaw’s nested skill directories, ZeroClaw’s memory-to-chat recovery, Moltis’s auto-session titles, and NanoClaw’s `proxy validate` command all indicate that as agents become more complex, the development and operations tool chain is a key differentiator. Expect more CLI commands, VS Code extensions, and dashboard enhancements.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot for the date **2026-05-01**.

---

## NanoBot Project Digest — 2026-05-01

### 1. Today's Overview
Project activity is **very high**, with significant movement in both the issue tracker and pull requests. While no new releases were cut today, the maintainers merged 8 pull requests and saw 10 issues updated in the last 24 hours. The community is actively contributing security hardening, streaming fixes, and infrastructure improvements (e.g., DingTalk SSRF prevention, OpenTelemetry tracing, a new hook system). The backlog of open PRs (17) suggests a healthy development pipeline, though several long-standing bugs and feature requests remain unresolved.

### 2. Releases
**None.** There were no new releases published in the reporting period.

### 3. Project Progress
**Merged/Closed PRs (8 total; key highlights):**
- **#3562 / #3565** [fix(matrix): skip empty stream deltas before processing] — Fixed a bug where empty `reasoning_content` chunks from providers like DeepSeek caused spam in Matrix channels.
- **#3557** [lunarpixie] — Author: dannylty (likely a minor or experimental update).
- **#3556** [chore: define repository line endings via .gitattributes] — Ensures consistent LF handling across Windows/macOS/Linux.
- **#3550** [docs: avoid POSIX-only temp paths in examples] — Cross-platform documentation improvements.

**Advanced Features (Open PRs showing progress):**
- **#3564** [HookCenter typed-event hook system with plugin support] — Replaces the old AgentHook method-override pattern, enabling external plugin distribution via `entry_points(group="nanobot.hooks")`.
- **#3569** [security: fix(dingtalk): block SSRF in outbound media fetches] — Hardens the DingTalk channel against server-side request forgery.
- **#3358** [feat(config): add model presets for quick model switching] — Adds `ModelPresetConfig` to allow named bundles of model + generation parameters.
- **#3173** [feat(observability): OpenTelemetry tracing] — Traces LLM calls, tool executions, and orchestration spans; supports Langfuse and LangSmith backends.

### 4. Community Hot Topics
- **[#660: “Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency”](https://github.com/HKUDS/nanobot/issues/660)** — Open since Feb 14, this issue has **11 comments and 5 upvotes**. The user points out that the Dockerfile requires both Python and Node.js, which contradicts the "ultra-lightweight" claim. *Underlying need:* Users want a truly minimal runtime, especially for edge deployments. This remains a point of friction.
- **[#3569: [security] fix(dingtalk): block SSRF in outbound media fetches](https://github.com/HKUDS/nanobot/pull/3569)** — New today with heavy security implications. The PR prevents remote media URLs from triggering internal HTTP resource fetches. *Underlying need:* As the project adds more channel integrations, security hardening becomes critical for self-hosted and public deployments.
- **[#3559: WebSocket channel cannot replace webhooks for proactive message delivery](https://github.com/HKUDS/nanobot/issues/3559)** — A detailed discussion on the limits of WebSocket for multi-tenant proactive delivery (cron, heartbeat, agent-initiated sends). *Underlying need:* Users running nanobot in production need reliable outbound push without relying on webhooks.

### 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **High** | [#3559](https://github.com/HKUDS/nanobot/issues/3559) | WebSocket cannot replace webhooks for proactive message delivery in multi-tenant environments | No (discussion ongoing) |
| **High** | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | DeepSeek-V4 `reasoning_content` error reproducible on v0.1.5.post3 (Windows, WebUI + exec tool) | Yes: **#3560** (adjusted DeepSeek reasoning mode check condition) |
| **Medium** | [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix channel reads old messages on startup/restart, causing loops | No (user recommends `/new` workaround) |
| **Medium** | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | OpenAI-compatible streaming closes too early for tool-backed `/v1/chat/completions` requests | Yes: **#3555** (fixes premature SSE termination) |
| **Low** | [#3563](https://github.com/HKUDS/nanobot/pull/3563) | Pydantic serialization warning in Matrix `allow_room_mentions` default type | Yes: PR **#3563** (fix applied) |

### 6. Feature Requests & Roadmap Signals
- **Typed-event hook system (PR #3564)** — This is a major infrastructure change. If merged, it will allow third-party plugin distribution, making nanobot more extensible. Likely to land in the next minor release.
- **Model presets (PR #3358)** — Allows named presets (model + params) for quick switching. This aligns with user demand for easier multi-model workflows.
- **OpenTelemetry tracing (PR #3173)** — Enterprise-grade observability. Suggests the project is targeting larger deployments.
- **Gateway lifecycle notifications (PR #3373)** — Sends on_start/on_stop notifications. Closes issue #3279, a user-requested feature for operational awareness.
- **Feishu/Lark improvements (PR #3552)** — Passing sender identity to the model in group chats. Shows ongoing effort to polish existing channel integrations.

*Prediction for next release (v0.1.6 or v0.2.0):* HookCenter, model presets, DingTalk SSRF fix, and DeepSeek reasoning fixes are likely candidates.

### 7. User Feedback Summary
- **Pain Points:**
  - "Ultra-lightweight" claim is misleading due to Node.js requirement (#660).
  - Local model users (e.g., Ollama) struggle with configuration and getting stuck on "nanobot is thinking" (#603).
  - Subagent `max_iterations` is hardcoded to 15, causing silent failures on long-running tasks (#970, now closed).
  - Automation/cron lacks session history context, reducing utility (#3484, closed as enhancement).
- **Satisfaction Signals:**
  - Community is actively contributing security fixes (SSRF, public-deploy footguns).
  - Multiple contributors are improving documentation for cross-OS compatibility (#3550, #3556).
- **Use Cases:** Self-hosted personal assistants, multi-tenant group chat bots (Feishu, Matrix, DingTalk), and automated task execution with local/small models.

### 8. Backlog Watch
- **Issue #660 (lightweight claim / Node.js dependency)** — Open since Feb 14, 5 upvotes, 11 comments. This is a recurring concern about the project's own identity. Maintainer response is needed to clarify or remove the claim.
- **Issue #2298 (breaking endless tool calling loops)** — Open since Mar 20. No maintainer response visible. This affects all local/small model users and is a high-impact usability bug.
- **PR #1385 (preserve reasoning_details for multi-turn tool calling via OpenRouter)** — Open since Mar 1. This is critical for users of reasoning models (Gemini, Claude) with multi-turn tool use. Stalled for nearly two months.
- **Issue #3559 (WebSocket vs webhooks for proactive delivery)** — New today, but touches on a fundamental architectural gap for multi-tenant production deployments. Needs maintainer input.

---
*Digest generated from GitHub activity ending 2026-05-01. Data sourced from HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-01

## 1. Today's Overview

Hermes Agent shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours, plus a **major release** (v0.12.0 "The Curator") published yesterday. The release marks a milestone in autonomous operation — the agent can now self-maintain via a background loop. Community engagement remains strong with 213 contributors since the last release. However, the project struggles with recurring CI infrastructure issues (Nix/npmDepsHash failures) and several P1/P2 bugs affecting core gateway functionality.

---

## 2. Releases

### v2026.4.30 — Hermes Agent v0.12.0 "The Curator"
- **1,096 commits** · 550 merged PRs · 1,270 files changed (217,776 insertions) · **213 community contributors**
- **Headline feature:** Autonomous background maintenance — the agent can now update itself, manage its own configuration, and perform self-healing operations without user intervention.
- No breaking changes or migration notes were published in the release summary.

---

## 3. Project Progress

**Today's merged/closed PRs:** 18 of 50 updated PRs were closed or merged.

### Notable Merged Fixes
- **[PR #18242](https://github.com/NousResearch/hermes-agent/pull/18242)** — Fix Docker stability for Railway deployment (P2, closed)
- **[PR #5390](https://github.com/NousResearch/hermes-agent/pull/5390)** — Fix `UnboundLocalError` on `message` in `run_sync` that crashed all Telegram/Discord/Slack sessions (P1, closed)
- **[PR #5780](https://github.com/NousResearch/hermes-agent/pull/5780)** — Fix OpenViking memory plugin: persist explicit memory writes as fallback resources (P3, closed)
- **[PR #5519](https://github.com/NousResearch/hermes-agent/pull/5519)** — Fix Slack/Signal deadlock on connect failure — platform locks now release on error (P2, closed)

### Notable Open PRs (active development)
- **[PR #18243](https://github.com/NousResearch/hermes-agent/pull/18243)** — Inbound video message processing via ffmpeg for all platforms (P2, new today)
- **[PR #18238](https://github.com/NousResearch/hermes-agent/pull/18238)** — Telegram temporary tool progress bubbles (P3, new today)
- **[PR #18068](https://github.com/NousResearch/hermes-agent/pull/18068)** — Replace 23 hardcoded `Path.home()/.hermes` paths with canonical `get_hermes_home()` (P2)
- **[PR #17883](https://github.com/NousResearch/hermes-agent/pull/17883)** — Preserve context compressor threshold overrides across model switches (P2)
- **[PR #17609](https://github.com/NousResearch/hermes-agent/pull/17609)** — Add user-lock and approval gate for skill mutations (P3)

---

## 4. Community Hot Topics

### Most Active Discussions

**Issue #17648** — [Matrix messages returning ImportError](https://github.com/NousResearch/hermes-agent/issues/17648) (6 comments, 1 👍)
> *Matrix adapter completely broken:* `cannot import name 'cfg_get' from 'hermes_cli.config'`. The error suggests a regression where the CLI config module was refactored but the Matrix adapter wasn't updated. This is blocking all Matrix users.

**Issue #18240** (closed) / **#18241** (open) — [TUI: Show thinking blocks and tool calls in chronological order](https://github.com/NousResearch/hermes-agent/issues/18240) (3 comments)
> *Duplicate report filed immediately after closure.* Users want the TUI to display reasoning model output in true chronological order rather than grouped by type. This indicates strong demand for reasoning-model UX polish.

**Issue #5394** — [Thread-bound agent runtimes for Telegram topics](https://github.com/NousResearch/hermes-agent/issues/5394) (3 👍, 0 comments)
> *High reaction count, zero discussion.* Users want Telegram forum topics to bind to persistent external agent runtimes (Codex, Claude, Gemini). This suggests a desire for multi-model, multi-agent workflows within a single gateway.

**Issue #5504** — [Dual queue: follow-up (Alt+Enter) + steering (Enter/queue mode)](https://github.com/NousResearch/hermes-agent/issues/5504) (4 comments, 1 👍)
> *TUI productivity feature request* — two independent message queues for interacting with a running agent, enabling queued follow-ups without interrupting current responses.

### Analysis
The community is **actively engaged with the TUI and gateway platforms**. Matrix users are blocked by a config import regression, while Telegram/Discord users seek advanced features like progress indicators, thread-bound runtimes, and proper chronological display for reasoning models. The duplicate TUI feature request (#18240/#18241) highlights that users are frustrated by the current display logic.

---

## 5. Bugs & Stability

### P1 (Critical)
| Issue | Description | Status |
|-------|-------------|--------|
| [#17648](https://github.com/NousResearch/hermes-agent/issues/17648) | **Matrix messages completely broken** — ImportError from refactored config module | **OPEN, no fix PR** |
| [#15272](https://github.com/NousResearch/hermes-agent/issues/15272) | **Nix CI broken on main** — stale npmDepsHash blocks all PRs, blocks CI for 7+ days | **OPEN, no fix PR** |
| [#15244](https://github.com/NousResearch/hermes-agent/issues/15244) | **Recurrence of Nix ubuntu CI failure** — same class as #12965, still unresolved | **OPEN, no fix PR** |
| [#5387](https://github.com/NousResearch/hermes-agent/issues/5387) | **UnboundLocalError crashes every Telegram session** — was P1, fixed in PR #5390 (merged today) | **CLOSED** ✅ |

### P2 (High)
| Issue | Description | Status |
|-------|-------------|--------|
| [#5392](https://github.com/NousResearch/hermes-agent/issues/5392) | **Custom/Google provider not resolved in fallback config** — works as primary, fails as fallback | OPEN, 4+ weeks old |
| [#15743](https://github.com/NousResearch/hermes-agent/issues/15743) | **Fallback provider sends requests to primary's base_url** — ignores own `base_url` config | CLOSED (likely fixed) |
| [#18140](https://github.com/NousResearch/hermes-agent/issues/18140) | **Cannot use Opencode Zen** — always falls back to Claude Opus | OPEN, filed today |
| [#9835](https://github.com/NousResearch/hermes-agent/issues/9835) | **Feishu adapter: no require_mention toggle** — file/group messages silently dropped | CLOSED ✅ |
| [#12482](https://github.com/NousResearch/hermes-agent/issues/12482) | **WSL path translation broken for ACP** — terminal_tool ignores ACP cwd | CLOSED ✅ |
| [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) | **Self-hosted Honcho memory broken** — SDK 2.x incompatible with Honcho server 3.x | OPEN, 4+ weeks old |
| [#5388](https://github.com/NousResearch/hermes-agent/issues/5388) | **Context fragmentation in gateway** — "serious fragmentation when sending mid-session context" | OPEN, needs-repro |

### P3 (Notable)
| Issue | Description | Status |
|-------|-------------|--------|
| [#17522](https://github.com/NousResearch/hermes-agent/issues/17522) | **TUI image attachment broken with spaces in paths** | CLOSED ✅ |
| [#17229](https://github.com/NousResearch/hermes-agent/issues/17229) | **Dashboard theme changes cause layout shifts** | CLOSED ✅ |
| [#16082](https://github.com/NousResearch/hermes-agent/issues/16082) | **`hermes status` missing Nvidia API key status** | CLOSED ✅ |

### Regression Watch
**Issue #5960** — `/status` showing `Tokens: 0` regression — even with substantial usage in SQLite. This is a **second regression** of a symptom previously fixed (#1465). Root cause changed. **CLOSED**, but pattern is concerning.

---

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (v0.13.0)

| Feature | Issue | Rationale |
|---------|-------|-----------|
| **Inbound video processing** | [PR #18243](https://github.com/NousResearch/hermes-agent/pull/18243) | Already coded, P2, new today — ffmpeg extraction for all platforms |
| **Telegram temporary tool progress** | [PR #18238](https://github.com/NousResearch/hermes-agent/pull/18238) | Already coded, opt-in display setting |
| **User-lock & approval gate for skill mutations** | [PR #17609](https://github.com/NousResearch/hermes-agent/pull/17609) | Already coded, protects user-authored skills from silent overwrite |
| **Skill mutation protection** | [#17583](https://github.com/NousResearch/hermes-agent/issues/17583) | Linked to PR #17609, likely to land |

### Growing Demand / Roadmap Signals

| Feature | Issue | Community Signal |
|---------|-------|-----------------|
| **Thread-bound agent runtimes (Telegram topics)** | [#5394](https://github.com/NousResearch/hermes-agent/issues/5394) | 3 👍, multi-model workflows |
| **TUI chronological thinking/tool display** | [#18241](https://github.com/NousResearch/hermes-agent/issues/18241) | Duplicate filed immediately after closure |
| **Dual message queue for TUI** | [#5504](https://github.com/NousResearch/hermes-agent/issues/5504) | 4 comments, productivity-focused |
| **Terminal tab title with session name** | [#5505](https://github.com/NousResearch/hermes-agent/issues/5505) | 4 comments, UX polish |
| **Official MongoDB memory provider** | [#5495](https://github.com/NousResearch/hermes-agent/issues/5495) | 1 👍, enterprise demand signal |
| **Proxy support for LLM API calls** | [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | 5 comments, corporate users blocked |
| **Rate limit header tracking** | [#5449](https://github.com/NousResearch/hermes-agent/issues/5449) | Proactive throttling, prevents 429s |
| **Model capability pre-flight validation** | [#5437](https://github.com/NousResearch/hermes-agent/issues/5437) | Prevents cryptic provider errors |
| **Preserve partial stream content on retry** | [#5453](https://github.com/NousResearch/hermes-agent/issues/5453) | Token savings on stream failures |

### Prediction
**v0.13.0** will likely include: inbound video support, Telegram tool progress, skill mutation protection, and the accumulated TUI polish features. The chronological thinking display (#18241) has strong demand and is a simple rendering change — could ship as a fast-follow patch.

---

## 7. User Feedback Summary

### Pain Points
1. **Matrix users blocked** ([#17648](https://github.com/NousResearch/hermes-agent/issues/17648)) — "cannot import name 'cfg_get'" means the entire Matrix adapter is non-functional. One user commented with a 👍, indicating shared frustration.
2. **Nix CI broken for 7+ days** ([#15272](https://github.com/NousResearch/hermes-agent/issues/15272), [#15244](https://github.com/NousResearch/hermes-agent/issues/15244)) — Blocks all PRs from Nix users, 2 comments + 1 👍 across both issues. Multiple users reporting the same stale-hash issue suggests maintainer attention is needed.
3. **Custom provider fallback broken** ([#5392](https://github.com/NousResearch/hermes-agent/issues/5392)) — "Works correctly as primary, fails as fallback" — 4+ weeks old, 2 comments. Users relying on Google Gemini as backup are exposed.
4. **Opencode Zen unusable** ([#18140](https://github.com/NousResearch/hermes-agent/issues/18140)) — Filed today, user tried Docker Compose + dashboard UI but always falls back to Claude Opus.
5. **Context fragmentation** ([#5388](https://github.com/NousResearch/hermes-agent/issues/5388)) — Chinese-language user reports "serious fragmentation" when sending mid-session context updates. Needs reproduction but signals gateway reliability concerns.

### Satisfaction Signals
- **200+ community contributors** in v0.12.0 release — indicates strong developer engagement.
- **v0.12.0 "The Curator"** — the autonomous self-maintenance feature directly addresses a common user complaint about manual updates.
- **Telegram tool progress** ([PR #18238](https://github.com/NousResearch/hermes-agent/pull/18238)) — "opt-in" design suggests the team is responsive to user feedback about message clutter.

### Use Case Insights
- **Corporate users** want proxy support ([#5454](https://github.com/NousResearch/hermes-agent/issues/5454)) and MongoDB memory ([#5495](https://github.com/NousResearch/hermes-agent/issues/5495))
- **Power users** want TUI productivity features: dual queues, chronological display, session-aware tab titles
- **Multi-agent setups** want Discord channel observation ([PR #5395](https://github.com/NousResearch/hermes-agent/pull/5395)) and Telegram thread-bound runtimes ([#5394](https://github.com/NousResearch/hermes-agent/issues/5394))

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Priority | Reason |
|-------|-----|----------|--------|
| [#5392](https://github.com/NousResearch/hermes-agent/issues/5392) | 25 days | P2 | Custom/Google fallback broken — no response |
| [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) | 25 days | P3 | Honcho memory silently fails — no response |
| [#5435](https://github.com/NousResearch/hermes-agent/issues/5435) | 25 days | P3 | Structured error classification — 25 days, no maintainer comment |
| [#5449](https://github.com/NousResearch/hermes-agent/issues/5449) | 25 days | P3 | Rate limit tracking — 25 days, no maintainer comment |
| [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | 25 days | P3 | Proxy support — 25 days, no maintainer comment |
| [#5437](https://github.com/NousResearch/hermes-agent/issues/5437) | 25 days | P3 | Model capability pre-flight — 25 days, no maintainer comment |
| [#5453](https://github.com/NousResearch/hermes-agent/issues/5453) | 25 days | P3 | Partial stream preservation — 25 days, no maintainer comment |
| [#5388](https://github.com/NousResearch/hermes-agent/issues/5388) | 25 days | P2 | Context fragmentation — needs reproduction, no maintainer comment |

### Long-open PRs Needing Review
| PR | Age | Description |
|----|-----|-------------|
| [#5382](https://github.com/NousResearch/hermes-agent/pull/5382) | 25 days | Fix session activity check and stream drop |
| [#5383](https://github.com/NousResearch/hermes-agent/pull/5383) | 25 days | Security: validate session ID header, P1 |
| [#5384](https://github.com/NousResearch/hermes-agent/pull/5384) | 25 days | Fix SSE tool name/args doubling |
| [#5395](https://github.com/NousResearch/hermes-agent/pull/5395) | 25 days | Discord channel observation + mention detection |
| [#5782](https://github.com/NousResearch/hermes-agent/pull/5782) | 24 days | Guard Anthropic thinking kwargs for older SDKs |
| [#5784](https://github.com/NousResearch/hermes-agent/pull/5784) | 24 days | Fix builtin skill classification by dir_name |
| [#5788](https://github.com/NousResearch/hermes-agent/pull/5788) | 24 days | Gate memory tool injection on platform_toolsets |

### Observation
**25+ days of silence** on multiple P2/P3 issues and PRs from April 6 suggests maintainers may have been focused on the v0.12.0 release. These should be triaged now that the release is out. The **P1 Nix CI failure** (7+ days, blocking all PRs) and the **P1 Matrix config import error** (2 days) require immediate attention.

---

## Health Indicators Summary

| Metric | Status |
|--------|--------|
| Release cadence | ✅ v0.12.0 just shipped |
| Community activity | ✅ 50 issues + 50 PRs in 24h |
| P1 bugs unresolved | ⚠️ 3 (Matrix, Nix CI × 2) |
| P2 bugs unresolved | ⚠️ Multiple (fallback, Opencode Zen, Honcho) |
| Backlog of unattended issues | ⚠️ 7+ issues/PRs >3 weeks old |
| Feature request demand | ✅ Strong (TUI, multi-agent, corporate) |
| CI health | ❌ Nix CI red for 7+ days |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-01

---

## Today's Overview

PicoClaw is in a period of **high community activity** with 36 issues and 35 pull requests updated in the last 24 hours, alongside the release of **v0.2.8** and a nightly build. The vast majority of issues remain open (35/36), indicating an active but unresolved backlog. A significant portion of the activity is concentrated around provider compatibility fixes, channel integrations (Feishu, Telegram, Slack, WhatsApp), and security hardening. Two new releases shipped today, with v0.2.8 being the primary stable release containing MCP CLI tooling improvements. The project continues to see strong engagement from Chinese-speaking users, particularly around Feishu and QQ channels.

---

## Releases

### v0.2.8 (Stable)
- **Changelog highlights:**
  - `feat(mcp):` Added CLI commands for MCP server management: `show`, `add`, `list`, `remove`, `test`, `edit`
  - `fix(mcp):` Fixed tool call serialization — now sends empty object `{}` instead of `null` for tools with no arguments, resolving compatibility with Zod-based MCP servers
  - Build fix for issue #2723
- **Breaking changes:** None documented.
- **Migration notes:** No migration steps required. Users should update their MCP configurations if relying on `null` argument handling.

### Nightly Build (v0.2.8-nightly.20260501.6e1fab80)
- Automated nightly from `main` branch. Marked as potentially unstable.

*Both releases available at: https://github.com/sipeed/picoclaw/releases*

---

## Project Progress

### Merged/Closed PRs Today (3)
1. **PR #2719** — `feat(channels): add slack_webhook output-only channel` (open, not merged) — New channel type; adds Block Kit formatting support and multi-webhook fallback.
2. **PR #2736** — `build(deps): bump github.com/larksuite/oapi-sdk-go/v3 from 3.5.4 to 3.6.1` (maintainer merge candidate) — Dependency bump for Feishu SDK.
3. **PR #2735** — `build(deps): bump github.com/aws/aws-sdk-go-v2/config` (maintainer merge candidate) — AWS SDK dependency update.

**Key feature advances in active PRs (not merged today but heavily active):**
- **Audio input support (#2626)** — Adds native audio input for multimodal LLMs (Gemini 1.5). Modifies message protocol and agent loop to handle audio MIME types.
- **Web chat streaming UX (#2587)** — End-to-end streaming support for Pico web chat, including backend agent loop streaming and frontend rendering improvements.
- **Multi-user & Agent Shield (#2313)** — Large security hardening PR adding skill whitelisting, jailbreak detection, role-based access control, and Docker isolation improvements.

**Long-running active PRs (stale but still updated):**
- 22+ PRs from `badgerbees` covering provider fixups (OpenAI compat, Ollama thinking fallback, Feishu mention detection, Telegram streaming, Slack race conditions) — many since March 2026, still not merged.

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#2408** — *[Feature] LLM Account Stacking (Cartridge-Belt): Automatic API key rotation on rate limits/quotas* (10 comments)  
   🔗 https://github.com/sipeed/picoclaw/issues/2408  
   *Analysis:* Users want high-availability LLM access by chaining multiple API keys. Indicates frustration with vendor rate limits and desire for enterprise-grade reliability.

2. **#2225** — *[Feature] Ollama cloud credentials* (9 comments)  
   🔗 https://github.com/sipeed/picoclaw/issues/2225  
   *Analysis:* Ollama Cloud users cannot configure credentials in PicoClaw — a blocker for cloud-based model usage.

3. **#2171** — *[Refactor] Move all OpenAI-based endpoints to Responses API* (9 comments)  
   🔗 https://github.com/sipeed/picoclaw/issues/2171  
   *Analysis:* Community pushing for migration from deprecated Chat Completions API to OpenAI’s newer Responses API. Already partially completed (checklist shows some items done).

4. **#2468** — *[BUG] Scheduled Task Fails to Execute* (7 comments)  
   🔗 https://github.com/sipeed/picoclaw/issues/2468  
   *Analysis:* Cron tool execution blocked by internal channel restriction — affects automation reliability.

5. **#1763** — *[BUG] aarch64 .deb not install* (7 comments, stale since March)  
   🔗 https://github.com/sipeed/picoclaw/issues/1763  
   *Analysis:* Unresolved ARM64 Debian packaging issue persisting for 6+ weeks.

### Most Active PRs (by comment count)
- **#2719** — Slack webhook output channel (high activity today)
- **#2626** — Native audio input for multimodal LLMs
- **#2587** — Web chat streaming UX

**Underlying user needs:**
- **Reliability & Availability:** Key rotation (#2408), cron execution (#2468)
- **Cloud & Self-hosted Flexibility:** Ollama credentials (#2225), WhatsApp support in ARM builds (#2625)
- **Enterprise Integration:** Slack webhooks, Feishu improvements, SMTP email output (#2465)
- **Streaming UX:** Web chat streaming (#2587), Telegram/Feishu streaming fixes

---

## Bugs & Stability

### High Severity

1. **#2468 — Scheduled Task Fails to Execute** (Cron tool)  
   *Root Cause:* Scheduling command execution restricted to internal channels  
   *Impact:* Cron-based automation broken  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2468

2. **#2377 — exec and logs can emit unsafe terminal control characters**  
   *Root Cause:* Raw ANSI control bytes and Unicode bidi format characters in terminal output  
   *Impact:* Security risk — misleading/injection-capable terminal output  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2377

3. **#2478 — Multiple `/use <skill>` calls overwrite previously specified skills**  
   *Root Cause:* `pkg/agent/loop.go` — skill assignment logic overwrites rather than accumulates  
   *Impact:* Equipment mode broken for multi-skill workflows  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2478

### Medium Severity

4. **#2540 — whatsapp_native: allow_from silently drops messages from LID-migrated accounts**  
   *Root Cause:* Format mismatch + device-index drift  
   *Impact:* WhatsApp messages silently dropped  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2540

5. **#2482 — Open weights models with OpenAI backend fail for tool calls**  
   *Root Cause:* Tool call response handling broken for mlx-lm models  
   *Impact:* Custom/self-hosted models cannot use tools  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2482

6. **#2472 — list_dir returns "invalid argument" on Windows**  
   *Root Cause:* Path separator mismatch with `os.Root`  
   *Impact:* Windows file browsing broken  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2472

7. **#2438 — PICOCLAW_GATEWAY_TOKEN env var does not control pico channel authentication**  
   *Root Cause:* Misleading env var — only controls health/reload, not WebSocket auth  
   *Impact:* Configuration confusion, potential auth bypass  
   *Fix PR?* Not yet  
   🔗 https://github.com/sipeed/picoclaw/issues/2438

### Low Severity / Peripheral

8. **#1763 — aarch64 .deb not install** (stale, ARM packaging)  
9. **#2302 — Web UI requires frequent manual re-authentication**  
10. **#2447/#2464 — Multi-message processing: only last message in Feishu channel processed**

### Existential / User frustration (raw bug reports)
11. **#2429** — "[BUG] Some kind of broken garbage... What kind of idiots give this one stars?"  
    *Sentiment:* High frustration with configuration/UX issues  
    🔗 https://github.com/sipeed/picoclaw/issues/2429

**Notes on fix availability:** Several bugs have corresponding PRs from `badgerbees` (e.g., Feishu mention detection #2091, Telegram streaming #2090, Slack race condition #2089) that remain unmerged as of today.

---

## Feature Requests & Roadmap Signals

### High-Priority Requests (likely in next release)

1. **SMTP Email Output Channel (#2465)** — Requested for cron results, periodic reports. Low implementation complexity.
2. **Multiple Feishu Applications (#2493)** — Multiple Feishu accounts in same environment. Already has PR #2736 (SDK bump) indicating active work.
3. **Compiled ARM Builds with WhatsApp Support (#2625)** — Default ARM builds lack WhatsApp; users on Raspberry Pi need to recompile.
4. **LLM Account Stacking / Key Rotation (#2408)** — High interest (10 comments). Enterprise-grade reliability feature.
5. **OAuth 2.1 + PKCE for MCP Servers (#2546)** — Non-technical users want dashboard-based MCP server addition.

### Medium-Priority / Discussion-Stage

6. **Memory System Integration with mem0 / Supermemory / HydraDB (#2515)** — Users want to bring external memory providers.
7. **Feishu Plugin Optimization for Chinese Users (#2580)** — Request for native Feishu experience similar to OpenClaw official app.
8. **Fresh Tail Size Configurable in Seahorse (#2527)** — Hardcoded constant (32) can't be tuned for context budgets.
9. **Configurable Workspace Default Directory (#2519)** — Tool execution failing when outside workspace.
10. **Dual-Header Authentication for Self-Hosted Models (#2169)** — Users with reverse-proxy auth need extra header support.

### Predictions for v0.2.9
- **Likely:** MCP CLI improvements (already in v0.2.8), Feishu multi-app support, Slack webhook channel
- **Possible:** OpenAI Responses API migration (partial), audio input support, streaming UX overhaul
- **Unlikely but visible:** Key rotation, SMTP output, memory provider integration (complex, early-stage)

---

## User Feedback Summary

### Pain Points (recurring themes)
1. **Configuration Complexity:** Chinese users report difficulty setting up QQ channel (#2280), credentials management (#2302), and self-hosted model auth (#2169)
2. **Reliability:** Cron scheduler broken (#2468), scheduled tasks unreliable, message echoing in multi-channel setups (#2446)
3. **Missing Features:** No WhatsApp support in default ARM builds (#2625), no SMTP output (#2465), no dual-header auth (#2169)
4. **Windows & ARM Support:** Debian packaging broken on aarch64 (#1763), `list_dir` fails on Windows (#2472)
5. **Streaming Issues:** Feishu only processes last message (#2464, #2447), Telegram streaming room targeting wrong (#2090)

### Positive Signals
- Community actively contributing PRs (badgerbees alone has 10+ open PRs)
- Chinese-speaking users deeply engaged with Feishu/QQ integration requests
- Feature requests indicate real production usage (key rotation, SMTP reports, memory systems)

### Dissatisfaction Indicators
- Issue #2429: Strongly negative, user calls project "broken garbage"
- Stale issues (March–April) with no maintainer response: #1763 (6 weeks), #2225 (5 weeks), #2171 (5 weeks)
- Multiple high-activity PRs unmerged for weeks (badgerbees fixes since March)

---

## Backlog Watch

### Issues Needing Maintainer Attention (long-unanswered, important)

| Issue | Created | Status | Description | Urgency |
|-------|---------|--------|-------------|---------|
| #1763 | 2026-03-18 | OPEN, stale | aarch64 .deb not install — ARM64 adoption blocker | High |
| #2225 | 2026-03-31 | OPEN, stale | Ollama cloud credentials — blocks self-hosted users | High |
| #2171 | 2026-03-30 | OPEN | OpenAI Responses API migration — partial, needs finalization | Medium |
| #2169 | 2026-03-30 | OPEN | Dual-header authentication for self-hosted models | Medium |
| #2280 | 2026-04-02 | OPEN | SiliconFlow API breaks service, QQ channel missing config | High |
| #2302 | 2026-04-03 | OPEN | Web UI frequent re-authentication required | Medium |

### PRs Stuck in Review (Awaiting Maintainer Merge)

| PR | Created | Author | Description | Stale Since |
|----|---------|--------|-------------|-------------|
| #1858 | 2026-03-21 | badgerbees | Ollama thinking/reasoning fallback | ~6 weeks |
| #1854 | 2026-03-21 | badgerbees | Occurrence-aware tool call ID sanitization | ~6 weeks |
| #1683 | 2026-03-17 | badgerbees | OpenAI strict mode for third-party providers | ~6.5 weeks |
| #2091 | 2026-03-27 | badgerbees | Feishu group mention detection fix | ~5 weeks |
| #2090 | 2026-03-27 | badgerbees | Telegram streaming redundant drafts fix | ~5 weeks |
| #2089 | 2026-03-27 | badgerbees | Slack mention race condition fix | ~5 weeks |
| #2240 | 2026-04-01 | badgerbees | GitHub Copilot stdio transport | ~4 weeks |
| #2298 | 2026-04-02 | badgerbees | Exec script preflight hardening | ~4 weeks |

**Observation:** A significant bottleneck exists around PR merging. Multiple critical bugfix PRs from a single prolific contributor (`badgerbees`) have been open for 4–6 weeks without maintainer review. This risks contributor burnout and leaves known bugs unpatched in shipped releases. The v0.2.8 release notably did not include any of `badgerbees`' fixes despite their high relevance to stability.

---

*Generated 2026-05-01 from PicoClaw GitHub data (sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-01

## 1. Today's Overview

NanoClaw is experiencing a **major burst of activity**, with **47 pull requests updated in the last 24 hours** (37 merged/closed, 10 open) and **8 issues updated** (5 open, 3 closed). This is an exceptionally high-velocity day, dominated by a **coordinated wave of setup/onboarding improvements** (10+ stacked PRs from `gabi-simons` and others) and **critical security hardening** on container boundaries. Two closed security issues from February (#458, #457) have been resolved, and a new cluster of OpenCode provider bugs (4 issues filed same-day) signals active feature development with commensurate stability gaps. No new releases were published today.

## 2. Releases

**No new releases.** The project appears to be in an inter-release phase, with a large stack of setup-flow and provider PRs still open and awaiting final merge before a version bump.

## 3. Project Progress

**37 pull requests merged or closed today**, reflecting significant forward momentum across multiple tracks:

### Security & Container Hardening (merged)
- [#2053](https://github.com/qwibitai/nanoclaw/pull/2053) — Outbox path-confinement for inbound attachments, stacked on #2001's host/container filesystem boundary fix
- [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) — Prevent host file read/delete via container-controlled outbox paths (merged from `Hinotoi-agent`)
- [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) — Fix PATH propagation so `onecli` is reachable post-install (resolves #1973)

### Setup & Onboarding (merged)
- [#2111](https://github.com/qwibitai/nanoclaw/pull/2111) — Delete scratch test agent after ping-pong; simplify agent creation flow
- [#2155](https://github.com/qwibitai/nanoclaw/pull/2155) — Add root-user warning gate to Linux setup, guiding users to create a non-root `nanoclaw` user
- [#2157](https://github.com/qwibitai/nanoclaw/pull/2157) — Refactor setup to per-step env var reuse instead of all-or-nothing upfront
- [#2158](https://github.com/qwibitai/nanoclaw/pull/2158) — "Under-the-sea lobster splash" boot animation (cosmetic)

### Channel & Provider Improvements (merged)
- [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) — Signal adapter now supports outbound file attachments
- [#2112](https://github.com/qwibitai/nanoclaw/pull/2112) — Telegram adapter wired with `maxTextLength` splitter from #1900
- [#2107](https://github.com/qwibitai/nanoclaw/pull/2107) — `resolveChannelName` implemented for Slack and Telegram adapters
- [#2105](https://github.com/qwibitai/nanoclaw/pull/2105) — Richer channel-approval flow with agent selection and free-text naming
- [#2141](https://github.com/qwibitai/nanoclaw/pull/2141) — Dota-Feishu decision bridge via IPC (Chinese community contribution from `brookgao`)

### Scheduling & Poll-Loop Fixes (merged)
- [#2114](https://github.com/qwibitai/nanoclaw/pull/2114) — Pre-task scripts now applied to follow-up injections, not just initial batch
- [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) — Defer task messages from follow-up polling to main loop for proper script application
- [#2142](https://github.com/qwibitai/nanoclaw/pull/2142) — Include routing fields in `schedule_task` content JSON so delivery handlers can forward correctly

### PR Hygiene & Documentation (merged)
- [#1502](https://github.com/qwibitai/nanoclaw/pull/1502) — Add PR hygiene checks to CLAUDE.md (pre-submission diff/lint checks)

## 4. Community Hot Topics

- **[#2159](https://github.com/qwibitai/nanoclaw/pull/2159) — OneCLI `ensureAgent` fails on underscore IDs** → `container-runner.ts` passes `ag_f249a3521081` (underscore) to OneCLI, which only accepts `[a-z0-9-]+`. Crashes agent creation on all new v2 setups. No comments yet, but this is a **blocking bug for any v2 installation**.

- **[#2147](https://github.com/qwibitai/nanoclaw/pull/2147) — Orphan `processing_ack` rows survive kill-ceiling, causing infinite SIGKILL loop** → After a kill event, stale ACK rows trick the system into immediately killing the next respawn. High-severity: locks sessions out of message processing entirely. Filed by `glifocat` with detailed DB-level analysis.

- **[#2150](https://github.com/qwibitai/nanoclaw/pull/2150) — OpenCode provider sends literal `@./...md` lines to model** → The context-wrapping function fails to resolve Markdown file references, so `@./CLAUDE.md` fragments and base instructions never reach the LLM. High-severity: agents operate without instructions.

- **OpenCode triple-bug cluster** — Three issues from `glifocat` in 24 hours (#2148 SIGKILL leak, #2149 hardcoded 90s timeout, #2150 context loss). This indicates the OpenCode provider was recently introduced and has multiple design-level issues needing architectural attention.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#2159](https://github.com/qwibitai/nanoclaw/pull/2159) | OneCLI `ensureAgent` crashes on underscore group IDs — blocks all v2 agent creation | Open; no PR |
| **High** | [#2147](https://github.com/qwibitai/nanoclaw/pull/2147) | Orphan `processing_ack` rows kill next respawn, locking sessions | Open; filed today |
| **High** | [#2150](https://github.com/qwibitai/nanoclaw/pull/2150) | OpenCode provider sends literal `@./...md` lines — **silent context loss** | Open; filed today |
| **High** | [#2148](https://github.com/qwibitai/nanoclaw/pull/2148) | OpenCode `proc.kill('SIGKILL')` leaks underlying binary, holds port 4096 | Open; filed today |
| **Medium** | [#2149](https://github.com/qwibitai/nanoclaw/pull/2149) | OpenCode hardcoded 90s idle timeout breaks local-model setups | Open; filed today |
| **Critical (resolved)** | [#457](https://github.com/qwibitai/nanoclaw/pull/457) | Shell command injection in `stopContainer()` — closed | Fixed |
| **High (resolved)** | [#458](https://github.com/qwibitai/nanoclaw/pull/458) | Unrestricted container network access — closed | Fixed |

**Key stability signal:** The OpenCode provider (a new feature) accounts for 3 of 5 open high-severity bugs. This suggests the provider was merged before full edge-case coverage.

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release
- **Google Gemini provider** — [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) (open) adds Gemini as an alternative to Claude Codex, using Google's Gemini CLI JSON-RPC backend
- **v1 → v2 migration flow** — [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) (open, experimental) auto-detects v1 installs and ports agents, groups, env keys, and scheduled tasks
- **Local OneCLI admin auto-bootstrap** — [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) (open) authenticates `onecli` immediately after fresh install, eliminating post-setup manual step

### Roadmap Signals
- **Host-actions container skill** (already merged in #2027) teaches agents to recognize and route host-side operations — suggests a growing divide between container and host responsibilities
- **Channel-approval flow with agent selection** (merged #2105) indicates UX maturation for multi-agent setups
- **Chinese community contributions** (#2141 Dota-Feishu bridge) point to growing international adoption

## 7. User Feedback Summary

- **Setup friction is the dominant pain point:** Three PRs (#2055, #2052, #2157) and two closed issues (#1973 PATH problem) all address installation failures. Users are hitting "onecli not found" on fresh Linux, root-user permission pitfalls, and brittle all-or-nothing env detection.
- **OpenCode provider launched prematurely:** Users (`glifocat`) report three distinct bugs in one day — silent context loss, port leaks, and timeout breaks. The provider appears to have been shipped without adequate timeout testing or process lifecycle management.
- **OneCLI identifier validation mismatch** (#2159) blocks any v2 setup with underscore-based agent group IDs. This is a **fundamental integration bug** between NanoClaw's ID generator and OneCLI's API contract.
- **Telegram splitter finally wired** (#2112 merged) resolves a long-standing complaint about text-length limits stripping messages.
- **Security issues from February resolved:** Two high-severity container escape vectors (#457 command injection, #458 unrestricted network) have been closed after 2 months in the backlog — a positive sign for security posture.

## 8. Backlog Watch

| Issue | Age | Summary | Risk |
|-------|-----|---------|------|
| [#458](https://github.com/qwibitai/nanoclaw/pull/458) | 65 days (now closed) | Container unrestricted network access — **highest-reaction issue** (👍4) | **Resolved today** |
| [#457](https://github.com/qwibitai/nanoclaw/pull/457) | 65 days (now closed) | Container command injection via shell interpolation | **Resolved today** |
| [#1502](https://github.com/qwibitai/nanoclaw/pull/1502) | 34 days (now merged) | PR hygiene checks for CLAUDE.md | Merged today; long wait for an admin/CI change |

**No remaining long-neglected high-severity items in backlog.** The two February security issues (#458, #457) finally received attention after 2+ months. The current open issues are all hot (filed April 30) and likely to be addressed in the next 48 hours given the project's evident high velocity.

---

**Overall Project Health:** Activity is at a **weekly peak** with ~4x normal PR throughput. The coordinated setup flow overhaul (10+ stacked PRs from `gabi-simons`) suggests a major onramp improvement is imminent. However, the OpenCode provider's three simultaneous high-severity bugs and the OneCLI identifier crash (#2159) suggest the project may be **merging features faster than it is stabilizing them**. The resolved container security issues are a strong positive signal for production readiness.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for NullClaw based on the provided GitHub data for 2026-05-01.

---

## NullClaw Project Digest: 2026-05-01

### 1. Today's Overview

Project activity is **very high**, indicating a major push towards stabilizing core features and enhancing the developer/operator experience. A significant batch of 13 pull requests were merged or closed, centered on long-standing requests for skill management, workspace support, and infrastructure features like end-to-end encryption and inbound message routing. The maintainer (manelsen) is highly responsive, merging community-driven fixes and feature requests alongside their own contributions. While no new releases were published today, the volume of merged code suggests a significant release may be imminent. The project is in a healthy state of **rapid, user-driven development**.

### 2. Releases

- **No new releases** were published today.

### 3. Project Progress (Merged/Closed PRs Today)

Thirteen PRs were merged or closed, representing a significant advancement in features, bug fixes, and infrastructure.

**Key Features Closed:**
- **Skill Management:**
    - [#841](https://github.com/nullclaw/nullclaw/pull/841): Added `--skill` flag to the agent CLI, allowing users to route messages to a specific skill at startup.
    - [#840](https://github.com/nullclaw/nullclaw/pull/840): Implemented support for **nested skill directories**, enabling better organization of skills into categories (e.g., `skills/devops/`, `skills/creative/`). Addresses feature request [#825](https://github.com/nullclaw/nullclaw/issues/825).
    - [#835](https://github.com/nullclaw/nullclaw/pull/835): Added `system_prompt` and `enabled` overrides for individual tools, allowing fine-grained control over tool behavior.
    - [#836](https://github.com/nullclaw/nullclaw/pull/836): Introduced trigger-based tool prioritization, where keywords in user input can automatically boost the priority of a specific tool.
- **Multi-Workspace:**
    - [#842](https://github.com/nullclaw/nullclaw/pull/842): Added a `--workspace` flag to both `agent` and `gateway` commands, enabling users to run multiple isolated instances with different workspaces. Addresses feature request [#833](https://github.com/nullclaw/nullclaw/issues/833).
- **A2A (Agent-to-Agent) Protocol:**
    - [#844](https://github.com/nullclaw/nullclaw/pull/844): Forwarded skill tool-call progress hints to the A2A stream. This allows UI clients to display real-time progress for tool invocations (e.g., "Searching the web..."). Addresses feature request [#808](https://github.com/nullclaw/nullclaw/issues/808).
- **Security & Channels:**
    - [#838](https://github.com/nullclaw/nullclaw/pull/838): Added support for a Pantalaimon proxy, enabling **Matrix End-to-End Encryption (E2EE)**. Addresses the long-standing feature request [#209](https://github.com/nullclaw/nullclaw/issues/209).
- **Config:**
    - [#837](https://github.com/nullclaw/nullclaw/pull/837): Added support for an external `tool_customizations_file`, allowing more flexible and modular tool configuration.

**Key Fixes Closed:**
- [#843](https://github.com/nullclaw/nullclaw/pull/843): Fixed the `KeyWriteFailed` error during the Docker interactive onboarding process (Issue [#763](https://github.com/nullclaw/nullclaw/issues/763)) by providing a clearer error message and actionable instructions.

### 4. Community Hot Topics

The most active discussions revolve around core user experience and power-user features. All major PRs and issues saw little to no comment activity, which suggests the maintainer is efficiently implementing requests based on clear descriptions rather than lengthy public debate.

- **Feature Request: Cron `command` + `prompt` Pipeline**
    - **Issue:** [#879 (OPEN)](https://github.com/nullclaw/nullclaw/issues/879)
    - **Analysis:** This is the highest-priority open feature request. The user wants a "shell-to-agent" pipeline where a cron job can run a shell command and then feed its output to the LLM for summarization or parsing. The current restriction ("Provide either 'command' or 'prompt', not both") is seen as a blocker for automation workflows. This is a well-articulated use case for intelligent alerting and log analysis.

- **Inbound Router & Concurrency Infrastructure**
    - **Open PRs:** [#845](https://github.com/nullclaw/nullclaw/pull/845), [#846](https://github.com/nullclaw/nullclaw/pull/846), [#847](https://github.com/nullclaw/nullclaw/pull/847), [#855](https://github.com/nullclaw/nullclaw/pull/855).
    - **Analysis:** A massive, multi-PR overhaul of how inbound messages are handled. The new `inbound_router` (PR #845) introduces mid-turn injection and non-blocking concurrency. This addresses a deep-seated architectural limitation, allowing users to interrupt a running agent turn with a new message (e.g., asking "Wait, actually do this instead"). PR #855 fixes the concurrency issues at the session level, enabling this preemption. This is a major quality-of-life upgrade for interactive users.

### 5. Bugs & Stability

No new critical crashes or regressions were reported today. The bugs reported were behavior-based requests rather than stability issues.

| Severity | Issue | Description & Status |
| :--- | :--- | :--- |
| **Medium** | [#879 (OPEN)](https://github.com/nullclaw/nullclaw/issues/879) | Design limitation: cron tool rejects using `command` and `prompt` together. Feature request, no fix PR yet. |
| **Fixed** | [#763 (CLOSED)](https://github.com/nullclaw/nullclaw/issues/763) | Docker onboarding crash on `KeyWriteFailed`. Fix merged in PR [#843](https://github.com/nullclaw/nullclaw/pull/843). |

### 6. Feature Requests & Roadmap Signals

The influx of merged features provides strong signals for the next version's capabilities:

- **Advanced Skill & Tool Management:** The combined work of PRs #835, #836, #840, and #841 suggests a "Skill 2.0" is on the way. Users will be able to organize skills in folders, route messages to them via CLI flags, and trigger specific tools based on keywords.
- **Concurrent & Interactive Experience:** The inbound router initiative (PRs #845-848, #855) clearly aims to make the agent feel more responsive. The ability to interrupt and inject new instructions mid-turn will move NullClaw from a simple request-response system to a dynamic conversational partner.
- **Next Likely Feature:** Given the community's interest in automation, **Issue #879 (Cron command+prompt)** is the most logical next target for development. It builds directly on the cron infrastructure and addresses a clear pain point for power users.

### 7. User Feedback Summary

User feedback is overwhelmingly positive, with requests focused on **removing limitations** to enable more complex workflows.

- **Pain Points:**
    - **Inflexibility in Automation:** The inability to pipe shell output into a prompt for cron jobs (Issue #879) is a notable gap.
    - **Onboarding Friction:** The Docker `KeyWriteFailed` error (Issue #763) was a real barrier for new users, but it has been promptly resolved.
- **Appreciation & Use Cases:**
    - **Nested Skills (Issue #825):** Users are requesting better organization, indicating the project is being used for many different tasks that need categorization.
    - **A2A Progress Exposure (Issue #808):** The request to see progress in the UI means users are building or using custom interfaces (A2A clients) and value real-time feedback.
    - **Multi-Workspace (Issue #833):** The request for `--workspace` shows advanced users are running multiple, isolated NullClaw agents for different projects or environments.

### 8. Backlog Watch

- **Issue [#209 (CLOSED)](https://github.com/nullclaw/nullclaw/issues/209) - Matrix E2EE:**
    - This long-standing enhancement from 2026-03-01 has finally been addressed by PR [#838](https://github.com/nullclaw/nullclaw/pull/838), which was merged today. This demonstrates strong maintainer commitment to security and privacy features, even for niche channels.

- **PR [#789 (OPEN)](https://github.com/nullclaw/nullclaw/pull/789) - Gateway Bind & Rate Limit Safeguards:**
    - Created by a community contributor (ScottTPfaff) over three weeks ago, this PR introduces essential security hardening for the gateway (e.g., preventing public binds when no tunnel is active). While not forgotten (it was updated today), its long lifespan suggests it may require careful review and integration with the larger inbound router changes being made by the maintainer. It remains a critical piece for secure production deployments.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-01

## Today's Overview

The IronClaw project is in a period of **intense architectural transformation**, with the "Reborn" rewrite dominating development activity. In the last 24 hours, 26 issues were updated (25 remain open) and 34 pull requests saw activity, with an even split of 17 open and 17 closed/merged—indicating high throughput. The core team is methodically carving out and landing the Reborn substrate, with at least eight open EPICs and a coordinated landing strategy tracked under Issue #2987. However, three live canary failures (public-smoke, persona-rotating, provider-matrix) against the `anthropic` provider signal regression risk in the current stable build. The project is **high-risk, high-activity** as it executes a major re-architecture while maintaining production service.

## Releases

**No new releases** in the last 24 hours. The latest available builds are the mainline `ironclaw` binary and the emerging `ironclaw-reborn` binary (Issue #3069), which is being shipped as a separate executable alongside the existing binary.

## Project Progress

**17 PRs were merged or closed** in the last 24 hours, reflecting focused execution on the Reborn architecture:

- **Reborn Host Runtime foundation**: PR #3095 (closed) added the contract-first `ironclaw_host_runtime` facade, providing a stable API for upper Reborn layers. PR #3120 (closed) replaced cancel/health stubs with real process cancellation and runtime health probes.
- **Shared HTTP egress**: PR #3098 (closed) added the shared `RuntimeHttpEgress` contract and `HostHttpEgressService`, centralizing HTTP transport, DNS/SSRF checks, and resource accounting. PR #3123 (open) routes WASM HTTP through this shared boundary.
- **WASM runtime lane re-carve**: PR #3117 (closed) added test coverage for WASM runtime failure edges (malformed bytes, non-component-model modules, fuel exhaustion).
- **Trace Commons client**: PR #3130 (closed) added client-side capture, standing policy, local queue, and Reborn-compatible wiring. An updated version (#3131) is now open.
- **CI cutover**: PR #3104 (open) replaces the staging-first merge-queue rollout with main-only cutover, adding `merge_group` support for future main merge queue. PR #3121 (open) promotes staging to main (2026-04-30 batch).
- **CI fix**: PR #3119 (closed) disables canary issue creation, likely a response to the three automated canary failure issues (#3113, #3115, #3116).

## Community Hot Topics

1. **[#2987: Track Reborn architecture landing strategy and grouped PR plan](https://github.com/nearai/ironclaw/issues/2987)**
   - *Comments: 43* — The central coordination issue for the entire Reborn rewrite. It defines the landing shape (PR0 contract freeze → staging reborn-integration branch → grouped implementation PRs) and has spawned at least 15 child issues. This is the project's **most critical active thread**, reflecting the complexity and risk of the re-architecture.

2. **[#3067: Reborn vertical-slice integration test suite](https://github.com/nearai/ironclaw/issues/3067)**
   - *Comments: 10* — A high-risk, high-priority test effort to prove Reborn works through public entrypoints, not just crate-local tests. Essential for confidence before cutover.

3. **[#3103: High ASCII TUI display issue](https://github.com/nearai/ironclaw/issues/3103)**
   - *Comments: 7* — Visual regression in the new build: high ASCII rendering breaks on scrolling in some TTYs. User is requesting a fallback argument to restore previous behavior.

4. **[#3016: Reborn cutover blocker - AgentLoopHost facade](https://github.com/nearai/ironclaw/issues/3016)**
   - *Comments: 3* — A defined blocker for post-group cutover, defining the host-facing facade for the reference agent loop.

## Bugs & Stability

### Critical Severity
- **Live canary failures (3 issues):** [#3116](https://github.com/nearai/ironclaw/issues/3116) (public-smoke), [#3115](https://github.com/nearai/ironclaw/issues/3115) (persona-rotating), [#3113](https://github.com/nearai/ironclaw/issues/3113) (provider-matrix) — all failed against the `anthropic` provider at commit `2a65da7c`. PR #3119 (closed) disabled canary issue creation, suggesting the team is aware but has not yet fixed the underlying cause. **No fix PR exists** as of this digest.

### High Severity
- **[#3133: Email mission fails with Gmail](https://github.com/nearai/ironclaw/issues/3133)** — A simple scheduled email mission fails because Gmail authentication does not work. Status and error both report `None`, complicating debugging.
- **[#3128: Gmail connection 502 error](https://github.com/nearai/ironclaw/issues/3128)** — When adding Gmail via chat assistant, the authentication callback returns HTTP 502. Installing through settings worked, suggesting a routing or handler regression.
- **[#3108: Web IDE API keys return 401](https://github.com/nearai/ironclaw/issues/3108)** — API keys generated via web IDE are rejected by `private.near.ai/v1/*` with "Session not found". Instance-provisioned keys work correctly, indicating a key generation or validation issue.

### Medium Severity
- **[#3132: Mission creation fails - integer parsing error](https://github.com/nearai/ironclaw/issues/3132)** — `cooldown_secs` must be an integer but got `"120"` (string). A JSON schema or input validation bug.
- **[#3103: High ASCII TUI rendering](https://github.com/nearai/ironclaw/issues/3103)** — Visual distortion on scrolling in new build.

## Feature Requests & Roadmap Signals

### Likely in next version:
- **Reborn architecture landing** (#2987) — The entire Reborn stack is the dominant roadmap item. The coordinated PR plan suggests a **near-term cutover** once integration tests pass and blockers are resolved.
- **Configuration-as-Code** (#3036) — Tenant blueprints and use-case harnesses with schema, diff, and audit trail. Requested by operators, likely to ship as part of Reborn's product surface.
- **Separate `ironclaw-reborn` binary** (#3069) — A standalone executable alongside the existing binary, with its own CLI and entrypoint. Already in active development.

### Potential future features:
- **Scalable capability permission UX** (#3127) — Design for authorization policy resolution beyond simple allow/deny. Early-stage specification.
- **AgentLoopDriver and run-class profiles** (#3107) — Support for multiple agent-loop execution models (chat, coding, routine) without kernel switch statements. Use-case driven.
- **Native Reborn memory storage/search** (#3118) — Cleanly isolated memory subsystem, superseding the adapter approach. In design phase.

## User Feedback Summary

### Pain Points
1. **Gmail integration broken** (Issues #3133, #3128) — Two separate users report Gmail authentication failures via both the chat assistant (502 error) and mission execution (silent failure with `None` error). This is a **significant user-facing regression** for communication workflows.
2. **API key usability** (#3108) — Web IDE-generated keys are rejected, forcing users to use instance-provisioned keys. Confusing and blocks programmatic access.
3. **TUI visual regression** (#3103) — The "new ironclaw" build broke High ASCII rendering on some terminals. User explicitly requests an argument to restore previous behavior, indicating frustration with the forced change.
4. **Mission creation validation** (#3132) — String/integer type mismatch in `cooldown_secs` parameter. Suggests insufficient input validation in the mission creation API.

### Satisfaction Signals
- The single 👍 on Issue #3036 (Configuration-as-Code) suggests operator interest in declarative configuration.
- Reborn development appears well-coordinated with consistent naming and clear dependency tracking, suggesting strong internal alignment.

## Backlog Watch

### Issues needing attention:
1. **[#1446: Aliyun Coding Plan support](https://github.com/nearai/ironclaw/pull/1446)** — PR from 2026-03-20, open for 42 days. Adds a new provider but has had no recent activity. Risk of merge conflicts given the rapid Reborn development.
2. **[#1479: near-intents tool](https://github.com/nearai/ironclaw/pull/1479)** — PR from 2026-03-20, open for 42 days. Adds WASM tool for the Defuse 1Click API. No recent maintainer engagement.
3. **[#1764: Abound demo PR](https://github.com/nearai/ironclaw/pull/1764)** — Open since 2026-03-30 (32 days). A large PR (XL, high risk) that likely needs rebase given the Reborn substrate changes. No recent comments.

### Key risk:
The **three live canary failures** (#3113, #3115, #3116) have had their issue creation disabled (PR #3119) but **no fix PR exists**. If the underlying anthropic provider regression is not addressed, it could silently degrade production service for users relying on that provider. This should be prioritized as a hidden stability risk.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-05-01**, based on the provided GitHub data.

---

### 1. Today's Overview
LobsterAI saw a **high-activity, stabilization-focused** day. While there were **zero new issues or releases**, the team merged **9 pull requests**, all authored by `liuzhq1986`. The activity indicates a strong push toward fixing bugs and improving system resilience, particularly around the **cowork (multi-turn collaboration) module**, **cross-platform installer reliability (Windows)**, and **UI polish**. The project appears to be in a **pre-release hardening phase**, with no new feature work evident in today's merges.

### 2. Releases
**No new releases** were published on this date. The project remains at its last known version.

### 3. Project Progress
Today’s activity was entirely focused on **bug fixes and stability improvements** across 9 merged PRs. Key advances include:

- **Installer (Windows):** Fixed a critical NSIS exit code check (`StrCmp` → `IntCmp`, PR [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841)) and added diagnostics to prevent silent failures.
- **Cowork (Multi-turn):** Resolved a **session deadlock** bug where a failed LLM gateway would leave a session "running" forever (PR [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869)).
- **Skills (YoudaoNote):** Upgraded the native YoudaoNote skill (PR [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864)).
- **Windows File System:** Fixed a file watcher lock that prevented skill directory deletion on Windows (PR [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851)).
- **UI & Config:** Fixed model-selector overflow (PR [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855)), stale config overwrites during partial updates (PR [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840)), and a misleading auto-restart hint (PR [#1829](https://github.com/netease-youdao/LobsterAI/pull/1829)).

### 4. Community Hot Topics
- **No issues were created or updated today.** The total issue count remains at zero, suggesting either very mature issue tracking or a low volume of external user feedback on GitHub for this period.

### 5. Bugs & Stability
The following bugs were **fixed** today (no new bugs were reported):

| Severity | Bug Description | Fix PR |
| --- | --- | --- |
| **High** | **Cowork session deadlock:** Gateway retrying failed LLM request indefinitely, blocking subsequent messages. | [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) |
| **High** | **Windows installer:** Incorrect exit code comparison could cause silent install failures. | [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) |
| **Medium** | **Windows skill deletion:** File watcher lock preventing directory removal. | [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851) |
| **Medium** | **Config corruption:** `updateConfig()` could overwrite stored providers with stale defaults after a failed init. | [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) |
| **Low** | **UI overflow:** Long model names breaking the ModelSelector header layout. | [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) |
| **Low** | **UI feedback:** Inaccurate "auto-restart" hint during update installation. | [#1829](https://github.com/netease-youdao/LobsterAI/pull/1829) |
| **Low** | **Image display:** Markdown images (especially from WeChat) were too large and lacked preview. | [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) |

### 6. Feature Requests & Roadmap Signals
- **No new feature requests** were submitted via GitHub issues today.
- **Signal from merges:** The upgrade of the **YoudaoNote skill** (PR [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864)) suggests continued investment in first-party integrations.
- Future releases are likely to include **the session-deadlock fix** and **Windows installer improvements** as high-priority patches.

### 7. User Feedback Summary
Direct user feedback is unavailable (0 issues). However, the **nature of the fixes** reveals unspoken pain points:
- **Windows users** are likely experiencing install failures and difficulty deleting skills.
- **Heavy users of the cowork feature** were likely frustrated by sessions becoming unresponsive (deadlock).
- **Config/dashboard users** were likely seeing settings revert unexpectedly.

### 8. Backlog Watch
- **No long-unanswered issues or PRs** exist. All 9 PRs from the last 4 days were resolved.
- The repository appears to have **zero open issues**, which is unusual—this may indicate that issues are tracked elsewhere (e.g., an internal board) or that the current cycle is purely internal stabilization.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-01

## Today's Overview
The Moltis project shows **high velocity** today with 21 PRs updated (18 merged/closed, 3 open) and 11 issues touched (6 closed, 5 open). A new release `20260430.01` was published yesterday. Merge activity spans major features including SDK foundations, remote sandbox support, DeepInfra provider, session auto-titling, and code indexing automation. However, a **notable bug cluster** has emerged in the last 24 hours — 3 newly filed chat UI issues suggest a regression may have been introduced in recent scrolling or layout changes. Community engagement is modest (few reactions/comments overall), but contributor diversity is healthy with multiple authors (penso, gaarf, vvuk, Cstewart-HC, and dependabot) active.

## Releases
**Version: `20260430.01`** (Published 2026-04-30)

This release bundles changes from the past ~24 hours of PR merges. Key inclusions:
- DeepInfra provider and sandbox GPU passthrough
- Session auto-title generation via `/title` command
- Skill usage telemetry for `/insights`
- 5 new slash commands: `/btw`, `/fast`, `/insights`, `/steer`, `/queue`
- Graceful SIGTERM handling for Docker
- Fix for clipboard copy on insecure contexts (LAN deployments)
- Fix for system-notice text overflow
- Blacksmith CI migration for faster GitHub Actions

**No breaking changes or migration notes** are evident from the commit logs.

## Project Progress
**18 PRs merged/closed** today, spanning four major workstreams:

| Area | Merged PRs | Highlights |
|------|-----------|------------|
| **Providers/Models** | #33, #934 | Google Gemini provider (API key + OAuth), DeepInfra provider with 8-model catalog |
| **SDKs** | #288 | TypeScript, Python, Go SDK foundations with shared GraphQL schema |
| **Chat/UI** | #932, #933, #925, #197, #941, #936 | Message action bar (copy/retry/fork), session auto-titling, scroll fix, clipboard fix, system-notice overflow fix |
| **Infrastructure** | #940, #259, #928 | SIGTERM handling, Blacksmith CI migration, `marked` dependency bump |
| **Commands** | #926, #935 | 5 new slash commands (`/btw`, `/fast`, `/insights`, `/steer`, `/queue`), skill usage telemetry |
| **Indexing** | #921 | Auto-trigger code indexing on project changes (Spec 007) |

**Open PRs of note** — #944 (Zen multi-protocol provider), #943 (hide voice buttons when disabled), #942 (remote/multi-backend sandbox support — Vercel, Daytona, Firecracker).

## Community Hot Topics
**Most commented/reactive issues:**
- **#922** [CLOSED] — Chat scrolling bug (3 comments). Raised by bsarkisov, this triggered a user-contributed fix PR #925 from Cstewart-HC. Root cause was a `ResizeObserver` regression from PR #846.
- **#266** [CLOSED] — Feature request for Native 9router support (2 comments). A long-open feature request (Feb 2026) that was recently closed — presumably resolved via the new provider architecture.

**Most 👍 reaction:**
- **#946** [OPEN] — "chat doesn't auto-scroll when at end" (1 👍). A fresh bug filed today mentioning a different scroll behavior issue — possibly the same regression differently manifested.

The **underlying pattern**: Chat UI scrolling stability is a recurring pain point. Two related issues suggest the fix for #922 (merged) may be incomplete. Community members are self-helping (Cstewart-HC authored the fix), but the regression source (PR #846's smart auto-scroll) warrants a thorough unit test for scroll state management.

## Bugs & Stability
**Newly reported bugs (2026-05-01):**

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | #946 | Chat auto-scroll not working when user is at bottom | OPEN, no assigned PR |
| **Critical** | #945 | Chat layout broken — content too wide | OPEN, no assigned PR |
| **High** | #948 | Discord Slash commands missing arguments | OPEN, no assigned PR |
| **Medium** | #947 | [Bug] (no title) — appears to be an incomplete report | OPEN, no assigned PR |
| **Low** | #937 | Settings/terminal tmux error (reported 04-30) | OPEN, no assigned PR |

**Fixed today:**
- #922 — Chat scrolling fixed (PR #925), closed
- #939 — SIGTERM not handled (PR #940), closed
- #938 — System-notice text overflow (PR #941), closed
- #919 — Model discovery timeout for large models (PR #931), closed
- #927 — MCP re-authenticate button missing (PR not explicitly linked, but closed)

**Regression analysis:** The cluster of #945 (broken layout), #946 (auto-scroll), and the just-fixed #922 (scrolling) suggests a **UI layout regression** likely introduced by recent action bar or message footer changes (PR #932, merged today). Auto-scroll fixes need validation across window resize and streaming scenarios.

## Feature Requests & Roadmap Signals
**Notable feature signals from issues/PRs:**
- **#266** — Native 9router provider support (CLOSED — likely delivered)
- **#944** — Zen (opencode.ai) multi-protocol provider (OPEN PR, awaiting review)
- **#942** — Remote/multi-backend sandbox support (OPEN PR, Vercel/Daytona/Firecracker)

**Predictions for next version:**
1. **Zen provider** (#944) — likely merges next, given low complexity and established pattern
2. **Remote sandbox support** (#942) — important for cloud deployment story, but complex (multiple backends)
3. **Voice UI polish** (#943) — hiding disabled buttons is low-risk, likely merges quickly
4. **Discord slash command fix** (#948) — if a PR materializes, will ship in next patch

## User Feedback Summary
**Pain points:**
- **Chat UI instability** — Multiple users (vvuk, bsarkisov, MMMaellon) reporting scroll/layout issues within 48h. User `vvuk` filed two bugs today alone. This suggests the chat experience was smoother before the recent PR #846 changes.
- **Incomplete Discord integration** — User `MMMaellon` reports Discord slash commands missing arguments — likely a deployment config issue.
- **Large model timeout** — User `bsarkisov` experienced 30-second discovery timeout for 100B+ models (fixed in PR #931).

**Satisfaction signals:**
- **Quick fix turnaround** — The #922 scroll bug was filed on 04-29, fixed by a community member on 04-29, and closed on 04-30. This sub-48h cycle is excellent.
- **Auto-session titles** — PR #933 adds `/title` for automatic session naming — users previously had to manually rename sessions.

## Backlog Watch
**Long-unanswered issues needing maintainer attention:**
- **#937** (OPEN, 04-30) — `settings/terminal tmux error`. Last activity was the author filing it. No triage assignment or response from maintainers in ~24h. This affects terminal integration, which is core to the developer workflow.
- **#946** (OPEN, 05-01) — Chat auto-scroll. Filed today, no comments yet. Given it's a regression from a recent fix, should be prioritized.

**Stale PRs:**
- **#944** (OPEN, 3 days) — Zen provider. Uncommented since filing. Low risk, should be reviewed.
- **#942** (OPEN, 1 day) — Remote sandbox. Large PR, likely needs architectural review — setting expectations for a slower merge cycle.

**No issues older than 30 days remain open** — the project has good hygiene on closing stale items.

**Links:** [Issues](https://github.com/moltis-org/moltis/issues) | [PRs](https://github.com/moltis-org/moltis/pulls) | [Latest Release](https://github.com/moltis-org/moltis/releases)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Good morning. Here is the CoPaw project digest for 2026-05-01.

---

## CoPaw Project Digest: 2026-05-01

### 1. Today's Overview
Activity is moderate-to-high, driven by a burst of community bug reports and feature requests following the release of v1.1.5.post1. The team merged 12 pull requests in the last 24 hours, focusing heavily on channel stability (WeCom/Feishu) and security (path traversal fix). The issue tracker saw 28 updates, with 12 issues closed, suggesting a responsive triage process. However, a significant number of open bugs (16) point to ongoing stability challenges, particularly around channel connectivity and production deployments. The community remains highly engaged, filing detailed reports and feature proposals.

### 2. Releases
- **v1.1.5.post1** (released 2026-04-30)
  - **Changes:** Includes a new `FeishuCardHandler` for interactive approval buttons (replacing text-based commands) and a fix for a path traversal vulnerability on Windows.
  - **Breaking Changes:** None reported.
  - **Migration Notes:** Users of Feishu approval flows should update to leverage the new interactive card UX; the old `/approval` text command flow is deprecated.

### 3. Project Progress (Merged/Closed PRs)
- **Security:** PR [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) (zhijianma) - Prevented absolute path traversal attacks on Windows by rejecting static file paths.
- **Channels (WeCom):**
  - PR [#3978](https://github.com/agentscope-ai/QwenPaw/pull/3978) (celestialhorse51D) - Fixed cross-loop runtime errors causing WeCom WS SDK crashes.
  - PR [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) (hongxicheng) - Eliminated double-reconnect race conditions and cross-loop disconnects.
  - PR [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) (hongxicheng) - Fixed "Thinking..." placeholder getting stuck by keeping the stream alive during long agent runs.
  - PR [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948) (hongxicheng) - Added `share_session_in_group` toggle for WeCom group chats to isolate member sessions.
- **Channels (Feishu):**
  - PR [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) (hongxicheng) - Implemented interactive card handlers for tool_guard approval.
  - PR [#3982](https://github.com/agentscope-ai/QwenPaw/pull/3982) (hongxicheng) - Added inline doc link hint for unsubscribed `card.action.trigger` events.
- **Frontend & UI:**
  - PR [#3981](https://github.com/agentscope-ai/QwenPaw/pull/3981) (bowenliang123) - Migrated deprecated Ant Design v5 APIs, removing console warnings.
  - PR [#3960](https://github.com/agentscope-ai/QwenPaw/pull/3960) (bowenliang123) - Fixed CodeMirror line wrapping overflow in tool call blocks.
- **Other:** PR [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) (suisrc) - Expanded knowledge base capabilities (first-time contributor).

### 4. Community Hot Topics
- **Most Active Discussion:** `#3955 - Windows Path Traversal Vulnerability` - This security issue garnered 12 comments and was closed quickly after the v1.1.5.post1 patch was released. Users appreciated the rapid response.
- **Feature Request with Strong Support:** `#3972 - /ralph-loop Magic Command` (4 comments) - A request for a self-referential task execution loop to eliminate manual re-prompting. This resonates with users doing long-running, iterative tasks (e.g., code generation).
- **Re-opened Pain Point:** `#2757 - WeCom Channel Frequent Disconnections` - A long-standing issue (since April 1) that resurfaced today. Users report needing to manually re-save configuration to restore connectivity. The fix in PR [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) directly targets this.
- **Cross-Library Compatibility:** `#3886 - ACP Compatibility with Hermes Agent` - A developer reported a `SimpleNamespace` not iterable error when trying to use CoPaw as a backend for the Hermes agent framework. This indicates growing demand for standard interop with other agent ecosystems.

### 5. Bugs & Stability
| Severity | Issue | Summary | Fix Status |
| :--- | :--- | :--- | :--- |
| **High** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Windows arbitrary file traversal vulnerability | Fixed in v1.1.5.post1 |
| **High** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | Idle cleanup cancels long-running agent tasks, losing responses | Open |
| **High** | [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | DeepSeek `reasoning_content` not passed back in multi-turn calls causing HTTP 500 | Open |
| **Medium** | [#3951](https://github.com/agentscope-ai/QwenPaw/issues/3951) | Creating a Yunxiao MCP server results in a generic Bug error | Open |
| **Medium** | [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) | "Running Config" settings page returns 404 | Open |
| **Medium** | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | `FunctionCallOutput` validation error when `call_id` is None, corrupting `loop_config.json` | Open |
| **Medium** | [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | Context compaction splits user/assistant pairs, causing orphaned UI elements | Open |
| **Low** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Page freeze on Debian 12 after saving model settings (non-root user) | Closed |
| **Low** | [#3971](https://github.com/agentscope-ai/QwenPaw/issues/3971) | Windows exe v1.1.4 first-run white screen | Closed (reproduced) |

**Stability Report:** Channel stability remains the top bug category, with three separate reports today (WeCom disconnections, stuck "Thinking...", cross-loop errors). The team is actively patching these.

### 6. Feature Requests & Roadmap Signals
- **Strong Signal for v1.2:** The `/ralph-loop` magic command (Issue [#3972](https://github.com/agentscope-ai/QwenPaw/issues/3972)) is a highly-requested productivity feature that aligns with the project's trend toward autonomous agent loops.
- **Team/Multi-Agent Orchestration:** Issue [#3987](https://github.com/agentscope-ai/QwenPaw/issues/3987) explicitly requests a team formation feature akin to Accio Work, signaling a user desire for structured multi-agent coordination beyond simple group chat.
- **UX & Workspace Architecture:**
  - `#3967` - Users want a separation between core config files and user data workspaces to prevent accidental deletion.
  - `#3983` - Request for an "Artifact" style code/preview dual view for rich content rendering.
- **Desktop Daemon:** Issue [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) asks for the Windows client to minimize to the tray instead of shutting down the background service. Likely to be addressed in a future client update.

### 7. User Feedback Summary
- **Satisfaction:** Users are vocal about stability improvements. The rapid patching of the path traversal vulnerability and the WeCom bugs was well-received.
- **Pain Point: Channel Reliability:** The most consistent frustration is with **WeCom and enterprise WeChat channel disconnections**. Users report it works for a few hours or days, then silently stops, requiring manual re-saving. The new patches are promising but need widespread testing.
- **Pain Point: Production Hardiness:**
  - The DeepSeek reasoning_content issue (`#3985`) blocks users of high-end reasoning models.
  - The Cron scheduler not auto-firing (`#3986`) breaks automated workflows.
  - The idle cleanup killing running tasks (`#3976`) is a critical reliability regression for long-running agents.
- **Positive Sentiment:** New users are impressed by the breadth of channels (Feishu, WeCom) and the speed of development. The `/approval` interactive card feature on Feishu received positive comments about reduced friction.

### 8. Backlog Watch
- **Ancient Open Issue:** `#2757 - WeCom Channel Frequent Disconnections` (Opened 2026-04-01). While PR [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) is a fix, this issue has been a persistent user complaint for a month. A thorough post-mortem or a dedicated wiki troubleshooting guide would help.
- **Open Feature (No Maintainer Response):** `#3621 - Pass WeChat sender_id to agent in group chat` - This request for identity awareness in group chats has been open for 11 days with no maintainer comment. Given the complexity of multi-turn identity management, it needs a formal triage flag (e.g., "good first issue" or "need design decision").
- **PR Under Review (Critical Path):** PR [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) - Unifies WeChat/Weixin identifier. This is a core architectural fix for channel identity mismatches. Despite being "Under Review" for 11 days, it has no activity. This PR should be prioritized to prevent future identity-related bugs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-01

## Today's Overview

ZeroClaw v0.7.4 shipped today as a significant patch release, landing a clean-room Matrix rewrite, a Mozilla Fluent i18n pipeline with multi-locale docs, and a ground-up rewrite of the CLI/TUI onboarding flow. Activity is very high: 50 issues and 50 PRs were updated in the last 24 hours, with a roughly 3:1 open-to-closed ratio across both categories. The project is in a healthy, active state with multiple core team members pushing fixes across the gateway, web UI, and skills subsystems. Several priority P0/P1 bugs remain open but have in-progress or pending fix PRs.

## Releases

### v0.7.4 (released today)
- **Changelog highlights**: First patch on the v0.7.x workspace foundation
- Clean-room Matrix rewrite (channel implementation)
- Mozilla Fluent i18n pipeline with multi-locale documentation
- Ground-up rewrite of the CLI/TUI onboarding flow
- Recovery of the WeChat iLink Bot channel
- Approximately 1 additional change mentioned in the summary
- **No breaking changes or migration notes indicated** in the release summary

## Project Progress

**16 PRs merged/closed today**, including several high-impact fixes and features:

- **Gateway stability**: `fix(gateway): evict cancel_tokens entry when session is deleted mid-turn` ([#6216](https://github.com/zeroclaw-labs/zeroclaw/pull/6216)) — prevents memory leaks on abandoned sessions
- **Web UI improvements**: 
  - `feat(web): open agent chat from memory row when session_id is present` ([#6217](https://github.com/zeroclaw-labs/zeroclaw/pull/6217)) — closes [#6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145)
  - `feat(web): mark OpenRouter free models in default-model dropdown` ([#6218](https://github.com/zeroclaw-labs/zeroclaw/pull/6218)) — closes [#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070)
  - `feat(web): chat input lock + stop button + running indicator` ([#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220)) — major UX improvement
  - `fix(web): dashboard bugfix bundle` ([#6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161)) — fixes Overview crash, model save, editor caret, and chat CPU spikes
- **Canvas tool cross-channel fix**: `fix(daemon,gateway,channels): share canvas store across daemon subsystems` ([#6221](https://github.com/zeroclaw-labs/zeroclaw/pull/6221)) — closes [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)
- **API routes**: `fix(gateway): add missing /api/channels route` ([#6069](https://github.com/zeroclaw-labs/zeroclaw/pull/6069))
- **Docker fix**: `fix(docker): copy web/dist to runtime stage in Dockerfile.debian` ([#5983](https://github.com/zeroclaw-labs/zeroclaw/pull/5983))
- **Webhook tool support**: `fix(gateway): enable tool support in webhook endpoint` ([#6080](https://github.com/zeroclaw-labs/zeroclaw/pull/6080))
- **Chat UI enhancements**: `feat(web): add chat message deletion, clear-all, and compact mode` ([#6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083))

## Community Hot Topics

1. **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — Bug: default_model issue on fresh install** (OPEN, 15 comments, P1)
   - Fresh LXC install fails with on-boarding error; workflow blocked. S1 severity. High community engagement indicates a common setup pain point.
   
2. **[#848](https://github.com/zeroclaw-labs/zeroclaw/issues/848) — Bug: Can't get web search tool working** (CLOSED, 8 comments)
   - Agent times out after 5 minutes on search; S2 severity. Now closed, suggesting a fix was applied.

3. **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) — RFC: Multi-agent UX flow — design** (OPEN, 7 comments)
   - Design RFC that has completed its 7-day discussion period but awaits core team vote. Significant architectural signal.

4. **[#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) — Bug: shell policy blocks git -C <path>** (OPEN, 3 comments, 2 👍)
   - Security sandbox issue — shell policy lowercases args, conflating `-c` and `-C`. S2 severity, high risk.

5. **[#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) — Bug: Web dashboard unavailable in Docker image** (OPEN, P0, 2 👍)
   - Docker image missing web/dist. Critical for Docker users; now has a fix PR merged ([#5983](https://github.com/zeroclaw-labs/zeroclaw/pull/5983)).

## Bugs & Stability

### Critical/Priority P0
- **[#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959)** — Web dashboard unavailable in Docker image (S3 minor but P0 priority). **Fix PR #5983 merged today**.
- **[#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)** — install.sh does not extract web dashboard from release tarball (S2 degraded). No fix PR yet.

### High Priority P1
- **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)** — default_model issue on fresh install (S1 blocked). No fix PR.
- **[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)** — Onboarding: choosing OpenAI Codex prompts for OpenAI API key instead (S1 blocked)
- **[#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)** — gateway-chat succeeds but /api/cost stays zero and no usage artifacts written (referenced by #6159)
- **[#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266)** — No pairing code shown when running on alternate port (S1 blocked). No fix PR.
- **[#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244)** — Dashboard: Channels tab crash (S2 degraded). **Fix PR #6161 merged today** (includes Overview render error fix).
- **[#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)** — CPU spikes when typing into agent chat (S0 data loss/security). **Fix PR #6161 merged today**.
- **[#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)** — SkillForge auto-integrator emits non-schema fields (status:blocked)

## Feature Requests & Roadmap Signals

### Likely for Next Release (v0.7.5)
1. **Multi-agent UX flow** ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) — RFC awaiting core team vote; if accepted, will be a major v0.8 candidate
2. **Schema v3 batch migrations** ([#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)) — Merge blocker for breaking config field changes
3. **WebSocket token usage in done frame** ([#5118](https://github.com/zeroclaw-labs/zeroclaw/issues/5118)) — PR #6159 is open with pending author action
4. **Native Anthropic extended thinking** ([#5630](https://github.com/zeroclaw-labs/zeroclaw/issues/5630)) — In progress, would enhance Claude provider support
5. **Gateway Web Chat UX improvements** ([#5999](https://github.com/zeroclaw-labs/zeroclaw/issues/5999)) — Three of four items landed in PR #6220 today
6. **SkillMeta deny_unknown_fields** ([#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128)) — Good first issue, follow-up to silent-drop typo bug

### Community-Requested Features
- **Recover agent chat from memory location** ([#6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145)) — **Implemented in PR #6217 today**
- **Ability to clear chat window** ([#6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077)) — **Implemented in PR #6083 today**
- **Hot-switch model & preserve chat context** ([PR #6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)) — Open, needs author action

## User Feedback Summary

### Pain Points (High Severity)
- **Fresh install failures**: Two P1/S1 bugs ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123), [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)) affect brand new users during onboarding — the critical first impression of the project
- **Docker/image distribution issues**: [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) and [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) indicate the web dashboard distribution pipeline has gaps that affect Docker and script-based installations
- **Cost tracking broken**: [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) shows /api/cost returns zero — potentially serious for users relying on cost monitoring

### Satisfaction Signals
- Active community engagement with 50+ issues/PRs updated in 24h
- Multiple users actively contributing fixes (singlerider landed 6+ PRs today alone)
- Strong maintainer response: several P0/P1 issues received fix PRs within 3-5 days of filing

### Use Cases Emerging
- **Self-hosted multi-LXC deployments**: Multiple issues reference LXC containers and cross-host provider connections (Ollama on separate LXC)
- **Channel-based agents**: Telegram/Discord/Slack canvas tool usage was broken ([#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)) — now fixed in PR #6221
- **Multi-locale support**: Fluent i18n pipeline in v0.7.4 suggests growing international user base

## Backlog Watch

### Critical Unresolved Issues (No Fix PR)
- **[#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)** — install.sh does not extract web dashboard (P0, filed 2026-04-25, no fix PR)
- **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)** — default_model fresh install issue (P1, filed 2026-04-26, 15 comments, no fix PR)
- **[#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266)** — No pairing code on alternate port (P1, filed 2026-04-03, status:accepted but no fix PR)
- **[#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)** — SkillForge emits non-schema fields (P1, status:blocked)

### Stale PRs Needing Attention
- **[#5161](https://github.com/zeroclaw-labs/zeroclaw/pull/5161)** — WebSocket steering/additive output fix (data:2026-04-01, needs-author-action, risk:high)
- **[#5207](https://github.com/zeroclaw-labs/zeroclaw/pull/5207)** — Theme switching/session crash/CSS consistency (data:2026-04-02, needs-author-action, risk:low)
- **[#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372)** — Truncate oversized memory API payloads (data:2026-04-06, needs-author-action, risk:medium)
- **[#5770](https://github.com/zeroclaw-labs/zeroclaw/pull/5770)** — Use SqliteSessionBackend for session tools (data:2026-04-15, needs-author-action, risk:high)
- **[#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905)** — Workspace bind-mount for DockerSandbox (data:2026-04-19, risk:high, risk:manual)
- **[#5981](https://github.com/zeroclaw-labs/zeroclaw/pull/5981)** — Pass allow_scripts through ReadSkillTool (data:2026-04-21, risk:high)

### Observations
The project is in a strong maintainer cycle, but several high-risk PRs have been awaiting author attention for 2+ weeks. The skills subsystem (SkillForge, SkillMeta) has accumulating technical debt that may benefit from dedicated cleanup sprints. The v0.7.x workspace foundation appears stable, and community contributions are flowing well.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*