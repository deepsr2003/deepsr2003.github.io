import React, { useEffect, useRef } from 'react';

interface Skill {
  category: string;
  skills: string[];
}

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
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
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "JavaScript", "TypeScript", "Java"]
    },
    {
      category: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "Express.js", "Next.js"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Data Analysis"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "MySQL", "Kafka", "Redis", "Linux", "REST APIs"]
    },
    {
      category: "Finance & Quant",
      skills: ["Quantitative Analysis", "Options Trading", "Statistical Modeling", "Risk Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>

        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className={`skill-category-card reveal-animation ${skillGroup.category === "Finance & Quant" ? "glow-border-effect" : "border-gray-800"}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;
