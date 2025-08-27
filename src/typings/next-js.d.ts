import 'next/navigation'

interface Params {
    locale: string
    organizerId: string
    eventId: string

    [key: string]: string
}

declare module 'next/navigation' {
    export function useParams<T extends Params = Params>(): T
}
