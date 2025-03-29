"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Data
import { routes } from "@/app/data";

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {routes.map((route, index) => {
                return (
                    <Link key={index} href={route.path} className={`capitalize ${route.path === pathname ? 'text-accent border-b-2 border-accent' : ''} font-medium hover:text-accent transition-all`}>
                        {route.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;
