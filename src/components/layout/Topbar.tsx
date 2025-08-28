'use client'

import { ActionIcon, Box, CloseButton, Group, Title } from '@mantine/core'
import { ChevronLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

import { useRouter } from '@/i18n'

type TopbarProps = {
    withBackButton?: boolean
    withCloseButton?: boolean
    onBack?: () => void
    onClose?: () => void
    title?: ReactNode
    right?: React.ReactNode
}

export const Topbar = ({
    withBackButton,
    withCloseButton,
    onBack,
    onClose,
    title,
    right,
}: TopbarProps) => {
    const t = useTranslations()
    const router = useRouter()

    const handleBack = () => {
        if (onBack) {
            onBack()
        } else {
            router.back()
        }
    }

    const handleClose = () => {
        if (onClose) {
            onClose()
        } else {
            router.back()
        }
    }

    return (
        <Group justify='space-between' w='100%'>
            <Group gap='xs' wrap='nowrap'>
                {withBackButton && (
                    <ActionIcon variant='subtle' onClick={handleBack}>
                        <ChevronLeft />
                    </ActionIcon>
                )}
                <Title order={1}>{title}</Title>
            </Group>
            <Box>
                {right}
                {withCloseButton && <CloseButton onClick={handleClose} />}
            </Box>
        </Group>
    )
}
