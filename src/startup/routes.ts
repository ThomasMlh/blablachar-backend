import express, { Application } from "express";
import profile from "../routes/profiles"

const routes = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/profiles", profile)
};

export default routes;
