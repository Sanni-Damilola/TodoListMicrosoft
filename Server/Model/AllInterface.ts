import mongoose from "mongoose";

export type taskData = {
  title?: string;
  date?: string;
  reminder?: string;
  note?: string;
  status: boolean;
};



export interface taskData2 {
  title?: string;
  date?: string;
  reminder?: string;
  note?: string;
  status: boolean;
}
