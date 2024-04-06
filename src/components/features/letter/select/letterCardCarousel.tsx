'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useLetterStore } from '@/store/letterStore';
import { LetterCard } from '@/components/features/letter/select/letterCard';
import { UploadImage } from '@/components/features/letter/select/uploadImage';

export function LetterCardCarousel() {
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
      className='w-full max-w-sm py-4'
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem
            key={index}
            className='basis-1/3'
            onClick={() => {
              handleClick(index.toString());
            }}
          >
            <LetterCard>
              <span className='text-3xl font-semibold'>{index + 1}</span>
            </LetterCard>
          </CarouselItem>
        ))}
        <CarouselItem className='basis-1/3'>
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
