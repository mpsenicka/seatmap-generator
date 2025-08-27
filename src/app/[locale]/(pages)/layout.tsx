import { PropsWithChildren } from 'react'

import { AppLayout } from '@/components/layout'
import { LayoutPageProps } from '@/types/PageTypes'
import { AppProvider } from '@/providers/app-provider'

export default async function Layout({
    children,
    params,
}: PropsWithChildren<LayoutPageProps<{ locale: string }>>) {
    const { locale } = await params
    return (
        <AppProvider initialLang={locale}>
            <AppLayout>{children}</AppLayout>
        </AppProvider>
    )
}
