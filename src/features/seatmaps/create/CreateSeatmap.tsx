'use client'

import { Stack } from '@mantine/core'

import { SeatmapEditor } from '@/features/seatmaps/editor'

export const CreateSeatmap = () => {
    return (
        <Stack flex={1} gap={0}>
            <SeatmapEditor />
        </Stack>
    )
}
