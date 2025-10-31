import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // full name
    username: { type: String, unique: true }, // unique username
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: "" }, // optional phone number
    location: { type: String, default: "" },
    bio: { type: String, default: "" },
    profilePic: { type: String, default: "" }, // URL of uploaded image
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
