import { Schema, model } from "mongoose"; 

const taskSchema = new Schema({
    name: String,
    description: String,
    tags: Array,
    state: String,
    createdBy: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Task', taskSchema)