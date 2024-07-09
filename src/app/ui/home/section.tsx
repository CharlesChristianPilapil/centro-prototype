import { ReactNode } from 'react';

interface ReactNodeProps {
  children: ReactNode;
}

const Section = ({ children }: ReactNodeProps) => {
  return <section className='mb-20 container'> {children} </section>;
};

export default Section;
