import type { Meta, StoryObj } from "@storybook/react-vite";

import TechnologiesSection from "./TechnologiesSection";

const meta = {
  title: "about-me/TechnologiesSection",
  component: TechnologiesSection,
  tags: ["autodocs"],
} satisfies Meta<typeof TechnologiesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Technologies I use",
    technologies: ["React", "TypeScript", "JavaScript", "Git"],
  },
};

export const ManyTechnologies: Story = {
  args: {
    title: "My technologies",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
      "Node.js",
    ],
  },
};

export const Empty: Story = {
  args: {
    title: "Technologies I use",
    technologies: [],
  },
};
