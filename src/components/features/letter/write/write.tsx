'use client';

import { toPng } from 'html-to-image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { useLetterStore } from '@/store/letterStore';
import clsx from 'clsx';
import localFont from 'next/font/local';
import BottomSheet from '../drawer/BottomSheet';

const myFont = localFont({
  src: './gom.ttf',
  display: 'swap',
});

export const Write = () => {
  const router = useRouter();
  const selected = useLetterStore((state) => state.selected);
  const sender = useLetterStore((state) => state.sender);
  const receiver = useLetterStore((state) => state.receiver);
  const setUrl = useLetterStore((state) => state.setUrl);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [length, setLength] = useState(0);
  const [select, setSelect] = useState('font'); //내가 선택하고 있는 아이템이 무엇인지.?

  const handleSelectItemClick = (selectItem: string) => {
    setSelect(selectItem);
  };

  const handleItemClick = (item: { name: string; value: string }, type: string) => {
    switch (type) {
      case 'font':
        alert('준비중입니다.');
        break;
      case 'sticker':
        alert('준비중입니다.');
        break;
      case 'background':
        alert('준비중입니다.');
        break;
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (!inputRef.current) return;
    setLength(event.target.value.length);
  };

  const handleSubmit = async () => {
    if (resultRef.current === null) {
      return;
    }
    const dataUrl = await toPng(resultRef.current, { includeQueryParams: true });
    setUrl(dataUrl);
    router.push(`/letter/1`);
  };

  return (
    <>
      <div className="w-full h-[448px] flex items-center justify-center relative" ref={resultRef}>
        <Image
          src={selected}
          width={336}
          height={448}
          alt="letter"
          className="object-cover w-[336px] h-[448px]"
        />
        <div
          className={clsx(
            'absolute top-[132px] left-[50%] -translate-x-1/2 w-[280px] h-[262px]',
            myFont.className,
          )}
        >
          <div className="w-full h-[37px]py-2 px-4">To. {receiver}</div>
          <textarea
            className="w-full h-[166px] py-2 px-4 outline-none placeholder:text-gray-500 resize-none"
            placeholder="추억을 담은 편지를 작성해보세요"
            maxLength={200}
            ref={inputRef}
            onChange={handleChange}
          />
          <div className="w-full h-[22px] px-4 text-right">{length}/200</div>
          <div className="w-full h-[37px] py-2 px-4 text-right">From. {sender}</div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full flex flex-col gap-2">
        <BottomSheet
          select={select}
          handleSelectItem={handleSelectItemClick}
          handleItemClick={handleItemClick}
        />
        <Button variant="white" onClick={handleSubmit}>
          작성 끝내기
        </Button>
      </div>
    </>
  );
};
