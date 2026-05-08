# Hugging Face Trending Models Digest 2026-05-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-08 04:19 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-05-08

## 1. Today's Highlights

This week's trending landscape is overwhelmingly dominated by **Qwen 3.6** and **Gemma 4** model families, which together account for nearly half of the top 30. The Qwen 3.6-35B-A3B MoE variant leads in raw downloads (3.2M), while Google's Gemma-4-31B-it is the most-liked model on the list with 2,558 weekly likes. The release of **DeepSeek-V4-Pro** (3,727 likes, 946K downloads) signals a major push in large-scale text-generation from DeepSeek. Notably, the ecosystem is seeing a surge in **any-to-any** multimodal models (Gemma-4 assistant variants, Nemotron-3 Nano Omni) and **zero-shot voice cloning** with OmniVoice crossing 2.2M downloads. Community fine-tuning activity is high, with uncensored and abliterated variants of flagship models gaining traction.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai · 3,727 likes · 946K downloads  
  A flagship 128B-scale text-generation model from DeepSeek, trending due to its conversational capabilities and strong community adoption.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — deepseek-ai · 986 likes · 751K downloads  
  A faster, more lightweight variant of DeepSeek-V4 optimized for real-time text generation, popular for its speed-to-quality ratio.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** — XiaomiMiMo · 473 likes · 20.9K downloads  
  A long-context agent-capable model from Xiaomi, gaining attention for its efficient architecture and agentic task performance.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** — poolside · 232 likes · 16.8K downloads  
  A compact text-generation model from poolside, designed for efficient deployment while maintaining strong reasoning capabilities.

- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** — ibm-granite · 162 likes · 24.1K downloads  
  IBM's latest 8B enterprise-grade LLM, trending for its reliability in language tasks and enterprise deployment readiness.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — Qwen · 1,661 likes · 3.2M downloads  
  A 35B-parameter MoE image-text-to-text model with 3B active parameters, dominating downloads due to its efficiency and multimodal strength.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google · 2,558 likes · 8.6M downloads  
  Google's flagship 31B multimodal model, the most-downloaded model this week, excelling in image-text-to-text and conversational tasks.

- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — google · 945 likes · 5.5M downloads  
  An extreme-scale Gemma 4 variant (likely 4-trillion-parameter MoE), trending for its unprecedented size and any-to-any capabilities.

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — SulphurAI · 387 likes · 71.1K downloads  
  A text-to-video generation model with GGUF support, gaining popularity for its efficient video synthesis pipeline.

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** — SeeSee21 · 225 likes · 4.5K downloads  
  A specialized anime-themed text-to-image model, trending in the creative community for its stylistic output quality.

- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** — TenStrip · 154 likes · 28.2K downloads  
  An image-to-video model optimized for high-frame-rate video generation, popular for creative video production workflows.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — nvidia · 263 likes · 65.1K downloads  
  NVIDIA's 30B MoE model with 3B active parameters, supporting any-to-any multimodal reasoning with strong performance.

- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — k2-fsa · 801 likes · 2.2M downloads  
  A zero-shot multilingual voice cloning and text-to-speech model, highly trending for its high-quality voice synthesis capabilities.

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** — circlestone-labs · 1,210 likes · 458K downloads  
  A diffusion-based single-file model for ComfyUI workflows, popular among the generative AI art community.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** — Zyphra · 207 likes · 539 downloads  
  An Apache-2.0 licensed 8B model with published evaluation results, notable for its transparent benchmarking approach.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** — sensenova · 192 likes · 2.7K downloads  
  A multimodal any-to-any model with MoT (Mixture-of-Thought) reasoning, gaining interest for its novel reasoning architecture.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** — z-lab · 262 likes · 28.8K downloads  
  A fine-tuned Qwen 3.6 variant optimized for "DFlash" flash attention patterns, trending for its specialized inference optimizations.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — Qwen · 1,178 likes · 1.8M downloads  
  The full-precision base 27B multimodal model from Qwen, widely used as a foundation for community fine-tunes.

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** — dealignai · 1,487 likes · 169.5K downloads  
  An abliterated and uncensored fine-tune of Gemma-4-31B, highly controversial but massively popular for unrestricted use cases.

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** — unsloth · 618 likes · 1.3M downloads  
  Unsloth's GGUF quantization of Qwen 3.6-27B, enabling efficient CPU and low-memory GPU inference.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — unsloth · 957 likes · 2.4M downloads  
  The GGUF version of the popular Qwen 3.6 MoE model, one of the most downloaded quantized models this week.

- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)** — Jackrong · 103 likes · 104.7K downloads  
  A merged fine-tune combining Qwen 3.5 and DeepSeek V4 Flash capabilities in GGUF format, demonstrating community model merging trends.

- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** — DavidAU · 93 likes · 126.7K downloads  
  An aggressively uncensored fine-tune of Qwen 3.6 with code specialization and multi-quantization support.

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** — google · 142 likes · 19.9K downloads  
  An assistant-tuned variant of Gemma-4-31B optimized for any-to-any task completion, including text and image understanding.

- **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** — talkie-lm · 245 likes · 0 downloads  
  An instruction-tuned 13B model with Apache-2.0 license, notable for its specific "1930" instruction-tuning dataset.

## 3. Ecosystem Signal

**Model Family Dominance:** The Qwen 3.6 and Gemma 4 families represent the two dominant ecosystems this week. Qwen's MoE approach (3.6-35B-A3B) and Gemma's extreme-scale architectures (E4B, 31B) are driving the most community engagement. DeepSeek V4 is establishing itself as a strong third pillar, particularly at the 128B scale.

**Multimodal Shift:** The trend toward **any-to-any** models is accelerating: 5 of the top 30 models now support arbitrary input/output modalities (Gemma-4 assistant variants, Nemotron-3, SenseNova-U1). This indicates a market shift away from pure text generation toward unified multimodal interfaces.

**Community Fine-Tuning Intensity:** The "abliteration" trend continues strongly, with uncensored variants of Gemma-4 and Qwen 3.6 receiving high engagement. The GGUF ecosystem remains vibrant, with Unsloth quantizations of flagship models consistently among the most downloaded.

**Voice & Audio Growth:** OmniVoice's 2.2M downloads and zero-shot voice cloning capability suggest that speech generation is becoming a mainstream use case, comparable to text and image generation in adoption.

## 4. Worth Exploring

1. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — With 5.5M downloads and any-to-any capabilities, this extreme-scale model represents Google's current frontier in multimodal AI. Studying its architecture and outputs offers insights into the future of truly unified models.

2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — 801 likes and 2.2M downloads make this zero-shot voice cloning model a must-try. Its multilingual support and quality make it a strong candidate for production voice synthesis pipelines.

3. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** — While controversial, this abliterated Gemma-4 fine-tune with 1,487 likes demonstrates the community's appetite for unrestricted models and offers technical insights into safety bypass techniques.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*