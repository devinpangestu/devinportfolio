import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  heroMeme1,
  heroMeme2,
  heroMeme3,
  heroMeme4,
  heroMeme5,
  heroMeme6,
  heroMeme7,
  heroMeme8,
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
  gso,
  atmajaya,
  tesla,
  shopify,
  carrent,
  noteapp,
  jobit,
  tripguide,
  threejs,
  comingsoon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const heroMemes = [
  {
    image: heroMeme1,
  },
  {
    image: heroMeme2,
  },
  {
    image: heroMeme3,
  },
  {
    image: heroMeme4,
  },
  {
    image: heroMeme5,
  },
  {
    image: heroMeme6,
  },
  {
    image: heroMeme7,
  },
  {
    image: heroMeme8,
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Internal Engineering (Internship)",
    company_name: "PT Global Sahabat Otomasi",
    icon: gso,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jul 2022",
    points: [
      "Developing a serialization barcode website requires creating a platform that tracks and manages products efficiently using unique barcodes.",
      "The project involves ensuring that the website meets BPOM standards.",
      "Design, development, testing, team collaboration, and maintenance, using technologies and programming languages such as HTML, CSS, JavaScript, PHP and following good development methodologies.",
    ],
  },
  {
    title: "Finally graduated with a Bachelor's degree of Engineering!",
    company_name: "Atma Jaya Catholic University of Indonesia",
    icon: atmajaya,
    iconBg: "#f9530b",
    date: "Jul 2018 - Jan 2023",
    points: [
      "Starting from a new student who doesn't know anything about 'How to Code', not even the if else syntax.",
      "Each semester begins with new challenges and mayhem, like it or not, I have to follow it 😒.",
      "Thanks to all of my friend that always support and help me 😭.",
      "Even though I graduated in semester 9, I believe my skills are not below standard 👻.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Coming Soon!",
  //   description: "Release Soon!",
  //   // tags: [
  //   //   {
  //   //     name: "react",
  //   //     color: "blue-text-gradient",
  //   //   },
  //   //   {
  //   //     name: "mongodb",
  //   //     color: "green-text-gradient",
  //   //   },
  //   //   {
  //   //     name: "tailwind",
  //   //     color: "pink-text-gradient",
  //   //   },
  //   // ],
  //   image: comingsoon,
  //   // source_code_link: "https://github.com/",
  // },
  {
    name: "Note App",
    description:
      "Web-based notes platform for managing digital notes for each user efficiently, offering a  essential features for creating, and editing notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: noteapp,
    link:"https://devin-note-app.netlify.app/",
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  heroMemes,
};
