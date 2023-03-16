import mongoose from "mongoose"; 


const PostSchema = new mongoose.Schema({
  name: String,
  prompt: String,
  photo: String
})


const Post = mongoose.model('posts', PostSchema) 
export default Post

