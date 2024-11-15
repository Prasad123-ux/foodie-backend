const express= require('express')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const { addfoodFavouriteController } = require('../Controllers/addFoodFavourites')
const { checkFavouriteMiddleware } = require('../Middlewares/checkFavouriteMiddleware')
const addFavouritesRoutes= express.Router()
  

addFavouritesRoutes.get('/addFavourites/:id', checkFavouriteMiddleware,  addfoodFavouriteController)


module.exports={addFavouritesRoutes}