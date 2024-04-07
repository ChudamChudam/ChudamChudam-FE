'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { PATH } from '@/constants/paths';

export const StepProgressBar = () => {
  const pathname = usePathname();

  // TODO: /letter/write 페이지에 적용하기

  return (
    <div className='w-full h-2 flex gap-2 mt-2 mb-7'>
      {PATH.map((item) => {
        return (
          <div
            key={pathname}
            className={clsx(
              'bg-gray-400 rounded-full w-2 h-2',
              pathname === item && 'animate-increase-width w-8 bg-[#FDD16F]'
            )}
          />
        );
      })}
    </div>
  );
};
