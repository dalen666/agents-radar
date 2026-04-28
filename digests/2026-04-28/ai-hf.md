# Hugging Face 热门模型日报 2026-04-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-28 04:37 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的2026年4月28日数据生成的《Hugging Face热门模型日报》。

---

## Hugging Face 热门模型日报 | 2026-04-28

### 今日速览

社区热度高度集中在以**Qwen 3.6**和**DeepSeek V4**为代表的强大基础模型家族上，两者在总点赞数上形成“双雄争霸”格局。本周最显著的信号是**MoE（混合专家）架构**和**多模态（视觉-语言）模型**成为绝对主流，几乎所有头部新模型都具备图像理解能力。同时，围绕基础模型进行的**量化（GGUF）**和**社区微调（去审查、专有蒸馏）**活动异常活跃，显示出开源社区强大的二次开发活力。此外，**Google Gemma-4 系列**与**腾讯 Hy 系列**的发布也占据了重要生态位。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,056 | ⬇️ 137,784
  - 一句话说明: DeepSeek V4系列的旗舰聊天模型，凭借顶尖推理能力和强大的社区口碑，本周点赞数断层式领先。

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 👍 1,103 | ⬇️ 443,440
  - 一句话说明: Moonshot AI的最新一代多模态大模型，展现了强劲的文本与图像理解能力，下载量极高。

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
  - 作者: zai-org | 👍 1,539 | ⬇️ 237,450
  - 一句话说明: GLM系列的最新版本，采用MoE-DSA架构，在性能与效率间取得平衡，深受开发者信赖。

- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**
  - 作者: MiniMaxAI | 👍 1,076 | ⬇️ 492,091
  - 一句话说明: MiniMax推出的新一代通用大模型，以长上下文和高性能对话能力吸引了大量关注。

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 150 | ⬇️ 0
  - 一句话说明: 小米出品的Agent导向大模型，专注于长上下文和工具调用，展示了硬件厂商在AI Agent领域的布局。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 930 | ⬇️ 399,489
  - 一句话说明: Qwen 3.6系列的明星模型，强大的多模态理解和对话能力使其成为社区微调和应用的首选基础模型之一。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,464 | ⬇️ 1,354,032
  - 一句话说明: Qwen 3.6系列的MoE版本，激活参数仅3B但总参达35B，实现了极致的推理效率，下载量在同类中最高。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,397 | ⬇️ 6,306,108
  - 一句话说明: Google最新开源的多模态大模型，凭借其极高下载量证明其在社区中的霸主地位，是顶级的多模态对话引擎。

- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**
  - 作者: tencent | 👍 616 | ⬇️ 3,048
  - 一句话说明: 腾讯推出的世界模型，能从单张图片生成3D场景，代表了多模态生成的前沿方向。

- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**
  - 作者: baidu | 👍 578 | ⬇️ 8,242
  - 一句话说明: 百度完全开源的8B参数文本到图像模型，遵循Apache-2.0许可，标志着主流大厂在图像生成领域的开源竞争加剧。

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
  - 作者: inclusionAI | 👍 205 | ⬇️ 448
  - 一句话说明: 一款全新的“any-to-any”通用多模态模型，结合Diffusers和Transformers，探索统一的生成范式。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 948 | ⬇️ 47,488
  - 一句话说明: OpenAI发布的专用敏感信息识别模型（Token分类），对隐私合规场景意义重大，显示出闭源厂商也开始提供实用开源工具。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 👍 456 | ⬇️ 636,345
  - 一句话说明: Unsloth对Qwen3.6-27B的GGUF量化版，极大降低了本地部署门槛，是社区量化活动的代表作。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 481 | ⬇️ 525,932
  - 一句话说明: 社区对Qwen MoE模型进行的“去审查”微调版本，下载量极高，反映了用户对模型开放性控制的强烈需求。

- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**
  - 作者: OBLITERATUS | 👍 526 | ⬇️ 127,538
  - 一句话说明: 对Gemma-4的“去审查”微调版，紧跟开源大模型去审查的潮流。

- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**
  - 作者: hesamation | 👍 200 | ⬇️ 129,164
  - 一句话说明: 将Claude的推理能力蒸馏到Qwen MoE模型上的尝试，展示了社区在模型能力迁移上的创新。

### 生态信号

**模型家族双雄割据，MoE与多模态成为标配。** 本周榜单清晰呈现了**Qwen 3.6**和**DeepSeek V4**两大阵营的统治力，两者合计贡献了榜单近半数的点赞量。这两个系列的成功，证明了**MoE架构**（如Qwen3.6-35B-A3B）在效率上的巨大优势，以及**原生多模态能力**（尤其是视觉理解）已成为新一代大模型的“标配”。

**开源权重与闭源服务并行，社区量化生态繁荣。** 以Google、腾讯、百度为代表的大厂继续投入开源权重（如Gemma-4、ERNIE-Image），而DeepSeek、Moonshot等则提供强权重+闭源服务的混合模式。同时，以**Unsloth**、**HauhauCS**为代表的社区力量，通过GGUF量化和LoRA微调（特别是去审查和蒸馏），极大地丰富了基础模型的应用生态，使模型变得“触手可及”。

### 值得探索

1.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：如果你想体验**最前沿的MoE架构**，这个模型是首选。它完美平衡了顶级多模态能力与推理效率，是构建复杂应用或进行资源高效部署的理想基座。

2.  **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**：对于关注**AI生成前沿（3D/世界模型）** 的研究者和开发者，这是一个极佳的探索对象。它代表了从“理解画面”到“生成世界”的范式跃迁。

3.  **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**：对**模型蒸馏和推理增强**感兴趣的用户可重点关注此模型。它展示了通过从顶级闭源模型（Claude）中蒸馏能力来增强开源模型的具体实践路径，具有很高的研究价值。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*