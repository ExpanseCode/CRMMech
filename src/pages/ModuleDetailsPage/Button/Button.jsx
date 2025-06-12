import React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./Button.module.css";

const variantClass = {
  default: styles.default,
  destructive: styles.destructive,
  outline: styles.outline,
  secondary: styles.secondary,
  ghost: styles.ghost,
  link: styles.link,
};

const sizeClass = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  lg: styles.sizeLg,
  icon: styles.sizeIcon,
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(styles.button, variantClass[variant], sizeClass[size], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
