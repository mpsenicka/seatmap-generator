import { NotificationData, showNotification } from '@mantine/notifications'
import { ReactNode } from 'react'

export const showErrorNotification = (
    t: TTranslate,
    message?: ReactNode,
    options?: Omit<NotificationData, 'title' | 'message' | 'color'>,
) =>
    showNotification({
        color: 'red',
        title: t('common.notifications.error.oops'),
        message: message ?? t('common.notifications.error.tryAgainLater'),
        ...options,
    })

export const showSuccessNotification = (
    t: TTranslate,
    message?: ReactNode,
    options?: Omit<NotificationData, 'title' | 'message' | 'color'>,
) =>
    showNotification({
        color: 'green',
        title: message || t('common.notifications.success.taskSuccessful'),
        message: '',
        ...options,
    })
