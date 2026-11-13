import type { Meta, StoryObj } from "@storybook/react-vite";

import ProfileHeader from "./ProfileHeader";

const meta = {
  title: "about-me/ProfileHeader",
  component: ProfileHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Aleksander Wojkowski",
    description: "Frontend Developer learning React and TypeScript.",
  },
};

export const LongName: Story = {
  args: {
    name: "AleksanderVeryLongNameWithoutSpaces",
    description: "Frontend Developer",
  },
};
