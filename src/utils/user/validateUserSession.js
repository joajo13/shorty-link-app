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

    return {
        isValid: true
    }
}