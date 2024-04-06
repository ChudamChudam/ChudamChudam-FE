import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

const typographyVariants = cva("whitespace-pre-line text-wrap", {
  variants: {
    type: {
      heading1: "text-[20px] font-bold leading-[145%]",
      heading2: "text-[16px] font-medium leading-[145%]",
      body: "text-[14px] font-medium leading-[155%]",
      label1: "text-[16px] font-medium leading-[155%]",
      label2: "text-[14px] leading-[155%]",
    },
  },
  defaultVariants: {
    type: "body",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <p
        className={typographyVariants({ type, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";
