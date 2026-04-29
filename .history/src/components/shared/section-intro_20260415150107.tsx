type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export default function SectionIntro({ eyebrow, title, copy }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <div className="section-intro__eyebrow">{eyebrow}</div>

      <h2 className="section-intro__title">{title}</h2>

      {copy && <p className="section-intro__copy">{copy}</p>}
    </div>
  );
}