import mongoose, { Schema } from "mongoose";
import { IChar } from "../types";
import Joi from "joi";


export const charSchema = new Schema({
    name: {
        type: String,
    },
    horses: {
        type: Number,
    },
    speed: {
        type: Number,
    },
    seats: {
        type: Number,
    },
    rate: {
        type: Number,
    },
    luggage: {
        type: Number,
    },
    image: {
        type: String,
    },
});

export const Char = mongoose.model<IChar>("Char", charSchema);

export const validateChar = (char: IChar) => {
    const schema = Joi.object({
        horses: Joi.number().required(),
        speed: Joi.number().required(),
        seats: Joi.number().required(),
        rate: Joi.number().required(),
        luggage: Joi.number().required(),
        name: Joi.string().min(2).required(),
        image: Joi.string().required(),
    });
    return schema.validate(char);
}

