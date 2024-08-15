'use client';

import clsx from 'clsx';
import Icon from '../Icon';
import Button from '../Button';
import { motion } from 'framer-motion';
import { singleElement, staggerItem } from '@/constants/motion';

interface TabItem {
    icon?: string;
    title?: string;
    description?: string;
    button?: boolean;
    className?: string;
    shade?: boolean;
    hover?: boolean;
}

const TabItem = ({
    icon,
    title,
    description,
    button,
    className,
    shade,
    hover,
}: TabItem) => {
    const wrapperStyle =
        'p-4 flex h-full flex-col gap-2 transition-all duration-300';

    const Content = () => {
        return (
            <>
                {icon && <Icon name={icon} />}
                <strong
                    className={clsx('text-lightblue', { 'text-3xl': !icon })}
                >
                    {' '}
                    {title}{' '}
                </strong>
                <p className='text-darkgray'> {description} </p>
                {button && (
                    <Button
                        className='flex items-center gap-2 border w-fit hover:bg-darkblue/10 border-darkblue px-3 py-2 text-darkblue'
                        variant='transparent'
                        onClick={() => console.log('lets talk clicked..')}
                    >
                        <p>Let&apos;s Talk</p>
                        <Icon name='arrow-right-blue' />
                    </Button>
                )}
            </>
        );
    };

    return (
        <>
            <motion.article
                className={`${className} hidden xl:block`}
                variants={staggerItem({ x: -100, y: 0 })}
            >
                <div
                    className={clsx(wrapperStyle, {
                        'bg-darkblue/5': shade,
                        'hover:bg-darkblue/15': hover,
                    })}
                >
                    <Content />
                </div>
            </motion.article>

            <motion.article
                className={`${className} h-full block xl:hidden`}
                variants={singleElement({
                    x: -100,
                    y: 0,
                    delay: 0.3,
                    duration: 0.3,
                })}
                initial='hidden'
                whileInView='visible'
            >
                <div
                    className={clsx(wrapperStyle, {
                        'bg-darkblue/5': shade,
                        'hover:bg-darkblue/15': hover,
                    })}
                >
                    <Content />
                </div>
            </motion.article>
        </>
    );
};

export default TabItem;
