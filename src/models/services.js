const mongoose = require("mongoose")
const services = mongoose.Schema({
    iconurl: String,
    title: String,
    description: String,
    linktitle: String,
    link: String
})

module.exports = mongoose.model("services",services)