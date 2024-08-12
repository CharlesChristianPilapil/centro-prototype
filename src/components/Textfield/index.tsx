import React from 'react';
import Icon from '../Icon';

interface TextfieldInterface {
    type?: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
    name?: string;
    onChange?: (event: any) => void;
    className?: string;
    isSearchField?: boolean;
    isRounded?: boolean;
    value?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onKeyDown?: (event: any) => void;
}

const Textfield = ({
    type = 'text',
    label,
    required = false,
    error = '',
    onChange,
    placeholder = '',
    name,
    className,
    isSearchField = false,
    isRounded = false,
    disabled = false,
    readOnly = false,
    value,
    onKeyDown,
}: TextfieldInterface) => {
    return (
        <>
            <div className='relative font-poppins py-3'>
                {label && (
                    <div className='flex items-start text-base pb-2'>
                        {label && <p className='text-neutral-700'>{label}</p>}
                        {required && <p className='text-red-600'>*</p>}
                    </div>
                )}
                <input
                    type={type}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={value}
                    disabled={disabled}
                    name={name}
                    className={`
                        ${type === 'number' ? 'custom-number-input' : ''}
                        flex 
                        flex-row 
                        border  
                        border-slate-300 
                        ${isRounded ? 'rounded-full' : 'rounded-lg'}
                        hover:bg-gray-50
                        hover:border-slate-400
                        focus:border-slate-400
                        ${
                            isSearchField
                                ? 'pl-10 h-[60px] text-[15px]'
                                : 'px-2 text-md w-full h-[70px] '
                        }
                        ${className}
                    `}
                    placeholder={placeholder}
                    readOnly={readOnly}
                />
                {isSearchField && (
                    <Icon
                        className='absolute top-[35px] left-3'
                        name='search-icon'
                    />
                )}
                {error && <p className='text-red-600'>{error}</p>}
            </div>
        </>
    );
};

export default Textfield;
