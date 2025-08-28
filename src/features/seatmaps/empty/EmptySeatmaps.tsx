'use client'

import { Button, Stack, Text } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'
import { Link } from '@/i18n'
import { routerCatalog } from '@/RouterCatalog'

export const EmptySeatmapVariants = () => {
    const t = useTranslations()

    return (
        <Stack flex={1}>
            <Stack
                align='center'
                gap='xs'
                h='80%'
                justify='center'
                maw={400}
                mx='auto'
                w='100%'
            >
                <DynamicIcon name='SearchX' size={100} />
                <Text ta='center'>{t('seatmapVariants.empty.hint')}</Text>
                <Button
                    component={Link}
                    href={routerCatalog.createSeatmap}
                    leftSection={<DynamicIcon name='Plus' />}
                    mt='md'
                >
                    {t('seatmapVariants.empty.ctaButton')}
                </Button>
            </Stack>
        </Stack>
    )
}
