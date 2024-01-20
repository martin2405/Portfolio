import Antd from "../../public/ant-design.svg";
import Cypress from "../../public/cypress.svg";
import Firebase from "../../public/firebase.svg";
import Javascript from "../../public/javascript.svg";
import Mui from "../../public/material-ui.svg";
import MongoDB from "../../public/mongodb.svg";
import Nextjs from "../../public/nextjs.svg";
import ReactNative from "../../public/react-native.svg";
import React from "../../public/react.svg";
import Sass from "../../public/sass.svg";
import Typescript from "../../public/typescript.svg";

export const skillsAssets = {
  javascript: Javascript,
  typescript: Typescript,
  "react-native": ReactNative,
  react: React,
  mongodb: MongoDB,
  antd: Antd,
  mui: Mui,
  firebase: Firebase,
  nextjs: Nextjs,
  cypress: Cypress,
  sass: Sass,
};

export interface ProjectsDataType {
  title: string;
  subtitle: string;
  primaryImageUrl: string;
  stack: (keyof typeof skillsAssets)[];
}

export const projectsData: ProjectsDataType[] = [
  {
    title: "Xyz1",
    subtitle: "xyz (2024)",
    primaryImageUrl: "",
    stack: ["nextjs", "antd", "firebase"],
  },
  {
    title: "Xyz2",
    subtitle: "xyz (2024)",
    primaryImageUrl: "",
    stack: ["react-native", "mongodb", "firebase"],
  },
  {
    title: "Xyz3",
    subtitle: "xyz (2024)",
    primaryImageUrl: "",
    stack: ["nextjs", "antd", "firebase"],
  },
  {
    title: "Xyz4",
    subtitle: "xyz (2024)",
    primaryImageUrl: "",
    stack: ["nextjs", "antd", "firebase"],
  },
];
