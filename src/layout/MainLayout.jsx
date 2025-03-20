import React from "react";
import {
  Header,
  Footer,
  Hero,
  About,
  BaseHeading,
  BaseContainer,
  MySkills,
} from "../components";
import { useTheme } from "../context/ThemeContext";
import { aboutMe, workExperience, projects, skills } from "../constensts";

const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "dark" : ""
      }  mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12 font-body`}
    >
      <Header />
      <main>
        <Hero />
        <About
          className="my-4"
          header={aboutMe.header}
          aboutMe={aboutMe.aboutMe}
        />
        <BaseHeading
          label={workExperience.header}
          id={workExperience.id}
          dot
          className="mt-5"
        />
        <BaseContainer
          id={workExperience.id}
          className="mt-10"
          data={workExperience.experience}
          type="experience"
        />
        <BaseHeading
          label={projects.header}
          id={projects.id}
          dot
          className="mt-5"
        />
        <BaseContainer
          header={projects.header}
          className="mb-10"
          data={projects.projects}
          type="projects"
        />
        <BaseHeading
          label="Technical Skills"
          id="my-skills"
          dot
          className="mt-5"
        />
        <MySkills data={skills} className="mb-5" />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
