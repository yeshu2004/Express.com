import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/MyBlog")

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model("User", UserSchema)