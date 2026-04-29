import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomeProjectsPreview() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  const projectsToShow =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 4);

  return (
    <section
      className="section home-projects-preview"
      aria-labelledby="home-projects-heading"
    >
      <div className="container">
        <div className="section-intro home-projects-preview__intro">
          <span className="section-intro__eyebrow">Recent Work</span>

          <h2 id="home-projects-heading" className="section-intro__title">
            A portfolio built across commercial, multi-family, strata, and
            custom environments.
          </h2>

          <p className="section-intro__copy">
            Crestline Painting delivers practical, professional results across
            British Columbia, with a focus on organization, finish quality, and
            long-term presentation.
          </p>
        </div>

        <div className="project-showcase-grid">
          {projectsToShow.map((project, index) => (
            <Link
              key={project.id}
              href="/projects"
              className={`project-showcase-card ${
                index % 2 !== 0 ? "project-showcase-card--offset" : ""
              }`}
              aria-label={`View ${project.title} in the project portfolio`}
            >
              <article className="project-showcase-card__inner">
                <div className="project-showcase-card__media">
                  <div
                    className="project-showcase-card__image"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  >
                    <div
                      className="project-showcase-card__overlay"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="project-showcase-card__body">
                  <span className="card__eyebrow">{project.category}</span>

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

        <div className="section__actions home-projects-preview__actions">
          <Link href="/projects" className="button button--primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}