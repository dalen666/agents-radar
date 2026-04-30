# ArXiv AI Research Digest 2026-04-30

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-04-30 04:36 UTC

---

Here is a structured ArXiv AI Research Digest for April 30, 2026.

---

## ArXiv AI Research Digest: 2026-04-30

### 1. Today's Highlights

Today's submissions reveal a strong push toward **bridging the gap between small and large models** through novel distillation, reasoning, and curriculum-learning techniques, alongside significant progress in **democratizing complex model serving** via serverless and sparse architectures. A standout theme is the **formalization of diffusion LLMs as associative memories** and transformers as probabilistic models, offering new theoretical ground for understanding generative capabilities. In applications, the field is seeing a move toward robust, **training-free or zero-shot systems** for coding, change detection, and scientific discovery, while a notable cluster of papers examines the **evolution of linguistic typology** through the lens of machine learning and optimization.

### 2. Key Papers

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

1. **Turning the TIDE: Cross-Architecture Distillation for Diffusion Large Language Models**
   Link: http://arxiv.org/abs/2604.26951v1
   Authors: Gongbo Zhang, Wen Wang, Ye Tian et al.
   *Introduces a cross-architecture distillation method to transfer knowledge from autoregressive LLMs to diffusion LLMs, enabling smaller, more efficient models to achieve competitive performance.*

2. **Language Diffusion Models are Associative Memories Capable of Retrieving Unseen Data**
   Link: http://arxiv.org/abs/2604.26841v1
   Authors: Bao Pham, Mohammed J. Zaki, Luca Ambrogioni et al.
   *Provides a theoretical framework showing that uniform-based discrete diffusion models behave as associative memories with emergent creativity, offering a new way to assess memorization vs. generation.*

3. **Unifying Sparse Attention with Hierarchical Memory for Scalable Long-Context LLM Serving**
   Link: http://arxiv.org/abs/2604.26837v1
   Authors: Zihan Zhao, Baotong Lu, Shengjie Lin et al.
   *Proposes a system that integrates dynamic sparse attention with hierarchical KV-cache storage to efficiently serve long-context LLMs beyond GPU memory limits.*

4. **HalluCiteChecker: A Lightweight Toolkit for Hallucinated Citation Detection and Verification in the Era of AI Scientists**
   Link: http://arxiv.org/abs/2604.26835v1
   Authors: Yusuke Sakai, Hidetaka Kamigaito, Taro Watanabe
   *A practical toolkit for detecting and verifying hallucinated citations in scientific papers, addressing a critical quality issue in AI-assisted academic writing.*

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

5. **Select to Think: Unlocking SLM Potential with Local Sufficiency**
   Link: http://arxiv.org/abs/2604.26940v1
   Authors: Wenxuan Ye, Yangyang Zhang, Xueli An et al.
   *Presents a method that selectively invokes a larger LLM only at critical reasoning divergence points in an SLM's chain-of-thought, drastically reducing cost while maintaining accuracy.*

6. **Bian Que: An Agentic Framework with Flexible Skill Arrangement for Online System Operations**
   Link: http://arxiv.org/abs/2604.26805v1
   Authors: Bochao Liu, Zhipeng Qian, Yang Zhao et al.
   *Introduces an LLM-based agentic framework for large-scale online system operations (O&M), focusing on flexible skill arrangement to handle tasks like alert response and root cause analysis.*

7. **FutureWorld: A Live Environment for Training Predictive Agents with Real-World Outcome Rewards**
   Link: http://arxiv.org/abs/2604.26733v1
   Authors: Zhixin Han, Yanzhi Zhang, Chuyang Wei et al.
   *A novel interactive environment that trains LLM-based agents to make real-world future predictions, using actual outcomes as rewards for continual learning.*

8. **CurEvo: Curriculum-Guided Self-Evolution for Video Understanding**
   Link: http://arxiv.org/abs/2604.26707v1
   Authors: Guiyi Zeng, Junqing Yu, Yi-Ping Phoebe Chen et al.
   *Introduces a structured curriculum-learning approach for self-evolving video understanding models, improving autonomous learning without human annotations.*

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

9. **FaaSMoE: A Serverless Framework for Multi-Tenant Mixture-of-Experts Serving**
   Link: http://arxiv.org/abs/2604.26881v1
   Authors: Minghe Wang, Trever Schirmer, Mohammadreza Malekabbasi et al.
   *A serverless framework that efficiently serves Mixture-of-Experts models by dynamically managing expert memory, bridging the gap between activated and provisioned resources.*

10. **Accelerating RL Post-Training Rollouts via System-Integrated Speculative Decoding**
    Link: http://arxiv.org/abs/2604.26779v1
    Authors: Hayate Iso, Tiyasa Mitra, Sudipta Mondal et al.
    *Addresses the rollout bottleneck in RL post-training for language models by integrating speculative decoding into the generation loop, significantly accelerating training.*

11. **Random Cloud: Finding Minimal Neural Architectures Without Training**
    Link: http://arxiv.org/abs/2604.26830v1
    Authors: Javier Gil Blázquez
    *Proposes a training-free neural architecture search method that uses stochastic exploration to discover minimal, efficient topologies for feedforward networks.*

12. **ClassEval-Pro: A Cross-Domain Benchmark for Class-Level Code Generation**
    Link: http://arxiv.org/abs/2604.26923v1
    Authors: Yeheng Chen, Chaoxiang Xie, Yuling Shi et al.
    *Introduces a new benchmark for evaluating LLMs on compositional code creation (building a complete class from a specification), filling a gap between function-level and repository-level coding tasks.*

#### 📊 Applications (domain-specific, multimodal, code generation)

13. **Domain-Adapted Small Language Models for Reliable Clinical Triage**
    Link: http://arxiv.org/abs/2604.26766v1
    Authors: Manar Aljohani, Brandon Ho, Kenneth McKinley et al.
    *Demonstrates that domain-adapted SLMs can provide reliable and consistent emergency severity index (ESI) triage, offering a practical, privacy-preserving alternative to large models in clinical settings.*

14. **A self-evolving agent for explainable diagnosis of DFT-experiment band-gap mismatch**
    Link: http://arxiv.org/abs/2604.26703v1
    Authors: Yue Li, Bijun Tang
    *An AI agent that autonomously diagnoses and explains discrepancies between Density Functional Theory (DFT) predictions and experimental band-gap measurements, accelerating materials science research.*

15. **ViCrop-Det: Spatial Attention Entropy Guided Cropping for Training-Free Small-Object Detection**
    Link: http://arxiv.org/abs/2604.26806v1
    Authors: Hui Wang, Hongze Li, Wei Chen et al.
    *A training-free method that uses attention entropy to guide cropping for small-object detection, improving performance on existing vision transformers without fine-tuning.*

### 3. Research Trend Signal

A subtle but significant research direction visible in today's submissions is the **convergence of linguistic typology with optimization and machine learning**. Two papers (Papers 19 & 40) explore the frequency and evolution of word orders (e.g., SOV vs. SVO) from computational perspectives—one using curriculum learning to find what linguistic features are "easy" for models to learn, and the other using swap-distance minimization to explain the prevalence of certain grammatical structures. This suggests a growing interest in using ML not just to process language, but to understand its fundamental structural properties, potentially leading to architectures that are more aligned with human cognitive biases. Simultaneously, the focus on **data efficiency and "zero-training" methods** (Papers 8, 26, 35, 50) indicates a community-wide shift toward techniques that require less compute and data, a necessary evolution for sustainability and broader accessibility.

### 4. Worth Deep Reading

1. **Language Diffusion Models are Associative Memories Capable of Retrieving Unseen Data** (http://arxiv.org/abs/2604.26841v1): This paper offers a crucial theoretical lens for understanding the capabilities and failure modes of diffusion-based LLMs. The connection to associative memories provides a clear framework for analyzing memorization, creativity, and data leakage, which is highly relevant to both safety and performance.

2. **Unifying Sparse Attention with Hierarchical Memory for Scalable Long-Context LLM Serving** (http://arxiv.org/abs/2604.26837v1): As the demand for long-context reasoning grows, this paper’s systems-level solution to the KV-cache bottleneck is of high practical importance. It tackles a core infrastructure challenge, making long-context LLM applications more feasible and cost-effective.

3. **A self-evolving agent for explainable diagnosis of DFT-experiment band-gap mismatch** (http://arxiv.org/abs/2604.26703v1): This paper is a compelling example of how LLM-based agents can be applied to high-impact scientific discovery. Its focus on *explainable* diagnosis in a domain (materials science) where errors are expensive and theory is complex marks a mature and valuable application of AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*