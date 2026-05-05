# OpenClaw 生态日报 2026-05-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-05 04:19 UTC

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的OpenClaw项目数据，为您生成2026年5月5日的项目动态日报。

---

# OpenClaw 项目动态日报 | 2026年5月5日

## 1. 今日速览

今日（2026-05-05）OpenClaw 项目持续高速运转，社区活跃度极高。在24小时内，项目处理了500条Issue和500条PR，并有4个新版本发布，展现了强大的迭代能力。bug修复与性能优化占据了大量社区讨论，特别是代理上下文丢失、会话膨胀导致的OOM（内存溢出）等问题引发广泛关注。同时，用户对公司化应用（如Windows/Linux客户端）和高阶工作流（如多代理协作、执行前后钩子）的功能请求持续高涨。总体来看，项目处于一个高产出、高反馈、但稳定性挑战依然存在的“狂飙”阶段。核心维护者与社区贡献者正在紧密协作，处理包括WhatsApp、Telegram和Slack在内的多个渠道集成问题。

## 2. 版本发布

今日共发布了4个新版本，主要集中在5月4日至5日期间，包括两个Beta版本和一个正式的补丁版本。

- **[v2026.5.4-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.2)**: 主要亮点是优化了Google Meet/语音通话体验，使Twilio拨号与会话能通过实时Gemini语音桥接进行低延迟音频流传输，并改进了背压感知和打断（barge-in）功能。

- **[v2026.5.4-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.1)**: 引入了官方的`file-transfer`插件，为配对的节点提供二进制文件操作能力（`file_fetch`, `dir_list`, `dir_fetch`, `file_write`），并具备默认拒绝的安全策略。

- **[v2026.5.3-1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-1)**: 针对v2026.5.3的热修复（hotfix）版本，解决了插件安装扫描器在检测捆绑包时误报安全风险的问题。

- **[v2026.5.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3)**: 正式版发布，主要亮点与beta.1相同，即引入了官方的`file-transfer`插件。

**迁移注意事项**：
- 若需使用`file-transfer`插件，请检查`openclaw.json`中的`plugins.entries.file-transfer.config.nodes`配置，以确保遵循默认拒绝的安全策略。
- Beta版本可能包含未完全稳定的特性，建议在非生产环境中先行测试。

## 3. 项目进展

今日合并/关闭了多个重要PR，显著推动了项目的稳定性和功能完整性。

- **渠道集成修复**:
  - [PR #77660 - Slack](https://github.com/openclaw/openclaw/pull/77660): 修复了Slack频道中提及（mention）门控导致的线程参与问题，确保在成功发送可见消息后正确记录线程参与状态。
  - [PR #77663 - WhatsApp](https://github.com/openclaw/openclaw/pull/77663): 修复了WhatsApp设置向导中的允许列表号码格式问题，确保了号码匹配逻辑的正确性。
  - [PR #77658 - Telegram](https://github.com/openclaw/openclaw/pull/77658): 优化了Telegram长文本消息的处理，复用已流式的预览作为首段内容，避免了临时消息气泡的产生。

- **核心稳定性提升**:
  - [PR #77667](https://github.com/openclaw/openclaw/pull/77667): 改进了CI流水线，对包升级的兼容性测试进行了分片，确保发布质量。
  - [PR #77544 - 插件系统](https://github.com/openclaw/openclaw/pull/77544): 修复了npm更新后，某些插件的`peerDependencies.openclaw`链接丢失或悬空的问题，确保插件依赖的完整性。
  - [PR #55121 - 工具显示](https://github.com/openclaw/openclaw/pull/55121): 修复了当模型使用文件别名时，工具摘要不显示文件路径的问题，改善了debug体验。
  - [PR #73744 - Web UI](https://github.com/openclaw/openclaw/pull/73744): 在网络聊天（WebChat）界面添加了持久的上下文使用量指示器，让用户能直观了解当前会话的token/上下文消耗情况。

- **新功能与技能**:
  - [PR #77654 - Etsy技能](https://github.com/openclaw/openclaw/pull/77654): 新增了`etsy-shop-operator`指导技能，为通过Telegram发起的Etsy店铺运营请求提供模板化响应。

这些贡献表明，项目不仅在处理紧急bug，也在有条不紊地推进新功能开发和面向用户体验的优化。

## 4. 社区热点

今日讨论最活跃、关注度最高的议题集中在几个核心痛点上：

1.  **[#14593 - Docker中skill安装失败](https://github.com/openclaw/openclaw/issues/14593) (29条评论)**: 用户报告在官方Docker容器中安装依赖`brew`的skill时失败。这表明容器化部署的体验存在差距，社区强烈期望Docker镜像能包含更完整的依赖链或提供明确的替代方案。

2.  **[#25592 - 工具调用间的文本泄漏](https://github.com/openclaw/openclaw/issues/25592) (24条评论)**: 这是一个显著的UX问题。当Agent在处理工具调用（如错误处理）时产生的中间文本，被错误地路由并发送到Slack、iMessage等对外消息频道，造成信息污染。社区对此非常关注。

3.  **[#77598 - 开发者Agent行为观察](https://github.com/openclaw/openclaw/issues/77598) (14条评论，最新Issue)**: 这是由项目核心维护者 `pashpashpash` 发起的，旨在24小时不间断观察他的开发Agent行为的记录Issue。这本身就成为了一个社区热点，展示了项目对AI Agent自身行为表现的深度内省和透明度追求。

4.  **[#9443 - 请求预编译Android APK](https://github.com/openclaw/openclaw/issues/9443) (23条评论)**: 用户强烈希望官方提供预编译的Android APK，而非仅提供源码。这反映了用户对“开箱即用”移动端体验的迫切需求，是扩展项目覆盖面的关键障碍。

5.  **[#32473 - Control UI需要HTTPS安全上下文](https://github.com/openclaw/openclaw/issues/32473) (15条评论)**: 用户在VPS上通过HTTP访问控制UI时遇到问题，要求使用HTTPS。这指向了项目部署文档和默认配置的完善空间。

**分析**：社区热点清晰地指向了“稳定化”和“易用性”两大方向。Docker部署问题、消息泄漏、移动端缺失，都是项目从早期用户向更广泛、更非技术用户群体扩展时必须跨越的门槛。

## 5. Bug 与稳定性

今日报告的Bug涉及多个严重级别，部分已有PR进行修复。

- **崩溃/挂起 (Crash/Hang)**:
    - [#71127 - 卡住的会话永远不会中止](https://github.com/openclaw/openclaw/issues/71127): 诊断系统可以检测到卡住的会话，但无法自动恢复，导致网关需要外部重启。这是一个较为严重的可靠性问题，目前尚未有标记的修复PR。

- **回归 (Regression)**:
    - [#32473 - Control UI要求HTTPS](https://github.com/openclaw/openclaw/issues/32473): 这是一个回归问题，在之前版本中是可工作的。 无直接修复PR，但有人正在讨论解决方案。
    - [#31583 - `exec`工具不继承环境变量](https://github.com/openclaw/openclaw/issues/31583): 同样是回归问题，导致`skills.entries.*.env`配置的变量无法传递给`exec`工具。 无直接修复PR。

- **功能行为错误 (Behavior Bug)**:
    - [#37295 - Fal GPT Image 2图片编辑路由404](https://github.com/openclaw/openclaw/issues/77295): 重要程度高，相关图片编辑功能完全不可用。 无直接修复PR。
    - [#12590 - `memoryFlush`不可靠](https://github.com/openclaw/openclaw/issues/12590): 内存冲刷仅在每两个自动压缩周期触发一次，可能导致上下文丢失。 无直接修复PR。
    - [#35119 - Codex HTTP 500不触发模型回退链](https://github.com/openclaw/openclaw/issues/35119): 当OpenAI Codex返回服务器错误时，模型不会自动切换到后备模型，用户体验差。无直接修复PR。
    - [#77241 - (已关闭) Discord npm插件密钥合约无法加载](https://github.com/openclaw/openclaw/issues/77241): 路径搜索Bug，此问题今日已**由PR修复**。这是一个很好的快速响应案例。

- **性能问题**:
    - [#55334 - `sessions.json`无限制增长导致OOM](https://github.com/openclaw/openclaw/issues/55334): 严重的性能问题，会话文件无限制膨胀。无直接修复PR，但这是一个重要的基础设施问题。

**总结**：稳定性是项目当前的最大挑战。尽管今日关闭了约54个Issue，但仍有大量严重bug（如OOM、崩溃、回归）悬而未决。核心维护者需要优先处理高影响、高优先级的崩溃和回归问题。

## 6. 功能请求与路线图信号

今日用户提出的功能请求显示出对“平台化”和“可观测性”的强烈需求。

- **平台/基础设施**:
    - [#75 - Linux/Windows客户端](https://github.com/openclaw/openclaw/issues/75): 持续高赞（74👍），是社区最期待的功能之一。
    - [#13616 - 备份/恢复工具](https://github.com/openclaw/openclaw/issues/13616): 用户需要标准化的配置、状态和会话历史备份方案，以便于灾难恢复和环境迁移。
    - [#13597 - AWS部署指南](https://github.com/openclaw/openclaw/issues/13597): 请求官方提供在ECS/EC2/Lambda上的详细部署文档，以推动企业级部署。

- **安全与合规**:
    - [#10659 - 掩码秘钥](https://github.com/openclaw/openclaw/issues/10659): 用户希望Agent能使用API密钥但无法读取其明文，以防止Prompt注入攻击泄露凭证。
    - [#8719 - 安全Profile v1.1](https://github.com/openclaw/openclaw/issues/8719): 一份详细的、面向生产环境的安全模型提案，旨在不牺牲用户体验的前提下，通过硬性规则防止钱包被盗、数据库被删等风险。

- **工作流与扩展性**:
    - [#22438 - 分层引导文件加载](https://github.com/openclaw/openclaw/issues/22438): 针对大工作区，提议按层级加载引导文件，以节省LLM token。
    - [#35203 - 多Agent协作增强](https://github.com/openclaw/openclaw/issues/35203): 一个全面的RFC，涵盖能力画像、共享黑板、分层内存和Token成本治理等，标志着社区对高级编排能力的探索。
    - [#18160 - Cron任务直接执行模式](https://github.com/openclaw/openclaw/issues/18160): 请求允许Cron任务绕过LLM直接执行简单命令，以提高效率和可靠性。

**路线图信号**：`file-transfer`插件的发布是向“平台化”迈出的重要一步。结合社区对`安全Profile`、`掩码秘钥`等功能请求的讨论，可以预见下一阶段项目将重点强化安全能力。而`多Agent协作`的RFC则预示了未来更复杂、更高效的工作流编排将成为探索方向。

## 7. 用户反馈摘要

从今日的Issue评论中提炼出以下用户痛点与场景：

- **痛点：配置复杂，难以调试**
    - 用户在Docker部署（#14593）、SSL配置（#32473）、环境变量传递（#31583）等方面频繁遇到“不工作”的问题，且错误信息通常不明确（如“Failed to optimize image” #73148），表明项目在部署和错误反馈方面有改进空间。

- **痛点：代理行为不可控**
    - 新用户对代理消息泄漏到无关频道（#25592）感到困惑和担忧。同时，有经验的用户希望获得更多的控制点，如`hard gates`（#13583）、`masked secrets`（#10659）和`fallback approval mode`（#33975），以约束代理行为。

- **痛点：资源消耗与性能**
    - `sessions.json`的无限增长（#55334）导致了OOM，这是一个影响所有长运行实例的严重问题。此外，工具schema的token开销（#14785）和内存冲刷的不可靠（#12590）也被点出，表明社区对资源利用率的敏感度高。

- **使用场景：多样化集成需求**
    - 用户持续推动更多渠道和平台的支持，如Linux/Windows桌面端（#75）、预编译Android APK（#9443）、Telegram Business Bot支持（#20786）、Feishu/飞书插件优化（#13751）等，显示出项目在实际生活中广泛的应用潜力。

- **满意之处**：社区对官方`file-transfer`插件的发布反应积极，认为这填补了一个重要的功能空白。Slack和Telegram渠道的持续优化也受到了好评。

## 8. 待处理积压

- **[高赞长期未响应] #75 - Linux/Windows Clawdbot Apps**: 拥有74个👍，创建于2026年1月1日，是社区呼声最高的功能之一，但至今未有明确的开发计划。
    [链接](https://github.com/openclaw/openclaw/issues/75)

- **[高评论数，寻求帮助] #14593 - Docker Skill安装失败**: 29条评论，许多用户遇到相同问题，且`brew not installed`的报错对新手极不友好。
    [链接](https://github.com/openclaw/openclaw/issues/14593)

- **[亟待解决的Bug] #55334 - sessions.json无限增长导致OOM**: 这是一个严重的稳定性问题，一旦触发会导致网关完全不可用。
    [链接](https://github.com/openclaw/openclaw/issues/55334)

**分析师建议**：项目维护者应优先关注以下事项：
1.  成立专项小组，处理 `sessions.json` OOM 和 Docker 部署体验这两个高优先级问题，它们是阻碍项目规模化应用的明显短板。
2.  为 `#75 Linux/Windows Apps` 发布一份官方声明或路线图更新，说明当前挑战、优先级或技术选型，以避免社区热情消磨。
3.  评估并里程碑化 `#10659 Masked Secrets` 和 `#8719 Security Profile v1.1`，这将是OpenClaw进入企业级市场的关键安全基石。

---

## 横向生态对比

好的，作为您的资深技术分析师，以下是根据您提供的2026-05-05各项目动态数据生成的横向对比分析报告。

---

### AI智能体与个人AI助手开源生态横向对比分析报告

**报告日期**: 2026-05-05
**分析师**: AI智能体与个人AI助手领域开源项目分析师

---

#### 1. 生态全景

当前，个人AI助手/自主智能体开源生态正处于**高速分化与深度整合并存**的“平台化”前夜。一方面，以`OpenClaw`、`ZeroClaw`、`NanoBot`为代表的核心项目正通过高密度的版本迭代和功能扩展，解决从“单一对话”到“多模态任务编排”再到“企业级安全隔离”的关键路径问题。另一方面，社区对**稳定性**、**安全性（凭证泄露、数据隔离）**、**多平台部署**以及**跨Agent协作**的呼声空前高涨，生态正从“尝鲜期”进入“生产就绪期”的阵痛阶段。开发者不再满足于“能用”（连接LLM），而是强烈渴望“好用”（开箱即用的客户端、可靠的并行执行、透明的错误处理）和“敢用”（安全加固、审计日志、容灾机制）。

---

#### 2. 各项目活跃度对比

| 项目名称 | Issues数 | PR数 | Releases | 健康度评估 | 核心主题 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 4 | 极高，迭代狂飙，稳定性挑战并存 | 渠道修复、文件传输插件、内存膨胀Bug |
| **ZeroClaw** | 100 | 100 | 0 | 极高，社区驱动，配置与安全问题凸显 | 配置优化、加密修复、Air-Gapped架构RFC |
| **NanoBot** | 7 | 34 | 0 | 高，功能落地加速，渠道层有新风险 | 模型自动切换、焦点工具、SDK修复 |
| **Hermes Agent** | 50 | 50 | 0 | 极高，P0级Bug快速响应，新功能活跃 | CLI崩溃修复、安全漏洞、资源发现工具 |
| **NanoClaw** | 5 | 34 | 0 | 中高，修复密集，本地推理兼容性存疑 | MCP工具修复、容器配置漂移、llama.cpp支持 |
| **IronClaw** | 2 | 22 | 0 | 高，核心架构冲刺，CI有阻塞风险 | Reborn内存子系统、凭证签名、CI测试修复 |
| **CoPaw** | 13 | 10 | 0 | 中高，社区增长健康，安全与稳定性待解 | HTTP认证风险、流式模型循环、新手引导优化 |
| **NullClaw** | 3 | 4 | 1 | 中，稳步改进，特定功能痛点突出 | Web搜索优化、Landlock沙箱、推理过程可视化 |
| **Moltis** | 1 | 1 | 0 | 中低，问题发现期，修复快速 | Docker名称冲突、CI诊断增强 |
| **LobsterAI** | 0 | 2 | 0 | 低，维护减缓，积压严重 | Windows技能删除修复、依赖更新积压 |
| **PicoClaw** | - | - | - | 无数据 | - |
| **TinyClaw** | - | - | - | **无活动** | - |
| **ZeptoClaw** | - | - | - | **无活动** | - |

*注：“健康度评估”基于当日活动和问题解决速度的综合判断。*

---

#### 3. OpenClaw 在生态中的定位

OpenClaw 凭借**海量的Issue/PR处理量**和**高频的版本发布**（今日4个），在该生态中稳居**流量和开发节奏的绝对中心**。

*   **优势**：
    *   **生态广度与响应速度**：在渠道集成（Slack, WhatsApp, Telegram）、插件系统（`file-transfer`）和功能迭代上，其“狂飙”速度是其他项目难以企及的。
    *   **社区号召力**：从开发者Agent行为观察（#77598）到各种功能请求，社区粘性极高，形成了“发现问题-讨论-提交PR-快速合并”的良性循环。
    *   **功能前瞻性**：在语音桥接、多Agent合作（RFC）等高端特性上探索积极。

*   **技术路线差异**：
    *   **对比NanoBot/Hermes**：OpenClaw更侧重于**平台化和插件化**，目标是成为一个“万能底座”。NanoBot和Hermes则更侧重于**端到端的Agent体验**，如NanoBot强调单实例下的工具链优化，Hermes强调CLI交互和P0级稳定性。
    *   **对比ZeroClaw**：OpenClaw在安全方面的讨论尚停留在功能层（如`masked secrets`），而ZeroClaw已经上升到**架构层**（Air-gapped模式），显示出对安全更根本的思考。

*   **社区规模对比**：从数据量级的绝对差异（500条Issue vs 其他项目的10-100条）看，OpenClaw的社区规模极大概率是生态中最庞大的。

---

#### 4. 共同关注的技术方向

| 技术方向 | 具体诉求 | 涉及项目 | 备注 |
| :--- | :--- | :--- | :--- |
| **安全与凭证管理** | API密钥泄露防护、安全Profile、掩码秘钥、默认认证 | **OpenClaw, Hermes, ZeroClaw, CoPaw** | 这是当前最核心的共性痛点，直接决定了项目能否进入企业级视野。 |
| **稳定性与错误处理** | Docker部署障碍、OOM、并行执行冲突、错误信息透明度 | **OpenClaw, NanoClaw, Moltis, CoPaw, ZeroClaw** | 项目从“开发者玩具”走向“生产工具”的必经之路。 |
| **部署体验** | 预编译客户端（Linux/Win/Android）、简化配置向导、Docker依赖链 | **OpenClaw, NullClaw, ZeroClaw, NanoClaw** | “开箱即用”是新用户转化的关键瓶颈。 |
| **跨Agent协作** | 多Agent协同、能力目录、协作上下文传递 | **OpenClaw, IronClaw, CoPaw** | 体现行业对“单一Agent”能力上限的突破尝试。 |
| **媒体处理与工具** | 媒体文件转换、原生技能、资源发现 | **OpenClaw, NanoClaw, Hermes, NullClaw** | 扩展Agent的物理世界交互能力。 |

---

#### 5. 差异化定位分析

| 项目名称 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能平台、插件生态 | 技术尝鲜者、深度玩家 | 插件化架构，社区驱动的海量功能堆叠。 |
| **ZeroClaw** | 安全、可配置、企业级 | 运维、安全工程师 | 强调配置即代码、进程级隔离（Air-gapped RFC）、高安全性。 |
| **NanoBot** | 高效单Agent、工具编排 | 中小型项目开发者 | 注重工具链的稳定性和智能故障转移（模型自动切换）。 |
| **Hermes Agent** | CLI/TUI交互、资源发现 | 命令行重度用户、效率专家 | 重视终端交互体验、资源获取能力（Quarry工具）和P0稳定性。 |
| **NanoClaw** | 多通道适配、轻量集成 | 社交/社区Bot爱好者 | 聚焦于WhatsApp/Telegram等通道的稳定连接，但本地推理兼容性有短板。 |
| **IronClaw** | 下一代架构（Reborn）、WASM | 高级开发者、架构演进者 | 正经历从一代到二代架构的重构，探索WASM凭证签名等前沿技术。 |
| **CoPaw** | 多Agent协同、中文友好 | 中/双语开发者 | 在中文社区活跃，侧重多Agent及云服务厂商集成（Vertex AI）。 |
| **NullClaw** | 轻量、简单、本地优先 | 个人用户、低配设备 | 强调开箱即用（默认DuckDuckGo）、低资源占用，配置简单。 |
| **Moltis** | 并行执行、轻量框架 | 开发者、研究员 | 核心卖点为并行工具调用，当前致力于解决由此引发的环境资源冲突。 |
| **LobsterAI** | 技能维护、文档完善 | 项目维护者、贡献者 | 更像一个技能集维护项目，核心迭代速度已放缓。 |

---

#### 6. 社区热度与成熟度

*   **快速迭代阶段（热度高，稳定性存疑）**：
    *   **OpenClaw**, **ZeroClaw**: 这两个项目社区最活跃，Issue/PR数量巨大，但伴随的P0/P1 Bug也多（如OOM、容器配置漂移）。它们代表了生态中最具活力也最不稳定的部分。适合愿意冒险的早期采用者。

*   **质量巩固阶段（功能落地，关注细节）**：
    *   **NanoBot**, **Hermes Agent**, **NanoClaw**: 这些项目经历了一段时间的蓄力，今天有大量PR合并，标志着功能落地。他们开始关注渠道层可靠性、安全性、以及小众场景（如llama.cpp）支持。适合对稳定性有一定要求的用户。

*   **架构演进阶段（技术债重，创新导向）**:
    *   **IronClaw**: 正处于一次大规模的重构中。虽然核心架构（Reborn）是长远的健康投资，但短期内有大量待处理的PR和CI阻塞，对普通用户不够友好。适合关注技术方向的开发者。

*   **慢速维护/停滞阶段**：
    *   **LobsterAI**, **TinyClaw**, **ZeptoClaw**: 这些项目活动极少，可能已进入维护模式或由个人开发者低频维护，不适合作为核心依赖。

---

#### 7. 值得关注的趋势信号

1.  **“安全是最高优先级”已成为共识**: 不再是功能请求的锦上添花，而是多个项目同时涌现的P0/P1级Bug（凭证泄露、默认无认证、数据隔离），这标志着整个行业正在为进入生产环境进行“安全补课”。**启示**：开发者在选择框架时，应优先评估其安全模型（如密钥管理、进程隔离），并关注`ZeroClaw`的Air-Gapped模式演进。

2.  **从“连接LLM”到“调优LLM体验”**：模型自动切换（NanoBot）、流式工具调用修复（CoPaw）、推理过程可视化（NullClaw）等需求表明，社区不再满足于Agent能“用上”模型，而是要求能优雅地处理模型故障、兼容不同流式行为、以及提供操作反馈。**启示**：框架对LLM Provider的兼容性、错误处理和降级策略，是评判其成熟度的关键指标。

3.  **“确定性工具”与“生成式Agent”的边界正在模糊**：`NanoClaw`的ffmpeg、`Hermes`的Quarry、`OpenClaw`的`file-transfer`插件，都表明Agent正被期望执行**非LLM核心、高确定性的脚本或工程操作**。**启示**：强大的“工具执行”（MCP、Shell、脚本）引擎，比花哨的对话能力更能体现Agent的实际生产力。

4.  **部署“最后一公里”仍是最大痛点**：Docker镜像依赖缺失、llama.cpp兼容失败、预编译客户端缺失等问题反复出现。没有“开箱即用”的部署体验，再强大的功能也难以触及主流用户。**启示**：判断一个项目是否“成熟”的简单标准，是看其能否在5分钟内启动并可以聊天。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot 项目数据，我已生成 2026-05-05 的项目动态日报。

---

# NanoBot 项目日报 | 2026-05-05 (数据截至 05:00 UTC)

## 1. 今日速览

项目今日活跃度较高，24小时内处理了大量的 Issues 和 PR，显示出社区参与度旺盛并进入新功能密集发布期。**3个关键信号**值得关注：**1) 基础设施稳定性修复**：针对严重 Bug (Telegram 长轮询挂起) 和区域可用性问题均有对应的 PR 提交，开发者对线上问题的响应非常迅速；**2) 核心功能增强**：Agent Hook 系统、SDK 输出能力和记忆控制等功能通过 PR 被合并或推进，项目功能边界正在扩大；**3) 长线功能接近落地**：社区关注的“模型异常自动切换”和“任务焦点工具”两个高需求 Issue 均有对应的 PR 或讨论，有希望在近期版本中实现。

**总体评估**: ⭐⭐⭐⭐⭐ (非常活跃，关键问题和功能均有积极进展)

## 2. 版本发布

**无**。24小时内无新版本发布。上次发布的版本为 `v0.1.5.post3` (来自 Issue #3618 用户反馈)。

## 3. 项目进展 (已合并/关闭的 PR)

今日有 **9 个 PR** 被合并或关闭，其中多项为重要功能落地和 Bug 修复，项目整体向前迈了一大步。

- **[功能落地] SDK 输出完整性修复 (PR #3620 → #3254 的延续)**: `RunResult.tools_used` 和 `RunResult.messages` 字段长期为空的 Bug 终于通过 `SDKCaptureHook` 修复。现在 SDK 用户可以准确获取工具调用链和对话历史，这对开发者构建上层应用至关重要。 (合并 #3620、关闭 #3254)
- **[功能落地] 代码执行安全性提升 (PR #3613)**: 修复由 `workspace violation abort` 功能引入的三个独立 Bug，包括允许 `/dev/*` 路径，以及一个会导致流式消息丢失的竞争条件。 (已合并)
- **[功能落地] 模型异常自动切换 (PR #1163)**: 此功能 经过近3个月的开发与测试，现已合并。它实现了当主模型返回 Timeout/503/502/429 等可重试错误时，自动按配置切换到备用模型 (Fallback Chain)。 (已关闭)
- **[功能落地] 新渠道支持 (PR #1154)**: Mezon (一个即时通讯平台) 渠道集成已完成并合并。NanoBot 的渠道支持进一步扩展。 (已关闭)
- **[稳定性增强] 网络搜索修复 (PR #3091)**: Tavily 搜索提供商现在支持 `custom base_url`，方便使用代理或镜像服务的用户。 (已关闭)
- **[稳定性增强] 自定义提供商支持 (PR #3080)**: 允许 Agent 在标准模型路由之外，直接使用 OpenAI 兼容的自定义提供商，并支持从工作区加载业务命令。 (已关闭)
- **[稳定性增强] 记忆配置化 (PR #3281)**: 记忆压缩比 `consolidationRatio` 现在可通过配置进行调整，用户可以在“记忆保留”和“上下文压缩”之间取得平衡。 (已关闭)

## 4. 社区热点

- **#3376 [enhancement] 支持模型异常自动切换 (Provider / Model Failover)**: 虽不是今日新开 Issue，但在 **PR #1163** 合并后该话题迎来高潮。13条评论显示，用户对“多Provider自动容灾”的需求非常强烈，不仅仅是单Provider内的重试。该 Issue 的讨论直接推动了 PR #1163 的落地，是社区驱动开发的典型案例。 [链接](https://github.com/HKUDS/nanobot/issue/3376)

- **#3292 [feature request] Session-Level Focus Tool：任务中断恢复**：这是本周最活跃的全新功能讨论。用户希望 AI 在被打断后能记住主任务。7条评论中有维护者 `chengyongru` 的深度参与，提出了“将焦点信息持久化到会话元数据”的优雅方案。 **PR #3622** 已根据此方案提交，社区反响热烈。 [链接](https://github.com/HKUDS/nanobot/issue/3292)

- **#3618 [bug] 区域模型不可用**：用户反馈因API区域限制导致服务中断，评论仅有1条，但因其严重性 (服务完全不可用) 和极高的用户关注度 (👍来自 Issue 创建者)，已成为稳定性热点。 [链接](https://github.com/HKUDS/nanobot/issue/3618)

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | #3626 / PR #3627 | **Telegram 长轮询静默挂起**：新发现的 Bug，导致 Bot 进程存活但无法接收消息。**已有修复 PR #3627 (已提交)** | 有 Fix PR |
| **严重** | #3618 | **区域403错误**：GPT模型因用户所在区域不可用，导致服务完全中断，用户通过重装历史版本规避。 | 待处理 |
| **高** | #3625 | **WhatsApp 渠道 Token 风暴**：当使用 `supports_progress_deltas = True` 的提供商时，每生成一个 Token 就会发一条消息，用户体验极差。 | 待处理 |
| **中** | #2804 | **DuckDuckGo 网页搜索无限挂起**：长期 Bug，会阻塞整个 Agent 处理流程。**已关闭，但用户报告讨论中表示仍需关注** | 已关闭 (待验证) |
| **统计** | | - | 7 条 Issue 更新中，4 条为 Bug 报告。 |

**结论**: 渠道层的稳定性（Telegram、WhatsApp）成为新的风险点，但修复也极其迅速。区域服务可用性问题（403）则需要更优雅的错误处理机制，而非让用户自行重装。

## 6. 功能请求与路线图信号

- **高优先级 - 预计纳入下一版本**
    - **会话级焦点工具 (Session-Level Focus)**: (Issue #3292, PR #3622) 用户核心诉求，维护者深度参与并已有实现 PR。有望在 `v0.2.0` 或类似版本中推出。
    - **幻象工具调用防护 (Hallucinated Tool Call Guard)**: (PR #3624) 防止AI声称已执行操作但实际上未实现。这是一个前沿的AI可靠性特性，若被采纳将是NanoBot的亮点。
    - **消息预处理 Hook (before_process hook)**: (PR #3628) 允许开发者在消息进入Agent循环前进行拦截和处理，极大地扩展了插件的灵活性。

- **中优先级 - 未来可能性**
    - **小米 MiMo Token Plan 支持**: (Issue #3617, PR #3619) 特定用户群的定制化需求，预计会作为“Custom Provider”文档案例。
    - **MCP ImageContent 支持**: (PR #2438) 允许MCP工具返回图片，是提升**多模态能力**的关键，但因搁置时间较长，优先级有待确认。
    - **多 Agent Squad 部署**: (PR #3621) 针对 Hugging Face Spaces 的实验性多 Agent 编排方案。表明项目正在探索更复杂的协作模式，但正式发布尚早。

## 7. 用户反馈摘要

- **痛点：渠道层稳定性与错误处理**
    - 用户 `WormW` 在 #3626 中描述：“可以在NAT/防火墙后还能发送消息，但收不到任何更新。没有任何错误日志。” 这显示网络波动下的透明错误处理至关重要。
    - 用户 `basil` 在 #3625 中描述：“WhatsApp 用户收到了每个 token 的独立消息。体验极差。”
    - 用户 `bigsinger` 在 #3618 中表示：“还好我有备份的习惯...”，表明在面对区域限制等严重错误时，用户不得不采取“重装旧版”的极端方式，缺乏优雅的降级预案。

- **满意点：问题响应迅速**
    - 用户 `hoaresky` (#2804) 的长期 Bug 最终被关闭，问题得到解决。
    - 用户 `WormW` 在提交 Bug #3626 的同时，也提交了修复 PR #3627，开发者和社区的高效协作得到体现。

- **使用场景拓展**
    - 用户 `honjiaxuan` (#3617) 尝试将 NanoBot 与特定云服务（小米 MiMo）集成，表明项目正在被更广泛地使用，而不仅仅是通用大模型。

## 8. 待处理积压

- **PR #2438 (feat: MCP ImageContent)**: 此 PR 于 2026-03-24 开启，至今已逾 40 天无新动态。虽然功能重要，但可能由于实现复杂度或优先级问题被搁置。**@sampadadiwan** 及其维护者应考虑此 PR 的下一步，是合并、废弃还是需要协作重构。 [链接](https://github.com/HKUDS/nanobot/pull/2438)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 Hermes Agent 开源项目分析师，根据您提供的 2026-05-05 数据，现为您呈上项目动态日报。

---

# Hermes Agent 项目动态日报 — 2026-05-05

## 1. 今日速览

今日项目整体活跃度 **极高**。我们观察到 Issue 和 PR 数量均达到 50 条，显示出社区参与度和维护者响应积极性都非常旺盛。值得注意的是，今日出现了一个 **P0 级别的严重 Bug 集群**（CLI 因无效快捷键崩溃），该问题横跨多个平台（macOS, Linux），已获得核心维护者的快速响应并关闭。与此同时，关于安全性和新功能（如多资源发现工具和飞书消息优化）的讨论与 PR 提交也十分活跃，这表明项目正稳步迈向更高阶的功能完善和稳定性提升阶段。

## 2. 版本发布

*无。*

## 3. 项目进展

今日项目向前迈进了坚实的一步，主要体现在以下几点：

- **关键 Bug 修复**：成功解决了影响所有平台的 **P0 级 CLI 启动崩溃问题**（#19894, #19903, #19896），核心维护者已快速响应并关闭了相关的 Issue，标志着该产品级阻塞问题已被攻克。
- **平台兼容性提升**：PR #20042 被合并，为 **Microsoft Teams** 平台增加了消息线程支持和侧边栏文档，进一步完善了多平台网关能力。
- **安全与供应链加固**：PR #20037 被合并，新增了 **OSV-Scanner CI** 和 Dependabot 配置，用于自动化依赖扫描和更新，增强了项目的供应链安全。
- **新功能落地**：PR #20036 提交了全新的“**quarry**”技能，这是一个能够搜索28个数据源（包括云盘、种子网站、电子书库）的资源发现引擎，极大地拓展了 Agent 的能力边界。
- **网关行为优化**：PR #20040 新增了 `display.lifecycle_messages` 配置项，允许用户控制是否在聊天平台显示网关生命周期消息，提升了用户体验。

今日共合并/关闭了 **7** 个 PR 和 **7** 个 Issue，项目正在快速迭代。

## 4. 社区热点

今日社区讨论的焦点无疑集中在 **P0 级 CLI 启动崩溃** 问题上，相关讨论占据了评论榜前列：

- **#19894 [macOS: hermes crashes at startup — Invalid key c-S-c (Ctrl+Shift+C)]** ([链接](https://github.com/NousResearch/hermes-agent/issues/19894))：来自 macOS 用户，反馈 v0.12.0 版本启动即崩溃。获得 **1** 个 👍。
- **#19903 [CLI crash on startup: Invalid key 'c-S-c' — prompt_toolkit doesn't support Shift modifier]** ([链接](https://github.com/NousResearch/hermes-agent/issues/19903))：深度分析了根因，指出 `prompt_toolkit` 不支持 Shift 修饰符。获得 **4** 个 👍，是当日热度最高的问题。
- **#19896 [Bug: Linux: hermes crashes at startup — Invalid key c-S-c]** ([链接](https://github.com/NousResearch/hermes-agent/issues/19896))：来自 Linux 用户，同样反馈 v0.12.0 版本崩溃。获得 **4** 个 👍。

**核心诉求**：用户在升级到 v0.12.0 版本后遭遇了产品级阻塞 Bug，强烈要求快速修复。该问题集中反映了新版本中的回归问题，社区反应迅速，维护者也给予了高度重视。

## 5. Bug 与稳定性

今日报告的 Bug 涵盖了从启动崩溃到功能异常的多个层面，按严重程度排列如下：

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **P0 (紧急)** | #19894, #19903, #19896 | **CLI 因 `c-S-c` 无效快捷键启动崩溃** | **已关闭 (已修复)** |
| **P0 (紧急)** | #19897 | **安全漏洞：`HERMES_REDACT_SECRETS` 默认关闭导致 API 密钥泄露** | **待处理** |
| **P1 (高)** | #19981 | OpenAI SDK 头信息读取属性错误（`_default_headers` vs `_custom_headers`），导致Codex请求头丢失 | 待处理 |
| **P1 (高)** | #20001 | TUI 会话压缩功能产生“幽灵会话”，污染会话搜索结果 | 待处理 |
| **P2 (中)** | #14420 | Agent 无法基于先前上下文提供准确回答，可能涉及记忆模块上游问题 | 待处理 |
| **P2 (中)** | #18872 | `skill_view/skills_list` 名称不匹配，导致 Agent 无法使用发现技能 | 待处理 |
| **P2 (中)** | #19944 | TUI 滚动长对话时可能出现空白区域 | 待处理 |
| **P0 紧急修复 PR** | PR #20053 | **飞书适配器的 WebSocket 补丁破坏钉钉等其他平台** | **待合并** |
| **P2 Fix PR** | PR #20050 | 修复人格列表预览截断时的运算符优先级错误 | **待合并** |
| **P2 Fix PR** | PR #20052 | 修复 `schema_sanitizer` 移除 `pattern` 字段以兼容 llama.cpp | **待合并** |

**重点关注**：**#19897 安全漏洞** 和 **#19981 请求头丢失** 问题若未及时修复，将严重影响用户生产环境的安全性与核心功能。

## 6. 功能请求与路线图信号

今日涌现出多个有潜力的新功能请求，部分已有对应 PR，显示出社区和项目发展方向的重合：

- **迈向高阶 Agent 编排**：**#20048** 提出为编排型 Profile 增加 `kanban_list`, `kanban_archive` 等工具，**#20054** 提议看板调度器应校验 Worker Profile 的可用性。这表明项目正在向更复杂、更健壮的多 Agent 协作系统演进。
- **安全与审计**：**#487** (已关闭) 提出了不可篡改的哈希链审计日志功能，虽然该 Issue 已关闭，但想法可能被后续采纳。**#20034** 提议将 `post_tool_call` 钩子文档化，作为审计插件的集成点，这很可能会在后续版本中实现。
- **本地化与自定义**：**#20032** 提出了一个非常有中国特色的“本地自定义网关”需求，支持多 Agent 分组讨论，这反映了项目在海外及中国市场都具有广泛的应用场景。
- **资源发现工具**：**PR #20036** 已经提交了名为“quarry”的多资源发现技能，直接对应了用户对 Agent 拓展能力边界的期望，很可能在下一版本中被合入。

## 7. 用户反馈摘要

从今日的 Issues 评论中，可以清晰地看到用户的声音：

- **对版本稳定性的强烈诉求**：多位用户在升级 v0.12.0 后遭遇启动崩溃，情绪上表达了“**刚更新就崩了**”的不满，表明用户对版本稳定性和回滚机制有较高期望。
- **对安全问题的担忧**：用户 `frogwraps` 发现 API 密钥因默认配置泄露的问题，指出“**这会吓跑非技术用户**”，突显了安全性是产品能否被广泛接受的关键。
- **特定场景下的使用痛点**：用户 `S3CR3T-M3N0N` 报告了 URL 安全模块误拦截合法 IP 段（198.18.0.0/15），这在使用 Clash TUN 模式的用户中较为常见，说明项目需要更全面的网络兼容性测试。用户 `cnfaxian` 提出的本地自定义网关功能，反映了特定市场（如中国）用户对“聊天室式”多 Agent 协同办公的独特需求。
- **对功能特性的赞赏**：“quarry”技能获得关注，说明社区对 Agent 能主动从互联网检索信息、调用工具的能力抱有高度期待。

## 8. 待处理积压

以下为长期未响应或解决难度较高的重要 Issue，提醒维护者关注：

- **#14420** ([链接](https://github.com/NousResearch/hermes-agent/issues/14420))：**Agent 无法使用上下文和记忆**，涉及 `provider/ollama` 和 `tool/memory` 组件，自 4 月 23 日提出以来已有 6 条评论，但未见根本性修复方案。这是 Agent 智能的基石，建议投入更多资源。
- **#19922** ([链接](https://github.com/NousResearch/hermes-agent/issues/19922))：**扩展 `display.runtime_footer`**，希望其能显示更多Token用量和成本信息。该请求自 5 月 4 日提出，符合用户对系统透明度和可观测性的普遍需求。
- **#11712** ([链接](https://github.com/NousResearch/hermes-agent/issues/11712))：**开放本地 WebSocket 接口**以支持第三方客户端（如 CoClaw 移动应用）。这是一个拓展 Hermes Agent 生态的重要接口能力，自 4 月 17 日提出，但尚未见到实质性进展。
- **#18060** ([链接](https://github.com/NousResearch/hermes-agent/issues/18060))：**23 个文件硬编码 `Path.home() / ".hermes"` 路径**，导致 Docker 部署中配置文件被忽略。这是一个影响生产环境部署的潜在严重问题，虽然已经提出，但推进缓慢。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-05)

---

## 1. 今日速览

今日项目社区活跃度 **较高**，24小时内共处理 5 条 Issue 和 34 条 PR，其中合并/关闭 PR 达 19 条，修复效率显著。核心贡献集中在 Bug 修复（Discord 消息重复、MCP 工具静默失效、容器配置漂移）与多通道适配（WhatsApp、Telegram、DeltaChat）。整体项目健康度良好，社区贡献活跃，但仍有 15 条待合并 PR 及多个高优先级 Bug 待修复。无新版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

**今日已完成/合并的关键 PR（19条），推动了以下重要修复与功能：**

### 核心架构与稳定性
- **[PR #2242] fix(agent-runner): derive MCP allowedTools from registered mcpServers**  
  关闭 #2241，解决了通过 `add_mcp_server` 注册的 MCP 工具因静态过滤规则被静默丢弃的核心 Bug。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2242)

- **[PR #2055] fix(setup): inject ~/.local/bin into PATH**  
  修复 `setup/auto.ts` 在子进程中无法找到 `register-claude-to` 的问题。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2055)

### 通道与消息传递
- **[PR #2215] feat: wire Discord channels and fix webhook delivery**  
  尽管作者注明错误推送，仍修正了 Discord 通道的 webhook 投递逻辑。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2215)

- **[PR #2251] Add namespacedPlatformId exclusion for DeltaChat**  
  修复 DeltaChat 通道的命名空间 ID 冲突问题。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2251)

### 技能与工具
- **[PR #2266] fix(skills): bump @chat-adapter/* cohort to 4.27.0**  
  升级全量频道安装技能的 chat-adapter 至 4.27.0，解决 Discord 卡片消息重复显示的回归问题。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2266)

- **[PR #2258] feat: /add-ffmpeg-tool**  
  提交了 ffmpeg/ffprobe MCP 服务器技能，支持媒体文件转换。该 PR 被关闭后作者重新提交了 #2261。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2258)

### 整体进展
- 解决了 **3 个已确认的 Bug**（MCP 工具静默丢弃、Discord 通道消息重复、DeltaChat ID 冲突）。
- 推进了 **多通道兼容性**：Discord 消息重复修复已合并，WhatsApp v7 升级与 Telegram 体验优化仍在待合并状态。
- **容器配置安全** 方面，当前无直接修复 PR 关联容器漂移问题 #2257，但已有关注。

---

## 4. 社区热点

### 最活跃讨论：Issue #2234 — 「Can this work with llama.cpp?」
- **投票**: 0 👍 | **评论**: 1 | **状态**: 开放
- **核心诉求**: 用户尝试在同一台机器上通过 `llama-server` 运行非 Anthropic 推理，但 NanoClaw 连接超时，报告 `"Your assistant didn't reply in time."`，尽管 `llama.cpp` 日志显示已响应请求。
- **分析**: 这是对**自定义/本地推理后端支持**的强烈需求信号。当前 `opencode` 提供者仅转发有限环境变量，可能引发类似问题。社区关注度较高，但尚无维护者回复。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/2234)

### 高合并速度 PR：PR #2266 — 「fix(skills): bump @chat-adapter/* cohort to 4.27.0」
- 从修复提出到合并仅不到 24 小时，反映维护团队对**回归性 Bug 的高优先级响应**。作者 @glifocat 同时提交了 #2264 与 #2265 两个关联修复，社区协作模式健康。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2266)

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|----------|----------|------|----------|
| **高** | [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) | 损坏的 `container.json` 在下次容器启动时被静默抹除，导致挂载、MCP 服务器、包、工具权限等配置丢失。 | ❌ 无修复 PR |
| **中** | [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) | 新安装中所有频道技能固定到 `@chat-adapter/*@4.26.0`，该版 Discord 适配器无条件设置 `payload.content = cardToFallbackText(card)`，导致卡片消息内容重复。 | ✅ 已合并 PR #2266 |
| **中** | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) | `send_card` MCP 工具在 Chat SDK 所有通道上静默无操作，因为 broker 的 `deliver()` 未处理 `type: 'card'` 形状。 | ✅ 已合并 PR #2265 |
| **中** | [#2241](https://github.com/qwibitai/nanoclaw/issues/2241) | `add_mcp_server` 注册的工具被 SDK 的 `allowedTools` 过滤静默丢弃，因为静态 `TOOL_ALLOWLIST` 不允许动态命名空间。 | ✅ 已合并 PR #2242 |
| **低** | [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | 连接 `llama.cpp` 超时，但服务端已响应。可能与提供者环境变量、容器网络配置有关。 | ❌ 无修复 PR |

---

## 6. 功能请求与路线图信号

### 高价值需求（已有 PR 提交）
- **[PR #2261] feat(mcp): /add-ffmpeg-tool — ffmpeg/ffprobe MCP 服务器**  
  作者 @CrAzyScreamx 提供了完整的 ffmpeg 集成技能，可用于媒体格式转换、截图、音频提取。此 PR 替代了已关闭的 #2258，说明社区兴趣浓厚。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2261)

- **[PR #2248] feat: per-wiring channel permission (read | write | read+write)**  
  同一作者提出的频道权限粒度功能，允许为每个通道分别设置“只读”、“只写”或“读写”权限。这解决了用户在群聊中可能不希望 AI 自动回复的场景。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2248)

### 可能纳入下一版本的新功能
- **Telegram 设置体验优化** — [PR #2249](https://github.com/qwibitai/nanoclaw/pull/2249) 与 [PR #2246](https://github.com/qwibitai/nanoclaw/pull/2246) 分别改进了“打开 Telegram”卡片显示和增加了 BotFather 可扫描二维码，降低新用户设置门槛。
- **Agent-to-Agent 回复路由修复** — [PR #2267](https://github.com/qwibitai/nanoclaw/pull/2267) 解决了多会话场景下 a2a 回复错误路由到最新会话的“分裂”问题，对多通道部署用户至关重要。

---

## 7. 用户反馈摘要

### 正面反馈（间接）
- **Discord 通道修复**：PR #2266 的快速合并表明社区对 Discord 消息重复问题的不满已得到及时响应。
- **Telegram 设置优化**：用户 @alipgoldberg 从自身运维体验出发（SSH 连接到无 Telegram 客户端的 VM），主动贡献了更清晰的指引卡片和 QR 码，体现了真实使用者对新手引导的关注。

### 负面/痛点反馈
- **本地推理后端支持受阻**：Issue #2234 用户 Kwisss 提出 NanoClaw 无法连接 `llama.cpp`，并明确表示“Claude code 可以无缝工作，但 NanoClaw 不行”。这提示自定义/开源推理后端的兼容性可能是阻挡部分用户迁移的关键障碍。
- **配置数据丢失风险**：Issue #2257 的严重程度高，涉及 `container.json` 静默抹除，但截至今日未有对应的修复 PR 或维护者回复，用户可能面临数据丢失风险。需密切关注。
- **新增频道适配沟坎**：WhatsApp LID 处理（PR #2259, #2260）和 DeltaChat ID 冲突（PR #2251）表明多通道支持的底层基础设施仍在打磨中，早期采用者可能遇到连接稳定性问题。

---

## 8. 待处理积压

### 高优先级待处理 Issue
- **#2234** — 连接 llama.cpp 失败（创建 4 天，0 条维护者回复）  
  [链接](https://github.com/qwibitai/nanoclaw/issues/2234)
- **#2257** — 容器配置静默抹除（严重性高，无关联修复 PR）  
  [链接](https://github.com/qwibitai/nanoclaw/issues/2257)

### 待合并的重要 PR（15 条中值得关注）
- **[#2123](https://github.com/qwibitai/nanoclaw/pull/2123)** — `send_message` 触发重复文本（创建 6 天，无合并）  
  该 Bug 与 #2264 的 Discord 问题类似，但更底层，可能影响所有通道。合并 PR #2266 后，此 PR 应再次被审视。
- **[#2267](https://github.com/qwibitai/nanoclaw/pull/2267)** — Agent-to-Agent 回复路由修复（创建 1 天，无合并）  
  对多会话用户至关重要，建议加速审核。
- **[#2261](https://github.com/qwibitai/nanoclaw/pull/2261)** — ffmpeg MCP 服务器（新功能，社区兴趣浓）
- **[#2248](https://github.com/qwibitai/nanoclaw/pull/2248)** — 频道读写权限控制（有深度使用场景价值）

### 长期搁置风险提示
- 存在多个以 `[follows-guidelines]` 格式提交的 PR（如 #2256），但内容为空或仅含标准模板，暗示可能存在自动化的无效贡献。建议维护团队对这类 PR 设置自动标签或要求检查。

---

*报告生成时间: 2026-05-05 08:00 UTC*  
*数据来源: github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NullClaw项目数据，我已为您生成了2026年5月5日的项目动态日报。

---

# NullClaw 项目动态日报 | 2026年5月5日

## 1. 今日速览

今日NullClaw项目活跃度中等偏上，主要体现在**问题报告（Issues）**和**代码合并（PRs）**的积极流转上。项目发布了新版本 `v2026.5.4`，主要修复了Agent Skills功能并强化了Web技能拉取流程。然而，社区关注的焦点集中在两个“老大难”问题上：一是低资源设备上的网络搜索功能，二是沙箱启动时的探测问题，后者已有明确的PR解决方案。整体来看，项目在稳定性和用户体验上持续改进，但社区对特定功能的痛点依然突出。

## 2. 版本发布

- **版本号**: `v2026.5.4`
- **发布亮点**:
    - **重大修复**: 核心修复了 `skills` 模块，使其支持 **Agent Skills RFC 0.2.0** 规范，并强化了 **Web Skill 拉取流程**，提升了功能的健壮性。
    - **其他内容**: 包含来自 `@DonPrus` 的先前更新（`v2026.4.17`）及其他未完全展示的变更。
- **破坏性变更**: 未明确提及。但由于涉及对 `skills` 模块的底层支持升级（RFC 0.2.0），建议使用了自定义或旧版技能的用户进行兼容性测试。
- **迁移注意事项**: 如果你是技能开发者，请关注 Agent Skills RFC 0.2.0 的规范变化，以确保你的技能在新版本中正常运行。

## 3. 项目进展

今日合并/关闭了2个关键PR，标志着项目向前迈进：

- **[PR #889 - Move GitHub workflows to nullbuilder]**: 已合并。此举将CI/CD工作流迁移到 `nullbuilder` 工具，预示着项目正在优化其自动化构建和发布流程，对长期维护效率是积极信号。
- **[PR #888 - v2026.5.4]**: 已合并。作为版本发布的合并PR，直接推动了新版本的产出。

此外，还有2个待合并的PR（[#885] 和 [#887]），分别涉及搭建数据治理层和修复Zig编译兼容性。

## 4. 社区热点

- **[Issues #871 - [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support]**：虽然创建较早，但仍是今日社区讨论的焦点（5条评论）。用户 `@uMendex` 的反馈获得了社区共鸣，核心争议在于 **无API Key的网络搜索方案** 对低端设备的“不友好”，社区强烈希望项目默认支持直接使用DuckDuckGo。
- **[Issues #882 - sandbox: default to Landlock on Linux, stop probing external tools at startup]**：今日最受关注的新议题（2条评论）。此issue直指沙箱启动时的性能与可靠性问题，作者 `@mark-os` 提出了一个“根治”方案——**默认切换到Landlock**。此举若能实现，将显著提升Linux上NullClaw的启动速度和稳定性。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR # | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | [#871] | **`web_search`在低资源设备上不可用**：依赖Brave API等需要外部Key的方案，对零配置场景不友好。 | 无fix PR |
| **中** | [#882] | **沙箱启动时探测外部工具导致延迟和问题**：`firejail`、`bwrap`等探测过程在特定环境下会失败。 | 有fix思路（Landlock） |
| **低** | [#887] | **Zig v0.16 编译问题**：影响Windows/Linux平台的构建。 | 有**[待合并]**的fix PR |

## 6. 功能请求与路线图信号

- **核心功能请求**:
    - **显示推理过程** ([Issues #886]): 用户 `@darklight9811` 强烈要求增加终端显示任务当前正在做什么的功能（如“思考中”、“正在执行XX”），以解决长耗时任务（如读邮件）时的“黑盒”焦虑。
    - **默认使用DuckDuckGo** ([Issues #871]): 社区普遍希望移除或降低对外部API的依赖。
    - **默认使用Landlock** ([Issues #882]): 来自社区专家的建议，很可能被纳入下一个版本作为底层改进。

- **路线图信号**: **[PR #885 - 新增NullClaw数据治理层]** 是一个“黑马”PR。虽然标记为Draft（草案），但它的出现表明社区正在积极探索**数据隐私与治理**这个高级方向。如果此PR被正式接受，NullClaw将向企业级/安全敏感场景迈出重要一步。

## 7. 用户反馈摘要

- **痛点**:
    - **“黑箱”操作**: 用户执行长任务时，终端无任何反馈，无法判断是否卡死或仍在工作。([#886])
    - **网络搜索门槛高**: 使用默认的`web_search`功能必须配置外部API Key（如Brave），对于想快速尝鲜或使用低端设备的用户来说体验很差，不如DuckDuckGo直接、方便。([#871])
    - **沙箱启动慢**: 项目启动时探测各种沙箱工具，不仅慢，还可能因环境依赖问题导致失败。([#882])

- **使用场景**:
    - 用户提及在本地运行**outlook MCP**，希望NullClaw能自动处理邮件相关的长任务。

## 8. 待处理积压

- **[Issues #871 - web_search低资源设备不可用]**: 此问题从4月25日提出至今，虽获社区关注但仍未有官方FIX PR。考虑到这是用户的核心使用场景之一，建议维护者优先考虑将“支持DuckDuckGo直接搜索”纳入短中期规划，以提升项目对轻量级设备的友好度。
- **[PR #885 - 数据治理层]**: 这是一个来自外部黑客松团队的贡献，当前为“草稿”状态（Draft）。作为一个可能改变项目方向的功能，需要维护者投入精力进行评审，明确其与项目核心目标的关联度。长期未响应可能打击社区贡献者的积极性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目数据生成的 2026-05-05 项目动态日报。

---

# IronClaw 项目动态日报 | 2026-05-05

**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源**：github.com/nearai/ironclaw

## 1. 今日速览

项目今日活跃度极高，特别是 Pull Request (PR) 方面异常繁忙。过去24小时内，共有 **22 条 PR 发生更新**，其中 **9 条已被合并或关闭**，剩余 **13 条正在等待合并**，表明团队正在进行集中的代码整合与功能落地。虽然 Issue 方面仅有2条更新，但均为长期跟踪的“再重写 (Reborn)”架构相关关键议题。总体上，项目正处于一个 **高强度的开发冲刺阶段**，特别是围绕“Reborn”架构的组件和“Abound”演示功能的修复与推进，代码库变动剧烈。

*   **活跃度评估**：🚀 **极高**（PR 密集提交与合并）
*   **开发者情绪**：积极且高效，尤其是核心团队正在推进大规模重组。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日合并/关闭的9个PR标志着一系列重大功能模块的落地，项目整体向前迈进了关键一步。

*   **Reborn 内存子系统 (Memory Substrate) 核心组件落地**：编号 #3181 至 #3185 的一整套PR链被合并到一个主PR #3180 中。
    *   **主要内容**：这完成了 Reborn 架构中原生内存子系统的全部核心逻辑，包括：
        *   原生 Schema 和数据仓库（libSQL, Postgres）的读写、搜索与版本控制功能。
        *   统一的行为契约测试和垂直集成测试，确保了内存后端在不同数据库上的表现一致。
    *   **项目意义**：这是 Reborn 架构的基石之一，为模型会话的长期记忆、状态管理和审计追踪提供了统一且健壮的基础设施。
    *   PR #3181: [feat(reborn-memory): native schema + empty repo wiring](https://github.com/nearai/ironclaw/pull/3181) (CLOSED)
    *   PR #3182: [feat(reborn-memory): native libSQL repository behavior](https://github.com/nearai/ironclaw/pull/3182) (CLOSED)
    *   PR #3183: [feat(reborn-memory): native Postgres repository behavior](https://github.com/nearai/ironclaw/pull/3183) (CLOSED)
    *   PR #3184: [test(reborn-memory): port pure-behavior contract over native repos](https://github.com/nearai/ironclaw/pull/3184) (CLOSED)
    *   PR #3185: [test(reborn-memory): vertical integration through public seams](https://github.com/nearai/ironclaw/pull/3185) (CLOSED)

*   **Abound 演示功能修复与增强**：PR #3241 和 #3244 被合并，用于修复 Abound 演示的特定问题。
    *   **主要内容**：修复了任务（Mission）系统的配置和通知逻辑，使其能为管理员用户配置，并能将通知发送到正确的会话线程。
    *   PR #3241: [Demo/abound fix missions 1](https://github.com/nearai/ironclaw/pull/3241) (CLOSED)
    *   PR #3244: [Demo/abound fix missions 4](https://github.com/nearai/ironclaw/pull/3244) (CLOSED)

*   **其他修复**：
    *   PR #3242: [add mission md file](https://github.com/nearai/ironclaw/pull/3242) (CLOSED) - 添加了缺失的文档文件。
    *   PR #2390: [Fix: default image detail to 'auto' for OpenAI-compatible vision](https://github.com/nearai/ironclaw/pull/2390) (CLOSED) - 修复了与OpenAI兼容提供商使用时，因缺少图像细节参数导致的视觉功能故障。

## 4. 社区热点

今日虽然有大量PR更新，但讨论热度并未体现在数量上，而是集中在几个长期战略性的Issue上。

*   **最受关注 Issue**:
    *   **#3036** `[EPIC] Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses` - 该 Issue 收到了1个👍，是近期讨论的重点。它代表了社区中对声明式、可审计、可版本控制的配置管理能力的迫切需求。
        *   **链接**: [nearai/ironclaw Issue #3036](https://github.com/nearai/ironclaw/issues/3036)

*   **高复杂度 PR（潜在热点）**:
    *   **#1764** `feat: Abound demo — Responses API, credential injection, skills, guardrails` - 这个大型、高风险的 PR 已经活跃了一个多月，尽管评论数未知，但其涉及的“凭证注入”、“技能”、“护栏”等关键功能点，必然是社区关注的热点，因为它直接关系到生产环境下的安全和功能整合。
        *   **链接**: [nearai/ironclaw PR #1764](https://github.com/nearai/ironclaw/pull/1764)

## 5. Bug 与稳定性

今日无新的 Bug 报告 Issue。主要稳定性问题体现在已合并的修复中。

*   **已修复的稳定性 Bug**:
    *   **严重程度**: 中等
    *   **问题**: 使用 OpenAI 兼容提供商时，图像视觉功能完全失效（PR #2390）。
    *   **状态**: ✅ 已合并修复。
    *   **描述**: 由于 `ImageUrl` 缺少 `detail` 字段，导致所有 OpenAI 兼容提供商的图像识别任务都会产生转换错误，这直接影响了依赖该功能的用户和应用。

*   **正在修复的稳定性 Bug**:
    *   **严重程度**: 高
    *   **问题/PR**: **#3157** `fix(engine): inline gate await for Tier 0 + Tier 1 Approval gates` - 引擎在处理需要用户审批的工具时出现错误，表现为Python脚本内抛出 `RuntimeError`，而不是优雅地暂停等待用户响应。这是一个影响用户体验的流程阻断问题。
    *   **状态**: ⏳ 等待合并
    *   **链接**: [nearai/ironclaw PR #3157](https://github.com/nearai/ironclaw/pull/3157)

*   **严重的测试失败（影响CI）**:
    *   **PR**: **#3235** `test(e2e): unblock Live Canary auth lanes after engine-v2 contract change` - 由于引擎 v2 的合约变更，导致关键的“Live Canary”认证测试套件已连续三天失败。团队已发起修复PR，旨在解除CI阻塞。
    *   **状态**: ⏳ 等待合并
    *   **链接**: [nearai/ironclaw PR #3235](https://github.com/nearai/ironclaw/pull/3235)

## 6. 功能请求与路线图信号

*   **Re转生 (Reborn) 架构的持续深化**：
    *   **#3090** `[Reborn] Add ToolSurfaceService and CapabilityCatalog` 和 **#3243** `feat(host-api): runtime policy vocabulary` 等 PR 和 Issue 表明，项目路线图正坚定不移地推进 Reborn 架构。新概念如“工具表面服务”、“能力目录”和“运行时策略词汇”正在被定义和实现，这标志着 IronClaw 正在从一代架构向一个更安全、更模块化、策略驱动的二代架构过渡。
    *   Issue #3090 明确指出“仅负责可见性，绝不授予权限”，体现了对安全原则的清晰设计。

*   **全新凭证签名功能**：
    *   **#3240** `feat(wasm): per-request credential signing for HMAC, EIP-712, NEP-413` (OPEN) 是一个由新贡献者提出的重要功能。它旨在通过 WebAssembly 为工具调用提供更精细的、基于请求的加密凭证签名（支持 HMAC、EIP-712、NEP-413 等标准），这将极大增强与区块链和去中心化应用的交互能力，是一个强烈的未来版本功能信号。

## 7. 用户反馈摘要

由于公开数据中缺乏详细的用户评论，本部分仅能从 Issue 描述中推断。

*   **配置管理的痛点**：从 Issue #3036 (配置即代码) 的描述可以推断，用户（特别是运维人员）目前需要通过编辑 `.env`、JSON 文件、运行时标志等多种方式进行配置，且“无模式、无差异比较、无审计追踪、无版本控制”。这表明当前的配置流程对复杂部署来说是繁琐且易错的，社区的呼声是希望获得一个统一、声明式且可审计的配置方案。

## 8. 待处理积压

以下为值得维护者关注、但今日未有新进展的重要长期任务：

*   **高优先级、长期开放的大规模 PR**:
    *   **#1764** `feat: Abound demo` - 已开放超过一个月，涉及范围极广（XL），风险极高。虽然未在24小时内被评论，但其状态（OPEN）和规模表明它是团队需要持续投入精力解决的“庞然大物”，可能成为下一个版本发布的关键阻碍或核心亮点。
        *   **链接**: [nearai/ironclaw PR #1764](https://github.com/nearai/ironclaw/pull/1764)

*   **有待响应的核心修复 PR**:
    *   **#3157** `fix(engine): inline gate await...` - 如前述，这是一个影响用户体验的 Bug，其修复PR已开放4天。考虑到其对用户审批流程的阻断性，应优先审查和合并。
        *   **链接**: [nearai/ironclaw PR #3157](https://github.com/nearai/ironclaw/pull/3157)
    *   **#3235** `test(e2e): unblock Live Canary auth lanes...` - 由于 CI 线核心测试已失败3天，此PR对于维持项目交付质量和信心至关重要，需紧急处理。
        *   **链接**: [nearai/ironclaw PR #3235](https://github.com/nearai/ironclaw/pull/3235)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的LobsterAI GitHub数据，以下是为您生成的2026年5月5日项目动态日报。

---

# LobsterAI 项目动态日报 | 2026年5月5日

## 1. 今日速览

- **活跃度评估：** 低。过去24小时内，项目无新版本发布，无新Issues开启，社区讨论和贡献活动处于低谷。
- **核心进展：** 今日合并并关闭了2个主要Pull Requests（PR），项目持续在“技能（Skills）”和“文档（Docs）”领域进行微调和修复。
- **Bug修复：** 合并了一个针对Windows平台技能删除可靠性的修复PR，提升了跨平台用户体验。
- **积压关注：** 仍有2个待合并的PR（#1277、#811）处于等待状态，其中包括一个关键的O(1)性能优化PR，已近2个月未获处理。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有2个PR被合并/关闭，标志着项目在技能管理和文档方面取得了小步快跑式的进展。

- **🔀 合并 #1882 - [area: docs, area: skills] feat(skill): upgrade youdaonote skill to 1.0.8**
  - **作者:** liuzhq1986
  - **摘要:** 将“有道笔记”技能升级至1.0.8版本。
  - **意义:** 日常性的技能维护与更新，确保核心技能组件的兼容性和功能正常。
  - **链接:** [PR #1882](https://github.com/netease-youdao/LobsterAI/pull/1882)

- **🔀 合并 #1881 - [area: renderer, area: docs, area: main, area: skills] fix(skills): improve Windows skill delete reliability and import feedback**
  - **作者:** liuzhq1986
  - **摘要:** 此PR解决了一个跨平台痛点：在Windows上删除技能失败的问题。它通过添加一个Windows特定的属性标准化步骤（`attrib -r -s -h`）来减少删除失败，并加强了删除路径的诊断日志，同时为导入操作提供了本地化的成功反馈。
  - **意义:** 提升了项目在Windows平台上的稳定性和用户反馈的清晰度，是一项重要的质量改进。
  - **链接:** [PR #1881](https://github.com/netease-youdao/LobsterAI/pull/1881)

## 4. 社区热点

今日社区讨论活跃度较低。唯一的讨论热点集中在已关闭的Issue #1877上。

- **🔥 讨论热点 #1877 - [CLOSED] openAI 认证不成功,本地的codex是可以正常使用的**
  - **作者:** AK-blank
  - **评论数:** 2
  - **摘要:** 用户报告因地理位置（`unsupported_country_region_territory`）导致OpenAI认证失败，但本地Codex模型可以正常使用。
  - **诉求分析:** 该Issue反映了非核心用户群体在OpenAI服务访问上的障碍，用户期望项目能提供更灵活的认证替代方案或提供更清晰的错误指引。该Issue已被关闭，可能是由于项目无法绕过OpenAI的地域限制，或提供了其他解决方案。
  - **链接:** [Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877)

## 5. Bug 与稳定性

今日无新Bug报告。前期的有效修复（PR #1881）已解决Windows平台技能删除的问题。

- **已修正：Windows技能删除失败 (关联PR #1881)**
  - **严重程度:** 中
  - **问题:** 在Windows上删除已安装的技能时，因权限问题可能导致删除失败。
  - **修复方案:** 通过在执行删除前强制移除文件的只读、系统、隐藏属性（`attrib -r -s -h`）来提升删除成功率，并增强了错误日志以便排查。

## 6. 功能请求与路线图信号

今日无新的功能请求Issues。

- **路线图信号：** 尽管今日无新请求，但长期积压的PR #811（性能优化）是一个强烈的路线图信号。它表明社区（特别是贡献者）有优化核心功能性能的需求，但项目维护者可能面临资源不足或优先级冲突的挑战，导致该优化未被合并。

## 7. 用户反馈摘要

从已关闭的Issue #1877中，我们可以提炼出用户痛点：

- **痛点：服务访问地域限制**
  - **用户场景:** 用户尝试使用OpenAI服务时，因所在国家/地区不被支持而失败。
  - **反馈:** 用户明确表示本地模型（Codex）可以正常工作，暗示了对依赖外部服务不稳定的担忧，以及对本地化/离线能力更强的期待。

## 8. 待处理积压

以下为长期未处理或状态不明确的PR，建议维护团队关注。

- **🟡 PR #1277 - [OPEN] chore(deps-dev): bump the electron group across 1 directory with 2 updates**
  - **创建时间:** 2026-04-02
  - **摘要:** 由dependabot自动创建，提议将Electron框架从v40.2.1升级至v41.5.0，`electron-builder`也跟随更新。
  - **重要性:** **高**。依赖更新不仅包含新特性和性能提升，更重要的是包含了浏览器核心的安全漏洞修复。长期不合并会使项目暴露在已知风险中。
  - **状态:** 已打开34天，无维护者交互。
  - **链接:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

- **🟠 PR #811 - [OPEN] [stale] perf(cowork): 使用索引表优化流式消息更新查找性能从 O(n) 到 O(1)**
  - **创建时间:** 2026-03-25
  - **摘要:** 一项关键的性能优化，将`cowork`（协同）模块中流式消息更新的查找复杂度从O(n)降低到O(1)，对长会话场景下的用户体验至关重要。
  - **重要性:** **中-高**。此优化直接关系到核心功能的性能，但已被标注为“stale”（过时），可能面临代码冲突或已被放弃的风险。
  - **状态:** 已打开41天，无后续讨论或更新。
  - **链接:** [PR #811](https://github.com/netease-youdao/LobsterAI/pull/811)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是根据您提供的 Moltis 项目数据生成的 2026-05-05 项目动态日报。

---

## Moltis 项目动态日报 | 2026年5月5日

### 1. 今日速览

今日项目活动处于低活跃度但高效率的状态。过去24小时内，社区提交了1个关键性Bug报告（涉及并行工具执行导致的Docker名称冲突），并迅速合并/关闭了1个专注于提升CI诊断能力的调试性PR。项目目前无新的版本发布，整体处于问题发现与基础设施优化的稳定迭代周期。

### 2. 版本发布

无

### 3. 项目进展

- **[合并] 增强端到端测试诊断能力 (PR #965)**
  项目核心贡献者 **penso** 的 PR #965 已被合并。该PR主要针对CI环境中偶发的RPC超时问题（30秒超时），通过增强日志记录来定位根因。具体改进包括：记录所有WebSocket RPC的详细日志（方法、耗时、成功/失败状态）、对连接关闭事件提升至警告级别、并将Gateway的标准错误输出通过`tee`保存为`gateway.log`并作为CI构件上传。这一改动为后续解决环境依赖的稳定性问题提供了关键的数据分析基础。
  - **项目健康度信号**: 这表明项目团队正积极解决可复现性差的环境问题，属于对基础设施的重要投资。
  - **链接**: [PR #965](https://github.com/moltis-org/moltis/pull/965)

### 4. 社区热点

- **Issue #964: Docker名称冲突 Bug（唯一活跃议题）**
  由用户 **faevourite** 报告的 Bug 是目前社区唯一活跃的议题。虽然评论数为0，但该问题直接指向了Moltis并行执行核心功能中的一个潜在严重问题。当用户并行调用多个工具时，可能会因为Docker容器命名冲突而导致任务失败。这反映出用户对高并发、稳定性的实际需求，而当前项目在资源命名隔离方面可能存在盲区。
  - **链接**: [Issue #964](https://github.com/moltis-org/moltis/issues/964)

### 5. Bug 与稳定性

- **严重 Bug：并行工具执行中的 Docker 名称碰撞**
  - **编号**: #964
  - **严重程度**: **高**。该问题直接导致并行执行功能失效，影响用户利用Moltis进行多任务处理的核心场景。
  - **状态**: 已报告，待复现与修复。目前无关联的修复PR。
  - **用户描述**: 用户已确认使用最新版本，并搜索了现有议题，排除了重复报告的可能。问题在会话场景下发生，但未提供完整上下文。
  - **链接**: [Issue #964](https://github.com/moltis-org/moltis/issues/964)

### 6. 功能请求与路线图信号

今日无新增功能请求。从已关闭的 PR #965 可看出，当前项目团队的工作重点倾向于**提升CI可靠性和可观测性**，这是为后续更复杂功能开发（如支持并行执行）铺平道路的必要步骤。

### 7. 用户反馈摘要

- **用户痛点**: 用户 `faevourite` 反映，在核心的“并行工具执行”功能中遇到了阻碍使用的Bug。这暗示Moltis在资源管理和隔离方面仍存在未覆盖到的边界情况。

### 8. 待处理积压

今日无长期未响应的重大积压问题。所有活跃的Issues和PRs均在24小时内得到了创建或处理。

---
**总结**: 今日项目状态稳定，核心聚焦于解决一个关键并发Bug和优化CI基础设施。项目健康度良好，但对Issue #964的快速响应与修复将是未来几天观察的重点。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-05)

**数据统计周期**：2026-05-04 至 2026-05-05  
**项目仓库**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览

CoPaw 项目今日保持 **中度活跃** 状态。过去24小时内，社区提交了13条 Issue 和10个 PR，其中 **首次贡献者（first-time contributors）发起了4个高质量 PR**，表明项目的外部吸引力和社区健康度良好。Issue 侧重点关注 **安全加固**（非回环绑定的网关认证）、**交互体验优化**（模型添加流程简化）及 **稳定性问题**（流式模型工具循环调用、会话中断失效）。无新版本发布，但多个之前提交的 PR 得到合并/关闭，项目持续推进。

---

## 2. 版本发布

*（无新版本发布，本节省略。）*

---

## 3. 项目进展

过去24小时内，共有 **4 个 PR 被合并/关闭**，均为长期积累的修复：

| PR 编号 | 标题 | 状态 | 影响 |
|--------|------|------|------|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | feat(chat): generate session titles asynchronously via LLM | ✅ **已合并** | 会话标题不再只是“用户消息前10个字符”，改为 LLM 异步生成，提升 UI 体验（对应 Issue #2553 的部分建议） |
| [#1508](https://github.com/agentscope-ai/QwenPaw/pull/1508) | fix(provider): add full dependencies to Docker image | ✅ **已合并** | Docker 镜像补全依赖，解决因遗漏7个第三方包导致的运行时崩溃 |
| [#763](https://github.com/agentscope-ai/QwenPaw/pull/763) | fix(imessage): surface channel errors to Console UI and CLI | ✅ **已合并** | iMessage 渠道崩溃不再静默，Console UI 和 CLI 侧能显示错误状态 |
| [#756](https://github.com/agentscope-ai/QwenPaw/pull/756) | fix(providers): use max_completion_tokens for OpenAI connection test | ✅ **已合并** | 修复 Azure OpenAI GPT-5/o-series 模型连接测试因参数废弃而失败的问题 |

**进度小结**：项目在 **渠道稳定性、Docker 部署兼容性、UI 智能化** 三个方向均有关键合并，整体向前迈进了坚实一步。

---

## 4. 社区热点

今日 **评论数最多、互动最活跃** 的议题如下：

| 编号 | 标题 | 评论数 | 受众关注点 |
|------|------|--------|-----------|
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | [Bug]: 打包windows版本 conda-pack <=0.7.1 与 pip install qwenpaw[full] 冲突 | 3 | Windows 打包流程中 conda-pack 版本限制导致的构建脚本崩溃，影响 CI/CD |
| [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | [Bug]: 开启HEARTBEAT.md时，网络中断后无法自动重连 | 2 | 生产环境网络波动下 agent 自动恢复机制失效，需手动重启 |
| [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | Tool-enabled HTTP gateway is unauthenticated by default | 1 | **安全热点**：HTTP 网关默认无认证，非回环绑定将暴露 `execute_shell_command` 等高风险工具 |

**分析**：社区关注点分化明显——中文用户侧重部署稳定性（打包、网络重连），英文/国际化用户更关注安全原则。`#4037` 的安全问题虽仅1条评论，但属 **高危设计缺陷**，建议维护者优先考量。

---

## 5. Bug 与稳定性

当日报告的 Bug 按严重程度排列如下：

| 严重程度 | Issue # | 标题 | 是否有 Fix PR | 备注 |
|---------|---------|------|--------------|------|
| 🔴 **高危** | [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | HTTP gateway 默认无认证，非回环绑定时可被远程调用 | ❌ 无 | 建议紧急拦截：默认禁止非 `127.0.0.1` 绑定，除非设置 `QWENPAW_AUTH_ENABLED` |
| 🟠 **中危** | [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | 流式模型（MiMo/DeepSeek）导致 ReAct 循环重复调用工具 | ❌ 无 | 仅在特定模型触发，推测是 streaming 响应处理在 ReAct loop 中被重复消费 |
| 🟠 **中危** | [#4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) | MCP tool execution_timeout 被硬编码 30s 绑定到 HttpStatefulClient.timeout | ❌ 无 | 用户配置文件中的 execution_timeout 不生效 |
| 🟡 **低危** | [#4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) | 会话中断偶发失效 + skills Python 解释器未命中虚拟环境 | ✅ [#4028](https://github.com/agentscope-ai/QwenPaw/pull/4028) | 已有 PR 修复，补充了 stop 匹配逻辑和 venv 注入 |
| 🟡 **低危** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md 导致网络恢复后无法自动重连 | ❌ 无 | 关闭该功能可临时规避，需排查 heartbeat 模块的 reconnection 逻辑 |
| ⚪ **数据缺失** | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | 输入框卡顿严重 | ❌ 无 | 用户未提供复现步骤或版本信息，待补充 |

---

## 6. 功能请求与路线图信号

今日新增功能请求中，**可能纳入下个版本** 的候选：

| Issue # | 标题 | 社区热度 | 纳入概率 |
|---------|------|---------|---------|
| [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) | Add Vertex AI Gemini provider | 🔥 中等 | **高** —— 与现有 Gemini API 支持互补，且 GCP 用户需求明确 |
| [#4031](https://github.com/agentscope-ai/QwenPaw/issues/4031) | 多 Agent 协同上下文丢失与轮询阻塞 | 🔥 高 | **高** —— 触及多 agent 协同的核心架构缺陷，若确认将直接影响协作能力 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 添加模型步骤过多（5次点击+3次页面跳转） | 🔥 中等 | **中高** —— 属于 UX 层面的高频痛点，已有类似 Issue #2553 的优化先例 |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) | 支持一次性的 cron job（`--at` 参数） | 🔥 低 | **中** —— 社区反馈较少，但对提醒类场景很重要 |
| [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) | 有计划借鉴 Hermes 机制升级 QwenPaw？ | 🔥 低 | **低** —— 提问模糊，未指明具体借鉴点，需进一步澄清 |

**路线图信号**：`#4031` 和 `#4030` 被标记为 [enhancement]，分别指向 **多 Agent 协同架构升级** 和 **云厂商扩展**，符合 CoPaw 多元化/企业级部署的演进方向。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户声音：

**正向反馈**：
- **PR #3829（会话标题自动生成）** 作者 BLUE0818 在 #2553 中表示：“这两个改进（模型列表排序 + 会话标题生成）虽非关键，但显著提升便利性，让 Copaw 成为更完整的项目。”
- **PR #4009（巴西葡萄牙语支持）** 首次贡献者 Jailtonfonseca 自发提交了 Console 和官网的完整翻译，表明国际化社区正在自然成长。

**痛点反馈**：
- **wfeng007**（#3988）：“打包程序缺乏子进程 stdout/stderr 输出到主进程，排障困难”——编译打包流程的调试体验待提升。
- **jwwdy**（#4023）：“输入框卡顿非常厉害！”——边缘场景下 UI 响应性能需排查（可能为长上下文/大量消息历史导致）。
- **gooqhy**（#4017）：“必须在没有 HEARTBEAT 模式才能运行，一开启就崩溃，无法自动恢复”——影响生产部署的稳定性信任度。
- **52sanmao**（#4036）：“添加模型需要‘设置→找到 provider→填 Key→回到列表→点 Models→添加→回到列表’——步骤过多”——直接批评了非优化前的 UX 流程（注：此问题在 #3829 合并后已部分缓解）。

---

## 8. 待处理积压

| 类型 | 编号/标题 | 上次更新 | 状态 | 建议 |
|------|-----------|---------|------|------|
| **PR 阻塞** | [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) [WIP] 使用 Win32 API 设置 Windows 任务栏图标 | 12天前（2026-04-23） | 🟡 [OPEN] [Under Review] | 处于 WIP 状态，自 4/23 以来无新推进。Windows 桌面端用户体验问题，建议 reviewer 给出具体 review 意见或协助完成 |
| **PR 评审** | [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) feat(security): write_file 防覆盖非空文件 | 1天前 | 🟡 [OPEN] [first-time-contributor] | 安全类 PR，建议尽快评审后合并，防止因文件覆盖导致的数据丢失 |
| **PR 评审** | [#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) feat(doctor): add Windows environment diagnostics | 1天前 | 🟡 [OPEN] [Under Review] | Windows 用户诊断利器，与 #4026 同为首次贡献者，建议尽快响应 |
| **PR 评审** | [#4028](https://github.com/agentscope-ai/QwenPaw/pull/4028) fix(chat,shell): resolve stop mismatch and enforce workspace venv | 1天前 | 🟡 [OPEN] [first-time-contributor] | 修复 #4027 两个稳定性 bug，对应 PR 已提但尚未合并 |

---

**总结**：CoPaw 项目处于 **稳定迭代+社区增长期**。安全加固（#4037）和流式模型兼容性（#4034）是当前最需关注的技术债；首次贡献者的活跃（4/10的PR）是积极的社区信号，但需加快 PR 评审速度以避免挫伤外部贡献热情。下阶段建议优先处理 HTTP 网关认证、MCP 超时配置、以及多 Agent 上下文连续性三个高影响议题。

*项目日报生成完毕，数据截止于 2026-05-05 UTC。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为ZeroClaw项目的AI智能体与个人AI助手领域开源项目分析师，以下是为您生成的2026-05-05项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-05-05

## 1. 今日速览

项目今日活跃度极高，社区互动频繁。过去24小时内，Issue与PR更新总数达100条，显示出强大的社区驱动力。**核心基础设施与开发者体验**仍是团队投入的重点，多个关于配置、安全性和网关的长期Issue取得实质性进展，并有相关PR被合并。值得注意的是，一个**关于air-gapped执行模式**的新功能RFC被提出，标志着项目在安全架构上的前瞻性探索。版本发布方面无新动作，项目正处于一个密集的代码合并与重构周期中。

- **活跃度评估**: 非常高
- **核心关注点**: 配置系统健壮性、安全性（加密与隔离）、开发者工具、网关协议。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有多项关键PR被合并，推动项目在多方面取得进展：

- **配置系统健壮性提升**：
    - **PR #6317**: 修复了在配置中，当用户自定义的provider名称包含点号（如`providers.models.my-llama`）时，`config set`操作会错误解析key的问题。这解决了Onboarding流程中的一个关键阻塞点。
    - **PR #6379**: 修复了`enc2:`加密值解密失败时，错误信息被隐匿的问题。现在会明确提示`.secret_key`文件不匹配，极大地改善了调试体验，解决了长期困扰用户的“All providers/models failed”模糊错误。
- **渠道与网关功能增强**：
    - **PR #6374**: 为ACP（Agent Communication Protocol）通道实现了`session/cancel`通知，允许ACP客户端取消正在执行的请求，补齐了协议功能，提升了用户体验。
- **开发者体验优化**：
    - **PR #6170**: 同步了法语、日语、西班牙语的文档翻译，并新增了简体中文（zh-CN）支持，降低了非英语用户的使用门槛。
    - **PR #6179**: 实现了基于Web的Onboarding配置功能，通过网关的`/api/config/*` CRUD接口，使得Dashboard、CLI和第三方工具都能统一管理配置，是迈向更友好用户体验的重要一步。
- **原生集成的修复与优化**：
    - **PR #6116**: 修复了Jira模块对Jira Server/Data Center的支持问题，使其能正确使用API v2和Bearer Token认证，解决了企业用户的痛点。
    - **PR #6380**: 实现了Groq provider的按profile配置原生工具调用支持，用户可以为支持原生调用的模型单独开启此功能，不再一刀切地禁用。

## 4. 社区热点

- **[Issue #6123]** 👑 **最热门**：`[Bug]: default_model issue on fresh install`
    - **链接**: [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)
    - **分析**: 该Issue以16条评论位居榜首，成为今日社区讨论的焦点。用户报告了全新安装后，`default_model`配置错误导致agent无法启动。问题被标记为S1严重级别（工作流阻塞），涉及provider配置和Onboarding流程。这暴露了项目在为新用户提供“开箱即用”体验方面的不足，尤其是在多容器、多服务（如Ollama）的复杂部署场景下。社区的广泛关注表明，简化初始配置是当前最迫切的用户需求。
- **[Issue #5878]** **高关注度**：`release: v0.7.5 milestone tracking`
    - **链接**: [Issue #5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)
    - **分析**: 作为v0.7.5发布的里程碑追踪Issue，持续获得6条评论。它代表了社区对下一个正式版本的期待。社区讨论主要集中在哪些功能/修复应该被纳入此版本，是项目进展的“风向标”。

## 5. Bug 与稳定性

今日报告和活跃的Bug主要集中在新用户配置、渠道集成和安全性方面。

- **S1 - 工作流阻塞**：
    - **[#6123]** `default_model issue on fresh install`：核心配置问题，影响所有新用户。**无直接fix PR**，但相关的配置路径修复PR [#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317) 已合并，可能缓解此问题。
    - **[#6180]** `[Bug]: Cannot use the services provided by llama-server`：特定于llama-server提供商的兼容性问题，导致agent无法工作。**无直接fix PR**。
- **S2 - 行为降级**：
    - **[#6153]** `[Bug]: Matrix: voice transcription failed`：Matrix频道中的语音转文字功能在Element客户端上失败。**无直接fix PR**。
    - **[#5244]** **(已关闭)** `[Bug] Dashboard: Channels tab crash and Overview render error`：该关于Dashboard崩溃的旧Issue最终在今天关闭，表明其底层问题可能已通过其他修复得到解决。
- **S3 - 次要问题**：
    - **[#6157]** `[Bug]: Nextcloud Talk use correct bot message API`：Nextcloud Talk频道使用了错误的API端点，导致消息发送失败。**无直接fix PR**。
    - **[#6156]** `[Bug]: Nextcloud Talk model request is canceled after ~5sec`：Nextcloud Talk中请求慢速LLM时会被5秒超时取消。这是一个UX问题，需要调整超时策略。**无直接fix PR**。
- **回归/系统性修复**：
    - **[#6379]** **(已合并)** `fix(config/secrets): surface .secret_key mismatch`：修复了一个重要的诊断回调问题，解决了加密失败后错误信息不明确的长期Bug。这是一个稳定性提升。

## 6. 功能请求与路线图信号

今日涌现出几个值得关注的功能请求，反映了社区的长期期望。

- **安全架构升级**：
    - **[#6293]** `[Feature]: Air-gapped execution mode`：提议将ZeroClaw拆分为离线执行和在线代理两个隔离进程，通过Unix Socket通信。这是一个**重大的架构变更RFC**，旨在解决高度安全环境下的数据隔离问题。如果被采纳，将成为v1.0路线图上的一个里程碑。**无直接fix PR**。
- **用户体验优化**：
    - **[#6378]** `[Feature]: Discord Bot respond only in specific Discord channels`：用户希望为Discord Bot增加按频道限制响应的功能，这与Matrix等渠道的`allowed_rooms`模式一致。这是一个清晰的、小而美的功能需求，很可能被快速接受。**无直接fix PR**。
    - **[#6128]** `skills: add #[serde(deny_unknown_fields)] to SkillMeta`：通过Rust的序列化特性，在解析技能元数据时静默忽略拼写错误字段。这是一个开发者体验优化，能显著降低技能开发者的调试成本。**无直接fix PR**，但已标记为`good first issue`。
- **核心功能激活**：
    - **[#6182]** `[Feature]: Re-activate HMAC tool receipts`：要求重新激活HMAC工具收据功能，该功能的加密核心代码已存在，但运行时线路被剥离。社区和开发者都希望“文档中已描述”的功能能真正生效。关联的 **[PR #6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214)** 已为此功能创建。
- **配置管理现代化**：
    - **[#6053]** `[Feature]: zeroclaw config set/init support for dynamic map entries`：要求`zeroclaw config`命令能直接操作`providers.models.<name>`等动态映射字段，而不是依赖手动编辑TOML文件。这是CLI工具能力的一个重要补充。

## 7. 用户反馈摘要

- **痛点**：
    - **“首次配置地狱”**：[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)、[#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) 和 [#6364](https://github.com/zeroclaw-labs/zeroclaw/issues/6364) 均指向新用户在配置自定义Provider或首次安装时遇到的严重阻塞问题。用户希望“开箱即用”，或者至少能得到清晰、友好的错误引导。
    - **“错误信息太模糊”**：[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) 和 [#6205](https://github.com/zeroclaw-labs/zeroclaw/issues/6205) 中，用户抱怨当发生错误时（如加密失败或provider未找到），系统只显示“All providers/models failed”，完全没有提供任何诊断线索，让排查异常困难。
- **满意点**：
    - **社区驱动开发**：许多Issue（如[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)、[#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)）由社区成员发起，并得到了维护者的积极响应和讨论，体现了社区驱动的开发模式。
    - **对企业用户的支持**：[#5613](https://github.com/zeroclaw-labs/zeroclaw/issues/5613) 和 [#6116](https://github.com/zeroclaw-labs/zeroclaw/issues/6116) 等关于Jira Server认证的修复和讨论，表明项目正在积极解决企业级用户在使用私有化部署工具时遇到的接入问题，这一点获得了用户的认可。

## 8. 待处理积压

以下Issue和PR已标记为关键（P0/P1），但状态长期停留在`blocked`或`needs-maintainer-review`，需要核心维护者介入。

- **[#5415]** 👑 **重要安全风险**：`[Bug]: Context spillage from chat to schedule` （S0级别，数据泄露/安全风险）。Issue指出聊天上下文可能意外泄露到定时任务中。该Issue已存在近一个月，状态为`blocked`，需要维护者紧急确认原因并协调资源解决。
- **[#6293]** `[Feature]: Air-gapped execution mode with companion daemon` (标注`needs-maintainer-review`)。作为一个重大的架构RFC，它需要核心维护团队提供初步反馈，以决定是否将其纳入未来路线图，避免社区开发者投入无回报的精力。
- **[#6182]** `[Feature]: Re-activate HMAC tool receipts` (标注`status:in-progress`)。虽然有关联PR [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) ，但该PR本身也处于Open状态。这个功能在文档中已被描述为已实现，但其实际缺失状态已持续超过一周，可能影响社区对项目交付能力的信心。
- **[#6192]** `fix(gateway): target paircode retrieval to running instance` (标注`needs-author-action`)。PR创建者未对审查意见做出回应，导致PR被卡住。这是一个有用的修复（特别是对于多实例部署），维护者可能需要跟进或接管。

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*