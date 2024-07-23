import React from 'react';
import Image from "next/image";
import Link from 'next/link';

interface NavbarTopProps {
    title?: string;
}

const NavbarTop: React.FC<NavbarTopProps> = ({ title = "BabyFirsts" }) => {
    return (
        <nav className="bg-bf-navy p-4 shadow-md border-b-2 border-bf-pink">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-start text-bf-off-white md:hidden">
                    <Image
                        src="/Images/Icons/menu.svg"
                        alt="home icon"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/Images/baby-first-full-logo.webp"
                        alt="Baby First Logo"
                        width={80}
                        height={30}
                        priority
                    />
                    <div className="flex items-center text-xl text-bf-pink font-bold">
                        <Link href="/">{title}</Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                    <div className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy">
                        <Link href="/login">Login</Link>
                    </div>
                    <div className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy">
                        Logout
                    </div>
                    <div className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy">
                        <Link href="/account">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTop;
