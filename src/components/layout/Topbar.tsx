'use client'

import { Box, Group, Title } from '@mantine/core'
import { ReactNode } from 'react'

import { useRouter } from '@/i18n'

import { BackButton, BackButtonProps } from './BackButton'

type TopbarProps = {
    withBackButton?: boolean
    title?: ReactNode
    right?: React.ReactNode
} & BackButtonProps

export const Topbar = ({
    withBackButton,
    onBack,
    title,
    right,
}: TopbarProps) => {
    const router = useRouter()

    return (
        <Group justify='space-between' w='100%'>
            <Group gap='xs' wrap='nowrap'>
                {withBackButton && <BackButton onBack={onBack} />}
                <Title order={1}>{title}</Title>
            </Group>
            <Box>{right}</Box>
        </Group>
    )
}
