'use client';

import Carousel from '@/components/ui/carousel';
import FeaturesWrapper from '@/components/home/features-wrapper';
import Header from '@/components/home/header';
import HomeTabsSection from '@/components/home/home-tabs-section';
import Section from '@/components/home/section';
import { HomeCarouselData } from '@/constants/home';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeTabsSection />
                <FeaturesWrapper />
                <Section>
                    <p className='text-4xl text-sky-900 font-bold text-center mb-[50px]'>
                        See What Users Said About Us
                    </p>
                    <Carousel data={HomeCarouselData} contentClassName={'min-h-[550px]'} />
                </Section>
            </main>
        </>
    );
}
