"use client";

import React from "react";
import HomeTab from "./home-tabs";
import { service_tabs } from "@/constants/home";
import { motion } from "framer-motion";
import { staggerChild } from "@/constants/motion";

const HomeTabsSection = () => {
  return (
    <motion.div
      className="grid gap-[20px] container -mt-16 mb-20 sm:grid-cols-2 lg:grid-cols-4 relative overflow-x-hidden"
      variants={staggerChild({ staggerChildren: 0.2 })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {service_tabs.map((tab, index) => (
        <HomeTab
          key={index}
          image={tab.icon}
          title={tab.title}
          description={tab.description}
        />
      ))}
    </motion.div>
  );
};

export default HomeTabsSection;
