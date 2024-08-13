// import Filter from '../../components/discover/filter';
// import Map from '../../components/discover/map';
// import DataSection from '../../components/discover/data-section';
// import Charts from '../../components/discover/Charts';
// import { ProjectCard } from '../../components/discover/ProjectCard';
// import { CardLayout } from '../../components/discover/CardLayout';
// import Link from 'next/link';
// import { projectData as data } from '@/mock-data/data';
// import { articles } from '@/constants/discover';
// import Image from 'next/image';
import DiscoverAccordion from '@/components/page-discover/accordion';
import ArticlesList from '@/components/page-discover/articlesList';

const Page = () => {
    return (
        <main className='container mt-[96px]'>
        <title> Centro | Discover </title>
            <div className="mb-5 mt-10 flex flex-col gap-5 items-center justify-center">
                <h1 className="text-3xl text-center font-bold text-darkgray"> {`Centro's Weekly Article`} </h1>
                <div className="h-[1px] w-[100px] bg-gray/80" />
            </div>
            <ArticlesList />
            <div className="mb-5 mt-10 flex flex-col gap-5 items-center justify-center">
                <h1 className="text-3xl text-center font-bold text-darkgray"> Frequently Asked Questions </h1>
                <div className="h-[1px] w-[100px] bg-gray/80" />
            </div>
            <DiscoverAccordion />
            {/* <title> Centro | Discover </title>
            <Filter />
            <DataSection />
            <Map />
            <Charts />
            <CardLayout title={'Project List'} className='mb-[16px]'>
                <div className='border border-[#ccc] rounded-b-[8px] px-6'>
                    <div className='flex justify-between'>
                        <p className='px-4 py-2 border-b border-gray-400 font-bold'>
                            2024
                        </p>
                        <p className='px-4 py-2 border-b border-gray-400 font-bold'>
                            Region I / Metro Manila / Makati
                        </p>
                    </div>
                    <div className='p-6 max-h-[500px] overflow-y-auto'>
                        {data.map((data: any) => {
                            return (
                                <Link
                                    href={`/discover/project-details?id=${data.contractId}`}
                                    key={data.dateStarted}
                                >
                                    <ProjectCard
                                        dateStarted={data.dateStarted}
                                        dateCompletion={data.dateCompletion}
                                        contractor={data.contractor}
                                        accomplishmentRate={
                                            data.accomplishmentRate
                                        }
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </CardLayout> */}
        </main>
    );
};

export default Page;
