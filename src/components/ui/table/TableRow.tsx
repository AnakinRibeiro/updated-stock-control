"use client";

import { TableColumn } from "@/types/table";

type Props<T> = {
  row: T;
  columns: TableColumn<T>[];
  onClick: (row: T) => void;
};

export function TableRow<T>({ row, columns, onClick }: Props<T>) {
  return (
    <tr className="h-[65px] cursor-pointer" onClick={() => onClick(row)}>
      {columns.map((column, i) => {
        const rawValue = row[column.key];
        const value =
          typeof rawValue === "string" ? rawValue : String(rawValue);

        const displayValue =
          value.length > 32 ? `${value.slice(0, 32)}...` : value;

        return (
          <td
            className="px-[20px] py-[10px] text-left border-b border-gray font-rubik text-[12.5px] text-black"
            key={i}
          >
            {column.renderFirstCell
              ? column.renderFirstCell(row)
              : displayValue}
          </td>
        );
      })}
    </tr>
  );
}
