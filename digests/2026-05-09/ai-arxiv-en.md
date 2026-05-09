# ArXiv AI Research Digest 2026-05-09

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-09 04:28 UTC

---

Here is the structured ArXiv AI Research Digest for May 9, 2026.

---

### ArXiv AI Research Digest — 2026-05-09

### 1. Today’s Highlights

Today’s submissions reveal a strong shift toward **agentic self-evolution**, where systems learn to curate and reuse their own skills or sub-tasks recursively to solve long-horizon problems. A cluster of papers tackles the **structural limitations of Mixture-of-Experts (MoE)** , proposing both global expert pools and emergent modularity to decouple model size from capability breadth. In reasoning, researchers are moving beyond static benchmarks to **synthetic frameworks for expressiveness verification**, addressing how reinforcement learning scales with task difficulty. Finally, the emergence of **AI co-scientists**—in mathematics, fluid dynamics, and neuroimaging—signals a maturing vision of AI as an interactive research partner rather than a single-purpose tool.

### 2. Key Papers

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

1.  **UniPool: A Globally Shared Expert Pool for Mixture-of-Experts**
    [http://arxiv.org/abs/2605.06665v1](http://arxiv.org/abs/2605.06665v1)
    Minbin Huang, Han Shi et al.
    Proposes a single, globally shared expert pool that decouples depth scaling from linear parameter growth, challenging the rigid per-layer expert allocation in modern MoE architectures.

2.  **EMO: Pretraining Mixture of Experts for Emergent Modularity**
    [http://arxiv.org/abs/2605.06663v1](http://arxiv.org/abs/2605.06663v1)
    Ryan Wang, Akshita Bhagia et al.
    Demonstrates that pretraining an MoE can induce emergent, reusable modules specialized for capabilities like code or math, enabling narrow-task inference without activating the full model.

3.  **Optimizer-Model Consistency: Full Finetuning with the Same Optimizer as Pretraining Forgets Less**
    [http://arxiv.org/abs/2605.06654v1](http://arxiv.org/abs/2605.06654v1)
    Yuxing Liu, Jianyu Wang et al.
    Reveals a simple but important finding: using the same optimizer during full finetuning as was used during pretraining significantly reduces catastrophic forgetting.

4.  **Why Global LLM Leaderboards Are Misleading: Small Portfolios for Heterogeneous Supervised ML**
    [http://arxiv.org/abs/2605.06656v1](http://arxiv.org/abs/2605.06656v1)
    Jai Moondra, Ayela Chughtai et al.
    Analyzes ~89K human comparisons and shows that global Bradley-Terry rankings hide nearly 2/3 of preference heterogeneity, arguing for smaller, context-specific leaderboards.

5.  **The Structural Origin of Attention Sink: Variance Discrepancy, Super Neurons, and Dimension Disparity**
    [http://arxiv.org/abs/2605.06611v1](http://arxiv.org/abs/2605.06611v1)
    Siquan Li, Kaiqi Jiang et al.
    Provides a mechanistic explanation for the attention sink phenomenon, tracing its root to variance discrepancies across token positions and the emergence of “super neurons.”

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

1.  **Recursive Agent Optimization**
    [http://arxiv.org/abs/2605.06639v1](http://arxiv.org/abs/2605.06639v1)
    Apurva Gandhi, Satyaki Chakraborty et al.
    Introduces a reinforcement learning approach that trains agents to spawn and delegate sub-tasks to new instantiations of themselves, implementing a natural inference-time scaling algorithm for complex problems.

2.  **StraTA: Incentivizing Agentic Reinforcement Learning with Strategic Trajectory Abstraction**
    [http://arxiv.org/abs/2605.06642v1](http://arxiv.org/abs/2605.06642v1)
    Xiangyuan Xue, Yifan Zhou et al.
    Proposes strategic trajectory abstraction to mitigate weak credit assignment in long-horizon agent tasks, improving both exploration and learning efficiency.

3.  **SkillOS: Learning Skill Curation for Self-Evolving Agents**
    [http://arxiv.org/abs/2605.06614v1](http://arxiv.org/abs/2605.06614v1)
    Siru Ouyang, Jun Yan et al.
    Tackles the bottleneck of skill quality in self-evolving agents by learning a curation policy that decides which past experiences to distill into reusable skills.

4.  **Can RL Teach Long-Horizon Reasoning to LLMs? Expressiveness Is Key**
    [http://arxiv.org/abs/2605.06638v1](http://arxiv.org/abs/2605.06638v1)
    Tianle Wang, Zhaoyang Wang et al.
    Introduces ScaleLogic, a synthetic reasoning framework, to systematically study how reinforcement learning scales with task difficulty, highlighting that expressiveness of the reward structure is the critical factor.

5.  **MASPO: Joint Prompt Optimization for LLM-based Multi-Agent Systems**
    [http://arxiv.org/abs/2605.06623v1](http://arxiv.org/abs/2605.06623v1)
    Zhexuan Wang, Xuebo Liu et al.
    Addresses the challenge of jointly optimizing role-specific prompts across interacting agents in a multi-agent system, proposing a prompt-level coordination strategy.

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

1.  **Beyond Negative Rollouts: Positive-Only Policy Optimization with Implicit Negative Gradients**
    [http://arxiv.org/abs/2605.06650v1](http://arxiv.org/abs/2605.06650v1)
    Mingwei Xu, Hao Fang
    Proposes a novel RLVR framework that derives implicit negative gradients from positive-only rollouts, potentially simplifying the training pipeline for reasoning models while maintaining performance.

2.  **Crafting Reversible SFT Behaviors in Large Language Models**
    [http://arxiv.org/abs/2605.06632v1](http://arxiv.org/abs/2605.06632v1)
    Yuping Lin, Pengfei He et al.
    Introduces a method to embed SFT-induced behaviors into reversible subnetworks, enabling selective behavior removal without retraining—a step toward more modular and controllable finetuning.

3.  **Are We Making Progress in Multimodal Domain Generalization? A Comprehensive Benchmark Study**
    [http://arxiv.org/abs/2605.06643v1](http://arxiv.org/abs/2605.06643v1)
    Hao Dong, Hongzhao Li et al.
    Provides a critical review of the MMDG field, arguing that many reported gains are artifacts of inconsistent evaluation and establishing a unified benchmark protocol.

#### 📊 Applications (domain-specific, multimodal, code generation)

1.  **AI Co-Mathematician: Accelerating Mathematicians with Agentic AI**
    [http://arxiv.org/abs/2605.06651v1](http://arxiv.org/abs/2605.06651v1)
    Daniel Zheng, Ingrid von Glehn et al.
    Presents a workbench for interactive mathematical research, where AI agents assist with ideation, literature search, and conjecture testing, directly integrated into a mathematician’s workflow.

2.  **Superintelligent Retrieval Agent: The Next Frontier of Information Retrieval**
    [http://arxiv.org/abs/2605.06647v1](http://arxiv.org/abs/2605.06647v1)
    Zeyu Yang, Qi Ma et al.
    Proposes a retrieval agent that moves beyond black-box search by reasoning over its own retrieval strategies and the structure of knowledge bases.

3.  **AI CFD Scientist: Toward Open-Ended Computational Fluid Dynamics Discovery with Physics-Aware AI Agents**
    [http://arxiv.org/abs/2605.06607v1](http://arxiv.org/abs/2605.06607v1)
    Nithin Somasekharan, Rabi Pathak et al.
    Extends the AI scientist loop to high-fidelity physical simulation, tackling the critical challenge that a valid simulation script does not guarantee physically meaningful results.

### 3. Research Trend Signal

A clear emergent theme today is **recursive self-improvement and modular composition**. Rather than training monolithic models for all capabilities, the community is converging on architectures and training methods where agents learn to decompose their own problems (Recursive Agent Optimization, SkillOS), or where models automatically discover modular sub-structures (EMO, UniPool). This is complemented by a practical push toward **synthetic, controllable environments** (ScaleLogic) to study the fundamental limits of these scaling methods. The rise of “AI co-scientist” papers across mathematics, fluid dynamics, and neuroimaging further suggests that the field is prioritizing **interactive, iterative workflows** over one-shot prediction, moving toward AI systems that collaborate with human experts on open-ended research.

### 4. Worth Deep Reading

1.  **Recursive Agent Optimization** (2605.06639): A novel framing of agentic recursion as an RL problem; this paper has the highest potential to influence how we design scalable, autonomous systems that can handle truly complex, decomposable tasks.

2.  **EMO: Pretraining Mixture of Experts for Emergent Modularity** (2605.06663): Directly challenges the assumption that MoE models are “emergent” only after training. This work provides an actionable pretraining objective to *induce* modularity, which could significantly improve the efficiency and interpretability of large models.

3.  **Why Global LLM Leaderboards Are Misleading** (2605.06656): A data-driven critique of a core evaluation practice. The finding that 2/3 of pairwise preferences are heterogeneous under a global ranking has direct, practical implications for how the community should evaluate and compare models.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*