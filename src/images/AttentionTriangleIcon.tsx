import { IIcon } from '@/util/interface';

export const AttentionTriangleIcon = ({
    height = '192',
    width = '192',
}: IIcon) => {
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
                    fill='url(#pattern0_529_1062)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_1062'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_1062'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_1062'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
