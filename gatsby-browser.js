import "./src/styles/global.css";
import { MyThemeProvider } from "./themeProvider";
import * as React from "react";

export const wrapRootElement = ({ element }) => {
  return <MyThemeProvider>{element}</MyThemeProvider>;
};
