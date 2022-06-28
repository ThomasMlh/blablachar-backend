import { Document } from "mongoose";

export interface ITrip extends Document {
    _id?: string,
    departure: string,
    arrival: string,
    day_departure: string,
    month_departure: string,
    name: string,
    price: number,
    char: IChar,
    profile: IProfile,
}

export interface IChar extends Document {
    _id?: string,
    horses: number,
    speed: number,
    seats: number,
    rate: number,
    luggage: number,
    name: string,
    image: string,
}


export interface IProfile extends Document {
    _id?: string,
    name: string,
    age: number,
    description: string,
    trips_made: number,
    trips_achieved: number,
    quality: string[],
    image: string,
    rate: number,
    char: IChar,
    comments: [IComment]
}

export interface IComment extends Document {
    _id?: string,
    comment: string,
    author: {
        id: string,
        name: string,
    },
}
