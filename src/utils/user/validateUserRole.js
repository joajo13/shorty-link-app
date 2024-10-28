import { getServerSession } from "next-auth"
import { authOptions } from "@/constants/authOptions"

export const validateUserRole = async (role) => {
    const session = await getServerSession(authOptions)

    // If there is no session or user is not logged in
    if (!session || !session.user || !session.user.role) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    // If the user role is different from the required role
    if (role && (session.user.role !== role)) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    return {
        isValid: true
    }
}