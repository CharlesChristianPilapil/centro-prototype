interface SecondaryTableInterface {
    header: string[];
    data: string[];
    rows: number;
    cols: number;
    withSubscript?: boolean;
    subscript?: {
        columnName: string;
        subscript: string;
    };
    dateRangeFormat?: boolean;
}

const SecondaryTable = ({
    header,
    data,
    rows,
    cols,
    withSubscript = false,
    subscript,
    dateRangeFormat = false,
}: SecondaryTableInterface) => {
    const subscriptIndex = header.indexOf(subscript?.columnName || '');

    const dateRangeFormatHandler = (string: string) => {
        const lastSpaceIndex = string.lastIndexOf(' ');
        const title = string.substring(0, lastSpaceIndex);
        const range = string.substring(lastSpaceIndex + 1);
        return {
            title,
            range,
        };
    };

    return (
        <>
            <div
                className={`
                    w-full
                    border
                    border-slate-300
                    rounded-lg
                    overflow-auto
                    grid
                    grid-cols-${cols}
                    grid-rows-${rows}
                `}
                style={{
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `auto`,
                }}
            >
                {header.map((item, key) => {
                    if (
                        dateRangeFormat &&
                        (item.toLowerCase().includes('from') ||
                            item.toLowerCase().includes('to'))
                    ) {
                        const containsTo = /(?:^|\s)To(?:$|\s|[,.!?;:])/;
                        const containsFrom = /(?:^|\s)From(?:$|\s|[,.!?;:])/;
                        if (containsTo.test(item) || containsFrom.test(item)) {
                            return (
                                <p
                                    key={key}
                                    className='p-3 bg-blue-700/5 text-blue-700 text-[14px] leading-[21px] font-semibold'
                                >
                                    {dateRangeFormatHandler(item).title}
                                    <br />
                                    <span className='text-blue-700/50'>
                                        {dateRangeFormatHandler(item).range}
                                    </span>
                                </p>
                            );
                        }
                    }
                    return (
                        <p
                            key={key}
                            className='p-3 bg-blue-700/5 text-blue-700 text-[14px] leading-[21px] font-semibold'
                        >
                            {item}
                        </p>
                    );
                })}

                {data.map((item, key) => (
                    <div key={key} className='p-3 relative text-[14px]'>
                        <p>{item}</p>
                        {withSubscript && key % cols === subscriptIndex && (
                            <span className='text-neutral-400'>
                                {subscript?.subscript}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SecondaryTable;
