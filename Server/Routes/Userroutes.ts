import { Router } from "express";
import {
  createUser,
  deleteAll,
  GetAllData,
  getOneUser,
  Login,
} from "../Controller/functions";

const route = Router();

route.route("/getall").get(GetAllData);
route.route("/post").post(createUser);
route.route("/login").post(Login);
route.route("/deleteall").delete(deleteAll);
route.route("/getone/:id").get(getOneUser);

export default route;
