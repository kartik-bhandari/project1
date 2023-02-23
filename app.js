const express = require("express")
const { path } = require("express/lib/application")
const app = express()
const hbs = require("hbs")
const mongoose = require("mongoose")
const Detail= require("./src/models/deatil")
const Slider = require("./src/models/slider")
const services = require("./src/models/services")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

mongoose.set('strictQuery', false);

const routes = require("./src/routes/main")

app.use("/static", express.static('public'));
app.use("",routes)

app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

mongoose.connect("mongodb+srv://kartikbhandari2003:Xupg6789@project1cluster.8b3lg6n.mongodb.net/project1_men",()=>{
    console.log("db connected")
    // Detail.create({
    //     brandname: "project1",
    //     brandiconurl:"https://static.vecteezy.com/system/resources/previews/004/218/321/original/cute-cat-white-pet-cartoon-character-free-vector.jpg",
    //     links:[
    //     {
    //         lable:"home",
    //         url: "/"
    //     },
    //     {
    //         lable:"about",
    //         url: "/about"
    //     },
    //     {
    //         lable:"services",
    //         url: "/services"
    //     },
    //     {
    //         lable:"contact us",
    //         url: "/contact us"
    //     },
    // ]                                                         
    // })

    // Slider.create([
    //     {
    //     title : "Python",
    //     subtitle : "opiafjo ijfjj jwf j w9j 0j[qwj j iji waqj0[9jijwiiw  nnij nij ]] olahf hfu uahf auf ehf uhwf  ihu iawiuo wf ioh",
    //     imageurl : "https://wallpaperaccess.com/full/8054247.jpg",
    //     classs : "carousel-item active"
    //     },
    //     {
    //     title : "JavaScript",
    //     subtitle : "ahdfuhiolahf hfu uahf auf ehf uhwf  ihu iawiuo wf ioh",
    //     imageurl : "https://wallpaperaccess.com/full/8054257.png",
    //     classs : "carousel-item"
    //     },
    //     {
    //     title : "C++",
    //     subtitle : "hih uoh gha ohghg gh 7g ahdfuhiolahf hfu uahf auf ehf uhwf  ihu iawiuo wf ioh",
    //     imageurl : "https://wallpaperaccess.com/full/8054276.jpg",
    //     classs : "carousel-item "
    //     },
    // ])


    // services.create([
    //     {
    //     iconurl: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1aonp2t_931280b6.jpeg" ,
    //     title: "Example 01",
    //     description: "this is description for example 1",
    //     linktitle: "buy now",
    //     link: "/services"
    //     },
    //     {
    //     iconurl: "https://hips.hearstapps.com/autoweek/assets/s3fs-public/60523009-4.jpg" ,
    //     title: "Example 02",
    //     description: "this is description for example 2",
    //     linktitle: "buy now",
    //     link: "/services"
    //     },
    //     {
    //     iconurl: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/disneys-cars-sup----sup-lightning-mcqueen-stand-up~13793695" ,
    //     title: "Example 03",
    //     description: "this is description for example 3",
    //     linktitle: "buy now",
    //     link: "/services"
    //     },
    //     {
    //     iconurl: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1aonp2t_931280b6.jpeg" ,
    //     title: "Example 01",
    //     description: "this is description for example 1",
    //     linktitle: "buy now",
    //     link: "/services"
    //     },
    //     {
    //     iconurl: "https://hips.hearstapps.com/autoweek/assets/s3fs-public/60523009-4.jpg" ,
    //     title: "Example 02",
    //     description: "this is description for example 2",
    //     linktitle: "buy now",
    //     link: "/services"
    //     },
    //     {
    //     iconurl: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/disneys-cars-sup----sup-lightning-mcqueen-stand-up~13793695" ,
    //     title: "Example 03",
    //     description: "this is description for example 3",
    //     linktitle: "buy now",
    //     link: "/services"
    //     },
    // ])
})

mongoose.con

app.listen(process.env.port | 3000, function(req , res){
    console.log("app started");
})