"use client";

import { useState } from "react";

import BaseSearchBar from "./BaseSearchBar";

type SearchBarProps = {
  onSubmit: (value: string) => void;
  placeholder?: string;
};

const SearchBar = ({ onSubmit, placeholder }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(value);
    }
  };

  return (
    <BaseSearchBar
      value={value}
      onChange={setValue}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
