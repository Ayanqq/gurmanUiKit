import type { Meta, StoryObj } from "@storybook/react";

import { Footer_Mobile } from "./index";

const meta = {
  component: Footer_Mobile,
  tags: ["autodocs"],
  title: "Components/Footer_Mobile",
} satisfies Meta<typeof Footer_Mobile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
