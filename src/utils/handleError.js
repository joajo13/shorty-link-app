import { NextResponse } from "next/server";

export const handleError = (error) => {
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