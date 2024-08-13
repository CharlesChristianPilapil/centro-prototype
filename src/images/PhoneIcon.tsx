import { IIcon } from '@/util/interface';

const PhoneIcon = ({ height = '25', width = '25', className }: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={className}
            >
                <path
                    d='M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z'
                    stroke='#000000'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </>
    );
};

export default PhoneIcon;
{
    /* <svg
                width={width}
                height={height}
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <rect width='25' height='25' fill='url(#pattern0_545_9820)' />
                <defs>
                    <pattern
                        id='pattern0_545_9820'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_545_9820'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_545_9820'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg> */
}
