"use client";

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
    children: ReactNode; // Allows any valid React child components
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 0.8, duration: 0.4, ease: 'backOut' } }}
                    className='h-screen w-full fixed top-0 left-0 right-0 bg-primary pointer-events-none'
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;