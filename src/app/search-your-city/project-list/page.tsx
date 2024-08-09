'use client';

import Button from '@/components/Button';
import DropDown from '@/components/Button/DropDown';
import { CardLayout } from '@/components/discover/CardLayout';
import SecondaryTable from '@/components/discover/SecondaryTable';
import Section from '@/components/home/section';
import CancelIcon from '@/images/CancelIcon';
import SearchIconWhite from '@/images/SearchIconWhite';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <Section>
            <div className='relative space-y-14 pt-14'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-3xl'>
                        Region, Municipality, Barangay (Year)
                    </p>
                    <Button
                        className='font-medium border border-red-600 text-red-600 rounded-full w-[154px] h-[68px]'
                        label='Back'
                        variant='danger'
                        onClick={() => {
                            router.push(
                                `${
                                    process.env.NEXT_PUBLIC_URL +
                                    '/search-your-city'
                                }`
                            );
                        }}
                    />
                </div>
                <CardLayout className='p-[24px] rounded-lg bg-white mb-6 space-y-5 border-none'>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-xl'>Project Title</p>
                        <Button
                            className='font-medium border border-blue-700 text-blue-700 rounded-full w-[172px] h-[68px]'
                            label='View Details'
                            variant='default'
                            onClick={() => {
                                router.push(
                                    `${
                                        process.env.NEXT_PUBLIC_URL +
                                        '/search-your-city/project-details'
                                    }`
                                );
                            }}
                        />
                    </div>
                    <SecondaryTable
                        rows={1}
                        cols={4}
                        header={[
                            'Date of Award',
                            'Date Started',
                            'Date of Completion',
                            'Date of Acceptance',
                        ]}
                        data={[
                            'April 24, 2024',
                            'April 24, 2024',
                            'April 24, 2024',
                            'April 24, 2024',
                        ]}
                    />

                    <SecondaryTable
                        rows={1}
                        cols={3}
                        header={[
                            'Suspension Order No.',
                            'Date of Suspension From',
                            'Date of Suspension To',
                        ]}
                        data={['KLS45213', 'April 2, 2024', 'May 27, 2024']}
                        dateRangeFormat
                    />
                </CardLayout>
                {/* 
                <CardLayout className='p-[24px] rounded-lg bg-white mb-6 space-y-5 border-none'>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-xl'>Project Title</p>
                        <Button
                            className='w-[172px] font-medium'
                            label='View Details'
                            variant='default'
                            onClick={() => {}}
                        />
                    </div>
                    <SecondaryTable
                        rows={1}
                        cols={4}
                        header={[
                            'Date of Award',
                            'Date Started',
                            'Date of Completion',
                            'Date of Acceptance',
                        ]}
                        data={[
                            'April 24, 2024',
                            'April 24, 2024',
                            'April 24, 2024',
                            'April 24, 2024',
                        ]}
                    />

                    <SecondaryTable
                        rows={1}
                        cols={3}
                        header={[
                            'Suspension Order No.',
                            'Date of Suspension From',
                            'Date of Suspension To',
                        ]}
                        data={['KLS45213', 'April 2, 2024', 'May 27, 2024']}
                    />
                </CardLayout> */}
            </div>
            <div
                className='fixed top-[12%] left-0 z-50'
                style={{ left: isOpen ? 30 : 0 }}
            >
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className='p-3 text-gray-400 bg-blue-700 border-2 border-solid border-blue-500focus:outline-none rounded-r-2xl'
                    >
                        <SearchIconWhite />
                    </button>
                )}

                {isOpen && (
                    <div className='min-w-[360px] max-h-[80vh] p-[30px] bg-blue-700 text-white rounded-lg overflow-auto'>
                        <div className='flex justify-between mb-[18px]'>
                            <p className='text-2xl'>Filter</p>
                            <Button onClick={() => setIsOpen(false)}>
                                <CancelIcon />
                            </Button>
                        </div>
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='Program'
                            error=''
                            name='program'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='Region'
                            error=''
                            name='region'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='Province'
                            error=''
                            name='province'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='City/Municipality'
                            error=''
                            name='city-or-municipality'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='Barangay'
                            error=''
                            name='barangay'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='Year'
                            error=''
                            name='year'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <div className='flex justify-between mt-[18px]'>
                            <Button
                                label='Reset'
                                className='border border-[#ECEDF2] !text-stone-500 bg-[#ECEDF2] rounded-xl !w-[116px] !h-[50px]'
                            />
                            <Button
                                label='Apply'
                                className='border border-white text-blue-700 bg-white rounded-xl !w-[116px] !h-[50px]'
                            />
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Page;
