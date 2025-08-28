'use client'

import { useEffect } from 'react'

import { useRouter } from '@/i18n'
import { routerCatalog } from '@/RouterCatalog'

export default function NotFound(): null {
    const router = useRouter()
    useEffect(() => {
        router.push(routerCatalog.root)
    }, [])
    return null
}
