import { Text } from '@mantine/core'

export const MantineText = Text.extend({
    defaultProps: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component: 'div',
        lh: 1.1,
    },
})
