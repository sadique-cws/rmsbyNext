import Connect from "@/app/db/Connect"
import User from "@/app/db/models/User";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    await Connect();
    let data = await User.find({})

    return NextResponse.json({data});
}