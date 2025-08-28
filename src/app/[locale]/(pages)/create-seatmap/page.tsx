import { getTranslations } from 'next-intl/server'

import { CreateSeatmap } from '@/features/seatmaps/create'
import { formatTitle } from '@/utils/title/formatTitle'

export async function generateMetadata() {
    const t = await getTranslations()
    const title = t('seatmaps.create.title')
    return {
        title: formatTitle(title),
    }
}

export default async function Page() {
    return <CreateSeatmap />
}
