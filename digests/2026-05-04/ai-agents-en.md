# OpenClaw Ecosystem Digest 2026-05-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-04 04:43 UTC

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

Here is the OpenClaw project digest for **2026-05-04**.

---

## OpenClaw Project Digest: 2026-05-04

### 1. Today's Overview
The OpenClaw project experienced a day of very high activity, with 500 issues and 500 PRs updated in the last 24 hours. While the volume of new work is high, the project remains in a "stabilization" phase following the release of **v2026.5.3-beta.2 and beta.3**. Activity is dominated by the closure of a large cluster of regression bugs related to performance and gateway stability (the "4.24 to 4.26 regression cluster") and the merging of fixes for those issues. The vast majority of updated items (337 out of 500 issues) were closed, indicating a strong push by maintainers to clear the backlog of critical bugs.

### 2. Releases
Two new beta releases were published today: **v2026.5.3-beta.2** and **v2026.5.3-beta.3**.

- **Key Change (both betas):** Introduction of a bundled `file-transfer` plugin. This provides agent tools (`file_fetch`, `dir_list`, `dir_fetch`, `file_write`) for binary file operations between paired gateway nodes.
- **Security/Breaking Note:** The new plugin uses a **default-deny** per-node path policy configured under `plugins.entries.file-transfer.config.nodes`, requiring operator approval for any file paths.
- **Migration:** No breaking changes to core logic are noted, but users wishing to use the new file-transfer capabilities will need to explicitly configure allowed node paths.

### 3. Project Progress
Today’s merged/closed PRs focus heavily on fixing the regressions introduced in the v2026.4.24-4.26 range.

- **Performance & Stability:** Core fixes were merged to address the root causes of the recent performance regressions. Key PRs include refactoring the command analysis system for exec approvals (`#76672`), fixing the synchronous plugin runtime mirror that was blocking the event loop (`#75069`), and fixing the `createOpenClawTools` stalls (`#74860`).
- **Bug Fixes:** Several platform-specific fixes were merged, including a workaround for `EPERM` errors on Windows during media file sync (`#76752`) and a fix for the Feishu channel crashing on empty message content (`#77109`).
- **Documentation:** A fix was merged to correct the spelling of "behaviour" to "behavior" in the ACP agents documentation (`#76734`), and a new Google Meet/Twilio voice parity improvement was merged (`#77064`).

### 4. Community Hot Topics
The community is actively discussing the recent performance issues and long-standing feature requests.

- **#72338 (CLOSED): [Gateway CPU spin]** – This issue with Telegram replies stalling had 25 comments and 4 👍. The root cause was tied to the wider regression cluster (resolved).
- **#8081 (CLOSED): [Multi-user permission management]** – The most popular feature request on the list with 28 👍 and 11 comments. The community is demanding role-based access control for sharing agents and managing secrets.
- **#10659 (OPEN): [Masked Secrets]** – With 12 comments and 4 👍, this feature request highlights a strong desire for a security system that prevents agents from exposing raw API keys, even to prompt injection attacks.
- **#12590 (OPEN): [Bug: `memoryFlush` does not fire reliably]** – This persistent bug with 19 comments has an open fix PR (`#51421`) that has been marked as "stale" for over a month, a point of frustration for users relying on memory.
- **#14593 (OPEN): [Skill install fails in Docker]** – A frustrating blocker (28 comments) for new users on Linux containers, where the installer requires `brew` (Homebrew), which is not available.

### 5. Bugs & Stability
The project is actively recovering from a major stability crisis caused by the v2026.4.24 to v2026.4.26 releases. A meta-issue (`#74630`) was created to track the correlated regression cluster. Fixes for the following high-severity bugs were merged today:

- **Blocker:** **#73501 (CLOSED): [Significant regression from v4.22 to v4.26]** – Causing general slowness in all responses. Resolved.
- **Critical:** **#75512 (CLOSED): [Chat-turn latency 30-60s+]** – Per-turn plugin runtime re-evaluation caused massive delays after v4.23. Resolved.
- **Critical:** **#74328 (CLOSED): [Gateway CPU-bound at ~100%]** – Caused by an `fs.stat` storm in the microtask queue. Resolved.
- **Critical:** **#74860 (CLOSED): [Gateway 7-second event-loop stalls]** – Synchronous tool-creation blocked Telegram polling, causing container restarts. Resolved.
- **High:** **#76307 (CLOSED): [Long-output agent truncation]** – A deterministic bug where agent replies were being cut short. Resolved.

### 6. Feature Requests & Roadmap Signals
User-requested features signal a push towards enterprise-grade security and deployment flexibility.

- **Likely for Next Release:**
    - **Agent Environment Isolation (`#62011`):** A PR is already open to allow scoping environment variables per-agent for collaborator security. This is a strong candidate for the next stable release.
    - **File Transfer Between Nodes (`#41716`, `v2026.5.3-beta`):** The new `file-transfer` plugin directly addresses this user request, so it will likely be stabilized in the next version.
- **Medium-Term Roadmap:**
    - **Multi-user RBAC (`#8081`):** The highest-voted feature. While no specific PR is linked, the user demand is clear.
    - **Native Secrets Management (`#13610`):** Integrating with AWS Secrets Manager or Vault is a logical next step after the "Masked Secrets" feature.
    - **Pre-response Enforcement Hooks (`#13583`):** A request for mechanically preventing an agent from responding until mandatory tool calls are made, critical for high-stakes automation.

### 7. User Feedback Summary
User sentiment has been negatively impacted by the recent instability, but the rapid triage and closure of dozens of regressions in the last 24 hours is a strong signal to the community that maintainers are responsive.

- **Pain Points (Resolved in Beta):** Users on low-power hardware (e.g., Intel N355), Docker VPS instances, and ARM Macs were hit hardest by the v4.24-4.26 latency regression, with reports of 30-90 second chat delays. These bugs appear to be fixed in the latest betas.
- **Pain Points (Persistent):** Docker users (especially on Linux) continue to face a poor onboarding experience due to the `brew` dependency issue (`#14593`).
- **Desires:** The community is vocally requesting a more mature security model. The desire for multi-user support and secret masking has high engagement, indicating that users want to deploy OpenClaw in more complex, shared environments.

### 8. Backlog Watch
The following high-impact issues and PRs require maintainer attention:

- **#12590 (OPEN): [memoryFlush does not fire reliably]** – **PR #51421** has been "stale" for over a month. This bug is a source of user frustration and was filed by a community member. The fix is small (a one-line behavioral change) and needs review.
- **#14593 (OPEN): [Bug: Skill install fails in Docker: `brew not installed`]** – A major onboarding blocker for Linux Docker users with 28 comments. Needs a maintainer to assign a fix for detecting the Linux environment.
- **#15591 (OPEN): [Fix repo name and link. Still named clawdbot-formal-models.]** – A low-effort, high-value documentation fix that has been open for over three months. Merging this would improve external project references.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

***

## Cross-Project Comparison Report: AI Agent Open-Source Ecosystem

**Date:** 2026-05-04
**Prepared for:** Technical Decision-Makers & Developers

### 1. Ecosystem Overview

The personal AI agent open-source landscape on this date is characterized by a high-velocity, two-tier ecosystem. The first tier, anchored by **OpenClaw** and **ZeroClaw**, is stabilizing after a period of intense feature development, focusing on squashing critical regression bugs and hardening security. The second tier, including **NanoBot**, **CoPaw**, and **IronClaw (Reborn)** , is in a state of explosive growth, rapidly iterating on new features and re-architecting core systems. A common thread across all projects is the urgent community demand for enterprise-grade security (secret management, SSRF protection, multi-user RBAC) and better support for diverse, local hardware (ARM, Docker, low-power devices). The ecosystem is maturing from experimental prototypes toward production-ready infrastructure, but many projects are still grappling with the stability challenges that come with rapid growth.

### 2. Activity Comparison

The following table provides a high-level activity snapshot for all projects tracked over the last 24 hours.

| Project | Issues Updated | PRs Updated | Health Score | Release Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | Very High (500) | Very High (500) | **Stabilizing** | Beta (v2026.5.3-beta.3) |
| **ZeroClaw** | Very High (50) | Very High (50) | **Stabilizing** | Between releases (v0.7.5 pending) |
| **NanoBot** | High (7) | High (23) | **Iterating** | Stable (v0.1.5.post3) |
| **CoPaw** | High (33) | High (16) | **Iterating** | Stable (v1.1.5) |
| **IronClaw** | High (20) | High (18) | **Architecting** | Stable (v0.27.0) |
| **Hermes** | High (50) | High (50) | **Bug-Fixing** | No new release |
| **ZeptoClaw** | Low (4) | Low (3) | **Architecting** | No new release |
| **NullClaw** | Low (2) | Low (2) | **Maintaining** | No new release |
| **Moltis** | Low (1) | Low (2) | **Maintaining** | No new release |
| **PicoClaw** | Low (5) | High (23) | **Iterating** | No new release |
| **NanoClaw** | Low (10) | Very High (50) | **Triage Push** | No new release |
| **LobsterAI** | Low (1) | Low (2) | **Low Momentum** | No new release |
| **TinyClaw** | None | None | **Dormant** | No new release |

**Note:** "Health Score" is an assessment of the project's current phase, not a judgment of quality.

### 3. OpenClaw's Position

**OpenClaw** is the clear **market leader in terms of scale and maturity** within this cohort. Its advantages are:
- **Established Stability:** It is the only project actively recovering from a major regression cluster, a sign of a large, demanding user base. The "stabilization" phase indicates it has already passed initial experimental growth.
- **Comprehensive Feature Set:** The bundled `file-transfer` plugin and advanced gateway architecture are more mature than similar features in competing projects.
- **Enterprise Focus:** Community demands for RBAC (`#8081`) and Masked Secrets (`#10659`) signal that its user base is pushing for production deployments.

**Technical Approach Differences:**
- **OpenClaw** uses a "gateway-node" architecture, focusing on robust binary transfer and complex plugin runtimes. This is in contrast to **NanoBot**'s simpler, tool-calling agent loop or **IronClaw**'s heavy re-architecture (Reborn).
- Its approach to security (default-deny paths via plugin config) is more granular but also more complex than **NanoBot**'s workspace safety guard.

**Community Size Comparison:** Based on issue/PR volume (500 each), OpenClaw's community is an order of magnitude larger than any other project tracked (the next highest, ZeroClaw, had 50). This is consistent with its role as the "core reference" implementation.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating strong, validated market needs for agent developers.

- **Security & Secret Management (Cross-Project):**
    - **NanoBot:** SSRF protection (`#3252`), filesystem-layer guard for `history.jsonl` (`#3255`), workspace safety guard.
    - **ZeroClaw:** WASM plugin env-read allowlist missing (`#5919`), WASM SSRF protection missing (`#5918`).
    - **OpenClaw:** Demand for "Masked Secrets" (`#10659`) to prevent API key exposure.
    - **Hermes:** Credential resolution confusion (`#14637`, `#19519`).
    - **NullClaw:** Proposes defaulting to Landlock sandboxing (`#882`) for better startup reliability.
    - **Need:** A standardized, platform-level approach to secret management, credential storage/retrieval, and SSRF/sandboxing is a critical gap across the entire ecosystem.

- **Docker & Onboarding Friction (Cross-Project):**
    - **OpenClaw:** `brew` dependency in Docker installer causing failures (`#14593`).
    - **NanoClaw:** `gh` CLI missing from container PATH (`#2221`).
    - **ZeroClaw:** Installer.sh needs overhaul (`#6292`).
    - **Need:** The ecosystem is failing new users at the first step. A unified, dependency-free container bootstrap experience is essential for growth.

- **Model/Provider Compatibility (Cross-Project):**
    - **Projects Affected:** **OpenClaw** (DeepSeek), **NanoBot** (DeepSeek-V4 `reasoning_content`, **IronClaw** (Gemini `thought_signature`, DeepSeek), **PicoClaw** (Gemini MCP schema, DeepSeek image rejection), **ZeroClaw** (DeepSeek V4 `tool_calls` error), **Moltis** (DeepSeek reasoning content).
    - **Need:** A fragile provider compatibility layer is a major source of churn. The community demands robust abstraction and testing to handle model-specific quirks without breaking the core agent loop.

- **Memory & Session State Reliability (Cross-Project):**
    - **OpenClaw:** `memoryFlush` bug (`#12590`).
    - **CoPaw:** Memory file overwrites, session context loss with Ollama (`#3991`), memory_search crashes (`#3977`).
    - **NanoBot:** Cron job data corruption (`#3606`).
    - **Need:** Users require a mechanism for long-term, persistent memory that doesn't get corrupted, lost on restart, or overwritten by the agent itself.

### 5. Differentiation Analysis

The projects are diverging in their architectural philosophy and target user base, even while tackling shared problems.

| Dimension | OpenClaw & ZeroClaw | IronClaw | NanoBot & CoPaw | Hermes & ZeptoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **Target User** | Power users, system integrators, enterprise | Advanced developers, architects | Hobbyists, prosumers, rapid prototypers | Developers building autonomous agents |
| **Architecture** | Plugin-based, config-heavy, full-featured | Event-driven, microservice-like (Reborn) | Tool-calling loop, skill-based, simpler | Self-improving loop, middleware-driven |
| **Stability vs. Novelty** | **Stabilizing** after growth | **Rebuilding** core architecture | **Rapid iteration** with regressions | **Future-forward** features |
| **Primary Focus** | Production reliability, scale | Scalability, correctness, event sourcing | User experience, local LLMs, accessibility | Agent self-management, advanced loops |
| **Risk Profile** | Regression risk from feature bloat | Integration risk from massive refactor | UX risk from new feature regressions | Latent community / market adoption risk |

**Example:** **ZeptoClaw** is adopting **Hermes'** self-improving loop pattern, suggesting a community-recognized best practice for advanced agent behavior.

### 6. Community Momentum & Maturity

Projects can be grouped into distinct activity tiers based on the nature of their development.

- **Tier 1: Stabilizing (High Maturity, High Scale)**
    - **Projects:** OpenClaw, ZeroClaw
    - **Signal:** Activity is dominated by closing bugs and fixing regressions. The core features are in place; focus is on making them reliable. This is typical of a project with a large, demanding user base in production-like environments.

- **Tier 2: Rapidly Iterating (High Velocity, Some Instability)**
    - **Projects:** NanoBot, CoPaw, PicoClaw, NanoClaw, Hermes
    - **Signal:** High feature volume with a clear pattern of regressions followed by hotfixes. The community is vibrant and contributing fixes, but the user experience can be bumpy. These projects are innovating quickly but at a cost to stability.

- **Tier 3: Architecting (High Vision, Low Output)**
    - **Projects:** IronClaw (Reborn), ZeptoClaw
    - **Signal:** Activity is focused on large-scale internal refactoring or architectural changes (middleware, event stores). User-facing features are temporarily deprioritized. The output is low today, but the potential for future impact is high.

- **Tier 4: Low Momentum / Dormant**
    - **Projects:** NullClaw, Moltis, LobsterAI, TinyClaw
    - **Signal:** Minimal activity, no new releases, and a small or inactive community. The risk of these projects being left behind or abandoned is highest.

### 7. Trend Signals for AI Agent Developers

The following industry trends are validated by the cross-project data.

- **Trend 1: The Rush to Production Security.**
    - **Signal:** The community's loudest demands are for RBAC, secret masking, and SSRF protection. This is the single biggest shift from "fun experiment" to "reliable tool." Developers should prioritize a security-first architecture from day one.

- **Trend 2: The "Developer Experience" Bottleneck.**
    - **Signal:** There is a systemic failure in onboarding. From Docker image issues to missing binaries and complex config, every project is bleeding new users. A frictionless, single-command start is not a "nice-to-have" but a fundamental requirement for growth.

- **Trend 3: The Rise of the "Hybrid" Agent (Local + Cloud).**
    - **Signal:** Users demand the ability to run agents on cheap ARM hardware, Docker VPS instances, and even Android devices, while still integrating with cloud-based frontier models. Projects that optimize for this hybrid, resource-constrained deployment model (e.g., **NullClaw**, **NanoBot’s** local OOM prevention, **CoPaw’s** ARM fixes) will have a distinct advantage.

- **Trend 4: The Agent is the Platform.**
    - **Signal:** Features like **Crucible** (canonical actor framework), **Hermes'** self-improving loop, and **ZeptoClaw's** skill management tools all point to a future where the agent is not just an app but a self-modifying runtime environment. The platform's job is to provide a safe, robust sandbox for the agent to improve its own code and tools.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-05-04.

---

## NanoBot Project Digest: 2026-05-04

### 1. Today's Overview
The project is experiencing a very high level of activity, with major attention focused on stability and security fixes following the `v0.1.5.post3` release. The 23 updated PRs indicate a significant surge in community-driven contributions, successfully resolving several regressions and critical bugs. The maintainers are actively reviewing and merging these fixes, leading to a healthy closure rate of 4 out of 7 updated issues. The primary focus is on hardening the agent loop, fixing tool execution bugs, and improving provider handling, signaling a strong operational health push.

### 2. Releases
**No new releases were published today.** The current stable version remains `v0.1.5.post3`. All merged PRs today are candidates for a future patch release.

### 3. Project Progress
Ten PRs were merged or closed today, representing significant forward progress on several fronts:
- **Provider & Auth:** The highly requested **`nanobot provider logout`** command was implemented and merged ([PR #3612](https://github.com/HKUDS/nanobot/pull/3612) by chengyongru), closing a related older PR. A fix for **DeepSeek-V4 `reasoning_content` errors** was also merged ([PR #3616](https://github.com/HKUDS/nanobot/pull/3616) by 04cb).
- **Bug Fixes & Stability:** A critical fix for **WhatsApp voice message handling** was merged ([PR #3607](https://github.com/HKUDS/nanobot/pull/3607) by yorkhellen). A series of "workspace safety guard" fixes were merged to prevent false positives and improve retry logic ([PR #3613](https://github.com/HKUDS/nanobot/pull/3613) by chengyongru, [PR #3614](https://github.com/HKUDS/nanobot/pull/3614) by Re-bin). The bug causing **CLI terminal garbling** from API retries was fixed ([PR #3609](https://github.com/HKUDS/nanobot/pull/3609) by 04cb). A fix for **cron job data corruption** was also closed ([PR #3606](https://github.com/HKUDS/nanobot/pull/3606) by hussein1362).
- **Feature Enhancements:** A new **concurrent subagent limit** was introduced to prevent OOM crashes on local LLM servers ([PR #3615](https://github.com/HKUDS/nanobot/pull/3615) by mrbob-git). The beta **WebUI** received improvements to turn completion and chat isolation ([PR #3583](https://github.com/HKUDS/nanobot/pull/3583) by ramonpaolo).

### 4. Community Hot Topics
The most active discussions focused on user experience and security regressions:
- **CLI Output Corruption:** Issue [#3600](https://github.com/HKUDS/nanobot/issues/3600) (CLOSED) detailed how API retry messages were creating ANSI escape code garbage in the terminal. The community quickly diagnosed the problem and contributed the fix ([PR #3609](https://github.com/HKUDS/nanobot/pull/3609)).
- **Safety Guard False Positives:** Issue [#3599](https://github.com/HKUDS/nanobot/issues/3599) (CLOSED) reported that the new safety guard in `v0.1.5.post3` was incorrectly blocking legitimate commands (e.g., redirecting output to `/dev/null`). This triggered a focused effort leading to two merged PRs (#3613 and #3614) to soften the guard's logic.
- **DeepSeek-V4 Regression:** Issue [#3554](https://github.com/HKUDS/nanobot/issues/3554) (CLOSED) reported a persistent bug with DeepSeek-V4's `reasoning_content`, which was finally resolved in PR #3616 by using a non-destructive backfill strategy.

### 5. Bugs & Stability
A significant number of bugs were reported and fixed today, driven by regressions in `v0.1.5.post3`. Ranked by severity:

- **High (Critical/Data Loss):**
    - **Cron jobs silently disappearing** after container restart ([PR #3606](https://github.com/HKUDS/nanobot/pull/3606) by hussein1362). *Fix merged.*
    - **DeepSeek-V4 `reasoning_content` error** causing agent crashes ([Issue #3554](https://github.com/HKUDS/nanobot/issues/3554), fixed by [PR #3616](https://github.com/HKUDS/nanobot/pull/3616)). *Fix merged.*
- **High (Usability Broken):**
    - **WhatsApp voice messages not downloading/processing** ([Issue #3604](https://github.com/HKUDS/nanobot/issues/3604), fixed by [PR #3607](https://github.com/HKUDS/nanobot/pull/3607)). *Fix merged.*
    - **CLI output garbled** by retry error messages ([Issue #3600](https://github.com/HKUDS/nanobot/issues/3600), fixed by [PR #3609](https://github.com/HKUDS/nanobot/pull/3609)). *Fix merged.*
    - **Safety guard abort silently dropping turns** in non-CLI channels ([Issue #3605](https://github.com/HKUDS/nanobot/issues/3605) - OPEN). *No fix yet, but a similar issue was addressed by PR #3613.*
- **Medium:**
    - **Safety guard false positives** on legitimate commands ([Issue #3599](https://github.com/HKUDS/nanobot/issues/3599)). *Fix merged.*
    - **MCP connect failure wedging the event loop** ([PR #3610](https://github.com/HKUDS/nanobot/pull/3610) - OPEN). *Fix proposed.*

### 6. Feature Requests & Roadmap Signals
- **Provider Logout:** The `nanobot provider logout` command ([Issue #2665](https://github.com/HKUDS/nanobot/issues/2665), [PR #3612](https://github.com/HKUDS/nanobot/pull/3612)) was the most prominent feature request, now merged.
- **Local LLM Resource Management:** A proposal to limit concurrent subagents ([Issue #3611](https://github.com/HKUDS/nanobot/issues/3611)) was quickly implemented and merged ([PR #3615](https://github.com/HKUDS/nanobot/pull/3615)). This suggests a strong community need for better support of consumer-grade hardware.
- **SSRF/Local File Read Security:** Security researcher `mohamed-elkholy95` has a pending suite of PRs (e.g., [#3252](https://github.com/HKUDS/nanobot/pull/3252), [#3235](https://github.com/HKUDS/nanobot/pull/3235)) that harden the `ExecTool` against SSRF and file-read attacks. These are likely candidates for the next major security patch.

### 7. User Feedback Summary
User feedback reveals a mix of satisfaction with the project's rapid iteration and frustration with regressions.
- **Pain Points:** The introduction of the workspace safety guard in `v0.1.5.post3` caused immediate friction. Users reported it as "blocking legitimate actions" and "silently dropping turns," leading to a negative experience. The necessity to manage provider OAuth credentials without a logout command was another persistent pain point now resolved.
- **Use Cases:** Users are deploying NanoBot in diverse environments, including with local LLMs (`mlx_lm`, `Ollama`), via SSH, and on consumer hardware, highlighting the need for robust resource management.
- **Satisfaction:** The community is highly engaged and proactive, with users not only reporting bugs but also contributing fixes, demonstrating a strong, healthy contributor ecosystem.

### 8. Backlog Watch
Several high-impact PRs by contributor `mohamed-elkholy95` have been open since April 17 and are critical for security hardening:
- **[PR #3255](https://github.com/HKUDS/nanobot/pull/3255):** Enforces filesystem-layer protection on sensitive files like `history.jsonl`, preventing bypass of the shell-command guard. This is a deep security improvement that is too complex to be a simple hotfix.
- **[PR #3252](https://github.com/HKUDS/nanobot/pull/3252):** Extends SSRF scanning to non-HTTP schemes (`file://`, `gopher://`), closing a significant local-file-read and Redis attack vector.
- **[PR #3235](https://github.com/HKUDS/nanobot/pull/3235):** Prevents a "fail-open" state in SSRF protection when DNS resolution fails, ensuring security checks always fail closed.

These PRs are essential for public-facing deployments and should be prioritized for review and merge in the next cycle.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-04

## 1. Today's Overview

Hermes Agent saw extremely high activity over the past 24 hours, with 50 issues and 50 pull requests updated. The project remains in an active development and bug-fixing phase, with a burst of contributions from the community addressing core stability concerns. Notably, the Kanban system's profile-awareness bug has generated a cluster of related issues and fixes, indicating a systemic design tension between profile isolation and shared state. Several P1/P2 priority bugs were opened today, particularly around session recall, gateway crash loops, and credential resolution, but matching fix PRs have already been submitted for many of them — a positive sign for project velocity.

## 2. Releases

**No new releases today.** The latest release remains earlier versions; no version bump or changelog activity was detected in the past 24 hours.

## 3. Project Progress

Seven pull requests were merged/closed today, reflecting tangible progress:

- **#19381 (fix/agent):** Rephrased the context-compression summariser preamble to avoid Azure/OpenAI content filter false positives — a fix for a long-standing issue affecting users behind Azure-compatible proxies.
- **#19311 (fix/skills):** Fixed curator misclassification of hub-installed skills with non-ASCII names (e.g., `Get笔记`), which were incorrectly being merged into umbrella skills and archived.
- **#19518 (feat/sentry):** Added a Sentry webhook receiver (Phase 2 Lane A3 of Vedere ecosystem), including a FastAPI endpoint, backfill cron, and runbook.
- **#19520 (fix/docker/tui):** Patched TUI Docker setup to tolerate npm peer-flag differences in lockfile comparison, fixing install failures for Node 21+.
- **#19439 (fix/cli):** Fixed zsh completion script that was causing `_arguments` errors and failing to register with compinit.
- **#18810 (fix/cron/skills):** Curator now bumps skill usage timestamps when cron jobs load skills, preventing premature archiving of cron-used skills.
- **#19509 (fix/gateway):** Applied `HOME_CHANNEL` env vars to plugin platforms (e.g., XMPP) — previously silently ignored.

Additionally, several other PRs are open and being actively reviewed (see Bugs & Stability).

## 4. Community Hot Topics

The most discussed issues reveal deep frustration with Kanban multi-profile behavior and persistent platform integration problems:

- **#14637 (CLOSED) — OpenRouter AuthenticationError [5 comments]:** A user with correct `api_key` in `.env` still got HTTP 401. The root cause appears to be environment loading order or key duplication — a common bootstrap issue.
- **#18836 (OPEN) — Weixin Gateway: Timeout context manager bug [4 comments]:** Async task misusage in Weixin (微信) gateway causes send failures. Users are blocked on WeChat integration.
- **#7675 (OPEN) — Feishu: Three integration issues [4 comments, ongoing since April 11]:** Card interactions, approval buttons, and streaming replies all broken. This is a long-running pain point for Feishu/Lark users.
- **#19477 (OPEN) — Todo tool state lost on restart [3 comments, today's bug]:** In-memory-only `TodoStore` loses all data on gateway restart — immediately resonated with users.
- **#13072 (OPEN) — CLI Auto-Queue Mode with Smart Interrupt [3 comments, since April 20]:** Users want non-destructive message queuing; currently, sending a new message cancels the ongoing turn.

## 5. Bugs & Stability

Today saw a significant cluster of bugs, many with fix PRs already submitted:

### P1 (Critical)
- **#19434 — session_search recall failures [OPEN]:** Four bugs plus two design gaps in cross-session recall. JSON/SQLite split-brain, cron drowning user sessions, child sessions hidden. **No fix PR yet.** High impact for multi-session workflows.
- **#19471 — Gateway `--profile` crash loop after SIGTERM [OPEN]:** Event loop lost on restart, leading to infinite crash-restart cycles. **No fix PR yet.**
- **#19516 — Scope tool caches by session context [PR #19516 OPEN]:** Quiet-mode tool cache leaking between CLI and gateway sessions. Fix PR submitted.

### P2 (High)
- **#19477 — Todo tool state lost on restart [OPEN]:** **Fix PR #19511 submitted** — adds JSON persistence to `TodoStore`.
- **#19447 — delegate_task toolset intersection fails with composite toolsets [OPEN]:** Child agent receives zero tools. **Fix PR needed.**
- **#19462 — delegate_task(acp_command=...) fails with `SimpleNamespace` error [OPEN]:** CopilotACPClient bridge issue. **No fix PR yet.**
- **#19417 — MCP tool calls fail with `ClosedResourceError` [OPEN]:** Empty error message, difficult to debug. **No fix PR yet.**
- **#19287 — Telegram image arrives as file path, not vision content [OPEN]:** Model never sees pixels. **No fix PR yet.**
- **#19437 — Auxiliary client diverges from main conversation loop [OPEN]:** Independent resolution path causes inconsistent model usage.
- **#19515 — `model.max_tokens` in config.yaml ignored [PR #19515 OPEN]:** All tool-using agents fail with HTTP 400 through OpenAI-compatible proxies to Anthropic models. Fix PR submitted.
- **#19517 — `/fast` on Claude Opus 4.7 wedges session [PR #19517 OPEN]:** `speed` parameter not supported. Fix PR restricts fast mode to Opus 4.6.

### P3 (Medium)
- **#19519 — DeepSeek API key from config.yaml ignored [OPEN]:** **Fix PR #19523 submitted.**
- **#19440 — Plugin platforms ignore `HOME_CHANNEL` env vars [OPEN]:** **Fix PR #19509 submitted (merged).**
- **#9816 — Feishu markdown escaping broken [OPEN]:** Long-running formatting issue.
- **#19513 — TUI response messages vanish/blank out [PR #19513 OPEN]:** Rendering bug with terminal drawing characters.

## 6. Feature Requests & Roadmap Signals

Several feature requests signal where the project may be heading:

- **#19384 (OPEN, P3) — Skill curator CLI (`hermes skills`)**: A user-facing CLI for viewing skill usage stats, archive/restore, and prune operations. This aligns with the curator system being built in PR #bc79e227e and is likely for the next minor release.
- **#13072 (OPEN, P3) — CLI Auto-Queue Mode**: Smart interrupt with crash recovery for CLI chat. A UX improvement that would prevent message loss during agent processing. Could appear in v0.9.x.
- **#19479 (OPEN, P3) — Kanban tool auto-subscribe**: When an orchestrator agent creates a task via tool, it should auto-subscribe to notifications — currently only gateway slash commands do this.
- **#19344 (OPEN, P3) — Planning Consultant (`/consult`)**: A model-initiated feature where a cheap model can request review from a frontier model for complex decisions. This is an architectural innovation that could reduce costs while maintaining quality.
- **#5521 (OPEN, P3) — DeepInfra provider support**: Long-running PR (since April 6) to add 100+ open-source models via DeepInfra. The maintainers seem to be reviewing it slowly; it may land in the next release cycle.
- **#19524 (OPEN, P3) — Skill Evaluation Gate**: Enforce skill loading before tool execution using semantic evaluation. A novel approach to skill discovery.
- **#19526 (OPEN, P3) — Model picker restricted by `picker_mode` config**: Allow users to limit which providers appear in `/mode` to avoid stale API keys.
- **#933 (CLOSED) — Multiple OAuth tokens with fallback**: Request for automatic token failover across accounts. Closed but the underlying need for high-availability configuration is notable.

## 7. User Feedback Summary

**Pain Points (high frequency):**
1. **Kanban/Profile isolation** — Multiple users reported that Kanban tasks created in one profile are invisible to workers spawned in another profile. This is the single most complained-about issue cluster today (#18959, #19036, #18442, #19348). Users expect the shared board to actually be shared.
2. **Session memory failures** — Users report that the agent "can't remember what happened 5 minutes ago" (#19434, #14420). Session search is broken at a fundamental level.
3. **Platform integration reliability** — Feishu (card interactions, formatting), Weixin (timeout crashes), Telegram (image handling), and Discord (TTS) all have open bugs (#7675, #18836, #19287, #19521).
4. **Configuration confusion** — Multiple users tripped on API key resolution order (#14637, #19519). The interplay between `config.yaml`, `.env`, and provider-specific env vars is not intuitive.
5. **State loss** — Todo tool and other in-memory caches lose data on restart (#19477, #19417). Users expect persistence by default.

**Satisfaction Signals:**
- The curator and skill management features (PR #19524, #19384) are generating positive interest — users want better skill lifecycle management.
- The project's response time to critical bugs is good: several P1/P2 bugs opened today already have fix PRs.
- Community members are contributing meaningfully — 50 PRs updated today with diverse authors.

## 8. Backlog Watch

These items have been open for extended periods or lack maintainer attention:

- **#7675 (OPEN, since April 11) — Feishu three issues**: 25 days without resolution. Card interaction handling, approval buttons, and streaming support remain broken. **Notably, this is a critical blocker for Feishu/Lark enterprise adopters.**
- **#5521 (OPEN, since April 6) — DeepInfra provider PR**: 28 days without merge. The PR is well-structured but hasn't received maintainer review. Users who want access to 100+ open-source models are waiting.
- **#13072 (OPEN, since April 20) — CLI Auto-Queue Mode**: 14 days without maintainer comment. A well-written feature proposal with clear problem statement and design.
- **#9816 (OPEN, since April 14) — Feishu markdown escaping**: 20 days old. Breaks all rich message formatting for Feishu users.
- **#9846 (OPEN, since April 14) — Termux install path PR**: 20 days without merge. Android/Termux users are blocked on mobile deployment.
- **#933 (CLOSED) — Multiple OAuth tokens**: Closed without implementation. Users with multiple ChatGPT/Codex accounts still lack failover support. The closure may need re-evaluation.

**Maintainer Attention Needed:** The Feishu integration issues (#7675, #9816) are the most impactful backlog items, affecting a significant user base in China/Asia. The Kanban profile isolation cluster (#18959, #19036, #18442, #19348) needs a systemic fix rather than the piecemeal patches seen today.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**  
**Date:** 2026-05-04  
**Assessment:** High activity across bug fixes, provider integrations, and infrastructure improvements. A healthy mix of community contributions and core team work, with 23 PRs updated in the last 24h and several high-impact bugs closed.

---

## 1. Today's Overview

PicoClaw is seeing a surge in community and core development activity, with **23 pull requests** updated in the last 24 hours and **5 issues** receiving attention. The project is actively resolving provider-specific regressions (notably Gemini schema handling and DeepSeek image rejection), while also pushing forward new capabilities like image generation and runtime events. 6 PRs were merged or closed today, indicating steady progress. The open PR count of 17 suggests a healthy pipeline, though some older items (e.g., Docker privilege PR from April 1) remain in backlog. No new releases were published.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Project Progress

**Merged/Closed PRs (6 total):**

- **[PR #2717](https://github.com/sipeed/picoclaw/pull/2717)** (closed) — Added DeepSeek vision unsupported error detection. Fixes the `unknown variant image_url` crash for non-multimodal models.
- **[PR #2681](https://github.com/sipeed/picoclaw/pull/2681)** (closed) — Sanitizes MCP tool schemas for Gemini function calling, resolving HTTP 400 errors with complex JSON schemas (`$ref`, `anyOf`). Directly closes Issue #2668.
- **[PR #2677](https://github.com/sipeed/picoclaw/pull/2677)** (closed) — Introduces a unified runtime event infrastructure (`pkg/events`) with backpressure, subscriptions, and in-process publishing.
- **[PR #2682](https://github.com/sipeed/picoclaw/pull/2682)** (closed) — Docs fix: corrects `agents.defaults.model` configuration format from object to flat string format.
- **[PR #2735](https://github.com/sipeed/picoclaw/pull/2735)** (closed) — Dependencies: bump `aws-sdk-go-v2/config` to 1.32.17.
- **[PR #2718](https://github.com/sipeed/picoclaw/pull/2718)** (closed) — Issue fix: DeepSeek 400 error when image persists in history.

**Features Advanced:**
- **Gemini MCP compatibility** — Schema sanitizer now normalizes complex JSON Schema (`$ref`, `anyOf`) for Gemini function calling.
- **Runtime events** — New `pkg/events` package enables observability, agent monitoring, and subscriber management.
- **DeepSeek compatibility** — Image rejection detection prevents crashes; streaming `reasoning_content` capture added.
- **MCP per-request headers** (PR #2696, open) — Channels can forward dynamic HTTP headers to MCP servers via `InboundContext.Raw`.

---

## 4. Community Hot Topics

- **[Issue #2225: Ollama cloud credentials](https://github.com/sipeed/picoclaw/issues/2225)** — 10 comments, 3 weeks old. User needs credential support for Ollama cloud; no maintainer response yet. High community engagement.
- **[Issue #2668: Gemini HTTP 400 for MCP tools with $ref/anyOf](https://github.com/sipeed/picoclaw/issues/2668)** — 1 comment, 1 👍. **Closed by PR #2681.** Underlying need: support for complex JSON Schema definitions in MCP tools for Gemini.
- **[Issue #2718: DeepSeek 400 'unknown variant image_url'](https://github.com/sipeed/picoclaw/issues/2718)** — 0 comments. **Closed by PR #2717.** Root cause: non-multimodal models rejecting image content from channels.
- **[PR #2752: Model configuration workflows](https://github.com/sipeed/picoclaw/pull/2752)** — New PR adding upstream model fetching, provider-aware validation, and connectivity testing in the web UI. Signals strong demand for configuration UX improvements.

**Analysis:** The community is heavily focused on provider compatibility (Ollama, Gemini, DeepSeek) and configuration ease-of-use. The Ollama credentials issue (#2225) is a notable gap given the project's Ollama focus.

---

## 5. Bugs & Stability

**High Severity (fixed/in progress):**
- **Gemini + MCP schema crash** (#2668, closed) — HTTP 400 for tools with `$ref`/`anyOf`. **Fixed** by schema sanitizer in PR #2681.
- **DeepSeek image rejection crash** (#2718, closed) — 400 error when non-multimodal model receives image. **Fixed** by error detection in PR #2717.

**Medium Severity:**
- **[Issue #2753: Build from source → launcher does not exist](https://github.com/sipeed/picoclaw/issues/2753)** — New, open. User cannot find `picoclaw-launcher` binary after source build. Likely a build script or README issue.
- **[Issue #2744: Android v0.2.8 data access bug](https://github.com/sipeed/picoclaw/issues/2744)** — Open, 0 comments. User cannot access data from tabs on Android; reproduction details missing.
- **[PR #2750: Exec guard treats relative paths as root-absolute](https://github.com/sipeed/picoclaw/pull/2750)** — Open. Path scanner misinterprets relative paths like `archive/SKILL.md` as root-absolute, breaking workspace checks.

**Low Severity:**
- Telegram media group album handling (PR #2758) — Fix for buffering multiple-photo albums into single messages.
- Telegram topic context preservation (PR #2756) — Ensures forum topic replies keep their `TopicID`.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood | Notes |
|---|---|---|---|
| **Image generation tool** | PR #2760 (new) | High | Core `image_generate` tool with OpenAI/Codex backend; provider-oriented for extensibility. |
| **Model configuration UI** | PR #2752 | High | Upstream model fetching, provider validation, connectivity test. Web UI revamp. |
| **Ollama cloud credentials** | Issue #2225 | Medium | 10 comments, no response. Likely to be addressed in next version given demand. |
| **Dynamic MCP headers** | PR #2696 | Medium | Channels forward per-request headers to MCP servers. Useful for auth tokens. |
| **Streaming reasoning_content** | PR #2740 | High | Captures DeepSeek thinking-mode tokens from streaming. Already merged or pending. |

**Prediction:** The next release will likely include image generation (PR #2760), model config UI improvements (PR #2752), and the runtime events infrastructure (PR #2677). Ollama credentials may appear as a follow-up.

---

## 7. User Feedback Summary

**Pain Points:**
- **Ollama cloud credential gap** (#2225) — Users cannot use Ollama cloud without credential support.
- **Build from source broken** (#2753) — Missing launcher binary after source install. Frustrating for new users.
- **Android app data inaccessible** (#2744) — Tab data unreadable on v0.2.8; possibly a layout or state bug.
- **Telegram album handling** (PR #2758) — Multiple-photo albums sent as separate messages; disorganized experience.

**Satisfaction Signals:**
- Gemini MCP schema fix (#2668) received a 👍, indicating relief.
- DeepSeek reasoning_content capture (PR #2740) addresses a common user request for thinking-mode visibility.
- Runtime events infrastructure (PR #2677) is a foundational improvement that will enable better debugging and monitoring.

**Use Cases:**
- **Multimodal agents** — Users combining Gemini/DeepSeek with MCP tools for Notion, web search, and image understanding.
- **Telegram bots** — Heavy use of Telegram channel with media groups, topics, and retries.
- **Android edge deployment** — Running PicoClaw on Android TV boxes (Termux) as low-cost nodes.

---

## 8. Backlog Watch

| Item | Age | Status | Why It Matters |
|---|---|---|---|
| **[PR #2239: Docker compose with privileged](https://github.com/sipeed/picoclaw/pull/2239)** | 33 days | Open, stale | Docker deployment is critical for production users; no update since April 1. |
| **[Issue #2225: Ollama cloud credentials](https://github.com/sipeed/picoclaw/issues/2225)** | 34 days | Open, 10 comments | High community demand; no maintainer acknowledgment. |
| **[PR #2647: web_search YAML config + DuckDuckGo default](https://github.com/sipeed/picoclaw/pull/2647)** | 10 days | Open, stale | Fixes config format and defaults for web search tool. Important for usability. |
| **[PR #2462: Codex streaming + Telegram retries](https://github.com/sipeed/picoclaw/pull/2462)** | 25 days | Open | Deep fix for Codex streaming output and Telegram duplicate retries; complex but high-impact. |

**Recommendation:** Maintainers should prioritize Issue #2225 (Ollama credentials) and PR #2239 (Docker privileged) to reduce community friction. PR #2462 (Codex streaming) has been open for 25 days and addresses a real-world Android deployment scenario.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-04

## Today's Overview

NanoClaw saw **extremely high activity** on 2026-05-04, with **50 pull requests** updated in the last 24 hours (31 merged/closed) and **10 issues** resolved or created. The burst of activity appears to be a coordinated triage and stabilization push — 8 of 10 issues were closed, and the PR queue includes multiple security hardening, migration UX, and bug-fix submissions. No new releases were published. The project remains in an active development phase, with contributors delivering both feature work and incident-driven fixes in parallel. However, the sheer volume of simultaneous PRs (19 still open) suggests the maintainer team may be approaching a review bottleneck.

## Releases

No new releases were published today.

## Project Progress

**31 pull requests were merged or closed** in the past 24 hours, spanning several functional areas:

| Area | Notable Merged PRs | Summary |
|------|-------------------|---------|
| **Setup/Onboarding UX** | [#2206](https://github.com/qwibitai/nanoclaw/pull/2206) | Added "Other…" option to first-time channel picker for channels without bash installers |
| | [#2229](https://github.com/qwibitai/nanoclaw/pull/2229) | Recognized `ANTHROPIC_AUTH_TOKEN` in setup verification (fixes [#853](https://github.com/qwibitai/nanoclaw/issues/853)) |
| | [#2216](https://github.com/qwibitai/nanoclaw/pull/2216) | Migration script UX — interactive TTY guard, OneCLI health check fix, legacy service cleanup |
| **Identity & Agent Correctness** | [#2223](https://github.com/qwibitai/nanoclaw/issues/2223) (closed via PR) | Agent identity conflated with Telegram handle — fixed in `main` container |
| **Memory / Knowledge Management** | [#2197](https://github.com/qwibitai/nanoclaw/pull/2097) | Merged Lore Context semantic memory skill for cross-session recall |
| **RULES.md Diet** | [#2219](https://github.com/qwibitai/nanoclaw/issues/2219) (tracking) | 4 PRs merged, RULES.md reduced by ~12K bytes |
| **Container & CLI Fixes** | [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) (closed) | `gh` CLI missing from container PATH — regression fixed |
| | [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) (closed) | Agent posting to deregistered chat — fixed |
| **Team Configuration** | [#2228](https://github.com/qwibitai/nanoclaw/pull/2228) | baget.ai partial team support — CoS-required, specialists optional |

## Community Hot Topics

The most active discussions today were concentrated on **security hardening** submissions from the `Hinotoi-agent` account, though none had extensive comment threads:
- **[PR #2004](https://github.com/qwibitai/nanoclaw/pull/2004)** — Trust only canonical channels remote (security, open since 2026-04-25, 0 comments)
- **[PR #2000](https://github.com/qwibitai/nanoclaw/pull/2000)** — Cap request bodies before adapter dispatch (security, open since 2026-04-25, 0 comments)
- **[PR #1999](https://github.com/qwibitai/nanoclaw/pull/1999)** — Reject symlinked host-managed directories (security, open since 2026-04-25, 0 comments)

**Underlying need**: These three long-open security PRs reveal a desire among the community for a stronger trust boundary between NanoClaw's host system and its container/adapter runtime. The silence on these PRs suggests maintainer review capacity is the bottleneck, not community interest.

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) | `gh` CLI missing from agent container PATH (regression) | **Fixed** — closed 2026-05-03 |
| **High** | [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) (OPEN) | `engage_mode='always'` not handled in `evaluateEngage()` — silently drops all group messages | **No fix PR yet**; |
| **Medium** | [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) | Agent posts in deregistered 'Old.wtf' chat when no response needed | **Fixed** — closed 2026-05-03 |
| **Medium** | [#2214](https://github.com/qwibitai/nanoclaw/issues/2214) | iMessage local-mode adapter never delivers inbound messages to host | **Closed** without a linked fix PR |
| **Low** | [#853](https://github.com/qwibitai/nanoclaw/issues/853) | `ANTHROPIC_AUTH_TOKEN` not recognized in setup verification | **Fixed** via PR [#2229](https://github.com/qwibitai/nanoclaw/pull/2229) |

**Critical regression watch**: The `gh CLI missing from PATH` issue ([#2221](https://github.com/qwibitai/nanoclaw/issues/2221)) is a regression — previously working functionality broke, which could indicate an underlying container build or Dockerfile regression that may resurface.

## Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|---------------------------|
| **MacPorts support** | PR [#2238](https://github.com/qwibitai/nanoclaw/pull/2238) (OPEN) | **High** — clear, well-scoped, single-purpose |
| **llama.cpp compatibility** | Issue [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) (OPEN) | **Medium** — aligns with self-hosted/open-weight trend but requires deeper integration |
| **Per-group model + effort overrides** | PR [#2233](https://github.com/qwibitai/nanoclaw/pull/2233) (OPEN) | **Medium** — low-risk config change, high value for multi-agent setups |
| **Interval-based recurrence scheduling** | PR [#2237](https://github.com/qwibitai/nanoclaw/pull/2237) (OPEN) | **Medium** — complements existing cron; author appears active |

**Prediction**: The next minor release will likely include MacPorts support and per-group model overrides, as these are additive config changes with no breaking risk. The `llama.cpp` issue may take longer as it requires debugging the connection handshake.

## User Feedback Summary

**Pain points expressed today:**

1. **"/update-nanoclaw skill broken on v2"** — PR [#2222](https://github.com/qwibitai/nanoclaw/pull/2222) directly addresses this, adding dep install, container typecheck, and channel update awareness for the v2 architecture.

2. **"Agent identity confusion"** — Issue [#2223](https://github.com/qwibitai/nanoclaw/issues/2223) revealed a fundamental UX problem: the agent conflated its own identity with its Telegram bot handle. This was quickly fixed, indicating strong maintainer responsiveness.

3. **"Silent message drops"** — Issue [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) shows a configuration bug that silently eats all group messages. The lack of a fix PR is concerning for users relying on `engage_mode='always'`.

4. **"Self-hosting with llama.cpp fails"** — Issue [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) represents a real user trying to run NanoClaw without Anthropic infrastructure. The failure message ("Your assistant didn't reply in time.") provides no diagnostic value, pointing to a poor error-handling UX for self-hosted setups.

**Satisfaction signals**: The rapid closure of 8 issues in 24 hours (especially identity and regression bugs) demonstrates a team that values user-reported problems. The `RULES.md diet` tracking issue ([#2219](https://github.com/qwibitai/nanoclaw/issues/2219)) shows awareness of token-cost optimization, which advanced users appreciate.

## Backlog Watch

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[PR #2004](https://github.com/qwibitai/nanoclaw/pull/2004)** — Trust only canonical channels remote | 9 days | OPEN, 0 comments | Security hardening for installer trust boundary |
| **[PR #2000](https://github.com/qwibitai/nanoclaw/pull/2000)** — Cap request bodies before adapter dispatch | 9 days | OPEN, 0 comments | Prevents OOM DoS on webhook adapters |
| **[PR #1999](https://github.com/qwibitai/nanoclaw/pull/1999)** — Reject symlinked host-managed directories | 9 days | OPEN, 0 comments | Host/container filesystem isolation hardening |
| **[Issue #2227](https://github.com/qwibitai/nanoclaw/issues/2227)** — `engage_mode='always'` silently drops messages | 1 day | OPEN, 0 comments | User-facing functionality completely broken for valid config; no fix PR yet |

**Maintainer attention needed**: The three security PRs from `Hinotoi-agent` (PRs #2004, #2000, #1999) are languishing with zero comments for over a week. These are important hardening changes that could prevent real security incidents. Issue #2227 (engage_mode bug) was filed the same day but already has no fix action — it should be prioritized as it renders a documented configuration option non-functional.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-04

## Today's Overview
The project shows moderate activity today with 2 issues updated, 2 PRs touched, and no new releases. A critical bug report (#871) regarding `web_search` impracticality on low-resource devices remains open and active, indicating a gap in the core use case of running on cheap hardware. A new proposal (#882) to default to Landlock sandboxing on Linux has gained attention, reflecting ongoing reliability concerns around the current `auto` sandbox backend probing. One PR (#884) was closed and merged, suggesting incremental progress on runtime test coverage, while another (#883) remains open with a targeted fix for child process spawning.

## Releases
No new releases are recorded for today. The latest release remains unspecified.

## Project Progress
- **PR #884 (Closed, Merged)** — *Fix/add crit tests* by DonPrus: This PR adds critical Zig test coverage for nullclaw's high-risk runtime contracts, covering ownership, lifecycle, security, routing, parser, and registry contracts. It also fixes production issues surfaced by the new tests. This merge strengthens the project's reliability guarantees for core runtime behavior. ([Link](https://github.com/nullclaw/nullclaw/pull/884))

## Community Hot Topics
- **Issue #871** — *[bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support* (5 comments, updated 2026-05-04): The most active issue. Users are frustrated that the only practical web search options (Brave Search API) require external API keys and are thus infeasible for the intended use case of cheap, weak devices. Underlying need: a lightweight, API-key-free search integration (e.g., direct DuckDuckGo) suitable for resource-constrained hardware. ([Link](https://github.com/nullclaw/nullclaw/issues/871))
- **Issue #882** — *sandbox: default to Landlock on Linux, stop probing external tools at startup* (2 comments, updated 2026-05-04): A proposal to fix recurring problems from the current `auto` sandbox backend, which spawns child processes to detect Firejail, Bubblewrap, or Docker at startup. The author advocates for defaulting to Landlock (a kernel-level sandbox) to reduce startup failures and resource consumption. ([Link](https://github.com/nullclaw/nullclaw/issues/882))
- **PR #883** — *probe: resolve executable before spawning child process* (updated 2026-05-04, open): Related to #882, this PR adds pre-spawn resolution checks to avoid orphaned processes from a Zig stdlib bug when `execve` fails. It's a tactical fix to the probing problem, while #882 proposes a strategic replacement. ([Link](https://github.com/nullclaw/nullclaw/pull/883))

## Bugs & Stability
- **Severity: High** — Issue #871: `web_search` is impractical for low-resource devices. Users cannot use the intended search feature without external API fees or heavy infrastructure. No fix PR exists yet. Affects core UX for the target demographic.
- **Severity: Medium** — Issue #882 (and PR #883): The current sandbox auto-detection mechanism can leave orphaned child processes due to a stdlib bug. PR #883 provides a partial fix (executable resolution before spawning), while #882 proposes a more fundamental redesign. Both address startup reliability, especially on constrained systems.

## Feature Requests & Roadmap Signals
- **Direct DuckDuckGo integration for `web_search`** (from #871): Users explicitly request direct DuckDuckGo support (no API key) to make web search viable on low-resource devices. This is likely the highest-priority feature request for the next release, as it directly impacts the product's stated use case.
- **Landlock as default sandbox backend on Linux** (from #882): If adopted, this would reduce startup overhead and eliminate the probe-before-startup pattern. Could appear in the next minor version given the recurring issues with the current approach.
- **Improved executable resolution in child process spawning** (from PR #883): Already submitted as a fix; likely to be merged soon as it addresses a class of runtime failures.

## User Feedback Summary
- **Pain point — web search**: A real user (uMendex) reports that `web_search` is "not usable in a practical way" for the intended use case. The friction of obtaining and maintaining an external Brave API key is a barrier to entry for users of cheap devices.
- **Pain point — startup reliability**: Users (at least one, mark-os) report recurring issues with sandbox detection crashing or hanging at startup due to child process failures. This leads to poor first-run experience, especially on low-resource hardware.
- **Desired direction**: Users want a self-contained, low-overhead runtime that "just works" without external dependencies (API keys, third-party binaries, or excessive probing). Satisfaction is impacted when the agent cannot use core features (search) or fails to start reliably.

## Backlog Watch
- **Issue #871** — *[bug] Critical: web_search is impractical on low-resource devices* (created 2026-04-25, updated 2026-05-04): This issue has been open for 9 days with 5 comments but no maintainer response or assignment. As a critical bug blocking the primary use case, it warrants priority attention from the maintainers. ([Link](https://github.com/nullclaw/nullclaw/issues/871))
- **No other long-unanswered items** of note in the current window; the remaining items (PR #883, Issue #882) are recent and still under discussion.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-04

## Today's Overview

The IronClaw project enters an intense architecture phase, with the **Reborn** substrate landing on `main` behind feature gates (PR #3230) dominating activity. Of the 20 active Issues, 15 are Reborn-related blockers or spec definitions opened by core contributor `serrrfirat`, signaling a concentrated push toward the Reborn cutover. Activity remains high: 20 Issues and 18 PRs updated in the last 24 hours, with 3 PRs merged/closed. No new releases were published today, and the project remains in its v0.27.0 stable line while the Reborn re-architecture prepares for eventual user-facing cutover.

## Releases

None. No new releases were published in the last 24 hours. The current stable version remains v0.27.0.

## Project Progress

Three PRs were merged or closed today:

- **#3226** (closed, merged) — **[fix(llm): preserve Gemini thought_signature in OpenAI-compatible tool loops](https://github.com/nearai/ironclaw/pull/3226)** — Contributor `thomasmaerz` landed a fix that threads the optional `thought_signature` field through shared `ToolCall` structures, resolving the Gemini API-key backend failure for tool-calling (addresses Issue #3225). Includes integration regression coverage for second-turn tool loops.

- **#3234** (closed, merged) — **[ci(e2e): replace deleted preflight test with tool_activate surface](https://github.com/nearai/ironclaw/pull/3234)** — Core contributor `ilblackdragon` fixed a stale CI reference to a test file removed in a previous engine-v2 change, unblocking the v2-engine E2E lane.

- **#3170** (closed, merged) — **[test(reborn): add host runtime vertical gates](https://github.com/nearai/ironclaw/pull/3170)** — `serrrfirat` rebased and added caller-level vertical integration gates for durable replay cursor/gap behavior, scope mount attenuation, and resource/output-limit reconciliation.

**Key Reborn PRs now open:**

- **#3230** (open) — **[feat:(reborn) land Reborn substrate into main behind default-off gates](https://github.com/nearai/ironclaw/pull/3230)** — XL-sized PR bringing the `reborn-integration` branch into `main` to reduce branch drift and get CI validation. Includes DB migrations, crate additions, and feature-gated code paths. This is the single most significant structural change in progress.

- **#3099** (open) — **[Add Reborn transport adapter contract](https://github.com/nearai/ironclaw/pull/3099)** — XL-sized, adds the `ironclaw_transport` crate with typed routes, ingress/egress, and a bridge from v1 Channels to TransportAdapters.

- **#3171** (open) — **[Add Reborn event store backends](https://github.com/nearai/ironclaw/pull/3171)** — Adds PostgreSQL, JSONL, and libSQL backends for the Reborn durable event/audit store (core contributor `zmanian`).

- **#3212** (open) — **[Add Reborn event projection service](https://github.com/nearai/ironclaw/pull/3212)** — XL-sized, adds `EventProjectionService` with replay-derived projections (core contributor `zmanian`).

## Community Hot Topics

- **#3036** **[EPIC: Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses](https://github.com/nearai/ironclaw/issues/3036)** — 3 comments, 1 👍 — The most positively reacted Issue, this enhancement EPIC addresses a fundamental pain point: operators must hand-edit `.env`, JSON settings, and runtime flags with no schema or audit trail. The author (`ilblackdragon`) frames this as a two-class-operator problem that Reborn should solve declaratively.

- **#3016** **[Reborn cutover blocker: add reference AgentLoopHost facade](https://github.com/nearai/ironclaw/issues/3016)** — 3 comments — A key architectural blocker that defines how the Reborn agent loop host-service layer will be structured, linking to 7 dependent tracking issues.

- **#3228** **[Terminal corruption after /quit in SSH/noVNC/screen/tmux](https://github.com/nearai/ironclaw/issues/3228)** — 1 comment — High-severity TUI bug affecting remote/multiplexed terminal sessions, posted with detailed reproduction steps.

- **#1549** **[feat: Slack Socket Mode for NAT-friendly connectivity](https://github.com/nearai/ironclaw/pull/1549)** — XL-sized, new contributor — A long-running PR (since March 21) for WebSocket-based Slack connectivity that doesn't require a public URL. Still open for review.

## Bugs & Stability

**Critical:**

- **#3229** — **[LLM provider fallback persists to DB on startup, permanently destroying user's model/provider config](https://github.com/nearai/ironclaw/issues/3229)** — Rated Critical. On fresh v0.27.0 installations, the `resolve_llm_with_secret` function in `src/config/mod.rs` writes fallback provider choices to the libSQL database during startup, overwriting any user configuration. No fix PR visible yet.

**High:**

- **#3228** — **[Terminal corruption after /quit in SSH/noVNC/screen/tmux — mouse tracking only partially disabled](https://github.com/nearai/ironclaw/issues/3228)** — High severity. After `/quit`, mouse tracking is only partially disabled in multiplexed/remote terminal sessions, leaving users with a corrupted terminal that requires manual reset. No fix PR visible yet.

- **#3225** — **[bug: gemini API-key backend fails tool-calling with missing thought_signature](https://github.com/nearai/ironclaw/issues/3225)** — High severity for Gemini users. Deterministic failure on second LLM turn (after first tool call) with HTTP 400. **Fix is now available** in merged PR #3226.

**Medium:**

- **#3227** — **[TUI text copy fails silently in headless/X11-less environments](https://github.com/nearai/ironclaw/issues/3227)** — Medium severity. The `arboard` clipboard crate requires X11/Wayland display, but the error is silently swallowed in headless environments. No fix PR visible yet.

- **#3201** — **[Tool use for Deepseek is not working](https://github.com/nearai/ironclaw/issues/3201)** — QA-reported regression on `deepseek-v4-flash` provider. Steps to reproduce: configure DeepSeek, ask for recent news, error occurs. No fix PR visible yet.

## Feature Requests & Roadmap Signals

The overwhelming signal for the next version is the **Reborn re-architecture**. 15 of 20 active Issues are Reborn-related, systematically defining boundaries for:

- Turn coordination and persistence (#3013, #3202, #3198, #3199)
- Tool surface and capability catalog (#3090)
- Loop support services (#3091)
- Cancellation semantics (#3238)
- Follow-up and steering policy (#3236)
- HTTP syscall contract for shared egress (#3237)
- AgentLoopDriver and run-class profiles (#3107)
- Crate boundaries for `ironclaw_turns` (#3195)

Additionally, **Configuration-as-Code** (#3036) is the most visible user-facing feature request, flagged as an EPIC with "reborn" and "enhancement" labels. This suggests the Reborn cutover will include a declarative configuration system for tenant blueprints and use-case harnesses.

The **Slack Socket Mode** PR (#1549) and the **NEAR intents trial mode** PR (#3218) point to expanding channel support and blockchain integration, likely candidates for the next minor release after Reborn stabilizes.

## User Feedback Summary

**Real pain points visible in today's data:**

1. **Configuration complexity** — Issue #3036 explicitly describes the frustration of hand-editing `.env`, `.system/` docs, settings JSON, extension installs, and runtime flags with "no schema, no diff, no audit trail." This is a validated, articulated pain point the team is actively addressing in Reborn.

2. **LLM provider fragility** — Multiple critical/high bugs in provider backends (Gemini thought_signature, DeepSeek tool use, permanent config corruption) suggest users experience frequent breakage when trying different model providers.

3. **Terminal environment issues** — The TUI corruption (#3228) and silent copy failure (#3227) in headless/remote environments indicate that users deploying IronClaw in containers or via SSH face poor terminal UX.

4. **WASM channel activation gap** — PR #3233 fixes a silent failure where WASM channels listed in config were never auto-activated on headless servers, meaning Telegram polling and other WASM channels "silently never started."

**Satisfaction signals:** The number of core contributors actively pushing Reborn forward (3–4 dedicated contributors) and the systematic approach to defining contracts suggests a well-organized team confident in their architecture. The 1 👍 on #3036 indicates community interest in the Configuration-as-Code direction.

## Backlog Watch

**Items needing maintainer attention:**

- **#1549** — **[feat: Slack Socket Mode for NAT-friendly connectivity](https://github.com/nearai/ironclaw/pull/1549)** — Open since **March 21** (44+ days). XL-sized PR from a new contributor. No maintainer comments or review activity visible in metadata. Risk of contributor burnout or abandonment if this stalls much longer.

- **Dependabot PRs** — Four dependency update PRs (#2973, #2593, #2971, #2972) have been open for 7–17 days without merge. These update 39+ dependencies across tokio ecosystem, wasmtime (43→44), and CI actions. While low-risk individually, accumulating dependency drift increases merge conflict risk.

- **#3201** — **[Tool use for Deepseek is not working](https://github.com/nearai/ironclaw/issues/3201)** — QA-reported regression open since May 2 with no assignee and no fix PR. Given the criticality of provider compatibility, this warrants prompt triage.

---

*Digest generated 2026-05-04 from IronClaw project data. All links reference [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-04

## Today's Overview
Activity on the LobsterAI GitHub repository remains low but stable, with only one new issue and two existing pull requests updated in the last 24 hours. No new releases were published. Two PRs from late March remain open and unmerged, suggesting a slowdown in core feature integration. The community contribution channel is quiet, though a new feature request indicates ongoing user interest in expanding agent integration. Overall, project health appears steady but with limited forward momentum.

## Releases
No new releases were published in the last 24 hours. The latest release remains unchanged.

## Project Progress
No pull requests were merged or closed today. Two existing PRs received updates:
- **#812** ([stale] perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞) — Remains open since March 25, targeting SQLite write performance.
- **#871** ([stale] feat(skills): 新增skill执行统计展示) — Remains open since March 25, adding Skill execution analytics to the UI.

No new features or fixes were completed today.

## Community Hot Topics
- **Issue #1880** (opened by ecolife007, May 3) — Request to integrate **Hermes Agent** and **OpenClaw** as agents in LobsterAI, referencing Open WebUI's agent connection flow. No comments or reactions yet, but the suggestion reflects demand for broader agent ecosystem compatibility.
- **PR #812** (noransu, March 25) — SQLite performance optimization with debounce and caching. Still open; no merge activity despite being open for over a month.
- **PR #871** (tiamy, March 25) — Skill execution statistics dashboard. No merge activity.

## Bugs & Stability
No new bugs or stability issues were reported in the last 24 hours. The only performance-related work is **PR #812**, which addresses SQLite synchronous write blocking on the Electron main thread — a known pain point from Issue #562. This PR remains unmerged, so the bug is still unresolved.

## Feature Requests & Roadmap Signals
**Issue #1880** is the only new feature request today. It proposes integrating **Hermes Agent** and **OpenClaw** as first-class agents in LobsterAI, modeled after Open WebUI's agent connection interface. This signals user interest in pluggable agent frameworks and better interoperability with external agent ecosystems. If adopted, this could align LobsterAI with broader open-source AI agent trends. No maintainer response yet.

## User Feedback Summary
No direct user feedback was captured in the last 24 hours. The lone issue (#1880) suggests a user pain point: the difficulty of connecting and managing external agents. The user seeks a simpler, more intuitive interface — likely reflecting dissatisfaction with the current agent integration workflow.

## Backlog Watch
Both open PRs are now stale:
- **PR #812** (noransu, 40 days open) — SQLite performance fix. Important for Electron UI responsiveness. Needs maintainer review and decision.
- **PR #871** (tiamy, 40 days open) — Skill execution analytics. Valuable for user-facing insights but has been waiting for over a month.

Neither PR has recent comments from maintainers, indicating potential review bottlenecks. Issue #1880, while new, may also require a roadmap decision soon to avoid long waits.

---
*Generated from LobsterAI public GitHub data. All links: github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest — 2026-05-04**

---

### 1. Today's Overview
Moltis is in a steady maintenance phase today with low but focused activity. One new issue was filed regarding a critical schema-validation bug in tool execution, while two open pull requests address documentation and a fix for DeepSeek reasoning content replay. No releases were cut in the last 24 hours. The project appears stable, with maintainers actively reviewing code contributions and triaging a high-severity defect.

---

### 2. Releases
No new releases in the last 24 hours. The latest releases remain as previously documented.

---

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours. However, two open PRs are driving improvements:

- **#962** — [Update local TTS provider docs](https://github.com/moltis-org/moltis/pull/962)  
  Author: penso  
  Updates Piper and Coqui documentation to point to actively maintained forks and repositories. Also adds the missing `.onnx.json` config download instruction for Piper.

- **#961** — [fix(providers): replay DeepSeek reasoning content](https://github.com/moltis-org/moltis/pull/961)  
  Author: penso  
  Fixes an issue where DeepSeek reasoning content was dropped when converting persisted chat history. Adds regression tests for DeepSeek V4 thinking mode.

---

### 4. Community Hot Topics
The most notable item is:

- **Issue #963** — [Tool calls with malformed or empty arguments collapse to missing required fields](https://github.com/moltis-org/moltis/issues/963)  
  Author: Cstewart-HC | 0 comments | 0 reactions  
  This issue describes an intermittent failure where the `exec` tool is invoked but rejected by the runner’s pre-dispatch schema validation with `missing=command`. The user notes that the error occurs before `ExecTool.execute()` or any `BeforeToolCall` hooks run, suggesting a validation-layer bug. Though it has no comments yet, the silent, intermittent nature of the error signals a reliability risk that may affect users running autonomous agent workflows.

---

### 5. Bugs & Stability
One new bug reported, ranked **High severity**:

- **Issue #963** — [Tool calls with malformed/empty arguments](https://github.com/moltis-org/moltis/issues/963)  
  **Severity:** High — intermittent schema validation failures in pre-dispatch can cause unpredictable agent crashes.  
  **Status:** No fix PR exists yet; awaiting maintainer triage.

No other crashes, regressions, or stability issues were reported today.

---

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, two signals emerge:

- **PR #962 (TTS docs update)** suggests the community relies on local TTS providers (Piper, Coqui) and needs up-to-date guidance. This may indicate ongoing interest in on-device voice capabilities.
- **PR #961 (DeepSeek reasoning replay)** implies support for multi-turn reasoning models is a priority. DeepSeek V4 thinking-mode compatibility may become a baseline expectation in the next release.

**Prediction:** The next minor release will likely include the fixes from PRs #961 and #962, and potentially a hotfix for the issue #963 schema validation bug.

---

### 7. User Feedback Summary
The only direct user feedback today comes from issue #963:

- **Pain point:** Intermittent failures in `exec` tool calls due to schema validation that bypasses the tool execution layer. Users cannot reliably run multi-step autonomous tasks.
- **Use case:** Autonomous agent workflows where the model calls `exec` multiple times in a session.
- **Sentiment:** Dissatisfaction due to non-deterministic failure; the issue was filed without a workaround.

No positive or negative sentiment feedback was recorded in other items.

---

### 8. Backlog Watch
No issues or PRs currently appear to be stale or long-unanswered. All items in the daily update are from the last 24 hours and have received maintainer attention (PRs authored or reviewed by active contributer penso).  

- **PR #961** and **PR #962** are open with no activity beyond their creation; they should be reviewed for merge in the coming days.
- **Issue #963** is new and has not yet been triaged — it should be prioritized given its high-severity classification.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw (github.com/agentscope-ai/CoPaw)** , generated on **2026-05-04**.

---

## CoPaw Project Digest — 2026-05-04

### 1. Today’s Overview
The project is in a **high-activity period** with significant community engagement and a strong maintenance response. In the last 24 hours, there were **33 updated issues** (23 open/active) and **16 updated PRs** (4 open), indicating a healthy balance of incoming reports and ongoing fixes. Notably, the “oldest” merges this week came from **futuremeng**, a core contributor who closed a large batch of mature PRs (e.g., #1977, #1480, #2520) covering runtime hardening, MCP diagnostics, and streaming sanitization. No new releases were cut today, but the volume of merged PRs (12) suggests a release candidate may be nearing stabilization. Community sentiment leans **positive** regarding feature direction, though several critical bugs around memory and latency are causing noticeable friction for power users.

### 2. Releases
**None.** No new versions were published on 2026-05-04. The latest available version remains **v1.1.5** (and v1.5.1, per issue references, likely a patch variant).

### 3. Project Progress
The following **12 PRs were merged/closed** in the last 24 hours. Key improvements include:
- **Runtime Resiliency**: Merged PR [#1977](https://github.com/agentscope-ai/CoPaw/pull/1977) hardens MCP teardown and cron/channel exception handling.
- **Ollama Connectivity**: PR [#1480](https://github.com/agentscope-ai/CoPaw/pull/1480) fixes the default host for Ollama and surfaces raw connection errors (critical for ARM users with IPv6 issues).
- **Context Overflow Safety**: PRs [#2783](https://github.com/agentscope-ai/CoPaw/pull/2783) and [#2240](https://github.com/agentscope-ai/CoPaw/pull/2240) add automatic compaction retry when the LLM runs out of context, preventing silent drops.
- **MCP Usability**: PR [#1978](https://github.com/agentscope-ai/CoPaw/pull/1978) adds import validation/preview and runtime diagnostics. PR [#1848](https://github.com/agentscope-ai/CoPaw/pull/1848) introduces click-to-fill MCP templates and preserves description metadata.
- **Streaming UX**: PR [#2784](https://github.com/agentscope-ai/CoPaw/pull/2784) sanitizes leaked “Thinking”/”Reasoning” prefixes in visible text.
- **Desktop Stability**: PR [#1479](https://github.com/agentscope-ai/CoPaw/pull/1479) cleans up stale orphaned backend processes on desktop app startup (prevents port conflicts).
- **Chat Reconnection**: PR [#2374](https://github.com/agentscope-ai/CoPaw/pull/2374) fixes stream reconnection after route changes and preserves proper history order.
- **Agents Square**: PR [#1883](https://github.com/agentscope-ai/CoPaw/pull/1883) adds source browsing and an import flow for the Agents Square marketplace.

### 4. Community Hot Topics
The following issues/PRs attracted the most conversation or signifiers of community interest:

- **Agent Isolation (Workspace Sandboxing)** — Issue [#3936](https://github.com/agentscope-ai/CoPaw/issues/3936) (8 comments, closed). A user asks whether agents can be fully isolated from each other’s workspaces. The context highlights a current pain: file protection is global-only and supports blacklists, not per-agent whitelists. The user needs strict boundaries for multi-tenant or security-sensitive setups.
- **Audio in Telegram** — Issue [#1516](https://github.com/agentscope-ai/CoPaw/issues/1516) (5 comments, open). A long-standing bug request for proper `AudioContent` support in Telegram channels. It is the oldest open issue with significant comments, indicating high user desire for voice message processing.
- **Context Memory / `memory_search` Crashes** — Issue [#3977](https://github.com/agentscope-ai/CoPaw/issues/3977) (4 comments). A user reports `AttributeError: 'list' object has no attribute 'get'` when using `memory_search`. The system backs up un-rendered queries, suggesting a fragile error in data marshalling.
- **Hermes-Inspired Upgrade** — Issue [#4024](https://github.com/agentscope-ai/CoPaw/issues/4024) (3 comments, very recent). A user asks if there are plans to adopt Hermes-like mechanisms. This signals the community is heavily watching other agent frameworks and expects CoPaw to benchmark against them.
- **Idle Cleanup Killing Active Tasks** — Issue [#3976](https://github.com/agentscope-ai/CoPaw/issues/3976) (3 comments). A user reports the `UnifiedQueueManager` incorrectly cancels in-flight tasks after 10 minutes, causing total response loss. This is a severe stability concern affecting long-running workflows.

### 5. Bugs & Stability
Three significant bugs reported today, ranked by severity:

- **Critical — `loop_config.json` Corruption & FunctionCall Validation** — Issue [#3969](https://github.com/agentscope-ai/CoPaw/issues/3969): `call_id` is `None`, leading to a `ValidationError` and file corruption. No fix PR visible yet. **Severity: High**.
- **Critical — Session Idle Cleanup Kills Active Work** — Issue [#3976](https://github.com/agentscope-ai/CoPaw/issues/3976): `UnifiedQueueManager` marks active sessions as idle and cancels them after 600 seconds. **Severity: High** — users lose responses.
- **High — `max_input_length` static; no auto-derive from model context** — Issue [#4004](https://github.com/agentscope-ai/CoPaw/issues/4004): Static default (128k) mismatches with smaller local models (e.g., 32k), causing early truncation or overshoot. No PR today, but the idea (auto-derive) is strategically important.
- **Medium — `FunctionCallOutput` validation errors** — Issue [#3969](https://github.com/agentscope-ai/CoPaw/issues/3969) also includes a `TypeError` on `call_id`, requiring a Pydantic model fix.
- **Medium — `Running Config` UI returns 404** — Issue [#3980](https://github.com/agentscope-ai/CoPaw/issues/3980): Backend endpoint missing or broken for workspace settings. Already closed (likely patched).
- **Medium — Document Protection via `write_file`** — Issue [#4020](https://github.com/agentscope-ai/CoPaw/issues/4020): The `Agent` ignores the `only edit_file, not write_file` rule and overwrites memory/personality files. A tool-layer fix (forcemode) is proposed. This is a correctness/behavior question—should tools be enforced by the platform or left to prompt discipline?
- **Medium — DB migration breaks after `qwenpaw update`** — Issue [#4018](https://github.com/agentscope-ai/CoPaw/issues/4018): `embedding_model_config` resets to empty on update, breaking vector search. **Workaround: Reconfigure after upgrade.**

### 6. Feature Requests & Roadmap Signals
The community is clearly signaling demand for these features, listed by likely priority:

- **Artifact-Style Code/Preview Dual View** — Issue [#3983](https://github.com/agentscope-ai/CoPaw/issues/3983). Users want a Claude/GitHub-like preview panel inside the chat to toggle between code and rendered output (e.g., Mermaid). This aligns with the trend toward richer, interactive outputs and may land in the next minor release.
- **Per-Agent Workspace Isolation** — Issue [#3936](https://github.com/agentscope-ai/CoPaw/issues/3936). Multi-agent environments and security-conscious users need strict workspace boundaries. This is a platform-level feature request (no current per-agent config).
- **Guided / Mid-Interaction Steering** — Issue [#4019](https://github.com/agentscope-ai/CoPaw/issues/4019). A user contributed an early demo of “Guide Mode” (codex-generated), allowing the user to issue a second instruction during an active task to steer direction. This could be a differentiator for complex workflows.
- **Ollama Support & ARM64 Build Fixes** — Issue [#4003](https://github.com/agentscope-ai/CoPaw/issues/4003). The bundled Python on Apple M5 runs subprocesses under Rosetta (i386), breaking local Ollama. Combined with Issue [#4025](https://github.com/agentscope-ai/CoPaw/issues/4025) (GLIBC on ARM), Silicon users are blocked. A fix is likely high priority.
- **Memory Lifecycle Management** — Issue [#3995](https://github.com/agentscope-ai/CoPaw/issues/3995). Auto-archiving old daily notes, deduplication, and conflict detection for memory files are requested to keep the knowledge base lean.

### 7. User Feedback Summary
- **Satisfaction Indicators**: Users praise the “true agent” capabilities and memory system. The Agents Square import flow (PR [#1883](https://github.com/agentscope-ai/CoPaw/pull/1883)) shows strong demand for reusable skills and plugins.
- **Pain Points**:
  - **Session Memory Loss**: Several users report that Ollama channels drop conversational context after a few rounds (e.g., Issue [#3991](https://github.com/agentscope-ai/CoPaw/issues/3991)).
  - **Input Lag**: Issue [#4023](https://github.com/agentscope-ai/CoPaw/issues/4023) reports severe UI stutter in the input field, likely due to large context or rendered Mermaid blocks.
  - **Desktop Exit Behavior**: Users (Issues [#2430](https://github.com/agentscope-ai/CoPaw/issues/2430) and [#3979](https://github.com/agentscope-ai/CoPaw/issues/3979)) ask for a tray icon with “minimize to tray” behavior instead of full shutdown.
  - **Memory File Overwrite**: Several bug reports mention that agents ignore `AGENTS.md` and `MEMORY.md` rules that forbid `write_file`, causing personality creep or data loss.
  - **Cron & Heartbeat Misbehavior**: Issues [#3986](https://github.com/agentscope-ai/CoPaw/issues/3986) and [#3944](https://github.com/agentscope-ai/CoPaw/issues/3944) show cron tasks never run, and heartbeat messages pollute the Auto-Memory.

### 8. Backlog Watch
The following issues and PRs have remained **open for over 30 days without a resolution** and require maintainer attention:

- **Issue [#1516](https://github.com/agentscope-ai/CoPaw/issues/1516) — AudioContent not supported in Telegram** (opened 2026-03-15, ~50 days). This is a *right-field* feature but is the oldest open issue with high visibility.
- **Issue [#2430](https://github.com/agentscope-ai/CoPaw/issues/2430) — System tray icon and minimize to tray** (opened 2026-03-27, ~37 days). No assignment yet. A strong candidate for a first-time contributor.
- **PR [#3928](https://github.com/agentscope-ai/CoPaw/pull/3928) — Safe default timeout for `delegate_external_agent`** (opened 2026-04-28, ~6 days but under review). The `max_runtime` defaulting to `None` is a **known infinite wait bug**. This PR has been flagged for review but not yet merged. It is a low-risk, high-impact fix.
- **Issue [#3019](https://github.com/agentscope-ai/CoPaw/issues/3019) — Skill uninstall corrupts `skill.json` encoding** (opened 2026-04-07, ~27 days). The corruption (UTF-8 garbage) prevents the default agent from starting. The community provided a manual workaround but an automated fix is missing.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the project digest for ZeptoClaw (github.com/qhkm/zeptoclaw) on **2026-05-04**.

---

# ZeptoClaw Project Digest — 2026-05-04

## 1. Today's Overview
ZeptoClaw saw a focused, high-signal burst of development today driven entirely by the maintainer. Activity was centered on two themes: a systematic adoption of Hermes Agent's self-improving loop pattern (spanning skill creation, telemetry, and tool descriptions) and a cleanup of the project's public positioning. There are **4 open issues** and **3 open PRs**, all created or updated within the last 24 hours, with **2 PRs merged**. No new releases were cut. The project appears healthy and actively steered, though all conversation today is single-author—no external community engagement is visible.

## 2. Releases
No new releases were published today. The latest available release remains the previous version (not provided in data).

## 3. Project Progress
Two PRs were merged/closed today, representing significant architectural groundwork:

- **PR #564 (Merged/Closed): Middleware Framework (Phase 1 of #399)**  
  [PR #564](https://github.com/qhkm/zeptoclaw/pull/564)  
  This adds the middleware framework plus 11 middleware implementations under `src/agent/middleware/`. The change is additive-only and not yet wired into the agent loop. It was a cherry-picked, rebased subset of the earlier PR #404 (also closed today).
  
- **PR #404 (Closed): Middleware Pipeline Scaffolding (#399)**  
  [PR #404](https://github.com/qhkm/zeptoclaw/pull/404)  
  Landed the foundational types: `Middleware` trait, `ToolMiddleware` trait, `PipelineContext`, `Subsystems`, `OutputMode`, and the pipeline execution engine (`Pipeline`, `PipelineBuilder`, continuation types). This provides the structural spine for all future middleware work.

These represent a substantial internal refactor that will enable modular agent behavior without touching the core loop.

## 4. Community Hot Topics
There is **no visible community discussion** today. No issues or PRs have comments or reactions. The dialog is entirely maintainer-to-code. This suggests the project is in a closed, planning-intensive phase or lacks a broad external contributor base.

Analysis: The content of the issues (Hermes pattern adoption, telemetry, documentation alignment) signals internal maintainer priorities rather than user-driven demand. The lack of external activity may indicate that ZeptoClaw is still in early adoption or that the maintainer is working from a private roadmap.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. All four open issues and three open PRs relate to feature work or documentation alignment, not defects. Stability metrics are neutral—no new risks, but also no fresh validation beyond the merged middleware scaffolding.

## 6. Feature Requests & Roadmap Signals
No user-submitted feature requests are present. However, the maintainer has opened three clearly scoped features that mark the explicit adoption of **Hermes Agent's self-improving loop**. These are likely to land in the next release:

- **#567 — `skill_manage` tool (CRUD on user skills)**  
  Phase 1: lets the agent create/edit/delete its own skills during conversation.  
  [Issue #567](https://github.com/qhkm/zeptoclaw/issues/567) | [PR #571](https://github.com/qhkm/zeptoclaw/pull/571) (open, implements trigger-phrase nudges for longterm_memory, which supports this)

- **#568 — Usage telemetry sidecar (`.usage.json`)**  
  Phase 2: tracks per-skill usage to feed stale/hot/never-used signals.  
  [Issue #568](https://github.com/qhkm/zeptoclaw/issues/568)

- **#569 — Trigger-phrase nudges in longterm_memory tool description**  
  Phase 1.5: rewrites the tool description to include explicit "Use when"/"Do NOT use when" triggers.  
  [Issue #569](https://github.com/qhkm/zeptoclaw/issues/569) | [PR #571](https://github.com/qhkm/zeptoclaw/pull/571)

These three items form a coherent batch—skill management, telemetry, and prompting guidance—indicating that the next minor release may focus on self-improvement capabilities.

## 7. User Feedback Summary
**No direct user feedback (comments, reactions, or contributions) is present in today's data.** There is no signal of pain points, use cases, or satisfaction/dissatisfaction from external users. The documentation alignment issue (#565, see PR #570) suggests the maintainer is self-correcting positioning claims relative to sibling projects (Aisar, ZeptoStack, NemoClaw), but this is author-driven, not user-driven.

## 8. Backlog Watch
There are **no long-unanswered issues or PRs** requiring maintainer attention. All tracked items are active (created or updated within the last 24 hours). The oldest open PR (#404) was closed today. The oldest open issue is from 2026-05-03. The backlog is essentially empty, which means the maintainer is either addressing everything promptly or the project does not yet have a significant community backlog to manage.

---

**Project Health Summary:**  
ZeptoClaw is in a deliberate, maintainer-driven architectural upgrade phase. The middleware refactor is solid and landed cleanly. The Hermes-inspired self-improvement features are next. The main risk is zero visible community engagement—while this is not a crisis, it means all roadmapping is single-contributor and there is no feedback loop from real users. The project is stable, actively coded, and internally coherent.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-04

## Today's Overview

ZeroClaw remains in a period of intense development activity, with 50 issues and 50 PRs updated in the last 24 hours—marking one of the busiest days tracked recently. Of the updated issues, 44 remain open and 6 were closed, while 20 of the updated PRs were merged or closed. No new releases were published today, but the project continues to advance toward v0.7.5, with the release tracking issue (#5878) still active. The volume of high-severity open bugs (multiple P1/P2 items) and large feature PRs (voice, config schema migration) indicates a project under heavy development pressure, with contributor attention split between stabilization and new capability delivery.

## Releases

No new releases were published today. The most recent release remains the untagged milestone tracking for v0.7.5 (#5878). Users and contributors are reminded that the project is currently between stable releases, with breaking changes accumulating on the `integration/v0.8.0` branch.

## Project Progress

Today saw 20 PRs merged or closed, including several notable completions:

- **Skills consolidation** — [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) (merged): First-party skills were moved from the separate `zeroclaw-labs/zeroclaw-skills` repository into a top-level `skills/` directory in the main repo, defaulting to compact mode. This eliminates the need for a separate registry repo and simplifies skill discovery.

- **Bug fixes closed**: 
  - [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) — `config.toml` examples for YOLO/local testing now match current config keys (closed after fix).
  - [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) — Shell policy blocking `git -C <path>` by lowercasing args has been fixed.
  - [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) — `install.sh` now correctly extracts the web dashboard from release tarballs.

- **CI improvements** — [#6265](https://github.com/zeroclaw-labs/zeroclaw/pull/6265) (updated today) removes a broken `CHANGELOG-next.md` cleanup step from the release workflow that was attempting to push directly to `master`.

- **CI release tracking** — [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) continues to track the v0.7.5 milestone, though with no new blocker items resolved today.

## Community Hot Topics

**Most active issues by comment count:**

| Issue | Comments | Topic |
|-------|----------|-------|
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | 8 | `chat_messages_to_native()` drops `reasoning_content` for plain-text assistant messages — a regression affecting DeepSeek V4 multi-turn conversations |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | 4 | v0.7.5 release milestone tracking |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | 4 | ACP-protocol session cancellation support (blocked) |
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | 4 | Config examples mismatch (now closed) |
| [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) | 3 | Empty `tool_calls` array sent to provider API causing 400 errors |

**Analysis of underlying needs:**

The high comment activity on bugs #6233 and #6298 reflects users' operational pain with DeepSeek V4 and strict-validation providers. Both issues are regressions or incompatibilities introduced by recent PRs (#6107 and the native tools feature). The community is signaling that provider compatibility—especially with widely-used models like DeepSeek—is a critical quality requirement that is not being caught by existing test coverage.

## Bugs & Stability

### High-Risk Bugs (P1)

| Issue | Description | Impact | Fix PR? |
|-------|-------------|--------|---------|
| [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) | Empty `tool_calls` array sent to provider API → 400 on DeepSeek, NVIDIA NIM | Workflow blocked for strict validators | None yet |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Web dashboard WebSocket path bypasses ApprovalManager — supervised tool approvals never surface | Workflow blocked for web UI users | None yet |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | `model_switch` tool does not persist across turns; gateway ignores it entirely | Degraded behavior | None yet |
| [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) | WebSocket `/ws/chat` does not process `[IMAGE:]` multimodal markers | Degraded behavior | None yet |
| [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) | WASM plugins `zc_env_read` allowlist missing — plugins can read any env var | Security risk | None yet |
| [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) | WASM plugins `zc_http_request` has no SSRF protection — can reach internal networks | Security risk | None yet |

### Medium-Risk Bugs (P2)

| Issue | Description | Impact |
|-------|-------------|--------|
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | `reasoning_content` dropped for plain-text assistant messages | Degraded for DeepSeek multi-turn |
| [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347) | Telegram channel tests fail under default features | CI/test reliability |

### New Bugs Reported Today (2026-05-03/04)

- [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) — WhatsApp Web self-chat-mode fires on all `fromMe` messages, causing agent to reply to operator's own contacts (S2 severity)
- [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp Web `allowed-numbers` filter bypassed for LID-based contacts, causing silent message drops (S2 severity)
- [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) — Desktop menu-bar chat surfaces every `tool_call` inline as a chat bubble (parity issue with #6348)
- [#6348](https://github.com/zeroclaw-labs/zeroclaw/issues/6348) — Dashboard Agent chat surfaces every `tool_call` inline, including errors

## Feature Requests & Roadmap Signals

### High-Impact Features in Progress

- **Full-duplex voice with barge-in** (#5896) — Three large PRs ([#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974), [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976), [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978)) are making progress on WebSocket binary audio frames, energy-based VAD, and speech capture buffering. This is one of the largest feature efforts in flight.

- **Config schema v3 migration** ([#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)) — A breaking-change PR targeting `integration/v0.8.0` that introduces channel aliasing, model-provider aliasing, and profile lifting.

- **Multi-machine node health** ([#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346)) — A follow-up to #2991 adding a `zeroclaw node doctor` command and per-node health dashboard.

### New Feature Requests Today

- [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) — Node CLI + dashboard health and management
- [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) — Per-channel reply-min-interval-secs throttling (for paired-identity channels like WhatsApp/WeChat)
- [#6344](https://github.com/zeroclaw-labs/zeroclaw/issues/6344) — Dashboard editor for workspace persona files (SOUL/IDENTITY/USER/etc.)
- [#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) — v0.7.7 Desktop app (Tauri) parity tracker
- [#6342](https://github.com/zeroclaw-labs/zeroclaw/issues/6342) — `install.sh --desktop` flag for menu-bar only install
- [#6341](https://github.com/zeroclaw-labs/zeroclaw/issues/6341) — Signed + notarized macOS .dmg in GitHub releases
- [#6340](https://github.com/zeroclaw-labs/zeroclaw/issues/6340) — Crash reporting / panic capture for desktop app
- [#6292](https://github.com/zeroclaw-labs/zeroclaw/issues/6292) — Installer.sh overhaul with feature selection and post-install onboarding prompt

### Roadmap Predictions

The cluster of desktop-focused feature requests from a single author (`theonlyhennygod`) suggests that **v0.7.7 will be a desktop/Tauri-focused release**, with macOS menu-bar app parity, signed release assets, and crash reporting. The installer overhaul (#6292) and config schema v3 (#6266) are likely candidates for v0.7.5 or v0.7.6. Voice features (#5896) appear destined for a later milestone given the complexity of the three pending PRs.

## User Feedback Summary

**Pain points expressed:**

1. **Provider compatibility regressions** — Users report that recent PR merges (especially #6107) have broken DeepSeek V4 multi-turn conversations (#6233) and caused 400 errors with strict-validator providers (#6298). The pain is acute because these are popular, production-used models.

2. **Web dashboard missing fundamental UI capabilities** — The WebSocket path bypassing supervised tool approvals (#6207) and not processing image markers (#5453) means the web UI provides a degraded experience compared to CLI or Telegram channels. Users want clipboard image paste and drag-drop (#5649).

3. **WhatsApp integration quality issues** — Two bugs reported today (#6351, #6350) reveal that ZeroClaw's WhatsApp Web integration has serious issues with message filtering and self-chat detection, which could cause agents to send unwanted replies to the operator's own contacts.

4. **Installation friction** — Despite the fix for #6096 (web dashboard extraction), the installer experience remains a pain point, evidenced by the comprehensive installer overhaul request (#6292).

**Positive signals:**
- Multiple good-first-issue bugs were closed (#6149, #5809, #6096), indicating healthy contributor onboarding.
- The skills consolidation PR (#6274) was merged, which should simplify skill management for users.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Days Open | Last Updated | Reason for Concern |
|-------|-----------|--------------|-------------------|
| [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) — WebSocket IMAGE markers not processed | 27 days | 2026-05-04 | P1 bug, no maintainer response, has "desktop" label |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) — ACP cancellation support | 17 days | 2026-05-04 | Blocked status, no PR linked |
| [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) — Env read allowlist for plugins | 15 days | 2026-05-04 | P1 security, "in-progress" but no PR |
| [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) — SSRF protection for plugins | 15 days | 2026-05-04 | P1 security, "in-progress" but no PR |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) — Image paste/drag-drop in WebUI | 23 days | 2026-05-03 | High-value UX improvement, no assignment |

### PRs Needing Author Action (Stale)

Five PRs carry the `needs-author-action` label and have not seen commits in 6–14 days:

| PR | Days Since Request | Topic |
|----|-------------------|-------|
| [#5161](https://github.com/zeroclaw-labs/zeroclaw/pull/5161) | 33 | WebSocket steering fix (XL size) |
| [#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372) | 28 | Memory API payload truncation |
| [#5770](https://github.com/zeroclaw-labs/zeroclaw/pull/5770) | 19 | Session tool backend mismatch |
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | 6 | Multimodal image marker normalization |
| [#6192](https://github.com/zeroclaw-labs/zeroclaw/pull/6192) | 6 | Paircode retrieval targeting |

These PRs represent a growing queue of unmerged work that, if abandoned, would represent significant sunk effort and leave key bugs unfixed. Maintainers may need to follow up or reassign.

---

**Project Health Assessment:** The project is in an active, productive phase with strong contributor engagement, but the accumulation of high-severity open bugs (especially P1 security and gateway/WebUI issues) and stale PRs is a concern. The voice feature development and config schema migration suggest ambitious long-term goals, but the near-term stability and web dashboard quality need attention to maintain user trust.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*