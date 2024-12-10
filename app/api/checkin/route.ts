import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const data = JSON.stringify({message: 'hello from get'});
    return new NextResponse(data);
}

export async function POST(req: NextRequest) {
    const data = JSON.stringify({message: 'hello from post'});
    return new NextResponse(data);
}