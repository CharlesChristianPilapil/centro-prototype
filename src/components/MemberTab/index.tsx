'use client';

import Image from "next/image";
import Icon from "../Icon";
import { MemberTabIcons } from "@/constants/about";
import { motion } from "framer-motion";
import { singleElement, staggerItem } from "@/constants/motion";

interface MemberTabInterface {
    name: string;
    image: string;
    position: string;
    quote?: string
    links?: string[];
}

const MemberTab = ({
    name,
    image,
    position,
    quote,
    links
}: MemberTabInterface) => {

    const Content = () => {
        return (
            <>
                <div className="relative overflow-hidden">
                    <Image 
                        src={image} 
                        alt={`Image of ${name}`} 
                        height={500} 
                        width={500} 
                        className="w-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute flex flex-col gap-2 justify-center top-0 left-0 h-full w-fit px-2 transition-all duration-300 backdrop-blur-sm 
                    bg-darkblue/50 translate-x-[-100%] group-hover:translate-x-0">
                        {MemberTabIcons.map((e, index) => (
                            <a key={index} href={links && links[index]} target="_blank">
                                <div className="bg-white p-1 rounded hover:bg-white/80">
                                        <Icon name={e.name} className="sm:hidden" />
                                        <Icon name={`${e.name}-32`} className="hidden sm:block" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden flex-1 py-2">
                    <strong className="text-darkblue"> {name} </strong>
                    <p className="text-lightblue text-sm"> {position} </p>
                    <div className="absolute invisible opacity-0 group-hover:opacity-100 group-hover:visible left-0 top-0 w-full h-full transition-all duration-300 
                    bg-darkblue/50 backdrop-blur-sm flex items-center justify-center px-1 text-base">
                        <p className="text-center text-sm md:text-md"> {quote || '"Death is like a wind, always by my side"'} </p>
                    </div>
                </div>            
            </>
        )
    }


    return (
        <>
            <motion.article 
                variants={singleElement({ x: -100, y: 0, delay: 0.3, type: 'tween', duration: 0.5, })}
                initial='hidden'
                whileInView='visible'     
                className="relative flex flex-col lg:hidden group"
            >
                <Content />
            </motion.article>

            <motion.article 
                variants={staggerItem({ x: -100, y: 0, type: 'tween' })}
                className="relative hidden lg:flex flex-col group"
            >
                <Content />
            </motion.article>
        </>
    )
}

export default MemberTab;