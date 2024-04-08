import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/assets/images/main-logo.svg';

const HomePage = () => {
  return (
    <main className="relative w-full h-dvh flex flex-col items-center justify-center">
      <Logo />
      <Link href="/onboarding">
        <Button variant="green" className="absolute bottom-5 left-0">
          시작하기
        </Button>
      </Link>
    </main>
  );
};

export default HomePage;
