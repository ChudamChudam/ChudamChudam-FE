'use client';

import { useState } from 'react';

import { Letter } from '@/components/features/letter/flip/letter';
import { LetterFace } from '@/components/features/letter/flip/letterFace';
import { Scene } from '@/components/features/letter/flip/scene';

export const LetterFlip = () => {
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <Scene>
      <Letter handleFlip={handleFlip} isFront={isFront}>
        <LetterFace side="front" />
        <LetterFace side="back" />
      </Letter>
    </Scene>
  );
};
