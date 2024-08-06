import { IIcon } from '@/util/interface';

export const GroupPeopleIcon = ({ height = '192', width = '192' }: IIcon) => {
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
                    fill='url(#pattern0_529_136)'
                />
                <defs>
                    <pattern
                        id='pattern0_529_136'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_529_136'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_529_136'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};
