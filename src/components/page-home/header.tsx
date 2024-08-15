"use client";

import { header } from "@/constants/home";
import Overlay from "../Overlay";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerChild, staggerItem } from "@/constants/motion";
import ArrowLink from "../ArrrowLink";
import { useRef } from "react";

const Header = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start", "end start"]
    });
    const translateX = useTransform(scrollYProgress, [0, 1], ['0', '50%']);


    return (
        <header className="py-28 relative sm:h-[650px] grid items-center bg-[url('/images/home/header-bg.svg')] overflow-x-hidden bg-cover bg-center">
            <motion.div 
                className="h-full w-[150%] top-0 right-0 bg-[url('/images/home/header-bg.svg')] bg-cover bg-center absolute ease-in-out" 
                ref={targetRef} 
                style={{ translateX }}
            />
            <Overlay />
            <motion.div
                className="container flex flex-col gap-6 text-base relative overflow-hidden"
                variants={staggerChild({ staggerChildren: 0.2, delayChildren: 0.3 })}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <motion.h1
                className="font-semibold text-gray text-[2rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3.75rem] max-w-[600px] tracking-wide sm:tracking-tight"
                variants={staggerItem({ x: -20, y: 20 })}
                >
                {header.h}
                </motion.h1>
                <motion.p
                className="max-w-[600px] text-gray"
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
