import React from 'react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "B.Tech in Computer Science",
      organization: "National Institute of Technology Rourkela",
      period: "2022 - 2026",
      description: "Core courses: Data Structures, Algorithms, Machine Learning, Distributed Systems • Competitive Programming: Achieved Top 22% (7.8k/35k+) in Meta Hacker Cup 2024 and Top 16% (6.8k/42k+) in Codeforces Div. 2 • Profile: deepsr2003",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Education & Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 mb-12 items-start">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-purple-400 font-medium">{exp.period}</div>
                <div className="text-sm text-gray-500 capitalize">{exp.type}</div>
              </div>
              <div className="flex-1">
                <div className="text-xl font-semibold text-white mb-2">{exp.title}</div>
                <div className="text-gray-300 mb-3">{exp.organization}</div>
                <div className="text-gray-400 leading-relaxed">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;