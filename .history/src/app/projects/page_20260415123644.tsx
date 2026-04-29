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
          title="A clean, professional project gallery across Crestline’s core service categories."
          copy="This version keeps the projects page practical and polished, giving Crestline a strong portfolio presence without overcomplicating the build."
        />

        <section className="section">
          <div className="container">
            <div className="card-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <div
                    className="project-card__image"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="project-card__body">
                    <div className="card__eyebrow">{project.category}</div>
                    <h2 className="card__title">{project.title}</h2>
                    <div className="card__meta">{project.location}</div>
                    <p className="card__copy">{project.description}</p>
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