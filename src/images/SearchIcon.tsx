import { IIcon } from '@/util/interface';

const SearchIcon = ({
    height = '30',
    width = '30',
    fill = '#0c5acb',
}: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 30 30'
                fill={fill}
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <rect width='30' height='30' fill='url(#pattern0_409_15926)' />
                <defs>
                    <pattern
                        id='pattern0_409_15926'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_409_15926'
                            transform='scale(0.0111111)'
                        />
                    </pattern>
                    <image
                        id='image0_409_15926'
                        width='90'
                        height='90'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};

export default SearchIcon;
