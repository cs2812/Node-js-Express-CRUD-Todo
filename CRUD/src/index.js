//Import express
const express=require("express")
const productControler=require("./controler/Products.controler")

// use express
const app=express()

app.use(express.json()); // @needed for post request(middleware)
app.use("/product",productControler)

//listen express
app.listen(8000, ()=>{
    console.log("I am listning")
});