import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map(p => (
          <Link key={p.id} to={`/project/${p.id}`}>
            <div className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="tech">
                {p.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
