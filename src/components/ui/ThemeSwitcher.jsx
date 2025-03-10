import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
