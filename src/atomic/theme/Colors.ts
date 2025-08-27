import { DEFAULT_THEME, MantineThemeColors } from '@mantine/core'

export const colors: {
    colors: MantineThemeColors
} = {
    colors: {
        ...DEFAULT_THEME.colors,
    },
}

export type OverrideColorPaletteCodes = keyof (typeof colors)['colors']
