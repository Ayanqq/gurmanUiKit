import type {Meta, StoryObj} from "@storybook/react";

import {Typography} from "./";
import {YoutubeIcon} from "../../assets/icons/outline";

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

export const text9Xl = {
    args: {
        asChild: true,
        children: <h1>Заголовок h1</h1>,
        size: '128'
    }
}

export const text8Xl = {
    args: {
        asChild: true,
        children: <h1>Заголовок h1</h1>,
        size: '96'
    }
}

export const text7Xl = {
    args: {
        asChild: true,
        children: <YoutubeIcon/>,
        size: '72'
    }
}


