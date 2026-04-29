import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader light />

      <main>
        <PageHero
          eyebrow="Projects"
          title="A portfolio of work across commercial, multi-family, strata, and custom homes."
          copy="Crestline Painting delivers consistent, high-quality results across a wide range of project types. From large-scale developments to detailed custom homes, every project is completed with precision, organization, and a focus on long-term performance."
          backgroundImage="/images/projects/project-1.jpg"
          darkOverlay={false}
        />

        <section className="section">
          <div className="container">

            <div className="project-showcase-grid">
              {projects.map((project, i) => (
                <article
                  key={project.title}
                  className={`project-showcase-card ${
                    i % 2 !== 0 ? "project-showcase-card--offset" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="project-showcase-card__media">
                    <div
                      className="project-showcase-card__image"
                      style={{
                        backgroundImage: `url("${project.image}")`,
                      }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="project-showcase-card__body">
                    <div className="card__eyebrow">
                      {project.category}
                    </div>

                    <h2 className="project-showcase-card__title">
                      {project.title}
                    </h2>

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