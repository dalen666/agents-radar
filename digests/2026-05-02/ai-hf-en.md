# Hugging Face Trending Models Digest 2026-05-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-02 04:21 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-05-02**.

---

## 1. Today's Highlights

The top of the leaderboard is dominated by the **Qwen3.6** family, with Qwen itself releasing two flagship multimodal models (27B and 35B-A3B) that collectively amassed over 3 million downloads this week. **DeepSeek-V4-Pro** continues its strong run as the most-liked single model, signaling sustained demand for high-performance conversational AI. A notable shift is the emergence of **any-to-any** pipelines (Nvidia's Nemotron-3 and InclusionAI's LLaDA2.0-Uni), suggesting the ecosystem is moving beyond text and image generation toward unified multimodal processing. Community quantization activity is also at an all-time high, with unsloth and other fine-tuners providing GGUF variants of nearly every major release within hours.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **deepseek-ai/DeepSeek-V4-Pro** ([link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)) – deepseek-ai, 3,373 likes, 321k downloads. The top trending model overall, a powerful conversational text-generation model in the DeepSeek V4 lineage.

- **deepseek-ai/DeepSeek-V4-Flash** ([link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)) – deepseek-ai, 909 likes, 281k downloads. A faster, presumably distilled variant of DeepSeek-V4-Pro, popular for real-time applications.

- **moonshotai/Kimi-K2.6** ([link](https://huggingface.co/moonshotai/Kimi-K2.6)) – moonshotai, 1,174 likes, 649k downloads. An image-text-to-text model from the Kimi series with compressed-tensors support, indicating Moonshot’s focus on efficient deployment.

- **zai-org/GLM-5.1** ([link](https://huggingface.co/zai-org/GLM-5.1)) – zai-org, 1,573 likes, 279k downloads. A MoE-based conversational model (GLM MoE DSA) from the Zhipu AI ecosystem; strong show of community trust in Chinese foundational models.

- **ibm-granite/granite-4.1-8b** ([link](https://huggingface.co/ibm-granite/granite-4.1-8b)) – ibm-granite, 121 likes, 14k downloads. IBM’s latest 8B language model in the Granite series, likely optimized for enterprise and regulated environments.

- **ibm-granite/granite-4.1-30b** ([link](https://huggingface.co/ibm-granite/granite-4.1-30b)) – ibm-granite, 70 likes, 2k downloads. The larger sibling of Granite 4.1, aimed at higher-quality language understanding and generation.

- **poolside/Laguna-XS.2** ([link](https://huggingface.co/poolside/Laguna-XS.2)) – poolside, 175 likes, 5.7k downloads. A vLLM-compatible text-generation model built for code and developer workflows (common use case for poolside).

- **inclusionAI/Ling-2.6-1T** ([link](https://huggingface.co/inclusionAI/Ling-2.6-1T)) – inclusionAI, 92 likes, 393 downloads. A massive 1T-parameter text-generation model using a hybrid architecture (bailing_hybrid), targeting extreme scalability.

- **talkie-lm/talkie-1930-13b-it** ([link](https://huggingface.co/talkie-lm/talkie-1930-13b-it)) – talkie-lm, 187 likes, 0 downloads. A 13B instruction-tuned model with a specific 1930s “talkie” aesthetic; a niche but culturally interesting release.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **Qwen/Qwen3.6-35B-A3B** ([link](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)) – Qwen, 1,553 likes, 2.2M downloads. The top multimodal download this week: a 35B total / 3B active MoE vision-language model, extremely popular for its efficiency and quality.

- **Qwen/Qwen3.6-27B** ([link](https://huggingface.co/Qwen/Qwen3.6-27B)) – Qwen, 1,056 likes, 907k downloads. The dense 27B version of Qwen3.6; strong performer in image-text-to-text tasks, widely adopted.

- **google/gemma-4-31B-it** ([link](https://huggingface.co/google/gemma-4-31B-it)) – google, 2,464 likes, 7.5M downloads. Google’s latest Gemma-4 instruction-tuned multimodal model; highest download count on the leaderboard, signaling massive open-weight confidence.

- **nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16** ([link](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)) – nvidia, 186 likes, 35k downloads. An any-to-any reasoning model (30B total, 3B active) from Nvidia, capable of processing and generating across multiple modalities.

- **XiaomiMiMo/MiMo-V2.5-Pro** ([link](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)) – XiaomiMiMo, 351 likes, 7.9k downloads. Xiaomi’s Pro variant of MiMo V2.5, an agent-optimized model with long-context support.

- **XiaomiMiMo/MiMo-V2.5** ([link](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)) – XiaomiMiMo, 181 likes, 21k downloads. The base variant of MiMo V2.5, focusing on vision-language and audio processing.

- **sensenova/SenseNova-U1-8B-MoT** ([link](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)) – sensenova, 105 likes, 1.1k downloads. A compact 8B any-to-any multimodal model (SenseTime’s Neo Chat series), optimized for on-device or edge deployment.

- **inclusionAI/LLaDA2.0-Uni** ([link](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)) – inclusionAI, 239 likes, 917 downloads. A diffusion + Transformer any-to-any model in the LLaDA2.0 MoE family, exploring novel architectures for unified generation.

- **z-lab/Qwen3.6-27B-DFlash** ([link](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)) – z-lab, 194 likes, 14.8k downloads. A community fine-tune of Qwen3.6 with “DFlash” optimization for faster inference.

- **facebook/sapiens2** ([link](https://huggingface.co/facebook/sapiens2)) – facebook, 107 likes, 0 downloads. A human-centric vision transformer model from Meta (Sapiens series, arxiv:2604.21681); trending for its novel 2D/3D human understanding capabilities.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **openai/privacy-filter** ([link](https://huggingface.co/openai/privacy-filter)) – openai, 1,178 likes, 92.6k downloads. A token-classification model designed to detect and filter PII; trending due to rising enterprise and regulatory compliance demands.

- **mistralai/Mistral-Medium-3.5-128B** ([link](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)) – mistralai, 200 likes, 6.8k downloads. Mistral’s 128B medium-tier model, supporting English and French, optimized for vLLM — a bridge between open-weight and high-end proprietary performance.

- **AngelSlim/Hy-MT1.5-1.8B-1.25bit** ([link](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)) – AngelSlim, 69 likes, 470 downloads. A 1.25-bit extreme quantization of a 1.8B translation model (Hy-MT, based on Hunyuan), pushing the limits of compression for machine translation.

- **inclusionAI/Ling-2.6-flash** ([link](https://huggingface.co/inclusionAI/Ling-2.6-flash)) – inclusionAI, 135 likes, 897 downloads. A faster “flash” variant of the Ling-2.6 hybrid model (MIT licensed), designed for low-latency inference.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **unsloth/Qwen3.6-35B-A3B-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)) – unsloth, 881 likes, 1.9M downloads. The most popular GGUF quantization this week; enables running Qwen3.6-35B-A3B on consumer hardware.

- **unsloth/Qwen3.6-27B-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)) – unsloth, 531 likes, 921k downloads. GGUF variant of Qwen3.6-27B; the go-to choice for CPU and low-VRAM inference.

- **unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF** ([link](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)) – unsloth, 90 likes, 32.6k downloads. GGUF quant of Nvidia’s any-to-any reasoning model, enabling local multimodal inference.

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)) – HauhauCS, 519 likes, 728k downloads. An “uncensored” fine-tune of Qwen3.6-35B-A3B with an aggressive personality; significant community interest in unfiltered variants.

- **HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive** ([link](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)) – HauhauCS, 252 likes, 287k downloads. Dense version of the uncensored Qwen3.6 fine-tune; popular for role-play and unfiltered creative tasks.

- **AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16** ([link](https://huggingface.co/AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16)) – AEON-7, 74 likes, 3.8k downloads. Another “abliterated” (uncensored) Qwen3.6 variant, this time in full BF16 precision.

- **kai-os/Carnice-V2-27b-GGUF** ([link](https://huggingface.co/kai-os/Carnice-V2-27b-GGUF)) – kai-os, 75 likes, 32k downloads. A community GGUF of the Carnice V2 model (based on Qwen3.6 architecture), optimized for llama.cpp and local inference.

## 3. Ecosystem Signal

**Qwen3.6 has become the dominant foundation model family** in the open-weight space this cycle, surpassing even DeepSeek in download velocity. With both Qwen and third-party quantizers (unsloth, HauhauCS, AEON-7) producing multiple variants, the Qwen ecosystem has achieved a **“Linux-like” distribution model**: a central base model with diverse community forks optimized for different use cases. This decentralization is a strong signal of community maturity.

**Any-to-any models are the next frontier.** The simultaneous trending of Nvidia Nemotron-3, InclusionAI LLaDA2.0-Uni, and SenseTime SenseNova-U1 suggests that the market is ready for models that don’t restrict input/output modality — a shift from “vision-language” to truly unified interfaces.

**Uncensored fine-tuning is a persistent subculture.** The popularity of the HauhauCS and AEON-7 Qwen3.6 variants (combined 1M+ downloads) shows a strong and consistent demand for models without safety guardrails, despite formal alignment efforts by original developers.

**Quantization coverage is now table stakes.** unsloth continues to dominate GGUF conversion, but the trend of **multi-precision support** (BF16, GGUF, 1.25-bit) means that any popular base model is now expected to be available at multiple compression levels within days of release.

## 4. Worth Exploring

1. **google/gemma-4-31B-it** ([link](https://huggingface.co/google/gemma-4-31B-it)) – With 7.5M downloads and the second-highest likes (2,464), this is the model to study for **Google’s latest open-weight strategy**. It offers a strong balance of multimodal capability, safety alignment, and permissive licensing. If you can only run one model this week, this is the one.

2. **inclusionAI/LLaDA2.0-Uni** ([link](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)) – This is the most architecturally **innovative** model on the list: a diffusion + transformer MoE that handles any modality in and any modality out. It has only 917 downloads, so early adopters have a chance to explore a potentially disruptive paradigm before it goes mainstream.

3. **nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16** ([link](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)) – Nvidia’s **any-to-any reasoning model** with a 3B active parameter count is ideal for studying how reasoning chains can be preserved across modalities (text, image, audio, video). Its GGUF variant makes it practical to run locally, and it represents a strong competitor to the Qwen multimodal monopoly.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*