import { ICard } from '@/util/interface';
import { truncateString } from '@/util/methods';
import Link from 'next/link';
import { Card } from './Card';

const ServiceCard: React.FC<ICard> = ({ icon, title, description }) => {
    return (
        <>
            <Card height='350px' width='350px' radius='20px'>
                <div className='h-[70px] w-[70px] rounded-full bg-[#0E4370] flex items-center justify-center'>
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
                    <button className='h-[40px] w-[120px] mt-[20px] rounded-lg bg-[#0093FF] text-white text-sm'>
                        Learn More
                    </button>
                </Link>
            </Card>
        </>
    );
};

export default ServiceCard;
