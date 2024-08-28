import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
    try {
        const links = await prisma.link.findMany({
            select: {
                id: true,
                url: true,
                customUrl: true,
                faviconUrl: true,
                createdAt: true,
                userId: true
            }
        })

        return NextResponse.json(links);
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