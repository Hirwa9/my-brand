"use client";

import Link from 'next/link';

// Data
import { socials } from '@/app/data';

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} target='_blank' className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Social;