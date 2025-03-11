import React from "react";
import { Header, Footer, Hero, BaseContainer } from "../components";
import { useTheme } from "../context/ThemeContext";

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
        <BaseContainer />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
