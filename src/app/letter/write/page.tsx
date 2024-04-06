import React from "react";
import { spacing } from "./../../../styles/theme/spacing";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import tema from "@/assets/images/letter/tema1.png";

import Arrow_left from "@/assets/images/Arrow_left.svg";
import Arrow_right from "@/assets/images/Arrow_right.svg";
import uploadimg from "@/assets/images/upload.svg";
import edit from "@/assets/images/letter/edit.svg";
import Image from "next/image";

import { AvatarImage, Avatar } from "@/components/ui/avatar";

const Page = () => {
  return (
    <Card className="max-h-screen min-h-screen">
      <CardHeader className=" flex flex-row w-full h-[60px] justify-between items-center">
        <div className="flex gap-1">
          <Image className=" cursor-pointer" alt="img" src={Arrow_left} />
          <Image className=" cursor-pointer" alt="img" src={Arrow_right} />
        </div>
        <div>
          <Image className=" cursor-pointer" alt="img" src={uploadimg} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start w-full h-[448px] max-h-[448px] px-[18px] py-[20px] relative rounded-[8px] z-0">
        <div className=" flex items-center justify-end w-full absolute z-10">
          <div className=" rounded-[999px] w-[56px] h-[56px] flex items-center justify-center bg-[#BDBDBD]">
            <Image src={edit} alt="img" />
          </div>
        </div>
        <div>
          <span>To. E와I-DLE</span>
        </div>
        <Image
          alt="tema"
          src={tema}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full  px-[20px] py-[22px] flex-col justify-start"
        />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
export default Page;
