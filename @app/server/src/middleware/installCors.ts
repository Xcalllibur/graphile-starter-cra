import { Express } from "express";
import cors from "cors";

export default (app: Express) => {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    app.use(cors({
      origin: "http://localhost:3001"
    }))
  }
};
