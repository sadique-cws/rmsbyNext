import mongoose from "mongoose";

const Connect = async () => {
    try{
        return await mongoose.connect("mongodb://127.0.0.1:27017/rms");
    }
    catch(e){
        throw new Error("database connection failed");
    }
}

export default Connect;