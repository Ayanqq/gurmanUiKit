import type { Meta, StoryObj } from "@storybook/react";

import { Footer_PC } from "./index";

const meta = {
  component: Footer_PC,
  tags: ["autodocs"],
  title: "Components/Footer",
} satisfies Meta<typeof Footer_PC>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
