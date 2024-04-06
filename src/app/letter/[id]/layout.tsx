import { Metadata } from "next";
import { PropsWithChildren } from "react";

import KakaoScript from "@/components/layout/KakaoScript";
import { META } from "@/constants/metadata";

export const metadata: Metadata = META;

const TestResultPage = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <KakaoScript />
    </div>
  );
};

export default TestResultPage;
