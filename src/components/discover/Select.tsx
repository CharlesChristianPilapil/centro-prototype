import { ReactNode } from 'react';

interface Select {
  id: string;
  children: ReactNode;
}

const Select = ({ id, children }: Select) => {
  return (
    <div className='grid space-y-2'>
      <label htmlFor={id} className='font-semibold'>
        {id}
      </label>
      <select
        className='rounded py-2 px-1 border-[1px] border-darkgray'
        id={id}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
