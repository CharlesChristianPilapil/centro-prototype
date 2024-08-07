import { footer } from '@/constants/home';
import Image from 'next/image';
import Link from 'next/link';
import FooterNav from '../home/footer-nav';

const Footer = () => {
  return (
    <footer className='bg-darkblue py-24 relative'>
      <div className='grid place-items-center space-y-4 container text-base text-center'>
        <div className='flex justify-between gap-2 max-w-[360px]'>
          {footer.icons.map((e) => (
            <Link
              key={e.name}
              href={e.href}
              target='_blank'
              className='border-[2px] h-fit w-fit border-white rounded-[50%] hover:border-lightblue hover:scale-[1.1]'
            >
              <Image
                src={`/icons/${e.icon}`}
                alt={e.name}
                height={50}
                width={50}
              />
            </Link>
          ))}
        </div>
        <p className='max-w-[1024px]'> {footer.description} </p>
        <span>
          {footer.copyrights.map((e, index) => (
            <p key={e[index]}> {e} </p>
          ))}
        </span>
        <FooterNav />
      </div>
      <div className='py-2 bg-black/20 text-base grid place-items-center absolute bottom-0 w-full'>
        <span className='flex space-x-1'>
          <p> {footer.powered} </p> <strong> {footer.centro} </strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
