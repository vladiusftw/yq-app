import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const labelToKey = (label: string) => {
    return label.replaceAll(' ', '-').toLowerCase()
}

export const keyToLabel = (key: string) => {
    return key
        .split('-')
        .map((item) => item?.[0]?.toUpperCase() + item?.slice(1))
        ?.join(' ')
}

export const secondsToMiliseconds = (seconds: number) => seconds * 1000

export const formatDuration = (seconds: number) => {
    if (seconds < 60) {
        return `${seconds} sec`
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return (
            `${minutes} min` +
            (remainingSeconds > 0 ? `, ${remainingSeconds} sec` : '')
        )
    } else {
        const hours = Math.floor(seconds / 3600)
        const remainingMinutes = Math.floor((seconds % 3600) / 60)
        return (
            `${hours} hr` +
            (remainingMinutes > 0 ? `, ${remainingMinutes} min` : '')
        )
    }
}
