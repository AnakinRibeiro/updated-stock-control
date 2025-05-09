import type { Meta, StoryObj } from "@storybook/react";
import { SidebarItem } from ".";

export default {
  title: "UI/SidebarItem",
  component: SidebarItem,
  tags: ["autodocs"],
  args: {
    children: "Home",
    icon: "home",
    href: "/",
    collapsed: false,
  },
  argTypes: {
    children: {
      control: "text",
      description: "Text displayed insided the button",
      table: {
        type: { summary: "string" },
      },
    },
    icon: {
      description: "Visual icon to be displayed inside the button",
      control: {
        type: "select",
        options: [
          "home",
          "solicitations",
          "products",
          "stocks",
          "settings",
          "support",
        ],
      },
      table: {
        type: {
          summary: `"home" | "solicitations" | "products" | "stocks" | "settings" | "support"`,
        },
      },
    },
    href: {
      description: "Destination route",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    collapsed: {
      description:
        "Defines whether the full version with icon and text or the version with only icon will be displayed.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isActive: {
      description:
        "Sets whether the button is active (the current route is the same as the button)",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof SidebarItem>;

type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col w-3xs p-[12px]">
      <SidebarItem {...args} />
    </div>
  ),
};

export const Active: Story = {
  args: {
    isActive: true,
  },
  render: (args) => (
    <div className="flex flex-col w-3xs p-[12px]">
      <SidebarItem {...args} />
    </div>
  ),
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
  render: (args) => (
    <div className="flex flex-col w-[65px] p-[12px] justify-between">
      <SidebarItem {...args} />
    </div>
  ),
};

export const ActiveAndCollapsed: Story = {
  args: {
    isActive: true,
    collapsed: true,
  },
  render: (args) => (
    <div className="flex flex-col w-[65px] p-[12px] justify-between">
      <SidebarItem {...args} />
    </div>
  ),
};
