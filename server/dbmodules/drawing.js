const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const DrawingSchema = new mongoose.Schema({
        title:String,
        artist:String,
        art:String,
});

const DrawingModel = model('Drawing', DrawingSchema);

module.exports = DrawingModel;