/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ValueOf<T> = T[keyof T]

export type TabItem<T extends string = string> = {
    key: T
    content: ReactNode
    title: string
}

export type DispatchState<T> = Dispatch<SetStateAction<T>>

export type Predicate<T> = (item: T) => boolean

export type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
) extends (k: infer I) => void
    ? I
    : never

export type EmptyObject = Record<string, never>

export type Paths<T, Prefix extends string = ''> = T extends object
    ? {
          [K in keyof T]: K extends string
              ? `${Prefix}${K}` | Paths<T[K], `${Prefix}${K}.`>
              : never
      }[keyof T]
    : never

export type PickPaths<
    T,
    Keys extends keyof T,
    Prefix extends string = '',
    Depth extends number[] = [],
> = Depth['length'] extends 10 // Limit recursion depth to 10
    ? never
    : {
          [K in Keys]: K extends string
              ?
                    | `${Prefix}${K}`
                    | (T[K] extends object
                          ? PickPaths<
                                T[K],
                                keyof T[K],
                                `${Prefix}${K}.`,
                                [...Depth, 1]
                            >
                          : never)
              : never
      }[Keys]
