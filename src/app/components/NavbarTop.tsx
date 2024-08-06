"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { readUserSession } from '@/utils';

interface NavbarTopProps {
    title?: string;
}

const NavbarTop: React.FC<NavbarTopProps> = ({ title = "BabyFirsts"}) => {
    const userAuth = true;
    
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
                        src="/Images/baby-head.webp"
                        alt="Baby First Logo"
                        width={44}
                        height={30}
                        priority
                    />
                    <div className="flex items-center text-xl text-bf-pink font-bold ml-3">
                        <Link href="/">{title}</Link>
                    </div>
                </div>
                {/* <p>Welcome, {userDetails ? userDetails.name : 'Guest'}!</p> */}
                <div className="hidden md:flex items-center space-x-1">
                    {!userAuth && (
                        <div className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy">
                            <Link href="/login">Login</Link>
                        </div>
                    )}
                    <div className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy">
                        Logout
                    </div>
                    <div className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy">
                        <Link href="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTop;
