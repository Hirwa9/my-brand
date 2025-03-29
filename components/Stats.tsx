"use client";

import CountUp from "react-countup";

// Data
import { stats } from "@/app/data";

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 md:flex items-center justify-start gap-4">
                                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                                <p className={`min-w-[80px] ${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;