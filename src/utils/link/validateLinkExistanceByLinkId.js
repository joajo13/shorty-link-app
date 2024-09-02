import { prisma } from "@/lib/prisma";

export const validateLinkExistanceByLinkId = async (linkId) => {
    if (!linkId) {
        return {
            isValid: false,
            error: "Link not found"
        }
    }

    const link = prisma.link.findUnique({
        where: {
            id: linkId
        }
    });

    if (!link) {
        return {
            isValid: false,
            error: "Link not found"
        }
    }

    return {
        isValid: true
    }
}