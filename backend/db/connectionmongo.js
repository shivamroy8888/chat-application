import mongoose from "mongoose";

const connectiontomongo = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongodb")
    } catch (error) {
        console.log("error in connecting to mongodb",error.massege)
    }
}

export default connectiontomongo;