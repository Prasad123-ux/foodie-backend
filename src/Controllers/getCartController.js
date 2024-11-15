

const { FoodCart } = require("../Modules/cartData")

const getCartController= (req, res)=>{
     console.log(req.body) 
     console.log(req.mail)
    FoodCart.find({email:req.email}).exec()
    .then((users)=>{
        if(users!==null)
        res.status(200).json({ success:true , message:"data found ",data :users})

    }).catch(()=>{
        res.status(404).json({ success:false, message:"you didn't save anything yet"})
    })
    
    
    
}
module.exports={getCartController}