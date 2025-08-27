'use client'

import { DEFAULT_LANGUAGE } from '@/i18n'
import { AddPrefixToObject } from '@/types/Helpers'
import { noop } from 'lodash'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

export interface AppContextType {
    lang: string

    setLang: (lang: string) => void
}

export const AppContext = createContext<AppContextType>({
    lang: DEFAULT_LANGUAGE,
    setLang: noop,
})

export const useAppContext = () => useContext(AppContext)

type AppProviderProps = Pick<AppContextType, 'lang'>

export function AppProvider({
    children,
    initialLang,
}: AddPrefixToObject<AppProviderProps, 'initial'> & {
    children?: ReactNode | ((props: { lang: string }) => ReactNode)
}) {
    const [lang, setLang] = useState(initialLang)

    const appContext = {
        lang,
        setLang,
    }
    return (
        <AppContext.Provider value={appContext}>
            {typeof children === 'function' ? children({ lang }) : children}
        </AppContext.Provider>
    )
}
