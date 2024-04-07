"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Tema from "@/assets/images/letter/tema1.png";

import Arrow_Left from "@/assets/images/Arrow_left.svg";
import Arrow_Right from "@/assets/images/Arrow_right.svg";
import UploadImg from "@/assets/images/upload.svg";
import EditImg from "@/assets/images/letter/edit.svg";
import Image from "next/image";

import { Button } from "@/components/ui/button";
type ItemTypes = "background" | "font" | "sticker";

interface Item {
  name: string;
  value: ItemTypes;
}
const selectItem: Item[] = [
  { name: "폰트", value: "font" },
  { name: "스티커", value: "sticker" },
  { name: "배경", value: "background" },
];
const Page = () => {
  const [tema, setTema] = useState<Item[]>([]);
  const [select, setSelect] = useState([]);

  return (
    <Card className="max-h-screen min-h-screen">
      <CardHeader className=" flex flex-row w-full h-[60px] justify-between items-center">
        <div className="flex gap-1">
          <Image className=" cursor-pointer" alt="img" src={Arrow_Left} />
          <Image className=" cursor-pointer" alt="img" src={Arrow_Right} />
        </div>
        <div>
          <Image className=" cursor-pointer" alt="img" src={UploadImg} />
        </div>
      </CardHeader>
      <div></div>
      <CardContent className="flex flex-col items-start w-full h-[448px] max-h-[448px] px-[18px] py-[20px] relative rounded-[8px] z-0">
        <div className="w-full max-w-[375px] z-10">
          <div className=" flex items-center justify-end w-full  z-10">
            <div className=" rounded-[999px] w-[56px] h-[56px] flex items-center justify-center bg-[#BDBDBD]">
              <Image
                className=" cursor-pointer w-[21.45px] h-[21.45px]"
                src={EditImg}
                alt="img"
              />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center mt-[20px]">
            <div className="flex flex-col bg-[#fff] opacity-40 rounded-[8px] w-[296px] h-[263px] px-[16px] py-[12px]">
              <span className=" text-black">To. E와I-DLE</span>
              <textarea
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
          className="w-full  px-[20px] py-[22px] flex-col justify-start"
        />
      </CardContent>
      <CardFooter>
        <Drawer className="bg-white">
          <DrawerTrigger asChild>
            <Button variant="outline">폰트설정하기</Button>
          </DrawerTrigger>
          <DrawerContent className=" bg-gray-200 w-[375px] h-[290px] mx-auto">
            <div className="mx-auto w-[375px]">
              {/* 버튼 클릭시 Drawer Content */}
              <DrawerHeader>
                <div className="w-full flex ">
                  {selectItem?.map((v: any, idx: number) => (
                    <div
                      key={"write" + idx}
                      className=" w-[125px] h-[48px] flex items-center justify-center cursor-pointer px-5 border"
                    >
                      <span>{v.name}</span>
                    </div>
                  ))}
                </div>
              </DrawerHeader>
              <div className=" w-full flex flex-wrap px-5 pt-4 gap-5">
                {["폰트1", "폰트2", "폰트3"].map((v: any, idx: number) => (
                  <div
                    key={"font" + idx}
                    className=" flex items-center justify-center w-24 h-24 bg-gray-100 cursor-pointer"
                  >
                    {v}
                  </div>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild></DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Button variant="next">완료하기</Button>
      </CardFooter>
    </Card>
  );
};
export default Page;
