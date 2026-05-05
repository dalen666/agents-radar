# Hugging Face 热门模型日报 2026-05-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-05 04:19 UTC

---

好的，作为AI模型生态分析师，以下是针对2026年5月5日Hugging Face热门模型榜单的分析日报。

---

### **Hugging Face 热门模型日报 | 2026-05-05**

#### **今日速览**

本周Hugging Face生态呈现出三个显著特征：**多模态模型全面爆发**，头部热度被DeepSeek-V4系列、Google Gemma-4及Qwen3.6系列抢占，且它们均具备图像/文本/语音处理能力；**量化与微调社区异常活跃**，Unsloth等团队为几乎所有热门模型提供GGUF版本，极大地降低了部署门槛；同时，**“去审查”趋势明显**，Gemma-4与Qwen3.6的“uncensored”社区变体均获得了极高关注，反映出用户对模型可控性及开放性需求的增长。

#### **热门模型分类盘点**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  作者: deepseek-ai | ❤️3,532 | ⬇️534,942  
  说明：DeepSeek系列旗舰版，凭借强大的对话与推理能力位居榜首，是本周当之无愧的明星模型。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  作者: deepseek-ai | ❤️942 | ⬇️489,465  
  说明：V4的快速推理版本，专为高并发与低延迟场景设计，是开发者部署的首选之一。

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**  
  作者: XiaomiMiMo | ❤️427 | ⬇️11,812  
  说明：小米发布的新一代Agent模型，主打长上下文与自主决策能力，代表了移动端智能体的技术方向。

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**  
  作者: mistralai | ❤️257 | ⬇️11,950  
  说明：Mistral最新大参数量开源模型，支持多语言（英法），是开源社区对抗闭源模型的重要力量。

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**  
  作者: poolside | ❤️212 | ⬇️10,357  
  说明：专注于代码生成的小尺寸高效模型，反映了专业细分领域模型依然有稳固需求。

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)**  
  作者: inclusionAI | ❤️456 | ⬇️1,141  
  说明：具有混合架构的对话模型，虽下载量不高但关注度增长快，暗示了其在特定社区的流行。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  作者: google | ❤️2,507 | ⬇️8,042,257  
  说明：谷歌开源的视觉-语言多模态大模型，下载量惊人，是当前多模态领域的标杆。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  作者: Qwen | ❤️1,610 | ⬇️2,726,360  
  说明：Qwen系列的MoE架构模型，以极小的激活参数（3B）实现了35B级别的性能，是效率与性能的完美平衡。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  作者: Qwen | ❤️1,108 | ⬇️1,334,241  
  说明：Qwen3.6家族的中坚力量，多模态能力强劲，是通用场景下的热门选择。

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
  作者: dealignai | ❤️1,467 | ⬇️203,362  
  说明：基于Gemma-4的“喜闻乐见”社区微调版本，移除了内容限制（uncensored），在特定社群中人气极高。

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
  作者: moonshotai | ❤️1,197 | ⬇️825,320  
  说明：月之暗面发布的Kimi系列新作，支持多模态理解并采用了压缩张量技术，是国产模型的代表。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
  作者: nvidia | ❤️226 | ⬇️40,403  
  说明：NVIDIA的全模态（any-to-any）模型，结合了推理能力与MoE架构，代表了“全能型”AI的发展方向。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**  
  作者: SulphurAI | ❤️180 | ⬇️20,187  
  说明：文本到视频生成模型，受影视和创意行业关注，代表了AIGC在视频领域的突破。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  作者: openai | ❤️1,265 | ⬇️132,595  
  说明：OpenAI发布的隐私过滤模型（Token分类），用于检测和脱敏敏感信息，是企业级部署的安全利器。

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)**  
  作者: ibm-granite | ❤️151 | ⬇️18,310  
  说明：IBM的企业级语言模型，注重数据安全与可靠性，是工业界应用的优选。

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**  
  作者: AngelSlim | ❤️88 | ⬇️16,307  
  说明：专为翻译设计的极致量化模型（1.25bit），在移动或边缘设备上实现多语言翻译成为可能。

- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**  
  作者: ibm-granite | ❤️76 | ⬇️2,191  
  说明：企业级多语言嵌入模型，为RAG、语义搜索等应用提供基础能力。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**  
  作者: unsloth | ❤️570 | ⬇️1,092,141  
  说明：Unsloth团队为Qwen3.6-27B提供的GGUF量化版，极大地方便了本地和CPU部署。

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  作者: unsloth | ❤️910 | ⬇️2,174,698  
  说明：35B MoE模型的GGUF量化版本，下载量极高，证明用户最渴望高性能+低资源的模型。

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)**  
  作者: HauhauCS | ❤️280 | ⬇️350,841  
  说明：社区对Qwen3.6的激进型去审查微调版本，反映了用户在创作和角色扮演场景下的特定需求。

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**  
  作者: z-lab | ❤️230 | ⬇️23,407  
  说明：另一个针对Qwen3.6的社区优化版，侧重特征提取与推理速度。

- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**  
  作者: Jackrong | ❤️78 | ⬇️55,511  
  说明：社区混血模型，尝试融合DeepSeek与Qwen优势，体现了社区对模型“配方”的探索热情。

#### **生态信号**

1.  **模型家族势头：** **Qwen3.6** 与 **DeepSeek-V4** 是本周绝对双雄，前者以丰富的版本（27B、MoE、GGUF）构建了庞大的生态系统，后者则凭借顶级性能占据顶端。**Gemma-4** 系虽然数量不多，但其超高的下载量证明了Google在社区中的强大号召力。
2.  **开源权重 vs 闭源：** 开源权重模型（如Qwen、DeepSeek、Gemma-4）依然主导了HuggingFace榜单。值得注意的是，社区微调（尤其是“uncensored”版本）和量化版本的流行，表明用户不仅需要开源的“种子”，更需要可定制的、低成本的“果实”。
3.  **量化与微调：** **Unsloth** 已成为量化领域的“基础设施”提供者，几乎所有热门模型都会由其快速推出GGUF版本。**MoE + 极低量化**的组合（如Nemotron-3和Qwen3.6-35B-A3B）成为技术亮点，证明稀疏激活架构在端侧部署的巨大潜力。

#### **值得探索**

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  理由：全球下载量证明了其卓越的普适性。作为多模态模型的最新标杆，无论是研究其架构还是直接用于业务开发，都是首选。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  理由：如果你想体验“以小博大”的MoE架构带来的性能飞跃，这款模型是最佳实践案例。它代表了未来大模型在推理效率上的发展方向。

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  理由：如果你没有顶级的GPU资源，又想体验35B级模型的能力。这个GGUF版本让你可以在普通消费级显卡甚至CPU上运行顶级MoE模型，是当下性价比最高的部署选择。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*