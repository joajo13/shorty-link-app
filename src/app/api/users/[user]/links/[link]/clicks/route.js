import { validateUserExistance } from "@/utils/user/validateUserExistance";
import { validateUserSession } from "@/utils/user/validateUserSession";
import { validateLinkExistanceByCustomUrl } from "@/utils/link/validateLinkExistanceByCustomUrl";
import { validateLinkAuth } from "@/utils/link/validateLinkAuth";
import { getDateRange } from "@/utils/getDateRange";
import { getClicksGroupedByDay } from "@/utils/clicks/getClicksGroupedByDay";
import { NextResponse } from "next/server";
import { calculateTrend } from "@/utils/clicks/calculateTrend";

export async function GET(req, { params }) {
    try {
        const { user: userId, link: customUrl } = params;
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

        const linkUserAuthValidation = await validateLinkAuth(customUrl, userId);
        if (!linkUserAuthValidation.isValid) {
            return NextResponse.json({
                error: linkUserAuthValidation.error
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

        const { dateRange, rangeValue } = getDateRange(range);

        const { totalClicks, clicks } = await getClicksGroupedByDay({
            dateRange,
            rangeValue,
            linkId: validateExistanceLink.link.id
        });

        const trend = calculateTrend(clicks);

        return NextResponse.json({
            totalClicks,
            clicks,
            trend
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
