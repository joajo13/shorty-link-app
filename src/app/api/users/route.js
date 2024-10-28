import { ROLES } from '@/constants/roles';
import { handleError } from '@/utils/handleError';
import { NextResponse } from 'next/server';
import { validateUserRole } from '@/utils/user/validateUserRole';
import { prisma } from '@/lib/prisma';
import { getDateRange } from '@/utils/getDateRange';

export async function GET(req, { params }) {
    try {
        const range = req.nextUrl.searchParams.get('range');
        const role = req.nextUrl.searchParams.get('role');
        const filters = {}

        const rolValidation = await validateUserRole(ROLES.ADMIN);
        if (!rolValidation.isValid) {
            return NextResponse.json({ error: rolValidation.error }, { status: 401 });
        }

        const { dateRange } = getDateRange(range);

        if (dateRange) {
            filters.createdAt = {
                gte: dateRange
            }
        }

        if (role) {
            filters.role = role;
        }

        const users = await prisma.user.findMany({
            where: filters,
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
                lastLogin: true
            }
        })

        return NextResponse.json(users);
    } catch (error) {
        return handleError(error);
    }
}