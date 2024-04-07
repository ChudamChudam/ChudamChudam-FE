'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
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
      className="py-6"
    >
      <CarouselContent className="-ml-4">
        <CarouselItem className="pl-4">
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
        <CarouselItem className="pl-4">
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
        <CarouselItem className="pl-4">
          <LetterCard>
            <UploadImage />
          </LetterCard>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
