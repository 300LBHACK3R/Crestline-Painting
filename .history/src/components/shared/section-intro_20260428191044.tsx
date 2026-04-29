type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left",
}: Props) {
  return (
    <div
      className={`section-intro section-intro--services section-intro--${align}`}
    >
      <span className="section-intro__eyebrow">
        {eyebrow}
      </span>

      <h2 className="section-intro__title">
        {title}
      </h2>

      {copy && (
        <p className="section-intro__copy">
          {copy}
        </p>
      )}
    </div>
  );
}