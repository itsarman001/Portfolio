import { Header, Hero, AboutMe, Section, Skills, Footer } from "../sections";
import { experiences, projects, skillsData } from "@/data";

export const Layout = () => (
  <div className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
    <Header />
    <main className="min-h-lvh px-4">
      <Hero />
      <AboutMe />
      <Section
        data={experiences}
        type="experiences"
        header="experience."
        id="experience"
      />
      <Section
        data={projects}
        type="projects"
        header="projects."
        id="projects"
      />
      <Skills data={skillsData} />
    </main>
    {/* <Footer /> */}
  </div>
);
