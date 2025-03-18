import React from "react";
import {
  Header,
  Footer,
  Hero,
  About,
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
        <BaseContainer
          header={workExperience.header}
          id={workExperience.id}
          className="mt-10"
          data={workExperience.experience}
          type="experience"
        />
        <span className="my-10"></span>
        <BaseContainer
          header={projects.header}
          id={projects.id}
          className="mb-10"
          data={projects.projects}
          type="projects"
        />
        <MySkills data={skills} className="my-10" />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
