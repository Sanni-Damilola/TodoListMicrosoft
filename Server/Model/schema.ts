import mongoose from "mongoose";
import { taskData } from "./AllInterface";

interface UserData {
  name: string;
  email: string;
  password: string;
  myDay: taskData[] | any;
  important: any[];
  planed: any[];
  assined: taskData[];
  task: taskData[] | any;
}

interface myData extends UserData, mongoose.Document {}

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  myDay: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  important: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  planed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  assined: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
});

export default mongoose.model<myData>("users", Schema);
