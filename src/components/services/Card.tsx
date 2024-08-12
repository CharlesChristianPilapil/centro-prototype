'use client';

import { singleElement } from "@/constants/motion";
import { motion } from "framer-motion";

export const Card: React.FC<any> = ({
  children,
  height,
  width,
  radius,
  style,
}) => {
    return (
        <motion.div
            className={`flex flex-col p-[30px] shadow-xl ${style}`}
            variants={singleElement({ x: 0, y: 50, delay: 0.3, type: 'tween' })}
            initial='hidden'
            whileInView='visible'
            style={{
                height: height,
                width: width,
                borderRadius: radius,
            }}
        >
            {children}
        </motion.div>
    );
};
