'use client';

import { useRouter } from 'next/navigation';

export function BackButton() {
  // TODO: svg를 컴포넌트화 시키기

  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className='w-full h-[60px] flex items-center'>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='cursor-pointer'
        onClick={handleClick}
      >
        <path
          d='M16.1363 3.36272C16.4878 3.7142 16.4878 4.28405 16.1363 4.63552L8.77271 11.9991L16.1363 19.3627C16.4878 19.7142 16.4878 20.284 16.1363 20.6355C15.7848 20.987 15.215 20.987 14.8635 20.6355L6.86352 12.6355C6.51205 12.284 6.51205 11.7142 6.86352 11.3627L14.8635 3.36272C15.215 3.01125 15.7848 3.01125 16.1363 3.36272Z'
          fill='#050505'
        />
      </svg>
    </div>
  );
}
