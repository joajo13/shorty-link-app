import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { customUrl } = params
    const headers = req.headers;
    const ip = headers.get("x-forwarded-for") || headers.get("x-real-ip") || 'Unknown';

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

    console.log({
        geolocationApiResJson
    });

    if (geolocationApiResJson.status === 'fail') {
        const click = await prisma.click.create({
            data: {
                linkId: link.id,
                ip: ip,
            },
        });

        console.log({
            type: 'No geolocation data',
            click
        });
        
    } else {
        const geolocationData = await geolocationApiRes.json();

        const click = await prisma.click.create({
            data: {
                linkId: link.id,
                city: geolocationData.city,
                country: geolocationData.country,
                region: geolocationData.regionName,
                regionCode: geolocationData.region,
                countryCode: geolocationData.countryCode,
                latitude: geolocationData.lat,
                longitude: geolocationData.lon,
                ip: ip,
            },
        });

        console.log({
            type: 'With geolocation data',
            click
        });
    }

    return NextResponse.json({
        url: link.url,
    });
}