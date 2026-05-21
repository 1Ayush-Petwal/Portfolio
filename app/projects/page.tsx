import Navbar from '@/components/Navbar';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';

const projects: LogItem[] = [
    {
        date: 'JAN 2025 - PRESENT',
        title: 'DARK POOL HOOK',
        description: 'A Uniswap v4 hook implementing a Dark Pool with end-to-end privacy using Zero-Knowledge Proofs (ZKP). Leverages EigenLayer AVS for decentralized order matching and execution of dark orders.',
        tags: ['SOLIDITY', 'ZKP', 'EIGENLAYER', 'UNISWAP V4'],
        type: 'project'
    },
    {
        date: 'DEC 2024',
        title: 'FABEL',
        description: 'A conversational AI-powered image generation platform integrated with the Farcaster protocol. Allows creators to generate on-chain images by simply tagging a bot, bridging social and creative tools.',
        tags: ['AI', 'FARCASTER', 'STABLE DIFFUSION', 'WEB3'],
        type: 'project'
    },
    {
        date: 'NOV 2024',
        title: 'CITREAMESH',
        description: 'A Model Context Protocol (MCP) server bridging LLMs with the Citrea blockchain ecosystem. Provides AI-accessible tools for wallet management, token utilities, and testnet interactions.',
        tags: ['TYPESCRIPT', 'MCP', 'CITREA', 'BLOCKCHAIN'],
        type: 'project'
    },
    {
        date: 'OCT 2024',
        title: 'RPG VERSE AGENTIC',
        description: 'ETH Global winner. AI-powered MMORPG multiverse built with RPG JS and Coinbase AgentKit. Features specialized AI agents capable of managing wallets and interacting with DeFi protocols like Aave.',
        tags: ['COINBASE AGENTKIT', 'MMORPG', 'EIGENDA', 'WEB3'],
        type: 'project'
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#f8f3e3]">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col items-center">
                <TechnicalLog
                    items={projects}
                    title="Projects"
                    description="A technical log of systems, tools, and experimental engines I've architected."
                />
            </main>
        </div>
    );
}
