import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Graph, { ItemProps } from ".";

const mockData: ItemProps[] = [
  {
    label: "cancelled",
    qty: 1,
    value: 62.0,
    color: "bg-red-500",
  },
  {
    label: "pending",
    qty: 2,
    value: 1.31,
    color: "bg-light-black",
  },
  {
    label: "concluded",
    qty: 1,
    value: 62.0,
    color: "bg-emerald-400",
  },
];

export default {
  title: "Form/Graph",
  component: Graph,
  tags: ["autodocs"],
  args: { data: mockData },
  argTypes: {
    data: {
      description: "List of data to be displayed",
      control: { type: "object" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Horizontal chart to show a brief summary of data on a page",
      },
    },
  },
} satisfies Meta<typeof Graph>;

type Story = StoryObj<typeof Graph>;

export const Default: Story = {};
