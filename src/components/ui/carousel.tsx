import Section from '@/app/ui/home/section';
import LeftArrowIcon from '@/images/LeftArrowIcon';
import QuoteIcon from '@/images/QuoteIcon';
import RightArrowIcon from '@/images/RightArrowIcon';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Carousel {
    data: {
        testimony: string;
        author: {
            name: string;
            role: string;
            image: string;
        };
    }[];
}

const Carousel = ({ data }: Carousel) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };
    return (
        <Section>
            <div className='w-full min-h-[550px] grid grid-flow-col grid-cols-10 rounded-xl shadow-xl'>
                <button
                    className='h-full w-full flex justify-center items-center hover:scale-110 transition-transform duration-300'
                    onClick={prevSlide}
                >
                    <LeftArrowIcon height='40' width='40' />
                </button>
                <div className='col-span-8 h-[86.5%]'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.7 }}
                        className='h-full px-6 pt-10 flex flex-col space-y-4 justify-between items-center'
                    >
                        <QuoteIcon height='80' width='80' />
                        <p className='text-center text-xl italic tracking-wide'>
                            {data[currentIndex].testimony}
                        </p>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative w-[100px] h-[100px] mb-2 rounded-full border-[5px] border-solid border-blue-700/[25%] shadow-image'>
                                <Image
                                    src={data[currentIndex].author.image}
                                    fill
                                    className='rounded-full object-cover'
                                    alt={` icon`}
                                />
                            </div>
                            <p className='text-blue-700 font-semibold text-center'>
                                {data[currentIndex].author.name}
                            </p>
                            <p className='text-zinc-400 text-center'>
                                {data[currentIndex].author.role}
                            </p>
                        </div>
                    </motion.div>
                    <div className='flex justify-center space-x-2 mt-6 pb-10'>
                        {data.map((_, index) => (
                            <button
                                key={index}
                                className={`h-3 w-3 rounded-full ${
                                    index === currentIndex
                                        ? 'bg-blue-700'
                                        : 'bg-blue-700/[25%]'
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
                <button
                    className='h-full w-full flex justify-center items-center hover:scale-110 transition-transform duration-300'
                    onClick={nextSlide}
                >
                    <RightArrowIcon height='40' width='40' />
                </button>
            </div>
        </Section>
    );
};

export default Carousel;
