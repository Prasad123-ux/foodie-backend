 const jwt = require('jsonwebtoken')
const { Food } = require('../Modules/users')

 require('dotenv').config()



const cartAuthMiddleware=(req, res, next)=>{
console.log(req.body.token)
    
    const token= req.body.token   
    console.log(token)
    if(token==='undefined'){
        res.status(403).json({message:"Please login "})
    }else{
        
        const decoded= jwt.verify(token , process.env.JWT_TOKEN)
      
         req.email= decoded.email
 
        Food.findOne({email:decoded.email}).exec()
        .then((user)=>{
            if(user!==null){
                
                next()

            }else{
                res.status(404).json({message:"email not registered in database "})
            }

        }).catch((err)=>{
            res.status(404).json({message:err})
        })
        
    }

}
module.exports={cartAuthMiddleware}