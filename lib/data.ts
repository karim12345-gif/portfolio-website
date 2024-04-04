import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import maalyImg from "@/public/Maaly.png";
import invoiceImg from "@/public/invoice.png";
import adminPanelImg from "@/public/adminaccounts.png";
import maalyInsights from "@/public/Maaly-Insights.png";
import maalyAdminInsights from "@/public/Maaly-Insights-admin.png";
import bankMuscatImg from "@/public/BanksMuscat.png";
import yelpImage from "@/public/yelpcampHomePage.png";
import fintechAppImg from "@/public/homeScreen.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Developer - Internship ( MG-Group)",
    location: "Muscat",
    description:
      "I worked for 5 months as a junior software developer intern. I learned the basics of web development, C# programming and flutter.",
      icon: React.createElement(CgWorkAlt),
    date: "Sep 2018 - Jan 2019",
  },
  {
    title: "Junior Software Developer - Internship ( Kalsoft)",
    location: "Muscat",
    description:
      "I worked as a front-end developer for 1 month.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Research Assistant At GUtech(German University Of Technology)",
    location: "Muscat",
    description:
      "I worked as Research Project to create smart glasses for blind individuals that will significantly improve the awareness of their surroundings, using Python , Jetson Nano, AI and ML. I also taught students Data Structures, Theory of Computing and Algorithms using Python.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Junior Software Engineer  ",
    location: "Muscat",
    description:
      "I worked as a software engineer for 1 year. I worked on a project that was a web application for a company that provides services to other companies. I worked on the front-end using React and the back-end using C# web forms.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Middle Front-end Engineer (Telypay)",
    location: "Muscat",
    description:
    "I worked as a front-end developer for almost 2 years. I also upskilled to Middle Level Front-end Engineer.",
    icon: React.createElement(CgWorkAlt),
    date: " October 2022 – present",
  },

  {
    title: "Front-end Engineer ( Bank Muscat)",
    location: "Muscat",
    description:
    "I worked as a front-end Engineer for almost 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: " Aug 2022 – present",
  },

  
] as const;

export const projectsData = [
  {
    title: "Fintech App",
    description:
      "I am building a fintech app that will help users to manage their money and buy bitcoin's.",
    tags: [ "react-native","API Routes", "Zustand", "Tanstack", "Query", "FaceID", "Charts", "Clerk"],
    imageUrl: fintechAppImg,
    href: "",
  },
  {
    title: "TelyPay Website",
    description:
      "I worked on the landing page to show case users can check the product and give public feedback to companies.",
    tags: [ "Next.js", "Javascript" ,"CSS", "SEO", "Bootstrap", "Firebase", "SCSS", "Git" ,"Jira", "BitBucket"],
    imageUrl: maalyImg,
    href: "https://maalyapp.com/",
  },
  {
    title: "TelyPay Invoice",
    description:
      "Easy payment solution built for ambitious businesses and Manage your orders and payments. just Sign up and your good to go!.",
    tags: ["React.js", "TypeScript"," Material Ui", "Unit Testing( Jest)", "Redux", "Rest API", "Git" ,"Jira", "BitBucket"],
    imageUrl: invoiceImg,
    href: "https://invoice.telypay.com/login",
  },
  {
    title: "Admin Panel for TelyPay Invoice",
    description:
      "This is an admin used by the companies employees to track and do actions for their users. This is unfortunately private and inaccessible.",
    tags: ["Next.js", "TypeScript"," Material Ui", "Unit Testing( Jest)", "Redux", "Rest API", "Git" ,"Jira", "BitBucket"],
    imageUrl: adminPanelImg,
    href: "",
  },
  {
    title: "Maayly Insights Admin Panel",
    description:
      "This is an admin used by the companies employees to track data of maaly app users and understand their behavior. This is unfortunately private and inaccessible.",
    tags: ["Next.js", "TypeScript"," Material Ui", "Unit Testing( Jest)", "Rest API", "Git" ,"Jira", "BitBucket"],
    imageUrl: maalyInsights,
    href: "https://maaly-insights.netlify.app/login/",
  },
  {
    title: "Admin Panel for Maayly Insights ",
    description:
      "This is an admin used by the companies employees to track data of maaly Insights users and understand their behavior. This is unfortunately private and inaccessible.",
    tags: ["Next.js", "TypeScript"," Material Ui", "Unit Testing( Jest)", "Redux", "React Query", "Rest API", "Git" ,"Jira", "BitBucket"],
    imageUrl: maalyAdminInsights,
    href: "https://maaly-insights-admin.netlify.app/",
  },
  {
    title: "Account Details",
    description:
      "This is an admin used by the companies employees to track data of maaly Insights users and understand their behavior. This is unfortunately private and inaccessible.",
    tags: ["Angular", "Ajax", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: bankMuscatImg,
    href: "https://www.bankmuscat.com/en/accounts/Pages/details.aspx#saving",
  },
  {
    title: "YelpCamp",
    description:
      "YelpCamp is a web Application in which users can find campgrounds and review them. Users can also add their own campgrounds. A map has also been displayed for better searching. When a user enters a location, the map finds and shows it automatically.",
    tags: ["React", "CSS", "Bootstrap", `Node.js`, "Express", "MongoDB", "Passport.js", "MongoDB ", "Vercel", "MapBox"],
    imageUrl: yelpImage,
    href: "https://github.com/karim12345-gif/CampSite",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  ".net6",
  "Git",
  "Tailwind",
  "Material-UI",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "MySql",
  "Docker",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "React-Query",
  "Framer Motion",
] as const;
