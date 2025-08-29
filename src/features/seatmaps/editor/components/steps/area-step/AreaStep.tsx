import { ActionIcon, Box, Button, Group, Stack, Tooltip } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { DynamicIcon } from '@/atomic/dynamic-icon'
import { Topbar } from '@/components/layout'

import { SeatingEditorConfigPanelView } from '../../../types'
import { ConfigPanel } from '../../config-panel'
import { Toolbar } from '../../toolbar'

type AreaStepProps = {
    onBack: () => void
    onSubmit: () => void
    onSubmitAndClose: () => void
}

export const AreaStep = ({
    onBack,
    onSubmit,
    onSubmitAndClose,
}: AreaStepProps) => {
    const t = useTranslations()

    const [activeConfigurationTab, setActiveConfigurationTab] =
        useState<SeatingEditorConfigPanelView>('seatNumbering')

    const handleBack = () => {
        onBack()
    }

    const handleSubmit = () => {
        onSubmit()
    }

    const handleSubmitAndClose = () => {
        onSubmitAndClose()
    }

    return (
        <Stack flex={1}>
            <Topbar
                withBackButton
                backButtonProps={{
                    children: t('common.actions.previousStep'),
                    variant: 'filled',
                }}
                right={
                    <Group>
                        <Tooltip label={t('seatmaps.area.hintButton')}>
                            <ActionIcon
                                color='indigo'
                                radius='xl'
                                size='lg'
                                variant='transparent'
                                // onClick={open}
                            >
                                <DynamicIcon name='Info' size={20} />
                            </ActionIcon>
                        </Tooltip>
                        <Button
                            variant='outline'
                            onClick={handleSubmitAndClose}
                        >
                            {t('seatmaps.area.createAreaAndCloseCta')}
                        </Button>
                        <Button
                            rightSection={
                                <DynamicIcon name='ArrowRight' size={16} />
                            }
                            onClick={handleSubmit}
                        >
                            {t('seatmaps.area.addCategoriesCta')}
                        </Button>
                    </Group>
                }
                onBack={handleBack}
            />
            <Group flex={1}>
                <Toolbar activeConfigurationTab={activeConfigurationTab} />
                <Box bg='gray' flex={1} h='100%' ta='center'>
                    arena
                </Box>
                <ConfigPanel
                    activeTab={activeConfigurationTab}
                    onTabChange={setActiveConfigurationTab}
                />
            </Group>
        </Stack>
    )
}
