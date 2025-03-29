"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
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
    // {
    //     title: 'Web Development',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     href: '',
    // },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:pt-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[3.75rem]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 border-b border-white/20 group">
                                {/* Numbering */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                    <Link href={service.href} className="w-[4.375rem] h-[4.375rem] rounded-full flex justify-center items-center bg-white group-hover:bg-accent transition-all duration-500 hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* Title */}
                                <h2 className="text-[2.625rem] font-bold leading-none group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* Descr */}
                                <p className="mb-6 text-white/60">{service.description}</p>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;