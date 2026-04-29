# OpenClaw 生态日报 2026-04-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-29 04:33 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 OpenClaw 项目 2026-04-29 的 GitHub 数据生成的每日项目动态日报。

***

# OpenClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

今日项目整体活跃度极高，堪称“发布后修复日”。虽然无新版本发布，但过去24小时内产生了500条 Issue 和500条 PR 更新，社区参与度爆棚。核心观察如下：**项目正处于一个大规模“问题修复与稳定性加固”周期**，社区主力贡献者（clownfish bot）和第三方开发者正集中修复从 v2026.4.24 版本开始涌现的性能回归、崩溃和多通道（Telegram、Discord、Feishu）交互问题。与此同时，一个关于“Agent身份与信任验证”的提案获得了128条评论的最高热度，预示着社区对安全与去中心化信任的强烈兴趣。整体来看，项目虽面临短期阵痛，但社区修复响应迅速，维护者介入积极，生态健康。

## 2. 版本发布

- **无新版本发布。**

## 3. 项目进展

尽管已有大量待合并PR（478条），但今日仍有一批重要的修复和功能PR正在被推进或已合并/关闭（22条）。以下是今日值得关注的关键进展：

- **多通道稳定性修复**：
    - **Telegram**: 正在推进 `fix(telegram): retry command menu sync on retry_after rate limits` (PR #73947) 以解决速率限制导致的命令菜单同步失败问题。
    - **Discord**: 正在推进 `fix(discord): suppress reconnect-exhausted during stale-socket restart` (PR #73949)，旨在修复Discord通道因旧socket重启导致连接耗尽的问题。
    - **Feishu**: 推进了多个修复，包括 `fix(feishu): supervise WebSocket retry exhaustion` (PR #73940) 以处理WebSocket重试耗尽，以及 `fix(feishu): fallback to media when file download returns 502` (PR #73937) 处理文件下载失败回退。
    - **WhatsApp**: 正在推进 `fix(whatsapp): detect group @mentions when self is in allowFrom` (PR #73936) 以修复群聊中@提及自己的检测逻辑。
- **核心功能修复与优化**：
    - **记忆/插件系统**: 推进了 `fix(memory): thread remote batch HTTP timeout budget` (PR #73938) 和 `fix(mcp): dispose bundled runtimes after one-shot runs` (PR #73919)，分别针对远程嵌入超时和MCP运行环境泄漏问题进行修复。
    - **工程与质量**: 合并了 `fix(gateway): add session transcript redaction guards at bare appendMessage call sites` (PR #73563)，这是一个重要的安全修复，防止敏感信息泄漏到会话转录文件中。

**项目前进方向总结**：社区正处于一个“全面修复”的质量冲刺阶段，重点攻关各渠道的连接稳定性、性能回归和安全性，为下一次稳定版本发布扫清障碍。

## 4. 社区热点

今日讨论最热烈的议题无疑是关于 **“Agent身份与信任验证”** 的RFC（Issue #49971）。

- **议题**: [#49971 RFC: Native Agent Identity & Trust Verification for OpenClaw](https://github.com/openclaw/openclaw/issues/49971)
- **热度**: 128条评论，虽已关闭(CLOSED)，但讨论度极高。
- **背景**：由CryptoKRI GmbH的`MolTrust`提出，这是一个系统级的RFC，提议将去中心化身份（DID）和可验证凭证（VC）标准（如ERC-8004、W3C DID/VC）原生集成到OpenClaw中。
- **诉求分析**：
    1.  **信任框架**: 用户希望项目的Agent交互能超越简单的API密钥验证，建立一个可验证的、基于加密的信任层，让不同Agent、用户和服务之间能相互认证其身份和权限。
    2.  **安全与互操作**: 社区对将Web3/加密领域的身份标准引入AI Agent协议表现出浓厚兴趣，这被视为解决“Agent互联网”中身份盗用、欺诈和建立原生信任的关键一步。
    3.  **长期路线图信号**: 尽管该RFC已标记为关闭，但其高热度表明这是社区对OpenClaw未来方向的一个强烈信号。它预示着项目未来可能演进为一个去中心化、可验证的Agent网络平台。

## 5. Bug 与稳定性

今日报告的Bug主要集中在**性能回归**和**特定通道的交互故障**上，以下是按严重程度排列的关键问题：

- **[BLOCKER] 性能回归**:
    - [#73501 OpenClaw 4.22 to 4.26 significantly slower - regression bug](https://github.com/openclaw/openclaw/issues/73501): **阻塞级别**。用户报告从v4.22升级到v4.26后，响应严重变慢，影响发送反应和回复。目前尚无直接关联的Fix PR，但社区猜测与v4.24版本的一系列变更有关。
- **[HIGH] 应用崩溃/处理挂起**:
    - [#73581 Agent processing lane can stall for minutes without timeout recovery](https://github.com/openclaw/openclaw/issues/73581): Agent处理通道可能挂起数分钟而无法超时恢复，同时存在记忆核心（memory-core）的Cron任务竞争条件。严重影响生产可用性。
- **[HIGH] 回归与配置错误**:
    - [#72434 agent harness "claude-cli" is not registered](https://github.com/openclaw/openclaw/issues/72434): v4.24后，`claude-cli` harness未被注册，导致所有Gateway请求失败。该问题已被关闭（CLOSED），可能已被修复或找到规避方法。
    - [#68735 LLM request failed: provider rejected the request schema](https://github.com/openclaw/openclaw/issues/68735): 升级后，与`github-copilot/gpt-5-mini`模型交互时，首次消息成功，后续失败，疑似与模型请求模式变化有关。
- **[MEDIUM] 功能行为异常**:
    - [#71986 v2026.4.24 is a huge mess! on VPS](https://github.com/openclaw/openclaw/issues/71986): 用户强烈抱怨v4.24版本在VPS上导致混乱，更新到错误文件夹、程序崩溃、WhatsApp与Telegram通道失效。
    - [#72366 Gateway crash-loop on startup when bonjour/mDNS plugin hits "CIAO PROBING CANCELED"](https://github.com/openclaw/openclaw/issues/72366): Gateway在启动时因mDNS插件（Bonjour）问题陷入崩溃循环。
- **[LOW] 其他**:
    - 数个关于`memory-wiki` 桥接模式报告零工件（artifacts）的重复问题，已通过关闭部分重复Issue（Dedupe）来处理。

**总结**: v2026.4.24版本似乎引入了一系列严重的性能和安全问题，社区当前的修复努力也印证了这一点。用户若需稳定环境，建议暂时不要升级至该版本。

## 6. 功能请求与路线图信号

除了热点RFC，社区还提出了以下值得关注的功能请求，其中部分已有关联PR或修复计划：

- **多语言/多Agent TTS/STT配置**: [#66252 Per-Agent TTS/STT Configuration Overrides for Multi-Language Support](https://github.com/openclaw/openclaw/issues/66252)。用户希望为不同Agent配置不同的语音、语言或TTS/STT提供商，以支持多语言环境。这是一个明确的用户痛点，有望被纳入后续版本。
- **会话生命周期增强**:
    - [#45608 Pre-reset agentic memory flush](https://github.com/openclaw/openclaw/issues/45608): 要求在`/new`或`/reset`命令执行前，先进行一次内存刷新，避免上下文丢失。
    - [#45501 `session.resetPrompt` — configurable session startup message](https://github.com/openclaw/openclaw/issues/45501): 希望重置会话时的启动消息可配置，而不是使用硬编码。
- **Gateway生命周期管理**: [#45565 config option to route gateway lifecycle warnings to a dedicated channel](https://github.com/openclaw/openclaw/issues/45565)。用户希望将Gateway的各种生命周期告警（如记忆搜索失败）发送到专门的通道，而非当前活跃的会话，以减少干扰。
- **Mac Talk模式的低延迟之路**: [#71195 feat(talk/macOS): add OpenAI Realtime (speech-to-speech) path for Talk Mode](https://github.com/openclaw/openclaw/issues/71195)。用户希望为macOS的Talk模式添加OpenAI的实时语音通道（speech-to-speech），以实现与电话插件类似的亚秒级低延迟体验。

**路线图信号**: 社区对 **深度上下文管理（Memory、Session、Reset）** 和 **多模态/低延迟交互** 的诉求日益强烈。

## 7. 用户反馈摘要

从今日的Issue评论中可以提炼出以下典型用户声音：

- **“更新就是一场灾难”**: 多位用户（如`jokedul`、`chinazll`）对v2026.4.24版本的稳定性表达了极度失望，认为是“一个巨大的混乱”。这反映出部分用户在追求新功能的同时，对版本升级的稳定性风险非常敏感。
- **“为什么不早说？”**: `HenryLoenwind` 在多个Bug报告中批评v2 UI的可用性，认为其“糟糕”、“无法阅读”。这提醒项目团队，UI/UX的回归问题对普通用户是直接的负面体验。
- **“它静默地失败了”**: 无论是关于`memoryFlush`不触发，还是`memory-wiki`桥接模式报告零工件，用户普遍抱怨错误处理不够透明，问题在静默中发生，让用户难以排查。
- **“我想要更智能的Agent”**: 在RFC #49971和功能请求 #45608中，社区表现出对Agent自主性、记忆管理和身份验证的更高期望，希望Agent能更智能地处理自己的生命周期和信息。

## 8. 待处理积压

以下是一些长期未响应但值得关注的Issues，它们可能反映了项目中被忽视的角落：

- **核心Bug**:
    - [#12590 `memoryFlush` does not fire reliably](https://github.com/openclaw/openclaw/issues/12590): 创建于2月9日，已超3个月未解决。这是关于内存刷新机制不稳定的核心问题，可能导致Agent长期记忆更新失败。**【高优先级】**
    - [#63216 Repeated hard resets on same session key](https://github.com/openclaw/openclaw/issues/63216): 尽管配置了高`reserveTokensFloor`，特定会话仍反复硬重置。这触及上下文管理机制的深层逻辑问题。**【高优先级】**
- **性能积压**:
    - [#45438 `structuredClone` in session store cache causes native memory leak (~1GB/min)](https://github.com/openclaw/openclaw/issues/45438): 一个严重的原生内存泄漏问题，可能导致Gateway RSS内存快速增长。标签为`[stale]`，需要维护者关注和重现。
- **功能请求**:
    - [#45550 feat(anthropic): migrate 1M context from beta to GA](https://github.com/openclaw/openclaw/issues/45550): 跟进Anthropic的1M上下文窗口从Beta到GA的迁移。虽然长期未更新，但这是一个重要的生态兼容性任务。

---

## 横向生态对比

好的，以下是根据您提供的2026-04-29各项目动态数据生成的横向对比分析报告。

---

### AI 智能体与个人助手开源生态横向对比分析报告 (2026-04-29)

#### 1. 生态全景

当前，个人AI助手/自主智能体开源生态正处于**快速迭代与质量巩固并行的关键阶段**。社区活跃度极高，但核心稳定性问题成为普遍痛点，尤其是近期版本更新（如OpenClaw v2026.4.24、Hermes Agent相关版本）引发的性能回归和多通道（Telegram、Discord、飞书）交互故障，让各项目不得不将重心转向“修复与加固”。与此同时，社区对**Agent身份与信任验证（去中心化身份）、原生多模态理解、深度上下文管理和多Agent协作路由**等高级功能的诉求日益强烈，标志着生态正从“可用”向“可信、智能、易用”演进。项目间的差异化竞争已从单纯的模型接入，转向**渠道生态、架构灵活性和企业级特性（安全、隔离、可观测性）**的全面比拼。

#### 2. 各项目活跃度对比

| 项目名称 | 今日Issues更新数 | 今日PR更新数 | 近期版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | 无 | **中等** (修复期，社区热度极高但稳定性问题突出) |
| **NanoBot** | 较高 (具体数未提及) | 38 (提交) | 无 | **中等** (修复回归，合并率偏低) |
| **Hermes Agent** | 100 | 100 | 无 | **高风险** (大量Bug与PR积压，核心稳定性受挑战) |
| **PicoClaw** | 31 | 31 | Nightly | **中等** (快速迭代，DingTalk崩溃问题需紧急关注) |
| **NanoClaw** | 4 | 23 | 无 | **高** (高效合并，渠道适配与安全加固进展显著) |
| **NullClaw** | 1 (Issue) + 1 (PR) | 2 | 无 | **中等** (聚焦关键回归修复，大型功能PR等待合并) |
| **IronClaw** | 30 | 50 | 无 | **高风险** (Reborn重构中，生产环境金丝雀测试失败) |
| **LobsterAI** | 2 | 18 (合并) | 无 | **高** (密集修复，网关与模型兼容性有显著改善) |
| **TinyClaw** | 0 | 0 | 无 | **停滞** (过去24小时无活动) |
| **Moltis** | 24 (总) | 15 (合并) | **v20260428.03** | **中等** (新版本发布，但Telegram Docker问题待解) |
| **CoPaw** | 45 | 32 | **v1.1.5-beta.1** | **高** (活跃迭代，修复与功能请求并重) |
| **ZeptoClaw** | 0 | 15 (Dependabot) | 无 | **低** (仅依赖更新，核心开发停滞) |
| **ZeroClaw** | 39 | 48 (待合并) | 无 | **中等** (功能密集但积压严重，审查效率是瓶颈) |

#### 3. OpenClaw 在生态中的定位

- **核心参照与社区规模**：OpenClaw 是本次分析中**社区参与度最高**的项目（~500条Issue和PR更新），其版本变更（如v2026.4.24）的副作用会同步影响到多个下游项目（如PicoClaw、NanoClaw），生态系统内的风向标作用明显。
- **技术路线差异**：OpenClaw 的架构设计更为复杂，社区讨论深度也更高（如Agent身份与信任验证RFC）。相比之下，下游项目如NanoBot更专注于快速迭代和多渠道适配，而ZeroClaw则在进行激进的微内核架构重构。
- **优势与挑战**：OpenClaw的**社区规模和生态影响力是最大优势**，但这也带来了 **“创新者的窘境”**：版本更新频繁导致稳定性风险高，影响范围广。它承担了探索前沿方向（如去中心化信任）的任务，但也因此面临比专注于特定场景的NanoClaw等项目更多的基础稳定性挑战。

#### 4. 共同关注的技术方向

多个项目不约而同地涌现出以下共同需求：

1.  **多渠道/多Agent的上下文与状态管理**:
    - **涉及项目**: `OpenClaw`, `NanoBot`, `Hermes Agent`, `PicoClaw`, `ZeroClaw`, `LobsterAI`, `CoPaw`, `Moltis`
    - **具体诉求**: 包括会话连续性（切换渠道后上下文不丢失）、多用户记忆隔离（群聊中区分不同用户）、Agent间状态同步（如模型选择）、以及暂停/恢复Agent执行时的状态一致性。

2.  **Docker/容器部署稳定性与兼容性**:
    - **涉及项目**: `NanoClaw`, `Moltis`, `ZeroClaw`, `CoPaw`
    - **具体诉求**: Docker环境下Telegram功能异常（`Moltis`）、容器因root权限崩溃（`NanoClaw`）、容器文件系统安全问题（`NanoClaw`）、以及提供“完整版”全家桶镜像（`ZeroClaw`）。

3.  **MCP (Model Context Protocol) 集成与安全**:
    - **涉及项目**: `OpenClaw`, `NanoBot`, `Hermes Agent`, `PicoClaw`, `LobsterAI`, `CoPaw`
    - **具体诉求**: MCP工具可见性（配置后能看到有哪些工具）、MCP连接稳定性（导致聊天卡死）、MCP命令注入安全漏洞（`LobsterAI`）、以及MCP运行时环境泄漏（`OpenClaw`）。

4.  **Agent身份与信任验证**:
    - **涉及项目**: `OpenClaw` (RFC #49971), `ZeroClaw` (A2A协议 #3566)
    - **具体诉求**: 引入去中心化身份（DID）、可验证凭证（VC）或Agent-to-Agent协议，建立Agent间的互信与安全交互机制。

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 生态核心，前沿探索（DID/VC，Agent信任） | 高级开发者，生态建设者 | 复杂、模块化，社区驱动标准 |
| **NanoBot** | 快速多渠道适配，轻量部署 | 个人用户，中小团队 | 灵活，注重开箱即用的渠道支持 |
| **Hermes Agent** | 高级Agent功能（技能、记忆、Agent间协作） | 技术专家，AI研究者 | **内存/技能/网关架构**，期待稳定化 |
| **NanoClaw** | 企业级安全（沙箱隔离）与容器化部署 | 企业用户，DevOps | **强安全焦点**，容器文件系统隔离是核心特色 |
| **PicoClaw** | 硬件集成，边缘计算（OpenVINO, MQTT） | IoT/嵌入式开发者，爱好本地推理的用户 | 强调本地推理与物联网协议接入 |
| **ZeroClaw** | 多Agent路由，架构革新（Microkernel） | 架构师，追求灵活路由的企业 | **微内核架构**，强调模块化与可扩展性 |
| **LobsterAI** | 中国市场优化，IM生态整合（飞书，企微，微信） | 中国企业用户，使用国内IM的用户 | 深度适配中国国产模型与IM渠道，审批流程集成 |
| **CoPaw** | ACP协议支持，可视化控制面板 | 普通用户与开发者，重视UX | **ACP协议**，控制台与WebUI体验打磨 |

#### 6. 社区热度与成熟度

- **快速迭代阶段 (高活跃，高风险)**: `OpenClaw`, `Hermes Agent`, `CoPaw`, `ZeroClaw`。这些项目社区声音大，新功能和Bug不断涌现，但稳定性波动大，适合喜欢尝鲜的开发者。
- **质量巩固阶段 (密集修复，稳定性优先)**: `NanoBot`, `LobsterAI`, `Moltis`。这些项目正处于集中修复近期版本回归问题的过程中，对生产环境相对友好。
- **专注细分领域 (稳健演进)**: `NanoClaw`, `IronClaw`。前者专注于企业级安全，后者正进行重大重构，两者都展现出了较强的项目控制力，社区参与度高但方向明确。
- **社区增长萌芽/停滞**: `PicoClaw` (增长)，`NullClaw` (待突破)，`ZeptoClaw` (停滞)，`TinyClaw` (停滞)。这些项目社区规模尚小或活动不频繁，其中`PicoClaw`的MQTT通道和`NullClaw`的Cron功能显示出差异化潜力。

#### 7. 值得关注的趋势信号

1.  **“可编程”Agent成为刚需**: 从`CoPaw`的工作流编排和`NanoClaw`的`Create-Agent`技能，到`ZeroClaw`的微内核架构和多Agent路由，社区不再满足于单个助手的对话能力，而是期望AI智能体能够被**编排、组合、自动化**，向“Agent即微服务”演进。
2.  **信任与安全进入系统级设计**: 从`OpenClaw`的DID/VC RFC到`NanoClaw`的容器文件系统沙箱，安全不再是事后修补，而是被前置到架构设计层面，成为决定企业能否上生产的关键因素。
3.  **“中国软件生态”成为独立战场**: `LobsterAI`深度集成飞书、企微、微信、钉钉，`ZeroClaw`明确支持阿里云百炼、QQ（NapCat），这表明满足中国开发者对本土IM和云服务的需求，是一个差异化竞争的重要方向，也是项目获取增量用户的关键。
4.  **可观测性需求觉醒**: `IronClaw`的分布式追踪功能请求（`#233`）和`PicoClaw`的Token消耗统计面板（`#2217`）表明，随着Agent任务变得复杂和关键，社区要求更强的监控、调试和成本管理能力，这是项目走向成熟的重要标志。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据您提供的 NanoBot GitHub 数据，为您生成 2026-04-29 的项目动态日报。

---

## NanoBot 项目动态日报 | 2026-04-29

### 1. 今日速览

今日 NanoBot 项目社区活跃度较高，主要驱动力来自修复近期版本中暴露的回归 Bug。PR 提交量显著（38条），但合并率偏低（约45%），表明核心团队正在审慎吸纳新功能与修复。新功能请求主要集中在多平台通道支持、AI 提供商集成和底层稳定性增强上。三个关键问题（`#2590`, `#1068`, `#877`）同日有更新，反映出社区对 v0.1.4 及后续版本稳定性的持续关注。

### 2. 版本发布

无

### 3. 项目进展

今日合并/关闭的 PR 以及遗留的重要待合并 PR，共同勾勒出项目向更稳定、更智能、更易集成方向发展的图景。

- **稳定性修复（已关闭/合并）**：
  - **飞书 (Feishu) 通道修复** (`#3502`): 修复了在任务未完成时，“DONE”表情错误添加以及“OnIt”表情被提前移除的问题，改善了飞书用户体验。
  - **历史记录写入优化** (`#3508`): 通过原子写入修复历史记录文件 (`history.jsonl`) 可能在进程崩溃时损坏的问题，增强了系统健壮性。
  - **Per-Provider 模型配置** (`#3507`): 新增在提供者级别独立配置 `maxTokens`, `temperature`, `reasoningEffort` 等参数，允许在不同模型间自动切换最合适的设置，显著提升易用性。
  - **Web 搜索提供商扩展** (`#3505`, `#3405`): 合并了 Olostep 作为新的 Web 搜索后端，为用户提供了除 Brave 外的更多选择。

- **重要待合并 PR（趋势信号）**:
  - **新通道支持** (`#3509`): Napcat (QQ) 通道的 PR 正在活跃，支持图片收发及灵活回复策略，有望填补官方 QQ 开放平台的局限性。
  - **新增 AI 提供商集成**：
    - **ZenMux** (`#3503`): 作为 OpenAI 兼容网关的集成。
    - **AgentHiFive** (`#3144`): 作为 MCP 后端进行深度集成，提供审批跟踪和精确回放能力。
  - **音频处理升级** (`#3513`): 对语音转录架构进行重构，统一提供商接口并新增本地 Whisper 模式，旨在解决当前方案存在的静默失败和不可靠问题。

### 4. 社区热点

- **[[enhancement, question] sender_id 传递给 LLM (`#3511`)](https://github.com/HKUDS/nanobot/issues/3511)** (0评论, 今日创建)
  - **诉求**: 用户在 Discord 群组中无法区分消息发送者，导致上下文丢失。这是一个基础但关键的多人协作场景痛点，反映了社区对原生多用户感知能力的需求。
- **[[bug] Telegram 附件被错误识别 (`#3488`)](https://github.com/HKUDS/nanobot/issues/3488)** (1评论, 已关闭)
  - **诉求**: Bot 将 `.html` 文件以 `application/octet-stream` 格式发送，导致无法直接在 Telegram 内预览。这是一个高频交互体验问题，社区关注度高。

### 5. Bug 与稳定性

今日报告的 Bug 主要集中在回归问题及特定平台兼容性上。

- **严重**:
  - **[[bug] Minimax 提供商在 v0.1.4.post6 后失效 (`#2590`)](https://github.com/HKUDS/nanobot/issues/2590)** (5条评论, 进行中): 这是一个典型的回归测试不充分案例。升级后内置的 Minimax 模型完全无法工作，用户尝试手动指定 `apiBase` 也无效。**尚未关联修复 PR**，需核心开发者介入。
  - **[[bug] 本地模型“幻觉” (`#1068`)](https://github.com/HKUDS/nanobot/issues/1068)** (2条评论, 进行中): 用户报告所有本地模型在运行一段时间后都会开始错误地调用工具，怀疑是配置或代码层面的通用问题。**尚未关联修复 PR**，此问题影响所有本地模型用户。
  - **[[bug] v0.1.5.post2 内存激增 (`#3410`)](https://github.com/HKUDS/nanobot/issues/3410)** (已关闭): 报告归因于新“dream”功能，问题已出现但已处理。关注后续版本是否完全解决。

- **中等**:
  - **[[bug] Windows 上 Matrix 通道失效 (`#3506`, `#3510`)](https://github.com/HKUDS/nanobot/pull/3510)**: 由于 `matrix-nio` 存储路径文件名包含冒号 (`:`) 导致 Windows API 调用失败。**已有修复 PR (`#3510`) 在审查**, 进展良好。
  - **[[bug] history.jsonl 被错误加载到上下文 (`#3494`)](https://github.com/HKUDS/nanobot/issues/3494)**: 新版本中，`history.jsonl` 文件被错误地用作上下文，导致 token 消耗异常（287%）。**已关闭**，但未明确说明修复方案，需关注后续是否复发。

- **低**:
  - **[[bug] `restrict_to_workspace` 路径安全检查绕过 (`#3504`)](https://github.com/HKUDS/nanobot/issues/3504)**: 依靠静态分析无法防御环境变量、命令替换等动态路径构建方式。
  - **[[bug] Windows 上集成 Chrome DevTools MCP 失败 (`#3324`)](https://github.com/HKUDS/nanobot/issues/3324)**: `Win32` 应用程序错误，已关闭，推测已解决或为用户环境问题。
  - **[[bug] DeepSeek 反序列化错误 (`#3328`)](https://github.com/HKUDS/nanobot/issues/3328)**: 更新到 v0.1.5.post1 后 Telegram 消息无响应。**已关闭**。

### 6. 功能请求与路线图信号

- **高优先级/大概率纳入**:
  - **多平台通道扩展**: `[enhancement] Napcat (QQ)` (`#3509`), `[enhancement] Xiaomi Models` (`#3518`) 请求及 **PR** 显示社区对覆盖更多终端用户场景的强烈渴望。`#3509` 已是活跃 PR，大概率进入下一版本。
  - **核心功能增强**: `Per-Provider Generation Config` (`#3507`) 已合并；`Per-channel progress controls` (`#3487`) 可让用户按通道独立控制进度显示，这个**功能和 PR** 很成熟。
  - **安全与可靠性**: `Session Cleanup` (`#3516`), `Gateway Lifecycle Hooks` (`#3373`), `Atomic Write for history.jsonl` (`#3508`) 等提议，证明项目正从“能用”向“好用、可靠”过渡。`#3508` 已合并。

- **低概率/需讨论**:
  - **SwarmScore 集成 (`#3512`)**: 这是一个来自外部的可移植信任评分系统提案。虽然概念有趣，但对于当前阶段的 NanoBot 可能不是最紧迫的功能。

### 7. 用户反馈摘要

- **痛点**:
  - **升级之痛**: 用户 `pmchan` 和 `dreo1337` 在升级到 `v0.1.4.post6` 和 `v0.1.5.post1` 后分别遇到了 Minimax 和 DeepSeek 提供商以及 Telegram 通道的严重故障，**回归测试的缺失直接影响了用户信心**。
  - **本地模型不稳定**: 用户 `Claudioappassionato` 遇到的“幻觉”问题和 `kkayachr` 反馈的“太多问题且无力”都指向本地模型体验是当前的短板。
  - **上下文丢失**: 用户 `optingo` 和 `z172581342` 分别反馈了群组中无法识别用户和上下文被意外加载导致的 token 浪费问题，**会话上下文管理的粗粒度**是高频反馈点。
- **满意点**:
  - 尽管有抱怨，但用户 `kkayachr` 明确表达了对项目潜力的肯定（“it has been a lot of fun playing around with it”），体现了社区对项目方向的认可。
  - 贡献者活跃，多个用户（如 `tmdgusya`, `LZDQ`, `masterlyj`）主动提出“想要贡献”并提交了 PR，表明项目和社区有良好的开源协作生态。

### 8. 待处理积压

- **Issue `#877` [Feedback on unreleased version]**: 创建于 2026-02-20，至今仍有更新。用户反馈了关于新版本“太多问题且无力”的深度体验问题，但仅有1条评论，**回应不足**。这可能是用户流失的信号，维护者需主动跟进沟通。
- **PR `#2438` [Handle ImageContent in MCP]**: 创建于 2026-03-24，状态为 OPEN。MCP 的图片内容是核心功能之一，该 PR 对于完善 MCP 工具链至关重要，**已搁置超过一个月**，建议尽快审查合并。
- **PR `#3373` [Gateway lifecycle hooks]**: 讨论和干系人较多但进展缓慢，可能代码质量或设计存疑，建议 **明确 Blocking 因素并安排审查**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Hermes Agent 项目数据，为您生成 2026-04-29 的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-04-29

## 今日速览

今日 Hermes Agent 项目极为活跃，社区参与度极高，共产生 100 条 Issue 和 PR 更新。代码仓库目前已堆积大量待处理的更改，特别是 Pull Request 积压严重，48个PR等待合并。同时，社区反馈了大量关于网关、Agent 核心、以及 CLI 体验的 Bug 和功能请求，这既反映了项目处于快速迭代期，也暗示核心组件稳定性存在挑战。新增的 Issue 中，关于多模态、飞书集成、会话连续性和 DeepSeek API 兼容性的问题讨论最为热烈，是社区关注的核心焦点。

## 版本发布

**无。** 今日无新版本发布。

## 项目进展

尽管无新版本发布，但今日有 **2 个 PR 被合并/关闭**，标志着项目在特定功能上的进展，同时也有大量新提交的 PR 等待审查，预示着未来版本的丰富性。

- **合并/关闭的 PR:**
    - **`#17257`** 的 Issue 因调查原因被关闭，无相关内容。
    - **`#17213 [feat(review)]`**: 一个关于“技能审查”功能的 PR 被关闭。该功能旨在让 AI 更主动地根据用户反馈（如风格、格式、简洁性建议）自我更新其技能库，而非默认“无内容可更新”，提升了个性化适应能力。

- **等待合并的重点 PR 信号 (积压严重):**
    - **大规模 PR 积压:** 共有 **48 个** PR 处于开放待合并状态，这是项目当前的主要效率瓶颈。众多功能、优化和修复无法及时交付给用户。
    - **核心基础设施优化:** `#16660` (ContextVars传播到工具工作线程) 和 `#17238` (TUI浏览器CDP处理) 等PR旨在提升并发安全和界面体验，是短期内可能被优先处理的对象。
    - **插件及集成扩展:** `#12583` (观察性内存提供者)、`#15848` (Obsidian技能集成) 和 `#17258` (持久化桌面VM) 等PR表明项目生态正在快速扩张。

## 社区热点

今日社区讨论的核心议题围绕 **网关(Gateway)** 的稳定性、**飞书(Feishu)** 的高阶集成以及 **DeepSeek API** 的兼容性问题展开。

- **`#7642` [Feature Request: 飞书云文档创建功能]** (评论: 4, 👍: 0)
    - **链接:** [NousResearch/hermes-agent Issue #7642](https://github.com/NousResearch/hermes-agent/issues/7642)
    - **热点分析:** 这是社区对飞书深度集成的强烈呼声。用户不满足于仅将平台作为文件传输通道，而是希望AI能直接在飞书内创建和更新标准化文档，实现工作流的闭环。这反映了“AI代理即生产力工具”的期望愈发强烈。

- **`#7833` [Bug: delegate_task overwrites credential pool]** (评论: 4, 👍: 1)
    - **链接:** [NousResearch/hermes-agent Issue #7833](https://github.com/NousResearch/hermes-agent/issues/7833)
    - **热点分析:** 这是一个较严重的路由问题。当父代理和子代理指向不同的自定义端点时，任务委托机制会因凭据池误配而错误路由。这表明在多代理协作场景下，上下文隔离和分发逻辑存在缺陷，是影响企业级部署稳定性的关键问题。

- **`#16938` [API server loses session continuity]** (评论: 4, 👍: 0)
    - **链接:** [NousResearch/hermes-agent Issue #16938](https://github.com/NousResearch/hermes-agent/issues/16938)
    - **热点分析:** 会话连续性是该项目的核心卖点之一。此Bug指出，在使用OpenAI兼容API时，上下文压缩会导致会话ID轮转，但外部API会话ID未更新，导致客户端无法找回新会话。这直接破坏了长期对话体验，用户参与度高在意料之中。

- **`#17212` [DeepSeek direct API 400 error]** (评论: 3, 👍: 0)
    - **链接:** [NousResearch/hermes-agent Issue #17212](https://github.com/NousResearch/hermes-agent/issues/17212)
    - **热点分析:** 这是关于 DeepSeek API 兼容性的一个已知问题，涉及“reasoning_content”字段的处理。鉴于DeepSeek模型的流行，此Bug对新用户有较大影响，社区急切希望能快速修复。

## Bug 与稳定性

今日报告了多个影响核心功能的问题，各类 Bug 并发，按严重程度排列如下：

- **P1 (严重 - 功能不可用或数据损坏):**
    - `#16938` **[API server loses session continuity]** - 会话连续性破损，为 OpenAPI 调用者带来严重体验降级。已有社区讨论，**暂无修复 PR**。
    - `#17248` **[Empty final response after tool calls]** - 工具调用成功后，CLI无法返回最终回复，导致对话中断。**暂无修复 PR**。
    - `#17063` **[Gateway reconnect watcher permanently stops...]** - 网关重连机制在多次失败后永久停止对连接器的重试，导致平台（如Telegram）永久离线。**暂无修复 PR**。
    - `#7794` **[Cron inactivity timeout fires during active streaming]** - 在Codex流式输出期间，Cron超时机制误触发导致任务中断。**暂无修复 PR**。
    - `#7725` **[session_search can hang for 5+ minutes]** - 会话搜索功能在更新后可能长时间无响应，几乎完全失效。**暂无修复 PR**。

- **P2 (中等 - 影响特定场景或配置):**
    - `#17212` **[DeepSeek direct API 400 "reasoning_content"]** - DeepSeek API 多轮对话后出错。
    - `#15886` **[Long document write stalls]** - 写入长文件容易超时失败。
    - `#17199` **[DeepSeek provider model normalization bug]** - 配置自定义端点（如火山引擎）时，模型名规范化逻辑出错。
    - `#17244` **[MCP Servers amap SSE discovery]** - 高德地图MCP无法连接，因其使用SSE发现机制。
    - `#17138` **[CLI sanitizing GLM_API_KEY]** - CLI启动时错误地修改了 .env 文件中的环境变量。
    - `#16964` **[DingTalk file messages silently dropped]** - 钉钉文件消息被静默丢弃，无任何错误反馈。
    - `#7661` **[Custom endpoints ignore api_mode]** - 自定义辅助端点（Anthropic模式）被错误处理。

- **P3 (较低 - 文档、新功能请求或非关键Bug):**
    - `#7723` **[CLI tool_progress=verbose renders incorrectly]** - 进度显示模式效果异常。
    - `#17254`, `#17193`, `#17215` 等均为新功能请求。

## 功能请求与路线图信号

- **平台与渠道扩展 (强信号):** 社区对飞书（`#7642`）和众多即时通讯渠道（IRC, LINE, Telegram等, `#8950`）的集成需求非常强烈。部分功能已有对应PR（`#11439` 的跨平台模型覆盖），表明项目正在将多平台支持作为演进重点。
- **Agent 核心能力提升:**
    - **原生多模态 (强信号):** `#7641` 提出了绕过`vision_analyze`工具，直接将图片作为原生输入传给多模态模型（如Kimi）的需求。这能大幅提升交互速度和质量，评论中获4个👍，是明显的需求趋势。
    - **多用户记忆隔离 (中等信号):** `#17254` 要求在群组场景下，不同用户的偏好记忆能够相互隔离。这是从单用户助手向多用户协作工具演进的关键一步。
- **辅助功能与易用性:**
    - **会话管理 (中等信号):** `#17193` 指出不同网关（CLI, Telegram等）间缺乏统一的会话管理命令（如 `/sessions`），用户希望有跨平台的单一会话视图和控制能力。
    - **本地/Mac 推理优化 (弱信号):** `#7800` 分享了使用 Rapid-MLX 加速本地推理的提示，反映了社区对本地高性能推理的持续关注。

**路线图推断:** 项目当前的首要任务是 **稳定核心 Agent 与网关**（修复会话、路由、重连Bug），其次是 **扩展平台生态**（特别是飞书和钉钉这类中国市场强需求平台），最后是 **引入高级功能**（如原生多模态、多用户记忆）。

## 用户反馈摘要

- **痛点与不满:**
    - **“升级后反而更糟”:** 多位用户指出更新后出现问题，例如CLI认知框不显示 (`#17201`)，搜索功能挂起 (`#7725`)，以及 `.env` 文件被错误拆分 (`#17138`)。
    - **“静默失败”:** 用户对钉钉文件收不到 (`#16964`)、工具调用后无响应 (`#17248`) 等无反馈的失败方式尤为不满，认为这会严重损害使用信心。
    - **“等待时间过长”:** 长文档写入 (`#15886`) 和会话搜索 (`#7725`) 的长时间响应或超时，是影响日常工作流效率的主要障碍。

- **期望与改进建议:**
    - **“别再绕路了”:** 用户希望多模态模型能直接处理图片 (`#7641`)，绕过中间工具的耗时。
    - **“想要完整的工作流”:** 如飞书用户不再满足于“能把文件发给AI”，而是希望AI直接“在飞书里创建并保存文档” (`#7642`)。
    - **“一个开关让我恢复权限”:** 用户对 `shutdown/reboot` 命令被永久屏蔽表示不方便，希望至少提供一个配置开关 (`#17215`)。

## 待处理积压

- **关键`type/security` Issue:**
    - **`#7726` [Dependency audit: security]** - 3周前报告的安全审计问题，包含高严重性漏洞。至今仍为开放状态，需尽快评估并修复。
        - **链接:** [NousResearch/hermes-agent Issue #7726](https://github.com/NousResearch/hermes-agent/issues/7726)

- **长时间未合并的关键修复 PR:**
    - **`#8362` [fix: prevent OpenViking memory loss during context compression]** - 2周前提交，修复了上下文压缩时关键的记忆丢失Bug。考虑到记忆是 Agent 的核心能力，此 PR 的积压是一个风险点。
        - **链接:** [NousResearch/hermes-agent PR #8362](https://github.com/NousResearch/hermes-agent/pull/8362)
    - **`#16660` [fix(agent): propagate ContextVars to concurrent tool worker threads]** - 2天前提交，修复并发工具执行时上下文丢失的问题，这直接关系到多工具协同场景的稳定性。
        - **链接:** [NousResearch/hermes-agent PR #16660](https://github.com/NousResearch/hermes-agent/pull/16660)

- **长期未响应的求助 Issue:**
    - **`#7671` [Beginner question: what is the simplest recommended way to start?]** - 18天前的新手提问，无人答复。这可能反映出项目的新手引导或社区支持存在缺口。
        - **链接:** [NousResearch/hermes-agent Issue #7671](https://github.com/NousResearch/hermes-agent/issues/7671)

**分析总结:** 项目正处于一个 **高活跃度、高不确定性** 的阶段。大量新功能和修复被提出，但合并效率低下导致积压严重，同时核心稳定性Bug接连出现。对于维护团队而言，当前的首要任务应是 **集中精力处理 P1 Bug 回复并合并关键的修复 PR**，同时优化 PR 审查流程，以重建用户对项目稳定性的信心。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 PicoClaw 2026-04-29 数据生成的项目动态日报。

---

# **PicoClaw 项目动态日报 | 2026-04-29**

## 1. 今日速览

PicoClaw 项目今日活动处于**极高活跃度**状态。过去24小时内共产生31条 Issue 和 PR 更新，社区参与度非常强劲。**两个关键信号值得关注**：一是钉钉 SDK 的严重 panic Bug 被及时报告，二是全新的 MQTT 通道支持 PR 被提交。此外，全新 nightly 版本的自动构建也带来了最新的代码变更。项目整体处于快速迭代与生态扩展期，社区贡献者热情高涨。

## 2. 版本发布

**`nightly`版本已自动构建发布**
- **版本号:** `v0.2.7-nightly.20260429.db1bc6a1`
- **类型:** Nightly Build
- **更新内容:** 此次构建为自动发布，基于 `v0.2.7` 至 `main` 分支之间的所有合并提交。具体变更请查看完整更新日志。
- **破坏性变更:** 此版本为自动化构建，可能存在不稳定因素。官方警告“use with caution”。
- **迁移注意事项:** 建议仅在测试或开发环境使用此版本。

[查看完整更新日志](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

## 3. 项目进展

今日项目向前推进主要体现在以下几个方面：

- **钉钉通道稳定性修复**: PR [#2697](https://github.com/sipeed/picoclaw/pull/2697) 修复了 `serial_windows.go` 中的未使用导入问题，属于对编译质量和代码洁净度的持续改进。
- **Cron 任务去重修复 (已合并)**: PR [#2689](https://github.com/sipeed/picoclaw/pull/2689) 被合并，解决了Cron任务执行时因 `sessionKey` 丢失导致的重复消息发送问题。这对于依赖定时报告的用户非常重要。
- **跨平台序列工具支持 (已合并)**: PR [#2673](https://github.com/sipeed/picoclaw/pull/2673) 被合并，为内置 `serial` 硬件工具添加了 Linux、macOS 和 Windows 的跨平台支持，并已集成进运行时工具注册表，标志着PicoClaw在硬件控制领域迈出了重要一步。
- **MCP 动态Header支持**: PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) 提交通道可向MCP服务器动态传递HTTP Header的能力，增强了MCP协议集成的灵活性和安全性。

## 4. 社区热点

今日社区讨论最活跃的议题集中于**通道（Channel）和应用稳定性**。

- **热点 Issue #2704**: [DingTalk SDK 的 panic 导致 getway 异常停止](https://github.com/sipeed/picoclaw/issues/2704)
  - **分析**: 由钉钉SDK内部竞态条件引发的 `panic` 导致 Gateway 崩溃，是当前最受关注、影响最直接的一个问题。用户 `openapphub` 提供了详细的panic栈和根本原因分析，直指 `dingtalk-stream-sdk-go` 库在连接超时场景下的Bug。此Issue虽刚创建无评论，但因其涉及“崩溃”，应获得最高优先级处理。

- **热点 Issue #629**: [BUG Didn't retry if meet LLM call failed](https://github.com/sipeed/picoclaw/issues/629)
  - **分析**: 这是一个持续数月的旧Issue（11条评论），用户体验反馈非常典型：长时间任务中，若LLM调用偶发HTTP 500错误，任务会挂起而不会重试。这直接影响了长任务的可靠性和可用性，是社区持续关注的痛点。

## 5. Bug 与稳定性

以下为今日报告的Bug，按严重程度排列：

- **严重 - 服务崩溃**:
  - **[BUG] DingTalk SDK 的 panic 导致 getway 异常停止** ([#2704](https://github.com/sipeed/picoclaw/issues/2704)): 由于钉钉SDK内部竞态条件导致Gateway崩溃。 **已报告，尚无Fix PR**。

- **中等 - 功能异常/数据丢失**:
  - **[BUG] Multi-user group channels: conversation history lacks sender attribution** ([#2702](https://github.com/sipeed/picoclaw/issues/2702)): 在多用户群聊中，历史消息缺失发送者信息，导致Agent上下文不完整。 **已报告，尚无Fix PR**。
  - **[BUG] Reasoning Leakage Across Multiple Slack Channels** ([#2699](https://github.com/sipeed/picoclaw/issues/2699)): 多Slack频道模式下，推理输出被发送到错误的频道。 **此BUG已关闭**，可能是上游问题或已确认。
  - **[BUG] Picoclaw send report again everytime after upgrade to 0.2.7** ([#2687](https://github.com/sipeed/picoclaw/issues/2687)): 升级到v0.2.7后，定时报告会重复发送。 **此BUG已关闭**，已在PR [#2689](https://github.com/sipeed/picoclaw/pull/2689) 中修复。
  - **[BUG] gateway start abnormal** ([#2513](https://github.com/sipeed/picoclaw/issues/2513)): Gateway启动异常问题，仍在讨论中，已有7条评论。

## 6. 功能请求与路线图信号

社区对新功能的需求集中在**通道扩展**和**本地推理**上。

- **高可能性（已有PR）**：
  - **[Feature] Add MQTT channel support** ([PR #2705](https://github.com/sipeed/picoclaw/pull/2705)): 这是一个全新的PR，为PicoClaw添加物联网（IoT）核心协议MQTT的支持，将极大扩展其应用场景。 极有可能被合并。
  - **[Feature] Add Intel OpenVINO Model Server support** ([PR #2703](https://github.com/sipeed/picoclaw/pull/2703)): 继之前被关闭的PR后，作者 `JohnLeFeng` 再次提交了支持Intel硬件本地推理的新PR，表明社区对非NVIDIA GPU本地推理方案有强烈需求。

- **中低可能性（持续性讨论）**：
  - **[Feature] Add email as native channel** ([#2421](https://github.com/sipeed/picoclaw/issues/2421)): 用户提出将邮件作为原生通道的请求，覆盖了企业用户等特定场景。目前处于提案讨论阶段，尚无对应PR。
  - **[Feature] Add Mission Control support** ([#2698](https://github.com/sipeed/picoclaw/issues/2698)): 请求集成OpenClaw的Mission Control功能，体现了用户对统一管理界面的需求。
  - **[Feature] Provide a dashboard to show the statistics for token consumption** ([#2217](https://github.com/sipeed/picoclaw/issues/2217)): 用户希望WebUI上增加Token消耗统计面板，从“用户反馈”角度出发，这是一个非常有价值的增强功能。

## 7. 用户反馈摘要

- **用户痛点**:
  - **可靠性问题**: 用户反复报告因LLM调用失败或SDK Panic导致任务中断甚至服务崩溃，稳定性是当前最突出的用户不满之处 (`#629`, `#2704`)。
  - **配置混乱**: Android用户在Web界面配置本地模型后，仍显示“未配置”，无法使用 (`#2368`)，反映出UI和配置后端的同步存在问题。
  - **历史记录丢失**: 用户反映WebUI中对话历史记录丢失问题 (`#2310`)，虽然在讨论中，但解决进度似乎缓慢。
  - **升级问题**: 一次简单的升级导致Cron任务重复执行 (`#2687`)，虽然已快速修复，但反映了版本间兼容性测试的不足。

- **用户诉求**:
  - 用户对**多通道集成**（MQTT, Email, 微信等）有持续且强烈的需求，希望PicoClaw能作为一个通用消息网关。
  - 用户希望获得更强大的**本地推理支持**（如OpenVINO），摆脱对昂贵云服务的依赖。
  - **可观察性**的需求浮出水面，用户希望有Token消耗统计、更好的Dashboard和Mission Control集成，以便进行成本管理和任务调度。

## 8. 待处理积压

- **重要Issue**:
  - [BUG] Didn't retry if meet LLM call failed ([#629](https://github.com/sipeed/picoclaw/issues/629)): **长时间未解决**，直接影响任务可靠性，应优先处理。
  - [BUG] The title of the last screen in the app remains in Chinese ([#2367](https://github.com/sipeed/picoclaw/issues/2367)): **长时间未响应**，虽是小问题但影响用户体验和国际化形象。
  - [Feature] Add email as native channel ([#2421](https://github.com/sipeed/picoclaw/issues/2421)): 具有普遍价值的请求，但尚未得到来自维护者的明确方向性回复。

- **重要PR**:
  - fix: block find / from bypassing workspace sandbox ([#2693](https://github.com/sipeed/picoclaw/pull/2693)): **安全相关PR**，修复了沙箱逃逸漏洞，影响重大，应尽快审查并合并。
  - refactor: standardize channel identification ([#2551](https://github.com/sipeed/picoclaw/pull/2551)): **架构级重构PR**，涉及通道识别和消息路由的核心逻辑，虽然复杂度高，但对项目长期健康至关重要，需要维护者认真评估。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是根据您提供的 NanoClaw 项目 GitHub 数据生成的 2026-04-29 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-04-29

## 1. 今日速览
今日项目活跃度极高，特别是 Pull Request 活动频繁，共有 23 条 PR 更新，其中 12 条已被合并或关闭，显示出核心团队和社区贡献者正在高效推进功能开发和 bug 修复。Issues 方面，新开了 4 个，暂无关闭，但多数问题已有关联的修复 PR 在讨论中。整体来看，项目正处于快速的迭代期，尤其是在渠道适配器（Telegram、Slack、Discord）和容器稳定性方面有显著进展。社区贡献热度非常高，涵盖了安全加固、新功能、文档更新等多个方面。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，标志着多项关键修复和功能推进完成，项目向前迈出了一大步。主要亮点包括：

-   **多渠道与稳定性增强**：
    -   **Telegram 媒体类型处理**：[PR #2008](https://github.com/qwibitai/nanoclaw/pull/2008) 已合并，优化了 Telegram 中图片、视频、音频等文件的路由，使其能通过正确的媒体 API 发送，提供原生预览体验。
    -   **Telegram 反应支持**：[PR #2007](https://github.com/qwibitai/nanoclaw/pull/2007) 已合并，修复了消息反应功能中，因消息 ID 格式问题导致的查找失败。

-   **平台兼容性与安全加固**：
    -   **OpenCode 集成**：一系列关于 OpenCode SDK 集成的 PR 被合并 [PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628)、[PR #1776](https://github.com/qwibitai/nanoclaw/pull/1776) 和 [PR #1864](https://github.com/qwibitai/nanoclaw/pull/1864)，标志着 OpenCode 作为一个稳定的备选 Agent 后端已正式落地，并针对 1.4.17 版本进行了锁定和文档更新。
    -   **容器文件系统安全**：[PR #2001](https://github.com/qwibitai/nanoclaw/pull/2001) 仍在开放，但其核心安全修复逻辑已获得大量关注，旨在防止容器通过控制出站路径，读取或删除宿主机文件，该项目取得了关键性进展。

-   **核心系统可靠性提升**：
    -   **启动断路器**：两个类似的实现[PR #2079](https://github.com/qwibitai/nanoclaw/pull/2079)和[PR #2080](https://github.com/qwibitai/nanoclaw/pull/2080) 均被合并，添加了启动崩溃循环保护机制，避免因快速重启导致 Discord 网关限流或 IP 被封。
    -   **重复消息处理**：[PR #2077](https://github.com/qwibitai/nanoclaw/pull/2077) 已合并，修复了当平台重复投递消息时，会话数据库插入失败的问题，提升了消息处理的健壮性。

## 4. 社区热点
今日最受关注的议题集中在**容器安全**和**系统稳定性**上。

-   **热度最高议题：**
    -   **[Issues #1959](https://github.com/qwibitai/nanoclaw/issues/1959)：Discord 回复消息路由错误**。该 Issue 收到了 1 个 👍，虽然评论不多，但问题本身是用户实际使用中的痛点，即 Agent 的回复消息始终发送到容器初始化的线程中，而非消息来源处。其背后是用户对复杂多线程场景下消息路由准确性的强需求。
    -   **[PR #2001](https://github.com/qwibitai/nanoclaw/pull/2001)：容器文件系统安全加固**。这个 PR 虽然评论数未显示，但其长达 4 天的讨论周期（从 4月25日 创建，至今仍在更新）和涉及“主机文件读/删除”的严重性，使其成为社区和开发者关注的焦点。社区强烈关注项目在生产环境下的基础安全边界。

## 5. Bug 与稳定性
今日报告的 Bug 主要围绕容器运行环境和渠道集成，排列如下：

-   **[严重] 容器启动即崩溃** [Issue #2073](https://github.com/qwibitai/nanoclaw/issues/2073)：当宿主机以 root 用户运行时，Agent 容器会因“试图写入只读数据库”而立即退出。这是一个严重的环境兼容性问题，严重影响以 root 权限运行的生产部署。目前**无直接关联的 Fix PR**。
-   **[中等] iMessage 本地模式发送失败** [Issue #2088](https://github.com/qwibitai/nanoclaw/issues/2088)：在 macOS Tahoe 系统上，iMessage 本地模式下的出站消息会静默失败。原因是 launchd 管理的 Node 进程无法获取自动化权限。问题清晰，影响特定 macOS 用户。**暂无关联 fix PR**。
-   **[中等] Discord 回复路由** [Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959)：如前所述，该 Bug 影响用户体验，但已有明确的问题描述和复现路径。**暂无关联 fix PR**。

## 6. 功能请求与路线图信号
今日用户提出的新功能请求，结合已有 PR，显示出以下路线图信号：

-   **Agent 预配置与解耦** [Issue #2085](https://github.com/qwibitai/nanoclaw/issues/2085)：用户 `kky` 提出了创建 `create-agent` 技能，用于在不立即连接聊天渠道的情况下预配置 Agent 组的需求。这反映了社区对**自动化运维和更灵活的工作流编排**的向往，是走向企业级部署的重要一步。目前**无直接关联的 fix PR**，但该功能需求明确，很可能被纳入后续开发计划。
-   **数据备份与恢复** [PR #2084](https://github.com/qwibitai/nanoclaw/pull/2084)：`ddaniels` 提交的每日备份及全量/单 Agent 恢复功能 PR，虽然尚未合并，但其“灾难恢复”的定位表明社区已开始关注项目的**生产可用性和数据安全**。这很可能作为下一个版本的重要功能推出。

## 7. 用户反馈摘要
从今日的 Issue 和评论中，我们可以提炼出以下用户反馈：

-   **痛点**：
    -   **环境兼容性**：root 用户运行导致的容器崩溃（Issue #2073）和特定 macOS 版本的 iMessage 失效（Issue #2088），反映出项目在不同操作系统和用户权限模式下的兼容性测试存在短板。
    -   **消息路由困惑**：Discord 消息回复路由逻辑的非直观行为（Issue #1959），影响了用户在多线程/多频道场景下的使用体验。
-   **使用场景**：
    -   **自动化运维**：用户通过 `kky` 的请求，希望批量创建和配置 Agent，以支持“每人一个个人助手”的规模化部署场景。
    -   **生产部署**：用户通过提交备份恢复 PR（PR #2084）和对容器安全的关注（PR #2001），表明项目已被尝试用于生产环境，并期望获得企业级的功能保障。

## 8. 待处理积压
以下议题等待维护者或社区进一步响应，可能需要特别关注：

-   **长期未响应的重大功能 PR**：
    -   **[PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)：Matrix E2EE 频道**。该 PR 创建于4月4日，至今已开放25天，未合并也未关闭。它提供了对 Matrix 端到端加密频道的完整支持，是新渠道集成的重大功能，长时间未处理可能抑制了相关社区贡献的积极性。

-   **可能被忽略的关键 Bug**：
    -   **[Issue #2073](https://github.com/qwibitai/nanoclaw/issues/2073)：容器因 root 权限崩溃**。这是阻碍生产部署的严重 Bug，今日报告后尚未有开发者或维护者回复，也未见相关修复 PR，应优先响应。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将为您呈现基于 NullClaw 项目在 2026-04-29 的 GitHub 数据生成的动态日报。

---

## NullClaw 项目动态日报 | 2026-04-29

### 1. 今日速览

今日项目活跃度处于**中高水平**，主要由一个**高严重性回归问题的紧急修复**所驱动。社区提交了一个重要的安全策略文档补充需求，同时一个为期三周的大型功能 PR 仍在等待合并。整体来看，项目在积极修复关键 Bug、推进大型功能的同时，文档完善的需求也开始浮现，社区健康度良好。

### 2. 版本发布 (省略)

今日无新版本发布。

### 3. 项目进展

今日项目在稳定性方面取得了关键进展：

- **修复：解决 Zig 0.16 迁移引发的高严重性回归问题 (PR #872, #873)**
  - **状态：** PR #872 已合并/关闭。PR #873 (相同内容) 仍处于开放状态。
  - **内容：** 贡献者 `vernonstinebaker` 提交了针对 Zig 0.16 迁移后两个生产环境问题的修复：
    1.  **100% CPU 占用**：修复了网关线程在处理 EAGAIN 错误时的忙等待（busy-spin）问题。
    2.  **Mattermost 消息发送失败**：修复了向 Mattermost 发送空 body 的 POST 请求导致的通信静默失败。
  - **意义：** 此修复直接解决了影响所有 Mattermost 连接代理的稳定性与资源消耗问题，对生产环境的平稳运行至关重要。PR #872 的关闭标志着该补丁已被项目团队接受。

- **等待合并：大型 Cron 子代理功能 (PR #783)**
  - **状态：** 开放。
  - **内容：** 贡献者 `yanggf8` 提出的 `feat(cron)` 大 PR 在过去24小时被更新，但尚未合并。该 PR 引入了完整的定时任务子系统，包括数据库驱动的调度引擎、JSON 输出支持、多种任务类型（脚本、技能、代理）以及操作告警。
  - **进展：** 该 PR 从4月7日创建至今已近三周，仍在活跃更新中，说明项目维护者正在进行深入评审或要求修改，这是一个雄心勃勃且重要的功能扩展。

### 4. 社区热点

- **热点 PR：** `#873 [OPEN] fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin`
  - **链接：** [nullclaw/nullclaw PR #873](https://github.com/nullclaw/nullclaw/pull/873)
  - **热度分析：** 虽然无直接评论数，但其“高严重性回归”的描述和直接影响生产环境的性质使其成为社区最关注的 PR。用户和运维人员迫切期待此问题的最终解决方案，PR #872 的关闭可能与此 PR 内容相同，但也可能意味着社区在跟踪问题上存在分歧。

### 5. Bug 与稳定性

- **严重：Zig 0.16 迁移导致 Mattermost 连接代理故障**
  - **问题：** 100% CPU 占用 & Mattermost 消息静默发送失败。
  - **影响：** 所有连接到 Mattermost 的代理在守护模式下运行会受到严重影响。
  - **相关 PR：** 修复 PR `#872` (已关闭) 和 `#873` (开放，内容相同)。
  - **当前状态：** 已被修复（PR #872），但需要社区确认最新代码是否包含此修复。

- **较轻：文档缺失**
  - **问题：** Issue #874 指出，安全策略中的 `default_allowed_commands` 配置项缺乏文档。
  - **影响：** 用户无法了解如何正确配置允许的命令白名单，可能导致配置错误或安全隐患。
  - **相关 Issue：** `#874 [OPEN]` [issue链接](https://github.com/nullclaw/nullclaw/issues/874)
  - **当前状态：** 尚未有相关的 PR 提出。

### 6. 功能请求与路线图信号

- **新功能信号：Cron 定时任务子系统 (PR #783)**
  - **分析：** 这是目前最明显的功能扩展信号。它表明社区（或核心开发者）希望将 NullClaw 从一个纯“即时响应”的 AI 助手，扩展为一个具备“定时自主执行”能力的平台。这可以用于定时报告、周期性的数据清理、自动化运维任务等场景。尽管等待时间较长，但此 PR 被合并的可能性极高，将构成项目路线图上的重要里程碑。

- **新功能信号：文档完善 (Issue #874)**
  - **分析：** 虽然是个较小的请求，但它反映了用户在使用更复杂的安全功能。随着项目功能的增多，文档的及时性变得至关重要。这可能是用户开始深度使用和自定义项目的信号。

### 7. 用户反馈摘要

- **用户痛点：** 主要为Zig 0.16迁移带来的兼容性问题，表现为代理进程CPU飙升到100%（对服务器资源紧张的用户是灾难性的）以及Mattermost集成失效。
- **使用场景：** 从`default_allowed_commands`文档的缺失可以推测，用户正在尝试配置更精细的安全策略，用于将NullClaw部署在多用户或生产环境中，这体现了项目在向更成熟、更企业级的方向演进。

### 8. 待处理积压

- **长期待合并的 PR：** `[OPEN] feat(cron): cron subagent, run history, JSON output, security hardening (PR #783)`
  - **链接：** [nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783)
  - **作者：** `yanggf8`
  - **等待时间：** 从2026-04-07创建至今已超过21天。
  - **提醒：** 这是当前项目最大的一个功能 PR，长时间未合并可能导致贡献者积极性受挫。建议维护者评审是否因代码结构、测试覆盖或与现有功能冲突等原因而延迟，并给出明确的反馈或计划合并的时间点，以维持社区的健康协作氛围。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 IronClaw 项目数据，生成以下 2026-04-29 的项目动态日报。

---

## IronClaw 项目动态日报 | 2026-04-29

### 1. 今日速览

在过去24小时内，IronClaw 项目展现出极高的活跃度，核心团队正全力推进代号为 **“Reborn” 的重大架构重构**。尽管无新版本发布，但多达 **50 条 PR** 的更新活动（其中 43 条已合并/关闭）与 **30 条 Issue** 的讨论，其中绝大多数为与 Reborn 重构直接关联的规划与技术债务条目，表明项目正处于关键的重构攻坚阶段。当前项目健康度呈 **高风险、高活跃、高专注** 状态，社区贡献与核心开发节奏均保持在高位，但一连串的 **Live canary 测试失败** 提醒我们稳定性存在压力。

### 2. 版本发布

**无新版本发布。** 项目自上一个版本后未发布新 Release。

### 3. 项目进展 (重要 PR 合并/关闭)

项目在过去24小时内推进了大量工作，核心 PR 活动集中在 **自动化的 staging 代码提升** 与 **一次关键发布流程修复** 上。

-   **自动化持续集成与部署 (CI/CD):** 项目自动化机器人 `ironclaw-ci[bot]` 在一周内高频地将 staging 分支的变更合并至 `main` 及多个 `staging-promote` 分支（如 `#2785`, `#2782`, `#2821`, `#2888` 等）。这表明项目拥有成熟的持续集成管道，能够快速将最新特性推送至预览环境。
-   **发布流程修复：** PR `#3058` **已合并**。该 PR 修复了一个导致 `release-plz`（自动化发布工具）失败的问题。核心开发者 `henrypark133` 移除了不应被追踪的 `.log` 文件，并明确了日志文件是本地生成的诊断工具，而非版本控制的一部分。这对于维护未来发布的顺畅性至关重要。
-   **重构规划封闭：** 虽然大部分 PR 是自动化提升，但 `serrrfirat` 团队提交并关闭了与 **Reborn 架构落地规划** (Issue `#2987`) 相关的数十个“阻塞项”（如 `#3013`, `#3019`, `#3020`, `#3026`, `#3029` 等）。这标志着 Reborn 重构已经完成了前期的方案设计和解耦规划阶段，即将进入 **代码实现与集成** 的实质阶段。

### 4. 社区热点

-   **最热 Issue: [#2987] [EPIC] Track Reborn architecture landing strategy and grouped PR plan**
    -   **链接:** [Issue #2987](https://github.com/nearai/ironclaw/issues/2987)
    -   **分析:** 该 Issue 是过去24小时讨论的绝对焦点，拥有 **23 条评论**。它本身不是一个技术问题，而是一个 **架构落地的战略规划**。作者 `serrrfirat` 为 Reborn 这个大型重构定义了一个分组的 PR 合并计划（PR Plan），旨在避免出现一个巨大的、难以审查的单一 PR。这反映了项目对 **渐进式、可审查的重构策略** 的审慎态度，也是社区和核心开发者协作对齐的主要场所。
-   **新功能讨论: [#233] feat: propagate W3C traceparent headers for distributed tracing**
    -   **链接:** [Issue #233](https://github.com/nearai/ironclaw/issues/233)
    -   **分析:** 一个自2月底就长期开放的 **分布式追踪** 功能请求，在今天（4/29）被更新。虽然评论不多，但它是目前最古老且仍处于开放状态的功能请求之一。其核心诉求是为 IronClaw 引入 W3C 标准的 `traceparent` 头，以便在网关、代理循环、工作节点、工具执行等组件间关联操作日志，解决复杂的分布式调用场景下的调试难题。这反映出社区对 **可观测性** 有着持续且深远的需求。

### 5. Bug 与稳定性

今日报告的 Bug 和稳定性问题较为集中，需引起重点关注，特别是生产环境故障。

-   **严重 - 生产环境故障:**
    -   **`#3052` (Live canary failed: private-oauth)**: **最新** 今日 (4/29) 出现的 `private-oauth` 金丝雀测试失败。
    -   **`#3038` / `#3037` / `#3030`**: **多次**出现的 `public-smoke` 和 `private-oauth` 金丝雀测试失败。所有失败均关联到同一 commit (`7194808f`)。
    -   **链接:** [Issue #3052](https://github.com/nearai/ironclaw/issues/3052), [#3038](https://github.com/nearai/ironclaw/issues/3038), [#3037](https://github.com/nearai/ironclaw/issues/3037), [#3030](https://github.com/nearai/ironclaw/issues/3030)
    -   **分析:** 这是一个 **高优先级警报**。`private-oauth` 和 `public-smoke` 金丝雀持续失败，表明自 commit `7194808f` 后引入的变更破坏了 OAuth 流程或核心功能。目前无对应的 Fix PR 被关联，需要立刻排查。

-   **中优先级 - 功能性 Bug:**
    -   **`#3035` Agent ignores configured display name:** 用户配置的 Agent 显示名称被忽略，Agent 总是使用默认的“IronClaw”身份。这影响了用户体验的个性化。
        -   **链接:** [Issue #3035](https://github.com/nearai/ironclaw/issues/3035)
    -   **`#3034` V2 engine: HTTP tool disabled by default:** V2 引擎下，HTTP 工具默认被禁用，且用户无引导入口去启用。这阻碍了代理与外部 API 交互的核心能力。
        -   **链接:** [Issue #3034](https://github.com/nearai/ironclaw/issues/3034)
    -   **`#3011` tracing fmt layer never writes to stderr:** `ironclaw run` 命令即使设置了 `RUST_LOG=trace` 也无法在标准错误流产生任何日志输出。调试信息必须通过 `ironclaw logs` 命令查看，此异常行为严重影响本地开发调试。
        -   **链接:** [Issue #3011](https://github.com/nearai/ironclaw/issues/3011)

-   **低优先级 - 其他 Bug:**
    -   **`#3010` Generated images are not available as editable context:** 生成的图片在后续对话轮次中无法作为上下文供模型使用，切断了“生成-修改”的循环。
        -   **链接:** [Issue #3010](https://github.com/nearai/ironclaw/issues/3010)
    -   **`#2949` Download error for x86_64-unknown-linux-gnu:** 用户报告通过官方脚本安装 IronClaw 时，提示其平台（x86_64 Linux）没有可用的下载包。
        -   **链接:** [Issue #2949](https://github.com/nearai/ironclaw/issues/2949)

### 6. 功能请求与路线图信号

新提出的功能请求与 Reborn 架构高度绑定，并指向了未来产品化方向。

-   **`#3045` [Reborn] Add runtime presets:** 提议为 Reborn 引入“运行时预设”，如 `full-isolation` 或 `low-latency`。这旨在简化操作员和用户对不同安全/性能模式的配置，避免手动处理繁琐的低层级权限和策略。
    -   **链接:** [Issue #3045](https://github.com/nearai/ironclaw/issues/3045)
-   **`#3044` [Reborn] Add local developer runtime profiles:** 类似上述预设，但专门为本地开发者提供“本地编码代理”模式，让开发者无需手动配置就能快速启动和运行。
    -   **链接:** [Issue #3044](https://github.com/nearai/ironclaw/issues/3044)
-   **`#3036` [EPIC] Configuration-as-Code for Tenants:** 提出为铁爪引入“配置即代码”体系，允许用户通过声明式蓝图定义整个租户的配置，实现配置的版本化、差异化和审计。这标志着项目在 **企业级部署** 道路上迈出重要一步。
    -   **链接:** [Issue #3036](https://github.com/nearai/ironclaw/issues/3036)

**路线图信号：** 上述三个 Issue 均为 `serrrfirat` 或 `ilblackdragon`（核心架构师）提出，标签均为 `[reborn]`。这表明 Reborn 架构不仅仅是一轮内部重构，其目标还包含了 **显著改善开发者体验（`#3044`）** 和 **提升面向运维的生产化能力（`#3045`, `#3036`）**。这些功能很可能被纳入 **Reborn 推出后的下一个大型版本**。

### 7. 用户反馈摘要

从 Issue 评论中可提炼出用户对 IronClaw 的几点关注：

-   **核心诉求：可靠性与升级兼容性。** 用户 `sunglow666` 报告了在升级到 0.26.0 后遭遇的 **数据迁移错误**（`#2982`，已关闭），导致“常规任务”被错误归类为“任务”。这暴露了升级路径上的潜在风险。用户强调“新聊天工作正常，但现有数据出错”的场景，显示对数据完整性的高要求。
-   **使用场景：复杂交互与数据上下文。** 用户反馈了解一个关键的 **工作流断裂问题**：生成的图片无法在后续对话中作为上下文使用（`#3010`）。这表明用户期望 IronClaw 不仅仅能执行单次任务，更希望它能支持多轮、有上下文依赖的复杂创作流程。
-   **改进建议：工具可用性与引导。** 用户 `joe-rlo` 在 Bug Bash（`#3034`）中发现 V2 引擎默认禁用了 HTTP 工具且无引导，这被视为严重的体验缺陷。社区期望核心功能（如访问网络API）应有更好的开箱即用性和明确的启用引导。

### 8. 待处理积压

以下问题长期存在且对用户体验或项目可靠性有直接影响，应给予关注：

-   **`#233` [feat] Propagate W3C traceparent headers for distributed tracing：** 该功能请求已提出超2个月（2月19日创建），且社区有明确需求（在 Issue 中描述详细），但至今未进入开发阶段。分布式追踪对于定位复杂服务间的问题是不可或缺的，其持续积压可能成为未来系统复杂化后的一个技术债。
    -   **链接:** [Issue #233](https://github.com/nearai/ironclaw/issues/233)
-   **`#2949` ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu：** 这是一个关于 **安装** 的故障反馈，用户报告了超过 **5天** 仍未得到官方回应。安装是用户接触项目的首要节点，安装失败会直接驱离潜在用户，应给予更高的优先级。
    -   **链接:** [Issue #2949](https://github.com/nearai/ironclaw/issues/2949)
-   **`#2833` Issue: Cross-Conversation Response Contamination：** 一个已被关闭的 Bug，但问题本身（在多对话窗口间切换时出现响应污染）对多任务用户而言破坏性极强。虽然已经修复，但其 **关闭修复的回溯** 对于评估 v0.26.0 版本的质量至关重要，建议开发者在发布说明中重点提及此修复。
    -   **链接:** [Issue #2833](https://github.com/nearai/ironclaw/issues/2833)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的LobsterAI项目数据，为您生成2026年4月29日的项目动态日报。

---

# LobsterAI 项目日报 | 2026-04-29

## 今日速览

今日LobsterAI项目活跃度极高，共合并/关闭了18个Pull Request，显示出团队正在集中精力进行问题修复和功能优化。同时，有2个新的Issue被提出，主要聚焦于模型兼容性和附件同步问题。值得关注的是，一批针对网关稳定性、模型切换体验以及安全防护的修复已成功落地，但仍有2个涉及安全漏洞的PR（`#908`、`#909`）处于待处理状态，需持续关注。项目整体处于快速迭代和问题修复的活跃期。

## 版本发布
无

## 项目进展

今日项目进展显著，大量关键修复已被合并，项目整体稳定性和用户体验得到显著提升。以下是部分重要的已合并/关闭PR：

- **核心稳定性修复**：
    - `#1872` [已关闭] 修复了因套餐模型列表更新导致gateway强制重启的问题。
    - `#1870` [已关闭] 修复了`qwen 3.6 plus`模型回答后触发gateway重启的问题。
    - `#1867` [已关闭] 修复了`qwen3.6 plus`模型偶现不支持图像输入的问题。
    - `#1869` [已关闭] 修复了因gateway无限重试失败LLM请求导致的会话死锁问题，现在错误回滚时会主动终止gateway，释放会话。
- **模型选择与兼容性**：
    - `#1865` [已关闭] 修复了`Header ModelSelector`在多Agent环境下，模型选择器状态不同步的问题，现在每个Agent可以独立选择模型。
    - `#1862` [已关闭] 新增了对小米`mimo`模型的`coding plan`支持。
    - `#1859` [已关闭] 新增了对百度千帆模型的`coding plan`支持。
- **IM通道与UI体验**：
    - `#1868` [已关闭] 修复了微信渠道图片显示过大且无预览的问题，增加了点击预览功能。
    - `#1866` [已关闭] 修复了飞书接收文件时中文文件名乱码的问题。
    - `#1856` [已关闭] 优化了桌面客户端中IM消息的显示，过滤了钉钉、飞书等渠道的元数据，使消息展示更清晰。
    - `#1855`/`#1854` [已关闭] 修复了模型名称过长时导致头部UI溢出的问题。
- **技能与安全性**：
    - `#1864` [已关闭] 升级了有道云笔记技能。

## 社区热点

今日社区讨论的热点与**模型切换和多Agent模型状态同步**相关。

- **Issue #1861**: [图片附件不随模型切换重新处理（supportsImage 状态不同步）](netease-youdao/LobsterAI Issue #1861)
    - **背景与诉求**：用户`btc69m979y-dotcom`报告了一个影响核心使用流程的bug。当用户添加图片附件后切换模型，尤其是从非视觉模型切换到视觉模型（反之亦然）时，附件的数据格式（`base64` vs 文件路径）无法自动更新，导致新模型无法正确识别图片内容或提交时携带错误数据。
    - **分析**：此问题直击了“多模型切换”场景下的一个关键数据流同步问题。视觉模型需要`base64`数据，而非视觉模型则可能依赖文件路径。当前的状态管理未能根据模型能力（`supportsImage`）动态调整附件格式，严重影响了用户在聊天中自由切换模型的体验。此问题已引发社区关注，并且PR `#1860`和`#1865`的合并在一定程度上解决了相关根因，但Issue报告的场景更为复杂，可能需要进一步的跟进。

- **Issue #1813**: [DeepSeek V4 无法使用 LLM request failed: provider rejected the request schema or tool payload.](netease-youdao/LobsterAI Issue #1813)
    - **背景与诉求**：用户`Sun-Ke`报告接入DeepSeek V4模型时失败，并被Provider拒绝请求。有6条评论，说明可能有一定范围的用户受此影响。
    - **分析**：这指向了与第三方LLM提供商（DeepSeek）的兼容性问题。可能的原因是DeepSeek V4更新了其API schema或工具调用格式，导致旧的请求格式被拒绝。这需要项目维护者对照DeepSeek V4的最新API文档进行适配和修复。

## Bug 与稳定性

根据今日数据，Bug修复是绝对主线。以下按严重程度列出已报告的关键问题：

1.  **严重：Gateway 稳定性问题**
    - **表现**：多个PR（`#1872`, `#1870`, `#1869`）集中修复了因模型更新、模型回答、或LLM请求失败导致的gateway意外重启或会话死锁问题。
    - **状态**：已修复并合并。这解决了影响用户使用流畅性的核心稳定性问题。

2.  **中高：模型切换与附件数据不同步**
    - **Issue #1861**：视觉/非视觉模型切换时，附件数据格式不会同步更新。
    - **状态**：问题已报告，尚无直接修复PR，但相关的模型选择器状态不同步问题（`#1865`）已被修复。这可能是该Issue的根因之一，需观察修复效果。链接：[Issue #1861](netease-youdao/LobsterAI Issue #1861)

3.  **中高：模型兼容性问题**
    - **Issue #1813**：DeepSeek V4模型完全不可用，原因是请求被防火墙拒绝。
    - **状态**：已报告一周，仍为`OPEN`状态，尚未有修复PR。这可能影响大量使用DeepSeek V4的用户。链接：[Issue #1813](netease-youdao/LobsterAI Issue #1813)

4.  **中低：IM通道与UI问题**
    - **表现**：微信图片过大、飞书文件名乱码、IM元数据干扰显示、模型名溢出UI。
    - **状态**：均已通过PR `#1868`, `#1866`, `#1856`, `#1855`修复。

## 功能请求与路线图信号

今日暂无直接的新功能请求提出。但从已合并的PR可以窥见接下来的发展方向：

- **更广泛的模型兼容性**：新增对小米`mimo`和百度千帆模型的`coding plan`支持，表明项目正在积极适配更多主流和国产模型，以扩大用户选择范围。
- **更精细的模型管理**：`#1865` PR中引入的 per-agent 模型选择状态管理，未来可能衍生出更丰富的模型配置功能，如为不同Agent或对话设置不同的默认模型。

## 用户反馈摘要

从今日的Issue和PR中，可以提炼出以下用户痛点：

- **模型切换不连贯**：用户期望在切换模型时，整个对话上下文（包括已上传的附件）能够无缝衔接。当前附件格式不同步的问题严重割裂了跨模型的使用体验。
- **新模型接入不顺畅**：用户遇到DeepSeek V4直接无法使用的问题，激活门槛较高。这反映出项目在对齐最新第三方模型API方面存在延迟。
- **多Agent管理复杂**：用户在多个Agent间切换时，模型选择器状态不一致，需要额外操作来确认当前使用的模型，增加了认知负担。
- **IM渠道集成体验待打磨**：虽然不断修复，但在不同IM渠道（如微信、飞书、钉钉）的图片展示、文件名编码等细节上仍有不一致之处，影响了企业IM集成的专业度。

## 待处理积压

以下是一个值得开发者关注的长期未处理的安全相关PR，其重要性不因时间而降低：

- **PR #908** `[stale] fix(mcp): validate stdio command to prevent command injection` （创建于2026-03-26）
    - **摘要**：此PR旨在修复MCP Server中`stdio command`字段未经验证导致的命令注入安全漏洞。
    - **分析**：该PR已经提交超过一个月，且关联安全问题。虽然是安全修复，但可能需要更深入的代码审查和测试。建议项目维护者优先评估并处理此PR，以防范潜在的安全风险。链接：[PR #908](netease-youdao/LobsterAI PR #908)
- **PR #909** `[stale] fix(security): require user confirmation when skill security scan fails` （创建于2026-03-26）
    - **摘要**：此PR旨在修复当技能安全扫描失败时，会绕过用户确认直接安装恶意技能的漏洞。
    - **分析**：同样是一个关键的安全修复，与上述PR #908相关。它的处理优先级也应提高。链接：[PR #909](netease-youdao/LobsterAI PR #909)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，以下是 Moltis 项目 2026-04-29 的动态日报。

---

## Moltis 项目动态日报 | 2026-04-29

### 1. 今日速览

项目今日活跃度极高，共处理了 **24 项**（Issues + PRs）更新。核心亮点是发布了新版本 **`v20260428.03`**，并合并了大量关于**新功能导入、用户界面增强、以及系统稳定性**的 PR。社区反馈集中在**新版 Docker 中 Telegram 功能异常**的问题，同时也有对新功能（如子代理配置、9router 支持）的热切期待。总体来看，项目正处在快速迭代新功能与修复回归 Bug 并行的繁忙阶段。

### 2. 版本发布

- **新版本: `v20260428.03`**
  - **链接**: [moltis-org/moltis/releases/tag/20260428.03](https://github.com/moltis-org/moltis/releases/tag/20260428.03)
  - **概述**: 此版本主要集成了过去24小时内合并的大量功能性 PR，包括全新的外部工具数据导入功能、语音角色系统、代码索引自动化等。这是对 `v2026.04.26` 版本的一个重大功能更新。
  - **主要更新内容**:
    - **外部数据导入**: 新增从 Claude Code、Claude Desktop、Hermes 等外部 AI 工具导入会话和技能的能力。
    - **语音角色 (Voice Personas)**: 引入了可配置的语音角色，为 TTS 提供确定性的、个性化的语音输出。
    - **自动代码索引**: 实现了代码索引的自动触发，支持启动时、文件变更时、以及周期性执行，降低了用户手动操作的成本。
    - **命令行面板**: 在 Web UI 中添加了 Cmd+K 快捷键，提供全局搜索和快速导航。
    - **文件上传**: Web 聊天界面新增附件上传按钮（+），提升了用户交互体验。
    - **安全增强**: 实现了基于 Landlock LSM 的内核级文件系统隔离，增强了沙箱的安全性。
  - **破坏性变更 & 迁移注意事项**: 根据现有 PR 信息，本次更新**无显著破坏性变更**。用户如有自定义配置，需注意是否启用了新的可选模块（如 Obscura 浏览器后端）。建议在更新后检查 Telegram 等渠道功能是否正常（见下文 Bug 部分）。

### 3. 项目进展

今日合并/关闭了 **15 个** PR，标志着项目在多个关键领域取得了显著进展。

- **多渠道数据集成**: 完成了从 Claude Code、Hermes 等多个平台导入数据的核心功能（PR #914、#917），极大地扩展了 Molit 作为统一工作台的互操作性。
- **语音交互增强**: 合并了`PR #916`，不仅增加了 TTS 确定性，还建立了“代理 ↔ 语音角色”的链接机制，为构建更拟人化的助手奠定了基础。
- **核心功能优化与安全**: 完成了基于 `Landlock` 的沙箱隔离（PR #866）和自动代码索引功能（PR #903），显著提升了系统的安全性与自动化能力。同时统一了 Provider 名称验证（PR #912），减少了配置错误。
- **用户体验打磨**:
  - Web 界面新增命令面板（PR #904）和文件上传按钮（PR #876），交互更贴近主流 LLM 应用。
  - 新增 `/update` 命令和一键更新按钮（PR #911），简化了用户版本升级流程。
  - 修复了反向代理场景下的 WebSocket 错误（PR #907）。
- **构建与发布流程**: 优化了更新日志生成逻辑（PR #909），确保发布说明准确反映版本间的实际差异。

### 4. 社区热点

- **Issue #905: Telegram 问题 & PR #915 修复**
  - 这是今日社区关注的焦点。用户 `RokkuCode` 报告了 Telegram 消息发送失败的问题，评论数达到 **3** 条。问题根源被迅速定位为“用户名字段未净化”导致 Mistral/OpenAI 等 API 返回错误。
  - 维护者响应迅速，创建了 PR #915 并已合并关闭。此修复已包含在新版 `v20260428.03` 中。
  - **链接**: [Issue #905](https://github.com/moltis-org/moltis/issues/905)

- **Issue #896: Docker 构建失败**
  - 用户 `orangesoncom` 报告了 Docker 构建过程中因网络 DNS 解析问题导致的失败，引发了 **2 条**评论。
  - 此问题最终被关闭，推测已解决或通过构建缓存/镜像更新规避。
  - **链接**: [Issue #896](https://github.com/moltis-org/moltis/issues/896)

### 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 | FIX PR |
| :--- | :--- | :--- | :--- | :--- |
| **严重** | [#918](https://github.com/moltis-org/moltis/issues/918) | **新 Bug**: 用户 `faevourite` 反馈在 Docker 环境下，新版 `v20260428.03` 中 Telegram 功能依然无法使用。 | **未解决 (OPEN)** | N/A |
| **高** | [#905](https://github.com/moltis-org/moltis/issues/905) | **已修复 Bug**: Telegram 消息因用户名未净化导致 API 调用失败。 | **已关闭 (CLOSED)** | [#915](https://github.com/moltis-org/moltis/pull/915) |
| **中** | [#896](https://github.com/moltis-org/moltis/issues/896) | **已关闭 Bug**: Docker 构建时 `apt-get update` 因 DNS 问题失败。 | **已关闭 (CLOSED)** | N/A |

**分析**: 虽然 Telegram 的用户名问题已在 `v20260428.03` 中声明修复，但新的 Issue #918 表明，该修复在 Docker 部署环境下可能不完整或引入了新的兼容性问题，需要维护者紧急跟进。

### 6. 功能请求与路线图信号

- **子代理配置 (Issue #906)**: 用户 `bsarkisov` 请求在 WebUI 中直接配置子代理。鉴于项目近期在增强 WebUI（命令面板、文件上传）上投入了大量精力，这一功能有较大概率在后续版本中实现。
  - **链接**: [Issue #906](https://github.com/moltis-org/moltis/issues/906)

- **原生 9router 支持 (Issue #266)**: 用户 `M2noa` 提出的功能请求。9router 可以隐式地为 Agent 提供请求路由能力，无需关心底层 Provider。这是一个对高级用户非常有吸引力的特性，但开发复杂度较高，目前优先级可能较低。
  - **链接**: [Issue #266](https://github.com/moltis-org/moltis/issues/266)

- **“+” 按钮添加附件 (Issue #533)**: 此功能请求已通过 PR #876 实现，并被合并到主线中。这展示了社区的声音能够快速转化为实际行动。
  - **链接**: [Issue #533](https://github.com/moltis-org/moltis/issues/533)

### 7. 用户反馈摘要

- **正面反馈 (隐含)**: 用户在 Issue #533 中提出的“添加附件+”功能被快速实现并合并，表明社区对项目响应速度感到满意。
- **痛点**:
  - **Telegram 连接性问题** (Issue #905, #918): 这是目前用户最集中的痛点。新旧版本连续出现 Telegram 功能失效的问题，削弱了用户体验。特别是 Docker 用户（Issue #918）可能需要等待一个紧急修复补丁。
  - **构建复杂性** (Issue #896): 少部分用户在构建过程中遇到技术问题（如 DNS 解析），虽然已解决，但反映出 Docker 构建环境的强依赖性是一个潜在摩擦点。

### 8. 待处理积压

- **Issue #918 [Bug]: Telegram broken in Docker in v20260428.03**
  - **用户**: faevourite
  - **创建**: 2026-04-29
  - **状态**: [OPEN]
  - **链接**: [Issue #918](https://github.com/moltis-org/moltis/issues/918)
  - **说明**: 这是一个非常紧急的新 Bug，与已修复的 Issue #905 相关但未解决。该问题阻碍了 Docker 用户在最新版上正常使用 Telegram 渠道，需要维护者优先排期修复。

- **PR #339 [Feature]: 添加 zh-TW 繁体中文支持**
  - **作者**: PeterDaveHello
  - **创建**: 2026-03-05
  - **状态**: [OPEN]
  - **链接**: [PR #339](https://github.com/moltis-org/moltis/pull/339)
  - **说明**: 这是一个已提交超过一个月的 PR，为 Molit 添加繁体中文支持。考虑到项目国际化（i18n）的重要性，此 PR 应当被纳入合并日程，以服务更广泛的用户群体。

- **Issue #266 [Feature]: 原生 9router 支持**
  - **用户**: M2noa
  - **创建**: 2026-02-28
  - **状态**: [OPEN]
  - **链接**: [Issue #266](https://github.com/moltis-org/moltis/issues/266)
  - **说明**: 这是一个高级功能请求，已经存在数月之久。虽然没有近期活动，但它代表了社区中对更灵活、更强大的 Provider 路由机制的需求，是一个值得列入长期路线图进行讨论的信号。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是为您生成的 CoPaw 项目动态日报。

---

# CoPaw 项目动态日报 | 2026-04-29

## 今日速览

今日 CoPaw 项目活跃度极高。`v1.1.5-beta.1` 版本正式发布，带来了 ACP 协议支持等关键特性。社区参与度旺盛，24小时内触发了 **45 条 Issue** 和 **32 条 PR** 的更新。Bug 修复和功能请求齐头并进，核心关注点集中在**会话管理的稳定性**（暂停/停止功能、多标签页干扰）、**智能体隔离**以及**渠道集成体验**（飞书、企微、MCP）的优化上。项目正处于功能迭代与稳定性加固并行的快速演进阶段。

## 版本发布

### 🚀 v1.1.5-beta.1
- **链接**: [Release v1.1.5-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5-beta.1)
- **主要更新**:
    - `feat(ACP): add ACP`: 新增**ACP（Agent Communication Protocol）** 支持，这是项目迈向多智能体互操作性的关键一步。
    - `fix(console)`: 修复了多标签页下智能体选择互相干扰的问题。
    - `fix(timezone)`: 规范化了非标准时区名称的处理。
- **破坏性变更**: 无
- **迁移注意事项**: 作为 Beta 版本，建议在测试环境验证 ACP 相关功能的兼容性。

## 项目进展

今日项目闭环了 **21 个 PR**，修复了多个关键性 Bug，并推进了多项新功能的落地。主要进展包括：

1.  **会话管理修复**: PR [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) 修复了 **右侧历史面板无法输入中文重命名** 和 **多标签页智能体选择互相干扰** 两个顽固性问题。
2.  **QQ 通道增强**: 初次贡献者 PR [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) 和 [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) 被合并，区分了QQ语音消息与普通音频文件，并引入了平台侧 ASR 支持，提升了 QQ 渠道的实用性和用户体验。
3.  **上下文管理优化**: PR [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) 修复了因工具调用结果超出保留限制导致智能体陷入**无限循环**的严重上下文管理 Bug。
4.  **依赖与文档更新**: PR [#3922](https://github.com/agentscope-ai/QwenPaw/pull/3922) 新增了“计划模式”文档；PR [#3933](https://github.com/agentscope-ai/QwenPaw/pull/3933) 将控制台依赖 `agentscope-chat` 升级至稳定版。
5.  **后端体验优化**: PR [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) 通过去重机制，减少了打开 `/chat` 页面时的重复 API 请求，优化了页面加载性能。

## 社区热点

1.  **[Bug]: Web UI 暂停按钮仅前端止渲染，后端 Agent 继续执行** (Issue [#3850](https://github.com/agentscope-ai/QwenPaw/issue/3850))
    - **热度**: 5条评论，1个赞
    - **诉求**: 用户发现“暂停”按钮是一个“假”功能，只停止了前端渲染，后端 Agent 依然在执行。这严重影响了用户对 Agent 执行的控制力，是一个高优反馈。社区成员已初步分析出后端缺少暂停机制。

2.  **[Question]: 智能体之间是否可以完全隔离** (Issue [#3936](https://github.com/agentscope-ai/QwenPaw/issue/3936))
    - **热度**: 6条评论
    - **诉求**: 用户提出了安全性与数据隔离的核心需求，希望智能体能实现 workspace 级别的完全隔离。用户还指出了当前“文件防护”功能不支持白名单和按智能体配置的局限性。此问题反映了企业级或高安全性应用场景下的迫切需求。

3.  **[Feature]: 自定义模型应支持为每个模型配置独立的 timeout 和 context_window_size** (Issue [#3929](https://github.com/agentscope-ai/QwenPaw/issue/3929))
    - **热度**: 2条评论（新开但讨论迅速）
    - **诉求**: 用户希望能在自定义模型配置中，为每个模型单独设置超时时间和上下文窗口大小。这表明用户在使用多样化模型时需要更精细化的控制，是提升高级用户配置灵活性的关键请求。

## Bug 与稳定性

| 严重程度 | Bug 描述 | Issue 链接 | Fix PR 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | `read_file_safe()` 函数潜在的 **MemoryError**：将1GB参数传递给 `TextIOWrapper.read()`，在低内存系统上会直接崩溃。 | [#3932 (已关闭)](https://github.com/agentscope-ai/QwenPaw/issue/3932) | 已关闭，待确认合入版本 |
| **严重** | **Context Sync 竞态条件**：高 `max_iters` 下，工具结果在发送给 LLM 前丢失，导致智能体陷入无限循环。 | [#3893 (待处理)](https://github.com/agentscope-ai/QwenPaw/issue/3893) | 已修复（PR [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895)） |
| **高** | **Debian 12 下页面卡死**：保存模型设置后页面冻结，需重启服务（root用户下正常，权限问题嫌疑）。 | [#3853 (待处理)](https://github.com/agentscope-ai/QwenPaw/issue/3853) | 暂无 |
| **高** | **Dream agent 记忆管理失败**：执行优化任务后，记忆核心文件仅剩空白模板，无实质内容。 | [#3905 (待处理)](https://github.com/agentscope-ai/QwenPaw/issue/3905) | 暂无 |
| **中** | **MCP 造成聊天端无限卡死**：调用特定 MCP 服务器时，聊天会无限等待无响应，日志显示状态机错误。 | [#3822 (已关闭)](https://github.com/agentscope-ai/QwenPaw/issue/3822) | 已关闭，待确认修复方案 |
| **中** | **企业微信通道不响应**：发送消息无响应，需重启通道才能恢复。 | [#3937 (待处理)](https://github.com/agentscope-ai/QwenPaw/issue/3937) | 暂无 |
| **中** | **企微群聊 `/approval approve` 无法正常工作**：审批指令因 `@机器人` 前缀解析问题卡死。 | [#3901 (已关闭)](https://github.com/agentscope-ai/QwenPaw/issue/3901) | 已关闭，原因已定位 |

## 功能请求与路线图信号

除了社区热点中的隔离和模型细粒度配置外，以下是可能影响后续版本方向的功能请求：

1.  **MCP 工具可见性** (Issue [#2495](https://github.com/agentscope-ai/QwenPaw/issue/2495)): 用户希望在配置 MCP 后，能直接看到该服务器提供了哪些工具，这是提升 MCP 集成体验的基础。
2.  **飞书审批交互升级** (PR [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)): 社区贡献者已提交 PR，将飞书渠道的审批从文本命令升级为**一键交互式卡片**，这将被整合进下一版本。
3.  **多实例频道与智能体路由** (PR [#3938](https://github.com/agentscope-ai/QwenPaw/pull/3938)): 新提交的 PR 尝试打破“一个频道一个实例”的限制，允许创建频道副本并配置消息路由到不同智能体。这是一个非常有潜力的架构级功能。
4.  **记忆系统增强** (PR [#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913)): 社区贡献者提出了一个全面的记忆系统增强 PR，旨在解决当前记忆管理通过原始文件操作、检索关联性差、单线程瓶颈等问题，这表明社区对“长期记忆”功能有深厚期待。

## 用户反馈摘要

- **痛点**:
    - “暂停”按钮形同虚设，用户无法有效控制 Agent 的执行流程（[#3850](https://github.com/agentscope-ai/QwenPaw/issue/3850)）。
    - MCP 稳定性问题频发，连接后聊天易陷入无限等待，严重影响日常使用（[#3822](https://github.com/agentscope-ai/QwenPaw/issue/3822)）。
    - 多渠道（企微、企业微信）下的审批、消息响应等功能存在兼容性和逻辑问题，影响团队协作场景（[#3901](https://github.com/agentscope-ai/QwenPaw/issue/3901), [#3937](https://github.com/agentscope-ai/QwenPaw/issue/3937)）。
    - 中文输入法在会话重命名等基本交互上存在 Bug（[#3927](https://github.com/agentscope-ai/QwenPaw/issue/3927)）。

- **诉求**:
    - 强烈需求**智能体间的完全隔离**，特别是 workspace 级别，以满足安全与隐私要求（[#3936](https://github.com/agentscope-ai/QwenPaw/issue/3936)）。
    - 希望官方支持 `llama.cpp` 等更多本地部署方案，降低使用门槛（[#3920](https://github.com/agentscope-ai/QwenPaw/issue/3920)）。
    - 渴求**工作流编排**能力，类似 OpenClaw 的 Lobster，期望能从手动 Prompt 转化为可视化流程（[#3873](https://github.com/agentscope-ai/QwenPaw/issue/3873)）。
    - 社区对新渠道（如飞书交互卡片）和基础功能（如文件拖拽上传）的贡献热情很高，表明用户对产品 UX 有较高期望。

## 待处理积压

1.  **[Bug]: On Debian GNU/Linux 12, the page freezes** (Issue [#3853](https://github.com/agentscope-ai/QwenPaw/issue/3853))
    - **创建**: 2026-04-27 | **最后更新**: 2026-04-28
    - **状态**: 5个评论，尚无解决方案。此Bug影响特定 Linux 发行版的用户，可能涉及权限或文件系统路径问题，需要维护者介入排查。

2.  **[Feature]: mcp配置后，支持看到mcp中有哪些工具** (Issue [#2495](https://github.com/agentscope-ai/QwenPaw/issue/2495))
    - **创建**: 2026-03-29 | **最后更新**: 2026-04-28
    - **状态**: 已开放一个月。这是一个提升 MCP 使用体验的核心需求，但目前无人认领。建议项目组在规划 MCP 功能迭代时优先考虑此 Feature。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

好的，这是为您生成的 ZeptoClaw 项目动态日报。

---

# ZeptoClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

今日项目活跃度较低，主要表现为依赖项自动更新（Dependabot）的批量提交。过去24小时内，项目没有产生任何新的或关闭的 Issue，也没有新版本发布。虽然提交了15个 Pull Request，但全部为自动化依赖更新，且均处于待合并状态。这表明项目核心开发工作可能处于停滞或审查等待期，整体活跃度评估为 **低**。

## 2. 版本发布

无

## 3. 项目进展

今日无人工代码合并或功能 PR 被关闭。项目进展主要体现在**依赖项的安全性**和**生态兼容性维护**上。Dependabot 批量提交了15个 PR，旨在将核心库（如 `lettre`, `tokio`, `zip`）和 CI/CD 工具（如 `actions/upload-artifact`, `cargo-deny-action`）升级到最新版本。这些更新有助于修复潜在的安全漏洞和提升构建稳定性。

## 4. 社区热点

由于无用户提交的 Issue 和 PR 产生讨论，今日社区无显著热点。

## 5. Bug 与稳定性

今日未报告新的 Bug、崩溃或回归问题。Dependabot 提交的依赖更新（如 `tokio` 从 `1.50.0` 升级到 `1.51.1`）本身包含了对已知问题的修复，但这些修复对项目稳定性的直接影响需在合并后评估。

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求。所有 PR 均为依赖更新，无路线图相关的信号。

## 7. 用户反馈摘要

今日无来自 Issues 的用户评论，故无反馈摘要。

## 8. 待处理积压

今日存在 **15 个待合并的自动化 PR**。这些 PR 均来自 `dependabot[bot]`，创建于2026-04-28，截至目前仍未合并。长期积压的依赖更新可能导致项目与外部生态脱节，建议维护者尽快审查并合并，以降低安全风险并确保构建工具链的时效性。

- **关键待合并 PR 示例 (Rust 核心依赖)**:
    - [#550 chore(deps): bump tokio from 1.50.0 to 1.51.1](qhkm/zeptoclaw PR #550)
    - [#563 chore(deps): bump lettre from 0.11.20 to 0.11.21](qhkm/zeptoclaw PR #563)
    - [#560 chore(deps): bump libc from 0.2.184 to 0.2.185](qhkm/zeptoclaw PR #560)
    - [#555 chore(deps): bump zip from 8.4.0 to 8.5.1](qhkm/zeptoclaw PR #555)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于ZeroClaw项目2026-04-29日数据生成的动态日报。

---

## ZeroClaw 项目动态日报 (2026-04-29)

### 1. 今日速览

ZeroClaw 项目今日保持高度活跃状态。社区在 **48小时内提交了48个PR，其中46个仍在待合并状态**，表明有大量工作正在进行且尚未合并至主线。同时，**39个新开/活跃的Issue** 显示出旺盛的用户需求和问题反馈。尽管没有新版本发布，但 **Web UI、多Agent路由、架构迁移 (Microkernel)** 等核心议题仍在持续吸引大量讨论。总体而言，项目正处于功能密集开发与关键架构重构的并行阶段，但由于大量PR和Issue积压，**核心维护者的审查和合并效率将成为短期内的主要瓶颈**。

### 2. 版本发布

- **无新版本发布。** 上一次发布信息未提供。

### 3. 项目进展

今日无重要PR被合并或关闭，项目主线进度暂无更新。然而，大量高价值的PR正在等待审查和合并，它们代表了项目下一步的演进方向。以下为今日值得关注的重要待办PR：

- **WebUI与核心功能增强：**
    - **`#6179` [Web Onboarding & CRUD API]**: 新增了基于属性的CRUD API层 (`/api/config/*`)，为WebUI、CLI和第三方工具提供统一的配置管理入口。这是一个**尺寸: XL、风险: high** 的重大变更，旨在统一配置管理。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)）
    - **`#6181` [嵌入式WebUI]**: 引入了 `embedded-web` 特性，允许将Web面板资产编译进单一二进制文件，便于单文件部署场景。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6181)）
    - **`#6101` [WebUI 模型热切换与上下文持久化]**: 修复了在Agent Chat页面离开后聊天上下文丢失的问题，并支持了在UI中热切换模型。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)）
- **通道与协议修复：**
    - **`#6167` [ACP协议 v1 修复]**: 实现了ACP协议v1的完整支持，修复了与外部消费端（如Nori）的连接问题，并正确实现工具调用权限和后端通道逻辑。**尺寸: XL、风险: high**，是恢复核心互操作性的关键PR。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)）
- **文档与CI：**
    - **`#6203` [树莓派部署指南]**: 新增了树莓派从源码、二进制或容器部署的详尽指南，解决了在Pi上编译时可能出现的OOM问题。直接响应了Issue `#4704`。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6203)）

### 4. 社区热点

社区讨论的焦点主要围绕 **长期存在的稳定性和基础功能缺失** 问题。

- **#4866 [Web Dashboard不可用]**：尽管该Issue已关闭，但其高达**27条评论**反映了这是一个长期困扰用户的痛点。Web UI/桌面应用的构建问题持续存在，对项目易用性造成了实质性影响。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)）
- **#3059 [阿里云百炼平台无法使用]**：拥有**10条评论**，用户反馈无法在阿里云百炼平台使用Coding Plan功能。这表明中国用户群体对国内云平台支持的期望很高。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)）
- **#5574 [微内核架构转型RFC]**：这项关于 `v0.7.0 → v1.0.0` 重大架构转型的RFC，尽管有**10条评论**，但其讨论日期集中在4月中旬。这暗示社区对宏观架构方向的讨论热度有所降温，焦点转向了更具体的实现细节。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)）
- **#3642 [提供“完整版”Docker镜像]**：该Feature Request获得**3个👍**和**8条评论**，社区强烈希望官方提供一个包含所有功能（如WhatsApp）的“全家桶”Docker镜像，以降低新用户的上手门槛。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)）

### 5. Bug 与稳定性

今日新报告的Bug数量不多，但存在几个影响较大的历史问题。

- **S0 - 数据丢失 / 安全风险**：
    - **#4627 [file_write工具静默失败]**：`file_write`工具报告成功，但文件在宿主机上完全不可见。此问题被标记为**风险: high**，且已在社区中持续讨论超过一个月，尚无对应修复PR，风险较高。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)）
    - **#5905 [Docker沙箱缺少工作区绑定挂载]**：此PR（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5905)）旨在修复 DockerSandbox 无法访问宿主机工作区路径的问题，这可能导致脚本在容器内执行失败。该问题是严重功能缺陷。
- **S1 - 工作流阻塞**：
    - **#6187 [配置参考指南缺失]**：一个文档Bug，导致用户无法找到核心的配置参考文档。此问题已快速被识别并关闭，但影响用户配置体验。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6187)）
    - **#4866 [Web Dashboard不可用]**：虽已关闭，但影响广泛。
- **S2 - 功能降级**：
    - **#6153 [Matrix: 语音转文字失败]**：用户报告在使用Element客户端时，Matrix通道的语音转录功能因音频格式问题失败。**无对应修复PR**。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6153)）
    - **#6097 [本地图像读取失败]**：Agent在调用生成图像技能后，无法读取本地路径下的图片文件，影响图像相关工具流的正常执行。**已有关联修复PR `#6107`**，该PR修复了流式响应中捕获推理内容的问题。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)）

### 6. 功能请求与路线图信号

以下几个长期提案展现出高活跃度，很可能成为下一版本的核心特性：

- **Multi-Agent Routing (#2767)**: 获得**8个👍**，是获得社区共识最高的需求之一。用户期待实现多Agent隔离运行与统一路由。关联的RFC `#5890` [Multi-agent UX flow design] 正在进行中，表明此功能已正式进入设计阶段。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)）
- **Schema v3 批量破坏性字段迁移 (#5947)**: 此项工作被标记为“Merge blocker”，意味着在其完成前，所有相关PR都不能合并。这表明项目团队计划在 v1.0 前进行一次大规模的、协调一致的配置模式升级。此工作直接关系到项目的稳定性和未来兼容性。
- **A2A协议支持 (#3566)**: 社区对Agent-to-Agent互操作的需求明确，已有外部Agent2Agent协议标准可供参考，是ZeroClaw融入更广泛AI生态的关键。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)）
- **Provider-scoped Model Fallback (#4647)**: 用户希望能在Provider级别配置模型回退链，而非仅仅全局配置，以便更精细地控制不同Provider的容错策略。此提案已被标记为 `status:accepted`。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4647)）

### 7. 用户反馈摘要

从今日活跃的Issue评论中，我们可以提炼出以下用户声音：

- **易用性壁垒**：用户反复提到Web UI不可用、Docker镜像功能不完整、配置文档缺失等问题，表明**开箱即用的体验是用户首要痛点**，尤其对于非技术背景的用户。
- **国内生态需求**：针对阿里云百炼、WeCom（企业微信）、QQ（NapCat通道）的支持请求非常具体且频繁，说明ZeroClaw在中国开发者社区拥有相当的用户基础，且他们期望项目能更好地融入本地技术栈。
- **学习成本**：如 `#5900` 中用户提到“我尝试发送payload，但似乎不起作用”，以及 `#5674` 中用户抱怨“在私聊中也会决策是否回复，这很烦人”，反映出Agent的部分默认行为逻辑对用户不够透明，**缺乏直观的反馈和配置手段**，导致用户只能通过试错和发起Issue来摸索。

### 8. 待处理积压

以下为长期存在、但未获得充分关注或进展的重要Issue和PR，提醒维护者关注：

- **`#2503` [找不到 NapCat 通道选项]**：此Issue创建于3月2日，用户期望的OneBot/NapCat通道支持仍未实现。虽然状态为 `status:no-stale`，但已超过2个月未有实质性进展，可能让期望对接QQ生态的用户感到失望。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)）
- **`#4627` [file_write 工具静默失败]**：如前所述，此S0级别的严重Bug长期未修复。虽然难度可能较高，但其“静默失败”的特性对用户资产和数据安全的威胁极大，应被优先处理。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)）
- **`#3672` [工作区文件和内存变更历史]**：此需求提出了一个极具价值的功能：为Agent的自我修改提供版本控制能力。它触及了“可解释AI”和“Agent审计”的深层需求。虽然被接受但进展不明，值得更深入的探讨。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3672)）

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*