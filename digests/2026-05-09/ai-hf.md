# Hugging Face 热门模型日报 2026-05-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-09 04:28 UTC

---

好的，作为AI模型生态分析师，这是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-05-09**

#### **今日速览**

本周 Hugging Face 生态被两大巨头主导：**DeepSeek V4** 和 **Google Gemma 4** 系列模型发布并迅速占据排行榜顶流，显示出开源社区对前沿大语言模型（LLM）和视觉-语言模型（VLM）的强烈渴望。与此同时，**Qwen3.6** 系列凭借其强大的 MoE 架构和高人气，衍生出大量量化（GGUF）和微调（Uncensored）模型，生态活跃度极高。此外，**OpenAI** 意外发布隐私过滤模型，**K2-FSA** 的零样本语音克隆模型则展示了非LLM领域的突破。社区层面上，**Z-Lab** 等团队推出的投机性解码优化（DFlash）成为新亮点。

#### **热门模型**

**🧠 语言模型（LLM、对话模型、指令微调）**

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** (DeepSeek-AI | 点赞: 3,760 | 下载: 1,061,344)
    - **一句话说明**: DeepSeek 最新旗舰模型，专注于纯文本生成，以极快的推理速度和强大的对话能力，一经发布便稳居本周热度榜首。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** (DeepSeek-AI | 点赞: 1,005 | 下载: 848,696)
    - **一句话说明**: V4 系列的“闪电版”，在性能与效率之间取得平衡，是V4 Pro的高性价比替代品，同样备受开发者青睐。

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** (mistralai | 点赞: 304 | 下载: 21,300)
    - **一句话说明**: Mistral 发布的中等规模旗舰模型，支持100万Token上下文，且在法语和英语上表现优异，进一步巩固了其在欧洲市场的地位。

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** (XiaomiMiMo | 点赞: 487 | 下载: 26,600)
    - **一句话说明**: 小米推出的新一代 Agent 模型，专注于超长上下文处理和智能体任务，显示了手机厂商在端侧AI Agent方向的布局。

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** (poolside | 点赞: 233 | 下载: 18,863)
    - **一句话说明**: 面向软件工程领域的代码生成模型，专注于提升代码自动补全和逻辑生成的质量，是专业赛道的标杆。

**🎨 多模态与生成（图像、视频、音频、文本到X）**

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** (Qwen | 点赞: 1,680 | 下载: 3,363,621)
    - **一句话说明**: 阿里 Qwen 家族的王牌产品，采用 MoE 架构（35B总参，3B激活），在图像、文本、对话领域表现出色，是本周下载量最高的模型之一。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** (Qwen | 点赞: 1,193 | 下载: 1,958,217)
    - **一句话说明**: Qwen3.6 系列的稠密模型版本，同样是图像-文本-文本多模态任务的佼佼者，为无法部署MoE的用户提供了顶级选择。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** (Google | 点赞: 2,570 | 下载: 8,731,301)
    - **一句话说明**: 谷歌 Gemma 4 系列的旗舰指令微调模型，支持图像-文本输入，其顶级的绝对下载量反映了谷歌在开源社区的巨大号召力。

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** (Google | 点赞: 167 | 下载: 33,314)
    - **一句话说明**: Gemma-4-31B-it 的“助手”版本，支持“任意到任意”的模态转换，是多模态理解和生成的集大成者。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** (SulphurAI | 点赞: 452 | 下载: 92,968)
    - **一句话说明**: 本周最亮眼的文生视频模型，作为新兴力量的SulphurAI推出的第二代基础模型，展示了高质量的动态内容生成能力。

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** (SeeSee21 | 点赞: 241 | 下载: 5,077)
    - **一句话说明**: 动漫风格的文生图模型，在特定垂类风格上表现优异，吸引大量ACG社区用户。

- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** (TenStrip | 点赞: 169 | 下载: 42,529)
    - **一句话说明**: 专注于图生视频的模型，能够将静态图像转化为动态视频内容，是内容创作工具的有力补充。

- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** (K2-FSA | 点赞: 814 | 下载: 2,242,587)
    - **一句话说明**: 零样本、多语言、语音克隆模型，凭借其优秀的泛化能力和高度实用性，成为本周音频领域的最大黑马。

**🔧 专用模型（代码、数学、医疗、嵌入、过滤）**

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** (OpenAI | 点赞: 1,372 | 下载: 173,110)
    - **一句话说明**: OpenAI 官方发布的隐私过滤模型，用于识别和标记文本中的敏感信息，在数据安全愈发重要的背景下，其下载量说明社区对此类工具的需求强劲。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** (NVIDIA | 点赞: 265 | 下载: 89,837)
    - **一句话说明**: NVIDIA 推出的推理与多模态Omni模型，采用MoE架构，专为复杂推理和任意模态任务优化，体现了硬件厂商在模型架构上的创新。

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** (AngelSlim | 点赞: 140 | 下载: 16,778)
    - **一句话说明**: 极低比特量化（1.25bit）的翻译模型，展示了在极有限资源下部署高质量翻译任务的潜力，是模型压缩领域的探索者。

**📦 微调与量化（社区微调、GGUF、AWQ）**

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** (dealignai | 点赞: 1,489 | 下载: 156,146)
    - **一句话说明**: Gemma-4-31B 的“Abliterated”版，移除了安全对齐，引发了关于模型“越狱”和Uncensored生态的激烈讨论，是本周话题性最强的微调模型。

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** (Unsloth | 点赞: 964 | 下载: 2,500,343)
    - **一句话说明**: 由知名量化社区 Unsloth 出品的高效GGUF版本，极大降低了Qwen3.6-35B-A3B的部署门槛，使其在消费级GPU上即可运行。

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** (Unsloth | 点赞: 626 | 下载: 1,312,422)
    - **一句话说明**: Qwen3.6-27B 的GGUF版本，与MoE版本形成互补，为不同需求的用户提供了多样化的本地部署选项。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS | 点赞: 588 | 下载: 996,892)
    - **一句话说明**: Qwen3.6-35B的另一个“激进”Uncensored微调版本，下载量巨大，说明社区对无限制对话模型有持续且强烈的需求。

- **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** (Jackrong | 点赞: 86 | 下载: 18,981)
    - **一句话说明**: 社区开发者制作的Qwen3.6-35B GGUF变体，展示了热门模型周围繁荣的二创生态。

#### **生态信号**

本周生态呈现两大特点：**“MoE 模型备受推崇”** 与 **“对齐与去对齐的博弈”**。
1.  **模型家族势头**: **DeepSeek V4系列**和**Qwen3.6系列**是本周绝对的主角，前者在纯文本领域对标GPT-4，后者则在多模态领域形成“MoE(A3B) + 稠密(27B) + 量化(GGUF) + 微调(Uncensored)”的完整生态链。**Google Gemma 4**凭借大厂背书和优秀基础性能，也在下载量和点赞数上名列前茅。
2.  **开源趋势**: 本周榜单几乎全是开源模型，且**OpenAI**的开源动作（隐私过滤器）和**Google**的持续投入，证明了开源实力已能与闭源模型正面抗衡。闭源模型本周几乎没有声音。
3.  **微调与量化**: 以**Unsloth**为代表的量化工作已成为新模型发布的“标配”，极大推动了模型的普及。同时，以`dealignai`和`HauhauCS`为代表的**Uncensored（无审查）** 模型下载量巨大，这表明在安全对齐之外，社区对于模型自由度的探索和需求依然十分旺盛。此外，**Z-Lab**带来的**投机性解码（DFlash）** 优化，是提升推理效率的新趋势。

#### **值得探索**

1.  **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**: 强烈推荐。它证明了在当前多模态热潮中，音频领域仍有巨大的创新空间。优秀的零样本语音克隆和翻译能力，使其有望成为下一代语音助手的基石。其近225万的下载量也证明了其受欢迎程度。
2.  **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**: 推荐给所有关注推理优化的人。这是一个应用了投机性解码（Speculative Decoding）技术的Qwen3.6模型。如果你在部署大模型时对延迟敏感，这个模型的技术路线值得深入研究，它可能代表了一种高效的部署范式。
3.  **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**: 推荐给研究AI安全与对齐的研究人员。虽然存在争议，但它的高热度反映了社区对现有安全机制的反思。探索它，可以帮助理解当前AI系统的脆弱性和“越狱”背后的原理，比单纯的使用更有价值。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*