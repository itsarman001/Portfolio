import { Header, Hero, AboutMe, Section, Skills, Footer } from "../sections";
import { aboutMe, experiences, projects, skillsData } from "@/data";
export const Layout = () => {
  return (
    <div className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <Header className="" />
      <main className="min-h-lvh">
        <Hero />
        <AboutMe />
        <Section
          data={experiences}
          type="experiences"
          header="experience."
          id="experience-section"
        />
        {/* <Section
          data={projects}
          type="projects"
          header="projects."
          id="projects-section"
          github={aboutMe?.socialLinks?.github}
        /> */}
        <Skills
          data={skillsData}
          header="technical skills."
          id="technical-skills"
        />
      </main>
      <Footer />
    </div>
  );
};
