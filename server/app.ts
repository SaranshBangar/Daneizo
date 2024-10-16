import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";

require("dotenv").config();

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors
app.use(
  cors({
    origin: process.env.ORIGIN,
    // credentials: true
  })
);
app.use("/api/v1/", userRouter);
// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Hello World, api working fr",
  });
});

// for unknown routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(
    `You dont touch it lil bro. ${req.originalUrl} is a private property.`
  ) as any;
  error.statusCode = 404;
  res.status(404).json({
    success: false,
    message: "You dont touch it lil bro, its a private property.",
  });
  next(error);
});
app.use(ErrorMiddleware);
