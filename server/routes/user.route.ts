import express from "express";
import {
  activateAccount,
  getUserInfo,
  loginUser,
  logoutUser,
  registerUser,
  socialAuth,
  updateAccessToken,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/activateAccount", activateAccount);
userRouter.post("/login", loginUser);
userRouter.post("/logout", isAuthenticated, logoutUser);
userRouter.get("/refreshToken", updateAccessToken);
userRouter.get("/userinfo", isAuthenticated, getUserInfo);
userRouter.post("/socialAuth", socialAuth);

export default userRouter;
//authorizeRoles("admin")
