"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Data
import { projects } from "@/app/data";

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex flex-col justify-center pt-6 xl:pt-0 pb-12"
        >
            <section>
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[1.875rem]">
                        {/* Text */}
                        <div className="w-full xl:w-1/2 xl:h-[28.75rem] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[1.875rem] xl:gap-8 h-1/2">
                                {/* Outline number */}
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {(projects.findIndex(p => p.title === project.title) + 1).toString().padStart(2, '0')}
                                </div>
                                {/* Project category */}
                                <h2 className="text-[2.625rem] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                                <p className="text-accent">{project.title}</p>
                                {/* Project description */}
                                <p className="text-white/60">{project.description}</p>
                                {/* Stack */}
                                <ul className="flex gap-2 md:gap-3 flex-wrap pb-2 border-white/20">
                                    {project.stack.map((stack, index) => {
                                        return (
                                            <li key={index} className="text-md text-accent font-bold px-5 py-2 leading-none border border-accent/15 rounded-full xl:rounded-lg">
                                                {stack}
                                            </li>
                                        )
                                    })}
                                </ul>

                                {/* Buttons */}
                                <div className="flex gap-4 items-center">
                                    {/* Live project button */}
                                    <Link href={project.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild className="w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent p-4" />
                                                    {/* <button className="btn btn-primary mt-6 flex items-center gap-2">
                                                    Live demo
                                                </button> */}
                                                </TooltipTrigger>
                                                <TooltipContent className="text-sm">
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    {/* Github project button */}
                                    <Link href={project.github} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild className="w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent p-4" />
                                                    {/* <button className="btn btn-primary mt-6 flex items-center gap-2">
                                                    Live demo
                                                </button> */}
                                                </TooltipTrigger>
                                                <TooltipContent className="text-sm">
                                                    <p>Github repo</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Swiper */}
                        <div className="w-full xl:w-1/2 flex flex-col xl:justify-between order-1 xl:order-none">
                            <Swiper spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} navigation={true} className="w-full h-[25vh] sm:h-[35vh] md:h-[45vh] xl:h-[75vh] mb-12 rounded-3xl outline-dashed outline-accent/30 outline-[1.5px] outline-ehite/25 outline-offset-[.4rem] xl:outline-offset-[.8rem]" onSlideChange={(swiper) => setProject(projects[swiper.realIndex])}>
                                {/* Swiper slides */}
                                {projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} onClick={() => setProject(project)} className="w-full">
                                            <div className="relative h-full flex justify-center items-center cursor-pointer bg-pink-50/20 group">
                                                {/* Overlay */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-3xl transition-all duration-500">

                                                </div>
                                                {/* Image */}
                                                <div className="w-full h-full relative">
                                                    <Image src={project.image} alt={project.title} fill className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                                {/* Slider buttons */}
                                <WorkSliderBtns
                                    containerStyles="absolute right-0 w-full xl:w-max bottom-[calc(50%_-_1.375rem)] xl:bottom-0 flex justify-between xl:justify-none gap-2 z-20 pointer-events-none px-2 xl:pb-2"
                                    btnStyles="bg-primary border-[1.5px] border-dashed border-accent text-accent text-3xl p-4 transition-all duration-100 rounded-full w-[3.125rem] h-[3.125rem] flex justify-center items-center pointer-events-auto active:scale-[95%]"
                                />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Work;