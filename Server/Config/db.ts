import mongoose from "mongoose";

const lifeUrl: string = "";
const url: string = "mongodb://localhost/microsoftTodo";

mongoose.connect(url);
mongoose.connection
  .once("open", () => {
    console.log("connected to ", url);
  })
  .on("error", (error) => {
    console.log("An Error occured in DB", error);
  });


  