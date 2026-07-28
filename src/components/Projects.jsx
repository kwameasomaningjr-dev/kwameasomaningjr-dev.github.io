import "./Projects.css";

const PROJECTS = [
  {
    title: "Customer Churn Predictor",
    desc: "Built a machine learning model to predict customer churn using logistic regression and random forests. Achieved 92% accuracy with feature engineering and hyperparameter tuning.",
    tags: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    gradient: "linear-gradient(135deg, #f4f4f4 0%, #6e6e6e 100%)",
    icon: "🔮",
    links: [
      {
        label: "View Code",
        href: "https://github.com/kwameasomaningjr-dev/customer_churn_predictor",
      },
    ],
  },
  {
    title: "Proxy Innovation Systems",
    desc: "Frontend website built for Proxy Innovation Systems with a clean monochrome presentation and polished business-focused layout.",
    tags: ["Website", "Frontend", "UI Design"],
    gradient: "linear-gradient(135deg, #f4f4f4 0%, #6e6e6e 100%)",
    icon: "🌐",
    links: [
      {
        label: "Live Site",
        href: "https://proxyinnovations.com",
      },
    ],
  },
  {
    title: "ProposalAI",
    desc: "Web application for generating and managing proposals, designed and deployed as a modern frontend experience.",
    tags: ["Website", "React", "Frontend"],
    gradient: "linear-gradient(135deg, #ededed 0%, #646464 100%)",
    icon: "✍️",
    links: [
      {
        label: "Live Site",
        href: "https://proposal-assistant-roan.vercel.app/",
      },
    ],
  },
  {
    title: "Christ Harvest Sanctuary",
    desc: "Church website built to present information, updates, and online presence with a clean responsive interface.",
    tags: ["Website", "Responsive Design", "Frontend"],
    gradient: "linear-gradient(135deg, #e8e8e8 0%, #777777 100%)",
    icon: "⛪",
    links: [
      {
        label: "Live Site",
        href: "https://chs-gamma.vercel.app/",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id='projects' className='projects section'>
      <div className='container'>
        <span className='section-label'>Projects</span>
        <h2 className='section-title'>
          Featured <span className='glow-text'>Work</span>
        </h2>
        <p className='section-subtitle'>
          A portfolio space for website builds and technical work. Add live site
          links or code links to each project.
        </p>

        <div className='projects-grid'>
          {PROJECTS.map((project, i) => (
            <div className='project-card' key={i}>
              <div className='project-thumbnail'>
                <div
                  className='project-thumbnail-bg'
                  style={{ background: project.gradient }}>
                  {project.icon}
                </div>
                {project.links.length > 0 && (
                  <div className='project-overlay'>
                    <a
                      href={project.links[0].href}
                      className='project-overlay-btn'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {project.links[0].label}
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path d='M7 17L17 7M7 7h10v10' />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
              <div className='project-info'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-desc'>{project.desc}</p>
                <div className='project-tags'>
                  {project.tags.map((tag) => (
                    <span key={tag} className='project-tag'>
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className='project-links'>
                    {project.links.map((link) => (
                      <a
                        key={`${project.title}-${link.label}`}
                        href={link.href}
                        className='project-overlay-btn'
                        target='_blank'
                        rel='noopener noreferrer'>
                        {link.label}
                        <svg
                          width='14'
                          height='14'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <path d='M7 17L17 7M7 7h10v10' />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
