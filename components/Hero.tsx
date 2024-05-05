"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="Home"
      className="h-screen w-full bg-hero bg-cover bg-no-repeat"
    >
      <div className="h-full w-full lg:w-5/6 flex flex-col justify-start lg:justify-end items-start gap-6 lg:pb-36 pt-[460px] lg:pt-0 lg:mt-0 pl-4 pr-4 lg:pl-32">
        <p className="font-monument uppercase text-3xl lg:text-6xl text-start">
          The world's first platform for Tokenizing AI blockchain projects
        </p>

        <p className="font-bold text-xl lg:text-center py-1 text-gradient border-gradient relative">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </p>
      </div>
    </section>
  );
};

export default Hero;
