import { withAuth } from 'next-auth/middleware'
import { ROLES } from '@/constants/roles.js'

export default withAuth({
    callbacks: {
        authorized: async ({ req, token }) => {
            const { pathname } = req.nextUrl

            if (pathname.startsWith('/dashboard')) return token?.role === ROLES.ADMIN

            const analyticsRegex = /^\/[^\/]+\/analitycs$/;
            if (analyticsRegex.test(pathname)) return !!token

            return false
        },
    }
})

export const config = {
    matcher: [
        '/dashboard',
        '/dashboard/((?!general).*)',
        '/:customUrl/analitycs',
    ]
}