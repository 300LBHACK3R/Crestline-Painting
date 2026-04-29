import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader light />

      <main className="projects-page">
        <PageHero
          eyebrow="Projects"
          title="A portfolio of work across commercial, multi-family, strata, and custom homes."
          copy="Crestline Painting delivers consistent, high-quality results across a wide range of project types. From large-scale developments to detailed custom homes, every project is completed with precision, organization, and a focus on long-term performance."
          backgroundImage="/images/projects/Crestline-Painting-Interior-Exterior-site-photo.jpg"
          backgroundPosition="center center"
          darkOverlay={false}
        />

        <section
          className="section projects-showcase-section"
          aria-labelledby="projects-showcase-heading"
        >
          <div className="container">
            <div className="section-intro projects-showcase-section__intro">
              <span className="section-intro__eyebrow">Selected Work</span>

              <h2 id="projects-showcase-heading" className="section-intro__title">
                Professional painting projects across British Columbia.
              </h2>

              <p className="section-intro__copy">
                A look at commercial, multi-family, strata, and custom home
                projects completed with a focus on preparation, presentation,
                and dependable finish quality.
              </p>
            </div>

            <div className="project-showcase-grid">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`project-showcase-card ${
                    index % 2 !== 0 ? "project-showcase-card--offset" : ""
                  }`}
                >
                  <div className="project-showcase-card__media">
                    <div
                      className="project-showcase-card__image"
                      style={{
                        backgroundImage: `url("${project.image}")`,
                      }}
                      role="img"
                      aria-label={`${project.title} project in ${project.location}`}
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}