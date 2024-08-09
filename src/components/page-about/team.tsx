'use client';

import { TeamMembers } from "@/constants/about";
import MemberTab from "../MemberTab";
import { motion } from "framer-motion";
import { staggerChild } from "@/constants/motion";

const MeetOurTeam = () => {
    return (
        <section className="mb-24">
            <h1 className="container text-4xl font-bold text-darkblue text-center mb-5"> Meet Our Team </h1>
            <motion.div 
                className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
                variants={staggerChild({ staggerChildren: 0.2, delayChildren: 0.5 })}
                initial='hidden'
                whileInView='visible'
            >
                {TeamMembers.map((e, index) => (
                    <MemberTab 
                        key={index}
                        name={e.name}
                        image={e.image}
                        position={e.position}
                        quote={e.quote}
                        links={e.link}
                    />
                ))}
            </motion.div>
        </section>
    )
}

export default MeetOurTeam;