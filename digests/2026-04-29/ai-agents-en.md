# OpenClaw Ecosystem Digest 2026-04-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-29 04:33 UTC

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

Here is the OpenClaw project digest for April 29, 2026.

---

## OpenClaw Project Digest — 2026-04-29

### 1. Today's Overview

The project is experiencing a period of **very high activity**, with 500 issues and 500 pull requests updated in the last 24 hours. This activity, however, is largely reactive, driven by a significant spike in bug reports and regressions following recent releases (v2026.4.24 through v2026.4.26). A total of 144 issues were resolved, and 22 PRs were merged/closed, but the sheer volume of outstanding work (356 open active issues, 478 open PRs) suggests the development pace is straining to keep up with reported regressions. The maintainer team ("clownfish" bot) has been heavily active, creating and repairing a large batch of PRs today to address critical channel-specific bugs and security issues, which is a positive signal for recovery.

### 2. Releases

**No new releases today.** The latest tag is likely from the v2026.4.26 release cycle, which is the subject of several reported regressions.

### 3. Project Progress

The 22 merged/closed PRs today indicate significant remediation work, primarily by the automated "clownfish" maintainer bot. Key fixes that advanced include:

- **Channel Stability:**
    - **Feishu:** FIX for WebSocket retry exhaustion (PR #73940) and FIX for download fallback on 502 errors (PR #73937).
    - **Telegram:** FIX for command menu sync on rate limits (PR #73947) and a FIX to suppress acknowledged mutating tool warning leaks (PR #73750).
    - **Discord:** FIX to suppress reconnect-exhausted errors during stale-socket restarts (PR #73949).
    - **WhatsApp:** FIX for detecting group @mentions when self is in `allowFrom` (PR #73936).
- **Infrastructure & Security:**
    - **Security:** FIX to add session transcript redaction guards to prevent credential leaks in `.jsonl` files (PR #73563).
    - **MCP:** FIX to dispose of bundled runtimes after one-shot runs (PR #73919).
    - **Cron:** FIX to preserve model overrides for text payloads (PR #73946).
    - **Memory:** FIX to thread remote batch HTTP timeout budget (PR #73938).
    - **Onboarding:** FIX to skip the Homebrew prompt on unsupported platforms like FreeBSD (PR #73953).

### 4. Community Hot Topics

The community is deeply engaged, but the conversations are dominated by frustration over recent regressions.

- **#49971 - RFC: Native Agent Identity & Trust Verification (128 comments, Closed):** This massive RFC, while closed, represents a significant community-driven push for a trust layer for agent-to-agent and agent-to-service communication. The underlying need is a standardized, secure way for agents to prove their identity and verify the integrity of external services before executing tool calls. This is a long-term architectural signal.
- **#68735 - LLM Request Schema Rejected (28 comments, Closed, 6 👍):** A critical regression after upgrading to 2026.4.15 where the provider (e.g., GitHub Copilot) rejects the request schema or tool payload. This points to a fragile interaction between OpenClaw's tool schema generation and specific provider API versions.
- **#65722 & #66082 - Memory-Wiki Bridge Returning 0 Artifacts (10 & 9 comments, Closed, 5 👍 each):** These duplicate [dedupe:child] issues highlight a clear user pain point: the `memory-wiki` bridge mode fails to export artifacts because the memory plugin runtime is not properly initialized during CLI operations (`openclaw wiki bridge import`). Users are losing expected functionality.
- **#73501 - Performance Regression v4.22 to v4.26 (9 comments, Open, BLOCKER):** This is the **single most critical thread** today. Users report the bot is "significantly slower" after upgrading. This is a high-severity, widespread regression affecting all agents.

### 5. Bugs & Stability

The stability bar for the v2026.4.x release line is low, with numerous high-severity regressions reported. Today's most impactful bugs, ranked by severity, are:

| Severity | Issue | Summary | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| **BLOCKER** | #73501 | Significant performance regression from v4.22 to v4.26. | No |
| **CRASH** | #72366 | Gateway crash-loop on startup due to bonjour/mDNS "CIAO PROBING CANCELED". | No |
| **CRASH** | #71986 | v2026.4.24 update causes crashes, wrong folder installations, and plugin failures. | No |
| **HIGH** | #72434 | Gateway requests fail as `claude-cli` harness is "not registered" (regression in .24). | No |
| **HIGH** | #73581 | Agent processing lane stalls for minutes; memory-core dreaming cron race condition. | No |
| **HIGH** | #68735 | LLM provider rejects schema/tool payloads (regression in .15). | No |

### 6. Feature Requests & Roadmap Signals

While bug fixes dominate the activity, several feature requests signal the community's desired direction for the next release (likely v2026.5.x):

- **High Likelihood for Next Release:**
    - **Ollama Model-Specific Parameters (#48010):** Users want to pass parameters like `thinking_mode` to local models. The high activity and clear use case make this a strong candidate for inclusion.
    - **Gateway Restart Confirmation (#63804):** The "Dreaming" toggle restarts the gateway without a confirmation dialog, causing disruptive downtime. A straightforward UX fix.
- **Medium-to-Long Term Signals:**
    - **Per-Agent TTS/STT Overrides (#66252):** A request for multi-language voice support in multi-agent setups. Complex but valuable for international users.
    - **Auto-Silent Telegram Messages (#45679):** A persistent request to reduce notification spam from verbose/streaming model outputs.
    - **Pre-Reset Memory Flush (#45608):** The request for `/new` and daily resets to benefit from the same memory flush logic as compaction, preventing context loss.

### 7. User Feedback Summary

User sentiment is **tense and frustrated**. The dominant narrative is that recent updates have introduced critical regressions that break core functionality.

- **"2026.4.24 is a huge mess!"** (Issue #71986) encapsulates the mood. Users report that updates go to wrong folders, crash gateways, and break channel integrations like WhatsApp and Telegram.
- **"The bot responds significantly slower"** (Issue #73501) is a major pain point, indicating a performance regression that directly impacts the user experience for all tasks.
- **Silent Failures:** The "memory-wiki bridge returns 0 artifacts" bugs (#65722, #66082) highlight frustration with silent failures where the system reports success but delivers nothing.
- **Setup & Onboarding Pain:** A user reported that the `openclaw onboard` command incorrectly prompts for Homebrew on FreeBSD (PR #73953). Another hit a frustrating `OPENCLAW_CONFIG_DIR cannot contain whitespace` regression (#44599).

### 8. Backlog Watch

Several high-value issues from mid-March remain open, indicating a growing list of items requiring maintainer attention.

- **#45438 - `structuredClone` native memory leak (~1GB/min) (Open, 5 comments, 2 👍):** **CRITICAL.** This describes a crippling memory leak in the session store cache. Despite high community engagement and a clear root cause, this issue has been open since March 13th without a merged fix. This is a top candidate for a "beta release blocker."
- **#45550 - Migrate Anthropic 1M context from Beta to GA (Open, 7 comments, 1 👍):** A simple but important tracking issue to align OpenClaw with the official Anthropic API. The lack of progress suggests it may have been deprioritized.
- **#45326 - TUI Interrupt Failure (Open, 9 comments):** A frustrating UX bug where typed input is swallowed while the model is generating. Has been open for over 6 weeks.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**2026-04-29 | AI Agent Open-Source Landscape**

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing explosive growth, with nine tracked projects collectively processing over 1,000 issues and 700 pull requests in a single day. The landscape is bifurcated between mature reference implementations (OpenClaw, Hermes Agent, IronClaw) and rapid-iteration challengers (NanoBot, NanoClaw, Moltis) that are aggressively expanding channel support and feature sets. A clear pattern emerges: projects are converging on multi-agent routing, protocol interoperability (ACP, MCP), and enterprise messaging integration, while diverging in architectural philosophy—monolithic core vs. microkernel vs. sandbox-based isolation. Community frustration is concentrated around release stability regressions, session continuity failures, and configuration fragility, suggesting the ecosystem is prioritizing feature velocity over production hardening.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Latest Release | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 22 | v2026.4.24–.26 series | 🟡 6/10 |
| **NanoBot** | 18 | 38 | 17 | v0.1.5.post2 | 🟢 7/10 |
| **Hermes Agent** | 50 | 50 | 2 | v0.11.0 | 🟢 7/10 |
| **PicoClaw** | 15 | 16 | 5 | v0.2.7-nightly | 🟢 7/10 |
| **NanoClaw** | 0† | 23 | 12 | v2 (untagged) | 🟢 8/10 |
| **NullClaw** | 1 | 3 | 1 | None | 🟢 8/10 |
| **IronClaw** | 26 | 7 | 43 | None (pending) | 🟡 6/10 |
| **LobsterAI** | 42 (PRs) | 42 | 18 | None | 🟡 6/10 |
| **Moltis** | 6 | 18 | 15 | v20260428.03 | 🟢 9/10 |
| **CoPaw (QwenPaw)** | 45 | 32 | 21 | v1.1.5-beta.1 | 🟢 7/10 |
| **ZeptoClaw** | 0 | 15 | 0 | None | 🟡 5/10 |
| **ZeroClaw** | 44‡ | 48 | 2 | v0.7.0 | 🟢 7/10 |

*Health Score: 10-point scale based on merge velocity, issue closure rate, regression severity, and maintainer responsiveness.*
†NanoClaw reports issues separately; figure unavailable in digest.
‡ZeroClaw includes 5 closed issues.

**Key observations:**
- OpenClaw dominates raw volume but struggles with regression triage (356 open issues, 478 open PRs)
- Moltis and NanoClaw show highest health scores due to strong merge-to-bug ratios
- ZeptoClaw's zero-human-activity day signals maintainer bandwidth constraints
- IronClaw's 43 merged PRs are almost entirely staging promotions, not feature work

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Ecosystem gravity**: Most channels, providers, and integrations; de facto reference standard
- **Bot-driven maintenance**: "clownfish" automated maintainer resolves critical bugs within hours
- **Community scale**: 500 issues/PRs daily dwarfs all competitors (next closest: Hermes at 100 total updates)
- **MCP maturity**: Deepest MCP integration across runtime disposal, dynamic headers, and SSE streaming

### Technical Approach Differences
- **Channel abstraction**: OpenClaw uses a unified gateway pattern; competitors like NanoBot and Hermes Agent use per-channel adapters with varying consistency
- **Onboarding flow**: OpenClaw's `openclaw onboard` command is industry standard, but FreeBSD issues (PR #73953) show platform gaps
- **Memory architecture**: OpenClaw's `memory-wiki` bridge is unique but buggy (0 artifacts export issue); Moltis and NanoClaw use more reliable embedded stores

### Community Size Comparison
- OpenClaw: **~10x** issue/PR volume of next-largest project (Hermes Agent)
- However, Hermes Agent and CoPaw show higher **per-contributor quality** (more substantive discussions, better bug reports)
- Moltis and ZeroClaw demonstrate fastest **issue-to-fix turnaround** (<24 hours for critical bugs)

**Net assessment**: OpenClaw is indispensable for ecosystem compatibility but is bleeding user confidence due to reliability regressions. Its scale is both a moat and a liability.

---

## 4. Shared Technical Focus Areas

### Universal Pain Points (across 5+ projects)

| Requirement | Projects Affected | Specific Need |
|---|---|---|
| **Multi-agent routing** | OpenClaw (#49971), Hermes (#7833), ZeroClaw (#2767), CoPaw (#3936), Moltis (#906) | Trust verification, agent-to-agent identity, workspace isolation |
| **Session continuity** | OpenClaw (#73501), Hermes (#16938), NanoBot (#3494), CoPaw (#3049), PicoClaw (#2310) | Context persistence across restarts, compression without data loss |
| **Enterprise IM parity** | OpenClaw (Feishu/Telegram fixes), NanoBot (QQ/Napcat), Hermes (DingTalk/WeChat), PicoClaw (DingTalk/MQTT), CoPaw (WeChat Work/DingTalk) | File attachment handling, voice messages, command routing |
| **Provider schema resilience** | OpenClaw (#68735), NanoBot (#2590), Hermes (#17212), LobsterAI (#1813), NullClaw (#872) | Coping with upstream API changes, graceful degradation |
| **Configuration documentation** | OpenClaw (#44599), NullClaw (#874), ZeroClaw (#6187), PicoClaw (#2695) | Schema docs, migration guides, platform-specific notes |

### Emerging Convergent Features (3+ projects)

| Feature | Projects Working On |
|---|---|
| **Agent Communication Protocol (ACP)** | CoPaw (v1.1.5-beta), ZeroClaw (PR #6167), OpenClaw (RFC #49971) |
| **Memory consolidation/dream mode** | OpenClaw (#45608), NanoBot (#3410), ZeroClaw (#5849) |
| **Per-provider generation config** | NanoBot (PR #3507), CoPaw (#3929), ZeroClaw (#6178) |
| **Voice/STT/TTS unification** | NanoBot (PR #3513), Hermes (#66252), Moltis (PR #916 voice personas) |
| **Import from other tools** | Moltis (PR #914, #917 — Claude Code, Hermes), OpenClaw (various) |

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Orientation | Unique Strengths | Gaps vs. Peers |
|---|---|---|---|
| **OpenClaw** | Universal gateway + MCP hub | Broadcast channel support, largest connector library | Performance regressions, session reliability |
| **NanoBot** | Lightweight multi-channel agent | Rapid channel additions (QQ/Napcat), per-provider config | Memory bloat, token budget issues |
| **Hermes Agent** | Developer productivity & skills | Native multimodal (#7641), Feishu/DingTalk enterprise | CLI reliability (v0.11.0 regressions), stale P1 bugs |
| **PicoClaw** | Edge/embedded + hardware | Serial tool support, OpenVINO local inference, mobile APK | DingTalk crash loop, i18n gaps |
| **NanoClaw** | Containerized fleet management | Crash-loop protection, backup/restore, Discord gateway limits | macOS permission gaps, root-only deployment issues |
| **NullClaw** | Minimalist Zig-based agent | Extremely small footprint, Mattermost-focused | Tiny community, limited channels |
| **IronClaw** | Enterprise orchestration (Rust) | Reborn architecture, canary live testing, wallet support | Heavy CI flakiness, breaking release cycle |
| **LobsterAI** | Chinese market agent | Deep Chinese IM integration (Feishu/WeChat), Xiaomi models | Security vulnerabilities (MCP injection), stale PRs |
| **Moltis** | Rapid UX iteration | Voice personas, multi-source import, command palette, Landlock FS isolation | Docker Telegram regression, small channel set |
| **CoPaw** | ACP interoperability | Agent-to-agent communication standard, Qwen-native | WeChat Work flakiness, Debian permission issues |
| **ZeptoClaw** | Maintenance-only fork | None distinguishing | No human contributions, all-Dependabot activity |
| **ZeroClaw** | Microkernel architecture | Schema v3 migration, multi-agent routing RFC, WeCom channel | Web dashboard unavailability, feature gating |

### Target User Segments
- **Enterprise Chinese market**: LobsterAI, CoPaw, Hermes Agent (Feishu/DingTalk/WeChat Work priority)
- **Hobbyist/power user**: OpenClaw, NanoBot, PicoClaw (broadest channel flexibility)
- **Developer tooling**: Hermes Agent, NullClaw (CLI-first, minimal UI)
- **Production fleet operators**: ZeroClaw, NanoClaw (multi-agent, backup, crash recovery)
- **Edge/embedded**: PicoClaw (serial, mobile, OpenVINO)
- **Rapid prototyping**: Moltis (fastest issue-to-release cycle)

### Architectural Divergence
- **Monolithic gateway**: OpenClaw, Hermes Agent, NanoBot
- **Containerized cell architecture**: NanoClaw, ZeroClaw (microkernel)
- **Modular plugin system**: PicoClaw, CoPaw
- **Minimalist single-binary**: NullClaw (Zig)
- **Rust-powered rearchitect**: IronClaw (Reborn)

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (feature velocity > stability)
| Project | Maturity Stage | Velocity Signal | Risk |
|---|---|---|---|
| **Moltis** | Early growth | 15 PRs merged/day, sub-24h bug fixes | Docker regression suggests testing gaps |
| **NanoClaw** | Expansion | 12 PRs merged, 10+ contributors | Features outpacing docs/onboarding |
| **ZeroClaw** | Pre-v1.0 growth | 48 PRs updated, microkernel RFC | Schema v3 blocking release; long-open P1 bugs |
| **NanoBot** | Active development | 17 PRs merged, new channel every week | Memory bloat (#3410), provider breakage (#2590) |

### Tier 2: Stabilization (balancing features with reliability)
| Project | Maturity Stage | Stabilization Signal | Risk |
|---|---|---|---|
| **OpenClaw** | Mature but strained | 144 issues resolved, bot-driven bug fixing | 356 open issues; performance regression BLOCKER |
| **Hermes Agent** | Mature | Session continuity still problematic | 18-day unassigned P1 bugs |
| **PicoClaw** | Approaching stable | v0.2.7 nightly, strong feature PR flow | DingTalk crash (#2704) unresolved |
| **CoPaw** | Beta maturity | v1.1.5-beta, ACP protocol live | WeChat Work flakiness, Chinese-dominant support |

### Tier 3: Maintenance / Transition
| Project | Maturity Stage | Signal |
|---|---|---|
| **NullClaw** | Stable maintenance | 1 PR merged (critical fix), long-running cron feature |
| **IronClaw** | Under rearchitecture | 43 staging promotions, Reborn epic in flight |
| **LobsterAI** | Feature-complete | High merge volume but stale security vulnerabilities (#908, #909) |
| **ZeptoClaw** | Dormant | Zero human activity, all Dependabot |

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

**1. Multi-Agent is the #1 demand, not a nice-to-have**
- 8 of 12 projects have open issues requesting multi-agent routing, trust verification, or workspace isolation
- ZeroClaw's #2767 (8 👍) and OpenClaw's #49971 (128 comments) represent the strongest signals
- **Value for developers**: Architect for agent-to-agent communication from day one; ACP (CoPaw) and microkernel (ZeroClaw) are leading design patterns

**2. API provider instability is the top operational risk**
- Every project has at least one open bug caused by upstream LLM API changes (DeepSeek, OpenAI, Anthropic schema shifts)
- NullClaw's Zig 0.16 migration regressions and NanoBot's Minimax provider breakage (#2590) show this extends beyond model providers to platform dependencies
- **Value for developers**: Build provider abstraction layers with schema validation; expect and gracefully handle API breakage

**3. Enterprise IM integration is the primary deployment vector**
- Projects serving Chinese-language markets (LobsterAI, CoPaw, Hermes) have highest engagement on Feishu/DingTalk/WeChat Work channels
- Telegram, Discord, and WhatsApp fixes dominate changelogs across all projects
- **Value for developers**: Channel reliability (file uploads, voice, @mentions) is table stakes; prioritize multi-platform testing

**4. Memory/session persistence remains unsolved**
- No project has a fully reliable session continuity solution across restarts/compression
- OpenClaw (#73501), Hermes (#16938), NanoBot (#3494), and PicoClaw (#2310) all report related bugs
- **Value for developers**: Invest in atomic writes, testable memory store implementations, and session replay capabilities

**5. Security maturity is uneven**
- Only NanoClaw (PR #2001, host file isolation) and ZeroClaw (PR #3767, TOTP gate) show proactive security hardening
- LobsterAI has two stale critical security PRs (#908 MCP injection, #909 skill bypass)
- OpenClaw's session transcript redaction fix (#73563) was reactive
- **Value for developers**: Security scanning, sandbox permissions, and credential redaction should be design requirements, not afterthoughts

**6. Configuration complexity is the onboarding bottleneck**
- ZeroClaw's missing config docs (#6187), OpenClaw's whitespace restriction (#44599), PicoClaw's undocumented `.so` files (#2695) all demonstrate friction
- Moltis's command palette (Cmd+K) and ZeroClaw's web onboarding parity PR (#6179) are solutions gaining traction
- **Value for developers**: Invest in interactive config UIs, migration tooling, and platform-specific documentation

**7. Consolidation pressure is building**
- 12 active projects covering the same problem space is unsustainable; expect mergers or deprecations within 6–12 months
- Moltis's import-from-other-tools feature (#914, #917) is a direct signal of market consolidation
- ZeptoClaw's dormancy and LobsterAI's stagnation suggest early candidates for absorption
- **Value for developers**: Build with migration paths in mind; the ecosystem will consolidate around 3–5 core platforms

---

### Strategic Recommendations

| Audience | Recommendation |
|---|---|
| **Project maintainers** | Prioritize session persistence and API resilience over new features; adopt ACP for interoperability |
| **Enterprise adopters** | Start with OpenClaw for breadth, supplement with Moltis or ZeroClaw for reliability; invest in custom channel integrations |
| **Individual developers** | Choose based on deployment platform: containerized (NanoClaw/ZeroClaw), edge (PicoClaw), or lightweight (NullClaw) |
| **Venture/investors** | Back the 3–5 projects with strongest merge velocity, security posture, and multi-agent roadmap; Moltis and ZeroClaw show highest growth potential |

*Report generated 2026-04-29 from 12 project digests. Data reflects GitHub activity in the preceding 24 hours.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for **NanoBot** based on GitHub activity from **2026-04-29**.

---

## NanoBot Project Digest — 2026-04-29

### 1. Today's Overview

The project is in a **rapid development phase** with an extremely high volume of open and recently updated pull requests. Activity over the last 24 hours is very intense: **18 issues** were updated (13 closed) and **38 PRs** were updated (17 merged/closed). Despite no new releases, the developer community is highly engaged, contributing quality-of-life features, bug fixes, and new channel integrations (QQ/Napcat). However, several unresolved regression bugs persist from recent point releases, suggesting the project is prioritizing new features over immediate stability patches. The maintainers appear to be actively reviewing and merging contributions, indicating strong project health.

### 2. Releases

**None.** No new releases were published in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs Today)

The following features and fixes were merged or closed today:

- **MCP & Gateway Lifecycle** – PR [#3373](https://github.com/HKUDS/nanobot/pull/3373) (open) adds gateway lifecycle notification hooks (`on_start`/`on_stop`), closing issue #3279.
- **Web Search Expansion** – PR [#3505](https://github.com/HKUDS/nanobot/pull/3505) merges the **Olostep** web search provider into the main branch (backported from nightly #3405).
- **CLI Usability** – PR [#2740](https://github.com/HKUDS/nanobot/pull/2740) adds `--config` option to `channels login` and `status` commands (good first issue, merged).
- **Feishu Channel Fix** – PR [#3502](https://github.com/HKUDS/nanobot/pull/3502) fixes premature `done_emoji` and `on-it` emoji removal during multi-turn tool calls.
- **WhatsApp @mentions** – PR [#3514](https://github.com/HKUDS/nanobot/pull/3514) fixes group @mentions by properly stripping device suffixes from JIDs.
- **Matrix Windows Fix** – PR [#3510](https://github.com/HKUDS/nanobot/pull/3510) patches the Matrix channel to sanitize user IDs for Windows file paths (fixes issue #3506).
- **Memory Atomicity** – PR [#3508](https://github.com/HKUDS/nanobot/pull/3508) ensures atomic writes for `history.jsonl` to prevent corruption on crashes.

### 4. Community Hot Topics

The most active discussions (by comments or reactions) reflect tension between feature expansion and reliability:

- **#1099** [Closed] – *"Exposed config for cron request param?"* (2 👍, 3 comments). User reports connection pool exhaustion from cron jobs. Underlying need: **configurable connection pool sizing** for high-frequency cron channels.
- **#2590** [Open] – *"Minimax provider broken after v0.1.4.post6"* (5 comments). Active debugging; user reports need for explicit `apiBase` configuration, suggesting a regression in provider default handling.
- **#3410** [Closed] – *"Large RAM consumption in v0.1.5.post2"* (2 comments). User observes RAM increase from ~200MB to ~600MB, suspects new "dream" feature. Fix seems identified but not yet a formal PR.

### 5. Bugs & Stability

**High Severity Regressions:**
- **[Bug]** #2590 – Minimax provider broken post-upgrade (active, no fix PR yet). *Severity: High* — breaks existing provider configs.
- **[Bug]** #3410 – RAM consumption spikes in v0.1.5.post2. *Severity: High* — affects all deployments on latest release.
- **[Bug]** #3494 – `history.jsonl` loaded into context, causing token budget overflow (287% of input budget). *Severity: Critical* — causes AI to ignore context budget limits, leading to inflated tokens.
- **[Bug]** #3488 – Telegram attachments incorrectly sent as `application.octet-stream`. *Severity: Medium* — breaks file viewing in Telegram.
- **[Bug]** #3328 – DeepSeek "failed to deserialize" error after update to 0.1.5.post1. *Severity: High* — blocks all messages in Telegram channel.

**Existing Fix PRs:**
- #3508 (open) fixes the `history.jsonl` corruption issue (#3494).
- #3515 (open) fixes `reasoning_effort="none"` handling for Gemini/gemma models.
- #3510 (merged) fixes Matrix Windows file path error (#3506).

### 6. Feature Requests & Roadmap Signals

Strong signals for feature expansion:

- **New Channels** – PR [#3509](https://github.com/HKUDS/nanobot/pull/3509) adds **Napcat (QQ)** channel, and PR [#3517](https://github.com/HKUDS/nanobot/pull/3517) fixes WeChat cron job messages. Community clearly wants more channel support.
- **Per-Provider Config** – PR [#3507](https://github.com/HKUDS/nanobot/pull/3507) adds `maxTokens`, `temperature`, `reasoningEffort` per provider (likely for next release).
- **Transcription Unification** – PR [#3513](https://github.com/HKUDS/nanobot/pull/3513) adds local Whisper support and unifies transcription providers.
- **Trust Ratings** – Issue [#3512](https://github.com/HKUDS/nanobot/pull/3512) proposes "SwarmScore" — a portable trust rating for agents (unlikely to ship soon, niche).
- **Xiaomi Models** – Issue [#3518](https://github.com/HKUDS/nanobot/pull/3518) requests Xiaomi AI model support (low effort, plausible next release).
- **Session Cleanup** – PR [#3516](https://github.com/HKUDS/nanobot/pull/3516) adds automatic idle session deletion (clean feature, likely to merge).

**Prediction for v0.1.6:** Expect **Napcat channel**, **per-provider generation config**, **session auto-cleanup**, and **Whisper transcription** to ship.

### 7. User Feedback Summary

- **Dissatisfaction / Pain Points:**
  - Upgrading breaks existing configurations (#2590, #3328, #3410) — users feeling churn.
  - Token budget ignored due to `history.jsonl` loading (#3494) — critical for token control.
  - Group channel user identification missing (#3511) — "impossible to identify users in group channels" (strong language).
- **Satisfaction / Use Cases:**
  - Users actively deploying cron jobs for reminders (#1099) — bot is being used as a daily driver.
  - Positive engagement with "dream" feature despite RAM cost (#3410) — users willing to trade memory for novelty.
  - Multi-channel (Telegram, Discord, Matrix) power users are contributing fixes.

### 8. Backlog Watch

Items needing maintainer response:

- **[Issue #877](https://github.com/HKUDS/nanobot/issues/877)** [Open, stale] – *"Too many questions and incapable"* — Unreleased version feedback from Feb 20, 2026. User reports bot replying to all messages after upgrade, with no clear resolution. **Critical UX signal.**
- **[Issue #1068](https://github.com/HKUDS/nanobot/issues/1068)** [Open, stale] – *"Local hallucinating"* — User reports local models stop working after initial success. Dated Feb 23, 2026. **No maintainer comment.**
- **[PR #2438](https://github.com/HKUDS/nanobot/pull/2438)** [Open] – *"Handle ImageContent in MCP tool responses"* — MCP Image support sits open since Mar 24, 2026. **Awaits review.**
- **[PR #3144](https://github.com/HKUDS/nanobot/pull/3144)** [Open] – *"Add AgentHiFive integration"* — Large cross-cutting change from Apr 14, 2026. **Needs maintainer triage.**

*Note: The "stale" label on #877 and #1068 suggests maintainers have not yet triaged these deeply reported issues.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-29

## 1. Today's Overview
Hermes Agent shows **high sustained activity** with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a substantial open issue count (47 open vs 3 closed), indicating active triaging and community engagement. Two PRs were merged/closed today, and no new releases were published. The project continues to receive significant community contributions spanning performance optimization, security fixes, and new feature integrations. Overall project health appears strong but with mounting technical debt in session continuity, credential routing, and gateway reliability areas.

## 2. Releases
**No new releases today.** The latest available version remains v0.11.0 (2026-04-23) as referenced in the bug report #16803.

## 3. Project Progress
**Merged/Closed PRs today (2):**
- [#17213 [CLOSED]](https://github.com/NousResearch/hermes-agent/pull/17213) — *feat(review): active-update bias, loaded-skill-first, support-file variants* — Merged feature improving skill-review prompts to push reviewers toward active updates rather than defaulting to "Nothing to save."
- [#17257 [CLOSED]](https://github.com/NousResearch/hermes-agent/issues/17257) — Withdrawn by reporter (opened in error, investigating locally).

**Notable open PRs showing progress:**
- [#17190](https://github.com/NousResearch/hermes-agent/pull/17190) — 190ms cold-start optimization for `hermes --tui`
- [#12583](https://github.com/NousResearch/hermes-agent/pull/12583) — Observational memory provider plugin (long-running, 10 days open)
- [#17249](https://github.com/NousResearch/hermes-agent/pull/17249) — Gateway auto-continue logic fix for session interruption
- [#17263](https://github.com/NousResearch/hermes-agent/pull/17263) — Critical security fix for admin endpoints in web_server.py
- [#17258](https://github.com/NousResearch/hermes-agent/pull/17258) — Persistent computer-use VM for desktop automation

## 4. Community Hot Topics
**Most discussed (by comments):**

1. **[#7642](https://github.com/NousResearch/hermes-agent/issues/7642)** — *Feishu Cloud Document Creation* (4 comments, open 18 days) — Request to create/update Feishu cloud documents from Markdown, reflecting enterprise adoption in China.

2. **[#7833](https://github.com/NousResearch/hermes-agent/issues/7833)** — *delegate_task overwrites custom endpoint* (4 comments, 1 👍, open 18 days) — Critical routing bug where subagents inherit parent credential pools incorrectly.

3. **[#16938](https://github.com/NousResearch/hermes-agent/issues/16938)** — *API server loses session continuity after context compression* (4 comments, open 1 day) — P1 bug affecting OpenAI-compatible API users.

4. **[#17212](https://github.com/NousResearch/hermes-agent/issues/17212)** — *DeepSeek 400 error on multi-turn tool calls* (3 comments, opened today) — Fresh bug report with high relevance for DeepSeek users.

5. **[#16803](https://github.com/NousResearch/hermes-agent/issues/16803)** — *CLI enters dummy state, ignores input* (3 comments, 1 👍, closed today) — Critical CLI bug on Ubuntu 22.04 with v0.11.0.

**Most upvoted:**
- [#7641](https://github.com/NousResearch/hermes-agent/issues/7641) — *Native multimodal input instead of vision_analyze tool* (4 👍) — Strong community desire for direct multimodal support.
- [#17138](https://github.com/NousResearch/hermes-agent/issues/17138) — *CLI sanitizing GLM_API_KEY incorrectly* (2 👍) — Configuration regression bug.

**Underlying needs:** Users heavily demand (1) session continuity and state management across restarts, (2) proper multimodal input handling, (3) enterprise platform integration improvements (Feishu, DingTalk, WeChat), and (4) reliable multi-turn API interaction with various providers.

## 5. Bugs & Stability

### Critical/P1 Severity (today):
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#16938](https://github.com/NousResearch/hermes-agent/issues/16938) | API server loses session continuity after context compression (X-Hermes-Session-Id) | None yet |
| [#17248](https://github.com/NousResearch/hermes-agent/issues/17248) | Empty final response after tool calls — `assistant_msg` unbound variable crash | None yet |
| [#17138](https://github.com/NousResearch/hermes-agent/issues/17138) | CLI sanitizes `GLM_API_KEY` into `G\nLM_API_KEY` breaking env config | None yet |
| [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | Gateway reconnect permanently stops Telegram after 20 failed attempts | None yet |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | Smart model routing triggers preflight compression against cheap model threshold | None yet |
| [#7794](https://github.com/NousResearch/hermes-agent/issues/7794) | Cron inactivity timeout fires during active OpenAI Codex streaming | None yet |

### High Severity (P2, today):
| Issue | Description |
|-------|-------------|
| [#17212](https://github.com/NousResearch/hermes-agent/issues/17212) | DeepSeek 400 "reasoning_content must be passed back" on multi-turn tool calls |
| [#17201](https://github.com/NousResearch/hermes-agent/issues/17201) | CLI Reasoning box not displayed for kimi-coding provider in v0.11.0 regression |
| [#17199](https://github.com/NousResearch/hermes-agent/issues/17199) | DeepSeek provider model normalization breaks Volcengine ARK custom endpoints |
| [#17228](https://github.com/NousResearch/hermes-agent/issues/17228) | Weixin cron push fails with unrecognized stale session signal |
| [#17244](https://github.com/NousResearch/hermes-agent/issues/17244) | MCP amap server SSE discovery mechanism not supported |

### Security:
- [#7726](https://github.com/NousResearch/hermes-agent/issues/7726) — *Dependency audit*: High severity `basic-ftp` package flagged
- [#17263](https://github.com/NousResearch/hermes-agent/pull/17263) — **Critical** security fix PR for unprotected admin endpoints in web_server.py (merged today)
- [#17154](https://github.com/NousResearch/hermes-agent/issues/17154) — Architecture quality audit highlighting restart continuity and gateway sprawl

## 6. Feature Requests & Roadmap Signals

**High-demand features likely for next release:**
1. **Native multimodal input** ([#7641](https://github.com/NousResearch/hermes-agent/issues/7641), 4 👍) — Avoid vision_analyze tool overhead for multimodal models like Kimi K2.5
2. **Multi-user preference memory** ([#17254](https://github.com/NousResearch/hermes-agent/issues/17254)) — User ID isolation for group/chatroom contexts
3. **Cross-session management** ([#17193](https://github.com/NousResearch/hermes-agent/issues/17193)) — Unified `/sessions` command across all gateways
4. **Shutdown/reboot toggle** ([#17215](https://github.com/NousResearch/hermes-agent/issues/17215)) — Request to re-enable system commands with opt-in switch
5. **New messaging channels** ([#8950](https://github.com/NousResearch/hermes-agent/issues/8950)) — IRC, Google Chat, LINE, Nostr, Twitch, QQBot

**Feature PRs advancing:**
- [#17258](https://github.com/NousResearch/hermes-agent/pull/17258) — Persistent computer-use VM (containerized Xfce desktop)
- [#17259](https://github.com/NousResearch/hermes-agent/pull/17259) — Pretext skill for creative browser demos
- [#15848](https://github.com/NousResearch/hermes-agent/pull/15848) — Official Obsidian skill integration (bases and canvases)
- [#11439](https://github.com/NousResearch/hermes-agent/pull/11439) — Per-platform default model/provider overrides

## 7. User Feedback Summary

**Pain Points:**
- **Session continuity failures** (#16938, #17154) — API users losing conversation context after compression is a persistent frustration
- **CLI reliability regression** (#16803, #17201) — v0.11.0 introduced CLI freezes and missing UI elements (reasoning box)
- **Configuration fragility** (#17138, #17199) — Environment variable sanitization and provider normalization breaking custom endpoints
- **Enterprise platform gaps** (#16964, #17228) — DingTalk files silently dropped, Weixin cron push failure signals incomplete platform support
- **Multi-turn instability** (#17212, #17248) — DeepSeek API errors and empty responses after tool calls

**Satisfaction Signals:**
- Community actively building plugins (PowerMem, Observational Memory, OpenViking)
- Users contributing performance optimizations (#17190 — 190ms TUI startup save)
- Security-conscious users running architecture audits (#17154) and submitting fixes (#17263)
- Chinese-language community growing (issues in Feishu, DingTalk, Weixin, QQ, GLM)

**Common Use Cases:**
- Enterprise chat platform integration (Feishu, DingTalk, WeChat Work)
- Multi-model routing with cost optimization
- Long-running cron jobs with streaming models
- Local model inference on Mac via Ollama/Rapid-MLX

## 8. Backlog Watch

**Stale High-Impact Issues (no maintainer response in 18+ days):**
| Issue | Days Open | Priority | Status |
|-------|-----------|----------|--------|
| [#7642](https://github.com/NousResearch/hermes-agent/issues/7642) — Feishu document creation | 18 | P3 | 4 comments, no assignment |
| [#7833](https://github.com/NousResearch/hermes-agent/issues/7833) — delegate_task custom endpoint overwrite | 18 | P1 | 4 comments, 1 👍, no fix |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) — Smart model routing compression bug | 18 | P1 | 3 comments, no assignment |
| [#7794](https://github.com/NousResearch/hermes-agent/issues/7794) — Cron timeout during streaming | 18 | P1 | 2 comments, no fix |
| [#7690](https://github.com/NousResearch/hermes-agent/issues/7690) — UnboundLocalError in retry handler | 18 | P2 | 2 comments, no fix |
| [#7661](https://github.com/NousResearch/hermes-agent/issues/7661) — Custom endpoints ignore anthropic_messages mode | 18 | P2 | 2 comments, no fix |
| [#7726](https://github.com/NousResearch/hermes-agent/issues/7726) — Dependency security audit | 18 | P2 | 2 comments, no action |
| [#7641](https://github.com/NousResearch/hermes-agent/issues/7641) — Native multimodal input | 18 | P2 | 4 👍, no assignment |

**Stale Feature PRs Needing Review:**
- [#5728](https://github.com/NousResearch/hermes-agent/pull/5728) — Memory benchmark framework (22 days, 424 scenarios)
- [#6006](https://github.com/NousResearch/hermes-agent/pull/6006) — PowerMem memory provider (21 days)
- [#5838](https://github.com/NousResearch/hermes-agent/pull/5838) — sync_recall memory option (22 days)
- [#7656](https://github.com/NousResearch/hermes-agent/pull/7656) — ask_advisor multi-model tool (18 days)

**Concerning Pattern:** Multiple P1 bugs (session continuity, cron timeout, smart routing, credential routing) have remained unassigned for 18 days, suggesting either maintainer bandwidth constraints or prioritization challenges. The growing backlog of well-structured plugin PRs (memory providers, benchmarks) also indicates community momentum that could stall without timely review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-29

## 1. Today's Overview
PicoClaw shows **high activity** with 15 issues updated and 16 PRs touched in the last 24 hours, signaling a healthy development cadence as the project approaches a potential stable release after the v0.2.7 nightly. A new nightly build was published today, incorporating fixes from the main branch. The community is actively contributing feature PRs (MQTT, OpenVINO, enhanced MCP) while maintainers are closing bugs around cron duplicates, serial tool support, and SSE parsing stability. The issue tracker reveals a balanced mix of bug reports, quality-of-life improvements, and roadmap-aligned enhancements, though several long-standing issues remain tagged as `stale`.

## 2. Releases
**One new release published today:**
- **Nightly Build** — `v0.2.7-nightly.20260429.db1bc6a1`
  - Automated nightly build from `main` branch (compare: [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main))
  - Marked as potentially unstable; intended for testing
  - **No formal changelog or migration notes** — users upgrading from v0.2.7 stable should exercise caution.

**Key finding:** No stable release since v0.2.7; the nightly cadence suggests a v0.2.8 stable release may be imminent once current bugfix PRs (Docker build, cron duplicates, DingTalk panic) are merged.

## 3. Project Progress
Five PRs were merged/closed in the last 24 hours:

| PR | Summary | Type |
|----|---------|------|
| [#2689](https://github.com/sipeed/picoclaw/pull/2689) | **fix(cron): propagate sessionKey to prevent duplicate tool responses** | Bug fix — addresses a cron regression causing duplicate messages after v0.2.7 upgrade |
| [#2697](https://github.com/sipeed/picoclaw/pull/2697) | **fix(serial_windows): remove unused import** | Code cleanup |
| [#2673](https://github.com/sipeed/picoclaw/pull/2673) | **feat: Add cross-platform serial tool support** | New feature — Linux, macOS, Windows serial tool with dashboard integration |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | **Add Intel OpenVINO Model Server support** | New feature — superseded by reopened PR #2703 with updates |
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | **feat: add MQTT channel support** | New feature — closed in favor of updated PR #2705 |

**Notable:** The MQTT channel feature was re-submitted as PR #2705 today, suggesting improvements from initial review. The serial tool support is a significant new hardware integration capability.

## 4. Community Hot Topics
Most active discussions in the last 24h:

1. **[#629 — [BUG] Didn't retry if meet LLM call failed](https://github.com/sipeed/picoclaw/issues/629)** (11 comments)
   - *Context:* Long-running tasks hang without retry when LLM provider returns HTTP 500.
   - *Underlying need:* Robust retry logic for transient provider failures; this is a **longstanding issue** (since Feb 2026) with high user impact.

2. **[#2513 — [BUG] gateway start abnormal](https://github.com/sipeed/picoclaw/issues/2513)** (7 comments)
   - *Context:* Gateway process fails to stabilize on Debian 13 with digntalk channel.
   - *Underlying need:* Platform-specific stability for non-Ubuntu Linux distributions.

3. **[#2367 — [BUG] Last screen title remains Chinese when English selected](https://github.com/sipeed/picoclaw/issues/2367)** (5 comments)
   - *Context:* i18n regression in mobile APK — final screen not respecting language settings.
   - *Underlying need:* Better internationalization QA for mobile builds.

4. **[#1950 — [Feature] Streaming Output for Web Chat](https://github.com/sipeed/picoclaw/issues/1950)** (5 comments)
   - *Context:* Web UI lacks streaming token output, which is standard in competing tools.
   - *Underlying need:* Competitive parity; identified as "Nice-to-Have" but roadmap-aligned.

**Observation:** The #629 retry issue has been open for 2+ months with sustained community engagement — it represents a **critical gap** in production reliability that may be prioritized for v0.2.8.

## 5. Bugs & Stability
**High-severity bugs reported today:**

| Issue | Description | Fix Available? |
|-------|-------------|----------------|
| [#2704](https://github.com/sipeed/picoclaw/issues/2704) | **DingTalk SDK panic crashes Gateway** — `dingtalk-stream-sdk-go` sends to closed channel on ping timeout; 6 crash instances | **No** — upstream SDK bug; needs workaround or downgrade |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | **Multi-user Discord channels lack sender attribution in history** — default session scope loses user identity for historical messages | Not directly |
| [#2687](https://github.com/sipeed/picoclaw/issues/2687) | **Cron reports send duplicate messages after v0.2.7 upgrade** — reported Apr 27, **closed** Apr 28 via PR #2689 | **Yes** — fixed in nightly |
| [#2699](https://github.com/sipeed/picoclaw/issues/2699) | **Reasoning leakage across Slack channels** — thinking output goes to wrong channel | Not directly |

**Ranked by severity:**
1. **Critical:** #2704 (Gateway crash) — no fix yet; may require disabling DingTalk channel or pinning SDK version
2. **High:** #2699 (cross-channel data leakage) — security/privacy concern
3. **Medium:** #2687 (duplicate cron messages) — **already fixed** in nightly
4. **Medium:** #2702 (history attribution) — usability regression for multi-user scenarios

**Also ongoing:** #629 (LLM retry), #2368 (Android model config), #2081 (tool feedback escaping).

## 6. Feature Requests & Roadmap Signals
**High-signal feature requests from last 24h:**

1. **[#2705 — Add MQTT channel support](https://github.com/sipeed/picoclaw/pull/2705)** — New PR, re-submitted after review. High probability for next release (v0.2.8) given maintainer engagement.

2. **[#2703 — Intel OpenVINO Model Server support](https://github.com/sipeed/picoclaw/pull/2703)** — Fresh PR replacing merged #2496; enables local LLM inference on Intel hardware (CPU/GPU/NPU). Strong alignment with "local-first" direction.

3. **[#2696 — Per-request dynamic headers for MCP servers](https://github.com/sipeed/picoclaw/pull/2696)** — Allows channels to forward authentication headers to MCP tools. Enables secure, channel-aware tool integration.

4. **[#2421 — Add email as native channel](https://github.com/sipeed/picoclaw/issues/2421)** — Corporate/enterprise use case; no implementation yet.

5. **[#2217 — Token consumption dashboard](https://github.com/sipeed/picoclaw/issues/2217)** — WebUI statistics; marked `stale` but has steady interest.

6. **[#2698 — Mission Control integration for PicoClaw](https://github.com/sipeed/picoclaw/issues/2698)** — Currently OpenClaw-only; user wants parity.

**Prediction for v0.2.8:** MQTT channel (PR #2705), OpenVINO support (PR #2703), and MCP dynamic headers (PR #2696) are strong candidates given active maintainer review. The retry fix for #629 may also land as a stability requirement.

## 7. User Feedback Summary
**Pain points (from issues and PR comments):**
- **"I have to restart the gateway every time a DingTalk ping times out"** — #2704 highlights production stability concerns with Chinese enterprise channels
- **"The session history only keeps 1-2 messages after I close and reopen the page"** — #2310 (Chinese-language report) indicates session persistence is unreliable for power users
- **"Why does the nightly build not include Mission Control? I thought it was merged"** — #2698 shows confusion about feature parity between OpenClaw and PicoClaw
- **"Please add docs for the .so file — I don't know if I can use it in my Android project"** — #2695 asks for better documentation for Android library consumers
- **"Tool feedback is unreadable — \u0026 instead of &"** — #2081 (2+ weeks open) degrades developer experience when using shell tools

**Satisfaction signals:**
- Community actively submits PRs (MQTT, OpenVINO, MCP headers) showing confidence in contributing
- Users are upgrading to v0.2.7 and reporting bugs quickly — indicates production adoption

## 8. Backlog Watch
**Issues/PRs needing maintainer attention (no response in >2 weeks):**

| Item | Open Since | Last Maintainer Activity | Risk |
|------|------------|--------------------------|------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) — LLM retry (long task hang) | 2026-02-22 | None (community discussion only) | **High** — 11 comments, critical reliability gap |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) — Streaming Web Chat | 2026-03-24 | None | Medium — community wants it |
| [#2081](https://github.com/sipeed/picoclaw/issues/2081) — Tool feedback Unicode escaping | 2026-03-27 | None | Medium — degrades UX |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) — Token dashboard | 2026-03-31 | None | Low — enhancement |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) — Session history loss (Chinese) | 2026-04-03 | None | **High** — data loss for daily users |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) — Multi-User / Agent Shield integration | 2026-04-03 | None | **High** — major security PR with no review |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) — Engram MCP memory server docs | 2026-04-04 | None | Low — docs only |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) — SSE stream chunk parsing fix | 2026-04-07 | None | Medium — fixes streaming quality |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) — Chinese title in English mode | 2026-04-05 | Tagged `stale` Apr 28 | Low — cosmetic |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) — Channel identification refactor | 2026-04-16 | Active Apr 29 | — Under review |

**Critical backlog items:**
- **#629** (LLM retry) — 2+ months without maintainer response despite 11 comments; top community demand
- **#2313** (Agent Shield security) — major 47-commit PR unmerged for 26 days; security hardening waiting
- **#2310** (session history loss) — unreplied for 26 days; causes real data loss for non-English users

**Recommendation:** Maintainers should prioritize at least one response on #629 (retry) and #2310 (history) to acknowledge user pain points, and triage the Agent Shield PR (#2313) which represents significant security value.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-29

## Today's Overview
The NanoClaw v2 project is in a period of intense activity with 23 pull requests updated in the last 24 hours—12 of which were merged or closed—indicating a strong development cadence. The project maintains a healthy ratio of feature work to bug fixing, with 4 open issues reflecting a relatively contained backlog. Notably, contributor activity is broad, with at least 10 distinct authors contributing across channels, providers, security hardening, and documentation. No new releases were published today, suggesting the team is consolidating changes ahead of a future release.

## Releases
No new releases were published in the last 24 hours. The last recorded version remains v2 (no specific tag or version number provided in data).

## Project Progress
Today saw substantial forward momentum across multiple subsystems:

- **Telegram channel improvements**: 
  - PR [#2089](https://github.com/qwibitai/nanoclaw/pull/2089) (open) adds `setReaction` to the Telegram adapter for status-tracker compatibility
  - PR [#2008](https://github.com/qwibitai/nanoclaw/pull/2007) (merged/closed) routes image/video/audio files through typed media APIs for inline previews
  
- **Agent provider expansions**:
  - PR [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) (merged) implements OpenCode as a first-class AgentProvider
  - PR [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) (merged) adds OpenCode SDK as an alternative agent backend
  - PR [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) (merged) pins OpenCode SDK/CLI to 1.4.17 with overlay propagation
  
- **Stability and correctness fixes**:
  - PR [#2077](https://github.com/qwibitai/nanoclaw/pull/2077) (merged) fixes duplicate message ID handling with `INSERT OR IGNORE`
  - PR [#2076](https://github.com/qwibitai/nanoclaw/pull/2076) (open) fixes Slack standalone file uploads in channels
  - PR [#2078](https://github.com/qwibitai/nanoclaw/pull/2078) (open) strips `:ag-<agentGroupId>` suffix before adapter operations
  
- **Infrastructure improvements**:
  - PR [#2079](https://github.com/qwibitai/nanoclaw/pull/2080) / [#2080](https://github.com/qwibitai/nanoclaw/pull/2080) (both merged) add startup circuit breaker for crash loop protection
  - PR [#2084](https://github.com/qwibitai/nanoclaw/pull/2084) (open) adds daily project backup with full/per-agent restore

- **Multi-channel integration**: PR [#2083](https://github.com/qwibitai/nanoclaw/pull/2083) (merged) adds Discord, Telegram, WhatsApp channels plus OpenAI Codex provider and agent-to-agent relay

- **Security hardening**: PR [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) (open) prevents host file read/delete via container-controlled outbox paths

## Community Hot Topics

1. **Bug: Discord replies based on container init, not message source** — Issue [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) (1 comment, 1 👍)  
   *Root need*: Users expect channel-aware reply threading; the current behavior creates confusion when agents route all responses through a single thread spawned at container initialization. This is a core UX issue for Discord users managing multiple conversations.

2. **iMessage local mode silent send failures** — Issue [#2088](https://github.com/qwibitai/nanoclaw/issues/2088) (new, 0 comments)  
   *Root need*: macOS users running agents locally need reliable outbound message delivery. The silent failure on launchd-managed nodes suggests an Apple permission model gap that undermines trust in local mode.

3. **Read-only database error when host runs as root** — Issue [#2073](https://github.com/qwibitai/nanoclaw/issues/2073) (0 comments)  
   *Root need*: Production deployments often run as root (especially on headless servers); this permissions bug blocks container-based agent execution entirely in those environments.

## Bugs & Stability

*High severity:*

1. **Read-only database error on root-hosted containers** — Issue [#2073](https://github.com/qwibitai/nanoclaw/issues/2073)
   - Symptoms: Every agent container exits within ~1 second with `Fatal error: attempt to write a readonly database`
   - Affects: All v2 deployments running as root (common in production)
   - No fix PR identified yet; likely requires filesystem permission scoping in container startup

*Medium severity:*

2. **Discord reply routing incorrect** — Issue [#1959](https://github.com/qwibitai/nanoclaw/issues/1959)
   - Symptoms: Agent replies go to the thread spawned at container init rather than the message source
   - Affects: Multi-conversation Discord users
   - No fix PR identified

*Lower severity but notable:*

3. **iMessage silent outbound send failures** — Issue [#2088](https://github.com/qwibitai/nanoclaw/issues/2088)
   - Symptoms: Inbound works, outbound silently fails on macOS Tahoe
   - No fix PR identified; root cause is Automation permission gap for launchd-managed processes

4. **Duplicate message ID handling** — PR [#2077](https://github.com/qwibitai/nanoclaw/pull/2077) (already merged) fixes an issue where duplicate platform events caused dropped messages in session DB inserts

5. **Crash loop protection** — PRs [#2079](https://github.com/qwibitai/nanoclaw/pull/2080) / [#2080](https://github.com/qwibitai/nanoclaw/pull/2080) (both merged) address Discord gateway identify limits and IP bans through circuit breaker backoff

## Feature Requests & Roadmap Signals

**Likely coming in next version:**

1. **Multi-channel expansion**: The merged PR [#2083](https://github.com/qwibitai/nanoclaw/pull/2083) adding Discord, Telegram, WhatsApp channels plus OpenAI Codex provider signals a clear roadmap to be a universal agent platform. Expect these to be core stable features in the next release.

2. **Backup/disaster recovery**: PR [#2084](https://github.com/qwibitai/nanoclaw/pull/2084) (open) introduces daily snapshots with per-agent restore—a clear ops gap being filled.

3. **Dashboard improvements**: PR [#2090](https://github.com/qwibitai/nanoclaw/pull/2090) (open) fixes `/add-dashboard` installation after refactors, and PR [#2087](https://github.com/qwibitai/nanoclaw/pull/2087) (merged) introduced a dashboard pro skill.

**Future roadmap signals:**

4. **Decoupled agent provisioning** — Issue [#2085](https://github.com/qwibitai/nanoclaw/issues/2085) requesting `/create-agent` skill to allow pre-configuring agents without immediately wiring to chats. This points toward planned multi-tenant or fleet management use cases.

5. **Per-group model/effort configuration** — PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (still open) adds this alongside Matrix E2EE, suggesting advanced configuration is a growing demand.

## User Feedback Summary

*Pain points expressed:*

- **Discord threading confusion**: Users expect natural message routing; current container-scoped behavior is counterintuitive (Issue [#1959](https://github.com/qwibitai/nanoclaw/issues/1959))
- **macOS permission gaps**: Running iMessage locally on macOS Tahoe fails silently due to Automation permission restrictions (Issue [#2088](https://github.com/qwibitai/nanoclaw/issues/2088))
- **Production deployment friction**: Root-hosted containers fail entirely due to filesystem permissions (Issue [#2073](https://github.com/qwibitai/nanoclaw/issues/2073))
- **No backup mechanism**: Users lack disaster recovery for their agent configurations and chat histories (PR [#2084](https://github.com/qwibitai/nanoclaw/pull/2084) is addressing this)

*Positive signals:*
- Active community contribution from at least 10 distinct authors in 24 hours
- Security-aware contributions (PR [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) hardening container filesystem boundary)
- Feature requests focused on productionization (backup, per-agent provisioning) indicate real-world deployment beyond hobbyist use

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

1. **Matrix E2EE channel + per-group configuration** — PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (open since April 4, last updated April 28) has 0 comments and no maintainer review. This is a substantial feature addition with complex encryption requirements that may need architectural guidance from maintainers.

2. **OpenCode SDK backend** — PRs [#1628](https://github.com/qwibitai/nanoclaw/pull/1628), [#1776](https://github.com/qwibitai/nanoclaw/pull/1776), [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) (all recently merged after long open periods) suggest this was a prior backlog item now resolved.

3. **Per-agent provisioning feature request** — Issue [#2085](https://github.com/qwibitai/nanoclaw/issues/2085) (created April 28) has 0 comments and no response. For a feature that clearly aligns with the multi-agent roadmap, lack of maintainer acknowledgment may frustrate users planning deployments.

4. **Container security boundary hardening** — PR [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) (open since April 25, updated April 29) has no maintainer review despite touching sensitive host filesystem interop. This security fix should be prioritized to prevent potential data loss scenarios.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-29

**Generated from GitHub data (nullclaw/nullclaw) for 2026-04-29 00:00 UTC**

---

## 1. Today's Overview

Project activity remains **moderate**, with three pull requests and one issue updated in the last 24 hours, but no new releases today. The primary focus is on **critical bug fixes** following the Zig 0.16 migration, particularly a high-severity CPU spin and silent messaging regression affecting all Mattermost-connected agents in production. A long-standing PR (#783) for a new **cron subagent engine** continues to advance, now 22 days old, suggesting sustained development on platform-level features. One documentation gap was flagged in the security policy, indicating ongoing refinement of the project's reference materials alongside core engineering work.

---

## 2. Releases

No new releases were published in the last 24 hours. No active release branches or release candidates were detected.

---

## 3. Project Progress

One pull request was **closed/merged** today:

| PR | Title | Status | Author |
|----|-------|--------|--------|
| [#872](https://github.com/nullclaw/nullclaw/pull/872) | `fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin` | ✅ **Merged** | vernonstinebaker |

**What advanced**: The fix addresses two high-severity regressions from the Zig 0.16 migration (see Section 5 for details). This is a positive signal for production stability.

Two PRs remain open but active:
- [#783](https://github.com/nullclaw/nullclaw/pull/783) — Cron subagent engine (22 days open, still receiving updates)
- [#873](https://github.com/nullclaw/nullclaw/pull/873) — Identical fix to #872, possibly an alternative or duplicate

---

## 4. Community Hot Topics

No issues or PRs have received comments or reactions in the last 24 hours, suggesting the community is largely **consuming rather than discussing** these changes.

**Most notable open conversation** (by age and complexity):

- **[PR #783 — feat(cron)](https://github.com/nullclaw/nullclaw/pull/783)** — This is the project's most significant open feature work. It introduces a DB-backed cron scheduler with skill/agent/shell job types, timezone offsets, delivery routing, operator alerts, and JSON CLI output. The 22-day lifespan and changelog detail suggest a **major foundational piece** for scheduled agent operations, likely to be a headline feature in the next release.

**Underlying need**: Users require reliable, auditable, operator-controlled scheduling of agent tasks — moving beyond simple cron wrappers to a fully integrated subagent with history and monitoring.

---

## 5. Bugs & Stability

One **high-severity regression** was reported and already fixed today:

| Issue/PR | Severity | Description | Fix Status |
|----------|----------|-------------|------------|
| [#872](https://github.com/nullclaw/nullclaw/pull/872) / [#873](https://github.com/nullclaw/nullclaw/pull/873) | **High** | Two regressions from Zig 0.16 migration: (1) **100% CPU utilisation** on the gateway thread (busy-spin on EAGAIN) in daemon mode across all platforms; (2) **Silent Mattermost messaging failure** — empty-body POST responses cause agents on Mattermost to silently fail to send messages, no error log, no delivery | ✅ Fixed in #872 (merged) |

A duplicate PR (#873) remains open, possibly awaiting review or containing a different approach.

**Additional documentation gap** (low severity):

- **[#874 — Docs: missing documentation for security policy default_allowed_commands](https://github.com/nullclaw/nullclaw/issues/874)** — Security policy configuration parameter lacks documentation. Low impact but indicates a documentation blind spot.

**Assessment**: The team responded within the same day to a critical production bug, demonstrating strong operational responsiveness. The duplicate PR (#873) should be resolved to avoid confusion.

---

## 6. Feature Requests & Roadmap Signals

**Strong roadmap signal — Cron subagent** (#783):
- DB-backed scheduler with history tables (`cron_runs`, `cron_run_queue`)
- Support for three job types: skill, agent, shell
- Per-job timezone offsets
- Delivery routing and operator alerting
- JSON CLI output format (`cron list --json`, `cron schedule --json`)
- **Likely landing in next minor/major release** (v0.x)

**Prediction**: The next release (likely after #783 merges) will include:
- Cron subagent as a first-class feature
- Binary releases or migration notes for the Zig 0.16 fixes
- Possibly improved documentation for security policy configuration

**No new feature requests** from users were filed in the last 24 hours.

---

## 7. User Feedback Summary

No direct user feedback (comments, reactions) was posted in the last 24 hours. However, pain points can be inferred from recent activity:

- **Production pain point**: Mattermost users experienced silent message failures and CPU exhaustion after migrating to Zig 0.16. The fact that no error was logged for the messaging failure is a **visibility gap** — users lost confidence in delivery without knowing.
- **Documentation friction**: The `default_allowed_commands` security policy parameter has no documentation, which may cause users to misconfigure security boundaries.
- **Positive signals**: The existing community (yangfeng, vernonstinebaker) is actively contributing production-level fixes and features, suggesting a healthy, technically competent user base willing to submit code.

**Satisfaction level**: Likely mixed — high urgency bugs frustrate production users, but the rapid response and fix turnaround should restore confidence.

---

## 8. Backlog Watch

| Item | Created | Last Update | Issue | Status |
|------|---------|-------------|-------|--------|
| [#783 — feat(cron)](https://github.com/nullclaw/nullclaw/pull/783) | 2026-04-07 | 2026-04-28 | 22 days, still actively updated | ⚠️ Requires maintainer review — needs to be merged or given explicit feedback on what remains |
| [#873 — fix: duplicate of #872](https://github.com/nullclaw/nullclaw/pull/873) | 2026-04-28 | 2026-04-28 | Yet to be reviewed/closed | 🔴 Should be closed as superseded by #872 to avoid confusion |
| [#874 — Docs: missing doc for default_allowed_commands](https://github.com/nullclaw/nullclaw/issues/874) | 2026-04-28 | 2026-04-28 | Needs documentation update | 🟢 Low urgency, but good first contribution |

**Maintainer attention needed**:
- **#783** is the most urgent backlog item — a large, 22-day-old feature PR needs maintainer review or guidance
- **#873** should be explicitly closed or linked as superseded to keep PR queue clean

---

*Digest generated from GitHub activity in the 24 hours ending 2026-04-29 00:00 UTC. Project health: stable with one critical fix already deployed.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-29

## Today's Overview

IronClaw is in the midst of a major architectural overhaul ("Reborn") with a tightly coordinated landing plan, reflected in 26 open issues and 7 open PRs updated in the last 24 hours. The Reborn cutover blockers dominate the active issue tracker, while 43 PRs were merged or closed today—mostly staging promotion trains and a small release prep PR. CI stability is under strain: three live canary failures (`private-oauth` and `public-smoke`) were reported against commit `7194808f`, and a handful of P2 bugs surfaced from a recent QA bug bash. Overall project activity is very high, with the team executing a structured integration plan while managing operational regressions.

## Releases

**No new releases today.** The open PR #3059 (`chore: release`) prepares `ironclaw_common` (0.3.0 → 0.4.0, API breaking) and `ironclaw_skills` (0.2.0 → 0.3.0, API breaking) but has not yet been merged.

## Project Progress

- **43 PRs merged/closed** in the last 24 hours, overwhelmingly staging promotion trains (e.g., `staging-promote/*` branches from April 21–24 being merged forward).
- **Fix for release tooling:** PR #3058 (closed) removed committed live replay `.log` artifacts that were causing `release-plz` to fail; `.json` trace fixtures remain as the source of truth.
- **Closed issues:** #1044 (e2e test powered by Claude Code with Chrome MCP), #2437 (tool schema normalization fix for `nearai_chat`), #2982 (Routine/Mission migration after upgrade to 0.26.0), #2833 (cross-conversation response contamination).
- **New PR #3059** (open): Prepares the next crate releases with breaking changes for `ironclaw_common` and `ironclaw_skills`.

## Community Hot Topics

1. **[#2987] [EPIC] Track Reborn architecture landing strategy and grouped PR plan** — 23 comments  
   *Author: serrrfirat*  
   *[Link](nearai/ironclaw Issue #2987)*  
   The central coordination issue for the entire Reborn rearchitecture. It defines an ordered PR stack (PR0–PR5+), cutover blockers, and a compatibility gate. Today 14+ child issues were filed under this epic, signaling the team is executing the plan at high velocity.

2. **[#233] feat: propagate W3C traceparent headers for distributed tracing** — 2 comments (updated today)  
   *Author: ilblackdragon*  
   *[Link](nearai/ironclaw Issue #233)*  
   Long-standing feature request (opened Feb 19) with only 2 comments but a detailed motivation. The need for end-to-end observability across gateway → agent loop → worker → orchestrator → tool chain has not been addressed yet, though the Reborn architecture may naturally enable it.

3. **[#3036] [EPIC] Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses** — 1 comment, 1 👍  
   *Author: ilblackdragon*  
   *[Link](nearai/ironclaw Issue #3036)*  
   Proposes declarative configuration (YAML/TOML blueprints) for operators, addressing the pain of hand-editing `.env`, settings JSON, and runtime flags without schema or audit trail. This aligns with the Reborn runtime preset work in #3045.

## Bugs & Stability

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#3052](nearai/ironclaw Issue #3052) | **High** | Live canary `private-oauth` failed on dedicated runner | No |
| [#3038](nearai/ironclaw Issue #3038) | **High** | Live canary `public-smoke` failed (Anthropic provider) | No |
| [#3037](nearai/ironclaw Issue #3037) | **High** | Live canary `private-oauth` failed (same commit as #3052) | No |
| [#3030](nearai/ironclaw Issue #3030) | **High** | Live canary `private-oauth` failed (third instance) | No |
| [#3035](nearai/ironclaw Issue #3035) | **P2** | Agent ignores configured display name, responds as "IronClaw" | No |
| [#3034](nearai/ironclaw Issue #3034) | **P2** | V2 engine: HTTP tool disabled by default with no onboarding | No |
| [#3010](nearai/ironclaw Issue #3010) | **Medium** | Generated images not available as context in follow-up turns | No |
| [#3011](nearai/ironclaw Issue #3011) | **Medium** | `ironclaw run` produces zero stderr output at `RUST_LOG=trace` | No |
| [#2949](nearai/ironclaw Issue #2949) | **Medium** | Installer fails for `x86_64-unknown-linux-gnu` platform | No |

**Key takeaway:** The repeated canary failures on `private-oauth` and `public-smoke` lanes all point to commit `7194808f11eec986991edea6ecedaa5b8f8004dc`, suggesting a regression introduced in that change. No fix PR has been opened yet.

## Feature Requests & Roadmap Signals

1. **Supported wallet expansion** — Issue #3025 requests Trezor/MetaMask support in IronClaw, noting that current hot wallet connectors are mostly closed-source. This signals user demand for open-source hardware wallet integration. (Likely not in next release given Reborn priorities.)

2. **Distributed tracing (W3C traceparent)** — Issue #233, now 70 days old, is a strong candidate for the Reborn event substrate work tracked in #3022, which requires "redacted, scoped, replayable events."

3. **Configuration-as-Code** — Issue #3036, filed yesterday, could become a post-Reborn roadmap item for operator tooling. The runtime preset work (#3045, #3044) is a prerequisite.

## User Feedback Summary

- **Installation friction:** User `gittyhubert` (#2949) reports the installer script fails on `x86_64-unknown-linux-gnu` despite the platform-specific binary existing on the releases page. This is a release artifact naming or detection issue.
- **QA regressions:** Two P2 bugs from the April 26–27 bug bash (#3035, #3034) indicate that the V2 engine update broke display name configuration and shipped with a critical tool (HTTP) disabled with no onboarding path.
- **Migration pain:** Issue #2982 (closed) documented a real production upgrade scenario (0.24.0 → 0.26.0) where Routine chats were misclassified as Missions. The fix was merged, but similar migration concerns are central to Reborn cutover blocker #3029 (migration and compatibility bridges).
- **Cross-conversation contamination:** Issue #2833 (closed) fixed a confusing bug where intermediate responses from one conversation leaked into another's view—a significant UX issue that has been resolved.

## Backlog Watch

| Issue | Last Updated | Age | Summary |
|-------|-------------|-----|---------|
| [#233](nearai/ironclaw Issue #233) | 2026-04-29 | 70 days | W3C distributed tracing — detailed motivation, 2 comments, no assignee. High-value observability feature that remains untouched. |
| [#2949](nearai/ironclaw Issue #2949) | 2026-04-28 | 5 days | Installer fails on `x86_64-unknown-linux-gnu` — user confirmed the binary exists but the installer script doesn't detect it. No maintainer response. |

**Note:** The Reborn epic (#2987) and its child issues are actively managed and do not qualify as backlog—they are under active execution despite high issue counts.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for April 29, 2026.

---

## LobsterAI Project Digest: 2026-04-29

### 1. Today's Overview
The project experienced extremely high activity today, with 42 Pull Requests (PRs) updated in the last 24 hours, indicating a major push to stabilize and enhance the system before a potential release. An impressive 18 of these PRs were merged or closed, demonstrating efficient code integration. The team focused heavily on fixing core engine stability (gateway restarts, session deadlocks), refining user experience for both desktop and IM channels, and expanding model compatibility. Despite the high merge velocity, two open issues persist concerning upstream model compatibility and a subtle UI state bug, suggesting that while the front is moving fast, edge cases remain.

### 2. Releases
No new releases were tagged today.

### 3. Project Progress
Today saw a massive wave of fixes and features, driven by 18 merged/closed PRs. Key areas of progress include:
- **Core Stability (Gateway & Sessions):** Fixed a critical bug where failed LLM requests could cause a gateway to restart or enter a deadlock state, preventing further messages (**PR #1872**, **PR #1870**, **PR #1869**, **PR #1857**).
- **Model & Provider Support:** Added "Coding Plan" support for the new Xiaomi Mimo model (**PR #1862**) and Baidu Qianfan (**PR #1859**). Fixed an issue with Qwen 3.6 Plus randomly failing to accept image inputs (**PR #1867**).
- **Multi-Agent & UI Fixes:** Resolved a confusing UI bug where switching between agents (e.g., from a coder to a main agent) did not update the displayed model, potentially causing unexpected behavior (**PR #1865**). Long model names are now truncated to prevent header overflow (**PR #1855**, **PR #1854**).
- **IM Channel Polish:** Fixed issues with garbled Chinese filenames when receiving files from Feishu (**PR #1866**), and improved image display in WeChat by constraining size and adding click-to-preview functionality (**PR #1868**). IM-specific media metadata (e.g., `[图片]`) is now stripped from user messages for a cleaner UI (**PR #1856**).
- **Skills & Tooling:** The included "Youdao Note" skill was upgraded (**PR #1864**).

### 4. Community Hot Topics
The community is focused on two distinct friction points.

- **High Activity: Upstream Model Compatibility (Issue #1813)**
    - **Link:** [Issue #1813 - DeepSeek V4 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1813)
    - **Analysis:** This issue, regarding a "provider rejected the request schema or tool payload" error with DeepSeek V4, remains open and is one of the most commented items. It highlights the project's dependency on rapidly evolving third-party models where API schemas can change, causing immediate breakage for users. The lack of a clear fix suggests an upstream API change may require a more complex adaptation, not just a single configuration tweak.

- **Moderate Activity: Image Attachment State Sync (Issue #1861)**
    - **Link:** [Issue #1861 - 图片附件不随模型切换重新处理](https://github.com/netease-youdao/LobsterAI/issues/1861)
    - **Analysis:** User `btc69m979y-dotcom` reported a subtle but important UI/UX bug where image attachments are not re-processed (e.g., re-encoded to base64) when a user switches between models with different vision capabilities. This is a core usability issue that could cause vision models to "not see" an attached image. A related fix was merged today in **PR #1860**, which addresses a similar `supportsImage` issue on the home page, indicating the team is already aware of and working on this problem.

### 5. Bugs & Stability
**High Severity:**
- **Qwen 3.6 Model Crash (Fixed):** A bug where using the Qwen 3.6 Plus model could trigger a gateway restart was reported and fixed in **PR #1870**.
- **Gateway Deadlock (Fixed):** A severe logic error could cause the session to become permanently locked if a gateway lifecycle error occurred, blocking all future messages. This was resolved in **PR #1869**.
- **Chat Abort on Home Page (Fixed):** Switching models on the home page could trigger a full, hard gateway restart instead of a graceful abort, causing a poor user experience. This was fixed in **PR #1857**.

**Medium Severity:**
- **Model ID Not Synced for Output (Fix in progress):** The closed **PR #1860** and open **Issue #1861** point to a broader problem where the "selected model" UI state is not properly synchronized with the image processing logic, causing models to not receive images in the expected format.
- **MCP Command Injection (Open & Stale):** **PR #908**, which aims to fix a critical security vulnerability allowing arbitrary command injection via MCP, remains open and stale for over a month. This is a significant security risk that requires immediate attention.
- **Skill Security Bypass (Open & Stale):** **PR #909**, addressing a vulnerability where malicious skill packages could bypass security scans to install silently, is also over a month old and stale.

### 6. Feature Requests & Roadmap Signals
- **Model Support is Key:** The push to add "Coding Plan" support for Xiaomi Mimo and Baidu Qianfan signals that the project is aggressively expanding its model compatibility matrix, focusing on both new, specialized models and major Chinese AI providers.
- **Focus on IM Channel Parity:** Multiple PRs dedicated to Feishu and WeChat channels (fixing filenames, image display, and metadata stripping) show a clear roadmap signal to make the IM agent experience as rich and polished as the desktop client.
- **Future Feature Prediction:** Given the complexity and user interest in **Issue #1861**, a more robust, event-driven "re-process attachment" system on model switch is likely being developed for the next minor version. This would ensure the image format (base64 vs. file path) is always correct for the selected model.

### 7. User Feedback Summary
- **Pain Point (Model Transitions):** Users are experiencing friction when switching between models with different capabilities. The primary complaint is that the UI state and internal data logic get out of sync, leading to models not behaving as expected (e.g., vision models not receiving images).
- **Pain Point (Upstream API Changes):** The DeepSeek V4 issue illustrates user frustration with dependency on external APIs. The user's report of a tool rejection schema error is a clear sign that users are on the cutting edge, trying to use the latest models, and facing breaking changes.
- **Satisfaction Signal (Rapid Bug Fixing):** The sheer number of fixes merged today, particularly around stability (gateway, sessions) and UI (model names, IM display), suggests that the team is responsive to recent user complaints from the previous weeks, which should increase user satisfaction for the next session.

### 8. Backlog Watch
The following critical PRs have been open and inactive for over a month and require immediate maintainer attention:

- **Critical Security: MCP Command Injection (PR #908)**
    - **Link:** [PR #908 - fix(mcp): validate stdio command to prevent command injection](https://github.com/netease-youdao/LobsterAI/pull/908)
    - **Risk:** If left unresolved, a successful exploit allows an attacker (via XSS or prompt injection) to execute arbitrary commands on the user's machine.
    - **Status:** Stale with no recent activity.

- **Critical Security: Skill Security Scan Bypass (PR #909)**
    - **Link:** [PR #909 - fix(security): require user confirmation when skill security scan fails](https://github.com/netease-youdao/LobsterAI/pull/909)
    - **Risk:** Allows a malicious skill to silently install if its code can crash the security scanner.
    - **Status:** Stale with no recent activity.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-29

## 1. Today's Overview
Moltis shows **very high development velocity** today, with **18 PRs updated** in the last 24 hours (15 merged/closed, 3 open) and **6 issues** active. A new release **v20260428.03** shipped today, though it introduced a regression in Telegram Docker support. The project is actively shipping major features across import systems, voice personas, code indexing, sandbox hardening, and self-update infrastructure, with a clear focus on platform maturity and user experience polish. Project health is strong, with rapid issue triage and responsive maintainers.

## 2. Releases
### **v20260428.03** (released 2026-04-28)
- **Changelog improvements**: PR #909 fixed changelog generation to scope entries to version deltas (no longer accumulating since last Git tag).
- **Known regression**: Docker images for this release have a broken Telegram channel (reported in #918), likely related to the provider name sanitization change in PR #915.
- **Migration notes**: No breaking changes documented; users on Docker should monitor issue #918 for a hotfix.

## 3. Project Progress (Merged/Closed PRs Today — 15 items)

### Major Feature Landings
- **Multi-source Import** (PR #914, #917): Added import from Claude Code, Claude Desktop, and Hermes into the web UI, alongside the existing OpenClaw import. New `moltis-import-core` crate with shared report types.
- **Voice Personas** (PR #916): Named, reusable voice identities with deterministic TTS injection. Agents can now have a stable spoken character with per-provider bindings.
- **Command Palette** (PR #904): `Cmd+K`/`Ctrl+K` overlay for navigation, settings, session search, and actions.
- **File Upload Button** (PR #876, closes #533): Plus button in web chat for attaching files, matching major LLM provider UX.
- **Self-Update System** (PR #911): `/update [version]` command + web UI button with install-method detection (binary, Homebrew, Docker, package managers).

### Infrastructure & Sandbox
- **Landlock FS Isolation** (PR #866, closes #818): Kernel-level filesystem isolation for restricted-host sandbox with graceful degradation.
- **Obscura Browser Backend** (PR #869): Lightweight sidecar browser backend, ~30 lines of new Rust code using existing CDP client.
- **Steipete Crawl Tools** (PR #913): Added wacrawl, discrawl, slacrawl, birdclaw, gogcli, and bundled skills to default sandbox.

### Bug Fixes & Refactoring
- **Telegram name sanitization** (PR #915, fixes #905): Fixes HTTP 422 errors with Mistral/OpenAI by sanitizing display names in channel messages.
- **Provider name validation** (PR #912): Consolidated into single source of truth; fixed 7 valid providers producing false unknown warnings.
- **Session memory hook dispatch** (PR #910): Consistent `HookPayload::Command` dispatch across all session lifecycle paths.
- **Nginx proxy docs fix** (PR #907): Uses `$http_host` to preserve non-standard ports, fixing WebSocket cross-origin errors.
- **Optional Discord/MS Teams** (PR #899): Made channels optional at compile time, following Telegram pattern.
- **Code Indexing** (PR #903): Auto-triggered indexing with deduplication, file watchers, and configurable intervals.

## 4. Community Hot Topics

### Most Active Discussions
- **#905 — Telegram with Mistral/OpenAI bug** (3 comments, 1 👍) → **CLOSED**, fixed by PR #915. User reported broken Telegram messages; root cause was unsanitized display names hitting API constraints.

- **#533 — File upload button** (3 comments) → **CLOSED**, landed today as PR #876. Long-standing feature request (March 31) for "+" button to attach files in web chat — now shipped.

- **#918 — Telegram broken in Docker v20260428.03** (1 comment, 0 👍) — **New today**. Opened by faevourite; regression from latest release. Likely related to the name sanitization logic in PR #915 interacting with Docker environment differently.

### Underlying Needs
The burst of import-related PRs (#914, #917) suggests strong community demand for migrating from other AI tools into Moltis. The voice personas feature (#916) indicates growing use of Moltis for voice/TTS applications.

## 5. Bugs & Stability

### Critical
- **#918 — Telegram broken in Docker v20260428.03** (NEW, open, 0 👍) — Regression: Telegram channel fails in Docker images of the latest release. *Likely caused by PR #915 provider name sanitization not handling Docker's default user setup.* No fix PR yet.

### High
- **#905 — Telegram fails with Mistral/OpenAI** (CLOSED) — HTTP 422 due to unsanitized display names. Fixed by PR #915, but may have introduced the Docker regression.

### Medium
- **#896 — Docker build failure: "Temporary failure resolving 'ports.ubuntu.com'"** (CLOSED) — Network-dependent build issue during `apt-get update`. Low severity, fixed via retry/non-Docker workaround.

### Low
- **PR #915 (fix)** — Provider name sanitization may need a follow-up for Docker environments. No evidence of other regressions.

## 6. Feature Requests & Roadmap Signals

### Shipped Today
- **[Feature] File upload in web chat** (Issue #533 → PR #876) — Now live.
- **[Feature] Voice personas for TTS** (PR #916) — New capability for deterministic voice identity.
- **[Feature] Multi-source import** (PR #917, #914) — Import from Claude Code, Hermes, etc.
- **[Feature] Command palette** (PR #904) — Cmd+K overlay.

### Open Requests (Likely in Next Version)
- **#906 — Configurable sub-agents in WebUI** (NEW, created 2026-04-28, 0 comments) — Moderate effort, aligns with recent sub-agent work. High probability for next release.
- **#266 — Native 9router support** (Open since Feb 28, 0 👍) — AI proxy/router for multi-provider routing. Lower priority but conceptually related to provider work. Could be bundled with a future provider routing overhaul.

### Prediction
The next release (v20260428.04 or v20260429.x) will likely include a hotfix for the Docker Telegram regression (#918) and might land #906 (sub-agent WebUI configurability) given the recent sub-agent infrastructure work.

## 7. User Feedback Summary

### Pain Points
- **Docker Telegram regression** (#918): "Telegram broken in Docker in v20260428.03" — immediate pain for Docker users relying on Telegram channel. No workaround documented.
- **Telegram + Mistral/OpenAI** (#905): Already fixed, but user-visible breakage from unsanitized names.
- **Nginx proxy WebSocket errors** (PR #907): Users behind reverse proxies hitting cross-origin issues; fixed by documentation update.

### Use Cases
- **Import from other tools** (#917, #914): Users migrating from Claude Code/Desktop and Hermes to Moltis.
- **Voice applications** (#916): TTS persona system suggests growing use in voice-interactive deployments.
- **Code indexing automation** (#903): Users want index-on-save for better code context.

### Satisfaction Signals
- Rapid issue resolution: #905 (reported, fixed, closed within same day).
- Long-standing feature (file upload, #533 since March 31) finally shipped.
- High PR throughput (15 merged in 24h) indicates a well-funded/healthy team.

## 8. Backlog Watch

### Stale Issues Needing Maintainer Attention
- **#266 — Native 9router support** (Open since 2026-02-28, 1 comment, 0 👍) — No maintainer response. Feature request for universal AI proxy/router. With the recent provider name validation refactoring (#912), this might be more tractable now. **Priority: Low-Medium** — author M2noa has been waiting ~2 months.

### Stale PRs
- **#339 — zh-TW Traditional Chinese locale** (Open since 2026-03-05, 0 comments) — PR by PeterDaveHello adding full Traditional Chinese support to both macOS and web apps. No maintainer activity. **Priority: Medium** — i18n PRs are low risk and benefit a large user base (~30M Traditional Chinese users). Should be reviewed and merged.

### Open PRs (as of today)
- **#917 — feat(import): add Claude Code and Hermes import to web UI** (OPEN, 2 hours old) — Likely to merge quickly.
- **#916 — feat(voice): add voice personas** (OPEN, 18 hours old) — Likely to merge next.
- **#339 — feat(i18n): zh-TW locale** (OPEN, 55 days old) — **Longest-open actionable PR, needs maintainer review.**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-29

## Today's Overview

CoPaw (QwenPaw) is demonstrating a **highly active** development cycle with **45 issues** and **32 pull requests** updated in the last 24 hours, alongside the release of **v1.1.5-beta.1**. The project merged/closed **21 PRs** and resolved **19 issues**, indicating strong maintainer responsiveness. The community is heavily engaged in Chinese-language channels, with a significant volume of bug reports and feature requests around agent isolation, session management, and multi-channel reliability. The release of ACP (Agent Communication Protocol) support signals deepening interoperability ambitions. Overall project health is good but with notable stability concerns around the Web UI, session persistence, and enterprise messaging channel integrations.

## Releases

- **v1.1.5-beta.1** (released 2026-04-28)
  - **Changes:**
    - Fix: Hybrid storage for per-tab agent selection in the Console (PR #3857)
    - Fix: Normalize non-standard timezone names (PR #3858)
    - **Feat: Add ACP (Agent Communication Protocol) support** — enables CoPaw agents to communicate with and delegate tasks to other ACP-compatible agents
  - **Breaking Changes:** None identified in the release notes
  - **Migration Notes:** The ACP feature requires configuration for remote agent endpoints; existing workflows remain unchanged

## Project Progress

*Merged/Closed PRs today (21 total)*:

| PR | Description | Status |
|---|---|---|
| [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) | Fix Chinese input in rename, fix agent state interference across tabs | ✅ Merged |
| [#3933](https://github.com/agentscope-ai/QwenPaw/pull/3933) | Upgrade console dependency to stable release 1.1.62 | ✅ Merged |
| [#3922](https://github.com/agentscope-ai/QwenPaw/pull/3922) | Add documentation for Plan Mode | ✅ Merged |
| [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) | Fix context loss infinite loop when tool result exceeds reserve limit | ✅ Merged |
| [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) | Deduplicate repeated model API requests on /chat page load | ✅ Merged |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | Fix QQ voice message type mapping and platform ASR support | ✅ Merged |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | Fix indentation bug in `rebuild_sys_prompt` causing premature loop exit | ✅ Merged |
| [#3917](https://github.com/agentscope-ai/QwenPaw/pull/3917) | Upgrade @agentscope-ai/chat to beta with stop-chat fix | ✅ Merged |
| [#3914](https://github.com/agentscope-ai/QwenPaw/pull/3914) | Bump version to 1.1.5b1 | ✅ Merged |

**Key advances this week:**
- **Agent runtime stability**: Context loss infinite loop fix (#3895), stop-chat state reset improvements (#3917)
- **Multi-channel quality**: QQ voice messages properly handled (#3845, #3887), WeChat Work fix for `/approval` command (#3901)
- **Console UX**: Agent selection no longer interferes across browser tabs, Chinese IME works during rename (#3934)
- **Performance**: Reduced redundant API calls on chat page load (#3897)

## Community Hot Topics

*Most active discussions (by comment count, updated in last 24h):*

| Issue | Comments | Summary |
|---|---|---|
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) [BUG] | 9 | **Debian 12 page freeze** on saving model settings; works under root → likely file permission issue |
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) [CLOSED] | 7 | **QwenPaw vs CoPaw relationship** — community seeking clarity on project branding and maintenance plans |
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) [QUESTION] | 6 | **Agent isolation request** — users want per-agent workspace segregation and whitelist-based file access |
| [#3049](https://github.com/agentscope-ai/QwenPaw/issues/3049) [CLOSED] | 6 | **`/stop` command fails**, session chat history disappears — core UX-breaking issue (now closed) |
| [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) [BUG] | 5 | **Context sync race condition** — tool results dropped before LLM call causes infinite loop under high `max_iters` |
| [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) [QUESTION] | 5 | **Cron job interruption** — user gets "I noticed you have interrupted me" on scheduled tasks |
| [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) [BUG] | 5 | **Skill pool persistent errors** — recurrent failure without clear reproduction steps |

**Underlying needs**: The community is demanding **better session/state management** (stop button bugs, session loss), **agent isolation** (workspace security), and **interoperability** between QwenPaw and CoPaw. The ACP release directly addresses the last point.

## Bugs & Stability

*Ranked by severity:*

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 **Critical** | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) | Context sync race condition → infinite loop under high max_iters | PR #3895 merged |
| 🔴 **Critical** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Debian 12 page freeze on save model settings | Open, no fix PR |
| 🟠 **High** | [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | `read_file_safe` passes 1GB to `TextIOWrapper.read()` → MemoryError on low-memory systems | Closed, no fix linked |
| 🟠 **High** | [#3750](https://github.com/agentscope-ai/QwenPaw/issues/3750) | Stop button leaves session in `is_running=True` → new messages blocked | Closed (PR #2991) |
| 🟠 **High** | [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | Console page conversation repeatedly interrupted | Open |
| 🟡 **Medium** | [#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937) | WeChat Work channel silently stops responding; requires channel re-toggle | Open |
| 🟡 **Medium** | [#3935](https://github.com/agentscope-ai/QwenPaw/issues/3935) | Multiple console tabs interfere with agent selection (recurrence of #2283) | PR #3934 merged |
| 🟢 **Low** | [#3901](https://github.com/agentscope-ai/QwenPaw/issues/3901) | WeChat Work `/approval approve` fails due to `@robot` prefix handling | Closed, fix expected |

**Note:** The critical context-loss infinite loop (#3893) and multi-tab interference (#3935) have been addressed in today's merges. The Debian 12 freeze (#3853) and console interruption (#3861) remain open without fix PRs.

## Feature Requests & Roadmap Signals

*Most requested or predictive features:*

| Issue | Request | Likelihood for Next Version |
|---|---|---|
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | **Agent workspace isolation** — per-agent file access control with whitelist support | **High** — aligns with security-conscious enterprise adoption |
| [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) | **Per-model timeout & context_window config** for custom providers | **Medium** — simple config change, popular request |
| [#3884](https://github.com/agentscope-ai/QwenPaw/issues/3884) | **Configurable file upload size** (currently hardcoded 10MB) | **High** — closed as resolved via config.yaml |
| [#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920) | **Add llama.cpp as official provider** (alongside Ollama/LMS) | **Medium** — community-driven, low implementation cost |
| [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) | **MCP tool inspection** — see available tools after config | **Low-Medium** — open since March, no traction |
| [#3883](https://github.com/agentscope-ai/QwenPaw/issues/3883) | **Unit test support for skills** to validate before assignment | **Low** — developer infra, not user-facing |
| [#3873](https://github.com/agentscope-ai/QwenPaw/issues/3873) | **Workflow orchestration tools** like OpenClaw's lobster | **Low** — major feature, no maintainer engagement |

**Predictions for v1.1.5 stable:**
- ACP protocol documentation and examples
- Configurable file upload limits (PR #3934 related)
- Continued WeChat Work and DingTalk channel fixes
- Potential agent workspace isolation as a follow-up to multi-instance channel PR (#3938)

## User Feedback Summary

**Pain Points (recurring themes):**
- **Session unreliability**: "Session聊天记录消失" (chat history disappears), stop button not working, agent state not resetting after interruption — this is the #1 complaint across multiple issues
- **Enterprise channel flakiness**: WeChat Work channels frequently stop responding (#3937), `/approval` commands broken (#3901), QQ voice messages misclassified (#3887)
- **File size/type limits**: 10MB upload cap too restrictive for real workflows, especially PDFs and compressed archives
- **Model configuration fragility**: Freezes on Debian (#3853), inability to set per-model timeouts (#3929)

**Satisfaction Signals:**
- GitHub Copilot provider PR (#3846) received positive community reception
- Plan Mode documentation (#3922) addresses a previously opaque feature
- Multi-channel duplicate instances (#3938) is a power-user feature being developed

**Chinese-speaking user base dominates** — ~70% of issues and comments are in Chinese, indicating strong adoption in East Asia, particularly for enterprise messaging integration (DingTalk, WeChat Work, Feishu).

## Backlog Watch

*Issues/PRs needing maintainer attention:*

| Issue/PR | Age | Reason for Concern |
|---|---|---|
| [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) | 31 days | **MCP tool inspection** — open since March 29, 3 comments, no assignee. Valuable for debugging MCP integrations |
| [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) | 33 days | **Cron job interruption** — English-language user confused by interrupt behavior, no maintainer response |
| [#3886](https://github.com/agentscope-ai/QwenPaw/issues/3886) | 2 days | **ACP compatibility with Hermes Agent** — `'types.SimpleNamespace' object is not iterable` — critical for ACP adoption |
| [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | 10 days | **Whisper transcription PR** — under review since April 19, significant UX improvement for voice input |
| [#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913) | 1 day | **Memory system enhancements** — comprehensive PR addressing 4 architectural limitations; needs review |
| [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) | 1 day | **Safe default timeout for delegate_external_agent** — prevents infinite waits in ACP delegation |

**⚠️ Maintainer attention needed:**
- The Debian 12 freeze (#3853) has 9 comments but no fix PR assigned — affects Linux users trying to run as non-root
- The ACP-Hermes compatibility bug (#3886) could block the ACP feature rollout if left unresolved
- The Whisper transcription PR (#3574) has been in review for 10 days; the underlying feature request (voice input in unsupported browsers) has significant demand

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-29

## Today's Overview

The project saw no new releases and no issues reported in the last 24 hours, indicating a quiet period from a user-engagement perspective. However, 15 open pull requests were updated, all authored by Dependabot, reflecting active dependency maintenance across Rust, JavaScript, GitHub Actions, and Docker components. The absence of any merged or closed PRs suggests that maintainer review bandwidth may be the current bottleneck, as no feature work or bug fixes were integrated today. Overall, the project is in a **stable maintenance phase**, with no reported regressions or community disruptions, but also no visible forward progress on new capabilities.

## Releases

**None.** No new releases were published today.

## Project Progress

**Merged/closed PRs today:** 0

No pull requests were merged or closed in the last 24 hours. All 15 open PRs are dependency bumps initiated by Dependabot, awaiting maintainer review. No feature implementations, bug fixes, or documentation improvements were landed.

## Community Hot Topics

**Total open PRs updated: 15** (all Dependabot, zero human comments or reactions)

There are no community-driven discussions active today. The only activity is automated dependency updates. Key bumps to note:

- **#[550]** [tokio 1.50.0 → 1.51.1](qhkm/zeptoclaw PR #550) — fixes a potential runtime panic; important for stability
- **#[553]** [softprops/action-gh-release 2.6.1 → 3.0.0](qhkm/zeptoclaw PR #553) — major version bump; may contain breaking changes to CI
- **#[555]** [zip 8.4.0 → 8.5.1](qhkm/zeptoclaw PR #555) — includes refactoring; low risk
- **#[557]** [astro 6.0.8 → 6.1.6](qhkm/zeptoclaw PR #557) — significant patch upgrade for the docs landing site

**Analysis:** The complete absence of user comments, reactions, or issue submissions suggests either a highly stable product with satisfied users, or low community engagement. Given the volume of open PRs, the latter interpretation (maintainer attention needed) is more likely.

## Bugs & Stability

**New bugs reported today:** 0

**Stability-relevant observations:**
- The **tokio upgrade (PR #550)** fixes a panic condition in Tokio v1.51.1, which is a latent stability improvement for ZeptoClaw's async runtime.
- The **lettre upgrade (PR #563)** to v0.11.21 adds `rustls-no-p…` support (likely `rustls-no-provider-override`), which may help with email sending reliability in constrained TLS environments.
- No crashes, regressions, or user-reported issues are present in the last 24-hour window.

**Severity ranking:** No active bugs to rank.

## Feature Requests & Roadmap Signals

**No feature requests submitted today.**

The absence of any feature requests or roadmap signals makes prediction difficult. However, the heavy dependency maintenance activity suggests the team is preparing for a new release or stabilizing the current codebase. Likely next priorities:
- **Better async runtime stability** (given the Tokio upgrade)
- **Updated documentation** (indicated by Astro/Starlight bumps across two docs subprojects: `/landing/zeptoclaw/docs` and `/landing/r8r/docs`)
- **CI/CD reliability improvements** (multiple GitHub Actions bumps, including `upload-artifact`, `cargo-deny-action`, and `install-action`)

## User Feedback Summary

**No explicit user feedback submitted today.**

Given zero issues and zero comments on PRs, direct user feedback is unavailable. The project appears to be in a state of **low community activity**, which may indicate either:
- Users are satisfied and encountering no problems
- The user base is small or non-vocal
- Documentation/onboarding may not be surfacing contribution pathways

## Backlog Watch

**Open PRs awaiting maintainer review:** 15

All 15 open PRs are Dependabot bumps, none have been reviewed or merged. The oldest are from 2026-04-28 (one day old). **No long-stale PRs exist**, but a growing backlog of unaddressed dependency updates could lead to drift or security exposure. Particular attention is recommended for:

- **PR #553** (softprops/action-gh-release 2.6.1 → 3.0.0) — a major version bump that may cause CI breakage if merged without review
- **PR #563** (lettre 0.11.20 → 0.11.21) — adds new features; safe but unmerged
- **PR #549** (debian base image update) — Docker security baseline change; should be prioritized

**No long-unanswered issues** exist (open issue count is zero).

---

**Overall Project Health:** ✅ Stable but dormant. Dependency maintenance is active, but zero human contributions and no merged work suggest a maintenance bottleneck. The project is healthy from a code freshness standpoint, but community engagement metrics are flat.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-29

## Today's Overview

ZeroClaw is in an **intense development phase** with 44 issues and 48 PRs updated in the last 24 hours, including 5 closed issues and 2 merged/closed PRs. The project is actively pushing toward its **v1.0.0 microkernel transition** (RFC #5574) with major infrastructure work underway, notably a large PR (#6179) creating CRUD endpoints for web onboarding parity. The maintainers are also recovering from a recent bulk revert, with PR #6169 recovering 4 small fixes lost in that revert. The community remains highly engaged, with several long-standing feature requests and bugs being actively addressed, though the web dashboard issue (#4866) remains a persistent pain point.

## Releases

**No new releases** today. The last release remains v0.7.0, with the v1.0.0 microkernel transition currently in RFC discussion.

## Project Progress

**Merged/Closed PRs: 2**

- **#3305 (CLOSED)**: `feat(channel): add wecom_ws AI bot channel` — A long-running PR (since March 12) that adds a WeCom WebSocket AI bot channel. This finally merges after a configuration conflict resolution, providing WeChat Work integration.

**Key PRs in Progress (non-merged but showing advancement):**

- **#6179** (open, XL): `feat(gateway,web,cli): web onboarding parity via per-property CRUD endpoints` — A massive new API surface under `/api/config/*` enabling dashboard and CLI to use the same config interface.
- **#5905** (open): `fix(#5720): add workspace bind-mount support to DockerSandbox` — Fixes a critical issue where absolute workspace paths were unreachable inside Docker containers.
- **#6164** (open, L): `feat(cron): manually trigger cron from webui` — Adds `POST /api/cron/{id}/run` endpoint with UI integration.
- **#6178** (open): `feat(providers/ollama): add num_ctx/num_predict/temperature tuning` — Adds explicit tuning surface for Ollama provider.
- **#6167** (open, XL): `fix(channels/acp): implement ACP protocol v1 with tool-call permission and back-channel` — Restores connectivity with external ACP consumers.

## Community Hot Topics

Most active discussions (by comments and reactions):

1. **#4866** [CLOSED] Web dashboard still not available (27 comments) — *Closed after extended discussion. The web UI and Tauri desktop app persistently show "Build it with: cd web && npm ci && npm run build".*

2. **#3059** [CLOSED] Cannot use Aliyun Bailian coding plan (10 comments, 1 👍) — *Feature request for Alibaba Cloud's coding platform integration.*

3. **#5574** [CLOSED] RFC: Intentional Architecture — Microkernel Transition (10 comments) — *The foundational architecture RFC for v0.7.0→v1.0.0 transition. Accepted.*

4. **#2767** [OPEN] Multi-Agent Routing (5 comments, 8 👍) — **Most upvoted open issue.** Users strongly desire multi-agent routing similar to OpenClaw.

5. **#3642** [OPEN] Provide "full" Docker image (8 comments, 3 👍) — *Feature flag gating prevents easy onboarding for WhatsApp and other features.*

6. **#5947** [OPEN] Schema v3 — batch breaking field migrations (6 comments) — *Critical merge blocker; all breaking config changes in one coordinated migration.*

7. **#5890** [OPEN] RFC: Multi-agent UX flow design (7 comments) — *Design discussion for multi-agent user experience.*

8. **#5674** [OPEN] Make `classify_channel_reply_intent` configurable (4 comments, 3 👍) — *Users frustrated by assistant ignoring them in 1:1 chats.*

**Underlying needs**: The community is pushing hard for **multi-agent capabilities** (#2767, #5890) and **easier onboarding** (#3642, #4866). The WeCom integration (#3305) and Matrix improvements (#6202, #6200) show demand for broader channel support.

## Bugs & Stability

**Severity S0 (data loss):**
- **#4627** [OPEN] `file_write` tool silently fails — written files invisible on host filesystem (risk: high, priority: p1). A tool reporting success but producing invisible files poses a **data loss risk**.

**Severity S1 (workflow blocked):**
- **#4866** [CLOSED] Web dashboard still not available — *Now closed; presumably fixed or documented.*
- **#6187** [CLOSED] Config reference guide missing — *Quickly closed (created 2026-04-28, closed 2026-04-28).*

**Severity S2 (degraded behavior):**
- **#6097** [OPEN] Local image reading failed — API models cannot read images generated by "skill" using local paths.
- **#6153** [OPEN] Matrix: voice transcription failed: Unsupported audio format '.' — Fails on Element Web/Android clients.

**Severity S3 (minor):**
- **#6157** [OPEN] Nextcloud Talk uses wrong bot message API — URL construction error with incorrect parameter passing.

**Fix PRs in progress:**
- **#5905** (open): DockerSandbox workspace bind-mount support
- **#6092** (open): Fix fallback provider config reading
- **#6107** (open): Fix reasoning_content handling for DeepSeek V4
- **#6169** (open): Recover 4 small fixes lost in bulk revert
- **#6204** (open): Align tool-call text preservation test

## Feature Requests & Roadmap Signals

**High-impact feature requests:**
1. **Multi-Agent Routing** (#2767, 8 👍) — The community's most wanted feature; routing to isolated agents with separate workspaces.
2. **Full Docker image** (#3642, 3 👍) — Feature flags block non-technical users from WhatsApp and other features.
3. **MCP resource and prompt support** (#4467, 3 👍) — Extending MCP integration beyond tool-only client.
4. **Raspberry Pi deployment guide** (#4704, 3 👍) — Building on Pi OOM-kills during linking.
5. **A2A Protocol Support** (#3566, 4 👍) — Agent-to-agent communication standard.
6. **Provider-scoped model fallback chains** (#4647) — More granular fallback control.
7. **Dream Mode — Memory Consolidation** (#5849) — Background reflection and learning during idle periods.

**Predictions for next version (v1.0.0):**
- **Multi-agent UX flow** (RFC #5890 in discussion period) likely to be accepted.
- **Schema v3 migration** (#5947) is a merge blocker — must ship before v1.0.0.
- **Microkernel transition** (#5574) is the architectural foundation for v1.0.0.
- **Web onboarding parity** (#6179) addresses the long-standing dashboard availability issue.
- **WeCom channel** (#3305) just merged — will be in next release.

## User Feedback Summary

**Pain points:**
1. **Web dashboard broken** (#4866) — Persistent across versions, blocked workflows for UI users.
2. **1:1 chat assistant ignores users** (#5674) — `classify_channel_reply_intent` gate is irrelevant in private chats.
3. **Feature gating blocks simple use** (#3642) — WhatsApp and other features require compilation with flags.
4. **File operations unreliable** (#4627) — Silent failure on write is a trust-breaker.
5. **Config documentation missing** (#6187) — Config reference guide was a 404 page.

**Satisfaction signals:**
- Active community engagement: 44 issues and 48 PRs updated in 24 hours.
- Quick maintainer response: #6187 (config docs) created and closed same day.
- WeCom channel (#3305) finally merged after 1.5 months — shows commitment to channel diversity.
- Multiple contributors active: singlerider, Audacity88, drbparadise, ilteoood all submitting PRs.

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

1. **#2503** (OPEN since March 2) — "Where is napcat channel" (8 comments) — User unable to find OneBot/NapCat option in channel list. No maintainer response noted.
2. **#2467** (OPEN since March 2) — "Webhook transforms" — Custom webhook paths and payload inspection. Blocked status but no clear path forward.
3. **#3090** (OPEN since March 10) — "Wecom(WxWork) channel support" — *Now addressed by PR #3305 which just merged.* Can be closed.
4. **#3672** (OPEN since March 16) — "Workspace file and memory change history" — Version history for agent self-modification. No maintainer activity.
5. **#3767** (OPEN since March 17) — "Cross-channel TOTP gate for critical tool execution" — Security feature for destructive commands. In progress but no updates since creation.
6. **#4703** (OPEN since March 25) — "Use QWEN_OAUTH_REFRESH_TOKEN" — Unanswered question on OAuth token refresh for Qwen Code.

**PRs needing review:**
- **#6197** (CI fix, XS) — Updating test runner config. Simple change.
- **#6195** (Skill meta fix, XS) — Denying unknown fields on SkillMeta. Clean fix for a silent data loss bug.
- **#6204** (Test alignment, XS) — Aligning tool-call text preservation test. Low risk.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*