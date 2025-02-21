import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./";

const meta = {
  component: Typography,
  tags: ["autodocs"],
  title: "Components/Typography",
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Пример текста",
  },
};

export const Xl = {
  args: {
    asChild:true,
    children: <h1>Заголовок h1</h1>,
    variant: 'regular18'
  }
}
