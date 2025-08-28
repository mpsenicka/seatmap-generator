import { routing } from '@/i18n'
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const handleI18nRouting = createMiddleware(routing)

export async function middleware(req: NextRequest) {
    const [, locale] = req.nextUrl.pathname.split('/')
    const res = handleI18nRouting(req)

    return res
}

export const config = {
    // Skip all paths that should not be internationalized
    matcher: [
        '/((?!images|sitemap|shared|_next/static|api|monitoring|_next/image|favicon.ico|manifest.json|robots.txt|.*\\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)).*)',
    ],
}
