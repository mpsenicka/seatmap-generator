import { Button, NumberInput, Select, Stack } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
    NumberingPattern,
    NumberingSeatDirection,
    NumberingStyle,
    SeatNumberingConfigDto,
} from '../../../types'

type Props = {
    applyNumbering?: (config: SeatNumberingConfigDto) => void
    resetNumbering?: () => void
}

export const SeatNumberingConfig = ({
    applyNumbering,
    resetNumbering,
}: Props) => {
    const t = useTranslations()

    const [seatNumberingStyle, setSeatNumberingStyle] =
        useState<NumberingStyle>('numeric')
    const [startingSeatNumber, setStartingSeatNumber] = useState<number>(1)
    const [direction, setDirection] =
        useState<NumberingSeatDirection>('left-to-right')
    const [pattern, setPattern] = useState<NumberingPattern>('sequential')

    const handleApplyNumbering = () => {
        applyNumbering?.({
            style: seatNumberingStyle,
            startingNumber: startingSeatNumber,
            direction,
            pattern,
        })
    }

    const handleResetNumbering = () => {
        resetNumbering?.()
    }

    return (
        <Stack h='100%' justify='space-between' p='sm'>
            <Stack>
                <Select
                    data={[
                        {
                            value: 'numeric',
                            label: t(
                                'seatmaps.create.config.seatNumbering.numericStyle',
                            ),
                        },
                        {
                            value: 'alphabetic',
                            label: t(
                                'seatmaps.create.config.seatNumbering.alphabeticStyle',
                            ),
                        },
                    ]}
                    label={t('seatmaps.create.config.seatNumbering.styleLabel')}
                    size='xs'
                    value={seatNumberingStyle}
                    onChange={(val) =>
                        setSeatNumberingStyle(val as NumberingStyle)
                    }
                />

                {seatNumberingStyle === 'numeric' && (
                    <NumberInput
                        label={t(
                            'seatmaps.create.config.seatNumbering.startingNumberLabel',
                        )}
                        min={1}
                        size='xs'
                        value={startingSeatNumber}
                        onChange={(val) => setStartingSeatNumber(Number(val))}
                    />
                )}

                <Select
                    data={[
                        {
                            value: 'left-to-right',
                            label: t(
                                'seatmaps.create.config.seatNumbering.leftToRight',
                            ),
                        },
                        {
                            value: 'right-to-left',
                            label: t(
                                'seatmaps.create.config.seatNumbering.rightToLeft',
                            ),
                        },
                    ]}
                    label={t(
                        'seatmaps.create.config.seatNumbering.directionLabel',
                    )}
                    size='xs'
                    value={direction}
                    onChange={(val) =>
                        setDirection(val as NumberingSeatDirection)
                    }
                />

                <Select
                    data={[
                        {
                            value: 'sequential',
                            label: t(
                                'seatmaps.create.config.seatNumbering.sequentialPattern',
                            ),
                        },
                        {
                            value: 'zigzag',
                            label: t(
                                'seatmaps.create.config.seatNumbering.zigzagPattern',
                            ),
                        },
                    ]}
                    label={t(
                        'seatmaps.create.config.seatNumbering.patternLabel',
                    )}
                    size='xs'
                    value={pattern}
                    onChange={(val) => setPattern(val as NumberingPattern)}
                />
            </Stack>
            <Stack gap='xs'>
                <Button onClick={handleApplyNumbering}>
                    {t('seatmaps.create.config.numbering.applyNumberingCta')}
                </Button>
                <Button variant='outline' onClick={handleResetNumbering}>
                    {t('seatmaps.create.config.numbering.clearNumberingCta')}
                </Button>
            </Stack>
        </Stack>
    )
}
