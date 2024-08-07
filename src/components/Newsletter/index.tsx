import { newsletter } from '@/constants/home';
import Overlay from '../Overlay';

const Newsletter = () => {
  return (
    <div className="py-32 relative bg-[url('/images/home/newsletter-bg.svg')] bg-cover bg-center bg-fixed">
      <div className='flex flex-col items-center text-center relative gap-2 z-20 container'>
        <strong className='font-bold text-base'> {newsletter.title} </strong>
        <h1 className='text-[40px] text-lightblue'> {newsletter.head} </h1>
        <p className='max-w-[800px] text-base'> {newsletter.description} </p>
        <form
          action=''
          className='bg-base p-2 flex gap-2 rounded-[50px] min-w-[150px]'
        >
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            className='bg-transparent outline-none pl-2 bg-darkblue flex-1'
          />
          <button
            className='bg-darkblue text-base py-2 px-4 rounded-[50px] border-[1px] 
          border-darkblue hover:bg-transparent hover:text-darkblue transition-all duration-200'
          >
            Connect
          </button>
        </form>
      </div>
      <Overlay />
    </div>
  );
};

export default Newsletter;
