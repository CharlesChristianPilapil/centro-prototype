'use client';

import { header } from '@/constants/home';
import Link from 'next/link';
import Image from 'next/image';
import Overlay from '../overlay';
import { motion } from 'framer-motion';
import { staggerChild, staggerItem } from '@/constants/motion';

const Header = () => {
  const MotionLink = motion(Link);

  return (
    <header className='py-28 relative sm:h-[650px] grid items-center'>
      <Overlay />
      <motion.div
        className='container flex flex-col gap-6 text-base relative overflow-hidden'
        variants={staggerChild({ staggerChildren: 0.3 })}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h1
          className='font-semibold text-[2rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3.75rem] max-w-[600px] tracking-wide sm:tracking-tight'
          variants={staggerItem({ x: -20, y: 20 })}
        >
          {header.h}
        </motion.h1>
        <motion.p
          className='max-w-[600px]'
          variants={staggerItem({ x: -20, y: 20 })}
        >
          {header.p}
        </motion.p>
        <MotionLink
          href='about'
          className='font-semibold w-fit flex items-center gap-4'
          variants={staggerItem({ x: -20, y: 20 })}
        >
          <p> READ MORE </p>
          <Image src='/right.svg' alt='arrow right' height={24} width={24} />
        </MotionLink>
      </motion.div>
    </header>
  );
};

export default Header;
