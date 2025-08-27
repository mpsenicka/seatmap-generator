import { PropsWithChildren } from 'react'

import { AppLayout } from '@/components/layout'
import { LayoutPageProps } from '@/types/PageTypes'
import AppProvider from '@/providers/app-provider/AppProvider'

type LayoutProps = {
    locale: string
}

export default async function Layout({
    children,
    params,
}: PropsWithChildren<LayoutProps & LayoutPageProps<{}>>) {
    const { locale } = await params
    return (
        <AppProvider initialLang={locale}>
            <AppLayout>{children}</AppLayout>
        </AppProvider>
    )
}
