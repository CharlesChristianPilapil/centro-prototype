'use client';

import { useEffect } from 'react';
import Button from '../Button';
import Overlay from '../Overlay';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

const Header = () => {
    const router = useRouter();
    const pathName = usePathname();
    const description =
        pathName === '/discover/faqs'
            ? `Find clear, concise answers to common questions in our comprehensive FAQ section, helping you navigate with confidence.`
            : pathName === '/discover/articles'
            ? `Explore articles on advanced technologies and practical tips, designed to keep you informed, inspired, and ahead of the curve.`
            : 'Discover a world of knowledge and innovation with our expertly curated insights, designed to inspire and empower your journey.';

    const handleClick = (params: string) => {
        if (params === pathName) return;
        router.push(`/discover/${params}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return (
        <>
            <header className="py-28 mb-5 relative sm:h-[650px] grid items-center bg-[url('/images/discover/discover-bg.svg')] bg-cover bg-center">
                <Overlay />
                <div className='flex flex-col gap-5 container relative z-20 text-base'>
                    <h1 className='font-semibold text-[2rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3.75rem] max-w-[600px] tracking-wide sm:tracking-tight'>
                        {/* {pathName === '/discover/faqs' ? `FAQs About Centro` : pathName === '/discover/articles' ? `Centro's Articles` : 'Discover'} */}
                        {pathName === '/discover/articles' &&
                            `Centro's Article`}
                        {pathName === '/discover/articles/article' &&
                            `Centro's Article`}
                        {pathName === '/discover' && `Discover`}
                        {pathName === '/discover/faqs' && `FAQs About Centro`}
                    </h1>
                    <div className='max-w-[600px]'>
                        <sub className='text-[16px]'>{description}</sub>
                    </div>
                    {/* <div className='flex gap-2'>
                        <Button
                            variant='transparent'
                            className='border w-fit border-white py-1 hover:bg-white/10 px-3'
                            onClick={() => handleClick('faqs')}
                        >
                            FAQs
                        </Button>
                        <Button
                            className='bg-white text-darkblue hover:bg-white/80 w-fit py-1 px-3'
                            onClick={() => handleClick('articles')}
                        >
                            Article
                        </Button>
                    </div> */}
                </div>
            </header>
            {/* {pathName !== '/discover' && 
        (<div className="container">
            <Button
                isRounded
                className="py-2 px-3 border-darkblue border text-darkblue hover:bg-darkblue/10"
                onClick={() => router.push('/discover')}
            >
                Back to Discover
            </Button>
        </div>)} */}
        </>
    );
};
export default Header;
