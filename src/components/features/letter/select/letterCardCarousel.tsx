'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useLetterStore } from '@/store/letterStore';
import { LetterCard } from '@/components/features/letter/select/letterCard';
import { UploadImage } from '@/components/features/letter/select/uploadImage';

export const LetterCardCarousel = () => {
  // TODO: 편지지 디자인이 완료되면 수정하기

  const setSelected = useLetterStore((state) => state.setSelected);

  const handleClick = (image: string) => {
    setSelected(image);
  };

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='py-4 w-auto'
    >
      <CarouselContent className='flex gap-4'>
        <CarouselItem className='basis-1/3'>
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
