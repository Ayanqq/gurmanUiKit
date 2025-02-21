import type { Meta, StoryObj } from "@storybook/react";

import { OTPInput } from "./OTPInput";

const meta = {
  component: OTPInput,
  tags: ["autodocs"],
  title: "Components/OTPInput",
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Help: Story = {
  args: {
    help: "Help text",
  },
};

export const Controlled: Story = {
  args: {
    help: "Help text",
    handleOnDone: (value) => console.log(value),
  },
};
