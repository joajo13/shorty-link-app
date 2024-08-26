import { authOptions } from "@/constants/authOptions"
import { getServerSession } from "next-auth"

export const validateUserSession = async(userId) => {
    const session = await getServerSession(authOptions)

    // If there is no session or user is not logged in
    if (!session || !session.user || !session.user.id) {
        console.log("No session")

        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    // If the user ID in the session does not match the user ID in the URL, the user is trying to access another user's data
    if (session.user.id !== userId) {
        console.log("The user ID in the session does not match the user ID in the URL")

        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    return {
        isValid: true
    }
}