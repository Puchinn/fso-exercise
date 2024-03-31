import { config } from "dotenv";
config();

const configApp = {
  port: process.env.PORT,
  mongodb: process.env.MONGODB_URI,
};

export default configApp;