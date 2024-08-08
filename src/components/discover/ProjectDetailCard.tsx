export const ProjectDetailCard = ({
    leftData,
    rightData,
    headerColor,
}: any) => {
    return (
        <div className='grid grid-cols-2 mb-4 border-2 border-solid rounded-b-lg border-gray-500'>
            <div>
                <p
                    className={`h-[30px] w-[100%] bg-[${
                        headerColor ? headerColor : '#0c5acb'
                    }] rounded-tl-[8px] px-[10px] flex items-center text-white`}
                >
                    {leftData.name}
                </p>
                <p className='px-[10px] py-[5px]'>{leftData.data}</p>
            </div>
            <div>
                <p
                    className={`h-[30px] w-[100%] bg-[${
                        headerColor ? headerColor : '#0c5acb'
                    }] rounded-tr-[8px] px-[10px] flex items-center text-white`}
                >
                    {rightData.name}
                </p>
                <p className='px-[10px] py-[5px]'>{rightData.data}</p>
            </div>
        </div>
    );
};
