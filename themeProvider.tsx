import * as React from "react";
import { light } from "./src/styled-components/themes";
import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";

export const ThemeUpdateContext = createContext((theme: typeof light) =>
  console.error(
    "attempted to set theme outside of a ThemeUpdateContext.Provider"
  )
);

// const GlobalFonts = createGlobalStyle`
//     @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
//     @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

// `;

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
