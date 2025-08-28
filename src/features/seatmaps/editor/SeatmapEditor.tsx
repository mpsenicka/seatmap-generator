'use client'

import { Stack } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { EditorStep, EditorStepper } from './components/editor-stepper'
import { AreaStep } from './components/steps/area-step'
import { UploadStep } from './components/steps/upload-step'
import { VariantStep } from './components/steps/variant-step'

export const SeatmapEditor = () => {
    const [active, setActive] = useState(EditorStep.UPLOAD)
    const t = useTranslations()
    return (
        <Stack flex={1}>
            <EditorStepper active={active} setActive={setActive} />
            {active === EditorStep.UPLOAD && <UploadStep />}
            {active === EditorStep.AREA && <AreaStep />}
            {active === EditorStep.VARIANT && <VariantStep />}
        </Stack>
    )
}
