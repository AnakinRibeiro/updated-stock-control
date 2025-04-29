"use client";

import { Rubik } from "next/font/google";
import { useState } from "react";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export type CheckboxProps = {
  label: string;
  onInputChange: (value: boolean) => void;
  checked: boolean;
};

export const Checkbox = ({ label, onInputChange, checked }: CheckboxProps) => {
  const [value, setValue] = useState(checked);

  const handleCheck = (e: boolean) => {
    setValue(e);
    onInputChange(e);
  };

  return (
    <div className="flex items-center gap-[8px]">
      <input
        type="checkbox"
        id="checkbox"
        onChange={(e) => handleCheck(e.target.checked)}
        checked={value}
      />
      <label className={`${rubik.className} text-slate-800 text-sm`}>
        {label}
      </label>
    </div>
  );
};
