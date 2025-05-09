import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "./TableHeader";
import { TableColumn } from "@/types/table";
import { SolicitationProps } from "@/types/solicitations";

const headerItemsMock: Array<TableColumn<SolicitationProps>> = [
  {
    header: "solicitação",
    key: "_id",
  },
  {
    header: "solicitante",
    key: "createdBy",
  },
  {
    header: "criado em",
    key: "createdAt",
  },
  {
    header: "data de necessidade",
    key: "necessaryDate",
  },
  {
    header: "tipo",
    key: "type",
  },
  {
    header: "status",
    key: "statusOrder",
  },
];

export default {
  title: "UI/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Reusable table header, accepts generic columns applying the `TableColumn<T>` type",
      },
    },
  },
  argTypes: {
    columns: {
      description:
        "Array of objects to be displayed in the header. Must contain header and key.",
      table: {
        type: {
          summary: "Array<TableColumn<T>>",
        },
      },
    },
  },
} satisfies Meta<typeof TableHeader>;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  render: () => (
    <table className="w-full border-collapse">
      <TableHeader<SolicitationProps> columns={headerItemsMock} />
      <tbody>
        <tr>
          <td
            className="h-[60px] text-center text-gray-400"
            colSpan={headerItemsMock.length}
          >
            (Table body)
          </td>
        </tr>
      </tbody>
    </table>
  ),
};
