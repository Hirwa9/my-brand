/**
 * App static data
 */
// This file contains all the static data used to render the app's components

// Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaReact, FaAngular, FaPhp, FaHtml5, FaCss3, FaLinux, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiVite, SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap, SiAxios, SiSequelize, SiGraphql, SiDocker, SiJsonwebtokens, SiFirebase, SiGithub, SiGit, SiRender, SiVercel, SiPostgresql, SiSass, SiExpo } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { MdDevices } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiSeoLine } from "react-icons/ri";


// Navigation routes
export const routes = [
    { name: 'home', path: '/', },
    { name: 'services', path: '/services', },
    { name: 'resume', path: '/resume', },
    { name: 'work', path: '/work', },
    { name: 'contact', path: '/contact', },
];

// About data
export const about = {
    title: 'About me',
    description: "I'm a passionate fullstack developer, with a keen eye for design and digital solutions development.",
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
            fieldName: "Nationality",
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

// Social media data
export const socials = [
    { name: 'Github', icon: <FaGithub className='size-6' />, path: 'https://github.com/Hirwa9', },
    { name: 'LinkedIn', icon: <FaLinkedin className='size-6' />, path: 'http://linkedin.com/in/hirwa-cyuzuzo-willy-94159427b', },
    { name: 'Instagram', icon: <FaInstagram className='size-6' />, path: 'https://www.instagram.com/hirwa__willy', },
    { name: 'Facebook', icon: <FaFacebook className='size-6' />, path: 'https://www.facebook.com/profile.php?id=100009250550394', },
];

// Projects data
export const projects = [
    {
        category: "Fullstack Web App",
        title: "Ingoboka Savings Management System",
        description: "A platform for managing community groups savings, credit inquiries, and more financial transactions.",
        stack: ["ReactJS", "JS", "BS5", "ExpressJS", "NodeJS", "JWT", "MySQL"],
        image: "/assets/work/project-images/ingoboka_sm_system_landscape.png",
        live: "https://ingoboka-savings-management-system.onrender.com",
        github: "https://github.com/Hirwa9/ingoboka-savings-management-system",
    },
    {
        category: "Fullstack Web App",
        title: "Sam Real Estate",
        description: "A real estate platform for buying, selling, and renting properties in Kigali city.",
        stack: ["ReactJS", "JS", "BS5", "ExpressJS", "NodeJS", "JWT", "MySQL"],
        image: "/assets/work/project-images/sam_real_estate_landscape.jpg",
        live: "https://samrealestatee.com",
        github: "https://github.com/Hirwa9/sam-real-estate",
    },
    {
        category: "Native App",
        title: "Movie App",
        description: "A cross-platform movie app that allows users to search for movies and view their details.",
        stack: ["Expo", "React Native", "TS", "Nativewind", "TMDB API"],
        image: "/assets/work/project-images/movie_app_square.png",
        live: "#",
        github: "https://github.com/Hirwa9/movie-app",
    },
    {
        category: "Fullstack Web App",
        title: "Weather App",
        description: "An intuitive Weather App that provides accurate and up-to-date weather forecasts for any chosen region.",
        stack: ["Vite + ReactJS", "JS", "Tailwind CSS"],
        image: "/assets/work/project-images/weather_webApp_landscape.jpg",
        live: "https://weather-app-b41p.onrender.com",
        github: "https://github.com/Hirwa9/weather-app",
    },
    {
        category: "Web Development",
        title: "Eliazar's personal website",
        description: "A composer's personal website showcasing their music and portfolio content.",
        stack: ["PHP", "Ajax", "MySQL", "jQuery", "JS", "HTML", "BS5"],
        image: "/assets/work/project-images/eliazar_music_landscape.png",
        live: "https://eliazarndayisabye.rf.gd/music.php",
        github: "https://github.com/Hirwa9/Eliazar-Website",
    },
    {
        category: "Web Development",
        title: "Eastern Singers Group (ESG) website",
        description: "A website for a music group showcasing their work and events, with a library of Rwandan Catholic music resources.",
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
        description: 'Building stable, responsive and dynamic web solutions tailored to your needs.',
        icon: <MdDevices className="text-3xl" />,
    },
    {
        title: 'Mobile Development',
        description: 'Creating cross-platform and native mobile applications using cutting-edge technologies.',
        icon: <HiOutlineDevicePhoneMobile className="text-3xl" />,
    },
    {
        title: 'SEO',
        description: 'Optimizing your website for search engines to improve visibility and traffic.',
        icon: <RiSeoLine className="text-3xl" />,
    },
];

// Experience data
export const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'So far, the projects and companies I have worked with, shaping my skills and expertise in the tech industry.',
    items: [
        {
            company: 'Ikimina Ingoboka',
            position: 'Fullstack Developer',
            duration: '2024 (4 mos)',
            path: 'https://ingoboka-savings-management-system.onrender.com',
        },
        {
            company: 'Sam Real Estate',
            position: 'Fullstack Developer',
            duration: '2024 (5 mos)',
            path: 'https://samrealestatee.com',
        },
        {
            company: 'Eliazar Ndayisabye',
            position: 'Freelancer Web Developer',
            duration: '2023 (2 mos)',
            path: 'https://eliazarndayisabye.rf.gd/music.php',
        },
        {
            company: 'Eastern Singers Group',
            position: 'Web Developer',
            duration: '2022 (8 mos)',
            path: 'https://esgrprwanda.com',
        },
    ]
};

// Skills data
export const skills = {
    icon: '/assets/resume/cap.svg',
    title: 'My tech stack',
    description: 'The tools that have become indispensable to me, serving as the foundation for tackling any project that I work on.',
    skillsSet: [
        { icon: <SiNextdotjs />, name: 'NextJS' },
        { icon: <FaReact />, name: 'ReactJS' },
        { icon: <SiExpo />, name: 'Expo' },
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
};

// Education data
export const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'Institutions and certifications that have significantly contributed to my academic and professional growth, helping me to excel in the tech industry.',
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
            degree: 'Bsc. Transportation Engineering',
            duration: '2021 - 2025',
        },
    ]
};

// Stats data
export const stats = [
    {
        num: new Date().getFullYear() - 2021,
        text: "Years of experience",
    },
    {
        num: 5,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 900,
        text: "Code commints",
    },
];