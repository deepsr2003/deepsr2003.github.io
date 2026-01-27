import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App min-h-screen bg-black">
      <Header />
      <Hero />
      <StatsSection />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="secondary-text text-sm">
            © {new Date().getFullYear()} Deep Sarkar. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;