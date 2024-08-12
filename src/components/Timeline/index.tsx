const Timeline: React.FC<{
    title?: string;
    timeline?: number;
    step?: number;
    children?: React.ReactNode;
    borderLine?: boolean;
    className?: string;
}> = ({ children, timeline, step, title, borderLine = true, className }) => {
    const formatNumber = (number: number | undefined, length = 2) => {
        return number?.toString().padStart(length, '0');
    };

    return (
        <>
            <div
                className={`relative min-h-[300px] pl-[26px] pb-10 ml-[16px]
                    ${borderLine && 'border-l-2 border-l-blue-700'}`}
            >
                <div className='absolute -top-0 -left-4 h-[32px] w-[32px] bg-white border-2 border-blue-700 rounded-full flex justify-center items-center text-xs text-blue-700 font-bold'>
                    {formatNumber(timeline)}
                </div>
                {(title || step) && (
                    <div className='flex items-center mb-6'>
                        {step && (
                            <p className='text-blue-700 text-[13px] font-bold mr-[10px]'>
                                Step {step.toString()}
                            </p>
                        )}
                        <p className='text-[16px] text-neutral-500'>{title}</p>
                    </div>
                )}
                <div className={className}>{children}</div>
            </div>
        </>
    );
};

export default Timeline;
