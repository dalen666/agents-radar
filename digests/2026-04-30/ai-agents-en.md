# OpenClaw Ecosystem Digest 2026-04-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-30 04:36 UTC

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

# OpenClaw Project Digest — 2026-04-30

---

## 1. Today's Overview

OpenClaw shows **intense community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a highly engaged user base and responsive maintainers. The project shipped a new release (v2026.4.27) with significant new integrations including Codex Computer Use setup, DeepInfra provider support, and marketplace discovery. However, the high volume of open PRs (474) suggests a **growing review bottleneck**, and multiple regression bugs reported around the v2026.4.24–v2026.4.25 updates indicate **stability concerns** in recent releases. Closure rates are strong for issues (339 closed vs 161 open), but PR merge velocity (26 merged/closed vs 474 open) is lagging considerably.

---

## 2. Releases

### v2026.4.27 — openclaw 2026.4.27 (new)

**Notable changes:**
- **Codex Computer Use setup** now ships with status/install commands, marketplace discovery, and fail-closed MCP checks for Codex-mode desktop control (thanks @pash-openai)
- **DeepInfra joins bundled provider set** with model discovery, media generation/editing, TTS, and embedding support

**No breaking changes or migration notes** have been published for this release.

**Install:** `curl -fsSL https://openclaw.ai/install-cli.sh | bash`

---

## 3. Project Progress

### Merged/Closed PRs (26 total in last 24h)

The following fixes and features advanced to closure:

| PR # | Description | Category |
|------|-------------|----------|
| #72846 | [CLOSED] Regression — channel sidecar startup blocked ~3 min after `ready` (recurrence of #63450) | Bug fix |
| #72058 | [CLOSED] npm deps missing after update to 24.04.2026 | Dependency fix |
| #72355 | [CLOSED] Bonjour/mDNS plugin hardcoded to 'openclaw.local' causing crash loop | Crash fix |
| #72526 | [CLOSED] Gateway runtime unstable after update to 2026.4.24 | Stability fix |
| #72665 | [CLOSED] Gateway not reachable after update to 4.24 | Connectivity fix |
| #72848 | [CLOSED] OpenClaw stopped working after update from 4.23 to 4.24/4.25 on Intel Mac | Platform fix |
| #27996 | [CLOSED] Cron scheduler nextRunAtMs not recomputed after editing expression/timezone | Scheduler fix |
| #60994 | [CLOSED] Cannot connect to remote Ollama/LM Studio via LAN IP | Provider fix |
| #70238 | [CLOSED] Gateway spawns flashing command prompt windows on Windows | Windows fix |
| #34574 | [CLOSED] loopDetection does not catch repeated exec tool calls | Loop detection |
| #43821 | [CLOSED] Feature: Global HTTP proxy support via environment variables | Feature |
| #17761 | [CLOSED] Gateway auth dispatcher blocks internal services when mode=trusted-proxy | Auth fix |
| #32638 | [CLOSED] Groq + reasoning models fail with 400 error | Provider fix |
| #59234 | [CLOSED] QMD boot probe triggers llama.cpp build on ARM Linux | ARM fix |
| #67113 | [CLOSED] QMD on ARM (Pi 5): embed timeout loop | ARM fix |
| #61724 | [CLOSED] sessions_spawn(runtime="subagent") fails with "streamTo is only supported for runtime=acp" | API fix |
| #54521 | [CLOSED] gateway install inlines .env secrets into systemd unit | Security fix |
| #43942 | [CLOSED] [reply_to_current] tag emitted inside thinking block | Message fix |
| #44270 | [CLOSED] Cron tool drops Telegram direct-chat thread context | Channel fix |
| #49311 | [CLOSED] doctor --repair wipes custom EnvironmentVariables from LaunchAgent plist | macOS fix |
| #49736 | [CLOSED] "No API key found for provider" error for custom providers | Auth fix |
| #56841 | [CLOSED] Custom OpenAI-compatible provider always fails with Connection error | Provider fix |
| #53186 | [CLOSED] replyToMode settings have no effect on Mattermost DM replies | Channel fix |

**Key theme:** The bulk of today's closures addressed **regressions introduced in v2026.4.24–v2026.4.25**, particularly around gateway startup, npm dependencies, Windows compatibility, and provider connectivity.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | 👍 | Summary | Link |
|-------|----------|----|---------|------|
| #48183 **[OPEN]** | 16 | 0 | **Feishu monitor memory leak** — httpServers Map entries deleted before server fully closes; potential for unbounded growth over time | [Issue](https://github.com/openclaw/openclaw/issues/48183) |
| #50090 **[OPEN]** | 13 | 1 | **Community Skill Development & ClawHub** — gap between promise and practice; driftnet causing ecosystem friction | [Issue](https://github.com/openclaw/openclaw/issues/50090) |
| #47940 **[OPEN]** | 13 | 0 | **Heartbeat interval doubled** — alternates between `sent` and `ok-token` every cycle, effective interval is 2x configured | [Issue](https://github.com/openclaw/openclaw/issues/47940) |
| #72846 **[CLOSED]** | 13 | 3 | **Regression: channel sidecar startup blocks ~3 min** — recurrence of previously fixed #63450, returned in v2026.4.25 | [Issue](https://github.com/openclaw/openclaw/issues/72846) |
| #27996 **[CLOSED]** | 11 | 0 | **Cron scheduler nextRunAtMs bug** — jobs don't recompute after editing expression/timezone | [Issue](https://github.com/openclaw/openclaw/issues/27996) |
| #72058 **[CLOSED]** | 11 | 3 | **npm deps missing after update** — broke Telegram responses and TUI startup | [Issue](https://github.com/openclaw/openclaw/issues/72058) |

### Most Active Pull Requests (by comment count)

All 30+ top PRs have `undefined` comment counts, but the most significant open PRs by scope:

| PR # | Description | Size | Link |
|------|-------------|------|------|
| #53716 | **Gateway watchdog + startup error diagnostics** (closes #53684) | M | [PR](https://github.com/openclaw/openclaw/pull/53716) |
| #53329 | **Block empty exec commands + consecutive tool-error circuit breaker** | XL | [PR](https://github.com/openclaw/openclaw/pull/53329) |
| #53607 | **Discord Components v2 outbound messages not mirrored to session transcript** | M | [PR](https://github.com/openclaw/openclaw/pull/53607) |
| #52921 | **Session send broken after model switch — no active sessions bound** | M | [PR](https://github.com/openclaw/openclaw/pull/52921) |
| #53738 | **media-tools: apply models.providers baseUrl override in image/pdf tools** | M | [PR](https://github.com/openclaw/openclaw/pull/53738) |

### Underlying Needs Analysis

1. **Release stability is a major pain point** — Multiple regressions recurred after being "fixed" (#72846 repeats #63450), and three separate issues (#72848, #72665, #72526) all describe the same pattern: "updated to v2026.4.24/4.25, gateway broken." The community is asking for **better regression testing and rollback safety**.

2. **ClawHub ecosystem is stagnating** — Issue #50090 is a 42-day-old open discussion (with 13 comments) about the gap between ClawHub's promise and reality. The community wants a functioning skill marketplace and better tooling for skill authors.

3. **Steer queue mode is broken** — Issues #50880 and #48003 (14 combined comments) both report that `messages.queue.mode: "steer"` silently degrades to followup behavior. This is a documented feature that doesn't work.

---

## 5. Bugs & Stability

### High-Severity Regressions (Critical/Blocker)

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| #72846 **[CLOSED]** | High | **Gateway sidecar startup blocks ~3 min** — recurrence of fixed regression; affects all v2026.4.25 users | ✅ Fixed today |
| #72058 **[CLOSED]** | High | **npm deps missing after update** — broke all channel responses and TUI; affects Docker/install users | ✅ Fixed today |
| #72355 **[CLOSED]** | High | **Bonjour/mDNS crash loop** — hardcoded hostname causes gateway shutdown loop | ✅ Fixed today |
| #72526 **[CLOSED]** | High | **Gateway unstable after update** — mixed signals (runtime: running but ECONNREFUSED) | ✅ Fixed today |
| #72848 **[CLOSED]** | Medium | **Intel Mac update broken** — gateway timeout on v2026.4.24 and v2026.4.25 | ✅ Fixed today |

### Critical Security Issue

**Issue #50642** — macOS node auto-trusts first TLS certificate, accepting rogue gateway control. CVSS: 9.5 (Critical). Open since 2026-03-19 (42 days). No fix PR linked. This should be a priority for maintainers.

### Ongoing Open Bugs (Not Yet Fixed)

| Issue | Days Open | Description |
|-------|-----------|-------------|
| #48183 | 45 | Feishu monitor memory leak — httpServers Map entries not properly cleaned |
| #47940 | 45 | Heartbeat interval effectively doubled — alternates between sent/ok-token |
| #50880 | 41 | Steer queue mode silently degrades to followup — no diagnostic logging |
| #50248 | 42 | `sessions cleanup --fix-missing` falsely prunes fresh cron sessions |
| #47975 | 45 | Subagent sessions persist after completion, main session becomes unresponsive |

---

## 6. Feature Requests & Roadmap Signals

### Top User-Requested Features (Open)

| Issue | 👍 | Summary | Likely for Next Release? |
|-------|----|---------|--------------------------|
| #74704 | 1 | **SDK: stabilize app-client happy path** (agents, sessions, runs) — maintained by BunsDev | ✅ High priority — maintainer-flagged |
| #50739 | 1 | **System event priority/bypass-queue mode** — for reliable in-session alerts during congestion | ✅ High priority — addresses critical UX gap |
| #52640 | 1 | **Persistent task-status surface for long-running channel turns** — Discord first, generic later | ⚠️ Medium — community requested |
| #50404 | 2 | **Session Sidebar with Chat History Management** in Control UI | ⚠️ Medium — improves UX |
| #50199 | 0 | **Skill Priority Configuration** — intelligent selection when multiple skills overlap | ⚠️ Medium — ecosystem improvement |
| #50093 | 0 | **WhatsApp backfill missed messages after reconnection** | ❓ Low — specific channel request |
| #48814 | 2 | **Pre-send queue check — suppress stale replies when newer messages pending** | ⚠️ Medium — prevents confusion |
| #50291 | 0 | **Plugin Hooks: trace context for observability** (messageId, runId, parentSpanId) | ❓ Low — observability enhancement |

### Roadmap Predictions

1. **SDK stabilization** (Issue #74704) is likely the highest priority — it's tagged `[maintainer]` and authored by BunsDev, suggesting maintainer commitment to making OpenClaw a platform for external app clients.

2. **Steer queue mode fixes** are overdue — two separate issues (#50880, #48003) have been open for 41+ days. A fix would restore core documented functionality.

3. **Community skill ecosystem improvements** will likely follow the SDK stabilization — ClawHub (#50090) needs infrastructure before it can thrive.

---

## 7. User Feedback Summary

### Pain Points

- **Update anxiety**: Multiple users report dreading updates. From #72848: *"On 2012 Intel based Mac running Sequoia and have been unable to update since 4.23."* From #72526: *"After updating... the running gateway became unstable for a while."*

- **Configuration fragility**: Users report that `doctor --repair` silently destroys custom configurations (Issue #49311: *"regenerates the LaunchAgent plist from scratch, silently dropping any custom EnvironmentVariables"*).

- **Documentation drift**: Issue #48920 highlights that *"Live Docs are ahead of release"* — users follow documentation only to find features don't exist in their installed version.

- **Enterprise deployment friction**: Issues #43821 (HTTP proxy support, closed today after 50 days), #50642 (TLS security flaw), and #50630 (Tailscale auth exposure) indicate growing enterprise adoption with corresponding security requirements.

### Satisfaction Signals

- **Rapid bug closure**: The 26 PRs closed today, particularly the cluster of v2026.4.24/4.25 regressions, demonstrate responsive maintainers who prioritize stability.
- **New provider integrations** (DeepInfra) and **Codex Computer Use** features show meaningful forward momentum.
- User @coygeek filed detailed security reports (#50642, #50630) with full CVSS assessments — a sign of engaged, technically sophisticated users who care about project health.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Days Open | Priority | Why It's Stuck |
|-------|-----------|----------|----------------|
| #50642 | 42 | **Critical** — CVSS 9.5 | macOS TLS auto-trust vulnerability; no assigned maintainer |
| #50630 | 42 | **High** — CVSS 9.3 | Tailscale + auth.mode=none exposes gateway to full Tailnet; no fix PR |
| #48183 | 45 | **Medium** — memory leak | Feishu monitor leak; open PRs exist but not merged |
| #50880 | 41 | **Medium** — feature broken | Steer queue mode broken with no fix in sight |
| #50090 | 42 | **Medium** — ecosystem | ClawHub discussion; needs strategic direction from maintainers |
| #50739 | 41 | **Medium** — UX | System event priority mode; no maintainer response |
| #50404 | 42 | **Low-Medium** — UX | Sidebar chat history; no maintainer response |
| #50165 | 42 | **Medium** — correctness | Subagents appear completed before underlying work is done |

### PRs Needing Review

| PR # | Days Open | Size | Description |
|------|-----------|------|-------------|
| #53809 | 37 | S | **Protect shared workspace from deletion** — important for multi-agent setups |
| #53787 | 37 | XS | **Feishu undefined receiveIdType guard** — small but blocking Feishu users |
| #53784 | 37 | S | **Feishu audio format recognition** — .mp3/.wav not recognized as audio |
| #53780 | 37 | S | **Sanitize fetch errors before posting to channels** — PII leak risk |
| #53779 | 37 | S | **Provider validation: log warning and continue** — prevents config rejection |
| #53329 | 37 | XL | **Block empty exec commands + tool-error circuit breaker** — large but critical |
| #53716 | 37 | M | **Gateway watchdog + startup diagnostics** — addresses #53684 |

**Note:** All of the top PRs were created on 2026-03-24 and have received **no comments or reviews** in 37 days. This is the most significant bottleneck in the project — a backlog of **474 open PRs** with the newest actionable PRs sitting unreviewed for over a month.

---

## Key Metrics Summary

| Metric | Value |
|--------|-------|
| Issues updated in 24h | 500 (161 open, 339 closed) |
| PRs updated in 24h | 500 (474 open, 26 merged/closed) |
| New releases | 1 (v2026.4.27) |
| Open PRs waiting review | 474 |
| Oldest unanswered critical issue | 42 days (#50642, CVSS 9.5) |
| Oldest unreviewed PRs | 37 days (batch from 2026-03-24) |

**Project Health Verdict:** Good — rapid bug closure, meaningful new features, and high community engagement. **Areas of concern:** PR review bottleneck (474 open), recurring regressions in recent releases, two critical security issues untouched for 42 days, and a growing gap between documentation and shipped features.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing explosive growth, with major projects shipping **daily releases** and maintaining **50+ daily PR/issue throughput**. The ecosystem is converging around **conversational isolation per platform**, **provider extensibility**, and **self-evolution capabilities** as core architectural features. A clear bifurcation is emerging between **TypeScript-based agents** (OpenClaw, NullClaw, PicoClaw) optimized for Node.js deployment and **Python/Rust projects** (Hermes Agent, IronClaw) prioritizing sandboxed execution and security. Community engagement is exceptionally high, with first-time contributors actively submitting production-quality PRs, though **growing PR backlogs** and **recurring regressions** indicate maintainer bandwidth is straining under adoption velocity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Dominant Activity |
|---------|-------------|-----------|----------------|--------------|-------------------|
| **OpenClaw** | 500 (339 closed) | 500 (26 merged) | ✅ v2026.4.27 | **Good** | Regression fixes, Codex/deepInfra integrations |
| **NanoBot** | 8 (7 closed) | 36 (25 merged) | ✅ v0.1.5.post3 | **Strong** | Threading isolation, Feishu fixes |
| **Hermes Agent** | 50 (3 closed) | 50 (18 merged) | ❌ None today | **Moderate** | Security fixes, Models dashboard, Skill reload |
| **PicoClaw** | 13 (1 open) | 20 (8 merged) | ✅ v0.2.7-nightly | **Strong** | Self-evolution runtime, TUI deprecation |
| **NanoClaw** | 3 (2 open) | 50 (20 merged) | ❌ None today | **Very Strong** | Gemini provider, Knowledge base, Micropayments |
| **NullClaw** | 2 (1 closed) | 0 | ❌ None today | **Low** | Documentation fix, 1 critical search bug |
| **IronClaw** | 27 (26 open) | 50 (31 merged) | ✅ v0.27.0 | **Strong** | Reborn architecture landing, CI redesign |
| **LobsterAI** | 2 (both open) | 28 (4 merged) | ✅ 2026.4.29 | **Moderate** | Stale backlog, WeChat/OpenAI auth fixes |
| **CoPaw** | 50 (33 closed) | 15 (7 merged) | ✅ v1.1.5 | **Strong** | Console session fixes, Workspace isolation |
| **ZeptoClaw** | 0 | 0 | ❌ No activity | **Inactive** | — |
| **Moltis** | 6 | 8 (3 merged) | ✅ v20260429.02 | **Very Strong** | Sandbox security fix, Voice personas |
| **ZeroClaw** | 50 (31 open) | 50 (2 merged) | ❌ None today | **Moderate** | Web onboarding parity, ACL/policy fixes |
| **TinyClaw** | 0 | 0 | ❌ No activity | **Inactive** | — |

**Health Score Criteria**: PR merge rate, issue closure rate, release frequency, severity of open bugs, contributor diversity.

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale unmatched**: 500 daily issues/PRs dwarfs all peers (next closest: 50). Maintainer response is rapid — 339 issues closed in 24h.
- **Provider breadth**: DeepInfra bundled, Codex Computer Use, marketplace discovery — wider than any competitor.
- **TypeScript ecosystem**: Node.js deployment appeals to developer-heavy audience; 474 open PRs show massive contributor pool.

**Technical Approach Differences:**
- **Gateway/runtime architecture**: OpenClaw's gateway + sidecar model (with `fail-closed MCP checks`) is more complex than NanoBot's lightweight bot approach but enables richer deployment control.
- **Marketplace (ClawHub)**: Unique ecosystem feature; community criticism (#50090) suggests it's under-delivering vs promise.

**Community Size Comparison:**
| Metric | OpenClaw | Hermes Agent | IronClaw |
|--------|----------|--------------|----------|
| Daily Issue Volume | 500 | 50 | 27 |
| PR Merge Rate (24h) | 5.2% | 36% | 62% |
| Contributors (24h) | 26 unique | 18 unique | 31 unique |
| Open PR Backlog | 474 (37 days old) | ~30 | ~20 |

OpenClaw has **10x the community engagement** of any peer, but its **PR merge rate is critically low** (5.2% vs 36-62% for peers). This suggests a **review bottleneck** that could squander contributor goodwill.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|------------------|----------------|
| **Provider Extensibility** | OpenClaw, Hermes, NanoClaw, LobsterAI, PicoClaw, Moltis | DeepInfra, Gemini, Xiaomi Mimo, Baidu Qianfan, Bedrock — all projects are adding provider plugins. Need for standardized provider discovery API. |
| **Channel Reliability** | OpenClaw (#72846), CoPaw (#2757), ZeroClaw (#6153), Moltis (#918) | WeCom/Feishu disconnects, Telegram Docker issues, Matrix voice failures — connection lifecycle bugs across all channel-capable projects. |
| **Conversational Isolation** | NanoBot (v0.1.5.post3), PicoClaw (#2715), CoPaw (#3958), Hermes (#6508) | Per-channel/thread/per-group session isolation is the top architectural priority. Users demand independent histories per conversation scope. |
| **Security & Sandboxing** | OpenClaw (#50642), IronClaw (#3077), Moltis (#924), LobsterAI (#869), ZeroClaw (#5518) | Sandbox escapes, TLS auto-trust vulnerabilities, URL protocol RCE, API key leakage — security maturity is uneven. |
| **Memory & Context Management** | CoPaw (#3893), NanoClaw (#2109), Hermes (#8457), ZeroClaw (#5550) | Context compaction, auto-compact window overrides, persistent cross-session memory, CJK-aware search. |
| **Self-Evolution / Auto-Improvement** | PicoClaw (#2722), CoPaw (#3516), NanoBot (six-stage workflow) | Agent learning from outcomes, generating skill drafts, workflow pipelines — nascent but growing trend. |

---

## 5. Differentiation Analysis

| Dimension | TypeScript Projects (OpenClaw, PicoClaw, NullClaw) | Python Projects (Hermes, NanoBot, CoPaw, ZeroClaw) | Rust Project (IronClaw) |
|-----------|-----------------------------------------------------|-----------------------------------------------------|--------------------------|
| **Target User** | Full-stack devs, JS ecosystem | ML engineers, research, Chinese market | Infrastructure teams, security-critical |
| **Deployment** | Node.js, Docker, CLI | pip, conda, Docker | Rust binary, WASM runtime |
| **Key Strength** | Ecosystem breadth (ClawHub, marketplace) | Model provider agility | Memory safety, sandbox security |
| **Key Weakness** | PR review bottleneck (474 open) | Resource consumption (Python) | Developer familiarity barrier |
| **Channel Support** | Broadest (Telegram, Feishu, WeChat, Discord, Matrix) | Strong (WeCom, QQ, Feishu focused) | Limited (main web gateway) |
| **Release Cadence** | Days (v2026.4.24 → .25 → .27 in 3 days) | Days (v0.1.5.post3) | Weeks (v0.27.0) |
| **Unique Feature** | Codex Computer Use, marketplace discovery | Hermes auto-evolution, model presets | Reborn WASM tool runtime, SSRF protection |

**Chinese Market Focus**: Hermes Agent, CoPaw, and PicoClaw show heavy investment in **WeCom, Feishu, DingTalk, and QQ** integrations — reflecting the enterprise IM dominance in China. LobsterAI and ZeroClaw also add Xiaomi/Baidu providers, suggesting China is a primary deployment region.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (daily releases, >10 PRs merged/24h):**
| Project | Momentum Signal | Stability Concern |
|---------|----------------|-------------------|
| **NanoClaw** | 20 PRs merged, Gemini provider, micropayments | Image upload regression (#2139) |
| **IronClaw** | 31 PRs merged, Reborn architecture progress | 2 live canary lanes failing |
| **Moltis** | 3 PRs merged (security, voice, import) | None active — very stable |
| **CoPaw** | 7 PRs merged, console session fix | WeCom disconnect chronic issue |

**Tier 2 — Stable Growth:**
| Project | Momentum Signal | Stability Concern |
|---------|----------------|-------------------|
| **OpenClaw** | 26 PRs closed, new Codex features | 474 open PR backlog, recurring regressions |
| **PicoClaw** | 8 PRs merged, self-evolution runtime | Race condition re-emerged (#2721) |
| **NanoBot** | 25 PRs merged, threading isolation | Competing Feishu fix PRs (#3543 vs #3547) |

**Tier 3 — Maintenance Phase:**
| Project | Signal | Concern |
|---------|--------|---------|
| **Hermes Agent** | 18 merged PRs, security fixes | 47 open issues, P0 API key leak |
| **ZeroClaw** | Only 2 PRs merged, 49 backlog | S0 context spillage, blocked status issues |
| **LobsterAI** | 4 merged PRs, patch release | 24 open stale PRs (36 days) |

**Tier 4 — Stalled/Inactive:**
| Project | Last Activity | Concern |
|---------|---------------|---------|
| **NullClaw** | Documentation fix only | Critical search bug (#871), no PRs |
| **ZeptoClaw** | No activity | Complete stagnation |
| **TinyClaw** | No activity | Complete stagnation |

---

## 7. Trend Signals

### 1. **Conversational Isolation is the New Baseline**
Users across NanoBot, PicoClaw, CoPaw, and Hermes are demanding **per-channel, per-thread, and per-group session independence**. The era of single-history agents is ending. *Value for developers*: Architect session routing as a first-class concern, not an afterthought.

### 2. **Provider Proliferation Outpacing Standardization**
Every project is adding new providers (DeepInfra, Gemini, Xiaomi, Baidu, Bedrock, OpenVINO) but there is **no shared provider interface**. The result: fragmented implementations and repeated bugs (OpenClaw's DeepSeek 400 error mirrors PicoClaw's). *Opportunity*: A standardized provider abstraction layer would reduce duplication and accelerate ecosystem growth.

### 3. **Security Maturity is Uneven**
Critical issues span the ecosystem: OpenClaw's TLS auto-trust (CVSS 9.5, 42 days unfixed), IronClaw's live canary failures (0 fix PRs), LobsterAI's RCE via URL protocol (36 days stale), ZeroClaw's context spillage (24 days blocked). Security is being **reported by power users** but not prioritized by maintainers. *Risk*: A single high-profile exploit could damage trust across the ecosystem.

### 4. **Self-Evolution is Emerging as Key Differentiator**
PicoClaw's Agent Self-Evolution Runtime (#2722), CoPaw's Hermes-inspired auto-evolution (#3516), and NanoBot's six-stage workflow execution signal a shift from **static agents to learning systems**. This is the most strategic innovation area — projects that master it will define the next generation of personal AI.

### 5. **PR Review Bottleneck Threatens Contributor Retention**
OpenClaw's 474 open PRs (37 days old), Hermes's 30+ unmerged, and LobsterAI's 24 stale PRs (36 days) suggest **maintainers cannot keep pace with contribution volume**. The 26 PRs closed by OpenClaw vs 474 open means new contributors face months of waiting. *Recommendation*: Implement automated CI merge criteria, reviewer rotation, or community co-maintainer roles.

### 6. **Web UI Parity is the New UX Battleground**
ZeroClaw (#6179), Moltis (#917), and CoPaw (#3958) are all investing in **web-based console, onboarding, and configuration UI**. CLI-only agents are losing ground to projects with polished dashboards. *Prediction*: Next 6 months will see a "UX arms race" in web interfaces.

### 7. **Chinese Enterprise IM Integration is a Major Market**
Hermes Agent, CoPaw, LobsterAI, and PicoClaw all prioritize WeCom, Feishu, DingTalk, and QQ. This reflects **China's enterprise messaging dominance** (vs Slack/Discord in the West). Developers targeting global deployment need multi-platform strategy.

---

**Bottom Line**: The ecosystem is healthy but bifurcating — TypeScript projects (OpenClaw, PicoClaw) lead in contributor volume and marketplace features, Python projects (Hermes, NanoBot, CoPaw) lead in model agility and Chinese market coverage, while IronClaw's Rust foundation offers a security and performance moat. The **critical bottleneck is review bandwidth**: without addressing PR backlogs, talent will migrate to projects with faster merge times like NanoClaw and Moltis.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-30

## Today's Overview

NanoBot saw a high-traffic day with **8 issues updated** (1 open, 7 closed) and **36 PRs updated** (11 open, 25 merged/closed), reflecting intense community and maintainer activity. The release of **v0.1.5.post3** marks a major milestone with 57 merged PRs and 12 new contributors, centering on making conversations "first-class citizens" across platforms. A flurry of duplicate PRs targeting the same Feishu thread-reply bug (#3533) indicates both urgency and a need for maintainer coordination. Overall project health is strong, with rapid bugfix cycles, active feature development, and growing contributor diversity, though multiple overlapping fixes for the same issue suggest communication friction.

## Releases

**v0.1.5.post3** — "The agent learned to talk in threads."

- **Major themes:** Conversational isolation per platform — Feishu group topics now get independent sessions; 57 PRs merged, 12 new contributors.
- **Breaking changes:** None explicitly called out; backward compatibility is implied.
- **Migration notes:** Unspecified in the release snippet; users on pre-v0.1.5.post2 should consult the full changelog.

## Project Progress

**Merged/closed PRs today: 25** — Highlights include:

- **Per-channel progress controls** (#3487) — `sendProgress` and `sendToolHints` can now be overridden per channel config, addressing a long-standing feature request.
- **Olostep web search provider** (#3505) — New backend for web searches, backported from nightly.
- **Atomic write for history.jsonl** (#3508) — Prevents file corruption on crash/power loss.
- **Centralized HookCenter** (#3541) — New plugin architecture via `entry_points`.
- **Multi-account WeChat support** (#3542) — Refactors personal WeChat channel to run multiple accounts.
- **Six-stage workflow execution** (PRs #3535, #3531, #3529) — Experimental agent workflow pipeline (classification, planning, execution, compression, validation, reporting) with environment variable toggle.
- **Model presets** (#3358) — Named bundles of model + generation parameters for quick switching.

## Community Hot Topics

1. **#3533** — `[Bug] reply_in_thread is forced in group chats ignoring replyToMessage config` — **Open, 0 comments** but sparked **two competing fix PRs** (#3543 and #3547) and was cited in issue #3546. Central pain point for Feishu users.

2. **#3546** — `[bug] NanoBot失忆` — **Closed, 6 comments**. User reports confusion over forced thread replies and "memory loss" after disabling them. This is the most commented issue today, indicating deep frustration with Feishu group behavior.

3. **#2867** — Telegram group allowlist + fallback agents — **Open, long-running PR** (since Apr 6) with ongoing discussion about Telegram-specific ACL and context token handling.

## Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | #3533 — Feishu forced `reply_in_thread=True` in groups, ignoring config | Open | #3543, #3547 (both open, competing) |
| **High** | #3546 — Feishu thread behavior causing agent "memory loss" | Closed | Released in v0.1.5.post3 (partial) |
| **Medium** | #3517 — WeChat messages silently dropped by cron after stale `context_token` | Open (PR #3517) | Fix proposed |
| **Medium** | #3506 — Matrix channel `OSError` on Windows due to colon in file path | Closed | Fix merged |
| **Low** | #1783 — Codex provider 60s timeout with no retry | Closed | Fix merged |
| **Low** | #3508 — `history.jsonl` corruption risk | Merged | PR #3508 |

## Feature Requests & Roadmap Signals

- **Per-channel configuration of `sendProgress`/`sendToolHints`** — Requested in #3452, already implemented and merged in PR #3487. Likely to ship in next patch.
- **Multi-account WeChat** — PR #3542 is open; strong candidate for v0.1.6 given the demand for personal WeChat channel flexibility.
- **Gateway lifecycle commands** (start/stop/restart) — PR #3538 adds CLI/deployment improvements for gateway management.
- **Model presets** — PR #3358 introduces a configurable preset system, aligning with community requests for easier model switching.
- **Upgrade wizard** — PR #3539 proposes a built-in skill for creating new bot instances via conversation; could become a v0.2 feature.

## User Feedback Summary

- **Pain points:** Feishu group thread behavior is confusing and forces unwanted conversational structure (#3533, #3546). Matrix on Windows remains broken for some use cases (#3506, fixed). Codex provider timeouts silently fail cron jobs (#1783, fixed).
- **Satisfaction drivers:** The rapid fix cycle (7 issues closed today) and responsiveness to user requests (per-channel progress controls now merged) are positively received. The "learned to talk in threads" release note suggests developers are actively listening.
- **Unmet needs:** Users want more granular per-channel config (not just global defaults), and WeChat multi-account support remains a top requested but still-open feature.

## Backlog Watch

| Item | Age | Issue/PR | Status | Notes |
|------|-----|----------|--------|-------|
| **#2867** — Telegram group allowlist + streaming fixes | 24 days | PR (open) | Open, low activity | Needs maintainer review to prevent stagnation |
| **#2341** — WebFetchTool always proxies through Jina irrespective of API key | 39 days | Issue (closed) | Closed but unresolved | Privacy concern — may need re-opening if users continue hitting it |
| **#1783** — Codex provider timeout/retry | 52 days | Issue (closed) | Fix merged | Important for production reliability; ensure full resolution verified |
| **#3358** — Model presets | 9 days | PR (open) | Open | High-value feature; needs maintainer feedback soon to avoid scope drift |

---

*Generated 2026-04-30 from GitHub activity on [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-30

## Today's Overview
Project activity is **very high**, with 50 Issues and 50 PRs updated in the last 24 hours. Of the 50 Issues, only 3 were closed, indicating a growing open bug/feature backlog (47 currently open). On the PR side, 18 were merged or closed, suggesting a productive merge cycle. No new releases were published today, but the high PR throughput signals preparation for a near-term release. Security and P1-severity issues are prominent, and the community is actively contributing salvaged PRs (reapplying valuable work that stalled on older branches).

## Releases
No new releases were published on 2026-04-30.

## Project Progress
**18 PRs merged/closed today**, with several notable thematic salvages by teknium1 that resurrected high-value contributions from community members:

- **Security fixes merged:**
  - [#17748](https://github.com/NousResearch/hermes-agent/pull/17748) — fix(telegram): support group user allowlist (salvage of #17686)
  - [#17746](https://github.com/NousResearch/hermes-agent/pull/17746) — fix(security): apply ACL checks to QQBot guild messages and guild DMs
- **Feature additions merged:**
  - [#17745](https://github.com/NousResearch/hermes-agent/pull/17745) — New "Models" dashboard tab with per-model analytics cards (token distribution, capability badges, context window)
  - [#17744](https://github.com/NousResearch/hermes-agent/pull/17744) — `/reload-skills` slash command for mid-session skill updates without restart
- **Stability fixes merged:**
  - [#17747](https://github.com/NousResearch/hermes-agent/pull/17747) — fix(cron): clear auto-delivery thread context between jobs
  - [#17750](https://github.com/NousResearch/hermes-agent/pull/17750) — fix(agent): spawn OpenRouter pre-warm thread only once per process (prevents OS thread leaks)

## Community Hot Topics

### Most Active Issues (by comments)
1. **[#8457](https://github.com/NousResearch/hermes-agent/issues/8457) — Feature: Persistent Session Memory** (6 comments)
   - User request for session memory that survives restarts and cross-session search/auto-compression. High activity suggests strong demand for persistent memory.
2. **[#6508](https://github.com/NousResearch/hermes-agent/issues/6508) — Bug: Topic-bound skill not re-injected after /new reset** (5 comments)
   - Telegram-specific session management bug generating sustained discussion over 21 days.
3. **[#17743](https://github.com/NousResearch/hermes-agent/issues/17743) — Bug: profile create --clone-all recursion** (4 comments, *closed*)
   - Deeply recursive directory nesting bug in CLI profile management, quickly resolved.

### Most Upvoted Issues
- **[#9127](https://github.com/NousResearch/hermes-agent/issues/9127)** — Add MiniMax vision_analyze support (4 👍)
- **[#10016](https://github.com/NousResearch/hermes-agent/issues/10016)** — Browser-compatible Codex login (3 👍)
- **[#6448](https://github.com/NousResearch/hermes-agent/issues/6448)** — Ctrl+D CLI behavior (2 👍)

**Underlying needs:** Users are pushing for (1) persistent/persistent session memory across restarts, (2) broader provider support (MiniMax vision, browser-based Codex auth), and (3) CLI UX polish (Ctrl+D behavior, profile management safety).

## Bugs & Stability

### P0 (Critical)
- **[#17691](https://github.com/NousResearch/hermes-agent/issues/17691) — Security: `HERMES_REDACT_SECRETS` off-by-default exposes API keys** — API keys leaked to users via Telegram/Discord chat output. No fix PR yet; requires urgent config change.

### P1 (High)
- **[#17648](https://github.com/NousResearch/hermes-agent/issues/17648) — Matrix messages returning ImportError** — `cfg_get` import missing in current version. Breaks Matrix gateway entirely.
- **[#17724](https://github.com/NousResearch/hermes-agent/issues/17724) — Discord native slash commands bypass ALLOWED_CHANNELS** — Security bypass for multi-bot deployments.
- **[#6568](https://github.com/NousResearch/hermes-agent/issues/6568) — Sandbox spawn fails on unprivileged LXC** — Hardcoded cgroup limits break Docker sandbox on constrained hosts.
- **[#17752](https://github.com/NousResearch/hermes-agent/pull/17752)** — Fix for Anthropic OAuth 1M-context beta rejection (*fix PR open*)

### P2 (Medium)
- **[#6508](https://github.com/NousResearch/hermes-agent/issues/6508)** — Topic-bound skill not re-injected after `/new` — Telegram forum workflow broken.
- **[#17452](https://github.com/NousResearch/hermes-agent/issues/17452)** — Dotted model names mangled by custom_providers → 502 errors with local proxies.
- **[#6511](https://github.com/NousResearch/hermes-agent/issues/6511)** — Discord image/audio attachments fail under DNS-rewriting proxies (China/SSRF false positive).
- **[#6559](https://github.com/NousResearch/hermes-agent/issues/6559)** — Ollama concurrency causes literal '(empty)' Telegram responses.
- **[#6560](https://github.com/NousResearch/hermes-agent/issues/6560)** — vision_analyze fails on providers using /responses stream deltas.

### Fix PRs In Flight for Today's Bugs
- **[#17752](https://github.com/NousResearch/hermes-agent/pull/17752)** — Anthropic OAuth 1M-context beta rejection (*open*)
- **[#17749](https://github.com/NousResearch/hermes-agent/pull/17749)** — Per-model rate limiter for 429 prevention (*open*)

## Feature Requests & Roadmap Signals

### Strong Community Demand (feature requests with high engagement):
1. **Persistent Session Memory** ([#8457](https://github.com/NousResearch/hermes-agent/issues/8457)) — Cross-session search + auto-compression. Likely targets next minor release.
2. **Browser-compatible Codex login** ([#10016](https://github.com/NousResearch/hermes-agent/issues/10016)) — Alternative to device-code flow for restricted networks.
3. **MiniMax vision support** ([#9127](https://github.com/NousResearch/hermes-agent/issues/9127)) — 4 upvotes, clear demand from Chinese users.
4. **Per-call model override in delegate_task** ([#17732](https://github.com/NousResearch/hermes-agent/issues/17732)) — Today a matching fix PR ([#17756](https://github.com/NousResearch/hermes-agent/pull/17756)) was opened, suggesting imminent implementation.

### Likely Next-Release Features
- Per-call model/provider overrides for `delegate_task` (PR #17756 open)
- Pluggable gateway platform adapters (PR #17751 open, salvage of #7942)
- Per-model rate limiter (PR #17749 open)
- Models dashboard tab (PR #17745 *merged* today)
- `/reload-skills` command (PR #17744 *merged* today)

## User Feedback Summary

### Pain Points (reported today)
- **Security exposure:** API keys leaked to end users unless `HERMES_REDACT_SECRETS` is manually enabled — default is unsafe.
- **Matrix adapter broken** — ImportError blocks entire platform.
- **Auxiliary task failures** — Title generation fails for Minimax China users ([#17705](https://github.com/NousResearch/hermes-agent/issues/17705)); auxiliary tasks ignore custom base_url ([#17737](https://github.com/NousResearch/hermes-agent/issues/17737)).
- **CLI/UI friction:** Ctrl+D exits with non-empty buffer ([#6448](https://github.com/NousResearch/hermes-agent/issues/6448)), TUI stream parser eats text after `<think>` tags ([#6442](https://github.com/NousResearch/hermes-agent/issues/6442)), ASCII tables misalign with CJK characters ([#17700](https://github.com/NousResearch/hermes-agent/issues/17700)).
- **Chinese ecosystem issues:** DNS-rewriting proxies break Discord attachments, WeCom bot is slow, QQBot ACL was missing for guild messages.

### Satisfaction Signals
- **14 out of 18 merged PRs today** are community-contributed salvages or features, indicating a healthy contributor ecosystem.
- DeepInfra provider support PR ([#5521](https://github.com/NousResearch/hermes-agent/pull/5521)) remains active with no negative feedback.
- `hermes update` hangs bug ([#17755](https://github.com/NousResearch/hermes-agent/issues/17755)) was reported with clear root cause analysis, suggesting power users are engaged.

## Backlog Watch

### Issues Needing Maintainer Attention (long-open, high impact)
- **[#6448](https://github.com/NousResearch/hermes-agent/issues/6448) — Ctrl+D CLI exit** (21 days, 3 comments, 2 👍) — Simple UX fix that affects all CLI users.
- **[#6508](https://github.com/NousResearch/hermes-agent/issues/6508) — Topic-bound skill not re-injected** (21 days, 5 comments) — Telegram forum workflow regression.
- **[#6442](https://github.com/NousResearch/hermes-agent/issues/6442) — TUI stream parser swallows text after `<think>`** (21 days) — Bisects model reply content.
- **[#9127](https://github.com/NousResearch/hermes-agent/issues/9127) — MiniMax vision support** (17 days, 2 comments, 4 👍) — Community demand is high.
- **[#6429](https://github.com/NousResearch/hermes-agent/issues/6429) — Hindsight tool_calls option** (21 days, 1 comment) — Plugin enhancement that would improve memory quality.

### Stale PRs (long-open, no recent activity)
- **[#5521](https://github.com/NousResearch/hermes-agent/pull/5521) — DeepInfra provider** (24 days) — Large feature with no conflicts reported but no merge signal.
- **[#6410](https://github.com/NousResearch/hermes-agent/pull/6410) — Codex native multimodal vision** (21 days) — Feature-rich PR awaiting review/merge.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-30

## 1. Today's Overview

PicoClaw shows very high activity today with 13 issues updated and 20 pull requests touched in the last 24 hours, indicating a healthy, fast-moving open-source project. The team merged/closed 8 PRs and published a new nightly build (v0.2.7-nightly), though release velocity remains in the nightly stage without a stable version bump. Notably, a significant feature PR for **Agent Self-Evolution Runtime** (#2722) was merged, representing a major architectural advancement. Community engagement remains strong across both bug reports and feature discussions, with 12 open issues and 12 open PRs reflecting sustained contributor momentum.

---

## 2. Releases

**New:** `v0.2.7-nightly.20260430.a36472b5` (Nightly Build)

- Automated nightly build from the `main` branch; marked as potentially unstable.
- Full changelog: [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
- **No breaking changes or migration notes** provided in this release.

---

## 3. Project Progress

**8 PRs merged/closed today:**

| PR | Description | Category |
|---|---|---|
| [#2722](https://github.com/sipeed/picoclaw/pull/2722) | **Agent Self-Evolution Runtime** — records learnable outcomes, generates skill drafts, applies safety checks in the agent loop | Core Feature |
| [#2713](https://github.com/sipeed/picoclaw/pull/2713) | Fix: dismiss tool feedback animation when turn ends via `ResponseHandled` | Bug Fix (Feishu) |
| [#2708](https://github.com/sipeed/picoclaw/pull/2708) | Fix: Feishu image download with API fallback and post image support | Bug Fix (Feishu) |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | Fix: frontend copy button in HTTP (non-secure) contexts | Bug Fix (WebUI) |
| [#2710](https://github.com/sipeed/picoclaw/pull/2710) | Add CLI support for custom OpenAI-compatible endpoints + **remove TUI** | Feature + Deprecation |
| [#2709](https://github.com/sipeed/picoclaw/pull/2709) | Frontend copy button fix (duplicate of #2711) | Bug Fix (WebUI) |
| [#2700](https://github.com/sipeed/picoclaw/pull/2700) | Fix: restore `docker compose build` and fix Go version in Dockerfiles | Build Fix |
| [#2714](https://github.com/sipeed/picoclaw/pull/2714) | (Closed in favor of #2715) Per-sender history attribution for group chats | Superseded |

**Key advancement:** The merged **Agent Self-Evolution** runtime (#2722) is the most consequential feature today — it enables PicoClaw to learn from task outcomes during execution, aggregate them in the background, and generate new skill drafts autonomously. Additionally, **TUI removal** (#2710) marks the formal deprecation of the Terminal User Interface, with its core features migrated to the CLI.

---

## 4. Community Hot Topics

**1. TUI Deprecation RFC** — [#2208](https://github.com/sipeed/picoclaw/issues/2208)
- 8 👍 reactions, 1 comment; *closed today*
- Proposal to deprecate TUI and migrate features to CLI has been **accepted and acted upon** (PR #2710 merged today). The community strongly supported this direction.

**2. OpenAI Responses API Migration** — [#2171](https://github.com/sipeed/picoclaw/issues/2171)
- 9 comments (highest discussion volume); open since March 30
- Users are advocating to move from Chat Completions to OpenAI's newer Responses API. This is a significant refactoring discussion with a detailed to-do list already partially completed.

**3. Per-Sender History for Group Chats** — [#2715](https://github.com/sipeed/picoclaw/pull/2715)
- New PR (open); resubmitted from #2714 with cleaner commits
- Addresses a core UX gap: in group-capable channels (Discord, Telegram, Slack), all users share session history without attribution, confusing models. High community interest.

**4. DeepSeek V4 Thinking Model Support** — [#2706](https://github.com/sipeed/picoclaw/issues/2706)
- 1 👍, opened yesterday — but represents a growing concern around reasoning model compatibility as DeepSeek evolves rapidly.

---

## 5. Bugs & Stability

### Critical Severity

- **[#2721](https://github.com/sipeed/picoclaw/issues/2721) — Session history race still reproducing in v0.2.5** (opened today)
  - **High priority** — `tool_use_id` 400 error from Anthropic Messages API; race condition re-emerges despite previous fix attempts (#704). Affects Telegram channel. **No fix PR yet.**
  - Reporter states issue is *reproducible and not fixed* despite being marked closed.

- **[#2720](https://github.com/sipeed/picoclaw/issues/2720) — Singleton PID check doesn't verify process identity** (opened today)
  - **High priority** — Stale PID from `systemd-resolved` causes crash loop on gateway startup. Affects Linux deployments. **No fix PR yet.**

- **[#2718](https://github.com/sipeed/picoclaw/issues/2718) — DeepSeek 400 error: `unknown variant image_url`** (opened yesterday)
  - Non-multimodal models (DeepSeek-chat) fail when image messages persist in history from channels (WeChat, DingTalk). **Fix PR exists**: [#2717](https://github.com/sipeed/picoclaw/pull/2717) adds detection for this error pattern.

### High Severity

- **[#2706](https://github.com/sipeed/picoclaw/issues/2706) — DeepSeek V4 thinking model broken** — `reasoning_content` not saved/replayed, causing 400 errors. Fix PR [#2707](https://github.com/sipeed/picoclaw/pull/2707) addresses SeaHorse `reasoning_content` persistence, but the issue remains open.

### Medium Severity

- **[#2716](https://github.com/sipeed/picoclaw/issues/2716) — SVG files fail on Telegram** — `inferMediaType` maps `image/svg+xml` to `SendPhoto` which rejects SVGs. **No fix PR yet.**

### Regressions Fixed Today

- **Feishu image download** (#2708) — fixed API fallback and post image extraction
- **WebUI copy button** (#2712, #2711, #2709) — fixed for HTTP (non-HTTPS) environments
- **Docker build** (#2700) — restored `docker compose build` functionality

---

## 6. Feature Requests & Roadmap Signals

**Likely for next stable release (v0.3.0):**

| Request | Issue/PR | Likelihood |
|---|---|---|
| **Agent Self-Evolution Runtime** | [#2722](https://github.com/sipeed/picoclaw/pull/2722) (merged) | ✅ Already in main |
| **Per-sender history in group chats** | [#2715](https://github.com/sipeed/picoclaw/pull/2715) | High — clean PR, strong use case |
| **SLACK webhook output channel** | [#2719](https://github.com/sipeed/picoclaw/pull/2719) | High — new channel, low risk |
| **MQTT channel support** | [#2705](https://github.com/sipeed/picoclaw/pull/2705) | Medium — niche but clean PR |
| **Intel OpenVINO Model Server support** | [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Medium — local inference, niche hardware |
| **OpenAI Responses API migration** | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Medium-Long — major refactor, discussion ongoing |

**Longer-term signals:**
- **OpenCode support** ([#2671](https://github.com/sipeed/picoclaw/issues/2671)) — Chinese user request for specific subscription-based provider
- **`.env` file support for skills** ([#2623](https://github.com/sipeed/picoclaw/issues/2623)) — environment variable management for custom skills
- **WhatsApp support in compiled builds** ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) — Raspberry Pi users need pre-built WhatsApp support
- **OpenAI-compatible embeddings** ([#2624](https://github.com/sipeed/picoclaw/pull/2624)) — vLLM-style embedding endpoints

---

## 7. User Feedback Summary

**Pain Points:**
- **Session context loss after API timeout** (#2621) — "creates duplicate default session instead of resuming" — critical UX issue for production users
- **Multi-user group chat confusion** (#2715) — everyone shares one history with no sender attribution; models get confused
- **DeepSeek thinking model incompatibility** (#2706, #2718) — multiple users hitting 400 errors when trying latest DeepSeek models
- **Old race condition re-emerging** (#2721) — user frustrated that previously closed issue (#704) is not actually fixed
- **PID file crash on Linux** (#2720) — "stale PID causes crash loop" — impacts server deployments

**Satisfaction Signals:**
- Strong engagement on TUI deprecation (8 👍) suggests community prefers WebUI/CLI direction
- Multiple active PRs from distinct contributors (12+ unique authors in last 24h) indicate healthy ecosystem
- `exec` tool guard command false positive (#1042) still open since March but no major frustration expressed

---

## 8. Backlog Watch

| Issue | Age | Status | Why Watch |
|---|---|---|---|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` tool `guardCommand` false positive for curl URLs | 57 days (since Mar 4) | Stale, 1 👍 | Blocks simple use cases like `curl wttr.in` with `restrict_to_workspace=true` |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) — OpenAI Responses API migration | 31 days (since Mar 30) | Open, 9 comments | Major refactoring discussion with partial progress — needs maintainer decision |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) — Multiple authentication credentials error | 14 days (since Apr 16) | Stale | Configuration-level bug affecting Gemini/OpenAI multi-key setups |
| [#2621](https://github.com/sipeed/picoclaw/issues/2621) — Session context lost after API timeout | 8 days (since Apr 22) | Stale | Critical UX bug with no maintainer response yet |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) — Anthropic prompt caching fix | 31 days (since Mar 30) | Stale PR | Fixes #2191 — Anthropic users losing prompt caching benefits; no merge activity |

**Most actionable:** [#2192](https://github.com/sipeed/picoclaw/pull/2192) (Anthropic cache fix) has been open for a month with no visible progress — it directly affects performance for Anthropic users and should be prioritized.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-30

## Today's Overview
NanoClaw is experiencing a major surge in development activity. In the last 24 hours, 50 pull requests were updated (20 merged/closed, 30 open), indicating a highly productive sprint cycle. The project also saw 3 issues updated, with 2 remaining open. A significant push is visible around provider extensibility, environment variable management, and infrastructure fixes, driven by multiple active contributors. No new releases were published today, but the high volume of merged PRs suggests a release may be imminent.

## Releases
No new releases were published today.

## Project Progress
Twenty PRs were merged or closed today, reflecting substantial progress across multiple areas:

- **Google Gemini Provider** (#2135, #2137 closed) — After iterative refinement, Google Gemini is now integrated as a first-class agent provider, following the OpenAI Codex architectural pattern using JSON-RPC over stdio.
- **OneCLI-native Google integrations** — Two utility skills were merged: `/add-gmail-tool` (#1961) and `/add-gcal-tool` (#1964), enabling Gmail and Google Calendar as MCP tools via OneCLI credential injection.
- **Micropayment API access** — The `add-agentcash` skill (#1767) was merged, enabling pay-per-call API access via x402 micropayments, a novel monetization integration.
- **Copilot instructions** (#2140 closed) — GitHub Copilot configuration guidelines were added to the repository.
- **Infrastructure fixes** — Multiple fixes and enhancements landed around container environment variable forwarding, thinking display configuration, session resumption behavior, and headless host setup hints.

## Community Hot Topics
All three open issues and multiple PRs have drawn community engagement, though specific reaction counts were low:

- **#2139 [API Error: 400 — Could not process image]** — A user reports their NanoClaw instance stopped processing image uploads mid-session after two successful uploads from a phone. This indicates a potential regression in the media processing pipeline or session state corruption. [Issue Link](https://github.com/qwibitai/nanoclaw/issues/2139)
- **#2109 [Context compact issue]** — A user on Opus 4.7 reports context compacting at 200K tokens despite the model supporting 1M, suggesting the auto-compact threshold override is not working as expected. This parallels PR #2138 (forward `AGENT_AUTO_COMPACT_WINDOW` to containers). [Issue Link](https://github.com/qwibitai/nanoclaw/issues/2109)
- **#1624 [Matrix E2EE + per-group configuration]** — A long-running PR (open since April 4) continues to receive updates, adding Matrix E2EE support and per-group model/effort configuration — a feature with high community interest for secure, group-aware deployments. [PR Link](https://github.com/qwibitai/nanoclaw/pull/1624)

## Bugs & Stability
Two stability issues were reported or addressed today:

| Severity | Issue/PR | Description | Fix Available? |
|----------|----------|-------------|----------------|
| **High** | #2139 | Image upload processing failure on third upload — agent stops responding entirely | No fix yet; investigation needed |
| **Medium** | #2109 | Context compaction at 200K on 1M-capable Opus 4.7 — `CLAUDE_CODE_AUTO_COMPACT_WINDOW` variable ineffective | PR #2138 (forward env var to containers) opened by andrebrov |
| **Medium** | #1820 | `agent-runner` unconditionally overwrites `CLAUDE_CODE_AUTO_COMPACT_WINDOW` — no operator override possible | Closed; likely fixed by env var forwarding changes |
| **Low** | #2130 | Thinking-only `end_turn` produces empty replies on session resume — causes looping behavior | PR #2130 open with detection fix |
| **Low** | #2127 | Scheduled task batches replayed previous task's output due to session resumption | PR #2127 open with fix |

## Feature Requests & Roadmap Signals
Several feature signals emerged from today's activity:

- **Multiple Provider Support** — The merged Google Gemini provider (#2135/2137) signals a clear roadmap toward multi-provider support. Remote HTTP/SSE MCP servers (#2131) would further broaden integration possibilities.
- **Knowledge Base / Wiki** — PR #2133 introduces a `knowledge/raw/` ingest directory for LLM wiki compilation, suggesting an upcoming knowledge management feature.
- **Per-Group Model Override** — PR #2129 adds per-group model configuration with env passthrough, addressing a common request for team-specific agent customization.
- **Decision Bridges** — PR #2141 adds a Feishu decision bridge via IPC, indicating continued investment in enterprise messaging platform integration.
- **Prediction for Next Version:** Expect Gemini provider integration, knowledge base scaffolding, and per-group model overrides to ship in the next release.

## User Feedback Summary
- **Positive:** Users express satisfaction ("lots of fun with my nanoclaw setup") with the project's capabilities.
- **Pain Points:**
  - Image processing reliability (#2139) — mid-session failures after multiple uploads is a significant workflow disruption.
  - Context window configuration confusion (#2109, #1820) — users struggle with overriding auto-compact thresholds, suggesting documentation improvements are needed.
  - **Underlying Need:** Users want transparent, tunable context management and reliable media processing without manual intervention.

## Backlog Watch
The following items require maintainer attention:

- **#1624 [Matrix E2EE + per-group configuration]** (open since April 4) — This large, complex PR continues receiving updates but has not been merged. Its extensive scope (Matrix E2EE, per-group config, MCP skills) may benefit from splitting into smaller, reviewable chunks. [PR Link](https://github.com/qwibitai/nanoclaw/pull/1624)
- **#1998 [Fix: route inbound WhatsApp media through session attachment pipeline]** (open since April 25) — A community fix for WhatsApp media handling has not yet received maintainer review. [PR Link](https://github.com/qwibitai/nanoclaw/pull/1998)
- **#2016 [Add /add-ynab-tool skill]** (open since April 25) — YNAB integration via OneCLI, no maintainer activity. [PR Link](https://github.com/qwibitai/nanoclaw/pull/2016)

---

*Generated from GitHub issue/PR data for qwibitai/nanoclaw as of 2026-04-30.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-30

## Today's Overview
Project activity is low, with only two issues updated in the last 24 hours—one closed and one open. No pull requests or new releases were recorded. The single open issue (#871) is a critical usability bug that could significantly impact NullClaw’s target deployment on low-resource devices. The closed issue (#874) reflects a quick documentation fix for a missing security policy field. Overall, the project appears in a maintenance phase with minor documentation improvements, but a major functional gap remains unresolved.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
No pull requests were merged or closed today.

## Community Hot Topics
- **Issue #871: [OPEN] [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support** — [Link](https://github.com/nullclaw/nullclaw/issues/871)  
  Created by uMendex on 2026-04-25, updated 2026-04-29. 1 comment, 0 reactions.  
  The core concern is that `web_search` functionality currently depends on the Brave Search API (requiring an external API key), which is impractical for NullClaw’s intended lightweight, low-resource device use case. The underlying need is for a zero-dependency, API-key-free search backend – likely DuckDuckGo's no-key instant answer or direct scraping option. This is the most impactful open conversation, as it directly contradicts the project’s stated design goal.

## Bugs & Stability
- **Critical:** Issue #871 — `web_search` unusable on low-resource devices without DuckDuckGo support. No fix PR exists.  
- **Low/Closed:** Issue #874 — Missing documentation for `security.policy` field `default_allowed_commands`. Already closed, no further action needed.

## Feature Requests & Roadmap Signals
The primary feature signal from the community is a request for **native DuckDuckGo search integration** as an alternative to Brave Search API. Given that this would restore core functionality for low-resource deployments, it is a strong candidate for inclusion in the next minor release. No other feature requests were active in the last 24 hours.

## User Feedback Summary
Users are expressing dissatisfaction with the current `web_search` implementation. The requirement for an external API key (Brave) makes the feature impractical on weak, cheap devices, where NullClaw is supposed to excel. The feedback highlights a mismatch between the project’s value proposition and the actual dependency chain. The documentation issue (#874) was minor and quickly resolved, suggesting users are still actively testing and reading the code.

## Backlog Watch
No long-unanswered issues or PRs were flagged in this period. The only open issue (#871) is recent and already receiving attention.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-30

## Today's Overview

IronClaw activity surged dramatically over the past 24 hours, marking one of the most intense development periods in recent history. With **50 PRs** updated (31 merged/closed) and **27 active issues** (26 open), the project is deep in the **Reborn architecture landing** — a major rewrite of the runtime, capability, and transport layers. A new release **v0.27.0** shipped yesterday, though the bulk of activity targets the upcoming `reborn-integration` branch rather than the current stable. Two live canary lanes (`public-smoke` and `persona-rotating`) are currently failing, indicating integration stress. Overall, the project is in a high-velocity transition phase: rapid feature delivery across the Reborn substrate, coupled with known stability regressions in production.

## Releases

- **ironclaw-v0.27.0** (2026-04-29) — [Release notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.27.0)
  - **Added:**
    - Canonical capability status vocabulary for the v2 runtime contract ([#2825](https://github.com/nearai/ironclaw/pull/2825))
    - Centralized action-vs-capability surface policy across prompt, runtime, bridge projection, and tool surface
  - **No breaking changes or migration notes documented** — this appears to be a compatible addition.

## Project Progress

**31 PRs merged/closed in the last 24 hours**, representing an extraordinary rate of delivery. Key advancements:

### Reborn Architecture (the dominant theme)
- **Secrets & network boundaries landed** ([#3077](https://github.com/nearai/ironclaw/pull/3077)): `ironclaw_secrets` and `ironclaw_network` crates with scoped `SecretStore`, one-shot `SecretLease`, metadata-only network policy, and DNS/SSRF protection
- **WIT-compatible WASM tool runtime** — merged prematurely then reverted ([#3096](https://github.com/nearai/ironclaw/pull/3096), then restored as [#3097](https://github.com/nearai/ironclaw/pull/3097))
- **Host runtime contract facade** ([#3095](https://github.com/nearai/ironclaw/pull/3095)): Stable API surface for `TurnCoordinator`, `AgentLoopHost`, and model gateway
- **Process error classification fix** ([#3084](https://github.com/nearai/ironclaw/pull/3084)): Replaced blanket `From<HostApiError>` with path helpers
- **Tightened v2 structured tool prompts** ([#3051](https://github.com/nearai/ironclaw/pull/3051)): Clarified execution prompt semantics, removed CodeAct/Python examples

### CI Infrastructure
- **Merge queue CI redesign** phase 1 ([#2877](https://github.com/nearai/ironclaw/pull/2877)): Complete CI redesign for `main` merge-queue model
- **Staging promotion pipeline removed** ([#2783](https://github.com/nearai/ironclaw/pull/2783)): Old staging-first rollout deleted
- **Main-only merge queue cutover** ([#3104](https://github.com/nearai/ironclaw/pull/3104), open): Adding `merge_group` support for `main`-centric workflows

### Other
- **LLM reasoning trace** ([#3102](https://github.com/nearai/ironclaw/pull/3102), open): Provider-agnostic native chain-of-thought capture (Anthropic extended thinking, OpenAI o-series, Gemini thought parts, etc.)
- **Persist inline image artifacts** ([#3065](https://github.com/nearai/ironclaw/pull/3065), open): Attachments and tool results now survive turn boundaries

## Community Hot Topics

1. **[#2987 — [EPIC] Track Reborn architecture landing strategy and grouped PR plan](https://github.com/nearai/ironclaw/issues/2987)**
   - **38 comments**, by far the most active issue
   - The central coordination point for the entire Reborn landing. Tracked: PR grouping strategy, branch strategy (`reborn-integration` → `staging`), reviewer checklist, cutover blockers. Underlying need: avoid reviewing a single massive PR while ensuring architectural coherence.

2. **[#3045 — [Reborn] Add runtime presets and effective runtime policy](https://github.com/nearai/ironclaw/issues/3045)**
   - **3 comments** — User/operator-facing request for preset operating modes (e.g., `--profile local-dev --profile ci`) to avoid hand-wiring grants, mounts, network policy. Indicates community desire for usability abstractions atop the Reborn substrate.

3. **[#3103 — High ASCII TUI in new ironclaw does not display correctly](https://github.com/nearai/ironclaw/issues/3103)**
   - **2 comments** — Real user encountering broken TUI rendering in the new build. High ASCII scrolling artifacts on certain TTYs. No fix PR yet.

4. **[#3067 — [TEST] Reborn: Add vertical-slice integration test suite](https://github.com/nearai/ironclaw/issues/3067)**
   - **2 comments** — Recognition that Reborn needs caller-level integration tests beyond crate-local unit tests. Underlying need: confidence in the Reborn stack working through public entrypoints before cutover.

## Bugs & Stability

| Issue | Severity | Summary | Fix PR Exists? |
|-------|----------|---------|----------------|
| [#3075](https://github.com/nearai/ironclaw/issues/3075) — Live canary `public-smoke` failed | **Critical** (production) | Canary lane failing on commit `2a65da7c` with Anthropic provider | No |
| [#3074](https://github.com/nearai/ironclaw/issues/3074) — Live canary `persona-rotating` failed | **Critical** (production) | Same commit, different lane, same provider | No |
| [#3064](https://github.com/nearai/ironclaw/issues/3064) — Live canary `public-smoke` failed (earlier instance) | **Critical** (production) | Repeated failure pattern | No |
| [#3082](https://github.com/nearai/ironclaw/issues/3082) — App hangs on "Restarting IronClaw" | **High** (P2, user-blocking) | Enabling Auto Approvals for tools causes infinite restart | No |
| [#3083](https://github.com/nearai/ironclaw/issues/3083) — Duplicate user creation | **High** (P2, data integrity) | Missing loading state + no submission debounce | No |
| [#3103](https://github.com/nearai/ironclaw/issues/3103) — TUI display corruption | **Medium** (P2, UX) | High ASCII scrolling artifacts on some TTYs | No |
| [#3081](https://github.com/nearai/ironclaw/issues/3081) — Misleading "Configure" button | **Low** (P2, UX) | Portfolio extension shows configuration UI when none needed | No |

**Notable:** Two live canary lanes are actively failing with **no fix PRs open**. This is a significant production stability concern, particularly as the team is pushing Reborn changes. The root cause may be related to the v2 capability changes in the v0.27.0 release.

## Feature Requests & Roadmap Signals

1. **Non-image file attachments in web gateway** ([#1341](https://github.com/nearai/ironclaw/issues/1341), open since 2026-03-18) — Users cannot attach PDFs, audio, or documents. This old issue was updated today, suggesting renewed attention. Likely candidate for v0.28.0 if Reborn landing bandwidth allows.

2. **Reborn runtime presets** ([#3045](https://github.com/nearai/ironclaw/issues/3045)) — Operator-facing profiles for local dev, CI, production. Highly likely for the next Reborn milestone given it's tagged as a core enhancement on the EPIC tracker.

3. **Local developer runtime profiles** ([#3044](https://github.com/nearai/ironclaw/issues/3044)) — `ironclaw-reborn --profile dev` for running as a local coding agent. Predictably will ship with or shortly after the Reborn binary itself ([#3069](https://github.com/nearai/ironclaw/issues/3069)).

4. **Native LLM reasoning trace** ([#3102](https://github.com/nearai/ironclaw/pull/3102)) — Provider-agnostic chain-of-thought capture. This is an open PR by a new contributor but looks substantial (XL size). Could land as early as v0.28.0.

**Prediction for v0.28.0:** The Reborn binary (`ironclaw-reborn`), shared HTTP egress, and runtime host composition are the most mature candidates. TUI fix and duplicate-user bug are likely hotfix candidates.

## User Feedback Summary

**Pain points (real user reports):**
- TUI corruption on certain TTYs in the new build ([#3103](https://github.com/nearai/ironclaw/issues/3103)) — a regression that broke previously working UI.
- App hangs on restart when enabling Auto Approvals ([#3082](https://github.com/nearai/ironclaw/issues/3082)) — user-facing workflow completely blocked.
- Duplicate user accounts created due to missing loading states ([#3083](https://github.com/nearai/ironclaw/issues/3083)) — data integrity issue on hosted-staging.
- Misleading UI: "Configure" button shown when no configuration needed ([#3081](https://github.com/nearai/ironclaw/issues/3081)) — minor but confusing.

**Unmet needs (expressed via issues):**
- Need for non-image file attachments in web gateway (PDF, audio) — longstanding request with no movement.
- Need for simplified operator profiles (presets) rather than hand-wiring low-level configurations — voiced strongly by the Reborn architects themselves.
- Need for integration tests at the caller level before Reborn cutover — recognized by the team as essential.

**Satisfaction signals:** The sheer volume of PRs (50 in 24h) and focused issue discussion (38 comments on the Reborn EPIC) suggests a highly engaged core team working toward a shared architectural goal. However, the three canary failures and user-facing TUI regression indicate current stability is subpar.

## Backlog Watch

1. **[#1341 — Support non-image file attachments in web gateway](https://github.com/nearai/ironclaw/issues/1341)** — **Open since 2026-03-18** (43 days). Tagged `suggested_P1` but no assignment or milestone. Updated today (2026-04-29) but still no PR. This is a clear user-visible feature gap that could benefit from the Reborn transport adapter work.

2. **[#1764 — Abound demo PR](https://github.com/nearai/ironclaw/pull/1764)** — **Open PR since 2026-03-30** (31 days). XL size, high risk, touches almost every scope. Author is a regular contributor but this is a demo integration, not core functionality. Risk of bit-rotting against the fast-moving Reborn branch.

3. **Live canary failures** ([#3075](https://github.com/nearai/ironclaw/issues/3075), [#3074](https://github.com/nearai/ironclaw/issues/3074), [#3064](https://github.com/nearai/ironclaw/issues/3064)) — Not old, but **no PRs open to fix them** despite being production-blocking. This is the highest-priority unaddressed item on the board.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-30

## 1. Today's Overview
The project shows **moderate near-term activity** with 28 PRs updated in the last 24 hours and 2 new active issues. Notably, **24 of the 28 PRs remain open**—most are functional enhancements and bug fixes awaiting review, suggesting a **growing maintenance backlog**. A patch release (2026.4.29) was published, primarily addressing configuration defaults and a UX hint fix. The cohort of 20+ stale PRs (unchanged since March 25) continues to accumulate, which may slow progress if maintainer bandwidth is limited.

## 2. Releases
**New Version: [LobsterAI 2026.4.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29)**
- **fix: update default model configs for Volcengine and Qwen** — ensures newly added models are available out-of-box.
- **fix(update): remove inaccurate auto-restart hint from installing state** — eliminates a misleading "restart required" message during updates.
- **Migration Notes:** None required. This is a minor patch with no breaking changes.

## 3. Project Progress
**4 PRs were merged/closed today**, indicating meaningful progress in key areas:

| PR | Area | Change |
|----|------|--------|
| [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) (merged) | Multiple | Chore: merge release/2026.04.27 into main |
| [#1875](https://github.com/netease-youdao/LobsterAI/pull/1875) | docs | Feat: add README to specs |
| [#1874](https://github.com/netease-youdao/LobsterAI/pull/1874) | docs | Feat: optimize spec documents |
| [#1873](https://github.com/netease-youdao/LobsterAI/pull/1873) | renderer | Style: make cowork bootstrap textarea fill available height |

The merged release branch [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) highlights the following delivered features:
- **OAuth login for ChatGPT**
- **New provider support**: Xiaomi Mimo, Baidu Qianfan coding plan
- **Upgraded youdaonote skill**
- **Gateway stability fixes** (prevent forced restart on model list changes)
- **Cowork session export improvements**
- **UI polish** (Accent color custom theme, settings textarea height)

## 4. Community Hot Topics
### Most Active Issues (by comments)
1. **[#1878](https://github.com/netease-youdao/LobsterAI/issues/1878)** — **IM机器人 微信接口: 配置扫码后无法输入验证码** (1 comment, urgent UX gap)  
   *Analysis:* User reports that WeChat's latest version now requires a 6-digit verification code input during QR scanning, but LobsterAI's UI provides no input field. This is a **high-impact blocking issue** for WeChat IM integration. The fix likely requires adding a simple dialog or text input step in the IM auth flow.

2. **[#1877](https://github.com/netease-youdao/LobsterAI/issues/1877)** — **OpenAI authentication fails with "unsupported country/region/territory"** (1 comment)  
   *Analysis:* User in a restricted region encounters a 403 error. This is **not a client bug but a geo-blocking issue**. The user appears to use a local Codex instance successfully, suggesting they need a proxy or region check bypass guidance. This may warrant documentation or a fallback message in the UI.

### Most Commented PRs
All PRs currently have "undefined" comment counts; however, the following have accumulated attention as stale but relevant:

- [#857](https://github.com/netease-youdao/LobsterAI/pull/857) — **MCP HTTP streaming support** (community contribution, "vibe coding" acknowledgment, highly requested)
- [#880](https://github.com/netease-youdao/LobsterAI/pull/880) — **Cowork message-level share/export with brand support** (large feature, possibly in next release)
- [#862](https://github.com/netease-youdao/LobsterAI/pull/862) — **Custom accent color theme** (UI improvement, likely low-hanging fruit)

## 5. Bugs & Stability
### Bugs Reported Today (24h)
| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | **High** | WeChat IM integration broken — no verification code input field after QR scan | No |
| [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) | **Medium** | OpenAI login blocked by region restriction (403) — affects users in unsupported countries | No (documentation fix) |

### Stability Risks from Open PRs (not yet fixed)
The following unresolved bugs have open PRs in the backlog:
- **Database corruption risk**: [#863](https://github.com/netease-youdao/LobsterAI/pull/863) (non-atomic SQLite writes)
- **Memory deletion inconsistency**: [#868](https://github.com/netease-youdao/LobsterAI/pull/868) (missing transaction for user memories)
- **Gateway startup race condition**: [#864](https://github.com/netease-youdao/LobsterAI/pull/864) (switching model blocks message sending)
- **Duplicate error messages in cowork**: [#878](https://github.com/netease-youdao/LobsterAI/pull/878) (double error on session failure)

## 6. Feature Requests & Roadmap Signals
### Likely in Next Version (v2026.05.x)
Based on merged PR contents and release branch [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876):
1. **ChatGPT OAuth login** — important for users blocked by region-based auth
2. **New provider support** — Xiaomi Mimo, Baidu Qianfan coding plan
3. **Cowork session export formats** — Markdown, JSON, JSONL

### Community-Requested Features (from open PRs)
| Feature | PR | Status | Priority Signal |
|---------|----|--------|-----------------|
| **MCP HTTP streaming** | [#857](https://github.com/netease-youdao/LobsterAI/pull/857) | Open (stale) | High — explicit "project really needs this" |
| **Custom accent color theme** | [#862](https://github.com/netease-youdao/LobsterAI/pull/862) | Open (stale) | Medium — UI polish |
| **Cowork context management** | [#866](https://github.com/netease-youdao/LobsterAI/pull/866) | Open (stale) | High — mitigates long-session quality degradation |
| **Message-level share/export** | [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | Open (stale) | Medium — productivity enhancement |

### Roadmap Prediction
The **MCP HTTP streaming** and **context management** features address fundamental limitations that affect daily user experience. Given the high comment activity and the "project really needs this" tone in [#857](https://github.com/netease-youdao/LobsterAI/pull/857), these are strong candidates for the next major release. The stale PR group (all 20 opened on 2025-03-25) suggests they are being evaluated but not yet merged.

## 7. User Feedback Summary
### Pain Points (Direct from Issues & PRs)
1. **WeChat IM integration broken** — New WeChat versions require a verification code input that LobsterAI lacks (#1878). Blocks Chinese-market WeChat users entirely.
2. **Region-locked OpenAI login** (#1877) — Restrictive for global users; no fallback documentation.
3. **Long-session quality degradation** — "Lost in the Middle" problem (PR #866) is well-recognized; users report AI forgetting earlier instructions.
4. **Model switching UI freezes** — Gateway restart overlay blocks message input for 3-5 seconds (PR #864).
5. **Multiple concurrent error messages** — Users see duplicate error popups (PR #878).

### Satisfaction Signals
- The 2026.4.29 release contains **multiple stability fixes** (gateway restart, auto-restart hint removal), indicating maintainers are responsive to UX polish.
- Community contributors are actively submitting high-quality PRs (security fixes, theme customization, export features), showing a healthy open-source ecosystem.

### Dissatisfaction Indicators
- **24 open PRs**, many stale for over a month, may frustrate contributors waiting for review.
- The **two new bugs today are blocking issues** for WeChat and global OpenAI users, and neither has an immediate fix.

## 8. Backlog Watch
### Important Issues Needing Maintainer Attention
| Issue/PR | Days Stale | Impact | Reason for Concern |
|----------|------------|--------|-------------------|
| [#853](https://github.com/netease-youdao/LobsterAI/pull/853) — Cowork export formats (Markdown/JSON/JSONL) | 36 days | Medium | Accepted in closed PR #1876, but previously stale |
| [#857](https://github.com/netease-youdao/LobsterAI/pull/857) — MCP HTTP streaming | 36 days | **High** | Game-changing for tool integration; community pleading |
| [#862](https://github.com/netease-youdao/LobsterAI/pull/862) — Custom color theme | 36 days | Low | Simple UI improvement |
| [#864](https://github.com/netease-youdao/LobsterAI/pull/864) — Model switch race condition | 36 days | **High** | Blocks users during model switching |
| [#866](https://github.com/netease-youdao/LobsterAI/pull/866) — Context management | 36 days | **High** | Long-session quality fix |
| [#869](https://github.com/netease-youdao/LobsterAI/pull/869) — URL protocol whitelist | 36 days | **Critical** | Security: prevents RCE via `file:`/`cmd:` URLs |
| [#877](https://github.com/netease-youdao/LobsterAI/pull/877) — Duplicate URL scheme whitelist | 36 days | **Critical** | Same security fix, competing PR — needs triage |
| [#881](https://github.com/netease-youdao/LobsterAI/pull/881) — SQLite foreign key cascade | 36 days | **High** | Fixes database bloat from orphaned messages |

### Recommendation
The **two security-focused PRs ([#869](https://github.com/netease-youdao/LobsterAI/pull/869), [#877](https://github.com/netease-youdao/LobsterAI/pull/877))** deserve immediate review as they address potential remote code execution vectors. The **context management PR [#866](https://github.com/netease-youdao/LobsterAI/pull/866)** and **MCP streaming PR [#857](https://github.com/netease-youdao/LobsterAI/pull/857)** are the most impactful features for user experience. The stale PR backlog (36 days) risks contributor attrition and user frustration.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-30

## 1. Today's Overview

Moltis saw a burst of activity on April 29, with **6 issues updated** and **8 pull requests** updated in the last 24 hours, indicating a highly productive development cycle. Two new releases were pushed (v20260429.01 and v20260429.02), suggesting rapid iteration. The project is actively addressing security bugs, expanding telephony support, and improving the WebUI experience, though several open bugs around core chat functionality remain unresolved. Overall, project health is strong with responsive maintainers and a growing feature surface.

## 2. Releases

Two releases were published on 2026-04-29:

- **20260429.02** — Likely a patch or hotfix release following the day's merged PRs
- **20260429.01** — A separate release, possibly containing the voice persona and import features merged earlier

Since no changelogs were provided in the data, specific breaking changes or migration notes cannot be confirmed. However, given the security fix merged in PR #924 (sandbox escape), users running Docker deployments or sandboxed sessions are strongly advised to upgrade immediately to at least **20260429.02**.

## 3. Project Progress

Three pull requests were **merged/closed** today, representing meaningful progress:

- [#924 (CLOSED) fix(sandbox): prevent sandbox escape via RestrictedHostSandbox and FailoverSandbox](https://github.com/moltis-org/moltis/pull/924) — **Critical security fix**. Resolved issue #923 where sandboxed commands could escape to the host environment. Two sandbox implementations were patched to provide proper filesystem isolation.
- [#916 (CLOSED) feat(voice): add voice personas for deterministic TTS identity](https://github.com/moltis-org/moltis/pull/916) — Adds named, reusable voice personas that provide deterministic TTS identity per agent, with provider-specific bindings.
- [#917 (CLOSED) feat(import): add Claude Code and Hermes import to web UI](https://github.com/moltis-org/moltis/pull/917) — Extends the import system beyond OpenClaw, adding tabbed import UI for Claude Code and Hermes project imports.

## 4. Community Hot Topics

- **#918 [CLOSED] Telegram broken in Docker in v20260428.03** ([link](https://github.com/moltis-org/moltis/issues/918)) — 3 comments, 1 👍. The most reacted-to issue, signaling Telegram integration is a critical feature for the Docker deployment user base. Quickly closed, suggesting a rapid fix was deployed.
- **#922 [OPEN] Chat scrolling isn't working** ([link](https://github.com/moltis-org/moltis/issues/922)) — 3 comments. A regression affecting core UX, with a PR (#925) already submitted for review. The underlying need is for scroll behavior that doesn't fight user intent during streaming.
- **#926 [OPEN] feat: add /btw, /fast, /insights, /steer, /queue commands** ([link](https://github.com/moltis-org/moltis/pull/926)) — A large feature PR with five new slash commands inspired by Hermes Agent. The `/btw` command for ephemeral side questions is particularly notable, addressing user desire for non-persistent queries.

## 5. Bugs & Stability

Ranked by severity:

1. **CRITICAL — Sandbox escape (fixed)** — Issue [#923](https://github.com/moltis-org/moltis/issues/923) reported sandboxed commands running on host environment. Fixed in PR [#924](https://github.com/moltis-org/moltis/pull/924) with two sandbox implementations patched. **All users should update immediately.**

2. **MEDIUM — Telegram broken in Docker (closed)** — Issue [#918](https://github.com/moltis-org/moltis/issues/918) reported Telegram functionality broken in Docker builds. Now closed, presumably fixed in a release.

3. **MEDIUM — Chat scrolling regression** — Issue [#922](https://github.com/moltis-org/moltis/issues/922) reported a regression where `ResizeObserver` in `scrollChatToBottom()` prevented scrolling up during streaming. A fix PR [#925](https://github.com/moltis-org/moltis/pull/925) is open.

4. **LOW — MCP page missing re-authenticate button** — Issue [#927](https://github.com/moltis-org/moltis/issues/927) reports expired OAuth tokens have no UI for re-authentication. No fix PR yet.

5. **LOW — Model discovery timeout** — Issue [#919](https://github.com/moltis-org/moltis/issues/919) reports model discovery failing after 30 seconds. No comments or fix PR yet.

## 6. Feature Requests & Roadmap Signals

- **Sub-agents in WebUI** — Issue [#906](https://github.com/moltis-org/moltis/issues/906) requests making sub-agents configurable through the WebUI. Given the current focus on UI improvements, this could land in the next 1-2 releases.
- **Voice personas** — Already merged in PR [#916](https://github.com/moltis-org/moltis/pull/916). Expect this in the next release.
- **Telephony support** — Open PR [#920](https://github.com/moltis-org/moltis/pull/920) adds phone call support via Twilio. This is a major new channel; likely to merge within a week.
- **Auto-indexing on project changes** — Open PR [#921](https://github.com/moltis-org/moltis/pull/921) implements spec 007 for automatic code re-indexing. A quality-of-life improvement for developers using Moltis.
- **Slash commands** — PR [#926](https://github.com/moltis-org/moltis/pull/926) introduces five new commands. The `/btw` command for ephemeral queries addresses a common user need for "ask without clutter."

**Prediction for next release:** Voice personas and the slash commands PR are most likely to ship next, followed by the telephony integration.

## 7. User Feedback Summary

- **Pain points:** The sandbox escape bug (#923) is the most severe, though users appear satisfied with the rapid fix. Scroll hijacking (#922) frustrates users during chat sessions — the fix appears straightforward. The missing re-authenticate button for MCP OAuth tokens (#927) indicates a significant gap in the OAuth workflow user experience.
- **Use cases:** Telegram integration (#918) is a high-demand channel, especially for Docker users. The new import system (#917) for Claude Code and Hermes suggests users are migrating from other agent platforms.
- **Satisfaction indicators:** Issues are being closed quickly (Telegram bug closed same day, sandbox fix submitted same day as report). PRs are gathering active review comments.

## 8. Backlog Watch

- **Issue #906 — Make sub-agents configurable in WebUI** ([link](https://github.com/moltis-org/moltis/issues/906)) — Open since April 28, 0 comments from maintainers. This is a significant feature request that touches both backend and UI; has not yet been picked up.
- **Issue #919 — Model discovery fails after 30 sec** ([link](https://github.com/moltis-org/moltis/issues/919)) — Open since April 29 with no maintainer response. Could indicate an underlying issue with model provider timeouts or configuration parsing.
- **PR #921 — Auto-trigger indexing on project changes** ([link](https://github.com/moltis-org/moltis/pull/921)) — Open since April 29, describes 3 review rounds already completed but still open. This is a complex feature that may need additional review cycles.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-30

## Today's Overview
CoPaw shows **very high community activity** today with 50 Issues updated in the last 24 hours (17 open/active, 33 closed) and 15 PRs updated (8 open, 7 merged/closed). One new release (v1.1.5) was published. The project is in an **intense bug-fixing and feature-polishing phase**, with strong contributions from both core maintainers and first-time contributors. Key themes include **WeCom (WeChat Work) channel reliability**, **console front-end session management**, **agent workspace isolation**, and **CJK-aware memory search**. The first-time contributor PRs addressing session persistence and agent switching are particularly notable for community engagement.

**Project health**: ⚕️ Healthy but under heavy load — high issue volume (especially bug reports), active maintainer response, and growing contributor diversity.

---

## Releases
### v1.1.5 — Released 2026-04-28/29
#### ✨ Added
- **CJK-Aware Memory Search**: Memory search now tokenizes CJK queries at character level while preserving Latin/digit runs ([PR #3811](https://github.com/agentscope-ai/QwenPaw/pull/3811))
- **Context Compaction Fallback**: When LLM-based context compaction fails or is disabled, the system falls back to a simpler compaction strategy to prevent conversation breaks

#### 🔧 Fixed / Improved
- Various bug fixes (see closed issues in the data above)

#### ⚠️ Breaking Changes
- None reported in this release

#### 📋 Migration Notes
- No specific migration steps documented; backward-compatible update

*Release link*: [v1.1.5](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.1.5) (note: repo URL references CoPaw, but data uses QwenPaw naming — likely the same project)

---

## Project Progress (Merged/Closed PRs Today)
Today saw **7 PRs merged/closed** — a strong signal of active development throughput.

| PR # | Title | Status | Type | Significance |
|------|-------|--------|------|--------------|
| [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) | fix(console): restore chat session when switching between agents | ✅ Merged | Bug Fix | High — addresses a top-voted pain point (50% of agent-switching issues closed) |
| [#3959](https://github.com/agentscope-ai/QwenPaw/pull/3959) | fix(console): keep Chat mounted when navigating to other pages | ✅ Merged | Bug Fix | High — prevents session loss on page navigation |
| [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) | fix: skip BOOTSTRAP.md for initialized workspaces | ✅ Merged | Bug Fix | Medium — prevents redundant initialization |
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | feat: add multimodal message support (images/files) | ✅ Merged | Feature | High — adds image/file upload to messages |
| [#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918) | chore(release): update release note of v1.1.5 | ✅ Merged | Chore | Low — release doc |
| [#3946](https://github.com/agentscope-ai/QwenPaw/pull/3946) | docs(readme): add plugin system links to documentation index | ✅ Merged | Docs | Low |
| [#3943](https://github.com/agentscope-ai/QwenPaw/pull/3943) | style: sessionList style | ✅ Merged | Style | Low — cosmetic improvement |

**Key takeaway**: The **console session management** problem (lost chats on agent switch/navigation) appears to be solved by two community-contributed PRs (#3958, #3959). These are critical quality-of-life fixes that many users reported.

---

## Community Hot Topics
The most active discussions reflect **three core pain points**:

### 1. Agent Workspace Isolation & Identity (High Emotion)
- **[#3936] Question: Agent isolation** (8 comments) — Users want agents to have separate, non-readable workspaces; file fencing only supports blacklists, not whitelists. *Underlying need: Security & privacy for multi-agent deployments* 🔗
- **[#3957] Bug: Workspace switches on channel messages** (4 comments) — When Agent A sends a message through Agent B's channel, Agent B's workspace switches to A's workspace, causing identity confusion. *Critical for multi-agent coordination* 🔗
- **[#3967] Question: Workspace separation** (2 comments) — Users want core config files separated from user documents to prevent accidental deletion. *UX safety concern for non-expert users* 🔗

### 2. Channel Reliability (WeCom & Feishu)
- **[#2757] Question: WeCom frequently disconnects** (7 comments) — Heartbeat configured but still drops. Requires re-saving config to restore. 🔗
- **[#3937] Bug: WeCom channel stops responding** (3 comments) — Same pattern: works, then silent, re-save config fixes. *Pattern suggests a connection lifecycle bug* 🔗
- **[#981] Feishu/QQ cannot send files** (14 comments, closed) — Closed but still shows high engagement; robot replies lack file attachment support 🔗

### 3. Console UX & Frontend
- **[#3919] Bug: Agent switching loses chat session** (9 comments) — localStorage field exists but empty; code logic missing. *Now fixed by PR #3958* 🔗
- **[#3965] Bug: Channel messages not shown in chat window** (2 comments) — Messages from channels not displaying in console 🔗

### Most-Reacted
- **[#3925]** (1 👍) — Frontend optimization request for chat page layout

---

## Bugs & Stability
### Critical/High Severity
1. **Windows arbitrary file traversal ([#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955))** — Reported on v1.1.5; screenshots show directory traversal vulnerability. **Severity: Critical** (security). No fix PR yet.
2. **Context Sync Race Condition — Infinite Loop ([#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893), closed)** — Under high `max_iters`, tool results dropped before next LLM call causes infinite loop. **Severity: High**. PR exists but marked closed.
3. **MemoryError in read_file_safe ([#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932))** — Passes 1GB as `size` parameter causing OOM on low-memory systems. **Severity: High**. No fix PR open.
4. **云效 MCP Creation Bug ([#3951](https://github.com/agentscope-ai/QwenPaw/issues/3951))** — Creating Alibaba Cloud DevOps MCP server fails. **Severity: Medium-High**. No fix PR.

### Medium Severity
5. **Console page multi-interruption ([#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861))** — Conversations break repeatedly. No fix PR.
6. **WeCom stream "Thinking..." stuck ([#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950), open PR)** — Long-running tasks leave users with permanent "Thinking..." placeholder. Fix PR under review.
7. **WeCom double reconnect race condition ([#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963), open PR)** — Fix for WeCom's reconnect loop.

### Low Severity
8. **Agent auto-switch not remembered ([#2605](https://github.com/agentscope-ai/QwenPaw/issues/2605), closed)** — Frontend resets to default agent on reopen.
9. **Chat history lost on refresh ([#2034](https://github.com/agentscope-ai/QwenPaw/issues/2034), closed)** — Previously reported, now acknowledged.

**Note**: Many "closed" bugs may still be in verification; check labels.

---

## Feature Requests & Roadmap Signals
Trending requests with high community interest:

| # | Feature | Comments | Likelihood for Next Release |
|---|---------|----------|----------------------------|
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | Separate vision model routing for image inputs | 5 | **High** — PR #3509 (multimodal support) just merged; vision routing is the next logical step |
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | Agent workspace isolation (per-agent whitelist/blacklist) | 8 | **Medium** — Top-voted discussion; core architectural change needed |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) | Hermes-inspired auto-evolution for agents | 4 | **Low** — Visionary; no design doc yet |
| [#3146](https://github.com/agentscope-ai/QwenPaw/issues/3146) | Wide-screen mode for console (especially tables) | 3 | **Medium** — Multiple UX PRs merged; layout improvements likely |
| [#2945](https://github.com/agentscope-ai/QwenPaw/issues/2945) | GUI approve button instead of typing | 3 | **High** — Pattern of UX simplification seen in recent PRs |
| [#3966](https://github.com/agentscope-ai/QwenPaw/issues/3966) | Enhanced file display/preview (docx, pdf, etc.) | 3 | **Medium** — Related to multimodal PR #3509 |

**Predictions for v1.2.0**: Vision model routing (#3940), approval UX improvements (#2945), wide-screen mode (#3146), and enhanced file preview (#3966).

---

## User Feedback Summary
### Positive Signals
- **Active maintainer response**: Many issues have PRs within 1-2 days (e.g., #3919 → #3958 in <48h)
- **First-time contributors welcomed**: 7 of 15 today's PRs are from first-time contributors (`first-time-contributor` label)
- **Multimodal support merged**: PR #3509 adding image/file upload to messages is a highly requested feature

### Pain Points (Repeated Across Issues)
1. **"Config re-save fixes it" pattern**: WeCom/Feishu channels require manual re-saving after disconnect — users frustrated by unreliable connections
2. **"Lost my chat/work" pattern**: Session loss on agent switch, page navigation, or refresh — now partially fixed
3. **"Can't distinguish config vs data" pattern**: Users accidentally delete core configuration files because they're mixed with workspace documents
4. **"Cmd+Enter vs Enter" confusion**: Approval requires typing, not clicking — feels unnatural
5. **High resource usage**: Python version described as "slow and resource-heavy" (#3964); desire for C++ version

### Satisfaction Indicators
- **No mass uninstalls or rage quits** visible in issues
- **Feature requests** are thoughtful (Hermes, vision routing, isolation) suggesting invested users
- **50 issues/day** indicates active, engaged user base

---

## Backlog Watch
### Issues Needing Maintainer Attention
| # | Issue | Age | Comments | Last Update | Risk |
|---|-------|-----|----------|-------------|------|
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | WeCom frequent disconnect | 29 days | 7 | 2026-04-30 | **High** — chronic, unfixed channel issue |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) | Hermes auto-evolution question | 13 days | 4 | 2026-04-30 | **Low** — speculative, no urgency |
| [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | Console multi-interruption | 3 days | 3 | 2026-04-30 | **Medium** — no response from maintainers |
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Windows file traversal (security) | 1 day | 4 | 2026-04-30 | **Critical** — security vulnerability, needs immediate triage |

### Stale PRs
| # | Title | Age | Last Update | Status |
|---|-------|-----|-------------|--------|
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | Unify WeChat/Weixin identifier | 10 days | 2026-04-29 | **Under Review** — undrafted for 10 days; needs maintainer review |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app support | 6 days | 2026-04-29 | **Under Review** — major new feature; needs testing bandwidth |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | GitHub Copilot model provider | 4 days | 2026-04-30 | **Under Review** — active, but no update since April 26 |

### Recommendations
1. **Immediately triage** the security vulnerability (#3955) — should be labeled `security` and assigned
2. **Prioritize** WeCom channel reliability (#2757, #3937, #3963) — 3+ issues on same root cause
3. **Merge Tauri PR (#3813)** or provide feedback — significant UX improvement for desktop users
4. **Close or respond** to #3516 (Hermes) with a "not planned" label if no intention → prevent zombie issue

---

*Generated 2026-04-30 from GitHub data. All links use the QwenPaw repo (agentscope-ai/QwenPaw) as referenced in the input data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-30

## Today's Overview

ZeroClaw maintains high activity with 50 issues and 50 PRs updated in the last 24 hours, indicating sustained development momentum. The project has 31 open issues and 49 open PRs, suggesting a growing backlog that may require prioritization attention. No new releases were published today, but several critical fixes and feature PRs are approaching maturity. The community is actively reporting bugs around configuration, memory, channel integrations, and provider compatibility, while contributors are shipping substantial infrastructure improvements like web onboarding parity and new Bedrock authentication support.

## Releases

No new releases were published on this date.

## Project Progress

Two PRs were merged/closed in the last 24 hours:

- **#6035 — fix(channels/acp): correct tool output formatting** (CLOSED) — Fixed ACP server tool call event transmission, restoring proper output display and action naming for external ACP consumers like Nori.

- **#6226 — [Bug]: Slack thread_replies=true synthesises thread_ts from message ts, breaking session continuity for top-level messages** (CLOSED) — Quick fix for a session continuity bug where top-level Slack messages were incorrectly treated as threaded.

A significant open PR (#6179) introduces per-property CRUD endpoints under `/api/config/*`, enabling web onboarding parity across dashboard, CLI, and third-party tools — a large (XL), high-risk enhancement to the gateway/web/CLI stack.

## Community Hot Topics

The most active discussions this period:

- **#6123** — [Bug]: default_model issue on fresh install — 15 comments, S1 severity. A freshly installed ZeroClaw user on LXC cannot complete onboarding because the default model configuration fails. This is the most commented issue today, reflecting a critical onboarding friction for new users.

- **#5146** — [Feature]: Token consumption minimization via skill compilation — 7 comments, 1 👍. A long-running feature request (since March) proposing compilation of SKILL.md files to avoid sending 400+ lines of prose on every invocation. This remains a high-impact performance optimization the community keeps discussing.

- **#5509** — feat(telegram): voice message transcription support — 7 comments (CLOSED). Successfully implemented Telegram voice transcription, closing a meaningful feature gap with the TypeScript counterpart OpenClaw.

- **#5550** — bug(memory): autosaved Conversation memories invisible to recall due to session_id mismatch — 6 comments. A medium-severity memory bug where stored conversation memories are invisible to the recall system, with a clear root cause identified in `src/channels/mod.rs`.

**Underlying needs**: Users are experiencing onboarding friction (configuration defaults), performance inefficiency (full skill prompts), and data integrity issues (memory recall gaps). The community values feature parity with the TypeScript version and smoother initial setup.

## Bugs & Stability

**S0 — Data loss / security risk (2 active):**
- **#5125** (CLOSED) — CPU spikes when typing in Firefox on Ubuntu. Closed today, no details on fix.
- **#5415** — Context spillage from chat to schedule. Discord chat context leaking into scheduled task execution. Still open, `status:blocked`.
- **#5518** — `forbidden_path_argument` blocks safe redirect targets (`/dev/null`, `/dev/stdout`). Security scanner false positives blocking legitimate shell redirections. Open, `status:accepted`.

**S1 — Workflow blocked (2 active):**
- **#6123** — default_model issue on fresh install (top issue by comments, 15 comments). No fix PR yet.
- **#5475** — Copilot + Telegram result in "Invalid parameter" error. `status:blocked`, needs repro.

**S2 — Degraded behavior (3 active):**
- **#6153** — Matrix voice transcription fails with "Unsupported audio format '.'" — Element Web/Android users cannot transcribe voice. Open.
- **#5244** — Dashboard Channels tab crash and Overview render error on v0.6.8. `status:in-progress`.
- **#6226** (CLOSED) — Slack thread_replies session continuity break.

**S3 — Minor (2 active):**
- **#5862** — ZeroClaw doesn't know it can add cron jobs via `zeroclaw cron`. Agent lacks self-awareness of its own capabilities.
- **#6073** (CLOSED) — Web UI config editor cursor misalignment.

**Fix PRs in flight:**
- #6114 — Strip media markers in auxiliary LLM calls (medium risk, provider fix)
- #5939 — Fix git -C vs git -c security policy conflating (`status:in-progress`)
- #5905 — Add workspace bind-mount support to DockerSandbox

## Feature Requests & Roadmap Signals

**High-community-interest features:**

- **#5146** — Token consumption minimization via skill compilation (7 comments, 1 👍). Likely to influence next release given sustained interest.
- **#6225** — Smart Truncation for Telegram — Add Markdown-aware message splitting for LLM responses.
- **#5501** — Trigger cron manually — Allow users to run cron jobs on-demand for testing.
- **#5503** — Pre-LLM command shortcuts for deterministic actions — Bypass full LLM inference for known simple actions (e.g., "open the door" → HTTP POST).

**In-progress features with PRs:**
- #6179 — Web onboarding parity via per-property CRUD endpoints (XL, high-risk, nearing completion)
- #6168 — `credential_process` support for Bedrock auth (medium risk, security)
- #6167 — ACP protocol v1 implementation with tool-call permission (high risk, XL scope)
- #5978 — Speech capture buffer + STT dispatch for voice mode (XL, channel enhancement)

**Prediction for next release:** The web onboarding parity (#6179) and ACP v1 fixes (#6167) appear close to merge and will likely constitute the core of the next minor version bump.

## User Feedback Summary

**Pain points:**
- Onboarding failure on fresh install (#6123) — critical first-impression issue
- Memory recall silently broken for autosaved conversations (#5550) — erodes trust in persistence
- Voice transcription broken on Matrix (#6153) — limits accessibility
- Telegram returning raw tool_calls JSON instead of formatted results (#5553, CLOSED) — poor UX for Telegram users
- Security scanner blocking legitimate `/dev/null` redirects (#5518) — false positives frustrating power users
- Context spillage between chat and scheduled tasks (#5415) — privacy concern

**Satisfaction signals:**
- Telegram voice transcription now supported (#5509, CLOSED) — feature parity win
- `allowed_tools` configuration option added (#5502, CLOSED) — user-requested configurability
- Webhook retry logic with exponential backoff (#5838, open PR) — addressing reliability needs

## Backlog Watch

**Long-open items needing maintainer attention:**

- **#5146** — Token consumption minimization via skill compilation (opened 2026-03-29, 7 comments, `status:accepted`, `status:no-stale`). High-impact performance feature that has been accepted but not yet addressed with a PR after one month.
- **#5475** — Copilot + Telegram "Invalid parameter" (opened 2026-04-08, S1, `status:blocked`). Blocked for 22 days, needs reproduction from maintainers.
- **#5470** — Multiple issues when running safely (opened 2026-04-07, S2, `status:blocked`). Blocked for 23 days with multiple subsystems affected (memory deduplication, cron channel selection, Telegram restart).
- **#5415** — Context spillage from chat to schedule (opened 2026-04-06, S0 security risk, `status:blocked`). Security concern left unaddressed for 24 days.
- **#5361** — Fix `codex_cli` tool with `codex exec` subcommand (PR opened 2026-04-05). Open for 25 days with `needs-maintainer-review` label — a straightforward fix waiting for review.
- **#5838** — Webhook retry logic with exponential backoff (PR opened 2026-04-17). 13 days with `needs-author-action` label.

**Notable:** Multiple S0/S1 issues are `status:blocked` and have been open for 3+ weeks. The project would benefit from prioritize unblocking these critical-path bugs to maintain user trust.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*