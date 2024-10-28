import { prisma } from "@/lib/prisma";

export const validateUsernameExistance = async (username, id) => {
    if (!username) {
        console.log("No username")

        return {
            isValid: false,
            error: "Username not found"
        }
    }

    const where = id
        ? {
            // If an id is provided, exclude this id from the search
            username,
            NOT: { id }
        }
        : {
            // If no id is provided, just search by username
            username
        };

    const user = await prisma.user.findUnique({
        where
    });

    if (user) {
        console.log("Username already exists")

        return {
            isValid: false,
            error: "Username already exists"
        }
    }

    return {
        isValid: true
    }
}