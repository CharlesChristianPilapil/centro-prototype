"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerItem } from "@/constants/motion";

type Tab = {
  image: string;
  title: string;
  description: string;
};

const HomeTab = ({ image, title, description }: Tab) => {
  return (
    <>
      <motion.div
        className="grid gap-4 p-4 bg-base rounded-2xl shadow-lg"
        variants={staggerItem({ x: 10, y: 0 })}
      >
        <Image src={image} alt={title} height={60} width={60} />
        <h1 className="text-2xl text-darkgray font-semibold">{title}</h1>
        <p className="text-gray">{description}</p>
      </motion.div>
    </>
  );
};

export default HomeTab;
