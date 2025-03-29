"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


const socials = [
    { name: 'Github', icon: <FaGithub className='size-6' />, path: 'https://github.com/Hirwa9', },
    { name: 'LinkedIn', icon: <FaLinkedin className='size-6' />, path: 'http://linkedin.com/in/hirwa-cyuzuzo-willy-94159427b', },
    { name: 'Instagram', icon: <FaInstagram className='size-6' />, path: 'https://www.instagram.com/hirwa__willy', },
    { name: 'Facebook', icon: <FaFacebook className='size-6' />, path: 'https://www.facebook.com/profile.php?id=100009250550394', },
];

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
    )
}

export default Social;