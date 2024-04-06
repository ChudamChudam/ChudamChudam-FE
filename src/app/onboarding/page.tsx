import OnboardingInputForm from "@/components/features/onboarding/OnboardingInputForm";
import { Description } from "@/components/layout/description";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OnboardingPage = () => {
  return (
    <main className="relative w-full h-dvh">
      <Header prev />
      <Description>누구에게 편지를 쓰나요?!</Description>

      <OnboardingInputForm />

      <Link href="/letter/select">
        <Button variant="secondary" className="absolute bottom-5">
          다음
        </Button>
      </Link>
    </main>
  );
};

export default OnboardingPage;
