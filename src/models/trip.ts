import mongoose, { Schema } from "mongoose";
import { ITrip } from "../types";
import Joi from "joi";
import { charSchema } from "./char";
import { profileSchema } from "./profile";
import { commentSchema } from "./comments";

export const tripSchema = new Schema({
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
        minlength: 1
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
    char: {
        type: charSchema
    },
    profile: {
        type: profileSchema
    },
    comments: {
        type: commentSchema,
    }
})

export const Trip = mongoose.model<ITrip>("Trip", tripSchema);

export const validateTrip = (trip: ITrip) => {
    const schema = Joi.object({
        departure: Joi.string().min(2).required(),
        arrival: Joi.string().min(2).required(),
        day_departure: Joi.string().min(1).required(),
        month_departure: Joi.string().min(2).required(),
        name: Joi.string().min(2).required(),
        price: Joi.number().required(),
        char: Joi.object({
            horses: Joi.number().required(),
            speed: Joi.number().required(),
            seats: Joi.number().required(),
            rate: Joi.number().required(),
            luggage: Joi.number().required(),
            name: Joi.string().min(2).required(),
            image: Joi.string().required(),
        }),
        profile: Joi.object({
            name: Joi.string().required(),
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
            comments: Joi.array()
                .items(Joi.object({
                    comment: Joi.string().min(2).required(),
                    author: Joi.object({
                        name: Joi.string().min(2).required(),
                        id: Joi.string().required(),
                    })
                })),
            })
        });
    return schema.validate(trip)
}