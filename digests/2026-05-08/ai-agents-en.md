# OpenClaw Ecosystem Digest 2026-05-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-08 04:19 UTC

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

# OpenClaw Project Digest — 2026-05-08

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.5.7** with important publishing pipeline reliability fixes. Of the latest issues, **169 were closed** and **331 remain open**; for PRs, **154 were merged/closed** and **346 remain open**. The community is deeply engaged, with several long-running discussions accumulating 10–24 comments each, focused heavily on security hardening, session management, and provider compatibility regressions. Release cadence remains aggressive at roughly daily releases, indicating a mature CI/CD pipeline but also suggesting the project is in a high-frequency bug-fix and iteration cycle.

## 2. Releases

**New Release: [v2026.5.7 — openclaw 2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)**

**Changes & Fixes:**
- **Retries transient ClawHub CLI dependency install failures:** Improves plugin publishing reliability by retrying on transient network or registry issues during `clawhub` CLI execution.
- **Prevents a single flaky preview cell from blocking publishing:** If one preview cell flakes, plugins that otherwise pass preview can still be published, reducing CI failures.
- **Verifies every expected ClawHub package version after publish:** Post-publish verification ensures all expected packages exist in the correct versions, making maintenance releases faster to recover and less likely to silently fail.

**Breaking Changes:** None documented.

**Migration Notes:** No migration actions required. This is a maintenance patch focused on the publishing pipeline.

## 3. Project Progress

**Merged/Closed PRs Today (representative highlights from top by activity):**

- **[#79151](https://github.com/openclaw/openclaw/pull/79151) — fix: respect Codex requirements for app-server defaults** (Merged). Default implicit local stdio Codex app-server permissions to guardian when Codex requirements omit YOLO approval, reviewer, or sandbox values. Closes a gap in Codex harness hardening.
- **[#67509](https://github.com/openclaw/openclaw/pull/67509) — fix: add root guard to prevent CLI execution as root** (Merged). Adds early `assertNotRoot()` guard to prevent root-owned state or service conflicts, addressing a security hardening issue.
- **[#79057](https://github.com/openclaw/openclaw/pull/79057) — fix(whatsapp): ignore outbound echoes for inbound activity** (Merged). Prevents WhatsApp Web outbound echo events from falsely updating inbound activity timestamps.

**Features Advanced:**
- **Channel delivery improvements:** PR [#78261](https://github.com/openclaw/openclaw/pull/78261) adds `providerAccepted` delivery projection for Telegram sends, improving delivery observability.
- **Localization expansion:** PR [#79175](https://github.com/openclaw/openclaw/pull/79175) improves Chinese (zh-CN and zh-TW) glossary translations and adds Simplified/Traditional Chinese support to the CLI install wizard.
- **Workspace addressing substrate:** PR [#78678](https://github.com/openclaw/openclaw/pull/78678) implements `oc://` addressing for workspace files plus a CLI surface for editing md/jsonc/jsonl/yaml.

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#9443 — Request: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443)** (24 comments, 1 👍)  
   *Need:* Users want prebuilt APK downloads for the Android companion app instead of building from source. The issue has been open since February and is the most discussed item today, indicating sustained demand for mobile distribution convenience.

2. **[#78407 — `openclaw doctor --fix` rewrites model refs breaking ChatGPT-OAuth users](https://github.com/openclaw/openclaw/issues/78407)** (16 comments, 3 👍) *CLOSED*  
   *Need:* A migration/doctor bug that renamed `openai-codex/*` model references to `openai/*`, locking out OAuth-authenticated users. Was resolved quickly but generated high engagement.

3. **[#65824 — Feature request bundle: 11 platform gaps from intensive daily use](https://github.com/openclaw/openclaw/issues/65824)** (15 comments, 1 👍) *CLOSED*  
   *Need:* A consolidated feature request from a power user covering 11 gaps including config versioning, progressive tool enabling, session archiver, and agent orchestration. Signals that long-term daily users are hitting structural limitations.

4. **[#12602 — Slack Block Kit support for agent messages](https://github.com/openclaw/openclaw/issues/12602)** (13 comments, 0 👍)  
   *Need:* Richer interactive Slack responses via Block Kit for CRM summaries, database results, action confirmations. Has been open since February with sustained discussion.

5. **[#10659 — Masked Secrets: Prevent agent from seeing raw API keys](https://github.com/openclaw/openclaw/issues/10659)** (12 comments, 4 👍)  
   *Need:* A masked secrets system so agents can *use* keys without being able to *see* them, preventing prompt injection credential extraction. Has the highest reaction count in the top issues (4 👍), indicating strong community support.

### Most Active Pull Requests

- **[#78823 — fix(build): add stale tool runtime chunk aliases](https://github.com/openclaw/openclaw/pull/78823)** — Open, resolving chunk resolution failures after package swaps.
- **[#79211 — fix(control-ui): clarify login failure guidance](https://github.com/openclaw/openclaw/pull/79211)** — Open, improving UX for auth failures in the Control UI.
- **[#78261 — fix(telegram): expose provider-accepted outbound delivery](https://github.com/openclaw/openclaw/pull/78261)** — Open, adding delivery observability.

## 5. Bugs & Stability

### Critical Regressions

| Issue | Summary | Severity | Fix PR Status |
|-------|---------|----------|---------------|
| [#78402](https://github.com/openclaw/openclaw/issues/78402) | Gateway repeatedly closes connections (1000/1005/1006) due to event-loop starvation from stuck tool call | **Critical** — breaks WebSocket connectivity, UI drops, CLI errors | Closed (fix shipped in v2026.5.7?) |
| [#78502](https://github.com/openclaw/openclaw/issues/78502) | Google Gemini models hang/timeout on all main sessions but work via direct API & isolated subagents | **Critical** — blocks all Gemini users on main sessions | Open, no fix PR yet |
| [#78846](https://github.com/openclaw/openclaw/issues/78846) | `[object Object]` in agent messages with Mistral thinking models | **High** — corrupts output for all Mistral users | Closed |
| [#78572](https://github.com/openclaw/openclaw/issues/78572) | Discord `message` tool send fails with "Unknown Channel" on v2026.5.4 | **High** — blocks Discord tool usage | Closed |
| [#77551](https://github.com/openclaw/openclaw/issues/77551) | Bedrock `ExpiredTokenException` after credential file refresh (regression in v2026.5.3) | **Medium** — requires manual restart after credential rotation | Closed |
| [#78232](https://github.com/openclaw/openclaw/issues/78232) | WeChat plugin 2.4.1 incompatible with OpenClaw 2026.5.4 (channelRuntime API changes) | **Medium** — breaks WeChat plugin on upgrade | Closed |

### Recurring Patterns

- **Event-loop starvation** persists as a theme (see #78402, #76315), especially under subagent/embedded-run load on Linux.
- **Provider-specific regressions** are common across releases: Bedrock credential refresh (#77551), Gemini reasoning leaks (#41494), Mistral `[object Object]` (#78846), Codex harness routing (#75739).
- **Plugin compatibility breaks** on minor version bumps: WeChat (#78232) and Feishu (#78262) both broke in v2026.5.4.

## 6. Feature Requests & Roadmap Signals

### Strong Community Signals (likely to appear in next releases)

1. **Masked Secrets (`#10659`)** — 4 👍 with ongoing discussion. Prevents agents from leaking API keys. Could be combined with the related secrets management integration request (`#13610`). **Prediction: RFC within 2 releases.**

2. **Pre-response enforcement hooks (`#13583`)** — Hard gates for mandatory tool-call rules in high-stakes workflows (finance, security). **Prediction: Experimental implementation by v2026.6.**

3. **Channel-mediated approval for MCP tool calls (`#78308`)** — Extends existing shell-exec approval pipeline to MCP tools. **Prediction: Design discussion → prototype by v2026.5.9.**

4. **Session snapshots (`#13700`)** — Save/load context checkpoints for A/B testing and rollback. **Prediction: Might be deferred; lower urgency than security issues.**

5. **Capability-based permissions for skills/tools (`#12678`, `#12219`)** — Default-deny model for skills, permission manifests. **Prediction: Roadmap item, likely v2026.6+.**

### Lower-Probability Signals

- **Prebuilt Android APK releases (`#9443`)** — Open since Feb, 24 comments, but only 1 👍. Demand is vocal but niche.
- **Slack Block Kit (`#12602`)** — Long-running but only 0 👍. Limited community urgency despite discussion depth.
- **AWS deployment guide (`#13597`)** — Open since Feb with 3 👍. Likely to be addressed by docs contributors.

## 7. User Feedback Summary

### Pain Points (Dissatisfaction Signals)

- **Frequent regressions on upgrades** — Multiple users report breakage on minor version bumps (e.g., `#78232` — WeChat plugin, `#77551` — Bedrock credentials, `#76315` — gateway instability). Implies testing coverage gaps for channel and provider combinations.
- **Missing output state persistence** — PR `#76990` describes successful agent replies that vanish from transcripts, causing agents to re-answer old prompts. Undermines trust in session continuity.
- **Plugin compatibility fragility** — Users on WeChat, Feishu, and Discord are hitting breakage from channelRuntime API changes without deprecation warnings.
- **Painful security model** — Users want masked secrets, pre-response enforcement, and permission manifests. Current "soft rules" (prompt-based) are considered inadequate for production use (`#13583`, `#10659`, `#12678`).

### Satisfaction Signals

- **High engagement** — 500+ issues and PRs updated daily shows a healthy, responsive community.
- **Rapid release cadence** — Daily releases (v2026.5.4 → v2026.5.5 → v2026.5.7) demonstrate the team's commitment to fast fixes.
- **Feature depth** — Users are requesting sophisticated features (Block Kit, session snapshots, channel-mediated approval), indicating high trust and advanced use cases.

## 8. Backlog Watch

### High-Impact Issues Needing Maintainer Attention

| Issue | Age | Last Updated | Why It Matters |
|-------|-----|-------------|----------------|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) — Prebuilt Android APK | 92 days | Today | Most-commented issue overall; 24 comments, no maintainer acknowledgment visible. |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) — Slack Block Kit | 88 days | Today | 13 comments, strong use case articulation. No assignee or milestone. |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) — Pre-response enforcement hooks | 87 days | Today | 10 comments, 2 👍, addresses a core security gap. No milestone. |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) — Session snapshots | 87 days | Yesterday | 6 comments, addresses a common workflow gap. No assignee. |
| [#13610](https://github.com/openclaw/openclaw/issues/13610) — Native secrets management | 87 days | Yesterday | 7 comments, 1 👍. Related to the popular #10659. No milestone. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) — Denylist for exec-approvals | 96 days | Yesterday | 7 comments, **7 👍** (highest reactions in backlog). Strong community interest. |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) — Context usage visibility | 101 days | Yesterday | 8 comments. Request for context=% display in Runtime line. No attention. |
| [#78402](https://github.com/openclaw/openclaw/issues/78402) — Gateway connection drops (event-loop starvation) | 2 days | Yesterday | **Closed** — but root cause (stuck tool calls causing event-loop starvation) is a systemic pattern that needs architectural attention. |

### Vulnerable Patterns

- **9 out of 50 top issues** have had their last activity **today or yesterday**, suggesting active discussion but also that issues are piling up faster than maintainers can triage.
- Multiple issues from **February 2026** (e.g., #9443, #10659, #12602, #13583, #13610, #13700) remain open without milestones or assignees, indicating a **4-month gap** between feature requests and any official roadmap commitment.
- The **7 👍 denylist request (#6615)** has been open since **February 1** — 96 days without maintainer response despite being the highest-reaction backlog item.

---

*Generated from OpenClaw GitHub data for 2026-05-08. Data snapshot: issues/PRs updated in last 24h from openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the 2026-05-08 community digests.

---

## Cross-Project Ecosystem Report: Personal AI Assistants & Agents
*Date: 2026-05-08*

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a phase of intense activity and rapid maturation. On a single high-velocity day, the eight most active projects processed nearly 700 issues and pull requests, signaling a robust and deeply engaged developer community. A clear tension is emerging between the need for rapid feature iteration (daily releases in OpenClaw, v0.13.0 "Tenacity" in Hermes Agent) and the demand for production-grade reliability, as evidenced by critical regressions across multiple provider and channel integrations. The landscape is fragmenting around architectural choices, with projects like IronClaw and Moltis pioneering WASM-based sandboxing and "Reborn" architectures, while others focus on channel breadth (NanoClaw, PicoClaw) or desktop-native experiences (ZeroClaw). A unifying theme is the push toward multi-agent orchestration, security hardening (secrets management, masked credentials), and improved user experience for non-technical deployers.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Recent Release | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.5.7 (Daily) | 95 (High) |
| **IronClaw** | 22 | 50 | v0.28.0 (2026-05-07) | 90 (High) |
| **LobsterAI** | 2 | 50 | 2026.5.7 (2026-05-07) | 88 (High) |
| **CoPaw** | 50 | 31 | None (v1.1.5.post2) | 85 (High) |
| **ZeroClaw** | 50 | 50 | None (v0.7.5 blocked) | 82 (High) |
| **MoltiS** | 4 | 10 | Daily (20260507.05) | 88 (High) |
| **NanoBot** | 9 | 22 | None | 80 (Moderate-High) |
| **PicoClaw** | 35 | 48 | v0.2.8-nightly | 82 (High) |
| **Hermes Agent** | 50 | 50 | v0.13.0 (2026-05-07) | 85 (High) |
| **NanoClaw** | 9 | 35 | None | 80 (Moderate-High) |
| **NullClaw** | 5 | 9 | None | 75 (Moderate) |

***Health Score** is an estimated composite of activity velocity, release cadence, issue closure rate, and user engagement, normalized to 0-100.*

### 3. OpenClaw's Position

**Advantages:**
- **Sheer Scale & Velocity:** OpenClaw's activity dwarfs all peers, with 500 issues and 500 PRs updated in a single day. This indicates a massive, deeply engaged community and a very high-NPS product that users are actively contributing to.
- **Maturity & Cadence:** Its daily release cycle (`v2026.5.7`) with detailed changelogs demonstrates a mature CI/CD pipeline and a strong commitment to rapid bug-fix delivery.
- **Feature Completeness:** It is tackling advanced topics like session management, masked secrets, and pre-response enforcement hooks ahead of most peers, signaling a product for power users and enterprise-adjacent workloads.

**Technical Approach Differences:**
- OpenClaw's architecture appears to be highly modular ("channelRuntime API," "Codex harness"), which enables its vast plugin ecosystem but also creates a vulnerability to **plugin compatibility breaks** on minor version bumps (a pattern noted across both WeChat and Feishu integrations).
- Unlike IronClaw or Moltis, OpenClaw does not yet heavily emphasize WASM-based sandboxing, focusing instead on provider/capability orchestration.

**Community Size Comparison:**
OpenClaw's raw community output (1000 combined issue/PR updates) is an order of magnitude higher than any single peer. This, however, comes with a cost: 331 open issues and 346 open PRs represent a significant triage burden. Hermes Agent (295 contributors for v0.13.0) and the high activity of ZeroClaw/CoPaw suggest a competitive ecosystem, but OpenClaw's network effects are currently unmatched.

### 4. Shared Technical Focus Areas

Several requirements are emerging independently across multiple projects, indicating strong market demand:

| Focus Area | Projects Involved | Specific Community Needs |
| :--- | :--- | :--- |
| **Secrets & Credential Management** | **OpenClaw** (#10659), **NanoClaw** (#869), **PicoClaw** (#2408), **ZeroClaw** (#6418) | Masked secrets to prevent prompt injection theft; per-group API key rotation; failover across multiple keys; secure environment variable handling. |
| **Session & Context Reliability** | **OpenClaw** (#13700), **NanoBot** (#3689), **PicoClaw** (#2721, #2796), **CoPaw** (#3919) | Session history loss after interruptions; context window overflow causing agent amnesia; non-destructive session reset; proper sender attribution in group chats. |
| **Multi-Platform / Multi-Provider Stability** | **Hermes Agent** (#21026), **ZeroClaw** (#6246), **PicoClaw** (#629), **IronClaw** (#3225, #3317) | Consistent behavior across Windows, macOS, and Linux; elimination of provider-specific regressions (Gemini, DeepSeek, Mistral); reliable WebSocket reconnection; robust multi-channel operation. |
| **Security & Execution Controls** | **OpenClaw** (#13583), **PicoClaw** (#1042), **NanoClaw** (#2340/2341), **Hermes** (#13951) | Pre-response enforcement hooks for high-stakes workflows; configurable command allow/denylists; user approval prompt reliability; preventing unsafe tool execution at any autonomy level. |
| **Modular/Skill-Based Architecture** | **OpenClaw** (#12678/#12219), **Moltis** (#973), **NanoClaw** (#869, #2320), **CoPaw** (#3238) | Capability-based permissions for skills/tools; dynamic skill discovery (A2A); a "batteries-included" set of built-in skills; standardized skill/plugin manifests. |

### 5. Differentiation Analysis

| Feature / Focus | OpenClaw | Hermes Agent | IronClaw/Moltis | PicoClaw/NanoClaw | LobsterAI | CoPaw / ZeroClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Target User** | Power user / Advanced developer | Developer / Multi-platform operator | Rust/WASM systems engineer | Bot operator / Channel broadcaster | Chinese market enterprise user | General developer / Desktop user |
| **Key Architecture** | Plugin-based channel runtime | Event-driven "Brain" control plane | WASM sandbox (Reborn) | Multi-agent discovery | Electron/Desktop with skill plugins | Desktop-native (macOS) + gateway |
| **Release Cadence** | **Daily** (Mature CI/CD) | Major releases (v0.13.0) | Major + Daily (Mutlis) | Nightly builds | Patch releases | Blocked (v0.7.5) |
| **Security Approach** | Guardian/Approval pipelines, Root guards | Approval prompts (P1 bug: frozen) | WASM isolation, CVE patching | GuardCommand, security.yml | WIP (Membership auth issues) | Shell tool block at full autonomy (S1 bug) |
| **Community Engagement** | **Highest** (1000 updates/day) | Very high (588 merged PRs) | High (Core team + contributions) | High | Moderate | High |
| **Primary Weakness** | Plugin compatibility fragility on upgrade | macOS support gaps; P1 bugs unfixed | Downstream crate publishing blocked | Session history confusion | Windows path / IM channel gaps | Release pipeline blocked; large open backlog |

### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating (High Intense)** — These projects are shipping code at a blistering pace, but with a higher risk of regressions.
    - **OpenClaw** (Daily releases, 1000 updates/day) is the clear leader in volume.
    - **Hermes Agent** (v0.13.0, 588 PRs) is in a major growth phase post-release.
    - **IronClaw / Moltis** (Daily major updates) are pioneering the next generation of Rust/WASM architecture.
    - **ZeroClaw** and **CoPaw** (50+ Issues/PRs each) are in heavy feature addition mode.

- **Tier 2: Stabilizing & Growing (Moderate, Healthy)** — These projects have strong throughput but are also dealing with technical debt and a growing backlog.
    - **NanoBot, NanoClaw, PicoClaw** show high activity with a mix of feature work and bug fixes (session history, A2A routing). They are building out their ecosystems.
    - **LobsterAI** is in a stabilizing phase, cherry-picking features into a release branch and fixing Windows-specific bugs.

- **Tier 3: Low Latency (Quiet)** — No activity detected in this window.
    - **TinyClaw, ZeptoClaw** are dormant or have not reported activity in the last 24 hours.

### 7. Trend Signals (Industry Implications for AI Agent Developers)

1.  **Multi-Agent is Moving from Experiment to Production:** The combined focus on A2A routing (NanoClaw), agent-to-agent trust protocols (Moltis), and session management across channels signals that developers are deploying multi-agent systems in production and are hitting real-world data consistency and state management problems.

2.  **Security is the #1 Adoption Bottleneck:** The simultaneous emergence of "Masked Secrets," "Pre-response Hooks," "Permission Manifests," and "denylist for exec approvals" is not a coincidence. The community's feedback is clear: prompt-based safety is insufficient for production. The market is demanding **default-deny, capability-based security models**.

3.  **Cross-Platform & Provider Compatibility is a Distinguishing Feature:** Regressions on macOS (Hermes, ZeroClaw) and Windows (LobsterAI, ZeroClaw), and provider-specific bugs (Gemini, DeepSeek, Mistral) are the most common pain points. An agent platform that can offer a truly **consistent experience across all major OSes and LLM providers** will have a significant advantage.

4.  **The "Desktop-Native" Agent is a Growing Niche:** The coordinated push on desktop features from ZeroClaw (onboarding, menu-bar, universal binary) and LobsterAI suggests a distinct market for desktop-integrated assistants that require deep OS-level permissions (screenshots, AppleScript, file system access).

5.  **The "Brain" is the New Frontier:** Hermes Agent's focus on a self-improving "Brain" control plane (pattern detection, rule rollout) represents a shift from agents as tools to **agents as autonomous systems that can debug and improve their own behavior**. This could become the defining architectural trend for the next 12 months.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-08

## 1. Today's Overview
Project NanoBot shows **high activity** with 22 PRs updated and 9 issues updated in the last 24 hours. A strong **maintenance cadence** is visible: 6 issues were closed and 7 PRs were merged/closed, indicating active triage and throughput. The project remains release-stable with no new versions shipped, but a substantial set of bug fixes, infrastructure improvements, and feature work is in the pipeline (15 open PRs). Community engagement is robust across channels, WebSocket, and agent reliability topics.

## 2. Releases
None.

## 3. Project Progress
Seven PRs were merged or closed today, advancing several areas:
- **Agent & Memory**: [#3660](https://github.com/HKUDS/nanobot/pull/3660) restored Dream cursor with memory state, fixing a regression where memory restores lost cursor position. [#3686](https://github.com/HKUDS/nanobot/pull/3686) unified archiving paths with a rolling summary buffer, fixing an information funnel where earlier context was silently dropped.
- **API Fixes**: [#3677](https://github.com/HKUDS/nanobot/pull/3677) removed `enable_compression` to restore real SSE streaming — the compression buffer was batching all chunks instead of delivering them incrementally.
- **Developer Experience**: [#3672](https://github.com/HKUDS/nanobot/pull/3672) enabled full Ruff F-rule checks, catching over 20 new F821 (undefined name) and other errors at CI stage.
- **Auth**: [#3221](https://github.com/HKUDS/nanobot/pull/3221) added a `nanobot auth` command with OAuth Device Flow and gateway provider registration.
- **WhatsApp Channel**: [#3688](https://github.com/HKUDS/nanobot/pull/3688) added a `/sync-meta` admin command to push conversational components to WhatsApp Business API.
- **Documentation**: [#3608](https://github.com/HKUDS/nanobot/pull/3608) added local setup docs for the "Sen" agent.

## 4. Community Hot Topics

| Item | Type | Comments | Reaction |
|------|------|----------|----------|
| [#3682](https://github.com/HKUDS/nanobot/issues/3682) — WebSocket handshake failure | Issue (Closed) | 3 | 0 👍 |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) — Configure bot name & icon | Issue (Open) | 2 | 0 👍 |
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) — Request to disable Dream feature | Issue (Open) | 2 | 0 👍 |

**Analysis**: The most engaging issue was [#3682](https://github.com/HKUDS/nanobot/issues/3682) — a WebSocket handshake failure that sparked discussion but was quickly closed (likely a duplicate or user-error). Two meaningful enhancement requests remain open: [#3650](https://github.com/HKUDS/nanobot/issues/3650) (bot name/icon customization) and [#3652](https://github.com/HKUDS/nanobot/issues/3652) (disabling the Dream module). The Dream disable request has been open for 2 days with no official response yet. The bot customization request is marked as `good first issue`, suggesting maintainers see it as approachable for new contributors.

## 5. Bugs & Stability

Severity ranking (high → low):

**Critical**
- [#3682](https://github.com/HKUDS/nanobot/issues/3682) — WebSocket handshake failure on gateway startup (closed, likely resolved or user config).
- [#3665](https://github.com/HKUDS/nanobot/issues/3665) — `deepseek-v4-flash` returns "reasoning_content must be passed back" after a few queries (closed with [PR #3677](https://github.com/HKUDS/nanobot/pull/3677) fix — compression was interfering with streaming state).

**Medium**
- [#3681](https://github.com/HKUDS/nanobot/issues/3681) — Recurring LLM timeout after 300s on Windows (closed, likely external).
- [#3604](https://github.com/HKUDS/nanobot/issues/3604) — WhatsApp voice messages not downloaded for transcription (closed).
- [#3683](https://github.com/HKUDS/nanobot/issues/3683) — WebSocket access fails on Windows/Mac browsers but works on mobile (closed, likely CORS/network issue).

**Low**
- [#3689](https://github.com/HKUDS/nanobot/issues/3689) — Session history lost when interrupting a running task (open, reported today). PR [#3680](https://github.com/HKUDS/nanobot/pull/3680) (open) addresses a related corruption edge case: when `last_consolidated` exceeds actual message count, the bot loses all history.
- [#3687](https://github.com/HKUDS/nanobot/pull/3687) — Counterpart fix consolidating history hidden by replay window (open PR).

## 6. Feature Requests & Roadmap Signals

- **Bot Personalization** ([#3650](https://github.com/HKUDS/nanobot/issues/3650)): Configurable bot name and icon in agent mode. Marked `good first issue` — likely candidates for a next minor release.
- **Dream Module Toggle** ([#3652](https://github.com/HKUDS/nanobot/issues/3652)): User wants an `enabled` flag to fully disable the Dream feature. No maintainer response yet; could be added as a config toggle.
- **SimpleX Channel** ([#3486](https://github.com/HKUDS/nanobot/pull/3486)): New messaging channel via SimpleX CLI — open since Apr 27, no merge yet but actively maintained.
- **Local Whisper Support** ([#3513](https://github.com/HKUDS/nanobot/pull/3513)): Unifies transcription providers and adds local Whisper support — open for 10 days, significant feature.
- **CLI Reasoning Display** ([#3655](https://github.com/HKUDS/nanobot/pull/3655)): Show model reasoning content during streaming in the CLI. Open, looks close to ready.
- **Stock Market Analysis** ([#1219](https://github.com/HKUDS/nanobot/pull/1219)): Long-open feature PR (since Feb) adding three skills — market analysis, code performance analysis, and test case generation. **Backlog risk** — no activity in 2+ months.

**Prediction**: The next minor release will likely include bot personalization config, Dream toggle, SimpleX channel (if merged soon), and local Whisper support. The streaming and memory fixes in the current batch are likely hotfix candidates.

## 7. User Feedback Summary

- **Pain Points**:
  - *WebSocket deployment is inconsistent across platforms*: Windows/Mac browser users face connection issues while mobile works ([#3683](https://github.com/HKUDS/nanobot/issues/3683)).
  - *Session history loss* when interrupting tasks: "It forgets what it was doing and asks me what 'test' refers to" ([#3689](https://github.com/HKUDS/nanobot/issues/3689)).
  - *LLM timeouts* on Windows with 0.1.5post3: recurring 300s timeout errors, possibly LLM-side ([#3681](https://github.com/HKUDS/nanobot/issues/3681)).
  - *WhatsApp voice messages* not transcribed at all ([#3604](https://github.com/HKUDS/nanobot/issues/3604)).
- **Satisfaction Signals**: Strong community contribution rate — 22 PRs in 24h, with 7 merged/closed indicates active maintainer engagement and contributor retention. The deepseek-v4-flash fix was turned around in 24 hours (issue → closed + merged fix).
- **Use Cases**: Conversational agents across WeChat, WhatsApp, CLI, Telegram, and now SimpleX. Users want more control over agent identity (name/icon) and the ability to disable memory-intensive features like Dream.

## 8. Backlog Watch

| Item | Type | Age | Issue |
|------|------|-----|-------|
| [#1219](https://github.com/HKUDS/nanobot/pull/1219) — Stock market analysis skills | PR (Open) | ~71 days | No activity since Mar 10. Added 3 new skills + docs + tests. Needs review/merge decision. |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) — Decouple heartbeat reasoning from notification | PR (Open) | ~67 days | Silent reasoning mode for heartbeat agent. No comments from maintainers. Core agent behavior change. |
| [#1835](https://github.com/HKUDS/nanobot/pull/1835) — Support arbitrary LLM backend arguments | PR (Closed) | ~59 days | Closed after 2 months — worth checking if the fix was merged or rejected. |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) — SimpleX channel | PR (Open) | 11 days | Feature PR, active discussion, no maintainer review yet. |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) — Local Whisper support | PR (Open) | 10 days | Significant feature, no maintainer review yet. |

**Maintainer attention needed**: PRs #1219 and #1443 are long-stale and represent significant feature work — maintainers should provide guidance or close them. #3486 and #3513 are recent but unreviewed; the SimpleX and Whisper features have clear community demand.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-08

## 1. Today's Overview

Hermes Agent is experiencing a surge of activity, with 50 issues and 50 pull requests updated in the last 24 hours, indicating a highly engaged contributor community following the v0.13.0 "Tenacity Release" on May 7. The project has 35 open/active issues and 45 open PRs, suggesting a healthy pipeline of improvements and fixes being actively developed. A single new release, v0.13.0, was cut yesterday, representing 864 commits, 588 merged PRs, and contributions from 295 community contributors since the prior version. Activity today is dominated by bug fixes (especially around platform gateways and CLI reliability), configuration improvements, and foundational "Brain" control plane features that were merged from a months-long backlog.

## 2. Releases

**Hermes Agent v0.13.0 (v2026.5.7)** — *The Tenacity Release*
- **Release Date:** May 7, 2026
- **Highlights:** 864 commits, 588 merged PRs, 829 files changed, 128,366 insertions, 282 issues closed (including 13 P0, 36 P1)
- **Key changes** (inferred from commit/issue volume): Major stability improvements to agent task completion, gateway reliability, and provider fallback behavior. The "Tenacity" theme suggests enhanced retry logic and persistence mechanisms across the agent lifecycle.

*No additional versions released today. Migration notes should be checked in the full release notes at https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7.*

## 3. Project Progress

Today saw **5 merged/closed PRs** from the top-20 tracked:

- **PR #21286** (closed) — *fix(agent): inherit model.api_key when auxiliary base_url matches main endpoint* — Fixes HTTP 401 on auxiliary tasks when API keys are not explicitly provided but the endpoint matches the main model. Critical for title generation and other background tasks.
- **PR #21672** (closed) — *feat(kaspa): add read-only capability toolset* — Adds an opt-in `kaspa` toolset with REST health checks and address queries for the Kaspa/Kasia blockchain.
- **PR #21640** (open but actively worked) — *fix(gateway): queue busy follow-ups during final delivery* — Fixes a race condition where follow-up messages during final delivery could cause lost replies.
- **PR #21670** (open) — *fix(delegate): skip toolset intersection when parent has all tools enabled* — Prevents child agents from losing file/terminal tools when parent has all tools enabled (common for cron jobs).
- **PR #21669** (open) — *fix(cli): discover MCP tools on direct startup* — Ensures MCP servers are connected before session begins in all CLI entrypoints.

Notable merged **feature work** includes the long-running [Brain control plane rollout backlog](https://github.com/NousResearch/hermes-agent/issues/12350) — a series of 8 closed issues (#12343–#12350) covering normalized event contracts, event persistence, pattern aggregation, rule candidate registries, rollout/canary/revert lifecycle, operator APIs, and machine-readable views. This represents a significant architectural investment in making Hermes a self-improving control plane.

## 4. Community Hot Topics

- **[Issue #20842](https://github.com/NousResearch/hermes-agent/issues/20842) — Kanban migration fails after update** (CLOSED, 6 comments, P3) — A SQLite schema error (`no such column spawn_failures`) on Kanban dispatcher after auto-update. This was the most-commented issue today, indicating migration hiccups affect real deployments.

- **[Issue #13951](https://github.com/NousResearch/hermes-agent/issues/13951) — CLI approval prompt frozen by background output flooding** (OPEN, 3 comments, P1, 2 👍) — A long-standing usability issue where terminal output from the agent floods the terminal during dangerous command approvals, making the prompt unresponsive. High severity (P1) reflects the safety-critical nature of approval prompts.

- **[Issue #18793](https://github.com/NousResearch/hermes-agent/issues/18793) — image_gen openai plugin: API_MODEL hardcoded** (OPEN, 2 comments, P3) — A hardcoded `gpt-image-2` model name prevents use of third-party OpenAI-compatible backends. Simple config fix needed.

- **[Issue #13971](https://github.com/NousResearch/hermes-agent/issues/13971) — `_is_ollama_glm_backend()` false positive** (OPEN, 2 comments, P1) — A spurious truncation continuation for non-Ollama setups using local API proxies, causing unnecessary API calls and degraded user experience.

- **[Issue #21026](https://github.com/NousResearch/hermes-agent/issues/21026) — Gateway: Multi-platform WebSockets share single event loop, causing cascading disconnections** (OPEN, 2 comments, P2) — Running WeChat Work + Feishu + QQ Bot simultaneously causes all WebSocket connections to drop when one message processing task blocks the event loop. A fundamental architectural concern for multi-platform deployments.

**Underlying needs:** Users are actively deploying Hermes in multi-platform, multi-provider environments and encountering integration pain points at the intersection of plugin configuration, provider-specific behaviors, and shared infrastructure (event loop, lock files). There's strong demand for configuration flexibility and platform-agnostic behavior.

## 5. Bugs & Stability

**P1 (Critical) — 2 open bugs:**
- **[Issue #13951](https://github.com/NousResearch/hermes-agent/issues/13951)** — CLI approval prompt frozen by background output flooding. **No fix PR yet.**
- **[Issue #13971](https://github.com/NousResearch/hermes-agent/issues/13971)** — False positive Ollama detector causes spurious truncation across all non-Ollama providers. **No fix PR yet.**

**P2 (High) — 7 open bugs reported today:**
- **[Issue #21026](https://github.com/NousResearch/hermes-agent/issues/21026)** — Cascading WebSocket disconnections from shared event loop architecture.
- **[Issue #21666](https://github.com/NousResearch/hermes-agent/issues/21666)** — `hermes acp` triggers OpenAI safety refusal on simple greetings with OpenRouter mini-class models.
- **[Issue #21633](https://github.com/NousResearch/hermes-agent/issues/21633)** — QQ Bot WebSocket silently dies without reconnection after heartbeat ACK timeout.
- **[Issue #21623](https://github.com/NousResearch/hermes-agent/issues/21623)** — `@` autocomplete freezes terminal in tmux on macOS (70%+ CPU spike).
- **[Issue #21613](https://github.com/NousResearch/hermes-agent/issues/21613)** — Telegram gateway lock has `start_time=null` on macOS, causing PID reuse false positives.
- **[Issue #21596](https://github.com/NousResearch/hermes-agent/issues/21596)** — Stale platform-lock detection broken on macOS (non-Linux platforms).
- **[Issue #21444](https://github.com/NousResearch/hermes-agent/issues/21444)** — All `openai-codex` / `gpt-5.5` primary calls hang silently for full stale timeout (300s) before fallback.

**P3 (Medium — 5 open bugs reported today):**
- **[Issue #21653](https://github.com/NousResearch/hermes-agent/issues/21653)** — Feishu platform requires `lark-oapi` dependency not listed in `pyproject.toml`.
- **[Issue #21656](https://github.com/NousResearch/hermes-agent/issues/21656)** — Dockerfile installs Node 20 vs install.sh pins Node 22, breaking web asset builds.
- **[Issue #21562](https://github.com/NousResearch/hermes-agent/issues/21562)** — Native image generation doesn't accept images as input (reference_images unsupported).
- **[Issue #21677](https://github.com/NousResearch/hermes-agent/issues/21677)** — `/sessions` slash command returns "Unknown command" in Dashboard/TUI.
- **[Issue #20001](https://github.com/NousResearch/hermes-agent/issues/20001)** (CLOSED) — Ghost sessions from TUI compression continuation, partially fixed.

**Regressions from v0.13.0:** The Kanban migration failure (#20842) is a confirmed post-update regression. The Node version mismatch (#21656) and Feishu dependency gap (#21653) are setup/upgrade regressions.

**Fix PRs exist for:** 
- PR #21669 (fix CLI MCP discovery) — addresses inconsistent startup behavior
- PR #21670 (fix delegate toolset intersection) — prevents tool loss in child agents
- PR #21673 (harden Telegram media/reconnect) — addresses platform stability
- PR #21640 (queue follow-ups during final delivery) — prevents lost replies

## 6. Feature Requests & Roadmap Signals

**High-probability for next release:**

- **Per-channel personality and model routing** ([Issue #21637](https://github.com/NousResearch/hermes-agent/issues/21637), P3) — Extends existing `channel_prompts` to bind channels to specific personalities and models. This aligns with the gateway's growing multi-platform support and would enable differentiated behavior per chat platform (e.g., formal on Slack, casual on Discord).

- **Eager rate-limit fallback config** ([PR #21678](https://github.com/NousResearch/hermes-agent/pull/21678)) — New config option `agent.eager_rate_limit_fallback` (default `true`) to control whether 429/402 errors trigger immediate fallback vs. retry loop. Directly addresses user pain with provider billing mishaps.

- **Dashboard profile-scoped config visibility** ([Issue #21642](https://github.com/NousResearch/hermes-agent/issues/21642), P3) — Users want the web dashboard to show profile-specific configurations, not just global config.

- **Home Assistant env split** ([PR #21676](https://github.com/NousResearch/hermes-agent/pull/21676)) — Splits Home Assistant tool vs. platform configuration into separate env vars, enabling tool-only setups without websocket platform.

**Moderate probability:**

- **Skill execution logging** ([Issue #21625](https://github.com/NousResearch/hermes-agent/issues/21625), P3) — Simple but valuable observability improvement for skill/tool execution.
- **Discord OpenAI Realtime voice bridge** ([PR #21445](https://github.com/NousResearch/hermes-agent/pull/21445), P3) — Ambitious feature adding real-time voice conversations through Discord.
- **Desktop app** ([PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059), P3) — Electron/Vite desktop app with chat, composer, voice controls. Significant scope, likely multi-release.

**Roadmap signal:** The merging of all 8 "Brain" control plane issues (#12343–#12350) signals a major architectural shift toward self-improving agents with event persistence, pattern detection, and rule rollout capabilities — this will likely underpin future releases' autonomous improvement features.

## 7. User Feedback Summary

**Pain points (high consensus):**
- **macOS support gaps** — Multiple issues today (#21613, #21596, #21623) specifically cite macOS where Linux-centric assumptions (e.g., `/proc/` filesystem) cause platform-lock failures, stale detection, and terminal freezes. macOS users are a vocal and underserved segment.
- **Configuration fragility** — Hardcoded model names (#18793), Node version mismatches (#21656), missing dependencies (#21653), and profile config invisibility (#21642) all point to configuration as a major friction point.
- **Multi-platform reliability** — Users running 3+ platforms simultaneously (#21026) or specific platforms (Telegram, QQ Bot) report silent failures, lost connections, and race conditions.
- **Provider-specific gotchas** — DeepSeek thinking mode (#21668), OpenRouter safety refusals (#21666), OpenAI Codex hangs (#21444) — users are frustrated by provider-specific workarounds.

**Satisfaction signals:**
- High community engagement (295 contributors, 588 merged PRs in v0.13.0)
- Active issue triage — P1 issues getting attention, though some remain open
- Feature requests are well-scoped and have clear use cases
- The "Brain" control plane work (8 issues, all closed) suggests the community values autonomous agent capabilities

**Dissatisfaction signals:**
- Long-standing P1 bugs (#13951, #13971) from April 22 remain unfixed
- macOS-specific issues persist despite being reported (this is a recurring pattern)
- Post-upgrade regressions (#20842) suggest testing gaps in the release pipeline

## 8. Backlog Watch

**Critical unattended items:**

- **[Issue #13951](https://github.com/NousResearch/hermes-agent/issues/13951)** — P1 CLI approval prompt frozen (OPEN since April 22, 3 comments, 2 👍). **14 days without maintainer action.** A safety-critical bug that could lead to accidental command execution.

- **[Issue #13971](https://github.com/NousResearch/hermes-agent/issues/13971)** — P1 false positive Ollama detector (OPEN since April 22, 2 comments). **14 days without maintainer action.** Affects all non-Ollama users of local API proxies.

- **[Issue #16623](https://github.com/NousResearch/hermes-agent/issues/16623)** — P1 local OpenAI-compatible config resolves back to OpenRouter (OPEN since April 27, 1 comment, 1 👍). **11 days without maintainer response.** A fundamental configuration faithfulness issue.

**Long-running open PRs needing review:**

- **[PR #17917](https://github.com/NousResearch/hermes-agent/pull/17917)** — P3 feature for CLI/gateway/tools (OPEN since April 30, 0 comments). **8 days stale without any review activity.**

- **[PR #18280](https://github.com/NousResearch/hermes-agent/pull/18280)** — P2 fix for Mattermost thread isolation (OPEN since May 1, 0 comments). **7 days stale.** Critical for Mattermost multi-thread functionality.

- **[PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059)** — Desktop app (OPEN since May 5, 0 comments). **3 days stale.** Large feature that needs architectural review.

**Closed today after long inactivity:** The "Brain" control plane issues (#12343–#12350, all P3, from April 19) were closed today, suggesting maintainers merged or resolved a significant backlog item.

**Recommendation:** The three P1 issues (#13951, #13971, #16623) should be prioritized for maintainer response, as they represent safety and core functionality regressions affecting a broad user base. The macOS platform support gap deserves a systematic investigation rather than piecemeal fixes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-08

## Today's Overview
PicoClaw shows **high activity** today with 35 issues updated and 48 PRs updated in the last 24 hours, indicating a healthy, fast-moving project. A new nightly build (v0.2.8-nightly) was released, though labeled as potentially unstable. The project's maintainers merged or closed 27 PRs today, signaling strong forward momentum. However, 13 open issues remain active, including several long-standing bugs and enhancement requests that suggest growing pains from rapid feature expansion. The community remains engaged, with multiple multi-comment threads on critical topics like API provider reliability and session history management.

## Releases
A single new release was published today:
- **nightly: Nightly Build** — `v0.2.8-nightly.20260508.2834db13`
  - This is an automated nightly build based on the main branch; may be unstable.
  - No explicit breaking changes or migration notes provided.

**Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## Project Progress
Today saw **27 merged/closed PRs**, with notable contributions:

### Security & Infrastructure
- **PR #2818** — Bumped Go to 1.25.10 to fix three critical stdlib vulnerabilities (`GO-2026-4976`, `GO-2026-4971`, `GO-2026-4976`) [GitHub](https://github.com/sipeed/picoclaw/pull/2818)
- **PR #2821** — Toolchain bump to match Go version [GitHub](https://github.com/sipeed/picoclaw/pull/2821)
- Multiple `dependabot` dependency bumps: OpenAI SDK v3.22→v3.34 (PR #2805), Slack SDK v0.17.3→v0.23.0 (PR #2802), Copilot SDK v0.2.0→v0.2.2 (PR #2800), and frontend deps (i18next, react-i18next, Tabler icons, shadcn, globals)

### Feature Work (Open PRs)
- **PR #2158** — Multi-agent discovery prompt registry (Layer 1) [GitHub](https://github.com/sipeed/picoclaw/pull/2158)
- **PR #2719** — New `slack_webhook` output-only channel with Block Kit support [GitHub](https://github.com/sipeed/picoclaw/pull/2719)
- **PR #2752** — Improved model configuration workflows in Web UI [GitHub](https://github.com/sipeed/picoclaw/pull/2752)
- **PR #2413** — Refactored LINE channel to use official SDK v8 [GitHub](https://github.com/sipeed/picoclaw/pull/2413)

### Bug Fixes (Merged)
- **PR #2819** — Added non-destructive `/reset` command for session history (also a feature) [GitHub](https://github.com/sipeed/picoclaw/pull/2819)

### Open Fix PRs
- **PR #2823** — Dismiss tool feedback when outbound is skipped [GitHub](https://github.com/sipeed/picoclaw/pull/2823)
- **PR #2822** — Fix child tool feedback dismissal after sync completion [GitHub](https://github.com/sipeed/picoclaw/pull/2822)
- **PR #2789** — Make tool feedback edit throttle configurable [GitHub](https://github.com/sipeed/picoclaw/pull/2789)
- **PR #2791** — Preserve Telegram topic context for final replies [GitHub](https://github.com/sipeed/picoclaw/pull/2791)

---

## Community Hot Topics

### Most Active Issue
**Issue #629** (`[BUG] Didn't retry if meet LLM call failed`) — 13 comments, still open. Created February 2026, still unresolved. This is a long-running pain point: when an LLM provider returns HTTP 500, the agent hangs instead of retrying. The issue affects reliability-sensitive workflows. [GitHub](https://github.com/sipeed/picoclaw/issues/629)

### High-Engagement Closed Issues
- **Issue #2408** (`LLM Account Stacking / API key rotation`) — 11 comments, closed. Users want automatic fallback between multiple API keys when rate limits hit. [GitHub](https://github.com/sipeed/picoclaw/issues/2408)
- **Issue #2171** (`Migrate OpenAI endpoints to Responses API`) — 10 comments, still open. This reflects OpenAI's deprecation of Chat Completions API; PicoClaw needs to keep pace. [GitHub](https://github.com/sipeed/picoclaw/issues/2171)
- **Issue #2468** (`Scheduled Task Fails to Execute`) — 8 comments, closed. Tool execution restriction for `cron` tool in non-internal channels. [GitHub](https://github.com/sipeed/picoclaw/issues/2468)
- **Issue #1763** (`aarch64 .deb not install`) — 8 comments, closed. Package installation issues on ARM64. [GitHub](https://github.com/sipeed/picoclaw/issues/1763)

### Underlying Needs
These discussions reveal users want **production-grade reliability** (retry logic, API key rotation, proper error handling) and **multi-channel consistency** (cron scheduling, message ordering, attachment handling). The project's rapid feature addition is creating gaps in robustness.

---

## Bugs & Stability

### Critical
- **Issue #2721** (`Session history race still reproducing in v0.2.5` — `tool_use_id` 400 from Anthropic) — **OPEN**, high priority. This is a recurring race condition in session history that breaks Anthropic API integration. Despite v0.2.5, the issue persists. [GitHub](https://github.com/sipeed/picoclaw/issues/2721)
- **Issue #2702** (`Multi-user group channels: conversation history lacks sender attribution`) — **OPEN**. Security/privacy concern: in group channels with default session scope, historical messages lack sender identification beyond the current message. [GitHub](https://github.com/sipeed/picoclaw/issues/2702)

### High
- **Issue #2796** (`History shows only last user message, others missing`) — **OPEN**, filed today. Users can only see the most recent message in conversation history; previous messages are hidden. [GitHub](https://github.com/sipeed/picoclaw/issues/2796)
- **Issue #1042** (`exec tool guardCommand path validation too strict`) — **OPEN**, 8 comments. The command safety guard incorrectly blocks legitimate commands like `wttr.in/Beijing`. [GitHub](https://github.com/sipeed/picoclaw/issues/1042)

### Medium
- **Issue #629** (`No retry on LLM call failure`) — **OPEN**, 5 months old. Tasks hang indefinitely on transient provider errors. [GitHub](https://github.com/sipeed/picoclaw/issues/629)
- **Issue #346** (filed as #348) (`General Attachment Support`) — **OPEN**, high priority. Cross-channel file/media handling still not fully implemented. [GitHub](https://github.com/sipeed/picoclaw/issues/348)

### Related Fix PRs
- PR #2823 and #2822 address tool feedback dismissal issues that could cause message duplication or incorrect state.
- PR #2819's `/reset` command addresses the destructive `/clear` issue (see Issue #2820 below).
- PR #2789 adds configurability for tool feedback throttling, addressing channel-specific behavior quirks.

---

## Feature Requests & Roadmap Signals

### Strong Community Demand
1. **LLM Account Stacking / API Key Rotation** (#2408, closed) — Users want automatic failover between multiple API keys for rate limit/quota handling. Likely to appear in next minor version given community demand.
2. **Migrate to OpenAI Responses API** (#2171, open) — Required for continued OpenAI compatibility. Critical path item.
3. **Multi-Agent Discovery** (#2158, open PR) — Layer 1 agent registry is in review; this is a major architectural feature.

### New Today
- **Issue #2820** (`Non-destructive fresh-session reset without deleting Seahorse history`) — Filed today, has an open PR (#2819) implementing `/reset`. Likely to land in next nightly. [GitHub](https://github.com/sipeed/picoclaw/issues/2820)
- **Issue #2796** (`History shows only last user message`) — Users want full conversation history visible in UI, not compressed for the LLM. [GitHub](https://github.com/sipeed/picoclaw/issues/2796)

### Emerging Patterns
- **Email channel (SMTP)** (#2465, closed) — Feature request for sending task results via SMTP for periodic/weekly reports.
- **Multiple Feishu apps** (#2493, closed) — Users want to run multiple Feishu bot instances simultaneously.
- **Slack webhook channel** (#2719, open PR) — Being actively implemented by contributor `loafoe`.
- **MCP server secrets in .security.yml** (#2444, closed, 2 👍) — Security-conscious users want centralized secret management.

---

## User Feedback Summary

### Pain Points
- **Reliability**: The most upvoted persistent pain is the lack of retry logic on LLM call failures (#629, 5 months old). Users running long tasks experience hanging without recovery.
- **Session History Confusion**: Multiple issues today (#2796, #2820, #2721) show users are frustrated with how session history is stored, displayed, and reset. The distinction between "LLM context" and "user-visible history" is not clear.
- **Telegram Topic Support**: PR #2791 addresses a reported issue where replies to Telegram forum topics lose their topic context.
- **Gateway Configuration Confusion**: Issue #2438 (closed) and #2439 (closed) from `bamnenim-permissionlabs` reveal that environment variable naming and token override behavior are undocumented, causing broken integrations. The user explicitly called this "non-discoverable."

### Satisfaction Signals
- Users are actively contributing feature PRs (Slack webhook, LINE SDK upgrade, multi-agent discovery), suggesting a healthy contributor community.
- The fast pace of bug fixes (22 closed issues today) indicates maintainers are responsive.

### Dissatisfaction Signals
- One explicit negative comment in issue #2429 (closed): "Some kind of broken garbage that doesn't allow me to use the added models in any way." While isolated, this indicates some users find configuration painful.
- Session history race (#2721) specifically states "reopening as new issue since #704 is closed without a visible fix," indicating frustration with prior resolution attempts.

---

## Backlog Watch

### Long-Unanswered Important Issues
| Issue | Age | Priority | Status |
|-------|-----|----------|--------|
| **#629** — LLM call retry | 5 months (Feb 22) | High | **OPEN**, 13 comments — No maintainer response visible in summary |
| **#348** — General Attachment Support | 3 months (Feb 17) | High (roadmap) | **OPEN**, 3 comments — Marked as roadmap item, no PR |
| **#2171** — OpenAI Responses API migration | 6 weeks (Mar 30) | Medium | **OPEN**, 10 comments — Needs maintainer decision |
| **#1042** — exec tool guardCommand too strict | 10 weeks (Mar 4) | Medium | **OPEN**, 8 comments, 2 👍 — Active community discussion |

### PRs Needing Attention
- **PR #2158** — Multi-agent discovery (6 weeks old) — Large architectural change, no merge activity.
- **PR #2413** — LINE SDK v8 refactor (1 month old) — Dependencies may block merge.
- **PR #2752** — Model config UI improvements (5 days old) — Recently updated, likely active.

### Risk Note
The **3-month-old attachment support roadmap item** (#348) has no visible progress, yet attachment handling is becoming a recurring theme in user issues (file uploads, media processing). If PicoClaw aims to compete with assistants that handle documents natively, this gap may become a competitive weakness.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-08

## Today's Overview

The project shows **high sustained development velocity** with 35 PRs updated in the last 24 hours (22 merged/closed) and 9 issues updated (5 open). Activity is concentrated on **security hardening**, **agent-to-agent (A2A) routing reliability**, and **skill ecosystem expansion**. A significant TypeScript build breakage was introduced and promptly addressed across multiple PRs. Several critical bugs around session routing and credential management remain open with high priority tags. The project is actively shipping code while wrestling with architectural complexity around multi-session, multi-channel agent communication.

## Releases

No new releases today.

## Project Progress

22 PRs were merged or closed in the last 24 hours, spanning several feature areas:

**A2A Routing Fixes (Major push)**
- [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) [CLOSED] — Routes A2A replies back to originating session instead of newest session
- [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) [CLOSED] — Origin-session threading for agent-to-agent replies
- [#2277](https://github.com/qwibitai/nanoclaw/pull/2277) [CLOSED] — Refresh routing context on follow-up messages mid-query

**Skill Ecosystem Growth**
- [#2321](https://github.com/qwibitai/nanoclaw/pull/2321) [CLOSED] — OneCLI gateway container skill with auto-composed instructions
- [#2319](https://github.com/qwibitai/nanoclaw/pull/2319) [CLOSED] — `/add-aws` skill for AWS CLI access in agent containers
- [#2318](https://github.com/qwibitai/nanoclaw/pull/2318) [CLOSED] — `/add-mnemon` persistent semantic memory skill
- [#2320](https://github.com/qwibitai/nanoclaw/pull/2320) [CLOSED] — Documentation updates for 6 skills

**Setup & User Experience**
- [#2324](https://github.com/qwibitai/nanoclaw/pull/2324) [CLOSED] — Adds "Skip — I'll connect later" option to Claude auth picker
- [#2316](https://github.com/qwibitai/nanoclaw/pull/2316) [CLOSED] — Adds back-to-channels exit to "Other…" channel prompt

**Container & Build Stability**
- [#2336](https://github.com/qwibitai/nanoclaw/pull/2336) [CLOSED] — Fixes Claude Code install for pnpm v11 (stub binary bug)
- [#2335](https://github.com/qwibitai/nanoclaw/pull/2335) [CLOSED] — Pins container pnpm to 10.33.0 to match host

**Quality of Life**
- [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) [CLOSED] — Injects destination reminder after SDK auto-compaction
- [#2328](https://github.com/qwibitai/nanoclaw/pull/2328) [CLOSED] — Defaults reply destination to message origin in multi-destination groups

## Community Hot Topics

**Most active issues share a theme: credential management and session routing**

- **[#869](https://github.com/qwibitai/nanoclaw/issues/869) [OPEN, High Priority]** — Per-group credential management and interactive reauth: 3 comments. This issue has been open since March 9 and continues to draw attention. The underlying need is **tenant isolation** — users want separate API keys, quotas, and identities per group, rather than sharing a single `.env` credential set across all groups.

- **[#2331](https://github.com/qwibitai/nanoclaw/issues/2331) + [#2332](https://github.com/qwibitai/nanoclaw/issues/2332) [OPEN, High Priority]** — `findSessionByAgentGroup` routes A2A replies to wrong session. These duplicate reports (from different authors) highlight a critical routing bug where recency-based session selection fails in multi-channel groups. The community is clearly hitting this in production.

**Most active PRs:**
- [#2347](https://github.com/qwibitai/nanoclaw/pull/2347) [OPEN, new today] — Preserve thread context when system message heads the batch. Freshly opened, likely to attract discussion on edge cases.
- [#2345](https://github.com/qwibitai/nanoclaw/pull/2345) [OPEN, new today] — Auto-import per-group `CLAUDE.role.md` if present. Addresses the credential/isolation use case with a configuration-based approach.
- [#2337](https://github.com/qwibitai/nanoclaw/pull/2337) [OPEN] — Surface Claude Code skill catalog to non-Claude providers. This extends the skill system's reach beyond Anthropic's ecosystem.

## Bugs & Stability

**Critical (fix PR exists or merged):**
- Session routing misassignment ([#2331](https://github.com/qwibitai/nanoclaw/issues/2331), [#2332](https://github.com/qwibitai/nanoclaw/issues/2332)) — A2A replies go to wrong session in multi-channel groups. PRs [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) and [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) were merged today to address this.
- TypeScript build failure on `main` — Five test-only `tsc` errors from cross-batch changes ([#2339](https://github.com/qwibitai/nanoclaw/pull/2339), [#2344](https://github.com/qwibitai/nanoclaw/pull/2344)). Fix PRs are open.

**High Severity (fix PR exists):**
- Telegram URL corruption ([#2338](https://github.com/qwibitai/nanoclaw/pull/2338)) — Markdown sanitizer removes underscores from URLs. Fix proposed via escaping instead of stripping.

**Medium Severity:**
- Connectivity watchdog dead since May 1 ([#2342](https://github.com/qwibitai/nanoclaw/issues/2342) [CLOSED]) — `com.nanoclaw.watchdog` failed to restart after OrbStack-related Qdrant error. No fix PR yet.

**New Today (no fix yet):**
- OAuth-sync system alert delivery failure ([#2343](https://github.com/qwibitai/nanoclaw/issues/2343) [CLOSED]) — Alert policy not firing when credentials file goes missing.
- `/restart` and `/build` command security gap ([#2340](https://github.com/qwibitai/nanoclaw/issues/2340), [#2341](https://github.com/qwibitai/nanoclaw/issues/2341) [CLOSED]) — No user-level access control on host-restarting bot commands.

## Feature Requests & Roadmap Signals

**Likely next-version features:**
1. **Per-group credential management** ([#869](https://github.com/qwibitai/nanoclaw/issues/869)) — This is the oldest open high-priority issue. With the recent focus on session routing and isolation, credential isolation is a natural next step.
2. **File attachment support in web UI** ([#2334](https://github.com/qwibitai/nanoclaw/issues/2334) [OPEN]) — Users want file upload with paste detection and multi-file support. Cleanly specified with upload flow and storage requirements.
3. **Non-Claude provider skill catalog** ([#2337](https://github.com/qwibitai/nanoclaw/pull/2337) [OPEN]) — Extending Claude Code skills to other providers signals a multi-provider future.
4. **Unknown slash command handling** ([#2346](https://github.com/qwibitai/nanoclaw/pull/2346) [OPEN]) — Stop passing unknown commands to Agent SDK, treat as normal chat.

**Longer-term signals:**
- Multi-provider support (beyond Claude) is being actively prototyped
- Skills are evolving toward dynamic API-driven deployment rather than static files
- User experience during setup is being smoothed (skip options, exit paths)

## User Feedback Summary

**Pain Points:**
- **Session routing confusion** — Users with multi-channel groups experience message misrouting and dropped responses. Multiple duplicate bug reports suggest this is a common production issue.
- **Container build failures** — Fresh container images producing broken `claude` binary (500-byte stub). This caused "Error: Claude Code process exited with code 1" on first message.
- **Setup frustration** — Non-technical users couldn't escape auth or channel picker flows without Ctrl-C (addressed by [#2324](https://github.com/qwibitai/nanoclaw/pull/2324) and [#2316](https://github.com/qwibitai/nanoclaw/pull/2316) today).
- **URL corruption in Telegram** — URLs with underscores get silently mangled by markdown sanitizer.

**Satisfaction Signals:**
- Active skill development (mnemon memory, AWS CLI, OneCLI gateway) suggests the skill ecosystem is engaging developers.
- Quick turnaround on critical fixes (A2A routing, build breakage) within the same day indicates responsive maintainers.

## Backlog Watch

- **[#869](https://github.com/qwibitai/nanoclaw/issues/869) [OPEN since March 9, High Priority]** — Per-group credential management. 3 comments but no PR yet. This is the longest-running open high-priority issue. The community would benefit from a design discussion or RFC to unblock progress.

- **Connectivity watchdog** ([#2342](https://github.com/qwibitai/nanoclaw/issues/2342) [CLOSED]) was dead for 8 days before discovery. The root cause (OrbStack outage, launchd not reviving) may affect other daemons. A system for detecting silent watchdog failures may be needed.

- **OAuth alert policy** ([#2343](https://github.com/qwibitai/nanoclaw/issues/2343) [CLOSED]) was reported and closed without a fix PR. The gap where `sendSystemAlert` doesn't fire on the 3rd consecutive credential read failure remains unaddressed.

No PRs or issues appear to be languishing without maintainer response — the project shows strong triage activity. The main risk is the unaddressed credential isolation requirement (Issue #869), which may grow in urgency as multi-group deployments become more common.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-08

## Today's Overview
NullClaw shows a **high-activity day** with 5 issues and 9 PRs updated in the last 24 hours, including 2 closed issues and 5 merged/closed PRs. No new releases were published, but the project is in a **focused CI/CD improvement cycle**, with two PRs from `DonPrus` targeting nightly build reliability and prerelease publishing. Community contributions remain strong: a hackathon team's Data Governance Layer (PR #885) and a native ACP stdio adapter (PR #896, merged) represent significant feature work. Overall project health is **healthy and active**, with maintainers responsive to both documentation needs and infrastructure improvements.

## Releases
No new releases today. The `nightly prerelease` workflow proposed in [#899](https://github.com/nullclaw/nullclaw/pull/899) may lead to more frequent pre-release builds in the near future.

## Project Progress
**Merged/Closed PRs (5 total):**

- [#898](https://github.com/nullclaw/nullclaw/pull/898) — **CI: Force scheduled nightly builds** (merged). Fixes a dedup bug where scheduled nightly runs could be skipped if a manual run shared the same `head_sha`. Now passes `force=true` to ensure nightly builds always execute.

- [#897](https://github.com/nullclaw/nullclaw/pull/897) — **chore(docs): Add docs for quick Zig setup** (merged). Closes [#820](https://github.com/nullclaw/nullclaw/issues/820) by adding Debian-specific Zig installation documentation, extended for other OSes.

- [#896](https://github.com/nullclaw/nullclaw/pull/896) — **Add native ACP stdio adapter** (merged). A major feature: adds `nullclaw acp` — a native Agent Client Protocol stdio JSON-RPC adapter inside the main binary, supporting initialization, session management, prompt handling, and cancel acknowledgement.

- [#893](https://github.com/nullclaw/nullclaw/pull/893) — **feat(toolkit): integrate zig-qm-toolkit** (merged). Adopts a chezmoi-managed toolkit (28 `.claude/` files) for hooks, agents, skills, and a 4-tier verification system, without modifying existing `AGENTS.md` or `CLAUDE.md`.

- [#790](https://github.com/nullclaw/nullclaw/pull/790) — **fix(providers): Responses API tool schema and null error handling** (merged). Fixes two bugs in OpenAI-compatible provider's Responses API: incorrect tool schema format (Chat Completions format vs Responses API format) and null error handling.

## Community Hot Topics
- [#167](https://github.com/nullclaw/nullclaw/issues/167) — **"Why cannot use the shell command curl and wget"** (10 comments, 1 👍). This closed issue questions hardcoded command restrictions, indicating user frustration with shell tool limitations. Underlying need: users want greater flexibility in allowed shell commands, possibly via a configurable allowlist.

- [#820](https://github.com/nullclaw/nullclaw/issues/820) — **"How to install Zig on Debian?"** (5 comments). Now closed by PR #897. Highlights that Zig's non-standard installation can be a barrier to entry for users unfamiliar with the ecosystem.

- [#473](https://github.com/nullclaw/nullclaw/issues/473) — **"README changes — benchmark snapshot outdated"** (2 comments, 1 👍). User points out stale benchmark data (binary size no longer 1MB, memory >1MB). Reflects community concern about documentation accuracy as the project evolves.

- [#885](https://github.com/nullclaw/nullclaw/pull/885) — **[hackathon] feat(memory): Add NullClaw Data Governance Layer** (0 comments). A draft PR from the WB × OpenSource Hackathon team "Безопасность бэкофиса (DS)". No maintainer feedback yet, which may indicate review backlog for hackathon submissions.

## Bugs & Stability
**No new bugs reported in the last 24 hours.** However, two recently merged PRs address stability-related issues:

- [#790](https://github.com/nullclaw/nullclaw/pull/790) — **Medium severity** (but now fixed). Two bugs in OpenAI Responses API: incorrect tool schema format and null pointer issues in error handling. Affects users with `api_mode=responses`.

- [#898](https://github.com/nullclaw/nullclaw/pull/898) — **Low severity** (CI reliability). Nightly builds could be skipped due to dedup logic; now fixed with `force=true`.

## Feature Requests & Roadmap Signals
- **Lark channel enhancements** (multiple): [#895](https://github.com/nullclaw/nullclaw/issues/895) requests a config option to disable typing placeholder/retract behavior. [#894](https://github.com/nullclaw/nullclaw/issues/894) requests a config option to respond to all group messages, not just @mentions. Both are **likely candidates for the next minor release**, as they are well-scoped, non-breaking config additions.

- **Native ACP protocol support**: [#896](https://github.com/nullclaw/nullclaw/pull/896) (merged today) signals the project is investing in the [Agent Client Protocol](https://github.com/spencerkimball/acp) standard. This could enable interoperability with other AI agents and tool ecosystems.

- **Cron subagent engine**: [#783](https://github.com/nullclaw/nullclaw/pull/783) (still open) continues to evolve. It adds DB-backed scheduling, JSON CLI output, and security hardening. Given its size and duration (open since April 7), it likely targets a v0.x or v1.0 release.

- **Zig v0.16 compatibility**: [#887](https://github.com/nullclaw/nullclaw/pull/887) (open) fixes builds on Windows/Linux for newer Zig versions. Important for keeping pace with the Zig ecosystem.

**Prediction for next release (likely v0.5.x or v0.6.0):** Lark config options + Zig v0.16 compatibility + potential merge of the cron subagent.

## User Feedback Summary
**Positive signals:**
- The hackathon team's Data Governance Layer (PR #885) shows enthusiastic community investment in security and compliance features.
- Documentation for Zig installation (PR #897) directly addresses a user pain point, suggesting maintainers are responsive to onboarding friction.

**Pain points:**
- **Stale documentation** (Issue #473): Benchmark snapshot in README is outdated. Users are concerned about accuracy creating "controversies in the future."
- **Hardcoded command restrictions** (Issue #167): Users want configurability for allowed shell commands like `curl`/`wget`.

**Satisfaction:** The closure of #820 with dedicated documentation demonstrates responsiveness. The merging of #790 (Responses API bugfix) indicates providers are getting attention, which should please API users.

## Backlog Watch
- [#473](https://github.com/nullclaw/nullclaw/issues/473) — **"README changes"** (OPEN since March 13, 2026, 2 comments). A simple documentation update request (stale benchmark data) that has gone unanswered for nearly 2 months. Low effort, high visibility — should be a quick fix.

- [#783](https://github.com/nullclaw/nullclaw/pull/783) — **"feat(cron): cron subagent engine"** (OPEN since April 7, 2026, 0 comments from maintainers). A large, complex PR with no maintainer feedback for over a month. Risk of going stale or accumulating merge conflicts. Quality of the feature is high, but it needs review prioritization.

- [#885](https://github.com/nullclaw/nullclaw/pull/885) — **[hackathon] Data Governance Layer"** (DRAFT, since May 4, 2026, 0 maintainer comments). Hackathon submissions risk losing momentum without feedback. Maintainers should schedule review time for these contributions as a community investment.

---

*Digest generated from github.com/nullclaw/nullclaw data snapshot on 2026-05-08.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-08

## 1. Today's Overview

IronClaw is in an intense phase of architectural modernization. Activity is very high: **50 PRs** were updated in the last 24 hours (31 merged/closed) and **22 issues** were active (7 closed). The project is executing a major "Reborn" substrate landing, with **ironclaw-v0.28.0** released yesterday bringing the reborn-integration foundation to `main`. The team is simultaneously tackling a Bug Bash (P1/P2 tracked issues) and beginning the migration of V1 product surfaces onto new Reborn service boundaries. CI health is warm: a nightly E2E run failed and several canary tests are distressed, but the volume of merged PRs indicates strong delivery velocity.

## 2. Releases

**ironclaw-v0.28.0** — 2026-05-07
- **[ADDED]**: Landed `reborn-integration` substrate on `main`, introducing: host foundation crates, capability host, runtime dispatcher, process lifecycle, filesystem, secrets, network, and extension manifest registry boundaries
- **[ADDED]**: WIT-compatible WASM tool runtime support
- **Breaking changes**: Significant architectural shift; downstream consumers pinned to crates.io `0.24.0` (see Issue #3259)
- **Migration notes**: No explicit migration guide yet; the crates.io publishing gap (Issue #3259) means library consumers cannot yet adopt 0.28.0 from the registry

## 3. Project Progress

**31 PRs merged/closed today**. Key highlights:

### Core Architecture (Reborn)
- **#3351, #3352** — ProductAdapter contract and host auth/egress primitives (PRs 1/7 and 2/7 of a new stack) — `serrrfirat`
- **#3379** — Durable session thread stores for libSQL/PostgreSQL — `serrrfirat`
- **#3382** — Hardened agent loop host facade with bounded opaque refs — `serrrfirat`
- **#3368** — Database capability lease stores — `serrrfirat`
- **#3349** — Durable run-state database stores — `serrrfirat`
- **#3378** — Wiring for durable run-state store selection — `serrrfirat`

### Bug Fixes & Critical Patches
- **#3365** — Fix bridge agent-loop mpsc bottleneck for Approval gates (critical for agent responsiveness) — `ilblackdragon`
- **#3364** — Web UI fixes: restart modal recovery, approval clarity, HTTP defaults — `ilblackdragon`

### Infrastructure
- **#3275** — Build worker runtime into Docker image (self-referencing sandbox) — `hanakannzashi`
- **#2806** — Scaffold v2 acceptance and regression test suites — `ilblackdragon`

## 4. Community Hot Topics

| Item | Type | Comments | Summary |
|------|------|----------|---------|
| **[#3067](https://github.com/nearai/ironclaw/issues/3067)** | Issue | 28 | Reborn vertical-slice integration test suite — most active discussion, defining the integration test roadmap |
| **[#3022](https://github.com/nearai/ironclaw/issues/3022)** | Issue | 9 | Event substrate integration tests — Reborn cutover blocker |
| **[#3016](https://github.com/nearai/ironclaw/issues/3016)** | Issue | 7 | Reference AgentLoopHost facade — architecture tracker with many sub-issues |
| **[#3093](https://github.com/nearai/ironclaw/issues/3093)** | Issue | 4 | EventProjectionService — closed, foundational for higher Reborn layers |

All four top-discussed items are Reborn-related, authored by `serrrfirat`. The underlying need is clear: the team is racing to validate the new architecture through integration tests before user-visible cutover. The 28-comment discussion on #3067 suggests active technical debate about test strategy and scope.

## 5. Bugs & Stability

**Critical Bugs (fix PRs exist):**
- **[#3225](https://github.com/nearai/ironclaw/issues/3225)** — Gemini API-key backend fails tool-calling with missing `thought_signature` (CLOSED) — Deterministric failure on second LLM turn after first tool call
- **[#3229](https://github.com/nearai/ironclaw/issues/3229)** — LLM provider fallback persists to DB permanently on startup, destroying user config (CLOSED) — Severity: Critical

**P1 Bugs (active):**
- **[#3317](https://github.com/nearai/ironclaw/issues/3317)** — Telegram setup not working with local IronClaw — Fix PR #3381 open (triple-bug PR addressing #3317, #3319, #3320)
- **[#2902](https://github.com/nearai/ironclaw/issues/2902)** — Telegram not working for NEAR Foundation instance — Still open, similar domain

**P2 Bugs:**
- **[#3082](https://github.com/nearai/ironclaw/issues/3082)** — App hangs on "Restarting IronClaw" after enabling Auto Approvals (CLOSED) — Fixed in #3364
- **[#3201](https://github.com/nearai/ironclaw/issues/3201)** — DeepSeek tool use broken (CLOSED)

**New Bugs Today:**
- **[#3385](https://github.com/nearai/ironclaw/issues/3385)** — Conversation titles default to first user message instead of auto-summarized — New, no fix yet
- **[#3274](https://github.com/nearai/ironclaw/issues/3274)** — Data missing after upgrade 0.26.0→0.27.0 until manual refresh (CLOSED) — UI/data consistency issues
- **[#3323](https://github.com/nearai/ironclaw/issues/3323)** — Nightly E2E failed — CI reliability concern

**Stability Watch:** Three Telegram-related bugs (#3317, #2902, and linked #3319/#3320) suggest the Telegram channel integration has systemic reliability issues. Bug Bash P1 classification confirms this is a priority.

## 6. Feature Requests & Roadmap Signals

**Trending Features (likely v0.29.0 candidates):**
- **[#3327](https://github.com/nearai/ironclaw/issues/3327)** — Surface and persist LLM reasoning content (thinking display, debug panel, DB storage) — PR #3326 already plugs the reasoning round-trip; this is nearly ready
- **[#3334](https://github.com/nearai/ironclaw/issues/3334)** — Multi-workspace Slack support (one IronClaw, many Slack workspaces) — Requested by community contributor
- **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — Publish 0.25.0–0.27.0 to crates.io (blocked by wasmtime 28.x CVEs) — Downstream consumers are stuck; this is blocking all non-containerized adopters

**Reborn Migration Roadmap (Issues #3289, #3290, #3288, #3287):** A series of "Migrate [surface] product flows" issues authored by `serrrfirat` on 2026-05-06 map the future state. These are product-surface migrations to Reborn services for secrets/OAuth (#3289), missions/jobs (#3290), extensions/skills/MCP/WASM (#3288), and memory/workspace (#3287). This is a multi-release effort; v0.28.0 only landed the substrate.

**Prediction for v0.29.0:** The LLM reasoning surface (#3327) and crates.io publishing fix (#3259) are likely to land first, as they have PRs in progress and high user impact. Reborn product surface migrations (#3288-#3290) will likely stretch across multiple releases.

## 7. User Feedback Summary

**Pain Points (reported by named users):**
- **@thomasmaerz**: Gemini provider broken for tool calling (#3225); critical config corruption on restart (#3229)
- **@sergeiest**: Telegram setup fails locally (#3317) and on production (#2902) — dual failure
- **@sunglow666**: Confusing UI after upgrade — data missing until manual refresh (#3274); poor conversation title UX (#3385)
- **@joe-rlo**: App hangs during restart after enabling auto-approvals (#3082)
- **@CaveNightingale**: DeepSeek tool use completely broken (#3201)

**Satisfaction Signals:** The Bug Bash categorization (P1/P2) shows structured QA engagement. Issues are being triaged and fixed rapidly — #3082 and #3225 were closed with fix PRs within the same 24-hour period. The project is responsive to user-reported breakages.

**Underlying User Need:** Users want IronClaw to "just work" across multiple LLM providers (Gemini, DeepSeek) and channels (Telegram). The provider-specific bugs suggest the multi-provider abstraction (#3387) — an XL PR extracted today — is timely and directly addresses these failure modes.

## 8. Backlog Watch

**High-Impact Unaddressed Issues Needing Maintainer Attention:**
- **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — *Publish 0.25.0–0.27.0 to crates.io* — Created 2026-05-05, last activity 2026-05-07, no maintainer response. All downstream Rust library consumers are pinned to 0.24.0 due to wasmtime CVEs. This is the #1 blocker for the Rust ecosystem adopting IronClaw.
- **[#2902](https://github.com/nearai/ironclaw/issues/2902)** — *Telegram not working for NEAR Foundation instance* — Created 2026-04-23, 15 days without resolution. Same issue domain as Bug Bash P1 #3317 but with no assigned fix PR yet.
- **[#3333](https://github.com/nearai/ironclaw/issues/3333)** — *Production wiring and missing crates* — Created 2026-05-07, authored by core contributor. This is an audit finding that multiple Reborn components are still fake/in-memory/no-op. Critical for the Reborn cutover roadmap.

**Stale PRs:**
- **[#2979](https://github.com/nearai/ironclaw/pull/2979)** — *feat(sandbox): support k8s sandbox runtime* — Open since 2026-04-27 (11 days), no recent activity. Large PR (XL) from a new contributor; needs review or guidance.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-08

## 1. Today's Overview

LobsterAI shows a **highly active development day**, with **50 PRs updated** (41 merged/closed, 9 open) and a **new release** published. The team is focused on stabilizing the `release/2026.05.08` branch, cherry-picking multiple features from prior PRs (#1527, #1554, #1564, #924) and fixing cross-platform issues (Windows EPERM, path handling, test assertions). Two open issues remain, one involving a missing UI input for WeChat QR code verification and another reporting persistent login failures. Overall, the project health is strong with rapid feature integration and bug fixing; the main risk is unresolved community-facing usability issues in the IM module and membership authentication.

## 2. Releases

**New Release: LobsterAI 2026.5.7** (2026-05-07)

[Link to Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7)

### Changes
- **Fix (skills):** Improved Windows skill delete reliability and import feedback (#1881)
- **Feat (skill):** Upgraded YoudaoNote skill to version 1.0.8 (#1882)
- **Refactoring:** Additional internal code improvements

### Breaking Changes
None documented. This is a minor patch release focused on Windows compatibility and skill updates.

### Migration Notes
No migration steps required. Users should update through the application's built-in updater or download the latest installer.

## 3. Project Progress

**41 PRs merged/closed today** — a high-output day dominated by cherry-pick merges and stabilization work.

### Major features advanced:
- **Scheduled task run history**: Pagination, time-range/status filtering, and a new custom `DateInput` calendar component were merged from PR #1564 into release branch (#1913)
- **Cowork token usage display**: Assistant messages now show token statistics (input/output/cache read), context window percentage, model name, agent name, and timestamp (#1912)
- **New user onboarding**: A guided tour using driver.js was merged, covering 6 steps for first-time users (#1577)
- **Agent-specific working directories**: Each Agent now supports independent working directories (#1904)
- **Session pagination**: Session list and message history now load in pages (50 per page) to reduce memory overhead (#1907, #924)
- **UI animations**: Staggered entrance animations, gradient mesh backgrounds, and theme-aware styling added (#1915, #1554)
- **Artifact features**: Windows file preview duplicate cards and path errors fixed (#1909); artifact integration merged (#1906)
- **ESLint cleanup**: All 165 ESLint errors resolved (#1498)
- **Markdown table persistence**: Hardened assistant segment persistence to prevent streaming corruption of tables (#1900)

### Stability fixes:
- **Windows-specific**: Fixed EPERM errors when deleting skill directories (#1891); fixed file:// path normalization (#1909)
- **Startup**: Reduced false initialization failures; added in-app relaunch from error screen (#1910)
- **Streaming text**: Removed buggy overlap detection that swallowed characters like `.pptx` → `.ptx` (#1908)
- **Cross-platform tests**: Assertions now use `path.resolve()` to pass on Windows (#1914)
- **Default model persistence**: Restored last-selected model after application restart (#1905)

## 4. Community Hot Topics

### Issue #1878 — WeChat QR code verification missing input field
- **Status**: Open, 2 comments
- **URL**: [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878)
- **Summary**: The WeChat IM robot interface requires the user to input a 6-digit code after scanning a QR code, but the LobsterAI client has no input UI for this, blocking configuration.
- **Analysis**: This is a **critical UX gap** — the feature is functionally incomplete. The community member is blocked from using WeChat integration entirely.

### Issue #1903 — Membership login failures
- **Status**: Open, 1 comment
- **URL**: [Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903)
- **Summary**: Frequent login failures prevent users from accessing NetEase paid models. Includes a screenshot showing error state.
- **Analysis**: This affects paid users directly — it's a **revenue-affecting bug**. The user explicitly states "login failure" prevents paying for NetEase models.

### PR #1916 — AI diagnostics for email connectivity failures (high comment engagement)
- **Status**: Open, most recently created
- **URL**: [PR #1916](https://github.com/netease-youdao/LobsterAI/pull/1916)
- **Summary**: Cherry-pick of PR #1527 into release branch. When email connectivity fails, an "AI Diagnostics" button appears that pre-fills the cowork input with structured error context and navigates to the cowork view for LLM-assisted troubleshooting.
- **Analysis**: This feature proactively addresses a common user pain point (email IMAP/SMTP configuration) and is likely to merge quickly.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status | Link |
|----------|-------|-------------|------------|------|
| **Critical** | #1903 | Membership login failures — blocks access to paid models | Open, no PR linked | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1903) |
| **High** | #1878 | WeChat QR code verification missing input field — feature non-functional | Open, no PR linked | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1878) |
| **Medium** | Windows EPERM on skill deletion | Cannot delete skill directories on Windows | Fixed in #1891 | [PR #1891](https://github.com/netease-youdao/LobsterAI/pull/1891) |
| **Medium** | Streaming text truncation | Characters like `.pptx` rendered as `.ptx` due to bad overlap detection | Fixed in #1908 | [PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908) |
| **Low** | Windows file preview duplicate cards | `file:///D:/path` vs `D:\path` dedup failure, ENOENT errors | Fixed in #1909 | [PR #1909](https://github.com/netease-youdao/LobsterAI/pull/1909) |
| **Low** | Default model not persisted | After restart, model resets to default | Fixed in #1905 | [PR #1905](https://github.com/netease-youdao/LobsterAI/pull/1905) |
| **Low** | Markdown table degradation | Concurrent sessions cause corrupted table rendering | Fixed in #1900 | [PR #1900](https://github.com/netease-youdao/LobsterAI/pull/1900) |
| **Low** | Startup false failures | Spurious initialization failures on slow systems | Fixed in #1910 | [PR #1910](https://github.com/netease-youdao/LobsterAI/pull/1910) |

## 6. Feature Requests & Roadmap Signals

### Most-likely next version features (from merged PRs today):
1. **AI Diagnostics for Email Connectivity** (#1916) — Already in release branch, likely in 2026.5.8
2. **Token Usage Metadata** (#1912) — Visible LLM resource consumption per message, useful for power users
3. **New User Onboarding** (#1577) — First-run guided tour to improve new user activation
4. **Agent Per-Working-Directory** (#1904) — Enables multi-project workflows without manual path switching
5. **Session History Pagination** (#1907) — Critical for users with many conversations

### User-requested features from issues:
- **WeChat QR verification UI** — The community explicitly needs a code input field; likely addressed in next patch
- **Membership login improvement** — The user requests "improved membership login method"; this is high priority as it impacts paid access

## 7. User Feedback Summary

### Pain points:
- **WeChat integration blocked** (Issue #1878): "IM机器人 微信接口 配置扫码后无法输入验证码" — User cannot complete WeChat bot setup because the input UI does not exist.
- **Login failures for paid members** (Issue #1903): "会员登录不进去，无法使用网易付费的模型" — User explicitly says they cannot use NetEase paid models.

### Positive signals:
- High PR velocity (50 updated today) indicates active maintenance
- 41 PRs merged suggest features are being delivered quickly
- The team dedicates significant effort to **Windows compatibility** (EPERM fixes, path normalization, test portability) — valuable for Windows users

### Satisfaction indicators:
- No negative comments on recent releases found
- Multiple features from earlier community PRs (#1527, #1554, #924) are being cherry-picked into release, showing contributor work is valued

## 8. Backlog Watch

### Issues needing maintainer attention:
| Issue | Days Open | Last Updated | Comments | Link | Reason for Watch |
|-------|-----------|--------------|----------|------|------------------|
| #1878 | 8 days | 2026-05-07 | 2 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1878) | **High severity**: Blocks WeChat IM integration entirely. User awaiting UI fix. |
| #1903 | 1 day | 2026-05-07 | 1 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1903) | **Critical severity**: Blocks paid membership access. Needs immediate triage. |

### PRs needing review:
| PR | Days Open | Status | Link | Reason for Watch |
|----|-----------|--------|------|------------------|
| #1916 | <1 day | Open | [PR #1916](https://github.com/netease-youdao/LobsterAI/pull/1916) | Cherry-pick into release branch; likely ready for merge but not yet approved |
| #1901+ | Various | 9 open PRs | [Open PRs](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+is%3Aopen) | General backlog monitoring |

### Maintainer notes:
- Both open issues (#1878, #1903) are **user-facing and impactful** — one blocks feature usage, the other blocks paid access. They should be given priority over new features.
- The team is clearly prioritizing the `release/2026.05.08` branch; after release, these issues should see attention.

---

*Generated from GitHub data for the period 2026-05-07 to 2026-05-08. All links go to the [netease-youdao/LobsterAI repository](https://github.com/netease-youdao/LobsterAI).*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-08

## 1. Today's Overview

Moltis is in a high-velocity development phase, with **10 pull requests** and **4 issues** processed in the last 24 hours — a clear indicator of active maintenance and rapid feature iteration. The project merged **9 PRs** while only **1 remains open**, suggesting strong throughput and disciplined review practices. Two new releases were cut (20260507.04 and 20260507.05), reflecting a release-on-demand cadence typical of projects shipping incremental improvements. All 4 issues updated in the period were closed, including one bug fix and two feature implementations, demonstrating responsive issue resolution.

## 2. Releases

Two releases were published today — **20260507.04** and **20260507.05** — both tagged as daily snapshots. While no formal changelog or breaking-change notes were provided, the PRs merged into these releases suggest the following changes:

**Likely contents:**
- **20260507.04:** Browser sandbox host-mount fix ([PR #980](https://github.com/moltis-org/moltis/pull/980)), Ed25519 node identity ([PR #979](https://github.com/moltis-org/moltis/pull/979)), CVE patch for `wasmtime` 36.0.7→36.0.8 ([PR #978](https://github.com/moltis-org/moltis/pull/978)), and Agent Identity docs ([PR #976](https://github.com/moltis-org/moltis/pull/976)).
- **20260507.05:** Image generation via Codex OAuth ([PR #982](https://github.com/moltis-org/moltis/pull/982)), whisper-local STT provider ([PR #981](https://github.com/moltis-org/moltis/pull/981)), tool argument diagnostics fix ([PR #983](https://github.com/moltis-org/moltis/pull/983)), and voice model guidance ([PR #984](https://github.com/moltis-org/moltis/pull/984)).

**No breaking changes or migration steps** were documented. Given the scope of changes, users should expect backwards compatibility.

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Title | Type | Linked Issue |
|----|-------|------|-------------|
| [#978](https://github.com/moltis-org/moltis/pull/978) | `chore(deps): bump wasmtime 36.0.7→36.0.8` | Maintenance | — |
| [#976](https://github.com/moltis-org/moltis/pull/976) | `docs: Agent Identity + Onboarding Protocols` | Documentation | [#973](https://github.com/moltis-org/moltis/issues/973) |
| [#979](https://github.com/moltis-org/moltis/pull/979) | `feat(nodes): Ed25519 challenge-response identity (TOFU)` | Feature | — |
| [#980](https://github.com/moltis-org/moltis/pull/980) | `fix(browser): resolve sandbox profile host mounts` | Bugfix | [#977](https://github.com/moltis-org/moltis/issues/977) |
| [#981](https://github.com/moltis-org/moltis/pull/981) | `feat(voice): add whisper-local STT provider` | Feature | — |
| [#982](https://github.com/moltis-org/moltis/pull/982) | `feat: Codex OAuth image generation` | Feature | [#956](https://github.com/moltis-org/moltis/issues/956) |
| [#983](https://github.com/moltis-org/moltis/pull/983) | `fix(agents): preserve tool argument diagnostics` | Bugfix | [#963](https://github.com/moltis-org/moltis/issues/963) |
| [#942](https://github.com/moltis-org/moltis/pull/942) | `feat(sandbox): remote & multi-backend support` | Feature | — |
| [#920](https://github.com/moltis-org/moltis/pull/920) | `feat(telephony): phone call support via Twilio` | Feature | — |

**Key advances:**
- **Node Identity:** Replaced token-based authentication with Ed25519 challenge-response (TOFU) — a security upgrade for multi-node deployments.
- **Remote Sandboxes:** Added support for Vercel, Daytona, and Firecracker backends, enabling sandboxed execution on cloud platforms without Docker-in-Docker.
- **Image Generation:** OpenAI Codex OAuth integration brings `gpt-image-2` support for generating images via the Responses API.
- **Privacy-First Voice:** A new `whisper-local` STT provider allows users to run Whisper servers locally (faster-whisper-server, whisper.cpp, LocalAI), avoiding cloud transcription.
- **Telephony:** Twilio integration for phone call support — a major channel plugin addition.

### Open PR (1 item)
- [#984](https://github.com/moltis-org/moltis/pull/984) — `feat(voice): surface OpenAI realtime model guidance` (still under review). Adds STT model settings for `whisper` variants and Realtime voice guidance.

## 4. Community Hot Topics

**No issues or PRs attracted comments or reactions** in the last 24 hours — community engagement on tracked items appears minimal or nonexistent. This could indicate:
- **Low external contributor activity** (most PRs from the core team member `penso`).
- **A mature issue resolution pipeline** where items are closed before discussion accumulates.

The most substantive technical discussion occurred implicitly across PRs:
- **Node Identity Protocol** ([PR #979](https://github.com/moltis-org/moltis/pull/979), [PR #976](https://github.com/moltis-org/moltis/pull/976)) — The TOFU model is a response to the long-standing lack of inter-agent trust standards, as raised in [#973](https://github.com/moltis-org/moltis/issues/973) by `vystartasv`.
- **Browser Sandbox Docker Bug** ([#977](https://github.com/moltis-org/moltis/issues/977)) — Community member `TLA020` identified a real deployment pain point in Docker/LXC environments, which was fixed in the same cycle.

## 5. Bugs & Stability

### Resolved Bugs (all closed today)
| Severity | Issue | Fix PR | Summary |
|----------|-------|--------|---------|
| **High** | [#963](https://github.com/moltis-org/moltis/issues/963) | [#983](https://github.com/moltis-org/moltis/pull/983) | Tool calls with malformed/empty arguments were collapsing to `{}`, causing silent `missing=command` failures in `exec`. **Fixed by preserving argument diagnostics.** |
| **High** | [#977](https://github.com/moltis-org/moltis/issues/977) | [#980](https://github.com/moltis-org/moltis/pull/980) | Browser sandbox failed in Docker/LXC containers because profile bind mounts weren't resolving through the host-visible data directory. **Fixed with configurable `host_data_dir` fallback.** |
| **Medium** | [#978](https://github.com/moltis-org/moltis/pull/978) | Dependabot | CVE patch for `wasmtime` 36.0.7→36.0.8 (security dependency upgrade). |

**Assessment:** No unresolved bugs remain in the 24h window. Both user-reported issues were closed via fix PRs on the same day — excellent turnaround time.

## 6. Feature Requests & Roadmap Signals

### Recently Closed Feature Requests
- **Image Generation** ([#956](https://github.com/moltis-org/moltis/issues/956) by `bashrusakh`) — ✅ **Shipped** in PR #982. Users can now generate images via `gpt-image-2` through Codex OAuth.
- **Agent Onboarding & Identity** ([#973](https://github.com/moltis-org/moltis/issues/973) by `vystartasv`) — ✅ **Shipped** in PR #979 and documented in PR #976. Ed25519 TOFU model for inter-agent trust.

### Predicting Next Release (likely 20260508.xx)
- **Realtime Voice Guidance** ([PR #984](https://github.com/moltis-org/moltis/pull/984)) — This open PR is the most likely candidate for release tomorrow. It clarifies which voice models apply to Realtime vs. clip transcription, reducing user confusion.
- **Potential late additions:** No new feature requests were opened in the last 24h, suggesting the current sprint may focus on stabilization.

## 7. User Feedback Summary

### Real User Pain Points
- **Docker sandbox failures** ([#977](https://github.com/moltis-org/moltis/issues/977) by `TLA020`): "Browser tool consistently fails with `Failed to create /data/browse...`" — A legitimate deployment blocker for Proxmox/LXC users that was promptly fixed.
- **Intermittent tool call failures** ([#963](https://github.com/moltis-org/moltis/issues/963) by `Cstewart-HC`): "exec calls fail with `missing=command` even after the model has activated the exec tool" — A confusing silent failure that undermined user confidence, now resolved.

### Use Cases Observed
- **Self-hosted multi-node setups:** `vystartasv`'s onboarding proposal (now shipped) targets users running multiple Moltis agents that need to discover and trust each other.
- **Privacy-conscious voice users:** The `whisper-local` provider (PR #981) directly addresses demand from users uncomfortable sending audio to OpenAI/cloud STT.
- **Cloud deployment sandboxing:** PR #942 (remote sandboxes for Vercel, Fly.io, DigitalOcean) responds to users deploying Moltis on platforms without Docker-in-Docker.

### Satisfaction Signals
- **High responsiveness:** Issues filed by community members `TLA020` and `Cstewart-HC` were closed with fixes within 1–4 days.
- **Feature alignment:** Feature requests from May 2–6 are already shipped in the May 7 releases — a sign of active product-market fit tuning.

## 8. Backlog Watch

**No long-unanswered issues or PRs** were identified in the current data window. All 4 recently updated issues were promptly closed. However, two chronic patterns worth monitoring:

1. **External contributor PRs:** Every PR in this window is from core team member `penso` or `dependabot[bot]`. The lone external-authored PR ([#976](https://github.com/moltis-org/moltis/pull/976) by `vystartasv`) is a documentation contribution tied to their own feature request. Consider whether the project has a healthy contributor onboarding pipeline.

2. **Dependency automation:** PR #978 (wasmtime bump) is a Dependabot auto-PR that was merged — this is healthy, but if similar low-priority dependency PRs accumulate unreviewed, they could indicate maintainer bandwidth constraints.

**Recommendation:** The maintainer team appears to be keeping pace well. No backlog intervention needed at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** based on the data snapshot from **2026-05-08**.

---

## CoPaw Project Digest — 2026-05-08

### 1. Today's Overview
CoPaw is experiencing **very high community engagement**, with 50 Issues and 31 PRs updated in the last 24 hours. The project is in a **healthy, active maintenance phase**, closing more items than it opens (23 closed Issues vs. 27 open; 19 merged/closed PRs vs. 12 open). While no new releases were published today, the development velocity is strong, with significant fixes landing for channel reliability (WeChat cron, Feishu metadata) and long-standing UX bugs. The community is vocal about feature gaps regarding session management and multi-agent interaction.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The latest known version remains **v1.1.5.post2**.

### 3. Project Progress
The community merged or closed 19 PRs today, including several impactful additions and fixes:
- **CLI Tool Testing:** A first-time contributor added `qwenpaw skills test <skill>` for offline skill validation ([PR #3999](agentscope-ai/QwenPaw PR #3999)).
- **WeChat Cron Fix:** A PR was merged to flush merge buffers on cron-sent messages, fixing a bug where cron-scheduled messages got stuck ([PR #4106](agentscope-ai/QwenPaw PR #4106)).
- **Windows Packaging:** Fixed a critical build conflict between `conda-pack` and `pip install qwenpaw[full]` on Windows ([PR #4093](agentscope-ai/QwenPaw PR #4093)).
- **Skill Batch Operations:** Added "Enable" and "Disable" buttons to the skills UI batch menu, resolving a community feature request ([PR #4091](agentscope-ai/QwenPaw PR #4091)).
- **Feishu Nickname Propagation:** A PR merged to surface the Feishu sender’s display name to the agent’s context, improving personalization ([PR #4055](agentscope-ai/QwenPaw PR #4055)).
- **File Preview Fix:** Fixed redundant URL prefix stripping in file preview paths, related to the token expiry bug ([PR #4089](agentscope-ai/QwenPaw PR #4089)).
- **Default Agent Name:** Fixed a bug where the default agent always displayed a localized name instead of the user’s custom name ([PR #4073](agentscope-ai/QwenPaw PR #4073)).
- **Token Usage Refactor:** The Console’s Token Usage component was refactored for better performance and UI polish ([PR #4094](agentscope-ai/QwenPaw PR #4094)).

### 4. Community Hot Topics
The most active discussions highlight deep user needs around session management and long-running tasks:

- **[#280 — Discussion: Which Skills and MCPs Can Be Built-in?](agentscope-ai/QwenPaw Issue #280)** (27 comments) — A long-running strategic discussion about pre-installing popular tools to improve the out-of-the-box experience. This signals a push toward a more "batteries-included" product.
- **[#3919 — Bug: Session loss when switching agents](agentscope-ai/QwenPaw Issue #3919)** (9 comments) — Users report that `lastChatIdByAgent` is unimplemented, causing session context to be lost. This is a **high-impact UX regression**.
- **[#4059 — Question: Long conversations stop responding](agentscope-ai/QwenPaw Issue #4059)** (8 comments) — Users report that after many turns, the agent stops completing tasks. Even `/compact` doesn’t fix it. Underlying need: **better long-context memory management**.
- **[#4051 — Question: think tag parsing for DeepSeek models](agentscope-ai/QwenPaw Issue #4051)** (5 comments) — Models returning content inside `<think>` tags are not parsed correctly, causing empty replies. This is a **provider integration gap**.
- **[#4036 — Good First Issue: Too many steps to add a model](agentscope-ai/QwenPaw Issue #4036)** (5 comments) — UX friction: users must navigate through multiple menus to set up a new model. This is a strong signal for a **model setup wizard** or **UI simplification**.

### 5. Bugs & Stability
Several bugs reported today, ranked by severity:

**High:**
- **Session Loss on Agent Switch ([#3919](agentscope-ai/QwenPaw Issue #3919))** — Closed. The `lastChatIdByAgent` feature is missing; sessions are lost when switching agents. **Fix PRs are not directly linked, but the issue is closed**, suggesting a fix was deployed in a prior build.
- **WeChat Message Loss ([#4056](agentscope-ai/QwenPaw Issue #4056))** — Open. Under normal network conditions, the WeChat channel stops responding entirely. This is a **critical reliability issue** for production users.
- **Infinite Tool Call Loops with Streaming Models ([#4034](agentscope-ai/QwenPaw Issue #4034))** — Closed. MiMo/DeepSeek models caused duplicate tool calls. Confirmed fixed by switching to Qwen models; root cause in streaming handling.

**Medium:**
- **File Link Token Expiry ([#4047](agentscope-ai/QwenPaw Issue #4047))** — Closed. File links expire in 24 hours with no UI warning. A related fix hit the codebase today ([PR #4089](agentscope-ai/QwenPaw PR #4089)).
- **think tag parsing for DeepSeek ([#4051](agentscope-ai/QwenPaw Issue #4051))** — Open. Empty replies result from unparsed `<think>` blocks.
- **Cron task KeyError for weixin channel ([#3573](agentscope-ai/QwenPaw Issue #3573))** — Closed. Legacy identifier mismatch fixed.

**Low:**
- **Workspace file names with spaces ([#4104](agentscope-ai/QwenPaw Issue #4104))** — Open. UTF-8/Chinese file names get an extra space between Chinese and English characters.
- **Firefox microphone disabled ([#2949](agentscope-ai/QwenPaw Issue #2949))** — Closed, but root cause may persist.

### 6. Feature Requests & Roadmap Signals
User requests today point toward these likely next features:

- **Custom Workspace Path ([#3967](agentscope-ai/QwenPaw Issue #3967), [#4067](agentscope-ai/QwenPaw Issue #4067))** — High demand. Users want separation between configuration files and user data to avoid accidental deletions.
- **Web Console Upgrade Capability ([#2235](agentscope-ai/QwenPaw Issue #2235))** — Users want to upgrade CoPaw remotely via the web UI instead of SSH/CLI.
- **Vertex AI Gemini Provider ([#4030](agentscope-ai/QwenPaw Issue #4030))** — Enterprise users want Google Cloud IAM integration.
- **PlanNotebook (Task Planning) ([PR #3238](agentscope-ai/QwenPaw PR #3238))** — An experimental feature for breaking down complex tasks. Still open under review — likely to land in next minor release.
- **File Module Enhancement ([#4087](agentscope-ai/QwenPaw Issue #4087))** — Users want the file module to support non-md files and browsing outside the workspace directory.

### 7. User Feedback Summary
Strong satisfaction in the community’s ability to influence the roadmap (e.g., skill batch operations merged today shortly after request). However, several pain points are prominent:

- **Session/Context Management:** Users are frustrated that switching agents or having very long conversations breaks the experience. The feedback on [#4059](agentscope-ai/QwenPaw Issue #4059) and [#3967](agentscope-ai/QwenPaw Issue #3967) indicates a desire for **automatic context summarization** or **better session isolation**.
- **WeChat Synchronization:** Users on the WeChat channel want to see the same process visualization as browser users ([#4000](agentscope-ai/QwenPaw Issue #4000)).
- **Model Setup Complexity:** New users find the process of adding a model model feels "too many clicks back and forth" ([#4036](agentscope-ai/QwenPaw Issue #4036)).
- **Docker Deployment Regressions:** A user on Docker reports that upgrading to 1.1.5.post2 broke session persistence again ([#4101](agentscope-ai/QwenPaw Issue #4101)), indicating stablity issues in containerized deployments.

### 8. Backlog Watch
Items needing maintainer attention:

- **PR #3819 — Browsable remote model listing** — Open since 2026-04-25. This is a major UI improvement that would directly address [#4036](agentscope-ai/QwenPaw Issue #4036) (model setup complexity). It has gone 13 days without merge, which is unusual for a feature of this value.
- **Issue #2235 — Web Console Upgrade** — Open since 2026-03-25. This is a popular feature (1 👍, 2 comments) that has seen no recent maintainer activity. Likely a significant architectural lift.
- **PR #3238 — PlanNotebook Task Planning** — Open since 2026-04-10. A large experimental feature under review. Long review cycles risk community disengagement.
- **Issue #4056 — WeChat Message Loss** — Open since 2026-05-06. A critical reliability bug on a major channel (WeChat) with no fix PR yet. This should be high priority.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-08

## Today's Overview

ZeroClaw shows **very high activity** today with 50 issues and 50 PRs updated in the last 24 hours, signaling a project in heavy development. The community is highly engaged, with 48 open issues and 48 open PRs indicating a large backlog the maintainers are working through. Two PRs were merged/closed today (#6506 and #6507) advancing the desktop/macOS onboarding experience, alongside the closure of issue #6320 (desktop menu-bar onboarding parity). A major release v0.7.5 remains blocked on CI infrastructure issues, with dedicated PRs (#6502, #6508) attempting to unblock it. No new releases were cut today.

**Health signal**: The project is in a **rapid development phase** with significant community contributions, but the large open issue/PR counts and blocked release suggest maintainer bandwidth may be stretched thin.

---

## Releases

**No new releases today.** The v0.7.5 release is blocked on CI failures (see Bugs & Stability section).

---

## Project Progress

**Merged/Closed Today:**
- **PR #6506** (closed) — *feat(desktop): macOS onboarding wizard, permission primitives, and capability sync* — Adds an 8-step macOS first-run onboarding wizard that walks users through granting TCC permissions. ✅ *This is a significant UX milestone for desktop users.*
- **PR #6507** (closed) — *feat(desktop): take_screenshot and run_applescript Tauri commands* — Minimal capability handlers for desktop automation. ✅
- **Issue #6320** (closed) — Desktop menu-bar chat first-run onboarding parity (no CLI required). ✅
- **Issue #6418** (closed) — Fallback Providers Fail to Inherit Credentials from `config.toml` (marked as duplicate). ✅

**Features that advanced (open PRs with recent updates):**
- **PR #6389** — Per-recipient reply pacing across 9 channels (large feature, high risk)
- **PR #6178** — Ollama provider `num_ctx`/`num_predict`/temperature tuning
- **PR #6432** — SQLite memory concurrent schema migration tolerance (fix for #6431)
- **PR #6521** — DingTalk delivery channel support for cron

**Active Long-Running Work:**
- **PR #4944** (open since March 28) — Bundle wrapper migration for file, PDF/image, cron, AI CLI tools — still waiting on author action.
- **PR #5075, #5077, #5079, #5088, #5121, #5254** — All open since late March, primarily documentation and minor fixes.

---

## Community Hot Topics

### Most Active Issues

1. **Issue #5937** — `[Feature]: refactor: Unify providers architecture and reqwest client management` (8 comments)
   - *Link*: zeroclaw-labs/zeroclaw Issue #5937
   - *Analysis*: Deep architectural concern about providers module fragmentation. The high comment count suggests this is a contentious or complex refactor. Blocked status indicates it's waiting on decisions or other dependencies. ⚠️ The `risk: high` and `priority:p2` combination means it's serious but not blocking releases.

2. **Issue #6246** — `[Bug]: WhatsApp Web channel: pair succeeds but messages don't flow after April 2026 server-side protocol bump` (6 comments)
   - *Link*: zeroclaw-labs/zeroclaw Issue #6246
   - *Analysis*: A real production blocker (S1) for WhatsApp Web users. The server-side protocol bump effectively broke a major channel. With `priority:p1`, this is likely receiving urgent attention from maintainers.

3. **Issue #6418** — `[Bug]: Fallback Providers Fail to Inherit Credentials from config.toml` (4 comments, now closed as duplicate)
   - *Link*: zeroclaw-labs/zeroclaw Issue #6418
   - *Analysis*: This was rated S0 (data loss/security risk) — the highest severity possible. Credential leakage or failure during failover is critical. Marking as duplicate suggests the fix is already in the pipeline elsewhere.

4. **Issue #6474** — `[Bug]: process 1 user request, invoking the LLM twice repeatedly` (3 comments)
   - *Link*: zeroclaw-labs/zeroclaw Issue #6474
   - *Analysis*: Users running local LLMs (omlx) experience doubled API calls per request, effectively doubling costs and latency. The `status:in-progress` label indicates maintainers are actively working on it.

5. **Issue #6434** — `[Bug]: Shell tool calls are refused at [autonomy] level = "full"` (2 comments)
   - *Link*: zeroclaw-labs/zeroclaw Issue #6434
   - *Analysis*: Critical S1 bug where maximum permissive settings still block shell execution. This undermines ZeroClaw's core value proposition of autonomous agent capabilities.

---

## Bugs & Stability

### Critical / High Severity (S0-S1)

| Issue | Severity | Component | Summary | Fix Available? |
|-------|----------|-----------|---------|----------------|
| #6474 | S1 | runtime/daemon | LLM invoked twice per user request (local LLMs) | In progress |
| #6434 | S1 | runtime/daemon | Shell tool calls refused at full autonomy | Needs review |
| #6246 | S1 | channel (WhatsApp) | Messages don't flow after protocol bump | Needs review |
| #6410 | S1 | tool (google-workspace) | `gws` not found on Windows, JSON mangling | Needs review |
| #6399 | S1 | provider | Custom remote provider sends file paths not data URLs (multimodal) | Needs review |
| #6377 | S1 | provider (llama.cpp) | 500 errors on tool usage | Needs review |
| #6402 | S2 | core (CLI) | Bash completion infinite recursion (crashes SSH sessions) | In progress |

### Medium Severity (S2)

| Issue | Severity | Component | Summary | Fix Available? |
|-------|----------|-----------|---------|----------------|
| #6431 | S2 | memory (SQLite) | Schema init fails during concurrent startup | Yes (#6432) |
| #6360 | S2 | channel (Telegram) | Prompt caching broken with Telegram | Needs review |
| #6472 | S2 | gateway/memory | Gateway panics with Postgres memory backend | Needs review |
| #6400 | S2 | gateway | Docker bind mount shadows pre-built web dashboard | Needs review |
| #6516 | S1 | security/sandbox | ACP `cwd` change locks agent out of reading skill files | No PR yet |

### Regressions

- **Issue #6402** (bash completion infinite recursion) — A regression introduced in the new CLI framework that crashes terminal sessions on tab-complete.
- **Issue #6373** (web_search not working on fresh install) — Possibly a regression from dependency upgrades.

### Blocked Release

- **v0.7.5 release blocked** — PR #6502 and #6508 are dedicated to fixing the CI pipeline (`gen-api` must run before `tsc`). The release is mid-flight and the maintainer has labeled both as 🚨 required.

---

## Feature Requests & Roadmap Signals

### Likely to Ship in Next 1-2 Versions

1. **Desktop onboarding wizard** (PR #6506, just closed) — First-run macOS experience without CLI. ✅ *Already merged, likely in v0.7.5.*
2. **Per-recipient reply pacing** (PR #6389) — Rate limiting per channel/recipient. High risk but widely needed.
3. **Cron `delivery.mode = "announce"` filtering** (Issue #6510) — Send only final assistant message. Low complexity, high user value.
4. **WhatsApp Web per-JID group allowlist** (Issue #6371) — `allowed_groups` field for WhatsApp operators.
5. **MacOS universal binary** (Issue #6339) — Build `lipo`-merged `.app` for Apple Silicon + Intel.

### Further Out / Speculative

1. **V3 env-var override mechanism** (Issue #6375) — Restoring environment-based credential overrides after V1/V2 removal. High priority but complex.
2. **Bundle chat-ui as static assets in desktop binary** (Issue #6465) — Enables offline/air-gapped desktop operation.
3. **First-class custom/OpenAI-compatible providers** (Issue #6518) — Users want simpler onboarding for providers like Kimi K2.5.
4. **Web chat tool approval UI** (Issue #6522) — Supervised-mode tool execution needs frontend support. Zero comments so far, suggesting early-stage.
5. **Config validation in `zeroclaw onboard`** (Issue #6416) — Validate `config.toml` before runtime errors.

### Roadmap Considerations

The block of **five desktop enhancement issues** from user `theonlyhennygod` (Issues #6329, #6327, #6339, #6349, #6465) all updated within hours of each other suggests a coordinated desktop push. This is likely targeting v0.7.7 desktop parity.

---

## User Feedback Summary

### Pain Points

1. **WhatsApp Web broken** — Users report the channel is completely non-functional after an April 24 protocol bump. Multiple issues (#6246, #6371) reflect WhatsApp as a high-demand channel with stability problems.
2. **Desktop app dependency on gateway** — Users cannot boot the desktop app without a reachable gateway (Issue #6465). This is a fundamental usability issue for new users.
3. **Docker documentation errors** — A Chinese-speaking user (Issue #6393) reports the Docker installation docs are "completely wrong" at the official site `zeroclaws.io/install/`.
4. **Local LLM double-invocation** — Users running local models (omlx, llama.cpp) are paying double API costs (#6474, #6377, #6520).
5. **Shell tool block at full autonomy** — The most permissive configuration still blocks shell execution (#6434), defeating the purpose of the setting.
6. **Postgres memory panics** — Production deployments using Postgres for memory are hitting runtime panics (#6472) that crash the gateway.

### Use Cases

- **Desktop/macOS users**: Actively requesting parity features (onboarding, menu-bar chat, universal binary).
- **Enterprise/channel operators**: WhatsApp Web, DingTalk, Matrix users needing per-group access controls and reliable message delivery.
- **Self-hosted/local LLM users**: Running Ollama, llama.cpp, vllm, omlx — these users are hitting the most bugs, suggesting this is an underserved but growing segment.
- **Windows users**: Google Workspace tool fails on Windows (#6410); dev tests fail on Windows (#6028).

### Sentiment

- Overall **positive engagement** from a technically sophisticated community filing well-structured bug reports.
- Some **frustration** around desktop onboarding requiring CLI access and Docker documentation errors.
- The v0.7.5 release being **blocked on CI** may be causing user impatience, especially for those waiting on WhatsApp and desktop fixes.

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Component | Status | Why It Matters |
|-------|-----|-----------|--------|----------------|
| #5937 | 18 days | providers | **blocked** | Architectural refactor with 8 comments; core to future provider stability |
| #6349 | 5 days | desktop | **blocked** | Menu-bar chat renders all tool calls inline; sibling fix needed first |
| #6410 | 3 days | tool (google-workspace) | needs review | Windows blocker; S1 severity |
| #6373 | 4 days | tool (web_search) | needs review | Fresh install regression; new users can't search |
| #6375 | 4 days | config | needs review | V3 env-var overrides; replacing removed V1/V2 functionality |
| #6399 | 3 days | provider | needs review | Multimodal broken for remote providers on ARM |
| #6434 | 2 days | runtime | needs review | **S1 shell tool block** — undermines core autonomy feature |
| #6472 | 2 days | gateway/memory | needs review | Postgres panics crash gateway |
| #6518 | 1 day | provider | no status | User requesting first-class Kimi K2.5 support |

### Oldest Open PRs (Maintainer Action or Closure Needed)

| PR | Age | Author | Status | Description |
|----|-----|--------|--------|-------------|
| #4944 | 41 days | yijunyu | needs author action | Bundle wrapper migration — blocking progress on tool refactoring |
| #5075 | 40 days | Alix-007 | needs review | WhatsApp Web reinstall documentation |
| #5077 | 40 days | Alix-007 | needs review | Codex auth documentation |
| #5079 | 40 days | Alix-007 | needs review | Clippy warning debt |
| #5088 | 40 days | Alix-007 | needs review | Anthropic custom endpoints in onboarding |
| #5121 | 40 days | Alix-007 | needs review | Mistral tool_call.id enforcement |
| #5254 | 35 days | Alix-007 | needs review | Llama.cpp Gemma4 tool schema sanitization |

⚠️ **Notable**: All seven of the oldest open PRs are from the same contributor (`Alix-007`) and date to March 28-29. Most are documentation or small fixes stuck in review. This pattern suggests a potential review bottleneck for lower-risk contributions.

### Risk Assessment

- **Highest risk backlog items**: Issue #5937 (providers architecture) blocks multiple provider-level improvements; PR #6502 (CI fix) is blocking the entire v0.7.5 release pipeline.
- **Most user-impacting**: WhatsApp Web bugs (#6246, #6371), shell tool block (#6434), and double LLM invocation (#6474) are actively degrading the experience for real users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*