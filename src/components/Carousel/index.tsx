'use client';

import QuoteIcon from '@/images/QuoteIcon';
import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import RightArrowIcon from '@/images/RightArrowIcon';
import LeftArrowIcon from '@/images/LeftArrowIcon';

interface Carousel {
    data: {
        testimony: string;
        author: {
            name: string;
            role: string;
            image: string;
        };
    }[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
    contentClassName?: string;
}

const Carousel = ({
    data,
    autoSlide = true,
    autoSlideInterval = 4000,
    contentClassName,
}: Carousel) => {
    const [curr, setCurr] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));

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
            className='relative overflow-hidden w-full h-full border border-zinc-300 rounded-2xl shadow-xl'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className='h-full flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {data.map((value, index) => (
                    <div
                        key={index}
                        className={`flex-none w-full h-full px-24 py-14 flex flex-col space-y-4 justify-between items-center ${contentClassName}`}
                    >
                        <QuoteIcon height='90' width='90' />
                        <p className='text-center text-xl italic tracking-wide'>
                            {value.testimony}
                        </p>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative w-[100px] h-[100px] mb-2 rounded-full border-[5px] border-solid border-blue-700/[25%] shadow-image'>
                                <Image
                                    src={value.author.image}
                                    fill
                                    className='rounded-full object-cover'
                                    alt={` icon`}
                                />
                            </div>
                            <p className='text-blue-700 font-semibold text-center'>
                                {value.author.name}
                            </p>
                            <p className='text-zinc-400 text-center'>
                                {value.author.role}
                            </p>
                        </div>
                    </div>
                ))}
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
                {data.map((_, i) => (
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
