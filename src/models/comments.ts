import { Schema } from "mongoose";

export const commentSchema = new Schema({
    comment: {
        type: String,
        minlength: 2
    },
    author: {
        type: Object,
        name: {
            type: String,
            minlength: 2,
        },
        id: {
            type: String,
        }
    }
});
