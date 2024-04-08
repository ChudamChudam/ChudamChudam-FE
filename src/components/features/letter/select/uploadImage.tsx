'use client';

import { ChangeEventHandler } from 'react';

import { useLetterStore } from '@/store/letterStore';
import Save from '@/assets/images/letter/save.svg';

export function UploadImage() {
  // TODO: svg 컴포넌트가 만들어지면 변경하기
  const setSelected = useLetterStore((state) => state.setSelected);

  const handleUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      // 파일리더 객체 생성
      const reader = new FileReader();
      // 파일 읽어온 후 실행되는 콜백함수
      reader.onload = (e) => {
        setSelected(e.target!.result as string);
      };
      // 파일 객체를 읽어 base64 형태의 문자열로 변환
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label
        htmlFor="upload"
        className="cursor-pointer font-semibold flex flex-col gap-2 items-center justify-center w-full h-full"
      >
        <Save />
        <p className="text-gray-700">불러오기</p>
      </label>
      <input
        type="file"
        id="upload"
        className="hidden w-full h-full"
        accept="image/*"
        onChange={handleUpload}
      ></input>
    </>
  );
}
