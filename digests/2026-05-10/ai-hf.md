# Hugging Face 热门模型日报 2026-05-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-10 04:49 UTC

---

好的，这是基于您提供的 2026-05-10 数据生成的《Hugging Face 热门模型日报》。

---

## Hugging Face 热门模型日报 | 2026-05-10

### 📈 今日速览

今日 Hugging Face 热榜竞争激烈，**中国大模型军团**表现抢眼：阿里通义千问（Qwen3.6）、幻方深度求索（DeepSeek-V4）和月之暗面（Kimi-K2.6）均有多款模型霸榜，展示了强大的开源生态与社区影响力。同时，**谷歌 Gemma-4 系列**凭借超大规模下载量（310亿参数版本下载近900万次）证明了其作为基础模型的受欢迎程度。**多模态**是本日最显著的趋势，从图像到视频、从文本到语音，几乎所有热门模型都具备了跨模态能力。此外，社区涌现了大量基于 Qwen3.6 的微调与量化版本（如 GGUF），表明高性能模型的落地部署和二次开发需求旺盛。

### 🏆 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

-   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    -   作者: deepseek-ai | 点赞: 3,789 | 下载: 1,167,697
    -   一句话：DeepSeek 最新旗舰版对话模型，凭借顶尖的性能和极具竞争力的权重开放策略，成为本周绝对的现象级模型。

-   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    -   作者: deepseek-ai | 点赞: 1,011 | 下载: 957,448
    -   一句话：V4 系列的高速推理版本，在保持性能的同时优化了推理速度，适合对延迟敏感的在线服务场景。

-   **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
    -   作者: Zyphra | 点赞: 332 | 下载: 23,620
    -   一句话：ZYA 系列首个 8B 模型，具备科研背景（附 arXiv 论文），因其透明度和 Apache-2.0 许可证受到关注。

-   **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
    -   作者: XiaomiMiMo | 点赞: 500 | 下载: 31,447
    -   一句话：小米推出的 MoE 架构长上下文模型，专为 Agent 任务设计，是国产硬件厂商在 AI 基础模型领域的重要布局。

-   **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
    -   作者: mistralai | 点赞: 309 | 下载: 29,683
    -   一句话：Mistral 的次旗舰级模型，在英语和法语上有优异表现，为开源社区提供了另一个高性能选择。

-   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
    -   作者: moonshotai | 点赞: 1,240 | 下载: 1,239,626
    -   一句话：月之暗面 Kimi 的最新多模态版本，支持图像理解，使用压缩张量技术减小模型体积，提升了部署效率。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    -   作者: SulphurAI | 点赞: 496 | 下载: 115,477
    -   一句话：Sulphur 推出的第二代高质量文生视频模型，社区对其生成效果和艺术风格抱有很高期待。

-   **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
    -   作者: SeeSee21 | 点赞: 273 | 下载: 8,433
    -   一句话：专注于生成动漫风格图像的模型，满足特定圈层用户的创作需求，在二次元社区中热度较高。

-   **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
    -   作者: TenStrip | 点赞: 190 | 下载: 51,779
    -   一句话：一款优秀的图生视频模型，能将静态图片转化为动态视频，展示了视频生成技术的持续进步。

-   **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**
    -   作者: google | 点赞: 175 | 下载: 47,793
    -   一句话：Gemma-4 的“全能助手”版本，支持任意输入任意输出（Any-to-Any），标志着多模态能力的新高度。

-   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    -   作者: google | 点赞: 2,576 | 下载: 8,894,303
    -   一句话：Gemma-4 的旗舰指令微调版，拥有惊人的 890 万单日下载量，是当前最受欢迎的基础多模态模型之一。

-   **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
    -   作者: k2-fsa | 点赞: 825 | 下载: 2,233,532
    -   一句话：强大的零样本、多语言语音克隆与 TTS 模型，因其高质量的语音合成效果在音频领域出圈。

-   **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
    -   作者: nvidia | 点赞: 267 | 下载: 116,933
    -   一句话：英伟达推出的全能推理模型，使用 MoE 架构实现 30B 总参数下高效推理，是端侧部署多模态能力的优质选择。

-   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**

    -   作者: Qwen | 点赞: 1,694 | 下载: 3,511,378
    -   一句话：Qwen3.6 系列中最受关注的 MoE 模型，总参 35B，激活仅 3B，实现了性能与效率的完美平衡。

-   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    -   作者: Qwen | 点赞: 1,209 | 下载: 2,127,689
    -   一句话：Qwen3.6 的密集模型，27B 参数，在图像理解和对话生成方面表现卓越，是社区微调和二次开发的首选基座。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

-   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    -   作者: openai | 点赞: 1,382 | 下载: 180,322
    -   一句话：OpenAI 发布的隐私安全过滤模型，用于识别和标记文本中的敏感信息（PII），对合规应用至关重要。

-   **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
    -   作者: AngelSlim | 点赞: 155 | 下载: 17,030
    -   一句话：一个极致的机器翻译量化模型，1.25-bit 量化将模型压缩至极致，展示了边缘端部署翻译模型的极限可能性。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

-   **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)**
    -   作者: Jackrong | 点赞: 94 | 下载: 33,515
    -   一句话：基于 Qwen3.6 MoE 模型的早期 GGUF 版本，方便用户通过 llama.cpp 等在本地运行。

-   **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
    -   作者: unsloth | 点赞: 633 | 下载: 1,355,414
    -   一句话：知名高效微调团队 Unsloth 提供的 Qwen3.6-27B GGUF 版本，极大降低了用户本地部署的门槛。

-   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    -   作者: unsloth | 点赞: 976 | 下载: 2,581,735
    -   一句话：Qwen3.6 MoE 模型的 GGUF 版本，激活参数更少，更适合资源有限的个人用户。

-   **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    -   作者: DavidAU | 点赞: 115 | 下载: 161,548
    -   一句话：社区对 Qwen3.6 的极致微调版本，解锁了内容限制并针对代码进行了强化，代表了社区中“可用即可用”的探索方向。

-   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    -   作者: HauhauCS | 点赞: 595 | 下载: 1,061,556
    -   一句话：另一个基于 Qwen3.6 的“无审查”微调版，下载量巨大，显示出社区对内容无限制模型的需求。

### 🌍 生态信号

1.  **Qwen & DeepSeek 双雄争霸，Gemma 稳坐第三方基石**：本周生态表现为 **Qwen（通义千问）** 和 **DeepSeek（深度求索）** 的正面交锋。Qwen3.6 系列在微调、量化二创榜上占据绝对主导，而 DeepSeek-V4 则凭借旗舰性能成为话题焦点。谷歌的 **Gemma-4** 系列则凭借庞大的下载量证明了其作为安全、可靠的基础设施模型的地位。

2.  **MoE 架构统治多模态时代**：从 Qwen3.6-35B-A3B 到 Gemma-4-26B-A4B 再到英伟达的 Nemotron，**MoE（混合专家模型）** 已成为多模态模型的标准范式。它在不显著增加前向推理成本的情况下，极大扩展了模型知识容量。

3.  **量化部署进入“G”时代**：以 **Unsloth** 为代表的团队正在高效地将大模型量化为 GGUF 格式。几乎所有热门大模型（Qwen3.6 系列、DeepSeek-V4）都在第一时间被社区量化，表明本地化和边缘端部署已成为刚需。**“Uncensored（无审查）”** 类微调模型的大量涌现，也揭示了开源社区对模型多样性和自由度的追求。

### 🔭 值得探索

1.  **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image) (值得关注)**：虽然目前下载量极小，但这是一款基于 Qwen3.6 架构的**图像推理**模型（图像文本到图像）。它代表了“让模型先思考再创作”的“O1”范式在文生图领域的应用，可能引领下一波图像生成技术潮流。

2.  **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) (效率探索)**：该模型引入了 **DFlash** 投机解码技术，旨在不牺牲效果的前提下大幅提升推理速度。对于需要部署在线服务的开发者来说，了解并尝试这项技术可能带来显著的性能收益。

3.  **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) (极致效率)**：Google 推出的 Gemma-4 最小模型，仅有 40 亿激活参数。在众多百亿、千亿参数模型中，这个模型以超小的体积展示了强大的多模态能力，是研究超高效模型和端侧部署的绝佳起点。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*