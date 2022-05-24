import express, { Request, Response } from "express";
import { Profile, validateProfile as validate } from "../models/profile";
import { IProfile } from "src/types";
import { handleApiError } from "src/utils/handleApiError";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  try {
    const profiles = await Profile.find();
    if (!profiles)
      return res.status(404).send({ message: "Profiles not found" });

    res.send(profiles);

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
    const newProfile: IProfile = new Profile(req.body);

    await newProfile.save();

    res.send({ message: "Profile created" });

    return true;
  } catch (error) {
    handleApiError(error);
    return false;
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).send({ message: "Profile not found" });

    res.send({ message: "Profile deleted" });
    return true;
  } catch (error) {
    handleApiError(error);
    return false;
  }
});

export default router;
