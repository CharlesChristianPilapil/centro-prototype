import Filter from '../../components/discover/filter';
import Map from '../../components/discover/map';
import DataSection from '../../components/discover/data-section';
import Charts from '../../components/discover/Charts';
import { ProjectCard } from '../../components/discover/ProjectCard';
import { CardLayout } from '../../components/discover/CardLayout';
import Link from 'next/link';
import { projectData as data } from '@/mock-data/data';

const Page = () => {
  return (
    <main className='container mt-[96px]'>
      <Filter />
      <DataSection />
      <Map />
      <Charts />
      <CardLayout
        title={'Project List'}
        style='mb-[16px]'
        headerColor='#0E4370'
      >
        <div className='border border-[#ccc] rounded-b-[8px] px-6'>
          <div className='flex justify-between'>
            <p className='px-4 py-2 border-b border-gray-400 font-bold'>2024</p>
            <p className='px-4 py-2 border-b border-gray-400 font-bold'>
              Region I / Metro Manila / Makati
            </p>
          </div>
          <div className='p-6 max-h-[500px] overflow-y-auto'>
            {data.map((data: any) => {
              return (
                <Link
                  href={`/discover/${data.contractId}`}
                  key={data.dateStarted+data.contractId}
                >
                  <ProjectCard
                    dateStarted={data.dateStarted}
                    dateCompletion={data.dateCompletion}
                    contractor={data.contractor}
                    accomplishmentRate={data.accomplishmentRate}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </CardLayout>
    </main>
  );
};

export default Page;
