import type { Meta, StoryObj } from "@storybook/react";

import { Footer_Tablet } from "./index";

const meta = {
  component: Footer_Tablet,
  tags: ["autodocs"],
  title: "Components/Footer",
} satisfies Meta<typeof Footer_Tablet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
