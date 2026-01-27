import React from 'react';

interface Achievement {
  title: string;
  value: string;
  icon: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "LeetCode",
      value: "1500+",
      icon: "⚡"
    },
    {
      title: "CodeForces",
      value: "Expert",
      icon: "🏆"
    },
    {
      title: "Hackathons",
      value: "5+ Wins",
      icon: "🥇"
    },
    {
      title: "Projects",
      value: "20+",
      icon: "💻"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-400">{achievement.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;