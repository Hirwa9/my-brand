"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Components
import Stairs from './Stairs';


const StairTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <div key={pathname}>
                <div className='fixed top-0 w-full h-screen z-40 flex pointer-events-none'>
                    <Stairs />
                </div>
                <motion.div
                    className='fixed bg-primary top-0 w-full h-screen pointer-events-none'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: 'easeInOut' } }}
                />
            </div>
        </AnimatePresence>
    )
}

export default StairTransition;