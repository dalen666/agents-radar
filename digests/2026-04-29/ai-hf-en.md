# Hugging Face Trending Models Digest 2026-04-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-29 04:33 UTC

---

Here is the **Hugging Face Trending Models Digest** for 2026-04-29.

---

## 1. Today's Highlights

This week’s trending board is dominated by two major releases: **DeepSeek-V4** (Pro and Flash variants) and **Qwen3.6**, signaling a decisive shift toward **ultra-large, multimodal MoE architectures**. **Google’s gemma-4-31B-it** continues to lead in absolute download velocity (6.5M+), while **DeepSeek-V4-Pro** tops the likes chart, indicating strong community validation for its flagship reasoning model. The emergence of **any-to-any** pipelines (LLaDA2.0-Uni, Nvidia Nemotron-3) and **world models** (Tencent HY-World-2.0) further shows the ecosystem moving beyond text-centric AI toward unified, generative world simulations. Fine-tune and quantization activity is heavily concentrated around Qwen3.6 and Gemma-4, with GGUF variants of these major models seeing explosive community adoption.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  Author: deepseek-ai | Likes: 3,164 | Downloads: 174,402  
  The flagship full-precision reasoning model from DeepSeek, trending for its state-of-the-art performance across coding, math, and long-context tasks.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  Author: deepseek-ai | Likes: 827 | Downloads: 96,948  
  A faster, MIT-licensed inference-optimized variant of DeepSeek-V4, popular for production deployments requiring reduced latency.

- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)**  
  Author: tencent | Likes: 177 | Downloads: 7,671  
  Tencent's latest conversational LLM preview, a hybrid MoE model gaining traction for its high context window and strong Chinese-English bilingual ability.

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
  Author: zai-org | Likes: 1,553 | Downloads: 256,484  
  Next-generation GLM with a new MoE-DSA architecture, trending due to its competitive efficiency-to-performance ratio in agentic tasks.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**  
  Author: poolside | Likes: 79 | Downloads: 15  
  A small, vLLM-compatible code-generation model from poolside, early in release but notable for its optimized software engineering focus.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  Author: Qwen | Likes: 973 | Downloads: 508,728  
  Alibaba’s flagship 27B dense multimodal model (image+text), trending as a strong, open-weight alternative to proprietary GPT-4-class vision models.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  Author: Qwen | Likes: 1,492 | Downloads: 1.5M  
  The most-downloaded Qwen3.6 variant; a 35B MoE with only 3B active parameters, offering near-flagship quality at a fraction of the compute.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
  Author: moonshotai | Likes: 1,135 | Downloads: 489,001  
  Moonshot AI's latest vision-language model, trending for its compressed-tensor optimization and strong multimodal reasoning benchmarks.

- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**  
  Author: tencent | Likes: 623 | Downloads: 3,134  
  An image-to-3D world model, one of the first major open-weight releases of a generative 3D world model, signaling the "world model" trend.

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**  
  Author: inclusionAI | Likes: 225 | Downloads: 506  
  A unified any-to-any diffusion model (text, image, video, audio), early-stage but notable for its MoE, all-in-one generative architecture.

- **[Lightricks/LTX-2.3-22b-IC-LoRA-HDR](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-HDR)**  
  Author: Lightricks | Likes: 68 | Downloads: 0  
  A specialized image-to-video / text-to-video LoRA for HDR content, reflecting growing interest in video generation quality and dynamic range.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
  Author: nvidia | Likes: 80 | Downloads: 9,824  
  NVIDIA’s any-to-any (text, image, audio, video) nano-omni model with MoE and reasoning capabilities, an early look at unified multimodal agents.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  Author: openai | Likes: 1,041 | Downloads: 57,743  
  A token-classification model by OpenAI for PII/PHI redaction, trending due to enterprise demand for safe LLM deployment and compliance.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  Author: google | Likes: 2,419 | Downloads: 6.5M  
  Google's instruction-tuned 31B multimodal model, the most downloaded model on this list, driving massive adoption for open-weight, enterprise-ready vision-language tasks.

- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)**  
  Author: facebook | Likes: 84 | Downloads: 0  
  A human-centric vision transformer for body/face/gesture understanding, trending based on its highly cited arXiv paper and Meta’s open science push.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**  
  Author: XiaomiMiMo | Likes: 254 | Downloads: 396  
  Xiaomi’s long-context agent model (text-generation), one of the few device/agent-optimized models gaining likes almost immediately.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**  
  Author: unsloth | Likes: 481 | Downloads: 702,161  
  Unsloth's GGUF quant of Qwen3.6-27B; the go-to variant for local CPU+GPU inference on dense multimodal models.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  Author: unsloth | Likes: 851 | Downloads: 1.7M  
  Unsloth’s GGUF of the 35B MoE model; the single most-downloaded model on this list, reflecting massive demand for efficient multimodal inference.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  Author: HauhauCS | Likes: 492 | Downloads: 578,813  
  A heavily fine-tuned, uncensored, “aggressive” variant of Qwen3.6-35B-A3B, trending in creative writing and unaligned roleplay communities.

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)**  
  Author: HauhauCS | Likes: 221 | Downloads: 215,232  
  Same aggressive-uncensored treatment applied to the 27B dense model, equally popular for multimodal uncensored use cases.

- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**  
  Author: OBLITERATUS | Likes: 537 | Downloads: 134,773  
  An “abliterated” (guardrails removed) fine-tune of Gemma-4-E4B, highly popular in the uncensored and roleplay niches on both GPU and GGUF.

- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**  
  Author: hesamation | Likes: 204 | Downloads: 141,233  
  A distillation fine-tune that transfers Claude-4.6 reasoning chains into the Qwen3.6 MoE model; trending for open-source "reasoning style transfer."

- **[Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF)**  
  Author: Jackrong | Likes: 88 | Downloads: 48,204  
  A community preview GGUF blending Qwen and Opus-style datasets; gaining downloads in the finetune-quantization crossover space.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**  
  Author: z-lab | Likes: 151 | Downloads: 7,608  
  An optimized 27B dense model using DFlash (dynamic flash attention); trending for R1-style feature extraction and inference speed.

- **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)**  
  Author: z-lab | Likes: 175 | Downloads: 30,002  
  MoE variant of the DFlash optimization; popular with researchers testing context-length scaling and attention speed improvements.

---

## 3. Ecosystem Signal

The current ecosystem is defined by **two converging forces**: the **mainstreaming of MoE (Mixture of Experts)** and the **commoditization of multimodal input**. The Qwen3.6 family, especially the 35B-A3B variant, has become the single most adopted open-weight model this week—its success lies in offering GPT-4o-class vision-language capability at 3B active parameters, drastically lowering hardware barriers. DeepSeek-V4 is reinforcing a "two-tier" strategy: a premium full-precision Pro for researchers and a Flash variant (MIT-licensed) for product teams, mirroring the successful model-card strategy seen in earlier Llama cycles.

**Open-weight models are decisively outpacing proprietary releases** in community engagement; even when Google and OpenAI release official models (Gemma-4, privacy-filter), the community quickly spirals into fine-tunes and quantizations (Unsloth, OBLITERATUS, HauhauCS). A new thematic vector is the rise of **"any-to-any" models** (LLaDA2.0, Nemotron-3) and **world models** (HY-World-2.0), suggesting the next frontier is unified generative simulation rather than separate text/image/video pipelines. GGUF quantization remains the dominant deployment format for local and edge use, led by Unsloth’s ecosystem, while the "uncensored" niche continues to drive disproportionate download counts on MoE models.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The most practical model to try this week. It delivers flagship multimodal performance with only 3B active parameters, making it viable on consumer GPUs (12GB+ VRAM). Its 1.5M downloads and high like-to-download ratio indicate genuine utility rather than hype.

2. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The highest-liked model on the board (3,164). If you are evaluating state-of-the-art open-weight reasoning for code, math, or long-context agentic tasks, this is the benchmark to beat. Pair it with the base model for fine-tuning.

3. **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — One of the first open-weight “image-to-3D world models.” It’s still early in downloads (3,134), but its pipeline (image-to-3d) and tags (worldmodel, 3d) place it at the leading edge of generative simulation—worth exploring for anyone interested in spatial AI or game asset generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*