import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import StockLabel from ".";

export default {
  title: "UI/StockLabel",
  component: StockLabel,
  tags: ["autodocs"],
  args: {
    status: "inStock",
  },
  argTypes: {
    status: {
      control: "radio",
      options: ["inStock", "lowStock", "outOfStock"],
      description: "Product stock status",
      table: {
        type: { summary: "inStock | lowStock | outOfStock" },
        defaultValue: { summary: "inStock" },
      },
    },
  },
} satisfies Meta<typeof StockLabel>;

type Story = StoryObj<typeof StockLabel>;

export const Default: Story = {};
