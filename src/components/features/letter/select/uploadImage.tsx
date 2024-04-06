'use client';

import { ChangeEventHandler } from 'react';

import { useLetterStore } from '@/store/letterStore';

export function UploadImage() {
  // TODO: + 아이콘이 만들어지면 변경하기
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
      <label htmlFor='upload' className='cursor-pointer text-3xl font-semibold'>
        +
      </label>
      <input
        type='file'
        id='upload'
        className='hidden'
        accept='image/*'
        onChange={handleUpload}
      />
    </>
  );
}
