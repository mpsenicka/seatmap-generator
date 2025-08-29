export interface Vector2 {
    x: number
    y: number
}

export interface SeatingErrorEventPayload {
    error: Error
    message?: string
}
export interface SeatDto {
    id: string
    rowNumber: string | number | null
    seatNumber: string | number | null
    dimensions: Vector2
    radius?: number
    sectionId?: string
    sectorId?: string
    rowId?: string
    categoryId?: string[]
    categoryColor?: string[]
    rowDimensions?: Vector2
    selected?: boolean
    numbered?: boolean // Flag to track if seat has been assigned a number
}

export interface SeatingAreaLocalizationDto {
    lang: string
    name: string
    seatMapJsonUrl?: string | null
    seatMapBackgroundUrl?: string | null
}

export interface SeatingAreaDto {
    id?: string
    localizations: Array<SeatingAreaLocalizationDto>
    venueId?: string | null
    sorting?: number
    height?: number
    width?: number
    lockedForEdits?: boolean
}

export interface SeatingMapData {
    seatingArena: SeatingAreaDto
    sectors: SectorDto[]
}

export interface SeatingAreaSectorLocalizationDto {
    sectorMapJsonUrl?: string | null
    sectorMapBackgroundUrl?: string | null
    lang: string
    name: string
}

export interface SectorDto {
    id?: string
    localizations: Array<SeatingAreaSectorLocalizationDto>
    seatingAreaId?: string
    shape?: string | null
    sorting?: number
    x?: number | null
    y?: number | null
    spaces: SeatDto[]
}

export type SelectedRowsType = Map<string, SeatDto[]>

// Numbering options
export type NumberingSeatDirection = 'left-to-right' | 'right-to-left'
export type NumberingRowDirection = 'top' | 'bottom'
export type NumberingPattern = 'sequential' | 'zigzag'
export type NumberingStyle = 'numeric' | 'alphabetic'

export type SeatNumberingConfigDto = {
    style: NumberingStyle
    startingNumber: number
    direction: NumberingSeatDirection
    pattern: NumberingPattern
}

export type RowNumberingConfigDto = {
    style: NumberingStyle
    startingNumber: number
    direction: NumberingRowDirection
}

export interface NumberingOptions {
    startNumber?: number
    direction?: NumberingSeatDirection
    style?: NumberingStyle
    pattern?: NumberingPattern
    startPosition?: NumberingRowDirection
    excludeSections?: string[] // Sections to exclude (e.g., 'balkon', 'loze')
}

// Progress tracking
export interface NumberingProgress {
    total: number
    numbered: number
    percentage: number
}

export type SeatingEditorSelectionMode = 'row' | 'seat'
export type SeatingEditorConfigPanelView =
    | 'seatNumbering'
    | 'rowNumbering'
    | 'sector'
    | 'category'
export type SeatingEditorSelectionTool = 'point' | 'rectangle'

export type SvgZoomPanConfig = {
    enableZoom?: boolean
    enableMinimap?: boolean
    minimapContainerId?: string
    size?: number
}

// Define callback types for triggering actions in the main class
export type SelectAction<T> = (target: T & EventTarget) => void // Target can be element or ID
export type DeselectAction = (id: string) => void
export type IsSelectedCheck<T> = (target: T | string) => boolean // Check if row/seat ID is selected
