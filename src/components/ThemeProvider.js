import React, { useState, createContext } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { deepPurple, pink, purple } from "@material-ui/core/colors";

export const ThemeContext = createContext();
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800]
    },
    secondary: { main: pink["A400"] },
    type: "dark"
  }
});
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
