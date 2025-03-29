/**
 * App static data
 */
// This file contains all the static data used in the app
// such as about, experience, skills, education, projects, services, and contact info.
// This data is used to render the app components, not fetched from any API or database.

// Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaReact, FaAngular, FaNodeJs, FaPhp, FaHtml5, FaCss3, FaLinux } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNextdotjs, SiExpress, SiVite, SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap, SiAxios, SiSequelize, SiGraphql, SiDocker, SiJsonwebtokens, SiFirebase, SiGithub, SiGit, SiRender, SiVercel, SiPostgresql, SiSass } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

// About data
export const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae autem quo corporis tempora.',
    info: [
        {
            fieldName: "Names",
            fieldValue: "Hirwa Cyuzuzo Willy",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+250) 785 459 848",
        },
        {
            fieldName: "Experience",
            fieldValue: `${new Date().getFullYear() - 1 - 2021}+ Years`,
        },
        {
            fieldName: "Natinality",
            fieldValue: "Rwandan",
        },
        {
            fieldName: "Email",
            fieldValue: "hirwawilly9@gmail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: ["English", "Kinyarwanda"],
        },
    ],
};

// Contact info data
export const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+250) 785 459 848",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "hirwawilly9@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Kigali - Rwanda"
    },
];

// Experience data
export const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae autem quo corporis tempora.',
    items: [
        {
            company: 'Ikimina Ingoboka',
            position: 'Fullstach Developer',
            duration: '2024 (4 mos)',
        },
        {
            company: 'Sam Real Estate',
            position: 'Fullstach Developer',
            duration: '2024 (5 mos)',
        },
        {
            company: 'Eliazar Ndayisabye',
            position: 'Freelancer Web Developer',
            duration: '2023 (2 mos)',
        },
        {
            company: 'Eastern Singers Group',
            position: 'Web Developer',
            duration: '2022 (8 mos)',
        },
    ]
}

// Skills data
export const skills = {
    icon: '/assets/resume/cap.svg',
    title: 'My tech stack',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae autem quo corporis tempora.',
    skillsSet: [
        { icon: <SiNextdotjs />, name: 'NextJS' },
        { icon: <FaReact />, name: 'ReactJS' },
        { icon: <TbBrandReactNative />, name: 'React Native' },
        { icon: <FaAngular />, name: 'AngularJS' },
        { icon: <SiExpress />, name: 'Express' },
        { icon: <FaNodeJs />, name: 'NodeJS' },
        { icon: <SiVite />, name: 'Vite' },
        { icon: <SiJavascript />, name: 'Javascript' },
        { icon: <SiTypescript />, name: 'Typescript' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <SiBootstrap />, name: 'Bootstrap' },
        { icon: <GrMysql />, name: 'MySQL' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiAxios />, name: 'Axios' },
        { icon: <SiSequelize />, name: 'Sequelize' },
        { icon: <SiGraphql />, name: 'GraphQL' },
        { icon: <SiDocker />, name: 'Docker' },
        { icon: <SiJsonwebtokens />, name: 'JSON Web Tokens' },
        { icon: <SiFirebase />, name: 'Firebase' },
        { icon: <FaPhp />, name: 'PHP' },
        { icon: <SiSass />, name: 'Sass' },
        { icon: <FaHtml5 />, name: 'HTML 5' },
        { icon: <FaCss3 />, name: 'CSS' },
        { icon: <SiGithub />, name: 'Github' },
        { icon: <SiGit />, name: 'Git' },
        { icon: <FaLinux />, name: 'Linux' },
        { icon: <SiRender />, name: 'Render CI/CD' },
        { icon: <SiVercel />, name: 'Vercel CI/CD' },
    ]
}

// Education data
export const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae autem quo corporis tempora.',
    items: [
        {
            institution: 'ALX - Africa',
            degree: 'Backend Web Development',
            duration: 'Mar 2024',
        },
        {
            institution: 'Simplilearn',
            degree: 'Introduction to MERN Stack',
            duration: 'Sep 2023',
        },
        {
            institution: 'University of Rwanda',
            degree: 'Bsc. Transporations Engineering',
            duration: '2021 - 2025',
        },
    ]
}

// Projects data
export const projects = [
    {
        category: "Fullstack Web App",
        title: "Ingoboka Savings Management System",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["ReactJS", "BS5", "ExpressJs", "NodeJs", "JWT", "MySQL"],
        image: "/assets/work/project-images/ingoboka_sm_system_landscape.png",
        live: "https://ingoboka-savings-management-system.onrender.com",
        github: "https://github.com/Hirwa9/ingoboka-savings-management-system",
    },
    {
        category: "Fullstack Web App",
        title: "Sam Real Estate",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["ReactJS", "BS5", "ExpressJs", "NodeJs", "JWT", "MySQL"],
        image: "/assets/work/project-images/sam_real_estate_landscape.jpg",
        live: "https://samrealestatee.com",
        github: "https://github.com/Hirwa9/sam-real-estate",
    },
    {
        category: "Fullstack Web App",
        title: "Weather App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["Vite + ReactJS", "Tailwind CSS", "Javascript"],
        image: "/assets/work/project-images/weather_webApp_landscape.jpg",
        live: "https://weather-app-b41p.onrender.com",
        github: "https://github.com/Hirwa9/weather-app",
    },
    {
        category: "Web Development",
        title: "Eliazar's personal website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["PHP", "Ajax", "MySQL", "jQuery", "JS", "HTML", "BS5"],
        image: "/assets/work/project-images/eliazar_music_landscape.png",
        live: "https://eliazarndayisabye.rf.gd/music.php",
        github: "https://github.com/Hirwa9/Eliazar-Website",
    },
    {
        category: "Web Development",
        title: "Eastern Singers Group (ESG) website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        stack: ["AngularJS", "PHP", "MySQL", "jQuery", "JS", "HTML", "BS5"],
        image: "/assets/work/project-images/esg_landscape.jpg",
        live: "https://esgrprwanda.com",
        github: "https://github.com/Hirwa9/ESG-website",
    },
];

// Services data
export const services = [
    {
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        href: '',
    },
    {
        title: 'Mobile Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        href: '',
    },
    {
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        href: '',
    },
];