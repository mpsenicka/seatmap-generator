'use client'

import { Stack } from '@mantine/core'
import { useState } from 'react'

import { EditorStep, EditorStepper } from './components/editor-stepper'
import { AreaStep } from './components/steps/area-step'
import { UploadStep } from './components/steps/upload-step'
import { SupportedLanguages } from './components/steps/upload-step/constants'
import { VariantStep } from './components/steps/variant-step'

export const SeatmapEditor = () => {
    const [active, setActive] = useState(EditorStep.AREA)

    const handleProcessMap = async (
        map: File,
        background: File,
        languages: SupportedLanguages[],
    ) => {
        console.log(map, background, languages)
        setActive(EditorStep.AREA)
    }

    const handleProcessArea = () => {
        setActive(EditorStep.VARIANT)
    }

    return (
        <Stack flex={1}>
            {active === EditorStep.UPLOAD && (
                <UploadStep processMap={handleProcessMap} />
            )}
            {active === EditorStep.AREA && (
                <AreaStep
                    onBack={() => setActive(EditorStep.UPLOAD)}
                    onSubmit={handleProcessArea}
                />
            )}
            {active === EditorStep.VARIANT && <VariantStep />}
            <EditorStepper active={active} setActive={setActive} />
        </Stack>
    )
}
