import mainLogo from '@/assets/images/mainLogo.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
const HomePage = () => {
  return (
    <main className="relative w-full h-dvh">
      <div className="h-[70%] flex  items-center justify-center">
        <Image src={mainLogo} alt="main" width={245} height={288} />
      </div>

      <Link href="/onboarding">
        <Button variant="green" className="absolute bottom-5 left-0">
          시작하기
        </Button>
      </Link>
    </main>
  );
};

export default HomePage;
