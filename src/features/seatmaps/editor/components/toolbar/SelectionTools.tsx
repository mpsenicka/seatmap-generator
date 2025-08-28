import { Group, SegmentedControl, Tooltip } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'

import {
    SeatingGeneratorSelectionMode,
    SeatingGeneratorSelectionTool,
} from '../../types/toolbar'

type Props = {
    selectionTool: SeatingGeneratorSelectionTool
    selectionMode: SeatingGeneratorSelectionMode
    displayNumbering: boolean | string
    toggleSelectionTool: (tool: SeatingGeneratorSelectionTool) => void
    toggleSelectionMode: (mode: SeatingGeneratorSelectionMode) => void
}

export const SelectionTools = ({
    selectionTool,
    selectionMode,
    displayNumbering,
    toggleSelectionTool,
    toggleSelectionMode,
}: Props) => {
    const t = useTranslations()
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
                                    <DynamicIcon name='ArrowUpLeft' size={16} />
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
                        value: 'brush',
                    },
                ]}
                orientation='vertical'
                value={selectionTool}
                onChange={(value) =>
                    toggleSelectionTool(value as SeatingGeneratorSelectionTool)
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
                disabled={displayNumbering === 'row'}
                orientation='vertical'
                value={selectionMode}
                onChange={(value) =>
                    toggleSelectionMode(value as SeatingGeneratorSelectionMode)
                }
            />
        </>
    )
}
