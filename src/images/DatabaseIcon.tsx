import { IIcon } from '@/util/interface';

export const DatabaseIcon = ({ height = '192', width = '192' }: IIcon) => {
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
                    fill='url(#pattern0_525_668)'
                />
                <defs>
                    <pattern
                        id='pattern0_525_668'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_525_668'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_525_668'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
