# ArXiv AI Research Digest 2026-05-05

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-05 04:19 UTC

---

# ArXiv AI Research Digest — 2026-05-04

## Today's Highlights

This week's batch reveals a strong emphasis on **adaptive inference** across multiple fronts: speculative decoding with dynamic speculation lengths, diffusion planners that adapt to changing safety constraints in real time, and task-aware compression that integrates fine-tuning with model reduction rather than treating them as separate stages. **Multi-agent safety and governance** emerges as a critical theme, with papers addressing misalignment contagion in LM teams and policy-aware frameworks for human-AI task allocation. In **medical AI**, we see a convergence of vision-language foundation models for ophthalmology, hierarchical learning-to-defer systems, and synthetic PET imaging for NSCLC histology—indicating that healthcare remains a dominant application frontier. Finally, **code and software engineering** papers scrutinize AI-generated code quality, revealing that LLM-produced software carries significant technical debt despite functional correctness.

## Key Papers

### 🧠 Large Language Models

**SpecKV: Adaptive Speculative Decoding with Compression-Aware Gamma Selection**
Shikhar Shukla
http://arxiv.org/abs/2605.02888v1
Introduces adaptive speculation length selection for speculative decoding, moving beyond fixed γ to improve LLM inference efficiency without sacrificing quality.

**Mitigating Misalignment Contagion by Steering with Implicit Traits**
Maria Chang, Ronny Luss, Miao Lui et al.
http://arxiv.org/abs/2605.02751v1
Addresses the under-explored risk of misaligned behavior spreading across language models in multi-agent settings, proposing implicit trait steering as a mitigation strategy.

**When Audio-Language Models Fail to Leverage Multimodal Context for Dysarthric Speech Recognition**
Pehuén Moure, Niclas Pokel, Bilal Bounajma et al.
http://arxiv.org/abs/2605.02782v1
Demonstrates that current audio-language models struggle to utilize clinical context for atypical speech, highlighting a critical gap in inclusive ASR systems.

### 🤖 Agents & Reasoning

**SCPRM: A Schema-aware Cumulative Process Reward Model for Knowledge Graph Question Answering**
Jiujiu Chen, Yazheng Liu, Sihong Xie et al.
http://arxiv.org/abs/2605.02819v1
Proposes a process reward model that addresses the risk compensation effect where incorrect reasoning steps are masked by later correct ones, improving intermediate step evaluation for KGQA.

**Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces**
Chenchen Zhang
http://arxiv.org/abs/2605.02801v1
Extends RL optimization beyond individual actions to coordination patterns—delegation, communication, aggregation—in LLM-based multi-agent teams.

**U-Define: Designing User Workflows for Hard and Soft Constraints in LLM-Based Planning**
Christine P Lee, Xinyu Jessica Wang, Aws Albarghouthi et al.
http://arxiv.org/abs/2605.02765v1
Explores how users can effectively apply both rigid and flexible constraints in LLM-based planning systems, identifying key usability challenges for end-user control.

**A decoupled diffusion planner that adapts to changing cost limits by using cost-conditioned generation for safety and reward gradients for performance**
Rufeng Chen, Zhaofan Zhang, Zhejiang Yang et al.
http://arxiv.org/abs/2605.02777v1
Presents a diffusion-based safe RL planner that decouples safety conditioning from reward optimization, enabling adaptation to varying safety budgets at deployment.

### 🔧 Methods & Frameworks

**Compress Then Adapt? No, Do It Together via Task-aware Union of Subspaces**
Jingze Ge, Yun Liu, Xue Geng et al.
http://arxiv.org/abs/2605.02829v1
Demonstrates that sequential compression-then-fine-tuning misaligns objectives; proposes joint optimization via task-aware subspace unions for better downstream performance.

**A Closed-Form Persistence-Landmark Pipeline for Certified Point-Cloud and Graph Classification**
Sushovan Majhi, Atish Mitra, Žiga Virk et al.
http://arxiv.org/abs/2605.02836v1
Introduces PLACE, a closed-form topological data analysis pipeline with certified guarantees—margin-based risk bounds, descriptor selection, and perturbation robustness.

**Bolek: A Multimodal Language Model for Molecular Reasoning**
Frederic Grabowski, Jacek Szczerbiński, Maciej Jaśkowski et al.
http://arxiv.org/abs/2605.02745v1
Combines graph neural networks and language models for auditable molecular property prediction, providing natural language explanations grounded in molecular structure.

**Federated Reinforcement Learning for Efficient Mobile Crowdsensing under Incomplete Information**
Sumedh J. Dongare, Patrick Weber, Andrea Ortiz et al.
http://arxiv.org/abs/2605.02705v1
Applies federated RL to mobile crowdsensing where participants and platform have asymmetric information, optimizing task allocation without sharing raw sensor data.

### 📊 Applications

**FlexSQL: Flexible Exploration and Execution Make Better Text-to-SQL Agents**
Quang Hieu Pham, Yang He, Ping Nie et al.
http://arxiv.org/abs/2605.02815v1
Moves beyond fixed-pipeline text-to-SQL by enabling iterative schema exploration and data-driven decision making, improving accuracy on complex analytical databases.

**AI-Generated Smells: An Analysis of Code and Architecture in LLM and Agent-Driven Development**
Yuecai Zhu, Nikolaos Tsantalis, Peter C. Rigby
http://arxiv.org/abs/2605.02741v1
Conducts a systematic audit of technical debt in AI-generated code, revealing that functional correctness masks significant maintainability issues and architectural smells.

**Publisher-Ophtha: An open resource for training ophthalmology vision-language models on scientific literature**
Verena Jasmin Hallitschke, Carsten Eickhoff, Philipp Berens
http://arxiv.org/abs/2605.02720v1
Releases a large-scale hierarchical dataset of 102K ophthalmological image-caption pairs from open-access literature to support vision-language model development.

**AIs and Humans with Agency**
David Mumford
http://arxiv.org/abs/2605.02810v1
Philosophical examination comparing human and AI agency development, arguing that current LLM architectures face fundamental obstacles to genuine agency that require new architectural approaches.

## Research Trend Signal

A notable emergent direction is **adaptive inference under uncertainty**: multiple papers tackle the problem of systems that must adjust their behavior dynamically—whether through speculative decoding with variable-length drafts, diffusion planners responding to changing safety budgets, or task-aware compression that co-optimizes for downstream objectives. This reflects a maturation from static optimization to systems designed for deployment realities where constraints shift. **Multi-agent safety** is another rising cluster: as LLM agents transition from isolated tool users to coordinated teams, researchers are grappling with emergent risks like misalignment contagion and the need for orchestration-level RL. Finally, **accountability in AI-generated artifacts**—code, plans, molecular predictions—is receiving scrutiny, with papers explicitly auditing technical debt and developing auditable reasoning pipelines. The convergence suggests the field is moving beyond pure capability scaling toward robustness, governance, and long-term maintainability.

## Worth Deep Reading

1. **SpecKV: Adaptive Speculative Decoding with Compression-Aware Gamma Selection** — A practical contribution addressing a critical inference bottleneck (speculation length tuning) with potential for immediate deployment impact. The compression-aware formulation is novel and likely to influence future LLM serving infrastructure.

2. **Mitigating Misalignment Contagion by Steering with Implicit Traits** — Tackles a genuinely under-explored problem with growing practical urgency as multi-agent LM systems proliferate. The implicit trait steering approach offers a principled alternative to explicit rule-based guardrails.

3. **AI-Generated Smells: An Analysis of Code and Architecture in LLM and Agent-Driven Development** — Groundbreaking empirical work that challenges the narrative of LLM code generation quality by systematically documenting technical debt. Essential reading for anyone deploying AI code assistants in production environments.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*