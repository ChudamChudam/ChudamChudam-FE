"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";

import Tema from "@/assets/images/letter/tema1.png";

import Image from "next/image";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

import { Description } from "@/components/layout/description";
import { StepProgressBar } from "@/components/layout/stepProgressBar";
import Link from "next/link";

const Page = () => {
  const [select, setSelect] = useState("font"); //내가 선택하고 있는 아이템이 무엇인지.?
  const [fontItem, setFontItem] = useState<{ name: string; value: string }>({
    name: "",
    value: "",
  });
  const [sticker, setSticker] = useState<{ name: string; value: string }>({
    name: "",
    value: "",
  });
  const [background, setBackground] = useState<{ name: string; value: string }>(
    {
      name: "",
      value: "",
    }
  );
  const [letter, setLetter] = useState<[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleItemClick = (
    item: { name: string; value: string },
    type: string
  ) => {
    switch (type) {
      case "font":
        setFontItem(item);
        break;
      case "sticker":
        alert("준비중입니다.");
        break;
      case "background":
        alert("준비중입니다.");
        break;
    }
  };

  const handleSubmit = async () => {};

  return (
    <main className="relative w-full h-dvh">
      <Header prev />
      <StepProgressBar />
      <Description>추억을 담은 편지를 작성해보세요.</Description>
      <Card className="mt-6">
        <CardContent className="flex flex-col items-start w-full h-[448px] max-h-[448px] px-[18px] py-[20px] relative rounded-[8px] z-0">
          <div className="w-full max-w-[375px] z-10">
            <div className=" flex items-center justify-end w-full  z-10">
              {/* <div className=" rounded-[999px] w-[56px] h-[56px] flex items-center justify-center bg-[#BDBDBD]">
              <Image
                className=" cursor-pointer w-[21.45px] h-[21.45px]"
                src={EditImg}
                alt="img"
              />
            </div> */}
            </div>

            <div className="w-full flex flex-row items-center justify-center mt-[20px]">
              <div className="flex flex-col bg-[#fff] bg-opacity-75 rounded-[8px] w-[296px] h-[263px] px-[16px] py-[12px]">
                <span className=" text-black">To. E와I-DLE</span>
                <textarea
                  ref={inputRef}
                  placeholder="추억을 담은 편지를 작성해보세요"
                  maxLength={300}
                  className=" resize-none border-none h-[170px] mt-[13px] outline-none"
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
      {/* <Drawer>
        <DrawerTrigger asChild>
         
        </DrawerTrigger>
        <DrawerContent className=" bg-pink-sub w-[375px] h-[290px] mx-auto">
          <div className="mx-auto w-[375px]">
            <DrawerHeader>
              <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-700" />
              <div className="w-full flex mt-4">
                {SelectItem?.map((v: ItemType, idx: number) => (
                  <div
                    onClick={() => setSelect(v.value)}
                    key={v.name + idx + 1}
                    className=" w-[125px] h-[48px] flex items-center justify-center cursor-pointer px-5"
                  >
                    <span>{v.name}</span>
                  </div>
                ))}
              </div>
            </DrawerHeader>
            <div className=" w-full flex flex-wrap px-5 pt-4 gap-5">
              {select === "font" &&
                FontItem.map((v: FontItemType, idx: number) => (
                  <div
                    onClick={() => handleItemClick(v, "font")}
                    key={v.name + idx + 1}
                    className={`flex items-center justify-center w-24 h-24 bg-gray-100 bg-opacity-50 cursor-pointer font-${v.value}`}
                  >
                    {v.name}
                  </div>
                ))}
              {select === "sticker" &&
                ["스티커1", "스티커2", "스티커3"].map(
                  (v: string, idx: number) => (
                    <div
                      onClick={() => alert("준비중입니다.")}
                      key={v + idx + 1}
                      className=" flex items-center justify-center w-24 h-24 bg-gray-100 bg-opacity-50 cursor-pointer"
                    >
                      {v}
                    </div>
                  )
                )}
              {select === "background" &&
                ["배경1", "배경2", "배경3"].map((v: string, idx: number) => (
                  <div
                    onClick={() => alert("준비중입니다.")}
                    key={v + idx}
                    className=" flex items-center justify-center w-24 h-24 bg-gray-100 bg-opacity-50 cursor-pointer"
                  >
                    {v}
                  </div>
                ))}
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button className=" mt-[14px] px-5" variant={"yellow"}>
                  적용하기
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer> */}

      <div className="w-full absolute bottom-5 flex flex-col gap-2 ">
        <Button variant="yellow">폰트설정하기</Button>
        <Link href={`/letter/id`} className="w-full">
          <Button onClick={() => handleSubmit()} variant="next">
            완료
          </Button>
        </Link>
      </div>
    </main>
  );
};
export default Page;
