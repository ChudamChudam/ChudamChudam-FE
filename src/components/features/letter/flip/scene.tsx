import styles from '@/components/features/letter/flip/letterFlip.module.css';

export const Scene = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.scene}>{children}</div>;
};
