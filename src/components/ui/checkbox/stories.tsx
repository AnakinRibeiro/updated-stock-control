import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from ".";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Remember Password",
    onInputChange: fn(),
    checked: false,
  },
  argTypes: {
    label: {
      control: "text",
      description: "Checkbox label",
    },
    onInputChange: {
      action: "inputChanged",
      description: "Action triggered when input value is changed",
    },
    checked: {
      control: "boolean",
      description: "Defines if checkbox is checked or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
