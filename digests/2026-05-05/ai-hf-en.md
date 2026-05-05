# Hugging Face Trending Models Digest 2026-05-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-05 04:19 UTC

---

# Hugging Face Trending Models Digest — 2026-05-05

## Today's Highlights

This week's trending models showcase a decisive shift toward **multimodal-native architectures** and **extreme-scale MoE reasoning systems**. DeepSeek's V4 family dominates raw text-generation popularity, while Google's Gemma-4-31B-it achieves explosive adoption with over 8 million downloads and 2,500+ weekly likes. Qwen continues its aggressive cadence with the 3.6-series, introducing MoE variants (35B-A3B) alongside dense models—both seeing enormous community quantization activity from Unsloth and third-party fine-tuners. Nvidia's Nemotron-3 Nano Omni series establishes a new category of "any-to-any" reasoning models, while IBM's Granite 4.1 lineup signals enterprise-grade language model momentum. The surge of "abliterated" and uncensored fine-tunes (notably on Gemma-4 and Qwen-3.6) reflects sustained demand for less-restricted model variants.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|------------------|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,532 | 534,942 | Top-rated text-generation model this week; the "Pro" variant of DeepSeek's latest flagship achieving massive community traction |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 942 | 489,465 | Faster, optimized sibling to V4-Pro, enabling low-latency deployment while maintaining strong conversational quality |
| [Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) | mistralai | 257 | 11,950 | New 128B parameter Mistral model with vLLM support and bilingual (EN/FR) capabilities |
| [MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 427 | 11,812 | Xiaomi's long-context agent model, trending for its specialized agentic capabilities |
| [Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 212 | 10,357 | Compact production-ready model from poolside, optimized for vLLM serving |
| [Granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) | ibm-granite | 151 | 18,310 | IBM's latest enterprise LLM iteration in the 8B class, built for reliable text generation |
| [Granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 94 | 4,094 | Enterprise-scale 30B Granite variant, demonstrating IBM's continued investment in larger open-weight models |
| [Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash) | inclusionAI | 456 | 1,141 | Novel hybrid architecture model from inclusionAI, gaining attention for its custom code and conversational quality |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|------------------|
| [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,108 | 1,334,241 | Qwen's latest all-round vision-language model, extremely popular for its strong multimodal conversational ability |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,610 | 2,726,360 | MoE variant of Qwen3.6—massively downloaded for its compute-efficient 35B-total/3B-active parameter design |
| [Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,507 | 8,042,257 | Google's flagship multimodal model; highest download count this week, driving broad adoption for vision-language tasks |
| [Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 226 | 40,403 | Nvidia's new "any-to-any" reasoning model—processes text, image, audio, and video inputs natively |
| [Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,197 | 825,320 | Moonshot AI's latest vision-language model with compressed tensors, achieving strong multimodal performance |
| [Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4) | nvidia | 85 | 276,956 | FP4 quantized version of Nvidia's Omni model for ultra-efficient edge deployment |
| [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 180 | 20,187 | Text-to-video generation model with Diffusers and GGUF support, gaining traction in the video AI space |
| [Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 137 | 2,622 | Anime-focused text-to-image model, popular in the creative community |
| [SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 143 | 1,714 | 8B "any-to-any" multimodal model from SenseNova, supporting multiple input/output modalities |
| [MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 207 | 51,554 | Xiaomi's multimodal base model supporting vision, language, and audio—foundation for the Pro variant |
| [Talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 226 | 0 | Instruction-tuned 13B conversational model; newly released with Apache-2.0 license |

### 🔧 Specialized Models (Code, Math, Embeddings, Privacy, Translation)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|------------------|
| [privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,265 | 132,595 | OpenAI's token-classification model for detecting and filtering private information, rising with enterprise compliance needs |
| [Granite-Embedding-97M-Multilingual-R2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2) | ibm-granite | 76 | 2,191 | Multilingual embedding model with ONNX and OpenVINO support; compact 97M for retrieval use cases |
| [Hy-MT1.5-1.8B-1.25bit](https://guggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 88 | 16,307 | Extremely compressed 1.25-bit translation model, pushing the frontier of ultralow-bit machine translation |

### 📦 Fine-tunes & Quantizations (Community Variants, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|------------------|
| [Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 570 | 1,092,141 | Unsloth's GGUF quantization of Qwen3.6-27B—top choice for local deployment of this popular multimodal model |
| [Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 910 | 2,174,698 | GGUF version of Qwen's MoE model, enabling efficient local inference of the 35B sparse architecture |
| [NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF) | unsloth | 99 | 44,790 | Unsloth's GGUF port of Nvidia's Omni reasoning model, bringing any-to-any capability to consumer hardware |
| [Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,467 | 203,362 | "Abliterated" and uncensored fine-tune of Gemma-4-31B, one of the most popular alignment-removed variants this month |
| [Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 230 | 23,407 | Specialized "DFlash" fine-tune of Qwen3.6-27B for faster inference with custom feature extraction |
| [Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 280 | 350,841 | Popular uncensored Qwen3.6 variant with an "aggressive" personality fine-tune, drawing significant downloads |
| [Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF) | Jackrong | 78 | 55,511 | Cross-model GGUF merge combining Qwen3.5 and DeepSeek-V4 capabilities in a compact 9B package |
| [LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros) | TenStrip | 87 | 0 | Newly uploaded LTX variant; minimal metadata suggests emerging experimental pipeline |

---

## Ecosystem Signal

The current Hugging Face ecosystem is defined by **three converging trends**:

**1. The Multimodal MoE Arms Race** — Qwen, Google, and Nvidia are all shipping vision-language models with Mixture-of-Experts architectures (e.g., Qwen3.6-35B-A3B, Nemotron-3-30B-A3B). The "3B active" parameter sweet spot (out of 30-35B total) is emerging as the standard for balancing capability and inference cost. DeepSeek's continued dominance in pure text-generation suggests a bifurcation: specialized multimodal MoEs for vision-language vs. dense or large MoE models (128B+) for text-only reasoning.

**2. Quantization Ecosystem Maturity** — Unsloth's GGUF variants of nearly every major release (Qwen3.6, Nemotron-3, Gemma-4) are receiving adoption rates comparable to or exceeding the original models. The presence of NVFP4 (Nvidia's FP4 format) and 1.25-bit ultralow-bit quantizations (Hy-MT1.5) indicates the community is aggressively pushing toward extreme compression for on-device and edge deployment.

**3. Fine-Tuning for Unrestricted Access** — The high popularity of "uncensored" and "abliterated" fine-tunes (Gemma-4-JANG_4M-CRACK: 1,467 likes; Qwen3.6-27B-Uncensored: 280 likes) signals sustained tension between proprietary safety alignment and community demand for unrestricted model behavior. IBM's Granite 4.1 series, conversely, represents the enterprise counter-trend: safety-tuned, well-documented, and compliance-oriented open-weight releases.

**4. Open-Weight Proliferation** — Nearly every major lab (Google, Nvidia, DeepSeek, Qwen, Mistral, IBM, Xiaomi, Moonshot) is now releasing under open-weight licenses, accelerating the commoditization of frontier capabilities. The "permissive but with guardrails" model (Gemma-4, Granite-4.1) vs. "fully open" model (Qwen, DeepSeek) divide continues to shape developer choices.

---

## Worth Exploring

**1. [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The 2.7M+ downloads and 1,610 likes make this the multimodal MoE to study this week. Its 3B active / 35B total parameter design represents the state-of-the-art in compute-efficient vision-language reasoning, and the extensive GGUF ecosystem (unsloth variant: 2.1M downloads) proves it's production-ready.

**2. [NVIDIA Nemotron-3-Nano-Omni-30B-A3B-Reasoning](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — Nvidia's "any-to-any" architecture is a paradigm shift: a single model that natively processes text, images, audio, and video with reasoning. The rapid emergence of both BF16 and NVFP4 quantized variants (276K downloads for the FP4 version alone) suggests strong multi-platform deployment interest. Worth studying as a blueprint for unified multimodal reasoning.

**3. [Google Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 8 million downloads in a single week, this is the most adopted model on the leaderboard. Its combination of multimodal capability, permissive license, and strong safety alignment makes it the default choice for developers building production vision-language applications. The accompanying uncensored variant (JANG_4M-CRACK) is itself one of the most popular fine-tunes, indicating both the model's quality and the community's desire for unrestricted alternatives.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*