type Props = {
  eyebrow: string;
  title: string;
  copy: string;
};

export default function PageHero({ eyebrow, title, copy }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow">{eyebrow}</div>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__copy">{copy}</p>
        </div>
      </div>
    </section>
  );
}