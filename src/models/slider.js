const mongoose = require("mongoose");
const Slider = mongoose.Schema({
    title : String,
    subtitle : String,
    imageurl : String,
    classs : String,
})

module.exports = mongoose.model("slider",Slider)