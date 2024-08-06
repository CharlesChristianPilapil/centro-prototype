import { IIcon } from '@/util/interface';

export const RealTimeIcon = ({ height = '192', width = '192' }: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 150 151'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <rect
                    y='0.417969'
                    width='150'
                    height='150'
                    fill='url(#pattern0_529_471)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_471'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_471'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_471'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
