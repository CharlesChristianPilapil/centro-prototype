"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { singleElement, staggerItem } from "@/constants/motion";
import Icon from "../Icon";

type Tab = {
  image: string;
  title: string;
  description: string;
};

const HomeTab = ({ image, title, description }: Tab) => {
  const Content = () => {
    return (
      <>
        <div className="flex flex-col gap-4 p-4 bg-base rounded-2xl shadow-lg h-full">
          <Icon name={image} />
          <h1 className="text-2xl text-darkgray font-semibold">{title}</h1>
          <p className="text-darkgray flex-1">{description}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <motion.article
        variants={staggerItem({ x: -100, y: 0 })}
        className="hidden lg:block"
      >
        <Content />
      </motion.article>

      <motion.article
        variants={singleElement({ x: -100, y: 0, duration: 0.5, delay: 0.5 })}
        initial="hidden"
        whileInView="visible"
        className="lg:hidden"
      >
        <Content />
      </motion.article>
    </>
  );
};

export default HomeTab;
