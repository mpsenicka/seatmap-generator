export type AddPrefixToObject<T, P extends string> = {
    [K in keyof T as K extends string ? `${P}${Capitalize<K>}` : never]: T[K]
}
export type ApiActionParam<T extends (...args: never) => unknown> =
    Parameters<T>[0]
