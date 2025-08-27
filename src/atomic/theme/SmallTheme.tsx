'use client'

import { MantineTheme } from '@mantine/core'

import BigTheme from './Theme'

const theme: MantineTheme = {
    ...BigTheme,

    fontSizes: {
        ...BigTheme.fontSizes,
        hero: 'calc(2.5rem * var(--mantine-scale))',
    },

    headings: {
        ...BigTheme.headings,
        sizes: {
            ...BigTheme.headings.sizes,
            h1: {
                fontSize: '36px',
                lineHeight: '1.3',
            },
            h2: {
                fontSize: '24px',
                lineHeight: '1.3',
            },
            h3: {
                fontSize: '18px',
                lineHeight: '1',
            },
        },
    },
}
export default theme
