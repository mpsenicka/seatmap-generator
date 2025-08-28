'use client'

import { Divider, Stepper } from '@mantine/core'
import { useTranslations } from 'next-intl'

import { DynamicIcon } from '@/atomic/dynamic-icon'

export enum EditorStep {
    UPLOAD = 0,
    AREA = 1,
    VARIANT = 2,
}

type EditorStepperProps = {
    active: EditorStep
    setActive: (active: EditorStep) => void
}

export const EditorStepper = ({ active, setActive }: EditorStepperProps) => {
    const t = useTranslations()

    return (
        <>
            <Divider />
            <Stepper
                active={active}
                allowNextStepsSelect={false}
                mx='lg'
                my='xs'
                onStepClick={setActive}
            >
                <Stepper.Step
                    description={t(
                        'seatmaps.create.stepper.upload.description',
                    )}
                    icon={<DynamicIcon name='Upload' />}
                    label={t('seatmaps.create.stepper.upload.label')}
                    maw={280}
                />
                <Stepper.Step
                    description={t('seatmaps.create.stepper.area.description')}
                    icon={<DynamicIcon name='ListOrdered' />}
                    label={t('seatmaps.create.stepper.area.label')}
                    maw={280}
                />
                <Stepper.Step
                    description={t(
                        'seatmaps.create.stepper.variant.description',
                    )}
                    icon={<DynamicIcon name='Tags' />}
                    label={t('seatmaps.create.stepper.variant.label')}
                    maw={280}
                />
            </Stepper>
        </>
    )
}
