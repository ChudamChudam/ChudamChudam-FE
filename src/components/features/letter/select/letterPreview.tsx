'use client';

import Image from 'next/image';

import { useLetterStore } from '@/store/letterStore';

export const LetterPreview = () => {
  const selected = useLetterStore((state) => state.selected);

  return (
    <div className="w-full grow flex items-center justify-center mb-[72px]">
      <Image
        alt="preview"
        height="244"
        width="324"
        className="rounded-lg flex items-center justify-center object-cover w-[244px] h-[324px]"
        src={selected}
      />
    </div>
  );
};
