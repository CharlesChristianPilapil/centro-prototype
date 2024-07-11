import { ReactNode } from 'react';

interface Option {
  value: string | number;
  children: ReactNode;
}

const Option = ({ value, children }: Option) => {
  return <option value={value}> {children} </option>;
};

export default Option;
