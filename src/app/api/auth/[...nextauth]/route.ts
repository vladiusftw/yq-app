import { ROUTES } from '@/lib/routes'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'test@gmail.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                // Usually you make api call to login
                // We will just use mock data
                if (!credentials) return null
                return { id: '1', name: 'John Paul', email: credentials.email }
            },
        }),
    ],
    callbacks: {
        async redirect({ baseUrl }) {
            return baseUrl + ROUTES.Dashboard
        },
        async jwt({ token, user }) {
            // When user logs in, attach info to the token
            if (user) {
                token.id = user.id
                token.name = user.name ?? ''
                token.email = user.email ?? ''
            }
            return token
        },

        async session({ session, token }) {
            // Attach token info to session
            if (token && session.user) {
                session.id = token.id
                session.name = token.name
                session.email = token.email
            }
            return session
        },
    },
})

export { handler as GET, handler as POST }
