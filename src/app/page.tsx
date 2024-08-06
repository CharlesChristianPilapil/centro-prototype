'use client';

import Carousel from '@/components/ui/carousel';
import FeaturesWrapper from './ui/home/features-wrapper';
import Header from './ui/home/header';
import HomeTabsSection from './ui/home/home-tabs-section';
const data = [
    {
        testimony: `Functional tool with lots of flexible solutions for your
                  business. I can’t recommend it enough. It has helped my
                  business tremendously! Functional tool with lots of flexible
                  solutions for your business. I can’t recommend it enough. It
                  has helped my business tremendously!`,
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
                <Carousel data={data} />
            </main>
        </>
    );
}
