# OpenClaw 生态日报 2026-04-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-28 04:37 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 OpenClaw 项目数据生成的 2026-04-28 项目动态日报。

---

## OpenClaw 项目日报 | 2026-04-28

### 1. 今日速览

今日 OpenClaw 项目活跃度极高，24小时内处理了超过500条 Issue 和500条 PR，显示出强大的社区动力和维护效率。尽管新版本发布频率有所放缓（今日2个），但主要精力集中在修复近期更新引入的回归性错误以及堆积的 PR 合并上，项目整体正处于“高修复、高迭代”的稳定期。社区用户对 Beta 版本的质量尤为关注，多个关于“消息重复”、“插件配置”和“核心模型工具失效”的 Bug 报告得到了快速响应。新发布的 v2026.4.26 版本在语音对话和模型路由方面进行了重要增强。

### 2. 版本发布

今日发布了两个新版本，主要更新集中在语音交互和底层基础设施。

- **v2026.4.26**
    - **核心更新**: 为控制 UI 的 Talk 功能引入了通用的浏览器实时传输合约，支持 Google Live 浏览器的 Talk 会话（使用受限的临时令牌），并新增了 Gateway 中继，允许后端驱动的实时语音插件运行。这对于集成外部语音服务和自建语音节点意义重大。
    - **其他更新**: CLI/模型层增加了通过提供商过滤后的模型列表路由功能，优化了模型选择体验。
    - **致谢**: 感谢贡献者 `@VACInc`。

- **v2026.4.25**
    - **核心更新**: 对语音回复的文本转语音（TTS）功能进行了全面升级。
        - 新增 `/tts latest` 命令，支持聊天级别自动 TTS 控制。
        - 支持为角色（Personas）、代理和账户进行 TTS 覆盖配置。
        - 集成了多个新的 TTS 提供商：Azure Speech、小米、本地 CLI、Inworld、Volcengine 和 `ElevenLabs v3`。
    - **致谢**: 感谢 `@leonchui`、`@zoujiejun`、`@solar2ain` 等贡献者。

**迁移注意事项**: 使用 Google Chat Webhook 的用户需注意，上版本引入的 `appPrincipal` 配置项仍为必填项，请确保在配置中正确添加，否则可能导致静默认证失败。

### 3. 项目进展

今日合并/关闭了大量 PR，主要集中在 Bug 修复和功能稳定性增强上。

- **核心逻辑修复**:
    - [PR #43061](https://openclaw/openclaw/pull/43061)：修复了3个高影响 Bug，包括代码块缩进错误、自定义提供商模型崩溃以及 `tools.profile: "minimal"` 暴露文件系统工具的问题。
    - [PR #42961](https://openclaw/openclaw/pull/42961)：解决了 OpenRouter 上 Anthropic 模型系统提示词缓存（`cacheRetention`）设置被忽略的问题，确保缓存行为可控。
    - [PR #42998](https://openclaw/openclaw/pull/42998)：修复了 Cron 任务在执行成功后由于原始 stdout 输出而导致任务重复运行的问题。
- **安全与配置增强**:
    - [PR #73264](https://openclaw/openclaw/pull/73264)：修复了工作区环境变量注入攻击的路径安全漏洞，提升了服务安全性。
    - [PR #42978](https://openclaw/openclaw/pull/42978)：增加了对 `bailian` 提供商 API 密钥环境变量的支持，简化了其配置流程。
- **功能与体验优化**:
    - [PR #43165](https://openclaw/openclaw/pull/43165)：在 Web UI 的会话列表和频道卡片中增加了频道图标，提升了视觉辨识度。
    - [PR #42937](https://openclaw/openclaw/pull/42937)：支持为每个代理单独设置 `dmScope` 覆盖，提供了更灵活的私信消息路由控制。
    - [PR #43063](https://openclaw/openclaw/pull/43063)：统一了 `openclaw models status --json` 命令中提供商的账单数据结构，方便进行成本和用量监控。

**项目进展总结**: 项目在经历了数日的功能爆发期后，今日完成了一次集中的“防守反击”。不仅解决了上周发布的多个回归性 Bug，还对安全防线和配置灵活性进行了巩固，项目健康度和代码质量得到显著提升。

### 4. 社区热点

今日社区讨论热度最高的是几个严重 Bug 的反馈，体现了用户对新版本稳定性的高度关注。

- **#71761 - [Bug]: 消息重复注入** (评论: 6, 👍: 2)
    [Issue链接](https://openclaw/openclaw/issues/71761)
    - **背景**: 自 v2026.4.24 更新后，用户反馈所有入站消息（来自 WebChat、QQ 等）都被重复注入到代理上下文中，导致代理回复两次并消耗双倍 Token。
    - **分析**: 这是一个严重的回归性 Bug，直接影响用户体验和成本，社区迅速聚集。用户明确指出不是 NapCat 插件本身的问题，将矛头指向了 OpenClaw 核心层。这反映出用户对核心功能稳定性有极高标准。

- **#53959 - [Bug]: openai-codex 工具执行失效** (评论: 20, 👍: 4)
    [Issue链接](https://openclaw/openclaw/issues/53959)
    - **背景**: 自 v2026.3.23-2 更新后，`openai-codex/gpt-5.3-codex` 模型停止执行任何工具调用（exec、MCP、web search）。代理承认请求但无实际操作。
    - **分析**: 这是当日评论最多的 Issue，虽然已被关闭，但其高互动量表明这是一个广泛影响 Codex 用户的问题。尽管生成式 AI 模型行为多变，但社区首先怀疑是 OpenClaw 的更新导致的兼容性问题，这要求项目团队在更新时需进行更广泛的回归测试。

- **#64454 - [Bug]: Slack 子代理消息路由错误** (评论: 14, 👍: 1)
    [Issue链接](https://openclaw/openclaw/issues/64454)
    - **背景**: 在 Slack 的线程中，当主代理生成子代理时，子代理的完成消息会错误地发送到主频道而非原线程。
    - **分析**: 这是 Slack 工作场景中的高频痛点。用户在复杂对话中依赖线程结构，该 Bug 破坏了对话的上下文连贯性。该 Issue 被标记为“Beta release blocker”，表明社区和开发者都认为此问题应在下一个 Beta 版本前修复。

### 5. Bug 与稳定性

今日报告的 Bug 数量较多，集中在回归性错误和特定插件的交互问题上。以下按严重程度排列：

| 严重程度 | Bug 摘要 | Issue 链接 | 是否有 Fix PR？ |
| :--- | :--- | :--- | :--- |
| **严重** | 所有频道消息被双重注入代理上下文，导致双倍回复和 Token 消耗 (v2026.4.24) | [#71761](https://openclaw/openclaw/issues/71761) | 未提及 |
| **严重** | `openai-codex` 模型在上次更新后停止执行所有工具 | [#53959](https://openclaw/openclaw/issues/53959) | 未提及 |
| **高** | Slack 扩展中子代理完成消息未遵循线程路由 | [#64454](https://openclaw/openclaw/issues/64454) | 未提及 |
| **高** | `kimi` 提供商默认 API 格式配置错误 (应使用 `openai-completions`) | [#61379](https://openclaw/openclaw/issues/61379) | 未提及 |
| **中** | Gateway 重启后，完成的工作未通知用户 | [#51130](https://openclaw/openclaw/issues/51130) | 未提及 |
| **中** | 飞书 `read` 图片工具结果在最终发送时丢失媒体附件 | [#41744](https://openclaw/openclaw/issues/41744) | 未提及 |
| **中** | TensorRT-LLM 端点的 JSON 输出与 OpenClaw 不兼容 | [#67356](https://openclaw/openclaw/issues/67356) | 未提及 |

### 6. 功能请求与路线图信号

除了 Bug 修复，社区也提出了一些有潜力的功能请求，其中部分可能很快被纳入开发路线图。

- **#52621 - [Feature]: 文件系统访问控制** (评论: 8, 👍: 1)
    [Issue链接](https://openclaw/openclaw/issues/52621)
    - **诉求**: 用户希望在配置中添加 `allowedPaths` 和 `denyPaths`，以限制代理及其工具（如 Codex、Claude Code）可以读写的文件路径。
    - **路线图信号**: 这是一个与现有 `exec` 安全机制互补的核心安全功能。考虑到项目对安全性的重视（参见今日修复的 PATH 注入漏洞），该功能很可能在新的安全迭代周期中被采纳。

- **#42475 - [Feature]: 按代理的成本预算执行** (评论: 5, 👍: 0)
    [Issue链接](https://openclaw/openclaw/issues/42475)
    - **诉求**: 在 Gateway 层面增加可选的每日/每月每代理成本上限，以防止意外的高额 API 调用费用。
    - **路线图信号**: 随着个人用户和企业用户对成本越来越敏感，这是一个非常实用的功能。项目已经在 `session-cost-usage.ts` 中追踪会话成本，将此功能扩展到代理层面是顺理成章的下一步。结合今日关闭的类似用例，该功能很可能被排上日程。

- **#41744 - [Bug/Feature]: 飞书图片附件丢失**
    - **分析**: 虽然这是一个 Bug，但用户要求的是 `read` 工具在飞书场景下的功能完整性。该 Issue 已经开放了超过一个月，如果下版本仍未修复，可能会影响飞书用户的信任度。

### 7. 用户反馈摘要

从今日的 Issues 和 PR 讨论中，可以提炼出以下用户反馈：

- **痛点**:
    - **升级恐惧症**: “After updating to … stopped working” 和 “roll back to” 等语句频繁出现，表明用户对版本升级感到不安，特别是当升级导致核心功能（如工具调用）失效时。
    - **配置扩散**: “kimi provider config defaults to `anthropic-messages`” 和 “Google Chat `appPrincipal` is undocumented” 反映出新加入的配置项对用户不够友好，容易造成配置错误和体验中断。
    - **监控盲区**: 多个 Issue 提到 “Context counter shows 0/200k” 或 “Gateway restarts … work not notified”，表明用户缺少有效的系统运行状态和故障排查工具。

- **满意度**:
    - **快速响应**: 许多 Bug 报告在几天甚至几小时内就被标记为 `CLOSED`，社区对维护团队的响应速度感到满意。
    - **功能丰富度**: v2026.4.25 的 TTS 升级收到了大量贡献者的致谢，表明社区对新功能的创新速度（特别是对 ElevenLabs v3 等第三方集成的支持）是认可的。

### 8. 待处理积压

以下是一些长期未关闭或未响应的重要 Issue/PR，可能值得维护团队关注：

- **长期未决 Bug**:
    - [#41494 - [Bug]: Gemini 推理过程泄露到聊天中](https://openclaw/openclaw/issues/41494)
        - 自3月9日起开放，该问题持续1.5个月，影响所有使用 Gemini 模型的核心用户群体。
    - [#40786 - [Feature]: 备份 CLI 支持 `.gitignore` 排除模式](https://openclaw/openclaw/issues/40786)
        - 自3月9日起开放，这是一个提升备份实用性的基础功能，长时间未决可能会影响用户的数据管理体验。
    - [#41555 - [Bug]: Opus 模型陷入推理循环，需要切换模型恢复](https://openclaw/openclaw/issues/41555)
        - 自3月10日起开放，这是一个影响旗舰模型使用的严重 bug，长期未修复可能导致用户对 Claude Opus 模型的信心下降。

- **长期未合并 PR**: 以下 PR 处于开放状态已超过一个月，或许需要重新评估其优先级或合并状态。
    - [#43238 - feat(context-pruning): add rolling pruning mode](https://openclaw/openclaw/pull/43238)
    - [#43176 - agents: cap broad home find exec scans](https://openclaw/openclaw/pull/43176)
    - [#43145 - feat(agent): expose run trace timelines](https://openclaw/openclaw/pull/43145)

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目资深技术分析师，以下是根据您提供的各项目2026-04-28动态数据生成的横向对比分析报告。

---

### **个人AI助手与智能体开源生态全景分析报告 (2026-04-28)**

#### **1. 生态全景**

今日，个人AI助手与自主智能体开源生态呈现出 **“繁荣、分化、安全觉醒”** 的鲜明特征。一方面，以OpenClaw、NanoBot、PicoClaw等为代表的核心项目社区贡献爆炸式增长，Issues和PR处理量普遍进入“百级”时代，显示出开发者对这一赛道的极高热情。另一方面，生态内部开始出现明显的**功能侧重分化**：有的项目聚焦于**多通道集成与鲁棒性**（如NanoClaw、Moltis），有的重注**核心架构革命**（如IronClaw的Reborn架构），有的则在**语音交互与开发者体验**上深耕（如OpenClaw的TTS升级）。同时，**“安全”成为全生态的共同议题**：从Filesystem访问控制、PATH注入修复，到消息路由防泄漏和审批流程强化，各项目都在为即将到来的企业级普及筑牢防线。总体而言，生态正从“功能堆叠”的野蛮生长阶段，迈向 **“架构精进、安全加固、体验优化”** 的成熟化阶段。

#### **2. 各项目活跃度对比**

| 项目名称 | Issues (24h) | PR (24h) | Release (24h) | 健康度评估 | 活跃分层 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ | 2 | 🟢 **极佳** | 核心引领 |
| **NanoBot** | 11 | 31 | 0 | 🟢 **良好** | 高速迭代 |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 **良好** | 高速迭代 |
| **PicoClaw** | 33 (活跃) | 120 / 57 (合并) | 0 | 🟡 **健康** (PR积压) | 高速迭代 |
| **NanoClaw** | 7 (新开) | 6 (合并) | 0 | 🟢 **良好** | 稳健推进 |
| **IronClaw** | 35+ | 284 (待合并) | 0 | 🟢 **极佳** (高风险重构) | 深度重构 |
| **LobsterAI** | 低 | 32 | 1 (4.25) | 🟢 **良好** | 质量巩固 |
| **Moltis** | 6 | 17 | 0 | 🟢 **良好** | 稳健推进 |
| **CoPaw** | 99 (更新) | 99 (更新) | 0 | 🟢 **良好** | 高速迭代 |
| **ZeroClaw** | 39 (活跃) | 41 (待合并) | 0 | 🟡 **健康** (PR积压严重) | 快速迭代 |
| **NullClaw** | - | - | - | ⚪ **无活动** | 停滞 |
| **TinyClaw** | - | - | - | ⚪ **无活动** | 停滞 |
| **ZeptoClaw** | - | - | - | ⚪ **无活动** | 停滞 |

**结论**：OpenClaw以无可匹敌的社区规模（500+ Issues/PRs）稳居生态核心。NanoBot、Hermes Agent、PicoClaw、CoPaw和ZeroClaw构成了第二集团，保持着极高的迭代速度。IronClaw则以其庞大的PR积压（284 pending）和架构级重构（Reborn）显示出其深度和复杂性。Moltis和LobsterAI则在稳健推进中表现出良好的质量控制。

#### **3. OpenClaw 在生态中的定位**

- **绝对核心与参照系**：OpenClaw是目前生态中**社区规模最大、迭代速度最快、功能最全面**的项目，其Issues/PRs数量是其他活跃项目的10倍以上。它已成为该领域的事实标准（core reference），其他项目的很多议题和功能都在围绕或对标它。
- **技术优势**：
    - **生态丰富度**：拥有最广泛的第三方服务集成（TTS、模型、网关），例如其对`ElevenLabs v3`、`Azure Speech`、`Gateway relay`的支持，集成深度和广度均领先。
    - **语音交互**：v2026.4.26版本引入的`Talk`功能通用合约和实时语音中继，在语音交互领域迈出了关键一步，领先于多数竞争对手。
    - **社区响应与质量**：尽管体量巨大，但核心团队仍能高效处理回归性Bug（如工具执行失效、消息重复），维持了极高的代码质量。
- **差异点**：与NanoBot、PicoClaw等更轻量的项目相比，OpenClaw的复杂度更高，配置项更丰富（如用户抱怨的`appPrincipal`配置），这带来强大功能的同时也增加了用户的上手难度。

#### **4. 共同关注的技术方向**

| 共同技术方向 | 涉及项目 | 具体社区诉求 |
| :--- | :--- | :--- |
| **外部/长期记忆** | **Hermes Agent** (`#6323`)、**OpenClaw** (`#52621`)、**CoPaw** (`#3843`) | 用户普遍希望智能体能跨越会话边界持久化重要信息（外部记忆”，Mempalace），并能安全地访问本地文件系统。 |
| **多通道/IM集成深度与安全** | **NanoBot** (`#3488`)、**NanoClaw** (`#2058`)、**CoPaw** (`#3869`)、**ZeroClaw** (`#6130`) | 各项目都在积极扩展Telegram、Discord、微信、企微等渠道，但核心痛点在于**跨渠道消息路由错误**、**附件兼容性**（Telegram`octet-stream`）和**审批/命令等核心操作在移动端的缺失**。 |
| **安全与访问控制** | **NanoBot** (`#3493`)、**OpenClaw** (`#52621`)、**NanoClaw** (`#2029`)、**IronClaw** (`#2997`) | 安全成为所有项目的共通焦虑。诉求包括：文件系统白名单、容器资源限制、WebUI远程部署安全加固、以及防止API Key泄露和静默认证失败。 |
| **语音交互** | **OpenClaw**、**LobsterAI** | OpenClaw在TTS/ASR上大踏步前进，PicoClaw社区也在大力呼吁（`#1648`），语音正成为智能体交互的标配。 |
| **成本监控与预算控制** | **OpenClaw** (`#42475`)、**ZeroClaw** (`#6001`) | 随着API调用成为常态，用户对**每Agent/每会话的成本上限、Token消耗实时显示**的需求变得迫切，这直接关系到个人用户和企业的采用成本。 |
| **任务/流程可视化** | **Hermes Agent** (`#16102`)、**CoPaw** (`#3889`)、**OpenClaw** (CLI路由) | 社区不再满足于“黑盒”执行，希望看到智能体的思考过程、任务进度和状态管理（看板、进度钩子）。 |

#### **5. 差异化定位分析**

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型平台**：语音、多模型、复杂网关、企业级集成 | 高级开发者、企业、寻求最强功能的极客 | 架构最为复杂，采用**网关-中继-代理**层级模型，配置丰富但上手门槛高。 |
| **NanoBot** | **轻量高效型**：快速部署、核心功能完善、社区友好 | 个人开发者、快速原型验证 | 架构相对简洁，依赖管理清晰，`/history`等命令体现了对快速交互体验的重视。 |
| **Hermes Agent** | **外部记忆与协作型**：MCP工具桥梁、持久记忆、看板协作 | 注重工作流和长期任务的开发者 | 拥有独特的`Mempalace`记忆系统和`Kanban`看板设计，强化了作为**任务中心**的定位。 |
| **NanoClaw** | **容器化/DevOps友好型**：强调容器资源管控、调度系统健壮性 | 运维人员、DevOps场景、大规模部署 | 架构核心围绕**容器调度**，有精细的容器资源限制和任务调度GC，对资源隔离和稳定性要求高。 |
| **PicoClaw** | **移动端/嵌入式先行**：LM Studio连接、Android App体验 | 移动端用户、本地模型爱好者 | 重点优化了在**低算力设备**和**移动端**的部署与连接体验，区别于纯Server-Side架构。 |
| **IronClaw** | **企业级安全与架构革命**：**Reborn架构**、Fail-Close安全、审计日志 | 对安全、审计、架构稳定性有极高要求的企业 | 架构最为**重型和严谨**，通过`ironclaw_authorization`等模块实现细粒度授权，重构幅度大（Reborn）。 |
| **LobsterAI** | **Windows与企业管理**：修复Windows兼容性问题、Cowork模式配置隔离 | Windows用户、企业级多账户管理 | 强调**Cowork模式**下的会话隔离和配置一致性，并专注于修复Windows平台的安装和运行时问题。 |
| **Moltis** | **架构简化与前端体验**：移除主Agent概念、自动化代码索引、Cmd+K快捷键 | 追求极致开发体验和代码效率的极客 | 核心创新在于**软件架构的持续简化**和**前端交互的工程师向设计**（如Cmd+K、UI重构）。 |
| **CoPaw** | **IM渠道深度绑定**：企微命令、QQ/飞书语音、异步会话标题 | IM重度用户、国内生态 (钉钉/飞书/企微) | 与**中国国内IM生态（钉钉、飞书、企业微信）** 的集成最为深入，注重解决本地化渠道痛点。 |
| **ZeroClaw** | **门类项目 与 开放协议驱动**：ACP协议v1、Webhook工具、多语言文档 | 协议贡献者、开放式集成开发者 | 核心在于推动**开放通信协议（ACP）** 的迭代，并以此为核心构建渠道和工具生态，社区贡献非常活跃。 |

#### **6. 社区热度与成熟度分层**

- **第一梯队：核心引领与深度重构 (OpenClaw, IronClaw)**
    - 社区体量巨大（OpenClaw）或架构极其复杂（IronClaw的284 pending PRs）。
    - **共同特征**：拥有完善的CI/CD、E2E测试，并处于向更安全、更健壮架构演进的“质量巩固”阶段。
    - **风险**：大型重构可能引入短期副作用，需要强力的核心维护者和社区协作。

- **第二梯队：高速迭代与功能膨胀 (NanoBot, PicoClaw, NanoClaw, CoPaw, ZeroClaw, Moltis)**
    - **共同特征**：PR和Issues处理量在两位数到三位数之间，大量新功能和修复被快速引入。社区活跃，贡献者如潮水般涌入。
    - **健康度**：整体健康，但部分项目面临**PR积压**（PicoClaw, ZeroClaw高达40+ pending），可能导致高质量社区贡献合入延迟，挫伤贡献者积极性。CoPaw则是典型的“修复+迭代”双线并进，状态最佳。

- **第三梯队：活跃停滞 (NullClaw, TinyClaw, ZeptoClaw)**
    - 24小时内无任何活动，表明项目可能已进入“休眠期”或维护者精力转移。在快速发展的生态中，这类项目风险极高，不建议新用户选择作为主力工具。

- **特例：质量巩固型 (LobsterAI)**
    - 虽未进行大规模功能开发，但其PR全部用于修复Windows兼容性、性能问题和配置一致性。这表明其已进入 **“版本发布后的修补与完善”阶段**，产品成熟度较高，但创新速度放缓。

#### **7. 值得关注的趋势信号**

1.  **“移动端优先”与“社交渠道原生”成为刚需**：NanoClaw对Telegram、Signal的深度追求，CoPaw对钉钉/飞书的执着，以及PicoClaw对Android和LM Studio的优化，都表明智能体的战场已从Web后台转移到了手机屏幕。**开发者需考虑“移动端优先”的API设计和交互模型。**

2.  **从“如何集成”到“如何安全地集成”**：文件系统访问控制、容器资源限制、API Key脱敏、审批流程强化——这些不再是个别项目的独有诉求，而是生态的普遍共识。**智能体开发者必须将“安全审计”作为功能开发的准出标准之一。**

3.  **外部记忆（Memory）将成为智能体“智商”的分水岭**：Hermes Agent的Mempalace、OpenClaw的文件系统控制、CoPaw的会话持久性需求，都指向同一个方向：**无法跨会话学习和积累的智能体，其价值将被严重打折。** 谁能提供更精细、更安全的记忆管理方案，谁就能在下一轮竞争中胜出。

4.  **智能体“可观察性”与“成本控制”需求爆炸**：用户不再接受“黑盒”操作。任务进度可视化、Token消耗看板、会话成本预算、以及阻止无限“思考”循环——**用户要求对智能体的行为和资源消耗有完全的可见性和控制权**。这是智能体SaaS化、企业化部署的必经之路。

5.  **“版本升级焦虑”成普遍痛点**：从OpenClaw的“升级后工具失效”到CoPaw的“配置丢失”，再到ZeroClaw的“新安装问题”，升级带来的回归Bug成为用户最大的负面反馈来源。**这警示所有项目：强健的回归测试链（Canary, E2E）和清晰的版本迁移指南，是留住用户的底线，而非加分项。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期**: 2026-04-28  
**数据覆盖**: 2026-04-27 ~ 2026-04-28 (UTC)

---

## 1. 今日速览

项目在过去24小时内保持**高度活跃**，共处理11条Issue和31条PR。其中7个Issue已被关闭，15个PR已完成合并或关闭，显示出维护团队积极的响应速度。社区焦点集中在**远程访问安全加固、多通道兼容性修复、以及会话级历史管理**三个方向。特别值得注意的是，OpenAI Codex provider的流式进度回归问题已在当日被修复并合并，体现了高效的Bug修复流程。整体来看，项目健康度良好，社区贡献持续涌入。

---

## 2. 版本发布

**无新版本发布**  
上一个可用版本仍为 **v0.1.5.post2**，该项目当前处于快速迭代阶段，预计近期将有积累足够修复和功能后发布新版本。

---

## 3. 项目进展

### 🚀 今日合并/关闭的重要PR

| PR # | 标题 | 状态 | 影响范围 |
|------|------|------|----------|
| #3478 | `fix(provider): bound OpenAI-compatible request timeouts` | ✅ 已合并 | 修复OpenAI兼容provider的无限超时问题，避免LLM请求阻塞agent循环长达10分钟 |
| #3480 / #3479 | `fix(codex): stream progress deltas to channels` | ✅ 已合并 | 修复OpenAI Codex provider在大版本更新后丢失流式进度更新的回归bug |
| #3483 | `docs: add OpenCode Go provider entries` | ✅ 已合并 | 完善文档，新增OpenCode Go聚合网关的配置说明 |
| #3466 | `feat(command): add /history command` | ✅ 已合并 | 新增`/history`斜杠命令，允许用户查看当前会话最近的N条消息 |
| #3389 | `fix(heartbeat): prevent internal reasoning leaks` | ✅ 已合并 | 修复Heartbeat机制中内部推理泄露到用户消息通道的三个故障模式 |

**项目整体推进**: 今日显著修复了**流式通信回归**和**请求超时**两个关键稳定性问题，同时新增了`/history`命令和文档更新，提升了用户体验和可维护性。

---

## 4. 社区热点

### 🔥 最活跃讨论

| 标题 | 链接 | 评论数 | 关注点 |
|------|------|--------|--------|
| [Feature Request] Session-Level Focus Tool | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 3 | 用户期望agent能在中断后记住主任务上下文，类似人类的"任务看板" |
| WebSocket connection failed (remote host) | [#3473](https://github.com/HKUDS/nanobot/issues/3473) | 3 | 远程部署时WebUI默认绑定127.0.0.1导致的访问问题 |
| Session scoped history (PR #3481) | [#3481](https://github.com/HKUDS/nanobot/pull/3481) | 待评估 | 社区贡献的多会话历史隔离方案，与当前会话混合问题直接相关 |

### 📊 分析

社区最强烈的诉求集中在**会话隔离**和**任务持续注意力**两个方向：
- **#3292** 提出了一个用户痛点：LLM agent缺乏人类那种"被中断后能回到主线任务"的能力，当前`my`工具的scratchpad (`_runtime_vars`)不足以支撑这一需求。
- **#3481** PR 直接解决了历史记录跨会话混合的问题，这正是**#3494**（今日新开的关于`history.jsonl`被加载到上下文的bug）的根因之一。

---

## 5. Bug 与稳定性

### 🔴 严重程度从高到低

| 严重性 | Issue # | 标题 | 状态 | 是否有修复PR |
|--------|---------|------|------|-------------|
| 🔴 严重 | #3494 | `history.jsonl`被加载到上下文中，导致异常token消耗 | 🆕 新开 | ❌ 无（但PR #3481可能解决） |
| 🟠 高 | #3488 | Telegram附件被发送为`application.octet-stream` | 🆕 新开 | ✅ PR #3489 已提交 |
| 🟠 高 | #3474 | DeepSeek新模型`deepseek-v4-pro`/`deepseek-v4-flash`返回空白回复 | ✅ 已关闭 | ❌ 未追踪到对应PR |
| 🟡 中 | #3464 | 子agent从线程对话发出的消息路由到主通道而非原始线程 | ✅ 已关闭 | ✅ 已修复 |
| 🟡 中 | #3435 | 企业微信(wecom)渠道媒体文件返回失败 | ✅ 已关闭 | ✅ 已修复 |
| 🟡 中 | #3426 | OpenAI Codex provider不再流式输出进度到通道（回归） | ✅ 已关闭 | ✅ PR #3479/#3480 |

**关键观察**：
- **#3494** 是新发现的严重bug：历史文件`history.jsonl`被错误地加载到LLM上下文，导致token使用量远超预算（显示`Context: 162k/65k (287%)`），这直接影响用户体验和成本。
- **#3488** 和 **#3474** 代表了典型的第三方API兼容性问题，维护者需跟进DeepSeek新模型的适配。

---

## 6. 功能请求与路线图信号

### 📋 高价值功能请求

| Issue # | 功能 | 社区呼声 | 关联PR | 可能纳入版本 |
|---------|------|----------|--------|-------------|
| #3292 | **会话级专注工具**：跨中断的任务意识 | ⭐⭐⭐ | 无直接关联 | 下一版本候选 |
| #3484 | **带上下文的自动化**：HEARTBEAT无法保持会话历史 | ⭐⭐ | 无直接关联 | 生命周期hooks (PR #3373) 部分解决 |
| #3482 | **`max_messages`配置参数**：支持慢速/本地模型设置更小的历史窗口 | ⭐⭐ | PR #3482（未合并） | 下一版本候选 |

### 🚦 路线图信号

1. **多通道扩展**：社区正在提交多种新通道支持（SimpleX PR #3486、Mattermost PR #2592），显示出项目正在向"通用AI助理网关"方向发展。
2. **安全加固**：PR #3492 提出的WebUI公共部署安全加固，以及 PR #3493 的工作区目录限制严格化，表明安全正在成为下一阶段的优先级。
3. **Hugging Face集成**：PR #3490 来自Hugging Face官方团队的贡献，如果被接受，将极大地扩展可用的LLM后端。

---

## 7. 用户反馈摘要

### 💬 正面反馈
> **firdota** (#3473): "First of all, thanks for this amazing project!"  
> — 用户对项目整体表达感谢，说明正向使用体验为主。

### 😟 负面/痛点反馈

| 用户 | 痛点 | 场景 |
|------|------|------|
| **firdota** (#3473) | WebUI远程部署时绑定127.0.0.1，需手动改0.0.0.0 | 远程服务器部署 |
| **siesta3096** (#3474) | DeepSeek新模型名不兼容，返回空回复 | 使用最新第三方API |
| **z172581342** (#3494) | 历史文件被错误加载导致token暴增，预算超287% | 更新后异常行为 |
| **Xcc313r4n7** (#3484) | 无法运行带会话历史的自动化任务 | 自动化场景 |
| **pepperdog999** (#3435) | 企业微信渠道媒体文件上传失败 | 企业通讯场景 |

**核心洞察**：用户主要在 **部署配置** 和 **第三方API兼容性** 方面遇到障碍，而项目在这些领域正在快速改进——远程部署有PR #3492安全加固，API兼容有PR #3478超时修复和PR #3490 HuggingFace集成。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要议题

| Issue/PR # | 标题 | 已开放天数 | 最后活动 | 建议 |
|------------|------|-----------|----------|------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | 9天 | 2026-04-27 | ⚠️ 长期未标记milestone，社区已表达3次跟进需求 |
| [#2592](https://github.com/HKUDS/nanobot/pull/2592) | Mattermost channel support | 31天 | 2026-04-28 | 🚧 大型功能PR长时间停留在"待合并"状态，建议维护者评估是否纳入下一版本 |
| [#3405](https://github.com/HKUDS/nanobot/pull/3405) | Olostep web search backend | 5天 | 2026-04-27 | 📋 新贡献者PR，需要review |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) | Gateway lifecycle hooks | 6天 | 2026-04-28 | 🚧 功能性PR，与#3484自动化需求相关 |

### 🔍 积压分析

- **#3292** 是社区呼声最高的功能请求之一（会话级专注工具），但9天未获维护者回复或里程碑标记，可能影响社区贡献积极性。
- **#2592 (Mattermost)** 已开放31天无人合入或关闭，这是大型功能PR积压的典型，建议维护团队给出明确的时间表或决策（接受/拒绝/需要修改）。
- 多个OpenAI Codex相关的修复PR（#3478, #3479, #3480）已被快速处理，说明代码质量高、影响范围明确的PR能获得优先响应。

---

*报告生成：NanoBot AI分析师 | 数据快照时间：2026-04-28 23:59 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，这是根据您提供的 Hermes Agent (github.com/nousresearch/hermes-agent) 项目数据生成的 2026-04-28 项目动态日报。

---

## Hermes Agent 项目动态日报 | 2026-04-28

### 1. 今日速览

今日项目活跃度处于**高位**。过去24小时内，Issue和PR更新数量均达到50条，社区讨论与代码贡献非常积极。核心团队通过批量合并PR（如#16821）快速推进了Matrix适配器的多项修复与功能，显示出对平台稳定性的重视。技术社区围绕**外部记忆**（Mempalace）、**矩阵适配器**的E2EE和元数据支持、以及**MCP工具链**的稳定性提出了大量需求与报告，是当前社区关注的重中之重。尽管无新版本发布，但大量PR的合并为下一次发布奠定了坚实基础。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展 (关键PR合并/关闭)

今日共有18个PR被合并或关闭，项目在多个关键领域取得了实质进展。

-   **Matrix适配器迎来重要更新（#16821）**：维护者`teknium1`合入了名为“Matrix parity salvage batch”的批量PR。该PR通过精选（cherry-pick）合并了来自10位贡献者的10项实质性修复与功能。这标志着项目的Matrix集成在**端到端加密（E2EE）**、**出站@提及（#8464）**、**防止自消息回环（#11162）** 以及**反应式批准（#13135）** 等功能上达到了关键的里程碑。

-   **安全性默认配置调整（#16794）**：合并的PR #16794将`security.redact_secrets`（秘密信息脱敏）的默认值从“开启”改为“关闭”。新用户将默认获取原始工具输出，而需要屏蔽功能的老用户或新用户可主动配置开启。这可能会影响部分依赖默认脱敏行为的用户。

-   **Matrix基础体验增强**：
    -   **自启动交叉签名（#14871）**：解决了Element客户端长期显示的“未验证设备”问题，提升了Matrix用户的首次使用体验。
    -   **同步超时与诊断（#5830）**：修复了Matrix机器人同步后静默忽略消息的问题，增加了超时和日志诊断，提升了稳定性。

-   **代理与MCP修复**：社区贡献者正在积极修复核心功能。
    -   PR #16819 修复了自定义提供商的URL重写问题。
    -   PR #16820 和 #16766 正在解决Anthropic模型与MCP工具之间因命名规范和可空（nullable）Schema不匹配导致的兼容性问题。

-   **性能优化**：
    -   PR #8717 通过将委托任务的上下文从系统提示词移至用户消息，优化了前缀缓存的稳定性，有望提升并发子代理的性能。

### 4. 社区热点

-   **热门功能请求：外部记忆支持（#6323）**
    -   **链接**: [Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323)
    -   **热度**: 评论16条，获赞24个。
    -   **诉求**: 社区对引入结构化、持久化且可查询的外部记忆（Mempalace）表现出极高热情。用户希望Hermes能够跨越会话边界，处理长期任务。该项目已成为今日最受关注的开发方向，相关PR #16822（HKTMemory provider）也已提交，显示该功能可能很快进入开发阶段。

-   **热门错误报告：Google Gemini CLI 429错误（#15895）**
    -   **链接**: [Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)
    -   **热度**: 评论4条，获赞1个。
    -   **诉求**: 用户报告在使用Google Gemini CLI 模式时，即使配额显示充足，依然频繁遭遇429（速率限制）错误，导致服务几乎不可用。这暴露出Gemini API认证或请求速率控制方面可能存在深层问题，是当前用户使用上的一个痛点。

-   **热门功能讨论：看板协作板（#16102）**
    -   **链接**: [Issue #16102](https://github.com/NousResearch/hermes-agent/issues/16102)
    -   **热度**: 评论9条。
    -   **诉求**: 社区核心贡献者`teknium1`发起的RFC，请求评审一个持久化的、多配置文件协作看板（Kanban）。这表明社区对团队协作和任务管理功能有明确需求，可能成为下一个重要特性。

### 5. Bug 与稳定性

今日共报告了34个活跃Bug，其中多个问题非常严重。

-   **P1 (严重)**:
    -   **MCP断路器死锁 (#16788)**: MCP断路器在子进程死亡后无法恢复，会永久卡死网关。**暂无修复PR**。
    -   **Cron Telegram话题ID丢失 (#16795)**: Cron任务向Telegram论坛发送通知时，可能丢失话题ID，导致消息错位。**暂无修复PR**。
    -   **CLI陷入假死状态 (#16803)**: 在特定环境下，CLI会进入一种“无视任何输入（包括Ctrl-C）、只能被杀进程”的假死状态。**暂无修复PR**。
    -   **OpenRouter 400空响应 (#16804)**: 用户反馈Hermes 0.9.0对所有OpenRouter请求返回HTTP 400空正文，而直接用curl测试正常，表明Hermes客户端存在兼容性问题。**暂无修复PR**。

-   **P2 (中等等)**:
    -   **Docker-out-of-Docker (DooD) 代码执行失败 (#16703)**: 用户在Docker内运行Hermes并挂载Docker.sock时，`execute_code`功能报错。**暂无修复PR**。
    -   **DeepSeek思考块处理 (#16748)**: 使用DeepSeek的Anthropic兼容端点时，处理思考块可能导致HTTP 400错误。**暂无修复PR**。
    -   **配置文件符号链接被原子写入破坏 (#16743)**: 当配置文件是通过符号链接指向外部文件时，Hermes的“原子写入”机制会用普通文件覆盖符号链接，破坏版本管理。**暂无修复PR**。
    -   **xAI模型列表过时 (#16699)**: `_PROVIDER_MODELS`中的模型列表（如`grok-4.20`）与实际不符，可能导致错误或失效。**暂无修复PR**。

-   **P3 (较低)**:
    -   主要包括多个未修复的插件兼容性（#8742, #8739）和文档（#8806）问题。

### 6. 功能请求与路线图信号

-   **外部记忆 (Mempalace) (#6323)**: 这是今日呼声最高的功能，已有配套PR #16822 (HKTMemory provider) 提交。极有可能在下一版本中被采纳或提供插件支持。
-   **看板协作板 (Kanban) (#16102)**: 核心开发者的PR #16100 及配套RFC表明该功能正在积极设计和开发中。
-   **可配置的Cron脚本解释器 (#8714)**: 用户希望Cron预脚本能使用自定义Python解释器，而非固定使用Hermes自身的环境。
-   **ActivityWatch集成 (#8726)**: 已有PR支持，作为可选的技能增强，用于用户活动分析和项目“热度”提示。
-   **Termux更新优化 (#16826)**: 用户请求Hermes在Termux上更新时利用pip缓存，避免每次都重装依赖。
-   **侧效应清单验证 (#16789)**: 新增了委托子代理的副作用验证功能，增强了任务执行的可审计性。

### 7. 用户反馈摘要

-   **正面反馈 (隐含)**: Matrix适配器的批量修复（#16821）是对用户长期反馈的积极回应，特别解决了“E2EE未验证设备”和“自消息回环”等困扰用户已久的问题。
-   **痛点与不满**:
    -   **API兼容性**: Gemini（#15895）和OpenRouter（#16804）的用户正在经历严重的服务中断或错误，这直接影响了核心可用性。
    -   **配置管理**: 配置文件的符号链接问题（#16743）对使用配置管理工具进行部署和版本控制的资深用户造成了困扰。
    -   **系统稳定性**: CLI的假死问题（#16803）和MCP断路器的永久卡死（#16788）是影响普通用户工作流顺畅性的严重稳定性问题。
    -   **信息透明度**: 用户在总结压缩失败且历史记录丢失时（#16650），无法收到足够清晰的通知，导致宝贵的上下文被静默丢弃，这让用户感到非常不满。

### 8. 待处理积压

以下为长期存在、讨论较多或影响较大但尚未解决或获得官方回应的Issue/PR，提醒维护者关注。

| 标题 | 链接 | 创建时间 | 更新时间 | 评论数 | 当前状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Memory search returns 0 results: OpenViking _tenant_filter... | [Issue #8742](https://github.com/NousResearch/hermes-agent/issues/8742) | 2026-04-13 | 2026-04-28 | 5 | OPEN |
| Gateway: StreamConsumer splits messages on platforms... (WeChat) | [Issue #8753](https://github.com/NousResearch/hermes-agent/issues/8753) | 2026-04-13 | 2026-04-28 | 2 | OPEN |
| bug(gateway): WeixinAdapter media send methods drop files... | [Issue #8783](https://github.com/NousResearch/hermes-agent/issues/8783) | 2026-04-13 | 2026-04-28 | 2 | OPEN |
| skills cmd - `/skills` is unknown | [Issue #10221](https://github.com/NousResearch/hermes-agent/issues/10221) | 2026-04-15 | 2026-04-28 | 2 | OPEN |

这些Issue反映了**OpenViking记忆插件**、**WeChat/WeCom适配器**以及**技能命令**等方面存在长期未解决的Bug，可能影响特定平台或功能用户的体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是根据您提供的 PicoClaw 项目数据生成的 2026-04-28 项目动态日报。

---

## PicoClaw 项目动态日报 - 2026-04-28

### 1. 今日速览

PicoClaw 项目今日保持高活跃度，社区贡献与维护节奏紧凑。过去24小时内，**Issue 关闭率极高（75条关闭，33条活跃）**，表明维护团队正在积极清理积压。同时，**PR 提交量大（120条），但合并/关闭率（57条）略低于提交量**，导致待合并 PR 积压增至63条。核心关注点集中在**TTS/ASR 功能集成**、**API 密钥与认证修复**，以及**渠道（Channel）与代理（Agent）系统重构**。虽然无新版本发布，但多项修复与功能 PR 已接近就绪，项目健康度整体向好，但需关注 PR 合并效率。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并/关闭的 PR 主要集中在代码重构、Bug 修复和依赖更新，推进了项目的稳定性和架构一致性。

- **核心通信协议标准化**：PR [#2680](https://github.com/sipeed/picoclaw/pull/2680)（已合并）统一了 `tool_calls` 和 `thought` 的消息格式，这是一个**前端侧破坏性变更**，旨在改善协议一致性，为未来功能迭代奠定基础。
- **渠道与通信修复**：
    - PR [#2680](https://github.com/sipeed/picoclaw/pull/2680) (已合并) 统一了消息格式。
    - PR [#2370](https://github.com/sipeed/picoclaw/pull/2370)（待合并）修复了 LLM 输出中 `[SPLIT]` 标记可能包含空格导致消息分割失败的问题。
    - PR [#2329](https://github.com/sipeed/picoclaw/pull/2329)（待合并）为 WhatsApp 渠道增加了 `GroupTrigger` 支持，以更好地控制群组消息的响应策略。
- **代理与工具链增强**：
    - PR [#2364](https://github.com/sipeed/picoclaw/pull/2364)（待合并）修复了会话恢复时因存在“悬挂”的工具调用状态而导致会话卡死的问题。
    - PR [#2333](https://github.com/sipeed/picoclaw/pull/2333)（待合并）引入了结构化的上下文压缩算法，旨在更高效地管理长对话历史。
    - PR [#2332](https://github.com/sipeed/picoclaw/pull/2332)（待合并）新增 `SkillManager`，允许代理在运行时动态创建和管理技能。
- **配置与Bug修复**：
    - PR [#2372](https://github.com/sipeed/picoclaw/pull/2372)（待合并）解决了api_key、model lookup和fallback机制中的多个关键Bug。
    - PR [#2328](https://github.com/sipeed/picoclaw/pull/2328)（待合并）进行了全面的错误处理增强和代码文档完善（godoc）。
    - PR [#2331](https://github.com/sipeed/picoclaw/pull/2331)（待合并）更新了项目依赖。

### 4. 社区热点

当日社区讨论热度最高的议题集中在**功能增强请求**和**影响广泛的核心Bug**上。

- **TTS/ASR 支持（Issue #1648）：** 以23条评论位居热度榜首。用户 [lxowalle] 提出了详细的音频交互架构设计，希望能为 PicoClaw 增加语音能力（TTS 输出，ASR 输入）。这反映了社区对多模态交互的强烈需求。尽管有相关 PR（#1642）但尚未集成到主网关，成为了讨论焦点。
  [链接](https://github.com/sipeed/picoclaw/issues/1648)
- **LM Studio 简易连接（Issue #28）：** 拥有16条评论和一个 👍。用户 [Franzferdinan51] 提出希望简化 PicoClaw 与 LM Studio 的连接过程。这表明社区中存在对本地/自托管模型的易用性配置需求，尤其是 Android 端用户。
  [链接](https://github.com/sipeed/picoclaw/issues/28)
- **openai_compat Provider 的 API 密钥问题（Issue #2578）：** 该Bug报告（12条评论）指出 v0.2.6 版本中，`openai_compat` 提供者会“静默地”丢弃所有来源配置的 API 密钥，导致所有基于 HTTP 的模型认证失败。这是一个严重问题，受到广泛关注。
  [链接](https://github.com/sipeed/picoclaw/issues/2578)

### 5. Bug 与稳定性

当日报告的 Bug 和稳定性问题如下，按严重程度排列：

- **严重**：
    - **[ISSUE #2578] openai_compat 不发送 Authorization 头**：核心认证模块失效，影响所有使用 `openai_compat` 的用户。**已有修复 PR [#2372](https://github.com/sipeed/picoclaw/pull/2372) 待合并。**
      [链接](https://github.com/sipeed/picoclaw/issues/2578)
    - **[ISSUE #629] LLM 调用失败无重试**：影响长期任务稳定性，遇到 HTTP 500 错误时任务会挂起。**长期未解决（stale）**。
      [链接](https://github.com/sipeed/picoclaw/issues/629)

- **中等**：
    - **[ISSUE #2368] Android App 模型未配置状态**：用户在 WebUI 配置模型后，应用内仍显示“未配置”，无法聊天。
      [链接](https://github.com/sipeed/picoclaw/issues/2368)
    - **[ISSUE #2046] PicoClaw 不调用 LongCat API 的工具**：特定提供商（LongCat）工具调用功能失效。
      [链接](https://github.com/sipeed/picoclaw/issues/2046)

- **低优先级**：
    - **[ISSUE #1708] Docker v0.2.3 REST API 端点不可用**：在特定 Docker 部署模式下，REST API 仅健康检查接口可用。
      [链接](https://github.com/sipeed/picoclaw/issues/1708)

### 6. 功能请求与路线图信号

用户提出的新功能需求主要集中于增强用户体验和扩展平台支持，部分已有对应的待合并 PR。

- **高优先级信号**：
    - **TTS/ASR 支持（[Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)）**：高呼声需求，可能成为下一个核心功能。**已有相关 PR #1642**。
    - **LM Studio 简易连接（[Issue #28](https://github.com/sipeed/picoclaw/issues/28)）**：提升本地模型可用性。

- **可能被纳入下一版本的功能**：
    - **Web 聊天流式输出（[Issue #1950](https://github.com/sipeed/picoclaw/issues/1950)）**：**已有对应 PR [#2587](https://github.com/sipeed/picoclaw/pull/2587) 待合并。**
    - **会话管理命令（[PR #2491](https://github.com/sipeed/picoclaw/pull/2491)）**：添加 `/status`， `/compact`， `/new` 等命令，代码接近就绪。
    - **Mattermost 原生渠道支持（[Issue #1587](https://github.com/sipeed/picoclaw/issues/1587)）**：扩展企业用户群。
- **长期路线图信号**：
    - **OpenAI Responses API 迁移（[Issue #2171](https://github.com/sipeed/picoclaw/issues/2171)）**：技术债务清理，建议将 Chat Completions API 升级为更推荐的 Responses API。
    - **自升级支持（[Issue #618](https://github.com/sipeed/picoclaw/issues/618)）**：持续集成/交付的关键一步，对用户友好性提升至关重要。

### 7. 用户反馈摘要

从 Issues 评论中提炼出的关键用户痛点与使用场景：

- **“静默”失败是最大痛点**：用户在 Issue #2578 中描述了 API Key 被静默丢弃的情况，导致请求全部失败且无有效错误提示。类似地，Issue #629 中 LLM 调用失败后任务挂起，无任何反馈。**用户需要更透明、可回溯的错误处理机制。**
- **对“黑盒”任务执行的焦虑**：Issue #571 反映了用户在代理执行多步骤任务（如搜索、文件操作）时，因缺乏实时状态反馈而感到不安。用户希望看到“进度”，而不是持续的空转等待。**社区对此的解决方案包括 PR #2587（流式输出）和 Issue #2137（实时任务列表）。**
- **Docker 部署的易用性有待提升**：Issue #2236 中用户修改了 Docker 端口后 Web 页面无法交互，Issue #1708 中 REST API 端点不可用，以及 Issue #1228 要求预装基础工具，都表明**Docker 部署体验的简陋和文档不足**是阻碍用户的重要障碍。
- **对 Android 端体验的期待**：Issue #28（LM Studio 连接）和 Issue #2368（模型未配置）都指向了 Android 用户，说明**移动端体验是社区关注的增长点**，但目前稳定性待加强。

### 8. 待处理积压

以下为长期未得到明确回复或解决的重要 Issue 及 PR，提醒维护者关注：

- **高影响 Bug**：
    - **[ISSUE #629] [BUG] LLM 调用失败后无重试**：自 2026-02-22 提出，已被标记为 `stale`，但影响长期任务稳定性，需评估解决方案。
      [链接](https://github.com/sipeed/picoclaw/issues/629)
- **功能请求**：
    - **[ISSUE #618] [Task] 程序自升级支持**：自 2026-02-22 提出，对于项目迭代和用户获取新功能至关重要，目前处于待规划状态。
      [链接](https://github.com/sipeed/picoclaw/issues/618)
    - **[ISSUE #1067] [Feature] 集成 Authula 进行身份验证**：自 2026-03-04 提出，对于企业级部署的安全性至关重要，但仅有一个 👍 和少量评论，优先级不高但很重要。
      [链接](https://github.com/sipeed/picoclaw/issues/1067)
- **待合并的 PR**：
    - **[PR #2372] 修复 api_key、model lookup 和 fallback bug**：直接关联 Issue #2578 等核心Bug，其合并将大幅提升系统稳定性，建议优先 review。
      [链接](https://github.com/sipeed/picoclaw/pull/2372)
    - **[PR #2587] Pico Web Chat 流式输出**：对应社区强需求 Issue #1950，且重构了前端渲染逻辑，影响面较大，需谨慎评估。
      [链接](https://github.com/sipeed/picoclaw/pull/2587)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-28)

---

## 1. 今日速览

过去24小时，NanoClaw 项目保持**高活跃度**：共更新 **12 条 Issues**（新开/活跃 7，关闭 5）和 **23 条 PR**（待合并 17，已合并/关闭 6）。尽管未发布新版本，但社区贡献集中爆发，尤其在 **容器资源管控**、**Telegram 适配器**、**Signal 通道增强** 和 **安装流程** 等方向有多项重要 PR 推进。同时，多个稳定性 Bug（如附件丢失、自修改工具参数异常、无限路由循环）被报告并已有对应修复 PR，项目健康度良好。

---

## 3. 项目进展 (已合并/关闭的重要 PR)

| PR | 标题 | 状态 | 描述 |
|---|---|---|---|
| [#2050](https://github.com/qwibitai/nanoclaw/pull/2050) | fix(v2/roosync-inbox): restore TS source + accept in-container bot identity | ✅ 已合并 | 修复 RooSync 通道中 `@-mention` 无法唤醒 bot 的问题 (双 Bug：TS 源码丢失 + 容器内 bot 身份未被识别) |
| [#2049](https://github.com/qwibitai/nanoclaw/pull/2049) | feat(channels): add Telegram channel adapter | ✅ 已合并 | 新增 Telegram 通道适配器，包含配对流程和防未授权访问机制 |
| [#1326](https://github.com/qwibitai/nanoclaw/pull/1326) | feat: add channel-agnostic voice transcription skill | ✅ 已合并 (4.27) | 通道无关的语音转文字技能，支持本地 whisper.cpp 和 OpenAI Whisper API 双后端 |
| [#987](https://github.com/qwibitai/nanoclaw/pull/987) | feat: session size rotation and pre-death memory flush | ✅ 已合并 (4.27) | 解决长期运行会话转录过大的问题：达到 55MB/16K 行时自动轮转并刷新内存，避免静默丢失上下文 |
| [#1997](https://github.com/qwibitai/nanoclaw/pull/1997) | fix: parse SQLite datetime() values as UTC in host sweep | ✅ 已合并 (4.27) | 修复主机清扫线程因时区问题误杀刚生成容器 (~60s 内被循环杀死) 的严重 bug |

**项目推进总结**：新增 Telegram 和 Signal 通道能力、强化语音交互、修复关键性会话上下文丢失和容器误杀问题，整体稳定性和功能广度均有提升。

---

## 4. 社区热点

| 议题 | 类型 | 热度 | 链接 | 核心诉求 |
|---|---|---|---|---|
| #2048 `install_packages` 触发无限自路由循环 | 🔥 Issue | 👍 1 / 0 评论 | [查看](https://github.com/qwibitai/nanoclaw/issues/2048) | 包安装审批流程中 agent 产生无限 A2A 自我路由循环，阻塞所有 Telegram 消息投递。用户已配合修复但指出代码库复杂性 |
| #2029 容器资源限制缺失 | 📌 Issue | 3 评论 | [查看](https://github.com/qwibitai/nanoclaw/issues/2029) | 高影响力的安全/稳定性隐患。Runaway agent 可耗尽主机内存/CPU/PID 空间。已有对应 PR #2068 |
| #2063 路由循环容量限制 | 📌 PR | - | [查看](https://github.com/qwibitai/nanoclaw/pull/2063) | 来自生产环境观察，针对 A2A 和 politeness 循环设计上游容量封顶机制，评论区正在讨论不同触发场景 |

**分析**：社区最焦虑的问题集中在 **agent 自我控制 (self-routing, self-loop)** 和 **容器资源隔离**。这些不是 feature 缺失，而是 **运营安全** 问题——当无人值守的 agent 系统发生失控时，后果直接且严重。

---

## 5. Bug 与稳定性

| 严重等级 | Issue/PR | 标题 | 状态 | 修复? |
|---|---|---|---|---|
| 🔴 严重 | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) | 容器无资源限制 → 单 runaway agent 可 OOM 主机 | 🟡 Open | ✅ PR #2068 已提交 |
| 🔴 严重 | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | `install_packages` 触发无限 A2A 自路由循环 → 阻塞 Telegram 投递 | 🟡 Open | 🔍 用户自行修复但未合并 |
| 🟡 高 | [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) | 迁移后附件目录未挂载到容器 → 附件对 agent 不可见 | 🟡 Open | 用户已描述修复方式 (添加标准 mount) |
| 🟡 高 | [#2051](https://github.com/qwibitai/nanoclaw/issues/2051) | `add_mcp_server` 将 args 字段序列化为字符串 → 容器启动失败 | 🟡 Open | 无公开 PR |
| 🟡 高 | [#2061](https://github.com/qwibitai/nanoclaw/issues/2061) | 一次性调度任务完成后永远停留在 `list_tasks` 中（无 GC） | ✅ Closed (合并?) | ✅ PR (待对应 PR) |
| 🟡 高 | [#2063](https://github.com/qwibitai/nanoclaw/pull/2063) | 路由循环无限增长 → 系统降级 | 🟡 Open (PR) | 已有 PR 修复 |
| 🟢 中 | [#2062](https://github.com/qwibitai/nanoclaw/issues/2062) | 纯文本输出路由到默认目标而非消息来源 | ✅ Closed (已修复?) | 已关闭，可能已合入 |
| 🟢 中 | [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) | OneCLI agent 标识符含下划线被拒绝 (400 error) | 🟡 Open | 用户已提出 `.replace(/_/g, '-')` 修复方案 |

**严重性排序**：OOM 风险 > 无限循环阻塞消息 > 附件丢失 > MCP 配置损坏 > 调度系统残留

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 状态 | 可能纳入版本 |
|---|---|---|---|
| **Telegram 回复上下文暴露** | [#2065](https://github.com/qwibitai/nanoclaw/issues/2065) | ✅ Closed (已实现) | v2.x |
| **Google Chat 通道** | [#2058](https://github.com/qwibitai/nanoclaw/issues/2058) | 🟡 Open - 功能需求 | v2.x (已有 Telegram/Signal 模式参考) |
| **容器资源限制** | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) | 🟡 Open + PR #2068 | 高优先级 - 安全必要 |
| **Ollama 多模态支持** | [#2072](https://github.com/qwibitai/nanoclaw/pull/2072) | 🟡 Open (PR) | 下一小版本 |
| **Inbox 主机路径附件** | [#2070](https://github.com/qwibitai/nanoclaw/pull/2070) | 🟡 Open (PR) | 下一小版本 |
| **Signal 非音频附件路由到 inbox** | [#2071](https://github.com/qwibitai/nanoclaw/pull/2071) | 🟡 Open (PR) | 下一小版本 (与 #2070 配对) |
| **Docker Sandbox 兼容 (代理+CA+自修复)** | [#2060](https://github.com/qwibitai/nanoclaw/pull/2060) | 🟡 Open (PR) | 若获维护者批准可纳入 |
| **安装流程改进** | [#2052~2057](https://github.com/qwibitai/nanoclaw/pulls) (dooha333 系列) | 🟡 Open 多 PR | 下一大版本优先 |

**分析**：路线图信号指向三个方向：
1. **通道扩展** — Telegram 已落地，Google Chat 呼声高，Signal 深度增强
2. **基础设施加固** — 容器资源限制、Docker Sandbox 兼容、安装流程自动化
3. **多模态交互** — Ollama 图片输入、附件系统统一（inbox 路径）

---

## 7. 用户反馈摘要

| 用户 | 痛点/反馈 | 出处 | 提炼 |
|---|---|---|---|
| `luis-agm` | "install_packages 审批触发无限循环，阻塞整个 Telegram 群组" | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | **核心痛点**：包安装等低风险操作涉及审批流程时，agent 之间产生无穷消息循环，直接破坏聊天的可用性 |
| `dr-pabs` | "迁移后附件目录未挂载到容器内 → agent 能看到路径但读不到文件" | [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) | **迁移体验**：容器化迁移过程中重要的持久化路径被遗漏，用户需手动追踪补挂载 |
| `andrebrov` | "agent 说 'Yes' 却发到了 DM 而不是群聊" | [#2062](https://github.com/qwibitai/nanoclaw/issues/2062) | **路由预期错位**：agent 默认路由行为与用户心理模型不匹配，引发混淆 |
| `Vervo7` | "每个后续 agent 唤醒都失败，因为 MCP 配置被序列化成了字符串" | [#2051](https://github.com/qwibitai/nanoclaw/issues/2051) | **自我修改破坏性**：`add_mcp_server` 这个 self-mod 工具一旦写错，整个 agent 启动完全崩溃，无中间恢复手段 |
| `StavBrener` | "Google Chat 根本不在 setup/auto.ts 的通道选择器中" | [#2058](https://github.com/qwibitai/nanoclaw/issues/2058) | **缺失功能**：安装引导缺少热门通道选项，用户需手动配置 |
| `jbaruch` (误发 Issue) | "SDK 维护会话在跨调度任务共享了上次结果" + "Node 升级 Issue 发错仓库" | [#2064](https://github.com/qwibitai/nanoclaw/issues/2064) + [#2066](https://github.com/qwibitai/nanoclaw/issues/2066) | **生态管理噪声**：下游 fork 的 Issue 被误发到主仓库，主仓库维护者需承担甄别成本 |

**整体情绪**：用户对系统 **稳定性** 和 **可预测性** 敏感，尤其关注 agent 失控（循环）、配置损坏、路由异常等场景。正面反馈体现在对修复的积极配合（用户自行调试并输出修复方案），负面反馈倾向于在体验卡顿时出现。

---

## 8. 待处理积压

| 议题 | 创建时间 | 最后活跃 | 链接 | 重要性 | 备注 |
|---|---|---|---|---|---|
| #2051 `add_mcp_server` 参数序列化 Bug | 2026-04-27 | 2026-04-27 | [查看](https://github.com/qwibitai/nanoclaw/issues/2051) | 🔴 严重 | 功能破坏性，无修复 PR 关联。agent 启动失败直接影响所有用户 |
| #2067 v2 调度任务 session 绑定问题 | 2026-04-28 | 今天 | [查看](https://github.com/qwibitai/nanoclaw/issues/2067) | 🟡 高 | 跨线程调度管理盲区，影响高级用户的多会话管理场景 |
| #1845 时间戳标准化 | 2026-04-18 | 2026-04-27 | [查看](https://github.com/qwibitai/nanoclaw/pull/1845) | 🟡 高 | 长时间未合并的旧 PR，核心修复 (时间格式不统一) 仍处于 Open |
| #2052~#2057 dooha333 安装流程修复系列 | 2026-04-27 | 2026-04-27 | [系列链接](https://github.com/qwibitai/nanoclaw/pulls?q=is%3Aopen+author%3Adooha333) | 🟡 中 | 五个依赖堆叠的 PR，只要一个合入，其他需重新 base，维护成本高 |
| #2072 Ollama 多模态 | 2026-04-28 | 今天 | [查看](https://github.com/qwibitai/nanoclaw/pull/2072) | 🟢 新功能 | 高质量 PR，与 #2070/#2071 形成附件系统统一方案，建议按序审查 |
| #2046 OneCLI 标识符下划线 Bug | 2026-04-27 | 2026-04-27 | [查看](https://github.com/qwibitai/nanoclaw/issues/2046) | 🟢 中 | 修复简单但可能暴露更深层的配置约定问题 |

**维护者提醒**：**#2051 (MCP 配置损坏)** 是当前无 PR 覆盖的**最严重阻塞** Bug，建议优先分配 reviewer。同时 **dooha333 系列 (5 个 PR)** 由于存在双向依赖，建议安排一次性审查 (按 #2052 → #2054 → #2056 → #2055 → #2057 顺序，或与作者协调 rebase 压缩)。

---

*数据采集时间：2026-04-28 UTC / 生成时间：2026-04-28 23:40 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目数据生成的 2026-04-28 项目动态日报。

---

## IronClaw 项目日报 - 2026-04-28

### 1. 今日速览

今日项目活跃度极高，核心团队正围绕 **Reborn 架构** 展开大规模的重构工作，密集提交了多个大型 PR 并制定了详细的集成计划。**PR 提交量与待处理量（35条/284条待合并）** 均处于高位，表明项目正处于快速迭代的关键阶段。同时，一个 **High-Risk 的 Bug（V2 引擎每日预算永不重置）** 得到修复，但 **Live canary 测试又现失败案例**，稳定性方面仍需持续关注。今日的社区热点集中在 **Reborn 架构的落地策略** 与 **V2 审批流程** 的用户体验问题上。

### 2. 版本发布

无。

### 3. 项目进展

今日项目核心进展集中在 Reborn 架构的推进和关键 Bug 修复上，项目整体向前迈出了一大步。

-   **核心架构重构 (Reborn) - 重大推进：**
    -   **战略规划与落地计划 (#2987):** 核心贡献者 `serrrfirat` 创建了名为 “Track Reborn architecture landing strategy and grouped PR plan” 的 Issue，将庞大的重构工作拆解为可审查的分组 PR 计划。这标志着 Reborn 架构从概念验证进入有序执行的阶段。
    -   **核心模块已提交审查:** 今日提交了多个 Reborn 基础模块的 PR，均已进入审查流程：
        -   **事件/审计模块 (#2993):** 添加了 `ironclaw_events` 作为持久化事件与审计的底层能力。
        -   **文件系统模块 (#2996):** 添加了 `ironclaw_filesystem` 模块，为后续的抽象文件系统操作打下基础。
        -   **授权控制模块 (#2999):** 添加了 `ironclaw_authorization` 和 `ironclaw_run_state`，引入了能力授权和运行时状态管理。
        -   **安全加固 (#2997):** 修复了基础架构中的两个 Fail-Close 安全问题：JSON 解析深度限制和负值资源估算拒绝。

-   **关键 Bug 修复与合并：**
    -   **修复每日预算永不重置 Bug (#2989 & #1945):** 核心 Bug `#1945` 描述 V2 引擎的 `threads_today` 计数器永不重置，导致每日预算永久耗尽。今天该 Bug 通过 PR `#2989` 被修复并合并。修复方案是让预算重置逻辑具备时区感知能力，解决了之前仅比较 UTC 日期导致的跨时区问题。
    -   **修复 V2 Bridge 重启审批缺陷 (#2978):** 修复了 V2 引擎 `restart` 命令绕过 `AskEachTime` 审批策略的缺陷，现已合并。
    -   **修复 V2 Tool 信息发现机制 (#2994):** 修复了 `tool_info` 不能正确显示引擎原生 Action 的 Bug，现已合并。

-   **基础设施与CI/CD:**
    -   **Canary 报告机制 (#2874):** 一个大型 PR 被提出，它将带来 21 个 E2E 探测脚本和新的 `workflow-canary` 流水线，旨在显著提升测试覆盖率和可观测性。
    -   **依赖更新 (#2973):** Dependabot 自动提交了包含 39 个依赖更新的批量 PR，用于维护项目依赖的健康。

### 4. 社区热点

-   **Reborn 架构集成计划 (#2987):** 这是今日讨论最深入的 Issue 之一（7条评论），由 `serrrfirat` 创建。社区关注点在于如何将一个庞大的重构分阶段、安全地合并到主分支，避免给审阅者带来巨大负担。它反映了核心团队在管理复杂架构演进方面的成熟思考。
-   **V2 审批流程混乱 (#2991):** 来自 `joe-rlo` 的 Bug 报告在社区引发了关注（尽管评论数为0，但作为“Bug Bash”活动产物，它代表着真实用户痛点）。用户报告了 V2 引擎审批流程在提示不清、路由错误、强制串行执行等方面的问题，直接影响用户体验。
-   **WeCom/WeChat 渠道集成 (##2394 #1666):** 这两个由 `hanakannzashi` 贡献的大型 PR 仍在持续更新和活跃中，虽然评论数不高，但作为“社交”功能的重要扩展，它们代表了社区对铁爪实用性提升的长期兴趣。

### 5. Bug 与稳定性

-   **[严重] Live Canary 测试失败 (#3005):** 自动化 CI 报告 `private-oauth` 登录验证 Canary 测试失败。这是生产环境稳定性的一个直接警报，需要立即排查。
-   **[中] V2 审批流程错乱 (#2991):** 用户报告 V2 引擎审批流程的多个问题，严重影响使用。目前无关联的 Fix PR。
-   **[中] Google OAuth 测试被检测为机器人 (#2887):** 自动化测试被 Google 拦截，这可能导致 CI 测试不稳定。目前无 Fix PR。
-   **[低] 升级后 Routine/Mission 迁移问题 (#2982):** 用户报告在升级到 0.26.0 版本后，旧的聊天记录被错误分类。尽管影响范围可能有限，但可能造成数据混淆。

### 6. 功能请求与路线图信号

-   **统一 Harness 测试 (#2828):** 这个追踪器 Issue 提出将分散的各类测试（回放、E2E、Canary、评估）整合为一个统一的测试框架。这被认为是提升项目质量的关键一步，与今日提交的 Canary 报告 PR (#2874) 目标一致，很有可能会被纳入下一阶段的开发计划。
-   **图像工具独立配置 (#3004):** 由 `hanakannzashi` 提交的大型 PR，旨在为图片生成、编辑、分析等工具提供独立于聊天 LLM 的配置和 API 密钥。这表明社区对图像处理能力有明确需求，并希望获得更灵活的配置。
-   **阿里云编程助手支持 (#1446):** 这个大型 PR 仍在活跃更新。它为铁爪引入了对国内云服务（阿里云）的支持，反映出社区对多样化和本地化 LLM 提供商的需求。

### 7. 用户反馈摘要

-   **痛点：**
    -   **审批流程体验差：** 用户 `joe-rlo` 详细描述了 V2 引擎审批流程在路由、提示和并发性上的糟糕体验 (`#2991`)。
    -   **升级后的数据不一致：** 用户 `sunglow666` 报告在升级后聊天记录被错分类为 Mission，直接导致数据混乱 (`#2982`)。
-   **使用场景：**
    -   **集成企业通信：** 从 `#2394` (WeCom) 和 `#1666` (WeChat) 的持续开发可以看出，社区对将铁爪集成到日常工作通讯工具中有强烈需求。
    -   **多LLM提供商支持：** `#1446` (阿里云) 表明用户有在不同云和区域使用不同模型的需求。

### 8. 待处理积压

-   **高风险/长期待办：**
    -   **待审查的 Reborn 架构 PR 集群：** 今日提交的 `#2993`, `#2996`, `#2997`, `#2999` 是 Reborn 架构的核心组成部分，且多处涉及 DB 迁移及高复杂性，需要关键维护者优先投入审查。
    -   **内存投毒安全修复 (#2092):** 这是一个标记为 `security` 和 `MEDIUM` 风险的 PR（间接提示注入），自 4月7日提交以来已开放 21 天。至今未有合并，这是一个需要关注的安全积压项。
-   **低风险/长期待办：**
    -   **WeChat/WeCom 渠道集成 (##2394, #1666):** 这两个大型功能 PR 开放时间较长（1666 已超过一个月），需要社区和核心团队合力推动审查，避免成为“僵尸 PR”。
    -   **阿里云支持 (#1446):** 同样是一个开放逾月的大型功能 PR，可以作为引入新贡献者的良好契机，但需要更多维护者参与代码质量把控。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 开源项目分析师，以下是根据 2026-04-28 的项目数据生成的动态日报。

---

# LobsterAI 项目动态日报 | 2026-04-28

## 今日速览

今日项目整体活跃度**极高**，尤其体现在 PR 数量上，24小时内处理了32条PR。核心开发团队正在进行一次大规模的**稳定性与一致性重构**，重点聚焦于 Cowork 模式下的会话模型隔离、配置持久化以及 Windows 平台兼容性问题。同时，社区反馈的 DeepSeek V4 模型兼容问题已得到快速修复。虽然 Issues 数量不多，但涌现了关于界面美化的新需求，预示着项目可能进入体验打磨阶段。

## 版本发布

### LobsterAI 2026.4.25
- **发布日期**: 2026-04-25
- **更新内容**:
    - `fix(cowork)`: 修复了编辑工具的 `edits-array` 输入格式的 DiffView 显示问题。
    - `feat(settings)`: 为记忆搜索添加了 embedding 配置选项。
- **破坏性变更**: 无。
- **迁移注意事项**: 如果使用了自定义的 embedding 服务，建议在设置中检查并确认相关配置。

## 项目进展

今日核心开发团队合并了**18条**PR，项目进展显著，主要体现在以下方面：

1.  **Cowork 会话模型** **隔离** **与持久化**：通过四条关键 PR([#1850](https://github.com/netease-youdao/LobsterAI/pull/1850)、[#1843](https://github.com/netease-youdao/LobsterAI/pull/1843)、[#1845](https://github.com/netease-youdao/LobsterAI/pull/1845)、[#1842](https://github.com/netease-youdao/LobsterAI/pull/1842))，修复了Cowork模式下多会话模型配置互相覆盖、模型引用失效等问题。现在每个会话的模型选择在创建时被锁定到 SQLite，且当Agent模型无效时会优雅降级至全局默认模型，显著提升了Cowork模式的稳定性和可预期性。

2.  **Windows 平台兼容性修复**：解决了两个长期存在的 Windows 痛点：
    - **安装问题**：修复了 NSIS 安装程序因退出码比较逻辑错误导致的安装失败问题([#1841](https://github.com/netease-youdao/LobsterAI/pull/1841))。
    - **运行时问题**：修复了钉钉渠道在 Windows 上因文件 URL 格式错误（缺少第三个斜杠）导致图片无法发送的问题([#1848](https://github.com/netease-youdao/LobsterAI/pull/1848))。

3.  **技能系统与稳定性**：
    - 修复了在 Windows 上删除技能目录前未释放文件监视器导致的删除失败问题([#1851](https://github.com/netease-youdao/LobsterAI/pull/1851))。
    - 通过增加启动超时时间并添加诊断日志，提高了 Windows 系统下应用的启动稳定性与排错能力([#1846](https://github.com/netease-youdao/LobsterAI/pull/1846))。
    - 修复了配置服务初始化失败时会用默认配置覆盖用户存储的问题([#1840](https://github.com/netease-youdao/LobsterAI/pull/1840))。

4.  **企业级功能与日志安全**：
    - 修复了企业版多账户配置同步问题([#1839](https://github.com/netease-youdao/LobsterAI/pull/1839))。
    - 增强了日志安全，添加了对 API Key 等敏感信息的自动脱敏处理（如 `0dd***Nn` 格式）([#1844](https://github.com/netease-youdao/LobsterAI/pull/1844))。

## 社区热点

今日社区最活跃的讨论集中在 **DeepSeek V4 模型兼容性问题**：

- **Issue #1813**: [DeepSeek V4 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1813)
    - **状态**: 活跃（5条评论）
    - **诉求**: 用户报告使用 DeepSeek V4 模型时出现 `LLM request failed: provider rejected the request schema or tool payload.` 错误。
    - **分析**: 这是一个典型的模型兼容性问题，通常与工具调用（tool calling）schema 的格式有关。社区反应迅速，该 Issue 已直接关联到一个已合并的 PR #1847，表明团队对此类模型兼容性问题的响应非常及时。

- **Issue #1849**: [追问时会出现无限NO_REPLY](https://github.com/netease-youdao/LobsterAI/issues/1849)
    - **状态**: 新开（0条评论）
    - **诉求**: 用户报告在连续对话时，模型提前完成输出但前端无响应，导致界面卡死。
    - **分析**: 这是一个影响核心体验的 Bug。虽然尚无讨论，但其严重性较高，可能预示着任务调度或流式输出方面存在竞态条件。

## Bug 与稳定性

| 严重程度 | Issue / PR | 问题描述 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **严重** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时出现无限 `NO_REPLY` 或输出中断。 | 未修复 |
| **高** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 模型工具调用失败。 | **已修复** ([PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847)) |
| **中** | [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) | `continueSession` 失败时重复推送两条系统错误消息。 | **待合并** |
| **中** | [#73](https://github.com/netease-youdao/LobsterAI/issues/73) | 应用完全无法使用，出现 `404 Not found` 错误。 | **未修复** (过期 Issue) |
| **低** | [#955](https://github.com/netease-youdao/LobsterAI/issues/955) | 私有部署模型无法正常使用 Skill。 | **已关闭** |

**总结**：今日修复了 DeepSeek V4 这个高优先级 Bug，并修复了多个 Windows 平台下的稳定性问题。但新出现的 `NO_REPLY` 问题需要重点关注。

## 功能请求与路线图信号

- **界面优化需求明确**：**Issue #1836** “整体界面能够找专业的设计重新设计美化一下吗” 获得了开发者“+1”的反应，并创建了。这标志着随着功能趋于稳定，社区对用户体验和视觉设计（UI/UX）的呼声开始提高。结合近期对Cowork交互流程的大量修复，项目下一阶段重心可能会向交互体验和界面设计转移。
- **已有Hackathon的PR**: PR #1527 实现了一个“AI诊断”入口，用于在邮件连接失败时一键将错误信息提交给AI分析。这个PR从4月初开始，仍在待合并状态，代表了社区对智能化排错能力的期望。

## 用户反馈摘要

- **“用不了”综合征**：从 #73 “根本用不了”、#106 “指定自定义模型无法调用” 等旧Issue来看，新用户首次配置和遇到模型兼容性问题时，上手门槛较高。建议官方提供更详细的错误引导和“一键诊断”功能。
- **对UI的强烈不满**：Issue #1836 的用户直指界面“过于丑了”，认为相比竞品“用起来不太舒服”。这表明虽然功能强大，但当前的UI设计已开始影响用户的采纳意愿。
- **Cowork模式仍是核心痛点**：关于Cowork模式的模型选择、会话管理等问题（#1849, #1813）仍是今日反馈高频区，反映出Cowork作为核心功能，其复杂性和稳定性是当前用户最大的使用障碍。

## 待处理积压

以下为应得到维护者关注但长期未关闭或合并的重要事项：

1.  **[Stale]** **Issue #73**: [根本用不了](https://github.com/netease-youdao/LobsterAI/issues/73)
    - **状态**: 创建于2026-02-24，最后更新于2026-04-27，有10条评论，无标签或分配。这是一个最基础的功能无法使用的严重 Bug，积压两个月仍未解决，可能影响新用户的转化率。

2.  **[OPEN]** **PR #1277**: [chore(deps-dev): bump the electron group](https://github.com/netease-youdao/LobsterAI/pull/1277)
    - **状态**: 由 Dependabot 自动创建于2026-04-02，更新 Electron 依赖，但因`electron-builder`的macOS公证问题而被阻塞。此 PR 阻塞了 Electron 框架升级，可能影响安全性和性能。

3.  **[OPEN]** **PR #1527**: [feat(skill): 邮件连接失败时新增 AI 诊断入口](https://github.com/netease-youdao/LobsterAI/pull/1527)
    - **状态**: 创建于2026-04-07，仍有冲突或需要Review。这是一个非常有价值的社区贡献，能够显著降低用户配置邮件服务器的挫败感。

4.  **[OPEN]** **PR #1835**: [fix(cowork): 去除 continueSession 失败时重复推送的系统错误消息](https://github.com/netease-youdao/LobsterAI/pull/1835)
    - **状态**: 创建于2026-04-27，待合并。这是一个优化用户体验的小而美的修复，应尽快合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-04-28

---

## 1. 今日速览

过去24小时内，Moltis 项目保持高活跃度，共处理 **6 条 Issues** 和 **17 条 PR**。其中 **5 个 PR 仍在待合并**，**12 个已合并/关闭**，显示开发节奏紧凑。**4 个历史 Bug 被关闭**，同时新开 2 个 Bug（Docker构建网络问题、Telegram集成问题）。社区贡献者 **Cstewart-HC** 和 **penso** 为主要推动力，项目在代码索引自动化、UI 体验、通道编译优化等方面取得实质性进展。整体健康度良好，但 Docker 环境依赖问题值得关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（重要合并/关闭 PR）

| PR | 状态 | 内容概要 | 贡献者 |
|----|------|---------|--------|
| [#898](https://github.com/moltis-org/moltis/pull/898) | ✅ 已合并 | **Agent 架构简化** — 移除“主代理”概念，使主代理成为普通数据库行，路由随处可用。对应 Issue #774。 | penso |
| [#897](https://github.com/moltis-org/moltis/pull/897) | ✅ 已合并 | **Skills UI 修复+体验改进** — 修复RPC错误信息显示为`[object Object]`；启用技能时自动信任，移除额外信任步骤。 | penso |
| [#895](https://github.com/moltis-org/moltis/pull/895) | ✅ 已合并 | **前端资产重构** — 移除 Git 中约 92K 行生成的 JS/CSS，改为编译时检查 + 统一构建脚本，减少仓库体积。 | penso |
| [#894](https://github.com/moltis-org/moltis/pull/894) | ✅ 已合并 | **安全回归测试** — 为 Hook 断路器 vs Block 动作添加回归测试，修复 #547 安全漏洞（断路器不会阻止安全 Hook）。 | penso |
| [#893](https://github.com/moltis-org/moltis/pull/893) | ✅ 已合并 | **Matrix OIDC 登录修复** — 修复反向代理场景下 Matrix OIDC 因重定向 URI 类型（Native→Web）被拒绝的问题。 | penso |
| [#892](https://github.com/moltis-org/moltis/pull/892) | ✅ 已合并 | **会话名称回归修复** — 恢复 #886 中丢失的会话名称显示和内联重命名功能。 | penso |
| [#902-900（多次迭代）](https://github.com/moltis-org/moltis/pull/902) | ✅ 已合并（3次迭代） | **代码索引自动化（Phase 1）** — 实现启动时/创建时/定时自动索引，含去重与文件监听。当前 #903 为开放版本。 | Cstewart-HC |
| [#891](https://github.com/moltis-org/moltis/pull/891) / [#889](https://github.com/moltis-org/moltis/pull/889) | ✅ 已合并 | **Telegram 通道可编译可选** — 减少默认二进制体积和构建时间。 | Cstewart-HC |

**项目向前迈进：**
- Agent 架构简化（#898）是架构级改进，降低了新手理解门槛
- 安全 Hook 测试（#894）补齐了关键安全缺口
- 代码索引自动化（#903 进行中）是大型特性，已进入 Phase 1 基础建设

---

## 4. 社区热点

| # | 类型 | 标题 | 评论 | 👍 | 链接 |
|---|------|------|------|----|------|
| #896 | Bug | Docker build fails: "Temporary failure resolving 'ports.ubuntu.com'" | 1 | 0 | [查看](https://github.com/moltis-org/moltis/issues/896) |
| #905 | Bug | Problem with Telegram | 0 | 0 | [查看](https://github.com/moltis-org/moltis/issues/905) |
| #903 | PR | Auto-trigger indexing with deduplication and file watchers | — | 0 | [查看](https://github.com/moltis-org/moltis/pull/903) |

**分析：**
- **#896 Docker 构建失败** 是目前讨论最活跃的 Issue（1条评论），用户 `orangesoncom` 报告在 `apt-get update` 阶段出现 DNS 解析临时失败。这可能是 CI 环境或镜像源配置问题，未关联 PR，需维护者关注 Dockerfile 中网络依赖稳定性。
- **#905 Telegram 问题** 是今日新建 Bug，作者 `RokkuCode` 未提供详情，但结合近期 Telegram 通道变为可选（#891），可能存在配置或迁移问题。
- **#903 代码索引自动触发 PR** 是今日唯一开放的重要特性 PR，收到较多更新（3次迭代后关闭→重新开为 #903），反映社区对自动化索引需求的强烈关注。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 说明 | 是否有 Fix PR |
|---------|-------|------|------|-------------|
| 🔴 高 | [#905](https://github.com/moltis-org/moltis/issues/905) Telegram 问题 | OPEN | 用户 `RokkuCode` 报告 Telegram 集成问题，未提供细节。可能与通道可选化迁移有关。 | ❌ 无 |
| 🟡 中 | [#896](https://github.com/moltis-org/moltis/issues/896) Docker 构建 DNS 失败 | OPEN | Docker 构建时 `apt-get update` 因 DNS 临时失败中断。非代码 Bug，属于环境依赖。 | ❌ 无 |
| 🟢 低 | [#547](https://github.com/moltis-org/moltis/issues/547) Hook 电路断路器安全绕过 | ✅ 已关闭 | 已由 #894 添加回归测试确认修复。 | ✅ #894 |
| 🟢 低 | [#317](https://github.com/moltis-org/moltis/issues/317) Jinja 异常：系统消息必须在开头 | ✅ 已关闭 | 旧 Bug，今日被关闭。 | ✅ |
| 🟢 低 | [#888](https://github.com/moltis-org/moltis/issues/888) 会话名称不可编辑回归 | ✅ 已关闭 | 由 #892 修复。 | ✅ #892 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 标题 | 状态 | 路线图信号 |
|----------|------|------|------|-----------|
| [#774](https://github.com/moltis-org/moltis/issues/774) | Feature | 简化主 Agent/Agent 架构 | ✅ 已实现（#898） | **已完成**，主代理概念已移除 |
| [#876](https://github.com/moltis-org/moltis/pull/876) | PR | Web UI 文件上传按钮 | OPEN | 提升 Web 聊天用户体验，匹配主流 LLM 平台 |
| [#903](https://github.com/moltis-org/moltis/pull/903) | PR | 代码索引自动化（Phase 1） | OPEN | **核心特性**，消除手动索引操作 |
| [#904](https://github.com/moltis-org/moltis/pull/904) | PR | 命令面板（Cmd+K） | OPEN | 提升导航效率，适合高级用户 |
| [#826](https://github.com/moltis-org/moltis/pull/826) | PR | 折合模型配置接入辅助 Provider | OPEN | 折合功能配置解耦 |
| [#899](https://github.com/moltis-org/moltis/pull/899) | PR | Discord/MSTeams 通道可编译可选 | OPEN | 延续通道可选化趋势，进一步减少构建体积 |

**判断：**
- **代码索引自动化（#903）** 大概率进入下一版本（v0.x + 1），已有多轮迭代。
- **Web UI 文件上传（#876）** 和 **命令面板（#904）** 属于前端体验提升，可能被纳入紧邻版本。
- **通道可选化（#899）** 延续 #891 模式，极有可能被合并。

---

## 7. 用户反馈摘要

- **消极反馈**：
  - `orangesoncom`：Docker 构建因 `ports.ubuntu.com` DNS 解析失败中断，影响CI/新用户首次构建体验。
  - `Cstewart-HC`：在 #888 中报告 PR #886 错误移除了会话名称编辑功能，属于 UI 回归，虽已修复，但反映出对 UI 变更的测试覆盖需加强。

- **改进方向**：
  - `penso` 在 #898 中移除主代理概念，回应了用户 `vvuk` 在 #774 中提出的“Agent 架构过于笨重”问题，标志着架构明确趋向扁平化和灵活性。

- **无强烈不满**：今日无用户表达使用困难或功能缺失的强烈情绪。

---

## 8. 待处理积压

| 类型 | 项目 | 状态 | 最后更新 | 问题描述 |
|------|------|------|---------|---------|
| PR | [#876](https://github.com/moltis-org/moltis/pull/876) Web UI 文件上传 | OPEN | 2026-04-28 | 已3天未合并，无 Review |
| PR | [#826](https://github.com/moltis-org/moltis/pull/826) 折合模型配置 | OPEN | 2026-04-28 | 已6天，涉及 Provider 配置解耦，无 Reviewer 分配 |
| Issue | [#896](https://github.com/moltis-org/moltis/issues/896) Docker DNS 失败 | OPEN | 2026-04-27 | 影响构建稳定性，暂无回复或关联 PR |
| Issue | [#905](https://github.com/moltis-org/moltis/issues/905) Telegram 问题 | OPEN | 2026-04-28 | 新开，信息不足，需作者补充细节 |

**提醒维护者关注：**
- **#826** 已停留6天，涉及核心配置逻辑，建议尽快分配 Reviewer。
- **#896** 的 Docker 网络问题可能影响新用户 onboarding，建议在 Dockerfile 中加入重试机制或切换镜像源。
- **#876** 的 Web UI 文件上传是社区期待的功能，避免长期搁置。

---

*报告生成时间：2026-04-28 23:00 UTC*  
*数据来源：Moltis GitHub 仓库 (github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现在为您呈上基于 CoPaw (github.com/agentscope-ai/CoPaw) 项目数据的 2026-04-28 项目动态日报。

---

# CoPaw 项目日报 (2026-04-28)

## 1. 今日速览

- **整体状态**: 项目今日维持**高度活跃**状态，Issue 和 PR 的更新处理量（共 99 条）与上个周期持平，显示出社区和团队的持续高投入。
- **活跃度评估**: **高**。24小时内关闭了25个Issues和27个PRs，问题解决效率较高。但仍有大量新问题被提出，尤其是在稳定性和渠道功能方面。
- **关键信号**: 项目在修复功能性 Bug（如配置丢失、MCP 卡死）的同时，也积极通过 PR 推进新功能（如异步会话标题生成、模型选择器重构），呈现“修复与迭代并行”的健康态势。

## 2. 版本发布

- **无新版本发布**。当前最新版本推测仍为前几日的 v1.1.4.post2。项目正处于发布周期的“功能修复与积累”阶段。

## 3. 项目进展

今日合并/关闭了 **27 个 PR**，高频贡献者 `bowenliang123` 持续活跃。以下是重要进展：

- **渠道功能增强**:
    - **企微命令修复 (PR #3903)**: 针对企微群聊中 `/approval` 命令无法识别的问题，提供了关键修复。通过去除群聊中的 `@机器人` 前缀，确保命令能被正确解析。**此 PR 直接关联并有望关闭 Issue #3901。**
    - **QQ语音支持 (PR #3887, #3845)**: 新增了对 QQ 语音消息（`.amr`, `.silk` 格式）的支持，使其能被正确识别为语音并转发转录，同时优化了消息体类型映射。
    - **飞书通道静默化 (PR #3890)**: 为飞书 WebSocket 通道中表情回应等事件添加了空处理器，消除了日志中频繁出现的 `processor not found` 错误，提升了部署体验。
- **核心功能优化**:
    - **Agent 上下文管理 (PR #3882, #3895)**: 引入了轻量级上下文管理器及压缩的降级回退机制，同时修复了工具调用结果超限导致上下文丢失的严重 Bug。
    - **聊天体验优化 (PR #3829)**: 移除了简陋的“用户消息前10个字符”作为会话标题的做法，改为通过 LLM 异步生成更具可读性的标题。
- **基础设施与性能**:
    - **模型请求去重 (PR #3897)**: 解决了打开 `/chat` 页面时，前端多次重复请求模型列表接口的问题，减少了不必要的网络开销。
    - **Vite 构建升级 (PR #3727)**: 网站项目的构建工具从 Vite 6 升级到 V8，显著提升了构建性能。

## 4. 社区热点

- **[#3843] Session history disappears** (6 评论): 用户反馈会话历史在未操作情况下突然消失，严重影响使用连续性。此问题触及 AI 助手应用的核心体验——记忆持久性，受到社区高度关注。
- **[#3869] 提供 channel 侧高危命令批准能力** (6 评论): 用户强烈要求在非 Web 渠道（如钉钉、飞书）也能批准高危命令。这暴露了当前仅支持 Web 端审批的设计缺陷，是社区呼声极高的功能需求。
- **[#3430] QwenPaw和CoPaw关系是啥？** (7 评论): 用户对项目名称和定位感到困惑，这反映了项目持续演进中品牌和文档更新的滞后性，需要官方明确说明。
- **热点诉求分析**:
    1.  **对稳定性和一致性的强烈需求**: 会话丢失、配置重置、暂停无效等问题是用户最不能忍受的，这些讨论反映了用户对“基础功能可用”的底线要求。
    2.  **对多端体验平等的期待**: 用户不满足于仅在 Web 端获得完整功能，希望移动端、IM 渠道（飞书、企微）能拥有同样强大的控制能力（如审批、命令）。
    3.  **对透明度的追求**: 用户想要了解 Token 消耗 (#3366)、任务进度 (#3889) 等背后运行状态，以更好地控制成本和调试。

## 5. Bug 与稳定性

当日报告的 Bug 分布较为集中，多数已有对应 PR 修复。

| 严重程度 | 问题描述 | Issue 链接 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **严重** | **Session 历史消失** (#3843) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 待定，无关联 PR |
| **严重** | **Agent 进入无限“思考”状态，SSE 流未关闭** (#3871) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3871) | 待确认，无明确关联 PR |
| **严重** | **MCP 导致聊天无限卡死** (#3822) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3822) | PR #3904 (MCP 客户端超时传递) 部分相关 |
| **中等** | **Web UI 暂停按钮无效** (#3850) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3850) | 待定，无关联 PR |
| **中等** | **chromadb Rust 绑定段错误导致进程崩溃** (#3854) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3854) | 待定，无关联 PR |
| **中等** | **企微群聊 /approval 命令不生效** (#3901) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3901) | **已有 PR #3903 修复** |
| **中等** | **配置信息丢失** (#3824, #3817) | [链接1](https://github.com/agentscope-ai/QwenPaw/issues/3824) [链接2](https://github.com/agentscope-ai/QwenPaw/issues/3817) | 待定，无明确关联 PR |

**分析**:  **会话历史丢失**和 **Agent 无限思考** 是两个最严重的问题，它们直接破坏了用户的核心交互体验，目前尚未有明确的修复 PR，应作为下一版本优先解决的 P0 级问题。

## 6. 功能请求与路线图信号

- **高优先级、接近落地的功能**:
    - **高危命令多端审批 (Issue #3869)**: 呼声极高，已被立为 Feature，预计会成为渠道侧近期改造的重点。
    - **渠道消息合并与间隔 (Issue #3837)**: 解决了微信等渠道因消息过多被截断的问题，实用性强。
- **可能被纳入下一版本的功能**:
    - **Proactive 消息自定义发送频道 (Issue #3804)**: 用户希望主动消息能推送到飞书、钉钉等，而非仅限于控制台。
    - **Token 消耗实时显示 (Issue #3366)**: 该功能请求已有 PR #3876（UI 模型选择器重构）的讨论背景，可能会结合 UI 更新一同实现。
- **社区贡献预览**:
    - **任务进度实时钩子 (PR #3889)**: 社区贡献者 `sun905` 提交了该功能的迭代版本，通过在 Agent 间传递进度信息，提升多智能体协作的透明度，这是一个有创新性的社区贡献。

## 7. 用户反馈摘要

- **正面反馈**: 社区对高频提交修复和功能增强的 PR（如 session 标题生成）持欢迎态度。贡献者 `bowenliang123` 和 `bxy3045134656` 等的工作受到社区的认可，项目协作氛围良好。
- **负面反馈与痛点**:
    1.  **配置丢失是最大痛点 (Issues #3824, #3817)**: 多位用户反馈，尤其是在容器化部署重启后，Agent 配置、长期记忆向量模型配置等会重置。这直接削弱了用户对产品可靠性的信任。
    2.  **跨渠道体验割裂 (Issues #3869, #3901)**: 用户明确表示，如果高危命令审批、飞书流式输出（#3862）等问题不解决，渠道功能（如钉钉、飞书）将形同虚设。
    3.  **性能与响应问题 (Issues #3499, #3830)**: 部分用户反映 Web UI 访问慢，Windows 桌面端 GUI 在切换长会话时变得卡顿，影响了日常使用效率。

## 8. 待处理积压

- **[#3430] QwenPaw和CoPaw关系是啥？**: 自4月15日提出，已获7条评论，已开放13天。这是一个涉及项目品牌和定位的元问题，建议官方尽快给出明确答复，以消除社区困惑。
- **[#3437] 请求支持 kimi code API**: 自4月15日提出，已获6条评论。这反映了社区对集成更多优秀模型供应商的强烈意愿。项目需要评估是否将此纳入 Provider 支持路线图。
- **[#2252] Python 3.13 环境下的多智能体对话报错**: 这是一个已关闭的老问题，但仍有用户可能遇到。建议维护者在版本说明或 Compatibility 部分明确 Python 版本的推荐配置，避免新手踩坑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据ZeroClaw项目2026年4月27日至28日数据生成的日报。

---

## ZeroClaw 项目动态日报 | 2026-04-28

### 1. 今日速览

项目今日活跃度非常高，社区提交与讨论十分踊跃。过去24小时内，共有 **90条** Issues和PR被更新，其中新开活跃Issue 39个，待合并PR高达41个，表明有大量功能开发和修复工作正在并行推进。当前项目面临多个关键Bug（如新安装配置、成本追踪、加密恢复等）的集中修復期，同时社区对新功能（如网关多语言翻译、微信渠道、ACP协议迭代）的贡献热情高涨。项目整体处于快速迭代与功能膨胀的“双高”阶段，但待合并PR的积压可能需要维护者团队加速审查。

### 2. 版本发布

**今日无新版本发布。** 上一个版本为紧急发布的 `v0.7.3`（因tag问题）。当前社区正在追踪 `v0.7.4` 里程碑 (`#5877`)，该版本预计将涵盖多项关键修复和功能增强。

### 3. 项目进展

今日没有PR被合并或关闭，但多个关键PR的更新表明项目正在稳步推进：

-   **ACP协议v1实现 (`#6167`):** 这是一个 **超大 (XL)** 且 **高风险** 的PR，旨在更新ACP协议至v1版本，以恢复与Nori等外部ACP消费者的连接。它重写了工具调用和背通道逻辑，是渠道层的一次重大升级。
-   **Nextcloud Talk渠道修复 (`#6157`, `#6156`):** 针对Nextcloud Talk渠道的两个Bug修复PR已提交，解决了API调用错误和模型请求超时（约5秒）的问题，这对于依赖本地LLM的用户至关重要。
-   **Webhook工具支持 (`#6080`):** 此高风险修复使得通过 `/webhook` 端点也能执行MCP工具，填补了渠道处理能力的一个关键空白。
-   **Bedrock凭证支持 (`#6168`):** 新增对 `credential_process` 的支持，解决了开发人员在本地使用AWS配置文件时的认证问题。
-   **WeChat渠道恢复 (`#6130`, `#6166`):** 社区正在积极推动恢复并优化被意外回滚的微信个人号渠道，其中 `#6166` 使用了新的API接口，`#6130` 则是对旧代码的恢复和适配。

**项目推进总结：** 核心在于**渠道层（ACP协议、WeChat、Nextcloud Talk）** 的修复与升级，以及对 **开发者体验（AWS凭证、文档翻译）** 的关注。

### 4. 社区热点

当日讨论最热烈的Issue是 **`#6123` (14条评论)**：
-   **链接:** [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)
-   **热度来源:** 新用户报告了一个“新鲜安装”后的配置问题。用户无法将ZeroClaw连接到同一服务器上LXC容器中的Ollama实例。
-   **诉求分析:** 此问题暴露了**首次部署体验**上的一个关键痛点：默认配置模型选择逻辑不够健壮，无法适应复杂的网络拓扑（如跨容器连接）。对于希望快速上手的普通用户来说，这是一个“S1 - workflow blocked”级别的障碍。

此外，关于**v0.7.4版本追踪**的Issue (`#5877`) 也持续获得关注，社区成员正在积极贡献，希望自己的修复/功能被纳入下一个正式版本。

### 5. Bug 与稳定性

今日报告了多个Bug，按严重程度排列如下：

-   **[S1 - 工作流阻断]**
    -   **默认模型配置失败 (`#6123`):** 新安装用户无法配置使用外部的Ollama服务。**（暂无Fix PR）**
    -   **Zeroclaw自测显示错误IP (`#6051`):** 尽管配置了 `0.0.0.0`，但自测报告显示连接 `127.0.0.1`，导致用户困惑。**（暂无Fix PR）**
    -   **Kimi提供者API错误 (`#5600`):** 使用Kimi-code提供者进行流式聊天时，工具调用会触发API报错（`reasoning_content is missing`）。该Bug已标记为`status:in-progress`。**（暂无Fix PR，但已有修复方向）**

-   **[S2 - 降级行为]**
    -   **成本追踪失效 (`#6001`):** 通过Gateway聊天成功，但 `/api/cost` 返回零，且无成本文件生成。**（有Fix PR `#6159`）**
    -   **Matrix语音转录失败 (`#6153`):** 因检测到不支持的音频格式，Matrix渠道的语音转录功能完全失效。**（暂无Fix PR）**
    -   **Nextcloud Talk请求被取消 (`#6156`):** 慢速本地LLM（如LocalAI）在约5秒后会被取消请求。**（有Fix PR `#6156`）**
    -   **委托子会话丢失MCP工具 (`#6136`):** 父会话中延迟加载的MCP工具，即使配置了权限，也无法在委托子会话中使用。**（暂无Fix PR）**

-   **[S0 - 数据丢失/安全风险]**
    -   **Agent聊天窗口CPU尖刺 (`#5125`):** 在Firefox浏览器中输入内容时，会导致CPU多核尖刺。该问题已存在近一个月，需优先处理。**（暂无Fix PR）**

### 6. 功能请求与路线图信号

-   **核心功能增强：**
    -   **多语言翻译文档 (`#6170`):** 社区贡献者正在同步多国语言文档并新增简体中文翻译，信号表明项目用户社区正在全球化。
    -   **Agent聊天窗口清除 (`#6077`):** 用户希望有方法快速清空Web UI聊天窗口。此功能被认为对调试和日常使用很重要。
    -   **从记忆（Memory）恢复聊天 (`#6145`):** 用户希望可以直接从Web UI的记忆表中点击恢复旧的聊天记录，这是一个提升用户体验的强诉求。

-   **渠道与集成扩展：**
    -   **轻量化ZeroClaw (`#6165`):** 社区建议将如 `gws-cli`, `jira` 等工具从代码库中移除，改用Skill机制来实现，以降低项目维护成本和启动体积。此提议反映了社区对项目架构精简的思考。
    -   **WeChat渠道 (iLink Bot, `#6130`, `#6166`):** 两个并行的PR表明社区对支持微信个人号的强烈且一致的需求。
    -   **频道原生“/clear”命令 (`#6150`):** 用户希望能在Telegram/Discord等渠道中通过类似 `/clear` 的指令快速清除上下文记忆，无需借助Agent自然语言解释。

### 7. 用户反馈摘要

-   **积极反馈：** 社区协作氛围良好，贡献者积极提交修复和功能（如`#6168` AWS凭证支持和`#6170`多语言文档）。贡献者在PR中描述清晰，并主动提供测试计划。
-   **痛点与不满：**
    -   **首次部署体验不佳：** `#6123` 反映了新用户在配置外部LLM（如Ollama）时遇到的挫折感，这是一个影响新用户留存的关键问题。
    -   **期望减少内置工具/依赖：** `#6165` 的用户观点指出，项目试图内置太多功能，导致代码臃肿，他们更倾向于轻量、可插拔的架构。
    -   **Web UI交互不流畅：** `#5125` (CPU尖刺) 和 `#6073` (WebUI编辑器光标错位) 的反馈说明Web UI的稳定性和交互体验仍需打磨。
    -   **特定渠道问题：** Nextcloud Talk (`#6157`, `#6156`) 和 Matrix (`#6153`) 的用户报告了功能失效问题，尤其是在连接慢速或非标准LLM服务时，体验下降明显。

### 8. 待处理积压

-   **高优先级Bug积压：**
    -   **`#5125` [S0] CPU尖刺:** 严重等级为数据安全/风险，却是未知组件，且已开放近一个月，至今无修复方向，需要维护者紧急介入复现和分析。
    -   **`#5266` [P1] 配对码显示:** 使用非默认端口时，配对码无法在启动横幅中显示。这是一个“新设备配对”流程的Bug，会影响用户第一印象。
-   **重要但停滞的PR：**
    -   **`#5886` [needs-author-action] Telegram回复:** 此PR旨在改善Telegram群组的对话体验，但因作者需要采取行动而处于停滞状态。维护者可以考虑临时接手或提供更明确的指引。
    -   **`#4878` [已关闭] E2EE恢复:** 尽管此Issue已被关闭，但加密房间密钥恢复的根因并未解决（`recovery().recover()` 不处理房间密钥）。这是一个潜在的回归风险，一旦用户执行恢复操作，加密聊天将完全失效。建议重新审视或明确记录此限制。

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*