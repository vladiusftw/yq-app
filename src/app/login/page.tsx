import LoginForm from '@/components/auth/LoginForm'
import ThemeToggle from '@/components/shared/ThemeToggle'
import React from 'react'

const page = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <ThemeToggle />
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}

export default page
