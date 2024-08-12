'use client';

import Section from '@/components/page-home/section';
import Map from '../../components/discover/map';
import Button from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { frequentlyAskedQuestions } from '@/constants/lets-conntect';
import { useState } from 'react';
import PhoneIcon from '@/images/PhoneIcon';
import EmailIcon from '@/images/EmailIcon';
import FacebookIcon from '@/images/FacebookIcon';
import Link from 'next/link';

const Page = () => {
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
            <div style={{ minHeight: 'calc(100vh - 82px)' }}>
                <Section>
                    <div className='grid grid-cols-2 gap-x-14 mb-[147px] mt-[90px]'>
                        <div>
                            <div className='max-w-[475px] mb-10'>
                                <p className='font-bold text-5xl mb-3'>
                                    Get in{' '}
                                    <span className='text-blue-700'>Touch</span>
                                </p>
                                <p className='text-neutral-400'>
                                    Your inquiries are important to us—reach out
                                    and we’ll respond promptly.
                                </p>
                            </div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                className='space-y-6'
                            >
                                <Input
                                    placeholder='Full name'
                                    className='h-14 rounded-xl'
                                />
                                <Input
                                    placeholder='Email address'
                                    className='h-14 rounded-xl'
                                />
                                <Input
                                    placeholder='Phone number'
                                    className='h-14 rounded-xl'
                                />
                                <Textarea
                                    placeholder='Message'
                                    className='resize-none h-[141px]'
                                />
                                <Button
                                    className='font-medium border border-blue-600 text-blue-600 bg-white rounded-full w-[160px] h-[60px]'
                                    label='Send'
                                    variant='default'
                                />
                            </form>
                        </div>
                        <Map className='h-full rounded-lg' />
                    </div>
                </Section>

                <div className='min-h-[130px] w-full bg-[#f1f8fe] flex items-center mb-20'>
                    <div className='grid grid-cols-3 gap-y-3 container'>
                        <div className='flex items-center'>
                            <div className='flex items-center gap-3'>
                                <PhoneIcon />
                                <p>+63 (02) 8282 9891</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <Link
                                href={
                                    'https://mail.google.com/mail/u/0/?to=Connect@Philcentro.ph&fs=1&tf=cm'
                                }
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-3 text-blue-500 font-bold hover:text-blue-700'
                            >
                                <EmailIcon className='shrink-0' />
                                <p>Connect@Philcentro.ph</p>
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center gap-3'>
                                <FacebookIcon className='shrink-0' />
                                <p>
                                    1932 A. Mabini cor San Andres Street,Brgy.
                                    701, Malate, Manila, Metro Manila 1004 PH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Section>
                    <div className='bg-white rounded-xl p-20'>
                        <p className='text-4xl text-center mb-[65px]'>
                            Frequently Asked
                            <br />
                            Questions
                        </p>
                        <Accordion type='multiple'>
                            <div className='grid grid-cols-2 gap-x-12'>
                                {frequentlyAskedQuestions.map((item) => (
                                    <AccordionItem
                                        value={item.id}
                                        key={item.id}
                                    >
                                        <AccordionTrigger
                                            isOpen={openItems.includes(item.id)}
                                            onClick={() =>
                                                handleToggle(item.id)
                                            }
                                        >
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </div>
                        </Accordion>
                        <p className='text-center text-neutral-400 mt-16'>
                            Can&apos;t find what you need? Email us at{' '}
                            <Link
                                href={
                                    'https://mail.google.com/mail/u/0/?to=Connect@Philcentro.ph&fs=1&tf=cm'
                                }
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-500 font-bold hover:text-blue-700'
                            >
                                Connect@PhilCentro.ph
                            </Link>
                        </p>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Page;
