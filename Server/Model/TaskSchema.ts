import mongoose from "mongoose";
import { taskData2 } from "./AllInterface";

interface NewTask extends taskData2, mongoose.Document {}

const Task = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  reminder: {
    type: String,
  },
  note: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  day: {
    type: mongoose.Schema.Types.ObjectId,
    res: "users",
  },
});

export default mongoose.model<NewTask>("tasks", Task);
