import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";

const OnboardingInputForm = () => {
  return (
    <section className="flex flex-col gap-8 pt-7">
      <div>
        <Label className="text-gray-500">TO.</Label>
        <Input placeholder="받는 이의 이름을 알려주세요." />
      </div>
      <div>
        <Label className="text-gray-500">FROM.</Label>
        <Input placeholder="당신의 이름을 알려주세요." />
      </div>
    </section>
  );
};

export default OnboardingInputForm;
