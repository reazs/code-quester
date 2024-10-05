import { IUser } from "@/interface";
import mongoose, { Schema, Document, Model, mongo } from "mongoose";



const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
