import "./About.css";

const TECH_STACK = [
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Pandas", icon: "🐼" },
  { name: "Scikit-learn", icon: "⚙️" },
  { name: "Excel", icon: "📋" },
  { name: "NumPy", icon: "🔢" },
  { name: "Matplotlib", icon: "🎨" },
  { name: "Git", icon: "🔀" },
];

export default function About() {
  return (
    <section id='about' className='about section'>
      <div className='container'>
        <span className='section-label'>About Me</span>
        <h2 className='section-title'>
          Building Websites with <span className='glow-text'>Purpose</span>
        </h2>
        <p className='section-subtitle'>
          A curious mind focused on crafting modern websites, interfaces, and
          digital experiences.
        </p>

        <div className='about-grid'>
          <div className='about-photo-wrapper'>
            <div className='about-photo'>
              <div className='about-photo-placeholder'>👨‍💻</div>
            </div>
            <div className='about-photo-accent'></div>
          </div>

          <div className='about-text'>
            <h3>
              Hello, I'm <span className='glow-text'>Richard</span>
            </h3>
            <div className='about-bio'>
              <p>
                I'm a Data Science student with a growing focus on frontend
                development and website building. I create responsive interfaces
                with clean layouts, strong typography, and polished
                interactions.
              </p>
              <p>
                My journey started with data, but now I also enjoy turning ideas
                into websites that feel modern, intentional, and easy to use. I
                like working from raw concepts to finished digital products. I
                also run a startup, which keeps me focused on building with
                purpose and thinking like a founder.
              </p>
              <p>
                When I'm not coding, you'll find me refining UI details,
                exploring new web patterns, or learning tools that help me build
                better frontend experiences.
              </p>
            </div>

            <p className='tech-stack-title'>Tech Stack</p>
            <div className='tech-stack'>
              {TECH_STACK.map(({ name, icon }) => (
                <span key={name} className='tech-tag'>
                  <span className='tech-tag-icon'>{icon}</span>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
