import { prisma } from "@/lib/prisma";

export const validateUserExistance = async (userId) => {
    // Check if the user exists
    if (!userId) {
        console.log("No user ID")

        return {
            isValid: false,
            error: "User not found"
        }
    }
    
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });

    if (!user) {
        console.log("User not found")

        return {
            isValid: false,
            error: "User not found"
        }
    }

    return {
        isValid: true
    }
}