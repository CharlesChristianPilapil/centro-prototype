interface DisplayFieldInterface {
    label: string;
    text: string;
};

const DisplayField = ({
    label,
    text
}: DisplayFieldInterface) => {
    return (
        <div className="relative font-poppins py-3 text-[15px] leading-[21px] text-neutral-400">
            <p className="py-1">{label}</p>
            <p className="border-2 rounded-xl px-[20px] h-[60px] w-full flex items-center">
                {text}
            </p>
        </div>
    )
};

export default DisplayField;
