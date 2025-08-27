'use client'

import { routerCatalog } from '@/RouterCatalog'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
    const router = useRouter()
    useEffect(() => {
        router.push(routerCatalog.root)
    }, [])
    return null
}
