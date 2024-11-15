
const {ProductData}= require('../Modules/Products')
const {foodFavourites}= require('../Modules/foodFavourites')



const addfoodFavouriteController=(req, res)=>{
    

    ProductData.findOne({_id:req.params.id}).exec()
    .then((item)=>{
        console.log(item)
        if(item!==null){
            
         const  foodFavouriteObject=new foodFavourites({ 
    email:req.email,
    id:req.body.id,
    product_name:item.product_name,
    product_category:item.product_category,
    product_description:item.product_description,
    product_rating:item.product_rating,
    shop_address:item.shop_address,
    product_price:item.product_price,
    product_img:item.product_images.image1,
    product_delivery_time:item.product_deliveryTime,
           


            })
            foodFavouriteObject.save().then(()=>{
        res.status(200).json({message:'Item added in favourites'})
            }).catch((err)=>{
                res.status(404).json({message:"Internal server Error", err:err})

            })
        }

    })
}

module.exports={addfoodFavouriteController}