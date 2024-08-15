'use client';

import { IHeader } from '@/util/interface';
import Overlay from '../Overlay';
import { motion } from 'framer-motion';
import { singleElement } from '@/constants/motion';
import { forwardRef } from 'react';
import Image from 'next/image';

export const Header = forwardRef<HTMLImageElement, IHeader>(
    ({ id, backgroundImg, title, description, parallaxStyle }, ref) => {
        return (
            <div className='relative h-[400px] w-full flex justify-center items-center overflow-hidden'>
                <Image
                    src={backgroundImg}
                    alt='Background'
                    width={1200}
                    height={400}
                    ref={ref}
                    className={`absolute w-[120%] h-[120%] object-cover ${
                        id === 'service-background'
                            ? 'object-bottom'
                            : 'object-center'
                    }`}
                    style={{
                        ...parallaxStyle(-30), // Applies parallax effect
                    }}
                />
                <Overlay />
                <motion.div
                    variants={singleElement({
                        x: 0,
                        y: 60,
                        delay: 0.3,
                        type: 'tween',
                    })}
                    initial='hidden'
                    whileInView='visible'
                    className='absolute text-center'
                >
                    <p className='text-4xl text-white font-bold'>{title}</p>
                    <p className='mt-[20px] text-white'>{description}</p>
                </motion.div>
            </div>
        );
    }
);

Header.displayName = 'Header';
