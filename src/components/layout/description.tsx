import { Typography } from "../ui/Typography";

export const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography type="heading1" className="select-none">
      {children}
    </Typography>
  );
};
