import { ActionIcon, Stack, Tooltip } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'

type Props = {
    zoomIn: () => void
    zoomOut: () => void
    resetZoom: () => void
    clearSelection: () => void
}

export const ZoomTools = ({
    zoomIn,
    zoomOut,
    resetZoom,
    clearSelection,
}: Props) => {
    const t = useTranslations()
    return (
        <>
            <Tooltip label={t('seatmaps.editor.toolbar.zoom.deselectAll')}>
                <ActionIcon
                    size='lg'
                    variant='transparent'
                    onClick={clearSelection}
                >
                    <DynamicIcon name='SquareDashed' size={16} />
                </ActionIcon>
            </Tooltip>
            <Stack gap={4}>
                <Tooltip label={t('seatmaps.editor.toolbar.zoom.zoomOut')}>
                    <ActionIcon
                        size='lg'
                        variant='transparent'
                        onClick={() => zoomOut()}
                    >
                        <DynamicIcon name='ZoomOut' size={16} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={t('seatmaps.editor.toolbar.zoom.zoomIn')}>
                    <ActionIcon
                        size='lg'
                        variant='transparent'
                        onClick={() => zoomIn()}
                    >
                        <DynamicIcon name='ZoomIn' size={16} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={t('seatmaps.editor.toolbar.zoom.resetZoom')}>
                    <ActionIcon
                        size='lg'
                        variant='transparent'
                        onClick={resetZoom}
                    >
                        <DynamicIcon name='SearchX' size={16} />
                    </ActionIcon>
                </Tooltip>
            </Stack>
        </>
    )
}
