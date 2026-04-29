export interface Project {
  slug: string
  name: string
  tagline: string
  metric: string
  metricLabel: string
  stack: string[]
  description: string
  highlights: string[]
  githubUrl: string
  downloadUrl?: string
  screenshotUrl?: string
  category: 'systems' | 'backend' | 'realtime' | 'fintech'
  color: 'blue' | 'purple' | 'emerald' | 'amber'
  repoSlug: string 
}


const baseGitHub = 'https://github.com/deepsr2003'

export const projects: Project[] = [
  {
    slug: 'matching-engine',
    repoSlug: 'low-latency-matching-engine',

    name: 'Low-Latency C++ Matching Engine',
    tagline: 'Limit-order book: naïve STL → 14.7M ops/sec via mmap + bitmap O(1)',
    metric: '14.7M ops/s',
    metricLabel: 'peak throughput · 1.15M order stress-test',
    stack: ['C++17', 'Memory-mapped I/O', 'Lock-free', 'Cache optimization'],
    description:
      'Production-grade limit-order book with four evolving versions showcasing systems optimization. Eliminated dynamic allocation via intrusive linked lists and lock-free object pools. Replaced linear O(n) best-bid/ask with O(1) bitmap lookups using __builtin_clzll. Memory-mapped file ingestion reduced data load from seconds to microseconds.',
    highlights: [
      '74× speedup from V1 naïve → V4 optimised',
      '~5.3ns internal latency per order processed',
      'O(1) bid/ask via __builtin_clzll bitmap lookup',
      'mmap ingestion: 5.8s → 78ms for 1.15M orders',
    ],
    githubUrl: 'https://github.com/deepsr2003/low-latency-matching-engine',
    downloadUrl: 'https://github.com/deepsr2003/low-latency-matching-engine/archive/refs/heads/main.zip',
    screenshotUrl: '/images/orderbook.png',
    category: 'systems',
    color: 'blue',
  },
  {
    slug: 'nexuspipe',
    repoSlug: 'NexusPipe',

    name: 'NexusPipe',
    tagline: 'Event-driven distributed analytics pipeline with zero data loss',
    metric: '202 Accepted',
    metricLabel: 'Zero dropped events under traffic spikes',
    stack: ['Node.js', 'Python', 'Apache Kafka', 'Redis', 'MySQL', 'WebSockets'],
    description:
      'Polyglot microservice architecture decouples ingestion from processing. Node.js gateway handles 202 Accepted responses immediately while Kafka queues events. Python workers process asynchronously. Redis powers sub-millisecond counters for live dashboards, MySQL stores ACID-compliant historical data. Hybrid WebSocket + REST API for real-time and batch clients.',
    highlights: [
      'Kafka ensures zero dropped events on spikes',
      'Redis Pub/Sub + WebSocket for live streaming',
      'Immediate 202 ACK—zero client blocking',
      'Polyglot persistence: Redis + MySQL + Kafka',
    ],
    githubUrl: 'https://github.com/deepsr2003/nexus-pipe-analytics',
    downloadUrl: 'https://github.com/deepsr2003/nexus-pipe-analytics/archive/refs/heads/main.zip',
    screenshotUrl: '/images/nexuspipe.png',
    category: 'backend',
    color: 'purple',
  },
  {
    slug: 'micro-telegram',
    repoSlug: 'micro-telegram',

    name: 'Micro Telegram',
    tagline: 'Full-stack real-time messaging—500+ concurrent chat rooms',
    metric: '500+',
    metricLabel: 'concurrent rooms, sub-100ms delivery',
    stack: ['React', 'Node.js', 'WebSockets', 'MySQL', 'Docker'],
    description:
      'Production Telegram clone with real-time messaging, group chats, typing indicators, seen receipts, and user presence. Horizontally scalable WebSocket layer using Node.js clusters. MySQL optimised with foreign key indexing for 40% faster queries. Full Docker containerisation for portable deployment and development consistency.',
    highlights: [
      'WebSocket layer scales to 500+ concurrent rooms',
      'Real-time typing indicators + delivery receipts',
      'Fully containerised with Docker for self-hosting',
      'Group messaging with presence awareness',
    ],
    githubUrl: 'https://github.com/deepsr2003/micro_telegram',
    downloadUrl: 'https://github.com/deepsr2003/micro_telegram/archive/refs/heads/main.zip',
    screenshotUrl: '/images/micro-telegram.png',
    category: 'realtime',
    color: 'emerald',
  },
  {
    slug: 'options-visualizer',
    repoSlug: 'Options-Strategy-Visualizer',

    name: 'Options Strategy Visualizer',
    tagline: 'Real-time volatility surfaces & multi-leg payoff analysis',
    metric: '3D IV',
    metricLabel: 'implied volatility surfaces from live feeds',
    stack: ['Python', 'NumPy', 'Matplotlib', 'Pandas', 'Financial APIs'],
    description:
      'Quantitative finance tool for visualizing multi-leg options strategies and 3D implied volatility surfaces from live market data. Calculates Greeks (delta, gamma, vega, theta) for dynamic hedging scenarios. Real-time market data integration with sophisticated numerical methods for surface interpolation and payoff computation.',
    highlights: [
      '3D IV surface interpolation from sparse ticks',
      'Greeks calculation for risk management',
      'Multi-leg strategy payoff visualization',
      'Real-time market data integration',
    ],
    githubUrl: 'https://github.com/deepsr2003/Options-Strategy-Visualizer',
    downloadUrl: 'https://github.com/deepsr2003/Options-Strategy-Visualizer/archive/refs/heads/main.zip',
    screenshotUrl: '/images/options-visual.png',
    category: 'fintech',
    color: 'amber',
  },
  {
    slug: 'bitespeed',
    repoSlug: 'bitespeed-identity-reconciliation',
    name: 'Bitespeed Identity Reconciliation',
    tagline: 'Enterprise-grade identity deduplication API',
    metric: '99.9%',
    metricLabel: 'match accuracy on production dataset',
    stack: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    description:
      'Production-ready identity reconciliation engine solving the problem of duplicate customer records. Uses probabilistic matching and graph-based algorithms to identify and merge customer identities across emails and phone numbers. Enterprise API with comprehensive error handling and auditability.',
    highlights: [
      'Graph-based identity resolution algorithm',
      'Handles edge cases in phone/email normalization',
      'Comprehensive audit trail for compliance',
      'Production-grade error handling + monitoring',
    ],
    githubUrl: 'https://github.com/deepsr2003/bitespeed-identity-reconciliation',
    downloadUrl: 'https://github.com/deepsr2003/bitespeed-identity-reconciliation/archive/refs/heads/main.zip',
    screenshotUrl: '/images/spring-crypto.png',
    category: 'backend',
    color: 'purple',
  },
  {
    slug: 'fama-french',
    repoSlug: 'fama-french-replication',
    name: 'Fama-French Factor Replication',
    tagline: 'Academic research implementation—Size & Value factors',
    metric: 'SMB/HML',
    metricLabel: 'Size & Value factor portfolios',
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Financial APIs'],
    description:
      'Research-grade implementation of the Fama-French 3-factor model. Downloads historical OHLCV data, computes firm-level characteristics, and constructs Size (SMB) and Value (HML) factor portfolios. Performs statistical analysis including Fama-MacBeth regressions for factor significance testing.',
    highlights: [
      'Data pipeline: raw market data → factor returns',
      'Fama-MacBeth regression for factor testing',
      'Comprehensive performance attribution analysis',
      'Production data quality validation',
    ],
    githubUrl: 'https://github.com/deepsr2003/fama-french-replication',
    downloadUrl: 'https://github.com/deepsr2003/fama-french-replication/archive/refs/heads/main.zip',
    screenshotUrl: '/images/french-fama.png',
    category: 'fintech',
    color: 'amber',
  },
  {
    slug: 'fueleú-maritime',
    repoSlug: 'fueleu-maritime',
    name: 'FuelEU Maritime Compliance',
    tagline: 'Full-stack regulatory compliance platform',
    metric: '100%',
    metricLabel: 'compliance rule automation',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    description:
      'Full-stack compliance platform automating FuelEU Maritime regulations. Real-time vessel tracking with regulatory rule engine. Automated reporting, violation alerts, and audit trails. Role-based access control with multi-tenant architecture for shipping companies.',
    highlights: [
      'Real-time compliance rule engine',
      'Automated regulatory reporting',
      'Violation detection + alert system',
      'Multi-tenant SaaS architecture',
    ],
    githubUrl: 'https://github.com/deepsr2003/fueleu-maritime',
    downloadUrl: 'https://github.com/deepsr2003/fueleu-maritime/archive/refs/heads/main.zip',
    screenshotUrl: '/images/springboot-terminal-view.png',
    category: 'backend',
    color: 'blue',
  },
]
