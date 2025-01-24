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
import M2 from "@/public/M2.png";

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

// Experience Data
export const experiencesData = [
  {
    title: "Junior Software Developer - Internship ( MG-Group)",
    location: "Muscat",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2018 - Jan 2019",
  },
  {
    title: "Junior Software Developer - Internship ( Kalsoft)",
    location: "Muscat",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jul 2019",
  },
  {
    title: "Research Assistant At GUtech(German University Of Technology)",
    location: "Muscat",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2019 - Apr 2020",
  },
  {
    title: "Software Engineer - Kalsoft",
    location: "Muscat",
    icon: React.createElement(CgWorkAlt),
    date: "April 2020-Dec 2021",
  },
  {
    title: "Full Stack Engineer , Bank Muscat",
    location: "Muscat",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Jun 2023",
  },

  {
    title: "Senior Front-End Engineer, Telypay (FinTech)",
    location: "Muscat",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022- Jun 2024",
  },

  {
    title: "Senior Front-End Engineer, (M2) MMX Consulting Services L.L.C. (FinTech)",
    location: "Dubai, UAE",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },

  
] as const;

// Projects Data
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
    title: "M2 Website",
    description:
      "I worked on the landing page, onbarding pages, earn and convert pages in the website.",
    tags: [ "TypeScript", "Next", "React", "Redux", "Docker", "GitLab",
    "SQL", "Material UI", "Styled components", "cypress", "jest", "figma and Jenkins", "CI/CD"],
    imageUrl: M2,
    href: "https://www.m2.com/en_AE/",
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
