'use client';

import { singleElement } from '@/constants/motion';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Overlay from '../Overlay';

interface Props {
  image: string;
  title: string;
  description: string;
  index: number;
}

const FeaturesTab = ({ image, title, description, index }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <div className={clsx('grid lg:grid-cols-2 xl:grid-cols-8 2xl:grid-cols-12 xl:h-[500px] border-pink-500',
        {'bg-transparent': !isEven, 'bg-darkblue': isEven,})}
    >
      <motion.div
        className={clsx('relative sm:h-[300px] lg:h-full xl:col-span-4 2xl:col-span-7 overflow-y-hidden bg-black', {'lg:order-2': !isEven,})}
        variants={singleElement({ x: 0, y: -20, delay: 0.3, type: 'tween' })}
        initial='hidden'
        whileInView='visible'
      >
        <Image
          src={image}
          height={0}
          width={0}
          alt={title}
          className='w-full lg:h-full object-cover bg-pink-50'
        />
        <Overlay className='bg-black/20'/>
      </motion.div>
      <article className='px-4 py-8 grid place-items-center xl:col-span-4 2xl:col-span-5'>
        <motion.div
          className='grid gap-8'
          variants={singleElement({ x: 0, y: 15, delay: 0.3, type: 'tween' })}
          initial='hidden'
          whileInView='visible'
        >
          <h1
            className={clsx(
              'text-[1.5rem] leading-[2.25rem] text-base font-semibold',
              {'text-darkblue': !isEven,})}
          >
            {title}
          </h1>
          <p className={clsx('text-base', {'text-lightblue': !isEven,})}>
            {description}
          </p>
        </motion.div>
      </article>
    </div>
  );
};

export default FeaturesTab;
