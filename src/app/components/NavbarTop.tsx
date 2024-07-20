import React from 'react';

interface NavbarTopProps {
    title?: string;
}

const NavbarTop: React.FC<NavbarTopProps> = ({ title = "BabyFirsts" }) => {
    return (
        <nav className="bg-bf-navy p-4 shadow-md border-b-2 border-bf-pink">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-xl text-bf-pink font-bold" href="#">{title}</a>
                <div className="hidden md:flex items-center space-x-1">
                    <a className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy" href="#">Login</a>
                    <a className="text-bf-off-white px-3 py-2 rounded hover:bg-bf-light-blue hover:text-bf-navy" href="#">Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTop;
