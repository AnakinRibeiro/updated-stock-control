"use client";

import { Search } from "lucide-react";

type BaseSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

const BaseSearchBar = ({
  value,
  onChange,
  onKeyDown,
  placeholder = "Procurar",
  inputRef,
}: BaseSearchBarProps) => {
  return (
    <div className="flex relative w-[323px] h-[40px] items-center">
      <Search size={16} className="z-1 ml-[10px] text-light-black" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        title="search-bar"
        className="absolute z-0 w-full h-[40px] border border-gray-200 bg-light-gray rounded-full pl-[32px] font-rubik text-[12.5px] text-black"
      />
    </div>
  );
};

export default BaseSearchBar;
