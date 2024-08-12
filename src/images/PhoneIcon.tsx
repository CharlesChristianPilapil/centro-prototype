import { IIcon } from '@/util/interface';

const PhoneIcon = ({ height = '25', width = '25' }: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <rect width='25' height='25' fill='url(#pattern0_545_9820)' />
                <defs>
                    <pattern
                        id='pattern0_545_9820'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_545_9820'
                            transform='scale(0.01)'
                        />
                    </pattern>
                    <image
                        id='image0_545_9820'
                        width='100'
                        height='100'
                        xlinkHref='data:image/png;base64,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'
                    />
                </defs>
            </svg>
        </>
    );
};

export default PhoneIcon;
