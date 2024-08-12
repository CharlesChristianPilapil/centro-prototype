import { IIcon } from '@/util/interface';

const FacebookIcon = ({ height = '25', width = '25', className }: IIcon) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            className={className}
        >
            <rect width='25' height='25' fill='url(#pattern0_545_9822)' />
            <defs>
                <pattern
                    id='pattern0_545_9822'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use xlinkHref='#image0_545_9822' transform='scale(0.01)' />
                </pattern>
                <image
                    id='image0_545_9822'
                    width='100'
                    height='100'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </svg>
    );
};

export default FacebookIcon;
