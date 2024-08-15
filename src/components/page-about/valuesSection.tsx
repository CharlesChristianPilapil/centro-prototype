'use client';

import { AboutTabs } from "@/constants/about";
import TabItem from "@/components/TabItem";
import { motion } from "framer-motion";
import { staggerChild } from "@/constants/motion";

const ValuesSection = () => {
    return (
        <motion.section 
            className="container mb-24 grid md:grid-cols-2 xl:grid-cols-5"
            variants={staggerChild({ staggerChildren: 0.2, delayChildren: 0.2 })}
            initial='hidden'
            whileInView='visible'
        >
            {AboutTabs.map((e, index) => (
                <TabItem
                    key={index}
                    icon={e.icon}
                    title={e.title}
                    description={e.description}
                    shade={index % 2 !== 0}
                    button={e.button}
                    hover={index !== 0 && index !== AboutTabs.length - 1}
                    className={`${e.style} gap-2`}
                />
            ))}
        </motion.section>
    );
};

export default ValuesSection;