'use client'

import {
    ActionIcon,
    Button,
    Card,
    FileInput,
    Group,
    MultiSelect,
    Stack,
    Text,
    Tooltip,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import { DynamicIcon } from '@/atomic/dynamic-icon'
import { Topbar } from '@/components/layout'

import { DesignerHintDrawer } from './components/DesignerHintDrawer'
import { SupportedLanguages } from './constants'

const getSchema = (t: TTranslate) => {
    return z.object({
        mapFile: z.file().mime('image/svg+xml'),
        backgroundFile: z.file().mime('image/svg+xml').optional(),
        languages: z.array(z.enum(SupportedLanguages)).min(1),
    })
}

type FormValues = z.infer<ReturnType<typeof getSchema>>

type UploadStepProps = {
    processMap: (
        map: File,
        background: File,
        languages: SupportedLanguages[],
    ) => Promise<void>
}

export const UploadStep = ({ processMap }: UploadStepProps) => {
    const t = useTranslations()
    const [opened, { open, close }] = useDisclosure(false)

    const languageOptions = [
        { value: SupportedLanguages.CS, label: 'Čeština' },
        { value: SupportedLanguages.EN, label: 'English' },
        { value: SupportedLanguages.DE, label: 'Deutsch' },
        { value: SupportedLanguages.FR, label: 'Français' },
        { value: SupportedLanguages.ES, label: 'Español' },
        { value: SupportedLanguages.IT, label: 'Italiano' },
        { value: SupportedLanguages.PL, label: 'Polski' },
        { value: SupportedLanguages.SK, label: 'Slovenčina' },
    ]

    const schema = getSchema(t)

    const form = useForm({
        initialValues: {
            mapFile: null,
            backgroundFile: null,
            languages: [SupportedLanguages.CS],
        },
        validate: zod4Resolver(schema),
    })

    const handleSubmit = async (values: FormValues) => {
        await processMap(
            values.mapFile,
            values.backgroundFile,
            values.languages,
        )
    }

    return (
        <Stack flex={1}>
            <Topbar
                withBackButton
                right={
                    <Group>
                        <Tooltip label={t('seatmaps.upload.hintButton')}>
                            <ActionIcon
                                color='indigo'
                                radius='xl'
                                size='lg'
                                variant='transparent'
                                onClick={open}
                            >
                                <DynamicIcon name='Info' size={20} />
                            </ActionIcon>
                        </Tooltip>
                        <Button
                            rightSection={
                                <DynamicIcon name='ArrowRight' size={16} />
                            }
                            onClick={() => form.onSubmit(handleSubmit)()}
                        >
                            {t('common.actions.nextStep')}
                        </Button>
                    </Group>
                }
                title={t('seatmaps.upload.heading')}
            />
            <Card withBorder padding='xl' radius='md' shadow='sm'>
                <Stack gap='lg'>
                    <Text>{t('seatmaps.upload.description')}</Text>
                    <Group align='flex-start' wrap='wrap'>
                        <FileInput
                            required
                            accept='.svg'
                            leftSection={
                                <DynamicIcon name='Upload' size={16} />
                            }
                            placeholder={t('seatmaps.upload.mapUpload')}
                            {...form.getInputProps('mapFile')}
                        />
                        <FileInput
                            accept='.svg'
                            leftSection={
                                <DynamicIcon name='CloudUpload' size={16} />
                            }
                            placeholder={t('seatmaps.upload.backgroundUpload')}
                            {...form.getInputProps('backgroundFile')}
                        />
                    </Group>

                    <MultiSelect
                        clearable
                        required
                        searchable
                        data={languageOptions}
                        label={t('seatmaps.upload.languages.label')}
                        placeholder={t('seatmaps.upload.languages.placeholder')}
                        rightSection={
                            <DynamicIcon name='ChevronsUpDown' size={16} />
                        }
                        style={{ minWidth: 300 }}
                        {...form.getInputProps('languages')}
                    />
                </Stack>
            </Card>
            <DesignerHintDrawer close={close} opened={opened} />
        </Stack>
    )
}
