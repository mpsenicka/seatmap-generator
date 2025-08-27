declare namespace NodeJS {
    type DotenvBoolean = 'true' | 'false'

    interface ProcessEnv {
        NEXT_PUBLIC_SERVICE_ENVIRONMENT: 'development' | 'production'

        NEXT_PUBLIC_MAILGUN_AUTHORIZED_RECIPIENT: string

        MAILGUN_API_KEY: string
    }
}
