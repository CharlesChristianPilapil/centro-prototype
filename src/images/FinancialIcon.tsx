import { IIcon } from '@/util/interface';

export const FinancialIcon = ({ height = '192', width = '192' }: IIcon) => {
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
                    fill='url(#pattern0_529_652)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_652'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_652'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_652'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
