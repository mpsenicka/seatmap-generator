import { routing } from '@/i18n'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { PropsWithChildren } from 'react'

import { AppProvider } from '@/providers/app-provider'
import { PageProps } from '@/types/PageTypes'

type RootLayoutProps = { locale: string }

export default async function RootLayout({
    children,
    params,
}: PropsWithChildren<PageProps<RootLayoutProps>>) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    const messages = await getMessages()

    return (
        <NextIntlClientProvider messages={messages}>
            <AppProvider initialLang={locale}>{children}</AppProvider>
        </NextIntlClientProvider>
    )
}
