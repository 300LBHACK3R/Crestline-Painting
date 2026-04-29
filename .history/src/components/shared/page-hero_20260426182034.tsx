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
  const hasBackground = Boolean(backgroundImage);

  return (
    <section
      className={`page-hero-base ${hasBackground ? "page-hero-base--image" : "page-hero-base--plain"}`}
    >
      {hasBackground ? (
        <>
          <div
            className="page-hero-base__bg"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition,
            }}
            aria-hidden="true"
          />
          <div
            className={`page-hero-base__overlay ${
              darkOverlay ? "page-hero-base__overlay--dark" : "page-hero-base__overlay--light"
            }`}
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="container page-hero-base__container">
        <div className="page-hero-base__content">
          {eyebrow ? <p className="page-hero-base__eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero-base__title">{title}</h1>
          {copy ? <p className="page-hero-base__copy">{copy}</p> : null}
        </div>
      </div>
    </section>
  );
}