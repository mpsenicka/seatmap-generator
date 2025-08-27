'use client'

import {
    createTheme,
    CSSVariablesResolver,
    MantineProvider,
    MantineThemeOverride,
} from '@mantine/core'
import { ReactNode } from 'react'

import { useResponsiveDevice } from '@/hooks/responsive/useResponsiveDevice'

import SmallTheme from './SmallTheme'
import BigTheme from './Theme'

type Props = {
    children: ReactNode
    customTheme?: MantineThemeOverride
}

export default function ThemeProvider({ customTheme, children }: Props) {
    const { isTablet } = useResponsiveDevice()

    const resolver: CSSVariablesResolver = (theme) => {
        return {
            variables: {},
            light: {
                '--mantine-color-body': '#fff',
            },
            dark: {
                '--mantine-color-body': theme.colors.gray[9],
            },
        }
    }

    const Theme = isTablet ? SmallTheme : BigTheme

    return (
        <MantineProvider
            cssVariablesResolver={resolver}
            defaultColorScheme='auto'
            theme={createTheme(customTheme ?? (Theme as MantineThemeOverride))}
        >
            {children}
        </MantineProvider>
    )
}
