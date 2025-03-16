import React from "react";
import { Header, Footer, Hero, About, BaseContainer } from "../components";
import { useTheme } from "../context/ThemeContext";
import { aboutMe, workExperience, projects } from "../constensts";

const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "dark" : ""
      } bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12 font-body`}
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
          className="my-4"
          data={workExperience.experience}
        />
        {/* <BaseContainer
          header={projects.header}
          id={projects.id}
          className="my-4"
          data={projects.projects}
        /> */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
