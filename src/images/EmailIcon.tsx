import { IIcon } from '@/util/interface';

const EmailIcon = ({ height = '25', width = '25', className }: IIcon) => {
    return (
        <svg
            version='1.1'
            id='Icons'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 32 32'
            xmlSpace='preserve'
            width={height}
            height={width}
            className={className}
        >
            <path
                d='M25,27H7c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4v14C29,25.2,27.2,27,25,27z'
                fill='none'
                stroke='#000000'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <polyline
                points='3,10 16,18 29,10'
                fill='none'
                stroke='#000000'
                strokeWidth='1'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default EmailIcon;
