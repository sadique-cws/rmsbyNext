import Connect from "@/app/db/Connect"
import Admin from "@/app/db/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken";

export const POST = async (req) => {
    await Connect();
    let record = await req.json();
    const {username,password}  = record;

    try{
        const admin = await Admin.findOne({username});

        if(!admin){
            return NextResponse.json({msg:"Invalid username"},{status:400})
        }

        const validPassword = await bcrypt.compare(password, admin.password);

        if(!validPassword){
            return NextResponse.json({msg:"invalid username and password"}, {status:400})
        }

        // creating token
        const tokenData = {
            id:admin._id,
            username:admin.username
        }

        const token = await JWT.sign(tokenData, process.env.SECRET_KEY, {expiresIn:"1h"})
        const response = NextResponse.json({msg:"Login Successfully",success:true})

        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response;
    }
    catch(e){
        return NextResponse.json({msg:e.message});
    }
} 