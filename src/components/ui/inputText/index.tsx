"use client";

import { useState, InputHTMLAttributes } from "react";
import clsx from "clsx";

type OnInputChangeProps = (value: string, index: number) => void;
export type InputTextProps = {
  label?: string;
  width?: "small" | "medium" | "large";
  model?: "primary" | "secondary";
  initialValue?: string;
  onInputChange?: OnInputChangeProps;
  disabled?: boolean;
  error?: string;
  itemIndex?: number;
} & InputHTMLAttributes<HTMLInputElement>;

const sizeModifiers = {
  small: "w-[150px]",
  medium: "w-[250px]",
  large: "w-[350px]",
};

const inputModifiers = {
  primary: "pb-[6px] border-b border-gray-400 mt-[30px] focus:outline-none",
  secondary: "h-[32px] rounded-md border border-gray-200 pl-[6px]",
};

export const InputText = ({
  label,
  width = "medium",
  model = "primary",
  initialValue = "",
  onInputChange,
  disabled,
  error,
  itemIndex = 0,
  ...props
}: InputTextProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    if (onInputChange) {
      onInputChange(newValue, itemIndex);
    }
  };

  return (
    <div className={`font-rubik flex flex-col text-base text-gray-500`}>
      {!!label && (
        <label htmlFor="inputLabel" className={`${!!error && "text-red-400"}`}>
          {label}
        </label>
      )}

      <input
        type="text"
        id="inputLabel"
        onChange={onChange}
        disabled={disabled}
        value={value}
        {...props}
        className={clsx(
          sizeModifiers[width],
          inputModifiers[model],
          !!error && "border-b border-red-400",
          disabled && "text-gray-200 cursor-not-allowed"
        )}
      />

      {!!error && <p className="text-red-400 text-base mt-[4px]">{error}</p>}
    </div>
  );
};
