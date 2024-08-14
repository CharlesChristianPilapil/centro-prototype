'use client';

import { navlink } from '@/constants/home';
import { AnimatePresence, motion } from 'framer-motion';
import NavLink from '@/components/NavLink';
import Button from '../Button';
import useWindowWidth from '@/hooks/WindowWidth';
import { useRouter } from 'next-nprogress-bar';
import { url } from '@/constants/url';
import usePageScrolling from '@/hooks/PageScrolling';

interface AsideInterface {
    show?: boolean;
}

const AsideNav = ({ show }: AsideInterface) => {
    const router = useRouter();

    const windowWidth = useWindowWidth();
    const pageScroll = usePageScrolling();

    return (
        <AnimatePresence>
            {show && (
                <motion.aside
                    className={`${pageScroll ? 'backdrop-blur-md bg-darkblue/80' : 'bg-darkblue'} 
                    xl:hidden px-5 fixed right-0 w-[80%] h-full md:h-fit md:w-full z-40 drop-shadow-2xl transition-colors duration-300`}
                    initial={{
                        x: windowWidth >= 768 ? '0' : '100%',
                        y: windowWidth >= 768 ? '-100%' : '0',
                    }}
                    animate={{ x: '0', y: '0' }}
                    exit={{
                        x: windowWidth >= 768 ? '0' : '100%',
                        y: windowWidth >= 768 ? '-100%' : '0',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className='mt-10 md:mb-10 flex flex-col md:flex-row md:justify-center gap-5'>
                        {navlink
                            .filter((e) => e.name !== 'HOME')
                            .map((e, index) => (
                                <li key={index}>
                                    <NavLink label={e.name} href={e.href} />
                                </li>
                            ))}
                    </ul>
                    <div className='h-[0.5px] w-full bg-white/30 mt-5 md:hidden'></div>
                    <div className='flex md:hidden flex-col sm:flex-row gap-5 mt-5'>
                        {/* <Button
                            className='border w-fit text-base border-base hover:bg-base/20 py-[10px] px-[36px]'
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
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default AsideNav;
