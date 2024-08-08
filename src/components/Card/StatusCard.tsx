import Icon from '../Icon';

interface StatusCardInterface {
    variant: 'success' | 'primary' | 'warning' | 'danger';
    icon?: React.ReactNode;
    label: string;
}

const StatusCard = ({
    variant = 'primary',
    icon,
    label,
}: StatusCardInterface) => {
    return (
        <div className='relative font-poppins py-3'>
            <div
                className={`
                    border-2
                    ${
                        variant === 'success' &&
                        'border-green-600 bg-green-600/10 text-green-600'
                    }
                    ${
                        variant === 'primary' &&
                        'border-blue-600 bg-blue-600/10 text-blue-600'
                    }
                    ${
                        variant === 'warning' &&
                        'border-orange-300 bg-orange-300/10 text-orange-300'
                    }
                    ${
                        variant === 'danger' &&
                        'border-red-600 bg-red-600/10 text-red-600'
                    }
                    p-3
                    rounded-xl
                    w-full
                    flex
                    justify-between
                    items-center
                `}
            >
                {icon}
                <p className='font-semibold text-[16px]'>{label}</p>
            </div>
        </div>
    );
};

export default StatusCard;
