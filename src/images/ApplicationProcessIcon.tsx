import { IIcon } from '@/util/interface';

export const ApplicationProcessIcon = ({
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
                    fill='url(#pattern0_529_670)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_670'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_670'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_670'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
