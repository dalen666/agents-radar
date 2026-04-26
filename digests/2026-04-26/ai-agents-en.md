# OpenClaw Ecosystem Digest 2026-04-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-26 09:06 UTC

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

Here is the OpenClaw project digest for 2026-04-26.

---

## OpenClaw Project Digest — 2026-04-26

### 1. Today's Overview

Activity is **extremely high**, with 500 issues and 500 PRs updated in the last 24 hours. This volume indicates a major release cycle (v2026.4.24) is being actively tested and stabilized, with multiple beta hotfixes rolling out. The community is deeply engaged, filing detailed bug reports and feature requests, particularly around plugin stability, memory management, and sub-agent workflows. The project is in a consolidation phase, addressing regressions introduced in the latest major version while pushing forward significant new platform integrations.

### 2. Releases

Six releases were issued today, all in the **v2026.4.24** line.

- **Latest Stable:** `v2026.4.24` - This major release features:
    - **Google Meet Participant Plugin:** Bundled plugin for personal Google auth, Chrome/Twilio realtime sessions, paired-node Chrome support, artifact/attendance exports, and recovery tooling for already-open Meet tabs.
    - **DeepSeek V4 Flash and V4 Pro:** Support for these new models is included (description cut off in source).
- **Beta Releases (v2026.4.24-beta.1 through beta.5):** These releases contain the same core updates as the stable release.
- **Notable Fix in Beta 2:** `v2026.4.24-beta.2` contains a critical fix for Windows users, resolving a packaged bundled-plugin runtime mirror issue that prevented shared package-root dependencies from being resolvable during npm updates. It also includes a compatibility layer to keep future bundled plugins disabled while older hosts perform an updater step from the previous week.

**Migration Note:** Users running RPM-based systems should pay close attention to the fix in `beta.2`, as it directly addresses a dependency resolution failure on updates.

### 3. Project Progress

The majority of merged/closed PRs today are focused on **stabilization**, **security hardening**, and **quality-of-life fixes**. Key areas of progress include:

- **Sub-Agent Delivery (#72030 - CLOSED):** A major fix was merged to provide a fallback for sub-agent completion delivery, ensuring completion text is sent to the original external route when the primary announce path fails.
- **Gateway Startup Latency (#68327 - OPEN):** A PR identifies and reduces gateway startup latency by approximately 36 seconds by fixing a root cause where plugin loading was triggered during secret runtime initialization.
- **Subclaw Command (#72050 - OPEN):** A new `subclaw` CLI command is proposed for creating independent, directory-scoped agents, enabling users to run multiple agent configurations from different project directories simultaneously.
- **Telegram Fixes:** Two PRs fix Telegram-specific issues: one ensures bot commands are registered for group scope (including topic threads), and another sends "fresh finals" for stale previews so users can see the actual duration of a long-running task.
- **Computer Plugin (#72076 - OPEN):** A new plugin is proposed for macOS desktop automation via the `cua-driver`, providing a `computer` tool to all agent harnesses.
- **Exec Approval Schema (#60073 - CLOSED):** Fixed a schema mismatch where the `source` field (`allow-always`) from the control UI was being rejected by AJV validation.

### 4. Community Hot Topics

The community's most intense discussions reveal major pain points and desired capabilities:

- **Docker/brew Issue (#14593 - OPEN, 26 comments, 17 👍):** The top-voted bug involves a failed skill install (`brew not installed`) on the official Docker Linux image. This blocks users from deploying skills in containerized environments.
- **Text Leakage (#25592 - OPEN, 22 comments):** A high-impact UX bug where internal agent text between tool calls (e.g., error handling, narration) leaks to the active messaging channel (Slack, iMessage). This represents a significant privacy and professionalism issue.
- **Session Snapshots (#13700 - OPEN, 5 comments):** Users want `/session save` and `/session load` commands to checkpoint and rollback context, enabling A/B testing and preventing loss of progress.
- **Sub-Agent Completion Routing (#27445 - OPEN, 7 comments, 4 👍):** The community strongly desires the ability to route sub-agent completion announcements back to the main agent as a trigger, rather than directly to the channel, enabling complex multi-step orchestration.

### 5. Bugs & Stability

**High Severity:**
- **Gateway RSS Regression (#70717 - CLOSED):** A critical memory regression on macOS ARM64 where the gateway's baseline RSS jumped from ~400MB to 700MB+ after upgrading to 2026.4.15. This was reported, discussed, and closed, likely with a fix.
- **Signal Daemon Race Condition (#22676 - OPEN, 12 comments):** A serious stability bug where `SIGUSR1` restarts create orphaned processes and port conflicts due to a lack of synchronization. This affects all users of the Signal plugin.

**Medium Severity:**
- **System.run.prepare Broken (#58356 - CLOSED):** A regression broke the exec tool via macOS paired nodes. Downgrading did not fix the issue, suggesting a persistent state/config change.
- **Gateway Auth Blocks Internal Services (#17761 - OPEN, 7 comments):** The `trusted-proxy` auth mode has no fallback for internal services, blocking all service-to-service communication if the proxy header is absent.
- **Subagent Completion Delivery Loss (#67777 - OPEN, 4 comments):** Sub-agent completion can be silently lost under busy-lane, timeout, drain, or restore conditions, leading to silent failures.

**Low Severity:**
- **Telegram Group Messages Not Received (#57738 - CLOSED):** A polling issue on macOS M4 where group messages were completely ignored.
- **MemoryFlush Not Reliable (#12590 - OPEN, 18 comments):** The memory flush hook fires inconsistently due to a logic error in its dedup counter.

### 6. Feature Requests & Roadmap Signals

The roadmap is clearly being driven by **enterprise security** and **developer workflow** needs.

- **Likely Next Version:**
    - **Masked Secrets (#10659 - OPEN, 11 comments, 4 👍):** A system where agents can *use* but not *see* API keys, preventing prompt injection leaks. This is the highest-voted feature request and aligns with the project's security focus.
    - **Exec Approval Improvements:** Multiple requests (#59510 - CLOSED, #6615 - OPEN) aim to simplify the approval flow by adding denylists and streamlining per-command approval.
- **Long-Term Candidates:**
    - **Pre-response Enforcement Hooks (#13583 - OPEN, 8 comments, 2 👍):** Mechanical "hard gates" that force a tool call before a final answer, crucial for high-stakes workflows.
    - **Post-subagent Completion Extension Hook (#22358 - OPEN, 10 comments):** Multiple users are requesting this hook for automated trajectory logging and retrospective analysis.
    - **Native Secrets Management (#13610 - OPEN, 6 comments, 1 👍) & Backup Utility (#13616 - OPEN, 7 comments):** Users are demanding proper infrastructure-level tools for secrets and disaster recovery.

### 7. User Feedback Summary

User sentiment is mixed. The project is **highly valued** for its power and extensibility, but there is significant **frustration with regressions and stability** in the latest releases.

**Pain Points:**
- **"The update broke my setup."** Users are encountering regressions in exec commands (#58356), memory consumption (#70717), and skill dispatch (#59228).
- **"I can't run it in Docker."** The `brew not installed` bug (#14593) blocks containerized deployments.
- **"Approval flow is tedious."** Users are actively requesting simplification of per-command approvals and the addition of denylists.

**Positive Use Cases & Requests:**
- **Google Meet Integration:** Users are excited about the new bundled plugin for meeting participation and artifact exports.
- **"I want to use it like a platform."** There is strong demand for isolated cron jobs (#26370), per-agent compaction (#60807), and directory-scoped agents (#72050), suggesting users are building complex multi-tenant systems.
- **"Make it beautiful."** The Theme Customization System request (#28300) indicates users want a better visual experience in the Control UI.

### 8. Backlog Watch

Several important issues and PRs are languishing and require maintainer attention:

- **PR #31407 - Docs (OPEN since 2026-03-02, 0 comments):** A low-signal docs PR adding a simple link. Its age suggests a lack of maintainer bandwidth for trivial updates.
- **Issue #8299 - Suppress Sub-Agent Announce (OPEN since 2026-02-03, 5 comments):** A core UX feature request that has been open for nearly three months. The inability to reliably suppress sub-agent announces is a persistent user headache.
- **Issue #13597 - AWS Deployment Guide (OPEN since 2026-02-10, 5 comments, 3 👍):** A request for official cloud deployment docs that has received positive community reaction but no maintainer response. This is a blocker for enterprise adoption.
- **Issue #19075 - Brave Search `baseUrl` (OPEN since 2026-02-17, 4 comments, 2 👍):** A small, well-understood feature request for self-hosted deployments that has been ignored for over two months.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Ecosystem Report: Personal AI Agent Open-Source Landscape
**Date:** 2026-04-26

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a surge in development velocity, characterized by aggressive feature expansion, a critical focus on multi-platform reliability, and a growing divide between projects optimizing for consumer ease-of-use versus enterprise-grade deployments. Activity is heavily concentrated around solving live production issues—such as memory leaks, provider API incompatibilities, and channel-specific failures—rather than purely theoretical advancements. A clear trend is the emergence of a "reference stack" (OpenClaw, Hermes Agent, IronClaw) that is driving architectural standardization, including schema-driven onboarding, structured tool calls, and sub-agent orchestration. Simultaneously, a second tier of projects (NanoBot, PicoClaw, CoPaw) is rapidly iterating to capture specific developer workflows and regional market demands, particularly in East Asia.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Release Today | Health Score | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | Very High | Yes (v2026.4.24) | **Stabilizing** | Major release cycle; high volume of regression bugs |
| **Hermes Agent** | 50 | 47 | 3 | No | **Rapid Iteration** | Very high feature velocity; responsive maintainers |
| **IronClaw** | 9 | 16 | 2 | No | **Active Development** | XL feature push; live canary failures signal risk |
| **NanoBot** | 6 | 25 | 12 | No | **Productive Merge** | High PR throughput; security-focused |
| **PicoClaw** | 8 | 13 | 5 | Yes (nightly) | **Healthy** | Balanced bug fixes and new features |
| **ZeroClaw** | 44 | 38 | 8 | No | **Active** | v0.7.4 in progress; strong community engagement |
| **CoPaw** | 9 | 13 | 3 | Yes (v1.1.4.post2) | **High Activity** | Strong community contributions; bugs outpacing fixes |
| **NanoClaw** | 3 | 21 | 5 | No | **Robust** | Focus on setup reliability and skill additions |
| **Moltis** | 2 | 9 | 3 | No | **Moderate** | Good maintainer responsiveness |
| **LobsterAI** | 4 | 7 | 6 | No | **Stabilizing** | Internal sprint; stale backlog concerns |
| **NullClaw** | 2 | 1 | 1 | No | **Low-Moderate** | Two critical bugs filed today |
| **TinyClaw** | 0 | 0 | 0 | None | **Inactive** | No activity in 24h |
| **ZeptoClaw** | 0 | 0 | 0 | None | **Inactive** | No activity in 24h |

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of Deployment:** OpenClaw is the ecosystem's core reference, handling the highest volume of issues and PRs (500 each) as the most widely deployed agent. This provides the largest real-world testing surface.
- **Platform Integration:** The bundled Google Meet Participant Plugin and new DeepSeek V4 support demonstrate first-class integration with major productivity and AI platforms, a feature set few peers match.
- **Sub-Agent Orchestration:** It is pioneering complex multi-agent workflows with features like sub-agent completion routing and the `subclaw` CLI command, setting a standard for agent-to-agent communication.

**Technical Approach Differences:**
- OpenClaw adopts a **singular, heavy core** architecture compared to NanoBot’s modular "plugin" approach. This allows for tighter integration but results in higher regression risk during major upgrades, as evidenced by the v2026.4.24 release's memory regression (#70717) and exec tool breakage (#58356).
- It relies on a **centralized plugin runtime** with npm-based updates for bundled plugins, which introduced a critical Windows dependency resolution issue (beta.2), contrasting with IronClaw’s more isolated WASM channel model.

**Community Size Comparison:**
- With 500 daily issues, OpenClaw’s community is an order of magnitude larger than any other project. This creates both a richer feedback loop and a higher noise-to-signal ratio. While Hermes Agent and ZeroClaw have active communities, none approach OpenClaw's engagement volume.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide priorities:

| Requirement | Projects Involved | Specific Needs |
| :--- | :--- | :--- |
| **Provider Resilience & Failover** | NanoBot (#3376), IronClaw (#2946), PicoClaw (#295), ZeroClaw (#5815) | Automatic failover on provider errors, persistent LLM backend config, intelligent model routing for cost optimization. |
| **Multi-Agent & Sub-Agent Orchestration** | OpenClaw (#72030, #72050), ZeroClaw (#5890/#5891) | Sub-agent completion routing to main agent, directory-scoped agents, per-sender RBAC for multi-tenant deployments. |
| **Advanced Memory & Context Management** | OpenClaw (#13700), Hermes Agent (#10355), Moltis (#826) | Session snapshots/checkpoints, governed cross-session memory, compaction with auxiliary providers. |
| **Web UI & Onboarding Stability** | ZeroClaw (#4866, #5847), CoPaw (#3824), Hermes Agent (#15865) | Reliable web dashboard extraction, persistent configuration across page refreshes, Docker permission fix. |
| **Enterprise Security & Approval Flows** | OpenClaw (#10659), NanoBot (#1722), IronClaw (#2962) | Masked secrets, human-in-the-loop approval, pre-response enforcement hooks, cryptographic audit trails. |
| **Channel-Specific Reliability** | OpenClaw (#22676), NanoBot (#3435), Hermes Agent (#13248), CoPaw (#3837) | Fixes for Telegram, WeChat, Slack, Signal, and Feishu channels. |
| **Local/Hardware Support** | NullClaw (#871), PicoClaw (#2675), ZeroClaw (#5905) | Support for low-resource devices (Raspberry Pi), zero-config search providers, Docker on ARM. |

### 5. Differentiation Analysis

| Feature Focus | Target Users | Technical Architecture |
| :--- | :--- | :--- |
| **OpenClaw** | Expert developers, core integrators | Monolithic core, bundled plugin runtime, high stability requirements |
| **Hermes Agent** | Advanced users, multi-platform deployers | Modular, CLI/TUI-focused, provider diversity (many API backends) |
| **NanoBot** | Developers, enterprise users | Security-centric (Shell injection, SSRF), multi-channel, "platform" approach |
| **PicoClaw** | Hardware enthusiasts, edge/IoT | Lightweight, cross-platform (serial tools), nightly releases |
| **IronClaw** | Enterprise, regulated industries | Heavy focus on MCP, RBAC, secret management, cryptographic audit |
| **ZeroClaw** | Self-hosters, tinkerers | Minimal binary (5.1 MB), schema-driven config, strong i18n (Mozilla Fluent) |
| **CoPaw** | Chinese market, social channel users | Deep QQ/WeChat integration, GUI-centric (Tauri), rapid community contributions |
| **NanoClaw** | Developers, first-time users | Easy setup (web channel), practical skills (Whisper, YNAB) |
| **Moltis** | Rust ecosystem users | Rust-native, browser-backend (Obscura), chat compaction |

**Key Differentiators:**
- **China-First:** CoPaw and, to a lesser extent, NanoBot (Feishu, WeCom) are heavily optimized for Chinese enterprise communication platforms, while most Western projects prioritize Slack, Discord, and Telegram.
- **Security Overhead:** IronClaw and NanoBot are investing heavily in pre-emptive security (audit trails, injection prevention), while OpenClaw and Hermes are more reactive.
- **Rust vs. JS/Python:** ZeroClaw and Moltis are leading the move to Rust for performance and safety, while OpenClaw, Hermes, and NanoBot remain on JavaScript/TypeScript ecosystems.

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating / High Risk & Reward**
- **Hermes Agent** (50 issues, 47 PRs): Extremely high development velocity with a clear focus on feature completeness. The risk is feature bloat and test coverage gaps, evidenced by the number of P1 bugs without fix PRs.
- **OpenClaw** (500 issues, 500 PRs): The highest volume, but in a consolidation phase. Its health is dependent on how quickly its regression bugs are resolved.
- **IronClaw** (9 issues, 16 PRs): Processing its largest-ever batch of XL features. Health is good, but live canary failures suggest CI/CD fragility.

**Tier 2: Healthy & Productive**
- **ZeroClaw** (44 issues, 38 PRs): Strong momentum towards v0.7.4 with structured RFCs and community input. The major onboarding rewrite is a positive signal.
- **NanoBot** (6 issues, 25 PRs): High PR throughput with a focus on security hardening. The backlog of security PRs needs attention, but the project is clearly valued.
- **CoPaw** (9 issues, 13 PRs): High community engagement from first-time contributors. The biggest risk is the gap between bugs filed and bugs fixed.

**Tier 3: Stabilizing / Slower Cadence**
- **Moltis** (2 issues, 9 PRs): Steady, low-risk improvements focused on UX and stability. Good for existing users but may not attract new contributors.
- **LobsterAI** (4 issues, 7 PRs): An internal sprint/refactor phase. The stale backlog is the primary risk.

**Tier 4: Low Activity / Inactive**
- **NullClaw**, **TinyClaw**, **ZeptoClaw**: These projects show little to no activity. While NullClaw has a few functional users, they are not competitive for feature parity or community support.

### 7. Trend Signals

1.  **From Single-Agent to Multi-Agent Platforms:** The strongest signal across the ecosystem is the shift from a single agent to an orchestrated system. OpenClaw (`subclaw`), ZeroClaw (Multi-Agent Tracker), and Hermes (sub-agent completion) are all building for agent-to-agent delegation, directory-scoped agents, and sub-task management. For developers, this means the next wave of value will come from **agent networking and discovery tools**, not just individual agent intelligence.

2.  **The "Moat" is Provider Diversity:** Users are not loyal to a single LLM provider (OpenAI vs. Anthropic vs. DeepSeek). They are demanding **seamless multi-provider setups with automatic failover**. The projects that solve this—NanoBot, IronClaw, ZeroClaw—are seeing the highest engagement. This is a direct response to the commoditization of frontier models.

3.  **Pain Point: Configuration Instability:** Users across all projects express deep frustration with configuration loss (CoPaw #3824, OpenClaw #58356, IronClaw #2946). The signal is clear: **configuration must be persistent, schema-validated, and versioned**. This is a fundamental UX requirement for becoming a daily-driver tool.

4.  **Enterprise Security is Catching Up to Consumer Features:** Features like masked secrets (OpenClaw), human-in-the-loop approval (NanoBot), and cryptographic audit trails (IronClaw) are moving from "nice-to-have" to "required" for any serious deployment. Developers building for enterprises should prioritize these capabilities.

5.  **Regionalization of Features:** There is a clear bifurcation between Western-focused channel support (Slack, Discord, Telegram) and Chinese-focused support (WeChat, Feishu, QQ, XiaoYi). For global projects, this creates a **complex multi-channel management challenge**. For developers, investing in one region's platform can yield high user satisfaction but limits market reach.

6.  **Free and Zero-Config Search is a Hard Requirement:** A critical bug in NullClaw (#871) and a merged fix in IronClaw (#815) both highlight the demand for **DuckDuckGo or other free search backends** (SearXNG, Brave Search). Paid API keys are a barrier to entry for self-hosters and tinkerers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-26

## 1. Today's Overview

The NanoBot project remains highly active with **6 open issues** (no closures) and **25 PRs** updated in the last 24 hours — a notably high PR velocity. Of those PRs, **12 were merged or closed**, reflecting a productive merge cycle. No new releases were published today, but the breadth of merged work across security, channel integrations, and tooling suggests a release may be imminent. The community is engaging constructively around provider failover, session-level focus, and channel-specific configuration.

## 2. Releases

No new releases were published today.

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours, representing meaningful advances:

- **Feishu Thread-Scoped Sessions ([#3449](https://github.com/HKUDS/nanobot/pull/3449), [#3176](https://github.com/HKUDS/nanobot/pull/3176))**: Both `PR #3449` (new) and `PR #3176` (older) were merged, adding thread-scoped session isolation, `reply_in_thread`, and non-blocking reactions to the Feishu channel. This is a significant UX improvement for group chats.

- **Teams Threaded Replies ([#3447](https://github.com/HKUDS/nanobot/pull/3447))**: Fixed Microsoft Teams threaded replies by using `replyToId` and pruning stale conversation references — closing a long-standing issue with Teams group replies.

- **Office Document Support ([#3336](https://github.com/HKUDS/nanobot/pull/3336))**: The `read_file` tool now supports DOCX, XLSX, and PPTX files via existing utility code — a practical feature for enterprise users.

- **Human-in-the-Loop Approval ([#1722](https://github.com/HKUDS/nanobot/pull/1722))**: After a long review cycle, this PR introducing an approval mechanism for shell commands was finally merged, adding a safety layer for potentially destructive operations.

- **Spawn Status/Cancel Tools & Domain Loop Detection ([#3303](https://github.com/HKUDS/nanobot/pull/3303))**: Merged, adding `spawn_status`/`spawn_cancel` tools and domain loop detection for `web_fetch`, as well as subagent timeout cleanup.

- **Chinese README ([#2345](https://github.com/HKUDS/nanobot/pull/2345))**: A high-quality Chinese translation of the README was merged, welcoming more Chinese-speaking contributors.

## 4. Community Hot Topics

- **Provider/Model Failover ([#3376](https://github.com/HKUDS/nanobot/issues/3376))**: The most commented issue (8 comments, 1 👍). Users want automatic failover between configured providers/models when one errors (429, 5xx, timeout). Currently, nanobot only retries within the same provider. This reflects growing sophistication in multi-provider deployments and a need for production-grade resilience.

- **Session-Level Focus Tool ([#3292](https://github.com/HKUDS/nanobot/issues/3292))**: A well-articulated feature request for persistent task awareness across interruptions. The user describes a "mental task board" pattern — the agent should anchor attention on a primary goal even when sidetracked. This suggests desire for more human-like conversational continuity.

- **WeCom Media Upload Failure ([#3435](https://github.com/HKUDS/nanobot/issues/3435))**: A bug report about WeCom (WeChat Work) channel failing to send media files (images) — returns `[file upload failed: xxxxxx]`. This affects a key Chinese enterprise messaging platform.

- **Call External Agent ([#3436](https://github.com/HKUDS/nanobot/issues/3436))**: A user asks whether NanoBot can delegate work to external frameworks like OpenCode or Codex instead of using its own internal agent. This hints at interest in modular, pluggable agent backends.

## 5. Bugs & Stability

| Issue | Severity | Description | Fix Available? |
|-------|----------|-------------|----------------|
| [#3435](https://github.com/HKUDS/nanobot/issues/3435) | **High** | WeCom channel: media file upload fails entirely, breaking rich media responses | No |
| [#3443](https://github.com/HKUDS/nanobot/issues/3443) | **High** | Non-streaming path leaks `reasoning` field (chain-of-thought) into user-visible content — models' internal thinking shown to users | Yes — [#3445](https://github.com/HKUDS/nanobot/pull/3445) open |
| [#3444](https://github.com/HKUDS/nanobot/pull/3444) | **Medium** | HTTP keepalive causes failures with local model servers (Ollama, vLLM) due to idle connection reuse; second call after heartbeat fails | Merged |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) | **Medium** | DeepSeek request failures from non-string `content` payloads; session file unbounded growth risk | Open |
| [#3391](https://github.com/HKUDS/nanobot/pull/3391) | **Medium** | Heartbeat-delivered messages bypass session thread, causing reply continuity issues | Open |

**Key observation**: The reasoning-content leak (#3443) is a **user-facing data exposure bug** that could confuse or surprise users. A fix PR (#3445) exists but remains open.

## 6. Feature Requests & Roadmap Signals

- **Provider Failover ([#3376](https://github.com/HKUDS/nanobot/issues/3376))**: Likely to be prioritized given its high engagement and alignment with multi-provider deployments. This is a natural evolution for production users.

- **Session-Level Focus / Task Board ([#3292](https://github.com/HKUDS/nanobot/issues/3292))**: While ambitious and complex, this signals user demand for better long-running task management. May not land immediately but could inform future architecture.

- **Channel-Specific `sendProgress` / `sendToolHints` ([#3452](https://github.com/HKUDS/nanobot/issues/3452))**: A smaller, more achievable request to allow per-channel configuration of progress indicators. Likely to be accepted as a forward step.

- **Call External Agent ([#3436](https://github.com/HKUDS/nanobot/issues/3436))**: Low probability of immediate inclusion, but points to interest in agent interoperability.

- **MGP (Memory Governance Protocol) Integration ([#3408](https://github.com/HKUDS/nanobot/pull/3408))**: An open PR adding opt-in governed cross-session memory — a longer-term architectural enhancement that may appear in the next release.

- **Prefer-Free OpenRouter Models ([#3416](https://github.com/HKUDS/nanobot/pull/3416))**: A small but welcome UX improvement for cost-conscious users.

**Prediction for next release**: Provider failover attention, channel-specific settings, and the MGP integration are the most likely additions. The reasoning-content leak (#3443) will almost certainly be fixed.

## 7. User Feedback Summary

**Pain Points:**
- **Single-point-of-failure**: Users with multiple providers cannot rely on automatic failover — a single provider outage halts tasks
- **Session continuity broken**: Heartbeat messages don't participate in thread context, causing confusing reply chains
- **Channel media limitations**: WeCom media uploads fail entirely; Teams threading had issues (now fixed)
- **Global knobs**: `sendProgress` and `sendToolHints` cannot be tuned per-channel, forcing one-size-fits-all behavior
- **Reasoning content leaked**: Users or downstream systems see raw chain-of-thought in non-streaming responses

**Use Cases:**
- **Enterprise multi-provider deployments** — users running across OpenAI, OpenRouter, local models simultaneously
- **Chinese enterprise communication** — WeCom and Feishu users active, with WeCom media upload being a blocker
- **Long-running agent tasks** — need for session-level focus and task board to manage interruptions
- **Multi-platform deployments** — users want per-channel tuning of behavior like progress indicators

**Satisfaction Signals:**
- The Feishu thread-scoped session PRs were merged quickly, showing responsiveness to Chinese enterprise users
- Office document support and human-in-the-loop approval were merged after longer review cycles, indicating thorough quality assurance
- Security PRs around Shell injection, SSRF detection, and file system hardening (#3366, #3252, #3255) remain open, suggesting maintainers are carefully considering security implications before merging

## 8. Backlog Watch

- **Shell Injection Vulnerability Fix ([#3366](https://github.com/HKUDS/nanobot/pull/3366))**: Open since April 21. Addresses a real vulnerability where path_append can enable arbitrary command execution via shell metacharacters. **Needs maintainer attention** — this is a security issue that should not linger.

- **SSRF Detection Enhancement ([#3252](https://github.com/HKUDS/nanobot/pull/3252))**: Open since April 17. Non-HTTP schemes (file://, gopher://, etc.) can bypass internal URL detection. **Moderate severity** — enables local file reads but requires crafted commands.

- **Filesystem Layer Enforcement for History/Cursor ([#3255](https://github.com/HKUDS/nanobot/pull/3255))**: Open since April 17. Proposes replacing regex-based guards with filesystem-layer enforcement to prevent `history.jsonl` / `.dream_cursor` tampering. **Architecturally important** — regex-based protection is fundamentally brittle.

- **MGP Sidecar for Cross-Session Memory ([#3408](https://github.com/HKUDS/nanobot/pull/3408))**: Open since April 23. Opt-in integration with external memory governance protocol. Not urgent but directionally important — has been silent for 3 days.

- **Session Replay Token Budgeting ([#3427](https://github.com/HKUDS/nanobot/pull/3427))**: Open since April 24. Fixes DeepSeek content issues and session file unbounded growth. **Production-critical for DeepSeek users** but moving quickly.

---

*Generated from NanoBot GitHub data on 2026-04-26. Data snapshot: 6 open issues, 25 PRs updated, 0 releases.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-26

## Today's Overview

Hermes Agent shows extremely high development velocity today, with 50 open issues and 47 open PRs updated in the last 24 hours — an unusually high activity level indicating a major push toward stability and feature completeness. No new releases were cut today, suggesting the maintainers are consolidating pull requests rather than shipping. The three merged PRs addressed import path errors, clipboard functionality, and JSON search backend support, indicating focused quality-of-life improvements. Overall, project health appears robust with rapid community engagement and responsive maintainer activity across multiple subsystems (CLI, TUI, gateways, tools, providers).

---

## Releases

No new releases were published today (2026-04-26). The last known tagged release is `v0.9.0` (referenced in issue #10229).

---

## Project Progress

Three PRs were merged/closed today:

- **#15965** — `fix(tui): correct import path for unified_search in skills search` — Fixed an `ImportError` in TUI gateway where `unified_search` was imported from `hermes_cli.skills_hub` instead of `tools.skills_hub`, breaking `/skills search` in TUI mode. (merged by xueron)
- **#15955** — JSON search backend support (details sparse; likely related to feature request #10284)
- **#15954** — Additional merged PR (details not provided)

Notable open PRs advancing key features:
- **#15967** — `feat(skills): add local skill scaffold creation command` — Adds `hermes skills create` subcommand and `/skills create` routing
- **#15968** — `feat(budgeting): short-term turn compression via summarize_turns()` — Introduces turn-count-based compression for long sessions
- **#15970** — `feat(intent): content-production intent for Baumbad workflow` — Adds German/English content-production intent detection with specialist routing
- **#15945** — `feat(skills): add OneDrive productivity integration` — Microsoft Graph API-based OneDrive file management skill

---

## Community Hot Topics

### Most Active Issues

1. **#10232** — *"Genuine Question: Did We Just Witness the World's Most Sophisticated 'Ctrl+C, Ctrl+V'?"* — **12 👍, 3 comments**  
   *Link: https://github.com/NousResearch/hermes-agent/issues/10232*  
   A controversial accusation that parts of Hermes's self-evolving architecture mirror EvoMap's Evolver engine. This is the most-reacted issue today, signaling community concern about code provenance and originality.

2. **#5709** — *"Responses API paths should never replay tool messages with role=tool"* — **5 comments, P1**  
   *Link: https://github.com/NousResearch/hermes-agent/issues/5709*  
   High-severity OpenAI Responses API compatibility bug where history replay sends deprecated `role=tool` messages. Active since April 7 with continued community engagement.

3. **#15717** — *"DeepSeek API 400 error: 'reasoning_content' in thinking mode must be passed back"* — **5 comments, 1 👍, P2**  
   *Link: https://github.com/NousResearch/hermes-agent/issues/15717*  
   DeepSeek thinking-mode integration bug causing HTTP 400 errors. Community reporting recently (April 25) with high relevance as DeepSeek adoption grows.

4. **#15551** — *"Custom Endpoints Don't Execute Commands"* — **5 comments, P2**  
   *Link: https://github.com/NousResearch/hermes-agent/issues/15551*  
   Custom API endpoints bypass tool/command execution, limiting extensibility for non-native providers.

5. **#15865** — *"Permission issue with docker image v2026.4.23"* — **4 comments, P1**  
   *Link: https://github.com/NousResearch/hermes-agent/issues/15865*  
   Docker regression breaking startup for existing users — high urgency as it prevents container upgrades.

### Underlying Needs

The community is heavily invested in **provider diversity** (DeepSeek, custom endpoints, MiniMax) and **multi-platform stability** (Feishu, Slack, Telegram). The popularity of #10232 suggests a **transparency and IP concern** that maintainers should address publicly. The Docker regression (#15865) indicates a **testing gap for containerized deployments**.

---

## Bugs & Stability

### High Severity (P1)

| Issue | Description | Has Fix PR? |
|-------|-------------|-------------|
| **#15865** | Docker image v2026.4.23: `chown: changing ownership of '/opt/data/config.yaml': Operation not permitted` — breaks startup after pull | Not yet |
| **#13248** | Claude Opus 4.5 in Slack group threads: empty-response retry loop when bot is not @-mentioned | Not yet |
| **#10229** | Browser tool name repeated concatenation causes invocation failure (Hermes v0.9.0) | Not yet |
| **#5709** | Responses API paths send `role=tool` messages rejected by OpenAI | Not yet |
| **#15932** | API keys in `~/.hermes/.env` not resolved by `credential_pool._seed_from_env` | Not yet |
| **#15914** | Fallback chain collapses when API key in credential_pool but not os.environ | Not yet |

### Medium Severity (P2)

| Issue | Description | Has Fix PR? |
|-------|-------------|-------------|
| **#15717** | DeepSeek thinking mode: HTTP 400 due to missing `reasoning_content` passthrough | Not yet |
| **#15551** | Custom endpoints don't execute commands/tools | Not yet |
| **#10251** | Feishu approval card buttons fail with error code 200340 | Not yet |
| **#10373** | `/resume` reopens stale compression parents instead of newest continuation | Not yet |
| **#15715** | MiniMax VLM uses wrong API endpoint | PR #15964 fixes MiniMax TTS (similar endpoint issue) |
| **#15927** | Slack: fails to send message to different channel | PR #15947 (open, fix in progress) |
| **#15916** | Auxiliary memory flush sends unsupported `temperature` to ChatGPT Codex backend | Not yet |
| **#15886** | Long document writes (>5KB) trigger "Stream stalled mid tool-call" errors | Not yet |
| **#15952** | `browser-cdp check_fn` unnecessarily requires `agent-browser` CLI | Not yet |
| **#10225** | `load_cli_config()` overwrites gateway's `TERMINAL_CWD` from `MESSAGING_CWD` | PR #10226 (open, fix available) |

### Low Severity (P3)

| Issue | Description | Has Fix PR? |
|-------|-------------|-------------|
| **#15895** | Google Gemini CLI causing HTTP 429 despite sufficient quotas | Not yet |
| **#15915** | Dashboard sidebar navigation refreshes page and loses chat state | Not yet |
| **#6576** | Azure OpenAI content filters block requests due to bracketed meta-instructions | Not yet |

### New Bug Reports Today (2026-04-26)

- **#15952** — browser-cdp excessive dependency requirement (P2)
- **#15932** — credential_pool env file resolution (P1)
- **#15927** — Slack cross-channel messaging failure (P2)
- **#15916** — Codex backend unsupported temperature (P2)
- **#15914** — Fallback chain collapse (P1)
- **#15895** — Gemini CLI 429 errors (P3)
- **#15886** — Long document write stalls (P2)
- **#15876** — Desktop computer-use module proposal (feature, P3)

---

## Feature Requests & Roadmap Signals

### Requested Features (with strong community support)

1. **DeepSeek V4 native support** (#15936, P3) — Growing demand for `deepseek-v4-pro` and `deepseek-v4-flash` integration. **Prediction: likely in next release** given the active bug reports (#15717) and community enthusiasm.

2. **Custom JSON search backend** (#10284, P3) — User-defined web search endpoints beyond built-in providers. PR #15955 (merged) suggests this may already be shipping.

3. **Cascading context file discovery** (#10299, P3) — Walking parent directories for `AGENTS.md`, `CLAUDE.md`, `.cursorrules`. Moderate implementation complexity; **possible for v0.10**.

4. **Living System Architecture** (#10354, P3) + **Living Memory System** (#10355, P3) — Self-evolution, vector embeddings, metacognition. Ambitious, long-term roadmap signals; **unlikely in immediate next release**.

5. **Feishu ecosystem deep integration** (#10356, P3) — Documents, Sheets, Bitable, Calendar, Tasks. Niche but valuable for Chinese enterprise users.

6. **NixOS declarative plugin installation** (#14453, P3) — PR #15953 (open today) directly addresses this. **High likelihood of landing soon.**

7. **Per-job toolset scoping for cron** (#10280, P3) — Limiting cron job toolsets and tracking creator user_id. Useful for multi-tenant deployments.

8. **Desktop computer-use module** (#15876, P3) — noVNC + screenshot + mouse/keyboard control. Submitted by community contributor with ready PR.

---

## User Feedback Summary

### Pain Points

- **Docker regressions** (#15865): Users relying on containers hit blocking permission errors after upgrade — urgent fix needed
- **Provider compatibility gaps**: DeepSeek thinking mode (#15717), MiniMax vision/TTS (#15715, #15964), custom endpoints (#15551) — the "long tail" of provider support is causing friction
- **Multi-platform messaging bugs**: Slack cross-channel (#15927), Feishu card approval (#10251), Telegram link resolution (#10203) — gateway stability remains inconsistent
- **Long session instability**: Document writes timing out (#15886), compression continuation navigation (#10373), TUI scrolling (#15926) — heavy users are hitting edge cases
- **IP/originality concerns**: The EvoMap allegation (#10232) with 12 👍 suggests at least a vocal minority questions code provenance

### Satisfaction Signals

- **High community engagement**: 50 issues and 50 PRs updated in one day indicates active, healthy contributor community
- **Feature contributions**: Community members submitting polished PRs for OneDrive skills (#15945), desktop computer-use (#15876), and NixOS support (#15953)
- **Rapid bug detection**: Users systematically reporting and reproducing edge cases across diverse platforms

### Use Cases Driving Demand

- **Multi-platform enterprise deployment** (Slack, Feishu, Telegram with cron scheduling)
- **Content production workflows** (PR #15970 suggests German/English content pipeline integration)
- **Developer tooling** (local skill scaffolding, cascading context files, TUI improvements)
- **Chinese market users** (Feishu integration, DeepSeek V4 support, Chinese-language issues)

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| **#5709** — Responses API paths tool message replay (P1) | 19 days | Blocks OpenAI Responses API compatibility; high severity but no fix PR yet |
| **#6576** — Azure OpenAI content filter blocks (P3) | 17 days | Enterprise-critical; Azure customers may abandon Hermes |
| **#10232** — Code provenance allegation (P3) | 11 days | 12 👍, community trust issue — maintainers should issue a statement |
| **#10229** — Browser tool name concatenation (P1) | 11 days | Blocks browser automation; referenced as v0.9.0 issue |
| **#13248** — Slack retry loop on Claude Opus (P1) | 5 days | Bad user experience on Slack; no PR in progress |

### PRs Needing Review

| PR | Days Open | Impact |
|----|-----------|--------|
| **#10203** — Telegram private link resolution | 11 days | Unblocks Telegram gateway functionality |
| **#10207** — Tool fixes and perf improvements | 11 days | Broad tooling stability (file ops, approval patterns) |
| **#10208** — PlatformConfig webhook port mapping | 11 days | Config drop bug for webhook platform users |
| **#10226** — `TERMINAL_CWD` fix (fixes #10225) | 11 days | Gateway config corruption; PR ready to merge |
| **#10227** — Cron reminder delivery fix (P1) | 11 days | Blocks cron functionality from messaging platforms |
| **#10215** — `/resume` bracket stripping | 11 days | Usability improvement for CLI users |

### Notable Absence

No maintainer responses were visible on the top-voted issue #10232 (provenance allegation) — a potential risk for community trust if left unaddressed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-26

## Today's Overview
PicoClaw shows strong development velocity with **8 issues updated** (6 active) and **13 PRs updated** (8 open) in the last 24 hours, alongside a **nightly release** (v0.2.7-nightly). Activity spans critical bug fixes, significant feature work (structured tool calls, cross-agent delegation), and growing community engagement around hardware support and new providers. The project maintains a healthy balance of bug squashing and forward-looking enhancements, though several long-standing roadmap items remain in progress.

## Releases
- **v0.2.7-nightly.20260426.77be169d** (Nightly Build)
  - Automated build from `main`; may be unstable.
  - **Full Changelog**: [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
  - No official v0.2.7 stable release yet; nightly serves as bleeding-edge preview.

## Project Progress
**Merged/closed PRs today: 5**
- [#2654](https://github.com/sipeed/picoclaw/pull/2654) — **fix(launcher):** Hide Windows child-process console flashes (merged).
- [#2661](https://github.com/sipeed/picoclaw/pull/2661) — **feat:** Add thought visibility toggle in chat UI (merged).
- [#326](https://github.com/sipeed/picoclaw/pull/326) — **CI:** Add PR concurrency to reduce redundant runs (merged).
- [#2570](https://github.com/sipeed/picoclaw/pull/2570) — **feat(seahorse):** Make fresh tail size configurable (merged).
- [#2498](https://github.com/sipeed/picoclaw/pull/2498) — **fix(agent):** Preserve multiple armed `/use` skills (merged).

**Key advances:** Structured tool call support for web chat ([#2672](https://github.com/sipeed/picoclaw/pull/2672)) was opened; cross-platform serial tool support ([#2673](https://github.com/sipeed/picoclaw/pull/2673)) was opened; delegate tool for cross-agent task handoff ([#2531](https://github.com/sipeed/picoclaw/pull/2531)) remains open but actively updated.

## Community Hot Topics
1. **Intelligent Model Routing** ([#295](https://github.com/sipeed/picoclaw/issues/295)) — 10 comments, open since Feb 2026. The highest-discussed issue proposes routing requests to cheaper models for simple tasks. Community clearly wants cost optimization; this is a major roadmap feature.
2. **OpenRouter free model bug** ([#1790](https://github.com/sipeed/picoclaw/issues/1790)) — 6 comments, now closed. A provider-specific bug where `minimax-m2.5:free` was rejected. Fix was apparently applied.
3. **`exec` tool guardCommand issue** ([#1042](https://github.com/sipeed/picoclaw/issues/1042)) — 5 comments, still open. A workspace safety guard falsely blocks legitimate commands like `curl wttr.in/Beijing`. Community flagged a real false-positive problem.

## Bugs & Stability

| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| **High** | [#2600](https://github.com/sipeed/picoclaw/issues/2600) *(closed)* | MCP calls send `null` arguments when all params are optional — violates spec | Closed, likely fixed |
| **Medium** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) *(open)* | Codex OAuth provider returns empty assistant responses, even when model sends content | No fix PR yet |
| **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) *(open)* | `exec` tool `guardCommand` blocks valid commands (false positive on curl) | No fix PR yet |
| **Low** | [#1790](https://github.com/sipeed/picoclaw/issues/1790) *(closed)* | OpenRouter free model ID not valid | Closed as fixed |

**Notable:** Two new bug-related PRs were opened: [#2669](https://github.com/sipeed/picoclaw/pull/2669) adds network error retry with configurable backoff (preventing transient failures from killing agent requests), and [#2670](https://github.com/sipeed/picoclaw/pull/2670) fixes HTML-escaping of `&&` in tool feedback display.

## Feature Requests & Roadmap Signals
1. **Exa search provider** ([#2676](https://github.com/sipeed/picoclaw/issues/2676)) — User requests adding Exa as a search provider, referencing a previously closed PR (#997). Likely to be revisited.
2. **Raspberry Pi support** ([#2675](https://github.com/sipeed/picoclaw/issues/2675)) — New request for installation/runtime support on Raspberry Pi and Pi Zero 2W. Signals growing edge/IoT interest.
3. **OpenCode provider** ([#2671](https://github.com/sipeed/picoclaw/issues/2671)) — User wants support for OpenCode’s `zen` and `go` subscription models in provider list.
4. **Model Routing** (#295) — Long-standing roadmap feature. No PR yet, but high community engagement suggests maintainers may prioritize it for v0.3.0.
5. **Cross-platform serial tool** ([#2673](https://github.com/sipeed/picoclaw/pull/2673)) — New PR adding hardware serial support for Linux, macOS, Windows. Could land in nightly soon.

**Prediction for next version:** Structured tool calls in web chat (PR #2672), thought visibility toggle (PR #2661), and serial tool support are likely to be in v0.2.8.

## User Feedback Summary
- **Pain points:** MCP null arguments (fixed), Windows console flash (fixed), OpenRouter free model not working (fixed), false-positive safety guard in `exec` tool (still open).
- **Use cases:** Cost optimization (model routing), hardware/IoT (Raspberry Pi, serial), search provider diversity (Exa).
- **Satisfaction:** Quick turnaround on Windows UX regression and skill-preservation fixes indicates responsive maintenance.
- **Dissatisfaction:** No update on long-open issues like #1042 (guardCommand) and #295 (model routing roadmap).

## Backlog Watch
1. **[#295](https://github.com/sipeed/picoclaw/issues/295) — Intelligent Model Routing** (Opened Feb 2026, 10 comments) — Major roadmap feature with no PR. Community likely expects progress soon; risk of stagnation.
2. **[#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` tool guardCommand false positive** (Opened Mar 2026, 5 comments) — Medium severity bug blocking legitimate tool use. No maintainer comment or fix PR yet.
3. **[#1780](https://github.com/sipeed/picoclaw/pull/1780) — QQ channel stability** (Opened Mar 2026, open PR) — Large config enhancement for Chinese messaging platform; no merge activity since opening.
4. **[#2163](https://github.com/sipeed/picoclaw/pull/2163) — Google Antigravity OAuth token refresh** (Opened Mar 2026, open PR) — Fix for session expiry causing PERMISSION_DENIED errors. Awaiting review/merge.
5. **[#2531](https://github.com/sipeed/picoclaw/pull/2531) — Delegate tool for cross-agent handoff** (Opened Apr 2026, open PR) — Key Phase 2 feature; has recent updates but not yet merged. Needs maintainer attention to unblock.

## Overall Health Assessment
**✅ Healthy.** High throughput on PRs (13 updated, 5 merged in 24h) with responsive bug fixes. Community engagement is strong across feature requests and bug reports. Main risks: a handful of long-open feature requests (#295) and bugs (#1042) may erode contributor confidence if not addressed soon. The nightly release cadence and ongoing cross-platform improvements signal a maturing project.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-26

## Today's Overview
Project activity is **very high**, with 21 PRs updated in the last 24 hours and 3 new issues. The maintenance cadence continues strong—5 PRs were merged or closed today, primarily driving improvements in setup reliability, security hardening, and skill additions (YNAB, usage logging, voice transcription). Two open issues highlight friction in the Linux install experience, and two veteran PRs (from March 11) are tagged "Needs Review," suggesting the review pipeline may be a bottleneck. Overall project health is robust, with active community contributions across security, infrastructure, and feature work.

## Releases
**None** — No new releases today.

## Project Progress
**5 PRs merged or closed today:**
- **#2024** — `feat: allow specific bot IDs to bypass Discord bot filter` (closed/merged). Adds an allowlist (`DISCORD_ALLOWED_BOT_IDS` env var) so that trusted bots (e.g., RSS bots) can post in thread-per-message channels without being filtered. Key for multi-bot Discord setups.
- **#2015** — `ci(review): add jbaruch/coding-policy PR review workflows` (closed). Scaffolds automated PR review workflows using OpenAI + Anthropic; future PRs will get coding-policy reviews from two AI gatekeepers.
- **#2010** — `docs(skills): enrich /add-signal with v2 lessons learned, drop redundant v2 skill` (merged). Consolidates Signal adapter best-practices into a single skill, removing duplication.
- **#1863** — `feat: add web channel — browser portal for NanoClaw` (closed/merged). Adds a native browser-based chat UI served directly by NanoClaw, with zero external dependencies (no Redis, no separate app).
- **#2017** — Issue "retracted" (closed as non-actionable).

**Notable open PRs advancing features:**
- **#2023** — Pass `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN` into agent containers (fixing 401s with custom endpoints)
- **#2019** — Pre-ingest contradiction detection for wiki skill
- **#2016** — YNAB skill via OneCLI curl (no MCP server required)
- **#2012** — Opt-in usage logging (token, model, duration, cost per query)
- **#2009** — Local Whisper voice transcription skill (openai-whisper + whisper.cpp)
- **#2008** — Telegram: route media through typed APIs (inline previews for images/video/audio)

## Community Hot Topics
Most active threads today, ranked by attention:

1. **[Issue #2014] — setup: install-node.sh hangs on Ubuntu when needrestart prompts**  
   *Author: javexed* — [Link](https://github.com/qwibitai/nanoclaw/issues/2014)  
   **Underlying need:** Fresh Linux VMs hit interactive `needrestart` prompts during `apt-get install`, freezing the setup script with no output or escape path. This is a **headless/first-time-user pain point**—users who aren't expecting the prompt have no idea why the install hangs.

2. **[Issue #2006] — Fresh install on Debian 12 LXC: docker socket permission denied**  
   *Author: dooha333* — [Link](https://github.com/qwibitai/nanoclaw/issues/2006)  
   **Underlying need:** The install script adds the user to the `docker` group via `usermod` but subsequent steps still fail because the group change doesn't take effect in the same session (no `newgrp` or re-login). This is a **classic Linux UX pitfall** that new users regularly hit.

3. **[PR #2021]** — `fix(setup): prevent apt-get from hanging on Linux installs`  
   *Author: suboss87* — [Link](https://github.com/qwibitai/nanoclaw/pull/2021)  
   **Directly addresses Issue #2014** — exports `DEBIAN_FRONTEND=noninteractive` and explicitly restarts services post-install. **High community alignment.**

## Bugs & Stability
| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High** | [#2014](https://github.com/qwibitai/nanoclaw/issues/2014) | `install-node.sh` hangs on Ubuntu due to `needrestart` prompt | Open; fix PR [#2021](https://github.com/qwibitai/nanoclaw/pull/2021) exists |
| **High** | [#2006](https://github.com/qwibitai/nanoclaw/issues/2006) | Docker socket permission denied after `usermod -aG docker` on Debian 12 LXC | Open; no fix PR yet |
| **Medium** | [#2007](https://github.com/qwibitai/nanoclaw/pull/2007) | Reactions broken: inbound message lookups use wrong composite id format | Open fix PR |
| **Medium** | [#2011](https://github.com/qwibitai/nanoclaw/pull/2011) | Invalid `engage_pattern` regex silently disables restriction (fail-open bug) | Open fix PR |
| **Low** | [#2018](https://github.com/qwibitai/nanoclaw/pull/2018) | Button-click approval fails in DM context (wrong user field) | Open fix PR |
| **Low** | [#2013](https://github.com/qwibitai/nanoclaw/pull/2013) | Poll-loop test teardown: abort signal doesn't stop inner loop | Open fix PR |

## Feature Requests & Roadmap Signals
Strong signals for next release (likely v0.6.x or v0.7.0):

- **Custom Anthropic endpoints** (PR #2023) — Enterprise/self-hosted users with non-standard API endpoints. High-priority fix.
- **YNAB integration** (PR #2016) — Personal finance community signal; no MCP server needed, just curl + secrets.
- **Usage logging** (PR #2012) — Billing/observability for multi-tenant setups.
- **Local Whisper transcription** (PR #2009) — Offline voice processing, privacy-preserving.
- **Telegram media inline previews** (PR #2008) — UX polish: images/photos/audio render natively in Telegram.
- **Web channel** (PR #1863, merged) — Now live; first-time-NanoClaw users can chat via browser without Discord/Telegram setup.

**Predictions for next version:** The combination of web channel + setup fixes (needrestart, docker group) could significantly reduce friction for first-time Linux users. YNAB and usage logging are likely to merge this week.

## User Feedback Summary
**Pain points (clear from issues):**
- Linux install reliability is the #1 user complaint — two separate install-blocking bugs surfaced within 24 hours (needrestart prompt, docker group persistence). Both affect headless/automated environments.
- Docker socket issue on LXC is particularly subtle; the user followed instructions correctly but group membership didn't apply mid-session.

**Positive signals:**
- Issue #2017 (closed, retracted) was titled "keep it going sir this is awesome!" — indicates strong user enthusiasm despite bugs.
- PR #1863 (web channel) was merged after a week of review, a long-requested feature.
- Multiple skill contributions (YNAB, Whisper, Signal, usage logging) show a healthy community of power users building extensions.

**Satisfaction:** High among existing users; frustration among new Linux users hitting installer issues.

## Backlog Watch
Two veteran PRs from March 11, both tagged `[Status: Needs Review]`, have been open for **47 days** without maintainer activity:

1. **[#967](https://github.com/qwibitai/nanoclaw/pull/967)** — "Improve reliability for stuck sessions and runner turns"  
   *Author: SebTardif*  
   **Impact:** Fixes a class of session hangs (messages ingested but not answered). Single-file change to agent-runner stream handling. **Should be reviewed this week** — risk of session-livelock in production.

2. **[#956](https://github.com/qwibitai/nanoclaw/pull/956)** — "Add fast LLM credential sanity checks to setup and verify"  
   *Author: SebTardif*  
   **Impact:** Early failure for bad LLM keys/URLs during setup, preventing silent Discord failures later. **Directly complements** today's setup fix PRs. Likely needs rebase after [#2021](https://github.com/qwibitai/nanoclaw/pull/2021) merges.

3. **[#954](https://github.com/qwibitai/nanoclaw/pull/954)** — "Fix OpenRouter non-Anthropic model routing in Anthropic SDK proxy flow (clean scope)"  
   *Author: SebTardif*  
   **Impact:** Fixes broken OpenRouter support for non-Anthropic models and a no-reply regression. **Also open for 47 days.** Combined with PR #2023 (custom endpoints), this is a critical chain for users with non-standard LLM backends.

**Recommendation:** The three SebTardif PRs (#967, #956, #954) together represent a significant stability/credential hardening bundle. They should be triaged and either merged or given maintainer feedback this week to avoid growing stale.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-04-26**.

---

## NullClaw Project Digest – 2026-04-26

### 1. Today's Overview
Project activity is **low-to-moderate** today. Two new critical bugs were filed within the last 24 hours, indicating potential instability for users on non-standard environments (WSL2) and low-resource hardware. A single pull request was merged, addressing a previously reported pain point regarding web search provider configuration. No new releases were cut, meaning the fix for today’s bugs will likely arrive in a future update. The maintainer team should prioritize triaging the CPU busy-loop and the web_search usability issue.

### 2. Releases
**None.** No new releases were published today. The latest version remains **2026.4.17**.

### 3. Project Progress
- **One PR merged:** [#815 – fix(web_search): add setup guidance for missing providers](https://github.com/nullclaw/nullclaw/pull/815)
    - **Author:** manelsen
    - **Summary:** This PR improves error reporting when no search provider (SearXNG or Brave) is configured. It now surfaces setup guidance directly in failure messages, pointing users to `http_request.search_base_url` for self-hosted SearXNG and the expected API key environment variables for hosted providers.
    - **Impact:** Reduces user confusion around `web_search` failures; no breaking changes.

### 4. Community Hot Topics
Both open issues are brand new (0 comments, 0 reactions each), so there are no heavily debated topics today. However, the two reports represent distinct friction points:

- **Issue #871 – [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support** ([link](https://github.com/nullclaw/nullclaw/issues/871))
    - **Author:** uMendex
    - **Underlying need:** A significant segment of users wants to run NullClaw on cheap, low-power hardware (e.g., Raspberry Pi, thin clients). The current reliance on Brave Search API (requiring an API key) or self-hosted SearXNG (resource overhead) makes the agent non-functional out-of-the-box on those devices. The community is implicitly requesting a zero-config, free search option (DuckDuckGo) as a fallback.

- **Issue #870 – Gateway accept4 busy loop (100% CPU) on WSL2** ([link](https://github.com/nullclaw/nullclaw/issues/870))
    - **Author:** weissfl
    - **Underlying need:** Stability and resource efficiency for Windows/WSL2 users. A 100% CPU busy loop makes the agent unusable as a background service.

### 5. Bugs & Stability
Two bugs were reported today. No fix PRs exist for either yet.

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **Critical** | [#871 – web_search impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871) | No working, zero-config search option for weak hardware. Requires API key or SearXNG setup. | Open, no fix |
| **High** | [#870 – Gateway accept4 busy loop on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | One thread consumes 100% CPU continuously when idle, even though Telegram responses work. | Open, no fix |

**Severity reasoning:** The #871 bug is marked critical because it blocks the core “search” functionality for a whole class of intended deployment scenarios (cheap devices). The #870 bug is high because it degrades system performance and battery life, but does not block functionality.

### 6. Feature Requests & Roadmap Signals
- **DuckDuckGo as a first-class search provider (from #871):** The community signal is clear – users want a free, no-API-key search option. Expect a PR adding a DuckDuckGo scraper or Lite API integration (rate-limited but free) in the next minor release (2026.5.x).
- **SearXNG auto-configuration hints (from merged #815):** Merged today; likely to be included in the next patch release.

### 7. User Feedback Summary
- **Pain point #1 – Onboarding friction:** New users, especially on low-resource hardware, are unable to use web search without external setup steps. The merged PR #815 mitigates confusion but does not solve the root cause.
- **Pain point #2 – WSL2 resource hog:** Users on Windows (WSL2) cannot run the gateway as a background daemon without excessive CPU drain. Satisfaction is likely low among this segment.
- **No positive feedback or feature praise** was recorded in the last 24 hours.

### 8. Backlog Watch
No long-unanswered issues or PRs were identified in today’s data. All open items are < 24 hours old. The maintainer should keep an eye on the two new bugs to ensure they don’t languish.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-26

## 1. Today's Overview

IronClaw shows **high development activity** with 9 open issues and 16 PRs updated in the last 24 hours, including 2 PRs merged/closed. Three **live canary failures** (provider-matrix for openai-compatible and anthropic, plus private-oauth) indicate active CI/CD health monitoring, with all three triggered by a single commit (7404e7d). The project is processing **five XL-sized PRs** simultaneously (migration CLI, secrets UI, MCP prompts, Matrix channel, signing audit), suggesting a major feature push toward what may become v0.27.0. No new releases were cut today. Maintainer attention is spread across the core team (serrrfirat, zmanian) and regular contributors (willamhou, rajulbhatnagar), with one new contributor (chrismcfee) merging an upstream sync. Activity level is **high and well-distributed across contributors**.

## 2. Releases

**No new releases today.** Last release remains v0.25.0.

## 3. Project Progress

**Merged/Closed PRs (2):**

- **[PR #2969 — CLOSED]** feat(reborn): clean up runtime authority boundaries — *serrrfirat*, core contributor. Seals process resource reservations, moves dispatch port contracts into `ironclaw_host_api`, removes the `ironclaw_capabilities → ironclaw_dispatcher` dependency. *(XL size, low risk)* [Link](https://github.com/nearai/ironclaw/pull/2969)

- **[PR #2964 — CLOSED]** merge upstream changes from 0.26.0 — *chrismcfee*, new contributor. Large DB-migration-bearing sync PR. *(Risk: medium, all scopes)* [Link](https://github.com/nearai/ironclaw/pull/2964)

**Features and fixes that advanced today (active PRs updated):**

- **[PR #2960]** fix(mcp): skip OAuth discovery for stdio/unix transports — directly addresses Issue #2923 (stdio activation bug). Ready for review. [Link](https://github.com/nearai/ironclaw/pull/2960)

- **[PR #2961]** fix(llm): honor `api_key_required` in `unusable_reason` — fixes Issue #2946 (llm_backend overwritten on restart). Prevents self-hosted vLLM/LiteLLM setups from being silently demoted to NearAI. [Link](https://github.com/nearai/ironclaw/pull/2961)

- **[PR #1941]** fix(mcp): validate server names with allowlist — prevents shell injection via MCP server names. [Link](https://github.com/nearai/ironclaw/pull/1941)

- **[PR #2699]** fix(mcp): normalize server names, fix UTF-8 truncation, skip auth when header set — recreated on fresh staging. [Link](https://github.com/nearai/ironclaw/pull/2699)

## 4. Community Hot Topics

- **[Issue #2923 — Stdio MCP activation failure]** — 2 comments, 1 👍. Re-filed by rajulbhatnagar after the original (#2474) was incorrectly closed. The reporter explicitly states stdio *is* wired end-to-end in v0.25.0 but the OAuth pre-flight blocks activation. **Fix PR #2960 exists.** *Underlying need:* Users need stdio/non-HTTP MCP servers to work without requiring OAuth discovery. [Link](https://github.com/nearai/ironclaw/issues/2923)

- **[Issue #2946 — llm_backend overwritten on every startup]** — 1 comment. User kummell reports DB value resets to `nearai` on every startup, overriding their `openai_compatible` config. *Fix PR #2961 exists.* *Underlying need:* Self-hosters need persistent provider configuration without forced reset. [Link](https://github.com/nearai/ironclaw/issues/2946)

- **[Issue #78 — P3 messaging channels]** — 2 comments, long-running since Feb 2026. Tracks iMessage, Matrix, LINE, Feishu, Teams. *Related PR #2019 (native Matrix channel, XL size, high risk) was updated today.* [Link](https://github.com/nearai/ironclaw/issues/78)

- **[Issue #2962 — Surface ACP agent request_permission calls in web UI]** — 0 comments, but notable: asks for opt-in gate cards for sandboxed ACP agents (Goose, Codex, Gemini CLI). *Underlying need:* Users want manual approval over auto-approved agent actions. [Link](https://github.com/nearai/ironclaw/issues/2962)

## 5. Bugs & Stability

**High Severity:**
1. **Live canary failures (3 incidents)** — Issues #2968, #2967, #2966, all from commit 7404e7d. Two provider-matrix lanes (openai-compatible, anthropic) and one private-oauth lane. Suggests a regression in CI/CD pipeline or provider config. No PR yet for remediation. [Run link](https://github.com/nearai/ironclaw/actions/runs/24946959927)

2. **Docker Hub image missing** — Issue #2963 by magnusviri: `nearai/ironclaw:latest` does not exist, breaking `docker pull`. Either the docs or the CI build pipeline is out of sync. [Link](https://github.com/nearai/ironclaw/issues/2963)

**Medium Severity:**
3. **Stdio MCP activation blocked by OAuth pre-flight** — Issue #2923. Fix PR #2960 exists (OAuth discovery skip for stdio/unix). Risk: low, size: M. [Issue](https://github.com/nearai/ironclaw/issues/2923) | [PR](https://github.com/nearai/ironclaw/pull/2960)

4. **llm_backend overwritten on restart** — Issue #2946. Fix PR #2961 exists (honor `api_key_required`). Specifically affects self-hosted OpenAI-compatible setups. [Issue](https://github.com/nearai/ironclaw/issues/2946) | [PR](https://github.com/nearai/ironclaw/pull/2961)

**All reported bugs have fix PRs in review except the canary failures and Docker image issue.**

## 6. Feature Requests & Roadmap Signals

**Likely for next version (v0.26.0 or v0.27.0):**
- **Split core from vector DB** — Issue #2965 by jousby: Add support for Aurora DSQL (no pgvector). Signals user demand for cheaper, scale-to-zero Postgres backends. *Prediction:* Likely picked up as the DB abstraction PRs (#2964, #2700 suggest active DB work). [Link](https://github.com/nearai/ironclaw/issues/2965)
- **MCP Prompts support** — PR #2958 (XL, open) adds `/prompts` command, HTTP API, and `/server:prompt-name` mentions. This is a major spec-completeness feature. [Link](https://github.com/nearai/ironclaw/pull/2958)
- **Self-service user secrets UI** — PR #2754 (XL, core) adds `/api/secrets` and Settings UI for secrets CRUD. [Link](https://github.com/nearai/ironclaw/pull/2754)
- **Engine V2 migrate CLI** — PR #2728 (XL, core) adds `ironclaw migrate` for OpenClaw/Hermes. [Link](https://github.com/nearai/ironclaw/pull/2728)

**Longer-term roadmap signals:**
- **Native Matrix channel** — PR #2019 was updated today. This is a complex, high-risk feature (E2EE, event loop, room management) that may appear as a new channel type.
- **Cryptographic tool audit (signet-core)** — PR #2684 adds Ed25519-signed tool calls with JSONL audit chain. Important for enterprise/regulatory use cases.

## 7. User Feedback Summary

**Pain points:**
- **"My config keeps resetting"** — Issue #2946: User kummell explicitly points out that DB > env vars > file > defaults priority is broken. Took the time to update to 0.25.0 from source.
- **"Docker image doesn't exist"** — Issue #2963: magnusviri tried to use the documented `nearai/ironclaw:latest` and got a 403. Documentation/CI mismatch.
- **"Stdio MCP actually works but the activation check blocks it"** — Issue #2923: rajulbhatnagar feels strongly enough to refile after an incorrect close. Demonstrates user frustration with opaque "doesn't work" states.
- **"Aurora DSQL not supported"** — Issue #2965: jousby wants to reduce monthly costs with true pay-per-usage Postgres. Current pgvector requirement blocks adoption.

**Satisfaction signals:**
- High PR throughput (16 updated today) shows active development addressing issues.
- Core team members (serrrfirat, zmanian) are consistently working on multiple XL features simultaneously.
- New contributor chrismcfee successfully merged a large upstream sync PR, suggesting onboarding is working.

## 8. Backlog Watch

**Oldest unaddressed Issues needing maintainer attention:**
- **[Issue #78 — P3 messaging channels]** — Open since Feb 14, 2026 (71 days). 0 👍 but tracked in `FEATURE_PARITY.md`. Related PR #2019 (native Matrix) was updated today, which may address part of this. [Link](https://github.com/nearai/ironclaw/issues/78)

**Long-open PRs needing review/merge decisions:**
- **[PR #1470 — fix(routines): normalize notification summaries]** — Open since Mar 20 (37 days). Core contributor (zmanian), size L, touches 13 scopes. No comments in 24h despite being updated. [Link](https://github.com/nearai/ironclaw/pull/1470)
- **[PR #1120 — Prismer Cloud IM WASM channel]** — Open since Mar 13 (44 days). Regular contributor (willamhou). Touchpoints: wasm channel + docs. [Link](https://github.com/nearai/ironclaw/pull/1120)

**Watch item:**
- Three live canary failures today (Issues #2966, #2967, #2968) with no associated fix PR yet. If unaddressed for 48+ hours, this indicates a potential CI/CD regression that could block future releases.

*Generated from IronClaw GitHub data on 2026-04-26. All links: https://github.com/nearai/ironclaw/issues/{number} or /pull/{number}*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-04-26**.

---

## LobsterAI Project Digest — 2026-04-26

### 1. Today's Overview
The project saw a flurry of maintenance activity, with **6 pull requests merged or closed** and **1 new open PR** in the last 24 hours, though **no new releases** were cut. The development team appears to be in a stabilization phase, focusing on reverting and re-applying cowork session lifecycle fixes. Meanwhile, the community backlog remains a concern: **4 stale open issues** (dating back 2+ months) are all receiving updates but no resolution, indicating a potential bottleneck in maintainer response. Overall, activity is high on the PR side but low on customer-facing improvements, suggesting an internal sprint or refactor in progress.

### 2. Releases
**No new releases** were published today. The last recorded activity remains on the `Release/2026.04.24` branch, which has been merged into main (see PR #1826). No breaking changes or migration notes are applicable at this time.

### 3. Project Progress
The following **6 PRs were closed/merged** today, all authored or handled by **liuzhq1986**:

- **[#1826: Release/2026.04.24]** — A significant release branch that includes:
  - **Remote embedding provider configuration** (OpenAI, Gemini, etc.) for memory search.
  - **Fix for CJK memory search** on Windows.
  - **Cowork session lifecycle fixes** (preventing fallback timer from completing a newer run, and syncing session model so the agent reports the correct model).
- **[#1827: fix(patch) – DeepSeek V4 thinking mode wrapper]** — Extended the thinking mode wrapper to cover the `anthropic-messages` API format.
- **[#1825, #1824, #1822, #1821]** — A series of reverts and re-reverts (e.g., "Revert 'Revert ...'"), suggesting the team is iterating on fixes for cowork session lifecycle bugs, with the latest merged state applying the fixes.

**Open PR:**
- **[#1823: Fisherdaddy/fix schema or payload]** — Currently open, likely an in-progress fix related to schema or API payload validation.

### 4. Community Hot Topics
Despite being **stale**, all 4 open issues received updates today, indicating maintainer triage activity:

- **[#88: Suggestion: Add token usage statistics and logging (👍 3)](https://github.com/netease-youdao/LobsterAI/issues/88)** — The most upvoted community request. The user asks for a token usage dashboard and better debug logging for custom API providers. This is a clear signal that power users feel blind when debugging custom integrations. *Need: Operational visibility for DIY users.*
- **[#60: Context length exceeded with DeepSeek model (👍 0)](https://github.com/netease-youdao/LobsterAI/issues/60)** — A user hit a 131k token limit vs. 141k requested. This is a common LLM API error, but the user may benefit from a built-in truncation or context window management feature.
- **[#40: Windows installation – SKILLs reading path issue (👍 0)](https://github.com/netease-youdao/LobsterAI/issues/40)** — The agent creates a duplicate folder in `C:\` despite a custom install path on `D:\`, breaking skill loading. *Need: Configurable working directory or symlink support.*
- **[#52: Cannot access WeChat public account articles (👍 0)](https://github.com/netease-youdao/LobsterAI/issues/52)** — Likely a browser rendering or authentication issue. No additional context provided.

### 5. Bugs & Stability
No new bugs were filed today, but the following existing bugs were **re-affirmed as active**:

| Bug | Severity | Status | Fix PR? |
|---|---|---|---|
| **Context length exceeded (#60)** | Medium | Stale, no fix | No |
| **Windows file path mismatch (#40)** | High (blocks skill execution) | Stale | No |
| **WeChat article access (#52)** | Medium (content ingestion blocked) | Stale | No |
| **Missing logs / token stats (#88)** | Low (quality of life) | Feature Request | No |

**Note:** The recent fixes in release 2026.04.24 (CJK memory search, cowork session lifecycle) may address underlying stability issues, but no direct fix PRs for these reported bugs exist.

### 6. Feature Requests & Roadmap Signals
- **Token Usage Dashboard & Logging (#88)** — Likely to be prioritized next given 3 upvotes and explicit user demand. The recently merged release added remote embedding providers (OpenAI, Gemini), which will itself increase token usage, making this dashboard even more critical.
- **Context Window Management** — Not yet a formal feature request, but #60 (DeepSeek context overflow) signals a need for automatic truncation or user-configurable context limits.
- **Working Directory Configuration (#40)** — If the team wants to broaden Windows support, this is a quick win.

**Prediction for next release:** The existing `Release/2026.04.24` branch and its fixes (CJK memory, cowork lifecycle) will likely be promoted to a full release tag. The open PR #1823 (schema/payload fix) may also be included.

### 7. User Feedback Summary
- **Satisfaction:** Not explicitly visible. The recent fixes (remote embedding providers, memory search) are likely appreciated by advanced users.
- **Pain Points:**
  - **Windows installation is still fragile** (#40): Users expect a portable installation; currently the agent creates a secondary directory in `C:\`.
  - **Custom API users feel unsupported** (#88): Debugging is "impossible" without logs or token monitoring.
  - **WeChat content ingestion is broken** (#52): A common use case for Chinese users remains blocked.
- **Usage Patterns:** Users are actively trying to use DeepSeek models and custom API endpoints, showing a trend toward self-hosted or alternative LLMs.

### 8. Backlog Watch
The following **high-priority, long-unanswered issues** have been stale for >2 months and have received no maintainer responses:

| Issue | Days Stale | Comments | Risk |
|---|---|---|---|
| [#60: Context length exceeded](https://github.com/netease-youdao/LobsterAI/issues/60) | 62 | 3 | May lose user if no workaround is offered |
| [#40: Windows SKILLs path](https://github.com/netease-youdao/LobsterAI/issues/40) | 63 | 2 | Blocks new Windows users from using skills |
| [#52: WeChat article access](https://github.com/netease-youdao/LobsterAI/issues/52) | 62 | 2 | Core content ingestion feature broken for a key platform |
| [#88: Token/logging dashboard](https://github.com/netease-youdao/LobsterAI/issues/88) | 61 | 1 | Highest community signal (3 👍) |

**Recommendation:** The maintainer should provide at least a status update or workaround on #40 (Windows path) and #88 (logging) to reduce community frustration.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-26

## Today's Overview
Moderate activity with 9 PRs updated and 2 issues touched in the last 24 hours. The team is actively addressing a user-reported bug (Issue #875) with two linked fix PRs already open. Internationalization continues with a long-running Traditional Chinese locale PR finally merged. The project shows healthy maintainer responsiveness, with 3 PRs closed/merged today and several feature branches advancing. No new releases were published, but the codebase is receiving steady improvements across MCP tooling, UI, cron stability, and i18n.

## Releases
No new releases today.

## Project Progress
Three PRs were closed or merged in the last 24 hours:

- **#339 [MERGED] — feat(i18n): add zh-TW Traditional Chinese locale support** (PeterDaveHello) — Full Traditional Chinese (Taiwan) language support added to both macOS and web apps, covering UI strings, locale detection, and language selection across key pages and features. [PR #339](https://github.com/moltis-org/moltis/pull/339)

- **#874 [CLOSED] — fix(mcp): prefer native MCP tools over mcporter** (penso) — Removes the bundled `mcporter` skill to prevent routing native MCP requests through the OpenClaw compatibility CLI path. Adds prompt guidance for using already-connected MCP tools directly via `mcp__<server>__<tool>` and clarifies that skills are workflows, not callable tools. [PR #874](https://github.com/moltis-org/moltis/pull/874)

- **#871 [CLOSED] — feat(cron): add heartbeat wake cooldown to prevent exec re-fire loop** (Cstewart-HC) — Prevents exec-completion callbacks from re-waking the heartbeat in a tight loop by adding a cooldown check in `CronService::wake()` that skips exec-event re-triggering. [PR #871](https://github.com/moltis-org/moltis/pull/871)

## Community Hot Topics

- **#875 [OPEN] — [Bug]: Can't disable bundled skill via Web** (faevourite) — Updated just today, this issue has 1 comment and reports that bundled skills cannot be toggled off through the Web UI. The user has verified it occurs on the latest version. [Issue #875](https://github.com/moltis-org/moltis/issues/875)

- **#873 [CLOSED] — Qwen3.6-35B-A3B: Issues using mcp-servers** (Tanguille) — Reported yesterday and closed without comments, suggesting either a duplicate or resolved by configuration guidance. Filed under `model-behavior` label, indicating potential model-specific MCP compatibility problems. [Issue #873](https://github.com/moltis-org/moltis/issues/873)

**Analysis:** The bundled skill disable bug (#875) is drawing immediate maintainer attention with two open fix PRs (#877, #878), demonstrating strong community responsiveness. The Qwen MCP issue (#873) may warrant a follow-up to ensure affected users have clear resolution documentation.

## Bugs & Stability

**High Severity:**
- **#875 [OPEN] — Can't disable bundled skill via Web** — Users report that toggling bundled skills in the Web UI has no effect; skills always appear enabled. Two PRs (#877, #878) are already submitted by Cstewart-HC to derive enabled state from config and handle disable/enable properly. Likely to be fixed imminently. [Issue #875](https://github.com/moltis-org/moltis/issues/875)

**Medium Severity:**
- **#879 [OPEN] — fix(web-ui) code snippets background turning white when chat stream is complete** (maop) — A dark-mode regression where code blocks switch to a white background after streaming completes. Root cause identified: `applyShikiStylesToPre` copies `cssText` overwriting the dark-mode background. A fix PR exists. [PR #879](https://github.com/moltis-org/moltis/pull/879)

**Lower Severity:**
- **#873 [CLOSED] — Qwen3.6-35B-A3B: Issues using mcp-servers** — Closed without resolution documented; may represent a configuration issue or duplicate.

## Feature Requests & Roadmap Signals

- **#876 [OPEN] — feat(ui): file upload button for web chat sessions** (Cstewart-HC) — Adds a file upload button (+) to the web UI chat input row, matching UX patterns from major LLM providers. Includes validation, sanitization, and pending state handling. [PR #876](https://github.com/moltis-org/moltis/pull/876)

- **#869 [OPEN] — feat(browser): add Obscura as lightweight sidecar browser backend** (penso) — Introduces an opt-in browser backend using the Obscura project (~300 LoC), spawned as a sidecar process and connected via existing `chromiumoxide` CDP client — zero new Rust dependencies. [PR #869](https://github.com/moltis-org/moltis/pull/869)

- **#826 [OPEN] — feat(compaction): wire summary_model config to auxiliary provider** (Cstewart-HC) — Resolves chat compaction `summary_model` from `ProviderRegistry` for structured/llm_replace modes, with fallback to primary provider. Partially addresses a fork issue. [PR #826](https://github.com/moltis-org/moltis/pull/826)

**Prediction:** The file upload button (#876) and bundled skill fix (#877/#878) appear most likely to land in the next release, as they address common UX friction points. The Obscura browser backend (#869) may follow in a subsequent release if testing proves stable.

## User Feedback Summary
- **Pain point:** One user explicitly reported that bundled skills cannot be disabled through the Web UI, causing confusion as toggles appear non-functional. The project has responded with two PRs within 24 hours.
- **Pain point:** A dark-mode code highlighting regression was reported (sudden white background on code blocks after streaming), affecting users with system dark preference.
- **Use case:** A user running Qwen3.6-35B-A3B encountered MCP server issues, suggesting edge cases with less common model-provider combinations still need attention.
- **Satisfaction signal:** No negative sentiment in comments; the team's rapid response on the bundled skill bug (#875→#877/#878) demonstrates strong maintainer attentiveness.

## Backlog Watch
- **#339 [MERGED] — zh-TW locale support** — This PR was open since March 5 and finally merged; long-running i18n contributions may benefit from more frequent reviewing cycles.
- **#826 [OPEN, since 2026-04-22] — compaction summary_model config** — Uncommented for 4 days; this feature enables auxiliary provider support for chat compaction, which could unblock fork-related issues. [PR #826](https://github.com/moltis-org/moltis/pull/826)
- **#869 [OPEN, since 2026-04-24] — Obscura browser backend** — No maintainer comments yet; as an opt-in backend with ~300 LoC and zero new dependencies, this may benefit from review to avoid stalling. [PR #869](https://github.com/moltis-org/moltis/pull/869)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the provided GitHub data for CoPaw (repository: `agentscope-ai/QwenPaw`), here is the structured project digest for **2026-04-26**.

---

## CoPaw Project Digest: 2026-04-26

### 1. Today's Overview

Project activity remains **high**, with 9 issues and 13 pull requests updated in the last 24 hours, indicating a healthy and engaged development cycle. A new patch release, **v1.1.4.post2**, was published, primarily fixing an approval workflow issue in channels. The community is highly active in both reporting bugs (particularly around configuration persistence and channel reliability) and contributing features, with three "first-time contributor" PRs submitted today. However, the volume of open bugs (8) relative to closed issues (1) suggests the maintainers are currently prioritizing feature integration and review over a dedicated bug-fixing sprint.

### 2. Releases

- **v1.1.4.post2** ([View Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post2))
    - **Changes:** This is a patch release focused on a critical fix and version bump.
        - **Fix:** Resolved an issue where the approval mechanism was not functioning correctly within channel interactions (`#3832`).
        - **Chore:** Version bumped to v1.1.4.post2 (`#3833`).
    - **Breaking Changes:** None.
    - **Migration Notes:** A standard upgrade is recommended to resolve the channel approval bug.

### 3. Project Progress

Three pull requests were merged/closed today, reflecting progress on fixes and project maintenance:

- **Fix: Approval in Channels** (`#3832` - [Merged](https://github.com/agentscope-ai/QwenPaw/pull/3832)): The core fix that prompted the new release, addressing a regression in the channel approval system.
- **Version Bump** (`#3833` - [Merged](https://github.com/agentscope-ai/QwenPaw/pull/3833)): Routine release management.
- **WIP: UI Language Persistence** (`#2338` - [Closed](https://github.com/agentscope-ai/QwenPaw/pull/2338)): A long-standing Work-in-Progress PR from a first-time contributor to persist UI language settings server-side was closed. It is unclear if this was merged or abandoned, but it signifies progress on improving user experience consistency across devices.

### 4. Community Hot Topics

- **Highest Activity:** **Bug: Session History Disappears** (`#3843` - [Open](https://github.com/agentscope-ai/QwenPaw/issues/3843)). This issue, filed today, is likely generating high user frustration. The user reports that in an existing conversation, all chat history disappears and new messages are routed to a blank session, although the session title remains visible in the sidebar.
- **Feature Request with Strong Rationale:** **Support Auto Model Listing** (`#3844` - [Open](https://github.com/agentscope-ai/QwenPaw/issues/3844)). This is a highly practical feature request from a user who manages a self-hosted API provider with many models. The user highlights that manual registration of dozens of models is a significant pain point, and automagic discovery would dramatically improve usability. This is a clear signal of an enterprise/advanced user need.
- **Networking/Core Feature Bug:** **Mission CLI Returns 405 Error** (`#3847` - [Open](https://github.com/agentscope-ai/QwenPaw/issues/3847)). A significant user-facing bug reported today where the `qwenpaw mission` CLI command is completely non-functional due to an API route conflict (`/api` duplication) and a subsequent `TypeError`. This directly affects a core product feature.

### 5. Bugs & Stability

| Severity | Bug | Issue | Fix PR Exists? | Analysis |
| :--- | :--- | :--- | :--- | :--- |
| **Critical** | **Mission CLI completely broken** | `#3847` | No | Core CLI feature `list/start/status` returns 405 and crashes. A high-priority regression. |
| **Critical** | **Session history disappears** | `#3843` | No | A data integrity and UX-breaking bug. Users lose their conversation context in the middle of a chat. |
| **High** | **Config resets on page refresh** | `#3824` | No | A severe configuration bug where user settings for language, planning mode, and memory are lost on navigation or restart. |
| **Medium** | **WeChat message truncation** | `#3837` | No | Agent replies in the WeChat channel are cut off if more than ~10 messages are sent in a single turn. |
| **Medium** | **XiaoYi (小艺) channel fails to reply** | `#3840` | Yes (`#3839`) | A fix PR is open, refactoring the XiaoYi protocol implementation. |
| **Low** | **Browser_use fails (network)** | `#3836` | No | The `browser_use` feature fails with a `net::ERR_INTERNET_DISCONNECTED` error, likely an environment or proxy configuration issue. |
| **Low** | **Cannot rename/delete ACP agents** | `#3835` | No | GUI limitations for managing custom agents. |

### 6. Feature Requests & Roadmap Signals

Several feature requests submitted today point to clear roadmap items:

- **High Likelihood (Next Minor Release):** **Auto Model Discovery from Providers** (`#3844`). This is a highly requested quality-of-life improvement. Given the architectural need and user demand, expect this to be looked at soon.
- **Medium Likelihood:** **GitHub Copilot Model Provider Support** (`#3846` - [PR Open](https://github.com/agentscope-ai/QwenPaw/pull/3846)). A new PR from a contributor adds support for using models via GitHub Copilot. This is a novel integration that could expand CoPaw's user base.
- **Medium Likelihood:** **QQ Channel Audio-to-Text** (`#3845` - [PR Open](https://github.com/agentscope-ai/QwenPaw/pull/3845)). Another contributor PR adding automatic speech-to-text for the QQ channel. This aligns with the trend of expanding channel capabilities.
- **Long-Term Signal:** **Tauri 2.x Desktop App** (`#3813` - [PR Open](https://github.com/agentscope-ai/QwenPaw/pull/3813)). A major architectural shift to a new desktop framework. This will likely require significant internal review before being merged.

### 7. User Feedback Summary

- **Pain Point - Configuration Instability:** The most critical feedback is from the bug in `#3824`, where users invest time in setting up agents (language, planning, memory) only to have their configuration vanish on a page refresh. This is a significant source of dissatisfaction.
- **Pain Point - Channel Reliability:** Users of various channels (WeChat `#3837`, Huawei XiaoYi `#3840`, Matrix `#1426`) are reporting issues where replies fail or are incomplete. This undermines the core value proposition of a multi-channel agent.
- **Positive Signal - Feature Enthusiasm:** The number of "first-time contributor" PRs (`#3846`, `#3845`, `#3813`) is a strong indicator of community health and enthusiasm for extending CoPaw’s capabilities. The feature request for auto-model listing (`#3844`) also shows a sophisticated user base looking to scale their deployments.

### 8. Backlog Watch

- **Matrix Channel Bug (34 days old):** Issue `#1426` ([CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/1426)) regarding the Matrix receive path not working was active today after being created in March. While closed, its age and the fact it was just updated suggest it may have been a long-standing pain point for the reporter.
- **Semantic Skill Routing PR (18 days old):** PR `#3117` ([Open](https://github.com/agentscope-ai/QwenPaw/pull/3117)) by `hellogxp` adds a powerful feature for managing large skill sets. It is marked as "[Under Review, need discussions]" and has had no maintainer response in over 2 weeks. This could be a community communication issue or a complex review that requires maintainer bandwidth.
- **Frontend Test Framework (8 days old):** PR `#3559` ([Open](https://github.com/agentscope-ai/QwenPaw/pull/3559)) establishes Vitest for frontend testing. Given the number of bugs being reported, improving test coverage is vital. A lack of movement on this PR could signal a lack of capacity for process improvements.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-26

## Today's Overview
ZeroClaw showed **high activity** with 44 issues and 38 PRs updated in the last 24 hours. The v0.7.4 milestone is in active progress, with several critical bug fixes and a major schema-driven onboarding rewrite recently merged. Community reporting remains strong across providers (DeepSeek V4 compatibility, llama.cpp configuration), web UI usability, and multi-agent feature requests. A notable 11 issues were closed and 8 PRs merged/closed, signaling steady momentum toward the next release. However, S0/S1 severity bugs persist around web dashboard availability and Telegram channel misconfiguration.

## Releases
No new releases were published today. The v0.7.3 emergency release (broken tags blowout) remains the latest, with v0.7.4 being tracked via issue [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877). Users experiencing web dashboard issues or provider configuration problems are advised to build from master or await the v0.7.4 milestone completion.

## Project Progress
**Merged/Closed PRs today (8 total):**
- **feat(onboard): clean-slate rewrite** ([PR #5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)) — Replaced the 8,534-line `onboard/wizard.rs` monolith with a schema-driven, idempotent orchestrator. This is a foundational architectural improvement.
- **feat(i18n, docs): Mozilla Fluent pipeline** ([PR #5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788)) — Implements RFC #5787, migrating from hand-rolled TOML i18n to Mozilla Fluent. Also includes multi-locale mdBook documentation. This replaces the TOML i18n system and removes in-repo translated docs.
- **feat(channel): InboxAPI channel (email)** ([PR #5511](https://github.com/zeroclaw-labs/zeroclaw/pull/5511), [PR #5512](https://github.com/zeroclaw-labs/zeroclaw/pull/5512)) — Adds agent-native email as a zero-config inbound channel via InboxAPI.
- **fix(docs): binary size benchmark & build badge** ([PR #6109](https://github.com/zeroclaw-labs/zeroclaw/pull/6109), [PR #6110](https://github.com/zeroclaw-labs/zeroclaw/pull/6110)) — Updated binary size to 5.1 MB kernel-only; corrected broken build badge.
- **fix(ci): rename and wire Paperclip review** ([PR #6111](https://github.com/zeroclaw-labs/zeroclaw/pull/6111)) — CI infrastructure improvement.

**Issues advanced (schema v3 migration):** The schema v3 batch migration ([#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)) is marked as a "merge blocker" with coordinated field migrations. Multi-agent tracker ([#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891)) and its RFC ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) remain in active discussion.

## Community Hot Topics
The most engaged discussions highlight three key areas:

1. **Provider Configuration Pain** — Issues [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) (llamacpp object ignored, 9 comments, 2 reactions) and [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) (GitHub Copilot not in onboarding, 7 comments) reflect user frustration with provider setup. Both were recently closed, suggesting fixes are landing.

2. **Web Dashboard Availability** — Issue [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) remains the #1 most-commented issue (25 comments) despite being closed. Users consistently hit the "Web dashboard not available" error. Related issues [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (7 comments) and [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) (new today) show this is an ongoing pain point.

3. **Multi-Agent & RBAC** — Issue [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (per-sender RBAC, 7 comments) signals enterprise demand for multi-tenant deployments. The multi-agent tracker [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) connects several related efforts.

## Bugs & Stability
**High Severity Bugs (S0/S1):**
- **S0 - Telegram misconfigured anthropic call** ([#6090](https://github.com/zeroclaw-labs/zeroclaw/issues/6090)) — Telegram channel: "All providers/models failed" with Anthropic. No fix PR yet. Needs reproducer.
- **S1 - DeepSeek-V4 API incompatibility** ([#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)) — Thinking mode causes errors on V4-Pro and V4-Flash. A fix PR ([#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107)) explicitly addresses capturing `reasoning_content` from streaming responses.
- **S1 - Tool call output mismatch** ([#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941)) — "No tool call found" errors with function calls. In-progress.
- **S1 - Local image reading failure** ([#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097), new) — Skills generate images with local paths that API models can't read.

**Medium Severity Bugs (S2):**
- **Web dashboard not extracted by install.sh** ([#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096), new) — Pre-built binary install skips web assets.
- **Web UI config editor broken** ([#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073)) — Cursor/typing misalignment in config editor.
- **`--features rag-pdf` silently disabled** ([#6066](https://github.com/zeroclaw-labs/zeroclaw/issues/6066), closed) — Feature flag not propagated to runtime crate.
- **Dead duplicate cost/tracker.rs** ([#6094](https://github.com/zeroclaw-labs/zeroclaw/issues/6094)) — 566-line orphan file not compiled. Fix PR [#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) submitted.

**Regressions:**
- Issue [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) notes that provider config schema v2 broke llama.cpp object handling — "worked fine before schema version 2."

## Feature Requests & Roadmap Signals
**Likely for v0.7.4 (in-progress or tracked in milestone):**
- Schema v3 breaking field migrations ([#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)) — Merge blocker, coordinated with milestone.
- Multi-agent UX flow RFC ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) — 7-day discussion period active.
- Channel reply-intent precheck configurable ([#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)) — In-progress.

**Emerging Requests:**
- **Per-sender RBAC** ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)) — Multi-tenant isolation for enterprise deployments.
- **Discord channel restriction** ([#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075)) — "allow_channels" config, community member testing on Raspberry Pi.
- **Free model indication in dropdown** ([#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070)) — OpenRouter users want visible free model labels.
- **Web UI chat clear/reset** ([#6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077)) — Users requesting ability to clear error-filled chat windows.
- **XCode MCP integration** ([#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)) — Developer environment bridge request.
- **I18n prompts** ([#5930](https://github.com/zeroclaw-labs/zeroclaw/issues/5930)) — Non-English users want localized agent prompts.

## User Feedback Summary
**Pain Points (recurring):**
- Web dashboard setup remains the #1 friction point — users across multiple versions hit `Web dashboard not available` errors with unclear resolution paths.
- Provider configuration is error-prone: schema version changes broke existing configs (llamacpp), onboard wizard omits supported providers (GitHub Copilot), and custom endpoints require manual `.toml` editing.
- Local/self-hosted setups on Raspberry Pi and ARM are active use cases but face memory cgroup detection issues ([#5906](https://github.com/zeroclaw-labs/zeroclaw/pull/5906)) and cron tool discovery gaps ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)).

**Satisfaction Signals:**
- The clean-slate onboard rewrite (merged today) directly addresses provider discovery complaints.
- Active community participation in multi-agent design ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) suggests users are invested in ZeroClaw's evolution.
- PR [#6109](https://github.com/zeroclaw-labs/zeroclaw/pull/6109) highlights the binary is now 5.1 MB kernel-only — users value the lightweight footprint.

## Backlog Watch
| Issue/PR | Age | Status | Why Watch |
|----------|-----|--------|-----------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — Web dashboard unavailable | 29 days | **Closed** | **25 comments, largest thread** — despite closure, users keep hitting the same error. Needs a permanent resolution documented. |
| [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) — GitHub Copilot onboarding | 30 days | **Closed** | High user interest (7 comments). The rewrite (PR #5960) should address this, but no explicit confirmation. |
| [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) — llama.cpp server silence | 16 days | **Closed** | S1 severity — "several minutes" before timeout. Now closed, but risks regressing without regression tests. |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — Agent unaware of cron capabilities | 8 days | **Open** | Minor but signals a broader issue: agents don't introspect their own toolset. Needs a `needs-repro` tag. |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) — Document web_dist_dir | 9 days | **Closed** | S0 severity closed — was user asking for docs that should have shipped with the feature. |
| [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) — Docker bind-mount fix | 7 days | **Open** | Supports Raspberry Pi users; risk flagged as "manual" testing required. |
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) — ACP tool output fix | 3 days | **Open** | "risk: high" — ACP server tool formatting bug that hides tool actions from users. |

**Maintainer attention needed:** Issue [#6079](https://github.com/zeroclaw-labs/zeroclaw/issues/6079) (self-test for tilde/variables in web_dist_dir) is a low-effort improvement that would prevent cascading Web UI failures. The multi-agent RFC ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) needs a core team vote per governance procedures.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*