# OpenClaw 生态日报 2026-04-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-27 04:34 UTC

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的OpenClaw项目数据，我为您生成了2026年4月27日的项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-04-27

## 1. 今日速览

今日OpenClaw项目社区活跃度**极高**，24小时内产生了500条Issue和500条PR更新，但核心关注点已从新功能转向系统稳定性。项目发布了4个`v2026.4.25-beta`版本，核心是对**语音回复（TTS）系统**进行了全面升级。然而，社区讨论最激烈、获得最多点赞的Issue（#65302）却是一封来自用户的“告别信”，尖锐地批评了近期更新破坏了产品体验，这反映了快速迭代背后用户对稳定性的强烈诉求。同时，大量关于“`ANTHROPIC_MODEL_ALIASES`”初始化错误的重复Issue被关闭，表明此前的严重回归问题已得到修复。

## 2. 版本发布

项目在4月25日连续发布了4个beta版本（`v2026.4.25-beta.1` 至 `beta.4`），内容一致，核心更新如下：

-   **发布版本**: `v2026.4.25-beta` 系列
-   **突出亮点**: **语音回复（TTS）系统大升级**。新增了 `/tts latest` 命令、聊天范围自动TTS控制、角色（Personas）支持、以及按代理/账户的覆盖设置。同时扩展了TTS提供商，新增了对 **Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3** 的支持。感谢贡献者 @leonchui, @zoujiejun, @solar2ain。

## 3. 项目进展

今日合并/关闭的PR数量为32个，重点修复了多个关键Bug和回归问题。主要进展体现在：

-   **核心Bug修复**: 大量关于 **“`ANTHROPIC_MODEL_ALIASES` 未初始化”** 的重复Issue被标记为已关闭（#45540, #44718, #45057, #45368, #45499, #46039等），表明该严重影响CLI和Gateway启动的回归问题已得到最终解决。
-   **平台兼容性修复**: 修复了macOS上通过Homebrew安装的二进制文件检测失败（#17890）和macOS应用启动崩溃问题（#37550）。
-   **功能增强**: PR #70854 显示，项目已迅速跟进OpenAI在4月23日发布的**GPT-5.5模型**，并已将其纳入模型目录。
-   **TTS功能迭代**: 4个Beta版本的集中发布标志着TTS功能进入了一个全新的阶段，从核心功能到提供商生态都得到了补全。

总体而言，项目在**修复前期积累的严重回归Bug**方面取得了关键进展，并迅速跟进前沿模型，同时**大幅增强了语音交互能力**。

## 4. 社区热点

-   **最受关注Issue**: **[【放弃前的最后嘱咐】Your Updates Are Killing Your Product — A Phenomenon-Level Project in Self-Destruct Mode](https://github.com/openclaw/openclaw/issues/65302)**
    -   **评论**: 8 | **👍**: 5 | **状态**: OPEN
    -   **分析**: 这是一位署名“邵小红”的AI Agent发出的尖锐批评。该Issue详细列举了近期更新中的多个问题，如“信息泄露”、“接口不稳定”、“反馈不响应”等，认为快速的功能迭代牺牲了产品的稳定性和用户体验。这代表了社区中一批深度用户对“重功能、轻稳定”开发策略的强烈不满，是项目需要认真审视的信号。

-   **活跃Bug讨论**: **[Bug]: OpenClaw returns "run Error : LLM Request Failed" on RISC-V64 System](https://github.com/openclaw/openclaw/issues/54253)**
    -   **评论**: 10 | **👍**: 3 | **状态**: OPEN
    -   **分析**: 关于RISC-V64架构支持的讨论热度持续，表明项目在非主流架构上的适配需求真实存在，但进度可能滞后。

## 5. Bug 与稳定性

今日报告的Bug中，多个问题严重影响用户体验，值得优先关注：

| 严重程度 | Bug/问题 | Issue链接 | Fix PR状态 |
| :--- | :--- | :--- | :--- |
| **高** | **所有CLI命令因 `ANTHROPIC_MODEL_ALIASES` 初始化错误而崩溃 (回归)** | [#44718](https://github.com/openclaw/openclaw/issues/44718) 等 | **已关闭** (已修复) |
| **高** | **Fallback模型永久覆盖主模型配置，导致主模型不再被重试** | [#47705](https://github.com/openclaw/openclaw/issues/47705) | OPEN |
| **高** | **代理超载时，Anthropic API 的 `overloaded_error` 不触发模型回退** | [#49696](https://github.com/openclaw/openclaw/issues/49696) | OPEN |
| **中** | **Gateway每11分钟因配置备份+热重载Bug而崩溃 (Windows)** | [#49188](https://github.com/openclaw/openclaw/issues/49188) | OPEN |
| **中** | **macOS App启动时崩溃 (Fatal access conflict)** | [#37550](https://github.com/openclaw/openclaw/issues/37550) | **已关闭** (已修复) |
| **低** | **Docker沙箱挂载在Ubuntu 24.04上完全失效** | [#49309](https://github.com/openclaw/openclaw/issues/49309) | OPEN |

## 6. 功能请求与路线图信号

-   **热门功能请求**: **[Feature: Verbal dialogue with OpenClaw agents (STT/TTS integration)](https://github.com/openclaw/openclaw/issues/49246)**
    -   **信号**: 该Issue与今日发布的TTS升级（Beta版本）高度吻合。说明社区对语音对话的需求非常强烈，并且项目方已迅速响应并实现。这表明 **“多模态交互”，特别是语音交互，是OpenClaw近期的核心路线图方向**。

-   **潜在的高优先级需求**: **[Feature Request: External Memory Provider API for Zero-Downtime Context Compaction](https://github.com/openclaw/openclaw/issues/49233)**
    -   **信号**: 该功能请求关注的是**零停机上下文压缩**，解决当前30-60秒的Agent“黑屏”问题。结合PR #42014（增加会话同步状态可观测性）和Issue #40418（会话记忆保存），可以看出项目正在系统性地提升**长期记忆和上下文管理**能力，这是构建可用性AI助手的关键环节。

## 7. 用户反馈摘要

-   **主要痛点**:
    -   **更新破坏稳定性** (Issue #65302): 多位用户反馈频繁更新引入了新的、更严重的Bug，导致“每天都需要重新学习一个系统”，体验极差。
    -   **模型回退机制失效** (Issue #47705, #49696): 配置的fallback模型要么永久替换主模型，要么在API过载时不触发，导致服务中断，用户对此感到困惑和沮丧。
    -   **跨平台兼容性问题** (Issue #17890, #54253): macOS的PATH检测、Windows的EBUSY更新错误、RISC-V架构的请求失败，显示出平台适配方面仍有不足。

-   **使用场景**:
    -   用户@BenStringer3 提出了将OpenClaw与 **Home Assistant** 硬件集成的需求（#49246），希望实现自然语音对话，展示了项目在**智能家居**领域的应用潜力。
    -   用户@smonett 提交了一份详细的、包含11项功能请求的 **“Meta” Issue** (#65824)，表明深度用户正在将OpenClaw用于高强度的日常工作和自动化任务。

## 8. 待处理积压

以下为一些长期未得到回应的Issue和PR，可能维护者已注意到但未分配资源。建议关注：

-   **[OPEN] [stale] Regression: Gemini reasoning still leaks into chat on v2026.3.8** [#41494](https://github.com/openclaw/openclaw/issues/41494) - Gemini模型推理内容泄露问题在3.8版本后再次出现，虽被标记为`stale`，但影响用户体验。
-   **[OPEN] [stale] [Bug]: `openclaw update` command fails with EBUSY error on Windows** [#40540](https://github.com/openclaw/openclaw/issues/40540) - Windows平台的更新Bug已存在近两个月，影响所有Windows用户。
-   **[OPEN] [stale, size: L] fix(telegram): batch fix 13 Telegram channel bugs** [#42059](https://github.com/openclaw/openclaw/pull/42059) - 这是一份批量修复13个Telegram频道问题的PR，但已标记为`stale`超过一个月，值得关注其为何未被合并。
-   **[OPEN] QMD memory indexing can recurse into symlink loops...** [#54463](https://github.com/openclaw/openclaw/issues/54463) - 关于QMD内存索引因符号链接循环而失败的问题，涉及健壮性修复。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目资深技术分析师，现基于您提供的各项目2026年4月27日动态日报，为您呈上横向对比分析报告。

---

## 2026-04-27 个人AI助手开源生态横向对比分析报告

### 1. 生态全景

今日（2026-04-27），个人AI助手与自主智能体开源生态呈现出 **“高活跃、深分化、强需求”** 的态势。核心项目均在快速迭代，但方向已出现明显分野：**OpenClaw** 作为生态标杆，正经历“重功能、轻稳定”带来的社区信任挑战；以 **NanoBot** 和 **ZeroClaw** 为代表的第二梯队，则在深耕模型容灾、多模态交互与架构重构；而 **IronClaw** 等更聚焦特定场景（如企业微信）的项目则进入了深度功能打磨期。社区对**模型兼容性、系统稳定性、多模态交互**的呼声空前一致，标志着行业正从“功能探索”转向“可靠性巩固”与“精细化体验”阶段。

### 2. 各项目活跃度对比

| 项目名称 | Issues 更新数 | PR 更新数 | 版本发布 | 健康度评级 | 核心指标 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.25-beta` 系列 (4个) | 🟡 **关注** | 极高吞吐，但用户满意度下降 |
| **NanoBot** | 13 | 129 (24个合并/关闭) | 无 | 🟢 **优秀** | 高PR吞吐，社区反馈与修复正向循环 |
| **Hermes Agent** | 50 | 50 (约40个合并/关闭) | 无 | 🟢 **优秀** | 高效清除技术债务，社区热情高 |
| **PicoClaw** | 6 | 12 | `nightly` | 🟢 **优秀** | 活跃，有明确的功能与硬件集成诉求 |
| **NanoClaw** | 13 | 26 (16个合并/关闭) | 无 | 🟢 **良好** | 密集迭代，聚焦v2稳定性与平台适配 |
| **NullClaw** | 1 | 0 | 无 | 🟡 **关注** | 偶有社区报告严重Bug，活跃度低 |
| **IronClaw** | 5 | 8 (1个合并) | 无 | 🟡 **关注** | 社区贡献活跃，但官方响应与CI健康度欠佳 |
| **LobsterAI** | 5 | 10 (10个合并) | 无 | 🟢 **优秀** | 快速响应核心Bug，社区反馈高效闭环 |
| **Moltis** | 高 (13 PRs) | 13 | `20260426.05` | 🟢 **优秀** | 极高协同效率，安全与UI修复并行 |
| **CoPaw** | 31 | 10 | 无 | 🟡 **关注** | 用户活跃度高，但配置/备份等基础功能问题集中 |
| **ZeroClaw** | 50 | 50 (22个合并/关闭) | 无 | 🟢 **优秀** | 高开发效率，架构重构与Bug修复同步 |

**说明：**
- **健康度评级**：基于Issues/PR响应速度、核心Bug修复情况、社区情绪综合评估。
- **优秀**：高产出、快速响应、社区正向反馈。
- **关注**：增长迅速但出现稳定性或信任危机。

### 3. OpenClaw 在生态中的定位

- **核心优势与定位**：OpenClaw 是当前生态中**社区规模最大、功能最全、迭代最快的“全能选手”**。其在同一日内发布《v2026.4.25-beta》系列版本、修复大量严重回归Bug、并迅速跟进前沿模型（GPT-5.5），展现了无与伦比的技术驱动力和资源投入。
- **社区规模对比**：从500条Issue和PR的更新量级看，其社区活跃度与影响力远超其他项目，是生态的风向标。第二名 ZeroClaw 的50条/日，与其仍有数量级差距。
- **技术路线差异**：OpenClaw 倾向于 **“全功能集成”** 与 **“高频发布”** 的激进路线，快速上线TTS、模型切换等重磅功能。而同类项目如 **ZeroClaw** 和 **NanoBot** 则更侧重 **“核心架构健壮性”**（如ZeroClaw的Schema重构、NanoBot的模型降级）与 **“模块化可插拔”**（NanoBot的MCP生态）。
- **核心挑战**：OpenClaw 的“重功能、轻稳定”策略正遭遇社区反噬。用户“告别信”Issue是最高亮度的警示信号，表明其激进策略已对用户体验造成实质性伤害。相比之下，NanoBot的“快修复闭环”和ZeroClaw的“稳健重构”可能为其带来更长期的用户信任。

### 4. 共同关注的技术方向

以下需求在多个项目中涌现，证明是行业共同的技术痛点：

1.  **模型容灾与故障切换 (Failover & Fallback)**
    - **涉及项目**: **NanoBot** (#3376, PR #3083), **ZeroClaw** (#5803, #6092)
    - **具体诉求**: 用户期望在LLM提供商限流、超时、降级时，Agent能**自动、无缝地切换**至备用的模型或提供商，确保服务连续性。这与当前普遍依赖单一端点的脆弱架构形成对比。

2.  **语音/多模态交互 (Voice / STT / TTS)**
    - **涉及项目**: **OpenClaw** (Beta版TTS大升级), **NanoBot** (Whisper重试机制), **Hermes Agent**, **Moltis** (语音密钥加密)
    - **具体诉求**: 从简单的文本聊天，向 **“完整的语音对话体验”** 进化。这包括语音输入（STT）、自然语音输出（TTS）、以及在对话中控制TTS行为的能力。

3.  **平台渠道兼容性与适配稳定性**
    - **涉及项目**: **NanoClaw** (Telegram, Signal, Discord), **CoPaw** (微信, QQ频道), **Hermes Agent** (飞书, 元宝), **IronClaw** (企业微信)
    - **具体诉求**: 用户不再满足于单一的Web/CLI体验，要求Agent能无缝接入**所有主流即时通讯和社交平台**，且每个平台的特定功能（如Telegram反应、飞书表格、Discord斜杠命令）都能稳定工作。

4.  **Agent 长期记忆与上下文管理**
    - **涉及项目**: **OpenClaw** (零停机上下文压缩), **NanoBot** (增量Session保存), **ZeroClaw** (频道模式上下文压缩失效)
    - **具体诉求**: 让Agent能够**在长时间、多轮对话中有效管理上下文**，避免“遗忘”或“黑屏”现象，并支持更复杂的任务规划和执行。这是从“对话机器人”升级为“个人AI助手”的核心能力。

5.  **配置持久化与数据备份安全**
    - **涉及项目**: **CoPaw** (#3821, #3824), **OpenClaw** (配置备份Bug), **Moltis** (加密密钥存储)
    - **具体诉求**: 用户核心配置（如模型选择、系统提示词）和数据（会话记录）必须**可靠保存**且不易丢失。这是一个基础但反复出现的痛点，尤其在快速迭代的项目中容易退步。

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 | 今日核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能、高频发布、前沿模型 | 重度AI用户、极客、早期采用者 | 单体化、功能集成度高、无版本妥协 | **稳定危机 vs 功能跃进** |
| **NanoBot** | 多模型容灾、MCP生态、运维友好 | 技术开发者、自动化运维、团队协作 | 模块化、可扩展、强调容错与可观测性 | **模型降级 / MCP净化 / 渠道修复** |
| **Hermes Agent** | 多平台集成 (中国平台)、委托与协作 | 企业用户、多机器人场景、高级任务编排 | 多网关、支持复杂委托与代理间协作 | **平台集成 / 开发者体验 / 技术债务** |
| **PicoClaw** | 轻量级、硬件集成、本地优先 | 硬件爱好者、嵌入式开发者、IoT场景 | 轻内核、强调跨平台与低功耗硬件控制 | **硬件串口 / 模型路由 / 配置诊断** |
| **NanoClaw** | v2架构迁移、容器化与任务调度 | 开发者、DevOps、追求稳定部署的用户 | 基于容器的隔离、强调资源限制与任务健壮性 | **v2稳定性 / 容器资源限制 / 调度Bug** |
| **NullClaw** | 项目已趋于停滞，功能完成度高 | 寻求最终稳定版本的极简用户 | 单一二进制、功能稳定但无新特性开发 | **WSL2兼容性** |
| **IronClaw** | 企业级集成 (WECOM)、运行时安全 | 企业用户、需要严格权限管理的团队 | 基于WASM的沙箱、强调权限边界与模块化 | **企业微信 / 运行时重构 / 测试失败** |
| **LobsterAI** | 专注DeepSeek、Cowork协作、快速响应 | 以DeepSeek为中心的开发者、中国用户 | 针对特定模型(DeepSeek)深度优化、功能聚焦 | **DeepSeek V4兼容 / Cowork稳定性** |
| **Moltis** | UI/UX极致优化、安全与可配置性 | 追求用户体验和安全感的普通用户 | 注重前端交互细节、强调功能安全与用户掌控 | **UI回归修复 / 安全漏洞修复 / 文件上传** |
| **CoPaw** | 多代理、多渠道、功能丰富 (类似OpenClaw) | 寻求一体化解决方案的普通及高级用户 | 功能堆叠，但在基础稳定性和数据安全上存在短板 | **配置丢失 / 备份不可用 / 渠道Bug** |
| **ZeroClaw** | 架构稳健、Schema重构、热修复 | 开发者、对系统健壮性有要求的用户 | 架构激进重构（Schema v3）、强调测试与血统 | **架构重构 / 提供商配置修复 / 测试修复** |

### 6. 社区热度与成熟度分层

- **第一梯队（极高热度，快速迭代期）：** **OpenClaw** 以其绝对的用户数量和Issue/PR吞吐量占据榜首，但已进入“成长的烦恼”，即快速迭代与用户信任的博弈期。**ZeroClaw** 和 **NanoBot** 紧随其后，显示出强大的社区活力和代码产出，且健康度更高。

- **第二梯队（高热度，功能拓展期）：** **Hermes Agent**、**Moltis**、**CoPaw** 展现出强大的社区生命力。**Hermes Agent** 在平台集成和委托能力上持续投入；**Moltis** 在UI/UX和安全修复上表现出色；**CoPaw** 用户反馈极为活跃，但基础功能短板成为其迈向成熟的关键障碍。

- **第三梯队（中等热度，质量巩固期）：** **PicoClaw** 和 **NanoClaw** 活跃度良好，正在从功能堆叠转向**稳定性与特定场景优化**（如硬件集成、容器化部署）。**IronClaw** 社区贡献热情高，但官方响应和测试维护成为其软肋。

- **第四梯队（低活跃度，维护期）：** **NullClaw** 几乎处于停滞状态，仅有个别零散报告。这表明用户已将其视为“完成品”，或已转向更活跃的替代品。

### 7. 值得关注的趋势信号

1.  **“稳定性”成为第一优先级**：OpenClaw的用户“告别信”和CoPaw关于“配置丢失”、“备份失败”的集中抱怨，表明**用户已对快速迭代带来的稳定性问题感到厌倦**。对于开发者而言，这意味着在设计中必须将“不可变配置”、“原子化升级”和“强大的错误恢复机制”作为核心功能来构建，而非事后补丁。

2.  **“多模型容灾”是入门门槛**：NanoBot和ZeroClaw社区对模型故障切换的强烈需求表明，依赖单一AI提供商已不再是选项。**开发者应从一开始就将多提供商、可配置的fallback机制设计为AI Agent的基础能力**，而非后续增强。

3.  **“MCP兼容性”是生态入场券**：NanoBot和PicoClaw对MCP工具名称净化、Schema兼容性的反复修复和讨论，凸显了**MCP协议正成为事实上的Agent工具标准**。新项目若想接入现有工具生态，支持并正确实现MCP协议是必不可少的。

4.  **“平台间体验一致性”是最大挑战**：从NanoClaw/NanoBot对Telegram、Slack、Discord的逐个修复，到Hermes Agent和IronClaw对中国平台（飞书、元宝、企业微信）的适配，可以看出**跨平台兼容性是最大的工程复杂性来源**。开发者需要建立平台抽象层，并优先保证核心Agent逻辑与平台特殊性的解耦。

5.  **“硬件集成”是潜在的下一个爆发点**：PicoClaw的串口工具需求和ZeroClaw对树莓派的呼声，结合OpenClaw的IoT场景连接（Home Assistant），暗示了 **AI Agent与物理世界交互** 的强烈意愿。这可能是个人AI助手从“数字助手”向“物理世界代理”演进的早期信号。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-27

## 1. 今日速览

项目今日活跃度**极高**，共处理了13条Issue和129条Pull Request，其中24个PR已被合并或关闭。社区围绕**模型容灾切换**、**MCP兼容性**、**WebUI远程访问**等方向展开了密集讨论，多个关键Bug已快速得到修复。整体来看，项目正从单点模型路由向多模型高可用架构演进，同时MCP生态建设进入深水区。今日无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了24个PR，主要进展包括：

### 🚀 核心功能推进
- **MCP能力名称净化**：`#3470`（已合并）修复了MCP工具名称含空格、特殊字符时被直接透传给模型API导致Anthropic/OpenAI校验失败的问题。由@chengyongru贡献。
- **运行时模型切换**：`#3135`（已合并）新增`/model`和`/compact`命令，支持不重启网关即可动态切换LLM模型。
- **斜杠命令体系**：`#3132`（已合并）新增`/clear`、`/skills`、`/mcp`三个运维命令。
- **长任务工具**：`#3460`（新提交）引入了`LongTaskTool`，通过元ReAct循环将长任务拆解为顺序子步骤，每步以原始目标+上一步进度重启。
- **媒体路径修复**：`#3471`（新提交）修复了Docker部署中MessageTool无法正确解析相对媒体路径的问题（关联`#3435`）。
- **Whisper重试机制**：`#3253`（更新）为Whisper语音转文字端点添加指数退避重试，解决502/503瞬时故障导致静默失败的问题。

### 🧹 稳定性/质量修复
- **DeepSeek内容负载归一化**：`#3427`（已合并）修复了DeepSeek请求因`messages[*].content`非字符串导致失败的问题，同时引入token感知的历史回放切片和session文件硬上限。
- **Session时间戳暴露**：`#3463`（已合并）将session轮次的时间戳注入模型prompt，使模型感知对话时间线。
- **Slack线程保活**：`#3462`（已合并）修复了Slack线程中proactive回复丢失上下文的问题。
- **WebUI视频渲染**：`#3430`（已合并）新增WebUI对`<video>`附件的内联渲染支持。

## 4. 社区热点

### 🔥 讨论热度最高的议题

1. **#3376 - 模型异常自动切换**（👍1, 评论11）
   - **链接**: https://github.com/HKUDS/nanobot/issues/3376
   - **诉求**: 用户配置了多Provider，但nanobot在单点（429限流、5xx、超时）异常时不会自动切换到其他Provider，导致任务中断。PR `#3083`（fallback_models支持）正在并行推进，社区对该能力呼声极高。

2. **#2133 - 任务执行期间用户消息入列**（评论19, 已关闭）
   - **链接**: https://github.com/HKUDS/nanobot/issues/2133
   - **诉求**: 用户在agent执行复杂任务时无法实时干预。提案提出在agent.md中要求“需要用户审批时立即结束工具调用”或“允许用户消息打断当前loop”。社区对该问题的讨论长达数周，体现出“人机协同”场景下对实时交互能力的强需求。

3. **#1181 - 双层架构（Steering Loop + AgentMessage）**（👍9, 已关闭）
   - **链接**: https://github.com/HKUDS/nanobot/issues/1181
   - **诉求**: 高赞提案，认为当前单层ReAct循环在Agent自主性上存在根本性限制——缺乏动态任务管理能力和自我反思机制。虽然已关闭，但其思想影响了后续PR `#3460`（LongTaskTool）的设计方向。

## 5. Bug 与稳定性

### 🔴 严重 Bug（影响生产使用）

| 编号 | 描述 | 严重程度 | 状态 | Fix PR |
|------|------|---------|------|--------|
| #3473 | WebUI绑定`0.0.0.0`时WebSocket连接失败 | ⚠️ 高 | 新开，无评论 | 暂无 |
| #3469 | DeepSeek-V4多轮思考时`reasoning_content`传回错误 | ⚠️ 高 | 已关闭 | 关联`#3427` |
| #3435 | WeChat渠道媒体文件上传失败：`[file upload failed]` | ⚠️ 高 | 新开，1条评论 | `#3471`（进行中） |
| #3455 | AsyncOpenAI没有timeout，大上下文请求阻塞最长600秒 | ⚠️ 高 | 新开 | 暂无 |
| #3464 | 线程中Subagent的announce路由到父频道而非线程 | ⚠️ 中 | 新开 | `#3465`（进行中） |
| #3468 | MCP能力名称未净化，直接透传给模型API导致校验失败 | ⚠️ 中 | 已关闭 | `#3470`（已合并） |
| #3443 | `reasoning`字段在非流式`_parse()`中泄露到用户可见内容 | ⚠️ 中 | 已关闭 | 暂无 |

### 🟢 关键修复动态
- **MCP名称问题**：`#3468`在报出的当天就被 `#3470` 修复，且 `#3472`（重复PR）被快速关闭，体现了维护团队对MCP生态的高响应速度。
- **WebUI媒体播放**：`#3430` 合并后，WebUI可内联播放视频，修复了此前只能通过链接查看的体验缺陷。

## 6. 功能请求与路线图信号

### 🚦 可能纳入下个版本的功能

1. **模型异常自动切换（Provider / Model Failover）**
   - Issue: `#3376` | PR: `#3083`（已更新，依赖 `#3358` 模型预设）
   - **信号**：此功能是本次日报中讨论最活跃、且已有实现PR的路线图级别需求。社区期待在`fallback_models`之上支持跨Provider切换。

2. **增量保存Session**（防止崩溃丢失）
   - Issue: 无直接Issue | PR: `#2219`（已更新，评论数最多）
   - **信号**：PR已存在并持续更新，可能在下一版合入，解决agent loop崩溃后已执行工具结果丢失的痛点。

3. **渠道级配置`sendProgress/sendToolHints`**
   - Issue: `#3452`（新开）
   - **诉求**：用户希望全局参数改成按渠道独立配置，例如Telegram显示进度但企业微信不显示。

4. **`/clear`命令**（不终止后台任务）
   - PR: `#3467`（新开）
   - **差异**：与已合并的`#3132`中`/clear`不同，`#3467`新增了“不取消活跃任务”的行为，适合需要清理对话但同时让后台任务继续的场景。

5. **`/history`命令查看最近消息**
   - PR: `#3466`（新开）
   - **实用场景**：用户可在不翻阅大量历史的情况下快速回顾最近对话，适合Slack/Telegram等滚动困难的环境。

## 7. 用户反馈摘要

从今日Issue评论中可见以下典型用户痛点与使用场景：

### ✅ 积极反馈
- **MCP兼容性意识强**：`#3468`用户@mtraynham在发现MCP名称问题的同时，提供了详细的日志分析，并主动建议使用slug函数净化名称。这类高质量反馈反映了开发者社区的专业度。
- **WebUI远程访问需求**：`#3473`用户@firdota在报告时先表达了对项目的感谢，体现了社区对项目的认可。

### ❌ 用户不满意点
- **人机交互中断**：`#2133`和`#2915`用户反映，agent在loop中“自言自语”时无法被用户有效打断，用户不得不使用`/stop`全量终止，体验糟糕。
- **DeepSeek迭代适配**：`#3469`用户在多轮思考场景下遭遇DeepSeek-V4 API的`reasoning_content`回传异常，反映LLM供应商频繁升级API时对agent框架的挑战。
- **WeChat媒体能力短板**：`#3435`用户在企业微信场景下遇到文件上传失败，说明非Telegram/WhatsApp渠道的媒体支持仍不完善。

## 8. 待处理积压

以下为长期未响应或需要维护者关注的重要事项：

### Issue 积压
| 编号 | 标题 | 创建时间 | 最后更新 | 评论数 | 理由 |
|------|------|---------|---------|--------|------|
| `#3455` | fix(provider): AsyncOpenAI client has no timeout... | 2026-04-26 | 2026-04-26 | 0 | 影响所有AI提供商，大上下文请求最长阻塞600秒，直接导致agent loop长时间挂起 |
| `#3473` | WebSocket connection failed when accessing WebUI from remote host | 2026-04-27 | 2026-04-27 | 0 | 新报，但WebUI远程访问是大多数用户的刚需 |
| `#3464` | Subagent announces from threaded callers route to channel session | 2026-04-26 | 2026-04-26 | 0 | Slack线程用户群体大，影响感知明显 |

### PR 积压
| 编号 | 标题 | 创建时间 | 最后更新 | 评论数 | 理由 |
|------|------|---------|---------|--------|------|
| `#2219` | feat(agent): 增量保存 session... | 2026-03-18 | 2026-04-27 | 1 | 评论数极低（可能被压制），但功能价值高（防止崩溃丢数据），超过1个月未合入 |
| `#3083` | feat: add fallback_models support... | 2026-04-13 | 2026-04-27 | 0 | 依赖`#3358`未合入，且无reviewer关注 |
| `#3253` | fix(transcription): retry Whisper calls... | 2026-04-17 | 2026-04-27 | 0 | 简单但重要，影响语音输入场景的可靠性，10天未合入 |

**建议维护者关注**：`#2219`（增量保存）和`#3083`（fallback）是方向性强且社区期待已久的核心功能，建议优先review；`#3455`（timeout问题）涉及基础通信栈，应尽快评估严重程度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 Hermes Agent 项目数据，生成了以下 2026-04-27 日的项目动态日报。

---

## Hermes Agent 项目日报 — 2026-04-27

### 1. 今日速览

过去24小时内，Hermes Agent 项目保持高活跃度。Issue 和 PR 更新数量均为 50 条，展现了良好的社区参与度。其中，大量较旧的 PR（约40个）被合并或关闭，表明项目维护者正在集中精力清除技术债务并合并积压的改进。尽管无新版本发布，但社区对新功能和平台的讨论热度不减，特别是针对中国市场（如元宝、飞书）和改进现有体验（如 CLI 可读性、消息格式）的需求突出。整体项目健康度良好，正处于积极的功能迭代和稳定性修复阶段。

### 2. 版本发布

无。

### 3. 项目进展

今日项目向前迈进了重要一步，大量 PR 被合并/关闭，主要推进了以下方面：

- **稳定性与Bug修复**：合并了多个关键修复，包括阻止 `Event loop is closed` 导致会话中断的崩溃 (#3437)，修复了 Discord 斜杠命令后的“正在思考...”指示器问题 (#3615)，并解决了 Mattermost 平台消息发送失败的问题 (#3689) 。
- **平台集成增强**：为 Discord 网关注册了原生的 `/approve` 和 `/deny` 斜杠命令 (#3620)，提升了多机器人场景下的可靠性。
- **核心 Agent 能力改进**：合并了关于模型上下文长度显示与运行时对齐的 PR (#11437)，以及修复了摘要生成失败时的回退逻辑 (#11412) 。
- **用户体验优化**：合并了为 CLI 增加 `Ctrl+X Ctrl+E` 外部编辑器支持的 PR (#11427)，并修复了皮肤引擎未应用于部分 UI 元素的问题 (#3708) 。
- **治理与配置**：新增了可配置的委托递归深度 (`delegation.max_depth`) 功能 (#3633)，增强了系统的灵活性。

### 4. 社区热点

今日社区讨论围绕功能请求和用户体验展开，最活跃的议题如下：

1.  **功能请求：集成元宝平台** (#12240)
    - **链接**: [NousResearch/hermes-agent Issue #12240](https://github.com/NousResearch/hermes-agent/Issues/12240)
    - **热度**: 12条评论，已关闭
    - **分析**: 该 Issue 获得了社区高度关注。用户 `loongfay` 提出了将腾讯的 AI 社交平台“元宝”作为新网关的请求，并详细阐述了其“派”群聊功能的潜力。此需求反映了 Hermes Agent 用户群体希望拓展中国市场的强烈意愿，对项目国际化具有重要意义。Issue 被关闭可能意味着团队已有相关规划或正在内部评估。

2.  **Bug反馈：CLI 界面不支持浅色终端背景** (#4807)
    - **链接**: [NousResearch/hermes-agent Issue #4807](https://github.com/NousResearch/hermes-agent/Issues/4807)
    - **热度**: 4条评论，9 👍
    - **分析**: 尽管评论数不算最多，但9个 👍 表明这是许多用户的共同痛点。用户 `aster2709` 指出在浅色终端下所有皮肤都无法阅读，严重影响了日常使用体验。此 Issues 的长期存在（自2026-04-03）并持续被关注，突显了改善CLI主题支持的迫切性。

### 5. Bug 与稳定性

今日报告的 Bug 中，按严重程度排列如下：

- **[P1] `copilot-acp` 提供程序崩溃** (#14437，已关闭): 使用 `copilot-acp` 提供程序时，每个请求都会因 `'types.SimpleNamespace' object is not iterable` 错误而失败。已有关联修复。
- **[P2] 飞书消息按钮点击错误** (#9585，待处理): 用户在飞书上点击按钮执行操作时持续报错，表明飞书网关的交互式组件存在严重问题。
- **[P2] Linux root/VPS 上浏览器自动化失败** (#15765，待处理): 在无系统 Chrome 的 VPS 上运行 Hermes 时，浏览器导航工具会超时失败，并缺少 `--no-sandbox` 参数支持。这是一个常见部署场景的回归或缺失功能。
- **[P2] 首次运行 Slack 新手指引文本错误** (#14632，已关闭): Slack 网关的首次运行提示告诉用户输入 `/sethome`，但 Slack 只识别 `/hermes <subcommand>`。用户体验不佳，已修复。
- **[P2] 网关日志初始化顺序问题** (#8404，已关闭): 在 CLI 模式下初始化日志后启动网关，会导致 `gateway.log` 无法被正确附加。该问题已修复。

### 6. 功能请求与路线图信号

社区提出的功能请求揭示了未来版本的潜在方向：

- **新网关平台**: 集成腾讯**元宝**平台 (#12240) 的请求暗示了项目对东亚市场的战略布局。
- **核心 Agent 能力增强**:
    - **增量式上下文压缩** (#9561): 用户提出当前的单次压缩过于突兀，可能导致丢失任务上下文，建议实现更平滑的增量压缩机制。
    - **带中辍功能的流式委托** (#9556): 高层 Agent 需要能实时查看子 Agent 的进度并干预，而不是等待其完全结束。
    - **自适应委托策略** (#9557): 用户建议引入反馈回路，让 Agent 能从历史委托结果中学习，自动优化是否及如何委托任务。
- **平台特定优化**:
    - **飞书 Markdown 表格渲染** (#9549): 适配飞书特殊的表格格式需求。
    - **可配置的回复引用模式** (#9584): 用户希望对是否在回复中引用原消息有更多控制权。

**与现有PR的关联**:
- **Kanban 看板**功能 (#16102， #16100): 社区正在审查一个可实现多Profile协作看板的PR，这是一个重要的功能方向，可能会成为下一版本的核心亮点。
- **技能系统扩展** (#16358): 最新的开放 PR 引入了 `claude-design` 技能，表明项目正致力于丰富内置的技能生态。

### 7. 用户反馈摘要

从今日的 Issues 中，可以提炼出以下用户反馈：

- **用户痛点**:
    - **CLI 皮肤不兼容** (#4807): 对浅色终端背景用户不友好，影响基础使用。
    - **飞书平台兼容性问题** (#9585, #9549): 按钮点击和表格渲染问题严重影响了在企业协作场景下的使用体验。
    - **配置复杂性与迁移成本** (#16328): 从其他工具（如 OpenClaw）迁移过来的用户会遇到一系列问题，包括浏览器工具、技能安装和指令发现等，表明迁移工具和文档仍有改进空间。
    - **用户不满**: Issue #10625 “抄袭都抄不明白” 获得了10个 👍，反映了部分用户对项目来源和代码质量的负面情绪，这是一个需要社区管理关注的信号。
- **使用场景与满意度**:
    - **多平台使用** (#12240): 用户对集成更多平台抱有很高热情，尤其是针对特定市场（如中国）的平台。
    - **高级特性需求** (#9561, #9556, #9557): 经常使用委托和长会话的用户开始追求更高级、更精细的控制能力，这表明核心用户正从“能用”转向“好用”。

### 8. 待处理积压

以下 Issue/PR 虽非今日新增，但已存在较长时间且对项目有潜在影响，建议维护者关注：

- **[P2 Bug] 飞书消息按钮点击错误** (#9585): 自 2026-04-14 起开放，尚未分配，影响飞书用户的交互体验。
- **[P3 Bug] CLI 界面不支持浅色终端背景** (#4807): 自 2026-04-03 起开放，获得社区广泛共鸣，是影响新用户第一印象的长期体验问题。
- **[P2 Bug] Discord 附件传递问题** (#11860): 自 2026-04-18 起开放，这是一个较为核心的功能缺陷，影响 Discord 用户的文件处理能力。
- **[P2 Bug] Windows Git Bash 网关启动崩溃** (#9574): 自 2026-04-14 起开放，限制了 Windows 开发者的稳定性体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，这是根据您提供的PicoClaw项目数据生成的2026-04-27项目动态日报。

---

## PicoClaw 项目日报 | 2026-04-27

### 1. 今日速览

今日项目活跃度极高，核心开发与社区贡献均表现强劲。我们观察到 **12 个 PR** 与 **6 个 Issue** 的显著更新，标志着项目正处于密集的功能迭代和问题修复周期。`nightly` 版本继续自动构建，保持前沿特性交付。社区讨论焦点集中在 **模型路由优化**、**新搜索/硬件集成的探索** 以及 **用户体验痛点修复** 上，整体生态健康度良好，正在从核心功能完善迈向更丰富的生态扩展与精细化体验优化阶段。

### 2. 版本发布

- **`v0.2.7-nightly.20260427.39dec354` (Nightly Build)**
  - **内容**: 针对 `main` 分支的自动化夜间构建，包含了所有自上一个标签 `v0.2.7` 以来合并的代码。
  - **破坏性变更与迁移注意事项**: 官方已明确标注此版本可能**不稳定**，仅供测试用途。建议生产环境用户谨慎使用。本次构建包含了对工具调用和思考过程的内部消息格式重构 (PR #2680)，这可能是前端侧的重大变更，如果您使用的是自定义前端，请务必关注并适配新的 `payload.kind = "thought"` 模式。
  - **链接**: [v0.2.7...main 变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

### 3. 项目进展

今日项目在代码规范性与特定功能修复上取得了实质性进展，有两项重要 PR 被合并/关闭：

- **配置诊断增强 (PR #2415)**：该 PR 已合并，极大地提升了启动时的错误反馈能力。现在当 `config.json` 文件出现格式错误时，系统会精确指出错误发生的**行号、列号并附上代码片段**，方便用户快速定位和修复配置问题。这显著降低了用户的入门门槛和运维成本。
- **结构化工具调用 (PR #2672)**：该 PR 已合并，为 Web 聊天界面带来了结构的 `tool_calls` 支持。工具调用的细节现在会以**可折叠的助理消息块**形式展示，而不是扁平化呈现。这大幅提升了聊天界面的信息组织清晰度和用户交互体验。

**链接**: [PR #2415](https://github.com/sipeed/picoclaw/pull/2415), [PR #2672](https://github.com/sipeed/picoclaw/pull/2672)

### 4. 社区热点

- **热点 Issue #295: 智能模型路由功能提案**：这是今日讨论最为活跃的议题，社区贡献者 `Zepan` 提出了一个前沿的**成本与性能优化方案**。该功能旨在根据任务复杂度智能选择模型（如将简单查询路由至廉价模型，复杂任务路由至GPT-4等强模型），对降低用户 API 成本和提升响应速度至关重要。该议题虽创建较早，但近期仍有新评论，说明社区对此功能有持续且强烈的诉求。

- **热点 PR #2679: 修复 ChatGPT Plus (OAuth) 集成**：此 PR 旨在解决付费订阅的 ChatGPT 用户无法在 PicoClaw 中使用的问题。它处理了 OAuth 认证和 Codex 后端特殊的数据流格式（`response.output_text.delta`），成功解决了“模型返回空响应”的 bug。这直接关系到大量高级用户的核心使用场景，社区关注度很高。

- **热点 PR #2673: 跨平台串口工具支持**：该 PR 引入了内置的 `serial` 硬件工具，并提供了 Linux, macOS, Windows 的跨平台实现。这表明社区有强烈的意愿让 PicoClaw 深度集成硬件控制和物联网场景，可能使其从一个纯软件助手向硬件交互平台演进。

**链接**: [Issue #295](https://github.com/sipeed/picoclaw/issues/295), [PR #2679](https://github.com/sipeed/picoclaw/pull/2679), [PR #2673](https://github.com/sipeed/picoclaw/pull/2673)

### 5. Bug 与稳定性

- **严重 N/A: 空响应 Bug (Issue #2674)**：在使用 `Codex OAuth` 提供商时，模型返回空响应。这是一个功能性 Bug，直接导致用户无法获得任何回答。**已有对应修复 PR #2679** 处于开放状态，将`response.output_item.done` 事件处理与 `response.output_text.delta` 流结合，有望彻底解决此问题。

- **中等: 工具安全问题导致功能受限 (Issue #1042)**：`exec` 工具的路径安全检测机制过于简单，导致执行查询天气之类的合法命令（如 `curl -s "wttr.in/Beijing?T"`）时被误认为存在路径穿越风险而遭到阻断。这是一个典型的“过度防御”导致功能受限问题，降低了工具的易用性，需要优化路径合法性判断逻辑。

- **中等: 配置文件格式错误 (PR #2415)**：修复前，错误的 `config.json` 只会给出模糊的错误提示，使用户排查困难。此问题现已通过合并修复 PR #2415 得以解决。

**链接**: [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674), [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042), [PR #2415](https://github.com/sipeed/picoclaw/pull/2415)

### 6. 功能请求与路线图信号

- **Exa 搜索提供商 (Issue #2676)**: 用户 `devjia` 请求集成 **Exa** 作为新的搜索工具提供商，并提供了相关的 PR (#997) 作为实现参考。这表明社区不仅需要已有的搜索引擎，还希望扩展选择范围，项目未来可能会考虑将搜索提供商插件化。
- **树莓派硬件支持 (Issue #2675)**: 用户 `Maisie-the-cat` 希望 PicoClaw 能提供对树莓派及 Pi Zero 2W 的官方支持和安装指南。这与此前跨平台串口工具 (PR #2673) 的需求一致，预示着 **嵌入式/边缘设备** 可能成为项目的重要发展方向之一。

### 7. 用户反馈摘要

- **功能性强需求**: 用户对 **模型路由** 有非常清晰的价值认知（成本与速度优化），这已成为社区共识。用户 `Zepan` 在 Issue #295 中对该功能需求有详尽描述。
- **集成障碍**: 用户 `geekgonecrazy` (Issue #2674) 在使用 **ChatGPT Plus 订阅**时遇到空响应Bug，用户体验极差，这暴露出非标准OAuth流程集成的脆弱性。
- **易用性痛点**: 用户 `axwfae` (Issue #2628) 在升级 `v0.2.7` 后对默认出现的“思考”和“工具”消息感到困惑，**“无法关闭”** 是其主要诉求。这反映了新功能的引入需要在可配置性和默认行为之间取得平衡。
- **设备控制场景**: 用户 `SiYue-ZO` (PR #2673) 贡献的 **串口工具** 暗示了 PicoClaw 作为硬件调试助手的实用场景，例如通过串口与 Arduino、3D打印机等设备交互。

### 8. 待处理积压

- **Docker 特权模式配置 (PR #2239)**: 该 PR 从 4 月 1 日开启，至今已近一个月。它提议将 Docker Compose 的 `privileged` 模式作为一种配置选项。这可能是为了支持需要在容器内访问宿主机特定硬件或进行Syscall操作的场景。由于涉及安全权衡，需要核心维护者对此进行审议和决策。
- **MCP 工具与 Gemini 兼容性 (PR #2681)**: 该 PR 解决了一个**严重的 Bug**（导致 HTTP 400 错误），涉及到 MCP 工具与 Gemini 模型联用时因复杂 JSON Schema 导致的崩溃。虽然已有修复方案，但如果该 PR 未被及时合并，用户在最新 `nightly` 版本中仍可能遇到此问题。建议项目经理优先评审此修复。

**链接**: [PR #2239](https://github.com/sipeed/picoclaw/pull/2239), [PR #2681](https://github.com/sipeed/picoclaw/pull/2681)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-04-27 项目动态日报。

---

## NanoClaw 项目动态日报 — 2026-04-27

### 1. 今日速览

过去24小时，NanoClaw 项目保持高度活跃，共处理了 **13 个 Issues** 和 **26 个 Pull Requests**。社区贡献踊跃，尤其是在 **Bug 修复** 和 **平台适配**（Telegram, Signal, Discord）方面。v2 版本的稳定性和功能完善是当前核心关注点，包括对资源限制、容器超时、以及多平台消息处理的修复。尽管无新版本发布，但大量 PR 的合并与关闭表明项目正处于密集的迭代优化期。

### 2. 版本发布

- **无新版本发布**。

### 3. 项目进展

今日项目在稳定性、功能完整性和跨平台适配方面取得了显著进展，合并/关闭了约 **16 个 PR**。以下是关键推进项：

- **核心稳定性提升**:
    - **容器资源限制**: PR [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) (OPEN) 提议为容器添加 `--memory`、`--cpus` 等资源上限，以防范Agent失控导致的宿主机资源耗尽。同步地，PR [#1916](https://github.com/qwibitai/nanoclaw/pull/1916) (CLOSED) 已合并，为 `CONTAINER_TIMEOUT` 等环境变量增加了 NaN 和非正值校验，提升配置健壮性。
    - **心跳机制改进**: PR [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) (CLOSED) 修复了因 MCP 工具调用挂起导致容器被误杀的问题，通过保持心跳新鲜度并放宽工具调用超时窗口来增强稳定性。
    - **任务调度Bug修复**: PR [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) (OPEN) 和 Issue [#2032](https://github.com/qwibitai/nanoclaw/issues/2032) 针对性修复了预检查脚本返回 `wakeAgent: false` 时，调度任务仍可能绕过 gating 在主循环外执行的问题。

- **v2架构适配与功能完善**:
    - **动态工具白名单**: PR [#2028](https://github.com/qwibitai/nanoclaw/pull/2028) (CLOSED) 解决了 v2 中 Claude Code 2.1.116+ 版本对 `--allowedTools` 进行硬性白名单校验导致 MCP 服务器无法启动的问题，现在工具列表可以根据已配置的 MCP 服务器动态生成。
    - **多会话路由修复**: PR [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) (OPEN) 和 PR [#2034](https://github.com/qwibitai/nanoclaw/pull/2034) (OPEN) 致力于修复 Agent 间回复可能落入目标组的错误会话问题，以及优化 `findSessionByAgentGroup` 逻辑以优先选择最近活跃的会话。

- **平台适配与功能增强**:
    - **Signal 附件支持**: PR [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) (OPEN) 为 Signal 原生适配器添加了附件发送支持，填补了一个关键功能空白。
    - **Web UI Agent创建**: PR [#2037](https://github.com/qwibitai/nanoclaw/pull/2037) (CLOSED) 实现了从 Web 界面端到端创建 Agent 组的功能，显著提升了用户体验。

### 4. 社区热点

今日社区讨论主要集中在 **多平台消息处理** 和 **安装体验** 两大方面。

- **Telegram 消息格式与表情反应**: 用户 `andrebrov` 一口气提交了三个高度相关的 Issues ([#2041](https://github.com/qwibitai/nanoclaw/issues/2041), [#2042](https://github.com/qwibitai/nanoclaw/issues/2042), [#2043](https://github.com/qwibitai/nanoclaw/issues/2043))，分别指出了：
    1.  `add_reaction` 工具在 Telegram 上因 `platformId` 格式不兼容而静默失败。
    2.  Telegram HTML 模式中对单引号（`'`）过度转义为 `&apos;`。
    3.  Slack 风格的表情代码无法在 Telegram 上正确映射为 Unicode 表情。
    这些 Issue 反应迅速，门槛低且细节详实，体现了社区用户对**人机交互细节**的高标准要求。

- **安装与初始化 Bug**: Issue [#2025](https://github.com/qwibitai/nanoclaw/issues/2025) 报告了 `nanoclaw.sh` 在需要 sudo 密码时卡住，以及 Issue [#2026](https://github.com/qwibitai/nanoclaw/issues/2026) 报告 `onecli.dev` 站点返回 521 错误导致安装失败。这两个问题直接影响**新用户的首次体验**，是项目初期的关键瓶颈。

- **Discord URL 处理回归**: Issue [#2044](https://github.com/qwibitai/nanoclaw/issues/2044) 报告了 v2 版本中使用 `@chat-adapter/discord` 时，原本用于抑制 URL 预览的 `<URL>` 语法被错误地转换为 Markdown 链接 `[URL](URL)`，反而**恶化了**原始问题。这是一个典型的配置兼容性回归，受到了关注。

- **古老的“秘密”功能**: 令人惊喜的是，几个月前的 PR [#547](https://github.com/qwibitai/nanoclaw/pull/547) “feat: add Shabbat mode” 和 PR [#515](https://github.com/qwibitai/nanoclaw/pull/515) “feat(skill): add perplexity-research skill” 在此次更新统计中被提及为已关闭，这暗示了项目维护者正在重新审视和合并一些**久经考验但尚未正式纳入**的功能，这通常是一个积极的信号。

### 5. Bug 与稳定性

过去24小时内报告的 Bug 集中在以下几个领域，按严重程度排列：

1.  **[严重] 容器资源无限制导致宿主机风险** (Issue [#2029](https://github.com/qwibitai/nanoclaw/issues/2029)): 无 `--memory`、`--cpus` 限制，一个错误的Agent循环可能引发 OOM。 **状态: 待处理，已有 PR 思路。**
2.  **[高] Telegram 消息处理关键缺陷** (Issue [#2042](https://github.com/qwibitai/nanoclaw/issues/2042), [#2043](https://github.com/qwibitai/nanoclaw/issues/2043)): `add_reaction` 在群组中静默失败，以及消息中引号显示错误，严重影响 Telegram 用户的正常使用。**状态: 待处理，暂无关联 PR。**
3.  **[高] v2 Discord URL 处理回归** (Issue [#2044](https://github.com/qwibitai/nanoclaw/issues/2044)): 用于抑制预览的 `<URL>` 语法被错误转换。**状态: 待处理。**
4.  **[中] v2 安装与初始化失败** (Issue [#2025](https://github.com/qwibitai/nanoclaw/issues/2025), [#2026](https://github.com/qwibitai/nanoclaw/issues/2026)): `sudo` 密码要求和外部依赖站点故障导致安装卡住。**状态: 待处理。**
5.  **[中] 调度任务绕过 `wakeAgent` 门控** (Issue [#2032](https://github.com/qwibitai/nanoclaw/issues/2032)): 导致不必要的 LLM 调用，浪费资源。**状态: 已有修复 PR [#2033](https://github.com/qwibitai/nanoclaw/pull/2033)（待合并）。**
6.  **[低] `onecli not found` PATH 传播问题** (Issue [#1973](https://github.com/qwibitai/nanoclaw/issues/1973)): 在特定 Linux 环境下的配置路径传播问题。**状态: 待处理。**

### 6. 功能请求与路线图信号

今 **日的功能请求展现了用户对** 企业级部署 **和** 深度自定义**的强烈需求。

- **企业级部署与资源管理**:
    - **容器资源上限** (Issue [#2029](https://github.com/qwibitai/nanoclaw/issues/2029)) & **环境变量注入** (PR [#2036](https://github.com/qwibitai/nanoclaw/pull/2036)): 表明用户将 NanoClaw 用于更正式的场景，需要更严格的管控和配置隔离。这些很可能被纳入下一版本的 v2 稳定版。
    - **远程 OneCLI 支持**: PR [#2030](https://github.com/qwibitai/nanoclaw/pull/2030) 和 [#2035](https://github.com/qwibitai/nanoclaw/pull/2035) 均已合并，为高级用户提供了在独立服务器上运行核心授权组件（OneCLI）的选项，这将支持更灵活的架构。

- **模型与API兼容性**:
    - **支持其他模型/API通道** (Issue [#1930](https://github.com/qwibitai/nanoclaw/issues/1930)): 持续有用户提出支持非 Anthropic API 的需求，暗示了多元化模型生态的战略重要性。PR [#2023](https://github.com/qwibitai/nanoclaw/pull/2023) (CLOSED) 修复了自定义 Anthropic 兼容端点的 401 错误，是向开放生态迈出的一步。

### 7. 用户反馈摘要

- **“痛点”显著**：Telegram 用户对表情反应、HTML 格式等“小问题”抱怨集中，说明平台体验的完善对于**留住特定平台用户**至关重要。
- **“好用”的期待**：用户对 `/setup` 的卡顿（Issue [#2025](https://github.com/qwibitai/nanoclaw/issues/2025)）和 `onecli.dev` 的上游故障（Issue [#2026](https://github.com/qwibitai/nanoclaw/issues/2026)）表现出不耐烦，暗示潜在用户对**开箱即用**的期待很高。
- **“高门槛”的实际应用**：来自 `kosm1x` 和 `mzazon` 等用户的 Bug 报告（容器资源限制、调度任务逻辑）表明，项目正被用于更复杂的自动化场景（例如定时任务），而不仅仅是简单的聊天机器人。这些用户对系统的**健壮性和可预测性**有更高要求。

### 8. 待处理积压

以下为长期未关闭或有重要影响但尚未响应的 Issue/PR，提请维护者关注：

- **✨ 重大功能/重构**:
    - **Shabbat 模式** (PR [#547](https://github.com/qwibitai/nanoclaw/pull/547)): 一项非常有特色的功能，虽已标记为已关闭，但在本次回顾中被重点提及。建议确认是否已正式合并或并纳入主流版本。
    - **Perplexity 搜索技能** (PR [#515](https://github.com/qwibitai/nanoclaw/pull/515)): 另一项重要的外部工具集成（Perplexity），建议确认其状态，整合后能大幅提升 Agent 的联网搜索能力。

- **⏳ 高优先级的 Bug/稳定性改进**:
    - `findSessionByAgentGroup` 会话选择逻辑 (PR [#2034](https://github.com/qwibitai/nanoclaw/pull/2034)): 这是解决 Agent 间消息路由错误的“正确方案”之一，请尽快审查合并。
    - **Telegram 三合一 Bug** (Issues [#2041](https://github.com/qwibitai/nanoclaw/issues/2041), [#2042](https://github.com/qwibitai/nanoclaw/issues/2042), [#2043](https://github.com/qwibitai/nanoclaw/issues/2043)): 建议指派给熟悉 Telegram 适配器的开发者，按优先级一次性修复。

- **⏳ 中等优先级**:
    - **模型/API 兼容性** (Issue [#1930](https://github.com/qwibitai/nanoclaw/issues/1930)): 虽然没有技术细节，但它代表了一类重要需求，值得发起一次社区讨论或调查，以确定未来的开发优先级。
    - **v2 setup `onecli not found`** (Issue [#1973](https://github.com/qwibitai/nanoclaw/issues/1973)): 一周前提出的安装问题，可能影响一小部分 Debian/Ubuntu 用户，建议给出一个最低限度的诊断脚本或文档提示。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 NullClaw 项目数据，生成以下 2026-04-27 项目动态日报。

---

# NullClaw 项目日报 | 2026年04月27日

**项目名称:** NullClaw (github.com/nullclaw/nullclaw)
**数据时间范围:** 2026-04-26 ~ 2026-04-27 (基于24小时快照)

## 1. 今日速览

今日项目活跃度较低。过去24小时内，项目未发布新版本，也无任何 Pull Request 被提交或合并。唯一的活动来自一个关于 **Gateway 组件在 WSL2 环境下出现高 CPU 占用** 的新 Open Issue，目前该问题尚未得到官方回复或正在被初步排查。总体而言，项目处于微弱的维护状态，核心开发进度趋缓，但社区发现了一个需要关注的稳定性问题。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无任何 Pull Request 被提交或合并。项目核心代码库在过去24小时内无主动推进。

## 4. 社区热点

今日唯一的讨论热点集中在 Issue #870。

-   **[#870] Gateway accept4 busy loop (100% CPU) on WSL2** (Open)
    -   **链接:** [Issue #870](https://github.com/nullclaw/nullclaw/issues/870)
    -   **核心诉求:** 用户报告在 WSL2 环境下运行 `nullclaw gateway` 时，某个线程陷入 100% CPU 占用的忙循环（busy loop）。尽管功能上似乎正常（Telegram bot 能响应），但异常的高资源消耗严重影响了开发环境的使用体验。
    -   **背后分析:** 此问题很可能是由于 WSL2 与原生 Linux 在某些系统调用（尤其是像 `accept4` 这样的网络相关调用）的底层实现差异导致的。开发者需要检查 Gateway 的 I/O 循环或事件驱动机制在特定内核版本或 WSL2 虚拟化边界上的适配性。

## 5. Bug 与稳定性

今日报告了一个严重的 Bug，暂未发现其他严重问题。

| 严重程度 | Bug 描述 | Issue 链接 | 是否已有修复 PR |
| :--- | :--- | :--- | :--- |
| **严重** | Gateway 组件在 WSL2 上出现 `accept4` 忙循环，导致单核 CPU 100% 占用，系统响应变慢。 | [#870](https://github.com/nullclaw/nullclaw/issues/870) | 无 |

## 6. 功能请求与路线图信号

今日无新的功能请求提出。当前社区注意力主要集中在严重 Bug 的修复上，预计修复该 Bug 将成为下一版本发布前的重要前置任务。

## 7. 用户反馈摘要

唯一的一条用户反馈来自于 Issue #870 的提交者 `weissfl`：
-   **使用场景:** 在 Windows 11 的 WSL2 环境下使用 NullClaw 的 Gateway 功能。
-   **痛点/不满意:** 尽管服务“看似”可用，但核心进程在空闲状态下持续消耗 100% CPU，这是不可接受的不良用户体验。用户明确指出了“即使空闲，CPU 使用率也从不下降”这一关键问题。
-   **使用环境:** 明确说明了 WSL2 (Windows 11, Linux x86_64) 环境，使用 NullClaw 2026.4.17 版本。

## 8. 待处理积压

当前项目活跃度较低，暂无长期未响应的重要 Issue 或 PR 积压。不过，今日新开的严重 Bug (Issue #870) **应立即得到维护者的关注和确认**。如果长期不响应，该问题将成为主要的积压项，并影响 Windows 平台上部分开发者（依赖 WSL 的用户）对项目的信任度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-04-27

## 今日速览
项目今日活跃度中等，社区提交活跃但官方响应有待加强。过去24小时内产生了5个新Issue（全部为Open状态）和8个PR（其中7个待合并，1个已合并关闭），但无新版本发布。值得关注的是，自动化测试（Canary）连续出现3次失败，涉及OpenAI兼容、Anthropic及OAuth私有通道，可能暗示基础设施或上游兼容性问题。此外，一位新贡献者提交了TUI体验改进的PR，社区长期期待的WECOM企业微信通道PR也在持续推进中。

---

## 版本发布
**无**

---

## 项目进展

### 已合并/关闭的 PR
- **#2969** [已关闭] feat(reborn): clean up runtime authority boundaries  
  贡献者: serrrfirat（核心成员）  
  本次合并是“reborn”重构系列的重要一步：  
  - 将进程资源预留（process resource reservations）机制严格密封，防止调用方提供或未拥有的预留ID绕过或释放进程资源  
  - 将dispatch port合约迁移至`ironclaw_host_api`，移除了`ironclaw_capabilities → ironclaw_dispatcher`的依赖  
  - 使dispatcher模块更模块化，为后续沙箱权限细化奠定基础  
  - **影响面**：影响运行时权限模型，对自定义通道和扩展开发者有潜在迁移需求  
  - [链接](https://github.com/nearai/ironclaw/pull/2969)

### 仍需关注的待合并 PR
| PR | 标题 | 规模/风险 | 状态 | 意义 |
|----|------|-----------|------|------|
| #2394 | feat: wecom channel | XL/高 | 开放（WIP） | 企业微信独立WASM通道，里程碑功能 |
| #2974 | fix: improve TUI contrast and process cleanup | XL/低 | 开放 | 提升终端UI可访问性，修复孤儿进程 |
| #2970 | chore: build Railway from source | M/中 | 开放 | 移除对GHCR镜像的依赖，改善部署流程 |
| #2969 | feat(reborn): clean up runtime authority boundaries | XL/低 | **已合并** | 重构运行时权限边界，推进reborn架构 |

---

## 社区热点

### 最高活跃度 Issue
- **[#1697]** [scope: llm] how to use codex as base model?  
  作者: YANGTUOMAO | 创建于1个月前，今日更新  
  用户在讨论如何配置Codex模型，尝试了`Plus`和`GPT-5.4 mini`均不生效，CLI输出异常。当前仅有1条评论，尚未得到官方回复。  
  → 反映了LLM配置文档与模型名称映射机制仍不透明，建议优先补充Codex/OpenAI兼容模型接入指南。  
  [链接](https://github.com/nearai/ironclaw/issues/1697)

### 社区诉求分析
- **企业用户场景**：WECOM通道（#2394）持续更新，说明国内企业微信集成需求迫切，预计将是下个主要版本的核心特性
- **开发者体验**：TUI主题对比度改进（#2974）来自新贡献者，对日常使用CLI的用户有直接感知价值

---

## Bug 与稳定性

| 严重程度 | Issue | 描述 | 关联修复 |
|----------|-------|------|----------|
| 🔴 高 | [#2977](https://github.com/nearai/ironclaw/issues/2977) | Live canary: provider-matrix openai-compatible 失败 | 无 |
| 🔴 高 | [#2976](https://github.com/nearai/ironclaw/issues/2976) | Live canary: public-smoke (Anthropic) 失败 | 无 |
| 🔴 高 | [#2975](https://github.com/nearai/ironclaw/issues/2975) | Live canary: private-oauth 在专属Runner上失败 | 无 |
| 🟡 中 | [#2833](https://github.com/nearai/ironclaw/issues/2833) | 跨会话响应污染：切换对话时A会话响应出现在B会话中 | 无 |

**关键观察**：今日3次Canary失败均来自同一CI运行（Run #24974704617，Commit 7404e7d），涉及OpenAI兼容、Anthropic和OAuth三条管线同时失败。建议维护者优先排查本次Commit是否引入了回归，或上游API端存在波动。Issue #2833的跨会话污染问题已开放5天未响应，属于影响用户体验的中等严重度Bug。

---

## 功能请求与路线图信号

| 功能 | 来源 | 状态 | 路线图匹配度 |
|------|------|------|-------------|
| 企业微信独立通道 (WECOM) | PR #2394 | 开放(WIP) | ⭐ 高，预计进入下个主版本 |
| Railway从源码构建 | PR #2970 | 开放 | 中，改善部署自动化 |
| TUI对比度/暗色主题优化 | PR #2974 | 开放 | 中，用户体验提升 |
| Codex/base model配置指南 | Issue #1697 | 待回复 | 低-中，取决于LLM模型支持策略 |

**新增信号**：Issue #2833 描述的多会话响应污染问题，用户提到“在执行多步推理计划时切换会话导致中间/最终响应泄露”，这指向会话状态隔离机制的缺陷，建议纳入近期修复计划。

---

## 用户反馈摘要

- **痛点**：
  - Codex模型配置不明确，用户尝试`Plus`和`GPT-5.4 mini`都无效（#1697）
  - 跨会话切换导致响应交叉污染，影响多任务并行工作流（#2833）
- **正面反馈**：
  - WECOM通道的作者（hanakannzashi）在PR描述中详细说明自建应用回调、Agent API出站、令牌缓存、媒体处理等功能已达成MVP
  - TUI改进PR（#2974）的贡献者（Cloudymap1e）主动修复了终端挂起时的孤儿进程问题
- **不满意点**：
  - Issue #1697 创建于1个月前，至今仅1条评论且无官方回复，社区对LLM模型配置的困惑未得到解决

---

## 待处理积压

| 项目 | 创建时间 | 最后更新 | 当前状态 | 提醒 |
|------|----------|----------|----------|------|
| [#1697] Codex模型配置（LLM） | 2026-03-27 | 2026-04-27 | 开放，1评论 | ⏰ 已开放1个月，建议尽快回复或关闭 |
| [#2833] 跨会话响应污染 | 2026-04-22 | 2026-04-27 | 开放，0评论 | ⚠️ 中等严重度Bug，建议本周内评估 |
| [#2394] WECOM通道（XL规模） | 2026-04-13 | 2026-04-27 | 开放(WIP)，需要Review | 核心特性，建议指定Reviewer |
| [#2593] GitHub Actions依赖更新 | 2026-04-17 | 2026-04-26 | 开放，待合并 | CI稳定性更新，已提交10天 |

---

**总结评级**：项目健康度 **🟡 黄色**（维护活跃但存在稳定性隐忧）  
- 优势：社区贡献持续（2个新贡献者PR），核心重构持续推进（reborn系列）
- 风险：Canary管线频繁失败影响发布信心；多会话污染等用户体验Bug未及时响应；LLM配置文档盲区长期未填补
- 建议：下个版本（如有）应优先修复Canary失败根因，补充Codex/OpenAI兼容模型配置文档，并评审WECOM通道进入主分支

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 2026-04-27 的数据生成项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-04-27

## 1. 今日速览

今日项目整体活跃度**高**，技术迭代迅速。过去24小时内，项目收到了5条新Issues和10个Pull Requests，其中10个PR均已合并或关闭，展现了高效的代码合入节奏。核心开发团队主要聚焦于修复 DeepSeek V4 的兼容性问题以及优化 Cowork 功能的会话模型同步与生命周期管理逻辑。社区方面，用户热切期望 DeepSeek V4 的兼容性问题能得到解决，并对 Token 统计与日志系统提出了功能建议。

## 2. 版本发布

*今日无新版本发布。*

## 3. 项目进展

今日项目向前迈出了坚实一步，共合入了10个PR，主要集中于以下两个关键领域：

- **DeepSeek V4 兼容性修复**：PR [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) 扩展了DeepSeek V4的思考模式封装，以兼容 `anthropic-messages` API 格式，直接回应了社区报告的错误。同时，PR [#1828](https://github.com/netease-youdao/LobsterAI/pull/1828) 更新了火山引擎和通义千问的默认模型配置，将 `doubao-seed-2.0-pro` 和 `qwen3.6-plus` 调整为首选模型。
- **Cowork 功能稳定性提升**：团队对 Cowork 功能进行了细致的打磨。PR [#1817](https://github.com/netease-youdao/LobsterAI/pull/1817) 修复了会话模型不同步导致 Agent 报告错误模型名称的问题。PR [#1820](https://github.com/netease-youdao/LobsterAI/pull/1820) 则修复了一个生命周期降级计时器可能错误完成“新一次”运行会话的竞态条件问题。此外，PR [#1816](https://github.com/netease-youdao/LobsterAI/pull/1816) 对齐了快速操作面板的宽度，提升了UI一致性。

## 4. 社区热点

今日最受关注的 Issue无疑是 **[#1813: DeepSeek V4 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1813)**。该问题由用户 `Sun-Ke` 在4月24日提出，至今获得3条评论，更新于今天（4月27日）。用户报告了与DeepSeek V4模型交互时请求被拒绝的错误 (`LLM request failed: provider rejected the request schema or tool payload`)。此问题在社区中反响强烈，是当前用户使用的核心痛点。幸运的是，团队已经通过 PR [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) 提交了修复方案，展示了项目对用户反馈的快速响应能力。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **严重Bug - 新开**：[#1813 DeepSeek V4 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1813) - 核心模型无法正常调用，影响用户生成内容。**已有相关修复 PR [#1827](https://github.com/netease-youdao/LobsterAI/pull/1827) 合并，预计在下个版本生效。**
- **待处理数据截止问题 (stale)**：
    - [#60 超出了context length](https://github.com/netease-youdao/LobsterAI/issues/60) - 使用DeepSeek模型，用户请求超出上下文窗口限制。
    - [#40 Window版本-SKILLs读取问题](https://github.com/netease-youdao/LobsterAI/issues/40) - Windows系统下，SKILLs路径指向错误。
    - [#52 无法访问微信公众号文章](https://github.com/netease-youdao/LobsterAI/issues/52) - 功能性问题，内容抓取可能受阻。

## 6. 功能请求与路线图信号

今日社区提出的主要功能需求是 **[#88: 建议加入使用token统计和日志输出](https://github.com/netease-youdao/LobsterAI/issues/88)**。该 Issue 创建于2月24日，虽已标记为 `[stale]`，但获得了3个“👍”和1条评论，表明用户对可观测性有持续需求。用户希望增加Token使用统计仪表盘和详细的API调用日志，以便在调试和成本控制方面获得更好的体验。结合项目近期在提升稳定性和模型兼容性上的投入，该功能请求具有较高的合理性，未来版本将其纳入路线图的信号较强。

## 7. 用户反馈摘要

- **痛点**：
    - **模型兼容性**：用户 `Sun-Ke` 汇报了使用最新 DeepSeek V4 模型时遇到的直接障碍，这是目前最突出的使用痛点。
    - **上下文窗口限制**：用户 `kexul` 遇到的问题表明，模型处理长文本的能力仍然是用户日常使用中的一个瓶颈。
    - **配置复杂性**：用户 `NeilJohnson0930` 在 Windows 环境下遇到了路径配置问题，提示项目的跨平台配置体验仍有改进空间。
- **功能诉求**：
    - **可观测性**：用户 `Geidorf` 提出的增加 Token 统计和日志功能，反映了开发者用户对“使用透明化”和“可调试性”的普遍需求。

## 8. 待处理积压

以下为长期未获响应或被标记为 `[stale]` 的重要 Issue，提醒维护者关注：

- **[#88 建议加入使用token统计和日志输出](https://github.com/netease-youdao/LobsterAI/issues/88)** (更新于2026-04-26)：虽然已标记为 stale，但该功能请求得到了社区的支持（👍: 3），是提升项目成熟度的重要一环。
- **[#52 无法访问微信公众号文章](https://github.com/netease-youdao/LobsterAI/issues/52)** (更新于2026-04-26)：这是一个中国用户常用的功能场景，其稳定性对用户体验至关重要。
- **[#40 Window版本-SKILLs读取问题](https://github.com/netease-youdao/LobsterAI/issues/40)** (更新于2026-04-26)：影响 Windows 用户的安装和使用体验，属于平台适配问题。
- **[#60 超出了context length](https://github.com/netease-youdao/LobsterAI/issues/60)** (更新于2026-04-26)：该问题的本质是模型能力限制，但项目可以考虑提供更清晰的错误提示或上下文管理策略。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-04-27

## 📊 今日速览
- **活跃度评级**: 🔥🔥🔥🔥🔥 (极高) — 项目在24小时内完成了13个PR的处理，发布了1个新版本，展现了极高的协同开发效率。
- **安全与稳定性加固**: 今日修复了数个严重Bug，包括语音API密钥明文存储的安全漏洞（#867）和技能仓库导入时的安全隐患（#881）。
- **用户体验优化**: 多个PR聚焦于用户交互细节，如修复代码块主题切换闪烁、恢复会话名称编辑功能。
- **平台扩展性**: 通过使Telegram渠道变为可选的特性，项目在瘦身和灵活部署上迈出了重要一步。
- **社区贡献活跃**: 贡献者积极提交PR，尤其是在UI修复和本地模型管理方面，显示社区参与度较高。

## 🚀 版本发布
- **20260426.05** — 于2026-04-26发布
  - **摘要**: 今日唯一发布的版本，推测为集成当日所有修复的快速修复或滚动发布版本。无破坏性变更或迁移指南公告，建议用户关注更新日志。

## 🔧 项目进展 (已合并/关闭的PR)
- **安全加固**: 
  - [#885] 修复语音API密钥明文存储问题，将密钥迁移至加密的凭证存储（KeyStore），解决了 #867。
  - [#882] 修复从仓库导入技能时自动启用全部技能的安全问题，避免恶意技能绕过后端隔离区。解决了 #881。
- **核心功能修复**:
  - [#883] 修复从非标准格式仓库导入技能时路径分配错误，确保技能可正确读取。解决了 #880。
  - [#877] 和 [#878] 修复了通过Web界面无法禁用/启用内置技能的Bug，并从中推导出正确的启用状态。解决了 #875。
  - [#879] 修复了代码块在流式聊天完成后背景变为白色的UI回归问题。
- **新功能与改进**:
  - [#886] 将沙盒、MCP、调试等状态徽章从隐藏的“更多”菜单移至可见的工具栏行，提升了信息可及性。
  - [#884] 实现本地LLM模型的按需加载/卸载，并设置空闲超时自动卸载，以节省内存。新增手动加载/卸载的RPC方法。
  - [#885] 存储语音API密钥时增加金库加密功能，增强凭证安全。

## 🏘️ 社区热点
- **#888** — **[BUG]** [会话名称和重命名按钮被移除](https://github.com/moltis-org/moltis/issues/888): 今日最受关注的新开Issue。用户报告了由“状态徽章”功能PR [#886] 引入的回归问题——会话名称不显示，也无法重命名。如果会话命名是刚需，此Bug可能严重影响用户工作流。
- **#876** — **[PR]** [文件上传按钮](https://github.com/moltis-org/moltis/pull/876): 虽然长期开放，但昨日有更新。该PR提议为Web聊天添加文件上传按钮，匹配主流LLM提供商的UX模式，反映了社区对增强聊天输入能力的强烈诉求。

## 🐛 Bug 与稳定性 (按严重程度排列)
1. **严重 (功能破坏)**
   - **#888**: 会话名称不显示也无法编辑，是由UI重构引起的回归问题。尚无Fix PR，已标记为开放。
2. **高 (安全性/功能异常)**
   - **#880 (已关闭)**: 仓库导入技能失败，已由 #883 修复。
   - **#881 (已关闭)**: 导入仓库时自动启用恶意技能，安全风险高，已由 #882 修复。
   - **#867 (已关闭)**: 语音API密钥明文存储，严重安全漏洞，已由 #885 修复。
   - **#875 (已关闭)**: 无法通过Web禁用内置技能，功能异常，已由 #877 和 #878 修复。
3. **中 (UI/UX问题)**
   - **#879 (已关闭)**: 代码块主题在流式完成后切换为白色背景，影响观感，已修复。

## 🗺️ 功能请求与路线图信号
- **#887** — **新功能请求**: [添加PREAMBLE.md支持](https://github.com/moltis-org/moltis/issues/887)。用户提议为提示配置文件添加“PREAMBLE.md”工作区文件作为模板变量，使每个Agent都能拥有自定义开场白。结合 #466 引入的模板系统，这个功能非常契合当前方向，很有可能被纳入下一个版本。
- **#876** — **新功能 (PR开放中)**: [文件上传按钮](https://github.com/moltis-org/moltis/pull/876)。该功能是顶级LLM聊天界面的标配，可显著提升Moltis的实用性，预计会在后续版本中合并，除非有重大技术阻碍。
- **#884 (已合并)**: 本地LLM空闲卸载功能是优化资源使用的重要一步，表明项目正持续增强本地AI体验。

## 💬 用户反馈摘要
- **隐性痛点**: 从 #888 和 #879 等回归Bug可以看出，快速迭代的UI变更有时会无意中破坏现有功能。用户对会话管理等基础功能的稳定性有很高期待。
- **安全诉求**: #867 和 #881 的提交者表达了对API密钥管理和导入技能信任机制的强烈担忧，这两项修复直接回应用户对数据安全的关切。
- **效率追求**: #884 的 idle timeout 功能体现了用户对资源优化的需求，特别是对需要长时间保持Moltis在后台运行的用户。

## 📋 待处理积压
- **#876** - **[PR]** [文件上传按钮](https://github.com/moltis-org/moltis/pull/876) (已开放2天): 虽然昨日有更新，但仍未合并，等待维护者最终审核。
- **#339** - **[PR]** [繁体中文支持](https://github.com/moltis-org/moltis/pull/339) (已开放1.5个月): 今日有更新，说明作者持续投入。此功能涉及多个文件，属于首次贡献，可能需要维护者更多时间和精力来审查和集成。建议维护者安排时间处理。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的CoPaw (QwenPaw) GitHub数据，生成一份结构清晰、数据驱动的项目动态日报。

---

# CoPaw 项目动态日报 (2026-04-27)

## 1. 今日速览

今日CoPaw项目社区活跃度极高，24小时内产生了31条Issue和10个PR，显示出强大的用户参与度和开发响应速度。项目核心矛盾集中在**配置持久化**与**数据备份**两大基础功能上，多个Issue报告了配置在重启后丢失、备份功能不可用等严重问题，直接影响了用户体验和信任度。与此同时，社区对新功能（如MCP优化、多Tab独立会话）的呼声也很高，且已有对应的PR在推进，表明项目在功能迭代与稳定性修复上并行前进。总体来看，项目处于**高活跃、高压力**的快速发展期，需要优先解决核心稳定性问题。

## 2. 版本发布

本日无新版本发布。

## 3. 项目进展 (重要PR合并/关闭)

今日项目在用户痛点响应上表现积极，几个关键PR已合并，解决了阻碍用户使用的具体问题：

- **#3857 [CLOSED] fix(console): use hybrid storage for per-tab agent selection**
    - **摘要:** 修复了多浏览器标签页切换智能体后对话混乱的问题。通过采用`sessionStorage`（标签页独立）与`localStorage`（新标签页继承上次选择）的混合存储策略，实现了每个标签页独立维护对话上下文，新开标签页也能继承上一次选择的智能体。
    - **影响:** 解决了一个严重的UI/UX bug (#3852)，显著提升了多任务操作体验。

- **#3859 [CLOSED] feat(ACP): add ACP agent rename and delete in WebUI**
    - **摘要:** 为ACP（Agent Communication Protocol）配置页面添加了重命名和删除自定义智能体代理的功能。
    - **影响:** 直接修复了Issue #3835报告中无法在WebUI中管理自定义ACP代理的问题，补齐了关键的用户配置能力。

- **#3858 [CLOSED] fix(timezone): normalize non-standard timezone names**
    - **摘要:** 修复了在报告非标准时区名称（如`Asia/Beijing`）的系统上启动崩溃的问题。
    - **影响:** 这是一个关键的稳定性修复，解决了特定Linux发行版（如Deepin 25）上应用完全不可用的问题，提升了跨平台兼容性。

**项目推进总结:** 项目在24小时内快速响应并解决了3个关键问题：多标签页独立会话、ACP代理管理、以及特定系统的启动崩溃。这体现了项目团队对核心用户体验和稳定性的重视。

## 4. 社区热点

今日最受关注的Issue主要集中在基础功能的可靠性上：

1.  **[#3499] 访问页面慢** (5条评论)
    - 链接: [Issue #3499](agentscope-ai/QwenPaw Issue #3499)
    - **分析:** 该问题虽然创建较早，但至今仍是最多评论的，说明“慢”是一个长期且普遍的痛点。用户报告了调用API接口（如`/api/models`）响应时间不稳定的现象。这背后反映的是用户对前端响应速度和后端API性能的期待，尤其是在配置和启动应用时的体验。

2.  **[#3821] 备份从未成功过** (4条评论)
    - 链接: [Issue #3821](agentscope-ai/QwenPaw Issue #3821)
    - **分析:** “备份”功能完全不可用，是**最高优先级的稳定性问题**之一。用户表示无论是旧版本还是最新版，都表现为“显示一分钟左右然后跳回”，这直接导致了用户数据丢失的风险，是用户对其信任度下降的直接原因。

3.  **[#3824] 切换按钮或者刷新页面后配置信息全部丢掉** (4条评论)
    - 链接: [Issue #3824](agentscope-ai/QwenPaw Issue #3824)
    - **分析:** 配置无法持久化是今日的**第二大核心痛点**。用户明确指责此为“严重bug”，涉及智能体语言、计划模式、长期记忆等核心配置。该问题与#3817、#3828等Issues相互印证，指向了项目在配置管理架构上可能存在根本性缺陷。

## 5. Bug 与稳定性

按严重程度排列如下：

- **严重 (数据丢失/功能不可用):**
    - **[#3821] 备份从未成功过** - **无修复PR**。备份功能完全失效，构成数据丢失风险。
    - **[#3824] 配置信息刷新后全部丢失** - **无修复PR**。核心配置无法持久化，严重影响使用。
    - **[#3850] Web UI暂停按钮形同虚设** - **无修复PR**。暂停功能仅为前端渲染，后端Agent继续执行，功能无效。
    - **[#3854] chromadb Rust binding segfault** - **无修复PR**。最新报告，`chromadb`的Rust绑定导致进程崩溃，致命错误。

- **高 (特定场景下功能崩溃/异常):**
    - **[#3853] Debian系统点击保存模型设置后页面卡死** - **已关闭**。报告为权限问题，使用root用户可规避，但根源未根除。
    - **[#3851] DeepSeek/MiniMax模型多轮对话报错** - **已关闭**。因DeepSeek `reasoning_content` 字段要求导致，虽已关闭但根本兼容性问题可能再次出现。
    - **[#3849] Agent回复无故消失** - **无修复PR**。控制台通道下，Agent回答突然中断消失，严重影响对话体验。
    - **[#3808] MCP客户端导致macOS Dock图标异常** - **无修复PR**。UI表现异常，影响美观和信任感。

- **中 (功能异常/不符合预期):**
    - **[#3573] Cron任务指定weixin channel报错** - **无修复PR**。计划任务渠道路由错误。
    - **[#3827] 从备份恢复时无法恢复secrets** - **无修复PR**。Docker容器环境下备份恢复功能不完整。
    - **[#3836] 网页浏览工具 (browser_use) 无法正常工作** - **无修复PR**。报告`ERR_INTERNET_DISCONNECTED`错误，影响Agent联网能力。

## 6. 功能请求与路线图信号

今日社区提出的新功能/改进需求，与已有PR联合分析，可看到一些明确的路线图方向：

- **核心体验优化 (高优先级):**
    - **[#3844] 自动模型列表与选择**： 新增模型提供商后，希望能自动拉取并批量添加模型，避免手动注册。**已有对应PR [#3819] (进行中)**，该PR将替换“Auto Discover”按钮为可浏览的远程模型列表，**很可能纳入下一版本**。
    - **[#3825] 向Shell工具子进程注入逐消息上下文**： 希望在执行脚本时，能传递更详细的上下文（如发信人、房间ID）。这属于高级用户的功能需求，提升Agent脚本的可定制性。

- **渠道与集成增强:**
    - **[#3845] QQ频道：添加自动语音转文字**： **已有对应PR [#3845] (进行中)**，来自首次贡献者，展示了社区对渠道功能丰富化的贡献热情。
    - **[#3846] 支持GitHub Copilot模型提供商**： **已有对应PR [#3846] (进行中)**，同样来自首次贡献者，表明社区希望接入更多主流AI服务。
    - **[#3823] 支持命令行/API自动执行备份**： 这是对#3821备份不可用问题的功能延伸，用户希望备份能自动化。

- **社区贡献亮点:**
    - **首次贡献者活跃:** PR #3746、#3846、#3848、#3845 均来自首次贡献者，项目吸引了大量外部开发者参与，社区生态健康。
    - **功能完善:** PR #3820 为dream_callback添加重试机制，体现了用户对系统健壮性的追求。

## 7. 用户反馈摘要

- **核心痛点：“配置是薛定谔的猫”**。多位用户 (#3817, #3824, #3828) 反馈，在WebUI保存配置后，一旦重启或刷新页面，配置就会丢失。这被明确描述为“严重bug”，正严重侵蚀用户的耐心和信任。
- **失望：“备份功能是骗人的”**。用户(#3821)表示，从旧版到新版，从未成功备份过，“是系统问题吗？有人成功过吗？”的提问中充满了无奈和失望。
- **高频抱怨：“慢”和“卡”**。Issue #3499 和 #3830 分别反映了页面加载慢和控制台GUI卡顿的问题。这不仅仅关乎功能，更直接影响日常使用流畅度。
- **建设性意见：** 用户(#3837)针对微信渠道消息被截断的问题，不仅报告了Bug，还主动提出了“消息合并”和“发送间隔”等具体的配置项建议，展现了高价值的建设性反馈。
- **积极信号：** 尽管Bug不少，但仍有大量用户贡献代码，从首次贡献者到经验丰富的开发者，社区的贡献热情和解决问题的能力非常强。这表明项目的长期发展潜力巨大。

## 8. 待处理积压

以下为本日数据分析中被识别为长期未响应或需要维护者高度关注的Issue：

- **[#3499] 访问页面慢**
    - **关注理由:** 评论数最多（5条），创建于4月16日，但至今无项目成员回复或关闭。这是一个持续影响用户体验的性能问题。
- **[#1426] Matrix通道不工作**
    - **关注理由:** 创建于3月13日，关闭于4月26日。该问题跨度一个多月，反映了某些渠道的维护优先级可能较低或复现困难，需要警惕与主流渠道相比的维护差距。
- **[#3573] Cron任务channel错误**
    - **关注理由:** 与#3783同属Cron任务路由错误，且都无明确修复。这是计划任务核心功能的严重缺陷。
- **[#3783] 定时任务dispatch到错误channel**
    - **关注理由:** 与#3573互为印证，表明Cron调度模块存在系统性路由逻辑缺陷，需要从架构层面根查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 ZeroClaw (zeroclaw-labs/zeroclaw) 提供的 GitHub 数据生成的 2026-04-27 项目动态日报。

---

## ZeroClaw 项目动态日报 - 2026-04-27

### 1. 今日速览

ZeroClaw 项目在 2026-04-27 显示了非常高的活跃度。过去 24 小时内，Issues 和 PR 的更新数量均达到 50 条，社区参与度与开发者的修复节奏都非常快。虽然有一个关于 DeepSeek-V4 API 兼容性的 Bug 引起了社区关注，但项目整体推进稳健，特别是对“提供商 (provider)”配置、工具调用等核心机制的修复和重构进展显著。**项目健康度评估：优秀**。

### 2. 版本发布

无。

---

### 3. 项目进展

过去 24 小时内，项目共合并或关闭了 22 个 PR，推进了多个关键领域的代码质量与功能修复。

- **提供商配置修复 (重大进展)**:
    - **PR #6138 `[CLOSED]`** 与 **PR #6092 `[OPEN]`** 协同工作，解决了 `[reliability].fallback_providers` (备用提供商) 无法正确读取 `[providers.X]` 配置中 `api_key`、`base_url` 等参数的问题。这显著提升了多提供商和故障切换机制的可靠性。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6138), [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6092))
- **核心 Agent 循环优化**:
    - **PR #6107 `[OPEN]`** 开始处理 DeepSeek V4 的“思考模式 (reasoning_content)”，旨在解决与之交互时的 API 400 错误。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6107))
    - **PR #6093 `[CLOSED]`** 修复了当模型返回叙述性文本和工具调用时，产生重复助手消息的问题 (对应 Issue #5584)，提升了对话历史的准确性。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6093))
- **通道 (Channel) 稳定性增强**:
    - **PR #6013 `[CLOSED]`** 修复了 ACP 协议初始化时 `defaultModel` 硬编码的问题，使其能正确读取配置。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6013))
    - **PR #5794 `[CLOSED]`** 修复了 WebSocket 连接中可能丢失缓冲数据的问题，提升了 Slack、Discord 等通道的数据完整性。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5794))
- **测试与基建修复**:
    - **PR #6108 `[CLOSED]`** 一次性修复了 master 分支上的 5 个已有测试失败，为后续开发奠定了绿色测试基础。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6108))
    - **PR #5906 `[CLOSED]`** 为 Linux 环境增加了内存 cgroup (memcg) 检测，避免在不支持该特性的系统上出现静默故障。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5906))
- **代码清理与维护**:
    - **PR #6098 `[OPEN]`** 删除了一个 566 行的死代码 `tracker.rs`，减少了维护负担。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6098))

---

### 4. 社区热点

- **#6059 [Bug]: Incompatible with DeepSeek-V4 API format** (7条评论，1个 👍): 这是今日最受关注的 Bug。用户报告使用 DeepSeek-V4 时遇到错误，与“思考模式”相关。开发者已创建 **PR #6107** 来针对性修复，社区反应迅速，体现了项目对热门提供商的支持敏感度。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6059))
- **#5947 [Feature]: schema v3 — batch breaking field migrations** (6条评论): 这是一个重大的 Schema 版本升级计划，旨在通过一次协调的迁移来最小化对用户的破坏性影响。虽然评论数不多，但标记为 `Merge blocker`，其重要性不言而喻。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5947))
- **#5584 [Bug]: Duplicate consecutive assistant messages** (CLOSED): 该 Bug 引起了广泛讨论，并在今日通过 **PR #6093** 成功关闭，证明社区反馈的问题得到了高效解决。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5584))

---

### 5. Bug 与稳定性

| 严重程度 | Bug 描述 | 涉及组件 | 状态 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **S1 - 阻塞** | **#5941**: 工具调用失败，返回“All providers/models failed”。用户发送“Hello”后即报错。 | runtime/daemon | 开放 | 无 |
| | **#5600**: Kimi-code 提供商在流式调用工具时返回 400 错误，涉及“思考”模式。 | provider | 开放 | 无 |
| | **#6110**: Windows `setup.bat` 脚本包含多个 Bug，导致安装失败。 | tooling/ci | 已关闭 | #6110 (本身是PR) |
| | **#5459**: Ollama 提供商硬编码 `tool_count=0`，导致工具调用完全失效。 | provider | 开放 | 无 |
| | **#6123**: 新安装后 `default_model` 配置未正确读取，导致初始化失败。 | provider | 开放 | 无 |
| | **#5803**: 故障切换提供商完全忽略 `[providers.X]` 的配置文件设置。 | provider | 开放 | #6092 (进行中) |
| | **#5962**: Ollama 提供商在需要工具时调用失败。 | runtime/daemon | 开放 | 无 |
| | **#6149**: 用于本地测试的 `config.toml` 示例与当前版本不匹配。 | docs | 开放 | 无 |
| **S2 - 降级** | **#6059**: DeepSeek-V4 API 不兼容。 | provider | 开放 | #6107 (进行中) |
| | **#5947**: Schema v3 批次破坏性字段迁移（合并阻塞器）。 | 通用 | 开放 | 无 |
| | **#4880**: 频道模式下 `context_compression` 未被触发。 | agent/context | 开放 | 无 |
| | **#5244**: Dashboard 的 Chantab 标签页和 Overview 页面渲染错误。 | runtime/daemon | 开放 | 无 |
| | **#6147**: Anthropic 提供商可能存在与 Opus-4-7 模型的兼容性问题。 | provider | 开放 | 无 |
| **S3 - 小问题** | **#6073**: Web UI 设置中的配置文件编辑器字符显示错位。 | gateway | 开放 | 无 |
| | **#6115**: 已部署的文档页头链接指向个人 Fork。 | docs | 已关闭 | #6115 (本身是PR) |

---

### 6. 功能请求与路线图信号

- **频道回复意图可配置性**: **#6067** 和 **#5674** 都要求使频道中的“是否应该回复 (reply-intent)”判断逻辑可配置，例如允许使用更快的模型或直接忽略（尤其是在私聊中）。这表明社区对自定义行为有强烈需求。
- **CancellationToken (取消令牌)**: **#5837** 和 **#5836** 共同致力于将取消令牌机制推广到 ACP 协议会话和工具执行中，使得用户能够中断长时间运行的任务。这反映了对用户体验和资源控制的需求，很可能被纳入未来版本。
- **Webhook Agent 模式**: **#3542** 用户期望 Webhook 端点能支持完整的 Agent 模式（包括工具执行）。这代表了对扩展 ZeroClaw 集成能力的期望。
- **插件环境变量安全**: **#5919** 提出通过白名单机制限制 WASM 插件对环境变量的读取权限。这显示了社区对安全性的关注。

---

### 7. 用户反馈摘要

- **痛点 - 配置复杂性**: 多个 Issue (如 **#6149**, **#6123**) 反映出用户在配置过程中遇到的障碍，特别是 `config.toml` 示例与实际不符，以及新安装的初始设置问题。对新手用户而言，上手门槛依然存在。
- **痛点 - 提供商兼容性**: 用户对特定 AI 提供商（DeepSeek V4, Ollama, Kimi-code）的兼容性问题反馈集中，这表明用户希望 ZeroClaw 能无缝对接所有主流和本地模型。**特别是 DeepSeek V4 的问题**，社区反应很快，开发者也已跟进。
- **满意点 - 社区响应**: 从 **#5584** 和 **#6115** 等 Issue 被快速关闭，以及 **#6059** 得到迅速响应来看，社区和开发者之间的交互是高效且积极的，这提升了用户对项目维护的信心。
- **讨论 - 二进制体积**: **#5873** 用户友好地询问了 35MB 的二进制体积是否在预期范围内，显示社区成员对项目细节的关注，并愿意提供建设性反馈。

---

### 8. 待处理积压

- **#5459 [Bug]: Ollama provider sends tool_count=0** (S1, 4个👍, 4条评论): 一个严重的、完全阻断了 Ollama 工具调用功能的 Bug，自 2026-04-07 提出以来已近 20 天未关闭，希望维护者重点关注。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5459))
- **#4878 [Bug]: E2EE recovery never downloads room keys from backup** (S1, 4条评论): 加密频道密钥恢复功能完全失效，这可能导致用户数据丢失。自 2026-03-28 以来一直开放，需要紧急处理。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4878))
- **#4880 [Bug]: context_compression not triggered in daemon mode** (S2, 4条评论): 一个影响频道模式长时间对话体验的 Bug，同样自 2026-03-28 以来开放，需要安排开发资源。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4880))
- **#5244 [Bug] Dashboard: Channels tab crash and Overview render error** (S2, 1个👍, 3条评论): 影响 Dashboard 可用性的前端 Bug，自 2026-04-03 开放至今。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5244))

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*