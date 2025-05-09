import Antd from "../../public/icons/ant-design.svg";
import Cypress from "../../public/icons/cypress.svg";
import Firebase from "../../public/icons/firebase.svg";
import Javascript from "../../public/icons/javascript.svg";
import Mui from "../../public/icons/material-ui.svg";
import MongoDB from "../../public/icons/mongodb.svg";
import Nextjs from "../../public/icons/nextjs.svg";
import ReactNative from "../../public/icons/react-native.svg";
import React from "../../public/icons/react.svg";
import Sass from "../../public/icons/sass.svg";
import Typescript from "../../public/icons/typescript.svg";
import Storybook from "../../public/icons/storybook.svg";
import Nodejs from "../../public/icons/nodejs.svg";
import Nestjs from "../../public/icons/nestjs.svg";
import Stopwatch from "../../public/images/stopwatch.png";
import Calculator from "../../public/images/calculator.png";
import ToDoList from "../../public/images/to-do-list.png";
import Jackpot from "../../public/images/jackpot.png";
import LightningProxy from "../../public/images/lightning-proxy.png";
import SneakersShop from "../../public/images/sneakers-shop.png";
import GamesLibrary from "../../public/images/games-library.png";
import Portfolio from "../../public/images/portfolio.png";
import { StaticImageData } from "next/image";

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
  storybook: Storybook,
  nodejs: Nodejs,
  nestjs: Nestjs,
};

export interface ProjectsDataType {
  title: string;
  primaryImage: StaticImageData;
  webLink: string;
  githubLink: string;
}

export const projectsData: ProjectsDataType[] = [
  {
    title: "Portfolio (2024)",
    primaryImage: Portfolio,
    webLink: "https://martin2405.github.io/Portfolio",
    githubLink: "https://github.com/martin2405/Portfolio",
  },
  {
    title: "Sneakers Shop (2021)",
    primaryImage: SneakersShop,
    webLink: "https://martin2405.github.io/Sneakers-Shop",
    githubLink: "https://github.com/martin2405/Sneakers-Shop",
  },
  {
    title: "Games Library (2021)",
    primaryImage: GamesLibrary,
    webLink: "https://martin2405.github.io/Games-Library",
    githubLink: "https://github.com/martin2405/Games-Library",
  },
  {
    title: "Lightning Proxy (2021)",
    primaryImage: LightningProxy,
    webLink: "https://martin2405.github.io/LightningProxy",
    githubLink: "https://github.com/martin2405/LightningProxy",
  },
  {
    title: "Jackpot (2021)",
    primaryImage: Jackpot,
    webLink: "https://martin2405.github.io/Jackpot",
    githubLink: "https://github.com/martin2405/Jackpot",
  },
  {
    title: "Stopwatch (2021)",
    primaryImage: Stopwatch,
    webLink: "https://martin2405.github.io/stoper",
    githubLink: "https://github.com/martin2405/stoper",
  },
  {
    title: "Calculator (2021)",
    primaryImage: Calculator,
    webLink: "https://martin2405.github.io/kalkulator",
    githubLink: "https://github.com/martin2405/kalkulator",
  },
  {
    title: "To Do List (2021)",
    primaryImage: ToDoList,
    webLink: "https://martin2405.github.io/ToDoList",
    githubLink: "https://github.com/martin2405/ToDoList",
  },
];
