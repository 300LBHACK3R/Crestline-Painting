type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  darkOverlay?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  copy,
  backgroundImage,
  backgroundPosition = "center center",
  darkOverlay = true,
}: PageHeroProps) {
  return (
    <section className="page-hero-base">
      {backgroundImage && (
        <div
          className="page-hero-base__bg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition,
          }}
        />
      )}

      <div className="page-hero-base__container">
        <div className="page-hero-base__content">
          {eyebrow && (
            <p className="page-hero-base__eyebrow">{eyebrow}</p>
          )}

          <h1 className="page-hero-base__title">{title}</h1>

          {copy && (
            <p className="page-hero-base__copy">{copy}</p>
          )}
        </div>
      </div>
    </section>
  );
}