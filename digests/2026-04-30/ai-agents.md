# OpenClaw 生态日报 2026-04-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-30 04:36 UTC

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

好的，这是为您生成的 OpenClaw 项目动态日报（2026-04-30）。

---

# OpenClaw 项目动态日报 | 2026-04-30

**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源:** github.com/openclaw/openclaw
**报告周期:** 过去 24 小时 (截至 2026-04-30)

---

## 1. 今日速览

OpenClaw 项目今日社区活跃度极高，尤其在问题反馈（Issues）和代码贡献（PR）方面均达到 500 条峰值，表明项目正处于高速迭代与用户密集反馈期。值得注意的是，虽然新开/活跃的 Issue 数量（161）和待合并的 PR 数量（474）庞大，但已关闭的 Bug 和回归问题数量（339）同样显著，显示出维护团队正在积极处理积压问题并修复高优 Bug。最新发布的 `v2026.4.27` 版本带来了 DeepInfra 集成和 Codex Computer Use 等重要新特性，但同时也引发了一系列更新后的稳定性回归问题，成为今日社区热议的焦点。

- **活跃度评估**: 极高 🔥 (Issues 与 PR 数量均达峰值，社区讨论热烈)
- **项目健康度**: 中 (快速迭代中伴随大量回归问题，稳定性有待提升)

## 2. 版本发布

- **新版本**: `v2026.4.27`
- **链接**: [OpenClaw Release v2026.4.27](https://github.com/openclaw/openclaw/releases/tag/v2026.4.27)
- **主要内容**:
    - **Codex Computer Use 增强**: 为桌面控制模式集成了状态/安装命令、市场发现功能，并增加了故障闭合的 MCP 检查。感谢贡献者 @pash-openai。
    - **DeepInfra 提供商**: 正式将 DeepInfra 加入捆绑提供商集合，支持模型发现、媒体生成/编辑、TTS 和 Embedding 等功能。
- **破坏性变更 & 迁移注意事项**: 发布说明未明确指出破坏性变更。但根据今日社区反馈，从 `v2026.4.23` 或更早版本升级至 `v2026.4.24/25/27` 的用户遇到了 gateway 不可达、依赖缺失、窗口闪烁等回归问题。建议升级前务必做好备份，并关注 `openclaw doctor` 的诊断建议。

## 3. 项目进展

今日无 PR 被合并，大部分开放的 PR 仍在等待审核或处于开发状态。从累计数据看，待合并 PR 数量庞大（474），表明项目维护团队的代码审核能力可能成为当前瓶颈。

**重要待合并 PR 信号 (今日评论数最多的 PR):**
- **`#53716` [feat(gateway): add watchdog + startup error diagnostics]**: 这是一个核心的可靠性改进，为 Gateway 增加了看门狗和启动错误诊断机制。此 PR 旨在解决 Gateway 崩溃后无法自动恢复和通知的问题，一旦合并，将显著提升项目的基础稳定性。
    - [PR #53716](https://github.com/openclaw/openclaw/pull/53716)

## 4. 社区热点

今日社区讨论主要围绕两个核心矛盾：**新特性带来的功能性突破** 与 **更新引发的稳定性问题**。

- **热门 Issue #1**: `[Bug]: Gateway sidecar startup blocks...` (`#72846`) 和 `[Bug]: Openclaw no longer works after Update...` (`#72848`) - **稳定性回归恐慌**。这两个 Issue 获得了大量评论（共21条）和点赞（3+4），反映了从 `v2026.4.24` 升级后，大量用户遭遇了 Gateway 侧车启动阻塞、npm 依赖缺失、Gateway 无法访问等严重问题。用户情绪较为焦虑，普遍表达了“上次能用，更新后就坏了”的反馈。
    - [Issue #72846](https://github.com/openclaw/openclaw/issues/72846)
    - [Issue #72848](https://github.com/openclaw/openclaw/issues/72848)
- **热门 Issue #2**: `Community Skill Development & ClawHub` (`#50090`) - **生态核心诉求**。作为讨论最久的 Issue 之一（评论13），它持续聚焦于社区技能生态的痛点：`SKILL.md` 的承诺与实际体验存在差距，社区维护的成本过高。这反映出项目在快速构建核心功能的同时，开发者体验和社区治理的短板开始显现。
    - [Issue #50090](https://github.com/openclaw/openclaw/issues/50090)

## 5. Bug 与稳定性

今日报告的回归和崩溃问题呈爆发态势，是社区关注的重中之重。按严重程度排序如下：

1.  **严重 - 更新后崩溃/不可用**:
    - **`#72848`**: Intel Mac 更新后 Gateway 超时，完全无法使用。尚未有专门修复 PR。
    - **`#72058`**: 更新后 npm 依赖缺失，Telegram 和 TUI 无法启动。尚无专门修复 PR。
    - **`#70238`**: Windows 下后台进程闪现 cmd 窗口，造成屏幕闪烁。尚无专门修复 PR。
2.  **高 - 核心功能回归**:
    - **`#72846`**: `v2026.4.25` 中 Gateway 侧车启动再次阻塞 3 分钟。此为 `#63450` 的再次回归，反响强烈。尚无专门修复 PR。
    - **`#72355`**: Bonjour/mDNS 插件因硬编码主机名导致崩溃循环。尚无专门修复 PR。
    - **`#72526`**: 更新到 `v2026.4.24` 后 Gateway 运行时极其不稳定，需执行“医生修复+重启+禁用 Bonjour”的组合拳才能恢复。尚无专门修复 PR。
3.  **中 - 配置与行为 Bug**:
    - **`#46637`**: `reasoning_content` 包含在历史中导致后续 JSON 解析错误，影响模型切换体验。
    - **`#47487`**: Agent 工具配置文件 `alsoAllow` 失效，`exec` 工具绕过限制，存在安全风险。

**总结**: 本次更新周期引入了大量回归问题，特别是围绕 **Gateway 启动、依赖管理、Bonjour 插件** 等核心基础设施。维护团队需要优先稳定这些关键路径，否则将严重侵蚀用户信任。

## 6. 功能请求与路线图信号

- **高优先级信号**: **`SDK` 稳定性 (`#74704`)**。这是今日新开的 Issue，由维护者提出，目标明确为稳定 `@openclaw/sdk` 的对外客户端快乐路径。这表明项目开始重视外部开发者和工具链的接入体验，是走向成熟的标志。
    - [Issue #74704](https://github.com/openclaw/openclaw/issues/74704)
- **持续性呼声**: **`Steer Queue 模式` (`#50880`, `#48003`)** 和 **`持久化任务状态` (`#52640`)**。这两个由社区反复提出的功能需求（智能队列注入、长时间运行任务状态展示），代表了高级用户在复杂工作流和可用性方面的核心痛点。

## 7. 用户反馈摘要

- **核心痛点**:
    - **升级恐惧症**: 大量用户反映“不敢轻易更新”。每次更新都可能引入未知的回归问题，导致已经正常运行的 Gateway 宕机，修复成本高昂。
    - **诊断工具不足**: 当出现错误时（如连接失败、依赖缺失），用户反馈诊断信息不明确，需要依赖社区讨论和“玄学”操作（如重启、禁用插件）来排查。
    - **配置歧义**: 如 `messages.queue.mode: "steer"` 和 Telegram `replyToMode` 等配置存在“名义上有效，实际上无效”或“文档与行为不符”的情况，严重打击用户的配置信心。
- **典型用户画像**:
    - **尝鲜型用户**: 活跃在 Issue 区，积极尝试新功能，但极易被回归问题困扰。
    - **重度生产力用户**: 对 `Cron`、`Subagent`、`技能社区` 等功能有强烈需求，对系统稳定性和任务可靠性要求极高。
    - **生态贡献者**: 愿意开发插件和技能，但面临开发体验不佳、文档滞后、缺乏验证工具等挑战。

## 8. 待处理积压

以下为长期未响应或讨论激烈但尚未有明确进展的重要 Issue，建议维护者重点关注：

- **`#50090` - [Community Skill Development & ClawHub]**: 社区技能生态的基石问题，持续讨论了 42 天，评论 13 条，反映了生态建设的重要性和复杂性。项目组需给出明确的时间表或解决方案。
    - [Issue #50090](https://github.com/openclaw/openclaw/issues/50090)
- **`#50880` - [Steer queue mode silently degrades...]**: 功能性 Bug，涉及核心的消息队列和注入机制，评论 8 条，点赞 2。该功能无法正常工作会严重影响高级 Agent 编排能力。
    - [Issue #50880](https://github.com/openclaw/openclaw/issues/50880)
- **所有新建且无人回应的回归 Bug (24小时内)**:
    - `#72848`, `#72846`, `#72058`, `#70238`, `#72526`, `#72355`。这些是当前最紧急的 “项目着火” 点，需要立即响应和修复。
---

---

## 横向生态对比

好的，作为资深技术分析师，我已基于您提供的2026-04-30各项目动态，为您生成一份横向对比分析报告。

---

## 个人 AI 助手与自主智能体开源生态横向分析报告 (2026-04-30)

### 1. 生态全景

当前，个人 AI 助手与自主智能体（Agent）开源生态正处于 **“功能大爆炸”与“稳定性阵痛”并存的深度分化阶段**。一方面，以 OpenClaw、Hermes Agent、IronClaw 为代表的头部项目正快速落地多模态、新模型提供商、Agent 自我进化等前沿特性，社区贡献热情极高；另一方面，**“升级恐惧症”** 成为普遍现象，Gateway 不可用、会话丢失、配置继承混乱等回归问题频繁爆发，暴露出高速迭代下质量控制的短板。社区的核心诉求已从“能否实现功能”转向“功能是否可靠、可用、可控”，这标志着生态正从早期探索进入**精细化打磨与工程化验证**的关键转折期。

### 2. 各项目活跃度对比

| 项目 | 活跃度 | Issues (新/活跃) | PRs (新/活跃/待合并) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 🔥 | 161 | 474 (待合并) | v2026.4.27 | **中** - 迭代迅速，但稳定性回归问题严重 |
| **NanoBot** | 极高 | 显著 | 25 (合并/关闭) | v0.1.5.post3 | **好** - 特性与修复并行，响应迅速 |
| **Hermes Agent** | 极高 | 50 | 50 (18合并) | 无 | **好** - 修复高优Bug，夯实安全基础 |
| **PicoClaw** | 极高 | 13 | 20 | Nightly | **好** - 核心特性（自进化）落地 |
| **NanoClaw** | 极高 | 集中 | 20 (合并/关闭) | 无 | **好** - 新Provider与工具链快速推进 |
| **Moltis** | 极高 | 6 | 8 | 20260429.01/.02 | **好** - 安全漏洞修复迅速，功能扩展积极 |
| **CoPaw** | 高 | 活跃 | 活跃 | v1.1.5 | **中** - 频道稳定性问题持续困扰 |
| **LobsterAI** | 高 | 2 | 28 (合并) | 2026.4.29 | **好** - 大版本合并，功能丰富 |
| **ZeroClaw** | 高 | 活跃 | 1 (合并) | 无 | **中** - 修复多，但PR积压严重 |
| **NullClaw** | 低 | 1 | 0 | 无 | **静默** - 维护期，活跃度低 |
| **TinyClaw** | 无 | 0 | 0 | 无 | **静默** |
| **ZeptoClaw** | 无 | 0 | 0 | 无 | **静默** |

### 3. OpenClaw 在生态中的定位

- **技术定位：全能型 Agent 网关与路由先驱**。OpenClaw 是生态中少数将 **Gateway 侧车机制** 作为核心架构亮点的项目，强调复杂网络环境下的高可用模型路由与编排。
- **与同类优势对比**：
    - **对 NanoBot/Copaw**：NanoBot 侧重**渠道适配与配置隔离**，CoPaw 侧重**多Agent协作与工作区隔离**。OpenClaw 在 Gateway 的健壮性、消息队列（Steer Queue）、和社区技能生态（ClawHub）方面的野望更宏大，但这也成为了其当前稳定性的主要负担。
    - **对 Hermes Agent**：Hermes 更聚焦于**安全性与权限控制**（ACL、Redact Secrets），OpenClaw 则暴露了更多安全相关配置（如 `alsoAllow` 失效）带来的风险。
- **社区规模对比**：OpenClaw 今日的 Issue/PR 绝对数量（161/474）远超其他项目，表明其社区基数极大，用户反馈和贡献者提交都非常活跃，但同时也带来了严重的**维护者带宽瓶颈**。其 `v2026.4.27` 版本更新的频繁度也印证了其激进的迭代节奏。

**结论**：OpenClaw 是生态中 **规模最大、迭代最快、但稳定性风险也最高的项目之一**，是“敢死队”般的先行者。

### 4. 共同关注的技术方向

1.  **会话与上下文管理的可靠性**：
    - **涉及项目**：OpenClaw (#72846 Gateway阻塞)、NanoBot (#3546 失忆)、CoPaw (#3919 Session丢失)、NanoClaw (#2109 上下文压缩冲突)。
    - **具体诉求**：用户普遍报告在会话切换、Agent重置、或升级后出现会话上下文丢失、混乱或功能失效。这成为影响用户体验的共同核心痛点。

2.  **AI Provider 与模型的多元化与兼容性**：
    - **涉及项目**：NanoClaw (Google Gemini)、Hermes Agent (#17752 Anthropic OAuth)、PicoClaw (#2706 DeepSeek思考模型)、LobsterAI (小米MiMo/百度千帆)。
    - **具体诉求**：社区强烈要求摆脱对单一模型（尤其是OpenAI）的依赖，支持本地模型（Ollama）、国产模型（DeepSeek、千问）及企业级提供商（Google、Anthropic），并要求框架能优雅处理不同模型的参数差异（如thinking、reasoning_content）。

3.  **配置的精细化控制与继承透明化**：
    - **涉及项目**：Hermes Agent (#17737 配置不继承)、NanoBot (#3358 模型预设)、ZeroClaw (#6073 配置编辑器体验差)。
    - **具体诉求**：用户希望拥有对模型、Provider、速率限制、通知行为（`sendProgress`）等的**细粒度、按渠道或者按任务**的配置能力，并希望配置的继承逻辑清晰、可预期。

### 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能Agent网关与生态（ClawHub） | 追求极致功能与生态丰富度的重度技术用户 | 核心是 **Gateway 侧车**，强调消息分发与技能热插拔 |
| **NanoBot** | 多渠道、高可配置的个人AI助理 | 在多个社交平台运行Agent的用户，尤其注重飞书/微信 | 将 **Conversation（对话）作为一等公民**，与渠道深度绑定 |
| **Hermes Agent** | 安全、可控的企业级Agent网关 | 对访问控制、API密钥管理有高要求的企业/团队用户 | 强调 **安全策略（ACL、Secrets）、审计与权限隔离** |
| **PicoClaw** | 轻量级、可自我进化的边缘Agent | 希望运行在低配设备或探索Agent自主学习的技术爱好者 | 聚焦 **Agent Self-Evolution** 框架与低资源消耗 |
| **CoPaw** | 多Agent协作的工作台 | 需要多个Agent隔离、协作完成复杂任务的团队/开发者 | 强调 **Agent Workspace 隔离** 与多Agent编排 |
| **IronClaw** | 下一代WebAssembly Agent运行时 | 面向未来的、追求极致安全与跨语言能力的开发者 | 核心是 **Reborn 架构**，全面拥抱 WASM 和新的 Capability 模型 |
| **NullClaw** | 为超低资源设备优化的极简Agent | 树莓派、老旧硬件、边缘计算场景用户 | 追求极致的轻量化和低能耗，功能上做减法 |
| **ZeptoClaw** | 轻量级，面向特定任务的Agent | 开发者 | 通常作为库嵌入其他应用，而非独立运行 （基于名称推测）|
| **TinyClaw** | 极精简Agent库 | 有定制化需求的开发者 | 与 TinyAGI 项目相关，最小化对外部依赖 |

### 6. 社区热度与成熟度

- **高热度 / 快速迭代期**：**OpenClaw, NanoBot, PicoClaw, NanoClaw, Moltis**。这些项目社区贡献活跃，有新版本发布或重大功能合并，但普遍伴随较多的回归Bug。
- **稳健发展 / 质量巩固期**：**Hermes Agent, LobsterAI, IronClaw**。这些项目在修复关键Bug、夯实安全性和工程化（CI/CD改造）上着墨较多，代码质量相对较高，版本演进更为稳健。
- **问题集中爆发期**：**CoPaw, ZeroClaw**。项目虽有一定活跃度，但最核心的稳定性问题（如频道断连、新用户引导失败）长期未能解决，用户与维护者之间信息不对称，健康度堪忧。
- **低活跃 / 维护期**：**NullClaw, TinyClaw, ZeptoClaw**。这些项目在过去24小时无活动，可能已进入维护模式或社区已迁移。

### 7. 值得关注的趋势信号

1.  **“混合架构”思维萌芽**：ZeroClaw 社区提出的“预LLM命令快捷方式”（ Issue #5503）清晰表明，开发者开始认识到**所有操作都经由LLM推理的低效性**。未来的Agent架构可能会走向 “**LLM决策 + 规则引擎/即时响应**”的混合模式，将对确定性的、高频的指令进行短路处理，这将是AI Agent走向生产部署的重要一步。

2.  **“自我进化”从概念走向代码**：PicoClaw 合并了 Agent Self-Evolution 的运行时（PR #2722），虽然功能尚处早期，但这标志着**Agent能够在运行中记录经验、生成技能草稿并应用安全过滤器**。这不再只是研究论文中的概念，而是被开源社区快速工程化的前沿方向，预示着智能体从“被编程”向“自主学习”转变的趋势。

3.  **开发者体验成为核心竞争力**：从 OpenClaw 的“语义配置”争议到 ZeroClaw 的“新用户引导Bug”，再到 IronClaw 完善的 AI 贡献指南（CLAUDE.md），社区反馈显示，**丰富的功能已无法掩盖糟糕的开发者与入门体验**。未来，谁能率先解决“开箱可用”、“平滑升级”、“配置透明”这三大痛点，谁就能在用户留存和生态构建上占据绝对优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 NanoBot 开源项目分析师，以下是基于 2026-04-30 的 GitHub 数据生成的项目动态日报。

---

# NanoBot 项目动态日报 | 2026-04-30

## 1. 今日速览

今日 NanoBot 项目活跃度极高。开发者社区在解决数个关键 Bug 和推进新功能方面表现出强劲势头。一方面，围绕飞书（Feishu）渠道的 `reply_in_thread` 强制行为引发了用户集中反馈和多个修复 PR 的提交，项目维护者响应迅速。另一方面，通过发布 `v0.1.5.post3` 版本，项目在对话管理能力上迈出重要一步，同时有大量 PR 被合并。总体来看，项目正处于功能迭代加速和稳定性增强并行的阶段，社区参与度和贡献热情非常积极。

## 2. 版本发布

-   **版本**: `v0.1.5.post3`
-   **链接**: [Release v0.1.5.post3](链接: HKUDS/nanobot 查看发布页面)
-   **更新内容**:
    -   **核心特性**: 将对话（conversations）提升为一级公民。飞书群组话题（topics）现在拥有独立的会话隔离，这意味着机器人可以更好地在群组多话题场景中维护上下文，避免记忆混淆。
    -   **数据概览**: 该版本合并了 57 个 PR，并有 12 位新贡献者加入。
    -   **破坏性变更**: 未明确提及，但“飞书消息强制 `reply_in_thread`”的社区反馈暗示，此版本可能默认启用了该行为。
-   **迁移注意事项**: 如果您使用飞书渠道并依赖群聊中的普通回复模式（非 thread），请务必升级后检查配置。可能需要显式配置 `replyToMessage` 或回滚相关设置以避免行为改变。

## 3. 项目进展

今日共有 **25 个 PR 被合并/关闭**，项目在多方面取得显著进展。

-   **渠道稳定性与修复**:
    -   **飞书 (Feishu)**: 合并了 PR #3541，它引入了集中式钩子系统 `HookCenter`，为后续插件化开发奠定基础。同时，PR #3487 实现了 `sendProgress`/`sendToolHints` 的**按渠道配置**，回应了长期以来的功能请求。
    -   **微信 (Weixin)**: 修复了 PR #3517，解决了 Cron 任务触发消息因 `context_token` 过期或缺失而静默丢失的问题。
    -   **矩阵 (Matrix)**: 修复了 PR #3506，解决了 Windows 系统上因文件路径包含冒号导致的 `OSError`。
-   **核心代理与技能**:
    -   **子代理配置**: PR #3532 修复了子代理（subagent）不使用父代理最大迭代次数配置的问题，提升了调度灵活性。
    -   **技能**: PR #3457 和 PR #3539 分别新增了 `create-instance`（从对话创建新实例）和 `upgrade wizard`（升级向导）两个内置技能，增强了用户通过对话管理实例的能力。
    -   **内存**: PR #3508 确保了对 `history.jsonl` 文件的原子写入，防止了进程崩溃或断电导致的历史记录损坏，提升了数据安全性。
-   **新集成**:
    -   **网络搜索**: PR #3505 将 `olostep` 网络搜索供应商从 Nightly 分支移植到主分支，为用户提供了更多选择。
-   **AI 贡献者**: PR #3534 为仓库添加了 `CLAUDE.md` 和 `.agent/` 指南，旨在规范化 AI 编码助手（如 Claude Code）的贡献流程。

## 4. 社区热点

-   **最活跃 Issue**: **[Bug] NanoBot失忆 (#3546)**
    -   **链接**: [HKUDS/nanobot Issue #3546](链接: HKUDS/nanobot Issue #3546)
    -   **分析**: 此 Issue 在短时间内获得 6 条评论，是今日讨论焦点。用户反馈了 `v0.1.5.post3` 版本的两个核心痛点：1) **飞书群聊强制使用 Thread 回复**，对管理多个功能群组的开发者造成困惑；2) **关闭 Thread 回复后，机器人出现“失忆”**，即无法正确引用上下文。这直接指向了版本发布在飞书渠道上的交互模型变更可能存在问题，社区反应激烈。同时，另一个 Issue #3533 直接指向了强制 Thread 的代码位置，形成了对同一问题的多角度关注。

-   **最活跃 PR（竞品）**: **`docs: add CLAUDE.md and .agent/ guides` (#3534)** 和 **`fix(feishu): streaming card and tool hint respect reply_to_message` (#3543)**
    -   **链接**:
        -   [PR #3534](链接: HKUDS/nanobot PR #3534)
        -   [PR #3543](链接: HKUDS/nanobot PR #3543)
    -   **分析**: PR #3534 是一个开创性的尝试，旨在更好地引导 AI 协作工具理解项目，反映了开源社区拥抱 AI 开发的新趋势。而 PR #3543 则直接回应了社区最关切的 Issue #3533，试图通过代码修复飞书渠道的 bug，展现了维护者对高优先级问题的快速响应。

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | Issue 链接 | 状态 | Fix PR (如存在) |
| :--- | :--- | :--- | :--- | :--- |
| **严重** | 飞书群聊中强制 `reply_in_thread`，忽略用户 `replyToMessage` 配置 | [#3533](链接: HKUDS/nanobot Issue #3533) | **未关闭** | [#3543](链接: HKUDS/nanobot PR #3543), [#3547](链接: HKUDS/nanobot PR #3547) |
| **严重** | 飞书强制 Thread 后，机器人对话上下文丢失（"失忆"） | [#3546](链接: HKUDS/nanobot Issue #3546) | **已关闭** | 相关 PR 未直接链接，但推测与修复 Thread 行为相关 |
| **高** | Windows 下 Matrix 渠道因路径含冒号导致消息发送失败 | [#3506](链接: HKUDS/nanobot Issue #3506) | **已关闭** | 已修复 |
| **中** | Codex Provider 硬编码 60 秒超时且无重试，导致高失败率 | [#1783](链接: HKUDS/nanobot Issue #1783) | **已关闭** | 期待日志确认，已有合并的改进 |
| **低** | WebFetchTool 不尊重用户隐私，总是通过 Jina.ai 代理请求 | [#2341](链接: HKUDS/nanobot Issue #2341) | **已关闭** | 未提供链接 |

**结论**: 今日 Bug 集中在飞书渠道的对话模型变革上，是社区最关心的稳定性问题。好在项目组已提交至少两个修复 PR (#3543, #3547) 来解决 `reply_in_thread` 的强制问题，预计将很快修复。Matrix 和 Codex 的历史 bug 也得到解决。

## 6. 功能请求与路线图信号

-   **`sendProgress`/`sendToolHints` 按渠道配置（#3452）**
    -   **链接**: [Issue #3452](链接: HKUDS/nanobot Issue #3452)
    -   **状态**: **已实现**。此功能请求在 PR #3487 中被合并，表明项目对用户反馈的快速响应。
-   **模型预设（Model Presets）快速切换（#3358）**
    -   **链接**: [PR #3358](链接: HKUDS/nanobot PR #3358)
    -   **状态**: **待合并**。这是个高价值功能，允许用户通过命名预设在多个模型配置间快速切换。目前仍在审查中，很可能进入下一个版本。
-   **微信多账号支持（#3542）**
    -   **链接**: [PR #3542](链接: HKUDS/nanobot PR #3542)
    -   **状态**: **待合并**。此功能将允许单实例 NanoBot 同时运行多个微信账号，对多账号用户有极高吸引力。

**路线图信号**: `模型预设`和`微信多账号`是两个明确的路线图信号，表明项目正朝着更高阶的**用户可配置性**和**渠道功能深度**方向发展。

## 7. 用户反馈摘要

从今日的 Issue 评论中，可以提炼出以下用户声音：

-   **用户需求**:
    -   **控制权**: 用户希望拥有更多控制权，特别是关于“回复方式”（普通回复 vs. Thread 回复）。自动变更交互模型会导致体验割裂。
    -   **一致性**: 用户对“配置关闭某功能后，体验不一致（失忆）”感到困惑，期望配置能彻底、一致地生效。
    -   **灵活性**: 用户期望对 `sendProgress` 和 `sendToolHints` 等通知行为进行**按渠道**的精细控制，而不是全局一刀切（已在 #3487 中解决）。

-   **场景**:
    -   **多群组管理（个人开发者）**: 用户（如 EddiePengg）创建了多个功能不同的飞书群组（新闻、饮食、提醒），对管理和上下文隔离有更高要求。强制 Thread 破坏了其既有的信息流组织方式。
    -   **Cron 任务**: 用户（如 alexhopes）依赖 Cron 定时任务进行工作流，对 60 秒超时和缺乏重试机制非常敏感。

-   **满意点**:
    -   用户（如 allanpk716）在报告 Matrix 的 Windows 路径问题时，认可机器人能正常接收和 LLM 处理消息，说明核心推理链路是稳定的。

## 8. 待处理积压

以下为长期未合并或未回应的 PR，提醒维护者关注：

-   **[PR #3358] feat(config): add model presets for quick model switching**
    -   **链接**: [PR #3358](链接: HKUDS/nanobot PR #3358)
    -   **状态**: 打开中，已 9 天，无更新。此功能具有长期价值，且代码审查复杂，建议安排评审。
-   **[PR #2867] telegram group allowlist, fallback agents with context tokens...**
    -   **链接**: [PR #2867](链接: HKUDS/nanobot PR #2867)
    -   **状态**: 打开中，已 24 天。这是一个功能较为丰富的 PR，涉及 Telegram 群组白名单等特性。虽然被标记为 `invalid`，但其中部分功能可能仍值得讨论。建议维护者明确其最终状态（关闭或重新审核）。
-   **[Issue #2341] WebFetchTool privacy concern**
    -   **链接**: [Issue #2341](链接: HKUDS/nanobot Issue #2341)
    -   **状态**: 已关闭但无解决方案。这是一个涉及用户隐私的合理关切。虽然 Issue 关闭了，但问题的根源（所有流量都经过 Jina.ai）依然存在。建议公开讨论一个解决方案，例如允许用户选择本地解析或启用 Jina 的可选开关。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的Hermes Agent GitHub数据生成的2026-04-30项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-04-30

## 今日速览

今日项目活跃度极高，共有 **50条Issues** 和 **50条PRs** 更新，社区参与和贡献异常踊跃。新报告的Bug和功能请求数量庞大，其中 **安全性** 和 **配置继承** 问题是今日的焦点。维护团队响应迅速，集中合并/关闭了 **18个PR**，特别是通过了一系列技术债务清理和功能拯救（Salvage）的PR，展现了积极的项目维护姿态。尽管没有新版本发布，但大量高价值的PR等待合并，预示着下一个版本将包含重大更新。

## 版本发布

无

## 项目进展

今日项目维护者（主要贡献者为 `teknium1`）通过一系列“拯救式”合并，高效处理了多个遗留问题，显著提升了代码质量和安全性。主要进展包括：

- **安全性加固 (P1/P0)**：
    - **#17748 [CLOSED]**: `fix(telegram): support group user allowlist` 修复了Telegram群组缺少基于用户ID的访问控制问题，增强了群组安全性。
    - **#17746 [CLOSED]**: `fix(security): apply ACL checks to QQBot guild messages` 修复了QQBot适配器在频道和服务器私信等场景下未应用访问控制列表的问题。
    - **#17750 [CLOSED]**: `fix(agent): spawn OpenRouter pre-warm thread only once per process` 修复了长运行网关进程中线程泄漏的关键Bug，避免了Linux线程限制导致的服务崩溃。
- **核心功能修复**:
    - **#17747 [CLOSED]**: `fix(cron): clear auto-delivery thread context between jobs` 确保Cron任务（如自动推送）在每次执行时状态隔离，防止上下文污染。
    - **#17752 [OPEN]**: `fix(anthropic): reactive recovery for OAuth 1M-context beta rejection` 针对Anthropic OAuth用户的1M上下文窗口选择性问题提供了优雅的降级方案。
- **技术债务与UI改进**:
    - **#17745 [CLOSED]**: `feat: add Models dashboard tab` 新增了Web仪表盘的**Models标签页**，提供模型层面的详细分析（Token分布、功能徽章等），提升了可观测性。
    - **#17744 [CLOSED]**: `feat(skills): /reload-skills slash command` 新增了`/reload-skills`命令，允许用户在不重启网关的情况下热加载技能。

这些合并清晰地表明项目正从“快速迭代功能”转向“夯实基础、提升稳定性和安全性”。

## 社区热点

今日社区讨论热度极高，三个话题备受关注：

1.  **持续会话记忆 (Persistent Session Memory)** [#8457](https://github.com/NousResearch/hermes-agent/issues/8457)
    - **评论数: 6** | 用户 `sephmartin` 提出一个极具价值的功能请求：为Hermes添加**持久化会话记忆**，支持跨会话搜索和自动压缩。这触及了当前会话在重启后丢失上下文的核心痛点，是提升Agent自主性和连续性的关键需求，获得了社区广泛共鸣。

2.  **Telegram话题技能重置Bug** [#6508](https://github.com/NousResearch/hermes-agent/issues/6508)
    - **评论数: 5** | 这是一个历史悠久的Bug，用户 `willy-scr` 报告在Telegram论坛话题中使用`/new`重置会话后，原先绑定的技能（Skill）不会被重新注入。这严重影响了需要特定技能的场景，揭示了技能状态管理系统存在的缺陷。

3.  **Serious Plagiarism 指控** [#17688](https://github.com/NousResearch/hermes-agent/issues/17688)
    - **评论数: 2** | 用户 `xuyinhui33-sys` 提出了严重指控，声称Hermes Agent的核心架构抄袭自一个名为EvoMap的开源项目。尽管此Issue已被标记为 `[duplicate, invalid]`，但其评论数和性质本身构成了一个社区热点，需要维护者公开澄清或处理。

**背后诉求分析**：社区的核心诉求集中在“**为Agent注入长期记忆**”和“**提升特定平台下技能系统的可靠性**”。前者关乎Agent的智能化水平，后者关乎用户体验的一致性。抄袭指控虽可能不实，但反映了社区对核心架构原创性和透明度的关注。

## Bug 与稳定性

今日报告的Bug数量较多，按严重程度排序如下：

- **P0 - 严重**:
    - **[#17691] Security: HERMES_REDACT_SECRETS off-by-default exposes API keys** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17691)：这是**今日最严重的安全问题**，默认配置下，用户API密钥可能在聊天界面明文显示。维护者需要紧急修复。

- **P1 - 高**:
    - **[#17648] Matrix messages returning error** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17648)：Matrix平台适配器因内部模块导入错误完全不可用。
    - **[#17724] Discord native slash commands bypass DISCORD_ALLOWED_CHANNELS** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17724)：Discord原生斜杠命令绕过了通道许可限制，可能导致Agent在不该响应的频道中操作。
    - **[#17750] fix(agent): spawn OpenRouter pre-warm thread only once per process** [已修复 - PR #17750已合并](https://github.com/NousResearch/hermes-agent/pull/17750)：确认了高负载下的线程泄漏问题，已被PR修复。

- **P2 - 中**:
    - **[#17743] profile create --clone-all recurses into destination** [已关闭](https://github.com/NousResearch/hermes-agent/issues/17743)：配置克隆功能存在递归问题，导致深层嵌套目录。问题已修复。
    - **[#17452] custom_providers mangles dotted model names** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17452)：自定义提供者在处理带点的模型名称时出错，影响本地代理配置。
    - **[#17737] Auxiliary tasks don't inherit provider-level base_url** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17737)：辅助任务（会话搜索、压缩等）不继承主配置的提供商URL，导致使用自定义提供者时功能异常。

- **P3 - 低**:
    - **[#17705] Auxiliary title generation failed when using Minimax China** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17705) / **[#17700] Terminal ASCII tables misalign with mixed Chinese/ASCII** [OPEN](https://github.com/NousResearch/hermes-agent/issues/17700)：报告了多个关于UI和特定提供商兼容性的问题。

## 功能请求与路线图信号

今日的功能请求显示了社区对Agent精细化控制和扩展性的强烈需求：

- **即将纳入版本**:
    - **[#17756] feat(delegate): add per-call model/provider/base_url/api_key overrides** [OPEN](https://github.com/NousResearch/hermes-agent/pull/17756)：此PR与Issue #17732和#17685直接相关，用户希望能在调用`delegate_task`时，为子任务指定不同的模型或提供商。这个PR的实现将大幅提升任务委派的灵活性和成本控制效率，**大概率会被纳入下一版本**。

- **可能纳入版本**:
    - **[#10016] Support browser-compatible Codex login** [OPEN](https://github.com/NousResearch/hermes-agent/issues/10016) (👍 3): 增加浏览器兼容的Codex登录方式，为受网络限制或使用共享凭据的用户提供便利。
    - **[#17749] feat: per-model rate limiter to proactively avoid 429 errors** [OPEN](https://github.com/NousResearch/hermes-agent/pull/17749): 提案为每个模型设置独立的请求速率限制，主动避免429错误。对于依赖高延迟或低配额API提供商（如NVIDIA NIM）的用户非常实用。
    - **[#17754] feat(plugins): bundle hermes-achievements** [OPEN](https://github.com/NousResearch/hermes-agent/pull/17754): 官方集成成就系统，增强游戏化和用户粘性。

- **长期信号**:
    - **[#8457] Persistent Session Memory** [OPEN](https://github.com/NousResearch/hermes-agent/issues/8457): 这是社区对Agent记忆能力的长远期待，虽然实现复杂，但代表了Agent下一阶段演进的关键方向。

## 用户反馈摘要

- **痛点**:
    - **配置继承混乱**(#17737, #17685)：用户普遍反映辅助任务、委派任务等子功能不继承主配置，导致使用自定义提供商时频繁出错，学习成本高。
    - **特定平台支持不佳**(#17648, #17705)：对Matrix、WeCom等平台的支持存在较多Bug或功能缺失，用户体验割裂。
    - **内存与状态管理问题**(#6508, #6507)：会话重置后技能丢失（Memory Leak）、会话搜索结果聚焦不准，影响了Agent的连续性和可靠性。
- **使用场景**:
    - 大量用户在使用**本地或自定义代理（Proxy）** (#17452, #6511)以及**中国企业/开源模型**（如Minimax, Ollama），反映了避开依赖海外API、寻求更灵活私有化部署的强烈趋势。
    - 用户对**Telegram、Discord等社区聊天平台的深度集成** (如话题绑定技能) 有高频需求，表明Hermes正被用于构建社区机器人。

## 待处理积压

- **长期未关闭的重要Bug**:
    - **[#6508] Topic-bound skill not re-injected after /new session reset** (P2, 创建于2026-04-09): 此Bug已开放超过3周，涉及核心技能系统在Telegram消息上的可靠性，讨论热度高，应优先处理。
    - **[#6511] Discord image/audio attachments fail under DNS-rewriting proxies** (P2, 创建于2026-04-09): 影响中国及特殊网络环境用户的Discord媒体上传功能，存在隐性SSRF风险，优先级应提升。

- **重要但待合并的PR**:
    - **[#6410] feat(codex-chat): native multimodal vision** (P3, 创建于2026-04-09): 一个大型的、支持Codex原生多模态视觉的PR，功能重大，但已搁置近一个月，应评估其合并阻塞点并推进。
    - **[#5652] fix(approval): honour approvals.gateway_mode config** (无严重级别, 创建于2026-04-06): 修复了一个重要的配置不被读取的Bug，合并时间已接近一个月，建议优先审查合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的PicoClaw GitHub数据生成的2026-04-30项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-04-30

## 1. 今日速览

项目今日活动量**极高**，社区贡献与核心维护齐头并进。24小时内，诞生了13个新Issue与20个PR，显示出强劲的社区活力。其中最显著的是`Agent Self-Evolution`功能的基础运行时被合并，标志着项目向“智能体自我进化”迈出关键一步。同时，社区报告的多个高优Bug（如Session历史竞争、PID校验问题）也得到了快速响应，但值得注意的是，仍有多个长期存在的旧Issue在今日获得新的评论，表明用户痛点仍未完全解决。

## 2. 版本发布

-   **`v0.2.7-nightly.20260430.a36472b5`**：
    -   **类型**: Nightly Build (自动构建)
    -   **说明**: 这是一个可能不稳定的自动化构建版本。其主要变化可参考 [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) 的完整变更日志。
    -   **注意事项**: 建议仅在测试环境使用。

## 3. 项目进展

今日项目取得了实质性进展，尤其是基础架构方面的提升：

-   **Agent 自我进化框架落地**：PR [#2722](https://github.com/sipeed/picoclaw/pull/2722) 被合并。该PR将第一版可用的`Agent Self-Evolution`运行时集成到正常的Agent循环中。它能够记录可学习的任务成果、进行后台聚合、生成技能草稿并应用安全过滤器。这是项目迈向“自主迭代”的关键里程碑。
-   **Docker 构建修复**：PR [#2700](https://github.com/sipeed/picoclaw/pull/2700) 被合并，修复了`docker-compose.yml`缺少`build`指令以及`Dockerfile`中Golang版本错误的问题，恢复了`make docker-build`命令的功能，重新打通了容器化部署路径。
-   **飞书 (Feishu) 频道功能增强**：PR [#2708](https://github.com/sipeed/picoclaw/pull/2708) 和 [#2713](https://github.com/sipeed/picoclaw/pull/2713) 被合并。前者修复了飞书图片下载问题并增加了富文本图片支持；后者修复了一个长期Bug，当工具设置`ResponseHandled=true`时，飞书消息中的动画会停止更新。
-   **TUI 废弃与CLI功能增强**：PR [#2710](https://github.com/sipeed/picoclaw/pull/2710) 被合并，为CLI添加了对自定义OpenAI兼容端点的支持，并移除了TUI版本。这与社区讨论的TUI废弃路线图保持一致。

**结论**：项目核心功能（Agent自进化、部署体验、渠道兼容性）均得到加强，开发节奏稳健。

## 4. 社区热点

-   **热点话题：TUI 废弃提案引发广泛关注**
    -   **Issue #2208**：[RFC] Proposal to deprecate the TUI version and migrate its core features to the CLI
    -   该问题获得了 **8个 👍** 和1条评论，是近期社区参与度最高的话题之一。尽管提案本身已关闭（CLOSED），但后续PR #2710的合并表明，维护者采纳了社区建议，正在将TUI的核心功能向CLI迁移。
    -   **诉求分析**: 用户希望项目聚焦资源，将维护成本高的TUI功能整合到更稳定的CLI中。

-   **活跃讨论：开放AI端点迁移**
    -   **Issue #2171**：[Refactor] Consider moving all OpenAI based endpoints supported to use OpenAI Responses API
    -   虽然是一个旧Issue（创建于2026-03-30），但在今日仍有更新（`stale`标记被更新）。该问题获得了9条评论，讨论如何将Chat Completions API迁移到OpenAI新推荐的Responses API。
    -   **诉求分析**: 社区贡献者和用户希望项目紧跟OpenAI官方技术演进，保持API的先进性和兼容性。

## 5. Bug 与稳定性

今日报告的Bug主要集中在Provider和系统稳定性方面，严重程度较高。

| 严重程度 | Issue | 描述 | 是否有Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | **Session历史竞争Bug复现**：`tool_use_id` 400错误在`v0.2.5`版本中仍可复现，影响Anthropic Messages API。 | 无 |
| **高** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **单例PID检查缺陷**：PID文件被无关进程复用后，网关无法启动，导致崩溃循环。 | 无 |
| **中** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) | **DeepSeek v4思考模型不兼容**：没有保存和回传`reasoning_content`字段，导致API返回400错误。 | PR [#2707](https://github.com/sipeed/picoclaw/pull/2707) 在处理类似问题 |
| **中** | [#2718](https://github.com/sipeed/picoclaw/issues/2718) | **严格Provider处理图片消息失败**：非多模态模型（如deepseek-chat）收到图片URL后，因JSON解析失败导致400错误，且问题会因消息历史持续复现。 | PR [#2717](https://github.com/sipeed/picoclaw/pull/2717) 已提交修复 |
| **低** | [#2716](https://github.com/sipeed/picoclaw/issues/2716) | **SVG文件通过Telegram发送失败**：`inferMediaType`将SVG错误映射为`SendPhoto`方法，导致Telegram拒绝。 | 无 |

**总结**: 今日报告了一些**回归性**和**基础设施**问题。Session历史竞争Bug (#2721)是旧Bug重现，需重点关注。PID检查问题(#2720)是系统安全性的潜在隐患。好在针对DeepSeek的兼容性问题，已有PR (#2717, #2707)正在修复中。

## 6. 功能请求与路线图信号

-   **高潜力功能**：
    -   **多用户群聊消息归属**：PR [#2715](https://github.com/sipeed/picoclaw/pull/2715) 为历史消息添加发送者属性，使模型能在群组中区分不同用户。这是一个对Discord、Telegram等渠道体验影响重大的增强，很可能被纳入下个版本。
    -   **Intel OpenVINO 模型服务支持**：PR [#2703](https://github.com/sipeed/picoclaw/pull/2703) 为本地推理添加了对Intel OpenVINO的支持，将吸引使用Intel硬件的用户群体。
-   **路线图信号**：
    -   **TUI废弃完成**：随着PR #2710的合并，TUI废弃的路线图正在稳步推进。
    -   **Agent自进化**：PR #2722的合并，标志着该项目进入了“自进化”能力的早期探索阶段，这是项目长期路线图中的核心特性。

## 7. 用户反馈摘要

-   **痛点**：
    -   **执行工具路径误判**：Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) 中，用户报告`exec`工具的`guardCommand`方法过度限制，将诸如`curl`查询天气的命令错误地判断为路径越界，影响日常使用。
    -   **会话上下文丢失**：Issue [#2621](https://github.com/sipeed/picoclaw/issues/2621) 中，用户反馈API超时后会话上下文丢失，系统创建重复会话而非恢复原会话，导致对话中断。
    -   **环境变量支持**：Issue [#2623](https://github.com/sipeed/picoclaw/issues/2623) 中，用户提出无法通过`.env`文件为自定义技能传递环境变量，限制了技能开发的灵活性。
-   **满意点**：
    -   **Slack Webhook 渠道**：PR [#2719](https://github.com/sipeed/picoclaw/pull/2719) 新增了`slack_webhook`输出专用频道，用户可以通过简单的Webhook将消息推送到Slack，支持Block Kit格式化，这对于只想将PicoClaw作为通知工具的用户是极佳体验。

## 8. 待处理积压

以下为长期未得到充分回应或合并的重要请求，建议维护者关注：

-   **Issue #1042**：[BUG] exec工具的guardCommand方法问题（创建于2026-03-04，👍: 1）。该问题严重限制了`exec`工具的功能，且至今仍在活跃。这是一个影响用户体验的核心Bug。
-   **Issue #2548**：[Error] Multiple authentication credentials received.（创建于2026-04-16）。用户配置多凭证时遇到问题，此问题可能导致配置流程受阻，但其紧迫性因`stale`标记而被低估。
-   **PR #2192**：[fix(provider)] anthropic_messages sends system as content blocks with cache_control（创建于2026-03-30）。该PR修复了Anthropic提示缓存的关键功能，但已一个月未被审核或合并，可能成为阻塞其他Provider相关功能合并的瓶颈。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 GitHub 数据生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-04-30

### 1. 今日速览

今日 NanoClaw 项目呈现出**极高活跃度**，主要受一项重大功能（Google Gemini 提供商支持）的多次迭代提交以及一系列集中在 Agent 上下文管理与配置修复的批量 PR 推动。过去 24 小时内，项目共有 50 个 PR 被提交或更新，其中 20 个已成功合并或关闭，显示出强大的交付能力。同时，社区报告了两个与上下文压缩（Context Compact）相关的核心痛点，开发者也通过多个 PR 直接响应了这些稳定性问题。总体而言，项目正处于功能扩展与深度优化的并行冲刺阶段。

### 2. 版本发布

**无新版本发布。**

### 3. 项目进展

今日项目进展显著，共合并/关闭了 20 个 Pull Requests，涵盖了从核心架构到外围工具的多个方面。以下是几项关键推进：

- **核心功能里程碑：添加 Google Gemini 提供商支持**
  经过 #2135 和 #2137 的多次尝试与迭代，开发者 `farooqu` 最终成功提交了 **#2136** (目前为 OPEN 状态)，为 NanoClaw 引入了 Google Gemini 作为新的 Agent 提供商。这标志着项目在摆脱对单一模型提供商的依赖上迈出了重要一步，为用户提供了除 OpenAI Codex 之外的又一选择。

- **Google 服务集成工具链完善**
  由 `grtwrn` 提交的两个 Utility 技能 PR **#1961 (add-gmail-tool)** 和 **#1964 (add-gcal-tool)** 已成功合并。这两个技能遵循 NanoClaw v2 的 OneCLI 凭证管理规范，为 Agent 添加了原生的 Gmail 和 Google Calendar 操作能力，完善了个人助理场景的核心工具链。

- **稳定性和配置修复**
  开发者 `andrebrov` 在一天内提交了一系列密集的修复与改进 PR，其中 **#2128** 修复了无头 Linux 主机的登录提示问题，而 **#2109** 和 **#2138** 直指用户报告的上下文压缩问题。这些 PR 的快速出现表明项目对社区反馈有极高的响应速度。

- **其他合并项**
  - **#2140**：添加了 GitHub Copilot 指令，改善了开发者协作体验。
  - **#1767**：`add-agentcash` 技能合并，允许通过 x402 微支付进行 API 调用。

### 4. 社区热点

当日讨论最为密集的焦点围绕在 **Google Gemini 提供商** 的支持上。虽然相关的 Issues 讨论不多，但共有 **3 个 PRs (#2135, #2136, #2137)** 直接或间接地针对此功能。这并非偶然，它反映了社区对 **AI 提供商多元化** 的强烈诉求，用户希望摆脱对单一模型的依赖，拥有更多的选择权和灵活性。这些 PR 的多次关闭-重开模式也体现了开发者为此功能达到最佳集成状态所做的细致工作。

另一个值得关注的信号是 **#2136** 和 **#2141** (dota-feishu decision bridge) 这两个仍在开放中的大型 PR，它们分别代表了“**核心模型扩展**”和“**企业级工作流集成**”两大方向，是未来社区讨论和协作的重点。

### 5. Bug 与稳定性

今日报告的 Bug 数量不多，但问题非常集中，且严重程度较高：

- **高严重性：上下文压缩问题**
  - **Issue #2109**：用户 `Aswinmcw` 报告在使用 Opus 4.7 模型时，上下文窗口在 200K tokens 时就被强制压缩，尽管该模型支持高达 1M tokens。用户尝试修改变量但无效。
    - **状态**：无修复 PR 直接链接，但开发者 `andrebrov` 提交的 **#2132**（固定 Opus 4.7 的 thinking.display 设置）和 **#2138**（转发 AGENT_AUTO_COMPACT_WINDOW 环境变量）直接关联并尝试解决此生态内的配置问题。
    - **链接**: [Issue #2109](https://github.com/qwibitai/nanoclaw/issues/2109), [PR #2138](https://github.com/qwibitai/nanoclaw/pull/2138)

- **中严重性：容器环境变量覆盖**
  - **Issue #1820**：已关闭。核心问题是容器 `agent-runner` 无条件覆盖了 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 环境变量，导致用户无法进行紧急调优。此问题已在最新版本中得到解决，但其所暴露的“**环境变量传递控制权**”问题是此类复杂部署场景下的典型痛点。
    - **状态**: 已关闭。解决方案可能通过 #2138 等 PR 实现。
    - **链接**: [Issue #1820](https://github.com/qwibitai/nanoclaw/issues/1820)

- **高严重性：API 处理错误**
  - **Issue #2139**：用户 `omniscient` 报告在上传第二张图片处理完毕后，Agent 完全停止工作并返回 400 错误 (`invalid_request_error - Could not process image`)。该问题发生在多人协作使用（用户与妻子共享流程）的场景中，暗示可能存在会话状态冲突或并发处理缺陷。
    - **状态**：新开 Issue，暂未关联修复 PR，需要核心开发者重点排查。
    - **链接**: [Issue #2139](https://github.com/qwibitai/nanoclaw/issues/2139)

### 6. 功能请求与路线图信号

虽然今日没有直接的新功能请求 Issue，但从社区提交的 PR 中可以清晰看到未来路线图的几个信号：

- **AI 提供商扩展**：`farooqu` 提交的 **#2136** (Google Gemini) 是一个强烈的信号。如果能稳定集成，为 AWS Bedrock、Anthropic 等其他提供商开发类似支持的 PR 将大概率出现。
- **企业级自建流程**：`brookgao` 提交的 **#2141** (dota-feishu decision bridge via IPC) 显示了将 NanoClaw 集成到企业内部决策流程（如飞书审批）的尝试。这暗示项目正在从“个人助理”向“团队/企业协作 Agent”进化。
- **知识库/维基功能**：`andrebrov` 提交的 **#2133** (add knowledge/raw/ ingest directory) 虽然只是搭建了知识库的“文件接收”基础结构，但它明确指向了为 Agent 构建长期记忆和领域知识的目标。这很可能成为未来的一个重量级功能。
- **配置灵活性**：`andrebrov` 的 **#2129** (per-group model override) 和 **#2131** (support remote HTTP/SSE MCP servers) 都指向了同一个方向——**为高级用户和运维人员提供更精细、更灵活的配置能力**。

### 7. 用户反馈摘要

从今日的 Issues 评论中，我们可以提炼出以下几点用户反馈：

- **核心痛点：上下文窗口控制**：用户 `Aswinmcw` (Issue #2109) 的反馈非常典型——用户清楚地知道模型能力（1M token），但框架的限制（200k 强制压缩）阻碍了其发挥。这反映了用户对 **“最大化利用昂贵模型性能”** 的迫切需求。
- **操作场景：多用户/并发使用**：用户 `omniscient` (Issue #2139) 的问题揭示了家庭或小团队共享一个 Agent 实例时可能遇到的难题。当第二个用户开始上传文件时，Agent 崩溃。这暴露了当前会话管理可能在**并发控制**方面存在短板。
- **运维痛点：环境变量不可控**：Issue #1820 的作者 `nhod` 的反馈揭示了一个典型的运维痛点：即使通过高级配置（如设置环境变量）也无法覆盖系统的默认行为，这剥夺了用户的**诊断和调优权力**。

### 8. 待处理积压

以下为长期未响应或可能被忽视的重要议题，提醒维护者关注：

- **长期开放的大功能 PR**：
  - **[OPEN] #1624: feat: Matrix E2EE channel + per-group model/effort configuration**
    - **创建时间**：2026-04-04
    - **状态**：已开放近一个月，并持续更新。这是一个兼具“端到端加密通信”和“细粒度配置”的重大功能，但由于涉及面广，可能一直在进行细致的代码审查与修改。
    - **链接**: [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)

- **待处理的重要 Bug**:
  - **[OPEN] #2139: API Error: 400 - invalid_request_error - Could not process image** (上文已分析)
    - **创建时间**：2026-04-29
    - **状态**：此为新发 Issue，虽未积压，但严重性高，建议优先处理。
    - **链接**: [Issue #2139](https://github.com/qwibitai/nanoclaw/issues/2139)

- **潜在的高价值议题**：
  - **[OPEN] #2109: Context compact issue** (上文已分析)
    - **创建时间**：2026-04-29
    - **状态**：新 Issue，但直接触及用户性能痛点，且已有系列相关 PR 出现。维护者应确保解决方案能彻底关闭这次“上下文压缩门”。
    - **链接**: [Issue #2109](https://github.com/qwibitai/nanoclaw/issues/2109)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是根据您提供的 NullClaw 项目数据生成的 2026-04-30 项目动态日报。

---

## NullClaw 项目动态日报 | 2026-04-30

### 1. 今日速览

过去24小时内，NullClaw 项目活动水平较低，主要体现为一次 Issue 的关闭和一个新 Bug 的持续讨论。无新的 Pull Request 或版本发布。项目目前处于相对平稳的维护期，社区关注点集中在改善低资源设备上的实用性与完善文档。活跃度评估为 **低**。

### 2. 版本发布

过去24小时内无新版本发布。

### 3. 项目进展

- **文档完善**：Issue #874 关于缺失安全策略 `default_allowed_commands` 文档的问题已被关闭。这表明项目维护者已注意到并处理了用户报告的文档缺陷，但合并的具体文档更新内容需查看提交历史进一步确认。
    - 链接: [Issue #874](https://github.com/nullclaw/nullclaw/issues/874)

### 4. 社区热点

- **低资源设备可用性 (Issue #871)**：**【单日热点】** 虽然评论数不多（1条），但 Issue #871 是当日唯一处于活跃状态的 Bug 报告，其核心诉求直接关系到项目的核心定位——在廉价、低性能设备上运行。用户 `uMendex` 指出 `web_search` 功能在当前设计下，依赖 Brave Search API 等外部服务对这类设备不实用，凸显了项目在实现通用搜索功能时与硬件限制之间的矛盾。
    - 链接: [Issue #871](https://github.com/nullclaw/nullclaw/issues/871)

### 5. Bug 与稳定性

**严重 Bug (活跃)**:
- **#871 [OPEN]**: `web_search` 在低资源设备上不实用，因缺乏对 DuckDuckGo 等本地友好型搜索引擎的直接支持。该问题被标记为“Critical”，但尚未有关联的修复 PR。项目组可能需要评估是否添加一个无需外部 API Key 的、更轻量的搜索后端。
    - 链接: [Issue #871](https://github.com/nullclaw/nullclaw/issues/871)

**已关闭 (问题已解决)**:
- **#874 [CLOSED]**: 安全策略 `default_allowed_commands` 文档缺失。此问题已被关闭，表明维护者已采纳该反馈，但具体的文档更新 commit 需在 PR 或提交历史中确认。

### 6. 功能请求与路线图信号

- **搜索功能优化** (从 Issue #871 提炼)：用户明确表达了在低资源设备上运行且不希望依赖外部 API 的搜索需求。这很可能是一个强烈的功能请求信号，要求项目路线图考虑整合离线或对计算资源要求更少的搜索方案（如本地文件搜索或对 DuckDuckGo Lite 等轻量接口的支持）。目前暂无关联的 PR 或 RFC。

### 7. 用户反馈摘要

- **核心痛点 (从 Issue #871 提炼)**：用户 `uMendex` 的真实痛点在于他们的设备（弱、廉价、低资源）无法有效利用现有的 `web_search` 功能，这削弱了 NullClaw 在这些设备上的核心价值。用户的期望是项目能找到一种更普适、零配置或低依赖的搜索方案，以支撑其在边缘设备上的主要使用场景。
- **社区贡献 (从 Issue #874 提炼)**：用户 `Mental-Vortex` 发现了文档缺失的问题，体现了社区对项目规范性和可用性的关注。此问题被快速关闭，说明维护者对文档类反馈的处理较为积极。

### 8. 待处理积压

- **无突出的长期未响应 Issue 或 PR**。当前唯一的活跃 Issue (#871) 是最近提出的（2026-04-25），且已有一定讨论。项目维护者应重点关注此问题，以确定修复方向或给出明确的功能建议回复，避免其演变为长期积压。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是您要求的 IronClaw 项目 2026-04-30 动态日报。

---

## IronClaw 项目动态日报 — 2026-04-30

### 1. 今日速览

项目进入高强度开发与整合阶段，活跃度极高。核心焦点是 **“Reborn” 架构的重大落地**，围绕该架构有大量 PR（#3099, #3098, #3095, #3097 等）被提交和讨论，标志着 v2 运行时、WASM 工具以及主机运行时服务正在系统性地构建。同时，CI/CD 流程正转向 `main` 分支的合并队列模式（#3104, #2779, #2783），为稳定发布做准备。值得注意的是，`v0.27.0` 版本发布与 QA 测试暴露了若干 Bug（#3103, #3082, #3081），但项目整体处于积极向上、快速迭代的健康状态。

### 2. 版本发布

- **`ironclaw-v0.27.0` (发布于 2026-04-29)**
  - **更新内容**:
    - **`(engine-v2)`**: 为 v2 运行时合约增加了规范的 capability 状态词汇表 (#2825)。
    - **`(engine-v2)`**: 集中化了跨 prompt、runtime、bridge projection 和 tool 表面的 action-vs-capability 策略。
    - **破坏性变更**: Release Notes 未明确列举。由于涉及 engine-v2 和策略层调整，任何依赖旧版 action/capability 交互逻辑的集成或插件可能都需要适配。
  - **链接**: [Release v0.27.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.27.0)

### 3. 项目进展 (关键 PR 与核心功能推进)

今日有 **31 个 PR 被合并或关闭**，主要进展集中在两大方面：

1.  **Reborn 架构基础设施建设**:
    - **`reborn-integration` 分支合并**: 多个针对 `reborn-integration` 分支的 PR 被合并，包括：修正 `ProcessError` 类型转换错误（#3084）、添加了 secrets 与网络边界层（#3077）、以及 WIT 兼容 WASM 工具运行时（#3096，尽管随后被 revert）。
    - **核心服务与运行时登场**: `ironclaw_host_runtime` 主机运行时门面（#3095）、WIT 兼容 WASM 工具运行时（#3097）、共享运行时 HTTP egress 出口（#3098）以及传输层适配器合约（#3099）等开创性 PR 均已打开，正在积极审查中。
    - **进度评估**: 今日标志着 Reborn 架构从规划（Issue）全面进入代码落地（PR）阶段，项目向前迈出了至关重大的一步。

2.  **工程效能与 CI/CD 优化**:
    - **主线合并队列准备就绪**: 多篇围绕 CI 的重大 PR（#3104, #2779, #2783, #2877）已合并，成功将 CI 流程切换至面向 `main` 分支的合并队列模型，并移除了旧的 `staging-promotion` 流程。这将显著提升团队的发布效率。

| 关键 PR | 状态 | 摘要 |
| :--- | :--- | :--- |
| [#3104](https://github.com/nearai/ironclaw/pull/3104) | 🆕 OPEN | CI: 为 `main` 分支合并队列流程切换工作流 |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | 🆕 OPEN | 添加 Reborn 传输层适配器合约 |
| [#3098](https://github.com/nearai/ironclaw/pull/3098) | 🆕 OPEN | 添加共享运行时 HTTP egress 功能 |
| [#3095](https://github.com/nearai/ironclaw/pull/3095) | 🆕 OPEN | 添加主机运行时合约门面 |
| [#3097](https://github.com/nearai/ironclaw/pull/3097) | 🆕 OPEN | 添加 WIT 兼容 WASM 工具运行时 (恢复打开) |
| [#3096](https://github.com/nearai/ironclaw/pull/3096) | ✅ MERGED | 添加 WIT 兼容 WASM 工具运行时 (后因#3097被revert) |
| [#3084](https://github.com/nearai/ironclaw/pull/3084) | ✅ MERGED | 修复 `ironclaw_processes` 中 `ProcessError` 的错误类型转换 |

### 4. 社区热点

社区讨论的热度高度集中在 **Reborn 架构的落地策略**上。

- **[#2987 [EPIC] Track Reborn architecture landing strategy**](https://github.com/nearai/ironclaw/issues/2987)
    - **讨论热度**: 38 条评论，1 个新标签 `ownership`。是近期讨论最激烈的 Issue。
    - **背后诉求**: 用户（主要是核心贡献者 `serrrfirat`）正在协调一个庞大的重构计划。该 Issue 的讨论反映了社区对 **大型重构如何进行有序拆分、审查和合并** 的深度关切，避免“巨石 PR”带来的风险。这已成为项目当前的“政治”和开发流程中心。

### 5. Bug 与稳定性

`v0.27.0` 上线后，QA 团队报告了 3 个 P2 级别的 Bug，另有持续存在的生产线 canary 失败问题：

- **严重 Bug (P2)**:
    1.  **TUI 显示问题** - `#3103`：新版 IronClaw 的 High ASCII TUI 在某些 TTY 上显示异常。
    2.  **用户管理重复创建** - `#3083`：由于缺少加载状态，可重复点击提交按钮创建重复用户。
    3.  **应用重启挂起** - `#3082`：启用工具的 Auto Approvals 后，应用在重启流程时卡死。
    4.  **设置界面误导性按钮** - `#3081`：Portfolio 扩展显示“Configure”按钮，但实际无需配置，用户困惑。
- **现有稳定性问题 (高优)**:
    - **Live Canary 持续失败**：`public-smoke` (#3075, #3064) 和 `persona-rotating` (#3074) 两个 canary 通道已报告多次失败，均关联到提交 `2a65da7`。
- **是否有 Fix PR?**：目前上述 Bug 尚未关联到任何 Fix PR，需要开发团队介入。

### 6. 功能请求与路线图信号

社区需求高度聚焦于 Reborn 的最终形态，以下 Issues 很可能成为下一版本的关键功能：

- **开发者体验**:
    - `#3044` **[Reborn] 添加本地开发者运行时配置**: 目标让开发者能通过简单命令 `ironclaw-reborn dev` 快速启动本地开发环境。已有关联 PR 在实现底层设施。
- **安全管理**:
    - `#3045` **[Reborn] 添加运行时预设和有效运行时策略**: 旨在给用户提供“安全”、“开发”等预设模式，无需逐一手动配置复杂的权限和安全策略。
- **应用与集成**:
    - `#3089` - `#3094` 等一系列 **[Reborn] 添加服务层** 的 Issues：明确规划了会话线程服务（`#3089`）、Capability 目录服务（`#3090`）、引用 AgentLoop 实现（`#3092`）、事件投影服务（`#3093`）、审批/认证交互服务（`#3094`）等模块。这些是构建最终产品的基础。

### 7. 用户反馈摘要

- **新版本 TUI 问题 (Issue #3103)**: 用户 `fmotta` 明确表示，新版 TUI 的 High ASCII 显示在“所有 TTY”上都不正常，**“请提供一个恢复至先前可用版本的参数”**。这反映出在追求 UI 现代化的同时，对向后兼容性和终端的普适性可能存在考量不足。
- **设置体验不友好 (Issue #3081)**: 用户对 Portfolio 扩展显示的“Configure”按钮感到困惑，这是一个典型的**界面误导**问题，说明扩展的 UI 状态与其实际功能存在脱节。

### 8. 待处理积压

- **长期未响应问题**:
    - **[#1341] 支持 Web 网关附件 (PDF, 音频等)**: 创建于一个月前，标签为 `suggested_P1`，至今仍无社区或维护者响应。这表明项目当前资源完全集中于 Reborn 重大更新，对非核心功能的扩充优先级不高。建议项目维护者在路线图中给出明确说明。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的LobsterAI GitHub数据，为您生成了2026-04-30的项目动态日报。

---

## LobsterAI 项目动态日报 | 2026-04-30

### 1. 今日速览

项目今日活跃度**极高**，核心动作集中在版本迭代与大量PR的合并。昨日发布了`2026.4.29`版本，并随之合并了28个PR，其中包含`release/2026.04.27`主分支合并，整合了多项新功能（如ChatGPT OAuth登录、新模型供应商支持）和重要Bug修复。社区讨论热度一般，但有2个新Issue报告了具体使用障碍，待解决。整体而言，项目处于**快速迭代、功能丰富**的阶段，但积压的PR数量依然庞大，需关注长期未合并的改进请求。

### 2. 版本发布

**新版本：LobsterAI 2026.4.29**
- **链接**: [Release v2026.4.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29)
- **主要内容**:
    - **修复**: 更新了火山引擎（Volcengine）和通义千问（Qwen）的默认模型配置。
    - **修复**: 移除了安装状态中关于“自动重启”的错误提示。
- **破坏性变更**: 无。
- **迁移注意事项**: 本次修复主要集中在配置调整和UI细节，用户可平滑升级。

### 3. 项目进展

今日项目核心进展体现在版本合并与文档优化上，标志着`release/2026.04.27`分支的功能正式进入主分支。

- **【重要】版本合并 (PR #1876)**: 将`release/2026.04.27`分支合并到`main`分支，带来了显著的开发成果:
    - **新功能**:
        - 新增ChatGPT的OAuth登录支持。
        - 新增对小米MiMo和百度千帆Coding Plan模型的支持。
        - 升级了有道笔记（youdaonote）技能。
        - 新增并优化了specs文档。
    - **Bug修复 (Gateway / Cowork协作板块)**:
        - 修复了因套餐模型列表更新导致Gateway强制重启的问题。
        - 修复了Cowork协作中的其他关键问题。
- **文档优化 (PR #1874, #1875)**: 由`liugang519`提交了两个关于specs文档的优化PR，已合并，有助于提升开发者体验。

**小结**: 此次合并是项目近期最大的单一进展，一次性交付了多项用户期待的功能和稳定性修复，项目功能丰富度和健壮性均有显著提升。

### 4. 社区热点

今日社区讨论相对平静，暂无评论数极高的“爆款”议题。仅有的2个新Issue反映了社区用户在使用过程中的实际痛点，值得关注。

- **Issue #1878: IM机器人微信接口问题**
    - **链接**: [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878)
    - **诉求**: 用户在配置微信IM机器人时，扫码后无法通过LobsterAI客户端输入微信端要求的6位数字验证码，导致配置流程受阻。这是一个典型的**用户体验断层**问题，表明新功能上线时对交互流程的覆盖不够完整。

### 5. Bug 与稳定性

今日报告了2个新Bug，均影响核心功能使用。

- **严重**:
    - **Issue #1877: OpenAI认证失败 (地区限制)**
        - **链接**: [Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877)
        - **描述**: 用户报告OpenAI登录失败，返回HTTP 403错误和`unsupported_country_region_territory`消息。这表明**地区限制**是影响用户接入的核心障碍之一，可能因IP或账户归属地被OpenAI拒绝。
        - **状态**: 暂无对应修复PR。

- **中等**:
    - **Issue #1878: 微信IM机器人无法输入验证码**
        - **链接**: [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878)
        - **描述**: 客户端缺少关键交互界面，导致微信机器人配置流程中断。
        - **状态**: 暂无对应修复PR，但属于界面缺失，修复难度相对较低。

### 6. 功能请求与路线图信号

今日未提出显性的新功能请求，但已合并的PR揭示了下一版本可能包含的功能。

- **高概率纳入下版本**:
    - **自定义主题与强调色**: PR #862 (`feat: add custom theme with user-selectable accent color`) 功能完备且处于搁置状态，但管理员`liuzhq1986`在版本合并中主导了较大规模的功能合并，说明团队有整合此类增强功能的趋势，该PR被采纳的可能性很高。
    - **会话导出功能增强**: PR #853 (`feat(cowork): add Markdown, JSON, and JSONL session export formats`) 通过增加多种文本格式导出，极大便利了后续数据处理，是一项高频需求。

### 7. 用户反馈摘要

从今日Issues及其评论中可以提炼出以下用户痛点：

- **配置流程不完整** (Issue #1878): 用户对IM机器人这类需要多步骤交互的配置流程有明确的UI期望。当缺少必要输入框时，用户体验会断崖式下降，导致功能无法使用。
- **地域访问限制** (Issue #1877): 用户反馈OpenAI的地区限制是直接导致服务不可用的“硬伤”。这表明部分用户可能身处受限地区，或项目中用于认证的代理/IP策略存在不足。

### 8. 待处理积压

项目存在大量已滞留在“Open”状态超过一个月的PR，涉及功能增强、Bug修复和安全性加固。其中很多PR已经收到更新或评论，但未被合并或关闭，需要维护者重点关注。

- **关键Bug修复积压**:
    - **PR #864** `[bugfix] 切换模型时显示网关启动遮罩且消息卡在输入框`: [链接](https://github.com/netease-youdao/LobsterAI/pull/864)
    - **PR #860** `[bugfix]：JSON.parse 缺少错误处理`: [链接](https://github.com/netease-youdao/LobsterAI/pull/860)
- **安全相关积压**:
    - **PR #869** `[安全] 限制 shell.openExternal 的 URL 协议白名单`: [链接](https://github.com/netease-youdao/LobsterAI/pull/869)
    - **PR #877** `[安全] add URL scheme whitelist to shell.openExternal calls`: [链接](https://github.com/netease-youdao/LobsterAI/pull/877) (与#869功能相同，建议合并)
- **功能增强积压**:
    - **PR #853** `[功能] 新增Markdown, JSON, JSONL会话导出格式`: [链接](https://github.com/netease-youdao/LobsterAI/pull/853)
    - **PR #862** `[功能] 新增自定义主题`: [链接](https://github.com/netease-youdao/LobsterAI/pull/862)
    - **PR #880** `[功能] 新增消息勾选分享、图片预览等功能`: [链接](https://github.com/netease-youdao/LobsterAI/pull/880)
    - **PR #866** `[功能] 实现 LLM 上下文管理`: [链接](https://github.com/netease-youdao/LobsterAI/pull/866)

**建议**: 维护者应定期审查这些积压PR，对其中已完善、无冲突且价值明确的PR（如#853, #862, #864）优先合并或给予明确反馈，避免社区贡献者流失。对于功能重叠的PR（如#869, #877），应主动协调合并或关闭其一。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是为您生成的 Moltis 项目动态日报。

---

## Moltis 项目动态日报 | 2026-04-30

### 1. 今日速览

今日 Moltis 项目活跃度极高，共处理 6 个 Issue 和 8 个 PR，并发布了 2 个新版本。社区反馈和贡献者提交均非常积极。核心工作聚焦于**安全漏洞修复**、**新功能集成**（如电话呼叫、新的斜杠命令）以及**用户体验优化**（如修复聊天滚动问题）。特别值得注意的是，一个涉及沙箱逃逸的严重安全漏洞 (#923) 已在当日得到修复并合并。总体而言，项目处于快速迭代和功能扩展期，健康状况良好。

### 2. 版本发布

今日发布了两个版本：`20260429.01` 和 `20260429.02`。鉴于发布间隔极短，推测 `20260429.02` 可能是一个包含紧急修复的热修复版本。建议所有用户升级至最新版本 `20260429.02`。

- **发布链接**: [20260429.01](https://github.com/moltis-org/moltis/releases/tag/20260429.01) | [20260429.02](https://github.com/moltis-org/moltis/releases/tag/20260429.02)

*注意：当前 Release 页面未提供详细的更新日志，建议关注后续更新。*

### 3. 项目进展

今日合并/关闭了 3 个重要 PR，显著提升了项目的安全性和功能性：

- **修复严重安全漏洞：沙箱逃逸** ([PR #924](https://github.com/moltis-org/moltis/pull/924)): 此 PR 修复了 Issue #923 报告的安全问题，通过 `RestrictedHostSandbox` 和 `FailoverSandbox` 机制彻底阻止了沙箱命令逃逸到宿主机环境。这是今日最重要的修复，直接提升了平台的安全性。
- **新增语音角色功能** ([PR #916](https://github.com/moltis-org/moltis/pull/916)): 引入了“语音角色”概念，允许为 TTS 调用定义稳定、可复用的语音身份，替代原先每次即兴调整语调的方式，提升了语音交互的一致性和可控性。
- **新增导入功能** ([PR #917](https://github.com/moltis-org/moltis/pull/917)): 在 Web UI 中集成了对 Claude Code 和 Hermes 项目的导入支持，扩展了平台的兼容性和用户迁移便利性。

### 4. 社区热点

- **最活跃 Issue：聊天滚动功能异常** ([#922](https://github.com/moltis-org/moltis/issues/922)): 该 Issue 关于聊天界面无法向上滚动查看历史消息，获得了 3 条评论，是今日讨论最热烈的话题。用户@bsarkisov 的报告直接触发了社区对近期 UI 改动副作用的热议。
- **最受关注 Issue：Docker 中 Telegram 故障** ([#918](https://github.com/moltis-org/moltis/issues/918)): 获得 1 个 👍，表明在 Docker 环境下运行的用户对 Telegram 集成功能的稳定性非常在意，该问题已在当日被标记为已关闭。

**分析**：社区的反馈主要集中在**交互体验的回归** (如滚动) 和**特定部署环境下的功能故障** (如 Docker+Telegram)。这表明随着新功能快速迭代，保持核心交互的稳定性至关重要。

### 5. Bug 与稳定性

今日共报告 5 个 Bug，按严重程度排列如下：

- **[严重] 沙箱逃逸** ([#923](https://github.com/moltis-org/moltis/issues/923)): 沙箱化命令可绕过限制在宿主机执行，属于严重安全漏洞。**状态：已修复** (PR #924 已合并)。
- **[高] MCP 页面缺少重新认证按钮** ([#927](https://github.com/moltis-org/moltis/issues/927)): 当 OAuth Token 过期或失效时，用户无法在 MCP 页面重新认证，影响功能使用。**状态：待处理**。
- **[中] 聊天滚动无效** ([#922](https://github.com/moltis-org/moltis/issues/922)): 用户无法向上滚动查看历史聊天记录，严重影响聊天体验。**状态：已有修复 PR** ([PR #925](https://github.com/moltis-org/moltis/pull/925))。
- **[中] 模型发现超时** ([#919](https://github.com/moltis-org/moltis/issues/919)): 模型发现过程在 30 秒后失败。**状态：待处理**。
- **[已关闭] Docker 中 Telegram 功能损坏** ([#918](https://github.com/moltis-org/moltis/issues/918)): 在 v20260428.03 版本的 Docker 部署中，Telegram 集成无法工作。**状态：已关闭** (已修复或确认非问题)。

### 6. 功能请求与路线图信号

- **首要功能请求：在 WebUI 中配置子代理** ([#906](https://github.com/moltis-org/moltis/issues/906)): 用户@bsarkisov 提出的增强功能，希望能在图形界面直接配置子代理，这反映出社区对更高级、更可控的多代理编排能力的需求。目前尚无对应 PR，但这是一个明确的路线图信号。
- **新功能在 PR 中活跃**：多个正在开发中的新功能，如**电话呼叫支持** ([PR #920](https://github.com/moltis-org/moltis/pull/920))、**新的斜杠命令** ([PR #926](https://github.com/moltis-org/moltis/pull/926)) 和**代码索引自动触发** ([PR #921](https://github.com/moltis-org/moltis/pull/921))，表明项目正在向**多渠道通信**、**高效操作**和**智能代码管理**方向扩展。这些功能很有可能会在后续版本中落地。

### 7. 用户反馈摘要

- **积极反馈**: 用户对于新功能如 `Claude Code` 和 `Hermes` 导入的支持表示欢迎。
- **痛点反馈**:
  - **稳定性问题**: 用户在 Docker 环境下部署 Telegram 时遇到问题，体验不佳。
  - **UI 回归问题**: 聊天滚动功能的失效是最直观的用户体验倒退，用户对此感到困惑和不便。
  - **安全担忧**: 沙箱逃逸的 Bug 虽然已修复，但它引发了用户对平台安全性的关注。

### 8. 待处理积压

- **长期未响应的功能请求**:
  - **[Feature]: Make sub-agents configurable in WebUI** ([#906](https://github.com/moltis-org/moltis/issues/906)): 自 2026-04-28 提出后，尚未获得官方团队的回应或分配。该功能对于高级用户和构建复杂工作流的场景至关重要，建议维护者评估并给出初步反馈。
- **待处理的 Bug**:
  - **MCP 页面缺少重新认证按钮** ([#927](https://github.com/moltis-org/moltis/issues/927)): 这是一个影响功能可用性的 Bug，且尚无 PR，需要尽快分配解决。
  - **模型发现超时** ([#919](https://github.com/moltis-org/moltis/issues/919)): 同样尚无 PR，可能影响用户首次配置和使用体验。

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的CoPaw项目数据，我已为您生成了2026年04月30日的项目动态日报。

---

# CoPaw 开源项目动态日报 | 2026-04-30

## 今日速览

项目今日保持高度活跃。**v1.1.5版本**正式发布，重点引入了对CJK（中日韩）文字更友好的记忆搜索和上下文压缩回退机制。社区在**会话切换（Session丢失）** 和**频道稳定性（企业微信断连）** 两个问题上讨论激烈，相关修复PR已提交。整体而言，项目Bug修复和迭代节奏紧凑，社区反馈积极，项目健康度良好。

## 版本发布

- **v1.1.5**: 这是一个功能改进版本，主要包含以下亮点：
  - **CJK-Aware Memory Search**: 优化了记忆搜索功能，现在会对中日韩查询进行字符级分词，同时保留拉丁字母和数字的完整性，显著提升了多语言场景下的记忆检索精度（[PR #3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)）。
  - **Context Compaction Fallback**: 当基于LLM的上下文压缩失败或被禁用时，系统现在能自动启用回退机制，确保任务不中断，提升了系统的鲁棒性。
  - **破坏性变更与迁移说明**：本次发布无提及破坏性变更或特殊迁移注意事项。

## 项目进展

今日有多个重要PR被合并或关闭，标志着项目在以下方面取得了实质进展：

- **会话稳定性修复**：社区贡献者 `zhenai1314521` 的PR ([#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958)) 已被合并，该PR直接解决了高热度Issue [#3919](https://github.com/agentscope-ai/QwenPaw/pull/#3919)中描述的“切换Agent后Session丢失”问题。这是一个重大的用户体验改进。
- **多模态消息支持**: PR [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) (由 `xueshanlongyin`) 被合并，为系统增加了原生的图片/文件消息支持，扩展了Agent处理多模态输入的能力。
- **企业微信 (WeCom) 稳定性修复**: 由 `hongxicheng` 提交的PR [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) 试图修复企业微信频道的“双重重连竞争”和“跨循环断开”问题，这直接回应用了用户长期反馈的稳定性问题（[Issue #2757](https://github.com/agentscope-ai/QwenPaw/issues/2757)）。

## 社区热点

- **🔥 [#3919: 切换Agent后返回原agent，发现任务中断且session丢失](https://github.com/agentscope-ai/CoPaw/issues/3919)**: 当日最受关注的Bug。用户 `zhenai1314521` 报告了切换Agent时因前端 `lastChatIdByAgent` 功能缺失导致的会话中断问题，并自行提交了修复PR [#3958](https://github.com/agentscope-ai/CoPaw/pull/3958)，展示了活跃的社区贡献生态。该问题已随着PR合并而关闭。
- **🔥 [#2757: 企业微信频道经常断开](https://github.com/agentscope-ai/CoPaw/issues/2757)**: 一个用户长期受困的问题（已开启近一个月），在今天依然有新的评论。这凸显了企业用户对频道稳定性的核心诉求。并行出现的多个相关Bug（如[#3957](https://github.com/agentscope-ai/CoPaw/issues/3957)、[#3937](https://github.com/agentscope-ai/CoPaw/issues/3937)）表明频道模块（特别是企业微信）的稳定性是当前社区最关心的痛点之一。

## Bug 与稳定性

| 严重程度 | Bug 简要描述 | 关联 Issue | 修复状态 |
| :--- | :--- | :--- | :--- |
| **高** | **Windows服务器任意文件遍历漏洞** | [#3955](https://github.com/agentscope-ai/CoPaw/issues/3955) | 未修复 |
| **高** | **Agent workspace切换异常**：接收其他Agent消息时，主控Agent身份和工作区被错误切换 | [#3957](https://github.com/agentscope-ai/CoPaw/issues/3957) | 未修复 |
| **高** | **Context同步竞态条件**：高 `max_iters` 下，工具结果在下次LLM调用前被丢弃，导致无限循环 | [#3893](https://github.com/agentscope-ai/CoPaw/issues/3893) | 已关闭 |
| **中** | **内存溢出**：`read_file_safe` 函数在低内存系统上读取1GB大小文件时触发 `MemoryError` | [#3932](https://github.com/agentscope-ai/CoPaw/issues/3932) | 未修复 |
| **中** | **企业微信通道不响应**：需手动重新保存配置才能恢复 | [#3937](https://github.com/agentscope-ai/CoPaw/issues/3937) | PR [#3963](https://github.com/agentscope-ai/CoPaw/pull/3963) |
| **中** | **Console对话多次中断** | [#3861](https://github.com/agentscope-ai/CoPaw/issues/3861) | 未修复 |

**安全预警**：漏洞报告 [#3955](https://github.com/agentscope-ai/CoPaw/issues/3955) 需立即关注。

## 功能请求与路线图信号

- **智能体工作区/隔离**: 用户强烈要求能实现智能体之间的**完全隔离** ([#3936](https://github.com/agentscope-ai/CoPaw/issues/3936))，以及对核心配置区和用户工作区进行分离 ([#3967](https://github.com/agentscope-ai/CoPaw/issues/3967))。这表明随着Agent数量增多，安全和可管理性需求正在上升。
- **视觉模型路由**: 请求支持为图片输入单独配置视觉模型 ([#3940](https://github.com/agentscope-ai/CoPaw/issues/3940))，避免因当前模型不支持多模态而需手动切换。这有望提升用户体验和任务效率。
- **桌面端/性能优化**: 用户询问是否有**C++版本**计划以解决Python版本资源占用高的问题 ([#3964](https://github.com/agentscope-ai/CoPaw/issues/3964))。同时，**Tauri 2.x桌面应用支持**的PR [#3813](https://github.com/agentscope-ai/CoPaw/pull/3813) 正在开发中，表明项目已注意到原生体验的重要性。

## 用户反馈摘要

- **痛点**：企业微信频道不稳定、Console页面卡顿是用户抱怨最多的问题。用户 `xiaoyaoyouyue` 和 `sctale` 均在多处提交了关于频道通讯不稳定的报告。用户 `joselu` 提出的性能问题（[#2890](https://github.com/agentscope-ai/CoPaw/issues/2890)）也获得了多位用户的共鸣。
- **场景**：用户 `wudao2fdm` 在飞书/QQ频道中反馈无法接收文件，揭示了在多通道场景下，文件传输功能的欠缺。
- **满意点**：社区对PR [#3958](https://github.com/agentscope-ai/CoPaw/pull/3958) 的快速合并反应积极，显示出用户对于会话持久化和操作流畅性的高期待。同时，用户欢迎功能改进，如深色模式代码高亮 ([#3587](https://github.com/agentscope-ai/CoPaw/issues/3587)) 和自动聚焦输入框 ([#3866](https://github.com/agentscope-ai/CoPaw/issues/3866))。

## 待处理积压

| 类型 | 内容 | 描述 |
| :--- | :--- | :--- |
| **重要Issue** | [#2757 - 企业微信通道频繁断开](https://github.com/agentscope-ai/CoPaw/issues/2757) | 持续近一个月，社区用户不断催更，维护者虽有回应但未解决。相关联的PR [#3963](https://github.com/agentscope-ai/CoPaw/pull/3963) 正在测试中，需重点关注。 |
| **未签入PR** | [#3605 - 统一微信/WeChat标识符](https://github.com/agentscope-ai/CoPaw/pull/3605) | 一项潜伏期超过10天、涉及基础身份映射的修复。长期未合并可能阻塞其他依赖于正确通道识别的功能。 |
| **安全Issue** | [#3955 - 文件遍历漏洞](https://github.com/agentscope-ai/CoPaw/issues/3955) | 严重的安全问题，目前无任何回应，建议维护者优先处理。 |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 ZeroClaw 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 GitHub 数据，生成了 2026-04-30 的项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-04-30

## 1. 今日速览

项目当日处于 **高活跃度** 状态。Issues 和 PR 的更新数量均达到 50 条，但呈现“Issue 活跃修复、PR 大量积压”的健康度分化态势。一方面，有 19 个 bugs/功能被关闭修复，尤其是针对 Slack、Telegram 等关键渠道的会话连续性及功能缺陷得到了快速响应。另一方面，待合并的 PR 高达 49 个，显著多于合并/关闭的数量（1 个），表明社区贡献者的提交热情高涨，但项目核心维护团队的审查和合并流程存在明显瓶颈，可能影响新功能的上线速度。值得注意的是，无新版本发布，主要精力集中在迭代与修复上。

## 3. 项目进展

今日虽然在合并 PR 方面动作不大，但多个关键问题的关闭标志着项目稳定性的重要进展。

- **渠道通信修复**
    - **Slack 会话连续性修复**：PR [#6228](https://github.com/zeroclaw-labs/zeroclaw/pull/6228) 通过对渠道编排层的会话键进行消毒，解决了因文件名消毒导致的会话追踪不一致问题，这是对 Issue [#6226](https://github.com/zeroclaw-labs/zeroclaw/issues/6226) 的修复。
    - **ACP 协议修复**：PR [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) 被合并，修复了 ACP 服务器中工具调用事件输出格式错误的问题，恢复了与外部 ACP 消费者（如 Nori）的连通性。

- **核心功能与配置优化**
    - **技能元数据校验**：作为对 Issue [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) 的跟进，核心团队已通过 “deny_unknown_fields” 机制强化了技能解析时的安全性，防止用户因输入笔误而导致配置被静默丢弃。
    - **预编译安装路径修复**：PR [#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154) 修复了在通过预编译包安装时，Web 管理界面无法被正确提取到指定目录的问题，改善了首次部署体验。

## 4. 社区热点

当日讨论热度最高的议题主要集中在 **新用户入门障碍** 和 **功能缺口**。

1.  **[#6123] 新安装默认模型 Bug** (15 条评论)：
    这是当日最受关注的 Issue。用户报告在全新安装后，由于默认模型（`default_model`）指向本地 Ollama 实例时，无法获取到零等待使用的默认模型，导致工作流受阻。这揭示了项目在新用户引导（Onboarding）流程中的薄弱环节，即未能为后续的核心交互（Agent 聊天）准备一个立即可用的模型配置，这是影响新用户留存率的关键痛点。

2.  **[#5146] 通过技能编译减少 Token 消耗** (7 条评论)：
    该功能请求获得了高质量的讨论。核心诉求是每次用户提问时，无需重复加载庞大的技能描述文件（如 `SKILL.md`），建议通过预编译技能来最小化 Token 消耗。这反映了从“功能可用”到“高效运行”的需求转变，社区用户在思考如何为 AI 代理瘦身，以降低成本并提高响应速度。此议题已被标记为 `status:accepted`，表明已得到核心团队的认可。

3.  **[#5509] Telegram 语音转文字支持** (7 条评论)：
    社区对Telegram渠道的功能完整性有强烈需求。用户明确指出了与竞品 OpenClaw 的功能差距，认为支持语音转录是让 ZeroClaw 成为“可行的替代方案”的关键。该 Issue 虽已关闭，但其高热度反映了基础的渠道体验完善（如支持用户输入多样性）仍是社区关注的优先项。

## 5. Bug 与稳定性

当日没有 `S0` 或 `S1` 级别的新 Bug 报告，但以下已存在的严重问题需要持续关注：

- **严重性: S1 (工作流阻塞)**
    - **[#5475] Copilot + Telegram 导致无效参数** (3 条评论，状态: `status:blocked`): 用户使用 GitHub Copilot 作为 Provider 与 Telegram 配合时，系统报“messages with ... invalid parameter”错误，完全阻塞了消息处理流程。该 Bug 被标记为 `r:needs-repro`，核心团队可能需要更多用户环境信息才能定位。
    - **[#5360] codex_cli 工具使用了已移除的 `-q` 标志** (3 条评论): 该 Bug 导致内置的 `codex_cli` 工具完全不可用。对应 PR [#5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361) 已经提出，但超过三周仍未合并，这可能影响部分高级用户。

- **严重性: S2 (性能降级)**
    - **[#6153] Matrix 语音转文字失败** (5 条评论)：用户在使用主流 Matrix 客户端（Element Web/Android）时，语音转文字功能因无法识别录音文件的格式（`.`）而失败，属于渠道功能的退化。
    - **[#5244] Dashboard 页面崩溃** (4 条评论，状态: `status:in-progress`): 在 v0.6.8 版本的 Docker 镜像中，仪表盘的“Channels”选项卡和总览页面存在渲染错误，影响用户对系统的监控和管理。此 Bug 影响多个用户。

- **注意：** **`forbidden_path_argument` 安全策略误杀** ([#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518), 3条评论)：这个 `S0` 级别（安全风险）的 Bug 仍在开放中。安全机制过于粗放，阻止了诸如 `2>/dev/null` 这类完全无害且必要的 Shell 重定向操作，导致大量技能脚本无法执行。

## 6. 功能请求与路线图信号

- **即将纳入下一版本的高可能性**:
    - **Telegram 智能截断** ([#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225)): 社区用户提议优化长消息（尤其是含代码块的）在 Telegram 上的显示方式，避免丑陋的截断。这属于体验优化，实现复杂度低，很可能被采纳。
    - **手动触发 Cron 任务** ([#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501)): 用户希望能在 Web 界面上手动执行定时任务以方便调试。该请求逻辑清晰，对开发者友好，优先级较高。
    - **WhatsApp 渠道增强**: PR [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) 明确将 WhatsApp 列为 Cron 任务的交付渠道。这标志着项目对 WhatsApp 渠道的投入在加深，不仅仅是聊天，还涉及系统集成。

- **长期路线图信号**:
    - **状态独立功能**：Issue [#5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503) 提出的“预LLM命令快捷方式”是一个非常强的信号。用户希望为确定性操作（如“开门”）跳过完整的 LLM 推理，以将响应时间从 8秒 降低到 0.1秒。这表明社区对于“AI 代理”的想象已超越“聊天机器人”，开始探索**混合架构**：一部分动作由规则引擎快速处理，另一部分复杂问题才交由 LLM 处理。

## 7. 用户反馈摘要

- **痛点**:
    - **入门体验不佳**: 新用户 #6123 表示，完成新手引导后无法立即使用 Agent，被一个配置 Bug 卡住，体验“有毒”。
    - **LLM 推理过度**: 用户 #5503 明确抱怨“每一次消息都走 LLM 推理”导致简单操作响应过慢（~8秒），认为这是“最大的痛点”。
    - **配置编辑困难**: 用户 #6073 反馈 Web UI 中的配置文件编辑器（`advanced setting`）光标位置错乱，打字体验非常糟糕，影响高级用户直接修改配置。

- **使用场景与满意之处**:
    - **灵活性**: 用户 #5862 展示了使用 ZeroClaw 进行基于自然语言的自动化任务编排场景（“每天早上8点提醒我做某事”），尽管当前系统未能成功执行，但这体现了项目被用于个人生活助理的愿景。
    - **跨平台能力**: 多位用户讨论如何在 Telegram、Matrix、Slack 等不同平台间切换和对比，说明用户看重 ZeroClaw 的多渠道集成能力，并能清晰识别不同渠道之间的功能差距。

## 8. 待处理积压

- **[PR #5361] 修复 Codex CLI 工具的 `-q` 标志问题** (2026-04-05 创建): 这是一个严重程度为 `S1` 的 Bug 修复 PR，已经提出 25 天，至今未合并。核心维护团队需要关注，以免用户长时间依赖一个损坏的工具。
- **[PR #5838] Webhook 通道添加重试逻辑** (2026-04-17 创建): 这是一个功能增强型 PR，已获得 `needs-author-action` 标签，可能因作者未回应而被卡住，需要进行跟进。
- **[PR #5978] 语音捕获与 STT 调度功能** (2026-04-21 创建, size: XL): 这是一个大型的新功能 PR，引入了语音交互的关键组件。同样被标记为 `needs-author-action`，需要维护者反馈以推动进展。

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*