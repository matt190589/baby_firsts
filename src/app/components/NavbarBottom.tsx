import React from 'react';
import Image from 'next/image';

const NavBarBottom: React.FC = () => {
    return (
        <footer className="fixed inset-x-0 bottom-0 bg-bf-navy shadow-lg p-4 border-t border-bf-pink">
            <div className="flex justify-around items-center">
                <a href="#" className="flex text-bf-off-white hover:text-bf-pink">
                    <div>
                        <Image
                            src="/Images/Icons/home-original.svg"
                            alt="home icon"
                            width={50}
                            height={50}
                        />
                    </div>
                </a>
                <a href="#" className="flex text-bf-off-white hover:text-bf-pink">
                    <div>
                        <Image
                            src="/Images/Icons/record-original.svg"
                            alt="record icon"
                            width={50}
                            height={50}
                        />
                    </div>
                </a>
                <a href="#" className="flex text-bf-off-white hover:text-bf-pink">
                    <div>
                        <Image
                            src="/Images/Icons/stats-original.svg"
                            alt="stats icon"
                            width={50}
                            height={50}
                        />
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default NavBarBottom;
