import { EmptyObject } from '@/utils/typescript'
import { PropsWithChildren } from 'react'

import { Params } from '@/typings/next-js'

type PageableSearchParam<T extends Record<string, string>> = T & {
    page?: string
    pageSize?: string
    filter?: string
    sorter?: string
    preset?: string
}

export type PageProps<
    T extends Record<string, string> = Record<string, string>,
    R extends Record<string, string> = Record<string, string>,
> = {
    params?: Promise<T & Params>
    searchParams?: Promise<PageableSearchParam<R>>
}

export type LayoutPageProps<T extends Record<string, string> = EmptyObject> =
    PropsWithChildren<{
        params?: Promise<T & Params>
    }>

export type GenerateMetadataProps<
    T extends Record<string, string> = EmptyObject,
> = {
    params?: Promise<T & Params>
}
