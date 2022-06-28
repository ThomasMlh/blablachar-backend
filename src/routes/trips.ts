import express, { Request, Response } from "express";
import { Trip, validateTrip as validate } from "../models/trip";
import { ITrip } from "src/types";
import { handleApiError } from "../utils/handleApiError";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  try {
    const trips = await Trip.find();
    if (!trips)
      return res.status(404).send({ message: "Profiles not found" });

    res.send(trips);

    return true;
  } catch (error) {
    handleApiError(error);
    return false;
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    
    const { error } = validate(req.body);
    console.log(error);
    
    if (error) return res.status(400).send({ message: "Bad request" });
    const newTrip: ITrip = new Trip(req.body);

    await newTrip.save();

    console.log(newTrip);

    res.send({ message: "Trip created" });

    return true;
  } catch (error) {
    handleApiError(error);
    return false;
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) return res.status(404).send({ message: "Trip not found" });

    res.send({ message: "Trip deleted" });
    return true;
  } catch (error) {
    handleApiError(error);
    return false;
  }
});

export default router;
