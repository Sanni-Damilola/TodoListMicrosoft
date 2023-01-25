import { Router } from "express";
import {
  createTask,
  deleteMyDay,
  getTask,
  importantTAsk,
  postPlaned,
} from "../Controller/TaskFunctions";

const route = Router();

route.route("/createTask/:id").post(createTask);
route.route("/getAllTask").get(getTask);
route.route("/createPlanedTask/:id").post(postPlaned);
route.route("/createImportantTask/:id").post(importantTAsk);
route.route("/deleteMyday/:id/:myDayID").delete(deleteMyDay);

export default route;
