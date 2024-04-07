'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { PATH_LIST } from '@/constants/paths';

export const StepProgressBar = () => {
  const pathname = usePathname();

  // TODO: /letter/write 페이지에 적용하기

  return (
    <ul className='w-full h-2 flex gap-2 mt-2 mb-7'>
      {PATH_LIST.map((path) => {
        return (
          <li
            key={path}
            className={clsx(
              'h-2',
              pathname !== path && 'bg-gray-400 rounded-full w-2',
              pathname === path &&
                'animate-increase-width w-8 bg-[#FDD16F] rounded-lg'
            )}
          />
        );
      })}
    </ul>
  );
};
