import React from 'react';
import Image from "next/image";

interface WelcomeProps {
    title?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ title = "BabyFirsts" }) => {
    return (
    <div className="flex flex-col items-center justify-between p-24 bg-bf-off-white">
        <div
          className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
        >
            <p className="fixed top-24 flex w-full justify-center text-white border-b border-bf-off-white pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border bg-bf-pink lg:p-4 lg:dark:bg-zinc-800/30">
              Baby Firsts - What will they do next?
            </p>
        </div>
        <div className="relative">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/Images/baby-first-image.webp"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
        </div>
      </div>

    );
}

export default Welcome;