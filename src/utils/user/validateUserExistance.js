import { prisma } from "@/lib/prisma";

export const validateUserExistance = async (userId) => {
    if (!userId) {
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
        return {
            isValid: false,
            error: "User not found"
        }
    }

    return {
        isValid: true
    }
}