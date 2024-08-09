'use client';

import clsx from "clsx";
import Image from "next/image";
import { isValidElement, ReactNode } from "react";
import { motion } from "framer-motion";
import { singleElement } from "@/constants/motion";

interface ImageToTextInterface {
    title: string | ReactNode;
    description: string;
    src: string;
    alt: string;
    variant?: 'default' | 'dark-mode',
    reverse?: boolean;
    reverseInitial?: boolean;
}

const ImageToText = ({
    title,
    description,
    src,
    alt,
    variant = 'default',
    reverse,
    reverseInitial
}: ImageToTextInterface) => {
    return (
        <>
            <div className="container overflow-hidden grid md:grid-cols-2 py-5 gap-5">
                <motion.div 
                    variants={singleElement({ x: 0, y: 0, delay: 0.3, type: 'tween', duration: .8 })}
                    initial='hidden'
                    whileInView='visible'
                    className={clsx('grid place-items-center', {
                        'order-2': reverseInitial,
                        'md:order-2': reverse
                })}>
                    <Image 
                        src={src} 
                        alt={alt} 
                        width={200} 
                        height={200} 
                        className="w-full"
                    />
                </motion.div>
                <div className="overflow-hidden grid place-items-center">
                    <motion.div
                        variants={singleElement({ x: 0, y: 100, delay: 0.5, type: 'tween', duration: .5 })}
                        initial='hidden'
                        whileInView='visible'
                        className="flex flex-col gap-5 justify-center"
                    >
                        {typeof title === 'string' && (
                            <h1 className={clsx("font-semibold text-2xl", {
                                'text-darkblue': variant === 'default',
                            })}>
                                {title}
                            </h1>
                        )}
                        {isValidElement(title) && title}
                        <p className={clsx("", {
                            'text-lightblue': variant === 'default',
                        })}> {description} </p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ImageToText;