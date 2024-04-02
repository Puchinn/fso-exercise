import { config } from "dotenv";
config();

const configApp = {
  port: process.env.PORT || 5000,
  mongodb: process.env.MONGODB_URI,
};

export default configApp;
