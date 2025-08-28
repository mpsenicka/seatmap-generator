import {
    PartialTransformVars,
    SegmentedControl,
    SegmentedControlCssVariables,
} from '@mantine/core'

import classes from './MantineSegmentedControl.module.css'

export const MantineSegmentedControl = SegmentedControl.extend({
    classNames: {
        root: classes.root,
        label: classes.label,
        indicator: classes.indicator,
    },
    vars: () => {
        //Mantine has a problem with loading base color. First style is applied from css vars, rendered in SSR, after that, indicator classes are loaded and applied. There is slight delay. The base style is background-color, so we cannot apply a gradient.
        return {
            root: {
                '--sc-color': 'var(--mantine-color-indigo-6)',
            },
        } as PartialTransformVars<SegmentedControlCssVariables>
    },
})
