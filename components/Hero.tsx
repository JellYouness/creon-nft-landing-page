"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="Home" className="h-screen w-full relative">
      <div className="h-full w-full lg:w-11/12 flex flex-col justify-start lg:justify-end items-start gap-6 lg:pb-10 pt-[460px] lg:pt-0 lg:mt-0 pl-4 pr-4 lg:pl-52">
        <p className="font-monument uppercase text-3xl lg:text-6xl text-start">
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </p>

        <p className="font-bold text-xl lg:text-lg lg:text-center py-1 text-gradient border-gradient relative">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </p>
      </div>
      <div className="absolute top-0 left-0 h-full w-full object-cover -z-50">
        <video
          className=" h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src="/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>
      <img
        src="/gradient.webp"
        alt="gradient Image"
        className="absolute top-0 left-0 h-full w-full object-cover mix-blend-soft-light"
      />
    </section>
  );
};

export default Hero;
