import { validateUserExistance } from "@/utils/user/validateUserExistance";
import { validateUserSession } from "@/utils/user/validateUserSession";

export async function fetchUserLinks(userId) {
    const validateExistance = await validateUserExistance(userId);

    if (!validateExistance.isValid) {
        return {
            error: validateExistance.error
        }
    }
    
    const validateSession = await validateUserSession(userId);

    if (!validateSession.isValid) {
        return {
            error: validateSession.error
        }
    }

    const links = await prisma.link.findMany({
        where: {
            userId: userId
        },
        select: {
            url: true,
            customUrl: true,
            faviconUrl: true,
            createdAt: true,
            id: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return links;
}