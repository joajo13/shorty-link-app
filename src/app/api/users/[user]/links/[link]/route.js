import { prisma } from "@/lib/prisma";
import { validateUserExistance } from "@/utils/user/validateUserExistance";
import { validateUserSession } from "@/utils/user/validateUserSession";
import { validateLinkExistanceByLinkId } from "@/utils/link/validateLinkExistanceByLinkId";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const { user: userId, link: linkId } = params;

        const validateExistance = await validateUserExistance(userId);

        if (!validateExistance.isValid) {
            return NextResponse.json({
                error: validateExistance.error
            }, {
                status: 404
            });
        }

        const validateSession = await validateUserSession(userId);

        if (!validateSession.isValid) {
            return NextResponse.json({
                error: validateSession.error
            }, {
                status: 401
            });
        }

        const validateExistanceLink = await validateLinkExistanceByLinkId(linkId);

        if (!validateExistanceLink.isValid) {
            return NextResponse.json({
                error: validateExistanceLink.error
            }, {
                status: 404
            });
        }

        const link = await prisma.link.delete({
            where: {
                id: linkId
            },
            select: {
                id: true
            }
        });

        return NextResponse.json(userId);
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

export async function PUT(req, { params }) {
    try {
        const userId = params.user;
        const body = await req.json()

        const { url, customUrl, linkId } = body

        const validateSession = await validateUserSession(userId);

        if (!validateSession.isValid) {
            return NextResponse.json({
                error: validateSession.error
            }, {
                status: 401
            });
        }

        const validateExistanceUser = await validateUserExistance(userId);

        if (!validateExistanceUser.isValid) {
            return NextResponse.json({
                error: validateExistanceUser.error
            }, {
                status: 404
            });
        }

        const validateExistanceLink = await validateLinkExistanceByLinkId(linkId);

        if (!validateExistanceLink.isValid) {
            return NextResponse.json({
                error: validateExistanceLink.error
            }, {
                status: 404
            });
        }

        const link = await prisma.link.update({
            where: {
                id: linkId
            },
            data: {
                url,
                customUrl
            },
            select: {
                id: true,
                userId: true
            }
        });

        return NextResponse.json(link);
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "An error occurred"
        }, {
            status: 500
        });
    }
}