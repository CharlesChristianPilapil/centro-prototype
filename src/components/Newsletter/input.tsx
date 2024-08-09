import { useEffect, useState } from "react";
import Button from "../Button";


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
                <Button
                    isRounded
                    variant="default"
                    className='py-2 px-4'
                >
                    Connect
                </Button>
            </div>
        </>
    )
}

export default NewsletterInput