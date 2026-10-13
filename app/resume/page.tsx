"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Data
import { about, education, experience, skills, } from "@/app/data";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Resume = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex flex-col justify-center pt-2 md:pt-12 pb-12 xl:pt-0"
        >
            <section>
                <div className="container mx-auto">
                    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[3.75rem]">
                        <div className='shrink-0 xl:w-fit'>
                            <TabsList className="w-full flex xl:flex-col flex-wrap max-w-2xl mx-auto xl:min-w-[23.75rem] xl:mx-0 xl:sticky xl:top-6 gap-3 xl:gap-6">
                                <TabsTrigger value="experience" className="w-[46%] xl:w-full">Experience</TabsTrigger>
                                <TabsTrigger value="skills" className="w-[46%] xl:w-full">Skills</TabsTrigger>
                                <TabsTrigger value="education" className="w-[46%] xl:w-full">Education</TabsTrigger>
                                <TabsTrigger value="about" className="w-[46%] xl:w-full">About me</TabsTrigger>
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
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-white/5 py-6 px-8 xl:px-10 rounded-xl flex flex-col items-start gap-1 text-left">
                                                        <div className="w-full flex content-between text-accent">
                                                            <span>{item.duration}</span>
                                                            {item.path && (
                                                                <Link href={item.path} target="_blank" className="w-[2rem] h-[2rem] ms-auto rounded-full flex justify-center items-center transition-all duration-500 hover:rotate-45">
                                                                    <BsArrowUpRight className="text-xl" />
                                                                </Link>
                                                            )}
                                                        </div>
                                                        <h3 className="text-xl">{item.position}</h3>
                                                        <div className="flex items-center gap-3 mb-3">
                                                            {/* Dot */}
                                                            <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-white/60"></span>
                                                            <p className="text-accent">{item.company}</p>
                                                        </div>
                                                        {item.highlights && (
                                                            <ul className="flex flex-col gap-2 text-sm text-white/70 leading-snug">
                                                                {item.highlights.map((highlight, i) => (
                                                                    <li key={i} className="flex gap-2">
                                                                        <span className="text-accent">&#8250;</span>
                                                                        <span>{highlight}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
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
                                    <ScrollArea className="h-[25rem]">
                                        <div className="flex flex-col gap-8 pe-4">
                                            {skills.groups.map((group) => (
                                                <div key={group.title} className="flex flex-col gap-4">
                                                    <h4 className="text-lg text-accent text-center xl:text-left">{group.title}</h4>
                                                    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 xl:gap-4">
                                                        {group.items.map((skill) => (
                                                            <li key={skill.name} className="relative mb-2 group">
                                                                <div className="absolute bottom-0 left-0 w-full h-[3px] translate-y-2 bg-white/10 group-hover:bg-accent transition-all duration-300"></div>
                                                                <div className="w-full h-[6.5rem] flex flex-col items-center justify-center gap-2 bg-white/5 group-hover:scale-95 transition-all duration-300 rounded-xl px-1">
                                                                    <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                                                        {skill.icon}
                                                                    </div>
                                                                    <p className="text-xs text-white/70 text-center leading-tight">{skill.name}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
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