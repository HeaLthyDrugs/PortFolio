import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Starbucks",
    icon: fiverr,
    iconBg: "#383E56",
    date: "August 2022 - December 2022",
    points: [
        "Worked with 3 Clients in total from the platforms of Linkedin & PeoplePerHour",
        "Got the Experience of many technologies from basic HTML/CSS/JS to the framework like React.js",
    ],
  },
  {
    title: "Web Developer (Internship) ",
    company_name: "Tesla",
    icon: fart,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Worked on UI Screens for Control Panel using React & Tailwind",
      "Implemented Backend System using Firebase , Firestore & Firebase Authentication",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Shopify",
    icon: shellcode,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Worked on UI components for Menu Buttons , Footer Items using React Tailwind ",
      "Designed Navigation System for the Web which Includes Bottom Tab Navigation , Stack Navigation & Drawer navigation",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Manish proved me wrong.",
    name: "Abhishek Seth",
    designation: "Graphic Designer / VFX Artist",
    company: "EEE.co",
    image: "https://media.licdn.com/dms/image/D5603AQEozvoUpNmSKA/profile-displayphoto-shrink_400_400/0/1678758767012?e=1687996800&v=beta&t=TXrRIsuR0Q94B-RNQITwHFopmdXV9u2E45KBJrf6Gj4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Manish does.",
    name: "Jeevan Poojari",
    designation: "Data Analyst",
    company: "EEE.co",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Manish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aditya Shelar",
    designation: "",
    company: "PuranPoli.co PVT LTD",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D T-Shirt Customizer",
    description:
      "A 3D T-Shirt Customizer is a T-Shirt On the web with 3D Features and with millions of color to apply on it and a Logo According to Your preference by Uploading it on the Web. ",
    tags: [
      {
        name: "React.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/HeaLthyDrugs/threejs-reactjs-product",
  },
];

export { services, technologies, experiences, testimonials, projects };
