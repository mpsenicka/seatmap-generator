import { Stack } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'

import {
    SeatingEditorConfigPanelView,
    SeatingEditorSelectionMode,
    SeatingEditorSelectionTool,
} from '../../types'
import { MinimapToggle } from './components/MinimapToggle'
import { SelectionTools } from './components/SelectionTools'
import { ZoomTools } from './components/ZoomTools'

type Props = {
    activeConfigurationTab: SeatingEditorConfigPanelView
}

export const Toolbar = ({ activeConfigurationTab }: Props) => {
    const [showMinimap, setShowMinimap] = useState<boolean>(true)
    const [selectionMode, setSelectionMode] =
        useState<SeatingEditorSelectionMode>('row')
    const [selectionTool, setSelectionTool] =
        useState<SeatingEditorSelectionTool>('point')

    const handleShowMinimap: Dispatch<SetStateAction<boolean>> = (value) => {
        setShowMinimap(value)
        // Here emit, just leave the comment here, what's important is the space for it
    }

    const handleClearSelection = () => {
        // Here emit, just leave the comment here, what's important is the space for it
    }

    const handleResetZoom = () => {
        // Here emit, just leave the comment here, what's important is the space for it
    }

    const handleToggleSelectionMode = (mode: SeatingEditorSelectionMode) => {
        setSelectionMode(mode)
        // Here emit, just leave the comment here, what's important is the space for it
    }

    const handleToggleSelectionTool = (tool: SeatingEditorSelectionTool) => {
        setSelectionTool(tool)
        // Here emit, just leave the comment here, what's important is the space for it
    }

    const handleZoomIn = () => {
        // Here emit, just leave the comment here, what's important is the space for it
    }

    const handleZoomOut = () => {
        // Here emit, just leave the comment here, what's important is the space for it
    }

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
            {['seatNumbering', 'rowNumbering', 'category'].includes(
                activeConfigurationTab,
            ) && (
                <SelectionTools
                    activeConfigurationTab={activeConfigurationTab}
                    clearSelection={handleClearSelection}
                    selectionMode={selectionMode}
                    selectionTool={selectionTool}
                    toggleSelectionMode={handleToggleSelectionMode}
                    toggleSelectionTool={handleToggleSelectionTool}
                />
            )}
            <ZoomTools
                resetZoom={handleResetZoom}
                zoomIn={handleZoomIn}
                zoomOut={handleZoomOut}
            />
            <MinimapToggle
                setShowMinimap={handleShowMinimap}
                showMinimap={showMinimap}
            />
        </Stack>
    )
}
