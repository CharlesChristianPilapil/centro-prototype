import { header } from "@/constants/home";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";

const Header = () => {
  return (
    <header className="py-28 relative sm:h-[650px] grid items-center">
      <Overlay />
      <div className="container flex flex-col gap-6 text-base relative">
        <h1 className="font-semibold text-[2rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3.75rem] max-w-[600px] tracking-wide sm:tracking-tight">
          {header.h}
        </h1>
        <p className="max-w-[600px]"> {header.p} </p>
        <Link
          href="about"
          className="font-semibold w-fit flex items-center gap-4"
        >
          <p> READ MORE </p>
          <Image src="/right.svg" alt="arrow right" height={24} width={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
