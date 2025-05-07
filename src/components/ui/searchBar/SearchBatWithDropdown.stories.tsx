import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SearchBarWithDropdown from "./SearchBarWithDropdown";

// Tipagem do item (pode ser genérico no seu projeto)
type Option = {
  id: number;
  label: string;
};

const mockOptions: Option[] = [
  { id: 1, label: "Banana" },
  { id: 2, label: "Maçã" },
  { id: 3, label: "Laranja" },
  { id: 4, label: "Uva" },
  { id: 5, label: "Melancia" },
];

// Componente wrapper que simula a lógica de digitação
const SearchWithMock = (args: any) => {
  const [options, setOptions] = useState<Option[]>([]);

  const handleSearch = (query: string) => {
    const results = mockOptions.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setOptions(results);
    args.onSearch?.(query); // dispara action se definida
  };

  return (
    <SearchBarWithDropdown<Option>
      {...args}
      options={mockOptions}
      onSearch={handleSearch}
      onSelect={(item) => {
        args.onSelect(item); // dispara action
      }}
      renderOption={(item) => <span>{item.label}</span>}
    />
  );
};

export default {
  title: "UI/SearchBarWithDropdown",
  component: SearchWithMock,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Search bar com dropdown de sugestões. Executa `onSearch` a cada digitação e permite selecionar uma opção via `onSelect`.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto do placeholder do input.",
      table: {
        type: { summary: "string" },
      },
    },
    onSearch: {
      description: "Função executada a cada caractere digitado.",
      action: "search called",
      table: {
        type: { summary: "(query: string) => void" },
      },
    },
    onSelect: {
      description: "Função executada ao selecionar um item do dropdown.",
      action: "item selected",
      table: {
        type: { summary: "(item: Option) => void" },
      },
    },
  },
  args: {
    placeholder: "Buscar frutas...",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "300px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchWithMock>;

type Story = StoryObj<typeof SearchWithMock>;

export const Default: Story = {};
