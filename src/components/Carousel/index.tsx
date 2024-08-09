'use client';

import { useState, useEffect, ReactNode } from 'react';
import RightArrowIcon from '@/images/RightArrowIcon';
import LeftArrowIcon from '@/images/LeftArrowIcon';
import React from 'react';

interface Carousel {
    children: ReactNode;
    autoSlide?: boolean;
    autoSlideInterval?: number;
    className?: string;
    title?: string;
    subscript?: string;
    titleClassName?: string;
}

const Carousel = ({
    children,
    autoSlide = true,
    autoSlideInterval = 4000,
    className,
    title,
    subscript,
    titleClassName,
}: Carousel) => {
    const [curr, setCurr] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const prev = () =>
        setCurr((curr) =>
            curr === 0 ? React.Children.count(children) - 1 : curr - 1
        );
    const next = () =>
        setCurr((curr) =>
            curr === React.Children.count(children) - 1 ? 0 : curr + 1
        );

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(() => {
            if (!isHovered) {
                next();
            }
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, isHovered, next]);

    return (
        <div
            className={`relative overflow-hidden w-full h-full rounded-2xl shadow-xl ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {(title || subscript) && (
                <div
                    className={`px-[34px] pt-5 bg-white text-center ${titleClassName}`}
                >
                    {title && (
                        <p className='font-bold text-lg'>Project Highlights</p>
                    )}
                    {subscript && <p className='text-stone-500'>Makati</p>}
                </div>
            )}
            <div
                className='h-full flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {children}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button
                    onClick={prev}
                    className='rounded-full hover:scale-110 transition-transform duration-300'
                >
                    <LeftArrowIcon height='60' width='60' />
                </button>
                <button
                    onClick={next}
                    className='rounded-full hover:scale-110 transition-transform duration-300'
                >
                    <RightArrowIcon height='60' width='60' />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2'>
                {React.Children.map(children, (_, i) => (
                    <div
                        key={i}
                        className={`
              transition-all w-3 h-3 bg-blue-700 rounded-full
              ${curr === i ? 'p-2' : 'bg-blue-700/[25%]'}
            `}
                    />
                ))}
            </div>
        </div>
    );
};
export default Carousel;
