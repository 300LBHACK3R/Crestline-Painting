type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  backgroundImage?: string;
  backgroundPosition?: string;
  darkOverlay?: boolean;
  compact?: boolean;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function PageHero({
  eyebrow,
  title,
  copy,
  align = "left",
  backgroundImage,
  backgroundPosition = "center center",
  darkOverlay = true,
  compact = false,
}: PageHeroProps) {
  const hasBackground = Boolean(backgroundImage);

  return (
    <section
      className={cx(
        "page-hero-base",
        hasBackground ? "page-hero-base--with-image" : "page-hero-base--plain",
        compact && "page-hero-base--compact",
        align === "center" && "page-hero-base--center"
      )}
    >
      {hasBackground ? (
        <>
          <div
            className="page-hero-base__bg"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
              backgroundPosition,
            }}
            aria-hidden="true"
          />
          <div
            className={cx(
              "page-hero-base__overlay",
              darkOverlay
                ? "page-hero-base__overlay--dark"
                : "page-hero-base__overlay--light"
            )}
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