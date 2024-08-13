'use client';

import Carousel from '@/components/Carousel';
import FeaturesWrapper from '@/components/page-home/features-wrapper';
import Header from '@/components/page-home/header';
import HomeTabsSection from '@/components/page-home/home-tabs-section';
import Section from '@/components/page-home/section';
import { HomeCarouselData } from '@/constants/home';
import Image from 'next/image';
import QuoteIcon from '@/images/QuoteIcon';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <title>Centro | Home</title>
                <HomeTabsSection />
                <FeaturesWrapper />
                {/* <Section>
                    <p className='text-4xl text-sky-900 font-bold text-center mb-[50px]'>
                        See What Users Said About Us
                    </p>
                    <Carousel>
                        {HomeCarouselData.map((value, index) => (
                            <div
                                key={index}
                                className={`flex-none w-full h-full px-24 py-14 flex flex-col space-y-4 justify-between items-center min-h-[550px] bg-white`}
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
                    </Carousel>
                </Section> */}
            </main>
        </>
    );
}
