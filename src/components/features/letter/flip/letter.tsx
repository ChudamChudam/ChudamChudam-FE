import clsx from 'clsx';

import styles from '@/components/features/letter/flip/letterFlip.module.css';

interface LetterProps {
  children: React.ReactNode;
  handleFlip: () => void;
  isFront: boolean;
}

export const Letter = ({ children, handleFlip, isFront }: LetterProps) => {
  return (
    <div
      onClick={handleFlip}
      className={clsx(styles.card, !isFront && styles['is-flipped'])}
    >
      {children}
    </div>
  );
};
