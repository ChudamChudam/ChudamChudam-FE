'use client';

import { ChangeEventHandler } from 'react';

import { useLetterStore } from '@/store/letterStore';

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
        htmlFor='upload'
        className='cursor-pointer font-semibold flex flex-col gap-2 items-center justify-center'
      >
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.1406 5.19922C9.63197 5.19917 9.14788 5.19912 8.73996 5.23245C8.29514 5.2688 7.78492 5.35357 7.27497 5.6134C6.55996 5.97772 5.97863 6.55905 5.61432 7.27406C5.35448 7.78402 5.26971 8.29423 5.23337 8.73905C5.20004 9.14698 5.20009 9.63107 5.20014 10.1397V37.8587C5.20009 38.3674 5.20004 38.8515 5.23337 39.2594C5.26971 39.7042 5.35448 40.2144 5.61432 40.7244C5.97863 41.4394 6.55996 42.0207 7.27497 42.3851C7.78492 42.6449 8.29514 42.7297 8.73995 42.766C9.14785 42.7993 9.63189 42.7993 10.1405 42.7992H37.8595C38.3681 42.7993 38.8523 42.7993 39.2602 42.766C39.705 42.7297 40.2152 42.6449 40.7252 42.3851C41.4402 42.0207 42.0215 41.4394 42.3858 40.7244C42.6457 40.2144 42.7304 39.7042 42.7668 39.2594C42.8001 38.8515 42.8001 38.3675 42.8 37.8589V10.1397C42.8001 9.6311 42.8001 9.14695 42.7668 8.73905C42.7304 8.29423 42.6457 7.78402 42.3858 7.27406C42.0215 6.55905 41.4402 5.97772 40.7252 5.6134C40.2152 5.35357 39.705 5.2688 39.2602 5.23245C38.8523 5.19912 38.3682 5.19917 37.8595 5.19922H10.1406ZM8.80015 8.99914C8.80015 8.88868 8.8897 8.79914 9.00015 8.79914H39C39.1105 8.79914 39.2 8.88868 39.2 8.99914V27.6547L33.9997 22.4544L26.9998 29.4544L16.9998 19.4544L8.80015 27.6541V8.99914ZM8.80015 32.7453V38.9991C8.80015 39.1096 8.8897 39.1991 9.00015 39.1991H39C39.1105 39.1991 39.2 39.1096 39.2 38.9991V32.7459L33.9997 27.5456L26.9998 34.5456L16.9998 24.5456L8.80015 32.7453ZM34.4998 16C34.4998 17.3807 33.3805 18.5 31.9998 18.5C30.6191 18.5 29.4998 17.3807 29.4998 16C29.4998 14.6193 30.6191 13.5 31.9998 13.5C33.3805 13.5 34.4998 14.6193 34.4998 16Z'
            fill='#FDD16F'
          />
        </svg>
        <p className='text-gray-500'>불러오기</p>
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
