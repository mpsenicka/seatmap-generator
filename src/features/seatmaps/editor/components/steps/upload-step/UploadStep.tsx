import { Group, Stack } from '@mantine/core'

import { Toolbar } from '../../toolbar'

export const UploadStep = () => {
    return (
        <Stack flex={1}>
            <Group flex={1}>
                <Toolbar
                    activeConfigurationTab='numbering'
                    clearSelection={() => {}}
                    displayNumbering={false}
                    resetZoom={() => {}}
                    selectionMode='row'
                    selectionTool='point'
                    setShowMinimap={() => {}}
                    showMinimap={false}
                    toggleSelectionMode={() => {}}
                    toggleSelectionTool={() => {}}
                    zoomIn={() => {}}
                    zoomOut={() => {}}
                />
            </Group>
        </Stack>
    )
}
