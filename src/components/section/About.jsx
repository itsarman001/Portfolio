import { BaseHeading, BaseButton } from "../index";

export const About = ({ header, aboutMe, className = "" }) => {
  return (
    <section className={`${className}`}>
      <header>
        <BaseHeading label={header} dot />
      </header>
      <article>
        <p className="pb-3.5 text-sm">{aboutMe}</p>
      </article>
    </section>
  );
};
