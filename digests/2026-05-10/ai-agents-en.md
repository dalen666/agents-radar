# OpenClaw Ecosystem Digest 2026-05-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-10 04:49 UTC

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

Here is the OpenClaw project digest for **2026-05-10**, based on the provided GitHub data.

---

## OpenClaw Project Digest: 2026-05-10

### 1. Today's Overview

The OpenClaw project is exhibiting extremely high activity, with 500 Issues and 500 PRs updated in the last 24 hours. This volume suggests significant community engagement and rapid development velocity, likely spurred by the release of `v2026.5.9-beta.1`. The closure rate (210 Issues, 173 PRs) indicates a healthy, responsive development process where maintainers are actively resolving concerns while merging new features. However, the sheer volume also points to a period of high churn, particularly around a major architectural refactor and several reported regressions from previous versions.

### 2. Releases

- **New Version:** `v2026.5.9-beta.1`
- **Notable Changes:**
    - **Chat Commands:** Added `/think default` and `/fast default` commands for clearing session-level model overrides and reverting to configured/provider defaults. (#79385)
    - **Dependencies:** Refreshed workspace dependency pins, including updates to `@openai/codex` `0.130.0`, `acpx` `0.7.0`, and AWS SDK `3.1044.0`.
- **Significance:** This marks the project's latest snapshot, reflecting a high-velocity cadence. The new commands improve user flexibility in managing model behavior per session.

### 3. Project Progress

- **Major Refactor:** The most significant development is the massive PR [#78595: Refactor runtime state into SQLite](https://github.com/openclaw/openclaw/pull/78595) (updated today), a sweeping change to move the core runtime from JSON/JSONL files to a typed SQLite storage model. This is a foundational shift aimed at improving data integrity, performance, and developer experience. Several follow-up PRs (#79971, #79934) are active, tightening the implementation.
- **Cron Jobs & Stability:** PRs [#80047](https://github.com/openclaw/openclaw/pull/80047) (fixing cron delivery failures) and [#80022](https://github.com/openclaw/openclaw/pull/80022) (fixing cron runs inspection) are addressing long-standing pain points in the cron job system.
- **Agent & Subagent Model Fixes:**
    - PR [#72984](https://github.com/openclaw/openclaw/pull/72984) resolves a critical bug where subagent model resolution was incorrectly falling back to the parent agent's primary model.
    - PR [#79835](https://github.com/openclaw/openclaw/pull/79835) improves image model fallback and detection for auto-reply features.
- **User Experience:** PR [#76153](https://github.com/openclaw/openclaw/pull/76153) fixes a race condition in Telegram transport disconnections, and PR [#75773](https://github.com/openclaw/openclaw/pull/75773) improves WhatsApp reconnection reliability.

### 4. Community Hot Topics

The most active discussions reveal core community needs around platform support, core reliability, and usage policies.

- **#1: [Linux/Windows Clawdbot Apps (#75)](https://github.com/openclaw/openclaw/issues/75)** (104 comments, 74 👍)
    - **Analysis:** This is the project's single most desired feature. The overwhelming demand for native desktop clients on Linux and Windows signals a critical gap in the user experience that limits adoption beyond the macOS ecosystem.
- **#2: [Skill install fails in Docker: brew not installed (#14593)](https://github.com/openclaw/openclaw/issues/14593)** (29 comments)
    - **Analysis:** A significant blocker for server and cloud deployments. The dependency on `brew` (Homebrew) inside a Docker container is a fundamental incompatibility that frustrates users attempting to use the official Docker image.
- **#3: [Prebuilt Android APK releases (#9443)](https://github.com/openclaw/openclaw/issues/9443)** (24 comments)
    - **Analysis:** Alongside the desktop request, users are demanding simpler mobile deployment. This suggests a desire to run agents from mobile devices without needing to build from source, indicating an adoption barrier for less technical users.
- **#4: [openclaw doctor --fix breaking ChatGPT-OAuth users (#78407)](https://github.com/openclaw/openclaw/issues/78407)** (19 comments, Closed)
    - **Analysis:** This was a critical and recent regression that locked out users of a specific authentication method. The high comment count and closure indicate a swift response from maintainers to a painful user-facing bug.

### 5. Bugs & Stability

Recent regressions and stability issues are a dominant theme, with several critical bugs reported in the last few days.

- **High Severity (Closed/Resolved):**
    - **ChatGPT-OAuth Lockout (#78407):** A `doctor --fix` migration rewrote model references, locking out users of ChatGPT-OAuth. **Fixed.**
    - **Cron Allowlist Breaking Change (#78000):** A new model allowlist silently broke existing cron jobs using older model names. **Fixed.**
- **High Severity (Open):**
    - **Empty Agent Response (#79492):** The agent runtime consistently fails on `anthropic/claude-opus-4-7`, returning an empty response, while a direct inference works. This is a confusing and blocking bug for users of this model.
    - **Stuck Sessions (#71127):** The runtime detects stuck processing sessions but has no recovery mechanism, requiring manual restarts. This severely impacts reliability for long-running operations.
    - **Compaction Loop (#78604):** The database compaction process runs every 5 minutes instead of the intended 30 minutes, causing unnecessary I/O and potential performance degradation.
- **Medium Severity (Open):**
    - **Signal Daemon Race Condition (#22676):** Restarting the Signal daemon can lead to orphaned processes and connection failures.
    - **Telegram Forum Topic Stalling (#79531):** Forum topic sessions intermittently stop responding while DMs work fine, a confusing and inconsistent behavior.
- **Regression Trend:** The high number of regressions (e.g., #41494, #77551, #78232, #47452) suggests that the rapid development pace is introducing instability. The community's tolerance is being tested by constant breakages after updates.

### 6. Feature Requests & Roadmap Signals

User requests are split between fundamental infrastructure improvements and advanced agent capabilities.

- **Near-Term Predictions:**
    - **SQLite Runtime:** The massive PR [#78595](https://github.com/openclaw/openclaw/pull/78595) is a strong signal that the project is prioritizing data integrity and performance. This is likely to be a focus for the next few releases.
    - **Agent Continuation/Control:** PR [#79925](https://github.com/openclaw/openclaw/pull/79925) (context-pressure-aware continuation) and Issue #13700 (session snapshots) indicate a push toward giving agents more sophisticated self-management and persistence capabilities.
    - **Security Hardening:** Many requests (masked secrets #10659, hard gates #13583, denylist modes #71097/#6615, security profile #8719) show a strong community desire for production-grade security, which is a common requirement for enterprise adoption.
- **Long-Term Desires:**
    - **Platform Expansion:** #75 (Linux/Windows apps) remains the "holy grail" for broad adoption.
    - **Better Onboarding:** #16670 (Memory/Embedding setup as mandatory) highlights that new users miss critical features like memory, suggesting the setup process needs improvement.
    - **Native Secrets Management:** #13610 (AWS Secrets Manager, Vault) points to users wanting to run OpenClaw in professional, cloud-native environments.

### 7. User Feedback Summary

- **Pain Points:**
    - **Instability from Updates:** Users are frustrated by regressions (e.g., #41494, #78000) that break working setups after an upgrade. The sentiment is one of "if it works, don't touch it."
    - **Complexity & Debugging:** Stuck sessions (#71127) and empty responses (#79492) are hard to diagnose and force manual interventions, creating a poor user experience for less technical users.
    - **Missing Platform Support:** The demand for native Linux/Windows apps (#75) and prebuilt Android APKs (#9443) shows a significant portion of the user base is underserved.
- **Satisfaction:**
    - **Feature Velocity:** The community is clearly engaged and trusts the project enough to request many advanced features (Slack Block Kit, session snapshots, security profiles).
    - **Responsive Maintainers:** The high closure rate of 210 issues in 24 hours, including the critical ChatGPT-OAuth bug (#78407), indicates a development team that is responsive and actively resolving problems.

### 8. Backlog Watch

Several important Items are languishing without maintainer action, risking community trust.

- **[OPEN] #75: Linux/Windows Clawdbot Apps** (Created: 2026-01-01)
    - **Watch Reason:** This is the top-voted feature request by a massive margin. The lack of official engagement after 4 months may be causing user frustration.
- **[OPEN] #14593: Skill install fails in Docker: `brew not installed`** (Created: 2026-02-12)
    - **Watch Reason:** A critical blocker for server deployments. Without a fix or workaround, the official Docker image is unusable for many users.
- **[OPEN] #12602: Slack Block Kit support** (Created: 2026-02-09)
    - **Watch Reason:** A highly requested feature for a key platform (Slack). Its long open status without traction could signal to enterprise users that Slack integration is not a priority.
- **[STALE] PR #64673: fix(ui): iOS Safari auto-zoom** (Created: 2026-04-11)
    - **Watch Reason:** A UX bug that makes the Control UI unusable on the most popular mobile platform. The `stale` label and lack of merge suggest this minor but critical UX issue is being deprioritized.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries for **2026-05-10**.

---

### Ecosystem Overview

The open-source personal AI assistant ecosystem is characterized by **extremely high velocity and fragmentation**. The market is currently dominated by a single powerhouse project (OpenClaw) surrounded by a cluster of high-activity forks and re-implementations (NanoBot, ZeroClaw, CoPaw) that are diverging in architecture and target use case. The community is deeply engaged, generating thousands of issues and pull requests daily, but this activity is double-edged: it reflects strong interest alongside significant instability, with regressions and breaking changes being a primary pain point.

### Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Critical Bugs |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (210 closed) | 500 (173 closed) | `v2026.5.9-beta.1` | High (Rapid) | 2 high (Empty Responses, Stuck Sessions) |
| **NanoBot** | 7 (0 closed) | 23 (15 closed) | None (latest: v0.1.5.post3) | Strong (Iterative) | 1 medium (Cron Streaming) |
| **Hermes Agent** | 50 (0 closed) | 50 (10 closed) | None (latest: v0.13.0) | High (Intense) | 2 P1 (Confirmation Prompt, Oneshot Stdout) |
| **PicoClaw** | 12 (3 closed) | 26 (10 closed) | `v0.2.8-nightly` | Very High (Driven) | 2 high (Codex OAuth, OpenRouter Thinking Leak) |
| **NanoClaw** | 3 (0 closed) | 17 (10 closed) | None | High (Dense) | 1 high (Multi-Agent Delegation Degradation) |
| **NullClaw** | 1 (0 closed) | 3 (2 closed) | None | Moderate | 1 critical (Provider Regression) |
| **IronClaw** | 19 (0 closed) | 36 (13 closed) | None (pending v0.28.0) | Very High (Build-out) | 1 critical (Nightly E2E Failure) |
| **LobsterAI** | 1 (1 closed) | 12 (8 closed) | **`v2026.5.9`** | High (Stable) | 0 (MCP packaging bug closed) |
| **Moltis** | 0 | 3 (2 closed) | None | Stable / Low Activity | 0 |
| **CoPaw (QwenPaw)** | 30 (13 closed) | 23 (14 closed) | **`v1.1.6` & `v1.1.6-beta.2`** | High (Rapid) | 2 critical (Data loss, Session History) |
| **ZeptoClaw** | 0 | 1 (0 closed) | None | Low Activity | 0 |
| **ZeroClaw** | 50 (7 closed) | 32 (12 closed) | None (latest: v0.7.5) | High (Focused) | 2 S0/S1 (Provider Error, System Messages) |
| **TinyClaw** | 0 | 0 | None | No Activity | N/A |

### OpenClaw's Position

**OpenClaw is the undisputed market leader**, with an order of magnitude more community activity than any other project. Its advantages include:
- **Scale:** 500 issues and PRs per day dwarfs all competitors.
- **Community Trust:** High closure rates (210 issues, 173 PRs) indicate a responsive, professional team.
- **Feature Velocity:** The SQLite runtime refactor is a foundational shift that other projects will follow.

**Differentiators vs Peers:**
- **Architecture:** OpenClaw is pursuing a centralized, "everything-is-an-extension" model, while forks like **PicoClaw** and **NanoClaw** are building lightweight, plugin-based systems.
- **Target User:** OpenClaw serves power users and developers (complex cron, security profiles, session snapshots). **ZeptoClaw** and **Moltis** are aiming for minimalist, lower-complexity experiences.
- **The Docker `brew` issue (#14593)** is a critical weakness for server deployments, which **ZeroClaw** and **CoPaw** are addressing with more mature container strategies.

### Shared Technical Focus Areas

Multiple projects are converging on the same problems:

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Data Persistence** | OpenClaw (SQLite refactor), NanoClaw (DB container config), ZeroClaw (multi-backend agents-table) | Moving beyond JSON/JSONL to scalable, typed storage. |
| **Multi-Agent Orchestration** | PicoClaw (steering-chains), CoPaw (agent routing), ZeroClaw (v0.8.0 multi-agent runtime), NanoClaw (delegation scaling) | Building systems where agents can spawn, coordinate, and pool context. |
| **MCP (Model Context Protocol)** | PicoClaw (Streamable HTTP, OAuth), LobsterAI (HTTP streaming), CoPaw (MCP lifecycle, memory leaks) | Need for modern, authenticated, and reliable MCP transports. |
| **Channel Platform Parity** | CoPaw (Feishu/Matrix), ZeroClaw (Discord `allowed_channels`), Hermes Agent (Telegram, Feishu) | Users expect uniform behavior across all communication channels. |
| **Provider Compatibility** | NullClaw (siliconflow regression), CoPaw (Volcano Engine, DashScope, OpenCode), ZeroClaw (OpenAI-compatible providers) | Maintaining integrations across a constantly shifting landscape of AI model providers. |
| **Security & Access Control** | ZeroClaw (shell approval, session keys), OpenClaw (secret masks, hard gates), CoPaw (tool execution plans) | Moving from "allow all" to granular, auditable, and user-approved operations. |

### Differentiation Analysis

| Project | Differentiator | Target User | Architecture |
|---|---|---|---|
| **OpenClaw** | "The platform" - deepest feature set, largest community | Power users, advanced developers | Monolithic with extensive plugin support |
| **ZeroClaw** | "The Rust-native enterprise agent" | Operations teams, multi-instance deployers | Rust-based, microservice-ready, ACP protocol |
| **CoPaw (QwenPaw)** | "The Chinese-market leader" | Chinese-speaking users, Qwen model users | Feature-rich with strong Asian provider support |
| **PicoClaw / NanoClaw** | "The lightweight plugin systems" | Developers wanting minimal, skill-based agents | Plugin/marketplace-driven, containerized |
| **Hermes Agent** | "The CLI/TUI specialist" | Terminal-first users, developers | Gateway + CLI + Kanban dashboard |
| **LobsterAI** | "The feature-stable release" | Users prioritizing stability over new features | Coordinated releases, artifact system |
| **Moltis / ZeptoClaw / TinyClaw** | "The minimalist explorers" | New users, low-complexity deployments | Small codebases, low activity, not yet competitive |

### Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Churn, High Risk)**
- **OpenClaw:** Dominant but suffering from regression fatigue.
- **PicoClaw, ZeroClaw, CoPaw:** Extremely active, shipping features daily, but with higher-than-acceptable bug rates for production use.

**Tier 2: Stabilizing (Mid Activity, Focus on Quality)**
- **NullClaw, IronClaw:** Working on foundational architecture (Reborn, HTTP/DNS refactoring) with fewer but more impactful bugs.
- **LobsterAI:** The most "stable" release cycle, acting as a counterpoint to the chaos.

**Tier 3: Low Activity / Quiet (Minimal Engagement)**
- **Moltis, ZeptoClaw, TinyClaw:** Not actively competing. May represent smaller communities or projects in maintenance mode.

### Trend Signals

1.  **From Monolith to Multi-Agent:** The ecosystem is rapidly shifting from single-agent architectures to systems that can spawn, coordinate, and pool context across multiple agents (OpenClaw, PicoClaw, ZeroClaw, CoPaw).
2.  **Data Governance is the Next Frontier:** IronClaw's "Data Governance Layer" and NanoClaw's persistent semantic memory signal that users want agents that remember securely, not just reply.
3.  **Security is Becoming Table Stakes:** The rush to implement shell approval, OAuth refresh, secret stores, and MCP PKCE shows that enterprise and compliance use cases are driving development.
4.  **China-First Development:** CoPaw's heavy activity with DeepSeek, GLM, Volcano Engine, and Chinese-language prompts indicates a large, underserved market that is now being prioritized.
5.  **Instability is the Cost of Speed:** The consistent complaint across all major projects is that "every new version breaks something." The market is currently accepting this churn for feature velocity, but a "stable fork" (like LobsterAI) may gain traction if the fatigue grows.

**Value for AI Agent Developers:** The ecosystem is highly dynamic but requires constant maintenance. Developers should choose their platform based on risk tolerance: **LobsterAI** for stability, **OpenClaw/ZeroClaw** for ultimate capability, and **CoPaw** for Chinese-language deployments. The multi-agent and MCP trends are non-negotiable for any future-proof architecture.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-10

## Today's Overview

The NanoBot project shows high-velocity development activity with 23 pull requests updated and 7 issues touched in the last 24 hours. A strong contributor cohort—led by `chengyongru`, `Re-bin`, and `Lumjiel`—is driving a structural refactoring wave centered on the `AgentLoop` and model configuration subsystems. The PR merge rate is healthy (15 merged/closed out of 23), though 8 open PRs suggest a growing review queue. No new releases were tagged, indicating that the project is in the midst of integrating several interdependent changes before cutting the next version. Overall project health is **strong**, with active bug fixing, community feature requests, and architectural improvements all moving in parallel.

## Releases

None — no new releases were published in the reporting period. The latest stable version remains at v0.1.5.post3, referenced in recent issue discussions.

## Project Progress

**16 pull requests were merged or closed** in the last 24 hours, reflecting significant forward motion:

- **AgentLoop Refactoring**: PR [#3708](https://github.com/HKUDS/nanobot/pull/3708) ([merged] *refactor: introduce AgentLoop.from_config() to centralize loop assembly*) consolidates duplicated provider/loop initialization logic across CLI commands into a single classmethod. This is identified as PR 1/4 of a larger model-preset feature decomposition.
- **State Machine Extraction**: PR [#3715](https://github.com/HKUDS/nanobot/pull/3715) ([merged] *refactor(loop): convert _process_message to functional state machine*) splits a 300-line method into explicit `RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND` stages using a `TurnState` enum.
- **Dead Code Removal**: PR [#3719](https://github.com/HKUDS/nanobot/pull/3719) ([merged] *fix(utils): remove unreachable dead code in find_legal_message_start*) resolves Issue [#3716](https://github.com/HKUDS/nanobot/issues/3716) by removing a never-executed for loop caused by an invalid list slice.
- **Cron Streaming Fix**: PR [#3720](https://github.com/HKUDS/nanobot/pull/3720) ([open] *fix(cron): stream cron reminders with stream_id and turn_end*) addresses Issue [#3718](https://github.com/HKUDS/nanobot/issues/3718) where cron-triggered responses lacked `stream_id`.
- **WebUI Enhancements**: PR [#3709](https://github.com/HKUDS/nanobot/pull/3709) ([merged] *feat(webui): add BYOK web search settings*) adds an Apple-style segmented control for switching between LLM and Web Search credential configuration.
- **Session Corruption Fix**: PR [#3680](https://github.com/HKUDS/nanobot/pull/3680) ([merged] *fix: handle corrupted session files where last_consolidated exceeds message count*) prevents loss of conversation history with a sanity check.
- **AI Contributor Guides**: PR [#3534](https://github.com/HKUDS/nanobot/pull/3534) ([merged] *docs: add CLAUDE.md and .agent/ guides for AI contributors*) now provides structured guidance for AI coding assistants working on the repo.

## Community Hot Topics

The most active discussions reveal two primary concerns: **conversation continuity** and **channel-specific UX flexibility**.

- **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689)** — *"中断会话丢失上一轮会话的聊天记录"* (interrupted sessions lose previous turn chat history): User reports that interrupting a looping agent with a "stop" message causes the bot to respond as if it has no memory of prior context, asking "let me check recent tasks and conversations to find what 'test' you mentioned." This exposes a UX gap in the interrupt flow—users expect the agent to retain state while changing behavior.

- **Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692)** — *"feishu group topic 隔离支持开关"* (Feishu group topic isolation toggle): User `sonicrang` requests a configurable switch for the v0.1.5.post3 topic isolation feature. When sending multiple files to a Feishu group, each file spawns a separate topic, preventing cross-file processing. The single 👍 reaction and targeted request suggest this is a practical workflow blocker for Feishu power users.

- **Issue [#3724](https://github.com/HKUDS/nanobot/issues/3724)** — *"感谢nanobot作为我项目的基座"* (thanks to NanoBot as my project's foundation): User `wenge6090-cell` expresses gratitude while raising a thoughtful architectural concern—that fixed system prompts, tool sets, and knowledge bases create a "cage that prevents emergence" in agents, and proposes dynamic cognitive posture adaptation.

## Bugs & Stability

| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| **Medium** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) | Cron reminder streaming output has no `stream_id`, breaking WebSocket client delta-event association | PR [#3720](https://github.com/HKUDS/nanobot/pull/3720) open |
| **Medium** | [#3716](https://github.com/HKUDS/nanobot/issues/3716) | Unreachable dead code in `find_legal_message_start` caused by invalid slice; the for loop never executes | Fixed in PR [#3719](https://github.com/HKUDS/nanobot/pull/3719) (merged) |
| **Low** | [#3674](https://github.com/HKUDS/nanobot/issues/3674) (closed) | `WebSocketChannel._dispatch_envelope()` silently drops the `media` field from inbound messages; file/image attachments never reach the agent | Closed without resolution link visible; likely addressed elsewhere or WONTFIX |
| **Low** | [#2709](https://github.com/HKUDS/nanobot/issues/2709) (closed) | WeCom integration error: "Streaming is required for operations that may take longer than 10 minutes" when calling Anthropic SDK | Closed; user referred to upstream SDK documentation |
| **Info** | [#3712](https://github.com/HKUDS/nanobot/pull/3712) (open) | Fix for corrupted session files where `last_consolidated` exceeds message count | New PR by `Lumjiel` superseding [#3680](https://github.com/HKUDS/nanobot/pull/3680) |

Ranking by user impact: the cron `stream_id` issue (#3718) is the most impactful open bug as it breaks a core streaming contract for cron-scheduled agents. The session corruption fix (#3712) is a stability concern but already has a follow-up PR.

## Feature Requests & Roadmap Signals

The following patterns point toward likely upcoming features:

1. **Model Presets System** (PR [#3714](https://github.com/HKUDS/nanobot/pull/3714), open) — `chengyongru` introduces `ModelPresetConfig` for named model/provider/max_tokens/context_window bundles with runtime switching. This is PR 2/4 in the decomposition and is the strongest signal for the next major feature.

2. **Local Whisper Transcription** (PR [#3723](https://github.com/HKUDS/nanobot/pull/3723), open) — `dilidin2` adds support for [faster-whisper](https://github.com/SYSTRAN/faster-whisper), a C++/ONNX Whisper reimplementation running entirely offline. This addresses the needs of privacy-conscious users and those without stable internet.

3. **Typed-Event Hook System** (PR [#3564](https://github.com/HKUDS/nanobot/pull/3564), open) — `aiguozhi123456` proposes `HookCenter` with typed events and plugin support via `entry_points(group="nanobot.hooks")`, alongside `observe/transform/guard` handler modes. This would enable third-party plugin distribution for the first time.

4. **Feishu Topic Isolation Toggle** (Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692)) — Simple config switch request; likely low implementation cost and high user value for Feishu channel users.

5. **Dynamic Agent Behaviors** (Issue [#3724](https://github.com/HKUDS/nanobot/issues/3724)) — A vision for agents with adaptable system prompts, tool sets, and evolving knowledge bases rather than static configurations. This is a conceptual rather than concrete feature request, but may influence long-term architecture.

**Prediction**: The model presets system (PR #3714) and local Whisper (PR #3723) are the strongest candidates for the next release, likely followed by the cron streaming fix (PR #3720).

## User Feedback Summary

**Pain points:**

- **Interrupt/resume confusion** (Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689)): Users stopping a looping agent expect it to retain prior conversation context; instead the agent appears to "forget" and restart from scratch.
- **File grouping in Feishu** (Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692)): Topic isolation treats each uploaded file as a separate conversation, preventing batch processing.
- **WebSocket media drop** (Issue [#3674](https://github.com/HKUDS/nanobot/issues/3674)): Inbound file/image attachments silently lost—critical for any channel relying on WebSocket transport.
- **Cron streaming broken** (Issue [#3718](https://github.com/HKUDS/nanobot/issues/3718)): Scheduled agent reminders emit incomplete stream events, affecting WebSocket clients.

**Satisfaction signals:**

- **Gratitude and reuse** (Issue [#3724](https://github.com/HKUDS/nanobot/issues/3724)): User `wenge6090-cell` explicitly thanks the NanoBot team and builds their own project (Taiji) on NanoBot as a base, indicating strong developer satisfaction with the platform's "minimalist" design.
- **AI contributor guides** (PR [#3534](https://github.com/HKUDS/nanobot/pull/3534)): The addition of `CLAUDE.md` and `.agent/` docs suggests the maintainers are investing in making the repo AI-assistant-friendly, a sign of a mature, forward-looking project.

## Backlog Watch

- **PR [#3564](https://github.com/HKUDS/nanobot/pull/3564)** — *"feat(hooks): HookCenter typed-event hook system"* has been open since April 30 without a merged status or review activity beyond the author's updates. This is a significant architectural change that may be waiting for alignment with the ongoing `AgentLoop` refactoring.

- **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689)** — *Interrupted sessions lose chat history* (open since May 8) has only 1 comment (likely from a bot or maintainer) and no associated PR. Given the clear user impact, this deserves a maintainer triage response to clarify expected behavior or confirm it's a known limitation.

- **PR [#3712](https://github.com/HKUDS/nanobot/pull/3712)** — *"fix: handle corrupted session files*" from `Lumjiel` supersedes the earlier merged PR [#3680](https://github.com/HKUDS/nanobot/pull/3680). This should be reviewed to ensure it doesn't reintroduce issues or conflict with the already-merged fix.

- **PR [#3671](https://github.com/HKUDS/nanobot/pull/3671)** — *"Fix/runtime context ephemeral upstream nightly"* by `T3chC0wb0y` was closed as "invalid, stale" on May 9, but the issue it aimed to fix—runtime context escaping into persisted chat history—remains relevant. The fix may have been superseded by other changes, but no cross-reference is provided.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for **2026-05-10**.

---

## Hermes Agent Project Digest – 2026-05-10

### Today's Overview

Hermes Agent is in a period of **intense development and bug-fixing velocity**. The project saw 50 issues and 50 PRs updated in the last 24 hours, with a high proportion of open items indicating a surge in community testing and contributor activity. The latest stable release (v0.13.0) is still current, but the backlog is growing rapidly with P1/P2 critical bugs and a wave of feature requests targeting UX improvements and platform parity. The maintenance team appears focused on stabilizing the CLI/TUI experience and the gateway layer, with several high-priority PRs open for review.

### Releases

- **New Releases:** None.
- **Current Stable:** v0.13.0 (referenced in several bug reports as the base version).

### Project Progress

Ten PRs were merged or closed in the last 24 hours, indicating active maintenance despite the high volume of open work. Key merged items include:
- **CLI Fix:** `[CLOSED] fix(cli): restore Shift+Enter newline in classic Hermes CLI` (PR [#22983](https://github.com/NousResearch/hermes-agent/pull/22983)) – A critical fix for macOS users who lost multiline composition.
- **Duplicates & Cleanup:** `[CLOSED] Kanban assignee dropdown` (issue [#21506](https://github.com/NousResearch/hermes-agent/issues/21506)) was closed as a duplicate, and `[CLOSED] Kanban dashboard Default board` (issue [#21819](https://github.com/NousResearch/hermes-agent/issues/21819)) was resolved.
- **Windows Fix:** `[CLOSED] chmod breaks TUI build on Windows` (issue [#22948](https://github.com/NousResearch/hermes-agent/issues/22948)) was addressed.

On the open PR front, major efforts are underway:
- **Memory & Context:** PR [#22516](https://github.com/NousResearch/hermes-agent/pull/22516) introduces a configurable memory metacognition framework (default: no-op).
- **Multi-User Discord:** PR [#22509](https://github.com/NousResearch/hermes-agent/pull/22509) proposes a "Daimon" bot with tiered access control and Docker sandboxing.
- **Connector Bug:** Fix for `task skills` validation in Kanban (PR [#22974](https://github.com/NousResearch/hermes-agent/pull/22974)).

### Community Hot Topics

The community is most vocal about **performance, streaming reliability, and configuration complexity**.

1.  **[#4505 – Optimize Ollama Integration: Native /api/chat vs OpenAI-Compatible Endpoint](https://github.com/NousResearch/hermes-agent/issues/4505)** (10 comments, 2 👍)
    - **Analysis:** This is the longest-running active discussion by comment count. Users want to leverage Ollama’s native streaming for lower latency and richer delta data. The underlying need is for **better local model serving performance**.

2.  **[#5290 – UnboundLocalError in gateway/run.py (Telegram)](https://github.com/NousResearch/hermes-agent/issues/5290)** (4 comments, 3 👍)
    - **Analysis:** A hard crash on Telegram messages. The high reaction count (👍) signals this is a widely painful, stable bug affecting a major platform.

3.  **[#18106 – IMAP fetch error: 'int' object has no attribute 'decode' (Email)](https://github.com/NousResearch/hermes-agent/issues/18106)** (4 comments)
    - **Analysis:** Another platform-specific crash (Email/IMAP). The error indicates a type-handling regression in the Email adapter affecting iCloud users.

4.  **[#8293 – Symlinked skills omitted from discovery](https://github.com/NousResearch/hermes-agent/issues/8293)** (4 comments, 1 👍)
    - **Analysis:** A persistent developer workflow bug. Users who manage skills via symlinks (common for version control) lose functionality. This highlights friction for power users managing custom tooling.

### Bugs & Stability

Bug reports spiked today (May 10) with several P1 and P2 issues filed. The CLI and Gateway layers are the primary stability concerns.

**Critical (P1):**
- **`/clear`, `/new`, `/reset`, `/undo` confirmation prompt broken** ([#22958](https://github.com/NousResearch/hermes-agent/issues/22958)): Users cannot answer the new safety confirmation prompt; keystrokes leak into the chat composer.
- **`hermes -z` (oneshot) returns empty stdout** ([#22975](https://github.com/NousResearch/hermes-agent/issues/22975)): The agent runs successfully but produces zero output on the terminal.

**High (P2):**
- **Telegram message queuing / stale state** ([#22899](https://github.com/NousResearch/hermes-agent/issues/22899)): Agent works on state that is 30-60 minutes old. High impact for Telegram users relying on real-time assistance.
- **MCP connectivity resolves config key as hostname** ([#22724](https://github.com/NousResearch/hermes-agent/issues/22724)): Breaks MCP health checks in sessions.
- **Feishu adapter ignores `quote` field** ([#22934](https://github.com/NousResearch/hermes-agent/issues/22934)): Loses reply context for Feishu users. *A fix PR exists* ([#22969](https://github.com/NousResearch/hermes-agent/pull/22969)).
- **Shift+Enter newline regression** ([#22908](https://github.com/NousResearch/hermes-agent/issues/22908)): *Already fixed via PR #22983.*
- **Tool_use parser fails on JSON in Claude** ([#22696](https://github.com/NousResearch/hermes-agent/issues/22696)): Intermittent failure when Claude puts tool calls in XML blocks.
- **Kim K2.6 thinking mode fails** ([#22949](https://github.com/NousResearch/hermes-agent/issues/22949)): `content: null` returned, reasoning not shown in Telegram.

**Moderate (P3):**
- **Dashboard labels `vision_analyze` result as user message** ([#22961](https://github.com/NousResearch/hermes-agent/issues/22961)): Confusing UX in session view.

### Feature Requests & Roadmap Signals

The community is asking for **better developer tooling, higher reliability, and platform parity**.

- **Pre-response Validation Hook** ([#22956](https://github.com/NousResearch/hermes-agent/issues/22956)): A high-sophistication request for a validation gate on agent capability claims. This suggests advanced users are hitting limits of agent self-awareness.
- **Same-Provider Auth-Profile Rotation** ([#22916](https://github.com/NousResearch/hermes-agent/issues/22916)): Users with multiple provider accounts (e.g., multiple OpenAI Codex accounts) want automatic rotation on rate-limit, similar to OpenClaw.
- **Kanban Skill Validation** ([#22922](https://github.com/NousResearch/hermes-agent/issues/22922)): User requests validation that a profile has the tools needed for a task before spawning a worker.
- **Unraid Docker Compose** ([#22978](https://github.com/NousResearch/hermes-agent/issues/22978)): Home-lab user asking for simplified one-click deployment.
- **Dashboard Config UI Gap** ([#22964](https://github.com/NousResearch/hermes-agent/issues/22964)): Users want to see all runtime settings (e.g., Telegram display) in the dashboard web config, not just `config.yaml`.

**Prediction for Next Version:** The high volume of P2 bugs suggests the next release (v0.13.1) will likely focus on **stability and bug fixes** rather than new features. The Shfit+Enter fix is already in. We expect at least a point release addressing the MCP hostname issue, Telegram queuing, and the `hermes -z` stdout bug.

### User Feedback Summary

- **Satisfaction Points:** The community is highly engaged, submitting detailed bug reports (stack traces, configs). The speed of PR merging on the Shift+Enter fix indicates responsive maintainers.
- **Pain Points:**
    - **CLI Reliability:** Multiple P1 bugs around basic input handling (confirmation prompts, Shift+Enter, oneshot mode) erode trust in the core terminal experience.
    - **Gateway Lag:** The Telegram queuing issue (30-60 min delay) is a dealbreaker for real-time use.
    - **Platform Fragmentation:** Questions consistently arise about why bugs affect platforms differently (Telegram works, Feishu doesn't, Email crashes) – users expect uniform behavior.
    - **Configuration Complexity:** Users are frustrated that important runtime settings are hidden in `config.yaml` and not exposed in the GUI dashboard.

### Backlog Watch

The following high-value, long-standing items are at risk of being overlooked due to the volume of new issues:

- **Issue #4505 – Ollama Native API Optimization:** Open since Apr 1. While not a crash bug, it represents a major performance win for local AI users. Lack of progress on this could frustrate the self-hosting community.
- **Issue #8293 – Symlinked Skills Omission:** Open since Apr 12. This is a developer workflow blocker for users maintaining custom skill libraries via VCS. It needs a triage decision and prioritization.
- **PR #18999 – Remove Kimi Coding from Vision Deny-List:** Open since May 2. A small, safe change that unlocks vision for an entire provider. It has been languishing without review for over a week.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for **2026-05-10**.

---

## PicoClaw Project Digest: 2026-05-10

### 1. Today's Overview
Project activity is **very high**, driven almost entirely by a concentrated effort to improve the "steering-chain" user experience—how the agent handles follow-up requests and synthesizes final replies. 12 issues were updated in the last 24 hours, with 9 remaining open. The PR queue is particularly active, with 26 updated PRs (10 merged/closed, 16 open). A new nightly build was released, but the core focus remains on refining agent behavior, fixing multi-agent tool routing, and addressing critical MCP transport gaps.

### 2. Releases
**New:** `v0.2.8-nightly.20260510.6e6293e5` (Nightly Build)
- **Summary:** This is an automated, potentially unstable nightly build.
- **Changes:** Includes all changes on the `main` branch since the `v0.2.8` tag. The full changelog is available [here](https://github.com/sipeed/picoclaw/compare/v0.2.8...main).
- **Breaking Changes / Migration Notes:** None explicitly documented for this nightly. Users should treat this as a development snapshot.

### 3. Project Progress (Merged/Closed PRs)
The project saw significant feature and bug-fix closures today, primarily around agent orchestration and core stability.

- **Agent Orchestration:**
    - **Steering-Chain Final Replies:** PR [#2842](https://github.com/sipeed/picoclaw/pull/2842) was merged, adding an optional mode to synthesize final replies from an action log after complex, multi-step "steering" turns. Related feature issue [#2841](https://github.com/sipeed/picoclaw/issues/2841) was closed.
    - **Subagent Spawn Routing:** PR [#2790](https://github.com/sipeed/picoclaw/pull/2790) (closed) fixes the `spawn` tool to correctly route to a specific target agent.
    - **Tool Discovery in Clones:** PR [#2793](https://github.com/sipeed/picoclaw/pull/2793) (closed) fixes a subtle bug where hidden tools were not being discovered within subagent tool registries due to shallow cloning.
- **Core & UI:**
    - **Message Timing:** PR [#2823](https://github.com/sipeed/picoclaw/pull/2823) (closed) fixes the suppression of final replies when the `message` tool has already been used for progress updates.
    - **Authentication:** PR [#2163](https://github.com/sipeed/picoclaw/pull/2163) (closed) fixes a persistent `PERMISSION_DENIED` error by preserving OAuth scopes during token refresh for the Google Antigravity provider.
    - **Provider Support:** PR [#2260](https://github.com/sipeed/picoclaw/pull/2260) (closed) adds support for xAI as a provider.
    - **UI/UX:** PR [#2630](https://github.com/sipeed/picoclaw/pull/2630) (closed) updates the web chat UI to show full `YYYY-MM-DD HH:mm` timestamps for replies.

### 4. Community Hot Topics
The community is most vocal about agent behavior and expanding connectivity.

- **Steering-Chain Agent UX ([#2839](https://github.com/sipeed/picoclaw/issues/2839), [#2841](https://github.com/sipeed/picoclaw/issues/2841), [#2843](https://github.com/sipeed/picoclaw/issues/2843)):** User *bogdanovich* has submitted a flurry of high-quality issues and PRs. The core demand is for a more coherent user experience when an agent must answer a series of follow-up questions or perform multiple actions. The community is pushing for tools that synthesize the entire interaction into a single, useful final response rather than just echoing the last action or editing placeholder messages.
- **MCP Connectivity Gaps:**
    - **Streamable HTTP Transport ([#2782](https://github.com/sipeed/picoclaw/issues/2782)):** User *oawbz* reports that PicoClaw cannot connect to MCP servers using the newer, recommended **Streamable HTTP** transport. This is a critical blocker for integrating with modern MCP servers.
    - **OAuth 2.1 + PKCE for MCP ([#2546](https://github.com/sipeed/picoclaw/issues/2546)):** User *rameshnetsys* requests a simpler, dashboard-based workflow for adding OAuth-protected MCP servers, highlighting a need for non-technical user configuration.
- **Codex OAuth Failure ([#2674](https://github.com/sipeed/picoclaw/issues/2674)):** This issue, which has 3 👍 reactions, describes a complete failure where the ChatGPT Codex OAuth provider returns empty responses. This is a high-severity blocking issue for users relying on that authentication path.

### 5. Bugs & Stability
Today's reports indicate several bugs affecting core agent functionality and provider compatibility.

- **High Severity:**
    - **Codex OAuth Empty Response ([#2674](https://github.com/sipeed/picoclaw/issues/2674)):** A critical blocking bug. The provider integration with ChatGPT's backend is broken. No fix PR is currently linked.
    - **Steering-Chain Placeholder Editing ([#2839](https://github.com/sipeed/picoclaw/issues/2839)):** Final replies in "steering" turns incorrectly edit old "Working..." placeholders instead of being sent as new messages. A fix PR ([#2840](https://github.com/sipeed/picoclaw/pull/2840)) is open.
    - **OpenRouter Reasoning Leak ([#2745](https://github.com/sipeed/picoclaw/issues/2745)):** The model's raw reasoning/thinking text is being leaked into the final assistant response. This is a major UX and privacy bug. No fix PR is linked.
- **Medium Severity:**
    - **Final Reply Suppression ([#2835](https://github.com/sipeed/picoclaw/pull/2835)):** Final replies are incorrectly suppressed if the agent used the `message` tool during the same turn. An open PR aims to fix this.
    - **Powershell Encoding Bypass ([#2836](https://github.com/sipeed/picoclaw/pull/2836)):** A security-related fix is in review to prevent a PowerShell encoding bypass for code injection.
- **Low Severity:**
    - **Anthropic Android Model IDs ([#2665](https://github.com/sipeed/picoclaw/issues/2665)):** Fixed. The dropdown used dots instead of dashes in model IDs.

### 6. Feature Requests & Roadmap Signals
Several requests point toward the project's near-term development focus.

- **Enhanced Agent Control:** The series of issues from *bogdanovich* on steering chains ([#2841](https://github.com/sipeed/picoclaw/issues/2841), [#2843](https://github.com/sipeed/picoclaw/issues/2843), [#2837](https://github.com/sipeed/picoclaw/issues/2837)) strongly signal that the next version will include `final_turn_render_mode`, `tool_steering` log synthesis, and frontmatter-based tool permission policies (`allow`, `deny`, glob).
- **MCP Modernization:** The requests for OAuth + PKCE ([#2546](https://github.com/sipeed/picoclaw/issues/2546)) and Streamable HTTP ([#2782](https://github.com/sipeed/picoclaw/issues/2782)) are likely to be high-priority roadmap items, as MCP connectivity is a core value proposition. Support for **Streamable HTTP** is a strong candidate for the next minor release.
- **New Providers & Channels:**
    - **Email as a Native Channel ([#2421](https://github.com/sipeed/picoclaw/issues/2421)):** This remains a popular request (5 comments) but is still open with no PR, suggesting it is not yet on the immediate roadmap.
    - **GitHub Device Code Auth for Copilot ([#1347](https://github.com/sipeed/picoclaw/issues/1347)):** Was closed today, implying the implementation is complete or being handled elsewhere.

### 7. User Feedback Summary
- **Pain Points:**
    - "The agent doesn't understand the full context of a multi-question conversation."
    - "I can't connect to the latest MCP servers because the HTTP transport isn't supported."
    - "My OAuth provider is completely broken and returns empty responses."
    - "The model's thinking is being shown to me instead of the final answer."
- **Use Cases:**
    - Corporate users who need a secure, auditable email channel.
    - Headless/VM users who require the GitHub Device Code flow for Copilot authentication.
    - Developers wanting to manage their agent's capabilities per-agent via simple configuration (YAML frontmatter tools policy).
- **Satisfaction:** High engagement from power user *bogdanovich* indicates a positive, collaborative development cycle for advanced features.

### 8. Backlog Watch
- **[#2546](https://github.com/sipeed/picoclaw/issues/2546): [Feature] Support OAuth 2.1 + PKCE for MCP servers...** - Open for nearly a month. Tagged `stale`. This is a significant feature request that could unlock many enterprise MCP integrations.
- **[#2745](https://github.com/sipeed/picoclaw/issues/2745): [BUG] OpenRouter reasoning model leaks thinking...** - Tagged `stale` after being open for 8 days. This is a high-severity **bug**, not a feature request, and should not be going stale. Maintainer attention is needed to find a fix or a workaround.
- **[#2782](https://github.com/sipeed/picoclaw/issues/2782): [Feature] MCP client should support Streamable HTTP transport** - Open for 4 days. A critical connectivity feature for MCP support that will become more urgent as more servers deprecate SSE.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-10

## Today's Overview

Project activity is **high**, with 17 PRs updated in the past 24 hours (10 merged/closed) and 3 new issues opened. The maintainers are actively shipping a dense batch of features focused on plugin/marketplace management, persistent memory, credential proxy improvements, and operator tooling. The 10 merged PRs indicate strong forward momentum, while the 7 open PRs show continued development in parallel. No new releases were published today, but the volume of merged work suggests a release candidate may be imminent.

## Releases

**None.** No new releases were published in the last 24 hours.

## Project Progress

The following PRs were **merged or closed** today, representing significant feature and stability advances:

- **#2351** — `feat(db): move container config from filesystem to DB` (gavrielc): Source of truth for container runtime config moves from `groups/<folder>/container.json` to a new `container_configs` table in the central DB. The file becomes a materialized view. This is a foundational architectural change.
- **#2233** — `feat(container-config): add per-group model + effort overrides` (tamasPetki): Allows operators to set per-group model selection and Claude Code effort level in `container.json`, overriding global defaults.
- **#2280** — `fix(claude-provider): use [1m] model tag for reliable 1M context` (slambert): Plumbs the `model` field through to the Claude SDK, using the CLI's `[1m]` tag for 1M context signaling instead of `--betas`.
- **#2364** — `chore(container): bump claude-code 2.1.116 → 2.1.128` (yaniv-golan): 12 patch version bump. Introduces `${CLAUDE_EFFORT}` substitution, settled `arguments` field, plugin `channels` field.
- **#2318** — `feat(skills): add /add-mnemon skill — persistent semantic memory` (ira-at-work): Agents get a queryable knowledge graph surviving container restarts and context compaction, with category, importance score, entity tags, and typed edges.
- **#2319** — `feat(add-aws): skill for AWS CLI access in agent containers` (ira-at-work): Installs `awscli`, wires TLS verification through credential proxy, mounts AWS credentials from OneCLI vault.
- **#2320** — `docs(skills): update SKILL.md for debug, init-onecli, add-gmail-tool, add-opencode, add-signal, add-vercel` (ira-at-work): Documentation updates across six skills.
- **#2372** — `fix: COO brief accuracy -- skeleton templates, NPS source, ALICE windows, timestamps` (gabrielratner-debug): Addresses accuracy issues — locks property detail/executive summary to fill-in skeletons, fixes NPS source filter, corrects data windows and timestamp handling.
- **#2371** — Same fix as #2372 (duplicate PR merged, likely a hotfix branch).
- **#2352** — `fix(container-runner): raise install_packages build timeout to 15min` (Shlomog): Fixes an `ETIMEDOUT` error during `install_packages` self-mod flow on slow networks.

## Community Hot Topics

**Most Active Issues:**

- **#2369** — `Destinations-addendum compliance degrades past N tools` (glifocat, 1 comment): A technical issue where agents with >1 destination and ~32+ MCP tools begin *narrating* delegation instead of emitting proper `<message to=>` blocks. This affects multi-agent coordination reliability at scale.  
  [🔗 Issue #2369](https://github.com/nanocoai/nanoclaw/issues/2369)

- **#1669** — `Does Credential Proxy implementation risk Anthropic account bans?` (LCJD99, 1 comment, opened 2026-04-06): A long-standing concern about whether NanoClaw's OAuth reverse-proxy pattern violates Anthropic's terms against proxy re-authentication. No resolution yet, but **PR #2363** aims to refresh expiring Anthropic OAuth tokens proactively.  
  [🔗 Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)

**Most Active PRs:**

- **#2368** — `feat(self-mod): agent-initiated plugin install/uninstall + denial cache` (yaniv-golan, open): Adds `install_plugin`/`uninstall_plugin` self-mod actions gated by admin approval, plus a denial cache to avoid re-prompting admins. This is a core autonomy feature.  
  [🔗 PR #2368](https://github.com/nanocoai/nanoclaw/pull/2368)

- **#2365** — `feat(plugins): wire extraKnownMarketplaces + enabledPlugins via container.json` (yaniv-golan, open): Per-group plugin support via SDK's settings-driven install path, enabling plugin marketplace integration.  
  [🔗 PR #2365](https://github.com/nanocoai/nanoclaw/pull/2365)

- **#2362** — `[PR: Skill, follows-guidelines] feat/add watchdog` (SergeiHanus, open): Adds a watchdog utility skill for monitoring agent health.  
  [🔗 PR #2362](https://github.com/nanocoai/nanoclaw/pull/2362)

**Underlying Needs Analysis:** The community is focused on three themes: (1) **plugin extensibility** — operators want to manage plugins from marketplace/container config; (2) **agent autonomy** — agents initiating plugin changes and managing their own memory; and (3) **compliance anxiety** — users worry about Anthropic account bans from credential proxying.

## Bugs & Stability

**High Severity:**
- **#2369** — `Destinations-addendum compliance degrades past N tools` (OPEN): Agents stop emitting proper delegation messages when tool count exceeds ~32 with multi-destination groups. This is a **reliability regression** for complex multi-agent setups. No fix PR identified yet.  
  [🔗 Issue #2369](https://github.com/nanocoai/nanoclaw/issues/2369)

**Medium Severity:**
- **#2370** — `WhatsApp attachments saved to data/attachments/ but not mounted into agent containers` (participo, OPEN): Inbound WhatsApp media files are downloaded but inaccessible to agent containers due to missing mount. Workaround exists (manual copy) but breaks automated WhatsApp-based workflows. No fix PR identified.  
  [🔗 Issue #2370](https://github.com/nanocoai/nanoclaw/issues/2370)

**Fixed Today:**
- **#2352** — `fix(container-runner): raise install_packages build timeout to 15min` — Fixed a `spawnSync /bin/sh ETIMEDOUT` crash during package install on slow networks (merged).
- **#2372/#2371** — COO Brief accuracy fixes: skeleton templates, NPS source filter, ALICE data windows — Fixed data hallucinations and incorrect metric sources (merged).

**Stability Notes:**
- **#1669** (Credential Proxy ban risk) remains open and unresolved, with **PR #2363** (`fix(credential-proxy): proactively refresh expiring Anthropic OAuth tokens`) in open status as a potential mitigation.

## Feature Requests & Roadmap Signals

**Likely Next-Version Features** (from open PRs with high activity):

1. **Plugin/Marketplace Management** — PRs #2367, #2368, #2365 form a coherent plugin lifecycle: agent-initiated install/uninstall with admin approval, operator-side skills for plugin management, and per-group plugin configuration via `container.json`. Very likely to land together.
2. **Persistent Skill Data** — PR #2366 (`SKILL_DATA_DIR per-group persistent state mount`) provides a dedicated directory for skill state across restarts. Complements the `/add-mnemon` memory skill merged today.
3. **Watchdog Skill** — PR #2362 adds agent health monitoring, suggesting growing interest in production-grade agent supervision.

**User-Requested Features:**
- **#2369** implies need for better multi-agent delegation scaling — users want agents to reliably emit structured delegation messages regardless of tool count.
- **#2370** requests WhatsApp attachment mount support — users want full WhatsApp media integration.

**Roadmap Signal:** The cluster of plugin-related PRs from yaniv-golan (#2365, #2366, #2367, #2368) suggests a **plugin ecosystem push** is the current development focus.

## User Feedback Summary

**Pain Points:**
- **WhatsApp attachment isolation** (Issue #2370): A user reports that WhatsApp media files land in `data/attachments/` but are not mountable into agent containers, preventing agents from processing images, video, or audio from WhatsApp. This is a clear **integration gap** for WhatsApp-based workflows.
- **Multi-agent delegation unreliability** (Issue #2369): At scale (>32 tools, multi-destination), agents switch from structured delegation to narrative delegation, breaking automated orchestration. This is a **scaling pain point** for production multi-agent deployments.
- **Credential Proxy compliance risk** (Issue #1669): A user (LCJD99) expresses genuine concern about Anthropic account bans. The PR #2363 refresh approach may mitigate technical anti-fraud checks, but the terms-of-service question remains open.

**Use Cases:**
- **WhatsApp-based agent workflows** (Issue #2370): Users are deploying agents that process WhatsApp media attachments, indicating real-world communication-channel integration.
- **COO Brief generation** (PR #2372): Users (specifically "Austin GM") are using NanoClaw to generate executive-level operational briefs, and accuracy issues are being actively patched.
- **AWS infrastructure management** (PR #2319): The `/add-aws` skill enables agents to manage cloud resources, suggesting enterprise use cases.

**Satisfaction Signals:** Rapid fix turnaround on COO Brief accuracy issues (PRs #2371/#2372 merged same day) and the build timeout fix (#2352) show maintainers are responsive to production-impacting bugs.

## Backlog Watch

- **#1669** — `Does Credential Proxy implementation risk Anthropic account bans?` (Opened: 2026-04-06, Updated: 2026-05-09) — **34 days without resolution.** The issue has a pending PR (#2363) but it's still open. This is a high-stakes compliance question that could affect user trust. Anthropic's policies against reverse-proxy OAuth are explicit, and this issue needs an official maintainer response or documented risk assessment.  
  [🔗 Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)

- **No other long-stale issues** identified in today's data — the 3 open issues are all from the last 24 hours (except #1669). The project appears to have good issue hygiene.

---

*Generated from GitHub data for nanocoai/nanoclaw, retrieved 2026-05-10.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-05-10**.

---

## NullClaw Project Digest – 2026-05-10

### 1. Today's Overview
NullClaw has seen moderate activity in the last 24 hours, with 3 pull requests updated and one high-severity regression bug reported. The project is currently processing a significant community PR for a data governance layer (associated with a hackathon) and a new feature for insecure HTTP endpoint whitelisting. While there are no new releases today, the mix of infrastructure improvements (Nix build, HTTP config) and a critical regression suggests a period of active development and stabilization.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Two pull requests were merged/closed today, representing concrete progress on both infrastructure and feature development:

- **[#903 – feat: add config to whitelist insecure http endpoints (CLOSED)](https://github.com/nullclaw/nullclaw/pull/903)**
  Merged today. This adds a `http_request.allowed_insecure_domains` configuration option, allowing NullClaw agents to connect to whitelisted HTTP (non-HTTPS) endpoints. The primary use case is for local development and Docker Compose environments.
- **[#796 – ci: add Nix flake build workflow (CLOSED)](https://github.com/nullclaw/nullclaw/pull/796)**
  Merged today. This introduces a new CI job that builds and smoke-tests the NullClaw Nix flake on every push and PR, using `cachix/install-nix-action`. This improves build reliability for Nix users.

### 4. Community Hot Topics
The community is currently most engaged with a high-impact regression bug and a major hackathon contribution:

- **[Issue #902: [Bug] 2026.5.x: HostResolutionFailed when using siliconflow provider](https://github.com/nullclaw/nullclaw/issues/902)**
  - **Status:** Open, 0 comments (likely in early triage)
  - **Impact:** High. This is a regression where the `siliconflow` provider fails with `HostResolutionFailed` after upgrading from the stable 2026.4.9 release to the 2026.5.x line. The user explicitly notes the same config and network work on the previous version.
  - **Needs:** Immediate attention. This suggests a bug introduced in the HTTP/DNS client refactoring (as noted by the user).
- **[PR #885: feat(memory): Add NullClaw Data Governance Layer (OPEN)](https://github.com/nullclaw/nullclaw/pull/885)**
  - **Status:** Open since 2026-05-04, last updated today
  - **Context:** Submitted by a team for the WB × OpenSource Hackathon. This is a significant community contribution proposing a data governance layer for memory management.
  - **Needs:** Maintainer review and feedback. This is a large feature and may require architectural discussion before merging.

### 5. Bugs & Stability
**Severity: Critical**

- **Issue #902: `HostResolutionFailed` regression in 2026.5.x for `siliconflow` provider**
  - **Summary:** A clear regression caused by the recent HTTP/DNS client refactoring. The provider completely fails to resolve the host despite identical configuration working in 2026.4.9.
  - **Fix status:** No fix PR exists yet. This is the only open bug and the most pressing stability issue on the project right now.

**Severity: Low** (No critical bugs reported beyond the above)

### 6. Feature Requests & Roadmap Signals
Two features are in active flux and likely to appear in the next minor release (2026.5.x or 2026.6.x):

1. **Insecure HTTP Endpoint Whitelisting (PR #903 – merged):** This feature is now live. It allows agents to connect to non-HTTPS endpoints via a configuration whitelist. Expect this in the next release.
2. **NullClaw Data Governance Layer (PR #885 – open):** If merged, this would introduce a formal data governance layer for memory, covering retention, access control, and compliance. This is a roadmap-level signal for enterprise-grade memory management.

### 7. User Feedback Summary
- **Negative Feedback:** The primary pain point today is the regression in the `siliconflow` provider. The user (agiminds) expresses clear dissatisfaction with the upgrade path, noting that the current version (2026.5.x) "works perfectly in 2026.4.9." The regression appears to be tied to the HTTP/DNS client refactoring, indicating a need for more thorough testing of provider integrations before merging networking changes.
- **Positive/Functional Feedback:** The merged PR #903 directly responds to a common developer pain point: connecting NullClaw agents to insecure local services (e.g., inside Docker Compose stacks). This signals that the project is responsive to developer ergonomics and local development workflows.

### 8. Backlog Watch
The project has no notably long-unanswered issues or PRs that have been ignored for weeks. The oldest open PR is #885 (created 2026-05-04), which was just updated today and is actively receiving attention. No critical items are currently languishing in the backlog.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for **IronClaw** for **2026-05-10**.

---

## IronClaw Project Digest – 2026-05-10

### 1. Today's Overview
IronClaw is in a period of **very high activity**, driven primarily by the "Reborn" architecture transition. Over the last 24 hours, the project saw **19 updated issues** and **36 updated pull requests**, with **13 PRs merged or closed**. While there were no new formal releases, the core team (notably @serrrfirat) merged several large foundational components for the Reborn runtime, including a durable secret store, resource governor, and capability catalog. The project remains in a **build-out phase**, with stability concerns flagged by a failed nightly E2E test and a new multi-tenant security fix.

### 2. Releases
**No new releases** were published today. The latest available release remains from the previous cycle (PR #3388, which bumped `ironclaw` from v0.24.0 to v0.28.0 and `ironclaw_common` to v0.4.2). That release is still pending formal announcement.

### 3. Project Progress
**13 PRs were merged or closed** today, representing significant progress in the Reborn architecture and infrastructure hardening:

- **Reborn Architecture:**
    - **Durable infrastructure:** Merged `PersistentResourceGovernor` with JSON/libSQL/PostgreSQL backends (PR [#3427](https://github.com/nearai/ironclaw/issues/3427)) and a durable encrypted `SecretsStore` (PR [#3414](https://github.com/nearai/ironclaw/issues/3414)).
    - **Capability & Context:** Implemented the Reborn `CapabilityCatalog` (PR [#3426](https://github.com/nearai/ironclaw/issues/3426)) and a loop prompt bundle port (PR [#3411](https://github.com/nearai/ironclaw/issues/3411)).
    - **Loop Host Ports:** Composed text-only loop host ports (PR [#3398](https://github.com/nearai/ironclaw/issues/3398)) and added the transport adapter contract (PR [#3099](https://github.com/nearai/ironclaw/issues/3099)).
    - **Review Gaps Closed:** Fixed review gaps in the secret store (PR [#3445](https://github.com/nearai/ironclaw/issues/3445)) and resource governor (PR [#3440](https://github.com/nearai/ironclaw/issues/3440)).

- **Stability & Fixes:**
    - **Auth Race Fix:** Fixed a race condition in E2E auth token retry tests (PR [#3437](https://github.com/nearai/ironclaw/issues/3437)).
    - **LLM Boundary Cleanup:** An XL-sized PR refactored LLM provider-specific auth and config behind facades (PR [#3416](https://github.com/nearai/ironclaw/issues/3416)).

### 4. Community Hot Topics
The Reborn architecture remains the dominant focus, generating significant discussion organically:

- **[#2987: EPIC: Track Reborn architecture landing strategy](https://github.com/nearai/ironclaw/issues/2987)**
    - **44 comments**, 18 open sub-issues filed today alone. This is the central coordinating issue for the entire Reborn refactor. The volume of linked issues (e.g., #3419, #3420, #3423, #3424, #3429, #3431-35) shows the team is executing on a planned "grouped PR" strategy, splitting work into reviewable chunks rather than a single monolithic merge.

- **[#84: Agent system advanced features](https://github.com/nearai/ironclaw/issues/84)**
    - **4 comments**, open since February 2026. This backlog item for multi-agent routing and global sessions is being overtaken by the Reborn architecture, which is effectively rebuilding the agent loop from the ground up.

- **[#3436: DeepSeek API thinking mode 400 error](https://github.com/nearai/ironclaw/issues/3436)**
    - **1 reaction (thumbs up)**. While not high-traffic, this is a real user-reported integration blocker. It indicates the community is testing third-party provider compatibility actively.

### 5. Bugs & Stability
**Two significant bugs reported; one resolved.**

- **[High Severity] Nightly E2E Failure (v2-engine)** ([#3447](https://github.com/nearai/ironclaw/issues/3447))
    - Reported today (2026-05-10). The nightly scheduled E2E suite failed, specifically the `Full E2E / E2E (v2-engine)` job. This is a **critical signal** for a project in active refactoring, as the v2 engine is the legacy path that must remain stable. No fix PR is yet linked. This issue is self-reported by the CI system.

- **[Medium Severity] i18n Regression in Production** ([#3425](https://github.com/nearai/ironclaw/issues/3425))
    - Raw translation keys (e.g., `auth.title`, `tab.chat`) are intermittently rendering in the UI in production. This is a **user-facing regression** affecting internationalization. No fix PR is yet linked. The intermittent nature suggests a race condition or lazy-loading issue in the localization pipeline.

- **[Closed/Low] Previous Nightly E2E Failure** ([#3323](https://github.com/nearai/ironclaw/issues/3323))
    - Closed today. The failure from May 7 (web-regressions) was resolved, likely by the auth retry fix in PR #3437.

### 6. Feature Requests & Roadmap Signals
The project direction is overwhelmingly **architecturally driven** rather than user-requested. There are no new "feature requests" in the traditional sense today. However, the roadmap is clearly visible in the issue tracker:

- **Near-term (next release):** The landing of the Reborn text-only loop driver (PR [#3439](https://github.com/nearai/ironclaw/issues/3439)) and the shared storage substrate (PR [#3421](https://github.com/nearai/ironclaw/issues/3421)) are pending. Once merged, the next release will likely include these as the foundation for Reborn support.

- **Mid-term:** The stack of issues filed by @serrrfirat today on Reborn loop readiness (#3429), loop exit (#3424), input resume/cancellation (#3423), and memory/context services (#3431, #3432) form the core roadmap for the next 1-2 weeks.

- **User-facing:** The i18n regression (#3425) is the only user-visible pain point currently tagged. Its fix is likely a patch-level priority before the next minor release.

### 7. User Feedback Summary
User feedback is limited, but one direct pain point and one operational signal are present:

- **Pain Point:** The **DeepSeek API 400 error** ([#3436](https://github.com/nearai/ironclaw/issues/3436)) when using thinking mode. User @Serhioromano reports a clear, testable failure. This indicates the provider integration layer for thinking/reasoning modes has a bug when echoing back `reasoning_content`.

- **Satisfaction Signal:** The **platform download error** ([#2949](https://github.com/nearai/ironclaw/issues/2949)) for `x86_64-unknown-linux-gnu` remains **open with 4 comments** since April 24. The user reports the installer script fails but a manual release tarball is available. The lack of a fix suggests this is a low-priority installer script issue, but it is a negative first impression for new users.

### 8. Backlog Watch
- **[#2949: Platform download error](https://github.com/nearai/ironclaw/issues/2949)** (Open since April 24)
    - **Critical for onboarding.** A new user cannot install IronClaw via the recommended script on a common Linux platform (x86_64). The workaround exists (manual download), but this hurts adoption. Needs maintainer triage.

- **[#84: Agent system advanced features](https://github.com/nearai/ironclaw/issues/84)** (Open since February 14)
    - This feature parity issue (multi-agent routing, global sessions) has no recent assignee activity. The Reborn architecture is likely rendering this implementation obsolete, but the issue should be either closed or updated to reflect the new approach.

- **[#1378: Per-channel MCP and built-in tool filtering](https://github.com/nearai/ironclaw/issues/1378)** (Open since March 18)
    - An XL-sized PR from an external contributor (@nick-stebbings) that has been open for nearly two months. It has cobwebs and no recent activity. This is a valuable feature for multi-channel deployments (Slack, Telegram, Web), but it risks merge conflicts as the Reborn architecture changes core agent interaction patterns. Maintainer attention is warranted to either merge, delegate, or close with guidance.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-10

## Today's Overview
The LobsterAI project shows high activity with **1 new release**, **12 PRs updated** in the last 24 hours (8 merged/closed, 4 open), and **1 closed issue**. The team is executing a coordinated release cycle, merging multiple parallel feature branches for artifacts, cowork pagination, and IM fixes. Developer velocity is strong, with multiple contributors (fisherdaddy, liugang519, liuzhq1986) pushing several PRs on the same day. The project appears to be in a stable, feature-acceleration phase ahead of a potential larger stable release.

---

## Releases
**New: LobsterAI 2026.5.9** (`v2026.5.9`)  
[GitHub Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.9)

### What's Changed
- **Independent Agent working directories** – each Agent now has its own isolated working directory for file operations ([PR #1904](https://github.com/netease-youdao/LobsterAI/pull/1904))
- **Artifact system** – new artifact feature for managing development outputs ([PR #1906](https://github.com/netease-youdao/LobsterAI/pull/1906))
- **Session list & message history pagination** – improved UX for large conversation histories (from issue #924)

**Breaking changes**: None documented. The three features are additive.

**Migration notes**: No known migrations required. Users should update to benefit from artifact support and pagination.

---

## Project Progress
**8 PRs merged/closed today:**
| PR | Description | Author | Area |
|---|---|---|---|
| [#1938](https://github.com/netease-youdao/LobsterAI/pull/1938) [CLOSED] | Release 2026.05.08: artifacts preview, cowork pagination, cron tasks | fisherdaddy | renderer, docs, main, openclaw, skills, cowork, im, artifacts |
| [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937) [CLOSED] | Optimize main UI | fisherdaddy | renderer, main, openclaw, cowork, artifacts |
| [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) [CLOSED] | Fix incorrect time in IM channel chat history + optimize display | fisherdaddy | renderer, main, openclaw, cowork |
| [#1935](https://github.com/netease-youdao/LobsterAI/pull/1935) [CLOSED] | Update default empty history title style | fisherdaddy | renderer |
| [#1934](https://github.com/netease-youdao/LobsterAI/pull/1934) [CLOSED] | Update agent avatar | fisherdaddy | renderer, main, cowork |
| [#1933](https://github.com/netease-youdao/LobsterAI/pull/1933) [CLOSED] | Preview refresh button; HTML preview bugfix; file search/sort; dedup validation; dark mode MD search | liugang519 | renderer, cowork, artifacts |
| [#1932](https://github.com/netease-youdao/LobsterAI/pull/1932) [CLOSED] | Hide agent name in message metadata (cowork) | liuzhq1986 | renderer, cowork |
| [#857](https://github.com/netease-youdao/LobsterAI/pull/857) [CLOSED] | [stale] Feat: MCP HTTP streaming support | noobdawn | MCP |

**Feature advances:**
- **Artifacts preview** (PDF, Office files, HTML) is now functional with refresh, dedup, and dark mode
- **Cowork pagination & metadata** – session loading and agent name display improvements for multi-agent collaboration
- **Cron-based scheduled tasks** – new capability added to release branch
- **MCP HTTP streaming** – stale PR finally closed but never merged; feature remains unmerged

---

## Community Hot Topics
**Most active issue:**  
[#820](https://github.com/netease-youdao/LobsterAI/issues/820) — *"dev阶段MCP可用；打包后，MCP不可用"*  
- Status: ❌ CLOSED today after 46 days open  
- 1 comment, 0 reactions  
- **Analysis**: User reported that MCP configuration (0 tools found) works in dev build but fails after packaging. This is a common MCP path resolution issue. The closure without detailed resolution notes leaves some uncertainty for other users facing similar packaging problems.

**Most active PR (by context):**  
[#857](https://github.com/netease-youdao/LobsterAI/pull/857) — *"feat: 新增MCP对http streaming的支持"* (CLOSED as stale)  
- Created 2026-03-25, closed 2026-05-10  
- Author states *"代码为vibe coding产物"* (AI-generated code)  
- **Underlying need**: Users urgently want MCP streaming support but the unmerged PR signals possible quality/maintainability concerns. The author's urgency ("项目很需要") suggests this is a blocking feature for packaging/enterprise deployment.

---

## Bugs & Stability
| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 High | **MCP broken after packaging** (#820) | CLOSED | No direct fix linked |
| 🟡 Medium | **IM channel incorrect time** (PR #1936) | MERGED | [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) |
| 🟡 Medium | **HTML preview bug** (PR #1933) | MERGED | [#1933](https://github.com/netease-youdao/LobsterAI/pull/1933) |
| 🟢 Low | **File dedup/validation issues** (PR #1933) | MERGED | Same |

The MCP packaging bug (#820) is the most concerning, as it affects all users trying to deploy the application. The closure without a verifiable fix means users should test packaging carefully.

---

## Feature Requests & Roadmap Signals
**Strong signals for next version:**
1. **MCP HTTP streaming support** – PR #857 (stale) suggests high demand; likely to be re-implemented with proper code review
2. **Artifacts expansion** – The artifact preview system is active; expect richer file type support (images, 3D models) based on PR #1906 and #1933
3. **Cron/scheduled tasks** – Already merged in release branch (#1938); upcoming for production
4. **Multi-agent workspace isolation** – Independent working directories (released v2026.5.9) enable safer multi-agent file manipulation

**Prediction**: The next minor release (2026.5.10 or 2026.5.x) will likely include:
- MCP streaming (reopened/rewritten)
- Artifacts preview for more file types
- Cowork pagination polish

---

## User Feedback Summary
**Pain points:**
- **Packaging breaks MCP** (issue #820) – blocks real deployment
- **Incomplete features** – user noobdawn explicitly states MCP streaming is "very needed" (项目很需要) but their PR was closed stale
- **IM timestamp inaccuracies** – now fixed (#1936)

**Satisfaction signals:**
- High frequency of merged PRs indicates responsive maintenance
- Multiple UI polish fixes (avatars, empty states, dark mode) show attention to UX
- The artifact system rollout appears well-received given parallel fixes

---

## Backlog Watch
**PRs needing maintainer attention:**
| Item | Age | Issue | Risk |
|---|---|---|---|
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | 20 days | Bump @headlessui/react 1.7.19 → 2.2.10 (major) 🟡 | Breaking changes possible; UI regressions |
| [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) | 20 days | Bump vite 5.4.21 → 8.0.11 (major) 🔴 | Build system breaking change; needs thorough testing |
| [#1764](https://github.com/netease-youdao/LobsterAI/pull/1764) | 20 days | Bump react-dom 18.3.1 → 19.2.6 (major) 🔴 | React 19 migration; compatibility with existing deps |
| [#1939](https://github.com/netease-youdao/LobsterAI/pull/1939) | 1 day | Fix batch delete tasks not working | Open; recent, low risk |

**No long-unanswered user issues** remain open; #820 was the oldest and is now closed. The three dependency bumps (React 19, Vite 8, HeadlessUI v2) represent a major upgrade cycle that has been pending for 20 days. These should be merged cautiously as they could cause cascading build failures.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-05-10.

---

## Moltis Project Digest — 2026-05-10

### 1. Today's Overview
The Moltis project shows **moderate development activity**, with three pull requests (PRs) updated in the last 24 hours and two of those successfully merged. No new releases were published, and there are **no open issues** currently being tracked, indicating a clean backlog for reported bugs or feature requests. Main development focus remains on the **chat interface** and project **documentation infrastructure**, with a significant contributor community update improving localization. Overall project health appears stable, though the lack of open issues may suggest low community feedback volume rather than zero bugs.

### 2. Releases
**No new releases today** (latest existing release remains previous). No migration notes, breaking changes, or version bumps to report.

### 3. Project Progress
Two PRs were closed/merged in the last 24 hours, advancing both the UI and internationalization:

- **[#985 – Refresh web chat composer](https://github.com/moltis-org/moltis/pull/985)** *(Merged)*  
  A major redesign of the chat input area, turning it into a centered, rounded composer. The footer now houses controls for model selection, reasoning, attachments, voice, and send, and the token/context status was moved into this footer with wrapping behavior instead of truncation. A new explicit attachment picker was added, and empty queued messages are better handled.

- **[#986 – Update and improve zh-TW Traditional Chinese locale](https://github.com/moltis-org/moltis/pull/986)** *(Merged)*  
  Comprehensive update to Traditional Chinese (Taiwan) translations across multiple UI modules. Standardized terminology for "AI 助理" (AI Assistant), "Moltis", and related terms, improving clarity and consistency for zh-TW users.

- **[#987 – Replace docs deployment with Astro site](https://github.com/moltis-org/moltis/pull/987)** *(Open)*  
  Proposes replacing the existing mdBook documentation deployment with an Astro-generated site. The new site preserves existing Markdown sources and `.html` URLs but adds a custom sidebar, page table of contents, copy buttons, title search, responsive hamburger navigation, and light/dark/auto theme controls.

### 4. Community Hot Topics
No issues were open or active in the last 24 hours. The only open PR is:

- **[#987 – Replace docs deployment with Astro site](https://github.com/moltis-org/moltis/pull/987)** *(Open, zero comments)*  
  This PR represents the most significant open change, signaling a desire to modernize documentation UX. While it currently has no community discussion, the move to Astro suggests a shift toward more maintainable and visually polished documentation, likely driven by internal team priorities rather than user demand.

### 5. Bugs & Stability
**No new bugs, crashes, or regressions** were reported in the last 24 hours (zero open issues). No stability-related PRs were filed. Given the clean slate, existing stability appears acceptable; however, this may also indicate a lack of active end-user bug reporting.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed as issues. However, based on the merged and open PRs, the following signals for the next version emerge:

- **Improved chat composer UX** (PR #985) – will likely land in the next minor release.
- **Internationalization (Traditional Chinese) improvements** (PR #986) – indicates ongoing commitment to multilingual support; expect more locale updates.
- **Astro-based documentation site** (PR #987) – if merged, this will be a notable infrastructure upgrade in the next release, improving user onboarding and developer docs.

**Prediction:** The next release will likely include the chat composer redesign, the zh-TW locale updates, and possibly the Astro docs migration.

### 7. User Feedback Summary
There are **no open issues or recent comments** to analyze for direct user feedback. The lack of user-reported pain points could mean:
- The current stable version satisfies most users, or
- The community is small or not actively filing feedback via GitHub Issues.

The one active PR (#987) is authored by a project insider (`penso`), not an external contributor, suggesting documentation improvements are internal priorities rather than community requests.

### 8. Backlog Watch
**No long-unanswered issues or PRs** currently require maintainer attention. The issue tracker is completely empty (0 open items), and the only open PR (#987) is recent (created May 8). The project backlog is healthy and uncluttered.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-10

## 1. Today's Overview

CoPaw (QwenPaw) shows high activity with 30 issues and 23 PRs updated in the last 24 hours, plus 2 new releases (v1.1.6 stable and v1.1.6-beta.2). The project is in a healthy state of rapid iteration, with 13 issues closed and 14 PRs merged/closed today. However, the volume of open issues (17 active) and the mix of regression bugs, configuration problems, and performance complaints suggest that recent releases have introduced some instability. Key contributors are actively fixing reported issues, with several fix PRs already submitted for critical bugs. The community is highly engaged, particularly around provider configuration, session persistence, and WebUI performance.

## 2. Releases

### v1.1.6 (Latest Stable)
- **Agent System:**
  - `qwenpaw doctor` now checks Windows-specific environment issues (long path support, PowerShell language mode, working directory path length) ([#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032))
  - Agent Status API enhancements
- **Breaking Changes:** None documented
- **Migration Notes:** None documented

### v1.1.6-beta.2
- `fix(runner)`: Renamed channel variable to `channel_name` in command dispatch ([#4134](https://github.com/agentscope-ai/QwenPaw/pull/4134))
- `perf(console)`: Skip chat history lookup for non-arrow keys for performance improvement ([#4130](https://github.com/agentscope-ai/QwenPaw/pull/4130))
- Additional fixes (details truncated in release notes)

## 3. Project Progress

**Merged/Closed PRs today (14 total):**

- **Critical bug fixes:**
  - [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) — Fix MCP lifecycle-task leak in stateful clients (addresses memory leak issue [#4105](https://github.com/agentscope-ai/QwenPaw/issues/4105))
  - [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) — Fix agent-config preservation on save (prevents nested config loss, relates to [#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145))
- **Console improvements:**
  - [#4153](https://github.com/agentscope-ai/QwenPaw/pull/4153) — Extract `QrcodeAuthBlock` component, fix polling leak on drawer close
  - [#4148](https://github.com/agentscope-ai/QwenPaw/pull/4148) — Immediately stop polling and clear status after closing drawer
- **Provider fixes:**
  - [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) — Allow DashScope base URL selection in Console UI
- **Channel improvements:**
  - [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) — Propagate user display name to agent env context (Feishu)
- **Chore/Release:**
  - [#4163](https://github.com/agentscope-ai/QwenPaw/pull/4163), [#4161](https://github.com/agentscope-ai/QwenPaw/pull/4161) — Release note updates and version bump
- **Other fixes:**
  - [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) — Add safe default timeout for `delegate_external_agent`
  - [#3149](https://github.com/agentscope-ai/QwenPaw/pull/3149) — Support listing tools for MCP

**Still open and under review:**
- [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169) — Fix Volcano Engine VOLCENGINE Provider (related to [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165))
- [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) — Enhance Matrix E2EE verify step
- [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) — Add batch action support to browser_use tool
- [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — Add Tauri 2.x desktop app support
- [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) — System tray startup item (Win32)

## 4. Community Hot Topics

### Most Active Issues (by comment count):

1. **[#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) — Post-upgrade breakage: OpenCode provider fails after v1.1.5.post2** (10 comments)
   - **Analysis:** Regression in provider configuration handling. User reports that `opencode.ai/zen/v1` base URL worked in v1.1.5 but broken in post2. High severity as it affects a specific provider integration.

2. **[#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) — Volcano Engine VOLCENGINE model configuration broken in v1.1.6** (8 comments)
   - **Analysis:** Built-in provider configuration for Volcano Engine fails for all model connections. A fix PR ([#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169)) is already submitted.

3. **[#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145) — Agent config not persisting with multiple agents** (8 comments, closed)
   - **Analysis:** User reports that configuring one agent overwrites previously configured agents' data. A fix PR ([#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157)) was merged today.

4. **[#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) — Session history disappears, messages routed to wrong session** (7 comments, open since April 26)
   - **Analysis:** Long-standing critical bug where chat history suddenly becomes blank while session title remains. Not yet resolved.

5. **[#4164](https://github.com/agentscope-ai/QwenPaw/issues/4164) — Request for Chinese prompts** (7 comments, closed)
   - **Analysis:** Community request to support Chinese-language prompts for models like DeepSeek and GLM that use Chinese thinking chains. Shows growing Chinese-speaking user base.

6. **[#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) — Dream Log Output feature** (6 comments, closed)
   - **Analysis:** Feature proposal for memory consolidation logging (already implemented in v1.1.2, now closed).

7. **[#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) — Network disconnect/reconnect issue with HEARTBEAT.md** (6 comments, closed)
   - **Analysis:** After network interruption, agent message channels fail to auto-reconnect when HEARTBEAT.md is enabled. Fixed in recent commits.

8. **[#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) — DeepSeek `think` content parsing issue** (6 comments)
   - **Analysis:** DeepSeek v4 Flash's thinking tags not parsed correctly, resulting in empty responses. Affects model output quality.

9. **[#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) — New WebUI is extremely slow** (5 comments)
   - **Analysis:** Performance regression in recent versions. UI becomes unresponsive during message generation (typing lag, frame drops on Win11). Users report "can't multitask at all."

## 5. Bugs & Stability

### High Severity (Active threats to usability):

| Issue | Description | Severity | Fix Status |
|-------|-------------|----------|------------|
| [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) | Deleted sessions still used by scheduled tasks via stale sessionId | **CRITICAL** — Data/inference corruption | No fix PR yet |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | Session history disappears, sessions routed incorrectly | **CRITICAL** — Data loss | Open since April 26, no assigned fix |
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | WebUI performance regression (jank, frame drops) | **HIGH** — UX blocking | No fix PR |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | DeepSeek think tag parsing causes empty responses | **HIGH** — Model output broken | No fix PR |
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope provider config not read at runtime (401 error) | **HIGH** — Provider broken | Under investigation |
| [#4150](https://github.com/agentscope-ai/QwenPaw/issues/4150) | Plan mode executes tools before user confirmation | **HIGH** — Safety/control violation | No fix PR |
| [#4151](https://github.com/agentscope-ai/QwenPaw/issues/4151) | Orphan chat entries on unclean shutdown | **MEDIUM** — Data inconsistency | No fix PR |

### Medium Severity:

| Issue | Description | Status |
|-------|-------------|--------|
| [#4149](https://github.com/agentscope-ai/QwenPaw/issues/4149) | Failed model calls replay user messages on next turn | Closed today via [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) |
| [#4147](https://github.com/agentscope-ai/QwenPaw/issues/4147) | LM Studio provider returns "Internal Server Error" | Closed today |
| [#4135](https://github.com/agentscope-ai/QwenPaw/issues/4135) | Local Ollama connection error message too generic | Closed today |
| [#4137](https://github.com/agentscope-ai/QwenPaw/issues/4137) | Mermaid graph not rendering in replies | Closed today |
| [#4105](https://github.com/agentscope-ai/QwenPaw/issues/4105) | Orphaned MCP processes (~18GB RAM leak / 1.5 days) | Fix merged via [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) |
| [#4100](https://github.com/agentscope-ai/QwenPaw/issues/4100) | MCP streamable_http auto-reconnect leads to inconsistent state | Closed today |
| [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md blocks auto-reconnect after network interruption | Fixed, closed |

### Regression Patterns:
- **v1.1.5.post2** introduced multiple regressions: OpenCode provider ([#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)), agent config persistence ([#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145)), and possibly WebUI performance ([#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108))
- **v1.1.6** introduced Volcano Engine provider failure ([#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165)) and MCP memory leaks (now fixed)

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (based on PR activity and maintainer engagement):

1. **Volcano Engine Provider Fix** — [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169) (Fix PR already submitted, `support_model_discovery=False` approach suggests careful design)

2. **Multi-Agent Routing from Single Channel** — [#4160](https://github.com/agentscope-ai/QwenPaw/issues/4160) — High demand for routing different messages from one chat endpoint to different agents based on content/tags

3. **Browser_use Batch Actions** — [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) — Under review, adds JSON array-based sub-action execution for browser automation

4. **Matrix E2EE Improvements** — [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) — Under review, extends Matrix channel with flexible sign-in and encryption

5. **System Tray / Background Mode** — [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) — Under review, Windows system tray with auto-start

6. **Semantic Skill Routing** — [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) — Under review for months, embedding-based skill filtering to reduce token usage

### Community Requests:

| Feature | Issue | Demand |
|---------|-------|--------|
| **Chinese-language prompts** (for DeepSeek, GLM) | [#4164](https://github.com/agentscope-ai/QwenPaw/issues/4164) | High from Chinese-speaking community |
| **Session deletion** (remove low-quality exchanges) | [#4113](https://github.com/agentscope-ai/QwenPaw/issues/4113) | Medium |
| **Font size adjustment in Desktop mode** | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | Medium |
| **Client startup speed improvement** | [#4158](https://github.com/agentscope-ai/QwenPaw/issues/4158) | Medium |
| **Image editing with reference images (gpt-image2)** | [#4167](https://github.com/agentscope-ai/QwenPaw/issues/4167) | Low-Medium |
| **ADBPG long-term memory** | [#2307](https://github.com/agentscope-ai/QwenPaw/issues/2307), [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) | Niche but persistent (6 weeks open) |
| **Language switching internationalization (UI)** | [#4156](https://github.com/agentscope-ai/QwenPaw/issues/4156) | Low |
| **Time injection in pre_reply hooks** | [#4166](https://github.com/agentscope-ai/QwenPaw/issues/4166) | Low but thoughtful |

## 7. User Feedback Summary

### Satisfaction Signals:
- **Active community engagement**: 30 issues and 23 PRs in 24h indicates a healthy, responsive user base
- **Quick resolution**: Multiple bugs are being fixed within hours of reporting (e.g., Volcano Engine [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) → fix PR [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169) same day)
- **Feature ideas flowing**: Users are actively suggesting enhancements (Chinese prompts, session deletion, time injection)

### Pain Points (recurring themes):

1. **"Every new version breaks something"** — Users report regressions on OpenCode ([#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)), Volcano Engine ([#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165)), and WebUI performance ([#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108)). One user wrote: *"用了这么久，体验上越来越差了"* (After using it so long, the experience keeps getting worse).

2. **Session management issues** — Multiple users report disappearing history ([#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)), orphaned sessions ([#4151](https://github.com/agentscope-ai/QwenPaw/issues/4151)), and stale session IDs in scheduled tasks ([#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162)). These are foundational reliability issues.

3. **Provider configuration fragility** — DashScope ([#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159)), LM Studio ([#4147](https://github.com/agentscope-ai/QwenPaw/issues/4147)), OpenCode ([#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)), and Volcano Engine ([#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165)) all had connection/configuration issues. The "configure once, works forever" expectation is not being met.

4. **WebUI performance degradation** — [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) is the strongest signal: Win11 user reports "computer becomes incredibly sluggish" during generation, entirely blocking other work. This is a regression from earlier versions.

5. **Skill sync confusion** — [#4079](https://github.com/agentscope-ai/QwenPaw/issues/4079): Syncing the `skill` folder doesn't update the UI, suggesting skills are cached server-side rather than read from disk.

### Chinese Community Sentiment:
A significant portion of issues are in Chinese, indicating a strong user base in China. Requests for Chinese prompts ([#4164](https://github.com/agentscope-ai/QwenPaw/issues/4164)) and Chinese model support (DeepSeek, GLM) suggest the project could benefit from better i18n for model prompts.

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Days Open | Summary | Concern Level |
|-------|-----------|---------|---------------|
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 14 days | **Session history disappears, messages routed to wrong session** | **HIGH** — Critical data loss, seen as a top-5 most active issue with 7 comments |
| [#2307](https://github.com/agentscope-ai/QwenPaw/issues/2307) | 45 days | **ADBPG long-term memory** (PR [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) also stalled) | **MEDIUM** — Niche feature but PR has been open for 1.5 months without merge |
| [#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840) | 14 days | **XiaoYi (Huawei assistant) channel can't send replies** | **MEDIUM** — Protocol/WebSocket issues |
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | 2 days | **WebUI performance regression** | **HIGH** — New, rapidly growing complaint |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | 4 days | **DeepSeek think tag parsing** | **HIGH** — Affects model output quality |

### Stale PRs:

| PR | Days Open | Summary | Concern Level |
|----|-----------|---------|---------------|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 32 days | Semantic skill routing | **MEDIUM** — Awaiting maintainer review/discussion |
| [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) | 45 days | ADBPG memory manager | **MEDIUM** — Stale since March 26 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | 16 days | Tauri 2.x desktop app | **MEDIUM** — Potentially significant new platform support |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | 23 days | Discord thread creation for cron | **LOW** — Rebased, awaiting final review |

**Observation:** The project has healthy "bug → fix in hours" velocity for issues gaining attention, but deeper architectural items (session persistence model, skill caching, Tauri desktop) linger for weeks without maintainer review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-10

## 1. Today's Overview
ZeptoClaw is currently experiencing a low-activity period, with no new releases, no issues updated, and no merged pull requests in the last 24 hours. The only active movement is an open PR (#571) that has been updated but not merged, indicating work-in-progress on tool description improvements. The project appears to be in a quiet phase, possibly between major development cycles. The absence of critical bug reports or community complaints suggests the project is stable but not actively evolving at this moment.

## 2. Releases
No new releases as of 2026-05-10. The latest release remains unspecified.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The only ongoing change is:

- **PR #571** (Open): *feat(tools): trigger-phrase nudges in longterm_memory description* — This PR aims to improve the `longterm_memory` tool's `description()` method by adding explicit "Use when" and "Do NOT use when" trigger phrases, following the pattern from Hermes Agent's `memory_tool.py`. It also includes a new doc-test to guard against future description drift. This enhances tool discoverability and correct usage by agents or users.

## 4. Community Hot Topics
There is no active community discussion in issues or PRs today. The single open PR (#571) has zero comments and no reactions, indicating it has not yet drawn community attention. The lack of issues or PR comments suggests the project's user base is either satisfied, small, or not deeply engaged in public discussion at this time.

- [PR #571 — Trigger-phrase nudges in longterm_memory description](https://github.com/qhkm/zeptoclaw/pull/571) (last updated: 2026-05-09)

## 5. Bugs & Stability
No bugs, crashes, or regressions reported in the last 24 hours. The project appears stable with no active stability concerns.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. The only forward-looking signal is PR #571, which, if merged, would improve tool description quality. This is a small but valuable UX improvement that aligns with making tool usage more intuitive. No major roadmap signals are visible from the current data.

## 7. User Feedback Summary
No user feedback (praise, complaints, or use-case descriptions) was recorded in the last 24 hours. The silence could indicate user satisfaction or low community engagement. The PR #571's focus on explicit usage guidance suggests the maintainer is proactively improving documentation for real-world confusion scenarios.

## 8. Backlog Watch
No long-unanswered issues or PRs are currently open. The project's backlog is clean, with only one recent PR (#571) pending maintainer review or additional work. No items require urgent maintainer attention.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-10

## Today's Overview

Project activity remains high with 50 issues and 32 pull requests updated in the last 24 hours. The community continues to work toward the v0.7.6 and v0.8.0 milestones, with the largest effort being the **multi-agent runtime** (PR #6545) targeting v0.8.0. A cluster of high-severity fixes merged today addresses security gaps in shell approval, session key scoping, and S1 workflow-blocking bugs in OpenAI-compatible provider handling. Seven issues were closed and 12 PRs were merged, indicating a focused push to stabilize the codebase ahead of upcoming releases. No new releases were published today.

## Releases

**No new releases.** The latest published version remains **v0.7.5**. The Homebrew merge failure for v0.7.5 is noted in issue #6547.

---

## Project Progress

**12 PRs merged/closed today**, including several high-impact fixes:

| PR | Title | Type | Impact |
|----|-------|------|--------|
| #6546 | [fix(agent): suppress tool protocol when no tools are available](https://github.com/zeroclaw-labs/zeroclaw/pull/6546) | Bug fix | Reduces noise for small/local models |
| #6540 | [fix(build): route source web builds through cargo](https://github.com/zeroclaw-labs/zeroclaw/pull/6540) | Build system fix | Keeps generated API client in sync |
| #6542 | [docs(skills): add user-facing skills guide](https://github.com/zeroclaw-labs/zeroclaw/pull/6542) | Documentation | Operators have a single source for skill management |
| #6539 | [fix(runtime): require shell approval in direct sessions](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) | **Security fix** | Closes bypass of approval flow for `shell` in direct sessions |
| #6541 | [fix(channels): scope session key for channel tools](https://github.com/zeroclaw-labs/zeroclaw/pull/6541) | Bug fix | Fixes `sessions_current` tool in channel contexts |
| #6544 | [fix(runtime): omit native tool prompt catalog](https://github.com/zeroclaw-labs/zeroclaw/pull/6544) | Bug fix | Recovers prompt cleanup from a reverted PR |
| #6534 | [fix(sop): call reload() after SopEngine construction](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) | **Critical fix** | SOPs never ran at all; both call sites were missing `reload()` |
| #6533 | [fix(config): respect ZEROCLAW_CONFIG_DIR in path field defaults](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) | Bug fix | All seven path-field defaults now use the active profile |
| #6547 | [Feature]: homebrew merge fail (closed) | Release management | Triaged — Not a code bug |

**Key advancement:** The merged #6539 (shell approval) and #6541 (session key scoping) directly address two long-standing security/functionality gaps described in issues #6207 and #6030.

---

## Community Hot Topics

### Most Active Issues

1. **[#6378 — Discord Bot respond only in specific Discord channels](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** (5 comments)
   - **What:** Request for `allowed_channels` config for Discord, mirroring Matrix/Nextcloud Talk.
   - **Underlying need:** Enterprise/community Discord deployments need to restrict bot activity to dedicated channels. This is a consistent cross-channel parity request.

2. **[#6207 — WebSocket gateway path bypasses ApprovalManager (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)** (3 comments, resolved)
   - **What:** Supervised tool approvals never appeared in web UI via `/ws/chat`.
   - **Underlying need:** Users deploying the web dashboard need interactive tool approval to be usable. This was a **S1 (blocked)** severity issue. Fixed via #6539 and #6522 tracking.

3. **[#6530 — Build failure with matrix-sdk v0.16.0](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)** (3 comments, blocked)
   - **What:** Recursion limit overflow when building with `channel-matrix` feature.
   - **Underlying need:** Matrix channel users are blocked from building. Blocked status suggests dependency upstream issue.

4. **[#6558 — providers error](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)** (2 comments, open — NEW)
   - **What:** 405 Method Not Allowed when using custom DashScope (Qwen) endpoint.
   - **Underlying need:** Users integrating Chinese-language AI providers (Alibaba/Qwen) face non-obvious adapter issues.

5. **[#5863 — Document about skills wanted (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/5863)** (2 comments, resolved via #6542)
   - **What:** Community requested skills documentation. **Delivered today** via PR #6542.

### Most Active Pull Requests

- **[#6545 — Multi-agent runtime (v0.8.0)](https://github.com/zeroclaw-labs/zeroclaw/pull/6545)** — XL-sized, targets `integration/v0.8.0`. Lands full schema primitives, per-backend agents-table + agent_id migrations for SQLite/Postgres/Lucid. The single most significant architectural change in progress.
- **[#6553 — Restore broken SSE /logs stream](https://github.com/zeroclaw-labs/zeroclaw/pull/6553)** — Fixes a functionally broken `/logs` page (SSE opened but never delivered events).

---

## Bugs & Stability

### New Bugs Today (S0–S1 severity)

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers error (DashScope/Qwen — 405 Method Not Allowed) | **S0** (data loss/security risk) | Open, new today | None yet |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | Non-leading system messages sent to OpenAI-compatible providers | **S1** (workflow blocked) | Open, 0 comments | ✅ [#6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552) |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime command replies bypass Fluent localization | **S3** (minor) | Open, new today | ✅ [#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550) |

### Critical Fixes Merged Today

| Fix | Issue(s) | Before | After |
|-----|----------|--------|-------|
| [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) — shell approval | #6207 | Direct-session `shell` calls skipped approval flow | Requires non-interactive approval via client back-channel |
| [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) — SOP engine reload | (unreported) | No SOPs ever loaded or executed | SOPs now work as documented |
| [#6541](https://github.com/zeroclaw-labs/zeroclaw/pull/6541) — session key scoping | #6030 | Channel tools couldn't identify active session | `sessions_current` works in channels |
| [#6544](https://github.com/zeroclaw-labs/zeroclaw/pull/6544) — tool prompt cleanup | #4499 reverted | Native-tool prompt leak | Clean prompt for native-tool providers |
| [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) — config dir respect | #5605 | Path field defaults ignored `ZEROCLAW_CONFIG_DIR` | All seven path defaults use active profile |

### High-Severity Open Bugs Needing Fix

- **[#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)** — Context compression drops tool_calls entirely for OpenAI-compatible providers (MiniMax). **S1 (blocked)**. Fix PR #6362 open.
- **[#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309)** — `model_routing_config` action `upsert_agent` stomps `schema_version = 2` settings. **S2 (degraded)**. Needs maintainer.
- **[#6307](https://github.com/zeroclaw-labs/zeroclaw/issues/6307)** — Not in top issues but referenced: WebSocket approval protocol gap. Fixed via #6539/#6522.

---

## Feature Requests & Roadmap Signals

### Top User-Requested Features

| Request | Issue | Predicted Version | Rationale |
|---------|-------|-------------------|-----------|
| **Discord `allowed_channels` config** | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | v0.7.6 | Accepted, no-stale, follows existing `allowed_rooms` pattern |
| **Multi-agent runtime** | [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | **v0.8.0** | PR #6545 already landed on integration branch |
| **Web chat tool approval UI** | [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) | v0.7.6 | Backend is done (#6539 fixed), frontend needed |
| **ACP session restore** | [#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) | v0.7.6 | New enhancement, ACP v1 protocol gap |
| **Per-channel reply throttling** | [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | v0.7.6 | In-progress, accepted |
| **Cron `announce` final-only mode** | [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) | v0.7.6 | Accepted, clean enhancement |

### Roadmap Predictions

- **v0.7.6** is shaping up as a **stabilization + channel parity** release: Discord channel restrictions, per-channel throttling, ACP session restore, web approval UI, and localization fixes. The skills documentation (#5863) is already delivered (#6542).
- **v0.8.0** is confirmed as the **multi-agent runtime** release. PR #6545 (XL) plus the env-var grammar breaking change (#6523) are both on `integration/v0.8.0`.
- **First-class support for custom/OpenAI-compatible providers** (e.g., Kimi K2.5 — [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518)) has high user interest but no maintainer review yet; may miss v0.7.6.

---

## User Feedback Summary

### Pain Points

1. **Provider compatibility friction:** Users integrating non-OpenAI providers (MiniMax, DashScope/Qwen, Kimi, Gemini CLI) face cryptic errors — 405 method errors (#6558), tool call dropping (#6361), argument syntax crashes (#6520), and self-signed CA rejection (#6528). The community is asking for first-class provider support documentation (#6518).

2. **Multi-instance deployment confusion:** Hardcoded `~/.zeroclaw/` paths persist despite `ZEROCLAW_CONFIG_DIR` support (#5605). Fixed today in #6533, but this has been a source of data-loss risk for profile-based deployments.

3. **Heartbeat / observability gaps:** Matrix channel + heartbeat doesn't work (#6433). The SSE `/logs` stream was broken since initial build (#6553). Community needs production observability.

### Satisfaction Indicators

- **Skills documentation** was explicitly requested and **delivered same day** (#5863 → #6542). This quick turnaround signals good maintainer responsiveness.
- The **Homebrew merge failure** (#6547) was quickly triaged as not a code bug.
- **SOP engine** was completely non-functional since inception; the community had not reported it, suggesting low adoption. The fix (#6534) was merged same day as discovery.

### Use Cases

- **Enterprise Discord:** Need channel-restricted bots (#6378), web approval UI (#6522)
- **Multi-instance/team:** Need isolated workspaces, per-alias configuration (#6272)
- **Developer workflows:** Need ACP session restore for resumable interactions (#6543)
- **International users:** Need full localization — Chinese (zh-CN) users hit hardcoded English in channel commands (#6548)

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Reason |
|-------|-------|-----|--------|
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Session ownership model for destructive operations | 23 days | **Blocked**, needs maintainer review. Session keys not scoped per-agent — security risk. |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | Trust system CA for provider requests | 2 days | Needs maintainer review. Self-signed certificates break custom providers. |
| [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) | First-class support for OpenAI-compatible providers | 3 days | Needs maintainer review. High user interest. |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | Context compression drops tool_calls | 6 days | Needs maintainer review. S1 (blocked). Fix PR #6362 open. |
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager fails to load profiles at startup | 5 days | **S0** (data loss) severity. Windows-specific. |

### Stale/Blocked Items

- [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) — Matrix SDK v0.16.0 build failure (blocked on upstream dependency)
- [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) — Session ownership model (blocked, needs design discussion)
- [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Track 153 commits lost in bulk revert (in-progress audit, opened 16 days ago)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*