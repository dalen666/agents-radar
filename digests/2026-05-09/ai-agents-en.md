# OpenClaw Ecosystem Digest 2026-05-09

> Issues: 394 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-09 04:28 UTC

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

Based on the GitHub activity for the OpenClaw project on 2026-05-09, here is the project digest:

---

### OpenClaw Project Digest — 2026-05-09

#### 1. Today's Overview
OpenClaw is showing very high activity with 394 updated Issues and 500 updated Pull Requests in the last 24 hours, indicating a major push likely following the `2026.5.5` and `2026.5.6` patch releases. The project is in a **stabilization sprint**, with a significant number of closed bugs (107) and merged/closed PRs (143). However, the sheer volume of open items (287 open issues, 357 open PRs) suggests a high maintenance burden and potential for developer burnout. The primary focus is on fixing regressions introduced in the recent `2026.5.x` series, particularly around gateway stability, channel connectivity (Telegram, Discord, Feishu, WeChat), and the `openai-codex` migration.

#### 2. Releases
**None.** No new releases were published today. The most recent stable versions appear to be the `2026.5.5` and `2026.5.6` hotfixes, which are generating the bulk of the reported regressions.

#### 3. Project Progress
While no new versions were cut, significant progress was made on fixing regressions and improving stability:
- **Security Fix:** PR [#73563](https://github.com/openclaw/openclaw/pull/73563) ("fix(security): inline redact into appendSessionTranscriptMessage") was merged, closing a leak where sensitive data was not redacted in all transcript write paths.
- **Gateway Scopes Fix:** PR [#79643](https://github.com/openclaw/openclaw/pull/79643) and [#78638](https://github.com/openclaw/openclaw/pull/78638) were merged, fixing a regression where `trusted-proxy` Control UI sessions lost their operator scopes (e.g., `operator.read`), causing RPC failures.
- **State Refactoring:** A massive PR [#78595](https://github.com/openclaw/openclaw/pull/78595) ("Refactor runtime state into SQLite") is in progress, aiming to replace scattered JSON/JSONL storage with a SQLite-backed system for better reliability.
- **Multi-Message Burst Fix:** PR [#79642](https://github.com/openclaw/openclaw/pull/79642) addresses a bug where tool-only turns produced no visible text, causing users to receive no response in chat channels.

#### 4. Community Hot Topics
The community is highly engaged, but their focus is on troubleshooting regressions and missing features:
- **The `openai-codex` Migration Crisis:** Issue [#78407](https://github.com/openclaw/openclaw/issues/78407) (19 comments) and [#79461](https://github.com/openclaw/openclaw/issues/79461) (4 comments) detail a critical bug where `openclaw doctor --fix` forcibly rewrites `openai-codex/*` model references to `openai/*`, breaking authentication for OAuth-only users. Despite Issue #78407 being closed, the fix appears incomplete, causing significant user frustration.
- **Gateway Instability After Upgrade:** Issue [#78402](https://github.com/openclaw/openclaw/issues/78402) (11 comments, 2 👍) reports a severe regression where the gateway becomes unresponsive, closing WebSocket connections with codes 1000/1005/1006. This is linked to event-loop starvation from stuck tool calls. The related PR [#77028](https://github.com/openclaw/openclaw/pull/77028) aims to stabilize event-loop health sampling.
- **Feature Request for Telegram Business Bot:** Issue [#20786](https://github.com/openclaw/openclaw/issues/20786) (7 comments, 3 👍) requests support for Telegram's Business API, highlighting a gap for users who want the agent to participate in business-connected personal chats.

#### 5. Bugs & Stability
The project is facing a significant stability regression cycle. Key issues reported today (or updated recently) include:

**Critical:**
- **Gateway Liveness Watchdog Restart Loop:** Issue [#78601](https://github.com/openclaw/openclaw/issues/78601) (5 comments) reports that the gateway's own liveness monitor is restarting it every few minutes due to a false positive on event-loop utilization (98%).
- **Event-Loop Starvation:** Issue [#78402](https://github.com/openclaw/openclaw/issues/78402) describes the gateway becoming unresponsive due to a stuck tool call. This is likely related to the liveness watchdog issue.

**High:**
- **Telegram DM Topics Broken:** Issue [#79455](https://github.com/openclaw/openclaw/issues/79455) (6 comments) reports that replies in Telegram DM topics are failing because the new delivery path uses `message_thread_id`, which Telegram now rejects.
- **Missing `operator.read` Scope:** Issue [#78508](https://github.com/openclaw/openclaw/issues/78508) (7 comments) describes a regression where the Control UI cannot load chat history due to missing scopes. *Fixed in PR #79643.*
- **WX/WeChat Plugin Broken:** Issues [#77837](https://github.com/openclaw/openclaw/issues/77837) (8 comments) and [#78376](https://github.com/openclaw/openclaw/issues/78376) (5 comments) report that the WeChat plugin is completely broken after upgrading to `2026.5.4`.

**Medium:**
- **Channel delivery failure:** Issue [#77908](https://github.com/openclaw/openclaw/issues/77908) "Non-main agent replies appear in WebUI but are not delivered back to Telegram topics or Discord channels" is a critical UX failure.
- **Feishu session key mismatch:** Issue [#78262](https://github.com/openclaw/openclaw/issues/78262) describes a session splitting bug in Feishu group topics.

#### 6. Feature Requests & Roadmap Signals
The community is requesting enhancements that will likely shape the roadmap:
- **Post-Subagent Completion Hook:** Issue [#22358](https://github.com/openclaw/openclaw/issues/22358) (11 comments) requests a hook to run actions after a sub-agent finishes, useful for generating trajectory summaries.
- **Direct Exec Mode for Cron Jobs:** Issue [#18160](https://github.com/openclaw/openclaw/issues/18160) (10 comments, 9 👍) proposes skipping the LLM for simple cron jobs to improve reliability and reduce latency.
- **Tiered Bootstrap File Loading:** Issue [#22438](https://github.com/openclaw/openclaw/issues/22438) (16 comments) requests a feature to prevent costly context files from being loaded in every session, saving tokens.
- **Capability-Based Permissions:** Issue [#12678](https://github.com/openclaw/openclaw/issues/12678) (5 comments) asks for an explicit permission model for skills and tools to prevent malicious actions.

**Prediction for next version:** Given the severity of the regression cycle, the next release will likely be a **`2026.5.7` hotfix** focused on the critical gateway stability issues and channel delivery regressions before any new features are implemented. The Capability-Based Permissions and Tiered Bootstrap Loading features are complex and may be deferred.

#### 7. User Feedback Summary
User sentiment is a mix of frustration with regressions and high expectations for stability.
- **Pain Points:** The most significant pain point is the "upgrade lottery." Users who update to resolve one issue (e.g., `v2026.5.5`) are immediately hit with new ones (e.g., scopes lost, gateway crash-loop, model allowlists broken). There is a clear cry for a **stable LTS channel**.
- **Use Cases:** Users are deeply integrated; they are using OpenClaw for personal automation (Voice messages on Matrix), professional communication (WeChat/Feishu workgroups), and development (deploying code to remote servers).
- **Satisfaction:** Users are satisfied with the *potential* of the tool (e.g., the "Most important feature" of memory) but are deeply dissatisfied with the current state of quality assurance, as evidenced by the high number of "worked before, now fails" reports.

#### 8. Backlog Watch
Several important issues appear to be stalled or lacking maintainer attention:
- **Memory Flush Not Firing (Issue [#12590](https://github.com/openclaw/openclaw/issues/12590)):** Closed, but the underlying issue of `memoryFlush` not firing reliably is a core reliability problem that may reappear.
- **MCP Server Tools Missing (Issue [#76063](https://github.com/openclaw/openclaw/issues/76063)):** A regression in `v2026.4.27` where MCP tools were not included in the agent request body. Marked as "fixed" but users confirm the issue persists. This has been open for 7 days with 4 comments.
- **Old Feature Requests:** Issues like [#8295](https://github.com/openclaw/openclaw/issues/8295) ("allowBots for Telegram") and [#14344](https://github.com/openclaw/openclaw/issues/14344) ("message delete for WhatsApp") are over a month old with no maintainer response, suggesting the core team is entirely consumed by the regression cycle.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided digests for **2026-05-09**.

---

### Cross-Project Comparison Report: Personal AI Agent Ecosystem

**Date:** 2026-05-09
**Analyst:** Senior Analyst, AI Agent & Open-Source Ecosystem

---

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a phase of **rapid maturation and stabilization**, characterized by a fundamental tension between feature velocity and reliability. While projects like **ZeroClaw** and **OpenClaw** ship significant new features (onboarding flows, gateway CRUD, agent management), they are simultaneously battling severe regression cycles, with users reporting broken core functionality after upgrades. A clear trend is the shift from CLI-only interfaces to embedded Web UIs, driven by community frustration, as seen in **NanoBot**, **PicoClaw**, and **Moltis**. The ecosystem is also grappling with architectural bifurcation, as **IronClaw** pursues a fundamental "Reborn" architecture rewrite, while others like **OpenClaw** and **ZeroClaw** focus on incremental, database-driven hardening.

### 2. Activity Comparison

The following table compares key activity metrics across the major projects for the 24-hour period ending 2026-05-09.

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Community Sentiment | Health Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ZeroClaw** | 50 | 41 | **Released (v0.7.5)** | Positive (features), but frustrated by S0 bugs | **8/10** (High output, but high risk) |
| **OpenClaw** | 394 | 500 | **Stabilization Sprint** | Frustrated (regressions), high expectations | **5/10** (Intense churn, regression crisis) |
| **IronClaw** | 12 | 47 | Pre-release (v0.28.0 proposed) | Silent (internal refactoring focus) | **7/10** (Focused, but user-facing features stalled) |
| **NanoBot** | 16 | 135 | None | Positive, but strong demand for Web UI | **8/10** (High activity, responsive maintainers) |
| **PicoClaw** | 21 | 33 | **Nightly (v0.2.8-nightly)** | Mixed (features good, Android patchy) | **7/10** (Healthy, minor regressions) |
| **CoPaw** | 36 | 38 | **Beta (v1.1.6-beta.1)** | Negative (performance lag, upgrades broken) | **5/10** (High community pain) |
| **LobsterAI** | 2 | 0 | None (Release prep) | No feedback (internal development) | **7/10** (Stable, polishing for release) |
| **NullClaw** | 2 | 1 | **Nightly released** | Silent (bugs reported, no response) | **4/10** (Low activity, critical gaps) |
| **Moltis** | 0 | 5 | **Released (20260508.01)** | No feedback (healthy, quiet) | **7/10** (Stable, maturing UI) |
| **NanoClaw** | 5 | 18 | None | Positive (reliability fixes), but data loss risk | **7/10** (Fast-moving, good fixes) |
| **ZeptoClaw** | 0 | 1 | None | Neutral (no feedback) | **6/10** (Quiet, but stable) |

*Note: Health Score is a qualitative metric considering activity, community satisfaction, and stability risk.*

### 3. OpenClaw's Position

**OpenClaw** remains the core reference implementation and the ecosystem's largest and most active project, but its position is increasingly precarious.

- **Advantages:**
    - **Sheer Scale:** Dominates in activity (394 issues, 500 PRs updated), indicating the largest community and contributor base.
    - **Feature Depth:** The most comprehensive platform, with deep integrations (A2A, MCP, gateways, multiple channels).
    - **Innovation Driver:** Major features like the state refactoring into SQLite (#78595) signal architectural leadership.

- **Disadvantages vs. Peers:**
    - **Regression Crisis:** The `2026.5.x` release cycle is generating severe user frustration. **ZeroClaw** shipped a major release (v0.7.5) with fewer user-reported regressions, demonstrating more stable QA.
    - **Maintenance Debt:** With 357 open PRs, the review queue is a bottleneck, threatening contributor morale. **NanoBot** and **NanoClaw** show faster turnaround on community-filed bugs.
    - **Instability:** The "upgrade lottery" is eroding user trust, while **IronClaw** and **Moltis** are perceived as more stable, albeit with a smaller feature set.

- **Technical Approach Difference:**
    - Unlike **ZeroClaw**'s low-level Rust core and **Moltis**'s lightweight Python stack, OpenClaw's heavy Python monolith is showing its strain under rapid iteration, evidenced by event-loop starvation issues (#78402) that simpler architectures avoid.

### 4. Shared Technical Focus Areas

Several technical requirements are emerging across multiple projects, indicating ecosystem-wide pain points.

| Focus Area | Affected Projects | Specific Need |
| :--- | :--- | :--- |
| **Web UI / UX Maturity** | **NanoBot**, **PicoClaw**, **Moltis**, **CoPaw** | Community is demanding polished, native web interfaces to replace CLI. `LobsterAI`'s CodeMirror 6 integration (#1922) is a benchmark. |
| **Channel Reliability** | **OpenClaw**, **NanoClaw**, **CoPaw** | Critical bugs affecting **Telegram** (OpenClaw #79455, NullClaw #901), **WhatsApp** (NanoClaw #2194), and **WeChat** (OpenClaw #77837). |
| **Database-Driven Config** | **OpenClaw**, **NanoClaw**, **ZeroClaw** | Moving from fragile environment variables or JSON files to a central database (SQLite/Postgres) for configuration and state. |
| **Provider Compatibility** | **OpenClaw**, **PicoClaw**, **ZeroClaw**, **IronClaw** | Tool schema issues with **DeepSeek**, **Mistral**, **Llama.cpp**, and **Ollama** are causing repeated failures. |
| **Security & Permissions** | **OpenClaw**, **ZeroClaw**, **NullClaw** | Missing or broken user-approval flows for risky actions (shell, file write) and data redaction. |
| **External Agent Backends** | **Moltis**, **ZeroClaw**, **OpenClaw** | Support for **ACP**, **Codex CLI**, and **A2A** protocols is a growing priority for multi-agent orchestration. |
| **Chinese Messaging** | **PicoClaw**, **CoPaw**, **ZeroClaw**, **IronClaw** | Strong demand for **Feishu (Lark)**, **WeCom (WeChat Work)**, and **QQ** channel support from a large Chinese user base. |

### 5. Differentiation Analysis

Projects are carving distinct niches through differences in architecture, target audience, and core philosophy.

| Project | Core Differentiator | Target User | Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | The "Standard Library" for agents | Power users, sysadmins | Heavy Python monolith, extensive integrations |
| **ZeroClaw** | Performance & Security (Rust) | DevOps, security-conscious users | Low-level Rust core, SQLite, strict permissions |
| **IronClaw** | Enterprise "Reborn" Architecture | Scale users, production deployments | Modular, high-availability, mission-aware |
| **NanoBot** | Simplicity & Responsiveness | Individual developers, hobbyists | Lightweight Python, fast development cycle |
| **PicoClaw** | Embedded & Mobile (SiPeed) | Hobbyists, embedded devs | ARM-optimized, edge-compute focused |
| **CoPaw** | Multi-Agent Collaboration | Teams, complex workflows | Agent orchestration, A2A workflows |
| **Moltis** | User Experience & Plugins | End-users, non-technical users | Clean web UI, plugin ecosystem |
| **LobsterAI** | Enterprise Polish (Netease) | Business users | UI-centric, stable release cycles |
| **NanoClaw** | Agent Spawning & Containers | Kubernetes users, cloud-native | Containerized per-session agents, high scalability |
| **NullClaw** | Minimalist Reference | Developers, researchers | Lightweight, specification-driven, focusing on core loops |
| **ZeptoClaw** | Minimalist / Learning | Learners, new-comers | Very small codebase, easy to understand |

### 6. Community Momentum & Maturity

Projects fall into distinct tiers based on their current development velocity and stability.

- **Tier 1: Rapid Iteration & High Churn (High Risk/High Reward)**
    - **OpenClaw**, **NanoClaw**, **ZeroClaw**: Shipping features extremely fast, but with significant regression risk. These are the ecosystem's engines of innovation but require the most caution from adopters.

- **Tier 2: Focused Development & Stabilization**
    - **IronClaw**, **PicoClaw**, **NanoBot**: Actively developing major new features (Reborn, v0.2.8, native Web UI) while maintaining a reasonable level of core stability. They are good choices for users who want new features without the "upgrade lottery."

- **Tier 3: Preparation & Polish**
    - **LobsterAI**, **Moltis**: In a clear release-preparation phase, polishing UI and fixing internal bugs. These projects represent stable, user-ready options, though feature velocity is lower.

- **Tier 4: Stagnation / Low Activity**
    - **TinyClaw**, **ZeptoClaw**: No activity or very low activity. These projects may be abandoned, experimental, or in a maintenance-only phase.
    - **NullClaw**: Low activity combined with critical, unfixed bugs (missing approval flow, broken channel detection). This project risks becoming non-functional.

- **Tier 5: Severe Distress**
    - **CoPaw**: High activity but overwhelming negative community sentiment due to performance and reliability regressions. It needs a "stop-the-line" stabilization sprint.

### 7. Trend Signals & Developer Value

The following trends have clear implications for AI agent developers:

1.  **The "Newbie" Wall is Crumbling:** The collective push for **Web UIs**, **in-app onboarding** (ZeroClaw v0.7.5), and **Docker "full images"** (ZeroClaw #3642) signals that the ecosystem is shifting from "developer-only" to "power-user" friendly.

2.  **Data-Backed Configuration is Non-Negotiable:** The move towards **SQLite-backed state** (OpenClaw #78595) and **database-driven config** (Nanoclaw #2357) is a response to a painful past. Developers building on these projects should plan for DB-based persistence from day one.

3.  **Tool/Provider Compatibility is the #1 Integration Headache:** The repeated schema issues with **DeepSeek**, **Mistral**, and **Kimi** (ZeroClaw #5600) are a clear signal that any agent framework's value is directly tied to its provider abstraction layer. The ecosystem needs a standard tool-call schema validation library.

4.  **The "Security Tax" is Coming Due:** The numerous issues around **missing approval flows** (NullClaw #900, ZeroClaw #6539), **data redaction leaks** (OpenClaw #73563), and **path traversal bugs** (ZeroClaw #5518) indicate that the "move fast" phase is ending. A focus on **capability-based permissions** (OpenClaw #12678) will be a key differentiator.

5.  **Chinese Market is a Major Driver:** The strong, consistent demand for **Feishu**, **WeCom**, **QQ**, and **Baidu** integration, originating from multiple projects (PicoClaw, CoPaw, ZeroClaw, IronClaw), confirms that the Asia-Pacific region is a massive, and currently underserved, user base.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-05-09.

---

### NanoBot Project Digest – 2026-05-09

**Report generated:** 2026-05-09

---

### 1. Today's Overview

NanoBot experienced high activity today, driven by a surge in 135 updated Pull Requests and 16 updated Issues. While the project released no new versions, a substantial number of PRs were merged (25), indicating robust progress on bug fixes and features. The community is heavily engaged in a long-running conversation regarding the development and integration of a native Web UI, which remains the single most discussed topic. Overall, the project is in a healthy state with active maintenance and a very responsive core team.

### 2. Releases

**None.** As of the data cutoff, there have been no new releases since the last digest.

### 3. Project Progress

Twenty-five PRs were merged or closed today, signaling significant progress. The following areas saw key advancements:

- **Web UI (Embedded):** Multiple PRs from user `chengyongru` merged to fix and secure the embedded Web UI. This includes fixes for LAN access (`#3656`), required authentication for token bootstrap (`#3658`), and handling of falsy input values in the onboarding wizard (`#3690`).
- **CLI Stability:** Two critical CLI fixes were merged: handling retry-wait messages without terminal corruption (`#3705`) and sanitizing surrogate code points on Windows to prevent JSON crashes (`#3697`).
- **Logging & Observability:** A major refactoring merged **PR #3651**, which improves traceback preservation and injects channel context into logs, significantly aiding production debugging. This was followed by PR #3678 to complete the logging normalization.
- **Bug Fixes:** Critical bugs were squashed, including a fix for 100% CPU spin caused by MCP server connections (`#3640`) and a sanity check for corrupted session files (`#3680`).

### 4. Community Hot Topics

The community is primarily focused on the fate of the **Web UI**, with two older issues receiving significant attention recently.

- **Issue #2949 – "Should nanobot have its own WebUI?" (CLOSED)**. This long-standing feature discussion remains the top-voted topic of the last 24 hours with 13 👍. The discussion has evolved from "should we?" to "how do we build it?", given the large number of competing PRs (e.g., `#3030`, `#1707`, `#2050`, `#2972`). The underlying need is clear: the community strongly desires a browser-based interface as an alternative to the CLI.
- **Issue #1922 – "I've created [nanobot-webui]" (CLOSED)**. User `Good0007` shared a self-hosted external panel, receiving 10 👍. This signals a secondary need: the community is so eager for a Web UI that users are building their own, highlighting a gap the core team must address.

### 5. Bugs & Stability

The project team addressed several stability issues today, with the following ranked by severity:

- **HIGH: 100% CPU Spin with MCP Servers.** Fixed by PR #3640. This was a critical performance regression.
- **MEDIUM: `prompt_toolkit` Surrogate Crashes.** Fixed by PR #3697. This bug caused data loss and CLI crashes on Windows when using emoji.
- **MEDIUM: Loop Detection and Escalation (Remaining).** Two Issues (#3699, #3700) from `andrew-ellis-engineering` detail the need for anti-loop guards on local tool calls. While the first guard has been added, a follow-up for an escalation policy remains an open feature.
- **LOW: Web UI LAN Auth Bypass.** Fixed by PR #3658. An unauthenticated LAN access vulnerability was quickly patched.
- **LOW: Feishu (Lark) File and Topic Isolation.** Two bugs (#3694, #3692) regarding files being sent to the wrong topic and the lack of a toggle for topic isolation were reported. No fix PRs are yet open.

### 6. Feature Requests & Roadmap Signals

- **`nanobot update` Command (Issue #3421 - CLOSED):** This feature request for a streamlined CLI update command was highly engaged. Given the project's fast pace, this is a strong candidate for the next minor release.
- **Customizable Bot Name & Icon (Issue #3650 - OPEN):** A user-friendly request to brand the bot with a custom name and logo instead of "nanobot" and the default cat icon. Likely to be implemented soon.
- **OpenTelemetry Traces (PR #3173 - OPEN):** A large, complex PR adding observability via OpenTelemetry, supporting Langfuse and LangSmith. This is a strong signal of increasing enterprise adoption.
- **Specialized Subagent Profiles (Issue #1012 - OPEN):** A long-standing feature request for defining different agent profiles (e.g., "researcher" with web tools, "coder" with exec tools). This is essential for advanced agent orchestration but remains unanswered.

### 7. User Feedback Summary

- **Pain Point:** The lack of a unified "official" Web UI is the dominant user complaint/request. Users are frustrated by the CLI-only experience and are actively building alternatives.
- **Pain Point:** Configuration transparency is a concern, particularly around transcription providers (Issue #3637) and feature toggles (e.g., Feishu topic isolation).
- **Satisfaction:** Users who have deployed NanoBot (e.g., via Docker) are highly satisfied with its core functionality and are pushing for more advanced features like observability and agent customization.
- **Use Case:** There is a clear trend of users integrating NanoBot into local automation stacks (e.g., Home Assistant) and demanding better session and channel management.

### 8. Backlog Watch

The following items lack maintainer attention:

1.  **Issue #1012 – Add subagent profiles.** A feature request with high potential impact, open since Feb 22. The one comment from May 9th suggests it is not entirely forgotten, but it has no scheduled work.
2.  **Issue #787 – Changes to agent loop session recording.** An open PR with a significant architectural change to the agent loop. It has 2 comments but no recent activity from a maintainer, indicating a potential bottleneck in review capacity.
3.  **Issue #1412 – Processing from another bot.** Open for over 2 months, this issue about inter-bot communication for Home Assistant has only 2 comments and has been largely ignored, possibly due to its niche use case.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-09

## 1. Today's Overview
PicoClaw shows **high community engagement** with 21 issues and 33 PRs updated in the last 24 hours, indicating an actively maintained project nearing its v0.2.8 stable release. The team merged/closed **7 PRs** and **14 issues**, reflecting strong momentum on bug fixes and quality-of-life improvements. A new **nightly build (v0.2.8-nightly)** was published, though labeled as potentially unstable. The project's health appears **strong**, with responsive maintainer attention to both long-standing enhancement requests and fresh regression reports.

## 2. Releases
**New: nightly build v0.2.8-nightly.20260509.8508f806**
- Automated nightly build tracking the `main` branch
- **⚠️ Warning:** Unstable; intended for testing only
- No breaking changes or migration notes provided
- Full changelog: [compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. Project Progress
**Merged/Closed PRs Today (7):**
- **[#2655](https://github.com/sipeed/picoclaw/pull/2655)** — **Critical:** Restored verified unified kernel baseline (securebus execute-once semantics, redaction-safe persistence, failed-run terminalization). Filed under `bug`, `agent`, `tool`, `ci`, `build`, `docker`.
- **[#2522](https://github.com/sipeed/picoclaw/pull/2522)** — **Streaming usage support for OpenAI-compatible provider** (enables `stream_options.include_usage` for native OpenAI/Azure endpoints)
- **[#2128](https://github.com/sipeed/picoclaw/pull/2128)** — Fix for **LM Studio compatibility**: ensures tool parameters always have valid `properties` field in JSON Schema, resolving strict OpenAI-compatible API errors.
- **[#2652](https://github.com/sipeed/picoclaw/pull/2652)** — GitHub Copilot provider support (closed/merged)
- **[#2649](https://github.com/sipeed/picoclaw/pull/2649)** — Added **serial port/ UART tool support** for embedded development
- **[#2527](https://github.com/sipeed/picoclaw/pull/2527)** — Made `fresh_tail_size` configurable in Seahorse agent (no longer hardcoded to 32)
- **[#2515](https://github.com/sipeed/picoclaw/pull/2515)** — Infrastructure for **external memory integrations** (mem0, Supermemory, HydraDB)

**Key feature advances still open:**
- [#2830](https://github.com/sipeed/picoclaw/pull/2830) **Async delivery policy for spawned subagent results** (direct fix for #2829)
- [#2826](https://github.com/sipeed/picoclaw/pull/2826) **Relative path resolution fix in exec tool safety guard** (fixes #2749)
- [#2752](https://github.com/sipeed/picoclaw/pull/2752) **Model configuration workflow improvements** in web UI (upstream model fetching, provider-aware validation, connectivity testing)
- [#2770](https://github.com/sipeed/picoclaw/pull/2770) **MCP section in config web UI** (manage MCP enable/discovery settings and servers)
- [#2763](https://github.com/sipeed/picoclaw/pull/2763) **Gemini Google Search provider** for `web_search` tool

## 4. Community Hot Topics
- **[#28](https://github.com/sipeed/picoclaw/issues/28)** *"Feat Request: LM Studio Easy Connect"*  
  **18 comments, 2 👍** — Long-running request (since Feb 2026) for simplified LM Studio provider configuration, especially on Android. Remainder of main activity is from recently revived discussion.

- **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** *"exec工具guardCommand方法问题"*  
  **10 comments, 2 👍** — Critical safety guard bug: `restrict_to_workspace` incorrectly blocks valid commands (e.g., `curl` calls). **Now has a fix PR**: [#2826](https://github.com/sipeed/picoclaw/pull/2826) by yuxuan-7814.

- **[#2376](https://github.com/sipeed/picoclaw/issues/2376)** *"Option to disable 'Enter' key from sending messages"*  
  **5 comments** — Closed issue reflecting strong user preference for separate send button behavior on mobile (Samsung Galaxy A73).

- **[#2674](https://github.com/sipeed/picoclaw/issues/2674)** *"Codex OAuth: empty assistant response"*  
  **3 👍** — Critical UX bug: ChatGPT Codex backend returns empty responses via `response.output_item.done` streaming. High impact for ChatGPT OAuth users.

- **[#2580](https://github.com/sipeed/picoclaw/issues/2580)** *"飞书 (Feishu) 频道优化请求"*  
  **2 👍** — Chinese users requesting Feishu/Lark plugin enhancements (streaming output, model/provider display, usage stats). Demonstrates strong Chinese-language user base.

## 5. Bugs & Stability
**Severity: High**

| Issue | Description | Status | Fix Available? |
|-------|-------------|--------|----------------|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **Codex OAuth: empty assistant response** — ChatGPT backend streaming breakage | Open | No |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | **exec tool safety guard blocks valid commands** — `restrict_to_workspace` false positive | Open | Yes: [#2826](https://github.com/sipeed/picoclaw/pull/2826) |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | **Android v0.2.8 — cannot access any data from tabs** | Open | No |
| [#2785](https://github.com/sipeed/picoclaw/issues/2785) | **Feishu notification center only shows first tool call** when `separate_messages: false` | Open | No |
| [#2738](https://github.com/sipeed/picoclaw/issues/2738) | **Image recognition broken in v0.2.8** — uploaded images unrecognizable | Closed | Not disclosed |

**Stability improvements merged today:**
- [#2655](https://github.com/sipeed/picoclaw/pull/2655) Restored unified kernel baseline (critical for execution guarantees)
- [#2823](https://github.com/sipeed/picoclaw/pull/2823) Dismiss tool feedback when outbound is skipped (avoids stale messages)
- [#2822](https://github.com/sipeed/picoclaw/pull/2822) Dismiss child tool feedback after sync completion (session cleanup)
- [#2828](https://github.com/sipeed/picoclaw/pull/2828) Transcribe queued voice follow-ups (audio input fix)

## 6. Feature Requests & Roadmap Signals
**Likely in next stable release (>v0.2.8):**
- **MCP config UI** ([#2770](https://github.com/sipeed/picoclaw/pull/2770)) — User-facing MCP management
- **Gemini web search provider** ([#2763](https://github.com/sipeed/picoclaw/pull/2763)) — Alternative to existing web_search backends
- **Async result delivery policy for spawn** ([#2830](https://github.com/sipeed/picoclaw/pull/2830)) — Solves double-turn problem with subagent results
- **Model configuration workflow** ([#2752](https://github.com/sipeed/picoclaw/pull/2752)) — Better model picker, connectivity testing

**Strong community desire (high vote counts):**
- **LM Studio Easy Connect** ([#28](https://github.com/sipeed/picoclaw/issues/28)) — 2 👍, 18 comments
- **Compiled builds with WhatsApp support** ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) — 1 👍, need for Raspberry Pi
- **External memory provider integration** ([#2515](https://github.com/sipeed/picoclaw/issues/2515)) — 0 👍 but merged today
- **Feishu/Lark plugin optimization** ([#2580](https://github.com/sipeed/picoclaw/issues/2580)) — 2 👍 from Chinese users

**Lower priority but notable:**
- GitHub Copilot provider ([#2652](https://github.com/sipeed/picoclaw/issues/2652))
- Serial port/UART tool ([#2649](https://github.com/sipeed/picoclaw/issues/2649))
- Multi-agent discovery prompt ([#2158](https://github.com/sipeed/picoclaw/pull/2158))
- Native audio input for multimodal LLMs ([#2626](https://github.com/sipeed/picoclaw/pull/2626))

## 7. User Feedback Summary
**Pain Points:**
- **Android/mobile UX friction:** Enter key sends messages instead of newline ([#2376], fixed); Android v0.2.8 tab access completely broken ([#2744])
- **WhatsApp migration failures:** LID-format accounts silently drop messages; `group_trigger.mention_only` completely non-functional ([#2540], [#2541] — both closed with fixes)
- **Safety guard over-blocking:** `restrict_to_workspace` blocks legitimate commands like `curl` ([#1042])
- **Image recognition regression:** v0.2.8 broke image uploads ([#2738])
- **Feishu notification clutter:** Tool feedback not showing correctly ([#2785])

**Positive Signals:**
- Strong engagement from Chinese-speaking community — Feishu, Baidu search requests
- Active "new contributor" PRs ([#2826], [#2784] README fix)
- Responsive maintainers: 21 items updated in 24h

## 8. Backlog Watch
**Critical/High Priority — Needs Maintainer Attention:**

| Issue/PR | Days Since Last Update | Reason |
|----------|----------------------|--------|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) *Codex OAuth empty response* | 13 days | High impact (3👍), no fix PR yet |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) *WhatsApp compiled builds* | 17 days (stale-labeled) | Blocks rapid updates for Pi users |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) *Android tabs broken* | 8 days | Fresh regression in v0.2.8 |
| [#2785](https://github.com/sipeed/picoclaw/issues/2785) *Feishu notification bug* | 3 days | Affects Chinese user base |
| [#2158](https://github.com/sipeed/picoclaw/pull/2158) *Multi-agent discovery prompt* | 41 days | Large feature PR, needs review |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) *SecureString config panic fix* | 37 days (stale-labeled) | Fixes potential crash |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) *Bedrock streaming provider* | 16 days (stale-labeled) | New provider, improves AWS integration |

**Notable Stale Items to Watch:**
- [#2515](https://github.com/sipeed/picoclaw/issues/2515) *Memory system integration* — Merged but no follow-up on implementation details
- [#2593](https://github.com/sipeed/picoclaw/issues/2593) *Resource-counting bug* — Low detail, likely will be closed without resolution

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-09

## Today's Overview

NanoClaw sees **very high activity** today with 18 PRs and 5 issues updated in the last 24 hours, signaling a significant development push and active community contributions. The project merged 5 PRs today, including two critical shutdown fixes and a major infrastructure move from environment-variable configuration to database-backed settings. However, a newly filed issue about the setup script silently deleting agent configuration files (#2360) highlights a recurring user trust concern. Overall, the project is in a healthy, fast-moving state with strong maintainer engagement and a growing contributor base, though the volume of open PRs (13) suggests the review queue is deepening.

## Releases

No new releases today. The last release (2.0.45) introduced the `ncl` CLI binary, which is still causing upgrade-path issues tracked in #2355.

## Project Progress

**5 PRs merged/closed today:**

- **#2359** — `fix(shutdown): drain in-flight dispatchResponse on SIGTERM` (Joi) — Companion fix for the action-dispatch path, preventing dropped replies on SIGTERM due to a fire-and-forget race condition.
- **#2358** — `fix(shutdown): drain in-flight routeInbound before exit` (Joi) — Critical fix for dropped outbound replies on launchd restarts, container upgrades, and deploys. Root cause traced to the Feb 6 graceful shutdown not covering the `routeInbound` path.
- **#2357** — `feat(intake): replace env-var allowlist with messaging_groups.auto_url_intake column + /intake slash command` (Joi) — Major refactor moving URL intake gating from `INTAKE_ENABLED_PLATFORM_IDS` to a per-channel database column, plus a new `/intake` slash command for toggling.
- **#2350** — `feat(cli): add ncl admin CLI` (gavrielc) — New `ncl` administrative CLI for querying/modifying the central database, with Unix socket transport on the host side and container-side transport through the existing socket.
- **#2300** — `setup: correct Slack member-ID card directions` (alipgoldberg) — UX fix correcting incorrect positioning and icon glyph in the Slack setup wizard.

**Key advances:** The shutdown drain fixes address a class of reliability bugs that have likely been causing silent message loss for users on managed hosts. The `ncl` CLI and intake refactor represent systematic infrastructure improvements toward database-driven configuration.

## Community Hot Topics

**Most engaging issue today:**

- **#2360** (new) — *"Setup script silently deletes existing groups/*/CLAUDE.md without warning or backup"* — Filed by alexli-77, describing how `bash nanoclaw.sh` on a re-run destroys all custom agent personality configuration with no warning, backup, or log. **0 comments yet** but potentially the highest-stakes UX issue in the queue. [GitHub](https://github.com/qwibitai/nanoclaw/issues/2360)

**Most commented PR in the last 24h:**

- **#2359** and **#2358** — Both shutdown fixes received no comments (likely coordinated internal reviews), but their companion relation to a43edc1 suggests this is part of a larger stability push.

**Longest-running open PRs still active:**

- **#1912** (Apr 22), **#1913** (Apr 22), **#1916** (Apr 22), **#1917** (Apr 22) — All from boskodev790, four separate PRs fixing container output parsing, `@Andy` trigger references, and env var validation. These have been open for **17 days** without updates, indicating a possible review bottleneck. [GitHub](https://github.com/qwibitai/nanoclaw/pull/1912)

**Underlying needs:** The community is clearly pushing for production hardening — cleaner shutdowns, better CLI tooling, and database-driven configuration. The interest in Kubernetes container runtime (#2354) and the volume of container-related PRs (6 this week) signal growing demand for cloud-native deployment.

## Bugs & Stability

**Critical severity:**

1. **#2194** — *"WhatsApp LID→phone JID mapping not persisted across restarts"* (OPEN, 9 days old, 1 comment) — On every restart, the in-memory cache of WhatsApp LID-to-phone mappings is lost, causing routing failures for LID-based senders. **No fix PR exists yet.** Impact: High — WhatsApp messages are silently lost or misrouted after any restart. [GitHub](https://github.com/qwibitai/nanoclaw/issues/2194)

2. **#2360** — *"Setup script silently deletes existing groups/*/CLAUDE.md"* (OPEN, filed today, 0 comments) — Re-running `bash nanoclaw.sh` destroys all user-customized agent personalities with no warning. Impact: High — permanent data loss for users who re-run setup. [GitHub](https://github.com/qwibitai/nanoclaw/issues/2360)

**High severity:**

3. **#2196** — *"host-sweep: deleteOrphanProcessingClaims crashes with 'attempt to write a readonly database'"* (CLOSED) — The orphan cleanup function opens the database read-only and then tries to write. Though closed, the root cause pattern (read-only DB open) may recur in other sweep paths. [GitHub](https://github.com/qwibitai/nanoclaw/issues/2196)

4. **#2355** — *"bug(update-nanoclaw): ncl not added to PATH for installs upgrading past 2.0.45"* (OPEN, 2 days old) — Upgrading users don't get the `~/.local/bin/ncl` symlink, breaking CLI access. **Fix PR #2356 is open** (by glifocat). [GitHub](https://github.com/qwibitai/nanoclaw/issues/2355)

**Medium severity:**

5. **#2352** — *"fix(container-runner): raise install_packages build timeout to 15min"* (PR OPEN) — `install_packages` self-mod flow times out after 5 minutes on slow networks, leaving agent build in an inconsistent state. Simple timeout fix proposed. [GitHub](https://github.com/qwibitai/nanoclaw/pull/2352)

**Today's merged fixes:**
- **#2358** and **#2359** — Both fix SIGTERM race conditions that caused dropped replies. These are critical reliability fixes that should reduce the "agent didn't respond" class of bugs.
- **#2357** — Intake refactor (not a bug fix but removes a fragile env-var gating mechanism).

## Feature Requests & Roadmap Signals

**High-likelihood for next version:**

1. **#2354** — *"feat: Kubernetes container runtime for agent spawning"* (OPEN, 1 day old) — Request to spawn per-session agent containers as Kubernetes pods instead of local Docker. Given the 5 other container-related PRs this week, this aligns with a clear direction toward production orchestration. **Prediction: Likely accepted as a configuration option in the next 2-3 releases.** [GitHub](https://github.com/qwibitai/nanoclaw/issues/2354)

2. **#2351** — *"feat(db): move container config from filesystem to DB"* (PR OPEN, gavrielc) — Moves container runtime config from `groups/<folder>/container.json` to a new `container_configs` table. This is a natural follow-on to the intake refactor (#2357) and `ncl` CLI (#2350). **Prediction: Likely to land in the next minor release (2.1.0).** [GitHub](https://github.com/qwibitai/nanoclaw/pull/2351)

3. **#2346** — *"fix(formatter): treat unknown slash commands as normal chat"* (PR OPEN, SidhayaPravda618) — Unknown slash commands are currently passed through as Claude Code commands, causing silent message drops. Simple classification fix. **Prediction: High priority, likely merged within days.** [GitHub](https://github.com/qwibitai/nanoclaw/pull/2346)

**Medium-likelihood:**

4. **#2330** — *"fix(container): make axios MCP servers work through OneCLI's proxy"* (PR OPEN, Tij8i) — Fixes HTTP proxy compatibility for axios-based MCP servers. **Prediction: Will merge once reviewed; addresses a known pain point for MCP users.** [GitHub](https://github.com/qwibitai/nanoclaw/pull/2330)

5. **#2349** — *"fix(mount-security): tolerate allowlist entries missing path field"* (PR OPEN, cfis) — Hardens mount security against malformed allowlist entries. **Prediction: Low risk, likely merged.** [GitHub](https://github.com/qwibitai/nanoclaw/pull/2349)

**Lower likelihood / longer-term:**

6. **#2348** — *"fix(channels/whatsapp): single-timer reconnect + clean teardown"* (PR OPEN, cfis) — Refactors WhatsApp reconnection logic. Useful, but the priority may be lower than WhatsApp LID persistence (#2194). [GitHub](https://github.com/qwibitai/nanoclaw/pull/2348)

## User Feedback Summary

**Pain points:**

- **Lost configuration on re-run** (#2360) — "Users who had spent time customizing their agent personality lose all of it on a re-run." This is the most visceral user complaint today — file deletion without warning violates user trust.
- **Missing PATH after upgrade** (#2355) — glifocat reports that `ncl` CLI is installed but not placed on PATH, forcing users to discover `bin/ncl` or `pnpm ncl` independently. This affects all users upgrading past 2.0.45.
- **Silent message loss on restarts** (#2358, #2359) — The shutdown race conditions have likely been causing "agent ghosting" symptoms (user sends message, gets no reply) on managed hosts. The merged fixes today are a direct response.
- **WhatsApp LID routing failure** (#2194) — Users on WhatsApp with LID-based contacts lose routing after every restart, requiring manual cache reconstruction.

**Positive signals:**

- **Strong community contribution quality** — The 18 PRs today span reliability, CLI, configuration, container runtime, and documentation — indicating a healthy, diverse contributor base.
- **Maintainer responsiveness** — Both shutdown fixes (Joi) were opened and merged the same day, showing rapid response to reliability issues.
- **Infrastructure maturation** — The `ncl` CLI, DB-driven config, and intake refactor signal that the project is investing in production readiness, which experienced users will value.

**Satisfaction indicators:** The rapid merge turnaround on critical fixes (#2358, #2359) and the willingness to refactor core infrastructure (#2357, #2351) suggest a maintainer team that values quality and listens to the community.

## Backlog Watch

**PRs open for 17+ days needing maintainer attention:**

1. **#1912** — *"fix: handle empty container stdout with clear error in fallback parser"* (Apr 22, 17 days open) — boskodev790. Fixes a crash when containers exit without output. No maintainer activity since mid-April. [GitHub](https://github.com/qwibitai/nanoclaw/pull/1912)

2. **#1913** — *"fix: rename @Andy trigger references when assistant name changes"* (Apr 22, 17 days open) — boskodev790. Completes the `ASSISTANT_NAME` refactoring in `register.ts`. No maintainer activity. [GitHub](https://github.com/qwibitai/nanoclaw/pull/1913)

3. **#1916** — *"fix: guard numeric config env vars against NaN and non-positive values"* (Apr 22, 17 days open) — boskodev790. Adds input validation for `CONTAINER_TIMEOUT`, `CONTAINER_MAX_OUTPUT_SIZE`, `IDLE_TIMEOUT`. No maintainer activity. [GitHub](https://github.com/qwibitai/nanoclaw/pull/1916)

4. **#1917** — *"fix: rename @Andy trigger references in runtime group registration"* (Apr 22, 17 days open) — boskodev790. Similar to #1913 but focused on the runtime registration path. No maintainer activity. [GitHub](https://github.com/qwibitai/nanoclaw/pull/1917)

**Risk:** These four PRs from the same contributor cover related fixes that have been "ready for review" for over two weeks. If left much longer, they may need rebasing or conflict resolution, risking the contributor's effort going to waste.

**Other notable backlogs:**

- **#2339** — *"fix(test): add missing in_reply_to to A2A test objects"* (May 7, 2 days open) — Addresses a TypeScript build break caused by #2267. Small fix, could be merged quickly. [GitHub](https://github.com/qwibitai/nanoclaw/pull/2339)

- **#2353** — *"fix(session-manager): chown new session dirs when host runs as root"* (May 8, 1 day open) — Linux-specific fix for container spawn loops on network filesystems. Important for self-hosted users. [GitHub](https://github.com/qwibitai/nanoclaw/pull/2353)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-05-09**.

---

## NullClaw Project Digest — 2026-05-09

### 1. Today's Overview
Project activity is **moderate**, with a focus on operational improvements and two new bug reports. A new nightly prerelease was successfully published via CI (PR #899), enabling automated rolling builds. However, two open issues surfaced today highlighting critical gaps: a Telegram channel configuration detection bug and a missing user-approval prompt mechanism that causes supervised mode to silently fail. The community is also actively iterating on a structured data governance layer (PR #885), though that work remains in draft.

### 2. Releases
**New Version:** `nightly-20260509-5d533da` (Nightly 2026-05-09)

- **Changes:** This is a scheduled nightly prerelease. It is published as a prerelease tagged `nightly`. No user-facing feature changes are documented in the release notes.
- **Breaking Changes:** None.
- **Migration Notes:** No migration steps required for this build; it is intended for testing bleeding-edge CI changes.

### 3. Project Progress
One pull request was **merged/closed today**:

- **PR #899** (Closed/Merged): *ci: publish nightly prerelease* — Updated the reusable `nullbuilder` workflow to support `publish_release`, enabling automatic publishing of nightly builds. This improves the release cadence for test builds. [GitHub Link](https://github.com/nullclaw/nullclaw/pull/899)

One PR remains **open** with updates today:
- **PR #885** (Open, Draft): *feat(memory): Add NullClaw Data Governance Layer* — A hackathon submission adding data governance capabilities. Updated yesterday with further iteration. [GitHub Link](https://github.com/nullclaw/nullclaw/pull/885)

### 4. Community Hot Topics
The most active items today are both new issues with no comments yet, but they represent high-priority concerns:

- **Issue #901**: *`channel list` always shows "not configured" for telegram despite correct config.json* — The Telegram channel detection logic is broken; `config` shows correct configuration but `channel list` disagrees. This blocks users from using Telegram as a messaging channel. [GitHub Link](https://github.com/nullclaw/nullclaw/issues/901)
- **Issue #900**: *`approval_request` defined in spec but never emitted — supervised mode fails risky commands instead of prompting* — The core architecture defines an approval round-trip for risky commands, but it was never implemented. This means supervised mode silently fails instead of asking the user for approval, undermining the security model. [GitHub Link](https://github.com/nullclaw/nullclaw/issues/900)

**Underlying need:** Users need reliable channel configuration and a working supervised/interactive security flow — the current system is non-functional for both Telegram setup and secure tool execution.

### 5. Bugs & Stability
Two bugs reported today, ranked by severity:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **High** | [#900](https://github.com/nullclaw/nullclaw/issues/900) | `approval_request` never emitted; supervised mode fails commands without user prompt, breaking security policy entirely. | No |
| **High** | [#901](https://github.com/nullclaw/nullclaw/issues/901) | Telegram channel detection mismatch; `channel list` shows "not configured" despite valid config, preventing Telegram channel use. | No |

Neither bug has an associated fix PR yet. Both are likely to require nontrivial changes to channel state management (Issue #901) and the webchannel event pipeline (Issue #900).

### 6. Feature Requests & Roadmap Signals
The only active feature-level work is:

- **PR #885 (Draft)**: *Data Governance Layer* — A hackathon submission from team "Безопасность бэкофиса (DS)". This could land in an upcoming minor release if reviewed and merged, adding data governance/memory policy controls. The PR is still early-stage (draft).

**Prediction:** If PR #885 is polished, it may target the next stable release (v2026.4.x or v2026.5.x). No other roadmap signals were observed today.

### 7. User Feedback Summary
- **Pain Point (Channel Configuration):** User "NOTJuangamer10" reports that Telegram config validation is inconsistent between `config` and `channel list` commands, leading to confusion. This indicates a usability gap in channel setup feedback.
- **Pain Point (Security Usability):** User "Jdad5150" highlights that the documented user-approval flow for risky commands is non-functional, making supervised mode effectively broken. The spec exists, but the implementation is absent.
- **Satisfaction:** The CI pipeline improvement (PR #899) and continued hackathon contributions (PR #885) suggest active community engagement and satisfaction with project velocity, though bugs are dampening the user experience.

### 8. Backlog Watch
The following items may need maintainer attention:

- **PR #885** (Open since May 4, 2026): Draft hackathon PR adding governance layer. No maintainer review comments yet. This large feature may require architectural alignment before merging. [GitHub Link](https://github.com/nullclaw/nullclaw/pull/885)
- **New issues #900 and #901** (Opened today): Both lack any response from maintainers. Given their high severity, a triage response is recommended to set user expectations.

No long-unanswered issues from prior weeks were updated today — the backlog appears fresh but unattended for critical bugs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-09

## Today's Overview
IronClaw saw extremely high developer activity on 2026-05-09, with 47 pull requests updated in the last 24 hours (19 merged/closed, 28 open) and 12 open issues. The overwhelming focus remains on the **Reborn** architecture migration, with core contributor `serrrfirat` driving a massive wave of PRs to build out the loop driver, credential store, checkpoint, and prompt bundle subsystems. A critical nightly E2E pipeline failure (#3323) and a production bug involving mission results being posted to the wrong conversation (#3415) represent the most notable stability concerns. No new releases were cut today, but the project is clearly in an intense development sprint toward the Reborn cutover.

## Releases
**No new releases** were published in the last 24 hours. The last tagged release on the main branch remains `v0.28.0` (per the proposed changelog in PR #3388). The open release PR #3388 proposes bumping `ironclaw_common` from 0.4.1→0.4.2 and `ironclaw` from 0.24.0→0.28.0 with API-compatible changes, but has not yet been merged.

## Project Progress
19 pull requests were merged or closed today, nearly all authored by `serrrfirat` and focused on the Reborn substrate:

- **Reborn credential security** — Multiple PRs landed to harden the secrets subsystem: #3401 (durable credential stores, closed), #3408 (encrypt durable credential payloads, closed), #3413 (checkpoint state staging store, closed), #3335 (port encrypted secrets store with credential account sessions, closed).
- **Reborn loop driver infrastructure** — #3391 (loop support MVP, closed), #3405 (loop driver registry readiness, closed), #3403 (production loop model gateway, closed), #3397 (model/transcript milestone emission, closed).
- **Mission auto-resume fix** — #3366 (fix missions auto-resume after gate resolution, closed, includes DB migration) — a significant fix that ensures paused missions resume automatically after OAuth/gate resolution instead of requiring manual intervention.
- **Deterministic E2E skills testing** — #3309 (closed) replaced flaky ClawHub-dependent skills UI tests with deterministic Playwright API mocks.

The Reborn text-only loop host ports (#3398) and durable encrypted secret store (#3414) remain open for continued iteration.

## Community Hot Topics
- **[Issue #3067] Reborn integration test suite** (32 comments) — The highest-discussion issue this period, tracking the caller-level integration test plan for the Reborn stack. The long comment thread (including links to 12+ child issues) reflects deep architectural coordination. [View](https://github.com/nearai/ironclaw/issues/3067)
- **[Issue #3016] Reborn cutover blocker: AgentLoopHost facade** (11 comments) — A critical blocker issue with a dense dependency tree linking to 12+ other tracking issues. Signals that the team is carefully mapping out every interface boundary before cutover. [View](https://github.com/nearai/ironclaw/issues/3016)
- **[PR #2394] WeCom (WeChat Work) channel** — A long-running XL-sized feature PR from community contributor `hanakannzashi`, open since April 13 and still active. 0 comments but high scope (WASM channel, setup validation, token caching, media handling). This likely represents significant external interest in Chinese enterprise messaging support. [View](https://github.com/nearai/ironclaw/pull/2394)
- **[PR #1378] Per-channel MCP/built-in tool filtering** — Another long-running contribution from `nick-stebbings` (open since March 18). Addresses a clear multi-channel deployment pain point for production users who need to scope tools differently across Slack, Telegram, and Web. [View](https://github.com/nearai/ironclaw/pull/1378)

## Bugs & Stability
**Critical:**
- **[Issue #3415] Mission results posted to wrong conversation** (opened today) — A production bug affecting `v0.27.0` where a daily NYC weather mission posts its results to a conversation different from the one where the mission was created. No fix PR yet. [View](https://github.com/nearai/ironclaw/issues/3415)
- **[Issue #3323] Nightly E2E pipeline failure** (opened May 7, updated today) — The automated nightly E2E suite failed, specifically the "Full E2E / E2E (web-regressions)" job. Since this is a scheduled run, it may indicate regression in web channel functionality. No comments or fix PR yet. [View](https://github.com/nearai/ironclaw/issues/3323)

**Medium:**
- **[PR #3390] Cross-tenant SSE/WS status event leak** (open, fix proposed) — A multi-tenant isolation vulnerability where producers missing `metadata.user_id` were fanning out tool calls, tool output, onboarding state, and job lifecycle to every connected SSE/WS subscriber. A fix is proposed in the open PR. [View](https://github.com/nearai/ironclaw/pull/3390)

**Low (fixes landed today):**
- [#3412] Harden durable credential stores (atomic consumption, libSQL exclusive transactions, Postgres serializable transactions) — closed/review feedback incorporated

## Feature Requests & Roadmap Signals
The overwhelming signal from today's data is that **Reborn** is the single dominating roadmap item. The dense issue dependency graph (issues #3402→#3404→#3406→#3407→#3409→#3410, all opened May 8) reveals a carefully sequenced plan to build:

1. **Loop driver registry** (#3402) — First step: register and validate drivers
2. **TurnRunner worker composition** (#3404) — Claim turns, heartbeat leases, build per-run hosts
3. **Checkpoint state store** (#3406) — Persist bounded opaque checkpoint payloads
4. **Text-only AgentLoopDriverHost factory** (#3407) — First complete host implementation
5. **Host-owned prompt bundle port** (#3409) — Rich model input beyond plain transcripts
6. **v2 engine model adapter** (#3410) — Bridge existing v2 driver calls to Reborn boundaries

These will likely coalesce into the next release candidate for Reborn cutover.

External feature signals: The long-lived WeCom channel PR (#2394) and per-channel tool filtering PR (#1378) suggest community demand for **enterprise Chinese messaging integration** and **multi-channel tool governance** — both likely candidates for a `v0.29` or `v0.30` release once Reborn stabilizes.

## User Feedback Summary
The production bug report (#3415) reveals real user pain: **mission context isolation is broken** in production for at least one user's daily-weather mission. The description implies the user expected mission results to be posted to the originating conversation, but the system incorrectly routed them elsewhere. This suggests either a threading/mission-conversation binding regression in `v0.27.0` or a root cause in the mission execution pipeline.

No explicit user satisfaction signals were captured in today's issue/PR comments, but the high volume of Reborn-focused contributions from core team members (rather than community) suggests the project is in a heavy **internal refactoring phase** rather than a user-facing feature release cycle.

## Backlog Watch
- **[PR #2394] WeCom channel** (open since April 13, 2026) — A major community contribution with 26 days of inactivity in comments. The PR is still open but risks bit-rot if not reviewed by core maintainers. [View](https://github.com/nearai/ironclaw/pull/2394)
- **[PR #1378] Per-channel tool routing** (open since March 18, 2026) — 52 days since creation, 0 maintainer comments visible. This is a substantial feature with clear production value. [View](https://github.com/nearai/ironclaw/pull/1378)
- **[Issue #3323] Nightly E2E failure** (open since May 7) — While not long-unanswered, this automated failure has zero human acknowledgment. If the web-regressions job continues to fail, it could mask deeper regressions. [View](https://github.com/nearai/ironclaw/issues/3323)
- **[Issue #3193] Reborn conversation binding contracts** (open since May 2, 7 days) — This issue is explicitly marked as unblocking the `TurnCoordinator` (#3013) and related cutover gates. With 5 comments and recent "semantic slice implemented" status from May 8, it appears to be progressing but has no closure PR yet. [View](https://github.com/nearai/ironclaw/issues/3193)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for May 9, 2026.

---

## LobsterAI Project Digest: 2026-05-09

### 1. Today's Overview
Today was a high-consolidation day for LobsterAI, with a massive 22 PRs merged or closed against only 2 new open issues. The project is clearly in a release preparation phase, as evidenced by a series of cherry-pick PRs targeting the `release/2026.05.08` branch. The core team is aggressively merging features from the main branch, including a major code-block rendering overhaul and critical bug fixes, while two minor UI polish issues—blank loading states and sparse empty states—have been formally filed and already have linked fix PRs pending.

### 2. Releases
No new releases were published today.

### 3. Project Progress
A total of 22 PRs were merged/closed today, highlighting significant forward momentum.

- **Major Feature Advancement:** The most substantial merge was **PR #1922**, which cherry-picked **PR #1306** into the release branch. This replaces the old `react-syntax-highlighter` with **CodeMirror 6** for chat code blocks, adding syntax highlighting for 50+ languages, inline search, line numbers, folding, and a fullscreen modal.
- **Critical Bug Fixes:**
    - **PR #1923** (cherry-picked from #1756) fixes a high-severity bug where a "Stop" action on a cowork session (e.g., a web crawler) failed to halt subsequent tool calls, leading to unwanted continued execution.
    - **PR #1918** fixes an issue where the raw string `NO_REPLY` and its prefix appeared in chat messages.
- **UI/UX Polish:**
    - Multiple PRs refined the cowork experience, including updating file list icons (**#1931**), fixing duplicate/preview file issues (**#1925**), and hiding zero-value cache read displays (**#1927**).
    - **PR #1919** (cherry-picked from #1511) adds red asterisk `*` indicators for required fields across 8 form components (Settings, MCP Server, Task Form, etc.) to improve form usability.
    - **PR #1664**, the bookmarking feature, was merged, allowing users to star important messages and jump back to them from a dedicated view.
    - Sidebar UI (**#1928**) and agent layout (**#1924**) were also optimized.

### 4. Community Hot Topics
No issues or PRs generated significant discussion (reactions or comments) in the last 24 hours. The two new issues were filed by a developer, likely a project contributor, rather than a community user voicing a heated discussion point.

### 5. Bugs & Stability
Two new UI bugs were reported today, both from the same user. Fix PRs already exist for both, suggesting they were uncovered during internal testing.

- **HIGH: Blank Loading State (#1920) - [Link](netease-youdao/LobsterAI Issue #1920)**
    - **Problem:** Cowork initialization displays a static, plain "Loading..." text instead of a polished skeleton screen.
    - **Status:** A fix is pending in **PR #1769**, which adds animated shimmer placeholders.
- **MEDIUM: Incomplete Empty States (#1921) - [Link](netease-youdao/LobsterAI Issue #1921)**
    - **Problem:** Empty state placeholders in Skills Manager (installed/marketplace tabs) and TaskRunHistory lack icons and descriptive subtitles, making them look unfinished.
    - **Status:** A fix is pending in **PR #1770**, which adds the missing icons and subtitles.

### 6. Feature Requests & Roadmap Signals
The two issues filed today are signals of internal quality standards being enforced, rather than community feature requests. They suggest the project team is focusing on UI consistency and professional polish in the lead-up to a release. Given that both issues and their fix PRs (#1769 and #1770) were created weeks ago and are now being surfaced, they are likely expected to land in the next release (e.g., `2026.05.09` or `2026.05.10`).

### 7. User Feedback Summary
No direct user feedback or pain points were expressed in today's issues or PRs. The project's activity is dominated by internal developers pushing code and fixing bugs identified during a release cycle.

### 8. Backlog Watch
Two PRs remain open, both targeting the two UI bugs filed today:

- **PR #1770: feat(ui): enhance empty states for skills and task run history** [Link](netease-youdao/LobsterAI PR #1770) - Created 2026-04-20, Updated 2026-05-08.
- **PR #1769: feat(ui): add skeleton loading screen for cowork initialization** [Link](netease-youdao/LobsterAI PR #1769) - Created 2026-04-20, Updated 2026-05-08.

While both are long-lived, they have been recently updated and have direct, high-priority corresponding issues. Their continued open status suggests they may be awaiting final review or minor revisions before merge.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-09

## 1. Today's Overview
Moltis shows **moderate activity** today, with no new Issues opened or updated but a healthy pulse of 5 Pull Requests updated in the last 24 hours. Two PRs were merged/closed, including a significant voice feature (OpenAI Realtime model guidance) and a community-contributed Traditional Chinese locale improvement. A new release (20260508.01) was published, indicating the project is shipping regularly. The open PR queue contains work on persistent external-agent sessions, a web chat composer redesign, and a migration from mdBook to an Astro docs site — suggesting the team is investing in both developer experience and user-facing polish.

## 2. Releases
- **20260508.01** (published 2026-05-08)  
  No release notes or changelog were provided. Based on merged PRs, this release likely includes the OpenAI Realtime voice model guidance, updated zh-TW locale, and potentially other bug fixes or dependencies.  
  - **Breaking changes**: None indicated.  
  - **Migration notes**: None provided.

## 3. Project Progress
Two PRs were merged/closed today:
- **PR #986** (Merged) — *Update and improve zh-TW Traditional Chinese locale* by PeterDaveHello. Standardizes "AI 助理" (AI Assistant), "Moltis", and other technical terms across multiple modules for clarity and consistency.  
- **PR #984** (Merged) — *feat(voice): surface OpenAI realtime model guidance* by penso. Adds STT model settings for `whisper`, `gpt-4o-transcribe`, and `gpt-4o-mini-transcribe`, plus Realtime voice model IDs displayed as guidance to prevent user misconfiguration. Includes Playwright coverage tests.

## 4. Community Hot Topics
No Issues were active today, and PRs had zero comments or reactions. The most notable open PRs (by recency and scope):
- **PR #985** — *Refresh web chat composer*: Redesigns the chat input as a centered rounded composer with footer controls for model, reasoning, attachments, voice, and send. This signals a strong user-experience focus.  
- **PR #566** — *feat(external-agents): add persistent agent sessions*: Adds persistent sessions for ACP and Codex CLI, with Claude Code resume support. This is a long-running feature (opened April 6) and the largest open PR, indicating sustained demand for external agent integration.  
- **PR #987** — *Replace docs deployment with Astro site*: Modernizes the documentation shell with sidebar navigation, search, responsive layout, and light/dark theme control.

**Underlying needs**: The community and maintainers are prioritizing better user interface (chat composer), improved documentation discoverability (Astro migration), and more robust external agent session persistence — all pointing toward making Moltis more accessible for day-to-day use.

## 5. Bugs & Stability
**No bugs, crashes, or regressions** were reported or closed in the last 24 hours. The project appears stable with no open stability concerns today.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. However, the following signals emerge from current open PRs:
- **Persistent external-agent sessions** (PR #566) — likely to land soon, enabling a seamless multi-turn experience with ACP and Codex CLI.  
- **Web chat composer refresh** (PR #985) — would be the next UI enhancement, improving mobile and desktop interaction.  
- **Astro-based docs site** (PR #987) — suggests documentation is becoming a higher priority, likely driven by onboarding friction.

**Prediction for next release**: The chat composer redesign (PR #985) and Astro docs migration (PR #987) are both recent and relatively self-contained; either could ship within the next 1–2 releases.

## 7. User Feedback Summary
No direct user feedback or issue discussions were recorded today. The merged zh-TW locale PR (#986) from a community contributor (PeterDaveHello) indicates that non-English users are actively contributing. The absence of bug reports or support issues could imply general satisfaction, low usage volume, or that users are reporting through other channels.

## 8. Backlog Watch
- **PR #566** — *feat(external-agents): add persistent agent sessions* (open since April 6, 2026 — 33 days). This is the oldest open PR and a significant feature. It lacks comments and reactions, but its size and scope (wiring gateway APIs, session lifecycle) warrant a review to prevent staleness.  
- **No long-unanswered Issues** exist, as the open issue count is zero.

**Maintainer attention needed**: PR #566 should be prioritized or updated with a status check to avoid it becoming stale and creating merge conflicts with other changes.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured digest for the CoPaw project, based on the provided GitHub data for **2026-05-09**.

---

## CoPaw Project Digest – 2026-05-09

### 1. Today's Overview
The CoPaw project is experiencing **high activity**, with the release of a new beta version (v1.1.6-beta.1) and a near-equal split between bug fixes and feature development in today's merged PRs. Community engagement remains strong, with 36 active issues and 38 updated pull requests in the last 24 hours, though user sentiment reflects frustration with recent performance regressions. Key areas of focus include resolving critical bugs in session initialization, tool schema compatibility with third-party models, and performance optimization for the WebUI.

### 2. Releases
- **[v1.1.6-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6-beta.1)**: This is a pre-release version. Changes include a version bump, integration smoke tests (app startup and settings/envs), and a fix for an SSE crash in the console. No breaking changes or migration notes were mentioned in the provided data.

### 3. Project Progress
Today saw **27 merged/closed PRs**, indicating a strong push toward stability and new features.

- **Backup & Stability**: Merged PR [#3916](https://github.com/agentscope-ai/QwenPaw/pull/3916) fixes a critical bug where Docker volume mounts prevented secret restoration from backups.
- **Config Flexibility**: Merged PR [#4140](https://github.com/agentscope-ai/QwenPaw/pull/4140) replaces the hardcoded agent name "Friday" with a config-driven value from `agent.json`, directly addressing community pain point.
- **Performance**: Merged PR [#4130](https://github.com/agentscope-ai/QwenPaw/pull/4130) optimizes the console by skipping chat history lookup for non-arrow keys, reducing unnecessary overhead.
- **Tool Compatibility**: Merged PR [#4126](https://github.com/agentscope-ai/QwenPaw/pull/4126) adds schema sanitization for tool functions, which should resolve compatibility issues with strict API providers like DeepSeek.
- **Channel Integration**: Merged PR [#4119](https://github.com/agentscope-ai/QwenPaw/pull/4119) fixes markdown table rendering across split text chunks, improving the WeChat user experience.
- **Infrastructure**: Merged PR [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) resolves a Windows packaging failure related to conda tools.

### 4. Community Hot Topics
The most active discussions reveal significant user frustration with recent performance and compatibility issues.

- **[Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) (CLOSED)**: "页面进行超多轮对话后页面滚动变得特别卡" (Page scrolling becomes very laggy after hundreds of conversation turns). **Analysis**: User reports severe UI slowdown after 200+ rounds of dialogue, especially when using complex A2A workflows. The user is asking for UX optimization or best practices, highlighting a scaling issue in the front-end component.
- **[Issue #2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) (CLOSED)**: "每次更新后venv会重置？所有skill相关的依赖都会失效" (venv resets after every update? All skill dependencies become invalid). **Analysis**: A persistent frustration where updates break the user's custom environment. This is a major reliability concern for power users who build custom skills.
- **[Issue #4115](https://github.com/agentscope-ai/QwenPaw/issues/4115) (CLOSED)**: "deepseek无法使用" (DeepSeek not working). **Analysis**: The user identified that the root cause is a schema incompatibility where CoPaw's `autocomplete` tool sends a boolean where an array is expected. This is a specific, high-impact bug for users of the DeepSeek V4 model family.
- **[Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) (OPEN)**: "为什么新版本的webui这么卡" (Why is the new version's webui so laggy). **Analysis**: User reports extreme system-wide lag during response generation on v1.1.5.post2, making multi-tasking impossible. This is a severe regression in the user experience.

### 5. Bugs & Stability
Several bugs were reported today, with some having immediate fixes.

- **Critical**: **[Issue #4135](https://github.com/agentscope-ai/QwenPaw/issues/4135) (OPEN)**: Failed to connect to local Ollama with a generic error message. No fix PR identified yet.
- **High**: **[Issue #4085](https://github.com/agentscope-ai/QwenPaw/issues/4085) (OPEN)**: DeepSeek V4 tool call compatibility bug (schema validation error). **Fix PR**: [#4126](https://github.com/agentscope-ai/QwenPaw/pull/4126) was merged today, which sanitizes tool function schemas and should resolve this.
- **High**: **[Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) (OPEN)**: Severe WebUI performance degradation on response generation. No fix PR yet.
- **Medium**: **[Issue #4102](https://github.com/agentscope-ai/QwenPaw/issues/4102) (OPEN)**: System continuously compresses and sends screenshots to context instead of using a vision model/OCR tool, leading to high token usage. No fix PR identified.
- **Low**: **[Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) (OPEN)**: Windows: `execute_shell_command` flashes a console window on every call. No fix PR identified.

### 6. Feature Requests & Roadmap Signals
Several feature requests were raised today, indicating the community's direction for the project:

- **[Issue #4138](https://github.com/agentscope-ai/QwenPaw/issues/4138) (OPEN)**: Request for batch action support in the `browser_use` tool. **PR**: [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) (OPEN) is actively under review, making this a likely candidate for the next release.
- **[Issue #4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) (OPEN)**: Support for OAuth login for OpenAI/Codex providers. This is a specific feature request for more secure authentication flows.
- **[Issue #4131](https://github.com/agentscope-ai/QwenPaw/issues/4131) (OPEN)**: A "Project Group" feature where multiple agents (roles) can join a single conversation/project. This is a complex request for multi-agent collaboration within a single session, which could be a significant roadmap item.

### 7. User Feedback Summary
User sentiment is currently mixed, with notable **dissatisfaction** regarding performance and stability.

- **Pain Points**: The most common complaints are about **application lag** (Issues #3350, #4108) and **broken functionality after upgrades** (Issue #2382, #4133). Users express that the user experience is "getting worse" and that they cannot multi-task.
- **Use Cases**: Users are heavily leveraging CoPaw for long-running, complex coding projects (Issue #3350) and relying on scheduled tasks (Issues #3010, #2964, #3783). This shows high engagement but also exposes scaling weaknesses.
- **Satisfaction**: Users are proactive in diagnosing issues (e.g., Issue #4115), showing a technically adept and engaged community. The speed of merging fixes (e.g., #4140 for the "Friday" hardcoding) is a positive signal.

### 8. Backlog Watch
The following items are older but still open, requiring maintainer attention:

- **[Issue #578](https://github.com/agentscope-ai/QwenPaw/issues/578) (OPEN)**: "OpenClaw-Inspired Features for Compounding Agent Value" (Created 2026-03-04). This meta-issue tracks several long-term feature requests. It has been open for over two months with no clear resolution, suggesting a need for a roadmap update.
- **[Issue #2165](https://github.com/agentscope-ai/QwenPaw/issues/2165) (OPEN)**: An old bug report with no clear title (Created 2026-03-24). The brief description mentions an "APIError: field re...". It has only 2 comments and no recent activity, likely a low-priority or hard-to-reproduce issue.
- **[PR #2315](https://github.com/agentscope-ai/QwenPaw/pull/2315) (CLOSED)**: "fix(mcp): disable hot reload for unsafe stdio clients" (Created 2026-03-26). While closed, this PR was marked "Under Review" and addressed a safety issue for MCP clients. Its eventual inclusion should be tracked.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest — 2026-05-09**

**1. Today’s Overview**  
ZeptoClaw shows low activity in the last 24 hours, with no new issues, no new releases, and zero merged or closed pull requests. The single open PR (#571) has been updated but remains unmerged, indicating a pause in feature integration. Overall, the project is in a quiet maintenance or review phase, with no urgent community-reported bugs or regressions. The maintainer appears focused on refining tool descriptions for the `longterm_memory` module.

**2. Releases**  
No new releases today. The latest reported version remains unchanged; no migration or breaking-change notes apply.

**3. Project Progress**  
No PRs were merged or closed in the last 24 hours. The only active item is:

* **PR #571** (open, updated 2026-05-08): *feat(tools): trigger-phrase nudges in longterm_memory description* — Rewrites the `longterm_memory` tool’s description to include explicit “Use when” / “Do NOT use when” examples, mirroring patterns from Hermes Agent, and adds a doc-test guard.  
  [GitHub: qhkm/zeptoclaw PR #571](https://github.com/qhkm/zeptoclaw/pull/571)

**4. Community Hot Topics**  
No issues or PRs have accumulated comments or reactions in the last 24 hours. The only open discussion center is PR #571, which has zero comments and zero reactions — suggesting the community has not yet engaged with this change.

**5. Bugs & Stability**  
No bugs, crashes, or regressions were reported today. The project appears stable at this time, with no new stability concerns.

**6. Feature Requests & Roadmap Signals**  
No explicit feature requests were filed today. PR #571 signals an internal quality improvement (clearer tool descriptions and test guards) rather than a user-facing feature. Future iterations may see similar trigger-phrase patterns applied to other tool descriptions, but no roadmap items are visible from today’s data.

**7. User Feedback Summary**  
No user feedback — issues, comments, or reactions — was recorded in the last 24 hours. Satisfaction or dissatisfaction cannot be assessed from today’s activity.

**8. Backlog Watch**  
There are no long-unanswered issues or PRs requiring maintainer attention. The open PR #571 has been pending for six days (since 2026-05-03) with no merge or rejection, which may warrant a review decision soon to avoid stagnation.  
[GitHub: qhkm/zeptoclaw PR #571](https://github.com/qhkm/zeptoclaw/pull/571)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-09

## Today's Overview

ZeroClaw is in a period of **high activity**, with 50 issues and 41 pull requests updated in the last 24 hours, including the successful release of **v0.7.5**. The project shows strong contributor engagement across 43 open/active issues and 26 open PRs, with 7 issues closed and 15 PRs merged/closed in this window. The release represents a significant milestone, delivering in-browser onboarding, a schema-driven gateway CRUD surface, and a three-surface personality editor. Security and stability concerns dominate the current issue backlog, with several **S0/S1 severity bugs** receiving active attention via fix PRs.

## Releases

### v0.7.5 — Available Now
[View Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.5)

**Headline features:**
- **In-browser onboarding:** A schema-driven `/onboard` flow for new users
- **Gateway CRUD surface:** Per-property gateway management backed by an OpenAPI 3.1 spec and a typed CLI
- **Three-surface personality editor:** CLI / T (presumably terminal/TUI) editor for agent personality configuration

**Changelog (v0.7.4 → v0.7.5):**
- Substantial follow-on from v0.7.4 focusing on user experience and configuration
- Release pipeline now fully automated — manual version bumps and ad-hoc workflows retired

**No breaking changes or migration notes** were explicitly documented for this release.

## Project Progress

### Merged/Closed PRs (15 total)

**Bug Fixes:**
- [#6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) — **Critical fix**: Llama.cpp provider thinking output; ACP workspace path fix (skill files blocked when client `cwd` differs); `/dev/null` policy fix for `forbidden_path_argument` scanner
- [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) — Closed bug: ACP "cwd" change locking agents out of reading their own skill files
- [#5121](https://github.com/zeroclaw-labs/zeroclaw/pull/5121) — Mistral-compatible `tool_call.id` serialization enforced
- [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) — Matrix channel: duplicate inbound replies prevented by dropping event handlers when sync loop returns
- [#5075](https://github.com/zeroclaw-labs/zeroclaw/pull/5075) — WhatsApp Web feature reinstall guidance clarified in docs

**Infrastructure & CI:**
- [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) — CI fix: unblocked v0.7.5 release by running `gen-api` before `tsc`
- [#6473](https://github.com/zeroclaw-labs/zeroclaw/pull/6473) — Clarified review and PR workflow guidance in docs
- [#6319](https://github.com/zeroclaw-labs/zeroclaw/pull/6319) — Refactored memory: shared memory context marker constants

**Features that advanced (open but active):**
- [#6048](https://github.com/zeroclaw-labs/zeroclaw/pull/6048) — Nextcloud Talk streaming draft-update support
- [#6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178) — Ollama provider tuning (`num_ctx`, `num_predict`, `temperature_override`)
- [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) — Observability: runtime tracing and SSE broadcast for agent turn lifecycle
- [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) — V0.8.0 schema-mirror env-var grammar (breaking change on `integration/v0.8.0` branch)

## Community Hot Topics

### Most Active Issues

1. **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — Better LOGO for ZeroClaw** (10 comments, 2 👍)
   - Open since March, still awaiting community consensus on design direction
   - *Underlying need:* Project identity/branding maturation as user base grows

2. **[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) — v0.7.5 milestone tracking** (9 comments) [CLOSED]
   - Release automation tracking issue — now resolved with v0.7.5 shipped
   - *Underlying need:* Desire for predictable, automated release cadence

3. **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) — "Full" Docker image** (8 comments, 3 👍)
   - Requests all feature flags enabled (e.g., WhatsApp) for lower barrier of entry
   - *Underlying need:* Accessibility for non-technical users

4. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — Napcat/Onebot channel support** (8 comments)
   - Users want QQ/OneBot protocol connectivity
   - *Underlying need:* Chinese messaging ecosystem integration

5. **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — Kimi-code provider streaming error** (7 comments)
   - Streaming chat with tool calls fails: "thinking is enabled but reasoning_content is missing"
   - *Underlying need:* Provider compatibility for reasoning-enabled models

### Most Active Pull Requests

- [#6538](https://github.com/zeroclaw-labs/zeroclaw/pull/6538) — Fix nested runtime panic in pgvector setup
- [#6540](https://github.com/zeroclaw-labs/zeroclaw/pull/6540) — Route source web builds through `cargo`
- [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) — Require shell approval in direct sessions (security fix)

## Bugs & Stability

### Critical (S0 - Data loss / Security risk)

| Issue | Description | Status |
|-------|-------------|--------|
| [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) | `forbidden_path_argument` blocks safe redirect targets (`/dev/null`, `/dev/stdout`) | In progress — partial fix in [#6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | Hardcoded `~/.zeroclaw/` breaks multi-instance deployments | Open, p1 |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | `allowed_path` doesn't respect contains logic (e.g., `~/` should allow `~/dev`) | Open, p1 |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | `file_write` tool silently fails — written files invisible on host | Open, p1 |

### High Severity (S1 - Workflow blocked)

| Issue | Description | Status |
|-------|-------------|--------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code provider streaming error with tools | Open, blocked (needs repro) |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | Fallback provider chain ignores `[providers.X]` config for credentials/base_url | Open, accepted |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Web dashboard/WebSocket gateway bypasses ApprovalManager — tool approvals never surface | Open, in progress |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bedrock provider sends API_KEY as `x-api-key` header, causing 403 | Open, accepted |

### Fix PRs Active Today

| PR | Fix For | Severity |
|----|---------|----------|
| [#6538](https://github.com/zeroclaw-labs/zeroclaw/pull/6538) | Nested Tokio runtime panic in `PostgresMemory::new()` with pgvector | Medium |
| [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) | Direct-session `shell` calls skipping approval flow | High |
| [#6536](https://github.com/zeroclaw-labs/zeroclaw/pull/6536) | Return onboarding error from WebSocket chat | High |
| [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) | Concurrent SQLite schema migration tolerance | Medium |

## Feature Requests & Roadmap Signals

### Strong Community Demand (3+ reactions)

| Issue | Feature | Reactions |
|-------|---------|-----------|
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A (Agent-to-Agent) Protocol Support | 5 👍 |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | "Full" Docker image with all feature flags | 3 👍 |

### Likely for Next Release (v0.7.6 or v0.8.0)

**v0.8.0 branch active:**
- [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) — Schema-mirror env-var grammar (breaking change)
- [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) — Multi-agent runtime with per-alias workspaces and permissions

**v0.7.x candidates:**
- [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) — Installing skills from `.well-known` URI
- [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) — `send_channel_message` tool for direct per-user channel delivery
- [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) — Clipboard paste & drag-and-drop image support in Web Chat UI
- [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) — ANN index for SQLite memory vector search (performance)

**Channel ecosystem expansion:**
- [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) — Wecom (WeChat Work) channel support
- [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — Napcat/Onebot (QQ) channel
- [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) — Mattermost private message support

## User Feedback Summary

### Pain Points

1. **Configuration complexity & bad defaults:**
   - Multiple instances report hardcoded paths (`~/.zeroclaw/`) breaking multi-instance setups ([#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605))
   - `allowed_path` does not respect parent/child directory logic ([#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533))
   - Users want `forbidden_path_argument` to allow legitimate shell redirects ([#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518))

2. **Channel integration friction:**
   - WhatsApp Web channel broken without feature flag rebuild ([#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846)) — closed but required documentation update
   - Feishu channel defaults to LLM call instead of Agent mode ([#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873))
   - No easy way to send outbound messages from agent jobs to users ([#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145))

3. **Provider reliability:**
   - Fallback provider chain ignores config file settings ([#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803))
   - Bedrock provider sends wrong auth header ([#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289))
   - MCP tools not detected ([#4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848))

### Satisfaction Signals

- **Release automation welcomed:** v0.7.5 milestone tracking issue closed successfully
- **High engagement:** 50 issues + 41 PRs updated in 24h indicates healthy contributor base
- **Docker community active:** "Full" Docker image request has 3 upvotes and ongoing discussion
- **Security awareness strong:** Multiple S0/S1 bugs being actively triaged and fixed

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) — Webhook endpoint agent mode | 54 days | `needs-maintainer-review` | User reports agent mode doesn't work via webhook |
| [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) — Mattermost private messages | 29 days | `needs-maintainer-review` | No maintainer input on feasibility |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) — ANN index for SQLite memory | 30 days | `needs-author-action` | Enhancement needs design review |
| [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) — Disable LeakDetector redaction | 43 days | Open/accepted | No PR yet despite being accepted |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) — Default config path in multi-instance | 29 days | Open/p1 | S0 severity, no fix PR |

### PRs Needing Review

| PR | Age | Notes |
|----|-----|-------|
| [#5254](https://github.com/zeroclaw-labs/zeroclaw/pull/5254) — llama.cpp Gemma 4 tool schema fix | 36 days | Medium risk, needs provider expertise |
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) — Runtime tracing & SSE broadcast | 17 days | Large PR (size L), `needs-author-action` |
| [#6048](https://github.com/zeroclaw-labs/zeroclaw/pull/6048) — Nextcloud Talk streaming | 16 days | Medium risk, requires channel expertise |
| [#6068](https://github.com/zeroclaw-labs/zeroclaw/pull/6068) — Configurable reply-intent precheck | 15 days | Medium risk, useful feature |

---

*Generated from ZeroClaw GitHub data. All links use `zeroclaw-labs/zeroclaw` repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*