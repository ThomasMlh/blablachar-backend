import express, { Request, Response } from "express";
import { Profile, validateProfile as validate } from "../models/profile";
import { IProfile } from "src/types";


const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
    try {

        const profiles = await Profile.find();
        if (!profiles) return res.status(404).send({ message: "Profiles not found" });

        res.send(profiles);

        return true
    } catch (error) {
        return error
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const { error } = validate(req.body)
        console.log(error);
        if (error) return res.status(400).send({ message: "Bad request" });

        console.log(req.body);

        console.log("before newProfile");

        const newProfile: IProfile = new Profile(req.body);

        console.log("before save profile");


        await newProfile.save()

        res.send({message: "Profile created"})

        return true

    } catch (error) {
        return error
    }
})


export default router;