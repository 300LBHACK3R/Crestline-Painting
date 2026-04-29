import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomeProjectsPreview() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="section">
      <div className="container">

        {/* INTRO */}
        <div className="section-intro home-projects-preview__intro">
          <span className="section-intro__eyebrow">
            Recent Work
          </span>

          <h2 className="section-intro__title">
            A project portfolio built across commercial, multi-family, strata, and custom environments.
          </h2>

          <p className="section-intro__copy">
            Crestline Painting delivers practical, professional results across a wide range of project types,
            with a focus on organization, finish quality, and long-term presentation.
          </p>
        </div>

        {/* GRID */}
        <div className="project-showcase-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="project-showcase-card"
              aria-label={`View project portfolio`}
            >
              <article>

                <div
                  className="project-showcase-card__image"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                  }}
                >
                  <div className="project-showcase-card__overlay" />
                </div>

                <div className="project-showcase-card__body">
                  <span className="card__eyebrow">
                    {project.category}
                  </span>

                  <h3 className="project-showcase-card__title">
                    {project.title}
                  </h3>

                  <div className="project-showcase-card__meta">
                    {project.location}
                  </div>

                  <p className="project-showcase-card__copy">
                    {project.description}
                  </p>
                </div>

              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="section__actions">
          <Link href="/projects" className="site-header__cta">
            View Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}