import {
    darken,
    MantineColor,
    MantineGradient,
    MantineTheme,
    parseThemeColor,
    rem,
    rgba,
} from '@mantine/core'

export interface VariantColorsResolverInput {
    color: MantineColor | undefined
    theme: MantineTheme
    variant: string
    gradient?: MantineGradient
    autoContrast?: boolean
}

export interface VariantColorResolverResult {
    background: string
    hover: string
    color: string
    border: string
    hoverColor?: string
    disabledBackground: string
    disabledColor: string
    disabledBorder: string
}

export type VariantColorsResolver = (
    input: VariantColorsResolverInput,
) => VariantColorResolverResult

export const VariantColorsResolver: VariantColorsResolver = ({
    color,
    theme,
    variant,
    autoContrast,
}) => {
    const parsed = parseThemeColor({ color, theme })

    const _autoContrast =
        typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast

    if (variant === 'filled') {
        const textColor = _autoContrast
            ? parsed.isLight
                ? 'var(--mantine-color-black)'
                : 'var(--mantine-color-white)'
            : 'var(--mantine-color-white)'
        if (parsed.isThemeColor) {
            if (parsed.shade === undefined) {
                return {
                    background: `var(--mantine-color-${color}-filled)`,
                    hover: `var(--mantine-color-${color}-filled-hover)`,
                    color: textColor,
                    border: `${rem(1)} solid transparent`,
                    disabledBackground: `var(--mantine-color-${color}-3)`,
                    disabledColor: `var(--mantine-color-${color}-9)`,
                    disabledBorder: `${rem(1)} solid transparent`,
                }
            }

            return {
                background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
                hover: `var(--mantine-color-${parsed.color}-${
                    parsed.shade === 9 ? 8 : parsed.shade + 1
                })`,
                color: textColor,
                border: `${rem(1)} solid transparent`,
                disabledBackground: `var(--mantine-color-${parsed.color}-3)`,
                disabledColor: `var(--mantine-color-${parsed.color}-9)`,
                disabledBorder: `${rem(1)} solid transparent`,
            }
        }

        return {
            background: color!,
            hover: darken(color!, 0.1),
            color: textColor,
            border: `${rem(1)} solid transparent`,
            disabledBackground: darken(color!, 0.1),
            disabledColor: textColor,
            disabledBorder: `${rem(1)} solid transparent`,
        }
    }

    if (variant === 'light') {
        if (parsed.isThemeColor) {
            if (parsed.shade === undefined) {
                return {
                    background: `var(--mantine-color-${color}-light)`,
                    hover: `var(--mantine-color-${color}-light-hover)`,
                    color: `var(--mantine-color-${color}-light-color)`,
                    border: `${rem(1)} solid transparent`,
                    disabledBackground: `var(--mantine-color-${color}-light-hover)`,
                    disabledColor: `var(--mantine-color-${color}-light-color)`,
                    disabledBorder: `${rem(1)} solid transparent`,
                }
            }

            const parsedColor = theme.colors[parsed.color][parsed.shade]

            return {
                background: rgba(parsedColor, 0.1),
                hover: rgba(parsedColor, 0.12),
                color: `var(--mantine-color-${parsed.color}-${Math.min(
                    parsed.shade,
                    6,
                )})`,
                border: `${rem(1)} solid transparent`,
                disabledBackground: rgba(parsedColor, 0.12),
                disabledColor: `var(--mantine-color-${parsed.color}-${Math.min(
                    parsed.shade,
                    6,
                )})`,
                disabledBorder: `${rem(1)} solid transparent`,
            }
        }

        return {
            background: rgba(color!, 0.1),
            hover: rgba(color!, 0.12),
            color: color!,
            border: `${rem(1)} solid transparent`,
            disabledBackground: rgba(color!, 0.12),
            disabledColor: color!,
            disabledBorder: `${rem(1)} solid transparent`,
        }
    }

    if (variant === 'outline') {
        if (parsed.isThemeColor) {
            if (parsed.shade === undefined) {
                return {
                    background: 'transparent',
                    hover: `var(--mantine-color-${color}-outline-hover)`,
                    color: `var(--mantine-color-${color}-outline)`,
                    border: `${rem(
                        1,
                    )} solid var(--mantine-color-${color}-outline)`,
                    disabledBackground: `var(--mantine-color-gray-1)`,
                    disabledColor: `var(--mantine-color-gray-3)`,
                    disabledBorder: `var(--mantine-color-gray-3)`,
                }
            }

            return {
                background: 'transparent',
                hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
                color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
                border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${
                    parsed.shade
                })`,
                disabledBackground: `var(--mantine-color-gray-1)`,
                disabledColor: `var(--mantine-color-gray-3)`,
                disabledBorder: `var(--mantine-color-gray-3)`,
            }
        }

        return {
            background: 'transparent',
            hover: rgba(color!, 0.05),
            color: color!,
            border: `${rem(1)} solid ${color}`,
            disabledBackground: rgba(color!, 0.05),
            disabledColor: color!,
            disabledBorder: `${rem(1)} solid ${color}`,
        }
    }

    if (variant === 'subtle') {
        if (parsed.isThemeColor) {
            if (parsed.shade === undefined) {
                return {
                    background: 'transparent',
                    hover: `var(--mantine-color-${color}-light-hover)`,
                    color: `var(--mantine-color-${color}-light-color)`,
                    border: `${rem(1)} solid transparent`,
                    disabledBackground: `var(--mantine-color-${color}-3)`,
                    disabledColor: `var(--mantine-color-${color}-3)`,
                    disabledBorder: `${rem(1)} solid ${color}`,
                }
            }

            const parsedColor = theme.colors[parsed.color][parsed.shade]

            return {
                background: 'transparent',
                hover: rgba(parsedColor, 0.12),
                color: `var(--mantine-color-${parsed.color}-${Math.min(
                    parsed.shade,
                    6,
                )})`,
                border: `${rem(1)} solid transparent`,
                disabledBackground: `var(--mantine-color-${parsed.color}-3)`,
                disabledColor: `var(--mantine-color-${parsed.color}-3)`,
                disabledBorder: `${rem(1)} solid ${color}`,
            }
        }

        return {
            background: 'transparent',
            hover: rgba(color!, 0.12),
            color: color!,
            border: `${rem(1)} solid transparent`,
            disabledBackground: rgba(color!, 0.12),
            disabledColor: color!,
            disabledBorder: `${rem(1)} solid ${color}`,
        }
    }

    if (variant === 'transparent') {
        if (parsed.isThemeColor) {
            if (parsed.shade === undefined) {
                return {
                    background: 'transparent',
                    hover: 'transparent',
                    color: `var(--mantine-color-${color}-light-color)`,
                    border: `${rem(1)} solid transparent`,
                    disabledBackground: 'transparent',
                    disabledColor: `var(--mantine-color-${color}-3)`,
                    disabledBorder: `${rem(1)} solid ${color}`,
                }
            }

            return {
                background: 'transparent',
                hover: 'transparent',
                color: `var(--mantine-color-${parsed.color}-${Math.min(
                    parsed.shade,
                    6,
                )})`,
                border: `${rem(1)} solid transparent`,
                disabledBackground: 'transparent',
                disabledColor: `var(--mantine-color-${parsed.color}-3)`,
                disabledBorder: `${rem(1)} solid ${color}`,
            }
        }

        return {
            background: 'transparent',
            hover: 'transparent',
            color: color!,
            border: `${rem(1)} solid transparent`,
            disabledBackground: 'transparent',
            disabledColor: color!,
            disabledBorder: `${rem(1)} solid ${color}`,
        }
    }

    if (variant === 'white') {
        if (parsed.isThemeColor) {
            if (parsed.shade === undefined) {
                return {
                    background: 'var(--mantine-color-gray-0)',
                    hover: darken(theme.white, 0.01),
                    color: `var(--mantine-color-${color}-filled)`,
                    border: `${rem(1)} solid transparent`,
                    disabledBackground: darken(theme.white, 0.01),
                    disabledColor: `var(--mantine-color-${color}-3)`,
                    disabledBorder: `${rem(1)} solid ${color}`,
                }
            }

            return {
                background: 'var(--mantine-color-gray-0)',
                hover: darken(theme.white, 0.01),
                color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
                border: `${rem(1)} solid transparent`,
                disabledBackground: darken(theme.white, 0.01),
                disabledColor: `var(--mantine-color-${parsed.color}-3)`,
                disabledBorder: `${rem(1)} solid ${color}`,
            }
        }

        return {
            background: 'var(--mantine-color-gray-0)',
            hover: darken(theme.white, 0.01),
            color: color!,
            border: `${rem(1)} solid transparent`,
            disabledBackground: darken(theme.white, 0.01),
            disabledColor: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
            disabledBorder: `${rem(1)} solid ${color}`,
        }
    }

    return {} as VariantColorResolverResult
}
