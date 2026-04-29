type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export default function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__content">
          {/* Eyebrow */}
          <div className="page-hero__eyebrow">{eyebrow}</div>

          {/* Title */}
          <h1 className="page-hero__title">{title}</h1>

          {/* Copy */}
          <p className="page-hero__copy">{copy}</p>
        </div>
      </div>
    </section>
  );
}