import type { Meta, StoryObj } from "@storybook/react";
import { TableRow } from "./TableRow";
import { TableColumn } from "@/types/table";
import { SolicitationProps } from "@/types/solicitations";

const mockRow: SolicitationProps = {
  _id: "1234567890abcdef1234567890abcdef",
  createdBy: "Eduardo Oncrets",
  createdAt: new Date("2025-04-20"),
  necessaryDate: new Date("2025-05-01"),
  user: "eduardo@oncrets.com",
  type: {
    _id: "675b20dae875c2b2175a8cec",
    title: "Saída",
  },
  statusOrder: "Pendente",
  comment: [],
  qtyByItem: 0,
  items: [],
  inclusionDate: new Date("2025-03-20T18:14:51.553Z"),
  requestJustification: "",
};

const mockColumns: TableColumn<SolicitationProps>[] = [
  {
    header: "ID",
    key: "_id",
    renderFirstCell: (row) => (
      <span className="text-oncrets-primary font-medium">
        {row._id?.slice(0, 8)}
      </span>
    ),
  },
  { header: "Solicitante", key: "createdBy" },
  { header: "Criado em", key: "createdAt" },
  { header: "Data de necessidade", key: "necessaryDate" },
  {
    header: "Tipo",
    key: "type",
    renderFirstCell: (row) => (
      <span className="text-oncrets-primary font-medium">
        {row.type.title?.slice(0, 8)}
      </span>
    ),
  },
  { header: "Status", key: "statusOrder" },
];

export default {
  title: "UI/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      action: "linha clicada",
      description: "Função chamada ao clicar na linha",
    },
  },
} satisfies Meta<typeof TableRow<SolicitationProps>>;

type Story = StoryObj<typeof TableRow<SolicitationProps>>;

export const Default: Story = {
  render: () => (
    <table className="w-full border-collapse text-sm">
      <thead className="w-full">
        <tr className="h-[60px] text-center text-gray-400 w-full">
          <th>(Table Header)</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          row={mockRow}
          columns={mockColumns}
          onClick={() => alert("click")}
        />
      </tbody>
    </table>
  ),
};
