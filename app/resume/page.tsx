"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// Data
import { about, education, experience, skills, } from "@/app/data";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

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
                                                        <div className="w-full flex content-between text-accent">
                                                            <span>{item.duration}</span>
                                                            <Link href={item.path} target="_blank" className="w-[2rem] h-[2rem] ms-auto rounded-full flex justify-center items-center transition-all duration-500 hover:rotate-45">
                                                                <BsArrowUpRight className="text-xl" />
                                                            </Link>
                                                        </div>
                                                        <h3 className="text-xl max-w-[16.25rem] min-h-[3.75rem] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* Dot */}
                                                            <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-white/60"></span>
                                                            <p className="text-accent">{item.company}</p>
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
                                                <li key={index} className="relative mb-2 lg:mb-0 group">
                                                    <div className="absolute bottom-0 left-0 w-full h-[3px] translate-y-2 bg-white/10 group-hover:bg-accent transition-all duration-300 "></div>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[9.375rem] flex items-center justify-center bg-white/5 group-hover:scale-95 transition-all duration-300 rounded-xl group">
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