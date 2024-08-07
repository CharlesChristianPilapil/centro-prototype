import { ReactNode } from 'react';

interface ReactNodeProps {
    children: ReactNode;
}

const Section = ({ children }: ReactNodeProps) => {
    return (
        <section
            className='mb-20 container'
            style={{ minHeight: 'calc(100vh - 100px)' }}
        >
            {children}
        </section>
    );
};

export default Section;
