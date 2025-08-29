import '@/styles/global.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { ColorSchemeScript } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { PropsWithChildren } from 'react'

import ThemeProvider from '@/atomic/theme/Provider'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1,
}
export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning className={poppins.className}>
            <head>
                <ColorSchemeScript defaultColorScheme='light' />
                <meta content='#fff' name='theme-color' />
            </head>
            <body
                style={{
                    overflow: 'auto',
                    minHeight: '100dvh',
                    height: 'auto',
                }}
            >
                <ThemeProvider>
                    <Notifications />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
