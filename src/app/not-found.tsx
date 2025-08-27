'use client'

import { routerCatalog } from '@/RouterCatalog'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound(): null {
    const router = useRouter()
    useEffect(() => {
        router.push(routerCatalog.root)
    }, [])
    return null
}
