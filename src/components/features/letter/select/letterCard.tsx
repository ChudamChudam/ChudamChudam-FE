import { Card, CardContent } from '@/components/ui/card';

export const LetterCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="w-32 h-32 cursor-pointer border-dashed border-gray-600 bg-transparent box-border">
      <CardContent className="flex w-full h-full justify-center items-center p-0">
        {children}
      </CardContent>
    </Card>
  );
};
