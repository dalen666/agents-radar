# AI Open Source Trends 2026-05-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-07 04:37 UTC

---

Here is the **AI Open Source Trends Report** for **2026-05-07**, based on the provided trending and topic-search data.

---

## 1. Today's Highlights

The open-source AI ecosystem today is overwhelmingly dominated by **AI Agents and Agentic Infrastructure**, with a strong tilt toward terminal-native and coding-agent tooling. The top-gaining project, **DeepSeek-TUI**, exploded with +6,175 stars, signaling intense demand for lightweight, local-first coding agents. Simultaneously, the ecosystem is maturing around **Agent Orchestration** (e.g., `ruvnet/ruflo` (+2,192 stars)) and **Production Skills** (`addyosmani/agent-skills`), indicating a shift from experimental agents to deployable, enterprise-ready workflows. A notable newcomer is the financial vertical, with both **virattt/dexter** and **shiyu-coder/Kronos** gaining significant traction, pointing to a growing appetite for specialized AI in quantitative analysis and financial markets.

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)

- **[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)** [Rust] ⭐0 (+6,175 today)  
  A blazing-fast terminal UI client for DeepSeek models, optimized for coding agent workflows. The top trending repo today.

- **[LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research)** [Python] ⭐0 (+532 today)  
  Achieves ~95% on SimpleQA using local LLMs (e.g., Qwen3.6-27B on a 3090), supporting 10+ search engines and encrypted private documents. A win for local-first, privacy-preserving research.

- **[cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources)** [Python] ⭐0 (+198 today)  
  A curated list of free LLM inference APIs. Essential for developers prototyping without budget constraints.

- **[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)** [Python] ⭐0 (+1,125 today)  
  An adaptive web scraping framework that scales from a single request to full-scale crawls. Increasingly used as a data ingestion layer for RAG pipelines.

### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent)

- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** [TypeScript] ⭐0 (+2,192 today)  
  The leading agent orchestration platform for Claude. Deploys multi-agent swarms with RAG, self-learning, and native Claude Code/Codex integration. Second-highest stars today.

- **[virattt/dexter](https://github.com/virattt/dexter)** [TypeScript] ⭐0 (+666 today)  
  An autonomous agent for deep financial research. Combines agentic reasoning with financial data APIs for automated due diligence and market analysis.

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** [Python] ⭐0 (+337 today)  
  ByteDance’s open-source long-horizon SuperAgent harness. Researches, codes, and creates using sandboxes, memories, tools, and subagents. Ideal for tasks spanning minutes to hours.

- **[anthropics/financial-services](https://github.com/anthropics/financial-services)** [Python] ⭐0 (+641 today)  
  Anthropic’s official repo for building financial services agents with Claude. A strong signal for enterprise adoption in regulated industries.

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐136,241 (topic: `ai-agent`)  
  The agent that grows with you. A widely-forked, modular personal agent framework designed for extensibility.

### 📦 AI Applications (Specific Vertical Solutions)

- **[PriorLabs/TabPFN](https://github.com/PriorLabs/TabPFN)** [Python] ⭐0 (+218 today)  
  A foundation model for tabular data. Solves classification and regression on small-to-medium datasets out of the box without training.

- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** [Python] ⭐0 (+234 today)  
  A foundation model for the language of financial markets. Uses transformers to model price action, volatility, and order flow.

- **[InsForge/InsForge](https://github.com/InsForge/InsForge)** [TypeScript] ⭐0 (+230 today)  
  A Postgres-based backend (auth, storage, compute, AI gateway) purpose-built for coding agents. An all-in-one platform for agentic app hosting.

### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning)

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐160,326 (topic: `llm`)  
  The universal model-definition framework. Remains the backbone for fine-tuning and deploying virtually all open LLMs.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐79,227 (topic: `llm`)  
  The high-throughput inference engine of choice for serving LLMs in production, now with extensive support for tool-calling and agentic use cases.

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐170,880 (topic: `llm`)  
  The simplest way to run local models. Now supporting Kimi-K2.5, GLM-5, and more. Essential for local agent development.

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation)

- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** [Python] ⭐49,180 (topic: `vector-db`)  
  The leading document agent and OCR platform. Continues to dominate for building complex RAG pipelines.

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Python] ⭐79,854 (topic: `rag`)  
  A leading RAG engine that fuses retrieval with agent capabilities for a superior context layer. Widely used in enterprise knowledge management.

- **[lancedb/lancedb](https://github.com/lancedb/lancedb)** [HTML] ⭐10,209 (topic: `vector-db`)  
  Developer-friendly OSS embedded retrieval library for multimodal AI. Search more, manage less.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐54,959 (topic: `rag`)  
  Universal memory layer for AI agents. Automatically stores and retrieves session context, enabling persistent agent memory.

## 3. Trend Signal Analysis

**Agentic Infrastructure is Eating the World.** The three fastest-growing repos on today’s trending list—`DeepSeek-TUI` (+6,175), `ruflo` (+2,192), and `Scrapling` (+1,125)—are all foundational pieces for building and deploying coding agents. Community attention is shifting from "can I build an agent?" to "how do I run agents reliably at scale?" This is reflected in the massive star counts for backend/infrastructure repos like `InsForge` and `deer-flow`, which solve for agent hosting, memory, and task orchestration.

**Terminal-Native Tools Are the New UI.** The explosive growth of `DeepSeek-TUI` and the popularity of `addyosmani/agent-skills` confirm that developers increasingly prefer agent interaction via the command line over web UIs. This aligns with the "agent as a CLI friend" paradigm (e.g., Claude Code, Codex). The market is now demanding **skill libraries** and **TUI clients** that make agents productive out of the box.

**Financial AI Goes Vertical.** Both `virattt/dexter` (autonomous financial research agent) and `shiyu-coder/Kronos` (financial foundation model) appeared on the trending list today, alongside Anthropic’s dedicated `financial-services` repo. This trio signals a clear verticalization push: AI is moving from general-purpose chat into domain-specific, regulated environments where accuracy, data provenance, and explainability matter.

**Local-First, Private, and Sovereign.** Repos like `local-deep-research` (95% SimpleQA on a 3090) and the sustained prominence of `ollama` and `vllm` underscore a growing movement toward running inference wholly on-device. Privacy concerns and the desire to avoid API costs are driving developers to build agent systems that work offline or behind a firewall.

## 4. Community Hot Spots

- **🔥 `Hmbown/DeepSeek-TUI`** — The #1 trending repo today. If you work with DeepSeek models as a coding assistant, this is the terminal client to watch. Its Rust-based performance and agent-specific features (e.g., file editing, git integration) make it a strong alternative to Claude Code for open-model users.

- **🔄 `ruvnet/ruflo`** — Agent orchestration for Claude at scale. With its multi-agent swarm, RAG integration, and self-learning capability, it’s becoming the "LangChain of Claude agents." Ideal for teams building complex, multi-step workflows.

- **🦅 `addyosmani/agent-skills`** — The "npm for agent skills." A library of production-grade engineering skills (testing, debugging, deployment) that can be injected into any agent. This is the missing abstraction layer for making agents actually useful in CI/CD pipelines.

- **📊 `virattt/dexter`** — The fastest-growing financial agent. Combines reasoning with real-time data APIs. For devs interested in quant work or automated financial due diligence, this repo offers a turnkey starting point.

- **🧩 `InsForge/InsForge`** — A Postgres-powered backend designed specifically for coding agents. If you’re tired of stitching together Vercel, Supabase, and a vector DB, this all-in-one solution (auth, storage, AI gateway) is a serious time-saver.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*