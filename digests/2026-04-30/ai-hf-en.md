# Hugging Face Trending Models Digest 2026-04-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-30 04:36 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-04-30**.

---

## 1. Today's Highlights

This week marks a decisive shift toward **unified multimodal architectures**, with the top five models all handling both text and vision natively. **Google’s Gemma-4-31B-it** leads absolute engagement with over **6.5 million downloads**, while **Qwen’s 3.6 family** continues to dominate volume across base, MoE, and quantized variants. The **DeepSeek-V4-Pro** surge (3,246 likes) signals a strong community appetite for frontier-level open-weight chat models, and **unsupervised fine-tuning** via Unsloth remains the dominant distribution channel, powering seven of the top 30 entries.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *deepseek-ai* | 3,246 likes | 174k downloads  
  The week’s most-liked model; a flagship conversational LLM with strong reasoning and long-context support.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — *deepseek-ai* | 858 likes | 97k downloads  
  A faster, MIT-licensed sibling of V4-Pro, optimized for low-latency inference.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — *google* | 2,438 likes | **6.6M downloads**  
  Google’s most downloaded open model ever; a 31B instruction-tuned multimodal LLM with broad ecological support.

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** — *zai-org* | 1,560 likes | 256k downloads  
  A MoE-based conversational model with a novel “DSA” attention mechanism, gaining rapid traction.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** — *XiaomiMiMo* | 296 likes | 396 downloads  
  A long-context agent-oriented model; low volume but strong niche interest in extended reasoning.

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** — *mistralai* | 118 likes | 227 downloads  
  A 128B bilingual (EN/FR) base model from Mistral; early-stage but significant for European LLM development.

- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** — *tencent* | 185 likes | 7.7k downloads  
  Tencent’s latest conversational model preview, expanding the Asian LLM ecosystem.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — *Qwen* | 1,008 likes | 509k downloads  
  The flagship dense multimodal model from the Qwen3.6 series; strong vision-language performance.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — *Qwen* | 1,516 likes | **1.5M downloads**  
  A 35B total / 3B active MoE variant; the most downloaded Qwen3.6 release, balancing quality and efficiency.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** — *moonshotai* | 1,154 likes | 489k downloads  
  A compressed multimodal model with a feature-extraction pipeline; Moonshot’s strongest show yet.

- **[Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)** — *Qwen* | 165 likes | 745k downloads  
  FP8 quantized version of Qwen3.6-27B, enabling deployment on consumer-grade hardware.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — *nvidia* | 152 likes | 9.8k downloads  
  A 30B-parameter MoE omni model with reasoning capabilities; Nvidia’s push into efficient multimodal.

- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** — *facebook* | 97 likes | 0 downloads  
  A human-centric vision transformer from Meta (arXiv:2604.21681); emerging for pose/segmentation.

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — *inclusionAI* | 235 likes | 506 downloads  
  A unified any-to-any model combining diffusion and transformer for cross-modal generation.

- **[Lightricks/LTX-2.3-22b-IC-LoRA-HDR](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-HDR)** — *Lightricks* | 71 likes | 0 downloads  
  An image-to-video LoRA with HDR support; early release for creative video generation.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** — *sensenova* | 71 likes | 74 downloads  
  An 8B mixture-of-thoughts multimodal model; compact contender for on-device vision-language.

---

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — *openai* | 1,093 likes | 57.7k downloads  
  A token-classification ONNX model for redacting PII; notable as OpenAI’s first dedicated safety filter.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** — *poolside* | 138 likes | 15 downloads  
  A vLLM-compatible code generation model; niche but strong interest in software-specific LLMs.

- **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** — *talkie-lm* | 156 likes | 0 downloads  
  An instruction-tuned 13B model with Apache-2.0 license; notable for its “talkie” conversational approach.

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)** — *inclusionAI* | 82 likes | 29 downloads  
  A lightweight hybrid model with custom code; aimed at efficient English-language inference.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** — *unsloth* | 499 likes | 702k downloads  
  The official Unsloth GGUF quant of Qwen3.6-27B; the most accessible local deployment option for this model.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — *unsloth* | 865 likes | **1.7M downloads**  
  The highest-download model this week; MoE quantization enabling the 35B model to run on 8 GB VRAM.

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | 236 likes | 215k downloads  
  An uncensored, “aggressive” fine-tune of Qwen3.6-27B; popular for creative/roleplay use cases.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | 501 likes | 579k downloads  
  The MoE variant of the above; uncensored with significantly higher throughput.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** — *z-lab* | 163 likes | 7.6k downloads  
  A “DFlash” feature-extraction fine-tune; targets retrieval and embedding quality improvements.

- **[Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF)** — *Jackrong* | 90 likes | 48k downloads  
  A community GGUF merge of Qwen3.6 and vision capabilities; early preview with decent adoption.

- **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** — *unsloth* | 76 likes | 0 downloads  
  Unsloth’s GGUF of the Nvidia omni model; newly uploaded with zero downloads yet.

---

## 3. Ecosystem Signal

**Qwen 3.6 has become the clear ecosystem anchor** this cycle, accounting for **7 of the top 30 models** and over **4 million total downloads** across dense, MoE, GGUF, and fine-tuned variants. The MoE trend intensifies: models like Qwen3.6-35B-A3B, GLM-5.1, and Nvidia’s Nemotron-3 all use sparse activation to deliver frontier quality with reduced compute, and their quantization variants (Unsloth, FP8) are the most downloaded items on the hub. **DeepSeek V4** has reclaimed the attention lead (3,246 likes), suggesting that the open-weight frontier is no longer single-player—Qwen, Google, and DeepSeek are now competing head-to-head. **Uncensored fine-tuning** (HauhauCS) and **GGUF quantization** (Unsloth) remain the primary community contribution vectors, indicating that the user base prioritizes local, unfiltered deployment. On the proprietary side, **OpenAI**’s solitary safety filter and **Nvidia**’s omni model suggest that big players are still testing the waters rather than committing fully to open releases.

---

## 4. Worth Exploring

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With **6.6 million downloads** in its first week, this is the strongest signal yet of Google committing to open-weight leadership. Its instruction-tuned multimodal performance and broad ecosystem support make it essential for both practitioners and researchers.

2. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The **sweet spot of quality-to-efficiency**. At 3B active parameters, it runs on consumer hardware while matching much larger models. Its 1.5 million downloads reflect real-world utility for local deployment and fine-tuning.

3. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — As **OpenAI’s first openly published model** on Hugging Face, this is a strategic signal. The PII redaction use case is critical for compliance, and the ONNX format makes it deployable in production pipelines immediately. Worth studying for both technical and ecosystem reasons.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*