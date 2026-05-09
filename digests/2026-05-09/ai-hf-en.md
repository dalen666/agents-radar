# Hugging Face Trending Models Digest 2026-05-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-09 04:28 UTC

---

Here is the structured **Hugging Face Trending Models Digest** for **2026-05-09**.

---

## 1. Today's Highlights

This week's trending models are dominated by a massive wave of **MoE (Mixture-of-Experts) architectures** and **quantized deployments**, signaling a clear shift toward efficiency at scale. DeepSeek’s **V4-Pro** and **V4-Flash** continue their explosive adoption alongside **Google’s Gemma-4-31B-it**, which now leads all models in weekly likes (2,570) and downloads (8.7M+). Qwen’s **Qwen3.6-35B-A3B** surge highlights the appetite for high-performance MoE models in both base and GGUF formats. Meanwhile, the **OmniVoice** text-to-speech model (2.2M downloads, 814 likes) and **SulphurAI’s Sulphur-2-base** text-to-video model (93K downloads) show strong community interest in generative audio and video.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  *Author: deepseek-ai | Likes: 3,760 | Downloads: 1,061,344*  
  The flagship 1M+ download dense LLM from DeepSeek, trending for its state-of-the-art conversational performance and widespread industry adoption.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  *Author: google | Likes: 2,570 | Downloads: 8,731,301*  
  Google’s open-weight 31B image-text-to-text model, the most downloaded model this week, trending due to its strong multimodal reasoning and permissive licensing.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  *Author: deepseek-ai | Likes: 1,005 | Downloads: 848,696*  
  The faster, more efficient sibling of V4-Pro, popular for production inference with its lightweight yet competitive architecture.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**  
  *Author: XiaomiMiMo | Likes: 487 | Downloads: 26,600*  
  Xiaomi's latest long-context agent model, gaining attention as a strong open-weight alternative for tool-use and extended reasoning tasks.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**  
  *Author: poolside | Likes: 233 | Downloads: 18,863*  
  A compact code-focused LLM from poolside, trending for its specialized software engineering performance.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**  
  *Author: SulphurAI | Likes: 452 | Downloads: 92,968*  
  A new text-to-video model with 93K weekly downloads, trending as a strong open competitor in the video generation space.

- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**  
  *Author: TenStrip | Likes: 169 | Downloads: 42,529*  
  An image-to-video diffusion model, notable for its ability to generate high-quality video loops from static images.

- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
  *Author: k2-fsa | Likes: 814 | Downloads: 2,242,587*  
  A zero-shot multilingual text-to-speech model with voice cloning, trending due to its high-quality output and massive download count (2.2M).

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
  *Author: nvidia | Likes: 265 | Downloads: 89,837*  
  Nvidia’s any-to-any MoE reasoning model (30B active, 3B activated), trending for its novel Omni-multimodal architecture.

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  *Author: Qwen | Likes: 1,193 | Downloads: 1,958,217*  
  Qwen’s 27B image-text-to-text model, a top download this week, widely used for visual question answering and conversational AI.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  *Author: Qwen | Likes: 1,680 | Downloads: 3,363,621*  
  Qwen’s new MoE flagship (35B total, 3B active), trending massively for its high efficiency-per-parameter in multimodal tasks.

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**  
  *Author: SeeSee21 | Likes: 241 | Downloads: 5,077*  
  A text-to-image anime generator, popular with the creative community for its stylized outputs.

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**  
  *Author: AngelSlim | Likes: 140 | Downloads: 16,778*  
  A heavily quantized (1.25-bit) translation model, trending for its extreme compression and efficiency.

### 🔧 Specialized Models

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  *Author: openai | Likes: 1,372 | Downloads: 173,110*  
  OpenAI’s first open-weight model — a token-classification filter for PII detection, trending as a significant industry-first from OpenAI.

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**  
  *Author: Zyphra | Likes: 291 | Downloads: 6,810*  
  A research-focused 8B model with published eval results (arxiv:2605.05365), gaining traction in the academic community.

### 📦 Fine-tunes & Quantizations (GGUF, AWQ, community mods)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**  
  *Author: unsloth | Likes: 626 | Downloads: 1,312,422*  
  The official GGUF quant of Qwen3.6-27B by Unsloth, essential for running this model on consumer hardware.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  *Author: unsloth | Likes: 964 | Downloads: 2,500,343*  
  The most downloaded GGUF this week (2.5M), enabling efficient MoE inference on local GPUs.

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
  *Author: dealignai | Likes: 1,489 | Downloads: 156,146*  
  An "abliterated" (uncensored) fine-tune of Gemma-4-31B, highly popular among the uncensored models community.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author: HauhauCS | Likes: 588 | Downloads: 996,892*  
  An aggressive uncensored MoE fine-tune of Qwen3.6-35B, trending in the uncensored model niche.

- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**  
  *Author: Jackrong | Likes: 108 | Downloads: 128,635*  
  A hybrid quant merging Qwen3.5 with DeepSeek-V4-Flash, popular for bridging two model families.

- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**  
  *Author: DavidAU | Likes: 104 | Downloads: 143,853*  
  An elaborate uncensored fine-tune of Qwen3.6 with multiple merges, trending for its "Max" variant and uncensored policy.

## 3. Ecosystem Signal

The most powerful signal this week is the **massive acceleration of MoE models** entering the open-weight ecosystem. Qwen’s Qwen3.6-35B-A3B and Nvidia’s Nemotron-3-Nano-Omni both demonstrate that **active-parameter efficiency (3B–30B range) is now the standard** for competitive multimodal and reasoning performance. DeepSeek’s V4-Pro remains the top dense LLM by likes, but the community is increasingly **shifting toward quantized GGUF versions** — the top three GGUF models (unsloth Qwen3.6-35B-A3B-GGUF, Qwen3.6-27B-GGUF, and Jackrong’s hybrid) collectively account for nearly **4M downloads** and over **1.7K likes**. This confirms that **local deployment on consumer hardware** is a primary driver of adoption. Meanwhile, **uncensored fine-tuning** is a persistent sub-trend (Gemma-4-31B-CRACK, HauhauCS Qwen, DavidAU Heretic), indicating a sustained demand for "safety-removed" variants. Finally, OpenAI’s **privacy-filter** release signals a potential shift toward open-weight security tools, though it remains a small specialized model.

## 4. Worth Exploring

1. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — With 2.2M downloads and 814 likes, it is one of the most successful open **zero-shot multilingual TTS models** with voice cloning. Ideal for anyone building speech applications or exploring voice dubbing.

2. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — This is the **single most downloaded MoE GGUF** this week (2.5M). Practitioners wanting to run a frontier-level multimodal model on a single consumer GPU should start here.

3. **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** — A research-first model with **published arxiv results (2605.05365)** and an Apache-2.0 license. Worth studying for insights into architectural choices for efficient 8B-scale transformers.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*