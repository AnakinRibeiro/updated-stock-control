"use client";

import { useState } from "react";

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
      <label className={`font-rubik text-black text-sm`}>{label}</label>
    </div>
  );
};
