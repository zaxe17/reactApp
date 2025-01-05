import { link } from "framer-motion/client";
import * as FILES from "./files"

export const HERO_CONTENT = `I am a passionate full stack developer who loves building strong and scalable web applications.`;

export const ABOUT_TEXT = `I'm a passionate and experienced web developer who's dedicated to bringing your digital dreams to life. With a strong background in front-end and back-end development, I thrive on turning complex concepts into user-friendly, visually stunning websites. My journey in the world of web development began years ago, and I've since honed my skills in a wide range of programming languages, frameworks, and technologies. Whether it's designing responsive layouts, optimizing performance, or crafting seamless user experiences, I'm committed to staying at the forefront of this ever-evolving industry. I love collaborating with clients and fellow developers, turning ideas into reality, and creating innovative solutions. When I'm not coding, you can find me exploring the latest web trends, experimenting with new tools, and seeking inspiration from both the digital and physical worlds. Let's work together to transform your online presence and make your vision a reality!`;

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Learning Frameworks",
        company: "",
        description: `Learning frameworks help learners focus on key concepts, track progress, and apply what they've learned through practical, hands-on experiences.`,
        technologies: ["React.js", "Node.js", "MongoDb", "Tailwind"],
    },
    {
        year: "2022 - 2024",
        role: "Frontend Developer",
        company: "",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        year: "2021 - 2022",
        role: "Web Design",
        company: "",
        description: `Design and maintained web applications using Figma for desinging JavaScript, CSS, and HTML. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
        technologies: ["Figma", "Canva"],
    },
    {
        year: "2020 - 2021",
        role: "Backend Developer",
        company: "",
        description: `Learning Backend development handling server-side logic, database interactions, and application programming interfaces (APIs) to ensure seamless functionality and data management.`,
        technologies: ["C/C++", "Java", "PHP", "XAMPP", "Bytehost"],
    },
];

export const PROJECTS = [
    {
        title: "Note Taking App",
        image: FILES.project1,
        description:
            "Experience creativity and productivity with its user-friendly features and a captivating interface as you take notes of your thoughts, ideas, and reminders—whether you're planning, creating, or brainstorming.",
        link: "http://techtilanotess.22web.org/",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
    },
    {
        title: "Portfolio Website",
        image: FILES.project2,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "JavaScript", "REACT", "Tailwind"],
    },
    {
        title: "Blogging Platform",
        image: FILES.project3,
        description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        link: "https://janmarcjacolbia.netlify.app",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Stream Lining Inventory",
        image: FILES.project4,
        description:
            "We are dedicated to revolutionizing inventory control through real-time tracking and automation. Our comprehensive system streamlines stock replenishment, order processing, and enhances customer service.",
        link: "http://streamlining.22web.org/",
        technologies: ["HTML", "CSS", "XAMPP", "PHP", "MySQL"],
    },
    {
        title: "Kawit, Cavite City",
        image: FILES.project5,
        description:
            "This group project for our RIPH to show of beautiful places in Kawit, and also about history.",
        link: "https://riph-kawit.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
];

export const CONTACT = {
    address: "Brgy. Sto. Cristo Bago Bantay, Quezon City ",
    phoneNo: "+63 926 5424 417 ",
    email: "jmjacolbiapogi17@gmail.com",
};

export const skills = [
    {
        category: "Front-end",
        skills: [
            { name: "HTML", level: 80 },
            { name: "CSS", level: 90 },
            { name: "JavaScript", level: 70 },
            { name: "React.js", level: 30 },
        ],
    },
    {
        category: "Back-end",
        skills: [
            { name: "PHP", level: 75 },
            { name: "Java", level: 48 },
            { name: "C++", level: 40 },
            { name: "Node.js", level: 64 },
        ],
    },
];

export const spotifyLink = "https://open.spotify.com/embed/playlist/4lIhJVhCR1JoCigPmZILhp?utm_source=generator";