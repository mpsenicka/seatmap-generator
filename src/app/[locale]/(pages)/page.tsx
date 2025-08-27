import { getTranslations } from 'next-intl/server'

import { formatTitle } from '@/utils/title/formatTitle'

export async function generateMetadata() {
    const t = await getTranslations()
    const title = t('home.title')
    return {
        title: formatTitle(title),
    }
}

export default async function Page() {
    return <div>Home</div>
}
