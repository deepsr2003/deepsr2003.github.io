import React, { useEffect, useRef } from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative">
      <div className="container mx-auto px-6 py-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto reveal-scale">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="name-text">Deep Sarkar</span>
          </h1>
          <div className="text-xl md:text-2xl secondary-text mb-8 font-medium">
            <span className="typewriter-text">Software Engineer & AI Researcher</span>
            <span className="block text-center secondary-text">NIT Rourkela</span>
          </div>
          <p className="text-lg secondary-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Building Intelligent Systems & Scalable Architecture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 text-gray-400">
            <a 
              href="https://github.com/deepsr2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/deepsr2003/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:deepsr2003@gmail.com" 
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <button 
          className="scroll-indicator" 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to projects"
        >
          <svg className="scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;