import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    title: "Teste",
    color: "primary",
    size: "medium",
    onClick: fn(),
    isDisabled: false,
  },
  argTypes: {
    title: {
      control: "text",
      description: "Text shown inside the button",
    },
    color: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "Defines button color",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Defines button size",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    icon: {
      control: false,
      description: "Optional icon shown inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Action triggered when the button is clicked",
    },
    isDisabled: {
      control: "boolean",
      description: "Desabilita o botão",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    color: "primary",
    title: "Botão Primário",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    title: "Botão Secundário",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    title: "Desabilitado",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    title: "Pequeno",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    title: "Grande",
  },
};
