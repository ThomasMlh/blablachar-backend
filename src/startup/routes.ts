import express, { Application } from "express";
import trip from "../routes/trips";
import char from "../routes/chars";
import profile from "../routes/profiles";

const routes = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/trips", trip);
  app.use("/api/chars", char);
  app.use("/api/profiles", profile);
};

export default routes;
