'use client';

import { newsletter } from '@/constants/home';
import Overlay from '../Overlay';
import NewsletterInput from './input';
import { motion } from 'framer-motion';
import { singleElement } from '@/constants/motion';

const Newsletter = () => {
  return (
    <div className="font-mohave py-32 relative bg-[url('/images/home/newsletter-bg.svg')] bg-cover bg-center bg-fixed">
      <motion.div 
        className='flex flex-col items-center text-center relative gap-2 z-20 container'
        variants={singleElement({ x: 0, y: 50, delay: 0.3, type: 'tween' })}
        initial='hidden'
        whileInView='visible'
      >
        <strong className='font-bold text-base'> {newsletter.title} </strong>
        <h1 className='font-bold text-[40px] text-lightblue'> {newsletter.head} </h1>
        <p className='max-w-[500px] text-base'> {newsletter.description} </p>
        <NewsletterInput />
      </motion.div>
      <Overlay />
    </div>
  );
};

export default Newsletter;
