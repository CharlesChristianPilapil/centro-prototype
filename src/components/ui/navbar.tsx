import React from "react";
import Image from "next/image";
import { navlink } from "@/constants/home";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-darkblue py-4 text-base">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/centro.svg"
            alt="centro logo"
            height={67.42}
            width={55}
          />
        </Link>
        <ul className="hidden xl:flex gap-6">
          {navlink.map((e) => (
            <li key={e.href}>
              <Link href={e.href}>{e.name}</Link>
            </li>
          ))}
        </ul>
        <Image
          src="/hamburger.svg"
          alt="hamburger"
          height={15.28}
          width={28}
          className="cursor-pointer xl:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
