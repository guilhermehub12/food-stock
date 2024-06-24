const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required: true,
        unique:true
    },
    quantity:{
        type: Number,
        required: true,
        min: 0
    },
    expirationDate:{
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
});

const Food  = mongoose.model('Food',FoodSchema);
module.exports = Food;