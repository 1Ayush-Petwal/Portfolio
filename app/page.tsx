import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';

const projects: LogItem[] = [
  {
    date: 'JAN 2024 - PRESENT',
    title: 'AGENTIC AI ENGINE',
    description: 'Developed a high-performance orchestration layer for autonomous AI agents, enabling complex multi-step task execution with real-time feedback loops and tool-calling capabilities.',
    tags: ['NEXT.JS 15', 'TYPESCRIPT', 'OPENAI', 'REDIS'],
  },
  {
    date: 'JUN 2023 - DEC 2023',
    title: 'DISTRIBUTED ASSET LEDGER',
    description: 'Architected a distributed ledger system for real estate tokenization, focusing on security, low-latency transactions, and immutable audit trails using Hyperledger Fabric.',
    tags: ['GO', 'HYPERLEDGER', 'GRPC', 'POSTGRES'],
  },
  {
    date: 'JAN 2023 - MAY 2023',
    title: 'NEURAL VISUALIZER',
    description: 'Built a 3D visualization platform for neural network weights and activations using WebGL and Three.js, helping researchers debug model behavior.',
    tags: ['REACT', 'THREE.JS', 'WEBGL', 'GLSL'],
  },
];

const work: LogItem[] = [
  {
    date: '2022 - PRESENT',
    title: 'SENIOR FRONTEND ENGINEER @ TECHCORP',
    description: 'Leading the design system team and spearheading the migration to micro-frontends architecture. Improved application load times by 40% through aggressive caching and code-splitting.',
    tags: ['LEADERSHIP', 'ARCHITECT', 'PERFORMANCE'],
  },
  {
    date: '2020 - 2022',
    title: 'FRONTEND DEVELOPER @ STARTUPX',
    description: 'Built the core user dashboard and real-time charting library. Scaled the platform to support 100k+ concurrent users.',
    tags: ['REACT', 'D3.JS', 'WEBSOCKETS'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f3e3] selection:bg-retro-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
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

        <footer className="mt-32 pt-12 border-t border-[#d6d1c0] flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-mono text-retro-muted uppercase tracking-[0.3em] font-bold">
          <div className="flex items-center gap-4">
            <span>© 2024 AYUSH PETWAL</span>
            <span className="w-1 h-1 bg-retro-accent rounded-full" />
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
