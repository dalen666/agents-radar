# ArXiv AI Research Digest 2026-05-07

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-07 04:37 UTC

---

Here is the structured ArXiv AI Research Digest for 2026-05-07.

---

### 1. Today's Highlights

Today's submissions reveal a strong focus on the mechanistic understanding and control of generative models, with significant work on both the internal representations of LLMs and the physical-world capabilities of agents. A surprising cluster of papers demonstrates how AI systems like Grok can *discover* rigorous mathematical theorems, signaling a shift from AI as a user of math to AI as a co-creator of it. In the agentic space, the trend is toward improving efficiency, whether through context orchestration for long-horizon tasks or by controlling reinforcement learning reward signals to maximize learning from limited data. Finally, several papers tackle the foundational problem of efficient inference, from analyzing outlier tokens in diffusion transformers to proving impossibility theorems about long-context modeling.

### 2. Key Papers

#### 🧠 Large Language Models

- **Implicit Representations of Grammaticality in Language Models** ([2605.05197](http://arxiv.org/abs/2605.05197v1))
  - *Yingshan Susan Wang, Linlu Qiu, Zhaofeng Wu et al.*
  - This paper investigates how pretrained LMs, despite being optimized for likelihood, are able to learn and represent the distinct human concept of grammaticality, offering insights into the core mechanisms of linguistic competence in these models.

- **The First Token Knows: Single-Decode Confidence for Hallucination Detection** ([2605.05166](http://arxiv.org/abs/2605.05166v1))
  - *Mina Gabriel*
  - Proposes a highly efficient method for detecting hallucinations by analyzing the confidence of only the first decoded token, potentially replacing costly multi-sample consistency checks.

- **The Impossibility Triangle of Long-Context Modeling** ([2605.05066](http://arxiv.org/abs/2605.05066v1))
  - *Yan Zhou*
  - Formally proves a fundamental trade-off proving that no model can simultaneously achieve per-step Efficiency, state Compactness, and perfect historical Recall, providing a critical theoretical bound for long-context architecture design.

- **The Pinocchio Dimension: Phenomenality of Experience as the Primary Axis of LLM Psychometric Differences** ([2605.05080](http://arxiv.org/abs/2605.05080v1))
  - *Hubert Plisiecki, Sabina Siudaj, Kacper Dudzic et al.*
  - Administers 45 psychometric tests to 50 LLMs and finds that the primary axis of variation between models is their tendency to ascribe "phenomenal experience" (e.g., consciousness) to themselves, a novel and provocative finding for model evaluation.

- **SoK: Robustness in Large Language Models against Jailbreak Attacks** ([2605.05058](http://arxiv.org/abs/2605.05058v1))
  - *Feiyue Xu, Hongsheng Hu, Chaoxiang He et al.*
  - A comprehensive systematization of knowledge on jailbreak attacks, offering a structured taxonomy of methods and defenses, which is crucial for the safety and reliable deployment of LLMs.

#### 🤖 Agents & Reasoning

- **LongSeeker: Elastic Context Orchestration for Long-Horizon Search Agents** ([2605.05191](http://arxiv.org/abs/2605.05191v1))
  - *Yijun Lu, Rui Ye, Yuwen Du et al.*
  - Introduces a novel framework for long-horizon web agents that adaptively manages its growing working context, reducing both costs and error rates compared to naive accumulation of all intermediate data.

- **Executable World Models for ARC-AGI-3 in the Era of Coding Agents** ([2605.05138](http://arxiv.org/abs/2605.05138v1))
  - *Sergey Rodionov*
  - Evaluates an agentic system that builds executable Python world models to solve ARC-AGI-3 tasks, using simplicity bias and planning through the model to achieve abstract reasoning.

- **LineRides: Line-Guided Reinforcement Learning for Bicycle Robot Stunts** ([2605.05110](http://arxiv.org/abs/2605.05110v1))
  - *Seungeun Rho, Shamel Fahmi, Jeonghwan Kim et al.*
  - Presents a novel RL framework that uses simple 2D target lines to guide a physical bicycle robot to perform complex stunts, avoiding the need for expensive reference motion data.

#### 🔧 Methods & Frameworks

- **Estimating the expected output of wide random MLPs more efficiently than sampling** ([2605.05179](http://arxiv.org/abs/2605.05179v1))
  - *Wilson Wu, Victor Lecomte, Michael Winer et al.*
  - Develops an analytical method to compute the expected output of an MLP over Gaussian inputs without sampling, providing a powerful new tool for analyzing network behavior at initialization.

- **Low-Cost Black-Box Detection of LLM Hallucinations via Dynamical System Prediction** ([2605.05134](http://arxiv.org/abs/2605.05134v1))
  - *Dan Wilson, Mohamed Akrout*
  - Treats language generation as a dynamical system and uses a "shadow trajectory" to detect hallucinations in a black-box manner without needing external knowledge, offering a novel and efficient detection paradigm.

- **Rollout Pass-Rate Control: Steering Binary-Reward RL Toward Its Most Informative Regime** ([2605.05112](http://arxiv.org/abs/2605.05112v1)
  - *Tianshu Zhu, Wenyu Zhang, Xiaoying Zuo et al.*
  - Significantly improves the efficiency of agentic RL (e.g., for SWE-bench) by dynamically controlling the pass-rate of sampled rollouts to ensure each rollout provides a strong, discriminative learning signal.

- **Continual Knowledge Updating in LLM Systems: Learning Through Multi-Timescale Memory Dynamics** ([2605.05097](http://arxiv.org/abs/2605.05097v1))
  - *Andreas Pattichis, Constantine Dovrolis*
  - Proposes a biologically-inspired memory system for LLMs that uses coupled short-term and long-term stores, enabling the model to continuously adapt to new information after deployment without catastrophic forgetting.

#### 📊 Applications

- **Aes3D: Aesthetic Assessment in 3D Gaussian Splatting** ([2605.05155](http://arxiv.org/abs/2605.05155v1))
  - *Chuanzhi Xu, Boyu Wei, Haoxian Zhou et al.*
  - Introduces the first dedicated method for automatically assessing the aesthetic quality of 3D scenes rendered with 3D Gaussian Splatting, a key capability for content creation and immersive media.

- **Think-Aloud Reshapes Automated Cognitive Model Discovery Beyond Behavior** ([2605.05091](http://arxiv.org/abs/2605.05091v1))
  - *Hanbo Xie, Akshay K. Jagadish, Lan Pan et al.*
  - Demonstrates that using "think-aloud" verbal traces alongside behavioral data significantly improves the discovery of more accurate and robust cognitive models, a powerful application of LLMs for scientific discovery.

- **Driver-WM: A Driver-Centric Traffic-Conditioned Latent World Model for In-Cabin Dynamics Rollout** ([2605.05092](http://arxiv.org/abs/2605.05092v1)
  - *Haozhuang Chi, Daosheng Qiu, Hao Su et al.*
  - Develops a world model that predicts *driver* behavior (e.g., gaze, steering) in response to traffic, going beyond traditional environment-only world models for safer autonomous driving systems.

### 3. Research Trend Signal

A compelling trend observable today is the **merging of formal mathematics and AI**. The "Grokability" papers ([2605.05193](http://arxiv.org/abs/2605.05193v1), [2605.05192](http://arxiv.org/abs/2605.05192v1)) are not merely about using AI to *check* proofs, but about using conversational AI to *discover* new theorems and sharpened inequalities, with human verification confirming the results. This suggests a future where LLMs act as an "intuition engine" for mathematicians, proposing novel conjectures that are then rigorously examined. Complementing this, the "Impossibility Triangle" paper ([2605.05066](http://arxiv.org/abs/2605.05066v1)) injects a rare and necessary theoretical backbone into the empirically-driven field of long-context models, proving a fundamental limitation that all future architectures must contend with. This dual signal suggests the community is maturing, balancing powerful empirical advances with deeper theoretical and even mathematical rigor.

### 4. Worth Deep Reading

1.  **Low-Cost Black-Box Detection of LLM Hallucinations via Dynamical System Prediction** ([2605.05134](http://arxiv.org/abs/2605.05134v1))
    - *Reasoning:* This paper proposes a radically different approach to a critical problem. Framing text generation as a dynamical system and detecting anomalies via "shadow trajectories" is elegant, mathematically grounded, and potentially more efficient than current sampling-based or retrieval-augmented methods. Its robustness for black-box models makes it highly practical.

2.  **Executable World Models for ARC-AGI-3 in the Era of Coding Agents** ([2605.05138](http://arxiv.org/abs/2605.05138v1))
    - *Reasoning:* The ARC-AGI benchmark is a key test for non-linguistic reasoning. This paper's approach—using coding agents to build, verify, and *refactor* an explicit world model—directly addresses the core challenges of generalization and simplicity bias. It provides a concrete case study for how to build more robust and generalizable AI agents.

3.  **The Impossibility Triangle of Long-Context Modeling** ([2605.05066](http://arxiv.org/abs/2605.05066v1))
    - *Reasoning:* This paper provides a crucial theoretical result for a booming area of research. The proven trade-off between Efficiency, Compactness, and Recall is a fundamental constraint that should influence the design of all future long-context models (Transformers, State Space Models, etc.). It is essential reading for anyone working on long-context architectures.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*