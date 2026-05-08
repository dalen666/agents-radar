# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-08 04:19 UTC

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

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 OpenClaw 项目数据，生成了截至 2026-05-08 的项目动态日报。

---

## OpenClaw 项目动态日报 | 2026-05-08

### 1. 今日速览

项目活跃度极高，在过去 24 小时内，Issue 与 PR 的更新总量均达到 500 条，反映出社区参与度与项目维护力度均处于空前水平。然而，高活跃度背后也隐藏着严峻的挑战：大量 Bug 报告（尤其是 v2026.5.4 升级后的回归问题）与完善的功能需求并存。今日发布了一个补丁版本 v2026.5.7，旨在修复插件发布管线的韧性。项目团队正在快速响应，但稳定性和兼容性问题仍是当前需要重点关注的领域。

### 2. 版本发布

- **发布版本**: `v2026.5.7 (openclaw 2026.5.7)`
- **发布说明**: 
    ```markdown
    ### Fixes
    - Release/plugin publishing: retry transient ClawHub CLI dependency install failures, keep preview-passing plugins publishable when one preview cell flakes, and verify every expected ClawHub package version after publish so maintenance releases are faster to recover and less likely to hit silent partial-publish states.
    ```
- **分析**:
    - 此版本专注于增强插件发布管线的健壮性，主要修复了以下三个问题：
        1.  **ClawHub CLI 依赖安装失败重试**：解决了网络抖动或临时的依赖解析失败导致发布中断的问题。
        2.  **预览单元不稳定容忍**：允许在部分预览单元失败的情况下，仍能发布其他通过测试的插件，避免了单个不稳定测试阻塞整个发布流程。
        3.  **发布后包版本校验**：在发布后强制校验每个 ClawHub 包版本，确保发布成功且完整，防止出现“静默部分发布”的状态，从而加快维护版本的发布速度并降低故障恢复难度。
- **破坏性变更与迁移**: 未提及破坏性变更，属于常规补丁修复，可平滑更新。

### 3. 项目进展

在过去 24 小时内，共有 **154 个 PR 被合并或关闭**，项目整体向前稳步推进。以下为今日合并/关闭的重要 PR 及其背后的信号：

- **基础设施与构建**: `#78823 [fix(build): add stale tool runtime chunk aliases]` 解决了包交换后，正在运行的网关解析到旧的哈希工具/运行时块文件的问题。这表明项目在持续优化热更新和零停机部署体验。
- **核心修复**:
    - `#79151 [fix: respect Codex requirements for app-server defaults]` 确保本地 Codex 应用服务器默认使用更安全的 `guardian` 权限模式，体现了对安全性的重视。
    - `#79029 [fix: clear stale lastGood OAuth profile]` 修复了 OAuth token 刷新失败后，网关仍会使用已失效的 profile 进行重试的死循环问题。
    - `#79057 [fix(whatsapp): ignore outbound echoes]` 修复了 WhatsApp Web 频道中，自己发送的消息被错误统计为“入站活动”的问题，提升了频道状态报告的准确性。
- **管理工具**:
    - `#67509 [fix: add root guard to prevent CLI execution as root]` 增加了根用户执行保护，防止因误操作导致文件权限混乱或与系统服务冲突，提高了系统安全性。

### 4. 社区热点

以下 Issue 和 PR 在今日引发了最广泛的讨论，反映了社区的核心关注点和痛点：

1.  **[Bug] openclaw doctor --fix rewrites openai-codex/* model refs** (`#78407`, 16 评论, 👍3)
    - **链接**: `openclaw/openclaw Issue #78407`
    - **分析**: **这是今日最严重的回归问题。** `openclaw doctor --fix` 在用户不知情的情况下将 `openai-codex/*` 模型引用重写为 `openai/*`，导致依赖 ChatGPT OAuth 认证的用户被锁定。此 Issue 表明自动化迁移工具的副作用正在对用户造成直接伤害，引发大量讨论。
2.  **[Meta] Feature request bundle: 11 platform gaps from intensive daily use** (`#65824`, 15 评论, 👍1)
    - **链接**: `openclaw/openclaw Issue #65824`
    - **分析**: 一位深度用户提交了一份包含 **11 个功能点**的综合需求包。这展示了高级用户对项目的深刻理解和对平台能力上限的追求。此类 Issue 是项目路线图规划的宝贵输入。
3.  **[Bug]: Gateway repeatedly closes connections (1000/1005/1006)** (`#78402`, 11 评论, 👍2)
    - **链接**: `openclaw/openclaw Issue #78402`
    - **分析**: 升级到 v2026.5.5 后，网关因事件循环饥饿导致 WebSocket 连接反复断开，严重影响用户体验。此 Bug 直接关联到 `#76562` 报告的 CPU 飙升问题，表明近期的某些改动对核心稳定性造成了负面影响。
4.  **[Feature]: Channel-mediated approval for MCP tool calls** (`#78308`, 10 评论, 👍1)
    - **链接**: `openclaw/openclaw Issue #78308`
    - **分析**: 该功能请求建议为 MCP 工具调用引入审批流程，让用户可以像审批 `shell-exec` 一样审批 MCP 工具的写操作。这反映了用户对 **MCP 生态下访问控制和安全治理**的迫切需求。

### 5. Bug 与稳定性

今日 Bug 报告数量众多，稳定性问题尤为突出。以下按严重程度排列：

- **严重 (Critical)**:
    - **`openclaw doctor --fix` 破坏模型引用配置** (`#78407`, 已关闭): 导致认证失效，影响面最广。
    - **网关 WebSocket 连接反复断开** (`#78402`, 已关闭): 严重影响服务可用性。
    - **Google Gemini 模型在主会话中挂起/超时** (`#78502`): 虽然子代理正常，但主会话功能瘫痪，严重影响使用。
    - **`[object Object]` 乱码出现在回复和记忆中** (`#78846`, 已关闭): 与 Mistral 模型相关，导致输出不可读。

- **重要 (High)**:
    - **微信插件与 v2026.5.4 不兼容** (`#78232`, 已关闭): 影响中国区用户。
    - **Discord `message` 工具发送失败** (`#78572`, 已关闭): 报错 “Unknown Channel”，影响 Discord 频道集成。
    - **非主代理的回复无法通过 Telegram/Discord 回传** (`#77908`, 已关闭): 导致消息只能看不能回复。
    - **Feishu 话题会话 key 不一致** (`#78262`, 已关闭): 导致同一话题下的消息被分到不同会话。

- **次要 (Minor)**:
    - **Bedrock `ExpiredTokenException` 在凭证刷新后未恢复** (`#77551`, 已关闭): 需要手动重启网关。
    - **`/status` 显示 xAI Grok 的上下文使用情况为 `?/1.0m`** (`#77525`, 已关闭): 显示问题，不影响功能。

**注意**: 以上多数已关闭的 Issue 可能已被项目团队快速响应和修复，但问题的密集出现表明目前版本的回归测试可能不够充分。

### 6. 功能请求与路线图信号

今日涌现了大量高质量的功能请求，以下需求最有可能被下一版本采纳：

- **安全与权限增强 (强信号)**:
    - **Masked Secrets (API Keys 保护)** (`#10659`): 防止 Agent 泄露密钥。
    - **Channel-mediated approval for MCP tool calls** (`#78308`): 将审批机制扩展到 MCP 生态。
    - **Pre-response enforcement hooks (硬性门禁)** (`#13583`): 在关键工作流中强制执行规则。

- **平台能力与集成 (中等信号)**:
    - **Prebuilt Android APK releases** (`#9443`): 降低 Android 用户的使用门槛。
    - **Slack Block Kit support** (`#12602`): 提升 Slack 等办公场景下的交互丰富度。
    - **多会话架构 (Shared LLM + Isolated Sessions)** (`#48874`, RFC): 一个可能对资源管理和任务隔离产生深远影响的架构提议。

- **可靠性与可维护性 (中等信号)**:
    - **预响应强制钩子** (`#13583`) 和 **会话快照 (`/session save|load`)** (`#13700`) 都指向了提高 Agent 行为的可靠性和可回滚性。
    - **备份/恢复工具** (`#13616`) 和 **原生密钥管理集成** (`#13610`) 表明社区对运维和合规成本的关注。

### 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中，可以总结出以下核心用户反馈：

- **痛点**:
    - **破坏性迁移**: `openclaw doctor --fix` 导致的配置损坏引发了用户的强烈不满，这暴露了自动化工具在变更前缺乏充分沟通和预防机制的问题。
    - **升级风险高**: 许多用户反馈“升级前正常，升级后出现问题”（Regression）。从 v2026.5.3 到 v2026.5.5，几乎每次小版本升级都伴随着回归 Bug，使得用户对升级感到不安。
    - **配置和工具易用性**: 对于 WeChat、Feishu 等非主流平台的集成，配置繁琐且易出错，升级后常出现兼容性问题。
- **满意度高方面**:
    - 社区对项目维护的**响应速度**是满意的。大量重要的 Bug (`#78407`， `#78402`等) 在不到一天的时间内被响应和处理，部分已被标记为“已关闭”。
    - 用户的**功能提案**能够获得维护者和社区成员的积极讨论（如 `#78308`, `#48874`），表明项目保持开放和聆听的姿态。
- **需求**:
    - 用户普遍希望项目在 **质量和稳定性** 上投入更多，尤其是在发布周期中引入更严格的回归测试。
    - 对 **安全控制** 的需求非常强烈，要求 Agent 的行为可审计、可限制、可审批。

### 8. 待处理积压

以下是一些长期未得到解决或维护者关注度不足的 Issue，需提醒注意：

1.  **[Feature] Context/state lost after unexpected compaction or session reset** (`#2597`, 创建于 2026-01-27): 一个关于上下文丢失的持续性问题，虽然评论不多，但影响核心体验，建议评估是否与近期事件循环问题有关。
2.  **[Feature] Images from Discord stored as base64 in session transcripts** (`#1210`, 创建于 2026-01-19): 关于 Base64 图片导致上下文溢出的问题，这是一个长期存在的技术债，会随着 Agent 多模态能力的增强而愈发严重。
3.  **[Bug] Successful assistant replies can be missing from the active transcript** (`#76990`, 创建于 2026-05-03): 另一个上下文丢失的 Bug，可能导致 Agent “失忆”并重复回答。此问题尚无明确的 Fix PR，且与近期的事件循环饥饿 Bug (`#78402`) 有潜在关联，需要优先排查。

---

## 横向生态对比

好的，作为资深技术分析师，我已根据您提供的各项目日报，为您梳理并撰写了一份关于 AI 智能体与个人 AI 助手开源生态（截至 2026-05-08）的横向对比分析报告。

---

## 2026-05-08 开源 AI 智能体生态横向分析报告

### 1. 生态全景

当前，个人 AI 助手和自主智能体开源生态正处在 **“爆发式增长后的整合与深化期”**。各项目均展现出极高的社区活跃度与迭代速度，技术创新与 Bug 修复并行不悖。生态内呈现出 **“百花齐放”** 的局面，既有如 OpenClaw 这样的巨型综合平台，也有众多专注于特定架构（如 Reborn）、部署场景（如桌面端）或功能点（如去中心化身份）的细分项目。**核心竞争点已从单纯的“功能数量”转向“稳定性、安全性、多平台兼容性与架构优雅性”**，尤其是 Agent-to-Agent 通信、MCP 工具安全治理和长上下文记忆管理成为全行业共同攻关的难题。

### 2. 各项目活跃度对比

| 项目名称 | 近24h Issues | 近24h PRs | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (更新) | ~500 (更新) | `v2026.5.7` (补丁) | **极高活跃，存在稳定性风险**：社区体量最大，但大量回归 Bug 显示测试需加强。 |
| **NanoBot** | 9 | 22 | 无 | **健康**：Bug 修复与功能增强并进，社区响应迅速，整体稳健。 |
| **Hermes Agent** | 50 | 50 | `v0.13.0` (重大) | **极高活跃，密集迭代期**：新版本发布，P1/P2 Bug 修复迅速，社区贡献积极。 |
| **PicoClaw** | 35 | 48 | `nightly` | **健康**：维护节奏稳健，安全更新及时，社区贡献活跃。 |
| **NanoClaw** | 9 | 35 | 无 | **高强度开发**：核心 A2A 路由与安全修复是主旋律，项目快速趋于成熟。 |
| **NullClaw** | 5 | 9 | 无 | **健康**：活跃度中等，CI 优化与功能增强并行，生态健康。 |
| **IronClaw** | (日报未明确) | (日报未明确) | `v0.28.0` (重大) | **重构期**：专注于 Reborn 架构合入，Bug 修复及时，但架构变动带来潜在风险。 |
| **LobsterAI** | 50 | 31 | `2026.5.7` | **冲刺期**：为发布分支密集合并，UI/UX 和协作模块增强显著。 |
| **Moltis** | 14 (更新) | 14 (更新) | 2 个补丁 | **健康**：语音、身份、沙箱同步推进，Bug 修复快速，方向明确。 |
| **CoPaw** | 50 | 31 | 无 | **高活跃，痛点明确**：会话记忆、长上下文和渠道稳定性是社区主要关注点。 |
| **ZeroClaw** | (日内活跃) | (日内活跃) | 无 | **冲刺前活跃**：桌面端体验显著提升，架构重构提案引发讨论，为 v0.7.5 发布做准备。 |
| **TinyClaw** | 0 | 0 | 无 | **静默** |
| **ZeptoClaw** | 0 | 0 | 无 | **静默** |

### 3. OpenClaw 在生态中的定位

- **绝对领先的规模与社区**：OpenClaw 以每日近千的 Issue/PR 更新量，稳居生态核心。其社区规模、贡献者和功能广度是其他项目难以企及的。`v2026.5.7` 作为微补丁发布，依然修复了插件发布管线的关键韧性。
- **技术路线与优势**：**“全功能、高集成”**。OpenClaw 汇聚了几乎所有主流渠道（微信、Feishu、Discord、Telegram）、LLM 提供商和工具集成，是“个人 AI 助手”领域的集大成者。优势在于开箱即用的强大功能。
- **差异化与挑战**：与 NanoBot、Hermes 等更专注于特定架构或极简体验的项目相比，OpenClaw 的复杂性也带来了挑战。其面临的最大问题是 **“规模带来的稳定性债务”**。频繁的回归 Bug 表明其庞大的代码库和模块间的交互需要更完善的回归测试机制。相比之下，NanoClaw 和 IronClaw 在半年度报告中进行的架构级重构（如 A2A、Reborn）更具前瞻性和系统性。

### 4. 共同关注的技术方向

以下是生态内多个项目不约而同重点攻克的方向：

1.  **Agent-to-Agent (A2A) 与节点通信**：
    - 涉及项目：**OpenClaw, NanoClaw, IronClaw, Moltis**。
    - 具体诉求：**确保多代理、多会话、多通道环境下消息路由的精确性和一致性**，并建立去中心化的节点间信任与身份协议（如 Moltis 的 Ed25519 挑战-响应、TOFU 模型）。

2.  **会话记忆与上下文管理**：
    - 涉及项目：**OpenClaw, NanoBot, CoPaw, Hermes Agent**。
    - 具体诉求：**解决上下文丢失、切换 Agent 后会话丢失、长上下文导致卡顿或截断**等问题。这是提升 Agent 交互连贯性的核心挑战。

3.  **安全、权限与工具治理**：
    - 涉及项目：**OpenClaw, ZeroClaw, PicoClaw, NanoClaw**。
    - 具体诉求：**MCP 工具调用的审批流程、API 密钥保护（密封）、高危命令的权限控制、自动化工具的安全副作用管理**。安全已成为 Agent 走向生产环境的必选项。

4.  **LLM 提供商兼容性**：
    - 涉及项目：**Hermes Agent, CoPaw, NullClaw, IronClaw**。
    - 具体诉求：**解决特定模型（如 DeepSeek、Gemini）的参数、推理模式兼容性问题**，并支持更广泛的 API 提供商（如火山引擎、Kimi、Vertex AI）。

5.  **多平台/渠道集成稳定性**：
    - 涉及项目：**OpenClaw, CoPaw, ZeroClaw, LobsterAI**。
    - 具体诉求：**修复微信、飞书、Discord、Telegram 等渠道的连接断开、消息丢失、配置繁琐、功能不兼容**等问题。稳定的渠道是 Agent 的“手脚”，是一切能力的基础。

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型个人 AI 助手 | 广泛，从爱好者到重度用户 | 插件体系 (ClawHub)，高度集成，功能全面但复杂度高。 |
| **NanoBot** | 轻量、可定制的聊天机器人 | 开发者、追求简洁的用户 | 强调模块化，核心稳定，通过技能（Skill）系统扩展。 |
| **Hermes Agent** | 自主任务、深度 Agent | 高级用户、开发社区 | 重视“韧性”（Tenacity），强调 Agent 在复杂故障环境下的任务完成能力。 |
| **NanoClaw** | 深度 Agent 网络与协作 | 组织级用户、多 Agent 运维场景 | 深度聚焦 Agent-to-Agent 路由和会话管理，技术栈深入。 |
| **IronClaw** | 下一代 Agent 架构 (Reborn) | 架构创新者、平台开发者 | 基于 WASM 的 Reborn 架构，模块化、可插拔，面向未来。 |
| **Moltis** | 本地优先、去中心化代理 | 隐私敏感用户、个人云用户 | 强调 LOCAL-FIRST，使用 Ed25519 建立去中心化节点信任体系。 |
| **LobsterAI** | 中国本地化集成、协作 | 中国用户、网易生态用户 | Deep 集成网易/有道生态，并注重协作（Cowork）和 UI 体验。 |
| **ZeroClaw** | 桌面端优先的 Agent | Mac 用户、桌面重度用户 | 深度利用 Tauri 构建桌面原生体验，强化本地文件和应用控制能力。 |

### 6. 社区热度与成熟度

- **快速迭代期 (高热度，功能密集上线)**：
    - **OpenClaw, Hermes Agent, NanoClaw, IronClaw, LobsterAI**。这些项目日活极高，每天都有大量功能 PR 被合并，路线图清晰，社区反馈活跃。但同时也伴随较高的不稳定风险和回归 Bug。

- **质量巩固期 (稳定性优先，精细打磨)**：
    - **NanoBot, PicoClaw, NullClaw, Moltis, CoPaw**。这些项目在积极开发新功能的同时，将 Bug 修复、安全加固、文档完善和跨平台兼容性放在更重要的位置，追求更稳健的版本。

- **静默期或启动期**：
    - **TinyClaw, ZeptoClaw**。处于非活跃状态。

### 7. 值得关注的趋势信号

1.  **“治理”与“信任”成为 Agent 化的第二层引擎**：社区对 Agent 行为的可观察性、可控制性和可审计性需求超越了功能性。**MCP 工具审批、节点身份认证、API 密钥安全存储** 等功能的密集出现，预示着 Agent 系统正从“能做什么”向“如何安全可靠地做”演进。这对企业级应用的采用至关重要。

2.  **本地优先 (Local-first) 与去中心化 (Decentralized) 的崛起**：Moltis 的去中心化身份协议和 ZeroClaw 的桌面原生能力，反映了用户对**数据主权、隐私和减少云依赖**的强烈渴望。这不仅是技术路线的探索，更是在 AI 监管趋严背景下的一种战略前瞻。

3.  **Agent 协作模型从“链式”走向“网状”**：NanoClaw 对 A2A 路由的深度修复和 IronClaw 的 Reborn 架构，都指向了未来 Agent 将从单一流水线模型，向一个能自我发现、动态路由、并行协作的**多智能体网络 (Multi-Agent Network)** 进化。这是从“工具”到“组织”的转变。

4.  **对开发者生态的重视**：无论是 OpenClaw 的 ClawHub，还是 Hermes Agent 的技能日志，亦或是 LobsterAI 的 AI 辅助诊断，都显示出项目方开始**构建围绕自身 Agent 平台的开发者与用户社区**。API 的清晰度、文档的质量、技能的易开发性，将决定这些项目能走多远。

**给 AI 智能体开发者的参考价值**：选择底层平台时，不仅要看功能列表，更要考察其**架构的扩展性（如 IronClaw 的 WASM 架构）、安全治理的成熟度（如 NanoClaw 的细粒度权限）和项目自身的“韧性”（如 Hermes Agent 的 Tenacity Release）**。未来的竞争，将是在保证稳固底座的前提下，构建可信、协作的 Agent 原生应用生态的能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我将根据您提供的 GitHub 数据，生成一份结构化的 NanoBot 项目动态日报。

---

# NanoBot 项目动态日报 | 2026-05-08

## 1. 今日速览

今日项目整体活跃度**高**。过去24小时内，社区贡献与维护活动频繁，共处理了9个 Issue 和 22个 PR。值得关注的是，**Bug 修复和稳定性改进成为今日主题**，尤其是针对 WebSocket 连接报错、DeepSeek 模型推理模式兼容性问题以及会话历史丢失等问题，社区已迅速响应并提交了修复 PR。同时，多项针对 Agent 机制、记忆系统和聊天通道（微信、WhatsApp）的增强功能和重构工作正在并发生，显示出项目正朝着更健壮、更可定制化的方向稳步迈进。

## 2. 版本发布

*   **无新版本发布。**
    *   今日无新 Release，多个重要修复和功能正在 PR 阶段，预计将集中在下一次版本迭代中发布。

## 3. 项目进展

今日合并/关闭了7个 PR，显著推进了项目的以下方面：

*   **核心功能修复与增强：**
    *   **Dream 会话恢复：** PR [#3660](https://github.com/HKUDS/nanobot/pull/3660) 被合并，修复了 Dream 在重启后无法正确恢复对话光标和记忆状态的问题，增强了 Agent 的持久化能力。
    *   **SSE 实时流式传输：** PR [#3677](https://github.com/HKUDS/nanobot/pull/3677) 被合并，移除了不必要的 HTTP 压缩，修复了服务器发送事件（SSE）流式输出被缓存导致延迟的问题，恢复了实时的流式响应体验。
    *   **CI/CD 代码质量：** PR [#3672](https://github.com/HKUDS/nanobot/pull/3672) 被合并，增强了 Ruff 代码检查规则，有助于在早期捕获更多潜在的代码问题，提升整体代码质量。

*   **辅助功能与文档：**
    *   **OAuth 认证命令：** PR [#3221](https://github.com/HKUDS/nanobot/pull/3221) 正式合并，引入了 `nanobot auth` 命令，支持 OAuth 设备流和密钥认证，简化了用户的登录与配置流程。
    *   **本地部署文档：** PR [#3608](https://github.com/HKUDS/nanobot/pull/3608) 被合并，为 Sen agent 提供了详尽的本地部署与设置文档，降低了特定 agent 的使用门槛。

*   **后端 LLM 兼容性：**
    *   PR [#1835](https://github.com/HKUDS/nanobot/pull/1835) 的合并，使后端 LLM 通信支持传递自定义参数（如 Ollama 的 `"stream": false`），为优化不同模型的行为提供了灵活性。

**项目整体进度：** 项目正处于一个**密集的 Bug 修复和功能打磨阶段**。Agent 的记忆与上下文管理、多通道稳定性以及用户体验细节是当前开发的重点。社区贡献者积极修复问题并提交新功能，显示了良好的社区健康度。

## 4. 社区热点

今日最受关注的议题是 **“如何配置和控制 Bot 的外观与行为”**。

*   **热点 Issue:**
    *   **[#3650] [OPEN] [enhancement] Configure bot name and icon**：[链接](https://github.com/HKUDS/nanobot/issues/3650)
        *   **诉求：** 用户希望能够自定义 Bot 在聊天界面中的**名字和图标**，而不是默认的 “nanobot” 和猫图标。
        *   **分析：** 该问题获得了 “good first issue” 标签，反映了用户对个人化、品牌化体验的普遍需求。这是一个用户界面可定制性的典型诉求，对于将 NanoBot 部署到特定场景（如公司内部、个人品牌）的用户至关重要。
    *   **[#3652] [OPEN] [enhancement] Can Dream be disabled?**：[链接](https://github.com/HKUDS/nanobot/issues/3652)
        *   **诉求：** 用户希望提供一个配置开关，能够**完全禁用 “Dream” 功能**。
        *   **分析：** 这表明部分用户更喜欢一个精简、更可预测的 AI 行为模式。Dream 功能（可能涉及主动推理或后台思考）在某些场景下可能显得多余或消耗资源，因此高级用户希望保留关闭它的权力。
*   **热点 PR:**
    *   **[#3690] [OPEN] fix(onboard): allow empty strings and falsy values in input fields**：[链接](https://github.com/HKUDS/nanobot/pull/3690)
        *   **诉求：** 修复了配置向导中无法清空或输入空字符串的问题，如 `api_key` 或 `api_base`。
        *   **分析：** 该 PR 看似是一个小 Bug 修复，但它直击了用户初始化配置时的核心体验。无法清空字段会阻塞配置流程，因此获得了快速响应，体现了社区对用户友好性的重视。

## 5. Bug 与稳定性

今日共报告了6个 Bug Issue，其中多数已被标记为“已关闭”（CLOSED），部分已有修复方案。

| 严重程度 | Issue | 描述 | 状态 & 修复 |
| :--- | :--- | :--- | :--- |
| **高** | [#3682](https://github.com/HKUDS/nanobot/issues/3682) | **WebSocket 连接握手失败**。用户在访问 Gateway 时遇到 `opening handshake failed` 错误，是核心通信层面的问题。 | **已关闭 (CLOSED)**。可能与配置环境有关。 |
| **高** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | **DeepSeek-v4-flash 模型“思维模式”错误**。在几次查询后，报错 `The reasoning_content in the thinking mode must be passed back to the API`。 | **已关闭 (CLOSED)**。表明问题已被识别并处理。 |
| **高** | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | **中断会话后丢失上一轮聊天记录**。用户在发送打断消息后，Bot 似乎忘记了之前的上下文。 | **新开 (OPEN)**。这是一个严重的用户体验问题，涉及 Agent 的核心记忆与上下文管理。 |
| **中** | [#3683](https://github.com/HKUDS/nanobot/issues/3683) | **WebSocket 跨浏览器/平台访问异常**。Linux 服务在 Windows/Mac 浏览器上访问8765端口失败，但手机端正常。 | **已关闭 (CLOSED)**。问题已定位。 |
| **中** | [#3681](https://github.com/HKUDS/nanobot/issues/3681) | **LLM 调用超时** (`timed out after 300s`)。用户频繁遇到请求超时。 | **已关闭 (CLOSED)**。可能为网络或 LLM 服务端问题。 |
| **低** | [#3604](https://github.com/HKUDS/nanobot/issues/3604) | **WhatsApp 语音消息不工作**。语音消息无法被下载和转录处理。 | **已关闭 (CLOSED)**。问题已解决。 |

## 6. 功能请求与路线图信号

除社区热点中提到的自定义 Bot 名称/图标 (#3650) 和禁用 Dream (#3652) 外，还有以下信号：

*   **WhatsApp 通道增强 (强信号)：** Issue [#3688](https://github.com/HKUDS/nanobot/issues/3688) 已被合并（CLOSED），内容为新增 `/sync-meta` 命令用于向 WhatsApp 同步斜杠命令。这直接解决了 WhatsApp Business 通道的一个核心功能缺失，**极有可能被纳入下一个版本**。
*   **Agent 上下文管理 (路线图核心)：** 新 Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) 明确指出了中断会话导致上下文丢失的问题。同时，多个开放 PR 如 [#3686](https://github.com/HKUDS/nanobot/pull/3686) (统一归档路径) 和 [#3685](https://github.com/HKUDS/nanobot/pull/3685) (持久化 `_last_summary`) 也都在集中解决 Agent 记忆的健壮性问题。这表明**强化 Agent 的上下文持久化和准确回忆能力是项目当前的核心优化方向**。
*   **全功能音频支持：** PR [#3513](https://github.com/HKUDS/nanobot/pull/3513) 仍在开放中，其目标是统一转录提供商并增加本地 Whisper 支持，这将大幅提升语音交互的可靠性和自主性。

## 7. 用户反馈摘要

*   **核心痛点：**
    *   **上下文丢失：** 用户 `lyh161` ([#3689](https://github.com/HKUDS/nanobot/issues/3689)) 报告了中断 Agent 循环任务后，Bot 失忆的问题，这是十分典型且影响体验的Agent交互问题。
    *   **配置不灵活：** 用户 `mraad` ([#3650](https://github.com/HKUDS/nanobot/issues/3650)) 无法自定义 Bot 形象，用户 `skyline75489` ([#3652](https://github.com/HKUDS/nanobot/issues/3652)) 希望禁用特定功能，表明用户对**精细化控制**的强烈需求。
    *   **集成稳定性：** WebSocket 超时/失败 (#3681, #3682)，特定 LLM 兼容性 (#3665) 等报告表明，在不同网络环境和使用场景下的稳定性仍是主要挑战。
*   **满意之处：**
    *   **社区响应速度：** 多个 Bug 在报告后1天内即被关闭，显示出维护者和贡献者**高效的响应和修复能力**。用户 `NewAlice` 报告的两个 WebSocket 问题均在当天得到处理。

## 8. 待处理积压

以下为开放时间较长、可能被忽视，但具有重要价值或有重大影响的项目，建议维护者重点关注：

*   **待审查的长期开放 PR:**
    *   **PR [#1219](https://github.com/HKUDS/nanobot/pull/1219) (feat: Stock market analysis)**：于2026-02-26创建，开放已超过2个月。该 PR 引入了多个新技能（股票分析、代码性能分析等），规模较大，但长时间未获合并。如果功能完整且稳定，应考虑审查并合并，以丰富 NanoBot 的生态。
    *   **PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) (feat: decouple heartbeat reasoning from notification)**：于2026-03-02创建，开放超过2个月。其核心是让 Heartbeat Agent 静默推理，仅在需要时通知用户。这是一个合理的默认行为改进，可避免不必要的消息轰炸，建议评估后合并或关闭。
*   **仍在讨论中的新通道：**
    *   **PR [#3486](https://github.com/HKUDS/nanobot/pull/3486) (feat(channels): Adding SimpleX channel)**：开放中，但已超过10天无主要更新。接入新的去中心化通讯协议能扩展 NanoBot 的用户群，但需要评估其稳定性和维护成本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，这是为您生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目动态日报 — 2026-05-08

## 1. 今日速览

今日项目活跃度极高，完成了 **v0.13.0 “The Tenacity Release”** 的重大版本发布，标志着项目在韧性方面的重大改进。社区贡献踊跃，过去24小时内产生了50条Issues和50条PR，其中以Bug修复和稳定性增强为主。值得注意的是，大量PR已针对今日报告的多个P1/P2级关键Bug（如API密钥泄露、认证失败、子进程工具丢失）提交了修复方案，表明项目维护者对社区反馈响应迅速。整体来看，项目正处于一个密集的功能迭代与质量巩固期。

## 2. 版本发布

### v2026.5.7 (v0.13.0) — The Tenacity Release
- **发布日期**: 2026年5月7日
- **版本亮点**: “Tenacity”（韧性）版本，着重提升Agent在复杂、故障环境下的任务完成能力。
- **更新内容**:
    - **规模**: 自v0.12.0以来，共合并了588个PR，修改了829个文件，新增了128,366行代码。
    - **问题修复**: 关闭了282个Issues，其中包含13个P0级和36个P1级高优先级问题。
    - **社区贡献**: 共有295位社区贡献者参与了本次发布。
- **破坏性变更 & 迁移注意事项**: 版本说明中强调了“Tenacity”主题，可能涉及任务重试、中断恢复等核心逻辑的变更。迁移时请重点关注 `agent` 和 `gateway` 模块的行为变化。部分配置项(如 `eager_rate_limit_fallback`)可能新增，建议更新配置文件。

## 3. 项目进展

今日合并/关闭的关键PR推动了以下方面的进展：

- **核心Agent稳定性**:
    - **PR #21670**: 修复了当父Agent开启所有工具时，子Agent (`delegate_task`) 可能丢失文件/终端工具的问题。这是影响深层代理调用链路的P1级修复。
    - **PR #21668**: 修复了DeepSeek API在后端不启用推理时，因缺少 `thinking:{"type":"disabled"}` 参数导致HTTP 400错误的问题。
    - **PR #21286** (已合并): 修复了辅助任务（如标题生成）因API密钥继承问题导致的HTTP 401错误。
- **安全与配置**:
    - **PR #21664** (P1): 修复了 `hermes status --all` 命令可能泄露API密钥的安全问题，现在将始终对密钥进行脱敏处理。
    - **PR #21671**: 增加了对子进程`HOME`目录隔离的开关和自定义路径支持，提升了多用户环境下的配置灵活性。
- **CLI与用户体验**:
    - **PR #21669** (P2): 修复了直接通过 `cli.py` 启动时MCP工具未加载的问题，确保所有CLI入口点行为一致。
    - **PR #21674**: 修复了在CLI中使用模型别名时可能无法正确解析的问题。
- **Gateway与多平台支持**:
    - **PR #21673**: 增强了Telegram等平台的媒体处理和重连逻辑，提高了Gateway的健壮性。

**项目整体向前迈了一大步**：v0.13.0的发布和今天数项P1级Bug的迅速修复，使Agent的核心稳定性、安全性和多平台可靠性都得到了显著提升。

## 4. 社区热点

今日讨论最活跃的Issues主要集中在 **多平台连接稳定性** 和 **Gateway死锁** 问题上。

- **#21026 [Gateway: 多平台WebSocket共享单事件循环导致级联断连]**
    - 链接: [Issue #21026](https://github.com/NousResearch/hermes-agent/issues/21026)
    - 评论数: 2
    - 诉求: 当同时运行WeCom、飞书等平台的WebSocket连接时，由于共享单个事件循环，一个连接处理消息卡住（如调用LLM时）会导致所有平台连接超时断开。这是影响多平台部署体验的核心问题。

- **#21666 [`hermes acp` 触发OpenAI安全拒绝]**
    - 链接: [Issue #21666](https://github.com/NousResearch/hermes-agent/issues/21666)
    - 评论数: 1
    - 诉求: 用户发现使用特定模型（mini-class OpenRouter models）时，`hermes acp` 命令与 `hermes chat` 行为不一致，直接触发了OpenAI的安全拒绝。指向系统提示词可能存在差异。

这两项Issues反映了社区对 **大规模、多模态并发场景下Agent可靠性** 和 **不同入口点（CLI、API）行为一致性** 的高度关注。

## 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **P1 (严重)**:
    - **API密钥泄露**: `hermes status --all` 会打印原始API密钥。 (Issue #21664) -> ✅ **已有fix PR** (PR #21664)
    - **认证失败不触发回退**: `auxiliary_client.py` 在遇到401认证错误时不会自动切换到备用Provider。 (Issue #21667) -> ✅ **已有fix PR** (PR #21667)
    - **子进程工具丢失**: `delegate_task` 创建的Child Agent可能丢失文件/终端工具。 (Issue #21670) -> ✅ **已有fix PR** (PR #21670)
- **P2 (重要)**:
    - **Gateway锁文件在macOS上失效**: PID被重用导致Gateway永久拒绝启动。 (Issues #21596, #21613)
    - **QQ Bot 无声死亡**: WebSocket连接心跳超时后无法自动重连。 (Issue #21633)
    - **DeepSeek推理参数缺失**: 禁止推理时因缺少参数导致HTTP 400错误。 (Issue #21668) -> ✅ **已有fix PR** (PR #21668)
    - **Dockerfile Node版本不一致**: Docker镜像使用Node 20，而安装脚本使用Node 22，导致构建失败。 (Issue #21656)
    - **macOS下 `@` 自动补全卡死**: 在tmux中触发文件补全时CPU飙升。 (Issue #21623)
- **P3 (普通)**:
    - **原生图片生成不支持输入图像**: `image_generate` 功能无法使用参考图像。 (Issue #21562)
    - **MCP Twitter下载超时**: 下载大视频时因超时配置过短而失败。 (Issue #21091)
    - **Dashboard中 `/sessions` 命令未知**: 已注册的命令在TUI中无法使用。 (Issue #21677)

## 6. 功能请求与路线图信号

今日社区提出了多项新功能需求，其中部分已有PR实现，预示了未来版本的方向：

- **Agent控制与行为扩展**:
    - **可查询的技能执行日志** (Issue #21625): 用户希望有更明确的技能执行记录，以便调试和审查Agent行为。
    - **每通道个性/模型路由** (Issue #21637): 高级用户希望在Gateway层面为不同聊天频道绑定不同的Agent个性和模型，实现“多面手”Agent。
    - **配置化速率限制回退** (Issue #21678) -> **已有PR**: 提供配置选项，让用户决定触发速率限制时是立即切换到后备Provider，还是进行指数退避重试。这体现了对Agent行为可控性的追求。
- **集成与工具扩展**:
    - **Kasia/Kaspa工具集** (Issue #21672) -> **已有PR**: 新增对Kaspa零知识证明网络和Kasia索引器的读取支持，体现了社区对Web3领域的兴趣。
    - **Home Assistant配置拆分** (Issue #21676) -> **已有PR**: 将Home Assistant的工具功能和平台WebSocket功能拆分为独立的配置项，提供更灵活的智能家居集成方式。
    - **Discord语音转OpenAI Realtime** (Issue #21445) -> **已有PR**: 探索与OpenAI实时API的深度集成，实现无中断的语音对话体验。
- **其他**:
    - **Hermes桌面应用** (Issue #20059) -> **已有PR**: 一项持续进行的大型功能，旨在将Hermes从命令行带到Electron桌面应用中，提供更丰富的用户界面。

**路线图信号**：下一版本可能侧重于 **Agent行为精细控制** (如速率限制策略、技能日志) 和 **更广泛的第三方服务集成** (如智能家居、Web3、桌面应用)。

## 7. 用户反馈摘要

从今日的Issues评论中，可以提炼出以下真实用户痛点和使用场景：

- **“配置不一致，部署心态崩了”**: 用户 `jorgeHernandez1` 在报告Docker Node版本冲突时用了 “disagreement breaks”，反映了配置不统一给部署带来的困扰。
- **“连接静默断开，用户体验差”**: 用户 `MagicianEW` 在QQ Bot无声死亡的Bug中强调“从用户角度来看，QQ机器人似乎离线了”，点明了后台错误对前端体验的直接影响。
- **“行为不透明，到底执行了没？”**: 用户 `yangyf520` 请求技能执行日志，直接反映了用户对Agent“黑盒”行为不透明的焦虑，希望获得更详细的操作审计信息。
- **“跨平台混乱，到底该听谁的？”**: 用户 `yk8t5m75dm-cmyk` 描述多平台连接共享单事件循环导致“级联断连”，指出了系统在应对复杂并发场景时的脆弱性。
- **“安全漏洞，有点慌”**: 议题 `#21664` 的标题 “always redact API keys” 表明泄露密钥是一个明显的安全负面感受，用户希望看到项目对此类问题有零容忍的态度。

## 8. 待处理积压

以下Issue和PR已存在较长时间或对维护者有关键提醒作用，建议关注：

- **长期开放的P1级Bug**:
    - **#13951 [CLI: 批准提示因后台输出洪水而变得无响应]**: 创建于4月22日，影响核心CLI交互体验，至今未关闭。
    - **#13971 [`_is_ollama_glm_backend()` 误报导致非Ollama设置下的截断延续]**: 同样创建于4月22日，可能导致非标准Ollama代理的用户体验问题。
    - **#16623 [明确配置的本地OpenAI兼容后端仍解析回OpenRouter]**: 创建于4月27日，是影响用户自主选择Provider意愿的严重配置问题。

- **关键提示**:
    - 今天有多个针对macOS平台的Gateway锁检测问题 (Issues #21596, #21613)，说明该项目可能存在跨平台兼容性测试盲区，尤其是在非Linux系统上。
    - 由 `inpakeo-ux` 用户创建的一系列关于 “[Brain]” 控制面的Issues (#12343 - #12350) 虽然已关闭，但“Brain”作为未来控制系统的基础设施，其设计文档值得关注。

**提醒维护者**: 请优先关注上述长期未解决的P1级Bug，它们直接影响核心用户体验和信任度。同时，今天举报的macOS特定问题表明，加强跨平台CI/CD测试是提升项目健壮性的重要一环。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-08)

---

## 1. 今日速览

今日项目活跃度较高，24小时内共处理 **35条Issues** 和 **48条PR**，其中关闭/合并了 22 条 Issues 和 27 条 PR，清理了大量早期累积的陈旧问题（stale）。新发布的 `nightly` 版本（v0.2.8-nightly）持续集成最新代码。依赖更新和安全修复是今日的主流，同时社区对多消息并发处理、历史记录保留、非破坏性重置等体验问题保持关注。整体来看，项目维护节奏稳健，社区贡献活跃。

---

## 2. 版本发布

### nightly: Nightly Build — v0.2.8-nightly.20260508.2834db13

- **类型**：自动化夜间构建
- **说明**：此为自动构建版本，可能不稳定，请谨慎使用。
- **变更日志**：可对比 v0.2.8 版本查看完整变更：  
  https://github.com/sipeed/picoclaw/compare/v0.2.8...main

**注意事项**：无破坏性变更或迁移指南，建议测试环境下验证后使用。

---

## 3. 项目进展

### 安全修复与依赖升级
- **[PR #2818]** (已合并) 将 Go 从 `1.25.9` 升级至 `1.25.10`，修复 `net`、`net/http`、`net/http/httputil` 中的三个关键安全漏洞（`GO-2026-4976`、`GO-2026-4971`、`GO-2026-4970`）。
- **[PR #2821]** (已合并) 同步更新 `go.mod` 中的工具链版本，确保所有 CI 安全检查通过。
- **[PR #2800~#2809]** 批量合并 Dependabot 提交的依赖更新，涉及 OpenAI SDK（v3.22.0 → v3.34.0）、i18next、react-i18next、slack-go 等多个包。

### 功能改进
- **[PR #2819]** (已合并) 新增 `非破坏性 /reset 命令`，允许用户在不删除历史会话记录的情况下启动一个全新会话，支持撤销重置（通过 `select-session` 切换回原会话）。该 PR 实现了 [#2820 提出的需求]。
- **[PR #2789]** (待合并) 使工具反馈的编辑节流时间可配置，新增 `animation_interval_secs` 配置项，默认为 `3` 秒。
- **[PR #2791]** (待合并) 修复 Telegram 话题（Topic）上下文中，最终回复丢失主题属性的问题。

### 工具链优化
- **[PR #2413]** (待合并) 使用官方 `line-bot-sdk-go` v8 替换 LINE 频道中手写的 HTTP/HMAC/JSON 代码，降低维护负担并消除签名验证等潜在 bug。

**项目推进：** 今日重点在于安全加固、依赖现代化、以及用户交互体验的提升（非破坏性会话重置、主题上下文保留）。

---

## 4. 社区热点

### 🔥 最活跃 Issues

| Issue | 类型 | 评论数 | 摘要 |
|-------|------|--------|------|
| [#629] (OPEN) | Bug | 13 | LLM 调用失败（HTTP 500）后不会重试，导致长时间任务挂起 |
| [#2408] (CLOSED) | 功能请求 | 11 | LLM 账号堆叠 / API Key 自动轮换（类似弹匣供弹机制） |
| [#2171] (OPEN) | 重构 | 10 | 考虑将 OpenAI 端点统一迁移至 Responses API |
| [#2468] (CLOSED) | Bug | 8 | 定时任务因“命令执行限制在内部频道”而失败 |
| [#1763] (CLOSED) | Bug | 8 | `aarch64 .deb` 包安装失败 |

**分析：**  
- **#629** 是长期存在的 LLM 调用容错性问题，13 条评论说明用户对此痛点共鸣强烈，是提升系统可靠性的关键点。  
- **#2408** 的“API Key 自动轮换”需求虽已关闭（可能标记为 stale），但 11 条评论反映出用户对多 API 账号管理的高频诉求。  
- **#2171** 的 Responses API 迁移建议获得 10 条讨论，随着 OpenAI 政策变化，这是一个值得跟踪的方向。

### 🔥 最活跃 PRs

| PR | 类型 | 摘要 |
|----|------|------|
| [#2158] (OPEN) | 功能 | Multi-agent 发现提示注入，实现轻量级 Agent 注册表 |
| [#2719] (OPEN) | 功能 | 新增 Slack Webhook 输出频道，支持 Block Kit 格式化 |
| [#2823] (OPEN) | 修复 | 当出站跳过时，清除工具反馈 |
| [#2752] (OPEN) | 功能 | 改进 Web UI 中的模型配置工作流，支持上游模型获取 |

**分析：** 这些开放 PR 是社区核心贡献者的长期工作，涉及多 Agent、Web UI 模型管理、新频道集成等，预计会成为下一版的重要组成部分。

---

## 5. Bug 与稳定性

### 🔴 严重 Bug

| Issue | 严重程度 | 描述 | 修复状态 |
|-------|----------|------|----------|
| [#629] (OPEN) | 高 | LLM 调用 HTTP 500 后不重试，任务永久挂起 | 无关联 PR |
| [#2796] (OPEN) | 高 | 历史记录中，多轮用户消息只显示最后一条 | 无关联 PR |
| [#2721] (OPEN) | 高 | Anthropic Messages API `tool_use_id` 400 错误在 v0.2.5 仍可复现 | 无关联 PR |
| [#2702] (OPEN) | 中 | 多用户群组频道中，历史会话缺少发送者标识 | 无关联 PR |
| [#1042] (OPEN) | 中 | `exec` 工具 `guardCommand` 正则误判路径安全 | 无关联 PR |

### 🟡 中等 Bug

| Issue | 描述 |
|-------|------|
| [#2472] (CLOSED) | Windows 下 `list_dir` 因路径分隔符问题报错（已修复，随版本发布） |
| [#2377] (CLOSED) | `exec` 输出可能包含不安全终端控制字符（已修复） |
| [#2482] (CLOSED) | Open Weights 模型（mlx-lm）工具调用失败（已修复） |

**稳定性评估：** 今日关闭了 22 条 Issues，大部分是早期报告的 stale 或已修复问题。但仍有数个长期未被处理的严重 Bug 处于开放状态，建议维护者优先评估 [#629] 和 [#2721] 的代码复现及修复方案。

---

## 6. 功能请求与路线图信号

### 高潜力需求

| Issue | 需求描述 | 关联 PR |
|-------|----------|---------|
| [#2820] (OPEN) | 非破坏性会话重置（不清除 Seahorse 历史） | ✅ 已由 PR [#2819] 实现并合并 |
| [#2465] (CLOSED) | 频道增加 SMTP 邮件发送功能，用于定时任务结果通知 | 暂无 |
| [#2493] (CLOSED) | 支持同时添加多个飞书应用 | 暂无 |
| [#2444] (CLOSED) | 支持在 `.security.yml` 中存储 MCP Server 环境变量密钥 | 暂无 |
| [#348] (OPEN) | 通用附件支持（文件、文档、多媒体） | 暂无 |
| [#2169] (CLOSED) | 双重 HEAD 认证（自定义模型需要 `X-API-Key` + `Authorization`） | 暂无 |

**路线图信号：**  
- 非破坏性会话重置已快速落地，表明社区反馈能够快速转化为代码。  
- SMTP 邮件、多飞书应用、自定义认证头等功能虽已关闭（可能被标记 stale），但仍有较高需求热度。

---

## 7. 用户反馈摘要

| 用户 | 反馈要点 |
|------|----------|
| **@manhnt9** (#629) | 长时间任务因 LLM 临时 500 错误挂起，建议添加重试机制 |
| **@icyfire** (#1042) | `exec` 工具的安全守卫对 `curl wttr.in` 等命令误报，导致查询天气等功能失效 |
| **@xiaoji235** (#2280) | 硅基流动 API 配置导致服务无法启动；QQ 频道缺少 AppSecret 配置项 |
| **@ptoxad** (#2429) | **负面反馈**：无法使用添加的模型，控制台模式下输入字符自动重复，评价较为激烈 |
| **@zlgonzalez** (#2482) | 在 mlx-lm 上运行开源权重模型时，工具调用在收到模型回应后无法正常工作 |
| **@tranthiphu56** (#2302) | Web UI 凭据过期频繁，需反复手动重新认证 |
| **@zuozhehao** (#2464, #2447, #2446) | 飞书/多频道连续发送消息时，只响应最后一条；消息回声问题 |
| **@bogdanovich** (#2820) | 希望有非破坏性的 `/reset` 而非 `/clear`，保留对话历史 |

**满意点：** 社区对官方 SDK 集成（LINE v8）、非破坏性重置、Slack Webhook 等改进持正面态度。  
**痛点：** 多消息并发处理、LLM 容错、Web UI 认证稳定性、渠道配置兼容性仍是用户抱怨的主要来源。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 摘要 | 最新更新 |
|-------|----------|------|----------|
| [#629] (OPEN) | 2026-02-22 | LLM 调用失败不重试，任务挂起 | 2026-05-07 |
| [#348] (OPEN) | 2026-02-17 | 通用附件支持（高优先级路线图） | 2026-05-07 |
| [#1042] (OPEN) | 2026-03-04 | `exec` 工具命令守卫误判 | 2026-05-07 |
| [#2171] (OPEN) | 2026-03-30 | 迁移至 OpenAI Responses API | 2026-05-07 |
| [#2721] (OPEN) | 2026-04-30 | Anthropic `tool_use_id` 400 错误仍可复现 | 2026-05-07 |
| [#2702] (OPEN) | 2026-04-28 | 多用户群组频道历史缺少发送者标识 | 2026-05-07 |
| [#2796] (OPEN) | 2026-05-07 | 历史记录只显示最后一条用户消息 | 2026-05-07 |

### 长期未合并的重要 PR

| PR | 创建时间 | 摘要 | 最新更新 |
|----|----------|------|----------|
| [#2158] (OPEN) | 2026-03-29 | Multi-agent 发现提示 | 2026-05-08 |
| [#2719] (OPEN) | 2026-04-29 | Slack Webhook 输出频道 | 2026-05-08 |
| [#2413] (OPEN) | 2026-04-07 | LINE 频道迁移至官方 SDK | 2026-05-08 |
| [#2752] (OPEN) | 2026-05-03 | 改进 Web UI 模型配置工作流 | 2026-05-08 |

**建议：** 建议维护者重点关注 [#629]（LLM 容错）、[#2721]（Anthropic API 回归）、以及 [#2158]（多 Agent 能力）——这些是影响系统稳定性和核心功能的长期积压项。

---

*生成时间：2026-05-08 12:00 UTC · 数据来源：github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 NanoClaw 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 2026-05-07 至 2026-05-08 数据生成的日报。

---

## NanoClaw 项目动态日报 | 2026-05-08

### 1. 今日速览

今日项目活跃度极高。24小时内，共有 **9个 Issues** 和 **35个 PRs** 产生或更新，显示出一个大型开源项目在核心功能、安全性和稳定性方面的密集攻坚。尤其值得关注的是，A2A（Agent-to-Agent）路由机制和会话管理的多项修复与重构已进入合并阶段，标志着项目在复杂交互场景下的基础架构正趋于成熟。此外，安全与运维领域的修复（如 `/restart` 命令权限控制、断线看门狗重启）表明项目在持续增强生产环境的健壮性。整体来看，**项目处于高强度开发与快速迭代期，核心功能趋于稳定，但新功能的引入和代码库的演进也伴随着较多的回归测试需求。**

### 2. 版本发布

**无新版本发布。**

### 3. 项目进展

今日合并或关闭的关键 PRs 表明项目在多个关键领域取得了实质性进展：

- **核心路由与会话管理 (A2A):**
  - **[#2267]** `fix(agent-to-agent): route a2a replies back to originating session` **[已合并]**。这是一个关键的修复，解决了当Agent Group有多个活跃会话时，A2A回复错误地路由到最新会话（即“最新会话陷阱”）的问题，确保了多通道、线程化对话的一致性。
  - **[#2002]** `fix(routing): origin-session threading for agent-to-agent replies` **[已关闭]**。这条PR虽然创建较早，但今日关闭，表明修复方案已成型，与`#2267`共同构成了A2A路由的完整解决方案。
  - **[#2277]** `fix(agent-runner): refresh routing on follow-up messages mid-query` **[已关闭]**。修复了轮询循环中，对后续推入的消息无法更新路由上下文的问题，确保了实时对话中的路由准确性。

- **安全与运维:**
  - **[#2341]** `feat(security): gate /restart and /build bot commands behind owner role check` **[已关闭]**。修复了高危命令（重启主机进程）仅依赖群组验证的安全漏洞，增加了用户级别的权限检查，提升了系统安全性。
  - **[#2342]** `ops: restart connectivity watchdog — dead since May 1` **[已关闭]**。修复了自5月1日就停止运行的连接看门狗服务，解决了因外部服务故障（如OrbStack）导致系统无法自动恢复的关键运维问题。

- **容器与环境兼容性:**
  - **[#2336]** `fix(container): repair claude-code install for pnpm v11` **[已关闭]**。修复了因新版包管理器（pnpm v11）与旧版配置不兼容导致的`claude`二进制文件无法正确安装的问题，这是一项关键的回归修复。
  - **[#2335]** `fix(container): pin pnpm to 10.33.0 to match host` **[已关闭]**。通过锁定容器内pnpm版本与主机一致，从根本上避免了版本不兼容导致的构建错误。

- **AI代理行为改进:**
  - **[#2325]** `feat(poll-loop): inject destination reminder into agent context after compaction` **[已关闭]**。解决了长期存在的痛点：当AI SDK自动压缩对话上下文后，代理会忘记多目标对话的“<message to="name">”格式要求，现在其会在压缩后自动注入指令。

- **技能与文档:**
  - **[#2318]** `feat(skills): add /add-mnemon skill` **[已关闭]**。新增了持久化语义记忆的技能，可以让AI代理在容器重启和上下文压缩后仍能保留结构化记忆。
  - **[#2319]** `feat(add-aws): skill for AWS CLI access` **[已关闭]**。新增了为AI代理容器添加AWS CLI访问能力的技能，扩展了其自动化运维能力。
  - **[#2320]** `docs(skills): update SKILL.md` **[已关闭]**。为多个技能更新了文档，表明项目在持续改进开发者/用户的体验文档。

**总结**：大量关于核心路由、安全、兼容性的关键修复被合并，项目稳定性显著提升。同时，新技能（如记忆和云访问）的引入，预示着能力扩展的方向。

### 4. 社区热点

尽管今日未出现评论特别多的主题，但以下几个PR/Issue反映了社区最核心的关注点：

- **A2A 路由问题系列 (Issues #2331, #2332, PRs #2002, #2267, #2277):** 社区最活跃的讨论焦点集中在 Agent-to-Agent通信的正确性上。数个高度相关的Bug报告和修复PR几乎同时出现，表明这是当前开发周期的重中之重，且多个贡献者正在协同解决。背后的诉求是：随着代理网络复杂化，**确保消息精确、有序地在多代理、多会话的复杂拓扑中传递是项目走向成熟的关键**。
- **安全命令修复 (Issue #2341, PR #2341):**  `/restart` 和 `/build` 命令的权限提升修复获得了关注。这反映了社区对生产环境安全性的重视，用户不希望任何群组成员都能通过Telegram bot轻易重启整个主机。

### 5. Bug 与稳定性

今日报告的Bug主要集中在**路由与寻址**领域，且严重程度较高。

- **严重 (Critical):**
  - **[Issue #2331]** `bug(sessions): findSessionByAgentGroup routes A2A replies to wrong session` **[高优先级]**。报告了一个核心BUG：在Multi-Channel的群组中，A2A回复总是被路由到“最新”而非“正确”的会话。已有对应的修复PR `#2267` 被合并，但Issue本身可能作为文档保留。
  - **[Issue #2332]** `fix(sessions): findSessionByAgentGroup may route A2A replies to wrong session`。在`#2331`基础上进一步深挖，识别出更广泛的消息路由错误和消息丢弃问题，包括会话解析选择错误等多种情况。**这是最需要关注的Bug**。
- **中等 (Major):**
  - **[Issue #2343]** `bug: verify oauth-sync system alert delivery when credentials file goes missing` **[已关闭]**。报告了一个告警系统故障：当凭证文件丢失时，系统应触发告警，但实际上日志记录了9次错误后才触发。此问题已被标记为关闭，表明修复已就位。
- **一般 (Minor):**
  - 近期无严重崩溃或性能回归报告。

### 6. 功能请求与路线图信号

以下新提出的功能请求展示了项目的未来发展方向：

- **[Issue #869]** `(feat): Per-group credential management and interactive reauth via channels` **[高优先级]**。这是一个长期存在的功能请求，旨在允许不同的群组使用独立的Claude API凭证，从而解决配额共享和身份隔离问题。这是项目迈向多租户、企业级应用的关键功能。鉴于其高优先级和长期存在，极可能会在下一个大版本中被讨论和实现。
- **[Issue #2334]** `File attachment support in web UI`。用户希望在Web UI中支持文件上传。这是一个提升产品完整性的重要功能，虽然暂无关联PR，但用户痛点明确，有望在后续迭代中加入路线图。
- **[PR #2345]** `feat(claude-md-compose): auto-import per-group CLAUDE.role.md if present`。建议允许为不同群组自动加载自定义的角色设定文件。这体现了社区对更细粒度、更灵活的AI角色定制需求。

### 7. 用户反馈摘要

从今日的Issues评论中，我们可以提炼出以下用户声音：

- **不满/痛点：** “在Agent Group有多个活跃会话时，回复总是丢到最新的会话里。” —— 用户对A2A通信的稳定性和正确性表达了强烈不满，这是最核心的痛点。
- **使用场景：** 用户（`prasta1`）描述的场景非常专业和具体，如 “Telegram命令可以重启生产主机”、“断线看门狗挂了5天”，表明NanoClaw已被用于生产或类似生产的、对稳定性和安全性要求较高的环境。
- **诉求：** 用户希望有更细粒度的权限控制（`#2341`, `#869`），期望系统能在故障时及时告警（`#2343`），并且对通信路由的准确性有极高的要求（`#2331`, `#2332`）。

### 8. 待处理积压

- **[Issue #869]** `(feat): Per-group credential management and interactive reauth via channels` **（高优先级，创建于2026-03-09）**：该Issue已开启2个月，标记为高优先级，但至今无关联PR。这可能是社区非常期待但实现复杂度较高（涉及多个后端模块）的功能。维护者需评估其开发路线，或与社区沟通其优先级。

- **[PR #2337]** `feat(providers): surface Claude Code skill catalog to non-Claude providers` **（开放中）**：这条PR试图将Claude Code的技能系统开放给其他AI提供商，这是一个具有战略意义的改动，可能改变项目的生态。它目前处于开放状态，尚未合并，需要更多社区评审和维护者决策。

---

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 NullClaw 项目数据生成的 2026-05-08 项目动态日报。

---

# NullClaw 项目动态日报 | 2026-05-08

## 1. 今日速览

今日项目活跃度**较高**，社区贡献与维护工作并进。过去24小时内，共有5个Issues和9个PR被更新，标志着项目正处于一个功能迭代与问题修复并行的快速发展期。CI/CD流程迎来重要优化，通过强制构建参数解决了夜间构建的重复跳过问题。社区方面，用户围绕飞书（Lark）集成提出了新功能需求，同时长期未决的文档和构建兼容性问题也得到解决，显示了项目健康且积极的社区生态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有5个PR被合并或关闭，为项目带来了实质性的推进：

- **CI/CD 流程优化**：**PR #898 ([CLOSED])** 通过对定时夜间构建传递 `force=true` 参数，解决了因基于 `head_sha` 去重而导致定时构建被错误跳过的问题，保障了每日构建的稳定性。**PR #899 ([OPEN])** 紧随其后，旨在激活夜间预发布版本的自动发布流程，是一个尚未合并的后续改进。

- **文档与平台支持增强**：**PR #897 ([CLOSED])** 响应社区需求，为在 Debian 系统上安装 Zig 提供了详细的文档说明。**PR #896 ([CLOSED])** 实现了重要的原生ACP（Agent Client Protocol）适配器，将标准输入输出（stdio）的 JSON-RPC 功能直接集成进主二进制文件，为外部工具集成开辟了新途径。

- **功能与问题修复**：**PR #893 ([CLOSED])** 合并了 `zig-qm-toolkit` 集成，增加了 hooks、agents、skills 和四级验证等能力。**PR #790 ([CLOSED])** 修复了 OpenAI 兼容供应商在 `responses` API 模式下的两个 Bug，包括工具架构格式错误和空值处理问题，提升了 API 兼容性。

## 4. 社区热点

今日最受关注的是由用户 **LiWeny16** 提交的两个与飞书（Lark）通道集成相关的 Issues：

- **Issue #894** 和 **Issue #895**：这两个议题专注于提升飞书机器人的灵活性和用户体验。`#894` 要求增加配置选项，让机器人可以回复群组内所有消息（而不仅仅是@提及的），这对于需要机器人主动参与群聊的场景至关重要。`#895` 则关注于用户界面体验，建议增加配置以禁用 LLM 响应期间的“输入中...”占位符及其撤回行为，因为这种闪现的“...”会给用户带来闪烁或混乱感。

**分析**：这两个议题虽由同一用户提出，但反映了两个不同的核心诉求：
1.  **功能自动化**：需要机器人从“被动响应”变为“主动交互”。
2.  **用户感知**：优化交互过程中的视觉反馈，提升流畅度。

鉴于这两个议题当前都没有评论和图标（反应），说明它们更偏向于“初步功能建议”而非社区广泛讨论的痛点。这些建议很可能会被项目维护者纳入下一阶段的飞书集成路线图中。

## 5. Bug 与稳定性

过去24小时内，无新的严重 Bug 被报告。主要的技术相关问题已在通过文档和修复 PR 解决：

- **Zig 构建与安装**：`#820` (CLOSED) 和 `PR #897` (CLOSED) 解决了如何在 Debian 上安装 Zig 的常见问题。`PR #887` (OPEN) 仍在尝试修复 `Zig v0.16` 在 Windows/Linux 上的构建问题，属于更高优先级的待处理任务。
- **API 兼容性**：`PR #790` (CLOSED) 成功修复了 OpenAI API 兼容性问题，消除了潜在的集成风险。

总体而言，项目目前的 Bug 存量较低，稳定性状态良好。

## 6. 功能请求与路线图信号

- **飞书集成增强（高优先级信号）**：`#894` (响应所有群消息) 和 `#895` (禁用占位提示) 是两个直接、明确的功能请求。结合已经有 PR 在解决其他集成问题，预计这两个功能有较大概率在后续版本中被实现。
- **数据治理层**：`PR #885` ([OPEN]) 引入了“数据治理层”的草案，这是一个名为“Security Backoffice (DS)”的团队为黑客松提交的提案。虽然尚处于起草阶段，但这是一个重大的功能，表明社区开始关注 NullClaw 的数据安全与隐私，这可能是项目未来在合规和企业级应用方面的一个重要信号。
- **Cron 子代理**：`PR #783` ([OPEN]) 仍在活跃开发中，这是一个功能庞大、特性丰富的关于定时任务子代理的PR，包含了历史记录、JSON输出和安全加固。这有望成为NullClaw平台的核心调度能力。

## 7. 用户反馈摘要

- **用户痛点与解决方案**：用户 `eabase` 询问不使用 Docker 如何安装 Zig (`#820`)，这反映出部分用户对 Docker 依赖的抵触。维护者通过合并 `PR #897` 提供了直接的解决方案，回应了社区的诉求。
- **文档维护提醒**：用户 `mozarchbtw` 提出在 `README.md` 中关于基准测试快照的表格数据已过时（`#473`），特别指出二进制大小和内存占用不再符合现有数据。这是一个积极的维护性提醒，警示项目在快速发展过程中需要同步更新附属文档，避免给新用户带来错误印象。

## 8. 待处理积压

- **`PR #783` - `feat(cron): cron subagent...`**：该PR自 2026-04-07 开启至今已停滞超过30天。这是一个特性丰富、改动较大的功能，长时间未被合入或接受 Review，可能需要维护者主动与作者沟通，明确下一步计划。
- **`PR #887` - `Fix build with zig v0.16 for win/linux`**：数日前被打开，涉及跨平台构建兼容性，属于高优先级问题。如果长期未处理，将会影响新用户在 Windows 和 Linux 上的使用体验。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 IronClaw 项目数据，生成了 2026-05-08 的项目动态日报。

---

# IronClaw 项目日报 - 2026-05-08

## 1. 今日速览

今日 IronClaw 项目活跃度极高，核心开发团队正全力推进 **Reborn 架构** 的整合与产品化迁移，这是项目当前最核心的焦点。同时，团队也积极修复了多个关键 Bug，包括 LLM 提供商和 UI 交互问题。社区侧，**Telegram 集成** 与 **多工作区支持** 成为用户讨论的热点。总体来看，项目正经历一次大规模的内部重构，并伴随着频繁的 Bug 修复与功能迭代，项目健康度良好，但稳定性风险较高。

## 2. 版本发布

- **v0.28.0 (2026-05-07)**: 这是一个重大的里程碑版本。
    - **更新内容**: 将 `reborn-integration` 分支合并至 `main` 主线。这引入了 Reborn 架构的基础 Crate，包括能力主机、运行时调度器、进程生命周期、文件系统、密钥管理、网络和扩展清单注册边界。同时，增加了对 WIT 兼容的 WASM 工具的支持。
    - **破坏性变更**: 此次合入是架构级的重大变更，对项目内部模块边界进行了重构。虽然 Release Notes 未明确指出，但下游依赖方（如有）可能需要适配新的 Crate 名称和模块路径。
    - **迁移注意事项**: 普通用户若未进行自定义开发，无需特别操作。但对于依赖 `ironclaw` 核心库进行二次开发的团队，建议重点关注 `reborn` 相关 Crate 的引入对现有代码的影响，并参考 `main` 分支的更新进行适配。

## 3. 项目进展

今日项目核心进展集中在 **Reborn 架构的落地** 和 **关键 Bug 修复**。

- **核心架构推进**:
    - **Reborn 产品适配器 (Product Adapter)**: PR #3351 `[CLOSED]` 和 PR #3352 `[OPEN]` 分别引入了产品适配器的核心合约和主机身份验证/出口原语，为 WASM 扩展的标准化交互奠定了基础。
    - **持久化存储**: 一系列 PR (#3349, #3368, #3378, #3379) 被合入，为 Reborn 架构添加了基于 libSQL/PostgreSQL 的**运行状态、能力租约和会话线程存储**，使得 Reborn 组件能够支持生产级数据持久化。
    - **桥接与任务恢复**: PR #3365 `[CLOSED]` 修复了审批门控导致的 Agent 循环阻塞问题；PR #3366 `[OPEN]` 实现了暂停任务在审批/认证通过后的**自动恢复**功能，显著改善了用户体验。

- **Bug 修复**:
    - **LLM 提供商**: PR #3364 `[CLOSED]` 修复了 Web UI 重启挂起、HTTP 默认值等问题。
    - **Telegram 集成**: PR #3381 `[OPEN]` 专门处理了 Telegram 设置失败及跨频道 OAuth 恢复问题，直接回应了社区反馈。

## 4. 社区热点

- **#3067 `[TEST] Reborn: Add vertical-slice integration test suite`** (28 条评论): 这是关于 Reborn 集成测试套件的核心讨论，评论数高居榜首。社区和核心开发者正围绕如何构建全面的端到端测试以验证新架构的稳定性展开深入讨论，反映了对 Reborn 架构质量的高度关注。
- **#3317 `Telegram setup did not work with my local IronClaw`** (1 条评论，`bug_bash_P1` 标签): 这是用户遇到的具体问题，由 `sergeiest` 报告。该问题已通过 PR #3381 被定位和修复，体现了项目对高优先级用户反馈的快速响应。
- **#3334 `Multi-workspace support: one IronClaw instance across multiple Slack workspaces`** (0 条评论): 虽然暂无讨论，但这是一个清晰的功能请求，表明用户有在多 Slack 工作区统一管理 IronClaw 的需求，反映了实际使用场景中的痛点。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **Critical** | #3229 `[CLOSED]` | LLM 提供者回退配置在启动时错误地持久化到数据库，永久覆盖用户配置。 | **已修复** (已关闭) |
| **High** | #3225 `[CLOSED]` | Gemini API密钥后端在工具调用时因缺少 `thought_signature` 失败。 | **已修复** (已关闭) |
| **Medium** | #3274 `[CLOSED]` | 从 v0.26.0 升级到 v0.27.0 后，UI 数据丢失直到手动刷新。 | **已修复** (已关闭) |
| **Medium** | #3082 `[CLOSED]` | 启用工具自动审批后，应用在“重启”界面挂起。 | **已修复** (PR #3364) |
| **Low** | #3323 `[OPEN]` | Nightly E2E 测试失败。 | **待调查** |

**总结**：今日修复了多个影响核心功能的严重 Bug（配置持久化、LLM 提供商兼容性）。Nightly E2E 测试失败需要维护者关注，可能预示着最近合并的代码引入了回归问题。

## 6. 功能请求与路线图信号

- **LLM 推理内容显示**: `#3327` 请求将 LLM 的推理过程（`reasoning_content`、`thought_signature`）持久化并展示在 UI 中。PR #3326 已为此打下基础，此功能有望在下一版本中上线。
- **多工作区支持**: `#3334` 提出了对 Slack 多工作区的支持。目前暂无关联 PR，但考虑到近期的 Bug 修复和 Telegram 集成，这可能是一个下一步探索的方向。
- **Crates.io 发布**: `#3259` 请求发布 v0.25.0-v0.27.0 到 crates.io，以解决下游依赖被锁定在因 CVE 问题而受限的 v0.24.0 版本的问题。考虑到 v0.28.0 刚刚发布，下一个版本发布时可能会一并处理此问题。

## 7. 用户反馈摘要

- **正面/中性反馈**:
    - **高级功能探讨**: 多名核心用户（如 `serrrfirat`）参与到 Reborn 架构的深度讨论中，提出技术细节和方案，表明社区技术氛围活跃。
    - **Bug 报告细致**: 用户 `thomasmaerz` 报告 #3225 和 #3229 时提供了详尽的日志和复现步骤，对问题定位帮助很大。
- **负面/痛点反馈**:
    - **升级体验不佳**: `#3274` 的用户 `sunglow666` 报告了升级后数据不刷新，必须手动刷新的问题，这影响了升级顺畅度。
    - **配置丢失恐慌**: `#3229` 的用户 “担心” LLM 配置被永久覆盖，说明在配置持久化机制上存在信任危机。
    - **核心功能失效**: Telegram (`#3317`, `#2902`)、Deepseek (`#3201`)、Gemini (`#3225`) 等特定平台的集成问题频繁出现，说明跨平台兼容性是当前稳定性的主要薄弱环节。

## 8. 待处理积压

- **#2902 `Telegram is not working for NEAR Foundation instance`** (创建: 2026-04-23): 这是一个由基金会有影响力的用户报告的长期问题，时间超两周，与今日修复的 `#3317` 可能有关联或相似根因。建议维护者关注 PR #3381 的修复是否能一并解决此问题，否则需明确响应。
- **#3259 `Publish 0.25.0–0.27.0 to crates.io`** (创建: 2026-05-05): 已创建三天无明确回应。这直接阻碍了社区开发者的使用，是一个重要的生态阻塞点，应给予优先级。
- **#3323 `Nightly E2E failed`** (创建: 2026-05-07): 自动生成的 CI 失败报告。虽非常规 Issue，但持续失败会降低对主干代码稳定性的信心，建议尽快排查。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 开源项目分析师，这是根据您提供的 GitHub 数据生成的 2026-05-08 项目动态日报。

---

# LobsterAI 项目动态日报 - 2026-05-08

**数据来源:** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
**数据时间范围:** 2026-05-07 ~ 2026-05-08

## 今日速览

今日项目活跃度极高，处于密集迭代和发布周期。24小时内合并/关闭了惊人的41个PR，并发布了新的`2026.5.7`版本，显示团队正为`release/2026.05.08`分支进行最后的冲刺合并。更新焦点集中在UI动画与主题、新手引导、定时任务历史、协作模块（cowork）的Token消耗展示与分页加载，以及多项针对Windows平台的稳定性修复。核心开发者（`liuzhq1986`、`btc69m979y-dotcom`、`swuzjb`）贡献了大量关键代码。社区方面，有两个用户报告的BUG亟待解决。

## 版本发布

[**LobsterAI 2026.5.7**](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7)

本次版本发布包含以下核心变更：

- **Windows技能管理修复**: `fix(skills): improve Windows skill delete reliability and import feedback` - 改进了Windows系统下技能（Skills）删除的可靠性，并优化了导入时的用户反馈。
- **有道笔记技能升级**: `feat(skill): upgrade youdaonote skill to 1.0.8` - 将有道笔记技能更新至1.0.8版本。
- **代码重构**: 包含一些未具体说明的代码重构工作。

**破坏性变更与迁移注意事项:** 未见明确标注的破坏性变更。建议用户和开发者更新至此版本，以获取Windows技能管理的稳定性改进。

## 项目进展

今日合并了大量针对 `release/2026.05.08` 分支的PR，项目正在快速推进多项重要功能：

- **UI/UX 体验飞跃**:
    - **动画与主题**: [#1915](https://github.com/netease-youdao/LobsterAI/pull/1915) 和 [#1554](https://github.com/netease-youdao/LobsterAI/pull/1554) 引入了主页错落入场动画和聊天气泡动画，并激活了已定义的主题令牌（如渐变背景），显著提升了视觉体验。
    - **新手引导**: [#1577](https://github.com/netease-youdao/LobsterAI/pull/1577) 新增了基于 driver.js 的首次启动和模型配置引导，降低了新用户的上手门槛。
    - **Agent UI 优化**: [#1911](https://github.com/netease-youdao/LobsterAI/pull/1911) 对Agent管理界面进行了优化。

- **协作模块 (Cowork) 能力增强**:
    - **Token 消耗显示**: [#1912](https://github.com/netease-youdao/LobsterAI/pull/1912) 在 AI 回复下方展示了输入/输出 Token 数、缓存、上下文窗口占比等信息，对用户和开发者透明化模型使用成本。
    - **分页加载**: [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) 和 [#924](https://github.com/netease-youdao/LobsterAI/pull/924) 实现了会话列表和消息历史的分页加载，解决了长对话场景下的内存和性能问题。

- **功能模块完善**:
    - **定时任务**: [#1913](https://github.com/netease-youdao/LobsterAI/pull/1913) 和 [#1564](https://github.com/netease-youdao/LobsterAI/pull/1564) 为定时任务运行历史增加了分页和时间/状态筛选功能。
    - **Agent 独立工作目录**: [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) 支持为每个Agent独立配置工作目录，提升了Agent的隔离性和使用灵活性。

- **核心稳定性与兼容性修复**:
    - **流式文本Bug修复**: [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) 修复了流式文本合并时，因重叠检测算法Bug导致 `.pptx` 等字符被误吞的问题。
    - **Windows兼容性**: [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) 修复了Windows上文件预览卡片重复和路径错误问题；[#1914](https://github.com/netease-youdao/LobsterAI/pull/1914) 修复了跨平台测试断言问题。
    - **启动可靠性**: [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) 减少了启动时的误报失败，并增加了在错误页面直接重启应用的功能。
    - **代码清理**: [#1498](https://github.com/netease-youdao/LobsterAI/pull/1498) 修复了全部165个ESLint错误，提升了代码质量。

## 社区热点

`Release/2026.05.08` 分支上的大量合并PR（如#1916, #1915等）是目前最受关注的。社区层面的讨论主要集中在以下Issue上：

- **[#1878 IM机器人 微信接口 配置扫码后无法输入验证码]**
  (https://github.com/netease-youdao/LobsterAI/issues/1878)
  - **状态**: 已开启，4月30日创建。
  - **核心诉求**: 用户在集成微信机器人时，配置过程需要输入6位验证码，但应用内未提供输入界面，导致配置流程中断。
  - **分析**: 这是一个明确的UI/UX功能缺失，阻塞了微信机器人这一重要IM渠道的配置和使用。

- **[#1903 会员登录频繁失败]**
  (https://github.com/netease-youdao/LobsterAI/issues/1903)
  - **状态**: 已开启，5月7日创建。
  - **核心诉求**: 用户无法正常登录会员，导致无法使用网易提供的付费模型。该Issue包含截图，疑似登录界面存在严重问题。
  - **分析**: 这是一个严重的Bug，直接影响了付费用户的正常使用，并将用户引向“改进会员登录方式”的诉求。

**总结**: 社区核心痛点集中在 **IM集成体验** 和 **会员/付费模型稳定性** 上。

## Bug 与稳定性

- **严重级**:
    1.  **[#1903 会员登录频繁失败]**
        (https://github.com/netease-youdao/LobsterAI/issues/1903)
        **严重程度：** 极高。**影响范围：** 所有需要登录使用付费模型的用户。
        **当前状态：** 无 Fix PR。
        **描述：** 用户无法完成会员登录，阻塞了核心付费功能。

    2.  **[#1878 微信接口验证码输入界面缺失]**
        (https://github.com/netease-youdao/LobsterAI/issues/1878)
        **严重程度：** 高。**影响范围：** 所有希望使用微信机器人的用户。
        **当前状态：** 无 Fix PR。
        **描述：** 配置流程中断，功能无法使用。

- **已修复级**:
    1.  **[#1908 流式文本合并Bug]**
        (https://github.com/netease-youdao/LobsterAI/pull/1908)
        **问题：** 流式输出时，特定字符（如`.pptx`）可能被错误截断。已于今天通过PR #1908修复并合并。
    2.  **[#1909 Windows文件预览Bug]**
        (https://github.com/netease-youdao/LobsterAI/pull/1909)
        **问题：** 在Windows上出现文件预览卡片重复和路径错误。已于今天通过PR #1909修复并合并。
    3.  **[#1900 Markdown表格显示问题]**
        (https://github.com/netease-youdao/LobsterAI/pull/1900)
        **问题：** 在高并发场景下，Markdown表格可能会出现降级/截断。已于昨天通过PR #1900修复并合并。

## 功能请求与路线图信号

- **微信机器人集成优化**: Issue #1878 反映了用户对IM渠道（特别是微信）一键化配置的强烈需求。虽然目前没有直接的PR，但提升IM集成的易用性应是近期高优事项。
- **更好的登录/会员体验**: Issue #1903 的诉求不仅是修Bug，更是对登录流程的改进呼声。未来可能需要对登录页面进行重构或增加更多错误反馈。
- **AI辅助诊断**: PR #1916 的 `feat(skill): add AI diagnostics entry for IMAP/SMTP connectivity failures` 展示了一个新方向：在连接失败时，用AI助手预填充错误上下文并引导用户解决。这种“AI辅助运维”功能未来可能推广到更多模块。

## 用户反馈摘要

- **正面反馈**: 暂无明确正面评论，项目功能进展主要由开发者驱动。
- **负面/痛点反馈**:
    - **“咱们客户端未给出输入界面，导致无法成功配置”** - 用户 `@iwos2610` 在 #1878 中描述了微信配置流程的卡点，表达了对交互设计不完善的失望。
    - **“需要改进会员登录方式”** - 用户 `@zhahongan-ctrl` 在 #1903 中表达了因登录失败而无法使用付费模型的强烈不满，并提出了改进诉求。

## 待处理积压

- **Issue #1878 (IM机器人 微信接口配置)**
  (https://github.com/netease-youdao/LobsterAI/issues/1878)
  - **创建**: 2026-04-30 | **最后更新**: 2026-05-07
  - **分析**: 该Issue已经存在8天，且是来自真实用户的配置阻塞性问题。考虑到今日的大量合并工作，建议维护者在完成版本发布后，优先为这个功能缺失的Issue分配资源，安排PR修复。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-08)

## 今日速览

Moltis 项目在今日表现活跃，共处理了 14 条 Issue 和 PR 更新，其中关闭了 4 个 Issue 和合并/关闭了 9 个 PR，发布了 2 个新版本。社区贡献者和核心团队围绕**语音功能增强**、**节点身份认证**、**沙箱兼容性**和**工具调用诊断**等关键领域推进了多项重要工作。项目整体健康度良好，Bug 修复迅速，功能迭代节奏紧凑。

## 版本发布

今日发布了两个版本：
- **20260507.05**: [查看发布](https://github.com/moltis-org/moltis/releases/tag/20260507.05)
- **20260507.04**: [查看发布](https://github.com/moltis-org/moltis/releases/tag/20260507.04)

两个版本均为当天的补丁级发布，主要集成了上述合并的 PR 内容，特别是 **Bug 修复**（如浏览器沙箱 Docker 兼容性、工具参数诊断）和**功能增强**（Ed25519 节点身份、Codex 图片生成）。暂无破坏性变更，用户升级前建议查看 PR 详情确认是否涉及配置调整。

## 项目进展

今日合并/关闭的重要 PR 展示了项目在多个方向的显著推进：

1. **语音功能重大增强** (PR #981, #984)：新增 `whisper-local` 本地 STT 提供者（支持 faster-whisper-server、whisper.cpp 等），满足隐私敏感用户需求；同时为 OpenAI Realtime 语音模型添加引导支持，优化用户体验。由 @penso 贡献。

2. **节点间身份与信任体系** (PR #979, #976)：用 **Ed25519 挑战-响应机制**替代了原有的令牌认证，实现 SSH 风格的“首次信任 (TOFU)”模型。配套文档也同步更新，为 Moltis 作为去中心化个人代理服务器网络奠定了信任基础。

3. **沙箱架构扩展与兼容性修复** (PR #942, #980)：合并了支持远程和多种后端（Vercel、Daytona、Firecracker）的沙箱功能，解决了 Docker 环境中浏览器沙箱挂载失败的问题 (PR #980)，使 Moltis 能在更复杂的部署环境下稳定运行。

4. **新能力集成** (PR #982)：通过 Codex OAuth 集成了 **gpt-image-2 图片生成**功能，扩展了 Moltis 的 AI 能力边界。

5. **工具调用诊断修复** (PR #983)：修复了 Issue #963 中工具调用参数崩溃的问题，现在能保留空、错误、修复后的参数上下文，极大提升了开发者调试体验。

6. **电话功能推进** (PR #920)：Twilio 集成 PR 在等待近一周后合并，为 Moltis 增加了完整的电话呼叫能力。

## 社区热点

- **#984 [Open] feat(voice): surface OpenAI realtime model guidance** [链接](https://github.com/moltis-org/moltis/pull/984)
  - **状态**: 当前唯一未合并的 PR，由 @penso 提交，截止日报生成时尚未收到评论。
  - **分析**: 该 PR 进一步完善了语音功能，专注于 OpenAI Realtime 模型的配置引导。说明社区和团队对**语音交互体验**有较高期待，正在持续打磨。

- **#977 [CLOSED] [Bug]: Browser sandbox fails when Moltis runs in Docker** [链接](https://github.com/moltis-org/moltis/issues/977)
  - **状态**: 24小时内关闭，已有 fix PR #980 解决。
  - **分析**: 该 Bug 来自 Docker 环境下的用户，问题描述清晰，团队响应迅速。用户对在 Proxmox 等虚拟化环境中运行 Moltis 有实际需求，社区对**部署灵活性**关注度高。

- **#956 [CLOSED] [Feature]: Add image generation support via OpenAI Codex OAuth** [链接](https://github.com/moltis-org/moltis/issues/956)
  - **状态**: 5月2日提交，5月7日关闭（随 PR #982 合并）。
  - **分析**: 从提出到实现仅用了5天，体现了团队对用户功能请求的高效响应。用户提议的**图片生成**功能已被纳入，是 AI 代理能力的重要补充。

## Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| **高** | [#977](https://github.com/moltis-org/moltis/issues/977) | Docker中浏览器沙箱失败，影响容器化部署用户 | **已修复** (PR #980) |
| **高** | [#963](https://github.com/moltis-org/moltis/issues/963) | 工具调用参数崩溃导致执行失败，影响交互稳定性 | **已修复** (PR #983) |
| **低** | 依赖升级 | wasmtime 从 36.0.7 升级到 36.0.8 (PR #978) | **已合并** |

两项高严重性 Bug 均在当日得到修复并随版本发布，说明团队对稳定性问题高度重视，修复效率高。

## 功能请求与路线图信号

- **节点互联 & 身份协议**: Issue #973 提出了“**个人代理服务器互操作协议**”，包括身份发现、验证和能力交换。社区贡献者 @vystartasv 不仅提出了 PR，还补充了配套文档 (PR #976)。同日合并的 Ed25519 认证 PR (#979) 正好是实现该提议的核心组件，**强烈暗示这将是下一阶段路线图的重点方向**。

- **图片生成**: Issue #956 已通过 PR #982 实现，用户需求得到满足。

- **语音功能持续增强**: 尽管 #981 和 #984 已合并/进行中，但社区对语音支持的关注度持续升温（新增本地 Whisper、Realtime 模型支持），未来可能迎来更多关于**实时语音对话**、**多语言识别**的更新。

## 用户反馈摘要

- **正面反馈**：用户 @vystartasv 在 #976 和 #973 中表达了对 Moltis 作为“安全、沙箱化、本地优先”个人代理服务器的认可，并主动提出**身份互操作**这一前瞻性功能，表明核心用户对项目定位高度认同，愿意为生态建设贡献力量。
- **使用痛点**：Issue #963 和 #977 揭示了用户在**参数诊断**和**容器部署兼容性**方面的实际困扰。用户 @TLA020 详细描述了在 Proxmox 上运行 Docker 的具体环境，说明 Moltis 的部署场景已从纯本地扩展到更复杂的虚拟化环境。
- **持续需求**：用户 @bashrusakh 在 #956 中明确提出了图片生成需求，该需求在短期内被满足，体现了用户对“全能 AI 代理”的期待。

## 待处理积压

- **PR #984 [Open] feat(voice): surface OpenAI realtime model guidance**: 当前唯一开放且无评论的 PR，可能因发布临近而被搁置或正在内部评审中。建议维护者关注其状态，防止阻塞后续语音功能迭代。 [链接](https://github.com/moltis-org/moltis/pull/984)

---

**整体评估**: 项目活跃度高、迭代速度快、Bug 修复即时、社区参与度健康。建议用户升级至最新版本 `20260507.05` 以体验最新的 Bug 修复和功能。下一阶段值得关注的重点是**节点间通信协议**的成熟化，以及**语音/电话功能**的全面落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域的开源项目分析师，根据您提供的CoPaw项目数据，我已为您生成了2026年5月8日的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-05-08

## 1. 今日速览

今日项目整体活跃度处于**高位**，社区反馈与开发迭代并行。过去24小时内，共有50条Issue更新和31条PR更新，显示出较强的社区参与度和开发团队的响应能力。值得关注的是，**会话状态持久化、模型支持兼容性和多通道（微信、飞书）的稳定性**成为今日社区讨论和Bug修复的焦点。此外，多个针对UI/UX优化的PR已被合并，表明项目在持续打磨用户体验。项目未发布新版本，但修复性工作和新功能开发均在稳步推进。

## 2. 版本发布

无

## 3. 项目进展

今日共有19个PR被合并或关闭，项目在功能增强、稳定性修复和跨平台兼容性方面取得了实质性进展。

- **技能管理增强**：PR [#4091](https://github.com/agentscope-ai/QwenPaw/pull/4091) 已合并，为前端技能页面增加了**批量“启用”和“禁用”** 功能，直接回应了社区对管理效率提升的需求。
- **Windows平台兼容性修复**：PR [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) 修复了Windows桌面版打包时的冲突问题，解决了 `conda-pack` 与 `pip install qwenpaw[full]` 相互冲突导致构建失败的问题。
- **渠道与上下文传递优化**：PR [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) 和 [#4098](https://github.com/agentscope-ai/QwenPaw/pull/4098) 均已合并，解决了飞书渠道中**用户显示名称**无法传递到Agent环境上下文的问题，提升了Agent个性化交互的准确性。
- **核心功能修复**：PR [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) 修复了默认Agent名称被硬编码，忽略用户自定义配置的问题。PR [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) 修复了文件预览路径中的URL前缀错误剥离问题，间接回应了文件链接过期相关的Bug。
- **新功能探索**：PR [#4107](https://github.com/agentscope-ai/QwenPaw/pull/4107) 新增了Agent状态端点，可实时追踪Agent运行时状态、任务计数和执行时间戳。PR [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) 为模型管理模态框引入了可浏览的远程模型列表，替代了原有的“自动发现”按钮，提升了模型添加的便捷性。

## 4. 社区热点

今日社区讨论的核心围绕着 **Agent记忆与会话管理** 以及 **平台兼容性与易用性**。

1.  **Agent记忆力与长对话性能**：这是今日最受关注的议题。
    -   **切换Agent导致会话丢失**：Issue [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919)（评论数: 9）揭示了切换Agent后任务中断和Session丢失的问题，社区诊断出其根源是前端`lastChatIdByAgent`功能缺失。这暴露了多Agent协作场景下的一个关键体验断层。
    -   **长对话卡顿与不完整回复**：Issue [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059)（评论数: 8）报告了对话内容过长后AI无法完整回复，即使执行`/compact`命令也无济于事。Issue [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)（评论数: 7）则抱怨超多轮对话后页面滚动变得异常卡顿。这两个问题共同指向了**长上下文处理的性能和机制瓶颈**，是高级用户的核心痛点。

2.  **模型兼容性与供应商支持**：
    -   用户对**DeepSeek模型**和**火山引擎Coding Plan**的支持尤为关注。Issue [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051)（评论数: 5）反馈了DeepSeek模型`think`标签解析异常导致无回复。Issue [#1502](https://github.com/agentscope-ai/QwenPaw/issues/1502)（评论数: 7）和[#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753)（评论数: 8）则分别反映了火山引擎Coding Plan模型回答中断和期待官方支持的需求。这表明社区用户正在积极尝试不同的模型供应商，对 **“模型选择”的多样性和稳定性**有强烈需求。

## 5. Bug 与稳定性

今日报告的Bug主要集中在多通道稳定性和核心功能缺陷上，按严重程度排列如下：

-   **严重**：
    -   **会话数据丢失**：Issue [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) 和 [#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101) 均报告切换Agent后会话配置或聊天记录丢失，后者指出在升级到v1.1.5.post2后问题复现，暗示可能存在回归Bug。目前暂无对应修复PR。
    -   **微信渠道消息丢失**：Issue [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) 报告在正常网络下，微信渠道Agent会突然停止响应。PR [#4106](https://github.com/agentscope-ai/QwenPaw/pull/4106) 正在尝试修复cron发送时消息合并缓冲区的问题，或许与之相关。
    -   **Streaming模型导致ReAct循环异常**：Issue [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) 发现使用MiMo/DeepSeek等Streaming模型时，Agent会陷入工具调用的死循环并重复响应。已关闭但未修复，开发团队可能需要更多信息。

-   **中等**：
    -   **飞书消息重复处理**：Issue [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) 指出飞书消息缺乏去重机制。
    -   **文件链接过期**：Issue [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) 报告聊天记录中的图片/附件链接一天后过期，无有效提示。PR [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) 已修复了其中一个相关的URL处理问题，但核心的Token过期策略问题可能仍需评估。
    -   **Cron任务渠道KeyError**：Issue [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) 报告创建cron任务时指定`weixin`渠道会报`KeyError`。

-   **低等**：
    -   **文件名中文与数字空格异常**：Issue [#4104](https://github.com/agentscope-ai/QwenPaw/issues/4104) 报告Agent获取包含中英文数字的文件名时，会在中文与数字间错误地插入空格。
    -   **Agent名称硬编码**：Issue [#4099](https://github.com/agentscope-ai/QwenPaw/issues/4099) 指出会话初始化中的Agent名称被硬编码为“Friday”，PR [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) 已针对默认Agent修复了此问题。

## 6. 功能请求与路线图信号

用户提出的新功能需求显示了社区对 **精细化管理** 和 **接入更多能力** 的强烈渴望。

-   **内置技能/MCPs**：Issue [#280](https://github.com/agentscope-ai/QwenPaw/issues/280)（评论数: 27）是该项目的长期核心议题，讨论哪些常用技能和MCP应预装以提升“开箱即用”体验。今日无新评论，但这是路线图的关键考量。
-   **工作区与配置分离**：Issue [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) 和 [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) 都建议将核心配置文件与用户工作区分离，并允许自定义存储路径，以避免用户误操作导致系统故障。这是一个重要的用户体验改进方向。
-   **增加模型供应商**：Issue [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) 请求添加对Google Vertex AI Gemini的支持。这符合社区对更多样化云服务的需求趋势。
-   **增强File模块**：Issue [#4087](https://github.com/agentscope-ai/QwenPaw/issues/4087) 希望增强File模块功能，使其不仅能预览`.md`文件，还能处理更多文件类型。该项目获得了一个👍。
-   **Web控制台升级**：Issue [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235)（评论数: 2, 👍: 1）期望能通过Web控制台进行远程升级，这是一个提高运维便利性的请求。

从PR来看，PR [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819)（可浏览远程模型列表）和PR [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238)（实验性PlanNotebook任务规划支持）是可能被纳入下一版本的重要新功能。

## 7. 用户反馈摘要

从今日的Issues中，我们可以听到用户清晰的声音：

-   **痛点**：用户对**长对话的性能和可靠性**感到沮丧，认为`/compact`指令无效且必须开启新对话的体验很差 (`#4059`)。多Agent切换带来的**会话记忆丢失**是一个被多次提到的“断点” (`#3919`, `#4101`)。**微信渠道的不稳定性**（消息丢失、不同步）直接影响日常使用 (`#4056`, `#4000`)。
-   **使用场景**：用户正在将CoPaw用于**复杂的、项目/工程级别的代码迭代**，这导致了超长的上下文和大量的文件读写 (`#3350`)。这也解释了为何**工作区管理**和**模型稳定性**成为核心诉求。
-   **满意之处**：用户对**自由添加模型和技能**的能力表示认可，但普遍认为配置步骤过于繁琐 (`#4036`)。部分用户对**开源社区的反馈和开发进度**保持关注和期待 (`#4024`)。

## 8. 待处理积压

以下为需要项目维护者重点关注、长期未解决或对社区影响重大的议题：

-   **状态：悬而未决的设计讨论**
    -   [#280](https://github.com/agentscope-ai/QwenPaw/issues/280)：**核心议题：哪些技能和MCPs应该内置？** 评论数高达27，是社区共识和项目发展方向的重要参考，需要维护者给出明确的官方回应或路线图计划。
    -   [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) / [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067)：**工作区与配置分离**。这个需求多次被提出，直接关系到用户数据安全和系统易用性，值得设计一个优雅的实现方案。

-   **状态：需要开发团队关注的Bug与回归问题**
    -   [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) / [#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101)：**切换Agent会话丢失/配置丢失**。这是一个严重的功能性回归，特别是#4101报告在最新版本中依然存在，需要立即排查。
    -   [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056)：**微信渠道消息丢失**。作为重要渠道之一，稳定性问题需要优先处理。
    -   [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)：**超长对话页面卡顿**。这影响了核心高级用户群体的体验，需要前端或底层渲染机制的优化。

-   **状态：待合并的重要PR**
    -   [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046)：**feat(security): add rule level auto deny**。引入安全规则级别的自动拒绝能力，对Tool Call的安全管控是重要增强。
    -   [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819)：**feat: support browsable remote model listing**。改进模型添加流程，直接提升用户体验。
    -   [#3916](https://github.com/agentscope-ai/QwenPaw/pull/3916)：**fix(backup): restore secrets on Docker volume mount points**。修复Docker部署下的备份恢复问题，对容器化部署用户至关重要。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的ZeroClaw项目数据，我为您生成2026年5月8日的项目动态日报。

---

## ZeroClaw 项目动态日报 — 2026-05-08

### 1. 今日速览

ZeroClaw 项目今日处于 **高活跃度** 状态，社区贡献者和维护者正在密集地处理积压的Issues和PRs，同时推进关键功能开发。过去24小时内，开发者们主要围绕 **桌面端体验集成** 和 **底层架构重构** 两大核心展开。桌面端首次运行引导流程（#6506）和截图功能（#6507）的PR已被合并，标志着用户体验的显著提升；同时，一个涉及核心提供商架构重构的高风险Feature Issue (#5937) 正在社区引发热议。尽管未发布新版本，但针对**v0.7.5版本的发布修复**（#6502）正在进行中，表明项目节奏稳健，正处于一个大版本发布前的冲刺期。

### 2. 版本发布

**无新版本发布。**

*注：项目当前正在积极修复CI问题以推进`v0.7.5`版本。*

### 3. 项目进展 (今日重要合并/关闭项)

过去24小时内，项目在**桌面端**和**稳定性**方面取得了关键进展：

- **桌面端首次运行引导体验落地**：PR #6506 (`feat(desktop): macOS onboarding wizard...`) 已被合并。这是一个大型PR（size: XL），为macOS桌面应用增加了一个8步的首次运行引导向导，指导用户授予TCC权限，降低了新用户的使用门槛。这对于改善桌面端新用户的上手体验至关重要。
- **桌面端原生能力扩展**：PR #6507 (`feat(desktop): take_screenshot and run_applescript Tauri commands`) 已被合并。该PR在桌面端增加了截图和运行AppleScript的Tauri命令，为远程控制Mac机器铺平了道路。
- **内存模块并发稳定性修复**：PR #6432 (`fix(memory): tolerate concurrent sqlite schema migrations`) 正在推进。该PR旨在修复SQLite内存模块在并发启动时可能发生的Schema初始化失败问题（Issue #6431），直接提升了核心组件的健壮性。

### 4. 社区热点

过去24小时内的讨论最为集中的是以下两个Issue：

- **Issue #5937 [Feature]: refactor: Unify providers architecture** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5937))
  - **讨论热度：** 8条评论
  - **诉求分析：** 这是一个长期存在的核心重构提案。社区用户 `NiuBlibing` 发起的讨论直击痛点：当前不同LLM提供商（providers）的`reqwest`客户端管理和模型参数构建方式不一致，导致代码重复和配置碎片化。该Issue虽已存在近三周，但因其“高风险”标签和潜在的重大影响（可能涉及破坏性变更），社区仍在密切关注。这是项目未来架构演进的**关键信号**。

- **Issue #6246 [Bug]: WhatsApp Web channel** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6246))
  - **讨论热度：** 6条评论
  - **诉求分析：** 用户报告了一个严重的功能阻断问题（S1 - workflow blocked）：WhatsApp Web通道在4月底的服务器端协议升级后，配对成功但消息无法收发。这是一个典型的第三方依赖变更导致的兼容性问题，社区用户急切希望得到修复。该Issue的高优先级（P1）和高相关性（直指核心通信渠道）使其成为当前最受关注的Bug之一。

### 5. Bug 与稳定性

过去24小时报告了多个新Bug，按严重程度排列如下：

- **S0 - 数据丢失/安全风险 (1个)：**
  - **#6418 [已关闭]** Fallback Providers 凭证继承失败 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6418))：当主LLM服务失败触发故障转移时，后备提供商无法从`config.toml`继承凭证，属于严重配置漏洞。*该Issue已被标记为重复，表明已有类似上报。*

- **S1 - 工作流阻断 (2个)：**
  - **#6516 [新]** ACP "cwd" 变更锁定Agent读取技能文件 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6516))
  - **#6472 [已接受]** Gateway 无法使用 Postgres ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6472))：Gateway组件在尝试连接Postgres数据库时因Runtime冲突崩溃。

- **S2 - 行为降级 (3个)：**
  - **#6520 [新]** Gemini CLI 提供商因参数错误崩溃 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6520))
  - **#6431 [进行中]** SQLite内存模块并发启动失败 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6431))：*已有对应修复PR #6432。*
  - **#6360 [已接受]** Telegram频道中Prompt缓存功能失效 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6360))

### 6. 功能请求与路线图信号

社区对功能的需求持续高涨，以下新提出的功能请求指明了用户的迫切期望：

- **#6522 [新]** Web Chat 工具审批UI ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6522))：用户请求为Web端聊天界面增加监督模式下的工具调用审批界面。*问题中的 “`approval_request` 帧” 表明后端已完善，前端是体验短板。*
- **#6518 [新]** 对自定义/OpenAI兼容提供商的一等公民支持 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6518))：用户明确表达添加新提供商（如Kimi）的非直观性，呼吁平台提供更简便、标准化的接入方案。
- **#6510 [已接受]** Cron任务 `delivery.mode` 优化 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6510))：用户希望Cron任务在“公告”模式下，只发送最终结果，而非所有中间思考过程，以减少冗余输出。*该请求已被接受，很可能进入下一版本。*

**路线图信号：** 结合已合并的桌面端PR（#6506, #6507），可以清晰看出项目正在**战略性地聚焦桌面端体验**，并**寻求建立更健壮、统一的提供商架构**。

### 7. 用户反馈摘要

- **痛点**：
  - **配置与上手复杂**: 用户对添加非标准提供商（如Kimi #6518）感到困难，对新用户上手（#6320）仍有依赖CLI的抱怨。Docker文档错误（#6393）也增加了部署障碍。
  - **关键渠道不稳定性**: WhatsApp (#6246) 和 Telegram (#6360) 等核心通信渠道的特定Bug直接影响了用户的核心工作流。
  - **工具执行问题**: `Shell`工具在最高权限下被拒绝（#6434）以及`web_search`工具在新安装环境不可用（#6373）等问题，表明安全和工具执行逻辑仍需打磨。

- **满意点**：
  - **桌面端体验**: 多位用户（`theonlyhennygod`）围绕桌面端提出了一系列改进建议(如#6465, #6329, #6339, #6349)，说明桌面端用户活跃且认可其发展方向。

### 8. 待处理积压

以下是一些长期未响应或状态为“维护者待审核”的重要Issue/PR，提醒维护者关注：

- **关键Issue：**
  - **#6375 [V3环境变量覆盖机制]** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6375)): 发布已3天，`status:accepted`但无assignee。这是恢复对部署友好的配置方式，对于生产环境至关重要。
  - **#6371 [WhatsApp群组白名单]** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6371)): 高优先级（P1）功能请求，对WhatsApp频道的安全使用必不可少。

- **卡在“作者待操作”的PR：**
  - **#6502 [修复v0.7.5发布CI]** ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6502)): 版本发布的关键阻塞点，需要作者更新。
  - **#4944 [工具包装器迁移]** ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4944)): 一个多月前提出的重构PR，体量较大，悬而未决可能会造成后续合并冲突。
  - **#6117 [Codex原生Responses API支持]** ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6117)): 同样悬停近两周，若社区对OpenAI Codex的依赖度高，此PR应优先推动。

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*