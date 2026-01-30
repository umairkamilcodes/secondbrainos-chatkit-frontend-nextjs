import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("tracking-tight", {
  variants: {
    level: {
      h1: "text-5xl md:text-6xl lg:text-8xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl",
      h4: "text-xl md:text-2xl",
    },
    variant: {
      default: "text-foreground",
      primary: "text-primary",
      muted: "text-muted-foreground",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    level: "h2",
    variant: "default",
    weight: "extrabold",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** The heading level to render (h1-h4). Defaults to h2. */
  level?: HeadingLevel;
  /** Render as a different element while keeping styles. Useful for semantic flexibility. */
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", variant, weight, as, children, ...props }, ref) => {
    const Component = as ?? level;

    return React.createElement(
      Component,
      {
        ref,
        className: cn(headingVariants({ level, variant, weight, className })),
        ...props,
      },
      children
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
