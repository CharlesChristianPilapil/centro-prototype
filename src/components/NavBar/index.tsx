'use client';

import React, { useEffect, useState } from 'react';
import { navlink } from '@/constants/home';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import NavLink from '@/components/NavLink';
import AsideNav from '../AsideNav';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import useWindowWidth from '@/hooks/WindowWidth';
import { url } from '@/constants/url';
import usePageScrolling from '@/hooks/PageScrolling';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const [aside, setAside] = useState<boolean>(false);
    const windowWidth = useWindowWidth();

    const pageScroll = usePageScrolling()

    useEffect(() => {
        setAside(false);
    }, [pathName]);

    useEffect(() => {
        if (windowWidth >= 1024) setAside(false);
    }, [windowWidth]);

    return (
        <>
            <nav className={`${pageScroll ? 'backdrop-blur-md bg-darkblue/80' : 'bg-darkblue'} 
            py-4 text-base sticky top-0 z-50 drop-shadow-md shadow-md transition-all duration-300`}>
                {/* <div className="container flex items-center justify-between">
                <Link href="/">
                <Image
                src="/images/centro.svg"
                alt="centro logo"
                height={67.42}
                width={55}
                />
                </Link>
                <ul className="hidden xl:flex gap-6">
                {navlink.map((e) => (
                    <li key={e.href}>
                    <Link href={e.href}>{e.name}</Link>
                    </li>
                    ))}
                    </ul>
                    <Image
                    src="/hamburger.svg"
                    alt="hamburger"
                    height={15.28}
                    width={28}
                    className="cursor-pointer xl:hidden"
                    />
                    </div> */}
                <div className='container flex items-center justify-between'>
                    <Link href={'/'} className='flex items-center gap-5'>
                        <Icon name='centro-logo' className='block sm:hidden' />
                        <Icon
                            name='centro-logo-text'
                            className='hidden sm:block'
                        />
                    </Link>
                    <ul className='hidden lg:flex gap-6'>
                        {navlink
                            .filter((e) => e.name !== 'HOME')
                            .map((e, index) => (
                                <li key={index}>
                                    <NavLink label={e.name} href={e.href} />
                                </li>
                            ))}
                    </ul>
                    <div className='flex items-center gap-5'>
                        <div className='hidden md:grid gap-5'>
                            {/* <Button
                                className='border border-base hover:bg-base/20 py-[10px] px-[36px]'
                                label='Login'
                                isRounded
                                onClick={() => console.log('Login clicked...')}
                            /> */}
                            <Button
                                className='py-[10px] px-[20px] w-fit border bg-white text-darkblue hover:bg-white/80'
                                label='Join Now'
                                isRounded
                                onClick={() =>
                                    router.push(`${url + '/lets-connect'}`)
                                }
                            />
                        </div>
                        <button
                            onClick={() => setAside((prev) => !prev)}
                            className='lg:hidden'
                        >
                            <Icon name={aside ? 'x-mark' : 'hamburger'} />
                        </button>
                    </div>
                </div>
            </nav>
            <AsideNav show={aside} />
        </>
    );
};

export default Navbar;
