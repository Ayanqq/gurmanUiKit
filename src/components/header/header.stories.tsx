import type {Meta, StoryObj} from "@storybook/react";

// import { useEffect, useRef, useState } from "react";

import {Header} from "./header.tsx";

const meta = {
    component: Header,
    tags: ["autodocs"],
    title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderPC: Story = {
    args: {
        variant: 'pc'
    },
};

export const HeaderTablet: Story = {
    args: {
        variant: 'tablet'
    }
}

export const HeaderMobile: Story = {
    args: {
        variant: 'mobile'
    }
}