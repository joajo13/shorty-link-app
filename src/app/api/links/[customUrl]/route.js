import { prisma } from "@/lib/prisma";
import { handleError } from "@/utils/handleError";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { customUrl } = params
    const headers = req.headers;
    const ip = headers.get("x-forwarded-for") || headers.get("x-real-ip") || 'Unknown';

    try {
        const link = await prisma.link.findUnique({
            where: {
                customUrl: customUrl,
            },
            select: {
                url: true,
                id: true,
            },
        });

        if (!link) {
            return NextResponse.json({
                error: "Link not found",
            }, {
                status: 404,
            });
        }

        const geolocationApiRes = await fetch(`http://ip-api.com/json/${ip}?fields=16607`);

        const geolocationApiResJson = await geolocationApiRes.json();

        if (geolocationApiResJson.status === 'fail') {
            const click = await prisma.click.create({
                data: {
                    linkId: link.id,
                    ip: ip,
                },
            });
        } else {
            const click = await prisma.click.create({
                data: {
                    linkId: link.id,
                    city: geolocationApiResJson.city,
                    country: geolocationApiResJson.country,
                    region: geolocationApiResJson.regionName,
                    regionCode: geolocationApiResJson.region,
                    countryCode: geolocationApiResJson.countryCode,
                    latitude: geolocationApiResJson.lat,
                    longitude: geolocationApiResJson.lon,
                    ip: ip,
                },
            });
        }

        return NextResponse.json({
            url: link.url,
        });
    } catch (error) {
        handleError(error);
    }
}