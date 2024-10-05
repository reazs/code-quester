import { Document } from "mongoose";

// user interface
export interface IUser extends Document {
  name: string;
  username: string;
}
