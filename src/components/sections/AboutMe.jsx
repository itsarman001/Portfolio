import { BaseHeading } from "@/components";
import { aboutMe } from "@/data";
export const AboutMe = () => (
  <section id="about-me" className="py-10">
    <BaseHeading>about me.</BaseHeading>
    <p className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
      <span>
        {aboutMe?.about?.intro}{" "}
        <span className="hidden sm:inline">{aboutMe?.about?.expertise}</span>
      </span>
    </p>
  </section>
);
