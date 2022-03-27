import * as React from "react";
import { light } from "./src/styled-components/themes";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { createContext, useState } from "react";

export const ThemeUpdateContext = createContext((theme: DefaultTheme) =>
  console.error(
    "attempted to set theme outside of a ThemeUpdateContext.Provider"
  )
);

export const MyThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);
  return (
    <ThemeProvider theme={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};
