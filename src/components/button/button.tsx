import {ComponentPropsWithoutRef, forwardRef} from 'react'

import {Slot} from '@radix-ui/react-slot'
import {clsx} from 'clsx'

import s from './button.module.scss'

export const buttonVariant = ['primary', 'accent', 'outlined', 'secondary'] as const
export const buttonSize = ['default', 'large', 'smallIcon', 'largeIcon', 'tablet'] as const

export type ButtonVariant = (typeof buttonVariant)[number]
export type ButtonSize = (typeof buttonSize)[number]

type Props = {
    asChild?: boolean
    gap?: number
    size?: ButtonSize
    variant?: ButtonVariant
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
    ({asChild = false, className, variant = 'primary', size = 'default', ...rest}, ref) => {
        const classNames = clsx(s.button, s[variant], s[size], className)

        const Comp = asChild ? Slot : 'button'

        return (
            <Comp className={classNames} ref={ref} {...rest} style={{gap: rest.gap ?? '12px'}}></Comp>
        )
    }
)