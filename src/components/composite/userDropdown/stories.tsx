import type { Meta, StoryObj } from "@storybook/react";
import { UserDropdown } from "../userDropdown";

const userDataMock = {
  id: "user",
  email: "eduardo@oncrets.com",
  name: "Eduardo Rodrigues Ribeiro",
  role: "admin",
  companyId: "608312c9058224877052067d",
  image: {
    originalName: "blob",
    mimetype: "image/jpeg",
    size: 42013,
    location:
      "https://oncrets-files.s3.amazonaws.com/oncrets/companies/608312c9058224877052067d/users/5f9ecbde-566d-45e3-948a-24310a89b083/6e764d93505eaf15615864c26aaec3a0-blob",
    key: "6e764d93505eaf15615864c26aaec3a0-blob",
    Key: "oncrets/companies/608312c9058224877052067d/users/5f9ecbde-566d-45e3-948a-24310a89b083/6e764d93505eaf15615864c26aaec3a0-blob",
  },
};

export default {
  title: "Composite/UserDropdown",
  component: UserDropdown,
  tags: ["autodocs"],
  args: {
    userData: userDataMock,
  },
} satisfies Meta<typeof UserDropdown>;

type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {
  render: (args) => (
    <div className="w-auto flex justify-center">
      <UserDropdown {...args} />
    </div>
  ),
};
