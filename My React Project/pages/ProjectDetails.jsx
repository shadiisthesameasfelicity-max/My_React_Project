import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  return (
    <section className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h3>Tech Stack</h3>
      <ul>
        {project.tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
