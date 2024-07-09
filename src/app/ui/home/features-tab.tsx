'use client';

import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  image: string;
  title: string;
  description: string;
  index: number;
}

const FeaturesTab = ({ image, title, description, index }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={clsx(
        'grid lg:grid-cols-2 xl:grid-cols-8 2xl:grid-cols-12 xl:h-[500px] border-pink-500',
        {
          'bg-transparent': !isEven,
          'bg-darkblue': isEven,
        }
      )}
    >
      <div
        className={clsx(
          'sm:h-[300px] lg:h-full xl:col-span-4 2xl:col-span-7 overflow-y-hidden bg-black',
          {
            'lg:order-2': !isEven,
          }
        )}
      >
        <Image
          src={image}
          height={0}
          width={0}
          alt={title}
          className='w-full lg:h-full object-cover bg-pink-50'
        />
      </div>
      <article className='px-4 py-8 grid place-items-center xl:col-span-4 2xl:col-span-5'>
        <div className='grid gap-8'>
          <h1
            className={clsx(
              'text-[1.5rem] leading-[2.25rem] text-base font-semibold',
              {
                'text-darkblue': !isEven,
              }
            )}
          >
            {title}
          </h1>
          <p
            className={clsx('text-base', {
              'text-lightblue': !isEven,
            })}
          >
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default FeaturesTab;
