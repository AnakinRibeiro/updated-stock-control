import { TableProps } from "@/types/table";
import { TableRow } from "@/components/ui/table/TableRow";
import { TableHeader } from "@/components/ui/table/TableHeader";

const Table = <T,>({ columns, content, action }: TableProps<T>) => {
  return (
    <table className="w-full border-collapse">
      <TableHeader columns={columns} />
      <tbody>
        {content.map((row, i) => (
          <TableRow key={i} row={row} columns={columns} onClick={action} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
