# AI Open Source Trends 2026-05-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-10 04:49 UTC

---

# AI Open Source Trends Report
**Date**: 2026-05-10

---

## 1. Today's Highlights

The AI open-source ecosystem is experiencing a **massive surge in AI coding agent infrastructure**, with multiple projects crossing thousands of daily stars. Anthropic's financial services SDK led the trending list with **+3,281 stars** in a single day, signaling growing enterprise adoption. A parallel explosion in **agent memory/persistence layers** (agentmemory, claude-mem, mem0) and **free/token-optimized AI coding gateways** (9router) suggests the community is actively solving the two biggest pain points for production AI coding: cost and context retention. The emergence of **dedicated agent skill repositories** (addyosmani/agent-skills at +3,009 stars) indicates a maturing ecosystem where "skills" are becoming first-class, reusable components rather than ad-hoc prompts.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure — Frameworks, SDKs, Inference Engines & Dev Tools

| Project | Stars | Today's Activity | Why It Matters |
|---------|-------|------------------|----------------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐171,093 | — | The universal local LLM runner, now supporting Kimi-K2.5, GLM-5, DeepSeek, and more. Still the easiest way to run models locally. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐79,521 | — | High-throughput LLM inference engine; the default choice for self-hosted serving at scale. |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | ⭐0 (+3,281) | **+3,281** | Anthropic's official financial services SDK — a clear signal of AI moving into regulated, high-stakes industries with compliance-ready tooling. |
| [decolua/9router](https://github.com/decolua/9router) | ⭐0 (+1,031) | **+1,031** | Unlimited free AI coding via 40+ providers with auto-fallback and token optimization. A game-changer for reducing API costs. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | ⭐0 (+107) | +107 | Official Chrome DevTools MCP server for coding agents. Makes browser debugging programmable — critical for web agent development. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐11,917 | — | The leading Java LLM framework, now with MCP support. Bridges the gap between Java enterprise stacks and AI capabilities. |

---

### 🤖 AI Agents / Workflows — Agent Frameworks, Automation & Multi-Agent Systems

| Project | Stars | Today's Activity | Why It Matters |
|---------|-------|------------------|----------------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐140,747 | — | Production-ready agentic workflow platform. The go-to for building custom AI agents without heavy coding. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐73,007 | — | AI-driven development assistant — still the most popular open-source coding agent framework. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,123 | — | The original autonomous agent vision. Now rebranded as "accessible AI for everyone," focusing on tooling rather than hype. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐141,191 | — | "The agent that grows with you" — personal AI agent with persistent learning. Tremendous growth signals strong demand for memory-equipped agents. |
| [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | ⭐0 (+552) | **+552** | ByteDance's multimodal AI agent stack — connects cutting-edge models with agent infrastructure. Expect deep integration with their model ecosystem. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | ⭐47,941 | — | Agent orchestration platform for Claude, featuring multi-agent swarms and self-learning capabilities. A new contender in the orchestration space. |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐22,122 | — | AI workflow automation with ~400 MCP servers. The "Zapier for AI agents" — making agent integration plug-and-play. |
| [trycua/cua](https://github.com/trycua/cua) | ⭐15,798 | — | Infrastructure for Computer-Use Agents — sandbox environments to train/test agents that control full desktops (macOS/Linux/Windows). |

---

### 📦 AI Applications — Specific Apps & Vertical Solutions

| Project | Stars | Today's Activity | Why It Matters |
|---------|-------|------------------|----------------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐136,350 | — | The most popular self-hosted AI chat interface. Supports Ollama, OpenAI API — a privacy-first alternative to ChatGPT. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐45,335 | — | AI productivity studio with 300+ assistants. Unified access to frontier LLMs with smart chat and autonomous agents. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐44,257 | — | Cross-platform AI assistant (WeChat, DingTalk, Feishu) — China's answer to AI agents in messaging ecosystems. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐24,255 | — | Free, local, open-source 24/7 cowork app for multiple AI coding agents. The "virtual office" for AI developers. |
| [leon-ai/leon](https://github.com/leon-ai/leon) | ⭐17,216 | — | Your open-source personal assistant — a well-established project that's still evolving with agent capabilities. |
| [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | ⭐0 (+144) | +144 | Open-source AI coworker with memory — entering a crowded space but differentiating on the "coworker" metaphor over "assistant." |

---

### 🧠 LLMs / Training — Model Weights, Training Frameworks & Fine-Tuning

| Project | Stars | Today's Activity | Why It Matters |
|---------|-------|------------------|----------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐160,427 | — | The de facto standard for model definition and inference. Still the foundation most AI projects build on. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐71,097 | — | Unified efficient fine-tuning for 100+ LLMs/VLMs. Essential for any team wanting to customize models. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐92,277 | — | The definitive educational resource for building ChatGPT-like LLMs from scratch. Continues to gain stars as more developers seek deep understanding. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐49,394 | — | Train a 64M-parameter LLM from scratch in 2 hours. Democratizes LLM training for learning and experimentation. |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | ⭐45,817 (+1,197) | **+1,197** | Chinese-language tutorial on building agents from scratch. Massive daily growth shows global demand for agent education. |
| [RainBowLuoCS/OpenOmni](https://github.com/RainBowLuoCS/OpenOmni) | ⭐139 | — | NIPS 2025 publication on omnimodal LLMs with real-time emotional speech synthesis. Cutting-edge research with practical implementations. |

---

### 🔍 RAG / Knowledge — Vector Databases, RAG Engines & Knowledge Management

| Project | Stars | Today's Activity | Why It Matters |
|---------|-------|------------------|----------------|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐109,499 | — | 100+ runnable AI Agent & RAG apps. The best onboarding resource for developers entering the RAG space. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐80,124 | — | Leading open-source RAG engine with agent capabilities. Fuses RAG with agentic behavior for superior context layers. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐55,247 | — | Universal memory layer for AI agents. The #1 solution for persistent agent memory — critical for production deployments. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,205 | — | Cloud-native vector database for ANN search. The infrastructure backbone for many RAG systems. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐45,663 | — | Turn code, docs, and images into queryable knowledge graphs for AI coding assistants. Bridges RAG and code understanding. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐74,192 | — | Claude Code plugin for automatic session capture and context injection. Solves the "agent amnesia" problem in coding sessions. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐31,191 | — | High-performance vector database. A favorite for production RAG due to its Rust performance and cloud offering. |

---

## 3. Trend Signal Analysis

### 💥 Explosive Community Attention: Agent Memory & Persistent Context

The single strongest signal from today's data is the **explosion of memory/persistence tooling for AI coding agents**. Projects like **agentmemory** (+533 today), **claude-mem** (⭐74,192), **mem0** (⭐55,247), and **memvid** (⭐15,372) are all solving the same fundamental problem: AI agents forget context between sessions. The rapid growth of **addyosmani/agent-skills** (+3,009 today) — a production-grade skills repository — suggests the community is transitioning from "can my agent code?" to "how do I make my agent reliable and skilled long-term?" This is a maturation signal: the ecosystem is moving beyond novelty toward production readiness.

### 🆕 Emerging Tech Stacks & First Appearances

Several new directions are appearing for the first time in today's top lists:

1. **MCP (Model Context Protocol) adoption is accelerating** — Chrome DevTools MCP, activepieces MCP servers (~400), and mxcp (enterprise Data-to-AI via MCP) show MCP becoming the standard for tool integration.

2. **Computer-Use Agent Infrastructure** — `trycua/cua` (⭐15,798) provides sandbox environments for agents that control full desktops. This is a new category: infrastructure for agents that operate like humans (clicking, typing, navigating UI).

3. **Token Optimization Gateways** — `9router` (+1,031 today) and `Mirrowel/LLM-API-Key-Proxy` offer unlimited/optimized API access. The "routing layer" between developers and model providers is becoming a critical piece of infrastructure.

4. **Graph-based RAG** — `graphify` (⭐45,663) converts code/docs into knowledge graphs for agents. This moves beyond vector search toward structured knowledge representation.

### 🔗 Connection to Recent LLM Releases & Events

The trending data reflects two major industry developments:
- **Anthropic's enterprise push** — The `financial-services` SDK (anthropics) and the massive stars on `claude-mem` indicate Claude Code is becoming the default coding agent for enterprise developers.
- **Multimodal agent maturity** — ByteDance's `UI-TARS-desktop` and `OpenOmni` (NIPS 2025) show multimodal agents (vision + text + speech) moving from research to deployable products.

---

## 4. Community Hot Spots — Developer Focus Areas

- **🛠️ [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (+3,009 today)** — The fastest-growing project today. A "standard library" of production-grade skills for AI coding agents. If you're building coding agents, this is your new essential resource for reusable, battle-tested capabilities.

- **🧠 [agentmemory](https://github.com/rohitg00/agentmemory) (+533 today)** — #1 persistent memory for AI coding agents based on real-world benchmarks. The top-1 ranked memory solution — critical for any agent that needs to maintain context across sessions. Watch this space for benchmarks and integrations.

- **🔓 [decolua/9router](https://github.com/decolua/9router) (+1,031 today)** — Free, unlimited AI coding via 40+ providers. If you're tired of API costs eating your budget, this router with auto-fallback and token optimization could save teams thousands monthly.

- **🌐 [trycua/cua](https://github.com/trycua/cua) (⭐15,798)** — Open-source infrastructure for Computer-Use Agents. As agents become capable of full desktop control (not just code), sandbox environments become essential. This project is early but addresses a fundamental infrastructure gap.

- **📚 [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) (+1,197 today, ⭐45,817)** — The definitive Chinese-language agent-building tutorial series. With sustained daily growth, it's the best resource for non-English-speaking developers entering the agent ecosystem. If you're new to agents, start here.

---
*This digest is auto-generated by [agents-radar](https://github.com/dalen666/agents-radar).*