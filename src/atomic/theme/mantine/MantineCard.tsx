import { Card, CardCssVariables, PartialTransformVars } from '@mantine/core'

export const MantineCard = Card.extend({
    defaultProps: {
        radius: 'lg',
        p: 'lg',
    },
    vars: (_, props) => {
        return {
            root: {
                '--card-padding': `var(--mantine-spacing-${props.p})`,
            },
        } as PartialTransformVars<CardCssVariables>
    },
})
