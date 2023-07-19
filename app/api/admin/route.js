import Connect from "@/app/db/Connect"
import Admin from "@/app/db/models/Admin";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    await Connect();
    try{
        let data = await Admin.find({});
        return NextResponse.json({data});
    }
    catch(err){
        return NextResponse.json({error:err.message});
    }
}

