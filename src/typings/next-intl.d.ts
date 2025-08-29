import { useTranslations } from 'next-intl'

import cs from '../messages/cs.json'

type MessagesApp = typeof cs

type Messages = MessagesApp

declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntlMessages extends Messages {}
    type TTranslate = ReturnType<typeof useTranslations<never>>
}
