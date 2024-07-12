import Filter from '../ui/discover/filter';
import Map from '../ui/discover/map';
import DataSection from '../ui/discover/data-section';
import Charts from '../ui/discover/Charts';
import { ProjectCard } from '../ui/discover/ProjectCard';
import { CardLayout } from '../ui/discover/CardLayout';
import Link from 'next/link';
import { data } from '@/mock-data/data';

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
            {data.map((data) => {
              return (
                <Link
                  href={`/discover/${data.contractId}`}
                  key={data.dateStarted}
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
