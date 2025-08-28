/* eslint-disable unused-imports/no-unused-vars */
import { useTranslations } from 'next-intl'

import cs from '../messages/cs.json'

type MessagesApp = typeof cs

type Messages = MessagesApp

declare global {
    interface IntlMessages extends Messages {}
    type TTranslate = ReturnType<typeof useTranslations<never>>
}
