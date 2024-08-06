import { IIcon } from '@/util/interface';

export const ChatIcon = ({ height = '192', width = '192' }: IIcon) => {
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
                    fill='url(#pattern0_529_628)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_628'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_628'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_628'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
