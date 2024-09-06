import { getServerSession } from "next-auth"
import { authOptions } from "@/constants/authOptions"

export const validateUserRol = async (rol) => {
    const session = await getServerSession(authOptions)

    // If there is no session or user is not logged in
    if (!session || !session.user || !session.user.role) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    // If the user rol in the session does not match the user rol in the URL, the user is trying to access another user's data
    if (session.user.role !== rol) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    return {
        isValid: true
    }
}