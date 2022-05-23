import { Document } from "mongoose";

export interface IProfile extends Document {
    _id?: string;
    departure: string,
    arrival: string,
    day_departure: string,
    month_departure: string,
    name: string,
    price: number,
    seats: number,
    char_model: string,
    luggage: number,
    char_image: string,
    char_name: string
}