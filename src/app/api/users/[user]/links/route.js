import { NextResponse } from "next/server";
import { validateUserSession } from "@/utils/user/validateUserSession";
import { validateUserExistance } from "@/utils/user/validateUserExistance";
import { prisma } from "@/lib/prisma";
import { validateCustomUrlExistance } from "@/utils/link/validateCustomUrlExistance";
import { generateRandomCustomUrl } from "@/utils/link/generateRandomCustomUrl";
import { handleError } from "@/utils/handleError";

export async function GET(req, { params }) {
    try {
        const userId = params.user;

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

        const links = await prisma.link.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                url: true,
                customUrl: true,
                faviconUrl: true,
                createdAt: true,
                userId: true,
            }
        })

        return NextResponse.json(links);
    } catch (error) {
        return handleError(error);
    }
}

export async function POST(req, { params }) {
    try {
        const userId = params.user;
        const body = await req.json()

        const { url, customUrl } = body

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

        const faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain=${url}`;

        let aliasUrl = '';

        if (customUrl) {
            const validateExistanceCustomUrl = await validateCustomUrlExistance(customUrl);

            console.log(validateExistanceCustomUrl);

            if (!validateExistanceCustomUrl.isValid) {
                return NextResponse.json({
                    error: validateExistanceCustomUrl.error
                }, {
                    status: 400
                });
            }

            aliasUrl = customUrl;
        }

        if (!customUrl) {
            const randomUrl = await generateRandomCustomUrl();

            aliasUrl = randomUrl;
        }

        const link = await prisma.link.create({
            data: {
                url: url,
                customUrl: aliasUrl,
                faviconUrl,
                userId: userId
            }
        });

        return NextResponse.json(link);
    } catch (error) {
        return handleError(error);
    }
}