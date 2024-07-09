import { IIcon } from '@/util/interface';

export const FileTextIcon = ({ height, width }: IIcon) => {
  return (
    <>
      <svg
        width={width || '68'}
        height={height || '68'}
        viewBox='0 0 68 68'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M53.125 59.5H14.875C14.3114 59.5 13.7709 59.2761 13.3724 58.8776C12.9739 58.4791 12.75 57.9386 12.75 57.375V10.625C12.75 10.0614 12.9739 9.52091 13.3724 9.1224C13.7709 8.72388 14.3114 8.5 14.875 8.5H40.375L55.25 23.375V57.375C55.25 57.9386 55.0261 58.4791 54.6276 58.8776C54.2291 59.2761 53.6886 59.5 53.125 59.5Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M40.375 8.5V23.375H55.25'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25.5 36.125H42.5'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25.5 44.625H42.5'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  );
};
