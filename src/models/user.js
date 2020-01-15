import { Schema, model } from "mongoose";

const UserSchema = Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  about_me: {
      type: String,
      required: true
  },
  profile_image_url: {
    type: String,
    required: true
  },
  job_title: {
    type: String,
    required: true
  },
  company: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true,
      min: 6
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export default model("User", UserSchema);
