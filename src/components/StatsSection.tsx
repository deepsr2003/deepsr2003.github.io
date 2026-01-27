import React from 'react';
import { Zap, Trophy, Code } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      icon: <Trophy className="w-6 h-6 text-purple-400" />,
      title: "Education",
      value: "NIT Rourkela (B.Tech)"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Coding",
      value: "CF Rating: 1200"
    },
    {
      icon: <Trophy className="w-6 h-6 text-purple-400" />,
      title: "Hackathons",
      value: "11 Wins"
    },
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: "Projects",
      value: "20+ Projects"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glow-border-effect rounded-xl p-6 text-center">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-white font-semibold mb-1">{stat.value}</div>
              <div className="secondary-text text-sm">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;