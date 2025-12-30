const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const ArtistSchema = new mongoose.Schema({
        name:String,
        description:String
});

const ArtistModel = model('Artist', ArtistSchema);

module.exports = ArtistModel;