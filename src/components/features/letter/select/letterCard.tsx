import { Card, CardContent } from '@/components/ui/card';

export const LetterCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className='box-border w-[128px] h-[128px] hover:bg-gray-200 cursor-pointer border-gray-300'>
      <CardContent className='flex w-full h-full justify-center items-center p-0'>
        {children}
      </CardContent>
    </Card>
  );
};
