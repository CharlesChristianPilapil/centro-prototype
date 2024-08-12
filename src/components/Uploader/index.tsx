'use client';

import { useState, useRef } from 'react';
import Icon from '../Icon';
export interface UploaderInterface {
    label?: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
    name: string;
    allowMultipleUploads?: boolean;
    showAddFileButton?: boolean;
    onChange: (files: any) => void;
    onRemoveFile?: () => void;
    subscript?: string;
    value?: string | null;
}

const Uploader = ({
    label,
    required = false,
    error,
    name,
    allowMultipleUploads = false,
    showAddFileButton = false,
    onChange,
    onRemoveFile,
    subscript,
    value,
}: UploaderInterface) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files);
    };

    const handleRemoveFile = (index: number) => {
        const newFiles = Array.from(files || []) as File[];
        newFiles.splice(index, 1);
        const dataTransfer = new DataTransfer();

        newFiles.forEach((file) => {
            dataTransfer.items.add(file);
        });

        if (inputRef.current) {
            inputRef.current.value = '';
        }

        setFiles(dataTransfer.files);
        onRemoveFile && onRemoveFile();
    };

    const handleAddAnotherFile = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = event.target.files;
        if (showAddFileButton && files && newFiles && allowMultipleUploads) {
            const mergedFiles = Array.from(files);
            for (let i = 0; i < newFiles.length; i++) {
                mergedFiles.push(newFiles[i]);
            }
            const dataTransfer = new DataTransfer();
            mergedFiles.forEach((file) => {
                dataTransfer.items.add(file);
            });
            setFiles(dataTransfer.files);
        } else {
            setFiles(newFiles);
        }
        onChange(event);
    };

    const getFileTypeSymbol = (fileType: string) => {
        switch (fileType) {
            case 'image/jpeg':
            case 'image/png':
                return (
                    <svg
                        className='h-8 w-8 text-slate-700'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <rect
                            x='3'
                            y='3'
                            width='18'
                            height='18'
                            rx='2'
                            ry='2'
                        />
                        <circle cx='8.5' cy='8.5' r='1.5' />
                        <polyline points='21 15 16 10 5 21' />
                    </svg>
                );
            default:
                return (
                    <svg
                        className='h-8 w-8 text-slate-700'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                        />
                    </svg>
                );
        }
    };

    return (
        <>
            <div
                className='relative font-poppins py-3'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className='flex items-start'>
                    {label && <p className='text-neutral-700'>{label}</p>}
                    {required && <p className='text-red-600'>*</p>}
                </div>
                {subscript && (
                    <div className='flex items-start'>
                        {label && (
                            <p className='opacity-50 text-sm'>{subscript}</p>
                        )}
                    </div>
                )}
                <input
                    type='file'
                    onChange={handleFileChange}
                    hidden
                    multiple={allowMultipleUploads}
                    name={name}
                    ref={inputRef}
                />
                <button
                    type='button'
                    className='
                        hover:bg-gray-50
                        hover:border-blue-700
                        active:bg-gray-100
                        active:border-blue-700
                        border-dashed
                        h-[70px]
                        border-2
                        w-full
                        rounded-md
                        p-3
                        flex
                        justify-center
                        items-center
                        mt-1
                    '
                    onClick={() => inputRef.current?.click()}
                >
                    <svg
                        className='h-8 w-8 text-blue-700'
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
                        <path d='M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1' />
                        <polyline points='9 15 12 12 15 15' />
                        <line x1='12' y1='12' x2='12' y2='21' />
                    </svg>
                    <p className='ml-2 font-light'>Drag and drop file or</p>
                    <p className='ml-1 text-blue-700'>
                        <b>BROWSE</b>
                    </p>
                </button>
                {value && value !== null && !files && (
                    <div
                        className='
                            border
                            border-slate-500
                            w-full
                            min-h-12
                            rounded-md
                            p-2
                            mt-1
                            flex
                            justify-between
                            items-center
                            '
                    >
                        <div className='flex justify-start items-center'>
                            {getFileTypeSymbol(' ')}
                            <div className='ml-2'>
                                <p className='text-blue-700'>
                                    <b>{value}</b>
                                </p>
                            </div>
                        </div>
                        <button
                            type='button'
                            className='
                            h-8
                            w-8
                            flex
                            items-center
                            justify-center
                            bg-blue-700 
                            hover:bg-blue-600 
                            rounded-full
                        '
                            onClick={() => handleRemoveFile(0)}
                        >
                            <svg
                                className='h-5 w-5 text-slate-200'
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
                                <line x1='18' y1='6' x2='6' y2='18' />
                                <line x1='6' y1='6' x2='18' y2='18' />
                            </svg>
                        </button>
                    </div>
                )}
                {files &&
                    Array.from(files).map((file, key) => (
                        <div
                            key={key}
                            className='
                            border
                            border-slate-500
                            w-full
                            min-h-12
                            rounded-md
                            p-2
                            mt-1
                            flex
                            justify-between
                            items-center
                        '
                        >
                            <div className='flex justify-start items-center'>
                                {getFileTypeSymbol(file.type)}
                                <div className='ml-2'>
                                    <p className='text-blue-700'>
                                        <b>{file.name}</b>
                                    </p>
                                    <p className='text-sm text-slate-400'>
                                        Size: {file.size} kb
                                    </p>
                                </div>
                            </div>
                            <button
                                type='button'
                                className='
                                h-8
                                w-8
                                flex
                                items-center
                                justify-center
                                bg-blue-700 
                                hover:bg-blue-600 
                                rounded-full
                            '
                                onClick={() => handleRemoveFile(key)}
                            >
                                <svg
                                    className='h-5 w-5 text-slate-200'
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
                                    <line x1='18' y1='6' x2='6' y2='18' />
                                    <line x1='6' y1='6' x2='18' y2='18' />
                                </svg>
                            </button>
                        </div>
                    ))}
                {files &&
                    files.length > 0 &&
                    showAddFileButton &&
                    allowMultipleUploads && (
                        <div className='mt-3 flex justify-center'>
                            <button
                                className='
                                opacity-50
                                text-lg flex
                                hover:text-blue-800
                                items-center
                                justify-center
                            '
                                onClick={handleAddAnotherFile}
                            >
                                <b>ADD ANOTHER FILE (OPTIONAL)</b>
                                <Icon className='ml-2' name='add-file' />
                            </button>
                        </div>
                    )}
                {error && <p className='text-red-600'>{error}</p>}
            </div>
        </>
    );
};

export default Uploader;
