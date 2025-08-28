import { useMediaQuery } from '@mantine/hooks'

export const useResponsiveDevice = () => {
    const isTablet = useMediaQuery(`(min-width: 48em) and (max-width: 62em)`)
    const isMobile = useMediaQuery(`(max-width: 48em)`)
    const isDesktop = useMediaQuery(`(min-width: 62em)`)
    return {
        isDesktop,
        isMobile,
        isTablet,
    }
}
