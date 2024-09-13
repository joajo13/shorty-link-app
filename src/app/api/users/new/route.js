import { ROLES } from '@/constants/roles';
import { handleError } from '@/utils/handleError';
import { NextResponse } from 'next/server';
import { validateUserRol } from '@/utils/user/validateUserRol';
import { prisma } from '@/lib/prisma';
import { getDateRange } from "@/utils/getDateRange";

export async function GET(req, { params }) {
    try {
        const { searchParams } = new URL(req.url);
        const range = searchParams.get('range');

        const rolValidation = await validateUserRol(ROLES.ADMIN);
        if (!rolValidation.isValid) {
            return NextResponse.json({ error: rolValidation.error }, { status: 401 });
        }

        const { dateRange } = getDateRange(range);

        const newUsers = await prisma.user.findMany({
            where: {
                createdAt: {
                    gte: dateRange
                }
            },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return NextResponse.json(newUsers);
    } catch (error) {
        return handleError(error);
    }
}