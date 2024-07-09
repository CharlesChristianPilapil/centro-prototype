'use client';

import Image from 'next/image';

interface Props {
  image: string;
  title: string;
  description: string;
  index: number;
}

const FeaturesTab = ({ image, title, description, index }: Props) => {
  return (
    <div className={'grid lg:grid-cols-2'}>
      <div>
        <Image
          src={image}
          height={0}
          width={0}
          alt={title}
          className='w-full h-auto'
        />
      </div>
      <article className='px-4 py-8'>
        <div className='grid gap-8'>
          <h1> {title} </h1>
          <p> {description} </p>
        </div>
      </article>
    </div>
  );
};

export default FeaturesTab;
