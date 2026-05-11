import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import VideoModal from "../components/VideoModal";
import profilePhotoAvif128 from "../assets/profile-128.avif";
import profilePhotoAvif256 from "../assets/profile-256.avif";
import profilePhotoWebp128 from "../assets/profile-128.webp";
import profilePhotoWebp256 from "../assets/profile-256.webp";

const icons = {
  Email: (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  ),
  GitHub: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  ),
  Twitter: (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

function Home() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <header className="header">
        <div className="avatar">
          <picture>
            <source
              type="image/avif"
              srcSet={`${profilePhotoAvif128} 128w, ${profilePhotoAvif256} 256w`}
              sizes="(max-width: 640px) 76px, 96px"
            />
            <source
              type="image/webp"
              srcSet={`${profilePhotoWebp128} 128w, ${profilePhotoWebp256} 256w`}
              sizes="(max-width: 640px) 76px, 96px"
            />
            <img
              src={profile.profilePhoto}
              alt="Sathwik Bodakuntla profile"
              width={96}
              height={96}
              sizes="(max-width: 640px) 76px, 96px"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </picture>
        </div>
        <div className="header-text">
          <h1>{profile.name}</h1>
          <p className="header-role">{profile.headline}</p>
          <p className="header-bio">
            {profile.bio.map((part, index) =>
              part.emphasis ? (
                <strong key={index}>{part.text}</strong>
              ) : (
                <span key={index}>{part.text}</span>
              ),
            )}
          </p>
          <div className="social-row">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {icons[link.label as keyof typeof icons]}
                {link.label}
              </a>
            ))}
            <Link className="push" to="/blog">
              Writing -&gt;
            </Link>
          </div>
        </div>
      </header>

      <section id="experience">
        <h2>Experience</h2>
        {profile.experience.map((item) => (
          <div key={item.company} className="exp-item">
            <div
              className={`exp-logo ${item.logoTheme === "dark" ? "dark" : ""}`}
            >
              <img
                src={item.logo}
                alt={`${item.company} logo`}
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <div className="exp-org">{item.role}</div>
              <div className="exp-role">
                {item.company} - {item.type}
              </div>
              <div className="exp-meta">
                {item.dates} - {item.location} - {item.mode}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="projects">
        <h2>Projects and Demos</h2>
        {profile.projects.map((project) => (
          <div key={project.name} className="project-item">
            <div className="proj-header">
              <span className="proj-name">{project.name}</span>
              <div className="proj-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub -&gt;
                </a>
                {project.demoId ? (
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveVideoId(project.demoId || null);
                    }}
                  >
                    Demo -&gt;
                  </a>
                ) : null}
              </div>
            </div>
            <p className="proj-desc">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <table className="skills-table">
          <tbody>
            {profile.skills.map((skill) => (
              <tr key={skill.category}>
                <td>{skill.category}</td>
                <td>{skill.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p className="contact-intro">
          Open to AI research collaborations, consulting, and conversations
          about agentic systems and LLM engineering. Best reached by email.
        </p>
        <div className="contact-links">
          {profile.contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-link"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </>
  );
}

export default Home;
