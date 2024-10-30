import { prisma } from '@/lib/prisma.ts';

export const validateLinkAuth = async (customUrl, userId) => {
    // Check if user is logged in
    if (!userId) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    const link = await prisma.link.findFirst({
        where: {
            userId,
            customUrl
        }
    });

    if (!link) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    });

    if (!user) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    if (link.userId !== user.id) {
        return {
            isValid: false,
            error: "Unauthorized"
        }
    }

    return {
        isValid: true
    }
}