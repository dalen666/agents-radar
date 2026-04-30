# Hugging Face 热门模型日报 2026-04-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-30 04:36 UTC

---

好的，作为AI模型生态分析师，这是为您生成的2026年4月30日Hugging Face热门模型日报。

---

### **Hugging Face 热门模型日报 | 2026-04-30**

#### **今日速览**

本周Hugging Face榜单由“巨无霸”级多模态模型主导，**Google Gemma 4**与**Qwen 3.6系列**在下载量上遥遥领先，成为社区焦点。**DeepSeek-V4** 双版本（Pro & Flash）延续了其强大的号召力，点赞数居高不下。**MoE（混合专家）架构**持续渗透，以Qwen 3.6-35B-A3B和NVIDIA Nemotron 3为代表，通过“以少胜多”的策略，在小参数下实现高性能。此外，**量化与微调社区**异常活跃，unsloth和HauhauCS等团队对热门模型进行的GGUF量化和“无审查”微调版本，获得了极高的下载量，反映出用户对低成本、本地化及个性化部署的强烈需求。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

-   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    - 作者: deepseek-ai | 点赞: 3,246 | 下载: 174,402
    - 一句话说明：DeepSeek最新旗舰级对话模型，以绝对领先的点赞数成为本周最受关注的模型，代表了当前最强的开源文本生成能力之一。

-   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    - 作者: deepseek-ai | 点赞: 858 | 下载: 96,948
    - 一句话说明：DeepSeek-V4的快速推理版本，采用MIT许可证发布，在商业友好性和性能之间取得了平衡，吸引了大量开发者关注。

-   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
    - 作者: zai-org | 点赞: 1,560 | 下载: 256,484
    - 一句话说明：智谱AI推出的新一代MoE语言模型，凭借其创新的DSA（动态稀疏注意力）架构和强大的中文能力，取得了亮眼表现。

-   **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)**
    - 作者: tencent | 点赞: 185 | 下载: 7,671
    - 一句话说明：腾讯发布的第三代混元大模型预览版，标志着国内科技巨头在通用大模型领域的持续迭代。

-   **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
    - 作者: mistralai | 点赞: 118 | 下载: 227
    - 一句话说明：Mistral AI推出的中规模旗舰模型，128B参数，专为高效推理和双语（英/法）场景设计。

-   **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
    - 作者: poolside | 点赞: 138 | 下载: 15
    - 一句话说明：Poolside推出的代码生成模型，专注于软件开发场景。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    - 作者: google | 点赞: 2,438 | 下载: 6,558,301
    - 一句话说明：Google开源的Gemma 4系列，其下载量在本周遥遥领先，证明了大厂开源模型在社区中的巨大影响力，是一款高性能多模态对话模型。

-   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    - 作者: Qwen | 点赞: 1,516 | 下载: 1,510,129
    - 一句话说明：Qwen 3.6系列中最亮眼的明星产品，采用MoE架构，总参数量35B但激活仅3B，实现了超凡的性能与效率平衡，是社区研究和部署的爆款。

-   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
    - 作者: moonshotai | 点赞: 1,154 | 下载: 489,001
    - 一句话说明：月之暗面Kimi大模型的最新版本，延续了其强大的长上下文和多模态特性，性能强劲。

-   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    - 作者: Qwen | 点赞: 1,008 | 下载: 508,728
    - 一句话说明：Qwen 3.6系列的全量27B参数版本，作为性能标杆，为下游微调和应用提供了坚实基础。

-   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    - 作者: openai | 点赞: 1,093 | 下载: 57,743
    - 一句话说明：OpenAI开源的隐私过滤模型，专注于实体识别和敏感信息过滤，满足了AI应用合规性的迫切需求，非典型多模态但备受关注。

-   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
    - 作者: inclusionAI | 点赞: 235 | 下载: 506
    - 一句话说明：一个大胆的“任意到任意”模型，旨在统一理解和生成任务，代表了AI大一统模型的前沿探索。

-   **[Lightricks/LTX-2.3-22b-IC-LoRA-HDR](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-HDR)**
    - 作者: Lightricks | 点赞: 71 | 下载: 0
    - 一句话说明：图像到视频生成领域的先进模型，结合LoRA和HDR技术，专注于高质量视频生成。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

-   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    - 作者: unsloth | 点赞: 865 | 下载: 1,705,737
    - 一句话说明：unsloth团队对Qwen 3.6 MoE模型进行的GGUF量化版，是该系列下载量最高的版本，极大降低了MoE模型本地部署的门槛。

-   **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
    - 作者: unsloth | 点赞: 499 | 下载: 702,161
    - 一句话说明：Qwen 3.6-27B的GGUF量化版，进一步丰富了Qwen生态的量化选择，满足不同硬件需求。

-   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - 作者: HauhauCS | 点赞: 501 | 下载: 578,813
    - 一句话说明：社区对Qwen MoE模型的“无审查”激进微调版，满足了部分用户对模型安全限制放松的需求，引发了关于AI伦理的讨论。

-   **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)**
    - 作者: HauhauCS | 点赞: 236 | 下载: 215,232
    - 一句话说明：Qwen 3.6-27B的无审查微调版，与上述MoE版本同属一个系列，反映了社区微调的活跃度。

-   **[Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)**
    - 作者: Qwen | 点赞: 165 | 下载: 745,458
    - 一句话说明：Qwen官方发布的FP8量化版本，提供了高性能和模型容量的折中方案，是官方积极支持量化的有力信号。

-   **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**
    - 作者: z-lab | 点赞: 163 | 下载: 7,608
    - 一句话说明：针对Qwen 3.6-27B的“动态Flash”微调优化版，探索了在长上下文场景下的性能提升。

---

#### **生态信号**

本周生态呈现三大信号：**第一，多模态“寡头”格局显现。** Qwen 3.6家族霸榜，Google Gemma 4下载量一骑绝尘，表明前沿多模态模型的马太效应加剧，头部玩家的开源模型占据了社区主要心智。**第二，“小MoE”成为效率之王。** Qwen 3.6-35B-A3B及其量化版的大火，印证了社区对高性价比模型的需求。它证明了通过MoE架构，可以在大幅降低推理成本的同时，保持接近全量模型的性能，这是当前开源模型落地的主要趋势之一。**第三，微调生态高度同质化。** 围绕Qwen和DeepSeek等头部模型，社区微调（尤其是“无审查”微调）和量化（GGUF）活动极其集中，说明生态虽繁荣，但创新性微调仍显不足，更多是跟随和适配工作。

#### **值得探索**

1.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: **必试。** 这是当前MoE路线最成功的开源模型，是研究和部署高性价比多模态应用的绝佳起点。结合其[GGUF版本](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)即可在消费级GPU上获得顶尖体验。

2.  **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**: **推荐研究。** 作为目前少有的，在Attention机制上做创新的模型，其DSA架构值得深入分析。它不仅性能强劲，更是对Transformer架构演进的重要贡献，尤其适合对AI底层技术感兴趣的研究者。

3.  **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**: **建议关注。** 虽然目前下载和点赞不高，但“任意到任意”是下一代AI的理想形态。该模型作为这一方向的早期开源尝试，具有很高的前瞻性研究价值，值得持续跟踪其发展。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*