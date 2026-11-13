import type { Meta, StoryObj } from "@storybook/react-vite";

import InterestsSection from "./InterestsSection";

const meta = {
  title: "about-me/InterestsSection",
  component: InterestsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof InterestsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "My interests",
    interests: ["Programming", "Gaming", "Music", "Technology"],
  },
};

export const ManyInterests: Story = {
  args: {
    title: "Things I enjoy",
    interests: [
      "Programming",
      "Gaming",
      "Music",
      "Technology",
      "Web Development",
      "Learning new things",
    ],
  },
};

export const Empty: Story = {
  args: {
    title: "My interests",
    interests: [],
  },
};
