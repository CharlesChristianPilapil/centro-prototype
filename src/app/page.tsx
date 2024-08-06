'use client';

import Carousel from '@/components/ui/carousel';
import FeaturesWrapper from './ui/home/features-wrapper';
import Header from './ui/home/header';
import HomeTabsSection from './ui/home/home-tabs-section';
import Section from './ui/home/section';
const data = [
    {
        testimony: `This software has transformed the way we manage our projects. Its intuitive interface and robust features have streamlined our workflows and significantly boosted team productivity. We’ve seen a dramatic improvement in project turnaround times and client satisfaction since we implemented it.`,
        author: {
            name: 'Olivia Wilson',
            role: 'CEO and Founder at Borcelle',
            image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg',
        },
    },
    {
        testimony: `ProTrak has been a game-changer for our team. It's user-friendly and has made managing our tasks and projects so much easier. We love how quickly we can collaborate and track our progress. Highly recommend it!`,
        author: {
            name: 'Alex Johnson',
            role: 'Project Manager at Creative Labs',
            image: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg',
        },
    },
    {
        testimony: `With ProTrak, our team’s workflow has become much more efficient. It’s easy to use and has streamlined our processes. We've saved time and improved productivity. Definitely worth the investment!`,
        author: {
            name: 'Emily Carter',
            role: 'Marketing Director at Innovate Inc.',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
    },
];

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
                    <Carousel data={data} contentClassName={'min-h-[550px]'} />
                </Section>
            </main>
        </>
    );
}
