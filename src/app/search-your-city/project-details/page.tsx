'use client';

import Button from '@/components/Button';
import SecondaryTable from '@/components/discover/SecondaryTable';
import Section from '@/components/page-home/section';
import { Panel, Tab } from '@/components/Tab';
import Map from '@/components/Map';
import StatusCard from '@/components/Card/StatusCard';
import RunningManIcon from '@/images/RunningManIcon';
import TimerIcon from '@/images/TimerIcon';
import { useRouter } from 'next/navigation';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import {
    buildingImages,
    doughNutDataActual,
    doughNutDataBilling,
    doughNutDataPlanned,
    doughNutDataSlippage,
    doughNutOptionsActual,
    doughNutOptionsBilling,
    doughNutOptionsPlanned,
    doughNutOptionsSlippage,
    projectDetail,
} from '@/constants/search-your-city';

const Page = () => {
    const router = useRouter();
    const url =
        process.env.NODE_ENV === 'development'
            ? process.env.NEXT_PUBLIC_URL_DEV
            : process.env.NODE_ENV === 'production'
            ? process.env.NEXT_PUBLIC_URL_PROD
            : '';
    return (
        <Section>
            <div className='flex justify-between my-[30px]'>
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-3xl'>Project name</p>
                    <p className='text-stone-500'>Project location</p>
                </div>
                <Button
                    className='font-medium border border-red-600 text-red-600 rounded-full w-[154px] h-[68px]'
                    label='Back'
                    variant='danger'
                    onClick={() => {
                        router.push(
                            `${url + '/search-your-city/project-list'}`
                        );
                    }}
                />
            </div>
            <div className='py-5 px-8 rounded-lg bg-white grid grid-cols-7'>
                <div className='col-span-5 space-y-5'>
                    <p className='font-bold text-xl'>Physical Accomplishment</p>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='h-[120px] flex space-x-3'>
                            <div>
                                <p className='text-blue-500 font-semibold'>
                                    Planned
                                </p>
                                <p className='text-blue-700 font-bold'>
                                    52.55%
                                </p>
                            </div>
                            <Doughnut
                                data={doughNutDataPlanned}
                                options={doughNutOptionsPlanned as any}
                            />
                        </div>
                        <div className='h-[120px] flex space-x-3 rounded-xl'>
                            <div>
                                <p className='text-green-600 font-semibold'>
                                    Actual
                                </p>
                                <p className='text-green-700 font-bold'>
                                    52.55%
                                </p>
                            </div>
                            <Doughnut
                                data={doughNutDataActual}
                                options={doughNutOptionsActual as any}
                            />
                        </div>
                        <div className='h-[120px] flex space-x-3'>
                            <div>
                                <p className='text-orange-300 font-semibold'>
                                    Slippage
                                </p>
                                <p className='text-orange-500 font-bold'>
                                    52.55%
                                </p>
                            </div>
                            <Doughnut
                                data={doughNutDataSlippage}
                                options={doughNutOptionsSlippage as any}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 h-[168px] flex space-x-3'>
                    <div>
                        <p className='text-indigo-500 font-semibold'>
                            Billing Accomplishment
                        </p>
                        <p className='text-indigo-700 font-bold'>52.55%</p>
                    </div>
                    <Doughnut
                        data={doughNutDataBilling}
                        options={doughNutOptionsBilling as any}
                    />
                </div>
            </div>
            <div>
                <Tab
                    tabs={['Project Information', 'Location']}
                    defaultTab='Project Information'
                >
                    <Panel tab='Project Information'>
                        <div className='space-y-5'>
                            <SecondaryTable
                                rows={1}
                                cols={2}
                                header={[
                                    'Approved Budget for the Contract (ABC)',
                                    'Date Started',
                                ]}
                                data={['₱ 1,000,000 .00', 'May 17, 2022']}
                            />
                            <SecondaryTable
                                rows={1}
                                cols={2}
                                header={[
                                    'Original Contract Cost',
                                    'Revised Contract Cost',
                                ]}
                                data={['₱ 1,000,000 .00', '₱ 1,000,000.00']}
                            />
                            <SecondaryTable
                                rows={1}
                                cols={2}
                                header={[
                                    'Original Duration',
                                    'Revised Duration',
                                ]}
                                data={['365 days', '365 days']}
                            />
                            <SecondaryTable
                                rows={1}
                                cols={2}
                                header={[
                                    'Original Completion Date',
                                    'Revised Completion Date',
                                ]}
                                data={['May 17, 2024', 'May 17, 2024']}
                            />
                            <SecondaryTable
                                rows={1}
                                cols={3}
                                header={[
                                    'Project Category',
                                    'Source of Fund',
                                    'Fiscal Year',
                                ]}
                                data={['TBA', 'TBA', '2024']}
                            />
                            <SecondaryTable
                                rows={1}
                                cols={1}
                                header={['Implementing Office']}
                                data={['TBA']}
                            />
                        </div>
                    </Panel>
                    <Panel tab='Location'>
                        <div className='grid grid-cols-4 gap-4 min-h-[617px]'>
                            <div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='col-span-1'>
                                        <StatusCard
                                            variant='success'
                                            label='On-Track'
                                            icon={<RunningManIcon />}
                                        />
                                    </div>
                                    <div className='col-span-1'>
                                        <StatusCard
                                            variant='warning'
                                            label='On-Going'
                                            icon={<TimerIcon />}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className='p-3 bg-blue-700/5 text-blue-700 text-[14px] leading-[21px] font-semibold'>
                                        {projectDetail.projectName}
                                    </p>
                                    <div className='p-2'>
                                        <p className='font-semibold leading-[21px] px-3'>
                                            Amount
                                        </p>
                                        <p className='leading-[21px] px-3 text-sm'>
                                            {projectDetail.amount}
                                        </p>
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-semibold leading-[21px] px-3'>
                                            Contractor
                                        </p>
                                        <p className='leading-[21px] px-3 text-sm'>
                                            {projectDetail.contractor}
                                        </p>
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-semibold leading-[21px] px-3'>
                                            Physical Accomplishment
                                        </p>
                                        <p className='leading-[21px] px-3 text-sm'>
                                            {
                                                projectDetail.physicalAccomplishment
                                            }
                                        </p>
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-semibold leading-[21px] px-3'>
                                            Financial Accomplishment
                                        </p>
                                        <p className='leading-[21px] px-3 text-sm'>
                                            {
                                                projectDetail.financialAccomplishment
                                            }
                                        </p>
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-semibold leading-[21px] px-3'>
                                            Slippage
                                        </p>
                                        <p className='leading-[21px] px-3 text-sm'>
                                            {projectDetail.slippage}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-3'>
                                {/*
                            @TODO
                            PLACE THE COORDINATES IN THE PROPS    
                            */}
                                <Map
                                    position={{
                                        lat: 14.599512,
                                        lng: 120.984222,
                                    }}
                                    center={{
                                        lat: 14.599512,
                                        lng: 120.984222,
                                    }}
                                />
                            </div>
                        </div>
                    </Panel>
                </Tab>
            </div>
            <Carousel title='Project Highlights' subscript='Project location'>
                {buildingImages.map((item) => (
                    <div
                        key={'index'}
                        className={`flex-none w-full h-full px-24 py-14 flex flex-col space-y-4 justify-between items-center min-h-[550px] bg-white`}
                    >
                        <div className='relative w-[80%] h-[500px]'>
                            <Image
                                src={item}
                                fill
                                className='object-cover'
                                alt={` icon`}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </Section>
    );
};

export default Page;
