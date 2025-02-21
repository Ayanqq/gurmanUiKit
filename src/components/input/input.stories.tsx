import type { Meta, StoryObj } from "@storybook/react";

import { useEffect, useRef, useState } from "react";

import { Input } from "./input";

const meta = {
  component: Input,
  tags: ["autodocs"],
  title: "Components/Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder text",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "Epam@epam.com",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "**********",
    type: "password",
  },
};

export const Error: Story = {
  args: {
    error: "Error text",
    label: "Label text",
    placeholder: "Placeholder text",
  },
};

export const Help: Story = {
  args: {
    label: "Text with help",
    placeholder: "Placeholder text",
    help: "Help text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled text variation",
    placeholder: "Disabled text!",
    help: "Help text",
  },
};

export const Controlled: Story = {
  args: {
    label: "Label text",
    placeholder: "Placeholder text",
  },
  render: (args) => {
    const [value, setValue] = useState("useState text");

    return (
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        {...args}
      />
    );
  },
};

export const Ref: Story = {
  args: {
    label: "Label text",
    placeholder: "Placeholder text",
  },
  render: (args) => {
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (ref.current) {
        console.log("Ref element:", ref.current);
        // Пример изменения стиля для демонстрации работы с ref
        ref.current.style.border = "2px solid green";
      }
    }, []);

    return <Input {...args} ref={ref} />;
  },
};
