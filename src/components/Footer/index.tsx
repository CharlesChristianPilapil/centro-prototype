'use client';

import { footer } from '@/constants/home';
import Link from 'next/link';
import FooterNav from '@/components/page-home/footer-nav';
import Icon from '@/components/Icon';
import { motion } from 'framer-motion';
import { singleElement } from '@/constants/motion';

const Footer = () => {
  return (
    <footer className='bg-darkblue py-24 relative font-mohave'>
      <motion.div 
        className='grid place-items-center space-y-4 container text-base text-center'
        variants={singleElement({ x: 0, y: 50, delay: 0.3, type: 'tween' })}
        initial='hidden'
        whileInView='visible'
      >
        <div className='flex justify-between gap-2 max-w-[360px]'>
          {footer.icons.map((e) => (
            <Link
              key={e.name}
              href={e.href}
              target='_blank'
              className='border-[2px] h-fit w-fit border-white rounded-[50%] transition-all duration-200 hover:border-lightblue hover:scale-[1.1]'
            >
              <Icon name={e.icon} />
            </Link>
          ))}
        </div>
        <p className='max-w-[800px]'> {footer.description} </p>
        <span>
          {footer.copyrights.map((e, index) => (
            <p key={e[index]}> {e} </p>
          ))}
        </span>
        <FooterNav />
      </motion.div>
      <div className='py-2 bg-black/20 text-base grid place-items-center absolute bottom-0 w-full'>
        <motion.span 
            className='flex space-x-1'
            variants={singleElement({ x: 0, y: 0, delay: 0.3, type: 'tween' })}
            initial='hidden'
            whileInView='visible'
        >
          <p> {footer.powered} </p> <strong> {footer.centro} </strong>
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;
