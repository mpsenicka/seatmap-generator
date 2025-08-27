const typescriptTransform = require('i18next-scanner-typescript')

module.exports = {
    input: ['src/**/*.{ts,tsx}'],
    output: './',
    options: {
        plural: false,
        removeUnusedKeys: true,
        sort: true,
        func: {
            list: ['t', 't.rich'],
        },
        lngs: ['cs', 'en'],
        defaultNs: 'common',
        defaultValue: '__NOT_TRANSLATED__',
        resource: {
            loadPath: 'src/messages/{{lng}}.json',
            savePath: 'src/messages/{{lng}}.json',
            jsonIndent: 2,
        },
        compatibilityJSON: 'v4',
    },
    transform: typescriptTransform({
        extensions: ['.ts', '.tsx'],
        tsOptions: {
            target: 'es6',
        },
    }),
}
