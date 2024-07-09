import { IIcon } from '@/util/interface';

export const MonitorIcon = ({ height, width }: IIcon) => {
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
          d='M12.75 51L55.25 51C57.5972 51 59.5 49.0972 59.5 46.75L59.5 17C59.5 14.6528 57.5972 12.75 55.25 12.75L12.75 12.75C10.4028 12.75 8.5 14.6528 8.5 17L8.5 46.75C8.5 49.0972 10.4028 51 12.75 51Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M42.5 59.5H25.5'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  );
};
