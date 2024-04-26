import mongoose from "mongoose";

export const db =async(username,password)=> {
    const url = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-njdmwnc-shard-00-00.ibaqknc.mongodb.net:27017,ac-njdmwnc-shard-00-01.ibaqknc.mongodb.net:27017,ac-njdmwnc-shard-00-02.ibaqknc.mongodb.net:27017/?ssl=true&replicaSet=atlas-ogpspv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected successfully");
    }catch(error){
        console.log("error while connecting"+error.message)
    }
}

export default db;