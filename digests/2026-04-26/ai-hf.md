# Hugging Face 热门模型日报 2026-04-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-26 15:21 UTC

---

好的，这是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 | 2026年04月26日

#### 今日速览

本周 Hugging Face 生态呈现出“三巨头争霸”的态势：**DeepSeek V4**、**Qwen 3.6** 和 **Google Gemma 4** 的系列模型占据了榜单的绝对核心。其中，**Qwen 3.6** 的 MoE 变体（35B-A3B）及其量化版本在社区中下载量巨大，显示出开发者对高效、可本地部署的多模态模型的强烈需求。**DeepSeek V4 Pro** 以最高的周点赞数领跑纯文本生成赛道。值得注意的是，**OpenAI** 和 **Baidu** 分别发布了专注于安全和图像生成的专用模型，显示了巨头在特定垂直领域的布局。此外，基于先进模型（如 Claude Opus）的“蒸馏”与“无审查”微调版本依然火爆，反映了社区对特定性能调优的持续热情。

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  作者: deepseek-ai | 👍 2,790 | ⬇️ 123,431  
  DeepSeek V4 系列的旗舰版，凭借强大的对话和文本生成能力，成为本周社区关注度最高的模型。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  作者: deepseek-ai | 👍 714 | ⬇️ 45,986  
  V4 系列的轻量级版本，采用 MIT 协议，为开发者提供了更灵活、更开放的部署选择。

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
  作者: zai-org | 👍 1,517 | ⬇️ 230,865  
  智谱AI最新一代GLM模型，采用MoE架构，在中文和多语言对话场景中表现优异，获得了广泛关注。

- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**  
  作者: MiniMaxAI | 👍 1,068 | ⬇️ 484,595  
  MiniMax 的最新旗舰模型，主打高质量对话，下载量巨大，显示出其在商业和开源社区中的受欢迎程度。

- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)**  
  作者: tencent | 👍 150 | ⬇️ 4,064  
  腾讯混元大模型的最新预览版，展示了其在基础语言模型能力上的持续迭代。

- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**  
  作者: OBLITERATUS | 👍 511 | ⬇️ 120,432  
  基于 Google Gemma 4 的“无害化移除”微调版，释放模型更自由的生成能力，是一个很受欢迎的社区实验。

- **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)**  
  作者: Jackrong | 👍 207 | ⬇️ 75,797  
  采用“Frankenmerge”技术融合 Qwen 和 GLM 模型，旨在提升推理能力，并通过GGUF实现本地部署。

- **[lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled](https://huggingface.co/lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled)**  
  作者: lordx64 | 👍 77 | ⬇️ 48,933  
  将Claude-4.7-Opus的推理能力蒸馏到Qwen-3.6-MoE模型中，是社区追求顶级性能的典型代表。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
  作者: moonshotai | 👍 1,043 | ⬇️ 376,485  
  月之暗面新一代多模态模型，支持图像与文本交互，在理解与生成的结合上表现突出。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  作者: Qwen | 👍 842 | ⬇️ 329,571  
  Qwen家族的标准多模态旗舰模型，性能强大，下载量极高。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  作者: Qwen | 👍 1,417 | ⬇️ 1,181,968  
  Qwen 3.6 的“活化参数仅 3B”的混合专家（MoE）版本，以极低的推理成本实现了接近 27B 模型的性能，是本周的明星模型之一。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  作者: google | 👍 2,372 | ⬇️ 6,042,134  
  Google 最新开源多模态旗舰，性能强劲，凭借 Google 生态和开源策略，本周下载量惊人。

- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**  
  作者: tencent | 👍 608 | ⬇️ 2,969  
  腾讯的“世界模型”新作，专注于从单张图片生成3D内容，是3D生成领域的一个重要进展。

- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**  
  作者: baidu | 👍 569 | ⬇️ 7,800  
  百度的文心系列图像生成模型，采用8B参数量并开放Apache-2.0协议，为文本到图像生成提供了新的选择。

- **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**  
  作者: openbmb | 👍 1,237 | ⬇️ 99,542  
  面壁智能（OpenBMB）推出的多语言语音合成（TTS）模型，在语音生成领域取得了突破性进展。

- **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)**  
  作者: nvidia | 👍 275 | ⬇️ 569  
  NVIDIA 推出的“世界模型”，探索从图像生成3D场景的前沿技术，代表了研究前沿方向。

##### 🔧 专用模型（代码、数学、医疗、嵌入等）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  作者: openai | 👍 816 | ⬇️ 35,807  
  OpenAI推出的一个词元分类模型，用于检测和过滤敏感隐私信息，是AI安全领域的重要工具。

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**  
  作者: inclusionAI | 👍 182 | ⬇️ 346  
  “任意到任意”的通用模型，融合了transformers和diffusers技术，代表了通用感知模型的前沿探索。

- **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)**  
  作者: robbyant | 👍 175 | ⬇️ 0  
  一个与学术论文（arXiv:2604.14141）关联的地图/表示模型，用途未知，但引起了学术社区的关注。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  作者: unsloth | 👍 783 | ⬇️ 1,574,581  
  通过GGUF量化，将Qwen 3.6 MoE模型压缩至可在消费级硬件上运行，是榜单中下载量最高的模型之一，满足了本地部署的巨大需求。

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**  
  作者: unsloth | 👍 418 | ⬇️ 553,179  
  Qwen 3.6-27B 的 GGUF 量化版本，为本地运行高质量多模态模型提供了便捷途径。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者: HauhauCS | 👍 447 | ⬇️ 460,832  
  社区制作的“激进无审查”版Qwen MoE模型，配合GGUF格式，代表了社区“定制化”模型的一股潮流。

- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**  
  作者: hesamation | 👍 186 | ⬇️ 117,163  
  将 Claude-4.6 的推理能力蒸馏至Qwen MoE模型，并以GGUF形式发布，是“能力蒸馏+量化”的经典案例。

- **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)**  
  作者: z-lab | 👍 160 | ⬇️ 26,760  
  对 Qwen 3.6 MoE 模型的一种特殊微调版本，名为“DFlash”，代表了社区对 MoE 模型高效推理探索。

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**  
  作者: z-lab | 👍 102 | ⬇️ 3,447  
  Qwen 3.6-27B 的 “DFlash” 微调版本，与上述 35B MoE 版本类似，是一个专注于特定性能优化的系列。

#### 生态信号

1.  **Qwen 3.6 生态系统爆发**：Qwen 3.6 系列，特别是其 MoE 变体，已成为本周的绝对焦点。从基础模型、官方量化（FP8）到社区的多版本微调（Uncensored、Distilled），再到广泛的GGUF量化，围绕 Qwen 3.6 形成了一个完整且高度活跃的生态链，显示出强大的社区生命力。

2.  **MoE 架构成为主流，高效推理是关键**：无论是 Qwen 3.6 MoE、GLM 5.1 还是 MiniMax M2.7，混合专家（MoE）架构已全面开花。其中，Qwen 3.6-35B-A3B（仅3B活跃参数）的巨大成功，印证了开发者对“高智价比”模型（即性能高、占用资源少）的极致追求。

3.  **“蒸馏 + 量化” 双流水线盛行**：本周榜单多次出现“Claude Opus 蒸馏版 + GGUF”的组合。社区正形成一条清晰的“神级模型能力蒸馏 -> 开源基座模型 -> 量化本地部署”的流水线，这大大降低了普通用户和开发者获取前沿AI能力的门槛。

#### 值得探索

1.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：最值得研究的模型之一。它是“高效多模态”的典范，展示了如何通过 MoE 架构以极低成本实现顶级性能。如果资源有限但想要获得强大的多模态能力，这是不二之选。

2.  **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**：在多模态热潮中，高质量的语音合成模型依然稀缺。VoxCPM2 以其多语言能力和高下载量，是探索 TTS 前沿技术的绝佳起点，值得语音领域的研究者和开发者深入研究。

---
*本日报由 [agents-radar](https://github.com/dalen666/agents-radar) 自动生成。*