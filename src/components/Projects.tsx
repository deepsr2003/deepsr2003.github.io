import React, { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  highlights?: string[];
  metrics?: Record<string, string>;
}

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('revealed');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const featuredProjects: Project[] = [
    {
      title: "High-Frequency Matching Engine",
      description: "Architected a Limit Order Book matching engine capable of processing 15,000 orders/second. Implemented lock-free data structures and optimized for L1/L2 cache locality, reducing p99 latency by 40%.",
      tech: ["C++ 17", "System Design", "Latency", "Arbitrage", "Multithreading"],
      githubUrl: "https://github.com/deepsr2003/low-latency-matching-engine",
      highlights: ["15K ops/sec", "40% latency reduction", "Lock-free architecture"],
      metrics: { throughput: "15K ops/sec", latency: "40% faster", architecture: "Lock-free" }
    },
    {
      title: "Options Strategy Visualizer",
      description: "Real-time options analytics platform processing 50M+ data points with sub-10ms calculation times. Built 3D implied volatility surface renderer using NumPy optimization.",
      tech: ["Python", "NumPy", "Quantitative Finance", "3D Visualization"],
      githubUrl: "https://github.com/deepsr2003/Options-Strategy-Visualizer",
      highlights: ["50M+ points", "<10ms calc time", "Live market data"],
      metrics: { data: "50M+ points", latency: "<10ms", accuracy: "99.95%" }
    }
  ];

  const otherProjects: Project[] = [
    {
      title: "NexusPipe - Distributed Analytics Pipeline",
      description: "Fault-tolerant microservices system handling high-throughput event data via Apache Kafka. Features:\n• Node.js Collector & Python Analytics\n• Real-time Redis dashboards\n• MySQL historical storage",
      tech: ["Node.js", "Python", "Apache Kafka", "Redis", "MySQL", "WebSockets", "Microservices"],
      githubUrl: "https://github.com/deepsr2003/nexus-pipe-analytics",
      highlights: ["Distributed architecture", "Real-time processing", "Fault-tolerant design"],
      metrics: { throughput: "High-volume", latency: "Real-time", reliability: "99.9%" }
    },
    {
      title: "Real-Time Messaging Platform",
      description: "WebSocket platform supporting 10K concurrent users. Message delivery in under 100ms with 99.8% reliability.",
      tech: ["JavaScript", "Web Development", "Real-time Communication"],
      githubUrl: "https://github.com/deepsr2003/micro_telegram",
      highlights: ["10K concurrent", "100ms delivery", "99.8% reliable"],
      metrics: { users: "10K+", latency: "100ms", reliability: "99.8%" }
    },
    {
      title: "Fama-French Factor Models",
      description: "Quantitative analysis of 20+ years of market data. Backtesting accuracy of 87% vs S&P 500 benchmark.",
      tech: ["Python", "Quantitative Finance", "Statistical Analysis"],
      githubUrl: "https://github.com/deepsr2003/fama-french-factor-models",
      highlights: ["20+ years data", "87% accuracy", "vs S&P benchmark"],
      metrics: { history: "20+ years", accuracy: "87%", benchmark: "S&P 500" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold text-white mb-4">Featured Projects</h3>
            <p className="secondary-text">Top 2 projects with quantified impact</p>
          </div>
          
          <div ref={sectionRef} className="space-y-12">
            {featuredProjects.map((project, index) => (
              <a 
                key={index}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block glow-border-effect rounded-xl p-8 grid md:grid-cols-2 gap-8 items-center reveal-animation hover:bg-gray-900/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {index === 0 ? (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white mb-2 ai-gradient">{project.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {Object.entries(project.metrics).slice(0, 3).map(([key, value], i) => (
                            <div key={i} className="text-center p-3 bg-black/40 rounded-lg border border-gray-700">
                              <div className="text-xs text-purple-300 capitalize">{key}</div>
                              <div className="text-sm font-bold text-white">{value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="skill-tag">{tech}</span>
                        ))}
                      </div>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Architecture & Code
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                        {(() => {
                          try {
                            return (
                              <img 
                                src="/images/orderbook.png" 
                                alt="High-Frequency Matching Engine Architecture"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  console.log('Image not found, showing icon placeholder');
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                            );
                          } catch {
                            return null;
                          }
                        })()}
                        <div className="text-gray-400 text-center">
                          <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm">System Architecture</p>
                          <p className="text-xs secondary-text mt-1">Lock-free matching engine</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center order-2 md:order-1">
                      <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center">
                         <div className="text-gray-400 text-center hidden">
                           <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                           </svg>
                           <p className="text-sm">3D Visualization</p>
                           <p className="text-xs secondary-text mt-1">Options analytics</p>
                         </div>
                         {(() => {
                           try {
                             return (
                               <img 
                                 src="/images/options-viz.png" 
                                 alt="Options Strategy Visualizer"
                                 className="w-full h-full object-cover"
                                 onError={(e) => {
                                   console.log('Options image not found, showing icon placeholder');
                                   e.currentTarget.style.display = 'none';
                                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                 }}
                               />
                             );
                           } catch {
                             return null;
                           }
                         })()}
                      </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-4">
                      <h3 className="text-2xl font-bold text-white mb-2 ai-gradient">{project.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {Object.entries(project.metrics).slice(0, 3).map(([key, value], i) => (
                            <div key={i} className="text-center p-3 bg-black/40 rounded-lg border border-gray-700">
                              <div className="text-xs text-purple-300 capitalize">{key}</div>
                              <div className="text-sm font-bold text-white">{value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="skill-tag">{tech}</span>
                        ))}
                      </div>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code & Demo
                      </a>
                    </div>
                  </>
                 )}
              </a>
            ))}
        </div>

        <div className="mt-24 text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Other Projects</h3>
          <p className="secondary-text">Additional notable work</p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <a 
                key={index}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block glow-border-effect rounded-xl p-6 reveal-animation hover:bg-gray-900/50 transition-all duration-300 group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h4>
                <p className="secondary-text leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tech.map((tech, i) => (
                     <span key={i} className="skill-tag text-xs">{tech}</span>
                   ))}
                 </div>

                 <a 
                   href={project.githubUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                   onClick={(e) => e.stopPropagation()}
                 >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;