import { prisma } from "@/lib/prisma";

export const getClicksGroupedByDay = async ({ dateRange, rangeValue, linkId }) => {
    const clicksGrouped = await fetchGroupedClicks(linkId, dateRange);

    const formattedClicksByDay = formatClicksByDay(clicksGrouped);

    const dates = generateDateList(dateRange, rangeValue);

    const clicksByDay = fillMissingDates(dates, formattedClicksByDay);

    const totalClicks = calculateTotalClicks(clicksByDay);

    return {
        totalClicks,
        clicks: clicksByDay
    };
};

async function fetchGroupedClicks(linkId, dateRange) {
    return await prisma.click.groupBy({
        by: ['clickedAt'],
        where: {
            linkId,
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
}

function formatClicksByDay(clicksGrouped) {
    return clicksGrouped.map(click => ({
        date: click.clickedAt.toISOString().split('T')[0],
        count: click._count.id
    }));
}

function generateDateList(dateRange, rangeValue) {
    const dates = [];
    for (let i = 0; i < rangeValue; i++) {
        const date = new Date(dateRange);
        date.setDate(date.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
}

function fillMissingDates(dates, formattedClicksByDay) {
    const clicksGroupedFormatted = formattedClicksByDay.reduce((acc, click) => {
        if (!acc[click.date]) {
            acc[click.date] = 0;
        }
        acc[click.date] += click.count;
        return acc;
    }, {});

    return dates.map(date => ({
        date,
        count: clicksGroupedFormatted[date] || 0
    }));
}

function calculateTotalClicks(clicksByDay) {
    return clicksByDay.reduce((acc, click) => acc + click.count, 0);
}