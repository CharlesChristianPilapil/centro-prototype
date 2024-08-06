import { IIcon } from '@/util/interface';

export const CloudComputingIcon = ({
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
                    fill='url(#pattern0_529_1646)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_1646'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_1646'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_1646'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
