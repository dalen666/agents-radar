# Hugging Face 热门模型日报 2026-05-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-06 04:36 UTC

---

好的，作为AI模型生态分析师，这是为您整理的2026年5月6日《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-05-06**

#### **今日速览**

本周 Hugging Face 生态呈现“多模态爆发”与“大厂旗舰对决”的态势。Google 的 **Gemma-4-31B-it** 以其海量下载量领跑，而 **Qwen3.6** 系列（包括27B和35B-MoE）则凭借出色的多模态能力紧随其后，形成了“双龙头”格局。DeepSeek 的 **V4 Pro** 版本延续了其在纯文本对话领域的统治力，下载量极高。此外，以 `unsloth` 和 `DavidAU` 为代表的社区量化与“去审查”（Uncensored）微调活动异常活跃，成为开源生态的重要驱动力。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   作者: deepseek-ai | 点赞: 3,589 | 下载: 631,499
   **一句话说明**：DeepSeek 旗舰级对话模型的最新版本，以极低的资源消耗实现了顶尖的对话和推理能力，是榜单的绝对关注焦点。

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
   作者: mistralai | 点赞: 271 | 下载: 15,024
   **一句话说明**：Mistral 推出的超大参数（128B）中杯模型，主打高性能与英法双语支持，是 Mistral 系列挑战更大规模模型的信号。

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
   作者: XiaomiMiMo | 点赞: 441 | 下载: 13,317
   **一句话说明**：小米推出的新一代长上下文Agent模型，强调在不牺牲性能的前提下支持更长的对话历史和复杂推理。

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
   作者: poolside | 点赞: 222 | 下载: 12,027
   **一句话说明**：专注于代码生成领域的模型，旨在更高效地完成代码补全和生成任务。

- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**
   作者: inclusionAI | 点赞: 417 | 下载: 1,062
   **一句话说明**：一个拥有1万亿参数的巨型MoE模型，代表了当前大模型超大规模化的前沿探索，尽管下载量不高，但技术上极具前瞻性。

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)**
   作者: inclusionAI | 点赞: 464 | 下载: 1,310
   **一句话说明**：Ling-2.6模型的“闪速”版本，旨在通过模型结构优化提供更快的推理速度，兼顾性能与效率。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   作者: SulphurAI | 点赞: 252 | 下载: 37,897
   **一句话说明**：一个新兴的文本到视频生成模型，标志着AI视频生成领域的竞争正在加剧。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
   作者: Qwen | 点赞: 1,132 | 下载: 1,458,973
   **一句话说明**：Qwen系列的多模态版本，能够同时处理图像和文本，是当前最受欢迎的开源多模态模型之一。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   作者: Qwen | 点赞: 1,631 | 下载: 2,884,820
   **一句话说明**：Qwen3.6的MoE变体，通过激活3B参数实现35B模型的性能，在效率与效果间取得了绝佳平衡，是本周最大黑马。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   作者: google | 点赞: 2,526 | 下载: 8,206,643
   **一句话说明**：Google的Gemma第四代多模态旗舰，下载量断层式领先，证明其强大的通用能力和社区认可度。

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
   作者: dealignai | 点赞: 1,476 | 下载: 195,870
   **一句话说明**：基于Gemma-4-31B的社区“破解”版，移除了安全限制（Abliterated），引发了关于AI安全与开源自由度的广泛讨论。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   作者: openai | 点赞: 1,302 | 下载: 141,317
   **一句话说明**：OpenAI 推出的用于识别和过滤隐私信息的专用模型，反映了行业对数据安全和合规性的重视。

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)**
   作者: ibm-granite | 点赞: 156 | 下载: 19,605
   **一句话说明**：IBM Granite系列的新一代高效语言模型，专注企业级应用，稳扎稳打。

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
   作者: AngelSlim | 点赞: 96 | 下载: 16,370
   **一句话说明**：一个极致量化的翻译模型（1.25bit），展示了在保持实用性的前提下压缩模型大小的极限探索。

- **[ibm-granite/granite-speech-4.1-2b](https://huggingface.co/ibm-granite/granite-speech-4.1-2b)**
   作者: ibm-granite | 点赞: 68 | 下载: 18,894
   **一句话说明**：IBM推出的专用语音识别模型，支持多语言，拓展了Granite生态在音频领域的应用。

- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**
   作者: ibm-granite | 点赞: 82 | 下载: 3,104
   **一句话说明**：专注于多语言文本嵌入的模型，适合用于语义搜索和RAG（检索增强生成）。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
   作者: unsloth | 点赞: 583 | 下载: 1,147,196
   **一句话说明**：知名社区`unsloth`对Qwen3.6-27B的GGUF量化版本，极大降低了部署门槛，推动了模型在个人设备上的普及。

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
   作者: unsloth | 点赞: 930 | 下载: 2,243,715
   **一句话说明**：Qwen3.6-35B-A3B的GGUF版，下载量巨大，说明小型化、易于部署的多模态模型是社区的核心诉求。

- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
   作者: DavidAU | 点赞: 73 | 下载: 88,913
   **一句话说明**：社区深度定制的“异端”版本，集去审查、代码增强与极致量化于一体，体现了开源社区的创造力和对模型潜能的极致挖掘。

#### **生态信号**

- **多模态模型格局初定**：Google的 **Gemma-4** 与阿里的 **Qwen3.6** 系列已形成双雄格局，前者重声望与综合性能，后者凭借MoE架构在效率上更胜一筹。
- **开源权重持续领先**：榜单头部模型均为开源权重，社区通过量化（GGUF）和微调（Uncensored）迅速将前沿能力“吃干榨净”，展现了开源生态强大的生命力和传播力。
- **“去审查”与“极致量化”是两大强信号**：`dealignai` 和 `DavidAU` 的作品受到热捧，表明社区对模型自由的追求和对本地化、低资源部署的无限渴望。这正推动AI从“能用”走向“好用”和“敢用”。

#### **值得探索**

1.  **[[Qwen/Qwen3.6-35B-A3B]](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   **理由**：在性能与效率上做到了近乎完美的平衡。如果你在寻找一个能本地运行又足够强大的多模态模型，这是首选。其MoE架构设计理念值得所有开发者学习。

2.  **[[unsloth/Qwen3.6-35B-A3B-GGUF]](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   **理由**：从下载量就能看出其价值。这是将`Qwen3.6-35B-A3B`落地的最佳实践，任何希望在个人电脑或边缘设备上运行最先进多模态模型的研究者和开发者，都应该从这里开始。

3.  **[[dealignai/Gemma-4-31B-JANG_4M-CRACK]](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
    *   **理由**：它不仅是模型，更是AI安全、开源伦理与技术监管的一次社会实验。对于关注AI治理、模型安全和对齐的研究者来说，研究这个“破解版”如何突破原始模型的限制，具有极高的学术和实践价值。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*