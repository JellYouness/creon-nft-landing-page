import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-5 py-6 px-4 lg:px-52 box-border w-full relative">
      <div className="absolute left-0 bottom-0 w-full -z-50">
        <div className="size-full relative">
          <img
            src="/gradient.webp"
            alt="gradient Image"
            className="absolute top-0 left-0 h-full w-full object-cover mix-blend-soft-light"
          />
          <video
            className="size-full object-cover"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/roadmap-video.mp4" type="video/mp4" />
          </video>
          <img
            src="/blur-video.webp"
            alt="blur Image"
            className="absolute bottom-0 left-0 h-full w-full"
          />
        </div>
      </div>
      <div className="w-full flex items-center gap-20 text-xs">
        <p>© Creon 2023. All rights reserved.</p>
        <Socials />
      </div>
      <div className="text-xs NFT-hover cursor-pointer text-center lg:text-end">
        Powered By <span className="font-monument">NIFTABLES</span>
      </div>
    </footer>
  );
};

export default Footer;
