const express=require("express")

const route= express.Router(); 

const fs= require("fs")
let dataString = fs.readFileSync(`${__dirname}/../data.json`,{encoding:"utf-8"})
let data=JSON.parse(dataString)

// let data=[
//     {id:1,name:"p1",price:"100"},
//     {id:2,name:"p2",price:"100"},
//     {id:3,name:"p3",price:"100"},
// ]



// @to get data by perticular key
// route.get("/",(req,res)=>{
    // const{id,name,price}=req.query;
    // let result = data.filter((p)=>{
    //     if(price){
    //         return p.price === parseInt(price);
    //     }
    //     return true;
    // })
    // res.send(data)

    // @if you use "send" so you don't need to use "res.write(json.stringify(data))" and no need to use "res.end()".
// })


//@ GET Request by Id 

route.get("/",(req,res)=>{
    res.send(data)

})

// GET Request
route.get("/:id",(req,res)=>{
    let {id}=req.params
    let numId=parseInt(id)// @convert id string to number
    let product = data.find((p)=>p.id ===numId);
    res.send(product);

})
//@ POST Request
route.post("/",(req,res)=>{
let newProduct={
    id:data.length+1,
    ...req.body,
};
data.push(newProduct);
//@ to push data in data.json file as a json type
fs.writeFileSync(`${__dirname}/../data.json`,JSON.stringify(data),{encoding:"utf-8"})
res.send(newProduct)

})
//@ Delete Request 
route.delete("/:id",(req,res)=>{
let {id}=req.params;
let numId=parseInt(id)
let newData=data.filter((e)=>e.id!==numId)
fs.writeFileSync(`${__dirname}/../data.json`,JSON.stringify(newData),{encoding:"utf-8"})
res.send("Deleted")
// res.sendStatus(202).send(1)
})
//@Patch Request
route.patch("/:id",(req,res)=>{
    let {id}=req.params
    let body=req.body;
    let Udata=data.find((e)=>e.id===parseInt(id))
    if(!Udata){
        res.send("invalid Cradential")
    }
    for(let k in body){
        Udata[k]=body[k]
    }
    fs.writeFileSync(`${__dirname}/../data.json`,JSON.stringify(data),{encoding:"utf-8"})
    res.send(`id ${id} Updated`)
   
})

// route.put("/:id",(req,res)=>{
//     let {id}=req.params
//     let body=req.body
//     let Udata=data.find((e)=>e.id===parseInt(id))
//     if(!Udata){
//         res.send("invalid credential")
//     }
//     for(let i in body){
//         Udata[i]=body[i]
//     }
//     fs.writeFileSync(`${__dirname}/data.json`,JSON.stringify(data),{encoding:"utf-8"})
//     res.send(`id ${id} Updated`)
// })

module.exports=route