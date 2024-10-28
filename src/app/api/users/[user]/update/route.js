import { prisma } from "@/lib/prisma";
import { handleError } from '@/utils/handleError';
import { validateUsernameExistance } from "@/utils/user/validateUsernameExistance";
import { validateEmailExistance } from "@/utils/user/validateEmailExistance";
import { validateUserRole } from "@/utils/user/validateUserRole";
import { ROLES } from "@/constants/roles";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
    try {
        const { id, name, email, role } = formData;

        const userNameExistanceValidation = await validateUsernameExistance(name, id);

        if (!userNameExistanceValidation.isValid) {
            return NextResponse.json({ error: userNameExistanceValidation.error });
        }

        const emailExistanceValidation = await validateEmailExistance(email, id);
        if (!emailExistanceValidation.isValid) {
            return NextResponse.json({ error: emailExistanceValidation.error });
        }

        const userRoleValidation = await validateUserRole(ROLES.ADMIN);
        if (!userRoleValidation.isValid) {
            return NextResponse.json({ error: userRoleValidation.error });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                role
            }
        });

        return NextResponse.json({ user: updatedUser });
    } catch (error) {
        return handleError(error);
    }
}