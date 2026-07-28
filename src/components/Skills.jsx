import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const CATEGORIES = [
  {
    name: "Data Analysis",
    icon: "📊",
    color:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08))",
    barColor: "linear-gradient(90deg, #f5f5f5, #8a8a8a)",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Exploratory Data Analysis", level: 88 },
      { name: "Statistical Analysis", level: 82 },
    ],
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    color:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.07))",
    barColor: "linear-gradient(90deg, #e8e8e8, #6f6f6f)",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "Feature Engineering", level: 80 },
      { name: "Model Evaluation", level: 83 },
    ],
  },
  {
    name: "Visualization",
    icon: "🎨",
    color:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.06))",
    barColor: "linear-gradient(90deg, #f0f0f0, #7c7c7c)",
    skills: [
      { name: "Seaborn", level: 82 },
      { name: "Matplotlib", level: 85 },
    ],
  },
  {
    name: "Frontend Development",
    icon: "💻",
    color:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06))",
    barColor: "linear-gradient(90deg, #dedede, #666666)",
    skills: [
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 75 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "🛠️",
    color:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))",
    barColor: "linear-gradient(90deg, #f5f5f5, #757575)",
    skills: [
      { name: "Jupyter / Colab", level: 90 },
      { name: "Git & GitHub", level: 80 },
      { name: "Excel (Advanced)", level: 88 },
      { name: "VS Code", level: 85 },
    ],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id='skills' className='skills section' ref={ref}>
      <div className='container'>
        <span className='section-label'>Skills</span>
        <h2 className='section-title'>
          My <span className='glow-text'>Expertise</span>
        </h2>
        <p className='section-subtitle'>
          A breakdown of my technical skills across data and frontend
          development.
        </p>

        <div className='skills-grid'>
          {CATEGORIES.map((cat) => (
            <div className='skill-category' key={cat.name}>
              <div className='skill-category-header'>
                <div
                  className='skill-category-icon'
                  style={{ background: cat.color }}>
                  {cat.icon}
                </div>
                <h3 className='skill-category-name'>{cat.name}</h3>
              </div>
              <div className='skill-items'>
                {cat.skills.map((skill) => (
                  <div className='skill-item' key={skill.name}>
                    <div className='skill-item-header'>
                      <span className='skill-item-name'>{skill.name}</span>
                      <span className='skill-item-level'>{skill.level}%</span>
                    </div>
                    <div className='skill-bar'>
                      <div
                        className='skill-bar-fill'
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          background: cat.barColor,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
