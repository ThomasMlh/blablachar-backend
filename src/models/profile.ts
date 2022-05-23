import mongoose, { Schema } from "mongoose";
import { IProfile } from "../types";
import Joi from "joi";

export const profileSchema = new Schema({
    departure: {
        type: String,
        minlength: 2
    },
    arrival: {
        type: String,
        minlength: 2
    },
    day_departure: {
        type: String,
        minlength: 2
    },
    month_departure: {
        type: String,
        minlength: 2
    },
    name: {
        type: String,
        minlength: 2
    },
    price: {
        type: Number,
    },
    seats: {
        type: Number,
    },
    char_model: {
        type: String,
        minlength: 2
    },
    luggage: {
        type: Number,
    },
    char_image: {
        type: String,
    },
    char_name: {
        type: String,
    }
})

export const Profile = mongoose.model<IProfile>("Profile", profileSchema);

export const validateProfile = (profile: IProfile) => {
    const schema = Joi.object({
        departure: Joi.string().min(2).required(),
        arrival: Joi.string().min(2).required(),
        day_departure: Joi.string().min(2).required(),
        month_departure: Joi.string().min(2).required(),
        name: Joi.string().min(2).required(),
        price: Joi.number().required(),
        seats: Joi.number().required(),
        char_model: Joi.string().min(2).required(),
        luggage: Joi.number().required(),
        char_image: Joi.string().required(),
        char_name: Joi.string().required(),
    });
    return schema.validate(profile)
}