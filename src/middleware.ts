import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from '@/i18n'

const handleI18nRouting = createMiddleware(routing)

export async function middleware(req: NextRequest) {
    const [, locale] = req.nextUrl.pathname.split('/')
    const res = handleI18nRouting(req)

    return res
}

export const config = {
    matcher: [
        '/((?!api|_next|sso|_vercel|images|manigest.json|robots.txt|favicon.ico|.*\\..*).*)',
    ],
}
