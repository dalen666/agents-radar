# Hugging Face 热门模型日报 2026-04-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-26 09:06 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026-04-26数据生成的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 | 2026-04-26

#### 1. 今日速览

本周Hugging Face生态呈现“三强争霸”与“多模爆发”的格局。**DeepSeek-V4** 系列与 **Qwen3.6** 系列成为绝对主角，分别统治了纯文本生成与多模态理解两大高地，其周点赞数远超其他模型。特别值得注意的是，**Google Gemma-4** 凭借强大的下载量（超过600万）展现了其作为“基础设施”的庞大部署规模。此外，以 **OpenBMB VoxCPM2** 和 **Tencent HY-World-2.0** 为代表的多模态与3D生成模型，以及社区火热的各种 **GGUF** 量化与“uncensored”微调版本，共同构成了本周“模型民主化”的强劲浪潮。

#### 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

-   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    -   **作者**: deepseek-ai | **点赞**: 2,737 | **下载**: 123,431
    -   **说明**: DeepSeek最新的旗舰级文本生成模型，凭借顶尖性能成为本周最受关注的纯LLM，引爆了社区讨论。

-   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    -   **作者**: deepseek-ai | **点赞**: 703 | **下载**: 45,986
    -   **说明**: DeepSeek-V4的轻量级“闪击”版，兼顾效率与性能，采用MIT协议开源，降低了商业使用门槛。

-   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
    -   **作者**: zai-org | **点赞**: 1,516 | **下载**: 230,865
    -   **说明**: 智谱AI最新一代MoE架构的大模型，在多轮对话和推理任务上表现出色，是国产大模型的重要力量。

-   **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**
    -   **作者**: MiniMaxAI | **点赞**: 1,067 | **下载**: 484,595
    -   **说明**: MiniMax最新旗舰模型，主打长文本处理能力，以高下载量证明了其在商用和社区中的受欢迎程度。

-   **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)**
    -   **作者**: tencent | **点赞**: 148 | **下载**: 4,064
    -   **说明**: 腾讯推出的新一代Hy系列文本生成模型预览版，值得关注的国产大模型新品。

-   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    -   **作者**: Qwen | **点赞**: 1,411 | **下载**: 1,181,968
    -   **说明**: 通义千问3.6系列的旗舰MoE模型，以35B总参数、仅3B激活参数实现高效推理，是多模态聊天领域的性能标杆。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
    -   **作者**: moonshotai | **点赞**: 1,039 | **下载**: 376,485
    -   **说明**: 月之暗面Kimi的多模态版本（图像+文本输入），在理解和推理任务上表现强劲。

-   **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
    -   **作者**: openbmb | **点赞**: 1,237 | **下载**: 99,542
    -   **说明**: 面壁智能推出的第二代语音合成模型，在多语言TTS领域表现突出，展示了开源语音合成的突破。

-   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    -   **作者**: google | **点赞**: 2,365 | **下载**: 6,042,134
    -   **说明**: Google开源的多模态对话模型，拥有惊人的600万+下载量，已成为社区基础设施级别的模型。

-   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**
    -   **作者**: tencent | **点赞**: 606 | **下载**: 2,969
    -   **说明**: 腾讯推出的图像转3D世界模型，代表了生成式AI向空间智能迈进的趋势。

-   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**
    -   **作者**: baidu | **点赞**: 566 | **下载**: 7,800
    -   **说明**: 百度的文本到图像生成模型，基于Diffusers框架，采用宽松的Apache-2.0协议，丰富了文生图领域的生态。

-   **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)**
    -   **作者**: nvidia | **点赞**: 274 | **下载**: 569
    -   **说明**: 英伟达推出的高保真图像转3D模型，代表了业界顶尖的3D重建能力。

-   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
    -   **作者**: inclusionAI | **点赞**: 180 | **下载**: 346
    -   **说明**: 首个“any-to-any”多模态理解与生成模型，能处理文本、图像、音频等多种输入输出，极具前沿性。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

-   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    -   **作者**: openai | **点赞**: 793 | **下载**: 35,807
    -   **说明**: OpenAI推出的隐私过滤模型，用于识别和标记敏感信息，体现了大模型应用中对安全性的关注。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

-   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    -   **作者**: unsloth | **点赞**: 775 | **下载**: 1,574,581
    -   **说明**: 由知名量化团队unsloth提供的Qwen 3.6 MoE模型的GGUF版本，下载量极高，是本地部署首选。

-   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    -   **作者**: HauhauCS | **点赞**: 439 | **下载**: 460,832
    -   **说明**: 社区对Qwen3.6进行“越狱”微调后的激进版本，反映了社区对模型控制权和自由度的强烈需求。

-   **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**
    -   **作者**: OBLITERATUS | **点赞**: 509 | **下载**: 120,432
    -   **说明**: 针对Google Gemma-4的“无限制”（abliterated）微调版，移除了安全护栏，是社区最活跃的微调方向之一。

-   **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)**
    -   **作者**: Jackrong | **点赞**: 205 | **下载**: 75,797
    -   **说明**: 社区通过“模型融合”（Frankenmerge）技术，整合Qwen和GLM能力创造的新模型，代表了社区创新的活跃度。

#### 3. 生态信号

本周生态呈现出高度集中的“头部效应”。**Qwen3.6** 和 **DeepSeek-V4** 家族势力空前强大，几乎包揽了榜单前20中的大部分名额，其基座模型的强大性能驱动了后续的海量量化与微调工作。开源权重的趋势依然坚挺，以Google Gemma-4为代表，开源模型下载量级已攀升至百万级别，真正成为应用基石。

值得关注的是，社区微调活动异常火爆，特别是“**Uncensored**” 和 “**Abliterated**” 版本的热度极高，这表明用户在积极寻求更自由的控制权和探索模型能力的边界，这将对模型安全研究提出新的挑战。此外，以 **unsloth** 为代表的量化团队通过提供高质量的GGUF版本，已实质性地降低了AI模型的部署门槛，成为连接前沿模型与普通用户的关键纽带。

#### 4. 值得探索

1.  **🧠 DeepSeek-V4系列 (Pro & Flash)**：如果您追求极致的纯文本生成性能，或对新一代MoE架构感兴趣，DeepSeek-V4是本周最必试的模型。特别是Flash版本采用MIT协议，商业友好度极高。
2.  **🌍 Tencent/HY-World-2.0**：如果你想探索当前最前沿的“世界模型”概念，从一张图片生成一个可交互的3D世界，这个模型提供了最直观的体验，代表了多模态生成的下一个方向。
3.  **🎤 OpenBMB/VoxCPM2**：如果你有高质量的语音合成需求，或对多语言TTS感兴趣，这个模型在多语言上的出色表现值得深入研究，其开源性质也为定制化应用提供了无限可能。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*