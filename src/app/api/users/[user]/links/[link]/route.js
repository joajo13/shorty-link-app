import { validateUserExistance } from "@/utils/user/validateUserExistance";
import { validateUserSession } from "@/utils/user/validateUserSession";

export default async function DELETE(req, { params }) {
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

        const validateUserSession = await validateUserSession(userId);

        if (!validateUserSession.isValid) {
            return NextResponse.json({
                error: validateUserSession.error
            }, {
                status: 401
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

        console.log('link', link);

        return NextResponse.json(link.id);
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