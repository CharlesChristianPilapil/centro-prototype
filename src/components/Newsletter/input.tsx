import { useEffect, useState } from "react";


// 352px

const NewsletterInput = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
  
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);
  
    const isNarrow = windowWidth <= 352;

    return (
        <>
            <div className={`bg-white p-2 flex items-center gap-2 rounded-[50px] ${isNarrow ? 'w-full' : 'w-[320px]'}`}>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email Address'
                    className='bg-transparent outline-none pl-2 border-b border-b-white text-baseblue w-full'
                />
                <button
                    className='bg-baseblue text-base border-baseblue hover:bg-transparent hover:text-darkblue
                    py-2 px-4 rounded-[50px] border-[1px] w-fit transition-all duration-200'
                >
                    Connect
                </button>
            </div>
        </>
    )
}

export default NewsletterInput