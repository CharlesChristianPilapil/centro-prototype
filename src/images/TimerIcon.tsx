import { IIcon } from '@/util/interface';

const TimerIcon = ({ height = '20', width = '20' }: IIcon) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1.66797 18.333H10.8346C14.9768 18.333 18.3346 14.9752 18.3346 10.833C18.3346 6.69087 14.9768 3.33301 10.8346 3.33301C6.97418 3.33301 3.74917 6.24972 3.33464 9.99967'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <path
                d='M15.4154 4.58333L16.2487 3.75M4.58203 3.75L5.41536 4.58333'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13.7513 7.5L11.3019 9.94942M11.3019 9.94942C11.0756 9.72325 10.7631 9.58333 10.418 9.58333C9.72764 9.58333 9.16797 10.143 9.16797 10.8333C9.16797 11.5237 9.72764 12.0833 10.418 12.0833C11.1083 12.0833 11.668 11.5237 11.668 10.8333C11.668 10.4882 11.5281 10.1757 11.3019 9.94942Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <path
                d='M10.418 2.91699V1.66699'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8.75 1.66699H12.0833'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M1.66797 12.5H4.16797'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M1.66797 15.833H5.83464'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default TimerIcon;
