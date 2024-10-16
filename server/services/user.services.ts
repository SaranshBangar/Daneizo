import { Response } from "express";
import userModel from "../models/user.model";
import { redis } from "../utils/redis";

export const getUserById = async (id: string, res: Response) => {
  try {
    const userJSON = await redis.get(id);

    if (userJSON) {
      const user = JSON.parse(userJSON);
      return res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error: any) {
    console.error("Error fetching user from Redis:", error);
  }
};

export const getAllUserService = async (res: Response) => {
  try {
    console.log("haha");
    const users = await userModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateUserRoleService = async (
  res: Response,
  id: string,
  role: string
) => {
  try {
    const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error: any) {
    console.error("Error updating user role:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// export const getUserById = async (id: string, res: Response) => {
//   try {
//     const user = await userModel.findOne({ _id: id });
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// get all users
