import React from "react";

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
        "relative isolate overflow-hidden",
        hasBackground
          ? compact
            ? "min-h-[420px]"
            : "min-h-[520px]"
          : "py-20 md:py-24 lg:py-28"
      )}
    >
      {/* Background image */}
      {hasBackground && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition,
            }}
            aria-hidden="true"
          />
          <div
            className={cx(
              "absolute inset-0",
              darkOverlay
                ? "bg-[linear-gradient(90deg,rgba(4,17,43,0.78)_0%,rgba(4,17,43,0.68)_38%,rgba(4,17,43,0.42)_65%,rgba(4,17,43,0.18)_100%)]"
                : "bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.72)_36%,rgba(255,255,255,0.36)_64%,rgba(255,255,255,0.10)_100%)]"
            )}
            aria-hidden="true"
          />
        </>
      )}

      <div className="container relative z-10">
        <div
          className={cx(
            hasBackground
              ? "flex min-h-[420px] items-center py-24 md:min-h-[520px] md:py-28"
              : "",
            align === "center" ? "justify-center text-center" : ""
          )}
        >
          <div
            className={cx(
              "max-w-4xl",
              hasBackground ? "text-white" : "text-slate-950",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {eyebrow ? (
              <p
                className={cx(
                  "mb-5 text-xs font-semibold uppercase tracking-[0.22em]",
                  hasBackground ? "text-white/75" : "text-slate-500"
                )}
              >
                {eyebrow}
              </p>
            ) : null}

            <h1
              className={cx(
                "max-w-5xl font-black leading-[0.95] tracking-[-0.04em]",
                hasBackground
                  ? "text-5xl md:text-6xl lg:text-7xl"
                  : "text-4xl md:text-5xl lg:text-6xl"
              )}
            >
              {title}
            </h1>

            {copy ? (
              <p
                className={cx(
                  "mt-6 max-w-3xl text-base leading-8 md:text-lg",
                  hasBackground ? "text-white/88" : "text-slate-600",
                  align === "center" ? "mx-auto" : ""
                )}
              >
                {copy}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}