"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

// Data
import { info } from "@/app/data";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[1.875rem]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" method="post" onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col gap-6 p-10 bg-white/5 rounded-xl border border-white/20 shadow-md shadow-black/20"
                        >
                            <h3 className="text-4xl text-accent">Let&#39;s work together</h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque veniam ea error aliquam!
                            </p>
                            {/* Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" autoComplete="true" placeholder="Email Address" />
                                <Input type="phone" autoComplete="true" placeholder="Phone Number" />
                            </div>
                            {/* Select */}
                            <Select defaultValue="est">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel className="">Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">Mobile Development</SelectItem>
                                        <SelectItem value="seo">SEO</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* Textarea */}
                            <Textarea placeholder="Your message" className="resize-none h-32" />
                            {/* Button */}
                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none xl:pt-10 mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[3.25rem] h-[3.25rem] xl:w-[4.5rem] xl:h-[4.5rem] bg-white/5 text-accent rounded-md flex items-center justify-center shadow-md shadow-black/20">
                                        <div className="text-accent text-2xl">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 ">{item.title}</p>
                                        <h3 className="text-xl ">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;