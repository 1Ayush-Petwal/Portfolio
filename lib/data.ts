// Single source of truth for portfolio content.
// Shared across the home page and the dedicated /Work and /projects pages.

export interface Project {
    title: string;
    /** One-line summary (<= ~80 chars) shown on grid cards. */
    tagline: string;
    /** Full description shown on the /projects detail view. */
    description: string;
    tags: string[];
    link?: string;
    date: string;
    /** Maps to a lucide icon inside ProjectCard. */
    iconKey: 'server' | 'network' | 'lock' | 'image' | 'boxes' | 'game';
    /** [from, to] gradient stops for the card cover. */
    gradient: [string, string];
    featured?: boolean;
}

export interface Job {
    role: string;
    company: string;
    companyUrl?: string;
    start: string;
    end: string;
    location?: string;
    summary: string;
    highlights: string[];
    keys: string[];
    current?: boolean;
}

export interface Post {
    title: string;
    date: string;
    readTime?: string;
    description?: string;
    link: string;
    source?: string;
}

export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/ayushpetwal/',
    github: 'https://github.com/1Ayush-Petwal',
    twitter: 'https://x.com/Ayush_P_145',
    leetcode: 'https://leetcode.com/u/ayush_petwal01/',
    codeforces: 'https://codeforces.com/profile/ayush.petwal145',
};

export const projects: Project[] = [
    {
        title: 'InferGate',
        tagline: 'OpenAI-compatible LLM serving on Kubernetes with model-aware routing.',
        description:
            'An OpenAI-compatible LLM serving path on Kubernetes behind the Gateway API Inference Extension (llm-d), with model-aware routing via InferencePool / InferenceObjective and an Endpoint-Picker. Proves backend portability across vLLM and SGLang from an identical client, and scripts full cluster bring-up (make up) on a local kind cluster — GPU-free at $0 via the llm-d inference simulator, with Prometheus scraping for observability.',
        tags: ['KUBERNETES', 'ISTIO', 'vLLM', 'HELM'],
        link: 'https://github.com/1Ayush-Petwal/llm-serve-k8s/',
        date: 'JUN 2026',
        iconKey: 'server',
        gradient: ['#2d343e', '#3f4a5a'],
        featured: true,
    },
    {
        title: 'Distro-Train',
        tagline: 'A P2P marketplace matching ML jobs to idle GPUs, settled in HBAR.',
        description:
            'A decentralized federated-learning platform: a peer-to-peer marketplace connecting ML users (data and models, but no compute) to trainers with idle GPUs/CPUs. Users pay in HBAR and receive trained weights; trainers earn on assigned training chunks via market-based fair pricing — targeting a 40% cut in end-to-end switching overhead versus stitched-together compute and payment flows.',
        tags: ['PYTHON', 'SOLIDITY', 'py-libp2p', 'NEXT.JS'],
        link: 'https://github.com/1Ayush-Petwal/Distro_Train_M',
        date: 'SEP 2025',
        iconKey: 'network',
        gradient: ['#343c47', '#4a5568'],
        featured: true,
    },
    {
        title: 'Dark Pool Hook',
        tagline: 'A Uniswap v4 hook for a privacy-preserving dark pool using ZK proofs.',
        description:
            'A Uniswap v4 hook implementing a dark pool with end-to-end privacy using Zero-Knowledge Proofs (ZKP). Leverages an EigenLayer AVS for decentralized order matching and the execution of dark orders without leaking trade intent to the public mempool.',
        tags: ['SOLIDITY', 'ZKP', 'EIGENLAYER', 'UNISWAP V4'],
        link: 'https://github.com/1Ayush-Petwal/Dark-Pool-hook',
        date: 'JAN 2025',
        iconKey: 'lock',
        gradient: ['#2b333d', '#444f60'],
        featured: true,
    },
    {
        title: 'RPG Verse Agentic',
        tagline: 'ETH Global-winning agentic MMORPG with onchain AI agents.',
        description:
            'ETH Global winner. An AI-powered MMORPG multiverse built with RPG JS and Coinbase AgentKit, featuring specialized AI agents capable of managing wallets and interacting with DeFi protocols like Aave directly from within the game world.',
        tags: ['AGENTKIT', 'MMORPG', 'EIGENDA', 'WEB3'],
        link: 'https://github.com/LogicalGuy77/rpg-verse-agentic',
        date: 'OCT 2024',
        iconKey: 'game',
        gradient: ['#30384a', '#3a4555'],
        featured: true,
    },
    {
        title: 'Fabel',
        tagline: 'Conversational AI image generation, native to Farcaster.',
        description:
            'A conversational AI-powered image-generation platform integrated with the Farcaster protocol. Creators generate on-chain images by simply tagging a bot, bridging social feeds and creative tooling into a single flow.',
        tags: ['AI', 'FARCASTER', 'DIFFUSION', 'WEB3'],
        link: 'https://github.com/Suryansh-23/fabel',
        date: 'DEC 2024',
        iconKey: 'image',
        gradient: ['#2d343e', '#46515f'],
    },
    {
        title: 'CitreaMesh',
        tagline: 'An MCP server bridging LLMs with the Citrea blockchain.',
        description:
            'A Model Context Protocol (MCP) server bridging LLMs with the Citrea blockchain ecosystem. Exposes AI-accessible tools for wallet management, token utilities, and testnet interactions so any MCP-aware model can operate onchain.',
        tags: ['TYPESCRIPT', 'MCP', 'CITREA', 'BLOCKCHAIN'],
        link: 'https://github.com/1Ayush-Petwal/CitreaMesh',
        date: 'NOV 2024',
        iconKey: 'boxes',
        gradient: ['#333b46', '#414c5b'],
    },
];

export const experience: Job[] = [
    {
        role: 'Open Source Contributor — SDK & Spark Operator',
        company: 'Kubeflow',
        companyUrl: 'https://github.com/kubeflow',
        start: 'Feb 2026',
        end: 'Present',
        location: 'Remote',
        current: true,
        summary:
            'Contributing to the Kubernetes-native ML toolkit across the Python SDK and the Spark Operator.',
        highlights: [
            'Designed and prototyped OpenTelemetry distributed tracing for the Kubeflow SDK — surfacing end-to-end traces, metrics, and logs across Python SDK calls and Kubernetes worker pods, closing a long-standing observability gap for ML platform teams.',
            'Shipped 5 PRs across the SDK and Spark Operator: a SparkCluster CRD for Spark Standalone on K8s, MultiKueue integration, ModelRegistry extensions, Trainer docs, and a stability fix.',
        ],
        keys: ['Python', 'Go', 'Kubernetes', 'OpenTelemetry', 'Spark'],
    },
    {
        role: 'AI Infrastructure Engineer',
        company: 'UpValue Tech Pvt. Ltd.',
        start: 'Feb 2026',
        end: 'Present',
        location: 'Jaipur, IN',
        current: true,
        summary: 'Building ML infrastructure and a recommerce system purpose-built for ML hardware.',
        highlights: [
            'Mapping aging ML hardware to specific workflows with automated resale-value calculation.',
            'Targeting large GPU fleets in data centers, aiming to lift ML workflow efficiency by ~50%.',
        ],
        keys: ['ML Infra', 'MLOps', 'Python', 'Docker'],
    },
    {
        role: 'AI & Blockchain Intern',
        company: 'Kritu Capital LLC',
        start: 'Jan 2026',
        end: 'Present',
        location: 'Remote · Virginia, US',
        current: true,
        summary: 'Building a real-estate tokenization and mortgage solution for client deployment.',
        highlights: [
            'Spanning tokenization, mortgage origination, and AI-driven valuation across MERN, Hyperledger Fabric, and FastAPI.',
            'Targeting the US fractional real-estate ownership market (~$4.6B) — an emerging onchain investment driver.',
        ],
        keys: ['MERN', 'Hyperledger Fabric', 'FastAPI', 'Python'],
    },
    {
        role: 'Backend Intern',
        company: 'UpValue Tech Pvt. Ltd.',
        companyUrl: 'https://github.com/1Ayush-Petwal/UpValue_Future_Price_Pred',
        start: 'May 2025',
        end: 'Aug 2025',
        location: 'Jaipur, IN',
        summary:
            'Built a stock-prediction system with algorithmic trading for risk management and portfolio allocation.',
        highlights: [
            'Implemented Redis caching in a Unix environment, cutting API response times by 60% through efficient memory management.',
        ],
        keys: ['ML', 'Redis', 'FastAPI', 'Python'],
    },
];

export const education = {
    school: 'The LNM Institute of Information Technology',
    degree: 'B.E., Computer & Communication Engineering',
    location: 'Jaipur, IN',
    period: 'Expected May 2027',
    detail: 'Cumulative GPA: 8.13 / 10.0',
};

export const hackathons = {
    headline: '13+ hackathons, 3 wins',
    blurb: 'Mostly agentic AI and onchain systems — built fast, shipped under pressure.',
    links: [
        { label: 'Agentic Ethereum — SuriVerse', href: 'https://ethglobal.com/showcase/suriverse-nj5ru' },
        { label: 'LNM Hacks 7', href: 'https://dorahacks.io/buidl/22125/team' },
    ],
};

export const currently: string[] = [
    'Wiring OpenTelemetry tracing into the Kubeflow SDK.',
    'Going deep on ML systems design and Kubernetes internals.',
    'Poking at intent-based agents and onchain mechanism design.',
];

/** Fallback posts used by the Writing section when no live feed is available. */
export function articlesToPosts(
    articles: { title: string; link: string; pubDate: string; contentSnippet: string; source: string }[]
): Post[] {
    return articles.map((a) => ({
        title: a.title,
        link: a.link,
        date: new Date(a.pubDate).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }),
        description: a.contentSnippet?.slice(0, 160),
        source: a.source,
        readTime: estimateReadTime(a.contentSnippet),
    }));
}

function estimateReadTime(text: string): string {
    const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
}
