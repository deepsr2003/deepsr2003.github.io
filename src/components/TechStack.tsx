import React from 'react';

const TechStack: React.FC = () => {
  const tech = [
    'C++', 'Python', 'React', 'TypeScript', 'TensorFlow', 
    'Node.js', 'PostgreSQL', 'Docker', 'AWS'
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="flex space-x-8 animate-marquee">
            {[...tech, ...tech].map((item, index) => (
              <span 
                key={index} 
                className="text-xl font-medium text-gray-600 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="absolute top-0 left-0 flex space-x-8 animate-marquee2">
            {[...tech, ...tech].map((item, index) => (
              <span 
                key={index} 
                className="text-xl font-medium text-gray-700 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;