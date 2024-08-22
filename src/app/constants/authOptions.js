

export const authOptions = {
    pages: {
        signIn: "/auth",
        signOut: "/auth",
    },
    session: {
        strategy: "jwt",
    },
    providers: {
        GoogleProvider
    }
}