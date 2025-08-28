'use client'

import { EmptySeatmapVariants } from '@/features/seatmaps/empty'
import { SeatmapList } from '@/features/seatmaps/list'

const isEmpty = true

export const Homepage = () => {
    if (isEmpty) {
        return <EmptySeatmapVariants />
    }

    return <SeatmapList />
}
