'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { IconMoon, IconSun } from '@tabler/icons-react'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const onThemeToggle = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }
    return (
        <Button variant={'ghost'} size="icon" onClick={onThemeToggle}>
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
        </Button>
    )
}

export default ThemeToggle
