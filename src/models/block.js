import { Schema, model } from "mongoose";

const BlockSchema = Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export default model("Block", BlockSchema);
