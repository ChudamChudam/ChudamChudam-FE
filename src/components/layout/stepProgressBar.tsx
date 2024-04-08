'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { PATH_LIST } from '@/constants/paths';

export const StepProgressBar = () => {
  const pathname = usePathname();

  return (
    <ul className="w-full h-2 flex gap-2 mt-2 mb-7">
      {PATH_LIST.map((path) => {
        return (
          <li
            key={path}
            className={clsx(
              'h-2',
              pathname !== path && 'bg-gray-100 rounded-full w-2',
              pathname === path && 'animate-increase-width w-8 bg-green-main rounded-lg',
            )}
          />
        );
      })}
    </ul>
  );
};
