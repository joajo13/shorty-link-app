import { prisma } from "@/lib/prisma"

export const validateCustomUrlExistance = async (customUrl) => {  
    if (!customUrl) {
        return {
            isValid: false,
            error: "Custom link is required"
        }
    }

    const link = await prisma.link.findUnique({
        where: {
            customUrl: customUrl
        }
    });

    if (link) {
        return {
            isValid: false,
            error: "Custom link already exists"
        }
    }

    return {
        isValid: true
    }
}