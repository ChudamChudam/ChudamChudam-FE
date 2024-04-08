import type { Metadata } from 'next';
import './globals.css';

import { pretendard } from './fonts';

export const metadata: Metadata = {
  title: '추담추담',
  description: '추억을 담고 추억을 담다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>
        <div className="layout font-pretendard bg-[url('/letter-background.svg')] bg-cover">
          {children}
        </div>
      </body>
    </html>
  );
}
