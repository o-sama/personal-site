import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  name: "light",
  background: {
    primary: "#ffffff",
    secondary: "#f4efe8",
    foregroundElements: "#cacaca",
    liftedElements: "#ffffff",
  },
  text: {
    primary: "#000000",
    secondary: "#a87e5c",
    headers: "#7b5e44",
  },
  font: {
    family: {
      primary: "roboto mono",
      secondary: "raleway",
    },
    size: {
      xs: {
        primary: "12px",
        secondary: "10px",
        tertiary: "8px",
        h1: "40px",
        h2: "28px",
        h3: "16px",
      },
      s: {
        primary: "14px",
        secondary: "12px",
        tertiary: "10px",
        h1: "44px",
        h2: "32px",
        h3: "20px",
      },
      m: {
        primary: "16px",
        secondary: "14px",
        tertiary: "12px",
        h1: "48px",
        h2: "36px",
        h3: "24px",
      },
      l: {
        primary: "18px",
        secondary: "16px",
        tertiary: "14px",
        h1: "52px",
        h2: "40px",
        h3: "28px",
      },
      xl: {
        primary: "20px",
        secondary: "18px",
        tertiary: "16px",
        h1: "56px",
        h2: "44px",
        h3: "32px",
      },
    },
  },
  nav: {
    border: "#7b5e44",
  },
  link: {
    color: "#FFFFFF",
    hover: "#d3d3d3",
    used: "#d3d3d3",
  },
  shadow: {
    color: "#555555",
  },
  transition: {
    length: "0.35s",
    function: "ease-in-out",
  },
  button: {
    borderColor: "#7b5e44",
    backgroundColor: {
      regular: "#ffffff",
      hover: "#f4efe8",
    },
  },
};

const dark: DefaultTheme = {
  name: "dark",
  background: {
    primary: "#222222",
    secondary: "#333333",
    foregroundElements: "#454545",
    liftedElements: "#252525",
  },
  text: {
    primary: "#ffffff",
    secondary: "#a87e5c",
    headers: "#7b5e44",
  },
  font: {
    family: {
      primary: "roboto mono",
      secondary: "raleway",
    },
    size: {
      xs: {
        primary: "12px",
        secondary: "10px",
        tertiary: "8px",
        h1: "40px",
        h2: "28px",
        h3: "16px",
      },
      s: {
        primary: "14px",
        secondary: "12px",
        tertiary: "10px",
        h1: "44px",
        h2: "32px",
        h3: "20px",
      },
      m: {
        primary: "16px",
        secondary: "14px",
        tertiary: "12px",
        h1: "48px",
        h2: "36px",
        h3: "24px",
      },
      l: {
        primary: "18px",
        secondary: "16px",
        tertiary: "14px",
        h1: "52px",
        h2: "40px",
        h3: "28px",
      },
      xl: {
        primary: "20px",
        secondary: "18px",
        tertiary: "16px",
        h1: "56px",
        h2: "44px",
        h3: "32px",
      },
    },
  },
  nav: {
    border: "#7b5e44",
  },
  link: {
    color: "#222222",
    hover: "#d3d3d3",
    used: "#d3d3d3",
  },
  shadow: {
    color: "#000000",
  },
  transition: {
    length: "0.35s",
    function: "ease-in-out",
  },
  button: {
    borderColor: "#7b5e44",
    backgroundColor: {
      regular: "#222222",
      hover: "#333333",
    },
  },
};

const breakpoints = {
  xs: "400px",
  s: "600px",
  m: "900px",
  l: "1200px",
  xl: "1500px",
};

export { light, dark, breakpoints };
