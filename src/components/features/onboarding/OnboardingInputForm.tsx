"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useLetterStore } from "@/store/letterStore";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const OnboardingInputForm = () => {
  const router = useRouter();
  const sender = useLetterStore((state) => state.sender);
  const receiver = useLetterStore((state) => state.receiver);
  const updateReceiver = useLetterStore((state) => state.setReceiver);
  const updateSender = useLetterStore((state) => state.setSender);
  const isAllValid = sender && receiver;

  return (
    <section className="flex flex-col gap-8 pt-7">
      <div>
        <Label className="text-gray-500">TO.</Label>
        <Input
          placeholder="받는 이의 이름을 알려주세요."
          value={receiver}
          onChange={(e) => updateReceiver(e.target.value)}
        />
      </div>
      <div>
        <Label className="text-gray-500">FROM.</Label>
        <Input
          value={sender}
          placeholder="당신의 이름을 알려주세요."
          onChange={(e) => updateSender(e.target.value)}
        />
      </div>

      <Button
        variant="secondary"
        className={clsx(
          `absolute bottom-5 w-full`,
          !isAllValid && "cursor-not-allowed opacity-50"
        )}
        onClick={() => {
          isAllValid && router.push("letter/select");
        }}
      >
        다음
      </Button>
    </section>
  );
};

export default OnboardingInputForm;
