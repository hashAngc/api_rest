const costumHeader=(req,res,next)=>{
    try{
        const apiKey = req.headers["api_key"]
        if (apiKey === "rest"){
            next()
        
        }else{
            res.status(401)
            res.send({"error":"unauthorized"})
        }
        
    }catch(error){
        res.status(500)
        res.send({"error":error})
    }
   
}


module.exports = costumHeader