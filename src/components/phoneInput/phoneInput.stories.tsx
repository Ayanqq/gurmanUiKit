import type { Meta, StoryObj } from "@storybook/react";

// import { useEffect, useRef, useState } from "react";

import { PhoneInput } from "./phoneInput";
// import { PhoneInputRefType } from "react-international-phone";

const meta = {
  component: PhoneInput,
  tags: ["autodocs"],
  title: "Components/PhoneInput",
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Введите ваш номер",
  },
};

export const Label: Story = {
  args: {
    label: "Номер телефона",
    placeholder: "Введите ваш номер",
  },
};

// export const Controlled: Story = {
//   args: {
//     label: "Ваш номер телефона",
//     placeholder: "Введите ваш номер телефона",
//   },
//   render: (args) => {
//     const [value, setValue] = useState("");

//     return (
//       <PhoneInput
//         onChange={(e) => setValue(e.target.value)}
//         value={value}
//         {...args}
//       />
//     );
//   },
// };

// export const Ref: Story = {
//   args: {
//     label: "Label text",
//     placeholder: "Placeholder text",
//   },
//   render: (args) => {
//     const ref = useRef<PhoneInputRefType | null>(null);

//     useEffect(() => {
//       if (ref.current) {
//         console.log("Ref element:", ref.current.value);
//         // Пример изменения стиля для демонстрации работы с ref
//       }
//     }, []);

//     return <PhoneInput {...args} ref={ref} />;
//   },
// };
