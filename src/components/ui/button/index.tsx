"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "primary" | "secondary" | "logout";
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
  logout: "bg-gray text-black hover:bg-gray-300",
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
        "h-[38px] flex rounded-md items-center justify-center cursor-pointer text-[12.5px] gap-[5px] p-[10px] font-rubik transition-all duration-300",
        sizeModifiers[size],
        colorModifiers[color],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
    >
      {!!icon && icon}
      {!!title && title}
    </button>
  );
};
