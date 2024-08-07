import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Wrapper = ({ title, children }: Props) => {
  return (
    <div className='bg-white border-[1px] rounded-t-md rounded-b overflow-hidden border-darkgray pb-4 mb-4 h-full'>
      <h1 className='w-full bg-darkblue text-base p-2 mb-4'> {title} </h1>
      {children}
    </div>
  );
};

export default Wrapper;
