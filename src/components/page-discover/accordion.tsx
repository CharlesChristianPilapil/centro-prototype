'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/constants/discover';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { singleElement } from '@/constants/motion';

const DiscoverAccordion = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const handleToggle = (id: string) => {
        setOpenItems((prevState) =>
            prevState.includes(id)
                ? prevState.filter((item) => item !== id)
                : [...prevState, id]
        );
    };

    return (
        <>
            <Accordion
                type='multiple'
                className='w-full pt-1 mb-24 xl:grid xl:grid-cols-2 gap-x-5 overflow-x-hidden px-1 overflow-y-hidden'
            >
                <div>
                    {faqs.slice(0, 8).map((e, index) => (
                        <motion.div
                            variants={singleElement({
                                y: 20,
                                duration: 0.3,
                                delay: 0.2,
                            })}
                            initial='hidden'
                            whileInView='visible'
                            key={e.question}
                        >
                            <AccordionItem value={e.question}>
                                <AccordionTrigger
                                    isOpen={openItems.includes(e.id)}
                                    onClick={() => handleToggle(e.id)}
                                    className='text-lightblue hover:text-lightblue/70 px-2 text-start gap-[5px] rounded'
                                >
                                    {index + 1}. {e.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-darkgray pt-2 px-2'>
                                    {e.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </div>
                <div>
                    {faqs.slice(8).map((e, index) => (
                        <motion.div
                            variants={singleElement({
                                y: 20,
                                duration: 0.3,
                                delay: 0.2,
                            })}
                            initial='hidden'
                            whileInView='visible'
                            key={e.question}
                        >
                            <AccordionItem value={e.question}>
                                <AccordionTrigger
                                    isOpen={openItems.includes(e.id)}
                                    onClick={() => handleToggle(e.id)}
                                    className='text-lightblue hover:text-lightblue/70 px-2 text-start gap-[5px] rounded'
                                >
                                    {index + 9}. {e.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-darkgray pt-2 px-2'>
                                    {e.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </div>
            </Accordion>
        </>
    );
};

export default DiscoverAccordion;
