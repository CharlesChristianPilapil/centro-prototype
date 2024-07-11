import { ReactNode } from 'react';

interface Props {
  count: string;
  children: ReactNode;
}

const DataTabs = ({ count, children }: Props) => {
  return (
    <span className='bg-darkblue text-white py-4 px-2 rounded-md'>
      <h1 className='text-2xl font-bold text-center'> {count} </h1>
      <p className='text-center'> {children} </p>
    </span>
  );
};

export default DataTabs;
