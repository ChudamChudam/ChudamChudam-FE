import { Card, CardContent } from '@/components/ui/card';

export function LetterCard({ children }: { children: React.ReactNode }) {
  // TODO: 너비, 높이 수정
  return (
    <Card className='w-[100px] h-[128px] hover:bg-gray-200 cursor-pointer'>
      <CardContent className='flex w-full h-full justify-center items-center'>
        {children}
      </CardContent>
    </Card>
  );
}
