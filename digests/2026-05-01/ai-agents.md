# OpenClaw 生态日报 2026-05-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-01 04:53 UTC

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的OpenClaw GitHub数据生成的2026年5月1日项目动态日报。

---

# OpenClaw 项目日报 | 2026-05-01

## 1. 今日速览

项目今日活跃度极高。过去24小时内，Issue和PR的更新总量均达到500条，但展现出典型的“高关闭、低开放”特征：**Issue关闭率高达81.2%**（406/500），而PR的**待合并积压率高达94.6%**（473/500）。这表明社区在问题响应和闭环方面效率很高，但代码审查与合并流程存在显著瓶颈。今日发布了5个版本（均为v2026.4.29系列），核心功能更新集中在消息与自动化领域。总体来看，项目健康度良好，社区活跃，但PR积压是需要重点关注的健康度风险指标。

- **活跃度评估**：🔥 极高
- **总体健康度**：✅ 良好（Issue处理高效，PR合并成主要瓶颈）

## 2. 版本发布

今日发布了 **5个新版本**，均为 **v2026.4.29** 系列（包括1个正式版和4个Beta版）。

**核心更新内容 (Highlights):**
- **消息与自动化增强：** 默认启用了 `active-run steering`（主动运行导向），强制 `visible-reply`（可见回复）机制，为生成的子代理添加路由元数据，并为心跳传递的提醒引入了可选的跟进承诺。
- **内存增强：** 更新说明提到“Memory grows i…”，暗示内存管理或存储能力得到了扩展（原文截断，具体细节需参考完整Release Notes）。
- **致谢贡献者：** 感谢 @vincentkoc, @scoootscooob, @samzong 和 @vignesh07 的贡献。

**破坏性变更与迁移注意事项：**
- 暂无明确声明。但 `active-run steering` 和 `visible-reply enforcement` 的默认启用，可能会改变现有自动化流程或消息发送行为。**建议用户在升级后密切关注消息投递和代理行为的变化，并根据需要调整配置。**

## 3. 项目进展

尽管PR合并数量较少（27条），但仍有一些重要的功能推进和修复工作值得关注：

- **捆绑运行时依赖修复（#75183）：** 这是一项维护工作，旨在简化和统一插件运行时的依赖修复流程，让npm/pnpm工具链自行处理依赖收敛，提升了项目的可维护性。
- **Discord通道稳定性提升（#75363）：** 该PR引入了类似“Carbon”的Discord REST请求处理通道，增加了对发送负载的校验、成员请求意图检查和非正常会话的抖动处理，旨在增强Discord集成的健壮性。
- **Codex集成优化（#75308）：** 倾向于使用Codex原生的工作区工具，以解决模型在有两个不同方式操作工作区时可能出现的卡死问题。这体现了对特定Agent集成体验的精细化打磨。
- **代理验证命令（#73438）：** 新增了 `openclaw proxy validate` 命令，允许操作员在正式使用前对出站代理进行预检，提升了网络配置的排错能力。
- **内存嵌入重试机制（#75317）：** 为内存系统的嵌入操作增加了对瞬时网络失败的自动重试能力，提高了系统的鲁棒性。

**总结：** 项目正在向提升系统稳定性、可维护性和特定集成（如Codex、Discord）的体验方向稳步前进。

## 4. 社区热点

今日讨论最激烈的问题主要集中在回归性Bug和阻塞性问题：

- **[Bug]: WhatsApp 通道消息投递失败（#45474）** (评论: 14) - 这是一个回归Bug，WhatsApp通道虽显示为“已链接”和“OK”，但用户消息无法投递，并伴随持续的440/401重连循环。反映了用户对核心通讯渠道稳定性的高度关注。
- **[Bug]: OpenRouter模型启动超时（#53639）** (评论: 11) - 使用OpenRouter模型时，启动阶段因获取模型定价信息超时而失败。这直接影响了用户使用第三方模型的体验。
- **[Bug]: 工具调用时出现“旁白”文本（#45271）** (评论: 10) - 另一个回归Bug，模型在2026.3.7版本后，总是在调用工具前输出一段“旁白”文本，破坏了对话的流畅性和预期输出格式。
- **[Bug]: 网关重复注入消息（#58443）** (评论: 8) - 当前为开放状态。网关会将同一条入站消息多次注入会话，导致代理重复回复。这是一个影响用户体验的严重行为问题。

**用户诉求分析：** 社区对 **稳定性** 和 **回归问题** 最为敏感。WhatsApp、Telegram等核心通道的功能正常是用户信任的基石，任何回归都会引发大量讨论。同时，与LLM交互的核心逻辑（如工具调用）出现偏差，会严重损害用户对AI助手“智能性”的感知。

## 5. Bug 与稳定性

当日报告的Bug和回归问题频率很高，按严重程度排列如下：

**严重/阻塞性 (Critical/Blocker):**
- **WhatsApp 消息投递失败 (#45474)** - 回归Bug，消息无法送达。
- **网关重复注入消息 (#58443)** - 导致重复回复，问题当前仍为开放状态。
- **WhatsApp Web 440会话冲突循环 (#48390)** - 导致WhatsApp连接陷入“重启-冲突-死循环”，影响所有出站消息。

**高优先级 (High Priority):**
- **Ollama 思考参数被强制关闭 (#73366)** - 回归Bug，影响使用Ollama模型进行推理的用户。
- **Telegram-only 网关CPU 100% (#73647)** - 回归Bug，严重影响单通道部署场景的服务器资源。
- **ACP 运行时挂起 (#51345)** - `acp` 运行时启动后无输出，直至超时，完全阻塞了子代理的使用。
- **System Prompt 顺序破坏前缀缓存 (#40256)** - 导致本地模型推理速度大幅下降(8-16倍)。
- **飞书 (Feishu) 插件导致网关崩溃 (#48066)** - 不仅是使用工具时，插件加载即崩溃。
- **Discord DM 消息被重复处理 (#73441)** - 用户发送一条消息，代理回复两次。

**已有修复PR的Bug:**
- **捆绑运行时依赖修复 (#75183)：** 针对多个与插件和运行时依赖相关的潜在/已存在问题。
- **Discord 消息动作令牌解析 (#75424)：** 当 token 配置为 SecretRef 时，修复了 Discord 消息动作处理失败的问题。

## 6. 功能请求与路线图信号

用户提出的新需求，反映了项目未来可能的发展方向：

- **多代理内存共享 (#46542)：** 用户要求建立跨Agent的共享内存存储，实现文档、知识的共享。已有相关PR在开放中，这表明 **“多Agent协作”** 是社区最期待的核心特性之一。
- **WebChat 文件上传/下载 (#47933)：** 为Web聊天界面增加文件传输能力，让部署在云端的OpenClaw能处理完整的文件交互。
- **每个Agent独立的上下文压缩配置 (#57174)：** 用户希望在拥有多个Agent时，能为不同角色的Agent配置不同的上下文压缩策略，以优化性能和内存。这反映了项目向更复杂、更专业的多Agent场景演进的需求。
- **引入Claude Code的多层压缩架构 (#58398)：** 用户提议借鉴Claude Code的开源代码，改进OpenClaw的上下文压缩机制，以处理更长的上下文和更复杂的任务。
- **防止误触“/new”会话重置 (#45800)：** 用户要求在WebChat UI中对“新建会话”操作增加确认对话框，以防止误操作导致上下文丢失。

**路线图信号：** 用户需求强烈地指向 **多Agent协作**、**更丰富的交互（文件传输）** 和 **更深度的能力（采纳外部成熟架构）**。

## 7. 用户反馈摘要

从Issue讨论中提炼的真实用户声音：

- **“自从升级到2026.3.7后，我的模型总是在调用工具前唠叨一遍，这太烦人了。”** - 来自 #45271，对AI行为退化的普遍不满。
- **“WhatsApp显示已链接，但消息就是发不出去，只看到一个勾。日志里全是440/401错误。”** - 来自 #45474，对核心通讯功能故障的焦虑和挫败感。
- **“我们的OpenClaw配置了Feishu，现在只要加载插件网关就崩溃，所有服务都停了。”** - 来自 #48066，插件崩溃导致整个服务不可用的严重场景。
- **“我希望WebChat能直接传文件，不然在云端部署OpenClaw，数据交换还得走别的路子，太不完整了。”** - 来自 #47933，对功能完备性的明确需求。
- **“`openclaw doctor`报告Telegram未配置，但我的Telegram明明在用。这个诊断工具太容易误导人了。”** - 来自 #44539，对诊断工具准确率的质疑。

## 8. 待处理积压

以下为一些长期未响应或更新的重要Issue和PR，提醒维护者关注：

- **[Issue #39188] bug: parseLaunchctlPrint 接受 PID 0:** 已在3月7日被标记为“陈旧”（stale），但该Bug可能导致macOS守护进程状态监控出现假阳性。
- **[PR #25295] feat(mattermost): 添加编辑和删除消息动作:** 该PR创建于2月24日，至今仍为开放状态。若此功能被堵在审查流程中，会影响Mattermost渠道的用户体验。
- **[PR #23096] feat(secrets): 添加Bitwarden/Vaultwarden密钥提供者:** 这是一个重要的基础设施特性，但由于是长期未合并的“陈旧”PR，可能已被忽略。Bitwarden是广泛使用的密码管理器，此功能可显著提升OpenClaw的密钥管理安全性。
- **[PR #41624] fix(docker): 更改缓存目录所有权:** 解决Docker部署中的一个具体文件权限问题。虽小但影响Docker用户。

**建议：** 维护团队应优先审查大且“陈旧”的PR（如#23096, #25295），以明确其方向（是应被合并、关闭还是需要进一步工作），避免社区贡献者的努力被无限期搁置。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域资深技术分析师，现根据您提供的2026-05-01各项目动态摘要，为您呈上横向对比分析报告。

---

# 个人AI助手开源生态横向对比分析报告 (2026-05-01)

## 1. 生态全景

当前个人AI助手与自主智能体开源生态呈现出 **“核心平台领跑、功能深度与广度并行扩张”** 的强劲态势。以OpenClaw为首的成熟项目正面临**代码审查与合并效率瓶颈**，而新兴项目如IronClaw则通过**激进的重构**（如`IronClaw Reborn`）寻求技术突破。生态整体的技术焦点集中在**多Agent协作、通道稳定性、安全加固**以及**从“可用”向“好用”的用户体验打磨**上，这揭示了各大项目已跨越基础功能验证阶段，正向**生产级部署与复杂任务处理**迈进。

## 2. 各项目活跃度对比 (2026-05-01)

| 项目名称 | Issues 数 (过去24h) | PR 数 (过去24h) | 今日版本发布 | 总体健康度 | 活跃度阶段 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (更新) | 500 (更新) | 5个 v2026.4.29 | ✅ 良好，PR积压严重 | 成熟活跃期 |
| **NanoBot** | 10 | 25 | 无 | ✅ 良好，社区贡献积极 | 快速迭代期 |
| **Hermes Agent** | 50 | 50 | v0.12.0 “Curator” | ✅ 优秀，核心修复迅速 | 稳定功能扩展期 |
| **PicoClaw** | 36 | 35 | v0.2.8 | ✅ 良好，合并效率待提升 | 功能密集开发期 |
| **NanoClaw** | 8 | 47 | 无 | ✅ 良好，安全修复高效 | 安全与稳定性强化期 |
| **NullClaw** | 7 | 27 | 无 | ✅ 良好，长期需求集中交付 | 功能交付高峰 |
| **IronClaw** | 高 (未明确) | 高 (未明确) | 无 | ⚠️ 活跃但存在不稳定风险 | 大规模架构重构期 |
| **LobsterAI** | 0 | 9 (已关闭) | 无 | ✅ 优秀，稳定性打磨期 | 质量巩固与体验优化期 |
| **Moltis** | 5 (新) | 18 (合并/关闭) | `20260430.01` | ✅ 良好，交付能力强 | 爆发式功能更新期 |
| **CoPaw** | 28 | 13 | v1.1.5.post1 | ✅ 良好，渠道修复迅速 | 稳定性与渠道修复期 |
| **ZeptoClaw** | 0 | 0 | 无 | 不适用 | 休眠/停滞期 |
| **TinyClaw** | 0 | 0 | 无 | 不适用 | 休眠/停滞期 |
| **ZeroClaw** | 50 | 50 | v0.7.4 | ✅ 良好，新手引导需关注 | 发布后稳定期 |

*(注：IronClaw 未提供明确数字，根据“极高”活跃度评估；LobsterAI 今日无新Issue，但多PR合并)*

## 3. OpenClaw 在生态中的定位

**OpenClaw** 作为行业**核心参照项目**，其生态定位清晰而稳固：

- **优势**:
    1.  **社区规模与成熟度**: 以每日500条Issue/PR的活动量级，远超其他项目，社区是生态中最庞大、最活跃的。这得益于其最早布局和完善的基础设施。
    2.  **问题闭环效率**: 81.2%的Issue关闭率表明其问题响应和处理体系极其高效，这是大型项目管理的关键能力。
    3.  **功能广度**: 从Agent内存到通道集成（Discord、WhatsApp），从工具调用到自动化（`active-run steering`），覆盖了AI助手所需的核心功能栈。

- **技术路线差异**:
    - **与IronClaw的`Reborn`架构对比**: OpenClaw更倾向于**渐进式增强**，通过修复、优化现有模块（如Discord通道、Codex集成）来演进。而IronClaw则选择**革命性重构**，从底层运行时（Host Runtime）开始重塑，风险更高，但可能带来更佳的架构统一性和扩展性。
    - **与Hermes Agent的`Curator`版本对比**: Hermes的`Curator`强调**自主维护**，而OpenClaw虽也有内存、自动化增强，但更侧重于**外部集成**和**开发者可控性**（如`proxy validate`命令）。

- **社区规模对比**: 在所有报告中，OpenClaw的活跃度是断层式领先的。作为对比，Hermes Agent、ZeroClaw同样有50个Issue/PR，是第二梯队的代表，但相比OpenClaw的500仍有数量级差距。社区规模与生态影响力直接相关。

## 4. 共同关注的技术方向

生态内多个项目不约而同地聚焦于以下方向：

1.  **多Agent/会话协作**:
    - **OpenClaw**: `多代理内存共享 (#46542)` 呼声最高。
    - **CoPaw**: `强化多智能体团队协作 (#3987)` 功能请求。
    - **ZeroClaw**: `多代理UX体验设计 RFC` 讨论。
    - **IronClaw**: `AgentLoopDriver` 定义多种Agent交互模式。
    - → **趋势**: 从单一Agent走向多Agent协作、内存共享和复杂任务调度是明确的进化方向。

2.  **渠道稳定性与安全**:
    - **OpenClaw**: 集中修复WhatsApp、Telegram通道回归Bug。
    - **NanoBot**: 修复DingTalk SSRF漏洞、Matrix空消息Bug。
    - **CoPaw**: 修复企业微信通道“Thinking...”卡死、双重重连竞态问题。
    - **NanoClaw**: 修复容器命令注入、路径遍历等高危安全问题。
    - → **趋势**: 通道作为AI助手的“神经末梢”，其稳定性和安全性是用户信任的基石。几乎所有项目都在此投入大量精力。

3.  **用户体验(UX)打磨**:
    - **Hermes Agent**: TUI交互体验重构呼声高。
    - **Moltis**: 集中解决聊天滚动、布局溢出等UI回归Bug。
    - **ZeroClaw**: 重写新手引导、增加聊天输入锁定、停止按钮。
    - **LobsterAI**: 修复图片预览、模型选择器溢出等体验问题。
    - → **趋势**: 当基础功能趋于完善后，项目竞争点转向界面交互的直觉性、流畅性和对高级用户（如推理模型用户）的支持。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **Hermes Agent** | **NanoBot** | **IronClaw** | **CoPaw** | **LobsterAI** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全功能平台，高度可定制化 | 深度模型集成、自主维护 | 轻量、多协议网关 | 企业级基础设施、安全沙箱 | 多渠道接入、团队协作 | 协同工作、IM体验 |
| **目标用户** | 高级开发者、企业部署 | 高要求AI用户、模型研究者 | 快速部署、社区Discord/TG用户 | 平台运营者、安全敏感用户 | 中大型组织、多部门协作 | 企业员工、知识工作者 |
| **技术架构** | 模块化、插件丰富 | 后起之秀，架构清晰 | 事件驱动、Hook系统 | Reborn架构，强类型与合约 | 基于`tool_guard`的审批流 | 深度集成网易云生态 |
| **近期焦点** | PR合并效率、回归Bug修复 | v0.12.0稳定、TUI改进 | 安全加固、功能请求回应 | Reborn架构落地、金丝雀测试 | 运营渠道稳定性、新手引导 | 核心Bug修复、体验优化 |
| **差异化标签** | **生态之王** | **AI交互先锋** | **通道专家** | **架构重构者** | **企业协作专家** | **网易生态锚点** |

## 6. 社区热度与成熟度

- **快速迭代/功能扩张阶段**: **IronClaw** (大规模重写), **Moltis** (爆发式新功能), **PicoClaw** (MCP工具链初成)。这些项目变更幅度大，风险与机遇并存。
- **质量巩固与优化阶段**: **OpenClaw** (修复回归Bug), **LobsterAI** (着力修复死锁、配置覆盖), **CoPaw** (聚焦主要渠道稳定性)。这些项目重心从“我们能做什么”转向“我们做得是否稳定”。
- **稳定功能交付阶段**: **Hermes Agent** (发布Curator后进入稳定期), **ZeroClaw** (v0.7.4发布后修修补补)。这些项目已形成稳定发布节奏，社区反馈集中于改进和增强。
- **潜在停滞/休眠阶段**: **ZeptoClaw**, **TinyClaw**。24小时内无任何活动，活跃度为零。

## 7. 值得关注的趋势信号

- **从“对话”到“任务”的转变**: 多个项目（如ZeroClaw的`ralph-loop`、OpenClaw的`active-run steering`、IronClaw的AgentLoop）正推动AI助手从被动响应用户提问，转向主动、循环、可自动执行任务流的模式。这标志着AI Agent从“聊天机器人”向“数字员工”的角色跨越。
- **对“成本”与“透明度”的诉求**: 用户对模型调用成本（ZeroClaw的免费模型标记）、审计与可控性（NanoClaw的安全修复、IronClaw的策略解析器）的关注日益增加。**AI治理**将成为下一阶段平台竞争的核心要素。
- **本地化与生态整合**: CoPaw对飞书的深入支持、LobsterAI对网易产品的整合，表明AI助手项目正与具体的企业/区域生态深度绑定，以满足特定市场或组织内部的“一体化”需求。通用平台 + 特定生态插件的模式已不再足够。
- **用户体验的“微观”战争**: 大量UI回归Bug的集中爆发，揭示了一个残酷事实：在基础能力趋同的背景下，**用户对细微体验缺陷的容忍度极低**。那些频繁修改UI而没有足够回归测试的项目，正为此付出代价。拥有优秀UI/UX测试体系（如自动化视觉回归测试）的项目，将建立新的竞争壁垒。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 NanoBot 项目 2026-05-01 数据生成的动态日报。

---

# NanoBot 项目动态日报 | 2026-05-01

## 1. 今日速览
项目今日活跃度较高。过去 24 小时内，共有 10 个 Issue 更新，其中 6 个为活跃状态，同时有 25 个 Pull Request 被处理，显示了社区较强的贡献意愿。安全修复和功能增强是今日的主旋律，特别是围绕 DingTalk 通道安全、WebUI 部署安全以及新的 Hook 插件系统。尽管有新 Bug 报告，但社区反应迅速，已有对应的修复 PR 提出，展现了良好的项目健壮性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日社区通过合并/关闭的 PR 解决了若干关键问题，并推动了多个功能增强：
- **安全加固**：`#3492` (fix(security) 通过合并/关闭，强化了 WebUI 在公网部署场景下的安全防护。`#3569` (fix(dingtalk)) 修复了 DingTalk 通道的 SSRF 漏洞，提升了项目的安全性。
- **Matrix 通道稳定性**：`#3562` 和 `#3565` 的合并关闭解决了 Matrix 通道在处理来自 DeepSeek 等模型的空流式数据块时，导致向聊天室发送空消息的 `bug`，提升了用户体验。
- **代码质量与可维护性**：`#3566` (refactor) 被合并，使用更优雅的 `contextlib.suppress` 简化了代码中多个 “捕获异常后忽略” 的写法，提升了代码整洁度。
- **跨平台兼容性**：`#3550` 和 `#3556` 的合并解决了文档中路径示例对 Windows 用户不友好以及跨平台换行符问题，降低了新用户的上手门槛。

## 4. 社区热点
- **热点 Issue**: **#660** “[good first issue] Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency”
    - **链接**: [HKUDS/nanobot Issue #660](https://github.com/HKUDS/nanobot/issues/660)
    - **分析**: 该 Issue 拥有 11 条评论和 5 个 👍 表情，是今日讨论热度最高的话题。社区用户对项目自称 “超轻量级” 但需要同时安装 Python 和 Node.js 的现状提出了质疑。这反映了用户对 “轻量级” 定义有较高期望，希望项目能尽量减少依赖，降低部署复杂度。

- **热点 PR**: **#3564** “feat(hooks): HookCenter typed-event hook system with plugin support”
    - **链接**: [HKUDS/nanobot PR #3564](https://github.com/HKUDS/nanobot/pull/3564)
    - **分析**: 这是一个旨在重构项目插件系统的大型 PR，提出了基于类型化事件的 HookCenter 概念。虽然评论数未显示，但其影响面广，涉及架构核心，是社区开发者关注的焦点。该 PR 若能合并，将极大提升外部开发者扩展 NanoBot 的能力。

## 5. Bug 与稳定性
- **严重 Bug**:
    - **#3554** (OPEN): DeepSeek-V4 `reasoning_content` 错误在 WebUI + exec 工具场景下仍可复现。有 `fix` PR (#3560) 处于开放状态。
        - **链接**: [HKUDS/nanobot Issue #3554](https://github.com/HKUDS/nanobot/issues/3554)
    - **#3551** (OPEN): OpenAI 兼容的 Streaming API (`/v1/chat/completions`) 在处理需要调用工具（tool-backed）的请求时，SSE 流会过早关闭。
        - **链接**: [HKUDS/nanobot Issue #3551](https://github.com/HKUDS/nanobot/issues/3551)
- **中等 Bug**:
    - **#3553** (OPEN): Matrix 通道在启动或重启时会重复读取并发送旧消息，导致循环。`/new` 命令可临时解决。
        - **链接**: [HKUDS/nanobot Issue #3553](https://github.com/HKUDS/nanobot/issues/3553)
- **历史遗留 Bug 修复**:
    - **#2298** (OPEN): 小模型/本地模型容易陷入无限工具调用循环，社区建议增加逻辑来打破此类循环。
        - **链接**: [HKUDS/nanobot Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)
    - **#970** (CLOSED): 子代理（subagent）`max_iterations` 被硬编码为15，导致长时间运行的任务超时。该 Issue 已关闭，说明问题已被社区解决或已有替代方案。

## 6. 功能请求与路线图信号
- **新功能请求**:
    - **#660**: 尽管是质疑，但本质是请求降低项目依赖，使其更符合 “超轻量级” 的定位。
    - **#3559**: 请求 WebSocket 通道能像 Webhook 那样支持主动消息投递（如 cron、心跳），尤其是在多租户环境中。
        - **链接**: [HKUDS/nanobot Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)
    - **#3484**: 请求在自动化场景（如 cron、heartbeat）中能够保持会话上下文。
        - **链接**: [HKUDS/nanobot Issue #3484](https://github.com/HKUDS/nanobot/issues/3484)
- **可能被纳入下一版本的特性**:
    - **模型预设配置** (`#3358`): 实现快速切换模型和生成参数组合。
    - **网关生命周期钩子** (`#3373`): 通知网关启动/停止事件。
    - **OpenTelemetry 追踪** (`#3173`): 为 LLM 调用和工具执行提供可观测性。
    - **Manifest LLM 路由支持** (`#3568`): 增加对 Manifest 网关的内置支持，提供了 LLM 路由功能。
    - **飞书通道增强** (`#3558`, `#3552`): 增加表情反应白名单和发送者身份注入功能，提升多用户场景下的体验。

## 7. 用户反馈摘要
- **正面/解决反馈**: 针对 Matrix 通道空消息问题的修复 (`#3562`, `#3565`)，将解决用户的直接困扰（如 `email` 和 `discord` 通道的相关场景）。跨平台兼容性修复 (`#3550`, `#3556`) 将减少 Windows 用户的配置挫折感。
- **痛点/不满**:
    - **依赖臃肿**: 用户 `besoeasy` 在 #660 中对项目自相矛盾的 “超轻量级” 宣传提出了尖锐批评，认为 Node.js 的依赖是一个 “bloated” 的包袱。
    - **本地模型支持不佳**: 用户在 #603 和 #2298 中反馈了使用本地模型（如通过 Ollama）时遇到的死循环和配置困难问题，指向了 “本地/小模型” 体验优化仍是短板。
    - **功能缺失**: 用户 `Xcc313r4n7` 和 `ivelin` 分别对自动化上下文保持和多租户环境下的主动消息投递表达了强烈需求，显示现有能力与高级用户期望存在差距。

## 8. 待处理积压
- **重要待合并 PR**:
    - **#3564**: Hook 插件系统。该 PR 架构影响大，能从根本上改变扩展生态，值得维护者重点关注和评审。
    - **#3555**: API 流过早关闭修复。对应 Issue #3551 是一个明确的 Bug，此 PR 为直接修复方案，应及时处理。
    - **#1385**: 多轮工具调用中保留 reasoning_details。此 PR 于 2026-03-01 提出，已有一个月无人跟进，它对使用推理模型（如 Gemini Pro)的用户至关重要，可能已陷入停滞。
        - **链接**: [HKUDS/nanobot PR #1385](https://github.com/HKUDS/nanobot/pull/1385)
- **长期未解决 Issue**:
    - **#603**: 无法使用本地 Ollama。该 Issue 自 2 月提出，虽有评论但未关闭，是本地模型用户的入门障碍。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是为您生成的Hermes Agent项目2026年5月1日动态日报。

---

# Hermes Agent 项目动态日报 | 2026年5月1日

## 今日速览

今日，Hermes Agent 项目在经历了重大版本发布后，社区活跃度维持高位，共计产生50条Issue与50条PR。**焦点集中在两个层面**：一是庆祝并消化昨天发布的 **v0.12.0 “Curator” 版本**带来的自主维护能力；二是集中修复因版本迭代和平台适配产生的稳定性与兼容性bug，特别是Telegram、Matrix等平台问题。项目整体健康度**优秀**，核心维护者与社区贡献者协同高效，多个严重Bug已迅速获得修复PR。

## 版本发布

### [v0.12.0 (v2026.4.30)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30)

- **版本代号**：“Curator” - 自主策展人
- **核心亮点**：该项目里程碑版本标志着Hermes Agent首次具备**自主维护能力**。引入了全新的后台守护进程，能自动管理、清理和优化自身的运行环境、技能库和长期记忆，通过“自我策展”机制降低了人工运维成本。
- **数据概览**：自v0.11.0以来，经历了1096次提交，合并550个PR，修改了1270个文件，新增了217,776行代码。社区贡献者达213位，社区共创模式愈发成熟。
- **破坏性变更与迁移注意事项**：
    - **用户需注意**：新版本引入了`HERMES_HOME`环境变量的规范化，建议所有用户确保其正确设置，避免路径冲突。过去硬编码的`Path.home() / ".hermes"`路径将不再推荐使用。
    - **插件开发者**：后台自主进程可能自动扫描并更新插件，为确保兼容性，强烈建议插件开发者为插件添加版本声明和兼容性元数据。
    - **Nix 用户**：由于`hermes-web`的`npmDepsHash`变更，Nix环境下的构建可能会失败，需更新锁文件。

## 项目进展

- **核心Bug修复**：
    - **[关键]** `run_sync` 中的`UnboundLocalError` Bug (Issue #5387) 已通过PR #5390合并修复。该Bug影响所有Telegram、Discord、Slack会话，现已解决。
    - **[关键]** Nix CI因`npmDepsHash`过时而持续失败的问题（Issue #15272）收到了社区关注，目前主分支仍受影响，但已有多位贡献者跟进。
    - **视频消息支持**：PR #18243 解决了所有平台（微信、Telegram等）视频消息被静默忽略的Bug，通过`ffmpeg`提取帧进行多模态处理。

- **功能增强**：
    - **Telegram交互优化**：PR #18238 新增了Telegram平台的“临时工具进度”显示功能。用户可配置在工具调用期间显示临时进度气泡，任务完成后自动删除，保持聊天界面整洁。
    - **Discord适配器大修**：PR #5395 正在推进中，该PR旨在完善Discord平台支持，包括频道观察、更鲁棒的提及检测以及可选的回复引用切换，将极大提升在Discord上的多Agent协作体验。

- **基础设施与代码质量**：
    - **路径规范统一**：PR #18068 修复并统一了项目中23处硬编码`Path.home() / ".hermes"`的调用点，全部替换为规范的`get_hermes_home()`函数，增强了环境变量`HERMES_HOME`的生效可靠性。
    - **技能系统安全加固**：PR #17609 引入了针对技能突变的“用户锁定”和“审批门控”，防止Agent在未经用户明确许可的情况下静默覆盖或修改用户编写的技能，增强了权限控制。

## 社区热点

- **🔥 [#17648 - Matrix消息错误](https://github.com/NousResearch/hermes-agent/issues/17648)**： **评论/点赞最多**。用户反馈Matrix平台因`ImportError`报错，提示`cfg_get`模块丢失。该问题引发了大量用户共鸣，说明Matrix平台用户基数不小且对稳定性敏感。目前尚无明确修复PR，项目组需优先跟进。

- **🔥 [#18241 / #18240 - TUI中的思考与工具调用顺序](https://github.com/NousResearch/hermes-agent/issues/18241)**： **一天内被重复提出**。用户指出TUI界面将模型的“思考块”和“工具调用”分组显示，破坏了推理过程的时序感。对于使用DeepSeek V4, Sonnet 4.6等深度推理模型的用户来说，这是一个非常核心的UX痛点，代表了社区对高级模型交互体验的更高要求。

- **🔥 [#15272 / #15244 - Nix CI持续失败](https://github.com/NousResearch/hermes-agent/issues/15272)**： **阻塞所有PR的严重问题**。尽管未获得大量评论，但其“P1”优先级和阻塞性已使其成为社区眼下的头号公敌。多位贡献者（`perlowja`, `WadydX`）都在大声疾呼，需要维护者尽快介入解决。

## Bug 与稳定性

| 严重程度 | Bug 描述 | 链接 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **🔴 P1** | Nix CI因`npmDepsHash`过时而失败，阻塞所有PR合并 | [#15272](https://github.com/NousResearch/hermes-agent/issues/15272) | **无PR，亟待解决** |
| **🔴 P1** | Matrix平台因`ImportError`报错，服务不可用 | [#17648](https://github.com/NousResearch/hermes-agent/issues/17648) | **无PR，亟待解决** |
| **🟠 P2** | 自定义回退Provider忽略了自己的`base_url`，将请求错误地发送给主Provider | [#15743](https://github.com/NousResearch/hermes-agent/issues/15743) | **已关闭** (修复已合并) |
| **🟠 P2** | Telegram话题中，使用`/new`重置会话后，绑定的技能未重新注入 | [#6508](https://github.com/NousResearch/hermes-agent/issues/6508) | **已关闭** (修复已合并) |
| **🟠 P2** | `/status`命令显示Token为0，与数据库实际记录不符 | [#5960](https://github.com/NousResearch/hermes-agent/issues/5960) | **已关闭** (修复已合并) |
| **🟠 P2** | 路径包含空格时，TUI图片附件功能失效 | [#17522](https://github.com/NousResearch/hermes-agent/issues/17522) | **已关闭** (修复已合并) |

## 功能请求与路线图信号

- **高优先级信号：TUI交互体验重构**：与极火社区热点#18241相关，用户要求TUI按时间顺序显示思考与工具调用。结合已存在的 #5504（双消息队列）、#5505（终端窗口标题）等功能请求，这表明**TUI正从“可用”迈向“好用”阶段**，下一版本的重心很可能在TUI的人机交互重构上。

- **🚀 代理能力扩展**：`#5394` (Thread-bound agent runtimes) 和 `#5454` (Proxy support) 反映了用户希望将Hermes Agent部署为更复杂系统中的核心组件。前者希望Telegram话题可以绑定到特定的、长期运行的Agent环境，后者则强调企业级部署的代理支持。这些特性符合**个人AI助手向专业化、平台化发展**的路线图趋势。

- **🧠 模型交互精细化**：`#5437` (Model capability pre-flight validation)、`#5449` (Track rate limit headers)、`#5453` (Preserve partial stream content on retry) 和 `#5435` (Structured provider error classification) 均由同一位贡献者 `kshitijk4poor` 提出，构成了一套**提升LLM交互鲁棒性与效率**的完整方案。这表明项目已开始从“简单调用”转向“智能、高效地与模型交互”。

## 用户反馈摘要

- **正面反馈**：用户对v0.12.0“Curator”版本普遍感到兴奋，尤其期待其自主维护能力能减轻日常运维负担。社区对`iRonin`等人提出的TUI体验改进系列（#5504, #5505）反响积极。
- **痛点与抱怨**：
    - **平台兼容性问题**：Matrix、Feishu（飞书）、Telegram等平台的用户报告了细微但影响使用的bugs。这表明多平台适配是现代AI Agent项目的“甜蜜的负担”。
    - **配置复杂性**：多个用户（如#18140中的`krebbl`）在配置Opencode Zen等第三方模型时遇到困难，配置文件和UI界面的引导仍有改进空间。
    - **上下文断裂感**：用户`gxlqssjf`在#5388中用中文描述了“上下文断的”问题，指出在同一客户端内补充上下文时体验割裂，这是一个语言无关、全局性的交互痛点。

## 待处理积压

- **[长期活跃，P1] Nix CI构建失败**：Issues #15272, #15244。该问题已持续超过一周，涉及核心CI流程，任何Nix用户或贡献者都无法合并代码。需要核心维护者检查`hermes-web`的依赖更新策略，或为Nix workflow引入自动化缓存更新机制。
- **[长期活跃，P3] 官方MongoDB内存提供程序**：Issue #5495。该功能请求获得了一个👍，并且有明确的PR #5780（OpenViking）作为替代方案被合并，但MongoDB作为最通用的存储后端之一，其官方支持仍悬而未决，可能阻碍一部分企业用户采用。
- **[长期活跃，P2] 自定义/Google回退Provider兼容问题**：Issue #5392。当使用自定义Provider（如自托管Gemini）作为回退时，解析逻辑失败。该问题已存在近一个月，虽有讨论但尚无PR，对于依赖多Provider冗余的用户是较大的风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-01

---

## 1. 今日速览

过去24小时内，PicoClaw 项目保持高度活跃：共产生36条 Issues 和35条 PR，社区讨论热烈。正式发布 **v0.2.8** 版本，重点增强了 MCP CLI 子命令体系。尽管 Issues 和 PR 的“已关闭/合并”比例偏低（仅1/36和3/35），但大量待办事项表明项目正处于密集的功能开发和社区反馈征集期。**整体健康度良好，社区参与度强劲，但合并效率有待提升。**

---

## 2. 版本发布

### v0.2.8 (正式版)
- **发布时间**：2026-05-01  
- **核心变更**：
  - `feat(mcp)`: 新增 `show`, `add`, `list`, `remove`, `test`, `edit` CLI 子命令，提升了 MCP 工具的运维管理能力。
  - `fix(mcp)`: 修复调用工具时发送 `null` 而非空对象的问题，提高了与严格 Zod 校验服务的兼容性。
  - 修复了构建失败 (#2723)。
- **破坏性变更**：无记录。
- **迁移注意事项**：建议所有使用 MCP 功能的用户升级，尤其是对接第三方 MCP 服务器的场景。

### nightly (v0.2.8-nightly.20260501.6e1fab80)
- 自动构建，可能不稳定，供高风险用户测试。

---

## 3. 项目进展

**过去24小时合并/关闭的 PR 共3条**，主要包括：
- **依赖更新**：`dependabot[bot]` 自动升级了 `larksuite/oapi-sdk-go/v3` 与 `aws/aws-sdk-go-v2/config`，保障第三方 SDK 兼容性。
- **MCP 参数修复**（见 v0.2.8 发布说明）：已解决 `null` arguments 导致的服务端崩溃问题。

**整体前进**：v0.2.8 的发布标志着 MCP 工具链初步成熟。同时，PR #2090 (Telegram 流式改进) 等高质量修复虽未合并，但正在积极 review 中。

---

## 4. 社区热点

### Issues 活跃度 TOP 3

| Issue | 标题 | 评论数 | 核心诉求 |
|-------|------|--------|----------|
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | [Feature] LLM Account Stacking: 自动 API key 轮换 | 10 | 多 API 密钥自动切换应对限频/配额耗尽 |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | [Feature] Ollama cloud credentials 支持 | 9 | 请求为 Ollama Cloud 增加认证凭据配置入口 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | [Refactor] 迁移至 OpenAI Responses API | 9 | 跟进 OpenAI 官方推荐，从 Chat Completions 迁移至 Responses API |

**分析**：当前社区焦点集中在**多 Provider 认证与高级 API 兼容**。密钥轮换、Ollama 云认证、OpenAI 新接口迁移反映了用户对生产级、多后端运维方案的强烈需求。

---

## 5. Bug 与稳定性

按严重程度排列，带 **🔥** 表示已有修复 PR：

| Issue | 标题 | 严重程度 | 影响范围 | 是否有 Fix PR |
|-------|------|----------|----------|---------------|
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) | 定时任务无法执行 (scheduling restricted) | 🔴 阻断 | Cron 模块 | 无 |
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) | exec 输出未清理终端控制字符 | 🔴 安全 | 所有 exec 用户 | 无 |
| [#2540](https://github.com/sipeed/picoclaw/issues/2540) | whatsapp_native LID 迁移后消息静默丢弃 | 🟠 严重 | WhatsApp 频道 | 无 |
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | list_dir Windows 路径分隔符导致 "invalid argument" | 🟠 严重 | Windows 用户 | 无 |
| [#2504](https://github.com/sipeed/picoclaw/issues/2504) | Opus 帧数据损坏 (OGG 解码器缓冲区重用) | 🟠 严重 | Discord 音频 | ✅ PR #2504 |
| [#2478](https://github.com/sipeed/picoclaw/issues/2478) | 多次 `/use <skill>` 覆盖之前 skill | 🟡 中等 | Skill 多次装备 | 无 |
| [#2438](https://github.com/sipeed/picoclaw/issues/2438) | `PICOCLAW_GATEWAY_TOKEN` 文档误导 | 🟡 轻度 | 配置 | 无 |

**重点提醒**：Cron 任务 (#2468) 和终端安全 (#2377) 属于阻断级缺陷，且当前无关联修复 PR，建议项目组优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | 出处 | 优先级信号 | 可能版本 |
|------|------|------------|----------|
| **SMTP 邮件频道** (#2465) | 社区 | 高频提及，已有6个评论 | 下一版本 |
| **飞书频道优化** (#2580) | 中国用户 | 2个赞同，详述流式/状态/引用 | 讨论中 |
| **Robust 记忆系统** (#2515) | 社区 | 关联 mem0,SuperMemory,HydraDB | 中期路线图 |
| **OAuth 2.1+PKCE MCP 服务器** (#2546) | 运维场景 | 与仪表盘结合，需后端支持 | 远期 |
| **多飞书应用支持** (#2493) | 多租户场景 | 2个评论 | 讨论中 |

**值得关注的 PR**：
- **PR #2626** (原生音频输入支持) 和 **PR #2587** (Web 聊天流式 UX) 正被活跃 review，有望随 v0.3.0 上线。
- **PR #2313** (多用户 + 安全加固 + Skills 白名单) 改动庞大，包含多域重构，但已停滞1个月，建议项目组评估合并优先级。

---

## 7. 用户反馈摘要

### 正面反馈
- **MCP 工具链**：多位用户对新增的 `add/list/test/edit` 子命令表示欢迎，认为“极大降低了 MCP 运维复杂度”。
- **飞书频道**：中国区用户虽提出较多改进意见，但普遍认可当前“轻量化对话”的设计理念。

### 负面痛点
- **Windows 兼容性**：`list_dir` 路径问题 (#2472) 导致核心工具链在 Windows 上不可用，影响开发者体验。
- **定时任务不可用**：`cron` 模块内部限制 (#2468) 导致调度工具完全失效，被标记为“生产环境拦路虎”。
- **多频道消息丢失**：连续消息仅响应最后一条 (#2447, #2464, #2446) 在飞书、WhatsApp 等频道上普遍存在，严重影响用户信任。
- **硅基流动 API 卡启动**：`siliconflow` 配置导致服务无法启动 (#2280)，需紧急排查 Provider 初始化逻辑。

---

## 8. 待处理积压

以下 Issue/PR 已经超过30天未收到维护者响应或 active 更新，建议重点关注：

| 编号 | 标题 | 等待时间 | 影响范围 |
|------|------|----------|----------|
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) | aarch64 .deb 无法安装 | 40天+ | ARM 用户 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | 迁移至 OpenAI Responses API | 30天+ | 所有 OpenAI 用户 |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | 飞书群 @mention 检测修复 (PR) | 35天+ | 飞书频道 |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | Ollama 推理/思考字段回退 (PR) | 40天+ | Ollama + 推理模型用户 |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | SecureString 反射 panic 修复 (PR) | 28天+ | 配置安全字段 |

**行动建议**：以上积压问题与 PR 涉及到核心功能（认证、频道、构建）的稳定性，建议维护者安排 sprint 重点清理，避免社区信任度下降。

---

*本日报由 AI 自动生成，数据来源：github.com/sipeed/picoclaw | 统计周期：2026-04-30 ~ 2026-05-01*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 NanoClaw 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 2026-04-30 数据生成的 2026-05-01 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

今日 NanoClaw 项目活跃度极高（**高活跃**），**总共处理了 55 项活动**（8 个 Issues + 47 个 PR）。核心焦点在于 **安全漏洞修复** 和 **代码库稳定性**：两个已关闭的高严重性安全漏洞（#458, #457）和三个紧急的 OpenCode 提供程序 Bug 被迅速响应。同时，**合并/关闭了 37 个 PR**，体现了高效的迭代节奏。社区贡献者在 **容器安全、OpenCode 提供程序、设置流程和渠道适配器** 方面贡献了大量工作，项目整体朝着更安全、更稳健的方向迈出了坚实一步。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目在 **安全性、稳定性、功能性和可扩展性** 方面取得了显著进展，多项关键的 PR 被合并或关闭。

- **🌟 安全性提升 (Critical)**
    - **[已关闭] #2001: 修复容器控制的出站路径导致的主机文件读/删漏洞。** 这是对容器/主机文件系统边界的关键加固，防止了可能的数据泄露。
    - **[已关闭] #458: 为 Agent 容器添加网络限制。** 限制了恶意注入后的数据外泄风险。
    - **[已关闭] #457: 修复容器命令注入漏洞。** 解决了通过字符串拼接执行 `exec()` 的安全隐患，这是一个严重的设计缺陷。

- **🔧 核心稳定性修复**
    - **[已关闭] #2055, #1973: 修复 Linux 新安装时 `onecli` 命令路径问题。** 解决了安装脚本因 `PATH` 环境变量未正确传播导致失败的 Bug，对用户体验至关重要。
    - **[已关闭] #2114, #2033: 修复轮询循环与任务线程管理。** 确保预任务脚本能正确应用于后续消息，防止了定时任务绕过逻辑检测的 bug。
    - **[已关闭] #2142: 修复定时任务调度中的路由信息丢失。** 确保 `schedule_task` 能正确将路由信息传递给动作处理器。

- **✨ 功能增强与新的集成**
    - **[已关闭] #2040: Signal 渠道适配器支持出站附件。** 填补了 Signal 适配器的功能空白。
    - **[已关闭] #2136: 添加 Google Gemini 提供程序支持。** 接入新的 AI 模型，显著扩展了用户选择。
    - **[已关闭] #2141: 实现与飞书的决策桥接 (dota-feishu bridge)。** 通过 IPC 协议扩展了与飞书集成的能力，实现了复杂的决策流转。
    - **[开放] #1931: v1 到 v2 的自动迁移功能。** 该 PR 正在推进中，若完成将极大简化用户的升级体验。
    - **[已关闭] #2105, #2107: 更丰富的渠道审批流程。** 增加了智能体选择、自由命名和渠道名称解析，提升了审批流程的智能化程度和用户体验。

## 4. 社区热点

- **🌟 [已关闭] #458: `[High] Security: Add network restrictions to agent containers`**: 获得 **4 个赞**，是目前社区最关心的议题。社区成员 `johnwaldo` 指出了容器安全模型中一个被明确承认但未解决的问题，引发了广泛的讨论，并最终被关闭，表明该项目对安全问题的响应速度非常快。
    [链接](qwibitai/nanoclaw Issue #458)

- **🌟 [已关闭] #457: `[Critical] Security: Container command injection via shell string interpolation`**: 同样由 `johnwaldo` 报告，这是另一个严重的安全问题。社区的快速反应和修复 (PR #2001) 体现了对代码质量的严格要求。
    [链接](qwibitai/nanoclaw Issue #457)

- **🌟 [开放] #2150: `OpenCode provider: wrapPromptWithContext sends literal @./...md lines`**: 这是关于新集成 **OpenCode 提供程序** 的三个高优先级 Bug 之一，报告人 **glifocat** 连续提出多个问题，显示了社区对新功能的快速测试和反馈。此表明 OpenCode 的集成尚不稳定，是当前开发的热点。
    [链接](qwibitai/nanoclaw Issue #2150)

**分析**: 社区热点清晰地集中在 **安全加固** 和 **OpenCode 提供程序稳定性** 两个方面。前者表明项目正积极解决技术债务，后者则反映出新功能集成过程中的试错与迭代。

## 5. Bug 与稳定性

今日报告了 **5 个新的 Bug**，且严重程度普遍偏高，但均已得到快速处理。

- **临界 (Critical):**
    - 无 (之前的 Critical Bug 已关闭)

- **高 (High):**
    - **[开放] #2150**: OpenCode 提供程序：指令（CLAUDE.md）无法正确传递给 LLM，导致 Agent 在无指令状态下运行。
    - **[开放] #2148**: OpenCode 提供程序：`proc.kill('SIGKILL')` 无法杀死底层进程，导致端口 4096 被占用。
    - **[开放] #2147**: 主机扫荡 (Host sweep)：孤儿进程记录导致下次复活立即被 `SIGKILL`，形成死循环，需要手动干预才能恢复。
    - **[开放] #2159**: OneCLI `ensureAgent` 因 Agent 组 ID 包含下划线（`_`）而验证失败，这是一个架构上的命名冲突。

- **中等 (Medium):**
    - **[开放] #2149**: OpenCode 提供程序：硬编码的 90 秒超时对于本地模型推理来说太短，导致功能静默失效。

**小结**: 今日新增的 Bug 集中暴露了 **OpenCode 提供程序** 的集成还不成熟，存在多个致命缺陷。此外，一个由 v2 框架生成的 ID 命名规范与后端服务不兼容的架构问题（#2159）也需要关注。

## 6. 功能请求与路线图信号

- **主流集成:**
    - **[PR #2136] Google Gemini 提供程序**: 这是一个明确的需求。一旦完成，NanoClaw 将支持另一个主流 AI 模型，拓宽用户基础。
    - **[PR #2141] 飞书决策桥接 (Feishu Decision Bridge)**: 表明项目正在深入耕耘企业协作场景，提供更复杂的自动化流程。

- **用户体验与运维优化:**
    - **[PR #1931] v1→v2 迁移工具**: 社区对需要“推倒重来”的升级方式十分抗拒，这个迁移功能是降低用户迁移成本、提高留存率的关键。
    - **[PR #2155] 为 Linux 安装添加 root 用户警告**: 这是一个社区驱动的运维最佳实践建议，表明用户关注部署的安全性。
    - **[PR #2158] 启动界面美化**: 虽然是一个“小而美”的特性，但反映了社区对项目品牌和用户体验的积极贡献。

**路线图信号**: 项目路线图似乎正朝着 **多模型支持** 和 **企业级集成** 方向发展，同时不忘记打磨用户体验和安装部署的细节。

## 7. 用户反馈摘要

- **痛点 - 安装配置**: 用户 **glifocat** 在问题 #1973 中表达的 “脚本失败，命令找不到” 的困扰，是 Linux 新用户常见的痛点，已通过 #2055 修复。这提示需要在自动化脚本中处理环境变量传递问题。
- **痛点 - 容器安全**: 用户 **johnwaldo** 在 #458 中明确指出“容器网络无限制”是一个已知风险。虽然社区肯定该风险，但也期望能有更根本的解决方案。已关闭解决。
- **痛点 - 新功能稳定性**: 用户 **glifocat** 在 #2148, #2149, #2150 中连续报告 OpenCode 提供程序的 Bug，直观反映了新功能集成初期的不稳定，给积极尝鲜的用户带来了困扰。
- **认可 - 开源协作**: 用户 **dooha333** 和 **Koshkoshinsk** 等人贡献了从 Bug 修复到安全策略的多个 PR，表明社区贡献机制运转良好，维护者响应积极，这增强了开贡献者的满意度。

## 8. 待处理积压

- **[开放] #2159: OneCLI `ensureAgent` fails due to underscores**: 这是一个 **架构级别的 Bug**，可能导致 v2 版本的 Agent 注册功能在某些后端中完全不可用。考虑到问题自 2026-04-30 提出后尚未有 `fix` PR，可能需要项目维护者优先协调前端 ID 生成与后端验证逻辑。
    [链接](qwibitai/nanoclaw Issue #2159)

- **[开放] #2147: Host sweep orphan process lock**: 该问题会导致服务锁死，需要手动处理。即使 `kill-ceiling` 机制也无法解决，说明当前的清理逻辑存在严重缺陷。同为 2026-04-30 提出，当日无 `fix` PR，应予以关注。
    [链接](qwibitai/nanoclaw Issue #2147)

- **[开放] #1931: v1 → v2 migration (experimental)**: 这个 PR 已经开放了 8 天，是降低用户迁移成本的关键。虽然它是一个大型 PR，但如果不推进，可能会导致大量 v1 用户停滞。
    [链接](qwibitai/nanoclaw PR #1931)

**总结**: 项目今天在安全修复和新功能上表现出色，但 **OpenCode 提供程序** 和 **一个架构命名冲突** 是当前最明显的两个风险点，维护团队应在下一个开发周期优先关注。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-05-01

---

## 1. 今日速览

过去24小时内，NullClaw 项目保持了 **高活跃度**，共处理 7 条 Issue（其中 6 条已关闭）和 27 条 PR（其中 13 条已合并/关闭）。**关键信号**：项目正在密集推进一大波基础设施与体验优化——围绕“入站路由”、“中途注入”、“并发轮次抢占”等核心能力的 PR 系列（#845-#855）正处于待合并状态，同时一批社区长期诉求（E2EE、嵌套技能、多工作区、技能路由）也已在今天批量合并。项目健康度良好，维护者响应迅速，但待合并 PR 数量（14条）偏高，需关注合并节奏。

---

## 3. 项目进展

### 🟢 今日合并/关闭的重要 PR

| PR | 标题 | 变更类型 | 说明 |
|----|------|----------|------|
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | feat(a2a): forward skill tool-call progress hints to A2A stream | **新功能** | 实现技能工具调用的进度提示转发至 A2A 流，UI 端可实时展示工具调用状态（原 Issue #808） |
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | feat(agent,gateway): add `--workspace` flag | **新功能** | 为 gateway 和 agent 添加 `--workspace` 选项，支持多工作区实例（响应 Issue #833） |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | fix(onboard): clear actionable message when KeyWriteFailed | **Bug 修复** | 修复 Docker 交互式引导中 `KeyWriteFailed` 静默崩溃问题（修复 Issue #763） |
| [#841](https://github.com/nullclaw/nullclaw/pull/841) | feat(agent): add `--skill` flag | **新功能** | 添加 `--skill` 选项，可在启动时直接激活指定技能（响应 Issue #580） |
| [#840](https://github.com/nullclaw/nullclaw/pull/840) | feat(skills): support nested skill discovery | **新功能** | 支持技能分类子目录嵌套发现（响应 Issue #825） |
| [#838](https://github.com/nullclaw/nullclaw/pull/838) | feat(matrix): add pantalaimon E2EE proxy support | **新功能** | 通过 pantalaimon 代理实现 Matrix 通道端到端加密（响应 Issue #209） |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | feat(config): support external tool_customizations_file | **新功能** | 支持外部 JSON 文件自定义工具配置 |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | feat(agent): trigger-based tool prioritization | **新功能** | 基于触发词自动提升工具优先级 |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | feat(tools): implement system_prompt and enabled overrides | **新功能** | 支持工具级 system_prompt 覆盖与启用/禁用 |

**项目进展总结**：今天合并的 13 个 PR 标志着 **一次大规模基础设施升级**，尤其集中在：
- **技能系统重构**：嵌套技能、激活指定技能、工具优先级、自定义提示覆盖
- **通道与加密**：Matrix E2EE 代理、多工作区支持、外部工具配置
- **Bug 修复**：Docker 引导崩溃、A2A 进度转发
- **社区反馈闭环**：累计响应并关闭了 6 个来自社区的长期 Issue（#209/#580/#763/#808/#825/#833）

---

## 4. 社区热点

今日无单条 Issue/PR 评论数突出，但存在 **一个系统性热点群**：由贡献者 **manelsen** 发起的 **10 条 PR 系列（#845-#855）**，全部处于 OPEN 待合并状态，讨论热度较高。该系列核心围绕：

- **inbound_router**（#845）：纯路由核心 + 中途注入缓冲区
- **各通道适配**（#846 频道循环、#847 网关、#848 守护进程）：将入站消息路由注入统一框架
- **并发与抢占**（#855）：会话级并发 + 轮次抢占（Fixes #832）
- **内存优化**（#852）：归档来源与召回质量
- **尾随密钥加密**（#850）：Tailscale auth_key 加密支持
- **Accept 循环退避**（#853）：防止 CPU 空转（Fixes #851）

**背后的诉求**：社区对 **非阻塞交互**、**多通道统一消息路由**、**高并发场景下的稳定性** 有强烈需求。这组 PR 若合并，将显著提升 NullClaw 在生产环境中的可用性。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复 PR | 简述 |
|----------|-------|------|---------|------|
| **高** | [#763](https://github.com/nullclaw/nullclaw/issues/763) | **已关闭** | ✅ [#843](https://github.com/nullclaw/nullclaw/pull/843) 已合并 | Docker 交互式引导第8步 `KeyWriteFailed` 静默崩溃；根因：加密密钥目录不可写 |
| **高** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | OPEN | ✅ [#853](https://github.com/nullclaw/nullclaw/pull/853) 待合并 | Gateway 的 accept 循环在临时错误下 CPU 空转 100% |
| **中** | [#849](https://github.com/nullclaw/nullclaw/issues/849) | OPEN | ✅ [#854](https://github.com/nullclaw/nullclaw/pull/854) 待合并 | Subagent 完成结果未正确回传到原始频道上下文 |
| **低** | [#825](https://github.com/nullclaw/nullclaw/issues/825) | **已关闭** | ✅ [#840](https://github.com/nullclaw/nullclaw/pull/840) 已合并 | 嵌套 Agent 技能不支持，技能目录被限制为扁平结构 |

**稳定性总体评价**：今日无严重新 Bug 报告。所有已知高优先级 Bug（#763、#851、#849）均已有对应修复 PR，且 #763 已合并关闭。项目稳定性处于可控状态。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue | 当前状态 | 对应 PR / 合并状态 | 纳入下一版本可能性 |
|----------|------------|----------|---------------------|-------------------|
| A2A 进度提示转发 | [#808](https://github.com/nullclaw/nullclaw/issues/808) (by jacktang) | ✅ 已关闭 | [#844](https://github.com/nullclaw/nullclaw/pull/844) **已合并** | ✅ 已纳入 |
| 多工作区支持 (`--workspace`) | [#833](https://github.com/nullclaw/nullclaw/issues/833) (by jacktang) | ✅ 已关闭 | [#842](https://github.com/nullclaw/nullclaw/pull/842) **已合并** | ✅ 已纳入 |
| 技能激活 (`--skill`) | [#580](https://github.com/nullclaw/nullclaw/issues/580) (by jacktang) | ✅ 已关闭 | [#841](https://github.com/nullclaw/nullclaw/pull/841) **已合并** | ✅ 已纳入 |
| 嵌套技能分类支持 | [#825](https://github.com/nullclaw/nullclaw/issues/825) (by tunnckoCore) | ✅ 已关闭 | [#840](https://github.com/nullclaw/nullclaw/pull/840) **已合并** | ✅ 已纳入 |
| Matrix E2EE 加密 | [#209](https://github.com/nullclaw/nullclaw/issues/209) (by rikur) | ✅ 已关闭 | [#838](https://github.com/nullclaw/nullclaw/pull/838) **已合并** | ✅ 已纳入 |
| cron 支持 `command` + `prompt` 同时使用 | [#879](https://github.com/nullclaw/nullclaw/issues/879) (by mark-os) | **OPEN** | 暂无 PR | 🔲 待讨论 |
| 入站并发与非阻塞交互 | 隐含于多PR | **OPEN** | 见 #845-#855 系列 | 🔄 系列 PR 待合并中 |

**路线图信号**：今天合并的功能覆盖了社区提出的大部分长期需求，说明维护者正在积极清理功能请求积压。新提出的 #879（cron 管道）尚未有响应，但属于合理场景，预计会被纳入后续规划。

---

## 7. 用户反馈摘要

- **@tunnckoCore**（#825）：“Claude Code 也不支持嵌套技能，但我已经在 OpenClaw 上加了 PR… 请支持吧，这对分类很有用。” → 已修复（#840 已合并）
- **@jacktang**（#808/#833/#580）：“能不能在 SKILL 中暴露进度到 A2A 流？”、“能不能加 --workspace 和 --skill 选项？” → 三个请求今日全部被满足并关闭
- **@rikur**（#209）：“运行 agent 的一个痛点… Matrix 通道如果能支持 E2EE 就好了。” → 已通过 Pantalaimon 代理支持（#838 已合并）
- **@mark-os**（#879）：“创建 cron 时，‘command’ 和 ‘prompt’ 不能同时提供… 但常见场景是：运行 shell 命令 + 将其 stdout 喂给 prompt 进行总结/解析。” → 新提交的合理需求，暂无回复，建议维护者关注

**用户满意度**：今日 6 个关闭的 Issue 中 5 个来自社区用户（且均为增强功能），维护者对社区呼声响应迅速，满意度应较高。

---

## 8. 待处理积压

### 🟡 需关注的高价值待合并 PR

以下 14 个 OPEN PR 均处于 **可合并边缘**，且来自同一贡献者 manelsen 的系列化工作，阻塞了 #832 的非阻塞交互能力落地：

| PR | 主题 | 等待天数 | 备注 |
|----|------|----------|------|
| [#845](https://github.com/nullclaw/nullclaw/pull/845) | inbound_router 核心 | 12天 | 系列基石，需优先审阅 |
| [#846](https://github.com/nullclaw/nullclaw/pull/846) | 频道循环路由 | 12天 | 依赖 #845 |
| [#847](https://github.com/nullclaw/nullclaw/pull/847) | 网关路由 | 12天 | 依赖 #845 |
| [#848](https://github.com/nullclaw/nullclaw/pull/848) | 守护进程路由 | 12天 | 依赖 #845 |
| #[850](https://github.com/nullclaw/nullclaw/pull/850) | Tailscale 加密 | 12天 | 独立 |
| #[852](https://github.com/nullclaw/nullclaw/pull/852) | 内存召回优化 | 12天 | 独立 |
| #[853](https://github.com/nullclaw/nullclaw/pull/853) | accept 退避 | 12天 | 独立 |
| #[854](https://github.com/nullclaw/nullclaw/pull/854) | subagent 频道回传 | 12天 | 独立 |
| #[855](https://github.com/nullclaw/nullclaw/pull/855) | 并发抢占 | 12天 | 依赖 #845 |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) | 知识图谱内存后端 | 38天 | 积压最长，需检查是否设计仍在演进 |

### ⚠️ 未响应 Issue

- **[#879](https://github.com/nullclaw/nullclaw/issues/879)** (cron command+prompt 管道)：创建于今日，尚未有维护者回应。属于合理增强，建议尽快确认方向。

---

## 总结

NullClaw 项目在 2026-05-01 日迎来了 **一次集中的功能交付高峰**，社区长期等待的 E2EE、嵌套技能、多工作区、技能路由等功能批量合并落地，项目整体向前迈进了重要一步。同时，来自贡献者 manelsen 的入站路由系列 PR 是当下最关键的待处理积压，建议维护者优先审核合并，以解锁非阻塞交互能力并保持贡献者积极性。项目健康度良好，活跃度高，社区满意度上升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 IronClaw 项目数据，我为您生成了 2026年5月1日 的项目动态日报。

---

## IronClaw 项目日报 | 2026-05-01

### 1. 今日速览

今日项目整体活跃度极高，核心团队正围绕 “**IronClaw Reborn**” 架构重构进行高强度推进，是项目近期最重要的技术迭代。过去24小时内，Issues 和 PR 数量均处于高位，主要集中于为 Reborn 架构构建底层服务（如 HTTP 出口、宿主运行时图、内存存储服务）和测试。同时，社区报告的 Bug 和线下金丝雀测试（Canary）出现失败，表明项目在快速演进中存在一定的不稳定性和回归问题。总体而言，项目处于 **“活跃重构与功能扩展”** 阶段，风险与机遇并存。

-   **活跃度评估**: **极高**，核心贡献者推动大规模架构变更，社区反馈和Bug报告活跃。
-   **关键主题**: IronClaw Reborn 架构、宿主运行时、权限与义务处理、测试与稳定性。

### 2. 版本发布

**无**。过去24小时内无新版本发布。

### 3. 项目进展

今日合并/关闭了多个与 **Reborn 架构** 和 **持续集成** 相关的关键 PR，标志着项目在架构重构和基础设施优化方面取得了实质性进展。

-   **核心架构推进**: 多个与 Reborn 宿主运行时相关的 PR 被合并：
    -   **`#3095` (已关闭)**: [feat(reborn): add host runtime contract facade](https://github.com/nearai/ironclaw/pull/3095)。为上层 Reborn 组件（如 `TurnCoordinator`）提供了稳定的 API 接口。
    -   **`#3098` (已关闭)**: [feat(reborn): add shared runtime HTTP egress](https://github.com/nearai/ironclaw/pull/3098)。建立了共享的 HTTP 出口路径，统一了 WASM、脚本和 MCP 工具的联网行为，提升了安全性和可审计性。
    -   **`#3117` (已关闭)**: [test(reborn): cover WASM runtime failure edges](https://github.com/nearai/ironclaw/pull/3117)。为 Reborn 的 WASM 运行时增加了关键的失败边界测试。
    -   **`#3120` (已关闭)**: [fix(reborn): make host runtime cancel and health real](https://github.com/nearai/ironclaw/pull/3120)。将宿主运行时的取消和健康检查功能从存根实现为真实逻辑。

-   **基础设施与 CI**:
    -   **`#3104` (待合并)**: [ci: cut over workflows for main merge queue](https://github.com/nearai/ironclaw/pull/3104)。CI 流程从 `staging-first` 切换为 `main-only` 合并队列，简化了合并流程。
    -   **`#3119` (已关闭)**: [fix: disable canary issues creation](https://github.com/nearai/ironclaw/pull/3119)。修复了金丝雀测试失败的自动化问题创建机制。

**总结**: 项目今日在 **Reborn 架构的核心基础设施（运行时、网络出口、测试）** 和 **CI/CD 流程优化**上迈出了重要一步，为后续的功能迁移和发布奠定了基础。

### 4. 社区热点

-   **[Issue #2987] [EPIC] Track Reborn architecture landing strategy (43条评论)**: 作为追踪 Reborn 整体落地的母议题，持续获得最高关注。所有核心的 Reborn 子任务均在此追踪下，是理解项目当前工作重心的“中央枢纽”。[链接](https://github.com/nearai/ironclaw/issues/2987)
-   **[Issue #3067] [TEST] Reborn: Add vertical-slice integration test suite (10条评论)**: 关于 Reborn 集成测试套件的议题，讨论热度高，反映了社区和核心团队对确保新架构稳定性的重视。[链接](https://github.com/nearai/ironclaw/issues/3067)
-   **[Issue #3103] [QA] High ASCII TUI display issue (7条评论)**: 关于新版 TUI 显示问题的讨论。用户希望回退到旧版显示方式，这说明新 UI 的兼容性问题对用户体验造成了直接影响，是亟待解决的回溯问题。[链接](https://github.com/nearai/ironclaw/issues/3103)

**分析**: 社区讨论的核心集中在 **Reborn 架构的质量保障** 和 **新功能对老用户的兼容性** 上。一方面，大家关注新架构的测试和落地计划；另一方面，新引入的变更（如新的 TUI）带来的用户体验问题是当前矛盾的集中点。

### 5. Bug 与稳定性

今日报告的 Bug 较多，部分为过去24小时内系统自动检测到的严重问题。

-   **严重 - 金丝雀测试失败**:
    -   **`#3116`, `#3115`, `#3113`**: 三个金丝雀测试通道（`public-smoke`, `persona-rotating`, `provider-matrix anthropic`）均在提交 `2a65da7` 后失败。这可能指向一次影响多个核心功能的回归，紧急程度高。维护者在 PR `#3119` 中已尝试通过“禁用自动创建 Issue”来缓解告警，但问题的根源仍需排查。[`#3116`](https://github.com/nearai/ironclaw/issues/3116)、[`#3115`](https://github.com/nearai/ironclaw/issues/3115)、[`#3113`](https://github.com/nearai/ironclaw/issues/3113)
-   **中等 - 功能无法使用**:
    -   **`#3133`**: 用户报告使用 Gmail 发送邮件的 Mission 彻底失败，状态和错误信息均为 `None`，导致无法调试。[链接](https://github.com/nearai/ironclaw/issues/3133)
    -   **`#3132`**: 用户报告创建 Mission 时，参数 `cooldown_secs` 需要一个整数，但系统将字符串 `"120"` 传递而非数字 `120`，导致 API 调用失败。这是一个明显的类型处理Bug。[链接](https://github.com/nearai/ironclaw/issues/3132)
    -   **`#3128`**: 通过聊天助手连接 Gmail 时，在认证流程末尾遭遇 `502` 错误，表明后端 API 代理可能存在异常。[链接](https://github.com/nearai/ironclaw/issues/3128)
-   **低等 - 新功能体验问题**:
    -   **`#3108`**: Web IDE 生成的 API Key 在访问 `private.near.ai` 网关时返回 `401` 错误。[链接](https://github.com/nearai/ironclaw/issues/3108)

### 6. 功能请求与路线图信号

新功能请求主要集中在 **Reborn 架构的完善** 和 **安全策略** 上，与当前路线图高度吻合。

-   **Reborn 核心功能**:
    -   **`#3127`**: [Design scalable capability permission UX and policy resolver](https://github.com/nearai/ironclaw/issues/3127)。设计可扩展的能力权限 UI 和策略解析器，是 Reborn 安全模型的关键一环。
    -   **`#3118`**: [Build native Reborn memory storage/search service](https://github.com/nearai/ironclaw/issues/3118)。构建 Reborn 原生的内存存储/搜索服务，取代适配旧架构的方案，体现了架构清晰的决心。
    -   **`#3107`**: [Define AgentLoopDriver and run-class profile contract](https://github.com/nearai/ironclaw/issues/3107)。定义不同的Agent循环执行模型的接口，为支持多种交互模式（如聊天、编程）做准备。
    -   **`#3016`**: [add reference AgentLoopHost facade](https://github.com/nearai/ironclaw/issues/3016)。添加参考性的Agent循环宿主外观，为 Agent 循环的实现提供标准接口。

**判断**: 这些功能请求并非来自孤立用户，而是由核心开发团队（`serrrfirat`, `ilblackdragon`）基于 #2987 路线图主动规划，几乎可以确定会被纳入下一阶段的 Reborn 版本中。

### 7. 用户反馈摘要

-   **痛点**:
    -   **TUI 体验回归**: 用户 `fmotta` 对新版 TUI 在高 ASCII 码支持上的表现非常不满，直言“无法正常显示”，并强烈要求提供参数恢复旧版行为。这表明 UI 的重大变更需要更平滑的过渡和备选方案。
    -   **Mission 功能不稳定**: 用户 `sergeiest` 在一天内连续报告了 Mission 功能失效的多个问题（Gmail 发送失败、任务创建参数类型错误），严重影响其核心工作流，体验不佳。
    -   **认证流程卡顿**: 用户 `ALuhning` 和 `sergeiest` 都遇到了认证流程中的障碍（API Key `401`，认证 `502`），说明服务间的联动和网关处理存在缺陷。

**总结**: 用户对核心功能的稳定性和新功能的兼容性有较高期望。目前一些 Bug 和系统回归问题（特别是 Mission 和 TUI）已对真实用户场景造成了阻碍。

### 8. 待处理积压

-   **重要 Issue 待响应**:
    -   **`#3116`, `#3115`, `#3113`**: 三个金丝雀测试失败，指向一次潜在的严重回归。虽然已经通过 PR `#3119` 抑制了告警噪音，但对根本原因的修复仍然最为紧迫。
    -   **`#3133`, `#3132`, `#3128`**: 用户报告的 Gmail 集成和 Mission 创建的核心Bug，需要优先分配给相关维护者（如 `sergeiest` 报告的问题）进行确认和修复。
-   **长期 PR 待关注**:
    -   **`#1764`** (Abound demo, 已开放1个月): 一个非常大型的 `XL` PR，影响范围极广。虽然长期未合入，但其包含的 “Responses API、凭据注入、技能” 等功能明确指向 Reborn 路线图，需要核心团队评估进度。
    -   **`#1446`** (Aliyun 支持, 已开放1个多月): 来自新贡献者的功能 PR，提供了针对国内用户的特定云服务支持。长时间未合入可能打击贡献者积极性，建议维护者给出明确反馈或进展说明。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 LobsterAI GitHub 数据，现呈上 2026-05-01 的项目动态日报。

---

### LobsterAI 项目日报 (2026-05-01)

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源：** github.com/netease-youdao/LobsterAI

---

### 1. 今日速览

今日项目整体活跃度**较高**，但主要体现在密集的代码合并与问题修复上，而非社区讨论。过去24小时内，项目团队集中合并了**9个Pull Requests (PR)**，全部为已关闭状态，且其中不乏自4月27日起提交、今日完结的修复工作。这表明项目正处于一个**高强度的 Bug 修复和稳定性打磨阶段**，旨在解决多个平台（特别是 Windows）及核心功能（协同工作、配置管理）上的痛点。尽管没有新的 Issue 报告或版本发布，但如此高的合并率显著提升了项目的健壮性。

### 2. 版本发布

无

---

### 3. 项目进展：Bug 修复与功能优化双线推进

今日合并的9个 PR 主要集中在 **Bug 修复** 和 **交互体验优化** 两大方向，显示出项目在打磨稳定性和用户界面细节上的决心。

*   **稳定性与核心逻辑修复：**
    *   **协同工作（Cowork）死锁修复：** `PR #1869` 是一个关键修复，解决了当 LLM 请求失败重试时，用户会话会陷入“锁死”状态，无法发送新消息的问题。现在系统会在清理本地对话轮次前，主动向网关发送中止信号，释放会话资源。
    *   **配置数据覆盖修复：** `PR #1840` 修复了一个危险的配置错误，该 Bug 会导致用户修改配置（如选择模型）时，因系统读取了未加载成功的旧默认配置，而意外覆盖用户的设置。现在采用“读取-修改-写入”模式，确保基于最新存储的配置进行修改。
    *   **Windows 平台技能目录删除修复：** `PR #1851` 修复了 Windows 系统上一个特定问题，即在删除技能目录前未释放文件监听器，导致删除失败。这提升了在 Windows 上管理技能时的稳定性。
    *   **模型切换优化：** `PR #1857` 阻止了在首页切换模型时触发的网关“硬重启”，避免了不必要的服务中断，提升了用户体验。

*   **交互体验与 UI 优化：**
    *   **图片显示与预览：** `PR #1868` 修复了从微信渠道发送的 Markdown 图片尺寸过大的问题，并增加了点击预览功能，显著改善了 IM 渠道的消息浏览体验。
    *   **UI 溢出修复：** `PR #1855` 修复了在模型选择器中，长模型名称导致页面头部溢出的 UI 问题，通过截断文本保持了界面整洁。
    *   **安装器改进：** `PR #1841` 使用更合适的 `IntCmp` 函数替换了 NSIS 安装程序中的 `StrCmp`，以进行更准确的退出码检查，并增加了诊断信息，有助于排查安装失败问题。
    *   **更新提示优化：** `PR #1829` 移除了安装更新时一条不准确的“自动重启”提示，避免了用户的困惑。

*   **功能增强：**
    *   **有道笔记技能升级：** `PR #1864` 对有道笔记（youdaonote）技能进行了升级，具体内容未提及，但表明团队仍在持续维护和增强官方核心技能。

**项目向前迈进总结：** 今天项目的重点不在于增加新功能，而是通过**密集、关键的系统级 Bug 修复**大幅提升了项目的 **稳定性、可靠性（特别是协同工作和 Windows 平台）** 以及**用户交互体验**。这标志着项目正从功能扩张期向质量巩固期过渡。

---

### 4. 社区热点

今日没有活跃的 Issues 或 PR 讨论（所有 PR 的评论数为 `undefined`，可能为0）。这表明社区用户可能尚未对今日合并的修复进行反馈，或者讨论主要发生在合并之前。从数据上看，今日社区部分的互动较少。

---

### 5. Bug 与稳定性

今日未报告新的 Bug，但今天合并的 PR 修复了多个已存在的中、高优先级 Bug。按严重程度排列如下：

1.  **【严重】协同工作会话死锁** (PR #1869)
    *   **问题描述：** 当 LLM 网关服务因请求失败而无限重试时，用户无法发送新消息，陷入“会话还在运行”的僵局。
    *   **FIX PR:** [#1869](netease-youdao/LobsterAI PR #1869) (已合并)

2.  **【严重】配置被意外覆盖** (PR #1840)
    *   **问题描述：** 用户进行的配置修改（如切换模型）可能被系统以错误的默认值覆盖，导致设置丢失。
    *   **FIX PR:** [#1840](netease-youdao/LobsterAI PR #1840) (已合并)

3.  **【中等】Windows 平台技能目录删除失败** (PR #1851)
    *   **问题描述：** 在 Windows 上删除技能时，因文件监听器未被释放，删除操作失败。
    *   **FIX PR:** [#1851](netease-youdao/LobsterAI PR #1851) (已合并)

4.  **【中等】用户界面显示问题**
    *   **问题描述：** 微信图片过大无预览 (PR #1868)；模型名称过长导致界面溢出 (PR #1855)。
    *   **FIX PR:** [#1868](netease-youdao/LobsterAI PR #1868), [#1855](netease-youdao/LobsterAI PR #1855) (均已合并)

---

### 6. 功能请求与路线图信号

今日无新的功能请求。但两个已合并的 PR 可能暗示了后续的路线图方向：
*   **连接器/渠道体验升级：** `PR #1868` 优化了 IM 渠道（特别是微信）的图片预览功能，表明项目团队正在持续关注并改善多平台渠道的交互体验，未来可能推出更多针对特定渠道的优化。
*   **核心技能持续迭代：** `PR #1864` 对“有道笔记”这一核心技能进行了升级，这表明项目对自有生态内的技能服务保持迭代节奏，未来可能继续深化与网易产品的整合。

---

### 7. 用户反馈摘要

由于今日没有活跃的 Issues 和 PR 评论，无法直接提炼用户反馈。但从今天修复的 Bug 可以反推用户痛点：
*   用户曾因配置被意外覆盖而丢失设置，这是一个很糟糕的体验。
*   用户在使用协同工作时，曾因“会话锁死”而被迫中断工作流，这是对生产力和体验的严重打击。
*   Windows 用户在管理技能时可能遇到无法删除文件夹的困惑。

这些修复直接回应了这些积压的痛点，表明项目团队的修复工作与用户实际遭遇的问题高度契合。

---

### 8. 待处理积压

今日无长期未响应的重要 Issue 或 PR。所有今日动态中的 PR 均已高效地关闭/合并，项目维护响应迅速。项目状态健康，无待处理的积压问题需要特别提醒。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的 Moltis 项目动态日报。

---

# Moltis 项目动态日报 | 2026-05-01

**分析师:** AI 开源项目分析师
**报告周期:** 2026-04-30 至 2026-05-01

---

### 1. 今日速览

项目今日活跃度 **极高**，呈现爆发式更新态势。过去24小时内，项目合并/关闭了18个 PR，并发布了新版本，显示出维护团队强大的交付能力。新开的5个 Issue 均聚焦于 UI/UX Bug，尤其是聊天界面相关问题的集中反馈值得关注。社区贡献者活跃，多个重要功能（如远程沙箱、新 AI 提供商支持、会话标题自动生成）被合并，项目在功能丰富度和平台兼容性上迈出坚实一步。

### 2. 版本发布

- **新版本发布**: `20260430.01`
    - **链接**: [Moltis Release 20260430.01](https://github.com/moltis-org/moltis/releases/tag/20260430.01) (假设链接格式)
    - **更新内容**: 根据同日合并的大量 PR，此版本预计包含以下关键更新：
        1.  **新提供商**: 新增 `DeepInfra` 和 `Zen (opencode.ai)` 提供商支持 (PR #934, #944)。
        2.  **沙箱增强**: 引入远程和多后端沙箱支持 (Vercel, Daytona, Firecracker) (PR #942)。
        3.  **Web UI 改进**: 修复了聊天滚动、复制按钮、通知溢出等多项问题 (PR #925, #931, #936, #941)。
        4.  **新命令**: 添加了 `/btw`, `/fast`, `/insights`, `/session` 等多个 slash 命令 (PR #926, #933)。
    - **破坏性变更 & 迁移注意**: 该版本为增强版本，未见明显破坏性变更，但建议用户在更新后，如需使用新沙箱功能，应重新配置相关后端。

### 3. 项目进展

今日项目合并了多项重量级 PR，显著增强了核心能力：

- **新 AI 提供商**: `feat(providers): add Zen (opencode.ai) multi-protocol provider` (PR [#944](https://github.com/moltis-org/moltis/pull/944)) 和 `feat: add DeepInfra provider, sandbox GPU passthrough, strict model selection` (PR [#934](https://github.com/moltis-org/moltis/pull/934)) 被合并，扩展了用户可选的 AI 模型池，尤其是对 GPU 透传的支持，为高性能计算场景铺平了道路。
- **沙箱架构升级**: `feat(sandbox): remote & multi-backend sandbox support` (PR [#942](https://github.com/moltis-org/moltis/pull/942)) 被合并，这是项目基础设施的重要一步，允许在云部署环境中（如 Fly.io, Render）安全地执行代码，极大提高了部署灵活性。
- **智能会话管理**: `feat(gateway): auto-generate session titles from conversation` (PR [#933](https://github.com/moltis-org/moltis/pull/933)) 被合并，通过自动生成会话标题提升了用户对历史对话的管理效率，这是一个体验优化的重要改进。
- **TUI 与 SDK 基础**: 历时较长的 `feat(tui)` (PR [#201](https://github.com/moltis-org/moltis/pull/201)) 和 `feat(sdks)` (PR [#288](https://github.com/moltis-org/moltis/pull/288)) 终被合并，标志着 Moltis 在“终端用户界面”和“多语言 SDK 生态”建设上取得了关键进展。
- **技能系统与洞察**: `feat(skills): add per-skill usage telemetry to /insights and web UI` (PR [#935](https://github.com/moltis-org/moltis/pull/935)) 被合并，为“技能”系统增加了用量统计功能，有助于用户了解其 AI 助手的行为模式，并向平台化治理迈进了一步。

### 4. 社区热点

今日最受关注的 Issue 主要集中在 **聊天界面体验** 上，反映出该部分是用户感知最直接的痛点。

- **`[Bug]: chat doesn't auto-scroll when at end`** (Issue [#946](https://github.com/moltis-org/moltis/issues/946))
    - **讨论**: 用户 `vvuk` 反馈聊天不会在默认位置自动滚动，获1个 👍。
    - **诉求**: 这是之前关闭的 Issue [#922](https://github.com/moltis-org/moltis/issues/922) (聊天滚动不工作) 的衍生问题。用户希望修复滚动功能后，能恢复“跟随内容”的自动滚动体验。
- **`[Bug]: chat layout seems broken -- too wide`** (Issue [#945](https://github.com/moltis-org/moltis/issues/945))
    - **讨论**: 用户 `vvuk` 提出聊天布局过宽，显示异常。
    - **诉求**: 与前一个 Issue 同为界面布局问题，说明近期 UI 改动可能引入了一致的渲染问题，急需修复。

### 5. Bug 与稳定性

今日报告的 5 个新 Bug 集中爆发，需维护者优先处理。

| 严重程度 | Issue | 描述 | 状态 | 相关PR/备注 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | [#946](https://github.com/moltis-org/moltis/issues/946) | 聊天不会自动滚动至末尾 | 未处理 | 与已修复的 #922 相关，可能是回归 |
| **高** | [#945](https://github.com/moltis-org/moltis/issues/945) | 聊天布局过宽，显示异常 | 未处理 | 疑似UI改动导致的布局问题 |
| **中** | [#947](https://github.com/moltis-org/moltis/issues/947) | 标题缺失的Bug报告 | 未处理 | 报告内容不完整，需作者补充详情 |
| **中** | [#948](https://github.com/moltis-org/moltis/issues/948) | Discord 斜杠命令丢失参数 | 未处理 | Discord 集成相关 Bug |
| **低** | [#937](https://github.com/moltis-org/moltis/issues/937) | 设置/终端 tmux 错误 | 未处理 | 特定环境下的配置问题 |

今日关闭了6个 Bug，修复效率高。例如：
- `SIGTERM isn't handled` (Issue [#939](https://github.com/moltis-org/moltis/issues/939)) 已通过 PR [#940](https://github.com/moltis-org/moltis/pull/940) 修复，提升了 Docker 部署的优雅关闭能力。
- `system-notice text overflows` (Issue [#938](https://github.com/moltis-org/moltis/issues/938)) 已通过 PR [#941](https://github.com/moltis-org/moltis/pull/941) 修复。

### 6. 功能请求与路线图信号

- **核心用户需求**: 近期 Issue 和 PR 清晰地指向“聊天体验优化”和“平台兼容性”。新开放的 Bug 进一步强调了这一点。已合并的远程沙箱和自动标题功能也满足了用户对“可部署性”和“易用性”的需求。
- **潜在新功能**: 用户 `M2noa` 提出的 **9router 原生支持** (Issue [#266](https://github.com/moltis-org/moltis/issues/266)) 是一个值得关注的功能请求。该请求已存在数月，旨在解决多 AI 提供商的路由问题。虽然此 Issue 今日已关闭，但其描述的功能与项目近期大力添加新提供商的策略高度一致。Moltis 团队可能已在内部实现了类似或更优的解决方案（如通过沙箱或新架构）。
- **路线图信号**: 近期大量 PR 围绕 “SDK”、“TUI”、“技能系统”和“沙箱”展开，这暗示项目正从“个人聊天工具”向“可编程、可扩展的 AI 代理平台”进行战略转型。

### 7. 用户反馈摘要

- **满意点**: 修复速度快。`Chat scrolling isn't working` (Issue [#922](https://github.com/moltis-org/moltis/issues/922)) 从报告到关闭仅用不到24小时，用户响应得到了快速解决。这体现了项目团队对 Bug 的重视和敏捷的开发流程。
- **痛点**: UI/UX 是最集中的痛点。近期发布的更新似乎引入了一连串的 UI 回归问题（#944，#946），用户 `vvuk` 连续报告两个界面 Bug，表明内部 UI 测试流程可能存在疏漏，需要加强回归测试。
- **场景**: 用户 `gaarf`、`affanshahid` 报告的问题（MCP 令牌、容器溢出、tmux 错误）都指向自建/本地部署场景，表明 Moltis 的用户群体中有相当比例的技术用户，他们深度依赖项目提供的各类功能和兼容性。

### 8. 待处理积压

以下 Issue 或 PR 处于开放状态，长期未获响应或进展，可能表明社区兴趣或维护工作量的问题。

- **[Feature Request] Native 9router support** (Issue [#266](https://github.com/moltis-org/moltis/issues/266))
    - **状态**: 今日已关闭。
    - **评述**: 该 Issue 自2月提出，讨论了数小时，最终被关闭。但考虑到 Moltis 对多提供商的支持，一个统一的、智能的路由层是非常有价值的。希望团队能在  的 2026-05-01  状态报告中明确其处理逻辑，是拒绝、已实现，还是将通过其他方式解决。

- **`.github/workflows: Migrate workflows to Blacksmith runners`** (PR [#259](https://github.com/moltis-org/moltis/pull/259))
    - **状态**: 开放中。
    - **评述**: 此 PR 由机器人生成，旨在迁移 CI 到更快的 Blacksmith runners。它已在2月28日被创建，经过几次更新后处于开放状态。建议维护者评估并决定是否合并，以优化项目 CI 构建速度和开发体验。

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，以下是为您生成的 CoPaw 项目动态日报。

---

# CoPaw 项目动态日报 | 2026-05-01

## 1. 今日速览

项目今日活跃度极高，共处理 28 条 Issues 和 13 条 PR，并发布了 v1.1.5.post1 补丁版本。社区反馈集中在**渠道连接稳定性**（尤其是企业微信和飞书）和**客户端体验**（如 Windows 白屏、关闭后服务停止）上。开发团队响应迅速，针对**路径遍历漏洞**、**飞书交互升级**及**企业微信消息流问题**提交了关键修复，显示出对安全性和核心通道稳定性的高度重视。总体而言，项目处于快速迭代与修复并行的积极状态。

## 2. 版本发布

*   **最新版本**：**v1.1.5.post1**
*   **发布链接**：[v1.1.5.post1 Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5.post1)
*   **更新内容**：
    1.  **功能**：为飞书渠道引入了 `FeishuCardHandler`，并将 `tool_guard` 审批流程从文本命令升级为交互式按钮，提升了用户审批体验。
    2.  **维护**：版本号更新至 1.1.5.post1。
*   **破坏性变更**：无。
*   **迁移注意事项**：如使用飞书渠道的 `tool_guard` 功能，需注意新的交互式卡片依赖于 `card.action.trigger` 订阅，相关文档链接已新增在卡片提示中。

## 3. 项目进展

今日合并/关闭了 12 个 PR，项目在安全加固、渠道稳定性及前端体验方面均有显著推进。

*   **安全性加固**：
    *   PR [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973)：合并了**路径遍历漏洞**的修复，通过拒绝绝对路径来增强静态文件服务的安全性。
*   **渠道稳定性与功能增强**：
    *   PR [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963)：修复了企业微信（WeCom）通道的双重重连竞态和跨循环断开问题。
    *   PR [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948)：为企业微信群聊新增 `share_session_in_group` 配置项，允许群成员共享或隔离会话上下文，解决了 Agent 无法识别发言人的问题（与 Issue #3621 相关）。
    *   PR [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950)：修复了企业微信渠道在长时间处理后，用户端卡在“Thinking...”的问题。
    *   PR [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)：合并了飞书交互式卡片功能，提升了 `tool_guard` 审批流程的易用性。
*   **前端体验优化**：
    *   PR [#3960](https://github.com/agentscope-ai/QwenPaw/pull/3960)：修复了对话界面中工具调用代码块的长行溢出问题，优化了代码阅读体验。
    *   PR [#3981](https://github.com/agentscope-ai/QwenPaw/pull/3981)：迁移弃用的 antd v5 API，减少了前端控制台警告。

## 4. 社区热点

今日讨论热度最高的是关于**企业微信通道稳定性**的 issue。

*   **[#3937] 企业微信通道，突然不生效了，发送消息没有响应...**:
    *   **链接**: [Issue #3937](https://github.com/agentscope-ai/QwenPaw/issues/3937)
    *   **分析**: 用户报告企业微信通道会突然“静默”，需要重新保存配置才能恢复。这与过去一段时间多个关于企业微信问题的上报（如 #2757）形成呼应，反映出该渠道的稳定性是当前用户的**核心痛点**。开发团队今日提交的多个 PR（#3963, #3950, #3978）正集中解决此类问题，社区关注度高。
*   **[#3955] windows服务器任意文件遍历漏洞**:
    *   **链接**: [Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)
    *   **分析**: 该安全漏洞报告引发了 12 条评论，虽已关闭，但反映出用户对生产环境安全性的高度关注。开发团队在数小时内即通过 PR #3973 提供了修复，反应迅速。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

*   **严重**：
    1.  **会话清理机制误杀进行中任务** ([#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976))：`UnifiedQueueManager` 将长时间运行的 AI 响应会话标记为空闲并强制取消，导致用户无法收到回复。
    2.  **Cron 定时任务不触发** ([#3986](https://github.com/agentscope-ai/QwenPaw/issues/3986))：`enabled: true` 的 cron 任务调度器从不自动触发，需手动执行。
*   **较高**：
    1.  **DeepSeek 模型多轮对话后报错** ([#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985))：使用 DeepSeek 推理模型时，多轮工具调用后因 `reasoning_content` 未回传导致 HTTP 500 错误。
    2.  **Windows 客户端首次运行白屏** ([#3971](https://github.com/agentscope-ai/QwenPaw/issues/3971))：v1.1.4 Windows exe 在 7 台机器上首次启动均出现白屏。
    3.  **Agent workspace 因频道消息错误切换** ([#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957))：主控 Agent 接收其他 Agent 的频道消息后，身份和工作区被错误切换。
*   **一般**：
    1.  **首页“Running Config”设置页 404** ([#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980))。
    2.  **上下文记忆管理报错** ([#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977))。
    3.  **`FunctionCallOutput` 验证错误** ([#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969))。

**已有 Fix PR 的 Bug**：
*   路径遍历漏洞 (已合并 #3973)
*   企业微信跨循环错误 (已合并 #3978)
*   企业微信“Thinking...”卡死 (已合并 #3950)

## 6. 功能请求与路线图信号

*   **强化多智能体团队协作** ([#3987](https://github.com/agentscope-ai/QwenPaw/issues/3987))：用户提议像 Accio work 一样增加“团队”功能，以简化多智能体调度。社区对此有明确需求。
*   **自引用任务执行循环** ([#3972](https://github.com/agentscope-ai/QwenPaw/issues/3972))：用户请求添加 `/ralph-loop` 魔术命令，让 Agent 能自动循环执行任务直至完成，该功能已提出并获讨论。
*   **前端 Artifact 双视图支持** ([#3983](https://github.com/agentscope-ai/QwenPaw/issues/3983))：用户希望前端支持类似 Claude 的 Code/Preview 双视图，以提升代码类输出的体验。
*   **核心配置区与用户工作区分离** ([#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967))：用户反馈工作区内核心配置与日常文档混在一起，易误删，建议分离。
*   **Windows 客户端后台运行** ([#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979))：用户希望关闭桌面端后，服务能在系统托盘继续运行。
*   **通道响应速度优化** ([#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990))：用户反馈通过通道（非 WebUI）交互时响应速度过慢。

**路线图判断**：从今日 PR 看，团队正着重解决**渠道稳定性**和**安全性**问题。用户提出的“团队”功能和“工作区分离”请求涉及核心架构调整，可能进入中长期规划；“前端 Artifact”等体验优化功能更可能在短期版本中被优先级靠后。

## 7. 用户反馈摘要

*   **满意点**：无明确正面反馈，但从关闭的 issue 来看，开发团队的快速修复（如路径遍历漏洞）值得肯定。
*   **核心痛点**：
    *   **企业微信连接的脆弱性**：多位用户反映企业微信频道会无故“断开”或“失效”，需要手动重连，严重影响日常使用。
    *   **Windows 客户端体验不佳**：存在首次启动白屏、关闭后无法后台运行等问题，导致用户体验割裂。
    *   **复杂场景下的稳定性问题**：多轮对话后页面卡顿（#3350）、长时间任务被中断（#3976）等 bug 显示系统在处理复杂任务时健壮性有待提升。
    *   **模型/API 兼容性**：`DeepSeek reasoning_content` 报错 ( #3985 ) 和 Hermes Agent 兼容性问题 ( #3886 ) 表明与第三方系统或特定模型的集成存在隐忧。

## 8. 待处理积压

*   **PR #3605** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/3605))：**统一微信/企业微信标识符**。此 PR 由 `celestialhorse51D` 于 4月20日提交，旨在修复 WeixinChannel 的 identity mismatch 问题。目前仍有待审核，而其相关的问题（如 #3296、#3937）持续被用户报告。该 PR 或为解决当前企业微信稳定性问题的关键一环，建议维护者尽快评审与合并。
*   **Issue #3350** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/3350))：**超多轮对话后页面卡顿**。该问题由 `linhuang0405` 于 4月14日报告，至今已两周，尚无官方回复或计划。这将影响进行大型项目或代码迭代的用户体验，应给予更多关注。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-01)

## 1. 今日速览

ZeroClaw 项目今日发布重要补丁版本 **v0.7.4**，标志着 v0.7.x 工作区基础之上的首个迭代落地。过去24小时社区活跃度极强：共产生 50 条 Issue 与 50 条 PR，其中包含一大批 UI/UX 修复和架构改进的大批量合并。新开 Issue 与 PR 均以 bug 和增强功能为主，显示社区仍在积极反馈与贡献。整体项目健康度良好，发布节奏稳定。

## 2. 版本发布

### v0.7.4 发布了 🎉
- **Changelog 概要** (v0.7.3 → v0.7.4)：
    - **Matrix 通道重写**：采用 clean-room 方式重写了 Matrix 协议实现，提升了稳定性和协议兼容性。
    - **多语言 i18n 管道**：集成了 Mozilla Fluent 国际化框架，支持多语言文档，为国际化社区铺平道路。
    - **CLI/TUI 新手引导重写**：对 CLI 和终端交互式引导（Onboarding）流程进行了彻底重写，旨在改善首次使用体验。
    - **恢复 微信 iLink Bot 通道**：修复了之前版本中失效的微信渠道。

**⚠️ 潜在影响与注意事项**：
- **Matrix 通道用户**：由于是重写，旧版 Matrix 配置可能不兼容，建议阅读[更新文档](链接待补充)确认现有配置是否需要调整。
- **Onboarding 流程变更**：CLI/TUI 引导界面已大变样，现有自动化脚本可能失效。建议知晓变更后更新脚本。
- **i18n 相关**：首次发布，可能存在语言文件缺失或翻译不完整的情况。

## 3. 项目进展

今日合并/关闭了大量 PR，项目向前迈出了关键一步，主要聚焦于**稳定性和用户体验修复**。以下为今日已合并的重要 PR：

- **#6216** `fix(gateway): evict cancel_tokens entry when session is deleted mid-turn` — 修复了会话在被删除时中间取消令牌残留导致内存泄漏的问题。
- **#6217** `feat(web): open agent chat from memory row` — 点击 Web UI 记忆表中的条目可直接跳转至对应聊天会话。
- **#6218** `feat(web): mark OpenRouter free models in default-model dropdown` — 在 UI 中标记 OpenRouter 免费模型，帮助用户降低费用。
- **#6220** `feat(web): chat input lock + stop button + running indicator` — 大幅改进 Web 聊天界面交互：任务运行时锁定输入框、增加停止按钮及运行状态指示器。
- **#6221** `fix(daemon,gateway,channels): share canvas store across daemon subsystems` — 修复了图谱工具在 Telegram/Discord 等渠道完全失效的问题，现在渠道与 Web UI 共享同一个画布存储。
- **#6161** `fix(web): dashboard bugfix bundle` — 打包修复了“概览崩溃”、“模型保存回滚”、“光标不对齐”、“CPU 尖峰”等多个 Web UI 关键 BUG。
- **#6083** `feat(web): add chat message deletion, clear-all, and compact mode` — 新增聊天消息单条删除、一键清空及紧凑模式。
- **#5983** `fix(docker): copy web/dist to runtime stage` — 修复了 Debian Docker 镜像运行时 Web 仪表盘无法访问的 BUG。

## 4. 社区热点

- **#6123** `[Bug]: default_model issue on fresh install` (15 评论, P1 严重性)
    - 刚安装完的用户无法启动，因为 onboarding 流程没能正确识别默认模型。成为今日最热的讨论帖，突显出**新手引导流程**稳定性依然不足。
    - 链接：[Issue #6123](zeroclaw-labs/zeroclaw Issue #6123)

- **#848** `[Bug]: Can't get web search tool working` (8 评论)
    - 用户无法使用内置的网络搜索工具，代理处理超时。社区对此反馈激烈，说明搜索插件对用户重度使用场景不可或缺。
    - 链接：[Issue #848](zeroclaw-labs/zeroclaw Issue #848)

- **#5890** `RFC: Multi-agent UX flow — design` (7 评论)
    - 这是一项多代理架构的用户体验设计方案讨论。社区对该设计讨论热烈，可能预示着下个大版本的核心特性走向。
    - 链接：[Issue #5890](zeroclaw-labs/zeroclaw Issue #5890)

- **#5959** `[Bug]: Web dashboard unavailable in Docker image` (2 👍, 高关注度)
    - 官方 Docker 镜像中 Web dashboard 不可用的问题，在用户中引起了高度关注。该问题已被 #5983 PR 修复。
    - 链接：[Issue #5959](zeroclaw-labs/zeroclaw Issue #5959)

## 5. Bug 与稳定性

以下是按严重程度排列的今日重要 Bug：

| 严重性 | Issue/PR 编号 | 问题描述 | 状态 |
|------|------|------|------|
| **S1 - 流程阻塞** | #6123 | 全新安装后 `default_model` 设置错误，代理无法启动 | 🟢 OPEN (有讨论) |
| **S1 - 流程阻塞** | #6051 | 自检报告显示使用 `127.0.0.1` 而不是用户配置的 `0.0.0.0` | 🟢 OPEN |
| **S1 - 流程阻塞** | #6120 | UI 中选择 OpenAI Codex 时错误地要求输入 OpenAI API key | 🟢 OPEN |
| **S2 - 降级行为** | #6153 | Matrix 语音转录报错：不支持音频格式 '.' | 🟢 OPEN |
| **S2 - 降级行为** | #5244 | Dashboard 频道标签页崩溃 + 概览页渲染错误 | 🟢 OPEN (已有 #6161 修复 PR) |
| **S2 - 降级行为** | #5809 | Shell 策略阻止 `git -C <path>` 命令运行 | 🟢 OPEN |
| **S3 - 轻微问题** | #5862 | 代理不知道自身可以调度 cron 任务 | 🟢 OPEN |
| **其他** | #6096 | `install.sh` 未解压 Web Dashboard 资产 | 🟢 OPEN |

## 6. 功能请求与路线图信号

以下功能请求社区呼声高，且有对应 PR 提出，后续大概率被纳入 v0.8.x 路线图：

1. **#5890** `RFC: Multi-agent UX flow` — 多代理用户体验设计，极具前瞻性，预计会成为重大特性。
2. **#5947** `schema v3 — batch breaking field migrations` — 批量断代字段迁移，进行大规模配置重构，属于 “Merge blocker”，将影响后续所有 PR。
3. **#5630** `Native extended thinking support for Anthropic provider` — 为 Anthropic 模型加入原生高级推理 API 支持，服务高端用户。
4. **#6217** `Recover agent chat from memory` (已合并) — 该特性广受好评，可直接点击记忆恢复旧聊天。
5. **#6077** `Ability to clear the agent chat window` (已由 #6083 解决) — 用户要求清屏功能已被采纳并发布。

## 7. 用户反馈摘要

- **新手体验：** 新安装用户在 #6123 中表示：“Onboarding 后直接报错，无法工作”，反映出新手引导仍有严重故障。
- **价格透明度：** 多位用户在 #6070 中反馈：“使用 OpenRouter 时，完全不清楚哪些模型是免费的，希望 UI 中标注”。
- **Docker 体验：** 大量用户发现官方 Docker 镜像缺少 Web Dashboard（#5959），虽然 #5983 已修复，但暴露出镜像构建流程的测试空缺。
- **Web UI 日常使用痛点：** #5999 中多个反馈堆叠：“聊天框不能锁住”、“跑任务时界面没有反馈”、“无法清屏”。这些痛点已在今日合并的 #6220 及 #6083 中得到解决。
- **搜索插件信任危机：** #848 用户反馈：“花了5分钟搜索天气都超时了”，目前搜索插件工作异常，尚未修复。

## 8. 待处理积压

**⚠️ 需维护者立即关注：**

| 编号 | 类型 | 描述 | 最后活跃 |
|------|------|------|------|
| #5161 | **PR** | `fix(gateway): keep websocket steering additive` — 核心WebSocket逻辑修复，已挂起30天，标记为 `needs-author-action` | 2026-04-01 |
| #5207 | **PR** | `fix(web): theme switching, session crash, and CSS token consistency` — Web UI 多项关键修复，挂起30天 | 2026-04-02 |
| #5372 | **PR** | `fix(gateway): truncate oversized memory api payloads` — 防止内存接口因超大载荷挂起，挂起25天 | 2026-04-06 |
| #5770 | **PR** | `fix: use SqliteSessionBackend for session tools` — 解决会话工具在网关中返回空的问题，挂起16天 | 2026-04-15 |
| #5905 | **PR** | `fix: add workspace bind-mount support to DockerSandbox` — 修复 Docker Sandbox 无法访问工作目录的问题，挂起12天 | 2026-04-19 |
| #6101 | **PR** | `feat(webui): hot-switch model & preserve chat context` — 增强用户体验的重要 PR，挂起6天 | 2026-04-25 |

*以上 PR 多数标记了 `needs-author-action` 或 `needs-repro`，建议维护者统一推进或关闭。*

---

**总结：** v0.7.4 的发布与大批量 Web UI 修复合并标志着项目进入稳定期，但新手引导、搜索工具及 Docker 体验仍需继续打磨。社区对多代理架构、模型选择指南和 Web 交互细节充满期待。

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*