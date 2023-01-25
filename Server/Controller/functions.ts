import { Request, Response } from "express";
import schema from "../Model/schema";
import bcrypt from "bcrypt";

// get all data
const GetAllData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const get = await schema.find();

    return res.status(200).json({
      message: "Succefully gotten all data",
      data: get,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured at GetAllData",
      error: error,
    });
  }
};

// get one
const getOneUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getOne = await schema.findById(req.params.id);
    return res.status(200).json({
      message: "Succefully gotten id" + req.params.id,
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured get one",
      error: error,
    });
  }
};

// create user
const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, name, password } = req.body;
    const user = await schema.findOne({ email: email });

    const salt: string = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (user) {
      return res.status(400).json({
        message: "Email aready exit",
      });
    } else {
      const register = await schema.create({
        email,
        name,
        password: hash,
      });

      return res.status(201).json({
        message: "Succefully created User",
        data: register,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occured at createUser",
      error: error,
    });
  }
};

const deleteAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deleteAll = await schema.deleteMany();
    return res.status(200).json({
      message: "Deleted All Data",
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occured in deleteAll",
    });
  }
};

const Login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;

    const getUser = await schema.findOne({ email });

    if (!getUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Success",
      data: getUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occured in login",
    });
  }
};

export { GetAllData, getOneUser, createUser, deleteAll, Login };
