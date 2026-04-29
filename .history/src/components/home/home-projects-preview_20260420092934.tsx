import Link from "next/link";
import { projects } from "@/data/projects";
import SectionIntro from "@/components/shared/section-intro";

export default function HomeProjectsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Projects"
          title="A strong portfolio across commercial, multi-family, strata, and custom home projects."
          copy="Crestline Painting delivers consistent, high-quality results across a wide range of project types, with a focus on clean finishes, organization, and long-term durability."
        />

        <div className="card-grid">
          {projects.slice(0, 4).map((project) => (
            <article key={project.title} className="project-card">
              <div
                className="project-card__image"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              <div className="project-card__body">
                <div className="card__eyebrow">{project.category}</div>
                <h3 className="card__title">{project.title}</h3>
                <p className="card__copy">{project.description}</p>
                <div className="card__meta">{project.location}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="section__actions">
          <Link href="/projects" className="card__link">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}