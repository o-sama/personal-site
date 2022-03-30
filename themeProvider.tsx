import * as React from "react";
import { useEffect, useRef } from "react";
import { dark, light } from "./src/styled-components/themes";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { createContext, useState } from "react";

export const ThemeUpdateContext = createContext((theme: DefaultTheme) =>
  console.error(
    "attempted to set theme outside of a ThemeUpdateContext.Provider"
  )
);

const GlobalBackGround = createGlobalStyle`html{
  background: ${(props) => props.theme["background"]["primary"]};
}`;

export const MyThemeProvider: React.FC = ({ children }) => {
  const mounted = useRef();
  const [theme, setTheme] = useState(light);
  useEffect(() => {
    if (mounted) {
      localStorage.getItem("theme") === "dark"
        ? setTheme(dark)
        : setTheme(light);
    } else {
      setTheme(light);
    }
  }, []);

  // userTheme === "dark" ? useState(dark) : useState(light);
  return (
    <ThemeProvider theme={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        <GlobalBackGround />
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};
