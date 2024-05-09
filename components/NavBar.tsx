import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

import {
  CONTACT_EMAIL,
  // GITHUB_PROFILE_URL,
  // LINKEDIN_PROFILE_URL,
} from "@/lib/constants";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
  return (
    <nav className="backdrop-blur-md w-full fixed top-0 side-padding left-0 shadow-lg shadow-[#4cbc7c]/50 bg-[#0c3454] z-20 h-20 flex justify-between items-center">
      {/* Avatar and name */}
      <div className="flex-[0.9_0.9_0%]">
        <Link className="flex gap-3 items-center w-fit" href="/">
          <Image
            src="/static/images/logos/cosmic-city-logo-landscape-white.svg"
            alt="Cosmic City Logo"
            width={200}
            height={80}
          />
        </Link>
      </div>

      {/* Page links */}
      <div className="flex items-center gap-2 flex-1 max-xl:hidden bg-black/40 px-10 rounded-full justify-between border border-solid border-black/20">
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-10 py-2 min-w-[22ch]"
          href="#about"
        >
          About Us
        </Link>
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-10 py-2 min-w-[22ch]"
          href="#proximity"
        >
          Proximity
        </Link>
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-10 py-2 min-w-[22ch]"
          href="#payment"
        >
          Payment Plan
        </Link>
      </div>

      {/* Social media links */}
      <div className="flex items-center gap-6 flex-[0.9_0.9_0%] justify-end">
        {/* <Link href={GITHUB_PROFILE_URL} target="_blank" tabIndex={-1}>
          <Github
            className="hover:fill-white focus-visible:fill-white"
            strokeWidth={1.5}
            tabIndex={0}
          />
        </Link> */}
        {/* <Link href={LINKEDIN_PROFILE_URL} target="_blank" tabIndex={-1}>
          <Linkedin
            className="hover:fill-white focus-visible:fill-white"
            strokeWidth={1.5}
            tabIndex={0}
          />
        </Link> */}
        <Link href="#" tabIndex={-1}>
          <button
            type="button"
            className="focus:outline-none text-bold text-white bg-[#4cbc7c] hover:bg-[#0c3454] focus:ring-4 focus:ring-green-300 font-extrabold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300 ease-in-out"
          >
            Book Now
          </button>
        </Link>
        <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank" tabIndex={-1}>
          <Mail
            className="hover:fill-white hover:stroke-black focus-visible:stroke-black focus-visible:fill-white"
            strokeWidth={1.5}
            tabIndex={0}
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
