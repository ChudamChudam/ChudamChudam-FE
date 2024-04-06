'use client';

import Image from 'next/image';

import { useLetterStore } from '@/store/letterStore';

export function LetterPreview() {
  // TODO: 편지지 디자인이 완성되면 수정하기

  const selected = useLetterStore((state) => state.selected);
  return (
    <div className='w-full h-full flex items-center justify-center'>
      {selected.length > 1 && (
        <Image
          alt='preview'
          height='218'
          width='164'
          className='rounded-lg flex items-center justify-center object-cover w-[164px] h-[218px]'
          src={selected}
        />
      )}
      {selected.length === 1 && (
        <div className='w-[164px] h-[218px] rounded-lg flex items-center justify-center bg-gray-200 text-xl'>
          {+selected + 1}
        </div>
      )}
    </div>
  );
}
