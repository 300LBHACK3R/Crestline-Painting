import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomeProjectsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro home-projects-preview__intro">
          <div className="section-intro__eyebrow">Recent Work</div>
          <h2 className="section-intro__title">
            A project portfolio built across commercial, multi-family, strata, and custom environments.
          </h2>
          <p className="section-intro__copy">
            Crestline Painting delivers practical, professional results across a wide range of project types,
            with a focus on organization, finish quality, and long-term presentation.
          </p>
        </div>

        <div className="project-showcase-grid">
          {projects.slice(0, 4).map((project) => (
            <article key={project.title} className="project-showcase-card">
              <div
                className="project-showcase-card__image"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="project-showcase-card__body">
                <div className="card__eyebrow">{project.category}</div>
                <h3 className="project-showcase-card__title">{project.title}</h3>
                <div className="project-showcase-card__meta">{project.location}</div>
                <p className="project-showcase-card__copy">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section__actions">
          <Link href="/projects" className="site-header__cta">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}