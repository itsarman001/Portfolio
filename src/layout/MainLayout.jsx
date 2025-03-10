import React from "react";
import { Header, Footer, Hero, BaseContainer } from "../components";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
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
