import type { Meta, StoryObj } from "@storybook/react";
import Table from ".";
import { TableColumn } from "@/types/table";
import { solicitationsMock } from "@/utils/mocks";
import { SolicitationProps } from "@/types/solicitations";

const mockContent: SolicitationProps[] = [
  {
    _id: "1234567890abcdef1234567890abc001",
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
  },
  {
    _id: "1234567890abcdef1234567890abc002",
    createdBy: "Juliana Alves",
    createdAt: new Date("2025-04-21"),
    necessaryDate: new Date("2025-05-03"),
    user: "juliana@oncrets.com",
    type: {
      _id: "675b20dae875c2b2175a8cec",
      title: "Saída",
    },
    statusOrder: "Concluído",
    comment: [],
    qtyByItem: 0,
    items: [],
    inclusionDate: new Date("2025-04-01T10:00:00.000Z"),
    requestJustification: "Compra aprovada para reposição.",
  },
  {
    _id: "1234567890abcdef1234567890abc003",
    createdBy: "Carlos Mendes",
    createdAt: new Date("2025-04-22"),
    necessaryDate: new Date("2025-05-05"),
    user: "carlos@oncrets.com",
    type: {
      _id: "675b20dae875c2b2175a8cec",
      title: "Saída",
    },
    statusOrder: "Cancelado",
    comment: [],
    qtyByItem: 0,
    items: [],
    inclusionDate: new Date("2025-04-02T14:30:00.000Z"),
    requestJustification: "Solicitação cancelada por erro de digitação.",
  },
  {
    _id: "1234567890abcdef1234567890abc004",
    createdBy: "Marina Rocha",
    createdAt: new Date("2025-04-23"),
    necessaryDate: new Date("2025-05-07"),
    user: "marina@oncrets.com",
    type: {
      _id: "675b20dae875c2b2175a8cec",
      title: "Saída",
    },
    statusOrder: "Pendente",
    comment: [],
    qtyByItem: 0,
    items: [],
    inclusionDate: new Date("2025-04-03T09:45:00.000Z"),
    requestJustification: "",
  },
  {
    _id: "1234567890abcdef1234567890abc005",
    createdBy: "Rodrigo Lima",
    createdAt: new Date("2025-04-24"),
    necessaryDate: new Date("2025-05-10"),
    user: "rodrigo@oncrets.com",
    type: {
      _id: "675b20dae875c2b2175a8cec",
      title: "Saída",
    },
    statusOrder: "Concluído",
    comment: [],
    qtyByItem: 0,
    items: [],
    inclusionDate: new Date("2025-04-04T15:00:00.000Z"),
    requestJustification: "Reposição de estoque para obra X.",
  },
];

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
  title: "Composite/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    action: {
      actions: "linha clicada",
    },
  },
} satisfies Meta<typeof Table<SolicitationProps>>;

type Story = StoryObj<typeof Table<SolicitationProps>>;

export const Default: Story = {
  render: (args) => (
    <div className="p-6">
      <Table
        columns={mockColumns}
        content={mockContent}
        action={args.action ?? (() => {})}
      />
    </div>
  ),
};
