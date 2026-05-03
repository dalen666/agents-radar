# Hugging Face 热门模型日报 2026-05-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-03 04:43 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 (2026-05-03)

#### 今日速览

本周 Hugging Face 生态呈现“巨头领跑、多模态爆发、量化微调活跃”的格局。**Google Gemma-4-31B-it** 以惊人下载量及超高点赞数霸榜，成为社区最瞩目的开源模型。**DeepSeek V4** 家族（Pro和Flash版本）表现强劲，稳居开源大模型第一梯队。**Qwen3.6** 系列（尤其是MoE版本及其量化版）在多模态与本地部署领域多点开花，生态最为繁荣。此外，**openai** 和 **nvidia** 分别发布了聚焦隐私过滤和多模态推理的专用模型，展现了头部厂商在垂直场景的投入。

---

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 3,423 | 下载: 381,587
  - 说明：DeepSeek 第四代旗舰版，凭借强大的对话能力和推理性能，稳居本周人气冠军。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 点赞: 921 | 下载: 345,885
  - 说明：DeepSeek V4 的轻量级版本，在保持高性能的同时大幅提升推理速度，是部署场景的首选。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 点赞: 1,575 | 下载: 2,397,446
  - 说明：Qwen3.6 系列的 MoE 模型，总参数量 35B，激活参数仅 3B，实现了性能与效率的极致平衡，下载量惊人。

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
  - 作者: mistralai | 点赞: 224 | 下载: 8,492
  - 说明：Mistral 中端旗舰，128B 参数的多语言模型，专注于提升法语能力，并支持 vLLM 高效部署。

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)**
  - 作者: ibm-granite | 点赞: 133 | 下载: 16,079
  - 说明：IBM Granite 4.1 系列的语言模型，8B 参数，专注于企业级文本生成任务。

- **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)**
  - 作者: ibm-granite | 点赞: 80 | 下载: 3,072
  - 说明：Granite 4.1 系列的大号版本，30B 参数，性能和容量更强。

- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**
  - 作者: inclusionAI | 点赞: 102 | 下载: 535
  - 说明：千亿级参数（1T）大模型，代表业界向超大规模模型探索的前沿方向。

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
  - 作者: poolside | 点赞: 192 | 下载: 7,573
  - 说明：Poolside 推出的代码生成模型，定位为“XS”尺寸，专为高效软件开发场景设计。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 2,481 | 下载: 7,776,034
  - 说明：Google 最新的开源多模态模型，支持图像、文本输入，在视觉对话和指令遵循方面表现出色，是本周下载量冠军。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 点赞: 1,083 | 下载: 1,070,778
  - 说明：Qwen3.6 系列的多模态标准版，27B 参数，兼顾视觉理解与文本生成，社区关注度极高。

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 点赞: 1,184 | 下载: 699,348
  - 说明：Kimi 的最新多模态模型，引入了压缩张量技术，在保持性能的同时优化了模型体积。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  - 作者: nvidia | 点赞: 199 | 下载: 37,418
  - 说明：NVIDIA 推出的“全能型”多模态模型（Any-to-Any），30B 总参/3B 激活的 MoE 架构，专为复杂推理场景设计。

- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)**
  - 作者: XiaomiMiMo | 点赞: 193 | 下载: 28,323
  - 说明：小米的旗舰多模态模型，融合视觉、语言与音频，展示了对多种模态的统一理解能力。

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**
  - 作者: sensenova | 点赞: 120 | 下载: 1,308
  - 说明：商汤科技发布的多模态 MoT（Mixture of Tokens）模型，8B 参数，以创新架构探索新的效率边界。

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 点赞: 74 | 下载: 859
  - 说明：专注于二次元动漫风格生成的文生图模型，符合社区对特定垂直美学内容的需求。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 点赞: 1,212 | 下载: 99,399
  - 说明：OpenAI 发布的首个隐私过滤模型（Token 分类任务），旨在识别和过滤敏感信息，是本周最受关注的“防守型”模型。

- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**
  - 作者: ibm-granite | 点赞: 68 | 下载: 1,598
  - 说明：IBM 的新一代多语言嵌入模型，97M 参数，优化了向量检索效果，适合 RAG 应用。

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 点赞: 78 | 下载: 487
  - 说明：1.25-bit 极端量化的翻译模型，展示了在极低精度下执行机器翻译的可能性与极限。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
  - 作者: dealignai | 点赞: 1,444 | 下载: 199,500
  - 说明：基于 Gemma-4-31B 的社区“越狱”微调版（Abliterated），旨在移除模型安全限制，引发社区对 AI 安全的广泛讨论。

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 265 | 下载: 303,358
  - 说明：社区对 Qwen3.6-27B 进行“无审查”及激进微调的 GGUF 版本，迎合了部分用户对无约束模型的需求。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 531 | 下载: 766,075
  - 说明：上述无审查理念在 Qwen3.6 MoE 版本上的延续，因模型本身高性价比而更受欢迎。

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 点赞: 545 | 下载: 983,535
  - 说明：由 Unsloth 社区提供的 Qwen3.6-27B 的 GGUF 量化版，极大降低了本地部署门槛，是个人玩家首选。

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 点赞: 895 | 下载: 2,001,316
  - 说明：Qwen3.6 MoE 模型的 GGUF 版本，下载量远超原版，证明了社区对易部署的高效模型有巨大需求。

- **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)**
  - 作者: unsloth | 点赞: 92 | 下载: 37,663
  - 说明：NVIDIA 多模态模型的社区量化版，使得高端模型能够在消费级硬件上运行。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)**
  - 作者: nvidia | 点赞: 71 | 下载: 180,012
  - 说明：NVIDIA 官方使用 NVFP4 格式量化的多模态模型，专为其自家硬件生态系统优化。

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**
  - 作者: z-lab | 点赞: 206 | 下载: 17,016
  - 说明：基于 Qwen3.6 的 DFlash 微调版，旨在通过动态推理技术提升模型在特定任务上的效率。

---

### 生态信号

**1. 模型家族“寡头化”趋势明显**：本周榜单被 **Qwen**（及其社区变体 9 次上榜）、**DeepSeek**（2 次）、**Gemma**（2 次）和 **Granite**（3 次）等少数几个模型家族瓜分。这表明社区资源高度集中在几个公认的“基座模型”上，新兴模型若想突围，必须在架构创新或垂直场景上做出显著差异。

**2. 开源权重的“军备竞赛”全面升级**：Google 和 NVIDIA 等巨头积极拥抱开源，以 Gemma-4 和 Nemotron-3 为代表的超大规模模型（30B+）完全开放权重，与闭源 API 形成直接竞争。这预示着开源模型的能力上限正被快速推向新的高度。

**3. MoE 与量化是社区微调的主旋律**：Qwen3.6-35B-A3B 及其 GGUF 版本的高下载量揭示了社区的核心诉求：通过 **MoE** 架构实现高性能（总参数大），通过 **GGUF** 量化实现低门槛部署。Unsloth 等社区在模型“可及性”上扮演了关键角色，甚至使量化版本的下载量远超原版模型。

---

### 值得探索

1.  **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**：它是目前社区“越狱”文化的代表案例。研究该模型可以深入了解当前最强开源模型（Gemma-4）的安全漏洞，对AI安全和对齐研究具有重要的参考价值。

2.  **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**：这是个人开发者体验“大模型”的最佳入口之一。MoE 架构仅需少量显存即可调用35B总参模型的强大能力，GGUF格式使其在消费级显卡上流畅运行，是学习和部署前沿MoE模型的首选。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*