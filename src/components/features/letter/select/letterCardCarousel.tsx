'use client';

import Image from 'next/image';

import { useLetterStore } from '@/store/letterStore';
import { LETTER_IMAGES } from '@/constants/letterImages';
import { LetterCard } from '@/components/features/letter/select/letterCard';
import { UploadImage } from '@/components/features/letter/select/uploadImage';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export const LetterCardCarousel = () => {
  // TODO: 편지지 디자인이 완료되면 수정하기

  const setSelected = useLetterStore((state) => state.setSelected);

  const handleClick = (image: string) => {
    const numberRegExp = /[\d]+/;
    const backImage = `/letter-back-${image.match(numberRegExp)?.[0]}.svg`;
    setSelected(backImage);
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
        {LETTER_IMAGES.map((image) => {
          return (
            <CarouselItem className="pl-4" key={image}>
              <LetterCard>
                <Image
                  src={image}
                  width={128}
                  height={128}
                  alt={image}
                  onClick={() => {
                    handleClick(image);
                  }}
                />
              </LetterCard>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
