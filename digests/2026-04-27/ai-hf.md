# Hugging Face 热门模型日报 2026-04-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-27 04:34 UTC

---

好的，作为AI模型生态分析师，以下是为你生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-04-27**

#### **今日速览**

本周 Hugging Face 热点由 **Gemma 4** 和 **DeepSeek V4** 两大系列主导，展现了顶级开源基座模型的最新进展。**DeepSeek V4 Pro** 以绝对优势登顶文本生成榜，而 **Google Gemma-4-31B-it** 则凭借惊人的下载量成为最受欢迎的“生产力”模型。此外，**MoE（混合专家）架构**在多模态和语言模型中持续渗透，并催生了大量社区量化（GGUF）和微调版本，生态异常活跃。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 👍 2,895 | ⬇️ 123,431
    *   DeepSeek 的最新旗舰模型，以顶尖的推理能力和对话性能成为本周最受瞩目的文本生成模型，标签中的 `deepseek_v4` 表明其为新一代架构。

2.  **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 👍 745 | ⬇️ 45,986
    *   DeepSeek V4 系列的高效版本，通过优化实现更快的推理速度，同时保持高质量输出，适合对延迟敏感的应用。

3.  **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 👍 1,526 | ⬇️ 230,865
    *   智谱AI最新开源的 GLM 系列模型，采用 `glm_moe_dsa` 架构，以极快的周点赞增长成为社区焦点，性能强劲。

4.  **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 👍 1,071 | ⬇️ 484,595
    *   MiniMax 的新一代语言模型，同样采用了 `minimax_m2` 架构，下载量巨大，是当前对话模型的有力竞争者。

5.  **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | tencent | 👍 154 | ⬇️ 4,064
    *   腾讯发布的第三代Hybrid模型预览版，代表了国内大厂在混合架构上的最新探索。

6.  **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 👍 215 | ⬇️ 75,797
    *   一个社区“弗兰肯斯坦式”模型合并（Frankenmerge）的产物，融合了 Qwen 和 GLM 的特征，并进行了GGUF量化，代表了一种新型社区创新。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 👍 2,382 | ⬇️ 6,042,134
    *   **Google 最新开源的多模态巨擘**，支持图像和文本输入。尽管点赞数不如DeepSeek，但其超过600万的周下载量说明其已成为当前最主流的多模态模型。

2.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 👍 1,435 | ⬇️ 1,181,968
    *   Qwen 3.6 系列的明星模型：**35B总参数量但仅激活3B的MoE模型**。在性能与效率间取得绝佳平衡，下载量惊人，是边缘部署和多模态应用的利器。

3.  **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 👍 1,068 | ⬇️ 376,485
    *   月之暗面 Kimi 的最强多模态版本更新，支持图像、文本理解和生成，以 `compressed-tensors` 为特色，显示其在模型压缩上的前沿探索。

4.  **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 👍 1,241 | ⬇️ 99,542
    *   新一代多语言文本到语音（TTS）模型，在语音生成领域本周热度最高，展现了强大的跨语言能力。

5.  **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 👍 611 | ⬇️ 2,969
    *   腾讯发布的“世界模型”，任务标签为 `image-to-3d`，能够从单张图片生成3D场景，是3D生成领域的重要进展。

6.  **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 👍 572 | ⬇️ 7,800
    *   百度发布的文生图模型，带有`8B`参数标签，是开源文生图领域的新玩家，基于Diffusers框架。

7.  **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 👍 186 | ⬇️ 346
    *   一个新颖的 `any-to-any` 任务模型，融合了 transformers 和 diffusers，旨在实现任意模态间的转换，代表了前沿的多模态融合方向。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 👍 861 | ⬇️ 35,807
    *   OpenAI开源的工具型模型，专门用于**隐私过滤和敏感信息识别**（`token-classification`）。其高点赞数反映了业界对AI安全和合规需求的日益增长，模型使用ONNX格式，便于部署。

2.  **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 👍 175 | ⬇️ 0
    *   一个看似与学术论文相关的权重文件（链接到 `arxiv:2604.14141`），尽管下载量为0，但获得了大量点赞，说明社区对其研究方向的关注。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 👍 802 | ⬇️ 1,574,581
    *   **本周量化之王**。Unsloth 将最热门的Qwen3.6 MoE模型转换为GGUF格式，下载量超过157万，极大地推动了该模型在消费级硬件上的部署。

2.  **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 👍 433 | ⬇️ 553,179
    *   Unsloth 对Qwen3.6-27B的量化版本，同样获得了海量下载，是追求性价比多模态体验的首选。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 👍 462 | ⬇️ 460,832
    *   社区对Qwen3.6 MoE模型的高强度“去审查”版本，GGUF格式，因其“激进”的风格吸引了大量追求无限制对话的用户。

4.  **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 👍 516 | ⬇️ 120,432
    *   针对 Google Gemma 4 系列的“去审查”版本（Abliterated），反映了社区对获取更“自由”开源模型的一贯热情。

5.  **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 👍 164 | ⬇️ 26,760
    *   社区对Qwen3.6的微调版本，引入了`dflash`技术，旨在提升模型的推理或生成效率。

#### **生态信号**

本周生态呈现出三大信号：
1.  **“Gemma 4”与“DeepSeek V4”双雄争霸**：Google和DeepSeek两大阵营同时推出新一代开源模型，标志着开源大模型正式进入“4.0”世代。Gemma 4 以其庞大的下载量证明了Google强大生态和开发者口碑，而DeepSeek V4 Pro则凭借顶尖性能领跑技术榜单。
2.  **MoE 成为绝对主流**：无论是Qwen 3.6（A3B架构）、GLM-5.1还是Gemma 4（A4B架构），MoE已成为高性能模型的标准范式。社区对此反应热烈，通过量化（特别是GGUF）和微调，让这些巨量模型能被普通用户和开发者所使用。
3.  **“去审查”与“模型合并”势头不减**：以 `-Uncensored` 和 `-OBLITERATED` 为后缀的模型持续火爆，显示开源社区对模型自由度的核心诉求。同时，`Jackrong/Qwopus-GLM-18B-Merged-GGUF` 这类模型合并的创新手法，预示着社区已不满足于微调，开始尝试更深度的“化学融合”。

#### **值得探索**

1.  **🔬 [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   **理由：** 这是当前**效率与性能平衡的标杆**。35B参数只激活3B，却能达到接近全参数模型的水平。无论是研究者探索MoE机制，还是开发者寻求本地高性价比多模态方案，这都是必试的模型。

2.  **🔬 [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **理由：** 作为**下载量冠军**和 Google 最新的开源旗舰，Gemma-4 代表着“官方开源”的最高水准。如果你需要稳定、全面、生态友好的多模态基础模型，这是最稳妥且强大的选择。值得深入研究其安全性和多模态对齐能力。

3.  **🔬 [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
    *   **理由：** 在文本和多模态模型之外，VoxCPM2 代表**语音生成领域的重大进步**。如果你是从事语音交互、TTS或配音相关工作的开发者，这个支持多语言的模型是目前社区中最具关注度的开源选择，值得立即上手测试。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*