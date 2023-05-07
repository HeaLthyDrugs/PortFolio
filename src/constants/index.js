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
  shopify,
  carrent,
  carrent2,
  threejs,
  Jeevan,
  Aditya,
  jobit,
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
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "AWS Cloud Practitioner",
    icon: creator,
  },
  {
    title: "Gamer",
    icon: creator,
  }
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
    company_name: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 - December 2022",
    points: [
      "Worked with 3 Clients from Various platforms like LinkedIN & Facebook",
      "Done services from Basic Static Websites to a Full stack React websites",
      "Also done some other services of Logo making and Video Editing",
      "Also Worked in other Freelancing Platforms like PeoplePerHour , Upwork & Freelance.com"
    ],
  },
  {
    title: "Web Developer (Internship)",
    company_name: "ShellCode Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using FrontEnd Skills and other related technologies.",
      "Worked on Buttons for Drawer Menu , Footer Menu & Stack Menu",
      "Also Worked on the responsive design of the website",
    ],
  },
  {
    title: "React Developer (Internship)",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Worked on Search Bar of Navigation bar & Menu Section",
      "Implemented Backend using Firebase , Firebase Authentication , FireStore & Firebase Cloud Servers",
      "Collaborated with cross-functional teams including designers, product managers, and other developers.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Manish proved me wrong.",
    name: "Jeevan Poojari",
    designation: "UI/UX Video Editor",
    company: "EEE.co",
    image: Jeevan,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Manish does.",
    name: "Abhishek Seth",
    designation: "Graphic Designer/VFX Artist",
    company: "EEE.co",
    image: "https://media.licdn.com/dms/image/D5603AQEozvoUpNmSKA/profile-displayphoto-shrink_100_100/0/1678758767012?e=1688601600&v=beta&t=fTlWoFZB6CEQM3xBr9Ub4Tuni26_PwtHZfKF-ny8fGY",
  },
  {
    testimonial:
      "After Manish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aditya Shelar",
    designation: "Head",
    company: "Puranpoli.co",
    image: Aditya,
  },
];

const projects = [
  {
    name: "3D T-Shirt Customizer",
    description:
      "Web-based platform that allows users to Customize Logo, Color, and Background Color of a 3D T-Shirt according to your Preference.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/HeaLthyDrugs/threejs-reactjs-product",
  },

  {
    name: "HOO Bank UI/UX App",
    description:
      "HOO Bank is a Modern & Beautiful looking Website with Numbers of styled components in it with Elegant Look. ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent2,
    source_code_link: "https://github.com/HeaLthyDrugs/HDFC-Bank-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
