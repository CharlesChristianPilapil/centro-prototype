'use client';

import { navlink } from "@/constants/home";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "@/components/NavLink";
import Button from "../Button";
import useWindowWidth from "@/hooks/WindowWidth";

interface AsideInterface {
    show?: boolean;
}

const AsideNav = ({show}: AsideInterface) => {

    const windowWidth = useWindowWidth();

    return (
        <AnimatePresence>
            {show && (
                <motion.aside 
                    className="xl:hidden fixed left-0 w-[300px] h-full md:h-fit md:w-full bg-darkblue z-40 drop-shadow-2xl"
                    initial={{ 
                        x: windowWidth >= 768 ? '0' : '-100%', 
                        y: windowWidth >= 768 ? '-100%' : '0' 
                    }}
                    animate={{ x: '0', y: '0' }}
                    exit={{ 
                        x: windowWidth >= 768 ? '0' : '-100%', 
                        y: windowWidth >= 768 ? '-100%' : '0' 
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="mt-10 md:mb-10 ml-5 flex flex-col md:flex-row md:justify-center gap-5"> 
                        {navlink.filter(e => e.name !== 'HOME').map((e, index) => (
                            <li key={index}>
                                <NavLink label={e.name} href={e.href} />
                            </li>
                        ))}
                    </ul>
                    <div className="flex md:hidden flex-col gap-5 mt-5">
                        <Button 
                            label="Login" 
                            className="text-white ml-5 py-1 px-4 border w-fit border-red-300
                            hover:bg-red-300 hover:text-darkblue"
                        />
                        <Button 
                            label="Join Now" 
                            className="text-white ml-5 py-2 px-4 border w-fit border-yellow-400 
                            hover:bg-yellow-300 hover:text-darkblue"
                        />
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    )
}

export default AsideNav