import { ActionIcon, Group, SegmentedControl, Tooltip } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'

import {
    SeatingEditorConfigPanelView,
    SeatingEditorSelectionMode,
    SeatingEditorSelectionTool,
} from '../../../types'

type Props = {
    selectionTool: SeatingEditorSelectionTool
    selectionMode: SeatingEditorSelectionMode
    toggleSelectionTool: (tool: SeatingEditorSelectionTool) => void
    toggleSelectionMode: (mode: SeatingEditorSelectionMode) => void
    clearSelection: () => void
    activeConfigurationTab: SeatingEditorConfigPanelView
}

export const SelectionTools = ({
    selectionTool,
    selectionMode,
    toggleSelectionTool,
    toggleSelectionMode,
    clearSelection,
    activeConfigurationTab,
}: Props) => {
    const t = useTranslations()

    const localSelectionMode =
        activeConfigurationTab === 'rowNumbering' ? 'row' : selectionMode

    return (
        <>
            <SegmentedControl
                data={[
                    {
                        label: (
                            <Tooltip
                                label={t(
                                    'seatmaps.editor.toolbar.selection.objectSelection',
                                )}
                            >
                                <Group align='center' gap='4' justify='center'>
                                    <DynamicIcon
                                        name='MousePointerClick'
                                        size={16}
                                    />
                                </Group>
                            </Tooltip>
                        ),
                        value: 'point',
                    },
                    {
                        label: (
                            <Tooltip
                                label={t(
                                    'seatmaps.editor.toolbar.selection.rectangleSelection',
                                )}
                            >
                                <Group align='center' gap='4' justify='center'>
                                    <DynamicIcon
                                        name='RectangleHorizontal'
                                        size={16}
                                    />
                                </Group>
                            </Tooltip>
                        ),
                        value: 'rectangle',
                    },
                ]}
                orientation='vertical'
                value={selectionTool}
                onChange={(value) =>
                    toggleSelectionTool(value as SeatingEditorSelectionTool)
                }
            />
            <SegmentedControl
                data={[
                    {
                        label: (
                            <Tooltip
                                label={t(
                                    'seatmaps.editor.toolbar.selection.selectRows',
                                )}
                            >
                                <Group align='center' gap='4' justify='center'>
                                    <DynamicIcon name='Ellipsis' size={16} />
                                </Group>
                            </Tooltip>
                        ),
                        value: 'row',
                    },
                    {
                        label: (
                            <Tooltip
                                label={t(
                                    'seatmaps.editor.toolbar.selection.selectSeats',
                                )}
                            >
                                <Group align='center' gap='4' justify='center'>
                                    <DynamicIcon name='CircleSmall' size={16} />
                                </Group>
                            </Tooltip>
                        ),
                        value: 'seat',
                    },
                ]}
                disabled={activeConfigurationTab === 'rowNumbering'}
                orientation='vertical'
                value={localSelectionMode}
                onChange={(value) =>
                    toggleSelectionMode(value as SeatingEditorSelectionMode)
                }
            />
            <Tooltip label={t('seatmaps.editor.toolbar.zoom.deselectAll')}>
                <ActionIcon
                    size='lg'
                    variant='transparent'
                    onClick={clearSelection}
                >
                    <DynamicIcon name='SquareSquare' size={16} />
                </ActionIcon>
            </Tooltip>
        </>
    )
}
