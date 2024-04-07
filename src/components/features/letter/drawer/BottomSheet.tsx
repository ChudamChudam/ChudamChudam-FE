import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { FontItem, FontItemType, ItemType, SelectItem } from '@/constants/write';
import React from 'react';

interface DrawerProps {
  handleSelectItem: (selectItem: string) => void;
  select: string;
  handleItemClick: (selectItem: { name: string; value: string }, type: string) => void;
}
const BottomSheet = (props: DrawerProps) => {
  const { handleSelectItem, select, handleItemClick } = props;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="yellow">폰트설정하기</Button>
      </DrawerTrigger>
      <DrawerContent className=" bg-pink-sub w-[375px] h-[320px] mx-auto">
        <div className="mx-auto w-[375px]">
          <DrawerHeader>
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-700" />
            <div className="w-full flex  mt-4">
              {SelectItem?.map((selectItem: ItemType, idx: number) => (
                <div
                  onClick={() => handleSelectItem(selectItem.value)}
                  key={selectItem.name + idx + 1}
                  className={`w-[125px] h-[48px] flex items-center justify-center cursor-pointer px-5 border-solid flex-col`}
                >
                  <span>{selectItem.name}</span>

                  {select === selectItem.value ? (
                    <div className=" border-b-2 border-black  w-20 rounded-[8px] mt-[15px]"></div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </DrawerHeader>
          <div className=" w-full flex flex-wrap px-5 pt-4 gap-5">
            {select === 'font' &&
              FontItem.map((fontItem: FontItemType, idx: number) => (
                <div
                  onClick={() => handleItemClick(fontItem, 'font')}
                  key={fontItem.name + idx + 1}
                  className={`flex items-center justify-center w-24 h-24 bg-gray-100 bg-opacity-50 cursor-pointer font-${fontItem.value}`}
                >
                  {fontItem.name}
                </div>
              ))}
            {select === 'sticker' &&
              ['스티커1', '스티커2', '스티커3'].map((stickerItem: string, idx: number) => (
                <div
                  onClick={() => alert('준비중입니다.')}
                  key={stickerItem + idx + 1}
                  className=" flex items-center justify-center w-24 h-24 bg-gray-100 bg-opacity-50 cursor-pointer"
                >
                  {stickerItem}
                </div>
              ))}
            {select === 'background' &&
              ['배경1', '배경2', '배경3'].map((backgroundItem: string, idx: number) => (
                <div
                  onClick={() => alert('준비중입니다.')}
                  key={backgroundItem + idx}
                  className=" flex items-center justify-center w-24 h-24 bg-gray-100 bg-opacity-50 cursor-pointer"
                >
                  {backgroundItem}
                </div>
              ))}
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button className=" mt-[14px] px-5" variant={'yellow'}>
                적용하기
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomSheet;
