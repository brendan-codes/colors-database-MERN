const mongoose = require('mongoose');


const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Color name must be 2 or more characters!"]
    },
    hex: {
        type: String,
        required: true
    }
}, {timestamps: true})


mongoose.model("Color", ColorSchema);
