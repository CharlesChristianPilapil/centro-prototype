'use client';

import { singleElement, staggerItem } from "@/constants/motion";
import { dynamicStringObjectInterface } from "@/util/interface";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Overlay from "../Overlay";

const ArticleTab = ({e}: dynamicStringObjectInterface) => {

    const Content = ({e}: dynamicStringObjectInterface) => {
        return (
            <>
                <Link href={`/discover/articles/article?title=${e.id}`}>
                    <article 
                        className="flex flex-col drop-shadow shadow-md rounded h-full
                        group-hover:bg-lightblue/10 lg:group-hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="relative">
                            <Image 
                                height={500}
                                width={500}
                                src={e.image}
                                alt={e.title}
                                className="w-full"
                            />
                            <Overlay className="bg-darkblue/50 group-hover:opacity-0 group-hover:invisible transition-all duration-300" />
                        </div>
                        <div className="flex flex-col px-5 py-4 gap-4">
                            <p className="text-[12px] text-lightblue"> {e.date} | {e.author} </p>
                            <h1 className="font-bold text-darkgray"> {e.title} </h1>
                            <p className="whitespace-pre-line text-darkgray/80"> 
                                {e.article.length > 100 ? `${e.article.substring(0, 100)}...` : e.article} 
                            </p>
                        </div>
                    </article>
                </Link>    
            </>
        )
    }


    return (
        <>            
            <motion.li 
                className="text-darkblue h-full group hidden lg:block"
                variants={staggerItem({x: 100, type: 'tween'})}
            >
                <Content e={e} />
            </motion.li>

            <motion.li 
                className="text-darkblue h-full group lg:hidden"
                variants={singleElement({x: 100, type: 'tween', duration:.3, delay: .2})}
                initial='hidden'
                whileInView='visible'
                viewport={{once: false}}
            >
                <Content e={e} />
            </motion.li>
        </>
    )
}
export default ArticleTab