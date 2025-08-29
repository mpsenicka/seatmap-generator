'use client'

import { useEffect } from 'react'

import { useRouter } from '@/i18n'
import { routerCatalog } from '@/RouterCatalog'

export default function NotFound(): null {
    const router = useRouter()

    useEffect(() => {
        // Only redirect on the client side
        if (typeof window !== 'undefined') {
            router.push(routerCatalog.root)
        }
    }, [router])

    return null
}
