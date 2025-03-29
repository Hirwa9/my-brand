"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// Icons
import { SiAxios, SiBootstrap, SiDocker, SiExpress, SiFirebase, SiGit, SiGithub, SiGraphql, SiJavascript, SiJsonwebtokens, SiNextdotjs, SiPostgresql, SiRender, SiSass, SiSequelize, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { FaAngular, FaCss3, FaHtml5, FaLinux, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiVite } from "react-icons/si";

// Experience data
const experience = {
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

// Skils data
const skills = {
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
const education = {
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

// About data
const about = {
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


const Resume = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:pt-0"
        >
            <section>
                <div className="container mx-auto">
                    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[3.75rem]">
                        <div className='shrink-0 xl:w-fit'>
                            <TabsList className="w-full flex flex-col max-w-[23.75rem] mx-auto xl:w-[23.75rem] xl:mx-0 xl:sticky xl:top-6 gap-6">
                                <TabsTrigger value="experience">Experience</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>
                                <TabsTrigger value="about">About me</TabsTrigger>
                            </TabsList>
                        </div>
                        <div className="w-full min-h-[70vh]">
                            {/* Experience */}
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[1.875rem] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold capitalize">{experience.title}</h3>
                                    <p className="max-w-[37.5rem] mx-auto xl:mx-0 text-white/60">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[25rem]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-white/5 h-[11.5rem] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[16.25rem] min-h-[3.75rem] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* Dot */}
                                                            <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* Skills */}
                            <TabsContent value="skills" className="w-full">
                                <div className="flex flex-col gap-[1.875rem]">
                                    <div className="flex flex-col gap-[1.875rem] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold capitalize">{skills.title}</h3>
                                        <p className="max-w-[37.5rem] mx-auto xl:mx-0 text-white/60">
                                            {skills.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-[1.875rem]">
                                        {skills.skillsSet.map((skill, index) => {
                                            return (
                                                <li key={index} className="">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[9.375rem] bg-white/5 rounded-xl flex items-center justify-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            {/* Education */}
                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[1.875rem] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold capitalize">{education.title}</h3>
                                    <p className="max-w-[37.5rem] mx-auto xl:mx-0 text-white/60">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[25rem]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem]">
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-white/5 h-[11.5rem] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[16.25rem] min-h-[3.75rem] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* Dot */}
                                                            <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* About me */}
                            <TabsContent value="about" className="w-full">
                                <div className="flex flex-col gap-[1.875rem]">
                                    <h3 className="text-4xl font-bold capitalize">{about.title}</h3>
                                    <p className="max-w-[37.5rem] mx-auto xl:mx-0 text-white/60">
                                        {about.description}
                                    </p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[38.75rem] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <li key={index} className="flex items-center gap-4">
                                                    <span className="text-accent">{item.fieldName}</span>
                                                    <span className="text-xl xl:text-lg md:text-nowrap">
                                                        {Array.isArray(item.fieldValue) ? item.fieldValue.join(', ') : item.fieldValue}
                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </motion.div>
    );
}

export default Resume;