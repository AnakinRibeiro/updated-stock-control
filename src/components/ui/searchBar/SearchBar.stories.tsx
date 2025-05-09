import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "UI/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  args: {
    onSubmit: (value: string) => alert(`Busca: ${value}`),
    placeholder: "Buscar algo...",
  },
  argTypes: {
    placeholder: {
      description: "Text displayed before something is typed",
      control: "text",
    },
    onSubmit: {
      description:
        "Function executed when the Enter key is pressed. Receives the value entered as arg",
      action: "submitted",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A simple search bar that performs an action when you press Enter",
      },
    },
  },
} satisfies Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
