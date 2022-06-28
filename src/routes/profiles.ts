import express, { Request, Response } from "express";
import { Profile, validateProfile as validate} from "../models/profile";
import { IProfile } from "../types";
import { handleApiError } from "../utils/handleApiError";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
    try {
        const profile = await Profile.find();
        if (!profile)
            return res.status(404).send({ message: "Chars not found" });

        res.send(profile);

        return true;
    } catch (error) {
        handleApiError(error);
        return false;
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const { error } = validate(req.body);
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

export default router;