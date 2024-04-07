'use client';

import { getLetterResult } from '@/app/api';
import { LetterResultType } from '@/types/letter';
import { useEffect, useState } from 'react';

export const useGetLetterResult = (id: number) => {
  const [data, setData] = useState<LetterResultType | undefined>(undefined);

  useEffect(() => {
    const fetchLetterResult = async () => {
      const data = await getLetterResult(id);
      setData(data);
    };

    fetchLetterResult();
  }, []);

  return { data };
};
