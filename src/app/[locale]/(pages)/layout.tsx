import { PropsWithChildren } from 'react'

import { AppLayout } from '@/components/layout'
import { AppProvider } from '@/providers/app-provider'
import { LayoutPageProps } from '@/types/PageTypes'

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
