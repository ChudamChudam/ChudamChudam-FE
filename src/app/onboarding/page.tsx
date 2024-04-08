import OnboardingInputForm from '@/components/features/onboarding/OnboardingInputForm';
import { Description } from '@/components/layout/description';
import { Header } from '@/components/layout/header';
import { StepProgressBar } from '@/components/layout/stepProgressBar';

const OnboardingPage = () => {
  return (
    <main className="relative w-full h-dvh">
      <Header prev />
      <StepProgressBar />
      <Description>누구에게 편지를 쓰나요?!</Description>

      <OnboardingInputForm />
    </main>
  );
};

export default OnboardingPage;
