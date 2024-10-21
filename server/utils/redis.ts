import { Redis } from "ioredis";
require("dotenv").config();
const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("Connecting to Redis");
    return process.env.REDIS_URL;
  }
  throw new Error("Redis connection failed");
};
export const redis = new Redis(redisClient());
