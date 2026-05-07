# OpenClaw Ecosystem Digest 2026-05-07

> Issues: 438 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-07 04:37 UTC

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

Here is the OpenClaw project digest for May 7, 2026.

---

### OpenClaw Project Digest
**Date:** 2026-05-07
**Data Snapshot:** 438 Updated Issues, 500 Updated PRs, 2 New Releases

---

### 1. Today's Overview

OpenClaw remains highly active, with a significant volume of issues and pull requests updated in the last 24 hours reflecting the rapid development cycle of a major AI agent framework. The community is engaged but is also experiencing growing pains, with a high volume of bugs and regressions reported from recent releases. The project is responding with two rapid patch releases (`v2026.5.5` and `v2026.5.6`) aimed at fixing critical issues identified in the `v2026.5.4` update cycle. While many fixes are being shipped quickly, reports of performance degradation and complex, cascading bugs on specific platforms (Windows, macOS) suggest that overall system stability is a primary concern for the maintainers and the community right now.

### 2. Releases

Two new versions were released today, both focused on bug fixes to address regressions introduced in `v2026.5.4`.

- **`openclaw 2026.5.6`**
    - **Fixes:**
        - **Critical:** Reverted a `doctor --fix` migration from `v2026.5.5` that incorrectly rewrote `openai-codex/*` OAuth routes to `openai/*`, which could break setups relying on ChatGPT/Codex OAuth.

- **`openclaw 2026.5.5`**
    - **Fixes:**
        - **Feishu (Lark):** Fixed a session routing issue where the first message in a topic thread used a different session key (`messageId`) than subsequent messages (`thread_id`), causing conversations to be split across sessions.
        - **LINE:** Added validation to reject `dmPolicy: "open"` configurations that are missing a wildcard `allowFrom` setting, preventing potential misconfiguration.

### 3. Project Progress

A substantial number of PRs were merged or closed today (143), signaling rapid iteration. Key areas of activity include:

- **CLI/Tooling Enhancement:** A large PR ([#78678](https://github.com/openclaw/openclaw/pull/78678)) implements a new `oc://` URI addressing substrate for working with various file formats, a significant infrastructure improvement.
- **Stability & Security Fixes:**
    - A fix was merged to block raw self-update package installs by agents ([#78696](https://github.com/openclaw/openclaw/pull/78696)), preventing a potential state corruption issue.
    - A PR is hardening the ACPX session lifecycle cleanup ([#78744](https://github.com/openclaw/openclaw/pull/78744)) to prevent resource leaks from stubborn child processes.
    - A PR aims to pre-warm the QMD memory embedder during boot ([#78784](https://github.com/openclaw/openclaw/pull/78784)) to prevent timeouts on cold starts.
- **Channel Fixes & Performance:**
    - A fix for the WhatsApp channel deduplicates captioned auto-replies ([#78770](https://github.com/openclaw/openclaw/pull/78770)).
    - A performance improvement for the Slack channel reduces message hot-path overhead ([#78746](https://github.com/openclaw/openclaw/pull/78746)).
- **System Events:** A new PR exposes a `sessionKey` on the wake protocol to allow system events to target a specific agent session ([#78687](https://github.com/openclaw/openclaw/pull/78687)).

### 4. Community Hot Topics

The most active discussions reveal significant user pain points around stability and feature gaps for core platforms.

- **[Issue #75:](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps (104 comments, 74 👍)**
    - **Analysis:** This is the most highly requested feature by a wide margin. Users across the ecosystem strongly desire native desktop applications for Linux and Windows, matching the experience on macOS and iOS. This is a top community priority.
- **[Issue #9443:](https://github.com/openclaw/openclaw/issues/9443) Request: Prebuilt Android APK releases (24 comments)**
    - **Analysis:** Users who want to run the Android companion app face a barrier due to the lack of prebuilt binaries. Providing APKs in releases would significantly lower the barrier to entry for mobile users.
- **[Issue #78407:](https://github.com/openclaw/openclaw/issues/78407) `doctor --fix` rewrites OAuth routes (15 comments)**
    - **Analysis:** This critical regression caused significant disruption for users relying on ChatGPT/Codex OAuth. The high engagement reflects the severity of a tool meant to *fix* configurations actually breaking them. The fix was rolled back in `v2026.5.6`.
- **[Issue #73655:](https://github.com/openclaw/openclaw/issues/73655) Gateway leak triad on plugin restart (16 comments)**
    - **Analysis:** This deeply technical bug report describes a complex, compounding resource leak that can starve WebSocket connections. It signals that the gateway's plugin lifecycle management needs hardening, particularly around socket and signal handling.

### 5. Bugs & Stability

Recent releases have introduced significant regressions. The following is a severity-ranked list of the most pressing bugs reported in the last 24 hours.

- **Critical:**
    - **Dangerous `doctor --fix` Migration (Issues [#78407](https://github.com/openclaw/openclaw/issues/78407)):** A fix intended to update config was rewriting core OAuth references, locking out users. **Status:** Fixed in `v2026.5.6`.
    - **WeChat Plugin Incompatibility (Issues [#78232](https://github.com/openclaw/openclaw/issues/78232), [#78434](https://github.com/openclaw/openclaw/issues/78434), [#77779](https://github.com/openclaw/openclaw/issues/77779)):** A major regression makes the WeChat plugin completely non-functional with the latest release, with multiple reports of fetch failures and initialization timeouts.

- **High:**
    - **Gateway RPC & Connection Instability (Issues [#78402](https://github.com/openclaw/openclaw/issues/78402), [#76562](https://github.com/openclaw/openclaw/issues/76562)):** Reports of the gateway becoming unresponsive, with WebSocket disconnections and CPU pinning after recent upgrades.
    - **Feishu Session Splitting (Issue [#78262](https://github.com/openclaw/openclaw/issues/78262)):** Group chat topics are incorrectly split into multiple sessions. **Status:** Fixed in `v2026.5.5`.
    - **Missing `operator.read` Scope (Issue [#78508](https://github.com/openclaw/openclaw/issues/78508)):** The Control UI is non-functional for users behind a trusted proxy due to missing scope handling.

- **Medium:**
    - **Compaction Loop (Issue [#78604](https://github.com/openclaw/openclaw/issues/78604)):** Compaction triggers every 5 minutes instead of the expected 30, an unfixed performance issue.
    - **Model Allowlist Breaks Cron (Issue [#78000](https://github.com/openclaw/openclaw/issues/78000)):** A new allowlist is silently breaking existing cron jobs that reference specific model IDs.

### 6. Feature Requests & Roadmap Signals

Beyond the core platform stability issues, community requests signal a desire for more robust security, better mobile support, and richer channel integration.

- **Cross-Platform Desktop Apps (Issue [#75](https://github.com/openclaw/openclaw/issues/75)):** This is the single most requested feature and is likely to be a major area of focus for the next milestone.
- **Prebuilt Companion Apps (Issue [#9443](https://github.com/openclaw/openclaw/issues/9443)):** A natural enabler for broader mobile adoption.
- **Security Enhancements:**
    - **TOTP for Exec Approvals (Issue [#67440](https://github.com/openclaw/openclaw/issues/67440)):** Users want multi-factor authentication for sensitive commands.
    - **Data-Centric Security Profile (Issue [#8719](https://github.com/openclaw/openclaw/issues/8719)):** A push for a more secure-by-default configuration.
    - **Denylist for Exec Approvals (Issue [#6615](https://github.com/openclaw/openclaw/issues/6615)):** Complementing the allowlist with an explicit "allow all except X" policy.
- **Channel Feature Parity:**
    - **WhatsApp Sticker Support (Issue [#7476](https://github.com/openclaw/openclaw/issues/7476)):** A specific request for a common messaging feature.
    - **Telegram AllowBots (Issue [#8295](https://github.com/openclaw/openclaw/issues/8295)):** Request to allow bot-to-bot communication in Telegram groups, matching Discord/Slack.

### 7. User Feedback Summary

User sentiment is currently mixed, balancing appreciation for rapid innovation with frustration over instability.

- **Pain Points:**
    - **Update Fatigue:** Frequent updates have introduced regressions that break core workflows, such as OAuth connectivity and plugin functionality.
    - **Platform Fragmentation:** The lack of native apps for Linux and Windows is a significant barrier for a large segment of users, who feel like second-class citizens.
    - **Complexity:** Users are reporting subtle, complex bugs like session splitting and leak triads, indicating a steep learning curve for debugging and configuration. The "steer" queue mode silently degrading is another example of hidden complexity.
- **Satisfaction & Use Cases:**
    - **High Value on Platform Extensibility:** Users are actively using and requesting features for multiple channels (Feishu, LINE, WeChat, etc.), showing strong demand for OpenClaw as a universal agent hub.
    - **Positive Signals on Security:** The requests for TOTP and denylists show a sophisticated user base that is thinking about production readiness and security.
    - **Demand for Core App:** The overwhelming support for Issue #75 is a clear signal that the community views a stable desktop experience as a top-tier requirement for the project’s future.

### 8. Backlog Watch

Several long-standing issues and PRs remain unresolved, signaling potential areas of technical debt or neglected community contributions.

- **[Issue #73655:](https://github.com/openclaw/openclaw/issues/73655) Gateway leak triad (16 comments, updated 2026-05-06):** A detailed and critical-sounding bug report about plugin restarts has not been explicitly fixed or addressed by a maintainer in the latest releases.
- **[Issue #50880:](https://github.com/openclaw/openclaw/issues/50880) "Steer" queue mode silently degrades (9 comments, 2 👍, recently closed):** While this was closed today, the fact that it existed for nearly two months without diagnostic logging highlights a recurring pattern of "steer" mode issues.
- **[PR #51421:](https://github.com/openclaw/openclaw/pull/51421) `memoryFlush` fires every compaction cycle (created 2026-03-21):** A stale PR with a one-line fix for a memory flushing bug that has been open for over six weeks. This is a low-effort, high-impact fix that should be merged.
- **[PR #39137:](https://github.com/openclaw/openclaw/pull/39137) Single pytest dependency specifier (created 2026-03-07):** Another small, stale PR fixing a simple pre-commit configuration bug that is likely breaking CI for some contributors.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date:** 2026-05-07

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **hyperactive development cycle**, driven by simultaneous pushes for platform expansion, memory infrastructure improvements, and architectural modernization. Across nine tracked projects, over **400 issues and 350+ pull requests** were updated in the last 24 hours, with major releases shipping from OpenClaw and CoPaw. The landscape is bifurcating between **comprehensive agent frameworks** (OpenClaw, Hermes Agent, ZeroClaw) and **lightweight/specialized tools** (NullClaw, PicoClaw, TinyClaw). A clear pattern emerges: projects are racing to support more messaging platforms (LINE, Feishu, WhatsApp, DingTalk, and emerging SMS/Web3 channels), while simultaneously grappling with **stability regressions** from rapid iteration. The community is mature enough to demand production-grade reliability, yet impatient enough to accept breaking changes for new features.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Recent Release | Health Score |
|---------|---------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 438 | 500 | 143 | v2026.5.6 (today) | 🟡 High activity, moderate stability issues |
| **NanoBot** | 13 | 42 | 18 | v0.1.5.post3 | 🟢 Strong velocity, responsive maintainers |
| **Hermes Agent** | 50 | 50 | 4 | v0.12.0 (Apr 30) | 🟡 Growing pains, high open-PR backlog |
| **PicoClaw** | 21 | 63 | 20 | v0.2.8-nightly (today) | 🟢 Healthy, slightly backlogged reviews |
| **NanoClaw** | 4 | 25 | 3 | None | 🟢 High UX-focused contribution velocity |
| **NullClaw** | 1 | 1 | 0 | None | 🔴 Low activity, critical bug unresolved |
| **IronClaw** | 41 | 50 | 28 | None | 🟢 Exceptional architecture push |
| **LobsterAI** | 0 | 16 | 16 | None | 🟢 Focused maintenance sprint |
| **CoPaw** | 47 | 32 | ~8 | v1.1.5.post2 (today) | 🟡 High activity, long-context issues |
| **Moltis** | 6 | 11 | 9 | None | 🟢 Healthy maintenance cadence |
| **ZeroClaw** | 50 | 50 | 8 | v0.7.4 | 🟢 Pre-release sprint intensity |
| **TinyClaw** | 0 | 0 | 0 | None | 🔴 No activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | 🔴 No activity |

**Key observations:**
- **OpenClaw dominates** in raw volume (438 issues, 500 PRs) but struggles with regression management.
- **IronClaw and ZeroClaw** show exceptional architecture-focused velocity, both pushing major foundational changes.
- **NullClaw, TinyClaw, and ZeptoClaw** are effectively dormant, raising questions about project viability.
- **NanoBot and PicoClaw** demonstrate the best balance of throughput and stability.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Ecosystem scale**: OpenClaw's 438 issues and 500 PRs updated in 24 hours dwarf every other project. It operates at an order-of-magnitude larger community scale.
- **Release cadence**: Two patch releases in one day (v2026.5.5 → v2026.5.6) demonstrate an ability to respond rapidly to critical regressions.
- **Platform breadth**: The `oc://` URI addressing substrate (PR #78678) and multi-channel support (Feishu, LINE, WhatsApp, Slack) position it as the most extensible framework.
- **Community investment**: The 74 👍 on Issue #75 (Linux/Windows Clawdbot apps) shows a deeply engaged user base willing to advocate for features.

**Key Weaknesses:**
- **Regression frequency**: The `doctor --fix` OAuth route rewrite and WeChat plugin incompatibility suggest insufficient testing coverage for high-impact paths.
- **Complexity debt**: Bugs like the "gateway leak triad" (#73655) and "steer queue mode silently degrades" (#50880) indicate deep architectural complexity that challenges maintainers.
- **Platform gaps**: The absence of Linux/Windows desktop apps remains the top community complaint, leaving a clear opening for competitors.

**Technical Approach Differences:**
- OpenClaw uses a **plugin-based gateway architecture** with extensive channel adapters, whereas IronClaw is pursuing a "Reborn" microservice cutover.
- OpenClaw's CLI/URI infrastructure (`oc://`) is unique — no other project has a comparable addressing scheme for file formats.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|------------|------------------|----------------|
| **Memory Infrastructure** | Hermes Agent (#6323 MemPalace), OpenClaw (QMD pre-warm), NanoBot (context scaffold leakage), CoPaw (long-context breakage) | External memory providers, importance scoring, automatic consolidation, context window management |
| **Multi-Platform Channels** | All active projects | LINE (OpenClaw, Hermes Agent), Feishu/Lark (OpenClaw, Hermes Agent, PicoClaw), WhatsApp (all), DingTalk (PicoClaw, CoPaw), Matrix (Hermes Agent, Moltis, ZeroClaw), Telegram (all), SMS gateways (ZeroClaw) |
| **Provider Compatibility** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, Moltis, ZeroClaw | DeepSeek thinking mode (`reasoning_content`), Groq/OpenAI Whisper normalization, OpenRouter credential validation, MiniMax connection drops |
| **Desktop & Mobile Apps** | OpenClaw (#75, #9443), PicoClaw (#2368 Android), ZeroClaw (#4710 branding) | Native Linux/Windows apps, prebuilt Android APKs, system tray support |
| **Security Hardening** | OpenClaw (TOTP exec approvals, data-centric profile), NanoBot (Agent Identity Protocol #3639), PicoClaw (exec guard false positives), IronClaw (OAuth fixes) | Multi-factor auth, credential management, scope-based access control |
| **Sandbox Reliability** | Moltis (#964, #977), CoPaw (workspace decoupling), PicoClaw (exec tool) | Container startup races, LXC compatibility, tool execution isolation |
| **Session & State Management** | OpenClaw (Feishu session splitting, ACPX lifecycle), NanoBot (context leakage), PicoClaw (session timestamps, agent identity isolation) | Consistent session keys, per-message timestamps, state persistence on `stop` |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Technical Architecture |
|---------|----------------------|-------------|----------------------|
| **OpenClaw** | Largest ecosystem, richest channel support, `oc://` URI substrate | Enterprise integrators, multi-platform deployers | Plugin-based gateway with extensive adapter layer |
| **NanoBot** | Lightweight, fast iteration cycle, strong security focus | Individual power users, mobile/edge users | Modular runtime with MCP support, quick fix turnaround |
| **Hermes Agent** | Advanced memory systems (MemPalace, MemOS, holographic), Nous Research backing | AI researchers, long-memory-heavy workflows | Memory-centric architecture with multiple provider backends |
| **PicoClaw** | Chinese platform focus (DingTalk, Weixin, Feishu), multi-agent delegation | East Asian market, multi-agent orchestrators | `delegate` tool for cross-agent handoff, strong session management |
| **NanoClaw** | Extreme onboarding UX focus, Slack excellence | Non-technical Slack users, low-friction adoption | Silver-bullet Slack setup, skills marketplace |
| **NullClaw** | Low-resource device optimization | Raspberry Pi, edge computing enthusiasts | Minimalist, no external dependencies |
| **IronClaw** | "Reborn" microservice architecture, Rust/WebAssembly potential | Advanced developers, platform builders | Multi-crate architecture, TurnCoordinator pattern |
| **LobsterAI** | POPO/NetEase ecosystem integration, workspace decoupling | Chinese enterprise, concurrent collaboration | Cowork mode, Markdown migration focus |
| **CoPaw** | Self-evolution and skill management, console/CLI excellence | Developers needing automated skill workflows | Skill test CLI, version auto-bumping, cron jobs |
| **Moltis** | Remote sandbox support (DigitalOcean, Fly.io), vault/secret management | Cloud deployers, production operators | Vercel/Daytona/Firecracker backends, OIDC, proxy support |
| **ZeroClaw** | "Everything is a plugin" architecture, 5+ SMS gateways | SMS-heavy operators, Web3/Fediverse communities | WASM plugin catalog, provider-type split, nodes dashboard |

---

## 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (Architecture & Feature Push)**
- **OpenClaw**: Highest raw velocity, two releases/day, but regression-prone. Mature codebase with growing complexity debt.
- **ZeroClaw**: Pre-release sprint toward v0.7.5 with 8 PRs merged daily. Converging on provider architecture overhaul.
- **IronClaw**: Exceptional architecture velocity (28 PRs merged). "Reborn" cutover is the most ambitious refactor in the ecosystem.

**Tier 2: Healthy Growth (Stable Cadence)**
- **NanoBot**: 18 PRs merged, strong fix turnaround (DeepSeek, context leakage). v0.2.0 likely within weeks.
- **PicoClaw**: 20 PRs merged, balanced feature/bug ratio. Nightly builds active. Multi-agent delegation milestone reached.
- **CoPaw**: Patch release shipped, version bump to v1.1.6b1. Long-context and performance issues being actively addressed.
- **Moltis**: 9 PRs merged, rapid bug fixes (login, sandbox, DeepSeek). Agent identity protocol signals strategic planning.
- **LobsterAI**: 16 PRs merged in maintenance sprint. Empty issue tracker suggests either mature code or incomplete issue tracking.

**Tier 3: Low Activity / Stabilizing**
- **NullClaw**: 1 issue, 1 PR updated. Critical bug (#871) unresolved for 12 days. Maintainer attention needed.
- **TinyClaw**: Zero activity. Project may be abandoned.
- **ZeptoClaw**: Zero activity. Project may be abandoned.

---

## 7. Trend Signals

1. **Memory as the Next Frontier**: Hermes Agent's MemPalace (96.6% on LongMemEval), OpenClaw's QMD pre-warming, and NanoBot's context leakage fixes all point to memory infrastructure as the competitive battleground. Developers should invest in **importance-scoring mechanisms** and **automatic consolidation** — these are the features users demand but no project fully delivers.

2. **Platform Proliferation is Accelerating**: ZeroClaw is adding 5 SMS gateways simultaneously. LINE, Feishu, and Rocket.Chat are being integrated across multiple projects. The implication: **channel support is table stakes** — a project without broad platform coverage will struggle to attract users.

3. **Security is Moving from Afterthought to Requirement**: TOTP for exec approvals (OpenClaw), Ed25519 identity protocols (NanoBot), and credential validation hardening (Hermes Agent, IronClaw) signal that enterprise-grade security is becoming non-negotiable. **Agent-to-agent trust protocols** are emerging as a new category.

4. **The Desktop/Mobile Gap is the Biggest Opportunity**: OpenClaw's #75 (74 👍), PicoClaw's Android config issues, and ZeroClaw's branding discussion all point to a **lack of polished native apps** across the ecosystem. The project that delivers a truly smooth desktop/mobile experience will capture significant mindshare.

5. **LLM Provider Fragmentation is a Tax on Users**: DeepSeek thinking mode bugs, Groq/Whisper normalization, OpenRouter credential issues — every project is independently rediscovering the same provider compatibility problems. **A shared provider abstraction layer** would benefit the entire ecosystem, though none exist yet.

6. **Multi-Agent Orchestration is the Next Architecture Wave**: IronClaw's TurnCoordinator, PicoClaw's `delegate` tool merge, ZeroClaw's multi-agent UX RFC, and Moltis's agent identity protocol all converge on a common insight: **single-agent systems are hitting limits**. Cross-agent handoff, identity, and session management will define the next generation of AI agent frameworks.

7. **Maintainer Bandwidth is the Invisible Constraint**: Hermes Agent's 46 open PRs, NullClaw's 12-day critical bug, and the long-stale PRs across multiple projects (PicoClaw #629 at 74 days, ZeroClaw #4710 at 6 weeks) suggest that **maintainer capacity is the ecosystem's bottleneck**. Contributors should prioritize small, well-scoped fixes to reduce maintainer burden.

---

**Bottom Line for Developers**: The ecosystem is vibrant but fragmented. OpenClaw offers the broadest platform coverage at the cost of stability. IronClaw and ZeroClaw are pushing architectural boundaries. For memory-heavy applications, watch Hermes Agent's MemPalace progress. For production deployments requiring reliability, NanoBot and Moltis demonstrate the best track records. The dormant projects (NullClaw, TinyClaw, ZeptoClaw) should be avoided unless you're willing to contribute significant maintainer effort.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-07

## 1. Today's Overview
NanoBot shows **high development velocity** with 42 PRs updated in the last 24 hours (18 merged/closed) and 13 issues updated (6 closed). The project is actively addressing stability concerns, with multiple fixes landing for **runtime context leakage** and **MCP resource management**. New feature work includes **smart glasses integration** (Rokid SSE channel), **sandbox customization**, and **API security hardening**. No new releases were published today. Overall project health is **strong**, with maintainers responding quickly to community-reported bugs.

## 2. Releases
**No new releases** — the latest remains v0.1.5.post3 (referenced in issue #3618). Users should track the `nightly` branch for the most recent fixes, particularly around runtime context handling.

## 3. Project Progress
**18 PRs merged/closed** today, highlighting several key achievements:

- **Runtime Context Fixes**: Multiple PRs by T3chC0wb0y (#3666, #3668, #3669) closed the regression where runtime context scaffolding leaked into persisted chat history — a critical fix for prompt integrity
- **WebSocket Media Support**: PR #3673 (ivelin) fixed media attachments being silently dropped in WebSocket messages
- **SSE Streaming Fix**: PR #3676 (zhw415876999-prog) removed compression buffering that broke real-time SSE delivery
- **Dream Restore Fix**: PR #3660 (Jefsky) rolled back `.dream_cursor` alongside memory files during restore (fixes #3657)
- **Tool Hint Truncation**: PR #3623 (tobrien) added configurable `toolHintMaxLength` for better UX in Telegram
- **Transcription Tolerances**: PR #3663 (subalkum) normalized API base URLs for Groq/OpenAI Whisper providers

## 4. Community Hot Topics
| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#3618 — Model region error](https://github.com/HKUDS/nanobot/issues/3618) | 11 | User hit "model not available in your region" — resolved via reinstall |
| [#3639 — Agent Identity Protocol](https://github.com/HKUDS/nanobot/issues/3639) | 3 | Proposal for Ed25519-based identity for cross-agent trust on mobile/edge |
| [#3652 — Disable Dream feature](https://github.com/HKUDS/nanobot/issues/3652) | 1 | User wants a simple `enabled` flag to turn off Dream completely |
| [#3665 — deepseek-v4-flash thinking mode error](https://github.com/HKUDS/nanobot/issues/3665) | 1 | `reasoning_content` must be passed back — affects deepseek users |

**Underlying Needs Analysis**: The most active threads reveal a pattern — power users want **more configuration control** (disable features, customize branding) while encountering **provider-specific edge cases** (region restrictions, thinking mode quirks). The identity protocol proposal (#3639) signals growing interest in **multi-agent ecosystems**.

## 5. Bugs & Stability

### High Severity (Fix PR Exists)
| Issue | Problem | Fix PR |
|-------|---------|--------|
| [#3638 — 100% CPU leak via MCP client](https://github.com/HKUDS/nanobot/issues/3638) | `AgentLoop.close_mcp()` leaves orphaned async tasks | *(not yet linked)* |
| [#3674 — WebSocket drops media silently](https://github.com/HKUDS/nanobot/issues/3674) | `media` field ignored in inbound messages | [#3673](https://github.com/HKUDS/nanobot/pull/3673) ✅ |
| [#3670 — Context scaffold leaks into chat history](https://github.com/HKUDS/nanobot/issues/3670) | Runtime context persists in replayed chats | [#3671](https://github.com/HKUDS/nanobot/pull/3671) 🔄 |

### Medium Severity
- [#3665 — deepseek-v4-flash thinking mode](https://github.com/HKUDS/nanobot/issues/3665): Error after repeated queries requiring `reasoning_content` passthrough
- [#3637 — Groq transcription config opacity](https://github.com/HKUDS/nanobot/issues/3637): Chat-style API base causes silent transcription failures — fix in [#3663](https://github.com/HKUDS/nanobot/pull/3663)
- [#3657 — Dream restore cursor not rolled back](https://github.com/HKUDS/nanobot/issues/3657): Fixed in [#3660](https://github.com/HKUDS/nanobot/pull/3660) ✅

### Low Severity
- [#3625 — WhatsApp token-burst](https://github.com/HKUDS/nanobot/issues/3625): Each LLM token sent as separate WhatsApp message with `supports_progress_deltas=True`

## 6. Feature Requests & Roadmap Signals
| Request | Potential for v0.2.0 |
|---------|----------------------|
| [#3652 — Dream disable flag](https://github.com/HKUDS/nanobot/issues/3652) | **High** — trivial config addition, clearly requested |
| [#3650 — Custom bot name/icon](https://github.com/HKUDS/nanobot/issues/3650) | **Medium** — requires UI/config changes across channels |
| [#3647 — Local tokenizer](https://github.com/HKUDS/nanobot/issues/3647) | **Medium** — avoids network dependency for prompt estimation |
| [#3639 — Agent identity protocol](https://github.com/HKUDS/nanobot/issues/3639) | **Low** — complex, likely for v0.3+ roadmap |

**Prediction**: The next minor release (v0.2.x) will likely include:
- Configurable Dream toggle (`enabled` flag)
- Custom bot identity (name/icon)
- Local tokenizer fallback for offline scenarios
- Rokid SSE channel (PR #3679)

## 7. User Feedback Summary
**Pain Points**:
- **Regional model restrictions** (#3618): French user couldn't access GLM-5.1 — forced to reinstall older backup
- **Configuration opacity** (#3637): Groq transcription requires knowledge of internal endpoint resolution logic
- **Streaming degradation** (#3677, #3676): SSE compression buffering made responses appear batched — fixed
- **Silent failures** (#3664): Matrix and Weixin channels swallowed transport errors without logging

**Satisfaction Signals**:
- User in #3618 reported "NanoBot v0.1.5.post3 is alive again" after fix — positive sentiment
- Community contributing multiple well-structured PRs (identity protocol, sandbox binds, bearer auth) indicates active, engaged developer base

## 8. Backlog Watch
| Item | Age | Status |
|------|-----|--------|
| [#2132 — Context metadata merging](https://github.com/HKUDS/nanobot/issues/2132) | 50 days | **Resolved today** by #3666 ✅ |
| [#2526 — Session preservation on /stop](https://github.com/HKUDS/nanobot/pull/2526) | 42 days | **Open** — needs maintainer review; critical for Telegram UX |
| [#3467 — /clear command](https://github.com/HKUDS/nanobot/pull/3467) | 10 days | **Open** — clean feature, low risk, could be merged quickly |
| [#1443 — Silent heartbeat reasoning](https://github.com/HKUDS/nanobot/pull/1443) | 66 days | **Stale** — 2 months without review; needs maintainer decision |
| [#3673 — WebSocket media fix](https://github.com/HKUDS/nanobot/pull/3673) | 0 days | **Freshly opened** — addresses high-severity bug, should prioritize review |

**Maintainer Attention Needed**: PR #2526 (session preservation on /stop) is the most impactful queued item — losing message history on cancellation is a common user frustration. PR #1443 (silent heartbeat) has been neglected for over 2 months and deserves a merge/close decision.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-05-07  
**Source Data:** GitHub (github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent is experiencing a **high-velocity development day** with 50 issues and 50 PRs updated in the last 24 hours, alongside 6 closed issues and 4 merged/closed PRs. Activity is concentrated around **platform adapter expansion** (LINE, Feishu, WhatsApp), **memory system improvements** (MemPalace, MemOS, holographic memory), and **critical bug fixes** in gateway credential handling and session persistence. The project shows strong community engagement with multiple contributors submitting fix PRs alongside feature work, though the open-to-closed ratio (46/4 for PRs) suggests a growing backlog of pending work. No new releases were published today.

---

## 2. Releases

**No new releases today.** The last release remains v0.12.0 (2026-04-30). Users should note that several critical bug fixes and platform adapters are in the PR pipeline but not yet in a stable release.

---

## 3. Project Progress (Merged/Closed Today)

**4 PRs were closed/merged:**

| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#21020](https://github.com/NousResearch/hermes-agent/pull/21020) | feat(line): add LINE Messaging API platform plugin | Feature | New LINE bot adapter for Taiwan/Japan/Thailand markets |
| [#20966](https://github.com/NousResearch/hermes-agent/issue/20966) | /model picker silently falls back to text list | Bugfix | Fixed TypeError swallow in `/model` command |
| [#20982](https://github.com/NousResearch/hermes-agent/issue/20982) | Gateway creates AIAgent with empty API key | Bugfix | Fixed P1 crash when OPENROUTER_API_KEY is missing |
| [#20514](https://github.com/NousResearch/hermes-agent/issue/20514) | HTTP 404 with minimax-cn base_url inheritance | Bugfix | Fixed auxiliary vision provider resolution |

**Key Feature Advanced:** The **LINE Messaging API plugin** ([PR #21020](https://github.com/NousResearch/hermes-agent/pull/21020)) was merged, adding support for the dominant messaging platform in Taiwan, Japan, and Thailand — filling a major geographic gap in Hermes' platform support.

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#6323 – Add mempalace for external memory support](https://github.com/NousResearch/hermes-agent/issue/6323)** (17 comments, 25 👍)  
   *Status: OPEN*  
   The community's top-voted feature request. MemPalace achieves 96.6% on LongMemEval with fully local, free operation. Two open PRs ([#5671](https://github.com/NousResearch/hermes-agent/pull/5671), [#21017](https://github.com/NousResearch/hermes-agent/pull/21017)) are in progress.

2. **[#12614 – Matrix bot receives no messages on fresh setup](https://github.com/NousResearch/hermes-agent/issue/12614)** (17 comments)  
   *Status: OPEN*  
   A persistent bug affecting new Matrix deployments. The bot joins rooms but never receives events — high visibility for Matrix users.

3. **[#10644 – Add Brave Search as native web search backend](https://github.com/NousResearch/hermes-agent/issue/10644)** (2 comments, 22 👍)  
   *Status: OPEN*  
   Strong community desire for a cost-effective, generous-free-tier search API alongside existing paid providers.

### Most Active PRs

- **[#21000 – Feishu interactive card messages](https://github.com/NousResearch/hermes-agent/pull/21000)** — Markdown rendering improvement for Feishu
- **[#21019 – Classify Anthropic OAuth tool-use failures](https://github.com/NousResearch/hermes-agent/pull/21019)** — Better error handling for Anthropic provider

**Analysis:** The community is **heavily focused on memory infrastructure** (MemPalace, importance scoring, auto-dream consolidation) and **platform expansion** (LINE, Feishu, multi-Telegram bots). These two themes represent the tension between making Hermes smarter (memory) versus more accessible (platforms).

---

## 5. Bugs & Stability

### Critical / P1 Today

- **[#20982 – Gateway uses empty API key, crashes](https://github.com/NousResearch/hermes-agent/issue/20982)** — **CLOSED**  
  Gateway creates AIAgent with empty OpenRouter API key; fallback providers ignored. **Fix merged today.**

### High / P2 Today

| Issue | Title | Status |
|-------|-------|--------|
| [#21011](https://github.com/NousResearch/hermes-agent/issue/21011) | iLink WeChat rate limiting with no retry | OPEN |
| [#20143](https://github.com/NousResearch/hermes-agent/issue/20143) | WhatsApp self-chat drops user's own group messages | OPEN |
| [#20996](https://github.com/NousResearch/hermes-agent/issue/20996) | /model command falls back to text (duplicate of #20966) | OPEN |
| [#20927](https://github.com/NousResearch/hermes-agent/issue/20927) | Windows `write_file` path handling errors | OPEN — **Fix PR [#21027](https://github.com/NousResearch/hermes-agent/pull/21027) exists** |
| [#20899](https://github.com/NousResearch/hermes-agent/issue/20899) | Telegram images visible to model but not tool-accessible | OPEN |
| [#20939](https://github.com/NousResearch/hermes-agent/issue/20939) | MemOS spawns new bridge process every turn (~250MB leak) | OPEN |
| [#20807](https://github.com/NousResearch/hermes-agent/issue/20807) | delegate_task returns completed without verifiable side effects | OPEN |

### Medium / P3

- [#20966](https://github.com/NousResearch/hermes-agent/issue/20966) — `/model` picker silent fallback — **CLOSED**
- [#20914](https://github.com/NousResearch/hermes-agent/issue/20914) — Telegram fallback transport not used in tool calls — **CLOSED**
- [#21018](https://github.com/NousResearch/hermes-agent/pull/21018) — macOS lock PID detection fix — **PR open**

### Regression Alerts
The **MemOS memory provider** ([#20939](https://github.com/NousResearch/hermes-agent/issue/20939)) spawning processes on every turn is a severe performance regression for memory-heavy workflows. Similarly, the **Windows path handling** bug ([#20927](https://github.com/NousResearch/hermes-agent/issue/20927)) with a fix PR suggests a known pattern the team is resolving.

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Version (Alpha Signals)

1. **MemPalace as built-in memory provider** ([#6323](https://github.com/NousResearch/hermes-agent/issue/6323), [#5671](https://github.com/NousResearch/hermes-agent/pull/5671), [#21017](https://github.com/NousResearch/hermes-agent/pull/21017))  
   Three PRs and the top-voted issue — this is the most likely feature to land.

2. **LINE Messaging API platform** ([PR #21020](https://github.com/NousResearch/hermes-agent/pull/21020)) — **Already merged.**

3. **Feishu interactive card rendering** ([PR #21000](https://github.com/NousResearch/hermes-agent/pull/21000)) — High activity, likely in next release.

### Under Consideration (Growing Signal)

| Issue | Request | Community Interest |
|-------|---------|-------------------|
| [#10644](https://github.com/NousResearch/hermes-agent/issue/10644) | Brave Search API backend | 22 👍 |
| [#10771](https://github.com/NousResearch/hermes-agent/issue/10771) | Auto Dream (automatic memory consolidation) | Active discussion |
| [#12883](https://github.com/NousResearch/hermes-agent/issue/12883) | Memory importance-scoring mechanism | Deep architectural concern |
| [#10452](https://github.com/NousResearch/hermes-agent/issue/10452) | Multi-Telegram bot support | Operational need |
| [#5197](https://github.com/NousResearch/hermes-agent/issue/5197) | Automated npm audit for security | Security hygiene |

### Roadmap Prediction  
The **next version** (v0.13.0) will likely include:  
- MemPalace memory provider (multiple PRs converging)  
- LINE platform adapter (merged)  
- Feishu card rendering (PR #21000)  
- Windows path handling fix (PR #21027)  
- Anthropic OAuth error classification (PR #21019)  
- Memory usage fixes for MemOS holographic and retrieval count tracking

---

## 7. User Feedback Summary

### Pain Points (recurring themes)

1. **Memory architecture limitations** — Users report severe context loss, no importance scoring, no automatic consolidation ([#20849](https://github.com/NousResearch/hermes-agent/issue/20849), [#12883](https://github.com/NousResearch/hermes-agent/issue/12883), [#10771](https://github.com/NousResearch/hermes-agent/issue/10771)). One user described "catastrophic code loss" during multi-day coding workflows.

2. **Platform integration frustrations** — Matrix setup fails silently ([#12614](https://github.com/NousResearch/hermes-agent/issue/12614)), Telegram attachments not tool-accessible ([#20899](https://github.com/NousResearch/hermes-agent/issue/20899)), WhatsApp group messages dropped ([#20143](https://github.com/NousResearch/hermes-agent/issue/20143)), MCP servers not retrying connections ([#19559](https://github.com/NousResearch/hermes-agent/issue/19559)).

3. **Provider-specific issues** — Frequent connection drops with MiniMax ([#6838](https://github.com/NousResearch/hermes-agent/issue/6838)), empty-response retry loops on Claude Opus 4 ([#13248](https://github.com/NousResearch/hermes-agent/issue/13248)), OpenRouter credential validation gaps ([#20982](https://github.com/NousResearch/hermes-agent/issue/20982)).

4. **Windows experience** — Path handling, TUI stability, Ctrl+Backspace all reported this week ([#20927](https://github.com/NousResearch/hermes-agent/issue/20927), PR [#20999](https://github.com/NousResearch/hermes-agent/pull/20999)).

### Positive Signals
- Users actively contributing PRs for their desired features (LINE plugin, Windows fixes, Feishu rendering)
- Strong community engagement on memory infrastructure — indicates trust in Hermes' platform direction
- Multiple users requesting documentation/clarification ([#21003](https://github.com/NousResearch/hermes-agent/issue/21003), PR [#21010](https://github.com/NousResearch/hermes-agent/pull/21010)), suggesting adoption is growing

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Days Open | Title | Why It Matters |
|-------|-----------|-------|----------------|
| [#4184](https://github.com/NousResearch/hermes-agent/issue/4184) | 36 days | `hermes mcp add` falls through to chat REPL | Blocks MCP tool setup entirely |
| [#5197](https://github.com/NousResearch/hermes-agent/issue/5197) | 31 days | Automated npm audit | Security hygiene, easy win |
| [#5521](https://github.com/NousResearch/hermes-agent/pull/5521) | 31 days | DeepInfra provider support (PR) | 100+ models via one API, strong demand |
| [#5671](https://github.com/NousResearch/hermes-agent/pull/5671) | 30 days | MemPalace provider (PR) | Critical-path feature, top-voted issue |
| [#12614](https://github.com/NousResearch/hermes-agent/issue/12614) | 18 days | Matrix bot sync stalls | Blocks Matrix adoption entirely |
| [#7677](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+is%3Aopen+label%3Acomp%2Ftui) | Various | TUI issues (multiple) | Core UX for power users |

### Stale PRs of Concern

- **[#5521 – DeepInfra provider](https://github.com/NousResearch/hermes-agent/pull/5521)** — Uncommented for over a month, would unlock 100+ models
- **[#15624 – Mem0 plugin update](https://github.com/NousResearch/hermes-agent/pull/15624)** — Open 12 days, touches critical memory infrastructure

---

## Health Assessment

**Overall: 🟡 Moderate Activity / Growing Pains**

Hermes Agent is in a **feature-rich expansion phase** with strong community contribution velocity. However, the **high open-PR count (46)** and **P1-P2 bugs** in core areas (gateway credential validation, memory leaks, Windows support) indicate the maintainer team may be stretched thin. The convergence of multiple PRs around MemPalace is promising — this feature alone would significantly address the memory architecture complaints that dominate user feedback. The addition of LINE and Feishu platforms shows smart geographic expansion, but **Matrix and WhatsApp stability issues** remain unresolved and may frustrate new adopters on those platforms.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-07

## 1. Today's Overview

PicoClaw is experiencing a period of elevated activity, with **21 issues updated in the last 24 hours** and **63 pull requests** moving through the pipeline. The ratio of open (14) to closed (7) issues indicates sustained community engagement, while the 20 merged/closed PRs against 43 open signal a healthy but slightly backlogged review cadence. A new **nightly build (v0.2.8-nightly.20260507)** has been cut, though it carries the usual stability caveats for automated builds. The project remains on an active development trajectory, with significant attention on multi-agent improvements, session management, tool feedback UX, and provider compatibility.

## 2. Releases

**Nightly Build — v0.2.8-nightly.20260507.788cda5c**

- Automated nightly build from the `main` branch.
- **⚠️ Unstable** — intended for early testers and contributors only.
- Comparisons against v0.2.8: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- No breaking changes or migration notes have been published for this build.

## 3. Project Progress

**Merged/Closed PRs (20 total today):**

- **Multi-agent delegation** reached a key milestone with the merge of PR [#2531](https://github.com/sipeed/picoclaw/pull/2531) — the `delegate` tool for cross-agent task handoff. This closes a core requirement from the Phase 2 roadmap.
- **Web search reliability** improved with PR [#2629](https://github.com/sipeed/picoclaw/pull/2629) merging centralized provider selection and native-search fallback logic.
- **Provider layer** gained OpenAI-compatible embeddings support via PR [#2624](https://github.com/sipeed/picoclaw/pull/2624), extending compatibility with vLLM-style endpoints.
- **Stream parsing** was hardened in PR [#2411](https://github.com/sipeed/picoclaw/pull/2411), fixing split-SSE chunk handling that could drop content on provider boundaries.
- **Channel enhancements**: Weixin multi-instance support (PR [#2606](https://github.com/sipeed/picoclaw/pull/2606)) and release workflow flexibility (PR [#2610](https://github.com/sipeed/picoclaw/pull/2610)) both merged.
- **Session timestamp fix** (PR [#2788](https://github.com/sipeed/picoclaw/pull/2788)) adds per-message `created_at` to the Session API — addresssing a reported data integrity issue.

## 4. Community Hot Topics

| Item | Type | Summary | Engagement |
|------|------|---------|------------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) — Autonomous Browser Ops | Open Issue | Expanding PicoClaw's reach to browser-based web interactions | 👍 8, 7 comments |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` guardCommand false positives | Open Issue | Workspace path restriction incorrectly blocks curl commands | 👍 2, 8 comments |
| [#629](https://github.com/sipeed/picoclaw/issues/629) — No retry on LLM call failure | Open Issue | HTTP 500 from provider hangs tasks indefinitely | 13 comments |

**Analysis:**
- Browser automation (#293) remains the most eagerly awaited feature, reflecting a clear desire for PicoClaw to act as a general-purpose web agent, not just a chat tool.
- The `exec` tool guard (#1042) is a recurring usability pain point: safety heuristics are too aggressive, blocking legitimate multi-purpose tools like `curl`. This indicates the safety system needs smarter path analysis.
- The retry issue (#629) is a **reliability limiter** — users running long tasks face silent failures. This is an infrastructure/UX gap: the system should gracefully recover from transient provider errors.

## 5. Bugs & Stability

**High Severity:**
- **⛔ [#2769](https://github.com/sipeed/picoclaw/issues/2769) — Authentication failure across all providers (401 errors)**  
  Newly reported. Valid API keys are rejected in both stable and nightly builds. The suspected cause is an OAuth/credential management bug affecting multiple providers (Groq, OpenRouter, Nvidia). **No fix PR yet.** High priority — blocks all external LLM usage.
- **⛔ [#2704](https://github.com/sipeed/picoclaw/issues/2704) — DingTalk SDK panic crashes gateway**  
  A race condition in `dingtalk-stream-sdk-go` causes gateway crashes on connection timeout. Reproduced across 6 instances. Requires dependency update or patch.
- **⚠️ [#2780](https://github.com/sipeed/picoclaw/issues/2780) — Config reload breaks voice recognition**  
  Groq-ASR model stops working after config reload. Affects Telegram channel users. New as of today.

**Medium Severity:**
- [#2787](https://github.com/sipeed/picoclaw/issues/2787) / [#2786](https://github.com/sipeed/picoclaw/issues/2786) — Session messages lack individual timestamps. **Fix PR exists** (PR [#2788](https://github.com/sipeed/picoclaw/pull/2788)).
- [#2706](https://github.com/sipeed/picoclaw/issues/2706) — DeepSeek v4 `reasoning_content` field not preserved between turns, causing 400 errors.
- [#2785](https://github.com/sipeed/picoclaw/issues/2785) — Feishu notification only shows first tool call when `separate_messages=false`.

**Low Severity:**
- [#2784](https://github.com/sipeed/picoclaw/issues/2784) — Baidu Search free tier documentation is outdated (README says 1000/day, Baidu docs say ~50/day).

## 6. Feature Requests & Roadmap Signals

**Likely for next release (v0.3.0):**
1. **Per-message timestamps** — PR [#2788](https://github.com/sipeed/picoclaw/pull/2788) is already open and ready; highly likely to land.
2. **MCP Streamable HTTP transport** — Issue [#2782](https://github.com/sipeed/picoclaw/issues/2782) filed today; community demand is strong as more MCP servers adopt this protocol. A fix may appear within days.
3. **Agent identity isolation for sub-agents** — Issue [#2775](https://github.com/sipeed/picoclaw/issues/2775) describes a fundamental design issue: spawned sub-agents inherit the root Agent's `AGENT.md`, causing role confusion. The `delegate` tool just merged (PR [#2531](https://github.com/sipeed/picoclaw/pull/2531)) makes this more urgent.

**Roadmap signals:**
- **Browser automation (#293)** continues to receive support (👍 8). While not yet in active implementation, it's a clear community priority.
- **Token consumption dashboard (#2217)** was closed but the underlying need for observability persists.
- **OpenCode model provider** support requested (#2671) — niche but suggests a growing provider ecosystem.

## 7. User Feedback Summary

**Pain points (repeated themes):**
- **Configuration and credential management** is fragile: multi-provider auth (#2769), config reloads breaking features (#2780), and local model setup being non-obvious (#2368).
- **Session reliability** remains inconsistent: context lost on API timeout (#2621), session history truncation (#2310), and missing per-message timestamps (#2787) erode user trust.
- **Tool safety system** is over-broad: the `exec` tool guard blocks legitimate commands (#1042), suggesting the regex-based path check needs to be context-aware.
- **Chinese-language users** are actively reporting bugs (#1042, #2310, #2367), indicating a strong East Asian user base. Several issues are reported in Chinese, and translation gaps in the UI (#2367) have been noted.

**Positive signals:**
- The `delegate` tool merge and the `working_summary` tool feedback (PR [#2778](https://github.com/sipeed/picoclaw/pull/2778)) directly address long-standing requests for better multi-agent UX.
- The community is self-organizing: bug reports are well-structured and include reproducible steps, environment details, and even attempted workarounds (e.g., thinking mode disable for DeepSeek in #2706).

## 8. Backlog Watch

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) — No retry on LLM failure | 74 days (since Feb 22) | Open, stale | High — core reliability issue |
| [#293](https://github.com/sipeed/picoclaw/issues/293) — Browser automation | 80 days (since Feb 16) | Open, stale | Medium — high community expectations |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` guard false positives | 64 days (since Mar 4) | Open, stale | Medium — affects everyday tool use |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) — Android app local model config | 32 days (since Apr 5) | Open, stale | Medium — Android UX blocker |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) — ChatGPT OAuth subscription fix | 11 days (since Apr 26) | Open | Medium — unblocks ChatGPT Plus integration |

**Maintainer attention needed:** The persistent stale state of #629 and #293 suggests these are either complex to solve or low priority internally. However, both represent significant reliability gaps and community expectations — a roadmap update or status communication would help manage user sentiment.

---

*Digest generated 2026-05-07 from PicoClaw GitHub activity.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-07

## Today's Overview
NanoClaw is in a **high-activity, high-velocity** state today, with **25 PRs updated in the last 24 hours**, including 3 merges/closes. Four issues were updated, three remain open and one closed. The project is seeing a **surge of UX-focused contributions**, particularly around Slack onboarding, with 8 PRs from a single contributor (alipgoldberg) dedicated to improving installation flow and accessibility for non-technical users. There is also notable concurrent work on migration tooling robustness, infrastructure upgrades, and new feature skills (yt-dlp MCP, tool-visibility). The project is not currently in release preparation, but the volume of merged fixes suggests a strong maintenance cadence.

## Releases
**No new releases** recorded today. No tags or versions were published in the last 24 hours.

## Project Progress
Three PRs were merged or closed today, representing tangible forward progress:

- **\[CLOSED\] PR #2308 — fix(prompts): tighten approval-card flow + drop ghost tool ref** (by SamBagetAI) – Addresses multiple audit items (P0, P1, P2): removes a non-existent tool reference (`list_recent_batches`) from baget prompts, and condenses verbose approval-fallback bullets. This fixes a bug that could confuse agents during task execution.
- **\[CLOSED\] PR #2302 — fix(whatsapp): allow self-chat messages through fromMe filter** (by Koshkoshinsk) – Fixes a practical usability issue: users who message their own WhatsApp number (self-chat) had all messages dropped by the `fromMe` echo filter. Now uses the existing `sentMessageCache` to distinguish bot echoes from genuine user input, enabling self-chat workflows.
- **\[CLOSED\] PR #2309 — fix(skills): replace sqlite3 CLI with in-tree better-sqlite3 wrapper** (by glifocat) – Directly addresses the root cause of Issue #2191 (misleading error when sqlite3 CLI missing). Eliminates the host dependency on `sqlite3` by using an in-tree JavaScript wrapper, making the migration script more portable and error messages more accurate.

## Community Hot Topics
The most active area of community engagement is the **Slack setup experience**, with a single user (alipgoldberg) driving 8 open PRs (#2295–#2305). These PRs address concrete usability problems:

- **PR #2300** — Corrects wrong icon glyph and location references in Slack member-ID copy instructions (bottom-left vs top-right, vertical kebab vs horizontal ellipsis). *Link: qwibitai/nanoclaw PR #2300*
- **PR #2295** — Clarifies the Slack picker hint to warn users upfront about the public-URL requirement before they invest time pasting tokens. *Link: qwibitai/nanoclaw PR #2295*
- **PR #2296** — Labels Slack setup cards as "Part 1" and "Part 2" so users understand the two-phase process. *Link: qwibitai/nanoclaw PR #2296*
- **PR #2304** — Rewrites jargon-heavy "Expose NanoClaw's webhook server via ngrok/Cloudflare Tunnel/reverse proxy" into plain language. *Link: qwibitai/nanoclaw PR #2304*
- **PR #2305** — Gates the complex post-install card behind an opt-in confirmation, preventing non-technical users from hitting a wall after 5 minutes of token pasting. *Link: qwibitai/nanoclaw PR #2305*

**Underlying need**: The community is revealing that Slack onboarding is the critical pain point for NanoClaw adoption. Non-technical users are being lost at the public-URL requirement. The burst of fixes suggests the project is prioritizing lowering the barrier to entry for Slack, which is likely the most popular channel adapter.

Other hot items include **PR #2306** — `feat(yt-dlp-mcp)` — an in-tree MCP server for YouTube downloading (by CrAzyScreamx), and **PR #2301** — `feat(add-github)` adding a polling mode for NAT/firewall environments (by ira-at-work).

## Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **High** | #2312 — `groups/global/CLAUDE.md` unconditionally deleted on every startup, causing permanent dirty working tree | Open | None yet |
| **High** | #2311 — `/claw` skill fundamentally incompatible with v2 architecture (DB, transport, container model, secrets) | Open | None yet (deprecation recommended) |
| **Medium** | #2294 — `migrate-v2.sh` doesn't surface renamed/new channel env keys for Matrix and Discord, causing silent dead channels | Open | None yet |
| **Fixed** | #2191 — `migrate-v2.sh` misleading error when `sqlite3` CLI missing | Closed | PR #2309 (merged) |

**Key observation**: The highest-severity bug (#2312) is a persistent source of developer friction — anyone cloning the repo and restarting the service gets a dirty git tree. No fix PR exists yet. Issue #2311 is more architectural: the legacy `/claw` skill is structurally incompatible with v2 and the maintainer explicitly recommends deprecation rather than patching.

## Feature Requests & Roadmap Signals

Several strong feature signals emerged today:

- **yt-dlp MCP skill** (PR #2306) — A complete in-tree MCP server for YouTube downloading with an installer script. This is a full feature skill with both source code and SKILL.md, suggesting it's production-ready and likely to merge.
- **Tool-visibility skill** (PR #2211, still open after 4 days) — Live tool-call previews for users. This is a quality-of-life enhancement that makes the agent's internal reasoning visible, a common request for AI assistant transparency.
- **Voice transcription skill** (PR #2009, open since April 25) — Local whisper transcription support (openai-whisper and whisper.cpp backends). This has been open for 12 days without merging, possibly awaiting review.
- **GitHub polling mode** (PR #2301) — A no-port-required GitHub integration for operators behind NAT/firewall. This addresses real deployment constraints.
- **Infrastructure upgrade** (PR #2307) — Switch to Debian Trixie, dependency upgrades, smaller image size. This is a housekeeping PR that signals preparation for next release.

**Next-version prediction**: The Slack UX improvements (8 PRs), yt-dlp MCP skill, and the Trixie base image upgrade are most likely to be included in the next release. The `/claw` deprecation may also be actioned.

## User Feedback Summary

Real user pain points expressed through issues and PRs:

- **Installation friction is the dominant complaint**: Multiple PRs from alipgoldberg reflect actual user bewilderment during Slack setup — jargon-heavy instructions, missing part labels, wrong icon references, and the surprise public-URL requirement. This suggests users are trying Slack onboarding and failing.
- **Migration from v1 to v2 is error-prone**: Issue #2294 (silent Matrix/Discord dead channels) and the now-fixed #2191 (misleading sqlite3 error) both stem from users attempting the v1→v2 migration and encountering confusing failures. The fixes in PR #2309 are a positive response.
- **WhatsApp self-chat usability**: The fix in PR #2302 addresses a real workflow — users messaging their own number for testing — which was completely broken.
- **Security awareness**: PR #2004 (trust only canonical channels remote) remains open 12 days, indicating the community is aware of the attack surface in channel installer scripts but maintainers may be cautious about merging security hardening without thorough review.

Satisfaction signals: The high volume of PRs (25/day) and the presence of multiple contributors actively polishing UX suggests a healthy, engaged community that believes the project is worth improving.

## Backlog Watch

| Item | Owner | Days Open | Priority Signal |
|---|---|---|---|
| **PR #2004** — fix(setup): trust only canonical channels remote (security) | Hinotoi-agent | 12 days | **Critical** — unmerged security hardening that restricts which git remotes can supply channel installer code. Needs maintainer review and decision. |
| **PR #2009** — feat(skills): add-voice-transcription-free-whisper | ira-at-work | 12 days | High — complete feature skill with two backends and production caveats. Likely waiting for review bandwidth. |
| **PR #2187** — fix(platform-id): don't namespace CLI bare platform ids | alex-shepel | 5 days | Medium — blocks CLI functionality for bare platform IDs. Has a linked closed issue. |
| **PR #2211** — feat: add tool-visibility skill for live tool-call previews | robbyczgw-cla | 4 days | Medium — valuable UX feature, already has CI coverage. |

**Maintainer attention needed**: PR #2004 (security), PR #2009 (voice transcription), and Issue #2312 (dirty working tree bug) are the three items most deserving of maintainer time. The security PR in particular is critical — channel installer scripts have full code execution privileges on pull, and limiting trusted remotes is a fundamental hardening step.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-07

## Today's Overview
Project activity remains low but focused, with one open issue and one open pull request receiving updates in the last 24 hours. No new releases or merged PRs were recorded, suggesting a period of slower development or maintainer review. The single open bug (#871) continues to draw community attention around a critical usability barrier for low-resource device users. The open PR #783, a substantial cron subsystem feature addition, remains under review after a month. Overall, project health appears stable but with a narrow active focus requiring maintainer decisions to unblock progress.

---

## Releases
*None.* No new releases were published today.

---

## Project Progress
- **No PRs were merged or closed today.**  
  The only open PR (#783) was last updated today but remains unmerged, indicating no new features or fixes were integrated.

---

## Community Hot Topics
**#871 [OPEN] [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support**  
[🔗 Issue Link](https://github.com/nullclaw/nullclaw/issues/871)  
- *Author:* uMendex  
- *Created:* 2026-04-25 | *Updated:* 2026-05-07  
- *Comments:* 7 (highest engagement in repo)  

**Analysis:** This issue has generated the most community discussion, driven by a clear underlying need: users deploying NullClaw on cheap, low-power hardware (e.g., Raspberry Pi, thin clients, edge devices) cannot use `web_search` without paying for a Brave API key or wrestling with API-rate-limited alternatives. The request is for a direct DuckDuckGo integration that works out-of-the-box with no external API key. This is a friction point that limits the project's adoption on exactly the kind of hardware the README targets. The seven comments suggest multiple users share this pain point, and no maintainer resolution has been posted.

---

## Bugs & Stability
**One open bug, no new bugs reported today:**

**Critical (#871)** — `web_search` impractical on low-resource devices  
- **Impact:** Prevents core search functionality for a key target audience (weak/cheap devices).  
- **Status:** Open, no fix PR exists, maintainer response unclear.  
- **Workaround:** Users must obtain a Brave Search API key or run on more capable hardware.  
- **Severity:** Critical — affects core usability and the project's stated vision.

No other bugs, crashes, or regressions were reported today.

---

## Feature Requests & Roadmap Signals
**Primary request from #871:**  
- **Direct DuckDuckGo search support** (no API key, lightweight, works on low-resource devices). This is the dominant user-requested feature driving all recent community engagement. **Prediction:** If a maintainer responds positively, this could be prioritized in the next minor release (e.g., v0.10.x) given its "critical" label and high user impact.

**Secondary cue from PR #783:**  
- PR #783 adds a **cron subagent engine** with JSON CLI output, run history, security hardening, and per-job timezone support. This is a major feature that, once merged, would significantly expand NullClaw's automation capabilities. Its open status for a month may indicate maintainers are debating design decisions or scope.

---

## User Feedback Summary
**Pain Points:**
- **Web search dependency on external API keys** is the top frustration. Users want a zero-config, self-contained search experience on low-end hardware.
- **Slow PR review cycle** — PR #783 has been open for 30 days with no merge or detailed feedback visible.

**Use Cases:**
- Low-resource device deployment (the core NullClaw use case).
- Lightweight automation/cron-based task scheduling (implied by PR #783 interest).

**Satisfaction/Dissatisfaction:**  
- Users are engaged and contributing detailed bug reports (7 comments on #871), indicating investment in the project.  
- Dissatisfaction stems from the lack of a simple, free search fallback and the apparent bottleneck in feature PR review.

---

## Backlog Watch
**#783 — feat(cron): cron subagent, run history, JSON output, security hardening**  
[🔗 PR Link](https://github.com/nullclaw/nullclaw/pull/783)  
- *Open since:* 2026-04-07 (30 days)  
- *Importance:* High — adds significant new functionality (scheduler, job types, JSON CLI)  
- *Signal:* Updated today but still open. This PR needs maintainer attention: either merge, request changes, or close with a clear rationale. Extended inactivity risks contributor fatigue.

**#871 — web_search bug (Critical)**  
[🔗 Issue Link](https://github.com/nullclaw/nullclaw/issues/871)  
- *Open since:* 2026-04-25 (12 days)  
- *Importance:* High — blocks core feature for target audience  
- *Signal:* No maintainer response yet. Adding a `needs-maintainer` label or even an acknowledgment would improve community trust.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**Project Digest: IronClaw**
**Date: 2026-05-07**

**1. Today's Overview**

The IronClaw project shows exceptional activity, with 50 PRs updated and 41 issues updated in the last 24 hours, indicating a major burst of development velocity. Today marks the landing of foundational Reborn architecture contracts, including the first concrete `ProductAdapter` implementation for the Telegram channel, alongside significant CI and stability fixes. The project is intensely focused on the "Reborn" cutover—a fundamental re-architecture of core services—which appears to be the primary driver of all current work. While no new releases were published today, the sheer volume of merged PRs suggests a release candidate may be imminent.

**2. Releases**

No new releases were published in the last 24 hours.

**3. Project Progress - Merged/Closed PRs**

Today saw a staggering 28 PRs merged or closed, reflecting a major push to land foundational architecture components. Key advances include:

- **Reborn Architecture Foundations**: Multiple contract-defining PRs were merged, landing the new canonical data models and service boundaries for the upcoming architecture:
    - `#3315` (feat: add session thread transcript contract) – Defines the `ironclaw_threads` crate with `SessionThreadService` DTOs and message handling.
    - `#3314` (feat: add conversation binding contract slice) – Adds `ironclaw_conversations` with `ConversationBindingService`, `SessionThreadService`, and `InboundTurnService` contracts.
    - `#3305` (feat: apply validated loop exits) – Adds runner-side validation for loop exits, improving turn lifecycle safety.
    - `#3311` (feat: add turn run wake notifier seam) – Adds a new notification seam for waking queued runs only after durable persistence.
    - `#3180` (refactor: native-isolated guardrails + module split) – Lands the full Reborn memory substrate for native guardrails.

- **ProductAdapter Migration**: The first concrete channel migration landed:
    - `#3316` (feat: add ProductAdapter contracts + Telegram v2 tracer-bulle…) – Implements the new `ProductAdapter` boundary with a Telegram v2 channel, proving the new architecture end-to-end.

- **CI & Reliability Improvements**:
    - `#3157` (fix: inline gate await for Tier 0 + Tier 1 Approval gates) – Fixes tools requiring approval causing script errors instead of proper pausing.
    - `#3301` (fix: build ironclaw docker image with staging tag) – Restores Docker image workflow behavior post-merge-queue cutover.
    - `#3312` (fix: keep nightly e2e alert outside reusable workflow) – Fixes nightly CI failures caused by workflow restructuring.
    - `#3310` (docs: refresh feature parity against OpenClaw) – Updates the feature parity comparison document.

- **Bug Fixes**:
    - `#3197` (fix: coerce engine action params per schema) – Fixes `cooldown_secs` string-to-integer coercion error in mission creation commands (issue #3132).

**4. Community Hot Topics**

The most active discussions all center on the Reborn architectural cutover, led by maintainer `serrrfirat`:

- **#3013** [Open] *Reborn cutover blocker: add kernel TurnCoordinator* (7 comments) - The central tracking issue for the host-layer turn coordination service. The volume of sub-issues and PRs referencing this indicates it's the primary architectural bottleneck. [Link](https://github.com/nearai/ironclaw/issues/3013)

- **#3031** [Open] *[EPIC] Reborn product surface migration* (6 comments) - The parent epic for preserving user/operator behavior during the re-architecture. This issue acts as the roadmap for all migration work. [Link](https://github.com/nearai/ironclaw/issues/3031)

- **#3198** [Closed] *Define TurnCoordinator public API shape* (5 comments) - A closed definition issue that preceded today's implementation PRs. The comment thread likely contains API design decisions now reflected in merged code. [Link](https://github.com/nearai/ironclaw/issues/3198)

- **#3016** [Open] *Reborn cutover blocker: add reference AgentLoopHost facade* (5 comments) - Another blocker for the cutover, concerning the host-side loop orchestration layer. [Link](https://github.com/nearai/ironclaw/issues/3016)

The underlying need is clear: the community and core team are coordinating a complex, multi-crate architectural migration with many interdependencies. The high comment count on these tracker issues reflects the dependency management and design validation required.

**5. Bugs & Stability**

Three `bug_bash_P1` (Priority 1) issues were filed today, all related to Telegram channel integration:

- **#3320** [Open] *IronClaw in telegram cannot continue if gmail auth failed* – A user-blocking bug where Gmail auth failure permanently prevents conversation continuation, even after `/clear`. This appears to be a deadlock state in the session/state management. [Link](https://github.com/nearai/ironclaw/issues/3320)

- **#3319** [Open] *Gmail Authentication fails (400) when started from Telegram* – The root cause related to #3320; Gmail OAuth flow fails when initiated from Telegram. [Link](https://github.com/nearai/ironclaw/issues/3319)

- **#3317** [Open] *Telegram setup did not work with my local IronClaw* – A configuration or onboarding failure for local Telegram setup. [Link](https://github.com/nearai/ironclaw/issues/3317)

**Severity Assessment**: These three Telegram bugs are **high severity** as they represent user-facing regressions in a core channel. No dedicated fix PRs exist yet, though today's merged `#3316` (Telegram v2 tracer) may relate to the underlying architecture.

Additionally, a **medium severity** bug was fixed today: `#3132` (Mission creation `cooldown_secs` type error) was resolved by PR `#3197`, which fixes the LLM parameter coercion pipeline.

**6. Feature Requests & Roadmap Signals**

No new user feature requests were filed today. All feature development is driven by the internal "Reborn" architecture roadmap. Based on the activity gradient, the next version is likely to include:

- **TurnCoordinator implementation** – The most active tracker (#3013) has multiple sub-issues being defined and implemented.
- **ProductAdapter framework** – With the first Telegram migration landing today (#3316), channel migration to the new architecture is clearly the next deliverable.
- **Durable event/audit store** – Issue #3162 closed recently, indicating production-ready event persistence is being readied.

**7. User Feedback Summary**

Real user pain points surfaced today are concentrated on Telegram channel reliability:

- A user reported that Gmail auth failures from Telegram create a "hard lock" state requiring app restart, indicating fragile session recovery logic.
- Another user reported local Telegram setup failure without clear error messaging, suggesting documentation or bootstrap code needs attention.
- One user (sergeiest) filed multiple bug reports with screenshots, indicating frustration with channel reliability during setup and OAuth flows.

The positive signal: the project's rapid bug-fix cycle was demonstrated by the resolution of `#3132` (mission creation bug), which was filed on May 1 and fixed by May 6.

**8. Backlog Watch**

- **PR #1666** [Open] *feat: wechat channel* – This long-running PR (last updated today) has been open since March 26. It adds a WeChat WASM channel with QR login. Despite being a substantial new feature (XL size) from an experienced contributor, it shows no merge activity. The Reborn architecture migration may be blocking its review, as it likely needs to conform to the new `ProductAdapter` contract being defined now. [Link](https://github.com/nearai/ironclaw/pull/1666)

- **PR #2593** [Open] *chore(deps): bump the actions group across 1 directory with 14 updates* – A Dependabot automated PR from April 17 updating GitHub Actions dependencies. This has been open for 20 days without action, which may cause CI drift or security concerns in the build pipeline. [Link](https://github.com/nearai/ironclaw/pull/2593)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-05-07**.

---

## LobsterAI Project Digest – 2026-05-07

### 1. Today's Overview

The project saw a burst of maintenance activity today, with **16 pull requests** merged in the last 24 hours, though no new issues were opened or closed. This high PR throughput indicates a focused push to clear a backlog of fixes and polish features introduced earlier this week (e.g., the POPO multi-instance support from PR #1883 and the workspace decoupling from PR #1890). The commit log is dominated by **bug fixes** (especially around IM settings, rendering, and workspace migration) and **minor feature enhancements** (log rotation, Qwen vision support). The maintainers are actively addressing regressions from recent large refactors, suggesting a healthy but intensive stabilization phase.

### 2. Releases

**None.** No new releases were created today. All changes are currently in the `main` branch awaiting the next version cut.

### 3. Project Progress

All 16 pull requests were either merged or closed today. Key areas of advancement:

- **IM & Multi-Platform Fixes:**
    - **PR #1901** (btc69m979y-dotcom): Fixed the POPO settings page title bar display and a broken i18n key (`imTestConnectivity` → `imConnectivityTest`), standardizing the behavior across IM platforms.
    - **PR #1896** (fisherdaddy): Fixed an issue where changing the model in an IM task was not taking effect.
    - **PR #1893** (btc69m979y-dotcom): Patched the `openclaw-weixin` plugin to read `dmPolicy` and `allowFrom` from configuration instead of hardcoding, adding a new Advanced Settings UI for WeChat.
    - **PR #1887** (btc69m979y-dotcom): Cleaned up lint warnings introduced by the POPO feature.

- **Workspace & State Management (Core Stability):**
    - **PR #1890** (btc69m979y-dotcom): Decoupled the main agent’s workspace (`MEMORY.md`, `IDENTITY.md`, etc.) from the user-configurable working directory. This is a significant architectural change ensuring agent state files aren't lost when users change the working directory.
    - **PR #1900** (liuzhq1986): Hardened assistant segment persistence in collaborative (Cowork) mode to prevent markdown table degradation under concurrent sessions.
    - **PR #1899** (fisherdaddy): Fixed the *main Agent*'s working directory not taking effect after a Markdown migration.
    - **PR #1894** (btc69m979y-dotcom): Reordered the workspace migration script to copy `memory/` before syncing `MEMORY.md`, preventing empty directory conflicts.

- **Rendering & Model Fixes:**
    - **PR #1895** (fisherdaddy): Fixed intermittent markdown table rendering failures.
    - **PR #1898** (fisherdaddy): Optimized the display logic for task titles.
    - **PR #1897** (fisherdaddy): Fixed an issue where the model stopped replying prematurely.
    - **PR #1886** (fisherdaddy): Fixed a `/models` command display issue caused by ChatGPT OAuth.

- **Platform & Devops:**
    - **PR #1892** (fisherdaddy): Added daily log rotation with 3-day retention for gateway logs.
    - **PR #1891 & #1888** (liuzhq1986): Fixed Windows `EPERM` errors when deleting skill directories and `ClawHub` install failures in packaged environments.
    - **PR #1889** (fisherdaddy): Added an OpenClaw runtime patch for Qwen vision catalog fallback.

### 4. Community Hot Topics

No issues were updated in the past 24 hours, and the PR activity was entirely maintainer-driven (no community discussion/reactions). The most technically significant PRs based on impact are:

- **[PR #1900](https://github.com/netease-youdao/LobsterAI/pull/1900)** – This fix for markdown table degradation in concurrent sessions (Cowork mode) addresses a critical "data corruption" scenario for power users. The underlying need is reliability under load.
- **[PR #1890](https://github.com/netease-youdao/LobsterAI/pull/1890)** – The workspace decoupling is a major architectural improvement. Users complaining about lost agent state files will see this as a direct solution.
- **[PR #1901](https://github.com/netease-youdao/LobsterAI/pull/1901)** – The i18n fix and UI standardization for POPO suggests growing user base for that IM platform.

### 5. Bugs & Stability

No new bugs were *reported* via issues today, but the PRs reveal several regressions and fixes being actively addressed:

- **High Severity:**
    - **Markdown table degradation (PR #1900):** A concurrency bug causing data loss. **Fix exists.**
    - **Workspace migration file loss (PR #1894):** `memory/` directory was being skipped during migration. **Fix exists.**
    - **Model changes not taking effect in IM (PR #1896):** A critical user-facing bug. **Fix exists.**
- **Medium Severity:**
    - **Windows skill deletion failure (PR #1891):** Platform-specific filesystem error. **Fix exists.**
    - **ClawHub install failure in packaged builds (PR #1888):** Prevents plugin installation. **Fix exists.**
    - **Model reply not stopping (PR #1897):** A regression likely causing infinite generation loops. **Fix exists.**
- **Low Severity:**
    - **UI title/header display issues (PR #1901, #1898):** Cosmetic and localization fixes.

### 6. Feature Requests & Roadmap Signals

No explicit feature requests were logged, but the PRs signal near-term roadmap intentions:

- **Decoupled Workspace (PR #1890):** This is a foundational change. It signals the team is preparing for more flexible agent state management, potentially allowing multiple workspaces or easier state exports/imports in a future version.
- **WeChat DM Policy Config (PR #1893):** Adding an Advanced Settings UI for WeChat DM policies indicates the project is refining its IM gateway for enterprise/controlled-deployment use cases.
- **Log Rotation (PR #1892):** A DevOps improvement suggesting the project is preparing for long-running, production-grade deployments.

**Prediction for next version:** The workspace decoupling (PR #1890) is the most significant change and will likely be the headline feature of the next minor release, combined with the IM platform fixes.

### 7. User Feedback Summary

No new user feedback was captured in the issue tracker today. However, the PRs serve as an implicit feedback proxy:

- **Positive Signals:** The rapid merge of PR #1890 (workspace decoupling) suggests strong internal/user demand for preventing state loss.
- **Pain Points Being Addressed:** The high volume of IM-specific fixes (POPO, WeChat, model changes) indicates that the recent multi-instance IM rollout (PR #1883) had several rough edges.
- **Silent Pain Points:** The fixes for concurrency (PR #1900) and rendering (PR #1895) suggest users were experiencing intermittent failures that were hard to reproduce. These are now resolved.

### 8. Backlog Watch

**No backlog items require attention.** The issue tracker is currently empty (0 open issues), which is unusual and may be due to an archival policy or a recent mass closure. All recently opened PRs have been handled promptly (within 1 day of creation). The maintainers are highly responsive.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-07

## Today's Overview

Moltis shows strong maintenance velocity today, with 11 PRs updated and 9 merged/closed within the last 24 hours, alongside 4 resolved issues from a total of 6 updated. The project remains in a steady cadence with no new releases, indicating focus on bug fixes and infrastructure improvements rather than feature milestones. Activity is concentrated on sandbox reliability, authentication fixes, and documentation updates, with two open PRs and two open issues signaling active development still in progress. Overall, the project is in a healthy state with responsive maintainers and a clear trajectory toward improved Docker, proxy, and multi-agent interoperability support.

## Releases

No new releases were published. The latest available version remains unchanged.

## Project Progress

Nine PRs were merged or closed today, reflecting significant progress across multiple fronts:

- **Sandbox reliability** (PR [#971](https://github.com/moltis-org/moltis/pull/971)): Serialized container startup to fix race conditions when parallel tool calls initialize the same session sandbox concurrently — resolving Issue [#964](https://github.com/moltis-org/moltis/issues/964).
- **Remote & multi-backend sandbox** (PR [#942](https://github.com/moltis-org/moltis/pull/942)): Still open, this large feature adds support for cloud deployments (DigitalOcean, Fly.io, Render) where Docker-in-Docker is unavailable, leveraging Vercel, Daytona, and Firecracker backends.
- **Authentication fix** (PR [#970](https://github.com/moltis-org/moltis/pull/970)): Login failures behind non-TLS proxies are resolved by respecting `X-Forwarded-Proto` for the cookie Secure attribute, fixing Issue [#968](https://github.com/moltis-org/moltis/issues/968).
- **DeepSeek reasoning content** (PR [#961](https://github.com/moltis-org/moltis/pull/961)): Preserves and replays `reasoning_content` for DeepSeek/OpenAI-compatible follow-up requests, fixing Issue [#959](https://github.com/moltis-org/moltis/issues/959).
- **Vault auto-unseal** (PR [#974](https://github.com/moltis-org/moltis/pull/974)): Adds unattended vault auto-unseal from an environment variable or file at startup, improving headless/automated deployments.
- **Matrix OIDC debugging** (PR [#957](https://github.com/moltis-org/moltis/pull/957)): Adds debug logging for OIDC registration flow and deduplicates redirect normalization.
- **Dependency updates**: OpenSSL bumped to 0.10.79 (PR [#975](https://github.com/moltis-org/moltis/pull/975)) and gix to 0.83.0 (PR [#967](https://github.com/moltis-org/moltis/pull/967)).
- **Documentation**: TTS provider docs updated for Piper and Coqui (PR [#962](https://github.com/moltis-org/moltis/pull/962)), fixing Issue [#958](https://github.com/moltis-org/moltis/issues/958).
- **Copilot enterprise tokens** (PR [#358](https://github.com/moltis-org/moltis/pull/358)): Long-lived PR finally merged, fixing HTTP 421 errors for enterprise accounts by routing through the proxy endpoint.

## Community Hot Topics

The most engaged items this cycle are:

- **Issue [#959](https://github.com/moltis-org/moltis/issues/959)** (1 comment, 1 👍): DeepSeek thinking mode bug — triggered quick maintainer response and was fixed in PR [#961](https://github.com/moltis-org/moltis/pull/961) within 24 hours. Demonstrates strong responsiveness to AI provider compatibility issues.
- **Issue [#973](https://github.com/moltis-org/moltis/issues/973)** (new, 0 comments): Proposal for onboarding + identity protocols for interoperable personal agent servers, authored by the same contributor who opened PR [#976](https://github.com/moltis-org/moltis/pull/976) with a documentation integration guide. This signals growing community interest in multi-agent federated trust.
- **PR [#942](https://github.com/moltis-org/moltis/pull/942)** (open, 6 days old): The remote sandbox feature continues to attract attention as a critical enabler for cloud deployments. No comments recorded, but its size and scope suggest it will be a major upcoming release feature.

The underlying need across these topics is clear: users want Moltis to work reliably in more environments (Docker, cloud, behind proxies) and to support advanced AI provider features (reasoning content), while the community begins exploring what comes next — inter-agent communication protocols.

## Bugs & Stability

**High severity:**
- **Login failure behind proxies** (Issue [#968](https://github.com/moltis-org/moltis/issues/968)): Resolved immediately by PR [#970](https://github.com/moltis-org/moltis/pull/970) — cookie `Secure` attribute now respects `X-Forwarded-Proto`. Fix was merged same day.

**Medium severity:**
- **Docker sandbox fails in LXC containers** (Issue [#977](https://github.com/moltis-org/moltis/issues/977), open): Reported today — browser sandbox fails when Moltis runs in Docker (LXC on Proxmox). No comments or fix PR yet, but likely related to sandbox namespace/privilege requirements. Should be watched closely given the sandbox focus.
- **Parallel tool execution sandbox collisions** (Issue [#964](https://github.com/moltis-org/moltis/issues/964)): Fixed by PR [#971](https://github.com/moltis-org/moltis/pull/971) — container startup is now serialized for the same session.

**Low severity:**
- **DeepSeek reasoning content bug** (Issue [#959](https://github.com/moltis-org/moltis/issues/959)): Fixed by PR [#961](https://github.com/moltis-org/moltis/pull/961).

Overall stability is improving, with three of four bug fixes landed within hours of reporting. The Docker/LXC sandbox issue (Issue [#977](https://github.com/moltis-org/moltis/issues/977)) is the only unresolved bug and warrants attention.

## Feature Requests & Roadmap Signals

- **Agent identity & onboarding protocols** (Issue [#973](https://github.com/moltis-org/moltis/issues/973), PR [#976](https://github.com/moltis-org/moltis/pull/976)): A formal proposal for standardizing how Moltis agents discover, verify, and exchange capabilities with each other. This is likely a strategic direction for the next major version, enabling decentralized agent networks without central authorities.
- **Remote sandbox backends** (PR [#942](https://github.com/moltis-org/moltis/pull/942)): This open PR adds support for Vercel, Daytona, and Firecracker backends. Given its scope and the fact it's been open for 7 days, it is a strong candidate for the next release and will unblock cloud deployments significantly.
- **Vault auto-unseal** (PR [#974](https://github.com/moltis-org/moltis/pull/974)): Already merged, this will improve headless/automated deployments — a quality-of-life feature for power users running Moltis in production-like environments.

Predictions for next release: remote sandbox support, agent identity documentation, and continued OIDC/Matrix improvements.

## User Feedback Summary

- **Positive signals**: Users are actively deploying Moltis in varied environments (Docker, LXC, Proxmox) and complex architectures (behind proxies, with enterprise Copilot tokens). The rapid closure of bugs (3 bugs fixed within hours of reporting) indicates maintainers are responsive to user pain points.
- **Pain points**: 
  - Docker sandbox compatibility remains fragile (Issue [#977](https://github.com/moltis-org/moltis/issues/977)) — container users are hitting sandbox execution limits.
  - Proxy deployments cause login failures (Issue [#968](https://github.com/moltis-org/moltis/issues/968)) — now fixed, but this reflects a common deployment pattern that wasn't well-supported.
  - AI provider compatibility (DeepSeek thinking mode, Issue [#959](https://github.com/moltis-org/moltis/issues/959)) is a recurring concern as users adopt newer models.
- **Use case insight**: The identity protocol proposal (Issue [#973](https://github.com/moltis-org/moltis/issues/973)) suggests advanced users want Moltis to become part of a broader personal agent ecosystem, moving beyond single-server deployments toward federated agent networks.

## Backlog Watch

- **Issue [#977](https://github.com/moltis-org/moltis/issues/977)** (Docker sandbox in LXC, opened today): No response yet. This is the highest-priority open item given its impact on Docker users. A prompt maintainer response is advisable.
- **PR [#942](https://github.com/moltis-org/moltis/pull/942)** (remote sandbox, open 7 days): No maintainer comments recorded. Given its size (adds multiple backends), this may need more review cycles, but it would benefit from explicit status communication to the community.
- **PR [#976](https://github.com/moltis-org/moltis/pull/976)** (agent identity docs, opened today): A documentation PR accompanying a feature proposal. It received no comments yet — maintainers should review this quickly to either accept or provide direction, as it signals a potential major feature direction.

No long-stagnant issues or PRs were identified; all open items are recent (within 7 days), and the project maintains good turnaround on bug reports.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is a project digest for CoPaw (repository: `agentscope-ai/CoPaw`) based on data from 2026-05-07.

---

## CoPaw Project Digest — 2026-05-07

### 1. Today's Overview
Activity remains very high, with 47 updated issues and 32 updated PRs in the last 24 hours, reflecting a fast-moving open-source project. A new patch release (`v1.1.5.post2`) was shipped, and automated version bumping to `v1.1.6b1` suggests the next minor feature cycle is beginning. Community engagement is strong, particularly around long-context handling, channel reliability, and skill management. While many critical bugs are being closed, new stability concerns (event-loop races, file link expiration, slow UI performance) are being surfaced and addressed by maintainers.

### 2. Releases
**New Release:** `v1.1.5.post2`
- **Key Changes:**
  - Documentation updated to v1.1.5.
  - Asynchronous session title generation via LLM (`feat(chat)`).
  - Fix for message processing return behavior (details pending).
- **Breaking Changes / Migration Notes:** None indicated.

**Next Release Preview:** A PR ([#4082](https://github.com/agentscope-ai/CoPaw/pull/4082)) has been merged that bumps the version to `v1.1.6b1`, signaling the start of a new beta cycle.

### 3. Project Progress
The following PRs were merged or closed today, indicating concrete progress:
- **Version & CI Automation:** [#4082](https://github.com/agentscope-ai/CoPaw/pull/4082) (chore: bump version to 1.1.6b1), [#4071](https://github.com/agentscope-ai/CoPaw/pull/4071) (chore: bump version to 1.1.5p2), [#4081](https://github.com/agentscope-ai/CoPaw/pull/4081) (test(integration): add app startup and settings smoke tests).
- **Bug Fixes:** [#3553](https://github.com/agentscope-ai/CoPaw/pull/3553) (fix(console): avoid SSE crash on malformed surrogate text). [#991](https://github.com/agentscope-ai/CoPaw/pull/991) (fix(channels): preserve dingtalk download filenames).
- **New Features & Skills:** [#4053](https://github.com/agentscope-ai/CoPaw/pull/4053) (feat(skill): Add skill install/uninstall cli), [#4005](https://github.com/agentscope-ai/CoPaw/pull/4005) (docs(faq): WSL2 network timeout doc).
- **UI/UX Polish:** [#4085](https://github.com/agentscope-ai/CoPaw/pull/4085) (chore(console): Optimize language switching logic and icon).

### 4. Community Hot Topics
High-comment issues reveal core pain points and desired directions:

- **Long Context / Conversation Breakage ([#4059](https://github.com/agentscope-ai/CoPaw/issues/4059), 7 comments):** A user reports that long task-related conversations fail to produce complete replies, even after using `/compact`. This is a high-impact UX issue for users running complex workflows. *Needs both context window management and potential UI improvements.*

- **Skill Management & Synchronization ([#4079](https://github.com/agentscope-ai/CoPaw/issues/4079), 3 comments):** Users syncing skills via file system (e.g., dev to prod) find the UI does not refresh. This suggests a missing "watch" or "re-scan" mechanism in the frontend.

- **Performance Degradation ([#3830](https://github.com/agentscope-ai/CoPaw/issues/3830), 4 comments; [#4023](https://github.com/agentscope-ai/CoPaw/issues/4023), 6 comments):** The Console GUI and input box are reported as "increasingly unresponsive" and "stuck," especially with long chat histories. This is a recurring theme affecting user satisfaction.

- **Self-Evolution Skill ([#2473](https://github.com/agentscope-ai/CoPaw/issues/2473), 5 comments):** A feature request for a self-improving AI agent engine. This closed issue has high interest and may form a basis for future roadmap items.

### 5. Bugs & Stability
- **[Critical] DingTalk Event Loop Race Condition ([#4042](https://github.com/agentscope-ai/CoPaw/issues/4042)):** DingTalk channel fails to deliver final notifications due to a race condition. A related fix for graceful task draining during agent reloads is being reviewed ([#4064](https://github.com/agentscope-ai/CoPaw/pull/4064)).
- **[Major] File/Image Link Expiration ([#4047](https://github.com/agentscope-ai/CoPaw/issues/4047)):** Attachments in chat history expire after 24 hours due to token-based authentication, breaking access to files and images. No fix PR is linked yet.
- **[Major] Heartbeat Network Recovery ([#4017](https://github.com/agentscope-ai/CoPaw/issues/4017)):** Enabling `HEARTBEAT.md` prevents automatic reconnection after network interruptions. This was a serious regression for users requiring reliable uptime.
- **[Moderate] Skill Disabled, Still Used ([#3142](https://github.com/agentscope-ai/CoPaw/issues/3142)):** Logic flaw where an agent can read and use a disabled skill.
- **[Moderate] SSE UTF-16 Surrogate Crash ([#3552](https://github.com/agentscope-ai/CoPaw/issues/3552)):** Fixed in PR [#3553](https://github.com/agentscope-ai/CoPaw/pull/3553) (merged today).
- **[Minor] Skill Pool Error Loop ([#3702](https://github.com/agentscope-ai/CoPaw/issues/3702)):** Closed today, likely fixed by ongoing skill system refactoring.

### 6. Feature Requests & Roadmap Signals
Features currently being discussed or submitted with high likelihood of inclusion in the next release:

- **CLI Skill Test Command ([#3999](https://github.com/agentscope-ai/CoPaw/pull/3999), open PR):** A `qwenpaw skills test` command to validate skills locally. This addresses a clear workflow bottleneck.
- **One-Shot (DateTrigger) Cron Jobs ([#4029](https://github.com/agentscope-ai/CoPaw/issues/4029)):** A request for non-recurring scheduled tasks using `--at <iso-datetime>`.
- **Custom Workspace Storage Paths ([#4067](https://github.com/agentscope-ai/CoPaw/issues/4067)):** Users want to configure where workspaces and skills are stored (especially relevant for Windows users).
- **System Tray Autostart ([#4041](https://github.com/agentscope-ai/CoPaw/pull/4041), open PR):** A new system tray entry for background operation, currently Windows-only.
- **Token Usage Trend Dashboard ([#4080](https://github.com/agentscope-ai/CoPaw/pull/4080), open PR):** A PR adding a token usage trend chart to the UI, linked to request [#3907].

### 7. User Feedback Summary
- **Pain Points:**
    - Long conversation management is broken.
    - Windows Desktop app is slow and unresponsive for large sessions.
    - Skills and skill folders don't sync properly between environments.
    - Sensitive data (attachments) have a short, unclear expiration.
    - Adding a new model provider requires too many clicks/steps.
- **Use Cases:**
    - Enterprise deployment (DingTalk, Feishu channel reliability).
    - Development/testing pipelines (skill testing, sync between envs).
    - Background autonomous agents needing stable network recovery.
- **Satisfaction:** High engagement and fast closing of many bugs suggests maintainers are responsive. However, persistent performance and reliability issues in long-running scenarios are causing dissatisfaction.

### 8. Backlog Watch
- **[Issue #3281](https://github.com/agentscope-ai/CoPaw/issues/3281) (Bug: CoPaw Desktop UI - Agent response disappears):** 25 days old, 2 comments, no fix PR. This is a high-visibility issue for the desktop client.
- **[Issue #3475](https://github.com/agentscope-ai/CoPaw/issues/3475) (Question: MCP dynamic auth tokens):** 21 days old, 2 comments. A significant request for enterprise integration. No official response.
- **[Issue #3891](https://github.com/agentscope-ai/CoPaw/issues/3891) (Suggestion: DeepSeek prefix cache optimization):** 10 days old, 3 comments. This has a direct cost impact for users paying for DeepSeek API calls.
- **[PR #3605](https://github.com/agentscope-ai/CoPaw/pull/3605) (refactor(wechat): centralize data migrations):** 17 days old, under review. This is a necessary clean-up of legacy data but is taking time to land.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-07

## Today's Overview
ZeroClaw is in an intense **pre-release sprint** toward **v0.7.5**, with 50 issues and 50 PRs updated in the last 24 hours — signaling peak engineering activity. The project shows strong momentum across **three converging fronts**: (1) a sweeping **provider/plugin architecture overhaul** targeting v0.8.0, (2) an **explosion of new channel integrations** (Mastodon, Twilio, Rocket.Chat, Zulip, Twitch, Lemmy, and four SMS gateways), and (3) critical **stability fixes** for WhatsApp, Matrix, and PostgreSQL backends. With 42 open PRs and 8 merged/closed, the pipeline is heavily loaded but productive. No new releases today, but the v0.7.5 milestone (#5878) is actively being tracked.

## Releases
**No new releases today.** The last release was v0.7.4; v0.7.5 milestone tracking (#5878) is in progress with the version bump PR (#6492) awaiting merge.

## Project Progress
**Closed/Merged PRs (8 today):**
- **#6369** — `fix(web): agent tool button height` — Minor CSS fix for tool button hover behavior, merged
- **#6486** — `fix(docs): generate lang switcher before mdbook sync` — Documentation build fix, merged
- **#6492** — `chore: bump version to v0.7.5` — Version bump across workspace, CI, and marketplace templates (pending)

**Advanced features in open PRs (key highlights):**
- **#6417** (size:XL) — `feat(providers): separate llama.cpp into dedicated provider kind` — Structural provider refactor for v0.8.0
- **#6403** (size:XL, risk:high) — `feat(config,providers): typed-family split for model + TTS providers` — Targeting integration/v0.8.0, not master
- **#6392** (size:XL) — `feat(gateway,web): nodes dashboard + device identification` — Fleet management dashboard
- **#6370** (size:L) — `feat(gateway,web): dashboard self-update flow` — "Update ZeroClaw" button on web UI
- **#6495** — `feat(channel:vonage): add Vonage SMS channel` — Fifth SMS channel in the gateway series
- **#6460–#6463** — Four new model providers: Featherless AI, Arcee AI, Lambda AI, Inception Labs

## Community Hot Topics
**Most Active Issues (by comments/reactions):**

1. **#4710** (10 comments, 2 👍) — **[Feature]: A better LOGO of Zeroclaw** — User-requested visual rebranding with a proposed design image. *Underlying need: community identity and project visibility.*

2. **#5890** (8 comments) — **RFC: Multi-agent UX flow — design** — A formal RFC that has completed its 7-day discussion period and core team vote (accepted). *Underlying need: foundational architecture for multi-agent orchestration.*

3. **#5878** (8 comments) — **Release v0.7.5 milestone tracking** — The authoritative scope definition for the upcoming release. *Underlying need: coordinated release management and scope control.*

4. **#6246** (4 comments) — **[Bug]: WhatsApp Web channel: pair succeeds but messages don't flow after April 2026 protocol bump** — Blocked workflow (S1 severity) caused by server-side WhatsApp protocol update. *Underlying need: crisis-level channel reliability.*

5. **#6472** (2 comments, new) — **[Bug]: gateway can not use postgres** — Panic caused by nested Tokio runtime. *Underlying need: database backend stability.*

**Most Active PRs:** The provider architecture PRs (#6417, #6403) and the SMS channel PRs (#6495, #6460–#6463) are driving the most discussion and review activity.

## Bugs & Stability
**Critical (S1 - workflow blocked):**
- **#6413** (CLOSED) — WhatsApp Web channel processes own-account messages as prompts (`is_from_me` leak) — *Fixed and closed*
- **#6434** — Shell tool calls refused at `[autonomy] level = "full"` — `tool_dispatch` never reaches runtime. No fix PR yet
- **#6433** — Heartbeat not working with Matrix channel — Daemon only accepts 4 channels for heartbeat

**High severity (S2 - degraded behavior):**
- **#6472** — Gateway panic with PostgreSQL (`Cannot start a runtime from within a runtime`) — Root cause: nested Tokio runtime. No fix PR yet
- **#6431** — SQLite memory schema init can fail during concurrent startup (duplicate column errors)
- **#6474** — LLM invoked twice repeatedly for single user request (OpenAI-compatible providers)
- **#6246** — WhatsApp Web protocol bump (April 2026) broke message flow after successful pair

**Fixes in progress:**
- **#6306** (open PR) — `fix(matrix): avoid duplicate inbound replies` — Prevents event handler accumulation on supervised restarts
- **#6230** (open PR) — `fix(cron): allow whatsapp as cron delivery channel`

## Feature Requests & Roadmap Signals
**Major architectural signals:**
- **#6489** — "Everything is a plugin" — Phased plan to unify integrations (channels, providers, tools) and plugins (WASM modules) into a single plugin catalog. This is a **long-term roadmap signal** for v0.8.0+.
- **#5890** — Multi-agent UX flow RFC (accepted) — Foundation for multi-agent orchestration and UX patterns.

**New channel integrations (in-progress — likely for v0.7.5 or v0.8.0):**
- Mastodon (#6423), Rocket.Chat (#6435), Zulip (#6437), Twitch (#6443), Lemmy (#6441)
- SMS gateways: Twilio (#6427), Plivo (#6453), Sinch (#6452), Telnyx (#6451), Vonage (#6494)

**New model providers (in-progress — likely for v0.7.5):**
- Morph (Fast Apply) (#6439), Inception Labs (#6463), Lambda AI (#6462), Arcee AI (#6461), Featherless AI (#6460)

**New infrastructure features:**
- Dashboard "Update ZeroClaw" button (#6365) — PR #6370 ready
- Nodes dashboard + device identification (#6346, #2991 follow-up) — PR #6392 ready
- Human-readable integration category labels (#6488) — PR #6490 ready

**Prediction:** v0.7.5 will include the model provider additions, SMS gateway channels, and dashboard self-update. The provider architecture overhaul (#6417, #6403) and multi-agent UX (#5890) are heavier items targeting **v0.8.0**.

## User Feedback Summary
**Pain points:**
- **WhatsApp unreliability** (#6246, #6413): Users report blocked workflows after protocol changes; fix for one issue (#6413) closed already
- **Configuration complexity** (#5863): Users want documentation on skill format and how to add skills
- **Onboarding friction** (#6493): Gateway startup bails without a configured model, making the web UI unreachable — PR #6493 fixes this by allowing boot without model
- **Limited channel support** (multiple issues): Users requesting native support for Fediverse (Mastodon, Lemmy), Twitch, Zulip, and multiple SMS providers — all being actively addressed

**Satisfaction signals:**
- Active community contribution with 8 PRs merged today, including first-time contributor fixes (#6369 from ilteoood)
- The "better LOGO" issue (#4710) shows community investment in project identity
- Multiple users requesting and contributing channel integrations suggests strong real-world deployment interest

## Backlog Watch
**Issues needing maintainer attention:**
- **#5863** (updated 2026-05-06) — "Document about skills wanted" — P2, good first issue, but no assignee or PR. Skills documentation is a common onboarding blocker.
- **#6433** (updated 2026-05-06) — Heartbeat not working with Matrix channel — S1 severity but P2 priority; no fix PR yet. The daemon's channel acceptance list is hardcoded.
- **#6434** (updated 2026-05-06) — Shell tool calls refused at `full` autonomy — S1 severity, P1 priority, but no fix PR yet. This is a critical autonomy feature bug.

**Long-open high-impact issues:**
- **#4710** (created 2026-03-25) — LOGO redesign — Open for over 6 weeks with 10 comments but no resolution. While low-priority, it signals community desire for project branding.

**PRs needing review:**
- **#6117** (created 2026-04-26) — `feat(codex): support native Responses tool calls` — Open 11 days, risk:high, needs-author-action label. This is a significant feature for OpenAI compatibility.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*