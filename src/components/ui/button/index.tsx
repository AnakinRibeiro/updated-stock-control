"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
};

const sizeModifiers = {
  small: "w-[150px]",
  medium: "w-[250px]",
  large: "w-[350px]",
};

const colorModifiers = {
  primary: "bg-oncrets-primary text-white border-none hover:bg-oncrets-darker",
  secondary: "bg-white text-oncrets-primary border border-oncrets-primary",
};

export const Button = ({
  color,
  size = "medium",
  title,
  icon,
  onClick,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "h-[40px] flex rounded-md items-center justify-center cursor-pointer text-[14px] gap-[4px] p-[10px] font-rubik",
        sizeModifiers[size],
        colorModifiers[color],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {!!icon && icon}
      {!!title && title}
    </button>
  );
};
