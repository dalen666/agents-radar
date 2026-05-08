# ArXiv AI 研究日报 2026-05-08

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-08 04:19 UTC

---

好的，以下是基于您提供的2026年5月8日ArXiv论文列表生成的AI研究日报。

---

### 📅 ArXiv AI 研究日报 (2026-05-08)

#### **今日速览**

今日研究热点集中在利用强化学习（RL）提升大语言模型的长程推理能力，并探索将MoE架构推向更深层次的模块化与稀疏性。智能体领域，从递归任务分解（Recursive Agent）到技能学习与自我进化（SkillOS），展现出向更具自主性和扩展性的方向迈进。值得关注的是，AI在数学和流体力学等科学领域展现出成为“AI合作科学家”的潜力，同时针对AI安全的评估方法（如无基准安全评分）也在同步深化。

#### **重点论文**

##### 🧠 **大语言模型（架构、训练、对齐、评估）**

1.  **EMO: Pretraining Mixture of Experts for Emergent Modularity**
    - **作者:** R. Wang, A. Bhagia, S. Min et al.
    - **一句话:** 提出了一种新的MoE预训练方法，使得专家模块在训练后自然涌现出按学科（如代码、数学）分化的模块化能力，有望替代传统的“全量模型”部署方式。
    - **链接:** http://arxiv.org/abs/2605.06663v1

2.  **Optimizer-Model Consistency: Full Finetuning with the Same Optimizer as Pretraining Forgets Less**
    - **作者:** Y. Liu, J. Wang, T. Zhang
    - **一句话:** 发现了一个简单但关键的洞见：全参数微调时使用与预训练阶段相同的优化器，可以在学习新任务的同时显著减少对旧知识的灾难性遗忘。
    - **链接:** http://arxiv.org/abs/2605.06654v1

3.  **The Structural Origin of Attention Sink: Variance Discrepancy, Super Neurons, and Dimension Disparity**
    - **作者:** S. Li, K. Jiang, J. Sun et al.
    - **一句话:** 从结构层面解释了“注意力汇聚”现象的成因，归因于初始token的方差差异和“超级神经元”的存在，为模型设计和优化提供了理论指导。
    - **链接:** http://arxiv.org/abs/2605.06611v1

4.  **Why Global LLM Leaderboards Are Misleading: Small Portfolios for Heterogeneous Supervised ML**
    - **作者:** J. Moondra, A. Chughtai, B. Lanka et al.
    - **一句话:** 通过分析海量Arena数据，证明全球性的LLM排行榜具有误导性，并提出更精细化的“小投资组合”评估方法才能反映模型在不同语言和任务上的真实能力。
    - **链接:** http://arxiv.org/abs/2605.06656v1

5.  **When No Benchmark Exists: Validating Comparative LLM Safety Scoring Without Ground-Truth Labels**
    - **作者:** S. Gautam, F. Schwall, A. W. Olstad et al.
    - **一句话:** 针对特定语言或领域缺乏安全基准的情况，提出了一种无需真实标签即可进行模型间安全比较评分的审计方法。
    - **链接:** http://arxiv.org/abs/2605.06652v1

##### 🤖 **智能体与推理（规划、工具使用、多智能体、思维链）**

6.  **Recursive Agent Optimization**
    - **作者:** A. Gandhi, S. Chakraborty, X. Wang et al.
    - **一句话:** 提出了递归智能体优化方法，训练智能体能够自主创建并委派子任务给自己新的实例，实现了推理时计算的有效扩展，是构建高度自主智能体的重要一步。
    - **链接:** http://arxiv.org/abs/2605.06639v1

7.  **SkillOS: Learning Skill Curation for Self-Evolving Agents**
    - **作者:** S. Ouyang, J. Yan, Y. Chen et al.
    - **一句话:** 提出技能操作系统，让智能体在完成任务后能自动提取、筛选并复用技能，实现从一次性解决问题到持续自我进化的转变。
    - **链接:** http://arxiv.org/abs/2605.06614v1

8.  **Can RL Teach Long-Horizon Reasoning to LLMs? Expressiveness Is Key**
    - **作者:** T. Wang, Z. Wang, G. Lan et al.
    - **一句话:** 通过构建可控的合成推理环境 **ScaleLogic**，系统地研究了强化学习训练在提升LLM长程推理能力上的效果，并指出表达性（Expressiveness）是关键瓶颈。
    - **链接:** http://arxiv.org/abs/2605.06638v1

9.  **AI Co-Mathematician: Accelerating Mathematicians with Agentic AI**
    - **作者:** D. Zheng, I. von Glehn, Y. Zwols et al.
    - **一句话:** 推出了“AI副数学家”工作台，集成AI智能体以支持数学家的开放研究，包括构思、文献综述和实验，展示了AI在高级科学思维辅助中的潜力。
    - **链接:** http://arxiv.org/abs/2605.06651v1

10. **Superintelligent Retrieval Agent: The Next Frontier of Information Retrieval**
    - **作者:** Z. Yang, Q. Ma, J. Chen et al.
    - **一句话:** 提出“超智能检索代理”概念，不再是黑盒式查询，而是让智能体自主探索知识库、连接信息点，如同人类研究员一样进行深入调查。
    - **链接:** http://arxiv.org/abs/2605.06647v1

##### 🔧 **方法与框架（新技术、基准测试、效率优化）**

11. **UniPool: A Globally Shared Expert Pool for Mixture-of-Experts**
    - **作者:** M. Huang, H. Shi, C. Zheng et al.
    - **一句话:** 挑战了MoE中每层独立专家的惯例，提出跨层共享的全局专家池，打破了深度增长与专家参数线性增长的耦合，极大提升了参数效率。
    - **链接:** http://arxiv.org/abs/2605.06665v1

12. **Verifier-Backed Hard Problem Generation for Mathematical Reasoning**
    - **作者:** Y. Lai, J. Feng, Y. W. Teh et al.
    - **一句话:** 利用验证器（Verifier）辅助生成高质量、有挑战性的数学问题，能够有效缓解训练数据不足的问题，对提升模型数学推理能力至关重要。
    - **链接:** http://arxiv.org/abs/2605.06660v1

13. **SoftSAE: Dynamic Top-K Selection for Adaptive Sparse Autoencoders**
    - **作者:** J. Stępień, M. Mazur, J. Tabor et al.
    - **一句话:** 引入动态Top-K选择机制改进稀疏自编码器，使模型能够根据输入自适应调整激活的特征数量，释放了更大容量的同时保持可解释性。
    - **链接:** http://arxiv.org/abs/2605.06610v1

##### 📊 **应用（垂直领域、多模态、代码生成）**

14. **DINORANKCLIP: DINOv3 Distillation and Injection for Vision-Language Pretraining with High-Order Ranking Consistency**
    - **作者:** S. Jiang, N. Yu, Y. Zhang et al.
    - **一句话:** 将DINOv3的细粒度视觉能力注入CLIP，并通过高阶排名一致性损失，生成了在细粒度理解上显著优于传统CLIP的视觉-语言模型。
    - **链接:** http://arxiv.org/abs/2605.06592v1

15. **Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM Deep Research Agents**
    - **作者:** H. Onweller, E. Lumer, A. Huber et al.
    - **一句话:** 针对LLM深度研究代理的引用进行结构化解析和评估，揭示了当前引用往往不可验证的现状，为提升AI生成报告的可信度提供了评估框架。
    - **链接:** http://arxiv.org/abs/2605.06635v1

#### **研究趋势信号**

一个显著的信号是**“自我进化”与“递归”范式**的崛起。无论是`Recursive Agent Optimization`中的递归任务分解，还是`SkillOS`中的自主技能学习，都表明研究重心正从“如何更好地完成任务”转向“如何构建能持续学习和成长的系统”。同时，**“科学发现”成为AI代理的核心应用战场**，如`AI Co-Mathematician`和`AI CFD Scientist`，标志着AI正在深入参与理论研究和复杂模拟的实验设计。此外，对现有评估体系的**自反性审视**（如指出排行榜误导性、引用不可验证）也成为一个重要趋势。

#### **值得精读**

1.  **`EMO: Pretraining Mixture of Experts for Emergent Modularity`**
    - **理由:** 这篇论文直击MoE架构的核心痛点——专家无组织。提出的“涌现模块化”为构建更高效、更易解释和可组合的下一代大模型铺平了道路，是架构创新方向的佳作。

2.  **`Recursive Agent Optimization`**
    - **理由:** 解决了智能体扩展性的关键问题：如何优雅地处理复杂长程任务。递归委派自身实例的思想非常优雅，有望成为未来自主智能体的基础构建模块。

3.  **`AI Co-Mathematician: Accelerating Mathematicians with Agentic AI`**
    - **理由:** 代表了AI应用的最高境界之一：不是替代人类，而是成为其智力放大器。它提供了一个具体的、工程化的AI科学协同工作范式，对于理解AI如何加速科学发现具有重要的参考价值。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*