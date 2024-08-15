'use client';

import { articles } from "@/constants/discover"
import { motion } from "framer-motion";
import {  staggerChild } from "@/constants/motion";
import ArticleTab from "../ArticleTab";

const ArticlesList = () => {

  return (
    <motion.ul 
        variants={staggerChild({delayChildren: .2, staggerChildren: .2})}
        initial='hidden'
        whileInView='visible'
        viewport={{once: false, amount: 'some'}}
        className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 mb-24"
    >
        {articles.map((e, index) => (
            <ArticleTab e={e} key={index} />
        ))}
    </motion.ul>
  )
}
export default ArticlesList;