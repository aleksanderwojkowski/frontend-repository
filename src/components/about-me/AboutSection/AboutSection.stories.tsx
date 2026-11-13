import type { Meta, StoryObj } from "@storybook/react-vite";

import AboutSection from "./AboutSection";

const meta = {
  title: "about-me/AboutSection",
  component: AboutSection,
  tags: ["autodocs"],
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "About me",
    description:
      "I am a beginner frontend developer interested in web development and modern technologies.",
  },
};

export const LongDescription: Story = {
  args: {
    title: "A little more about me",
    description:
      "I enjoy learning new programming languages, exploring modern technologies and creating interesting web applications.",
  },
};
