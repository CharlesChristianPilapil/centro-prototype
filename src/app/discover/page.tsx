import Filter from '../../components/discover/filter';
import Map from '../../components/discover/map';
import DataSection from '../../components/discover/data-section';
import Charts from '../../components/discover/Charts';
import { ProjectCard } from '../../components/discover/ProjectCard';
import { CardLayout } from '../../components/discover/CardLayout';
import Link from 'next/link';
import { projectData as data } from '@/mock-data/data';
import DiscoverAccordion from '@/components/page-discover/accordion';
import { articles } from '@/constants/discover';
import Image from 'next/image';

const Page = () => {
    return (
        <main className='container mt-[96px]'>
            <div className="mb-5 mt-10 flex flex-col gap-5 items-center justify-center">
                <h1 className="text-3xl text-center font-bold text-darkblue"> Frequently Asked Questions </h1>
                <div className="h-[1px] w-[100px] bg-gray/80" />
            </div>
            <DiscoverAccordion />
            <div className="mb-5 mt-10 flex flex-col gap-5 items-center justify-center">
                    <h1 className="text-3xl text-center font-bold text-darkblue"> {`Centro's Weekly Article`} </h1>
                    <div className="h-[1px] w-[100px] bg-gray/80" />
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 mb-24">
                {articles.map((e, index) => (
                    <li key={index} className="text-darkblue h-full group">
                        <Link href={`/discover/articles/article?title=${e.id}`}>
                            <article className="flex flex-col drop-shadow shadow-md duration-300 transition-all group-hover:bg-darkblue/5 group-hover:-translate-y-2 rounded h-full overflow-hidden">
                                <div>
                                    <Image 
                                        height={500}
                                        width={500}
                                        src={e.image}
                                        alt={e.title}
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex flex-col px-5 py-4 gap-4">
                                    <p className="text-[12px] text-lightblue"> {e.date} | {e.author} </p>
                                    <h1 className="font-bold"> {e.title} </h1>
                                    <p className="whitespace-pre-line text-lightblue"> 
                                        {e.article.length > 100 ? `${e.article.substring(0, 100)}...` : e.article} 
                                    </p>
                                </div>
                            </article>
                        </Link>    
                    </li>
                ))}
            </ul>
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
