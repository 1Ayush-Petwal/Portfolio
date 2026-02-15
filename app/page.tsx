import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';

const projects: LogItem[] = [
  {
    date: 'JAN 2025 - PRESENT',
    title: 'DARK POOL HOOK',
    description: 'A Uniswap v4 hook implementing a Dark Pool with end-to-end privacy using Zero-Knowledge Proofs (ZKP). Leverages EigenLayer AVS for decentralized order matching and execution of dark orders.',
    tags: ['SOLIDITY', 'ZKP', 'EIGENLAYER', 'UNISWAP V4'],
  },
  {
    date: 'DEC 2024',
    title: 'FABEL',
    description: 'A conversational AI-powered image generation platform integrated with the Farcaster protocol. Allows creators to generate on-chain images by simply tagging a bot, bridging social and creative tools.',
    tags: ['AI', 'FARCASTER', 'STABLE DIFFUSION', 'WEB3'],
  },
  {
    date: 'NOV 2024',
    title: 'CITREAMESH',
    description: 'A Model Context Protocol (MCP) server bridging LLMs with the Citrea blockchain ecosystem. Provides AI-accessible tools for wallet management, token utilities, and testnet interactions.',
    tags: ['TYPESCRIPT', 'MCP', 'CITREA', 'BLOCKCHAIN'],
  },
  {
    date: 'OCT 2024',
    title: 'RPG VERSE AGENTIC',
    description: 'ETH Global winner. AI-powered MMORPG multiverse built with RPG JS and Coinbase AgentKit. Features specialized AI agents capable of managing wallets and interacting with DeFi protocols like Aave.',
    tags: ['COINBASE AGENTKIT', 'MMORPG', 'EIGENDA', 'WEB3'],
  },
];

const work: LogItem[] = [
  {
    date: 'MAY 2025 - PRESENT',
    title: 'BACKEND INTERN @ UPVALUE TECH PVT LTD',
    description: 'Building a Stock Prediction System using ML algorithms for trading. Implemented Redis caching in Unix environments, optimizing API response times by 60% through efficient memory management.',
    tags: ['ML', 'REDIS', 'FASTAPI', 'SERVER'],
  },
  {
    date: 'MAY 2024 - PRESENT',
    title: 'BLOCKCHAIN & AI INTERN @ US STARTUP',
    description: 'Working on Real World Assets (RWA) tokenization and integration of AI with blockchain infrastructure.',
    tags: ['BLOCKCHAIN', 'AI', 'RWA'],
  },
  {
    date: '2023 - PRESENT',
    title: 'HACKATHONS & COMPETITIONS',
    description: 'Participated in 15+ hackathons with 2 wins: ETH Global and LNM Hacks 7. Focus on Agentic AI and Blockchain systems.',
    tags: ['HACKATHONS', 'ETH GLOBAL', 'LNM HACKS'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f3e3] selection:bg-retro-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 pb-24 flex flex-col items-center">
        <Hero />

        <TechnicalLog
          items={projects.map(p => ({ ...p, type: 'project' } as LogItem))}
          title="Projects"
          description="A technical log of systems, tools, and experimental engines I've architected."
        />

        <div className="py-12">
          <div className="border-t border-dashed border-[#d6d1c0] w-full" />
        </div>

        <TechnicalLog
          items={work.map(w => ({ ...w, type: 'work' } as LogItem))}
          title="Experience"
          description="Chronicles of professional engineering, scaling systems from zero to millions."
        />

        <footer className="mt-32 pt-12 border-t border-[#d6d1c0] flex flex-col items-center gap-6 text-[9px] font-mono text-retro-muted uppercase tracking-[0.3em] font-bold text-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>© 2026 AYUSH PETWAL</span>
            <span className="hidden md:block w-1 h-1 bg-retro-accent rounded-full" />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-retro-accent rounded-full animate-pulse" />
            BUILT WITH NEXT.JS 15 + TAILWIND 4
          </span>
        </footer>
      </main>
    </div>
  );
}
