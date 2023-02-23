const express = require("express")
const {route} = require("express/lib/application")
const hbs = require("hbs")
const contact = require("../models/contact")
const deatil = require("../models/deatil")
const Services = require("../models/services")
const slider = require("../models/slider")
const routes = express.Router() 
const app = express()

routes.get("/" ,async (req , res)=> {
    const details = await deatil.findById("63f756fc3c228f283babc0af")
    const slides = await slider.find()
    const services = await Services.find()

    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/about" ,async (req , res)=> {
    const details = await deatil.findById("63f756fc3c228f283babc0af")
    res.render("about",{
        details:details
    })
})
routes.get("/services" ,async (req , res)=> {
    const details = await deatil.findById("63f756fc3c228f283babc0af")
    res.render("services",{
        details:details
    })
})
routes.get("/contact%20us" ,async (req , res)=> {
    const details = await deatil.findById("63f756fc3c228f283babc0af")
    res.render("contactus",{
        details:details
    })
})

routes.post("/process-contact", async (req,res)=>{
    

    try{
        const data = await contact.create(req.body)
        console.log("form submitted");
        res.redirect("/")
    }
    catch(e){
        console.log(e);
        res.redirect("/")
    }

})

module.exports=routes 