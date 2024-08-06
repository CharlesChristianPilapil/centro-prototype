import { IIcon } from '@/util/interface';

const RightArrowIcon = ({
    height = '50',
    width = '50',
    fill = '#0c5acb',
}: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 36 37'
                fill={fill}
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <rect
                    width='36'
                    height='36'
                    transform='matrix(-1 0 0 1 36 0.5)'
                    fill='url(#pattern0_500_10702)'
                />
                <defs>
                    <pattern
                        id='pattern0_500_10702'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_500_10702'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_500_10702'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};

export default RightArrowIcon;
