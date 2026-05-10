# Hugging Face Trending Models Digest 2026-05-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-10 04:49 UTC

---

# Hugging Face Trending Models Digest — 2026-05-10

## Today's Highlights

The Hugging Face ecosystem is dominated by multimodal and MoE (Mixture-of-Experts) model releases this week. **DeepSeek-V4-Pro** leads in both likes (3,789) and downloads (1.16M), showcasing continued dominance of the DeepSeek family in text generation. Qwen continues its rapid iteration with **Qwen3.6-27B** and **Qwen3.6-35B-A3B** (MoE variant), both seeing explosive download counts exceeding 2M and 3.5M respectively. Google's **Gemma-4** family expands with multiple variants (31B, 26B-A4B, E4B), signaling strong investment in efficient multimodal architectures. Notably, the **OmniVoice** text-to-speech model by k2-fsa (825 likes, 2.2M downloads) and **OpenAI's privacy-filter** (1,382 likes) reflect growing demand for specialized, real-world deployment models beyond pure language tasks.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 3,789 likes | 1,167,697 downloads  
  Top trending model this week, a powerful conversational text-generation model from DeepSeek's latest V4 series, driving significant community adoption.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — deepseek-ai | 1,011 likes | 957,448 downloads  
  The faster, more efficient sibling of DeepSeek-V4-Pro, optimized for lower latency inference while maintaining strong conversational quality.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** — XiaomiMiMo | 500 likes | 31,447 downloads  
  Xiaomi's latest long-context agent model, gaining traction for its extended context handling and agentic capabilities.

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** — mistralai | 309 likes | 29,683 downloads  
  A large bilingual (English/French) Mistral model optimized for vLLM deployment, representing Mistral's continued investment in European-language support.

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** — Zyphra | 332 likes | 23,620 downloads  
  A new Apache-2.0 licensed 8B model with published evaluation results and associated research paper (arxiv:2605.05365).

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — SulphurAI | 496 likes | 115,477 downloads  
  A text-to-video generation model using Diffusers, gaining rapid adoption for creative video content generation.

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — Qwen | 1,209 likes | 2,127,689 downloads  
  A multimodal image-text-to-text model from Qwen's 3.6 series, blending strong vision-language understanding with conversational abilities.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — Qwen | 1,694 likes | 3,511,378 downloads  
  The MoE variant of Qwen3.6 with 35B total parameters and 3B active, offering an excellent efficiency-quality tradeoff for multimodal tasks.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 2,576 likes | 8,894,303 downloads  
  Google's flagship multimodal model this week, with massive download numbers reflecting strong enterprise and community interest.

- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — google | 960 likes | 5,581,069 downloads  
  An any-to-any variant of Gemma-4, supporting multiple input and output modalities, attracting wide experimentation.

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** — google | 175 likes | 47,793 downloads  
  Assistant-optimized version of the Gemma-4-31B, fine-tuned for better conversational and instruction-following performance.

- **[google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant)** — google | 96 likes | 28,762 downloads  
  A smaller MoE assistant variant (26B total, 4B active) from the Gemma-4 family, balancing performance and compute efficiency.

- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** — TenStrip | 190 likes | 51,779 downloads  
  An image-to-video generation model, riding the wave of video generation interest with 10Eros capabilities.

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** — SeeSee21 | 273 likes | 8,433 downloads  
  A specialized anime-style text-to-image model, showing niche creative demand remains strong.

- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** — HiDream-ai | 115 likes | 21 downloads  
  An image-text-to-image model built on Qwen3 VL architecture, representing a new experimental approach to visual reasoning generation.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** — sensenova | 206 likes | 3,196 downloads  
  A multimodal any-to-any model with "Mixture of Transformers" architecture, pushing boundaries in unified multimodal processing.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — nvidia | 267 likes | 116,933 downloads  
  NVIDIA's omni-modal reasoning model with MoE efficiency (30B total, 3B active), targeting advanced multimodal understanding.

- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — k2-fsa | 825 likes | 2,233,532 downloads  
  A zero-shot multilingual voice cloning and text-to-speech model, surging in popularity for its high-quality voice synthesis capabilities.

- **[tencent/Hunyuan-T1.5-8B-Mini](https://huggingface.co/tencent/Hunyuan-T1.5-8B-Mini)** — tencent | 85 likes | 1,200 downloads  
  Tencent's compact multimodal model, a smaller variant of the Hunyuan series designed for efficient deployment.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** — moonshotai | 1,240 likes | 1,239,626 downloads  
  Moonshot AI's latest multimodal vision-language model with compressed tensor techniques, achieving strong performance with reduced size.

- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** — AngelSlim | 155 likes | 17,030 downloads  
  An extremely compressed (1.25-bit) translation model based on Hunyuan-v1-dense, pushing the boundaries of model quantization.

### 🔧 Specialized Models (privacy, templates, speech)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — openai | 1,382 likes | 180,322 downloads  
  OpenAI's token-classification model for detecting and filtering private information, trending as privacy concerns grow in AI deployments.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 127 likes | 0 downloads  
  A community resource providing corrected Jinja chat templates for Qwen models, addressing a common pain point for developers.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** — unsloth | 633 likes | 1,355,414 downloads  
  Unsloth's GGUF quantization of Qwen3.6-27B, enabling efficient local deployment on consumer hardware.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — unsloth | 976 likes | 2,581,735 downloads  
  GGUF quantized version of the MoE Qwen3.6-35B-A3B, extremely popular (2.5M+ downloads) for running powerful multimodal MoE locally.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 595 likes | 1,061,556 downloads  
  An uncensored, aggressive fine-tune of Qwen3.6-35B-A3B for users seeking less filtered responses, reflecting ongoing demand for unfiltered models.

- **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** — Jackrong | 94 likes | 33,515 downloads  
  Another community GGUF variant of the Qwen3.6 MoE model, optimized with Unsloth for text-generation-inference.

- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** — DavidAU | 115 likes | 161,548 downloads  
  An extremely specialized multi-fine-tune (uncensored, code-optimized, IMatrix) GGUF of Qwen3.6-27B, demonstrating niche customization trends.

- **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** — z-lab | 69 likes | 3,801 downloads  
  A speculative decoding optimized variant of Gemma-4-31B, showcasing interest in inference acceleration techniques.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** — z-lab | 273 likes | 32,213 downloads  
  Qwen3.6-27B with DFlash speculative decoding optimization, reducing latency for real-time applications.

- **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** — talkie-lm | 257 likes | 0 downloads  
  A fine-tuned 13B conversational model, notable for zero downloads despite high likes—possibly a new release still propagating.

## Ecosystem Signal

**Qwen 3.6 dominates the multimodal space**, with both dense (27B) and MoE (35B-A3B) variants showing massive download numbers (2M+ and 3.5M+ respectively). This signals that the community is rapidly adopting Qwen as a primary multimodal backbone, especially in quantized GGUF formats for local deployment. The **Mixture-of-Experts trend** is accelerating—almost every major family now has MoE variants: Qwen3.6-A3B, Gemma-4-A4B/E4B, Nemotron-3-A3B, and MiMo-V2.5. Companies are betting on MoE as the solution for dense-model quality at inference-efficient costs.

**Open-weight model proliferation continues** with Google (Gemma-4), DeepSeek (V4), and MoonshotAI (Kimi-K2.6) releasing multiple variants, while OpenAI's single entry is a specialized privacy classifier. The uncensored fine-tuning ecosystem (HauhauCS, DavidAU) remains active, showing persistent demand for less restricted models—often achieving millions of downloads despite niche positioning.

**Quantization (GGUF) is now the primary distribution format for local deployment**, with Unsloth's GGUF variants of Qwen models amassing over 3.9M combined downloads. The speculative decoding variant ("DFlash") from z-lab represents an emerging sub-trend in inference optimization. The success of **OmniVoice** (825 likes, 2.2M downloads) alongside **Anime generation** and **image-to-video** models indicates growing diversity beyond pure text—the ecosystem is becoming genuinely multimodal across input and output modalities.

## Worth Exploring

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — With 3.5M+ downloads and strong performance in multimodal tasks, this MoE model represents the best current tradeoff between capability and efficiency. Its widespread community adaptation (multiple GGUF variants, uncensored fine-tunes) makes it a strong baseline for production multimodal applications.

2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — Breaking out as the top voice model this week with 825 likes and 2.2M downloads, OmniVoice's zero-shot multilingual voice cloning capabilities deserve close study. As voice AI applications explode, understanding its architecture and limitations will be valuable.

3. **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** — The DFlash speculative decoding variant represents an emerging inference optimization paradigm. With the push toward real-time and on-device deployment, studying how DFlash achieves speedups without quality degradation could inform your own deployment strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*