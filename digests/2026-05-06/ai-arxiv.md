# ArXiv AI 研究日报 2026-05-06

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-06 04:36 UTC

---

好的，这是为您生成的《ArXiv AI 研究日报》。

---

## ArXiv AI 研究日报 — 2026-05-06

### 今日速览

今日投稿亮点纷呈，主要集中在**AI安全与对齐**的深化以及**智能体系统**实用性的提升上。在安全方面，多篇论文探讨了大语言模型在医疗等高危场景下的安全性与准确性之间的矛盾，并提出原子事实核查等新机制来增强用户信任。智能体领域，研究者们致力于提升搜索代理的复杂任务能力、自动化组合多智能体工作流，并提出了新的安全基准来评估编码智能体的组合性漏洞。此外，**模型自我进化**与**无训练数据集蒸馏**等方向也出现了令人瞩目的新方法。

### 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **Safety and accuracy follow different scaling laws in clinical large language models**
    - 作者: Sebastian Wind et al.
    - 链接: http://arxiv.org/abs/2605.04039v1
    - 一句话说明：揭示临床LLM中安全性与准确性遵循不同的缩放规律，挑战了“更高精度意味着更安全行为”的隐含假设，对医学AI部署至关重要。

2.  **Logical Consistency as a Bridge: Improving LLM Hallucination Detection via Label Constraint Modeling between Responses and Self-Judgments**
    - 作者: Hao Mi et al.
    - 链接: http://arxiv.org/abs/2605.03971v1
    - 一句话说明：提出通过建模模型回答与其自我判断之间的标签约束，利用逻辑一致性作为桥梁，有效提升了LLM幻觉检测的准确性。

3.  **Atomic Fact-Checking Increases Clinician Trust in Large Language Model Recommendations for Oncology Decision Support**
    - 作者: Lisa C. Adams et al.
    - 链接: http://arxiv.org/abs/2605.03916v1
    - 一句话说明：通过一项包含356名临床医生的随机对照试验证明，将AI治疗建议分解为可独立验证的原子事实，显著提高了临床医生对LLM建议的信任度。

4.  **EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics**
    - 作者: Shuyue Stella Li et al.
    - 链接: http://arxiv.org/abs/2605.03871v1
    - 一句话说明：提出一种自我进化框架，让语言模型在无需外部监督（如人类标注或奖励模型）的情况下，通过协同进化的判别性规则来持续自我提升。

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

5.  **OpenSeeker-v2: Pushing the Limits of Search Agents with Informative and High-Difficulty Trajectories**
    - 作者: Yuwen Du et al.
    - 链接: http://arxiv.org/abs/2605.04036v1
    - 一句话说明：通过生成信息丰富且高难度的训练轨迹，显著提升了LLM搜索代理的深度搜索能力，试图缩小与工业界巨头的差距。

6.  **From Intent to Execution: Composing Agentic Workflows with Agent Recommendation**
    - 作者: Kishan Athrey et al.
    - 链接: http://arxiv.org/abs/2605.03986v1
    - 一句话说明：提出一种从用户意图自动推荐并组合AI智能体以形成工作流的方法，旨在将多智能体系统的构建从手动操作转变为自动化流程。

7.  **Correct Is Not Enough: Training Reasoning Planners with Executor-Grounded Rewards**
    - 作者: Tianyang Han et al.
    - 链接: http://arxiv.org/abs/2605.03862v1
    - 一句话说明：指出仅用最终答案正确性训练推理规划器是不够的，提出从“执行者”（模型）的角度出发，为其提供基于执行的、更细粒度的奖励信号，以训练出更忠实可靠的推理链。

8.  **MCJudgeBench: A Benchmark for Constraint-Level Judge Evaluation in Multi-Constraint Instruction Following**
    - 作者: Jaeyun Lee et al.
    - 链接: http://arxiv.org/abs/2605.03858v1
    - 一句话说明：发布一个新的基准测试，专注于在“多约束指令遵循”任务中，评估LLM判断器在单条约束级别上的评估能力，而非仅看整体响应判断。

#### 🔧 方法与框架（新技术、基准测试、效率优化）

9.  **Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours**
    - 作者: Raja Sekhar Rao Dheekonda et al.
    - 链接: http://arxiv.org/abs/2605.04019v1
    - 一句话说明：提出一种新型AI红队测试方法，利用代理将攻击工作流从数周缩短至数小时，以应对代理式AI系统日益增长的安全挑战。

10. **MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents**
    - 作者: Jonathan Steinberg et al.
    - 链接: http://arxiv.org/abs/2605.03952v1
    - 一句话说明：发布一个新的基准测试，专门衡量编码智能体在分解任务时可能引入的组合性安全漏洞，填补了现有安全对齐评估的空白。

11. **DMGD: Train-Free Dataset Distillation with Semantic-Distribution Matching in Diffusion Models**
    - 作者: Qichao Wang et al.
    - 链接: http://arxiv.org/abs/2605.03877v1
    - 一句话说明：提出一种无需训练的（train-free）数据集蒸馏方法，通过在扩散模型的潜在空间中匹配语义分布来生成精简的合成数据集，大幅提升了效率。

12. **QKVShare: Quantized KV-Cache Handoff for Multi-Agent On-Device LLMs**
    - 作者: Pratik Honavar et al.
    - 链接: http://arxiv.org/abs/2605.03884v1
    - 一句话说明：针对多智能体LLM在边缘设备上的场景，提出一种量化KV缓存传递框架，通过令牌级混合精度分配来高效地共享上下文，避免了昂贵的重新计算。

#### 📊 应用（垂直领域、多模态、代码生成）

13. **EQUITRIAGE: A Fairness Audit of Gender Bias in LLM-Based Emergency Department Triage**
    - 作者: Richard J. Young et al.
    - 链接: http://arxiv.org/abs/2605.03998v1
    - 一句话说明：对基于LLM的急诊分诊系统进行性别偏见审计，发现其可能延续或放大已知的临床性别差异，为医疗AI的公平性研究敲响警钟。

14. **SymptomAI: Towards a Conversational AI Agent for Everyday Symptom Assessment**
    - 作者: Joseph Breda et al.
    - 链接: http://arxiv.org/abs/2605.04012v1
    - 一句话说明：探索构建能够进行日常症状评估的对话式AI代理，重点关注在缺乏复杂病史背景的“简单”场景下的表现。

15. **The Counterexample Game: Iterated Conceptual Analysis and Repair in Language Models**
    - 作者: Daniel Drucker et al.
    - 链接: http://arxiv.org/abs/2605.03936v1
    - 一句话说明：将哲学方法论中的“提出定义-寻找反例-修复定义”迭代过程引入LLM，研究语言模型能否通过这种“反例游戏”自主进行概念分析和修正。

### 研究趋势信号

从今日投稿中可以观察到几个新趋势：**“自我进化”与“无监督”** 成为热点，如EvoLM和DMGD分别展示了模型在没有外部监督下自我提升和数据集无需训练进行蒸馏的可能性。**“安全评估精细化”** 趋势明显，从宏观的偏见审计转向具体行为的原子事实核查和组合性漏洞评估。此外，**“智能体间通信效率”** 受到关注，如QKVShare聚焦于边缘设备上多智能体的高效低功耗上下文共享，预示着分布式AI系统正走向实用化。

### 值得精读

1.  **Safety and accuracy follow different scaling laws in clinical large language models (2605.04039)**
    - **理由:** 该发现直接挑战了AI领域“越大越好，越准越安全”的主流观点，对于所有高风险领域的AI系统部署都具有根本性的指导意义，其方法论和结论值得深入研读。
2.  **Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours (2605.04019)**
    - **理由:** 代理式AI是当前最热门的方向之一，但其安全性问题却鲜有有效方案。本文提出的新型红队测试方法直击痛点，其思路和框架为保护下一代AI系统提供了关键洞见。
3.  **EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics (2605.03871)**
    - **理由:** 这项工作挑战了当前依赖人类或强大模型反馈的范式，探索了AI自我进化的可能性。如果其方法可行，将极大降低对齐成本，并可能催生全新的AI发展路径，极具前瞻性。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*