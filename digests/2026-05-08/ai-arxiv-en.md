# ArXiv AI Research Digest 2026-05-08

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-08 04:19 UTC

---

Here is the structured ArXiv AI Research Digest for 2026-05-08.

---

## ArXiv AI Research Digest: 2026-05-08

### Today's Highlights
Today’s submissions reveal a strong pivot toward **agentic and recursive architectures**, with multiple papers exploring how LLMs can delegate sub-tasks, curate their own skills, and self-improve through interaction (Recursive Agent Optimization, SkillOS, StraTA). A second major theme is the push for **substantive theoretical and mechanistic understanding** of current models, from the origins of attention sinks to the functional-analysis of weight decay and the dynamics of sign-based optimizers. Finally, the field is increasingly focused on **safety, attribution, and verification**—addressing how to evaluate LLM safety without benchmarks, verify source citations in generated reports, and integrate verifiers for challenging domains like mathematics and scientific simulation.

### Key Papers

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

1.  **Why Global LLM Leaderboards Are Misleading: Small Portfolios for Heterogeneous Supervised ML**
    [http://arxiv.org/abs/2605.06656v1](http://arxiv.org/abs/2605.06656v1)
    Jai Moondra et al.
    Using ~89K human comparisons from Chatbot Arena, this paper shows that global Bradley-Terry rankings are misleading because nearly 2/3 of pairwise comparisons violate transitivity, advocating for personalized "portfolios" of rankings instead.

2.  **Optimizer-Model Consistency: Full Finetuning with the Same Optimizer as Pretraining Forgets Less**
    [http://arxiv.org/abs/2605.06654v1](http://arxiv.org/abs/2605.06654v1)
    Yuxing Liu et al.
    A simple but significant finding: using the same optimizer during full finetuning as was used during pretraining substantially reduces catastrophic forgetting, offering a practical guideline for LLM adaptation.

3.  **The Structural Origin of Attention Sink: Variance Discrepancy, Super Neurons, and Dimension Disparity**
    [http://arxiv.org/abs/2605.06611v1](http://arxiv.org/abs/2605.06611v1)
    Siquan Li et al.
    Provides the first rigorous mechanistic explanation for the attention sink phenomenon, tracing it to a variance discrepancy rooted in the softmax operation’s structure and the emergence of "super neurons."

4.  **Weight-Decay Turns Transformer Loss Landscapes Villani: Functional-Analytic Foundations for Optimization and Generalization**
    [http://arxiv.org/abs/2605.06599v1](http://arxiv.org/abs/2605.06599v1)
    Abhijit Das et al.
    The first rigorous functional-analytic characterization of how weight decay shapes the Transformer loss landscape, proving explicit bounds on gradient smoothness and generalization.

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

5.  **Recursive Agent Optimization**
    [http://arxiv.org/abs/2605.06639v1](http://arxiv.org/abs/2605.06639v1)
    Apurva Gandhi et al.
    Introduces a reinforcement learning approach to train agents that can recursively spawn and delegate sub-tasks to new copies of themselves, enabling a natural inference-time scaling algorithm.

6.  **SkillOS: Learning Skill Curation for Self-Evolving Agents**
    [http://arxiv.org/abs/2605.06614v1](http://arxiv.org/abs/2605.06614v1)
    Siru Ouyang et al.
    Addresses the "one-off problem solver" issue by training a skill curation policy that allows LLM agents to distill reusable skills from past interactions and dynamically select them for new tasks.

7.  **AI Co-Mathematician: Accelerating Mathematicians with Agentic AI**
    [http://arxiv.org/abs/2605.06651v1](http://arxiv.org/abs/2605.06651v1)
    Daniel Zheng et al.
    A workbench enabling mathematicians to interactively leverage AI agents for open-ended research, including ideation, literature search, and proof hypothesis generation.

8.  **Can RL Teach Long-Horizon Reasoning to LLMs? Expressiveness Is Key**
    [http://arxiv.org/abs/2605.06638v1](http://arxiv.org/abs/2605.06638v1)
    Tianle Wang et al.
    Introduces ScaleLogic, a synthetic reasoning framework, to show that RL’s ability to teach long-horizon reasoning to LLMs is fundamentally limited by the *expressiveness* of the policy being trained, not just the reward signal.

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

9.  **EMO: Pretraining Mixture of Experts for Emergent Modularity**
    [http://arxiv.org/abs/2605.06663v1](http://arxiv.org/abs/2605.06663v1)
    Ryan Wang et al.
    Proposes a new pretraining strategy for MoE models that encourages emergent modularity, allowing specific expert subsets to be activated for narrow capabilities (e.g., code, math) without needing the full model.

10. **UniPool: A Globally Shared Expert Pool for Mixture-of-Experts**
    [http://arxiv.org/abs/2605.06665v1](http://arxiv.org/abs/2605.06665v1)
    Minbin Huang et al.
    Challenges the per-layer expert convention in MoE models by introducing a globally shared expert pool, decoupling model depth from expert parameter count and improving parameter efficiency.

11. **SoftSAE: Dynamic Top-K Selection for Adaptive Sparse Autoencoders**
    [http://arxiv.org/abs/2605.06610v1](http://arxiv.org/abs/2605.06610v1)
    Jakub Stępień et al.
    Improves mechanistic interpretability by introducing a soft, dynamic top-k selection mechanism for Sparse Autoencoders, enabling more flexible and adaptive feature decomposition in LLMs and vision transformers.

12. **Beyond Negative Rollouts: Positive-Only Policy Optimization with Implicit Negative Gradients**
    [http://arxiv.org/abs/2605.06650v1](http://arxiv.org/abs/2605.06650v1)
    Mingwei Xu et al.
    Proposes a novel RLVR algorithm that achieves strong reasoning improvements *without* requiring explicit negative examples, stabilizing training by deriving implicit negative gradients from positive-only data.

#### 📊 Applications (domain-specific, multimodal, code generation)

13. **Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM Deep Research Agents**
    [http://arxiv.org/abs/2605.06635v1](http://arxiv.org/abs/2605.06635v1)
    Hailey Onweller et al.
    Systematically evaluates the reliability of citations in LLM-generated "deep research" reports, finding that current self-citation methods are insufficient and proposing a verification framework.

14. **AI CFD Scientist: Toward Open-Ended Computational Fluid Dynamics Discovery with Physics-Aware AI Agents**
    [http://arxiv.org/abs/2605.06607v1](http://arxiv.org/abs/2605.06607v1)
    Nithin Somasekharan et al.
    Extends the AI scientist loop to high-fidelity physics simulation (CFD), introducing a physics-aware agent that can propose, run, and analyze simulations, tackling the challenge of physical validity validation.

15. **Patch2Vuln: Agentic Reconstruction of Vulnerabilities from Linux Distribution Binary Patches**
    [http://arxiv.org/abs/2605.06601v1](http://arxiv.org/abs/2605.06601v1)
    Isaac David et al.
    Demonstrates the use of LLM-based agents to reconstruct vulnerability descriptions and proof-of-concept exploits directly from binary patches, a critical task for defensive security.

### Research Trend Signal
A clear and compelling trend is the **rise of meta-agentic learning**. Rather than hand-crafting agent behaviors, researchers are now training agents to *learn how to structure their own cognition*. This includes recursive delegation (Recursive Agent Optimization), self-curation of skills (SkillOS), and learning implicit credit assignment via strategic trajectory abstraction (StraTA). This shift moves beyond static tool-use prompts toward systems that can autonomously reorganize their reasoning and execution pipelines for novel tasks. Simultaneously, there is a healthy surge in **mechanistic and theoretical analysis**—papers are not just presenting new results but also rigorously investigating *why* phenomena like attention sinks, modularity in MoEs, and the effectiveness of sign-based optimizers occur, signaling a maturing of the field.

### Worth Deep Reading
1.  **Recursive Agent Optimization** — This paper opens the door to a fundamentally new class of scalable, self-organizing AI agents. The concept of an agent that can improve its own reasoning by spawning sub-agents is a significant departure from monolithic models and has profound implications for complex, long-horizon tasks.

2.  **The Structural Origin of Attention Sink** — For anyone puzzled by the ubiquitous attention sink phenomenon in LLMs, this paper provides the first clear, mechanistic, and mathematically grounded explanation. Understanding this origin is key to designing more efficient and interpretable attention mechanisms.

3.  **Cited but Not Verified** — As LLMs are increasingly used for research and report generation, the trustworthiness of their output becomes paramount. This paper directly tackles the critical problem of verifying source attribution, a foundational issue for reliable AI-assisted research.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*