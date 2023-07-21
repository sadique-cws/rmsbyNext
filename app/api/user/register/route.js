import Connect from "@/app/db/Connect"
import User from "@/app/db/models/User";
import { genSalt, hash } from "bcryptjs";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    await Connect();

    let records = await req.json();
    let {name,fathername,school,className,roll,email,contact,password} = records;

    let slat = await genSalt(10);

    const hashedPassword = await hash(password, slat)
    
    let data = new User({
        name,fathername,school,className,roll,email,contact,password:hashedPassword
    })
    try{
        data = await data.save();
        return NextResponse.json({"msg":"User account Created successfully",data})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}