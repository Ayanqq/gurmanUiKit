import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./textarea";

const meta = {
  component: Textarea,
  tags: ["autodocs"],
  title: "Components/Textarea",
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    labelText: "Text-area",
    placeholder: "Text-area",
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    error: true,
    errorText: "Error text",
    labelText: "Text-area",
    placeholder: "Placeholder text",
  },
};

export const Help: Story = {
  args: {
    help: "Help text",
    labelText: "Text-area",
    placeholder: "Placeholder text",
  },
};
