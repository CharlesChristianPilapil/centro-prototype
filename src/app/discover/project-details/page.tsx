'use client';

import { CardLayout } from '@/components/discover/CardLayout';
import { ProjectDetailCard } from '@/components/discover/ProjectDetailCard';
import { PieChartDonutComponent } from '@/components/charts/pie-chart-donut';
import Link from 'next/link';
import { projectData as data } from '@/mock-data/data';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const Page = () => {
    const contractId = useSearchParams().get('id');
    const projectDetails = data.filter(
        (data) => contractId === data.contractId
    )[0];

    return (
        <div className='flex justify-center p-14'>
            <div className='w-[60%]'>
                <Link href={'/discover'}>
                    <p className='text-blue-500 mb-6'>&lt; Project List</p>
                </Link>
                <div className='flex justify-between mb-[24px]'>
                    <div>
                        <p className='inline-block font-bold bg-[#0E4370] px-[10px] py-[5px] rounded-sm text-white tracking-widest mb-6'>
                            ProjectID
                        </p>
                        <div className='flex items-center mb-4'>
                            <p className='font-bold'>Date Started : </p>
                            <p className='px-[10px] py-[5px] ml-[10px] text-white text-xs bg-[#00e272] rounded-lg'>
                                {projectDetails.dateStarted}
                            </p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <p className='font-bold'>Date of Completion : </p>
                            <p className='px-[10px] py-[5px] ml-[10px] text-white text-xs bg-[#E84A5A] rounded-lg'>
                                {projectDetails.dateCompletion}
                            </p>
                        </div>
                    </div>
                    <div className='w-[55%] h-[55%]'>
                        <PieChartDonutComponent />
                    </div>
                </div>
                <CardLayout title={'Project Details'} className='p-[24px] mb-6'>
                    {projectDetails?.details?.map((item) => (
                        <ProjectDetailCard
                            key={item[0].name}
                            leftData={item[0]}
                            rightData={item[1]}
                        />
                    ))}
                </CardLayout>
                <CardLayout title={'Project Team Members'} className='p-[24px]'>
                    <div className='grid grid-cols-2 mb-4 border-2 rounded-b-lg border-gray-500'>
                        <div>
                            <p
                                className={`h-[30px] w-[100%] bg-[#0c5acb] rounded-tl-[8px] px-[10px] flex items-center text-white`}
                            >
                                {'Name of Member'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'John De Leon'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Jane Dela Cruz'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Charles Santos'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Emily Carranza'}
                            </p>
                        </div>
                        <div>
                            <p
                                className={`h-[30px] w-[100%] bg-[#0c5acb] rounded-tr-[8px] px-[10px] flex items-center text-white`}
                            >
                                {'Role'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Project Engineer'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Materials Engineer'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Site Engineer'}
                            </p>
                            <p className='px-[10px] py-[5px]'>
                                {'Project Coordinator'}
                            </p>
                        </div>
                    </div>
                </CardLayout>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
