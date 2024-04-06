import { Card, CardContent } from '@/components/ui/card';

export const LetterCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className='w-[100px] h-[128px] hover:bg-gray-200 cursor-pointer'>
      <CardContent className='flex w-full h-full justify-center items-center'>
        {children}
      </CardContent>
    </Card>
  );
};
