'use client'

import { Code, Divider, Drawer, Group, Stack, Text, Title } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'

type Props = {
    opened: boolean
    close: () => void
}

export const DesignerHintDrawer = ({ opened, close }: Props) => {
    const t = useTranslations()
    return (
        <Drawer
            opened={opened}
            position='right'
            size='xl'
            title={
                <Group>
                    <DynamicIcon name='Info' size={20} />
                    <Title order={3}>
                        {t('seatmaps.upload.hintDrawer.title')}
                    </Title>
                </Group>
            }
            onClose={close}
        >
            <Divider />
            <Stack gap='xl' py='md'>
                <Text c='dimmed' size='sm'>
                    {t('seatmaps.upload.hintDrawer.description')}
                </Text>

                {/* Structure Requirements */}
                <Stack gap='md'>
                    <Title order={4}>
                        {t('seatmaps.upload.hintDrawer.structure.title')}
                    </Title>
                    <Stack gap='xs'>
                        <Text size='sm'>
                            {t(
                                'seatmaps.upload.hintDrawer.structure.rootGroup',
                            )}
                        </Text>
                        <Text size='sm'>
                            {t(
                                'seatmaps.upload.hintDrawer.structure.sectorGroup',
                            )}
                        </Text>
                        <Text size='sm'>
                            {t(
                                'seatmaps.upload.hintDrawer.structure.sectorShape',
                            )}
                        </Text>
                        <Text size='sm'>
                            {t('seatmaps.upload.hintDrawer.structure.rowGroup')}
                        </Text>
                        <Text size='sm'>
                            {t(
                                'seatmaps.upload.hintDrawer.structure.seatGroups',
                            )}
                        </Text>
                        <Text size='sm'>
                            {t(
                                'seatmaps.upload.hintDrawer.structure.seatShapes',
                            )}
                        </Text>
                    </Stack>
                </Stack>

                {/* Design Tips */}
                <Stack gap='md'>
                    <Title order={4}>
                        {t('seatmaps.upload.hintDrawer.tips.title')}
                    </Title>
                    <Stack gap='xs'>
                        <Text size='sm'>
                            {t('seatmaps.upload.hintDrawer.tips.hierarchy')}
                        </Text>
                        <Text size='sm'>
                            {t('seatmaps.upload.hintDrawer.tips.naming')}
                        </Text>
                        <Text size='sm'>
                            {t('seatmaps.upload.hintDrawer.tips.coordinates')}
                        </Text>
                        <Text size='sm'>
                            {t('seatmaps.upload.hintDrawer.tips.organization')}
                        </Text>
                        <Text size='sm'>
                            {t('seatmaps.upload.hintDrawer.tips.export')}
                        </Text>
                    </Stack>
                </Stack>

                {/* Example Structure */}
                <Stack gap='md'>
                    <Title order={4}>
                        {t('seatmaps.upload.hintDrawer.example.title')}
                    </Title>

                    <Code block>{codeExample}</Code>
                </Stack>
            </Stack>
        </Drawer>
    )
}

const codeExample = `<svg
    fill='none'
    height='1225'
    viewBox='0 0 2450 1225'
    width='2450'
>
    <g id='main-container'>
        <g id='section-a'>
            <path
                d='M2.8964 512.064C1.09348 508.333 3.81192 504 7.95599 504H167.381C170.484 504 173 506.516 173 509.619V658.381C173 661.484 170.484 664 167.381 664H79.8355C77.6796 664 75.7138 662.767 74.7759 660.825L2.8964 512.064Z'
                fill='white'
                id='section-background'
            />
            <g id='row-1'>
                <g id='seat-a1'>
                    <circle
                        cx='158'
                        cy='519'
                        fill='black'
                        id='seat-circle-a1'
                        r='3'
                        transform='rotate(180 158 519)'
                    />
                </g>
                <g id='seat-a2'>
                    <circle
                        cx='150'
                        cy='519'
                        fill='black'
                        id='seat-circle-a2'
                        r='3'
                        transform='rotate(180 150 519)'
                    />
                </g>
                <g id='seat-a3'>
                    <circle
                        cx='142'
                        cy='519'
                        fill='black'
                        id='seat-circle-a3'
                        r='3'
                        transform='rotate(180 142 519)'
                    />
                </g>
            </g>
        </g>
    </g>
</svg>
`
