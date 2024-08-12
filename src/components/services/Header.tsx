'use client';

import { IHeader } from '@/util/interface';
import Overlay from '../Overlay';
import { motion } from 'framer-motion';
import { singleElement } from '@/constants/motion';

export const Header: React.FC<IHeader> = ({ title, description }) => {
  return (
    <div className="relative h-[400px] flex justify-center items-center bg-[url('/service-background-image.svg')] bg-cover bg-bottom">
        <Overlay />
        <motion.div 
            variants={singleElement({ x: 0, y: 60, delay: 0.3, type: 'tween' })}
            initial='hidden'
            whileInView='visible' 
            className='absolute text-center'
        >
            <p className='text-4xl text-white font-bold'>{title}</p>
            <p className='mt-[20px] text-white'>{description}</p>
        </motion.div>
    </div>
  );
};
