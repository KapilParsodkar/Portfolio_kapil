import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import pz from "../assets/projects/pz.png"
import m from "../assets/m.jpg"
import e from "../assets/e.jpg"
import s from "../assets/s.png"
import sy from "../assets/sy.png"

export const HERO_CONTENT = `Results-oriented software engineer with a strong background in full-stack development and a passion for creating innovative solutions and contributing to dynamic projects in a collaborative team environment.`;

export const ABOUT_TEXT = `  I am an innovative software developer based in the Dallas,Texas with extensive experience in JavaScript, Python, TypeScript, SQL, HTML, and CSS. I am proficient in frameworks such as Django, React, Next.js, and Tailwind CSS, and skilled in database management using MongoDB, PostgreSQL, and Prisma. I led the development of ConfSec, an online meeting platform, and engineered dynamic applications for Maharashtra Metro Rail Corporation. I hold an M.S. in Computer Software Engineering from Stevens Institute of Technology and a B.Tech in Electronics and Telecommunications from Symbiosis Institute of Technology. I am passionate about creating scalable, secure, and user-centric software solutions. `;

export const EXPERIENCES = [
  {
year: "July 2023 - Present",
image:e,
    role: "Software Developer",
company: "Eitacies(Santa Clara ,California)",
description: `Spearheaded development of ConfSec, an online meeting platform utilizing Next.js, TailwindCSS, ReactJS, and Type-script for hate speech detection and mitigation.Implemented recommendation system with Cosine Similarity and K Nearest Neighbors algorithms, enhancing platform functionality.Optimized database management using Drizzle ORM schemas and TablePlus for PostgreSQL.Ensured platform performance and user experience through caching strategies and secure login processes.Orchestrated feature-rich dashboard using Mantine AppShell and integrated advanced features like fuzzy search.Established user authentication with Python, JWT, Django, REST API, and PostgreSQL , ensuring secure and efficient login processes.Deployed ConfSec to Vercel with TypeScript for reliability and scalability.`,
technologies: ["Javascript", "React.js", "Next.js", "PostgreSQL", "Prisma","Tailwind-css","Django","Typescript","Drizzle"],
  },
  {
year: "June 2018 - July 2021",
image:m,
role: "Software Developer",
company: "Maharashtra Metro Rail Corporation Limited(Nagpur, India)",
description: `Developed and maintained dynamic applications with ReactJS and NodeJS.Orchestrated cross-functional collaboration for innovative solutions.Engineered RESTful APIs with Flask using Agile methodologies.Strengthened application security with JWT, Axios,Firebase authentication mechanisms and Jest testing.Implemented CI/CD pipelines via GitHub for efficient workflows.`,
technologies: ["React js", "Node js", "flask", "Firebase"],
  },
  
];

export const PROJECTS = [

{
title: "BuyKart",
    image: project1,
description:"Architected ecommerce website using Next.js with responsive design elements from Tailwind CSS.Integrated user authentication with NextAuth and managed database operations with Drizzle. Validated data integrity and security with server-side validation using Zod",

technologies: ["NextAuth", "Drizzle", "React js", "Next.js", "zod"],
  },
  
  {
title: "Fitczar",
    image: project2,
    description:
"Led development of SaaS exercise and fitness platform using React, Express.js, Prisma, and MongoDB.Integrated Prisma with MongoDB for optimized data management and scalability.Engineered dynamic features like real-time chat functionality with Socket.io.Utilized Redux for managing state.",
technologies: ["ReactJs", "Express.js", "Prisma", "MongoDB","Redux"],
  },
  {
title: "BabyCare",
    image: project3,
    description:
"Revamped a baby monitoring system using Spring Boot, Redux and Reactjs. Implemented Two-Factor Authentication and Social Media Authentication Integration.Constructed the system with Spring Boot, Redux, React Native (Android),Docker and React, utilizing a MySQL database.",
technologies: ["Spring Boot", "Redux", "React js", "Mysql"],
  },
  {
title: "MaxGram",
    image: project4,
description:"A clone of Instagram made by React Native",
technologies: ["HTML", "CSS", "React Native"],
  },
  {
    title:"Pizzamania",
    image:pz,
    description:`Created Pizza Mania, a pizza delivery app using React with React Router 6.4 for advanced routing and Redux for state management. Implemented dynamic cart functionality and integrated with Vercel for seamless deployment. Focused on a responsive and user-friendly UI. Ensured efficient state handling and routing for optimal performance. `,
    technologies:["React Router","Redux"]
    }
];

export const EDUCATION = [
  {
title: "Stevens Institute of technology (Hoboken, New Jersey)",
year:"August 2021- May 2023",
image: s,

description:"Masters in Computer Software Engineering",

  },
  {
title: "Symbiosis Institute of technology (Pune, India)",
year:"July 2014- May 2018",
image: sy,
    
description:"B.Tech in Electronics and Telecommunication Engineering",
    
      },
  
];
export const CONTACT = {
address: "3813 Hibbs st, Plano Tx 75025",
phoneNo: "+1 (856) 441 3375 ",
email: "kapskar99@gmail.com",
};
