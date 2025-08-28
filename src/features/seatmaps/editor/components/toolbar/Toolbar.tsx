import { Stack } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

import {
    SeatingGeneratorConfigureView,
    SeatingGeneratorSelectionMode,
    SeatingGeneratorSelectionTool,
} from '../../types/toolbar'
import { MinimapToggle } from './MinimapToggle'
import { SelectionTools } from './SelectionTools'
import { ZoomTools } from './ZoomTools'

type Props = {
    selectionTool: SeatingGeneratorSelectionTool
    selectionMode: SeatingGeneratorSelectionMode
    displayNumbering: boolean | string
    activeConfigurationTab: SeatingGeneratorConfigureView
    showMinimap: boolean
    toggleSelectionTool: (tool: SeatingGeneratorSelectionTool) => void
    toggleSelectionMode: (mode: SeatingGeneratorSelectionMode) => void
    zoomIn: () => void
    zoomOut: () => void
    resetZoom: () => void
    clearSelection: () => void
    setShowMinimap: Dispatch<SetStateAction<boolean>>
}

export const Toolbar = ({
    selectionTool,
    selectionMode,
    displayNumbering,
    activeConfigurationTab,
    showMinimap,
    toggleSelectionTool,
    toggleSelectionMode,
    zoomIn,
    zoomOut,
    resetZoom,
    clearSelection,
    setShowMinimap,
}: Props) => {
    return (
        <Stack
            align='center'
            gap='xs'
            h='100%'
            id='seating-builder-tools'
            justify='center'
            p={4}
            style={{
                borderRadius: 'var(--mantine-radius-sm)',
                border: '1px solid var(--mantine-color-default-border)',
            }}
        >
            {(activeConfigurationTab === 'numbering' ||
                activeConfigurationTab === 'category') && (
                <SelectionTools
                    displayNumbering={displayNumbering}
                    selectionMode={selectionMode}
                    selectionTool={selectionTool}
                    toggleSelectionMode={toggleSelectionMode}
                    toggleSelectionTool={toggleSelectionTool}
                />
            )}
            <ZoomTools
                clearSelection={clearSelection}
                resetZoom={resetZoom}
                zoomIn={zoomIn}
                zoomOut={zoomOut}
            />
            <MinimapToggle
                setShowMinimap={setShowMinimap}
                showMinimap={showMinimap}
            />
        </Stack>
    )
}
