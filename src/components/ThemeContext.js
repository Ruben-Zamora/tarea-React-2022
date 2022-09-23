import React from "react";

export const themes = {
  light: {
    color: "#555555",
    background: "#eeeeee"
  },
  dark: {
    color: "#eeeeee",
    background: "#560F0F"
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  updateTheme: () => {}
});