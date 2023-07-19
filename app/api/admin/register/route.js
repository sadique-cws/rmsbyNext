import Connect from "@/app/db/Connect"
import Admin from "@/app/db/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    await Connect();
    let record = await req.json();
    let {username, password}  = record;

    let salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    let data = new Admin({username,password:hashedPassword});
        
    try{
        data  = await data.save();
        return NextResponse.json({"msg":"Admin Account created successfully",data})
    }
    catch(err){
        return NextResponse.json({"msg":err.message})
    }
}