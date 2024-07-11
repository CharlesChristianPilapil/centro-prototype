"use client";

import { header } from "@/constants/home";
import Overlay from "../overlay";
import { motion } from "framer-motion";
import { staggerChild, staggerItem } from "@/constants/motion";
import ArrowLink from "../arrow-link";

const Header = () => {
  return (
    <header className="py-28 relative sm:h-[650px] grid items-center">
      <Overlay />
      <motion.div
        className="container flex flex-col gap-6 text-base relative overflow-hidden"
        variants={staggerChild({ staggerChildren: 0.1 })}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-semibold text-[2rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3.75rem] max-w-[600px] tracking-wide sm:tracking-tight"
          variants={staggerItem({ x: -20, y: 20 })}
        >
          {header.h}
        </motion.h1>
        <motion.p
          className="max-w-[600px]"
          variants={staggerItem({ x: -20, y: 20 })}
        >
          {header.p}
        </motion.p>
        <ArrowLink href="about">READ MORE</ArrowLink>
      </motion.div>
    </header>
  );
};

export default Header;
