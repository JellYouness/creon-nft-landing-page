import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-5 py-6 px-4 lg:px-52 box-border w-full">
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
