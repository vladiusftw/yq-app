'use client'
import { secondsToMiliseconds } from '@/lib/utils'
import { useEffect } from 'react'
import { toast } from 'sonner'

const useNotifs = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            toast('A new user has been created', {
                description: new Date().toLocaleString('de-DE', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                }),
            })
        }, secondsToMiliseconds(30))

        return () => clearInterval(interval)
    }, [])
}

export default useNotifs
