const express =require("express");
const app =express();
const cors= require("cors");
const dotenv =require("dotenv");
const { application } = require("express");
dotenv.config();
app.use(cors());


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.post("/getReviews",(req,res)=>{
console.log("getALlReviews",req.body.id)    
let id=req.body.id
const db = dbservice.getDbServiceInstance();

const res1=db.getAllReviews(id)
res1.then(data=>res.send(data))
})

app.post("/postReview",(req,res)=>{
    console.log("getALlReviews",req.body.id,req.body.review)    
    let id=req.body.id
    let reviewText=req.body.review
    const db = dbservice.getDbServiceInstance();
    
    const res1=db.getAllReviews(id)
    var reviewsNew
    res1.then((data)=>{reviewsNew=data[0].review+","+reviewText;

    const res2=db.postReview(id,reviewsNew)
    const res3=db.getAllReviews(id)
    res3.then(data=>res.send(data))
    console.log(reviewsNew)

})
    

    
    })
// create 
app.post("/insert",(req,res)=>{
    let id=req.body.id
    let hotelName=req.body.name
    let hotelRating =req.body.rating
    let hotelImage=req.body.Image
    console.log("insertRequestHandler")
    const db = dbservice.getDbServiceInstance();

    const res1=db.insertHotel(id,hotelName,hotelRating,hotelImage)
    res1.then(data=>console.log(data))
    console.log("inserted")
})




// read
app.get("/getAll",(req,res)=>{
    console.log("heregetAllRequest")
    const db = dbservice.getDbServiceInstance();
    const listOfRes=db.getAllData();
   
  listOfRes.then(data=>res.send(data))
 
})



//delete




var mysql = require('mysql');
const dbservice=require("./dbservice")


app.listen(process.env.PORT,()=>{console.log("server is Running")})