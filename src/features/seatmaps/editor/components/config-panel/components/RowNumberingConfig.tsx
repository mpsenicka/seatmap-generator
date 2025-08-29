import { Button, NumberInput, Select, Stack } from '@mantine/core'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
    NumberingRowDirection,
    NumberingStyle,
    RowNumberingConfigDto,
} from '../../../types'

type Props = {
    applyNumbering?: (config: RowNumberingConfigDto) => void
    resetNumbering?: () => void
}

export const RowNumberingConfig = ({
    applyNumbering,
    resetNumbering,
}: Props) => {
    const t = useTranslations()

    const [rowNamingStyle, setRowNamingStyle] =
        useState<NumberingStyle>('numeric')
    const [startingRowNumber, setStartingRowNumber] = useState<number>(1)
    const [rowDirection, setRowDirection] =
        useState<NumberingRowDirection>('top')

    const handleApplyNumbering = () => {
        applyNumbering?.({
            style: rowNamingStyle,
            startingNumber: startingRowNumber,
            direction: rowDirection,
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
                                'seatmaps.create.config.rowNumbering.numericStyle',
                            ),
                        },
                        {
                            value: 'alphabetic',
                            label: t(
                                'seatmaps.create.config.rowNumbering.alphabeticStyle',
                            ),
                        },
                    ]}
                    label={t('seatmaps.create.config.rowNumbering.styleLabel')}
                    size='xs'
                    value={rowNamingStyle}
                    onChange={(val) => setRowNamingStyle(val as NumberingStyle)}
                />

                {rowNamingStyle === 'numeric' && (
                    <NumberInput
                        label={t(
                            'seatmaps.create.config.rowNumbering.startingNumberLabel',
                        )}
                        min={1}
                        size='xs'
                        value={startingRowNumber}
                        onChange={(val) => setStartingRowNumber(Number(val))}
                    />
                )}

                <Select
                    data={[
                        {
                            value: 'top',
                            label: t(
                                'seatmaps.create.config.rowNumbering.fromTop',
                            ),
                        },
                        {
                            value: 'bottom',
                            label: t(
                                'seatmaps.create.config.rowNumbering.fromBottom',
                            ),
                        },
                    ]}
                    label={t(
                        'seatmaps.create.config.rowNumbering.directionLabel',
                    )}
                    size='xs'
                    value={rowDirection}
                    onChange={(val) =>
                        setRowDirection(val as NumberingRowDirection)
                    }
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
