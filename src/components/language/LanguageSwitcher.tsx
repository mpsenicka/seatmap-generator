'use client'

import { ActionIcon, Box, BoxProps, Menu, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'

import { useAppContext } from '@/providers/app-provider'

type LanguageSwitcherLanguage = {
    name: string
    flag: string
    code: string
}

type Props = BoxProps

export function LanguageSwitcher({ ...boxProps }: Props) {
    const { lang } = useAppContext()
    const t = useTranslations()
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const [opened, { toggle, close }] = useDisclosure()

    const langSupported = [
        { code: 'cs', flag: '🇨🇿', name: t('locale.cs_name') },
        { code: 'en', flag: '🇺🇸', name: t('locale.en_name') },
    ]
    const redirectedPathName = useCallback(
        (lang: string) => {
            if (!pathName) return '/'
            const segments = pathName.split('/')
            segments[1] = lang
            return segments.join('/')
        },
        [pathName],
    )
    const changeLanguage = useCallback(
        (lang: string) => {
            const queries = searchParams.toString()
            router.push(
                `${redirectedPathName(lang)}${queries && `?${queries}`}`,
            )
            close()
        },
        [searchParams, close],
    )

    return (
        <Box {...boxProps}>
            <Menu opened={opened} position='bottom' onChange={toggle}>
                <Tooltip
                    withinPortal
                    disabled={opened}
                    label={t('common.changeLanguage')}
                >
                    <Menu.Target>
                        <ActionIcon
                            color='var(--mantine-color-default-border)'
                            p='md'
                            radius='xl'
                            variant='outline'
                        >
                            <div>
                                {
                                    langSupported.find((ls) => ls.code === lang)
                                        .flag
                                }
                            </div>
                        </ActionIcon>
                    </Menu.Target>
                </Tooltip>

                <Menu.Dropdown>
                    {langSupported.map((i) => (
                        <Menu.Item
                            key={i.code}
                            onClick={() => changeLanguage(i.code)}
                        >
                            {i.flag} {i.name}
                        </Menu.Item>
                    ))}
                </Menu.Dropdown>
            </Menu>
        </Box>
    )
}

export type { LanguageSwitcherLanguage }
