import { prisma } from "@/lib/prisma";

export const validateEmailExistance = async (email, id) => {
    if (!email) {
        console.log("No email")

        return {
            isValid: false,
            error: "Email not found"
        }
    }

    const where = id
        ? {
            // If an id is provided, exclude this id from the search
            email: email,
            NOT: { id }
        }
        : {
            // If no id is provided, just search by email
            email: email
        };

    const user = await prisma.user.findUnique({
        where
    });

    if (user) {
        console.log("Email already exists")

        return {
            isValid: false,
            error: "Email already exists"
        }
    }

    return {
        isValid: true
    }
}