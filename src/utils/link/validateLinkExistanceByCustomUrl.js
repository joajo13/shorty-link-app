import { prisma } from "@/lib/prisma";

export const validateLinkExistanceByCustomUrl = async (customUrl) => {
    if (!customUrl) {
        return {
            isValid: false,
            error: "Link not found"
        }
    }

    const link = prisma.link.findUnique({
        where: {
            customUrl
        }
    });

    if (!link) {
        return {
            isValid: false,
            error: "Link not found"
        }
    }

    return {
        isValid: true,
        link
    }
}