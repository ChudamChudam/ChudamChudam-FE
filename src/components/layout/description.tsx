export const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='font-bold w-full py-[11px] text-[24px] select-none'>
      {children}
    </h1>
  );
};
