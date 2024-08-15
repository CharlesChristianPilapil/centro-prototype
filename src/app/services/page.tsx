'use client';

import ServiceCard from '../../components/services/ServiceCard';
import { Header } from '../../components/services/Header';
import { motion } from 'framer-motion';
import { singleElement } from '@/constants/motion';
import { data } from '@/constants/our-services';
import useMouseParallax from '../../hooks/useMouseParallax';

const page = () => {
    const { parallaxStyle, imageRef, containerRef } = useMouseParallax();

    return (
        <div id='container' className='w-full' ref={containerRef}>
            <Header
                title='What do we offer?'
                description='We provide a comprehensive suite of services to drive your success.'
                ref={imageRef}
                parallaxStyle={parallaxStyle}
            />
            <title>Centro | Our Services</title>
            <div
                className='flex flex-col items-center py-16'
                // style={{ minHeight: 'calc(100vh - 82px)' }}
            >
                <motion.p
                    variants={singleElement({
                        x: 0,
                        y: 50,
                        delay: 0.3,
                        type: 'tween',
                    })}
                    initial='hidden'
                    whileInView='visible'
                    className='mb-[50px] font-bold text-3xl'
                >
                    OUR INITIAL SERVICES
                </motion.p>
                <div className='grid md:grid-cols-2 gap-10 mb-[50px] max-w-[900px]'>
                    {data.map((data) => (
                        <ServiceCard
                            key={data.id}
                            id={data.id}
                            icon={data.icon}
                            title={data.title}
                            description={data.decsription}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
