'use client'

import '../default.css'

import { AppShell, Container, Group, Image } from '@mantine/core'
import { PropsWithChildren } from 'react'

import { ColorSchemeSwitcher } from '@/components/color-scheme-switcher'
import { LanguageSwitcher } from '@/components/language/LanguageSwitcher'
import { useResponsiveDevice } from '@/hooks/responsive'
import { useRouter } from '@/i18n'
import { routerCatalog } from '@/RouterCatalog'

type AppLayoutProps = PropsWithChildren<{
    headerMiddleSection?: React.ReactNode
}>

export const AppLayout = ({
    children,
    headerMiddleSection,
}: AppLayoutProps) => {
    const { isMobile } = useResponsiveDevice()
    const router = useRouter()
    return (
        <AppShell header={{ height: 73 }} padding='md'>
            <AppShell.Header>
                <Container size='auto'>
                    <Group h={73} justify='space-between' wrap='nowrap'>
                        <Group w={120} wrap='nowrap'>
                            <Image
                                alt='skildo logo'
                                fit='contain'
                                h={isMobile ? 32 : 40}
                                src='/images/logo.png'
                                w={isMobile ? 32 : 40}
                                onClick={() => router.push(routerCatalog.root)}
                            />
                        </Group>
                        {headerMiddleSection}
                        <Group
                            gap='xs'
                            justify='flex-end'
                            w={120}
                            wrap='nowrap'
                        >
                            <ColorSchemeSwitcher />
                            <LanguageSwitcher />
                        </Group>
                    </Group>
                </Container>
            </AppShell.Header>

            <AppShell.Main style={{ overflowX: 'hidden', display: 'flex' }}>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
