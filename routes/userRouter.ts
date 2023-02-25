import express, {Request, Response} from "express";
import * as userModel from "../models/user";
import {UserInfo} from "../types/user";
const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
    userModel.findAll((err: Error, users: UserInfo[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": users});
  });
});

export {userRouter};
