# Hugging Face Trending Models Digest 2026-04-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-28 04:37 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-04-28

---

## 1. Today's Highlights

This week's trending landscape is dominated by major model family upgrades: **DeepSeek-V4**, **Qwen3.6**, and **Gemma-4** are leading the pack with massive adoption. DeepSeek's V4 Pro and Flash variants (MIT-licensed) signal a strong open-weight push, while Google's **Gemma-4-31B-it** has surged to over 6 million downloads—the highest on the list. Multimodal models (image-text-to-text) are now mainstream, with Qwen3.6, Kimi-K2.6, and Gemma-4 all shipping vision capabilities by default. Community fine-tuning is also heating up, with uncensored/abliterated variants and GGUF quantizations dominating the download charts.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 3,056 likes | 137,784 downloads  
  The flagship conversational LLM from DeepSeek, trending as the most-liked model overall with strong community enthusiasm for its performance.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — deepseek-ai | 791 likes | 65,743 downloads  
  A faster, MIT-licensed variant of DeepSeek-V4, attracting attention for its permissive open-weight release.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** — moonshotai | 1,103 likes | 443,440 downloads  
  Moonshot's latest multimodal LLM with compressed-tensor optimization, gaining traction for efficient deployment.

- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** — tencent | 167 likes | 5,008 downloads  
  A preview of Tencent's next-gen conversational model, likely building on their Hy series.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** — XiaomiMiMo | 150 likes | 0 downloads  
  Xiaomi's long-context agent model, freshly released with no downloads yet but notable for its "agent" tag and enterprise positioning.

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** — zai-org | 1,539 likes | 237,450 downloads  
  A MoE-DSA architecture model from Zhipu AI's GLM family, popular for strong conversational performance and efficient scaling.

- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** — MiniMaxAI | 1,076 likes | 492,091 downloads  
  MiniMax's latest conversational model, drawing significant downloads and community interest.

- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** — OBLITERATUS | 526 likes | 127,538 downloads  
  An "abliterated" (uncensored) fine-tune of Gemma-4-E4B, popular among users seeking uncensored variants.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — Qwen | 930 likes | 399,489 downloads  
  Qwen's flagship 27B multimodal model (image-text-to-text), widely adopted for vision-language tasks.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — Qwen | 1,464 likes | 1,354,032 downloads  
  A 35B MoE variant (3B active parameters) of Qwen3.6, trending for its high efficiency-to-quality ratio.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 2,397 likes | 6,306,108 downloads  
  Google's instruction-tuned vision-language model, the most downloaded model on this list—a clear ecosystem leader.

- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — tencent | 616 likes | 3,048 downloads  
  A world model (image-to-3D) from Tencent, notable for its "worldmodel" tag and growing interest in 3D generation.

- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** — baidu | 578 likes | 8,242 downloads  
  An 8B text-to-image model under Apache-2.0, Baidu's entry into the competitive image generation space.

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — inclusionAI | 205 likes | 448 downloads  
  A diffusion-based "any-to-any" universal model, representing bleeding-edge multimodal research.

### 🔧 Specialized Models (code, math, medical, embeddings, privacy)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — openai | 948 likes | 47,488 downloads  
  A token-classification model from OpenAI for identifying and filtering private/PII data, trending as organizations prioritize compliance.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** — z-lab | 138 likes | 5,824 downloads  
  A specialized "DFlash" variant of Qwen3.6-27B, likely optimized for inference speed or memory efficiency.

- **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** — z-lab | 172 likes | 28,078 downloads  
  The DFlash variant for the 35B-A3B MoE model, showing demand for optimized inference on MoE architectures.

- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** — facebook | 69 likes | 0 downloads  
  A human-centric vision transformer from Meta, with an accompanying arXiv paper—likely for pose/body analysis.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** — unsloth | 456 likes | 636,345 downloads  
  Unsloth's GGUF quantization of Qwen3.6-27B, enabling local deployment on consumer hardware.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — unsloth | 831 likes | 1,646,295 downloads  
  The most downloaded GGUF model—1.6M downloads—showing massive demand for quantized MoE models.

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 203 likes | 190,878 downloads  
  An uncensored, GGUF-quantized Qwen3.6-27B fine-tune, reflecting strong community appetite for unrestricted models.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 481 likes | 525,932 downloads  
  The MoE variant of the uncensored fine-tune, showing that even uncensored models follow the MoE trend.

- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** — hesamation | 200 likes | 129,164 downloads  
  A reasoning-distilled Qwen3.6 MoE model, distilled from Claude-4.6-Opus—a sign of cross-model knowledge distillation becoming mainstream.

- **[Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)** — Qwen | 156 likes | 607,010 downloads  
  Official FP8 quantization of Qwen3.6-27B, making high-quality inference more accessible.

- **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** — Jackrong | 227 likes | 77,763 downloads  
  A "frankenmerge" of Qwen and GLM models, community experimentation with model merging.

- **[Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF)** — Jackrong | 79 likes | 35,971 downloads  
  Another Qwen-based merged model, previewing a new "Qwopus" family.

- **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** — unsloth | 116 likes | 25,400 downloads  
  Unsloth's GGUF quant of the Kimi-K2.6 model, extending their quantization coverage to Moonshot's offering.

---

## 3. Ecosystem Signal

The current landscape reveals several clear trends. **MoE (Mixture-of-Experts) architectures are dominating**: Qwen3.6-35B-A3B (1.3M downloads), its GGUF variant (1.6M downloads), MiniMax-M2.7, GLM-5.1, and DeepSeek-V4 all leverage sparse activation to combine high capacity with inference efficiency. **Multimodality is now table stakes**—nearly every major LLM release (Qwen3.6, Gemma-4, Kimi-K2.6) ships with vision capabilities built in. The **open-weight vs. proprietary** tension persists: DeepSeek and Qwen lead with fully open weights, while Google's Gemma-4 has massive adoption despite more controlled licensing. **Quantization and local deployment** remain the hottest community activity, with Unsloth's GGUF variants of Qwen3.6 accumulating over 2.2M combined downloads. The emergence of "abliterated" (uncensored) fine-tunes from OBLITERATUS and HauhauCS signals a sustained subculture pushing for unrestricted model access. Finally, **specialized model merging and distillation** (e.g., Qwopus merges, Claude-distilled variants) suggest the community is moving beyond simple fine-tuning toward more sophisticated composition techniques.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The standout MoE model of the week: 35B total parameters but only 3B active, offering near-frontier performance at a fraction of the compute cost. Its massive downloads and dual official/community support (Unsloth, z-lab, HauhauCS variants) make it the most versatile model to study for MoE architecture understanding and practical deployment.

2. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 6.3M downloads, this is the most adopted model on the list. It's worth studying for understanding why Google's open-weight strategy is resonating—likely due to strong benchmark performance, polished instruction-following, and excellent multimodal capabilities out of the box.

3. **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — The most research-forward model on the list. Its "any-to-any" pipeline and diffusion-based architecture represent a fundamentally different paradigm from autoregressive transformers. For anyone tracking the frontier of multimodal generation beyond text-only LLMs, this is a must-explore model.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*