# OpenClaw Ecosystem Digest 2026-05-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-02 04:21 UTC

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

# OpenClaw Project Digest — 2026-05-02

## 1. Today's Overview
The OpenClaw project shows **very high activity** today with **500 issues and 500 PRs** updated in the last 24 hours. The open/active issue count stands at **415**, with **85 closed**, indicating a maintenance-heavy period. On the PR side, **439 remain open** with **61 merged or closed**, suggesting a moderate merge velocity relative to the volume of outstanding work. No new releases were published today. The project is in a stabilization phase, with multiple high-severity performance regression bugs (CPU pinning, WebSocket starvation, deadlocks) reported across versions `2026.4.24` through `2026.4.29`, particularly affecting Windows, ARM64/Raspberry Pi, and Docker Desktop deployments.

## 2. Releases
**No new releases today.** The latest release remains `v2026.4.26`, which is the subject of several critical bug reports.

## 3. Project Progress
**61 PRs merged/closed today.** Notable closed PRs include:

- **[PR #75946](https://github.com/openclaw/openclaw/pull/75946)** (closed, merged) — `refactor: parse session reads without manager` — Removes unnecessary `SessionManager` instantiation from read-only gateway compatibility readers, improving async transcript refactoring.
- **[PR #54165](https://github.com/openclaw/openclaw/pull/54165)** (closed, merged) — `fix(heartbeat): strip [TOOL_CALL]/[TOOL_RESULT] bracket blocks from heartbeat replies` — Fixes the bug where heartbeat handler tool calls leaked raw bracket-format blocks into user-facing Telegram/Discord messages.
- **[PR #64732](https://github.com/openclaw/openclaw/pull/64732)** (closed) — `[Bug]: openclaw tool/help CLI surfaces break when plugins.allow omits synthetic command ids` — Fixed CLI availability issues when `plugins.allow` omits pseudo-plugin command names.

Open PRs advancing features:
- **[PR #74952](https://github.com/openclaw/openclaw/pull/74952)** — `feat(cron): add maintenance-window role isolation and deferred replay` (size XL, open) — Adds first-class daily maintenance window with hard role isolation.
- **[PR #74847](https://github.com/openclaw/openclaw/pull/74847)** — `feat(gateway): add SDK task ledger RPCs` (size XL, open) — Exposes task ledger operations via `@openclaw/sdk`.
- **[PR #74430](https://github.com/openclaw/openclaw/pull/74430)** — `[Feat] Add upload archive install RPC` (size XL, open) — Adds archive-based plugin installation via RPC.

## 4. Community Hot Topics
The following issues and PRs have drawn the most community engagement (by comment count and reactions):

- **[Issue #73303](https://github.com/openclaw/openclaw/issues/73303)** (12 comments, 2 👍) — Gateway restart hangs 3-4 minutes on macOS (LaunchAgent mode). A startup reliability regression affecting Mac users.
- **[Issue #73655](https://github.com/openclaw/openclaw/issues/73655)** (11 comments, 1 👍) — Gateway leak triad on plugin restart: EADDRINUSE retry loop, signal-handler accumulation, sync I/O starvation. A complex multi-leak scenario on version `2026.4.26`.
- **[Issue #34400](https://github.com/openclaw/openclaw/issues/34400)** (10 comments) — Long-standing feature request for recursive subdirectory search in `memory_search`. Users accumulating daily memory files over months need search across `memory/**/*.md`.
- **[Issue #75707](https://github.com/openclaw/openclaw/issues/75707)** (6 comments, 4 👍) — Gateway CPU pinned at 100%: root causes and workarounds (complements #75688). Highest reaction count today — users are clearly frustrated.
- **[Issue #75882](https://github.com/openclaw/openclaw/issues/75882)** (7 comments, 1 👍) — Gateway event-loop stalls cause cross-channel latency, missed replies, and channel disconnects — opened today.
- **[Issue #75703](https://github.com/openclaw/openclaw/issues/75703)** (4 comments, 1 👍) — Raspberry Pi 5 / ARM64 WS handler CPU-spin starvation. Users report clean rollback to v2026.4.23 resolves the issue every time.

**Underlying need:** The community is experiencing a **cluster of performance and stability regressions** introduced between versions `2026.4.24` and `2026.4.29`. The core issues center on **event-loop starvation**, **CPU pinning**, **WebSocket dispatch deadlocks**, and **resource leak accumulation** — all of which degrade the "always-on" promise of a personal AI agent. Users urgently need a **stable patch release** that resolves these regressions.

## 5. Bugs & Stability

### Critical (immediate attention needed)

1. **[Issue #75707](https://github.com/openclaw/openclaw/issues/75707) — Gateway CPU pinned at 100% idle** (v2026.4.29) — Root causes identified, workarounds documented. Affects all platforms. No fix PR yet.
2. **[Issue #75703](https://github.com/openclaw/openclaw/issues/75703) — Raspberry Pi 5 / ARM64 WS handler CPU-spin** — Reproducible across 3 releases; rollback to 4.23 resolves it. No fix PR yet.
3. **[Issue #75882](https://github.com/openclaw/openclaw/issues/75882) — Gateway event-loop stalls (10s-100s of seconds)** — Opened today. Affects Telegram, Slack, WhatsApp simultaneously. No fix PR yet.
4. **[Issue #73874](https://github.com/openclaw/openclaw/issues/73874) — Gateway HTTP/WS dispatch deadlock on Windows + Docker Desktop** — Regression in 2026.4.24, persists in .25 and .26. No fix PR yet.
5. **[Issue #75907](https://github.com/openclaw/openclaw/issues/75907) — core-plugin-tools blocks 30-40s on cold start (Windows + Node 24)** — Opened today. No fix PR yet.

### High (serious impact, widely reported)

6. **[Issue #73655](https://github.com/openclaw/openclaw/issues/73655) — Gateway leak triad on plugin restart** — EADDRINUSE, signal-handler accumulation, sync I/O. No fix PR yet.
7. **[Issue #73303](https://github.com/openclaw/openclaw/issues/73303) — Gateway restart hang 3-4 min on macOS** — No fix PR yet.
8. **[Issue #75137](https://github.com/openclaw/openclaw/issues/75137) — TUI process 89-99% CPU at idle** — Busy-loop behavior. No fix PR yet.
9. **[Issue #74907](https://github.com/openclaw/openclaw/issues/74907) — Multi-tool turn replay produces orphan `tool_use` blocks after compaction** — Causes 400 errors from Anthropic. No fix PR yet.

### Medium (notable but lower urgency)

10. **[Issue #75357](https://github.com/openclaw/openclaw/issues/75357) — Zero token usage logged despite endpoint returning streaming usage** — OpenAI-compatible endpoints. No fix PR yet.
11. **[Issue #74358](https://github.com/openclaw/openclaw/issues/74358) — Slack streaming preview completely silent when `toolProgress: false`** — Verbal mode broken since v2026.4.21. No fix PR yet.
12. **[Issue #75322](https://github.com/openclaw/openclaw/issues/75322) — `buildExecEventPrompt` silent-reply race causes incomplete-turn errors** — No fix PR yet.
13. **[Issue #73814](https://github.com/openclaw/openclaw/issues/73814) — Installer hangs with `curl | bash` on certain terminals** — Shell function truncation due to stdin consumption. No fix PR yet.

**Overall stability assessment:** The project is in a **red zone** for performance stability. Four critical regressions (CPU pinning, WS starvation, event-loop stalls, Windows Docker deadlocks) are actively affecting users across macOS, Linux ARM64, and Windows platforms. None have associated fix PRs as of today. The maintainers should consider a **hotfix release (2026.4.30)** prioritizing these high-severity items.

## 6. Feature Requests & Roadmap Signals

### Top community-requested features this period:

1. **[Issue #34400](https://github.com/openclaw/openclaw/issues/34400) — Recursive subdirectory search for `memory_search`** (10 comments, 0 👍) — High demand from users with growing daily memory archives. Likely next version inclusion: **Medium probability** — this is a straightforward enhancement with broad utility.

2. **[Issue #54531](https://github.com/openclaw/openclaw/issues/54531) — Force reply to originating channel** (8 comments) — Users report responses visible in Gateway UI but never delivered to Telegram/Discord/WhatsApp. Likely next version inclusion: **High probability** — this is a delivery reliability fix, not just a feature.

3. **[Issue #59413](https://github.com/openclaw/openclaw/issues/59413) — Per-candidate retry count for model fallback** (7 comments) — Essential for pool-based/proxy API providers. Likely next version inclusion: **Medium-high probability** — addresses a reliability gap for users of third-party API providers.

4. **[Issue #66944](https://github.com/openclaw/openclaw/issues/66944) — Plugin UI Extension System** (7 comments, 3 👍) — Allow plugins to contribute native pages to Control UI. Likely next version inclusion: **Low-medium probability** — significant architectural change.

5. **[Issue #60127](https://github.com/openclaw/openclaw/issues/60127) — Multi-tenancy support** (6 comments) — RBAC, scoped resources. Likely next version inclusion: **Low probability** — large scope, enterprise-focused.

6. **[Issue #57715](https://github.com/openclaw/openclaw/issues/57715) — `sessions.list` performance: N+1 transcript fallback** (4 comments) — 5-8s RPC calls causing backpressure. Likely next version inclusion: **Medium probability** — performance regression fix.

## 7. User Feedback Summary

**Pain points expressed by users:**

- **Performance regressions are the #1 frustration.** Multiple users reporting systems that were stable on `2026.4.23` are now unusable on `.24`–`.29`. One user summarized: *"Every release since 2026.4.24 produces the same boot-time WebSocket handler starvation"* ([#75703](https://github.com/openclaw/openclaw/issues/75703)).
- **Cross-channel reliability is degrading.** Users report simultaneous failures across Telegram, Slack, Discord, and WhatsApp during event-loop stalls ([#75882](https://github.com/openclaw/openclaw/issues/75882)).
- **Windows and Docker users feel underserved.** Multiple Windows-specific issues persist: installer hangs ([#73814](https://github.com/openclaw/openclaw/issues/73814)), Docker Desktop deadlocks ([#73874](https://github.com/openclaw/openclaw/issues/73874)), CLI corruption ([#48780](https://github.com/openclaw/openclaw/issues/48780)).
- **Silent reply failures undermine trust.** Users report responses visible in Gateway UI that never reach their phones — making the agent unreliable for async communication ([#54531](https://github.com/openclaw/openclaw/issues/54531)).
- **Session management instability** continues: subagent completion state unreliable ([#50165](https://github.com/openclaw/openclaw/issues/50165)), write-lock leaks causing >30min deadlocks ([#49157](https://github.com/openclaw/openclaw/issues/49157)), cron sessions pruned incorrectly ([#50248](https://github.com/openclaw/openclaw/issues/50248)).

**Satisfaction signals:**

- Users are still actively contributing bug reports with detailed root cause analysis — a sign of an engaged, technically sophisticated community.
- Several users provided workarounds (e.g., rollback to 4.23) and diagnostic tools, demonstrating collaborative debugging.

## 8. Backlog Watch

The following open issues and PRs require maintainer attention due to age, importance, or lack of response:

### Issues

- **[Issue #34400](https://github.com/openclaw/openclaw/issues/34400) — Recursive `memory_search`** — Open since **2026-03-04** (59 days). 10 comments, 0 maintainer responses. This is a simple, high-value feature request.
- **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001) — Write tool lacks append mode** — Open since **2026-03-08** (55 days). 7 comments. Causes silent data loss for multi-session workflows.
- **[Issue #43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unstable** — Open since **2026-03-11** (52 days). 7 comments. Multiple concurrent failure modes identified.
- **[Issue #47643](https://github.com/openclaw/openclaw/issues/47643) — Persistent Telegram Channel Issues on Windows** — Open since **2026-03-15** (48 days). 5 comments. Labeled `regression` — no fix PR yet.
- **[Issue #48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode does not inject messages mid-turn** — Open since **2026-03-16** (47 days). 6 comments, 1 👍. Root cause identified in commit `9889c6da5`.

### PRs

- **[PR #64494](https://github.com/openclaw/openclaw/pull/64494)** (no recent update shown) — Large PRs like the maintenance-window scheduler ([#74952](https://github.com/openclaw/openclaw/pull/74952)) and SDK task ledger ([#74847](https://github.com/openclaw/openclaw/pull/74847)) are still open after several days and need review.
- **[PR #74734](https://github.com/openclaw/openclaw/pull/74734)** — Legacy ACP stream key migration — Open since 2026-04-30, awaiting merge.

### Maintainer Attention Needed

- **Critical regressions (CPU, WS, deadlocks) have no fix PRs as of today.** This is the most urgent gap — the community needs a coordinated response from maintainers on the `2026.4.24`–`.29` regression cluster.
- **Windows and ARM64 users are disproportionately affected** and may be feeling abandoned. A dedicated triage for these platforms would improve community sentiment.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **rapid maturation phase**, characterized by intense stabilization cycles, security hardening, and platform diversification. Projects are converging on shared challenges—streaming reliability, multi-channel delivery, provider compatibility, and session management—while diverging in architectural approaches (monolithic vs. modular, local-first vs. cloud-integrated). The ecosystem shows a clear stratification: established reference implementations (OpenClaw) are battling performance regressions, while emerging competitors (Moltis, NanoBot) capitalize on rapid iteration cycles and lower technical debt. Enterprise-grade concerns (multi-tenancy, security boundaries, auditability) are becoming first-class requirements across multiple projects, signaling the shift from experimental hobbyist tools to production deployments.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | New Release | Health Score | Primary Activity Mode |
|---------|---------------|-------------|-------------|--------------|----------------------|
| **OpenClaw** | 500 | 500 | None | 🟡 **Moderate** | Bug triage + stabilization |
| **NullClaw** | 4 closed | 31 merged | None | 🟢 **Healthy** | Consolidation + stabilization |
| **ZeroClaw** | 50 | 50 | None (v0.8.0 planned) | 🟢 **Healthy** | Feature delivery + bug fixing |
| **Hermes Agent** | 50 | 50 | None | 🟡 **At Risk** | Maintenance backlog growing |
| **IronClaw** | 29 | 50 | None | 🟡 **Moderate** | Architecture rewrite (Reborn) |
| **PicoClaw** | 12 | 24 | Nightly build | 🟡 **Moderate** | Security hardening + regression fixing |
| **Moltis** | 6 | 11 | None | 🟢 **Healthy** | Rapid bug fixing + feature landing |
| **NanoBot** | 12 | 31 merged | None (patch imminent) | 🟢 **Healthy** | Intensive bug fixing |
| **NanoClaw** | 10 | 29 | None | 🟢 **Healthy** | Critical bug resolution |
| **CoPaw** | 7 | 3 | None | 🔴 **Stalled** | No merges, review bottleneck |
| **LobsterAI** | 0 | 6 stale | None | 🔴 **Stagnant** | All PRs stale 30+ days |
| **TinyClaw** | 0 | 0 | None | ⚪ **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚪ **Inactive** | No activity |

**Key observations:**
- **Top velocity:** NullClaw, Moltis, NanoBot, and NanoClaw show the highest merge-to-open ratios, indicating healthy review cycles.
- **Warning signs:** CoPaw (zero merges today), LobsterAI (6 stale PRs), and Hermes Agent (growing backlog) risk falling behind.
- **Plateaued:** OpenClaw's high raw numbers mask a stabilization crisis—critical regressions have no fix PRs.

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Ecosystem maturity:** Largest community (500 issues/PRs daily), most extensive plugin ecosystem, longest track record.
- **Feature breadth:** Unmatched integration surface—Telegram, Discord, WhatsApp, Slack, Matrix, CLI, TUI, Web UI.
- **Reference implementation:** Serves as the de facto standard; other projects (NanoBot #2072) explicitly request parity with OpenClaw's multi-agent routing.
- **SDK & tooling:** Advanced SDK (`@openclaw/sdk`), task ledger RPCs, archive-based plugin installation.

### Technical Approach Differences
- **Monolithic core + plugin architecture:** Unlike NullClaw (Zig-based, minimal dependencies) or IronClaw (WASM runtime), OpenClaw uses a Node.js core with extensive plugin hooks. This enables rapid feature addition but creates coupling that makes regressions harder to isolate.
- **Session management complexity:** OpenClaw's `SessionManager` abstraction is powerful but currently a source of deadlocks and leaks—other projects (NanoBot, Moltis) use simpler state machines.
- **Heartbeat/tool-call handling:** Unique bracket-format protocol (`[TOOL_CALL]`, `[TOOL_RESULT]`) caused the heartbeat leakage bug (#54165), a complexity other projects avoid.

### Community Size Comparison
| Metric | OpenClaw | Nearest Competitor |
|--------|----------|-------------------|
| Daily issue activity | 500 | 50 (ZeroClaw) |
| Daily PR activity | 500 | 50 (ZeroClaw/Hermes) |
| Active contributors | Very high | High (ZeroClaw, IronClaw) |
| Critical regressions | 5 active | 0 (Moltis, NanoBot) |

**Assessment:** OpenClaw retains dominance in raw community size but is losing trust due to the v2026.4.24–.29 regression cluster. Moltis and NanoBot are gaining mindshare through superior stability and faster fix turnaround.

## 4. Shared Technical Focus Areas

The following requirements appear across **3+ projects**, signaling industry-wide priorities:

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Multi-agent orchestration** | OpenClaw, Nanobot, ZeroClaw, Hermes | Native routing, subagent result delivery, session preemption |
| **Provider failover/resilience** | Moltis, NanoBot, OpenClaw, PicoClaw | Fallback chains, rate-limit handling, timeout configuration |
| **Streaming reliability** | NanoBot (#3555), OpenClaw, Moltis, LobsterAI | SSE termination, partial tag leakage, re-render optimization |
| **Security hardening** | PicoClaw (skills whitelisting), ZeroClaw (per-skill permissions), IronClaw (network boundaries), NullClaw (anti-spoofing) | Session isolation, env blocklist, subprocess sandboxing |
| **Cross-platform reliability** | OpenClaw (Windows, ARM64), ZeroClaw (install.sh), Hermes (Docker, Windows) | Consistent CI/CD, platform-specific regression testing |
| **Cost/usage visibility** | ZeroClaw (#6001), OpenClaw (#75357) | Token accounting, cost tracking dashboards |

### Critical Gap: API Provider Compatibility
- **DeepSeek:** Issues across NanoBot (#3584 reasoning validation), PicoClaw (#2743 proxy detection), CoPaw (#3996 thinking levels)
- **Xiaomi MiMo:** Problems with `reasoning_effort` across NanoBot (#3585), Hermes Agent (#17314)
- **OpenRouter:** Reasoning leak in PicoClaw (#2745), auth errors in Hermes (#14637)

## 5. Differentiation Analysis

| Dimension | OpenClaw | NullClaw | Moltis | ZeroClaw | NanoBot | IronClaw |
|-----------|----------|----------|--------|----------|---------|----------|
| **Language** | Node.js | Zig | Rust | Rust | Python | Rust |
| **Architecture** | Monolith + plugins | Minimal core | Modular (crates) | Modular (crates) | Plugin-based | WASM runtime |
| **Target user** | Power users, self-hosters | Embedded/ARM users | Desktop+macOS users | Linux power users | Python ecosystem | Enterprise/NEAR |
| **Key differentiator** | Largest ecosystem | Zig performance | macOS+Web UI focus | Skill forge system | Python ease of use | WASM sandboxing |
| **Deployment** | Docker, npm | Source build | Homebrew, macOS | install.sh | pip | Docker, installer |
| **Channel priority** | Telegram, Discord | CLI, WebSocket | Telegram, Discord, Web | Web UI, CLI | Discord, Matrix | Slack, Web |

### Strategic Positioning
- **OpenClaw:** Trades stability for breadth—best feature coverage but highest regression risk.
- **NullClaw:** Performance-optimized (Zig) with strong SBC/ARM support; emerging as the "lightweight champion."
- **Moltis:** Best desktop UX (macOS native, Web UI polish); rapid bug response sets the quality bar.
- **ZeroClaw:** Deepest skill/plugin ecosystem (SkillForge); schema-driven approach enables safe migrations.
- **NanoBot:** Fastest Python-native iteration; strongest provider compatibility focus.
- **IronClaw:** Most enterprise-oriented (WASM sandboxing, obligation handlers, NEAR ecosystem).

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Merging 20+ PRs/day)
- **NullClaw, NanoBot, Moltis, NanoClaw** — These projects have the healthiest merge pipelines. NanoBot fixed 9 bugs in 24 hours. Moltis closed 5 bugs with same-day fixes. These are the projects to watch for innovation velocity.

### Tier 2: Feature Delivery (10-20 PRs/day)
- **PicoClaw, ZeroClaw, IronClaw** — Heavy feature work in progress (IronClaw's Reborn rewrite, PicoClaw's security suite, ZeroClaw's schema v3). These projects are accumulating technical debt in the short term for architectural gains.

### Tier 3: Stabilization (>0 critical regressions)
- **OpenClaw** — High community engagement but in a "fixing mode" that may erode its leadership position if critical bugs remain unresolved.

### Tier 4: Stalled/At Risk
- **CoPaw** — Zero merges today, 15-day-old PR unmerged. Maintainer bandwidth issue.
- **LobsterAI** — 6 stale PRs (30+ days), zero community engagement. Project may be abandoned.
- **Hermes Agent** — Growing backlog (46 open issues, 47 open PRs) with low closure rate. Risk of contributor burnout.
- **TinyClaw, ZeptoClaw** — No activity. Moribund.

## 7. Trend Signals

### Platform Convergence
- **Cross-platform reliability is the #1 user demand.** OpenClaw's CPU pinning on Raspberry Pi, Hermes Agent's Windows locale crash, and PicoClaw's Android regression all point to the same need: CI/CD must cover ARM64, Windows, and macOS equally. Users will abandon projects that fail on their platform.

### Streaming as Table Stakes
- **Real-time streaming is no longer optional.** Projects that handle SSE correctly (Moltis, NanoBot) are earning user trust. Those with premature termination or tag leakage (OpenClaw, pre-fix NanoBot) face immediate backlash. The bar is "firehose correct, token-accurate streaming."

### Security is a Deal-Breaker
- **The "Agent Security Stack" is coalescing:** session isolation, skills whitelisting, subprocess sandboxing, env blocklisting, and anti-spoofing output boundaries. PicoClaw's `stevef1uk` PR series (#2322–#2327) is the most complete implementation. ZeroClaw's per-skill permissions (#5775) and IronClaw's obligation handlers (#3139) follow the same pattern. Projects without a security roadmap will be filtered out of production environments.

### The "Quiet Maturity" of Tool Ecosystems
- **Skill/plugin ecosystems are becoming the competitive moat.** OpenClaw has the largest, but ZeroClaw's SkillForge auto-integrator and PicoClaw's skills whitelisting are more advanced. The winner will be the project that balances ease of skill creation (ZeroClaw's auto-integrator) with security (PicoClaw's whitelisting).

### Multi-Agent is the Next Frontier
- **Everyone wants multi-agent orchestration** — OpenClaw (PR #74952), NanoBot (#2072), ZeroClaw (#5890), Hermes (delegate_task). The first project to ship a **production-grade, stable multi-agent runtime** (with subagent result delivery, session preemption, and provider failover) will leapfrog competitors.

### Recommendation for AI Agent Developers
- **For stability-sensitive deployments:** Choose **Moltis** (desktop) or **NullClaw** (ARM/SBC) — both have clean backlogs and rapid fix cycles.
- **For maximum ecosystem:** **OpenClaw** remains the most feature-complete, but pin to v2026.4.23 until the regression cluster is resolved.
- **For Python-native teams:** **NanoBot** offers the fastest iteration and best provider compatibility.
- **For enterprise/security-first:** **IronClaw** (WASM, NEAR ecosystem) or **PicoClaw** (skills whitelisting, session isolation).
- **Avoid:** **LobsterAI** (stagnant), **CoPaw** (stalled), **Hermes Agent** (backlog risk) for new production deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-02

## Today's Overview
NanoBot shows **very high development velocity** today, with 31 PRs updated in the last 24 hours (24 merged/closed) and 12 issues updated (9 closed). The project is in an intense **bug-fixing and polish phase** following recent feature expansions. Activity is concentrated around streaming reliability, Matrix channel stability, and provider compatibility (DeepSeek, Xiaomi, Anthropic). No new releases were cut today, but the volume of merged fixes suggests a patch release may be imminent. The community is actively contributing, with 7 open PRs indicating ongoing work.

## Releases
No new releases today (latest remains v0.1.5.post3). Based on the volume of merged bug fixes and stability improvements, a **v0.1.5.post4 or v0.1.6 release is likely within days**.

## Project Progress
**24 PRs merged/closed today**, reflecting substantial progress:

### Streaming & API Reliability (High Activity)
- **#3555** — Fixed premature SSE termination for OpenAI-compatible `/v1/chat/completions` with `stream=true` during tool-backed requests (fixes #3551)
- **#3577** — Prevents partial thinking/control tags (`<thi`, `<thin`, `<tho`) from leaking to users during streaming responses
- **#3579** — Anthropic auto-fallback to streaming when non-stream calls hit 10-minute timeout (fixes #2709)

### Matrix Channel Stability
- **#3578** — Stops Matrix sync loop on irrecoverable auth errors (M_UNKNOWN_TOKEN), preventing server spam (fixes #1851)

### Provider & Model Support
- **#3114** — Added LongCat as a registry-based OpenAI-compatible provider
- **#3560** — Fixed DeepSeek reasoning mode detection logic
- **#2337/#2379** — NapCatQQ channel (QQ alt account bot) with group chat and image support (merged retroactively applied)

### Bug Fixes & Ergonomics
- **#3582** — Fixed `NameError: name 'estimated'` in `estimate_prompt_tokens_chain` tiktoken fallback (fixes #3581)
- **#3528** — Sanitized URLs in `WebFetchTool` to strip markdown backticks/quotes from LLM-generated arguments
- **#3549** — Added `sender_id` to LLM runtime context for user-aware responses in group chats (fixes #3511)
- **#3561** — Added `origin_message_id` support and outbound message deduplication
- **#2334** — Made session message persistence more frequent (per iteration instead of only at end)
- **#3528** — URL sanitization for web fetch tool

## Community Hot Topics

### Most Active Issues
1. **[#2072 — Feature Request: Native Multi-Agent Routing](https://github.com/HKUDS/nanobot/issues/2072)** (CLOSED, 8 comments, 1 👍)
   - User requests native multi-agent routing similar to OpenClaw's implementation. Currently requires manually spinning multiple gateway instances. **Underlying need**: Simplified, orchestrated multi-agent deployments for production use.

2. **[#3292 — Session-Level Focus Tool: Persistent Task Awareness](https://github.com/HKUDS/nanobot/issues/3292)** (OPEN, 4 comments)
   - Requests a "task board" system so LLM agents maintain focus on primary goals across interruptions. The current `my` tool's scratchpad is insufficient. **Underlying need**: Long-running, context-aware task management for real-world workflows.

### Most Active PRs (by activity, all with "undefined" comment counts)
1. **[#3492 — Hardening public-deploy footguns on WebUI](https://github.com/HKUDS/nanobot/pull/3492)** (OPEN) — Security fixes for public tunneling (cloudflared, ngrok) — token minting, session deletion risks
2. **[#3583 — Improve beta WebUI turn completion and chat isolation](https://github.com/HKUDS/nanobot/pull/3583)** (OPEN) — Streaming UX improvements and chat-switch isolation fixes
3. **[#3580 — Tool-loop guardrails to break runaway tool calls](https://github.com/HKUDS/nanobot/pull/3580)** (OPEN) — Prevents small/local models from retrying failing tools 40x

## Bugs & Stability

### Critical
1. **[#3585 — `reasoning_effort: null` fails on Xiaomi MiMo](https://github.com/HKUDS/nanobot/issues/3585)** (OPEN) — Cannot disable thinking mode; `null` is silently ignored. **No fix PR yet.**
2. **[#3584 — DeepSeek API 'reasoning_content' validation error](https://github.com/HKUDS/nanobot/issues/3584)** (OPEN) — Latest build rejects DeepSeek requests due to strict API validation. **Bug report includes root cause analysis.**

### High Severity (All Fixed Today)
3. **[#3551 — OpenAI streaming closes early for tool-backed requests](https://github.com/HKUDS/nanobot/issues/3551)** → Fixed by **#3555**
4. **[#1851 — Matrix auth error spam](https://github.com/HKUDS/nanobot/issues/1851)** → Fixed by **#3578**
5. **[#3581 — NameError in estimate_prompt_tokens_chain](https://github.com/HKUDS/nanobot/issues/3581)** → Fixed by **#3582**
6. **[#2709 — Anthropic streaming timeout error](https://github.com/HKUDS/nanobot/issues/2709)** → Fixed by **#3579**

### Medium Severity (Fixed)
7. **[#3553 — Matrix reads old messages on restart](https://github.com/HKUDS/nanobot/issues/3553)** (CLOSED)
8. **[#3571 — ReadFileTool caches across sessions](https://github.com/HKUDS/nanobot/issues/3571)** (CLOSED)
9. **[#3511 — sender_id not passed to LLM](https://github.com/HKUDS/nanobot/issues/3511)** → Fixed by **#3549**

## Feature Requests & Roadmap Signals

### Likely in Next Release (v0.1.6)
- **Multi-Agent Routing** (#2072, closed) — May have been implemented via configuration documentation or a lightweight solution
- **Model Presets** (#3358, OPEN) — Quick model switching via `ModelPresetConfig` is under active development
- **HookCenter Plugin System** (#3564, OPEN) — A typed-event hook system replacing legacy AgentHook, enabling third-party plugins
- **Tool-Loop Guardrails** (#3580, OPEN) — Essential for small model usability

### Emerging Requests
- **Xiaomi model support** (#3518) — Already being addressed (see #3585 bug)
- **Feishu sender identity** (#3552, OPEN) — Needed for group chat user identification
- **Session-level focus/persistent task awareness** (#3292) — More sophisticated memory management for long-running tasks

## User Feedback Summary

### Pain Points (Expressed This Period)
1. **Complex multi-agent setup** — Users want "native" multi-agent routing instead of manual gateway/hatch orchestration (#2072)
2. **Streaming reliability** — Multiple users hit issues with premature stream termination and partial tag leakage during tool execution (#3551, #3577)
3. **Provider compatibility friction** — Xiaomi, DeepSeek, and Anthropic providers all had blocking issues this period (#3585, #3584, #2709)
4. **Group chat identity confusion** — Discord/Feishu users cannot distinguish senders in shared sessions (#3511)
5. **Token waste from runaway loops** — Small models repeating failed tool calls (#3580)
6. **Deployment security risks** — Public tunneling exposes WebUI bootstrap token and session deletion endpoints (#3492)

### Positive Signals
- Rapid fix turnaround: most critical bugs fixed within 24 hours
- Community contributors actively providing root cause analysis and patches (#3584, #3571)
- Feature requests are detailed and show real production use cases

## Backlog Watch

### Important Open Issues Needing Attention
- **[#3292 — Session-Level Focus Tool](https://github.com/HKUDS/nanobot/issues/3292)** (19 days, 4 comments) — Feature request with detailed motivation; no roadmap acknowledgment
  - **User impact**: High for production deployments needing task persistence
  - **Risk**: Could gather dust if not prioritized

- **[#3585 — Xiaomi MiMo reasoning_effort bug](https://github.com/HKUDS/nanobot/issues/3585)** (0 days, 0 comments) — Fresh, but blocks Xiaomi provider usability
  - **Urgency**: Critical for users of that provider

- **[#3584 — DeepSeek API validation error](https://github.com/HKUDS/nanobot/issues/3584)** (1 day) — Root cause identified by user; needs maintainer review
  - **Urgency**: Blocks all DeepSeek users on latest version

### Old PRs in Limbo
- **[#1759 — MCP tool context optimization](https://github.com/HKUDS/nanobot/pull/1759)** (54 days, OPEN) — Lazy loading and auto-demotion for MCP tools; reduces prompt token overhead
  - **Risk**: Stale; may need rebase given active development pace
- **[#3492 — Security hardening for public deploys](https://github.com/HKUDS/nanobot/pull/3492)** (4 days, OPEN) — Important for production use but no comments or reviews yet

### Unresolved Long-Standing Issues
- No issues older than 60 days received new updates, suggesting the backlog is well-maintained for a fast-moving project.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for **Hermes Agent** based on the GitHub data snapshot from **2026-05-02**.

---

## 🧠 Hermes Agent Project Digest — 2026-05-02

### 1. Today’s Overview
The **Hermes Agent** project is experiencing a surge in community activity, with **50 issues** and **50 PRs** updated in the last 24 hours. However, the majority of this activity is concentrated on **open items** (46 open issues, 47 open PRs), indicating a significant maintenance and triage backlog. While no new releases were cut today, the project is processing a high volume of bug reports, stability fixes, and feature proposals. The signal-to-noise ratio is high, with several **critical regressions** (Windows, Docker, security) demanding immediate maintainer attention.

### 2. Releases
**None.** No new versions were published on this date.

### 3. Project Progress (Merged/Closed Items Today)
Only **4 issues** and **3 PRs** were closed/merged in the last 24 hours, a low closure rate relative to the inflow.

- **Closed Issues:**
    - [Issue #14637](https://github.com/NousResearch/hermes-agent/issues/14637) — OpenRouter `AuthenticationError [HTTP 401]` (closed, likely misconfiguration or rate-limit fix).
    - [Issue #17690](https://github.com/NousResearch/hermes-agent/issues/17690) — Compression threshold warning resolution (closed as resolved/answered).
    - [Issue #18575](https://github.com/NousResearch/hermes-agent/issues/18575) — `not_allowed_token_type` logging noise reduced in gateway.
    - [Issue #18647](https://github.com/NousResearch/hermes-agent/issues/18647) — Long-session task degradation (closed, likely with a fix merged).

- **Merged PRs:**
    - [PR #18562](https://github.com/NousResearch/hermes-agent/pull/18562) — Fix: Skip `maybe_persist` for blocked results in the concurrent execution path.
    - Other merged updates likely involve the cleanup stack in [PR #18653](https://github.com/NousResearch/hermes-agent/pull/18653) and small CLI fixes.

### 4. Community Hot Topics
The most active discussions this cycle highlight **authentication**, **regression management**, and **platform integration issues**.

- **Long-standing regressions top engagement:**
    - [Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207) (7 comments) — Stale `.pyc` cache causing `ToolRegistry` TypeError. A classic Python caching issue that remains open for nearly a month.
    - [Issue #6352](https://github.com/NousResearch/hermes-agent/issues/6352) (6 comments) — Docker build broken on `main` due to pip resolver explosion. A **blocker for all Docker users** still unresolved.
    - [Issue #4396](https://github.com/NousResearch/hermes-agent/issues/4396) (5 comments) — CLI crash on narrow terminals (<80 cols). Affects mobile/VM users heavily.

- **Model/Provider confusion:**
    - [Issue #18140](https://github.com/NousResearch/hermes-agent/issues/18140) (3 comments) — Inability to use Opencode Zen (falls back to Claude). High user frustration.
    - [Issue #18586](https://github.com/NousResearch/hermes-agent/issues/18586) (3 comments) — `delegate_task` resolves wrong `base_url` for opencode-go, causing HTTP 404.

- **Environment leak / security:**
    - [Issue #4427](https://github.com/NousResearch/hermes-agent/issues/4427) (2 comments, P0) — Subprocess env blocklist bypassed via `/proc/environ`. Low comment count but **highest priority**.

### 5. Bugs & Stability
Several serious bugs were reported today, spanning platform support, security, and tool accuracy.

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | Subprocess can read stripped API keys via `/proc/pid/environ` | No |
| **P1** | [#18637](https://github.com/NousResearch/hermes-agent/issues/18637) | **Windows 11:** Terminal fails (exit 126), file access broken, doctor crash on GBK locale | No |
| **P1** | [#18594](https://github.com/NousResearch/hermes-agent/issues/18594) | `get_hermes_home()` falls back to `~/.hermes`, causing cross-profile data corruption | No |
| **P2** | [#6352](https://github.com/NousResearch/hermes-agent/issues/6352) | Docker build broken on `main` (pip resolution) | No |
| **P2** | [#18646](https://github.com/NousResearch/hermes-agent/issues/18646) | `send_message` ignores WhatsApp group JID, sends to home channel | No |
| **P2** | [#18620](https://github.com/NousResearch/hermes-agent/issues/18620) | Telegram image files sent as “documents” are rejected | No |
| **P2** | [#18140](https://github.com/NousResearch/hermes-agent/issues/18140) | Opencode Zen always falls back to Claude | [PR #18651](https://github.com/NousResearch/hermes-agent/pull/18651) (Fix: stale Qwen model resolution) |
| **P2** | [#18586](https://github.com/NousResearch/hermes-agent/issues/18586) | Wrong `api_mode`/`base_url` for delegate subagents | No |
| **P2** | [#18607](https://github.com/NousResearch/hermes-agent/issues/18607) | Agent killed without compression when `max_iterations` exhausted | [PR #18607](https://github.com/NousResearch/hermes-agent/pull/18607) |

**Regression Signal:** The project is accumulating high-severity, long-standing bugs (Issues #6352, #4396, #6207) that are driving user frustration. The **Docker build** and **Windows** regressions are particularly critical for onboarding.

### 6. Feature Requests & Roadmap Signals
Several feature requests indicate user demand for better **multi-tenancy**, **automation**, and **model flexibility**.

- **Strong demand (3 reactions):** [Issue #4431](https://github.com/NousResearch/hermes-agent/issues/4431) — Per-topic/per-chat configuration overrides (personality, system prompt per group). This is a key enterprise/community management feature.
- **Workflow automation:** [Issue #4439](https://github.com/NousResearch/hermes-agent/issues/4439) — Action Recorder to Cron Scheduler (record workflows, replay on schedule). Signals desire for an "agent macro" system.
- **Model control:** [Issue #18591](https://github.com/NousResearch/hermes-agent/issues/18591) — Per-task model override for `delegate_task` subagents. Users want granular cost/performance control.
- **Spreadsheet skill:** [Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438) — Rich xlsx/csv skill as a built-in tool.
- **Auto-switching skins:** [Issue #18625](https://github.com/NousResearch/hermes-agent/issues/18625) — Day/night skin auto-switch for CLI.

**Likely for next version:** The per-topic config (Issue #4431) and delegation model override (Issue #18591) are high-value but complex. The **spreadsheet skill** (Issue #4438) is relatively self-contained and could ship soon.

### 7. User Feedback Summary
- **Pain Points:**
    - Docker users are **effectively blocked** from building on `main` (Issue #6352).
    - macOS gateway restart is unreliable (Issue #4403).
    - Windows users report the agent is **unusable out-of-the-box** due to locale and permission issues (Issue #18637).
    - Model/provider configuration is confusing (Opencode Zen, Xiaomi MiMo) — users report silent fallback to Claude or wrong API endpoints.
- **Satisfaction Signals:**
    - Feature requests are getting **solid engagement** (reactions, follow-on discussions), indicating a healthy, invested user base.
    - The response time on PRs (e.g., #18651, #18607 fix PRs same day as issue) shows maintainers are actively triaging *some* areas.
- **Dissatisfaction Signals:**
    - Long-standing unresolved bugs (P1/P2 for weeks) are eroding trust.
    - The security bypass (Issue #4427) is a **significant liability** for any deployment involving untrusted code.

### 8. Backlog Watch
These items are **high priority or high impact** but have received no maintainer activity or sit unresolved for weeks.

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#6352](https://github.com/NousResearch/hermes-agent/issues/6352) | ~23 days | **Docker build broken.** Blocks all new Docker deployments. |
| [#4396](https://github.com/NousResearch/hermes-agent/issues/4396) | ~31 days | CLI crash on narrow terminals. Affects mobile/VM users. |
| [#6207](https://github.com/NousResearch/hermes-agent/issues/6207) | ~24 days | Stale `.pyc` cache causing TypeError. Classic but unaddressed. |
| [#15697](https://github.com/NousResearch/hermes-agent/issues/15697) | ~7 days | Chrome not found in official Docker image. Makes browser tool unusable. |
| [#17314](https://github.com/NousResearch/hermes-agent/issues/17314) | ~3 days | Xiaomi MiMo `reasoning_effort` has no server-side effect. Low priority but signals incomplete provider integration. |

**Maintainer Signal:** The project needs a **triage sprint** — the closure rate (3 PRs / 4 issues) is outpaced ~10x by new issues. The Docker build fix (Issue #6352) and the security bypass (Issue #4427) should be prioritized as blockers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-02

## Today's Overview

Project activity is **high** today with 12 issues updated and 24 PRs updated in the last 24 hours, indicating strong community engagement and active development. A new nightly build (**v0.2.8-nightly.20260502.6e1fab80**) was released, though it carries a stability warning. The maintainers merged 13 PRs and closed one issue, while the open issue count grew with several fresh bugs reported against the latest stable release (v0.2.8). Security hardening, provider compatibility, and channel stability remain the dominant themes across both open PRs and new issues.

## Releases

- **Nightly Build — v0.2.8-nightly.20260502.6e1fab80**  
  This is an automated nightly build that may be unstable. No changelog beyond the diff between v0.2.8 and main is available. Users are advised to **use with caution** and not deploy in production. No breaking changes or migration notes have been published.

## Project Progress (Merged/Closed PRs — 13 items)

13 PRs were merged or closed today, representing significant forward momentum:

1. **[#2739 — fix(telegram): wrap markdown pipe tables in fenced code blocks](https://github.com/sipeed/picoclaw/pull/2739)** (merged)  
   Fixes garbled Telegram output when LLMs return pipe tables by wrapping them in fenced code blocks for MarkdownV2 mode.

2. **[#2743 — fix(openai_compat): detect DeepSeek models behind non-deepseek proxies](https://github.com/sipeed/picoclaw/pull/2743)** (merged)  
   Enhances DeepSeek reasoning detection for users who proxy DeepSeek through third-party endpoints (e.g., opencode.ai, avian.io).

3. **[#2326 — feat: Add K3s deployment manifests and specialized Dockerfiles](https://github.com/sipeed/picoclaw/pull/2326)** (merged)  
   Production-grade Kubernetes (K3s) deployment manifests and multi-arch Docker build definitions.

4. **[#2325 — feat: Add Skills Whitelisting for enhanced agent security](https://github.com/sipeed/picoclaw/pull/2325)** (merged)  
   Introduces a whitelisting mechanism restricting which skills can be discovered/installed — a critical security layer.

5. **[#2324 — feat: add asynchronous /chat HTTP endpoint for external integrations](https://github.com/sipeed/picoclaw/pull/2324)** (merged)  
   New REST /chat endpoint enabling external systems (Teams bots, custom frontends) to interact with agents.

6. **[#2323 — feat: add NVIDIA and Azure AI providers](https://github.com/sipeed/picoclaw/pull/2323)** (merged)  
   Native support for NVIDIA’s integration gateway and Azure AI Foundry (Studio) — expands provider ecosystem.

7. **[#2322 — feat: Implement Session-Level Workspace Isolation and Security Hardening](https://github.com/sipeed/picoclaw/pull/2322)** (merged)  
   Robust session-level workspace isolation and hardened security wrapping for untrusted tool outputs — protects against prompt injection and cross-session data leakage.

8. **[#2102 — Fix/isolation hardening](https://github.com/sipeed/picoclaw/pull/2102)** (merged)  
   Additional fixes to project isolation.

9. **[#2095 — feat: Multi-User Session Isolation](https://github.com/sipeed/picoclaw/pull/2095)** (merged)  
   Multi-tenant isolation and security hardening, fixing transient agent instances losing tool accessibility.

10. **[#1991 — Chat async](https://github.com/sipeed/picoclaw/pull/1991)** (merged)  
    Made the /chat API asynchronous.

11. **[#1963 — Azure skills whitelisting](https://github.com/sipeed/picoclaw/pull/1963)** (merged)  
    Skills whitelisting for Azure provider.

12. **[#2313 — Multi-User Support, Security Hardening, Skills whitelisting](https://github.com/sipeed/picoclaw/pull/2313)** (merged)  
    Integration of the "Agent Shield" security suite alongside architecture stabilization.

13. **[#2327 — feat: Final Security Shield & Hardening Tidy-up](https://github.com/sipeed/picoclaw/pull/2327)** (merged)  
    Final consolidation of security architecture and system-level hardening from the `security_shield_v2` monolith.

**Key takeaway:** A massive wave of security hardening and infrastructure PRs (authored by **stevef1uk**) has been merged, including session isolation, skills whitelisting, K3s support, new providers (NVIDIA, Azure), and an async HTTP endpoint. This represents a major infrastructure and security upgrade.

## Community Hot Topics

1. **[#1757 — [BUG] Channel error when scheduling hourly tasks](https://github.com/sipeed/picoclaw/issues/1757)** (6 comments, open since March 18)  
   User on RPi Zero W (v0.2.3) reports channel errors when agents are asked to perform tasks every hour. This long-standing issue with 6 comments indicates cron+channel interaction bugs are persistent and affect low-resource deployments.

2. **[#2376 — [Feature] Option to disable Enter key from sending messages](https://github.com/sipeed/picoclaw/issues/2376)** (4 comments, 1 👍)  
   Android users request the ability to use Enter for new lines rather than sending, with a separate send button. A common UX pain point for mobile users of chat interfaces.

3. **[#2745 — [BUG] OpenRouter reasoning model leaks thinking into assistant content](https://github.com/sipeed/picoclaw/issues/2745)** (new today, 0 comments)  
   Freshly reported — a reasoning leak where the model's internal reasoning preamble appears in the final assistant message instead of just the answer. This could be a significant privacy/UX bug.

4. **[#2404 — [Feature] Add config for streaming HTTP requests](https://github.com/sipeed/picoclaw/issues/2404)** (3 comments, 1 👍)  
   Users want `"streaming": true` configuration support in config files, mirroring OpenAI client APIs. Indicates demand for more flexible LLM backend integration.

**Underlying needs:**  
- Mobile UX parity (Enter key behavior, Android data access)  
- Channel reliability under scheduled/automated workloads  
- Clean separation of model reasoning from final output  
- Streaming support for real-time LLM interactions

## Bugs & Stability

### Critical
- **[#2745 — OpenRouter reasoning model leaks thinking](https://github.com/sipeed/picoclaw/issues/2745)** (new)  
  **Severity: HIGH** — Reasoning leaks expose internal model processing to end users. No fix PR exists yet. Impact: privacy violation and confusing user experience.

- **[#2738 — Image recognition broken in v0.2.8](https://github.com/sipeed/picoclaw/issues/2738)** (2 comments, new)  
  **Severity: HIGH** — Uploaded images cannot be recognized after upgrading. This is a regression in the latest stable release. No fix PR identified.

### High
- **[#2744 — Android v0.2.8: cannot access any data from tabs](https://github.com/sipeed/picoclaw/issues/2744)** (new, 0 comments)  
  **Severity: HIGH** — Android app appears completely non-functional after update, preventing data access across all tabs.

- **[#2742 — Gateway starts with no channels in v0.2.8](https://github.com/sipeed/picoclaw/issues/2742)** (new, 0 comments)  
  **Severity: HIGH** — Telegram channels fail to initialize at startup. A critical connectivity regression.

### Medium
- **[#2602 — OAuth Authentication Errors](https://github.com/sipeed/picoclaw/issues/2602)** (3 comments, open since April 20)  
  **Severity: MEDIUM** — OAuth failures for OpenAI and Antigravity providers. Stale but unresolved.

### Hints of Fixes
- **[PR #2740 — fix(deepseek): capture reasoning_content from streaming](https://github.com/sipeed/picoclaw/pull/2740)** (open, related to reasoning handling improvements)  
  Addresses DeepSeek reasoning content capture — may inform fixes for the OpenRouter reasoning leak (#2745).

**Assessment:** v0.2.8 has introduced multiple critical regressions affecting image processing, Android UI, and channel connectivity. Users upgrading should be cautious.

## Feature Requests & Roadmap Signals

### User-Requested Features (Most Likely for Next Version)

1. **Streaming HTTP config** ([#2404](https://github.com/sipeed/picoclaw/issues/2404)) — `"streaming": true` in config. High probability given multiple similar requests.

2. **Serial port (UART) tool support** ([#2649](https://github.com/sipeed/picoclaw/issues/2649)) — User requests parity with existing I2C/SPI tools for embedded development. Aligns with PicoClaw's embedded/IoT focus.

3. **GitHub Copilot provider support** ([#2652](https://github.com/sipeed/picoclaw/issues/2652)) — New provider request; lower priority but signals enterprise adoption interest.

4. **Native audio input for multimodal LLMs** ([#2626](https://github.com/sipeed/picoclaw/pull/2626)) — Open PR adding audio field support. Likely to land soon given community interest.

5. **Enter key configuration** ([#2376](https://github.com/sipeed/picoclaw/issues/2376)) — Simple UX fix; high-impact, low-effort.

### Roadmap Signals

The **stevef1uk PR series** (K3s, Azure, NVIDIA, session isolation, skills whitelisting) signals a strong push toward:
- **Production/enterprise readiness** (security, multi-tenancy, Kubernetes)
- **Provider diversification** (Azure, NVIDIA, OpenRouter)
- **API extensibility** (async /chat endpoint)

**Prediction:** Next stable release (v0.2.9) will focus on fixing v0.2.8 regressions first, then may include streaming config, audio input, and the security/shield features now merged into main.

## User Feedback Summary

### Pain Points
- **v0.2.8 regressions** — Multiple users report broken functionality (images, Android, channels) immediately after upgrading. Frustration likely high.
- **Cron scheduling instability** (Issue #1757) — Long-standing issue on low-resource hardware (RPi Zero W); users feel unsupported.
- **Mobile UX** — Enter key behavior and tab data access on Android are basic usability concerns.
- **Provider compatibility** — OAuth errors, reasoning leaks, and DeepSeek detection challenges frustrate users trying diverse backends.

### Use Cases
- **Home automation/scheduling** — Agents performing hourly tasks (Issue #1757)
- **Embedded/IoT development** — UART/serial tool requests (Issue #2649)
- **Enterprise deployment** — K3s manifests and skills whitelisting show interest in production use
- **Mobile-first interaction** — Android Termux users running PicoClaw on phones

### Satisfaction Indicators
- **Positive:** The flurry of merged PRs shows maintainers are responsive to security and infrastructure needs.
- **Negative:** The v0.2.8 release quality has eroded trust; three critical bugs reported in the first day post-release.

## Backlog Watch

### Issues Needing Maintainer Attention

1. **[#2651 — How to build on Windows?](https://github.com/sipeed/picoclaw/issues/2651)** (open since April 24, 3 comments, stale)  
   No maintainer response. Windows users lack build documentation — basic barrier to adoption.

2. **[#2602 — OAuth Authentication Errors](https://github.com/sipeed/picoclaw/issues/2602)** (open since April 20, 3 comments, stale)  
   Unresolved OAuth failure for OpenAI and Antigravity. No fix PR; users may be blocked from using these providers.

3. **[#1533 — Tool not found {tool=skill_vetter}](https://github.com/sipeed/picoclaw/issues/1533)** (closed today but with only 1 comment; the root cause may recur given the naming convention issue remains)  
   Skill name hyphen-to-underscore conversion bug. Closed without clear resolution evidence — should be monitored.

### PRs Needing Review

4. **[#2270 — fix(config): handle non-addressable SecureString values](https://github.com/sipeed/picoclaw/pull/2270)** (open since April 2, stale, 0 comments)  
   Fixes a config panic with SecureString values. Over a month with no reviewer feedback — critical memory safety fix.

5. **[#2128 — fix(tools): ensure tool parameters have valid JSON Schema properties](https://github.com/sipeed/picoclaw/pull/2128)** (open since March 28, stale, 0 comments)  
   Fixes tool schema validation errors with strict OpenAI-compatible APIs. Over a month stale — affects users of LM Studio and similar local LLM servers.

---

**Summary:** PicoClaw is in a **transition period** — major security and infrastructure improvements are being merged, but the v0.2.8 stable release has introduced significant regressions. Community trust may be temporarily strained. The immediate priority should be hotfixes for the three critical v0.2.8 bugs (image recognition, Android data access, channel initialization) while the longer-term security and provider roadmap matures.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for 2026-05-02, generated from the provided GitHub data.

---

## NanoClaw Project Digest — 2026-05-02

### 1. Today's Overview
Project activity remains **high**, with a strong focus on stabilization and operational integrity following recent feature merges. Yesterday saw **10 issues updated** and **29 pull requests (PRs) updated** or touched, indicating a healthy but "hot" codebase with many concurrent changes. The maintainer team appears to be dealing with a wave of critical bugs identified in the `opencode` provider and the host sweep logic, which were rapidly addressed via merged PRs. While no new releases were published, the sheer volume of high-severity bug fixes being resolved suggests a release candidate might be imminent to push these improvements to users.

### 2. Releases
**None.** No new versions of NanoClaw were released in the last 24 hours. The project is currently between releases, with many critical fixes recently merged.

### 3. Project Progress
A significant number of PRs were merged or closed yesterday, primarily focused on bug fixes and tooling improvements.

- **Critical Bug Fixes (Merged):**
    - **OpenCode Provider:** Three urgent bugs were resolved: the `wrapPromptWithContext` function no longer sends literal `@./...md` lines (#2150, fixed by #2153 and #2165); the `SIGKILL` process leak (#2148, fixed by #2152); and the hardcoded 90s idle timeout (#2149, fixed by #2152).
    - **Host Sweep:** The orphan `processing_ack` row loop that caused instant SIGKILL on respawn (#2147) was fixed in PR #2151.
    - **Agent Runner:** The `open inbound.db fresh per messages_in read` fix (#2160) was closed, likely addressing a database locking or state issue.
- **Chore & Tooling:**
    - PR #2171 was merged, switching the pre-commit hook to `lint-staged` to improve developer experience by running formatters only on changed files.
- **Feature/Integration (Merged):**
    - PR #2170 added bidirectional WhatsApp media handling, allowing both inbound and outbound image/file transfers via the WhatsApp skill.
    - PR #2180 (Upgrade to 2.0.0 base) was closed, suggesting a major foundational upgrade or migration step for skills.

### 4. Community Hot Topics
The most active discussion was centered on the **OpenCode provider bugs**, which dominated the high-severity issues and saw fast resolution.

- **[#2150 OpenCode provider: wrapPromptWithContext sends literal @./...md lines](https://github.com/qwibitai/nanoclaw/issues/2150)**
    - **Activity:** 5 comments. **Underlying Need:** Users were experiencing "silent context loss," meaning their Claude agents were operating without the critical instructions provided in `CLAUDE.md` files. This underscores the community's dependence on accurate context injection for agent behavior control.
- **[#2177 Active-query push-mode stalls silently after a turn produces empty-text result](https://github.com/qwibitai/nanoclaw/issues/2177)**
    - **Activity:** 2 comments. **Underlying Need:** A generic system-level bug affecting non-chat surfaces (like Telegram webhooks). The user identified a silent failure that halts message processing without error, highlighting a need for more robust error handling and non-chat surface support.

### 5. Bugs & Stability
Stability was the primary theme of the day, with a cluster of **High** and **Medium** severity bugs reported and subsequently fixed.

- **High Severity (All Fixed):**
    - **[#2150] Context Loss (OpenCode):** Agent instructions silently ignored. Fixed by PRs #2153 & #2165.
    - **[#2148] Process Leak (OpenCode):** Underlying binary holds port 4096 after `SIGKILL`. Fixed by PR #2152.
    - **[#2147] Claim-Stuck Loop (Host Sweep):** Orphan database rows instantly kill new process spawns. Fixed by PR #2151.
- **Medium Severity (Fixed):**
    - **[#2149] Hardcoded Timeout (OpenCode):** 90s idle timeout wrong for local models. Fixed by PR #2152.
- **New Unresolved (Open):**
    - **[#2177] Push-Mode Stall (Active-Query):** System hangs silently after an empty turn.
    - **[#2172] Case-Insensitive Slug Mismatch (macOS):** `build.sh` and Node.js compute different container image slugs on case-insensitive filesystems, causing build failures.

### 6. Feature Requests & Roadmap Signals
The newest issues signal a clear strategic push toward **Operational Maturity** and **V2 Migration**.

- **Interrupted-Run Detection (B-01 & B-02):** Issues [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) and [#2174](https://github.com/qwibitai/nanoclaw/issues/2174) propose a formal framework for detecting and recovering from interrupted agent runs. This suggests the next minor release will include a "durability" layer for message processing.
- **NanoClaw V1 → V2 Upgrade:** Issue [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) and PR [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) formalize the migration path. This is a major roadmap item, focusing on preserving operational contracts (permissions, calendar safety, etc.) during the upgrade.
- **New Provider Support:** The open PR for **Google Gemini** support (#2136) and a newly opened PR for **Home Assistant MCP** (#1327) indicate the project is actively expanding its backend and ecosystem integration options. These are strong candidates for the next major feature release.

### 7. User Feedback Summary
User pain points are currently dominated by **reliability and configuration** issues.

- **Pain Points:** Users are frustrated by silent failures and invisible configurations. The "silent context loss" in the OpenCode provider (#2150) is a critical hazard as it causes agents to malfunction without user awareness. The invisible-sudo hang in the setup flow (PR #2054) remains unresolved, creating a poor first-install experience for some.
- **Use Cases:** Active users are pushing the boundaries from chat into transactional systems (Telegam WebApp submissions via #2177) and home automation (#1327). This indicates a growing demand for NanoClaw as a general-purpose automation gateway, not just a chat assistant.
- **Satisfaction:** Satisfaction is likely mixed; while the rapid bug-fix velocity (closing several high-severity issues in one day) is commendable, the fact that these critical bugs existed suggests the provider system needs more robust testing before being released.

### 8. Backlog Watch
Several long-standing PRs remain open and may require maintainer attention.

- **[#701 - Inject date/time context into all agent prompts](https://github.com/qwibitai/nanoclaw/pull/701)** (Opened March 4) & **[#746 - fix(whatsapp): prevent service restart hammering](https://github.com/qwibitai/nanoclaw/pull/746)** (Opened March 5)
    - **Status:** Marked as "Blocked." These are foundational fixes from months ago that address agent awareness (date/time) and service stability (WhatsApp). Their stagnation is concerning, as they represent core quality-of-life improvements.
- **[#1076 - OAuth credential proxy — auto-refresh tokens](https://github.com/qwibitai/nanoclaw/pull/1076)** (Opened March 14)
    - **Status:** Needs Review. A critical fix for OAuth-based integrations (e.g., Gmail, Google Drive) that is apparently still awaiting review. This could be a source of user frustration for those using OAuth flows.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-02

## Today's Overview
NullClaw shows a high velocity day with 31 merged/closed PRs and 4 closed issues in the last 24 hours. The project appears to be in a consolidation phase following a major feature push, with extensive stabilization work across the gateway, subagent system, memory backends, and security tooling. All open issues from the last two weeks have been addressed and closed. Two new PRs remain open for review, both touching critical system-level compatibility. The absence of new releases suggests maintainers are bundling changes for a future version.

## Releases
No new releases published in the last 24 hours.

## Project Progress
- **Gateway stability**: [#853](https://github.com/nullclaw/nullclaw/pull/853) fixed the accept-loop CPU spin (issue #851) by adding bounded backoff on transient errors. [#878](https://github.com/nullclaw/nullclaw/pull/878) (open) proposes using `nanosleep` on POSIX to truly suspend the OS thread instead of cooperative yield.
- **Subagent reliability**: [#854](https://github.com/nullclaw/nullclaw/pull/854) fixed subagent result delivery by persisting origin routing metadata and sending completions back to the original channel context (fixes #849).
- **Concurrency model**: [#855](https://github.com/nullclaw/nullclaw/pull/855) added session-level preemption and refactored daemon inbound handling into bounded thread pools, addressing the single-session blocking issue (#832).
- **Network stack hardening**: [#858](https://github.com/nullclaw/nullclaw/pull/858) removed problematic per-call empty-buffer adapters in Zig 0.16 networking, fixing socket hangs. [#877](https://github.com/nullclaw/nullclaw/pull/877) fixed Mattermost channel's post body allocation ordering.
- **HTTP infrastructure**: [#881](https://github.com/nullclaw/nullclaw/pull/881) (open) proposes replacing all curl subprocess calls with native `std.http` wrappers across providers, channels, gateway, and tools.
- **Security enhancements**: [#880](https://github.com/nullclaw/nullclaw/pull/880) wrapped web_fetch/web_search output with anti-spoofing boundaries. [#875](https://github.com/nullclaw/nullclaw/pull/875) added medium-risk tier classification for network commands like `curl`/`wget`.
- **Memory systems**: [#852](https://github.com/nullclaw/nullclaw/pull/852) improved archive provenance and recall quality. [#712](https://github.com/nullclaw/nullclaw/pull/712) (merged) added Knowledge Graph memory backend using SQLite recursive CTEs.
- **Tool customization**: [#834](https://github.com/nullclaw/nullclaw/pull/834)-[#837](https://github.com/nullclaw/nullclaw/pull/837) added tool customization configuration schema, per-tool enable/disable, trigger-based prioritization, and external customization file support.
- **Skills system**: [#831](https://github.com/nullclaw/nullclaw/pull/831) updated web skill discovery to Agent Skills RFC 0.2.0 with SHA-256 digest verification.
- **Tailscale tunnel**: [#850](https://github.com/nullclaw/nullclaw/pull/850) added encrypted `auth_key` support for Tailscale tunnel setup.
- **Capabilities formatting**: [#863](https://github.com/nullclaw/nullclaw/pull/863) improved `capabilities` output with colored table format and TTY detection.

## Community Hot Topics
- **#851 Gateway CPU spin** ([Issue](https://github.com/nullclaw/nullclaw/issues/851)): 4 comments, reported a critical bug where `accept4()` returning `EAGAIN` on Raspberry Pi caused 100% CPU core usage. Promptly fixed by [#853](https://github.com/nullclaw/nullclaw/pull/853). The underlying need for robust error handling in resource-constrained environments was well-addressed.
- **#832 Concurrent interactivity** ([Issue](https://github.com/nullclaw/nullclaw/issues/832)): Requested non-blocking session handling when agents run long jobs. The heavy refactor in [#855](https://github.com/nullclaw/nullclaw/pull/855) directly addresses this, suggesting the team prioritizes UX for agent workflow management.

## Bugs & Stability
- **Critical (fixed)**: Gateway accept-loop spin [#851](https://github.com/nullclaw/nullclaw/issues/851) — CPU core pegged at 100% on ARM64 under Debian trixie. Fixed by [#853](https://github.com/nullclaw/nullclaw/pull/853).
- **Critical (fixed)**: Subagent result delivery failure [#849](https://github.com/nullclaw/nullclaw/issues/849) — subagent tasks completed but results never returned. Fixed by [#854](https://github.com/nullclaw/nullclaw/pull/854).
- **High (fixed)**: Socket hangs on Zig 0.16 due to empty-buffer adapters — fixed by [#858](https://github.com/nullclaw/nullclaw/pull/858).
- **Medium (fixed)**: Mattermost POST body corruption due to buffer flush ordering — fixed by [#877](https://github.com/nullclaw/nullclaw/pull/877).

No new bugs reported in the last 24 hours.

## Feature Requests & Roadmap Signals
- **Capabilities formatting** ([#860](https://github.com/nullclaw/nullclaw/issues/860)): User requested improved output readability for `nullclaw capabilities`. Merged in [#863](https://github.com/nullclaw/nullclaw/pull/863) with colored table format — likely to ship in next release.
- **HTTP infrastructure migration** ([#881](https://github.com/nullclaw/nullclaw/pull/881)): The ongoing replacement of curl subprocesses with native `std.http` suggests a roadmap priority for eliminating external runtime dependencies. This is likely for the next minor version.
- **Session preemption** ([#855](https://github.com/nullclaw/nullclaw/pull/855)): The concurrency refactor signals that multi-user concurrent usage patterns are a design priority going forward.

## User Feedback Summary
- **Pain point (resolved)**: Single-session blocking during long-running agent tasks was a major UX issue, now addressed by session preemption and bounded concurrency.
- **Satisfaction signal**: The gateway CPU issue on Raspberry Pi was reported and fixed within two weeks, indicating responsive bug handling.
- **Use case**: Users running NullClaw on ARM SBCs (Raspberry Pi 5) and Debian trixie represent a growing deployment pattern that the team is actively supporting.
- **Request fulfilled**: Multiple users requested better tool customization (per-tool enable/disable, trigger-based prioritization) — delivered in PRs #834-#837.

## Backlog Watch
No long-unanswered issues or PRs were identified in the current data. All 4 issues from the last 24h were closed. The two open PRs [#878](https://github.com/nullclaw/nullclaw/pull/878) (thread sleep fix) and [#881](https://github.com/nullclaw/nullclaw/pull/881) (HTTP migration) are recent (April 30–May 1) and under active review. The project's backlog appears well-maintained with no stale items.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-02

## 1. Today's Overview

IronClaw remains in an intense **Reborn architecture integration phase**, with 29 issues updated (22 open) and 50 PRs updated (31 open) in the last 24 hours. A major push is underway to land the Reborn runtime, obligation handlers, HTTP egress, secrets/network boundaries, and memory storage — all tracked under umbrella epic #2987. The project also saw significant community and contributor PR activity, with 7 large (XL) PRs opened by new contributors on day one, including Slack workspace install, legal harness foundation, backup/restore commands, and invitation onboarding flows. No official releases landed today.

## 2. Releases

**None.**  
No releases were published in the last 24 hours. The last known release is `v0.26.0` (2026-04-21), which has known installer bugs (see Bugs & Stability).

## 3. Project Progress

**19 PRs were merged or closed in the last 24 hours**, reflecting steady engineering velocity. Notable merged/closed items:

- **`#3129`** — Plumbed reasoning trace emission for chain-of-thought from GLM-5, DeepSeek, OpenAI o-series, Qwen reasoning variants (merged by zetyquickly)
- **`#3137`** — Wired concrete MCP HTTP/SSE client through shared runtime HTTP egress ([PR](https://github.com/nearai/ironclaw/pull/3137))
- **`#3140`** — Staged one-shot secret injections into runtime adapters ([PR](https://github.com/nearai/ironclaw/pull/3140))
- **`#3139`** — Staged network-policy obligations into runtime egress ([PR](https://github.com/nearai/ironclaw/pull/3139))
- **`#3143`** — Wired configured built-in obligation handler into production HostRuntime services ([PR](https://github.com/nearai/ironclaw/pull/3143))
- **`#3146`** — Evaluated production TrustDecision before Reborn capability dispatch ([PR](https://github.com/nearai/ironclaw/pull/3146))
- **`#3086`** — Re-carved WASM runtime lane for Reborn ([PR](https://github.com/nearai/ironclaw/pull/3086))
- **`#2583`** — Fixed "5 consecutive code errors" bug in routine creation ([PR](https://github.com/nearai/ironclaw/pull/2583))

**New open PRs of note:**
- **`#3180`–`#3185`** (nickpismenkov): 6-PR stacked refactor for Reborn-native memory storage service with libSQL and Postgres backends — guardrails, schema wiring, full repository implementations, and vertical integration tests.
- **`#3179`** (abbyshekit): Legal harness Stream B — per-project chat-with-docs RAG using OpenRouter LLM client.
- **`#3173`** (abbyshekit): Legal harness Stream A — foundation with projects, documents, and ingest for PDF/DOCX.
- **`#3188`** (abbyshekit): `ironclaw channels install slack <workspace>` workspace installation with auto-generated Slack app manifest.
- **`#3189`** (abbyshekit): native `ironclaw verify` command for layered project verification and autoverify skill.
- **`#3187`** (abbyshekit): magic-link invitation onboarding for pilot users.
- **`#3175`** (abbyshekit): granular OAuth scope selection with read-only Google Drive capability.
- **`#3178`** (abbyshekit): `ironclaw backup --quick` for portable state snapshots.
- **`#3177`** (abbyshekit): `ironclaw insights` for usage analytics.

## 4. Community Hot Topics

The most active issues and discussions center on the Reborn architecture transition and user-facing bugs:

- **`#2987`** (44 comments) — **[EPIC] Track Reborn architecture landing strategy and grouped PR plan** ([Issue](https://github.com/nearai/ironclaw/issues/2987))  
  *Underlying need:* The community and core team are coordinating a massive multi-PR architecture rewrite without collapsing into a single unmergable diff. The issue defines the contract freeze, staging branch, and grouped implementation PRs.

- **`#3067`** (14 comments) — **[TEST] Reborn: Add vertical-slice integration test suite** ([Issue](https://github.com/nearai/ironclaw/issues/3067))  
  *Underlying need:* Teams need integration-level proof that the Reborn substrate works through public entrypoints, not just unit tests.

- **`#3085`** (7 comments) — **Use shared Reborn runtime HTTP egress for WASM, Script, and MCP** ([Issue](https://github.com/nearai/ironclaw/issues/3085))  
  *Underlying need:* Consolidating HTTP transport, DNS/SSRF checks, limits, redaction, and resource accounting into one shared path instead of per-runtime duplication.

- **`#2949`** (3 comments) — **Installer error for x86_64-unknown-linux-gnu** ([Issue](https://github.com/nearai/ironclaw/issues/2949))  
  (Continued under Bugs & Stability)

- **`#3133`** — **Mission to send an email failed** ([Issue](https://github.com/nearai/ironclaw/issues/3133))  
  Gmail authentication failure in missions — spawned follow-up `#3166` for auto-resume after auth/approval gates.

**Reactions:** Only `#2818` and `#2949` have user reactions (👍), indicating muted community sentiment — most activity is internal team-driven.

## 5. Bugs & Stability

**High severity:**

- **`#2949`** — **Installer failure on x86_64-unknown-linux-gnu** ([Issue](https://github.com/nearai/ironclaw/issues/2949))  
  *Status:* Open, 3 days old  
  *Description:* The installer script fails to download because the release page does offer a tarball but the installer doesn't pick it up. Mirror of `#2818`.

- **`#2818`** — **Installer fails for v0.26.0 on x86_64-unknown-linux-gnu** ([Issue](https://github.com/nearai/ironclaw/issues/2818))  
  *Status:* Open, 11 days old, 1 👍  
  *Description:* Same root cause — cargo-dist generated installer doesn't detect the tarball for Linux glibc x86_64. No fix PR yet.

**Medium severity:**

- **`#2963`** — **Docker Hub image missing** ([Issue](https://github.com/nearai/ironclaw/issues/2963))  
  *Status:* Open, 6 days old  
  *Description:* `nearai/ironclaw:latest` doesn't exist on Docker Hub, blocking Docker-based deployments. No fix PR.

- **`#2583`** — **[CLOSED] Routine creation fails with "5 consecutive code errors"** ([Issue](https://github.com/nearai/ironclaw/issues/2583))  
  *Status:* Closed (fix merged)  
  *Description:* Routine creation in staging crashed after 5 code errors. Fixed in a now-merged PR.

**No regressions introduced today** in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

Based on today's issue and PR activity, the following features are likely to ship in the next release:

**Highly likely (already in active PRs):**
1. **`ironclaw verify` command** — native project verification with autoverify skill (#3189)
2. **Slack workspace install** — `ironclaw channels install slack` (#3188)
3. **Backup/restore migration** — `ironclaw backup --quick` and `ironclaw import backup` (#3178, #3186)
4. **Legal harness v1** — per-project chat-with-docs RAG, DOCX export (#3179, #3174, #3173)
5. **Magic-link invitations** — pilot user onboarding (#3187)
6. **Usage analytics** — `ironclaw insights` command (#3177)
7. **Granular OAuth scopes** — read-only Google Drive integration (#3175)

**Reborn architecture (medium-term):**
- Native memory storage with libSQL + Postgres (#3180–#3185)
- Obligation handler wiring and enforcement (#3143, #3144, #3147)
- Cost-based budgets in ResourceGovernor (#3141)
- Durable event/audit store (#3162)
- Mission auto-resume after auth gates (#3166)

**User-requested (not yet in PRs):**
- `#3168` — **ARM64/aarch64 Docker image support** ([Issue](https://github.com/nearai/ironclaw/issues/3168)) — only one platform currently supported, preventing ARM64 usage.
- `#2963` — **Docker Hub image publish** — no movement on restoring the Docker image.

## 7. User Feedback Summary

**Pain points:**
- **Installer broken for Linux users:** Two open issues (#2949, #2818) about the installer failing on x86_64-unknown-linux-gnu. Users report the tarball exists but the installer script doesn't fetch it.
- **Docker deployment blocked:** `#2963` — Docker Hub image missing entirely for the second week.
- **Gmail auth in missions:** `#3133` — simple email missions fail because Gmail OAuth isn't fully wired in the Reborn runtime.

**Use case signals:**
- **Enterprise onboarding:** The Slack workspace install PR (#3188) directly references NEAR Foundation pilots rating Slack as the #1 enterprise channel.
- **Legal/document workflows:** The legal harness (Stream A/B/C) targets contract review with PDF/DOCX — a clear enterprise vertical.
- **Self-hosting/migration:** Backup/restore and insight commands show user demand for portable, self-hosted operations.

**Satisfaction signals:**
- No explicit positive feedback in issues today, but the high volume of new contributor PRs (abbyshekit alone opened 10+ PRs) suggests strong external engagement.

## 8. Backlog Watch

Issues and PRs needing maintainer attention:

| Item | Age | Days since last update | Notes |
|------|-----|------------------------|-------|
| **`#2818`** — Installer bug on x86_64 Linux | 11 days | 1 day | High severity, 1 user 👍, no fix PR |
| **`#2949`** — Same installer bug (duplicate) | 8 days | 1 day | User explicitly asking for help |
| **`#2963`** — Docker Hub image missing | 6 days | 1 day | Blocks Docker-based deployments |
| **`#2863`** — PR: Manifest LLM provider ([PR](https://github.com/nearai/ironclaw/pull/2863)) | 10 days | 1 day | No maintainer review yet |
| **`#2971`** — PR: tokio ecosystem dependency bump ([PR](https://github.com/nearai/ironclaw/pull/2971)) | 6 days | 1 day | No maintainer review; 5 package updates |
| **`#2973`** — PR: 39-dependency bump ([PR](https://github.com/nearai/ironclaw/pull/2973)) | 6 days | 1 day | No maintainer review; large blast radius |
| **`#3031`** — Reborn product surface migration epic | 4 days | 1 day | Updated but no resolution on blocking compatibility gate |
| **`#3093`** — EventProjectionService | 3 days | 2 days | 0 comments; no assignee |

**Most critical:** The installer bug (#2818/#2949) has been open for 11 days with no fix PR, directly blocking new Linux users from onboarding. The Docker Hub issue (#2963) blocks Docker-first deployments. Both are user-facing regressions from the v0.26.0 release.

**Reborn tracking note:** Epic `#2987` has 44 comments and touches ~20 open issues — the core team should consider a maintainer status update on timeline and blocking items to keep the community aligned.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-02

## Today's Overview

The LobsterAI project shows moderate activity today with **6 pull requests** updated in the last 24 hours, though all remain open with none merged. There are **no new issues** and **no new releases**. All 6 PRs carry a `[stale]` label, suggesting they have been open for some time (30+ days) without review or merge. This pattern indicates a potential bottleneck in maintainer bandwidth or a prioritization backlog. No community discussion (comments) is visible on any PR, and the total lack of new issues suggests either low user engagement or that existing channels are handling feedback. The project appears to be in a **maintenance lull** with no new features shipped.

## Releases

No new releases were published today. The project has no release history in the observed window.

## Project Progress

**No PRs were merged or closed today.** All 6 updated PRs remain open and stale. Key standing PRs include:

- **#1181** — Fix to hide OpenClaw main agent sessions (used for internal heartbeat/cron routing) from the user-facing cowork session list, which was causing confusion.
- **#822** — Unification of token refresh lock to eliminate race conditions across three concurrent refresh paths (passive on 401, proactive near-expiry, manual IPC).
- **#825** — Duplicate detection for local skill uploads using SHA256 content hashing of `SKILL.md` to prevent multiple copies (e.g., `skill`, `skill-1`, `skill-2`).
- **#1185** — "Open skill folder" button for user-imported non-built-in skills, enabling easy file editing via system file manager.
- **#1186** — Performance optimization for streaming responses: introduces `createSelector` for stable Redux references, adds `React.memo` with custom comparator for `AssistantTurnBlock`, reducing full message list re-renders from ~6600 per 10-min stream to only changed blocks.
- **#1190** — Fix for Windows uninstaller: adds `customUnInit` hook to `taskkill` the app before uninstall, preventing the misleading state where uninstall completes but running instances persist.

## Community Hot Topics

There are **no community comments** on any of today's updated items. The PRs have zero reactions and zero comment threads. This could indicate that:
- Contributors are working independently without requesting review
- The project lacks active community discussion channels (or issues are resolved elsewhere)
- Stale PRs may not be attracting attention from maintainers or users

**No hot topics to highlight.** The most "active" items are the oldest stale PRs (#822, #825), not due to discussion but due to their age (since March 25).

## Bugs & Stability

No new bugs were reported today (zero new issues). However, several open PRs address known bugs:

| Bug | Severity | PR | Status |
|-----|----------|----|--------|
| Windows uninstall leaves running app, confusing users | Medium | #1190 | Open, stale 31d |
| Duplicate skill uploads create `skill-1`, `skill-2` copies | Low-Medium | #825 | Open, stale 38d |
| Race conditions in token refresh causing concurrent calls | Medium | #822 | Open, stale 38d |
| OpenClaw internal sessions visible to users | Low | #1181 | Open, stale 31d |

No regressions or crashes were reported today.

## Feature Requests & Roadmap Signals

No new feature requests were filed today. Based on open PRs, likely upcoming features include:

1. **Skill management UX** (PR #1185) — "Open folder" button for user skills, suggesting a focus on power users who edit skills locally.
2. **Streaming performance** (PR #1186) — Reducing re-render overhead, likely targeted for next release if merged, as it directly impacts user experience during AI conversations.
3. **Duplicate skill prevention** (PR #825) — A quality-of-life improvement for skill ecosystem health.

These features have been open for 30+ days, so timeline is uncertain.

## User Feedback Summary

No user feedback (comments, issues, reactions) was recorded in the observed period. The absence of feedback could mean:
- Users are generally satisfied
- Feedback is happening offline or on other platforms
- The user base is small or not engaged in GitHub

The only indirect signal is the existence of PR #1185 (open folder button) and #1181 (hide internal sessions), which suggest past user confusion about skill file locations and unexpected session entries.

## Backlog Watch

**6 stalemated PRs** — All 6 PRs updated today have been open for **31–38 days** with no merge activity. This is the most critical signal for project health:

- **#822** (auth race condition fix) — Open 38 days, no comments, no reviewer. Security/authentication fix.
- **#825** (skill duplicate detection) — Open 38 days, no reviewer.
- **#1181** (session list fix) — Open 31 days, no reviewer.
- **#1185** (open folder button) — Open 31 days.
- **#1186** (streaming performance) — Open 31 days.
- **#1190** (Windows uninstall fix) — Open 31 days.

**Recommendation**: These PRs require maintainer attention. Prioritization should consider:
1. **#822** — Race conditions in auth could cause real-world failures.
2. **#1190** — Windows uninstaller bug affects user trust.
3. **#1186** — Performance improvement directly impacts daily UX.
4. **#1181, #825, #1185** — UX fixes with lower blast radius.

No unanswered issues are in the backlog (0 open issues total).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-02

## 1. Today's Overview

Moltis saw extremely high activity in the last 24 hours, with 11 pull requests and 6 issues updated. The project closed 5 bugs and merged/closed 9 PRs, indicating a strong focus on stabilization and polish. A single new feature request remains open, alongside two open PRs for major new capabilities (remote sandbox support and Twilio telephony). This was a high-velocity day with no new releases cut, suggesting the team is consolidating changes before a targeted release.

## 2. Releases

No new releases cut today. The last release remains the previously available version.

## 3. Project Progress

### Merged/Closed PRs (9 items)

- **#955** *(fix)* — `fix(terminal): prevent spurious "window does not exist" error on tab creation` ([link](https://github.com/moltis-org/moltis/pull/955))  
  Fixed a frontend race condition where tmux window creation caused persistent error messages.

- **#954** *(fix)* — `fix(telegram): upgrade teloxide 0.13→0.17 to fix multipart ThreadId panic` ([link](https://github.com/moltis-org/moltis/pull/954))  
  Major dependency upgrade resolving a panic on `send_document`/`send_voice` in forum/topic chats; closes #947.

- **#952** *(fix)* — `fix(web-ui): prevent horizontal overflow in chat messages container` ([link](https://github.com/moltis-org/moltis/pull/952))  
  CSS fix for broken chat layout (#945) causing horizontal scrollbars.

- **#953** *(test)* — `test(e2e): add auto-scroll regression tests for #946` ([link](https://github.com/moltis-org/moltis/pull/953))  
  6 new e2e tests covering the auto-scroll bug at chat bottom.

- **#951** *(feat)* — `feat(portable): add data import/export for config, databases, and sessions` ([link](https://github.com/moltis-org/moltis/pull/951))  
  New `moltis-portable` crate for full backup/restore via CLI, REST API, and web UI.

- **#950** *(fix)* — `fix(discord): register slash command arguments and add all thinking levels` ([link](https://github.com/moltis-org/moltis/pull/950))  
  Fixes #948: Discord slash commands now accept named arguments (model, mode, action, id) with dropdown choices.

- **#944** *(feat)* — `feat(providers): add Zen (opencode.ai) multi-protocol provider` ([link](https://github.com/moltis-org/moltis/pull/944))  
  Adds a new provider for OpenCode Zen — a curated proxy giving access to GPT, Claude, Gemini, etc. via one API key.

- **#943** *(feat)* — `feat(web-ui): hide voice buttons when stt/tts disabled in config` ([link](https://github.com/moltis-org/moltis/pull/943))  
  Mic and VAD buttons now respect `voice.stt.enabled` and `voice.tts.enabled` config flags.

- **#339** *(feat)* — `feat(i18n): add zh-TW Traditional Chinese locale support` ([link](https://github.com/moltis-org/moltis/pull/339))  
  Full Traditional Chinese (Taiwan) locale for both macOS and web apps; includes detection and language selection.

### Open PRs (2 items)
- **#942** — `feat(sandbox): remote & multi-backend sandbox support (Vercel, Daytona, Firecracker)` ([link](https://github.com/moltis-org/moltis/pull/942)) — in review
- **#920** — `feat(telephony): add phone call support via Twilio` ([link](https://github.com/moltis-org/moltis/pull/920)) — in review

## 4. Community Hot Topics

The highest-signal item today was the single thumbs-up on issue #946 (`chat doesn't auto-scroll when at end`), which already has a fix merged (PR #953). All other items had zero reactions or minimal engagement, suggesting the community is largely aligned with the project's current direction. No long debate threads were active today.

## 5. Bugs & Stability

Five bugs were closed in 24 hours, all with matching fix PRs:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#947](https://github.com/moltis-org/moltis/issues/947) | Telegram `send_document` panics/restarts Moltis on multipart upload | [#954](https://github.com/moltis-org/moltis/pull/954) |
| **High** | [#948](https://github.com/moltis-org/moltis/issues/948) | Discord slash commands silently ignore arguments | [#950](https://github.com/moltis-org/moltis/pull/950) |
| **Medium** | [#945](https://github.com/moltis-org/moltis/issues/945) | Chat layout broken — too wide (horizontal scroll) | [#952](https://github.com/moltis-org/moltis/pull/952) |
| **Medium** | [#946](https://github.com/moltis-org/moltis/issues/946) | Chat doesn't auto-scroll when at bottom | [#953](https://github.com/moltis-org/moltis/pull/953) |
| **Low** | [#937](https://github.com/moltis-org/moltis/issues/937) | Terminal/tmux error in settings | [#955](https://github.com/moltis-org/moltis/pull/955) |

All bugs were addressed within 24 hours, reflecting strong response-time discipline.

## 6. Feature Requests & Roadmap Signals

Only one open feature request exists:

- **#949** — `[Feature]: Add provider failover support for sub-agents spawned via spawn_agent` ([link](https://github.com/moltis-org/moltis/issues/949))  
  Sub-agents (scout, analyst, builder) have no provider failover when the configured model provider is down or rate-limited. The request asks for automatic fallback to alternative providers/models.

### Prediction for Next Version
Given the PR velocity, the next release is likely to include:
- The major **remote sandbox backend** (#942) and **Twilio telephony** (#920) features (both open PRs nearing merge)
- The **portable backup/restore** system (#951, already merged)
- All five bugfixes listed above
- The **i18n zh-TW** support (#339)
- The **Zen provider** (#944)

Provider failover for sub-agents (#949) may make the cut if prioritized.

## 7. User Feedback Summary

Users reported concrete, actionable bugs rather than general dissatisfaction. Key signals:

- **Discord users** (@MMMaellon) encountered broken slash commands — a clear quality-of-life blocker — now fixed.
- **Telegram users** (@bashrusakh) hit a crash-on-upload issue in forum chats — a critical stability bug, now fixed.
- **Web UI users** (@vvuk) reported two layout/UX issues (broken width, missing auto-scroll) — both fixed today.
- **Terminal users** (@gaarf) saw spurious tmux tab-creation errors — fixed in #955.

All users reported running the latest version, and all bugs were accepted by maintainers with rapid fixes. Satisfaction risk is low given the 24-hour turnaround.

## 8. Backlog Watch

No long-unanswered issues or PRs requiring maintainer attention were identified today. The oldest open PR is #920 (`feat(telephony)`, opened 2026-04-29), now 3 days old and actively discussed. The `zh-TW` PR (#339) was merged after two months — its long lifespan was due to i18n complexity rather than neglect. The backlog appears healthy and responsive.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-02

Generated from GitHub data (github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw shows moderate activity over the past 24 hours with 7 open issues updated and 3 open pull requests, but zero closed or merged items across both categories, indicating a **stalled merge pipeline**. No new releases were published, suggesting the project is in a **consolidation or blockers phase**. The issue tracker reveals a mix of bugs, configuration gaps, and feature requests, with a notable **non-English user base** raising concerns about memory management, MCP client configuration, and DeepSeek V4 integration. The absence of any merged PRs or resolved issues today is a health signal that maintainer bandwidth or review capacity may be constrained.

---

## 2. Releases

**No new releases today.** The latest available version remains as previously reported (1.5.1). No changelog, migration notes, or breaking changes to communicate.

---

## 3. Project Progress

**No pull requests were merged or closed today.** Three PRs remain open:

- [#3525 – feat(cron): create Discord thread before agent dispatch](https://github.com/agentscope-ai/QwenPaw/pull/3525) *(open since 2026-04-17)* — Under review for 15 days; aims to isolate cron job output into Discord threads instead of flooding parent channels.

- [#3831 – Add vector model connection test feature](https://github.com/agentscope-ai/QwenPaw/pull/3831) *(open since 2026-04-25)* — Adds a connection test utility for vector model providers; no linked issue.

- [#3994 – Feat/volcengine provider](https://github.com/agentscope-ai/QwenPaw/pull/3994) *(opened 2026-05-01)* — Adds Volcengine (火山引擎) as a new model provider, including a coding plan provider variant.

**Key observation:** The long-standing #3525 (15 days open) suggests review bottlenecks or unresolved design discussions. #3994 is the freshest and likely the closest to merge.

---

## 4. Community Hot Topics

| Issue/PR | Comments | Reactions | Topic |
|----------|----------|-----------|-------|
| [#3992 – Bug: agent stops responding after several turns](https://github.com/agentscope-ai/QwenPaw/issues/3992) | 2 | 0 | Core agent loop hangs mid-conversation |
| [#3988 – Windows packaging conflict with conda-pack ≤0.7.1](https://github.com/agentscope-ai/QwenPaw/issues/3988) | 2 | 0 | Build system failure on Windows |
| [#3997 – MCP client timeout default 30s unconfigurable](https://github.com/agentscope-ai/QwenPaw/issues/3997) | 1 | 0 | MCP `timeout` field silently dropped by Pydantic |

**Analysis:** Two bug reports (#3992, #3988) generated the most discussion. The MCP timeout issue (#3997) is a **sharp edge** for advanced users integrating with slow external tools. All three reflect **real production friction**, not speculative requests.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| 🔴 **Critical** | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | Agent stops responding after several conversation turns — core loop halts | No |
| 🟠 **High** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Windows `conda-pack` + `pip install qwenpaw[full]` conflict breaks builds | No |
| 🟡 **Medium** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama channel loses conversation history; context not carried across turns | No |
| 🟡 **Medium** | [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) | MCP client `timeout` default 30s, silent field rejection by Pydantic | No |

**Ranking:** #3992 is the highest severity — a functional regression in the core chat loop. #3988 blocks Windows users entirely from building. #3991 is a platform-specific memory regression (Ollama). **None have an associated fix PR.**

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood for Next Version |
|-------|---------|----------------------------|
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | Enhanced memory management with auto-archival, conflict detection, edit history | **Medium** — community-driven, but requires significant design |
| [#3993](https://github.com/agentscope-ai/QwenPaw/issues/3993) | OpenAI Responses API support + native tool calling | **Low-Medium** — speculative, would require new API client layer |
| [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) | DeepSeek V4: add `xhigh`/`max` thinking levels (beyond binary toggle) | **High** — simple config extension, minimal code change |
| [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) | MCP `timeout` configurable via `MCPClientConfig` | **Very High** — clear Pydantic model fix, low effort |

**Prediction:** The MCP timeout fix (#3997) and DeepSeek V4 thinking levels (#3996) are most likely to land soon due to low implementation complexity. Memory management (#3995) is a larger architectural change and may be deferred.

---

## 7. User Feedback Summary

**Pain points (explicit or inferred from issues):**
- **Session persistence broken for Ollama users** (#3991) — users invested in local models cannot use QwenPaw for anything beyond single-turn queries.
- **Windows packaging is broken** (#3988) — the `conda-pack` conflict and silent error propagation prevent Windows users from building custom distributions.
- **MCP configuration is inflexible** (#3997) — power users integrating with slow APIs cannot override the 30-second timeout, causing silent failures.
- **Memory system lacks lifecycle management** (#3995) — daily notes accumulate indefinitely, and concurrent writes risk data corruption.
- **DeepSeek V4 thinking is underutilized** (#3996) — users of the latest DeepSeek models want access to higher thinking effort levels.

**Satisfaction signals:**
- No explicit praise or positive feedback in the latest issues.
- The memory system is described as "简洁可靠" (simple and reliable) in #3995, indicating baseline satisfaction with the core design.

---

## 8. Backlog Watch

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#3525 – Discord thread creation on cron dispatch](https://github.com/agentscope-ai/QwenPaw/pull/3525) | 15 days open | Under review, no updates since Apr 17 | 🟡 **Stale** — may need maintainer attention or rebase |
| [#3831 – Vector model connection test](https://github.com/agentscope-ai/QwenPaw/pull/3831) | 7 days open | No reviewer activity | 🟢 Low risk, but merges are stalled project-wide |
| [#3988 – Windows build conflict](https://github.com/agentscope-ai/QwenPaw/issues/3988) | 2 days open | No assignee, no fix PR | 🟠 Requires specialized Windows/build knowledge |
| [#3992 – Agent stop responding](https://github.com/agentscope-ai/QwenPaw/issues/3992) | 1 day open | No assignee | 🔴 **Critical path** — needs immediate triage |

**Recommendation:** The project would benefit from a **maintainer triage pass** on the oldest open PR (#3525) and the critical agent-loop bug (#3992). The zero-merge streak is a health indicator that should be investigated for process or capacity issues.

---

*Digest generated 2026-05-02. Data source: github.com/agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-02

## Today's Overview

ZeroClaw shows **high sustained activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a healthy, fast-moving open-source project. **No new releases** were published today, but the project is actively preparing for a **v0.8.0 milestone** with a schema v3 migration batch currently in progress. The **multi-agent architecture work** is advancing through both RFC and implementation phases, while several **P0/P1 bugs** remain under active remediation. A notable **burst of CI/CD workflow fixes** suggests recent release automation encountered friction with branch protection rules.

## Releases

**No new releases** were published in the last 24 hours. The most recent stable release is **v0.7.4**, which shipped successfully but triggered a post-release CI failure (see Bugs & Stability). The project is tracking toward **v0.8.0**, with the schema v3 migration branch `upstream/integration/v0.8.0` active.

## Project Progress

**Merged/closed PRs (7):**
- [#6195](https://github.com/zeroclaw-labs/zeroclaw/pull/6195) — Deny unknown fields on SkillMeta to surface typos (closed Issue #6128)
- [#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) — Removed dead duplicate `tracker.rs` in zeroclaw-runtime (566-line orphan)
- [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) — Web onboarding parity via per-property CRUD endpoints (large feature)
- [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) — Manual cron trigger from Web UI
- [#6070](https://github.com/zeroclaw-labs/zeroclaw/pull/6070) — Improved default model selection UI
- [#6073](https://github.com/zeroclaw-labs/zeroclaw/pull/6073) — Fixed Web UI config editor character alignment bug
- [#6145](https://github.com/zeroclaw-labs/zeroclaw/pull/6145) — Recover agent chat from memory location in Web UI
- [#5356](https://github.com/zeroclaw-labs/zeroclaw/pull/5356) — Canvas tool channel fix for Telegram/Discord/Slack (closed)
- [#5835](https://github.com/zeroclaw-labs/zeroclaw/pull/5835) — Gateway cancel_tokens memory leak fix (closed)

**Key feature advances:**
- **Skill system hardening**: `SkillMeta` now rejects unknown fields, preventing silent typos in skill manifests
- **Cron improvements**: Manual trigger support added via new `POST /api/cron/{id}/run` endpoint
- **Gateway CRUD surface**: New per-property endpoints for `/api/config/*` enable full web onboarding parity
- **Provider extended thinking**: Anthropic/Bedrock native reasoning support (PR #5652, still open)

## Community Hot Topics

**Most Active Issues:**
1. [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — Zeroclaw does not know it can add cron (8 comments): A user discovered the agent lacks tool-awareness of its own cron capabilities — highlights a discoverability gap in tool introspection
2. [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — Better logo design (8 comments, 2 👍): Long-running design discussion with visual proposals; lowest priority but strong sustained engagement
3. [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) — Multi-agent UX flow RFC (7 comments): RFC has concluded discussion period and voting; awaiting extraction to formal proposal document
4. [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) — Schema v3 batch breaking field migrations (6 comments): Merge blocker for v0.8.0; checklist-driven coordination issue
5. [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Default shell sandbox blocks Python skill patterns (6 comments): High-impact bug blocking real-world skill development

**Underlying community needs:**
- Users need better **tool self-awareness** — the agent should know what it's capable of (e.g., cron)
- **Skill developer experience** is a pain point — sandbox configuration, manifest documentation, and audit scope need clarity
- Community is **eager for multi-agent** features — the RFC and tracker both see heavy engagement
- **Onboarding friction** remains high — users report confusion about model selection, free models, and config editing

## Bugs & Stability

**High-severity bugs active today:**

| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | **P0** | Open | install.sh fails to extract web dashboard from release tarball — fresh installs cannot run gateway |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | P1 | In Progress | Default shell sandbox blocks Python skill patterns — blocks FINOS-compliant portfolio analysis |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | P1 | Open | Gateway-chat succeeds but `/api/cost` stays zero, no usage artifacts written |
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | P1 | In Progress | Dashboard Channels tab crash and Overview render error on v0.6.8 |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | P1 | Blocked | SkillForge auto-integrator emits non-schema fields inside `[skill]` block |
| [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) | P1 | Blocked | Extend manifest prompt audit to scan new `[skill].prompts` location |
| [#6249](https://github.com/zeroclaw-labs/zeroclaw/issues/6249) | S2 | Open | release-stable-manual.yml CHANGELOG-next.md cleanup blocked by master branch protection |
| [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) | S2 | Open | WASM plugin install path diverges from runtime scan path — plugins invisible to agent |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | S1 | Open | `zeroclaw self-test` reports using 127.0.0.1 contrary to config (PR #6219 proposed fix) |

**Fix PRs in review:**
- [#6219](https://github.com/zeroclaw-labs/zeroclaw/pull/6219) fixes the self-test host report issue
- [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) fixes cost/token recording on every gateway turn (addresses #6001)
- [#6265](https://github.com/zeroclaw-labs/zeroclaw/pull/6265) removes the problematic CHANGELOG-next.md cleanup step (fixes #6249)

## Feature Requests & Roadmap Signals

**Likely to land in v0.8.0 (schema v3 batch):**
- SQLite memory backend migration ([#6017](https://github.com/zeroclaw-labs/zeroclaw/issues/6017)) — PR likely following
- Per-skill security permissions with scoped `allow_scripts` and `allowed_commands` ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775))
- Installing skills from `.well-known` URI ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853))
- Multi-agent v1 foundation ([#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891))

**Emerging feature signals:**
- Configurable LM Studio server URL across chat/embeddings/config ([#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260))
- WhatsApp as a delivery channel for cron jobs (PR [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261))
- Manifest open-source LLM router provider support (PR [#6268](https://github.com/zeroclaw-labs/zeroclaw/pull/6268))
- Extended thinking for Anthropic/Bedrock ([#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652))
- Hot-switch model in Web UI preserving chat context ([#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101))

## User Feedback Summary

**Common pain points expressed:**
1. **Agent tool-awareness gap**: The agent doesn't know it can use cron — users expect self-diagnostic capabilities
2. **Onboarding confusion**: Fresh installs fail to extract web dashboard; self-test reports wrong addresses; model selection unclear about free vs. paid models
3. **Skill development friction**: Sandbox configurations block Python skills; manifest format documentation is insufficient; silent typos cause hours of debugging
4. **Cost visibility missing**: Gateway succeeds but cost tracking returns zero — users cannot monitor usage
5. **Plugin path confusion**: WASM plugins install to one directory but runtime scans another

**Positive signals:**
- Community actively contributes schema improvements, cron features, and provider additions
- Users are building real production skills (InvestorClaw with FINOS compliance)
- Multi-agent RFC generated substantive discussion and community input

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

| Issue | Days Open | Tags | Status |
|-------|-----------|------|--------|
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) — Per-skill security permissions | 17 days | enhancement, risk: high, security | Needs maintainer review |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) — Installing from `.well-known` URI | 36 days | enhancement, skills | In progress (no stale) |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) — Document about skills | 14 days | good first issue, docs | Unassigned, maintainer could tag |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Shell sandbox blocking Python | 18 days | bug, P1 | In progress but slow resolution for high-impact issue |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) — SkillForge non-schema fields | 3 days | bug, P1 | Blocked — needs dependency PR merged first |

**PRs needing author action:**
- [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) — Hot-switch model — needs-author-action
- [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) — Cost recording fix — needs-author-action

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*