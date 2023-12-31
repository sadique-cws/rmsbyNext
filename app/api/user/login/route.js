import Connect from "@/app/db/Connect"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken";
import User from "@/app/db/models/User";

export const POST = async (req) => {
    await Connect();
    let record = await req.json();
    const {email,password}  = record;

    try{
        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({msg:"Invalid email"},{status:400})
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return NextResponse.json({msg:"invalid email and password"}, {status:400})
        }

        // creating token
        const tokenData = {
            id:user._id,
            email:user.email
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