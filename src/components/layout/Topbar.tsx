'use client'

import { Box, Group, Title } from '@mantine/core'
import { ReactNode } from 'react'

import { BackButton, BackButtonProps } from './BackButton'

type TopbarProps = {
    withBackButton?: boolean
    backButtonProps?: Omit<BackButtonProps, 'onBack'>
    title?: ReactNode
    right?: React.ReactNode
} & Pick<BackButtonProps, 'onBack'>

export const Topbar = ({
    withBackButton,
    onBack,
    title,
    right,
    backButtonProps,
}: TopbarProps) => {
    return (
        <Group justify='space-between' w='100%'>
            <Group gap='xs' wrap='nowrap'>
                {withBackButton && (
                    <BackButton onBack={onBack} {...backButtonProps} />
                )}
                <Title order={1}>{title}</Title>
            </Group>
            <Box>{right}</Box>
        </Group>
    )
}
