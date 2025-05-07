"use client";

import { useState, useEffect, useRef } from "react";
import SearchBarBase from "./BaseSearchBar";

import { ClickAwayListener } from "@mui/material";

type SearchBarWithDropdownProps<T> = {
  onSearch: (query: string) => void;
  onSelect: (item: T) => void;
  options: T[];
  placeholder?: string;
  renderOption: (item: T) => React.ReactNode;
};

const SearchBarWithDropdown = <T,>({
  onSearch,
  onSelect,
  options,
  placeholder,
  renderOption,
}: SearchBarWithDropdownProps<T>) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(options.length > 0);

  useEffect(() => {
    onSearch(value);
  }, [value]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative w-[323px]">
        <SearchBarBase
          value={value}
          onChange={setValue}
          placeholder={placeholder}
        />

        {open && (
          <ul className="absolute top-[44px] left-0 w-full bg-white border border-gray-200 rounded-md shadow-md z-[9999999999] max-h-[200px] overflow-auto">
            {options.map((item, i) => (
              <li
                key={i}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm font-rubik"
                onClick={() => {
                  onSelect(item);
                  setOpen(false);
                }}
              >
                {renderOption(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBarWithDropdown;
