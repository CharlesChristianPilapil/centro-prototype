import { IIcon } from '@/util/interface';

const PlusIcon = ({ height = '15', width = '15', isOpen = false }: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={`transform transition-transform duration-400 ease-in-out shrink-0 ${
                    isOpen ? 'rotate-90' : 'rotate-0'
                }`}
            >
                <path
                    d='M7.72656 1.43274V13.3246'
                    stroke='#0C5ACB'
                    strokeWidth='1.69884'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M1.78125 7.37891H13.6732'
                    stroke='#0C5ACB'
                    strokeWidth='1.69884'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={`transform transition-opacity duration-400 ease-in-out ${
                        isOpen ? 'opacity-0' : 'opacity-1'
                    }`}
                />
            </svg>
        </>
    );
};

export default PlusIcon;
