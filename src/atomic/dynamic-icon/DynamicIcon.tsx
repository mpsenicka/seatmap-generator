/* eslint-disable @typescript-eslint/no-explicit-any */
import { MantineColor, useMantineTheme } from '@mantine/core'
import { icons } from 'lucide-react'
import { useMemo } from 'react'

type DynamicIconProps = {
    name: string
    color?: MantineColor
    size?: number
}

export const DynamicIcon = ({ name, color, size = 20 }: DynamicIconProps) => {
    const LucideIcon = (icons as Record<string, any>)[name] || icons.Star

    const theme = useMantineTheme()
    const themeColor = useMemo(() => {
        if (!color || color === 'inherit') {
            return 'currentColor'
        }
        return theme.variantColorResolver(
            // Find corresponding color shadow for wanted base color
            { color, variant: 'filled', theme },
        ).background
    }, [color])

    return <LucideIcon color={themeColor} size={size} />
}
