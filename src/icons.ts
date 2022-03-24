import Assembly from "./images/assembly.svg";
import Aws from "./images/aws.svg";
import Awsdark from "./images/awsdark.svg";
import Bash from "./images/bash.svg";
import C from "./images/c.svg";
import Cpp from "./images/cpp.svg";
import Csharp from "./images/csharp.svg";
import Django from "./images/django.svg";
import Djangodark from "./images/djangodark.svg";
import Docker from "./images/docker.svg";
import Gatsby from "./images/gatsby.svg";
import Git from "./images/git.svg";
import Go from "./images/go.svg";
import Istio from "./images/istio.svg";
import Java from "./images/java.svg";
import Kubernetes from "./images/kubernetes.svg";
import Mongodb from "./images/mongodb.svg";
import Mongodbdark from "./images/mongodbdark.svg";
import Nodejs from "./images/nodejs.svg";
import Python from "./images/python.svg";
import Reactjs from "./images/reactjs.svg";
import Sql from "./images/sql.svg";
import Terraform from "./images/terraform.svg";
import Typescript from "./images/typescript.svg";
import Vhdl from "./images/vhdl.svg";
import Uwaterloo from "./images/uwaterloo.svg";
import Uwaterloodark from "./images/uwaterloodark.svg";
import Tr from "./images/tr.svg";
import Tmmc from "./images/tmmc.svg";
import Flipp from "./images/flipp.svg";
import Lh from "./images/lh.svg";
import light from "./images/logolight.svg";
import dark from "./images/logodark.svg";
import sun from "./images/sun.svg";
import moon from "./images/moon.svg";
import me from "./images/me.jpeg";
import github from "./images/github.svg";
import githubDark from "./images/githubdark.svg";
import linkedin from "./images/linkedin.svg";
import gmail from "./images/gmail.svg";
import contact from "./images/contact.svg";
import contactDark from "./images/contactdark.svg";
import download from "./images/download.svg";
import downloadDark from "./images/downloaddark.svg";
import downloadFile from "./content/resume.pdf";

interface Icon {
  [key: string]: { [key: string]: any };
}

const iconMap: Icon = {
  Assembly: { lightMode: Assembly, darkMode: Assembly },
  AWS: { lightMode: Aws, darkMode: Awsdark },
  Bash: { lightMode: Bash, darkMode: Bash },
  C: { lightMode: C, darkMode: C },
  CPP: { lightMode: Cpp, darkMode: Cpp },
  CSharp: { lightMode: Csharp, darkMode: Csharp },
  Django: { lightMode: Django, darkMode: Djangodark },
  Docker: { lightMode: Docker, darkMode: Docker },
  Gatsby: { lightMode: Gatsby, darkMode: Gatsby },
  Git: { lightMode: Git, darkMode: Git },
  Go: { lightMode: Go, darkMode: Go },
  Istio: { lightMode: Istio, darkMode: Istio },
  Java: { lightMode: Java, darkMode: Java },
  Kubernetes: { lightMode: Kubernetes, darkMode: Kubernetes },
  MongoDB: { lightMode: Mongodb, darkMode: Mongodbdark },
  NodeJS: { lightMode: Nodejs, darkMode: Nodejs },
  Python: { lightMode: Python, darkMode: Python },
  ReactJS: { lightMode: Reactjs, darkMode: Reactjs },
  SQL: { lightMode: Sql, darkMode: Sql },
  Terraform: { lightMode: Terraform, darkMode: Terraform },
  TypeScript: { lightMode: Typescript, darkMode: Typescript },
  VHDL: { lightMode: Vhdl, darkMode: Vhdl },
  Uwaterloo: { lightMode: Uwaterloo, darkMode: Uwaterloodark },
  Tr: { lightMode: Tr, darkMode: Tr },
  Tmmc: { lightMode: Tmmc, darkMode: Tmmc },
  Flipp: { lightMode: Flipp, darkMode: Flipp },
  Lh: { lightMode: Lh, darkMode: Lh },
};

const socials: Icon = {
  github: {
    lightMode: github,
    darkMode: githubDark,
    link: "https://github.com/o-sama/",
  },
  linkedin: {
    lightMode: linkedin,
    darkMode: linkedin,
    link: "https://www.linkedin.com/in/osamafaqhruldin/",
  },
  email: {
    lightMode: gmail,
    darkMode: gmail,
    link: "mailto:onfaqhru@gmail.com",
  },
  contact: {
    lightMode: contact,
    darkMode: contactDark,
    link: "/contact",
  },
  download: {
    lightMode: download,
    darkMode: downloadDark,
    link: downloadFile,
  },
};

const siteIcons: Icon = { site: { lightMode: light, darkMode: dark } };

const themeIcons: Icon = { theme: { lightMode: sun, darkMode: moon } };

export { iconMap, siteIcons, themeIcons, me, socials };
