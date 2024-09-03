import { prisma } from "@/lib/prisma";
import { validateUserExistance } from "@/utils/user/validateUserExistance";
import { validateUserSession } from "@/utils/user/validateUserSession";
import { validateLinkExistanceByCustomUrl } from "@/utils/link/validateLinkExistanceByCustomUrl";
import { NextResponse } from "next/server";

export async function GET(req, params) {
    try {
        const { user: userId, link: customUrl } = params.params;
        const { searchParams } = new URL(req.url);
        const range = searchParams.get('range');

        const validateSession = await validateUserSession(userId);
        if (!validateSession.isValid) {
            return NextResponse.json({
                error: validateSession.error
            }, {
                status: 401
            });
        }

        const validateExistance = await validateUserExistance(userId);
        if (!validateExistance.isValid) {
            return NextResponse.json({
                error: validateExistance.error
            }, {
                status: 404
            });
        }

        const validateExistanceLink = await validateLinkExistanceByCustomUrl(customUrl);
        if (!validateExistanceLink.isValid) {
            return NextResponse.json({
                error: validateExistanceLink.error
            }, {
                status: 404
            });
        }

        const rangeValue = parseInt(range); //Days to substract
        const dateRange = new Date();
        dateRange.setDate(dateRange.getDate() - rangeValue);

        const clicksGrouped = await prisma.click.groupBy({
            by: ['clickedAt'],
            where: {
                linkId: validateExistanceLink.link.id,
                clickedAt: {
                    gte: dateRange
                }
            },
            _count: {
                id: true
            },
            orderBy: {
                clickedAt: 'asc'
            }
        });

        // Format date as YYYY-MM-DD
        const formattedClicksByDay = clicksGrouped.map(click => ({
            date: click.clickedAt.toISOString().split('T')[0],
            count: click._count.id
        }));

        const clicksGroupedFormatted = formattedClicksByDay.reduce((acc, click) => {
            if (!acc[click.date]) {
                acc[click.date] = 0;
            }
            acc[click.date] += click.count;
            return acc;
        }, {});

        // Generate a list of dates in based on the range
        const dates = [];
        for (let i = 0; i < rangeValue; i++) {
            const date = new Date(dateRange);
            date.setDate(date.getDate() + i);
            dates.push(date.toISOString().split('T')[0]);
        }

        // Fill in the missing dates with 0 clicks
        const clicksByDay = dates.map(date => ({
            date,
            count: clicksGroupedFormatted[date] || 0
        }));

        const totalClicks = clicksByDay.reduce((acc, click) => acc + click.count, 0);

        return NextResponse.json({
            totalClicks,
            clicks: clicksByDay
        });
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
            return NextResponse.json({
                error: error.message
            }, {
                status: 500
            })
        }

        return NextResponse.json({
            error: "An error occurred"
        }, {
            status: 500
        });
    }
}
