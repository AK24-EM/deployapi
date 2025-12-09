import express from "express"
import cors from "cors"
import CheckcityCount from "./node_modules/cities-count/index.js"
const app = express()
app.use(cors)

let users = [{name :"Aayush" , city:"mumbai" } , {name:"Tejas" , city:"pune"}]

app.get("/api/v1/users" , (re,res)=>{
    let count = CheckcityCount(users , "mumbai")
    console.log(count)
    res.send(users)

})
app.listen(8000 , '0.0.0.0',()=>{
    console.log("server up and running")

})
