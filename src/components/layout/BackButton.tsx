'use client'

import { ActionIcon, Button, ButtonProps } from '@mantine/core'
import { ChevronLeft } from 'lucide-react'
import { PropsWithChildren } from 'react'

import { useRouter } from '@/i18n'

export type BackButtonProps = PropsWithChildren<{
    onBack?: () => void
}> &
    ButtonProps

export const BackButton = ({ onBack, children, ...props }: BackButtonProps) => {
    const router = useRouter()

    const handleBack = () => {
        if (onBack) {
            onBack()
        } else {
            router.back()
        }
    }

    if (children) {
        return (
            <Button
                leftSection={<ChevronLeft />}
                variant='transparent'
                onClick={handleBack}
                {...props}
            >
                {children}
            </Button>
        )
    }
    return (
        <ActionIcon variant='transparent' onClick={handleBack}>
            <ChevronLeft />
        </ActionIcon>
    )
}
