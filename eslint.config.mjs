import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: [
            '**/*.js',
            '**/dist',
            '**/build',
            '**/.next',
            '**/node_modules',
            '**/i18next-scanner.config.js',

            '**/next-env.d.ts',
            '**/next.config.js',
            '**/sentry.client.config.js',
            '**/sentry.server.config.js',
            '**/postcss.config.cjs',
            '**/postcss.config.mjs',

            '**/public/**/*.js',
        ],
    },
    eslint.configs.recommended,
    eslintPluginPrettierRecommended,
    ...tseslint.configs.recommended,

    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        plugins: {
            react,
            'simple-import-sort': simpleImportSort,
            import: { rules: importPlugin.rules },
            'unused-imports': unusedImports,
        },
    },
    {
        rules: {
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-empty-object-type': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-redeclare': 'off',
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-submodule-imports': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/jsx-no-lambda': 'off',
            '@typescript-eslint/prefer-interface': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            'import/extensions': 'off',
            'import/no-cycle': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-console': 'off',
            'no-use-before-define': 'off',
            'no-shadow': 'off',
            'no-unused-vars': 'off',
            'no-undef': 'off',
            'default-case': 'off',
            'consistent-return': 'off',
            'class-methods-use-this': 'off',
            'no-irregular-whitespace': 'off',
            'no-param-reassign': 'warn',
            camelcase: 'off',
            'no-underscore-dangle': 'off',
            'no-nested-ternary': 'off',
            'react/prop-types': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'react/jsx-sort-props': [
                2,
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    shorthandLast: false,
                    ignoreCase: true,
                    noSortAlphabetically: false,
                    locale: 'en-US',
                },
            ],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'react/jsx-curly-brace-presence': 'warn',
        },
    },
)
