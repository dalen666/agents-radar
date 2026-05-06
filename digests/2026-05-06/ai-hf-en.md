# Hugging Face Trending Models Digest 2026-05-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-06 04:36 UTC

---

# Hugging Face Trending Models Digest — 2026-05-06

## Today's Highlights

The Hugging Face ecosystem is dominated by two major model families this week: **DeepSeek V4** and **Qwen 3.6**, both seeing massive community engagement. DeepSeek-V4-Pro leads with 3,589 weekly likes, while Google's Gemma-4-31B-it has accumulated over 8.2 million downloads, signaling strong production interest. A notable trend is the rise of **"any-to-any" multimodal models** (Nvidia Nemotron-3, SenseNova, Google Gemma-4 assistant), blurring traditional modality boundaries. Quantization activity is explosive, with 4 GGUF variants of Qwen 3.6 models among the top 30, and a controversial "abliterated" Gemma-4 fine-tune (#21) attracting 1,476 likes.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  *deepseek-ai* | ❤️ 3,589 | ⬇️ 631,499  
  The week's top-trending model: a cutting-edge conversational LLM from DeepSeek, likely featuring scaling improvements over V3.

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**  
  *mistralai* | ❤️ 271 | ⬇️ 15,024  
  Mistral's largest 128B-parameter medium model, supporting English and French with vLLM compatibility.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**  
  *XiaomiMiMo* | ❤️ 441 | ⬇️ 13,317  
  Xiaomi's long-context agent-optimized LLM, trending for its "MiMo V2.5" architecture with extended context handling.

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)**  
  *ibm-granite* | ❤️ 156 | ⬇️ 19,605  
  IBM's latest 8B parameter enterprise-focused language model, part of the Granite 4.1 family.

- **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)**  
  *ibm-granite* | ❤️ 100 | ⬇️ 5,527  
  The larger 30B sibling in IBM's Granite 4.1 series, aimed at production-grade text generation.

- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**  
  *inclusionAI* | ❤️ 417 | ⬇️ 1,062  
  A massive 1-trillion-parameter "bailing_hybrid" conversational model, trending for extreme scale.

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)**  
  *inclusionAI* | ❤️ 464 | ⬇️ 1,310  
  A faster, optimized variant of Ling-2.6 for low-latency conversational use.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**  
  *poolside* | ❤️ 222 | ⬇️ 12,027  
  Poolside's latest code-generation model, likely optimized for software development workflows.

- **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)**  
  *talkie-lm* | ❤️ 235 | ⬇️ 0  
  An instruction-tuned 13B English conversational model based on an earlier "talkie-1930" base.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  *Qwen* | ❤️ 1,132 | ⬇️ 1,458,973  
  Qwen's latest 27B image-text-to-text multimodal model, trending with over 1.4M downloads for strong vision-language performance.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  *Qwen* | ❤️ 1,631 | ⬇️ 2,884,820  
  The top-downloaded model this week: a 35B-parameter MoE variant of Qwen 3.6 with 3B active parameters, excelling at efficient multimodal inference.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  *google* | ❤️ 2,526 | ⬇️ 8,206,643  
  Google's latest open-weight multimodal 31B model, dominating downloads (8.2M) for its strong image-text-to-text capabilities.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
  *nvidia* | ❤️ 245 | ⬇️ 44,631  
  Nvidia's "any-to-any" reasoning model (30B total, 3B active), trending for omnidirectional modality support.

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**  
  *SulphurAI* | ❤️ 252 | ⬇️ 37,897  
  A text-to-video diffusion model, gaining traction for video generation with Diffusers and GGUF support.

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**  
  *SeeSee21* | ❤️ 164 | ⬇️ 3,262  
  An anime-focused text-to-image diffusion model with GGUF support for efficient inference.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**  
  *sensenova* | ❤️ 154 | ⬇️ 2,179  
  An 8B "Mixture-of-Thought" any-to-any multimodal model for feature extraction and chat.

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**  
  *google* | ❤️ 75 | ⬇️ 489  
  An assistant-tuned variant of Gemma-4-31B for any-to-any interaction flows.

- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)**  
  *XiaomiMiMo* | ❤️ 212 | ⬇️ 57,759  
  Xiaomi's multimodal vision-language-audio model, a non-Pro base version catching community interest.

- **[ibm-granite/granite-speech-4.1-2b](https://huggingface.co/ibm-granite/granite-speech-4.1-2b)**  
  *ibm-granite* | ❤️ 68 | ⬇️ 18,894  
  IBM's multilingual automatic speech recognition model, representing enterprise-grade speech AI.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  *openai* | ❤️ 1,302 | ⬇️ 141,317  
  OpenAI's token-classification model for detecting and filtering PII, trending for enterprise compliance use.

- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**  
  *ibm-granite* | ❤️ 82 | ⬇️ 3,104  
  IBM's second-generation 97M multilingual embedding model with ONNX and OpenVINO support.

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**  
  *AngelSlim* | ❤️ 96 | ⬇️ 16,370  
  An extreme 1.25-bit quantized translation model, pushing the boundaries of model compression.

- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**  
  *TenStrip* | ❤️ 105 | ⬇️ 0  
  A niche model (license or content may be restricted), attracting attention despite zero reported downloads.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  *deepseek-ai* | ❤️ 952 | ⬇️ 560,958  
  A faster, lighter variant of DeepSeek V4 for high-throughput text generation.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**  
  *unsloth* | ❤️ 583 | ⬇️ 1,147,196  
  Unsloth's GGUF quant of Qwen 3.6-27B, enabling efficient local inference of this multimodal model.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  *unsloth* | ❤️ 930 | ⬇️ 2,243,715  
  The most popular GGUF quantization this week—2.2M downloads for running the MoE Qwen 3.6 on consumer hardware.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**  
  *z-lab* | ❤️ 241 | ⬇️ 24,768  
  A specialized "DFlash" fine-tune of Qwen 3.6-27B for optimized feature extraction.

- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**  
  *Jackrong* | ❤️ 83 | ⬇️ 68,132  
  A cross-architecture GGUF mixing Qwen 3.5 and DeepSeek V4 Flash, demonstrating community composability.

- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**  
  *DavidAU* | ❤️ 73 | ⬇️ 88,913  
  An "uncensored" fine-tune of Qwen 3.6-27B with NEO-CODE optimization, highly downloaded despite modest likes.

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
  *dealignai* | ❤️ 1,476 | ⬇️ 195,870  
  An "abliterated" (uncensored) Gemma-4 fine-tune, trending strong at #21—controversial but popular.

---

## Ecosystem Signal

**Model family momentum** is clearly concentrated around **Qwen 3.6** and **DeepSeek V4**, with both spawning extensive quantization and fine-tuning ecosystems. Qwen 3.6-35B-A3B's MoE architecture is particularly resonant—it's the most downloaded model this week at 2.8M, suggesting the market values sparse-activation efficiency for multimodal tasks. Google's **Gemma-4-31B** shows the strongest "open-weight vs proprietary" tension: though it has 8.2M downloads, the presence of an "abliterated" variant (dealignai/Gemma-4-31B-JANG_4M-CRACK) with 1.5K likes highlights the community's appetite for safety-filter-free versions of major models. **Quantization through GGUF** (Unsloth, Jackrong, DavidAU) dominates the fine-tune category—nearly 25% of all trending models are GGUF variants. This signals that local deployment and consumer hardware accessibility are primary drivers of adoption, even for 30B+ parameter models. Enterprise interest is visible through IBM's Granite-4.1 suite (multiple sizes + speech + embeddings) and OpenAI's privacy filter.

---

## Worth Exploring

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The most downloaded model this week (2.8M) and the poster child for efficient multimodal MoE. Its 35B total / 3B active parameter ratio makes it uniquely positioned for both quality and speed. Reward: understanding why this specific architecture is capturing the market.

2. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** — A controversial but highly popular (1,476 likes) "abliterated" Gemma-4 fine-tune. Studying this model reveals the full-spectrum demand for open-weight AI—both Google's official release and the community's uncensored fork. It's a signal of the ongoing safety-vs-openness debate.

3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The week's top-trending model by likes (3,589) and a strong contender for the "next frontier" in LLM architecture after V3. With 631K downloads and a dedicated "Flash" variant, DeepSeek V4 is clearly the ecosystem's newest heavyweight champion.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*