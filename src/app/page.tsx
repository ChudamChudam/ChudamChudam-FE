import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="relative w-full h-dvh">
      <div>
        {/* //TODO : 서비스 설명 gif 카드 */}
        <div className="mx-5">
          <Typography type="heading1" className="pt-20 mb-20 text-center">
            서비스 이름
          </Typography>

          <article className="h-96 bg-gray-200">
            <p>서비스 설명 카드</p>
          </article>
        </div>
        <Link href="/onboarding">
          <Button variant="secondary" className="absolute bottom-5">
            시작하기
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
