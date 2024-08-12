import { IIcon } from '@/util/interface';

const LandMarkIcon = ({ height = '25', width = '25', className }: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className={`${className}`}
            >
                <rect width='25' height='25' fill='url(#pattern0_940_9809)' />
                <defs>
                    <pattern
                        id='pattern0_940_9809'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_940_9809'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_940_9809'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};

export default LandMarkIcon;
