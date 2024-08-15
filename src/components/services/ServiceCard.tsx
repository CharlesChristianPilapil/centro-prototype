import { ICard } from '@/util/interface';
import { truncateString } from '@/util/methods';
import Link from 'next/link';
import { Card } from './Card';

const ServiceCard: React.FC<ICard> = ({ icon, title, description }) => {
    return (
        <>
            <Card radius='20px' style={'bg-white h-full'}>
                <div className='h-[70px] w-[70px] py-[10px] rounded-full bg-[#0E4370] flex items-center justify-center'>
                    {icon}
                </div>
                <p className='min-h-[48px] mt-[10px] font-bold'>{title}</p>
                <p className='mt-[10px]'>{truncateString(description, 133)}</p>
                <Link
                    href='/services/services-features?id='
                    as={`/services/services-features?id=${encodeURIComponent(
                        title.toLowerCase().replace(/ /g, '-')
                    )}`}
                    className='self-center'
                >
                    <button className='h-[40px] w-[120px] mt-[20px] rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600'>
                        Learn More
                    </button>
                </Link>
            </Card>
        </>
    );
};

export default ServiceCard;
