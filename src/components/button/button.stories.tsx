import type {Meta, StoryObj} from '@storybook/react'

import {Button} from './button.tsx'
import Youtube from "../../assets/icons/outline/youtube.tsx";

const meta = {
    argTypes: {
        onClick: {action: 'clicked'},
        variant: {
            control: {type: 'radio'},
            options: ['primary', 'accent', 'outlined', 'secondary'],
        },
        size: {
            control: {type: 'radio'},
            options: ['default', 'large', 'smallIcon', 'largeIcon', 'tablet'],
        }
    },
    component: Button,
    tags: ['autodocs'],
    title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Button',
        disabled: false,
        variant: 'primary',
        size: 'default'
    },
}

export const Accent: Story = {
    args: {
        children: 'Button',
        disabled: false,
        variant: 'accent',
    },
}

export const Outlined: Story = {
    args: {
        children: 'Button',
        disabled: false,
        variant: 'outlined',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Button',
        disabled: false,
        variant: 'secondary',
    },
    parameters: {
        backgrounds: {
            default: "blue", // Указываем имя цвета
            values: [{name: "blue", value: "#007BFF"}], // Определяем цвет
        },
    },
}

export const IconLeft: Story = {
    args: {
        disabled: false,
        variant: "primary",
        children: (
            <a href={'https://google.com/'} rel={'noopener noreferrer'} target={'_blank'}>
                <Youtube/>
                {'Button'}
            </a>
        ),
        asChild: true,
        gap: 10,
        size: 'default'
    }
}

export const IconRight: Story = {
    args: {
        disabled: false,
        variant: "primary",
        children: (
            <a href={'https://google.com/'} rel={'noopener noreferrer'} target={'_blank'}>
                {'Button'}
                <Youtube/>
            </a>
        ),
        asChild: true,
        gap: 10
    }
}