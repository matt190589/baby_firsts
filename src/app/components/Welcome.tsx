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
          <p
            className="flex w-full justify-center text-white border-b border-bf-off-white pb-6
              pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl
              bg-bf-pink p-4 text-wrap"
          >
              Baby Firsts - What will they do next?
          </p>
        </div>
        <div className="relative">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/Images/baby-first-full-logo.webp"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
        </div>
        <div>
          <button className="bg-bf-navy text-bf-off-white w-[120px] sm:w-[200px] border rounded-2xl border-bf-navy hover:bg-bf-pink">
            Click 1st!
          </button>
        </div>
      </div>

    );
}

export default Welcome;