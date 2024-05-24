import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
},{
    timestamps:true
}
);
//delete the model if it exists
if(mongoose.models){
    const userModel = mongoose.models["users"]
    if(userModel){
        delete mongoose.models[userModel.modelName]
    }
}


export const UserModel = mongoose.model("users",userSchema);