import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    background: {
      primary: string;
      secondary: string;
      foregroundElements: string;
      liftedElements: string;
    };
    text: {
      primary: string;
      secondary: string;
      headers: string;
    };
    font: {
      family: {
        primary: string;
        secondary: string;
      };
      size: {
        xs: {
          primary: string;
          secondary: string;
          tertiary: string;
          h1: string;
          h2: string;
          h3: string;
        };
        s: {
          primary: string;
          secondary: string;
          tertiary: string;
          h1: string;
          h2: string;
          h3: string;
        };
        m: {
          primary: string;
          secondary: string;
          tertiary: string;
          h1: string;
          h2: string;
          h3: string;
        };
        l: {
          primary: string;
          secondary: string;
          tertiary: string;
          h1: string;
          h2: string;
          h3: string;
        };
        xl: {
          primary: string;
          secondary: string;
          tertiary: string;
          h1: string;
          h2: string;
          h3: string;
        };
      };
    };
    nav: {
      border: string;
    };
    link: {
      color: string;
      hover: string;
      used: string;
    };
    shadow: {
      color: string;
    };
    transition: {
      length: string;
      function: string;
    };
    button: {
      borderColor: string;
      backgroundColor: {
        regular: string;
        hover: string;
      };
    };
  }
}
