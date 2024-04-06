import OnboardingInputForm from "@/components/features/onboarding/OnboardingInputForm";
import Link from "next/link";

const OnboardingPage = () => {
  return (
    <main>
      <OnboardingInputForm />
      <Link href="/letter/select">다음</Link>
    </main>
  );
};

export default OnboardingPage;
