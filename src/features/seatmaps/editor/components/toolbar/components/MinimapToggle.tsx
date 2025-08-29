import { Group, SegmentedControl, Tooltip } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

import { DynamicIcon } from '@/atomic/dynamic-icon'

type Props = {
    showMinimap: boolean
    setShowMinimap: Dispatch<SetStateAction<boolean>>
}

export const MinimapToggle = ({ showMinimap, setShowMinimap }: Props) => {
    const t = useTranslations()
    return (
        <SegmentedControl
            data={[
                {
                    value: 'show',
                    label: (
                        <Tooltip
                            label={t(
                                'seatmaps.editor.toolbar.minimap.showMinimap',
                            )}
                        >
                            <Group align='center' gap='4' justify='center'>
                                <DynamicIcon name='Eye' size={16} />
                            </Group>
                        </Tooltip>
                    ),
                },
                {
                    value: 'hide',
                    label: (
                        <Tooltip
                            label={t(
                                'seatmaps.editor.toolbar.minimap.hideMinimap',
                            )}
                        >
                            <Group align='center' gap='4' justify='center'>
                                <DynamicIcon name='EyeOff' size={16} />
                            </Group>
                        </Tooltip>
                    ),
                },
            ]}
            orientation='vertical'
            value={showMinimap ? 'show' : 'hide'}
            onChange={(value) => {
                const isVisible = value === 'show'
                setShowMinimap(isVisible)
            }}
        />
    )
}
