# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-02 04:21 UTC

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的OpenClaw项目GitHub数据，现为您呈上2026-05-02的项目动态日报。

---

## OpenClaw 项目动态日报 | 2026-05-02

### 今日速览

今日项目社区活跃度极高，过去24小时内收到500条Issue和500条PR更新，但合并率较低（仅12.2%），表明维护团队正在消化大量的社区反馈。核心问题集中在**Gateway稳定性**（死锁、CPU满载、事件循环暂停）、**跨平台兼容性**（Windows、ARM架构）以及**会话与信道可靠性**（消息丢失、重复、僵尸进程）。暂无新版本发布，项目处于深度排查和修复阶段。

- **活跃度评估**：极高，社区问题爆发式增长，但合并效率有待提升。

### 版本发布

今日无新版本发布。

### 项目进展

今日关闭/合并了若干重要PR，重点解决了几个用户报告的核心Bug和功能缺失。

- **关键修复**:
    - **PR #75946 (已合并)**：重构Gateway中的会话读取逻辑，移除了在只读路径中不必要的`SessionManager`实例化，有助于减少资源消耗并简化异步转录重构。
    - **PR #54165 (已合并)**：修复了心跳模式下`[TOOL_CALL]`/`[TOOL_RESULT]`括号格式块泄漏到用户消息中的问题。这直接解决了Issue #54138，改善了Telegram/Discord等信道的消息显示体验。
- **功能与进展**:
    - **PR #74847 (开放中)**：为Gateway添加了SDK任务台账RPC，使`@openclaw/sdk`能够稳定地列出、获取和取消后台任务。这是对OpenMeow等客户端的关键赋能。
    - **PR #74952 (开放中)**：引入了维护窗口的角色隔离和延迟重放功能，为大型项目提供了更可靠的定时任务管理机制。
    - **PR #74430 (开放中)**：新增了上传存档安装RPC，简化了插件的部署流程。

### 社区热点

今日社区讨论集中在几个影响面极广的稳定性与性能问题上，反映了用户在生产环境中遇到的普遍痛点。

1.  **Gateway CPU 100%满载与事件循环饥饿** (Issue #75707 [👍4, 评论6], #75907, #75703)
    - 链接: https://github.com/openclaw/openclaw/issues/75707
    - 链接: https://github.com/openclaw/openclaw/issues/75907
    - 链接: https://github.com/openclaw/openclaw/issues/75703
    - **诉求分析**：这是当前最严重的性能回归问题。用户报告在v2026.4.24至v2026.4.29版本中，Gateway进程在空闲状态下CPU占用高达100-130%，导致`WebSocket`处理器饥饿、跨信道延迟飙升，甚至信道断开。该问题在**Windows (WSL2)**和**Raspberry Pi 5 (ARM64)** 上均可复现。社区强烈要求尽快定位并修复此问题，已有多位用户确认回滚至v2026.4.23可解决。

2.  **Gateway重启挂起** (Issue #73303 [👍2, 评论12])
    - 链接: https://github.com/openclaw/openclaw/issues/73303
    - **诉求分析**：macOS用户在v2026.4.26版本上重启Gateway时，新进程启动可能挂起长达3-4分钟。这一现象严重影响了开发者和普通用户的日常使用体验，是亟需解决的高优先级问题。

### Bug 与稳定性

今日报告了大量Bug，按严重程度排列如下：

- **严重 - 性能/稳定性回归**:
    - **Gateway CPU满载 & WS处理器饥饿(dd)**: 影响版本v2026.4.24-4.29，已在多平台复现。
        - Issue #75707, #75907, #75703
        - 状态: 暂无直接Fix PR，社区讨论热烈，已有workaround（回滚）。
    - **Gateway HTTP/WS分派死锁(Windows + Docker)**: 影响版本v2026.4.24-4.26。
        - Issue #73874
        - 状态: 无对应Fix PR。
    - **Gateway事件循环暂停**: 导致跨信道丢失消息和信道断开。
        - Issue #75882 [👍1, 评论7]
        - 状态: 新提交，无对应Fix PR。

- **高 - 行为/逻辑错误**:
    - **会话写锁泄漏**: Gateway未处理的Promise拒绝可导致持续30分钟以上的死锁。
        - Issue #49157 [评论7]
        - 状态: 无对应Fix PR。
    - **滑动重放产生孤立的tool_use块**: 升级到v2026.4.x后，长会话调用Anthropic API会返回400错误。
        - Issue #74907 [👍1, 评论6]
        - 状态: 无对应Fix PR。
    - **队列模式“collect”不批处理消息**: 配置了`mode: "collect"`和`debounceMs`后，消息仍被单独处理。
        - Issue #67793 [评论7]
        - 状态: 无对应Fix PR。

- **中 - 特定场景Bug**:
    - **TUI进程占用89-99% CPU**: 在空闲和对话时均存在忙循环。
        - Issue #75137 [👍1, 评论6]
        - 状态: 无对应Fix PR。
    - **Windows + Node 24上插件工具启动阻塞30-40秒**。
        - Issue #75907 [👍1, 评论5]
        - 状态: 无对应Fix PR。
    - **浏览器工具静默丢弃文件下载**。
        - Issue #48045 [评论5]
        - 状态: 无对应Fix PR。

### 功能请求与路线图信号

用户需求反映了对AI Agent**可管理性、可靠性和安全性**的更高期望。

- **近期可能被纳入的功能**:
    - **信道源回复修复** (Issue #54531): 要求Agent能可靠地将回复发送回原始信道（如Telegram）。这是一个基础体验问题，相关PR #54165已修复了心跳模式下的类似问题，预示此方向已被团队重视。
    - **子目录记忆搜索** (Issue #34400): 用户希望`memory_search`支持递归搜索，以便管理随时间积累的日常记录文件。与社区对长期记忆质量（如Issue #67363）的关切相呼应。
- **远期路线图信号**:
    - **多租户支持** (Issue #60127): 用户提出在单一OpenClaw实例中实现租户隔离，而非部署多个实例。这标志着社区已开始探索商业化或企业级应用场景。
    - **插件UI扩展系统** (Issue #66944 [👍3]): 用户希望插件能够为控制UI贡献原生页面。这能极大地增强OpenClaw的生态系统和定制能力。

### 用户反馈摘要

- **核心痛点**:
    - **稳定性信任危机**: 多个用户报告“每次升级后都出现同样的100% CPU问题”、“回滚到4.23就好了”。这表明近期版本的性能回归已严重影响了用户对项目稳定性的信心。
    - **跨平台兼容性不足**: Windows和ARM (Raspberry Pi)平台用户面临更多独特问题（如Issue #75907, #75703, #73874），需要更多适配投入。
    - **配置与行为不一致**: 文档与版本不匹配 (Issue #48920)、配置项不生效 (Issue #48885) 是长期存在的用户困扰，增加了使用成本。
    - **信道交付可靠性**: WhatsApp、Telegram、Discord等信道均存在消息丢失、重复、格式错误等问题，尤其在复杂的“组群/子代理/心跳”场景下，AI回复的最终交付路径混沌不清。

- **正面反馈**:
    - 社区对`openclaw mcp serve --scope` (PR #74428) 等细粒度权限控制的功能表示欢迎。
    - 用户对`pdftoppm`作为PDF解析回退方案的PR (#75370) 给予积极评价，认为其对无头服务器非常友好。

### 待处理积压

以下为长期未解决或今日新出现的重大Issue/PR，建议维护团队优先关注。

- **Issue #75707 (Gateway CPU 100%)**: 当前社区最关注、影响最广的性能Bug，已有多份独立报告。
- **Issue #43367 (多Agent编排不稳定)**: 从2026年3月报告至今，涉及多Agent并发的核心问题，严重阻碍了复杂自动化场景的应用。
- **Issue #34400 (递归子目录记忆搜索)**: 从2026年3月开放至今，是一个长期未解决的高票功能需求。
- **PR #74847 (SDK任务台账RPC)**: 这是一个关键的架构推进PR，其合并状态将直接影响SDK及相关客户端应用的开发进程。
- **Issue #69208 (跨信道重复Bug汇总)**: 这是一个“总括”问题，收集了多个信道共用的问题，其根因修复可能需要跨团队协作。

---

## 横向生态对比

好的，作为您的资深技术分析师，以下是根据您提供的各项目2026-05-02动态数据，生成的横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态全景分析报告 (2026-05-02)**

**报告日期:** 2026-05-02
**分析师:** AI Agent 技术分析师

### 1. 生态全景

2026年5月2日，个人AI助手与自主智能体开源生态呈现出 **“核心项目全力冲刺，生态参与者各显神通”** 的繁荣景象。以 **OpenClaw** 为代表的旗舰级项目正在积极消化社区大规模反馈，解决因快速发展带来的稳定性挑战；而 **NanoBot、NullClaw、Moltis** 等项目则展现出惊人的修复效率和功能迭代速度。社区关注的焦点已从“能否连接模型”转向 **“连接的可靠性、安全性、记忆的持久性以及多智能体协作的稳定性”**，标志着整个生态正从“技术验证期”迈入“生产磨合期”。此外，对 **多租户、企业级部署、安全沙箱** 的需求信号频发，预示商业化应用探索已悄然开始。

### 2. 各项目活跃度对比

| 项目名称 | Issues 更新数 | PR 更新数 | 今日Release | 活跃度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | **极高** | **社区风暴/稳定性攻坚**：大量Bug涌入，合并率低 (12.2%)，正在全力修复。 |
| **NanoBot** | 12 | 31 | 无 | **极高** | **高效迭代**：问题修复与功能合并效率高，社区贡献活跃。 |
| **Hermes Agent** | 50 | 50 | 无 | **高度活跃** | **高活跃-稳定修复**：并发路径修复有进展，但PR积压和新手入门问题突出。 |
| **PicoClaw** | 12 | 24 | v0.2.8-nightly | **高度活跃** | **社区增长阵痛**：新版本出现回归Bug，需紧急修复以挽回用户信心。 |
| **NanoClaw** | - | 13(合并) | 无 | **高度活跃** | **Provider修复冲刺**：OpenCode Provider稳定性问题成焦点，修复迅速。 |
| **NullClaw** | 4 | 33 | 无 | **高度活跃** | **底层精修**：聚焦跨平台兼容、安全加固和核心性能优化，维护质量高。 |
| **IronClaw** | 29 | 50 | 无 | **极强 (开发者驱动)** | **架构重构攻坚**：`Reborn`架构是绝对主线，社区贡献新功能。 |
| **Moltis** | 6 | 11 | 无 | **活跃** | **稳健推进**：Bug修复覆盖全面，远程沙箱等重量级特性落地。 |
| **LobsterAI** | 0 | 0 | 无 | **中等 (停滞维护)** | **维护资源瓶颈**：长期无新PR合并，积压PR可能打击社区贡献热情。 |
| **CoPaw** | 7 | 3 | 无 | **中等偏高** | **用户反馈活跃**：集中在对话中断、本地模型记忆丢失等核心体验问题。 |
| **ZeroClaw** | 50 | 50 | 无 | **高度活跃** | **架构升级中**：Schema v3迁移与多Agent功能是主线，安装体验有卡点。 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | **静默** | 项目可能处于维护间歇或长期无活动状态。 |

### 3. OpenClaw 在生态中的定位

**OpenClaw 目前是生态中毫无争议的“核心参考”和“大哥大”角色**，其社区规模、Issue/PR数量级远超其他项目。

- **优势**：作为生态参照，其**功能最全面、社区声量最大、SDK生态（如OpenMeow）最丰富**。正因如此，它承受了最多的生产环境压力测试。
- **技术路线差异**：对比 **NanoBot、NullClaw** 等快速修复问题的项目，OpenClaw 当前的挑战在于**社区贡献与核心维护团队处理能力的失衡**。其Day 2问题（如CPU满载、死锁）的暴露，表明其架构在应对大规模、高并发场景时可能存在设计边界。
- **社区规模对比**：OpenClaw 的社区活跃度（500+Issue/PR）是 **Hermes Agent**、**NullClaw** 等项目的10倍以上，凸显了其作为生态基石的吸引力。而 **NanoBot** 以其高效的修复效率（合并率>77%），展现了另一种“小而美”的运营模式。

### 4. 共同关注的技术方向

以下是从多个项目中涌现的共通技术需求，代表了行业共识：

1.  **Agent 自我认知与工具编排**:
    - **涉及项目**: **ZeroClaw** (#5862)、**OpenClaw** (多Agent编排 #43367)
    - **诉求**: Agent应能“知晓”自己拥有的Cron、工具等能力，并主动提供给用户。同时，多Agent间的稳定编排、任务传递与结果回传是共同痛点。
2.  **记忆、上下文与状态的持久化**:
    - **涉及项目**: **CoPaw** (#3991)、**OpenClaw** (子目录记忆搜索 #34400)、**NanoClaw** (#2176)
    - **诉求**: 会话（尤其是长对话、多轮交互）中，上下文记忆丢失、Agent任务中断后状态无法恢复是普遍痛点。
3.  **安全性与权限精细化管理**:
    - **涉及项目**: **PicoClaw** (技能白名单 #2325)、**Hermes Agent** (子进程环境变量绕过 #4427)、**ZeroClaw** (沙箱过严 vs 功能受限 #5722)
    - **诉求**: 社区不满足于“全有或全无”的安全策略，需要基于技能、会话、用户的细粒度权限控制，并在安全与可用性之间取得平衡。
4.  **Provider 兼容性与稳定性**:
    - **涉及项目**: **NanoBot** (Anthropic超时, 流式中断)、**NanoClaw** (OpenCode进程泄漏)、**PicoClaw** (OpenRouter推理模式兼容)
    - **诉求**: 对 OpenRouter、DeepSeek、本地模型（Ollama、LM Studio）等非OpenAI标准API的兼容和稳定性问题频发，是阻挡用户实际部署的主要障碍。

### 5. 差异化定位分析

| 维度 | **OpenClaw** | **NanoBot** | **NullClaw** | **IronClaw** | **Moltis** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重点** | 全能型，复杂的多Agent编排与网关 | 快速、高效的对话与工具调用 | 高性能、低资源的Agent运行时 | 安全、可控的企业级Agent平台 | 跨平台、多功能集成的个人助手 |
| **目标用户** | 高级开发者、社区核心用户 | 追求稳定、快速部署的个人开发者 | 对性能敏感的技术极客、树莓派用户 | 企业开发者、安全合规要求高的团队 | 多平台重度用户、家庭自动化爱好者 |
| **技术架构** | 模块化，庞大的Node.js/TS生态 | Python，强调API兼容与流式处理 | Zig，强调底层性能与安全 (零成本抽象) | Rust，WASM沙箱，强调安全与可审计 | Rust，沙箱+多后端，强调可移植性 |
| **当前阶段** | **生态整合与稳定性考验期** | **高效功能迭代期** | **底层打磨与跨平台适配期** | **核心架构重构期** | **功能完善与平台化探索期** |

### 6. 社区热度与成熟度分层

- **第一梯队：爆发式增长与生态主导** (OpenClaw)：
    - 社区参与度极高，但伴随巨大的稳定性和维护压力。项目本身已成为生态基础设施，任何问题都会引发广泛讨论。
- **第二梯队：高速迭代与高质量维护** (NanoBot, NullClaw, Moltis, PicoClaw)：
    - 社区活跃，贡献与维护形成良性循环。Bug修复快，功能迭代明确。PicoClaw刚经历版本发布，处于社区增长带来的阵痛期。
- **第三梯队：稳健开发与功能推进** (NanoClaw, ZeroClaw, CoPaw, Hermes Agent)：
    - 活跃度中高，但存在PR积压或重大Bug修复滞后问题。团队正努力推进关键功能升级（如ZeroClaw v3, Hermes Agent安全修复）。
- **第四梯队：维护静默或资源瓶颈** (LobsterAI, TinyClaw, ZeptoClaw)：
    - 开发者投入明显不足，社区反馈得不到有效响应，可能导致贡献者流失。

### 7. 值得关注的趋势信号

1.  **“静默失败”成为 Agent 稳定性的最大敌人**：来自 **NanoClaw** 和 **OpenClaw** 的用户报告显示，Agent 在未得到指令或任务片丢失的情况下依然继续运行，这类“静默失败”比直接报错更令人困扰。**对AI Agent开发者来说，设计可验证、可追溯、在部分失败时能自我察觉的监控系统将是下一阶段的刚需。**

2.  **从“对话式”到“任务式”的迁移**: **ZeroClaw** 的多Agent RFC和 **NanoClaw** 的B-01/02中断恢复请求，表明用户将AI Agent视为可进行复杂、长周期任务的自主系统，而非简单的问答聊天。**开发者需要关注任务的原子性、可中断、可恢复以及结果持久化能力。**

3.  **ARM 与 Windows 生态成为隐性挑战**：**OpenClaw** 的树莓派CPU满载、**NullClaw** 修复树莓派空转、**Hermes Agent** 的Windows开箱即用问题，都指向一个事实：**许多项目在主流 x86 Linux 外平台上的兼容性远未达标**。随着个人AI助手向边缘设备（手机、树莓派）和Windows桌面渗透，跨平台适配将成为项目脱颖而出的关键。

4.  **安全与易用性的“拨河”进入深水区**：**ZeroClaw** 的技能权限问题极具代表性：用户既需要安全沙箱防止恶意技能，又希望技能能正常使用Pandas、Matplotlib等标准库。**未来Agent的安全模型将不再是单一的“放行/阻止”，而是需要更智能的“权限动态询问”和“资源审计”机制。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot (HKUDS/nanobot) GitHub 数据，现为您生成 2026-05-02 的项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-02

### 1. 今日速览

今日 NanoBot 项目社区活跃度极高。在过去24小时内，共有 **12 个 Issue** 和 **31 个 PR** 更新，显示出强大的社区参与度和维护力度。其中，**9 个 Issue 和 24 个 PR** 被关闭或合并，体现了极高的解决效率。项目修复了多个关键 Bug，合并了数个重要功能，尤其在 API 兼容性、消息传递和稳定性方面取得显著进展。没有新版本发布，但内部代码迭代迅速。

### 2. 最新发布

无

### 3. 项目进展

项目在修复 Bug 和推进功能上取得了显著进展，社区贡献者活跃。

- **API 与流式处理稳定性提升：**
  - `#3555` **已合并**：修复了工具调用型请求导致 SSE 流提前关闭的 Bug。解决了 OpenAI 兼容 API 结合工具使用时的一个关键问题，提升了 API 的稳定性和可靠性。
  - `#3579` **已合并**：为 Anthropic 非流式请求实现了自动回退至流式模式的功能。解决了耗时长任务因未启用流式而报错 (`#2709`) 的问题，提升了服务的健壮性。
- **重要 Bug 修复：**
  - `#3582` **已合并**：修复了`estimate_prompt_tokens_chain`函数在降级使用`tiktoken`时因变量名错误导致崩溃的 Bug (`#3581`)，恢复了内存管理的稳定性。
  - `#3578` **已合并**：修复了 Matrix 频道在遇到致命认证错误 (如`M_UNKNOWN_TOKEN`) 时会无限循环请求服务器的问题 (`#1851`)，优化了资源利用。
  - `#3528` **已合并**：为`web_fetch`工具增加了 URL 清理功能，防止 LLM 生成的工具调用参数中含有 Markdown 引用符号导致失败。
- **平台与模型支持拓展：**
  - `#3114` **已合并**：新增了 LongCat 模型支持，通过 OpenAI 兼容接口接入，丰富了模型选择。
  - `#2337` 和 `#2379` **已合并**：新增了 NapCatQQ 频道，支持 QQ 群聊及图片，扩展了工作协同场景。
- **消息传递与上下文优化：**
  - `#3549` **已合并**：实现了在 LLM 上下文中注入`sender_id`的功能 (`#3511`)，解决了群组聊天中机器人无法区分用户身份的问题。
  - `#3577` **已合并**：修复了流式输出中“思考”标签不完整泄露给用户的问题，优化了用户体验。

### 4. 社区热点

- **[PR #3492] 安全配置强化讨论**：这是一个关于加固`/webui/bootstrap`和`/api/serve`接口的安全PR，旨在防止在公网部署时因配置不当导致的安全漏洞。截至今日仍在讨论中，反映了社区对于生产环境安全性有较高关注。
- **[Issue #3292] 会话级焦点工具：持久任务感知**：该 Feature Request 要求为 LLM Agent 增加一个类似人脑“任务看板”的能力，使其能在被中断后仍然锚定主任务。该议题获得了4条评论，代表了社区对于更高级、更仿真的 Agent 能力的迫切需求。

### 5. Bug 与稳定性

今日修复了大量 Bug，涵盖不同维度，严重程度均为中等，已全部有对应的修复 PR。

1.  **API 流式处理中断 (已修复):**
    - **Bug:** `#3551` OpenAI兼容API在`stream=true`且涉及工具调用时，SSE流会提前终止。
    - **Fix PR:** `#3555` (已合并)
2.  **Matrix 频道认证崩溃 (已修复):**
    - **Bug:** `#1851` Matrix 客户端因`M_UNKNOWN_TOKEN`错误会持续向服务器发起请求，造成资源浪费和日志溢出。
    - **Fix PR:** `#3578` (已合并)
3.  **Token 估算函数崩溃 (已修复):**
    - **Bug:** `#3581` `estimate_prompt_tokens_chain`函数在降级使用`tiktoken`时因变量`estimated`未定义而崩溃。
    - **Fix PR:** `#3582` (已合并)
4.  **Anthropic 长时间请求失败 (已修复):**
    - **Bug:** `#2709` Anthropic的非流式请求在运行超过10分钟后会抛出异常。
    - **Fix PR:** `#3579` (已合并)
5.  **`reasoning_effort` 配置问题 (待排查):**
    - **Bug:** `#3585` 小米 MiMo 模型中，`reasoning_effort: null` 无法禁用推理模式，存在实现冲突。
    - **状态:** 新开，无修复 PR。

### 6. 功能请求与路线图信号

- **优先度高 & 有实现路径:**
  - **[Issue #3292] 会话级焦点工具**: 该需求复杂度较高，代表了对 Agent 可控性和任务持续性的更高追求。目前尚无对应 PR，但社区讨论积极，是未来版本的重要潜在特性。
  - **[Issue #2072] 原生多智能体路由**: 社区用户希望实现类似 OpenClaw 的多 Agent 路由功能。虽然目前可通过多实例手动实现，但对原生支持的需求明确。
  - **[PR #3358] 模型预设快速切换**: 引入`ModelPresetConfig`实现快速切换模型和参数。该 PR 已在审核中，若合并将极大提升使用便利性，是 v0.2 版本的重要候选特性。

- **低到中优先级:**
  - **[Issue #3518] 支持小米模型**: 该请求已在 Issue #3585 中找到具体 Bug，表明支持虽未完成但已在路上。`#3560` 也修复了 DeepSeek 推理模式，显示项目正积极处理各种模型兼容性问题。

### 7. 用户反馈摘要

- **对互操作性的高需求**：多个用户围绕 **Discord 群组 (PR #3549, Issue #3511)** 和 **飞书** 提出了身份识别问题。社区用户 `optingo` 反馈在家庭 Discord 群中机器人无法识别发送者，而 `BarclayII` 的 PR (#3552) 和 `yorkhellen` 的 PR (#3549) 已经着手解决此问题，社区响应迅速。
- **对原生新平台的支持呼声**：`LZDQ` 贡献的 **NapCatQQ** 频道 (PR #2337, #2379) 获得了合并，这表明社区对非官方 Channels (如 QQ) 的支持有强烈兴趣。这些 PR 的合并也展示了项目对新平台的积极吸纳。
- **对 AI 模型兼容性的敏感度**：用户 `rdnot` 报告的 `tiktoken` 兼容 Bug (#3581) 及 `yorkhellen` 的即时修复 (#3582) 展示了社区发现问题、修复问题的活跃生态。用户对模型推理配置 (如`reasoning_effort`, #3585) 的细微问题也提出了高要求。

### 8. 待处理积压

- **[PR #1759] 通过延迟加载和自动降级减少 MCP 工具上下文开销**: 该 PR 由社区成员 `letzdoo-js` 提交，自 3 月 9 日起已开放近 2 个月。它旨在优化 MCP (Model Context Protocol) 工具的上下文占用，对于提升大规模工具集的 Agent 性能至关重要。如无重大问题，建议维护者优先评审合并，以提升项目性能和扩展性。
- **[PR #3580] Agent 工具循环护栏**: 该 PR 旨在解决小型/本地模型可能导致工具重复调用、浪费 Token 的问题。此 PR 能显著提升 Agent 的成本效益和稳定性，应给予关注。
- **[Issue #3292] 会话级焦点工具**: 如前所述，此 Feature Request 代表了社区对高级 Agent 能力的渴望。虽然短期内不会实现，但应将其列入官方路线图讨论，作为项目差异化竞争的重要方向。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-05-02

---

## 1. 今日速览

过去24小时 Hermes Agent 项目继续保持高活跃度：共产生 **50 条 Issues**（新开/活跃 46，已关闭 4）和 **50 条 PR**（47 个待合并，3 个已合并/关闭）。社区反馈集中在 **OpenCode 集成故障**（#18140）、**Docker 构建失败**（#6352）以及 **Windows 平台兼容性**（#18637）等关键问题上。尽管暂无新版本发布，但多个 Bug 修复 PR 已进入审查阶段，项目整体处于 **“高活跃-稳定修复”** 的健康状态。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去24小时内有 **3 个 PR 被合并/关闭**，关键进展如下：

| PR | 标题 | 类型 | 状态 | 说明 |
|----|------|------|------|------|
| [#18562](https://github.com/NousResearch/hermes-agent/pull/18562) | fix: skip maybe_persist and subdir hints for blocked results (concurrent) | Bug修复 | **已合并** | 在并发执行路径中，当工具结果被标记为“blocked”时，跳过不必要的持久化和子目录提示操作，减少资源浪费 |
| [#18575](https://github.com/NousResearch/hermes-agent/issues/18575) | Reduce recurring Hermes not_allowed_token_type gateway/log noise | Bug修复 | **已关闭** | 减少了 Slack 网关中 `not_allowed_token_type` 日志噪声，提升监控信号质量 |
| [#17690](https://github.com/NousResearch/hermes-agent/issues/17690) | but the main model's compression threshold was | 问答 | **已关闭** | 解答了压缩模型上下文阈值自动降低的警告原因 |

**项目整体向前推进**：并发路径上工具结果处理的边界条件得到修复，为后续更稳定的多工具并行执行奠定基础。但 47 个待合并 PR 仍反映出 PR 审查积压压力。

---

## 4. 社区热点

### 评论数最多 TOP 3 Issues

| Issue | 标题 | 评论数 | 核心诉求 |
|-------|------|--------|----------|
| [#6207](https://github.com/NousResearch/hermes-agent/issues/6207) | Bug: Stale .pyc cache causes TypeError (max_result_size_chars) | **7** | 代码更新后 Python 缓存导致参数不匹配崩溃，**开发者刚需：清理缓存机制或版本兼容性检查** |
| [#6352](https://github.com/NousResearch/hermes-agent/issues/6352) | Docker build broken on main — pip resolution-too-deep | **6** | 自 v0.8.0 发布以来 Docker 构建持续失败，**影响所有依赖 Docker 部署的用户** |
| [#4396](https://github.com/NousResearch/hermes-agent/issues/4396) | UnboundLocalError in show_banner() when terminal width < 80 | **5** | 终端窗口过窄时 CLI 崩溃，**影响移动端或小屏用户** |

### 高反应数 TOP 1

| Issue | 标题 | 👍数 | 分析 |
|-------|------|------|------|
| [#4431](https://github.com/NousResearch/hermes-agent/issues/4431) | Per-topic/per-chat configuration overrides | **3** | 多 Telegram 群组场景下希望为不同群组/话题设置不同人格和系统提示，反映出**多租户需求**的社区增长 |

---

## 5. Bug 与稳定性

### 严重性排序（P0 → P3）

| 严重级别 | Issue | 标题 | 是否有 fix PR |
|----------|-------|------|---------------|
| **P0** | [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | Subprocess env blocklist bypassed via /proc/environ | ❌ 尚无PR |
| **P1** | [#4396](https://github.com/NousResearch/hermes-agent/issues/4396) | UnboundLocalError in show_banner() (终端宽度 < 80) | ❌ 尚无PR |
| **P1** | [#18637](https://github.com/NousResearch/hermes-agent/issues/18637) | Windows 11: Terminal execution fails (exit 126), GBK locale crash | ❌ 尚无PR |
| **P1** | [#18594](https://github.com/NousResearch/hermes-agent/issues/18594) | get_hermes_home() fallback 导致跨 profile 数据损坏 | ❌ 尚无PR |
| **P1** | [#4451](https://github.com/NousResearch/hermes-agent/issues/4451) | patch tool 在 TS/TSX 文件中破坏 await 关键字 | ❌ 尚无PR |
| **P2** | [#6352](https://github.com/NousResearch/hermes-agent/issues/6352) | Docker build broken on main (pip resolution-too-deep) | ❌ 尚无PR |
| **P2** | [#18140](https://github.com/NousResearch/hermes-agent/issues/18140) | Opencode Zen 配置后回退到 Claude | ✅ [#18651](https://github.com/NousResearch/hermes-agent/pull/18651) |
| **P2** | [#18646](https://github.com/NousResearch/hermes-agent/issues/18646) | WhatsApp send_message 忽略群组目标 | ❌ 尚无PR |
| **P2** | [#18586](https://github.com/NousResearch/hermes-agent/issues/18586) | delegate_task 解析错 api_mode/base_url | ❌ 尚无PR |

### 关键发现

1. **安全漏洞**（#4427, P0）：子进程可通过 `/proc/environ` 读取被屏蔽的环境变量（API密钥），这是**严重安全设计缺陷**，目前无修复 PR。
2. **Windows 兼容性**（#18637, P1）：三个关键 Bug 集于一身（终端执行失败、文件访问中断、Doctor 在 GBK 环境下崩溃），新用户开箱即用体验极差。
3. **数据损坏风险**（#18594, P1）：profile 模式下 `get_hermes_home()` 回退逻辑可能导致不同 profile 间的数据串扰。

---

## 6. 功能请求与路线图信号

### 高关注度功能请求

| Issue | 标题 | 类型 | 可能纳入下一版本的依据 |
|-------|------|------|------------------------|
| [#18625](https://github.com/NousResearch/hermes-agent/issues/18625) | 白天/黑夜自动切换 Skin | 用户体验 | 已有完善 Skin 引擎，实现成本低，社区呼声高 |
| [#18591](https://github.com/NousResearch/hermes-agent/issues/18591) | 每个 subagent 可指定不同模型 | 能力增强 | 配合 delegate_task 使用，来自有严格限流需求的用户 |
| [#16255](https://github.com/NousResearch/hermes-agent/issues/16255) | 自动生成的会话标题同步到 Telegram 论坛 | 集成 | 两个功能已独立存在，仅缺连接逻辑 |
| [#4431](https://github.com/NousResearch/hermes-agent/issues/4431) | 按群组/话题配置覆盖 | 多租户 | 社区点赞最高（+3），真实多群组运营者刚需 |

### 已存在关联 PR 的功能

| 功能请求 | 关联 PR | 状态 |
|----------|---------|------|
| 智能技能排序 + 使用追踪 | [#4406](https://github.com/NousResearch/hermes-agent/pull/4406) | 打开中（评论数 0） |
| hermes-repo-map 技能 | [#4413](https://github.com/NousResearch/hermes-agent/pull/4413) | 打开中（评论数 0） |
| Discord Markdown 表格渲染 | [#4401](https://github.com/NousResearch/hermes-agent/pull/4401) | 打开中（评论数 0） |

---

## 7. 用户反馈摘要

### 核心痛点

1. **Docker 构建完全不可用**
   > “docker build from the upstream Dockerfile has been failing on every push to main since the v0.8.0 release.” — [#6352](https://github.com/NousResearch/hermes-agent/issues/6352)
   > **影响面**：所有依赖 Docker 的新用户和持续集成管道。

2. **OpenCode 配置无效，回退到 Claude**
   > “I tried to configure Opencode Zen with Qwen3-coder in Hermes but it always falls back to anthropic/claude-opus-4.6” — [#18140](https://github.com/NousResearch/hermes-agent/issues/18140)
   > **影响面**：想使用低成本替代模型的用户被锁定在昂贵模型上。

3. **Windows 新用户无法使用**
   > “I installed Hermes Agent using the official script on a clean Windows 11 system. I am encountering three critical bugs that make the agent unusable out-of-the-box.” — [#18637](https://github.com/NousResearch/hermes-agent/issues/18637)
   > **影响面**：Windows 用户群体被完全排除。

4. **长对话中任务执行能力下降**
   > “In long chat sessions, Hermes experiences degraded task execution capability—it either returns empty results or merely gives a task description without actually performing the task.” — [#18647](https://github.com/NousResearch/hermes-agent/issues/18647)
   > **影响面**：所有使用长时间对话的高级用户。

### 满意反馈

- **符号内存/技能引擎**（[#18625](https://github.com/NousResearch/hermes-agent/issues/18625)）被用户称赞“已经非常完善，内建了多种主题”。

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30 天无维护者回复）

| Issue | 标题 | P级 | 创建时间 | 最后更新时间 | 风险 |
|-------|------|-----|----------|-------------|------|
| [#2765](https://github.com/NousResearch/hermes-agent/issues/2765) | Hindsight 插件静默跳过工具注册 | P3 | 2026-03-24 | 2026-05-02 | 调试困难，工具无声消失 |
| [#4396](https://github.com/NousResearch/hermes-agent/issues/4396) | CLI 终端宽度 < 80 列崩溃 | **P1** | 2026-04-01 | 2026-05-02 | ❗关键 Bug，长期无维护者回复 |
| [#4403](https://github.com/NousResearch/hermes-agent/issues/4403) | macOS gateway restart 只停不启 | P2 | 2026-04-01 | 2026-05-02 | 影响 macOS 用户，无 PR |
| [#4420](https://github.com/NousResearch/hermes-agent/issues/4420) | 是否有 Web 界面 | P3 | 2026-04-01 | 2026-05-02 | 用户期望，无响应 |
| [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | 子进程通过 /proc/environ 绕过环境变量屏蔽 | **P0** | 2026-04-01 | 2026-05-02 | ⛑️ 安全漏洞，未分配 |

### 长期未合并的 PR（>7 天）

| PR | 标题 | 创建时间 | 风险 |
|----|------|----------|------|
| [#4401](https://github.com/NousResearch/hermes-agent/pull/4401) | feat(discord): convert markdown tables to code blocks | 2026-04-01 | Discord 用户功能缺失 |
| [#4406](https://github.com/NousResearch/hermes-agent/pull/4406) | feat(skills): smart ranking, usage tracking, lifecycle | 2026-04-01 | 有价值的技能系统增强 |
| [#13689](https://github.com/NousResearch/hermes-agent/pull/13689) | fix: harden gateway systemd restart behavior | 2026-04-21 | 解决 gateway restart 相关多个 Bug |

---

## 总结评估

**项目健康度：🟡 中等偏良**

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | ★★★★★ | 每日 50 条 Issue，50 条 PR，用户参与度极高 |
| Bug 修复速度 | ★★☆☆☆ | P0 安全漏洞未分配，P1 Bug 长期无响应 |
| PR 审查效率 | ★★☆☆☆ | 47 个待合并 PR，最老积压超过 1 个月 |
| 文档/兼容性 | ★★★☆☆ | Docker、Windows 全线故障，新用户门槛高 |

**建议优先处理**：
1. 安全漏洞 #4427 — P0，影响所有用户
2. Docker 构建 #6352 — 阻塞新用户入门
3. Windows 兼容性 #18637 — 打开 Windows 用户群体
4. PR 审查回调 — 47 个待合并 PR 需要制定审查流水线

---

*生成时间：2026-05-02 18:30 UTC*  
*数据来源：github.com/NousResearch/hermes-agent Issues & PRs*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-02)

---

## 1. 今日速览

PicoClaw 项目在 2026-05-02 表现出高度活跃：过去24小时内共处理 **12 条 Issue**（含11条新开/活跃、1条关闭）和 **24 条 PR**（11条待合并、13条已合并/关闭），并发布了一个 **Nightly 版本 v0.2.8-nightly**。社区参与度持续高涨，尤其在 **Channel**（通道）、**Provider**（提供商）和 **Agent 安全** 领域出现多起新 Bug 和增强请求。**关键信号**：v0.2.8 稳定版发布后，多用户反馈了**通道启动异常**、**图像识别失效**以及**推理模型思维泄漏**等回归问题，项目团队正在快速响应。

---

## 2. 版本发布

### v0.2.8-nightly (Nightly Build)

- **版本号**：v0.2.8-nightly.20260502.6e1fab80  
- **变更日志**：https://github.com/sipeed/picoclaw/compare/v0.2.8...main  
- **性质**：自动构建，**可能存在不稳定**，建议仅用于测试  
- **注意事项**：
  - 此版本基于 v0.2.8 和 main 分支的最新合并，未包含完整的回归测试
  - 若在生产环境使用 v0.2.8 稳定版，建议**优先监控 Issue #2742、#2744 和 #2738**（见后文），等待官方修复补丁

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 链接 | 类型 | 贡献者 | 核心内容 | 项目推进方向 |
|---------|------|--------|---------|------------|
| [#2739](https://github.com/sipeed/picoclaw/pull/2739) | Bug Fix | cjkihl | 修复 Telegram Markdown 管道表格渲染问题——将管道表封装在围栏代码块中 | **Channel 兼容性**提升 |
| [#2743](https://github.com/sipeed/picoclaw/pull/2743) | Bug Fix | cjkihl | 修复通过非官方代理（如 opencode.ai）使用 DeepSeek 模型时的路由检测问题 | **Provider 路由健壮性**增强 |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) | Enhancement | stevef1uk | 添加 K3s 部署清单和专用多架构 Dockerfile | **生产环境部署**支持 |
| [#2325](https://github.com/sipeed/picoclaw/pull/2325) | Enhancement | stevef1uk | 技能白名单机制——管理员可限制技能安装范围 | **Agent 安全**加固 |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | Enhancement | stevef1uk | 新增异步 /chat HTTP 端点及独立 HTTP 通道 | **外部集成**能力拓展 |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | Enhancement | stevef1uk | 新增 NVIDIA 和 Azure AI Foundry 提供商 | **生态扩展** |
| [#2322](https://github.com/sipeed/picoclaw/pull/2322) | Enhancement | stevef1uk | 实现会话级工作区隔离及工具输出安全封装 | **安全架构**升级 |
| [#2102](https://github.com/sipeed/picoclaw/pull/2102) | Bug Fix | stevef1uk | 修复项目隔离性缺失的问题 | **多用户隔离**稳定 |

**核心进展**：项目在 **Agent 安全体系**（隔离、白名单、会话管理）和 **Provider 兼容性** 两条主线上取得显著成果，尤其对 NVIDIA、Azure 等新提供商的支持预示了 Cloud-Native 部署方向。同时，社区贡献者在 **Channel 适配** 和 **路由检测** 上也进行了及时修复。

---

## 4. 社区热点

### 最活跃 Issue： [#1757 - 定时任务频道错误](https://github.com/sipeed/picoclaw/issues/1757)
- **状态**：开放 45 天，评论 6 条  
- **核心诉求**：用户在 Raspberry Pi Zero W 上使用 Telegram 频道时，设置每小时任务后出现“通道错误”  
- **社区反馈**：开发者未提供直接解决，但用户之间讨论了 Go 1.23 环境下 RPC 超时设置的可能性  
- **信号**：此 Issue 被标记为 `stale`，说明维护者尚未重现或优先级较低

### 最热门 Vote Issue： [#2376 - 禁用 'Enter' 键发送消息](https://github.com/sipeed/picoclaw/issues/2376)
- **👍：1**，评论 4 条  
- **核心诉求**：Android 用户希望按 Enter 键换行而非直接发送，要求添加“发送按钮”选项  
- **用户痛点**：移动端键盘行为与桌面端不一致，导致误发消息  
- **价值判断**：该请求与 UI/UX 相关，但项目目前无专属前端团队，可能依赖社区实现

### 当天讨论最集中： [#2745 - OpenRouter 推理模型思维泄漏](https://github.com/sipeed/picoclaw/issues/2745)
- **创建时间**：2026-05-02，已获开发者关注（评论 0 但紧急度高）  
- **影响范围**：所有使用 OpenRouter 推理模型的用户  
- **技术细节**：助手回复中泄漏了模型“推理前导语”（reasoning preamble），而非仅输出最终答案  
- **关联 PR**：暂无 fix PR，但 PR #2740 正在修复 DeepSeek 类似问题，社区可参考

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（影响主功能）

| Issue | 标题 | 状态 | 严重程度 | 可能的 Fix |
|-------|------|------|---------|-----------|
| [#2742](https://github.com/sipeed/picoclaw/pull/2742) | [BUG] v0.2.8 gateway 启动无频道 | Open | **严重** - 通道不可用 | **暂无** |
| [#2744](https://github.com/sipeed/picoclaw/pull/2744) | [BUG] Android v0.2.8 无法访问 Tab 数据 | Open | **严重** - 移动端不可用 | **暂无** |
| [#2738](https://github.com/sipeed/picoclaw/pull/2738) | [BUG] v0.2.8 图像识别失效 | Open | **严重** - 功能降级 | **暂无** |
| [#2745](https://github.com/sipeed/picoclaw/pull/2745) | [BUG] OpenRouter 推理模型思维泄漏 | Open | **中等** - 隐私风险 | **暂无** |

### 🟡 中等 Bug

| Issue | 标题 | 状态 | 详细信息 |
|-------|------|------|---------|
| [#2602](https://github.com/sipeed/picoclaw/pull/2602) | OAuth 认证错误（OpenAI / Antigravity） | Open | 影响认证流程，`stale` 标记 |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | Windows 构建失败 | Open | 无官方支持构建文档，`stale` |
| [#1533](https://github.com/sipeed/picoclaw/issues/1533) | 技能名连字符转下划线导致 Tool not found | **已关闭** | 修复方案已合并（PR #2325 的技能白名单中可能包含此修复） |

### 🟢 已修复（今日关闭）

| Issue | 标题 | 备注 |
|-------|------|------|
| [#1533](https://github.com/sipeed/picoclaw/issues/1533) | skill-vetter 工具未找到 | 关闭于 2026-05-01 |

---

## 6. 功能请求与路线图信号

### 高优先级（可能纳入下一版本）

| Issue / PR | 标题 | 理由 |
|-----------|------|------|
| [#2404](https://github.com/sipeed/picoclaw/pull/2404) | [Feature] 添加 streaming HTTP 请求配置 | 多个 LLM 后端（如 OpenAI）默认开启流式，该功能是主流需求，👍 1 |
| [#2649](https://github.com/sipeed/picoclaw/pull/2649) | [Feature] 新增串口工具（UART） | 嵌入式开发者强烈需求，PicoClaw 已有 I2C/SPI，缺 UART 是不小空白 |
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | [Feature] GitHub Copilot 支持 | 开发者生态需求，但描述较模糊，需更明确使用场景 |

### 低优先级/待讨论

| Issue / PR | 标题 | 建议 |
|-----------|------|------|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 禁用 Enter 键发送 | UI 层面改动，建议等待移动端优化阶段 |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | 原生音频输入支持（Gemini 1.5） | 新兴功能，但在 `open` 状态，可关注其合并进度 |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | 统一文档中的提供商表格 | 文档质量提升，不影响功能，可快速合并 |

---

## 7. 用户反馈摘要

- **v0.2.8 升级后负面反馈集中**：
  - `axwfae` 在 [#2738](https://github.com/sipeed/picoclaw/issues/2738) 中描述 *“升级到 v0.2.8 后，上传图像无法识别”*，怀疑是版本回归
  - `stl3` 在 [#2744](https://github.com/sipeed/picoclaw/issues/2744) 表示 *“Android v0.2.8 无法从任何 Tab 访问数据”*，导致几乎无法使用
  - `keys4words` 在 [#2742](https://github.com/sipeed/picoclaw/issues/2742) 发现 *“gateway 启动时无任何频道（Telegram 已启）”*，表明配置未正确加载

- **DeepSeek 用户体验改善**：
  - `cjkihl` 通过 PR #2740 和 #2743 两次修复 DeepSeek 兼容性，代表社区对 DeepSeek 推理模型的关注度很高
  - 用户 `DonaldKundert` 在 [#2745](https://github.com/sipeed/picoclaw/issues/2745) 发现 OpenRouter 推理模型“思维泄漏”，表明推理类模型在 PicoClaw 上仍需大量适配

- **长期积压痛点**：
  - `dhensen` 在 [#1757](https://github.com/sipeed/picoclaw/issues/1757) 中持续反映 *“Raspberry Pi Zero W 上定时任务导致频道错误”*，已经开放 45 天仍未解决，反映低功耗设备稳定性尚待优化

---

## 8. 待处理积压（需维护者关注）

### ⏳ 长期未响应的关键 Issue

| Issue | 标题 | 自创建 | 状态 | 建议行动 |
|-------|------|--------|------|---------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 定时任务频道错误 | 2026-03-18 (45 天) | `stale` | 至少回应需求，或标记为已知限制 |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | OAuth 认证错误 | 2026-04-20 (12 天) | `stale` | 确认是否已在 PR #2326 等中修复 |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | Windows 构建指导 | 2026-04-24 (8 天) | `stale` | 低投入，可写简短 wiki 或文档 |

### 🔁 长时间未合并的 PR

| PR | 标题 | 自创建 | 状态 | 风险 |
|----|------|--------|------|------|
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | 工具参数 JSON Schema 修复 | 2026-03-28 (35 天) | `stale` | 解决 LM Studio 等严格 API 的兼容问题，影响面较大 |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | SecureString 反射 panic 修复 | 2026-04-02 (30 天) | `stale` | 可能导致配置敏感字段泄露或 panic，建议优先合并 |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | web_search 工具 YAML 支持 | 2026-04-24 (8 天) | `stale` | 默认启用 DuckDuckGo，提升搜索工具可用性 |

---

**生成时间**：2026-05-02  
**数据来源**：GitHub sipeed/picoclaw (Issues + PRs 实时数据)  
**分析师备注**：项目活跃度极高，尤其是 `stevef1uk` 的批量安全 PR 完成合并，表明 **Agent Shield 安全套件** 基本集成完毕。但 v0.2.8 稳定版存在 **多通道启动失效、图像识别回归** 等严重问题，建议维护者在24-48小时内发布 v0.2.9 hotfix 以挽回用户信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 NanoClaw 项目数据生成的 2026-05-02 项目动态日报。

---

### NanoClaw 项目动态日报 | 2026-05-02

**数据统计周期:** 2026-05-01 至 2026-05-02

---

#### 1. 今日速览

今日项目处于**高度活跃**状态，核心聚焦于 **Bug 修复**与**稳定性提升**。一方面，社区针对 OpenCode Provider 报告了多个高严重性问题，包括上下文丢失、进程泄漏等，但相关修复 PR 已被**快速合并**，展现了维护团队的高效响应能力。另一方面，多位社区开发者提交了新功能（如 Home Assistant 集成、Google Gemini 支持）和大型迁移（V1→V2）的 PR，表明社区贡献热情高涨。然而，大量 PR 仍处于等待合并状态，可能成为项目下一步发展的瓶颈。

#### 3. 项目进展

在过去24小时内，项目通过合并与关闭了13个 PR，重点修复了 OpenCode Provider 的核心 Bug 并优化了开发工具链。

- **关键 Bug 修复已合并：**
    - **[修复] OpenCode Provider 进程泄漏与超时问题 [#2152]**: PR `fix(opencode): kill server process group + configurable IDLE_TIMEOUT_MS` 已合并。该 PR 解决了因 `SIGKILL` 使用不当导致的后台进程泄漏（修复 Issue #2148）以及硬编码超时（修复 Issue #2149），使 OpenCode Provider 更稳定，尤其对本地模型友好。
    - **[修复] OpenCode Provider 指令上下文丢失 [#2153][#2165]**: 两个 PR `fix(opencode): use native instructions config...` 和 `Resolve CLAUDE.md includes for OpenCode provider` 已合并。它们分别从不同角度解决了 Issue #2150 中描述的 `CLAUDE.md` 及引用片段无法被 LLM 加载的问题，确保了 Agent 能获得完整的操作指令。
    - **[修复]主机扫描进程死锁 [#2151]**: PR `fix(host-sweep): clear orphan processing_ack rows...` 已合并，解决了 Issue #2147 中描述的因孤儿进程导致的新进程启动即被杀死的循环问题，防止了会话被完全锁死。
- **工具链与基础设施优化：**
    - **[完善] 预提交钩子优化 [#2171]**: PR `chore(tooling): switch pre-commit hook to lint-staged` 已合并。它将格式化操作从检查整个仓库改为仅检查被修改的文件，显著提升了 `pre-commit` 运行速度，改善了开发者体验。
    - **[合并] 双向 WhatsApp 媒体消息 [#2170]**: PR `feat: bidirectional WhatsApp media messages (skill/03)` 已合并，增强了 WhatsApp 集成技能的功能性。

#### 4. 社区热点

今日社区讨论主要围绕 **OpenCode Provider的稳定性问题**和**大型架构升级**展开。

- **热点 Issue & PR Cluster: OpenCode Provider**
    - **问题：** 用户 `glifocat` 集中报告了三个关于OpenCode Provider的高优先级 Bug（#2147, #2148, #2149, #2150）。
    - **核心诉求：** 使用者在运行 LLM Agent 时遇到了上下文丢失（Agent 没有指令）、进程泄漏（导致资源耗尽和端口占用）、以及硬编码超时（导致本地慢模型无法正常工作）等问题。这些问题会**无声地**破坏 Agent 的行为，是“静默的失败”，用户对此非常不满。
    - **社区反应：** 社区响应迅速，`glifocat` 同时提交了对应的修复 PR，且均已在24小时内被合并。这显示了维护团队对 Provider 稳定性的高度重视。
    - **链接：**
        - Issue: #2147, #2148, #2149, #2150
        - PR: #2151, #2152, #2153, #2165

- **热点 Issue: V1 → V2 升级**
    - **问题：** 用户 `lazer-maker` 创建了一个综合性的 Issue #2175，提出了 V2 升级时需要保留的10多项“运营契约”。
    - **核心诉求：** 这是一个更具前瞻性的讨论，核心是确保从 V1 到 V2 的升级不仅是功能上的迁移，更是**行为与安全策略的平滑过渡**。这位用户代表了一批深度使用者，他们担心 V2 会破坏现有的、配置好的工作流和安全边界。
    - **链接：** Issue: #2175

#### 5. Bug 与稳定性

今日报告了多个 Bug，其中 OpenCode Provider 的问题最为集中且严重。好消息是，所有高严重性 Bug 都已有了对应的修复 PR，且大部分已被合并。

| 严重程度 | Issue ID | 摘要 | 状态 | 是否已有 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **高 (High)** | #2150 | OpenCode Provider 上下文丢失，Agent 无指令运行 | **已关闭** | 是 (#2153, #2165) |
| **高 (High)** | #2148 | OpenCode Provider 进程泄漏，端口被占用 | **已关闭** | 是 (#2152) |
| **高 (High)** | #2147 | 主机扫描孤儿进程导致新进程被杀，服务假死 | **已关闭** | 是 (#2151) |
| 中 (Medium) | #2149 | OpenCode Provider 硬编码超时，不适用本地模型 | **已关闭** | 是 (#2152) |
| 中 (Medium) | #2177 | Active-query 推送模式在产生空结果后静默卡死 | 开放中 (OPEN) | 待定 |
| 低 (Low) | #2172 | 构建脚本在 macOS 上因大小写不敏感导致镜像名称不同 | 开放中 (OPEN) | 待定 |
| 低 (Low) | #2176 | Gmail 容器隔离导致 SC 短期对话连续性断裂 | 开放中 (OPEN) | 待定 |

#### 6. 功能请求与路线图信号

- **明确的新功能：**
    - **Google Gemini Provider 支持 [#2136]**: 一个按 OpenAI Codex Provider 架构设计的 PR，为用户提供 Agent 运行的新选择。目前仍开放中，是未来 Provider 多样性的强信号。
    - **Home Assistant 集成技能 [#1327]**: 一个庞大的、已存活一个多月的 PR，说明社区对将 NanoClaw 作为智能家居控制中枢有实际需求。该 PR 目前仍开放，建议维护者关注其进度。
- **路线图信号：**
    - **V1 → V2 升级流程 [#1931]**： 这是一个大型功能 PR，标志着项目正在向 V2 演进。虽然目前是实验性功能，但已被积极讨论。这意味着项目即将迎来一个重大版本迭代，现有用户需要关注迁移成本。
    - **中断运行检测与恢复 [#2173, #2174]**: 用户 `lazer-maker` 提出了系统级的“B-01”和“B-02”功能请求，旨在解决 Agent 因崩溃或中断而丢失任务状态的可靠性问题。这表明社区用户正在将 NanoClaw 用于对可靠性要求更高的生产环境。

#### 7. 用户反馈摘要

- **痛点：**
    - **“静默的失败”模式令人沮丧**: 用户 `glifocat` 在多个Bug报告中提到，`wrapPromptWithContext` 功能缺失等 Bug 是“静默上下文丢失 (silent context loss)”，Agent 在没有指令的情况下运转，导致结果完全不可控，这种情况对生产级应用是致命的。
    - **升级迁移的焦虑**: 用户 `lazer-maker` 非常具体地列出了 V1 中已验证的数十项运营契约（如消息分发策略、权限、工具安全等），并强调 V2 必须“有意识”地保留它们而非“默认丢失”。这反映了深度用户对于破坏性变更的谨慎和担忧。
- **满意之处：**
    - **社区维护者响应速度**: 尽管问题严重，但Issue #2147, #2148 等在报告后极短时间内就被对应的 PR 修复并合并。这种高效的“报告即修复”模式大大增强了社区对项目维护团队的信心。

#### 8. 待处理积压

以下 Issue 和 PR 已开放较长时间或涉及重要功能，需要维护者关注：

- **[重要] 长期待合入的 PR:**
    - **PR #1327: feat: add Home Assistant MCP integration skill**: 开放已超过40天，功能完整，但无人标记审核。这是一个有潜力的新技能。
    - **PR #701: fix: inject date/time context into all agent prompts**: 开放已近2个月，这是一个基础但重要的修复。尽管状态显示“Blocked”，但仍需维护者说明其状态或推动其合并/关闭。
- **[重要] 关键功能请求 Issue:**
    - **Issue #2173 (B-01) & #2174 (B-02)**: 关于中断任务检测与恢复的请求。它们是提升项目生产环境可靠性的关键，但尚未有任何 PR 关联。这应该是维护团队下一阶段的重点工作方向。
- **[提醒] 需要说明状态的 PR:**
    - **PR #2052 & #2054**: 这两个关于安装流程修复的 PR（`fix(setup)`）已开放近一周，至今没有收到任何来自维护者的评论或标签变动。建议维护者至少回复一下，提供进度更新或合并/关闭时间线。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-02

## 1. 今日速览

过去24小时内，NullClaw 项目保持了高强度的开发与维护节奏。**社区提交了33条 PR，其中31条已被合并或关闭，显示了极高的处理效率**。在 Issue 方面，4条活跃问题全部被关闭，但均为较早提出的问题。目前项目主要聚焦于**修复 Zig 0.16 兼容性带来的底层 I/O 问题、优化 CPU 空转问题、以及增强安全性（如网络输出防欺骗包装）**。项目整体活跃度评估为 **“高度活跃”**，社区主力贡献者（如`manelsen`、`vernonstinebaker`）密集推进了重要缺陷修复与功能增强。

## 2. 版本发布
无新版本发布。

## 3. 项目进展

今日项目核心进展体现在**网关稳定性、安全防御、跨平台兼容和核心功能连续性**四个方面，共有31个 PR 被合并/关闭：

*   **🔥 关键修复- CPU 空转问题 (Issue #851 已关闭)**：`manelsen` 提交的 `#853` 为网关 accept 循环增加了退避机制，彻底解决了在 Raspberry Pi 等设备上，因 `accept4()` 返回 EAGAIN 导致 CPU 核心被完全占用的 BUG。
*   **🔧 修复子代理结果传递 (Issue #849 已关闭)**：`manelsen` 通过 `#854` 修复了子代理在执行完任务后无法将结果同步回原频道的问题，显著提升了多 Agent 协同的可靠性。
*   **🔥 安全边界加固**：`mark-os` 提交的 `#880` 为 `web_fetch` 和 `web_search` 工具的输出增加了防欺骗包装，防止 LLM 被外部注入内容误导，是一项重要的安全补丁。
*   **🛠 跨平台兼容性**：`vernonstinebaker` 的 `#878` 修复了 POSIX 系统上 `thread.sleep` 无法正确挂起 OS 线程的问题，转而使用 `nanosleep`，这对依赖定时调度的网关稳定性至关重要。
*   **💡 新功能落地**：`manelsen` 合并的 `#855` 实现了并发的入站消息处理与抢占机制，解决了长任务阻塞其他请求的问题，直接回应用了 Issue #832 的诉求。

## 4. 社区热点

**今日讨论最活跃的当属 PR #878：**
- **链接**: [PR #878](https://github.com/nullclaw/nullclaw/pull/878)
- **诉求分析**: 该 PR 涉及底层 `std_compat` 的 I/O 特性。虽然评论数（在数据中为 undefined）未明确，但其“使OS线程真正睡眠”的修复直指项目在 ARM 平台（如树莓派）上遇到的 CPU 高占用核心问题。社区对此类能提升实际用户体验和服务器资源利用率的底层修复关注度最高。

**其次备受关注的修复是 PR #877（Mattermost 通道修复）：**
- **链接**: [PR #877](https://github.com/nullclaw/nullclaw/pull/877)
- **诉求分析**: 社区用户对特定第三方平台（Mattermost）的集成稳定性非常敏感。该修复解决了由于 Zig 0.16 升级导致的 API 请求失败问题，展示了项目对连接生态的积极维护。

## 5. Bug 与稳定性

今日没有新的 Bug 被报告，**但此前报告的4个 Bug/Issue 均已被修复并关闭**，修复速度非常快。

*   **【严重】网关 CPU 空转 (Issue #851)** - **已修复 (PR #853)**
    *   **影响**: 在 ARM64 Linux 上运行空载网关时，单个 CPU 核心占用率飙升至100%。
    *   **修复**: 增加了带退避机制的循环，避免因非致命错误（如 EAGAIN）导致紧循环。
*   **【高】子代理结果丢失 (Issue #849)** - **已修复 (PR #854)**
    *   **影响**: 子代理可执行操作（如创建文件），但无法将文本回复返回给父会话。
    *   **修复**: 确保子代理完成信息携带原始频道路由并精确发送。
*   **【中】Mattermost 消息发送失败 (PR #877)** - **已修复并合并**
    *   **影响**: 由于 Zig 0.16 的 API 变更，向 Mattermost 服务发起的所有 POST 请求 均因缓冲区未刷新而失败。
    *   **修复**: 在调用 curl 前正确执行 `toArrayList()` 以刷新缓冲区。
*   **【低】子代理状态键重复 (PR #854 附带)**
    *   **修复**: 确保子代理完成任务后，相关状态键 `system:subagent:*` 会被正确移除，避免监控干扰。

## 6. 功能请求与路线图信号

虽然今日无新增功能请求 Issue，但从合并的 PR 可以看出项目路线图信号：

*   **强化工具安全体系**: PR #880 和 PR #875 表明项目正在建立一套“外部内容隔离”与“命令风险分级”机制。尤其是 PR #875 将 `curl`、`wget` 等常用网络命令从“高风险”下调至“中风险”，同时增加了屏蔽特定危险前缀（exec-prefix）的能力，这标志着项目在 LLM 安全落地方面正在趋向成熟。
*   **知识图谱记忆系统落地**: 经过长时间的开发，`manelsen` 贡献的重磅 PR #712 （知识图谱内存后端）今日已被标记为 **已关闭（合并）**。这很可能出现在未来的版本中，极大增强 NullClaw 的长期记忆与关联推理能力。

## 7. 用户反馈摘要

今日反馈主要源于修复性 PR 的讨论，没有直接表达不满的情绪。

*   **痛点满足**: #851 的提出者 `Trez-zerT` 描述了树莓派网关 CPU 满载的痛点，随即被 #853 快速修复。这展示了项目对用户现场问题的响应能力非常强。
*   **功能可用性提升**: 关于 `nullclaw capabilities` 命令的输出格式（#860），用户 `eabase` 反馈格式不易读，社区成员 `manelsen` 随即在 PR #863 中通过彩色表格、TTY 检测等方式完美解决了这个问题。
*   **并发交互需求**: 用户 `superhero75` 提出的 #832（并发交互）被 PR #855 实现，这表明项目非常重视提升用户在单个会话中执行长任务时的体验，实现了“后进先抢占”的轮次机制。

## 8. 待处理积压

目前存在 **2 个开放的 PR**，项目整体无显著积压。值得关注的主要开放 PR 是：

*   **PR #881**: `refactor(http): remove runtime curl subprocesses`
    *   **状态**: OPEN
    *   **链接**: [PR #881](https://github.com/nullclaw/nullclaw/pull/881)
    *   **重要性**: **高**。这是一个较大的重构，旨在完全移除内置运行时对 `curl` 子进程的依赖，转而使用 Zig 原生的 `std.http`。虽然不直接影响现有功能，但将减少外部依赖、提升跨平台一致性和性能。需要维护者重点关注审查。
*   **PR #878**: `fix(compat): use nanosleep on POSIX in thread.sleep to actually suspend OS thread`
    *   **状态**: OPEN
    *   **链接**: [PR #878](https://github.com/nullclaw/nullclaw/pull/878)
    *   **重要性**: **高**。虽然修复了关键问题，但由于涉及底层的 `std` 兼容层改动，可能与其他 I/O 组件交互，需要谨慎评估。建议安排代码审查并尽快合并或指导修改。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目 GitHub 数据生成的 2026-05-02 项目动态日报。

---

## IronClaw 项目日报 - 2026-05-02

### 1. 今日速览

今日项目状态极其活跃，核心开发与社区贡献均处于高强度工作状态。`Reborn` 架构的重构与落地是绝对主线，相关 Issues 和 PRs 占据绝对多数，且多个高风险、大尺寸的 PR 正在并行推进，显示出团队正在全力冲刺关键里程碑。
*   **活跃度评估**：极高。24小时内产生 29 条 Issue 更新和 50 条 PR 更新，其中大部分由核心团队驱动关注于 `Reborn` 架构，同时也有多名外部贡献者提交了“法律工具集”等功能性 PR。
*   **核心进展**：`Reborn` 架构的各个组件（运行时、HTTP出口、密钥管理、审计等）正通过多个 Issue/PR 被逐个击破并集成到 `reborn-integration` 分支。`obligation` 处理、生产级配置和 E2E 测试成为当前阶段的攻坚重点。
*   **社区贡献亮点**：贡献者 `abbyshekit` 今日提交了多个大尺寸 PR，涵盖“法律工具集”（RAG、DOCX导出）、Slack频道集成、CLI备份与导入等新功能，展现了强大的社区生态活力。

### 2. 版本发布

24小时内无新版本发布。

### 3. 项目进展

今日没有 PR 被合并，所有 PR 均处于打开状态。但这并不意味着项目停滞，相反，大量关键性 PR 的提交标志着项目获得了巨大的进展，尤其是核心重构（Reborn）和新功能建设。

**关键价值驱动的 PR 提交：**

*   **Reborn 核心架构（核心开发者 `nickpismenkov`）**：
    *   提交了 `reborn-memory` 存储服务的完整 PR 栈（#3180 ~ #3185），从模块拆分、原生数据库实现（LibSQL与PostgreSQL）到垂直集成测试，实现了 Reborn 原生的、生产就绪的记忆子系统。
    *   **意义**：这是 Reborn 架构落地过程中的重要基础设施，为上层 AI Agent 提供了数据持久化和检索能力。
*   **Reborn 运行时与服务集成（核心开发者 `serrrfirat` 主导的系列 Issue）**：
    *   今日有多个相关 Issue 关闭，如 `#3137`（MCP HTTP/SSE客户端通过共享运行时出口）、`#3143`（生产构建的Obligation处理器）、`#3086`（重划WASM运行时通道）、`#3146`（生产环境信任决策评估）。
    *   新开启的 Issue 如 `#3138`（脚本HTTP出口受共享运行时出口管控）、`#3139`（网络策略义务的运行时通道）、`#3140`（一次性密钥注入的生产级配置）。
    *   **意义**：这些工作证明了 `Reborn` 运行时抽象层正在从概念验证走向生产级、可配置的完整实现，将极大提升系统的安全性与可扩展性。
*   **社区新功能贡献（贡献者 `abbyshekit`）**：
    *   提交了“法律工具集”的多个 PR（#3173, #3174, #3179），包括文档导入、基于 RAG 的聊天和 DOCX 导出功能。
    *   新增了 CLI 备份与导入命令（#3178, #3186）和 `insights` 使用分析命令（#3177）。
    *   提交了 Slack 频道安装（#3188）以及针对 Google Drive 的只读 OAuth 范围支持（#3175）。
    *   **意义**：这些 PR 极大地丰富了 IronClaw 作为 Agent 平台的功能边界和应用场景，体现了平台的开放性。

### 4. 社区热点

今日的讨论热点完全集中在 `Reborn` 架构上，多个高风险、复杂的 Issue 吸引了大量评论。

*   **最热门 Issue**：
    *   **`#2987` (EPIC) Track Reborn architecture landing strategy and grouped PR plan**：作为 `Reborn` 开发的顶层史诗级 Issue，累计有 **44 条评论**。它追踪了整个 `Reborn` 架构着陆的总体规划、PR 分组和落地策略。
        *   **诉求**：协调复杂的、多 PR 叠加的架构重构，避免一个巨大的 PR 让审查者崩溃，是项目架构演进的“指挥中心”。
    *   **`#3067` [TEST] Reborn: Add vertical-slice integration test suite**：有 **14 条评论**，该 issue 致力于创建顶层的、端到端的集成测试套件，以证明整个 `Reborn` 架构的子系统能够协同工作。
        *   **诉求**：社区和开发者都关心重构后的系统是否依然稳定可靠，该 Issue 反映了对重构项目质量保证的高度关注。
    *   **`#3085` Use shared Reborn runtime HTTP egress for WASM, Script, and MCP**：有 **7 条评论**，讨论如何统一不同运行时（WASM、脚本、MCP）的 HTTP 出口路径。
        *   **诉求**：技术实现上的深度讨论，核心诉求是统一安全策略（DNS/SSRF检查、限流、审计），消除技术债。

### 5. Bug 与稳定性

*   **严重安装问题 (重复)**
    *   **`#2949` ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu** (已持续开启8天)
    *   **`#2818` bug: installer for `v0.26.0` fails on `x86_64-unknown-linux-gnu`** (已持续开启11天，获1个👍)
    *   **状态**：这两个 Issue 描述了同一个问题：`x86_64-unknown-linux-gnu` 平台的安装脚本无法找到对应的下载。尽管 Issue `#2949` 指出 Release 页面上存在该平台的二进制文件，但安装脚本逻辑可能存在缺陷。
    *   **影响范围**：高。这直接阻碍了新用户（尤其是 Linux 用户）的首次安装体验。
    *   **是否有 Fix PR**：暂无。

### 6. 功能请求与路线图信号

*   **新平台支持**：**`#3168` Add arm64/aarch64 platform support for Docker builds**。这是一个明确的新功能请求。考虑到 Cranelift（IronClaw 使用的 WASM JIT 编译器）已经支持 aarch64，该请求可行性较高。**极有可能**被纳入后续版本，以满足越来越多的 ARM 架构（如 Apple Silicon、AWS Graviton）用户需求。
*   **Mission 功能增强**：**`#3166` Mission auto-resume after auth/approval gate resolution**。这是一项对 Agent “任务”（Mission）功能的改进，目标是在用户完成 OAuth 授权等操作后，任务可以自动恢复执行，而不是完全失败。这与 `#3133`（Gmail 发送邮件失败的 Mission）问题直接相关，修复该功能将显著提升 Agent 任务的鲁棒性。

### 7. 用户反馈摘要

*   **痛点：安装门槛高**：从 Issue `#2949` 和 `#2818` 可以看出，部分 Linux 用户遇到了明显的安装障碍，安装脚本的兼容性问题是当前最大的用户投诉点。
*   **对 Docker 支持的需求**：Issue `#2963`（Docker Hub image missing）表明用户有通过 Docker 部署 IronClaw 的需求，但官方指引与实际资源不匹配，影响了这部分用户的体验。
*   **对核心功能的依赖**：Issue `#3133`（Mission to send an email failed）的真实用户反馈揭示了 Agent 在日常任务（如定时发送邮件）中可能因为第三方服务（如 Gmail）认证问题而失败，并且 Agent 未能妥善处理。这暴露了当前 Agent 在应对底层服务异常时的脆弱性。

### 8. 待处理积压

*   **安装脚本故障**：
    *   **`#2949` ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu**
        [链接](https://github.com/nearai/ironclaw/issues/2949)
    *   **`#2818` bug: installer for `v0.26.0` fails on `x86_64-unknown-linux-gnu`**
        [链接](https://github.com/nearai/ironclaw/issues/2818)
    *   **提醒**：这两个 Issue 已存在超过一周，且直接关系项目入门体验。维护团队应尽快排查是 Release CI 配置问题还是安装脚本本身对平台检测的逻辑错误。
*   **Docker 镜像缺失**：
    *   **`#2963` Docker Hub image missing**
        [链接](https://github.com/nearai/ironclaw/issues/2963)
    *   **提醒**：文档中存在未实现的交付物，会严重影响用户信任。建议要么更新文档移除错误指引，要么补全 Docker 镜像的构建与发布流程。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 LobsterAI 项目 GitHub 数据，我已为您生成了 2026-05-02 的项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-05-02

## 1. 今日速览

今日 LobsterAI 项目处于 **稳定维护期**，社区活跃度**中等**。过去24小时内，项目**未新增 Issues**，也**没有新版本发布**或 PR 被合并。目前有 **6个待合并的 Pull Request**，均为约一个月前提交的“陈旧” PR，反映出项目维护团队当前可能资源有限，合并节奏放缓。尽管如此，这些 PR 涵盖的 bug 修复与功能增强（如UI优化、技能管理、安装稳定性等）对于提升用户体验依然至关重要。

## 2. 版本发布

无

## 3. 项目进展

今日无 PR 被合并或关闭。当前 **6 个待合并的 PR** 是项目近期主要的进展来源，它们展示了团队在多个维度的努力：

- **用户体验优化**:
    - **PR #1181**: 修复了代理会话列表的混淆问题，隐藏内部使用的“OpenClaw”主代理会话，提升用户侧清晰度。
    - **PR #1185**: 为已导入的技能卡片添加“打开文件夹”按钮，方便用户直接编辑技能文件。
- **核心功能修复**:
    - **PR #822**: 通过统一令牌刷新锁机制，消除竞态条件，解决多请求同时触发401时可能导致令牌刷新失败的问题。
    - **PR #825**: 通过内容哈希检测，防止用户重复上传相同的技能（skill.zip），解决了列表混乱和存储浪费问题。
- **性能与稳定性**:
    - **PR #1186**: 优化流式响应渲染性能，通过稳定对象引用和添加`React.memo`，避免AI回复过程中消息列表的全量重渲染，提升体验流畅度。
    - **PR #1190**: 修复Windows卸载流程，在卸载前强制关闭运行中的应用，避免用户误以为卸载残留。

## 4. 社区热点

今日无活跃讨论或高评论热度的新 Issue/PR。当前热门关注点集中在 **6个已提交但长期未合并的 PR** 上，这些 PR 均为项目内的资深贡献者提交，且已处于“陈旧（stale）”状态。背后反映了社区对以下功能/修复的迫切需求：

- **核心稳定性与数据一致性** (PR #822, #825)
- **性能体验优化** (PR #1186)
- **Windows 平台安装体验** (PR #1190)

这些 PR 长时间未合，可能成为社区贡献热情降温的潜在风险信号。

- **PR #1181**: [netease-youdao/LobsterAI PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)
- **PR #822**: [netease-youdao/LobsterAI PR #822](https://github.com/netease-youdao/LobsterAI/pull/822)
- **PR #825**: [netease-youdao/LobsterAI PR #825](https://github.com/netease-youdao/LobsterAI/pull/825)
- **PR #1185**: [netease-youdao/LobsterAI PR #1185](https://github.com/netease-youdao/LobsterAI/pull/1185)
- **PR #1186**: [netease-youdao/LobsterAI PR #1186](https://github.com/netease-youdao/LobsterAI/pull/1186)
- **PR #1190**: [netease-youdao/LobsterAI PR #1190](https://github.com/netease-youdao/LobsterAI/pull/1190)

## 5. Bug 与稳定性

今日无新报告的 Bug。但当前积压的 PR 中包含了多个关键稳定性问题的修复：

- **(严重) 并发令牌刷新竞态条件** (PR #822)：当多个请求同时携带过期令牌时，可能导致并发刷新和刷新失败。已有修复 PR，**待合并**。
- **(中) Windows 卸载无法关闭进程** (PR #1190)：该问题会导致用户卸载后误以为程序仍在运行，形成功能错觉和潜在的数据残留风险。已有修复 PR，**待合并**。
- **(中) 流式响应全量渲染性能** (PR #1186)：UI 在长时间流式回复中可能出现卡顿，影响交互体验。已有修复 PR，**待合并**。
- **(低) 重复上传技能造成空间浪费** (PR #825)：虽然不是崩溃性 Bug，但会污染技能列表，影响用户管理体验。已有修复 PR，**待合并**。

## 6. 功能请求与路线图信号

今日无新功能请求提出。从现有 PR 可以窥探项目的路线图信号，以下功能/增强大概率会被包含在下一个版本中：

- **技能管理优化** (PR #825, #1185): 引入重复检测和便捷的文件夹访问，提升技能的开发与管理体验。
- **高性能流式响应** (PR #1186): 针对 AI 回复这一核心交互场景的性能优化是产品竞争力提升的关键。
- **代理会话管理改进** (PR #1181): 减少内部逻辑对用户界面的干扰，体现对专业化产品细节的打磨。
- **安装/卸载体验优化** (PR #1190): 修复平台特定问题，提升跨平台产品的一致性和专业性。

## 7. 用户反馈摘要

今日无新的用户评论反馈。但从当前的 PR 摘要中，可以提炼出用户已表述或潜在的痛点：

- **痛点：技能管理混乱**：用户反馈重复上传相同 `skill.zip` 会导致技能列表出现多个同名副本，造成混淆和存储浪费 (PR #825)。
- **痛点：流式回复卡顿**：用户可能在长时间对话中遇到界面滚动不流畅、CPU占用高的问题 (PR #1186)。
- **痛点：Windows 卸载问题**：用户可能在卸载后看到应用仍在运行，产生困惑和不信任感 (PR #1190)。

## 8. 待处理积压

以下6个 PR 均已提交超过一个月并处于静默状态，请维护团队重点关注。长期积压不仅可能流失重要的社区贡献，还会降低项目的敏捷度和社区信任度。

1.  **PR #1190**: `fix(installer): stop app before Windows uninstall` - 作者: leedalei (2026-04-01)
    - [netease-youdao/LobsterAI PR #1190](https://github.com/netease-youdao/LobsterAI/pull/1190)
    - **重要性**: 高 (平台特定关键稳定性修复)

2.  **PR #1186**: `优化流式响应渲染性能...` - 作者: grayalone921 (2026-04-01)
    - [netease-youdao/LobsterAI PR #1186](https://github.com/netease-youdao/LobsterAI/pull/1186)
    - **重要性**: 高 (核心交互体验优化)

3.  **PR #1185**: `feat(skills): 为已导入的技能卡片添加打开文件夹按钮` - 作者: Housum (2026-04-01)
    - [netease-youdao/LobsterAI PR #1185](https://github.com/netease-youdao/LobsterAI/pull/1185)
    - **重要性**: 中 (功能增强，提升开发体验)

4.  **PR #1181**: `fix(cowork): hide OpenClaw main agent sessions from session list` - 作者: Noodles006 (2026-04-01)
    - [netease-youdao/LobsterAI PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)
    - **重要性**: 中 (用户体验优化)

5.  **PR #825**: `fix(skill): add duplicate detection for local skill uploads` - 作者: OnePieceJoker (2026-03-25)
    - [netease-youdao/LobsterAI PR #825](https://github.com/netease-youdao/LobsterAI/pull/825)
    - **重要性**: 中 (功能完善与数据管理)

6.  **PR #822**: `fix(auth): unify token refresh lock to eliminate race conditions` - 作者: gongcongrong (2026-03-25)
    - [netease-youdao/LobsterAI PR #822](https://github.com/netease-youdao/LobsterAI/pull/822)
    - **重要性**: 高 (核心认证稳定性，涉及安全与数据一致性)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-02

---

## 1. 今日速览

- 项目今日活跃度较高：共处理 **6 条 Issues（5 条已关闭）** 和 **11 条 PR（9 条已合并/关闭）**，修复与功能推进节奏紧凑。
- **关键修复覆盖全面**：Telegram 上传崩溃、Discord 命令缺失、聊天布局溢出、自动滚动失效等核心 Bug 均在 24 小时内完成修复并合并。
- **新功能落地**：远程沙箱支持（Vercel/Daytona/Firecracker）、Zen 多协议提供商、数据导入导出等重量级特性并入主分支。
- **社区参与活跃**：外部贡献者 `gaarf` 提交了终端、语音按钮等多个修复，`vvuk` 报告了 2 个 UI 相关 Bug。
- **待处理风险**：1 条 Feature PR (#942) 持续开放中，1 条新 Feature Issue (#949) 提出子代理无故障切换问题，尚未有对应 PR。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（重要合并/关闭 PR）

### 3.1 功能推进

| PR # | 标题 | 说明 | 状态 |
|------|------|------|------|
| #942 | `feat(sandbox): remote & multi-backend sandbox support` | 新增远程沙箱架构，支持 Docker/Vercel/Daytona/Firecracker 多后端，解决云部署中 Docker-in-Docker 不可用问题。 | **OPEN**（持续演进） |
| #944 | `feat(providers): add Zen (opencode.ai) multi-protocol provider` | 集成 OpenCode Zen 模型代理，一个 API Key 即可访问 GPT/Claude/Gemini 等模型，零保留策略。 | 已合并 |
| #951 | `feat(portable): add data import/export for config, databases, and sessions` | 新增 `moltis-portable` crate，支持通过 CLI/REST/Web UI 进行完整的备份与恢复。 | 已合并 |
| #920 | `feat(telephony): add phone call support via Twilio` | 新增电话通道插件，支持 Twilio 呼叫、音频转换、状态机管理。 | **OPEN**（持续演进） |

### 3.2 关键修复

| PR # | 标题 | 对应 Issue | 说明 |
|------|------|-----------|------|
| #954 | `fix(telegram): upgrade teloxide 0.13→0.17` | #947 | 升级 Teloxide 库，修复上传文档/语音时 `ThreadId` 序列化未实现导致 panic 的问题。 |
| #950 | `fix(discord): register slash command arguments` | #948 | 修复 Discord 斜杠命令参数被静默忽略的问题，新增下拉选择与描述性名称。 |
| #952 | `fix(web-ui): prevent horizontal overflow in chat messages` | #945 | CSS 修复聊天消息容器水平溢出滚动条。 |
| #953 | `test(e2e): add auto-scroll regression tests` | #946 | 新增 6 个端到端测试，覆盖“聊天不自动滚动”的竞争条件。 |
| #955 | `fix(terminal): prevent spurious "window does not exist"` | — | 修复 tmux 窗口创建时的前端竞态条件导致的假错误。 |

**项目整体向前迈进一步：** 今日共合并 9 个 PR，涉及跨平台通信（Telegram、Discord、Twilio）、UI 体验、沙箱架构、数据持久化、提供商扩展 5 大方向，技术栈覆盖 Rust 核心库、Web UI、测试体系。

---

## 4. 社区热点

### 🔥 最活跃 Issue：`#947` — Telegram 上传文档导致 panic
- **作者：** bashrusakh
- **链接：** [Issue #947](https://github.com/moltis-org/moltis/issues/947)
- **热度：** 1 条评论，24 小时内被修复 (PR #954)
- **背景：** 用户上传文档到论坛/主题聊天时，Molits 因 `teloxide-core` 的 `unimplemented!()` 宏直接崩溃重启。该 Issue 因直接导致服务不可用，受到项目维护者快速响应，当天即通过升级库版本解决。

### 📌 值得关注的 PR：`#942` — 远程沙箱支持
- **作者：** penso
- **链接：** [PR #942](https://github.com/moltis-org/moltis/pull/942)
- **背景：** 该 PR 将沙箱执行能力从本地 Docker 扩展到 Vercel、Daytona、Firecracker 等多云环境，是 Moltis 走向生产化部署的关键基础设施。目前仍处于开放状态，社区期待最终合并。

---

## 5. Bug 与稳定性

| 严重程度 | Issue # | 标题 | 状态 | 是否有 Fix PR | 说明 |
|----------|---------|------|------|---------------|------|
| 🔴 崩溃 | #947 | Telegram send_document panics | 已关闭 | ✅ #954 | 上传文档时程序直接 panic 退出，已修复。 |
| 🟡 功能异常 | #948 | Discord Slash commands missing arguments | 已关闭 | ✅ #950 | 命令参数被静默忽略，/mode 2 等无效。 |
| 🟡 功能异常 | #946 | chat doesn't auto-scroll when at end | 已关闭 | ✅ #953 | 聊天消息不自动滚动，影响使用体验。 |
| 🟢 UI 异常 | #945 | chat layout seems broken -- too wide | 已关闭 | ✅ #952 | 水平溢出滚动条，已修复。 |
| 🟢 错误信息 | #937 | settings/terminal tmux error | 已关闭 | ✅ #955 | tmux 窗口创建时假错误提示。 |

**稳定性评估：** 今日报告的 5 个 Bug 中，4 个为当天修复并合并，1 个在前一天也已关闭。修复效率非常高，反映了项目维护者对稳定性的重视。

---

## 6. 功能请求与路线图信号

| Issue # | 标题 | 类型 | 当前状态 | 可能纳入版本 |
|---------|------|------|----------|-------------|
| #949 | Add provider failover support for sub-agents | Feature | **OPEN** | 下一版本（V0.x） |
| #942 | Remote & multi-backend sandbox support | Feature | PR OPEN | 下一版本 |
| #920 | Phone call support via Twilio | Feature | PR OPEN | 下一版本 |
| #951 | Data import/export for config, databases, sessions | Feature | 已合并 | ✅ 已纳入 |

**信号分析：**
- **子代理故障切换 (#949)**：用户 `Cstewart-HC` 提出 sub-agent 使用固定模型时无故障切换能力，一旦提供商故障整个子代理挂起。这是企业级部署的刚需，预计很快会有 PR 跟进。
- **远程沙箱 (#942)** 和 **电话通道 (#920)** 是 Moltis 向 **AI 平台化** 演进的关键拼图，标志着从本地聊天工具向多云、多通道 AI 助手平台转型。

---

## 7. 用户反馈摘要

- **👍 正面反馈：** 用户 `vvuk` 主动报告两个 UI 相关 Bug，并给出详细描述（布局溢出、自动滚动），说明社区用户正在积极使用并愿意贡献。Bug 修复后 PR 中附有回归测试，体现了维护者对质量的坚持。
- **❓ 使用场景洞察：** `bashrusakh` 反馈的 Telegram 上传崩溃发生在“会话上下文”中，说明用户正在将 Moltis 作为 **Telegram 群聊中的文件共享助手** 使用，而不仅仅是文本对话。
- **💡 需求信号：** `MMMaellon` 报告的 Discord 命令忽略问题，表明用户尝试通过 Moltis 使用 `/model`、`/mode` 等指令来控制 AI 行为，但发现参数不生效。这类反馈指向 **多通道命令一致性** 的优化需求。

---

## 8. 待处理积压

| Issue/PR # | 标题 | 创建时间 | 最后更新 | 状态 | 建议优先级 |
|------------|------|----------|----------|------|-----------|
| #949 | Add provider failover support for sub-agents | 2026-05-01 | 2026-05-01 | OPEN | 🔴 高 — 影响多代理系统可靠性 |
| #942 | feat(sandbox): remote & multi-backend sandbox | 2026-04-30 | 2026-05-01 | OPEN | 🟡 中 — 重要基础设施但无紧急阻断 |
| #920 | feat(telephony): add phone call support via Twilio | 2026-04-29 | 2026-05-01 | OPEN | 🟢 低 — 新功能，非主线需求 |
| #339 | feat(i18n): add zh-TW Traditional Chinese locale | 2026-03-05 | 2026-05-01 | 已合并（今日） | ✅ 已完成 |

**关注点：**
- `#949` 是唯一仍在开放状态且无对应 PR 的 **新 Feature Issue**，作者 `Cstewart-HC` 已在描述中提出完整技术方案（重试/回退/ProviderSelector），建议维护者尽快响应或分配。
- 其余两条开放 PR（#942、#920）均处于等待代码审查或持续迭代中，无明显阻塞。

---

**报告生成时间：** 2026-05-02 06:00 UTC  
**数据来源：** Moltis GitHub 仓库 (github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 CoPaw (github.com/agentscope-ai/CoPaw) GitHub 数据，现生成 2026-05-02 的项目动态日报如下。

---

# CoPaw 项目动态日报 | 2026-05-02

## 1. 今日速览

项目今日活跃度**中等偏高**。过去 24 小时内，社区提交了 7 个新 Issue，主要集中在 **Bug 报告** 和 **功能请求** 两大方向，且均伴有社区讨论，显示出用户正在深度使用并积极反馈。3 个待合并的 Pull Request (PR) 也处于活跃状态，分别涉及 Discord 集成优化、向量模型测试和新增云服务商支持。目前项目无新版本发布，维护团队正聚焦于解决当前积压的社区反馈。整体来看，项目功能迭代与用户增长均处于健康状态，但稳定性相关的 Bug 报告需要优先关注。

## 2. 版本发布

无

## 3. 项目进展

今日无已合并或关闭的 PR。目前有 3 个 PR 处于开放状态，正在等待审查或测试。这些 PR 代表了项目在以下几个方向上的进展：

- **社区集成优化**: PR #3525 为 Cron 任务在 Discord 频道创建独立线程，避免了机器人回复与日常对话混淆，提升用户体验。
- **基础设施增强**: PR #3831 旨在为向量模型连接增加测试功能，有助于提升 RAG（检索增强生成）功能的稳定性和易用性。
- **第三方平台扩展**: PR #3994 新增对火山引擎（Volcengine）及其 Coding Plan 模型的支持，扩大了 CoPaw 可用的语言模型生态系统。

## 4. 社区热点

今日的社区讨论热点集中在对高级功能和扩展性的需求上：

- **[Issue #3993] Add Support for the OpenAI Responses API and Native Tool Calling**: 此问题讨论了如何让 CoPaw 支持 OpenAI 最新的 Responses API，以获得更原生的工具调用能力。这表明用户希望 CoPaw 能紧跟上游 API 更新，保持其作为“全能型前台”的竞争力。
- **[Issue #3997] MCP Client `timeout`问题**: 用户报告 MCP 客户端的超时时间被硬编码为 30 秒且无法修改，这在处理耗时任务时会导致失败。该问题获得了 1 条评论，反映了用户对更精细化配置的需求。

## 5. Bug 与稳定性

今日报告了 3 个与稳定性相关的 Bug，按严重程度排列如下：

- **严重**: **[Issue #3992] 与 Agent 聊天数轮后不会继续执行**
  - **描述**: 用户在与 Agent 交互几轮对话后，Agent 停止响应，不再执行后续动作。
  - **链接**: [Issue #3992](https://github.com/agentscope-ai/QwenPaw/issues/3992)
  - **影响**: 严重影响了核心对话功能的可用性。
  - **状态**: 无关联的修复 PR。**需维护者高度关注**。

- **中等**: **[Issue #3988] Windows 打包与 pip install 冲突**
  - **描述**: 在打包 Windows 版本时，`conda-pack` 与 `pip install qwenpaw[full]` 操作存在兼容性冲突，导致构建失败。
  - **链接**: [Issue #3988](https://github.com/agentscope-ai/QwenPaw/issues/3988)
  - **影响**: 阻碍了 Windows 用户的使用和项目分发。
  - **状态**: 无关联的修复 PR。

- **中等**: **[Issue #3991] Ollama 频道无法携带对话历史**
  - **描述**: 用户在通过 Ollama 使用本地模型时，上下文记忆丢失，每次对话都是全新的请求。而在线 API 则正常。
  - **链接**: [Issue #3991](https://github.com/agentscope-ai/QwenPaw/issues/3991)
  - **影响**: 使用本地模型的用户体验严重受损，降低了 CoPaw 的实用价值。
  - **状态**: 无关联的修复 PR。

## 6. 功能请求与路线图信号

今日收到的功能请求显示社区对 CoPaw 的认知正在从“聊天机器人”向“智能协作系统”转变，主要方向包括：

- **高级思考控制**: **[Issue #3996]** 用户请求支持 DeepSeek V4 模型的 `xhigh`/`max` 思考等级，而非简单的开/关切换。这反映了对复杂推理任务（如编程、分析）有更高需求。
- **记忆系统增强**: **[Issue #3995]** 用户请求对记忆文件增加**生命周期管理**（如自动归档）和**冲突检测**。这表明用户在长期使用中遇到了记忆文件臃肿和内容覆盖的问题。
- **新平台与 API 支持**:
  - **[Issue #3993]**: 支持 OpenAI Responses API，以获得更原生的工具调用能力。
  - **[PR #3994]**: 新增火山引擎提供商支持。此 PR 很可能被合并到下一版本中。
- **配置灵活性**: **[Issue #3997]** 要求 MCP 客户端超时可配置。

## 7. 用户反馈摘要

从今日的 Issue 评论中可以提炼出以下真实用户反馈：

- **核心痛点**: 对话中断（#3992）和本地模型记忆丢失（#3991）是用户最直观的负面体验，直接影响到用户的留存和信任。
- **功能需求**: 用户不满足于基础功能，对**记忆管理**（#3995）、**模型思考深度**（#3996）等高级特性提出了明确改进意见，表明用户群体正在向“高阶玩家”演进。
- **使用场景**: 用户正在将 CoPaw 用于需要持续对话和复杂推理的场景，如编程、文档摘要（Cron job 场景），并基于 Docker（推测）和 Windows 环境部署。
- **满意度**: 用户对 CoPaw 的**功能多样性**（聊天、工具、记忆）表示满意，但对**稳定性**和**配置灵活性**提出了更高的要求。

## 8. 待处理积压

今日无长期未响应的重要 Issue 或 PR。但以下 Issue 因直接影响核心功能，需维护团队优先响应和处理：

- **高优先级**:
  - **[Issue #3992]**: 对话中断问题。
  - **[Issue #3988]**: Windows 打包问题。
  - **[Issue #3991]**: Ollama 记忆丢失问题。

- **中优先级**:
  - **[Issue #3997]**: MCP 超时配置问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 ZeroClaw 开源项目的 AI 分析师，以下是根据 2026-05-02 的数据生成的每日项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-05-02

**项目名称:** ZeroClaw
**数据快照日期:** 2026-05-01 ~ 2026-05-02
**分析师:** AI Agent

## 1. 今日速览

ZeroClaw 项目今日维持了**高活跃度**。Issue 和 PR 更新数量均达到 50 条，显示出社区参与度和维护者的响应效率。虽然无新版本发布，但项目正在推进数个关键的大型功能迭代，如 **Schema v3 配置迁移** 和 **多代理（Multi-agent）UX 流程设计**。值得注意的是，一个关于 **安装脚本未能提取 Web Dashboard 的关键 Bug** 以及 **WASM 插件路径不匹配** 的问题被报告，可能影响新用户的开箱即用体验。总体而言，项目处于紧跟社区反馈、积极重构和推进核心功能的健康轨道上。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭了 7 个 PR，其中一些重要的进展包括：

- **Schema v3 配置迁移推进**: PR #6266 `Feat/v2 to v3` 已被创建，标记为 “Intentionally blank”，这通常意味着维护者正在创建集成分支，准备合并所有 Schema v3 相关的变更，这是项目向 v0.8.0 迈进的关键一步。
- **修复 Skill 元数据静默丢弃问题**: PR #6195 `fix(skills): deny unknown fields on SkillMeta` 已被合并。此修复解决了当用户在 `SKILL.toml` 文件中拼写错误时（如 `descriptin` 而非 `description`），配置会被无警告地静默丢弃的隐患，显著提升了技能开发的健壮性。
- **清理死代码**: PR #6098 合并，清理了 `zeroclaw-runtime` 中 566 行从未被编译的死代码 (`tracker.rs`)，改善了代码库的整洁度。
- **Web 端上手体验 (Onboarding) 初步进展**: PR #6179 `feat(gateway,web,cli): web onboarding parity` 已被合并。此 PR 为 Gateway 增加了用于配置的 CRUD API 端点，为实现完全从浏览器完成首次配置的 “Web Onboarding” 功能奠定了基础。

## 4. 社区热点

今日讨论热度最高的议题反映了社区对 **易用性、权限安全和核心功能** 的关切。

- **Issue #5862 [Bug]: zeroclaw 不知道自己能添加 cron 任务**
  - **链接**: [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)
  - **热度**: 8 条评论
  - **诉求分析**: 用户期望通过自然语言让 ZeroClaw 设置定时任务，但 Agent 回复称自己没有此能力。这暴露了 Agent 对自己拥有的工具 (`cron`) 缺乏自我认知的问题，本质上是工具调用与 Agent 上下文对齐的缺陷，而非单一功能缺失。

- **Issue #4710 [Feature]: 为 Zeroclaw 设计一个更好的 LOGO**
  - **链接**: [Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)
  - **热度**: 8 条评论, 2 👍
  - **诉求分析**: 这是一个轻松的社区讨论，体现了用户对项目形象建设的热情。虽然优先级不高，但反映出用户对项目有一定的情感投入。

- **Issue #5890 [RFC]: 多代理 (Multi-agent) UX 流程设计**
  - **链接**: [Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)
  - **热度**: 7 条评论
  - **诉求分析**: 此 RFC 已完成 7 天的社区讨论期，进入了核心团队投票阶段。这表明多代理架构是社区和开发团队共同关注的核心发展方向，其 UX 设计将直接决定未来功能的易用性。

- **Issue #5722 [Bug]: 默认 sandbox 配置阻碍了所有真实的 Python skill 模式**
  - **链接**: [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)
  - **热度**: 6 条评论
  - **诉求分析**: 此问题由开发复杂金融技能的 `perlowja` 报告，揭示了默认的安全 sandbox 配置过于严格，导致诸如 Pandas 数据处理、Matplotlib 绘图等标准 Python 库完全无法使用。这是 **安全性与功能可用性** 之间矛盾的典型案例，社区急需一个更智能、更精细的权限控制方案。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **S1 - 工作流受阻**:
    - **Issue #6051**: `zeroclaw self-test` 报告使用 `127.0.0.1`，而不管配置中指定的 `0.0.0.0`。这可能误导用户，尤其在使用 Docker 或远程访问时。 **已有 PR #6219** 修复此问题，将在报告中显示已配置的主机地址。
    - **Issue #6096**: 安装脚本 (`install.sh`) 在安装预编译二进制文件时，**未能提取 Web Dashboard 资产**。这会导致新用户无法使用 Web UI。
    - **Issue #6254**: WASM 插件的安装路径 (`~/.zeroclaw/workspace/plugins/`) 与运行时扫描路径 (`~/.zeroclaw/plugins/`) **不匹配**，导致已安装的插件对 Agent 不可见。

- **S2 - 降级行为**:
    - **Issue #6001**: Gateway 聊天成功，但 `/api/cost` 接口始终返回 0，且未生成历史记录文件。 **已有 PR #6159** 旨在修复此成本记录问题。
    - **Issue #6210**: `SkillForge` 的自动集成器生成了不符合 Schema 的字段，导致验证失败，这是一个技能发布流程中的阻塞问题。

- **S3 - 小问题**:
    - **Issue #6073** (已关闭): Web UI 配置文件编辑器中的光标位置与字符输入位置不一致。

**总结**: 今日报告的 Bug 主要集中在 **安装体验**、**运行时配置一致性** 和 **核心监控功能** 上，其中 `install.sh` 的问题对新手用户影响最大。

## 6. 功能请求与路线图信号

- **多代理 (Multi-agent) 功能**: **Issue #5891** 作为功能跟踪器，与 **RFC #5890** 紧密关联。此功能已进入决策阶段，很可能被纳入下一个里程碑版本。
- **Schema v3 配置迁移**: **Issue #5947** 列出了所有需要破坏性变更的字段迁移。随着 **PR #6266** (集成分支) 的创建，这些变更极有可能随 **v0.8.0** 发布。
- **从 `.well-known` URI 安装技能**: **Issue #4853** 提出支持行业标准化的技能发现和安装协议。若被采纳，将极大扩展 ZeroClaw 生态的第三方程.
- **手动触发 Cron 任务**: **Issue #5501** (已关闭) 和 **PR #6164** (已合并) 完成了从 Web UI 手动运行 Cron 任务的功能，这直接回应了社区对于测试 Cron 作业的迫切需求。
- **Configurable LM Studio URL**: **Issue #6260**: 用户请求允许配置 LM Studio 的服务器地址，而不是硬编码为 `localhost`，这对于使用远程或不同端口服务的用户很重要。
- **WhatsApp 推送支持**: **PR #6261** 提议为 Cron 结果增加 WhatsApp 作为新的推送渠道，显示出社区对于多通道集成的持续需求。

## 7. 用户反馈摘要

- **核心诉求: 技能权限细化**。`perlowja` 用户 (报告 #5722) 反复提及技能权限问题，并提出了一个包含细化 `allow_scripts` 和 `allowed_commands` 的详细方案 (**Issue #5775**)。这表明社区的高级用户**不满足于全有或全无的权限模型**，期待一个更精细的、基于技能粒度的安全策略。
- **易用性痛点: Agent 能力盲区**。用户 PeterlitsZo (报告 #5862) 的遭遇表明，普通用户期望 Agent 能“知道”并“主动”使用自己拥有的工具。Agent 需要更好的**元认知和自我工具发现能力**。
- **正面反馈: 核心功能改进受欢迎**。直接从 Web UI 手动触发 Cron 任务的 PR (#6164) 被合并，这说明社区对此类提升 Debug 和测试体验的功能非常欢迎。
- **文档需求: 技能开发指南**。用户 PeterlitsZo 同时提出了对技能文档的强烈需求 (**Issue #5863**)，尤其是如何创建和安装技能的格式说明。这表明随着项目发展，**高质量的开发者文档** 是吸引社区贡献的瓶颈。

## 8. 待处理积压

以下为长期存在或当前状态为“阻塞”的重要 Issue 和 PR，建议维护者优先关注：

- **Issue #5722 (S1, P1, 状态:in-progress)**: 默认 shell sandbox 阻碍 Python 技能。这是一个严重影响功能的 S1 问题，虽标记为进行中，但需加快解决方案。
  - 链接: [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)

- **Issue #5775 (P2, 状态:needs-maintainer-review)**: 按技能划分的安全权限。这是对 #5722 的更深层次解决方案，但当前缺乏维护者审查。
  - 链接: [Issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)

- **Issue #6132 (P1, 状态:blocked)**: 扩大 manifest 提示词审计范围。此安全相关工作被 #5972 的合并阻塞，应在 #5972 合并后立即跟进。
  - 链接: [Issue #6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132)

- **Issue #6001 (P1)**: Gateway 成本记录为零。此问题影响了用户对模型使用成本的可见性，是重要的监控盲区。虽然已有 PR (#6159) 尝试修复，但 PR 本身处于 `needs-author-action` 状态，需要推动。
  - 链接: [Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)

- **Issue #4853 (P2, 状态:in-progress)**: 从 `.well-known` URI 安装技能。该功能跨越了生态构建和开发者体验，虽标记为进行中但近期进展缓慢。
  - 链接: [Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*