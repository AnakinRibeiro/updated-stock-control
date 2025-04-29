"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

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
  primary: "bg-[#006db6] text-white border-none hover:bg-[#00548d]",
  secondary: "bg-white text-[#006db6] border border-[#006db6]",
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
        "h-[40px] flex rounded-md items-center justify-center cursor-pointer text-[14px] gap-[4px] p-[10px]",
        sizeModifiers[size],
        colorModifiers[color],
        isDisabled && "opacity-50 cursor-not-allowed",
        rubik.className
      )}
    >
      {!!icon && icon}
      {!!title && title}
    </button>
  );
};
