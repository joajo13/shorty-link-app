import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";


export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        error: "/",
        signIn: "/account",
        signOut: "/account",
    },
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return ({
                    id: profile.sub,
                    name: `${profile.given_name} ${profile.family_name}`,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role
                })
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update") return { ...token, ...session.user };

            if (user) {
                await prisma.user.update({
                    where: { id: user.id },
                    data: { lastLogin: new Date() }
                })
            }

            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.role = token.role;

            return session;
        }
    }
}