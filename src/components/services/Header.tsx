import { IHeader } from '@/util/interface';
import Overlay from '../ui/overlay';

export const Header: React.FC<IHeader> = ({ title, description }) => {
  return (
    <div className="relative h-[400px] flex justify-center items-center bg-[url('/service-background-image.svg')] bg-cover bg-bottom">
      <Overlay />
      <div className='absolute text-center'>
        <p className='text-4xl text-white font-bold'>{title}</p>
        <p className='mt-[20px] text-white'>{description}</p>
      </div>
    </div>
  );
};
