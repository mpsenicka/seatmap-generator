/** AREA DEFINITION */

export interface SeatingAreaStaticJsonMapDto {
    id?: string
    name?: string
    width?: number
    height?: number
    bgUrl?: string | null
    sectors?: Array<SeatingAreaStaticJsonMapSector>
}

export interface SeatingAreaStaticJsonMapSector {
    id?: string
    name?: string
    shape?: string | null
    x?: number | null
    y?: number | null
}

/** AREA AVAILABILITIES */

export interface CategoryInSector {
    categoryId: string
    sectorId: string
    capacity?: number
    color?: string
}
