# Hugging Face Trending Models Digest 2026-05-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-07 04:37 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-05-07**.

---

## 1. Today’s Highlights

This week’s trending models reveal a clear shift toward **multimodal MoE architectures** and **aggressive quantization ecosystems**. **Qwen** continues to dominate with the release of the Qwen3.6-35B-A3B, a massive 35B parameter MoE model that has already amassed over 3 million downloads, while **DeepSeek’s V4-Pro** and **V4-Flash** solidify their position as top-tier text-generation contenders. **Google’s Gemma-4-31B-it** is the standout in image-text-to-text, marked by the highest download count of the week (8.4M) and spawning numerous uncensored and fine-tuned variants. Meanwhile, **Moonshot AI’s Kimi-K2.6** signals growing interest in compressed tensors and efficient deployment. The ecosystem is buzzing with GGUF quantization efforts, particularly around Qwen models, and a notable rise in “any-to-any” and multimodal assistant models from both Google and Nvidia.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  *Author:* deepseek-ai | *Likes:* 3,667 | *Downloads:* 786k  
  Top trending model this week; a state-of-the-art conversational LLM from DeepSeek’s V4 family, driving massive adoption for both research and production.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  *Author:* deepseek-ai | *Likes:* 968 | *Downloads:* 668k  
  A faster, optimized variant of DeepSeek-V4, trending due to its balance of speed and quality for real-time chat applications.

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**  
  *Author:* mistralai | *Likes:* 284 | *Downloads:* 16k  
  A 128B parameter multilingual model (en/fr) with vLLM support, gaining traction for high-capacity European language tasks.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**  
  *Author:* XiaomiMiMo | *Likes:* 460 | *Downloads:* 16k  
  Xiaomi’s latest agent-oriented LLM with long-context capabilities; trending for its focus on agentic workflows and smart device integration.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**  
  *Author:* poolside | *Likes:* 228 | *Downloads:* 14k  
  A compact code-focused text-generation model from poolside, gaining developer interest for efficient software automation.

- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**  
  *Author:* inclusionAI | *Likes:* 422 | *Downloads:* 1.2k  
  A massive 1T parameter hybrid conversational model; trending for its scale and “bailing_hybrid” architecture, representing the frontier of ultra-large open-weight models.

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** & **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)**  
  *Author:* ibm-granite | *Likes:* 161 / 102 | *Downloads:* 21k / 7k  
  IBM’s latest Granite enterprise language models, trending for their reliability and enterprise-grade safety in text-generation tasks.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  *Author:* Qwen | *Likes:* 1,158 | *Downloads:* 1.6M  
  A powerful image-text-to-text model; trending as a versatile multimodal workhorse for vision-language tasks.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  *Author:* Qwen | *Likes:* 1,650 | *Downloads:* 3.0M  
  A Mixture-of-Experts (MoE) variant of Qwen3.6 with only 3B active parameters; highly popular due to its efficiency-accuracy trade-off for multimodal reasoning.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  *Author:* google | *Likes:* 2,542 | *Downloads:* 8.4M  
  Google’s flagship instruction-tuned multimodal model this week; highest downloads overall, dominating the image-text-to-text category.

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** & **[google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant)**  
  *Author:* google | *Likes:* 126 / 76 | *Downloads:* 4k / 1.9k  
  Google’s “any-to-any” assistant models built on Gemma-4; trending for their universal input-output modality support.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
  *Author:* nvidia | *Likes:* 255 | *Downloads:* 53k  
  A 30B MoE reasoning model with only 3B active parameters for any-to-any tasks; trending for Nvidia’s push into efficient omni-modal reasoning.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**  
  *Author:* sensenova | *Likes:* 163 | *Downloads:* 2.4k  
  A multimodal any-to-any model from SenseTime; gaining attention for its Mixture-of-Transformers architecture.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
  *Author:* moonshotai | *Likes:* 1,215 | *Downloads:* 997k  
  Moonshot’s compressed image-text-to-text model; trending for its “compressed-tensors” approach, reducing deployment costs while maintaining quality.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  *Author:* openai | *Likes:* 1,328 | *Downloads:* 155k  
  A token-classification model for detecting and filtering private information; trending due to heightened focus on AI safety and compliance.

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**  
  *Author:* AngelSlim | *Likes:* 99 | *Downloads:* 16k  
  An extreme quantization (1.25-bit) translation model; trending for pushing the boundaries of model compression in machine translation.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
  *Author:* dealignai | *Likes:* 1,482 | *Downloads:* 182k  
  An uncensored, “abliterated” fine-tune of Gemma-4-31B; trending strongly for users seeking unrestricted model behavior.

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**  
  *Author:* unsloth | *Likes:* 601 | *Downloads:* 1.2M  
  Unsloth’s GGUF quant of Qwen3.6-27B; one of the most downloaded quantized models, enabling efficient local deployment.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  *Author:* unsloth | *Likes:* 946 | *Downloads:* 2.3M  
  The GGUF version of the 35B MoE variant; extremely popular due to its low active parameter count and ease of use on consumer hardware.

- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**  
  *Author:* Jackrong | *Likes:* 98 | *Downloads:* 85k  
  A merged quantization combining Qwen3.5 and DeepSeek-V4-Flash; trending for demonstrating model merging techniques with GGUF.

- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**  
  *Author:* DavidAU | *Likes:* 84 | *Downloads:* 106k  
  An extremely long-name fine-tune that is uncensored and code-focused; notable for its experimental “IMatrix” quantization approach.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author:* HauhauCS | *Likes:* 570 | *Downloads:* 913k  
  An uncensored, aggressively fine-tuned MoE vision model based on Qwen3.6-35B; trending for its high download count and unfiltered performance.

---

## 3. Ecosystem Signal

Several clear signals emerge from this week’s rankings. **MoE (Mixture-of-Experts) architectures** are the dominant paradigm, with both Qwen’s 35B-A3B and Nvidia’s Nemotron-3 Nano-Omni leading in adoption — users clearly prefer models that deliver high capability with low active parameter counts. **Open-weight models from Qwen, DeepSeek, and Google** are effectively setting the benchmark, while proprietary alternatives (e.g., Mistral, Xiaomi) remain relevant but at a smaller scale. The **GGUF quantization ecosystem** is robust, with Unsloth emerging as a key infrastructure player, converting nearly every major Qwen and DeepSeek variant into deployable formats. Community fine-tuning activity is heavily focused on **uncensored and “abliterated” variants** of Gemma-4 and Qwen3.6, suggesting a strong demand for unrestricted models. The rise of **“any-to-any” models** (Gemma-4-assistant, SenseNova, Nemotron) points toward a convergence of modalities, where future models will handle text, image, video, and audio natively. Finally, compressed tensors (Kimi-K2.6) and extreme quantization (Hy-MT1.5-1.25bit) indicate a growing community interest in **deployment efficiency**, especially for edge and mobile use cases.

---

## 4. Worth Exploring

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** – With over 8.4 million downloads and strong support from the fine-tuning community, this model is the definitive multimodal baseline of the week. It’s worth studying for its architecture and as a base for further experimentation.

2. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** – The combination of 35B total parameters with only 3B active makes this MoE model a must-try for anyone building multimodal applications on limited hardware. Its massive download count speaks to its effectiveness.

3. **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** – As a “compressed-tensors” model, Kimi-K2.6 represents a novel approach to efficiency that differs from traditional quantization. It’s worth exploring for teams looking to deploy high-quality vision-language models without the GPU overhead.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*