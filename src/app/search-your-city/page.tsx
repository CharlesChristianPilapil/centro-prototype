'use client';

import SearchIcon from '@/images/SearchIcon';
import { useState, KeyboardEvent } from 'react';
import { url } from '@/constants/url';
import { useRouter } from 'next-nprogress-bar';

const Page = () => {
    const [searchValue, setSearchValue] = useState(''); // State to store the input value
    const router = useRouter();

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <div
                className="relative sm:h-[650px] flex justify-center bg-[url('/images/search-your-city/building-bg.svg')] bg-cover bg-center"
                style={{ minHeight: 'calc(100vh - 82px)' }}
            >
                <title>Centro | Search Your City</title>
                {/* <Overlay /> */}
                <div className='w-[659px] h-[210px] flex flex-col items-center justify-center mt-[160px] inset-0 bg-[rgba(255,255,255,0.3)] backdrop-blur-lg rounded-lg p-8 text-center space-y-4'>
                    <p className='text-3xl'>How Modern Is Your City?</p>
                    <p className='text-lg'>
                        See how your city compares in terms of modernization and
                        progress.
                    </p>
                    <div className='relative w-full flex h-[50px] max-w-md'>
                        <input
                            type='text'
                            placeholder='Search...'
                            value={searchValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyPress}
                            className='w-full h-full px-6 py-2 text-gray-700 placeholder-gray-400 border-2 border-r-0 border-blue-500 rounded-l-lg focus:outline-none transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50'
                        />
                        <button
                            onClick={() =>
                                router.push(
                                    `${url + '/search-your-city/project-list'}`
                                )
                            }
                            className='h-full px-3 text-gray-400 bg-white border-2 border-solid border-blue-500 rounded-r-lg focus:outline-none transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50'
                        >
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
