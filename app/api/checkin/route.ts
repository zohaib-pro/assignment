import { NextResponse } from "next/server";

export async function GET() {
    const data = JSON.stringify({message: 'hello from get'});
    return new NextResponse(data);
}

export async function POST() {
    const data = JSON.stringify({message: 'hello from post'});
    return new NextResponse(data);
}