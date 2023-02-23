const mongoose = require("mongoose")
const Detail = mongoose.Schema({
    brandname: String,
    brandiconurl: String,
    links:[{
        lable: String,
        url: String,
    },
    ],
});

module.exports=mongoose.model("detail",Detail)
