# OpenClaw Ecosystem Digest 2026-04-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-27 04:34 UTC

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

Here is the project digest for **OpenClaw** on **2026-04-27**.

---

## OpenClaw Project Digest — 2026-04-27

### 1. Today's Overview
The OpenClaw project is experiencing a **high-velocity maintenance phase**, with **500 issues** and **500 PRs** updated in the last 24 hours. While the update cadence is massive, the majority of activity is on **long-standing tickets** rather than fresh reports. The project shipped **4 new beta releases** (v2026.4.25-beta.x) today, all focused on a **major Text-to-Speech (TTS) upgrade**. However, the overwhelming volume of open PRs (468) versus merged/closed (32) suggests a significant merge bottleneck. The community is highly engaged, but the sheer noise of stale items may obscure critical new defects.

### 2. Releases
Four new **beta releases** were published today, all tagged `v2026.4.25-beta.1` through `v2026.4.25-beta.4`. They share an identical changelog, indicating a rapid hotfix cycle for the same feature set.

- **Highlights:**
    - **Major TTS Overhaul:** Voice replies have been significantly upgraded with new features, including a `/tts latest` command, chat-scoped auto-TTS controls, agent/account-level overrides, and "personas".
    - **New TTS Providers:** Support added for Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3.
    - **Kudo:** Changes credited to @leonchui, @zoujiejun, and @solar2ain.
- **Impact:** This is a non-breaking feature update for most users. No specific migration notes are provided, but users relying on older TTS configurations should verify provider settings after upgrading.

### 3. Project Progress
Of the **500 PRs updated**, only **32** were merged or closed. This indicates a very low change-acceptance rate today relative to the volume of open work.

- **Notable New PRs (Opened Today):**
    - **[#72583] feat(ui): show raw config pending changes** — A UI enhancement to provide a review panel for raw JSON/JSON5 config edits.
    - **[#72589] feat(ui): display agent identities in session list** — Improves the Control UI by showing friendly agent labels instead of raw session keys.
    - **[#72582] fix(plugins): normalize lazy service override imports** — A platform fix for Windows users, normalizing import paths to handle drive letters (e.g., `C:\`).
- **Themes:** The few new PRs focus on **UI/UX polish** and **Windows compatibility fixes**.

### 4. Community Hot Topics
The most active discussions reveal a community focused on **model reliability, platform support, and cross-channel delivery**.

1.  **[#65302] 【放弃前的最后嘱咐】Your Updates Are Killing Your Product (Open)** [👍 5] — A passionate, high-emotion critique from a user (an AI agent user) alleging that rapid, breaking updates are "self-destructing" the product. This signals a significant **pain point around update stability**.
2.  **[#54253] Bug: OpenClaw returns error on RISC-V64 System (Open)** [👍 3] — A request for support on an exotic architecture. While niche, the 10 comments and 3 upvotes indicate a growing desire for platform diversity.
3.  **[#44718] Bug: ReferenceError: ANTHROPIC_MODEL_ALIASES (Closed)** [👍 3] — Despite being closed as a duplicate, this was a highly disruptive regression that broke all CLI commands for multiple users. It highlights the fragility of model initialization logic.
4.  **[#70854] Add gpt-5.5 catalog support (Closed)** [👍 3] — A fast-tracked feature request for the newly released GPT-5.5. It was closed as fixed, showing the team is responsive to major model releases.

### 5. Bugs & Stability
While the *latest* releases appear to be stable, the project is dealing with a significant backlog of regressions.

- **High Severity (Closed/Fixed):**
    - **Config Corruption:** `#47705` — A critical bug where fallback models permanently overwrote the primary model in `openclaw.json`.
    - **CLI Blockage:** `#44718`, `#45057`, `#45499` — A widespread regression (`ANTHROPIC_MODEL_ALIASES` initialization) that blocked all CLI commands in v2026.3.12. This was a high-impact, high-duplicate issue.
- **Medium Severity (Open):**
    - **RISC-V Support:** `#54253` — A platform blocker for users on RISC-V.
    - **Resource Conflict:** `#40540` — The `openclaw update` command fails on Windows with `EBUSY`, preventing self-updates.
    - **Telegram Streaming:** `#41581` — A regression where Telegram streaming quality degraded from smooth previews to choppy updates.
- **Stability Trend:** The high number of duplicate reports (e.g., the `ANTHROPIC_MODEL_ALIASES` error) suggests a need for **better regression testing** before tagging CLI releases.

### 6. Feature Requests & Roadmap Signals
The community is pushing for **intelligence, observability, and safety**.

- **Likely to Ship Next:**
    - **External Memory Provider API (`#49233`)** — A proposal for zero-downtime context compaction. This directly addresses a core pain point of agent interruptions.
    - **Token Usage Dashboard (`#49232`)** — High demand for cost tracking and visualization.
- **Under Discussion:**
    - **Session Memory Preservation (`#40418`, `#8185`)** — Users want agents to "remember" context from previous sessions when `/new` is used.
    - **Cloud Execution Provider (`#41308`)** — A large refactor (PR) to allow `exec` commands to run in cloud sandboxes, signaling a move toward more scalable agent compute.
    - **Graceful Process Shutdown (`#66399`)** — A request for `SIGTERM` before `SIGKILL` on timeouts, indicating user demand for more production-grade reliability.

### 7. User Feedback Summary
- **Dissatisfaction:** The primary source of negativity is **update fatigue**. The most "liked" open issue (`#65302`) is a detailed, emotional critique of the project's rapid, breaking release cycle. There is also a clear frustration with **cross-channel delivery failures** (Telegram, Discord, WhatsApp), where messages are generated but not sent back to the user.
- **Satisfaction:** Users are actively engaging with advanced features like ACP sessions, cron jobs, and fallback chains, suggesting that the **agent orchestration capabilities are a key strength**.
- **Use Cases:** The most common use cases are **multi-platform chat agents** (Telegram, Discord, WhatsApp) and **code generation** via Codex/ACP.

### 8. Backlog Watch
Several important PRs have been open for over a month without maintainer attention, representing a growing "debt":

1.  **[#42197] feat(ui): tool name style in usage panel (Stale)** — A small UI fix that is likely trivial to review.
2.  **[#42059] fix(telegram): batch fix 13 Telegram channel bugs (Stale)** — A **large, critical PR** fixing 13 bugs in the Telegram channel. Its staleness is concerning given the high volume of Telegram-related bug reports.
3.  **[#42027] fix: resolve exec PATH fallback, layered browser diagnostics... (Stale)** — Fixes for core `exec` and browser tools that have been ignored for over a month.
4.  **[#41308] feat(exec): add cloud execution provider (XL, Refactor)** — A massive feature PR (cloud sandboxing) that has been open since March 9th. This may be awaiting a major architectural discussion but is a significant roadmap item.

**Call to Action:** The maintainer team should prioritize merging or providing status updates on the **stale bug-fix PRs**, particularly `#42059` (Telegram), to reassure the community and reduce the noise in the open PR list.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries for 2026-04-27.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-04-27

### 1. Ecosystem Overview
The open-source personal AI agent landscape is experiencing a **rapid consolidation phase**, marked by intense feature iteration and growing pains around stability. Projects are universally focused on expanding platform support (WeChat, Discord, Telegram, Signal) and model provider diversity (DeepSeek, Ollama, Anthropic), but are struggling with the complexity this introduces. A clear **tension exists between rapid feature shipping and production-grade reliability**, as evidenced by widespread regressions, config persistence failures, and model compatibility issues across nearly every major project. The ecosystem is maturing from single-provider chat toys toward multi-agent, multi-platform orchestration frameworks, but the brittleness of the current generation of tools is a significant barrier to enterprise adoption.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score (1-10) | Signal-to-Noise |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 4 (beta) | 4 | Low – high noise, stale items dominate |
| **NanoBot** | 13 | 129 | 0 | 7 | High – active merges, clear focus |
| **Hermes Agent** | 50 | 50 | 0 | 6 | Fair – high merge volume, 2 P1 bugs |
| **PicoClaw** | ~1 | ~10 | 1 (nightly) | 6 | Fair – small but focused pipeline |
| **NanoClaw (Argus)** | 13 | 26 | 0 | 7 | High – rapid merges, responsive team |
| **NullClaw** | 1 | 0 | 0 | 3 | Low – only 1 issue, no PR activity |
| **IronClaw** | 5 | 8 | 0 | 5 | Fair – 3 canary failures, 1 merge |
| **LobsterAI** | 5 | 10 | 0 | 7 | High – focused bug-fix cycle |
| **Moltis** | 6 | 13 | 1 | 8 | High – fast turnaround on bugs |
| **CoPaw** | 31 | 10 | 0 | 5 | Moderate – 25 open issues, systemic bugs |
| **ZeroClaw** | 50 | 50 | 0 | 6 | Moderate – high PR velocity, S1 bugs |
| **TinyClaw** | 0 | 0 | 0 | N/A | N/A – no activity |
| **ZeptoClaw** | 0 | 0 | 0 | N/A | N/A – no activity |

### 3. OpenClaw's Position
**OpenClaw** remains the most active project by raw volume but is **struggling with manageability**. Its 500 issues and 500 PRs updated in 24 hours are unmatched, but the noise from stale items obscures critical defects. The project's key advantage is its **mature TTS system**, which just received a major overhaul (Azure, ElevenLabs, Local CLI support), a feature area no other project has matched.

**Technical approach differences:**
- OpenClaw uses a **monolithic core** with channel adapters, similar to ZeroClaw and CoPaw, but with the deepest plugin/tool ecosystem.
- Unlike NanoBot's more modular, skill-based architecture, OpenClaw's update cycle is breaking trust with its community (see Issue #65302: "Your Updates Are Killing Your Product").
- **Community size comparison:** OpenClaw's user base appears largest based on issue volume, but this is a double-edged sword—the project risks collapse under its own weight if the merge bottleneck (98% of PRs remain open) is not addressed.

### 4. Shared Technical Focus Areas
The following requirements are emerging independently across multiple projects, indicating strong ecosystem-level demand:

| Requirement | Projects Affected | Specific Need |
| :--- | :--- | :--- |
| **Multi-Model / Provider Failover** | NanoBot, ZeroClaw, IronClaw, LobsterAI, NanoClaw | Automatic fallback when primary API fails or is rate-limited; cross-provider model switching |
| **DeepSeek V4 Compatibility** | LobsterAI, ZeroClaw, CoPaw, NanoBot | Thinking mode `reasoning_content` not handled; schema/tool payload rejection |
| **Platform-Specific Adapter Quality** | OpenClaw, Hermes, NanoClaw, CoPaw, ZeroClaw | Telegram reactions/streaming broken; Discord URL handling regressed; Slack threading gaps |
| **Configuration Persistence** | CoPaw, Moltis, PicoClaw, ZeroClaw | Settings lost on restart/refresh; agent configs reset to defaults; vector model configs emptied |
| **Container/Resource Management** | NanoClaw, ZeroClaw, PicoClaw | OOM-killed agents; no CPU/memory limits; container hangs during long MCP calls |
| **Cross-Channel Delivery Reliability** | OpenClaw, Hermes, CoPaw, ZeroClaw | Messages generated but not sent; wrong session/agent routing; truncated responses |
| **Agent Loop Interruptibility** | NanoBot, OpenClaw | Users cannot provide mid-task guidance; agents ignore corrections during long loops |

### 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes | NanoClaw (Argus) | ZeroClaw | CoPaw | Moltis |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Multi-platform chat, TTS | Agent skills, model failover | Team collaboration, Kanban | Production deployment (Docker/containers) | Plugin/WASM ecosystem | Enterprise WeChat, mission CLI | Local-first, security, Web UI |
| **Target User** | Power users, multi-channel admins | Developers, API integrators | Teams, multi-agent workflows | Ops, self-hosters, multi-tenant | Plugin developers, embedded | Enterprise, Chinese market | Privacy-conscious, local hardware |
| **Architecture** | Monolithic + plugins | Skill-based modules | Agent group management | Containerized agents | WASM plugin runtime | Channel-centric monolith | Local LLM + encrypted creds |
| **Key Risk** | Merge bottleneck, update fatigue | PR backlog (105 open) | P1 bugs, plagiarism accusation | Telegram adapter quality | S1 bugs, 30-day old issues | Config persistence, chromadb segfault | Session editing regression |

### 6. Community Momentum & Maturity

**Tier 1 – Rapidly Iterating (High Risk/High Reward):**
- **OpenClaw**: Highest volume, but burning community goodwill. Needs structural reform (stale PR management, regression testing) to avoid a fork or exodus.
- **ZeroClaw**: Strong feature velocity (Matrix rewrite, schema v3), but accumulating critical bugs. The WASM plugin direction is ambitious but fragile.
- **NanoClaw (Argus)**: Post-v2 sprint mode with 16 merges/day. Container focus is production-ready, but Telegram/emoji gaps show QA gaps for new features.

**Tier 2 – Stabilizing (Moderate Risk):**
- **NanoBot**: Healthy balance of features and fixes. Model presets and failover are strategically important. The PR backlog (105 open) needs attention to prevent structural debt.
- **Hermes Agent**: Maintainer-driven cleanup (45 merges today) is good, but two P1 bugs and a plagiarism accusation signal governance challenges.
- **Moltis**: Excellent bug turnaround (fixes within 24h). Best project health score (8/10). The session rename regression (#888) is minor but needs a quick fix.
- **LobsterAI**: Cowork feature stabilization is the main story. Revert chain shows responsiveness. DeepSeek V4 fix merged today.

**Tier 3 – Low Activity / Maintenance Mode:**
- **NullClaw**: Only 1 open bug (CPU busy loop). No PR activity. Stable but not advancing.
- **TinyClaw, ZeptoClaw**: No activity. Effectively dormant.

### 7. Trend Signals
The following industry trends emerge from the feedback and bug reports across the ecosystem. These provide strategic value for AI agent developers:

1.  **"Model Lock-In" is the Top Adoption Barrier.** Users want to bring their own providers (DeepSeek, Ollama, custom endpoints) but are blocked by hardcoded model names, schema mismatches, and missing failover. **Signal:** Any project that solves cross-provider fallback elegantly will capture significant market share.

2.  **Production-Grade Reliability is Table Stakes.** Configuration lost on restart, backup failures, and OOM-killed containers are not acceptable for deployments beyond experimentation. The demand for container resource limits (NanoClaw #2029), graceful shutdowns (OpenClaw #66399), and data persistence (CoPaw #3817) shows the ecosystem is being evaluated for "real work."

3.  **Platform Completeness Beats Novelty.** Users are not asking for new AI capabilities; they are asking for Telegram emoji reactions to work (NanoClaw), Discord URL previews to be correct (NanoClaw), and Slack onboarding to not break (Hermes). The winners will be those that invest in **adapter hardening** over new features.

4.  **Security is Emerging as a Differentiator.** Multiple projects are moving API keys to encrypted stores (Moltis #885), limiting WASM plugin env access (ZeroClaw #5919), and quarantining imported skills (Moltis #882). Projects that prioritize security-by-design will attract enterprise and privacy-conscious users.

5.  **Asian Platform Support is a Growth Vector.** Requests for WeChat Work (WeCom), Yuanbao (Tencent), Feishu, and QQ are concentrated in the Chinese-language community (NanoBot, NanoClaw, CoPaw, IronClaw). Any project targeting a global user base must prioritize these platforms, as the Western market (Discord, Slack, Telegram) is already saturated.

6.  **User Surge in DIY/Hardware Deployments.** Requests for Raspberry Pi (PicoClaw #2675), RISC-V (OpenClaw #54253), and ARM64 (ZeroClaw #4842) indicate a growing segment of users deploying agents on low-power edge hardware. This suggests use cases in robotics, embedded control, and IoT are emerging beyond pure chat.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date: 2026-04-27**

---

## Today's Overview

NanoBot is experiencing a **high-velocity development day** with 129 PRs updated in the last 24 hours and 13 issues updated, reflecting intense community and maintainer activity. The project shows strong momentum with 24 merged/closed PRs today, indicating active feature integration and bug fixing. No new releases were published, but the volume of merged code suggests a major release may be imminent. The project remains healthy with a balance of feature development, stability fixes, and community engagement, though the 105 open PRs signal a growing backlog that maintainers are actively working through.

---

## Releases

**No new releases today.** The last release remains v0.1.5 (post-1). Given the significant volume of merged PRs (24 today alone), a new release covering model presets, MCP sanitization, session improvements, and skill management features is likely in the near future.

---

## Project Progress

**24 PRs merged/closed today** across multiple feature areas:

### Features & Enhancements
- **Model Presets System**: PR [#3358](https://github.com/HKUDS/nanobot/pull/3358) adds `ModelPresetConfig` for named bundles of model + generation parameters, enabling quick model switching
- **Slash Commands**: PR [#3132](https://github.com/HKUDS/nanobot/pull/3132) adds `/clear`, `/skills`, and `/mcp` commands; PR [#3135](https://github.com/HKUDS/nanobot/pull/3135) adds runtime `/model` and `/compact` commands for live model switching
- **WebUI Media Support**: PR [#3430](https://github.com/HKUDS/nanobot/pull/3430) adds video media rendering with signed `media_urls` for browser-safe file serving
- **Session Timestamp Context**: PR [#3463](https://github.com/HKUDS/nanobot/pull/3463) exposes session turn timestamps in model context
- **Slack Threading**: PR [#3462](https://github.com/HKUDS/nanobot/pull/3462) preserves thread context for proactive replies in Slack
- **Built-in Skills**: PR [#3457](https://github.com/HKUDS/nanobot/pull/3457) adds `create-instance` skill for creating new bot instances via conversation

### Critical Fixes
- **DeepSeek Compatibility**: PR [#3427](https://github.com/HKUDS/nanobot/pull/3427) fixes non-string content payloads and improves session token budgeting
- **MCP Name Sanitization**: PR [#3470](https://github.com/HKUDS/nanobot/pull/3470) sanitizes MCP capability names to prevent Anthropic/OpenAI API validation errors
- **Slack Thread Routing**: PR [#3465](https://github.com/HKUDS/nanobot/pull/3465) fixes subagent announcements routing to correct thread session

### Infrastructure
- **Auto-switch Model Failover**: PR [#3083](https://github.com/HKUDS/nanobot/pull/3083) adds `fallback_models` support for cross-provider automatic failover (based on [#3358](https://github.com/HKUDS/nanobot/pull/3358) model presets)
- **Skill CRUD Operations**: PR [#3137](https://github.com/HKUDS/nanobot/pull/3137) adds unified `manage_skill` tool replacing scattered filesystem operations

---

## Community Hot Topics

### Most Discussed Issues

1. **[#2133: Agent Loop User Message Queueing](https://github.com/HKUDS/nanobot/issues/2133)** (19 comments, CLOSED)
   - **Pain Point**: During complex multi-step tasks, agents cannot receive user input until the agent loop completes. Users must use `/stop` to interrupt.
   - **Proposed Solutions**: Either have agents self-terminate loops when waiting for approval, or implement interruptible loops that can accept mid-task user guidance.
   - **Community Sentiment**: Strong desire for real-time agent responsiveness during long tasks.

2. **[#3376: Model Provider Failover](https://github.com/HKUDS/nanobot/issues/3376)** (11 comments, 1 👍, OPEN)
   - **Pain Point**: Single provider configuration leads to task failures when API experiences timeouts, rate limits (429), or service errors.
   - **Proposed Solution**: Automatic failover across multiple configured providers/models rather than just retry within same provider.
   - **Note**: PR [#3083](https://github.com/HKUDS/nanobot/pull/3083) directly addresses this with `fallback_models` support.

3. **[#1181: Dual-Layer Architecture (Steering Loop)](https://github.com/HKUDS/nanobot/issues/1181)** (3 comments, 9 👍, CLOSED)
   - **Proposal**: Introduce a Steering Loop layer above the ReAct loop for dynamic task management and higher autonomy.
   - **Community Interest**: 9 upvotes—the highest of any issue—indicates significant demand for smarter runtime orchestration.

### Most Active Pull Requests

- **[#3083: Fallback Models Support](https://github.com/HKUDS/nanobot/pull/3083)** — Cross-provider failover, the most anticipated feature this month
- **[#3358: Model Presets](https://github.com/HKUDS/nanobot/pull/3358)** — Foundation for multiple upcoming features including failover and runtime switching
- **[#2219: Incremental Session Saving](https://github.com/HKUDS/nanobot/pull/2219)** — Prevents data loss during agent loop crashes (long-running PR since March)

---

## Bugs & Stability

### Critical (Fix Available)
| Bug | Issue | Fix PR | Severity |
|-----|-------|--------|----------|
| MCP capability names with spaces/special characters cause API validation errors | [#3468](https://github.com/HKUDS/nanobot/issues/3468) | [#3470](https://github.com/HKUDS/nanobot/pull/3470) merged | High |
| DeepSeek V4 `reasoning_content` must be passed back error | [#3469](https://github.com/HKUDS/nanobot/issues/3469) | Fix expected in [#3427](https://github.com/HKUDS/nanobot/pull/3427) | High |
| DeepSeek non-string message content payloads | [#3443](https://github.com/HKUDS/nanobot/issues/3443) | [#3458](https://github.com/HKUDS/nanobot/pull/3458) open | High |
| AsyncOpenAI client has no timeout, hangs up to 600s | [#3455](https://github.com/HKUDS/nanobot/issues/3455) | PR in progress | Medium-High |

### Moderate
| Bug | Issue | Status |
|-----|-------|--------|
| WeCom (WeChat Work) media file upload fails | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | PR [#3471](https://github.com/HKUDS/nanobot/pull/3471) fixes relative path resolution |
| WebUI WebSocket fails on remote host (0.0.0.0 binding) | [#3473](https://github.com/HKUDS/nanobot/issues/3473) | No fix yet—new issue today |
| Subagent thread routing in Slack channels | [#3464](https://github.com/HKUDS/nanobot/issues/3464) | PR [#3465](https://github.com/HKUDS/nanobot/pull/3465) open |

### Low
| Bug | Issue | Status |
|-----|-------|--------|
| Reasoning field leaks into user-visible content (non-streaming) | [#3443](https://github.com/HKUDS/nanobot/issues/3443) | CLOSED, addressed in [#3427](https://github.com/HKUDS/nanobot/pull/3427) |
| Whisper transcription retry on transient failures | [#3253](https://github.com/HKUDS/nanobot/pull/3253) | Open PR with exponential backoff |

---

## Feature Requests & Roadmap Signals

### High Likelihood for Next Release

1. **Model Provider Failover** (PR [#3083](https://github.com/HKUDS/nanobot/pull/3083)) — Almost ready for merge, addresses [#3376](https://github.com/HKUDS/nanobot/issues/3376)
2. **Model Presets System** (PR [#3358](https://github.com/HKUDS/nanobot/pull/3358)) — Foundation feature, likely to land before failover
3. **Long Task Tool** (PR [#3460](https://github.com/HKUDS/nanobot/pull/3460)) — Meta-ReAct loop for breaking long tasks into steps
4. **Incremental Session Saving** (PR [#2219](https://github.com/HKUDS/nanobot/pull/2219)) — Data loss prevention, high community demand

### Medium Likelihood

5. **Per-Channel Configuration** for `sendProgress`/`sendToolHints` (Issue [#3452](https://github.com/HKUDS/nanobot/issues/3452))
6. **Interruptible Agent Loop** — Real-time user intervention during tasks (Issue [#2133](https://github.com/HKUDS/nanobot/issues/2133) merged into [#2915](https://github.com/HKUDS/nanobot/issues/2915))
7. **Configurable Compaction Ratio** (Issue [#3270](https://github.com/HKUDS/nanobot/issues/3270), CLOSED as not actionable)

### Lower Likelihood / Architectural

8. **Dual-Layer Architecture (Steering Loop)** (Issue [#1181](https://github.com/HKUDS/nanobot/issues/1181)) — 9 upvotes indicates demand, but requires significant refactoring

---

## User Feedback Summary

### Pain Points

1. **Agent Loop Unresponsiveness**: Users report agents ignore mid-task instructions in loops (Issues [#2133](https://github.com/HKUDS/nanobot/issues/2133), [#2915](https://github.com/HKUDS/nanobot/issues/2915)). The agent says "Let me do XYZ" but won't accept corrections.

2. **Single Provider Reliability**: Multiple provider configurations exist but failover is absent. Users report task failures due to rate limits or service outages (Issue [#3376](https://github.com/HKUDS/nanobot/issues/3376)).

3. **DeepSeek Compatibility Issues**: Non-standard message content fields cause request failures, requiring normalization (Issues [#3469](https://github.com/HKUDS/nanobot/issues/3469), [#3443](https://github.com/HKUDS/nanobot/issues/3443)).

4. **MCP Naming Restrictions**: Community discovering that MCP tools with special characters break API calls—particularly relevant for PostgreSQL MCP servers (Issue [#3468](https://github.com/HKUDS/nanobot/issues/3468)).

### Satisfaction Indicators

- Active community contributing fixes (e.g., [#3470](https://github.com/HKUDS/nanobot/pull/3470) by chengyongru, [#3465](https://github.com/HKUDS/nanobot/pull/3465) by mt-huerta)
- Chinese-language community actively participating (Issues [#2133](https://github.com/HKUDS/nanobot/issues/2133), [#3376](https://github.com/HKUDS/nanobot/issues/3376), [#3435](https://github.com/HKUDS/nanobot/issues/3435))
- Feature requests are well-formed with clear problem statements, indicating engaged, technically sophisticated users

---

## Backlog Watch

### Long-Unanswered Issues Requiring Maintainer Attention

| Issue | Created | Last Updated | Comments | Priority |
|-------|---------|--------------|----------|----------|
| [#2219](https://github.com/HKUDS/nanobot/pull/2219): Incremental session saving | 2026-03-18 | 2026-04-27 | 0 (PR) | High — prevents data loss |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181): Dual-layer steering loop | 2026-02-25 | 2026-04-27 | 3 | Medium — high upvotes (9) but requires architectural change |
| [#2133](https://github.com/HKUDS/nanobot/issues/2133): Agent loop user intervention | 2026-03-17 | 2026-04-27 | 19 | High — resolved with [#3450](https://github.com/HKUDS/nanobot/pull/3450)? Needs confirmation |
| [#2915](https://github.com/HKUDS/nanobot/issues/2915): Directing agent while in loop | 2026-04-07 | 2026-04-27 | 3 | Medium — overlaps with [#2133](https://github.com/HKUDS/nanobot/issues/2133) |

### Backlog Trends

- **Incremental Session Saving** (PR [#2219](https://github.com/HKUDS/nanobot/pull/2219)) has been open for over a month with no review comments
- The **long task tool** (PR [#3460](https://github.com/HKUDS/nanobot/pull/3460)) and **model presets** (PR [#3358](https://github.com/HKUDS/nanobot/pull/3358)) are new but seem strategically important given the volume of dependent PRs
- The `/clear` command (PR [#3467](https://github.com/HKUDS/nanobot/pull/3467) and [#3132](https://github.com/HKUDS/nanobot/pull/3132)) has duplicate implementations, suggesting coordination issues between contributors

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for 2026-04-27.

---

## Hermes Agent Project Digest: 2026-04-27

### 1. Today's Overview

Today shows massive activity with 50 issues and 50 PRs updated in the last 24 hours, driven by the end of a major merge sprint. A significant volume of older PRs have been batch-merged/closed (45), signaling maintainer focus on backlog reduction. The community is actively discussing a major new feature—a Kanban multi-profile collaboration board (PR #16100)—while two P1 critical bugs remain open, including a hook invocation failure for built-in tools and a crash in the `copilot-acp` provider. No new releases were published today.

### 2. Releases

No new releases were published today.

### 3. Project Progress

The team merged or closed **45 pull requests** today, covering a wide range of fixes and features:

- **Core Stability & CLI**: Merged PRs to fix `Event loop is closed` GC crashes (#3437) and restore the missing `/model` command handler (#3548). The `hermes launcher` was fixed to properly use local venv and the package entrypoint (#3738).
- **Browser Automation**: The browser tool received a hardening pass, using explicit `argv` and improved environment lookup (#3445).
- **Memory Systems**: A new integration for **ByteRover** as a long-term memory system was merged (#3499).
- **Platform Expansions**: Merged PRs include native `/approve` and `/deny` slash commands for Discord (#3620), a fix for Discord's deferred "thinking..." indicator (#3615), and a Mattermost direct send fix via REST API (#3689).
- **Agent & Tools**: The agent's context length alignment across display and runtime was fixed (#11437). A fallback bug in the context compressor, where `summary_budget` was passed instead of `focus_topic`, was resolved (#11412).

### 4. Community Hot Topics

- **Yuanbao (Tencent) Gateway Request** (*Issue #12240*): The most commented issue, a feature request to add Tencent's Yuanbao platform as a new gateway. It highlights the community's desire for broader Asian platform support beyond the current Western-centric list.
- **Duplicate CLI Bug Report** (*Issue #10573*): A low-quality, spam-like report ("copied evolver") received significant attention (10 👍), likely reflecting community frustration with non-substantive submissions.
- **Plagiarism Accusation** (*Issue #10625*): A user accused the project of plagiarism (10 👍), indicating a point of brand friction that maintainers should address publicly.
- **Kanban Collaboration Board** (*Issue #16102, PR #16100*): A major RFC for a "durable multi-profile collaboration board" was opened by co-founder `teknium1`, representing a potential shift toward multi-agent or multi-user workflows.

### 5. Bugs & Stability

**Critical (P1):**
- **`post_tool_call` hook not invoked** (*Issue #12922*): Built-in tools like `memory`, `todo`, and `delegate_task` bypass plugin hooks because they are dispatched directly in `run_agent.py`. No fix PR is linked.
- **`copilot-acp` provider crashes** (*Issue #14437, CLOSED*): Cras early due to a `'types.SimpleNamespace' object is not iterable` error. A fix was merged today.

**High (P2):**
- **Browser automation fails on Linux root/VPS** (*Issue #15765*): Needs `--no-sandbox` flag and auto-detection for Chromium channels. Affects a common server deployment scenario.
- **Feishu message button click error** (*Issue #9585*): Approval buttons show errors on click. A related issue (#9533) identifies the root cause (wrong HTTP verb: PUT vs PATCH).
- **First-run Slack onboarding bug** (*Issue #14632, CLOSED*): The bot tells users to type `/sethome`, which doesn't work. Likely fixed in a merged PR today.

**Moderate (P3):**
- **CLI unreadable on light backgrounds** (*Issue #4807*): Has 9 👍, a persistent UX issue affecting developer onboarding.
- **Context compaction too abrupt** (*Issue #9561*): Users report that single-pass summarization drops in-flight task context.

### 6. Feature Requests & Roadmap Signals

- **Dynamic Delegation** (Issues #9556, #9557): Requests for streaming delegation with mid-flight interrupt and an adaptive feedback loop for delegation policy. These suggest the delegation system is a key area for future improvement.
- **UI/UX Enhancements**: Multiple requests for a configurable `reply_to` threading mode (#9584), a visible spinner/progress bar for TUI (#10658), and light-mode CLI support (#4807).
- **Platform Support**: User feedback clearly signals demand for non-English/non-Western platforms (Yuanbao, Feishu/WeChat improvements).
- **Next Release Prediction**: Given the high volume of merged PRs today, the next release will likely focus on **platform-specific bug fixes** (Discord, Mattermost), **stability** for the ACP provider and event loop, and **memory expansion** via the ByteRover integration.

### 7. User Feedback Summary

- **Positive**: Users are actively migrating from similar projects (e.g., OpenClaw) to Hermes, indicating strong competitive positioning. The Kanban RFC and ByteRover integration show user enthusiasm for advanced features.
- **Pain Points**:
    - **Platform Friction**: Users on Feishu, Discord, and Slack report specific interaction bugs (buttons, attachments, onboarding).
    - **Onboarding**: The CLI is unusable in light terminal themes, a basic barrier for developers.
    - **Trust**: The plagiarism accusation (#10625), while likely uninformed, indicates a need for clearer communication about the project's origins and open-source dependencies.

### 8. Backlog Watch

- **Feishu/WeChat `source_tag` missing** (*Issue #9575*): Open for 13 days without a maintainer response. This is a data integrity issue affecting the web UI.
- **Windows Git Bash crash** (*Issue #9574*): Open for 13 days. A niche but frustrating crash on a common developer setup.
- **Question about Project Name** (*Issue #8445*): Open for 15 days. A simple, low-effort community engagement opportunity that went unanswered.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-04-27.

---

## PicoClaw Project Digest: 2026-04-27

### 1. Today's Overview
Activity is **very high**, driven by a strong community response to a major provider bug and a significant internal refactoring effort. In the last 24 hours, the team merged a critical fix for ChatGPT Codex OAuth (`#2679`), advanced a unified runtime events infrastructure (`#2677`), and began work on new serial hardware support (`#2673`). While only one issue was closed, the PR pipeline is full (10 open), indicating a solid development cadence as the project pushes toward stability and new hardware integrations.

### 2. Releases
- **Nightly Build (v0.2.7-nightly.20260427.39dec354)**
  - *Status:* Unstable automated build.
  - *Changelog:* [Compare v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
  - *Note:* No stable release this period. Users on `v0.2.7` are the primary reference for reported regressions (e.g., Issue #2628 regarding the "Thinking" response).

### 3. Project Progress
Two PRs were merged/closed in the last 24 hours:

- **`#2679` [Merged] - fix: enable ChatGPT subscription (OAuth) in picoclaw**
  - Critical fix addressing empty responses from the Codex backend (Issue #2674).
- **`#2415` [Merged] - fix(config): show precise malformed config diagnostics**
  - Improves user experience by providing exact line/column errors for broken `config.json` files.
- **`#2672` [Closed] - feat(pico): add structured tool call support to web chat**
  - Although closed (likely superseded or merged into a large refactor), this work established foundational `tool_calls` logic now being unified in PR `#2680`.

### 4. Community Hot Topics
- **`#2674` [Open] Codex OAuth: empty assistant response** — [View Issue](https://github.com/sipeed/picoclaw/issues/2674)
  - **Activity:** 1 reaction (like). The most urgent community issue, quickly paired with a fix PR (`#2679`). Users are directly impacted by broken ChatGPT Plus subscriptions.
- **`#2675` [Open] Raspberry Pi and Pi Zero 2W support** — [View Issue](https://github.com/sipeed/picoclaw/issues/2675)
  - **Activity:** Significant interest in expanding PicoClaw to low-cost ARM hardware, suggesting a growing DIY/embedded user base.
- **`#295` [Open] Feature: Intelligent Model Routing** — [View Issue](https://github.com/sipeed/picoclaw/issues/295)
  - **Activity:** 10 comments. A long-simmering roadmap item with sustained engagement. Users are clearly concerned with cost and performance optimization across different LLMs.

### 5. Bugs & Stability
| Issue | Severity | Summary | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| **`#2674`** | **Critical** | ChatGPT Codex OAuth returns empty responses for streaming items via `response.output_item.done`. | **Yes** (`#2679` merged) |
| **`#1042`** | **High** | `exec` tool's `guardCommand` incorrectly blocks safe network commands (e.g., `curl wttr.in/Beijing`) when `restrict_to_workspace` is true. | **No** |
| **`#2628`** | **Medium** | v0.2.7 regression: No configuration option to disable the new "Thought" and "Tool" response messages. | **No** (workaround in progress via PR `#2680`) |

### 6. Feature Requests & Roadmap Signals
- **Blocking Requests:** **Raspberry Pi support** (`#2675`) and **Exa search provider** (`#2676`) are the most directly requested features this period.
- **Likely for Next Version:**
  - **Unified Runtime Events (`#2677`):** This massive refactoring of agent observability is nearly complete and will likely land in the next stable release.
  - **MQTT Channel (`#2653`):** Adding an IoT-friendly communication channel is a strong signal of PicoClaw's expansion into hardware and smart home use cases.
  - **Structured Tool Calls (`#2672` / `#2680`):** The refactoring here suggests that a polished, frontend-friendly tool call display is a top priority.

### 7. User Feedback Summary
- **Pain Points:**
  - **Empty OAuth responses** (`#2674`): Breaking the ChatGPT Plus integration immediately erodes trust in the provider setup.
  - **Missing Raspberry Pi support** (`#2675`): Users want to run PicoClaw on constrained, low-power devices.
  - **Inflexible UI behavior** (`#2628`): Power users dislike the loss of control over the "Thinking" indicator introduced in v0.2.7.
- **Use Cases:**
  - **Cost-sensitive production:** The model routing feature (`#295`) shows users are deploying PicoClaw in settings where every API call costs money.
  - **IoT/Hardware control:** Requests for serial (`#2673`) and MQTT (`#2653`) support indicate use cases beyond pure chat, such as robotics and embedded system control.

### 8. Backlog Watch
- **`#295` [Open] Feature: Intelligent Model Routing (since 2026-02-16)** — [View Issue](https://github.com/sipeed/picoclaw/issues/295)
  - **Status:** High user engagement (10 comments) but no recent maintainer assignment or PR. This is a top-tier roadmap item that has not seen active implementation progress in over two months.
- **`#1042` [Open] Bug: exec tool guardCommand false positive (since 2026-03-04)** — [View Issue](https://github.com/sipeed/picoclaw/issues/1042)
  - **Status:** A clear security/workflow bug that breaks a core skill (Weather). No fix PR has been proposed despite being open for 53 days.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-27

## Today's Overview

NanoClaw saw intense development activity today, with **26 PRs and 13 issues updated** in the last 24 hours, signaling a project in full-sprint mode following the v2 architectural release (2026-04-22). The community is actively testing the new architecture, surfacing a wave of platform-specific bugs in the Telegram, Signal, and Discord adapters alongside infrastructure improvements for container resource management and stability. Ten open issues remain active, with the maintainer team merging/closed 16 PRs today, demonstrating strong responsiveness. A notable naming migration from "NanoClaw" to "Argus" (PR #1738, 942 substitutions across 100 files) appears to be progressing through the codebase.

## Releases
**No new releases today.** The most recent release remains v2 (2026-04-22). The community is actively patching v2 via commits rather than a formal point release.

## Project Progress

**16 PRs merged/closed today**, indicating significant forward momentum:

- **Setup & onboarding improvements**: PR #2030 and #2035 (both merged) add a remote OneCLI option and advanced settings flow in the setup wizard, addressing deployment flexibility for users with external gateway hosts.
- **Container stability**: PR #2031 (merged) fixes a critical "container-froze-on-MCP-call-then-killed-by-ceiling" failure mode by keeping heartbeats fresh across tool calls and widening the ceiling for any tool.
- **Authentication fix**: PR #2023 (merged) passes `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN` into agent containers, resolving 401 errors for users with custom Anthropic-compatible endpoints.
- **Named migration**: PR #1738 (merged) renames NanoClaw to Argus across 942 substitutions in 100 files, a major branding/renaming effort.
- **Web UI milestone**: PR #2037 (merged) enables end-to-end agent group creation from the Paraclaw web UI without Claude Code, closing issue #1.
- **Bug fixes on legacy issues**: PRs #1912, #1913, #1916, #1917 (older PRs from Apr 22, now closed) fixed container output parsing, `@Andy` trigger renaming, and NaN guarding for config env vars.

## Community Hot Topics

| Issue/PR | Activity | Analysis |
|---|---|---|
| [#1903](https://github.com/qwibitai/nanoclaw/issues/1930) — "Support other models and third-party API channels" | 1 comment, open since Apr 23 | Chinese-language feature request for multi-model support; represents a significant user base wanting vendor diversity beyond Anthropic |
| [#2036](https://github.com/qwibitai/nanoclaw/pull/2036) — Per-group env vars for containers | Open PR, actively discussed | Indicates production users need per-agent-group configuration isolation, suggesting multi-tenant or multi-purpose deployments |
| [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) — Signal outbound attachments | New today, open | Signal adapter completeness is a community priority; dropping attachments was a known gap now being addressed |
| [#2041](https://github.com/qwibitai/nanoclaw/issues/2041) — Emoji shortcode normalization | New today, open | Telegram reaction support is broken for 78% of emoji; user is doing live testing in Telegram groups to document the gap |

**Underlying needs**: The community is demanding (a) multi-provider support beyond Anthropic, (b) cross-platform parity for reactions and attachments, and (c) production-hardening around container resource isolation and session routing.

## Bugs & Stability

| Severity | Issue | Status | Notes |
|---|---|---|---|
| **Critical** | [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) — Container froze on MCP call, killed by ceiling after 30 min | **Fixed** (merged today) | Heartbeat gaps during long MCP tool calls caused container death; fix keeps heartbeat across tool calls |
| **High** | [#2044](https://github.com/qwibitai/nanoclaw/issues/2044) — Discord `<URL>` handling broken in v2 | Open, no fix | Regression: wrapping URLs with `<>` suppresses previews on Discord, but v2 converts them to markdown links, *enabling* previews — opposite of intended |
| **High** | [#2043](https://github.com/qwibitai/nanoclaw/issues/2043) — Telegram over-escapes apostrophes as `&apos;` | Open, no fix | Agent messages rendered with literal `&apos;` instead of `'`; root cause identified, expected to be straightforward fix |
| **Medium** | [#2042](https://github.com/qwibitai/nanoclaw/issues/2042) — Telegram `add_reaction` silently fails in group chats | Open, root cause diagnosed | Platform ID stored as 3-part (chat:msg:group) but Telegram adapter expects 2-part pattern; classic serialization mismatch |
| **Medium** | [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) — `onecli not found` on fresh Linux installs | Open | PATH not propagated to bash subprocess; affects new users on first setup |
| **Low** | [#2032](https://github.com/qwibitai/nanoclaw/issues/2032) — Scheduled tasks with `wakeAgent: false` bypass gating when pushed as follow-ups | Open, fix PR #2033 exists | Task pre-check scripts are skipped if container is mid-query; PR#2033 defers these to main loop |
| **Low** | [#2026](https://github.com/qwibitai/nanoclaw/issues/2026) — onecli.dev returning 521 (Cloudflare error) | Open | Upstream infrastructure issue, not project bug |
| **Low** | [#2025](https://github.com/qwibitai/nanoclaw/issues/2025) — Setup hangs on "Installing the basics…" when sudo needs password | Open | Fresh Debian 13 user experience issue |

## Feature Requests & Roadmap Signals

**High-likelihood for next release**:
- **Remote OneCLI support** (PRs #2030, #2035 — already merged) — Setup wizard now offers connecting to a remote OneCLI gateway instead of local install. This paves the way for centralized gateway management.
- **Per-group environment variables** (PR #2036 — open) — Would enable multi-tenant deployments with isolated configs per agent group; likely to merge soon given maintainer activity.

**Community-demand signals**:
- **Multi-model/third-party API support** ([#1930](https://github.com/qwibitai/nanoclaw/issues/1930)) — User requests "more open, more practical" model support beyond Anthropic. This is a strategic decision point for the project.
- **Container resource limits** ([#2029](https://github.com/qwibitai/nanoclaw/issues/2029)) — No caps on `--memory`, `--cpus`, `--pids-limit` can lead to OOM-killed hosts; this is a production-deployment blocker.
- **Agent-to-agent session threading** (PR #2002 — open) — Fixes replies landing in wrong sessions when multiple sessions coexist; essential for multi-channel deployments.

## User Feedback Summary

**Pain points**:
- **Setup friction**: New users on Debian 13 experience hangs when sudo requires a password ([#2025](https://github.com/qwibitai/nanoclaw/issues/2025)); fresh Linux installs hit `onecli not found` due to PATH issues ([#1973](https://github.com/qwibitai/nanoclaw/issues/1973)). This suggests the setup flow needs better error messaging and non-interactive mode.
- **Platform adapter quality**: Three Telegram issues filed today alone (over-escaping, reaction failures, emoji normalization) indicate Telegram support was shipped with known gaps. Discord URL handling regressed in v2.
- **Production readiness**: Users requesting resource limits ([#2029](https://github.com/qwibitai/nanoclaw/issues/2029)) and reporting mid-query container hangs ([#2031](https://github.com/qwibitai/nanoclaw/issues/2031)) suggest the project is being evaluated for production use but lacks hardening.

**Satisfaction indicators**:
- High PR velocity (26 in 24h) and quick merges (16 closed today) suggest an engaged maintainer team.
- The Perplexity research skill (PR #515) and Shabbat mode (PR #547) — both from Feb 2026 but only today closed — show the project values niche but meaningful features.

## Backlog Watch

| Issue/PR | Age | Status | Risk |
|---|---|---|---|
| [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) — Third-party model support | 4 days (since Apr 23) | Open, 1 comment | Growing Chinese-language user base may become vocal if unaddressed |
| [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) — `onecli not found` PATH bug | 3 days (since Apr 24) | Open, 1 comment | Blocking new Linux users; should be prioritized to improve onboarding |
| [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) — Container resource limits | 1 day (since Apr 26) | Open | Production blocker; no maintainer response yet |
| [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) — Origin-session threading | 2 days (since Apr 25) | Open PR | Multi-channel deployments waiting on this fix |

**Maintainer attention needed**: No issues appear critically abandoned given the project's high activity, but [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) (resource limits) has no maintainer acknowledgment despite being a production-deployment blocker. The Telegram adapter bugs filed today ([#2041](https://github.com/qwibitai/nanoclaw/issues/2041), [#2042](https://github.com/qwibitai/nanoclaw/issues/2042), [#2043](https://github.com/qwibitai/nanoclaw/issues/2043)) are fresh but collectively represent a significant quality gap in a major chat platform adapter.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-04-27**.

---

### 1. Today's Overview
Project activity is very low, with no new releases, pull requests, or merged work in the last 24 hours. The sole signal is a single open issue (#870) reporting a critical performance bug. While the project is not dormant, the current state reflects a maintenance lull with one urgent stability problem awaiting attention. Overall project health is stable but warrants a focused response to the reported CPU issue.

### 2. Releases
**None.** There are no new releases to report.

### 3. Project Progress
**No pull requests were merged or closed in the last 24 hours.** No features or fixes were advanced during this period.

### 4. Community Hot Topics
There is currently only one active discussion:

- **Issue #870: [Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870)** (1 comment)
  - **Who:** User `weissfl` opened the issue on 2025-04-25. The issue has 1 comment (likely from the reporter or a bot).
  - **Analysis:** This is the top (and only) community touchpoint. The user is demonstrating a clear performance pain point. The underlying need is for the Gateway component to properly yield the CPU when idle—specifically on WSL2, which suggests a possible interaction between NullClaw’s `accept()` loop and the WSL2 kernel’s behavior (e.g., `accept4()` not blocking as expected). The user wants the service to be a good citizen in resource-constrained environments.

### 5. Bugs & Stability
Only one bug is active, and it is rated **High Severity** due to continuous 100% CPU consumption.

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#870: Gateway accept4 busy loop on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | **High** | One thread runs at 100% CPU during idle on WSL2; service remains functional but drains resources. | No | 

**Recommendation:** This is a clear regression or platform-specific issue. The maintainer should prioritize reproducing the `accept4` loop on a WSL2 instance.

### 6. Feature Requests & Roadmap Signals
**No new feature requests were made in the last 24 hours.** The only topic is a bug fix, not an enhancement. If the `accept4` issue is resolved, it may lead to a minor point release (e.g., a hotfix) rather than a feature update.

### 7. User Feedback Summary
- **Pain Points:**
  - **Performance waste:** The user (`weissfl`) explicitly reports "one thread consumes 100% CPU continuously, even when idle." This indicates dissatisfaction with resource usage, especially on WSL2 where CPU isolation may be weak.
  - **Undefined behavior on WSL2:** The Gateway works functionally but not efficiently, suggesting a gap in platform testing.
- **Satisfaction Indicators:** None reported; no users expressed satisfaction or gratitude for a fix in this window.

### 8. Backlog Watch
Currently, there are **no long-unanswered issues or PRs** that appear to be abandoned. The only open issue (#870) is recent (2 days old). However, if this issue remains without a maintainer response for another 48–72 hours, it should be flagged as a potential backlog concern.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-27

## Today's Overview

The IronClaw project shows moderate activity today with 5 open issues and 8 pull requests updated in the last 24 hours. A concerning pattern has emerged: three live canary pipelines (`provider-matrix`, `public-smoke`, and `private-oauth`) all failed against a single commit (7404e7d), signaling a potential regression in deployment infrastructure or provider connectivity. On the positive side, one significant core PR was merged — a cleanup of runtime authority boundaries under the `reborn` initiative. Community contributions remain healthy, with two new contributors submitting quality-of-life and infrastructure improvements. No new releases were published today.

---

## Releases

**No new releases today.** The latest known release remains unreported in the 24-hour window.

---

## Project Progress

### Merged/Closed PRs (1 total)

- **#2969** (CLOSED) — [size: XL, risk: low, scope: docs, scope: dependencies, contributor: core] **feat(reborn): clean up runtime authority boundaries** — *Author: serrrfirat*
  - Sealed process resource reservations to prevent unauthorized bypass/release of process resources
  - Moved dispatch port contracts into `ironclaw_host_api`, removing production dependency `ironclaw_capabilities → ironclaw_dispatcher`
  - Made dispatcher dispatch use the canonical `resolve` path
  - ⚠️ Note: This may introduce breaking changes for code interacting directly with capability/dispatcher internals

### Open PRs Advancing (7 total)

| PR | Title | Key Detail |
|----|-------|------------|
| #2394 | [WIP] feat: wecom channel | Standalone Enterprise WeChat WASM channel; MVP with inbound callbacks, Agent API, token caching, media handling |
| #2974 | fix: improve TUI contrast and process cleanup | Dark mode now respects terminal foreground; light theme higher-contrast; prevents orphaned TUI processes on terminal hangup |
| #2970 | chore: build Railway from source | Removes GHCR dependency; builds from repository source for Railway deployment |
| #2593 | chore(deps): bump actions group | 14 GitHub Actions updates including `actions/checkout` v4→v6, Claude Code Action updates |
| #2973 | chore(deps): bump everything-else group | 39 Rust dependency updates (agent-client-protocol 0.10.2→0.11.1, postgres-types, refinery, etc.) |
| #2972 | chore(deps): bump wasm group | wasmtime 43.0.1→44.0.0, wasmtime-wasi updates |
| #2971 | chore(deps): bump tokio-ecosystem group | tokio 1.50.0→1.52.1, tokio-tungstenite 0.26.2→0.28.0, tokio-postgres updates |

---

## Community Hot Topics

### Most Active Issues

1. **#1697** — [scope: llm] **How to use Codex as base model?** — *Author: YANGTUOMAO* ⬆️
   - Created 2026-03-27, updated today with 1 comment
   - User authorized Codex but cannot resolve model name (`Plus`, `GPT-5.4 mini` not working). CLI output cut off.
   - **Underlying need:** Clear documentation or UI improvements for custom model/provider configuration. The ambiguity suggests a missing mapping between cloud-provider model names and IronClaw's internal model registry.

2. **#2833** — [bug] **Cross-Conversation Response Contamination When Switching Conversations** — *Author: sunglow666*
   - Created 2026-04-22, updated today
   - When Conversation A executes a multi-step reasoning task, switching to Conversation B causes A's responses to appear in B's chat view.
   - **Underlying need:** This is a significant UX/reliability issue for multi-session workflows. Users likely run multiple agents concurrently, and state isolation failures undermine trust in the system's conversation management.

### Most Active PRs

- **#2394** — WeCom channel (WIP, XL size, high risk) — Active since April 13, still evolving. Indicates strong community interest in enterprise Chinese messaging platform support.

---

## Bugs & Stability

### 🔴 High Severity

1. **#2977** — **Live canary failed: provider-matrix openai-compatible** (NEW today)
   - Automated test failure for OpenAI-compatible providers
   - Run: [Link](https://github.com/nearai/ironclaw/actions/runs/24974704617) | Commit: 7404e7d
   - **No fix PR exists yet**

2. **#2976** — **Live canary failed: public-smoke** (NEW today)
   - `public-smoke` lane failed on Anthropic provider
   - **No fix PR exists yet**

3. **#2975** — **Live canary failed: private-oauth** (NEW today)
   - Dedicated runner failure for private OAuth flows
   - **No fix PR exists yet**

### 🟡 Medium Severity

4. **#2833** — **Cross-Conversation Response Contamination** (since April 22)
   - Conversation state isolation failure
   - No fix PR identified; impacts all multi-session users

### Analysis

All three canary failures point to a single suspect commit (7404e7d). The failures span different lanes (OpenAI-compatible, Anthropic, OAuth), suggesting either a shared infrastructure issue (e.g., runner environment problem, network change) or a broad regression in agent execution logic. The involvement of `private-oauth` on a dedicated runner makes an environment-wide issue more likely. **No fix PRs have been filed** for any of these failures, which is concerning — these are automated pipelines that usually auto-generate issues; maintainers should prioritize investigation.

---

## Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Request | Likely Version |
|-------|---------|----------------|
| #1697 | Codex/OpenAI-compatible model support documentation | Next minor release — documentation fix likely |
| #2833 | Fix cross-conversation state isolation | High priority — core UX issue, could be hotfix candidate |
| #2394 | WeCom (Enterprise WeChat) channel | Future release — still WIP, XL scope, high risk |

### Roadmap Signals

- **WASM ecosystem advancing**: The wasmtime 44.0.0 bump (#2972) and WeCom WASM channel (#2394) show continued investment in WebAssembly-based agent execution.
- **Dependency hygiene**: Three bulk dependency updates (39 Rust deps, 14 GitHub Actions, tokio ecosystem) suggest the team is actively maintaining supply chain security.
- **Railway deployment independence**: PR #2970 removes GHCR dependency for Railway, improving deployment resilience and reducing third-party service coupling.

### Prediction: Next Version Likely Includes

1. Fix for cross-conversation contamination (critical UX bug)
2. WeCom channel MVP (if PR #2394 merges)
3. Resolved canary pipeline failures
4. Updated model provider documentation

---

## User Feedback Summary

### Pain Points (Dissatisfaction)

1. **Model configuration confusion** (#1697) — Users struggle to map cloud-provider models to IronClaw's configuration system. The error is opaque, with CLI output truncated. Suggests missing error messaging or a model registry UX issue.

2. **Conversation state leaks** (#2833) — A serious reliability concern. When running multi-step reasoning tasks, switching conversations corrupts the user's view. This undermines IronClaw's value as a multi-agent platform.

### Positive Signals

- New contributors are active (#2974 from Cloudymap1e, #2970 from drchirag1991) — indicates good onboarding and community health
- WeCom integration (#2394) shows enterprise adoption interest from Asian markets
- User asking for Codex support demonstrates real-world demand for models beyond default offerings

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| #1697 | 31 days (since March 27) | **1 comment, no maintainer response** | User has been waiting over a month for a basic "how to configure model" question. This is a documentation gap that creates a poor first-time user experience. |
| #2833 | 5 days (since April 22) | **No maintainer response, no fix PR** | Core UX bug. If this is reproducible, it should be prioritized. |
| #2975, #2976, #2977 | <24 hours | Auto-generated canary failures | Three pipeline failures on the same commit require urgent triage — could be blocking CI/CD for all contributors. |

### Open PRs Awaiting Review

None of the 7 open PRs have explicit reviewer assignments noted. Several (especially #2974 TUI fix and #2970 Railway build) are by new contributors and would benefit from timely feedback to maintain contributor momentum.

---

*Generated from nearai/ironclaw GitHub data, 2026-04-27 update cycle. All linked items resolve to `github.com/nearai/ironclaw`.*

**Project Health Summary**: ⚠️ **Caution** — Active development continues with strong community contributions, but three canary pipeline failures and an unanswered month-old user question indicate operational risk. The merged runtime authority cleanup (#2969) is a positive architectural step.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-04-27**.

---

## LobsterAI Project Digest – 2026-04-27

### 1. Today's Overview
The project saw **high activity** on the pull request front, with **10 PRs merged/closed** in the last 24 hours, indicating a focused push to stabilize core features. However, there were **no new releases** and **5 open issues** remain active, including one new high-severity bug regarding DeepSeek V4 integration. The maintainers executed a complex series of reverts and fixes related to session model synchronization and lifecycle timers, suggesting recent patches introduced regressions that required immediate correction. Overall, the project is in a **rapid bug-fix cycle** following feature work.

### 2. Releases
**None.** No new versions were published today.

### 3. Project Progress – Merged PRs
The following **10 PRs** were closed/merged in the last 24 hours. The activity was dominated by a **revert sequence** followed by a corrected final fix for the cowork feature.

| PR # | Title | Focus Area |
|------|-------|------------|
| [#1828](https://github.com/netease-youdao/LobsterAI/pull/1828) | fix: update default model configs for Volcengine and Qwen | Provider Config |
| [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) | fix(patch): extend DeepSeek V4 thinking mode wrapper to cover anthropic-messages API format | Model Compatibility |
| [#1825](https://github.com/netease-youdao/LobsterAI/pull/1825) | Revert "Revert "fix(cowork): sync session model so agent reports current model correctly"" | Cowork |
| [#1824](https://github.com/netease-youdao/LobsterAI/pull/1824) | Revert "Revert "fix(cowork): prevent lifecycle fallback timer from completing a newer…"" | Cowork |
| [#1823](https://github.com/netease-youdao/LobsterAI/pull/1823) | Fisherdaddy/fix schema or payload | Schema/Payload (Multi-area) |
| [#1822](https://github.com/netease-youdao/LobsterAI/pull/1822) | Revert "fix(cowork): prevent lifecycle fallback timer from completing a newer…" | Cowork |
| [#1821](https://github.com/netease-youdao/LobsterAI/pull/1821) | Revert "fix(cowork): sync session model so agent reports current model correctly" | Cowork |
| [#1820](https://github.com/netease-youdao/LobsterAI/pull/1820) | fix(cowork): prevent lifecycle fallback timer from completing a newer… | Cowork |
| [#1817](https://github.com/netease-youdao/LobsterAI/pull/1817) | fix(cowork): sync session model so agent reports current model correctly | Cowork |
| [#1816](https://github.com/netease-youdao/LobsterAI/pull/1816) | style(cowork): align quick actions width with homepage input box | UI/UX |

**Key advances:**
- **Cowork stability:** A major bug was resolved where a lifecycle fallback timer (3-second safety net) was incorrectly completing *newer* user runs (run B) after a delay from an old run (run A). The final fix (PR #1820) and its re-revert (PR #1824) ensure the timer only applies to the correct turn.
- **Model sync:** Fixed the agent not reporting the current model when users switch models mid-session (PR #1817 and re-revert #1825). The fix patches the session runtime prompt via the `sessions.patch` RPC before each `chat.send`.
- **Provider config updates:** Default models for **Volcengine** (image support enabled for all) and **Qwen** (added `qwen3.6-plus` as primary) were updated (PR #1828).
- **DeepSeek V4 Thinking Mode:** A fix was applied to extend the thinking mode wrapper to cover the `anthropic-messages` API format (PR #1827).

### 4. Community Hot Topics
- **High-Severity Bug Report – DeepSeek V4 Incompatibility (Issue #1813)**
  - **Link:** [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)
  - **Activity:** Created Apr 24, updated Apr 27, 3 comments.
  - **Summary:** User reports that DeepSeek V4 is unusable, throwing `LLM request failed: provider rejected the request schema or tool payload`. This is the most recent and active open issue. A fix PR (#1827) was merged today, which should address this.
- **Feature Request – Token Usage Statistics (Issue #88)**
  - **Link:** [Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88)
  - **Activity:** Created Feb 24, updated Apr 26, 3 👍 reactions.
  - **Summary:** A long-standing request for a dashboard to track token usage and improved logging for debugging custom API errors. High community support (3 thumbs-up).

### 5. Bugs & Stability
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 schema/tool payload rejection | **Fix merged today** (PR #1827) |
| **Medium** | [#60](https://github.com/netease-youdao/LobsterAI/issues/60) | Context length exceeded (131K token limit hit) | Open, stale |
| **Medium** | [#40](https://github.com/netease-youdao/LobsterAI/issues/40) | Windows install creates duplicate files in C: drive; SKILLs path misconfiguration | Open, stale |
| **Low** | [#52](https://github.com/netease-youdao/LobsterAI/issues/52) | Cannot access WeChat Official Account articles | Open, stale |

**Stability Assessment:** The cowork feature was unstable due to a timer regression, but the PR chain (reverts + final fix) suggests the team has restored stability. The DeepSeek V4 issue (#1813) should be resolved with today’s merged patch.

### 6. Feature Requests & Roadmap Signals
- **Token Usage Dashboard (Issue #88):** The most upvoted feature request (3 👍). Users want a built-in dashboard for tracking token consumption and API error logs. This is a strong candidate for the next minor release, given the community demand and its utility for debugging custom APIs.
- **Model Config Expansion (PR #1828):** The addition of `qwen3.6-plus` and image support for Volcengine signals continued investment in multi-provider support.
- **Windows Installation Reliability (Issue #40):** The duplicate file creation on Windows suggests a need for better path management or a configurable working directory. This may be addressed in a future release.

### 7. User Feedback Summary
- **Pain Point – Schema/Tool Payload Issues:** The most pressing user complaint is that DeepSeek V4 is broken out-of-the-box. This directly impacts user trust and adoption of new models.
- **Pain Point – Debugging Difficulty:** Users (via Issue #88) are frustrated by the lack of logging and token statistics, making it hard to diagnose errors when using custom API endpoints.
- **Satisfaction – Quick Cowork Fixes:** The rapid response to the cowork timer regression (PRs #1820–1825) shows the team is responsive to regressions, which is likely well-received by power users relying on real-time agent interactions.
- **Use Case – Custom API Integration:** There is a clear user segment running their own API backends (e.g., DeepSeek, Volcengine) who need robust error handling and transparency.

### 8. Backlog Watch
The following issues are **stale** (2+ months old) and remain open, indicating areas that may need maintainer attention:

| Issue | Age | Last Update | Summary |
|-------|-----|-------------|---------|
| [#60](https://github.com/netease-youdao/LobsterAI/issues/60) | ~2 months | Apr 26 | Context length limit error with DeepSeek (common user mistake, but could be mitigated with auto-truncation) |
| [#40](https://github.com/netease-youdao/LobsterAI/issues/40) | ~2 months | Apr 26 | Windows install path confusion (C: vs D: drive) |
| [#52](https://github.com/netease-youdao/LobsterAI/issues/52) | ~2 months | Apr 26 | Cannot access WeChat official account articles (likely a web scraping/permission issue) |
| [#88](https://github.com/netease-youdao/LobsterAI/issues/88) | ~2 months | Apr 26 | Token usage/logging dashboard (feature request with community support) |

**Note:** While these issues have recent updates, the updates are likely automated stale-bot pings. An official maintainer response or assignment would improve project health perception.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-27

## Today's Overview

Moltis saw a very active development day with 13 pull requests updated and 6 issues cycled, of which 4 were closed. The project shipped a new release (20260426.05) and merged 10 PRs, indicating strong forward momentum. Activity is concentrated on fixes for security, skill management, and Web UI improvements, plus a new feature around on-demand local LLM loading. The maintainers are responsive, with most bugs receiving near-immediate fix PRs.

## Releases

**New release: [20260426.05](https://github.com/moltis-org/moltis/releases/tag/20260426.05)** (tagged 2026-04-26)

No detailed changelog was provided in the data. However, based on merged PRs from today, this release very likely includes:
- Fix for skill import from repository (issue #880)
- Fix for auto-enabling all skills on repo import (security issue #881)
- Voice API key migration to encrypted credential store (issue #867)
- On-demand local LLM model loading/unloading with idle timeout (PR #884)
- Bundled skill enable/disable fixes (issues #875, #877)
- Code snippet display fix for dark mode (PR #879)

There are no documented breaking changes or migration notes.

## Project Progress

**10 PRs merged/closed today** demonstrate significant engineering throughput:

| PR | Description | Status |
|----|-------------|--------|
| [#885](https://github.com/moltis-org/moltis/pull/885) | Store voice API keys in credential store, not `moltis.toml` (fixes #867) | Merged |
| [#884](https://github.com/moltis-org/moltis/pull/884) | On-demand local LLM model loading/unloading with idle timeout | Merged |
| [#883](https://github.com/moltis-org/moltis/pull/883) | Fix relative paths for marketplace repo skills (fixes #880) | Merged |
| [#882](https://github.com/moltis-org/moltis/pull/882) | Stop auto-enabling all skills on repository import (fixes #881) | Merged |
| [#886](https://github.com/moltis-org/moltis/pull/886) | Show chat status badges in visible toolbar row (Web UI) | Merged |
| [#890](https://github.com/moltis-org/moltis/pull/890) | Make Telegram channel optional (closed, superseded) | Closed |
| [#889](https://github.com/moltis-org/moltis/pull/889) | Make Telegram channel optional (closed, superseded) | Closed |
| [#879](https://github.com/moltis-org/moltis/pull/879) | Fix code snippets background turning white in dark mode | Merged |
| [#878](https://github.com/moltis-org/moltis/pull/878) | Derive bundled skill enabled state from config (fixes #875) | Merged |
| [#877](https://github.com/moltis-org/moltis/pull/877) | Handle bundled skill disable/enable via config (fixes #875) | Merged |

**Key theme**: Security hardening (API key storage, skill import quarantine), skill management fixes, and Web UI polish dominated today's work. The new local LLM idle unloading feature (PR #884) is a notable addition for resource management.

## Community Hot Topics

1. **[Issue #867 — Voice API keys stored in plain text](https://github.com/moltis-org/moltis/issues/867)** (closed, 0 comments)  
   Highlighted a significant security concern. The community user `penso` not only reported it but also authored the fix PR #885, which moved keys to an encrypted credential store. This demonstrates strong community ownership of security.

2. **[Issue #880 — Skill import from repository broken](https://github.com/moltis-org/moltis/issues/880)** (closed, 1 comment)  
   Reported by `bsarkisov` and fixed within the same day via PR #883. The fix corrected relative-path handling for non-Skill-format marketplace repos (e.g., Anthropic's `document-skills`).

3. **[Issue #888 — Sessions no longer editable after PR #886](https://github.com/moltis-org/moltis/issues/888)** (open, 0 comments)  
   A regression from a merged feature. The "More" modal containing session name/rename was removed, and the new badge bar did not include a replacement. This is currently unresolved.

## Bugs & Stability

Bugs identified today, ranked by severity:

1. **Medium — [Issue #888](https://github.com/moltis-org/moltis/issues/888): Session name and rename removed**  
   Regression from PR #886. Sessions can no longer be renamed via Web UI. No fix PR exists yet.

2. **Low — [Issue #875](https://github.com/moltis-org/moltis/issues/875): Can't disable bundled skills via Web** (closed)  
   Fixed by PRs #877 and #878 on the same day.

3. **Low — [Issue #880](https://github.com/moltis-org/moltis/issues/880): Skill import from repository broken** (closed)  
   Fixed by PR #883 on the same day.

**Security bugs:**

4. **High — [Issue #867](https://github.com/moltis-org/moltis/issues/867): Voice API keys stored in plain text** (closed)  
   Fixed by PR #885. This was a vulnerability, not a crash.

5. **Medium — [Issue #881](https://github.com/moltis-org/moltis/issues/881): Skill import auto-enables all skills** (closed)  
   Fixed by PR #882. Bypassed quarantine safety model.

## Feature Requests & Roadmap Signals

1. **[Issue #887](https://github.com/moltis-org/moltis/issues/887) — Add `PREAMBLE.md` workspace file as template variable (OPEN)**  
   Feature request by `Cstewart-HC` to support per-agent custom opening text via prompt profile template variables. This builds on the template variable system from PR #466. Likely to ship in the next release given the author is also a frequent contributor.

2. **[PR #876](https://github.com/moltis-org/moltis/pull/876) — File upload button for web chat sessions (OPEN)**  
   Adds file attachment capability to match UX of major LLM providers. Still open since April 25, but the required `get_session_id` RPC was recently merged (mentioned in PR). Likely to merge soon.

3. **[PR #339](https://github.com/moltis-org/moltis/pull/339) — Traditional Chinese (zh-TW) locale support (OPEN)**  
   Long-open since March 5, with no recent maintainer interaction. May require maintainer attention to merge or close.

4. **[PR #891](https://github.com/moltis-org/moltis/pull/891) — Make Telegram channel optional (OPEN)**  
   Third attempt (after #889 and #890 were closed) to gate Telegram behind a feature flag. Shows desire to reduce build size.

## User Feedback Summary

- **Positive signal**: Users are actively reporting bugs and seeing fixes within 24 hours (e.g., #880, #875, #867). The project's turnaround time for reported issues is excellent.
- **Security consciousness**: Users `bsarkisov` and `penso` are clearly security-aware, identifying API key exposure (#867) and skill import vulnerabilities (#881). This suggests the user base includes security-sensitive deployers.
- **UI dissatisfaction**: Issue #888 shows that a feature intended to improve UX (badges in toolbar) inadvertently removed session editing capability. No user complaints yet, but it's a regression.
- **Resource sensitivity**: The local LLM idle unloading feature (#884) suggests users want RAM-efficient operation on local hardware.

## Backlog Watch

1. **[PR #339 — Traditional Chinese locale support](https://github.com/moltis-org/moltis/pull/339)** (OPEN since March 5)  
   No maintainer comments or activity in last 24 hours. This is the longest-open PR at 53 days. It adds significant localization value but requires review.

2. **[PR #876 — File upload button for web chat](https://github.com/moltis-org/moltis/pull/876)** (OPEN since April 25)  
   Has not been merged despite the dependency (`get_session_id` RPC) being addressed. May need follow-up or rebase.

3. **[Issue #888 — Sessions not editable after PR #886](https://github.com/moltis-org/moltis/issues/888)** (OPEN, no comments)  
   Fresh regression without a fix in progress. Could escalate if users start complaining about lost session management.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-27

## Today's Overview

CoPaw saw moderate activity with 31 issues updated and 10 PRs touched in the last 24 hours. The project remains in a high-bug-fix cycle following the recent v1.1.4 releases, with several configuration persistence bugs and channel-specific regressions reported by users. Three PRs were merged today addressing ACP agent management, timezone handling, and per-tab agent selection, while a significant number of open issues (25) indicate sustained community engagement but also growing stability concerns. No new releases were made today.

## Releases

None.

## Project Progress

Three PRs were merged/closed today:

- **[PR #3859 — feat(ACP): add ACP agent rename and delete in WebUI](https://github.com/agentscope-ai/CoPaw/issues/3859)** — Frontend-only change enabling custom ACP agents to be renamed and deleted from the console configuration page, reusing existing APIs.
- **[PR #3858 — fix(timezone): normalize non-standard timezone names](https://github.com/agentscope-ai/CoPaw/issues/3858)** — Fixes a startup crash on systems like Deepin 25 that report non-standard timezone names (e.g., `Asia/Beijing`), causing `ZoneInfoNotFoundError` and 500 errors across the entire app. Adds a mapping table for 13 known non-standard timezone names.
- **[PR #3857 — fix(console): use hybrid storage for per-tab agent selection](https://github.com/agentscope-ai/CoPaw/issues/3857)** — Implements hybrid storage (sessionStorage + localStorage) so new tabs inherit the last selection while multiple tabs can operate independently, addressing a core usability complaint.

Additionally, **[PR #3746](https://github.com/agentscope-ai/CoPaw/issues/3746)** (first-time contributor) continues under review with a 300s task timeout in `BaseChannel` and DingTalk session collision prevention.

## Community Hot Topics

The following issues generated the most discussion:

- **[Issue #3499 — [Bug]: Accessing pages is slow](https://github.com/agentscope-ai/CoPaw/issues/3499)** (5 comments) — API endpoint `/api/models` shows inconsistent response times, suggesting a backend performance bottleneck that may affect all model discovery operations.
- **[Issue #3821 — [Question]: Backup never succeeds](https://github.com/agentscope-ai/CoPaw/issues/3821)** (4 comments) — User reports backup feature returns to project selection screen after ~1 minute, affecting both old and latest versions. Unclear if system-specific or universal.
- **[Issue #3824 — [Bug]: Configuration lost on button toggle or page refresh](https://github.com/agentscope-ai/CoPaw/issues/3824)** (4 comments) — Agent language, plan mode, and long-term memory LLM configurations disappear after closing or refreshing. Called a "severe bug" by the reporter (v1.1.4.post1).
- **[Issue #3817 — [Question]: Long-term memory vector model config reset on restart](https://github.com/agentscope-ai/CoPaw/issues/3817)** (4 comments) — Docker deployment: all workspace vector model configs (`base_url`, `model_name`) reset to empty on container restart. Root cause identified: initialization logic overwrites `agent.json` with defaults within ~4 seconds of startup.

**Underlying need**: Users are experiencing a systemic configuration persistence problem across multiple subsystems (agent settings, long-term memory, vector models). This is the single most impactful pain point today.

## Bugs & Stability

### High Severity

- **[Issue #3854 — chromadb Rust binding segfault kills entire process](https://github.com/agentscope-ai/CoPaw/issues/3854)** — On Ubuntu 25.10 / Python 3.13, `chromadb_rust_bindings.abi3.so` causes SIGSEGV 45+ times per session, crashing the entire QwenPaw process. No Python-level exception handling. No fix PR exists yet.
- **[Issue #3850 — Web UI pause button is visual-only, backend continues](https://github.com/agentscope-ai/CoPaw/issues/3850)** — Pause button stops SSE rendering but backend Agent continues tool execution (v1.1.4.post2). Fix requires backend-side pause mechanism.
- **[Issue #3824 — Configuration lost on refresh](https://github.com/agentscope-ai/CoPaw/issues/3824)** — See above. Affects plan mode, LLM config, long-term memory. Fix PR: none yet.
- **[Issue #3817 — Vector model config reset on restart](https://github.com/agentscope-ai/CoPaw/issues/3817)** — See above. Container-specific persistence failure. Fix PR: none yet.

### Medium Severity

- **[Issue #3847 — `qwenpaw mission` CLI commands fail with 405 + TypeError](https://github.com/agentscope-ai/CoPaw/issues/3847)** — All three mission subcommands (`list`, `start`, `status`) crash due to double `/api` appending in URL construction (v1.1.4.post2). Fix PR: **[#3860 (chore: remove mission CLI)](https://github.com/agentscope-ai/CoPaw/issues/3860)** — proposes removing the CLI entirely.
- **[Issue #3851 — MODEL_EXECUTION_FAILED with DeepSeek thinking mode](https://github.com/agentscope-ai/CoPaw/issues/3851)** — DeepSeek's `reasoning_content` field not handled in multi-turn conversations; closed as duplicate.
- **[Issue #3822 — MCP causes infinite freeze on chat](https://github.com/agentscope-ai/CoPaw/issues/3822)** — MCP client lifecycle error causes indefinite chat freeze with no UI indication. No fix PR.

### Low Severity

- **[Issue #3808 — macOS Dock icon changes to Python on MCP enable](https://github.com/agentscope-ai/CoPaw/issues/3808)** — Cosmetic but visible bug.
- **[Issue #3852 — Multi-tab agent continuity broken](https://github.com/agentscope-ai/CoPaw/issues/3852)** — Messages route to wrong agent when switching tabs. Fix PR: **[#3857](https://github.com/agentscope-ai/CoPaw/issues/3857)** was merged today to address this via hybrid storage.
- **[Issue #3849 — Agent reply disappears mid-sentence (console channel)](https://github.com/agentscope-ai/CoPaw/issues/3849)** — No error message or warning.

## Feature Requests & Roadmap Signals

- **[Issue #3844 — Auto model listing after provider registration](https://github.com/agentscope-ai/CoPaw/issues/3844)** — Requests automatic model discovery without manual registration for providers with dozens of models. **[PR #3819](https://github.com/agentscope-ai/CoPaw/issues/3819)** (in review) implements a browsable remote model list with checkbox-based batch insertion, replacing the old "Auto Discover" button.
- **[Issue #3823 — Automated backup with API/CLI](https://github.com/agentscope-ai/CoPaw/issues/3823)** — User requests scriptable backup functionality.
- **[Issue #3825 — Inject per-message context into shell tool subprocess](https://github.com/agentscope-ai/CoPaw/issues/3825)** — Pass Matrix sender/room/session IDs to skill scripts via environment variables.
- **[Issue #3820 — Retry mechanism for dream_callback (nightly memory optimization)](https://github.com/agentscope-ai/CoPaw/issues/3820)** — Adds resilience to cron-based memory optimization jobs.
- **[Issue #3837 — WeChat channel: message merging and send delay config](https://github.com/agentscope-ai/CoPaw/issues/3837)** — When Agent sends >10 messages in one response, WeChat truncates. Requests merge and delay options.
- **[PR #3846 — GitHub Copilot model provider support](https://github.com/agentscope-ai/CoPaw/issues/3846)** (first-time contributor) — Adding Copilot as a model provider, which could expand the user base significantly.

**Likely next-version inclusions**: The model listing improvements (#3844/#3819) and auto speech-to-text for QQ (#3845) are in active PR review and close to completion.

## User Feedback Summary

**Pain points (recurring themes):**

1. **Configuration persistence failures** — Multiple users report that agent settings, LLM configs, and vector model configs are lost on restart/refresh across both native and Docker deployments. This is the dominant theme across at least 6 separate issues.
2. **Backup unreliability** — Backup feature appears non-functional for at least one user (#3821), and another asks for automated backup APIs (#3823).
3. **Channel-specific message handling** — WeChat and XiaoYi channels have broken reply delivery, message truncation, and connection issues.
4. **Performance regression** — Console GUI becoming increasingly unresponsive, especially with long chat sessions (#3830).
5. **Installation friction** — Fresh installation via online script leads to Python exceptions and non-functional chat (#3818).

**Positive signals:** The project has an active community of first-time contributors (three in the current PR list), indicating good onboarding and documentation for external developers.

## Backlog Watch

- **[Issue #1426 — Matrix channel not receiving messages](https://github.com/agentscope-ai/CoPaw/issues/1426)** (created 2026-03-13, last updated 2026-04-26) — Still open after 45 days. Matrix channel messages go out but never come in. No maintainer response.
- **[Issue #3783 — Cron task dispatched to wrong channel](https://github.com/agentscope-ai/CoPaw/issues/3783)** (created 2026-04-24) — Cron jobs configured for wechat actually go to console. Logs confirm the bug. No fix PR or maintainer comment.
- **[Issue #3836 — browser_use fails with ERR_INTERNET_DISCONNECTED](https://github.com/agentscope-ai/CoPaw/issues/3836)** (created 2026-04-25) — Agent cannot browse the web via browser_use tool. No maintainer response yet.

**Maintainer attention needed:** The configuration persistence bug cluster (#3824, #3817, #3828) is the highest-priority systemic issue affecting a broad user base. The chromadb segfault (#3854) may require an upstream fix or graceful fallback to the Python implementation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-27

## Today's Overview

ZeroClaw is experiencing a period of intense development activity, with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a strong signal-to-noise ratio: 22 PRs were merged or closed, and 9 issues were resolved, indicating an active maintainer team pushing work through the pipeline. The v0.7.x era is clearly in full swing, with major rewrites (Matrix channel), schema migrations (schema v3), and DeepSeek V4 compatibility work dominating the conversation. However, the volume of S1 (workflow blocked) bugs—including provider configuration resolution failures, Windows setup script breaks, and broken recovery paths—suggests the project is wrestling with the complexity of its growing feature surface.

## Releases

**No new releases** were published in the last 24 hours. The last tagged version (v0.7.1) remains current, though several pending fixes and features (Matrix rewrite, fallback provider config fix, DeepSeek V4 support) are likely candidates for a v0.7.2 or v0.7.3 cut.

## Project Progress

**22 PRs merged/closed** in the last 24 hours. Most significant landed work:

- **Matrix channel clean-room rewrite** ([PR #6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112)) — a complete rewrite on `matrix-rust-sdk 0.16`, replacing a broken hybrid of SDK + hand-rolled HTTP. This is a major stability win for Matrix users, but carries high risk due to the rewrite scope.

- **Fallback provider configuration fix** ([PR #6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138)) — merges a fix for the long-standing bug where `[providers.X]` config was ignored for fallback provider chains. This unblocks S1-level workflow for users relying on multi-provider fallback setups.

- **Duplicate narration text fix** ([PR #6093](https://github.com/zeroclaw-labs/zeroclaw/pull/6093)) — removes redundant assistant messages before tool calls, fixing a bug that affected Qwen, GLM-4, and DeepSeek users.

- **WebSocket buffer preservation** ([PR #5794](https://github.com/zeroclaw-labs/zeroclaw/pull/5794)) — fixes data loss in all six channel WebSocket connections (Slack, Discord, etc.) introduced by a previous refactor.

- **ACP defaultModel fix** ([PR #6013](https://github.com/zeroclaw-labs/zeroclaw/pull/6013)) — stops hardcoding `"anthropic/claude-sonnet-4.6"` and reads from config, fixing agentic.nvim integration.

- **Test suite repair** ([PR #6108](https://github.com/zeroclaw-labs/zeroclaw/pull/6108)) — unbreaks five pre-existing test failures on `master`, restoring CI confidence.

- **Memory context closing tag** ([PR #6082](https://github.com/zeroclaw-labs/zeroclaw/pull/6082)) — fixes model confusion in cron and daemon modes where memory context blocks lacked closing tags.

- **Windows setup docs rewrite** ([PR #6102](https://github.com/zeroclaw-labs/zeroclaw/pull/6102)) — comprehensive update for v0.7.3 with Docker guidance and setup.bat workarounds.

## Community Hot Topics

1. **DeepSeek V4 API incompatibility** ([Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059), 7 comments, 1 👍) — Both V4-Pro and V4-Flash fail with thinking-mode related errors. This is the top-voted open issue and has a fix-in-progress PR ([#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107)) that captures `reasoning_content` from streaming responses. The community is actively watching this because DeepSeek V4 offers competitive pricing/performance.

2. **Duplicate assistant messages when model narrates + tool calls** ([Issue #5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584), 6 comments, now CLOSED) — Users running Qwen, GLM-4, and DeepSeek saw "two consecutive assistant messages" in provider requests. Fixed by [#6093](https://github.com/zeroclaw-labs/zeroclaw/pull/6093) — merged today. This was a widespread pain point given how many models now emit reasoning text.

3. **Missing tool call ID for function call output** ([Issue #5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941), 6 comments, S1 — workflow blocked) — A custom provider endpoint (likely an OpenAI-compatible proxy or self-hosted model) causes "No tool call found for function call output" errors, completely blocking sessions. Still open and in-progress, this suggests a serialization mismatch between ZeroClaw's expected tool call format and what some backends return.

4. **Ollama `tool_count=0` bug** ([Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459), 4 comments, 4 👍) — Ollama provider hard-codes `tool_count=0`, so tool calling never reaches the API regardless of configuration. With 4 reactions and multiple duplicate reports ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)), this is the most upvoted open issue. Notably, no fix PR has been proposed, suggesting this may require deeper work in the Ollama provider crate.

5. **Schema v3 batch breaking migrations** ([Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947), 6 comments) — A structured plan to bump `CURRENT_SCHEMA_VERSION` to 3 with all breaking config field changes in one coordinated migration. This is a "merge blocker" issue — no partial landings allowed. Signals that the project is willing to absorb short-term disruption for long-term config cleanliness.

## Bugs & Stability

**High-severity (S1) bugs reported or active today:**

- **Fallback provider config ignored** ([#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803)) — `[providers.X]` config not applied to fallback chain. **FIXED** in [#6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138) (merged today).
- **Windows setup.bat failures** ([#6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118)) — integer overflows, character escaping, xcopy issues. **CLOSED** — presumably fixed by [#6102](https://github.com/zeroclaw-labs/zeroclaw/pull/6102) documentation rewrite with workarounds.
- **Missing `/api/channels` route** ([#6069](https://github.com/zeroclaw-labs/zeroclaw/pull/6069)) — Dashboard shows index.html instead of channel list. **Open PR** — awaiting merge.
- **Config examples don't match binary** ([#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149)) — Docs for YOLO/local testing reference outdated config keys. **Open** — suggests a config-vs-documentation drift problem.
- **`default_model` breaks on fresh install** ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)) — LXC container with remote Ollama gets `default_model` resolution errors. **Open** — likely a config initialization ordering bug.

**Medium-severity (S2) bugs:**

- **Anthropic/Opus-4-7 temperature shape** ([#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147)) — Could block opus-4-7 on native Anthropic provider. **Open** — conservative escalation pending confirmation.
- **Web UI config editor cursor misalignment** ([#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073)) — Character insertion position mismatched from cursor. S3 but UX-ruining.
- **Binary size advisory** ([#5873](https://github.com/zeroclaw-labs/zeroclaw/issues/5873)) — 35MB for x86_64 Linux vs 15MB advisory. Well under 50MB hard limit, so non-blocking but notable for embedded/edge deployments.

**Bug fix velocity is good:** of the S1 bugs tracked, three have fix PRs merged or in-progress today.

## Feature Requests & Roadmap Signals

- **Channel reply-intent configurability** ([#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674), 3 👍) — Users want to disable the "should I reply" gate in 1:1 chats. A related in-progress enhancement ([#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)) adds light model + timeout configurability. Likely to land in v0.7.3.

- **Webhook agent mode** ([#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542), 1 👍) — Webhooks only support chat mode; users need full tool execution. No PR yet, but interest from automation-heavy users.

- **Plugin env_read allowlist** ([#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919), in-progress) — Security hardening: restrict which env vars WASM plugins can read. Phased feature from the plugin system.

- **Cancellation token propagation** ([#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836), [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837)) — Two linked enhancements for tool-level cancellation support. Blocked on internal design decisions.

- **Skill reflection for SKILL.md generation** ([#5874](https://github.com/zeroclaw-labs/zeroclaw/pull/5874)) — Hermes/Evolver-style LLM reflection path for auto-generating skills from task traces. Needs author action.

**Prediction:** The next release (v0.7.2 or v0.7.3) will likely include the Matrix rewrite, fallback provider fix, DeepSeek V4 support, and channel reply-intent configurability—all in the pipeline and community-requested.

## User Feedback Summary

**Pain points:**
- **DeepSeek V4 incompatibility** is the #1 operational blocker for users adopting the newest models.
- **Ollama tool calling doesn't work** — a hardcoded zero makes the provider useless for tool-based workflows.
- **Fresh install onboarding** is fragile — remote Ollama setups and Docker deployments hit config resolution errors.
- **Dashboard UI** has multiple rendering bugs (channels tab crash, config editor misalignment) that degrade the new-user experience.
- **Windows setup** remains difficult despite the docs rewrite — Docker is positioned as the recommended path.

**Satisfaction signals:**
- Active PR participation from multiple first-time contributors (Audacity88, butaji, kunwl123456, tonsiasy) suggests an approachable codebase and welcoming maintainers.
- Schema v3 planning shows the team is investing in long-term structural health rather than accumulating config debt.
- The fast turnaround on the duplicate narration bug (reported April 10, fixed April 25) demonstrates responsive maintenance for core runtime issues.

## Backlog Watch

- **E2EE recovery never downloads room keys** ([#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842), created March 27, 4 comments, S1) — Encrypted Matrix rooms completely non-functional after store reset. This is 31 days old with no fix PR. High priority but stuck, possibly waiting on the Matrix rewrite which just landed.

- **aarch64 update downloads wrong arch** ([#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842), created March 27, 6 comments) — `zeroclaw update` on Raspberry Pi downloads x86_64 binary. 31 days old, no fix PR. Affects all ARM64 self-hosters.

- **context_compression not triggered in daemon mode** ([#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880), created March 28, 4 comments, S2) — Channel users are not getting context compression, leading to unbounded memory growth in long-running sessions. 30 days old, no fix PR.

- **Multi-model provider support** ([#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998), created March 8, 3 comments, now CLOSED) — The issue was closed today, but no corresponding implementation or explanation in the close reason. This may have been resolved or re-scoped — warrants investigation.

**Maintainer attention alert:** The three oldest S1/S2 bugs (E2EE recovery, aarch64 update, context compression) are all over 30 days old with no fix PRs. While the Matrix rewrite (#6112) may help with the E2EE issue, the aarch64 and daemon mode bugs remain unaddressed and affect significant user segments (ARM self-hosters, channel users).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*