const express=require("express")
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(require("cors")())

let valutdata=require("./data.json")

app.get("/user/data",(req,res)=>{

    res.status(200).json(valutdata)
    

})
app.post("/user/update",(req,res)=>{

    if(   ! req.body.data){
        res.json({success:false}).status(200)
   return
    }
    valutdata=req.body.data
    res.json({success:true}).status(200)
    return 
})
app.listen(5000,()=>console.log("port running at 5000"))
