import { TableColumn } from "@/types/table";

type Props<T> = {
  columns: TableColumn<T>[];
};

export function TableHeader<T>({ columns }: Props<T>) {
  return (
    <thead className="bg-gray h-[45px]">
      <tr>
        {columns.map((col, i) => (
          <th
            key={i}
            className={`
                px-[20px] py-[10px] text-left text-[12.5px] uppercase text-black
                font-rubik font-light
                ${i === 0 && "rounded-tl-lg rounded-bl-lg"}
                ${i === columns.length - 1 && "rounded-tr-lg rounded-br-lg"}
              `}
          >
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
