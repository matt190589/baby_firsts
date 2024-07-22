import React from 'react';

const NavBarBottom: React.FC = () => {
    return (
        <footer className="fixed inset-x-0 bottom-0 bg-bf-navy shadow-lg p-4 border-t border-bf-pink">
            <div className="flex justify-around items-center">
                <a href="#" className="text-bf-off-white hover:text-bf-pink">
                    Home
                </a>
                <a href="#" className="text-bf-off-white hover:text-bf-pink">
                    Stats
                </a>
                <a href="#" className="text-bf-off-white hover:text-bf-pink">
                    Record
                </a>
            </div>
        </footer>
    );
};

export default NavBarBottom;
