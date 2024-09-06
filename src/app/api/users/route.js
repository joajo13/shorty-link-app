import { ROLES } from '@/constants/roles';
import { handleError } from '@/utils/handleError';
import { NextResponse } from 'next/server';
import { validateUserRol } from '@/utils/user/validateUserRol';
import { prisma } from '@/lib/prisma';

export async function GET(req, { params }) {
    try {
        const rolValidation = await validateUserRol(ROLES.ADMIN);
        if (!rolValidation.isValid) {
            return NextResponse.json({ error: rolValidation.error }, { status: 401 });
        }

        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return NextResponse.json(users);
    } catch (error) {
        return handleError(error);
    }
}