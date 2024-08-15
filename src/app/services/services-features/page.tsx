'use client';

import { CardFlip } from '@/components/services/CardFlip';
import { Header } from '@/components/services/Header';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { data } from '@/constants/our-services';
import useMouseParallax from '../../../hooks/useMouseParallax';

const Page = () => {
    const { parallaxStyle, imageRef, containerRef } = useMouseParallax();
    const serviceId = useSearchParams().get('id');
    const [featureData, setFeatureData] = useState<any>();
    useEffect(() => {
        const selectedService = data.serviceFeatures.find(
            (item) => item.id === serviceId
        );
        if (selectedService) {
            setFeatureData(selectedService);
        }
    }, [serviceId]);

    return (
        <div id='container' className='w-full' ref={containerRef}>
            <Header
                id={featureData?.id}
                backgroundImg={featureData?.backgroundImg}
                title={featureData?.title}
                ref={imageRef}
                parallaxStyle={parallaxStyle}
            />
            <div
                className='flex flex-col items-center py-16'
                // style={{ minHeight: 'calc(100vh - 82px)' }}
            >
                <p className='mb-10 font-bold text-3xl'>Introduction</p>
                <p className='max-w-[700px] mb-20 text-center'>
                    {featureData?.decsription}
                </p>
                <div className='grid md:grid-cols-2 gap-10'>
                    {featureData?.features.map((data: any) => (
                        <CardFlip
                            key={data.id}
                            id={data.id}
                            icon={data.icon}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Use <Suspense fallback={<p>Loading</p>}> alternative for dynamic
export default dynamic(() => Promise.resolve(Page), { ssr: false });
