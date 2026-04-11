import * as FILES from "./files"

export const HERO_CONTENT = `I am a passionate full stack developer who loves building strong and scalable web applications.`;

export const ABOUT_TEXT = `I have expertise in front-end development and am an enthusiastic web developer. Building responsive, aesthetically pleasing, and user-friendly websites that provide excellent user experiences is my goal. In addition to continuously keeping up with the newest web trends and technologies, I enjoy transforming ideas into creative digital solutions.`;

export const TIMELINES = [
    {
        year: "2025 - Present",
        role: "Model-View-Controller",
        description: `Learning MVC architecture to write cleaner and more organized code by separating data, UI, and business logic.`,
        technologies: ["Laravel", "ASP.net"],
    },
    {
        year: "2024 - 2025",
        role: "Learning Frameworks",
        description: `Actively exploring and gaining hands-on experience with frameworks to enhance development efficiency and streamline workflows. Focusing on mastering core concepts, applying practical knowledge, and building scalable, real-world projects to solidify skills.`,
        technologies: ["React.js", "Node.js", "MongoDb", "Tailwind"],
    },
    {
        year: "2022 - 2024",
        role: "Back-End Development",
        description: `Gained hands-on experience in backend development, specializing in server-side logic, database management, and API integration. Successfully designed and implemented efficient systems to ensure seamless application functionality and robust data management. Proficient in creating scalable and secure backend solutions tailored to meet specific project requirements.`,
        technologies: ["C/C++", "Java", "PHP"],
    },
    {
        year: "2021 - 2022",
        role: "Web Design",
        description: `Designed and maintained engaging web applications, leveraging Figma for UI/UX design and utilizing JavaScript, HTML, and CSS for implementation. Collaborated with cross-functional teams to ensure the delivery of high-quality, user-centric software products on time and aligned with project goals.`,
        technologies: ["Figma", "Canva"],
    },
    {
        year: "2020 - 2021", 
        role: "Front-End Development",
        description: `Designed and developed user-friendly interfaces for web applications using HTML, CSS, and JavaScript. Collaborated closely with backend developers to ensure seamless integration of frontend components with APIs. Delivered responsive designs and optimized performance to enhance user experience.`,
        technologies: ["HTML", "CSS", "JavaScript"],
    },
];

export const PROJECTS = [
    {
        title: "Note Taking App",
        year: "2023",
        image: [FILES.project1, FILES.sub1_project1, FILES.sub2_project1, FILES.sub3_project1],
        role: ["full stack developer"],
        description:
            "Experience creativity and productivity with its user-friendly features and a captivating interface as you take notes of your thoughts, ideas, and reminders—whether you're planning, creating, or brainstorming.",
        link: "http://techtilanotess.22web.org",
        sourceCode: "https://github.com/zaxe17/techtilaNotes",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
    },
    {
        title: "Dictionary",
        year: "2025",
        image: [FILES.project6, FILES.sub_project6],
        role: ["front-end developer"],
        description:
            "A dictionary with a search function to look up words and books. The project is not fully finished.",
        link: "https://dictionary1.vercel.app",
        sourceCode: "https://github.com/zaxe17/dictionary",
        technologies: ["React", "Tailwind"],
    },
    {
        title: "Stream Lining Inventory",
        year: "2022",
        image: [FILES.project4, FILES.sub_project4],
        role: ["full stack developer"],
        description:
            "We are dedicated to revolutionizing inventory control through real-time tracking and automation. Our comprehensive system streamlines stock replenishment, order processing, and enhances customer service.",
        link: "",
        sourceCode: "https://github.com/zaxe17/streamlining-inventory",
        technologies: ["HTML", "CSS", "XAMPP", "PHP", "MySQL"],
    },
    {
        title: "Kawit, Cavite City",
        year: "2023",
        image: [FILES.project5, FILES.sub_project5],
        role: ["front-end developer"],
        description:
            "This group project for our RIPH to show of beautiful places in Kawit, and also about history.",
        link: "https://riph-kawit.netlify.app",
        sourceCode: "https://github.com/zaxe17/cavitecity",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Discord Server Invitation",
        year: "2025",
        image: [FILES.project7],
        role: ["front-end developer"],
        description:
            "A clean landing page that invites users to join a Discord server with a direct link and simple call-to-action.",
        link: "https://dcserver.vercel.app",
        sourceCode: "https://github.com/zaxe17/Discord-server-button-invite",
        technologies: ["React", "Three.js", "Tailwind"],
    },
    {
        title: "Aurora Polytechnic College Enrollment",
        year: "2025",
        image: [FILES.project8, FILES.sub1_project8, FILES.sub2_project8, FILES.sub3_project8, FILES.sub4_project8, FILES.sub5_project8, FILES.sub6_project8, FILES.sub7_project8],
        role: ["back-end developer"],
        description:
            "Aurora Polytechnic College is a dynamic web app developed by Group 2 using Laravel. It streamlines student records, enrollment, and academic management, showcasing the group’s skills in backend logic, routing, and UI design.",
        link: "https://maroon-gnat-207518.hostingersite.com/",
        sourceCode: "https://github.com/CJ-Develops/Aurora-Polytechnical-College",
        technologies: ["Laravel", "MySql", "XAMPP", "Bootstrap"],
    },
    {
        title: "Metro Manila Housing Affordability",
        year: "2026",
        image: [FILES.project11, FILES.sub1_project11, FILES.sub2_project11, FILES.sub3_project11, FILES.sub4_project11],
        role: ["front-end developer"],
        description:
            "A dedicated social networking hub for students to connect, collaborate, and grow within a secure and supportive campus community.",
        link: "https://data-miming.vercel.app/",
        sourceCode: "https://github.com/zaxe17/student-social-networking",
        technologies: ["react", "tailwind", "chart.js"],
    },
    {
        title: "BanKO",
        year: "2026",
        image: [FILES.project9, FILES.sub1_project9, FILES.sub2_project9, FILES.sub3_project9, FILES.sub4_project9, FILES.sub5_project9, FILES.sub6_project9],
        role: ["full stack developer"],
        description:
            "Built on a secure relational database, the platform ensures that all financial information is processed accurately and safely. By transforming raw transaction history into clear data graphs and actionable insights, BanKO helps users maintain better control over their money and encourages disciplined saving habits within a secure, organized environment.",
        link: "",
        sourceCode: "https://github.com/zaxe17/e-wallet",
        technologies: ["Laravel", "MySql", "XAMPP", "Tailwind", "JavaScript", "Chart.js"],
    },
    {
        title: "ISKOnnect",
        year: "2026",
        image: [FILES.project10],
        role: ["full stack developer"],
        description:
            "A dedicated social networking hub for students to connect, collaborate, and grow within a secure and supportive campus community.",
        link: "",
        sourceCode: "https://github.com/zaxe17/student-social-networking",
        technologies: ["Laravel", "MySql", "XAMPP", "Tailwind", "JavaScript"],
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
        link: "https://dcserver.vercel.app"
    },
    {
        label: "Resume",
        link: FILES.resume,
    },
]