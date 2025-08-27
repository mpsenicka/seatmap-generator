'use client'

import { ActionIcon, Tooltip } from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core'
import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export const ColorSchemeSwitcher = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const t = useTranslations()
    const isDark = colorScheme === 'dark'

    const icon = useMemo(() => {
        return isDark ? <Sun /> : <Moon />
    }, [isDark])

    const tooltip = useMemo(() => {
        return isDark
            ? t('common.switchToLightMode')
            : t('common.switchToDarkMode')
    }, [isDark])

    return (
        <Tooltip withinPortal label={tooltip}>
            <ActionIcon
                color={!isDark ? 'gray.9' : 'gray.4'}
                radius='xl'
                size='lg'
                style={{ borderColor: 'var(--mantine-color-default-border)' }}
                variant='outline'
                onClick={toggleColorScheme}
            >
                {icon}
            </ActionIcon>
        </Tooltip>
    )
}

export default ColorSchemeSwitcher
