import React, { useState, SyntheticEvent, useEffect } from 'react';
import _ from 'lodash';

interface DropDownInterface {
    label?: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
    name: string;
    options: {
        id?: number | string;
        label: string;
        value: string | number;
    }[];
    onChange: (event: SyntheticEvent<HTMLSelectElement>) => void;
    loading?: boolean;
    value?: string | number;
}

const DropDown = ({
    label,
    options,
    required = false,
    error,
    onChange,
    placeholder,
    name,
    loading = false,
    value,
}: DropDownInterface) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemOnClick = (option: {
        label: string;
        value: string | number;
        id?: number | string;
    }) => {
        const event = {
            currentTarget: {
                name: name ?? '',
                value: option.value ?? '',
                id: option.id ?? '',
            },
        } as SyntheticEvent<HTMLSelectElement>;

        onChange(event);
        setSelectedItem(option.label);
        setIsOpen(false);
    };

    useEffect(() => {
        const selectedOption = _.find(options, { value: value });
        if (selectedOption) {
            handleItemOnClick(selectedOption);
        }
    }, [value]);

    return (
        <>
            <div className='relative font-poppins py-3 text-inherit'>
                <div className='flex items-start text-base pb-2 text-inherit'>
                    {label && <p className='text-inherit'>{label}</p>}
                    {required && <p className='text-red-600'>*</p>}
                </div>
                <button
                    className='
                        hover:bg-gray-50
                        hover:border-slate-400
                        focus:border-slate-400
                        border
                        border-slate-300
                        w-full
                        rounded-lg
                        p-3
                        h-[70px]
                    '
                    type='button'
                    onClick={toggleDropdown}
                    name={name}
                    disabled={loading}
                >
                    <div className='flex justify-between items-center'>
                        <p className='text-inherit'>
                            {loading
                                ? 'loading...'
                                : selectedItem
                                ? selectedItem
                                : placeholder}
                        </p>
                        <svg
                            className='h-5 w-5 text-gray-600'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <polyline points='6 9 12 15 18 9' />
                        </svg>
                    </div>
                </button>
                <div
                    className={` ${
                        isOpen ? 'block' : 'hidden'
                    } border rounded-xl max-h-48 overflow-y-auto z-10 absolute top-[115px] w-full bg-white`}
                >
                    <ul className='rounded'>
                        {options.map((option, key) => (
                            <li
                                key={key}
                                className='border border-slate-100 p-3 hover:bg-gray-100 text-black cursor-pointer'
                                onClick={(e) => {
                                    handleItemOnClick(option);
                                }}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
                {error && <p className='text-red-600'>{error}</p>}
            </div>
        </>
    );
};

export default DropDown;
