import mongoose from "mongoose";
import { beforeAll, afterAll } from "@jest/global";
import { initDatabase } from "../db/init.js";

beforeAll(async () => {
    await initDatabase()
})
afterAll(async () => {
    await mongoose.disconnect()
})