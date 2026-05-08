# AI Open Source Trends 2026-05-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-08 04:19 UTC

---

# AI Open Source Trends Report
**Date**: 2026-05-08

---

## 1. Today's Highlights

The AI open-source ecosystem today is dominated by two major themes: **terminal-native AI agents** and **memory/RAG infrastructure**. The breakout star is **DeepSeek-TUI** (+5,799 stars today), a Rust-based terminal coding agent that signals massive demand for lightweight, local-first AI development tools. Alongside, **addyosmani/agent-skills** (+3,062 stars) provides production-grade engineering capabilities for AI coding agents, while **local-deep-research** achieves ~95% on SimpleQA using local LLMs, underscoring a trend toward private, offline AI workflows. The vector-db and memory layer space continues to mature, with **Mem0**, **cognee**, and **PageIndex** (a "vectorless" reasoning-based RAG tool) attracting significant attention.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, CLI Tools)

| Project | Stars | Description |
|---------|-------|-------------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐170,961 | The go-to local LLM runner, now supporting Kimi-K2.5, GLM-5, and DeepSeek |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐79,338 | High-throughput LLM inference engine, essential for production deployments |
| [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (+5,799 today) | ⭐0 (new) | **Rust-based terminal coding agent** for DeepSeek models — today's biggest star gainer |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (+3,062 today) | ⭐0 (new) | Production-grade engineering skills library for AI coding agents |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐11,888 | Java-native LangChain port for JVM enterprise applications |
| [tabpfn/PriorLabs/TabPFN](https://github.com/PriorLabs/TabPFN) (+230 today) | ⭐0 (new) | Foundation model for tabular data — one-shot ML classification |

### 🤖 AI Agents / Workflows

| Project | Stars | Description |
|---------|-------|-------------|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,065 | Pioneering autonomous agent framework, still the most-starred agent project |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐72,860 | AI-driven software development agent with full IDE integration |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐92,790 | Web automation agent — makes websites accessible for AI, huge growth trajectory |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐45,216 | Multi-model AI productivity studio with 300+ assistant skills |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐22,099 | AI workflow automation with ~400 MCP servers for agents |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐30,994 | Frontend stack for building generative UI agents (React + Angular) |
| [goose/aaif-goose](https://github.com/aaif-goose/goose) (+390 today) | ⭐0 (new) | Extensible Rust-based AI agent that goes beyond code suggestions |

### 📦 AI Applications (Vertical Solutions)

| Project | Stars | Description |
|---------|-------|-------------|
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐67,160 | Open-source financial data platform for AI agents and quants |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐77,339 | OCR toolkit bridging PDFs/images to LLMs — 100+ languages, production-ready |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | ⭐24,607 | AI-powered web scraper using LLMs for intelligent data extraction |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) (+1,343 today) | ⭐0 (new) | Anthropic’s official financial services toolkit for AI integration |
| [acon96/home-llm](https://github.com/acon96/home-llm) | ⭐1,332 | Local LLM for Home Assistant smart home control |

### 🧠 LLMs / Training

| Project | Stars | Description |
|---------|-------|-------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐160,369 | The universal model library for text, vision, audio, and multimodal |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐71,023 | Unified fine-tuning for 100+ LLMs and VLMs (ACL 2024) |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐92,133 | Step-by-step tutorial for building ChatGPT-like LLMs in PyTorch |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐49,198 | Train a 64M-parameter LLM from scratch in 2 hours — democratizing training |
| [stable-pretraining/galilai-group](https://github.com/galilai-group/stable-pretraining) | ⭐222 | New library for reliable, scalable pretraining of foundation models |
| [bbruceyuan/bit-brain](https://github.com/bbruceyuan/bit-brain) | ⭐40 | Train a mini LLM on a single 3090 — accessible entry point |

### 🔍 RAG / Knowledge (Vector Databases, Retrieval, Memory)

| Project | Stars | Description |
|---------|-------|-------------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐140,531 | Production platform for building agentic RAG workflows |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐136,014 | User-friendly AI interface with native Ollama/RAG support |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐59,705 | All-in-one private-first RAG productivity accelerator |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐55,040 | Universal memory layer for AI agents — persistent, contextual |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,167 | Cloud-native vector database for production-scale semantic search |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) (+943 today, topic) | ⭐29,702 | **Vectorless** reasoning-based document indexing — emerging alternative to traditional RAG |
| [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) (+559 today) | ⭐0 (new) | Local-only deep research tool achieving 95% SimpleQA with 10+ search engines |

---

## 3. Trend Signal Analysis

**Terminal-Native AI Agents Are Exploding**: The single biggest signal today is **DeepSeek-TUI** (+5,799 stars in one day). It combines three powerful trends: (1) Rust for high-performance CLIs, (2) DeepSeek as the model of choice (cost-effective, open-weight), and (3) the "coding agent in terminal" paradigm popularized by Claude Code. This indicates the community is moving away from heavy IDE plugins toward lightweight, composable terminal tools.

**The RAG Stack Is Maturing and Fragmenting**: Traditional vector-db-based RAG is being challenged. **PageIndex** (vectorless, reasoning-based) gained +943 stars and appears in both trending and topic search, while **local-deep-research** (local-only, multi-engine) got +559 stars. These represent a shift: developers want RAG that works offline, uses reasoning not just embeddings, and doesn't require massive infrastructure. The memory layer space (Mem0, cognee, memvid) is also becoming its own category, distinct from vector databases.

**DeepSeek Ecosystem Dominance**: Multiple trending projects explicitly support or are built for DeepSeek models (DeepSeek-TUI, 9router for API routing, ollama's recent support). This reflects DeepSeek's aggressive pricing and competitive performance challenging OpenAI/Anthropic.

**Agent Skills as a New Genre**: **addyosmani/agent-skills** (+3,062 stars) represents a new pattern — curated, reusable skill libraries for AI coding agents, analogous to npm packages but for agent capabilities. This could become a foundational layer for the agent ecosystem.

---

## 4. Community Hot Spots

- **🦀 DeepSeek-TUI**: The #1 trending project today. Rust-based terminal agent for DeepSeek models. Watch for a wave of Rust AI CLI tools. [Explore](https://github.com/Hmbown/DeepSeek-TUI)

- **🧠 Agent-Skills Library**: 3,000+ stars in a day suggests the community is hungry for standardized agent skill packages. [Explore](https://github.com/addyosmani/agent-skills)

- **🔍 PageIndex (Vectorless RAG)**: A potential paradigm shift — RAG without vector embeddings. 29k total stars + trending today. [Explore](https://github.com/VectifyAI/PageIndex)

- **💻 Local-Deep-Research**: Achieves 95% SimpleQA accuracy locally on a 3090. Democratizes deep research capabilities. [Explore](https://github.com/LearningCircuit/local-deep-research)

- **🌐 InsForge**: Postgres-based AI backend with auth, storage, and AI gateway — all-in-one platform for coding agents. [Explore](https://github.com/InsForge/InsForge)

- **⚡ DFlash (Block Diffusion)**: New speculative decoding technique from z-lab. Academic innovation with immediate practical impact on inference speed. [Explore](https://github.com/z-lab/dflash)

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*