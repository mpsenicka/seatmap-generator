import { Stack, Tabs } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'

import { SeatingEditorConfigPanelView } from '../../types'
import { RowNumberingConfig } from './components/RowNumberingConfig'
import { SeatNumberingConfig } from './components/SeatNumberingConfig'
import { SectorConfig } from './components/SectorConfig'

type Props = {
    activeTab: SeatingEditorConfigPanelView
    onTabChange: (tab: SeatingEditorConfigPanelView) => void
}

export const ConfigPanel = ({ activeTab, onTabChange }: Props) => {
    const t = useTranslations()
    return (
        <Stack
            gap='xs'
            h='100%'
            id='seating-builder-config-panel'
            p={4}
            style={{
                borderRadius: 'var(--mantine-radius-sm)',
                border: '1px solid var(--mantine-color-default-border)',
            }}
            w={320}
        >
            <Tabs
                flex={1}
                style={{ display: 'flex', flexDirection: 'column' }}
                styles={{
                    tab: {
                        padding: 'var(--mantine-spacing-xs)',
                    },
                    tabSection: {
                        marginRight: 0,
                    },
                }}
                value={activeTab}
                onChange={(value) =>
                    onTabChange(value as SeatingEditorConfigPanelView)
                }
            >
                <Tabs.List grow>
                    <Tabs.Tab
                        leftSection={
                            <DynamicIcon name='CircleSmall' size={16} />
                        }
                        value='seatNumbering'
                    >
                        {t('seatmaps.create.tabs.seatNumbering')}
                    </Tabs.Tab>
                    <Tabs.Tab
                        leftSection={<DynamicIcon name='Ellipsis' size={16} />}
                        value='rowNumbering'
                    >
                        {t('seatmaps.create.tabs.rowNumbering')}
                    </Tabs.Tab>
                    <Tabs.Tab
                        leftSection={
                            <DynamicIcon name='LayoutTemplate' size={16} />
                        }
                        value='sector'
                    >
                        {t('seatmaps.create.tabs.sector')}
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel flex={1} value='seatNumbering'>
                    <SeatNumberingConfig />
                </Tabs.Panel>

                <Tabs.Panel flex={1} value='rowNumbering'>
                    <RowNumberingConfig />
                </Tabs.Panel>

                <Tabs.Panel flex={1} value='sector'>
                    <SectorConfig />
                </Tabs.Panel>
            </Tabs>
        </Stack>
    )
}
