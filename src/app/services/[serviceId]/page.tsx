'use client';

import { CardFlip } from '@/app/ui/services/CardFlip';
import { Header } from '@/app/ui/services/Header';
import { usePathname } from 'next/navigation';
import { data } from '../page';

const Page = () => {
  const pathname = usePathname();
  const serviceId = pathname.split('/services/')[1];
  const featureData = data.filter((data) => serviceId === data.id)[0];

  return (
    <>
      <Header title={featureData.title} />
      <div className='flex flex-col items-center'>
        <p className='my-[50px] font-bold text-3xl'>Introduction</p>
        <p className='max-w-[700px] mb-10 text-center'>
          {featureData.decsription}
        </p>
        <div className='grid grid-cols-2 gap-10 mb-[50px]'>
          {featureData.features.map((data) => (
            <CardFlip
              key={data.id}
              id={data.id}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
