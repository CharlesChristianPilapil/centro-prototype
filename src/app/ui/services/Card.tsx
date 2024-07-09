import { ICard } from '@/util/interface';
import { truncateString } from '@/util/methods';
import Link from 'next/link';

const Card: React.FC<ICard> = ({ icon, title, description }) => {
  return (
    <>
      <div className='flex flex-col h-[350px] w-[350px] p-[30px] rounded-[20px] shadow-xl'>
        <div className='h-[70px] w-[70px] rounded-full bg-[#0E4370] flex items-center justify-center'>
          {icon}
        </div>
        <p className='mt-[10px] font-bold'>{title}</p>
        <p className='mt-[10px]'>{truncateString(description, 133)}</p>
        <Link
          href='/services/[serviceId]'
          as={`/services/${encodeURIComponent(
            title.toLowerCase().replace(/ /g, '-')
          )}`}
        >
          <button className='self-center h-[40px] w-[120px] mt-[20px] rounded-lg bg-[#0093FF] text-white  text-sm'>
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Card;
