import { Request, Response } from "express";
import TaskSchema from "../Model/TaskSchema";
import mongoose from "mongoose";
import schema from "../Model/schema";

// getTask
const getTask = async (req: Request, res: Response): Promise<Response> => {
  const getAllTask = await TaskSchema.find();
  return res.status(200).json({
    message: "found",
    data: getAllTask,
  });
};

// create Task
const createTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getUser = await schema.findById(req.params.id);

    if (getUser) {
      const { title, date } = req.body;

      let currentDate: Date | string = new Date();
      const getUserTask = await TaskSchema.create({
        title,
        date: date ? date : currentDate,
        reminder: "",
        note: "",
        status: false,
      });

      await getUser?.myDay.push(new mongoose.Types.ObjectId(getUserTask!._id));
      await getUser?.task.push(new mongoose.Types.ObjectId(getUserTask!._id));
      getUser.save();

      return res.status(200).json({
        message: "success",
        data: getUserTask,
      });
    } else {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in creating Task",
      error: error,
    });
  }
};

// post Planed Task
const postPlaned = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getUser = await schema.findById(req.params.id);

    if (getUser) {
      const { title, date } = req.body;

      let currentDate: Date | string = new Date();
      const postPlaned = await TaskSchema.create({
        title,
        date: date ? date : currentDate,
        reminder: "",
        note: "",
        status: false,
      });

      await getUser?.planed.push(new mongoose.Types.ObjectId(postPlaned._id));
      getUser.save();
      return res.status(200).json({
        message: "Successfully posted Planed Taks",
        data: postPlaned,
      });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in post Planned",
      error: error,
    });
  }
};

// post Important Task
const importantTAsk = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getUser = await schema.findById(req.params.id);

    if (getUser) {
      const { title, date } = req.body;
      let currentDate: Date | string = new Date();
      const postImportant = await TaskSchema.create({
        title,
        date: date ? date : currentDate,
        reminder: "",
        note: "",
        status: false,
      });

      await getUser?.important.push(
        new mongoose.Types.ObjectId(postImportant._id)
      );
      return res.status(200).json({
        message: "Successfully posted important task",
        data: postImportant,
      });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in post important Task",
      error: error,
    });
  }
};

// here
// delete My day
const deleteMyDay = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getUser = await schema.findById(req.params.id);
    const deleteMyDay = await TaskSchema.findByIdAndDelete(req.params.myDayID);
    getUser?.myDay?.pull(new mongoose.Types.ObjectId(deleteMyDay?._id));
    getUser?.save();

    return res.status(201).json({
      message: "Succesfully deleted myDay",
      data: getUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in deletMyDay",
    });
  }
};

export { getTask, createTask, postPlaned, importantTAsk, deleteMyDay };
