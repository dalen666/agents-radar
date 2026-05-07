# OpenClaw 生态日报 2026-05-07

> Issues: 438 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-07 04:37 UTC

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

# OpenClaw 项目动态日报 (2026-05-07)

**数据统计周期**: 2026-05-06 至 2026-05-07  
**数据来源**: github.com/openclaw/openclaw

---

## 1. 今日速览

项目今日继续保持极高活跃度，24小时内产生 **438 条 Issues 更新** 和 **500 条 PR 更新**。核心团队快速响应了 **v2026.5.5** 发布后暴露的严重回归问题，于今日紧急发布了 **v2026.5.6** 热修复版本，主要解决了 `doctor --fix` 错误重写 OpenAI Codex OAuth 路由导致 GPT-5.5 用户锁定的问题。社区反馈集中在 **网关性能退化、WebSocket 连接稳定性、微信/飞书等渠道插件兼容性** 三大领域。今日有 **多个高价值 PR 处于审核中**，包括 `oc://` 寻址底层架构、ACP 会话生命周期加固等大型改动，项目整体正向 **架构稳定性和渠道生态扩展** 方向稳步推进。

---

## 2. 版本发布

### v2026.5.6 (Hotfix)
- **发布时间**: 2026-05-06 (紧急修复)
- **Release 链接**: [openclaw v2026.5.6](https://github.com/openclaw/openclaw/releases/tag/v2026.5.6)
- **变更内容**:
  - `Doctor / OpenAI Codex`: **回滚** v2026.5.5 中 `doctor --fix` 的错误修复逻辑。该修复错误地将有效的 `openai-codex/*` ChatGPT/Codex OAuth 路由重写为 `openai/*`，导致纯 OAuth 的 GPT-5.5 配置失效，或意外将用户迁移至 OpenAI API-key 路由。
- **破坏性变更与迁移**:
  - ⚠️ **如果已在 v2026.5.5 中运行过 `doctor --fix`**：请立即升级至 v2026.5.6，并重新运行 `openclaw doctor --fix`。新版本会自动检测并纠正被错误重写的路由。建议在升级后手动检查 `openclaw.json` 中 `openai-codex/*` 相关配置是否完整恢复。

### v2026.5.5
- **发布时间**: 2026-05-05
- **Release 链接**: [openclaw v2026.5.5](https://github.com/openclaw/openclaw/releases/tag/v2026.5.5)
- **变更内容**:
  - **飞书 (Feishu)**: 修复了会话路由中主题会话线程 ID 丢失的问题。在首次对话和后续跟进中，现在能正确使用 `thread_id` 保持同一主题会话，解决了会话分裂的问题。 (**Fixes #78262**)
  - **LINE**: 拒绝了没有通配符 `allowFrom` 的 `dmPolicy: "open"` 配置，现在 Webhook DM 会正确验证失败，增强安全性。

---

## 3. 项目进展 (今日合并/关闭的重要 PR)

### 已合并/关闭 (部分关键)

1.  **[#78696] `fix(agents): block raw self-update package installs`**
    - **状态**: 已关闭 (Merged)
    - **概要**: 禁止代理在自更新时执行原生包管理器安装（如 `sudo npm install -g openclaw@latest`），防止运行时文件替换导致后续进程崩溃。
    - **意义**: 增强了更新机制的安全性和稳定性。

2.  **[#78784] `feat(memory): pre-warm QMD embedder during gateway boot sync`** (已关闭)
    - **概要**: 在网关启动时预加载 QMD 嵌入模型 (GGUF ~600MB)，避免首次查询因冷加载超时失败。
    - **意义**: 直接解决资源受限主机上首次内存查询超时的痛点。

3.  **[#78262] `Feishu: topic session key mismatch`** (已关闭)
    - **概要**: 通过在 v2026.5.5 版本中修复飞书主题会话键一致性问题，后续消息能用正确的 `thread_id` 路由。
    - **意义**: 修复飞书群组话题会话分裂的核心逻辑。

### 关键进展中的 PR (含新提交)

1.  **[#78678] `feat(workspace): full oc-path addressing substrate (md/jsonc/jsonl/yaml)`** (XL 级)
    - **概要**: 实现 `oc://` 寻址底层，提供统一的 URI 协议 + 通用操作，跨多种文件格式工作。包含 38 个源文件 + 40 个测试文件。
    - **状态** : 开放中，今日刚提交
    - **链接**: [PR #78678](https://github.com/openclaw/openclaw/pull/78678)

2.  **[#78744] `fix(acpx): harden ACP session lifecycle cleanup`** (XL 级)
    - **概要**: 强化 ACP 会话生命周期清理，引入租赁持有的进程所有权、网关实例标识、失败关闭 PID 复用检查。
    - **状态**: 开放中
    - **链接**: [PR #78744](https://github.com/openclaw/openclaw/pull/78744)

---

## 4. 社区热点

### 最热讨论 (评论数最多)

#### 1. **#75: Linux/Windows Clawdbot Apps** 🏆
- **评论**: 104 | ✅: 74
- **概要**: 社区长期强烈请求开发 Linux 和 Windows 桌面版客户端，期望拥有与 macOS 类似的功能集合。
- **诉求**: 这是一个典型的“多平台”呼声。虽然已有 Android/iOS 简化节点，但桌面端是重度用户的刚需。该 Issue 已存在 4 个月，评论数持续增长，说明这是社区 **最迫切的核心需求之一**。
- **链接**: [Issue #75](https://github.com/openclaw/openclaw/issues/75)

#### 2. **#73655: Gateway leak triad on plugin restart**
- **评论**: 16
- **概要**: 插件重启时并发出现 EADDRINUSE 重试、信号处理累积、同步 IO 导致 WS 握手饥饿三个独立泄漏，最终导致所有 WebSocket 连接超时。
- **诉求**: 核心平台稳定性问题。用户重启网关后服务不可用，影响生产环境。
- **链接**: [Issue #73655](https://github.com/openclaw/openclaw/issues/73655)

#### 3. **#78407: doctor --fix 重写 OpenAI Codex 路由 (回归)**
- **评论**: 15 | ✅: 3
- **概要**: 升级至 v2026.5.5 后，`doctor --fix` 自动将 `openai-codex/*` 模型引用错误地重写为 `openai/*`，锁定了仅限 ChatGPT OAuth 的用户。
- **诉求**: **紧急修复确认**。用户升级后立刻发现无法使用，大量用户受影响。今日 v2026.5.6 已紧急修复。
- **链接**: [Issue #78407](https://github.com/openclaw/openclaw/issues/78407)

#### 4. **#78604: Compaction triggers every ~5 minutes instead of ~30min**
- **评论**: 5
- **概要**: 报告在 v2026.5.5/2026.5.6 中，内存压缩频率从 30 分钟异常缩短至 5 分钟一次，导致性能下降。
- **诉求**: 这是一个 **新出现且未被修复的回归问题**，与 CPU 100% 问题相关，需重点关注。
- **链接**: [Issue #78604](https://github.com/openclaw/openclaw/issues/78604)

---

## 5. Bug 与稳定性报告

### 按严重程度排列

#### 紧急 (可能导致服务中断或数据丢失)

1.  **#78407: `doctor --fix` 重写 openai-codex 路由 (已修复)**
    - **描述**: 升级 v2026.5.5 后，`doctor` 错误改写路由，导致 ChatGPT OAuth 用户锁死。
    - **状态**: **🔥 已修复 (v2026.5.6)**。用户应立即升级。
    - **链接**: [Issue #78407](https://github.com/openclaw/openclaw/issues/78407)

2.  **#78402: 网关因事件循环饥饿重复断开连接**
    - **描述**: 升级至 v2026.5.5 后，Stuck tool call 导致事件循环饥饿，WebSocket 连接反复断开 (1000/1005/1006)。
    - **状态**: **待修复**。用户已回滚至 v2026.5.4 以恢复。
    - **链接**: [Issue #78402](https://github.com/openclaw/openclaw/issues/78402)

#### 严重 (功能不可用/重大退化)

3.  **#78604: 压缩频率异常 (5分钟而非30分钟)**
    - **描述**: v2026.5.5/5.6 中压缩频繁触发，可能导致高 CPU 和性能衰减。
    - **状态**: **待修复** (无关联 PR)。
    - **链接**: [Issue #78604](https://github.com/openclaw/openclaw/issues/78604)

4.  **#76562: 高 CPU、控制面 RPC 延迟极高、轮询不稳定**
    - **描述**: 从 v2026.4.24 升级至 v2026.4.29+ 后，CPU 持续近 100%，RPC 延迟飙升，轮询失效。
    - **状态**: **待修复**。社区反馈强烈 (评论: 6, ✅: 3)。
    - **链接**: [Issue #76562](https://github.com/openclaw/openclaw/issues/76562)

5.  **#78232: 微信插件与 v2026.5.4 不兼容**
    - **描述**: `openclaw-weixin@2.4.1` 与 `v2026.5.4` 的 `channelRuntime` API 变更不兼容，导致入站消息处理中断。
    - **状态**: **待修复**。多用户报告回滚才解决问题。
    - **链接**: [Issue #78232](https://github.com/openclaw/openclaw/issues/78232)

6.  **#78434: 微信插件登录失败 (TypeError: fetch failed)**
    - **描述**: 微信插件在 v2026.5.4 中登录时 `fetch` 失败，与上方问题类似。
    - **状态**: **已关闭**，可能由上述兼容性问题导致。
    - **链接**: [Issue #78434](https://github.com/openclaw/openclaw/issues/78434)

7.  **#77837: 微信 `getUpdates` fetch 失败**
    - **描述**: 升级至 v2026.5.4 后，微信冷轮询持续 fetch 失败。
    - **状态**: **已关闭**，与 API 变更相关。
    - **链接**: [Issue #77837](https://github.com/openclaw/openclaw/issues/77837)

#### 一般 (功能异常/行为错误)

8.  **#78508: 缺少 `operator.read` 作用域导致聊天历史无法加载**
    - **描述**: v2026.5.5 中，trusted-proxy 模式的 WebSocket 会话虽传递了用户信息，但 UI 加载聊天历史时因缺失 `operator.read` 作用域而失败。
    - **状态**: **待修复**。
    - **链接**: [Issue #78508](https://github.com/openclaw/openclaw/issues/78508)

---

## 6. 功能请求与路线图信号

### 高呼声/高频需求

1.  **Linux / Windows 桌面客户端 (#75)**
    - **信号**: 104 条评论，74 个 👍。
    - **判断**: 路线图级别需求。虽然目前无对应 PR，但其评论数量使它在社区中具有无可争议的优先级。

2.  **预构建 Android APK 下载 (#9443)**
    - **信号**: 用户希望在 GitHub Releases 直接下载预构建 APK，而非自行编译。
    - **判断**: 低开发成本高收益需求，可能被快速采纳。

3.  **安全模型：执行审批的拒绝列表 (#6615)**
    - **信号**: 7 个 👍。用户希望建立“除 X 外允许一切”策略，而非仅支持白名单。
    - **判断**: 接近待完成改进。已有相关 exec 权限管理架构。

4.  **TOTP 双重验证用于执行审批 (#67440)**
    - **信号**: 用户对纯粹依赖字符串 `/approve` 的安全性不放心，要求增加 6 位验证码。
    - **判断**: 安全性高价值功能，但实现复杂度中等。

5.  **模型上下文窗口超限时触发 fallback (#9986)**
    - **信号**: 用户希望在上下文超限时自动 fallback 到更大模型或更短摘要模型。
    - **判断**: 实用但非核心功能，可能推迟。

6.  **可配置的 Webhook: 飞书/钉钉/企微消息审批 #78308**
    - **信号**: 用户希望 MCP 工具调用支持与 `shell-exec` 同样的 `/approve` 渠道审批机制。
    - **判断**: 全新功能，开发优先级取决于路线图规划。

### 与 Roadmap 关联的 PR 信号

- **规模化稳定性**: PR #73755 (外部 Tailscale Funnel 路由保留) 标记了 L 级复杂度，是典型的生产环境优化。
- **国际化与可访问性**: PR #64179 (添加本地化工具摘要)、#9637 (TUI 可访问性) 显示开发者对用户群体的多元需求有感知，可能会进入下一小版本。
- **开发者体验**: PR #78678 (`oc://` 寻址底层) 大幅提升配置和脚本编写的灵活性，若合并将是重要基础设施。

---

## 7. 用户反馈摘要 (从 Issue 评论中提炼)

- **痛点**: `doctor --fix` 破坏性行为是本期最大用户痛点。用户反馈 `openclaw.json` 被自动改写后 **“not usable”**，且无日志回滚能力。大量用户被迫回滚到 2026.5.4。
- **场景**: 微信/飞书/WhatsApp/Discord 渠道插件在每次核心升级后频繁出现不兼容问题，尤其是微信插件（已连续上报 3 个关联 Issue #78232、#78434、#77837），用户对 **插件生态的稳定性** 和 **核心 API 向前兼容性** 提出了质疑。
- **满意**: 飞书主题会话修复 (#78262) 得到用户 @joeyzenghuan 的感谢，该修复解决了长对话跟踪的关键断裂。
- **不满意**: **堆栈泄漏**: #73655 (EADDRINUSE + 信号处理累积) 和 #78402 (事件循环饥饿) 显示核心网关可靠性在高并发或升级后存在严重问题，用户反馈 “Stale running gateways... crash immediately”。

---

## 8. 待处理积压 (长期未响应的重要 Issue 或 PR)

| 类型 | 编号 | 标题 | 更新时间 | 摘要 | 链接 |
|------|------|------|---------|------|------|
| Issue | **#75** | Linux/Windows Clawdbot Apps | 2026-05-06 | 104条评论，核心多平台需求，长期未得到开发资源承诺。 | [Link](https://github.com/openclaw/openclaw/issues/75) |
| PR | **#51421** | fix(memory): memoryFlush fires every compaction cycle | 2026-05-07 | 一周前已标记 stale，修复内存刷写频率错误，但未合并。 | [Link](https://github.com/openclaw/openclaw/pull/51421) |
| Issue | **#2597** | Context/state lost after unexpected compaction or session reset | 2026-05-06 | 代理无上下文窗口可见性，导致意外压缩丢状态，请求添加 `context=X%` 运行时行。 | [Link](https://github.com/openclaw/openclaw/issues/2597) |
| Issue | **#37634** | sandbox: keep workspaceAccess none workspaces writable | 2026-05-06 | `workspaceAccess: "none"` 时 /workspace 挂载为只读，破坏了沙箱隔离模型。已获 4 👍。 | [Link](https://github.com/openclaw/openclaw/issues/37634) |
| PR | **#73674** | fix(memory): resolve QMD Windows cmd shims | 2026-05-07 | 尚未合并，解决 Windows 上 QMD 二进制解析 `.cmd` shim 问题。 | [Link](https://github.com/openclaw/openclaw/pull/73674) |
| Issue | **#48003** | Steer mode does not inject messages mid-turn for main sessions | 2026-05-06 | 用户持续反映 `steer` 队列模式失效，无法在工具调用间隙注入消息。 | [Link](https://github.com/openclaw/openclaw/issues/48003) |

---

**报告生成**: 2026-05-07 12:00 UTC  
**AI 智能体**: OpenClaw 项目动态分析器 v1.1

---

## 横向生态对比

好的，作为资深技术分析师，以下是根据您提供的各项目动态摘要生成的横向对比分析报告。

---

## 个人 AI 智能体开源生态横向对比分析报告 (2026-05-07)

### 1. 生态全景

2026年5月7日，个人AI助手与自主智能体开源生态呈现 **“核心加速重构，外围百花齐放”** 的态势。以OpenClaw、IronClaw为代表的头部项目正进行**大规模架构升级**（如OpenClaw的`oc://`寻址、IronClaw的“Reborn”重构），旨在解决规模化、多Agent协作与生产环境稳定性等核心问题。与此同时，以ZeroClaw、CoPaw为代表的新锐项目则在**渠道接入的广度（SMS、联邦宇宙）和部署体验的优化（Docker、CLI）** 上高速迭代。社区共同关注的焦点正从“如何让AI回话”转向“**如何让Agent在生产环境中可靠地工作、自由地连接、安全地协作**”。

### 2. 各项目活跃度对比

| 项目 | Issues (新增) | PRs (新增) | PRs (合并/关闭) | 新版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 438 | 500 | 较多 | **v2026.5.6 (Hotfix)** | 高活跃，积极修复回归问题 |
| **NanoBot** | 未统计 | 未统计 | **18** | 无 | 非常活跃，社区贡献密集 |
| **Hermes Agent** | ~50 | ~50 | **4** | 无 | 高活跃，核心推进略滞后于社区热情 |
| **PicoClaw** | 7 | 43 (待合) | **20** | **nightly** | 高速迭代，PR积压较多 |
| **NanoClaw** | 4 | 25 | **3** | 无 | 社区驱动密集开发，待合PR多 |
| **NullClaw** | 1 | 1 (待合) | 0 | 无 | 中等活跃，核心功能（Cron）待落地 |
| **IronClaw** | ~30 | ~30 | **29** | 无 | 极高活跃，全力推进“Reborn”重构 |
| **LobsterAI** | 0 | **16** | **16** | 无 | 高活跃，Bug修复与功能增强并行 |
| **Moltis** | 1 | 9 | **9** | 无 | 高活跃，核心贡献者主导，前瞻性讨论 |
| **CoPaw** | 未统计 | 18 | **18** | **v1.1.5.post2** | 非常活跃，快速迭代与修复并行 |
| **ZeroClaw** | 未统计 | 8 (合) | 8 | **即将发布 v0.7.5** | 高速扩张，渠道集成浪潮，风险与机遇并存 |

**结论**: 整个生态处于 **“高活跃-快速迭代”** 阶段。大部分项目保持极高的PR合并率，社区贡献活跃。OpenClaw和ZeroClaw有版本发布，表明响应速度快。IronClaw及PicoClaw等项目的PR积压/待合数量值得关注，可能成为其迭代瓶颈。

### 3. OpenClaw 在生态中的定位

- **优势定位**: OpenClaw是目前生态中规模最大、最成熟的核心项目，可作为生态的“**基础设施层**”。其核心优势在于：
    - **社区规模与成熟度**: Issues和PR数量远超其他项目，拥有最庞大的开发者群体和最丰富的第三方插件（微信、飞书等）生态。
    - **架构的前瞻性**: `oc://`寻址、ACP会话生命周期加固等项目，致力于解决**底层数据引用、多Agent通信**等根本性问题，引领了生态的技术方向。
    - **平台稳定性**: 尽管今日出现回归问题（`doctor --fix`），但其快速响应的热修复机制（24小时内发布v2026.5.6）体现了其处理生产环境问题的成熟度。

- **与同类对比**:
    - **对比Hermes Agent**: OpenClaw社区更庞大，生态更完善；Hermes在**外部记忆系统（Mempalace）** 和特定平台（如Matrix）的深度集成上社区呼声更高。
    - **对比IronClaw**: IronClaw的“Reborn”重构完全是在**底层架构层面**进行重写（TurnCoordinator、会话契约），其架构现代化程度可能超越OpenClaw当前的渐进式改进，但其成果尚在构建中。OpenClaw则通过热修复和增量PR（如`oc://`寻址）在**维护稳定性的同时进行演进**。
    - **对比ZeroClaw**: ZeroClaw专注于**渠道的广度**（SMS、Mastodon、Twitch等）和**快速接入**，更像是一个“万能连接器”，而OpenClaw则更侧重于**核心Agent能力、插件生态和系统稳定性**。

- **社区规模**: 从数据看，OpenClaw的每日Issue/PR量（近1000条）是其他项目的数倍乃至数十倍，说明其社区规模和项目体量是生态中最庞大的。

### 4. 共同关注的技术方向

1.  **多Agent协作与会话管理**:
    - **涉及项目**: **OpenClaw** (`oc://`寻址, ACP生命周期)、**PicoClaw** (`delegate`工具合并)、**ZeroClaw** (多智能体UX RFC)、**IronClaw** (TurnCoordinator, 会话契约)。
    - **核心诉求**: 如何让多个Agent实例协同工作、如何管理长期、复杂的对话（会话跟踪、上下文窗口）、如何在Agent间进行任务的委派和状态的同步。

2.  **MCP协议支持与生态韧性**:
    - **涉及项目**: **Hermes Agent** (MCP重连失败)、**PicoClaw** (MCP Streamable HTTP支持)、**CoPaw** (MCP Token动态传递)。
    - **核心诉求**: MCP作为Agent与外部工具连接的标准，其连接的可靠性（自动重连）、安全性（认证信息传递）以及对新协议的支持（Streamable HTTP）成为普遍痛点。开发者希望Agent中枢能稳定地操作外部工具。

3.  **平台/渠道接入的广度与稳定性**:
    - **涉及项目**: **ZeroClaw** (SMS、联邦宇宙、Twitch)、**OpenClaw** (微信/飞书插件兼容性)、**Hermes Agent** (LINE、Matrix Bug)、**LobsterAI** (POPO、微信配置)、**NanoClaw** (Slack体验优化)。
    - **核心诉求**: “万物皆可接”。开发者强烈希望将Agent部署到SMS、微信、钉钉、Matrix、Slack等所有用户活跃的平台上。同时，平台API变更导致的渠道失效（如OpenClaw、ZeroClaw中的微信/WhatsApp问题）是最直接的用户痛点。

4.  **安全性与审批流**:
    - **涉及项目**: **OpenClaw** (`doctor --fix`误改写路由)、**NanoBot** (API Bearer Token认证)、**NullClaw** (低资源设备安全隐患)、**CoPaw** (文件遍历漏洞)、**IronClaw** (审批门修复)。
    - **核心诉求**: 在Agent拥有执行权限（如Shell、审批）时，如何防止误操作、权限提升和配置篡改。用户对**执行审批的拒绝列表**、**TOTP双重验证**、**安全的自更新机制**等提出了明确需求。

5.  **成本与性能优化**:
    - **涉及项目**: **OpenClaw** (内存压缩频率异常)、**CoPaw** (DeepSeek前缀缓存优化)、**NanoBot** (本地Tokenizer)。
    - **核心诉求**: 在资源受限的环境（低端VPS、边缘设备）或高使用频率下，如何优化LLM调用成本、降低内存/CPU占用并提高响应速度。

### 5. 差异化定位分析

| 核心定位 | 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- | :--- |
| **全能型基础设施** | **OpenClaw** | 核心Agent能力、丰富插件生态、系统稳定性与运维 | 技术娴熟的个人开发者、小型团队、需要稳定基座的插件开发者 | 模块化插件系统、`oc://`统一寻址协议、事件驱动架构 |
| **边缘/特定场景优化** | **NanoBot, NullClaw, PicoClaw** | 轻量级、本地运行、低资源消耗、设备端AI | 树莓派/LXC用户、追求离线/隐私的用户、物联网开发者 | 小而美的代码库、Cron子代理、本地模型支持 |
| **企业级架构重构** | **IronClaw** | 高并发、高可用、复杂任务调度、产品级集成 | 大型组织、追求**生产级可靠性**的开发者 | **"Reborn"架构**：TurnCoordinator、会话契约、ProductAdapter，面向云原生重写 |
| **渠道集成之王** | **ZeroClaw, CoPaw** | 广泛的渠道接入（SMS, IM, 社交媒体）、自动化运维 | 希望将Agent嵌入任何通信流的运营人员、企业集成开发者 | 插件式渠道框架、CLI技能管理、高度可配置化 |
| **记忆与知识管理先驱** | **Hermes Agent, Moltis** | 外部记忆系统（Mempalace）、Agent身份与互联协议 | 对**长期记忆**、**Agent间互操作性**有强需求的高级开发者 | 探索性架构，前瞻性协议（WebFinger, OIDC-like, Ed25519身份） |
| **Windows/桌面用户体验** | **LobsterAI, CoPaw** | 高质量GUI、Windows兼容性、IM UI优化 | 大量依赖桌面环境的用户、对UI体验敏感的开发者 | Markdown渲染器修复、Windows EPERM错误修复、POPO集成 |

### 6. 社区热度与成熟度

- **快速迭代阶段 (基础设施与生态扩张)**:
    - **OpenClaw, ZeroClaw, CoPaw, PicoClaw**: 这些项目日均PR/Issue量极高，新功能和渠道集成频繁出现。它们处于“功能驱动”的高速扩张期，但稳定性问题（回归、兼容性）也频频暴露，属于“**勇敢者的游戏**”。

- **质量巩固与架构重构阶段**:
    - **IronClaw, Moltis**: PR和Issue高度聚焦于内部架构的重构或核心功能的打磨。社区讨论质量高，但面向终端用户的可见变化较少。这是向“**生产级可靠性**”迈进的必经之路。
    - **Hermes Agent**: 社区热情高（大量功能PR），但核心团队的推进速度显得略有滞后，处于“**社区引领，核心追赶**”的微妙阶段。

- **专注特定赛道阶段**:
    - **NanoBot, NullClaw, NanoClaw, LobsterAI**: 这些项目体量较小，但专注解决特定痛点（如低资源设备、Slack集成）。社区活跃度适中，但贡献者与核心团队沟通紧密，PR合并效率高（如NanoClaw、LobsterAI的快速修复）。

### 7. 值得关注的趋势信号

1.  **Agent身份与互联协议 (Moltis #973)**：这是极具前瞻性的信号。用户已不满足于单个Agent的能力，开始为**多Agent联邦**设计标准协议（L1 Onboarding, L2 Identity）。这是从“单机智能”向“**网络化智能体生态**”演进的基石，值得所有Agent开发者关注。

2.  **“渠道为王”的内核是“通信协议归零”**：ZeroClaw一股脑提交SMS、Mastodon、Twitch等渠道的请求，本质上反映了开发者希望Agent能**成为所有人类通信信道的中继和终结器**。项目间的竞争点从“谁的模型更强”转向了“谁能连接更多人”。

3.  **MCP协议成为Agent的“USB-C”**：MCP正成为连接Agent与外部世界的标准接口。但目前的痛点（重连、认证）说明，仅仅定义“插头形状”还不够，协议的**可靠性、安全性和易用性**是实现“即插即用”的关键，这将是后续生态竞争的焦点。

4.  **“小而美”与“大而全”的分化**：NanoBot、NullClaw等“轻量级”项目，与OpenClaw、IronClaw等“重量级”项目形成鲜明对比。前者通过牺牲功能广度换取**极致的部署便捷性和资源效率**，后者则追求**强大的能力和生态**。这是满足不同用户层次需求的必然结果。

**对开发者的参考价值**:
- **架构决策**: 观察IronClaw的“Reborn”架构和Moltis的Agent互联协议，可以启发思考未来的Agent系统应如何设计以支持大规模、高可靠性和协作。
- **工具选择**: 如果追求稳定、庞大的生态和核心能力，**OpenClaw**是首选。如果需要快速将Agent接入各种小众或主流渠道，**ZeroClaw**或**CoPaw**可能更合适。如果目标是物联网/边缘设备，**NullClaw**或**NanoBot**值得研究。
- **安全投入**: 多方爆出的安全问题（文件遍历、API Key泄露、审批漏洞）应引起所有开发者警惕。在设计Agent系统时，**安全审计、配置校验和最小权限原则**必须前置。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoBot项目GitHub数据，我为您生成2026年5月7日的项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-07

### 1. 今日速览

NanoBot 项目今日活跃度极高，社区贡献和问题反馈均十分活跃。开发与社区修复集中在几个关键领域：**运行时上下文泄露**、**API安全与性能**、以及**渠道兼容性**。值得注意的是，昨日合并/关闭了18个PR，显示出项目维护团队对社区贡献的快速响应。然而，数个严重BUG（如区域限制、推理模式错误）虽然用户有新发现，但部分已被用户自行修复，暴露了LLM提供商兼容性方面的潜在风险。整体项目呈健康、快速迭代状态。

### 2. 版本发布

*无新版本发布*

### 3. 项目进展

今日项目在Bug修复和功能增强方面取得了显著进展，尤其体现在代码质量和安全性方面。

- **修复运行时上下文泄露 (Critical)**：`T3chC0wb0y` 连续提交了 `#3666`、`#3668`、`#3669` (均已合并) 和 `#3671` (待合) 多个PR，旨在修复 `nightly` 分支上运行时上下文元数据泄漏到用户消息和历史记录中的回归缺陷。这解决了 `#2132` 和 `#3670` 两个关键问题。
    - [PR #3666](https://github.com/HKUDS/nanobot/pull/3666) | [PR #3671](https://github.com/HKUDS/nanobot/pull/3671)
- **修复Dream恢复缺陷**：`Jefsky` 提交的 PR `#3660` 解决了一个具体BUG：当使用 `/dream_restore` 命令时，`.dream_cursor` 未能回滚，导致恢复后记忆内容与实际状态错位。该PR已被合并。
    - [PR #3660](https://github.com/HKUDS/nanobot/pull/3660)
- **增强API安全与性能**：`orbisai0security` 提交了 `#3649` (待合)，为API服务器增加了可配置的Bearer Token认证，解决了中等严重级别的安全漏洞。`zhw415876999-prog` 提交了 `#3676`/`#3677` (待合)，移除了SSE流的HTTP压缩，以恢复实时的流式响应。
    - [PR #3649](https://github.com/HKUDS/nanobot/pull/3649) | [PR #3677](https://github.com/HKUDS/nanobot/pull/3677)
- **改进日志记录与CI**：`chengyongru` 的 `#3678` (待合) 完成了日志规范化的收尾工作，确保所有异常处理能保留堆栈跟踪。`yorkhellen` 的 `#3672` (待合) 增强了CI的Ruff代码检查规则，以捕获更多代码质量问题。
    - [PR #3678](https://github.com/HKUDS/nanobot/pull/3678) | [PR #3672](https://github.com/HKUDS/nanobot/pull/3672)

### 4. 社区热点

今日社区讨论热度最高的并非单条Issue，而是围绕**运行时上下文泄露**问题的系列PR。这一系列PR (`#3666`, `#3668`, `#3669`, `#3671`) 由同一作者 `T3chC0wb0y` 针对同一问题反复提交，在短时间内获得了多次关闭和开启，显示出问题修复的紧迫性和多次迭代优化过程。这反映了社区对**数据持久化与提示词优化之间平衡**的高度关注，即如何在利用prompt缓存提高性能的同时，防止内部元数据污染用户可见的对话历史。
- [Issue #2132（母问题）](https://github.com/HKUDS/nanobot/issues/2132)
- [Issue #3670（新问题）](https://github.com/HKUDS/nanobot/issues/3670)

### 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **严重**：**WebSocket频道静默丢弃媒体附件** (`#3674`)。当客户端通过WebSocket发送带图片或文件的媒体消息时，媒体路径被静默忽略，代理无法接收。已有一个修复PR `#3673`。
    - [Issue #3674](https://github.com/HKUDS/nanobot/issues/3674) | [PR #3673](https://github.com/HKUDS/nanobot/pull/3673)
- **中**：**DeepSeek-v4-flash推理模式错误** (`#3665`)。在多次查询后会出现 `reasoning_content must be passed back` 的错误。暂无修复PR。
    - [Issue #3665](https://github.com/HKUDS/nanobot/issues/3665)
- **中**：**MCP streamable_http_client 导致100% CPU泄漏** (`#3638`)。当终止MCP连接时，会遗留未清理的异步任务导致CPU飙升。该问题为`good first issue`，暂无修复PR。
    - [Issue #3638](https://github.com/HKUDS/nanobot/issues/3638)
- **低**：**转录提供商配置不透明** (`#3637`)。用户配置Groq语音转录时，API地址格式容易配错。已有一个修复PR `#3663`，能自动规范化URL。
    - [Issue #3637](https://github.com/HKUDS/nanobot/issues/3637) | [PR #3663](https://github.com/HKUDS/nanobot/pull/3663)

### 6. 功能请求与路线图信号

- **可配置的Bot名称与图标** (`#3650`)：用户希望在聊天UI中自定义Bot的显示名称和头像图标，而非默认的“Nanobot is thinking...”和猫咪图标。此请求与个性化体验强相关，实现相对简单，可能被纳入短期规划。
    - [Issue #3650](https://github.com/HKUDS/nanobot/issues/3650)
- **禁用Dream功能** (`#3652`)：用户要求提供一个 `enabled` 开关来完全禁用Dream功能。这表明部分用户可能希望拥有更简单的“对话机器人”体验，而非复杂的“自主代理”。此功能可能作为高级配置项加入。
    - [Issue #3652](https://github.com/HKUDS/nanobot/issues/3652)
- **本地Tokenizer估计Token数** (`#3647`)：用户建议使用本地tokenizer替代在线tiktoken，以减少网络依赖和启动延迟。这符合NanoBot轻量级、边缘计算的定位，在离线场景下至关重要。
    - [Issue #3647](https://github.com/HKUDS/nanobot/issues/3647)
- **跨Agent信任的身份和上线协议** (`#3639`)：用户提议为NanoBot代理建立基于Ed25519的可验证身份协议。这是一个长期的、架构级别的提议，为未来多代理协作及安全管理奠定基础，但需要社区深入讨论。
    - [Issue #3639](https://github.com/HKUDS/nanobot/issues/3639)

### 7. 用户反馈摘要

- **痛点**：用户`bigsinger` 在 `#3618` 中反映其因区域限制（`This model is not available in your region. 403`）导致Nanobot长达10天无法工作，最终通过备份和重装得以恢复。这暴露了模型提供商API的地区限制会对用户产生严重影响，且项目缺乏优雅的错误处理和自愈机制。
- **使用场景**：用户`LZDQ` 在 `#3638` 中提及使用Nanobot构建名为 `nanobot-soulboard` 的嵌入应用，表明NanoBot已作为底层框架被用于二次开发。
- **满意/不满意**：用户`ivelin` 报告WebSocket媒体丢包BUG (`#3674`)，反馈了关键功能缺陷导致的不满意体验。用户`skyline75489` 请求禁用Dream功能 (`#3652`)，说明默认的“代理”模式不完全符合所有用户的期望。

### 8. 待处理积压

- **PR #1443**: `feat: decouple heartbeat reasoning from notification` (创建于2026-03-02). 该PR提议将心跳Agent的内部推理与用户通知解耦，是一个重要的功能增强，但已积压超过2个月。应评估此PR的当前优先级和进展。
    - [PR #1443](https://github.com/HKUDS/nanobot/pull/1443)
- **PR #2526**: `fix(agent): preserve user message and tool calls in session when /stop cancels the task` (创建于2026-03-26). 解决在Telegram上使用/stop命令时会丢失用户消息和工具调用的BUG，积压1个月。维护团队应尽快审查。
    - [PR #2526](https://github.com/HKUDS/nanobot/pull/2526)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是为您生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目日报 (2026-05-07)

## 1. 今日速览

今日 Hermes Agent 社区保持高度活跃，Issue 与 PR 均达到 50 条的峰值。社区讨论热度集中在 **外部记忆系统**（如 `mempalace`）、**跨平台网关兼容性**（Matrix, WhatsApp）以及 **核心通信可靠性**（MCP 重连, 网关死锁）。值得注意的是，尽管社区功能呼声很高，但项目方今日未发布任何新版本，且大量重要的功能 PR（如 `mempalace`、`LINE` 平台支持）仍处于开放状态，表明团队可能将重心放在了问题修复和积压 PR 的审核上。综合来看，项目处于 **高活跃度的“社区驱动”阶段**，健康度良好，但核心创新点的落地速度略有滞后。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 4 个 PR，主要聚焦于稳定性修复和功能回退恢复。

- **修复：Mempalace 导入保护与 CI 通过** (`#21017`) [已合并]
    - 此 PR 成功“抢救”并合并了因导入失败而被关闭的 `#12203`，为将高评分的 **mempalace** 外部记忆系统集成进 Hermes 扫清了障碍。目前该功能虽合并，但尚需要后续的配置文档和完善。
- **修复：`.env` 热重载后辅助客户端缓存失效** (`#21016`) [已合并]
    - 修复了 API Key 轮换后，WhatsApp 网关无法生效的问题，提升了企业级部署下的运维体验。
- **修复：macOS 下网关锁 PID 检测失效** (`#21018`) [已合并]
    - 解决了 macOS 系统下，因 PID 易被回收重用导致网关锁死的问题，新增了 `ps` 命令回退机制来检测进程状态。
- **修复：会话数据库提交游标未正确推进** (`#21025`) [已合并]
    - 修复了一个隐藏的重复写入 bug，解决了当 `flush` 操作部分失败时，数据库行会被重复插入的问题，提升了数据持久化的一致性。

**总结：** 项目核心提交主要围绕“防御性编程”和修复回归问题，项目稳定性在稳步提升。社区驱动的功能（如 LINE 平台、mempalace）虽被合并，但其完整的功能链条（如深度测试、文档）仍有待后续 PR 完善。

## 4. 社区热点

- **🎙️ 最热议 Issues：外部记忆系统成为社区焦点**
    1.  **`#6323` [Feature] 添加 mempalace 外部记忆支持** (17评论, 25👍)
        -   **链接:** [NousResearch/hermes-agent Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323)
        -   **分析:** 社区对**持久化、可查询的记忆**需求非常旺盛。此 Issue 讨论了集成 `mempalace`（号称 LongMemEval 基准得分高达 96.6%）的方案，旨在解决上下文窗口限制，实现长期任务和跨会话连续性。这是社区最期待的功能之一。
    2.  **`#12614` [Bug] Matrix 新部署后 bot 不接收消息** (17评论)
        -   **链接:** [NousResearch/hermes-agent Issue #12614](https://github.com/NousResearch/hermes-agent/issues/12614)
        -   **分析:** 这是一个严重且顽固的 Bug，用户报告更新后，Matrix bot 加入房间后立即“失聪”，无法接收和响应任何消息。评论数高表明复现率高，且严重影响用户体验，是社区中高度关注的**稳定性痛点**。
    3.  **`#7237` [Bug] 输出长度限制导致响应截断** (14评论, 3👍)
        -   **链接:** [NousResearch/hermes-agent Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237)
        -   **分析:** 用户抱怨在生成长篇回复时，会因 `output length limit` 错误导致回复被截断。这直接影响了复杂推理、代码生成等场景的可用性，表明默认的 token 限制或应急处理机制对高级用户不够合理。

## 5. Bug 与稳定性

今日 Bug 报告密集，按严重程度排列如下：

- **P1 (紧急)：**
    - **`#13248`** [Slack] **空回复导致无限重试循环**：在 `claude-opus-4-7` 模型下，Slack 群组线程中非 @提及的讨论消息会导致模型“选择不回复”，而网关将其视为失败并无限重试，最终耗尽资源。 *尚无 Fix PR。*
    - **`#20982`** [配置] **OpenRouter 凭证丢失后 fallback 失效**：当 `OPENROUTER_API_KEY` 缺失时，网关会创建一个无 API Key 的 AIAgent 实例，导致整个服务崩溃。 *该 Issue 已于今日关闭，表明问题已定位或已通过其他途径修复。*

- **P2 (高)：**
    - **`#15462`** [TUI] **语音模式二次转录 Python 崩溃 (SIGABRT)**：TUI 语音模式在第二次尝试转录时会因 cTranslate2/OpenBLAS 线程冲突崩溃。 *已关闭，代表已修复。*
    - **`#20927`** [Windows] **文件写入路径处理错误**：Windows 系统下，`write_file` 工具无法正确处理路径，且会话中断后工具调用机制失效，导致模型产生幻觉回复。
        - **Fix PR:** `#21027` [Open] 已提出修复方案。
    - **`#20143`** [WhatsApp] **自聊模式下群组消息被静默丢弃**：WhatsApp 自聊模式下，用户自己的群组消息被无条件过滤，无法与 agent 互动。
    - **`#11860`** [Discord] **附件传递不可靠**：文件附件无法可靠地传递给 agent，即使消息中明显包含附件。
    - **`#6838`** [Provider] **MiniMax 连接频繁掉线**：从其他平台切换到 Hermes 后，MiniMax provider 出现频繁的 `RemoteProtocolError`。
    - **`#20966`** [CLI/Gateway] **`/model` 命令交互式选择器静默降级**：`/model` 命令的交互选择器因内部错误静默降级为纯文本列表，已修复。

- **P3 (中)：**
    - **`#19559`** [MCP] **客户端启动后不重连 HTTP 服务器**：若 MCP 服务器在 Hermes 启动后未运行，则重连失败，直到下次重启。*社区呼声高。*
    - **`#20939`** [MemOS] **记忆提供者每轮对话都派生子进程**：`memtensor` 提供者在每次对话中都会创建新的 Node.js 子进程，导致内存泄漏风险。
    - **`#20849`** [架构] **复杂编码工作流中出现严重上下文丢失**：用户抱怨在多日编码任务中，因截断和内存限制导致代码丢失、回归。

## 6. 功能请求与路线图信号

社区对产品化的功能需求愈发明确，以下是未来版本的强烈信号：

- **核心记忆系统升级：**
    - **`#6323` (mempalace)** 和 **`#10771` (自动记忆整合)** 是社区呼声最高的两个记忆相关功能。前者提供顶尖的外部记忆，后者则解决记忆质量退化问题。结合已合入但关闭的 PR `#5671`，`mempalace` 几乎确定将成为下一版本的核心特性之一。
- **平台扩展与集成：**
    - **LINE 平台支持** (PR `#20999`, `#21012`)：开发者已提交针对台湾、日本等市场的 LINE 适配器，虽然因标签问题被标记为重复，但这表明社区对扩展新平台有强烈兴趣。
    - **多 Telegram Bot 支持** (`#10452`)：企业级用户希望实现多 Bot 路由，这是生产力的直接需求。
- **MCP 生态韧性：**
    - **MCP 自动重连** (`#19559`)：修复 MCP 连接失败问题被反复提及，这关系到 Hermes 作为“智能体中枢”连接外部工具的可靠性。
- **工具链完善：**
    - **`Brave Search` 原生支持** (`#10644`, 22👍)：开发者希望增加一个免费且高效的 Web 搜索后端。
    - **`npm audit` 自动化** (`#5197`)：安全意识的觉醒，要求项目贡献前自动审计。

## 7. 用户反馈摘要

- **满意点：**
    - **CLI 用户**对 命令行模式 (`--tui`) 基本无崩溃表示满意。
    - 社区对 **Mempalace** 集成抱有高度期待，认为它能解决“上下文窗口”这一核心痛点。
    - 用户 **yasu-oh** (`#21003`) 明确表达了希望通过 Hermes 配置不同搜索/提取后端（Tavily + Firecrawl）的灵活性需求，称赞项目“长期运行、可配置、可自托管”的方向。

- **不满意点/痛点：**
    - **稳定性抱怨集中**：Matrix (`#12614`) 和 WhatsApp (`#20143`) 的 bug 直接导致了“bot 失聪，需不断重启”的负面体验。用户 **Schnurzel700** 描述其 Matrix bot“从不处理任何消息”，体验极差。
    - **高级功能中断**：用户 **BigDon86** (`#20849`) 详细描述了因架构限制导致的代码丢失，警告“对于任何严肃的编程工作流，这些 bug 是灾难性的”。这表明 Hermes 在支持复杂、长时间运行的任务时，其内存和上下文管理机制仍存在缺陷。
    - **配置/集成复杂度**：**`#21011`** (WeChat 限流无重试) 和 **`#20966`** (`/model` 命令静默降级) 反映了配置和交互层面的“静默失败”问题，用户期望更友好的错误提示和弹性策略。

## 8. 待处理积压

- **`#4184` [Bug] `hermes mcp add` 命令错误进入聊天 REPL (P2)**
    -   创建时间: 2026-03-31
    -   **链接:** [NousResearch/hermes-agent Issue #4184](https://github.com/NousResearch/hermes-agent/issues/4184)
    -   **现状:** 一个存在超过一个月的 bug，严重影响了 MCP 子命令的可用性，至今未有关闭或关联的修复 PR，需要关注。

- **`#21014` [Security] 清理 Copilot ACP 子进程环境变量 (P2)**
    -   **链接:** [NousResearch/hermes-agent PR #21014](https://github.com/NousResearch/hermes-agent/pull/21014)
    -   **现状:** 一个安全相关的 PR，旨在防止 `copilot --acp` 子进程泄露 Hermes 管理的 API Key。虽然被标记为重复，但安全问题优先级高，维护者应尽快处理该 PR 或给出替代解决方案。

- **大量功能 PR 长期未合并:** 如 `#5521` (DeepInfra), `#19189` (浏览器坐标点击), `#15624` (Mem0 更新) 等。这些 PR 都处于开放状态超过一周，其内容对于丰富 Hermes 生态至关重要。长期积压可能导致社区贡献者的信心下降。

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-05-07

## 1. 今日速览

今日项目活跃度极高。代码库**合并/关闭了 20 个 PR**，关闭了 7 个 Issue，同时有 **43 个新 PR 待合并**，显示开发节奏非常快。社区讨论主要围绕 **MCP 协议支持、消息时间戳、子 Agent 权限继承** 等关键功能展开。一个重要的 **Agent 委派 (delegate) 功能** 被合并，标志着多 Agent 协作架构的里程碑。此外，`nightly` 版本已更新至 `v0.2.8-nightly.20260507`，但被标记为可能不稳定。

## 2. 版本发布

- **nightly (v0.2.8-nightly.20260507.788cda5c)**: 自动构建的每日开发版，可能包含不稳定特性。用户需谨慎使用。**破坏性变更与迁移注意事项**：未在发布说明中明确提及，请关注 `main` 分支变更日志。

## 3. 项目进展

今日合并/关闭的 PR 显著推动了项目在核心架构和关键功能上的进展：

- **Agent 委派功能 (delegate tool)**: PR [#2531](https://github.com/sipeed/picoclaw/pull/2531) 合并。这是多 Agent 协作用户故事（#2148）中的 PR C。现在 Agent 可以调用 `delegate(agent_id, task)` 将任务同步委派给另一个指定 Agent，该 Agent 将使用其独立的工作空间、模型和提示。这标志着多 Agent 架构进入实质性阶段。
- **CI/CD 优化**: PR [#2610](https://github.com/sipeed/picoclaw/pull/2610) 合入，支持从**已有 Git Tag** 进行发布，使发布流程更加灵活。
- **消息时间戳**: 一个被合并的 PR [#2788](https://github.com/sipeed/picoclaw/pull/2788)（虽为 OPEN 但已针对性地解决 Issue #2786），为消息 API 添加了独立 `created_at` 时间戳，解决了前端消息时间不准确的问题。
- **Web 搜索回退**: PR [#2629](https://github.com/sipeed/picoclaw/pull/2629) 合入，统一了 Web 搜索提供商的就绪状态和选择逻辑，让运行时、后端 API 和 UI 对“哪个搜索提供商可用”达成一致，提升了稳定性。
- **频道与集成增强**:
    - 微信渠道 (Weixin channel) 获得了多实例支持和更好的配置管理 ([#2606](https://github.com/sipeed/picoclaw/pull/2606))。
    - OpenAI 兼容的嵌入向量支持已添加 ([#2624](https://github.com/sipeed/picoclaw/pull/2624))。
    - 流式响应解析的 Bug 修复 ([#2411](https://github.com/sipeed/picoclaw/pull/2411))。

## 4. 社区热点

- **#629 [BUG] LLM 调用失败后不重试** ([链接](https://github.com/sipeed/picoclaw/issues/629)): 已存在 13 条评论，持续获得关注。核心诉求是当 LLM 服务返回 HTTP 500 等临时错误时，任务不应挂起，Agent 应具备自动重试机制。
- **#2788 [PR] 添加消息独立时间戳** ([链接](https://github.com/sipeed/picoclaw/pull/2788)): 此 PR 直接响应了社区对会话记录准确性的痛点（#2786, #2787），其被合并的速度表明社区对此功能需求强烈，开发团队响应迅速。
- **#2775 [BUG] 子 Agent 继承根 Agent 的 AGENT.md** ([链接](https://github.com/sipeed/picoclaw/issues/2775)): 开启了关于多 Agent 角色隔离的深入讨论。用户期待 `Planner`, `Builder` 等子 Agent 拥有各自独立的系统提示，而非共享根 Agent 的身份，这直接关系到多 Agent 协作的有效性。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue / PR | 描述 | 状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) | 即使使用有效的 API Key，在多个提供商（Groq, OpenRouter）下认证均失败（401错误）。 | **开放，无 PR** | 严重问题，影响所有用户。根因可能是请求头或路径处理错误。 |
| **高** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) | 钉钉 SDK 内部的并发 Bug 导致 Gateway 进程 panic 并崩溃。 | **开放，无 PR** | 影响钉钉频道可用性。依赖第三方 SDK 修复。 |
| **中** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) | Deepseek v4 推理模型无法正常工作，因为 PicoClaw 未正确处理 `reasoning_content` 字段。 | **开放，无 PR** | 影响使用最新 Deepseek 模型的用户。 |
| **中** | [#2780](https://github.com/sipeed/picoclaw/issues/2780) | 重载配置（`reload config`）导致语音识别功能失效。 | **开放，无 PR** | 影响用户体验，需要确认是否为回归问题。 |
| **中** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` 工具的 `guardCommand` 方法过于简单的路径检查，误判了 `curl` 等不涉及文件路径的命令。 | **开放，无 PR** | 限制了安全模式下工具的实用性。 |
| **低** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android APP 中添加本地模型后，始终显示“未配置”，无法选择。 | **开放，无 PR** | 影响移动端本地模型使用。 |

## 6. 功能请求与路线图信号

以下是用户提出且可能被纳入近期版本的功能请求：

- **MCP Streamable HTTP 传输支持** ([#2782](https://github.com/sipeed/picoclaw/issues/2782)): 用户要求支持 MCP 协议的新一代传输方式，以接入现代 MCP 服务器。已有相关的 Web UI 配置 PR ([#2770](https://github.com/sipeed/picoclaw/pull/2770))，此功能在下个版本中可能性很高。
- **支持 OpenCode 提供商** ([#2671](https://github.com/sipeed/picoclaw/issues/2671)): 用户请求增加对 `opencode` 模型提供商的支持。
- **子 Agent 角色身份隔离** ([#2775](https://github.com/sipeed/picoclaw/issues/2775)): 强烈信号。随着 `delegate` 工具的合并，下一阶段极大概率会解决子 Agent 系统提示从根 Agent 继承的问题。
- **为自定义技能提供 .env 文件支持** ([#2623](https://github.com/sipeed/picoclaw/issues/2623) - 已关闭): 尽管已关闭，但用户提出的向自定义技能传递环境变量的需求，反应了更灵活的技能配置诉求。
- **自主浏览器操作 (Autonomous Browser Operations)** ([#293](https://github.com/sipeed/picoclaw/issues/293)): 路线图上的长期功能。虽未在今日 PR 中体现，但仍是项目高优先级目标。

## 7. 用户反馈摘要

- **痛点**:
    - **会话历史丢失**：用户 liuxiaobo007 反馈 (#2310) WebUI 会话历史记录在关闭页面后只剩最后1-2条，破坏追溯和演示场景。
    - **认证问题困扰**：用户在多个 Issue 中提到 API Key 认证问题，例如 #2769（全范围 401）和 #2548（多重认证凭据），使用门槛受此影响。
    - **工具限制**：`exec` 工具的安全守卫 (`guardCommand`) 过于死板，误伤合法命令（如 curl 查询天气），引发用户 frustration (#1042)。
- **满意的声音**:
    - 对 **`delegate` 工具** (#2531) 的合并表示出高度期待，认为这是实现复杂任务的关键。
    - **消息时间戳 PR** (#2788) 的快速响应，让部分用户感觉得到了及时的支持。
- **使用场景**:
    - **多模型 & 提供商混用**：用户尝试组合多种 API 并遇到各类问题。
    - **企业协作**：在钉钉、飞书、微信等渠道中集成 PicoClaw，并反馈了许多实名认证和消息格式问题。
    - **高价值开发者**：一些用户（如 LiusCraft, bogdanovich）不仅报告问题，还直接贡献了高质量的 PR 来修复。

## 8. 待处理积压

- **[#629 [BUG] LLM 调用失败后不重试](https://github.com/sipeed/picoclaw/issues/629)**: 已开放超过 2 个月，评论数高，至今无法解决。对于需要长时间运行任务的用户是严重问题。
- **[#293 [Feature] 自主浏览器操作](https://github.com/sipeed/picoclaw/issues/293)**: 路线图上的核心功能，标记为高优先级。自创建以来讨论活跃，但尚未看到具体实现 PR 或重大进展。需评估是否因技术难度大或资源分配问题而延期。
- **[#629 [BUG] LLM 调用失败后不重试](https://github.com/sipeed/picoclaw/issues/629)**: 已开放超过 2 个月，评论数高，至今无法解决。对于需要长时间运行任务的用户是严重问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-05-07

## 今日速览

今日 NanoClaw 项目活跃度极高，社区贡献热情高涨。过去24小时内，项目共产生 **4 个新 Issue** 和 **25 个 Pull Request**，其中大多数 PR 集中在 **Slack 集成体验优化** 和 **v2 迁移脚本的修复**上。虽然暂无新版本发布，但大量针对用户体验、稳定性和安全性的 PR 正排队等待合并，显示出项目正处于一个由社区驱动的功能打磨与问题修复的密集期。待合并的 PR 数量（22项）积压较多，建议维护团队加快审查节奏。

## 项目进展

过去24小时，共有 **3 个 PR 被合并/关闭**，修复了关键 Bug 并优化了流程：

- **修复审批卡片流程 (#2308):** 修复了 `baget_park_task` 工具描述中引用了不存在的 tool，并对审批待处理文本中的冗余反馈进行了精简。这直接回应了审计中发现的优先级为 P0 和 P1 的问题。
- **修复 WhatsApp 自聊消息被过滤 (#2302):** 修复了 `fromMe` 过滤器在 WhatsApp 自聊场景下会丢弃用户自己输入消息的 Bug，现通过 `sentMessageCache` 区分回声和用户消息。
- **修复迁移脚本依赖 (#2309):** 将 `migrate-v2.sh` 中对 `sqlite3` CLI 的外部依赖替换为项目内的 `better-sqlite3` 封装，解决了因缺少该 CLI 工具导致的误导性错误。

这些合并操作直接修复了至少 3 个已报告的 Bug，并提升了工具的健壮性和用户体验。

## 社区热点

今日社区讨论的核心围绕 **“Slack 集成”** 展开，贡献者 `alipgoldberg` 一口气提交了 **8 个** 优化 Slack 设置流程的 PR（#2295-#2305），旨在降低非技术用户的使用门槛。这些 PR 涵盖了从文案清晰化、步骤引导、错误处理到确认提醒的方方面面。

与此同时，讨论热度较高的还有：
- **#2312:** 关于仓库中 `CLAUDE.md` 文件在启动时被无条件删除的问题，这会导致 `git` 工作区永久处于“脏”状态，引发了开发者对代码仓库管理的关注。
- **#2311:** 关于废弃旧版 `/claw` 技能的提议，该技能与 v2 架构完全不兼容，开发者认为应直接报废而非修补，这是一个技术债务清理的强烈信号。

## Bug 与稳定性

今日报告的 Bug 主要集中在 v2 迁移和文件管理，按严重程度排列如下：

1.  **[P0 / 严重] 工作区永久脏状态 (#2312):** `groups/global/CLAUDE.md` 文件在每次启动时被无条件删除，导致“git status”始终显示有未提交的变更。这对所有从源码部署的开发者造成持续困扰。**目前尚无对应的 fix PR。**
2.  **[P0 / 严重] `/claw` 技能与 v2 架构不兼容 (#2311):** 贡献者明确指出该技能“无法修补”，建议直接从仓库中移除。这不仅是 Bug，更是架构层面的警告，**尚无修复 PR，但提出了“废弃”的解决方案**。
3.  **[P1 / 高] `migrate-v2.sh` 迁移脚本问题:**
    - **#2191 (已修复):** 提供了 `sqlite3` CLI 未安装时的误导错误信息。此问题已通过 PR #2309 修复。
    - **#2294 (待修复):** 迁移时未能正确处理 Matrix 和 Discord 通道的重命名和新环境变量，导致适配器启动失败。**目前尚无对应的 fix PR。**

## 功能请求与路线图信号

今天用户的呼声主要集中在 **可用性提升** 和 **功能扩展** 上：

- **Slack 集成体验大升级 (多个 PR):** `alipgoldberg` 的系列提交（如#2295-#2305）是目前最强烈的功能信号，通过优化文案、指引和流程，目标是让 Slack 作为一个“亲民”的通道更容易被所有用户使用。这些 PR 很可能被纳入下一个小版本。
- **本地语音转文字功能 (PR #2009):** 由 `ira-at-work` 提交的“add-voice-transcription-free-whisper”技能，提供了基于 `whisper` 的本地免费语音转录能力，满足了用户对数据隐私和离线功能的需求。该 PR 虽已开放超过10天，但仍在更新，表明社区对此功能兴趣浓厚。
- **增强的 GitHub 集成 (PR #2301):** 同一贡献者提交了支持轮询模式的 GitHub 集成，解决了 NAT/防火墙环境下无法使用 Webhook 的场景，并增加了密钥合并的安全提示。这显示出用户希望将 NanoClaw 更深入地融入开发工作流。

## 用户反馈摘要

从 Issue 和 PR 的讨论中，可以提炼出以下用户声音：

- **开发者的困惑：** Issue #2312 的创建者 `mbernabeu` 对仓库中文件被运行时删除感到困惑，这打破了常规的仓库管理预期，是一个值得关注的“开发者体验”问题。
- **非技术用户的痛点：** 贡献者 `alipgoldberg` 在多个 PR 中描述了非技术用户在配置 Slack 时遇到的困境（jargon 堆砌、指引不清），其核心诉求是“**让设置向导像说明书一样清晰**”。这反映了项目在吸引更广泛用户群体时需要克服的障碍。
- **对技术债务的清醒认识：** Issue #2311 的提交者 `JayFarei` 非常清醒地指出旧版 `/claw` 技能应该被“报废”而非“修补”，显示了社区中一部分资深用户对项目长期健康度的关注。

## 待处理积压

以下是可能需要维护者关注的重要待处理项：

- **安全相关的 PR (#2004):** 由 `Hinotoi-agent` 提交的“仅信任规范通道远程”的安全加固 PR，已经开放了近两周（自 4月25日）未合并。该 PR 涉及代码源的信任边界，安全风险较高，建议优先审查。**链接**: qwibitai/nanoclaw PR #2004
- **语音转录技能 PR (#2009):** 这是一个需求量很大的功能，已经开放了12天，建议维护者评估并决定是否纳入主线。**链接**: qwibitai/nanoclaw PR #2009
- **CLI 平台 ID 修复 PR (#2187):** 修复了 CLI 平台 ID 命名空间问题的 PR（关联 Issue #2186），已经开放了 5 天，属于高性价比的修复。**链接**: qwibitai/nanoclaw PR #2187

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的NullClaw项目数据，为您生成一份结构清晰、数据驱动的2026年5月7日项目动态日报。

---

## NullClaw 项目动态日报 | 2026-05-07

### 1. 今日速览

项目活跃度**中等偏下**。过去24小时内，项目仅产生1个新的活跃Issue和1个待合并的PR，无新版本发布，整体开发节奏趋于稳定。社区讨论焦点集中在**低资源设备的实用性限制**这一核心痛点。一个关于Cron子代理功能的大型PR（#783）已等待合并超过一个月，表明核心功能模块的推进进入了审慎评估阶段。项目健康度稳定，但需关注长期待处理项。

### 2. 版本发布

过去24小时内无新版本发布。

### 3. 项目进展

- **Cron 子代理功能进入待合并状态（#783）**：由开发者 yanggf8 提交的 PR #783 已进入最终评估阶段。该PR功能庞大，包含：
    - **Cron 子代理引擎**：基于数据库的调度器（`cron_runs` 历史表、`cron_run_queue` 队列），支持原子性的任务入队、执行与完成。
    - **任务类型多样性**：支持 skill、agent、shell 等多种作业类型，并可为不同任务设置时区偏移量。
    - **增强的输出格式**：为 `cron list` 和 `cron schedule` 命令提供了 JSON 输出，便于脚本调用和集成。
    - **安全加固**：包含关键的安全增强。
- **项目进展评估**：此PR将极大地增强 NullClaw 的自动化能力，标志着项目从基础对话向**可编程的自动化助手**迈进了一大步。其合并将是近期项目最重要的里程碑之一。

### 4. 社区热点

- **Issue #871：低资源设备上的搜索功能不可用**
  - **链接**: [Issue #871](https://github.com/nullclaw/nullclaw/issues/871)
  - **热度分析**: 该Issue是唯一一个活跃的Bug报告，虽赞数不高（0），但社区成员在24小时内已贡献了7条评论。这表明该问题触及了NullClaw核心用户群体的普遍痛点——**在廉价、弱性能设备上运行AI助手的实际需求**。用户对依赖外部Brave Search API的方案表示不满，认为这违背了项目的初衷。

### 5. Bug 与稳定性

**严重程度：高**

- **[Bug] Issue #871: 低资源设备上 web_search 功能不可用**
  - **描述**: `web_search` 功能在不直接支持DuckDuckGo的弱设备上几乎不可用。现有解决方案（如依赖Brave Search API）需要外部API密钥，增加了使用门槛和可能的成本，不适用NullClaw宣称的低资源设备应用场景。
  - **状态**: 开放，无关联的修复PR。

**结论**: 这是当前社区反馈最强烈的稳定性/可用性Bug。它直接挑战了项目“低资源设备运行”的核心价值主张，需要维护者优先关注。

### 6. 功能请求与路线图信号

- **核心诉求：对 web_search 功能的本地或开源替代方案**
  - **来源**: Issue #871 的讨论
  - **信号**: 用户明确提出“direct DuckDuckGo support”是理想方案。这表明社区希望有**不依赖付费或集中式API**的轻量级搜索解决方案。这可能是项目路线图中“离线/本地优先”方向的一个重要信号。
  - **与已有PR的关联**: 暂未发现直接关联。但此功能是“智能助手”的基本能力，其缺失会严重影响用户体验，可能会成为下一个开发周期的优先任务。

### 7. 用户反馈摘要

- **典型用户画像**: 在低功耗、低成本硬件（如树莓派、旧手机、低端VPS）上自行部署NullClaw的个人开发者或爱好者。
- **核心痛点**:
  - **不切实际的依赖**: 用户认为，要求用户在低资源设备上额外配置Brave Search API密钥是不切实际的，因为这类设备通常用于快速原型或最小化部署。
  - **项目定位偏差**: 用户认为当前的 `web_search` 实现与NullClaw“弱、廉价、低资源设备”的**明确用例和初衷**相违背。
- **满意/不满意**:
  - **满意的点**: 用户对Cron子代理功能（PR #783）的推出表示期待，认为这将极大提升自动化能力（这从PR的长评论和等待时间可侧面反映）。
  - **不满意的点**: 当前 `web_search` 的不可用性是主要不满来源，被定性为 **“Critical”** 级Bug。

### 8. 待处理积压

| 项目 | 类型 | 持续时间 | 关键性 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **Cron 子代理功能** | 功能PR | 自 2026-04-07 起，30天 | **高** | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |
| **低资源设备搜索Bug** | Bug | 自 2026-04-25 起，12天 | **Critical** | [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) |

**维护者提醒**：
1.  **PR #783** 已处于待合并状态长达一个月，该PR功能完备且影响深远。及时的合并或给予明确的时间线，将极大提升社区士气。
2.  **Issue #871** 是项目当前最严重的阻碍。建议尽快给出技术方案（例如：探索本地搜索索引方案、集成更轻量的搜索库、或提供自定义搜索源插件机制），即使短期内无法完全解决，也应明确后续计划，避免流失核心用户。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的IronClaw项目GitHub数据，以下是2026年5月7日的项目动态日报。

---

## IronClaw 项目日报 | 2026-05-07

### 1. 今日速览

项目今日保持**极高活跃度**，核心团队正在全力推进代号为 **“Reborn”** 的重大架构重构，今日超过90%的Issue和PR与此相关。开发活动集中在TurnCoordinator、会话/线程契约、以及产品适配器（ProductAdapter）等底层设施的API定义与代码落地，表明项目正处于从设计阶段向密集编码与集成阶段的过渡期。尽管无新版本发布，但多个大型PR（如会话线程契约 `#3315`、产品适配器原型 `#3316`）的合并与开启，标志着Reborn架构的关键组件正逐步成型。同时，社区也报告了多个P1级别的bug，集中在Telegram集成功能上，需要团队关注。

### 2. 版本发布

**无新版本发布。**

---

### 3. 项目进展

今天项目在Reborn架构的多个核心模块上取得了实质性进展，多个设计讨论已转化为代码。以下是今天合并/关闭的重要PR：

- **会话与线程基础设施落地**：
    - **[#3315] feat(reborn): add session thread transcript contract** (已合并, XL): 由核心成员serrrfirat提交，正式落地了`ironclaw_threads` crate。这定义了规范的会话线程/转录数据结构，包括消息类型、状态枚举和内存实现，为TurnCoordinator和会话管理提供了标准化的数据模型。
    - **[#3314] feat(reborn): add conversation binding contract slice** (已开启, XL): 同样是serrrfirat提交，定义了`ironclaw_conversations` crate，包含了`ConversationBindingService`, `SessionThreadService`和`InboundTurnService`的契约，并为Issue #3193提供了完整的内存语义实现。

- **产品适配器（ProductAdapter）原型**：
    - **[#3316] feat(reborn): add ProductAdapter contracts + Telegram v2 tracer-bulle…** (已开启, XL): 由nickpismenkov提交，作为Issue #3285的首个落地切片。通过三个新的crate，使用伪造的Reborn服务和录制的Telegram数据证明了ProductAdapter边界的端到端可行性，为迁移外部通道适配器奠定了基础。

- **Bug修复与稳定性提升**：
    - **[#3305] feat(turns): apply validated loop exits** (已合并, L): 增强了Turn运行器的健壮性，增加了对循环退出（LoopExit）的验证逻辑，防止无效或不安全的退出操作，并确保在恢复时正确处理活跃锁。
    - **[#3197] fix(bridge): coerce engine action params per schema** (已合并, M): 修复了`mission_create`因LLM传递的字符串类型参数（如`"120"`）导致的类型错误（Issue #3132），增强了对工具参数schema的兼容性。
    - **[#3157] fix(engine): inline gate await for Tier 0 + Tier 1 Approval gates** (已合并, XL): 修复了需要审批的工具调用在脚本内部报错而非正确暂停等待用户的问题，提升了用户体验。

**项目路线图进展**：
- 今天29个被关闭/合并的PR/Issue中，超过28个与Reborn直接相关。这显示项目正以前所未有的速度将架构设计（EPIC #2987）转化为实际代码，标志着项目已正式进入“Reborn”新架构的构建与集成阶段。

---

### 4. 社区热点

今日讨论最活跃的议题高度集中在Reborn架构的底层核心定义上，显示了社区和核心开发者在该方向上的高度聚焦：

- **#3013 [reborn] TurnCoordinator 阻塞器** (7条评论): 作为“Reborn”架构的顶级阻塞器，讨论如何定义和管理线程/轮次（turn）的准入、执行和唯一运行状态。该问题是当前所有Turn相关工作的基石。
  [查看Issue](https://github.com/nearai/ironclaw/issues/3013)

- **#3031 [reborn] 产品表面迁移EPIC** (6条评论): 作为顶层跟踪EPIC，记录了如何将现有用户/操作员行为无损迁移到新架构上，是所有产品层工作的核心入口。
  [查看Issue](https://github.com/nearai/ironclaw/issues/3031)

- **#3198 [reborn] TurnCoordinator 公开API定义** (5条评论): 尽管已关闭，但讨论热烈。该Issue聚焦于定义TurnCoordinator对外的、与适配器安全的API形状，是连接核心与外部协议的关键。
  [查看Issue](https://github.com/nearai/ironclaw/issues/3198)

**潜在诉求分析**：
这些高度专业的讨论核心诉求是**快速、无痛地完成Reborn架构的落地**。开发者们正致力于精确定义各组件间的边界和契约，以确保后续集成工作的顺利进行，并确保新架构能完全兼容现有IronClaw的用户和运维体验。

---

### 5. Bug 与稳定性

今日报告了3个新的 P1（最高优先级）bug，均与 **Telegram 集成**相关，对Telegram用户影响严重：

- **#3319 [bug_bash_P1] Gmail认证失败 (400)** [新开]: 用户在Telegram上启动Gmail认证时失败，返回400错误。
  [查看Issue](https://github.com/nearai/ironclaw/issues/3319)

- **#3320 [bug_bash_P1] Gmail认证失败后对话无法继续** [新开]: 由#3319触发，即使用户执行`/clear`命令，也无法恢复与IronClaw的对话。这是一个严重的会话卡死问题。
  [查看Issue](https://github.com/nearai/ironclaw/issues/3320)

- **#3317 [bug_bash_P1] Telegram 本地设置失败** [新开]: 用户报告按照指引在自己的本地IronClaw实例上配置Telegram时失败，但未提供明确的错误信息。
  [查看Issue](https://github.com/nearai/ironclaw/issues/3317)

**严重程度及修复状态**：
这三个均为 **P1 严重级别**，直接阻塞了Telegram用户的核心使用体验。目前暂无关联的修复PR，需要团队立即介入调查。

此外，今日还有一项稳定性修复：
- **#3309 [Make Skills E2E lifecycle deterministic]** (已开启): 旨在通过引入Playwright API mock来稳定技能（Skills）的端到端测试，替换掉对测试环境的不可控依赖，提升CI/CD的可靠性。

---

### 6. 功能请求与路线图信号

今日的新增Issue（如#3266, #3264, #3284等）几乎全部服务于“Reborn”重构路线图，没有收到明确的、来自社区的全新功能请求。这符合项目当前正处于重大架构转型期的特征，贡献者社区主要集中在协助核心开发者完成基础设施的构建。

信号解读：当前阶段，项目的核心目标是**确保Reborn架构的完整性和正确性**。任何新功能的引入都可能破坏现有设计或增加不必要的风险。因此，所有新功能请求预计将在Reborn架构稳定后才会被广泛接纳。现有的PR，如修复MCP服务器认证的**[#3322]**和微信通道的**[#1666]**，都是在现有架构或明确的重构框架下进行的增量改进。

---

### 7. 用户反馈摘要

从今日的Issues和PR中，可以提炼出一些用户痛点：

- **集成体验是主要矛盾**：Telegram集成出现的问题（认证失败、对话卡死、本地设置失败）占据了今天P1 bug的全部。这表明用户在尝试将IronClaw集成到其常用通讯工具时，期望的是稳定、无缝的体验，任何认证或流程上的障碍都会对用户造成严重困扰。
- **参数兼容性是潜在痛点**：Bug `#3132`（mission_create参数类型错误）虽然已修复，但暴露出当LLM行为与预期schema不匹配时，系统会直接报错而非尝试纠正，影响了自动化任务创建的可靠性。修复该问题的PR `#3197` 旨在提升系统对非标准输入的鲁棒性。
- **底层用户（运维/开发者）关注可靠性**：从 `#3305` (validated loop exits) 和 `#3315` (transcript contract) 等PR中可以看出，社区和核心开发者非常关注系统在处理复杂异步任务和恢复场景下的数据一致性与状态可靠性。这是项目走向成熟和高负载运行的必要基础。

---

### 8. 待处理积压

以下为长期存在或关键路径上尚未被解决的Issue和PR，提醒维护者关注：

- **PR #1666 [wechat channel]**: 一个状态为“OPEN”的大型PR，旨在增加微信通道支持。自3月26日起已开放超过1个月，期间有持续更新。其长期存在可能反映了待审批或待解决的集成问题，需要关注。
  [查看PR](https://github.com/nearai/ironclaw/pull/1666)

- **PR #2593 [chore(deps): bump the actions group]**: 一个由dependabot发起的依赖更新PR，自4月17日起一直处于开放状态。累积的14项GitHub Actions更新未被合并，可能存在兼容性冲突或需要人工核验，建议团队评估并处理，以避免CI工具链的陈旧化。
  [查看PR](https://github.com/nearai/ironclaw/pull/2593)

- **Issue #3317, #3319, #3320 [Telegram P1 bugs]**: 这组新报告的P1 bug应立即列入优先处理队列。当前没有任何关联的修复PR，是影响用户体验的最大风险点。项目组应尽快分配资源进行复现、定位和修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是为您生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-05-07

## 今日速览

今日项目活跃度**极高**，共处理了 16 个 Pull Request，且全部在 24 小时内完成合并或关闭，显示出开发团队高效的响应能力。虽然无新版本发布和新的 Issue 提出，但今日的 PR 密集地修复了多个关键 Bug 并引入了重要功能改进，主要集中在 **IM 集成优化**、**Agent 工作区重构**、**Markdown 渲染稳定性**及 **Windows 兼容性**等方面。项目整体健康度良好，正处于快速迭代和 Bug 修复的高频阶段。

## 项目进展

今日合并/关闭的 16 个 PR 覆盖了渲染器、核心逻辑、OpenClaw 插件系统及文档等多个领域，有力地推动了项目向前发展：

- **Agent 工作区解耦 (`#1890`)**: 这是一个重要的架构调整。核心 Agent 的工作区 (`MEMORY.md` 等文件) 与用户可配置的 “工作目录” 正式解耦，现在固定存储在 `{stateDir}/workspace-main/` 下。此举避免了因用户更改工作目录而导致 Agent 状态丢失的问题，增强了系统稳定性。同时，修复了一个相关回归问题 (`#1894`)，确保旧工作目录中的 `memory/` 数据能被正确迁移。

- **IM 集成与配置增强 (`#1901`, `#1893`, `#1896`)**: 对即时通讯 (IM) 功能进行了集中打磨。
    - **POPO**: 修复了标题栏和国际化（i18n）问题，使 UI 更简洁一致 (`#1901`)。
    - **微信 (WeChat)**: 通过 OpenClaw 插件注入，使微信渠道现在可以从 `openclaw.json` 配置中读取私信策略 (`dmPolicy`) 和白名单 (`allowFrom`)，并新增了高级设置面板，极大提升了用户对微信机器人的管控粒度 (`#1893`)。
    - **通用修复**: 修复了 IM 任务中修改模型不生效的问题 (`#1896`)。

- **稳定性和兼容性修复 (`#1900`, `#1895`, `#1891`, `#1889`)**: 解决了多个可能影响用户体验的顽固问题。
    - **Markdown 表格**: 修复了在并发会话下，Markdown 表格偶发渲染失败 (`#1895`) 以及模型流式回复完成后表格出现“退化”的问题 (`#1900`)。
    - **Windows 兼容性**: 修复了在 Windows 系统上删除技能目录时因权限问题导致的 `EPERM` 错误 (`#1891`)。
    - **视觉模型**: 为 `qwen` 视觉模型添加了运行时补丁，防止在特定场景下回退失败 (`#1889`)。

- **日志与代码质量 (`#1892`, `#1887`)**: 引入了网关日志的每日轮转和 3 天留存策略，便于运维排查 (`#1892`)。同时，通过清理 lint 警告，提升了代码库的健康度 (`#1887`)。

## Bug 与稳定性

今日所有合并的 PR 均为 Bug 修复或稳定性改进，按严重程度排列如下：

| 严重程度 | Bug 描述 | 修复 PR | 备注 |
| :--- | :--- | :--- | :--- |
| **高** | Markdown 表格在并发会话下偶发渲染失败 | `#1895` (已合并) | 直接影响用户阅读体验，修复已上线。 |
| **高** | 模型流式回复后，Markdown 表格内容被截断/退化 | `#1900` (已合并) | 同样影响 Markdown 表格稳定性，修复已上线。 |
| **高** | Agent 工作区中 `memory/` 目录在迁移后丢失 | `#1894` (已合并) | `#1890` 功能引入的回归问题，快速被修复。 |
| **中** | Windows 系统下删除技能目录报 `EPERM` 错误 | `#1891` (已合并) | 解决特定平台上的操作失败问题。 |
| **中** | IM 任务中修改模型设置后不生效 | `#1896` (已合并) | 功能性 Bug，影响 IM 用户体验。 |
| **中** | 模型回复后持续输出而不停止 | `#1897` (已合并) | 影响对话逻辑的终端问题。 |
| **低-中** | 主 Agent 的 Markdown 迁移后，工作目录设置不生效 | `#1899` (已合并) | 功能配置与实际执行路径不匹配。 |
| **低-中** | 任务标题显示逻辑异常 | `#1898` (已合并) | 界面显示问题。 |

## 功能请求与路线图信号

今日没有新的 Issue 提出，因此没有直接的社区功能请求。但从合并的 PR 中，可以观察到以下路线图信号：

- **配置化与灵活性增强**: `#1893` PR 将微信机器人的 `dmPolicy` 和 `allowFrom` 从硬编码改为可配置，这暗示了项目正朝着更灵活、更可定制的方向演进，未来可能会有更多插件和模块支持类似的配置化改造。
- **核心架构稳健**: `#1890` PR 对 Agent 工作区的重构表明，团队正在为更复杂的数据管理和多会话场景打基础，这可能是支持更高级编排功能的铺垫。
- **平台兼容性关注**: `#1891` PR 专门修复 Windows 平台问题，说明项目并未忽略非 Linux/macOS 用户，这有助于扩大用户基础。

## 待处理积压

今日无长期未响应的 Issue 或 PR 需要特别提醒关注。项目当前的维护节奏非常健康，所有提交均在 24 小时内得到响应。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 Moltis 项目 GitHub 数据生成的 2026-05-07 项目动态日报。

---

## Moltis 项目日报 | 2026-05-07

### 1. 今日速览

过去 24 小时内，Moltis 项目展现了较高的开发和维护活跃度。核心贡献者 **penso** 主导了一系列关键性修复和功能增强，显著提升了项目的稳定性和安全性。其中，对 Docker 沙箱的并发问题、DeepSeek 推理模式兼容性问题以及反向代理下的登录验证问题均得到修复。此外，社区中提出了关于个人智能体互联互通的 `Agent Identity` 和 `Onboarding` 协议提案，标志着项目正在从“单机助手”向“网络化智能体”生态演进。项目整体健康状况良好，代码库趋向稳定，社区讨论热度上升。

> **活跃度评估**: ⭐⭐⭐⭐ (高)

### 2. 版本发布

*无新版本发布*

### 3. 项目进展

过去 24 小时，项目共有 **9 个 PR 被合并**，主要集中在 Bug 修复和依赖更新上，大幅提升了系统的健壮性。以下为主要合并 PR：

- **沙箱并发安全修复**: [PR #971](https://github.com/moltis-org/moltis/pull/971) **penso** 修复了一个关键的并发竞态条件（Issue #964）。当多个工具调用同时尝试初始化同一个 Docker/Podman 沙箱会话时，不再发生命名冲突或启动失败。这为支持更复杂的并行任务执行奠定了基础。
- **DeepSeek 推理模式兼容**: [PR #961](https://github.com/moltis-org/moltis/pull/961) **penso** 修复了 DeepSeek 模型在“思考模式”下的兼容性问题（Issue #959）。现在，模型返回的推理内容（`reasoning_content`）会被正确保留并回传，确保了对话的连续性和准确性。
- **反向代理登录修复**: [PR #970](https://github.com/moltis-org/moltis/pull/970) **penso** 修复了用户在非 TLS 反向代理（如局域网 Docker 端口转发）下访问 Moltis 时无法登录的问题（Issue #968）。通过检查 `X-Forwarded-Proto` 报头来智能决定 Cookie 的 `Secure` 属性，提高了部署灵活性。
- **TTS 文档更新**: [PR #962](https://github.com/moltis-org/moltis/pull/962) 根据社区反馈（Issue #958），更新了本地 TTS 提供商的文档，将 Piper 和 Coqui 的链接指向了最新的、持续维护的仓库。
- **Vault 自动解锁与依赖更新**: [PR #974](https://github.com/moltis-org/moltis/pull/974) 实现了在启动时从环境变量或密钥文件自动解锁 Vault 的功能，提升了自动化部署能力。此外，`dependabot` 自动合并了 `openssl` 和 `gix` 等底层依赖的更新（[PR #975](https://github.com/moltis-org/moltis/pull/975), [PR #967](https://github.com/moltis-org/moltis/pull/967)），增强了库的安全性。
- **Matrix 集成调试增强**: [PR #957](https://github.com/moltis-org/moltis/pull/957) 增加了 Matrix OIDC 注册流程的调试日志，方便运维人员诊断 `invalid_redirect_uri` 等问题。
- **Copilot 企业令牌修复**: [PR #358](https://github.com/moltis-org/moltis/pull/358) 在等待许久后终于合并，修复了 GitHub Copilot 企业账户的令牌路由问题。

### 4. 社区热点

本周社区最引人注目的讨论并非来自于 Bug 或激烈的争论，而是来自于一个前瞻性的协议提案。

- **[Issue #973](https://github.com/moltis-org/moltis/issues/973)**: **Proposal: Onboarding + Identity protocols for interoperable personal agent servers**
    - **作者**: vystartasv
    - **诉求分析**: 这是一份结构严谨的功能提案，由社区用户 `vystartasv` 提出。提案认为 Moltis 作为强大的个人智能体服务器，当前缺乏一个标准化的协议来让多个 Agent 实例之间实现发现、身份验证和能力交换，类似于 Web 的 `WebFinger` 和 `OpenID Connect`。提案详细描述了 **L1 (Onboarding)** 和 **L2 (Identity)** 两层协议，利用 Ed25519 密钥对实现免中心化信任。此提案标志着社区开始思考 Moltis 从“单点工具”向“网络化智能体”发展的第二曲线。

    **配套 PR**: 同日，该用户贡献了相应的文档 [PR #976](https://github.com/moltis-org/moltis/pull/976)，展示了开发该功能的明确意图。核心开发者 `penso` 已参与讨论，该项目很可能成为下一阶段的重要方向。

### 5. Bug 与稳定性

昨日修复了多个影响核心功能和部署体验的 Bug，项目稳定性显著提升。

| 严重程度 | Bug 描述 | Issue 链接 | 状态 |
| :--- | :--- | :--- | :--- |
| **高（并发）** | 并行工具执行导致 Docker 沙箱命名冲突 | [#964](https://github.com/moltis-org/moltis/issues/964) | 已修复 [PR #971](https://github.com/moltis-org/moltis/pull/971) |
| **高（兼容性）** | DeepSeek 思考模式下推理内容未回传，导致 API 报错 | [#959](https://github.com/moltis-org/moltis/issues/959) | 已修复 [PR #961](https://github.com/moltis-org/moltis/pull/961) |
| **中（可用性）** | 在反向代理（非 HTTPS）环境下登录失败 | [#968](https://github.com/moltis-org/moltis/issues/968) | 已修复 [PR #970](https://github.com/moltis-org/moltis/pull/970) |
| **低（环境）** | 在 Docker (LXC) 容器内运行，浏览器沙箱失败 | [#977](https://github.com/moltis-org/moltis/issues/977) | **待处理** (无 fix PR) |

**新增待处理 Bug**: [Issue #977](https://github.com/moltis-org/moltis/issues/977) 报告了一个新的环境特定问题。在 Proxmox 的 LXC 容器内运行 Moltis Docker 镜像，并挂载 Docker 套接字时，浏览器工具沙箱初始化失败。这可能与沙箱的 `seccomp` 或内核能力要求有关，需要进一步分析和适配。

### 6. 功能请求与路线图信号

- **Agent 互联协议 ([Issue #973](https://github.com/moltis-org/moltis/issues/973), [PR #976](https://github.com/moltis-org/moltis/pull/976))**: 这是目前最响亮的功能请求信号。虽然只是一个提案，但已附带了完整的文档 PR，表明社区有强烈的意愿和能力将此功能产品化。这很可能被纳入 Moltis 的中期路线图，成为其区别于其他个人助手的核心差异化优势。
- **远程沙箱支持 ([PR #942](https://github.com/moltis-org/moltis/pull/942))**: 虽然此 PR 还处于打开状态，但其“远程及多后端沙箱支持”的目标与项目“云原生部署”的愿景一致。为了解决 DinD (Docker-in-Docker) 在 Fly.io 等平台不可用的问题，此功能一旦完成，将极大扩展 Moltis 的部署场景。这是 **penso** 关注的重点方向。

### 7. 用户反馈摘要

- **痛点与部署复杂性**: 用户在 Docker (LXC) 环境、反向代理、企业 Copilot 令牌配置等方面遇到的问题，反映了 Moltis 的部署和运维仍存在一定门槛。虽然昨日已修复了其中一部分，但 Docker 沙箱问题（#977）和 Copilot 配置复杂性（#358）提醒着项目组，简化部署文档和提供更健壮的环境兼容性是持续的需求。
- **前瞻性需求**: `vystartasv` 提出的 Agent 协议提案表明，部分高级用户已经不满足于 Moltis 作为个人工具，而是希望它能成为一个“AI 操作系统”中的节点，与其他智能体进行交互。这类用户的反馈对项目的长期发展至关重要。
- **满意度**: 多个 Bug 在一天之内被标记并修复（#959, #964, #968），社区对项目的响应速度和修复效率应有较高的认可。尤其是 DeepSeek 的适配问题得到了迅速解决。

### 8. 待处理积压

- **远程沙箱支持 PR ([PR #942](https://github.com/moltis-org/moltis/pull/942))**: 此 PR 已打开一周，正处于关键审查阶段。它是实现 Moltis 云原生化部署路径上的重要一环，建议维护者尽快完成 review，并推进合并或提供反馈，避免功能分支与主分支长期偏离。
- **Docker 沙箱故障 ([Issue #977](https://github.com/moltis-org/moltis/issues/977))**: 作为新报告的、在特定环境（LXC）下的 Bug，虽然潜在影响面不如并发问题广，但会阻碍部分社区用户上手。目前没有 assignee 和 fix PR，建议优先复现并评估修复方案，避免社区用户产生部署疑虑。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 CoPaw 项目 2026-05-07 的 GitHub 数据生成的每日项目动态日报。

---

# 🐾 CoPaw 项目动态日报 | 2026-05-07

**项目名称:** CoPaw (github.com/agentscope-ai/CoPaw)
**报告周期:** 2026-05-06 至 2026-05-07

---

### 1. 今日速览

今日 CoPaw 项目社区活跃度极高，Issue 和 PR 活动量均处于近期高位。**安全漏洞修复（文件遍历）** 与 **长对话会话管理** 是讨论最集中的核心痛点，反映了社区对生产环境稳定性的高度关注。项目在功能迭代上持续加速，尤其是在 **CLI 技能管理**与 **企业级渠道适配**（如钉钉、飞书）方面取得了显著进展。**新增的 v1.1.5.post2 快速迭代版本**也体现了项目团队对紧急问题的快速响应能力。

-   **活跃度评估:** 🟢 非常活跃 (High) - Issue 与 PR 双高，修复与功能开发并行。

---

### 2. 版本发布

-   **新版本:** **v1.1.5.post2**
    -   **发布内容:**
        -   **文档同步:** 更新文档至 v1.1.5 版本。
        -   **异步生成对话标题:** 新功能 `feat(chat): generate session titles asynchronously via LLM`，通过 LLM 异步生成会话标题，可提升长对话场景下的界面响应速度。
        -   **消息处理修复:** 修复消息处理流程中的相关问题（`fix(message_processing)`）。
    -   **破坏性变更:** 无。
    -   **迁移注意事项:** 建议所有 v1.1.5 用户升级，以获取性能和稳定性改进。

---

### 3. 项目进展

今日共有 18 个 PR 被合并或关闭，项目在以下几个关键方向取得重要进展：

-   **性能与稳定性优化:**
    -   **[PR #4081] 集成测试框架:** 新增 HTTP 集成冒烟测试，覆盖应用启动、设置和环境变量检查，为未来重构和功能添加提供了安全网。
    -   **[PR #3553] SSE 崩溃修复:** 修复了由畸形 Unicode 代理对（如半截emoji）导致控制台 WebSocket (SSE) 流异常中断的问题，显著提升了 UI 稳定性。
    -   **[PR #4085] 语言切换优化:** 优化前端语言切换逻辑并更新了图标。
    -   **[PR #4082] 版本号更新:** 项目版本号已预更新至 `1.1.6b1`，标志着下一个重要功能迭代周期即将开始。

-   **CLI 功能增强:**
    -   **[PR #4053] 技能安装/卸载 CLI:** 新增 `qwenpaw skills install/uninstall` 命令，允许用户通过 URL 安装和卸载技能，这是解决 Issue #2384 的关键一步，极大地便利了自动化运维和 Bot 管理。

-   **渠道与集成修复:**
    -   **[PR #3553] 钉钉文件名修复:** 修复了钉钉频道下载文件时，原始文件名丢失的问题。
    -   **[PR #3916] Docker 备份恢复:** 修复了 Docker 卷挂载场景下，由于 `SECRET_DIR` 是挂载点导致 `rename` 操作失败，备份恢复功能异常的问题。

---

### 4. 社区热点

-   **[🔥 Issue #3955] Windows 服务器任意文件遍历漏洞** (评论: 17 | 已关闭)
    -   **分析:** 这是今日最受关注的 Issue，一个关于 Windows 平台下的严重安全漏洞。用户报告了可以遍历服务器任意文件的潜在风险。该 Issue 已被快速关闭，推测项目团队已收到报告并正在内部处理。这反映出社区对数据安全的高度敏感以及项目团队对安全问题的重视。

-   **[Issue #4059] 对话内容过长后无法正常回复** (评论: 7 | 新开)
    -   **分析:** 这是目前热度最高的开放 Issue。用户反映在长对话中，AI 无法完整完成任务，即使使用 `/compact` 命令也无济于事。这直接触及了 LLM 上下文窗口管理的核心痛点。用户体验影响非常大，是当前亟待解决的 P0 级问题。

-   **[Issue #3702] 技能池一直报错** (评论: 6 | 已关闭)
    -   **分析:** 一个长期存在的技能管理 Bug 被关闭，表明团队可能已定位并修复了技能池加载或配置的稳定性问题，对依赖于多个技能协同工作的用户至关重要。

---

### 5. Bug 与稳定性

**严重等级: P0 (紧急)**
-   **[Issue #3955] Windows 服务器任意文件遍历漏洞** - **状态: 已关闭**。虽已关闭，但请关注后续补丁发布。
-   **[Issue #4059] 长对话内容无法完整回复** - **状态: 开放，无 PR**。直接影响核心功能，需立即关注。**建议:** 设置高优先级标签并寻找解决方案，可能涉及上下文压缩或剪枝策略的改进。

**严重等级: P1 (高)**
-   **[Issue #4047] 聊天记录中文件附件链接一天后过期** - **状态: 开放，无 PR**。Token 过期策略导致用户无法在一天后查看历史图片/文件，影响历史记录可用性。需要后端提供资源刷新机制或延长 Token 有效期。
-   **[Issue #4042] 钉钉频道最终结果通知失败** - **状态: 开放，无 PR**。macOS 环境下钉钉流式回复因事件循环竞争条件导致通知失败。
-   **[Issue #3552] Console 频道因畸形 Unicode 字符崩溃** - **状态: 已修复 (PR #3553)**。修复已合并，解决了 UI 稳定性问题。

**严重等级: P2 (中)**
-   **[Issue #4017] 开启 HEARTBEAT 后网络中断无法重连** - **状态: 已关闭**。此问题已在先前的版本中修复或被用户自行解决。
-   **[Issue #4043] Windows 版本启动慢** - **状态: 开放，无 PR**。已被报告为 Windows 平台的核心问题。

---

### 6. 功能请求与路线图信号

-   **📌 极可能纳入下个版本:**
    -   **[Issue #2384] CLI 技能安装命令 & [PR #4053] feat(skill): Add skill install/uninstall cli** - PR 已被合并，该功能已确认加入。这意味着用户可以通过命令行自动化管理技能，是运维体验的重大提升。
    -   **[Issue #3891] DeepSeek 前缀缓存命中率优化** - 用户反馈缓存命中率偏低，导致成本增加。该项目是成本优化的重点方向之一。
    -   **[Issue #4064] Agent 配置热更新时的优雅排空** - 已有相关 PR，旨在解决配置更新时中断正在执行的任务，提升生产环境的健壮性。

-   **📝 社区呼声高，路线图信号强:**
    -   **[Issue #4001] 支持在对话中手动删除单条消息** - 这是一个非常基础且高频的需求，获得了很多社区的认同。实现后能极大增强用户对历史记录的掌控力。
    -   **[Issue #4067] 自定义工作区存储路径** - 用户希望将数据存储到非系统盘，这在 Windows 等平台上是非常合理且迫切的需求。
    -   **[Issue #4086] 定时自动备份功能** - 用户提出希望备份功能能支持定时执行，这符合企业级应用的最佳实践。

---

### 7. 用户反馈摘要

-   **核心痛点:**
    -   **“对话太长就断”** (Issue #4059): 这是最强烈的用户负面反馈，直接导致工作流中断，体验断崖式下跌。
    -   **UI 性能问题** (Issue #3830, #4023): 多位用户反馈 GUI 响应慢，尤其是在 Windows 桌面端和长对话切换时，影响日常使用效率。
    -   **Windows 平台体验不佳** (Issue #4043): 启动慢、文件遍历漏洞、技能安装未注册等，Windows 用户亟需平台特定优化。
-   **满意与期望:**
    -   **功能强大但触达困难:** 有用户提到技能调用“随机性大”，希望有更可控的技能选择权，说明 CoPaw 的技能生态潜力巨大，但交互上与用户预期仍有差距。
    -   **对异步和自动化的强烈需求:** 从 AI 生成标题、CLI 技能管理到自动备份，用户期望 CoPaw 能“智能化”地处理更多后台任务，减少人工干预。
    -   **集成深度不足:** 用户希望 MCP 服务能传递动态认证 Token (Issue #3475)，以构建“内部答疑机器人”等高级场景，显示用户正将 CoPaw 用作企业级基础组件。

---

### 8. 待处理积压

-   **[Issue #3891] DeepSeek 前缀缓存命中率偏低** (创建: 2026-04-27) - **状态: 开放，无 PR**。这是一个直接影响使用 DeepSeek 用户成本的重大问题，已超过一周没有新进展。建议项目团队分配资源进行调查。
-   **[Issue #3475] MCP 服务传递动态认证信息** (创建: 2026-04-16) - **状态: 开放，无 PR**。该需求限制了 CoPaw 在多租户或企业级集成场景下的能力，是构建生态外挂能力的关键瓶颈。
-   **待合并 PR 列表 (14 个):** 众多有标签的 PR (如 `#3605`, `#3999`, `#4073`) 正在等待 Code Review。其中 `#3999 (feat(skills): add cli skill test command)` 是第一个提交者贡献，可作为鼓励社区贡献的快速通道进行合并。`#3605` 涉及微信数据迁移的重构，工作量较大，应优先安排审查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 ZeroClaw 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 2026-05-07 数据生成的项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-05-07

## 今日速览

ZeroClaw 项目今日处于**高速扩张与修复并行**的活跃状态。核心团队围绕 `v0.7.5` 版本发布进行最后的冲刺，同时社区贡献者提交了大量关于**新渠道集成（SMS/社交平台）和模型提供商接入**的 PR，展示了项目在生态兼容性上的强劲势头。然而，**高风险的运行时 Bug**（如 Postgres 内存支持崩溃、Shell 工具调用被拒）和 **WhatsApp 协议变更导致的渠道失效**是当前需要优先解决的不稳定因素。PR 积压数量（42个待合并）值得关注，可能成为项目快速迭代的瓶颈。

## 版本发布

**无**。当前版本仍为 `v0.7.4`，但 `v0.7.5` 的发布跟踪 Issue #5878 和版本号变更 PR #6492 均处于活跃状态，预计即将发布。

## 项目进展

今日合并/关闭的 PR 较少（8个），但其中几个关键合并标志着核心基础设施的增强与问题的修复：

1.  **安装体验优化 (PR #6496)**: 修复了源码安装时的特征选择器 (`picker`) 问题，确保交互提示正确输出到 `stderr` 并原地重绘，提升了 CLI 安装的可用性。
2.  **网关启动韧性与引导流程 (PR #6493)**: 这是一个重要的**高优先级修复**，旨在解决新用户或配置不完整时网关启动失败的问题。现在，即使没有配置模型，网关也能正常启动并引导用户访问 `/onboard` 页面进行配置，这对于**开箱即用的体验**至关重要。
3.  **发布流水线推进 (PR #6492)**: 发起了 `v0.7.5` 的版本号变更和 Changelog 生成，标志着结构化发布流水线已准备就绪。
4.  **UI 小修小补 (PR #6369)**: 修复了 Web 仪表盘中“Agent Tools”按钮在悬浮时的背景高度显示不全问题，属于持续性的 UI 打磨。

整体来看，项目在 **错误恢复、安装流程和版本管理**方面向前迈进了一步。

## 社区热点

今日社区讨论热度最高的议题集中在**多渠道集成**，并形成了一波“SMS 渠道”提交浪潮，引发了广泛关注和内部协作。

1.  **Issue #5890: 多智能体 UX 流程设计 RFC**
    - **链接**: [Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)
    - **热度**: 8条评论
    - **分析**: 作为已进入决策阶段的核心 RFC，该议题持续吸引着关注。它定义了下一代 ZeroClaw 多智能体交互的核心体验，是社区最关心的**长期战略方向**。其进展决定了项目未来形态。
2.  **Issue #5878: v0.7.5 版本发布跟踪**
    - **链接**: [Issue #5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)
    - **热度**: 8条评论
    - **分析**: 作为当前版本的“控制台”，开发者们在此讨论发布范围、修复清单和自动化流程，是社区贡献者了解项目近期优先级的核心窗口。
3.  **一股“SMS 渠道”浪潮 (Issues #6494, #6495, #6427, #6452, #6453, #6451)**
    - **链接**: [Issue #6495 (Vonage)](https://github.com/zeroclaw-labs/zeroclaw/issues/6495), [Issue #6429 (Twilio)](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)
    - **热度**: 每个 Issue 都有1-2条评论，但作为一个系列（Twilio, Sinch, Plivo, Telnyx, Vonage），其数量惊人。
    - **分析**: 作者 `theonlyhennygod` 在短短两天内提交了多个 SMS 渠道的 Feature Request，并已提交了首个对应的 Vonage PR。这反映了社区对**将 ZeroClaw 无缝接入“非 App”通信方式（短信）**的强烈需求，预示着项目在**扩大用户触达半径**上的巨大潜力。这些请求很可能被整合到统一的`v0.8.0`插件体系中进行管理。

## Bug 与稳定性

今日报告了多个高严重性 Bug，部分已有修复 PR，整体稳定性面临挑战。

- **[S1 - 工作流阻塞] Bug #6434: Shell 工具在完全自主模式下被拒绝**
    - **链接**: [Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)
    - **描述**: 即使配置了`[autonomy] level = "full"`，Shell 工具调用请求也无法到达运行时，完全阻止了自动化工作流。
    - **状态**: **无对应 PR**，需紧急处理。

- **[S1 - 工作流阻塞] Bug #6472: 网关无法使用 Postgres 内存后端**
    - **链接**: [Issue #6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)
    - **描述**: 运行时因“无法在运行时内部启动运行时”而 panic，导致 Postgres 作为内存后端不可用。
    - **状态**: **无对应 PR**，内存子系统稳定性存疑。

- **[S1 - 工作流阻塞] Bug #6246: WhatsApp 协议升级后渠道失效**
    - **链接**: [Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)
    - **描述**: WhatsApp Web 渠道在服务器端协议更新后（4月24日），消息收发完全静默失败。
    - **状态**: 问题持续多日，**尚无修复 PR**，是重要集成渠道的关键缺陷。

- **[S1 - 工作流阻塞] Bug #6413 (已关闭)**: WhatsApp Web 渠道会错误地将用户自身发出的消息当作指令来处理（`is_from_me` 泄露），该 Bug 已被关闭，说明已找到临时解决方案或已修复。

- **[S2 - 行为降级] Bug #6474**: 一次用户请求导致 LLM 被重复调用两次，造成资源浪费。
    - **链接**: [Issue #6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)

## 功能请求与路线图信号

今日的功能请求呈现出**广度扩张**和**体系化**的特点，暗示了 `v0.8.0` 可能不仅仅是小版本更新。

1.  **“万物皆插件”架构**
    - **Issue #6489** 提议将所有“集成”（渠道、AI 提供商、工具等）统一到一个插件目录中。这与庞大的 SMS 渠道提交潮高度契合，表明项目正在从**功能性扩展**转向**架构层面重构**，以应对日益复杂的生态系统。

2.  **海量新模型提供商**
    - **PR #6460-6463, #6491**: 社区提交了针对 **Atomic Chat, Arcee AI, Lambda AI, Featherless AI, Inception Labs** 等多个新兴模型提供商的集成 PR。这显示出社区对**模型多样性和供应商无关性**的高度看重，项目正在成为 AI 模型的“汇流中心”。

3.  **新一代渠道：联邦宇宙的深度集成**
    - **Issues #6423, #6427, #6435, #6437, #6441, #6443**: 除了 SMS，还提出了 **Mastodon, Rocket.Chat, Zulip, Lemmy, Twitch** 等渠道。这不仅是为了增加连接性，更是为了覆盖**管理自托管、注重隐私和特定兴趣社区**的用户群体。

## 用户反馈摘要

从今日的 Issues 评论中，可以清楚地看到用户的几类诉求：

1.  **通信是第一生产力**：用户 `alexandme` 在报告 WhatsApp 缺陷时表示“工作流被阻塞”，这表明用户已将这些渠道视为核心生产力的延伸，而非附属功能。他们容忍不了渠道的稳定性问题。
2.  **对“开箱即用”的渴望**：Issue #5890 和多智能体 UX 设计，以及 PR #6493 对启动流程的修复，都指向用户希望 ZeroClaw 能**以最小的配置成本快速上手运行**，尤其是在网关和 UI 层面。
3.  **模型和平台选择的“自由”**：大量关于新模型提供商的 PR（Arcee, Lambda 等）表明，开发者不愿被锁定在单一模型或大型云服务商的生态中。他们乐于探索和利用各种专业化的、可能更便宜或更快的推理端点。
4.  **文档协作与社区规范**：Issue #5863 和 PR #6473 分别从“技能文档缺失”和“审查/PR 流程规范”两个角度，反映出社区新手对**清晰、可执行的贡献指引**的需求。他们希望知道“如何正确参与进来”，而不仅仅是报告 Bug。

## 待处理积压

以下 Issue/PR 虽非最新，但因其重要性或长期未响应，需提醒维护者关注：

1.  **[Issue #6434] Shell 工具在高自主性模式下被拒绝**：S1 级别 Bug，直接破坏了核心的自动化能力，当前无任何进展，应列为最高优先级。
    - **链接**: [Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)

2.  **[Issue #5871] CI: v0.7.5 — 结构化发布管线**：已在 `v0.7.5` 范围中用于确认发布流程，但作为基础设施的关键部分，其进展直接影响到所有用户。当前已关闭，相关的发布工作已由 #5878 和 #6492 接力。
    - **链接**: [Issue #5871](https://github.com/zeroclaw-labs/zeroclaw/issues/5871)

3.  **[PR #6117] 支持原生 Responses 工具调用**：这是一个大型 PR（size: L, risk: high），目标是支持 OpenAI 的新一代 Responses API。目前标记为 `needs-author-action`，可能因作者未回应而陷入停滞，但这对于兼容最新 AI 模型至关重要，建议维护者主动介入。
    - **链接**: [PR #6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117)

4.  **[PR #6230] 允许 WhatsApp 作为 Cron 投递渠道**：这是一个很实用的功能，但已开放一周且处于待合并状态。如果其依赖的 WhatsApp Bug (#6246) 能修复，这个 PR 应该尽快合并和测试。
    - **链接**: [PR #6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230)

</details>

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*