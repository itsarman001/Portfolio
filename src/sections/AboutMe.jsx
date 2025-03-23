import { BaseHeading } from "../components";
import { aboutMe } from "@/data";
export const AboutMe = () => (
  <section id="about-me" className="py-10">
    <BaseHeading>About me.</BaseHeading>
    <p className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
      <span>
        {aboutMe.description[0]}
        <span className="hidden sm:inline">{aboutMe.description[0]}</span>
      </span>
    </p>
  </section>
);
