import express, { Application, Response, Request } from "express";
import cors from "cors";
import route from "../Routes/Userroutes";
import taskRoute from "../Routes/Taskroute";
import morgan from "morgan";

const app: Application = express();
app.use(express.json());

const port: string | number = 2001 || process.env.port;
require("../Config/db");

app.all("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "TodoList EndPoint Up",
  });
});

app.use(cors()).use(morgan("dev"));
app.use("/api", route);
app.use("/api", taskRoute);
app.listen(port, () => {
  console.log("Done");
});
