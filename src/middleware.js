import { withAuth } from 'next-auth/middleware'

export default withAuth({
    callbacks: {
        authorized: async ({ req, token }) => {
            if (token?.role === 'ADMIN') {
                return true
            }

            return !!token
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