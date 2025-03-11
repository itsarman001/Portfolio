import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { MoonIcon, SunIcon } from "../../icons";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-secondary group"
    >
      {theme === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon className="group-hover:fill-flat" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
