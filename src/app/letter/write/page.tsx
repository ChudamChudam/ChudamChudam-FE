'use client';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useState } from 'react';
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  redirect,
  notFound,
} from 'next/navigation';
import Tema from '@/assets/images/letter/tema1.png';

import Image from 'next/image';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';

import { Description } from '@/components/layout/description';
import { StepProgressBar } from '@/components/layout/stepProgressBar';
import Link from 'next/link';

import BottomSheet from '@/components/features/letter/drawer/BottomSheet';
import axios from 'axios';
import { post } from '@/lib/axios';

const Page = () => {
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null); // 이미지 찍을 div ref
  const [select, setSelect] = useState('font'); //내가 선택하고 있는 아이템이 무엇인지.?
  const [fontItem, setFontItem] = useState<{ name: string; value: string }>({
    name: '',
    value: '',
  });
  const [sticker, setSticker] = useState<{ name: string; value: string }>({
    name: '',
    value: '',
  });
  const [background, setBackground] = useState<{ name: string; value: string }>({
    name: '',
    value: '',
  });
  const [letter, setLetter] = useState<[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSelectItemClick = (selectItem: string) => {
    setSelect(selectItem);
  };
  const handleItemClick = (item: { name: string; value: string }, type: string) => {
    switch (type) {
      case 'font':
        setFontItem(item);
        break;
      case 'sticker':
        alert('준비중입니다.');
        break;
      case 'background':
        alert('준비중입니다.');
        break;
    }
  };
  function base64toFile(base_data: any, filename: string) {
    let arr = base_data.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  const handleSubmit = async () => {
    if (ref.current === null) {
      return;
    }
    const dataUrl = await toPng(ref.current, { includeQueryParams: true });
    const file = base64toFile(dataUrl, 'chudom.img.png');
    let formData = new FormData();
    formData.append('file', file);
    const submitRes = await post<FormData>(
      '/letter',
      {
        formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (submitRes) {
      router.push('/letter/id');
    }
  };

  return (
    <main className="relative w-full h-dvh">
      <Header prev />
      <StepProgressBar />
      <Description>추억을 담은 편지를 작성해보세요.</Description>
      <Card className="mt-6">
        <CardContent
          ref={ref}
          className="flex flex-col items-start w-full h-[448px] max-h-[448px] px-[18px] py-[20px] relative rounded-[8px] z-0"
        >
          <div className="w-full max-w-[375px] z-10">
            <div className=" flex items-center justify-end w-full  z-10"></div>

            <div className="w-full flex flex-row items-center justify-center mt-[20px]">
              <div className="flex flex-col bg-[#fff] bg-opacity-75 rounded-[8px] w-[296px] h-[263px] px-[16px] py-[12px]">
                <span className=" text-black">To. E와I-DLE</span>
                <textarea
                  ref={inputRef}
                  placeholder="추억을 담은 편지를 작성해보세요"
                  maxLength={300}
                  className=" resize-none border-none h-[170px] mt-[13px] outline-none bg-transparent"
                />
                <div className=" w-full flex justify-end">
                  <span className=" text-black">From.마리</span>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt="tema"
            src={Tema}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full  flex-col justify-start"
          />
        </CardContent>
      </Card>

      {/* 관심사 분리가 필요합니다. */}

      <div className="w-full absolute bottom-5 flex flex-col gap-2 ">
        <BottomSheet
          select={select}
          handleSelectItem={handleSelectItemClick}
          handleItemClick={handleItemClick}
        />

        {/* <Link href={`/letter/id`} className="w-full"> */}
        <Button onClick={() => handleSubmit()} variant="next">
          완료
        </Button>
        {/* </Link> */}
      </div>
    </main>
  );
};
export default Page;
