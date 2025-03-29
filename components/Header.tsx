"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Components
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto', transition: { delay: 3, duration: 0.4, ease: 'easeInOut' } }}
        >
            <header className="pt-4 pb-8 xl:pt-8 xl:pb-10 text-white">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href='/'
                        className="flex text-4xl font-semibold"
                    >
                        <h1>Hirwa</h1> <span className="text-accent">.</span>
                    </Link>

                    {/* Desktop nav & hire me button */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link href="/contact">
                            <Button>Hire me</Button>
                        </Link>
                    </div>

                    {/* Mobile nav */}
                    <div className="xl:hidden">
                        <MobileNav />
                    </div>
                </div>
            </header>
        </motion.div>
    )
}

export default Header;