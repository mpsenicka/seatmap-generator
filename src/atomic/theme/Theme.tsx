'use client'

import { DEFAULT_THEME, MantineTheme } from '@mantine/core'

import { colors } from './Colors'
import { MantineButton } from './mantine/MantineButton'
import { MantineCard } from './mantine/MantineCard'
import { MantineContainer } from './mantine/MantineContainer'
import { MantineText } from './mantine/MantineText'
import { MantineTitle } from './mantine/MantineTitle'

const theme: MantineTheme = {
    ...DEFAULT_THEME,

    white: DEFAULT_THEME.white,
    black: colors.colors.gray?.[9] || DEFAULT_THEME.black,
    colors: colors.colors,

    cursorType: 'pointer',

    primaryColor: 'indigo',
    primaryShade: 6,

    fontFamily: 'var(--font-poppins)',
    fontSizes: {
        ...DEFAULT_THEME.fontSizes,
        xxl: 'calc(1.5rem * var(--mantine-scale))',
        xxxl: 'calc(1.75rem * var(--mantine-scale))',
        hero: 'calc(3.5rem * var(--mantine-scale))',
    },

    headings: {
        ...DEFAULT_THEME.headings,
        fontFamily: 'var(--font-poppins)',
        fontWeight: 'bolder',
        textWrap: 'pretty',
        sizes: {
            ...DEFAULT_THEME.headings.sizes,
            h1: {
                fontSize: '28px',
                lineHeight: '1.3',
            },
            h2: {
                fontSize: '24px',
                lineHeight: '1.3',
            },
            h3: {
                fontSize: '20px',
                lineHeight: '1',
            },
        },
    },

    spacing: {
        xxxs: 'calc(0.2rem * var(--mantine-scale))',
        xxs: 'calc(0.4rem * var(--mantine-scale))',
        ...DEFAULT_THEME.spacing,
        xxl: 'calc(2.5rem * var(--mantine-scale))',
        xxxl: 'calc(3rem * var(--mantine-scale))',
    },

    radius: DEFAULT_THEME.radius,
    defaultRadius: 'sm',

    components: {
        Button: MantineButton,
        Container: MantineContainer,
        Title: MantineTitle,
        Text: MantineText,
        Card: MantineCard,
    },
}
export default theme
