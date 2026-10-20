
export type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  stack: string[];
  year: string;
  accent: string;
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "RESEARCH\nREDEFINED.",
    subtitle: "Multi-Agent Research Assistant",
    description:
      "An intelligent research workflow that combines specialized agents, retrieval-augmented generation, source-backed answers, and automated fact verification.",
    category: "AGENTIC AI / GENAI",
    stack: ["LangGraph", "LangChain", "RAG", "Vector DB"],
    year: "2026",
    accent: "#b7a6ff",
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "KNOWLEDGE\nIN MOTION.",
    subtitle: "YouTube Transcript RAG",
    description:
      "A browser extension and conversational retrieval system that turns video transcripts into searchable knowledge and lets users ask questions about their content.",
    category: "RAG / KNOWLEDGE SYSTEMS",
    stack: ["Python", "Flask", "LangChain", "Hugging Face"],
    year: "2026",
    accent: "#a5d8ff",
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "VISION\nFOR NATURE.",
    subtitle: "AI Plant Disease Detection",
    description:
      "A computer-vision application that uses a trained image-classification model to identify plant diseases and presents results through a multilingual interface.",
    category: "COMPUTER VISION / ML",
    stack: ["PyTorch", "MobileNetV2", "Flask", "Python"],
    year: "2026",
    accent: "#b5e6bf",
    github: "",
    demo: "",
  },
  {
    number: "04",
    title: "AI WITHOUT\nBOUNDARIES.",
    subtitle: "Portable Local AI",
    description:
      "An experiment in portable local inference using quantized language models, GGUF files, and Vulkan acceleration without depending on a hosted inference API.",
    category: "LOCAL LLM / INFERENCE",
    stack: ["llama.cpp", "GGUF", "Vulkan", "Linux"],
    year: "2026",
    accent: "#f2c6a8",
    github: "",
    demo: "",
  },
];
