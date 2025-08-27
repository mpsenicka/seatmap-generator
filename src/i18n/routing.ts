import { defineRouting } from 'next-intl/routing'

import { DEFAULT_LANGUAGE, locales } from './constants'

export const routing = defineRouting({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: DEFAULT_LANGUAGE,
})
