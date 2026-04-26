# Hugging Face Trending Models Digest 2026-04-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-26 09:06 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-04-26**.

---

## 1. Today's Highlights

This week’s trending list is defined by a major showdown between **DeepSeek V4** and **Qwen 3.6**, with both families delivering massive multimodal and reasoning improvements. Google’s **Gemma-4-31B-it** has exploded in downloads (over 6 million), signaling a strong appetite for medium-sized, open-weight instruction models. The community is also heavily engaged in fine-tuning and quantizing these new models, with **Unsloth** and **z-lab** providing high-performing GGUF and DFIash variants. Notably, **inclusionAI**’s **LLaDA2.0-Uni** introduces a novel "any-to-any" modality pipeline, while **Tencent** pushes the frontier of **image-to-3D** world modeling.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **deepseek-ai/DeepSeek-V4-Pro**  
  Author: deepseek-ai | Likes: 2,737 | Downloads: 123,431  
  The flagship text-generation model from DeepSeek, leading the week in likes and showcasing the next evolution in their V4 series.

- **deepseek-ai/DeepSeek-V4-Flash**  
  Author: deepseek-ai | Likes: 703 | Downloads: 45,986  
  A lighter, MIT-licensed sibling of V4-Pro optimized for speed, drawing attention for its permissive open license.

- **zai-org/GLM-5.1**  
  Author: zai-org | Likes: 1,516 | Downloads: 230,865  
  A powerful MoE-based conversational model from the GLM family, gaining traction for its efficient mixture-of-experts architecture.

- **MiniMaxAI/MiniMax-M2.7**  
  Author: MiniMaxAI | Likes: 1,067 | Downloads: 484,595  
  A strong text-generation contender from MiniMax, notable for high download velocity and conversational performance.

- **OBLITERATUS/gemma-4-E4B-it-OBLITERATED**  
  Author: OBLITERATUS | Likes: 509 | Downloads: 120,432  
  A community "abliterated" (uncensored) fine-tune of Gemma-4, reflecting strong demand for less-restricted variants.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **moonshotai/Kimi-K2.6**  
  Author: moonshotai | Likes: 1,039 | Downloads: 376,485  
  A leading image-text-to-text model from Moonshot AI, trending for its strong vision-language reasoning and compressed-tensor optimizations.

- **Qwen/Qwen3.6-35B-A3B**  
  Author: Qwen | Likes: 1,411 | Downloads: 1,181,968  
  A MoE variant of Qwen 3.6 with 35B total / 3B active parameters, by far the most downloaded model this week—ideal for cost-effective multimodal reasoning.

- **Qwen/Qwen3.6-27B**  
  Author: Qwen | Likes: 832 | Downloads: 329,571  
  The dense 27B version of Qwen 3.6, balancing size and performance for vision-language tasks.

- **google/gemma-4-31B-it**  
  Author: google | Likes: 2,365 | Downloads: 6,042,134  
  Google’s 31B instruction-tuned multimodal model, dominating downloads and proving the demand for open, capable mid-scale models.

- **openbmb/VoxCPM2**  
  Author: openbmb | Likes: 1,237 | Downloads: 99,542  
  A state-of-the-art multilingual text-to-speech model, trending for its high-quality voice synthesis capabilities.

- **baidu/ERNIE-Image**  
  Author: baidu | Likes: 566 | Downloads: 7,800  
  A text-to-image model (8B parameters, Apache-2.0) from Baidu, signaling competition in the open image generation space.

- **tencent/HY-World-2.0**  
  Author: tencent | Likes: 606 | Downloads: 2,969  
  An image-to-3D world model from Tencent, gaining attention for its novel approach to 3D scene generation.

- **nvidia/Lyra-2.0**  
  Author: nvidia | Likes: 274 | Downloads: 569  
  NVIDIA's latest image-to-3D model, linked to a new arXiv paper—a research-focused release worth watching.

- **inclusionAI/LLaDA2.0-Uni**  
  Author: inclusionAI | Likes: 180 | Downloads: 346  
  An "any-to-any" multimodal model (text, image, audio, video), representing a bold new paradigm in unified generation.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **openai/privacy-filter**  
  Author: openai | Likes: 793 | Downloads: 35,807  
  A token-classification model for detecting PII and sensitive data, trending as enterprises adopt LLMs and need guardrails.

- **z-lab/Qwen3.6-35B-A3B-DFlash**  
  Author: z-lab | Likes: 152 | Downloads: 26,760  
  A specialized "DFlash" variant of Qwen 3.6 MoE for optimized feature extraction and retrieval.

- **robbyant/lingbot-map**  
  Author: robbyant | Likes: 174 | Downloads: 0  
  A research model (arXiv:2604.14141) for linguistic robot mapping, niche but indicative of cross-domain model sharing.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **unsloth/Qwen3.6-35B-A3B-GGUF**  
  Author: unsloth | Likes: 775 | Downloads: 1,574,581  
  The most downloaded GGUF variant this week, making Qwen 3.6 MoE easily runnable on consumer hardware.

- **unsloth/Qwen3.6-27B-GGUF**  
  Author: unsloth | Likes: 409 | Downloads: 553,179  
  A GGUF-quantized version of Qwen 3.6-27B, popular for local deployment on mid-range GPUs.

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  Author: HauhauCS | Likes: 439 | Downloads: 460,832  
  An aggressive, uncensored fine-tune of Qwen 3.6 MoE—trending among users seeking less filtered outputs.

- **hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF**  
  Author: hesamation | Likes: 182 | Downloads: 117,163  
  A unique distill of Claude-style reasoning into Qwen 3.6 MoE, blended into a GGUF package.

- **Jackrong/Qwopus-GLM-18B-Merged-GGUF**  
  Author: Jackrong | Likes: 205 | Downloads: 75,797  
  A "frankenmerge" between Qwen and GLM, demonstrating the community’s creativity in model merging.

---

## 3. Ecosystem Signal

**Model Family Momentum:** The **Qwen 3.6** family (dense and MoE) is the most dominant force this week, with every variant from base to quantized to uncensored making the list. **DeepSeek V4** is the second strongest mover, particularly Pro and Flash variants. **Gemma-4-31B-it** from Google has achieved breakout download volumes, indicating that the market wants a reliable, official multimodal model at the 30B scale.

**Open-Weight vs Proprietary:** Open-weight models are overwhelmingly preferred. Every model on the list is either fully open or offers a permissive license (e.g., DeepSeek V4 Flash under MIT). The absence of proprietary API-only models in the top 30 confirms the community’s bias toward accessibility and local deployment.

**Quantization & Fine-Tuning Activity:** The ecosystem is obsessed with **GGUF** and MoE efficiency. Unsloth continues to dominate the quantization space, while community "uncensored" and "abliterated" fine-tunes (e.g., OBLITERATUS, HauhauCS) signal strong demand for reduced safety filters in local use cases. Merged models (Qwopus-GLM) also point to a maturing practice of model composition.

---

## 4. Worth Exploring

1. **inclusionAI/LLaDA2.0-Uni** – The "any-to-any" multimodal paradigm is a potential game-changer. If it delivers on unified input/output across text, image, and audio, it could reduce the need for separate models per modality.

2. **tencent/HY-World-2.0** – Image-to-3D world modeling is an emerging frontier. This model, combined with NVIDIA’s Lyra-2.0, suggests a growing ecosystem for 3D generation that developers should track closely.

3. **deepseek-ai/DeepSeek-V4-Flash** – The MIT license is a strong signal. If performance is close to V4-Pro, this could become the go-to open LLM for commercial applications seeking speed and cost-efficiency.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*