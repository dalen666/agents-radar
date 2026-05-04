# Hugging Face Trending Models Digest 2026-05-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-04 04:43 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-05-04

## Today's Highlights

This week's trending leaderboard is dominated by a new wave of multimodal and vision-language models, with **Google's Gemma-4-31B-it**, **Qwen's Qwen3.6 series**, and **DeepSeek-V4-Pro** capturing the most community attention. The rise of *any-to-any* architectures (NVIDIA's Nemotron-3 Nano Omni family) and *image-text-to-text* pipelines signals a clear shift toward unified multimodal models. Fine-tuning and quantization ecosystems remain hyperactive, with Unsloth delivering GGUF versions of top models (Qwen3.6-27B, Qwen3.6-35B-A3B, Nemotron-3) at massive scale, while uncensored/abliterated variants (e.g., Gemma-4-31B-JANG_4M-CRACK, HauhauCS's Qwen3.6-27B) demonstrate sustained demand for unconstrained model behavior. Notably, inclusionAI's **Ling-2.6** series debuts with a hybrid architecture approach, and MoE continues to trend with Qwen3.6-35B-A3B and SenseNova-U1-8B-MoT.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — by deepseek-ai, 3,480 likes, 457K downloads  
  The flagship 2026 LLM from DeepSeek, trending as the most-liked model on the hub for its conversational and reasoning capabilities.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — by deepseek-ai, 930 likes, 414K downloads  
  A faster, more efficient variant of DeepSeek-V4, drawing attention for high-quality text generation at reduced inference cost.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** — by XiaomiMiMo, 411 likes, 11K downloads  
  Xiaomi's long-context agent-optimized Pro LLM, trending for its agent-friendly design and extended context window.

- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)** — by XiaomiMiMo, 200 likes, 45K downloads  
  The base multimodal variant of MiMo 2.5, gaining traction for vision-language and audio understanding in a single model.

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** — by mistralai, 245 likes, 9.5K downloads  
  Mistral's latest 128B parameter model with bilingual (EN/FR) support, trending as a strong open-weight competitor in the dense LLM space.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** — by poolside, 199 likes, 9.2K downloads  
  A code-focused text-generation model from Poolside, attracting developer interest for code generation and reasoning tasks.

- **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** — by talkie-lm, 214 likes, 0 downloads  
  Instruction-tuned 13B model with a vintage 1930s conversational style, trending for its niche personality-driven persona.

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)** — by inclusionAI, 163 likes, 1K downloads  
  A hybrid flash LLM from InclusionAI, trending for its efficient "bailing_hybrid" architecture optimized for fast inference.

- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** — by inclusionAI, 110 likes, 642 downloads  
  The massive 1-trillion-parameter variant of Ling-2.6, intriguing the community with its extreme scale and dense hybrid design.

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** — by ibm-granite, 142 likes, 17K downloads  
  IBM's latest 8B enterprise-grade LLM, trending for its reliability and strong language understanding in business contexts.

- **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)** — by ibm-granite, 87 likes, 3.5K downloads  
  The larger 30B sibling in the Granite 4.1 family, gaining enterprise interest for scalable deployment.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** — by z-lab, 218 likes, 21.7K downloads  
  A distilled flash variant of Qwen3.6-27B, popular for achieving high throughput while retaining vision-language capabilities.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — by Qwen, 1,104 likes, 1.2M downloads  
  The flagship 27B vision-language model from Qwen, trending massively for strong image-text-to-text performance and conversational use.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — by Qwen, 1,594 likes, 2.6M downloads  
  Qwen's 35B MoE vision-language model (3B active parameters), the most-downloaded new release, trending for efficient multimodal inference.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** — by moonshotai, 1,190 likes, 756K downloads  
  Moonshot AI's latest vision-language model with compressed tensor techniques, surging in popularity for its balance of quality and efficiency.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — by google, 2,493 likes, 7.9M downloads  
  Google's newest Gemma series instruction-tuned model with vision-language support, the highest-downloaded model this week by a large margin.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — by nvidia, 206 likes, 38.9K downloads  
  NVIDIA's any-to-any reasoning model (30B with 3B active), trending for omni-modal input/output capability and MoE efficiency.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** — by nvidia, 78 likes, 221K downloads  
  FP4-quantized variant of the Nemotron omni model, trending for extreme compression while retaining multimodal quality.

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — by SulphurAI, 125 likes, 332 downloads  
  A text-to-video diffusion model attracting attention for its GGUF-compatible video generation pipeline.

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** — by SeeSee21, 117 likes, 1.6K downloads  
  A text-to-image anime-focused model, trending in the creative community for specialized anime generation.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** — by sensenova, 129 likes, 1.5K downloads  
  A mixture-of-thought multimodal model (any-to-any), trending for its novel reasoning architecture combining MoE and chain-of-thought.

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** — by HauhauCS, 274 likes, 321K downloads  
  An uncensored, aggressive variant of Qwen3.6-27B, highly popular among users seeking unrestricted multimodal generation.

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** — by dealignai, 1,458 likes, 203K downloads  
  An abliterated/uncensored version of Gemma-4-31B, trending virally for removing safety filters on Google's latest model.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — by openai, 1,236 likes, 105K downloads  
  OpenAI's token classification model for detecting and redacting PII, trending as the go-to privacy tool for production pipelines.

- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)** — by ibm-granite, 74 likes, 1.8K downloads  
  A multilingual embedding model from IBM with ONNX and OpenVINO support, gaining traction for RAG and semantic search.

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** — by AngelSlim, 83 likes, 599 downloads  
  An extreme quantization (1.25-bit) translation model, trending for pushing the boundaries of ultra-low-bit machine translation.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** — by unsloth, 559 likes, 1.0M downloads  
  Unsloth's GGUF quantization of Qwen3.6-27B, massively downloaded for enabling local deployment of this vision-language model.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — by unsloth, 904 likes, 2.1M downloads  
  The GGUF version of Qwen's MoE model, trending as the go-to quantized multimodal MoE for consumer hardware.

- **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** — by unsloth, 96 likes, 41.4K downloads  
  GGUF variant of NVIDIA's omni-reasoning model, bringing any-to-any capabilities to local inference.

---

## Ecosystem Signal

The current trending landscape reveals **three major shifts**:

1. **Multimodal is the new default**: Nearly every top model now supports image-text-to-text or any-to-any pipelines. Single-modality text models are increasingly rare among high-traffic releases. Google's Gemma-4-31B-it and Qwen3.6-35B-A3B represent the explosive growth of vision-language models, with the latter's MoE design enabling deployment on mid-range hardware.

2. **Mixture-of-Experts (MoE) becomes mainstream**: Qwen3.6-35B-A3B, NVIDIA's Nemotron-3 Nano Omni, and SenseNova-U1-8B-MoT all leverage MoE to deliver high parameter counts with low active inference costs. This architecture is now a standard strategy for balancing quality and efficiency.

3. **Quantization is table stakes**: The Unsloth ecosystem continues to dominate with GGUF variants of every major release. The extreme quantization frontier (1.25-bit, FP4) shows growing demand for running large models on consumer hardware. Meanwhile, the open-weight release ecosystem remains vibrant, with organizations like DeepSeek, Qwen, Google, and Mistral all contributing actively — though **Google's Gemma-4** and **DeepSeek-V4** have overtaken Mistral in community traction this cycle.

The uncensored/abliterated fine-tuning trend (HauhauCS, dealignai) signals an enduring appetite for unfiltered model variants, despite corporate safety alignment efforts.

---

## Worth Exploring

1. **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** — This compressed-tensor vision-language model from Moonshot AI is worth studying for its impressive balance of quality and efficiency. Its 756K downloads and 1,190 likes in a short window suggest it may become a strong baseline for multimodal applications, especially given the "feature-extraction" tag hinting at embedding-quality representations.

2. **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** — At 1 trillion parameters with a "bailing_hybrid" architecture, this model is a fascinating outlier. While it has only 642 downloads, its extreme scale and novel dense-hybrid approach could yield surprising capabilities for researchers willing to experiment with inference infrastructure.

3. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** — With 221K downloads and an any-to-any pipeline, this FP4-quantized model demonstrates the bleeding edge of compression. It's worth testing for deployers who need omni-modal input/output (text, image, audio) on constrained hardware, and for understanding how far low-bit quantization can go on complex multimodal tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*