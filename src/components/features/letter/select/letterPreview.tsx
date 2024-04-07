'use client';

import Image from 'next/image';

import { useLetterStore } from '@/store/letterStore';

export const LetterPreview = () => {
  // TODO: 편지지 디자인이 완성되면 수정하기
  const selected = useLetterStore((state) => state.selected);

  return (
    <div className='w-full grow flex items-center justify-center mb-[72px]'>
      {selected.length > 1 && (
        <Image
          alt='preview'
          height='244'
          width='324'
          className='rounded-lg flex items-center justify-center object-cover w-[244px] h-[324px]'
          src={selected}
        />
      )}
      {selected.length === 1 && (
        <div className='w-[244px] h-[324px] rounded-lg flex items-center justify-center bg-gray-200 text-xl'>
          {+selected + 1}
        </div>
      )}
    </div>
  );
};
