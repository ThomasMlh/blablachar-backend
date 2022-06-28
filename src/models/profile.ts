import mongoose, { Schema } from "mongoose";
import { IProfile } from "../types";
import Joi from "joi";
import { charSchema } from "./char";

export const profileSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    description: {
        type: String,
    },
    trips_made: {
        type: Number,
    },
    trips_achieved: {
        type: Number,
    },
    quality: {
        type: [String],
    },
    image: {
        type: String,
    },
    rate: {
        type: Number,
    },
    char: {
        type: charSchema,
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: "Comment",
    },
});

export const Profile = mongoose.model<IProfile>("Profile", profileSchema);

export const validateProfile = (profile: IProfile) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        age: Joi.number().required(),
        description: Joi.string().min(2).required(),
        trips_made: Joi.number().required(),
        trips_achieved: Joi.number().required(),
        quality: Joi.array().items(Joi.string().min(2).required()),
        image: Joi.string().required(),
        rate: Joi.number().required(),
        char: Joi.object({
            horses: Joi.number().required(),
            speed: Joi.number().required(),
            seats: Joi.number().required(),
            rate: Joi.number().required(),
            luggage: Joi.number().required(),
            name: Joi.string().min(2).required(),
            image: Joi.string().required(),
        }),
        comments: Joi.array().items(Joi.object({
            comment: Joi.string().min(2).required(),
            author: Joi.object({
                name: Joi.string().min(2).required(),
                id: Joi.string().required(),
            })
        }))
    });
    return schema.validate(profile)
}