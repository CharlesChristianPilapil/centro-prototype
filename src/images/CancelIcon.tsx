import { IIcon } from '@/util/interface';

const CancelIcon = ({ height = '30', width = '30' }: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.00016 6.8417L12.0084 2.8335L13.1668 3.992L9.15863 8.00016L13.1668 12.0084L12.0084 13.1668L8.00016 9.15863L3.992 13.1668L2.8335 12.0084L6.8417 8.00016L2.8335 3.992L3.992 2.8335L8.00016 6.8417Z'
                    fill='currentColor'
                />
            </svg>
        </>
    );
};

export default CancelIcon;
