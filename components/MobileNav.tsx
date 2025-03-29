"use client";

import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: 'home', path: '/', },
    { name: 'services', path: '/services', },
    { name: 'resume', path: '/resume', },
    { name: 'work', path: '/work', },
    { name: 'contact', path: '/contact', },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <>
            <Sheet>
                <SheetTrigger className="flex items-center justify-center">
                    <CiMenuFries className='text-[32px] text-accent' />
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                    {/* Logo */}
                    <div className="mt-32 mb-12 text-center text-2xl">
                        <Link href='/'>
                            <h1 className='text-4xl font-semibold'>
                                Hirwa<span className='text-accent'>.</span>
                            </h1>
                        </Link>
                    </div>
                    <nav className="flex flex-col gap-8 sm:gap-3">
                        {links.map((link, index) => {
                            return (
                                // TBC Hide navbar on click
                                <Link key={index} href={link.path} className={`capitalize ${link.path === pathname ? 'text-end text-accent border-b-2 pb-4 border-accent' : ''} text-xl hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </SheetContent>
            </Sheet >
        </>
    )
}

export default MobileNav;