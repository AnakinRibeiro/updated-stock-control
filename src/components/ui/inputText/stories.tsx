import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InputText } from ".";

export default {
  title: "Form/InputText",
  component: InputText,
  tags: ["autodocs"],
  args: {
    label: "Nome",
    initialValue: "Eduardo",
    width: "medium",
    model: "primary",
    disabled: false,
    error: "",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Input label",
    },
    initialValue: {
      control: "text",
      description: "Input initial value",
    },
    width: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Defines input size",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    model: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "Defines input visual style",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Defines if input is enabled or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      control: "text",
      description: "Input error message. Changes label & border color",
    },
    onInputChange: {
      action: "inputChanged",
      description: "Action triggered when input value is changed",
    },
    itemIndex: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<typeof InputText>;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {};

export const SecondaryModel: Story = {
  args: {
    model: "secondary",
    label: "Email",
    initialValue: "exemplo@email.com",
  },
};

export const SmallSize: Story = {
  args: {
    width: "small",
    label: "CEP",
    initialValue: "12345-000",
  },
};

export const LargeSize: Story = {
  args: {
    width: "large",
    label: "Endereço completo",
    initialValue: "Rua Exemplo, 123 - Bairro Central",
  },
};

export const WithError: Story = {
  args: {
    label: "Nome",
    initialValue: "",
    error: "Campo obrigatório",
  },
};

export const Disabled: Story = {
  args: {
    label: "Telefone",
    initialValue: "(00) 0000-0000",
    disabled: true,
  },
};
