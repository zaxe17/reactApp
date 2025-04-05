import { link } from "framer-motion/client";
import * as FILES from "./files"

export const HERO_CONTENT = `I am a passionate full stack developer who loves building strong and scalable web applications.`;

export const ABOUT_TEXT = `I have expertise in front-end development and am an enthusiastic web developer. Building responsive, aesthetically pleasing, and user-friendly websites that provide excellent user experiences is my goal. In addition to continuously keeping up with the newest web trends and technologies, I enjoy transforming ideas into creative digital solutions.`;

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Learning Frameworks",
        description: `Actively exploring and gaining hands-on experience with frameworks to enhance development efficiency and streamline workflows. Focusing on mastering core concepts, applying practical knowledge, and building scalable, real-world projects to solidify skills.`,
        technologies: ["React.js", "Node.js", "MongoDb", "Tailwind"],
    },
    {
        year: "2022 - 2024",
        role: "Frontend Developer",
        description: `Designed and developed user-friendly interfaces for web applications using HTML, CSS, and JavaScript. Collaborated closely with backend developers to ensure seamless integration of frontend components with APIs. Delivered responsive designs and optimized performance to enhance user experience.`,
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        year: "2021 - 2022",
        role: "Web Design",
        description: `Designed and maintained engaging web applications, leveraging Figma for UI/UX design and utilizing JavaScript, HTML, and CSS for implementation. Collaborated with cross-functional teams to ensure the delivery of high-quality, user-centric software products on time and aligned with project goals.`,
        technologies: ["Figma", "Canva"],
    },
    {
        year: "2020 - 2021",
        role: "Backend Developer",
        description: `Gained hands-on experience in backend development, specializing in server-side logic, database management, and API integration. Successfully designed and implemented efficient systems to ensure seamless application functionality and robust data management. Proficient in creating scalable and secure backend solutions tailored to meet specific project requirements.`,
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
        technologies: ["REACT", "Tailwind"],
    },
    {
        title: "1st Portfolio website",
        image: FILES.project3,
        description:
            "A personal project built with HTML, CSS, and JavaScript to practice and enhance frontend development and web design skills. Focused on responsive layouts and user-friendly design.",
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
            { name: "Tailwind", level: 25 },
            { name: "JavaScript", level: 56 },
            { name: "React.js", level: 30 },
        ],
    },
    {
        category: "Back-end",
        skills: [
            { name: "Java", level: 38 },
            { name: "PHP", level: 48 },
            { name: "Python", level: 10 },
            { name: "C", level: 34 },
            { name: "C++", level: 30 },
        ],
    },
];

export const button = [
    {
        label: "Discord",
        link: "https://dcserver.vercel.app/"
    },
]