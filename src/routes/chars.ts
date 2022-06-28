import express, { Request, Response } from "express";
import { Char, validateChar as validate } from "../models/char";
import { IChar } from "../types";
import { handleApiError } from "../utils/handleApiError";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
    try {
        const chars = await Char.find();
        if (!chars)
            return res.status(404).send({ message: "Chars not found" });

        res.send(chars);

        return true;
    } catch (error) {
        handleApiError(error);
        return false;
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: "Bad request" });
        
        const newChar: IChar = new Char(req.body);

        await newChar.save();

        res.send({ message: "Char created" });

        return true;
    } catch (error) {
        handleApiError(error);
        return false;
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: "Bad request" });

        const newChar: IChar = new Char(req.body);

        await newChar.save();

        res.send({ message: "Char created" });

        return true;
    } catch (error) {
        handleApiError(error);
        return false;
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const char = await Char.findByIdAndDelete(req.params.id);
      if (!char) return res.status(404).send({ message: "Char not found" });
  
      res.send({ message: "Char deleted" });
      return true;
    } catch (error) {
      handleApiError(error);
      return false;
    }
  });

export default router;