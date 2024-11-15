import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

const url = 'https://maintenancesystembc-production.up.railway.app/api/v1/vehicles';


export async function POST (request: Request){
    const session = await getServerSession(authOptions);
    const vehicle = await request.formData()
    const response = await fetch(url,{
        method : 'POST',
        headers: {
            'Authorization' : `Bearer ${session?.user.token}`
        },
        body: vehicle
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}